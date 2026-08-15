# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-16 02:49:38

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
<!-- 最后更新时间 Sun Aug 16 2026 03:00:17 GMT+0800 (China Standard Time) -->

1. [纪念江泽民同志诞辰100周年大会将举行](https://so.toutiao.com/search?keyword=纪念江泽民同志诞辰100周年大会将举行)
1. [河南贾鲁河堤防117米溃口成功合龙](https://so.toutiao.com/search?keyword=河南贾鲁河堤防117米溃口成功合龙)
1. [绿水青山间的生态答卷](https://so.toutiao.com/search?keyword=绿水青山间的生态答卷)
1. [日本人战斗分队在乌成立 与俄军作战](https://so.toutiao.com/search?keyword=日本人战斗分队在乌成立%20与俄军作战)
1. [为何说旺旺最大竞争对手是糖](https://so.toutiao.com/search?keyword=为何说旺旺最大竞争对手是糖)
1. [28岁男子和43岁女子领证结婚](https://so.toutiao.com/search?keyword=28岁男子和43岁女子领证结婚)
1. [年轻人流行起夜间“拼蟹”](https://so.toutiao.com/search?keyword=年轻人流行起夜间“拼蟹”)
1. [年轻人山顶举起国旗与日本投降旗帜](https://so.toutiao.com/search?keyword=年轻人山顶举起国旗与日本投降旗帜)
1. [男童走失4天找回 父亲设宴200桌答谢](https://so.toutiao.com/search?keyword=男童走失4天找回%20父亲设宴200桌答谢)
1. [王传君终于原谅爱情公寓了](https://so.toutiao.com/search?keyword=王传君终于原谅爱情公寓了)
1. [我们为什么总是容易相信谣言](https://so.toutiao.com/search?keyword=我们为什么总是容易相信谣言)
1. [王祖贤现身广州网易总部](https://so.toutiao.com/search?keyword=王祖贤现身广州网易总部)
1. [为什么上海人对《奥德赛》情有独钟](https://so.toutiao.com/search?keyword=为什么上海人对《奥德赛》情有独钟)
1. [关晓彤大长腿溢出屏幕](https://so.toutiao.com/search?keyword=关晓彤大长腿溢出屏幕)
1. [专访无偿捐赠日军侵华史料少年](https://so.toutiao.com/search?keyword=专访无偿捐赠日军侵华史料少年)
1. [无人快递车堵住马路被叉车叉走](https://so.toutiao.com/search?keyword=无人快递车堵住马路被叉车叉走)
1. [旺旺为何卖不动了](https://so.toutiao.com/search?keyword=旺旺为何卖不动了)
1. [比利时老房翻修翻出价值超7000万黄金](https://so.toutiao.com/search?keyword=比利时老房翻修翻出价值超7000万黄金)
1. [独闯南太行56岁男子遗体疑被找到](https://so.toutiao.com/search?keyword=独闯南太行56岁男子遗体疑被找到)
1. [谁给小沈阳化成梁龙了](https://so.toutiao.com/search?keyword=谁给小沈阳化成梁龙了)
1. [男子执意醉驾身亡 好友没劝住判赔11万](https://so.toutiao.com/search?keyword=男子执意醉驾身亡%20好友没劝住判赔11万)
1. [评论员：冲突长期消耗 美军压力巨大](https://so.toutiao.com/search?keyword=评论员：冲突长期消耗%20美军压力巨大)
1. [余文乐 港星的含金量还在上升](https://so.toutiao.com/search?keyword=余文乐%20港星的含金量还在上升)
1. [婴儿在姑姑家失踪 36年后找到家人](https://so.toutiao.com/search?keyword=婴儿在姑姑家失踪%2036年后找到家人)
1. [河南收藏家手中藏着日本投降鲜活记忆](https://so.toutiao.com/search?keyword=河南收藏家手中藏着日本投降鲜活记忆)
1. [7万亿投资砸向“六张网”释放何信号](https://so.toutiao.com/search?keyword=7万亿投资砸向“六张网”释放何信号)
1. [胖东来首批刑释职工无一人离职](https://so.toutiao.com/search?keyword=胖东来首批刑释职工无一人离职)
1. [秸秆禁烧不再“一刀切”](https://so.toutiao.com/search?keyword=秸秆禁烧不再“一刀切”)
1. [比利时学生挖到价值900万欧元金库](https://so.toutiao.com/search?keyword=比利时学生挖到价值900万欧元金库)
1. [轿车挂双牌上路 交警回应](https://so.toutiao.com/search?keyword=轿车挂双牌上路%20交警回应)
1. [大V：小马科斯对华换上另一副面孔](https://so.toutiao.com/search?keyword=大V：小马科斯对华换上另一副面孔)
1. [伊朗称与阿曼就霍尔木兹通行达成协议](https://so.toutiao.com/search?keyword=伊朗称与阿曼就霍尔木兹通行达成协议)
1. [被批“丧失操守” 诺兰发声](https://so.toutiao.com/search?keyword=被批“丧失操守”%20诺兰发声)
1. [田径全锦赛女子百米决赛陈妤颉夺冠](https://so.toutiao.com/search?keyword=田径全锦赛女子百米决赛陈妤颉夺冠)
1. [山东梁山把二手车卖到了110个国家](https://so.toutiao.com/search?keyword=山东梁山把二手车卖到了110个国家)
1. [《奥德赛》戏里戏外](https://so.toutiao.com/search?keyword=《奥德赛》戏里戏外)
1. [有理儿有面：日本虚伪面具彻底撕碎](https://so.toutiao.com/search?keyword=有理儿有面：日本虚伪面具彻底撕碎)
1. [教练还在学员少了 昔日学车热潮不再](https://so.toutiao.com/search?keyword=教练还在学员少了%20昔日学车热潮不再)
1. [苏浙交界暴雨 多家企业称影响可控](https://so.toutiao.com/search?keyword=苏浙交界暴雨%20多家企业称影响可控)
1. [内塔尼亚胡领导的执政联盟选情承压](https://so.toutiao.com/search?keyword=内塔尼亚胡领导的执政联盟选情承压)
1. [航母“电改汽”：美国海军的技术乡愁](https://so.toutiao.com/search?keyword=航母“电改汽”：美国海军的技术乡愁)
1. [战后五年阿富汗现状如何](https://so.toutiao.com/search?keyword=战后五年阿富汗现状如何)
1. [苏州暴雨太湖水倒灌小区车库被淹](https://so.toutiao.com/search?keyword=苏州暴雨太湖水倒灌小区车库被淹)
1. [战后81年日本是否真正走向和平](https://so.toutiao.com/search?keyword=战后81年日本是否真正走向和平)
1. [深圳高校为何集体“强势出圈”](https://so.toutiao.com/search?keyword=深圳高校为何集体“强势出圈”)
1. [地质学家和灾害学专家马宗晋逝世](https://so.toutiao.com/search?keyword=地质学家和灾害学专家马宗晋逝世)
1. [高市致辞不提“反省”引日学者担忧](https://so.toutiao.com/search?keyword=高市致辞不提“反省”引日学者担忧)
1. [女子悬空楼外 派出所所长死死拽住](https://so.toutiao.com/search?keyword=女子悬空楼外%20派出所所长死死拽住)
1. [唐艺昕录节目很自然盘在李小冉身上](https://so.toutiao.com/search?keyword=唐艺昕录节目很自然盘在李小冉身上)
1. [埃文·凯尔：用行动守护历史真相](https://so.toutiao.com/search?keyword=埃文·凯尔：用行动守护历史真相)
1. [俄媒：伊朗总统将出席金砖国家峰会](https://so.toutiao.com/search?keyword=俄媒：伊朗总统将出席金砖国家峰会)
1. [青海省副省长刘涛发表文学作品](https://so.toutiao.com/search?keyword=青海省副省长刘涛发表文学作品)
1. [官方通报智力残疾人员被拉去做手术](https://so.toutiao.com/search?keyword=官方通报智力残疾人员被拉去做手术)
1. [评论员：是否拜鬼容不得日方搞暧昧](https://so.toutiao.com/search?keyword=评论员：是否拜鬼容不得日方搞暧昧)
1. [毛毅军代理申花主帅豪取两连胜](https://so.toutiao.com/search?keyword=毛毅军代理申花主帅豪取两连胜)
1. [生态环境法典如何改变你我生活](https://so.toutiao.com/search?keyword=生态环境法典如何改变你我生活)
1. [夜晚天空白影星链般闪现 专家分析](https://so.toutiao.com/search?keyword=夜晚天空白影星链般闪现%20专家分析)
1. [东海小开渔宁波“全城抢鲜”](https://so.toutiao.com/search?keyword=东海小开渔宁波“全城抢鲜”)
1. [记者：日民众集会促政府反省侵略战争](https://so.toutiao.com/search?keyword=记者：日民众集会促政府反省侵略战争)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Aug 16 2026 03:32:16 GMT+0800 (China Standard Time) -->

1. [河南14万考生成绩作废](https://www.zhihu.com/search?q=%E6%B2%B3%E5%8D%9714%E4%B8%87%E8%80%83%E7%94%9F%E6%88%90%E7%BB%A9%E4%BD%9C%E5%BA%9F)
1. [葵花药业创始人杀妻案](https://www.zhihu.com/search?q=%E8%91%B5%E8%8A%B1%E8%8D%AF%E4%B8%9A%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9D%80%E5%A6%BB%E6%A1%88)
1. [旺旺董事长称要淘汰没贡献的员工](https://www.zhihu.com/search?q=%E6%97%BA%E6%97%BA%E8%91%A3%E4%BA%8B%E9%95%BF%E7%A7%B0%E8%A6%81%E6%B7%98%E6%B1%B0%E6%B2%A1%E8%B4%A1%E7%8C%AE%E7%9A%84%E5%91%98%E5%B7%A5)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [《披荆斩棘 2026》第一期](https://www.zhihu.com/search?q=%E3%80%8A%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%202026%E3%80%8B%E7%AC%AC%E4%B8%80%E6%9C%9F)
1. [儿科医生韩杰因医疗事故罪被判刑](https://www.zhihu.com/search?q=%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E9%9F%A9%E6%9D%B0%E5%9B%A0%E5%8C%BB%E7%96%97%E4%BA%8B%E6%95%85%E7%BD%AA%E8%A2%AB%E5%88%A4%E5%88%91)
1. [DeepSeek Harness](https://www.zhihu.com/search?q=DeepSeek%20Harness)
1. [河南三地发生堤坝溃口](https://www.zhihu.com/search?q=%E6%B2%B3%E5%8D%97%E4%B8%89%E5%9C%B0%E5%8F%91%E7%94%9F%E5%A0%A4%E5%9D%9D%E6%BA%83%E5%8F%A3)
1. [胖东来招军人和刑释人员](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E6%8B%9B%E5%86%9B%E4%BA%BA%E5%92%8C%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98)
1. [DeepSeek Pro正式版发布](https://www.zhihu.com/search?q=DeepSeek%20Pro%E6%AD%A3%E5%BC%8F%E7%89%88%E5%8F%91%E5%B8%83)
1. [欢迎来到龙餐馆](https://www.zhihu.com/search?q=%E6%AC%A2%E8%BF%8E%E6%9D%A5%E5%88%B0%E9%BE%99%E9%A4%90%E9%A6%86)
1. [「林肯」号航母上多名水兵试图跳海自杀](https://www.zhihu.com/search?q=%E3%80%8C%E6%9E%97%E8%82%AF%E3%80%8D%E5%8F%B7%E8%88%AA%E6%AF%8D%E4%B8%8A%E5%A4%9A%E5%90%8D%E6%B0%B4%E5%85%B5%E8%AF%95%E5%9B%BE%E8%B7%B3%E6%B5%B7%E8%87%AA%E6%9D%80)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Aug 16 2026 02:49:38 GMT+0800 (China Standard Time) -->

1. [于东来称胖东来首批刑释职工30人无一离职，如何评价这一招聘计划的实际效果？其他企业能效仿吗？](https://www.zhihu.com/question/2071985681274855700)
1. [旺旺被指最大竞争对手是糖，网友集体呼吁旺旺减糖，这样真能救旺旺吗？传统食品行业正面临哪些挑战？](https://www.zhihu.com/question/2071910735857333500)
1. [DeepSeek-V4-Pro-0813已发布，体验下来怎么样？](https://www.zhihu.com/question/2071619812795609300)
1. [曾经爆火的洞洞鞋遇冷，Crocs 联合瑞幸推出近六百元洞洞鞋，二手平台半价出售，高价洞洞鞋卖不动了吗？](https://www.zhihu.com/question/2070889441451939300)
1. [全国票房日冠地图显示「东北龙餐馆，上海奥德赛」，如何看待这一现象？反应了怎样的区域观影偏好差异？](https://www.zhihu.com/question/2070573489396740900)
1. [大厂员工吐槽现在开会就是互丢AI文档，你有同感吗？很多公司都强调内化AI能力，但真的有提升产出质量吗？](https://www.zhihu.com/question/2071711669378442000)
1. [国家叫停「速成车」，新国标落地将如何影响消费者购车？](https://www.zhihu.com/question/2071168780798055700)
1. [河南教师清理双户口后常用户口因「虚假户口」被注销成黑户，警方同意重报但无法恢复，如何从法律角度解读？](https://www.zhihu.com/question/2071261939238545000)
1. [如果条件允许的话，完全以矿泉水或纯净水作为日常饮用水好不好？](https://www.zhihu.com/question/32244325)
1. [准高三生看完《奥本海默》后深感自己平庸，该如何接受与顶尖天才的差距？](https://www.zhihu.com/question/2071135275296858600)
1. [《一饭封神 2》中谢霆锋直言「糖拌西红柿不能拿来比赛」，你认同吗？](https://www.zhihu.com/question/2071601306246932200)
1. [SK 集团崔泰源警告 2027 年大概率会是存储芯片供应缺口最大的一年，内存、硬盘还要持续涨价吗？](https://www.zhihu.com/question/2071746265390506500)
1. [如何评价安妮·海瑟薇、伊万·麦克格雷格主演的惊悚电影《逃出绝命街》？](https://www.zhihu.com/question/2071192151078221800)
1. [贵州茅台上半年归母净利润同比下降 1.95%，这意味着什么？](https://www.zhihu.com/question/2071716274892191200)
1. [普京首次登上南千岛群岛视察民生产业，高市早苗激烈抗议，称是日本固有领土，俄方强硬回击，如何看待此事？](https://www.zhihu.com/question/2071637658586165800)
1. [儿科韩医生事件，会不会造成全国的防御性医疗的开端和大面积的医护离职潮爆发？未来儿科医生的数量腰斩？](https://www.zhihu.com/question/2069050672704705800)
1. [女子花 8 万做地下试管被推进简易房手术，多部门已介入，暴露出哪些监管盲区？如何斩断这条灰色产业链？](https://www.zhihu.com/question/2071178348793786400)
1. [如何看待 Dota2TI15，XG 0-2 不敌 TR 淘汰回家？如何评价 XG 战队及其本届表现?](https://www.zhihu.com/question/2072042300016964900)
1. [如何看待「大学新生三件套」涨价近五成，如果只给 5000 元预算配齐「开学三件套」，你会怎么分配？](https://www.zhihu.com/question/2061220785021268500)
1. [广州 11 岁男孩暑假在景点为游客拍照，月收入一千多，直言「拍照比刷题好玩」，这种暑假实践适合孩子吗？](https://www.zhihu.com/question/2070926273820489000)
1. [特朗普证实部署中东的林肯号航母将被替换，部署近9个月，船员心理崩溃、跳海事件引发质疑，如何看待此事？](https://www.zhihu.com/question/2071884847304401000)
1. [为什么说马拉多纳的「上帝之手」经典？](https://www.zhihu.com/question/28529388)
1. [电视剧「蜗居」里的宋思明权力那么大，为什么没把海藻安排进体制内？](https://www.zhihu.com/question/2070543205620258000)
1. [如何评价电视剧《重器》中律师李乡被抓事件？](https://www.zhihu.com/question/2070876212935783400)
1. [如何评价蒋奇明在《欢迎来龙餐馆》里的表现？](https://www.zhihu.com/question/2071283961712719600)
1. [有哪些不论你多难过，听后也会笑出声的笑话？](https://www.zhihu.com/question/53815952)
1. [《欢迎来龙餐馆》里的餐厅老板扎伊德在妻女被杀后，为什么不加入政府军或其他组织，而是加入恐怖分子阵营？](https://www.zhihu.com/question/2070905498790879700)
1. [有哪些是你上了大学后才知道的冷知识？](https://www.zhihu.com/question/2062937551581849300)
1. [电影《奥德赛》，在诺兰的作品里，处于什么水平？](https://www.zhihu.com/question/2068703642505459200)
1. [中国有什么成语或者典故可以对应「奥德赛」这个词呢？](https://www.zhihu.com/question/489874919)
1. [如何让大学生活变得更丰富有意义一点？](https://www.zhihu.com/question/2061121380792407800)
1. [懒惰是抗拒劳动还是抗拒社交压力？](https://www.zhihu.com/question/2065232307854874400)
1. [星宇股份裁员数百应届生并要求「个人原因」离职，具体什么情况？拒绝者被调岗打螺丝，面对该操作只能认栽吗？](https://www.zhihu.com/question/2071043484274921700)
1. [交流中自认较为严谨、有逻辑，但对方说“不就是想让我承认你是对的吗”，如何分析导致此种情形的原因？](https://www.zhihu.com/question/2071395504068604000)
1. [《寄生虫》里的豪宅，看起来没什么东西，豪在哪里？](https://www.zhihu.com/question/2070215170526279400)

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
<!-- 最后更新时间 Sun Aug 16 2026 02:52:49 GMT+0800 (China Standard Time) -->

1. [总书记始终牵挂绿水青山](https://s.weibo.com//weibo?q=%23%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%A7%8B%E7%BB%88%E7%89%B5%E6%8C%82%E7%BB%BF%E6%B0%B4%E9%9D%92%E5%B1%B1%23&Refer=new_time)
1. [欢天喜地七仙女选角让人笑哭](https://s.weibo.com//weibo?q=%E6%AC%A2%E5%A4%A9%E5%96%9C%E5%9C%B0%E4%B8%83%E4%BB%99%E5%A5%B3%E9%80%89%E8%A7%92%E8%AE%A9%E4%BA%BA%E7%AC%91%E5%93%AD&t=31&band_rank=1&Refer=top)
1. [披荆斩棘初舞台排名](https://s.weibo.com//weibo?q=%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%88%9D%E8%88%9E%E5%8F%B0%E6%8E%92%E5%90%8D&t=31&band_rank=2&Refer=top)
1. [以数智物流赋能特色产业发展](https://s.weibo.com//weibo?q=%23%E4%BB%A5%E6%95%B0%E6%99%BA%E7%89%A9%E6%B5%81%E8%B5%8B%E8%83%BD%E7%89%B9%E8%89%B2%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%23&t=31&band_rank=3&Refer=top)
1. [王传君终于原谅爱情公寓了](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86&t=31&band_rank=4&Refer=top)
1. [汉奸石平参拜靖国神社](https://s.weibo.com//weibo?q=%23%E6%B1%89%E5%A5%B8%E7%9F%B3%E5%B9%B3%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23&t=31&band_rank=5&Refer=top)
1. [曹骏披哥席位第一](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%8A%AB%E5%93%A5%E5%B8%AD%E4%BD%8D%E7%AC%AC%E4%B8%80%23&t=31&band_rank=6&Refer=top)
1. [生活中如何分辨善妒的人](https://s.weibo.com//weibo?q=%E7%94%9F%E6%B4%BB%E4%B8%AD%E5%A6%82%E4%BD%95%E5%88%86%E8%BE%A8%E5%96%84%E5%A6%92%E7%9A%84%E4%BA%BA&t=31&band_rank=7&Refer=top)
1. [网传追觅大家电解散](https://s.weibo.com//weibo?q=%E7%BD%91%E4%BC%A0%E8%BF%BD%E8%A7%85%E5%A4%A7%E5%AE%B6%E7%94%B5%E8%A7%A3%E6%95%A3&t=31&band_rank=8&Refer=top)
1. [看似吃个大鸡排其实就吃了个鸡蛋](https://s.weibo.com//weibo?q=%23%E7%9C%8B%E4%BC%BC%E5%90%83%E4%B8%AA%E5%A4%A7%E9%B8%A1%E6%8E%92%E5%85%B6%E5%AE%9E%E5%B0%B1%E5%90%83%E4%BA%86%E4%B8%AA%E9%B8%A1%E8%9B%8B%23&t=31&band_rank=9&Refer=top)
1. [胖东来 刑释人员](https://s.weibo.com//weibo?q=%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98&t=31&band_rank=10&Refer=top)
1. [曾辉 唱出了飞轮海的感觉](https://s.weibo.com//weibo?q=%E6%9B%BE%E8%BE%89%20%E5%94%B1%E5%87%BA%E4%BA%86%E9%A3%9E%E8%BD%AE%E6%B5%B7%E7%9A%84%E6%84%9F%E8%A7%89&t=31&band_rank=11&Refer=top)
1. [王传君披哥宣传人脉](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%8A%AB%E5%93%A5%E5%AE%A3%E4%BC%A0%E4%BA%BA%E8%84%89%23&t=31&band_rank=12&Refer=top)
1. [小沈阳秒了](https://s.weibo.com//weibo?q=%E5%B0%8F%E6%B2%88%E9%98%B3%E7%A7%92%E4%BA%86&t=31&band_rank=13&Refer=top)
1. [杜华好好谢谢齐思钧吧](https://s.weibo.com//weibo?q=%23%E6%9D%9C%E5%8D%8E%E5%A5%BD%E5%A5%BD%E8%B0%A2%E8%B0%A2%E9%BD%90%E6%80%9D%E9%92%A7%E5%90%A7%23&t=31&band_rank=14&Refer=top)
1. [卫龙还算辣条公司吗](https://s.weibo.com//weibo?q=%23%E5%8D%AB%E9%BE%99%E8%BF%98%E7%AE%97%E8%BE%A3%E6%9D%A1%E5%85%AC%E5%8F%B8%E5%90%97%23&t=31&band_rank=15&Refer=top)
1. [Jennie东京音乐节](https://s.weibo.com//weibo?q=%23Jennie%E4%B8%9C%E4%BA%AC%E9%9F%B3%E4%B9%90%E8%8A%82%23&t=31&band_rank=16&Refer=top)
1. [张睿危险](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%9D%BF%E5%8D%B1%E9%99%A9%23&t=31&band_rank=17&Refer=top)
1. [Bin 回归](https://s.weibo.com//weibo?q=Bin%20%E5%9B%9E%E5%BD%92&t=31&band_rank=18&Refer=top)
1. [曹骏中国人会飞具象化](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E9%AA%8F%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%BC%9A%E9%A3%9E%E5%85%B7%E8%B1%A1%E5%8C%96%23&t=31&band_rank=19&Refer=top)
1. [山西挖眼案男孩高考721分选了中医学](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8C%96%E7%9C%BC%E6%A1%88%E7%94%B7%E5%AD%A9%E9%AB%98%E8%80%83721%E5%88%86%E9%80%89%E4%BA%86%E4%B8%AD%E5%8C%BB%E5%AD%A6%23&t=31&band_rank=20&Refer=top)
1. [曾辉陈若轩 卧龙凤雏](https://s.weibo.com//weibo?q=%E6%9B%BE%E8%BE%89%E9%99%88%E8%8B%A5%E8%BD%A9%20%E5%8D%A7%E9%BE%99%E5%87%A4%E9%9B%8F&t=31&band_rank=21&Refer=top)
1. [无畏带队四连胜](https://s.weibo.com//weibo?q=%23%E6%97%A0%E7%95%8F%E5%B8%A6%E9%98%9F%E5%9B%9B%E8%BF%9E%E8%83%9C%23&t=31&band_rank=22&Refer=top)
1. [金敏喜二封洛迦诺影后](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%95%8F%E5%96%9C%E4%BA%8C%E5%B0%81%E6%B4%9B%E8%BF%A6%E8%AF%BA%E5%BD%B1%E5%90%8E%23&t=31&band_rank=23&Refer=top)
1. [新乡胖东来搬走前VS搬走后](https://s.weibo.com//weibo?q=%23%E6%96%B0%E4%B9%A1%E8%83%96%E4%B8%9C%E6%9D%A5%E6%90%AC%E8%B5%B0%E5%89%8DVS%E6%90%AC%E8%B5%B0%E5%90%8E%23&t=31&band_rank=24&Refer=top)
1. [张睿 中国内地郭富城](https://s.weibo.com//weibo?q=%E5%BC%A0%E7%9D%BF%20%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E9%83%AD%E5%AF%8C%E5%9F%8E&t=31&band_rank=25&Refer=top)
1. [张本美和早田希娜瑞典大满贯夺冠](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%A4%BA%E5%86%A0%23&t=31&band_rank=26&Refer=top)
1. [虞书欣下腰](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%8B%E8%85%B0%23&t=31&band_rank=27&Refer=top)
1. [王俊凯徐洁儿友谊](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BE%90%E6%B4%81%E5%84%BF%E5%8F%8B%E8%B0%8A%23&t=31&band_rank=28&Refer=top)
1. [央视曝光网红面霜违规添加激素](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%BD%91%E7%BA%A2%E9%9D%A2%E9%9C%9C%E8%BF%9D%E8%A7%84%E6%B7%BB%E5%8A%A0%E6%BF%80%E7%B4%A0%23&t=31&band_rank=29&Refer=top)
1. [洪秀柱发文纪念日本投降81周年](https://s.weibo.com//weibo?q=%23%E6%B4%AA%E7%A7%80%E6%9F%B1%E5%8F%91%E6%96%87%E7%BA%AA%E5%BF%B5%E6%97%A5%E6%9C%AC%E6%8A%95%E9%99%8D81%E5%91%A8%E5%B9%B4%23&t=31&band_rank=30&Refer=top)
1. [知识以很痛的方式进入了大脑](https://s.weibo.com//weibo?q=%E7%9F%A5%E8%AF%86%E4%BB%A5%E5%BE%88%E7%97%9B%E7%9A%84%E6%96%B9%E5%BC%8F%E8%BF%9B%E5%85%A5%E4%BA%86%E5%A4%A7%E8%84%91&t=31&band_rank=31&Refer=top)
1. [如何找到自己的天赋](https://s.weibo.com//weibo?q=%E5%A6%82%E4%BD%95%E6%89%BE%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E5%A4%A9%E8%B5%8B&t=31&band_rank=32&Refer=top)
1. [这和亲生的有什么区别](https://s.weibo.com//weibo?q=%E8%BF%99%E5%92%8C%E4%BA%B2%E7%94%9F%E7%9A%84%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB&t=31&band_rank=33&Refer=top)
1. [C罗若离婚乔治娜每月将获10万欧元](https://s.weibo.com//weibo?q=%23C%E7%BD%97%E8%8B%A5%E7%A6%BB%E5%A9%9A%E4%B9%94%E6%B2%BB%E5%A8%9C%E6%AF%8F%E6%9C%88%E5%B0%86%E8%8E%B710%E4%B8%87%E6%AC%A7%E5%85%83%23&t=31&band_rank=34&Refer=top)
1. [太干净的饭总有一种没吃的错觉](https://s.weibo.com//weibo?q=%E5%A4%AA%E5%B9%B2%E5%87%80%E7%9A%84%E9%A5%AD%E6%80%BB%E6%9C%89%E4%B8%80%E7%A7%8D%E6%B2%A1%E5%90%83%E7%9A%84%E9%94%99%E8%A7%89&t=31&band_rank=35&Refer=top)
1. [邵子恒黑马](https://s.weibo.com//weibo?q=%23%E9%82%B5%E5%AD%90%E6%81%92%E9%BB%91%E9%A9%AC%23&t=31&band_rank=36&Refer=top)
1. [旺旺二公子回应配料表建议](https://s.weibo.com//weibo?q=%23%E6%97%BA%E6%97%BA%E4%BA%8C%E5%85%AC%E5%AD%90%E5%9B%9E%E5%BA%94%E9%85%8D%E6%96%99%E8%A1%A8%E5%BB%BA%E8%AE%AE%23&t=31&band_rank=37&Refer=top)
1. [获千万打赏女主播涉诈骗被公诉](https://s.weibo.com//weibo?q=%23%E8%8E%B7%E5%8D%83%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD%E6%B6%89%E8%AF%88%E9%AA%97%E8%A2%AB%E5%85%AC%E8%AF%89%23&t=31&band_rank=38&Refer=top)
1. [OMG陈若轩你吓到我了](https://s.weibo.com//weibo?q=%23OMG%E9%99%88%E8%8B%A5%E8%BD%A9%E4%BD%A0%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23&t=31&band_rank=39&Refer=top)
1. [当我有一个快递到了](https://s.weibo.com//weibo?q=%E5%BD%93%E6%88%91%E6%9C%89%E4%B8%80%E4%B8%AA%E5%BF%AB%E9%80%92%E5%88%B0%E4%BA%86&t=31&band_rank=40&Refer=top)
1. [余文乐 港星的含金量还在上升](https://s.weibo.com//weibo?q=%E4%BD%99%E6%96%87%E4%B9%90%20%E6%B8%AF%E6%98%9F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87&t=31&band_rank=41&Refer=top)
1. [BLG战胜WE](https://s.weibo.com//weibo?q=BLG%E6%88%98%E8%83%9CWE&t=31&band_rank=42&Refer=top)
1. [日本人街头质疑南京大屠杀](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E8%A1%97%E5%A4%B4%E8%B4%A8%E7%96%91%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%23&t=31&band_rank=43&Refer=top)
1. [金鹰奖 赛制改革](https://s.weibo.com//weibo?q=%E9%87%91%E9%B9%B0%E5%A5%96%20%E8%B5%9B%E5%88%B6%E6%94%B9%E9%9D%A9&t=31&band_rank=44&Refer=top)
1. [王俊凯听到粉丝表白的反应](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E8%A1%A8%E7%99%BD%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=45&Refer=top)
1. [特朗普发AI视频带华盛顿游白宫](https://s.weibo.com//weibo?q=%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91AI%E8%A7%86%E9%A2%91%E5%B8%A6%E5%8D%8E%E7%9B%9B%E9%A1%BF%E6%B8%B8%E7%99%BD%E5%AE%AB&t=31&band_rank=46&Refer=top)
1. [宋亚轩一半一半挑战说唱](https://s.weibo.com//weibo?q=%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%80%E5%8D%8A%E4%B8%80%E5%8D%8A%E6%8C%91%E6%88%98%E8%AF%B4%E5%94%B1&t=31&band_rank=47&Refer=top)
1. [美国大模型帮日本对AI进行投毒](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B8%AE%E6%97%A5%E6%9C%AC%E5%AF%B9AI%E8%BF%9B%E8%A1%8C%E6%8A%95%E6%AF%92%23&t=31&band_rank=48&Refer=top)
1. [手机涨价别着急换新](https://s.weibo.com//weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E5%88%AB%E7%9D%80%E6%80%A5%E6%8D%A2%E6%96%B0%23&t=31&band_rank=49&Refer=top)
1. [日本投降咖啡杯文创](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%95%E9%99%8D%E5%92%96%E5%95%A1%E6%9D%AF%E6%96%87%E5%88%9B%23&t=31&band_rank=50&Refer=top)
1. [山西挖眼案男孩高考721分选了中医学](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8C%96%E7%9C%BC%E6%A1%88%E7%94%B7%E5%AD%A9%E9%AB%98%E8%80%83721%E5%88%86%E9%80%89%E4%BA%86%E4%B8%AD%E5%8C%BB%E5%AD%A6%23&t=31&band_rank=9&Refer=top)
1. [Bin 回归](https://s.weibo.com//weibo?q=Bin%20%E5%9B%9E%E5%BD%92&t=31&band_rank=10&Refer=top)
1. [小沈阳秒了](https://s.weibo.com//weibo?q=%E5%B0%8F%E6%B2%88%E9%98%B3%E7%A7%92%E4%BA%86&t=31&band_rank=12&Refer=top)
1. [杜华好好谢谢齐思钧吧](https://s.weibo.com//weibo?q=%23%E6%9D%9C%E5%8D%8E%E5%A5%BD%E5%A5%BD%E8%B0%A2%E8%B0%A2%E9%BD%90%E6%80%9D%E9%92%A7%E5%90%A7%23&t=31&band_rank=13&Refer=top)
1. [张睿危险](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%9D%BF%E5%8D%B1%E9%99%A9%23&t=31&band_rank=14&Refer=top)
1. [王传君披哥VCR爱情公寓片段](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%8A%AB%E5%93%A5VCR%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E7%89%87%E6%AE%B5%23&t=31&band_rank=16&Refer=top)
1. [曾辉陈若轩 卧龙凤雏](https://s.weibo.com//weibo?q=%E6%9B%BE%E8%BE%89%E9%99%88%E8%8B%A5%E8%BD%A9%20%E5%8D%A7%E9%BE%99%E5%87%A4%E9%9B%8F&t=31&band_rank=17&Refer=top)
1. [无畏带队四连胜](https://s.weibo.com//weibo?q=%23%E6%97%A0%E7%95%8F%E5%B8%A6%E9%98%9F%E5%9B%9B%E8%BF%9E%E8%83%9C%23&t=31&band_rank=18&Refer=top)
1. [看似吃个大鸡排其实就吃了个鸡蛋](https://s.weibo.com//weibo?q=%23%E7%9C%8B%E4%BC%BC%E5%90%83%E4%B8%AA%E5%A4%A7%E9%B8%A1%E6%8E%92%E5%85%B6%E5%AE%9E%E5%B0%B1%E5%90%83%E4%BA%86%E4%B8%AA%E9%B8%A1%E8%9B%8B%23&t=31&band_rank=19&Refer=top)
1. [央视曝光网红面霜违规添加激素](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%BD%91%E7%BA%A2%E9%9D%A2%E9%9C%9C%E8%BF%9D%E8%A7%84%E6%B7%BB%E5%8A%A0%E6%BF%80%E7%B4%A0%23&t=31&band_rank=20&Refer=top)
1. [张睿 中国内地郭富城](https://s.weibo.com//weibo?q=%E5%BC%A0%E7%9D%BF%20%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E9%83%AD%E5%AF%8C%E5%9F%8E&t=31&band_rank=21&Refer=top)
1. [曹骏中国人会飞具象化](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E9%AA%8F%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%BC%9A%E9%A3%9E%E5%85%B7%E8%B1%A1%E5%8C%96%23&t=31&band_rank=22&Refer=top)
1. [虞书欣下腰](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%8B%E8%85%B0%23&t=31&band_rank=23&Refer=top)
1. [旺旺二公子回应配料表建议](https://s.weibo.com//weibo?q=%23%E6%97%BA%E6%97%BA%E4%BA%8C%E5%85%AC%E5%AD%90%E5%9B%9E%E5%BA%94%E9%85%8D%E6%96%99%E8%A1%A8%E5%BB%BA%E8%AE%AE%23&t=31&band_rank=24&Refer=top)
1. [金敏喜二封洛迦诺影后](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%95%8F%E5%96%9C%E4%BA%8C%E5%B0%81%E6%B4%9B%E8%BF%A6%E8%AF%BA%E5%BD%B1%E5%90%8E%23&t=31&band_rank=25&Refer=top)
1. [王俊凯徐洁儿友谊](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BE%90%E6%B4%81%E5%84%BF%E5%8F%8B%E8%B0%8A%23&t=31&band_rank=26&Refer=top)
1. [胖东来 刑释人员](https://s.weibo.com//weibo?q=%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98&t=31&band_rank=27&Refer=top)
1. [新乡胖东来搬走前VS搬走后](https://s.weibo.com//weibo?q=%23%E6%96%B0%E4%B9%A1%E8%83%96%E4%B8%9C%E6%9D%A5%E6%90%AC%E8%B5%B0%E5%89%8DVS%E6%90%AC%E8%B5%B0%E5%90%8E%23&t=31&band_rank=28&Refer=top)
1. [当我有一个快递到了](https://s.weibo.com//weibo?q=%E5%BD%93%E6%88%91%E6%9C%89%E4%B8%80%E4%B8%AA%E5%BF%AB%E9%80%92%E5%88%B0%E4%BA%86&t=31&band_rank=29&Refer=top)
1. [谁杀死了驾校](https://s.weibo.com//weibo?q=%23%E8%B0%81%E6%9D%80%E6%AD%BB%E4%BA%86%E9%A9%BE%E6%A0%A1%23&t=31&band_rank=30&Refer=top)
1. [OMG陈若轩你吓到我了](https://s.weibo.com//weibo?q=%23OMG%E9%99%88%E8%8B%A5%E8%BD%A9%E4%BD%A0%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23&t=31&band_rank=31&Refer=top)
1. [邵子恒黑马](https://s.weibo.com//weibo?q=%23%E9%82%B5%E5%AD%90%E6%81%92%E9%BB%91%E9%A9%AC%23&t=31&band_rank=32&Refer=top)
1. [张本美和早田希娜瑞典大满贯夺冠](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%A4%BA%E5%86%A0%23&t=31&band_rank=33&Refer=top)
1. [阿云嘎 夯](https://s.weibo.com//weibo?q=%E9%98%BF%E4%BA%91%E5%98%8E%20%E5%A4%AF&t=31&band_rank=34&Refer=top)
1. [这和亲生的有什么区别](https://s.weibo.com//weibo?q=%E8%BF%99%E5%92%8C%E4%BA%B2%E7%94%9F%E7%9A%84%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB&t=31&band_rank=35&Refer=top)
1. [知识以很痛的方式进入了大脑](https://s.weibo.com//weibo?q=%E7%9F%A5%E8%AF%86%E4%BB%A5%E5%BE%88%E7%97%9B%E7%9A%84%E6%96%B9%E5%BC%8F%E8%BF%9B%E5%85%A5%E4%BA%86%E5%A4%A7%E8%84%91&t=31&band_rank=36&Refer=top)
1. [金鹰奖 赛制改革](https://s.weibo.com//weibo?q=%E9%87%91%E9%B9%B0%E5%A5%96%20%E8%B5%9B%E5%88%B6%E6%94%B9%E9%9D%A9&t=31&band_rank=37&Refer=top)
1. [王俊凯听到粉丝表白的反应](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E8%A1%A8%E7%99%BD%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=38&Refer=top)
1. [宋亚轩一半一半挑战说唱](https://s.weibo.com//weibo?q=%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%80%E5%8D%8A%E4%B8%80%E5%8D%8A%E6%8C%91%E6%88%98%E8%AF%B4%E5%94%B1&t=31&band_rank=39&Refer=top)
1. [C罗若离婚乔治娜每月将获10万欧元](https://s.weibo.com//weibo?q=%23C%E7%BD%97%E8%8B%A5%E7%A6%BB%E5%A9%9A%E4%B9%94%E6%B2%BB%E5%A8%9C%E6%AF%8F%E6%9C%88%E5%B0%86%E8%8E%B710%E4%B8%87%E6%AC%A7%E5%85%83%23&t=31&band_rank=40&Refer=top)
1. [日本人街头质疑南京大屠杀](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E8%A1%97%E5%A4%B4%E8%B4%A8%E7%96%91%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%23&t=31&band_rank=41&Refer=top)
1. [余文乐 港星的含金量还在上升](https://s.weibo.com//weibo?q=%E4%BD%99%E6%96%87%E4%B9%90%20%E6%B8%AF%E6%98%9F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87&t=31&band_rank=42&Refer=top)
1. [BLG战胜WE](https://s.weibo.com//weibo?q=BLG%E6%88%98%E8%83%9CWE&t=31&band_rank=43&Refer=top)
1. [日本投降咖啡杯文创](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%95%E9%99%8D%E5%92%96%E5%95%A1%E6%9D%AF%E6%96%87%E5%88%9B%23&t=31&band_rank=44&Refer=top)
1. [人到中年一定要舍得吃](https://s.weibo.com//weibo?q=%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E4%B8%80%E5%AE%9A%E8%A6%81%E8%88%8D%E5%BE%97%E5%90%83&t=31&band_rank=45&Refer=top)
1. [手机涨价别着急换新](https://s.weibo.com//weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E5%88%AB%E7%9D%80%E6%80%A5%E6%8D%A2%E6%96%B0%23&t=31&band_rank=47&Refer=top)
1. [宋亚轩缺席国乐那期在拍运动会](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%BC%BA%E5%B8%AD%E5%9B%BD%E4%B9%90%E9%82%A3%E6%9C%9F%E5%9C%A8%E6%8B%8D%E8%BF%90%E5%8A%A8%E4%BC%9A%23&t=31&band_rank=48&Refer=top)
1. [如何找到自己的天赋](https://s.weibo.com//weibo?q=%E5%A6%82%E4%BD%95%E6%89%BE%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E5%A4%A9%E8%B5%8B&t=31&band_rank=49&Refer=top)
1. [美国大模型帮日本对AI进行投毒](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B8%AE%E6%97%A5%E6%9C%AC%E5%AF%B9AI%E8%BF%9B%E8%A1%8C%E6%8A%95%E6%AF%92%23&t=31&band_rank=50&Refer=top)
1. [山西挖眼案男孩高考721分选了中医学](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8C%96%E7%9C%BC%E6%A1%88%E7%94%B7%E5%AD%A9%E9%AB%98%E8%80%83721%E5%88%86%E9%80%89%E4%BA%86%E4%B8%AD%E5%8C%BB%E5%AD%A6%23&t=31&band_rank=7&Refer=top)
1. [看似吃个大鸡排其实就吃了个鸡蛋](https://s.weibo.com//weibo?q=%23%E7%9C%8B%E4%BC%BC%E5%90%83%E4%B8%AA%E5%A4%A7%E9%B8%A1%E6%8E%92%E5%85%B6%E5%AE%9E%E5%B0%B1%E5%90%83%E4%BA%86%E4%B8%AA%E9%B8%A1%E8%9B%8B%23&t=31&band_rank=8&Refer=top)
1. [Bin 回归](https://s.weibo.com//weibo?q=Bin%20%E5%9B%9E%E5%BD%92&t=31&band_rank=9&Refer=top)
1. [生活中如何分辨善妒的人](https://s.weibo.com//weibo?q=%E7%94%9F%E6%B4%BB%E4%B8%AD%E5%A6%82%E4%BD%95%E5%88%86%E8%BE%A8%E5%96%84%E5%A6%92%E7%9A%84%E4%BA%BA&t=31&band_rank=10&Refer=top)
1. [小沈阳秒了](https://s.weibo.com//weibo?q=%E5%B0%8F%E6%B2%88%E9%98%B3%E7%A7%92%E4%BA%86&t=31&band_rank=11&Refer=top)
1. [时代少年团 古茗](https://s.weibo.com//weibo?q=%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%8F%A4%E8%8C%97&t=31&band_rank=12&Refer=top)
1. [无畏带队四连胜](https://s.weibo.com//weibo?q=%23%E6%97%A0%E7%95%8F%E5%B8%A6%E9%98%9F%E5%9B%9B%E8%BF%9E%E8%83%9C%23&t=31&band_rank=13&Refer=top)
1. [曾辉 唱出了飞轮海的感觉](https://s.weibo.com//weibo?q=%E6%9B%BE%E8%BE%89%20%E5%94%B1%E5%87%BA%E4%BA%86%E9%A3%9E%E8%BD%AE%E6%B5%B7%E7%9A%84%E6%84%9F%E8%A7%89&t=31&band_rank=14&Refer=top)
1. [鞠婧祎原谅现偶了](https://s.weibo.com//weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%E4%BA%86%23&t=31&band_rank=15&Refer=top)
1. [张本美和早田希娜瑞典大满贯夺冠](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%A4%BA%E5%86%A0%23&t=31&band_rank=16&Refer=top)
1. [卫龙还算辣条公司吗](https://s.weibo.com//weibo?q=%23%E5%8D%AB%E9%BE%99%E8%BF%98%E7%AE%97%E8%BE%A3%E6%9D%A1%E5%85%AC%E5%8F%B8%E5%90%97%23&t=31&band_rank=17&Refer=top)
1. [手机涨价别着急换新](https://s.weibo.com//weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E5%88%AB%E7%9D%80%E6%80%A5%E6%8D%A2%E6%96%B0%23&t=31&band_rank=18&Refer=top)
1. [好多明星暴瘦](https://s.weibo.com//weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E6%9A%B4%E7%98%A6%23&t=31&band_rank=19&Refer=top)
1. [旺旺二公子回应配料表建议](https://s.weibo.com//weibo?q=%23%E6%97%BA%E6%97%BA%E4%BA%8C%E5%85%AC%E5%AD%90%E5%9B%9E%E5%BA%94%E9%85%8D%E6%96%99%E8%A1%A8%E5%BB%BA%E8%AE%AE%23&t=31&band_rank=20&Refer=top)
1. [赵丽颖13个月没进组了](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9613%E4%B8%AA%E6%9C%88%E6%B2%A1%E8%BF%9B%E7%BB%84%E4%BA%86%23&t=31&band_rank=21&Refer=top)
1. [曝与张凌赫合照价格](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%88%E7%85%A7%E4%BB%B7%E6%A0%BC%23&t=31&band_rank=22&Refer=top)
1. [央视曝光网红面霜违规添加激素](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%BD%91%E7%BA%A2%E9%9D%A2%E9%9C%9C%E8%BF%9D%E8%A7%84%E6%B7%BB%E5%8A%A0%E6%BF%80%E7%B4%A0%23&t=31&band_rank=23&Refer=top)
1. [李彩领李彩演妈妈患癌](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%BD%A9%E9%A2%86%E6%9D%8E%E5%BD%A9%E6%BC%94%E5%A6%88%E5%A6%88%E6%82%A3%E7%99%8C%23&t=31&band_rank=24&Refer=top)
1. [左奇函给杨博文的信](https://s.weibo.com//weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E7%BB%99%E6%9D%A8%E5%8D%9A%E6%96%87%E7%9A%84%E4%BF%A1%23&t=31&band_rank=25&Refer=top)
1. [网传追觅大家电解散](https://s.weibo.com//weibo?q=%E7%BD%91%E4%BC%A0%E8%BF%BD%E8%A7%85%E5%A4%A7%E5%AE%B6%E7%94%B5%E8%A7%A3%E6%95%A3&t=31&band_rank=26&Refer=top)
1. [曾辉陈若轩 卧龙凤雏](https://s.weibo.com//weibo?q=%E6%9B%BE%E8%BE%89%E9%99%88%E8%8B%A5%E8%BD%A9%20%E5%8D%A7%E9%BE%99%E5%87%A4%E9%9B%8F&t=31&band_rank=27&Refer=top)
1. [张睿 中国内地郭富城](https://s.weibo.com//weibo?q=%E5%BC%A0%E7%9D%BF%20%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E9%83%AD%E5%AF%8C%E5%9F%8E&t=31&band_rank=28&Refer=top)
1. [胖东来 刑释人员](https://s.weibo.com//weibo?q=%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98&t=31&band_rank=29&Refer=top)
1. [王传君披哥VCR爱情公寓片段](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%8A%AB%E5%93%A5VCR%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E7%89%87%E6%AE%B5%23&t=31&band_rank=31&Refer=top)
1. [虞书欣下腰](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%8B%E8%85%B0%23&t=31&band_rank=32&Refer=top)
1. [曝王嘉尔宋雨琦恋情](https://s.weibo.com//weibo?q=%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85&t=31&band_rank=34&Refer=top)
1. [金敏喜二封洛迦诺影后](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%95%8F%E5%96%9C%E4%BA%8C%E5%B0%81%E6%B4%9B%E8%BF%A6%E8%AF%BA%E5%BD%B1%E5%90%8E%23&t=31&band_rank=35&Refer=top)
1. [C罗若离婚乔治娜每月将获10万欧元](https://s.weibo.com//weibo?q=%23C%E7%BD%97%E8%8B%A5%E7%A6%BB%E5%A9%9A%E4%B9%94%E6%B2%BB%E5%A8%9C%E6%AF%8F%E6%9C%88%E5%B0%86%E8%8E%B710%E4%B8%87%E6%AC%A7%E5%85%83%23&t=31&band_rank=36&Refer=top)
1. [阿云嘎 夯](https://s.weibo.com//weibo?q=%E9%98%BF%E4%BA%91%E5%98%8E%20%E5%A4%AF&t=31&band_rank=37&Refer=top)
1. [邵子恒黑马](https://s.weibo.com//weibo?q=%23%E9%82%B5%E5%AD%90%E6%81%92%E9%BB%91%E9%A9%AC%23&t=31&band_rank=38&Refer=top)
1. [BLG战胜WE](https://s.weibo.com//weibo?q=BLG%E6%88%98%E8%83%9CWE&t=31&band_rank=39&Refer=top)
1. [张睿 梦回新还珠](https://s.weibo.com//weibo?q=%E5%BC%A0%E7%9D%BF%20%E6%A2%A6%E5%9B%9E%E6%96%B0%E8%BF%98%E7%8F%A0&t=31&band_rank=40&Refer=top)
1. [OMG陈若轩你吓到我了](https://s.weibo.com//weibo?q=%23OMG%E9%99%88%E8%8B%A5%E8%BD%A9%E4%BD%A0%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [新乡胖东来搬走前VS搬走后](https://s.weibo.com//weibo?q=%23%E6%96%B0%E4%B9%A1%E8%83%96%E4%B8%9C%E6%9D%A5%E6%90%AC%E8%B5%B0%E5%89%8DVS%E6%90%AC%E8%B5%B0%E5%90%8E%23&t=31&band_rank=42&Refer=top)
1. [宋亚轩一半一半挑战说唱](https://s.weibo.com//weibo?q=%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%80%E5%8D%8A%E4%B8%80%E5%8D%8A%E6%8C%91%E6%88%98%E8%AF%B4%E5%94%B1&t=31&band_rank=43&Refer=top)
1. [王俊凯徐洁儿友谊](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BE%90%E6%B4%81%E5%84%BF%E5%8F%8B%E8%B0%8A%23&t=31&band_rank=44&Refer=top)
1. [日本人街头质疑南京大屠杀](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E8%A1%97%E5%A4%B4%E8%B4%A8%E7%96%91%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%23&t=31&band_rank=45&Refer=top)
1. [当我有一个快递到了](https://s.weibo.com//weibo?q=%E5%BD%93%E6%88%91%E6%9C%89%E4%B8%80%E4%B8%AA%E5%BF%AB%E9%80%92%E5%88%B0%E4%BA%86&t=31&band_rank=46&Refer=top)
1. [美国大模型帮日本对AI进行投毒](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B8%AE%E6%97%A5%E6%9C%AC%E5%AF%B9AI%E8%BF%9B%E8%A1%8C%E6%8A%95%E6%AF%92%23&t=31&band_rank=47&Refer=top)
1. [王俊凯听到粉丝表白的反应](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E8%A1%A8%E7%99%BD%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=48&Refer=top)
1. [刘耀文报备最近在干嘛](https://s.weibo.com//weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%8A%A5%E5%A4%87%E6%9C%80%E8%BF%91%E5%9C%A8%E5%B9%B2%E5%98%9B%23&t=31&band_rank=49&Refer=top)
1. [直观看见了女儿奴的诞生](https://s.weibo.com//weibo?q=%E7%9B%B4%E8%A7%82%E7%9C%8B%E8%A7%81%E4%BA%86%E5%A5%B3%E5%84%BF%E5%A5%B4%E7%9A%84%E8%AF%9E%E7%94%9F&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
