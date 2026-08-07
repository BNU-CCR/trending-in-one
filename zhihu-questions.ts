#!/usr/bin/env -S deno run --unstable --allow-net --allow-read --allow-write --allow-env --import-map=import_map.json
// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { format } from "@std/datetime";
import { join } from "@std/path";
import { exists } from "@std/fs";

import type { Question, ZhihuCookieStatus, ZhihuQuestionList } from "./types.ts";
import {
  createArchive4Question,
  createReadme4Cookie,
  createReadme4Question,
  fetchWithRetry,
  mergeQuestions,
} from "./utils.ts";

// 知乎热榜接口自 2025-05 起强制登录态，无有效 z_c0 会话时返回 401。
// cookie 从环境变量 ZHIHU_COOKIE 注入（GitHub Actions Secrets，避免明文入库），
// 未配置时本轮跳过，不影响其他数据源。cookie 过期后用 scripts/refresh-zhihu-cookie.ts 扫码重新获取。
const ZHIHU_COOKIE = Deno.env.get("ZHIHU_COOKIE")?.trim() ?? "";

const yyyyMMdd = format(new Date(), "yyyy-MM-dd");
const fullPath = join("raw/zhihu-questions", `${yyyyMMdd}.json`);
const cookieStatusPath = "raw/zhihu-cookie-status.json";

const now = () => format(new Date(), "yyyy-MM-dd HH:mm:ss");

function defaultCookieStatus(): ZhihuCookieStatus {
  return {
    updatedAt: "从未刷新",
    checkedAt: "",
    valid: false,
    note: "尚未检测",
  };
}

async function loadCookieStatus(): Promise<ZhihuCookieStatus> {
  try {
    if (await exists(cookieStatusPath)) {
      const parsed = JSON.parse(await Deno.readTextFile(cookieStatusPath)) as ZhihuCookieStatus;
      return { ...defaultCookieStatus(), ...parsed };
    }
  } catch (err) {
    console.error(`[zhihu-questions] 读取 cookie 状态失败：${(err as Error).message ?? err}`);
  }
  return defaultCookieStatus();
}

let questionsAll: Question[] | null = null;

try {
  const response = await fetchWithRetry(
    "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=100",
    {
      headers: {
        "cookie": ZHIHU_COOKIE,
        "referer": "https://www.zhihu.com/hot",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
      },
    },
  );
  if (response && response.ok) {
    const result: ZhihuQuestionList = await response.json();
    const questions: Question[] = result.data.map((x) => ({
      title: x.target.title,
      url: `https://www.zhihu.com/question/${x.target.id}`,
    }));

    let questionsAlreadyDownload: Question[] = [];
    if (await exists(fullPath)) {
      const content = await Deno.readTextFile(fullPath);
      questionsAlreadyDownload = JSON.parse(content);
    }

    questionsAll = mergeQuestions(questions, questionsAlreadyDownload);
  } else if (!ZHIHU_COOKIE) {
    console.error("[zhihu-questions] 未配置 ZHIHU_COOKIE，本轮跳过。");
  }
} catch (err) {
  console.error(`[zhihu-questions] 处理失败，本轮跳过：${(err as Error).message ?? err}`);
}

export const zhihuQuestionData = questionsAll ?? [];

export async function zhihuQuestions() {
  // 记录 cookie 健康状态，供 README 顶部展示
  const cookieStatus = await loadCookieStatus();
  cookieStatus.checkedAt = now();
  if (questionsAll != null) {
    cookieStatus.valid = true;
    cookieStatus.note = "cookie 有效，热榜数据正常";
  } else if (!ZHIHU_COOKIE) {
    cookieStatus.valid = false;
    cookieStatus.note = "未配置 ZHIHU_COOKIE，热榜未抓取";
  } else {
    cookieStatus.valid = false;
    cookieStatus.note = "cookie 已失效或接口异常，请运行 scripts/refresh-zhihu-cookie.ts 刷新";
  }
  await Deno.writeTextFile(cookieStatusPath, JSON.stringify(cookieStatus, null, 2));

  if (questionsAll == null) {
    // 本轮无数据，仍更新 README 中的 cookie 状态块
    const readme = await createReadme4Cookie(cookieStatus);
    await Deno.writeTextFile("./README.md", readme);
    return;
  }

  // 保存原始数据
  await Deno.writeTextFile(fullPath, JSON.stringify(questionsAll));

  // 更新 README.md（热榜 + cookie 状态）
  let readme = await createReadme4Question(questionsAll);
  readme = await createReadme4Cookie(cookieStatus, readme);
  await Deno.writeTextFile("./README.md", readme);

  // 更新 archives
  const archiveText = createArchive4Question(questionsAll, yyyyMMdd);
  const archivePath = join("archives/zhihu-questions", `${yyyyMMdd}.md`);
  await Deno.writeTextFile(archivePath, archiveText);
}

if (import.meta.main) {
  await zhihuQuestions();
}
