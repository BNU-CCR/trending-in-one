# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-26 02:38:46

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
<!-- 最后更新时间 Fri Sep 25 2026 22:08:34 GMT+0800 (China Standard Time) -->

1. [习近平：与特朗普达成很多新的共识](https://so.toutiao.com/search?keyword=习近平：与特朗普达成很多新的共识)
1. [白宫欢迎国宴上喝的酒不简单](https://so.toutiao.com/search?keyword=白宫欢迎国宴上喝的酒不简单)
1. [共同浇灌中美友谊的美丽花朵](https://so.toutiao.com/search?keyword=共同浇灌中美友谊的美丽花朵)
1. [17岁陈妤颉女子百米夺冠](https://so.toutiao.com/search?keyword=17岁陈妤颉女子百米夺冠)
1. [特朗普听到大熊猫将落户美国笑了](https://so.toutiao.com/search?keyword=特朗普听到大熊猫将落户美国笑了)
1. [粤港澳大湾区中秋晚会](https://so.toutiao.com/search?keyword=粤港澳大湾区中秋晚会)
1. [中国篮球从亚运4金到全军覆没](https://so.toutiao.com/search?keyword=中国篮球从亚运4金到全军覆没)
1. [赛考斯回应出现在欢迎宴会致辞中](https://so.toutiao.com/search?keyword=赛考斯回应出现在欢迎宴会致辞中)
1. [明月映中秋 家国共此声](https://so.toutiao.com/search?keyword=明月映中秋%20家国共此声)
1. [国乒提前锁定混双金银](https://so.toutiao.com/search?keyword=国乒提前锁定混双金银)
1. [月饼和螃蟹一起吃会中毒？假](https://so.toutiao.com/search?keyword=月饼和螃蟹一起吃会中毒？假)
1. [博主：高市把政治表演刻进骨子里](https://so.toutiao.com/search?keyword=博主：高市把政治表演刻进骨子里)
1. [宫鲁鸣：会总结为什么三分颗粒无收](https://so.toutiao.com/search?keyword=宫鲁鸣：会总结为什么三分颗粒无收)
1. [评论员：中国在台湾问题上立场坚定](https://so.toutiao.com/search?keyword=评论员：中国在台湾问题上立场坚定)
1. [白宫墙上悬挂中美元首握手照片](https://so.toutiao.com/search?keyword=白宫墙上悬挂中美元首握手照片)
1. [林诗栋晋级亚运男单16强](https://so.toutiao.com/search?keyword=林诗栋晋级亚运男单16强)
1. [伊朗代表驳斥以色列总理联大发言](https://so.toutiao.com/search?keyword=伊朗代表驳斥以色列总理联大发言)
1. [特朗普展示白宫翻修成果](https://so.toutiao.com/search?keyword=特朗普展示白宫翻修成果)
1. [张展硕 七金王](https://so.toutiao.com/search?keyword=张展硕%20七金王)
1. [特朗普：这是一次伟大的会晤](https://so.toutiao.com/search?keyword=特朗普：这是一次伟大的会晤)
1. [特朗普会中文的外孙女出席欢迎仪式](https://so.toutiao.com/search?keyword=特朗普会中文的外孙女出席欢迎仪式)
1. [中国观众在亚运会听到国歌热泪盈眶](https://so.toutiao.com/search?keyword=中国观众在亚运会听到国歌热泪盈眶)
1. [周锡玮：台湾只要不搞“台独”就没事](https://so.toutiao.com/search?keyword=周锡玮：台湾只要不搞“台独”就没事)
1. [特朗普赠中方雕像：我亲自参与设计](https://so.toutiao.com/search?keyword=特朗普赠中方雕像：我亲自参与设计)
1. [苏群：王思雨被吹违体值得商榷](https://so.toutiao.com/search?keyword=苏群：王思雨被吹违体值得商榷)
1. [中国黄金进口创历史新高释放什么信号](https://so.toutiao.com/search?keyword=中国黄金进口创历史新高释放什么信号)
1. [中国45小时连发4枚火箭 印媒直呼看懵](https://so.toutiao.com/search?keyword=中国45小时连发4枚火箭%20印媒直呼看懵)
1. [“莎头”组合顾不上吃月饼全力备战](https://so.toutiao.com/search?keyword=“莎头”组合顾不上吃月饼全力备战)
1. [中美元首夫人参观国立亚洲艺术博物馆](https://so.toutiao.com/search?keyword=中美元首夫人参观国立亚洲艺术博物馆)
1. [月饼第一股广州酒家有多赚钱](https://so.toutiao.com/search?keyword=月饼第一股广州酒家有多赚钱)
1. [张雨霏50蝶摘金](https://so.toutiao.com/search?keyword=张雨霏50蝶摘金)
1. [中国海警局：正告菲方立即停止挑衅](https://so.toutiao.com/search?keyword=中国海警局：正告菲方立即停止挑衅)
1. [今年最佳赏月时间为何不是十五十六](https://so.toutiao.com/search?keyword=今年最佳赏月时间为何不是十五十六)
1. [中国游泳队30金13银11铜收官](https://so.toutiao.com/search?keyword=中国游泳队30金13银11铜收官)
1. [中美元首夫人听两国儿童唱《茉莉花》](https://so.toutiao.com/search?keyword=中美元首夫人听两国儿童唱《茉莉花》)
1. [日本财务大臣：高市并非再通胀主义者](https://so.toutiao.com/search?keyword=日本财务大臣：高市并非再通胀主义者)
1. [新华社：男乒过度依赖王楚钦](https://so.toutiao.com/search?keyword=新华社：男乒过度依赖王楚钦)
1. [博主：全网最爱发钱老板藏着大智慧](https://so.toutiao.com/search?keyword=博主：全网最爱发钱老板藏着大智慧)
1. [合肥一小区4栋楼悬挂800面国旗](https://so.toutiao.com/search?keyword=合肥一小区4栋楼悬挂800面国旗)
1. [中国女足加时绝杀越南晋级4强](https://so.toutiao.com/search?keyword=中国女足加时绝杀越南晋级4强)
1. [什么是中美建设性战略稳定关系](https://so.toutiao.com/search?keyword=什么是中美建设性战略稳定关系)
1. [“9·24行情”两周年A股没有奇迹](https://so.toutiao.com/search?keyword=“9·24行情”两周年A股没有奇迹)
1. [中国篮球各项均无缘亚运决赛](https://so.toutiao.com/search?keyword=中国篮球各项均无缘亚运决赛)
1. [朱一龙对卫诗雅唱情歌她老公坐台下](https://so.toutiao.com/search?keyword=朱一龙对卫诗雅唱情歌她老公坐台下)
1. [今年哪款口味月饼最畅销](https://so.toutiao.com/search?keyword=今年哪款口味月饼最畅销)
1. [中国女篮不敌韩国无缘决赛](https://so.toutiao.com/search?keyword=中国女篮不敌韩国无缘决赛)
1. [八月十五为啥叫中秋节](https://so.toutiao.com/search?keyword=八月十五为啥叫中秋节)
1. [胡塞武装再袭沙特 能源格局会否生变](https://so.toutiao.com/search?keyword=胡塞武装再袭沙特%20能源格局会否生变)
1. [中国泳军亚运赛场表现超预期](https://so.toutiao.com/search?keyword=中国泳军亚运赛场表现超预期)
1. [美企挤破头想参加欢迎宴会](https://so.toutiao.com/search?keyword=美企挤破头想参加欢迎宴会)
1. [国际社会高度关注中美两国元首会晤](https://so.toutiao.com/search?keyword=国际社会高度关注中美两国元首会晤)
1. [白宫国宴主桌都有谁](https://so.toutiao.com/search?keyword=白宫国宴主桌都有谁)
1. [陪看中国女篮vs韩国](https://so.toutiao.com/search?keyword=陪看中国女篮vs韩国)
1. [为什么只有中秋没有中春中夏中冬](https://so.toutiao.com/search?keyword=为什么只有中秋没有中春中夏中冬)
1. [一撇一捺 中美青年“双向奔赴”](https://so.toutiao.com/search?keyword=一撇一捺%20中美青年“双向奔赴”)
1. [警惕“双节礼品卡”骗局](https://so.toutiao.com/search?keyword=警惕“双节礼品卡”骗局)
1. [张雪机车继续冲冠](https://so.toutiao.com/search?keyword=张雪机车继续冲冠)
1. [国乒女团夺冠背后的传承与坚持](https://so.toutiao.com/search?keyword=国乒女团夺冠背后的传承与坚持)
1. [中国8月对日出口稀土212吨释放啥信号](https://so.toutiao.com/search?keyword=中国8月对日出口稀土212吨释放啥信号)
1. [媒体：中国男乒阵容深度不足](https://so.toutiao.com/search?keyword=媒体：中国男乒阵容深度不足)
1. [白宫响起《月亮代表我的心》](https://so.toutiao.com/search?keyword=白宫响起《月亮代表我的心》)
1. [媒体：老楼电梯难题待解](https://so.toutiao.com/search?keyword=媒体：老楼电梯难题待解)
1. [莎头力克张本美和组合晋级半决赛](https://so.toutiao.com/search?keyword=莎头力克张本美和组合晋级半决赛)
1. [郑合惠子：杜翠雀的悲剧源于自身](https://so.toutiao.com/search?keyword=郑合惠子：杜翠雀的悲剧源于自身)
1. [媒体：国乒男团输掉的不只是一场决赛](https://so.toutiao.com/search?keyword=媒体：国乒男团输掉的不只是一场决赛)
1. [中美两国元首夫妇观看海军陆战队表演](https://so.toutiao.com/search?keyword=中美两国元首夫妇观看海军陆战队表演)
1. [王曼昱零封对手晋级女单16强](https://so.toutiao.com/search?keyword=王曼昱零封对手晋级女单16强)
1. [游本昌：清骨一生 爷叔走好](https://so.toutiao.com/search?keyword=游本昌：清骨一生%20爷叔走好)
1. [王皓回应国乒男团不敌日本队丢冠](https://so.toutiao.com/search?keyword=王皓回应国乒男团不敌日本队丢冠)
1. [今年月饼市场有何变化](https://so.toutiao.com/search?keyword=今年月饼市场有何变化)
1. [国产高端品牌改写世界豪车格局](https://so.toutiao.com/search?keyword=国产高端品牌改写世界豪车格局)
1. [新华社评中国男乒决赛失利](https://so.toutiao.com/search?keyword=新华社评中国男乒决赛失利)
1. [博主：平陆运河通航重塑西南出海格局](https://so.toutiao.com/search?keyword=博主：平陆运河通航重塑西南出海格局)
1. [张雪就泰康人寿拒赔一事发声](https://so.toutiao.com/search?keyword=张雪就泰康人寿拒赔一事发声)
1. [真的会发生“日本大撤资”吗](https://so.toutiao.com/search?keyword=真的会发生“日本大撤资”吗)
1. [月饼生意今年线下量价双跌](https://so.toutiao.com/search?keyword=月饼生意今年线下量价双跌)
1. [美方拿出顶配战略机型迎接中方元首](https://so.toutiao.com/search?keyword=美方拿出顶配战略机型迎接中方元首)
1. [俄军空袭乌克兰透露出哪三个信号](https://so.toutiao.com/search?keyword=俄军空袭乌克兰透露出哪三个信号)
1. [央视中秋晚会节目单官宣](https://so.toutiao.com/search?keyword=央视中秋晚会节目单官宣)
1. [樊振东回来就能拯救国乒男团吗](https://so.toutiao.com/search?keyword=樊振东回来就能拯救国乒男团吗)
1. [如何看待俄军向乌克兰星链开火](https://so.toutiao.com/search?keyword=如何看待俄军向乌克兰星链开火)
1. [Meta市值直逼2万亿美元](https://so.toutiao.com/search?keyword=Meta市值直逼2万亿美元)
1. [国防部：统一将根除“台独”祸根乱源](https://so.toutiao.com/search?keyword=国防部：统一将根除“台独”祸根乱源)
1. [游本昌去世 他这一生守拙守正守常](https://so.toutiao.com/search?keyword=游本昌去世%20他这一生守拙守正守常)
1. [主持人鲁健送上中秋祝福](https://so.toutiao.com/search?keyword=主持人鲁健送上中秋祝福)
1. [马斯克母亲：我喜欢去中国](https://so.toutiao.com/search?keyword=马斯克母亲：我喜欢去中国)
1. [C罗社媒晒照庆祝葡萄牙队胜利](https://so.toutiao.com/search?keyword=C罗社媒晒照庆祝葡萄牙队胜利)
1. [国际油价跌2%](https://so.toutiao.com/search?keyword=国际油价跌2%)
1. [孙颖莎等体育健儿祝大家中秋快乐](https://so.toutiao.com/search?keyword=孙颖莎等体育健儿祝大家中秋快乐)
1. [古代有关月亮的别称你听说过哪些](https://so.toutiao.com/search?keyword=古代有关月亮的别称你听说过哪些)
1. [谢楠祝海内外的华人朋友们中秋快乐](https://so.toutiao.com/search?keyword=谢楠祝海内外的华人朋友们中秋快乐)
1. [习近平和彭丽媛出席欢迎宴会](https://so.toutiao.com/search?keyword=习近平和彭丽媛出席欢迎宴会)
1. [世界技能大赛上的“色香味”](https://so.toutiao.com/search?keyword=世界技能大赛上的“色香味”)
1. [邓亚萍祝贺国乒女团亚运会六连冠](https://so.toutiao.com/search?keyword=邓亚萍祝贺国乒女团亚运会六连冠)
1. [美国Z世代的“非常中国时刻”](https://so.toutiao.com/search?keyword=美国Z世代的“非常中国时刻”)
1. [中秋节快乐](https://so.toutiao.com/search?keyword=中秋节快乐)
1. [博主：越南想抢世界工厂注定一场空](https://so.toutiao.com/search?keyword=博主：越南想抢世界工厂注定一场空)
1. [资金为何涌入黄金ETF](https://so.toutiao.com/search?keyword=资金为何涌入黄金ETF)
1. [泳坛“展字辈”正施展](https://so.toutiao.com/search?keyword=泳坛“展字辈”正施展)
1. [多国民众共赴月圆之约](https://so.toutiao.com/search?keyword=多国民众共赴月圆之约)
1. [男乒丢冠真是排阵的问题吗](https://so.toutiao.com/search?keyword=男乒丢冠真是排阵的问题吗)
1. [游本昌曾说这个世界我还是要再来的](https://so.toutiao.com/search?keyword=游本昌曾说这个世界我还是要再来的)
1. [美总统亲赴机场迎接释放何种讯息](https://so.toutiao.com/search?keyword=美总统亲赴机场迎接释放何种讯息)
1. [美方战机飞越致敬](https://so.toutiao.com/search?keyword=美方战机飞越致敬)
1. [国足亚运队1/4决赛将战泰国](https://so.toutiao.com/search?keyword=国足亚运队1/4决赛将战泰国)
1. [刘建宏谈中马友谊赛：年轻国脚试炼场](https://so.toutiao.com/search?keyword=刘建宏谈中马友谊赛：年轻国脚试炼场)
1. [国乒男团遭日本逆转无缘九连冠](https://so.toutiao.com/search?keyword=国乒男团遭日本逆转无缘九连冠)
1. [中方回应会否邀请特朗普出席APEC峰会](https://so.toutiao.com/search?keyword=中方回应会否邀请特朗普出席APEC峰会)
1. [国乒女团3-0横扫日本豪取六连冠](https://so.toutiao.com/search?keyword=国乒女团3-0横扫日本豪取六连冠)
1. [大熊猫平平和福双将赴美](https://so.toutiao.com/search?keyword=大熊猫平平和福双将赴美)
1. [心上一轮月 人间万种圆](https://so.toutiao.com/search?keyword=心上一轮月%20人间万种圆)
1. [记者观察：中国亚运健儿们的逆转时刻](https://so.toutiao.com/search?keyword=记者观察：中国亚运健儿们的逆转时刻)
1. [哥伦比亚宣布与伊朗断交](https://so.toutiao.com/search?keyword=哥伦比亚宣布与伊朗断交)
1. [博主：俄空袭乌两大通信中心](https://so.toutiao.com/search?keyword=博主：俄空袭乌两大通信中心)
1. [媒体：银牌不是靶子但必须是一记警钟](https://so.toutiao.com/search?keyword=媒体：银牌不是靶子但必须是一记警钟)
1. [美联储加息预期再升温](https://so.toutiao.com/search?keyword=美联储加息预期再升温)
1. [美债收益率持续攀升将打崩美股吗](https://so.toutiao.com/search?keyword=美债收益率持续攀升将打崩美股吗)
1. [越南为何向美国订购90架飞机](https://so.toutiao.com/search?keyword=越南为何向美国订购90架飞机)
1. [河南矿山过中秋1600余桌宴席摆进厂房](https://so.toutiao.com/search?keyword=河南矿山过中秋1600余桌宴席摆进厂房)
1. [学者：黄金价格面临新一轮调整压力](https://so.toutiao.com/search?keyword=学者：黄金价格面临新一轮调整压力)
1. [也门胡塞武装为何突然势如破竹](https://so.toutiao.com/search?keyword=也门胡塞武装为何突然势如破竹)
1. [英媒：C罗若退役会影响葡萄牙队收入](https://so.toutiao.com/search?keyword=英媒：C罗若退役会影响葡萄牙队收入)
1. [美股三大指数涨跌不一英特尔创新高](https://so.toutiao.com/search?keyword=美股三大指数涨跌不一英特尔创新高)
1. [刘国梁现场观战亚运乒乓男团决赛](https://so.toutiao.com/search?keyword=刘国梁现场观战亚运乒乓男团决赛)
1. [“请3休13”催热双节出行](https://so.toutiao.com/search?keyword=“请3休13”催热双节出行)
1. [习近平同特朗普会谈](https://so.toutiao.com/search?keyword=习近平同特朗普会谈)
1. [习近平在白宫欢迎仪式上致辞](https://so.toutiao.com/search?keyword=习近平在白宫欢迎仪式上致辞)
1. [特朗普遗憾欢迎晚宴座位不够多](https://so.toutiao.com/search?keyword=特朗普遗憾欢迎晚宴座位不够多)
1. [升糖最快的主食不是米饭而是这6种](https://so.toutiao.com/search?keyword=升糖最快的主食不是米饭而是这6种)
1. [退伍女兵“走路带风”视频爆火](https://so.toutiao.com/search?keyword=退伍女兵“走路带风”视频爆火)
1. [我军22架艘次军机舰船位台岛周边活动](https://so.toutiao.com/search?keyword=我军22架艘次军机舰船位台岛周边活动)
1. [张雪的老东家离上市又近了一步](https://so.toutiao.com/search?keyword=张雪的老东家离上市又近了一步)
1. [游本昌与患癌妻子走过70年白金婚](https://so.toutiao.com/search?keyword=游本昌与患癌妻子走过70年白金婚)
1. [王楚钦谈决赛阵容：不要揣测教练意图](https://so.toutiao.com/search?keyword=王楚钦谈决赛阵容：不要揣测教练意图)
1. [国防部：台湾问题不容任何外来干涉](https://so.toutiao.com/search?keyword=国防部：台湾问题不容任何外来干涉)
1. [演员李嘉明追忆游本昌](https://so.toutiao.com/search?keyword=演员李嘉明追忆游本昌)
1. [《我不是大师》开播](https://so.toutiao.com/search?keyword=《我不是大师》开播)
1. [车企造电池“宁王”丢的是什么](https://so.toutiao.com/search?keyword=车企造电池“宁王”丢的是什么)
1. [19岁温瑞博乒乓球男团决赛丢2分](https://so.toutiao.com/search?keyword=19岁温瑞博乒乓球男团决赛丢2分)
1. [游本昌13岁户籍卡在南京档案馆保存](https://so.toutiao.com/search?keyword=游本昌13岁户籍卡在南京档案馆保存)
1. [邵永灵：联合国演讲让高市回味无穷](https://so.toutiao.com/search?keyword=邵永灵：联合国演讲让高市回味无穷)
1. [王楚钦：尽快收拾心情面对后面比赛](https://so.toutiao.com/search?keyword=王楚钦：尽快收拾心情面对后面比赛)
1. [业内：推进养老保险改革促进制度发展](https://so.toutiao.com/search?keyword=业内：推进养老保险改革促进制度发展)
1. [游本昌离世 “佐料演员”为何被铭记](https://so.toutiao.com/search?keyword=游本昌离世%20“佐料演员”为何被铭记)
1. [中国小孩哥小孩姐亚运泳池红透半边天](https://so.toutiao.com/search?keyword=中国小孩哥小孩姐亚运泳池红透半边天)
1. [国防部：民进党当局出卖民族尊严利益](https://so.toutiao.com/search?keyword=国防部：民进党当局出卖民族尊严利益)
1. [中秋节多家企业效仿胖东来宠员工](https://so.toutiao.com/search?keyword=中秋节多家企业效仿胖东来宠员工)
1. [葛曼棋因伤止步亚运会女子100米预赛](https://so.toutiao.com/search?keyword=葛曼棋因伤止步亚运会女子100米预赛)
1. [国防部回应新西兰军舰过航台湾海峡](https://so.toutiao.com/search?keyword=国防部回应新西兰军舰过航台湾海峡)
1. [土耳其和巴基斯坦会向沙特派兵吗](https://so.toutiao.com/search?keyword=土耳其和巴基斯坦会向沙特派兵吗)
1. [博主：中美在AI领域走向合作是大趋势](https://so.toutiao.com/search?keyword=博主：中美在AI领域走向合作是大趋势)
1. [张展硕半小时2金](https://so.toutiao.com/search?keyword=张展硕半小时2金)
1. [月饼这门生意为何赚钱](https://so.toutiao.com/search?keyword=月饼这门生意为何赚钱)
1. [HYROX何以让中产“花钱找虐”](https://so.toutiao.com/search?keyword=HYROX何以让中产“花钱找虐”)
1. [男子4×100米自由泳接力中国队卫冕](https://so.toutiao.com/search?keyword=男子4×100米自由泳接力中国队卫冕)
1. [10年后日本不再是发达国家吗](https://so.toutiao.com/search?keyword=10年后日本不再是发达国家吗)
1. [游本昌在《繁花》中饰演爷叔](https://so.toutiao.com/search?keyword=游本昌在《繁花》中饰演爷叔)
1. [记者：日本办亚运会为何这么“省”](https://so.toutiao.com/search?keyword=记者：日本办亚运会为何这么“省”)
1. [上汽追投10亿元加码尚界](https://so.toutiao.com/search?keyword=上汽追投10亿元加码尚界)
1. [游本昌去世：繁花深处只余烟波](https://so.toutiao.com/search?keyword=游本昌去世：繁花深处只余烟波)
1. [国羽男团获亚军无缘三连冠](https://so.toutiao.com/search?keyword=国羽男团获亚军无缘三连冠)
1. [别被这些关于月饼的谣言误导](https://so.toutiao.com/search?keyword=别被这些关于月饼的谣言误导)
1. [日本选手打破男子200米蛙泳世界纪录](https://so.toutiao.com/search?keyword=日本选手打破男子200米蛙泳世界纪录)
1. [赛力斯回应何时推出问界轿车](https://so.toutiao.com/search?keyword=赛力斯回应何时推出问界轿车)
1. [小米18 Pro Max首发评测](https://so.toutiao.com/search?keyword=小米18%20Pro%20Max首发评测)
1. [国防部敦促日停止在南海问题搬弄是非](https://so.toutiao.com/search?keyword=国防部敦促日停止在南海问题搬弄是非)
1. [国防部：警惕新型军国主义为祸世界](https://so.toutiao.com/search?keyword=国防部：警惕新型军国主义为祸世界)
1. [游本昌一周前刚过完93岁生日](https://so.toutiao.com/search?keyword=游本昌一周前刚过完93岁生日)
1. [男足亚运队凭何逆袭拿到“大结果”](https://so.toutiao.com/search?keyword=男足亚运队凭何逆袭拿到“大结果”)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Sep 26 2026 02:33:30 GMT+0800 (China Standard Time) -->

1. [陈妤颉刷新女子百米亚运纪录](https://www.zhihu.com/search?q=%E9%99%88%E5%A6%A4%E9%A2%89%E5%88%B7%E6%96%B0%E5%A5%B3%E5%AD%90%E7%99%BE%E7%B1%B3%E4%BA%9A%E8%BF%90%E7%BA%AA%E5%BD%95)
1. [车企集体和宁德提分手](https://www.zhihu.com/search?q=%E8%BD%A6%E4%BC%81%E9%9B%86%E4%BD%93%E5%92%8C%E5%AE%81%E5%BE%B7%E6%8F%90%E5%88%86%E6%89%8B)
1. [王楚钦回应不敌张本智和](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C)
1. [王楚钦 0-3 张本智和](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%200-3%20%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [美称中美贸易休战延至明年1月](https://www.zhihu.com/search?q=%E7%BE%8E%E7%A7%B0%E4%B8%AD%E7%BE%8E%E8%B4%B8%E6%98%93%E4%BC%91%E6%88%98%E5%BB%B6%E8%87%B3%E6%98%8E%E5%B9%B41%E6%9C%88)
1. [冯小刚回应垃圾观众言论](https://www.zhihu.com/search?q=%E5%86%AF%E5%B0%8F%E5%88%9A%E5%9B%9E%E5%BA%94%E5%9E%83%E5%9C%BE%E8%A7%82%E4%BC%97%E8%A8%80%E8%AE%BA)
1. [表演艺术家游本昌去世](https://www.zhihu.com/search?q=%E8%A1%A8%E6%BC%94%E8%89%BA%E6%9C%AF%E5%AE%B6%E6%B8%B8%E6%9C%AC%E6%98%8C%E5%8E%BB%E4%B8%96)
1. [腾讯「龙虾」将正式停止运营](https://www.zhihu.com/search?q=%E8%85%BE%E8%AE%AF%E3%80%8C%E9%BE%99%E8%99%BE%E3%80%8D%E5%B0%86%E6%AD%A3%E5%BC%8F%E5%81%9C%E6%AD%A2%E8%BF%90%E8%90%A5)
1. [狗头萝莉自曝负债成老赖](https://www.zhihu.com/search?q=%E7%8B%97%E5%A4%B4%E8%90%9D%E8%8E%89%E8%87%AA%E6%9B%9D%E8%B4%9F%E5%80%BA%E6%88%90%E8%80%81%E8%B5%96)
1. [樊振东回归国乒可能性有多大](https://www.zhihu.com/search?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%BD%92%E5%9B%BD%E4%B9%92%E5%8F%AF%E8%83%BD%E6%80%A7%E6%9C%89%E5%A4%9A%E5%A4%A7)
1. [一份 25 元外卖商家到手 6 元](https://www.zhihu.com/search?q=%E4%B8%80%E4%BB%BD%2025%20%E5%85%83%E5%A4%96%E5%8D%96%E5%95%86%E5%AE%B6%E5%88%B0%E6%89%8B%206%20%E5%85%83)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Sep 26 2026 02:38:46 GMT+0800 (China Standard Time) -->

1. [美方称中美「贸易休战」延长至明年 1 月，这对世界局势有何影响？](https://www.zhihu.com/question/2086393162981979400)
1. [亚运女子100米短跑决赛，陈妤颉夺冠，跑出 11.06 秒​​​​刷新亚运会纪录，如何评价本场对决？](https://www.zhihu.com/question/2086885798066878500)
1. [中国游泳队亚运会30金收官，创历史最好成绩，为何中国队游泳队这几年有如此强劲的上升势头？](https://www.zhihu.com/question/2086877886196052000)
1. [全国牛肉批发均价涨至一公斤 71 元，创两年来新高，受哪些因素影响？](https://www.zhihu.com/question/2086609964114634200)
1. [有什么食物是「中国人吃，而外国人基本不怎么吃的」？](https://www.zhihu.com/question/643098290)
1. [韩国奥委会主席柳承敏「如果给本届亚运会打分，那只能是不及格，非常失望，组委会极其无能」，对此你怎么看？](https://www.zhihu.com/question/2086475888606930400)
1. [为什么下雨时，鸭子不跑反而在雨中站着一动不动的？](https://www.zhihu.com/question/1954295779792491300)
1. [如何看待各平台所谓「团体赛没有一人两分的义务」「一人一分是本分」「团体赛不能只靠一人」这种说法？](https://www.zhihu.com/question/2086757964514161200)
1. [怎么评价 DeepSeek Harness 桌面版源码正式上线？](https://www.zhihu.com/question/2086771082363778000)
1. [患者投保10年后患结肠癌，泰康人寿以「遗传性疾病」拒赔，合理吗？保险公司能仅凭家族患癌史认定遗传性吗？](https://www.zhihu.com/question/2086141127287994000)
1. [王楚钦 4-2 战胜泰国选手普里查扬，晋级亚运会乒乓男单 16 强，如何评价本场比赛？](https://www.zhihu.com/question/2086801312062992600)
1. [国乒男团 36 年来首次无缘亚运会金牌，客观来看，你认为最大的问题出在哪？](https://www.zhihu.com/question/2086533829968099000)
1. [2 岁女童站「独立洗澡神器」上被父母独留浴室，误触 70℃ 热水致重度烫伤，如何避免此类悲剧？](https://www.zhihu.com/question/2084210073728041000)
1. [你拍过最美的月亮照片是怎样的？](https://www.zhihu.com/question/2077862548670628600)
1. [如何看待 10 后学生走红的 「呆毛」发型，头顶剪一小撮炸起来像海胆？一代人有一代人的发型潮流吗？](https://www.zhihu.com/question/2083240636430414800)
1. [苹果反复强调 iPhone Duo 的标准读音，中国人想读成「iPhone 多」不行吗？](https://www.zhihu.com/question/2084425616397427000)
1. [如何看待王皓回应男团丢金，称要把坏事变好事，给年轻运动员试错空间？](https://www.zhihu.com/question/2086743751020345000)
1. [那些家里一夜破产，且负债千万的家庭，最后都怎么样了?](https://www.zhihu.com/question/338189995)
1. [现在买月饼的是买来自己吃的人多，还是买来送人的多？](https://www.zhihu.com/question/2081289454325589200)
1. [员工态度好，但悟性差，长期业绩不达标，要不要辞退？](https://www.zhihu.com/question/2084101400494084400)
1. [如果没有《繁花》爷叔这个角色，游本昌会不会就慢慢被遗忘了？](https://www.zhihu.com/question/2086419048779051300)
1. [如何评价曹盾执导，马伯庸编剧，章宇主演的电影《敦煌英雄》？](https://www.zhihu.com/question/2086606110669252000)
1. [为什么清华不把打酱油的院系砍掉，专注于理工科?](https://www.zhihu.com/question/2028895979387069700)
1. [青岛一烤羊店招牌被六旬师傅装反，变为 「没有手艺，都是科技」，店铺意外走红，为啥这样反而受到大家青睐？](https://www.zhihu.com/question/2078503228682126300)
1. [为什么有人这么热衷游戏王？](https://www.zhihu.com/question/21770005)
1. [教室空调开20度，我的孩子觉得好冷，老师说「觉得冷的孩子就多穿点」，怎么跟老师沟通这件事情？](https://www.zhihu.com/question/2085620693169862400)
1. [网友吐槽美团抽成太多，一份25元的外卖商家实际到手收入6.08元，是真的吗？其余的钱都花在了什么环节？](https://www.zhihu.com/question/2086444635463705900)
1. [我二十岁，想尝试严肃文学写作，必须依靠天赋吗？没有天赋还有希望吗？](https://www.zhihu.com/question/2082867641291748900)
1. [西游记中卷帘大将为何打碎一个琉璃盏就会被贬下界？](https://www.zhihu.com/question/2052316688327217400)
1. [在体制内你认为需要会的技能是什么？](https://www.zhihu.com/question/1221975724)

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
<!-- 最后更新时间 Sat Sep 26 2026 02:44:34 GMT+0800 (China Standard Time) -->

1. [习近平圆满结束对美国的国事访问](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%9C%86%E6%BB%A1%E7%BB%93%E6%9D%9F%E5%AF%B9%E7%BE%8E%E5%9B%BD%E7%9A%84%E5%9B%BD%E4%BA%8B%E8%AE%BF%E9%97%AE%23&Refer=new_time)
1. [中美两国元首夫妇参观美国国家档案馆](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%A4%E5%9B%BD%E5%85%83%E9%A6%96%E5%A4%AB%E5%A6%87%E5%8F%82%E8%A7%82%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A1%A3%E6%A1%88%E9%A6%86%23&t=31&band_rank=1&Refer=top)
1. [特朗普演讲中秀中文](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%BC%94%E8%AE%B2%E4%B8%AD%E7%A7%80%E4%B8%AD%E6%96%87%23&t=31&band_rank=2&Refer=top)
1. [从一撇一捺看中美青年双向奔赴](https://s.weibo.com//weibo?q=%23%E4%BB%8E%E4%B8%80%E6%92%87%E4%B8%80%E6%8D%BA%E7%9C%8B%E4%B8%AD%E7%BE%8E%E9%9D%92%E5%B9%B4%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23&t=31&band_rank=3&Refer=top)
1. [杨舒予 宫鲁鸣](https://s.weibo.com//weibo?q=%E6%9D%A8%E8%88%92%E4%BA%88%20%E5%AE%AB%E9%B2%81%E9%B8%A3&t=31&band_rank=4&Refer=top)
1. [王楚钦说和孙颖莎配了很多年混双](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E5%92%8C%E5%AD%99%E9%A2%96%E8%8E%8E%E9%85%8D%E4%BA%86%E5%BE%88%E5%A4%9A%E5%B9%B4%E6%B7%B7%E5%8F%8C%23&t=31&band_rank=5&Refer=top)
1. [戚薇造型 致敬蔡明](https://s.weibo.com//weibo?q=%E6%88%9A%E8%96%87%E9%80%A0%E5%9E%8B%20%E8%87%B4%E6%95%AC%E8%94%A1%E6%98%8E&t=31&band_rank=6&Refer=top)
1. [月饼](https://s.weibo.com//weibo?q=%E6%9C%88%E9%A5%BC&t=31&band_rank=7&Refer=top)
1. [赵星棠下线了](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E6%98%9F%E6%A3%A0%E4%B8%8B%E7%BA%BF%E4%BA%86%23&t=31&band_rank=8&Refer=top)
1. [芭莎之夜](https://s.weibo.com//weibo?q=%E8%8A%AD%E8%8E%8E%E4%B9%8B%E5%A4%9C&t=31&band_rank=9&Refer=top)
1. [陈妤颉100米夺金](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89100%E7%B1%B3%E5%A4%BA%E9%87%91%23&t=31&band_rank=10&Refer=top)
1. [新华社为王楚钦发声](https://s.weibo.com//weibo?q=%E6%96%B0%E5%8D%8E%E7%A4%BE%E4%B8%BA%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E5%A3%B0&t=31&band_rank=11&Refer=top)
1. [男子输液后自尽留观室监控曝光](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E8%BE%93%E6%B6%B2%E5%90%8E%E8%87%AA%E5%B0%BD%E7%95%99%E8%A7%82%E5%AE%A4%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23&t=31&band_rank=12&Refer=top)
1. [王楚钦不该承受恶劣舆论环境](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8D%E8%AF%A5%E6%89%BF%E5%8F%97%E6%81%B6%E5%8A%A3%E8%88%86%E8%AE%BA%E7%8E%AF%E5%A2%83%23&t=31&band_rank=13&Refer=top)
1. [井柏然刘雯去看李荣浩演唱会](https://s.weibo.com//weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E5%8E%BB%E7%9C%8B%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=14&Refer=top)
1. [多家金店下架金豆](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%87%91%E5%BA%97%E4%B8%8B%E6%9E%B6%E9%87%91%E8%B1%86%23&t=31&band_rank=15&Refer=top)
1. [国家出手调控油价了](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%87%BA%E6%89%8B%E8%B0%83%E6%8E%A7%E6%B2%B9%E4%BB%B7%E4%BA%86%23&t=31&band_rank=16&Refer=top)
1. [亚运会 吴艳妮](https://s.weibo.com//weibo?q=%E4%BA%9A%E8%BF%90%E4%BC%9A%20%E5%90%B4%E8%89%B3%E5%A6%AE&t=31&band_rank=17&Refer=top)
1. [倪妮让宋威龙田曦薇文淇开心点](https://s.weibo.com//weibo?q=%23%E5%80%AA%E5%A6%AE%E8%AE%A9%E5%AE%8B%E5%A8%81%E9%BE%99%E7%94%B0%E6%9B%A6%E8%96%87%E6%96%87%E6%B7%87%E5%BC%80%E5%BF%83%E7%82%B9%23&t=31&band_rank=18&Refer=top)
1. [刘国梁看台静坐目睹失冠](https://s.weibo.com//weibo?q=%E5%88%98%E5%9B%BD%E6%A2%81%E7%9C%8B%E5%8F%B0%E9%9D%99%E5%9D%90%E7%9B%AE%E7%9D%B9%E5%A4%B1%E5%86%A0&t=31&band_rank=19&Refer=top)
1. [南枝 淑柔](https://s.weibo.com//weibo?q=%E5%8D%97%E6%9E%9D%20%E6%B7%91%E6%9F%94&t=31&band_rank=20&Refer=top)
1. [网友710万卖房签合同瞬间泪崩](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B710%E4%B8%87%E5%8D%96%E6%88%BF%E7%AD%BE%E5%90%88%E5%90%8C%E7%9E%AC%E9%97%B4%E6%B3%AA%E5%B4%A9&t=31&band_rank=21&Refer=top)
1. [兰香如故BE](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85BE%23&t=31&band_rank=22&Refer=top)
1. [张继科说国乒根本就不能输](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E5%9B%BD%E4%B9%92%E6%A0%B9%E6%9C%AC%E5%B0%B1%E4%B8%8D%E8%83%BD%E8%BE%93%23&t=31&band_rank=23&Refer=top)
1. [全身为什么面部皮肤看起来最差](https://s.weibo.com//weibo?q=%23%E5%85%A8%E8%BA%AB%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9D%A2%E9%83%A8%E7%9A%AE%E8%82%A4%E7%9C%8B%E8%B5%B7%E6%9D%A5%E6%9C%80%E5%B7%AE%23&t=31&band_rank=24&Refer=top)
1. [F1](https://s.weibo.com//weibo?q=F1&t=31&band_rank=25&Refer=top)
1. [第一个想到这么拍月亮的人真是天才](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%83%B3%E5%88%B0%E8%BF%99%E4%B9%88%E6%8B%8D%E6%9C%88%E4%BA%AE%E7%9A%84%E4%BA%BA%E7%9C%9F%E6%98%AF%E5%A4%A9%E6%89%8D&t=31&band_rank=26&Refer=top)
1. [英国母子游中国后想定居](https://s.weibo.com//weibo?q=%E8%8B%B1%E5%9B%BD%E6%AF%8D%E5%AD%90%E6%B8%B8%E4%B8%AD%E5%9B%BD%E5%90%8E%E6%83%B3%E5%AE%9A%E5%B1%85&t=31&band_rank=27&Refer=top)
1. [兰香如故真是虐麻了](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%9C%9F%E6%98%AF%E8%99%90%E9%BA%BB%E4%BA%86%23&t=31&band_rank=28&Refer=top)
1. [曾辉韩雨彤太甜了](https://s.weibo.com//weibo?q=%23%E6%9B%BE%E8%BE%89%E9%9F%A9%E9%9B%A8%E5%BD%A4%E5%A4%AA%E7%94%9C%E4%BA%86%23&t=31&band_rank=29&Refer=top)
1. [国乒男团 排兵布阵质疑](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%20%E6%8E%92%E5%85%B5%E5%B8%83%E9%98%B5%E8%B4%A8%E7%96%91&t=31&band_rank=30&Refer=top)
1. [国乒包揽冠亚军庆祝中秋](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E5%8C%85%E6%8F%BD%E5%86%A0%E4%BA%9A%E5%86%9B%E5%BA%86%E7%A5%9D%E4%B8%AD%E7%A7%8B%23&t=31&band_rank=31&Refer=top)
1. [中美元首夫妇茶叙高清大图](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%A4%AB%E5%A6%87%E8%8C%B6%E5%8F%99%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23&t=31&band_rank=32&Refer=top)
1. [小黄豆报警](https://s.weibo.com//weibo?q=%E5%B0%8F%E9%BB%84%E8%B1%86%E6%8A%A5%E8%AD%A6&t=31&band_rank=33&Refer=top)
1. [中国篮球从4块金牌到全军覆没](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%AF%AE%E7%90%83%E4%BB%8E4%E5%9D%97%E9%87%91%E7%89%8C%E5%88%B0%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23&t=31&band_rank=34&Refer=top)
1. [化妆师这个眼妆教学在海外火了](https://s.weibo.com//weibo?q=%23%E5%8C%96%E5%A6%86%E5%B8%88%E8%BF%99%E4%B8%AA%E7%9C%BC%E5%A6%86%E6%95%99%E5%AD%A6%E5%9C%A8%E6%B5%B7%E5%A4%96%E7%81%AB%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [日本选手被张展硕7枚金牌惊出表情包](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E9%80%89%E6%89%8B%E8%A2%AB%E5%BC%A0%E5%B1%95%E7%A1%957%E6%9E%9A%E9%87%91%E7%89%8C%E6%83%8A%E5%87%BA%E8%A1%A8%E6%83%85%E5%8C%85%23&t=31&band_rank=36&Refer=top)
1. [吴艳妮 林雨薇](https://s.weibo.com//weibo?q=%E5%90%B4%E8%89%B3%E5%A6%AE%20%E6%9E%97%E9%9B%A8%E8%96%87&t=31&band_rank=37&Refer=top)
1. [魏大勋一半一半好听](https://s.weibo.com//weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E4%B8%80%E5%8D%8A%E4%B8%80%E5%8D%8A%E5%A5%BD%E5%90%AC%23&t=31&band_rank=38&Refer=top)
1. [中美两国元首夫妇茶叙](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%A4%E5%9B%BD%E5%85%83%E9%A6%96%E5%A4%AB%E5%A6%87%E8%8C%B6%E5%8F%99%23&t=31&band_rank=39&Refer=top)
1. [兰香没等到沈家洗清冤屈的那天](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E6%B2%A1%E7%AD%89%E5%88%B0%E6%B2%88%E5%AE%B6%E6%B4%97%E6%B8%85%E5%86%A4%E5%B1%88%E7%9A%84%E9%82%A3%E5%A4%A9%23&t=31&band_rank=40&Refer=top)
1. [张远的提词器全是拼音](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%BF%9C%E7%9A%84%E6%8F%90%E8%AF%8D%E5%99%A8%E5%85%A8%E6%98%AF%E6%8B%BC%E9%9F%B3%23&t=31&band_rank=41&Refer=top)
1. [宁波小孩姐陈妤颉成亚洲女子飞人](https://s.weibo.com//weibo?q=%23%E5%AE%81%E6%B3%A2%E5%B0%8F%E5%AD%A9%E5%A7%90%E9%99%88%E5%A6%A4%E9%A2%89%E6%88%90%E4%BA%9A%E6%B4%B2%E5%A5%B3%E5%AD%90%E9%A3%9E%E4%BA%BA%23&t=31&band_rank=42&Refer=top)
1. [台湾最低月薪首破3万新台币](https://s.weibo.com//weibo?q=%E5%8F%B0%E6%B9%BE%E6%9C%80%E4%BD%8E%E6%9C%88%E8%96%AA%E9%A6%96%E7%A0%B43%E4%B8%87%E6%96%B0%E5%8F%B0%E5%B8%81&t=31&band_rank=43&Refer=top)
1. [鞠婧祎 来战](https://s.weibo.com//weibo?q=%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E6%9D%A5%E6%88%98&t=31&band_rank=44&Refer=top)
1. [苏炳添9秒83的含金量还在上升](https://s.weibo.com//weibo?q=%23%E8%8B%8F%E7%82%B3%E6%B7%BB9%E7%A7%9283%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23&t=31&band_rank=45&Refer=top)
1. [詹姆斯谈加盟76人原因](https://s.weibo.com//weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E8%B0%88%E5%8A%A0%E7%9B%9F76%E4%BA%BA%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=46&Refer=top)
1. [王楚钦孙颖莎 混双半决赛](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%20%E6%B7%B7%E5%8F%8C%E5%8D%8A%E5%86%B3%E8%B5%9B&t=31&band_rank=47&Refer=top)
1. [93岁太姥爷辅导作业被气得文思泉涌](https://s.weibo.com//weibo?q=%2393%E5%B2%81%E5%A4%AA%E5%A7%A5%E7%88%B7%E8%BE%85%E5%AF%BC%E4%BD%9C%E4%B8%9A%E8%A2%AB%E6%B0%94%E5%BE%97%E6%96%87%E6%80%9D%E6%B3%89%E6%B6%8C%23&t=31&band_rank=48&Refer=top)
1. [曼城115项违规中114项被判有罪](https://s.weibo.com//weibo?q=%23%E6%9B%BC%E5%9F%8E115%E9%A1%B9%E8%BF%9D%E8%A7%84%E4%B8%AD114%E9%A1%B9%E8%A2%AB%E5%88%A4%E6%9C%89%E7%BD%AA%23&t=31&band_rank=49&Refer=top)
1. [4岁男童在他人家中17楼坠下致残](https://s.weibo.com//weibo?q=%234%E5%B2%81%E7%94%B7%E7%AB%A5%E5%9C%A8%E4%BB%96%E4%BA%BA%E5%AE%B6%E4%B8%AD17%E6%A5%BC%E5%9D%A0%E4%B8%8B%E8%87%B4%E6%AE%8B%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
