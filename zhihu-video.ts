#!/usr/bin/env -S deno run --unstable --allow-net --allow-read --allow-write --allow-env --import-map=import_map.json
// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { format } from "@std/datetime";
import { join } from "@std/path";
import { exists } from "@std/fs";

import type { Question, ZhihuVideoList } from "./types.ts";
import { createArchive4Video, createReadme4Video, fetchWithRetry, mergeQuestions } from "./utils.ts";

// ⚠️ 知乎视频热榜已下线（2025 年中起）：zvideo 接口虽仍返回 200，但内容与普通热榜
// questions 重复（link 均指向 question 页），无独立视频数据，故 main.ts 中保持停用。
// 若知乎恢复视频热榜，可通过设置 ZHIHU_COOKIE 重新启用本文件。
const ZHIHU_COOKIE = Deno.env.get("ZHIHU_COOKIE")?.trim() ?? "";

const yyyyMMdd = format(new Date(), "yyyy-MM-dd");
const fullPath = join("raw/zhihu-video", `${yyyyMMdd}.json`);

let questionsAll: Question[] | null = null;

try {
  const response = await fetchWithRetry(
    "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/zvideo?limit=100",
    {
      headers: {
        "cookie": ZHIHU_COOKIE,
        "x-api-version": "3.0.76",
        "referer": "https://www.zhihu.com/hot",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
      },
    },
  );
  if (response && response.ok) {
    const result: ZhihuVideoList = await response.json();
    const questions: Question[] = result.data.map((x) => ({
      title: x.target.title_area.text,
      url: x.target.link.url,
    }));

    let questionsAlreadyDownload: Question[] = [];
    if (await exists(fullPath)) {
      const content = await Deno.readTextFile(fullPath);
      questionsAlreadyDownload = JSON.parse(content);
    }

    questionsAll = mergeQuestions(questions, questionsAlreadyDownload);
  } else if (!ZHIHU_COOKIE) {
    console.error("[zhihu-video] 未配置 ZHIHU_COOKIE，本轮跳过。");
  }
} catch (err) {
  console.error(`[zhihu-video] 处理失败，本轮跳过：${(err as Error).message ?? err}`);
}

export const zhihuVideoData = questionsAll ?? [];

export async function zhihuVideo() {
  if (questionsAll == null) {
    return;
  }
  // 保存原始数据
  await Deno.writeTextFile(fullPath, JSON.stringify(questionsAll));

  // 更新 README.md
  const readme = await createReadme4Video(questionsAll);
  await Deno.writeTextFile("./README.md", readme);

  // 更新 archives
  const archiveText = createArchive4Video(questionsAll, yyyyMMdd);
  const archivePath = join("archives/zhihu-video", `${yyyyMMdd}.md`);
  await Deno.writeTextFile(archivePath, archiveText);
}

if (import.meta.main) {
  await zhihuVideo();
}
