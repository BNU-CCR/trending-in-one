# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-14 08:22:16

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
<!-- 最后更新时间 Wed Oct 14 2026 07:25:33 GMT+0800 (China Standard Time) -->

1. [缅北四大家族3个已被中国宣判](https://so.toutiao.com/search?keyword=缅北四大家族3个已被中国宣判)
1. [高志凯：台海若爆发战争没开战就结束](https://so.toutiao.com/search?keyword=高志凯：台海若爆发战争没开战就结束)
1. [红色热土上的新答卷](https://so.toutiao.com/search?keyword=红色热土上的新答卷)
1. [机器狗进哀牢山拍到“冥界之花”](https://so.toutiao.com/search?keyword=机器狗进哀牢山拍到“冥界之花”)
1. [王星被胁迫借下的网贷该不该还](https://so.toutiao.com/search?keyword=王星被胁迫借下的网贷该不该还)
1. [79岁老干妈陶华碧用AI一年赚了54亿](https://so.toutiao.com/search?keyword=79岁老干妈陶华碧用AI一年赚了54亿)
1. [Z114次列车成候鸟老人迁徙核心通道](https://so.toutiao.com/search?keyword=Z114次列车成候鸟老人迁徙核心通道)
1. [大闸蟹为何跌出“地板价”](https://so.toutiao.com/search?keyword=大闸蟹为何跌出“地板价”)
1. [男生高考522分被调剂马术专业学钉蹄](https://so.toutiao.com/search?keyword=男生高考522分被调剂马术专业学钉蹄)
1. [人民日报评“双汇处罚到人”](https://so.toutiao.com/search?keyword=人民日报评“双汇处罚到人”)
1. [长期用电动牙刷牙龈萎缩出血？误区](https://so.toutiao.com/search?keyword=长期用电动牙刷牙龈萎缩出血？误区)
1. [黄奇帆被查](https://so.toutiao.com/search?keyword=黄奇帆被查)
1. [73岁迟重瑞面色红润热情回应路人](https://so.toutiao.com/search?keyword=73岁迟重瑞面色红润热情回应路人)
1. [女子高铁上和男友开免提打1小时电话](https://so.toutiao.com/search?keyword=女子高铁上和男友开免提打1小时电话)
1. [AI女爱豆因怀孕暂停活动](https://so.toutiao.com/search?keyword=AI女爱豆因怀孕暂停活动)
1. [菲副总统怒批总统对中国鲁莽挑衅](https://so.toutiao.com/search?keyword=菲副总统怒批总统对中国鲁莽挑衅)
1. [24岁女吃播猝死 或因缺钾](https://so.toutiao.com/search?keyword=24岁女吃播猝死%20或因缺钾)
1. [血栓是怎样“悄悄形成”的](https://so.toutiao.com/search?keyword=血栓是怎样“悄悄形成”的)
1. [老人下地干活被气枪击中身亡](https://so.toutiao.com/search?keyword=老人下地干活被气枪击中身亡)
1. [为何会出现如此多大棚闲置](https://so.toutiao.com/search?keyword=为何会出现如此多大棚闲置)
1. [血液太“黏”的5个信号](https://so.toutiao.com/search?keyword=血液太“黏”的5个信号)
1. [全球硫磺价格暴涨近10倍](https://so.toutiao.com/search?keyword=全球硫磺价格暴涨近10倍)
1. [中国为何主动砍新能源车出口退税](https://so.toutiao.com/search?keyword=中国为何主动砍新能源车出口退税)
1. [男群演疑似猥亵女演员 剧组回应](https://so.toutiao.com/search?keyword=男群演疑似猥亵女演员%20剧组回应)
1. [缅北四大家族覆灭时间线](https://so.toutiao.com/search?keyword=缅北四大家族覆灭时间线)
1. [评论员：法国把对华态度摆上台面](https://so.toutiao.com/search?keyword=评论员：法国把对华态度摆上台面)
1. [越南试行对中国公民组团赴庆和省免签](https://so.toutiao.com/search?keyword=越南试行对中国公民组团赴庆和省免签)
1. [男子在悬空寺做引体向上被立案](https://so.toutiao.com/search?keyword=男子在悬空寺做引体向上被立案)
1. [央视曝光大棚闲置后当地连夜开会](https://so.toutiao.com/search?keyword=央视曝光大棚闲置后当地连夜开会)
1. [送1.9元汽水患者连续投诉医生2年](https://so.toutiao.com/search?keyword=送1.9元汽水患者连续投诉医生2年)
1. [评论员：日本专守防卫彻底被突破](https://so.toutiao.com/search?keyword=评论员：日本专守防卫彻底被突破)
1. [任泽平谈诺贝尔经济学奖](https://so.toutiao.com/search?keyword=任泽平谈诺贝尔经济学奖)
1. [媒体评女子因老板拍肩上菜摔盘走人](https://so.toutiao.com/search?keyword=媒体评女子因老板拍肩上菜摔盘走人)
1. [台媒体人为吴奇隆周杰伦鼓掌](https://so.toutiao.com/search?keyword=台媒体人为吴奇隆周杰伦鼓掌)
1. [多国外长集中表态支持乌克兰](https://so.toutiao.com/search?keyword=多国外长集中表态支持乌克兰)
1. [“石油人民币”初见雏形了吗](https://so.toutiao.com/search?keyword=“石油人民币”初见雏形了吗)
1. [大蛇盘踞厕所 消防出勤30多次终抓获](https://so.toutiao.com/search?keyword=大蛇盘踞厕所%20消防出勤30多次终抓获)
1. [农民交公粮能否视同缴社保为何引热议](https://so.toutiao.com/search?keyword=农民交公粮能否视同缴社保为何引热议)
1. [郑钦文回应为何摘掉老爸帽子](https://so.toutiao.com/search?keyword=郑钦文回应为何摘掉老爸帽子)
1. [德国警方调查机器人性骚扰案](https://so.toutiao.com/search?keyword=德国警方调查机器人性骚扰案)
1. [法国人为什么愿意买中国车](https://so.toutiao.com/search?keyword=法国人为什么愿意买中国车)
1. [胖东来入局酒店打的什么算盘](https://so.toutiao.com/search?keyword=胖东来入局酒店打的什么算盘)
1. [中方回应特朗普称不相信中俄在帮伊朗](https://so.toutiao.com/search?keyword=中方回应特朗普称不相信中俄在帮伊朗)
1. [俄批日本利用驻俄记者搜集情报](https://so.toutiao.com/search?keyword=俄批日本利用驻俄记者搜集情报)
1. [局势小幅改变或引发油市趋势性行情](https://so.toutiao.com/search?keyword=局势小幅改变或引发油市趋势性行情)
1. [哪些人容易被“腿梗”盯上](https://so.toutiao.com/search?keyword=哪些人容易被“腿梗”盯上)
1. [沙特为什么连首都机场都护不住](https://so.toutiao.com/search?keyword=沙特为什么连首都机场都护不住)
1. [东北“候鸟老人”前往海南“猫冬”](https://so.toutiao.com/search?keyword=东北“候鸟老人”前往海南“猫冬”)
1. [“中东版北约”迎第一次大考](https://so.toutiao.com/search?keyword=“中东版北约”迎第一次大考)
1. [越剧花旦演员钱水明演出期间意外身亡](https://so.toutiao.com/search?keyword=越剧花旦演员钱水明演出期间意外身亡)
1. [被送蛋！张帅止步武网首轮](https://so.toutiao.com/search?keyword=被送蛋！张帅止步武网首轮)
1. [空军多型主战装备将首现中国航展](https://so.toutiao.com/search?keyword=空军多型主战装备将首现中国航展)
1. [1.9元汽水收礼事件发生于2023年](https://so.toutiao.com/search?keyword=1.9元汽水收礼事件发生于2023年)
1. [哈巴雪山发现失联2年男子遗骸](https://so.toutiao.com/search?keyword=哈巴雪山发现失联2年男子遗骸)
1. [也门战争谁才是更该被谴责的一方](https://so.toutiao.com/search?keyword=也门战争谁才是更该被谴责的一方)
1. [李大霄：中国资产救市带动全球](https://so.toutiao.com/search?keyword=李大霄：中国资产救市带动全球)
1. [俄称打击乌远程导弹和无人机生产车间](https://so.toutiao.com/search?keyword=俄称打击乌远程导弹和无人机生产车间)
1. [台退将：统一是两岸同胞共同的责任](https://so.toutiao.com/search?keyword=台退将：统一是两岸同胞共同的责任)
1. [AI装真人客服电话推销被机主戳破](https://so.toutiao.com/search?keyword=AI装真人客服电话推销被机主戳破)
1. [为何茶百道疯狂拓店股价却崩塌](https://so.toutiao.com/search?keyword=为何茶百道疯狂拓店股价却崩塌)
1. [沙特装甲车被胡塞武装炸翻](https://so.toutiao.com/search?keyword=沙特装甲车被胡塞武装炸翻)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Oct 14 2026 07:17:06 GMT+0800 (China Standard Time) -->

1. [尊界V800公布制动踏板第三方检测结果](https://www.zhihu.com/search?q=%E5%B0%8A%E7%95%8CV800%E5%85%AC%E5%B8%83%E5%88%B6%E5%8A%A8%E8%B8%8F%E6%9D%BF%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C)
1. [胡歌称拍仙剑三很无聊](https://www.zhihu.com/search?q=%E8%83%A1%E6%AD%8C%E7%A7%B0%E6%8B%8D%E4%BB%99%E5%89%91%E4%B8%89%E5%BE%88%E6%97%A0%E8%81%8A)
1. [日本爆发倒闭潮](https://www.zhihu.com/search?q=%E6%97%A5%E6%9C%AC%E7%88%86%E5%8F%91%E5%80%92%E9%97%AD%E6%BD%AE)
1. [懂车帝质疑尊界V800检测结果](https://www.zhihu.com/search?q=%E6%87%82%E8%BD%A6%E5%B8%9D%E8%B4%A8%E7%96%91%E5%B0%8A%E7%95%8CV800%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C)
1. [教师因成绩差被迫耻辱合影调查进度0%](https://www.zhihu.com/search?q=%E6%95%99%E5%B8%88%E5%9B%A0%E6%88%90%E7%BB%A9%E5%B7%AE%E8%A2%AB%E8%BF%AB%E8%80%BB%E8%BE%B1%E5%90%88%E5%BD%B1%E8%B0%83%E6%9F%A5%E8%BF%9B%E5%BA%A60%25)
1. [番茄小说签约新规](https://www.zhihu.com/search?q=%E7%95%AA%E8%8C%84%E5%B0%8F%E8%AF%B4%E7%AD%BE%E7%BA%A6%E6%96%B0%E8%A7%84)
1. [男子国庆被排7天班未去遭开除](https://www.zhihu.com/search?q=%E7%94%B7%E5%AD%90%E5%9B%BD%E5%BA%86%E8%A2%AB%E6%8E%927%E5%A4%A9%E7%8F%AD%E6%9C%AA%E5%8E%BB%E9%81%AD%E5%BC%80%E9%99%A4)
1. [饶毅曝某华人编辑收费200万帮发论文](https://www.zhihu.com/search?q=%E9%A5%B6%E6%AF%85%E6%9B%9D%E6%9F%90%E5%8D%8E%E4%BA%BA%E7%BC%96%E8%BE%91%E6%94%B6%E8%B4%B9200%E4%B8%87%E5%B8%AE%E5%8F%91%E8%AE%BA%E6%96%87)
1. [周鸿祎攀岩摔骨折](https://www.zhihu.com/search?q=%E5%91%A8%E9%B8%BF%E7%A5%8E%E6%94%80%E5%B2%A9%E6%91%94%E9%AA%A8%E6%8A%98)
1. [中科院回应付费可进天眼核心区](https://www.zhihu.com/search?q=%E4%B8%AD%E7%A7%91%E9%99%A2%E5%9B%9E%E5%BA%94%E4%BB%98%E8%B4%B9%E5%8F%AF%E8%BF%9B%E5%A4%A9%E7%9C%BC%E6%A0%B8%E5%BF%83%E5%8C%BA)
1. [雅思考试10月14日全面恢复](https://www.zhihu.com/search?q=%E9%9B%85%E6%80%9D%E8%80%83%E8%AF%9510%E6%9C%8814%E6%97%A5%E5%85%A8%E9%9D%A2%E6%81%A2%E5%A4%8D)
1. [中国汽研称仅对尊界送来的样车负责](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E6%B1%BD%E7%A0%94%E7%A7%B0%E4%BB%85%E5%AF%B9%E5%B0%8A%E7%95%8C%E9%80%81%E6%9D%A5%E7%9A%84%E6%A0%B7%E8%BD%A6%E8%B4%9F%E8%B4%A3)
1. [老人凌晨下地干活被气枪击中身亡](https://www.zhihu.com/search?q=%E8%80%81%E4%BA%BA%E5%87%8C%E6%99%A8%E4%B8%8B%E5%9C%B0%E5%B9%B2%E6%B4%BB%E8%A2%AB%E6%B0%94%E6%9E%AA%E5%87%BB%E4%B8%AD%E8%BA%AB%E4%BA%A1)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Oct 14 2026 08:22:16 GMT+0800 (China Standard Time) -->

1. [老人凌晨下地干活被气枪击中身亡，持气枪打猎合法吗？案件还有哪些疑点待查？涉事人员将承担什么法律责任？](https://www.zhihu.com/question/2093446305422862300)
1. [宜宾一摊主被顾客差评后遭网暴，最后不堪重压选择跳河轻生，如何避免这种悲剧再次发生？](https://www.zhihu.com/question/2093063796151666000)
1. [如何看待患者送 1.9 元汽水后举报医院药房工作人员违规收礼，医院已对其进行批评教育？这算违规收礼吗？](https://www.zhihu.com/question/2093393122902237200)
1. [雷波县教师被安排与「耻辱」二字合影，近 50 天仍未公布调查结果，为啥迟迟不公布？调查的难点在哪儿？](https://www.zhihu.com/question/2093376100948599000)
1. [男生高考522分被调剂马术专业，成为在校本科生中唯一持证钉蹄师，前景如何？能带给选专业的学生哪些启发？](https://www.zhihu.com/question/2093388530156136000)
1. [一男子在悬空寺古建筑横梁做引体向上，警方已立案，涉事者将承担哪些责任？](https://www.zhihu.com/question/2093390624560871200)
1. [如何评价老干妈引入AI 用于检验辣椒品质，将600人生产线减至48人？AI 能给食品制造业带来啥改变？](https://www.zhihu.com/question/2093427934316814800)
1. [如何看待Andrej Karpathy提出「AI能力认知漏斗」，少数专业人士已开始有「眩晕感」？](https://www.zhihu.com/question/2092928330336925400)
1. [为什么这么多人讨厌陈岩石夫妇在饭桌上向沙瑞金告状的行为？](https://www.zhihu.com/question/2090843777707537400)
1. [朱琳真的美貌绝伦吗？为什么我看央视版《西游记》时觉得女儿国国王出场无感，蝎子精出场才有惊艳的感觉？](https://www.zhihu.com/question/418887484)
1. [网传郑钦文团队一天就得花五万多块，是这样吗？职业网球选手的运营模式是怎样的？](https://www.zhihu.com/question/2093240084342335200)
1. [如何评价10月13日正式推出的Gemini 4 Argon？](https://www.zhihu.com/question/2093454112922912800)
1. [宇树王兴兴在工博会上说，明年的 GPT-7 有可能「击穿」具身智能现在的瓶颈，你怎么看？](https://www.zhihu.com/question/2093281358667956500)
1. [方便面煮着吃为什么比泡着吃更香？](https://www.zhihu.com/question/2088359008025559600)
1. [同卵双胞胎能长得几乎一样，为什么偏偏复制不了指纹？](https://www.zhihu.com/question/2085687194967093500)
1. [PS5 全机型遭底层漏洞破解，会对索尼主机生态产生哪些冲击？](https://www.zhihu.com/question/2088701899113489200)
1. [叫“大学”的都比叫“学院”的强吗？](https://www.zhihu.com/question/639527248)
1. [江淮汽车股价一度大涨近 9%，这一轮上涨是否预示市场情绪迎来反转？涨势能持续多久？](https://www.zhihu.com/question/2093296082310665200)
1. [许子东称金庸、倪匡、亦舒均来自江南，如何理解香港通俗文学的地域性？](https://www.zhihu.com/question/1982474215060951800)
1. [为什么晴朗的夜晚反而更冷？这是由什么原因导致的，从气象学角度该如何解释？](https://www.zhihu.com/question/2016598998534874600)
1. [如果你有25万的存款，面对1500的衣服裤子你会不会犹豫啊？](https://www.zhihu.com/question/2092975777457378800)
1. [为什么大多数所谓“硬科幻”的太空战争类作品中，看不到战锤40k那样精彩的跳帮战剧情？](https://www.zhihu.com/question/2092714865840371200)
1. [孩子身上有不少零花钱，但花钱特别"抠"，能让我出的她坚决不出，怎么引导？](https://www.zhihu.com/question/2093303322417673200)
1. [为什么 Markdown 成了 AI 时代知识管理的默认格式？](https://www.zhihu.com/question/2078797038666379800)
1. [长寿的人是否更幸福快乐？](https://www.zhihu.com/question/2090063268580804400)
1. [速度是相对的，怎么确定在近光速的情况下谁的时间变慢了？](https://www.zhihu.com/question/1933845669233272000)
1. [夫妻点一杯58元咖啡只能一人落座，市监局称「一人一座一消费」合理与否不能一刀切判定，如何理解此事？](https://www.zhihu.com/question/2093309415939991600)
1. [为什么“依法”协助当事人进行诉讼不叫“法师”而叫“律师”？](https://www.zhihu.com/question/2089647041488147000)
1. [2027国考笔试公告发布，共计划招录3.57万人，笔试11月29日举行，今年有哪些变化？](https://www.zhihu.com/question/2093290893197272800)
1. [新能源车没备胎，自驾游该不该自己买一个？不买的人是真懂车，还是心大？](https://www.zhihu.com/question/2087602058774029000)
1. [35焦段做1.2光圈意义是什么?](https://www.zhihu.com/question/1920157962732832500)
1. [《暗影崛起》佐樱感情线挽尊是否必要？](https://www.zhihu.com/question/2092630676424213800)
1. [刘国梁16岁女儿刘宇婕登顶高尔夫中国女子公开赛，成赛事创办以来首位业余冠军，哪些信息值得关注？](https://www.zhihu.com/question/2093019602653536800)
1. [你们认为芯片圈里哪家公司的产品命名最为混乱？](https://www.zhihu.com/question/1949264896328967000)
1. [如何评价动画电影《小猪佩奇·完美假期》？](https://www.zhihu.com/question/2088300737918940400)
1. [同姓的人一定拥有共同的祖先吗？](https://www.zhihu.com/question/2091486108169379800)
1. [有的孩子膝盖摔破了贴上创可贴还继续玩，有的稍微摔下什么伤都没有还哭成泪人，背后的真相是什么？](https://www.zhihu.com/question/2092888914705003000)
1. [出去旅行有必要发朋友圈嘛?](https://www.zhihu.com/question/1929353795504170200)
1. [如何看待Anthropic坚决不用行业标准AGENTS.md？](https://www.zhihu.com/question/2076002336334467600)
1. [为什么喝酒喝到微醺会让人感到快乐？](https://www.zhihu.com/question/614889347)
1. [齐国无法打破田氏代齐的过程吗？](https://www.zhihu.com/question/641322650)
1. [有哪些好吃的家常菜值得推荐？](https://www.zhihu.com/question/11496938042)
1. [如果朱元璋先走，马皇后会不会被殉葬？](https://www.zhihu.com/question/1946280983411262200)
1. [爱吃饺子的你，觉得哪种饺子馅是你心中永远的王？](https://www.zhihu.com/question/1902764672547021600)
1. [为什么人类近几百年的发展突然加快了？](https://www.zhihu.com/question/294820323)
1. [《复仇者联盟 5》中国内地定档 12 月 16 日上映，领先北美两天，对此你有何期待？](https://www.zhihu.com/question/2092920367882789000)
1. [为什么咒术回战不义游戏一个辅助类技能可以打死特级咒灵？](https://www.zhihu.com/question/492417685)
1. [《灌篮高手》中樱木的天赋肉眼可见，但是为什么不受一些球队教练的重视？](https://www.zhihu.com/question/496805335)
1. [问界汽车拟于2027年进入欧洲市场，赛力斯曾表示正推进问界车型全系出海，在海外还能复制国内热度吗？](https://www.zhihu.com/question/2092949973788784000)
1. [2026 年诺贝尔经济学奖表彰宏观经济研究，为什么经济学家仍难以预测经济危机？](https://www.zhihu.com/question/2093043982565470200)
1. [为什么李一桐演技一般，但每部电视都是女一？](https://www.zhihu.com/question/405929670)
1. [如何煎鱼才能不破皮？](https://www.zhihu.com/question/19980542)
1. [有没有比较有用但中学不学的数学定理？](https://www.zhihu.com/question/1993382909286048000)
1. [网友称村上春树每天凌晨4点起、晚9点睡，一天工作5小时，剩余时间休息，真的吗？这样的生活方式健康吗？](https://www.zhihu.com/question/2091885563032727600)
1. [为什么DNF没以前好玩了？](https://www.zhihu.com/question/654508619)
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
<!-- 最后更新时间 Wed Oct 14 2026 08:24:49 GMT+0800 (China Standard Time) -->

1. [中博友谊要像钻石般璀璨恒久](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%8D%9A%E5%8F%8B%E8%B0%8A%E8%A6%81%E5%83%8F%E9%92%BB%E7%9F%B3%E8%88%AC%E7%92%80%E7%92%A8%E6%81%92%E4%B9%85%23&Refer=new_time)
1. [女子高铁上和男友开免提打1小时电话](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E4%B8%8A%E5%92%8C%E7%94%B7%E5%8F%8B%E5%BC%80%E5%85%8D%E6%8F%90%E6%89%931%E5%B0%8F%E6%97%B6%E7%94%B5%E8%AF%9D%23&t=31&band_rank=1&Refer=top)
1. [吃播网红干饭莹去世](https://s.weibo.com//weibo?q=%E5%90%83%E6%92%AD%E7%BD%91%E7%BA%A2%E5%B9%B2%E9%A5%AD%E8%8E%B9%E5%8E%BB%E4%B8%96&t=31&band_rank=2&Refer=top)
1. [永不褪色的红飘带](https://s.weibo.com//weibo?q=%E6%B0%B8%E4%B8%8D%E8%A4%AA%E8%89%B2%E7%9A%84%E7%BA%A2%E9%A3%98%E5%B8%A6&t=31&band_rank=3&Refer=top)
1. [金晨回应现发4更换常驻嘉宾](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%A8%E5%9B%9E%E5%BA%94%E7%8E%B0%E5%8F%914%E6%9B%B4%E6%8D%A2%E5%B8%B8%E9%A9%BB%E5%98%89%E5%AE%BE%23&t=31&band_rank=4&Refer=top)
1. [真实姓名被9年未联系友人用作昵称](https://s.weibo.com//weibo?q=%23%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E8%A2%AB9%E5%B9%B4%E6%9C%AA%E8%81%94%E7%B3%BB%E5%8F%8B%E4%BA%BA%E7%94%A8%E4%BD%9C%E6%98%B5%E7%A7%B0%23&t=31&band_rank=5&Refer=top)
1. [女子6毫米结节确诊乳腺癌](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%906%E6%AF%AB%E7%B1%B3%E7%BB%93%E8%8A%82%E7%A1%AE%E8%AF%8A%E4%B9%B3%E8%85%BA%E7%99%8C%23&t=31&band_rank=6&Refer=top)
1. [老人凌晨下地干活被气枪击中身亡](https://s.weibo.com//weibo?q=%23%E8%80%81%E4%BA%BA%E5%87%8C%E6%99%A8%E4%B8%8B%E5%9C%B0%E5%B9%B2%E6%B4%BB%E8%A2%AB%E6%B0%94%E6%9E%AA%E5%87%BB%E4%B8%AD%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=7&Refer=top)
1. [79岁老干妈陶华碧用AI一年赚54亿](https://s.weibo.com//weibo?q=%2379%E5%B2%81%E8%80%81%E5%B9%B2%E5%A6%88%E9%99%B6%E5%8D%8E%E7%A2%A7%E7%94%A8AI%E4%B8%80%E5%B9%B4%E8%B5%9A54%E4%BA%BF%23&t=31&band_rank=8&Refer=top)
1. [33岁销冠确诊胃癌晚期突然被辞退](https://s.weibo.com//weibo?q=%2333%E5%B2%81%E9%94%80%E5%86%A0%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%AA%81%E7%84%B6%E8%A2%AB%E8%BE%9E%E9%80%80%23&t=31&band_rank=9&Refer=top)
1. [家有儿女早就教了我们正确的爱情观](https://s.weibo.com//weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E6%97%A9%E5%B0%B1%E6%95%99%E4%BA%86%E6%88%91%E4%BB%AC%E6%AD%A3%E7%A1%AE%E7%9A%84%E7%88%B1%E6%83%85%E8%A7%82%23&t=31&band_rank=10&Refer=top)
1. [赛力斯起诉AI造谣问界者索赔百万](https://s.weibo.com//weibo?q=%E8%B5%9B%E5%8A%9B%E6%96%AF%E8%B5%B7%E8%AF%89AI%E9%80%A0%E8%B0%A3%E9%97%AE%E7%95%8C%E8%80%85%E7%B4%A2%E8%B5%94%E7%99%BE%E4%B8%87&t=31&band_rank=11&Refer=top)
1. [高中同学分的糖疑为褪黑素软糖](https://s.weibo.com//weibo?q=%E9%AB%98%E4%B8%AD%E5%90%8C%E5%AD%A6%E5%88%86%E7%9A%84%E7%B3%96%E7%96%91%E4%B8%BA%E8%A4%AA%E9%BB%91%E7%B4%A0%E8%BD%AF%E7%B3%96&t=31&band_rank=12&Refer=top)
1. [奥利塞扔球砸人染红](https://s.weibo.com//weibo?q=%E5%A5%A5%E5%88%A9%E5%A1%9E%E6%89%94%E7%90%83%E7%A0%B8%E4%BA%BA%E6%9F%93%E7%BA%A2&t=31&band_rank=13&Refer=top)
1. [田馥甄我不配唱给你听是我不配](https://s.weibo.com//weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E6%88%91%E4%B8%8D%E9%85%8D%E5%94%B1%E7%BB%99%E4%BD%A0%E5%90%AC%E6%98%AF%E6%88%91%E4%B8%8D%E9%85%8D%23&t=31&band_rank=14&Refer=top)
1. [欧冠](https://s.weibo.com//weibo?q=%E6%AC%A7%E5%86%A0&t=31&band_rank=15&Refer=top)
1. [金秀贤方索赔升至300亿韩元](https://s.weibo.com//weibo?q=%E9%87%91%E7%A7%80%E8%B4%A4%E6%96%B9%E7%B4%A2%E8%B5%94%E5%8D%87%E8%87%B3300%E4%BA%BF%E9%9F%A9%E5%85%83&t=31&band_rank=16&Refer=top)
1. [王星被胁迫借下的网贷该不该还](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%98%9F%E8%A2%AB%E8%83%81%E8%BF%AB%E5%80%9F%E4%B8%8B%E7%9A%84%E7%BD%91%E8%B4%B7%E8%AF%A5%E4%B8%8D%E8%AF%A5%E8%BF%98&t=31&band_rank=17&Refer=top)
1. [向太说张家齐妈妈谎话连篇](https://s.weibo.com//weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%B0%8E%E8%AF%9D%E8%BF%9E%E7%AF%87%23&t=31&band_rank=18&Refer=top)
1. [郑钦文夺冠父亲给她泼冷水](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%A4%BA%E5%86%A0%E7%88%B6%E4%BA%B2%E7%BB%99%E5%A5%B9%E6%B3%BC%E5%86%B7%E6%B0%B4%23&t=31&band_rank=19&Refer=top)
1. [绝命毒师男演员34岁自杀](https://s.weibo.com//weibo?q=%E7%BB%9D%E5%91%BD%E6%AF%92%E5%B8%88%E7%94%B7%E6%BC%94%E5%91%9834%E5%B2%81%E8%87%AA%E6%9D%80&t=31&band_rank=20&Refer=top)
1. [第一次听说生理性喜欢是这种感觉](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%AC%E8%AF%B4%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89&t=31&band_rank=21&Refer=top)
1. [年轻人为什么反感新科技](https://s.weibo.com//weibo?q=%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%8D%E6%84%9F%E6%96%B0%E7%A7%91%E6%8A%80&t=31&band_rank=22&Refer=top)
1. [超过30岁未婚不代表有问题](https://s.weibo.com//weibo?q=%E8%B6%85%E8%BF%8730%E5%B2%81%E6%9C%AA%E5%A9%9A%E4%B8%8D%E4%BB%A3%E8%A1%A8%E6%9C%89%E9%97%AE%E9%A2%98&t=31&band_rank=23&Refer=top)
1. [男友送吹风机后不让女友带回家](https://s.weibo.com//weibo?q=%E7%94%B7%E5%8F%8B%E9%80%81%E5%90%B9%E9%A3%8E%E6%9C%BA%E5%90%8E%E4%B8%8D%E8%AE%A9%E5%A5%B3%E5%8F%8B%E5%B8%A6%E5%9B%9E%E5%AE%B6&t=31&band_rank=24&Refer=top)
1. [心梗脑梗发生前的求救信号](https://s.weibo.com//weibo?q=%23%E5%BF%83%E6%A2%97%E8%84%91%E6%A2%97%E5%8F%91%E7%94%9F%E5%89%8D%E7%9A%84%E6%B1%82%E6%95%91%E4%BF%A1%E5%8F%B7%23&t=31&band_rank=25&Refer=top)
1. [西瓜子含钾量是香蕉三倍](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E7%93%9C%E5%AD%90%E5%90%AB%E9%92%BE%E9%87%8F%E6%98%AF%E9%A6%99%E8%95%89%E4%B8%89%E5%80%8D%23&t=31&band_rank=26&Refer=top)
1. [疑似肖战经纪人朋友圈](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E8%82%96%E6%88%98%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23&t=31&band_rank=27&Refer=top)
1. [向芷更是直接管向华强叫华强强强](https://s.weibo.com//weibo?q=%23%E5%90%91%E8%8A%B7%E6%9B%B4%E6%98%AF%E7%9B%B4%E6%8E%A5%E7%AE%A1%E5%90%91%E5%8D%8E%E5%BC%BA%E5%8F%AB%E5%8D%8E%E5%BC%BA%E5%BC%BA%E5%BC%BA%23&t=31&band_rank=28&Refer=top)
1. [邓为请客百妖谱剧组全组人员](https://s.weibo.com//weibo?q=%23%E9%82%93%E4%B8%BA%E8%AF%B7%E5%AE%A2%E7%99%BE%E5%A6%96%E8%B0%B1%E5%89%A7%E7%BB%84%E5%85%A8%E7%BB%84%E4%BA%BA%E5%91%98%23&t=31&band_rank=29&Refer=top)
1. [VISA进入中国市场](https://s.weibo.com//weibo?q=%23VISA%E8%BF%9B%E5%85%A5%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%23&t=31&band_rank=30&Refer=top)
1. [中国互联网进入字节时间](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E8%BF%9B%E5%85%A5%E5%AD%97%E8%8A%82%E6%97%B6%E9%97%B4&t=31&band_rank=31&Refer=top)
1. [肖战全票发售撕开行业潜规则遮羞布](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%85%A8%E7%A5%A8%E5%8F%91%E5%94%AE%E6%92%95%E5%BC%80%E8%A1%8C%E4%B8%9A%E6%BD%9C%E8%A7%84%E5%88%99%E9%81%AE%E7%BE%9E%E5%B8%83%23&t=31&band_rank=32&Refer=top)
1. [约罗直红罚下](https://s.weibo.com//weibo?q=%E7%BA%A6%E7%BD%97%E7%9B%B4%E7%BA%A2%E7%BD%9A%E4%B8%8B&t=31&band_rank=33&Refer=top)
1. [虞书欣长长长长长长发公主](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%95%BF%E9%95%BF%E9%95%BF%E9%95%BF%E9%95%BF%E9%95%BF%E5%8F%91%E5%85%AC%E4%B8%BB%23&t=31&band_rank=34&Refer=top)
1. [爱生气的人根本不是脾气差](https://s.weibo.com//weibo?q=%E7%88%B1%E7%94%9F%E6%B0%94%E7%9A%84%E4%BA%BA%E6%A0%B9%E6%9C%AC%E4%B8%8D%E6%98%AF%E8%84%BE%E6%B0%94%E5%B7%AE&t=31&band_rank=35&Refer=top)
1. [原来胃也是需要锻炼的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E8%83%83%E4%B9%9F%E6%98%AF%E9%9C%80%E8%A6%81%E9%94%BB%E7%82%BC%E7%9A%84&t=31&band_rank=36&Refer=top)
1. [10岁女童被男老师摸脸家长索赔20万](https://s.weibo.com//weibo?q=%2310%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E7%94%B7%E8%80%81%E5%B8%88%E6%91%B8%E8%84%B8%E5%AE%B6%E9%95%BF%E7%B4%A2%E8%B5%9420%E4%B8%87%23&t=31&band_rank=37&Refer=top)
1. [金秀贤金赛纶反转再反转](https://s.weibo.com//weibo?q=%E9%87%91%E7%A7%80%E8%B4%A4%E9%87%91%E8%B5%9B%E7%BA%B6%E5%8F%8D%E8%BD%AC%E5%86%8D%E5%8F%8D%E8%BD%AC&t=31&band_rank=38&Refer=top)
1. [曼联巴萨国米拜仁同时落后](https://s.weibo.com//weibo?q=%E6%9B%BC%E8%81%94%E5%B7%B4%E8%90%A8%E5%9B%BD%E7%B1%B3%E6%8B%9C%E4%BB%81%E5%90%8C%E6%97%B6%E8%90%BD%E5%90%8E&t=31&band_rank=39&Refer=top)
1. [学过钢琴的才知道他有多牛](https://s.weibo.com//weibo?q=%E5%AD%A6%E8%BF%87%E9%92%A2%E7%90%B4%E7%9A%84%E6%89%8D%E7%9F%A5%E9%81%93%E4%BB%96%E6%9C%89%E5%A4%9A%E7%89%9B&t=31&band_rank=40&Refer=top)
1. [金晨说王楚然在现发撒得开](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%A8%E8%AF%B4%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9C%A8%E7%8E%B0%E5%8F%91%E6%92%92%E5%BE%97%E5%BC%80%23&t=31&band_rank=41&Refer=top)
1. [李善宝咩咩这是在调情吗](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%96%84%E5%AE%9D%E5%92%A9%E5%92%A9%E8%BF%99%E6%98%AF%E5%9C%A8%E8%B0%83%E6%83%85%E5%90%97%23&t=31&band_rank=42&Refer=top)
1. [成毅火种实时在听第一](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E7%81%AB%E7%A7%8D%E5%AE%9E%E6%97%B6%E5%9C%A8%E5%90%AC%E7%AC%AC%E4%B8%80%23&t=31&band_rank=43&Refer=top)
1. [久坐久卧或致血管悄悄长血块](https://s.weibo.com//weibo?q=%23%E4%B9%85%E5%9D%90%E4%B9%85%E5%8D%A7%E6%88%96%E8%87%B4%E8%A1%80%E7%AE%A1%E6%82%84%E6%82%84%E9%95%BF%E8%A1%80%E5%9D%97%23&t=31&band_rank=44&Refer=top)
1. [苹果发布会](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A&t=31&band_rank=45&Refer=top)
1. [红果短剧千万别下载](https://s.weibo.com//weibo?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%8D%83%E4%B8%87%E5%88%AB%E4%B8%8B%E8%BD%BD&t=31&band_rank=46&Refer=top)
1. [微信上线绿泡泡短剧](https://s.weibo.com//weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%B8%8A%E7%BA%BF%E7%BB%BF%E6%B3%A1%E6%B3%A1%E7%9F%AD%E5%89%A7%23&t=31&band_rank=47&Refer=top)
1. [郑钦文父亲陪练开坏3辆车](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%88%B6%E4%BA%B2%E9%99%AA%E7%BB%83%E5%BC%80%E5%9D%8F3%E8%BE%86%E8%BD%A6%23&t=31&band_rank=48&Refer=top)
1. [77岁奶奶健身半年多练出肌肉线条](https://s.weibo.com//weibo?q=%2377%E5%B2%81%E5%A5%B6%E5%A5%B6%E5%81%A5%E8%BA%AB%E5%8D%8A%E5%B9%B4%E5%A4%9A%E7%BB%83%E5%87%BA%E8%82%8C%E8%82%89%E7%BA%BF%E6%9D%A1%23&t=31&band_rank=49&Refer=top)
1. [虞书欣粉丝真的要爱虞书欣一辈子了](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B2%89%E4%B8%9D%E7%9C%9F%E7%9A%84%E8%A6%81%E7%88%B1%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%80%E8%BE%88%E5%AD%90%E4%BA%86%23&t=31&band_rank=50&Refer=top)
1. [红果短剧千万别下载](https://s.weibo.com//weibo?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%8D%83%E4%B8%87%E5%88%AB%E4%B8%8B%E8%BD%BD&t=31&band_rank=1&Refer=top)
1. [京城大师赛蹄蹄作弊被抓](https://s.weibo.com//weibo?q=%E4%BA%AC%E5%9F%8E%E5%A4%A7%E5%B8%88%E8%B5%9B%E8%B9%84%E8%B9%84%E4%BD%9C%E5%BC%8A%E8%A2%AB%E6%8A%93&t=31&band_rank=2&Refer=top)
1. [郑钦文夺冠父亲给她泼冷水](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%A4%BA%E5%86%A0%E7%88%B6%E4%BA%B2%E7%BB%99%E5%A5%B9%E6%B3%BC%E5%86%B7%E6%B0%B4%23&t=31&band_rank=4&Refer=top)
1. [老人凌晨下地干活被气枪击中身亡](https://s.weibo.com//weibo?q=%23%E8%80%81%E4%BA%BA%E5%87%8C%E6%99%A8%E4%B8%8B%E5%9C%B0%E5%B9%B2%E6%B4%BB%E8%A2%AB%E6%B0%94%E6%9E%AA%E5%87%BB%E4%B8%AD%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=5&Refer=top)
1. [真实姓名被9年未联系友人用作昵称](https://s.weibo.com//weibo?q=%23%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E8%A2%AB9%E5%B9%B4%E6%9C%AA%E8%81%94%E7%B3%BB%E5%8F%8B%E4%BA%BA%E7%94%A8%E4%BD%9C%E6%98%B5%E7%A7%B0%23&t=31&band_rank=6&Refer=top)
1. [79岁老干妈陶华碧用AI一年赚54亿](https://s.weibo.com//weibo?q=%2379%E5%B2%81%E8%80%81%E5%B9%B2%E5%A6%88%E9%99%B6%E5%8D%8E%E7%A2%A7%E7%94%A8AI%E4%B8%80%E5%B9%B4%E8%B5%9A54%E4%BA%BF%23&t=31&band_rank=7&Refer=top)
1. [金晨说王楚然在现发撒得开](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%A8%E8%AF%B4%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9C%A8%E7%8E%B0%E5%8F%91%E6%92%92%E5%BE%97%E5%BC%80%23&t=31&band_rank=8&Refer=top)
1. [拜仁0比2落后维京](https://s.weibo.com//weibo?q=%E6%8B%9C%E4%BB%810%E6%AF%942%E8%90%BD%E5%90%8E%E7%BB%B4%E4%BA%AC&t=31&band_rank=9&Refer=top)
1. [金秀贤金赛纶反转再反转](https://s.weibo.com//weibo?q=%E9%87%91%E7%A7%80%E8%B4%A4%E9%87%91%E8%B5%9B%E7%BA%B6%E5%8F%8D%E8%BD%AC%E5%86%8D%E5%8F%8D%E8%BD%AC&t=31&band_rank=10&Refer=top)
1. [吃播网红干饭莹去世](https://s.weibo.com//weibo?q=%E5%90%83%E6%92%AD%E7%BD%91%E7%BA%A2%E5%B9%B2%E9%A5%AD%E8%8E%B9%E5%8E%BB%E4%B8%96&t=31&band_rank=11&Refer=top)
1. [王星被胁迫借下的网贷该不该还](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%98%9F%E8%A2%AB%E8%83%81%E8%BF%AB%E5%80%9F%E4%B8%8B%E7%9A%84%E7%BD%91%E8%B4%B7%E8%AF%A5%E4%B8%8D%E8%AF%A5%E8%BF%98&t=31&band_rank=12&Refer=top)
1. [女子高铁上和男友开免提打1小时电话](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E4%B8%8A%E5%92%8C%E7%94%B7%E5%8F%8B%E5%BC%80%E5%85%8D%E6%8F%90%E6%89%931%E5%B0%8F%E6%97%B6%E7%94%B5%E8%AF%9D%23&t=31&band_rank=13&Refer=top)
1. [家有儿女早就教了我们正确的爱情观](https://s.weibo.com//weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E6%97%A9%E5%B0%B1%E6%95%99%E4%BA%86%E6%88%91%E4%BB%AC%E6%AD%A3%E7%A1%AE%E7%9A%84%E7%88%B1%E6%83%85%E8%A7%82%23&t=31&band_rank=14&Refer=top)
1. [疑似肖战经纪人朋友圈](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E8%82%96%E6%88%98%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23&t=31&band_rank=15&Refer=top)
1. [送1.9元汽水患者连续投诉医生2年](https://s.weibo.com//weibo?q=%23%E9%80%811.9%E5%85%83%E6%B1%BD%E6%B0%B4%E6%82%A3%E8%80%85%E8%BF%9E%E7%BB%AD%E6%8A%95%E8%AF%89%E5%8C%BB%E7%94%9F2%E5%B9%B4%23&t=31&band_rank=16&Refer=top)
1. [厚本回应特殊面容](https://s.weibo.com//weibo?q=%23%E5%8E%9A%E6%9C%AC%E5%9B%9E%E5%BA%94%E7%89%B9%E6%AE%8A%E9%9D%A2%E5%AE%B9%23&t=31&band_rank=17&Refer=top)
1. [买黄金的人变了](https://s.weibo.com//weibo?q=%23%E4%B9%B0%E9%BB%84%E9%87%91%E7%9A%84%E4%BA%BA%E5%8F%98%E4%BA%86%23&t=31&band_rank=18&Refer=top)
1. [警方已确认与未成年金赛纶交往男星](https://s.weibo.com//weibo?q=%23%E8%AD%A6%E6%96%B9%E5%B7%B2%E7%A1%AE%E8%AE%A4%E4%B8%8E%E6%9C%AA%E6%88%90%E5%B9%B4%E9%87%91%E8%B5%9B%E7%BA%B6%E4%BA%A4%E5%BE%80%E7%94%B7%E6%98%9F%23&t=31&band_rank=19&Refer=top)
1. [黄奇帆接受审查调查](https://s.weibo.com//weibo?q=%23%E9%BB%84%E5%A5%87%E5%B8%86%E6%8E%A5%E5%8F%97%E5%AE%A1%E6%9F%A5%E8%B0%83%E6%9F%A5%23&t=31&band_rank=20&Refer=top)
1. [超过30岁未婚不代表有问题](https://s.weibo.com//weibo?q=%E8%B6%85%E8%BF%8730%E5%B2%81%E6%9C%AA%E5%A9%9A%E4%B8%8D%E4%BB%A3%E8%A1%A8%E6%9C%89%E9%97%AE%E9%A2%98&t=31&band_rank=22&Refer=top)
1. [马竞半场1比0曼联](https://s.weibo.com//weibo?q=%E9%A9%AC%E7%AB%9E%E5%8D%8A%E5%9C%BA1%E6%AF%940%E6%9B%BC%E8%81%94&t=31&band_rank=23&Refer=top)
1. [中国互联网进入字节时间](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E8%BF%9B%E5%85%A5%E5%AD%97%E8%8A%82%E6%97%B6%E9%97%B4&t=31&band_rank=24&Refer=top)
1. [西瓜子含钾量是香蕉三倍](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E7%93%9C%E5%AD%90%E5%90%AB%E9%92%BE%E9%87%8F%E6%98%AF%E9%A6%99%E8%95%89%E4%B8%89%E5%80%8D%23&t=31&band_rank=25&Refer=top)
1. [郑钦文讲述摘掉父亲帽子的原因](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%AE%B2%E8%BF%B0%E6%91%98%E6%8E%89%E7%88%B6%E4%BA%B2%E5%B8%BD%E5%AD%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=26&Refer=top)
1. [肖战全票发售撕开行业潜规则遮羞布](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%85%A8%E7%A5%A8%E5%8F%91%E5%94%AE%E6%92%95%E5%BC%80%E8%A1%8C%E4%B8%9A%E6%BD%9C%E8%A7%84%E5%88%99%E9%81%AE%E7%BE%9E%E5%B8%83%23&t=31&band_rank=27&Refer=top)
1. [领导把我的房间当成他自己家了](https://s.weibo.com//weibo?q=%E9%A2%86%E5%AF%BC%E6%8A%8A%E6%88%91%E7%9A%84%E6%88%BF%E9%97%B4%E5%BD%93%E6%88%90%E4%BB%96%E8%87%AA%E5%B7%B1%E5%AE%B6%E4%BA%86&t=31&band_rank=28&Refer=top)
1. [手机不好卖了](https://s.weibo.com//weibo?q=%23%E6%89%8B%E6%9C%BA%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23&t=31&band_rank=29&Refer=top)
1. [久坐久卧或致血管悄悄长血块](https://s.weibo.com//weibo?q=%23%E4%B9%85%E5%9D%90%E4%B9%85%E5%8D%A7%E6%88%96%E8%87%B4%E8%A1%80%E7%AE%A1%E6%82%84%E6%82%84%E9%95%BF%E8%A1%80%E5%9D%97%23&t=31&band_rank=30&Refer=top)
1. [小酒窝被医生夸比着尺子长的](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%A4%B8%E6%AF%94%E7%9D%80%E5%B0%BA%E5%AD%90%E9%95%BF%E7%9A%84%23&t=31&band_rank=31&Refer=top)
1. [向芷更是直接管向华强叫华强强强](https://s.weibo.com//weibo?q=%23%E5%90%91%E8%8A%B7%E6%9B%B4%E6%98%AF%E7%9B%B4%E6%8E%A5%E7%AE%A1%E5%90%91%E5%8D%8E%E5%BC%BA%E5%8F%AB%E5%8D%8E%E5%BC%BA%E5%BC%BA%E5%BC%BA%23&t=31&band_rank=32&Refer=top)
1. [百果园2年亏掉了7个亿](https://s.weibo.com//weibo?q=%23%E7%99%BE%E6%9E%9C%E5%9B%AD2%E5%B9%B4%E4%BA%8F%E6%8E%89%E4%BA%867%E4%B8%AA%E4%BA%BF%23&t=31&band_rank=33&Refer=top)
1. [学过钢琴的才知道他有多牛](https://s.weibo.com//weibo?q=%E5%AD%A6%E8%BF%87%E9%92%A2%E7%90%B4%E7%9A%84%E6%89%8D%E7%9F%A5%E9%81%93%E4%BB%96%E6%9C%89%E5%A4%9A%E7%89%9B&t=31&band_rank=34&Refer=top)
1. [33岁销冠确诊胃癌晚期突然被辞退](https://s.weibo.com//weibo?q=%2333%E5%B2%81%E9%94%80%E5%86%A0%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%AA%81%E7%84%B6%E8%A2%AB%E8%BE%9E%E9%80%80%23&t=31&band_rank=35&Refer=top)
1. [王星受胁迫借网贷权责如何确定](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%98%9F%E5%8F%97%E8%83%81%E8%BF%AB%E5%80%9F%E7%BD%91%E8%B4%B7%E6%9D%83%E8%B4%A3%E5%A6%82%E4%BD%95%E7%A1%AE%E5%AE%9A%23&t=31&band_rank=36&Refer=top)
1. [李善宝咩咩这是在调情吗](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%96%84%E5%AE%9D%E5%92%A9%E5%92%A9%E8%BF%99%E6%98%AF%E5%9C%A8%E8%B0%83%E6%83%85%E5%90%97%23&t=31&band_rank=38&Refer=top)
1. [打开了一本名为刻薄的书](https://s.weibo.com//weibo?q=%E6%89%93%E5%BC%80%E4%BA%86%E4%B8%80%E6%9C%AC%E5%90%8D%E4%B8%BA%E5%88%BB%E8%96%84%E7%9A%84%E4%B9%A6&t=31&band_rank=39&Refer=top)
1. [王曦雨无缘武网16强](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%9B%A6%E9%9B%A8%E6%97%A0%E7%BC%98%E6%AD%A6%E7%BD%9116%E5%BC%BA%23&t=31&band_rank=40&Refer=top)
1. [原来胃也是需要锻炼的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E8%83%83%E4%B9%9F%E6%98%AF%E9%9C%80%E8%A6%81%E9%94%BB%E7%82%BC%E7%9A%84&t=31&band_rank=41&Refer=top)
1. [哥哥死因不明直到有了弟弟才知道](https://s.weibo.com//weibo?q=%23%E5%93%A5%E5%93%A5%E6%AD%BB%E5%9B%A0%E4%B8%8D%E6%98%8E%E7%9B%B4%E5%88%B0%E6%9C%89%E4%BA%86%E5%BC%9F%E5%BC%9F%E6%89%8D%E7%9F%A5%E9%81%93%23&t=31&band_rank=42&Refer=top)
1. [郑钦文教练用中文提问网友](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%95%99%E7%BB%83%E7%94%A8%E4%B8%AD%E6%96%87%E6%8F%90%E9%97%AE%E7%BD%91%E5%8F%8B%23&t=31&band_rank=43&Refer=top)
1. [何洁明显是朝着蔡依林的路线打造的](https://s.weibo.com//weibo?q=%23%E4%BD%95%E6%B4%81%E6%98%8E%E6%98%BE%E6%98%AF%E6%9C%9D%E7%9D%80%E8%94%A1%E4%BE%9D%E6%9E%97%E7%9A%84%E8%B7%AF%E7%BA%BF%E6%89%93%E9%80%A0%E7%9A%84%23&t=31&band_rank=44&Refer=top)
1. [心梗脑梗高发期到了](https://s.weibo.com//weibo?q=%23%E5%BF%83%E6%A2%97%E8%84%91%E6%A2%97%E9%AB%98%E5%8F%91%E6%9C%9F%E5%88%B0%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [尼坤最新营业状态](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E5%9D%A4%E6%9C%80%E6%96%B0%E8%90%A5%E4%B8%9A%E7%8A%B6%E6%80%81%23&t=31&band_rank=46&Refer=top)
1. [第一个抵制粉丝云包场的艺人](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8A%B5%E5%88%B6%E7%B2%89%E4%B8%9D%E4%BA%91%E5%8C%85%E5%9C%BA%E7%9A%84%E8%89%BA%E4%BA%BA&t=31&band_rank=47&Refer=top)
1. [77岁奶奶健身半年多练出肌肉线条](https://s.weibo.com//weibo?q=%2377%E5%B2%81%E5%A5%B6%E5%A5%B6%E5%81%A5%E8%BA%AB%E5%8D%8A%E5%B9%B4%E5%A4%9A%E7%BB%83%E5%87%BA%E8%82%8C%E8%82%89%E7%BA%BF%E6%9D%A1%23&t=31&band_rank=48&Refer=top)
1. [遭枪击身亡老人本想和子女过中秋](https://s.weibo.com//weibo?q=%23%E9%81%AD%E6%9E%AA%E5%87%BB%E8%BA%AB%E4%BA%A1%E8%80%81%E4%BA%BA%E6%9C%AC%E6%83%B3%E5%92%8C%E5%AD%90%E5%A5%B3%E8%BF%87%E4%B8%AD%E7%A7%8B%23&t=31&band_rank=49&Refer=top)
1. [郑钦文曾下跪恳求教练收徒](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%9B%BE%E4%B8%8B%E8%B7%AA%E6%81%B3%E6%B1%82%E6%95%99%E7%BB%83%E6%94%B6%E5%BE%92%23&t=31&band_rank=50&Refer=top)
1. [新时代中多命运共同体](https://s.weibo.com//weibo?q=%23%E6%96%B0%E6%97%B6%E4%BB%A3%E4%B8%AD%E5%A4%9A%E5%91%BD%E8%BF%90%E5%85%B1%E5%90%8C%E4%BD%93%23&Refer=new_time)
1. [老人凌晨下地干活被气枪击中身亡](https://s.weibo.com//weibo?q=%23%E8%80%81%E4%BA%BA%E5%87%8C%E6%99%A8%E4%B8%8B%E5%9C%B0%E5%B9%B2%E6%B4%BB%E8%A2%AB%E6%B0%94%E6%9E%AA%E5%87%BB%E4%B8%AD%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=4&Refer=top)
1. [79岁老干妈陶华碧用AI一年赚54亿](https://s.weibo.com//weibo?q=%2379%E5%B2%81%E8%80%81%E5%B9%B2%E5%A6%88%E9%99%B6%E5%8D%8E%E7%A2%A7%E7%94%A8AI%E4%B8%80%E5%B9%B4%E8%B5%9A54%E4%BA%BF%23&t=31&band_rank=5&Refer=top)
1. [33岁销冠确诊胃癌晚期突然被辞退](https://s.weibo.com//weibo?q=%2333%E5%B2%81%E9%94%80%E5%86%A0%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%AA%81%E7%84%B6%E8%A2%AB%E8%BE%9E%E9%80%80%23&t=31&band_rank=6&Refer=top)
1. [第一个抵制粉丝云包场的艺人](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8A%B5%E5%88%B6%E7%B2%89%E4%B8%9D%E4%BA%91%E5%8C%85%E5%9C%BA%E7%9A%84%E8%89%BA%E4%BA%BA&t=31&band_rank=7&Refer=top)
1. [百果园2年亏掉了7个亿](https://s.weibo.com//weibo?q=%23%E7%99%BE%E6%9E%9C%E5%9B%AD2%E5%B9%B4%E4%BA%8F%E6%8E%89%E4%BA%867%E4%B8%AA%E4%BA%BF%23&t=31&band_rank=8&Refer=top)
1. [疑似肖战经纪人朋友圈](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E8%82%96%E6%88%98%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23&t=31&band_rank=9&Refer=top)
1. [10岁女童被男老师摸脸家长索赔20万](https://s.weibo.com//weibo?q=%2310%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E7%94%B7%E8%80%81%E5%B8%88%E6%91%B8%E8%84%B8%E5%AE%B6%E9%95%BF%E7%B4%A2%E8%B5%9420%E4%B8%87%23&t=31&band_rank=10&Refer=top)
1. [金晨说王楚然在现发撒得开](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%A8%E8%AF%B4%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9C%A8%E7%8E%B0%E5%8F%91%E6%92%92%E5%BE%97%E5%BC%80%23&t=31&band_rank=11&Refer=top)
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
