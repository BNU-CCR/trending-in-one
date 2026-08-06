#!/usr/bin/env -S deno run --unstable --allow-net --allow-read --allow-write --import-map=import_map.json
// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { format } from "@std/datetime";
import { join } from "@std/path";
import { exists } from "@std/fs";

import type { SearchWord, TopSearch } from "./types.ts";
import { createArchive4Search, createReadme4Search, fetchWithRetry, mergeWords } from "./utils.ts";

const yyyyMMdd = format(new Date(), "yyyy-MM-dd");
const fullPath = join("raw/zhihu-search", `${yyyyMMdd}.json`);

let wordsAll: SearchWord[] | null = null;

try {
  const response = await fetchWithRetry("https://www.zhihu.com/api/v4/search/recommend_query/v2");
  if (response && response.ok) {
    const result: TopSearch = await response.json();
    const query = result.recommend_queries.queries;

    let wordsAlreadyDownload: SearchWord[] = [];
    if (await exists(fullPath)) {
      const content = await Deno.readTextFile(fullPath);
      wordsAlreadyDownload = JSON.parse(content);
    }

    wordsAll = mergeWords(query, wordsAlreadyDownload);
  }
} catch (err) {
  console.error(`[zhihu-search] 处理失败，本轮跳过：${(err as Error).message ?? err}`);
}

export async function zhihuSearch() {
  if (wordsAll == null) {
    return;
  }
  // 保存原始数据
  await Deno.writeTextFile(fullPath, JSON.stringify(wordsAll));

  // 更新 README.md
  const readme = await createReadme4Search(wordsAll);
  await Deno.writeTextFile("./README.md", readme);

  // 更新 archives
  const archiveText = createArchive4Search(wordsAll, yyyyMMdd);
  const archivePath = join("archives/zhihu-search", `${yyyyMMdd}.md`);
  await Deno.writeTextFile(archivePath, archiveText);
}
