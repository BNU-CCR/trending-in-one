# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-01 03:23:00

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
<!-- 最后更新时间 Thu Oct 01 2026 07:12:20 GMT+0800 (China Standard Time) -->

1. [天安门广场国庆升旗仪式](https://so.toutiao.com/search?keyword=天安门广场国庆升旗仪式)
1. [农民交公粮能否视同缴社保](https://so.toutiao.com/search?keyword=农民交公粮能否视同缴社保)
1. [清澈的爱，只为中国！](https://so.toutiao.com/search?keyword=清澈的爱，只为中国！)
1. [“摸金”攻占中小学校园](https://so.toutiao.com/search?keyword=“摸金”攻占中小学校园)
1. [美军灰溜溜走了 伊拉克全国放假4天](https://so.toutiao.com/search?keyword=美军灰溜溜走了%20伊拉克全国放假4天)
1. [解放军22架艘次军机舰船位台岛周边活动](https://so.toutiao.com/search?keyword=解放军22架艘次军机舰船位台岛周边活动)
1. [王楚钦林诗栋因伤退出WTT中国大满贯](https://so.toutiao.com/search?keyword=王楚钦林诗栋因伤退出WTT中国大满贯)
1. [男子用土豆当主食半年瘦25斤](https://so.toutiao.com/search?keyword=男子用土豆当主食半年瘦25斤)
1. [国庆畅游千里江山领略家国之美](https://so.toutiao.com/search?keyword=国庆畅游千里江山领略家国之美)
1. [唐湘龙：两岸统一已在有序进行中](https://so.toutiao.com/search?keyword=唐湘龙：两岸统一已在有序进行中)
1. [小龙虾的谣言别再信了](https://so.toutiao.com/search?keyword=小龙虾的谣言别再信了)
1. [闫妮又在金鹰奖微醺上了](https://so.toutiao.com/search?keyword=闫妮又在金鹰奖微醺上了)
1. [昆明4.3级地震有房屋破损](https://so.toutiao.com/search?keyword=昆明4.3级地震有房屋破损)
1. [买房还是租房先算清这笔账](https://so.toutiao.com/search?keyword=买房还是租房先算清这笔账)
1. [俄警告动用核武器保卫加里宁格勒](https://so.toutiao.com/search?keyword=俄警告动用核武器保卫加里宁格勒)
1. [第五人格中国队摘金](https://so.toutiao.com/search?keyword=第五人格中国队摘金)
1. [以总理称赴以航班飞行员“蓄意坠机”](https://so.toutiao.com/search?keyword=以总理称赴以航班飞行员“蓄意坠机”)
1. [国庆平均每天约3亿人次在路上](https://so.toutiao.com/search?keyword=国庆平均每天约3亿人次在路上)
1. [女子父亲突然离世邻居1分钟赶到帮忙](https://so.toutiao.com/search?keyword=女子父亲突然离世邻居1分钟赶到帮忙)
1. [《余红旧事》为何能击中观众](https://so.toutiao.com/search?keyword=《余红旧事》为何能击中观众)
1. [日媒：张本智和常私信搭讪女性](https://so.toutiao.com/search?keyword=日媒：张本智和常私信搭讪女性)
1. [国台办：世界上只有一个中国这是事实](https://so.toutiao.com/search?keyword=国台办：世界上只有一个中国这是事实)
1. [解放军为何再次亮剑黄岩岛](https://so.toutiao.com/search?keyword=解放军为何再次亮剑黄岩岛)
1. [杨紫未拿奖从容离场状态松弛](https://so.toutiao.com/search?keyword=杨紫未拿奖从容离场状态松弛)
1. [名古屋市长就亚运会运作问题致歉](https://so.toutiao.com/search?keyword=名古屋市长就亚运会运作问题致歉)
1. [揭秘“台独”分子沈伯洋](https://so.toutiao.com/search?keyword=揭秘“台独”分子沈伯洋)
1. [人民币这波上涨靠的是什么](https://so.toutiao.com/search?keyword=人民币这波上涨靠的是什么)
1. [问界正式接入宝马/奔驰超充网络](https://so.toutiao.com/search?keyword=问界正式接入宝马/奔驰超充网络)
1. [高市早苗的“双面日本”](https://so.toutiao.com/search?keyword=高市早苗的“双面日本”)
1. [人民币升值中国出口为何还能增长](https://so.toutiao.com/search?keyword=人民币升值中国出口为何还能增长)
1. [油价高位资金却在疯狂买入看跌期权](https://so.toutiao.com/search?keyword=油价高位资金却在疯狂买入看跌期权)
1. [马斯克谈及AI一秒钟高情商改口“SI”](https://so.toutiao.com/search?keyword=马斯克谈及AI一秒钟高情商改口“SI”)
1. [客机紧急降落沙特 机长副驾受伤入院](https://so.toutiao.com/search?keyword=客机紧急降落沙特%20机长副驾受伤入院)
1. [王钰栋：有机会肯定会出国留洋](https://so.toutiao.com/search?keyword=王钰栋：有机会肯定会出国留洋)
1. [拜合拉木今年2场半决赛均和对方冲突](https://so.toutiao.com/search?keyword=拜合拉木今年2场半决赛均和对方冲突)
1. [长征中最小的战士年仅9岁](https://so.toutiao.com/search?keyword=长征中最小的战士年仅9岁)
1. [韩国为何不满乌克兰公开移交朝鲜战俘](https://so.toutiao.com/search?keyword=韩国为何不满乌克兰公开移交朝鲜战俘)
1. [国台办回应《兰香如故》在台湾爆火](https://so.toutiao.com/search?keyword=国台办回应《兰香如故》在台湾爆火)
1. [胖东来将实行每天7小时工作制](https://so.toutiao.com/search?keyword=胖东来将实行每天7小时工作制)
1. [东部战区官兵深切缅怀革命先烈](https://so.toutiao.com/search?keyword=东部战区官兵深切缅怀革命先烈)
1. [中方回应日方有关核武器狂言](https://so.toutiao.com/search?keyword=中方回应日方有关核武器狂言)
1. [俄罗斯掐住了全球柴油命门吗](https://so.toutiao.com/search?keyword=俄罗斯掐住了全球柴油命门吗)
1. [A股三季度复盘：钱和情绪都在退潮](https://so.toutiao.com/search?keyword=A股三季度复盘：钱和情绪都在退潮)
1. [武汉交警发布国庆烟花活动出行攻略](https://so.toutiao.com/search?keyword=武汉交警发布国庆烟花活动出行攻略)
1. [成都街头上新 一路繁花迎国庆](https://so.toutiao.com/search?keyword=成都街头上新%20一路繁花迎国庆)
1. [泰国居民在被水淹没的街道上撒网捕鱼](https://so.toutiao.com/search?keyword=泰国居民在被水淹没的街道上撒网捕鱼)
1. [国庆新能源车充电高峰将至](https://so.toutiao.com/search?keyword=国庆新能源车充电高峰将至)
1. [伊朗说就战事问题收到了美方回应](https://so.toutiao.com/search?keyword=伊朗说就战事问题收到了美方回应)
1. [吴洪娇成就女子800米亚洲金满贯](https://so.toutiao.com/search?keyword=吴洪娇成就女子800米亚洲金满贯)
1. [六大行集体官宣落地房贷贴息](https://so.toutiao.com/search?keyword=六大行集体官宣落地房贷贴息)
1. [农民交公粮能否视同缴社保为何引热议](https://so.toutiao.com/search?keyword=农民交公粮能否视同缴社保为何引热议)
1. [专家：美军撤离伊拉克以色列最担忧](https://so.toutiao.com/search?keyword=专家：美军撤离伊拉克以色列最担忧)
1. [王钰栋单刀破门打破40年魔咒](https://so.toutiao.com/search?keyword=王钰栋单刀破门打破40年魔咒)
1. [邓亚萍：国人没法接受我们输日本队](https://so.toutiao.com/search?keyword=邓亚萍：国人没法接受我们输日本队)
1. [松岛辉空：张本说他一定能赢王楚钦](https://so.toutiao.com/search?keyword=松岛辉空：张本说他一定能赢王楚钦)
1. [谁会替代赛力斯以前的生态位](https://so.toutiao.com/search?keyword=谁会替代赛力斯以前的生态位)
1. [国足亚运队主帅：对球队表现满意](https://so.toutiao.com/search?keyword=国足亚运队主帅：对球队表现满意)
1. [中国举重队教练：朝鲜举重实力惊人](https://so.toutiao.com/search?keyword=中国举重队教练：朝鲜举重实力惊人)
1. [沃洛金连任俄国家杜马主席](https://so.toutiao.com/search?keyword=沃洛金连任俄国家杜马主席)
1. [运动猝死四大误区](https://so.toutiao.com/search?keyword=运动猝死四大误区)
1. [中美对等降税如何变成产能回流杠杆](https://so.toutiao.com/search?keyword=中美对等降税如何变成产能回流杠杆)
1. [中华人民共和国成立77周年招待会举行](https://so.toutiao.com/search?keyword=中华人民共和国成立77周年招待会举行)
1. [朋友圈的贷款广告为啥突然消失了](https://so.toutiao.com/search?keyword=朋友圈的贷款广告为啥突然消失了)
1. [近期A股震荡的原因及前景展望](https://so.toutiao.com/search?keyword=近期A股震荡的原因及前景展望)
1. [柯淳闫妮在一起没有一秒是不微醺的](https://so.toutiao.com/search?keyword=柯淳闫妮在一起没有一秒是不微醺的)
1. [张玉宁：中国队可昂首挺胸离开球场](https://so.toutiao.com/search?keyword=张玉宁：中国队可昂首挺胸离开球场)
1. [亚运举重赛场为何纪录成为“易碎品”](https://so.toutiao.com/search?keyword=亚运举重赛场为何纪录成为“易碎品”)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Oct 01 2026 03:14:06 GMT+0800 (China Standard Time) -->

1. [杜淳妻子王灿被骗灌肠](https://www.zhihu.com/search?q=%E6%9D%9C%E6%B7%B3%E5%A6%BB%E5%AD%90%E7%8E%8B%E7%81%BF%E8%A2%AB%E9%AA%97%E7%81%8C%E8%82%A0)
1. [武契奇宣布辞职](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A5%91%E5%A5%87%E5%AE%A3%E5%B8%83%E8%BE%9E%E8%81%8C)
1. [东航通报空姐下跪事件](https://www.zhihu.com/search?q=%E4%B8%9C%E8%88%AA%E9%80%9A%E6%8A%A5%E7%A9%BA%E5%A7%90%E4%B8%8B%E8%B7%AA%E4%BA%8B%E4%BB%B6)
1. [王楚钦林诗栋退出 WTT 中国大满贯](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9E%97%E8%AF%97%E6%A0%8B%E9%80%80%E5%87%BA%20WTT%20%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF)
1. [康奈尔大学7名男生被控轮奸](https://www.zhihu.com/search?q=%E5%BA%B7%E5%A5%88%E5%B0%94%E5%A4%A7%E5%AD%A67%E5%90%8D%E7%94%B7%E7%94%9F%E8%A2%AB%E6%8E%A7%E8%BD%AE%E5%A5%B8)
1. [张家齐妈妈公开念家书批评女儿](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E5%85%AC%E5%BC%80%E5%BF%B5%E5%AE%B6%E4%B9%A6%E6%89%B9%E8%AF%84%E5%A5%B3%E5%84%BF)
1. [曝国乒大批资深陪练辞职](https://www.zhihu.com/search?q=%E6%9B%9D%E5%9B%BD%E4%B9%92%E5%A4%A7%E6%89%B9%E8%B5%84%E6%B7%B1%E9%99%AA%E7%BB%83%E8%BE%9E%E8%81%8C)
1. [林诗栋 4-0 王楚钦夺金](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B%204-0%20%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E9%87%91)
1. [江苏高考作文《衬衫的价格为 9 磅 15 便士》爆火](https://www.zhihu.com/search?q=%E6%B1%9F%E8%8B%8F%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%E3%80%8A%E8%A1%AC%E8%A1%AB%E7%9A%84%E4%BB%B7%E6%A0%BC%E4%B8%BA%209%20%E7%A3%85%2015%20%E4%BE%BF%E5%A3%AB%E3%80%8B%E7%88%86%E7%81%AB)
1. [居民房贷贴息政策 10 月 1 日起实施](https://www.zhihu.com/search?q=%E5%B1%85%E6%B0%91%E6%88%BF%E8%B4%B7%E8%B4%B4%E6%81%AF%E6%94%BF%E7%AD%96%2010%20%E6%9C%88%201%20%E6%97%A5%E8%B5%B7%E5%AE%9E%E6%96%BD)
1. [中国U23男足1-2韩国](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BDU23%E7%94%B7%E8%B6%B31-2%E9%9F%A9%E5%9B%BD)
1. [王楚钦：不知道为什么就是感觉累](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%EF%BC%9A%E4%B8%8D%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B0%B1%E6%98%AF%E6%84%9F%E8%A7%89%E7%B4%AF)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Oct 01 2026 03:23:00 GMT+0800 (China Standard Time) -->

1. [迪拜航空客机发出紧急信号返航，被曝俄裔机长与乌克兰裔副驾发生激烈争吵，还有哪些信息值得关注？](https://www.zhihu.com/question/2088649572151194400)
1. [为什么GPT-6 Astra玩《我的世界》被炸毁进度后连续数小时种植土豆？这种异常行为怎么产生的？](https://www.zhihu.com/question/2083989447276762600)
1. [如何评价 OpenAI 发布的 GPT-6.1 sol？](https://www.zhihu.com/question/2088438691786246000)
1. [鸿蒙装机量突破 9000 万台，预计年底破亿，对移动操作系统格局有何影响？](https://www.zhihu.com/question/2088353923895773000)
1. [如何看待江苏高考接近满分记叙文《衬衫的价格为 9 镑 15 便士》火了，为啥会引发大家的共鸣？](https://www.zhihu.com/question/2088295452206523400)
1. [我国最好吃的淡水鱼是什么鱼？](https://www.zhihu.com/question/570224987)
1. [太阳系是扁平的，那向上或向下飞，不就可以快速飞出太阳系了吗？](https://www.zhihu.com/question/1888618640896657200)
1. [为啥到底谁是中上985，谁是中下985，吵得不可开交，但几乎没人吵谁是中上211，谁是中下211？](https://www.zhihu.com/question/2087821422802507500)
1. [电脑删除的文件，到底去哪了？](https://www.zhihu.com/question/2079914321300157700)
1. [如何看待年轻人花一万二买房去大兴安岭隐居，折合下来一平方米仅一百块钱？这种生活方式怎么样？](https://www.zhihu.com/question/2087955133321761300)
1. [《火影忍者》中的我爱罗出场强得不行，后期为什么感觉变弱了？](https://www.zhihu.com/question/585489155)
1. [如何评价 OpenAI 推出个人 AI 助理Dot，可全天候自主执行任务并连接 4000 多款应用？](https://www.zhihu.com/question/2088542369264005400)
1. [虫子为啥不进化的可爱一点，这样人类就不忍心踩死了？](https://www.zhihu.com/question/2088262311232235500)
1. [能把一个刺头从个人贡献者培养成为团队管理者吗？?](https://www.zhihu.com/question/1963395783874295800)
1. [一个人开车跑高速犯困了，除了喝红牛和掐大腿，还有什么真正有效的提神方法？](https://www.zhihu.com/question/2084653683766191600)
1. [曾风靡全国的五笔为什么逐渐被拼音输入法取代了？](https://www.zhihu.com/question/561899452)
1. [怎么看媒体曝小米大模型负责人罗福莉晋升至 22 级？](https://www.zhihu.com/question/2088219922597991200)
1. [为什么进化中，没有将妊娠和哺乳工作分配给两性，而都由雌性进行？](https://www.zhihu.com/question/604018830)
1. [如何看待Manus重回中国市场并发布Manus 2.0和个人智能助理Cue？](https://www.zhihu.com/question/2088064847334346800)
1. [9 月 30 日房地产板块集体跳水，万科 A、深物业 A 跌停，招商蛇口等纷纷下挫，发生了什么？](https://www.zhihu.com/question/2088568271909774600)
1. [张本智和被文春爆出私下频繁搭讪女性，酒后会爆粗，是真的吗？具体是咋回事？](https://www.zhihu.com/question/2088684813393682700)
1. [云南昆明市盘龙区发生 4.3 级地震，震源深度 10 千米，目前情况如何？你那里有震感吗？](https://www.zhihu.com/question/2088701625938306600)
1. [如何辨认身边的有大智慧的人？](https://www.zhihu.com/question/309377893)
1. [醉酒男子打车多次要求中途下车后溺亡，家属向司机平台索赔30万被驳回，如何解读这一判决？](https://www.zhihu.com/question/2088231915631243500)
1. [地球上的所有动物都没有穿衣服，还不是活得好好的，为什么只有我们人类才穿衣服，难道不穿衣服就活不了吗？](https://www.zhihu.com/question/2082064671708922600)
1. [为啥以前国营大厂会有保卫科这个机构？](https://www.zhihu.com/question/2084224840827921700)
1. [黑胡子导弹是高超音速导弹吗？](https://www.zhihu.com/question/2088055678023758300)
1. [网友吐槽「毫无人性关怀的大厂却总致力于打造出充满人性光辉的产品」，你怎么看待这个观点？](https://www.zhihu.com/question/2087300723268481300)
1. [如何评价「原神」7.1版本的幽境危战？](https://www.zhihu.com/question/2088572448577007900)
1. [国乒亚运会参加7项，拿下6金4银，仅男团未能夺金，如何评价本届亚运会国乒战绩？](https://www.zhihu.com/question/2088001437158720300)

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
<!-- 最后更新时间 Thu Oct 01 2026 03:29:15 GMT+0800 (China Standard Time) -->

1. [国庆77周年招待会](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E5%BA%8677%E5%91%A8%E5%B9%B4%E6%8B%9B%E5%BE%85%E4%BC%9A%23&Refer=new_time)
1. [迪拜航空确认航班发生事故](https://s.weibo.com//weibo?q=%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E7%A1%AE%E8%AE%A4%E8%88%AA%E7%8F%AD%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85&t=31&band_rank=1&Refer=top)
1. [副机长刺伤机长迪拜航空客机失控俯冲](https://s.weibo.com//weibo?q=%23%E5%89%AF%E6%9C%BA%E9%95%BF%E5%88%BA%E4%BC%A4%E6%9C%BA%E9%95%BF%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E5%AE%A2%E6%9C%BA%E5%A4%B1%E6%8E%A7%E4%BF%AF%E5%86%B2%23&t=31&band_rank=2&Refer=top)
1. [少年儿童高唱我们是共产主义接班人](https://s.weibo.com//weibo?q=%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E9%AB%98%E5%94%B1%E6%88%91%E4%BB%AC%E6%98%AF%E5%85%B1%E4%BA%A7%E4%B8%BB%E4%B9%89%E6%8E%A5%E7%8F%AD%E4%BA%BA&t=31&band_rank=3&Refer=top)
1. [飞天奖提名名单](https://s.weibo.com//weibo?q=%E9%A3%9E%E5%A4%A9%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95&t=31&band_rank=4&Refer=top)
1. [兰香如故三小姐侯爷是一见钟情](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E4%B8%89%E5%B0%8F%E5%A7%90%E4%BE%AF%E7%88%B7%E6%98%AF%E4%B8%80%E8%A7%81%E9%92%9F%E6%83%85%23&t=31&band_rank=5&Refer=top)
1. [奚梦瑶给女儿买了可爱版菜篮子](https://s.weibo.com//weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%BB%99%E5%A5%B3%E5%84%BF%E4%B9%B0%E4%BA%86%E5%8F%AF%E7%88%B1%E7%89%88%E8%8F%9C%E7%AF%AE%E5%AD%90%23&t=31&band_rank=6&Refer=top)
1. [只有李一桐有艺名](https://s.weibo.com//weibo?q=%23%E5%8F%AA%E6%9C%89%E6%9D%8E%E4%B8%80%E6%A1%90%E6%9C%89%E8%89%BA%E5%90%8D%23&t=31&band_rank=7&Refer=top)
1. [迪拜航空客机事故最新画面](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E5%AE%A2%E6%9C%BA%E4%BA%8B%E6%95%85%E6%9C%80%E6%96%B0%E7%94%BB%E9%9D%A2%23&t=31&band_rank=8&Refer=top)
1. [郭晓东道歉](https://s.weibo.com//weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%E9%81%93%E6%AD%89%23&t=31&band_rank=9&Refer=top)
1. [马斯克称人人都会有全民高收入](https://s.weibo.com//weibo?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E4%BA%BA%E4%BA%BA%E9%83%BD%E4%BC%9A%E6%9C%89%E5%85%A8%E6%B0%91%E9%AB%98%E6%94%B6%E5%85%A5&t=31&band_rank=10&Refer=top)
1. [华为 赛力斯](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%20%E8%B5%9B%E5%8A%9B%E6%96%AF&t=31&band_rank=11&Refer=top)
1. [踹翻孕妇电动车当事司机发声](https://s.weibo.com//weibo?q=%23%E8%B8%B9%E7%BF%BB%E5%AD%95%E5%A6%87%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%BD%93%E4%BA%8B%E5%8F%B8%E6%9C%BA%E5%8F%91%E5%A3%B0%23&t=31&band_rank=12&Refer=top)
1. [为什么不喜欢全民发钱](https://s.weibo.com//weibo?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%85%A8%E6%B0%91%E5%8F%91%E9%92%B1&t=31&band_rank=13&Refer=top)
1. [陈浩民妻子拿雅典娜事件教育孩子](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%B5%A9%E6%B0%91%E5%A6%BB%E5%AD%90%E6%8B%BF%E9%9B%85%E5%85%B8%E5%A8%9C%E4%BA%8B%E4%BB%B6%E6%95%99%E8%82%B2%E5%AD%A9%E5%AD%90%23&t=31&band_rank=14&Refer=top)
1. [这种大大方方真的招人喜欢](https://s.weibo.com//weibo?q=%E8%BF%99%E7%A7%8D%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%E7%9C%9F%E7%9A%84%E6%8B%9B%E4%BA%BA%E5%96%9C%E6%AC%A2&t=31&band_rank=15&Refer=top)
1. [国庆节](https://s.weibo.com//weibo?q=%E5%9B%BD%E5%BA%86%E8%8A%82&t=31&band_rank=16&Refer=top)
1. [中国首位金牌电竞女选手桃晚安](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%BD%8D%E9%87%91%E7%89%8C%E7%94%B5%E7%AB%9E%E5%A5%B3%E9%80%89%E6%89%8B%E6%A1%83%E6%99%9A%E5%AE%89%23&t=31&band_rank=17&Refer=top)
1. [美人余定档](https://s.weibo.com//weibo?q=%E7%BE%8E%E4%BA%BA%E4%BD%99%E5%AE%9A%E6%A1%A3&t=31&band_rank=18&Refer=top)
1. [我家那闺女 剪辑](https://s.weibo.com//weibo?q=%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%20%E5%89%AA%E8%BE%91&t=31&band_rank=19&Refer=top)
1. [穆欣月首位亚运电竞女子冠军](https://s.weibo.com//weibo?q=%23%E7%A9%86%E6%AC%A3%E6%9C%88%E9%A6%96%E4%BD%8D%E4%BA%9A%E8%BF%90%E7%94%B5%E7%AB%9E%E5%A5%B3%E5%AD%90%E5%86%A0%E5%86%9B%23&t=31&band_rank=20&Refer=top)
1. [当女生频繁做美甲之后](https://s.weibo.com//weibo?q=%23%E5%BD%93%E5%A5%B3%E7%94%9F%E9%A2%91%E7%B9%81%E5%81%9A%E7%BE%8E%E7%94%B2%E4%B9%8B%E5%90%8E%23&t=31&band_rank=21&Refer=top)
1. [父亲突然离世邻居1分钟赶到帮忙](https://s.weibo.com//weibo?q=%23%E7%88%B6%E4%BA%B2%E7%AA%81%E7%84%B6%E7%A6%BB%E4%B8%96%E9%82%BB%E5%B1%851%E5%88%86%E9%92%9F%E8%B5%B6%E5%88%B0%E5%B8%AE%E5%BF%99%23&t=31&band_rank=22&Refer=top)
1. [昆明地震](https://s.weibo.com//weibo?q=%E6%98%86%E6%98%8E%E5%9C%B0%E9%9C%87&t=31&band_rank=23&Refer=top)
1. [中国体育代表团151金67银59铜](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E8%82%B2%E4%BB%A3%E8%A1%A8%E5%9B%A2151%E9%87%9167%E9%93%B659%E9%93%9C%23&t=31&band_rank=24&Refer=top)
1. [沙玥儿 陈鹤文](https://s.weibo.com//weibo?q=%E6%B2%99%E7%8E%A5%E5%84%BF%20%E9%99%88%E9%B9%A4%E6%96%87&t=31&band_rank=25&Refer=top)
1. [第五人格中国队摘金](https://s.weibo.com//weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E4%B8%AD%E5%9B%BD%E9%98%9F%E6%91%98%E9%87%91%23&t=31&band_rank=26&Refer=top)
1. [2078年00后老了以后](https://s.weibo.com//weibo?q=2078%E5%B9%B400%E5%90%8E%E8%80%81%E4%BA%86%E4%BB%A5%E5%90%8E&t=31&band_rank=27&Refer=top)
1. [兰香如故为什么停更](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E4%B8%BA%E4%BB%80%E4%B9%88%E5%81%9C%E6%9B%B4&t=31&band_rank=28&Refer=top)
1. [桃晚安回应亚运会夺金](https://s.weibo.com//weibo?q=%E6%A1%83%E6%99%9A%E5%AE%89%E5%9B%9E%E5%BA%94%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%A4%BA%E9%87%91&t=31&band_rank=29&Refer=top)
1. [闪身步学明白把人生闪出去了](https://s.weibo.com//weibo?q=%E9%97%AA%E8%BA%AB%E6%AD%A5%E5%AD%A6%E6%98%8E%E7%99%BD%E6%8A%8A%E4%BA%BA%E7%94%9F%E9%97%AA%E5%87%BA%E5%8E%BB%E4%BA%86&t=31&band_rank=30&Refer=top)
1. [金龟子来家齐家这期形成鲜明对比](https://s.weibo.com//weibo?q=%23%E9%87%91%E9%BE%9F%E5%AD%90%E6%9D%A5%E5%AE%B6%E9%BD%90%E5%AE%B6%E8%BF%99%E6%9C%9F%E5%BD%A2%E6%88%90%E9%B2%9C%E6%98%8E%E5%AF%B9%E6%AF%94%23&t=31&band_rank=31&Refer=top)
1. [赛力斯华为合作模式变动](https://s.weibo.com//weibo?q=%E8%B5%9B%E5%8A%9B%E6%96%AF%E5%8D%8E%E4%B8%BA%E5%90%88%E4%BD%9C%E6%A8%A1%E5%BC%8F%E5%8F%98%E5%8A%A8&t=31&band_rank=32&Refer=top)
1. [张家齐自曝小时候恨妈妈](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%87%AA%E6%9B%9D%E5%B0%8F%E6%97%B6%E5%80%99%E6%81%A8%E5%A6%88%E5%A6%88&t=31&band_rank=33&Refer=top)
1. [桃晚安不愧是中国姑娘](https://s.weibo.com//weibo?q=%E6%A1%83%E6%99%9A%E5%AE%89%E4%B8%8D%E6%84%A7%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%A7%91%E5%A8%98&t=31&band_rank=34&Refer=top)
1. [年锦回应亚运会夺金](https://s.weibo.com//weibo?q=%23%E5%B9%B4%E9%94%A6%E5%9B%9E%E5%BA%94%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%A4%BA%E9%87%91%23&t=31&band_rank=35&Refer=top)
1. [张家齐不靠辅助就跳这么高](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%B8%8D%E9%9D%A0%E8%BE%85%E5%8A%A9%E5%B0%B1%E8%B7%B3%E8%BF%99%E4%B9%88%E9%AB%98%23&t=31&band_rank=36&Refer=top)
1. [林志玲容貌和气质都大不如前了](https://s.weibo.com//weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B2%E5%AE%B9%E8%B2%8C%E5%92%8C%E6%B0%94%E8%B4%A8%E9%83%BD%E5%A4%A7%E4%B8%8D%E5%A6%82%E5%89%8D%E4%BA%86%23&t=31&band_rank=37&Refer=top)
1. [迪拜航空副机长持刀刺伤机长](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E5%89%AF%E6%9C%BA%E9%95%BF%E6%8C%81%E5%88%80%E5%88%BA%E4%BC%A4%E6%9C%BA%E9%95%BF%23&t=31&band_rank=38&Refer=top)
1. [中科大博士涌向体制内](https://s.weibo.com//weibo?q=%E4%B8%AD%E7%A7%91%E5%A4%A7%E5%8D%9A%E5%A3%AB%E6%B6%8C%E5%90%91%E4%BD%93%E5%88%B6%E5%86%85&t=31&band_rank=39&Refer=top)
1. [刘昊然给胡先煦游戏账号充值1300元](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E7%BB%99%E8%83%A1%E5%85%88%E7%85%A6%E6%B8%B8%E6%88%8F%E8%B4%A6%E5%8F%B7%E5%85%85%E5%80%BC1300%E5%85%83%23&t=31&band_rank=40&Refer=top)
1. [广州白鹅潭万象城开业](https://s.weibo.com//weibo?q=%23%E5%B9%BF%E5%B7%9E%E7%99%BD%E9%B9%85%E6%BD%AD%E4%B8%87%E8%B1%A1%E5%9F%8E%E5%BC%80%E4%B8%9A%23&t=31&band_rank=41&Refer=top)
1. [罗云熙唯一领衔主演](https://s.weibo.com//weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E5%94%AF%E4%B8%80%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%23&t=31&band_rank=42&Refer=top)
1. [电视剧 二婚男主](https://s.weibo.com//weibo?q=%E7%94%B5%E8%A7%86%E5%89%A7%20%E4%BA%8C%E5%A9%9A%E7%94%B7%E4%B8%BB&t=31&band_rank=43&Refer=top)
1. [迪拜航空客机事件为恐怖袭击未遂](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E5%AE%A2%E6%9C%BA%E4%BA%8B%E4%BB%B6%E4%B8%BA%E6%81%90%E6%80%96%E8%A2%AD%E5%87%BB%E6%9C%AA%E9%81%82%23&t=31&band_rank=44&Refer=top)
1. [上班基础下班就不基础](https://s.weibo.com//weibo?q=%E4%B8%8A%E7%8F%AD%E5%9F%BA%E7%A1%80%E4%B8%8B%E7%8F%AD%E5%B0%B1%E4%B8%8D%E5%9F%BA%E7%A1%80&t=31&band_rank=45&Refer=top)
1. [白敬亭胡先煦王楚然出片执念](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E8%83%A1%E5%85%88%E7%85%A6%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%87%BA%E7%89%87%E6%89%A7%E5%BF%B5%23&t=31&band_rank=46&Refer=top)
1. [飞天奖](https://s.weibo.com//weibo?q=%E9%A3%9E%E5%A4%A9%E5%A5%96&t=31&band_rank=47&Refer=top)
1. [曝利剑玫瑰导演没报飞天奖](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%88%A9%E5%89%91%E7%8E%AB%E7%91%B0%E5%AF%BC%E6%BC%94%E6%B2%A1%E6%8A%A5%E9%A3%9E%E5%A4%A9%E5%A5%96%23&t=31&band_rank=48&Refer=top)
1. [人民日报独家对话马斯克](https://s.weibo.com//weibo?q=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E7%8B%AC%E5%AE%B6%E5%AF%B9%E8%AF%9D%E9%A9%AC%E6%96%AF%E5%85%8B&t=31&band_rank=49&Refer=top)
1. [胃癌在早期没有明显症状](https://s.weibo.com//weibo?q=%23%E8%83%83%E7%99%8C%E5%9C%A8%E6%97%A9%E6%9C%9F%E6%B2%A1%E6%9C%89%E6%98%8E%E6%98%BE%E7%97%87%E7%8A%B6%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
