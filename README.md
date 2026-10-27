# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-27 07:55:37

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
<!-- 最后更新时间 Tue Oct 27 2026 08:04:08 GMT+0800 (China Standard Time) -->

1. [学者：中国如何面对更加分裂的巴西](https://so.toutiao.com/search?keyword=学者：中国如何面对更加分裂的巴西)
1. [拒让张雪打广告的县委书记为何出圈](https://so.toutiao.com/search?keyword=拒让张雪打广告的县委书记为何出圈)
1. [用党的创新理论凝心铸魂](https://so.toutiao.com/search?keyword=用党的创新理论凝心铸魂)
1. [张雪校招称年薪10万起买车就半价](https://so.toutiao.com/search?keyword=张雪校招称年薪10万起买车就半价)
1. [凯恩获金球奖](https://so.toutiao.com/search?keyword=凯恩获金球奖)
1. [媒体：娱乐至死的医疗真人秀该叫停了](https://so.toutiao.com/search?keyword=媒体：娱乐至死的医疗真人秀该叫停了)
1. [武契奇败选意味着什么](https://so.toutiao.com/search?keyword=武契奇败选意味着什么)
1. [邵永灵：卢拉阻击了“唐罗主义”](https://so.toutiao.com/search?keyword=邵永灵：卢拉阻击了“唐罗主义”)
1. [我国风光累计装机容量突破20亿千瓦](https://so.toutiao.com/search?keyword=我国风光累计装机容量突破20亿千瓦)
1. [金球奖官方回应获奖页面提前泄露](https://so.toutiao.com/search?keyword=金球奖官方回应获奖页面提前泄露)
1. [气旋撞击喜马拉雅？不实](https://so.toutiao.com/search?keyword=气旋撞击喜马拉雅？不实)
1. [媒体评相声演员让观众滚一边去](https://so.toutiao.com/search?keyword=媒体评相声演员让观众滚一边去)
1. [被取消演出的大衣哥回家干农活了](https://so.toutiao.com/search?keyword=被取消演出的大衣哥回家干农活了)
1. [捐日军罪证15岁少年遭网暴](https://so.toutiao.com/search?keyword=捐日军罪证15岁少年遭网暴)
1. [15个中央巡视组组长公布](https://so.toutiao.com/search?keyword=15个中央巡视组组长公布)
1. [王兴兴两次认错 宇树暴涨1100亿](https://so.toutiao.com/search?keyword=王兴兴两次认错%20宇树暴涨1100亿)
1. [苹果回应iPhone Duo折叠屏开裂](https://so.toutiao.com/search?keyword=苹果回应iPhone%20Duo折叠屏开裂)
1. [AL三连败出局](https://so.toutiao.com/search?keyword=AL三连败出局)
1. [联合国：以色列犯战争罪及危害人类罪](https://so.toutiao.com/search?keyword=联合国：以色列犯战争罪及危害人类罪)
1. [中朝共同举行志愿军抗美援朝纪念活动](https://so.toutiao.com/search?keyword=中朝共同举行志愿军抗美援朝纪念活动)
1. [深圳水贝被挤爆](https://so.toutiao.com/search?keyword=深圳水贝被挤爆)
1. [贝林厄姆今夏世界杯轰入7球](https://so.toutiao.com/search?keyword=贝林厄姆今夏世界杯轰入7球)
1. [杰伦威遭左踝脱臼和腓骨骨折](https://so.toutiao.com/search?keyword=杰伦威遭左踝脱臼和腓骨骨折)
1. [母女被未拴绳大狗逼到墙角 警方回应](https://so.toutiao.com/search?keyword=母女被未拴绳大狗逼到墙角%20警方回应)
1. [安徽亳州打掉一流窜“取现车队”](https://so.toutiao.com/search?keyword=安徽亳州打掉一流窜“取现车队”)
1. [博主谈综艺offer8：临床不是秀场](https://so.toutiao.com/search?keyword=博主谈综艺offer8：临床不是秀场)
1. [多所高校将通过数字人民币发工资](https://so.toutiao.com/search?keyword=多所高校将通过数字人民币发工资)
1. [外交部：中方尊重巴西人民的选择](https://so.toutiao.com/search?keyword=外交部：中方尊重巴西人民的选择)
1. [女子驾车过高架车顶被风筝线割破](https://so.toutiao.com/search?keyword=女子驾车过高架车顶被风筝线割破)
1. [乌克兰战时状态再延长90天](https://so.toutiao.com/search?keyword=乌克兰战时状态再延长90天)
1. [电动自行车行业将迎来新一轮洗牌吗](https://so.toutiao.com/search?keyword=电动自行车行业将迎来新一轮洗牌吗)
1. [上海男篮全场轰进20记三分](https://so.toutiao.com/search?keyword=上海男篮全场轰进20记三分)
1. [巴黎圣日耳曼蝉联最佳男足俱乐部](https://so.toutiao.com/search?keyword=巴黎圣日耳曼蝉联最佳男足俱乐部)
1. [内存条有价无市：渠道价已倒挂](https://so.toutiao.com/search?keyword=内存条有价无市：渠道价已倒挂)
1. [DeepSeek把自家“印钞机”开源了](https://so.toutiao.com/search?keyword=DeepSeek把自家“印钞机”开源了)
1. [每次熬夜都在消耗甲状腺寿命](https://so.toutiao.com/search?keyword=每次熬夜都在消耗甲状腺寿命)
1. [胖东来5名员工遭顾客打骂获补偿](https://so.toutiao.com/search?keyword=胖东来5名员工遭顾客打骂获补偿)
1. [专家：AI视频生成下一步是更高级智能](https://so.toutiao.com/search?keyword=专家：AI视频生成下一步是更高级智能)
1. [交警提醒女子戴头盔：前面罚款嘞](https://so.toutiao.com/search?keyword=交警提醒女子戴头盔：前面罚款嘞)
1. [俄希望塞胜选者建设性对待对俄关系](https://so.toutiao.com/search?keyword=俄希望塞胜选者建设性对待对俄关系)
1. [全城人都在咳嗽 原来是辣椒厂起火](https://so.toutiao.com/search?keyword=全城人都在咳嗽%20原来是辣椒厂起火)
1. [山西的秋天有多值得](https://so.toutiao.com/search?keyword=山西的秋天有多值得)
1. [WTT蒙彼利埃冠军赛国乒今日赛程](https://so.toutiao.com/search?keyword=WTT蒙彼利埃冠军赛国乒今日赛程)
1. [台湾艺人阿雅公开表态“一个中国”](https://so.toutiao.com/search?keyword=台湾艺人阿雅公开表态“一个中国”)
1. [中方就福田康夫逝世表示沉痛哀悼](https://so.toutiao.com/search?keyword=中方就福田康夫逝世表示沉痛哀悼)
1. [女排世界杯中国和三支欧洲队同组](https://so.toutiao.com/search?keyword=女排世界杯中国和三支欧洲队同组)
1. [岛内“九合一”选举白热化](https://so.toutiao.com/search?keyword=岛内“九合一”选举白热化)
1. [卡尼萨雷斯：维尼修斯姆巴佩不能同场](https://so.toutiao.com/search?keyword=卡尼萨雷斯：维尼修斯姆巴佩不能同场)
1. [陆毅晒贝儿18岁生日照](https://so.toutiao.com/search?keyword=陆毅晒贝儿18岁生日照)
1. [星巴克门店顾客减少销量却没受影响](https://so.toutiao.com/search?keyword=星巴克门店顾客减少销量却没受影响)
1. [男子截肢后把自己改造成钢腿侠](https://so.toutiao.com/search?keyword=男子截肢后把自己改造成钢腿侠)
1. [武契奇承认败选](https://so.toutiao.com/search?keyword=武契奇承认败选)
1. [AI短片《齐天大圣》为何能引发关注](https://so.toutiao.com/search?keyword=AI短片《齐天大圣》为何能引发关注)
1. [美军航母加紧接收弹药有何意图](https://so.toutiao.com/search?keyword=美军航母加紧接收弹药有何意图)
1. [勒庞民调领先 法国政坛要变天了吗](https://so.toutiao.com/search?keyword=勒庞民调领先%20法国政坛要变天了吗)
1. [大V：轰6K与舰载机协同暗语意义重大](https://so.toutiao.com/search?keyword=大V：轰6K与舰载机协同暗语意义重大)
1. [华为阔直板Pura X View销量破60万台](https://so.toutiao.com/search?keyword=华为阔直板Pura%20X%20View销量破60万台)
1. [80岁卢拉再次当选巴西总统](https://so.toutiao.com/search?keyword=80岁卢拉再次当选巴西总统)
1. [马克龙承认未能预判骚乱](https://so.toutiao.com/search?keyword=马克龙承认未能预判骚乱)
1. [女子求职遇视频面试要求格式化手机](https://so.toutiao.com/search?keyword=女子求职遇视频面试要求格式化手机)
1. [苹果发布新款iPad mini](https://so.toutiao.com/search?keyword=苹果发布新款iPad%20mini)
1. [现在是抄底黄金的好时机吗](https://so.toutiao.com/search?keyword=现在是抄底黄金的好时机吗)
1. [当钱更值钱了如何守住你的筹码](https://so.toutiao.com/search?keyword=当钱更值钱了如何守住你的筹码)
1. [地震局首次发现西藏7.0级地震破裂带](https://so.toutiao.com/search?keyword=地震局首次发现西藏7.0级地震破裂带)
1. [中国卫星看中国台湾很正常](https://so.toutiao.com/search?keyword=中国卫星看中国台湾很正常)
1. [外交部回应印方诬称中方破坏边境和平](https://so.toutiao.com/search?keyword=外交部回应印方诬称中方破坏边境和平)
1. [北京怀柔向21人送达税务事项通知书](https://so.toutiao.com/search?keyword=北京怀柔向21人送达税务事项通知书)
1. [巴西货币雷亚尔暴跌11.5%](https://so.toutiao.com/search?keyword=巴西货币雷亚尔暴跌11.5%)
1. [《伟大的长征》再现“真理小道”](https://so.toutiao.com/search?keyword=《伟大的长征》再现“真理小道”)
1. [台媒：台湾需要找回光复历史](https://so.toutiao.com/search?keyword=台媒：台湾需要找回光复历史)
1. [乌称曾提不打俄炼油厂条件但美未满足](https://so.toutiao.com/search?keyword=乌称曾提不打俄炼油厂条件但美未满足)
1. [男子用树枝搭建巨型齐天大圣](https://so.toutiao.com/search?keyword=男子用树枝搭建巨型齐天大圣)
1. [日本军演展示射程1000公里岸舰导弹](https://so.toutiao.com/search?keyword=日本军演展示射程1000公里岸舰导弹)
1. [奶奶花12200元给曾孙女买金项链](https://so.toutiao.com/search?keyword=奶奶花12200元给曾孙女买金项链)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Oct 27 2026 07:50:19 GMT+0800 (China Standard Time) -->

1. [县委书记拒绝张雪为家乡打广告](https://www.zhihu.com/search?q=%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%92%E7%BB%9D%E5%BC%A0%E9%9B%AA%E4%B8%BA%E5%AE%B6%E4%B9%A1%E6%89%93%E5%B9%BF%E5%91%8A)
1. [毛不易婚礼致辞争议](https://www.zhihu.com/search?q=%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E8%87%B4%E8%BE%9E%E4%BA%89%E8%AE%AE)
1. [一号种子AL全败出局](https://www.zhihu.com/search?q=%E4%B8%80%E5%8F%B7%E7%A7%8D%E5%AD%90AL%E5%85%A8%E8%B4%A5%E5%87%BA%E5%B1%80)
1. [武契奇承认败选](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A5%91%E5%A5%87%E6%89%BF%E8%AE%A4%E8%B4%A5%E9%80%89)
1. [曝编制内退休金或将封顶](https://www.zhihu.com/search?q=%E6%9B%9D%E7%BC%96%E5%88%B6%E5%86%85%E9%80%80%E4%BC%91%E9%87%91%E6%88%96%E5%B0%86%E5%B0%81%E9%A1%B6)
1. [AL 0:2 TLAW](https://www.zhihu.com/search?q=AL%200%3A2%20TLAW)
1. [日剧Vivant抹黑中国](https://www.zhihu.com/search?q=%E6%97%A5%E5%89%A7Vivant%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD)
1. [中土网民爆发大规模互怼](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9C%9F%E7%BD%91%E6%B0%91%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%92%E6%80%BC)
1. [凯恩获2026年金球奖](https://www.zhihu.com/search?q=%E5%87%AF%E6%81%A9%E8%8E%B72026%E5%B9%B4%E9%87%91%E7%90%83%E5%A5%96)
1. [T1战胜CFO](https://www.zhihu.com/search?q=T1%E6%88%98%E8%83%9CCFO)
1. [全国总人口面临跌破 14 亿](https://www.zhihu.com/search?q=%E5%85%A8%E5%9B%BD%E6%80%BB%E4%BA%BA%E5%8F%A3%E9%9D%A2%E4%B8%B4%E8%B7%8C%E7%A0%B4%2014%20%E4%BA%BF)
1. [金价大跌](https://www.zhihu.com/search?q=%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C)
1. [国务院要求优化家庭财税稳人口](https://www.zhihu.com/search?q=%E5%9B%BD%E5%8A%A1%E9%99%A2%E8%A6%81%E6%B1%82%E4%BC%98%E5%8C%96%E5%AE%B6%E5%BA%AD%E8%B4%A2%E7%A8%8E%E7%A8%B3%E4%BA%BA%E5%8F%A3)
1. [江苏姑娘网购鹤岗房搬进去后傻眼](https://www.zhihu.com/search?q=%E6%B1%9F%E8%8B%8F%E5%A7%91%E5%A8%98%E7%BD%91%E8%B4%AD%E9%B9%A4%E5%B2%97%E6%88%BF%E6%90%AC%E8%BF%9B%E5%8E%BB%E5%90%8E%E5%82%BB%E7%9C%BC)
1. [樊振东去巴萨主场被反复质疑盘查](https://www.zhihu.com/search?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8E%BB%E5%B7%B4%E8%90%A8%E4%B8%BB%E5%9C%BA%E8%A2%AB%E5%8F%8D%E5%A4%8D%E8%B4%A8%E7%96%91%E7%9B%98%E6%9F%A5)
1. [重点中学高一多班学生因心理休学](https://www.zhihu.com/search?q=%E9%87%8D%E7%82%B9%E4%B8%AD%E5%AD%A6%E9%AB%98%E4%B8%80%E5%A4%9A%E7%8F%AD%E5%AD%A6%E7%94%9F%E5%9B%A0%E5%BF%83%E7%90%86%E4%BC%91%E5%AD%A6)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Oct 27 2026 07:55:37 GMT+0800 (China Standard Time) -->

1. [S16瑞士轮第 3 轮低分淘汰赛，AL0:2TLAW，被称为LPL历史最差一号种子，如何评价这场比赛？](https://www.zhihu.com/question/2098163161492711200)
1. [2026年第70届金球奖揭晓，凯恩获得最佳射手奖和金球奖，如何评价这一结果？](https://www.zhihu.com/question/2098093756930942200)
1. [江苏多所高校将用数字人民币发工资，数字人民币与银行卡发工资有啥区别？这一举措会带来哪些改变？](https://www.zhihu.com/question/2098056179788391400)
1. [如何看待老干妈回应「用AI把600名工人裁到48人」，称是不实信息？品牌能挽回消费者信任吗？](https://www.zhihu.com/question/2098102680065237000)
1. [菲尔兹奖得主邓煜评论 AI 公司「你不能只在你蒸馏全人类的知识时支持蒸馏」，如何看待模型厂的反蒸馏？](https://www.zhihu.com/question/2097984108207028000)
1. [哈利波特发现自己继承了父母的巨额遗产后，为什么不分点给姨夫姨妈一家报答养育之恩？](https://www.zhihu.com/question/2089734782263608300)
1. [「南北」奥迪正式分家，四环归一汽，AUDI 归上汽，背后出于怎样的商业考量？将带来哪些影响？](https://www.zhihu.com/question/2098099746560631300)
1. [国家为什么迟迟不肯挖掘秦始皇陵呢？](https://www.zhihu.com/question/640845812)
1. [为什么广东那么潮湿却没养成吃辣椒祛湿的习惯？](https://www.zhihu.com/question/7406306582)
1. [广西通报地头水柜多只猴子溺亡，系猴群饮水不慎溺亡，目前调查处理进展如何？为什么会出现这种情况？](https://www.zhihu.com/question/2097639793186140200)
1. [你是怎么突然发现同事很有钱的？](https://www.zhihu.com/question/521349541)
1. [年轻人流行起「重养父母」，教妈妈护肤、帮爸爸抢演唱会票，怎样看待这种反向哺育？其中的边界感该如何把控？](https://www.zhihu.com/question/2088693226144281000)
1. [红灯变绿后，为什么总有前车要愣两三秒才起步？](https://www.zhihu.com/question/2090404697324767200)
1. [如何看待Anthropic提交IPO申请，将以「ANT」为代码登陆纳斯达克？会给AI行业带来哪些改变？](https://www.zhihu.com/question/2098146460403615500)
1. [家长在大群发问“孩子回家说位置调到最后一排，是哪里得罪您了吗”，班主任直接回应，大家怎么看待这件事？](https://www.zhihu.com/question/2097410474967045600)
1. [369 赛后采访称「本来做好了挨揍准备，结果发现大家好像也没差太多」是他天赋高还是本届上单地位有下滑？](https://www.zhihu.com/question/2098127364982924000)
1. [为什么那些大佬每天要处理许多事情，还精力充沛?](https://www.zhihu.com/question/324629382)
1. [毛不易婚礼致辞事件会对他的事业造成影响吗？](https://www.zhihu.com/question/2098125716218803700)
1. [如何看待郑州马拉松一男子系绳带 9 岁儿童跑全马被禁赛三年？儿童跑马拉松有哪些健康风险？](https://www.zhihu.com/question/2097127599608804900)
1. [如何评价呼和浩特盛乐国际机场将于 2026 年 11 月 26 日正式投入运营？](https://www.zhihu.com/question/2095554256300413000)
1. [如何看待六小龄童称「圣黛CP」既有意义也很有趣，但需做好正确引导？你认为文艺作品的二创需要设立底线吗？](https://www.zhihu.com/question/2095160220192396300)
1. [如何评价国乒在2026年亚锦赛4金4银4铜收官，林诗栋减项全胜、李天阳打进决赛、陈熠女单登顶的表现？](https://www.zhihu.com/question/2097962353572712700)
1. [为什么说脱离 AI 的「古法编程」能夯实程序员底层功底？](https://www.zhihu.com/question/2065527864926147600)
1. [《琵琶行》中白居易听曲后痛哭的描写，是不是写得太假了？](https://www.zhihu.com/question/2096287227579996200)
1. [如何看待电竞俱乐部Vitality（小蜜蜂）巴黎总部，在法国大规模抗议示威引发的骚乱中遭到打砸洗劫？](https://www.zhihu.com/question/2095166943930086000)
1. [既然国家允许重新高考，为什么不少经济条件尚可、没有巨大生存压力的成年人，依然不选择报考？](https://www.zhihu.com/question/2089867471700414700)
1. [DeepSeek 营收只有几亿，却融资上千亿，这种模式合理吗？](https://www.zhihu.com/question/2095940115537334500)
1. [父母总说“我都是为你好”，到底是真心为孩子，还是在满足自己的期待？](https://www.zhihu.com/question/2084037194780616000)
1. [存款一百万是啥感觉呀？](https://www.zhihu.com/question/2095941035755057700)
1. [如何和亲戚长辈聊天，长辈说话，想接话，但是不知道怎么接？](https://www.zhihu.com/question/2013340298986673000)
1. [县委书记拒绝张雪为家乡特产打广告，说插播广告会很烦，这番言论为何能出圈？麻阳红糖、冰糖橙产业现状如何？](https://www.zhihu.com/question/2097674829826450400)
1. [即便真的有人像夏洛一样穿越回1997年抄袭了周杰伦的全部歌曲，周杰伦就无法创作出同等水平的歌曲了么？](https://www.zhihu.com/question/46809190)
1. [《影之刃零》的媒体评分正式解禁，M站87分、22家媒体普遍好评，你如何评价这个结果？](https://www.zhihu.com/question/2097962790162059500)
1. [如何看待iPhone Duo才开卖一天，网上就很多内屏损坏的案例，而且在同一个位置？](https://www.zhihu.com/question/2097264250158949600)
1. [CBA开赛后以贺希宁、庞峥麟为首的一批国家队球员状态急剧下滑，这是什么原因，未来国家队会继续集训吗？](https://www.zhihu.com/question/2098057868544926700)
1. [毛不易如何公关才能应对这次的「婚礼致辞」事件？](https://www.zhihu.com/question/2097762495922546700)
1. [如何看待雷鸟的「BLG不夺冠，雷鸟全退款」活动？](https://www.zhihu.com/question/2096979329322333700)
1. [你见过最不会点菜的人是什么样子的？](https://www.zhihu.com/question/40739580)
1. [在小说《龙族》中，路明非与陈墨瞳、恺撒的三角关系有一个完美的解法吗？](https://www.zhihu.com/question/2064858139032343600)
1. [你听过什么有趣的冷知识？](https://www.zhihu.com/question/6212426520)
1. [为什么在七龙珠里孙悟空没有和布玛在一起？](https://www.zhihu.com/question/31143864)
1. [你今天吃了什么美食，分享一下？](https://www.zhihu.com/question/1919425947507090700)
1. [在职场人际关系中，你觉得「团队」的感受和「个人」的感受哪个更重要，如何做取舍？](https://www.zhihu.com/question/1896574288259150800)

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
<!-- 最后更新时间 Tue Oct 27 2026 08:36:24 GMT+0800 (China Standard Time) -->

1. [党的二十届五中全会](https://s.weibo.com//weibo?q=%23%E5%85%9A%E7%9A%84%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%23&Refer=new_time)
1. [凯恩获2026年金球奖](https://s.weibo.com//weibo?q=%23%E5%87%AF%E6%81%A9%E8%8E%B72026%E5%B9%B4%E9%87%91%E7%90%83%E5%A5%96%23&t=31&band_rank=1&Refer=top)
1. [AL史上最差成绩LPL队伍](https://s.weibo.com//weibo?q=%23AL%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%B7%AE%E6%88%90%E7%BB%A9LPL%E9%98%9F%E4%BC%8D%23&t=31&band_rank=2&Refer=top)
1. [数说中国外贸澎湃动能](https://s.weibo.com//weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E5%A4%96%E8%B4%B8%E6%BE%8E%E6%B9%83%E5%8A%A8%E8%83%BD%23&t=31&band_rank=3&Refer=top)
1. [刚入职叫女领导一个月熊大](https://s.weibo.com//weibo?q=%E5%88%9A%E5%85%A5%E8%81%8C%E5%8F%AB%E5%A5%B3%E9%A2%86%E5%AF%BC%E4%B8%80%E4%B8%AA%E6%9C%88%E7%86%8A%E5%A4%A7&t=31&band_rank=4&Refer=top)
1. [iOS27.2禁止摇一摇跳转](https://s.weibo.com//weibo?q=iOS27.2%E7%A6%81%E6%AD%A2%E6%91%87%E4%B8%80%E6%91%87%E8%B7%B3%E8%BD%AC&t=31&band_rank=5&Refer=top)
1. [金球奖排名](https://s.weibo.com//weibo?q=%E9%87%91%E7%90%83%E5%A5%96%E6%8E%92%E5%90%8D&t=31&band_rank=6&Refer=top)
1. [凯恩发表获奖感言时亚马尔表情](https://s.weibo.com//weibo?q=%23%E5%87%AF%E6%81%A9%E5%8F%91%E8%A1%A8%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%E6%97%B6%E4%BA%9A%E9%A9%AC%E5%B0%94%E8%A1%A8%E6%83%85%23&t=31&band_rank=7&Refer=top)
1. [TES又在瑞士轮打BLG](https://s.weibo.com//weibo?q=%23TES%E5%8F%88%E5%9C%A8%E7%91%9E%E5%A3%AB%E8%BD%AE%E6%89%93BLG%23&t=31&band_rank=8&Refer=top)
1. [S16瑞士轮第四轮抽签](https://s.weibo.com//weibo?q=S16%E7%91%9E%E5%A3%AB%E8%BD%AE%E7%AC%AC%E5%9B%9B%E8%BD%AE%E6%8A%BD%E7%AD%BE&t=31&band_rank=9&Refer=top)
1. [金球奖](https://s.weibo.com//weibo?q=%E9%87%91%E7%90%83%E5%A5%96&t=31&band_rank=10&Refer=top)
1. [老公把我要走了换成出去玩儿啦](https://s.weibo.com//weibo?q=%E8%80%81%E5%85%AC%E6%8A%8A%E6%88%91%E8%A6%81%E8%B5%B0%E4%BA%86%E6%8D%A2%E6%88%90%E5%87%BA%E5%8E%BB%E7%8E%A9%E5%84%BF%E5%95%A6&t=31&band_rank=11&Refer=top)
1. [肖战控诉王彦霖](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%8E%A7%E8%AF%89%E7%8E%8B%E5%BD%A6%E9%9C%96%23&t=31&band_rank=12&Refer=top)
1. [樊振东用荒诞形容首次诺坎普之旅](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%94%A8%E8%8D%92%E8%AF%9E%E5%BD%A2%E5%AE%B9%E9%A6%96%E6%AC%A1%E8%AF%BA%E5%9D%8E%E6%99%AE%E4%B9%8B%E6%97%85%23&t=31&band_rank=13&Refer=top)
1. [金球奖前十](https://s.weibo.com//weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%E5%89%8D%E5%8D%81%23&t=31&band_rank=14&Refer=top)
1. [iG抽签对阵LYON](https://s.weibo.com//weibo?q=%23iG%E6%8A%BD%E7%AD%BE%E5%AF%B9%E9%98%B5LYON%23&t=31&band_rank=15&Refer=top)
1. [AL一号种子16强](https://s.weibo.com//weibo?q=%23AL%E4%B8%80%E5%8F%B7%E7%A7%8D%E5%AD%9016%E5%BC%BA%23&t=31&band_rank=16&Refer=top)
1. [AL淘汰](https://s.weibo.com//weibo?q=AL%E6%B7%98%E6%B1%B0&t=31&band_rank=17&Refer=top)
1. [LPL连续两年一号种子止步16强](https://s.weibo.com//weibo?q=%23LPL%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%B9%B4%E4%B8%80%E5%8F%B7%E7%A7%8D%E5%AD%90%E6%AD%A2%E6%AD%A516%E5%BC%BA%23&t=31&band_rank=18&Refer=top)
1. [肖战做好拿奖的准备吧](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%81%9A%E5%A5%BD%E6%8B%BF%E5%A5%96%E7%9A%84%E5%87%86%E5%A4%87%E5%90%A7%23&t=31&band_rank=19&Refer=top)
1. [足坛众星恭喜凯恩](https://s.weibo.com//weibo?q=%23%E8%B6%B3%E5%9D%9B%E4%BC%97%E6%98%9F%E6%81%AD%E5%96%9C%E5%87%AF%E6%81%A9%23&t=31&band_rank=20&Refer=top)
1. [不刷牙吃早餐vs不刷牙睡觉](https://s.weibo.com//weibo?q=%23%E4%B8%8D%E5%88%B7%E7%89%99%E5%90%83%E6%97%A9%E9%A4%90vs%E4%B8%8D%E5%88%B7%E7%89%99%E7%9D%A1%E8%A7%89%23&t=31&band_rank=21&Refer=top)
1. [孟子义李昀锐分手感](https://s.weibo.com//weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E5%88%86%E6%89%8B%E6%84%9F%23&t=31&band_rank=22&Refer=top)
1. [凯恩获奖后拜仁官推激动坏了](https://s.weibo.com//weibo?q=%23%E5%87%AF%E6%81%A9%E8%8E%B7%E5%A5%96%E5%90%8E%E6%8B%9C%E4%BB%81%E5%AE%98%E6%8E%A8%E6%BF%80%E5%8A%A8%E5%9D%8F%E4%BA%86%23&t=31&band_rank=23&Refer=top)
1. [张子萱一见面就扑进陈赫怀里](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AD%90%E8%90%B1%E4%B8%80%E8%A7%81%E9%9D%A2%E5%B0%B1%E6%89%91%E8%BF%9B%E9%99%88%E8%B5%AB%E6%80%80%E9%87%8C%23&t=31&band_rank=24&Refer=top)
1. [爱笑 AL](https://s.weibo.com//weibo?q=%E7%88%B1%E7%AC%91%20AL&t=31&band_rank=25&Refer=top)
1. [欧阳娣娣悄悄偷瞄姐姐欧阳娜娜](https://s.weibo.com//weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%A3%E5%A8%A3%E6%82%84%E6%82%84%E5%81%B7%E7%9E%84%E5%A7%90%E5%A7%90%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%23&t=31&band_rank=26&Refer=top)
1. [S16](https://s.weibo.com//weibo?q=%23S16%23&t=31&band_rank=27&Refer=top)
1. [城管摇了摊主好了顾客笑了](https://s.weibo.com//weibo?q=%23%E5%9F%8E%E7%AE%A1%E6%91%87%E4%BA%86%E6%91%8A%E4%B8%BB%E5%A5%BD%E4%BA%86%E9%A1%BE%E5%AE%A2%E7%AC%91%E4%BA%86%23&t=31&band_rank=28&Refer=top)
1. [方媛晒一家五口合照为郭富城庆生](https://s.weibo.com//weibo?q=%23%E6%96%B9%E5%AA%9B%E6%99%92%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E5%90%88%E7%85%A7%E4%B8%BA%E9%83%AD%E5%AF%8C%E5%9F%8E%E5%BA%86%E7%94%9F%23&t=31&band_rank=29&Refer=top)
1. [2个衣架轻松收纳大衣](https://s.weibo.com//weibo?q=%232%E4%B8%AA%E8%A1%A3%E6%9E%B6%E8%BD%BB%E6%9D%BE%E6%94%B6%E7%BA%B3%E5%A4%A7%E8%A1%A3%23&t=31&band_rank=30&Refer=top)
1. [管泽元回应AL十六强](https://s.weibo.com//weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E5%9B%9E%E5%BA%94AL%E5%8D%81%E5%85%AD%E5%BC%BA%23&t=31&band_rank=31&Refer=top)
1. [苏醒曾借给王栎鑫100万](https://s.weibo.com//weibo?q=%23%E8%8B%8F%E9%86%92%E6%9B%BE%E5%80%9F%E7%BB%99%E7%8E%8B%E6%A0%8E%E9%91%AB100%E4%B8%87%23&t=31&band_rank=32&Refer=top)
1. [新款iPadmini发布](https://s.weibo.com//weibo?q=%23%E6%96%B0%E6%AC%BEiPadmini%E5%8F%91%E5%B8%83%23&t=31&band_rank=33&Refer=top)
1. [韩国真有那么不堪吗](https://s.weibo.com//weibo?q=%E9%9F%A9%E5%9B%BD%E7%9C%9F%E6%9C%89%E9%82%A3%E4%B9%88%E4%B8%8D%E5%A0%AA%E5%90%97&t=31&band_rank=34&Refer=top)
1. [BLG战胜KC](https://s.weibo.com//weibo?q=BLG%E6%88%98%E8%83%9CKC&t=31&band_rank=35&Refer=top)
1. [侯明昊百妖谱客串](https://s.weibo.com//weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E7%99%BE%E5%A6%96%E8%B0%B1%E5%AE%A2%E4%B8%B2%23&t=31&band_rank=36&Refer=top)
1. [国企欠款上千万元称先给十万八万](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%BC%81%E6%AC%A0%E6%AC%BE%E4%B8%8A%E5%8D%83%E4%B8%87%E5%85%83%E7%A7%B0%E5%85%88%E7%BB%99%E5%8D%81%E4%B8%87%E5%85%AB%E4%B8%87%23&t=31&band_rank=37&Refer=top)
1. [米勒回应AL止步十六强](https://s.weibo.com//weibo?q=%23%E7%B1%B3%E5%8B%92%E5%9B%9E%E5%BA%94AL%E6%AD%A2%E6%AD%A5%E5%8D%81%E5%85%AD%E5%BC%BA%23&t=31&band_rank=38&Refer=top)
1. [iPadmini8 128GB存储](https://s.weibo.com//weibo?q=iPadmini8%20128GB%E5%AD%98%E5%82%A8&t=31&band_rank=39&Refer=top)
1. [过度缺爱滋生的补偿性满足](https://s.weibo.com//weibo?q=%E8%BF%87%E5%BA%A6%E7%BC%BA%E7%88%B1%E6%BB%8B%E7%94%9F%E7%9A%84%E8%A1%A5%E5%81%BF%E6%80%A7%E6%BB%A1%E8%B6%B3&t=31&band_rank=40&Refer=top)
1. [TLAW对战AL](https://s.weibo.com//weibo?q=%23TLAW%E5%AF%B9%E6%88%98AL%23&t=31&band_rank=41&Refer=top)
1. [凯恩金球奖解三渴](https://s.weibo.com//weibo?q=%23%E5%87%AF%E6%81%A9%E9%87%91%E7%90%83%E5%A5%96%E8%A7%A3%E4%B8%89%E6%B8%B4%23&t=31&band_rank=42&Refer=top)
1. [AL告别S16](https://s.weibo.com//weibo?q=%23AL%E5%91%8A%E5%88%ABS16%23&t=31&band_rank=43&Refer=top)
1. [欧阳娜娜在娣娣面前姐感好强](https://s.weibo.com//weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%9C%A8%E5%A8%A3%E5%A8%A3%E9%9D%A2%E5%89%8D%E5%A7%90%E6%84%9F%E5%A5%BD%E5%BC%BA%23&t=31&band_rank=44&Refer=top)
1. [县委书记被扔下水没必要尬吹硬捧](https://s.weibo.com//weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%A2%AB%E6%89%94%E4%B8%8B%E6%B0%B4%E6%B2%A1%E5%BF%85%E8%A6%81%E5%B0%AC%E5%90%B9%E7%A1%AC%E6%8D%A7%23&t=31&band_rank=45&Refer=top)
1. [T1大概率抽到LPL](https://s.weibo.com//weibo?q=%23T1%E5%A4%A7%E6%A6%82%E7%8E%87%E6%8A%BD%E5%88%B0LPL%23&t=31&band_rank=46&Refer=top)
1. [后会友期](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F&t=31&band_rank=47&Refer=top)
1. [赵本山Dangerous不笑不行](https://s.weibo.com//weibo?q=%E8%B5%B5%E6%9C%AC%E5%B1%B1Dangerous%E4%B8%8D%E7%AC%91%E4%B8%8D%E8%A1%8C&t=31&band_rank=48&Refer=top)
1. [你花钱多的地方常常是你的创伤所在](https://s.weibo.com//weibo?q=%E4%BD%A0%E8%8A%B1%E9%92%B1%E5%A4%9A%E7%9A%84%E5%9C%B0%E6%96%B9%E5%B8%B8%E5%B8%B8%E6%98%AF%E4%BD%A0%E7%9A%84%E5%88%9B%E4%BC%A4%E6%89%80%E5%9C%A8&t=31&band_rank=49&Refer=top)
1. [VOGUE舆情词云迪丽热巴热度](https://s.weibo.com//weibo?q=%23VOGUE%E8%88%86%E6%83%85%E8%AF%8D%E4%BA%91%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%83%AD%E5%BA%A6%23&t=31&band_rank=50&Refer=top)
1. [T1大概率抽到LPL](https://s.weibo.com//weibo?q=%23T1%E5%A4%A7%E6%A6%82%E7%8E%87%E6%8A%BD%E5%88%B0LPL%23&t=31&band_rank=1&Refer=top)
1. [来自ON的神钩一锤定音](https://s.weibo.com//weibo?q=%23%E6%9D%A5%E8%87%AAON%E7%9A%84%E7%A5%9E%E9%92%A9%E4%B8%80%E9%94%A4%E5%AE%9A%E9%9F%B3%23&t=31&band_rank=2&Refer=top)
1. [外媒聚焦二十届五中全会](https://s.weibo.com//weibo?q=%23%E5%A4%96%E5%AA%92%E8%81%9A%E7%84%A6%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%23&t=31&band_rank=3&Refer=top)
1. [金球揭晓时间](https://s.weibo.com//weibo?q=%23%E9%87%91%E7%90%83%E6%8F%AD%E6%99%93%E6%97%B6%E9%97%B4%23&t=31&band_rank=4&Refer=top)
1. [CFO对战T1](https://s.weibo.com//weibo?q=%23CFO%E5%AF%B9%E6%88%98T1%23&t=31&band_rank=5&Refer=top)
1. [樊振东分享观赛西班牙国家德比](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%88%86%E4%BA%AB%E8%A7%82%E8%B5%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%9B%BD%E5%AE%B6%E5%BE%B7%E6%AF%94%23&t=31&band_rank=6&Refer=top)
1. [樊振东国家德比观后感](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%BD%E5%AE%B6%E5%BE%B7%E6%AF%94%E8%A7%82%E5%90%8E%E6%84%9F%23&t=31&band_rank=7&Refer=top)
1. [2个衣架轻松收纳大衣](https://s.weibo.com//weibo?q=%232%E4%B8%AA%E8%A1%A3%E6%9E%B6%E8%BD%BB%E6%9D%BE%E6%94%B6%E7%BA%B3%E5%A4%A7%E8%A1%A3%23&t=31&band_rank=8&Refer=top)
1. [LPL大概率又要内战了](https://s.weibo.com//weibo?q=%23LPL%E5%A4%A7%E6%A6%82%E7%8E%87%E5%8F%88%E8%A6%81%E5%86%85%E6%88%98%E4%BA%86%23&t=31&band_rank=9&Refer=top)
1. [玉簟秋](https://s.weibo.com//weibo?q=%E7%8E%89%E7%B0%9F%E7%A7%8B&t=31&band_rank=10&Refer=top)
1. [iPad mini](https://s.weibo.com//weibo?q=iPad%20mini&t=31&band_rank=12&Refer=top)
1. [Keria两波完美先手](https://s.weibo.com//weibo?q=%23Keria%E4%B8%A4%E6%B3%A2%E5%AE%8C%E7%BE%8E%E5%85%88%E6%89%8B%23&t=31&band_rank=13&Refer=top)
1. [樊振东用荒诞形容首次诺坎普之旅](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%94%A8%E8%8D%92%E8%AF%9E%E5%BD%A2%E5%AE%B9%E9%A6%96%E6%AC%A1%E8%AF%BA%E5%9D%8E%E6%99%AE%E4%B9%8B%E6%97%85%23&t=31&band_rank=14&Refer=top)
1. [新款iPadmini发布](https://s.weibo.com//weibo?q=%23%E6%96%B0%E6%AC%BEiPadmini%E5%8F%91%E5%B8%83%23&t=31&band_rank=15&Refer=top)
1. [后会友期 臭鱼烂虾爱看的节目](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E8%87%AD%E9%B1%BC%E7%83%82%E8%99%BE%E7%88%B1%E7%9C%8B%E7%9A%84%E8%8A%82%E7%9B%AE&t=31&band_rank=16&Refer=top)
1. [被张雪扔下水县委书记拿到大结果](https://s.weibo.com//weibo?q=%23%E8%A2%AB%E5%BC%A0%E9%9B%AA%E6%89%94%E4%B8%8B%E6%B0%B4%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%BF%E5%88%B0%E5%A4%A7%E7%BB%93%E6%9E%9C%23&t=31&band_rank=17&Refer=top)
1. [iPhoneDuo折叠挑战后摔坏](https://s.weibo.com//weibo?q=iPhoneDuo%E6%8A%98%E5%8F%A0%E6%8C%91%E6%88%98%E5%90%8E%E6%91%94%E5%9D%8F&t=31&band_rank=18&Refer=top)
1. [别对需要独居的人谈弊端](https://s.weibo.com//weibo?q=%E5%88%AB%E5%AF%B9%E9%9C%80%E8%A6%81%E7%8B%AC%E5%B1%85%E7%9A%84%E4%BA%BA%E8%B0%88%E5%BC%8A%E7%AB%AF&t=31&band_rank=19&Refer=top)
1. [凯恩造81球本世纪金球得主排第4](https://s.weibo.com//weibo?q=%23%E5%87%AF%E6%81%A9%E9%80%A081%E7%90%83%E6%9C%AC%E4%B8%96%E7%BA%AA%E9%87%91%E7%90%83%E5%BE%97%E4%B8%BB%E6%8E%92%E7%AC%AC4%23&t=31&band_rank=20&Refer=top)
1. [欧阳娜娜在娣娣面前姐感好强](https://s.weibo.com//weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%9C%A8%E5%A8%A3%E5%A8%A3%E9%9D%A2%E5%89%8D%E5%A7%90%E6%84%9F%E5%A5%BD%E5%BC%BA%23&t=31&band_rank=21&Refer=top)
1. [徐艺洋个人品牌多次使用小海豚元素](https://s.weibo.com//weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E4%B8%AA%E4%BA%BA%E5%93%81%E7%89%8C%E5%A4%9A%E6%AC%A1%E4%BD%BF%E7%94%A8%E5%B0%8F%E6%B5%B7%E8%B1%9A%E5%85%83%E7%B4%A0%23&t=31&band_rank=22&Refer=top)
1. [老干妈日销售额从万元跌至千元](https://s.weibo.com//weibo?q=%23%E8%80%81%E5%B9%B2%E5%A6%88%E6%97%A5%E9%94%80%E5%94%AE%E9%A2%9D%E4%BB%8E%E4%B8%87%E5%85%83%E8%B7%8C%E8%87%B3%E5%8D%83%E5%85%83%23&t=31&band_rank=23&Refer=top)
1. [你花钱多的地方常常是你的创伤所在](https://s.weibo.com//weibo?q=%E4%BD%A0%E8%8A%B1%E9%92%B1%E5%A4%9A%E7%9A%84%E5%9C%B0%E6%96%B9%E5%B8%B8%E5%B8%B8%E6%98%AF%E4%BD%A0%E7%9A%84%E5%88%9B%E4%BC%A4%E6%89%80%E5%9C%A8&t=31&band_rank=24&Refer=top)
1. [所有艺人行程汇报都应该这样](https://s.weibo.com//weibo?q=%E6%89%80%E6%9C%89%E8%89%BA%E4%BA%BA%E8%A1%8C%E7%A8%8B%E6%B1%87%E6%8A%A5%E9%83%BD%E5%BA%94%E8%AF%A5%E8%BF%99%E6%A0%B7&t=31&band_rank=25&Refer=top)
1. [建议女生慎买iPhoneDuo](https://s.weibo.com//weibo?q=%E5%BB%BA%E8%AE%AE%E5%A5%B3%E7%94%9F%E6%85%8E%E4%B9%B0iPhoneDuo&t=31&band_rank=26&Refer=top)
1. [韩国真有那么不堪吗](https://s.weibo.com//weibo?q=%E9%9F%A9%E5%9B%BD%E7%9C%9F%E6%9C%89%E9%82%A3%E4%B9%88%E4%B8%8D%E5%A0%AA%E5%90%97&t=31&band_rank=27&Refer=top)
1. [朋友为去世猫咪找同款猫](https://s.weibo.com//weibo?q=%E6%9C%8B%E5%8F%8B%E4%B8%BA%E5%8E%BB%E4%B8%96%E7%8C%AB%E5%92%AA%E6%89%BE%E5%90%8C%E6%AC%BE%E7%8C%AB&t=31&band_rank=28&Refer=top)
1. [苹果被疑走向雪崩](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%E8%A2%AB%E7%96%91%E8%B5%B0%E5%90%91%E9%9B%AA%E5%B4%A9&t=31&band_rank=29&Refer=top)
1. [县委书记被扔下水没必要尬吹硬捧](https://s.weibo.com//weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%A2%AB%E6%89%94%E4%B8%8B%E6%B0%B4%E6%B2%A1%E5%BF%85%E8%A6%81%E5%B0%AC%E5%90%B9%E7%A1%AC%E6%8D%A7%23&t=31&band_rank=30&Refer=top)
1. [采耳后感觉脑子都被抽空了](https://s.weibo.com//weibo?q=%E9%87%87%E8%80%B3%E5%90%8E%E6%84%9F%E8%A7%89%E8%84%91%E5%AD%90%E9%83%BD%E8%A2%AB%E6%8A%BD%E7%A9%BA%E4%BA%86&t=31&band_rank=31&Refer=top)
1. [肖战刘铮亮看到男生撒娇眼神都清澈了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%88%98%E9%93%AE%E4%BA%AE%E7%9C%8B%E5%88%B0%E7%94%B7%E7%94%9F%E6%92%92%E5%A8%87%E7%9C%BC%E7%A5%9E%E9%83%BD%E6%B8%85%E6%BE%88%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [瑞幸联名王者KPL](https://s.weibo.com//weibo?q=%23%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%E7%8E%8B%E8%80%85KPL%23&t=31&band_rank=33&Refer=top)
1. [可算知道奇形怪状的快递盒哪来的了](https://s.weibo.com//weibo?q=%E5%8F%AF%E7%AE%97%E7%9F%A5%E9%81%93%E5%A5%87%E5%BD%A2%E6%80%AA%E7%8A%B6%E7%9A%84%E5%BF%AB%E9%80%92%E7%9B%92%E5%93%AA%E6%9D%A5%E7%9A%84%E4%BA%86&t=31&band_rank=34&Refer=top)
1. [FNC悼念Cyanide](https://s.weibo.com//weibo?q=%23FNC%E6%82%BC%E5%BF%B5Cyanide%23&t=31&band_rank=35&Refer=top)
1. [国企欠款上千万元称先给十万八万](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%BC%81%E6%AC%A0%E6%AC%BE%E4%B8%8A%E5%8D%83%E4%B8%87%E5%85%83%E7%A7%B0%E5%85%88%E7%BB%99%E5%8D%81%E4%B8%87%E5%85%AB%E4%B8%87%23&t=31&band_rank=36&Refer=top)
1. [肖战新剧遇到入室抢劫的爱情](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%96%B0%E5%89%A7%E9%81%87%E5%88%B0%E5%85%A5%E5%AE%A4%E6%8A%A2%E5%8A%AB%E7%9A%84%E7%88%B1%E6%83%85%23&t=31&band_rank=37&Refer=top)
1. [职场同事原话能有多刻薄](https://s.weibo.com//weibo?q=%E8%81%8C%E5%9C%BA%E5%90%8C%E4%BA%8B%E5%8E%9F%E8%AF%9D%E8%83%BD%E6%9C%89%E5%A4%9A%E5%88%BB%E8%96%84&t=31&band_rank=38&Refer=top)
1. [后会友期工作人员爆料](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%88%86%E6%96%99%23&t=31&band_rank=39&Refer=top)
1. [城管摇了摊主好了顾客笑了](https://s.weibo.com//weibo?q=%23%E5%9F%8E%E7%AE%A1%E6%91%87%E4%BA%86%E6%91%8A%E4%B8%BB%E5%A5%BD%E4%BA%86%E9%A1%BE%E5%AE%A2%E7%AC%91%E4%BA%86%23&t=31&band_rank=40&Refer=top)
1. [焦虑的p人在这里集合](https://s.weibo.com//weibo?q=%E7%84%A6%E8%99%91%E7%9A%84p%E4%BA%BA%E5%9C%A8%E8%BF%99%E9%87%8C%E9%9B%86%E5%90%88&t=31&band_rank=41&Refer=top)
1. [内存条有价无市](https://s.weibo.com//weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E6%9C%89%E4%BB%B7%E6%97%A0%E5%B8%82%23&t=31&band_rank=42&Refer=top)
1. [新疆网红被热巴娜扎震惊到](https://s.weibo.com//weibo?q=%23%E6%96%B0%E7%96%86%E7%BD%91%E7%BA%A2%E8%A2%AB%E7%83%AD%E5%B7%B4%E5%A8%9C%E6%89%8E%E9%9C%87%E6%83%8A%E5%88%B0%23&t=31&band_rank=43&Refer=top)
1. [尚公主能逆风翻盘吗](https://s.weibo.com//weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E8%83%BD%E9%80%86%E9%A3%8E%E7%BF%BB%E7%9B%98%E5%90%97%23&t=31&band_rank=44&Refer=top)
1. [榜一大哥打赏100万要女主播缴22万税](https://s.weibo.com//weibo?q=%23%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E6%89%93%E8%B5%8F100%E4%B8%87%E8%A6%81%E5%A5%B3%E4%B8%BB%E6%92%AD%E7%BC%B422%E4%B8%87%E7%A8%8E%23&t=31&band_rank=45&Refer=top)
1. [美人心计 我赢了也这么胡说八道](https://s.weibo.com//weibo?q=%E7%BE%8E%E4%BA%BA%E5%BF%83%E8%AE%A1%20%E6%88%91%E8%B5%A2%E4%BA%86%E4%B9%9F%E8%BF%99%E4%B9%88%E8%83%A1%E8%AF%B4%E5%85%AB%E9%81%93&t=31&band_rank=46&Refer=top)
1. [JackeyLove世界赛总击杀数排名](https://s.weibo.com//weibo?q=%23JackeyLove%E4%B8%96%E7%95%8C%E8%B5%9B%E6%80%BB%E5%87%BB%E6%9D%80%E6%95%B0%E6%8E%92%E5%90%8D%23&t=31&band_rank=47&Refer=top)
1. [为中土论战中理性的中国网友点赞](https://s.weibo.com//weibo?q=%23%E4%B8%BA%E4%B8%AD%E5%9C%9F%E8%AE%BA%E6%88%98%E4%B8%AD%E7%90%86%E6%80%A7%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%BD%91%E5%8F%8B%E7%82%B9%E8%B5%9E%23&t=31&band_rank=48&Refer=top)
1. [县委书记被扔下水是干群的互相成全](https://s.weibo.com//weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%A2%AB%E6%89%94%E4%B8%8B%E6%B0%B4%E6%98%AF%E5%B9%B2%E7%BE%A4%E7%9A%84%E4%BA%92%E7%9B%B8%E6%88%90%E5%85%A8%23&t=31&band_rank=49&Refer=top)
1. [许飞厉娜 第三人](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%20%E7%AC%AC%E4%B8%89%E4%BA%BA&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
