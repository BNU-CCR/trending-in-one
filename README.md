# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-28 00:41:49

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
<!-- 最后更新时间 Wed Oct 28 2026 00:52:33 GMT+0800 (China Standard Time) -->

1. [中国足协与皇马俱乐部严正交涉](https://so.toutiao.com/search?keyword=中国足协与皇马俱乐部严正交涉)
1. [17岁AI研究员被曝获700万年薪邀约](https://so.toutiao.com/search?keyword=17岁AI研究员被曝获700万年薪邀约)
1. [看作风建设如何落到群众身边](https://so.toutiao.com/search?keyword=看作风建设如何落到群众身边)
1. [外交部回应姆巴佩发表不当言论](https://so.toutiao.com/search?keyword=外交部回应姆巴佩发表不当言论)
1. [以议会选举或决定内塔尼亚胡政治生涯](https://so.toutiao.com/search?keyword=以议会选举或决定内塔尼亚胡政治生涯)
1. [男子趁金价下跌给媳妇买金镯子](https://so.toutiao.com/search?keyword=男子趁金价下跌给媳妇买金镯子)
1. [小米首个住宅小区开售](https://so.toutiao.com/search?keyword=小米首个住宅小区开售)
1. [储户拿“离柜概不负责”拒退钱](https://so.toutiao.com/search?keyword=储户拿“离柜概不负责”拒退钱)
1. [前9月规上工业企业利润较快增长](https://so.toutiao.com/search?keyword=前9月规上工业企业利润较快增长)
1. [德国总统时隔8年再访华传递什么信号](https://so.toutiao.com/search?keyword=德国总统时隔8年再访华传递什么信号)
1. [四价流感疫苗消失了？不实](https://so.toutiao.com/search?keyword=四价流感疫苗消失了？不实)
1. [光明日报：不容侮辱中国已故伟大领袖](https://so.toutiao.com/search?keyword=光明日报：不容侮辱中国已故伟大领袖)
1. [网友称参加婚礼吃了一桌子外卖](https://so.toutiao.com/search?keyword=网友称参加婚礼吃了一桌子外卖)
1. [卢拉因何实现逆风翻盘](https://so.toutiao.com/search?keyword=卢拉因何实现逆风翻盘)
1. [皇马吧声明：坚守底线](https://so.toutiao.com/search?keyword=皇马吧声明：坚守底线)
1. [王会民贪4.36亿获死缓](https://so.toutiao.com/search?keyword=王会民贪4.36亿获死缓)
1. [男子称在胖东来买酒1年多后被退差价](https://so.toutiao.com/search?keyword=男子称在胖东来买酒1年多后被退差价)
1. [央视全面叫停涉姆巴佩赛事和广告播出](https://so.toutiao.com/search?keyword=央视全面叫停涉姆巴佩赛事和广告播出)
1. [A股千元股只剩贵州茅台意味着什么](https://so.toutiao.com/search?keyword=A股千元股只剩贵州茅台意味着什么)
1. [邵永灵：辽宁舰西太砺兵直面外部施压](https://so.toutiao.com/search?keyword=邵永灵：辽宁舰西太砺兵直面外部施压)
1. [西甲致歉](https://so.toutiao.com/search?keyword=西甲致歉)
1. [苹果折叠屏“出师不利”](https://so.toutiao.com/search?keyword=苹果折叠屏“出师不利”)
1. [年轻人为什么爱上骑小电驴](https://so.toutiao.com/search?keyword=年轻人为什么爱上骑小电驴)
1. [媒体：底线面前姆巴佩道歉没有豁免权](https://so.toutiao.com/search?keyword=媒体：底线面前姆巴佩道歉没有豁免权)
1. [你吃的烤肠可能是鸡脖子做的](https://so.toutiao.com/search?keyword=你吃的烤肠可能是鸡脖子做的)
1. [多国为何不敢轻易下场帮沙特](https://so.toutiao.com/search?keyword=多国为何不敢轻易下场帮沙特)
1. [昂跑要掂量下姆巴佩和中国哪个重要](https://so.toutiao.com/search?keyword=昂跑要掂量下姆巴佩和中国哪个重要)
1. [俄乌冲突今年能否终结](https://so.toutiao.com/search?keyword=俄乌冲突今年能否终结)
1. [家长月花3000多元住酒店陪读](https://so.toutiao.com/search?keyword=家长月花3000多元住酒店陪读)
1. [樊振东社媒取关姆巴佩](https://so.toutiao.com/search?keyword=樊振东社媒取关姆巴佩)
1. [家电企业冰火两重天](https://so.toutiao.com/search?keyword=家电企业冰火两重天)
1. [中部六省22万亿GDP背后](https://so.toutiao.com/search?keyword=中部六省22万亿GDP背后)
1. [总台回应西甲主席](https://so.toutiao.com/search?keyword=总台回应西甲主席)
1. [苹果承认少量iPhone Duo内屏异常](https://so.toutiao.com/search?keyword=苹果承认少量iPhone%20Duo内屏异常)
1. [许家印香港山顶豪宅被曝违建730平](https://so.toutiao.com/search?keyword=许家印香港山顶豪宅被曝违建730平)
1. [姆巴佩多平台被禁言](https://so.toutiao.com/search?keyword=姆巴佩多平台被禁言)
1. [同是国产摩托车夺冠为何热度有差别](https://so.toutiao.com/search?keyword=同是国产摩托车夺冠为何热度有差别)
1. [我国进入中度老龄化阶段](https://so.toutiao.com/search?keyword=我国进入中度老龄化阶段)
1. [昂跑39天前才签下姆巴佩](https://so.toutiao.com/search?keyword=昂跑39天前才签下姆巴佩)
1. [章子怡受聘香港浸会大学荣誉教授](https://so.toutiao.com/search?keyword=章子怡受聘香港浸会大学荣誉教授)
1. [别让智慧养老院沦为“聪明摆设”](https://so.toutiao.com/search?keyword=别让智慧养老院沦为“聪明摆设”)
1. [吃中国饭砸中国锅 姆巴佩不配](https://so.toutiao.com/search?keyword=吃中国饭砸中国锅%20姆巴佩不配)
1. [石家庄彩民花10元中682万大奖](https://so.toutiao.com/search?keyword=石家庄彩民花10元中682万大奖)
1. [漫评：日本借“安全焦虑”搞军事扩张](https://so.toutiao.com/search?keyword=漫评：日本借“安全焦虑”搞军事扩张)
1. [媒体：喜欢姆巴佩不等于无条件包庇](https://so.toutiao.com/search?keyword=媒体：喜欢姆巴佩不等于无条件包庇)
1. [蜜雪冰城将全面使用悦鲜活牛奶](https://so.toutiao.com/search?keyword=蜜雪冰城将全面使用悦鲜活牛奶)
1. [塞尔维亚前进党为何会败选](https://so.toutiao.com/search?keyword=塞尔维亚前进党为何会败选)
1. [美中期选举前夕民调出炉](https://so.toutiao.com/search?keyword=美中期选举前夕民调出炉)
1. [网红“双波”ICU昏迷24天后苏醒](https://so.toutiao.com/search?keyword=网红“双波”ICU昏迷24天后苏醒)
1. [乌称俄发动16枚弹道导弹袭乌](https://so.toutiao.com/search?keyword=乌称俄发动16枚弹道导弹袭乌)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Oct 28 2026 05:16:55 GMT+0800 (China Standard Time) -->

1. [姆巴佩道歉](https://www.zhihu.com/search?q=%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%81%93%E6%AD%89)
1. [县委书记拒绝张雪为家乡打广告](https://www.zhihu.com/search?q=%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%92%E7%BB%9D%E5%BC%A0%E9%9B%AA%E4%B8%BA%E5%AE%B6%E4%B9%A1%E6%89%93%E5%B9%BF%E5%91%8A)
1. [金价大跌](https://www.zhihu.com/search?q=%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C)
1. [好奇岛装扮游戏](https://www.zhihu.com/search?q=%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [反诈博主徽剑被曝遇害](https://www.zhihu.com/search?q=%E5%8F%8D%E8%AF%88%E5%8D%9A%E4%B8%BB%E5%BE%BD%E5%89%91%E8%A2%AB%E6%9B%9D%E9%81%87%E5%AE%B3)
1. [毛不易婚礼致辞争议](https://www.zhihu.com/search?q=%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E8%87%B4%E8%BE%9E%E4%BA%89%E8%AE%AE)
1. [多方终止与姆巴佩合作](https://www.zhihu.com/search?q=%E5%A4%9A%E6%96%B9%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%90%88%E4%BD%9C)
1. [中土网民爆发大规模互怼](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9C%9F%E7%BD%91%E6%B0%91%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%92%E6%80%BC)
1. [OpenAI宣布斩获三项重大科学突破](https://www.zhihu.com/search?q=OpenAI%E5%AE%A3%E5%B8%83%E6%96%A9%E8%8E%B7%E4%B8%89%E9%A1%B9%E9%87%8D%E5%A4%A7%E7%A7%91%E5%AD%A6%E7%AA%81%E7%A0%B4)
1. [OpenAI证伪ETH猜想](https://www.zhihu.com/search?q=OpenAI%E8%AF%81%E4%BC%AAETH%E7%8C%9C%E6%83%B3)
1. [日剧Vivant抹黑中国](https://www.zhihu.com/search?q=%E6%97%A5%E5%89%A7Vivant%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD)
1. [法国报告首例人类感染沙蒙达病毒](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E6%8A%A5%E5%91%8A%E9%A6%96%E4%BE%8B%E4%BA%BA%E7%B1%BB%E6%84%9F%E6%9F%93%E6%B2%99%E8%92%99%E8%BE%BE%E7%97%85%E6%AF%92)
1. [姆巴佩涉华不当言论](https://www.zhihu.com/search?q=%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B6%89%E5%8D%8E%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA)
1. [小米首个住宅小区开售](https://www.zhihu.com/search?q=%E5%B0%8F%E7%B1%B3%E9%A6%96%E4%B8%AA%E4%BD%8F%E5%AE%85%E5%B0%8F%E5%8C%BA%E5%BC%80%E5%94%AE)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Oct 28 2026 00:41:49 GMT+0800 (China Standard Time) -->

1. [央视已全面叫停涉及姆巴佩的赛事和广告播出，姆巴佩社交账号被禁言，此次风波带来的连锁反应有多大？](https://www.zhihu.com/question/2098431727324619800)
1. [外交部回应姆巴佩代言解约事件，「伤害中国人民感情的言行自然会遭到中国社会各界的共同抵制」，这有何警示？](https://www.zhihu.com/question/2098468913931608600)
1. [红果短剧引发年轻人「戒断潮」，如何看待这一现象？短剧为何让人欲罢不能？](https://www.zhihu.com/question/2097994971261543000)
1. [银行将存 2500 元错输成 25000 元，储户拒退称「离柜概不负责」，被法院判属退还，你怎么看？](https://www.zhihu.com/question/2098369407378629000)
1. [微软向约60000名员工开放自愿离职方案，背后有哪些商业考量？为何没有选择强制裁员？](https://www.zhihu.com/question/2098214224841462000)
1. [打了马赛克的二维码被 AI 完整复原，原理是什么？什么样的遮挡才真的防 AI 破解？](https://www.zhihu.com/question/2097626035961455000)
1. [西甲主席及官方发布声明，为姆巴佩言论深表遗憾，向中国球迷致以诚挚的歉意，此事对西甲联赛影响有多大？](https://www.zhihu.com/question/2098491499767750700)
1. [是《兰香如故》里面冻死一个兵部尚书严重，还是《琅琊榜》里面噶掉自家七万精锐严重？](https://www.zhihu.com/question/2096914874018305500)
1. [AL 的 S16 赛事全部结束，如何评价他们在本届赛事上的表现？](https://www.zhihu.com/question/2098306923565209000)
1. [富士康员工回应iPhoneDuo裂屏，称产能吃紧苹果曾降低良率质检标准，是真的吗？消费者能要求赔偿吗？](https://www.zhihu.com/question/2098450605354087400)
1. [为什么OpenAi和Anthropic不用自己的顶级AI去炒股？就像幻方量化一样？](https://www.zhihu.com/question/2096860633161545200)
1. [为什么韩国吃不起肉，却有韩式炸鸡、韩式烤肉等美食呢？](https://www.zhihu.com/question/1978156984063780600)
1. [东鹏饮料等品牌紧急切割姆巴佩，这种情况品牌用不用赔违约金？已付代言费、物料成本还能追回吗？](https://www.zhihu.com/question/2098358966568882200)
1. [基金经理重仓AI巨亏公开致歉，称没必要低位离场，等流动性恢复，当基金经理也靠信仰持股，算不算风险信号？](https://www.zhihu.com/question/2096884168970061300)
1. [OpenAI 10月26日宣布证明所有维度局部光滑猜想，一举推平调和分析四大猜想，如何理解这一事件？](https://www.zhihu.com/question/2098331248469062100)
1. [毛不易婚礼致辞事件会对他的事业造成影响吗？](https://www.zhihu.com/question/2098125716218803700)
1. [巴西总统卢拉赢得连任，巴西主题 ETF 大跌，巴西 ETF 华夏、巴西 ETF 易方达跌停，如何解读？](https://www.zhihu.com/question/2097997813539943200)
1. [秦末岭南军团为什么不回援？](https://www.zhihu.com/question/640432928)
1. [offer8嘉宾称在澳洲已是实习医生，却不会握手术刀、缝合打结，为啥会这样？中外医学教育差异这么大吗？](https://www.zhihu.com/question/2096928657268635100)
1. [同事老是跟我抱怨公司待遇，我让他找领导谈他又不肯，但是我听着很烦，该怎么处理？](https://www.zhihu.com/question/2056407207177201200)
1. [如何看待张一鸣以 6700 亿元登顶中国首富，刷新中国首富财富纪录？今年的胡润百富榜有哪些新变化？](https://www.zhihu.com/question/2098365544483255300)
1. [S16 瑞士轮生死局 AL 0:2 不敌 TLAW 四连败止步十六强，如何评价这场比赛？](https://www.zhihu.com/question/2098280587354232000)
1. [如何评价佛山这座城市？](https://www.zhihu.com/question/2004552535361483500)
1. [DeepSeek 营收只有几亿，却融资上千亿，这种模式合理吗？](https://www.zhihu.com/question/2095940115537334500)
1. [退休后养老选苏州还是青岛？](https://www.zhihu.com/question/2940660284)
1. [央视网发文称「唯快不破该降温了」，直指速成车等乱象，这释放了哪些信号？](https://www.zhihu.com/question/2098093488340460500)
1. [高校 10 万元重奖「课讲得好」且评优可直接评职称，能否扭转「重科研轻教学」的现状？](https://www.zhihu.com/question/2098059478474278000)
1. [人为什么会有情绪，怎样减少负面情绪？](https://www.zhihu.com/question/2083856049224807000)
1. [从《赛博朋克2077：边缘行者2》的翻车看，游戏改编动画是不是永远跨不过“吃设定老本”这道坎？](https://www.zhihu.com/question/2096300673256244700)
1. [你对大学生活有什么规划和建议？](https://www.zhihu.com/question/64499302)

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
<!-- 最后更新时间 Wed Oct 28 2026 02:48:35 GMT+0800 (China Standard Time) -->

1. [习近平致电祝贺卢拉当选连任](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E8%87%B4%E7%94%B5%E7%A5%9D%E8%B4%BA%E5%8D%A2%E6%8B%89%E5%BD%93%E9%80%89%E8%BF%9E%E4%BB%BB%23&Refer=new_time)
1. [事后道歉救不了姆巴佩](https://s.weibo.com//weibo?q=%23%E4%BA%8B%E5%90%8E%E9%81%93%E6%AD%89%E6%95%91%E4%B8%8D%E4%BA%86%E5%A7%86%E5%B7%B4%E4%BD%A9%23&t=31&band_rank=1&Refer=top)
1. [中国新晋女首富身家1270亿](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E6%99%8B%E5%A5%B3%E9%A6%96%E5%AF%8C%E8%BA%AB%E5%AE%B61270%E4%BA%BF%23&t=31&band_rank=2&Refer=top)
1. [我国产业结构向新向优向好升级](https://s.weibo.com//weibo?q=%23%E6%88%91%E5%9B%BD%E4%BA%A7%E4%B8%9A%E7%BB%93%E6%9E%84%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%E5%90%91%E5%A5%BD%E5%8D%87%E7%BA%A7%23&t=31&band_rank=3&Refer=top)
1. [中国足协与皇马俱乐部严正交涉](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E5%8D%8F%E4%B8%8E%E7%9A%87%E9%A9%AC%E4%BF%B1%E4%B9%90%E9%83%A8%E4%B8%A5%E6%AD%A3%E4%BA%A4%E6%B6%89%23&t=31&band_rank=4&Refer=top)
1. [外交部回应姆巴佩涉华不当言论](https://s.weibo.com//weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B6%89%E5%8D%8E%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA%23&t=31&band_rank=5&Refer=top)
1. [姆巴佩们别想从中国市场挣走一分钱](https://s.weibo.com//weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BB%AC%E5%88%AB%E6%83%B3%E4%BB%8E%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E6%8C%A3%E8%B5%B0%E4%B8%80%E5%88%86%E9%92%B1%23&t=31&band_rank=6&Refer=top)
1. [小城良方高开颠走](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E9%AB%98%E5%BC%80%E9%A2%A0%E8%B5%B0&t=31&band_rank=7&Refer=top)
1. [婚恋关系唯一重要的是你舒服](https://s.weibo.com//weibo?q=%E5%A9%9A%E6%81%8B%E5%85%B3%E7%B3%BB%E5%94%AF%E4%B8%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E4%BD%A0%E8%88%92%E6%9C%8D&t=31&band_rank=8&Refer=top)
1. [麒麟9050峰值仅A20Pro一半](https://s.weibo.com//weibo?q=%E9%BA%92%E9%BA%9F9050%E5%B3%B0%E5%80%BC%E4%BB%85A20Pro%E4%B8%80%E5%8D%8A&t=31&band_rank=9&Refer=top)
1. [Doinb回应al零胜十六强](https://s.weibo.com//weibo?q=%23Doinb%E5%9B%9E%E5%BA%94al%E9%9B%B6%E8%83%9C%E5%8D%81%E5%85%AD%E5%BC%BA%23&t=31&band_rank=10&Refer=top)
1. [姆巴佩遭媒体痛批](https://s.weibo.com//weibo?q=%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%81%AD%E5%AA%92%E4%BD%93%E7%97%9B%E6%89%B9&t=31&band_rank=11&Refer=top)
1. [北京动物园通报萌兰身体状态](https://s.weibo.com//weibo?q=%23%E5%8C%97%E4%BA%AC%E5%8A%A8%E7%89%A9%E5%9B%AD%E9%80%9A%E6%8A%A5%E8%90%8C%E5%85%B0%E8%BA%AB%E4%BD%93%E7%8A%B6%E6%80%81%23&t=31&band_rank=12&Refer=top)
1. [厉娜这些年赚不到钱的原因](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E8%BF%99%E4%BA%9B%E5%B9%B4%E8%B5%9A%E4%B8%8D%E5%88%B0%E9%92%B1%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=13&Refer=top)
1. [饲养员多次呼唤萌兰无响应](https://s.weibo.com//weibo?q=%23%E9%A5%B2%E5%85%BB%E5%91%98%E5%A4%9A%E6%AC%A1%E5%91%BC%E5%94%A4%E8%90%8C%E5%85%B0%E6%97%A0%E5%93%8D%E5%BA%94%23&t=31&band_rank=14&Refer=top)
1. [卢昱晓田嘉瑞 我欲乘风](https://s.weibo.com//weibo?q=%E5%8D%A2%E6%98%B1%E6%99%93%E7%94%B0%E5%98%89%E7%91%9E%20%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E&t=31&band_rank=15&Refer=top)
1. [疑似新毒株腹痛只能硬熬](https://s.weibo.com//weibo?q=%E7%96%91%E4%BC%BC%E6%96%B0%E6%AF%92%E6%A0%AA%E8%85%B9%E7%97%9B%E5%8F%AA%E8%83%BD%E7%A1%AC%E7%86%AC&t=31&band_rank=16&Refer=top)
1. [坠亡幼童父亲说孩子3岁前没记忆](https://s.weibo.com//weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E8%AF%B4%E5%AD%A9%E5%AD%903%E5%B2%81%E5%89%8D%E6%B2%A1%E8%AE%B0%E5%BF%86%23&t=31&band_rank=17&Refer=top)
1. [你吃的烤肠可能是鸡脖子做的](https://s.weibo.com//weibo?q=%23%E4%BD%A0%E5%90%83%E7%9A%84%E7%83%A4%E8%82%A0%E5%8F%AF%E8%83%BD%E6%98%AF%E9%B8%A1%E8%84%96%E5%AD%90%E5%81%9A%E7%9A%84%23&t=31&band_rank=18&Refer=top)
1. [郭晓婷王天辰三搭](https://s.weibo.com//weibo?q=%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E4%B8%89%E6%90%AD&t=31&band_rank=19&Refer=top)
1. [苹果M6笔记本](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9CM6%E7%AC%94%E8%AE%B0%E6%9C%AC&t=31&band_rank=20&Refer=top)
1. [李沁张晚意当上皇帝皇后了](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E6%B2%81%E5%BC%A0%E6%99%9A%E6%84%8F%E5%BD%93%E4%B8%8A%E7%9A%87%E5%B8%9D%E7%9A%87%E5%90%8E%E4%BA%86%23&t=31&band_rank=21&Refer=top)
1. [看到熊猫烧香病毒感觉年轻了](https://s.weibo.com//weibo?q=%E7%9C%8B%E5%88%B0%E7%86%8A%E7%8C%AB%E7%83%A7%E9%A6%99%E7%97%85%E6%AF%92%E6%84%9F%E8%A7%89%E5%B9%B4%E8%BD%BB%E4%BA%86&t=31&band_rank=22&Refer=top)
1. [李彩演因翻跳NEON泡泡道歉](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%BD%A9%E6%BC%94%E5%9B%A0%E7%BF%BB%E8%B7%B3NEON%E6%B3%A1%E6%B3%A1%E9%81%93%E6%AD%89%23&t=31&band_rank=23&Refer=top)
1. [皇马沉默难消涉华争议](https://s.weibo.com//weibo?q=%23%E7%9A%87%E9%A9%AC%E6%B2%89%E9%BB%98%E9%9A%BE%E6%B6%88%E6%B6%89%E5%8D%8E%E4%BA%89%E8%AE%AE%23&t=31&band_rank=24&Refer=top)
1. [原来刘亦菲走红毯的时候雨这么大](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%88%98%E4%BA%A6%E8%8F%B2%E8%B5%B0%E7%BA%A2%E6%AF%AF%E7%9A%84%E6%97%B6%E5%80%99%E9%9B%A8%E8%BF%99%E4%B9%88%E5%A4%A7%23&t=31&band_rank=25&Refer=top)
1. [皇马反复碰触国人情感红线](https://s.weibo.com//weibo?q=%23%E7%9A%87%E9%A9%AC%E5%8F%8D%E5%A4%8D%E7%A2%B0%E8%A7%A6%E5%9B%BD%E4%BA%BA%E6%83%85%E6%84%9F%E7%BA%A2%E7%BA%BF%23&t=31&band_rank=26&Refer=top)
1. [Hope爆料AL井盖工作内容](https://s.weibo.com//weibo?q=%23Hope%E7%88%86%E6%96%99AL%E4%BA%95%E7%9B%96%E5%B7%A5%E4%BD%9C%E5%86%85%E5%AE%B9%23&t=31&band_rank=27&Refer=top)
1. [中国新闻网呸姆巴佩](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E9%97%BB%E7%BD%91%E5%91%B8%E5%A7%86%E5%B7%B4%E4%BD%A9%23&t=31&band_rank=28&Refer=top)
1. [薛之谦12年歌迷被骗钱又遭取关](https://s.weibo.com//weibo?q=%E8%96%9B%E4%B9%8B%E8%B0%A612%E5%B9%B4%E6%AD%8C%E8%BF%B7%E8%A2%AB%E9%AA%97%E9%92%B1%E5%8F%88%E9%81%AD%E5%8F%96%E5%85%B3&t=31&band_rank=29&Refer=top)
1. [建议秋冬多喝这种饮品](https://s.weibo.com//weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%A7%8B%E5%86%AC%E5%A4%9A%E5%96%9D%E8%BF%99%E7%A7%8D%E9%A5%AE%E5%93%81%23&t=31&band_rank=30&Refer=top)
1. [以后度假可以只带丝巾不带衣服了](https://s.weibo.com//weibo?q=%23%E4%BB%A5%E5%90%8E%E5%BA%A6%E5%81%87%E5%8F%AF%E4%BB%A5%E5%8F%AA%E5%B8%A6%E4%B8%9D%E5%B7%BE%E4%B8%8D%E5%B8%A6%E8%A1%A3%E6%9C%8D%E4%BA%86%23&t=31&band_rank=31&Refer=top)
1. [姆巴佩涉华不当言论引众怒](https://s.weibo.com//weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B6%89%E5%8D%8E%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA%E5%BC%95%E4%BC%97%E6%80%92%23&t=31&band_rank=32&Refer=top)
1. [普通人千万要带娃去广东见世面](https://s.weibo.com//weibo?q=%E6%99%AE%E9%80%9A%E4%BA%BA%E5%8D%83%E4%B8%87%E8%A6%81%E5%B8%A6%E5%A8%83%E5%8E%BB%E5%B9%BF%E4%B8%9C%E8%A7%81%E4%B8%96%E9%9D%A2&t=31&band_rank=33&Refer=top)
1. [环球时报评姆巴佩事件](https://s.weibo.com//weibo?q=%23%E7%8E%AF%E7%90%83%E6%97%B6%E6%8A%A5%E8%AF%84%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BA%8B%E4%BB%B6%23&t=31&band_rank=34&Refer=top)
1. [小城良方 76位医学顾问](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%2076%E4%BD%8D%E5%8C%BB%E5%AD%A6%E9%A1%BE%E9%97%AE&t=31&band_rank=35&Refer=top)
1. [睡前9分钟修复皮质醇](https://s.weibo.com//weibo?q=%E7%9D%A1%E5%89%8D9%E5%88%86%E9%92%9F%E4%BF%AE%E5%A4%8D%E7%9A%AE%E8%B4%A8%E9%86%87&t=31&band_rank=36&Refer=top)
1. [极客湾](https://s.weibo.com//weibo?q=%E6%9E%81%E5%AE%A2%E6%B9%BE&t=31&band_rank=37&Refer=top)
1. [等风热吻你官宣](https://s.weibo.com//weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E5%AE%98%E5%AE%A3%23&t=31&band_rank=38&Refer=top)
1. [JDG淘汰赛开门红](https://s.weibo.com//weibo?q=%23JDG%E6%B7%98%E6%B1%B0%E8%B5%9B%E5%BC%80%E9%97%A8%E7%BA%A2%23&t=31&band_rank=39&Refer=top)
1. [网友不接受姆巴佩道歉](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E4%B8%8D%E6%8E%A5%E5%8F%97%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%81%93%E6%AD%89&t=31&band_rank=40&Refer=top)
1. [字节跳动赚麻了](https://s.weibo.com//weibo?q=%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E8%B5%9A%E9%BA%BB%E4%BA%86&t=31&band_rank=41&Refer=top)
1. [邓超Angelababy合体比心](https://s.weibo.com//weibo?q=%23%E9%82%93%E8%B6%85Angelababy%E5%90%88%E4%BD%93%E6%AF%94%E5%BF%83%23&t=31&band_rank=42&Refer=top)
1. [范丞丞璀璨之上](https://s.weibo.com//weibo?q=%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%92%80%E7%92%A8%E4%B9%8B%E4%B8%8A&t=31&band_rank=43&Refer=top)
1. [杨洋终于回归现偶了](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E6%B4%8B%E7%BB%88%E4%BA%8E%E5%9B%9E%E5%BD%92%E7%8E%B0%E5%81%B6%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [K100双11真香机](https://s.weibo.com//weibo?q=%23K100%E5%8F%8C11%E7%9C%9F%E9%A6%99%E6%9C%BA%23&t=31&band_rank=45&Refer=top)
1. [红果收入](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E6%9E%9C%E6%94%B6%E5%85%A5%23&t=31&band_rank=46&Refer=top)
1. [红米K100提前发布](https://s.weibo.com//weibo?q=%E7%BA%A2%E7%B1%B3K100%E6%8F%90%E5%89%8D%E5%8F%91%E5%B8%83&t=31&band_rank=47&Refer=top)
1. [杨龙把田曦薇拍成嫦娥了](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E9%BE%99%E6%8A%8A%E7%94%B0%E6%9B%A6%E8%96%87%E6%8B%8D%E6%88%90%E5%AB%A6%E5%A8%A5%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [西甲致歉](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E7%94%B2%E8%87%B4%E6%AD%89%23&t=31&band_rank=49&Refer=top)
1. [WTT蒙彼利埃女单32强赛](https://s.weibo.com//weibo?q=WTT%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E5%A5%B3%E5%8D%9532%E5%BC%BA%E8%B5%9B&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
