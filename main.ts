// 知乎视频热榜已下线：zvideo 接口现返回普通热榜内容（与 questions 重复），故保持停用。
// import { zhihuVideo } from "./zhihu-video.ts";
import { zhihuQuestions } from "./zhihu-questions.ts";
import { zhihuSearch } from "./zhihu-search.ts";
import { weiboSearch } from "./weibo-search.ts";
import { toutiaoSearch } from "./toutiao-search.ts";

export async function init() {
  for (const fn of [zhihuQuestions, zhihuSearch, weiboSearch, toutiaoSearch]) {
    try {
      await fn();
    } catch (err) {
      console.error(`[main] ${fn.name} 失败：${(err as Error).message ?? err}`);
    }
  }
}

init();
