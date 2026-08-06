import { zhihuVideo } from "./zhihu-video.ts";
// import { zhihuQuestions } from "./zhihu-questions.ts";
import { zhihuSearch } from "./zhihu-search.ts";
import { weiboSearch } from "./weibo-search.ts";
import { toutiaoSearch } from "./toutiao-search.ts";

export async function init() {
  // await zhihuVideo();
  // await zhihuQuestions();
  for (const fn of [zhihuSearch, weiboSearch, toutiaoSearch]) {
    try {
      await fn();
    } catch (err) {
      console.error(`[main] ${fn.name} 失败：${(err as Error).message ?? err}`);
    }
  }
}

init();
