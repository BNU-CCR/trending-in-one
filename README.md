# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-16 02:14:16

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
<!-- 最后更新时间 Wed Sep 16 2026 03:11:39 GMT+0800 (China Standard Time) -->

1. [存1万定期1年但忘了30年](https://so.toutiao.com/search?keyword=存1万定期1年但忘了30年)
1. [中方回应美军称已拥有在轨太空武器](https://so.toutiao.com/search?keyword=中方回应美军称已拥有在轨太空武器)
1. [一组数据看8月份国民经济运行平稳](https://so.toutiao.com/search?keyword=一组数据看8月份国民经济运行平稳)
1. [“黑人”陈建州心梗入院](https://so.toutiao.com/search?keyword=“黑人”陈建州心梗入院)
1. [一线城市房价涨了](https://so.toutiao.com/search?keyword=一线城市房价涨了)
1. [鸠山由纪夫：日本应始终反省和道歉](https://so.toutiao.com/search?keyword=鸠山由纪夫：日本应始终反省和道歉)
1. [我国人口总量14.05亿](https://so.toutiao.com/search?keyword=我国人口总量14.05亿)
1. [牛肉价格为什么开始“起飞”](https://so.toutiao.com/search?keyword=牛肉价格为什么开始“起飞”)
1. [研究：得糖尿病的人大多离不开这4点](https://so.toutiao.com/search?keyword=研究：得糖尿病的人大多离不开这4点)
1. [李大霄：A股牛市已经告一段落](https://so.toutiao.com/search?keyword=李大霄：A股牛市已经告一段落)
1. [不良信息一键举报 共建清朗网络空间](https://so.toutiao.com/search?keyword=不良信息一键举报%20共建清朗网络空间)
1. [老板娘称被公职人员强奸最新进展](https://so.toutiao.com/search?keyword=老板娘称被公职人员强奸最新进展)
1. [黎明当选四川雅安市市长](https://so.toutiao.com/search?keyword=黎明当选四川雅安市市长)
1. [樊振东未参赛登亚运会海报原因](https://so.toutiao.com/search?keyword=樊振东未参赛登亚运会海报原因)
1. [老人接到女儿离世噩耗 导游助其回家](https://so.toutiao.com/search?keyword=老人接到女儿离世噩耗%20导游助其回家)
1. [塔克拉玛干沙漠发现大型地下水水源](https://so.toutiao.com/search?keyword=塔克拉玛干沙漠发现大型地下水水源)
1. [“日不落”要变成“小不列颠”吗](https://so.toutiao.com/search?keyword=“日不落”要变成“小不列颠”吗)
1. [俄大量无人机和导弹袭击乌有何目的](https://so.toutiao.com/search?keyword=俄大量无人机和导弹袭击乌有何目的)
1. [浙大教授回应飘逸刘海：我本色表现](https://so.toutiao.com/search?keyword=浙大教授回应飘逸刘海：我本色表现)
1. [南京一高校学生大晚上排长队洗澡](https://so.toutiao.com/search?keyword=南京一高校学生大晚上排长队洗澡)
1. [苹果回应iPhone 18 Pro破发](https://so.toutiao.com/search?keyword=苹果回应iPhone%2018%20Pro破发)
1. [男子买1斤蚯蚓忘取出结果一夜跑光](https://so.toutiao.com/search?keyword=男子买1斤蚯蚓忘取出结果一夜跑光)
1. [司机补路后拉绳警示致人死亡](https://so.toutiao.com/search?keyword=司机补路后拉绳警示致人死亡)
1. [iOS 27表现如何](https://so.toutiao.com/search?keyword=iOS%2027表现如何)
1. [10后学生流行起“呆毛”发型](https://so.toutiao.com/search?keyword=10后学生流行起“呆毛”发型)
1. [老太入棺一天后又睁眼“复活”](https://so.toutiao.com/search?keyword=老太入棺一天后又睁眼“复活”)
1. [被网红恶搞获赔款杨坤将全部捐出](https://so.toutiao.com/search?keyword=被网红恶搞获赔款杨坤将全部捐出)
1. [问界致全体渠道伙伴的函曝光](https://so.toutiao.com/search?keyword=问界致全体渠道伙伴的函曝光)
1. [云南一村山体开裂出现“马刀树”](https://so.toutiao.com/search?keyword=云南一村山体开裂出现“马刀树”)
1. [伊总统：不能让美以获知最高领袖行踪](https://so.toutiao.com/search?keyword=伊总统：不能让美以获知最高领袖行踪)
1. [英国若“解体”有何影响](https://so.toutiao.com/search?keyword=英国若“解体”有何影响)
1. [黄仁勋：中国对AI的叙事方式更务实](https://so.toutiao.com/search?keyword=黄仁勋：中国对AI的叙事方式更务实)
1. [野人先生创始人曾回应“价格贵”](https://so.toutiao.com/search?keyword=野人先生创始人曾回应“价格贵”)
1. [俄军大规模无人机夜袭乌西部有何目的](https://so.toutiao.com/search?keyword=俄军大规模无人机夜袭乌西部有何目的)
1. [吴心伯：美国不可能为“台独”而战](https://so.toutiao.com/search?keyword=吴心伯：美国不可能为“台独”而战)
1. [DeepSeek工程师发文引热议](https://so.toutiao.com/search?keyword=DeepSeek工程师发文引热议)
1. [发改委安排3000万支持海南灾后恢复](https://so.toutiao.com/search?keyword=发改委安排3000万支持海南灾后恢复)
1. [平台月付将退出支付选项冲上热搜](https://so.toutiao.com/search?keyword=平台月付将退出支付选项冲上热搜)
1. [赖岳谦：美国做而不宣撤回到二三岛链](https://so.toutiao.com/search?keyword=赖岳谦：美国做而不宣撤回到二三岛链)
1. [男子苦钓三天钓起118斤大青鱼](https://so.toutiao.com/search?keyword=男子苦钓三天钓起118斤大青鱼)
1. [4岁女孩玩金箍棒捅坏家中万元电视](https://so.toutiao.com/search?keyword=4岁女孩玩金箍棒捅坏家中万元电视)
1. [海南保亭村民：30亩菜地全部被淹](https://so.toutiao.com/search?keyword=海南保亭村民：30亩菜地全部被淹)
1. [任泽平：未来是结构性牛市](https://so.toutiao.com/search?keyword=任泽平：未来是结构性牛市)
1. [名古屋亚运会的“节俭实验”也有麻烦](https://so.toutiao.com/search?keyword=名古屋亚运会的“节俭实验”也有麻烦)
1. [外交部：望日中议联秉持对华友好传统](https://so.toutiao.com/search?keyword=外交部：望日中议联秉持对华友好传统)
1. [茶器上的花纹是如何制作出来的](https://so.toutiao.com/search?keyword=茶器上的花纹是如何制作出来的)
1. [李梦一秒化身“赵星棠”](https://so.toutiao.com/search?keyword=李梦一秒化身“赵星棠”)
1. [退役女将军亲历北京香山论坛20年](https://so.toutiao.com/search?keyword=退役女将军亲历北京香山论坛20年)
1. [“能看海的地铁”试乘首日挤爆了](https://so.toutiao.com/search?keyword=“能看海的地铁”试乘首日挤爆了)
1. [电厂冷却塔画蓝天白云引鸟类保护争议](https://so.toutiao.com/search?keyword=电厂冷却塔画蓝天白云引鸟类保护争议)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Sep 16 2026 02:10:06 GMT+0800 (China Standard Time) -->

1. [多车队宣布永久退出中国 GT](https://www.zhihu.com/search?q=%E5%A4%9A%E8%BD%A6%E9%98%9F%E5%AE%A3%E5%B8%83%E6%B0%B8%E4%B9%85%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%20GT)
1. [华为赛力斯合作模式调整](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E8%B5%9B%E5%8A%9B%E6%96%AF%E5%90%88%E4%BD%9C%E6%A8%A1%E5%BC%8F%E8%B0%83%E6%95%B4)
1. [情侣在演唱会求婚被喊坐下](https://www.zhihu.com/search?q=%E6%83%85%E4%BE%A3%E5%9C%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B1%82%E5%A9%9A%E8%A2%AB%E5%96%8A%E5%9D%90%E4%B8%8B)
1. [南太行200多斤驴友被挤下悬崖](https://www.zhihu.com/search?q=%E5%8D%97%E5%A4%AA%E8%A1%8C200%E5%A4%9A%E6%96%A4%E9%A9%B4%E5%8F%8B%E8%A2%AB%E6%8C%A4%E4%B8%8B%E6%82%AC%E5%B4%96)
1. [知乎 CLI 创作者能力上新](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%20CLI%20%E5%88%9B%E4%BD%9C%E8%80%85%E8%83%BD%E5%8A%9B%E4%B8%8A%E6%96%B0)
1. [DeepSeek 刘胜与回应长文爆火](https://www.zhihu.com/search?q=DeepSeek%20%E5%88%98%E8%83%9C%E4%B8%8E%E5%9B%9E%E5%BA%94%E9%95%BF%E6%96%87%E7%88%86%E7%81%AB)
1. [钟薛高将复活](https://www.zhihu.com/search?q=%E9%92%9F%E8%96%9B%E9%AB%98%E5%B0%86%E5%A4%8D%E6%B4%BB)
1. [HYROX选手失禁仍完赛](https://www.zhihu.com/search?q=HYROX%E9%80%89%E6%89%8B%E5%A4%B1%E7%A6%81%E4%BB%8D%E5%AE%8C%E8%B5%9B)
1. [时代峰峻被曝无限期整改](https://www.zhihu.com/search?q=%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%A2%AB%E6%9B%9D%E6%97%A0%E9%99%90%E6%9C%9F%E6%95%B4%E6%94%B9)
1. [卫龙进口魔芋粉检出二氧化硫超标](https://www.zhihu.com/search?q=%E5%8D%AB%E9%BE%99%E8%BF%9B%E5%8F%A3%E9%AD%94%E8%8A%8B%E7%B2%89%E6%A3%80%E5%87%BA%E4%BA%8C%E6%B0%A7%E5%8C%96%E7%A1%AB%E8%B6%85%E6%A0%87)
1. [女子拍下骇人巨型蜗牛引热议](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E6%8B%8D%E4%B8%8B%E9%AA%87%E4%BA%BA%E5%B7%A8%E5%9E%8B%E8%9C%97%E7%89%9B%E5%BC%95%E7%83%AD%E8%AE%AE)
1. [三星嘲讽苹果iPhoneDuo](https://www.zhihu.com/search?q=%E4%B8%89%E6%98%9F%E5%98%B2%E8%AE%BD%E8%8B%B9%E6%9E%9CiPhoneDuo)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Sep 16 2026 02:14:16 GMT+0800 (China Standard Time) -->

1. [如何看待 DeepSeek 刘胜与的《我不得不把才华埋葬在昨天》？](https://www.zhihu.com/question/2083123101873844700)
1. [如何评价湘雅医院「23年未见父母，每天睡2小时」教师PPT争议？影响如何？是否存在夸大及其它相关问题？](https://www.zhihu.com/question/2083244063277503200)
1. [鸿蒙智行为何要在此时调整与赛力斯合作模式，并让华为隐居幕后？此次调整会影响「华为5年不下场造车」吗？](https://www.zhihu.com/question/2083273181008064800)
1. [为什么《笑傲江湖》中岳不群在网络的风评这几年变好了？](https://www.zhihu.com/question/2079288771611211300)
1. [如何看待英伟达、Palantir等金主集体限制Anthropic Claude使用？](https://www.zhihu.com/question/2083117744707352600)
1. [二本文科女，没有任何技能，父母是农民，身体也不好，家里几乎没有存款，求助以后要怎么走，有什么出路？](https://www.zhihu.com/question/2001334359232385000)
1. [前女足国脚高宏霞手握 29 个全国冠军，退役后当城管 19 年，这种职业转变有何意义？](https://www.zhihu.com/question/2082918732372956700)
1. [比亚迪高管称燃油车没有未来，如何看待这一言论？燃油车会快速退场吗？](https://www.zhihu.com/question/2082845705690001700)
1. [王健林又卖掉一个47亿资产，万达旗下盈方体育将HYROX多数股权卖给LVMH旗下机构，这意味着什么？](https://www.zhihu.com/question/2082804365455378400)
1. [如何理解李博杰开源的《深入理解 AI Agent》？](https://www.zhihu.com/question/2082847664274497800)
1. [鸡如果吃了水蛭，水蛭可以钻破鸡的肠胃，长期在鸡的体内吸血吗？](https://www.zhihu.com/question/1947010301284287000)
1. [报告显示 72% 的成年人未达饮用水适宜摄入量，水没喝够会对身体产生啥影响？该怎样正确喝水？](https://www.zhihu.com/question/2083121786422387500)
1. [「大学生生活费才3000」引发讨论，有人说不够花有人说很多，你怎么看？你上大学每月生活费是多少？](https://www.zhihu.com/question/2083183110737195300)
1. [为什么重庆可以在山上建设城市，深圳香港不可以？](https://www.zhihu.com/question/535563414)
1. [8岁女孩被男孩推倒、威胁，用手表报警，围观者笑她「浪费警力」，民警否认并调监控检查伤势，如何看待此举？](https://www.zhihu.com/question/2083160484220515300)
1. [为什么在北京，大家对于通勤的忍受度这么高？](https://www.zhihu.com/question/2056391510673855700)
1. [为什么《一步之遥》《邪不压正》都达不到《让子弹飞》的高度？](https://www.zhihu.com/question/2079894213798400500)
1. [如何向别人解释“有你这AI写代码的时间，我早就古法编程写完了”？](https://www.zhihu.com/question/2040516110559220500)
1. [从经济学意义上来说，到底是“物美价廉”靠谱？还是“一分钱，一分货”靠谱？](https://www.zhihu.com/question/2079911455818830600)
1. [克苏鲁式的网文目前只有诡秘之主被广泛认可，是我们没有找到对的方向吗？](https://www.zhihu.com/question/2078073383217018600)
1. [美国承认已拥有在轨「太空控制武器」，它可能会是种什么武器？太空军事化会加速到来吗？](https://www.zhihu.com/question/2083118687955968000)
1. [ai大概还要多久就可以取代程序员了?](https://www.zhihu.com/question/2038411932424725800)
1. [古希腊土地贫瘠面积狭小，为啥会诞生如此璀璨的文明？](https://www.zhihu.com/question/618542027)
1. [网友称空管开始试点劳务派遣模式，是真的吗？会带来哪些潜在风险或影响？](https://www.zhihu.com/question/2082555742339462400)
1. [下属总是推一下动一下，缺乏主动性，管理者该从哪些方面提升自己的管理能力？](https://www.zhihu.com/question/2080911524374261800)
1. [蚊子除了吃人血还吃什么，蚊子有什么益处吗？](https://www.zhihu.com/question/2058157206168770000)
1. [我很好奇，爱民如子，以人为本的刘备为什么会去镇压黄巾起义，难道他不知道黄巾军大多是活不下去的饥民吗？](https://www.zhihu.com/question/2060286714862735600)
1. [为什么有的影视剧中反派的魅力比正派还要高？](https://www.zhihu.com/question/406568325)
1. [有没有简单的早餐，不会面食，最近不知道吃什么了?](https://www.zhihu.com/question/1911794463967248600)
1. [中国厂商推出改造版 RTX5090 显卡，售价 2.6 万元，你觉得「良心」吗？](https://www.zhihu.com/question/2082204780022199300)

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
<!-- 最后更新时间 Wed Sep 16 2026 02:18:23 GMT+0800 (China Standard Time) -->

1. [习近平南亚之行三大成果](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%8D%97%E4%BA%9A%E4%B9%8B%E8%A1%8C%E4%B8%89%E5%A4%A7%E6%88%90%E6%9E%9C%23&Refer=new_time)
1. [发朋友圈要有滞后性](https://s.weibo.com//weibo?q=%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%A6%81%E6%9C%89%E6%BB%9E%E5%90%8E%E6%80%A7&t=31&band_rank=1&Refer=top)
1. [野人先生成本](https://s.weibo.com//weibo?q=%23%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E6%88%90%E6%9C%AC%23&t=31&band_rank=2&Refer=top)
1. [4问4答了解平陆运河为何而建](https://s.weibo.com//weibo?q=%234%E9%97%AE4%E7%AD%94%E4%BA%86%E8%A7%A3%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B3%E4%B8%BA%E4%BD%95%E8%80%8C%E5%BB%BA%23&t=31&band_rank=3&Refer=top)
1. [一劳永逸解决台湾问题](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%8A%B3%E6%B0%B8%E9%80%B8%E8%A7%A3%E5%86%B3%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%23&t=31&band_rank=4&Refer=top)
1. [弟弟离世数周社恐哥哥无法自理死亡](https://s.weibo.com//weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%A6%BB%E4%B8%96%E6%95%B0%E5%91%A8%E7%A4%BE%E6%81%90%E5%93%A5%E5%93%A5%E6%97%A0%E6%B3%95%E8%87%AA%E7%90%86%E6%AD%BB%E4%BA%A1%23&t=31&band_rank=5&Refer=top)
1. [兰香如故腾讯今年第四部破万剧](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%85%BE%E8%AE%AF%E4%BB%8A%E5%B9%B4%E7%AC%AC%E5%9B%9B%E9%83%A8%E7%A0%B4%E4%B8%87%E5%89%A7%23&t=31&band_rank=6&Refer=top)
1. [新能源汽车 燃油车](https://s.weibo.com//weibo?q=%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%20%E7%87%83%E6%B2%B9%E8%BD%A6&t=31&band_rank=7&Refer=top)
1. [为什么现在都买电车了](https://s.weibo.com//weibo?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E9%83%BD%E4%B9%B0%E7%94%B5%E8%BD%A6%E4%BA%86&t=31&band_rank=8&Refer=top)
1. [停产了但让你怀念的零食](https://s.weibo.com//weibo?q=%E5%81%9C%E4%BA%A7%E4%BA%86%E4%BD%86%E8%AE%A9%E4%BD%A0%E6%80%80%E5%BF%B5%E7%9A%84%E9%9B%B6%E9%A3%9F&t=31&band_rank=9&Refer=top)
1. [网传刘亦菲陈晓咸雪导演伊峥](https://s.weibo.com//weibo?q=%23%E7%BD%91%E4%BC%A0%E5%88%98%E4%BA%A6%E8%8F%B2%E9%99%88%E6%99%93%E5%92%B8%E9%9B%AA%E5%AF%BC%E6%BC%94%E4%BC%8A%E5%B3%A5%23&t=31&band_rank=10&Refer=top)
1. [隐翅虫被女生用手掐着玩](https://s.weibo.com//weibo?q=%23%E9%9A%90%E7%BF%85%E8%99%AB%E8%A2%AB%E5%A5%B3%E7%94%9F%E7%94%A8%E6%89%8B%E6%8E%90%E7%9D%80%E7%8E%A9%23&t=31&band_rank=11&Refer=top)
1. [产房盼男 病房盼女](https://s.weibo.com//weibo?q=%E4%BA%A7%E6%88%BF%E7%9B%BC%E7%94%B7%20%E7%97%85%E6%88%BF%E7%9B%BC%E5%A5%B3&t=31&band_rank=12&Refer=top)
1. [两次亲子鉴定确认孙子非亡父亲生](https://s.weibo.com//weibo?q=%23%E4%B8%A4%E6%AC%A1%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%E7%A1%AE%E8%AE%A4%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%A1%E7%88%B6%E4%BA%B2%E7%94%9F%23&t=31&band_rank=13&Refer=top)
1. [网友向杨某媛西班牙学校反映情况](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E5%90%91%E6%9D%A8%E6%9F%90%E5%AA%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%AD%A6%E6%A0%A1%E5%8F%8D%E6%98%A0%E6%83%85%E5%86%B5&t=31&band_rank=14&Refer=top)
1. [接到陌生来电请沉默三秒](https://s.weibo.com//weibo?q=%23%E6%8E%A5%E5%88%B0%E9%99%8C%E7%94%9F%E6%9D%A5%E7%94%B5%E8%AF%B7%E6%B2%89%E9%BB%98%E4%B8%89%E7%A7%92%23&t=31&band_rank=15&Refer=top)
1. [遭醉酒男掌掴女店员近期打算离职](https://s.weibo.com//weibo?q=%23%E9%81%AD%E9%86%89%E9%85%92%E7%94%B7%E6%8E%8C%E6%8E%B4%E5%A5%B3%E5%BA%97%E5%91%98%E8%BF%91%E6%9C%9F%E6%89%93%E7%AE%97%E7%A6%BB%E8%81%8C%23&t=31&band_rank=16&Refer=top)
1. [优衣库原来是纯狱风](https://s.weibo.com//weibo?q=%E4%BC%98%E8%A1%A3%E5%BA%93%E5%8E%9F%E6%9D%A5%E6%98%AF%E7%BA%AF%E7%8B%B1%E9%A3%8E&t=31&band_rank=17&Refer=top)
1. [长剧起名 观众已经学杂了](https://s.weibo.com//weibo?q=%E9%95%BF%E5%89%A7%E8%B5%B7%E5%90%8D%20%E8%A7%82%E4%BC%97%E5%B7%B2%E7%BB%8F%E5%AD%A6%E6%9D%82%E4%BA%86&t=31&band_rank=18&Refer=top)
1. [我不得不把才华埋葬在昨天](https://s.weibo.com//weibo?q=%E6%88%91%E4%B8%8D%E5%BE%97%E4%B8%8D%E6%8A%8A%E6%89%8D%E5%8D%8E%E5%9F%8B%E8%91%AC%E5%9C%A8%E6%98%A8%E5%A4%A9&t=31&band_rank=19&Refer=top)
1. [花少3干活统计](https://s.weibo.com//weibo?q=%E8%8A%B1%E5%B0%913%E5%B9%B2%E6%B4%BB%E7%BB%9F%E8%AE%A1&t=31&band_rank=20&Refer=top)
1. [7旬老太入冰棺1天后复活2天又去世](https://s.weibo.com//weibo?q=%237%E6%97%AC%E8%80%81%E5%A4%AA%E5%85%A5%E5%86%B0%E6%A3%BA1%E5%A4%A9%E5%90%8E%E5%A4%8D%E6%B4%BB2%E5%A4%A9%E5%8F%88%E5%8E%BB%E4%B8%96%23&t=31&band_rank=21&Refer=top)
1. [苹果CEO展示iPhoneDuo时翻车](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9CCEO%E5%B1%95%E7%A4%BAiPhoneDuo%E6%97%B6%E7%BF%BB%E8%BD%A6%23&t=31&band_rank=22&Refer=top)
1. [孙子非亲生案司法鉴定中心被处罚](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%8F%B8%E6%B3%95%E9%89%B4%E5%AE%9A%E4%B8%AD%E5%BF%83%E8%A2%AB%E5%A4%84%E7%BD%9A%23&t=31&band_rank=23&Refer=top)
1. [终于见识到激素的威力了](https://s.weibo.com//weibo?q=%23%E7%BB%88%E4%BA%8E%E8%A7%81%E8%AF%86%E5%88%B0%E6%BF%80%E7%B4%A0%E7%9A%84%E5%A8%81%E5%8A%9B%E4%BA%86%23&t=31&band_rank=24&Refer=top)
1. [2个亿人民币就能全球无差别生活](https://s.weibo.com//weibo?q=2%E4%B8%AA%E4%BA%BF%E4%BA%BA%E6%B0%91%E5%B8%81%E5%B0%B1%E8%83%BD%E5%85%A8%E7%90%83%E6%97%A0%E5%B7%AE%E5%88%AB%E7%94%9F%E6%B4%BB&t=31&band_rank=25&Refer=top)
1. [我国人口总量14.05亿](https://s.weibo.com//weibo?q=%23%E6%88%91%E5%9B%BD%E4%BA%BA%E5%8F%A3%E6%80%BB%E9%87%8F14.05%E4%BA%BF%23&t=31&band_rank=26&Refer=top)
1. [七旬老太入冰棺1天睁眼复活](https://s.weibo.com//weibo?q=%23%E4%B8%83%E6%97%AC%E8%80%81%E5%A4%AA%E5%85%A5%E5%86%B0%E6%A3%BA1%E5%A4%A9%E7%9D%81%E7%9C%BC%E5%A4%8D%E6%B4%BB%23&t=31&band_rank=27&Refer=top)
1. [兰香如故破3万](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%A0%B43%E4%B8%87&t=31&band_rank=28&Refer=top)
1. [范丞丞这么多娘家人](https://s.weibo.com//weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%BF%99%E4%B9%88%E5%A4%9A%E5%A8%98%E5%AE%B6%E4%BA%BA%23&t=31&band_rank=29&Refer=top)
1. [华为自造车热议](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E8%87%AA%E9%80%A0%E8%BD%A6%E7%83%AD%E8%AE%AE&t=31&band_rank=30&Refer=top)
1. [本来以为泡泡玛特赚不到我的钱](https://s.weibo.com//weibo?q=%E6%9C%AC%E6%9D%A5%E4%BB%A5%E4%B8%BA%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E8%B5%9A%E4%B8%8D%E5%88%B0%E6%88%91%E7%9A%84%E9%92%B1&t=31&band_rank=31&Refer=top)
1. [95后宝妈连生4胎终于迎来了女儿](https://s.weibo.com//weibo?q=%2395%E5%90%8E%E5%AE%9D%E5%A6%88%E8%BF%9E%E7%94%9F4%E8%83%8E%E7%BB%88%E4%BA%8E%E8%BF%8E%E6%9D%A5%E4%BA%86%E5%A5%B3%E5%84%BF%23&t=31&band_rank=32&Refer=top)
1. [Tian开团Wayward](https://s.weibo.com//weibo?q=%23Tian%E5%BC%80%E5%9B%A2Wayward%23&t=31&band_rank=33&Refer=top)
1. [兰香如故又一个意难平男二](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%8F%88%E4%B8%80%E4%B8%AA%E6%84%8F%E9%9A%BE%E5%B9%B3%E7%94%B7%E4%BA%8C%23&t=31&band_rank=34&Refer=top)
1. [巴基斯坦人在浦东机场偷电脑被驱逐](https://s.weibo.com//weibo?q=%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E4%BA%BA%E5%9C%A8%E6%B5%A6%E4%B8%9C%E6%9C%BA%E5%9C%BA%E5%81%B7%E7%94%B5%E8%84%91%E8%A2%AB%E9%A9%B1%E9%80%90&t=31&band_rank=35&Refer=top)
1. [兰香如故爆款](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%88%86%E6%AC%BE%23&t=31&band_rank=36&Refer=top)
1. [孙子非亲生案亲子鉴定结果程序违法](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%E7%BB%93%E6%9E%9C%E7%A8%8B%E5%BA%8F%E8%BF%9D%E6%B3%95%23&t=31&band_rank=37&Refer=top)
1. [告别信男主](https://s.weibo.com//weibo?q=%23%E5%91%8A%E5%88%AB%E4%BF%A1%E7%94%B7%E4%B8%BB%23&t=31&band_rank=38&Refer=top)
1. [人一定要为自己的舒适买单](https://s.weibo.com//weibo?q=%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E8%88%92%E9%80%82%E4%B9%B0%E5%8D%95&t=31&band_rank=39&Refer=top)
1. [小米电视](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%86&t=31&band_rank=40&Refer=top)
1. [老人旅游时突然得知女儿去世](https://s.weibo.com//weibo?q=%23%E8%80%81%E4%BA%BA%E6%97%85%E6%B8%B8%E6%97%B6%E7%AA%81%E7%84%B6%E5%BE%97%E7%9F%A5%E5%A5%B3%E5%84%BF%E5%8E%BB%E4%B8%96%23&t=31&band_rank=41&Refer=top)
1. [北京国安回应3比1胜浦项铁人](https://s.weibo.com//weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89%E5%9B%9E%E5%BA%943%E6%AF%941%E8%83%9C%E6%B5%A6%E9%A1%B9%E9%93%81%E4%BA%BA%23&t=31&band_rank=42&Refer=top)
1. [邓为张晚意穿得像两颗瓜子](https://s.weibo.com//weibo?q=%23%E9%82%93%E4%B8%BA%E5%BC%A0%E6%99%9A%E6%84%8F%E7%A9%BF%E5%BE%97%E5%83%8F%E4%B8%A4%E9%A2%97%E7%93%9C%E5%AD%90%23&t=31&band_rank=43&Refer=top)
1. [印度金砖峰会餐饮自称奢华](https://s.weibo.com//weibo?q=%E5%8D%B0%E5%BA%A6%E9%87%91%E7%A0%96%E5%B3%B0%E4%BC%9A%E9%A4%90%E9%A5%AE%E8%87%AA%E7%A7%B0%E5%A5%A2%E5%8D%8E&t=31&band_rank=44&Refer=top)
1. [刘学义演技](https://s.weibo.com//weibo?q=%E5%88%98%E5%AD%A6%E4%B9%89%E6%BC%94%E6%8A%80&t=31&band_rank=45&Refer=top)
1. [女子网购金属衣柜质量太好连买3套](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BD%91%E8%B4%AD%E9%87%91%E5%B1%9E%E8%A1%A3%E6%9F%9C%E8%B4%A8%E9%87%8F%E5%A4%AA%E5%A5%BD%E8%BF%9E%E4%B9%B03%E5%A5%97%23&t=31&band_rank=46&Refer=top)
1. [北京国安3比1浦项铁人](https://s.weibo.com//weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%893%E6%AF%941%E6%B5%A6%E9%A1%B9%E9%93%81%E4%BA%BA%23&t=31&band_rank=47&Refer=top)
1. [国安亚冠开门红](https://s.weibo.com//weibo?q=%E5%9B%BD%E5%AE%89%E4%BA%9A%E5%86%A0%E5%BC%80%E9%97%A8%E7%BA%A2&t=31&band_rank=48&Refer=top)
1. [深圳龙华机场来了](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%BE%99%E5%8D%8E%E6%9C%BA%E5%9C%BA%E6%9D%A5%E4%BA%86%23&t=31&band_rank=49&Refer=top)
1. [吴慷仁祝贺女友邵雨薇入围金钟视后](https://s.weibo.com//weibo?q=%23%E5%90%B4%E6%85%B7%E4%BB%81%E7%A5%9D%E8%B4%BA%E5%A5%B3%E5%8F%8B%E9%82%B5%E9%9B%A8%E8%96%87%E5%85%A5%E5%9B%B4%E9%87%91%E9%92%9F%E8%A7%86%E5%90%8E%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
