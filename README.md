# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-08 01:10:31

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
<!-- 最后更新时间 Sat Aug 08 2026 01:29:14 GMT+0800 (China Standard Time) -->

1. [一些民办高校招不到学生了](https://so.toutiao.com/search?keyword=一些民办高校招不到学生了)
1. [2名小孩玩手机低头幅度近乎折叠](https://so.toutiao.com/search?keyword=2名小孩玩手机低头幅度近乎折叠)
1. [我国外贸延续良好增长态势](https://so.toutiao.com/search?keyword=我国外贸延续良好增长态势)
1. [台风白海豚实时路径](https://so.toutiao.com/search?keyword=台风白海豚实时路径)
1. [国乒男单横滨冠军赛全军覆没](https://so.toutiao.com/search?keyword=国乒男单横滨冠军赛全军覆没)
1. [女儿卖房定价9000被母亲7500签约](https://so.toutiao.com/search?keyword=女儿卖房定价9000被母亲7500签约)
1. [沙特土耳其巴基斯坦签署共同防务协议](https://so.toutiao.com/search?keyword=沙特土耳其巴基斯坦签署共同防务协议)
1. [上海：台风白海豚或将带来龙卷风](https://so.toutiao.com/search?keyword=上海：台风白海豚或将带来龙卷风)
1. [女子称面试大概率失败但很开心](https://so.toutiao.com/search?keyword=女子称面试大概率失败但很开心)
1. [联合国谴责俄乌互相发动大规模袭击](https://so.toutiao.com/search?keyword=联合国谴责俄乌互相发动大规模袭击)
1. [“新疆阿勒泰八月能滑雪”不实](https://so.toutiao.com/search?keyword=“新疆阿勒泰八月能滑雪”不实)
1. [男子将外卖员砍成植物人获刑8年](https://so.toutiao.com/search?keyword=男子将外卖员砍成植物人获刑8年)
1. [46岁的殷桃看着像20岁](https://so.toutiao.com/search?keyword=46岁的殷桃看着像20岁)
1. [79岁老人被城管撞倒后离世案一审开庭](https://so.toutiao.com/search?keyword=79岁老人被城管撞倒后离世案一审开庭)
1. [38岁演员求职万岁山NPC成功](https://so.toutiao.com/search?keyword=38岁演员求职万岁山NPC成功)
1. [越来越多高分考生放弃985选警校](https://so.toutiao.com/search?keyword=越来越多高分考生放弃985选警校)
1. [泉州市委书记张毅恭被查](https://so.toutiao.com/search?keyword=泉州市委书记张毅恭被查)
1. [美联储9月还敢加息吗](https://so.toutiao.com/search?keyword=美联储9月还敢加息吗)
1. [四川宜宾地震网友称睡觉被摇醒](https://so.toutiao.com/search?keyword=四川宜宾地震网友称睡觉被摇醒)
1. [河南将重点打击十类新型黑恶犯罪](https://so.toutiao.com/search?keyword=河南将重点打击十类新型黑恶犯罪)
1. [车内突然钻出条蛇 男子徒手掐住](https://so.toutiao.com/search?keyword=车内突然钻出条蛇%20男子徒手掐住)
1. [《九门》证明了真人演员的不可替代吗](https://so.toutiao.com/search?keyword=《九门》证明了真人演员的不可替代吗)
1. [秋天的第一杯奶茶到底有多火](https://so.toutiao.com/search?keyword=秋天的第一杯奶茶到底有多火)
1. [中国女篮70-67险胜尼日利亚女篮](https://so.toutiao.com/search?keyword=中国女篮70-67险胜尼日利亚女篮)
1. [台风白海豚或吞并鲸鱼 登陆地点更新](https://so.toutiao.com/search?keyword=台风白海豚或吞并鲸鱼%20登陆地点更新)
1. [名创优品回应女子吐槽内裤质量差](https://so.toutiao.com/search?keyword=名创优品回应女子吐槽内裤质量差)
1. [女子趁店内无人偷走手机](https://so.toutiao.com/search?keyword=女子趁店内无人偷走手机)
1. [轮胎飞来撞晕车主 轿车自动停车呼120](https://so.toutiao.com/search?keyword=轮胎飞来撞晕车主%20轿车自动停车呼120)
1. [U17国足三连胜晋级明日之星半决赛](https://so.toutiao.com/search?keyword=U17国足三连胜晋级明日之星半决赛)
1. [对话捐赠日军侵华铁证遭威胁少年](https://so.toutiao.com/search?keyword=对话捐赠日军侵华铁证遭威胁少年)
1. [23岁博士确诊胃癌晚期](https://so.toutiao.com/search?keyword=23岁博士确诊胃癌晚期)
1. [地震时老公第一时间紧紧护住老婆](https://so.toutiao.com/search?keyword=地震时老公第一时间紧紧护住老婆)
1. [女子丧偶后卷入赔偿金争夺战](https://so.toutiao.com/search?keyword=女子丧偶后卷入赔偿金争夺战)
1. [伊朗发视频隐喻美国国运衰落原因](https://so.toutiao.com/search?keyword=伊朗发视频隐喻美国国运衰落原因)
1. [A股一周牛股出炉 最牛股近乎翻倍](https://so.toutiao.com/search?keyword=A股一周牛股出炉%20最牛股近乎翻倍)
1. [胜宏科技：股票交易异常波动](https://so.toutiao.com/search?keyword=胜宏科技：股票交易异常波动)
1. [老中医：立秋后养心是关键](https://so.toutiao.com/search?keyword=老中医：立秋后养心是关键)
1. [男子涉强奸获刑被质疑“挂案”近5年](https://so.toutiao.com/search?keyword=男子涉强奸获刑被质疑“挂案”近5年)
1. [原阿根廷U23国脚奥尔特加加盟河床](https://so.toutiao.com/search?keyword=原阿根廷U23国脚奥尔特加加盟河床)
1. [立秋养生做好三件事](https://so.toutiao.com/search?keyword=立秋养生做好三件事)
1. [手绘美钞出圈博主回应被玩梗](https://so.toutiao.com/search?keyword=手绘美钞出圈博主回应被玩梗)
1. [普京为何此时对国防系统进行人事调整](https://so.toutiao.com/search?keyword=普京为何此时对国防系统进行人事调整)
1. [媒体：星巴克被打到瑞幸价](https://so.toutiao.com/search?keyword=媒体：星巴克被打到瑞幸价)
1. [美方为何以执法合作破局缓和对华关系](https://so.toutiao.com/search?keyword=美方为何以执法合作破局缓和对华关系)
1. [河南三支一扶笔试将重考](https://so.toutiao.com/search?keyword=河南三支一扶笔试将重考)
1. [中医教你一招提升气血](https://so.toutiao.com/search?keyword=中医教你一招提升气血)
1. [四川宜宾高县4.9级地震致1死](https://so.toutiao.com/search?keyword=四川宜宾高县4.9级地震致1死)
1. [出口禁令驱动有色板块大涨](https://so.toutiao.com/search?keyword=出口禁令驱动有色板块大涨)
1. [长城H10改名能否拉升销量](https://so.toutiao.com/search?keyword=长城H10改名能否拉升销量)
1. [刘国正说向鹏打得很窝囊](https://so.toutiao.com/search?keyword=刘国正说向鹏打得很窝囊)
1. [博主：药明康德又站起来了](https://so.toutiao.com/search?keyword=博主：药明康德又站起来了)
1. [秋天的第一杯奶茶怎么选](https://so.toutiao.com/search?keyword=秋天的第一杯奶茶怎么选)
1. [“秋天的第一杯奶茶”6岁了](https://so.toutiao.com/search?keyword=“秋天的第一杯奶茶”6岁了)
1. [北京降雨致多地积水排水集团紧急处置](https://so.toutiao.com/search?keyword=北京降雨致多地积水排水集团紧急处置)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Aug 08 2026 00:10:12 GMT+0800 (China Standard Time) -->

1. [长鑫拒绝苹果降价要求](https://www.zhihu.com/search?q=%E9%95%BF%E9%91%AB%E6%8B%92%E7%BB%9D%E8%8B%B9%E6%9E%9C%E9%99%8D%E4%BB%B7%E8%A6%81%E6%B1%82)
1. [44岁爸爸因叛逆期女儿考研上985](https://www.zhihu.com/search?q=44%E5%B2%81%E7%88%B8%E7%88%B8%E5%9B%A0%E5%8F%9B%E9%80%86%E6%9C%9F%E5%A5%B3%E5%84%BF%E8%80%83%E7%A0%94%E4%B8%8A985)
1. [东航：提前14天可免费退改签](https://www.zhihu.com/search?q=%E4%B8%9C%E8%88%AA%EF%BC%9A%E6%8F%90%E5%89%8D14%E5%A4%A9%E5%8F%AF%E5%85%8D%E8%B4%B9%E9%80%80%E6%94%B9%E7%AD%BE)
1. [歌手总决赛](https://www.zhihu.com/search?q=%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B)
1. [胡彦斌歌王](https://www.zhihu.com/search?q=%E8%83%A1%E5%BD%A6%E6%96%8C%E6%AD%8C%E7%8E%8B)
1. [公司上四休三但要降薪1000元](https://www.zhihu.com/search?q=%E5%85%AC%E5%8F%B8%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%E4%BD%86%E8%A6%81%E9%99%8D%E8%96%AA1000%E5%85%83)
1. [广东雷州特教招聘违规多人被处分](https://www.zhihu.com/search?q=%E5%B9%BF%E4%B8%9C%E9%9B%B7%E5%B7%9E%E7%89%B9%E6%95%99%E6%8B%9B%E8%81%98%E8%BF%9D%E8%A7%84%E5%A4%9A%E4%BA%BA%E8%A2%AB%E5%A4%84%E5%88%86)
1. [河南三支一扶笔试将重考](https://www.zhihu.com/search?q=%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E7%AC%94%E8%AF%95%E5%B0%86%E9%87%8D%E8%80%83)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [鸿蒙智行回应「竹知了」事件](https://www.zhihu.com/search?q=%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%9B%9E%E5%BA%94%E3%80%8C%E7%AB%B9%E7%9F%A5%E4%BA%86%E3%80%8D%E4%BA%8B%E4%BB%B6)
1. [宇树科技发行价 150.80 元/股](https://www.zhihu.com/search?q=%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%8F%91%E8%A1%8C%E4%BB%B7%20150.80%20%E5%85%83%2F%E8%82%A1)
1. [人大教授6年花35万考证莫言家世](https://www.zhihu.com/search?q=%E4%BA%BA%E5%A4%A7%E6%95%99%E6%8E%886%E5%B9%B4%E8%8A%B135%E4%B8%87%E8%80%83%E8%AF%81%E8%8E%AB%E8%A8%80%E5%AE%B6%E4%B8%96)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Aug 08 2026 01:10:31 GMT+0800 (China Standard Time) -->

1. [河南「三支一扶」考试存组织作弊犯罪，作弊团伙主要成员被抓，哪些人将面临法律追责？暴露了哪些监管失灵？](https://www.zhihu.com/question/2069099461372899800)
1. [刚果（金）正式禁止铜、钴精矿出口，全球 70% 钴供给将受影响，国际铜价应声上涨，将产生哪些影响？](https://www.zhihu.com/question/2068810918826447000)
1. [如何看待蜘蛛侠荷兰弟替身「河南弟」误导舆论、造假抢功、疑似还遭剧组开除一事？](https://www.zhihu.com/question/2068334810846717200)
1. [如何看待张一鸣与梁文峰被评「正以完全不同的方向迈向 AGI」？](https://www.zhihu.com/question/2068998842628793600)
1. [唐僧扫塔为什么不从最高层往下扫，而是从下往上扫？](https://www.zhihu.com/question/22432296)
1. [跑了几天外卖发现，很多人原来是修手机的、修汽车的、修家电的技术人员，有手艺为什么要来跑外卖呢？](https://www.zhihu.com/question/2068266947939154000)
1. [怎么看待黄山一位老人手机拍照被疯狂弹广告的事件？](https://www.zhihu.com/question/2068808615612490800)
1. [外媒曝腾讯《最后的哨兵》烧数亿美金 6 年仍无果，为啥腾讯做不出好的 3A 开放世界作品？](https://www.zhihu.com/question/2068038088828217300)
1. [广东雷州通报特教老师招聘违规事件，多人受到党纪政务处分和组织处理，如何避免此类事件再次发生？](https://www.zhihu.com/question/2069118407937455600)
1. [公司实行「上四休三」，但要降薪 1000 元，员工不接受只能辞职，这样合理吗？换做是你会如何选择？](https://www.zhihu.com/question/2068750826869413000)
1. [如何评价GPT-5.6Luna免费不限量，后续基础大模型都会走向免费吗？](https://www.zhihu.com/question/2068986574256312600)
1. [网友称寿命长短与外婆奶奶有关，只有母系遗传能遗传线粒体基因，这一说法有科学依据吗？遗传与寿命关系大吗？](https://www.zhihu.com/question/2067926033827722800)
1. [南昌一星巴克员工对周杰伦海报做翻白眼等动作，现已被辞退，如何看待这一处罚？个人喜好和工作冲突该咋办？](https://www.zhihu.com/question/2068287712507982800)
1. [泸溪河发布「桃酥出现金属牙冠」调查结论，排除生产带入可能性，消费者已澄清视频情况不属实，如何看待此事？](https://www.zhihu.com/question/2069020073851983600)
1. [蘑菇界有哪些特别的存在？](https://www.zhihu.com/question/2067927081439031300)
1. [西贝贾国龙又开新店，「天边羊多」主打鲜羊料理，这波他能东山再起吗？](https://www.zhihu.com/question/2068995470320296400)
1. [LPL2026赛季第三赛段组内赛BLG 0:2 TES，如何评价这场比赛？](https://www.zhihu.com/question/2069156803678676000)
1. [《欢迎来龙餐馆》目前释出了三版预告，看完后你的直观感受是什么？](https://www.zhihu.com/question/2068648022410356500)
1. [男子结婚 8 年发现 3 娃非亲生，要求离婚、返还抚育开支并赔偿精神抚慰金，如何从法律角度解读？](https://www.zhihu.com/question/2069009762692199700)
1. [怎么看 OpenCode 创始人说「DeepSeek 涨价不是因为亏钱，而是为了劝退用户」？](https://www.zhihu.com/question/2069015264461579000)
1. [有没有什么研究方向曾经很火，但最后却被证明无法实用化或者是伪命题？或者目前很火，但是你认为可能失败？](https://www.zhihu.com/question/56006804)
1. [为什么现在的ai都在卷编程？](https://www.zhihu.com/question/2068569618449430300)
1. [如何评价《歌手 2026》歌王之战总决赛，胡彦斌夺得歌王桂冠、齐豫亚军、万妮达季军？他们实至名归吗？](https://www.zhihu.com/question/2069127583564654600)
1. [为什么如今很少再听见有“性能杀手”“显卡杀手”这样称呼的游戏？](https://www.zhihu.com/question/2027502309337252600)
1. [孩子准备上大一了，一个月跟我要1500的生活费，会不会太多了？](https://www.zhihu.com/question/2066558957930420200)
1. [如何看待儿科医生韩杰「漏诊」获刑 1 年，本人称「认错但不认罪」？从专业角度看他应该获刑吗？](https://www.zhihu.com/question/2068723614723956700)
1. [为什么《摩西十诫》里，不允许给神雕刻偶像？](https://www.zhihu.com/question/2067639101847871500)
1. [Python4 最大的升级是去掉 GIL 吗？](https://www.zhihu.com/question/579042308)
1. [张温为什么没有听从孙坚劝说斩杀无法无天的董卓？](https://www.zhihu.com/question/2031845485393224700)
1. [你最爱的家乡美食是什么？](https://www.zhihu.com/question/661847820)
1. [如何评价耿同学打假中科院邹杰青论文使用乘法造假？](https://www.zhihu.com/question/2068318156335085300)
1. [如何看待韩媒曝韩国足协 7 场比赛性贿赂 20 名裁判，涉中韩国奥战+世预赛？暴露出哪些问题？](https://www.zhihu.com/question/2068833130803197000)
1. [为什么脱口秀小剧场 99% 都不挣钱？](https://www.zhihu.com/question/1989721750020302300)
1. [最新消息，巴萨和罗德里就个人条款达成一致，将和曼城谈判，如何评价这次交易？](https://www.zhihu.com/question/2068844232975071000)
1. [为啥泸溪河回应「桃酥出现牙冠」为谣言，消费者仍然不买账？客观来看，现在品牌能做点啥挽回口碑？](https://www.zhihu.com/question/2069080627605759700)
1. [8 月 7 日四川宜宾市高县发生 4.9 级地震，具体情况如何？](https://www.zhihu.com/question/2069049243025633800)
1. [你觉得《三角洲行动》如何改动才能让「黄雀队」的优势不那么明显？](https://www.zhihu.com/question/2068758417007534600)
1. [专家建议落实双休、增加假期，称「剪头发看电影等消费需要时间」，如何看待此建议？增加假期能带动消费吗？](https://www.zhihu.com/question/2068732573711329000)

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
<!-- 最后更新时间 Sat Aug 08 2026 01:13:56 GMT+0800 (China Standard Time) -->

1. [乐享全民健身共筑健康中国](https://s.weibo.com//weibo?q=%23%E4%B9%90%E4%BA%AB%E5%85%A8%E6%B0%91%E5%81%A5%E8%BA%AB%E5%85%B1%E7%AD%91%E5%81%A5%E5%BA%B7%E4%B8%AD%E5%9B%BD%23&Refer=new_time)
1. [胡彦斌歌王](https://s.weibo.com//weibo?q=%E8%83%A1%E5%BD%A6%E6%96%8C%E6%AD%8C%E7%8E%8B&t=31&band_rank=1&Refer=top)
1. [原来戴泳帽真的会影响颜值](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E6%88%B4%E6%B3%B3%E5%B8%BD%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E9%A2%9C%E5%80%BC&t=31&band_rank=2&Refer=top)
1. [民用航空发展十五五规划](https://s.weibo.com//weibo?q=%23%E6%B0%91%E7%94%A8%E8%88%AA%E7%A9%BA%E5%8F%91%E5%B1%95%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%23&t=31&band_rank=3&Refer=top)
1. [歌手排名](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D&t=31&band_rank=4&Refer=top)
1. [歌手总决赛 孙燕姿吴青峰太伟大了](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%20%E5%AD%99%E7%87%95%E5%A7%BF%E5%90%B4%E9%9D%92%E5%B3%B0%E5%A4%AA%E4%BC%9F%E5%A4%A7%E4%BA%86&t=31&band_rank=5&Refer=top)
1. [一个没有空调外挂机的城市](https://s.weibo.com//weibo?q=%E4%B8%80%E4%B8%AA%E6%B2%A1%E6%9C%89%E7%A9%BA%E8%B0%83%E5%A4%96%E6%8C%82%E6%9C%BA%E7%9A%84%E5%9F%8E%E5%B8%82&t=31&band_rank=6&Refer=top)
1. [Bin哥我们错了](https://s.weibo.com//weibo?q=%23Bin%E5%93%A5%E6%88%91%E4%BB%AC%E9%94%99%E4%BA%86%23&t=31&band_rank=7&Refer=top)
1. [中山大学23岁直博生确诊胃癌晚期](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A623%E5%B2%81%E7%9B%B4%E5%8D%9A%E7%94%9F%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23&t=31&band_rank=8&Refer=top)
1. [披荆斩棘](https://s.weibo.com//weibo?q=%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98&t=31&band_rank=9&Refer=top)
1. [湖人 詹姆斯](https://s.weibo.com//weibo?q=%E6%B9%96%E4%BA%BA%20%E8%A9%B9%E5%A7%86%E6%96%AF&t=31&band_rank=10&Refer=top)
1. [齐豫 躲歌王](https://s.weibo.com//weibo?q=%E9%BD%90%E8%B1%AB%20%E8%BA%B2%E6%AD%8C%E7%8E%8B&t=31&band_rank=11&Refer=top)
1. [黄金](https://s.weibo.com//weibo?q=%E9%BB%84%E9%87%91&t=31&band_rank=12&Refer=top)
1. [耳帝](https://s.weibo.com//weibo?q=%E8%80%B3%E5%B8%9D&t=31&band_rank=13&Refer=top)
1. [陈情令外鹅版VS内鹅版](https://s.weibo.com//weibo?q=%E9%99%88%E6%83%85%E4%BB%A4%E5%A4%96%E9%B9%85%E7%89%88VS%E5%86%85%E9%B9%85%E7%89%88&t=31&band_rank=14&Refer=top)
1. [国乒男单 梯队建设](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%20%E6%A2%AF%E9%98%9F%E5%BB%BA%E8%AE%BE&t=31&band_rank=15&Refer=top)
1. [歌手收视率](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B%E6%94%B6%E8%A7%86%E7%8E%87&t=31&band_rank=16&Refer=top)
1. [歌王](https://s.weibo.com//weibo?q=%E6%AD%8C%E7%8E%8B&t=31&band_rank=17&Refer=top)
1. [小米高管玩梗被指越界](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E9%AB%98%E7%AE%A1%E7%8E%A9%E6%A2%97%E8%A2%AB%E6%8C%87%E8%B6%8A%E7%95%8C&t=31&band_rank=18&Refer=top)
1. [万妮达第三](https://s.weibo.com//weibo?q=%E4%B8%87%E5%A6%AE%E8%BE%BE%E7%AC%AC%E4%B8%89&t=31&band_rank=19&Refer=top)
1. [湖人官方宣传被指除名詹眉](https://s.weibo.com//weibo?q=%E6%B9%96%E4%BA%BA%E5%AE%98%E6%96%B9%E5%AE%A3%E4%BC%A0%E8%A2%AB%E6%8C%87%E9%99%A4%E5%90%8D%E8%A9%B9%E7%9C%89&t=31&band_rank=20&Refer=top)
1. [女子生下4胞胎被全家宠上天称嫁对人了](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E4%B8%8B4%E8%83%9E%E8%83%8E%E8%A2%AB%E5%85%A8%E5%AE%B6%E5%AE%A0%E4%B8%8A%E5%A4%A9%E7%A7%B0%E5%AB%81%E5%AF%B9%E4%BA%BA%E4%BA%86%23&t=31&band_rank=21&Refer=top)
1. [aespa最伟大的Drama回来了](https://s.weibo.com//weibo?q=aespa%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84Drama%E5%9B%9E%E6%9D%A5%E4%BA%86&t=31&band_rank=22&Refer=top)
1. [TF三代常驻综艺](https://s.weibo.com//weibo?q=%23TF%E4%B8%89%E4%BB%A3%E5%B8%B8%E9%A9%BB%E7%BB%BC%E8%89%BA%23&t=31&band_rank=23&Refer=top)
1. [员工刻意隐瞒自身价值遭索赔200万](https://s.weibo.com//weibo?q=%E5%91%98%E5%B7%A5%E5%88%BB%E6%84%8F%E9%9A%90%E7%9E%92%E8%87%AA%E8%BA%AB%E4%BB%B7%E5%80%BC%E9%81%AD%E7%B4%A2%E8%B5%94200%E4%B8%87&t=31&band_rank=24&Refer=top)
1. [歌手总决赛](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B&t=31&band_rank=25&Refer=top)
1. [天赐给侯明昊肚子打码](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E8%B5%90%E7%BB%99%E4%BE%AF%E6%98%8E%E6%98%8A%E8%82%9A%E5%AD%90%E6%89%93%E7%A0%81%23&t=31&band_rank=26&Refer=top)
1. [张凌赫苍兰诀婚服里面破洞裤](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%8B%8D%E5%85%B0%E8%AF%80%E5%A9%9A%E6%9C%8D%E9%87%8C%E9%9D%A2%E7%A0%B4%E6%B4%9E%E8%A3%A4%23&t=31&band_rank=27&Refer=top)
1. [外国网友也认了中式天庭](https://s.weibo.com//weibo?q=%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B9%9F%E8%AE%A4%E4%BA%86%E4%B8%AD%E5%BC%8F%E5%A4%A9%E5%BA%AD&t=31&band_rank=28&Refer=top)
1. [贴秋膘](https://s.weibo.com//weibo?q=%E8%B4%B4%E7%A7%8B%E8%86%98&t=31&band_rank=29&Refer=top)
1. [中国要用5万亿织一张网](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%A6%81%E7%94%A85%E4%B8%87%E4%BA%BF%E7%BB%87%E4%B8%80%E5%BC%A0%E7%BD%91%23&t=31&band_rank=30&Refer=top)
1. [要不念相思刺棠互换男女主吧](https://s.weibo.com//weibo?q=%23%E8%A6%81%E4%B8%8D%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%88%BA%E6%A3%A0%E4%BA%92%E6%8D%A2%E7%94%B7%E5%A5%B3%E4%B8%BB%E5%90%A7%23&t=31&band_rank=31&Refer=top)
1. [刘浩存红裙跳舞](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%BA%A2%E8%A3%99%E8%B7%B3%E8%88%9E%23&t=31&band_rank=32&Refer=top)
1. [23岁博士回应确诊胃癌晚期](https://s.weibo.com//weibo?q=%2323%E5%B2%81%E5%8D%9A%E5%A3%AB%E5%9B%9E%E5%BA%94%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23&t=31&band_rank=33&Refer=top)
1. [山水不会再相逢人也不会再见](https://s.weibo.com//weibo?q=%E5%B1%B1%E6%B0%B4%E4%B8%8D%E4%BC%9A%E5%86%8D%E7%9B%B8%E9%80%A2%E4%BA%BA%E4%B9%9F%E4%B8%8D%E4%BC%9A%E5%86%8D%E8%A7%81&t=31&band_rank=34&Refer=top)
1. [离树不到10秒的活荔枝](https://s.weibo.com//weibo?q=%E7%A6%BB%E6%A0%91%E4%B8%8D%E5%88%B010%E7%A7%92%E7%9A%84%E6%B4%BB%E8%8D%94%E6%9E%9D&t=31&band_rank=35&Refer=top)
1. [胚胎案妻子称如胚胎销毁定要离婚](https://s.weibo.com//weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E7%A7%B0%E5%A6%82%E8%83%9A%E8%83%8E%E9%94%80%E6%AF%81%E5%AE%9A%E8%A6%81%E7%A6%BB%E5%A9%9A%23&t=31&band_rank=36&Refer=top)
1. [WTT横滨冠军赛](https://s.weibo.com//weibo?q=WTT%E6%A8%AA%E6%BB%A8%E5%86%A0%E5%86%9B%E8%B5%9B&t=31&band_rank=37&Refer=top)
1. [齐豫第二轮倒一](https://s.weibo.com//weibo?q=%23%E9%BD%90%E8%B1%AB%E7%AC%AC%E4%BA%8C%E8%BD%AE%E5%80%92%E4%B8%80%23&t=31&band_rank=38&Refer=top)
1. [中餐厅](https://s.weibo.com//weibo?q=%E4%B8%AD%E9%A4%90%E5%8E%85&t=31&band_rank=39&Refer=top)
1. [名创优品回应女子吐槽内裤质量差](https://s.weibo.com//weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E5%86%85%E8%A3%A4%E8%B4%A8%E9%87%8F%E5%B7%AE%23&t=31&band_rank=40&Refer=top)
1. [TEC入围赛战胜EDG](https://s.weibo.com//weibo?q=%23TEC%E5%85%A5%E5%9B%B4%E8%B5%9B%E6%88%98%E8%83%9CEDG%23&t=31&band_rank=41&Refer=top)
1. [TES战胜BLG](https://s.weibo.com//weibo?q=TES%E6%88%98%E8%83%9CBLG&t=31&band_rank=42&Refer=top)
1. [王俊凯安排张雅琪当氛围组](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%AE%89%E6%8E%92%E5%BC%A0%E9%9B%85%E7%90%AA%E5%BD%93%E6%B0%9B%E5%9B%B4%E7%BB%84%23&t=31&band_rank=43&Refer=top)
1. [万妮达你让我哭](https://s.weibo.com//weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E4%BD%A0%E8%AE%A9%E6%88%91%E5%93%AD%23&t=31&band_rank=44&Refer=top)
1. [U17国足点球大战淘汰河床晋级决赛](https://s.weibo.com//weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E7%82%B9%E7%90%83%E5%A4%A7%E6%88%98%E6%B7%98%E6%B1%B0%E6%B2%B3%E5%BA%8A%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23&t=31&band_rank=45&Refer=top)
1. [吴碧霞 国家队就是国家队](https://s.weibo.com//weibo?q=%E5%90%B4%E7%A2%A7%E9%9C%9E%20%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%B0%B1%E6%98%AF%E5%9B%BD%E5%AE%B6%E9%98%9F&t=31&band_rank=46&Refer=top)
1. [宋亚轩张真源彩排合照](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%BD%A9%E6%8E%92%E5%90%88%E7%85%A7%23&t=31&band_rank=47&Refer=top)
1. [理解了孩子平庸就承欢膝下的意义](https://s.weibo.com//weibo?q=%E7%90%86%E8%A7%A3%E4%BA%86%E5%AD%A9%E5%AD%90%E5%B9%B3%E5%BA%B8%E5%B0%B1%E6%89%BF%E6%AC%A2%E8%86%9D%E4%B8%8B%E7%9A%84%E6%84%8F%E4%B9%89&t=31&band_rank=48&Refer=top)
1. [非京籍社保个税缴1年可购房](https://s.weibo.com//weibo?q=%23%E9%9D%9E%E4%BA%AC%E7%B1%8D%E7%A4%BE%E4%BF%9D%E4%B8%AA%E7%A8%8E%E7%BC%B41%E5%B9%B4%E5%8F%AF%E8%B4%AD%E6%88%BF%23&t=31&band_rank=49&Refer=top)
1. [歌手帮唱 下季首发](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B%E5%B8%AE%E5%94%B1%20%E4%B8%8B%E5%AD%A3%E9%A6%96%E5%8F%91&t=31&band_rank=50&Refer=top)
1. [歌手排名](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D&t=31&band_rank=2&Refer=top)
1. [一个没有空调外挂机的城市](https://s.weibo.com//weibo?q=%E4%B8%80%E4%B8%AA%E6%B2%A1%E6%9C%89%E7%A9%BA%E8%B0%83%E5%A4%96%E6%8C%82%E6%9C%BA%E7%9A%84%E5%9F%8E%E5%B8%82&t=31&band_rank=4&Refer=top)
1. [原来戴泳帽真的会影响颜值](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E6%88%B4%E6%B3%B3%E5%B8%BD%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E9%A2%9C%E5%80%BC&t=31&band_rank=5&Refer=top)
1. [齐豫 躲歌王](https://s.weibo.com//weibo?q=%E9%BD%90%E8%B1%AB%20%E8%BA%B2%E6%AD%8C%E7%8E%8B&t=31&band_rank=6&Refer=top)
1. [中山大学23岁直博生确诊胃癌晚期](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A623%E5%B2%81%E7%9B%B4%E5%8D%9A%E7%94%9F%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23&t=31&band_rank=7&Refer=top)
1. [歌手总决赛](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B&t=31&band_rank=8&Refer=top)
1. [湖人 詹姆斯](https://s.weibo.com//weibo?q=%E6%B9%96%E4%BA%BA%20%E8%A9%B9%E5%A7%86%E6%96%AF&t=31&band_rank=9&Refer=top)
1. [外国网友也认了中式天庭](https://s.weibo.com//weibo?q=%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B9%9F%E8%AE%A4%E4%BA%86%E4%B8%AD%E5%BC%8F%E5%A4%A9%E5%BA%AD&t=31&band_rank=10&Refer=top)
1. [金智秀发文道歉](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23&t=31&band_rank=11&Refer=top)
1. [歌手总决赛 孙燕姿吴青峰太伟大了](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%20%E5%AD%99%E7%87%95%E5%A7%BF%E5%90%B4%E9%9D%92%E5%B3%B0%E5%A4%AA%E4%BC%9F%E5%A4%A7%E4%BA%86&t=31&band_rank=12&Refer=top)
1. [黄金](https://s.weibo.com//weibo?q=%E9%BB%84%E9%87%91&t=31&band_rank=13&Refer=top)
1. [杨幂晒贵阳旅行照](https://s.weibo.com//weibo?q=%E6%9D%A8%E5%B9%82%E6%99%92%E8%B4%B5%E9%98%B3%E6%97%85%E8%A1%8C%E7%85%A7&t=31&band_rank=14&Refer=top)
1. [娄艺潇海南租房1个月15000](https://s.weibo.com//weibo?q=%23%E5%A8%84%E8%89%BA%E6%BD%87%E6%B5%B7%E5%8D%97%E7%A7%9F%E6%88%BF1%E4%B8%AA%E6%9C%8815000%23&t=31&band_rank=15&Refer=top)
1. [国乒男单 梯队建设](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%20%E6%A2%AF%E9%98%9F%E5%BB%BA%E8%AE%BE&t=31&band_rank=16&Refer=top)
1. [陈情令外鹅版VS内鹅版](https://s.weibo.com//weibo?q=%E9%99%88%E6%83%85%E4%BB%A4%E5%A4%96%E9%B9%85%E7%89%88VS%E5%86%85%E9%B9%85%E7%89%88&t=31&band_rank=17&Refer=top)
1. [这居然是李行亮](https://s.weibo.com//weibo?q=%23%E8%BF%99%E5%B1%85%E7%84%B6%E6%98%AF%E6%9D%8E%E8%A1%8C%E4%BA%AE%23&t=31&band_rank=18&Refer=top)
1. [TES战胜BLG](https://s.weibo.com//weibo?q=TES%E6%88%98%E8%83%9CBLG&t=31&band_rank=19&Refer=top)
1. [WTT横滨冠军赛](https://s.weibo.com//weibo?q=WTT%E6%A8%AA%E6%BB%A8%E5%86%A0%E5%86%9B%E8%B5%9B&t=31&band_rank=20&Refer=top)
1. [万妮达第三](https://s.weibo.com//weibo?q=%E4%B8%87%E5%A6%AE%E8%BE%BE%E7%AC%AC%E4%B8%89&t=31&band_rank=21&Refer=top)
1. [刘浩存红裙跳舞](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%BA%A2%E8%A3%99%E8%B7%B3%E8%88%9E%23&t=31&band_rank=22&Refer=top)
1. [暑期档票房超80亿](https://s.weibo.com//weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%E7%A5%A8%E6%88%BF%E8%B6%8580%E4%BA%BF%23&t=31&band_rank=23&Refer=top)
1. [宋亚轩拍了刘耀文的美甲](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%8B%8D%E4%BA%86%E5%88%98%E8%80%80%E6%96%87%E7%9A%84%E7%BE%8E%E7%94%B2%23&t=31&band_rank=24&Refer=top)
1. [TF三代常驻综艺](https://s.weibo.com//weibo?q=%23TF%E4%B8%89%E4%BB%A3%E5%B8%B8%E9%A9%BB%E7%BB%BC%E8%89%BA%23&t=31&band_rank=25&Refer=top)
1. [女子生下4胞胎被全家宠上天称嫁对人了](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E4%B8%8B4%E8%83%9E%E8%83%8E%E8%A2%AB%E5%85%A8%E5%AE%B6%E5%AE%A0%E4%B8%8A%E5%A4%A9%E7%A7%B0%E5%AB%81%E5%AF%B9%E4%BA%BA%E4%BA%86%23&t=31&band_rank=26&Refer=top)
1. [湖人官方宣传被指除名詹眉](https://s.weibo.com//weibo?q=%E6%B9%96%E4%BA%BA%E5%AE%98%E6%96%B9%E5%AE%A3%E4%BC%A0%E8%A2%AB%E6%8C%87%E9%99%A4%E5%90%8D%E8%A9%B9%E7%9C%89&t=31&band_rank=28&Refer=top)
1. [非农数据](https://s.weibo.com//weibo?q=%E9%9D%9E%E5%86%9C%E6%95%B0%E6%8D%AE&t=31&band_rank=29&Refer=top)
1. [Jennie出道十周年发文](https://s.weibo.com//weibo?q=%23Jennie%E5%87%BA%E9%81%93%E5%8D%81%E5%91%A8%E5%B9%B4%E5%8F%91%E6%96%87%23&t=31&band_rank=31&Refer=top)
1. [BLACKPINK十周年](https://s.weibo.com//weibo?q=BLACKPINK%E5%8D%81%E5%91%A8%E5%B9%B4&t=31&band_rank=32&Refer=top)
1. [北京出台房地产新政策](https://s.weibo.com//weibo?q=%23%E5%8C%97%E4%BA%AC%E5%87%BA%E5%8F%B0%E6%88%BF%E5%9C%B0%E4%BA%A7%E6%96%B0%E6%94%BF%E7%AD%96%23&t=31&band_rank=33&Refer=top)
1. [披荆斩棘](https://s.weibo.com//weibo?q=%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98&t=31&band_rank=34&Refer=top)
1. [员工刻意隐瞒自身价值遭索赔200万](https://s.weibo.com//weibo?q=%E5%91%98%E5%B7%A5%E5%88%BB%E6%84%8F%E9%9A%90%E7%9E%92%E8%87%AA%E8%BA%AB%E4%BB%B7%E5%80%BC%E9%81%AD%E7%B4%A2%E8%B5%94200%E4%B8%87&t=31&band_rank=35&Refer=top)
1. [歌手收视率](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B%E6%94%B6%E8%A7%86%E7%8E%87&t=31&band_rank=36&Refer=top)
1. [万妮达你让我哭](https://s.weibo.com//weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E4%BD%A0%E8%AE%A9%E6%88%91%E5%93%AD%23&t=31&band_rank=37&Refer=top)
1. [理解了孩子平庸就承欢膝下的意义](https://s.weibo.com//weibo?q=%E7%90%86%E8%A7%A3%E4%BA%86%E5%AD%A9%E5%AD%90%E5%B9%B3%E5%BA%B8%E5%B0%B1%E6%89%BF%E6%AC%A2%E8%86%9D%E4%B8%8B%E7%9A%84%E6%84%8F%E4%B9%89&t=31&band_rank=38&Refer=top)
1. [天赐给侯明昊肚子打码](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E8%B5%90%E7%BB%99%E4%BE%AF%E6%98%8E%E6%98%8A%E8%82%9A%E5%AD%90%E6%89%93%E7%A0%81%23&t=31&band_rank=39&Refer=top)
1. [歌手第一轮排名](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%B8%80%E8%BD%AE%E6%8E%92%E5%90%8D&t=31&band_rank=40&Refer=top)
1. [非京籍社保个税缴1年可购房](https://s.weibo.com//weibo?q=%23%E9%9D%9E%E4%BA%AC%E7%B1%8D%E7%A4%BE%E4%BF%9D%E4%B8%AA%E7%A8%8E%E7%BC%B41%E5%B9%B4%E5%8F%AF%E8%B4%AD%E6%88%BF%23&t=31&band_rank=41&Refer=top)
1. [歌手](https://s.weibo.com//weibo?q=%E6%AD%8C%E6%89%8B&t=31&band_rank=42&Refer=top)
1. [aespa最伟大的Drama回来了](https://s.weibo.com//weibo?q=aespa%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84Drama%E5%9B%9E%E6%9D%A5%E4%BA%86&t=31&band_rank=43&Refer=top)
1. [iPhone18Pro起售或破万](https://s.weibo.com//weibo?q=iPhone18Pro%E8%B5%B7%E5%94%AE%E6%88%96%E7%A0%B4%E4%B8%87&t=31&band_rank=44&Refer=top)
1. [宋亚轩张真源彩排合照](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%BD%A9%E6%8E%92%E5%90%88%E7%85%A7%23&t=31&band_rank=45&Refer=top)
1. [美联储9月加息预期下降](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A89%E6%9C%88%E5%8A%A0%E6%81%AF%E9%A2%84%E6%9C%9F%E4%B8%8B%E9%99%8D%23&t=31&band_rank=46&Refer=top)
1. [Gemini一言不合就开始生图](https://s.weibo.com//weibo?q=Gemini%E4%B8%80%E8%A8%80%E4%B8%8D%E5%90%88%E5%B0%B1%E5%BC%80%E5%A7%8B%E7%94%9F%E5%9B%BE&t=31&band_rank=47&Refer=top)
1. [离树不到10秒的活荔枝](https://s.weibo.com//weibo?q=%E7%A6%BB%E6%A0%91%E4%B8%8D%E5%88%B010%E7%A7%92%E7%9A%84%E6%B4%BB%E8%8D%94%E6%9E%9D&t=31&band_rank=48&Refer=top)
1. [小米高管玩梗被指越界](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E9%AB%98%E7%AE%A1%E7%8E%A9%E6%A2%97%E8%A2%AB%E6%8C%87%E8%B6%8A%E7%95%8C&t=31&band_rank=49&Refer=top)
1. [歌王](https://s.weibo.com//weibo?q=%E6%AD%8C%E7%8E%8B&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
