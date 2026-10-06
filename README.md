# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-07 01:13:24

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
<!-- 最后更新时间 Tue Oct 06 2026 18:45:09 GMT+0800 (China Standard Time) -->

1. [中国民警：要让缅北电诈血债血还](https://so.toutiao.com/search?keyword=中国民警：要让缅北电诈血债血还)
1. [匿名人大校友豪捐5.03亿 段永平回应](https://so.toutiao.com/search?keyword=匿名人大校友豪捐5.03亿%20段永平回应)
1. [升级交通服务 强化返程保障](https://so.toutiao.com/search?keyword=升级交通服务%20强化返程保障)
1. [白应苍临刑前称随口1个资金盘就20亿](https://so.toutiao.com/search?keyword=白应苍临刑前称随口1个资金盘就20亿)
1. [麦加协议正式启动对战局有何影响](https://so.toutiao.com/search?keyword=麦加协议正式启动对战局有何影响)
1. [睡眠开始出现这种问题说明你可能老了](https://so.toutiao.com/search?keyword=睡眠开始出现这种问题说明你可能老了)
1. [缅北明家犯罪证据宣读了两个半小时](https://so.toutiao.com/search?keyword=缅北明家犯罪证据宣读了两个半小时)
1. [乌军一夜650架无人机袭莫斯科地区](https://so.toutiao.com/search?keyword=乌军一夜650架无人机袭莫斯科地区)
1. [第一批返程的“大聪明”又失算了](https://so.toutiao.com/search?keyword=第一批返程的“大聪明”又失算了)
1. [明学昌畏罪自杀身亡照片曝光](https://so.toutiao.com/search?keyword=明学昌畏罪自杀身亡照片曝光)
1. [曝邓紫棋已低调完婚](https://so.toutiao.com/search?keyword=曝邓紫棋已低调完婚)
1. [稻城亚丁景区封闭？假的](https://so.toutiao.com/search?keyword=稻城亚丁景区封闭？假的)
1. [缅北电诈武装用AK47扫射逃跑人员](https://so.toutiao.com/search?keyword=缅北电诈武装用AK47扫射逃跑人员)
1. [如何评价《兰香如故》大结局](https://so.toutiao.com/search?keyword=如何评价《兰香如故》大结局)
1. [余承东详解华为手机“拼好网”](https://so.toutiao.com/search?keyword=余承东详解华为手机“拼好网”)
1. [有10万民警赴中缅边境打击涉我犯罪](https://so.toutiao.com/search?keyword=有10万民警赴中缅边境打击涉我犯罪)
1. [金价大跌后国庆上海金店排长队](https://so.toutiao.com/search?keyword=金价大跌后国庆上海金店排长队)
1. [今日全国高速有44个路段易发拥堵](https://so.toutiao.com/search?keyword=今日全国高速有44个路段易发拥堵)
1. [缅北电诈主犯随机杀人祭天](https://so.toutiao.com/search?keyword=缅北电诈主犯随机杀人祭天)
1. [男子捡银行卡后扮女子盗取40余万](https://so.toutiao.com/search?keyword=男子捡银行卡后扮女子盗取40余万)
1. [邓紫棋深圳演唱会刷新一项世界纪录](https://so.toutiao.com/search?keyword=邓紫棋深圳演唱会刷新一项世界纪录)
1. [明珍珍临刑前画面曝光](https://so.toutiao.com/search?keyword=明珍珍临刑前画面曝光)
1. [德国总理：德将加强北约东翼防务](https://so.toutiao.com/search?keyword=德国总理：德将加强北约东翼防务)
1. [越南第3季度GDP增长9.95%意味着什么](https://so.toutiao.com/search?keyword=越南第3季度GDP增长9.95%意味着什么)
1. [明家把中国人称为“行走的人民币”](https://so.toutiao.com/search?keyword=明家把中国人称为“行走的人民币”)
1. [冲绳知事递抗议书 美军司令低头接过](https://so.toutiao.com/search?keyword=冲绳知事递抗议书%20美军司令低头接过)
1. [辽宁省委书记为东北超冠军颁奖](https://so.toutiao.com/search?keyword=辽宁省委书记为东北超冠军颁奖)
1. [白应苍临刑前说中国动真格了](https://so.toutiao.com/search?keyword=白应苍临刑前说中国动真格了)
1. [评论员：也门全境饥荒几乎不可避免](https://so.toutiao.com/search?keyword=评论员：也门全境饥荒几乎不可避免)
1. [女子5天爬完五岳日行两三万步](https://so.toutiao.com/search?keyword=女子5天爬完五岳日行两三万步)
1. [缅北魏家接班人自曝布局军政两界](https://so.toutiao.com/search?keyword=缅北魏家接班人自曝布局军政两界)
1. [俄军打击乌主要城市数据中心](https://so.toutiao.com/search?keyword=俄军打击乌主要城市数据中心)
1. [郑钦文唱神兵小将主题曲 王心凌回应](https://so.toutiao.com/search?keyword=郑钦文唱神兵小将主题曲%20王心凌回应)
1. [缅北电诈被害人死前录音曝光](https://so.toutiao.com/search?keyword=缅北电诈被害人死前录音曝光)
1. [马斯克身家为何能再破万亿美元](https://so.toutiao.com/search?keyword=马斯克身家为何能再破万亿美元)
1. [韩国瑜蒋万安等将出席万人造势活动](https://so.toutiao.com/search?keyword=韩国瑜蒋万安等将出席万人造势活动)
1. [假期临近尾声全国陆续迎返程客流](https://so.toutiao.com/search?keyword=假期临近尾声全国陆续迎返程客流)
1. [8岁男童确诊尿毒症 每天喝奶茶饮料](https://so.toutiao.com/search?keyword=8岁男童确诊尿毒症%20每天喝奶茶饮料)
1. [默茨访乌撒钱德国选民买账吗](https://so.toutiao.com/search?keyword=默茨访乌撒钱德国选民买账吗)
1. [赖岳谦：我是中国人认同感在台上升](https://so.toutiao.com/search?keyword=赖岳谦：我是中国人认同感在台上升)
1. [国庆前五天平均每天有3亿人次出行](https://so.toutiao.com/search?keyword=国庆前五天平均每天有3亿人次出行)
1. [上海“卷卷警官”回应网友：我不是网红](https://so.toutiao.com/search?keyword=上海“卷卷警官”回应网友：我不是网红)
1. [诺奖得主有一个和鲁迅相反特征](https://so.toutiao.com/search?keyword=诺奖得主有一个和鲁迅相反特征)
1. [极简婚礼派对婚礼成年轻人新风尚](https://so.toutiao.com/search?keyword=极简婚礼派对婚礼成年轻人新风尚)
1. [高速服务区迎来返程充电大军](https://so.toutiao.com/search?keyword=高速服务区迎来返程充电大军)
1. [蒋万安下属分析柯志恩造势场](https://so.toutiao.com/search?keyword=蒋万安下属分析柯志恩造势场)
1. [特朗普将AI改名SI背后有何意图](https://so.toutiao.com/search?keyword=特朗普将AI改名SI背后有何意图)
1. [王心凌演唱会喊话粉丝没报批不能上来](https://so.toutiao.com/search?keyword=王心凌演唱会喊话粉丝没报批不能上来)
1. [民警回忆带回缅北四大家族头目落泪](https://so.toutiao.com/search?keyword=民警回忆带回缅北四大家族头目落泪)
1. [也门政府军西海岸“大反攻”成功了吗](https://so.toutiao.com/search?keyword=也门政府军西海岸“大反攻”成功了吗)
1. [中国足球小将两天两冠](https://so.toutiao.com/search?keyword=中国足球小将两天两冠)
1. [一批大国重器与重点工程迎来新突破](https://so.toutiao.com/search?keyword=一批大国重器与重点工程迎来新突破)
1. [媒体：孙颖莎学会耐心与伤病共处](https://so.toutiao.com/search?keyword=媒体：孙颖莎学会耐心与伤病共处)
1. [胡塞武装的神秘领导人是谁](https://so.toutiao.com/search?keyword=胡塞武装的神秘领导人是谁)
1. [中方曾三次约见缅北四大家族代表](https://so.toutiao.com/search?keyword=中方曾三次约见缅北四大家族代表)
1. [两岸同胞共议统一才是台湾前途](https://so.toutiao.com/search?keyword=两岸同胞共议统一才是台湾前途)
1. [章若楠蒋欣叶一茜都在追《兰香如故》](https://so.toutiao.com/search?keyword=章若楠蒋欣叶一茜都在追《兰香如故》)
1. [被小猫蹭蹭的天安门哨兵找到了](https://so.toutiao.com/search?keyword=被小猫蹭蹭的天安门哨兵找到了)
1. [陈梦现身WTT中国大满贯观看比赛](https://so.toutiao.com/search?keyword=陈梦现身WTT中国大满贯观看比赛)
1. [乌克兰：俄一半以上的炼油产能瘫痪](https://so.toutiao.com/search?keyword=乌克兰：俄一半以上的炼油产能瘫痪)
1. [外国年轻人流行“货拉拉式”赴华旅游](https://so.toutiao.com/search?keyword=外国年轻人流行“货拉拉式”赴华旅游)
1. [被执行死刑的巫鸿明、白应苍出镜](https://so.toutiao.com/search?keyword=被执行死刑的巫鸿明、白应苍出镜)
1. [国庆假期高速收费站区域事故多发](https://so.toutiao.com/search?keyword=国庆假期高速收费站区域事故多发)
1. [中方10分钟收网缅北四大家族重要成员](https://so.toutiao.com/search?keyword=中方10分钟收网缅北四大家族重要成员)
1. [英航一客机7分钟急坠8230米](https://so.toutiao.com/search?keyword=英航一客机7分钟急坠8230米)
1. [缅北电诈回流人员自述被割肾经历](https://so.toutiao.com/search?keyword=缅北电诈回流人员自述被割肾经历)
1. [中国芯片撞上了新的“隐形墙”吗](https://so.toutiao.com/search?keyword=中国芯片撞上了新的“隐形墙”吗)
1. [也门政府宣布夺回战略要地](https://so.toutiao.com/search?keyword=也门政府宣布夺回战略要地)
1. [冲绳知事谈驻日美军杀人案多次发笑](https://so.toutiao.com/search?keyword=冲绳知事谈驻日美军杀人案多次发笑)
1. [联合国呼吁也门冲突各方保持克制](https://so.toutiao.com/search?keyword=联合国呼吁也门冲突各方保持克制)
1. [缅北电诈头目家中钱多到发霉](https://so.toutiao.com/search?keyword=缅北电诈头目家中钱多到发霉)
1. [国足主帅：会给全国球迷一个完美答案](https://so.toutiao.com/search?keyword=国足主帅：会给全国球迷一个完美答案)
1. [中国代表点名警告英澳日等国](https://so.toutiao.com/search?keyword=中国代表点名警告英澳日等国)
1. [老外动作过于热情女特警礼貌拒绝](https://so.toutiao.com/search?keyword=老外动作过于热情女特警礼貌拒绝)
1. [曝李梦有个女儿](https://so.toutiao.com/search?keyword=曝李梦有个女儿)
1. [中国AI芯片市场份额洗牌背后](https://so.toutiao.com/search?keyword=中国AI芯片市场份额洗牌背后)
1. [央视公开佤邦副总司令落网画面](https://so.toutiao.com/search?keyword=央视公开佤邦副总司令落网画面)
1. [默茨遭讽是“乌克兰总理”](https://so.toutiao.com/search?keyword=默茨遭讽是“乌克兰总理”)
1. [张哲华《余红旧事》颠覆喜剧人形象](https://so.toutiao.com/search?keyword=张哲华《余红旧事》颠覆喜剧人形象)
1. [梁靖崑晋级WTT中国大满贯男单32强](https://so.toutiao.com/search?keyword=梁靖崑晋级WTT中国大满贯男单32强)
1. [特朗普政府为何要放宽红色柴油限制](https://so.toutiao.com/search?keyword=特朗普政府为何要放宽红色柴油限制)
1. [鲍军峰被抓画面曝光](https://so.toutiao.com/search?keyword=鲍军峰被抓画面曝光)
1. [SUV突然变道 小车为避让失控撞向护栏](https://so.toutiao.com/search?keyword=SUV突然变道%20小车为避让失控撞向护栏)
1. [替补连入4球翻盘 法国4-1逆转比利时](https://so.toutiao.com/search?keyword=替补连入4球翻盘%20法国4-1逆转比利时)
1. [中国军团亚运大捷成色几何](https://so.toutiao.com/search?keyword=中国军团亚运大捷成色几何)
1. [吉利和蔚来联手谁最受益](https://so.toutiao.com/search?keyword=吉利和蔚来联手谁最受益)
1. [假期过半，在照片中看见活力中国](https://so.toutiao.com/search?keyword=假期过半，在照片中看见活力中国)
1. [年轻人开始不买景区冤种三件套了](https://so.toutiao.com/search?keyword=年轻人开始不买景区冤种三件套了)
1. [大兴安岭的秋看一眼就醉了](https://so.toutiao.com/search?keyword=大兴安岭的秋看一眼就醉了)
1. [医生辟谣高铁座椅或为HPV感染重灾区](https://so.toutiao.com/search?keyword=医生辟谣高铁座椅或为HPV感染重灾区)
1. [超10万份孕妇血样被偷运出境](https://so.toutiao.com/search?keyword=超10万份孕妇血样被偷运出境)
1. [巨型“充电宝”驶进多地服务区](https://so.toutiao.com/search?keyword=巨型“充电宝”驶进多地服务区)
1. [专家揭秘心血管“隐形杀手”](https://so.toutiao.com/search?keyword=专家揭秘心血管“隐形杀手”)
1. [郑合惠子：不强行共情杜翠雀的恶](https://so.toutiao.com/search?keyword=郑合惠子：不强行共情杜翠雀的恶)
1. [诺奖得主研究如何“为大脑装开关”](https://so.toutiao.com/search?keyword=诺奖得主研究如何“为大脑装开关”)
1. [王冰冰现场观看郑钦文比赛](https://so.toutiao.com/search?keyword=王冰冰现场观看郑钦文比赛)
1. [亚运国足主帅称这代球员有望进世界杯](https://so.toutiao.com/search?keyword=亚运国足主帅称这代球员有望进世界杯)
1. [孙颖莎重返世排第一后迎首胜](https://so.toutiao.com/search?keyword=孙颖莎重返世排第一后迎首胜)
1. [中国航协：乘务员人格尊严不容践踏](https://so.toutiao.com/search?keyword=中国航协：乘务员人格尊严不容践踏)
1. [全国游客在武汉玩嗨了](https://so.toutiao.com/search?keyword=全国游客在武汉玩嗨了)
1. [日本对美国抗议有用吗](https://so.toutiao.com/search?keyword=日本对美国抗议有用吗)
1. [俄方称德总理访乌是“血腥公关”](https://so.toutiao.com/search?keyword=俄方称德总理访乌是“血腥公关”)
1. [长春队夺首届“东北超”冠军](https://so.toutiao.com/search?keyword=长春队夺首届“东北超”冠军)
1. [边境民警谈“望缅止步”过往眼含热泪](https://so.toutiao.com/search?keyword=边境民警谈“望缅止步”过往眼含热泪)
1. [美日导弹将部署与那国岛距台110公里](https://so.toutiao.com/search?keyword=美日导弹将部署与那国岛距台110公里)
1. [动作演员何麦离世](https://so.toutiao.com/search?keyword=动作演员何麦离世)
1. [民警冒果敢战事风险带回三具遗体](https://so.toutiao.com/search?keyword=民警冒果敢战事风险带回三具遗体)
1. [《变形计》李勒优回应与“晋妈”关系](https://so.toutiao.com/search?keyword=《变形计》李勒优回应与“晋妈”关系)
1. [国庆长假把时间留给家人](https://so.toutiao.com/search?keyword=国庆长假把时间留给家人)
1. [央视曝光缅北明家电诈人员“处决地”](https://so.toutiao.com/search?keyword=央视曝光缅北明家电诈人员“处决地”)
1. [德国援乌还能持续多久](https://so.toutiao.com/search?keyword=德国援乌还能持续多久)
1. [国庆节中国人海外存在感“拉满”](https://so.toutiao.com/search?keyword=国庆节中国人海外存在感“拉满”)
1. [游客到内蒙古游玩第一件事给车加满油](https://so.toutiao.com/search?keyword=游客到内蒙古游玩第一件事给车加满油)
1. [学者：高市对美四条要求都落不了地](https://so.toutiao.com/search?keyword=学者：高市对美四条要求都落不了地)
1. [泽连斯基称仍希望获得金牛座导弹](https://so.toutiao.com/search?keyword=泽连斯基称仍希望获得金牛座导弹)
1. [博主：出门旅游别当冤大头](https://so.toutiao.com/search?keyword=博主：出门旅游别当冤大头)
1. [格力技工学校报到现场排起长队](https://so.toutiao.com/search?keyword=格力技工学校报到现场排起长队)
1. [评论员：两岸走向统一是历史必然](https://so.toutiao.com/search?keyword=评论员：两岸走向统一是历史必然)
1. [美CEO投资亏超1亿美元杀妻后自杀](https://so.toutiao.com/search?keyword=美CEO投资亏超1亿美元杀妻后自杀)
1. [大V：菲律宾“碰瓷”剧本演不下去了](https://so.toutiao.com/search?keyword=大V：菲律宾“碰瓷”剧本演不下去了)
1. [印度河成印巴新博弈前线](https://so.toutiao.com/search?keyword=印度河成印巴新博弈前线)
1. [中国汽车为何在阿根廷“杀疯了”](https://so.toutiao.com/search?keyword=中国汽车为何在阿根廷“杀疯了”)
1. [解放军警告驱离菲律宾飞机](https://so.toutiao.com/search?keyword=解放军警告驱离菲律宾飞机)
1. [台媒：解放军17艘船舰位台海周边活动](https://so.toutiao.com/search?keyword=台媒：解放军17艘船舰位台海周边活动)
1. [央视迎来两位新主播](https://so.toutiao.com/search?keyword=央视迎来两位新主播)
1. [日本罕见1天3次向美国强烈抗议](https://so.toutiao.com/search?keyword=日本罕见1天3次向美国强烈抗议)
1. [德约晋级中网决赛将战德米纳尔](https://so.toutiao.com/search?keyword=德约晋级中网决赛将战德米纳尔)
1. [中网球场99.2%上座率震撼德约科维奇](https://so.toutiao.com/search?keyword=中网球场99.2%上座率震撼德约科维奇)
1. [名嘴谈高市若坚持涉台错误言论后果](https://so.toutiao.com/search?keyword=名嘴谈高市若坚持涉台错误言论后果)
1. [鸿蒙离一亿用户还有多远](https://so.toutiao.com/search?keyword=鸿蒙离一亿用户还有多远)
1. [以色列纪念新一轮巴以冲突三周年](https://so.toutiao.com/search?keyword=以色列纪念新一轮巴以冲突三周年)
1. [重庆酉阳发生盗矿案件 7人死亡](https://so.toutiao.com/search?keyword=重庆酉阳发生盗矿案件%207人死亡)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Oct 07 2026 01:11:04 GMT+0800 (China Standard Time) -->

1. [李飞飞称十年后只剩两类劳动](https://www.zhihu.com/search?q=%E6%9D%8E%E9%A3%9E%E9%A3%9E%E7%A7%B0%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%AA%E5%89%A9%E4%B8%A4%E7%B1%BB%E5%8A%B3%E5%8A%A8)
1. [代入代露娃的妈妈天塌了](https://www.zhihu.com/search?q=%E4%BB%A3%E5%85%A5%E4%BB%A3%E9%9C%B2%E5%A8%83%E7%9A%84%E5%A6%88%E5%A6%88%E5%A4%A9%E5%A1%8C%E4%BA%86)
1. [中国电信回应前员工实名举报](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1%E5%9B%9E%E5%BA%94%E5%89%8D%E5%91%98%E5%B7%A5%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5)
1. [超10万份孕妇血样被偷运出境](https://www.zhihu.com/search?q=%E8%B6%8510%E4%B8%87%E4%BB%BD%E5%AD%95%E5%A6%87%E8%A1%80%E6%A0%B7%E8%A2%AB%E5%81%B7%E8%BF%90%E5%87%BA%E5%A2%83)
1. [国足0-1塔吉克斯坦](https://www.zhihu.com/search?q=%E5%9B%BD%E8%B6%B30-1%E5%A1%94%E5%90%89%E5%85%8B%E6%96%AF%E5%9D%A6)
1. [韩国网友不满亚运夺金免兵役](https://www.zhihu.com/search?q=%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B8%8D%E6%BB%A1%E4%BA%9A%E8%BF%90%E5%A4%BA%E9%87%91%E5%85%8D%E5%85%B5%E5%BD%B9)
1. [2026诺贝尔物理学奖](https://www.zhihu.com/search?q=2026%E8%AF%BA%E8%B4%9D%E5%B0%94%E7%89%A9%E7%90%86%E5%AD%A6%E5%A5%96)
1. [纪录片《缅北电诈覆灭纪实》首播](https://www.zhihu.com/search?q=%E7%BA%AA%E5%BD%95%E7%89%87%E3%80%8A%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E8%A6%86%E7%81%AD%E7%BA%AA%E5%AE%9E%E3%80%8B%E9%A6%96%E6%92%AD)
1. [高通将收购华为部分专利](https://www.zhihu.com/search?q=%E9%AB%98%E9%80%9A%E5%B0%86%E6%94%B6%E8%B4%AD%E5%8D%8E%E4%B8%BA%E9%83%A8%E5%88%86%E4%B8%93%E5%88%A9)
1. [韦世豪被红牌罚下](https://www.zhihu.com/search?q=%E9%9F%A6%E4%B8%96%E8%B1%AA%E8%A2%AB%E7%BA%A2%E7%89%8C%E7%BD%9A%E4%B8%8B)
1. [德约科维奇获中网男单冠军](https://www.zhihu.com/search?q=%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87%E8%8E%B7%E4%B8%AD%E7%BD%91%E7%94%B7%E5%8D%95%E5%86%A0%E5%86%9B)
1. [网传俄实验室发生鼠疫泄漏](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E4%BF%84%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E7%94%9F%E9%BC%A0%E7%96%AB%E6%B3%84%E6%BC%8F)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Oct 07 2026 01:13:24 GMT+0800 (China Standard Time) -->

1. [纪录片《缅北电诈覆灭纪实》首播，有哪些抓捕细节和内幕值得关注？](https://www.zhihu.com/question/2090520646019183600)
1. [王皓遭辱骂拍照取证，其妻子发声「不理解竞技体育怎么变这样了」，怎样看待这一现象？骂人者会受到处罚吗？](https://www.zhihu.com/question/2090900901653209300)
1. [如何看待教育部要求辅导员与学生同吃同住同生活、思政工作下沉至学生私生活？](https://www.zhihu.com/question/2089644710965024300)
1. [缅方曾称没有中国人死，起初拒绝中国警方从电诈园区带回同胞遗骸，哪些信息值得关注？](https://www.zhihu.com/question/2090761132268942600)
1. [媒体曝多项研究证实最佳睡眠时长为7小时，这一结论的依据是啥？为什么很多网友觉得黄金睡眠时长一直在缩水？](https://www.zhihu.com/question/2090731672496858600)
1. [东南亚真的很危险吗？](https://www.zhihu.com/question/14535550405)
1. [OPPO 为何要寻求 12 亿美元银团贷款？](https://www.zhihu.com/question/2089518959808857600)
1. [Adobe Photoshop 是否已经过时？](https://www.zhihu.com/question/26705971)
1. [国足友谊赛 3 连败，1 球未进丢掉 9 球，邵佳一该下课吗？](https://www.zhihu.com/question/2090921655505609000)
1. [为什么 macOS 比 Windows 好用且美观，但是国内 Windows 依旧是主流操作系统？](https://www.zhihu.com/question/656502284)
1. [如何看待TES上单zuian签证两次被拒，369紧急成为TES S16首发上单？](https://www.zhihu.com/question/2090797548009153500)
1. [法国国债利差飙升至「欧债危机」以来最高水平，欧洲央行拟采取危机干预，法国会引爆金融危机么？](https://www.zhihu.com/question/2090039404593267000)
1. [国足对阵塔吉克斯坦，韦世豪情绪失控肘击对手，被红牌罚下，怎样评价他的表现？](https://www.zhihu.com/question/2090915470492660000)
1. [佤邦联合军原副总司令落网画面公开，将对缅北电诈清剿及局势带来哪些影响？](https://www.zhihu.com/question/2090445538684565200)
1. [普宁教师岗考生称因HIV体检不合格被教育局劝签自愿放弃聘用，这合理吗？日常教学接触会传染到学生吗？](https://www.zhihu.com/question/2090360680104683500)
1. [如何看待曝一大厂职工靠加班将服务器成本降低2亿致全组被裁？网友说「程序员要学会养bug」，怎么理解？](https://www.zhihu.com/question/2089288174748919600)
1. [2026年中网男单半决赛，梅德韦杰夫泄愤击球致观众受伤被判负，德约科维奇两盘获胜，如何评价这场比赛？](https://www.zhihu.com/question/2090563607268541000)
1. [家长称孩子打印作业开销太高，四年级一学期单科最高达300元，打印作业应该由家长做吗？怎样能降低成本？](https://www.zhihu.com/question/2090852996590428700)
1. [为什么很多影视明星的子女基本都在英美读书？](https://www.zhihu.com/question/2085306776988152000)
1. [媒体称破铜烂铁、废纸壳、废塑料可能正在创造巨量财富，这是真的吗？为啥「破烂」正在变成黄金赛道？](https://www.zhihu.com/question/2090571860681253600)
1. [多地文旅安排滞留游客免费入住高校宿舍引争议，如何看待这种「慷学生之慨」的做法？这种安排需要学生同意吗？](https://www.zhihu.com/question/2090570108079027700)
1. [泡面怎么煮会好吃？](https://www.zhihu.com/question/1966066791336896500)
1. [《红楼梦》里薛宝钗给惜春开的一大堆画具都是做什么用的，为什么连水桶、箱子也有？](https://www.zhihu.com/question/2088232150554494700)
1. [网红慧慧饱饱账号被禁止关注，客服称该用户因违反社区规范被处置，后账号恢复，未回应异常原因，具体咋回事？](https://www.zhihu.com/question/2090102947174512400)
1. [大家都说情绪价值，到底什么是情绪价值？](https://www.zhihu.com/question/1952643491453711400)
1. [大家认为哪种面条最好吃，有哪些好吃的做法?](https://www.zhihu.com/question/1996922585867371800)
1. [《笑傲江湖》里「无招胜有招」该如何理解？](https://www.zhihu.com/question/2089673845900948200)
1. [如果没有乔丹，詹姆斯会是NBA历史第一人吗？](https://www.zhihu.com/question/2016516174062593300)
1. [赛博朋克模拟经营游戏《尼瓦利斯之夜》是一款怎样的游戏？值得上手一玩吗？](https://www.zhihu.com/question/2088551103432320000)
1. [孩子越大越不愿沟通，父母该坚持管教还是学会放手？](https://www.zhihu.com/question/2080539295270621700)

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
<!-- 最后更新时间 Wed Oct 07 2026 01:18:17 GMT+0800 (China Standard Time) -->

1. [美丽中国山河如画](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%B1%B1%E6%B2%B3%E5%A6%82%E7%94%BB%23&Refer=new_time)
1. [粤J2888T战绩全网可查](https://s.weibo.com//weibo?q=%23%E7%B2%A4J2888T%E6%88%98%E7%BB%A9%E5%85%A8%E7%BD%91%E5%8F%AF%E6%9F%A5%23&t=31&band_rank=1&Refer=top)
1. [最危险的是年轻时错过复利](https://s.weibo.com//weibo?q=%E6%9C%80%E5%8D%B1%E9%99%A9%E7%9A%84%E6%98%AF%E5%B9%B4%E8%BD%BB%E6%97%B6%E9%94%99%E8%BF%87%E5%A4%8D%E5%88%A9&t=31&band_rank=2&Refer=top)
1. [交通部门增运力优服务应对返程高峰](https://s.weibo.com//weibo?q=%23%E4%BA%A4%E9%80%9A%E9%83%A8%E9%97%A8%E5%A2%9E%E8%BF%90%E5%8A%9B%E4%BC%98%E6%9C%8D%E5%8A%A1%E5%BA%94%E5%AF%B9%E8%BF%94%E7%A8%8B%E9%AB%98%E5%B3%B0%23&t=31&band_rank=3&Refer=top)
1. [兰香去世时没戴红绳](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%8E%BB%E4%B8%96%E6%97%B6%E6%B2%A1%E6%88%B4%E7%BA%A2%E7%BB%B3%23&t=31&band_rank=4&Refer=top)
1. [贺炜评国足不敌塔吉克斯坦](https://s.weibo.com//weibo?q=%E8%B4%BA%E7%82%9C%E8%AF%84%E5%9B%BD%E8%B6%B3%E4%B8%8D%E6%95%8C%E5%A1%94%E5%90%89%E5%85%8B%E6%96%AF%E5%9D%A6&t=31&band_rank=5&Refer=top)
1. [代露娃艺考老师发文](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E8%89%BA%E8%80%83%E8%80%81%E5%B8%88%E5%8F%91%E6%96%87%23&t=31&band_rank=6&Refer=top)
1. [一万块的威力被严重低估了](https://s.weibo.com//weibo?q=%E4%B8%80%E4%B8%87%E5%9D%97%E7%9A%84%E5%A8%81%E5%8A%9B%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E4%BA%86&t=31&band_rank=7&Refer=top)
1. [中国游客国庆出行让日媒很闹心](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%9B%BD%E5%BA%86%E5%87%BA%E8%A1%8C%E8%AE%A9%E6%97%A5%E5%AA%92%E5%BE%88%E9%97%B9%E5%BF%83%23&t=31&band_rank=8&Refer=top)
1. [声生不息宝岛季](https://s.weibo.com//weibo?q=%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E5%AE%9D%E5%B2%9B%E5%AD%A3&t=31&band_rank=9&Refer=top)
1. [李勒优解释自己为什么带现金出门](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E8%A7%A3%E9%87%8A%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B8%A6%E7%8E%B0%E9%87%91%E5%87%BA%E9%97%A8%23&t=31&band_rank=10&Refer=top)
1. [虞书欣粉丝朋友圈](https://s.weibo.com//weibo?q=%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B2%89%E4%B8%9D%E6%9C%8B%E5%8F%8B%E5%9C%88&t=31&band_rank=11&Refer=top)
1. [现在才发现万人迷没戴任何首饰](https://s.weibo.com//weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%89%8D%E5%8F%91%E7%8E%B0%E4%B8%87%E4%BA%BA%E8%BF%B7%E6%B2%A1%E6%88%B4%E4%BB%BB%E4%BD%95%E9%A6%96%E9%A5%B0%23&t=31&band_rank=12&Refer=top)
1. [印度高种姓博主游览中国农村](https://s.weibo.com//weibo?q=%E5%8D%B0%E5%BA%A6%E9%AB%98%E7%A7%8D%E5%A7%93%E5%8D%9A%E4%B8%BB%E6%B8%B8%E8%A7%88%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91&t=31&band_rank=13&Refer=top)
1. [亚运会冠军金牌已经磨花了](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%86%A0%E5%86%9B%E9%87%91%E7%89%8C%E5%B7%B2%E7%BB%8F%E7%A3%A8%E8%8A%B1%E4%BA%86%23&t=31&band_rank=14&Refer=top)
1. [缅北电诈头目白应苍给中国人民道歉](https://s.weibo.com//weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%A4%B4%E7%9B%AE%E7%99%BD%E5%BA%94%E8%8B%8D%E7%BB%99%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%81%93%E6%AD%89%23&t=31&band_rank=15&Refer=top)
1. [卢昱晓看秀前只吃了一口碳水](https://s.weibo.com//weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%9C%8B%E7%A7%80%E5%89%8D%E5%8F%AA%E5%90%83%E4%BA%86%E4%B8%80%E5%8F%A3%E7%A2%B3%E6%B0%B4%23&t=31&band_rank=16&Refer=top)
1. [小孩在景区用磁吸充电线钓许愿池硬币](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%9C%A8%E6%99%AF%E5%8C%BA%E7%94%A8%E7%A3%81%E5%90%B8%E5%85%85%E7%94%B5%E7%BA%BF%E9%92%93%E8%AE%B8%E6%84%BF%E6%B1%A0%E7%A1%AC%E5%B8%81%23&t=31&band_rank=17&Refer=top)
1. [华晨宇一口气官宣六场演唱会](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%98%E5%AE%A3%E5%85%AD%E5%9C%BA%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=18&Refer=top)
1. [邓紫棋自曝给女儿儿子取好名字](https://s.weibo.com//weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E8%87%AA%E6%9B%9D%E7%BB%99%E5%A5%B3%E5%84%BF%E5%84%BF%E5%AD%90%E5%8F%96%E5%A5%BD%E5%90%8D%E5%AD%97%23&t=31&band_rank=19&Refer=top)
1. [代露娃手握五大艺术名校合格证](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E6%89%8B%E6%8F%A1%E4%BA%94%E5%A4%A7%E8%89%BA%E6%9C%AF%E5%90%8D%E6%A0%A1%E5%90%88%E6%A0%BC%E8%AF%81%23&t=31&band_rank=20&Refer=top)
1. [知否剧名原来不是宠妾灭妻](https://s.weibo.com//weibo?q=%E7%9F%A5%E5%90%A6%E5%89%A7%E5%90%8D%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E5%AE%A0%E5%A6%BE%E7%81%AD%E5%A6%BB&t=31&band_rank=21&Refer=top)
1. [小莲是第一个去世](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E8%8E%B2%E6%98%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8E%BB%E4%B8%96%23&t=31&band_rank=22&Refer=top)
1. [山东人削皮吃发霉馒头](https://s.weibo.com//weibo?q=%E5%B1%B1%E4%B8%9C%E4%BA%BA%E5%89%8A%E7%9A%AE%E5%90%83%E5%8F%91%E9%9C%89%E9%A6%92%E5%A4%B4&t=31&band_rank=23&Refer=top)
1. [曝邓紫棋结婚](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E9%82%93%E7%B4%AB%E6%A3%8B%E7%BB%93%E5%A9%9A%23&t=31&band_rank=24&Refer=top)
1. [罗老师结婚了](https://s.weibo.com//weibo?q=%E7%BD%97%E8%80%81%E5%B8%88%E7%BB%93%E5%A9%9A%E4%BA%86&t=31&band_rank=25&Refer=top)
1. [哪位流量艺人和经纪人有过绯闻](https://s.weibo.com//weibo?q=%23%E5%93%AA%E4%BD%8D%E6%B5%81%E9%87%8F%E8%89%BA%E4%BA%BA%E5%92%8C%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%89%E8%BF%87%E7%BB%AF%E9%97%BB%23&t=31&band_rank=26&Refer=top)
1. [跟异性聊天容易上头是什么毛病](https://s.weibo.com//weibo?q=%E8%B7%9F%E5%BC%82%E6%80%A7%E8%81%8A%E5%A4%A9%E5%AE%B9%E6%98%93%E4%B8%8A%E5%A4%B4%E6%98%AF%E4%BB%80%E4%B9%88%E6%AF%9B%E7%97%85&t=31&band_rank=27&Refer=top)
1. [向下卷才是地狱难度](https://s.weibo.com//weibo?q=%E5%90%91%E4%B8%8B%E5%8D%B7%E6%89%8D%E6%98%AF%E5%9C%B0%E7%8B%B1%E9%9A%BE%E5%BA%A6&t=31&band_rank=28&Refer=top)
1. [韩国人以为重庆是小城市](https://s.weibo.com//weibo?q=%E9%9F%A9%E5%9B%BD%E4%BA%BA%E4%BB%A5%E4%B8%BA%E9%87%8D%E5%BA%86%E6%98%AF%E5%B0%8F%E5%9F%8E%E5%B8%82&t=31&band_rank=29&Refer=top)
1. [母亲106岁父亲101岁女儿透露长寿秘诀](https://s.weibo.com//weibo?q=%23%E6%AF%8D%E4%BA%B2106%E5%B2%81%E7%88%B6%E4%BA%B2101%E5%B2%81%E5%A5%B3%E5%84%BF%E9%80%8F%E9%9C%B2%E9%95%BF%E5%AF%BF%E7%A7%98%E8%AF%80%23&t=31&band_rank=30&Refer=top)
1. [王一博第105条ins](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%AC%AC105%E6%9D%A1ins%23&t=31&band_rank=31&Refer=top)
1. [父母以为结婚是这样的](https://s.weibo.com//weibo?q=%E7%88%B6%E6%AF%8D%E4%BB%A5%E4%B8%BA%E7%BB%93%E5%A9%9A%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84&t=31&band_rank=32&Refer=top)
1. [长久关系秘诀是不太在乎对方](https://s.weibo.com//weibo?q=%E9%95%BF%E4%B9%85%E5%85%B3%E7%B3%BB%E7%A7%98%E8%AF%80%E6%98%AF%E4%B8%8D%E5%A4%AA%E5%9C%A8%E4%B9%8E%E5%AF%B9%E6%96%B9&t=31&band_rank=33&Refer=top)
1. [李嘉诚家族出手](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E5%AE%B6%E6%97%8F%E5%87%BA%E6%89%8B%23&t=31&band_rank=34&Refer=top)
1. [谭松韵老年妆化了6个小时](https://s.weibo.com//weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E8%80%81%E5%B9%B4%E5%A6%86%E5%8C%96%E4%BA%866%E4%B8%AA%E5%B0%8F%E6%97%B6%23&t=31&band_rank=35&Refer=top)
1. [魏大勋刘亦菲 性转版早春晴朗](https://s.weibo.com//weibo?q=%E9%AD%8F%E5%A4%A7%E5%8B%8B%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%80%A7%E8%BD%AC%E7%89%88%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97&t=31&band_rank=36&Refer=top)
1. [狂吃不胖的室友蹲厕所狂吐](https://s.weibo.com//weibo?q=%E7%8B%82%E5%90%83%E4%B8%8D%E8%83%96%E7%9A%84%E5%AE%A4%E5%8F%8B%E8%B9%B2%E5%8E%95%E6%89%80%E7%8B%82%E5%90%90&t=31&band_rank=37&Refer=top)
1. [46岁的隋棠拒生第4胎](https://s.weibo.com//weibo?q=%2346%E5%B2%81%E7%9A%84%E9%9A%8B%E6%A3%A0%E6%8B%92%E7%94%9F%E7%AC%AC4%E8%83%8E%23&t=31&band_rank=38&Refer=top)
1. [光洙这几句真的有被治愈到](https://s.weibo.com//weibo?q=%E5%85%89%E6%B4%99%E8%BF%99%E5%87%A0%E5%8F%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E8%A2%AB%E6%B2%BB%E6%84%88%E5%88%B0&t=31&band_rank=39&Refer=top)
1. [JackeyLove回应ZUIAN签证问题](https://s.weibo.com//weibo?q=%23JackeyLove%E5%9B%9E%E5%BA%94ZUIAN%E7%AD%BE%E8%AF%81%E9%97%AE%E9%A2%98%23&t=31&band_rank=40&Refer=top)
1. [郑思维刘钰雯婚礼](https://s.weibo.com//weibo?q=%E9%83%91%E6%80%9D%E7%BB%B4%E5%88%98%E9%92%B0%E9%9B%AF%E5%A9%9A%E7%A4%BC&t=31&band_rank=41&Refer=top)
1. [小S与S妈具俊晔去墓地为大S庆冥诞](https://s.weibo.com//weibo?q=%23%E5%B0%8FS%E4%B8%8ES%E5%A6%88%E5%85%B7%E4%BF%8A%E6%99%94%E5%8E%BB%E5%A2%93%E5%9C%B0%E4%B8%BA%E5%A4%A7S%E5%BA%86%E5%86%A5%E8%AF%9E%23&t=31&band_rank=42&Refer=top)
1. [千万不要轻易喂食一只猫头鹰](https://s.weibo.com//weibo?q=%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E5%96%82%E9%A3%9F%E4%B8%80%E5%8F%AA%E7%8C%AB%E5%A4%B4%E9%B9%B0&t=31&band_rank=43&Refer=top)
1. [此沙 港圈](https://s.weibo.com//weibo?q=%E6%AD%A4%E6%B2%99%20%E6%B8%AF%E5%9C%88&t=31&band_rank=44&Refer=top)
1. [隋棠越来越像林志玲了](https://s.weibo.com//weibo?q=%23%E9%9A%8B%E6%A3%A0%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%83%8F%E6%9E%97%E5%BF%97%E7%8E%B2%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [停个车全小区的人都知道你回来了](https://s.weibo.com//weibo?q=%23%E5%81%9C%E4%B8%AA%E8%BD%A6%E5%85%A8%E5%B0%8F%E5%8C%BA%E7%9A%84%E4%BA%BA%E9%83%BD%E7%9F%A5%E9%81%93%E4%BD%A0%E5%9B%9E%E6%9D%A5%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [迪丽热巴Dior首图](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4Dior%E9%A6%96%E5%9B%BE%23&t=31&band_rank=47&Refer=top)
1. [国庆真正拥有7天假期的人很少](https://s.weibo.com//weibo?q=%E5%9B%BD%E5%BA%86%E7%9C%9F%E6%AD%A3%E6%8B%A5%E6%9C%897%E5%A4%A9%E5%81%87%E6%9C%9F%E7%9A%84%E4%BA%BA%E5%BE%88%E5%B0%91&t=31&band_rank=48&Refer=top)
1. [不喜欢和没有审美的朋友出门](https://s.weibo.com//weibo?q=%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%92%8C%E6%B2%A1%E6%9C%89%E5%AE%A1%E7%BE%8E%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%87%BA%E9%97%A8&t=31&band_rank=49&Refer=top)
1. [AG 突围赛](https://s.weibo.com//weibo?q=AG%20%E7%AA%81%E5%9B%B4%E8%B5%9B&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
