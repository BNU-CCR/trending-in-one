# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-29 10:14:13

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
<!-- 最后更新时间 Sat Aug 29 2026 02:59:47 GMT+0800 (China Standard Time) -->

1. [尼泊尔山洪已致579死1924失联](https://so.toutiao.com/search?keyword=尼泊尔山洪已致579死1924失联)
1. [河北省委原书记倪岳峰履新职](https://so.toutiao.com/search?keyword=河北省委原书记倪岳峰履新职)
1. [全国社会物流总额同比增长5.0%](https://so.toutiao.com/search?keyword=全国社会物流总额同比增长5.0%)
1. [官方：存量房贷还款困难可协商调整](https://so.toutiao.com/search?keyword=官方：存量房贷还款困难可协商调整)
1. [蒋超良贪7.46亿被判死缓](https://so.toutiao.com/search?keyword=蒋超良贪7.46亿被判死缓)
1. [41岁爸爸送女儿出嫁走红](https://so.toutiao.com/search?keyword=41岁爸爸送女儿出嫁走红)
1. [吴晓波：大公积金时代或正在到来](https://so.toutiao.com/search?keyword=吴晓波：大公积金时代或正在到来)
1. [脑梗来临前的警报 很多人当成没睡好](https://so.toutiao.com/search?keyword=脑梗来临前的警报%20很多人当成没睡好)
1. [男子面试被拒后收到1000元辛苦费](https://so.toutiao.com/search?keyword=男子面试被拒后收到1000元辛苦费)
1. [日本研究生在实验室遭化骨水淋头身亡](https://so.toutiao.com/search?keyword=日本研究生在实验室遭化骨水淋头身亡)
1. [“青铜峡拦河大坝泄洪”不实](https://so.toutiao.com/search?keyword=“青铜峡拦河大坝泄洪”不实)
1. [出生率回落 中国新生男孩仍比女孩多](https://so.toutiao.com/search?keyword=出生率回落%20中国新生男孩仍比女孩多)
1. [小沈阳选人被拒绝九次](https://so.toutiao.com/search?keyword=小沈阳选人被拒绝九次)
1. [比尔·盖茨发长文严厉警告人类注意AI](https://so.toutiao.com/search?keyword=比尔·盖茨发长文严厉警告人类注意AI)
1. [专家：吉隆救援人员需警惕冰湖溃决](https://so.toutiao.com/search?keyword=专家：吉隆救援人员需警惕冰湖溃决)
1. [近600万法拍别墅收房一片废墟](https://so.toutiao.com/search?keyword=近600万法拍别墅收房一片废墟)
1. [中国第五座超一线城市会是谁](https://so.toutiao.com/search?keyword=中国第五座超一线城市会是谁)
1. [博主：宇树科技的IPO闹剧反思录](https://so.toutiao.com/search?keyword=博主：宇树科技的IPO闹剧反思录)
1. [46岁的董洁像吃防腐剂了](https://so.toutiao.com/search?keyword=46岁的董洁像吃防腐剂了)
1. [深圳市原市长覃伟中已履新广东省人大](https://so.toutiao.com/search?keyword=深圳市原市长覃伟中已履新广东省人大)
1. [男子吃饭遇到徐怀钰 现场合照](https://so.toutiao.com/search?keyword=男子吃饭遇到徐怀钰%20现场合照)
1. [牛弹琴：特朗普干的事让世界目瞪口呆](https://so.toutiao.com/search?keyword=牛弹琴：特朗普干的事让世界目瞪口呆)
1. [媒体：演唱会上的“衣不遮体”该治了](https://so.toutiao.com/search?keyword=媒体：演唱会上的“衣不遮体”该治了)
1. [个人住房贷款期限延长至最长40年](https://so.toutiao.com/search?keyword=个人住房贷款期限延长至最长40年)
1. [新任深圳市代市长李运首次调研赴华为](https://so.toutiao.com/search?keyword=新任深圳市代市长李运首次调研赴华为)
1. [中方带日议员团参观机器人有何深意](https://so.toutiao.com/search?keyword=中方带日议员团参观机器人有何深意)
1. [吉隆堰塞湖附近树林被气浪吹光](https://so.toutiao.com/search?keyword=吉隆堰塞湖附近树林被气浪吹光)
1. [“兵王”父亲送儿子到国防科大报到](https://so.toutiao.com/search?keyword=“兵王”父亲送儿子到国防科大报到)
1. [证监会发文支持构建房地产发展新模式](https://so.toutiao.com/search?keyword=证监会发文支持构建房地产发展新模式)
1. [李常官任民政部部长](https://so.toutiao.com/search?keyword=李常官任民政部部长)
1. [亲戚来家里做客全国统一反应](https://so.toutiao.com/search?keyword=亲戚来家里做客全国统一反应)
1. [三部门联合发布 现房销售来了](https://so.toutiao.com/search?keyword=三部门联合发布%20现房销售来了)
1. [俄军动用新武器打击乌军事目标](https://so.toutiao.com/search?keyword=俄军动用新武器打击乌军事目标)
1. [加拿大为何“硬刚”美国](https://so.toutiao.com/search?keyword=加拿大为何“硬刚”美国)
1. [吉隆泥石流三维影像图首次公布](https://so.toutiao.com/search?keyword=吉隆泥石流三维影像图首次公布)
1. [如何纠治企业算计年轻人的短视操作](https://so.toutiao.com/search?keyword=如何纠治企业算计年轻人的短视操作)
1. [内蒙古游客飞身将景区的马骑走](https://so.toutiao.com/search?keyword=内蒙古游客飞身将景区的马骑走)
1. [泥石流袭来前疏散人群民警叫黄棚](https://so.toutiao.com/search?keyword=泥石流袭来前疏散人群民警叫黄棚)
1. [长鑫科技上半年净利润776.05亿元](https://so.toutiao.com/search?keyword=长鑫科技上半年净利润776.05亿元)
1. [小男孩认错妈妈扑路人怀里大哭](https://so.toutiao.com/search?keyword=小男孩认错妈妈扑路人怀里大哭)
1. [长沙凭什么“接舰”](https://so.toutiao.com/search?keyword=长沙凭什么“接舰”)
1. [19家白酒公司半年总收入减少近百亿](https://so.toutiao.com/search?keyword=19家白酒公司半年总收入减少近百亿)
1. [你会买iPhone折叠屏手机吗](https://so.toutiao.com/search?keyword=你会买iPhone折叠屏手机吗)
1. [新修订的国防动员法表决通过](https://so.toutiao.com/search?keyword=新修订的国防动员法表决通过)
1. [德尔加多结束345天进球荒](https://so.toutiao.com/search?keyword=德尔加多结束345天进球荒)
1. [大V：印度记者戳破全民赶超幻想](https://so.toutiao.com/search?keyword=大V：印度记者戳破全民赶超幻想)
1. [著名京剧表演艺术家李维康去世](https://so.toutiao.com/search?keyword=著名京剧表演艺术家李维康去世)
1. [菲友人：菲律宾应该独立自主](https://so.toutiao.com/search?keyword=菲友人：菲律宾应该独立自主)
1. [媒体：考不好就“示众”辱人者终自辱](https://so.toutiao.com/search?keyword=媒体：考不好就“示众”辱人者终自辱)
1. [网红店为何频频因房东涨租而关店](https://so.toutiao.com/search?keyword=网红店为何频频因房东涨租而关店)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Aug 29 2026 10:09:06 GMT+0800 (China Standard Time) -->

1. [孙宇晨](https://www.zhihu.com/search?q=%E5%AD%99%E5%AE%87%E6%99%A8)
1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [中国博士人数疑超驴存栏量](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E5%8D%9A%E5%A3%AB%E4%BA%BA%E6%95%B0%E7%96%91%E8%B6%85%E9%A9%B4%E5%AD%98%E6%A0%8F%E9%87%8F)
1. [Zhihu CLI 功能上新](https://www.zhihu.com/search?q=Zhihu%20CLI%20%E5%8A%9F%E8%83%BD%E4%B8%8A%E6%96%B0)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [个人房贷最长不超过 40 年](https://www.zhihu.com/search?q=%E4%B8%AA%E4%BA%BA%E6%88%BF%E8%B4%B7%E6%9C%80%E9%95%BF%E4%B8%8D%E8%B6%85%E8%BF%87%2040%20%E5%B9%B4)
1. [刘翔向网友求助职场选择](https://www.zhihu.com/search?q=%E5%88%98%E7%BF%94%E5%90%91%E7%BD%91%E5%8F%8B%E6%B1%82%E5%8A%A9%E8%81%8C%E5%9C%BA%E9%80%89%E6%8B%A9)
1. [星宇股份劝退应届生补偿方案](https://www.zhihu.com/search?q=%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F%E8%A1%A5%E5%81%BF%E6%96%B9%E6%A1%88)
1. [吉隆受灾区域附近雪山发生雪崩](https://www.zhihu.com/search?q=%E5%90%89%E9%9A%86%E5%8F%97%E7%81%BE%E5%8C%BA%E5%9F%9F%E9%99%84%E8%BF%91%E9%9B%AA%E5%B1%B1%E5%8F%91%E7%94%9F%E9%9B%AA%E5%B4%A9)
1. [中国女生在韩失联已遇害](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%B7%B2%E9%81%87%E5%AE%B3)
1. [景甜](https://www.zhihu.com/search?q=%E6%99%AF%E7%94%9C)
1. [研究称中国光伏扩张致鸟类多样性下降](https://www.zhihu.com/search?q=%E7%A0%94%E7%A9%B6%E7%A7%B0%E4%B8%AD%E5%9B%BD%E5%85%89%E4%BC%8F%E6%89%A9%E5%BC%A0%E8%87%B4%E9%B8%9F%E7%B1%BB%E5%A4%9A%E6%A0%B7%E6%80%A7%E4%B8%8B%E9%99%8D)
1. [金鹿奖获奖名单](https://www.zhihu.com/search?q=%E9%87%91%E9%B9%BF%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Aug 29 2026 10:14:13 GMT+0800 (China Standard Time) -->

1. [西藏吉隆泥石流致 5 人遇难 558 人失联，上游堰塞湖出现溢流，目前救援进展如何？](https://www.zhihu.com/question/2076362548765357300)
1. [比亚迪上半年营收、净利润均同比回落，但汽车出口实现 67.8% 的高增长，如何解读？](https://www.zhihu.com/question/2076750422455366100)
1. [多家背调公司被爆随意调取个人隐私，仅需 30 元就能查社保记录，该类公司如何获取数据？是否涉嫌违法？](https://www.zhihu.com/question/2075956678424635400)
1. [如何看待 LPL 解说管泽元发布对着垃圾桶附文「48」的视频，被指玩选手黑梗？](https://www.zhihu.com/question/2076659692068257800)
1. [尼泊尔一侧发生泥石流，造成西藏吉隆口岸重大人员伤亡失联，为什么这次泥石流这么严重？](https://www.zhihu.com/question/2076024925496637000)
1. [媒体人称姚明NBA收入也曾面临分成，舆论施压后最终只缴税后 3%-5%，这意味着什么？](https://www.zhihu.com/question/2076400121282147000)
1. [如何看待澳洲把蟑螂改造成赛博急救员，通过遥控系统给灾害废墟的受困者送药？灾难救援该用动物还是纯机器人？](https://www.zhihu.com/question/2076605797715425000)
1. [爸爸为了防止女儿早恋，带她到处旅游并故意把她晒黑，这种做法真的能起到防止早恋的作用吗？](https://www.zhihu.com/question/2074767872866383600)
1. [美联储主席沃什称若通胀未明显回落，仍可能加息，誓言实现2%的目标，黄金直线跳水，如何看待这一表态？](https://www.zhihu.com/question/2076823659071680500)
1. [9 岁男孩小区内遭垃圾车碾压身亡，妈妈称物业未通知更换大型清运车，大型车能否进小区？物业需要负责吗？](https://www.zhihu.com/question/2076685026318627300)
1. [成都一男生高考超过本科线 157 分却报考高职，本人回应「想进铁路局当火车司机」，如何看待这一选择？](https://www.zhihu.com/question/2076612664869001200)
1. [根号15和根号17谁更接近4？](https://www.zhihu.com/question/2073805227866773200)
1. [孩子读书优秀学历越高，换来的是赚钱晚，结婚晚，生子晚，家庭长期只投入得不到回报，你们觉得值吗？](https://www.zhihu.com/question/2053868628034971000)
1. [奔驰、宝马发布短片讽刺速成车，对此你怎么看？](https://www.zhihu.com/question/2076228837369700600)
1. [尼泊尔山洪遇难人数升至 579 人、1924 人失联，目前当地情况如何？](https://www.zhihu.com/question/2076729617759433000)
1. [「地方附加税法」征求意见稿出台，实行 11%-13% 幅度税率，这一新税种对经济意味着什么？](https://www.zhihu.com/question/2076724095819965000)
1. [星宇股份深陷劝退应届生风波，标榜「家文化」却粗暴裁员，企业宣传为何与现实差距悬殊？应届生该如何避坑？](https://www.zhihu.com/question/2076681060084093200)
1. [被誉为「中华第一舰」的 112 舰哈尔滨舰退出现役，它在海军史上有着怎样的地位？你对它有哪些印象？](https://www.zhihu.com/question/2076614856879371300)
1. [假如电鳗很早就灭绝了，生物学家能否通过其化石等推测出其可以放电？](https://www.zhihu.com/question/48176151)
1. [上海 92%班主任不愿任职，年轻教师用诊断书回避，背后原因是什么？](https://www.zhihu.com/question/2071548641035149800)
1. [特朗普签署行政令将「安大略湖」改名为「美国湖」，「大西洋」、「太平洋」可能也得改名，如何看待这一行为？](https://www.zhihu.com/question/2076609978949792300)
1. [用了5年的合法固定车位，被邻楼老太强行霸占，放完杂物直接砌水泥墩，物业管不了我该怎么办？](https://www.zhihu.com/question/2038383492602532900)
1. [如果我穿越到战锤世界并知晓所有恶魔的真名会发生什么？](https://www.zhihu.com/question/1890169476663726800)
1. [如何评价育碧在 Steam 上架《英雄无敌 3》却忘记发游戏文件，玩家仅下载到 23KB 占位符？](https://www.zhihu.com/question/2076243232774677800)
1. [有哪些经济学常识，其实是错的或者被严重误读的？](https://www.zhihu.com/question/2074996675840689700)
1. [美联储主席「凯文·沃什」在杰克逊霍尔全球央行年会发表《在我们的时代》演讲，其观点到底是偏鹰还是鸽？](https://www.zhihu.com/question/2076800405380646100)
1. [5G商用七年了，除了手机右上角多5G标识，网速体验和4G没差别，信号甚至更差，我该如何反驳这种观点？](https://www.zhihu.com/question/2076052849881104600)
1. [如果牛类突然有了智慧，提出诉求称若不允许人类的乳汁当作商品出售，也不能再允许牛奶销售，乳业协怎么作答？](https://www.zhihu.com/question/2072192775517377000)
1. [中国新能源车出现「太长、太宽、太重」趋势，是何原因，发展合理吗？](https://www.zhihu.com/question/2004696556515910100)
1. [有没有大佬帮我解释一下AI infra到底是干啥的？](https://www.zhihu.com/question/4023337465)
1. [撞脸周杰伦走红的粥饼伦因房租暴涨 5 成关店，从胖东来到粥饼伦，实体店面对大幅涨租有破局的办法吗？](https://www.zhihu.com/question/2075913079498306000)
1. [蜜雪冰城半年报净利下降 14.7%，如何看待其上市以来首次出现净利润同比下滑？](https://www.zhihu.com/question/2076612668605952300)
1. [老年人越来越多，为什么银发经济不好做？](https://www.zhihu.com/question/2049940232846545200)
1. [为什么王尼玛、英国报姐、同道大叔等博主不愿意露脸？](https://www.zhihu.com/question/270496733)
1. [宝妈创业到底有多难？](https://www.zhihu.com/question/286899868)
1. [小米被曝更新售后政策，二手设备直接失去官方保修，怎么看待这件事？](https://www.zhihu.com/question/2075363668737499600)
1. [21 岁大学生 3 年考 100 个证引热议，考证越多越好吗？对未来发展有什么帮助？](https://www.zhihu.com/question/2076707196251928000)
1. [为什么平均每2年换一个首相的日本政治上反而比平均每5年换一个总统的韩国更稳定？](https://www.zhihu.com/question/2069200932634630000)
1. [连云港集中销毁烟花时发生爆炸，致邻市570多户房屋受损，为何会有这么大威力？此次事故暴露出哪些问题？](https://www.zhihu.com/question/2076310314954535000)
1. [古代打仗攻城，为何非要攻城门，不能绕过去吗？](https://www.zhihu.com/question/2022835024496531000)
1. [没有人胁迫作者的情况下，谏山创为什么一定要写艾伦指挥巨人吃掉自己的母亲呢？](https://www.zhihu.com/question/2074064627382621700)
1. [有哪些让你相见恨晚的「时间管理」技巧，真正改变了你的生活节奏？](https://www.zhihu.com/question/1966873395380617700)
1. [一斤五花肉可以做哪些美食呢？](https://www.zhihu.com/question/787150851)
1. [土豆用来炒什么菜好吃？](https://www.zhihu.com/question/572576815)
1. [非洲有数十万只鸵鸟，为何狮子很少吃鸵鸟？抓不着还是鸵鸟肉难吃？](https://www.zhihu.com/question/2047663796907517000)
1. [怎么理解男女同事的边界感？](https://www.zhihu.com/question/664748444)
1. [LPL2026赛季第三赛段骑士之路TT 0:3 iG，如何评价这场比赛？](https://www.zhihu.com/question/2076711775999997200)
1. [为什么干肠走不出东北，红肠却能火遍全国？](https://www.zhihu.com/question/2074602307673764400)
1. [在国内，与《钢铁是怎么炼成的》相比，《静静的顿河》是不是一部反动小说？](https://www.zhihu.com/question/2074154568259199200)
1. [日漫黄金时代逐渐落幕，如今新生代日漫普遍套路化、流水线化，行业发生了怎样的转变？](https://www.zhihu.com/question/2074578153721303300)
1. [为什么看不到男人四五个人结伴一起去旅行的？](https://www.zhihu.com/question/2074380142697244000)

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
<!-- 最后更新时间 Sat Aug 29 2026 02:50:55 GMT+0800 (China Standard Time) -->

1. [向吉隆泥石流灾害遇难人员默哀](https://s.weibo.com//weibo?q=%23%E5%90%91%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E7%81%BE%E5%AE%B3%E9%81%87%E9%9A%BE%E4%BA%BA%E5%91%98%E9%BB%98%E5%93%80%23&Refer=new_time)
1. [房贷](https://s.weibo.com//weibo?q=%E6%88%BF%E8%B4%B7&t=31&band_rank=1&Refer=top)
1. [青簪行](https://s.weibo.com//weibo?q=%E9%9D%92%E7%B0%AA%E8%A1%8C&t=31&band_rank=2&Refer=top)
1. [消防救援队已抵达受灾核心区](https://s.weibo.com//weibo?q=%23%E6%B6%88%E9%98%B2%E6%95%91%E6%8F%B4%E9%98%9F%E5%B7%B2%E6%8A%B5%E8%BE%BE%E5%8F%97%E7%81%BE%E6%A0%B8%E5%BF%83%E5%8C%BA%23&t=31&band_rank=3&Refer=top)
1. [白敬亭P图为井柏然剧宣](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%ADP%E5%9B%BE%E4%B8%BA%E4%BA%95%E6%9F%8F%E7%84%B6%E5%89%A7%E5%AE%A3%23&t=31&band_rank=4&Refer=top)
1. [胡连馨 京洛再无佳人](https://s.weibo.com//weibo?q=%E8%83%A1%E8%BF%9E%E9%A6%A8%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA&t=31&band_rank=5&Refer=top)
1. [尼泊尔山洪已致579死1924失联](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%87%B4579%E6%AD%BB1924%E5%A4%B1%E8%81%94%23&t=31&band_rank=6&Refer=top)
1. [英国姑娘打假中国留学生的切面包](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%A7%91%E5%A8%98%E6%89%93%E5%81%87%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E7%9A%84%E5%88%87%E9%9D%A2%E5%8C%85%23&t=31&band_rank=7&Refer=top)
1. [黄金](https://s.weibo.com//weibo?q=%E9%BB%84%E9%87%91&t=31&band_rank=8&Refer=top)
1. [青簪行天价版权](https://s.weibo.com//weibo?q=%E9%9D%92%E7%B0%AA%E8%A1%8C%E5%A4%A9%E4%BB%B7%E7%89%88%E6%9D%83&t=31&band_rank=9&Refer=top)
1. [低分班教师被安排耻辱合影官方致歉](https://s.weibo.com//weibo?q=%23%E4%BD%8E%E5%88%86%E7%8F%AD%E6%95%99%E5%B8%88%E8%A2%AB%E5%AE%89%E6%8E%92%E8%80%BB%E8%BE%B1%E5%90%88%E5%BD%B1%E5%AE%98%E6%96%B9%E8%87%B4%E6%AD%89%23&t=31&band_rank=10&Refer=top)
1. [吉隆口岸警察的笑让网友哭了](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E8%AD%A6%E5%AF%9F%E7%9A%84%E7%AC%91%E8%AE%A9%E7%BD%91%E5%8F%8B%E5%93%AD%E4%BA%86%23&t=31&band_rank=11&Refer=top)
1. [白敬亭没放过井柏然](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E6%B2%A1%E6%94%BE%E8%BF%87%E4%BA%95%E6%9F%8F%E7%84%B6%23&t=31&band_rank=12&Refer=top)
1. [失望性情感隔离](https://s.weibo.com//weibo?q=%E5%A4%B1%E6%9C%9B%E6%80%A7%E6%83%85%E6%84%9F%E9%9A%94%E7%A6%BB&t=31&band_rank=13&Refer=top)
1. [100万房贷月供可减少635元](https://s.weibo.com//weibo?q=%23100%E4%B8%87%E6%88%BF%E8%B4%B7%E6%9C%88%E4%BE%9B%E5%8F%AF%E5%87%8F%E5%B0%91635%E5%85%83%23&t=31&band_rank=14&Refer=top)
1. [2025年中国新生儿792万人](https://s.weibo.com//weibo?q=2025%E5%B9%B4%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%94%9F%E5%84%BF792%E4%B8%87%E4%BA%BA&t=31&band_rank=15&Refer=top)
1. [李思潼金鹿奖影后](https://s.weibo.com//weibo?q=%E6%9D%8E%E6%80%9D%E6%BD%BC%E9%87%91%E9%B9%BF%E5%A5%96%E5%BD%B1%E5%90%8E&t=31&band_rank=16&Refer=top)
1. [原来还有这么多小众的工作](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E8%BF%98%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B0%8F%E4%BC%97%E7%9A%84%E5%B7%A5%E4%BD%9C&t=31&band_rank=17&Refer=top)
1. [炫神LPL二路疑似被收回](https://s.weibo.com//weibo?q=%23%E7%82%AB%E7%A5%9ELPL%E4%BA%8C%E8%B7%AF%E7%96%91%E4%BC%BC%E8%A2%AB%E6%94%B6%E5%9B%9E%23&t=31&band_rank=18&Refer=top)
1. [蒋奇明檀健次金鹿奖影帝](https://s.weibo.com//weibo?q=%23%E8%92%8B%E5%A5%87%E6%98%8E%E6%AA%80%E5%81%A5%E6%AC%A1%E9%87%91%E9%B9%BF%E5%A5%96%E5%BD%B1%E5%B8%9D%23&t=31&band_rank=19&Refer=top)
1. [吉隆口岸泥石流可视化还原](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%8F%AF%E8%A7%86%E5%8C%96%E8%BF%98%E5%8E%9F%23&t=31&band_rank=20&Refer=top)
1. [女子怀孕6个月发现肺癌晚期](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%956%E4%B8%AA%E6%9C%88%E5%8F%91%E7%8E%B0%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%23&t=31&band_rank=21&Refer=top)
1. [原来男生的喜欢真的很明显](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E7%94%B7%E7%94%9F%E7%9A%84%E5%96%9C%E6%AC%A2%E7%9C%9F%E7%9A%84%E5%BE%88%E6%98%8E%E6%98%BE&t=31&band_rank=22&Refer=top)
1. [女子备孕放弃复查孕中期发现患癌](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%87%E5%AD%95%E6%94%BE%E5%BC%83%E5%A4%8D%E6%9F%A5%E5%AD%95%E4%B8%AD%E6%9C%9F%E5%8F%91%E7%8E%B0%E6%82%A3%E7%99%8C%23&t=31&band_rank=23&Refer=top)
1. [早春晴朗](https://s.weibo.com//weibo?q=%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97&t=31&band_rank=24&Refer=top)
1. [吉隆泥石流](https://s.weibo.com//weibo?q=%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81&t=31&band_rank=25&Refer=top)
1. [41岁爸爸长相太年轻与女儿像兄妹](https://s.weibo.com//weibo?q=%2341%E5%B2%81%E7%88%B8%E7%88%B8%E9%95%BF%E7%9B%B8%E5%A4%AA%E5%B9%B4%E8%BD%BB%E4%B8%8E%E5%A5%B3%E5%84%BF%E5%83%8F%E5%85%84%E5%A6%B9%23&t=31&band_rank=26&Refer=top)
1. [炫神力挺TheShy](https://s.weibo.com//weibo?q=%23%E7%82%AB%E7%A5%9E%E5%8A%9B%E6%8C%BATheShy%23&t=31&band_rank=27&Refer=top)
1. [美联储](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%81%94%E5%82%A8&t=31&band_rank=28&Refer=top)
1. [3分钟动画解析吉隆泥石流灾害全过程](https://s.weibo.com//weibo?q=%233%E5%88%86%E9%92%9F%E5%8A%A8%E7%94%BB%E8%A7%A3%E6%9E%90%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E7%81%BE%E5%AE%B3%E5%85%A8%E8%BF%87%E7%A8%8B%23&t=31&band_rank=29&Refer=top)
1. [吉隆泥石流出现罕见逆流而上现象](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%87%BA%E7%8E%B0%E7%BD%95%E8%A7%81%E9%80%86%E6%B5%81%E8%80%8C%E4%B8%8A%E7%8E%B0%E8%B1%A1%23&t=31&band_rank=30&Refer=top)
1. [金鹿奖获奖名单](https://s.weibo.com//weibo?q=%E9%87%91%E9%B9%BF%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=31&Refer=top)
1. [海南大学失联女研究生确认离世](https://s.weibo.com//weibo?q=%23%E6%B5%B7%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%A4%B1%E8%81%94%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E7%A1%AE%E8%AE%A4%E7%A6%BB%E4%B8%96%23&t=31&band_rank=32&Refer=top)
1. [吉隆村民与7名家人失联抱民警痛哭](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E6%9D%91%E6%B0%91%E4%B8%8E7%E5%90%8D%E5%AE%B6%E4%BA%BA%E5%A4%B1%E8%81%94%E6%8A%B1%E6%B0%91%E8%AD%A6%E7%97%9B%E5%93%AD%23&t=31&band_rank=33&Refer=top)
1. [在香港得到乖狗证的萨摩耶](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E9%A6%99%E6%B8%AF%E5%BE%97%E5%88%B0%E4%B9%96%E7%8B%97%E8%AF%81%E7%9A%84%E8%90%A8%E6%91%A9%E8%80%B6%23&t=31&band_rank=34&Refer=top)
1. [龙餐馆恭喜蒋奇明获影帝](https://s.weibo.com//weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E6%81%AD%E5%96%9C%E8%92%8B%E5%A5%87%E6%98%8E%E8%8E%B7%E5%BD%B1%E5%B8%9D%23&t=31&band_rank=35&Refer=top)
1. [房贷月供不超收入50%](https://s.weibo.com//weibo?q=%23%E6%88%BF%E8%B4%B7%E6%9C%88%E4%BE%9B%E4%B8%8D%E8%B6%85%E6%94%B6%E5%85%A550%25%23&t=31&band_rank=36&Refer=top)
1. [中超联赛](https://s.weibo.com//weibo?q=%E4%B8%AD%E8%B6%85%E8%81%94%E8%B5%9B&t=31&band_rank=37&Refer=top)
1. [开始以为阿姨上台来搞笑的](https://s.weibo.com//weibo?q=%23%E5%BC%80%E5%A7%8B%E4%BB%A5%E4%B8%BA%E9%98%BF%E5%A7%A8%E4%B8%8A%E5%8F%B0%E6%9D%A5%E6%90%9E%E7%AC%91%E7%9A%84%23&t=31&band_rank=38&Refer=top)
1. [李思潼首作即影后](https://s.weibo.com//weibo?q=%E6%9D%8E%E6%80%9D%E6%BD%BC%E9%A6%96%E4%BD%9C%E5%8D%B3%E5%BD%B1%E5%90%8E&t=31&band_rank=39&Refer=top)
1. [西藏泥石流第三天救援进展汇总](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E7%AC%AC%E4%B8%89%E5%A4%A9%E6%95%91%E6%8F%B4%E8%BF%9B%E5%B1%95%E6%B1%87%E6%80%BB%23&t=31&band_rank=40&Refer=top)
1. [尼泊尔受灾区域被大量泥浆覆盖](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%8F%97%E7%81%BE%E5%8C%BA%E5%9F%9F%E8%A2%AB%E5%A4%A7%E9%87%8F%E6%B3%A5%E6%B5%86%E8%A6%86%E7%9B%96%23&t=31&band_rank=41&Refer=top)
1. [羞辱式抓教育换不来成绩](https://s.weibo.com//weibo?q=%23%E7%BE%9E%E8%BE%B1%E5%BC%8F%E6%8A%93%E6%95%99%E8%82%B2%E6%8D%A2%E4%B8%8D%E6%9D%A5%E6%88%90%E7%BB%A9%23&t=31&band_rank=42&Refer=top)
1. [赵心童前7次决赛7次夺冠](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%89%8D7%E6%AC%A1%E5%86%B3%E8%B5%9B7%E6%AC%A1%E5%A4%BA%E5%86%A0%23&t=31&band_rank=43&Refer=top)
1. [美联储主席沃什就任后首次讲话](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%81%94%E5%82%A8%E4%B8%BB%E5%B8%AD%E6%B2%83%E4%BB%80%E5%B0%B1%E4%BB%BB%E5%90%8E%E9%A6%96%E6%AC%A1%E8%AE%B2%E8%AF%9D&t=31&band_rank=44&Refer=top)
1. [孔笙夸肖战](https://s.weibo.com//weibo?q=%23%E5%AD%94%E7%AC%99%E5%A4%B8%E8%82%96%E6%88%98%23&t=31&band_rank=45&Refer=top)
1. [个人住房贷款期限不超40年](https://s.weibo.com//weibo?q=%23%E4%B8%AA%E4%BA%BA%E4%BD%8F%E6%88%BF%E8%B4%B7%E6%AC%BE%E6%9C%9F%E9%99%90%E4%B8%8D%E8%B6%8540%E5%B9%B4%23&t=31&band_rank=46&Refer=top)
1. [小俞戈娅五杀](https://s.weibo.com//weibo?q=%E5%B0%8F%E4%BF%9E%E6%88%88%E5%A8%85%E4%BA%94%E6%9D%80&t=31&band_rank=47&Refer=top)
1. [朱志鑫现场激光笔](https://s.weibo.com//weibo?q=%E6%9C%B1%E5%BF%97%E9%91%AB%E7%8E%B0%E5%9C%BA%E6%BF%80%E5%85%89%E7%AC%94&t=31&band_rank=48&Refer=top)
1. [上海申花2比3山东泰山](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B3%E8%8A%B12%E6%AF%943%E5%B1%B1%E4%B8%9C%E6%B3%B0%E5%B1%B1%23&t=31&band_rank=49&Refer=top)
1. [躲过泥石流中国女游客发声](https://s.weibo.com//weibo?q=%23%E8%BA%B2%E8%BF%87%E6%B3%A5%E7%9F%B3%E6%B5%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%B8%B8%E5%AE%A2%E5%8F%91%E5%A3%B0%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
