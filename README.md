# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-19 21:11:15

<!-- END ZHIHUCOOKIE -->

## 相关项目

- [知乎热门视频](https://github.com/justjavac/zhihu-trending-hot-video)
- [知乎热搜榜](https://github.com/justjavac/zhihu-trending-top-search)
- [知乎热门话题](https://github.com/justjavac/zhihu-trending-hot-questions)
- [微博热搜榜](https://github.com/justjavac/weibo-trending-hot-search)

## 知乎 Cookie 维护

知乎热榜接口自 2025-05 起要求登录态，抓取依赖有效的 `z_c0` 会话 cookie。cookie 保存在 GitHub Actions Secret
`ZHIHU_COOKIE` 中（不写入代码库）。本仓库每小时抓取时都会自动检测 cookie 有效性，并在此 README 顶部显示状态：

- `✅ 有效` —— 热榜数据正常抓取；
- `❌ 已失效` —— 需要重新扫码获取新 cookie。

**刷新步骤**（每次 cookie 失效时执行一次）：

```bash
# 1. 扫码登录并验证新 cookie
deno run -A scripts/refresh-zhihu-cookie.ts

# 2. 把新 cookie 更新到仓库 Secret
gh secret set ZHIHU_COOKIE -R nateafish/trending-in-one \
  --body "$(cat /tmp/zhihu_new_cookie.txt)"

# 3. 手动触发一次抓取，验证 README 顶部状态变为 ✅
gh workflow run "zhihu-questions update" -R nateafish/trending-in-one
```

首次使用需安装 playwright 浏览器：`npx playwright install chromium`。

## 今日头条热搜

<!-- BEGIN TOUTIAO -->
<!-- 最后更新时间 Fri Nov 20 2026 04:56:48 GMT+0800 (China Standard Time) -->

1. [中俄美元首和平宣言](https://so.toutiao.com/search?keyword=中俄美元首和平宣言)
1. [王毅到机场送别特朗普](https://so.toutiao.com/search?keyword=王毅到机场送别特朗普)
1. [亚太同心 共话合作新愿景](https://so.toutiao.com/search?keyword=亚太同心%20共话合作新愿景)
1. [深圳市民在街头偶遇多国政要](https://so.toutiao.com/search?keyword=深圳市民在街头偶遇多国政要)
1. [中方回应高市早苗礼宾安排](https://so.toutiao.com/search?keyword=中方回应高市早苗礼宾安排)
1. [睡前有5种表现要警惕脑梗](https://so.toutiao.com/search?keyword=睡前有5种表现要警惕脑梗)
1. [马斯克曾坐高铁到西安看兵马俑](https://so.toutiao.com/search?keyword=马斯克曾坐高铁到西安看兵马俑)
1. [特朗普离深登机时做挥拳动作](https://so.toutiao.com/search?keyword=特朗普离深登机时做挥拳动作)
1. [一湾红树林 向亚太讲述“共生”之道](https://so.toutiao.com/search?keyword=一湾红树林%20向亚太讲述“共生”之道)
1. [APEC宴会桌布置设计感拉满](https://so.toutiao.com/search?keyword=APEC宴会桌布置设计感拉满)
1. [官方辟谣要求基金公司上报AI敞口](https://so.toutiao.com/search?keyword=官方辟谣要求基金公司上报AI敞口)
1. [马斯克在空军一号看中美元首互动](https://so.toutiao.com/search?keyword=马斯克在空军一号看中美元首互动)
1. [牛肉为什么突然贵了](https://so.toutiao.com/search?keyword=牛肉为什么突然贵了)
1. [华为新机薄出新高度](https://so.toutiao.com/search?keyword=华为新机薄出新高度)
1. [特朗普说美国不支持“台独”](https://so.toutiao.com/search?keyword=特朗普说美国不支持“台独”)
1. [普京用中文对与会者说谢谢](https://so.toutiao.com/search?keyword=普京用中文对与会者说谢谢)
1. [美再度收紧中国芯片海外代工](https://so.toutiao.com/search?keyword=美再度收紧中国芯片海外代工)
1. [王毅送别美俄元首后举行记者会](https://so.toutiao.com/search?keyword=王毅送别美俄元首后举行记者会)
1. [DeepSeek二轮融资出资方曝光](https://so.toutiao.com/search?keyword=DeepSeek二轮融资出资方曝光)
1. [泰国记者来中国买买买直呼没钱了](https://so.toutiao.com/search?keyword=泰国记者来中国买买买直呼没钱了)
1. [特朗普和普京会晤时开了个玩笑](https://so.toutiao.com/search?keyword=特朗普和普京会晤时开了个玩笑)
1. [北大时期张泉灵美成女儿国国王了](https://so.toutiao.com/search?keyword=北大时期张泉灵美成女儿国国王了)
1. [飞了49年旅行者1号抵达1光日](https://so.toutiao.com/search?keyword=飞了49年旅行者1号抵达1光日)
1. [特朗普：请中国继续保持强大](https://so.toutiao.com/search?keyword=特朗普：请中国继续保持强大)
1. [姚安娜摆摊卖瓷器被游客砍价](https://so.toutiao.com/search?keyword=姚安娜摆摊卖瓷器被游客砍价)
1. [女子照料患癌男友并转走29万](https://so.toutiao.com/search?keyword=女子照料患癌男友并转走29万)
1. [普京：难怪您会选这里举办APEC](https://so.toutiao.com/search?keyword=普京：难怪您会选这里举办APEC)
1. [明年起职称评审管理新规将施行](https://so.toutiao.com/search?keyword=明年起职称评审管理新规将施行)
1. [叶连平将成为“大体老师”](https://so.toutiao.com/search?keyword=叶连平将成为“大体老师”)
1. [特朗普沉浸式欣赏深圳的夜](https://so.toutiao.com/search?keyword=特朗普沉浸式欣赏深圳的夜)
1. [比亚迪发布折叠方向盘](https://so.toutiao.com/search?keyword=比亚迪发布折叠方向盘)
1. [黄金价格由什么决定](https://so.toutiao.com/search?keyword=黄金价格由什么决定)
1. [专家：中俄美会晤释放强力积极信号](https://so.toutiao.com/search?keyword=专家：中俄美会晤释放强力积极信号)
1. [方程豹钛9正式上市](https://so.toutiao.com/search?keyword=方程豹钛9正式上市)
1. [妈妈呼喊女儿被骂不准外地人随便叫](https://so.toutiao.com/search?keyword=妈妈呼喊女儿被骂不准外地人随便叫)
1. [普京随行副官携带核公文包](https://so.toutiao.com/search?keyword=普京随行副官携带核公文包)
1. [当方向盘可以收纳 SUV座舱会变啥样](https://so.toutiao.com/search?keyword=当方向盘可以收纳%20SUV座舱会变啥样)
1. [王菲时隔17年再唱《爱笑的天使》](https://so.toutiao.com/search?keyword=王菲时隔17年再唱《爱笑的天使》)
1. [特朗普感激中国](https://so.toutiao.com/search?keyword=特朗普感激中国)
1. [比亚迪发布DMS超级混动全能平台](https://so.toutiao.com/search?keyword=比亚迪发布DMS超级混动全能平台)
1. [男子饭后胸闷查出三根冠状动脉堵塞](https://so.toutiao.com/search?keyword=男子饭后胸闷查出三根冠状动脉堵塞)
1. [普京乘电梯时主动礼让文莱苏丹](https://so.toutiao.com/search?keyword=普京乘电梯时主动礼让文莱苏丹)
1. [财信证券：A股政策底已确认](https://so.toutiao.com/search?keyword=财信证券：A股政策底已确认)
1. [乌军为何反复袭击克里米亚大桥](https://so.toutiao.com/search?keyword=乌军为何反复袭击克里米亚大桥)
1. [中俄美元首同框](https://so.toutiao.com/search?keyword=中俄美元首同框)
1. [蒋欣杨采钰同框](https://so.toutiao.com/search?keyword=蒋欣杨采钰同框)
1. [2028年黄金重返5600美元靠谱吗](https://so.toutiao.com/search?keyword=2028年黄金重返5600美元靠谱吗)
1. [美过渡版“空军一号”有何槽点](https://so.toutiao.com/search?keyword=美过渡版“空军一号”有何槽点)
1. [葡媒：C罗的致敬仪式像葬礼](https://so.toutiao.com/search?keyword=葡媒：C罗的致敬仪式像葬礼)
1. [马天宇回忆原生家庭崩溃大哭](https://so.toutiao.com/search?keyword=马天宇回忆原生家庭崩溃大哭)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Nov 19 2026 20:56:38 GMT+0800 (China Standard Time) -->

1. [中俄美三国元首会晤](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4)
1. [中俄美元首发表和平宣言](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%8F%91%E8%A1%A8%E5%92%8C%E5%B9%B3%E5%AE%A3%E8%A8%80)
1. [GTA6正式发布](https://www.zhihu.com/search?q=GTA6%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [高市早苗抵达深圳](https://www.zhihu.com/search?q=%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3)
1. [爱奇艺或将触发退市警告](https://www.zhihu.com/search?q=%E7%88%B1%E5%A5%87%E8%89%BA%E6%88%96%E5%B0%86%E8%A7%A6%E5%8F%91%E9%80%80%E5%B8%82%E8%AD%A6%E5%91%8A)
1. [知乎数据开放平台新玩法](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%95%B0%E6%8D%AE%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E6%96%B0%E7%8E%A9%E6%B3%95)
1. [马斯克称是中国的超级粉丝](https://www.zhihu.com/search?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E6%98%AF%E4%B8%AD%E5%9B%BD%E7%9A%84%E8%B6%85%E7%BA%A7%E7%B2%89%E4%B8%9D)
1. [特朗普说美国不支持台独](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%BE%8E%E5%9B%BD%E4%B8%8D%E6%94%AF%E6%8C%81%E5%8F%B0%E7%8B%AC)
1. [传腾讯内部空前危机感](https://www.zhihu.com/search?q=%E4%BC%A0%E8%85%BE%E8%AE%AF%E5%86%85%E9%83%A8%E7%A9%BA%E5%89%8D%E5%8D%B1%E6%9C%BA%E6%84%9F)
1. [APEC世纪晚宴菜单曝光](https://www.zhihu.com/search?q=APEC%E4%B8%96%E7%BA%AA%E6%99%9A%E5%AE%B4%E8%8F%9C%E5%8D%95%E6%9B%9D%E5%85%89)
1. [知乎智能搜索全新上线](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2%E5%85%A8%E6%96%B0%E4%B8%8A%E7%BA%BF)
1. [英伟达将不再向中国销售H200](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B0%86%E4%B8%8D%E5%86%8D%E5%90%91%E4%B8%AD%E5%9B%BD%E9%94%80%E5%94%AEH200)
1. [中俄美元首同框](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%90%8C%E6%A1%86)
1. [2026深圳APEC峰会](https://www.zhihu.com/search?q=2026%E6%B7%B1%E5%9C%B3APEC%E5%B3%B0%E4%BC%9A)
1. [黄仁勋称愿重返英伟达任CEO](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E6%84%BF%E9%87%8D%E8%BF%94%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%BB%BBCEO)
1. [失业男子断供房贷被判非恶意断供](https://www.zhihu.com/search?q=%E5%A4%B1%E4%B8%9A%E7%94%B7%E5%AD%90%E6%96%AD%E4%BE%9B%E6%88%BF%E8%B4%B7%E8%A2%AB%E5%88%A4%E9%9D%9E%E6%81%B6%E6%84%8F%E6%96%AD%E4%BE%9B)
1. [DeepSeek调整对话上限长度](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4%E5%AF%B9%E8%AF%9D%E4%B8%8A%E9%99%90%E9%95%BF%E5%BA%A6)
1. [美国总统特朗普抵达深圳](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E6%80%BB%E7%BB%9F%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3)
1. [《GTA6》媒体评分解禁](https://www.zhihu.com/search?q=%E3%80%8AGTA6%E3%80%8B%E5%AA%92%E4%BD%93%E8%AF%84%E5%88%86%E8%A7%A3%E7%A6%81)
1. [中俄美元首将在深圳会晤](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%B0%86%E5%9C%A8%E6%B7%B1%E5%9C%B3%E4%BC%9A%E6%99%A4)
1. [雷军APEC发言](https://www.zhihu.com/search?q=%E9%9B%B7%E5%86%9BAPEC%E5%8F%91%E8%A8%80)
1. [农民工帮转讨薪网帖获刑4年](https://www.zhihu.com/search?q=%E5%86%9C%E6%B0%91%E5%B7%A5%E5%B8%AE%E8%BD%AC%E8%AE%A8%E8%96%AA%E7%BD%91%E5%B8%96%E8%8E%B7%E5%88%914%E5%B9%B4)
1. [马斯克称缺席纽约峰会将在中国](https://www.zhihu.com/search?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E7%BC%BA%E5%B8%AD%E7%BA%BD%E7%BA%A6%E5%B3%B0%E4%BC%9A%E5%B0%86%E5%9C%A8%E4%B8%AD%E5%9B%BD)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Nov 19 2026 21:11:15 GMT+0800 (China Standard Time) -->

1. [中俄美元首发表和平宣言，三国元首重申核战争打不赢也打不得，哪些信息值得重点关注？](https://www.zhihu.com/question/2106822157141534200)
1. [为什么大家这么关注APEC会议？](https://www.zhihu.com/question/2105936986515171000)
1. [中俄美元首同框，有哪些意义？对国际局势有哪些影响？](https://www.zhihu.com/question/2106665457826775000)
1. [美国总统特朗普称美国不支持「台独」，这一发言释放了哪些信号？](https://www.zhihu.com/question/2106816145466417200)
1. [腾讯控股公布微信 QQ 月活差 9 亿，为什么腾讯坚持留着 QQ 不合并？QQ 还有哪些市场？](https://www.zhihu.com/question/2106674294499402500)
1. [马斯克盛赞中国，直言中美合作越多越好，并表示特斯拉会继续在中国提高产量，如何看待他这一发言？](https://www.zhihu.com/question/2106751822610133200)
1. [一根 1m 长的玻璃棒，摔到地上断成 3 段，最短一段的平均值是多少？](https://www.zhihu.com/question/507262676)
1. [为什么快到路口的时候，经常有车辆急加速（时速70甚至80公里）从左转车道往直行车道上挤？](https://www.zhihu.com/question/1025508257)
1. [如何评价一见 auto 的文章《理想宁德，后会友期》？宁德向理想一天发三封催款邮件，其中出了什么问题？](https://www.zhihu.com/question/2106653014534706200)
1. [国台办回应「建议 2032 年两岸统一货币」，称只要利于两岸关系和平发展都欢迎，统一货币会有哪些影响？](https://www.zhihu.com/question/2106651560688052200)
1. [男朋友一被领导说就离职，频繁裸辞后长期空窗，是我太计较吗？](https://www.zhihu.com/question/2105339041600350000)
1. [离婚前男方将游戏账号以 88 万卖给朋友，女方要求分割，法院判决 2:1 比例分，如何从法律角度解读？](https://www.zhihu.com/question/2106406907846182100)
1. [安徽霍邱拆墙让路老人的女儿否认因买新车拆墙，到底什么情况？后续调查重点是什么？](https://www.zhihu.com/question/2106326337359197400)
1. [前中国女子体操运动员芦玉菲自曝被单位欠缴91个月社保，最新回应已补缴完成，如何评价？](https://www.zhihu.com/question/2106508372249931800)
1. [怎么看DeepSeek API 联网搜索与抓页改为免费？](https://www.zhihu.com/question/2106672632099758300)
1. [美军三航母扎堆阿拉伯海会对伊朗重新开战吗？](https://www.zhihu.com/question/2105777754130101800)
1. [OpenAI 宣布为全球多达 20 万科学家免费提供前沿模型访问，如何理解这一动作，可能带来哪些影响？](https://www.zhihu.com/question/2106385974116574500)
1. [如何评价小米AI负责人要将小米AI分家独立出来？](https://www.zhihu.com/question/2106468887957082400)
1. [谭咏麟为何在香港歌唱界威望那么高？](https://www.zhihu.com/question/28876110)
1. [工信部同意北京市等 8 个省（市）开展 6G 创新发展部省协同试点工作，如何看待这次试点布局？](https://www.zhihu.com/question/2106044813778994200)
1. [Ruler 采访称「BLG 也是拿到亚军后才夺冠，未来我们也能夺得S冠」，如何看待他的心态和想法？](https://www.zhihu.com/question/2106337303693976000)
1. [深圳 APEC 世纪晚宴菜单曝光，以地道粤菜为主，同时融入国际菜肴元素，菜品设计考量了哪些核心因素？](https://www.zhihu.com/question/2103409527672591600)
1. [如何评价游戏《侠盗猎车手VI》（GTA6），它到底好不好玩？](https://www.zhihu.com/question/2106459198645191400)
1. [网友让豆包生成一张「盒子里有13个鸡蛋」的图片，豆包连续十几次纠错仍未能数清，这是为什么？](https://www.zhihu.com/question/2106466938230502000)
1. [河南一学子536分捡漏上北大，曾因分数过低遭北大三次退档，现被公派瑞士读博，如何看待他的求学之路？](https://www.zhihu.com/question/2105965624749054000)
1. [如何评价S16决赛结束后，王多多的结束语？](https://www.zhihu.com/question/2105987189423216600)
1. [AI 冲击短剧行业，叶璇称大部分真人演员还不如 AI，这一观点是否站得住脚？](https://www.zhihu.com/question/2105625294812063200)
1. [如何看待文章《模型一代》？为什么它能传播得如此迅速和广泛？](https://www.zhihu.com/question/2106715344051987200)
1. [追梦格林明明已经退化得很严重了，为什么勇士还要一直首发他？](https://www.zhihu.com/question/2106692120014583600)
1. [为什么枪炮类武器注定会成为动漫中的战力垫脚石？](https://www.zhihu.com/question/2106387857120159000)
1. [中俄美三国元首历史上首次面对面会晤，有哪些意义？为何会选在这个时间点？](https://www.zhihu.com/question/2105702944855287800)
1. [马斯克确认将前往中国，并缺席纽约DealBook峰会，他选择深圳APEC峰会节点赴华是出于什么考虑？](https://www.zhihu.com/question/2106061681793176600)
1. [Anthropic 发行定价83美元，超此前发行价区间，成迄今全球最大IPO，怎么看定价过程与估值？](https://www.zhihu.com/question/2106656189337395700)
1. [WorkBuddy日活用户超1000万，它是怎么做到的？AI Agent已经成为工作刚需了吗？](https://www.zhihu.com/question/2106443459233932800)
1. [儿子拿笔在墙上乱画，儿子爸爸极力反对说要有规矩，姥姥说让孩子画是保护他的探索欲，谁说得对我该站谁？](https://www.zhihu.com/question/2106047742212686600)
1. [为什么绿皮火车硬座长久以来都是和别人面对面的布局？没有考虑过社恐人士的心情吗？](https://www.zhihu.com/question/2105548043621773300)
1. [比亚迪 App 崩了，多位车主反映 App 无法连接车辆开门，故障原因可能是什么？造成的影响有多大？](https://www.zhihu.com/question/2106068791704512000)
1. [腾讯称未来未必需要那么多管理岗位，中层管理者的价值该如何证明？](https://www.zhihu.com/question/2106044690076103400)
1. [本届深圳APEC会议的意义是什么？](https://www.zhihu.com/question/2103975417191339300)
1. [新加坡在过去 10 年里 GDP 赶超香港的原因是什么？](https://www.zhihu.com/question/22998255)
1. [董明珠回应格力业绩下滑，称铜在涨价，宁可损失几十亿利润也不降低品质，空调用铜和用铝实际体验差距有多大？](https://www.zhihu.com/question/2103780150286599400)
1. [上海 10 月社零同比跌 4.5%，其中汽车类跌 39.4%，还有哪些细节值得关注？](https://www.zhihu.com/question/2106344557927297800)
1. [如何看待雷军 APEC 发言紧张，网友称「好像略微有点社恐」？](https://www.zhihu.com/question/2106133971863954400)
1. [《GTA6》M站开分99，这是一个什么水平？有1分扣在哪了？](https://www.zhihu.com/question/2106462901686858000)
1. [泽连斯基公布导弹打击克里米亚大桥致桥拱桥跨坍塌画面，此举将引发哪些连锁反应？](https://www.zhihu.com/question/2106134560761292800)
1. [中俄美元首会晤，各方有哪些诉求？哪些议题可能成为核心议题？](https://www.zhihu.com/question/2105697528888948200)
1. [电视剧《甄嬛传》中，为什么连宫女都敢欺负安陵容，却没人敢欺负叶澜依呢？](https://www.zhihu.com/question/667598198)
1. [英伟达员工大会宣布告别「黄仁勋时代」，并承诺在 12 月为员工加薪，董事会的做法能赢得员工们的支持吗？](https://www.zhihu.com/question/2106685122283926800)
1. [王羽佳国家大剧院演出迟到17分钟，此前香港站缩减演出时长主办方退款，如何评价这种行为？这算耍大牌吗？](https://www.zhihu.com/question/2106071380613769000)
1. [高手是怎么使用AI的？](https://www.zhihu.com/question/2022710256736707300)
1. [老年人为什么要坚持锻炼？](https://www.zhihu.com/question/2094989947350540800)
1. [域、界、门、纲、目、科、属、种，生物学还有哪些是我们所不知道的么？](https://www.zhihu.com/question/3538790894)
1. [洗衣机「15 分钟快洗」模式洗不干净衣物，为什么厂商还要设置这一功能？](https://www.zhihu.com/question/1970439468998717700)
1. [你认为吃着最过瘾的家常菜是什么？](https://www.zhihu.com/question/444694165)
1. [糖尿病的主要诱因是糖分摄入过量吗？](https://www.zhihu.com/question/2026074936318378800)
1. [如何解决在比自己差的人面前有优越感，在看到比自己优秀的人又会自卑这个问题？](https://www.zhihu.com/question/2091970638705596000)
1. [为什么都是回收复用，航天飞机的发射成本会高于传统火箭，而可回收火箭成本只有传统火箭的几分之一？](https://www.zhihu.com/question/2106101131441074200)
1. [美国总统特朗普抵达深圳，出席 APEC 深圳峰会，本次迎接仪式有哪些亮点？还有哪些信息值得关注？](https://www.zhihu.com/question/2106401577850200800)
1. [如何评价新版上海小学数学教材规定“平行四边形属于梯形”，但“长方形不是等腰梯形”？](https://www.zhihu.com/question/2104876036001378600)
1. [为什么好多动物都长尾巴，而我们人类却不长尾巴，长尾巴多好呀，长尾巴没事做的时候就可以摇来摇去？](https://www.zhihu.com/question/2080457352793408800)
1. [CMF 报告显示，地方债三年间减少 11 万亿，如何看待这一阶段性成效？未来会如何化债？](https://www.zhihu.com/question/2105980726180934000)
1. [胖东来模式为啥不能全国推广？](https://www.zhihu.com/question/1916824548122298000)
1. [如何评价电视剧《谷雨》大结局？](https://www.zhihu.com/question/2106096426447008500)
1. [每次只喝一点、从不喝醉，长期下来也会影响大脑吗？](https://www.zhihu.com/question/2083346008789075000)
1. [鸣潮4.0版本预热《鸣潮：永明的烬焰》年度篇章发布，新联邦地区多位卫星角色如何评价？](https://www.zhihu.com/question/2106352809801269800)
1. [现货黄金跌破 3800 美元关口，现在适合抄底黄金吗？黄金的长期配置逻辑还成立吗？](https://www.zhihu.com/question/2106345289204373000)
1. [业内人士称不建议买500元以下羽绒服，基本不合格，500元真是羽绒服的分水岭吗？选购时应留心哪些标准？](https://www.zhihu.com/question/2105307883109929500)
1. [民宿没有生意的主要原因是什么？](https://www.zhihu.com/question/2103478379928360000)
1. [如何评价米哈游位列2025年全球手游开发商第15位？](https://www.zhihu.com/question/2104526950408642800)
1. [如果大和号替代围歼俾斯麦号中的俾斯麦号，会有什么结果？](https://www.zhihu.com/question/269645681)
1. [哪些历史名人有仙班下凡转世的说法？](https://www.zhihu.com/question/314294140)
1. [进入社会以后，你最看清的是什么？](https://www.zhihu.com/question/2094039796935144200)
1. [对于程序员的工作电脑，为什么基本都是联想的Thinkpad？](https://www.zhihu.com/question/2002004984468883200)
1. [有什么美食分享好吃的？](https://www.zhihu.com/question/1929848998803509500)
1. [你们家蒸包子一般里面都是什么馅儿？](https://www.zhihu.com/question/2078751853865603000)

<!-- END ZHIHUQUESTIONS -->

历史归档 [./archives/zhihu-questions](./archives/zhihu-questions)

## 知乎热门视频

> ⚠️ 知乎视频热榜已下线（2025-05 起停更），抓取已在 workflow 中停用；本节为历史数据。

<!-- BEGIN ZHIHUVIDEO -->
<!-- 最后更新时间 Tue May 06 2025 09:19:13 GMT+0800 (China Standard Time) -->

1. [赵心童夺得斯诺克世锦赛冠军，成为中国首位，也是亚洲首位斯诺克世锦赛冠军，如何评价他的比赛表现？](https://www.zhihu.com/question/1902560709012878096)
1. [2025 五一档票房 7.43 亿，不及去年同档期票房一半，这一现象原因是什么？](https://www.zhihu.com/question/1902835234510214480)
1. [南京明孝陵石兽遭涂鸦「到此一游」，景区称已进行修补保护，涉事游客可能出于什么心理？将受到哪些处罚？](https://www.zhihu.com/question/1902762657548821705)
1. [孩子幼儿园，早上起不来，是该强行拖起来，还是让她睡够了再去幼儿园？](https://www.zhihu.com/question/13172991603)
1. [阿诺德将在赛季结束后离开利物浦加盟皇家马德里，如何评价这一举措？](https://www.zhihu.com/question/1902785483890755051)
1. [如何看待阿维塔再回应网传「风阻系数造假」，称近期将根据国家专业机构实验室排期公开测试？](https://www.zhihu.com/question/1902316343816074282)
1. [SpaceX 星舰 S35 火箭在静态点火测试中发生爆炸，爆炸原因有哪些？](https://www.zhihu.com/question/1902415262592004400)
1. [我是行政，老板说不招保洁了，让我一个月打扫一次厕所和会议室，给我涨工资 500 元，我怎么回？](https://www.zhihu.com/question/1902315003505270826)
1. [五一假期结束了，如果真有「反方向的钟」，你最想把时间拨回到假期的哪一天？](https://www.zhihu.com/question/1902677957484443611)
1. [哪道菜一出现就知道是妈妈的「敷衍式做饭」？](https://www.zhihu.com/question/1899914369975957373)
1. [小米汽车将 SU7 新车定购页面中的「智驾」更名为「辅助驾驶」，这一调整是出于怎样的品牌定位考量？](https://www.zhihu.com/question/1902406018308211718)
1. [贵州游船侧翻致 10 死，当地称日常有执法检查，曾发天气预警，为何悲剧仍发生？暴露了哪些问题？](https://www.zhihu.com/question/1902679450086237352)
1. [DND 世界观下巨龙靠什么能活到成年?](https://www.zhihu.com/question/11292701270)
1. [孩子明明天天都在学习，可咋就不出成绩呢？](https://www.zhihu.com/question/1898247330764919030)
1. [你在热血传奇里面打到的最贵的东西是什么？](https://www.zhihu.com/question/33399354)
1. [学校为什么喜欢把食堂、宿舍等职能单位外包出去呢？](https://www.zhihu.com/question/1899419117401929649)
1. [历史上有哪些很冷的冷知识?](https://www.zhihu.com/question/1895916425392132635)
1. [日本的小学生上学、放学为什么不可以接送？](https://www.zhihu.com/question/5900994708)
1. [5 月是 2025 年牛市的起点吗？](https://www.zhihu.com/question/1898639747859079484)
1. [美国男子注射蛇毒 18 年血液产生抗体，蛇毒在血液中是怎么产生抗体的？他的抗体有哪些研究价值？](https://www.zhihu.com/question/1902414257561232264)
1. [巴菲特宣布年底退休，63 岁阿贝尔将接班，公司已囤积 3477 亿美元现金，哪些信息值得关注？](https://www.zhihu.com/question/1902313765539668566)
1. [湖北江陵一男子跑马拉松心脏骤停，30 秒急救捡回一命，反映出什么问题？普通人怎么判断身体条件是否合适？](https://www.zhihu.com/question/1902078766752170336)
1. [上班通勤在多久内可以接受啊？](https://www.zhihu.com/question/12996127786)
1. [怎样增加深度睡眠时间？](https://www.zhihu.com/question/23273243)
1. [孩子写作业不会，你教也听不懂，你会说孩子笨吗？](https://www.zhihu.com/question/1900219572537258288)
1. [吕布在三国正史里是不是第一猛将？](https://www.zhihu.com/question/605192875)
1. [金庸《笑傲江湖》中，同一本剑谱为什么采用两个命名？](https://www.zhihu.com/question/1896870169315353556)
1. [声音是怎么影响人的情绪的？](https://www.zhihu.com/question/1901017819027584504)
1. [《情深深雨濛濛》里方瑜为什么看上尔豪?](https://www.zhihu.com/question/663501446)
1. [为什么漫威要在《雷霆特攻队 *》里，让模仿大师两分钟暴毙？](https://www.zhihu.com/question/1901352690442831573)

<!-- END ZHIHUVIDEO -->

历史归档 [./archives/zhihu-video](./archives/zhihu-video)

## 微博热搜

<!-- BEGIN WEIBO -->
<!-- 最后更新时间 Thu Nov 19 2026 21:29:19 GMT+0800 (China Standard Time) -->

1. [中俄美元首深圳会晤](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E6%B7%B1%E5%9C%B3%E4%BC%9A%E6%99%A4%23&Refer=new_time)
1. [中俄美元首和平宣言](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%92%8C%E5%B9%B3%E5%AE%A3%E8%A8%80%23&t=31&band_rank=1&Refer=top)
1. [特朗普登上空军一号挥手告别](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%99%BB%E4%B8%8A%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E6%8C%A5%E6%89%8B%E5%91%8A%E5%88%AB%23&t=31&band_rank=2&Refer=top)
1. [建设亚太共同体续写亚太奇迹新篇章](https://s.weibo.com//weibo?q=%23%E5%BB%BA%E8%AE%BE%E4%BA%9A%E5%A4%AA%E5%85%B1%E5%90%8C%E4%BD%93%E7%BB%AD%E5%86%99%E4%BA%9A%E5%A4%AA%E5%A5%87%E8%BF%B9%E6%96%B0%E7%AF%87%E7%AB%A0%23&t=31&band_rank=3&Refer=top)
1. [APEC晚宴用荔枝冰酒销量暴增900倍](https://s.weibo.com//weibo?q=%23APEC%E6%99%9A%E5%AE%B4%E7%94%A8%E8%8D%94%E6%9E%9D%E5%86%B0%E9%85%92%E9%94%80%E9%87%8F%E6%9A%B4%E5%A2%9E900%E5%80%8D%23&t=31&band_rank=4&Refer=top)
1. [普京说这些把中俄美联系在一起](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E8%BF%99%E4%BA%9B%E6%8A%8A%E4%B8%AD%E4%BF%84%E7%BE%8E%E8%81%94%E7%B3%BB%E5%9C%A8%E4%B8%80%E8%B5%B7%23&t=31&band_rank=5&Refer=top)
1. [APEC晚宴荔枝冰酒折后178元1瓶](https://s.weibo.com//weibo?q=%23APEC%E6%99%9A%E5%AE%B4%E8%8D%94%E6%9E%9D%E5%86%B0%E9%85%92%E6%8A%98%E5%90%8E178%E5%85%831%E7%93%B6%23&t=31&band_rank=6&Refer=top)
1. [中方回应高市早苗礼宾安排](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A4%BC%E5%AE%BE%E5%AE%89%E6%8E%92%23&t=31&band_rank=7&Refer=top)
1. [王子璇说最后一次接文吉儿了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E8%AF%B4%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E6%8E%A5%E6%96%87%E5%90%89%E5%84%BF%E4%BA%86%23&t=31&band_rank=8&Refer=top)
1. [亚太创新从来不是抽象概念](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E5%A4%AA%E5%88%9B%E6%96%B0%E4%BB%8E%E6%9D%A5%E4%B8%8D%E6%98%AF%E6%8A%BD%E8%B1%A1%E6%A6%82%E5%BF%B5%23&t=31&band_rank=9&Refer=top)
1. [竞燃之夜内场](https://s.weibo.com//weibo?q=%23%E7%AB%9E%E7%87%83%E4%B9%8B%E5%A4%9C%E5%86%85%E5%9C%BA%23&t=31&band_rank=10&Refer=top)
1. [蒋欣要拍后会无期了](https://s.weibo.com//weibo?q=%23%E8%92%8B%E6%AC%A3%E8%A6%81%E6%8B%8D%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F%E4%BA%86%23&t=31&band_rank=11&Refer=top)
1. [白小纯 青稚](https://s.weibo.com//weibo?q=%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E9%9D%92%E7%A8%9A&t=31&band_rank=12&Refer=top)
1. [王子璇把马天宇张萌梭哈了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%8A%8A%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%BC%A0%E8%90%8C%E6%A2%AD%E5%93%88%E4%BA%86%23&t=31&band_rank=13&Refer=top)
1. [赵丽颖王仁君曹翠芬一起走红毯](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%8E%8B%E4%BB%81%E5%90%9B%E6%9B%B9%E7%BF%A0%E8%8A%AC%E4%B8%80%E8%B5%B7%E8%B5%B0%E7%BA%A2%E6%AF%AF%23&t=31&band_rank=14&Refer=top)
1. [胖东来撤走后降到四百万依然没有人接盘](https://s.weibo.com//weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%92%A4%E8%B5%B0%E5%90%8E%E9%99%8D%E5%88%B0%E5%9B%9B%E7%99%BE%E4%B8%87%E4%BE%9D%E7%84%B6%E6%B2%A1%E6%9C%89%E4%BA%BA%E6%8E%A5%E7%9B%98%23&t=31&band_rank=15&Refer=top)
1. [Dior点灯活动合照C位](https://s.weibo.com//weibo?q=%23Dior%E7%82%B9%E7%81%AF%E6%B4%BB%E5%8A%A8%E5%90%88%E7%85%A7C%E4%BD%8D%23&t=31&band_rank=16&Refer=top)
1. [阿里巴巴二季度业绩](https://s.weibo.com//weibo?q=%23%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E4%BA%8C%E5%AD%A3%E5%BA%A6%E4%B8%9A%E7%BB%A9%23&t=31&band_rank=17&Refer=top)
1. [上海健身房冲突旧闻新炒割裂共识](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%81%A5%E8%BA%AB%E6%88%BF%E5%86%B2%E7%AA%81%E6%97%A7%E9%97%BB%E6%96%B0%E7%82%92%E5%89%B2%E8%A3%82%E5%85%B1%E8%AF%86%23&t=31&band_rank=18&Refer=top)
1. [文吉儿 态度](https://s.weibo.com//weibo?q=%E6%96%87%E5%90%89%E5%84%BF%20%E6%80%81%E5%BA%A6&t=31&band_rank=19&Refer=top)
1. [老芒果诡计多端](https://s.weibo.com//weibo?q=%E8%80%81%E8%8A%92%E6%9E%9C%E8%AF%A1%E8%AE%A1%E5%A4%9A%E7%AB%AF&t=31&band_rank=20&Refer=top)
1. [迪奥之家北京开业一周年](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E5%A5%A5%E4%B9%8B%E5%AE%B6%E5%8C%97%E4%BA%AC%E5%BC%80%E4%B8%9A%E4%B8%80%E5%91%A8%E5%B9%B4%23&t=31&band_rank=21&Refer=top)
1. [20多天婴儿被喂白开水中毒肾损伤](https://s.weibo.com//weibo?q=%2320%E5%A4%9A%E5%A4%A9%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%96%82%E7%99%BD%E5%BC%80%E6%B0%B4%E4%B8%AD%E6%AF%92%E8%82%BE%E6%8D%9F%E4%BC%A4%23&t=31&band_rank=22&Refer=top)
1. [白小纯在台上偷偷背词](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%9C%A8%E5%8F%B0%E4%B8%8A%E5%81%B7%E5%81%B7%E8%83%8C%E8%AF%8D%23&t=31&band_rank=23&Refer=top)
1. [周也王楚然王玉雯迪奥活动造型](https://s.weibo.com//weibo?q=%23%E5%91%A8%E4%B9%9F%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%8E%8B%E7%8E%89%E9%9B%AF%E8%BF%AA%E5%A5%A5%E6%B4%BB%E5%8A%A8%E9%80%A0%E5%9E%8B%23&t=31&band_rank=24&Refer=top)
1. [APEC记者们已经累瘫了](https://s.weibo.com//weibo?q=%23APEC%E8%AE%B0%E8%80%85%E4%BB%AC%E5%B7%B2%E7%BB%8F%E7%B4%AF%E7%98%AB%E4%BA%86%23&t=31&band_rank=25&Refer=top)
1. [伊能静能不能常驻](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%83%BD%E4%B8%8D%E8%83%BD%E5%B8%B8%E9%A9%BB%23&t=31&band_rank=26&Refer=top)
1. [中俄美元首一张圆桌三个座位](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E4%B8%80%E5%BC%A0%E5%9C%86%E6%A1%8C%E4%B8%89%E4%B8%AA%E5%BA%A7%E4%BD%8D%23&t=31&band_rank=27&Refer=top)
1. [三国会晤播下的种子必将生根发芽开花结果](https://s.weibo.com//weibo?q=%23%E4%B8%89%E5%9B%BD%E4%BC%9A%E6%99%A4%E6%92%AD%E4%B8%8B%E7%9A%84%E7%A7%8D%E5%AD%90%E5%BF%85%E5%B0%86%E7%94%9F%E6%A0%B9%E5%8F%91%E8%8A%BD%E5%BC%80%E8%8A%B1%E7%BB%93%E6%9E%9C%23&t=31&band_rank=28&Refer=top)
1. [孙俪家的狗获最丑宠物第一名](https://s.weibo.com//weibo?q=%23%E5%AD%99%E4%BF%AA%E5%AE%B6%E7%9A%84%E7%8B%97%E8%8E%B7%E6%9C%80%E4%B8%91%E5%AE%A0%E7%89%A9%E7%AC%AC%E4%B8%80%E5%90%8D%23&t=31&band_rank=29&Refer=top)
1. [慌啥子嘛被4岁男孩唱明白了](https://s.weibo.com//weibo?q=%23%E6%85%8C%E5%95%A5%E5%AD%90%E5%98%9B%E8%A2%AB4%E5%B2%81%E7%94%B7%E5%AD%A9%E5%94%B1%E6%98%8E%E7%99%BD%E4%BA%86%23&t=31&band_rank=30&Refer=top)
1. [为什么痛车越来越多了](https://s.weibo.com//weibo?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E7%97%9B%E8%BD%A6%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E4%BA%86&t=31&band_rank=31&Refer=top)
1. [厉娜被看出心理治疗痕迹](https://s.weibo.com//weibo?q=%E5%8E%89%E5%A8%9C%E8%A2%AB%E7%9C%8B%E5%87%BA%E5%BF%83%E7%90%86%E6%B2%BB%E7%96%97%E7%97%95%E8%BF%B9&t=31&band_rank=32&Refer=top)
1. [林孝埈中文获奖感言](https://s.weibo.com//weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E4%B8%AD%E6%96%87%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%23&t=31&band_rank=33&Refer=top)
1. [曹翠芬抱着赵丽颖](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E7%BF%A0%E8%8A%AC%E6%8A%B1%E7%9D%80%E8%B5%B5%E4%B8%BD%E9%A2%96%23&t=31&band_rank=34&Refer=top)
1. [特朗普离开会晤现场](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A6%BB%E5%BC%80%E4%BC%9A%E6%99%A4%E7%8E%B0%E5%9C%BA%23&t=31&band_rank=35&Refer=top)
1. [中俄美三国元首会晤](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%23&t=31&band_rank=36&Refer=top)
1. [太阳雨后四集是被夺舍了吗](https://s.weibo.com//weibo?q=%23%E5%A4%AA%E9%98%B3%E9%9B%A8%E5%90%8E%E5%9B%9B%E9%9B%86%E6%98%AF%E8%A2%AB%E5%A4%BA%E8%88%8D%E4%BA%86%E5%90%97%23&t=31&band_rank=37&Refer=top)
1. [深圳市民遇普京车队心跳猛加速](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%B8%82%E6%B0%91%E9%81%87%E6%99%AE%E4%BA%AC%E8%BD%A6%E9%98%9F%E5%BF%83%E8%B7%B3%E7%8C%9B%E5%8A%A0%E9%80%9F%23&t=31&band_rank=38&Refer=top)
1. [伊能静说没被好好爱的孩子是幸存者](https://s.weibo.com//weibo?q=%E4%BC%8A%E8%83%BD%E9%9D%99%E8%AF%B4%E6%B2%A1%E8%A2%AB%E5%A5%BD%E5%A5%BD%E7%88%B1%E7%9A%84%E5%AD%A9%E5%AD%90%E6%98%AF%E5%B9%B8%E5%AD%98%E8%80%85&t=31&band_rank=39&Refer=top)
1. [中俄美元首会晤高清大图](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23&t=31&band_rank=40&Refer=top)
1. [韩国满分考生被曝AI作弊后身亡](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%BB%A1%E5%88%86%E8%80%83%E7%94%9F%E8%A2%AB%E6%9B%9DAI%E4%BD%9C%E5%BC%8A%E5%90%8E%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=41&Refer=top)
1. [苏新皓](https://s.weibo.com//weibo?q=%E8%8B%8F%E6%96%B0%E7%9A%93&t=31&band_rank=42&Refer=top)
1. [杨超越董思成亲了4小时的吻戏](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%91%A3%E6%80%9D%E6%88%90%E4%BA%B2%E4%BA%864%E5%B0%8F%E6%97%B6%E7%9A%84%E5%90%BB%E6%88%8F%23&t=31&band_rank=43&Refer=top)
1. [特朗普普京盛赞中国](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%99%AE%E4%BA%AC%E7%9B%9B%E8%B5%9E%E4%B8%AD%E5%9B%BD%23&t=31&band_rank=44&Refer=top)
1. [巴西与世隔绝部落走出雨林要食物](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E8%A5%BF%E4%B8%8E%E4%B8%96%E9%9A%94%E7%BB%9D%E9%83%A8%E8%90%BD%E8%B5%B0%E5%87%BA%E9%9B%A8%E6%9E%97%E8%A6%81%E9%A3%9F%E7%89%A9%23&t=31&band_rank=45&Refer=top)
1. [韩国满分学霸被质疑用AI作弊后身亡](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%BB%A1%E5%88%86%E5%AD%A6%E9%9C%B8%E8%A2%AB%E8%B4%A8%E7%96%91%E7%94%A8AI%E4%BD%9C%E5%BC%8A%E5%90%8E%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=46&Refer=top)
1. [中俄美会晤为何选在麒麟山庄](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%BC%9A%E6%99%A4%E4%B8%BA%E4%BD%95%E9%80%89%E5%9C%A8%E9%BA%92%E9%BA%9F%E5%B1%B1%E5%BA%84%23&t=31&band_rank=47&Refer=top)
1. [赵睿崔永熙等5人退出男篮集训](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E7%9D%BF%E5%B4%94%E6%B0%B8%E7%86%99%E7%AD%895%E4%BA%BA%E9%80%80%E5%87%BA%E7%94%B7%E7%AF%AE%E9%9B%86%E8%AE%AD%23&t=31&band_rank=48&Refer=top)
1. [于适向涵之翟子路同框](https://s.weibo.com//weibo?q=%23%E4%BA%8E%E9%80%82%E5%90%91%E6%B6%B5%E4%B9%8B%E7%BF%9F%E5%AD%90%E8%B7%AF%E5%90%8C%E6%A1%86%23&t=31&band_rank=49&Refer=top)
1. [现在AI也太强了](https://s.weibo.com//weibo?q=%E7%8E%B0%E5%9C%A8AI%E4%B9%9F%E5%A4%AA%E5%BC%BA%E4%BA%86&t=31&band_rank=50&Refer=top)
1. [习近平主持APEC第三十三次领导人非正式会议](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%B8%BB%E6%8C%81APEC%E7%AC%AC%E4%B8%89%E5%8D%81%E4%B8%89%E6%AC%A1%E9%A2%86%E5%AF%BC%E4%BA%BA%E9%9D%9E%E6%AD%A3%E5%BC%8F%E4%BC%9A%E8%AE%AE%23&Refer=new_time)
1. [APEC重要讲话](https://s.weibo.com//weibo?q=%23APEC%E9%87%8D%E8%A6%81%E8%AE%B2%E8%AF%9D%23&t=31&band_rank=1&Refer=top)
1. [特朗普在车内未拉窗帘欣赏深圳夜景](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9C%A8%E8%BD%A6%E5%86%85%E6%9C%AA%E6%8B%89%E7%AA%97%E5%B8%98%E6%AC%A3%E8%B5%8F%E6%B7%B1%E5%9C%B3%E5%A4%9C%E6%99%AF%23&t=31&band_rank=2&Refer=top)
1. [一图看中国与APEC经济体双向奔赴](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%9B%BE%E7%9C%8B%E4%B8%AD%E5%9B%BD%E4%B8%8EAPEC%E7%BB%8F%E6%B5%8E%E4%BD%93%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23&t=31&band_rank=3&Refer=top)
1. [特朗普感激中国](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%84%9F%E6%BF%80%E4%B8%AD%E5%9B%BD%23&t=31&band_rank=4&Refer=top)
1. [中俄美元首同框](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%90%8C%E6%A1%86%23&t=31&band_rank=5&Refer=top)
1. [普京特朗普APEC会议现场画面](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E7%89%B9%E6%9C%97%E6%99%AEAPEC%E4%BC%9A%E8%AE%AE%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23&t=31&band_rank=6&Refer=top)
1. [APEC全家福](https://s.weibo.com//weibo?q=%23APEC%E5%85%A8%E5%AE%B6%E7%A6%8F%23&t=31&band_rank=7&Refer=top)
1. [赖伟明可以誓死追随宝珠导演了](https://s.weibo.com//weibo?q=%E8%B5%96%E4%BC%9F%E6%98%8E%E5%8F%AF%E4%BB%A5%E8%AA%93%E6%AD%BB%E8%BF%BD%E9%9A%8F%E5%AE%9D%E7%8F%A0%E5%AF%BC%E6%BC%94%E4%BA%86&t=31&band_rank=8&Refer=top)
1. [APEC中国年亚太共同体建设启新程](https://s.weibo.com//weibo?q=%23APEC%E4%B8%AD%E5%9B%BD%E5%B9%B4%E4%BA%9A%E5%A4%AA%E5%85%B1%E5%90%8C%E4%BD%93%E5%BB%BA%E8%AE%BE%E5%90%AF%E6%96%B0%E7%A8%8B%23&t=31&band_rank=9&Refer=top)
1. [两京十五日韩国预告](https://s.weibo.com//weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E9%9F%A9%E5%9B%BD%E9%A2%84%E5%91%8A%23&t=31&band_rank=10&Refer=top)
1. [白敬亭开美颜后秒变张踩玲](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E5%BC%80%E7%BE%8E%E9%A2%9C%E5%90%8E%E7%A7%92%E5%8F%98%E5%BC%A0%E8%B8%A9%E7%8E%B2%23&t=31&band_rank=11&Refer=top)
1. [金价](https://s.weibo.com//weibo?q=%E9%87%91%E4%BB%B7&t=31&band_rank=12&Refer=top)
1. [妈妈呼喊女儿被骂不准外地人随便叫](https://s.weibo.com//weibo?q=%23%E5%A6%88%E5%A6%88%E5%91%BC%E5%96%8A%E5%A5%B3%E5%84%BF%E8%A2%AB%E9%AA%82%E4%B8%8D%E5%87%86%E5%A4%96%E5%9C%B0%E4%BA%BA%E9%9A%8F%E4%BE%BF%E5%8F%AB%23&t=31&band_rank=13&Refer=top)
1. [白宫发布特朗普访华视频](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%AE%AB%E5%8F%91%E5%B8%83%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E8%A7%86%E9%A2%91%23&t=31&band_rank=14&Refer=top)
1. [APEC上的中国新故事](https://s.weibo.com//weibo?q=%23APEC%E4%B8%8A%E7%9A%84%E4%B8%AD%E5%9B%BD%E6%96%B0%E6%95%85%E4%BA%8B%23&t=31&band_rank=15&Refer=top)
1. [APEC欢迎晚宴菜单曝光](https://s.weibo.com//weibo?q=%23APEC%E6%AC%A2%E8%BF%8E%E6%99%9A%E5%AE%B4%E8%8F%9C%E5%8D%95%E6%9B%9D%E5%85%89%23&t=31&band_rank=16&Refer=top)
1. [张萌的蛋糕救了马天宇一命](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E7%9A%84%E8%9B%8B%E7%B3%95%E6%95%91%E4%BA%86%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%80%E5%91%BD%23&t=31&band_rank=17&Refer=top)
1. [领克07GT成功挑战百米悬崖飞坡](https://s.weibo.com//weibo?q=%23%E9%A2%86%E5%85%8B07GT%E6%88%90%E5%8A%9F%E6%8C%91%E6%88%98%E7%99%BE%E7%B1%B3%E6%82%AC%E5%B4%96%E9%A3%9E%E5%9D%A1%23&t=31&band_rank=18&Refer=top)
1. [特朗普前往会场途中向民众挥手](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%89%8D%E5%BE%80%E4%BC%9A%E5%9C%BA%E9%80%94%E4%B8%AD%E5%90%91%E6%B0%91%E4%BC%97%E6%8C%A5%E6%89%8B%23&t=31&band_rank=19&Refer=top)
1. [豆包画13个鸡蛋反复出错](https://s.weibo.com//weibo?q=%E8%B1%86%E5%8C%85%E7%94%BB13%E4%B8%AA%E9%B8%A1%E8%9B%8B%E5%8F%8D%E5%A4%8D%E5%87%BA%E9%94%99&t=31&band_rank=20&Refer=top)
1. [王一博 演唱会](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E6%BC%94%E5%94%B1%E4%BC%9A&t=31&band_rank=21&Refer=top)
1. [北大时期张泉灵美成女儿国国王了](https://s.weibo.com//weibo?q=%23%E5%8C%97%E5%A4%A7%E6%97%B6%E6%9C%9F%E5%BC%A0%E6%B3%89%E7%81%B5%E7%BE%8E%E6%88%90%E5%A5%B3%E5%84%BF%E5%9B%BD%E5%9B%BD%E7%8E%8B%E4%BA%86%23&t=31&band_rank=22&Refer=top)
1. [APEC第33次领导人非正式会议举行](https://s.weibo.com//weibo?q=%23APEC%E7%AC%AC33%E6%AC%A1%E9%A2%86%E5%AF%BC%E4%BA%BA%E9%9D%9E%E6%AD%A3%E5%BC%8F%E4%BC%9A%E8%AE%AE%E4%B8%BE%E8%A1%8C%23&t=31&band_rank=23&Refer=top)
1. [芦玉菲91个月社保欠费15万](https://s.weibo.com//weibo?q=%23%E8%8A%A6%E7%8E%89%E8%8F%B291%E4%B8%AA%E6%9C%88%E7%A4%BE%E4%BF%9D%E6%AC%A0%E8%B4%B915%E4%B8%87%23&t=31&band_rank=24&Refer=top)
1. [魔术主场致敬詹姆斯](https://s.weibo.com//weibo?q=%23%E9%AD%94%E6%9C%AF%E4%B8%BB%E5%9C%BA%E8%87%B4%E6%95%AC%E8%A9%B9%E5%A7%86%E6%96%AF%23&t=31&band_rank=25&Refer=top)
1. [多位APEC经济体领导人步入会场](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E4%BD%8DAPEC%E7%BB%8F%E6%B5%8E%E4%BD%93%E9%A2%86%E5%AF%BC%E4%BA%BA%E6%AD%A5%E5%85%A5%E4%BC%9A%E5%9C%BA%23&t=31&band_rank=26&Refer=top)
1. [围观特朗普不耽误深圳商圈营业](https://s.weibo.com//weibo?q=%23%E5%9B%B4%E8%A7%82%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%8D%E8%80%BD%E8%AF%AF%E6%B7%B1%E5%9C%B3%E5%95%86%E5%9C%88%E8%90%A5%E4%B8%9A%23&t=31&band_rank=27&Refer=top)
1. [马天宇问白小纯原生家庭疑似被恶剪](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E9%97%AE%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%8E%9F%E7%94%9F%E5%AE%B6%E5%BA%AD%E7%96%91%E4%BC%BC%E8%A2%AB%E6%81%B6%E5%89%AA%23&t=31&band_rank=28&Refer=top)
1. [童家堡 纯稚](https://s.weibo.com//weibo?q=%E7%AB%A5%E5%AE%B6%E5%A0%A1%20%E7%BA%AF%E7%A8%9A&t=31&band_rank=29&Refer=top)
1. [原来一个人不快乐脸是会跟着变的](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%8D%E5%BF%AB%E4%B9%90%E8%84%B8%E6%98%AF%E4%BC%9A%E8%B7%9F%E7%9D%80%E5%8F%98%E7%9A%84%23&t=31&band_rank=30&Refer=top)
1. [时代少年团 嘉人](https://s.weibo.com//weibo?q=%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%98%89%E4%BA%BA&t=31&band_rank=31&Refer=top)
1. [曝90Air或刷新Mate最薄记录](https://s.weibo.com//weibo?q=%23%E6%9B%9D90Air%E6%88%96%E5%88%B7%E6%96%B0Mate%E6%9C%80%E8%96%84%E8%AE%B0%E5%BD%95%23&t=31&band_rank=32&Refer=top)
1. [Mate90Air官宣](https://s.weibo.com//weibo?q=%23Mate90Air%E5%AE%98%E5%AE%A3%23&t=31&band_rank=33&Refer=top)
1. [赵本山慌啥子嘛 春晚](https://s.weibo.com//weibo?q=%E8%B5%B5%E6%9C%AC%E5%B1%B1%E6%85%8C%E5%95%A5%E5%AD%90%E5%98%9B%20%E6%98%A5%E6%99%9A&t=31&band_rank=34&Refer=top)
1. [宝珠男女主笑死我了](https://s.weibo.com//weibo?q=%E5%AE%9D%E7%8F%A0%E7%94%B7%E5%A5%B3%E4%B8%BB%E7%AC%91%E6%AD%BB%E6%88%91%E4%BA%86&t=31&band_rank=35&Refer=top)
1. [猪肉上的检疫印章到底能不能吃](https://s.weibo.com//weibo?q=%23%E7%8C%AA%E8%82%89%E4%B8%8A%E7%9A%84%E6%A3%80%E7%96%AB%E5%8D%B0%E7%AB%A0%E5%88%B0%E5%BA%95%E8%83%BD%E4%B8%8D%E8%83%BD%E5%90%83%23&t=31&band_rank=36&Refer=top)
1. [奔跑吧大湾区篇8常驻14飞行](https://s.weibo.com//weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%A4%A7%E6%B9%BE%E5%8C%BA%E7%AF%878%E5%B8%B8%E9%A9%BB14%E9%A3%9E%E8%A1%8C%23&t=31&band_rank=37&Refer=top)
1. [AI版武大郎潘金莲太真实](https://s.weibo.com//weibo?q=AI%E7%89%88%E6%AD%A6%E5%A4%A7%E9%83%8E%E6%BD%98%E9%87%91%E8%8E%B2%E5%A4%AA%E7%9C%9F%E5%AE%9E&t=31&band_rank=38&Refer=top)
1. [格力业绩下滑和坚持用铜有关系吗](https://s.weibo.com//weibo?q=%23%E6%A0%BC%E5%8A%9B%E4%B8%9A%E7%BB%A9%E4%B8%8B%E6%BB%91%E5%92%8C%E5%9D%9A%E6%8C%81%E7%94%A8%E9%93%9C%E6%9C%89%E5%85%B3%E7%B3%BB%E5%90%97%23&t=31&band_rank=39&Refer=top)
1. [赵丽颖牡丹奖海报](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%89%A1%E4%B8%B9%E5%A5%96%E6%B5%B7%E6%8A%A5%23&t=31&band_rank=40&Refer=top)
1. [范丞丞比张真源高半个头](https://s.weibo.com//weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%AF%94%E5%BC%A0%E7%9C%9F%E6%BA%90%E9%AB%98%E5%8D%8A%E4%B8%AA%E5%A4%B4%23&t=31&band_rank=41&Refer=top)
1. [杨乐乐谈许飞厉娜](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E4%B9%90%E4%B9%90%E8%B0%88%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%23&t=31&band_rank=42&Refer=top)
1. [夫妻同框被认成母子](https://s.weibo.com//weibo?q=%23%E5%A4%AB%E5%A6%BB%E5%90%8C%E6%A1%86%E8%A2%AB%E8%AE%A4%E6%88%90%E6%AF%8D%E5%AD%90%23&t=31&band_rank=43&Refer=top)
1. [外婆回应和外公亲过嘴没](https://s.weibo.com//weibo?q=%E5%A4%96%E5%A9%86%E5%9B%9E%E5%BA%94%E5%92%8C%E5%A4%96%E5%85%AC%E4%BA%B2%E8%BF%87%E5%98%B4%E6%B2%A1&t=31&band_rank=44&Refer=top)
1. [养老保险缴够15年就能坐等退休系谣言](https://s.weibo.com//weibo?q=%23%E5%85%BB%E8%80%81%E4%BF%9D%E9%99%A9%E7%BC%B4%E5%A4%9F15%E5%B9%B4%E5%B0%B1%E8%83%BD%E5%9D%90%E7%AD%89%E9%80%80%E4%BC%91%E7%B3%BB%E8%B0%A3%E8%A8%80%23&t=31&band_rank=45&Refer=top)
1. [特朗普说中美关系非常好](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E9%9D%9E%E5%B8%B8%E5%A5%BD%23&t=31&band_rank=46&Refer=top)
1. [HLE官宣Zeus离队](https://s.weibo.com//weibo?q=%23HLE%E5%AE%98%E5%AE%A3Zeus%E7%A6%BB%E9%98%9F%23&t=31&band_rank=47&Refer=top)
1. [芦玉菲退役后发现原单位未缴社保](https://s.weibo.com//weibo?q=%23%E8%8A%A6%E7%8E%89%E8%8F%B2%E9%80%80%E5%BD%B9%E5%90%8E%E5%8F%91%E7%8E%B0%E5%8E%9F%E5%8D%95%E4%BD%8D%E6%9C%AA%E7%BC%B4%E7%A4%BE%E4%BF%9D%23&t=31&band_rank=48&Refer=top)
1. [HLE官宣Kanavi离队](https://s.weibo.com//weibo?q=%23HLE%E5%AE%98%E5%AE%A3Kanavi%E7%A6%BB%E9%98%9F%23&t=31&band_rank=49&Refer=top)
1. [专家称国内金价或跌到780元每克](https://s.weibo.com//weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E5%9B%BD%E5%86%85%E9%87%91%E4%BB%B7%E6%88%96%E8%B7%8C%E5%88%B0780%E5%85%83%E6%AF%8F%E5%85%8B%23&t=31&band_rank=50&Refer=top)
1. [中美元首握手](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E6%8F%A1%E6%89%8B%23&Refer=new_time)
1. [APEC会议来宾欢迎宴会大合影](https://s.weibo.com//weibo?q=%23APEC%E4%BC%9A%E8%AE%AE%E6%9D%A5%E5%AE%BE%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%E5%A4%A7%E5%90%88%E5%BD%B1%23&t=31&band_rank=1&Refer=top)
1. [特朗普感受到了深圳市民的热情](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%84%9F%E5%8F%97%E5%88%B0%E4%BA%86%E6%B7%B1%E5%9C%B3%E5%B8%82%E6%B0%91%E7%9A%84%E7%83%AD%E6%83%85%23&t=31&band_rank=2&Refer=top)
1. [深圳倡议发布](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%80%A1%E8%AE%AE%E5%8F%91%E5%B8%83%23&t=31&band_rank=3&Refer=top)
1. [普京说俄罗斯也想模仿这种成就](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E4%BF%84%E7%BD%97%E6%96%AF%E4%B9%9F%E6%83%B3%E6%A8%A1%E4%BB%BF%E8%BF%99%E7%A7%8D%E6%88%90%E5%B0%B1%23&t=31&band_rank=4&Refer=top)
1. [哪家AI能画对13个鸡蛋](https://s.weibo.com//weibo?q=%23%E5%93%AA%E5%AE%B6AI%E8%83%BD%E7%94%BB%E5%AF%B913%E4%B8%AA%E9%B8%A1%E8%9B%8B%23&t=31&band_rank=5&Refer=top)
1. [北大时期张泉灵美成女儿国国王了](https://s.weibo.com//weibo?q=%23%E5%8C%97%E5%A4%A7%E6%97%B6%E6%9C%9F%E5%BC%A0%E6%B3%89%E7%81%B5%E7%BE%8E%E6%88%90%E5%A5%B3%E5%84%BF%E5%9B%BD%E5%9B%BD%E7%8E%8B%E4%BA%86%23&t=31&band_rank=6&Refer=top)
1. [蔡国庆摔了](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%9B%BD%E5%BA%86%E6%91%94%E4%BA%86%23&t=31&band_rank=7&Refer=top)
1. [纸质短剧](https://s.weibo.com//weibo?q=%E7%BA%B8%E8%B4%A8%E7%9F%AD%E5%89%A7&t=31&band_rank=8&Refer=top)
1. [普京和特朗普互动握手](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E5%92%8C%E7%89%B9%E6%9C%97%E6%99%AE%E4%BA%92%E5%8A%A8%E6%8F%A1%E6%89%8B%23&t=31&band_rank=9&Refer=top)
1. [APEC欢迎宴会高清大图](https://s.weibo.com//weibo?q=%23APEC%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23&t=31&band_rank=10&Refer=top)
1. [养老保险缴够15年就能坐等退休系谣言](https://s.weibo.com//weibo?q=%23%E5%85%BB%E8%80%81%E4%BF%9D%E9%99%A9%E7%BC%B4%E5%A4%9F15%E5%B9%B4%E5%B0%B1%E8%83%BD%E5%9D%90%E7%AD%89%E9%80%80%E4%BC%91%E7%B3%BB%E8%B0%A3%E8%A8%80%23&t=31&band_rank=11&Refer=top)
1. [陌生男扔加冰可乐砸女子脸后逃跑](https://s.weibo.com//weibo?q=%23%E9%99%8C%E7%94%9F%E7%94%B7%E6%89%94%E5%8A%A0%E5%86%B0%E5%8F%AF%E4%B9%90%E7%A0%B8%E5%A5%B3%E5%AD%90%E8%84%B8%E5%90%8E%E9%80%83%E8%B7%91%23&t=31&band_rank=12&Refer=top)
1. [李在明夫妇会见韩籍在华企业家](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%A4%AB%E5%A6%87%E4%BC%9A%E8%A7%81%E9%9F%A9%E7%B1%8D%E5%9C%A8%E5%8D%8E%E4%BC%81%E4%B8%9A%E5%AE%B6%23&t=31&band_rank=13&Refer=top)
1. [老外被中国刷手机丝滑到了](https://s.weibo.com//weibo?q=%23%E8%80%81%E5%A4%96%E8%A2%AB%E4%B8%AD%E5%9B%BD%E5%88%B7%E6%89%8B%E6%9C%BA%E4%B8%9D%E6%BB%91%E5%88%B0%E4%BA%86%23&t=31&band_rank=14&Refer=top)
1. [GTA6](https://s.weibo.com//weibo?q=GTA6&t=31&band_rank=15&Refer=top)
1. [情侣鼓楼偶遇大爷拍出人生照片](https://s.weibo.com//weibo?q=%23%E6%83%85%E4%BE%A3%E9%BC%93%E6%A5%BC%E5%81%B6%E9%81%87%E5%A4%A7%E7%88%B7%E6%8B%8D%E5%87%BA%E4%BA%BA%E7%94%9F%E7%85%A7%E7%89%87%23&t=31&band_rank=16&Refer=top)
1. [豆包画13个鸡蛋反复出错](https://s.weibo.com//weibo?q=%E8%B1%86%E5%8C%85%E7%94%BB13%E4%B8%AA%E9%B8%A1%E8%9B%8B%E5%8F%8D%E5%A4%8D%E5%87%BA%E9%94%99&t=31&band_rank=17&Refer=top)
1. [KPL](https://s.weibo.com//weibo?q=KPL&t=31&band_rank=18&Refer=top)
1. [特朗普团队已抵达下榻酒店](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%A2%E9%98%9F%E5%B7%B2%E6%8A%B5%E8%BE%BE%E4%B8%8B%E6%A6%BB%E9%85%92%E5%BA%97%23&t=31&band_rank=19&Refer=top)
1. [天云说杨幂是肉眼见过最美的女人](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E4%BA%91%E8%AF%B4%E6%9D%A8%E5%B9%82%E6%98%AF%E8%82%89%E7%9C%BC%E8%A7%81%E8%BF%87%E6%9C%80%E7%BE%8E%E7%9A%84%E5%A5%B3%E4%BA%BA%23&t=31&band_rank=20&Refer=top)
1. [全民进入老实过日子时代](https://s.weibo.com//weibo?q=%E5%85%A8%E6%B0%91%E8%BF%9B%E5%85%A5%E8%80%81%E5%AE%9E%E8%BF%87%E6%97%A5%E5%AD%90%E6%97%B6%E4%BB%A3&t=31&band_rank=21&Refer=top)
1. [deepseek算力](https://s.weibo.com//weibo?q=%23deepseek%E7%AE%97%E5%8A%9B%23&t=31&band_rank=22&Refer=top)
1. [高中生妈妈一内耗就健身变化惊人](https://s.weibo.com//weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E5%A6%88%E5%A6%88%E4%B8%80%E5%86%85%E8%80%97%E5%B0%B1%E5%81%A5%E8%BA%AB%E5%8F%98%E5%8C%96%E6%83%8A%E4%BA%BA%23&t=31&band_rank=23&Refer=top)
1. [姥爷网购3万斤薯条喂猪比玉米划算](https://s.weibo.com//weibo?q=%23%E5%A7%A5%E7%88%B7%E7%BD%91%E8%B4%AD3%E4%B8%87%E6%96%A4%E8%96%AF%E6%9D%A1%E5%96%82%E7%8C%AA%E6%AF%94%E7%8E%89%E7%B1%B3%E5%88%92%E7%AE%97%23&t=31&band_rank=24&Refer=top)
1. [高市早苗抵达深圳](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%23&t=31&band_rank=25&Refer=top)
1. [被狗打的说话不要带情绪](https://s.weibo.com//weibo?q=%E8%A2%AB%E7%8B%97%E6%89%93%E7%9A%84%E8%AF%B4%E8%AF%9D%E4%B8%8D%E8%A6%81%E5%B8%A6%E6%83%85%E7%BB%AA&t=31&band_rank=26&Refer=top)
1. [内娱第一个把孩子说成是子宫肌瘤的](https://s.weibo.com//weibo?q=%23%E5%86%85%E5%A8%B1%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8A%8A%E5%AD%A9%E5%AD%90%E8%AF%B4%E6%88%90%E6%98%AF%E5%AD%90%E5%AE%AB%E8%82%8C%E7%98%A4%E7%9A%84%23&t=31&band_rank=27&Refer=top)
1. [豆包画不对13个鸡蛋](https://s.weibo.com//weibo?q=%E8%B1%86%E5%8C%85%E7%94%BB%E4%B8%8D%E5%AF%B913%E4%B8%AA%E9%B8%A1%E8%9B%8B&t=31&band_rank=28&Refer=top)
1. [就说后会友期不更新会出大事吧](https://s.weibo.com//weibo?q=%23%E5%B0%B1%E8%AF%B4%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E4%B8%8D%E6%9B%B4%E6%96%B0%E4%BC%9A%E5%87%BA%E5%A4%A7%E4%BA%8B%E5%90%A7%23&t=31&band_rank=29&Refer=top)
1. [豆包被十三个鸡蛋难倒](https://s.weibo.com//weibo?q=%E8%B1%86%E5%8C%85%E8%A2%AB%E5%8D%81%E4%B8%89%E4%B8%AA%E9%B8%A1%E8%9B%8B%E9%9A%BE%E5%80%92&t=31&band_rank=30&Refer=top)
1. [美国垃圾场钻探喷出150米黑气柱](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%9E%83%E5%9C%BE%E5%9C%BA%E9%92%BB%E6%8E%A2%E5%96%B7%E5%87%BA150%E7%B1%B3%E9%BB%91%E6%B0%94%E6%9F%B1%23&t=31&band_rank=31&Refer=top)
1. [宗馥莉再掀人事风暴](https://s.weibo.com//weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%89%E5%86%8D%E6%8E%80%E4%BA%BA%E4%BA%8B%E9%A3%8E%E6%9A%B4%23&t=31&band_rank=32&Refer=top)
1. [800部红果短剧剧名最常出现的50个词](https://s.weibo.com//weibo?q=%23800%E9%83%A8%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%89%A7%E5%90%8D%E6%9C%80%E5%B8%B8%E5%87%BA%E7%8E%B0%E7%9A%8450%E4%B8%AA%E8%AF%8D%23&t=31&band_rank=33&Refer=top)
1. [许飞看向曾沛慈的眼神](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E7%9C%8B%E5%90%91%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9A%84%E7%9C%BC%E7%A5%9E%23&t=31&band_rank=34&Refer=top)
1. [马斯克现身特朗普随行大巴车](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%8E%B0%E8%BA%AB%E7%89%B9%E6%9C%97%E6%99%AE%E9%9A%8F%E8%A1%8C%E5%A4%A7%E5%B7%B4%E8%BD%A6%23&t=31&band_rank=35&Refer=top)
1. [售楼处回应男子把泳池当平地迈入](https://s.weibo.com//weibo?q=%23%E5%94%AE%E6%A5%BC%E5%A4%84%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E6%8A%8A%E6%B3%B3%E6%B1%A0%E5%BD%93%E5%B9%B3%E5%9C%B0%E8%BF%88%E5%85%A5%23&t=31&band_rank=36&Refer=top)
1. [超长奶茶火了你喝了吗](https://s.weibo.com//weibo?q=%23%E8%B6%85%E9%95%BF%E5%A5%B6%E8%8C%B6%E7%81%AB%E4%BA%86%E4%BD%A0%E5%96%9D%E4%BA%86%E5%90%97%23&t=31&band_rank=37&Refer=top)
1. [阿尔卡拉斯年终总决赛两连胜](https://s.weibo.com//weibo?q=%23%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AF%E5%B9%B4%E7%BB%88%E6%80%BB%E5%86%B3%E8%B5%9B%E4%B8%A4%E8%BF%9E%E8%83%9C%23&t=31&band_rank=38&Refer=top)
1. [微博竞燃之夜](https://s.weibo.com//weibo?q=%E5%BE%AE%E5%8D%9A%E7%AB%9E%E7%87%83%E4%B9%8B%E5%A4%9C&t=31&band_rank=39&Refer=top)
1. [现在很火的零食店前世不就是这个吗](https://s.weibo.com//weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%BE%88%E7%81%AB%E7%9A%84%E9%9B%B6%E9%A3%9F%E5%BA%97%E5%89%8D%E4%B8%96%E4%B8%8D%E5%B0%B1%E6%98%AF%E8%BF%99%E4%B8%AA%E5%90%97%23&t=31&band_rank=40&Refer=top)
1. [赖伟明宝珠抽药这一段](https://s.weibo.com//weibo?q=%23%E8%B5%96%E4%BC%9F%E6%98%8E%E5%AE%9D%E7%8F%A0%E6%8A%BD%E8%8D%AF%E8%BF%99%E4%B8%80%E6%AE%B5%23&t=31&band_rank=41&Refer=top)
1. [杨超越这段音频即将迎来赛博永生](https://s.weibo.com//weibo?q=%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%BF%99%E6%AE%B5%E9%9F%B3%E9%A2%91%E5%8D%B3%E5%B0%86%E8%BF%8E%E6%9D%A5%E8%B5%9B%E5%8D%9A%E6%B0%B8%E7%94%9F&t=31&band_rank=42&Refer=top)
1. [峨眉山来了群女弟子开录热度](https://s.weibo.com//weibo?q=%23%E5%B3%A8%E7%9C%89%E5%B1%B1%E6%9D%A5%E4%BA%86%E7%BE%A4%E5%A5%B3%E5%BC%9F%E5%AD%90%E5%BC%80%E5%BD%95%E7%83%AD%E5%BA%A6%23&t=31&band_rank=43&Refer=top)
1. [外国政要来深圳都打卡了哪](https://s.weibo.com//weibo?q=%23%E5%A4%96%E5%9B%BD%E6%94%BF%E8%A6%81%E6%9D%A5%E6%B7%B1%E5%9C%B3%E9%83%BD%E6%89%93%E5%8D%A1%E4%BA%86%E5%93%AA%23&t=31&band_rank=44&Refer=top)
1. [今天是太阳雨董思成涨粉](https://s.weibo.com//weibo?q=%E4%BB%8A%E5%A4%A9%E6%98%AF%E5%A4%AA%E9%98%B3%E9%9B%A8%E8%91%A3%E6%80%9D%E6%88%90%E6%B6%A8%E7%B2%89&t=31&band_rank=45&Refer=top)
1. [瑞士兰州拉面服务员月薪4万](https://s.weibo.com//weibo?q=%23%E7%91%9E%E5%A3%AB%E5%85%B0%E5%B7%9E%E6%8B%89%E9%9D%A2%E6%9C%8D%E5%8A%A1%E5%91%98%E6%9C%88%E8%96%AA4%E4%B8%87%23&t=31&band_rank=46&Refer=top)
1. [2026豆瓣8分以上的剧](https://s.weibo.com//weibo?q=%232026%E8%B1%86%E7%93%A38%E5%88%86%E4%BB%A5%E4%B8%8A%E7%9A%84%E5%89%A7%23&t=31&band_rank=47&Refer=top)
1. [朱志鑫不说刷牙说牙齿洗澡](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E4%B8%8D%E8%AF%B4%E5%88%B7%E7%89%99%E8%AF%B4%E7%89%99%E9%BD%BF%E6%B4%97%E6%BE%A1%23&t=31&band_rank=48&Refer=top)
1. [燕云十六声](https://s.weibo.com//weibo?q=%E7%87%95%E4%BA%91%E5%8D%81%E5%85%AD%E5%A3%B0&t=31&band_rank=49&Refer=top)
1. [Kanavi和Viper互关](https://s.weibo.com//weibo?q=%23Kanavi%E5%92%8CViper%E4%BA%92%E5%85%B3%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
