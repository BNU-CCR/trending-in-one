# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-24 23:58:21

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
<!-- 最后更新时间 Tue Aug 25 2026 00:08:05 GMT+0800 (China Standard Time) -->

1. [陈武同志逝世](https://so.toutiao.com/search?keyword=陈武同志逝世)
1. [官方解答儿童能否单独乘火车出行](https://so.toutiao.com/search?keyword=官方解答儿童能否单独乘火车出行)
1. [各地全方位保障“麦归仓”](https://so.toutiao.com/search?keyword=各地全方位保障“麦归仓”)
1. [教育部：一年级不布置书面家庭作业](https://so.toutiao.com/search?keyword=教育部：一年级不布置书面家庭作业)
1. [机器人100米障碍赛现场听取哇声一片](https://so.toutiao.com/search?keyword=机器人100米障碍赛现场听取哇声一片)
1. [官方确认：扶老人赔1.9万店主无过错](https://so.toutiao.com/search?keyword=官方确认：扶老人赔1.9万店主无过错)
1. [中国女排3-0伊朗女排迎两连胜](https://so.toutiao.com/search?keyword=中国女排3-0伊朗女排迎两连胜)
1. [女子下楼梯时玩手机直接摔下去](https://so.toutiao.com/search?keyword=女子下楼梯时玩手机直接摔下去)
1. [载20名中国人货轮沉没：18人失联](https://so.toutiao.com/search?keyword=载20名中国人货轮沉没：18人失联)
1. [为什么宇树需要DeepSeek](https://so.toutiao.com/search?keyword=为什么宇树需要DeepSeek)
1. [男子偶遇3条蝮蛇绕行后淡定采蘑菇](https://so.toutiao.com/search?keyword=男子偶遇3条蝮蛇绕行后淡定采蘑菇)
1. [“没打HPV疫苗不能入学”是误传](https://so.toutiao.com/search?keyword=“没打HPV疫苗不能入学”是误传)
1. [印度去世乞丐家中发现30多麻袋现金](https://so.toutiao.com/search?keyword=印度去世乞丐家中发现30多麻袋现金)
1. [男孩胸部异常变大查出男性乳腺发育症](https://so.toutiao.com/search?keyword=男孩胸部异常变大查出男性乳腺发育症)
1. [陕西版“孙小果案”二审维持死刑判决](https://so.toutiao.com/search?keyword=陕西版“孙小果案”二审维持死刑判决)
1. [殷玉珍带赛考斯参观“赛考斯林”](https://so.toutiao.com/search?keyword=殷玉珍带赛考斯参观“赛考斯林”)
1. [中埃联训现场画面来了](https://so.toutiao.com/search?keyword=中埃联训现场画面来了)
1. [问界M6新配色“冰晶粉”亮相](https://so.toutiao.com/search?keyword=问界M6新配色“冰晶粉”亮相)
1. [成都车展：谁在撑起22万平方米的繁华](https://so.toutiao.com/search?keyword=成都车展：谁在撑起22万平方米的繁华)
1. [滞留涠洲岛游客：等着回去上班](https://so.toutiao.com/search?keyword=滞留涠洲岛游客：等着回去上班)
1. [特朗普称朝鲜有57枚核弹](https://so.toutiao.com/search?keyword=特朗普称朝鲜有57枚核弹)
1. [司机打瞌睡被后座乘客一巴掌打醒](https://so.toutiao.com/search?keyword=司机打瞌睡被后座乘客一巴掌打醒)
1. [小米发布国内首款3nm智驾芯片](https://so.toutiao.com/search?keyword=小米发布国内首款3nm智驾芯片)
1. [机器人能跑多快取决于人类能想多远](https://so.toutiao.com/search?keyword=机器人能跑多快取决于人类能想多远)
1. [运白菜为何不用冷链](https://so.toutiao.com/search?keyword=运白菜为何不用冷链)
1. [男子帮人把手机放车筐妻子转头偷走](https://so.toutiao.com/search?keyword=男子帮人把手机放车筐妻子转头偷走)
1. [女子多年未回自家房子锁芯被更换](https://so.toutiao.com/search?keyword=女子多年未回自家房子锁芯被更换)
1. [网红粥饼伦首个店铺将闭店](https://so.toutiao.com/search?keyword=网红粥饼伦首个店铺将闭店)
1. [为什么几条热点赛道全面熄火](https://so.toutiao.com/search?keyword=为什么几条热点赛道全面熄火)
1. [雷军说芯片很贵不建议拆开看彩蛋](https://so.toutiao.com/search?keyword=雷军说芯片很贵不建议拆开看彩蛋)
1. [评论员：守护舌尖上安全容不得慢半拍](https://so.toutiao.com/search?keyword=评论员：守护舌尖上安全容不得慢半拍)
1. [小猫叼蛇回家 吓得主人弹射跳起](https://so.toutiao.com/search?keyword=小猫叼蛇回家%20吓得主人弹射跳起)
1. [一家族5人先后确诊尿毒症](https://so.toutiao.com/search?keyword=一家族5人先后确诊尿毒症)
1. [张子枫瘦成薄薄一片](https://so.toutiao.com/search?keyword=张子枫瘦成薄薄一片)
1. [银川两所中学开学查发型引争议](https://so.toutiao.com/search?keyword=银川两所中学开学查发型引争议)
1. [电影《空枪》：拍尽小人物悲欢离合](https://so.toutiao.com/search?keyword=电影《空枪》：拍尽小人物悲欢离合)
1. [青岛男子搭讪辱骂女游客被行拘](https://so.toutiao.com/search?keyword=青岛男子搭讪辱骂女游客被行拘)
1. [地铁工作人员助迷路男孩与家人团聚](https://so.toutiao.com/search?keyword=地铁工作人员助迷路男孩与家人团聚)
1. [香港80岁老人杀害66岁妻子后坠亡](https://so.toutiao.com/search?keyword=香港80岁老人杀害66岁妻子后坠亡)
1. [吴宜泽爆冷不敌世界排名120选手](https://so.toutiao.com/search?keyword=吴宜泽爆冷不敌世界排名120选手)
1. [成都车展：自主品牌换道方盒子求增量](https://so.toutiao.com/search?keyword=成都车展：自主品牌换道方盒子求增量)
1. [博主：“最保守的钱”疯抢中国资产](https://so.toutiao.com/search?keyword=博主：“最保守的钱”疯抢中国资产)
1. [折叠iPhone细节曝光](https://so.toutiao.com/search?keyword=折叠iPhone细节曝光)
1. [俄媒：俄首次接收朝鲜重型弹道导弹](https://so.toutiao.com/search?keyword=俄媒：俄首次接收朝鲜重型弹道导弹)
1. [机器人表演丝滑空翻](https://so.toutiao.com/search?keyword=机器人表演丝滑空翻)
1. [香港青少年南京行：爱排球理由更多了](https://so.toutiao.com/search?keyword=香港青少年南京行：爱排球理由更多了)
1. [向太说和周星驰做不回好朋友](https://so.toutiao.com/search?keyword=向太说和周星驰做不回好朋友)
1. [韩国失踪104天女子遗体疑被发现](https://so.toutiao.com/search?keyword=韩国失踪104天女子遗体疑被发现)
1. [多家银行积存金克价站上千元](https://so.toutiao.com/search?keyword=多家银行积存金克价站上千元)
1. [阿里为何急求资金](https://so.toutiao.com/search?keyword=阿里为何急求资金)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Aug 25 2026 00:57:15 GMT+0800 (China Standard Time) -->

1. [北大教授称灵活就业是一种福利](https://www.zhihu.com/search?q=%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E7%A7%B0%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%98%AF%E4%B8%80%E7%A7%8D%E7%A6%8F%E5%88%A9)
1. [老人进店休息离世店家帮扶遭索赔](https://www.zhihu.com/search?q=%E8%80%81%E4%BA%BA%E8%BF%9B%E5%BA%97%E4%BC%91%E6%81%AF%E7%A6%BB%E4%B8%96%E5%BA%97%E5%AE%B6%E5%B8%AE%E6%89%B6%E9%81%AD%E7%B4%A2%E8%B5%94)
1. [韦东奕带货卖39.8元练习册](https://www.zhihu.com/search?q=%E9%9F%A6%E4%B8%9C%E5%A5%95%E5%B8%A6%E8%B4%A7%E5%8D%9639.8%E5%85%83%E7%BB%83%E4%B9%A0%E5%86%8C)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [陕西版「孙小果」二审维持死刑](https://www.zhihu.com/search?q=%E9%99%95%E8%A5%BF%E7%89%88%E3%80%8C%E5%AD%99%E5%B0%8F%E6%9E%9C%E3%80%8D%E4%BA%8C%E5%AE%A1%E7%BB%B4%E6%8C%81%E6%AD%BB%E5%88%91)
1. [官方确认帮扶老人遭索赔店主不担责](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E7%A1%AE%E8%AE%A4%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%E4%B8%8D%E6%8B%85%E8%B4%A3)
1. [失业男子饿 20 天致肾衰竭](https://www.zhihu.com/search?q=%E5%A4%B1%E4%B8%9A%E7%94%B7%E5%AD%90%E9%A5%BF%2020%20%E5%A4%A9%E8%87%B4%E8%82%BE%E8%A1%B0%E7%AB%AD)
1. [《黑神话：钟馗》发布实机演示视频](https://www.zhihu.com/search?q=%E3%80%8A%E9%BB%91%E7%A5%9E%E8%AF%9D%EF%BC%9A%E9%92%9F%E9%A6%97%E3%80%8B%E5%8F%91%E5%B8%83%E5%AE%9E%E6%9C%BA%E6%BC%94%E7%A4%BA%E8%A7%86%E9%A2%91)
1. [小米玄戒芯片发布会](https://www.zhihu.com/search?q=%E5%B0%8F%E7%B1%B3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E5%8F%91%E5%B8%83%E4%BC%9A)
1. [四川宜宾 4.7 级地震](https://www.zhihu.com/search?q=%E5%9B%9B%E5%B7%9D%E5%AE%9C%E5%AE%BE%204.7%20%E7%BA%A7%E5%9C%B0%E9%9C%87)
1. [零食占座当事人母亲否认故意占座](https://www.zhihu.com/search?q=%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%E5%BD%93%E4%BA%8B%E4%BA%BA%E6%AF%8D%E4%BA%B2%E5%90%A6%E8%AE%A4%E6%95%85%E6%84%8F%E5%8D%A0%E5%BA%A7)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Aug 24 2026 23:58:21 GMT+0800 (China Standard Time) -->

1. [小米新一代玄戒芯片技术发布会举行，有哪些看点值得关注？](https://www.zhihu.com/question/2074874011520180200)
1. [为什么在中兴四将图里，岳飞是一个憨态可掬的小胖子，是作画者的想象，还是岳飞本人就这形象气质?](https://www.zhihu.com/question/306550343)
1. [肯德基麦当劳的配方为何能数十年不泄露？](https://www.zhihu.com/question/2073743631962449400)
1. [索尼发邮件重申「数字游戏不属于玩家」，账号封禁就全清零，你怎么看待这波操作？](https://www.zhihu.com/question/2075000240088805600)
1. [亚朵卖枕头被子收入快赶上酒店主业，将全年零售收入增长目标上调至40％，一系列商业动作的背后有哪些考量？](https://www.zhihu.com/question/2074548112480100900)
1. [樊振东德国杯上座率已经超85%，影院为什么不加场呢?](https://www.zhihu.com/question/2075007747150591000)
1. [Claude Code增长熄火，网传现大规模退订，为啥会这样？如何看待其诸多老用户开始转用Codex？](https://www.zhihu.com/question/2074071189530440700)
1. [如何看待 12306 回应高铁无座票与二等座同价，称属于同一席别、同一等级？这种安排合理吗？](https://www.zhihu.com/question/1942490264934528500)
1. [如何看待井上织姬在死神千年血战篇获得究极加强，无限治愈队友，掰断友哈巴赫的剑并正面和他打成五五开？](https://www.zhihu.com/question/2074999470861837800)
1. [北京大学原副校长任羽中受贿 3195 万余元，一审被判 8 年，怎样看待这一结果？有哪些警示意义？](https://www.zhihu.com/question/2075268182822970600)
1. [大家为什么接受不了整容的明星啊？](https://www.zhihu.com/question/2008652535855071700)
1. [如何评价黑客以“恢复实体光盘、抵制数字预购”为名威胁 R星，并设置《GTA 6》源码开关？](https://www.zhihu.com/question/2074570715764896500)
1. [为啥百米大战中的人形机器人大多最终是撞墙摔停的？它们不会刹车吗？](https://www.zhihu.com/question/2074951497901786600)
1. [为什么古人相信水银、明矾、硫磺等物质可以炼出长生不老药？](https://www.zhihu.com/question/314302015)
1. [Qwen3.8-27B 被称为新的「模型斩杀线」，为什么？如何看待这一变化？](https://www.zhihu.com/question/2074157917750518500)
1. [7 月财政收入增长 11.7%、个税同比大涨 25.9%，个税「逆势高增」的原因是什么？](https://www.zhihu.com/question/2075163936920265000)
1. [为什么安踏前CEO徐阳在飞机上发朋友圈称因家人留学原因离职，将陪家人迁居美国洛杉矶？](https://www.zhihu.com/question/2074146079185159400)
1. [被停车难劝退：越来越宽的新能源车，我们是否需要一批车宽 1.7 米级的家用电车？](https://www.zhihu.com/question/2073378893222908400)
1. [19 岁公路车手塔林比赛中被逆行车辆撞击离世，有人呼吁头盔安全标准需修改，你认为车手保障如何真正提升？](https://www.zhihu.com/question/2073069693901063000)
1. [Agent目前最大的瓶颈是什么？](https://www.zhihu.com/question/1986872411988173800)
1. [四川巴中市公安局为 3999.577 万元资金寻找合法所有人，无人认领将上缴国库，哪些信息值得关注？](https://www.zhihu.com/question/2073023842335958500)
1. [社交平台看到一个妈妈说孩子学习才给开空调，不然就不开，大人陪孩子一起热，这是暑假，怎么看待这样的事件？](https://www.zhihu.com/question/2075065585021477400)
1. [特洛伊木马，看来愚蠢之极，有没有可能这其实是利用希腊的某种传统共识，就像吕蒙白衣渡江？](https://www.zhihu.com/question/2072548823835185700)
1. [我国没有必要建设8横8纵货运专用铁路网？](https://www.zhihu.com/question/1912881137451250400)
1. [如何解读特朗普所说“用美军解决美债”这句话？](https://www.zhihu.com/question/2075089345044801300)
1. [为啥地下党发报不把电台藏了马车或者黄包车上就发就转圈？](https://www.zhihu.com/question/759444244)
1. [如果你是王平，会如何反驳马谡上山扎营的鬼才，坚守街亭避免丢失？](https://www.zhihu.com/question/2042735255447196400)
1. [脑出血急诊去医院为什么几个小时不开始手术，最后我妈去世了，医院有没有责任？](https://www.zhihu.com/question/1905751114009272800)
1. [为什么高认知水平的人往往会感到痛苦？](https://www.zhihu.com/question/2026938736466751500)
1. [如何评价小米新一代自研处理器玄戒 O3？它的市场竞争力怎么样？](https://www.zhihu.com/question/2075236153524072400)
1. [请问有哪些简单的做饭方法？](https://www.zhihu.com/question/4895140663)
1. [如何看待「最近是全体教师最脆弱的时候」？开学前大家都干了啥，心情怎么样？](https://www.zhihu.com/question/2074826051096503300)
1. [如何看待Levent Alpoge发布的S^6的复结构构造的论文？](https://www.zhihu.com/question/2075142928394086100)
1. [「泔水喂猪」被正式写入禁令，用剩菜剩饭直接喂猪有什么影响？为何禁止？](https://www.zhihu.com/question/2073377322770744600)
1. [男子 20 年攒下 789 万，这种极致节俭的财富积累方式在当下还可行吗？](https://www.zhihu.com/question/2074609906632626400)
1. [医保局力推 158 个基层病种「同病同治同价」，患者就医层级越低，治疗成本越低，这能倒逼患者下基层吗？](https://www.zhihu.com/question/2072991416469427500)
1. [唐朝为什么管阿拉伯叫大食？](https://www.zhihu.com/question/2719324617)
1. [中世纪欧洲的农业发展真的比中国差很多吗？什么原因导致的？](https://www.zhihu.com/question/24428018)
1. [混动车型为何不提供手动切换油电模式的功能？](https://www.zhihu.com/question/2067019254009012700)
1. [小米玄戒芯片技术沟通会正式发布玄戒O3以及AI芯片O100、辅助驾驶芯片D100，这几颗芯片性能如何？](https://www.zhihu.com/question/2075226674963165200)
1. [天工机器人「娇羞捂脸跑」出圈，这一跑姿为何能夺冠？背后做了哪些技术优化？](https://www.zhihu.com/question/2074976072874177500)
1. [本次 15 分钟实机演示后，你预估《黑神话：钟馗》的销量是多少？](https://www.zhihu.com/question/2073853968980222500)
1. [怎么看待小米新一代玄戒芯片正式发布，玄戒O3、玄戒O100、玄戒D100？它到底强不强？](https://www.zhihu.com/question/2075239490063447300)
1. [为什么不听劝的厂商要比听劝的厂商活的更滋润，且更受用户追捧？](https://www.zhihu.com/question/2073977748108984600)
1. [上市公司被曝要求应届生离职与「打螺丝」二选一，是真的吗？公司行为属于变相劝退吗？应届生该如何维权？](https://www.zhihu.com/question/2074879549028950000)
1. [化学和化工的区别有哪些？](https://www.zhihu.com/question/582443869)
1. [有没有一种可能，驾驶飞机的真实难度，其实并不比驾驶汽车难很多，实际上还可能更简单？](https://www.zhihu.com/question/2074622254407750000)
1. [如何正视并排解自己的嫉妒心?](https://www.zhihu.com/question/2056160530688218000)
1. [公务员碾死醉汉被认定过失致死，当事人因影响职业生涯再申诉，还可能有怎样的认定？法律上如何分析此事？](https://www.zhihu.com/question/2074611538749551000)
1. [如何评价Team Spirit获得TI15冠军？](https://www.zhihu.com/question/2074973986706945800)
1. [如何看待宇树科技上市后，股价连续下跌？](https://www.zhihu.com/question/2075135835452790300)
1. [超强台风「沙德尔」已睁眼，可能登陆东南沿海，影响路径走向的因素是什么？有哪些信息值得关注？](https://www.zhihu.com/question/2073815515386964000)
1. [穆里尼奥向皇马全队提前透露首发，以此测试更衣室保密性，如何评价这种做法？](https://www.zhihu.com/question/2074860324029838300)
1. [项羽败给刘邦的主要原因是什么？](https://www.zhihu.com/question/842456523)
1. [《奥德赛》诺兰把荷马史诗经典「人变猪」名场面改成瑟茜徒手手搓变形，如何评价这处改编？算魔改吗？](https://www.zhihu.com/question/2071674920640013600)
1. [如果完全按照正史，三国志11中五子和五虎的五维应该是多少？](https://www.zhihu.com/question/2025167065779020800)
1. [研究生开学导师放养没人管该如何自救？](https://www.zhihu.com/question/2072105153453351400)
1. [上班遇到脾气暴躁的同事怎么办呢？](https://www.zhihu.com/question/2073200361981191400)
1. [玩原神至今，你用过最频繁、最离不开的角色是谁？](https://www.zhihu.com/question/2032417181066118400)
1. [为什么天蚕土豆小说套路相似却鲜有模仿者走红？](https://www.zhihu.com/question/2073425610509120000)
1. [李昊炎巴萨 U15 首秀梅开二度，如何评价他的表现？](https://www.zhihu.com/question/2074844179558037200)
1. [消杀公司长期用敌敌畏给餐馆消杀，员工无资质配药，其涉嫌违反了哪些法律法规？这给食客带来哪些健康隐患？](https://www.zhihu.com/question/2075139161644913000)
1. [美债问题这次美国还能用什么方法来解决？](https://www.zhihu.com/question/2074763056207356700)
1. [韩沛颖直播说刘浩存 14 岁就跟某某某导了，随后又发文向刘浩存道歉称「措辞欠妥」，发生了什么？](https://www.zhihu.com/question/2075122974533988600)
1. [如何评价《崩坏：星穹铁道》中的组织“星际和平公司”？](https://www.zhihu.com/question/627590459)
1. [为什么以色列不喜欢和平，偏偏喜欢打打杀杀？](https://www.zhihu.com/question/2025672675830317800)
1. [时隔9年口碑大反转，《我的前半生》2026年突然全网爆火，真正原因到底是什么？](https://www.zhihu.com/question/2072741297400686000)
1. [老人进店休息离世，店主帮扶被索赔 1.9 万，司法部门介入，相关部门提出补贴店家，如何评价该处理方式？](https://www.zhihu.com/question/2075176545971169000)
1. [如何评价第二届世界人形机器人运动会？哪些比赛最能检验机器人的真实水平？](https://www.zhihu.com/question/2074181028135097300)
1. [8月23日LCK常规赛收官站HLE 2:0 T1，如何评价这场比赛？](https://www.zhihu.com/question/2074925587341251600)
1. [U18男篮亚洲杯-中国U18男篮不敌澳大利亚获亚军，张懿赵杰20分，如何评价这场比赛？](https://www.zhihu.com/question/2075124343567402000)
1. [26/27赛季英超第一轮，利物浦点球绝平2-2战平纽卡斯尔联，如何评价这场比赛？](https://www.zhihu.com/question/2075047225298777600)
1. [可不可以莫名其妙地教我一个知识?](https://www.zhihu.com/question/2072260638768997400)
1. [中超能不能通过扩军、增加比赛场次来帮助中国足球进步？](https://www.zhihu.com/question/2041097054441759000)
1. [恒大人寿保险有限公司被吊销业务许可证，哪些信息值得关注？购买过相关保险产品的消费者该怎么办？](https://www.zhihu.com/question/2074190854218937300)
1. [警方通报「博主称小红书因遭举报上市失败」，造谣者已被行拘，其将承担哪些责任？此事对小红书影响有多大？](https://www.zhihu.com/question/2074915129171211500)
1. [作为新生代 shell 的代表，fish、nu、elvish、pwsh 各有什么优劣？](https://www.zhihu.com/question/2003224093797918200)
1. [如果有一本「地球友情图鉴」，你希望收录哪些友情故事？](https://www.zhihu.com/question/2073041250924458200)
1. [教育孩子到底应该严厉管教，还是尊重放养呢？](https://www.zhihu.com/question/2074374954251035400)
1. [如何理解发电机发出无功功率？](https://www.zhihu.com/question/595444296)
1. [美日德英法这些国家为什么没有户口制度？](https://www.zhihu.com/question/1939565638059262700)
1. [嫦娥七号任务不能在今年预定窗口实施，对我国探月工程有怎样的影响？](https://www.zhihu.com/question/2074956312891191300)
1. [为什么吉林大学实力很强投档线却很低?](https://www.zhihu.com/question/582884023)
1. [月子里两位老人共同照料爆发矛盾，母亲回了老家，夹在中间该怎么解决？](https://www.zhihu.com/question/2073435808497923600)
1. [克雷·汤普森放弃 980 万美元薪水加盟热火，此举对他意味着什么？](https://www.zhihu.com/question/2074784389553308400)
1. [天工队400米决赛以38.15秒夺得本届机器人运动会首金，前三名均打破人类世界纪录，怎样评价这一成绩？](https://www.zhihu.com/question/2074910401557427000)
1. [Anthropic 的 ARR 不及预期，OpenAI 比 A 社还差，AI 热潮要阶段性见顶了吗？](https://www.zhihu.com/question/2073353873687671000)
1. [如何看待德罗赞1年390万美元底薪加盟掘金，这对掘金有哪些帮助？](https://www.zhihu.com/question/2074457016211354000)
1. [大学生用几个月生活费攒钱买万元游戏本，是合理投资还是超前消费？](https://www.zhihu.com/question/2071569847452972500)
1. [如果你工作得很不开心，你会选择辞职吗？](https://www.zhihu.com/question/403736103)
1. [国铁回应为何不能像民航那样提供列车托管儿童服务，称不具备条件，有哪些好的解决办法？](https://www.zhihu.com/question/2074991459082528500)
1. [26/27赛季英超第一轮，曼城主场2-1逆转战胜伯恩茅斯，如何评价本场比赛？](https://www.zhihu.com/question/2075005049768513500)
1. [井上织姬为何突然有了抗衡有哈巴赫的实力，之前感觉没有这么强的？](https://www.zhihu.com/question/2070434163056981200)
1. [如何评价罗伯特·帕丁森在电影《奥德赛》中的表现？](https://www.zhihu.com/question/2073035053307619000)
1. [为什么叶文洁告诉罗辑黑暗森林法则呢？](https://www.zhihu.com/question/322882707)
1. [如何评价《崩坏：星穹铁道》千星纪游PV——「众声之外」？](https://www.zhihu.com/question/2074104142952511000)
1. [韩红基金会救护车采购陷争议，市场监管部门称供应商已被立案调查，哪些信息值得关注？](https://www.zhihu.com/question/2074921713666449700)
1. [梁伟铿/王昶 2-0 马来西亚组合，夺得世锦赛男双冠军，国羽打破 7 年冠军荒，如何评价本场比赛？](https://www.zhihu.com/question/2074978790678033400)
1. [四川宜宾长宁县发生4.7级地震，网友称此前收到 7.7 级地震预警，为何会有这么大偏差？当地情况如何？](https://www.zhihu.com/question/2075141730844636200)
1. [如何评价美国海军最新公开的 AIM-424“恶意”远程空空导弹？](https://www.zhihu.com/question/2074785102589072100)
1. [达利欧警告美国债务危机或三年内爆发，建议低配债券、配置黄金及少量比特币，如何看待这一观点？](https://www.zhihu.com/question/2074420099218514200)
1. [2026赛季F1荷兰大奖赛，诺里斯夺冠，安东内利和拉塞尔分列二三位，如何评价本场比赛？](https://www.zhihu.com/question/2074996973665514200)
1. [鹰角《终末地》限定池增设大保底继承，但仅限复刻同角色，这机制对玩家是利是弊？](https://www.zhihu.com/question/2074516507300716800)
1. [电视剧《甄嬛传》中，温实初那么好，为什么甄嬛就是不爱？](https://www.zhihu.com/question/592485491)
1. [睡眠不足会让一个人变得更懒吗？](https://www.zhihu.com/question/2069144593451505000)
1. [古代士兵中箭后没有消炎药，伤口感染了还能扛过去吗？](https://www.zhihu.com/question/2062593631098343700)
1. [2026 年 CNDota 首次无缘 TI 正赛，对中国电竞意味着什么？](https://www.zhihu.com/question/2072424952653993500)
1. [顺丰被指变相降薪，将月薪 15% 作为季度绩效奖金发放，严查着装禁上班时间拿咖啡，这是发生啥了？](https://www.zhihu.com/question/2074551800313508000)
1. [如何评价南信大团队在《Science》上发文「中国太阳能扩张政策导致鸟类生物多样性下降」？](https://www.zhihu.com/question/2074259711533266700)
1. [LPL2026赛季第三赛段组内赛BLG 2:1 AL，如何评价这场比赛？](https://www.zhihu.com/question/2074949307891971600)
1. [郭德纲被立案调查，三场演出延期，会对其演艺事业产生哪些影响？](https://www.zhihu.com/question/2073858330158700000)
1. [如何评价《死神BLEACH》中的井上织姬？](https://www.zhihu.com/question/433523018)
1. [小说开头怎样写才能更抓人？](https://www.zhihu.com/question/2074461200763581700)
1. [现在哪个行业还是蓝海？](https://www.zhihu.com/question/662437470)
1. [银行员工称考核压力大自己买 1 万，基层员工「自费上班」抗 KPI 合理吗？银行业务目前面临什么困境？](https://www.zhihu.com/question/2074064812326090200)
1. [如何评价电影《空枪》？](https://www.zhihu.com/question/2073201228046132500)
1. [宇树机器人100米预赛小组垫底，同组第一名100米9秒39打破人类纪录，如何本场比赛各家机器人表现？](https://www.zhihu.com/question/2074793323445711000)
1. [古人是否真的没有肉可以吃？](https://www.zhihu.com/question/34020226)
1. [嫦娥七号任务不满足发射条件，不能在今年预定窗口实施，原因可能有哪些？嫦娥七号原定将完成哪些主要任务？](https://www.zhihu.com/question/2072730203407606000)
1. [为什么很多人仍然想去日本旅游？](https://www.zhihu.com/question/2073815880522323000)
1. [TI15决赛 Spirit 3:2 击败 VISION 夺得队史第三座 TI 冠军，如何评价本场比赛？](https://www.zhihu.com/question/2074784919734183400)
1. [为什么我们看作品里的生死之交会热泪盈眶，现实中却越来越习惯「浅社交」？](https://www.zhihu.com/question/2073826158685025800)
1. [中国足协通报「没有证据表明韩国足协对中国足协相关人士提供过『不当招待』行为」，哪些信息值得关注？](https://www.zhihu.com/question/2074937582048081400)
1. [8 月鸡蛋价格差不多涨了七八毛，受哪些因素影响？还会持续上涨吗？](https://www.zhihu.com/question/2074886362625304300)
1. [美加贸易谈判最后时刻破裂，美国将加征 50% 关税，加拿大将对美实施对等关税，将产生哪些影响？](https://www.zhihu.com/question/2074490542076052200)
1. [如何评价克莱·汤普森2年1300万签约热火，第二年球员选项？](https://www.zhihu.com/question/2074416669053686000)
1. [著名战地记者唐师曾逝世，享年 65 岁，你对他有哪些记忆？](https://www.zhihu.com/question/2074907888091411000)
1. [做菜不好吃咋办?](https://www.zhihu.com/question/1946640318888940500)
1. [每隔3~5公里设置自然弯道是高速公路设计的常识，但是为啥我们经常看到美国国家公路直的像到天堂一样？](https://www.zhihu.com/question/37162221)
1. [反复观摩《教父》真的能让一个男人更成熟通透吗？](https://www.zhihu.com/question/660307217)
1. [北大报到日校园内满是「扛床垫的爸」，如何看待这个现象？大学新生入学，家长应该帮到何种程度？](https://www.zhihu.com/question/2073677302911842000)
1. [1.58 万元的问界儿童车预售，车企为什么要给小孩「造车」？能将带娃家庭转化成潜在客户吗？](https://www.zhihu.com/question/2074210850559244000)
1. [孕妇产检时误服含甲醇有毒液体，服药前两次向医生确认，当地卫健委已介入，哪些信息值得关注？](https://www.zhihu.com/question/2073817492271772400)
1. [《重器》中，余高远娶瘸腿的方好好，是真爱吗？](https://www.zhihu.com/question/2072694618097980200)
1. [如何评价电视剧《重器》的大结局？](https://www.zhihu.com/question/2074621563912066000)
1. [如何有效提高自己的执行力？](https://www.zhihu.com/question/2868850861)
1. [如何评价《凡人修仙传》动画188集，黄龙山大战正式开始，但在线人数却依旧下跌，才十万左右？你怎么看？](https://www.zhihu.com/question/2074457746506892300)
1. [怎样有效减少荤菜中的腥味？](https://www.zhihu.com/question/62034453)
1. [以现代标准全面重启的《命运石之门：RE》现已问世，如何评价这个全新的“老游戏”？](https://www.zhihu.com/question/2073822936230905900)
1. [如何看待想去互联网大厂工作但又担心工作压力大的心态？（硕士）?](https://www.zhihu.com/question/408533485)
1. [有什么有趣的中国文化溢出？](https://www.zhihu.com/question/266630139)
1. [阿里巴巴拟配售 800 亿港元新股，全部投入 AI 建设，怎样解读这一操作？对市场有哪些影响？](https://www.zhihu.com/question/2074867306811881200)
1. [日本本州岛 5.8 级地震已致多人受伤，目前情况如何？](https://www.zhihu.com/question/2074763659239059700)
1. [为什么失速基本都存在于插电混动车型(如DMi、EMi)，而不存在于油电混动车型(如THS、iMMD)？](https://www.zhihu.com/question/1903878268400141300)
1. [TI15 决赛 Spirit 夺冠，Yatoro、Collapse 成历史三冠王，如何评价他俩的地位？](https://www.zhihu.com/question/2074905159797302500)
1. [数学上多有天赋才能轻松破解黎曼猜想等数学猜想？](https://www.zhihu.com/question/4680780194)
1. [乐山大佛景区有男子将松鼠踩死，游客称其是工作人员并言「松鼠是害虫」，如何看待这一行为？](https://www.zhihu.com/question/2074564481695344000)

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
<!-- 最后更新时间 Tue Aug 25 2026 00:00:52 GMT+0800 (China Standard Time) -->

1. [树立和践行正确政绩观是一项长期任务](https://s.weibo.com//weibo?q=%23%E6%A0%91%E7%AB%8B%E5%92%8C%E8%B7%B5%E8%A1%8C%E6%AD%A3%E7%A1%AE%E6%94%BF%E7%BB%A9%E8%A7%82%E6%98%AF%E4%B8%80%E9%A1%B9%E9%95%BF%E6%9C%9F%E4%BB%BB%E5%8A%A1%23&Refer=new_time)
1. [官方确认帮扶老人遭索赔店主不担责](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E7%A1%AE%E8%AE%A4%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%E4%B8%8D%E6%8B%85%E8%B4%A3%23&t=31&band_rank=1&Refer=top)
1. [千万不要再美化种地生活了](https://s.weibo.com//weibo?q=%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%86%8D%E7%BE%8E%E5%8C%96%E7%A7%8D%E5%9C%B0%E7%94%9F%E6%B4%BB%E4%BA%86&t=31&band_rank=2&Refer=top)
1. [中国智造这样点亮未来](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%99%BA%E9%80%A0%E8%BF%99%E6%A0%B7%E7%82%B9%E4%BA%AE%E6%9C%AA%E6%9D%A5%23&t=31&band_rank=3&Refer=top)
1. [中国女子泰国遭绑警方抓捕视频曝光](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E6%B3%B0%E5%9B%BD%E9%81%AD%E7%BB%91%E8%AD%A6%E6%96%B9%E6%8A%93%E6%8D%95%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23&t=31&band_rank=4&Refer=top)
1. [央视网评湖南扶老人被索赔事件](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E8%AF%84%E6%B9%96%E5%8D%97%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%94%E4%BA%8B%E4%BB%B6%23&t=31&band_rank=5&Refer=top)
1. [网友外卖里吃出手机](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E5%A4%96%E5%8D%96%E9%87%8C%E5%90%83%E5%87%BA%E6%89%8B%E6%9C%BA&t=31&band_rank=6&Refer=top)
1. [遭索赔女店主发声](https://s.weibo.com//weibo?q=%23%E9%81%AD%E7%B4%A2%E8%B5%94%E5%A5%B3%E5%BA%97%E4%B8%BB%E5%8F%91%E5%A3%B0%23&t=31&band_rank=7&Refer=top)
1. [现货黄金](https://s.weibo.com//weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23&t=31&band_rank=8&Refer=top)
1. [王菲不承认沈凌模仿的自己](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%8F%B2%E4%B8%8D%E6%89%BF%E8%AE%A4%E6%B2%88%E5%87%8C%E6%A8%A1%E4%BB%BF%E7%9A%84%E8%87%AA%E5%B7%B1%23&t=31&band_rank=9&Refer=top)
1. [正午阳光疑似辟谣虞书欣出演](https://s.weibo.com//weibo?q=%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E7%96%91%E4%BC%BC%E8%BE%9F%E8%B0%A3%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%87%BA%E6%BC%94&t=31&band_rank=10&Refer=top)
1. [湖北长阳通报韩红基金会救护车](https://s.weibo.com//weibo?q=%23%E6%B9%96%E5%8C%97%E9%95%BF%E9%98%B3%E9%80%9A%E6%8A%A5%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%95%91%E6%8A%A4%E8%BD%A6%23&t=31&band_rank=11&Refer=top)
1. [李金铭娄艺潇邓家佳合体](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%A8%84%E8%89%BA%E6%BD%87%E9%82%93%E5%AE%B6%E4%BD%B3%E5%90%88%E4%BD%93%23&t=31&band_rank=12&Refer=top)
1. [张子枫进入最佳赏味期](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E8%BF%9B%E5%85%A5%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%23&t=31&band_rank=13&Refer=top)
1. [郭二娃死刑](https://s.weibo.com//weibo?q=%23%E9%83%AD%E4%BA%8C%E5%A8%83%E6%AD%BB%E5%88%91%23&t=31&band_rank=14&Refer=top)
1. [以为练普拉提很体面](https://s.weibo.com//weibo?q=%E4%BB%A5%E4%B8%BA%E7%BB%83%E6%99%AE%E6%8B%89%E6%8F%90%E5%BE%88%E4%BD%93%E9%9D%A2&t=31&band_rank=15&Refer=top)
1. [王楚然九寨沟plog](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B9%9D%E5%AF%A8%E6%B2%9Fplog%23&t=31&band_rank=16&Refer=top)
1. [爱情公寓聚会](https://s.weibo.com//weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E8%81%9A%E4%BC%9A%23&t=31&band_rank=17&Refer=top)
1. [目击者回应店主扶老人遭索赔](https://s.weibo.com//weibo?q=%23%E7%9B%AE%E5%87%BB%E8%80%85%E5%9B%9E%E5%BA%94%E5%BA%97%E4%B8%BB%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%23&t=31&band_rank=18&Refer=top)
1. [BLACKPINK成员新歌发行时间](https://s.weibo.com//weibo?q=%23BLACKPINK%E6%88%90%E5%91%98%E6%96%B0%E6%AD%8C%E5%8F%91%E8%A1%8C%E6%97%B6%E9%97%B4%23&t=31&band_rank=19&Refer=top)
1. [AI眼镜成为隐私重灾区](https://s.weibo.com//weibo?q=%23AI%E7%9C%BC%E9%95%9C%E6%88%90%E4%B8%BA%E9%9A%90%E7%A7%81%E9%87%8D%E7%81%BE%E5%8C%BA%23&t=31&band_rank=20&Refer=top)
1. [香港双尸案凶器被弃公共垃圾桶](https://s.weibo.com//weibo?q=%23%E9%A6%99%E6%B8%AF%E5%8F%8C%E5%B0%B8%E6%A1%88%E5%87%B6%E5%99%A8%E8%A2%AB%E5%BC%83%E5%85%AC%E5%85%B1%E5%9E%83%E5%9C%BE%E6%A1%B6%23&t=31&band_rank=21&Refer=top)
1. [秦牛正威大变样](https://s.weibo.com//weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E5%A4%A7%E5%8F%98%E6%A0%B7%23&t=31&band_rank=22&Refer=top)
1. [向佐说要逼我营业吗](https://s.weibo.com//weibo?q=%23%E5%90%91%E4%BD%90%E8%AF%B4%E8%A6%81%E9%80%BC%E6%88%91%E8%90%A5%E4%B8%9A%E5%90%97%23&t=31&band_rank=23&Refer=top)
1. [KSG 无畏](https://s.weibo.com//weibo?q=KSG%20%E6%97%A0%E7%95%8F&t=31&band_rank=24&Refer=top)
1. [婚礼第二天新娘指纹被爸爸删掉](https://s.weibo.com//weibo?q=%23%E5%A9%9A%E7%A4%BC%E7%AC%AC%E4%BA%8C%E5%A4%A9%E6%96%B0%E5%A8%98%E6%8C%87%E7%BA%B9%E8%A2%AB%E7%88%B8%E7%88%B8%E5%88%A0%E6%8E%89%23&t=31&band_rank=25&Refer=top)
1. [杜锋将出任广东宏远总教练](https://s.weibo.com//weibo?q=%23%E6%9D%9C%E9%94%8B%E5%B0%86%E5%87%BA%E4%BB%BB%E5%B9%BF%E4%B8%9C%E5%AE%8F%E8%BF%9C%E6%80%BB%E6%95%99%E7%BB%83%23&t=31&band_rank=26&Refer=top)
1. [儿子像妈女儿像爸的真相](https://s.weibo.com//weibo?q=%23%E5%84%BF%E5%AD%90%E5%83%8F%E5%A6%88%E5%A5%B3%E5%84%BF%E5%83%8F%E7%88%B8%E7%9A%84%E7%9C%9F%E7%9B%B8%23&t=31&band_rank=27&Refer=top)
1. [TFING晒黄朔18岁合照](https://s.weibo.com//weibo?q=%23TFING%E6%99%92%E9%BB%84%E6%9C%9418%E5%B2%81%E5%90%88%E7%85%A7%23&t=31&band_rank=28&Refer=top)
1. [王楚然现发4跳舞路透](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%8E%B0%E5%8F%914%E8%B7%B3%E8%88%9E%E8%B7%AF%E9%80%8F%23&t=31&band_rank=29&Refer=top)
1. [王一博告了新湃传媒](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%91%8A%E4%BA%86%E6%96%B0%E6%B9%83%E4%BC%A0%E5%AA%92&t=31&band_rank=30&Refer=top)
1. [郑钦文vs尤晓迪](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%B0%A4%E6%99%93%E8%BF%AA%23&t=31&band_rank=31&Refer=top)
1. [严浩翔大漏勺](https://s.weibo.com//weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%A4%A7%E6%BC%8F%E5%8B%BA%23&t=31&band_rank=32&Refer=top)
1. [家长单手抱婴儿致孩子后仰后脑勺着地](https://s.weibo.com//weibo?q=%23%E5%AE%B6%E9%95%BF%E5%8D%95%E6%89%8B%E6%8A%B1%E5%A9%B4%E5%84%BF%E8%87%B4%E5%AD%A9%E5%AD%90%E5%90%8E%E4%BB%B0%E5%90%8E%E8%84%91%E5%8B%BA%E7%9D%80%E5%9C%B0%23&t=31&band_rank=33&Refer=top)
1. [郭二娃报复举报人致其死亡](https://s.weibo.com//weibo?q=%23%E9%83%AD%E4%BA%8C%E5%A8%83%E6%8A%A5%E5%A4%8D%E4%B8%BE%E6%8A%A5%E4%BA%BA%E8%87%B4%E5%85%B6%E6%AD%BB%E4%BA%A1%23&t=31&band_rank=34&Refer=top)
1. [金晨回国后首秀](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%A8%E5%9B%9E%E5%9B%BD%E5%90%8E%E9%A6%96%E7%A7%80%23&t=31&band_rank=35&Refer=top)
1. [阚清子38岁素颜状态](https://s.weibo.com//weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%9038%E5%B2%81%E7%B4%A0%E9%A2%9C%E7%8A%B6%E6%80%81%23&t=31&band_rank=36&Refer=top)
1. [电力工人高空作业疑似摆拍](https://s.weibo.com//weibo?q=%E7%94%B5%E5%8A%9B%E5%B7%A5%E4%BA%BA%E9%AB%98%E7%A9%BA%E4%BD%9C%E4%B8%9A%E7%96%91%E4%BC%BC%E6%91%86%E6%8B%8D&t=31&band_rank=37&Refer=top)
1. [90后女演员CVB](https://s.weibo.com//weibo?q=%2390%E5%90%8E%E5%A5%B3%E6%BC%94%E5%91%98CVB%23&t=31&band_rank=38&Refer=top)
1. [颜安去给王橹杰化妆吧](https://s.weibo.com//weibo?q=%23%E9%A2%9C%E5%AE%89%E5%8E%BB%E7%BB%99%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%8C%96%E5%A6%86%E5%90%A7%23&t=31&band_rank=39&Refer=top)
1. [日本学校午餐](https://s.weibo.com//weibo?q=%E6%97%A5%E6%9C%AC%E5%AD%A6%E6%A0%A1%E5%8D%88%E9%A4%90&t=31&band_rank=40&Refer=top)
1. [爱在无尽夏 男主妆造](https://s.weibo.com//weibo?q=%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%20%E7%94%B7%E4%B8%BB%E5%A6%86%E9%80%A0&t=31&band_rank=41&Refer=top)
1. [李现关晓彤 重启心跳](https://s.weibo.com//weibo?q=%E6%9D%8E%E7%8E%B0%E5%85%B3%E6%99%93%E5%BD%A4%20%E9%87%8D%E5%90%AF%E5%BF%83%E8%B7%B3&t=31&band_rank=42&Refer=top)
1. [发现高精力和高体力是两种人群](https://s.weibo.com//weibo?q=%23%E5%8F%91%E7%8E%B0%E9%AB%98%E7%B2%BE%E5%8A%9B%E5%92%8C%E9%AB%98%E4%BD%93%E5%8A%9B%E6%98%AF%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%BE%A4%23&t=31&band_rank=43&Refer=top)
1. [时代少年团2026青春芒果夜](https://s.weibo.com//weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A22026%E9%9D%92%E6%98%A5%E8%8A%92%E6%9E%9C%E5%A4%9C%23&t=31&band_rank=44&Refer=top)
1. [IU去看BIGBANG演唱会](https://s.weibo.com//weibo?q=%23IU%E5%8E%BB%E7%9C%8BBIGBANG%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=45&Refer=top)
1. [硕士被安排打螺丝300人被迫离职](https://s.weibo.com//weibo?q=%23%E7%A1%95%E5%A3%AB%E8%A2%AB%E5%AE%89%E6%8E%92%E6%89%93%E8%9E%BA%E4%B8%9D300%E4%BA%BA%E8%A2%AB%E8%BF%AB%E7%A6%BB%E8%81%8C%23&t=31&band_rank=46&Refer=top)
1. [何猷君晒与C罗合照](https://s.weibo.com//weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E6%99%92%E4%B8%8EC%E7%BD%97%E5%90%88%E7%85%A7%23&t=31&band_rank=47&Refer=top)
1. [肖战已经上交国家队了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%B7%B2%E7%BB%8F%E4%B8%8A%E4%BA%A4%E5%9B%BD%E5%AE%B6%E9%98%9F%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [雷军晒小米人形机器人实拍图](https://s.weibo.com//weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%92%E5%B0%8F%E7%B1%B3%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AE%9E%E6%8B%8D%E5%9B%BE%23&t=31&band_rank=49&Refer=top)
1. [中国队女排亚锦赛两连胜](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%A5%B3%E6%8E%92%E4%BA%9A%E9%94%A6%E8%B5%9B%E4%B8%A4%E8%BF%9E%E8%83%9C%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
