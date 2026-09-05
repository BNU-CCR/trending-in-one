# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-06 00:06:24

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
<!-- 最后更新时间 Sat Sep 05 2026 22:00:57 GMT+0800 (China Standard Time) -->

1. [张雪机车获第三名](https://so.toutiao.com/search?keyword=张雪机车获第三名)
1. [泥石流获救中国公民：一度不敢相信](https://so.toutiao.com/search?keyword=泥石流获救中国公民：一度不敢相信)
1. [未来五年 健康生活“新”在哪](https://so.toutiao.com/search?keyword=未来五年%20健康生活“新”在哪)
1. [iPhone 18系列售价曝光](https://so.toutiao.com/search?keyword=iPhone%2018系列售价曝光)
1. [超1万册永乐大典副本下落不明](https://so.toutiao.com/search?keyword=超1万册永乐大典副本下落不明)
1. [张家齐13岁赚了81万](https://so.toutiao.com/search?keyword=张家齐13岁赚了81万)
1. [江西省委书记尹弘到遂川指挥救援](https://so.toutiao.com/search?keyword=江西省委书记尹弘到遂川指挥救援)
1. [吉隆泥石流发生23分钟后航拍首公开](https://so.toutiao.com/search?keyword=吉隆泥石流发生23分钟后航拍首公开)
1. [普京斥乌克兰将人民像狗一样赶上前线](https://so.toutiao.com/search?keyword=普京斥乌克兰将人民像狗一样赶上前线)
1. [菲法院为何下令逮捕副总统](https://so.toutiao.com/search?keyword=菲法院为何下令逮捕副总统)
1. [港姐王菲与歌手张子丰宣布订婚](https://so.toutiao.com/search?keyword=港姐王菲与歌手张子丰宣布订婚)
1. [问界辟谣生产“预制车”：已报案](https://so.toutiao.com/search?keyword=问界辟谣生产“预制车”：已报案)
1. [普京宣布停止打击基辅3天](https://so.toutiao.com/search?keyword=普京宣布停止打击基辅3天)
1. [DeepSeek被曝将采购16万颗华为芯片](https://so.toutiao.com/search?keyword=DeepSeek被曝将采购16万颗华为芯片)
1. [女子40万租房2年退租被要求换新家具](https://so.toutiao.com/search?keyword=女子40万租房2年退租被要求换新家具)
1. [江西遂川泥石流失联11人身份确认](https://so.toutiao.com/search?keyword=江西遂川泥石流失联11人身份确认)
1. [来书圣故里打卡江南版葫芦娃](https://so.toutiao.com/search?keyword=来书圣故里打卡江南版葫芦娃)
1. [第一批戴运动手环的受害者出现了](https://so.toutiao.com/search?keyword=第一批戴运动手环的受害者出现了)
1. [特斯拉市值一夜蒸发超6000亿](https://so.toutiao.com/search?keyword=特斯拉市值一夜蒸发超6000亿)
1. [1岁裸体男童沙漠走失12小时被找到](https://so.toutiao.com/search?keyword=1岁裸体男童沙漠走失12小时被找到)
1. [小男孩还没进校园就上演“逃学”大戏](https://so.toutiao.com/search?keyword=小男孩还没进校园就上演“逃学”大戏)
1. [现实版葫芦娃爷爷爆火“蛇精”来打卡](https://so.toutiao.com/search?keyword=现实版葫芦娃爷爷爆火“蛇精”来打卡)
1. [车企“围攻”动力电池](https://so.toutiao.com/search?keyword=车企“围攻”动力电池)
1. [解放军20架次军机持续位台岛周边活动](https://so.toutiao.com/search?keyword=解放军20架次军机持续位台岛周边活动)
1. [欧洲把黄金从美国搬走意味着什么](https://so.toutiao.com/search?keyword=欧洲把黄金从美国搬走意味着什么)
1. [金晨回应恋情传闻](https://so.toutiao.com/search?keyword=金晨回应恋情传闻)
1. [警察在音乐节现场全程背对舞台](https://so.toutiao.com/search?keyword=警察在音乐节现场全程背对舞台)
1. [全球最大主权基金拟撤掉“安全席位”](https://so.toutiao.com/search?keyword=全球最大主权基金拟撤掉“安全席位”)
1. [乌无人艇可携带18架无人机拦截巡飞弹](https://so.toutiao.com/search?keyword=乌无人艇可携带18架无人机拦截巡飞弹)
1. [儿子考入军校 母亲含泪拥抱嘱咐](https://so.toutiao.com/search?keyword=儿子考入军校%20母亲含泪拥抱嘱咐)
1. [父亲送女儿到郑州上大学直呼高大上](https://so.toutiao.com/search?keyword=父亲送女儿到郑州上大学直呼高大上)
1. [王炳忠：乐见“台独”变统派](https://so.toutiao.com/search?keyword=王炳忠：乐见“台独”变统派)
1. [撒贝宁：只要不上班就来丹霞山](https://so.toutiao.com/search?keyword=撒贝宁：只要不上班就来丹霞山)
1. [工人因赊1碗面后连续吃121天](https://so.toutiao.com/search?keyword=工人因赊1碗面后连续吃121天)
1. [司机违法变道还怒怼交警被查出酒驾](https://so.toutiao.com/search?keyword=司机违法变道还怒怼交警被查出酒驾)
1. [机顶盒要消失了用户还会回来看电视吗](https://so.toutiao.com/search?keyword=机顶盒要消失了用户还会回来看电视吗)
1. [驻日美军为何频频在冲绳滋事](https://so.toutiao.com/search?keyword=驻日美军为何频频在冲绳滋事)
1. [离异男子带3个孩子 大女儿确诊白血病](https://so.toutiao.com/search?keyword=离异男子带3个孩子%20大女儿确诊白血病)
1. [评论员：俄乌战场变换作战思路](https://so.toutiao.com/search?keyword=评论员：俄乌战场变换作战思路)
1. [专家：俄罗斯南下布局亚太新棋局](https://so.toutiao.com/search?keyword=专家：俄罗斯南下布局亚太新棋局)
1. [陈丽君人走了手机落下了](https://so.toutiao.com/search?keyword=陈丽君人走了手机落下了)
1. [教育部：坚决对师德失范行为零容忍](https://so.toutiao.com/search?keyword=教育部：坚决对师德失范行为零容忍)
1. [少年暑假送外卖最后一单收获祝福红包](https://so.toutiao.com/search?keyword=少年暑假送外卖最后一单收获祝福红包)
1. [剧本杀恋陪涉黄乱象](https://so.toutiao.com/search?keyword=剧本杀恋陪涉黄乱象)
1. [济南92岁老人夺世界冠军载誉返济](https://so.toutiao.com/search?keyword=济南92岁老人夺世界冠军载誉返济)
1. [尼泊尔泥石流1名受困中国公民获救](https://so.toutiao.com/search?keyword=尼泊尔泥石流1名受困中国公民获救)
1. [浙江加强山体切坡建房地灾风险防控](https://so.toutiao.com/search?keyword=浙江加强山体切坡建房地灾风险防控)
1. [葫芦娃爷爷拒收礼摆手全退回](https://so.toutiao.com/search?keyword=葫芦娃爷爷拒收礼摆手全退回)
1. [脂肪肝真的只是“吃得太好”吗](https://so.toutiao.com/search?keyword=脂肪肝真的只是“吃得太好”吗)
1. [为何人类不去开采水星上的金属](https://so.toutiao.com/search?keyword=为何人类不去开采水星上的金属)
1. [美总统特使抵达莫斯科](https://so.toutiao.com/search?keyword=美总统特使抵达莫斯科)
1. [8月中国物流需求保持扩张](https://so.toutiao.com/search?keyword=8月中国物流需求保持扩张)
1. [官方通报染色莴笋：6家企业被立案](https://so.toutiao.com/search?keyword=官方通报染色莴笋：6家企业被立案)
1. [轮椅老人上高架蓄意碰瓷？不实](https://so.toutiao.com/search?keyword=轮椅老人上高架蓄意碰瓷？不实)
1. [国家医保局探索居民医保年限折算](https://so.toutiao.com/search?keyword=国家医保局探索居民医保年限折算)
1. [“梅姨”画像更新](https://so.toutiao.com/search?keyword=“梅姨”画像更新)
1. [宝妈带娃坐飞机为其他乘客准备耳塞](https://so.toutiao.com/search?keyword=宝妈带娃坐飞机为其他乘客准备耳塞)
1. [2026搞笑诺贝尔奖揭晓](https://so.toutiao.com/search?keyword=2026搞笑诺贝尔奖揭晓)
1. [老楼加装电梯遭一楼住户反对](https://so.toutiao.com/search?keyword=老楼加装电梯遭一楼住户反对)
1. [中国安能80名骨干驰援江西遂川抢险](https://so.toutiao.com/search?keyword=中国安能80名骨干驰援江西遂川抢险)
1. [各国疯狂囤黄金意味着什么](https://so.toutiao.com/search?keyword=各国疯狂囤黄金意味着什么)
1. [《小喇叭》开播70周年](https://so.toutiao.com/search?keyword=《小喇叭》开播70周年)
1. [98岁老人25年捐款近6000万元](https://so.toutiao.com/search?keyword=98岁老人25年捐款近6000万元)
1. [专家：美访俄乌包含多重考量](https://so.toutiao.com/search?keyword=专家：美访俄乌包含多重考量)
1. [为何说特朗普为选举“急了”](https://so.toutiao.com/search?keyword=为何说特朗普为选举“急了”)
1. [郑大一附院连续三任院长落马](https://so.toutiao.com/search?keyword=郑大一附院连续三任院长落马)
1. [江西赣江发生洪水 武警投入救灾](https://so.toutiao.com/search?keyword=江西赣江发生洪水%20武警投入救灾)
1. [A股又走出10倍大牛股](https://so.toutiao.com/search?keyword=A股又走出10倍大牛股)
1. [俄军对乌多地实施集群打击](https://so.toutiao.com/search?keyword=俄军对乌多地实施集群打击)
1. [特朗普的“经济战争”谁为代价](https://so.toutiao.com/search?keyword=特朗普的“经济战争”谁为代价)
1. [胖东来天使城取消顾客演唱互动环节](https://so.toutiao.com/search?keyword=胖东来天使城取消顾客演唱互动环节)
1. [美企拼命挤进委内瑞拉有何目的](https://so.toutiao.com/search?keyword=美企拼命挤进委内瑞拉有何目的)
1. [男子与前女友纠纷被其现男友等打死](https://so.toutiao.com/search?keyword=男子与前女友纠纷被其现男友等打死)
1. [并非放隔夜才叫隔夜菜](https://so.toutiao.com/search?keyword=并非放隔夜才叫隔夜菜)
1. [美林肯号航母水兵父亲批特朗普](https://so.toutiao.com/search?keyword=美林肯号航母水兵父亲批特朗普)
1. [古天乐方回应网传被追债1.3亿](https://so.toutiao.com/search?keyword=古天乐方回应网传被追债1.3亿)
1. [两名美军水兵在巴达雅喝醉后打架](https://so.toutiao.com/search?keyword=两名美军水兵在巴达雅喝醉后打架)
1. [菲副总统莎拉缴纳保释金 逮捕令解除](https://so.toutiao.com/search?keyword=菲副总统莎拉缴纳保释金%20逮捕令解除)
1. [郑钦文美网对决凯斯](https://so.toutiao.com/search?keyword=郑钦文美网对决凯斯)
1. [小米18 Fold有多值得买](https://so.toutiao.com/search?keyword=小米18%20Fold有多值得买)
1. [8月大宗商品市场运行向好](https://so.toutiao.com/search?keyword=8月大宗商品市场运行向好)
1. [江西遂川山体滑坡已致1死11失联](https://so.toutiao.com/search?keyword=江西遂川山体滑坡已致1死11失联)
1. [江西高坪断水断电受灾照片曝光](https://so.toutiao.com/search?keyword=江西高坪断水断电受灾照片曝光)
1. [江西遂川大桥被冲毁无伤亡](https://so.toutiao.com/search?keyword=江西遂川大桥被冲毁无伤亡)
1. [男子杀妻抛尸山中 6年后警方找到尸体](https://so.toutiao.com/search?keyword=男子杀妻抛尸山中%206年后警方找到尸体)
1. [张雪机车今晚冲击第七冠](https://so.toutiao.com/search?keyword=张雪机车今晚冲击第七冠)
1. [女子配型救母发现非亲生称将起诉医院](https://so.toutiao.com/search?keyword=女子配型救母发现非亲生称将起诉医院)
1. [校长回应“9个老师守着12个娃”](https://so.toutiao.com/search?keyword=校长回应“9个老师守着12个娃”)
1. [小学回应家长自费买课桌：非强制](https://so.toutiao.com/search?keyword=小学回应家长自费买课桌：非强制)
1. [王思雨：美国女篮在身体上有绝对优势](https://so.toutiao.com/search?keyword=王思雨：美国女篮在身体上有绝对优势)
1. [莆田救援人员转移群众时发现多处漏电](https://so.toutiao.com/search?keyword=莆田救援人员转移群众时发现多处漏电)
1. [大衣哥朱之文演出排到了明年1月](https://so.toutiao.com/search?keyword=大衣哥朱之文演出排到了明年1月)
1. [尼泊尔泥石流已致1342人遇难](https://so.toutiao.com/search?keyword=尼泊尔泥石流已致1342人遇难)
1. [李月汝护照弄丢到底是谁的责任](https://so.toutiao.com/search?keyword=李月汝护照弄丢到底是谁的责任)
1. [马斯克给特斯拉埋了一颗巨雷吗](https://so.toutiao.com/search?keyword=马斯克给特斯拉埋了一颗巨雷吗)
1. [汤家凤呼吁取消英语主科地位](https://so.toutiao.com/search?keyword=汤家凤呼吁取消英语主科地位)
1. [江西省委书记尹弘带头捐款](https://so.toutiao.com/search?keyword=江西省委书记尹弘带头捐款)
1. [中国女篮不敌美国女篮](https://so.toutiao.com/search?keyword=中国女篮不敌美国女篮)
1. [教育部：让教师安心从教舒心从教](https://so.toutiao.com/search?keyword=教育部：让教师安心从教舒心从教)
1. [章泽天不抢话为什么成了一个问题](https://so.toutiao.com/search?keyword=章泽天不抢话为什么成了一个问题)
1. [父亲挑扁担送双胞胎姐妹上大学](https://so.toutiao.com/search?keyword=父亲挑扁担送双胞胎姐妹上大学)
1. [九月手机圈Pro Max大乱斗](https://so.toutiao.com/search?keyword=九月手机圈Pro%20Max大乱斗)
1. [特斯拉Cybercab未来能否进入中国](https://so.toutiao.com/search?keyword=特斯拉Cybercab未来能否进入中国)
1. [宫鲁鸣：和美国队交手对张子宇帮助大](https://so.toutiao.com/search?keyword=宫鲁鸣：和美国队交手对张子宇帮助大)
1. [记者探访暴雨过后的福建莆田园头村](https://so.toutiao.com/search?keyword=记者探访暴雨过后的福建莆田园头村)
1. [波兰否认与乌克兰讨论联合申办世界杯](https://so.toutiao.com/search?keyword=波兰否认与乌克兰讨论联合申办世界杯)
1. [解决台湾问题要正视两岸认知差异](https://so.toutiao.com/search?keyword=解决台湾问题要正视两岸认知差异)
1. [特朗普如何向美国经济“开战”](https://so.toutiao.com/search?keyword=特朗普如何向美国经济“开战”)
1. [樊振东留洋撬动全球商业机会](https://so.toutiao.com/search?keyword=樊振东留洋撬动全球商业机会)
1. [中阿“猎鹰盾牌-2026”演习有何亮点](https://so.toutiao.com/search?keyword=中阿“猎鹰盾牌-2026”演习有何亮点)
1. [安洗莹晋级中国大师赛女单决赛](https://so.toutiao.com/search?keyword=安洗莹晋级中国大师赛女单决赛)
1. [联合国：停止“小看”非洲](https://so.toutiao.com/search?keyword=联合国：停止“小看”非洲)
1. [孕妇凌晨羊水破裂 消防救援](https://so.toutiao.com/search?keyword=孕妇凌晨羊水破裂%20消防救援)
1. [射阳靶场东侧海域将组织实弹射击训练](https://so.toutiao.com/search?keyword=射阳靶场东侧海域将组织实弹射击训练)
1. [美国8月非农数据水分有多大](https://so.toutiao.com/search?keyword=美国8月非农数据水分有多大)
1. [大衣哥朱之文穿厨师服跳舞](https://so.toutiao.com/search?keyword=大衣哥朱之文穿厨师服跳舞)
1. [公司霸气回应日本打机床牌卡中国脖子](https://so.toutiao.com/search?keyword=公司霸气回应日本打机床牌卡中国脖子)
1. [稳步提升参保质量 推动“三医”协同发展](https://so.toutiao.com/search?keyword=稳步提升参保质量%20推动“三医”协同发展)
1. [张雪机车法国站排位赛包揽前二](https://so.toutiao.com/search?keyword=张雪机车法国站排位赛包揽前二)
1. [孩子上幼儿园想家上演“逃学威龙”](https://so.toutiao.com/search?keyword=孩子上幼儿园想家上演“逃学威龙”)
1. [贺娇龙母亲拒立雕像：别给县里增负担](https://so.toutiao.com/search?keyword=贺娇龙母亲拒立雕像：别给县里增负担)
1. [福建老城墙秒变防洪堤隔40公分洪水](https://so.toutiao.com/search?keyword=福建老城墙秒变防洪堤隔40公分洪水)
1. [“阔屏手机”风起 厂商纷纷跟进](https://so.toutiao.com/search?keyword=“阔屏手机”风起%20厂商纷纷跟进)
1. [美存储芯片光通信集体暴涨](https://so.toutiao.com/search?keyword=美存储芯片光通信集体暴涨)
1. [演员刘钧在公园跳广场舞被偶遇](https://so.toutiao.com/search?keyword=演员刘钧在公园跳广场舞被偶遇)
1. [联通在青岛大学与校方起冲突？假的](https://so.toutiao.com/search?keyword=联通在青岛大学与校方起冲突？假的)
1. [网友偶遇张馨予何捷广州看车](https://so.toutiao.com/search?keyword=网友偶遇张馨予何捷广州看车)
1. [德比斯花了20年才拿到第一个杆位](https://so.toutiao.com/search?keyword=德比斯花了20年才拿到第一个杆位)
1. [82岁朱幼麟在香港首驾张雪机车](https://so.toutiao.com/search?keyword=82岁朱幼麟在香港首驾张雪机车)
1. [一家三口吃水洗鸡蛋集体中毒](https://so.toutiao.com/search?keyword=一家三口吃水洗鸡蛋集体中毒)
1. [洪水侵袭“中国白茶第一镇”](https://so.toutiao.com/search?keyword=洪水侵袭“中国白茶第一镇”)
1. [新加坡谈52人在广西涉案被扣](https://so.toutiao.com/search?keyword=新加坡谈52人在广西涉案被扣)
1. [赵心童1-5不敌特鲁姆普无缘半决赛](https://so.toutiao.com/search?keyword=赵心童1-5不敌特鲁姆普无缘半决赛)
1. [马斯克的无人驾驶车是划时代产品吗](https://so.toutiao.com/search?keyword=马斯克的无人驾驶车是划时代产品吗)
1. [52名新加坡公民在广西被捕](https://so.toutiao.com/search?keyword=52名新加坡公民在广西被捕)
1. [乌克兰两大安全机构为何爆发枪战](https://so.toutiao.com/search?keyword=乌克兰两大安全机构为何爆发枪战)
1. [特朗普证实威特科夫库什纳将访问俄乌](https://so.toutiao.com/search?keyword=特朗普证实威特科夫库什纳将访问俄乌)
1. [41岁李念和14岁女儿跳舞](https://so.toutiao.com/search?keyword=41岁李念和14岁女儿跳舞)
1. [多国从美国运回黄金有何影响](https://so.toutiao.com/search?keyword=多国从美国运回黄金有何影响)
1. [俄为油库加装巨型“防无人机网”](https://so.toutiao.com/search?keyword=俄为油库加装巨型“防无人机网”)
1. [菲军警宣扬“中国威胁”有何企图](https://so.toutiao.com/search?keyword=菲军警宣扬“中国威胁”有何企图)
1. [穆里尼奥遭遇回归皇马后首败](https://so.toutiao.com/search?keyword=穆里尼奥遭遇回归皇马后首败)
1. [外交部点赞的两位救人英雄受表彰](https://so.toutiao.com/search?keyword=外交部点赞的两位救人英雄受表彰)
1. [为什么手机卖不动了反而要涨价](https://so.toutiao.com/search?keyword=为什么手机卖不动了反而要涨价)
1. [李跃勇当选河南驻马店市委书记](https://so.toutiao.com/search?keyword=李跃勇当选河南驻马店市委书记)
1. [男孩从38楼阳台爬下被楼下邻居拽住](https://so.toutiao.com/search?keyword=男孩从38楼阳台爬下被楼下邻居拽住)
1. [27岁网约车司机心梗去世留下俩女儿](https://so.toutiao.com/search?keyword=27岁网约车司机心梗去世留下俩女儿)
1. [许晴曾回应在《花少2》饭局遭冷落](https://so.toutiao.com/search?keyword=许晴曾回应在《花少2》饭局遭冷落)
1. [泽连斯基称乌国家安全局遭袭](https://so.toutiao.com/search?keyword=泽连斯基称乌国家安全局遭袭)
1. [佟丽娅与陈思诚合体带娃吃饭](https://so.toutiao.com/search?keyword=佟丽娅与陈思诚合体带娃吃饭)
1. [钓友帐篷里钻进2米长眼镜王蛇](https://so.toutiao.com/search?keyword=钓友帐篷里钻进2米长眼镜王蛇)
1. [解放军将派出兵力赴俄参加实兵演习](https://so.toutiao.com/search?keyword=解放军将派出兵力赴俄参加实兵演习)
1. [阿尔卡拉斯：吴易昺的打法不可思议](https://so.toutiao.com/search?keyword=阿尔卡拉斯：吴易昺的打法不可思议)
1. [山东省委书记省长带头捐款](https://so.toutiao.com/search?keyword=山东省委书记省长带头捐款)
1. [国防部回应台军方提交兵力整建计划](https://so.toutiao.com/search?keyword=国防部回应台军方提交兵力整建计划)
1. [本·西蒙斯重返NBA](https://so.toutiao.com/search?keyword=本·西蒙斯重返NBA)
1. [证监会开出2.55亿巨额罚单](https://so.toutiao.com/search?keyword=证监会开出2.55亿巨额罚单)
1. [欠百万绝望小伙学胖东来理念翻盘买车](https://so.toutiao.com/search?keyword=欠百万绝望小伙学胖东来理念翻盘买车)
1. [大V：高市早苗或对麻生太郎“宣战”](https://so.toutiao.com/search?keyword=大V：高市早苗或对麻生太郎“宣战”)
1. [如是书院学员辟谷一天只喝水吃5个枣](https://so.toutiao.com/search?keyword=如是书院学员辟谷一天只喝水吃5个枣)
1. [贺娇龙葬于父亲墓旁 母亲拒给立雕像](https://so.toutiao.com/search?keyword=贺娇龙葬于父亲墓旁%20母亲拒给立雕像)
1. [长期这样吃饭全身炎症上升](https://so.toutiao.com/search?keyword=长期这样吃饭全身炎症上升)
1. [研究发现每天吃够豆类高血压风险降低](https://so.toutiao.com/search?keyword=研究发现每天吃够豆类高血压风险降低)
1. [男子得知母亲去世大哭到无法开车](https://so.toutiao.com/search?keyword=男子得知母亲去世大哭到无法开车)
1. [媒体：电视该回归大屏的公共价值了](https://so.toutiao.com/search?keyword=媒体：电视该回归大屏的公共价值了)
1. [尼泊尔不向中国寻求气候正义赔偿](https://so.toutiao.com/search?keyword=尼泊尔不向中国寻求气候正义赔偿)
1. [我国目前有1870万名教师](https://so.toutiao.com/search?keyword=我国目前有1870万名教师)
1. [幼儿园萌娃沉迷“劳动”想不起来哭](https://so.toutiao.com/search?keyword=幼儿园萌娃沉迷“劳动”想不起来哭)
1. [33岁抗癌博主唐豆豆离世](https://so.toutiao.com/search?keyword=33岁抗癌博主唐豆豆离世)
1. [教育部回应“教师面对学生不敢管”](https://so.toutiao.com/search?keyword=教育部回应“教师面对学生不敢管”)
1. [马斯克再次“画大饼”还会有多少人信](https://so.toutiao.com/search?keyword=马斯克再次“画大饼”还会有多少人信)
1. [美航母停靠泰国 指挥官严令禁止嫖娼](https://so.toutiao.com/search?keyword=美航母停靠泰国%20指挥官严令禁止嫖娼)
1. [女生眼里进虫直接用手扒拉出来](https://so.toutiao.com/search?keyword=女生眼里进虫直接用手扒拉出来)
1. [十年后真会有十亿台机器人吗](https://so.toutiao.com/search?keyword=十年后真会有十亿台机器人吗)
1. [周冬雨会突然拉肚子](https://so.toutiao.com/search?keyword=周冬雨会突然拉肚子)
1. [刀郎官宣线上音乐会](https://so.toutiao.com/search?keyword=刀郎官宣线上音乐会)
1. [女高音歌唱家龚爽去世 年仅37岁](https://so.toutiao.com/search?keyword=女高音歌唱家龚爽去世%20年仅37岁)
1. [650亿桶石油为何压不住美国油价](https://so.toutiao.com/search?keyword=650亿桶石油为何压不住美国油价)
1. [越南追加30亿美元修铁路图什么](https://so.toutiao.com/search?keyword=越南追加30亿美元修铁路图什么)
1. [中国女篮失误次数是美国女篮两倍多](https://so.toutiao.com/search?keyword=中国女篮失误次数是美国女篮两倍多)
1. [Token经济要开始崩了吗](https://so.toutiao.com/search?keyword=Token经济要开始崩了吗)
1. [新生爸妈送学游变成“蜜月游”](https://so.toutiao.com/search?keyword=新生爸妈送学游变成“蜜月游”)
1. [普京：俄军最近推进速度明显加快](https://so.toutiao.com/search?keyword=普京：俄军最近推进速度明显加快)
1. [媒体：防止职校生实习成“法外飞地”](https://so.toutiao.com/search?keyword=媒体：防止职校生实习成“法外飞地”)
1. [中国男子在菲律宾移民局羁押中心去世](https://so.toutiao.com/search?keyword=中国男子在菲律宾移民局羁押中心去世)
1. [专家：美伊冲突升级与否受限于军力](https://so.toutiao.com/search?keyword=专家：美伊冲突升级与否受限于军力)
1. [暴雨袭击莆田 龙舟上阵转移群众](https://so.toutiao.com/search?keyword=暴雨袭击莆田%20龙舟上阵转移群众)
1. [美联储9月加息预期升温](https://so.toutiao.com/search?keyword=美联储9月加息预期升温)
1. [贵州秋假连着中秋国庆连休13天系谣言](https://so.toutiao.com/search?keyword=贵州秋假连着中秋国庆连休13天系谣言)
1. [外交部：已向韩方提出严正交涉](https://so.toutiao.com/search?keyword=外交部：已向韩方提出严正交涉)
1. [全国唯一有两所211高校县级市迎新生](https://so.toutiao.com/search?keyword=全国唯一有两所211高校县级市迎新生)
1. [美总统称赞美国“就业数据”](https://so.toutiao.com/search?keyword=美总统称赞美国“就业数据”)
1. [极端天气频发或将重塑保险定价逻辑](https://so.toutiao.com/search?keyword=极端天气频发或将重塑保险定价逻辑)
1. [菲律宾地方法院下令逮捕副总统莎拉](https://so.toutiao.com/search?keyword=菲律宾地方法院下令逮捕副总统莎拉)
1. [媒体：教师困境根子在校门之外](https://so.toutiao.com/search?keyword=媒体：教师困境根子在校门之外)
1. [女童电子病历被医生标注“刁蛮”](https://so.toutiao.com/search?keyword=女童电子病历被医生标注“刁蛮”)
1. [吉隆泥石流已致31人遇难531人失联](https://so.toutiao.com/search?keyword=吉隆泥石流已致31人遇难531人失联)
1. [王又又：高市亲手掐断日本经济命脉](https://so.toutiao.com/search?keyword=王又又：高市亲手掐断日本经济命脉)
1. [黄金市场风向如何变化](https://so.toutiao.com/search?keyword=黄金市场风向如何变化)
1. [24岁抗癌博主小詹去世](https://so.toutiao.com/search?keyword=24岁抗癌博主小詹去世)
1. [外媒被“广东造”新能源汽车圈粉](https://so.toutiao.com/search?keyword=外媒被“广东造”新能源汽车圈粉)
1. [中俄蒙开展“边防合作-2026”联演](https://so.toutiao.com/search?keyword=中俄蒙开展“边防合作-2026”联演)
1. [杨小菁当选河南许昌市委书记](https://so.toutiao.com/search?keyword=杨小菁当选河南许昌市委书记)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Sep 05 2026 21:52:19 GMT+0800 (China Standard Time) -->

1. [武汉大学教授曾梦琪被举报](https://www.zhihu.com/search?q=%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E6%95%99%E6%8E%88%E6%9B%BE%E6%A2%A6%E7%90%AA%E8%A2%AB%E4%B8%BE%E6%8A%A5)
1. [女子吃甜虾肠道爬出寄生虫](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E5%90%83%E7%94%9C%E8%99%BE%E8%82%A0%E9%81%93%E7%88%AC%E5%87%BA%E5%AF%84%E7%94%9F%E8%99%AB)
1. [搞笑诺贝尔奖来了：蟑螂奶获化学奖](https://www.zhihu.com/search?q=%E6%90%9E%E7%AC%91%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%A5%96%E6%9D%A5%E4%BA%86%EF%BC%9A%E8%9F%91%E8%9E%82%E5%A5%B6%E8%8E%B7%E5%8C%96%E5%AD%A6%E5%A5%96)
1. [GPT-6 正式发布](https://www.zhihu.com/search?q=GPT-6%20%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [乌克兰两大情报部门爆发枪战](https://www.zhihu.com/search?q=%E4%B9%8C%E5%85%8B%E5%85%B0%E4%B8%A4%E5%A4%A7%E6%83%85%E6%8A%A5%E9%83%A8%E9%97%A8%E7%88%86%E5%8F%91%E6%9E%AA%E6%88%98)
1. [羽衣甘蓝 农药](https://www.zhihu.com/search?q=%E7%BE%BD%E8%A1%A3%E7%94%98%E8%93%9D%20%E5%86%9C%E8%8D%AF)
1. [尊界销量或暴跌 90%](https://www.zhihu.com/search?q=%E5%B0%8A%E7%95%8C%E9%94%80%E9%87%8F%E6%88%96%E6%9A%B4%E8%B7%8C%2090%25)
1. [樊振东3-0胜鲁伊斯](https://www.zhihu.com/search?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C3-0%E8%83%9C%E9%B2%81%E4%BC%8A%E6%96%AF)
1. [iG 鏖战五局淘汰 TES](https://www.zhihu.com/search?q=iG%20%E9%8F%96%E6%88%98%E4%BA%94%E5%B1%80%E6%B7%98%E6%B1%B0%20TES)
1. [乌克兰两部门基辅交火](https://www.zhihu.com/search?q=%E4%B9%8C%E5%85%8B%E5%85%B0%E4%B8%A4%E9%83%A8%E9%97%A8%E5%9F%BA%E8%BE%85%E4%BA%A4%E7%81%AB)
1. [江西吉安山体滑坡十余人被埋](https://www.zhihu.com/search?q=%E6%B1%9F%E8%A5%BF%E5%90%89%E5%AE%89%E5%B1%B1%E4%BD%93%E6%BB%91%E5%9D%A1%E5%8D%81%E4%BD%99%E4%BA%BA%E8%A2%AB%E5%9F%8B)
1. [汤家凤呼吁取消英语主科地位](https://www.zhihu.com/search?q=%E6%B1%A4%E5%AE%B6%E5%87%A4%E5%91%BC%E5%90%81%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%E5%9C%B0%E4%BD%8D)
1. [Claude 完成费马大定理形式化证明](https://www.zhihu.com/search?q=Claude%20%E5%AE%8C%E6%88%90%E8%B4%B9%E9%A9%AC%E5%A4%A7%E5%AE%9A%E7%90%86%E5%BD%A2%E5%BC%8F%E5%8C%96%E8%AF%81%E6%98%8E)
1. [曝科大讯飞公关副总裁被解除职务](https://www.zhihu.com/search?q=%E6%9B%9D%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E5%85%AC%E5%85%B3%E5%89%AF%E6%80%BB%E8%A3%81%E8%A2%AB%E8%A7%A3%E9%99%A4%E8%81%8C%E5%8A%A1)
1. [乡音无改鬓毛shuāi远上寒山石径xié](https://www.zhihu.com/search?q=%E4%B9%A1%E9%9F%B3%E6%97%A0%E6%94%B9%E9%AC%93%E6%AF%9Bshu%C4%81i%E8%BF%9C%E4%B8%8A%E5%AF%92%E5%B1%B1%E7%9F%B3%E5%BE%84xi%C3%A9)
1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [山东产妇剖宫产身亡鉴定三度反转](https://www.zhihu.com/search?q=%E5%B1%B1%E4%B8%9C%E4%BA%A7%E5%A6%87%E5%89%96%E5%AE%AB%E4%BA%A7%E8%BA%AB%E4%BA%A1%E9%89%B4%E5%AE%9A%E4%B8%89%E5%BA%A6%E5%8F%8D%E8%BD%AC)
1. [人人影视回归变正版](https://www.zhihu.com/search?q=%E4%BA%BA%E4%BA%BA%E5%BD%B1%E8%A7%86%E5%9B%9E%E5%BD%92%E5%8F%98%E6%AD%A3%E7%89%88)
1. [孙宇晨最新发文](https://www.zhihu.com/search?q=%E5%AD%99%E5%AE%87%E6%99%A8%E6%9C%80%E6%96%B0%E5%8F%91%E6%96%87)
1. [张继科带教乒乓球一个半小时25元](https://www.zhihu.com/search?q=%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%B8%A6%E6%95%99%E4%B9%92%E4%B9%93%E7%90%83%E4%B8%80%E4%B8%AA%E5%8D%8A%E5%B0%8F%E6%97%B625%E5%85%83)
1. [官方通报星宇股份批量劝退应届生](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E6%89%B9%E9%87%8F%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F)
1. [充值1000误到账26419933亿元](https://www.zhihu.com/search?q=%E5%85%85%E5%80%BC1000%E8%AF%AF%E5%88%B0%E8%B4%A626419933%E4%BA%BF%E5%85%83)
1. [49岁公司高管接受临床试药后死亡](https://www.zhihu.com/search?q=49%E5%B2%81%E5%85%AC%E5%8F%B8%E9%AB%98%E7%AE%A1%E6%8E%A5%E5%8F%97%E4%B8%B4%E5%BA%8A%E8%AF%95%E8%8D%AF%E5%90%8E%E6%AD%BB%E4%BA%A1)
1. [ChatGPT等AI服务集体故障](https://www.zhihu.com/search?q=ChatGPT%E7%AD%89AI%E6%9C%8D%E5%8A%A1%E9%9B%86%E4%BD%93%E6%95%85%E9%9A%9C)
1. [美国 8 月非农数据公布](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%208%20%E6%9C%88%E9%9D%9E%E5%86%9C%E6%95%B0%E6%8D%AE%E5%85%AC%E5%B8%83)
1. [西藏泥石流已致 31 死 531 失联](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B4%2031%20%E6%AD%BB%20531%20%E5%A4%B1%E8%81%94)
1. [美国女篮 vs 中国女篮](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E5%A5%B3%E7%AF%AE%20vs%20%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Sep 06 2026 00:06:24 GMT+0800 (China Standard Time) -->

1. [考研数学名师汤家凤呼吁取消英语主科地位，你赞同吗？将对人才培养和学生发展带来哪些影响？](https://www.zhihu.com/question/2079506556077466600)
1. [德甲第四轮，樊振东第一盘3-0胜鲁伊斯，第四盘3-0 胜杜达锁定胜局，如何评价本场比赛？](https://www.zhihu.com/question/2079658519846807000)
1. [如何看待因被要求补缴社保，老板在店门口滚屏抱怨「选择员工需谨慎」？](https://www.zhihu.com/question/2079235027733423400)
1. [中国会出现公认的第五个一线城市吗?](https://www.zhihu.com/question/1965402803242529500)
1. [《周处除三害》导演新作《荡荡荡寇志》剧照流出，张家辉、阮经天、贾静雯造型颠覆，能复刻前作的口碑吗？](https://www.zhihu.com/question/2078796105559400700)
1. [如何看待乌克兰两大情报部门 GUR 和 SBU 爆发内讧，视频显示双方发生枪战？背后有何矛盾？](https://www.zhihu.com/question/2078445433446314500)
1. [明朝科技曾经领先世界，为啥没能像欧洲一样开启工业革命？是被清朝打断了，还是从根上就不行？](https://www.zhihu.com/question/2000764064549345000)
1. [LPL2026 赛季季后赛 iG 鏖战五局淘汰 TES，如何评价这场比赛？](https://www.zhihu.com/question/2079554956902900000)
1. [为何张继科退役后体脂率还是这么低？](https://www.zhihu.com/question/1899194637576574500)
1. [福建莆田特大暴雨一天下了北方多地全年降水量，有人员失联，宁德多地内涝，为什么雨量这么大？目前情况如何？](https://www.zhihu.com/question/2078856515239108900)
1. [你的学校发生过最扯的事是什么?](https://www.zhihu.com/question/635512035)
1. [美国『林肯』号航母现身油漆脱落、遍布锈迹，这在航母日常维护中属于正常现象吗？](https://www.zhihu.com/question/2079118182971920400)
1. [今年为什么各大手机厂商都在出阔折叠？](https://www.zhihu.com/question/2075539956064333800)
1. [王楚钦退赛「1000」分卫冕积分将清零，如何影响其世界排名及赛程？](https://www.zhihu.com/question/2079351258750641700)
1. [传播武汉大学举报 PDF 会涉嫌违法吗？如何从法律角度解读？](https://www.zhihu.com/question/2079244427155829800)
1. [联合国警告称升温1.5℃已无法避免，能做的只有压低超额升温，这是否意味着变暖要失控了？](https://www.zhihu.com/question/2079482537852811300)
1. [LPL2026 赛季季后赛 NIP 3:0 淘汰 JDG，如何评价这场比赛？](https://www.zhihu.com/question/2079643392087279000)
1. [惠灵顿牛排是什么？为什么这么火？](https://www.zhihu.com/question/486467119)
1. [解珍解宝两兄弟武艺差进天罡，为什么武艺高强的孙立却在地煞？](https://www.zhihu.com/question/661584251)
1. [有没有某个瞬间，你觉得做科研特扯淡?](https://www.zhihu.com/question/459918748)
1. [为什么当年小品《不差钱》要设计一个调侃「刀郎」的片段？](https://www.zhihu.com/question/2069940471808447500)
1. [中国武术是失传还是真不行？](https://www.zhihu.com/question/2053376006996726500)
1. [耿同学锤刘光慧、曲静的《Nature》论文涉数据造假，哪些信息值得关注？](https://www.zhihu.com/question/2079254543552837400)
1. [酒桌上问领导吃什么，对方说“随便”，此时该如何点菜？](https://www.zhihu.com/question/440187480)
1. [为什么感觉一下子大家都没钱了?](https://www.zhihu.com/question/660106748)
1. [如果人人都可以通过 AI 写代码，程序员还需要存在吗？未来的程序员的工作会是什么？](https://www.zhihu.com/question/2077824745589028600)
1. [在工作看不到未来，迷茫的时候该不该辞职呢？](https://www.zhihu.com/question/1999984986703544600)
1. [有的管理者在纠结要不要给员工做培训，感觉培训以后没什么用，就员工很快就忘记了，你觉得呢？](https://www.zhihu.com/question/2033810294439399700)
1. [山东一小学新校区被指气味刺鼻，有学生流鼻血，教育局称甲醛检测合格，可能是什么导致的？校方有哪些责任？](https://www.zhihu.com/question/2078948439694501600)
1. [人到中年怎样做才能让身体健康？](https://www.zhihu.com/question/2072578741826479400)

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
<!-- 最后更新时间 Sun Sep 06 2026 00:08:59 GMT+0800 (China Standard Time) -->

1. [习近平主席中亚中东之旅难忘瞬间](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%B8%BB%E5%B8%AD%E4%B8%AD%E4%BA%9A%E4%B8%AD%E4%B8%9C%E4%B9%8B%E6%97%85%E9%9A%BE%E5%BF%98%E7%9E%AC%E9%97%B4%23&Refer=new_time)
1. [贵中医二附院被捅伤医生仍在抢救](https://s.weibo.com//weibo?q=%23%E8%B4%B5%E4%B8%AD%E5%8C%BB%E4%BA%8C%E9%99%84%E9%99%A2%E8%A2%AB%E6%8D%85%E4%BC%A4%E5%8C%BB%E7%94%9F%E4%BB%8D%E5%9C%A8%E6%8A%A2%E6%95%91%23&t=31&band_rank=1&Refer=top)
1. [叶润泽淘汰](https://s.weibo.com//weibo?q=%E5%8F%B6%E6%B6%A6%E6%B3%BD%E6%B7%98%E6%B1%B0&t=31&band_rank=2&Refer=top)
1. [青春华章](https://s.weibo.com//weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%23&t=31&band_rank=3&Refer=top)
1. [编制不等于绝对稳定](https://s.weibo.com//weibo?q=%E7%BC%96%E5%88%B6%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%BB%9D%E5%AF%B9%E7%A8%B3%E5%AE%9A&t=31&band_rank=4&Refer=top)
1. [避孕药 血栓](https://s.weibo.com//weibo?q=%E9%81%BF%E5%AD%95%E8%8D%AF%20%E8%A1%80%E6%A0%93&t=31&band_rank=5&Refer=top)
1. [张雅琪被花少8剪掉了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E8%A2%AB%E8%8A%B1%E5%B0%918%E5%89%AA%E6%8E%89%E4%BA%86%23&t=31&band_rank=6&Refer=top)
1. [郑钦文vs凯斯](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87vs%E5%87%AF%E6%96%AF&t=31&band_rank=7&Refer=top)
1. [我一个变态的都觉得变态](https://s.weibo.com//weibo?q=%23%E6%88%91%E4%B8%80%E4%B8%AA%E5%8F%98%E6%80%81%E7%9A%84%E9%83%BD%E8%A7%89%E5%BE%97%E5%8F%98%E6%80%81%23&t=31&band_rank=8&Refer=top)
1. [医生说坚持为了那8%](https://s.weibo.com//weibo?q=%E5%8C%BB%E7%94%9F%E8%AF%B4%E5%9D%9A%E6%8C%81%E4%B8%BA%E4%BA%86%E9%82%A38%25&t=31&band_rank=9&Refer=top)
1. [鞠婧祎扇巴掌给我看爽了](https://s.weibo.com//weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%89%87%E5%B7%B4%E6%8E%8C%E7%BB%99%E6%88%91%E7%9C%8B%E7%88%BD%E4%BA%86%23&t=31&band_rank=10&Refer=top)
1. [取消英语主科 教育公平争议](https://s.weibo.com//weibo?q=%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%20%E6%95%99%E8%82%B2%E5%85%AC%E5%B9%B3%E4%BA%89%E8%AE%AE&t=31&band_rank=11&Refer=top)
1. [汤家凤邀请胡锡进公开辩论](https://s.weibo.com//weibo?q=%E6%B1%A4%E5%AE%B6%E5%87%A4%E9%82%80%E8%AF%B7%E8%83%A1%E9%94%A1%E8%BF%9B%E5%85%AC%E5%BC%80%E8%BE%A9%E8%AE%BA&t=31&band_rank=12&Refer=top)
1. [剧本杀 色情服务](https://s.weibo.com//weibo?q=%E5%89%A7%E6%9C%AC%E6%9D%80%20%E8%89%B2%E6%83%85%E6%9C%8D%E5%8A%A1&t=31&band_rank=13&Refer=top)
1. [蒙娜丽莎的舞蹈呢](https://s.weibo.com//weibo?q=%E8%92%99%E5%A8%9C%E4%B8%BD%E8%8E%8E%E7%9A%84%E8%88%9E%E8%B9%88%E5%91%A2&t=31&band_rank=14&Refer=top)
1. [获救中国公民爬到了隧道最高处](https://s.weibo.com//weibo?q=%23%E8%8E%B7%E6%95%91%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E7%88%AC%E5%88%B0%E4%BA%86%E9%9A%A7%E9%81%93%E6%9C%80%E9%AB%98%E5%A4%84%23&t=31&band_rank=15&Refer=top)
1. [郝熠然演唱会](https://s.weibo.com//weibo?q=%E9%83%9D%E7%86%A0%E7%84%B6%E6%BC%94%E5%94%B1%E4%BC%9A&t=31&band_rank=16&Refer=top)
1. [苹果折叠手机价格](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%8A%98%E5%8F%A0%E6%89%8B%E6%9C%BA%E4%BB%B7%E6%A0%BC%23&t=31&band_rank=17&Refer=top)
1. [彭博曝DeepSeek向华为订16万颗芯片](https://s.weibo.com//weibo?q=%E5%BD%AD%E5%8D%9A%E6%9B%9DDeepSeek%E5%90%91%E5%8D%8E%E4%B8%BA%E8%AE%A216%E4%B8%87%E9%A2%97%E8%8A%AF%E7%89%87&t=31&band_rank=18&Refer=top)
1. [贵中医二附院医生被捅伤警方已介入](https://s.weibo.com//weibo?q=%23%E8%B4%B5%E4%B8%AD%E5%8C%BB%E4%BA%8C%E9%99%84%E9%99%A2%E5%8C%BB%E7%94%9F%E8%A2%AB%E6%8D%85%E4%BC%A4%E8%AD%A6%E6%96%B9%E5%B7%B2%E4%BB%8B%E5%85%A5%23&t=31&band_rank=19&Refer=top)
1. [美林肯号水兵登陆芭提雅彻底放飞](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E6%9E%97%E8%82%AF%E5%8F%B7%E6%B0%B4%E5%85%B5%E7%99%BB%E9%99%86%E8%8A%AD%E6%8F%90%E9%9B%85%E5%BD%BB%E5%BA%95%E6%94%BE%E9%A3%9E%23&t=31&band_rank=20&Refer=top)
1. [Lisa空降成绩](https://s.weibo.com//weibo?q=Lisa%E7%A9%BA%E9%99%8D%E6%88%90%E7%BB%A9&t=31&band_rank=21&Refer=top)
1. [郝熠然](https://s.weibo.com//weibo?q=%E9%83%9D%E7%86%A0%E7%84%B6&t=31&band_rank=22&Refer=top)
1. [女子停捐不到一个月被催捐](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E5%81%9C%E6%8D%90%E4%B8%8D%E5%88%B0%E4%B8%80%E4%B8%AA%E6%9C%88%E8%A2%AB%E5%82%AC%E6%8D%90&t=31&band_rank=23&Refer=top)
1. [刘雯 避嫌](https://s.weibo.com//weibo?q=%E5%88%98%E9%9B%AF%20%E9%81%BF%E5%AB%8C&t=31&band_rank=24&Refer=top)
1. [罗云熙穿了润玉的衣服](https://s.weibo.com//weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E7%A9%BF%E4%BA%86%E6%B6%A6%E7%8E%89%E7%9A%84%E8%A1%A3%E6%9C%8D%23&t=31&band_rank=25&Refer=top)
1. [运动手环 皮炎](https://s.weibo.com//weibo?q=%E8%BF%90%E5%8A%A8%E6%89%8B%E7%8E%AF%20%E7%9A%AE%E7%82%8E&t=31&band_rank=26&Refer=top)
1. [拖拉机 不公平](https://s.weibo.com//weibo?q=%E6%8B%96%E6%8B%89%E6%9C%BA%20%E4%B8%8D%E5%85%AC%E5%B9%B3&t=31&band_rank=27&Refer=top)
1. [小县城的房子买了没人住](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%8E%BF%E5%9F%8E%E7%9A%84%E6%88%BF%E5%AD%90%E4%B9%B0%E4%BA%86%E6%B2%A1%E4%BA%BA%E4%BD%8F&t=31&band_rank=28&Refer=top)
1. [普京宣布停止打击基辅3天](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E5%AE%A3%E5%B8%83%E5%81%9C%E6%AD%A2%E6%89%93%E5%87%BB%E5%9F%BA%E8%BE%853%E5%A4%A9%23&t=31&band_rank=29&Refer=top)
1. [刘雯井柏然是姐夫而不是嫂子](https://s.weibo.com//weibo?q=%23%E5%88%98%E9%9B%AF%E4%BA%95%E6%9F%8F%E7%84%B6%E6%98%AF%E5%A7%90%E5%A4%AB%E8%80%8C%E4%B8%8D%E6%98%AF%E5%AB%82%E5%AD%90%23&t=31&band_rank=30&Refer=top)
1. [葫芦娃爷爷把葫芦剪掉了目击者发声](https://s.weibo.com//weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%E6%8A%8A%E8%91%AB%E8%8A%A6%E5%89%AA%E6%8E%89%E4%BA%86%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23&t=31&band_rank=31&Refer=top)
1. [才知道陈妍希儿子名字陈睦辰](https://s.weibo.com//weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E9%99%88%E5%A6%8D%E5%B8%8C%E5%84%BF%E5%AD%90%E5%90%8D%E5%AD%97%E9%99%88%E7%9D%A6%E8%BE%B0%23&t=31&band_rank=32&Refer=top)
1. [宋茜祝fx17周年快乐](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E8%8C%9C%E7%A5%9Dfx17%E5%91%A8%E5%B9%B4%E5%BF%AB%E4%B9%90%23&t=31&band_rank=33&Refer=top)
1. [有氧运动对男性有多重要](https://s.weibo.com//weibo?q=%E6%9C%89%E6%B0%A7%E8%BF%90%E5%8A%A8%E5%AF%B9%E7%94%B7%E6%80%A7%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81&t=31&band_rank=34&Refer=top)
1. [容易生气背后的深层原因](https://s.weibo.com//weibo?q=%E5%AE%B9%E6%98%93%E7%94%9F%E6%B0%94%E8%83%8C%E5%90%8E%E7%9A%84%E6%B7%B1%E5%B1%82%E5%8E%9F%E5%9B%A0&t=31&band_rank=35&Refer=top)
1. [第一次对韩国人做的饭产生食欲](https://s.weibo.com//weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%81%9A%E7%9A%84%E9%A5%AD%E4%BA%A7%E7%94%9F%E9%A3%9F%E6%AC%B2%23&t=31&band_rank=36&Refer=top)
1. [曾辉还是跑调了](https://s.weibo.com//weibo?q=%E6%9B%BE%E8%BE%89%E8%BF%98%E6%98%AF%E8%B7%91%E8%B0%83%E4%BA%86&t=31&band_rank=37&Refer=top)
1. [第21届金鹿奖获奖名单](https://s.weibo.com//weibo?q=%E7%AC%AC21%E5%B1%8A%E9%87%91%E9%B9%BF%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=38&Refer=top)
1. [恩佐策动哈兰德破门](https://s.weibo.com//weibo?q=%E6%81%A9%E4%BD%90%E7%AD%96%E5%8A%A8%E5%93%88%E5%85%B0%E5%BE%B7%E7%A0%B4%E9%97%A8&t=31&band_rank=39&Refer=top)
1. [刘琳琳被朋友说坏话](https://s.weibo.com//weibo?q=%E5%88%98%E7%90%B3%E7%90%B3%E8%A2%AB%E6%9C%8B%E5%8F%8B%E8%AF%B4%E5%9D%8F%E8%AF%9D&t=31&band_rank=40&Refer=top)
1. [杭州给井柏然热得没招了](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%BB%99%E4%BA%95%E6%9F%8F%E7%84%B6%E7%83%AD%E5%BE%97%E6%B2%A1%E6%8B%9B%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [曝iPhone18Pro灵动岛大瘦身](https://s.weibo.com//weibo?q=%23%E6%9B%9DiPhone18Pro%E7%81%B5%E5%8A%A8%E5%B2%9B%E5%A4%A7%E7%98%A6%E8%BA%AB%23&t=31&band_rank=42&Refer=top)
1. [李一桐正太扭腰](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%23&t=31&band_rank=43&Refer=top)
1. [樊振东 德甲复仇](https://s.weibo.com//weibo?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%20%E5%BE%B7%E7%94%B2%E5%A4%8D%E4%BB%87&t=31&band_rank=44&Refer=top)
1. [叶润泽rap好听](https://s.weibo.com//weibo?q=%E5%8F%B6%E6%B6%A6%E6%B3%BDrap%E5%A5%BD%E5%90%AC&t=31&band_rank=45&Refer=top)
1. [NIP横扫JDG](https://s.weibo.com//weibo?q=%23NIP%E6%A8%AA%E6%89%ABJDG%23&t=31&band_rank=46&Refer=top)
1. [F1](https://s.weibo.com//weibo?q=F1&t=31&band_rank=47&Refer=top)
1. [越南蝉联美国最大贸易逆差国](https://s.weibo.com//weibo?q=%23%E8%B6%8A%E5%8D%97%E8%9D%89%E8%81%94%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%A4%A7%E8%B4%B8%E6%98%93%E9%80%86%E5%B7%AE%E5%9B%BD%23&t=31&band_rank=48&Refer=top)
1. [羽衣甘蓝 农药](https://s.weibo.com//weibo?q=%E7%BE%BD%E8%A1%A3%E7%94%98%E8%93%9D%20%E5%86%9C%E8%8D%AF&t=31&band_rank=49&Refer=top)
1. [肖战给李宇春北京演唱会送花篮](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E7%BB%99%E6%9D%8E%E5%AE%87%E6%98%A5%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%81%E8%8A%B1%E7%AF%AE%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
