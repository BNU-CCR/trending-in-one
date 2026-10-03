# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-04 07:55:02

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
<!-- 最后更新时间 Sun Oct 04 2026 07:19:00 GMT+0800 (China Standard Time) -->

1. [巴勒斯坦球员向国足致歉](https://so.toutiao.com/search?keyword=巴勒斯坦球员向国足致歉)
1. [“一国两制”台湾方案在岛内引热议](https://so.toutiao.com/search?keyword=“一国两制”台湾方案在岛内引热议)
1. [家国长歌](https://so.toutiao.com/search?keyword=家国长歌)
1. [中俄白等八国超4.7万人集结大练兵](https://so.toutiao.com/search?keyword=中俄白等八国超4.7万人集结大练兵)
1. [韩国“梦之队”完败给中国队](https://so.toutiao.com/search?keyword=韩国“梦之队”完败给中国队)
1. [苹果小米等新手机出现部分黑屏现象](https://so.toutiao.com/search?keyword=苹果小米等新手机出现部分黑屏现象)
1. [女子别车遭脚踹被罚200元](https://so.toutiao.com/search?keyword=女子别车遭脚踹被罚200元)
1. [拿下点球大战！U23国足获亚运铜牌](https://so.toutiao.com/search?keyword=拿下点球大战！U23国足获亚运铜牌)
1. [媒体：央行“四箭齐发”释放利好](https://so.toutiao.com/search?keyword=媒体：央行“四箭齐发”释放利好)
1. [全球债市陷入罕见抛售风暴](https://so.toutiao.com/search?keyword=全球债市陷入罕见抛售风暴)
1. [有人被水猴子吸干血？警方辟谣](https://so.toutiao.com/search?keyword=有人被水猴子吸干血？警方辟谣)
1. [新华社：0:5给中国足球的又一记警钟](https://so.toutiao.com/search?keyword=新华社：0:5给中国足球的又一记警钟)
1. [迪丽热巴穿明艳红裙漫步巴黎](https://so.toutiao.com/search?keyword=迪丽热巴穿明艳红裙漫步巴黎)
1. [媒体人：难怪当年许昕说林诗栋是天才](https://so.toutiao.com/search?keyword=媒体人：难怪当年许昕说林诗栋是天才)
1. [这些粗粮可能比米饭还升糖](https://so.toutiao.com/search?keyword=这些粗粮可能比米饭还升糖)
1. [《西游记》作曲许镜清向星火社维权](https://so.toutiao.com/search?keyword=《西游记》作曲许镜清向星火社维权)
1. [为什么现在的酒店不再收押金查房了](https://so.toutiao.com/search?keyword=为什么现在的酒店不再收押金查房了)
1. [军媒：祖国完全统一历史任务定能实现](https://so.toutiao.com/search?keyword=军媒：祖国完全统一历史任务定能实现)
1. [排队买60厘米长的蛋挞买的到底是什么](https://so.toutiao.com/search?keyword=排队买60厘米长的蛋挞买的到底是什么)
1. [中国队亚运169金收官](https://so.toutiao.com/search?keyword=中国队亚运169金收官)
1. [司机开着“智驾”在高速上睡着了](https://so.toutiao.com/search?keyword=司机开着“智驾”在高速上睡着了)
1. [“好冷空气”来了 对气候有何影响](https://so.toutiao.com/search?keyword=“好冷空气”来了%20对气候有何影响)
1. [新华社：留给中国女足的时间不多了](https://so.toutiao.com/search?keyword=新华社：留给中国女足的时间不多了)
1. [9位国之脊梁登上高速巨型广告牌](https://so.toutiao.com/search?keyword=9位国之脊梁登上高速巨型广告牌)
1. [南昌民警组成人墙护送130万游客离场](https://so.toutiao.com/search?keyword=南昌民警组成人墙护送130万游客离场)
1. [足球记者马德兴赛后哽咽发声](https://so.toutiao.com/search?keyword=足球记者马德兴赛后哽咽发声)
1. [孩子放不下手机怎么办](https://so.toutiao.com/search?keyword=孩子放不下手机怎么办)
1. [前空乘自述：行业对乘务员太苛刻](https://so.toutiao.com/search?keyword=前空乘自述：行业对乘务员太苛刻)
1. [中国夫妇刚拿澳洲绿卡车祸身亡](https://so.toutiao.com/search?keyword=中国夫妇刚拿澳洲绿卡车祸身亡)
1. [王钰栋回应一脚世界波后被叫球王](https://so.toutiao.com/search?keyword=王钰栋回应一脚世界波后被叫球王)
1. [郑丽文亮明一中立场抓住中间选民领跑](https://so.toutiao.com/search?keyword=郑丽文亮明一中立场抓住中间选民领跑)
1. [名嘴：“台独”若踩红线大陆绝不留情](https://so.toutiao.com/search?keyword=名嘴：“台独”若踩红线大陆绝不留情)
1. [彭啸：这是我人生中最有含金量的奖牌](https://so.toutiao.com/search?keyword=彭啸：这是我人生中最有含金量的奖牌)
1. [国足想通过比赛找信心没想反崩了盘](https://so.toutiao.com/search?keyword=国足想通过比赛找信心没想反崩了盘)
1. [朝鲜进行中程战略导弹发射训练](https://so.toutiao.com/search?keyword=朝鲜进行中程战略导弹发射训练)
1. [亚运冠军和五星红旗的同框瞬间](https://so.toutiao.com/search?keyword=亚运冠军和五星红旗的同框瞬间)
1. [美对台军售约9361亿新台币尚未交付](https://so.toutiao.com/search?keyword=美对台军售约9361亿新台币尚未交付)
1. [外媒：中国国庆假期激发文旅消费活力](https://so.toutiao.com/search?keyword=外媒：中国国庆假期激发文旅消费活力)
1. [安东尼奥：此刻我是最幸福的教练](https://so.toutiao.com/search?keyword=安东尼奥：此刻我是最幸福的教练)
1. [阿曼副驾想在以色列复制911恐袭吗](https://so.toutiao.com/search?keyword=阿曼副驾想在以色列复制911恐袭吗)
1. [普京前顾问称俄正研究第二次向东转](https://so.toutiao.com/search?keyword=普京前顾问称俄正研究第二次向东转)
1. [大V：红利曼失守暴露俄军最致命问题](https://so.toutiao.com/search?keyword=大V：红利曼失守暴露俄军最致命问题)
1. [台湾一男子帮忙推车躲过一劫](https://so.toutiao.com/search?keyword=台湾一男子帮忙推车躲过一劫)
1. [四川理亚路：行至天际 坐看云起](https://so.toutiao.com/search?keyword=四川理亚路：行至天际%20坐看云起)
1. [如何看待迪拜航空“空中惊魂”](https://so.toutiao.com/search?keyword=如何看待迪拜航空“空中惊魂”)
1. [俄乌停火为何越谈越远](https://so.toutiao.com/search?keyword=俄乌停火为何越谈越远)
1. [吃螃蟹有何讲究](https://so.toutiao.com/search?keyword=吃螃蟹有何讲究)
1. [王欣瑜中网首秀出局](https://so.toutiao.com/search?keyword=王欣瑜中网首秀出局)
1. [俄警告外国公民不要留在基辅](https://so.toutiao.com/search?keyword=俄警告外国公民不要留在基辅)
1. [凯恩谈英格兰队未来目标](https://so.toutiao.com/search?keyword=凯恩谈英格兰队未来目标)
1. [金价银价“巨震”](https://so.toutiao.com/search?keyword=金价银价“巨震”)
1. [朝鲜：永远关闭南部边境避免接触韩国](https://so.toutiao.com/search?keyword=朝鲜：永远关闭南部边境避免接触韩国)
1. [韩媒感叹中国亚运每天都是金牌日](https://so.toutiao.com/search?keyword=韩媒感叹中国亚运每天都是金牌日)
1. [对手因伤退赛郑钦文中网晋级](https://so.toutiao.com/search?keyword=对手因伤退赛郑钦文中网晋级)
1. [亚运会中国三大球只有女排夺金](https://so.toutiao.com/search?keyword=亚运会中国三大球只有女排夺金)
1. [16岁孙心然中网两连胜将战高芙](https://so.toutiao.com/search?keyword=16岁孙心然中网两连胜将战高芙)
1. [中国队首夺男子橄榄球亚运银牌](https://so.toutiao.com/search?keyword=中国队首夺男子橄榄球亚运银牌)
1. [评论员：女足无缘亚运奖牌并不意外](https://so.toutiao.com/search?keyword=评论员：女足无缘亚运奖牌并不意外)
1. [中国足球队发文祝贺U23亚运会摘铜](https://so.toutiao.com/search?keyword=中国足球队发文祝贺U23亚运会摘铜)
1. [评论员：黄岩岛主权不容撼动](https://so.toutiao.com/search?keyword=评论员：黄岩岛主权不容撼动)
1. [国足开球踢给巴勒斯坦 解说懵圈](https://so.toutiao.com/search?keyword=国足开球踢给巴勒斯坦%20解说懵圈)
1. [苏超观众席举起巨型国旗](https://so.toutiao.com/search?keyword=苏超观众席举起巨型国旗)
1. [国足赛后谢场遭现场球迷怒斥](https://so.toutiao.com/search?keyword=国足赛后谢场遭现场球迷怒斥)
1. [媒体：男女足亚运成绩反差鲜明](https://so.toutiao.com/search?keyword=媒体：男女足亚运成绩反差鲜明)
1. [李昊扑点再现大心脏微笑](https://so.toutiao.com/search?keyword=李昊扑点再现大心脏微笑)
1. [密林深处官兵用脚步丈量祖国山河](https://so.toutiao.com/search?keyword=密林深处官兵用脚步丈量祖国山河)
1. [博主复盘男足铜牌战：奖牌弥足珍贵](https://so.toutiao.com/search?keyword=博主复盘男足铜牌战：奖牌弥足珍贵)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Oct 04 2026 05:10:47 GMT+0800 (China Standard Time) -->

1. [原央视主持人阿丘回应被通报](https://www.zhihu.com/search?q=%E5%8E%9F%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E9%98%BF%E4%B8%98%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%80%9A%E6%8A%A5)
1. [东航再通报空姐下跪事件](https://www.zhihu.com/search?q=%E4%B8%9C%E8%88%AA%E5%86%8D%E9%80%9A%E6%8A%A5%E7%A9%BA%E5%A7%90%E4%B8%8B%E8%B7%AA%E4%BA%8B%E4%BB%B6)
1. [中国男足时隔 28 年再夺亚运铜牌](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E8%B6%B3%E6%97%B6%E9%9A%94%2028%20%E5%B9%B4%E5%86%8D%E5%A4%BA%E4%BA%9A%E8%BF%90%E9%93%9C%E7%89%8C)
1. [中国男足 0-5 巴勒斯坦](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E8%B6%B3%200-5%20%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6)
1. [纹身是免疫细胞一辈子的战斗](https://www.zhihu.com/search?q=%E7%BA%B9%E8%BA%AB%E6%98%AF%E5%85%8D%E7%96%AB%E7%BB%86%E8%83%9E%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E6%88%98%E6%96%97)
1. [田馥甄说现在讲话要非常小心](https://www.zhihu.com/search?q=%E7%94%B0%E9%A6%A5%E7%94%84%E8%AF%B4%E7%8E%B0%E5%9C%A8%E8%AE%B2%E8%AF%9D%E8%A6%81%E9%9D%9E%E5%B8%B8%E5%B0%8F%E5%BF%83)
1. [孕妇骑车别车被司机踹翻](https://www.zhihu.com/search?q=%E5%AD%95%E5%A6%87%E9%AA%91%E8%BD%A6%E5%88%AB%E8%BD%A6%E8%A2%AB%E5%8F%B8%E6%9C%BA%E8%B8%B9%E7%BF%BB)
1. [国庆多地高速服务区电车取号排队充电](https://www.zhihu.com/search?q=%E5%9B%BD%E5%BA%86%E5%A4%9A%E5%9C%B0%E9%AB%98%E9%80%9F%E6%9C%8D%E5%8A%A1%E5%8C%BA%E7%94%B5%E8%BD%A6%E5%8F%96%E5%8F%B7%E6%8E%92%E9%98%9F%E5%85%85%E7%94%B5)
1. [德国教材：很多中国人没有汽车](https://www.zhihu.com/search?q=%E5%BE%B7%E5%9B%BD%E6%95%99%E6%9D%90%EF%BC%9A%E5%BE%88%E5%A4%9A%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B2%A1%E6%9C%89%E6%B1%BD%E8%BD%A6)
1. [中国队 169 金 89 银 83 铜收官](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E9%98%9F%20169%20%E9%87%91%2089%20%E9%93%B6%2083%20%E9%93%9C%E6%94%B6%E5%AE%98)
1. [警方查处孕妇驾驶摩托别车遭脚踹事件](https://www.zhihu.com/search?q=%E8%AD%A6%E6%96%B9%E6%9F%A5%E5%A4%84%E5%AD%95%E5%A6%87%E9%A9%BE%E9%A9%B6%E6%91%A9%E6%89%98%E5%88%AB%E8%BD%A6%E9%81%AD%E8%84%9A%E8%B8%B9%E4%BA%8B%E4%BB%B6)
1. [AI 抽卡出重大成果论文署名归属](https://www.zhihu.com/search?q=AI%20%E6%8A%BD%E5%8D%A1%E5%87%BA%E9%87%8D%E5%A4%A7%E6%88%90%E6%9E%9C%E8%AE%BA%E6%96%87%E7%BD%B2%E5%90%8D%E5%BD%92%E5%B1%9E)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Oct 04 2026 07:55:02 GMT+0800 (China Standard Time) -->

1. [如何评价亚运会中国代表团169金89银83铜收官，创境外参加亚运会最佳战绩？有哪些项目发挥关键作用？](https://www.zhihu.com/question/2089736714340102400)
1. [德国教材「很多中国人没有汽车，出行靠自行车或步行」等内容引争议，这真是现行教材吗？为何会出现这种错误？](https://www.zhihu.com/question/2089638530678875100)
1. [如何看待巴勒斯坦球员因一个拇指向下的争议手势向国足道歉，澄清并无不敬之意？](https://www.zhihu.com/question/2089809366375294000)
1. [财政部称将推进消费税征收后移并下划地方，将对地方财力和商品价格产生哪些影响？](https://www.zhihu.com/question/2088992610811637800)
1. [网友吐槽美团、高德、大众点评可随意造假评论，自家店铺还没开门就遭差评，该机制合理吗？该怎样应对和改进？](https://www.zhihu.com/question/2089620705260171500)
1. [《艾希》续作众筹破 1200 万元远超预期，为何能引发现象级反响？](https://www.zhihu.com/question/2089411284261512200)
1. [有哪些城市自古以来市中心几乎没变过位置的？](https://www.zhihu.com/question/292395304)
1. [网友称纹身是免疫细胞一辈子的战斗，这是真的吗？对健康会有哪些影响？](https://www.zhihu.com/question/2089414718989365800)
1. [马伯庸是影视化改编最多的作家，但是为什么没有出现几个全民爆款，到底是哪里出问题？](https://www.zhihu.com/question/2088246811341469000)
1. [七国集团将释放 1 亿桶战略石油储备，会带来哪些影响？](https://www.zhihu.com/question/2089655246322495700)
1. [如何评价极客湾最新视频《逻辑折叠深度解析！华为Mate 90系列韬定律芯片有多强？》？](https://www.zhihu.com/question/2089412797440455400)
1. [香港的山海地形如何塑造了城市人的性格？](https://www.zhihu.com/question/2084300232225993500)
1. [葡足协主席希望C罗「以体面的方式谢幕」，正推动其重返国家队，如何理解当前各方态度？最终可能怎样收场？](https://www.zhihu.com/question/2089646327395082200)
1. [汉大帮高育良的外甥女陆亦可为什么被大家厌恶？她和侯亮平是一类人吗？](https://www.zhihu.com/question/2086972101483930400)
1. [网友质疑国足0比5惨败却让17岁小将赵松源接受采访，如何看待这种安排？是有意为之吗？](https://www.zhihu.com/question/2089616052405498400)
1. [周扬青自嘲脸「馒化」了，什么是「馒化脸」？医美技术发展能避免这种情况吗？](https://www.zhihu.com/question/2089117053814663200)
1. [为什么秦桧之后没人再用桧字取名，但司马懿之后还有无数人叫懿？](https://www.zhihu.com/question/2088675997675688700)
1. [六神是怎么做到在花露水市场常年稳居第一的？甚至有不少人除了六神好像都不了解其他的花露水品牌？](https://www.zhihu.com/question/2087306147153666600)
1. [明明我们的造梗能力也不差，我国为什么很少做出像《尼古喵喵》这样充满神人和生活气息的作品？](https://www.zhihu.com/question/2087253111299642000)
1. [如何评价马伊琍、王佳佳主演的悬疑剧《余红旧事》？](https://www.zhihu.com/question/2088305221902587600)
1. [警方查处孕妇驾驶摩托别车遭脚踹事件，孕妇罚款200元，对踹摩托车者予以批评教育，如何看待这一处罚结果？](https://www.zhihu.com/question/2089780106344362500)
1. [有没有人一生坚持只做一份工作不跳槽的？](https://www.zhihu.com/question/2082027137297654500)
1. [如何看待DeepSeek Harness在新版本中加入Claude Code Mods兼容？](https://www.zhihu.com/question/2089740005770008600)
1. [如何评价Gemini新的付费方案？](https://www.zhihu.com/question/2089644266393952800)
1. [有人说大脑具有终身可塑性，但又有人说压力会导致海马体终身受损，哪个是真的？](https://www.zhihu.com/question/666246742)
1. [鲁肃一直主张联刘抗曹，为何常被后人低估？](https://www.zhihu.com/question/2049285303739986200)
1. [古诗词中出现频率最多的字是什么？](https://www.zhihu.com/question/652244254)
1. [如何评价一人之下834（779）话？](https://www.zhihu.com/question/2089156656257053000)
1. [网传一大学生因公选课老师连续缺课，自己上台用AI生成PPT讲了一小时课，是真的吗？暴露了哪些问题？](https://www.zhihu.com/question/2088388963652166100)
1. [伊朗货币跌至历史新低，但股市却大涨，为何会出现这种反差？背后的经济、金融逻辑是什么？](https://www.zhihu.com/question/2088569106697909000)
1. [亚运男足铜牌争夺战，中国 U23 点球 4-3 乌兹别克斯坦 U23，获得铜牌，如何评价本场比赛？](https://www.zhihu.com/question/2089722594677055700)
1. [亚运会男足铜牌战，李昊扑出两个点球助中国队获得铜牌，完成这样的扑救有多难？会怎样影响球队？](https://www.zhihu.com/question/2089756234240844300)
1. [为什么张纪中版金庸剧能被吹还原原著?](https://www.zhihu.com/question/1924781892516951300)
1. [辞职写网文半年了，结果连签约都过不了，收藏也只有个位数，自以为写的不错，问题到底出在哪里？](https://www.zhihu.com/question/2089031753252061700)
1. [理论上讲XX是女性染色体，那为什么YY不是男性染色体，必须是XY？](https://www.zhihu.com/question/2088316403992508000)
1. [有什么关于福建的冷知识?](https://www.zhihu.com/question/369833104)
1. [如何评价Gemini Flash 和 Pro 模型将于2026年10月9日转入付费模式？](https://www.zhihu.com/question/2089670263927464700)
1. [《给阿嬷的情书》院线下映，累计票房20.05亿，观影人次5881.9万，如何评价这一成绩？](https://www.zhihu.com/question/2088584992443954400)
1. [为何家用WiFi总觉得2.4G反而快于5G，这是我的错觉吗？](https://www.zhihu.com/question/2066457750947763500)
1. [国足 U23 屡创佳绩，关键胜因是什么？这支年轻球队正在发生哪些变化？能给中国足球带来更多可能吗？](https://www.zhihu.com/question/2089761055652012000)

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
<!-- 最后更新时间 Sun Oct 04 2026 05:27:25 GMT+0800 (China Standard Time) -->

1. [总书记赞誉的爱国者](https://s.weibo.com//weibo?q=%23%E6%80%BB%E4%B9%A6%E8%AE%B0%E8%B5%9E%E8%AA%89%E7%9A%84%E7%88%B1%E5%9B%BD%E8%80%85%23&Refer=new_time)
1. [法国博主吐槽中国演员被偷相机](https://s.weibo.com//weibo?q=%E6%B3%95%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%90%90%E6%A7%BD%E4%B8%AD%E5%9B%BD%E6%BC%94%E5%91%98%E8%A2%AB%E5%81%B7%E7%9B%B8%E6%9C%BA&t=31&band_rank=1&Refer=top)
1. [张家齐这对母女真的是一期一个刀](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%BF%99%E5%AF%B9%E6%AF%8D%E5%A5%B3%E7%9C%9F%E7%9A%84%E6%98%AF%E4%B8%80%E6%9C%9F%E4%B8%80%E4%B8%AA%E5%88%80%23&t=31&band_rank=2&Refer=top)
1. [国庆假期第3日跨区域人员流动超3亿](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E7%AC%AC3%E6%97%A5%E8%B7%A8%E5%8C%BA%E5%9F%9F%E4%BA%BA%E5%91%98%E6%B5%81%E5%8A%A8%E8%B6%853%E4%BA%BF%23&t=31&band_rank=3&Refer=top)
1. [焦虑型依恋的人怕分离渴望性爱](https://s.weibo.com//weibo?q=%E7%84%A6%E8%99%91%E5%9E%8B%E4%BE%9D%E6%81%8B%E7%9A%84%E4%BA%BA%E6%80%95%E5%88%86%E7%A6%BB%E6%B8%B4%E6%9C%9B%E6%80%A7%E7%88%B1&t=31&band_rank=4&Refer=top)
1. [以后不许再给我介绍这样的相亲](https://s.weibo.com//weibo?q=%E4%BB%A5%E5%90%8E%E4%B8%8D%E8%AE%B8%E5%86%8D%E7%BB%99%E6%88%91%E4%BB%8B%E7%BB%8D%E8%BF%99%E6%A0%B7%E7%9A%84%E7%9B%B8%E4%BA%B2&t=31&band_rank=5&Refer=top)
1. [克罗地亚0比7英格兰](https://s.weibo.com//weibo?q=%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A0%E6%AF%947%E8%8B%B1%E6%A0%BC%E5%85%B0&t=31&band_rank=6&Refer=top)
1. [知否 剧情设定](https://s.weibo.com//weibo?q=%E7%9F%A5%E5%90%A6%20%E5%89%A7%E6%83%85%E8%AE%BE%E5%AE%9A&t=31&band_rank=7&Refer=top)
1. [她 难听](https://s.weibo.com//weibo?q=%E5%A5%B9%20%E9%9A%BE%E5%90%AC&t=31&band_rank=8&Refer=top)
1. [中国队169金89银83铜收官](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F169%E9%87%9189%E9%93%B683%E9%93%9C%E6%94%B6%E5%AE%98%23&t=31&band_rank=9&Refer=top)
1. [一飞机在百慕大飞往波士顿途中失联](https://s.weibo.com//weibo?q=%23%E4%B8%80%E9%A3%9E%E6%9C%BA%E5%9C%A8%E7%99%BE%E6%85%95%E5%A4%A7%E9%A3%9E%E5%BE%80%E6%B3%A2%E5%A3%AB%E9%A1%BF%E9%80%94%E4%B8%AD%E5%A4%B1%E8%81%94%23&t=31&band_rank=10&Refer=top)
1. [田馥甄亲手毁掉了自己的演艺生涯](https://s.weibo.com//weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E4%BA%B2%E6%89%8B%E6%AF%81%E6%8E%89%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E6%BC%94%E8%89%BA%E7%94%9F%E6%B6%AF%23&t=31&band_rank=11&Refer=top)
1. [亚运男足颁奖只有日本队笑不出来](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E8%BF%90%E7%94%B7%E8%B6%B3%E9%A2%81%E5%A5%96%E5%8F%AA%E6%9C%89%E6%97%A5%E6%9C%AC%E9%98%9F%E7%AC%91%E4%B8%8D%E5%87%BA%E6%9D%A5%23&t=31&band_rank=12&Refer=top)
1. [李飞飞称十年后只剩两类劳动](https://s.weibo.com//weibo?q=%E6%9D%8E%E9%A3%9E%E9%A3%9E%E7%A7%B0%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%AA%E5%89%A9%E4%B8%A4%E7%B1%BB%E5%8A%B3%E5%8A%A8&t=31&band_rank=13&Refer=top)
1. [披哥真把苏有朋姚琛逼急了](https://s.weibo.com//weibo?q=%23%E6%8A%AB%E5%93%A5%E7%9C%9F%E6%8A%8A%E8%8B%8F%E6%9C%89%E6%9C%8B%E5%A7%9A%E7%90%9B%E9%80%BC%E6%80%A5%E4%BA%86%23&t=31&band_rank=14&Refer=top)
1. [话糙理不糙大家多存钱](https://s.weibo.com//weibo?q=%E8%AF%9D%E7%B3%99%E7%90%86%E4%B8%8D%E7%B3%99%E5%A4%A7%E5%AE%B6%E5%A4%9A%E5%AD%98%E9%92%B1&t=31&band_rank=15&Refer=top)
1. [莱巴金娜中网爆冷出局](https://s.weibo.com//weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E4%B8%AD%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23&t=31&band_rank=16&Refer=top)
1. [新能源电车还有多少想象空间](https://s.weibo.com//weibo?q=%E6%96%B0%E8%83%BD%E6%BA%90%E7%94%B5%E8%BD%A6%E8%BF%98%E6%9C%89%E5%A4%9A%E5%B0%91%E6%83%B3%E8%B1%A1%E7%A9%BA%E9%97%B4&t=31&band_rank=17&Refer=top)
1. [郭晓东淘汰](https://s.weibo.com//weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%E6%B7%98%E6%B1%B0%23&t=31&band_rank=18&Refer=top)
1. [中国足球](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83&t=31&band_rank=19&Refer=top)
1. [爬珠峰的人都堵了](https://s.weibo.com//weibo?q=%E7%88%AC%E7%8F%A0%E5%B3%B0%E7%9A%84%E4%BA%BA%E9%83%BD%E5%A0%B5%E4%BA%86&t=31&band_rank=20&Refer=top)
1. [光是看这段文字就力竭了](https://s.weibo.com//weibo?q=%E5%85%89%E6%98%AF%E7%9C%8B%E8%BF%99%E6%AE%B5%E6%96%87%E5%AD%97%E5%B0%B1%E5%8A%9B%E7%AB%AD%E4%BA%86&t=31&band_rank=21&Refer=top)
1. [田馥甄曾说不差钱就喜欢做自己](https://s.weibo.com//weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E6%9B%BE%E8%AF%B4%E4%B8%8D%E5%B7%AE%E9%92%B1%E5%B0%B1%E5%96%9C%E6%AC%A2%E5%81%9A%E8%87%AA%E5%B7%B1%23&t=31&band_rank=22&Refer=top)
1. [男子多次恶意举报足浴店涉黄被行拘](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%A4%9A%E6%AC%A1%E6%81%B6%E6%84%8F%E4%B8%BE%E6%8A%A5%E8%B6%B3%E6%B5%B4%E5%BA%97%E6%B6%89%E9%BB%84%E8%A2%AB%E8%A1%8C%E6%8B%98%23&t=31&band_rank=23&Refer=top)
1. [克罗地亚vs英格兰](https://s.weibo.com//weibo?q=%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9Avs%E8%8B%B1%E6%A0%BC%E5%85%B0&t=31&band_rank=24&Refer=top)
1. [中国男足登上新闻联播](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E8%B6%B3%E7%99%BB%E4%B8%8A%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%23&t=31&band_rank=25&Refer=top)
1. [挂号挂到自家人也太有节目了](https://s.weibo.com//weibo?q=%E6%8C%82%E5%8F%B7%E6%8C%82%E5%88%B0%E8%87%AA%E5%AE%B6%E4%BA%BA%E4%B9%9F%E5%A4%AA%E6%9C%89%E8%8A%82%E7%9B%AE%E4%BA%86&t=31&band_rank=26&Refer=top)
1. [余文乐连线井柏然](https://s.weibo.com//weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E8%BF%9E%E7%BA%BF%E4%BA%95%E6%9F%8F%E7%84%B6%23&t=31&band_rank=27&Refer=top)
1. [30岁女子靠AI婚庆培训年入200万](https://s.weibo.com//weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E9%9D%A0AI%E5%A9%9A%E5%BA%86%E5%9F%B9%E8%AE%AD%E5%B9%B4%E5%85%A5200%E4%B8%87%23&t=31&band_rank=28&Refer=top)
1. [刘学义谭松韵兰香如故香爆了](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%A6%99%E7%88%86%E4%BA%86%23&t=31&band_rank=29&Refer=top)
1. [女子连公共WiFi被连扣3笔钱](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%9E%E5%85%AC%E5%85%B1WiFi%E8%A2%AB%E8%BF%9E%E6%89%A33%E7%AC%94%E9%92%B1%23&t=31&band_rank=30&Refer=top)
1. [难怪老外都说中国人嘴巴毒](https://s.weibo.com//weibo?q=%E9%9A%BE%E6%80%AA%E8%80%81%E5%A4%96%E9%83%BD%E8%AF%B4%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%98%B4%E5%B7%B4%E6%AF%92&t=31&band_rank=31&Refer=top)
1. [闲鱼 黑话](https://s.weibo.com//weibo?q=%E9%97%B2%E9%B1%BC%20%E9%BB%91%E8%AF%9D&t=31&band_rank=32&Refer=top)
1. [披荆斩棘四公总排名](https://s.weibo.com//weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%9B%E5%85%AC%E6%80%BB%E6%8E%92%E5%90%8D%23&t=31&band_rank=33&Refer=top)
1. [64岁贵州高能量姐姐在外网火了](https://s.weibo.com//weibo?q=64%E5%B2%81%E8%B4%B5%E5%B7%9E%E9%AB%98%E8%83%BD%E9%87%8F%E5%A7%90%E5%A7%90%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86&t=31&band_rank=34&Refer=top)
1. [原来羊肚菌要用刀割不能拔](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%BE%8A%E8%82%9A%E8%8F%8C%E8%A6%81%E7%94%A8%E5%88%80%E5%89%B2%E4%B8%8D%E8%83%BD%E6%8B%94%23&t=31&band_rank=35&Refer=top)
1. [马克西助攻詹姆斯空接暴扣](https://s.weibo.com//weibo?q=%E9%A9%AC%E5%85%8B%E8%A5%BF%E5%8A%A9%E6%94%BB%E8%A9%B9%E5%A7%86%E6%96%AF%E7%A9%BA%E6%8E%A5%E6%9A%B4%E6%89%A3&t=31&band_rank=36&Refer=top)
1. [句号 钟意](https://s.weibo.com//weibo?q=%E5%8F%A5%E5%8F%B7%20%E9%92%9F%E6%84%8F&t=31&band_rank=37&Refer=top)
1. [KPL](https://s.weibo.com//weibo?q=KPL&t=31&band_rank=38&Refer=top)
1. [王一博究竟看到了什么](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%A9%B6%E7%AB%9F%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BB%80%E4%B9%88%23&t=31&band_rank=39&Refer=top)
1. [兰香如故香爆了](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%A6%99%E7%88%86%E4%BA%86%23&t=31&band_rank=40&Refer=top)
1. [美方指责星巴克在新疆开门店](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E6%96%B9%E6%8C%87%E8%B4%A3%E6%98%9F%E5%B7%B4%E5%85%8B%E5%9C%A8%E6%96%B0%E7%96%86%E5%BC%80%E9%97%A8%E5%BA%97%23&t=31&band_rank=41&Refer=top)
1. [巴勒斯坦球员向国足道歉](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E7%90%83%E5%91%98%E5%90%91%E5%9B%BD%E8%B6%B3%E9%81%93%E6%AD%89%23&t=31&band_rank=42&Refer=top)
1. [亚运男足颁奖韩国国旗卡住遭嘘声](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E8%BF%90%E7%94%B7%E8%B6%B3%E9%A2%81%E5%A5%96%E9%9F%A9%E5%9B%BD%E5%9B%BD%E6%97%97%E5%8D%A1%E4%BD%8F%E9%81%AD%E5%98%98%E5%A3%B0%23&t=31&band_rank=43&Refer=top)
1. [TES战胜狼队](https://s.weibo.com//weibo?q=TES%E6%88%98%E8%83%9C%E7%8B%BC%E9%98%9F&t=31&band_rank=44&Refer=top)
1. [女子做早餐被网友说对自己太差](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E5%81%9A%E6%97%A9%E9%A4%90%E8%A2%AB%E7%BD%91%E5%8F%8B%E8%AF%B4%E5%AF%B9%E8%87%AA%E5%B7%B1%E5%A4%AA%E5%B7%AE&t=31&band_rank=45&Refer=top)
1. [陶白白前妻自曝离婚没分到钱](https://s.weibo.com//weibo?q=%23%E9%99%B6%E7%99%BD%E7%99%BD%E5%89%8D%E5%A6%BB%E8%87%AA%E6%9B%9D%E7%A6%BB%E5%A9%9A%E6%B2%A1%E5%88%86%E5%88%B0%E9%92%B1%23&t=31&band_rank=46&Refer=top)
1. [司机被拍到高速开智驾睡着](https://s.weibo.com//weibo?q=%23%E5%8F%B8%E6%9C%BA%E8%A2%AB%E6%8B%8D%E5%88%B0%E9%AB%98%E9%80%9F%E5%BC%80%E6%99%BA%E9%A9%BE%E7%9D%A1%E7%9D%80%23&t=31&band_rank=47&Refer=top)
1. [韩国U23夺金免兵役球员集体喜极而泣](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BDU23%E5%A4%BA%E9%87%91%E5%85%8D%E5%85%B5%E5%BD%B9%E7%90%83%E5%91%98%E9%9B%86%E4%BD%93%E5%96%9C%E6%9E%81%E8%80%8C%E6%B3%A3%23&t=31&band_rank=48&Refer=top)
1. [EDGM战胜JDG](https://s.weibo.com//weibo?q=EDGM%E6%88%98%E8%83%9CJDG&t=31&band_rank=49&Refer=top)
1. [王以太披荆斩棘四公抢席位排名](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BB%A5%E5%A4%AA%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%9B%E5%85%AC%E6%8A%A2%E5%B8%AD%E4%BD%8D%E6%8E%92%E5%90%8D%23&t=31&band_rank=50&Refer=top)
1. [以后不许再给我介绍这样的相亲](https://s.weibo.com//weibo?q=%E4%BB%A5%E5%90%8E%E4%B8%8D%E8%AE%B8%E5%86%8D%E7%BB%99%E6%88%91%E4%BB%8B%E7%BB%8D%E8%BF%99%E6%A0%B7%E7%9A%84%E7%9B%B8%E4%BA%B2&t=31&band_rank=4&Refer=top)
1. [她 难听](https://s.weibo.com//weibo?q=%E5%A5%B9%20%E9%9A%BE%E5%90%AC&t=31&band_rank=5&Refer=top)
1. [亚运男足颁奖只有日本队笑不出来](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E8%BF%90%E7%94%B7%E8%B6%B3%E9%A2%81%E5%A5%96%E5%8F%AA%E6%9C%89%E6%97%A5%E6%9C%AC%E9%98%9F%E7%AC%91%E4%B8%8D%E5%87%BA%E6%9D%A5%23&t=31&band_rank=6&Refer=top)
1. [焦虑型依恋的人怕分离渴望性爱](https://s.weibo.com//weibo?q=%E7%84%A6%E8%99%91%E5%9E%8B%E4%BE%9D%E6%81%8B%E7%9A%84%E4%BA%BA%E6%80%95%E5%88%86%E7%A6%BB%E6%B8%B4%E6%9C%9B%E6%80%A7%E7%88%B1&t=31&band_rank=7&Refer=top)
1. [司机被拍到高速开智驾睡着](https://s.weibo.com//weibo?q=%23%E5%8F%B8%E6%9C%BA%E8%A2%AB%E6%8B%8D%E5%88%B0%E9%AB%98%E9%80%9F%E5%BC%80%E6%99%BA%E9%A9%BE%E7%9D%A1%E7%9D%80%23&t=31&band_rank=8&Refer=top)
1. [刘学义谭松韵兰香如故香爆了](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%A6%99%E7%88%86%E4%BA%86%23&t=31&band_rank=9&Refer=top)
1. [爬珠峰的人都堵了](https://s.weibo.com//weibo?q=%E7%88%AC%E7%8F%A0%E5%B3%B0%E7%9A%84%E4%BA%BA%E9%83%BD%E5%A0%B5%E4%BA%86&t=31&band_rank=10&Refer=top)
1. [克罗地亚vs英格兰](https://s.weibo.com//weibo?q=%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9Avs%E8%8B%B1%E6%A0%BC%E5%85%B0&t=31&band_rank=12&Refer=top)
1. [披荆斩棘四公总排名](https://s.weibo.com//weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%9B%E5%85%AC%E6%80%BB%E6%8E%92%E5%90%8D%23&t=31&band_rank=13&Refer=top)
1. [莱巴金娜中网爆冷出局](https://s.weibo.com//weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E4%B8%AD%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23&t=31&band_rank=14&Refer=top)
1. [新能源电车还有多少想象空间](https://s.weibo.com//weibo?q=%E6%96%B0%E8%83%BD%E6%BA%90%E7%94%B5%E8%BD%A6%E8%BF%98%E6%9C%89%E5%A4%9A%E5%B0%91%E6%83%B3%E8%B1%A1%E7%A9%BA%E9%97%B4&t=31&band_rank=15&Refer=top)
1. [美方指责星巴克在新疆开门店](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E6%96%B9%E6%8C%87%E8%B4%A3%E6%98%9F%E5%B7%B4%E5%85%8B%E5%9C%A8%E6%96%B0%E7%96%86%E5%BC%80%E9%97%A8%E5%BA%97%23&t=31&band_rank=16&Refer=top)
1. [中国队169金89银83铜收官](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F169%E9%87%9189%E9%93%B683%E9%93%9C%E6%94%B6%E5%AE%98%23&t=31&band_rank=17&Refer=top)
1. [王以太披荆斩棘四公抢席位排名](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BB%A5%E5%A4%AA%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%9B%E5%85%AC%E6%8A%A2%E5%B8%AD%E4%BD%8D%E6%8E%92%E5%90%8D%23&t=31&band_rank=18&Refer=top)
1. [郭晓东淘汰](https://s.weibo.com//weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%E6%B7%98%E6%B1%B0%23&t=31&band_rank=19&Refer=top)
1. [余文乐连线井柏然](https://s.weibo.com//weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E8%BF%9E%E7%BA%BF%E4%BA%95%E6%9F%8F%E7%84%B6%23&t=31&band_rank=20&Refer=top)
1. [田馥甄曾说不差钱就喜欢做自己](https://s.weibo.com//weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E6%9B%BE%E8%AF%B4%E4%B8%8D%E5%B7%AE%E9%92%B1%E5%B0%B1%E5%96%9C%E6%AC%A2%E5%81%9A%E8%87%AA%E5%B7%B1%23&t=31&band_rank=21&Refer=top)
1. [知否 剧情设定](https://s.weibo.com//weibo?q=%E7%9F%A5%E5%90%A6%20%E5%89%A7%E6%83%85%E8%AE%BE%E5%AE%9A&t=31&band_rank=22&Refer=top)
1. [一飞机在百慕大飞往波士顿途中失联](https://s.weibo.com//weibo?q=%23%E4%B8%80%E9%A3%9E%E6%9C%BA%E5%9C%A8%E7%99%BE%E6%85%95%E5%A4%A7%E9%A3%9E%E5%BE%80%E6%B3%A2%E5%A3%AB%E9%A1%BF%E9%80%94%E4%B8%AD%E5%A4%B1%E8%81%94%23&t=31&band_rank=23&Refer=top)
1. [话糙理不糙大家多存钱](https://s.weibo.com//weibo?q=%E8%AF%9D%E7%B3%99%E7%90%86%E4%B8%8D%E7%B3%99%E5%A4%A7%E5%AE%B6%E5%A4%9A%E5%AD%98%E9%92%B1&t=31&band_rank=24&Refer=top)
1. [巴勒斯坦球员向国足道歉](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E7%90%83%E5%91%98%E5%90%91%E5%9B%BD%E8%B6%B3%E9%81%93%E6%AD%89%23&t=31&band_rank=25&Refer=top)
1. [陶白白前妻自曝离婚没分到钱](https://s.weibo.com//weibo?q=%23%E9%99%B6%E7%99%BD%E7%99%BD%E5%89%8D%E5%A6%BB%E8%87%AA%E6%9B%9D%E7%A6%BB%E5%A9%9A%E6%B2%A1%E5%88%86%E5%88%B0%E9%92%B1%23&t=31&band_rank=26&Refer=top)
1. [韩国U23夺金免兵役球员集体喜极而泣](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BDU23%E5%A4%BA%E9%87%91%E5%85%8D%E5%85%B5%E5%BD%B9%E7%90%83%E5%91%98%E9%9B%86%E4%BD%93%E5%96%9C%E6%9E%81%E8%80%8C%E6%B3%A3%23&t=31&band_rank=27&Refer=top)
1. [女子做早餐被网友说对自己太差](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E5%81%9A%E6%97%A9%E9%A4%90%E8%A2%AB%E7%BD%91%E5%8F%8B%E8%AF%B4%E5%AF%B9%E8%87%AA%E5%B7%B1%E5%A4%AA%E5%B7%AE&t=31&band_rank=28&Refer=top)
1. [EDGM战胜JDG](https://s.weibo.com//weibo?q=EDGM%E6%88%98%E8%83%9CJDG&t=31&band_rank=29&Refer=top)
1. [句号 钟意](https://s.weibo.com//weibo?q=%E5%8F%A5%E5%8F%B7%20%E9%92%9F%E6%84%8F&t=31&band_rank=32&Refer=top)
1. [中国男足登上新闻联播](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E8%B6%B3%E7%99%BB%E4%B8%8A%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%23&t=31&band_rank=33&Refer=top)
1. [闲鱼 黑话](https://s.weibo.com//weibo?q=%E9%97%B2%E9%B1%BC%20%E9%BB%91%E8%AF%9D&t=31&band_rank=34&Refer=top)
1. [TES战胜狼队](https://s.weibo.com//weibo?q=TES%E6%88%98%E8%83%9C%E7%8B%BC%E9%98%9F&t=31&band_rank=35&Refer=top)
1. [李飞飞称十年后只剩两类劳动](https://s.weibo.com//weibo?q=%E6%9D%8E%E9%A3%9E%E9%A3%9E%E7%A7%B0%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%AA%E5%89%A9%E4%B8%A4%E7%B1%BB%E5%8A%B3%E5%8A%A8&t=31&band_rank=37&Refer=top)
1. [兰香如故香爆了](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%A6%99%E7%88%86%E4%BA%86%23&t=31&band_rank=38&Refer=top)
1. [光是看这段文字就力竭了](https://s.weibo.com//weibo?q=%E5%85%89%E6%98%AF%E7%9C%8B%E8%BF%99%E6%AE%B5%E6%96%87%E5%AD%97%E5%B0%B1%E5%8A%9B%E7%AB%AD%E4%BA%86&t=31&band_rank=39&Refer=top)
1. [30岁女子靠AI婚庆培训年入200万](https://s.weibo.com//weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E9%9D%A0AI%E5%A9%9A%E5%BA%86%E5%9F%B9%E8%AE%AD%E5%B9%B4%E5%85%A5200%E4%B8%87%23&t=31&band_rank=40&Refer=top)
1. [披哥真把苏有朋姚琛逼急了](https://s.weibo.com//weibo?q=%23%E6%8A%AB%E5%93%A5%E7%9C%9F%E6%8A%8A%E8%8B%8F%E6%9C%89%E6%9C%8B%E5%A7%9A%E7%90%9B%E9%80%BC%E6%80%A5%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [狼队大师轮换Fly上场](https://s.weibo.com//weibo?q=%23%E7%8B%BC%E9%98%9F%E5%A4%A7%E5%B8%88%E8%BD%AE%E6%8D%A2Fly%E4%B8%8A%E5%9C%BA%23&t=31&band_rank=42&Refer=top)
1. [刘学义回应林锦岐晕了](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%9B%9E%E5%BA%94%E6%9E%97%E9%94%A6%E5%B2%90%E6%99%95%E4%BA%86%23&t=31&band_rank=43&Refer=top)
1. [黄安两个妹妹剃度出家](https://s.weibo.com//weibo?q=%E9%BB%84%E5%AE%89%E4%B8%A4%E4%B8%AA%E5%A6%B9%E5%A6%B9%E5%89%83%E5%BA%A6%E5%87%BA%E5%AE%B6&t=31&band_rank=44&Refer=top)
1. [小莲是南客求婚之后才喜欢上他](https://s.weibo.com//weibo?q=%E5%B0%8F%E8%8E%B2%E6%98%AF%E5%8D%97%E5%AE%A2%E6%B1%82%E5%A9%9A%E4%B9%8B%E5%90%8E%E6%89%8D%E5%96%9C%E6%AC%A2%E4%B8%8A%E4%BB%96&t=31&band_rank=45&Refer=top)
1. [内娱编剧写不好低学历女主了](https://s.weibo.com//weibo?q=%23%E5%86%85%E5%A8%B1%E7%BC%96%E5%89%A7%E5%86%99%E4%B8%8D%E5%A5%BD%E4%BD%8E%E5%AD%A6%E5%8E%86%E5%A5%B3%E4%B8%BB%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [原来羊肚菌要用刀割不能拔](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%BE%8A%E8%82%9A%E8%8F%8C%E8%A6%81%E7%94%A8%E5%88%80%E5%89%B2%E4%B8%8D%E8%83%BD%E6%8B%94%23&t=31&band_rank=47&Refer=top)
1. [为什么现在退房时酒店不查房了](https://s.weibo.com//weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E9%80%80%E6%88%BF%E6%97%B6%E9%85%92%E5%BA%97%E4%B8%8D%E6%9F%A5%E6%88%BF%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [挂号挂到自家人也太有节目了](https://s.weibo.com//weibo?q=%E6%8C%82%E5%8F%B7%E6%8C%82%E5%88%B0%E8%87%AA%E5%AE%B6%E4%BA%BA%E4%B9%9F%E5%A4%AA%E6%9C%89%E8%8A%82%E7%9B%AE%E4%BA%86&t=31&band_rank=49&Refer=top)
1. [大兴安岭景区出现吊牌衣](https://s.weibo.com//weibo?q=%E5%A4%A7%E5%85%B4%E5%AE%89%E5%B2%AD%E6%99%AF%E5%8C%BA%E5%87%BA%E7%8E%B0%E5%90%8A%E7%89%8C%E8%A1%A3&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
