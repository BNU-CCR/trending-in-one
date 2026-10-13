# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-14 00:01:05

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
<!-- 最后更新时间 Tue Oct 13 2026 20:06:39 GMT+0800 (China Standard Time) -->

1. [黄奇帆被查](https://so.toutiao.com/search?keyword=黄奇帆被查)
1. [男生高考522分被调剂马术专业学钉蹄](https://so.toutiao.com/search?keyword=男生高考522分被调剂马术专业学钉蹄)
1. [你我的长征](https://so.toutiao.com/search?keyword=你我的长征)
1. [老人下地干活被气枪击中身亡](https://so.toutiao.com/search?keyword=老人下地干活被气枪击中身亡)
1. [缅北四大家族3个已被中国宣判](https://so.toutiao.com/search?keyword=缅北四大家族3个已被中国宣判)
1. [机器狗进哀牢山拍到“冥界之花”](https://so.toutiao.com/search?keyword=机器狗进哀牢山拍到“冥界之花”)
1. [血栓是怎样“悄悄形成”的](https://so.toutiao.com/search?keyword=血栓是怎样“悄悄形成”的)
1. [缅北四大家族覆灭时间线](https://so.toutiao.com/search?keyword=缅北四大家族覆灭时间线)
1. [全球硫磺价格暴涨近10倍](https://so.toutiao.com/search?keyword=全球硫磺价格暴涨近10倍)
1. [男子在悬空寺做引体向上被立案](https://so.toutiao.com/search?keyword=男子在悬空寺做引体向上被立案)
1. [女子高铁上和男友开免提打1小时电话](https://so.toutiao.com/search?keyword=女子高铁上和男友开免提打1小时电话)
1. [79岁老干妈陶华碧用AI一年赚了54亿](https://so.toutiao.com/search?keyword=79岁老干妈陶华碧用AI一年赚了54亿)
1. [A股探底回升说明什么](https://so.toutiao.com/search?keyword=A股探底回升说明什么)
1. [为何会出现如此多大棚闲置](https://so.toutiao.com/search?keyword=为何会出现如此多大棚闲置)
1. [24岁女吃播猝死 或因缺钾](https://so.toutiao.com/search?keyword=24岁女吃播猝死%20或因缺钾)
1. [东北虎一生主要做哪三件事](https://so.toutiao.com/search?keyword=东北虎一生主要做哪三件事)
1. [A股上演“大奇迹日”](https://so.toutiao.com/search?keyword=A股上演“大奇迹日”)
1. [男群演疑似猥亵女演员 剧组回应](https://so.toutiao.com/search?keyword=男群演疑似猥亵女演员%20剧组回应)
1. [AI女爱豆因怀孕暂停活动](https://so.toutiao.com/search?keyword=AI女爱豆因怀孕暂停活动)
1. [东北“候鸟老人”前往海南“猫冬”](https://so.toutiao.com/search?keyword=东北“候鸟老人”前往海南“猫冬”)
1. [火箭军全流程实战演练战力拉满](https://so.toutiao.com/search?keyword=火箭军全流程实战演练战力拉满)
1. [网友偶遇撒贝宁一家四口](https://so.toutiao.com/search?keyword=网友偶遇撒贝宁一家四口)
1. [海底捞向张勇提供1亿元贷款](https://so.toutiao.com/search?keyword=海底捞向张勇提供1亿元贷款)
1. [白鹿方为泰国见面会开放退票通道](https://so.toutiao.com/search?keyword=白鹿方为泰国见面会开放退票通道)
1. [济南监狱原监狱长赵新明被查](https://so.toutiao.com/search?keyword=济南监狱原监狱长赵新明被查)
1. [中方回应特朗普称不相信中俄在帮伊朗](https://so.toutiao.com/search?keyword=中方回应特朗普称不相信中俄在帮伊朗)
1. [哪些人容易被“腿梗”盯上](https://so.toutiao.com/search?keyword=哪些人容易被“腿梗”盯上)
1. [欧洲车企排队买中国方案颠覆了谁](https://so.toutiao.com/search?keyword=欧洲车企排队买中国方案颠覆了谁)
1. [媒体评楼上百日宴楼下婚宴闹剧](https://so.toutiao.com/search?keyword=媒体评楼上百日宴楼下婚宴闹剧)
1. [2027款长安启源Q05上市](https://so.toutiao.com/search?keyword=2027款长安启源Q05上市)
1. [越南试行对中国公民组团赴庆和省免签](https://so.toutiao.com/search?keyword=越南试行对中国公民组团赴庆和省免签)
1. [沙特为何被胡塞打成这样](https://so.toutiao.com/search?keyword=沙特为何被胡塞打成这样)
1. [大蛇盘踞厕所 消防出勤30多次终抓获](https://so.toutiao.com/search?keyword=大蛇盘踞厕所%20消防出勤30多次终抓获)
1. [外交部：中方赞赏印尼高层有关表态](https://so.toutiao.com/search?keyword=外交部：中方赞赏印尼高层有关表态)
1. [马斯克为何“炮轰”印度首富](https://so.toutiao.com/search?keyword=马斯克为何“炮轰”印度首富)
1. [3人死刑！缅北魏家犯罪集团案宣判](https://so.toutiao.com/search?keyword=3人死刑！缅北魏家犯罪集团案宣判)
1. [江苏选调1208名优秀应届毕业生](https://so.toutiao.com/search?keyword=江苏选调1208名优秀应届毕业生)
1. [农户疑水稻枯萎系无人机喷除草剂所致](https://so.toutiao.com/search?keyword=农户疑水稻枯萎系无人机喷除草剂所致)
1. [张雪放言国产机车将垄断世界奖台](https://so.toutiao.com/search?keyword=张雪放言国产机车将垄断世界奖台)
1. [医生：管好血脂可防心梗脑梗](https://so.toutiao.com/search?keyword=医生：管好血脂可防心梗脑梗)
1. [央视曝光大棚闲置后当地连夜开会](https://so.toutiao.com/search?keyword=央视曝光大棚闲置后当地连夜开会)
1. [网红晚安安自述从35楼坠楼生还经历](https://so.toutiao.com/search?keyword=网红晚安安自述从35楼坠楼生还经历)
1. [A股反弹行情能否延续](https://so.toutiao.com/search?keyword=A股反弹行情能否延续)
1. [博主：食品安全不能只罚企业](https://so.toutiao.com/search?keyword=博主：食品安全不能只罚企业)
1. [小朋友在天台升国旗唱国歌](https://so.toutiao.com/search?keyword=小朋友在天台升国旗唱国歌)
1. [越剧花旦演员钱水明演出期间意外身亡](https://so.toutiao.com/search?keyword=越剧花旦演员钱水明演出期间意外身亡)
1. [胖东来入局酒店打的什么算盘](https://so.toutiao.com/search?keyword=胖东来入局酒店打的什么算盘)
1. [农民交公粮能否视同缴社保为何引热议](https://so.toutiao.com/search?keyword=农民交公粮能否视同缴社保为何引热议)
1. [媒体：“丁义珍式”窗口整改要抬心态](https://so.toutiao.com/search?keyword=媒体：“丁义珍式”窗口整改要抬心态)
1. [菲检方撤回三项对副总统的弹劾指控](https://so.toutiao.com/search?keyword=菲检方撤回三项对副总统的弹劾指控)
1. [西班牙20岁长公主穿军装出席阅兵](https://so.toutiao.com/search?keyword=西班牙20岁长公主穿军装出席阅兵)
1. [尊界公布制动踏板第三方检测结果](https://so.toutiao.com/search?keyword=尊界公布制动踏板第三方检测结果)
1. [新质生产力发展路线图来了](https://so.toutiao.com/search?keyword=新质生产力发展路线图来了)
1. [“南拳妈妈”成员帕劳潜水时遇袭](https://so.toutiao.com/search?keyword=“南拳妈妈”成员帕劳潜水时遇袭)
1. [中方：台湾问题是中国内政不容干涉](https://so.toutiao.com/search?keyword=中方：台湾问题是中国内政不容干涉)
1. [9月问界M9销量破万位列第一](https://so.toutiao.com/search?keyword=9月问界M9销量破万位列第一)
1. [新车坠崖跌落百米车主仅轻伤](https://so.toutiao.com/search?keyword=新车坠崖跌落百米车主仅轻伤)
1. [中南大学原校长张尧学被逮捕、公诉](https://so.toutiao.com/search?keyword=中南大学原校长张尧学被逮捕、公诉)
1. [周杰伦转发视频“青鸟”大破防](https://so.toutiao.com/search?keyword=周杰伦转发视频“青鸟”大破防)
1. [男子造谣多名游泳者死亡被依法处理](https://so.toutiao.com/search?keyword=男子造谣多名游泳者死亡被依法处理)
1. [马宁3次无视C罗倒地](https://so.toutiao.com/search?keyword=马宁3次无视C罗倒地)
1. [台民调：过半民众支持主动与大陆对话](https://so.toutiao.com/search?keyword=台民调：过半民众支持主动与大陆对话)
1. [郑钦文收入97%来自品牌代言](https://so.toutiao.com/search?keyword=郑钦文收入97%来自品牌代言)
1. [中国旅客转机亲历爆炸：大家都在哭喊](https://so.toutiao.com/search?keyword=中国旅客转机亲历爆炸：大家都在哭喊)
1. [中国车企坐上巴黎车展“主桌”](https://so.toutiao.com/search?keyword=中国车企坐上巴黎车展“主桌”)
1. [10连板大牛股新华传媒停牌核查](https://so.toutiao.com/search?keyword=10连板大牛股新华传媒停牌核查)
1. [法国把“一个中国”说定](https://so.toutiao.com/search?keyword=法国把“一个中国”说定)
1. [小鹏G9L巴黎车展全球上市](https://so.toutiao.com/search?keyword=小鹏G9L巴黎车展全球上市)
1. [2027国考明天开始报名](https://so.toutiao.com/search?keyword=2027国考明天开始报名)
1. [霸王茶姬店员劝退消费者](https://so.toutiao.com/search?keyword=霸王茶姬店员劝退消费者)
1. [美股芯片股集体跳水](https://so.toutiao.com/search?keyword=美股芯片股集体跳水)
1. [小野鸭在湖边游泳被大鱼生吞](https://so.toutiao.com/search?keyword=小野鸭在湖边游泳被大鱼生吞)
1. [中科院回应“住酒店可进天眼核心区”](https://so.toutiao.com/search?keyword=中科院回应“住酒店可进天眼核心区”)
1. [王励勤出席张家界森林保护节活动](https://so.toutiao.com/search?keyword=王励勤出席张家界森林保护节活动)
1. [《绝命毒师》“老白儿子”去世](https://so.toutiao.com/search?keyword=《绝命毒师》“老白儿子”去世)
1. [媒体：支持“台独”只会砸自己的脚](https://so.toutiao.com/search?keyword=媒体：支持“台独”只会砸自己的脚)
1. [评论员：日本是铁了心要介入台海](https://so.toutiao.com/search?keyword=评论员：日本是铁了心要介入台海)
1. [31岁抗癌博主离世 临终前狂吃冰](https://so.toutiao.com/search?keyword=31岁抗癌博主离世%20临终前狂吃冰)
1. [名嘴：外部变局锁死“台独”生存空间](https://so.toutiao.com/search?keyword=名嘴：外部变局锁死“台独”生存空间)
1. [全球纯油车份额跌破50%意味着什么](https://so.toutiao.com/search?keyword=全球纯油车份额跌破50%意味着什么)
1. [吉林松原回应“大棚撂荒仍领补贴”](https://so.toutiao.com/search?keyword=吉林松原回应“大棚撂荒仍领补贴”)
1. [特朗普为何要买俄罗斯的柴油](https://so.toutiao.com/search?keyword=特朗普为何要买俄罗斯的柴油)
1. [如何用好金秋窗口促进河南楼市发展](https://so.toutiao.com/search?keyword=如何用好金秋窗口促进河南楼市发展)
1. [高品质大闸蟹下降幅度不大](https://so.toutiao.com/search?keyword=高品质大闸蟹下降幅度不大)
1. [广东养老缴费基数有调整](https://so.toutiao.com/search?keyword=广东养老缴费基数有调整)
1. [理想i6完成欧洲首秀](https://so.toutiao.com/search?keyword=理想i6完成欧洲首秀)
1. [中国航展参展装备超3000件](https://so.toutiao.com/search?keyword=中国航展参展装备超3000件)
1. [两款燃油车重回销量榜前十](https://so.toutiao.com/search?keyword=两款燃油车重回销量榜前十)
1. [霍尔木兹海峡附近袭船事件为何升级](https://so.toutiao.com/search?keyword=霍尔木兹海峡附近袭船事件为何升级)
1. [马斯克直播被女儿打断匆忙下线](https://so.toutiao.com/search?keyword=马斯克直播被女儿打断匆忙下线)
1. [特朗普身边女性为啥总被说“撞脸”](https://so.toutiao.com/search?keyword=特朗普身边女性为啥总被说“撞脸”)
1. [肖战2026巡回演唱会官宣](https://so.toutiao.com/search?keyword=肖战2026巡回演唱会官宣)
1. [中国航展12月7日至13日举行](https://so.toutiao.com/search?keyword=中国航展12月7日至13日举行)
1. [媒体：爱丽舍宫雄心很大心眼很小](https://so.toutiao.com/search?keyword=媒体：爱丽舍宫雄心很大心眼很小)
1. [A股市场缩量磨底 机构怎么看](https://so.toutiao.com/search?keyword=A股市场缩量磨底%20机构怎么看)
1. [民调：八成日本人反对军事介入台海](https://so.toutiao.com/search?keyword=民调：八成日本人反对军事介入台海)
1. [宣布俄乌能源停火是特朗普自导自演吗](https://so.toutiao.com/search?keyword=宣布俄乌能源停火是特朗普自导自演吗)
1. [有购房者利率已降至2% 最高可省5万](https://so.toutiao.com/search?keyword=有购房者利率已降至2%%20最高可省5万)
1. [当外国游客体验“过”中国人的日子](https://so.toutiao.com/search?keyword=当外国游客体验“过”中国人的日子)
1. [大国重器命名背后的红色传承](https://so.toutiao.com/search?keyword=大国重器命名背后的红色传承)
1. [女子左臀疼了一个月洗澡时挤出针头](https://so.toutiao.com/search?keyword=女子左臀疼了一个月洗澡时挤出针头)
1. [“中国天眼”发现真实宇宙三体世界](https://so.toutiao.com/search?keyword=“中国天眼”发现真实宇宙三体世界)
1. [奥迪全系买一赠一？上汽奥迪回应](https://so.toutiao.com/search?keyword=奥迪全系买一赠一？上汽奥迪回应)
1. [央视曝投资1.2亿项目仅建5个棚](https://so.toutiao.com/search?keyword=央视曝投资1.2亿项目仅建5个棚)
1. [李娜自曝宣布退役后一个月怀孕](https://so.toutiao.com/search?keyword=李娜自曝宣布退役后一个月怀孕)
1. [北京热力辟谣内部人员代缴采暖费打折](https://so.toutiao.com/search?keyword=北京热力辟谣内部人员代缴采暖费打折)
1. [男生梦到妈妈去世 醒来后情绪崩溃](https://so.toutiao.com/search?keyword=男生梦到妈妈去世%20醒来后情绪崩溃)
1. [比亚迪副总裁：5年内成全球第一车企](https://so.toutiao.com/search?keyword=比亚迪副总裁：5年内成全球第一车企)
1. [台退将戴脚镣发声：中国必将统一](https://so.toutiao.com/search?keyword=台退将戴脚镣发声：中国必将统一)
1. [郑钦文3年商业收入追平李娜整个生涯](https://so.toutiao.com/search?keyword=郑钦文3年商业收入追平李娜整个生涯)
1. [美国女死刑犯注射后未死亡已出院返监](https://so.toutiao.com/search?keyword=美国女死刑犯注射后未死亡已出院返监)
1. [老板轻拍女子提醒上菜被摔盘子](https://so.toutiao.com/search?keyword=老板轻拍女子提醒上菜被摔盘子)
1. [为何说羽绒服生意已经变了](https://so.toutiao.com/search?keyword=为何说羽绒服生意已经变了)
1. [私营加油站的油跑不远是真的吗](https://so.toutiao.com/search?keyword=私营加油站的油跑不远是真的吗)
1. [人民日报评郑钦文夺冠](https://so.toutiao.com/search?keyword=人民日报评郑钦文夺冠)
1. [博主：明年油车迎来3大变化](https://so.toutiao.com/search?keyword=博主：明年油车迎来3大变化)
1. [金价走低金店却火了 手镯卖断货](https://so.toutiao.com/search?keyword=金价走低金店却火了%20手镯卖断货)
1. [五胞胎爸爸：尿不湿4个月用4000多片](https://so.toutiao.com/search?keyword=五胞胎爸爸：尿不湿4个月用4000多片)
1. [李若彤到访活死人墓梦回小龙女](https://so.toutiao.com/search?keyword=李若彤到访活死人墓梦回小龙女)
1. [我国多地出现地磁暴](https://so.toutiao.com/search?keyword=我国多地出现地磁暴)
1. [媒体：女局长离婚风波不能止于八卦](https://so.toutiao.com/search?keyword=媒体：女局长离婚风波不能止于八卦)
1. [歼-16飞行员说阵风格斗更强咋理解](https://so.toutiao.com/search?keyword=歼-16飞行员说阵风格斗更强咋理解)
1. [郑钦文对手输球告状：没有加油声](https://so.toutiao.com/search?keyword=郑钦文对手输球告状：没有加油声)
1. [邱毅：岛内认为大陆解决台湾问题加快](https://so.toutiao.com/search?keyword=邱毅：岛内认为大陆解决台湾问题加快)
1. [朱一龙组织北电同学20周年聚会](https://so.toutiao.com/search?keyword=朱一龙组织北电同学20周年聚会)
1. [空壳公司何以拿下1.2亿政府农业项目](https://so.toutiao.com/search?keyword=空壳公司何以拿下1.2亿政府农业项目)
1. [美国AI走火入魔了吗](https://so.toutiao.com/search?keyword=美国AI走火入魔了吗)
1. [“拖鞋军”为何能打瘫沙特首都机场](https://so.toutiao.com/search?keyword=“拖鞋军”为何能打瘫沙特首都机场)
1. [霸王茶姬将发放1350万专项奖励](https://so.toutiao.com/search?keyword=霸王茶姬将发放1350万专项奖励)
1. [“70后”王刚任石家庄市委书记](https://so.toutiao.com/search?keyword=“70后”王刚任石家庄市委书记)
1. [泽连斯基回应特朗普说乌需要新总统](https://so.toutiao.com/search?keyword=泽连斯基回应特朗普说乌需要新总统)
1. [电车恶臭拆开底板掉出死狗](https://so.toutiao.com/search?keyword=电车恶臭拆开底板掉出死狗)
1. [法国总统候选人说不能为北约送死](https://so.toutiao.com/search?keyword=法国总统候选人说不能为北约送死)
1. [郑钦文中网夺冠登上新闻联播](https://so.toutiao.com/search?keyword=郑钦文中网夺冠登上新闻联播)
1. [山姆成为超市顶流了吗](https://so.toutiao.com/search?keyword=山姆成为超市顶流了吗)
1. [分析师：A股科技年内第二波行情可期](https://so.toutiao.com/search?keyword=分析师：A股科技年内第二波行情可期)
1. [刘松仁回应病情](https://so.toutiao.com/search?keyword=刘松仁回应病情)
1. [媒体评大棚闲置：谁在打扶贫的歪主意](https://so.toutiao.com/search?keyword=媒体评大棚闲置：谁在打扶贫的歪主意)
1. [《兰香如故》叫好又叫座的成功公式](https://so.toutiao.com/search?keyword=《兰香如故》叫好又叫座的成功公式)
1. [松岛辉空男单世界第1王楚钦第5](https://so.toutiao.com/search?keyword=松岛辉空男单世界第1王楚钦第5)
1. [轿车翻下近百米悬崖 车主生还](https://so.toutiao.com/search?keyword=轿车翻下近百米悬崖%20车主生还)
1. [武网回应郑钦文因伤退赛](https://so.toutiao.com/search?keyword=武网回应郑钦文因伤退赛)
1. [多个海事局发航行警告](https://so.toutiao.com/search?keyword=多个海事局发航行警告)
1. [专家：这轮牛市真的结束了](https://so.toutiao.com/search?keyword=专家：这轮牛市真的结束了)
1. [古力娜扎亮相武网](https://so.toutiao.com/search?keyword=古力娜扎亮相武网)
1. [医生：快速掉秤多是脱水并非减脂](https://so.toutiao.com/search?keyword=医生：快速掉秤多是脱水并非减脂)
1. [利好频出A股市场为何信心依旧不足](https://so.toutiao.com/search?keyword=利好频出A股市场为何信心依旧不足)
1. [马杜罗称和妻子遭受不公正关押282天](https://so.toutiao.com/search?keyword=马杜罗称和妻子遭受不公正关押282天)
1. [双汇董事长为何被罚3764万](https://so.toutiao.com/search?keyword=双汇董事长为何被罚3764万)
1. [为何要强力扼杀“速成车”](https://so.toutiao.com/search?keyword=为何要强力扼杀“速成车”)
1. [沙特与胡塞武装冲突或将长期化](https://so.toutiao.com/search?keyword=沙特与胡塞武装冲突或将长期化)
1. [谢寒冰：沈伯洋想拉抬自己的声势](https://so.toutiao.com/search?keyword=谢寒冰：沈伯洋想拉抬自己的声势)
1. [不要捡食路边的银杏果](https://so.toutiao.com/search?keyword=不要捡食路边的银杏果)
1. [证监会召开座谈会释放哪些信号](https://so.toutiao.com/search?keyword=证监会召开座谈会释放哪些信号)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Oct 14 2026 02:13:35 GMT+0800 (China Standard Time) -->

1. [尊界V800公布制动踏板第三方检测结果](https://www.zhihu.com/search?q=%E5%B0%8A%E7%95%8CV800%E5%85%AC%E5%B8%83%E5%88%B6%E5%8A%A8%E8%B8%8F%E6%9D%BF%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C)
1. [日本爆发倒闭潮](https://www.zhihu.com/search?q=%E6%97%A5%E6%9C%AC%E7%88%86%E5%8F%91%E5%80%92%E9%97%AD%E6%BD%AE)
1. [懂车帝质疑尊界V800检测结果](https://www.zhihu.com/search?q=%E6%87%82%E8%BD%A6%E5%B8%9D%E8%B4%A8%E7%96%91%E5%B0%8A%E7%95%8CV800%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C)
1. [男子国庆被排7天班未去遭开除](https://www.zhihu.com/search?q=%E7%94%B7%E5%AD%90%E5%9B%BD%E5%BA%86%E8%A2%AB%E6%8E%927%E5%A4%A9%E7%8F%AD%E6%9C%AA%E5%8E%BB%E9%81%AD%E5%BC%80%E9%99%A4)
1. [周鸿祎攀岩摔骨折](https://www.zhihu.com/search?q=%E5%91%A8%E9%B8%BF%E7%A5%8E%E6%94%80%E5%B2%A9%E6%91%94%E9%AA%A8%E6%8A%98)
1. [番茄小说签约新规](https://www.zhihu.com/search?q=%E7%95%AA%E8%8C%84%E5%B0%8F%E8%AF%B4%E7%AD%BE%E7%BA%A6%E6%96%B0%E8%A7%84)
1. [老人凌晨下地干活被气枪击中身亡](https://www.zhihu.com/search?q=%E8%80%81%E4%BA%BA%E5%87%8C%E6%99%A8%E4%B8%8B%E5%9C%B0%E5%B9%B2%E6%B4%BB%E8%A2%AB%E6%B0%94%E6%9E%AA%E5%87%BB%E4%B8%AD%E8%BA%AB%E4%BA%A1)
1. [胡歌称拍仙剑三很无聊](https://www.zhihu.com/search?q=%E8%83%A1%E6%AD%8C%E7%A7%B0%E6%8B%8D%E4%BB%99%E5%89%91%E4%B8%89%E5%BE%88%E6%97%A0%E8%81%8A)
1. [教师因成绩差被迫耻辱合影调查进度0%](https://www.zhihu.com/search?q=%E6%95%99%E5%B8%88%E5%9B%A0%E6%88%90%E7%BB%A9%E5%B7%AE%E8%A2%AB%E8%BF%AB%E8%80%BB%E8%BE%B1%E5%90%88%E5%BD%B1%E8%B0%83%E6%9F%A5%E8%BF%9B%E5%BA%A60%25)
1. [中科院回应付费可进天眼核心区](https://www.zhihu.com/search?q=%E4%B8%AD%E7%A7%91%E9%99%A2%E5%9B%9E%E5%BA%94%E4%BB%98%E8%B4%B9%E5%8F%AF%E8%BF%9B%E5%A4%A9%E7%9C%BC%E6%A0%B8%E5%BF%83%E5%8C%BA)
1. [饶毅曝某华人编辑收费200万帮发论文](https://www.zhihu.com/search?q=%E9%A5%B6%E6%AF%85%E6%9B%9D%E6%9F%90%E5%8D%8E%E4%BA%BA%E7%BC%96%E8%BE%91%E6%94%B6%E8%B4%B9200%E4%B8%87%E5%B8%AE%E5%8F%91%E8%AE%BA%E6%96%87)
1. [雅思考试10月14日全面恢复](https://www.zhihu.com/search?q=%E9%9B%85%E6%80%9D%E8%80%83%E8%AF%9510%E6%9C%8814%E6%97%A5%E5%85%A8%E9%9D%A2%E6%81%A2%E5%A4%8D)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Oct 14 2026 00:01:05 GMT+0800 (China Standard Time) -->

1. [雷波县教师被安排与「耻辱」二字合影，近 50 天仍未公布调查结果，为啥迟迟不公布？调查的难点在哪儿？](https://www.zhihu.com/question/2093376100948599000)
1. [夫妻点一杯58元咖啡只能一人落座，市监局称「一人一座一消费」合理与否不能一刀切判定，如何理解此事？](https://www.zhihu.com/question/2093309415939991600)
1. [如何看待Andrej Karpathy提出「AI能力认知漏斗」，少数专业人士已开始有「眩晕感」？](https://www.zhihu.com/question/2092928330336925400)
1. [《灌篮高手》中樱木的天赋肉眼可见，但是为什么不受一些球队教练的重视？](https://www.zhihu.com/question/496805335)
1. [老人凌晨下地干活被气枪击中身亡，持气枪打猎合法吗？案件还有哪些疑点待查？涉事人员将承担什么法律责任？](https://www.zhihu.com/question/2093446305422862300)
1. [PS5 全机型遭底层漏洞破解，会对索尼主机生态产生哪些冲击？](https://www.zhihu.com/question/2088701899113489200)
1. [为什么咒术回战不义游戏一个辅助类技能可以打死特级咒灵？](https://www.zhihu.com/question/492417685)
1. [朱琳真的美貌绝伦吗？为什么我看央视版《西游记》时觉得女儿国国王出场无感，蝎子精出场才有惊艳的感觉？](https://www.zhihu.com/question/418887484)
1. [为什么这么多人讨厌陈岩石夫妇在饭桌上向沙瑞金告状的行为？](https://www.zhihu.com/question/2090843777707537400)
1. [同姓的人一定拥有共同的祖先吗？](https://www.zhihu.com/question/2091486108169379800)
1. [2027国考笔试公告发布，共计划招录3.57万人，笔试11月29日举行，今年有哪些变化？](https://www.zhihu.com/question/2093290893197272800)
1. [你们认为芯片圈里哪家公司的产品命名最为混乱？](https://www.zhihu.com/question/1949264896328967000)
1. [问界汽车拟于2027年进入欧洲市场，赛力斯曾表示正推进问界车型全系出海，在海外还能复制国内热度吗？](https://www.zhihu.com/question/2092949973788784000)
1. [刘国梁16岁女儿刘宇婕登顶高尔夫中国女子公开赛，成赛事创办以来首位业余冠军，哪些信息值得关注？](https://www.zhihu.com/question/2093019602653536800)
1. [有的孩子膝盖摔破了贴上创可贴还继续玩，有的稍微摔下什么伤都没有还哭成泪人，背后的真相是什么？](https://www.zhihu.com/question/2092888914705003000)
1. [如何评价动画电影《小猪佩奇·完美假期》？](https://www.zhihu.com/question/2088300737918940400)
1. [方便面煮着吃为什么比泡着吃更香？](https://www.zhihu.com/question/2088359008025559600)
1. [江淮汽车股价一度大涨近 9%，这一轮上涨是否预示市场情绪迎来反转？涨势能持续多久？](https://www.zhihu.com/question/2093296082310665200)
1. [2026 年诺贝尔经济学奖表彰宏观经济研究，为什么经济学家仍难以预测经济危机？](https://www.zhihu.com/question/2093043982565470200)
1. [出去旅行有必要发朋友圈嘛?](https://www.zhihu.com/question/1929353795504170200)
1. [如果你有25万的存款，面对1500的衣服裤子你会不会犹豫啊？](https://www.zhihu.com/question/2092975777457378800)
1. [为什么李一桐演技一般，但每部电视都是女一？](https://www.zhihu.com/question/405929670)
1. [如何煎鱼才能不破皮？](https://www.zhihu.com/question/19980542)
1. [有没有比较有用但中学不学的数学定理？](https://www.zhihu.com/question/1993382909286048000)
1. [网友称村上春树每天凌晨4点起、晚9点睡，一天工作5小时，剩余时间休息，真的吗？这样的生活方式健康吗？](https://www.zhihu.com/question/2091885563032727600)
1. [为什么DNF没以前好玩了？](https://www.zhihu.com/question/654508619)
1. [新能源车没备胎，自驾游该不该自己买一个？不买的人是真懂车，还是心大？](https://www.zhihu.com/question/2087602058774029000)
1. [为什么医院验血要抽好几管血？为什么不能一管多用？](https://www.zhihu.com/question/2081195847480619000)
1. [关机再开机和重启有什么区别？](https://www.zhihu.com/question/657921447)
1. [如果给你 1000 元「改造基金」，你最想解决身边的哪个「小麻烦」？](https://www.zhihu.com/question/2090472553051415300)

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
<!-- 最后更新时间 Wed Oct 14 2026 00:07:37 GMT+0800 (China Standard Time) -->

1. [新时代中多命运共同体](https://s.weibo.com//weibo?q=%23%E6%96%B0%E6%97%B6%E4%BB%A3%E4%B8%AD%E5%A4%9A%E5%91%BD%E8%BF%90%E5%85%B1%E5%90%8C%E4%BD%93%23&Refer=new_time)
1. [红果短剧千万别下载](https://s.weibo.com//weibo?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%8D%83%E4%B8%87%E5%88%AB%E4%B8%8B%E8%BD%BD&t=31&band_rank=1&Refer=top)
1. [吃播网红干饭莹去世](https://s.weibo.com//weibo?q=%E5%90%83%E6%92%AD%E7%BD%91%E7%BA%A2%E5%B9%B2%E9%A5%AD%E8%8E%B9%E5%8E%BB%E4%B8%96&t=31&band_rank=2&Refer=top)
1. [永不褪色的红飘带](https://s.weibo.com//weibo?q=%E6%B0%B8%E4%B8%8D%E8%A4%AA%E8%89%B2%E7%9A%84%E7%BA%A2%E9%A3%98%E5%B8%A6&t=31&band_rank=3&Refer=top)
1. [老人凌晨下地干活被气枪击中身亡](https://s.weibo.com//weibo?q=%23%E8%80%81%E4%BA%BA%E5%87%8C%E6%99%A8%E4%B8%8B%E5%9C%B0%E5%B9%B2%E6%B4%BB%E8%A2%AB%E6%B0%94%E6%9E%AA%E5%87%BB%E4%B8%AD%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=4&Refer=top)
1. [79岁老干妈陶华碧用AI一年赚54亿](https://s.weibo.com//weibo?q=%2379%E5%B2%81%E8%80%81%E5%B9%B2%E5%A6%88%E9%99%B6%E5%8D%8E%E7%A2%A7%E7%94%A8AI%E4%B8%80%E5%B9%B4%E8%B5%9A54%E4%BA%BF%23&t=31&band_rank=5&Refer=top)
1. [33岁销冠确诊胃癌晚期突然被辞退](https://s.weibo.com//weibo?q=%2333%E5%B2%81%E9%94%80%E5%86%A0%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%AA%81%E7%84%B6%E8%A2%AB%E8%BE%9E%E9%80%80%23&t=31&band_rank=6&Refer=top)
1. [第一个抵制粉丝云包场的艺人](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8A%B5%E5%88%B6%E7%B2%89%E4%B8%9D%E4%BA%91%E5%8C%85%E5%9C%BA%E7%9A%84%E8%89%BA%E4%BA%BA&t=31&band_rank=7&Refer=top)
1. [百果园2年亏掉了7个亿](https://s.weibo.com//weibo?q=%23%E7%99%BE%E6%9E%9C%E5%9B%AD2%E5%B9%B4%E4%BA%8F%E6%8E%89%E4%BA%867%E4%B8%AA%E4%BA%BF%23&t=31&band_rank=8&Refer=top)
1. [疑似肖战经纪人朋友圈](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E8%82%96%E6%88%98%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23&t=31&band_rank=9&Refer=top)
1. [10岁女童被男老师摸脸家长索赔20万](https://s.weibo.com//weibo?q=%2310%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E7%94%B7%E8%80%81%E5%B8%88%E6%91%B8%E8%84%B8%E5%AE%B6%E9%95%BF%E7%B4%A2%E8%B5%9420%E4%B8%87%23&t=31&band_rank=10&Refer=top)
1. [金晨说王楚然在现发撒得开](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%A8%E8%AF%B4%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9C%A8%E7%8E%B0%E5%8F%91%E6%92%92%E5%BE%97%E5%BC%80%23&t=31&band_rank=11&Refer=top)
1. [王星被胁迫借下的网贷该不该还](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%98%9F%E8%A2%AB%E8%83%81%E8%BF%AB%E5%80%9F%E4%B8%8B%E7%9A%84%E7%BD%91%E8%B4%B7%E8%AF%A5%E4%B8%8D%E8%AF%A5%E8%BF%98&t=31&band_rank=12&Refer=top)
1. [警方已确认与未成年金赛纶交往男星](https://s.weibo.com//weibo?q=%23%E8%AD%A6%E6%96%B9%E5%B7%B2%E7%A1%AE%E8%AE%A4%E4%B8%8E%E6%9C%AA%E6%88%90%E5%B9%B4%E9%87%91%E8%B5%9B%E7%BA%B6%E4%BA%A4%E5%BE%80%E7%94%B7%E6%98%9F%23&t=31&band_rank=13&Refer=top)
1. [手机不好卖了](https://s.weibo.com//weibo?q=%23%E6%89%8B%E6%9C%BA%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23&t=31&band_rank=14&Refer=top)
1. [厚本回应特殊面容](https://s.weibo.com//weibo?q=%23%E5%8E%9A%E6%9C%AC%E5%9B%9E%E5%BA%94%E7%89%B9%E6%AE%8A%E9%9D%A2%E5%AE%B9%23&t=31&band_rank=15&Refer=top)
1. [女子高铁上和男友开免提打1小时电话](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E4%B8%8A%E5%92%8C%E7%94%B7%E5%8F%8B%E5%BC%80%E5%85%8D%E6%8F%90%E6%89%931%E5%B0%8F%E6%97%B6%E7%94%B5%E8%AF%9D%23&t=31&band_rank=16&Refer=top)
1. [肖战全票发售撕开行业潜规则遮羞布](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%85%A8%E7%A5%A8%E5%8F%91%E5%94%AE%E6%92%95%E5%BC%80%E8%A1%8C%E4%B8%9A%E6%BD%9C%E8%A7%84%E5%88%99%E9%81%AE%E7%BE%9E%E5%B8%83%23&t=31&band_rank=17&Refer=top)
1. [送1.9元汽水患者连续投诉医生2年](https://s.weibo.com//weibo?q=%23%E9%80%811.9%E5%85%83%E6%B1%BD%E6%B0%B4%E6%82%A3%E8%80%85%E8%BF%9E%E7%BB%AD%E6%8A%95%E8%AF%89%E5%8C%BB%E7%94%9F2%E5%B9%B4%23&t=31&band_rank=18&Refer=top)
1. [黄奇帆接受审查调查](https://s.weibo.com//weibo?q=%23%E9%BB%84%E5%A5%87%E5%B8%86%E6%8E%A5%E5%8F%97%E5%AE%A1%E6%9F%A5%E8%B0%83%E6%9F%A5%23&t=31&band_rank=19&Refer=top)
1. [郑钦文讲述摘掉父亲帽子的原因](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%AE%B2%E8%BF%B0%E6%91%98%E6%8E%89%E7%88%B6%E4%BA%B2%E5%B8%BD%E5%AD%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=20&Refer=top)
1. [苹果发布会](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A&t=31&band_rank=21&Refer=top)
1. [中国互联网进入字节时间](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E8%BF%9B%E5%85%A5%E5%AD%97%E8%8A%82%E6%97%B6%E9%97%B4&t=31&band_rank=22&Refer=top)
1. [小酒窝被医生夸比着尺子长的](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%A4%B8%E6%AF%94%E7%9D%80%E5%B0%BA%E5%AD%90%E9%95%BF%E7%9A%84%23&t=31&band_rank=23&Refer=top)
1. [何洁明显是朝着蔡依林的路线打造的](https://s.weibo.com//weibo?q=%23%E4%BD%95%E6%B4%81%E6%98%8E%E6%98%BE%E6%98%AF%E6%9C%9D%E7%9D%80%E8%94%A1%E4%BE%9D%E6%9E%97%E7%9A%84%E8%B7%AF%E7%BA%BF%E6%89%93%E9%80%A0%E7%9A%84%23&t=31&band_rank=24&Refer=top)
1. [真实姓名被9年未联系友人用作昵称](https://s.weibo.com//weibo?q=%23%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E8%A2%AB9%E5%B9%B4%E6%9C%AA%E8%81%94%E7%B3%BB%E5%8F%8B%E4%BA%BA%E7%94%A8%E4%BD%9C%E6%98%B5%E7%A7%B0%23&t=31&band_rank=25&Refer=top)
1. [金秀贤金赛纶反转再反转](https://s.weibo.com//weibo?q=%E9%87%91%E7%A7%80%E8%B4%A4%E9%87%91%E8%B5%9B%E7%BA%B6%E5%8F%8D%E8%BD%AC%E5%86%8D%E5%8F%8D%E8%BD%AC&t=31&band_rank=26&Refer=top)
1. [空气炸锅终于对葡萄下手了](https://s.weibo.com//weibo?q=%23%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%BB%88%E4%BA%8E%E5%AF%B9%E8%91%A1%E8%90%84%E4%B8%8B%E6%89%8B%E4%BA%86%23&t=31&band_rank=27&Refer=top)
1. [玉簟秋](https://s.weibo.com//weibo?q=%E7%8E%89%E7%B0%9F%E7%A7%8B&t=31&band_rank=28&Refer=top)
1. [国考岗位向应届生倾斜](https://s.weibo.com//weibo?q=%E5%9B%BD%E8%80%83%E5%B2%97%E4%BD%8D%E5%90%91%E5%BA%94%E5%B1%8A%E7%94%9F%E5%80%BE%E6%96%9C&t=31&band_rank=29&Refer=top)
1. [泰国 演唱会](https://s.weibo.com//weibo?q=%E6%B3%B0%E5%9B%BD%20%E6%BC%94%E5%94%B1%E4%BC%9A&t=31&band_rank=30&Refer=top)
1. [郑钦文教练用中文提问网友](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%95%99%E7%BB%83%E7%94%A8%E4%B8%AD%E6%96%87%E6%8F%90%E9%97%AE%E7%BD%91%E5%8F%8B%23&t=31&band_rank=31&Refer=top)
1. [点陌生链接后手机黑屏4万没了](https://s.weibo.com//weibo?q=%23%E7%82%B9%E9%99%8C%E7%94%9F%E9%93%BE%E6%8E%A5%E5%90%8E%E6%89%8B%E6%9C%BA%E9%BB%91%E5%B1%8F4%E4%B8%87%E6%B2%A1%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [原来胃也是需要锻炼的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E8%83%83%E4%B9%9F%E6%98%AF%E9%9C%80%E8%A6%81%E9%94%BB%E7%82%BC%E7%9A%84&t=31&band_rank=33&Refer=top)
1. [虞书欣请粉丝吃阳光玫瑰](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%AF%B7%E7%B2%89%E4%B8%9D%E5%90%83%E9%98%B3%E5%85%89%E7%8E%AB%E7%91%B0%23&t=31&band_rank=34&Refer=top)
1. [哥哥死因不明直到有了弟弟才知道](https://s.weibo.com//weibo?q=%23%E5%93%A5%E5%93%A5%E6%AD%BB%E5%9B%A0%E4%B8%8D%E6%98%8E%E7%9B%B4%E5%88%B0%E6%9C%89%E4%BA%86%E5%BC%9F%E5%BC%9F%E6%89%8D%E7%9F%A5%E9%81%93%23&t=31&band_rank=35&Refer=top)
1. [穆祉丞直播秒售罄](https://s.weibo.com//weibo?q=%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9B%B4%E6%92%AD%E7%A7%92%E5%94%AE%E7%BD%84&t=31&band_rank=36&Refer=top)
1. [香港捣毁跨国卖淫集团年龄20至86岁](https://s.weibo.com//weibo?q=%23%E9%A6%99%E6%B8%AF%E6%8D%A3%E6%AF%81%E8%B7%A8%E5%9B%BD%E5%8D%96%E6%B7%AB%E9%9B%86%E5%9B%A2%E5%B9%B4%E9%BE%8420%E8%87%B386%E5%B2%81%23&t=31&band_rank=37&Refer=top)
1. [苹果发布三款智能家居产品](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%B8%89%E6%AC%BE%E6%99%BA%E8%83%BD%E5%AE%B6%E5%B1%85%E4%BA%A7%E5%93%81%23&t=31&band_rank=38&Refer=top)
1. [郑钦文曾下跪恳求教练收徒](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%9B%BE%E4%B8%8B%E8%B7%AA%E6%81%B3%E6%B1%82%E6%95%99%E7%BB%83%E6%94%B6%E5%BE%92%23&t=31&band_rank=39&Refer=top)
1. [TVB是怎么报道郑钦文勇夺中网冠军的](https://s.weibo.com//weibo?q=%23TVB%E6%98%AF%E6%80%8E%E4%B9%88%E6%8A%A5%E9%81%93%E9%83%91%E9%92%A6%E6%96%87%E5%8B%87%E5%A4%BA%E4%B8%AD%E7%BD%91%E5%86%A0%E5%86%9B%E7%9A%84%23&t=31&band_rank=40&Refer=top)
1. [领导把我的房间当成他自己家了](https://s.weibo.com//weibo?q=%E9%A2%86%E5%AF%BC%E6%8A%8A%E6%88%91%E7%9A%84%E6%88%BF%E9%97%B4%E5%BD%93%E6%88%90%E4%BB%96%E8%87%AA%E5%B7%B1%E5%AE%B6%E4%BA%86&t=31&band_rank=41&Refer=top)
1. [特朗普被泽连斯基气得不轻](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E6%B0%94%E5%BE%97%E4%B8%8D%E8%BD%BB%23&t=31&band_rank=42&Refer=top)
1. [一年级小朋友笔画顺序全军覆没](https://s.weibo.com//weibo?q=%E4%B8%80%E5%B9%B4%E7%BA%A7%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%AC%94%E7%94%BB%E9%A1%BA%E5%BA%8F%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1&t=31&band_rank=43&Refer=top)
1. [杨蓉值得一个最佳女主](https://s.weibo.com//weibo?q=%E6%9D%A8%E8%93%89%E5%80%BC%E5%BE%97%E4%B8%80%E4%B8%AA%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB&t=31&band_rank=44&Refer=top)
1. [饭桌教育的含金量还在上升](https://s.weibo.com//weibo?q=%E9%A5%AD%E6%A1%8C%E6%95%99%E8%82%B2%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87&t=31&band_rank=45&Refer=top)
1. [NewJeans和A2O审美对比](https://s.weibo.com//weibo?q=NewJeans%E5%92%8CA2O%E5%AE%A1%E7%BE%8E%E5%AF%B9%E6%AF%94&t=31&band_rank=46&Refer=top)
1. [心梗脑梗高发期到了](https://s.weibo.com//weibo?q=%23%E5%BF%83%E6%A2%97%E8%84%91%E6%A2%97%E9%AB%98%E5%8F%91%E6%9C%9F%E5%88%B0%E4%BA%86%23&t=31&band_rank=47&Refer=top)
1. [家有儿女早就教了我们正确的爱情观](https://s.weibo.com//weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E6%97%A9%E5%B0%B1%E6%95%99%E4%BA%86%E6%88%91%E4%BB%AC%E6%AD%A3%E7%A1%AE%E7%9A%84%E7%88%B1%E6%83%85%E8%A7%82%23&t=31&band_rank=48&Refer=top)
1. [打开了一本名为刻薄的书](https://s.weibo.com//weibo?q=%E6%89%93%E5%BC%80%E4%BA%86%E4%B8%80%E6%9C%AC%E5%90%8D%E4%B8%BA%E5%88%BB%E8%96%84%E7%9A%84%E4%B9%A6&t=31&band_rank=49&Refer=top)
1. [李善宝 咩咩](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%96%84%E5%AE%9D%20%E5%92%A9%E5%92%A9&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
