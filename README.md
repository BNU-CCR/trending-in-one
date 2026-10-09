# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-10 00:15:07

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
<!-- 最后更新时间 Fri Oct 09 2026 17:34:10 GMT+0800 (China Standard Time) -->

1. [五连胜！郑钦文重返中网四强](https://so.toutiao.com/search?keyword=五连胜！郑钦文重返中网四强)
1. [女儿谈101岁父亲106岁母亲长寿秘诀](https://so.toutiao.com/search?keyword=女儿谈101岁父亲106岁母亲长寿秘诀)
1. [老外“买买买”折射开放活力](https://so.toutiao.com/search?keyword=老外“买买买”折射开放活力)
1. [A股上演反转好戏 三大指数翻红](https://so.toutiao.com/search?keyword=A股上演反转好戏%20三大指数翻红)
1. [郭晶晶获授荣誉院士霍启刚直言骄傲](https://so.toutiao.com/search?keyword=郭晶晶获授荣誉院士霍启刚直言骄傲)
1. [“成都一小区楼顶埋7岁男童”为谣言](https://so.toutiao.com/search?keyword=“成都一小区楼顶埋7岁男童”为谣言)
1. [陈幸同晋级WTT中国大满贯女单四强](https://so.toutiao.com/search?keyword=陈幸同晋级WTT中国大满贯女单四强)
1. [王铮亮为中网比赛挑边](https://so.toutiao.com/search?keyword=王铮亮为中网比赛挑边)
1. [郭一鸣：A股探底回升秀出“大长腿”](https://so.toutiao.com/search?keyword=郭一鸣：A股探底回升秀出“大长腿”)
1. [第35届飞天奖](https://so.toutiao.com/search?keyword=第35届飞天奖)
1. [蒋万安谈台北市长选战：持续努力](https://so.toutiao.com/search?keyword=蒋万安谈台北市长选战：持续努力)
1. [螃蟹加柿子等于砒霜是谣言](https://so.toutiao.com/search?keyword=螃蟹加柿子等于砒霜是谣言)
1. [内存大涨 华为也扛不住了吗](https://so.toutiao.com/search?keyword=内存大涨%20华为也扛不住了吗)
1. [大衣哥成了朱楼村的“楚门”吗](https://so.toutiao.com/search?keyword=大衣哥成了朱楼村的“楚门”吗)
1. [大英博物馆两件康熙时期青花瓷遭损坏](https://so.toutiao.com/search?keyword=大英博物馆两件康熙时期青花瓷遭损坏)
1. [精诚矿业瞒报54人死亡41人获刑](https://so.toutiao.com/search?keyword=精诚矿业瞒报54人死亡41人获刑)
1. [被中国军舰“拉爆”的外舰身份引猜测](https://so.toutiao.com/search?keyword=被中国军舰“拉爆”的外舰身份引猜测)
1. [出轨多人的女局长巨额财产哪来的](https://so.toutiao.com/search?keyword=出轨多人的女局长巨额财产哪来的)
1. [沈春阳回应为何没让女儿参演](https://so.toutiao.com/search?keyword=沈春阳回应为何没让女儿参演)
1. [李子坝地下33米藏一亿现钞](https://so.toutiao.com/search?keyword=李子坝地下33米藏一亿现钞)
1. [巴基斯坦下场帮沙特打击胡塞了吗](https://so.toutiao.com/search?keyword=巴基斯坦下场帮沙特打击胡塞了吗)
1. [日本燃油车卡在死局里了吗](https://so.toutiao.com/search?keyword=日本燃油车卡在死局里了吗)
1. [《美人余》为何能成黑马都市剧](https://so.toutiao.com/search?keyword=《美人余》为何能成黑马都市剧)
1. [假期床车旅行爆火：三口6天仅花1600](https://so.toutiao.com/search?keyword=假期床车旅行爆火：三口6天仅花1600)
1. [博主：小米汽车改写汽车市场规则](https://so.toutiao.com/search?keyword=博主：小米汽车改写汽车市场规则)
1. [欧洲和中国打贸易战拿什么赢](https://so.toutiao.com/search?keyword=欧洲和中国打贸易战拿什么赢)
1. [高市早苗再提推进对华关系有何算盘](https://so.toutiao.com/search?keyword=高市早苗再提推进对华关系有何算盘)
1. [胡塞武装的“军火库”从哪来](https://so.toutiao.com/search?keyword=胡塞武装的“军火库”从哪来)
1. [高速免费最后一刻女子淡定缴费](https://so.toutiao.com/search?keyword=高速免费最后一刻女子淡定缴费)
1. [五角大楼将网络直播枪决凶手](https://so.toutiao.com/search?keyword=五角大楼将网络直播枪决凶手)
1. [比亚迪打响全年“收官战”](https://so.toutiao.com/search?keyword=比亚迪打响全年“收官战”)
1. [欧洲关上大门 俄天然气还能卖给谁](https://so.toutiao.com/search?keyword=欧洲关上大门%20俄天然气还能卖给谁)
1. [中国海警正告菲方：停止不实炒作](https://so.toutiao.com/search?keyword=中国海警正告菲方：停止不实炒作)
1. [张本美和吐槽松岛辉空：互不理解](https://so.toutiao.com/search?keyword=张本美和吐槽松岛辉空：互不理解)
1. [超级厄尔尼诺会让日常所需涨价吗](https://so.toutiao.com/search?keyword=超级厄尔尼诺会让日常所需涨价吗)
1. [博主：要关注资本市场微观交易现象](https://so.toutiao.com/search?keyword=博主：要关注资本市场微观交易现象)
1. [王曼昱/蒯曼晋级女双决赛](https://so.toutiao.com/search?keyword=王曼昱/蒯曼晋级女双决赛)
1. [泰国王后驾驶战机训练后落泪](https://so.toutiao.com/search?keyword=泰国王后驾驶战机训练后落泪)
1. [巴尔通科娃晋级中网女单半决赛](https://so.toutiao.com/search?keyword=巴尔通科娃晋级中网女单半决赛)
1. [《伟大的长征》央视一套今晚开播](https://so.toutiao.com/search?keyword=《伟大的长征》央视一套今晚开播)
1. [独库公路正式实施冬季封闭](https://so.toutiao.com/search?keyword=独库公路正式实施冬季封闭)
1. [为什么内镜筛查如此重要](https://so.toutiao.com/search?keyword=为什么内镜筛查如此重要)
1. [手机行业涨价潮持续蔓延](https://so.toutiao.com/search?keyword=手机行业涨价潮持续蔓延)
1. [外交部：菲方个别人士对中方倒打一耙](https://so.toutiao.com/search?keyword=外交部：菲方个别人士对中方倒打一耙)
1. [比亚迪：当前闪充车型订单需求旺盛](https://so.toutiao.com/search?keyword=比亚迪：当前闪充车型订单需求旺盛)
1. [华为nova16系列今日起涨价](https://so.toutiao.com/search?keyword=华为nova16系列今日起涨价)
1. [厄尔尼诺如何影响大宗商品市场](https://so.toutiao.com/search?keyword=厄尔尼诺如何影响大宗商品市场)
1. [退休年龄怎么定？佛山社保局解答](https://so.toutiao.com/search?keyword=退休年龄怎么定？佛山社保局解答)
1. [马斯克带母亲出席白宫颁奖礼](https://so.toutiao.com/search?keyword=马斯克带母亲出席白宫颁奖礼)
1. [全球感受到“日本加息”的效果了吗](https://so.toutiao.com/search?keyword=全球感受到“日本加息”的效果了吗)
1. [俄不明原因肺炎地区正解除防疫措施](https://so.toutiao.com/search?keyword=俄不明原因肺炎地区正解除防疫措施)
1. [山河奔赴 “数”观假日经济活力](https://so.toutiao.com/search?keyword=山河奔赴%20“数”观假日经济活力)
1. [松岛辉空/张本美和1-3申裕斌/林钟勋](https://so.toutiao.com/search?keyword=松岛辉空/张本美和1-3申裕斌/林钟勋)
1. [内娱女配“掀桌”式爆火背后](https://so.toutiao.com/search?keyword=内娱女配“掀桌”式爆火背后)
1. [外交部回应直呼高市早苗名字](https://so.toutiao.com/search?keyword=外交部回应直呼高市早苗名字)
1. [侯英超说张本美和变冷静了](https://so.toutiao.com/search?keyword=侯英超说张本美和变冷静了)
1. [俄研究员真的因为感染鼠疫而死亡吗](https://so.toutiao.com/search?keyword=俄研究员真的因为感染鼠疫而死亡吗)
1. [网传喀纳斯棕熊索食系AI编造](https://so.toutiao.com/search?keyword=网传喀纳斯棕熊索食系AI编造)
1. [C罗母亲称儿子本可体面离开国家队](https://so.toutiao.com/search?keyword=C罗母亲称儿子本可体面离开国家队)
1. [肺鼠疫可飞沫传播](https://so.toutiao.com/search?keyword=肺鼠疫可飞沫传播)
1. [博主：A股节后或迎“波段修复”](https://so.toutiao.com/search?keyword=博主：A股节后或迎“波段修复”)
1. [缅北电诈逃脱者的自救建议：别打车](https://so.toutiao.com/search?keyword=缅北电诈逃脱者的自救建议：别打车)
1. [唐驳虎：俄“鼠疫”惊动几大邻国](https://so.toutiao.com/search?keyword=唐驳虎：俄“鼠疫”惊动几大邻国)
1. [江苏公布2026年度社会保险缴费基数](https://so.toutiao.com/search?keyword=江苏公布2026年度社会保险缴费基数)
1. [透视2026年诺贝尔物理学奖](https://so.toutiao.com/search?keyword=透视2026年诺贝尔物理学奖)
1. [司机驱车3小时一招上下高速只花12元](https://so.toutiao.com/search?keyword=司机驱车3小时一招上下高速只花12元)
1. [余承东向霍震寰交付尊界V800](https://so.toutiao.com/search?keyword=余承东向霍震寰交付尊界V800)
1. [专家：与中国打贸易战救不了欧洲](https://so.toutiao.com/search?keyword=专家：与中国打贸易战救不了欧洲)
1. [日本政府拥核野心能得逞吗](https://so.toutiao.com/search?keyword=日本政府拥核野心能得逞吗)
1. [中方在联合国批驳日本再军事化图谋](https://so.toutiao.com/search?keyword=中方在联合国批驳日本再军事化图谋)
1. [巴西大选牵动金砖合作](https://so.toutiao.com/search?keyword=巴西大选牵动金砖合作)
1. [俄乌新一轮升级打击有何特点](https://so.toutiao.com/search?keyword=俄乌新一轮升级打击有何特点)
1. [土耳其一汽车迎面撞飞摩托致1死1伤](https://so.toutiao.com/search?keyword=土耳其一汽车迎面撞飞摩托致1死1伤)
1. [医生：40岁后一定要防猝死](https://so.toutiao.com/search?keyword=医生：40岁后一定要防猝死)
1. [中网黄金周核心数据出炉](https://so.toutiao.com/search?keyword=中网黄金周核心数据出炉)
1. [寒露节气田间地头好“丰”光](https://so.toutiao.com/search?keyword=寒露节气田间地头好“丰”光)
1. [普通人该不该追银行股](https://so.toutiao.com/search?keyword=普通人该不该追银行股)
1. [新郎婚礼当天去医院看病后离世](https://so.toutiao.com/search?keyword=新郎婚礼当天去医院看病后离世)
1. [美国正在截流黄金买盘吗](https://so.toutiao.com/search?keyword=美国正在截流黄金买盘吗)
1. [中国空间站将迎来首批外籍航天员](https://so.toutiao.com/search?keyword=中国空间站将迎来首批外籍航天员)
1. [中国旅美球员庞清方遭美国ICE拘留](https://so.toutiao.com/search?keyword=中国旅美球员庞清方遭美国ICE拘留)
1. [伊朗发生两起针对安全人员袭击致2死](https://so.toutiao.com/search?keyword=伊朗发生两起针对安全人员袭击致2死)
1. [长实集团将拆除香港一在建楼盘3栋楼](https://so.toutiao.com/search?keyword=长实集团将拆除香港一在建楼盘3栋楼)
1. [再提推进对华关系 高市又打什么算盘](https://so.toutiao.com/search?keyword=再提推进对华关系%20高市又打什么算盘)
1. [向佐曾因过量喝蛋白粉把肾喝成70岁](https://so.toutiao.com/search?keyword=向佐曾因过量喝蛋白粉把肾喝成70岁)
1. [中国少年手搓纸飞机打破国外垄断纪录](https://so.toutiao.com/search?keyword=中国少年手搓纸飞机打破国外垄断纪录)
1. [姚明谈给杨瀚森建议：不想误人子弟](https://so.toutiao.com/search?keyword=姚明谈给杨瀚森建议：不想误人子弟)
1. [贾冰回应为何喜欢和小沈阳合作](https://so.toutiao.com/search?keyword=贾冰回应为何喜欢和小沈阳合作)
1. [厄尔尼诺现象预计在12月达到峰值](https://so.toutiao.com/search?keyword=厄尔尼诺现象预计在12月达到峰值)
1. [打虎！张硕辅被查](https://so.toutiao.com/search?keyword=打虎！张硕辅被查)
1. [杜兰特欧文现身NBA中国赛训练](https://so.toutiao.com/search?keyword=杜兰特欧文现身NBA中国赛训练)
1. [缅北电诈逃脱者说当地全员赏金猎人](https://so.toutiao.com/search?keyword=缅北电诈逃脱者说当地全员赏金猎人)
1. [女子买牛肉丸被误会逃单商家公开监控](https://so.toutiao.com/search?keyword=女子买牛肉丸被误会逃单商家公开监控)
1. [余承东：手机芯片基本摆脱外部依赖](https://so.toutiao.com/search?keyword=余承东：手机芯片基本摆脱外部依赖)
1. [广东三水南山双节迎客近24万人次](https://so.toutiao.com/search?keyword=广东三水南山双节迎客近24万人次)
1. [如何看待欧洲反华决议高票通过](https://so.toutiao.com/search?keyword=如何看待欧洲反华决议高票通过)
1. [让长征故事代代相传](https://so.toutiao.com/search?keyword=让长征故事代代相传)
1. [央视披露紧急营救北斗卫星](https://so.toutiao.com/search?keyword=央视披露紧急营救北斗卫星)
1. [高血压是最常见的心血管疾病之一](https://so.toutiao.com/search?keyword=高血压是最常见的心血管疾病之一)
1. [诺奖得主获奖后上班欢呼一片](https://so.toutiao.com/search?keyword=诺奖得主获奖后上班欢呼一片)
1. [宇树科技股价较上市高点跌超60%](https://so.toutiao.com/search?keyword=宇树科技股价较上市高点跌超60%)
1. [李胜峰：世界已改变 台湾要回家了](https://so.toutiao.com/search?keyword=李胜峰：世界已改变%20台湾要回家了)
1. [床车旅行管理正在持续升级](https://so.toutiao.com/search?keyword=床车旅行管理正在持续升级)
1. [朝媒警告美国：台湾问题纯属中国内政](https://so.toutiao.com/search?keyword=朝媒警告美国：台湾问题纯属中国内政)
1. [新娘九个舅舅染不同颜色头发送嫁](https://so.toutiao.com/search?keyword=新娘九个舅舅染不同颜色头发送嫁)
1. [张本智和被“满电战神”打没电了](https://so.toutiao.com/search?keyword=张本智和被“满电战神”打没电了)
1. [当地回应新郎婚礼当天看病后离世](https://so.toutiao.com/search?keyword=当地回应新郎婚礼当天看病后离世)
1. [黑龙江鹤岗一秒入冬银装素裹](https://so.toutiao.com/search?keyword=黑龙江鹤岗一秒入冬银装素裹)
1. [倪萍发文悼念彭玉](https://so.toutiao.com/search?keyword=倪萍发文悼念彭玉)
1. [乌军推进20公里 俄军出了什么问题](https://so.toutiao.com/search?keyword=乌军推进20公里%20俄军出了什么问题)
1. [内存条一年价格上涨300%以上](https://so.toutiao.com/search?keyword=内存条一年价格上涨300%以上)
1. [正确散步好处超多](https://so.toutiao.com/search?keyword=正确散步好处超多)
1. [女子买房多年得知客厅上方有座坟](https://so.toutiao.com/search?keyword=女子买房多年得知客厅上方有座坟)
1. [美国为何连夜从英国撤走轰炸机](https://so.toutiao.com/search?keyword=美国为何连夜从英国撤走轰炸机)
1. [专家：美日演习暴露介入台海企图](https://so.toutiao.com/search?keyword=专家：美日演习暴露介入台海企图)
1. [墨西哥摔角手赛场上摔死75岁裁判](https://so.toutiao.com/search?keyword=墨西哥摔角手赛场上摔死75岁裁判)
1. [胡塞武装人员光着脚唱着歌单手压AK](https://so.toutiao.com/search?keyword=胡塞武装人员光着脚唱着歌单手压AK)
1. [乌称正在研究五种不同的停火机制](https://so.toutiao.com/search?keyword=乌称正在研究五种不同的停火机制)
1. [中东石油份额大战打响](https://so.toutiao.com/search?keyword=中东石油份额大战打响)
1. [周鸿祎解读今年化学诺奖发现了什么](https://so.toutiao.com/search?keyword=周鸿祎解读今年化学诺奖发现了什么)
1. [泰国王后首次单飞鹰狮战斗机](https://so.toutiao.com/search?keyword=泰国王后首次单飞鹰狮战斗机)
1. [东北一家人牛大妈扮演者彭玉去世](https://so.toutiao.com/search?keyword=东北一家人牛大妈扮演者彭玉去世)
1. [国庆假期楼市升温](https://so.toutiao.com/search?keyword=国庆假期楼市升温)
1. [美舰跟监055自己“趴窝”了说明啥](https://so.toutiao.com/search?keyword=美舰跟监055自己“趴窝”了说明啥)
1. [何超欣晒何猷君奚梦瑶全家福](https://so.toutiao.com/search?keyword=何超欣晒何猷君奚梦瑶全家福)
1. [从《什么意思夫妇》看离婚冷静期](https://so.toutiao.com/search?keyword=从《什么意思夫妇》看离婚冷静期)
1. [沙特拉上巴土两国能解决胡塞吗](https://so.toutiao.com/search?keyword=沙特拉上巴土两国能解决胡塞吗)
1. [霍尔木兹海峡危机冲击全球能源市场](https://so.toutiao.com/search?keyword=霍尔木兹海峡危机冲击全球能源市场)
1. [王艺迪晋级WTT中国大满贯女单八强](https://so.toutiao.com/search?keyword=王艺迪晋级WTT中国大满贯女单八强)
1. [国铁集团推出“敬”字火车票优惠活动](https://so.toutiao.com/search?keyword=国铁集团推出“敬”字火车票优惠活动)
1. [固态电池逆市大涨 多股涨停](https://so.toutiao.com/search?keyword=固态电池逆市大涨%20多股涨停)
1. [车主就近下高速怒省500元](https://so.toutiao.com/search?keyword=车主就近下高速怒省500元)
1. [申办2036年奥运会印度准备好了吗](https://so.toutiao.com/search?keyword=申办2036年奥运会印度准备好了吗)
1. [粤J2888T抵达开封万岁山景区](https://so.toutiao.com/search?keyword=粤J2888T抵达开封万岁山景区)
1. [俄导弹命中乌五层住宅楼 乌称将回应](https://so.toutiao.com/search?keyword=俄导弹命中乌五层住宅楼%20乌称将回应)
1. [股市能接棒楼市成经济新引擎吗](https://so.toutiao.com/search?keyword=股市能接棒楼市成经济新引擎吗)
1. [林昀儒晋级WTT中国大满贯男单八强](https://so.toutiao.com/search?keyword=林昀儒晋级WTT中国大满贯男单八强)
1. [美联储“保险式加息”正在回归吗](https://so.toutiao.com/search?keyword=美联储“保险式加息”正在回归吗)
1. [周启豪3-0战胜张本智和](https://so.toutiao.com/search?keyword=周启豪3-0战胜张本智和)
1. [高速超充一到节假日就“掉链子”吗](https://so.toutiao.com/search?keyword=高速超充一到节假日就“掉链子”吗)
1. [法国试射潜射洲际导弹意味着什么](https://so.toutiao.com/search?keyword=法国试射潜射洲际导弹意味着什么)
1. [全球潜射洲际导弹如何排行](https://so.toutiao.com/search?keyword=全球潜射洲际导弹如何排行)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Oct 09 2026 21:10:03 GMT+0800 (China Standard Time) -->

1. [江淮汽车被砸跌停](https://www.zhihu.com/search?q=%E6%B1%9F%E6%B7%AE%E6%B1%BD%E8%BD%A6%E8%A2%AB%E7%A0%B8%E8%B7%8C%E5%81%9C)
1. [尊界回应刹车踏板支架断裂](https://www.zhihu.com/search?q=%E5%B0%8A%E7%95%8C%E5%9B%9E%E5%BA%94%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82)
1. [韩国多家银行疑遭黑客用AI攻击](https://www.zhihu.com/search?q=%E9%9F%A9%E5%9B%BD%E5%A4%9A%E5%AE%B6%E9%93%B6%E8%A1%8C%E7%96%91%E9%81%AD%E9%BB%91%E5%AE%A2%E7%94%A8AI%E6%94%BB%E5%87%BB)
1. [飞天奖](https://www.zhihu.com/search?q=%E9%A3%9E%E5%A4%A9%E5%A5%96)
1. [多家烘焙店下架超长蛋挞](https://www.zhihu.com/search?q=%E5%A4%9A%E5%AE%B6%E7%83%98%E7%84%99%E5%BA%97%E4%B8%8B%E6%9E%B6%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E)
1. [湖南一局长被举报婚内出轨](https://www.zhihu.com/search?q=%E6%B9%96%E5%8D%97%E4%B8%80%E5%B1%80%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A8)
1. [白俄女模特被骗至缅甸遭杀害](https://www.zhihu.com/search?q=%E7%99%BD%E4%BF%84%E5%A5%B3%E6%A8%A1%E7%89%B9%E8%A2%AB%E9%AA%97%E8%87%B3%E7%BC%85%E7%94%B8%E9%81%AD%E6%9D%80%E5%AE%B3)
1. [OpenAI宣布解决准黎曼猜想](https://www.zhihu.com/search?q=OpenAI%E5%AE%A3%E5%B8%83%E8%A7%A3%E5%86%B3%E5%87%86%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [俄罗斯不明病因肺炎事件四种说法](https://www.zhihu.com/search?q=%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%8D%E6%98%8E%E7%97%85%E5%9B%A0%E8%82%BA%E7%82%8E%E4%BA%8B%E4%BB%B6%E5%9B%9B%E7%A7%8D%E8%AF%B4%E6%B3%95)
1. [郑钦文 2-0 斯维托丽娜](https://www.zhihu.com/search?q=%E9%83%91%E9%92%A6%E6%96%87%202-0%20%E6%96%AF%E7%BB%B4%E6%89%98%E4%B8%BD%E5%A8%9C)
1. [711关闭印度全部门店](https://www.zhihu.com/search?q=711%E5%85%B3%E9%97%AD%E5%8D%B0%E5%BA%A6%E5%85%A8%E9%83%A8%E9%97%A8%E5%BA%97)
1. [字节Seed团队发现DeepSeek性能漂移](https://www.zhihu.com/search?q=%E5%AD%97%E8%8A%82Seed%E5%9B%A2%E9%98%9F%E5%8F%91%E7%8E%B0DeepSeek%E6%80%A7%E8%83%BD%E6%BC%82%E7%A7%BB)
1. [尊界V800刹车踏板支架断裂](https://www.zhihu.com/search?q=%E5%B0%8A%E7%95%8CV800%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82)
1. [美暂停微软等多家科企外籍员工绿卡申请](https://www.zhihu.com/search?q=%E7%BE%8E%E6%9A%82%E5%81%9C%E5%BE%AE%E8%BD%AF%E7%AD%89%E5%A4%9A%E5%AE%B6%E7%A7%91%E4%BC%81%E5%A4%96%E7%B1%8D%E5%91%98%E5%B7%A5%E7%BB%BF%E5%8D%A1%E7%94%B3%E8%AF%B7)
1. [中国篮球小将庞清方遭美 ICE 拘留](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%AF%AE%E7%90%83%E5%B0%8F%E5%B0%86%E5%BA%9E%E6%B8%85%E6%96%B9%E9%81%AD%E7%BE%8E%20ICE%20%E6%8B%98%E7%95%99)
1. [俄解除不明原因肺炎防疫措施](https://www.zhihu.com/search?q=%E4%BF%84%E8%A7%A3%E9%99%A4%E4%B8%8D%E6%98%8E%E5%8E%9F%E5%9B%A0%E8%82%BA%E7%82%8E%E9%98%B2%E7%96%AB%E6%8E%AA%E6%96%BD)
1. [普宁考生称因HIV被拒教师入职](https://www.zhihu.com/search?q=%E6%99%AE%E5%AE%81%E8%80%83%E7%94%9F%E7%A7%B0%E5%9B%A0HIV%E8%A2%AB%E6%8B%92%E6%95%99%E5%B8%88%E5%85%A5%E8%81%8C)
1. [网传俄实验室发生鼠疫泄漏](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E4%BF%84%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E7%94%9F%E9%BC%A0%E7%96%AB%E6%B3%84%E6%BC%8F)
1. [缅北电诈犯随机杀陌生人祭天](https://www.zhihu.com/search?q=%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E7%8A%AF%E9%9A%8F%E6%9C%BA%E6%9D%80%E9%99%8C%E7%94%9F%E4%BA%BA%E7%A5%AD%E5%A4%A9)
1. [国乒首次无缘中国大满贯混双领奖台](https://www.zhihu.com/search?q=%E5%9B%BD%E4%B9%92%E9%A6%96%E6%AC%A1%E6%97%A0%E7%BC%98%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E6%B7%B7%E5%8F%8C%E9%A2%86%E5%A5%96%E5%8F%B0)
1. [纪录片《缅北电诈覆灭纪实》首播](https://www.zhihu.com/search?q=%E7%BA%AA%E5%BD%95%E7%89%87%E3%80%8A%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E8%A6%86%E7%81%AD%E7%BA%AA%E5%AE%9E%E3%80%8B%E9%A6%96%E6%92%AD)
1. [买房多年得知客厅上方有座坟](https://www.zhihu.com/search?q=%E4%B9%B0%E6%88%BF%E5%A4%9A%E5%B9%B4%E5%BE%97%E7%9F%A5%E5%AE%A2%E5%8E%85%E4%B8%8A%E6%96%B9%E6%9C%89%E5%BA%A7%E5%9D%9F)
1. [港媒曝邓紫棋结婚](https://www.zhihu.com/search?q=%E6%B8%AF%E5%AA%92%E6%9B%9D%E9%82%93%E7%B4%AB%E6%A3%8B%E7%BB%93%E5%A9%9A)
1. [2026年诺贝尔化学奖](https://www.zhihu.com/search?q=2026%E5%B9%B4%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%8C%96%E5%AD%A6%E5%A5%96)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Oct 10 2026 00:15:07 GMT+0800 (China Standard Time) -->

1. [陶哲轩转发多位数学家抵制 OpenAI 的文章，怎么看待该观点？这将对 AI 数学研究带来哪些改变？](https://www.zhihu.com/question/2091831158468245000)
1. [为什么北京大学简称“北大”，清华大学却简称“清华”而非“清大”？](https://www.zhihu.com/question/2024801794736361500)
1. [宋佳获飞天视后实现大满贯，王仁君获视帝，如何评价第 35 届飞天奖获奖名单？](https://www.zhihu.com/question/2091976844157380000)
1. [OpenAI 爆冷，1-9月年化营收低于预期200亿，美股、日经科技板块重挫，如何看其业绩影响？](https://www.zhihu.com/question/2091810817008259800)
1. [非遗花鼓灯基本功「闪身步」走红全网，为何让年轻人如此上头？](https://www.zhihu.com/question/2087640476774043600)
1. [如何评价最近爆火的“不烧心”梗？](https://www.zhihu.com/question/2089435419062579500)
1. [为什么很多人买新能源车之前很兴奋，开了一年后却开始怀念燃油车？](https://www.zhihu.com/question/2086594998665999600)
1. [贵州遵义一新郎婚礼当天就医输液后死亡，家属称输液区域监控未投入使用，公安已介入，哪些信息值得关注？](https://www.zhihu.com/question/2091881372683956700)
1. [如何看待 Claude 辅助提出 3SUM 猜想的反例？](https://www.zhihu.com/question/2090919793809479400)
1. [2026 WTT 中国大满贯，周启豪 4-2 张禹珍，首次晋级大满贯赛事男单4强，如何评价本场比赛？](https://www.zhihu.com/question/2091981681532130000)
1. [柏林仅45秒退出2036奥运申办，该怎么解读这件事？](https://www.zhihu.com/question/2088250815702160600)
1. [古代没有洗洁精，满锅油污古人到底怎么洗？](https://www.zhihu.com/question/2090745571023835400)
1. [如何看待2026年10月米哈游《绝区零》3.3版本前瞻，联动《崩坏星穹铁道》知更鸟，卡芙卡？](https://www.zhihu.com/question/2091982920835667200)
1. [因《变形计》走红的李勒优与晋妈关系生变，网友扒出上学盖房是政府资助、晋妈富养女儿是人设等，具体啥情况？](https://www.zhihu.com/question/2090364329396631300)
1. [人口仅1.6万的小岛安圭拉靠.ai域名每年躺赚数千万美元，域名是怎么赚钱的？别的国家能买下这个域名吗？](https://www.zhihu.com/question/2056046101895934000)
1. [港媒曝邓紫棋与男友在纽约秘密结婚，公司称「不回应艺人私生活」，你怎么看待？](https://www.zhihu.com/question/2090845293906608400)
1. [有人说学狗叫能够缓解压力和停止胡思乱想，这是真的吗？还有哪些邪门且有点搞笑的缓解压力方式？](https://www.zhihu.com/question/2089300567835107300)
1. [湖南一局长被举报婚内出轨，前夫讨要口头约定余款被诉敲诈，哪些事实待厘清？本案罪与非罪的核心证据是什么？](https://www.zhihu.com/question/2091803632920258000)
1. [日曜体育创始人谈樊振东回归也救不了国乒人才断档问题，你觉得是这样吗？人才断档问题根源在哪？怎么解决？](https://www.zhihu.com/question/2092016424885515800)
1. [WTT 中国大满贯，王艺迪 2-4 张本美和，止步女单八强，如何评价这场比赛 ？](https://www.zhihu.com/question/2091899301735523000)
1. [黄仁勋称中国 2030 年将搞定国产先进光刻机，这一判断能否实现？](https://www.zhihu.com/question/2083270435341447700)
1. [如何评价《论语》里的“暮春者，春服既成，冠者五六人，童子六七人，浴乎沂，风乎舞雩，咏而归。” ？](https://www.zhihu.com/question/32132285)
1. [玉米不能当饭吃，怎么成为了世界三大粮食作物之一？](https://www.zhihu.com/question/337913080)
1. [如何评价杨超越、蒋龙主演的剧版《喜剧之王》？](https://www.zhihu.com/question/2090904129430354000)
1. [开学第一天，有些家长就开始焦虑了，家庭教育应该主要由一个人负责，还是需要父母共同参与？](https://www.zhihu.com/question/2078781455400974000)
1. [发现孩子遇事只会逃避和推卸责任，应该怎样引导？](https://www.zhihu.com/question/2042864596617270500)
1. [馒头的不一样吃法有哪些？](https://www.zhihu.com/question/1910963261429516000)
1. [好久未联系的老同学，突然联系你，想要来你的城市旅游，顺便借住你家，你想拒绝，该如何回复？](https://www.zhihu.com/question/2088581144166118400)
1. [武侠电视剧里的高手为何不总用轻功赶路？](https://www.zhihu.com/question/2087876000956917500)
1. [有什么关于猪的冷知识吗？](https://www.zhihu.com/question/2090134963396031500)

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
<!-- 最后更新时间 Sat Oct 10 2026 00:20:27 GMT+0800 (China Standard Time) -->

1. [四重视角看中华民族的文化主体性](https://s.weibo.com//weibo?q=%23%E5%9B%9B%E9%87%8D%E8%A7%86%E8%A7%92%E7%9C%8B%E4%B8%AD%E5%8D%8E%E6%B0%91%E6%97%8F%E7%9A%84%E6%96%87%E5%8C%96%E4%B8%BB%E4%BD%93%E6%80%A7%23&Refer=new_time)
1. [飞天奖获奖名单](https://s.weibo.com//weibo?q=%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=1&Refer=top)
1. [王仁君飞天奖视帝](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%A7%86%E5%B8%9D%23&t=31&band_rank=2&Refer=top)
1. [十五五开局六张网齐铺开](https://s.weibo.com//weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E5%BC%80%E5%B1%80%E5%85%AD%E5%BC%A0%E7%BD%91%E9%BD%90%E9%93%BA%E5%BC%80%23&t=31&band_rank=3&Refer=top)
1. [林仲勋申裕斌夺冠](https://s.weibo.com//weibo?q=%23%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C%E5%A4%BA%E5%86%A0%23&t=31&band_rank=4&Refer=top)
1. [长柏真的高中了](https://s.weibo.com//weibo?q=%E9%95%BF%E6%9F%8F%E7%9C%9F%E7%9A%84%E9%AB%98%E4%B8%AD%E4%BA%86&t=31&band_rank=5&Refer=top)
1. [赵丽颖恭喜王仁君](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%81%AD%E5%96%9C%E7%8E%8B%E4%BB%81%E5%90%9B%23&t=31&band_rank=6&Refer=top)
1. [54岁马化腾罕见露面](https://s.weibo.com//weibo?q=%2354%E5%B2%81%E9%A9%AC%E5%8C%96%E8%85%BE%E7%BD%95%E8%A7%81%E9%9C%B2%E9%9D%A2%23&t=31&band_rank=7&Refer=top)
1. [山西一医院保胎药错发成引产药](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%80%E5%8C%BB%E9%99%A2%E4%BF%9D%E8%83%8E%E8%8D%AF%E9%94%99%E5%8F%91%E6%88%90%E5%BC%95%E4%BA%A7%E8%8D%AF%23&t=31&band_rank=8&Refer=top)
1. [超长蛋挞陆续下架](https://s.weibo.com//weibo?q=%23%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E9%99%86%E7%BB%AD%E4%B8%8B%E6%9E%B6%23&t=31&band_rank=9&Refer=top)
1. [蛋白质对人体有多重要](https://s.weibo.com//weibo?q=%E8%9B%8B%E7%99%BD%E8%B4%A8%E5%AF%B9%E4%BA%BA%E4%BD%93%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81&t=31&band_rank=10&Refer=top)
1. [母亲被儿子催过户后后悔只生一个](https://s.weibo.com//weibo?q=%E6%AF%8D%E4%BA%B2%E8%A2%AB%E5%84%BF%E5%AD%90%E5%82%AC%E8%BF%87%E6%88%B7%E5%90%8E%E5%90%8E%E6%82%94%E5%8F%AA%E7%94%9F%E4%B8%80%E4%B8%AA&t=31&band_rank=11&Refer=top)
1. [沐言爸爸隐婚生子女儿走红后才公开](https://s.weibo.com//weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E9%9A%90%E5%A9%9A%E7%94%9F%E5%AD%90%E5%A5%B3%E5%84%BF%E8%B5%B0%E7%BA%A2%E5%90%8E%E6%89%8D%E5%85%AC%E5%BC%80%23&t=31&band_rank=12&Refer=top)
1. [金智媛新剧收视率](https://s.weibo.com//weibo?q=%E9%87%91%E6%99%BA%E5%AA%9B%E6%96%B0%E5%89%A7%E6%94%B6%E8%A7%86%E7%8E%87&t=31&band_rank=13&Refer=top)
1. [小巷人家 陪跑](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%20%E9%99%AA%E8%B7%91&t=31&band_rank=14&Refer=top)
1. [沐言爸爸居然是结巴](https://s.weibo.com//weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E5%B1%85%E7%84%B6%E6%98%AF%E7%BB%93%E5%B7%B4%23&t=31&band_rank=15&Refer=top)
1. [林仲勋申裕斌3比2林昀儒郑怡静](https://s.weibo.com//weibo?q=%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C3%E6%AF%942%E6%9E%97%E6%98%80%E5%84%92%E9%83%91%E6%80%A1%E9%9D%99&t=31&band_rank=16&Refer=top)
1. [女子仅退款9斤蜜薯称有本事来拿](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%85%E9%80%80%E6%AC%BE9%E6%96%A4%E8%9C%9C%E8%96%AF%E7%A7%B0%E6%9C%89%E6%9C%AC%E4%BA%8B%E6%9D%A5%E6%8B%BF%23&t=31&band_rank=17&Refer=top)
1. [沐言爸爸是游乐王子](https://s.weibo.com//weibo?q=%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E6%98%AF%E6%B8%B8%E4%B9%90%E7%8E%8B%E5%AD%90&t=31&band_rank=18&Refer=top)
1. [新郎婚礼当天就医离世家属盼知死因](https://s.weibo.com//weibo?q=%23%E6%96%B0%E9%83%8E%E5%A9%9A%E7%A4%BC%E5%BD%93%E5%A4%A9%E5%B0%B1%E5%8C%BB%E7%A6%BB%E4%B8%96%E5%AE%B6%E5%B1%9E%E7%9B%BC%E7%9F%A5%E6%AD%BB%E5%9B%A0%23&t=31&band_rank=19&Refer=top)
1. [宋佳飞天奖视后](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BD%B3%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%A7%86%E5%90%8E%23&t=31&band_rank=20&Refer=top)
1. [大闸蟹全线崩盘](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E9%97%B8%E8%9F%B9%E5%85%A8%E7%BA%BF%E5%B4%A9%E7%9B%98%23&t=31&band_rank=21&Refer=top)
1. [大娘子福气了一门双星](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E5%A8%98%E5%AD%90%E7%A6%8F%E6%B0%94%E4%BA%86%E4%B8%80%E9%97%A8%E5%8F%8C%E6%98%9F%23&t=31&band_rank=22&Refer=top)
1. [47岁高圆圆和46岁张鲁一](https://s.weibo.com//weibo?q=%2347%E5%B2%81%E9%AB%98%E5%9C%86%E5%9C%86%E5%92%8C46%E5%B2%81%E5%BC%A0%E9%B2%81%E4%B8%80%23&t=31&band_rank=23&Refer=top)
1. [积英巷盛家满门荣耀](https://s.weibo.com//weibo?q=%23%E7%A7%AF%E8%8B%B1%E5%B7%B7%E7%9B%9B%E5%AE%B6%E6%BB%A1%E9%97%A8%E8%8D%A3%E8%80%80%23&t=31&band_rank=24&Refer=top)
1. [中年夫妻十条亲密动作清单](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%B9%B4%E5%A4%AB%E5%A6%BB%E5%8D%81%E6%9D%A1%E4%BA%B2%E5%AF%86%E5%8A%A8%E4%BD%9C%E6%B8%85%E5%8D%95&t=31&band_rank=25&Refer=top)
1. [山姆回应拟限制亲友卡绑定](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E5%A7%86%E5%9B%9E%E5%BA%94%E6%8B%9F%E9%99%90%E5%88%B6%E4%BA%B2%E5%8F%8B%E5%8D%A1%E7%BB%91%E5%AE%9A%23&t=31&band_rank=26&Refer=top)
1. [国色芳华飞天奖优秀电视剧](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E8%89%B2%E8%8A%B3%E5%8D%8E%E9%A3%9E%E5%A4%A9%E5%A5%96%E4%BC%98%E7%A7%80%E7%94%B5%E8%A7%86%E5%89%A7%23&t=31&band_rank=27&Refer=top)
1. [刘亦菲 水蜜桃公主](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%B0%B4%E8%9C%9C%E6%A1%83%E5%85%AC%E4%B8%BB&t=31&band_rank=28&Refer=top)
1. [妈妈说男的死得比女的早](https://s.weibo.com//weibo?q=%E5%A6%88%E5%A6%88%E8%AF%B4%E7%94%B7%E7%9A%84%E6%AD%BB%E5%BE%97%E6%AF%94%E5%A5%B3%E7%9A%84%E6%97%A9&t=31&band_rank=29&Refer=top)
1. [俄导弹击中基辅大桥猛烈爆炸画面](https://s.weibo.com//weibo?q=%23%E4%BF%84%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E5%9F%BA%E8%BE%85%E5%A4%A7%E6%A1%A5%E7%8C%9B%E7%83%88%E7%88%86%E7%82%B8%E7%94%BB%E9%9D%A2%23&t=31&band_rank=30&Refer=top)
1. [中网女单四强对阵](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BD%91%E5%A5%B3%E5%8D%95%E5%9B%9B%E5%BC%BA%E5%AF%B9%E9%98%B5%23&t=31&band_rank=31&Refer=top)
1. [周杰伦晒与BIGBANG合照](https://s.weibo.com//weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%99%92%E4%B8%8EBIGBANG%E5%90%88%E7%85%A7%23&t=31&band_rank=32&Refer=top)
1. [妈妈回应沐言为何没读私立学校](https://s.weibo.com//weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E6%B2%90%E8%A8%80%E4%B8%BA%E4%BD%95%E6%B2%A1%E8%AF%BB%E7%A7%81%E7%AB%8B%E5%AD%A6%E6%A0%A1%23&t=31&band_rank=33&Refer=top)
1. [崩坏星穹铁道](https://s.weibo.com//weibo?q=%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93&t=31&band_rank=34&Refer=top)
1. [iPhone18Pro卖不动了](https://s.weibo.com//weibo?q=%23iPhone18Pro%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [宋佳一串三](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BD%B3%E4%B8%80%E4%B8%B2%E4%B8%89%23&t=31&band_rank=36&Refer=top)
1. [李勒优第一份工资被扣1000](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%8B%92%E4%BC%98%E7%AC%AC%E4%B8%80%E4%BB%BD%E5%B7%A5%E8%B5%84%E8%A2%AB%E6%89%A31000&t=31&band_rank=37&Refer=top)
1. [周杰伦转发著名中国歌手](https://s.weibo.com//weibo?q=%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%BD%AC%E5%8F%91%E8%91%97%E5%90%8D%E4%B8%AD%E5%9B%BD%E6%AD%8C%E6%89%8B&t=31&band_rank=38&Refer=top)
1. [小姐姐拍照被楼上老奶奶拍下](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%A7%90%E5%A7%90%E6%8B%8D%E7%85%A7%E8%A2%AB%E6%A5%BC%E4%B8%8A%E8%80%81%E5%A5%B6%E5%A5%B6%E6%8B%8D%E4%B8%8B&t=31&band_rank=39&Refer=top)
1. [沐言一家冰岛行爆火](https://s.weibo.com//weibo?q=%23%E6%B2%90%E8%A8%80%E4%B8%80%E5%AE%B6%E5%86%B0%E5%B2%9B%E8%A1%8C%E7%88%86%E7%81%AB%23&t=31&band_rank=40&Refer=top)
1. [养了五年的猫突然开线还能修吗](https://s.weibo.com//weibo?q=%E5%85%BB%E4%BA%86%E4%BA%94%E5%B9%B4%E7%9A%84%E7%8C%AB%E7%AA%81%E7%84%B6%E5%BC%80%E7%BA%BF%E8%BF%98%E8%83%BD%E4%BF%AE%E5%90%97&t=31&band_rank=41&Refer=top)
1. [曝李勒优想和崔晋一家一刀两断](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%8B%92%E4%BC%98%E6%83%B3%E5%92%8C%E5%B4%94%E6%99%8B%E4%B8%80%E5%AE%B6%E4%B8%80%E5%88%80%E4%B8%A4%E6%96%AD%23&t=31&band_rank=42&Refer=top)
1. [肿瘤科医生垫付40万病逝](https://s.weibo.com//weibo?q=%E8%82%BF%E7%98%A4%E7%A7%91%E5%8C%BB%E7%94%9F%E5%9E%AB%E4%BB%9840%E4%B8%87%E7%97%85%E9%80%9D&t=31&band_rank=43&Refer=top)
1. [辛芷蕾晒王一博拍的自己](https://s.weibo.com//weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E6%99%92%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%8B%8D%E7%9A%84%E8%87%AA%E5%B7%B1%23&t=31&band_rank=44&Refer=top)
1. [南京三千万豪宅难卖一千五百万](https://s.weibo.com//weibo?q=%E5%8D%97%E4%BA%AC%E4%B8%89%E5%8D%83%E4%B8%87%E8%B1%AA%E5%AE%85%E9%9A%BE%E5%8D%96%E4%B8%80%E5%8D%83%E4%BA%94%E7%99%BE%E4%B8%87&t=31&band_rank=45&Refer=top)
1. [肖战外网断层](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%A4%96%E7%BD%91%E6%96%AD%E5%B1%82%23&t=31&band_rank=46&Refer=top)
1. [清融没轮换](https://s.weibo.com//weibo?q=%E6%B8%85%E8%9E%8D%E6%B2%A1%E8%BD%AE%E6%8D%A2&t=31&band_rank=47&Refer=top)
1. [Cortis全开麦唱功引热议](https://s.weibo.com//weibo?q=Cortis%E5%85%A8%E5%BC%80%E9%BA%A6%E5%94%B1%E5%8A%9F%E5%BC%95%E7%83%AD%E8%AE%AE&t=31&band_rank=48&Refer=top)
1. [浴血荣光](https://s.weibo.com//weibo?q=%E6%B5%B4%E8%A1%80%E8%8D%A3%E5%85%89&t=31&band_rank=49&Refer=top)
1. [辽宁男篮](https://s.weibo.com//weibo?q=%E8%BE%BD%E5%AE%81%E7%94%B7%E7%AF%AE&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
