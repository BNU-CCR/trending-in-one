# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-08 08:38:04

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
<!-- 最后更新时间 Sun Nov 08 2026 05:04:27 GMT+0800 (China Standard Time) -->

1. [多地官宣调整中小学上学时间](https://so.toutiao.com/search?keyword=多地官宣调整中小学上学时间)
1. [尾号98888888手机号128万起拍](https://so.toutiao.com/search?keyword=尾号98888888手机号128万起拍)
1. [“数”读新时代全面从严治党成效](https://so.toutiao.com/search?keyword=“数”读新时代全面从严治党成效)
1. [沪武高速潜山段发生多车追尾事故](https://so.toutiao.com/search?keyword=沪武高速潜山段发生多车追尾事故)
1. [乘客削苹果遇急刹车水果刀插进心脏](https://so.toutiao.com/search?keyword=乘客削苹果遇急刹车水果刀插进心脏)
1. [巴西市长检查医院男女医生闭门大睡](https://so.toutiao.com/search?keyword=巴西市长检查医院男女医生闭门大睡)
1. [这轮冷空气究竟多强](https://so.toutiao.com/search?keyword=这轮冷空气究竟多强)
1. [女子疑拍照时掉入颐和园昆明湖被救起](https://so.toutiao.com/search?keyword=女子疑拍照时掉入颐和园昆明湖被救起)
1. [台湾寺庙地下搜出近800公斤金银](https://so.toutiao.com/search?keyword=台湾寺庙地下搜出近800公斤金银)
1. [马斯克再次表白中国](https://so.toutiao.com/search?keyword=马斯克再次表白中国)
1. [乌鲁木齐辟谣中小学因特大暴雪放假](https://so.toutiao.com/search?keyword=乌鲁木齐辟谣中小学因特大暴雪放假)
1. [女老师上场示范连拉4个引体向上](https://so.toutiao.com/search?keyword=女老师上场示范连拉4个引体向上)
1. [喝水多排尿频繁真的说明肾脏好吗](https://so.toutiao.com/search?keyword=喝水多排尿频繁真的说明肾脏好吗)
1. [谁在把女性隐私明码标价](https://so.toutiao.com/search?keyword=谁在把女性隐私明码标价)
1. [中国不买英伟达芯片美国人急什么](https://so.toutiao.com/search?keyword=中国不买英伟达芯片美国人急什么)
1. [AI漫剧多赚钱？从业者揭内幕](https://so.toutiao.com/search?keyword=AI漫剧多赚钱？从业者揭内幕)
1. [日系车在中国为什么卖不动了](https://so.toutiao.com/search?keyword=日系车在中国为什么卖不动了)
1. [荆轲刺秦武松打虎等“监控画面”流出](https://so.toutiao.com/search?keyword=荆轲刺秦武松打虎等“监控画面”流出)
1. [北京火锅店立冬排队超1000桌](https://so.toutiao.com/search?keyword=北京火锅店立冬排队超1000桌)
1. [姜妍的一碗冷面够蒋欣吃三天](https://so.toutiao.com/search?keyword=姜妍的一碗冷面够蒋欣吃三天)
1. [男子被小奶狗抓伤没处理确诊狂犬病](https://so.toutiao.com/search?keyword=男子被小奶狗抓伤没处理确诊狂犬病)
1. [媒体评司马光砸缸“监控”流出](https://so.toutiao.com/search?keyword=媒体评司马光砸缸“监控”流出)
1. [圆通总裁心疼儿子Tim工作辛苦](https://so.toutiao.com/search?keyword=圆通总裁心疼儿子Tim工作辛苦)
1. [落马干部被留置当天仍在收礼](https://so.toutiao.com/search?keyword=落马干部被留置当天仍在收礼)
1. [马天宇直播被工作人员叫停](https://so.toutiao.com/search?keyword=马天宇直播被工作人员叫停)
1. [企业回应戴2499元指环不易被推倒](https://so.toutiao.com/search?keyword=企业回应戴2499元指环不易被推倒)
1. [国乒男单连续两站WTT冠军赛无缘四强](https://so.toutiao.com/search?keyword=国乒男单连续两站WTT冠军赛无缘四强)
1. [男子靠鸭形拳获武术比赛冠军](https://so.toutiao.com/search?keyword=男子靠鸭形拳获武术比赛冠军)
1. [厦门进入金鸡时间](https://so.toutiao.com/search?keyword=厦门进入金鸡时间)
1. [蒯曼惜败早田希娜 无缘法兰克福赛4强](https://so.toutiao.com/search?keyword=蒯曼惜败早田希娜%20无缘法兰克福赛4强)
1. [八达岭慕田峪长城飘起雪花](https://so.toutiao.com/search?keyword=八达岭慕田峪长城飘起雪花)
1. [全球电荒背后](https://so.toutiao.com/search?keyword=全球电荒背后)
1. [女子健身后大腿根鼓包确诊腹股沟疝](https://so.toutiao.com/search?keyword=女子健身后大腿根鼓包确诊腹股沟疝)
1. [中国战略核力量再添王牌](https://so.toutiao.com/search?keyword=中国战略核力量再添王牌)
1. [从25岁到105岁的养生重点](https://so.toutiao.com/search?keyword=从25岁到105岁的养生重点)
1. [神24任务标识有巴基斯坦国花](https://so.toutiao.com/search?keyword=神24任务标识有巴基斯坦国花)
1. [美军为何在中东集结三个航母打击群](https://so.toutiao.com/search?keyword=美军为何在中东集结三个航母打击群)
1. [男子和结婚11年的妻子走心表白](https://so.toutiao.com/search?keyword=男子和结婚11年的妻子走心表白)
1. [李书福：我完全认同换电模式](https://so.toutiao.com/search?keyword=李书福：我完全认同换电模式)
1. [日企坦言短期内只能更依赖中国钨链](https://so.toutiao.com/search?keyword=日企坦言短期内只能更依赖中国钨链)
1. [中国空间站将迎外籍航天员释放何信号](https://so.toutiao.com/search?keyword=中国空间站将迎外籍航天员释放何信号)
1. [巴新关掉台办事处后台当局急了](https://so.toutiao.com/search?keyword=巴新关掉台办事处后台当局急了)
1. [哈尔滨要求暴雪A类街路72小时内清运](https://so.toutiao.com/search?keyword=哈尔滨要求暴雪A类街路72小时内清运)
1. [6位草根做AI短剧播放破120亿](https://so.toutiao.com/search?keyword=6位草根做AI短剧播放破120亿)
1. [巴拉圭变天 台湾“金元外交”失算](https://so.toutiao.com/search?keyword=巴拉圭变天%20台湾“金元外交”失算)
1. [普京为何签令接管日本烟草在俄资产](https://so.toutiao.com/search?keyword=普京为何签令接管日本烟草在俄资产)
1. [老中医把毕生药方刻上墓碑](https://so.toutiao.com/search?keyword=老中医把毕生药方刻上墓碑)
1. [丰田改变打法 半年报增收又增利](https://so.toutiao.com/search?keyword=丰田改变打法%20半年报增收又增利)
1. [辽宁绥中遭遇降雪天气](https://so.toutiao.com/search?keyword=辽宁绥中遭遇降雪天气)
1. [科技股还要跌多久](https://so.toutiao.com/search?keyword=科技股还要跌多久)
1. [五台山景区迎初雪银装素裹](https://so.toutiao.com/search?keyword=五台山景区迎初雪银装素裹)
1. [《嫁金钗》大结局高光](https://so.toutiao.com/search?keyword=《嫁金钗》大结局高光)
1. [俄称对乌实施大规模打击](https://so.toutiao.com/search?keyword=俄称对乌实施大规模打击)
1. [全球疯狂砸钱建AI谁能收回本钱](https://so.toutiao.com/search?keyword=全球疯狂砸钱建AI谁能收回本钱)
1. [意媒：朱婷或打完本赛季就退役](https://so.toutiao.com/search?keyword=意媒：朱婷或打完本赛季就退役)
1. [王一博获GT3 AM+组别亚军](https://so.toutiao.com/search?keyword=王一博获GT3%20AM+组别亚军)
1. [高盛为何“逆势唱多”美国数据中心](https://so.toutiao.com/search?keyword=高盛为何“逆势唱多”美国数据中心)
1. [巴西学习中国推动稀土产业化](https://so.toutiao.com/search?keyword=巴西学习中国推动稀土产业化)
1. [美股AI股暴跌见底了吗](https://so.toutiao.com/search?keyword=美股AI股暴跌见底了吗)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Nov 08 2026 08:31:33 GMT+0800 (China Standard Time) -->

1. [GEN VS iG](https://www.zhihu.com/search?q=GEN%20VS%20iG)
1. [美股暴跌遭抛售潮](https://www.zhihu.com/search?q=%E7%BE%8E%E8%82%A1%E6%9A%B4%E8%B7%8C%E9%81%AD%E6%8A%9B%E5%94%AE%E6%BD%AE)
1. [红果短剧处理两万部低质短剧](https://www.zhihu.com/search?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%A4%84%E7%90%86%E4%B8%A4%E4%B8%87%E9%83%A8%E4%BD%8E%E8%B4%A8%E7%9F%AD%E5%89%A7)
1. [知乎好奇岛装扮游戏](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [8省份大到暴雪](https://www.zhihu.com/search?q=8%E7%9C%81%E4%BB%BD%E5%A4%A7%E5%88%B0%E6%9A%B4%E9%9B%AA)
1. [墨尔本一中国外卖员被刺身亡](https://www.zhihu.com/search?q=%E5%A2%A8%E5%B0%94%E6%9C%AC%E4%B8%80%E4%B8%AD%E5%9B%BD%E5%A4%96%E5%8D%96%E5%91%98%E8%A2%AB%E5%88%BA%E8%BA%AB%E4%BA%A1)
1. [王楚钦0-3温瑞博](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A60-3%E6%B8%A9%E7%91%9E%E5%8D%9A)
1. [11月7日DeepSeek 崩了](https://www.zhihu.com/search?q=11%E6%9C%887%E6%97%A5DeepSeek%20%E5%B4%A9%E4%BA%86)
1. [美国民主党欲推超级AI禁令](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E6%B0%91%E4%B8%BB%E5%85%9A%E6%AC%B2%E6%8E%A8%E8%B6%85%E7%BA%A7AI%E7%A6%81%E4%BB%A4)
1. [人民日报批年轻人养不起老人论调](https://www.zhihu.com/search?q=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%89%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%85%BB%E4%B8%8D%E8%B5%B7%E8%80%81%E4%BA%BA%E8%AE%BA%E8%B0%83)
1. [男子表演式上班以骗薪13万](https://www.zhihu.com/search?q=%E7%94%B7%E5%AD%90%E8%A1%A8%E6%BC%94%E5%BC%8F%E4%B8%8A%E7%8F%AD%E4%BB%A5%E9%AA%97%E8%96%AA13%E4%B8%87)
1. [特朗普被指全面惨败](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E6%8C%87%E5%85%A8%E9%9D%A2%E6%83%A8%E8%B4%A5)
1. [孙宇晨就与景甜财产纠纷案再发声](https://www.zhihu.com/search?q=%E5%AD%99%E5%AE%87%E6%99%A8%E5%B0%B1%E4%B8%8E%E6%99%AF%E7%94%9C%E8%B4%A2%E4%BA%A7%E7%BA%A0%E7%BA%B7%E6%A1%88%E5%86%8D%E5%8F%91%E5%A3%B0)
1. [T1 3-1 KC](https://www.zhihu.com/search?q=T1%203-1%20KC)
1. [蒯曼3-4早田希娜无缘4强](https://www.zhihu.com/search?q=%E8%92%AF%E6%9B%BC3-4%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E6%97%A0%E7%BC%984%E5%BC%BA)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Nov 08 2026 08:38:04 GMT+0800 (China Standard Time) -->

1. [如何看待深圳一机顶盒厂商在 130 万台出厂设备中预埋系统级后门，并将控制权出售给黑产的行为？](https://www.zhihu.com/question/2101846693520085800)
1. [怎么看字节跳动的扣子宣布下线解散，AI工作流是不是已经没有市场了？](https://www.zhihu.com/question/2101391707430565600)
1. [S16淘汰赛GEN VS iG，如何评价这场比赛？](https://www.zhihu.com/question/2102631107258750500)
1. [横店短剧女主半年接不到戏，选择摆摊交房租，当 AI 短剧越来越火，未来真人短剧行业将如何发展？](https://www.zhihu.com/question/2101613309371986700)
1. [广州多名小学生家长反映，孩子在校园周边小卖部签名即可赊账买零食，有学生月赊超千元，店家的做法合法吗？](https://www.zhihu.com/question/2102366518650718000)
1. [中国空间站将迎首位外籍航天员，巴基斯坦载荷专家参加神舟二十四号任务，具有哪些意义？](https://www.zhihu.com/question/2102344635867559400)
1. [地月距离达到多大，月球可以变成太阳的一颗行星？](https://www.zhihu.com/question/978464108)
1. [因拖欠工资起争执，男子被雇主扇9次耳光后急性脑梗死离世，雇主被判担责七成赔84万余元，法律上如何解读？](https://www.zhihu.com/question/2102507102237476000)
1. [曝美光将暂停 45 亿美元内存厂扩产，为何后续会出现要么 AI 崩要么内存涨价的局面？](https://www.zhihu.com/question/2102194286016082200)
1. [如何评价《嫁金钗》大结局女主软禁太后杀死亲王摆下鸿门宴携胚胎以令诸侯，最后以护国长公主身份摄政天下？](https://www.zhihu.com/question/2102316298638250500)
1. [为什么我们要保护并不稀有的麻雀？](https://www.zhihu.com/question/2098747939841652000)
1. [外媒曝约60万枚英伟达芯片滞留香港，美方部分人士指责其为「卡脖子」，为何美方会对此如此着急？](https://www.zhihu.com/question/2102096628895240200)
1. [APEC工商领导人峰会举办在即，中美俄三国能在深圳聚首吗？可能在国际上产生什么影响？](https://www.zhihu.com/question/2100138904796002000)
1. [教育部推行教师 AI 全覆盖培训，部分教师却表示「越用 AI 反而越累」，为什么会出现这种现象？](https://www.zhihu.com/question/2101733537099559200)
1. [《影之刃零》海外收入占到55%，一款武侠游戏在欧美卖得比国内好，这事该怎么看？](https://www.zhihu.com/question/2101626484280631600)
1. [如何看待 11 月 7 日 DeepSeek 再次崩溃？](https://www.zhihu.com/question/2102422630783571500)
1. [为什么同样是医学季，offer 3 不像 offer 8 一样被骂？](https://www.zhihu.com/question/2096320545000092400)
1. [东风-61 已列装到火箭军，这意味着什么？](https://www.zhihu.com/question/2101952535791718700)
1. [如何看待部分家长让孩子「只上半天学」，下午接回家自主安排？](https://www.zhihu.com/question/2102358744822702600)
1. [为什么《哈利·波特》里赫敏会看上罗恩，放在现实里这可能吗？](https://www.zhihu.com/question/285960239)
1. [男子收 1.98 万误转账约派出所归还却遭起诉，法院认定不当得利冻结其账户资金，怎样从法律角度解读？](https://www.zhihu.com/question/2102313430409658600)
1. [南京两家「零元面馆」排长队引争议，如何看待这种无门槛免费供餐模式？](https://www.zhihu.com/question/2100933353553896200)
1. [许飞「画地为牢」梗爆火，《后会友期》市占率飙至 74.3% ，综艺严重同质化的今天，它为什么能成功？](https://www.zhihu.com/question/2100916472155465000)
1. [比起传统魂类，影之刃零这套杀气体系是创新，还是换皮魂？](https://www.zhihu.com/question/2100169563543548200)
1. [2026wtt法兰克福冠军赛，蒯曼3-4不敌早田希娜，无缘女单4强，如何评价本场比赛？](https://www.zhihu.com/question/2102510684361832200)
1. [黄渤称父母都患有阿尔茨海默症，他担心会被遗传，阿尔茨海默症会遗传吗？有预防方法吗？](https://www.zhihu.com/question/1942309698943541500)
1. [网友说微信读书是腾讯的「功德产品」，字节没有，是这样吗？字节为什么做不出这种产品？](https://www.zhihu.com/question/2101703768936904400)
1. [任天堂 Switch2 三季度销量同比暴跌 41%，仅卖出 267 万台，销量承压的原因是什么？](https://www.zhihu.com/question/2101843746547556900)
1. [如果给你月薪9000，天天去图书馆看书你愿意吗？](https://www.zhihu.com/question/2096936259998447000)
1. [友情题材综艺之前少有成功案例，《后会友期》为什么能精准击中观众情绪？](https://www.zhihu.com/question/2100578658863637000)
1. [《球状闪电》讲了一个什么样的故事？](https://www.zhihu.com/question/273702393)
1. [为何美国民主党要推动超级AI禁令？个人违规20年监禁、企业强制解散，量刑堪比非法研发核武器，动机是啥？](https://www.zhihu.com/question/2101942075734471400)
1. [国漫十年内有机会超越日漫吗？](https://www.zhihu.com/question/2085157486156423400)
1. [理论上讲，通缉犯躲进原始森林，能否躲到寿终正寝不被抓？](https://www.zhihu.com/question/2100529507614581200)
1. [西方哲学入门为什么常从古希腊开始？](https://www.zhihu.com/question/2100908086680729600)
1. [如何评价李路执导，井柏然主演的税务稽查题材剧《谷雨》？](https://www.zhihu.com/question/2101725226383959000)
1. [如何看待 Faker 称 BLG 具备夺冠的实力，但很遗憾他们在半决赛对上了我们？](https://www.zhihu.com/question/2102347655133094100)
1. [每天给你5000元，但是第二天你的存款会自动消失，你愿意吗？](https://www.zhihu.com/question/2100563777120909300)
1. [你人生中有没有一件事，像跑马拉松一样需要慢慢坚持？](https://www.zhihu.com/question/2100986198684612600)
1. [为啥以前观念里会觉得喝咖啡很高档，现在却觉得喝咖啡的只是打工牛马？是咖啡变便宜了还是大众对咖啡祛魅了？](https://www.zhihu.com/question/2102124807307227600)
1. [如果军长已经坚决下达了必须执行的命令，而旅长坚定认为命令是错的，一定会导致战役的失败，那怎么办？](https://www.zhihu.com/question/2099319258408825900)
1. [现在日本算发达国家守门员吗?](https://www.zhihu.com/question/658697362)
1. [特斯拉宣布终止 Cybertruck 生产，扩大 Cybercab 的产能，怎样解读这一调整？](https://www.zhihu.com/question/2102306579311588400)
1. [《金瓶梅》里，西门庆那么有钱有势，为什么西门府还是注定崩溃？](https://www.zhihu.com/question/2040177248003683300)
1. [《影之刃零》10级以后重置武器等级需要消耗“逆炼符”，这是否是最多余的设计？](https://www.zhihu.com/question/2101980117081776000)
1. [不要太操心孩子，所有的操心基本都是徒劳的。这个命题是真命题还是假命题？](https://www.zhihu.com/question/2011402934085236000)
1. [如何评价DeepSeek Harness公布日活用户达150万？这会影响AI编程和智能体市场的竞争吗？](https://www.zhihu.com/question/2101823381955990800)
1. [研究生导师是更喜欢保研上来的学生还是考研上来的学生？](https://www.zhihu.com/question/2098191977334445800)

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
<!-- 最后更新时间 Sun Nov 08 2026 04:59:36 GMT+0800 (China Standard Time) -->

1. [共赴进博之约共享中国机遇](https://s.weibo.com//weibo?q=%23%E5%85%B1%E8%B5%B4%E8%BF%9B%E5%8D%9A%E4%B9%8B%E7%BA%A6%E5%85%B1%E4%BA%AB%E4%B8%AD%E5%9B%BD%E6%9C%BA%E9%81%87%23&Refer=new_time)
1. [8省份大到暴雪](https://s.weibo.com//weibo?q=%238%E7%9C%81%E4%BB%BD%E5%A4%A7%E5%88%B0%E6%9A%B4%E9%9B%AA%23&t=31&band_rank=1&Refer=top)
1. [提纯提白小纯啊](https://s.weibo.com//weibo?q=%23%E6%8F%90%E7%BA%AF%E6%8F%90%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%95%8A%23&t=31&band_rank=2&Refer=top)
1. [共赴APEC之约](https://s.weibo.com//weibo?q=%23%E5%85%B1%E8%B5%B4APEC%E4%B9%8B%E7%BA%A6%23&t=31&band_rank=3&Refer=top)
1. [S16半决赛宣传片](https://s.weibo.com//weibo?q=%23S16%E5%8D%8A%E5%86%B3%E8%B5%9B%E5%AE%A3%E4%BC%A0%E7%89%87%23&t=31&band_rank=4&Refer=top)
1. [Rookie说iG可以打开LPL的时代](https://s.weibo.com//weibo?q=%23Rookie%E8%AF%B4iG%E5%8F%AF%E4%BB%A5%E6%89%93%E5%BC%80LPL%E7%9A%84%E6%97%B6%E4%BB%A3%23&t=31&band_rank=5&Refer=top)
1. [马天宇和张萌被审判](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%92%8C%E5%BC%A0%E8%90%8C%E8%A2%AB%E5%AE%A1%E5%88%A4%23&t=31&band_rank=6&Refer=top)
1. [爸爸去哪儿3重聚为康康庆生](https://s.weibo.com//weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF3%E9%87%8D%E8%81%9A%E4%B8%BA%E5%BA%B7%E5%BA%B7%E5%BA%86%E7%94%9F%23&t=31&band_rank=7&Refer=top)
1. [厉娜当年完全疯子来的](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E5%BD%93%E5%B9%B4%E5%AE%8C%E5%85%A8%E7%96%AF%E5%AD%90%E6%9D%A5%E7%9A%84%23&t=31&band_rank=8&Refer=top)
1. [鹿晗投资天霸至今没拿过分红](https://s.weibo.com//weibo?q=%23%E9%B9%BF%E6%99%97%E6%8A%95%E8%B5%84%E5%A4%A9%E9%9C%B8%E8%87%B3%E4%BB%8A%E6%B2%A1%E6%8B%BF%E8%BF%87%E5%88%86%E7%BA%A2%23&t=31&band_rank=9&Refer=top)
1. [今何在](https://s.weibo.com//weibo?q=%E4%BB%8A%E4%BD%95%E5%9C%A8&t=31&band_rank=10&Refer=top)
1. [炎亚纶这次我真得站你这边了](https://s.weibo.com//weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E8%BF%99%E6%AC%A1%E6%88%91%E7%9C%9F%E5%BE%97%E7%AB%99%E4%BD%A0%E8%BF%99%E8%BE%B9%E4%BA%86%23&t=31&band_rank=11&Refer=top)
1. [孩子不在家夫妻还需要在一起吗](https://s.weibo.com//weibo?q=%E5%AD%A9%E5%AD%90%E4%B8%8D%E5%9C%A8%E5%AE%B6%E5%A4%AB%E5%A6%BB%E8%BF%98%E9%9C%80%E8%A6%81%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%90%97&t=31&band_rank=12&Refer=top)
1. [博主私信发现两人偷情对话](https://s.weibo.com//weibo?q=%E5%8D%9A%E4%B8%BB%E7%A7%81%E4%BF%A1%E5%8F%91%E7%8E%B0%E4%B8%A4%E4%BA%BA%E5%81%B7%E6%83%85%E5%AF%B9%E8%AF%9D&t=31&band_rank=13&Refer=top)
1. [两千万粉博主称不投流卖三万](https://s.weibo.com//weibo?q=%E4%B8%A4%E5%8D%83%E4%B8%87%E7%B2%89%E5%8D%9A%E4%B8%BB%E7%A7%B0%E4%B8%8D%E6%8A%95%E6%B5%81%E5%8D%96%E4%B8%89%E4%B8%87&t=31&band_rank=14&Refer=top)
1. [多平台下架推不倒戒指](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E4%B8%8B%E6%9E%B6%E6%8E%A8%E4%B8%8D%E5%80%92%E6%88%92%E6%8C%87%23&t=31&band_rank=15&Refer=top)
1. [马天宇 李明德](https://s.weibo.com//weibo?q=%E9%A9%AC%E5%A4%A9%E5%AE%87%20%E6%9D%8E%E6%98%8E%E5%BE%B7&t=31&band_rank=16&Refer=top)
1. [李一桐疑似内涵芒果](https://s.weibo.com//weibo?q=%E6%9D%8E%E4%B8%80%E6%A1%90%E7%96%91%E4%BC%BC%E5%86%85%E6%B6%B5%E8%8A%92%E6%9E%9C&t=31&band_rank=17&Refer=top)
1. [偷拍丈夫出轨妻子回应为何安装监控](https://s.weibo.com//weibo?q=%23%E5%81%B7%E6%8B%8D%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E5%AE%89%E8%A3%85%E7%9B%91%E6%8E%A7%23&t=31&band_rank=18&Refer=top)
1. [刘丹透露小糯米在英国读书](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%B8%B9%E9%80%8F%E9%9C%B2%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%9C%A8%E8%8B%B1%E5%9B%BD%E8%AF%BB%E4%B9%A6%23&t=31&band_rank=19&Refer=top)
1. [国乒男单法兰克福无缘四强](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E6%97%A0%E7%BC%98%E5%9B%9B%E5%BC%BA%23&t=31&band_rank=20&Refer=top)
1. [芒果有条通天路你走不走](https://s.weibo.com//weibo?q=%23%E8%8A%92%E6%9E%9C%E6%9C%89%E6%9D%A1%E9%80%9A%E5%A4%A9%E8%B7%AF%E4%BD%A0%E8%B5%B0%E4%B8%8D%E8%B5%B0%23&t=31&band_rank=21&Refer=top)
1. [火树是最懂白小纯青稚的人](https://s.weibo.com//weibo?q=%23%E7%81%AB%E6%A0%91%E6%98%AF%E6%9C%80%E6%87%82%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E7%9A%84%E4%BA%BA%23&t=31&band_rank=22&Refer=top)
1. [已读不回就能收获180个鸡蛋](https://s.weibo.com//weibo?q=%E5%B7%B2%E8%AF%BB%E4%B8%8D%E5%9B%9E%E5%B0%B1%E8%83%BD%E6%94%B6%E8%8E%B7180%E4%B8%AA%E9%B8%A1%E8%9B%8B&t=31&band_rank=23&Refer=top)
1. [iPhone20外观](https://s.weibo.com//weibo?q=%23iPhone20%E5%A4%96%E8%A7%82%23&t=31&band_rank=24&Refer=top)
1. [王子璇回答白小纯后被消音](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E5%9B%9E%E7%AD%94%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%90%8E%E8%A2%AB%E6%B6%88%E9%9F%B3%23&t=31&band_rank=25&Refer=top)
1. [大S剥虾论八年后被读懂](https://s.weibo.com//weibo?q=%E5%A4%A7S%E5%89%A5%E8%99%BE%E8%AE%BA%E5%85%AB%E5%B9%B4%E5%90%8E%E8%A2%AB%E8%AF%BB%E6%87%82&t=31&band_rank=26&Refer=top)
1. [白小纯破防的原因](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%A0%B4%E9%98%B2%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=27&Refer=top)
1. [北京的雪有多大](https://s.weibo.com//weibo?q=%23%E5%8C%97%E4%BA%AC%E7%9A%84%E9%9B%AA%E6%9C%89%E5%A4%9A%E5%A4%A7%23&t=31&band_rank=28&Refer=top)
1. [温瑞博0比4林昀儒](https://s.weibo.com//weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A0%E6%AF%944%E6%9E%97%E6%98%80%E5%84%92%23&t=31&band_rank=29&Refer=top)
1. [F1圣保罗大奖赛三练](https://s.weibo.com//weibo?q=F1%E5%9C%A3%E4%BF%9D%E7%BD%97%E5%A4%A7%E5%A5%96%E8%B5%9B%E4%B8%89%E7%BB%83&t=31&band_rank=30&Refer=top)
1. [朋友竟是欠租三年的租客](https://s.weibo.com//weibo?q=%E6%9C%8B%E5%8F%8B%E7%AB%9F%E6%98%AF%E6%AC%A0%E7%A7%9F%E4%B8%89%E5%B9%B4%E7%9A%84%E7%A7%9F%E5%AE%A2&t=31&band_rank=31&Refer=top)
1. [江南 今何在](https://s.weibo.com//weibo?q=%E6%B1%9F%E5%8D%97%20%E4%BB%8A%E4%BD%95%E5%9C%A8&t=31&band_rank=32&Refer=top)
1. [王楚然表白完黄景瑜愣住了两秒](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%A1%A8%E7%99%BD%E5%AE%8C%E9%BB%84%E6%99%AF%E7%91%9C%E6%84%A3%E4%BD%8F%E4%BA%86%E4%B8%A4%E7%A7%92%23&t=31&band_rank=33&Refer=top)
1. [日乒3人晋级女单四强](https://s.weibo.com//weibo?q=%23%E6%97%A5%E4%B9%923%E4%BA%BA%E6%99%8B%E7%BA%A7%E5%A5%B3%E5%8D%95%E5%9B%9B%E5%BC%BA%23&t=31&band_rank=34&Refer=top)
1. [五毒之人碰到纯阳之体](https://s.weibo.com//weibo?q=%E4%BA%94%E6%AF%92%E4%B9%8B%E4%BA%BA%E7%A2%B0%E5%88%B0%E7%BA%AF%E9%98%B3%E4%B9%8B%E4%BD%93&t=31&band_rank=35&Refer=top)
1. [日军侵华时也曾用漫才做宣传](https://s.weibo.com//weibo?q=%23%E6%97%A5%E5%86%9B%E4%BE%B5%E5%8D%8E%E6%97%B6%E4%B9%9F%E6%9B%BE%E7%94%A8%E6%BC%AB%E6%89%8D%E5%81%9A%E5%AE%A3%E4%BC%A0%23&t=31&band_rank=36&Refer=top)
1. [战国宝珠酷似蓝色星球](https://s.weibo.com//weibo?q=%E6%88%98%E5%9B%BD%E5%AE%9D%E7%8F%A0%E9%85%B7%E4%BC%BC%E8%93%9D%E8%89%B2%E6%98%9F%E7%90%83&t=31&band_rank=37&Refer=top)
1. [网友后会友期观察室嘉宾换人提名](https://s.weibo.com//weibo?q=%23%E7%BD%91%E5%8F%8B%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%A7%82%E5%AF%9F%E5%AE%A4%E5%98%89%E5%AE%BE%E6%8D%A2%E4%BA%BA%E6%8F%90%E5%90%8D%23&t=31&band_rank=38&Refer=top)
1. [初见面时厉娜看了两次许飞的戒指](https://s.weibo.com//weibo?q=%23%E5%88%9D%E8%A7%81%E9%9D%A2%E6%97%B6%E5%8E%89%E5%A8%9C%E7%9C%8B%E4%BA%86%E4%B8%A4%E6%AC%A1%E8%AE%B8%E9%A3%9E%E7%9A%84%E6%88%92%E6%8C%87%23&t=31&band_rank=39&Refer=top)
1. [国乒男单6站冠军赛仅1次晋级决赛](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%956%E7%AB%99%E5%86%A0%E5%86%9B%E8%B5%9B%E4%BB%851%E6%AC%A1%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23&t=31&band_rank=40&Refer=top)
1. [梁文锋DeepSeek不止国运级](https://s.weibo.com//weibo?q=%E6%A2%81%E6%96%87%E9%94%8BDeepSeek%E4%B8%8D%E6%AD%A2%E5%9B%BD%E8%BF%90%E7%BA%A7&t=31&band_rank=41&Refer=top)
1. [康康诺一完美复刻了军烨的身高差](https://s.weibo.com//weibo?q=%23%E5%BA%B7%E5%BA%B7%E8%AF%BA%E4%B8%80%E5%AE%8C%E7%BE%8E%E5%A4%8D%E5%88%BB%E4%BA%86%E5%86%9B%E7%83%A8%E7%9A%84%E8%BA%AB%E9%AB%98%E5%B7%AE%23&t=31&band_rank=42&Refer=top)
1. [Crisp谈BLG对阵T1和iG对阵GEN](https://s.weibo.com//weibo?q=%23Crisp%E8%B0%88BLG%E5%AF%B9%E9%98%B5T1%E5%92%8CiG%E5%AF%B9%E9%98%B5GEN%23&t=31&band_rank=43&Refer=top)
1. [原来许飞发疯是这样](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%AE%B8%E9%A3%9E%E5%8F%91%E7%96%AF%E6%98%AF%E8%BF%99%E6%A0%B7%23&t=31&band_rank=44&Refer=top)
1. [嫁金钗最好嗑的一个视频出现了](https://s.weibo.com//weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E6%9C%80%E5%A5%BD%E5%97%91%E7%9A%84%E4%B8%80%E4%B8%AA%E8%A7%86%E9%A2%91%E5%87%BA%E7%8E%B0%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [大爷让买流量我买成榴莲](https://s.weibo.com//weibo?q=%E5%A4%A7%E7%88%B7%E8%AE%A9%E4%B9%B0%E6%B5%81%E9%87%8F%E6%88%91%E4%B9%B0%E6%88%90%E6%A6%B4%E8%8E%B2&t=31&band_rank=46&Refer=top)
1. [chinagt中国超级跑车锦标赛](https://s.weibo.com//weibo?q=chinagt%E4%B8%AD%E5%9B%BD%E8%B6%85%E7%BA%A7%E8%B7%91%E8%BD%A6%E9%94%A6%E6%A0%87%E8%B5%9B&t=31&band_rank=47&Refer=top)
1. [Meiko力挺JiaQi](https://s.weibo.com//weibo?q=%23Meiko%E5%8A%9B%E6%8C%BAJiaQi%23&t=31&band_rank=48&Refer=top)
1. [曝90剧花美国待产](https://s.weibo.com//weibo?q=%23%E6%9B%9D90%E5%89%A7%E8%8A%B1%E7%BE%8E%E5%9B%BD%E5%BE%85%E4%BA%A7%23&t=31&band_rank=49&Refer=top)
1. [伊朗取消导弹射程限制](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%96%E6%B6%88%E5%AF%BC%E5%BC%B9%E5%B0%84%E7%A8%8B%E9%99%90%E5%88%B6%23&t=31&band_rank=50&Refer=top)
1. [多平台下架推不倒戒指](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E4%B8%8B%E6%9E%B6%E6%8E%A8%E4%B8%8D%E5%80%92%E6%88%92%E6%8C%87%23&t=31&band_rank=1&Refer=top)
1. [8省份大到暴雪](https://s.weibo.com//weibo?q=%238%E7%9C%81%E4%BB%BD%E5%A4%A7%E5%88%B0%E6%9A%B4%E9%9B%AA%23&t=31&band_rank=2&Refer=top)
1. [国乒男单6站冠军赛仅1次晋级决赛](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%956%E7%AB%99%E5%86%A0%E5%86%9B%E8%B5%9B%E4%BB%851%E6%AC%A1%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23&t=31&band_rank=4&Refer=top)
1. [嫁金钗最好嗑的一个视频出现了](https://s.weibo.com//weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E6%9C%80%E5%A5%BD%E5%97%91%E7%9A%84%E4%B8%80%E4%B8%AA%E8%A7%86%E9%A2%91%E5%87%BA%E7%8E%B0%E4%BA%86%23&t=31&band_rank=5&Refer=top)
1. [乘客车上削苹果急刹车水果刀插心脏](https://s.weibo.com//weibo?q=%23%E4%B9%98%E5%AE%A2%E8%BD%A6%E4%B8%8A%E5%89%8A%E8%8B%B9%E6%9E%9C%E6%80%A5%E5%88%B9%E8%BD%A6%E6%B0%B4%E6%9E%9C%E5%88%80%E6%8F%92%E5%BF%83%E8%84%8F%23&t=31&band_rank=6&Refer=top)
1. [王楚然表白完黄景瑜愣住了两秒](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%A1%A8%E7%99%BD%E5%AE%8C%E9%BB%84%E6%99%AF%E7%91%9C%E6%84%A3%E4%BD%8F%E4%BA%86%E4%B8%A4%E7%A7%92%23&t=31&band_rank=7&Refer=top)
1. [国乒教练回应青奥会颗粒无收](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E6%95%99%E7%BB%83%E5%9B%9E%E5%BA%94%E9%9D%92%E5%A5%A5%E4%BC%9A%E9%A2%97%E7%B2%92%E6%97%A0%E6%94%B6%23&t=31&band_rank=8&Refer=top)
1. [孙燕姿都尴尬得不知道说啥了](https://s.weibo.com//weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E9%83%BD%E5%B0%B4%E5%B0%AC%E5%BE%97%E4%B8%8D%E7%9F%A5%E9%81%93%E8%AF%B4%E5%95%A5%E4%BA%86%23&t=31&band_rank=9&Refer=top)
1. [温瑞博0比4林昀儒](https://s.weibo.com//weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A0%E6%AF%944%E6%9E%97%E6%98%80%E5%84%92%23&t=31&band_rank=10&Refer=top)
1. [爸爸去哪儿3重聚为康康庆生](https://s.weibo.com//weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF3%E9%87%8D%E8%81%9A%E4%B8%BA%E5%BA%B7%E5%BA%B7%E5%BA%86%E7%94%9F%23&t=31&band_rank=11&Refer=top)
1. [马天宇 李明德](https://s.weibo.com//weibo?q=%E9%A9%AC%E5%A4%A9%E5%AE%87%20%E6%9D%8E%E6%98%8E%E5%BE%B7&t=31&band_rank=12&Refer=top)
1. [鹿晗投资天霸至今没拿过分红](https://s.weibo.com//weibo?q=%23%E9%B9%BF%E6%99%97%E6%8A%95%E8%B5%84%E5%A4%A9%E9%9C%B8%E8%87%B3%E4%BB%8A%E6%B2%A1%E6%8B%BF%E8%BF%87%E5%88%86%E7%BA%A2%23&t=31&band_rank=13&Refer=top)
1. [博主私信发现两人偷情对话](https://s.weibo.com//weibo?q=%E5%8D%9A%E4%B8%BB%E7%A7%81%E4%BF%A1%E5%8F%91%E7%8E%B0%E4%B8%A4%E4%BA%BA%E5%81%B7%E6%83%85%E5%AF%B9%E8%AF%9D&t=31&band_rank=14&Refer=top)
1. [刘丹透露小糯米在英国读书](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%B8%B9%E9%80%8F%E9%9C%B2%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%9C%A8%E8%8B%B1%E5%9B%BD%E8%AF%BB%E4%B9%A6%23&t=31&band_rank=15&Refer=top)
1. [两千万粉博主称不投流卖三万](https://s.weibo.com//weibo?q=%E4%B8%A4%E5%8D%83%E4%B8%87%E7%B2%89%E5%8D%9A%E4%B8%BB%E7%A7%B0%E4%B8%8D%E6%8A%95%E6%B5%81%E5%8D%96%E4%B8%89%E4%B8%87&t=31&band_rank=16&Refer=top)
1. [孩子不在家夫妻还需要在一起吗](https://s.weibo.com//weibo?q=%E5%AD%A9%E5%AD%90%E4%B8%8D%E5%9C%A8%E5%AE%B6%E5%A4%AB%E5%A6%BB%E8%BF%98%E9%9C%80%E8%A6%81%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%90%97&t=31&band_rank=18&Refer=top)
1. [提纯提白小纯啊](https://s.weibo.com//weibo?q=%23%E6%8F%90%E7%BA%AF%E6%8F%90%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%95%8A%23&t=31&band_rank=19&Refer=top)
1. [马斯克高度评价中国车企竞争力](https://s.weibo.com//weibo?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E9%AB%98%E5%BA%A6%E8%AF%84%E4%BB%B7%E4%B8%AD%E5%9B%BD%E8%BD%A6%E4%BC%81%E7%AB%9E%E4%BA%89%E5%8A%9B&t=31&band_rank=20&Refer=top)
1. [一条微博记录立冬](https://s.weibo.com//weibo?q=%E4%B8%80%E6%9D%A1%E5%BE%AE%E5%8D%9A%E8%AE%B0%E5%BD%95%E7%AB%8B%E5%86%AC&t=31&band_rank=21&Refer=top)
1. [iPhone20外观](https://s.weibo.com//weibo?q=%23iPhone20%E5%A4%96%E8%A7%82%23&t=31&band_rank=22&Refer=top)
1. [今何在](https://s.weibo.com//weibo?q=%E4%BB%8A%E4%BD%95%E5%9C%A8&t=31&band_rank=23&Refer=top)
1. [大S剥虾论八年后被读懂](https://s.weibo.com//weibo?q=%E5%A4%A7S%E5%89%A5%E8%99%BE%E8%AE%BA%E5%85%AB%E5%B9%B4%E5%90%8E%E8%A2%AB%E8%AF%BB%E6%87%82&t=31&band_rank=24&Refer=top)
1. [陈幸同2比4张本美和](https://s.weibo.com//weibo?q=%E9%99%88%E5%B9%B8%E5%90%8C2%E6%AF%944%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C&t=31&band_rank=25&Refer=top)
1. [芒果有条通天路你走不走](https://s.weibo.com//weibo?q=%23%E8%8A%92%E6%9E%9C%E6%9C%89%E6%9D%A1%E9%80%9A%E5%A4%A9%E8%B7%AF%E4%BD%A0%E8%B5%B0%E4%B8%8D%E8%B5%B0%23&t=31&band_rank=26&Refer=top)
1. [梁文锋DeepSeek不止国运级](https://s.weibo.com//weibo?q=%E6%A2%81%E6%96%87%E9%94%8BDeepSeek%E4%B8%8D%E6%AD%A2%E5%9B%BD%E8%BF%90%E7%BA%A7&t=31&band_rank=27&Refer=top)
1. [曝90剧花美国待产](https://s.weibo.com//weibo?q=%23%E6%9B%9D90%E5%89%A7%E8%8A%B1%E7%BE%8E%E5%9B%BD%E5%BE%85%E4%BA%A7%23&t=31&band_rank=28&Refer=top)
1. [刘熙墨脸部二度烧伤](https://s.weibo.com//weibo?q=%23%E5%88%98%E7%86%99%E5%A2%A8%E8%84%B8%E9%83%A8%E4%BA%8C%E5%BA%A6%E7%83%A7%E4%BC%A4%23&t=31&band_rank=29&Refer=top)
1. [女子欲轻生已婚男回复在家不方便](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AC%B2%E8%BD%BB%E7%94%9F%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%9B%9E%E5%A4%8D%E5%9C%A8%E5%AE%B6%E4%B8%8D%E6%96%B9%E4%BE%BF%23&t=31&band_rank=30&Refer=top)
1. [王子璇回答白小纯后被消音](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E5%9B%9E%E7%AD%94%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%90%8E%E8%A2%AB%E6%B6%88%E9%9F%B3%23&t=31&band_rank=31&Refer=top)
1. [夏之光问尼格买提有孩子了吗](https://s.weibo.com//weibo?q=%23%E5%A4%8F%E4%B9%8B%E5%85%89%E9%97%AE%E5%B0%BC%E6%A0%BC%E4%B9%B0%E6%8F%90%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%E5%90%97%23&t=31&band_rank=32&Refer=top)
1. [北京的雪有多大](https://s.weibo.com//weibo?q=%23%E5%8C%97%E4%BA%AC%E7%9A%84%E9%9B%AA%E6%9C%89%E5%A4%9A%E5%A4%A7%23&t=31&band_rank=33&Refer=top)
1. [初见面时厉娜看了两次许飞的戒指](https://s.weibo.com//weibo?q=%23%E5%88%9D%E8%A7%81%E9%9D%A2%E6%97%B6%E5%8E%89%E5%A8%9C%E7%9C%8B%E4%BA%86%E4%B8%A4%E6%AC%A1%E8%AE%B8%E9%A3%9E%E7%9A%84%E6%88%92%E6%8C%87%23&t=31&band_rank=34&Refer=top)
1. [康康诺一完美复刻了军烨的身高差](https://s.weibo.com//weibo?q=%23%E5%BA%B7%E5%BA%B7%E8%AF%BA%E4%B8%80%E5%AE%8C%E7%BE%8E%E5%A4%8D%E5%88%BB%E4%BA%86%E5%86%9B%E7%83%A8%E7%9A%84%E8%BA%AB%E9%AB%98%E5%B7%AE%23&t=31&band_rank=35&Refer=top)
1. [江南 今何在](https://s.weibo.com//weibo?q=%E6%B1%9F%E5%8D%97%20%E4%BB%8A%E4%BD%95%E5%9C%A8&t=31&band_rank=36&Refer=top)
1. [火树是最懂白小纯青稚的人](https://s.weibo.com//weibo?q=%23%E7%81%AB%E6%A0%91%E6%98%AF%E6%9C%80%E6%87%82%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E7%9A%84%E4%BA%BA%23&t=31&band_rank=37&Refer=top)
1. [赵丽颖也得变着法哄自己上班](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B9%9F%E5%BE%97%E5%8F%98%E7%9D%80%E6%B3%95%E5%93%84%E8%87%AA%E5%B7%B1%E4%B8%8A%E7%8F%AD%23&t=31&band_rank=38&Refer=top)
1. [男子被小奶狗抓伤确诊狂犬病](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E5%B0%8F%E5%A5%B6%E7%8B%97%E6%8A%93%E4%BC%A4%E7%A1%AE%E8%AF%8A%E7%8B%82%E7%8A%AC%E7%97%85%23&t=31&band_rank=39&Refer=top)
1. [曝w盛典最终阵容](https://s.weibo.com//weibo?q=%23%E6%9B%9Dw%E7%9B%9B%E5%85%B8%E6%9C%80%E7%BB%88%E9%98%B5%E5%AE%B9%23&t=31&band_rank=40&Refer=top)
1. [伊朗取消导弹射程限制](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%96%E6%B6%88%E5%AF%BC%E5%BC%B9%E5%B0%84%E7%A8%8B%E9%99%90%E5%88%B6%23&t=31&band_rank=41&Refer=top)
1. [王橹杰台历晒单断层第一](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%8F%B0%E5%8E%86%E6%99%92%E5%8D%95%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23&t=31&band_rank=42&Refer=top)
1. [男子因幼犬轻咬未处理引发狂犬病](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E5%B9%BC%E7%8A%AC%E8%BD%BB%E5%92%AC%E6%9C%AA%E5%A4%84%E7%90%86%E5%BC%95%E5%8F%91%E7%8B%82%E7%8A%AC%E7%97%85%23&t=31&band_rank=43&Refer=top)
1. [姜妍一顿饭就花了20块](https://s.weibo.com//weibo?q=%23%E5%A7%9C%E5%A6%8D%E4%B8%80%E9%A1%BF%E9%A5%AD%E5%B0%B1%E8%8A%B1%E4%BA%8620%E5%9D%97%23&t=31&band_rank=44&Refer=top)
1. [杨颖文咏珊 后会友期](https://s.weibo.com//weibo?q=%E6%9D%A8%E9%A2%96%E6%96%87%E5%92%8F%E7%8F%8A%20%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F&t=31&band_rank=45&Refer=top)
1. [赵丽颖闫妮点评爱情题材电影](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%97%AB%E5%A6%AE%E7%82%B9%E8%AF%84%E7%88%B1%E6%83%85%E9%A2%98%E6%9D%90%E7%94%B5%E5%BD%B1%23&t=31&band_rank=46&Refer=top)
1. [白小纯破防的原因](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%A0%B4%E9%98%B2%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=47&Refer=top)
1. [男子健身长期吃鸡肉丸乳房发育](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%A5%E8%BA%AB%E9%95%BF%E6%9C%9F%E5%90%83%E9%B8%A1%E8%82%89%E4%B8%B8%E4%B9%B3%E6%88%BF%E5%8F%91%E8%82%B2%23&t=31&band_rank=48&Refer=top)
1. [衣服正确挂法好拿好放省空间](https://s.weibo.com//weibo?q=%E8%A1%A3%E6%9C%8D%E6%AD%A3%E7%A1%AE%E6%8C%82%E6%B3%95%E5%A5%BD%E6%8B%BF%E5%A5%BD%E6%94%BE%E7%9C%81%E7%A9%BA%E9%97%B4&t=31&band_rank=49&Refer=top)
1. [林昀儒回应4比0温瑞博](https://s.weibo.com//weibo?q=%23%E6%9E%97%E6%98%80%E5%84%92%E5%9B%9E%E5%BA%944%E6%AF%940%E6%B8%A9%E7%91%9E%E5%8D%9A%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
