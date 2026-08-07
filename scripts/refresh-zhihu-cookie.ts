// 扫码登录知乎，刷新热榜抓取所需的登录 cookie（z_c0 会话）。
//
// 用法（本机执行，需已安装 deno 与 playwright 浏览器）：
//   1. deno install -A npm:playwright && npx playwright install chromium   # 首次
//   2. deno run -A scripts/refresh-zhihu-cookie.ts                          # 弹窗扫码
//   3. 将新 cookie 更新到仓库 Secret（供 GitHub Actions 使用）：
//      gh secret set ZHIHU_COOKIE -R nateafish/trending-in-one \
//        --body "$(cat /tmp/zhihu_new_cookie.txt)"
//   4. 触发一次 zhihu-questions workflow（或等下一个整点），README 顶部的
//      cookie 状态会显示为 ✅ 有效。
//
// 脚本会：
//   - 弹出可见浏览器展示知乎登录二维码；
//   - 检测到 z_c0 登录票据后，实测热榜接口确认 cookie 有效；
//   - 将 cookie 写入 /tmp/zhihu_new_cookie.txt；
//   - 更新 raw/zhihu-cookie-status.json 的 updatedAt / valid 字段。
import { chromium } from "npm:playwright@1.62.1";

const COOKIE_STATUS_PATH = "raw/zhihu-cookie-status.json";

function fmt(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${
    pad(d.getSeconds())
  }`;
}

async function loadStatus(): Promise<Record<string, unknown>> {
  try {
    return JSON.parse(await Deno.readTextFile(COOKIE_STATUS_PATH));
  } catch {
    return {};
  }
}

async function main() {
  console.log("启动浏览器（可见窗口），请用手机知乎 App 扫码登录...");
  const browser = await chromium.launch({ headless: false, args: ["--no-sandbox"] });
  const ctx = await browser.newContext({ locale: "zh-CN" });
  const page = await ctx.newPage();

  try {
    await page.goto("https://www.zhihu.com/signin", { waitUntil: "domcontentloaded", timeout: 45000 });
  } catch (err) {
    console.warn(`导航警告：${(err as Error).message ?? err}`);
  }

  // 备用：保存二维码截图（浏览器窗口不可见时可打开图片扫码）
  try {
    const canvas = page.locator("canvas.Qrcode-qrcode").first();
    if (await canvas.count() > 0) {
      await canvas.screenshot({ path: "/tmp/zhihu_qrcode.png" });
      console.log("二维码已保存到 /tmp/zhihu_qrcode.png");
    }
  } catch {
    // 忽略截图失败
  }

  // 轮询等待登录票据 z_c0
  let cookieStr = "";
  const deadline = Date.now() + 180 * 1000; // 3 分钟
  while (Date.now() < deadline) {
    const cookies = await ctx.cookies();
    if (cookies.some((c) => c.name === "z_c0")) {
      cookieStr = cookies.map((c) => `${c.name}=${c.value}`).join("; ");
      break;
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
  if (!cookieStr) {
    console.error("超时未检测到登录，已放弃。请重试。");
    await browser.close();
    Deno.exit(1);
  }
  console.log("✅ 登录成功，正在验证热榜接口...");
  await new Promise((r) => setTimeout(r, 6000));

  const res = await fetch("https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=3", {
    headers: {
      "cookie": cookieStr,
      "referer": "https://www.zhihu.com/hot",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
    },
  });
  const valid = res.status === 200;
  const nowStr = fmt(new Date());
  const note = valid ? "cookie 有效，热榜数据正常" : `接口返回 ${res.status}，cookie 可能仍无效`;

  // 更新状态文件（保留 history，覆盖当前）
  const status = { ...(await loadStatus()), updatedAt: nowStr, checkedAt: nowStr, valid, note };
  await Deno.writeTextFile(COOKIE_STATUS_PATH, JSON.stringify(status, null, 2));

  await Deno.writeTextFile("/tmp/zhihu_new_cookie.txt", cookieStr);

  console.log(valid ? `✅ 新 cookie 已验证有效（${note}）` : `❌ 验证失败：${note}`);
  console.log("新 cookie 已写入 /tmp/zhihu_new_cookie.txt");
  console.log("下一步更新 GitHub Secret：");
  console.log('  gh secret set ZHIHU_COOKIE -R nateafish/trending-in-one --body "$(cat /tmp/zhihu_new_cookie.txt)"');

  await browser.close();
  console.log("浏览器已关闭。");
}

await main();
