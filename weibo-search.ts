#!/usr/bin/env -S deno run --unstable --allow-net --allow-read --allow-write --import-map=import_map.json
// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { format } from "@std/datetime";
import { join } from "@std/path";
import { exists } from "@std/fs";

import type { Word } from "./types.ts";
import { createArchive4Weibo, createReadme4Weibo, fetchWithRetry, mergeWords4Weibo } from "./utils.ts";

const regexp = /<a href="(\/weibo\?q=[^"]+)".*?>(.+)<\/a>/g;

const yyyyMMdd = format(new Date(), "yyyy-MM-dd");
const fullPath = join("raw/weibo-search", `${yyyyMMdd}.json`);

let queswordsAll: Word[] | null = null;

try {
  const response = await fetchWithRetry("https://s.weibo.com/top/summary", {
    headers: {
      "Cookie": "SUB=_2AkMVdRtlf8NxqwJRmfoWy2_lb4V0yQvEieKjKeq-JRMxHRl-yT8XqmYatRB6PvU1ijEk4CykabQQvFhJAy31x99v4Ejs;",
    },
  });
  if (response && response.ok) {
    const result: string = await response.text();

    const matches = result.matchAll(regexp);

    const words: Word[] = Array.from(matches).map((x) => ({
      url: x[1],
      title: x[2],
    }));

    let wordsAlreadyDownload: Word[] = [];
    if (await exists(fullPath)) {
      const content = await Deno.readTextFile(fullPath);
      wordsAlreadyDownload = JSON.parse(content);
    }

    queswordsAll = mergeWords4Weibo(words, wordsAlreadyDownload);
  }
} catch (err) {
  console.error(`[weibo-search] 处理失败，本轮跳过：${(err as Error).message ?? err}`);
}

export const weiboSearchData = (queswordsAll ?? []).map((x) => {
  x.realurl = `https://s.weibo.com/${x.url}`;
  return x;
});

export async function weiboSearch() {
  if (queswordsAll == null) {
    return;
  }
  // 保存原始数据
  await Deno.writeTextFile(fullPath, JSON.stringify(queswordsAll));

  // 更新 README.md
  const readme = await createReadme4Weibo(queswordsAll);
  await Deno.writeTextFile("./README.md", readme);

  // 更新 archives
  const archiveText = createArchive4Weibo(queswordsAll, yyyyMMdd);
  const archivePath = join("archives/weibo-search", `${yyyyMMdd}.md`);
  await Deno.writeTextFile(archivePath, archiveText);
}

if (import.meta.main) {
  await weiboSearch();
}
