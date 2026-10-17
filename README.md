# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-18 06:21:10

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
<!-- 最后更新时间 Sun Oct 18 2026 03:41:17 GMT+0800 (China Standard Time) -->

1. [黄奇帆被查 中纪委官网重磅发文](https://so.toutiao.com/search?keyword=黄奇帆被查%20中纪委官网重磅发文)
1. [国家出手 养老账单要变了](https://so.toutiao.com/search?keyword=国家出手%20养老账单要变了)
1. [它们共同的名字叫“长征”](https://so.toutiao.com/search?keyword=它们共同的名字叫“长征”)
1. [总统“准儿媳”性骚扰财务丑闻连出](https://so.toutiao.com/search?keyword=总统“准儿媳”性骚扰财务丑闻连出)
1. [夫妻买2块劳力士不选不试戴 店员报警](https://so.toutiao.com/search?keyword=夫妻买2块劳力士不选不试戴%20店员报警)
1. [银行又开始抢长期存款了](https://so.toutiao.com/search?keyword=银行又开始抢长期存款了)
1. [高市为何把参加APEC峰会门槛推给国会](https://so.toutiao.com/search?keyword=高市为何把参加APEC峰会门槛推给国会)
1. [专家：今冬我国大部大概率是暖冬](https://so.toutiao.com/search?keyword=专家：今冬我国大部大概率是暖冬)
1. [妈妈将大一儿子生活费从4000降至2000](https://so.toutiao.com/search?keyword=妈妈将大一儿子生活费从4000降至2000)
1. [英国为何拒绝对中国电动车加关税](https://so.toutiao.com/search?keyword=英国为何拒绝对中国电动车加关税)
1. [新疆喀什要投资5000万新建景区？假](https://so.toutiao.com/search?keyword=新疆喀什要投资5000万新建景区？假)
1. [教师不愿当班主任困局怎么破](https://so.toutiao.com/search?keyword=教师不愿当班主任困局怎么破)
1. [多少岁才算老人家](https://so.toutiao.com/search?keyword=多少岁才算老人家)
1. [徐艺洋：孩子是自己生的 已经2岁多](https://so.toutiao.com/search?keyword=徐艺洋：孩子是自己生的%20已经2岁多)
1. [李云霄病愈后首次公开露面](https://so.toutiao.com/search?keyword=李云霄病愈后首次公开露面)
1. [英伟达市值9天蒸发4万亿元](https://so.toutiao.com/search?keyword=英伟达市值9天蒸发4万亿元)
1. [深圳一天内报名停驶私家车人数超12万](https://so.toutiao.com/search?keyword=深圳一天内报名停驶私家车人数超12万)
1. [直击西安阿达西烤馕现场](https://so.toutiao.com/search?keyword=直击西安阿达西烤馕现场)
1. [四名男子在村里擅自采砂土筛金获刑](https://so.toutiao.com/search?keyword=四名男子在村里擅自采砂土筛金获刑)
1. [评论员：中方南海维权或迎重要转变](https://so.toutiao.com/search?keyword=评论员：中方南海维权或迎重要转变)
1. [货轮沉没大量iPhone漂浮海面](https://so.toutiao.com/search?keyword=货轮沉没大量iPhone漂浮海面)
1. [乡政府拖欠工程款5000万称无力偿还](https://so.toutiao.com/search?keyword=乡政府拖欠工程款5000万称无力偿还)
1. [有人一口气买3部iPhone Duo准备卖掉](https://so.toutiao.com/search?keyword=有人一口气买3部iPhone%20Duo准备卖掉)
1. [长鑫科技前三季度净利最高可至1325亿](https://so.toutiao.com/search?keyword=长鑫科技前三季度净利最高可至1325亿)
1. [普京颁布法令接管四家外企在俄资产](https://so.toutiao.com/search?keyword=普京颁布法令接管四家外企在俄资产)
1. [“最强”厄尔尼诺意味什么](https://so.toutiao.com/search?keyword=“最强”厄尔尼诺意味什么)
1. [张雪将冲击摩托车冲浪吉尼斯纪录](https://so.toutiao.com/search?keyword=张雪将冲击摩托车冲浪吉尼斯纪录)
1. [俄军给无人机加铁丝变成电塔杀手](https://so.toutiao.com/search?keyword=俄军给无人机加铁丝变成电塔杀手)
1. [警方追查出1400余张加油机作弊主板](https://so.toutiao.com/search?keyword=警方追查出1400余张加油机作弊主板)
1. [沈伯洋父亲公司换名从大陆谋利](https://so.toutiao.com/search?keyword=沈伯洋父亲公司换名从大陆谋利)
1. [《醉梦》会成为国产悬疑剧精品吗](https://so.toutiao.com/search?keyword=《醉梦》会成为国产悬疑剧精品吗)
1. [胖东来把工地干成了艺术品](https://so.toutiao.com/search?keyword=胖东来把工地干成了艺术品)
1. [男子为女友母亲养老送终获500万遗产](https://so.toutiao.com/search?keyword=男子为女友母亲养老送终获500万遗产)
1. [美航母打击群与无人水面艇一同出航](https://so.toutiao.com/search?keyword=美航母打击群与无人水面艇一同出航)
1. [存储高景气拐点真的要验证了](https://so.toutiao.com/search?keyword=存储高景气拐点真的要验证了)
1. [“重阳”的由来](https://so.toutiao.com/search?keyword=“重阳”的由来)
1. [泽连斯基称乌美最快下周举行会谈](https://so.toutiao.com/search?keyword=泽连斯基称乌美最快下周举行会谈)
1. [中纪委：只要搞腐败就没所谓平安着陆](https://so.toutiao.com/search?keyword=中纪委：只要搞腐败就没所谓平安着陆)
1. [四川男篮结束47连败 时隔580天再赢球](https://so.toutiao.com/search?keyword=四川男篮结束47连败%20时隔580天再赢球)
1. [郑丽文宣布启动大型造势](https://so.toutiao.com/search?keyword=郑丽文宣布启动大型造势)
1. [博主：红海危机再升级](https://so.toutiao.com/search?keyword=博主：红海危机再升级)
1. [DeepSeek新模型登场](https://so.toutiao.com/search?keyword=DeepSeek新模型登场)
1. [名记：76人与两人签下Exhibit 10合同](https://so.toutiao.com/search?keyword=名记：76人与两人签下Exhibit%2010合同)
1. [花30万闪婚遇骗案男方发声](https://so.toutiao.com/search?keyword=花30万闪婚遇骗案男方发声)
1. [日美将举行大规模联合军演](https://so.toutiao.com/search?keyword=日美将举行大规模联合军演)
1. [78家加油站“偷油”被查](https://so.toutiao.com/search?keyword=78家加油站“偷油”被查)
1. [长鑫科技董事长提议回购公司股份](https://so.toutiao.com/search?keyword=长鑫科技董事长提议回购公司股份)
1. [美股AI巨头还能撑多久](https://so.toutiao.com/search?keyword=美股AI巨头还能撑多久)
1. [沙特和以色列会共同针对胡塞吗](https://so.toutiao.com/search?keyword=沙特和以色列会共同针对胡塞吗)
1. [中国草原跑出算力黑马](https://so.toutiao.com/search?keyword=中国草原跑出算力黑马)
1. [评论员：美国不会为菲律宾出头](https://so.toutiao.com/search?keyword=评论员：美国不会为菲律宾出头)
1. [山西的重阳有何不同](https://so.toutiao.com/search?keyword=山西的重阳有何不同)
1. [特斯拉高管详解新Roadster](https://so.toutiao.com/search?keyword=特斯拉高管详解新Roadster)
1. [特朗普前“准儿媳”为何被迫离任](https://so.toutiao.com/search?keyword=特朗普前“准儿媳”为何被迫离任)
1. [星盾如何锁死乌克兰前线无人机](https://so.toutiao.com/search?keyword=星盾如何锁死乌克兰前线无人机)
1. [张雪机车收官战首回合获第10名](https://so.toutiao.com/search?keyword=张雪机车收官战首回合获第10名)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Oct 18 2026 06:15:01 GMT+0800 (China Standard Time) -->

1. [四部门组织30余家车企座谈](https://www.zhihu.com/search?q=%E5%9B%9B%E9%83%A8%E9%97%A8%E7%BB%84%E7%BB%8730%E4%BD%99%E5%AE%B6%E8%BD%A6%E4%BC%81%E5%BA%A7%E8%B0%88)
1. [特斯拉SpaceX大跌](https://www.zhihu.com/search?q=%E7%89%B9%E6%96%AF%E6%8B%89SpaceX%E5%A4%A7%E8%B7%8C)
1. [黄子韬徐艺洋宣布当爸妈](https://www.zhihu.com/search?q=%E9%BB%84%E5%AD%90%E9%9F%AC%E5%BE%90%E8%89%BA%E6%B4%8B%E5%AE%A3%E5%B8%83%E5%BD%93%E7%88%B8%E5%A6%88)
1. [自愿放弃社保无效](https://www.zhihu.com/search?q=%E8%87%AA%E6%84%BF%E6%94%BE%E5%BC%83%E7%A4%BE%E4%BF%9D%E6%97%A0%E6%95%88)
1. [蔡天凤失踪前曾致电多人](https://www.zhihu.com/search?q=%E8%94%A1%E5%A4%A9%E5%87%A4%E5%A4%B1%E8%B8%AA%E5%89%8D%E6%9B%BE%E8%87%B4%E7%94%B5%E5%A4%9A%E4%BA%BA)
1. [2人涉嫌操纵机器人猥亵并直播](https://www.zhihu.com/search?q=2%E4%BA%BA%E6%B6%89%E5%AB%8C%E6%93%8D%E7%BA%B5%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%8C%A5%E4%BA%B5%E5%B9%B6%E7%9B%B4%E6%92%AD)
1. [三部门调查尊界刹车踏板支架断裂问题](https://www.zhihu.com/search?q=%E4%B8%89%E9%83%A8%E9%97%A8%E8%B0%83%E6%9F%A5%E5%B0%8A%E7%95%8C%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82%E9%97%AE%E9%A2%98)
1. [防癌神药出厂价不到1块钱](https://www.zhihu.com/search?q=%E9%98%B2%E7%99%8C%E7%A5%9E%E8%8D%AF%E5%87%BA%E5%8E%82%E4%BB%B7%E4%B8%8D%E5%88%B01%E5%9D%97%E9%92%B1)
1. [DeepSeek V4.1 Flash 发布新版本](https://www.zhihu.com/search?q=DeepSeek%20V4.1%20Flash%20%E5%8F%91%E5%B8%83%E6%96%B0%E7%89%88%E6%9C%AC)
1. [女子持龙凤胎基因起诉已婚董事长](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E6%8C%81%E9%BE%99%E5%87%A4%E8%83%8E%E5%9F%BA%E5%9B%A0%E8%B5%B7%E8%AF%89%E5%B7%B2%E5%A9%9A%E8%91%A3%E4%BA%8B%E9%95%BF)
1. [男子出狱后发现50余万仅剩6.43元](https://www.zhihu.com/search?q=%E7%94%B7%E5%AD%90%E5%87%BA%E7%8B%B1%E5%90%8E%E5%8F%91%E7%8E%B050%E4%BD%99%E4%B8%87%E4%BB%85%E5%89%A96.43%E5%85%83)
1. [夫妻买劳力士不挑选店员报警](https://www.zhihu.com/search?q=%E5%A4%AB%E5%A6%BB%E4%B9%B0%E5%8A%B3%E5%8A%9B%E5%A3%AB%E4%B8%8D%E6%8C%91%E9%80%89%E5%BA%97%E5%91%98%E6%8A%A5%E8%AD%A6)
1. [智界将获独立造车资质](https://www.zhihu.com/search?q=%E6%99%BA%E7%95%8C%E5%B0%86%E8%8E%B7%E7%8B%AC%E7%AB%8B%E9%80%A0%E8%BD%A6%E8%B5%84%E8%B4%A8)
1. [美国肯德基将改用可口可乐](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%B0%86%E6%94%B9%E7%94%A8%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Oct 18 2026 06:21:10 GMT+0800 (China Standard Time) -->

1. [如何评价DeepSeek V4.1 Flash 1017?](https://www.zhihu.com/question/2094773240036061700)
1. [英伟达市值 9 天蒸发约 4 万亿元，全球 AI 股集体遭抛售，AI 泡沫是不是要破了？](https://www.zhihu.com/question/2094715615177085400)
1. [智界将获独立造车资质，内部人士确认公司计划上市，获独立造车资质意味着什么？对华为和奇瑞有怎样的影响？](https://www.zhihu.com/question/2094856257873995000)
1. [社保新规11月1日起施行，明确自愿放弃社保无效，怎样解读？企业未足额缴纳社保，员工权益会受到哪些损害？](https://www.zhihu.com/question/2094785686142558500)
1. [网传世界杯一战封神的佛得角40岁门将沃齐尼亚被俱乐部弃用，疑似要提前退役，原因是什么？](https://www.zhihu.com/question/2094399559841726700)
1. [为什么感觉一代教父对任何事情云淡风轻，总可以拿捏很好，但二代教父感觉过的很艰难？](https://www.zhihu.com/question/468869175)
1. [做了鸡翅，孩子想多吃一个发现没有了，看到表弟碗里堆积几个，二宝看了一眼之后默默吃饭，你会怎么处理？](https://www.zhihu.com/question/2080368472178030300)
1. [班主任休产假遭家长投诉质问「一定要生孩子吗」，教师称举报信数量激增，如何看待近几年兴起的校园投诉潮？](https://www.zhihu.com/question/2094730049790465000)
1. [如何评价《海贼王》第1196话？](https://www.zhihu.com/question/2093508000262768400)
1. [一小男孩被曝衣衫不整跟随母亲游荡，官方称孩子母亲多次拒绝救助，具体是什么情况？](https://www.zhihu.com/question/2094122392523990300)
1. [多家银行上调存款利率，五年期定存高至 2.1%，怎样看待这一变化？还会持续上调吗？](https://www.zhihu.com/question/2094509189456295400)
1. [怎么评价高三学生陈妤颉在近期访谈中提到的“最好不出省不出市”的高考目标？](https://www.zhihu.com/question/2093673328301159700)
1. [央视三国演义，为什么会安排一个徐晃被颜良斩杀的桥段，不觉得诡异吗？](https://www.zhihu.com/question/2003781433475503600)
1. [为什么现在的医院，办理住院就不让回家了？](https://www.zhihu.com/question/2091040583896848100)
1. [如何评价外媒评 S16 参赛选手 Chovy 第一，Knight 第七，Faker 第十四？](https://www.zhihu.com/question/2094479040576843800)
1. [中建七局拖欠118名农民工合计320万工资，为何这些大企业也会拖欠工资？相关负责人可能会面临哪些处罚？](https://www.zhihu.com/question/2094335476488300300)
1. [“懒得管人”的领导，为什么团队执行力反而更强？](https://www.zhihu.com/question/2071344922704327200)
1. [科学家吴军辞去美终身教职回国加盟西湖大学，这一选择背后有哪些考量？](https://www.zhihu.com/question/2094379625816256800)
1. [为什么现在很多人宁可把钱放在银行账户上，也不愿意拿出来消费?再多的钱不拿出来消费，只是一个数字？](https://www.zhihu.com/question/2092898954484754000)
1. [女子生下龙凤胎起诉已婚董事长望其承担养育责任，男方质疑其通过人工试管受孕，有哪些疑点待厘清？](https://www.zhihu.com/question/2094717252792578300)
1. [以小龙女的外貌，她有很多选择，为什么最后是杨过？](https://www.zhihu.com/question/576351021)
1. [华中科技大学女篮与武汉盛帆女篮爆发大规模冲突，华科主帅追打对方球员，具体情况如何？将面临什么处罚？](https://www.zhihu.com/question/2094458019136410600)
1. [Roadster 发布后，特斯拉、SpaceX 仍在大跌，马斯克身家四天缩水5286亿元，如何解读？](https://www.zhihu.com/question/2094694840407519200)
1. [为什么冰箱的冷藏室有灯，但冷冻室没有？](https://www.zhihu.com/question/2045508310581916200)
1. [去大城市旅游，你会选择住酒店还是住亲戚朋友家里？](https://www.zhihu.com/question/2049384992367711500)
1. [你看好《明日方舟：终末地》这款游戏的未来吗？](https://www.zhihu.com/question/2094726414910100200)
1. [如何评价三国杀新包《蚀心入魔·贪》？](https://www.zhihu.com/question/2094514369983934700)
1. [你听说过最离谱的事是什么？](https://www.zhihu.com/question/592323654)
1. [如何评价漩涡水户?](https://www.zhihu.com/question/640761200)
1. [猪肉应该怎么做才好吃?](https://www.zhihu.com/question/1930643273325737700)
1. [舅舅立遗嘱换我养老该怎么办？](https://www.zhihu.com/question/6961318549)
1. [如何看待《流浪地球3》首次票房预测为48亿？](https://www.zhihu.com/question/2094459784686847700)
1. [为什么毛不易要比汪苏泷顺利很多？](https://www.zhihu.com/question/655089117)
1. [德玛西亚杯决赛BFX 3:1 WE，如何评价这场比赛？](https://www.zhihu.com/question/2094887630961895200)
1. [红楼梦究竟好在什么地方？](https://www.zhihu.com/question/1968631190115320600)
1. [特斯拉新款Roadster能像火箭一样「起飞」，它能解决哪些实际问题？在现行法律下能上路吗？](https://www.zhihu.com/question/2094524653892888000)
1. [学历史有什么用？](https://www.zhihu.com/question/20338058)
1. [如何评价《明日方舟：终末地》1.6版本？](https://www.zhihu.com/question/2094069188772077800)
1. [我们看到的夜空，会不会有些星星其实早就不存在了？](https://www.zhihu.com/question/2092579826779567400)
1. [每次吃饭，孩子的碗里总要剩一些饭吃不完，哪怕她自己盛的饭也一样，你们的呢？](https://www.zhihu.com/question/2094185075898427400)

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
<!-- 最后更新时间 Sun Oct 18 2026 03:30:19 GMT+0800 (China Standard Time) -->

1. [总书记心系万里绿色长城](https://s.weibo.com//weibo?q=%23%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%BF%83%E7%B3%BB%E4%B8%87%E9%87%8C%E7%BB%BF%E8%89%B2%E9%95%BF%E5%9F%8E%23&Refer=new_time)
1. [店员称有碘伏顾客磕响头](https://s.weibo.com//weibo?q=%E5%BA%97%E5%91%98%E7%A7%B0%E6%9C%89%E7%A2%98%E4%BC%8F%E9%A1%BE%E5%AE%A2%E7%A3%95%E5%93%8D%E5%A4%B4&t=31&band_rank=1&Refer=top)
1. [杭州大三女孩7个月开20家柠檬奶店](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A4%A7%E4%B8%89%E5%A5%B3%E5%AD%A97%E4%B8%AA%E6%9C%88%E5%BC%8020%E5%AE%B6%E6%9F%A0%E6%AA%AC%E5%A5%B6%E5%BA%97%23&t=31&band_rank=2&Refer=top)
1. [广交会真的太全面了](https://s.weibo.com//weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%85%A8%E9%9D%A2%E4%BA%86%23&t=31&band_rank=3&Refer=top)
1. [嫁金钗这是奔着破纪录去的](https://s.weibo.com//weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E8%BF%99%E6%98%AF%E5%A5%94%E7%9D%80%E7%A0%B4%E7%BA%AA%E5%BD%95%E5%8E%BB%E7%9A%84%23&t=31&band_rank=4&Refer=top)
1. [小沈阳气得咬牙切齿](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%B0%94%E5%BE%97%E5%92%AC%E7%89%99%E5%88%87%E9%BD%BF%23&t=31&band_rank=5&Refer=top)
1. [徐艺洋弟弟发文](https://s.weibo.com//weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%BC%9F%E5%BC%9F%E5%8F%91%E6%96%87%23&t=31&band_rank=6&Refer=top)
1. [现役男女演员TOP](https://s.weibo.com//weibo?q=%23%E7%8E%B0%E5%BD%B9%E7%94%B7%E5%A5%B3%E6%BC%94%E5%91%98TOP%23&t=31&band_rank=7&Refer=top)
1. [曾辉淘汰王赫野碎了](https://s.weibo.com//weibo?q=%23%E6%9B%BE%E8%BE%89%E6%B7%98%E6%B1%B0%E7%8E%8B%E8%B5%AB%E9%87%8E%E7%A2%8E%E4%BA%86%23&t=31&band_rank=8&Refer=top)
1. [马斯克飞行汽车遭踢馆](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E9%81%AD%E8%B8%A2%E9%A6%86%23&t=31&band_rank=9&Refer=top)
1. [特斯拉飞行汽车被质疑是噱头](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E8%A2%AB%E8%B4%A8%E7%96%91%E6%98%AF%E5%99%B1%E5%A4%B4%23&t=31&band_rank=10&Refer=top)
1. [AI的吻戏比真人还欲啊](https://s.weibo.com//weibo?q=%23AI%E7%9A%84%E5%90%BB%E6%88%8F%E6%AF%94%E7%9C%9F%E4%BA%BA%E8%BF%98%E6%AC%B2%E5%95%8A%23&t=31&band_rank=11&Refer=top)
1. [王力宏力赞披哥在梅边舞台](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%8A%9B%E8%B5%9E%E6%8A%AB%E5%93%A5%E5%9C%A8%E6%A2%85%E8%BE%B9%E8%88%9E%E5%8F%B0%23&t=31&band_rank=12&Refer=top)
1. [徐艺洋怀孕下楼梯那英扶了她一把](https://s.weibo.com//weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E6%80%80%E5%AD%95%E4%B8%8B%E6%A5%BC%E6%A2%AF%E9%82%A3%E8%8B%B1%E6%89%B6%E4%BA%86%E5%A5%B9%E4%B8%80%E6%8A%8A%23&t=31&band_rank=13&Refer=top)
1. [内马尔晒与亚马尔数据对比](https://s.weibo.com//weibo?q=%E5%86%85%E9%A9%AC%E5%B0%94%E6%99%92%E4%B8%8E%E4%BA%9A%E9%A9%AC%E5%B0%94%E6%95%B0%E6%8D%AE%E5%AF%B9%E6%AF%94&t=31&band_rank=14&Refer=top)
1. [演员招不到黄胖子了](https://s.weibo.com//weibo?q=%23%E6%BC%94%E5%91%98%E6%8B%9B%E4%B8%8D%E5%88%B0%E9%BB%84%E8%83%96%E5%AD%90%E4%BA%86%23&t=31&band_rank=15&Refer=top)
1. [欠薪345万却砸钱送孩子韩国出道](https://s.weibo.com//weibo?q=%23%E6%AC%A0%E8%96%AA345%E4%B8%87%E5%8D%B4%E7%A0%B8%E9%92%B1%E9%80%81%E5%AD%A9%E5%AD%90%E9%9F%A9%E5%9B%BD%E5%87%BA%E9%81%93%23&t=31&band_rank=16&Refer=top)
1. [在梅边 夯爆了](https://s.weibo.com//weibo?q=%E5%9C%A8%E6%A2%85%E8%BE%B9%20%E5%A4%AF%E7%88%86%E4%BA%86&t=31&band_rank=17&Refer=top)
1. [特斯拉市值蒸发超6200亿](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%B6%856200%E4%BA%BF%23&t=31&band_rank=18&Refer=top)
1. [刘丁硕质疑张继科卖鸡排](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E8%B4%A8%E7%96%91%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%8D%96%E9%B8%A1%E6%8E%92%23&t=31&band_rank=19&Refer=top)
1. [曼城3比2伊普斯维奇](https://s.weibo.com//weibo?q=%23%E6%9B%BC%E5%9F%8E3%E6%AF%942%E4%BC%8A%E6%99%AE%E6%96%AF%E7%BB%B4%E5%A5%87%23&t=31&band_rank=20&Refer=top)
1. [肠癌有3个危险信号](https://s.weibo.com//weibo?q=%23%E8%82%A0%E7%99%8C%E6%9C%893%E4%B8%AA%E5%8D%B1%E9%99%A9%E4%BF%A1%E5%8F%B7%23&t=31&band_rank=21&Refer=top)
1. [皮质醇高的6大身体信号](https://s.weibo.com//weibo?q=%E7%9A%AE%E8%B4%A8%E9%86%87%E9%AB%98%E7%9A%846%E5%A4%A7%E8%BA%AB%E4%BD%93%E4%BF%A1%E5%8F%B7&t=31&band_rank=22&Refer=top)
1. [iPhoneDuo溢价暴跌原因](https://s.weibo.com//weibo?q=%23iPhoneDuo%E6%BA%A2%E4%BB%B7%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=23&Refer=top)
1. [二十年后发现老师早知道自己撒谎](https://s.weibo.com//weibo?q=%E4%BA%8C%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%91%E7%8E%B0%E8%80%81%E5%B8%88%E6%97%A9%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%92%92%E8%B0%8E&t=31&band_rank=24&Refer=top)
1. [黄子韬直接包场免费请你们吃肥姨妈](https://s.weibo.com//weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%9B%B4%E6%8E%A5%E5%8C%85%E5%9C%BA%E5%85%8D%E8%B4%B9%E8%AF%B7%E4%BD%A0%E4%BB%AC%E5%90%83%E8%82%A5%E5%A7%A8%E5%A6%88%23&t=31&band_rank=25&Refer=top)
1. [肖战南京演唱会二开](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%8D%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8C%E5%BC%80%23&t=31&band_rank=26&Refer=top)
1. [中国小姐姐蜗居老头乐在外网走红](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%A7%90%E5%A7%90%E8%9C%97%E5%B1%85%E8%80%81%E5%A4%B4%E4%B9%90%E5%9C%A8%E5%A4%96%E7%BD%91%E8%B5%B0%E7%BA%A2&t=31&band_rank=27&Refer=top)
1. [郭宇欣方回应直播屏蔽争议](https://s.weibo.com//weibo?q=%E9%83%AD%E5%AE%87%E6%AC%A3%E6%96%B9%E5%9B%9E%E5%BA%94%E7%9B%B4%E6%92%AD%E5%B1%8F%E8%94%BD%E4%BA%89%E8%AE%AE&t=31&band_rank=28&Refer=top)
1. [夫妻闹离婚公公恼火儿媳闺蜜](https://s.weibo.com//weibo?q=%23%E5%A4%AB%E5%A6%BB%E9%97%B9%E7%A6%BB%E5%A9%9A%E5%85%AC%E5%85%AC%E6%81%BC%E7%81%AB%E5%84%BF%E5%AA%B3%E9%97%BA%E8%9C%9C%23&t=31&band_rank=29&Refer=top)
1. [曹骏滑铲空翻](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%BB%91%E9%93%B2%E7%A9%BA%E7%BF%BB%23&t=31&band_rank=30&Refer=top)
1. [美颜突然关掉太恐怖了](https://s.weibo.com//weibo?q=%E7%BE%8E%E9%A2%9C%E7%AA%81%E7%84%B6%E5%85%B3%E6%8E%89%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86&t=31&band_rank=31&Refer=top)
1. [曾辉新综艺官宣](https://s.weibo.com//weibo?q=%23%E6%9B%BE%E8%BE%89%E6%96%B0%E7%BB%BC%E8%89%BA%E5%AE%98%E5%AE%A3%23&t=31&band_rank=32&Refer=top)
1. [鹿晗用了李秀满女团新歌](https://s.weibo.com//weibo?q=%23%E9%B9%BF%E6%99%97%E7%94%A8%E4%BA%86%E6%9D%8E%E7%A7%80%E6%BB%A1%E5%A5%B3%E5%9B%A2%E6%96%B0%E6%AD%8C%23&t=31&band_rank=33&Refer=top)
1. [日网友称DeepSeek颠覆格局](https://s.weibo.com//weibo?q=%E6%97%A5%E7%BD%91%E5%8F%8B%E7%A7%B0DeepSeek%E9%A2%A0%E8%A6%86%E6%A0%BC%E5%B1%80&t=31&band_rank=34&Refer=top)
1. [卖柠檬奶月营业额超百万女生发声](https://s.weibo.com//weibo?q=%23%E5%8D%96%E6%9F%A0%E6%AA%AC%E5%A5%B6%E6%9C%88%E8%90%A5%E4%B8%9A%E9%A2%9D%E8%B6%85%E7%99%BE%E4%B8%87%E5%A5%B3%E7%94%9F%E5%8F%91%E5%A3%B0%23&t=31&band_rank=35&Refer=top)
1. [武网决赛卡塔尔vs赫瓦林斯卡](https://s.weibo.com//weibo?q=%E6%AD%A6%E7%BD%91%E5%86%B3%E8%B5%9B%E5%8D%A1%E5%A1%94%E5%B0%94vs%E8%B5%AB%E7%93%A6%E6%9E%97%E6%96%AF%E5%8D%A1&t=31&band_rank=36&Refer=top)
1. [我也想你了和早点睡是近义词](https://s.weibo.com//weibo?q=%E6%88%91%E4%B9%9F%E6%83%B3%E4%BD%A0%E4%BA%86%E5%92%8C%E6%97%A9%E7%82%B9%E7%9D%A1%E6%98%AF%E8%BF%91%E4%B9%89%E8%AF%8D&t=31&band_rank=37&Refer=top)
1. [赫瓦林斯卡回应晋级决赛](https://s.weibo.com//weibo?q=%23%E8%B5%AB%E7%93%A6%E6%9E%97%E6%96%AF%E5%8D%A1%E5%9B%9E%E5%BA%94%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23&t=31&band_rank=38&Refer=top)
1. [6种癌症有明显家族遗传倾向](https://s.weibo.com//weibo?q=%236%E7%A7%8D%E7%99%8C%E7%97%87%E6%9C%89%E6%98%8E%E6%98%BE%E5%AE%B6%E6%97%8F%E9%81%97%E4%BC%A0%E5%80%BE%E5%90%91%23&t=31&band_rank=39&Refer=top)
1. [张函瑞生周配置](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E7%94%9F%E5%91%A8%E9%85%8D%E7%BD%AE%23&t=31&band_rank=40&Refer=top)
1. [郑合惠子任宥纶挽手遛狗路透](https://s.weibo.com//weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E4%BB%BB%E5%AE%A5%E7%BA%B6%E6%8C%BD%E6%89%8B%E9%81%9B%E7%8B%97%E8%B7%AF%E9%80%8F%23&t=31&band_rank=41&Refer=top)
1. [刘诗诗胡先煦姐狗味](https://s.weibo.com//weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%83%A1%E5%85%88%E7%85%A6%E5%A7%90%E7%8B%97%E5%91%B3%23&t=31&band_rank=42&Refer=top)
1. [斯瓦泰克回应伤势](https://s.weibo.com//weibo?q=%23%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%E5%9B%9E%E5%BA%94%E4%BC%A4%E5%8A%BF%23&t=31&band_rank=43&Refer=top)
1. [曝时代少年团今年跨年形式](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BB%8A%E5%B9%B4%E8%B7%A8%E5%B9%B4%E5%BD%A2%E5%BC%8F%23&t=31&band_rank=44&Refer=top)
1. [肖战演唱会南京太尽力了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8D%97%E4%BA%AC%E5%A4%AA%E5%B0%BD%E5%8A%9B%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [人怎么能捅出这么大的篓子](https://s.weibo.com//weibo?q=%E4%BA%BA%E6%80%8E%E4%B9%88%E8%83%BD%E6%8D%85%E5%87%BA%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E7%AF%93%E5%AD%90&t=31&band_rank=46&Refer=top)
1. [嫁金钗妻子看上了我的兄弟](https://s.weibo.com//weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%A6%BB%E5%AD%90%E7%9C%8B%E4%B8%8A%E4%BA%86%E6%88%91%E7%9A%84%E5%85%84%E5%BC%9F%23&t=31&band_rank=47&Refer=top)
1. [刘丁硕置顶都是王楚钦](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E7%BD%AE%E9%A1%B6%E9%83%BD%E6%98%AF%E7%8E%8B%E6%A5%9A%E9%92%A6%23&t=31&band_rank=48&Refer=top)
1. [微博V影响力大会](https://s.weibo.com//weibo?q=%E5%BE%AE%E5%8D%9AV%E5%BD%B1%E5%93%8D%E5%8A%9B%E5%A4%A7%E4%BC%9A&t=31&band_rank=49&Refer=top)
1. [诀爱 编曲](https://s.weibo.com//weibo?q=%E8%AF%80%E7%88%B1%20%E7%BC%96%E6%9B%B2&t=31&band_rank=50&Refer=top)
1. [杭州大三女孩7个月开20家柠檬奶店](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A4%A7%E4%B8%89%E5%A5%B3%E5%AD%A97%E4%B8%AA%E6%9C%88%E5%BC%8020%E5%AE%B6%E6%9F%A0%E6%AA%AC%E5%A5%B6%E5%BA%97%23&t=31&band_rank=1&Refer=top)
1. [马斯克飞行汽车遭踢馆](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E9%81%AD%E8%B8%A2%E9%A6%86%23&t=31&band_rank=2&Refer=top)
1. [王力宏力赞披哥在梅边舞台](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%8A%9B%E8%B5%9E%E6%8A%AB%E5%93%A5%E5%9C%A8%E6%A2%85%E8%BE%B9%E8%88%9E%E5%8F%B0%23&t=31&band_rank=4&Refer=top)
1. [店员称有碘伏顾客磕响头](https://s.weibo.com//weibo?q=%E5%BA%97%E5%91%98%E7%A7%B0%E6%9C%89%E7%A2%98%E4%BC%8F%E9%A1%BE%E5%AE%A2%E7%A3%95%E5%93%8D%E5%A4%B4&t=31&band_rank=7&Refer=top)
1. [在梅边 夯爆了](https://s.weibo.com//weibo?q=%E5%9C%A8%E6%A2%85%E8%BE%B9%20%E5%A4%AF%E7%88%86%E4%BA%86&t=31&band_rank=8&Refer=top)
1. [特斯拉市值蒸发超6200亿](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%B6%856200%E4%BA%BF%23&t=31&band_rank=9&Refer=top)
1. [爸爸AB型妈妈A型女儿O型](https://s.weibo.com//weibo?q=%23%E7%88%B8%E7%88%B8AB%E5%9E%8B%E5%A6%88%E5%A6%88A%E5%9E%8B%E5%A5%B3%E5%84%BFO%E5%9E%8B%23&t=31&band_rank=10&Refer=top)
1. [徐艺洋怀孕下楼梯那英扶了她一把](https://s.weibo.com//weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E6%80%80%E5%AD%95%E4%B8%8B%E6%A5%BC%E6%A2%AF%E9%82%A3%E8%8B%B1%E6%89%B6%E4%BA%86%E5%A5%B9%E4%B8%80%E6%8A%8A%23&t=31&band_rank=12&Refer=top)
1. [曾辉淘汰](https://s.weibo.com//weibo?q=%E6%9B%BE%E8%BE%89%E6%B7%98%E6%B1%B0&t=31&band_rank=13&Refer=top)
1. [黄子韬直接包场免费请你们吃肥姨妈](https://s.weibo.com//weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%9B%B4%E6%8E%A5%E5%8C%85%E5%9C%BA%E5%85%8D%E8%B4%B9%E8%AF%B7%E4%BD%A0%E4%BB%AC%E5%90%83%E8%82%A5%E5%A7%A8%E5%A6%88%23&t=31&band_rank=14&Refer=top)
1. [欠薪345万却砸钱送孩子韩国出道](https://s.weibo.com//weibo?q=%23%E6%AC%A0%E8%96%AA345%E4%B8%87%E5%8D%B4%E7%A0%B8%E9%92%B1%E9%80%81%E5%AD%A9%E5%AD%90%E9%9F%A9%E5%9B%BD%E5%87%BA%E9%81%93%23&t=31&band_rank=15&Refer=top)
1. [曹骏滑铲空翻](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%BB%91%E9%93%B2%E7%A9%BA%E7%BF%BB%23&t=31&band_rank=16&Refer=top)
1. [郑合惠子任宥纶挽手遛狗路透](https://s.weibo.com//weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E4%BB%BB%E5%AE%A5%E7%BA%B6%E6%8C%BD%E6%89%8B%E9%81%9B%E7%8B%97%E8%B7%AF%E9%80%8F%23&t=31&band_rank=17&Refer=top)
1. [刘丁硕质疑张继科卖鸡排](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E8%B4%A8%E7%96%91%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%8D%96%E9%B8%A1%E6%8E%92%23&t=31&band_rank=18&Refer=top)
1. [二十年后发现老师早知道自己撒谎](https://s.weibo.com//weibo?q=%E4%BA%8C%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%91%E7%8E%B0%E8%80%81%E5%B8%88%E6%97%A9%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%92%92%E8%B0%8E&t=31&band_rank=19&Refer=top)
1. [大马丁受伤](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E9%A9%AC%E4%B8%81%E5%8F%97%E4%BC%A4%23&t=31&band_rank=20&Refer=top)
1. [iPhoneDuo溢价暴跌原因](https://s.weibo.com//weibo?q=%23iPhoneDuo%E6%BA%A2%E4%BB%B7%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=21&Refer=top)
1. [肠癌有3个危险信号](https://s.weibo.com//weibo?q=%23%E8%82%A0%E7%99%8C%E6%9C%893%E4%B8%AA%E5%8D%B1%E9%99%A9%E4%BF%A1%E5%8F%B7%23&t=31&band_rank=22&Refer=top)
1. [微博V影响力大会](https://s.weibo.com//weibo?q=%E5%BE%AE%E5%8D%9AV%E5%BD%B1%E5%93%8D%E5%8A%9B%E5%A4%A7%E4%BC%9A&t=31&band_rank=23&Refer=top)
1. [皮质醇高的6大身体信号](https://s.weibo.com//weibo?q=%E7%9A%AE%E8%B4%A8%E9%86%87%E9%AB%98%E7%9A%846%E5%A4%A7%E8%BA%AB%E4%BD%93%E4%BF%A1%E5%8F%B7&t=31&band_rank=24&Refer=top)
1. [肖战南京演唱会二开](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%8D%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8C%E5%BC%80%23&t=31&band_rank=25&Refer=top)
1. [郭宇欣方回应直播屏蔽争议](https://s.weibo.com//weibo?q=%E9%83%AD%E5%AE%87%E6%AC%A3%E6%96%B9%E5%9B%9E%E5%BA%94%E7%9B%B4%E6%92%AD%E5%B1%8F%E8%94%BD%E4%BA%89%E8%AE%AE&t=31&band_rank=26&Refer=top)
1. [嫁金钗妻子看上了我的兄弟](https://s.weibo.com//weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%A6%BB%E5%AD%90%E7%9C%8B%E4%B8%8A%E4%BA%86%E6%88%91%E7%9A%84%E5%85%84%E5%BC%9F%23&t=31&band_rank=27&Refer=top)
1. [演员招不到黄胖子了](https://s.weibo.com//weibo?q=%23%E6%BC%94%E5%91%98%E6%8B%9B%E4%B8%8D%E5%88%B0%E9%BB%84%E8%83%96%E5%AD%90%E4%BA%86%23&t=31&band_rank=28&Refer=top)
1. [中国小姐姐蜗居老头乐在外网走红](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%A7%90%E5%A7%90%E8%9C%97%E5%B1%85%E8%80%81%E5%A4%B4%E4%B9%90%E5%9C%A8%E5%A4%96%E7%BD%91%E8%B5%B0%E7%BA%A2&t=31&band_rank=29&Refer=top)
1. [武网决赛卡塔尔vs赫瓦林斯卡](https://s.weibo.com//weibo?q=%E6%AD%A6%E7%BD%91%E5%86%B3%E8%B5%9B%E5%8D%A1%E5%A1%94%E5%B0%94vs%E8%B5%AB%E7%93%A6%E6%9E%97%E6%96%AF%E5%8D%A1&t=31&band_rank=30&Refer=top)
1. [鹿晗用了李秀满女团新歌](https://s.weibo.com//weibo?q=%23%E9%B9%BF%E6%99%97%E7%94%A8%E4%BA%86%E6%9D%8E%E7%A7%80%E6%BB%A1%E5%A5%B3%E5%9B%A2%E6%96%B0%E6%AD%8C%23&t=31&band_rank=31&Refer=top)
1. [6种癌症有明显家族遗传倾向](https://s.weibo.com//weibo?q=%236%E7%A7%8D%E7%99%8C%E7%97%87%E6%9C%89%E6%98%8E%E6%98%BE%E5%AE%B6%E6%97%8F%E9%81%97%E4%BC%A0%E5%80%BE%E5%90%91%23&t=31&band_rank=32&Refer=top)
1. [曾辉发言感谢韩雨彤](https://s.weibo.com//weibo?q=%23%E6%9B%BE%E8%BE%89%E5%8F%91%E8%A8%80%E6%84%9F%E8%B0%A2%E9%9F%A9%E9%9B%A8%E5%BD%A4%23&t=31&band_rank=33&Refer=top)
1. [肖战演唱会南京太尽力了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8D%97%E4%BA%AC%E5%A4%AA%E5%B0%BD%E5%8A%9B%E4%BA%86%23&t=31&band_rank=34&Refer=top)
1. [诀爱 编曲](https://s.weibo.com//weibo?q=%E8%AF%80%E7%88%B1%20%E7%BC%96%E6%9B%B2&t=31&band_rank=35&Refer=top)
1. [我也想你了和早点睡是近义词](https://s.weibo.com//weibo?q=%E6%88%91%E4%B9%9F%E6%83%B3%E4%BD%A0%E4%BA%86%E5%92%8C%E6%97%A9%E7%82%B9%E7%9D%A1%E6%98%AF%E8%BF%91%E4%B9%89%E8%AF%8D&t=31&band_rank=36&Refer=top)
1. [闫桉回复君黛我喜欢魏娆](https://s.weibo.com//weibo?q=%23%E9%97%AB%E6%A1%89%E5%9B%9E%E5%A4%8D%E5%90%9B%E9%BB%9B%E6%88%91%E5%96%9C%E6%AC%A2%E9%AD%8F%E5%A8%86%23&t=31&band_rank=37&Refer=top)
1. [曼城3比2伊普斯维奇](https://s.weibo.com//weibo?q=%23%E6%9B%BC%E5%9F%8E3%E6%AF%942%E4%BC%8A%E6%99%AE%E6%96%AF%E7%BB%B4%E5%A5%87%23&t=31&band_rank=38&Refer=top)
1. [刘丁硕置顶都是王楚钦](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E7%BD%AE%E9%A1%B6%E9%83%BD%E6%98%AF%E7%8E%8B%E6%A5%9A%E9%92%A6%23&t=31&band_rank=39&Refer=top)
1. [夫妻闹离婚公公恼火儿媳闺蜜](https://s.weibo.com//weibo?q=%23%E5%A4%AB%E5%A6%BB%E9%97%B9%E7%A6%BB%E5%A9%9A%E5%85%AC%E5%85%AC%E6%81%BC%E7%81%AB%E5%84%BF%E5%AA%B3%E9%97%BA%E8%9C%9C%23&t=31&band_rank=40&Refer=top)
1. [曝时代少年团今年跨年形式](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BB%8A%E5%B9%B4%E8%B7%A8%E5%B9%B4%E5%BD%A2%E5%BC%8F%23&t=31&band_rank=41&Refer=top)
1. [黄景瑜巴西柔术用王安宇范丞丞身上了](https://s.weibo.com//weibo?q=%E9%BB%84%E6%99%AF%E7%91%9C%E5%B7%B4%E8%A5%BF%E6%9F%94%E6%9C%AF%E7%94%A8%E7%8E%8B%E5%AE%89%E5%AE%87%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%BA%AB%E4%B8%8A%E4%BA%86&t=31&band_rank=42&Refer=top)
1. [日本宣称侵华战争是圣战](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AE%A3%E7%A7%B0%E4%BE%B5%E5%8D%8E%E6%88%98%E4%BA%89%E6%98%AF%E5%9C%A3%E6%88%98%23&t=31&band_rank=43&Refer=top)
1. [博主三老板去世妻子说我的天塌了](https://s.weibo.com//weibo?q=%23%E5%8D%9A%E4%B8%BB%E4%B8%89%E8%80%81%E6%9D%BF%E5%8E%BB%E4%B8%96%E5%A6%BB%E5%AD%90%E8%AF%B4%E6%88%91%E7%9A%84%E5%A4%A9%E5%A1%8C%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [爱情有烟火删减很简单粗暴](https://s.weibo.com//weibo?q=%E7%88%B1%E6%83%85%E6%9C%89%E7%83%9F%E7%81%AB%E5%88%A0%E5%87%8F%E5%BE%88%E7%AE%80%E5%8D%95%E7%B2%97%E6%9A%B4&t=31&band_rank=45&Refer=top)
1. [披荆斩棘 垫音](https://s.weibo.com//weibo?q=%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%20%E5%9E%AB%E9%9F%B3&t=31&band_rank=46&Refer=top)
1. [相撞瞬间大马丁头颈错位](https://s.weibo.com//weibo?q=%23%E7%9B%B8%E6%92%9E%E7%9E%AC%E9%97%B4%E5%A4%A7%E9%A9%AC%E4%B8%81%E5%A4%B4%E9%A2%88%E9%94%99%E4%BD%8D%23&t=31&band_rank=47&Refer=top)
1. [人怎么能捅出这么大的篓子](https://s.weibo.com//weibo?q=%E4%BA%BA%E6%80%8E%E4%B9%88%E8%83%BD%E6%8D%85%E5%87%BA%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E7%AF%93%E5%AD%90&t=31&band_rank=48&Refer=top)
1. [鹿晗gapday音乐节](https://s.weibo.com//weibo?q=%E9%B9%BF%E6%99%97gapday%E9%9F%B3%E4%B9%90%E8%8A%82&t=31&band_rank=49&Refer=top)
1. [事业编全额差额拨款区别](https://s.weibo.com//weibo?q=%E4%BA%8B%E4%B8%9A%E7%BC%96%E5%85%A8%E9%A2%9D%E5%B7%AE%E9%A2%9D%E6%8B%A8%E6%AC%BE%E5%8C%BA%E5%88%AB&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
