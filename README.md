# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-06 00:03:19

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
<!-- 最后更新时间 Mon Oct 05 2026 15:39:48 GMT+0800 (China Standard Time) -->

1. [日本罕见1天3次向美国强烈抗议](https://so.toutiao.com/search?keyword=日本罕见1天3次向美国强烈抗议)
1. [缅北电诈回流人员自述被割肾经历](https://so.toutiao.com/search?keyword=缅北电诈回流人员自述被割肾经历)
1. [今年以来我国投资结构优化持续推进](https://so.toutiao.com/search?keyword=今年以来我国投资结构优化持续推进)
1. [张本智和称对手发球时故意拖延时间](https://so.toutiao.com/search?keyword=张本智和称对手发球时故意拖延时间)
1. [被执行死刑的巫鸿明、白应苍出镜](https://so.toutiao.com/search?keyword=被执行死刑的巫鸿明、白应苍出镜)
1. [为何胡塞与沙特军事博弈进一步升级](https://so.toutiao.com/search?keyword=为何胡塞与沙特军事博弈进一步升级)
1. [日本代表团团长承认金牌数被中国碾压](https://so.toutiao.com/search?keyword=日本代表团团长承认金牌数被中国碾压)
1. [郑钦文抢七先下一城](https://so.toutiao.com/search?keyword=郑钦文抢七先下一城)
1. [中方曾三次约见缅北四大家族代表](https://so.toutiao.com/search?keyword=中方曾三次约见缅北四大家族代表)
1. [吴艳妮说亚运会不想输所以拼下来了](https://so.toutiao.com/search?keyword=吴艳妮说亚运会不想输所以拼下来了)
1. [医生辟谣高铁座椅或为HPV感染重灾区](https://so.toutiao.com/search?keyword=医生辟谣高铁座椅或为HPV感染重灾区)
1. [蔡康永账号IP在日本](https://so.toutiao.com/search?keyword=蔡康永账号IP在日本)
1. [WTT中国大满贯混双16强全部产生](https://so.toutiao.com/search?keyword=WTT中国大满贯混双16强全部产生)
1. [缅北电诈头目家中钱多到发霉](https://so.toutiao.com/search?keyword=缅北电诈头目家中钱多到发霉)
1. [王炳忠：蔡康永是双面人想两边通吃](https://so.toutiao.com/search?keyword=王炳忠：蔡康永是双面人想两边通吃)
1. [中国人开始放心开电车跑长途了吗](https://so.toutiao.com/search?keyword=中国人开始放心开电车跑长途了吗)
1. [央媒发声：三大球不翻身不行](https://so.toutiao.com/search?keyword=央媒发声：三大球不翻身不行)
1. [蔡康永为“台独”站台遭品牌切割](https://so.toutiao.com/search?keyword=蔡康永为“台独”站台遭品牌切割)
1. [美国抛出“子午线计划”有何意图](https://so.toutiao.com/search?keyword=美国抛出“子午线计划”有何意图)
1. [超10万份孕妇血样被偷运出境](https://so.toutiao.com/search?keyword=超10万份孕妇血样被偷运出境)
1. [蔡康永手拿加油棒为“台独”站台](https://so.toutiao.com/search?keyword=蔡康永手拿加油棒为“台独”站台)
1. [普京称西方卷入对俄战争](https://so.toutiao.com/search?keyword=普京称西方卷入对俄战争)
1. [年轻人开始不买景区冤种三件套了](https://so.toutiao.com/search?keyword=年轻人开始不买景区冤种三件套了)
1. [蔡康永社媒多个作品已下架](https://so.toutiao.com/search?keyword=蔡康永社媒多个作品已下架)
1. [陈思诚这次把“唐探”商标撕了](https://so.toutiao.com/search?keyword=陈思诚这次把“唐探”商标撕了)
1. [张本智和：目标和高手对决打到前二](https://so.toutiao.com/search?keyword=张本智和：目标和高手对决打到前二)
1. [杨瀚森NBA去留的两本账](https://so.toutiao.com/search?keyword=杨瀚森NBA去留的两本账)
1. [央视迎来两位新主播](https://so.toutiao.com/search?keyword=央视迎来两位新主播)
1. [日媒：日本正用行动阻碍中日对话](https://so.toutiao.com/search?keyword=日媒：日本正用行动阻碍中日对话)
1. [近半受访德国人认为默克尔比默茨出色](https://so.toutiao.com/search?keyword=近半受访德国人认为默克尔比默茨出色)
1. [中国选手包揽斯诺克世界排名前二](https://so.toutiao.com/search?keyword=中国选手包揽斯诺克世界排名前二)
1. [冲绳知事谈驻日美军杀人案多次发笑](https://so.toutiao.com/search?keyword=冲绳知事谈驻日美军杀人案多次发笑)
1. [王艺迪：我觉得还能再打十局](https://so.toutiao.com/search?keyword=王艺迪：我觉得还能再打十局)
1. [葡萄牙经济部长谈C罗离队](https://so.toutiao.com/search?keyword=葡萄牙经济部长谈C罗离队)
1. [美股通宵交易要来了意味着什么](https://so.toutiao.com/search?keyword=美股通宵交易要来了意味着什么)
1. [蒯曼晋级WTT中国大满贯女单32强](https://so.toutiao.com/search?keyword=蒯曼晋级WTT中国大满贯女单32强)
1. [日本对美国抗议有用吗](https://so.toutiao.com/search?keyword=日本对美国抗议有用吗)
1. [应急管理部发布国庆假期返程安全提示](https://so.toutiao.com/search?keyword=应急管理部发布国庆假期返程安全提示)
1. [边境民警谈“望缅止步”过往眼含热泪](https://so.toutiao.com/search?keyword=边境民警谈“望缅止步”过往眼含热泪)
1. [吴宜泽世界排名上升到第二位](https://so.toutiao.com/search?keyword=吴宜泽世界排名上升到第二位)
1. [也门宣布启动行动收复胡塞近期控制区](https://so.toutiao.com/search?keyword=也门宣布启动行动收复胡塞近期控制区)
1. [亚运国足主帅称这代球员有望进世界杯](https://so.toutiao.com/search?keyword=亚运国足主帅称这代球员有望进世界杯)
1. [部分中小银行限时“加息”揽储](https://so.toutiao.com/search?keyword=部分中小银行限时“加息”揽储)
1. [蒙嘉慧谈亲人离世后没有赚钱动力](https://so.toutiao.com/search?keyword=蒙嘉慧谈亲人离世后没有赚钱动力)
1. [莫雷加德尊称王楚钦为“老师”](https://so.toutiao.com/search?keyword=莫雷加德尊称王楚钦为“老师”)
1. [台媒：解放军17艘船舰位台海周边活动](https://so.toutiao.com/search?keyword=台媒：解放军17艘船舰位台海周边活动)
1. [北京入境游一日游订单涨4倍](https://so.toutiao.com/search?keyword=北京入境游一日游订单涨4倍)
1. [巴西总统选举首轮投票无人胜出](https://so.toutiao.com/search?keyword=巴西总统选举首轮投票无人胜出)
1. [亚运国足门将笑称夺金：铜牌是玫瑰金](https://so.toutiao.com/search?keyword=亚运国足门将笑称夺金：铜牌是玫瑰金)
1. [姚迪携手朱婷收获意甲新赛季开门红](https://so.toutiao.com/search?keyword=姚迪携手朱婷收获意甲新赛季开门红)
1. [民进党用高压水炮对大陆渔船喷射90秒](https://so.toutiao.com/search?keyword=民进党用高压水炮对大陆渔船喷射90秒)
1. [中国健儿追梦之路永不停歇](https://so.toutiao.com/search?keyword=中国健儿追梦之路永不停歇)
1. [德总理会见乌总统警报爆炸声不断](https://so.toutiao.com/search?keyword=德总理会见乌总统警报爆炸声不断)
1. [美专家：欧洲对华贸易可走第三条道路](https://so.toutiao.com/search?keyword=美专家：欧洲对华贸易可走第三条道路)
1. [齐达内力挺C罗](https://so.toutiao.com/search?keyword=齐达内力挺C罗)
1. [“China Haul”为何兴起](https://so.toutiao.com/search?keyword=“China%20Haul”为何兴起)
1. [国庆出行购票藏骗局？警惕诈骗陷阱](https://so.toutiao.com/search?keyword=国庆出行购票藏骗局？警惕诈骗陷阱)
1. [国家队亚运会闭幕发文](https://so.toutiao.com/search?keyword=国家队亚运会闭幕发文)
1. [曝热苏斯希望化解和C罗的分歧](https://so.toutiao.com/search?keyword=曝热苏斯希望化解和C罗的分歧)
1. [国庆景区热度前10被小城包揽](https://so.toutiao.com/search?keyword=国庆景区热度前10被小城包揽)
1. [湘超永州主教练：永州队还没有结束](https://so.toutiao.com/search?keyword=湘超永州主教练：永州队还没有结束)
1. [多人练“闪身步”进医院](https://so.toutiao.com/search?keyword=多人练“闪身步”进医院)
1. [集成电路成中国第一大出口商品背后](https://so.toutiao.com/search?keyword=集成电路成中国第一大出口商品背后)
1. [苹果将为受影响用户免费更换新机](https://so.toutiao.com/search?keyword=苹果将为受影响用户免费更换新机)
1. [韩乔生谈王楚钦登海报：有啥争议的](https://so.toutiao.com/search?keyword=韩乔生谈王楚钦登海报：有啥争议的)
1. [飞行员霸气应对外机抵近：我就是界碑](https://so.toutiao.com/search?keyword=飞行员霸气应对外机抵近：我就是界碑)
1. [女装行业退货率是怎么被推上去的](https://so.toutiao.com/search?keyword=女装行业退货率是怎么被推上去的)
1. [名古屋亚组委主席就赛事运行问题致歉](https://so.toutiao.com/search?keyword=名古屋亚组委主席就赛事运行问题致歉)
1. [父母悄悄到执勤点看望武警战士](https://so.toutiao.com/search?keyword=父母悄悄到执勤点看望武警战士)
1. [余承东：华为已量产381款韬芯片](https://so.toutiao.com/search?keyword=余承东：华为已量产381款韬芯片)
1. [女子报冰岛外国团除了导游全是中国人](https://so.toutiao.com/search?keyword=女子报冰岛外国团除了导游全是中国人)
1. [湘籍运动员在名古屋打了一场硬仗](https://so.toutiao.com/search?keyword=湘籍运动员在名古屋打了一场硬仗)
1. [河南万岁山只见人不见“山”](https://so.toutiao.com/search?keyword=河南万岁山只见人不见“山”)
1. [换汤不换药的AI短剧还能“不烧心”吗](https://so.toutiao.com/search?keyword=换汤不换药的AI短剧还能“不烧心”吗)
1. [亚运会河南健儿斩获12金6银8铜](https://so.toutiao.com/search?keyword=亚运会河南健儿斩获12金6银8铜)
1. [运动前后拉伸为什么这么重要](https://so.toutiao.com/search?keyword=运动前后拉伸为什么这么重要)
1. [李沁赵今麦同框比心](https://so.toutiao.com/search?keyword=李沁赵今麦同框比心)
1. [日本民众举行集会抗议驻日美军暴行](https://so.toutiao.com/search?keyword=日本民众举行集会抗议驻日美军暴行)
1. [葡萄牙2-1逆转挪威提前进欧国联八强](https://so.toutiao.com/search?keyword=葡萄牙2-1逆转挪威提前进欧国联八强)
1. [日本亚运队门将：没想到会输](https://so.toutiao.com/search?keyword=日本亚运队门将：没想到会输)
1. [部分一线城市月供接近房租说明啥](https://so.toutiao.com/search?keyword=部分一线城市月供接近房租说明啥)
1. [默茨突访基辅打的什么算盘](https://so.toutiao.com/search?keyword=默茨突访基辅打的什么算盘)
1. [亚运会深圳健儿勇夺8金3银5铜](https://so.toutiao.com/search?keyword=亚运会深圳健儿勇夺8金3银5铜)
1. [平陆运河：跨越百年的“向海之梦”](https://so.toutiao.com/search?keyword=平陆运河：跨越百年的“向海之梦”)
1. [周深镜头签找不到镜头直接签空气](https://so.toutiao.com/search?keyword=周深镜头签找不到镜头直接签空气)
1. [早田希娜3-1长崎美柚](https://so.toutiao.com/search?keyword=早田希娜3-1长崎美柚)
1. [咖啡飘香 乡村古建游再提升](https://so.toutiao.com/search?keyword=咖啡飘香%20乡村古建游再提升)
1. [小孩哥在花坛发现2枚恐龙蛋化石](https://so.toutiao.com/search?keyword=小孩哥在花坛发现2枚恐龙蛋化石)
1. [人大一校友捐资5.03亿元](https://so.toutiao.com/search?keyword=人大一校友捐资5.03亿元)
1. [曝乌克兰两个旅临阵脱逃被阻止](https://so.toutiao.com/search?keyword=曝乌克兰两个旅临阵脱逃被阻止)
1. [游客凌晨2时排队胖东来收获免费早餐](https://so.toutiao.com/search?keyword=游客凌晨2时排队胖东来收获免费早餐)
1. [第20届亚运会闭幕](https://so.toutiao.com/search?keyword=第20届亚运会闭幕)
1. [高市早苗强烈要求美方配合调查](https://so.toutiao.com/search?keyword=高市早苗强烈要求美方配合调查)
1. [高速拥堵女子憋尿被紧急送进急诊](https://so.toutiao.com/search?keyword=高速拥堵女子憋尿被紧急送进急诊)
1. [普京谈苏联解体：盲信西方君子协定](https://so.toutiao.com/search?keyword=普京谈苏联解体：盲信西方君子协定)
1. [男足亚运摘铜登上《新闻联播》](https://so.toutiao.com/search?keyword=男足亚运摘铜登上《新闻联播》)
1. [吴宜泽深圳公开赛夺冠](https://so.toutiao.com/search?keyword=吴宜泽深圳公开赛夺冠)
1. [百慕大飞波士顿失联飞机残骸已找到](https://so.toutiao.com/search?keyword=百慕大飞波士顿失联飞机残骸已找到)
1. [张雪谈国足0比5不敌巴勒斯坦](https://so.toutiao.com/search?keyword=张雪谈国足0比5不敌巴勒斯坦)
1. [亚运会闭幕式不是句号是下一枪发令声](https://so.toutiao.com/search?keyword=亚运会闭幕式不是句号是下一枪发令声)
1. [湖北襄阳夜游太火了](https://so.toutiao.com/search?keyword=湖北襄阳夜游太火了)
1. [电车行业拐点在哪](https://so.toutiao.com/search?keyword=电车行业拐点在哪)
1. [台当局危险驱离大陆渔船致船只受损](https://so.toutiao.com/search?keyword=台当局危险驱离大陆渔船致船只受损)
1. [王曼昱回应15分钟速胜](https://so.toutiao.com/search?keyword=王曼昱回应15分钟速胜)
1. [怎么看俄军重型无人坦克演习中陷坑](https://so.toutiao.com/search?keyword=怎么看俄军重型无人坦克演习中陷坑)
1. [台学者：两岸应该坐下来谈](https://so.toutiao.com/search?keyword=台学者：两岸应该坐下来谈)
1. [闫妮回应“微醺”人设](https://so.toutiao.com/search?keyword=闫妮回应“微醺”人设)
1. [张家齐说想学着掌控和主导人生](https://so.toutiao.com/search?keyword=张家齐说想学着掌控和主导人生)
1. [王艺迪3-2险胜波尔卡诺娃](https://so.toutiao.com/search?keyword=王艺迪3-2险胜波尔卡诺娃)
1. [爬珠峰都堵？网传视频发布于几个月前](https://so.toutiao.com/search?keyword=爬珠峰都堵？网传视频发布于几个月前)
1. [黄渤为小德挑边](https://so.toutiao.com/search?keyword=黄渤为小德挑边)
1. [外媒：德国总理默茨突访基辅](https://so.toutiao.com/search?keyword=外媒：德国总理默茨突访基辅)
1. [“特朗普因素”如何介入巴西大选](https://so.toutiao.com/search?keyword=“特朗普因素”如何介入巴西大选)
1. [莱巴金娜宣布退出武网](https://so.toutiao.com/search?keyword=莱巴金娜宣布退出武网)
1. [美债5%高利率为何没砸动美股](https://so.toutiao.com/search?keyword=美债5%高利率为何没砸动美股)
1. [俄被曝谋划把基辅炸回“石器时代”](https://so.toutiao.com/search?keyword=俄被曝谋划把基辅炸回“石器时代”)
1. [高市政府任内首次对俄实施制裁](https://so.toutiao.com/search?keyword=高市政府任内首次对俄实施制裁)
1. [F·勒布伦晋级WTT中国大满贯32强](https://so.toutiao.com/search?keyword=F·勒布伦晋级WTT中国大满贯32强)
1. [乌克兰首都基辅响起强烈爆炸声](https://so.toutiao.com/search?keyword=乌克兰首都基辅响起强烈爆炸声)
1. [美军为何要组建“自主作战司令部”](https://so.toutiao.com/search?keyword=美军为何要组建“自主作战司令部”)
1. [韩国U23球员光速道歉](https://so.toutiao.com/search?keyword=韩国U23球员光速道歉)
1. [德约2-1逆转兹维列夫挺进四强](https://so.toutiao.com/search?keyword=德约2-1逆转兹维列夫挺进四强)
1. [泰山现火情多架直升机参与扑救](https://so.toutiao.com/search?keyword=泰山现火情多架直升机参与扑救)
1. [中国体育代表团蝉联金牌榜榜首](https://so.toutiao.com/search?keyword=中国体育代表团蝉联金牌榜榜首)
1. [中国代表团超2/3运动员首次征战亚运](https://so.toutiao.com/search?keyword=中国代表团超2/3运动员首次征战亚运)
1. [中国游客听到China一呼百应](https://so.toutiao.com/search?keyword=中国游客听到China一呼百应)
1. [日媒：志愿者成名古屋亚运会“门面”](https://so.toutiao.com/search?keyword=日媒：志愿者成名古屋亚运会“门面”)
1. [交警上高速指挥守护假期出行顺畅](https://so.toutiao.com/search?keyword=交警上高速指挥守护假期出行顺畅)
1. [国庆假期多地妆造旅拍服务爆火](https://so.toutiao.com/search?keyword=国庆假期多地妆造旅拍服务爆火)
1. [张本美和说通过休息调整状态](https://so.toutiao.com/search?keyword=张本美和说通过休息调整状态)
1. [美军启动新计划马斯克参与领导意味啥](https://so.toutiao.com/search?keyword=美军启动新计划马斯克参与领导意味啥)
1. [新华社出图回顾亚运会精彩瞬间](https://so.toutiao.com/search?keyword=新华社出图回顾亚运会精彩瞬间)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Mon Oct 05 2026 23:58:09 GMT+0800 (China Standard Time) -->

1. [李飞飞称十年后只剩两类劳动](https://www.zhihu.com/search?q=%E6%9D%8E%E9%A3%9E%E9%A3%9E%E7%A7%B0%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%AA%E5%89%A9%E4%B8%A4%E7%B1%BB%E5%8A%B3%E5%8A%A8)
1. [梅德韦杰夫击球伤观众被判负](https://www.zhihu.com/search?q=%E6%A2%85%E5%BE%B7%E9%9F%A6%E6%9D%B0%E5%A4%AB%E5%87%BB%E7%90%83%E4%BC%A4%E8%A7%82%E4%BC%97%E8%A2%AB%E5%88%A4%E8%B4%9F)
1. [中国航协评东航空姐下跪事件](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%8D%8F%E8%AF%84%E4%B8%9C%E8%88%AA%E7%A9%BA%E5%A7%90%E4%B8%8B%E8%B7%AA%E4%BA%8B%E4%BB%B6)
1. [超10万份孕妇血样被偷运出境](https://www.zhihu.com/search?q=%E8%B6%8510%E4%B8%87%E4%BB%BD%E5%AD%95%E5%A6%87%E8%A1%80%E6%A0%B7%E8%A2%AB%E5%81%B7%E8%BF%90%E5%87%BA%E5%A2%83)
1. [网红慧慧饱饱被封号](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E6%85%A7%E6%85%A7%E9%A5%B1%E9%A5%B1%E8%A2%AB%E5%B0%81%E5%8F%B7)
1. [张家齐妈妈看见张家齐就哭](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E7%9C%8B%E8%A7%81%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%B0%B1%E5%93%AD)
1. [韩国网友不满亚运夺金免兵役](https://www.zhihu.com/search?q=%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B8%8D%E6%BB%A1%E4%BA%9A%E8%BF%90%E5%A4%BA%E9%87%91%E5%85%8D%E5%85%B5%E5%BD%B9)
1. [巴勒斯坦球员向国足道歉](https://www.zhihu.com/search?q=%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E7%90%83%E5%91%98%E5%90%91%E5%9B%BD%E8%B6%B3%E9%81%93%E6%AD%89)
1. [德国教材：很多中国人没有汽车](https://www.zhihu.com/search?q=%E5%BE%B7%E5%9B%BD%E6%95%99%E6%9D%90%EF%BC%9A%E5%BE%88%E5%A4%9A%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B2%A1%E6%9C%89%E6%B1%BD%E8%BD%A6)
1. [国足0比5惨败却让小将接受采访](https://www.zhihu.com/search?q=%E5%9B%BD%E8%B6%B30%E6%AF%945%E6%83%A8%E8%B4%A5%E5%8D%B4%E8%AE%A9%E5%B0%8F%E5%B0%86%E6%8E%A5%E5%8F%97%E9%87%87%E8%AE%BF)
1. [张家齐 母女关系不可能修复了](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%20%E6%AF%8D%E5%A5%B3%E5%85%B3%E7%B3%BB%E4%B8%8D%E5%8F%AF%E8%83%BD%E4%BF%AE%E5%A4%8D%E4%BA%86)
1. [《生化危机：爆发夜》热映](https://www.zhihu.com/search?q=%E3%80%8A%E7%94%9F%E5%8C%96%E5%8D%B1%E6%9C%BA%EF%BC%9A%E7%88%86%E5%8F%91%E5%A4%9C%E3%80%8B%E7%83%AD%E6%98%A0)
1. [诺贝尔生理学或医学奖](https://www.zhihu.com/search?q=%E8%AF%BA%E8%B4%9D%E5%B0%94%E7%94%9F%E7%90%86%E5%AD%A6%E6%88%96%E5%8C%BB%E5%AD%A6%E5%A5%96)
1. [蔡康永现身台独分子竞选现场](https://www.zhihu.com/search?q=%E8%94%A1%E5%BA%B7%E6%B0%B8%E7%8E%B0%E8%BA%AB%E5%8F%B0%E7%8B%AC%E5%88%86%E5%AD%90%E7%AB%9E%E9%80%89%E7%8E%B0%E5%9C%BA)
1. [东航再通报空姐下跪事件](https://www.zhihu.com/search?q=%E4%B8%9C%E8%88%AA%E5%86%8D%E9%80%9A%E6%8A%A5%E7%A9%BA%E5%A7%90%E4%B8%8B%E8%B7%AA%E4%BA%8B%E4%BB%B6)
1. [网传俄实验室发生鼠疫泄漏](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E4%BF%84%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E7%94%9F%E9%BC%A0%E7%96%AB%E6%B3%84%E6%BC%8F)
1. [诺贝尔奖](https://www.zhihu.com/search?q=%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%A5%96)
1. [中国队 169 金 89 银 83 铜收官](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E9%98%9F%20169%20%E9%87%91%2089%20%E9%93%B6%2083%20%E9%93%9C%E6%94%B6%E5%AE%98)
1. [中国男足时隔 28 年再夺亚运铜牌](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E8%B6%B3%E6%97%B6%E9%9A%94%2028%20%E5%B9%B4%E5%86%8D%E5%A4%BA%E4%BA%9A%E8%BF%90%E9%93%9C%E7%89%8C)
1. [景区文创陷入「冤种三件套」](https://www.zhihu.com/search?q=%E6%99%AF%E5%8C%BA%E6%96%87%E5%88%9B%E9%99%B7%E5%85%A5%E3%80%8C%E5%86%A4%E7%A7%8D%E4%B8%89%E4%BB%B6%E5%A5%97%E3%80%8D)
1. [蔡天凤碎尸案开审](https://www.zhihu.com/search?q=%E8%94%A1%E5%A4%A9%E5%87%A4%E7%A2%8E%E5%B0%B8%E6%A1%88%E5%BC%80%E5%AE%A1)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Oct 06 2026 00:03:19 GMT+0800 (China Standard Time) -->

1. [华为与高通宣布达成广泛专利许可协议，意味着什么？释放了哪些信号？](https://www.zhihu.com/question/2090468722427291000)
1. [2026 年巴西总统选举首轮投票无人胜出，将进行第二轮角逐，目前的形势如何？](https://www.zhihu.com/question/2090289046253840000)
1. [国安部通报境外组织借医疗检测非法采血样，曾有超10万份孕妇血样被偷运出境，会对生物安全产生哪些影响？](https://www.zhihu.com/question/2090049001483661800)
1. [如何评价 5 万人口的祁连县国庆迎 10 万游客，酒店民宿全满房，文旅局免费安置游客到学生宿舍？](https://www.zhihu.com/question/2090194037965677800)
1. [为何日本的铁轨坚持不和世界统一？一直用窄轨，有什么好处？](https://www.zhihu.com/question/10602213310)
1. [耐克股价年内跌幅近 50%且计划裁员重组，其市场表现缘何急转直下？](https://www.zhihu.com/question/2089754786040174000)
1. [在大银幕看《生化危机：爆发夜》感受如何？](https://www.zhihu.com/question/2090091281296749300)
1. [明军有大炮，后金没有，为什么萨尔浒之战明军还输了？](https://www.zhihu.com/question/264331800)
1. [医生辟谣「高铁座椅或为HPV感染重灾区」，这个说法怎么来的？坐高铁有必要使用一次性座套吗？](https://www.zhihu.com/question/2090394927318267000)
1. [水刚咽下去，口渴怎么就缓解了？身体从哪里知道我喝水了？](https://www.zhihu.com/question/2085687195193587700)
1. [怎么评价《蜗居》里小贝不肯借6万全部存款给海萍买房的行为？](https://www.zhihu.com/question/432093354)
1. [读书必须先读前面又臭又长序言吗？](https://www.zhihu.com/question/668141070)
1. [一个直径十厘米的圆里可以不重叠地排列多少个边长一厘米的正方形？](https://www.zhihu.com/question/450006212)
1. [如何看待「绿灯军团」播出后引发的粉丝认为其不还原漫画的争议？如何看待漫改影视在还原原作方面的问题？](https://www.zhihu.com/question/2087854004218885400)
1. [2026 国庆档首日票房 1.8 亿，《神探之痕迹》7100 万领跑，如何评价这一成绩？](https://www.zhihu.com/question/2089144269315339500)
1. [如何看待中国航协针对「东航空姐下跪」事件发声，呼吁广大旅客文明乘机、理性维权？](https://www.zhihu.com/question/2090527958293111000)
1. [旅途中，有哪些遗憾让你至今难以释怀？](https://www.zhihu.com/question/21038225)
1. [各位厨神，豆腐有哪些简单易学的做法吗？](https://www.zhihu.com/question/667846701)
1. [如何评价《水浒传》里的方腊？](https://www.zhihu.com/question/345427068)
1. [你对于 2026 年诺贝尔物理学奖的预测是什么？](https://www.zhihu.com/question/2081708619905745200)
1. [为什么现在老外纷纷开始给游戏加中文并且设立国区最低价？](https://www.zhihu.com/question/2088409158198546700)
1. [女网红参加柏林马拉松比赛，却通过骑自行车作弊，后因被当地人拍照揭发而道歉，如何看待这一现象？](https://www.zhihu.com/question/2089678812749608000)
1. [武侠游戏里“朝廷”永远不参与江湖纷争，是为了省工作量，还是因为一旦入场整个游戏逻辑就会崩塌？](https://www.zhihu.com/question/2077550471271691800)
1. [为什么感觉在店里喝到的茶叶，总比自己泡的好喝呢？](https://www.zhihu.com/question/4819435077)
1. [第一性原理的原理是啥？](https://www.zhihu.com/question/2086382611375591400)
1. [30岁女子靠AI婚庆培训年入200万，10万元内的方案仅需十几分钟生成，实际含金量如何？](https://www.zhihu.com/question/2090007164509054000)
1. [到底什么叫情绪价值？](https://www.zhihu.com/question/2074835665519372300)
1. [如何评价亚运国足主帅称这代球员有望进世界杯？你觉着可能吗？](https://www.zhihu.com/question/2090368844128850200)
1. [如何评价代露娃发烧向母亲求助却被反问「别人能行你咋不行」？暴露了这段母女关系中哪些问题？](https://www.zhihu.com/question/2090180455899165200)
1. [急停开关加罩子合理吗？](https://www.zhihu.com/question/2072365868428875000)

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
<!-- 最后更新时间 Tue Oct 06 2026 00:10:43 GMT+0800 (China Standard Time) -->

1. [感悟总书记的家国情深](https://s.weibo.com//weibo?q=%23%E6%84%9F%E6%82%9F%E6%80%BB%E4%B9%A6%E8%AE%B0%E7%9A%84%E5%AE%B6%E5%9B%BD%E6%83%85%E6%B7%B1%23&Refer=new_time)
1. [孙颖莎开始整顿乒乓球观赛礼仪](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%BC%80%E5%A7%8B%E6%95%B4%E9%A1%BF%E4%B9%92%E4%B9%93%E7%90%83%E8%A7%82%E8%B5%9B%E7%A4%BC%E4%BB%AA%23&t=31&band_rank=1&Refer=top)
1. [未来几年能留住现金流最重要](https://s.weibo.com//weibo?q=%E6%9C%AA%E6%9D%A5%E5%87%A0%E5%B9%B4%E8%83%BD%E7%95%99%E4%BD%8F%E7%8E%B0%E9%87%91%E6%B5%81%E6%9C%80%E9%87%8D%E8%A6%81&t=31&band_rank=2&Refer=top)
1. [中国空心光纤网速更快了](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A9%BA%E5%BF%83%E5%85%89%E7%BA%A4%E7%BD%91%E9%80%9F%E6%9B%B4%E5%BF%AB%E4%BA%86%23&t=31&band_rank=3&Refer=top)
1. [谭松韵面相都变了](https://s.weibo.com//weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23&t=31&band_rank=4&Refer=top)
1. [曝腾讯退了几部大剧](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%85%BE%E8%AE%AF%E9%80%80%E4%BA%86%E5%87%A0%E9%83%A8%E5%A4%A7%E5%89%A7%23&t=31&band_rank=5&Refer=top)
1. [梅德韦杰夫伤到观众被判负](https://s.weibo.com//weibo?q=%23%E6%A2%85%E5%BE%B7%E9%9F%A6%E6%9D%B0%E5%A4%AB%E4%BC%A4%E5%88%B0%E8%A7%82%E4%BC%97%E8%A2%AB%E5%88%A4%E8%B4%9F%23&t=31&band_rank=6&Refer=top)
1. [高芙为孙心然鼓掌](https://s.weibo.com//weibo?q=%23%E9%AB%98%E8%8A%99%E4%B8%BA%E5%AD%99%E5%BF%83%E7%84%B6%E9%BC%93%E6%8E%8C%23&t=31&band_rank=7&Refer=top)
1. [张居正 胡歌](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%B1%85%E6%AD%A3%20%E8%83%A1%E6%AD%8C&t=31&band_rank=8&Refer=top)
1. [住酒店真的会感染HPV吗](https://s.weibo.com//weibo?q=%E4%BD%8F%E9%85%92%E5%BA%97%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%84%9F%E6%9F%93HPV%E5%90%97&t=31&band_rank=9&Refer=top)
1. [缅北电诈园区枪决底层人员](https://s.weibo.com//weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%9E%AA%E5%86%B3%E5%BA%95%E5%B1%82%E4%BA%BA%E5%91%98%23&t=31&band_rank=10&Refer=top)
1. [刘亦菲 掉代言](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%8E%89%E4%BB%A3%E8%A8%80&t=31&band_rank=11&Refer=top)
1. [代露娃持续掉粉](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23&t=31&band_rank=12&Refer=top)
1. [李勒优回应](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%9B%9E%E5%BA%94%23&t=31&band_rank=13&Refer=top)
1. [建议大家买房一定要远离公园](https://s.weibo.com//weibo?q=%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E6%88%BF%E4%B8%80%E5%AE%9A%E8%A6%81%E8%BF%9C%E7%A6%BB%E5%85%AC%E5%9B%AD&t=31&band_rank=14&Refer=top)
1. [肖战全世界正数第一严谨之人](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%85%A8%E4%B8%96%E7%95%8C%E6%AD%A3%E6%95%B0%E7%AC%AC%E4%B8%80%E4%B8%A5%E8%B0%A8%E4%B9%8B%E4%BA%BA%23&t=31&band_rank=15&Refer=top)
1. [三千的工资愣是存了80万](https://s.weibo.com//weibo?q=%23%E4%B8%89%E5%8D%83%E7%9A%84%E5%B7%A5%E8%B5%84%E6%84%A3%E6%98%AF%E5%AD%98%E4%BA%8680%E4%B8%87%23&t=31&band_rank=16&Refer=top)
1. [刘亦菲一下子掉了四个代言](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B8%80%E4%B8%8B%E5%AD%90%E6%8E%89%E4%BA%86%E5%9B%9B%E4%B8%AA%E4%BB%A3%E8%A8%80%23&t=31&band_rank=17&Refer=top)
1. [代露娃不被同情的原因](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E4%B8%8D%E8%A2%AB%E5%90%8C%E6%83%85%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=18&Refer=top)
1. [刘学义没对谭松韵用绅士手](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%B2%A1%E5%AF%B9%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%94%A8%E7%BB%85%E5%A3%AB%E6%89%8B%23&t=31&band_rank=19&Refer=top)
1. [孙心然vs高芙](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%BF%83%E7%84%B6vs%E9%AB%98%E8%8A%99%23&t=31&band_rank=20&Refer=top)
1. [游客免费住宿舍学生同意了吗](https://s.weibo.com//weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%85%8D%E8%B4%B9%E4%BD%8F%E5%AE%BF%E8%88%8D%E5%AD%A6%E7%94%9F%E5%90%8C%E6%84%8F%E4%BA%86%E5%90%97%23&t=31&band_rank=21&Refer=top)
1. [梅德韦杰夫处罚](https://s.weibo.com//weibo?q=%23%E6%A2%85%E5%BE%B7%E9%9F%A6%E6%9D%B0%E5%A4%AB%E5%A4%84%E7%BD%9A%23&t=31&band_rank=22&Refer=top)
1. [中国警方缅北战火下挖出同胞遗体](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AD%A6%E6%96%B9%E7%BC%85%E5%8C%97%E6%88%98%E7%81%AB%E4%B8%8B%E6%8C%96%E5%87%BA%E5%90%8C%E8%83%9E%E9%81%97%E4%BD%93%23&t=31&band_rank=23&Refer=top)
1. [孙心然被破发后落泪](https://s.weibo.com//weibo?q=%E5%AD%99%E5%BF%83%E7%84%B6%E8%A2%AB%E7%A0%B4%E5%8F%91%E5%90%8E%E8%90%BD%E6%B3%AA&t=31&band_rank=24&Refer=top)
1. [时代峰峻疑似首尔分公司](https://s.weibo.com//weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%96%91%E4%BC%BC%E9%A6%96%E5%B0%94%E5%88%86%E5%85%AC%E5%8F%B8%23&t=31&band_rank=25&Refer=top)
1. [梅德韦杰夫 情绪化击球](https://s.weibo.com//weibo?q=%E6%A2%85%E5%BE%B7%E9%9F%A6%E6%9D%B0%E5%A4%AB%20%E6%83%85%E7%BB%AA%E5%8C%96%E5%87%BB%E7%90%83&t=31&band_rank=26&Refer=top)
1. [黄金睡眠时长出炉](https://s.weibo.com//weibo?q=%23%E9%BB%84%E9%87%91%E7%9D%A1%E7%9C%A0%E6%97%B6%E9%95%BF%E5%87%BA%E7%82%89%23&t=31&band_rank=27&Refer=top)
1. [重庆摩托落地签被约谈后居民发声](https://s.weibo.com//weibo?q=%23%E9%87%8D%E5%BA%86%E6%91%A9%E6%89%98%E8%90%BD%E5%9C%B0%E7%AD%BE%E8%A2%AB%E7%BA%A6%E8%B0%88%E5%90%8E%E5%B1%85%E6%B0%91%E5%8F%91%E5%A3%B0%23&t=31&band_rank=28&Refer=top)
1. [华为高通 芯片](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E9%AB%98%E9%80%9A%20%E8%8A%AF%E7%89%87&t=31&band_rank=29&Refer=top)
1. [陪兰香走到最后的人](https://s.weibo.com//weibo?q=%23%E9%99%AA%E5%85%B0%E9%A6%99%E8%B5%B0%E5%88%B0%E6%9C%80%E5%90%8E%E7%9A%84%E4%BA%BA%23&t=31&band_rank=30&Refer=top)
1. [男子嫌九十九元盲盒便宜](https://s.weibo.com//weibo?q=%E7%94%B7%E5%AD%90%E5%AB%8C%E4%B9%9D%E5%8D%81%E4%B9%9D%E5%85%83%E7%9B%B2%E7%9B%92%E4%BE%BF%E5%AE%9C&t=31&band_rank=31&Refer=top)
1. [国庆第一批一起旅游的人已经闹掰](https://s.weibo.com//weibo?q=%E5%9B%BD%E5%BA%86%E7%AC%AC%E4%B8%80%E6%89%B9%E4%B8%80%E8%B5%B7%E6%97%85%E6%B8%B8%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E9%97%B9%E6%8E%B0&t=31&band_rank=32&Refer=top)
1. [邓紫棋单巡刷新吉尼斯纪录](https://s.weibo.com//weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%8D%95%E5%B7%A1%E5%88%B7%E6%96%B0%E5%90%89%E5%B0%BC%E6%96%AF%E7%BA%AA%E5%BD%95%23&t=31&band_rank=33&Refer=top)
1. [李一桐自曝被骗金额达六七位数](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E8%87%AA%E6%9B%9D%E8%A2%AB%E9%AA%97%E9%87%91%E9%A2%9D%E8%BE%BE%E5%85%AD%E4%B8%83%E4%BD%8D%E6%95%B0%23&t=31&band_rank=34&Refer=top)
1. [蔡天凤尸检结果出炉](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E5%B0%B8%E6%A3%80%E7%BB%93%E6%9E%9C%E5%87%BA%E7%82%89%23&t=31&band_rank=35&Refer=top)
1. [男子信中奖9000万失联3月在放羊](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E4%BF%A1%E4%B8%AD%E5%A5%969000%E4%B8%87%E5%A4%B1%E8%81%943%E6%9C%88%E5%9C%A8%E6%94%BE%E7%BE%8A%23&t=31&band_rank=36&Refer=top)
1. [孙颖莎重返世排第一后首胜](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%87%8D%E8%BF%94%E4%B8%96%E6%8E%92%E7%AC%AC%E4%B8%80%E5%90%8E%E9%A6%96%E8%83%9C%23&t=31&band_rank=37&Refer=top)
1. [金喜善16岁就美成这样](https://s.weibo.com//weibo?q=%E9%87%91%E5%96%9C%E5%96%8416%E5%B2%81%E5%B0%B1%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7&t=31&band_rank=38&Refer=top)
1. [结婚9年喜字还没掉](https://s.weibo.com//weibo?q=%E7%BB%93%E5%A9%9A9%E5%B9%B4%E5%96%9C%E5%AD%97%E8%BF%98%E6%B2%A1%E6%8E%89&t=31&band_rank=39&Refer=top)
1. [王一博 熟男](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E7%86%9F%E7%94%B7&t=31&band_rank=40&Refer=top)
1. [千万别把爸妈没见过的食物放冰箱](https://s.weibo.com//weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E6%8A%8A%E7%88%B8%E5%A6%88%E6%B2%A1%E8%A7%81%E8%BF%87%E7%9A%84%E9%A3%9F%E7%89%A9%E6%94%BE%E5%86%B0%E7%AE%B1%23&t=31&band_rank=41&Refer=top)
1. [中网](https://s.weibo.com//weibo?q=%E4%B8%AD%E7%BD%91&t=31&band_rank=42&Refer=top)
1. [游客住学生宿舍 慷他人之慨](https://s.weibo.com//weibo?q=%E6%B8%B8%E5%AE%A2%E4%BD%8F%E5%AD%A6%E7%94%9F%E5%AE%BF%E8%88%8D%20%E6%85%B7%E4%BB%96%E4%BA%BA%E4%B9%8B%E6%85%A8&t=31&band_rank=43&Refer=top)
1. [4岁女孩黑眼圈母亲没重视确诊瘤王](https://s.weibo.com//weibo?q=%234%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%BB%91%E7%9C%BC%E5%9C%88%E6%AF%8D%E4%BA%B2%E6%B2%A1%E9%87%8D%E8%A7%86%E7%A1%AE%E8%AF%8A%E7%98%A4%E7%8E%8B%23&t=31&band_rank=44&Refer=top)
1. [邓紫棋直播](https://s.weibo.com//weibo?q=%E9%82%93%E7%B4%AB%E6%A3%8B%E7%9B%B4%E6%92%AD&t=31&band_rank=45&Refer=top)
1. [白鹿彭冠英常华森杀青合照](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BD%AD%E5%86%A0%E8%8B%B1%E5%B8%B8%E5%8D%8E%E6%A3%AE%E6%9D%80%E9%9D%92%E5%90%88%E7%85%A7%23&t=31&band_rank=46&Refer=top)
1. [现在不流行离婚流行熬婚](https://s.weibo.com//weibo?q=%E7%8E%B0%E5%9C%A8%E4%B8%8D%E6%B5%81%E8%A1%8C%E7%A6%BB%E5%A9%9A%E6%B5%81%E8%A1%8C%E7%86%AC%E5%A9%9A&t=31&band_rank=47&Refer=top)
1. [陈梦观赛中国大满贯](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%A2%A6%E8%A7%82%E8%B5%9B%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%23&t=31&band_rank=48&Refer=top)
1. [纽约时报披露赵长鹏细节](https://s.weibo.com//weibo?q=%E7%BA%BD%E7%BA%A6%E6%97%B6%E6%8A%A5%E6%8A%AB%E9%9C%B2%E8%B5%B5%E9%95%BF%E9%B9%8F%E7%BB%86%E8%8A%82&t=31&band_rank=49&Refer=top)
1. [李勒优 崔晋](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%8B%92%E4%BC%98%20%E5%B4%94%E6%99%8B&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
