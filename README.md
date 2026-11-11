# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-11 07:24:40

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
<!-- 最后更新时间 Wed Nov 11 2026 07:41:30 GMT+0800 (China Standard Time) -->

1. [立陶宛要求所谓“台湾代表处”改名](https://so.toutiao.com/search?keyword=立陶宛要求所谓“台湾代表处”改名)
1. [梁家辉金鸡影帝](https://so.toutiao.com/search?keyword=梁家辉金鸡影帝)
1. [长征故事蕴含的制胜之道](https://so.toutiao.com/search?keyword=长征故事蕴含的制胜之道)
1. [我军飞行员凌晨4点战斗起飞对抗外机](https://so.toutiao.com/search?keyword=我军飞行员凌晨4点战斗起飞对抗外机)
1. [高叶金鸡影后](https://so.toutiao.com/search?keyword=高叶金鸡影后)
1. [英伟达两日累跌超9%](https://so.toutiao.com/search?keyword=英伟达两日累跌超9%)
1. [人民日报评画地为牢出圈](https://so.toutiao.com/search?keyword=人民日报评画地为牢出圈)
1. [扬州地震](https://so.toutiao.com/search?keyword=扬州地震)
1. [梁家辉幽默回应独自坐高铁](https://so.toutiao.com/search?keyword=梁家辉幽默回应独自坐高铁)
1. [路虎为何要在荷兰起诉比亚迪](https://so.toutiao.com/search?keyword=路虎为何要在荷兰起诉比亚迪)
1. [湖南株洲一物流仓库突发大火不实](https://so.toutiao.com/search?keyword=湖南株洲一物流仓库突发大火不实)
1. [梁家辉举奖杯高喊咱们开工了](https://so.toutiao.com/search?keyword=梁家辉举奖杯高喊咱们开工了)
1. [胖东来“日本产洗发水”疑云](https://so.toutiao.com/search?keyword=胖东来“日本产洗发水”疑云)
1. [怎么看俄军机降落以色列机场](https://so.toutiao.com/search?keyword=怎么看俄军机降落以色列机场)
1. [梁家辉集齐三金影帝大满贯](https://so.toutiao.com/search?keyword=梁家辉集齐三金影帝大满贯)
1. [男子出轨猝死妻子索赔百万 法院判了](https://so.toutiao.com/search?keyword=男子出轨猝死妻子索赔百万%20法院判了)
1. [晨起后有这4个习惯的人更长寿](https://so.toutiao.com/search?keyword=晨起后有这4个习惯的人更长寿)
1. [吴京穿着那件熟悉的西装亮相金鸡奖](https://so.toutiao.com/search?keyword=吴京穿着那件熟悉的西装亮相金鸡奖)
1. [我国幼小初学龄人口已达峰](https://so.toutiao.com/search?keyword=我国幼小初学龄人口已达峰)
1. [一碗免费面咋把隔壁小店逼到想搬家](https://so.toutiao.com/search?keyword=一碗免费面咋把隔壁小店逼到想搬家)
1. [印度一节日众人俯卧让牛群从背上踩过](https://so.toutiao.com/search?keyword=印度一节日众人俯卧让牛群从背上踩过)
1. [唐湘龙谈厦金大桥厦门段合龙](https://so.toutiao.com/search?keyword=唐湘龙谈厦金大桥厦门段合龙)
1. [女子称住酒店发现被子上有干结粪便](https://so.toutiao.com/search?keyword=女子称住酒店发现被子上有干结粪便)
1. [茅台主动放弃稀缺性了吗](https://so.toutiao.com/search?keyword=茅台主动放弃稀缺性了吗)
1. [伊朗革命卫队新建“导弹城”亮相](https://so.toutiao.com/search?keyword=伊朗革命卫队新建“导弹城”亮相)
1. [央视曝光专坑老年人的保健品骗局](https://so.toutiao.com/search?keyword=央视曝光专坑老年人的保健品骗局)
1. [《给阿嬷的情书》金鸡奖评委会特别奖](https://so.toutiao.com/search?keyword=《给阿嬷的情书》金鸡奖评委会特别奖)
1. [男子回应买彩票30元中了1330万](https://so.toutiao.com/search?keyword=男子回应买彩票30元中了1330万)
1. [蛋价上涨和最强厄尔尼诺有啥关系](https://so.toutiao.com/search?keyword=蛋价上涨和最强厄尔尼诺有啥关系)
1. [茅台回应是否不再稀缺](https://so.toutiao.com/search?keyword=茅台回应是否不再稀缺)
1. [两男子靠守号喜获3000万](https://so.toutiao.com/search?keyword=两男子靠守号喜获3000万)
1. [专家谈今年双十一的三大消费变化](https://so.toutiao.com/search?keyword=专家谈今年双十一的三大消费变化)
1. [比亚迪欧洲“撞墙”](https://so.toutiao.com/search?keyword=比亚迪欧洲“撞墙”)
1. [溅湿路人强行撞车逃离司机道歉](https://so.toutiao.com/search?keyword=溅湿路人强行撞车逃离司机道歉)
1. [人民空军成立77周年](https://so.toutiao.com/search?keyword=人民空军成立77周年)
1. [70亩甘蔗被大风刮倒村支书急寻买家](https://so.toutiao.com/search?keyword=70亩甘蔗被大风刮倒村支书急寻买家)
1. [长沙三部门连夜查处“坑老”药房](https://so.toutiao.com/search?keyword=长沙三部门连夜查处“坑老”药房)
1. [黄金价格何时会大涨](https://so.toutiao.com/search?keyword=黄金价格何时会大涨)
1. [美为何要给AI芯片戴“电子脚镣”](https://so.toutiao.com/search?keyword=美为何要给AI芯片戴“电子脚镣”)
1. [菲防长频频反华 总统为何一言不发](https://so.toutiao.com/search?keyword=菲防长频频反华%20总统为何一言不发)
1. [辽篮结束假期备战俱乐部杯](https://so.toutiao.com/search?keyword=辽篮结束假期备战俱乐部杯)
1. [中国大型无人机究竟有多大](https://so.toutiao.com/search?keyword=中国大型无人机究竟有多大)
1. [湖南28岁男子泰国失联已逾4个月](https://so.toutiao.com/search?keyword=湖南28岁男子泰国失联已逾4个月)
1. [国家发改委：切实维护好教育公平](https://so.toutiao.com/search?keyword=国家发改委：切实维护好教育公平)
1. [俄军机罕见降落以色列机场](https://so.toutiao.com/search?keyword=俄军机罕见降落以色列机场)
1. [郭涛儿子石头亮相金鸡红毯](https://so.toutiao.com/search?keyword=郭涛儿子石头亮相金鸡红毯)
1. [高天意荣膺中超本土助攻王](https://so.toutiao.com/search?keyword=高天意荣膺中超本土助攻王)
1. [3000架无人机点亮夜空致敬人民空军](https://so.toutiao.com/search?keyword=3000架无人机点亮夜空致敬人民空军)
1. [刘昊然：在金鸡奖能干的活全干完了](https://so.toutiao.com/search?keyword=刘昊然：在金鸡奖能干的活全干完了)
1. [茅台16款产品将采用全天动态补货模式](https://so.toutiao.com/search?keyword=茅台16款产品将采用全天动态补货模式)
1. [女子买7元早餐发现卡里近26万没了](https://so.toutiao.com/search?keyword=女子买7元早餐发现卡里近26万没了)
1. [寒潮过后大回暖](https://so.toutiao.com/search?keyword=寒潮过后大回暖)
1. [猪价跌创十年新低 为何养猪股大涨](https://so.toutiao.com/search?keyword=猪价跌创十年新低%20为何养猪股大涨)
1. [李庚希与雷佳音同框走金鸡红毯](https://so.toutiao.com/search?keyword=李庚希与雷佳音同框走金鸡红毯)
1. [俄美乌三方会谈欧洲能否上桌](https://so.toutiao.com/search?keyword=俄美乌三方会谈欧洲能否上桌)
1. [金鸡内场明星寒暄握手拍肩](https://so.toutiao.com/search?keyword=金鸡内场明星寒暄握手拍肩)
1. [俄美乌会谈重启 欧盟扮演什么角色](https://so.toutiao.com/search?keyword=俄美乌会谈重启%20欧盟扮演什么角色)
1. [兰西雅获金鸡奖最佳女配角奖](https://so.toutiao.com/search?keyword=兰西雅获金鸡奖最佳女配角奖)
1. [井柏然白西装亮相金鸡奖红毯](https://so.toutiao.com/search?keyword=井柏然白西装亮相金鸡奖红毯)
1. [王楚钦一人拉升男队外战胜率](https://so.toutiao.com/search?keyword=王楚钦一人拉升男队外战胜率)
1. [郭富城亮相金鸡奖红毯](https://so.toutiao.com/search?keyword=郭富城亮相金鸡奖红毯)
1. [美国真不想再打伊朗了吗](https://so.toutiao.com/search?keyword=美国真不想再打伊朗了吗)
1. [邵永灵：高市出席APEC峰会前疯狂加戏](https://so.toutiao.com/search?keyword=邵永灵：高市出席APEC峰会前疯狂加戏)
1. [冯巩金鸡红毯一路挥手互动](https://so.toutiao.com/search?keyword=冯巩金鸡红毯一路挥手互动)
1. [超强厄尔尼诺怎么“还在来”](https://so.toutiao.com/search?keyword=超强厄尔尼诺怎么“还在来”)
1. [大V：立陶宛要从根本上认识到错误](https://so.toutiao.com/search?keyword=大V：立陶宛要从根本上认识到错误)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Nov 11 2026 14:03:04 GMT+0800 (China Standard Time) -->

1. [比亚迪就大唐轮辋装配问题致歉](https://www.zhihu.com/search?q=%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%B0%B1%E5%A4%A7%E5%94%90%E8%BD%AE%E8%BE%8B%E8%A3%85%E9%85%8D%E9%97%AE%E9%A2%98%E8%87%B4%E6%AD%89)
1. [黄渤自曝今年几乎没戏拍](https://www.zhihu.com/search?q=%E9%BB%84%E6%B8%A4%E8%87%AA%E6%9B%9D%E4%BB%8A%E5%B9%B4%E5%87%A0%E4%B9%8E%E6%B2%A1%E6%88%8F%E6%8B%8D)
1. [司美格鲁肽等减肥神药或致永久失明](https://www.zhihu.com/search?q=%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E7%AD%89%E5%87%8F%E8%82%A5%E7%A5%9E%E8%8D%AF%E6%88%96%E8%87%B4%E6%B0%B8%E4%B9%85%E5%A4%B1%E6%98%8E)
1. [疑似秦始皇儿子头骨面容被复原](https://www.zhihu.com/search?q=%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E5%A4%B4%E9%AA%A8%E9%9D%A2%E5%AE%B9%E8%A2%AB%E5%A4%8D%E5%8E%9F)
1. [胖东来回应洗发水被指产地造假](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94%E6%B4%97%E5%8F%91%E6%B0%B4%E8%A2%AB%E6%8C%87%E4%BA%A7%E5%9C%B0%E9%80%A0%E5%81%87)
1. [Qwen4-Max Preview 模型发布](https://www.zhihu.com/search?q=Qwen4-Max%20Preview%20%E6%A8%A1%E5%9E%8B%E5%8F%91%E5%B8%83)
1. [RTX5080暴跌4000元](https://www.zhihu.com/search?q=RTX5080%E6%9A%B4%E8%B7%8C4000%E5%85%83)
1. [曝携程产品前端后端运营合并](https://www.zhihu.com/search?q=%E6%9B%9D%E6%90%BA%E7%A8%8B%E4%BA%A7%E5%93%81%E5%89%8D%E7%AB%AF%E5%90%8E%E7%AB%AF%E8%BF%90%E8%90%A5%E5%90%88%E5%B9%B6)
1. [张雪拍卖款不捐韩红基金会](https://www.zhihu.com/search?q=%E5%BC%A0%E9%9B%AA%E6%8B%8D%E5%8D%96%E6%AC%BE%E4%B8%8D%E6%8D%90%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A)
1. [知乎好奇岛装扮游戏](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [拜登遇袭](https://www.zhihu.com/search?q=%E6%8B%9C%E7%99%BB%E9%81%87%E8%A2%AD)
1. [谷歌开放Gemini4 Carbon](https://www.zhihu.com/search?q=%E8%B0%B7%E6%AD%8C%E5%BC%80%E6%94%BEGemini4%20Carbon)
1. [杭州警方通报致 2 死刑案](https://www.zhihu.com/search?q=%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E8%87%B4%202%20%E6%AD%BB%E5%88%91%E6%A1%88)
1. [BLG 3-1 T1](https://www.zhihu.com/search?q=BLG%203-1%20T1)
1. [比亚迪大唐被曝前后轮毂装反](https://www.zhihu.com/search?q=%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%A4%A7%E5%94%90%E8%A2%AB%E6%9B%9D%E5%89%8D%E5%90%8E%E8%BD%AE%E6%AF%82%E8%A3%85%E5%8F%8D)
1. [王楚钦发文反思总结](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E6%96%87%E5%8F%8D%E6%80%9D%E6%80%BB%E7%BB%93)
1. [「花坛藏尸案」一审宣判](https://www.zhihu.com/search?q=%E3%80%8C%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E3%80%8D%E4%B8%80%E5%AE%A1%E5%AE%A3%E5%88%A4)
1. [英伟达突发史上最大GPU盗窃案](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E7%AA%81%E5%8F%91%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7GPU%E7%9B%97%E7%AA%83%E6%A1%88)
1. [英伟达黄仁勋遭股东集体诉讼](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E9%BB%84%E4%BB%81%E5%8B%8B%E9%81%AD%E8%82%A1%E4%B8%9C%E9%9B%86%E4%BD%93%E8%AF%89%E8%AE%BC)
1. [国家政策首提失业缓冲期应对AI](https://www.zhihu.com/search?q=%E5%9B%BD%E5%AE%B6%E6%94%BF%E7%AD%96%E9%A6%96%E6%8F%90%E5%A4%B1%E4%B8%9A%E7%BC%93%E5%86%B2%E6%9C%9F%E5%BA%94%E5%AF%B9AI)
1. [高叶金鸡影后](https://www.zhihu.com/search?q=%E9%AB%98%E5%8F%B6%E9%87%91%E9%B8%A1%E5%BD%B1%E5%90%8E)
1. [梁家辉金鸡影帝](https://www.zhihu.com/search?q=%E6%A2%81%E5%AE%B6%E8%BE%89%E9%87%91%E9%B8%A1%E5%BD%B1%E5%B8%9D)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Nov 11 2026 07:24:40 GMT+0800 (China Standard Time) -->

1. [梁家辉、高叶分别拿下影帝、影后，如何评价第 39 届中国电影金鸡奖获奖名单？](https://www.zhihu.com/question/2103547850734792700)
1. [我国外储规模再超3.4万亿美元，单月贸易顺差超1335亿美元，为何人民币升值下外贸数据却持续超预期？](https://www.zhihu.com/question/2102439361971339500)
1. [为什么说《九州》注定会失败？](https://www.zhihu.com/question/2103073365011461600)
1. [女子月薪两万，公司按最低基数交社保，一算账「养老金每月少 2000 元」 ，还会影响哪些待遇？](https://www.zhihu.com/question/2102858355568072400)
1. [如何评价学院命名冗余的现象？比如“数学学院”“化学学院”，以前都是简单的“数学院”“化学院”？](https://www.zhihu.com/question/2093992462004102100)
1. [《求是》发文「当前我国经济运行中供强需弱矛盾的症结所在」，释放了哪些信号？](https://www.zhihu.com/question/2103446044839076900)
1. [10 月 20 万元以上新能源车销量榜出炉，前三名全是小米，哪些数据值得关注？当前市场格局如何？](https://www.zhihu.com/question/2103425545253778700)
1. [S16 决赛 BLG vs GEN，你觉得 BLG 能夺冠吗？](https://www.zhihu.com/question/2103072899493885200)
1. [潮汕狮头鹅头为什么售价上千？](https://www.zhihu.com/question/2087797463000392400)
1. [山姆现20元一包泡面，含肉量60克以上，只能下锅煮不能开水泡，被吐槽太贵不方便，你怎么看？觉得值吗？](https://www.zhihu.com/question/2103546819556763000)
1. [中方对美关税调整，两月内继续暂停实施 24% 的加征关税税率，保留 10% 的加征关税税率，如何解读？](https://www.zhihu.com/question/2103075180645987300)
1. [男子靠「鸭形拳」获武术比赛冠军遭调侃动作像舞蹈，这类象形拳实战效果如何？](https://www.zhihu.com/question/2102413983248541400)
1. [南京「零元面馆」无门槛免费吃面，周边面馆「日营业额下降2000元」，有商户想退租，善意是不是该有边界？](https://www.zhihu.com/question/2103201823708407800)
1. [如何评价比亚迪大唐被曝存在轮毂出厂前后装反问题，比亚迪售后称确有部分批次发生该情况？](https://www.zhihu.com/question/2102801912580067800)
1. [如何评价《魔兽世界》无限服？](https://www.zhihu.com/question/2103067562250708000)
1. [陕西西咸新区一政务服务中心门头遭挖掘机破坏，嫌疑人已被采取刑事强制措施，无人员受伤，具体情况如何？](https://www.zhihu.com/question/2103200947187012000)
1. [售价 2499 元平衡指环号称戴上就「推不倒」遭质疑，企业称将请院士级科学家说明，这背后有科学依据吗？](https://www.zhihu.com/question/2102304920821155800)
1. [为什么没有多少人用五笔了？](https://www.zhihu.com/question/2034025447210607600)
1. [主持人实测滴滴21单平均抽成13.22%，为何司机普遍感觉抽成超过20%？抽走的钱最终流向了哪里？](https://www.zhihu.com/question/2103210334647313000)
1. [失业缓冲期首次出现在国家政策内，以应对人工智能带来的冲击，怎么看待这一政策？能够有效落实、缓解焦虑吗？](https://www.zhihu.com/question/2103115784310322000)
1. [如何评价 JiaQi 在 S16 全球总决赛上的综合表现？](https://www.zhihu.com/question/2102684881629049300)
1. [空军某部集训不再新发公文包，改为旧包用完回收，消毒后循环使用，这种「过紧日子」的做法值得推广吗？](https://www.zhihu.com/question/2098374497116209400)
1. [纳斯达克 23 小时连续交易 12 月实施，覆盖 A 股、港股绝大部分交易时段，对国内投资者有何影响？](https://www.zhihu.com/question/2100880591612811000)
1. [我国拟修改税收征收管理法，将稳慎加强对个人的税收征管，此举将产生哪些影响？](https://www.zhihu.com/question/2100596978145031700)
1. [山姆多款始祖鸟加拿大鹅被抢空，有商品比官方便宜近5000元，为什么能卖这么便宜？背后是怎样的商业策略？](https://www.zhihu.com/question/2102852244009744000)
1. [如何看待 Viper 采访称「赛前我就在想，LPL 未曾击败 T1 是因为我那会儿还不在」？](https://www.zhihu.com/question/2103088240676660700)
1. [想了解一个地方真正的「底色」，应该去哪里？你会提名哪个地方的哪个角落？](https://www.zhihu.com/question/2103147783901243100)
1. [旅行中，你觉得哪种交通工具最「有趣」？](https://www.zhihu.com/question/650200388)
1. [为什么有些人工作十几年，经验却像没留下一样？](https://www.zhihu.com/question/2014697669172425700)
1. [很多人说影之刃零难度偏低，低难度会不会劝退大部分硬核玩家？](https://www.zhihu.com/question/2102045069318608400)
1. [如何评价华为2026年11月发布的鸿蒙折叠电脑 MateBook Fold S，背面的小屏有什么用?](https://www.zhihu.com/question/2103440341600937700)
1. [动物都知道躲避天敌，而为什么几千年了，昆虫还是不知道躲着人类？](https://www.zhihu.com/question/2017588180904346600)
1. [怎么看待一汽大众取消两年年终奖，这项收入占部分员工年薪近半?](https://www.zhihu.com/question/2103186587043602400)
1. [为什么黑神话、影之刃零明明都是第一次做3A单机，却能直接杀到一流水平？](https://www.zhihu.com/question/2102585315689084700)
1. [「免打孔0脱落」的单杠突然脱落，致 10 岁儿童开放性面部损伤，这种单杠为什么会突然脱落？](https://www.zhihu.com/question/2103169487126188000)
1. [性格过于强势的人会怎样？](https://www.zhihu.com/question/535233629)
1. [韩国为什么算是战国七雄之一？](https://www.zhihu.com/question/36278805)
1. [如果可以采访《西游记》里的妖怪，你觉得谁会把故事讲得完全不一样？最想听谁来讲？](https://www.zhihu.com/question/2058945975465547300)
1. [有人说影视版权意识薄弱，是因为开完平台会员后，仍然要为各种SVIP、收费花絮、超前点播花钱，你认同吗？](https://www.zhihu.com/question/2102110266687059200)
1. [俄美乌三方会谈于阿布扎比举行，本次会谈有哪些核心关注点？俄美乌三方的诉求分别是什么？](https://www.zhihu.com/question/2103383739589812500)
1. [杨毅称 76 人证明磨合是伪命题，5 场磨合不好的队 500 场也白搭，这一观点符合竞技篮球规律吗？](https://www.zhihu.com/question/2103111879371575300)

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
<!-- 最后更新时间 Wed Nov 11 2026 07:31:56 GMT+0800 (China Standard Time) -->

1. [论减贫脱贫](https://s.weibo.com//weibo?q=%23%E8%AE%BA%E5%87%8F%E8%B4%AB%E8%84%B1%E8%B4%AB%23&Refer=new_time)
1. [扬州地震](https://s.weibo.com//weibo?q=%E6%89%AC%E5%B7%9E%E5%9C%B0%E9%9C%87&t=31&band_rank=1&Refer=top)
1. [金鸡奖获奖名单](https://s.weibo.com//weibo?q=%E9%87%91%E9%B8%A1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=2&Refer=top)
1. [进博会到APEC见证中国开放纵深](https://s.weibo.com//weibo?q=%23%E8%BF%9B%E5%8D%9A%E4%BC%9A%E5%88%B0APEC%E8%A7%81%E8%AF%81%E4%B8%AD%E5%9B%BD%E5%BC%80%E6%94%BE%E7%BA%B5%E6%B7%B1%23&t=31&band_rank=3&Refer=top)
1. [5个上门维修师傅2个说了实话](https://s.weibo.com//weibo?q=%235%E4%B8%AA%E4%B8%8A%E9%97%A8%E7%BB%B4%E4%BF%AE%E5%B8%88%E5%82%852%E4%B8%AA%E8%AF%B4%E4%BA%86%E5%AE%9E%E8%AF%9D%23&t=31&band_rank=4&Refer=top)
1. [高叶愣了几秒哭了](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%8F%B6%E6%84%A3%E4%BA%86%E5%87%A0%E7%A7%92%E5%93%AD%E4%BA%86%23&t=31&band_rank=5&Refer=top)
1. [白小纯对着摄像头撒谎](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E7%9D%80%E6%91%84%E5%83%8F%E5%A4%B4%E6%92%92%E8%B0%8E%23&t=31&band_rank=6&Refer=top)
1. [36岁女子赴泰失联现已回国](https://s.weibo.com//weibo?q=%2336%E5%B2%81%E5%A5%B3%E5%AD%90%E8%B5%B4%E6%B3%B0%E5%A4%B1%E8%81%94%E7%8E%B0%E5%B7%B2%E5%9B%9E%E5%9B%BD%23&t=31&band_rank=7&Refer=top)
1. [金鸡最佳导演 爆冷](https://s.weibo.com//weibo?q=%E9%87%91%E9%B8%A1%E6%9C%80%E4%BD%B3%E5%AF%BC%E6%BC%94%20%E7%88%86%E5%86%B7&t=31&band_rank=8&Refer=top)
1. [拼多多送货上门新规11月13日生效](https://s.weibo.com//weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E9%80%81%E8%B4%A7%E4%B8%8A%E9%97%A8%E6%96%B0%E8%A7%8411%E6%9C%8813%E6%97%A5%E7%94%9F%E6%95%88%23&t=31&band_rank=9&Refer=top)
1. [花坛藏尸案动手行凶者为何死缓](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E5%8A%A8%E6%89%8B%E8%A1%8C%E5%87%B6%E8%80%85%E4%B8%BA%E4%BD%95%E6%AD%BB%E7%BC%93%23&t=31&band_rank=10&Refer=top)
1. [许飞把和何炅的合照放C位](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%8A%8A%E5%92%8C%E4%BD%95%E7%82%85%E7%9A%84%E5%90%88%E7%85%A7%E6%94%BEC%E4%BD%8D%23&t=31&band_rank=11&Refer=top)
1. [梁家辉拒绝工作人员帮拿金鸡奖杯](https://s.weibo.com//weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E6%8B%92%E7%BB%9D%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%B8%AE%E6%8B%BF%E9%87%91%E9%B8%A1%E5%A5%96%E6%9D%AF%23&t=31&band_rank=12&Refer=top)
1. [金子涵妹妹回复网友](https://s.weibo.com//weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%A6%B9%E5%A6%B9%E5%9B%9E%E5%A4%8D%E7%BD%91%E5%8F%8B%23&t=31&band_rank=13&Refer=top)
1. [宋亚轩被那英当面处刑](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%A2%AB%E9%82%A3%E8%8B%B1%E5%BD%93%E9%9D%A2%E5%A4%84%E5%88%91%23&t=31&band_rank=14&Refer=top)
1. [女子补缴社保个人承担不到10万](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E8%A1%A5%E7%BC%B4%E7%A4%BE%E4%BF%9D%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%E4%B8%8D%E5%88%B010%E4%B8%87&t=31&band_rank=15&Refer=top)
1. [白鹿听完孟子义说话的反应](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E5%90%AC%E5%AE%8C%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E8%AF%9D%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=16&Refer=top)
1. [曝平头哥估值200亿至300亿美元](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%B9%B3%E5%A4%B4%E5%93%A5%E4%BC%B0%E5%80%BC200%E4%BA%BF%E8%87%B3300%E4%BA%BF%E7%BE%8E%E5%85%83%23&t=31&band_rank=17&Refer=top)
1. [警方通报司机溅湿路人强行撞车逃离](https://s.weibo.com//weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8F%B8%E6%9C%BA%E6%BA%85%E6%B9%BF%E8%B7%AF%E4%BA%BA%E5%BC%BA%E8%A1%8C%E6%92%9E%E8%BD%A6%E9%80%83%E7%A6%BB%23&t=31&band_rank=18&Refer=top)
1. [RTX5080暴跌4000元](https://s.weibo.com//weibo?q=%23RTX5080%E6%9A%B4%E8%B7%8C4000%E5%85%83%23&t=31&band_rank=19&Refer=top)
1. [拉宏徒步 小尼父母家真实到没剧本](https://s.weibo.com//weibo?q=%E6%8B%89%E5%AE%8F%E5%BE%92%E6%AD%A5%20%E5%B0%8F%E5%B0%BC%E7%88%B6%E6%AF%8D%E5%AE%B6%E7%9C%9F%E5%AE%9E%E5%88%B0%E6%B2%A1%E5%89%A7%E6%9C%AC&t=31&band_rank=20&Refer=top)
1. [白鹿的台风不像演员该有的](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E5%8F%B0%E9%A3%8E%E4%B8%8D%E5%83%8F%E6%BC%94%E5%91%98%E8%AF%A5%E6%9C%89%E7%9A%84%23&t=31&band_rank=21&Refer=top)
1. [从赚240万到亏600万的人生变化](https://s.weibo.com//weibo?q=%23%E4%BB%8E%E8%B5%9A240%E4%B8%87%E5%88%B0%E4%BA%8F600%E4%B8%87%E7%9A%84%E4%BA%BA%E7%94%9F%E5%8F%98%E5%8C%96%23&t=31&band_rank=22&Refer=top)
1. [彩民花20元机选中2000万大奖](https://s.weibo.com//weibo?q=%23%E5%BD%A9%E6%B0%91%E8%8A%B120%E5%85%83%E6%9C%BA%E9%80%89%E4%B8%AD2000%E4%B8%87%E5%A4%A7%E5%A5%96%23&t=31&band_rank=23&Refer=top)
1. [朱一龙哽咽恭喜高叶](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%93%BD%E5%92%BD%E6%81%AD%E5%96%9C%E9%AB%98%E5%8F%B6%23&t=31&band_rank=24&Refer=top)
1. [井柏然回复李宇春](https://s.weibo.com//weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%9B%9E%E5%A4%8D%E6%9D%8E%E5%AE%87%E6%98%A5%23&t=31&band_rank=25&Refer=top)
1. [奶奶说选不喜欢的孩子养老不心疼](https://s.weibo.com//weibo?q=%E5%A5%B6%E5%A5%B6%E8%AF%B4%E9%80%89%E4%B8%8D%E5%96%9C%E6%AC%A2%E7%9A%84%E5%AD%A9%E5%AD%90%E5%85%BB%E8%80%81%E4%B8%8D%E5%BF%83%E7%96%BC&t=31&band_rank=26&Refer=top)
1. [梁家辉影史第二位三金影帝](https://s.weibo.com//weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%BD%B1%E5%8F%B2%E7%AC%AC%E4%BA%8C%E4%BD%8D%E4%B8%89%E9%87%91%E5%BD%B1%E5%B8%9D%23&t=31&band_rank=27&Refer=top)
1. [以为在掏狗崽谁知道掏出个犬子](https://s.weibo.com//weibo?q=%23%E4%BB%A5%E4%B8%BA%E5%9C%A8%E6%8E%8F%E7%8B%97%E5%B4%BD%E8%B0%81%E7%9F%A5%E9%81%93%E6%8E%8F%E5%87%BA%E4%B8%AA%E7%8A%AC%E5%AD%90%23&t=31&band_rank=28&Refer=top)
1. [景德镇陶瓷盘穿上了流苏裙](https://s.weibo.com//weibo?q=%23%E6%99%AF%E5%BE%B7%E9%95%87%E9%99%B6%E7%93%B7%E7%9B%98%E7%A9%BF%E4%B8%8A%E4%BA%86%E6%B5%81%E8%8B%8F%E8%A3%99%23&t=31&band_rank=29&Refer=top)
1. [金鸡影帝影后 实至名归](https://s.weibo.com//weibo?q=%E9%87%91%E9%B8%A1%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%20%E5%AE%9E%E8%87%B3%E5%90%8D%E5%BD%92&t=31&band_rank=30&Refer=top)
1. [许飞在后台疯狂加微信](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%9C%A8%E5%90%8E%E5%8F%B0%E7%96%AF%E7%8B%82%E5%8A%A0%E5%BE%AE%E4%BF%A1%23&t=31&band_rank=31&Refer=top)
1. [爱情公寓拿到王传君的大结果了](https://s.weibo.com//weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E6%8B%BF%E5%88%B0%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%9A%84%E5%A4%A7%E7%BB%93%E6%9E%9C%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [白小纯我有人疼](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%88%91%E6%9C%89%E4%BA%BA%E7%96%BC%23&t=31&band_rank=33&Refer=top)
1. [男子肛门藏冰毒入境被抓](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E8%82%9B%E9%97%A8%E8%97%8F%E5%86%B0%E6%AF%92%E5%85%A5%E5%A2%83%E8%A2%AB%E6%8A%93%23&t=31&band_rank=34&Refer=top)
1. [原来真正的阿尔兹海默是这样的](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%98%BF%E5%B0%94%E5%85%B9%E6%B5%B7%E9%BB%98%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23&t=31&band_rank=35&Refer=top)
1. [崔晋称李勒优晋妈闹僵视频是旧素材](https://s.weibo.com//weibo?q=%E5%B4%94%E6%99%8B%E7%A7%B0%E6%9D%8E%E5%8B%92%E4%BC%98%E6%99%8B%E5%A6%88%E9%97%B9%E5%83%B5%E8%A7%86%E9%A2%91%E6%98%AF%E6%97%A7%E7%B4%A0%E6%9D%90&t=31&band_rank=36&Refer=top)
1. [厉娜小狗也有商务了](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E5%B0%8F%E7%8B%97%E4%B9%9F%E6%9C%89%E5%95%86%E5%8A%A1%E4%BA%86%23&t=31&band_rank=37&Refer=top)
1. [得闲谨制金鸡奖最佳美术](https://s.weibo.com//weibo?q=%E5%BE%97%E9%97%B2%E8%B0%A8%E5%88%B6%E9%87%91%E9%B8%A1%E5%A5%96%E6%9C%80%E4%BD%B3%E7%BE%8E%E6%9C%AF&t=31&band_rank=38&Refer=top)
1. [造谣石凯方道歉](https://s.weibo.com//weibo?q=%E9%80%A0%E8%B0%A3%E7%9F%B3%E5%87%AF%E6%96%B9%E9%81%93%E6%AD%89&t=31&band_rank=39&Refer=top)
1. [13岁女孩腹痛1年家长忽视确诊胃癌](https://s.weibo.com//weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%85%B9%E7%97%9B1%E5%B9%B4%E5%AE%B6%E9%95%BF%E5%BF%BD%E8%A7%86%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%23&t=31&band_rank=40&Refer=top)
1. [美联储12月维持利率不变的概率为0](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A812%E6%9C%88%E7%BB%B4%E6%8C%81%E5%88%A9%E7%8E%87%E4%B8%8D%E5%8F%98%E7%9A%84%E6%A6%82%E7%8E%87%E4%B8%BA0%23&t=31&band_rank=41&Refer=top)
1. [花坛藏尸案凶手审讯画面首度公开](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E5%87%B6%E6%89%8B%E5%AE%A1%E8%AE%AF%E7%94%BB%E9%9D%A2%E9%A6%96%E5%BA%A6%E5%85%AC%E5%BC%80%23&t=31&band_rank=42&Refer=top)
1. [藏尸案女凶手听到死刑时嘴角微动](https://s.weibo.com//weibo?q=%23%E8%97%8F%E5%B0%B8%E6%A1%88%E5%A5%B3%E5%87%B6%E6%89%8B%E5%90%AC%E5%88%B0%E6%AD%BB%E5%88%91%E6%97%B6%E5%98%B4%E8%A7%92%E5%BE%AE%E5%8A%A8%23&t=31&band_rank=43&Refer=top)
1. [小猫咪成全场唯一受害者](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%8C%AB%E5%92%AA%E6%88%90%E5%85%A8%E5%9C%BA%E5%94%AF%E4%B8%80%E5%8F%97%E5%AE%B3%E8%80%85&t=31&band_rank=44&Refer=top)
1. [大连英博包揽金球金帅金童](https://s.weibo.com//weibo?q=%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%E5%8C%85%E6%8F%BD%E9%87%91%E7%90%83%E9%87%91%E5%B8%85%E9%87%91%E7%AB%A5&t=31&band_rank=45&Refer=top)
1. [丁程鑫不小心把衣扣解开了](https://s.weibo.com//weibo?q=%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%8D%E5%B0%8F%E5%BF%83%E6%8A%8A%E8%A1%A3%E6%89%A3%E8%A7%A3%E5%BC%80%E4%BA%86&t=31&band_rank=46&Refer=top)
1. [阿里宣布平头哥赴港上市](https://s.weibo.com//weibo?q=%23%E9%98%BF%E9%87%8C%E5%AE%A3%E5%B8%83%E5%B9%B3%E5%A4%B4%E5%93%A5%E8%B5%B4%E6%B8%AF%E4%B8%8A%E5%B8%82%23&t=31&band_rank=47&Refer=top)
1. [美股纳指期货黄金白银集体跳水](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1%E7%BA%B3%E6%8C%87%E6%9C%9F%E8%B4%A7%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E9%9B%86%E4%BD%93%E8%B7%B3%E6%B0%B4&t=31&band_rank=48&Refer=top)
1. [油价大跌背后原因](https://s.weibo.com//weibo?q=%E6%B2%B9%E4%BB%B7%E5%A4%A7%E8%B7%8C%E8%83%8C%E5%90%8E%E5%8E%9F%E5%9B%A0&t=31&band_rank=49&Refer=top)
1. [侯英超说王楚钦知道要做什么](https://s.weibo.com//weibo?q=%23%E4%BE%AF%E8%8B%B1%E8%B6%85%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9F%A5%E9%81%93%E8%A6%81%E5%81%9A%E4%BB%80%E4%B9%88%23&t=31&band_rank=50&Refer=top)
1. [金鸡奖获奖名单](https://s.weibo.com//weibo?q=%E9%87%91%E9%B8%A1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=1&Refer=top)
1. [金鸡最佳导演 爆冷](https://s.weibo.com//weibo?q=%E9%87%91%E9%B8%A1%E6%9C%80%E4%BD%B3%E5%AF%BC%E6%BC%94%20%E7%88%86%E5%86%B7&t=31&band_rank=2&Refer=top)
1. [白小纯对着摄像头撒谎](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E7%9D%80%E6%91%84%E5%83%8F%E5%A4%B4%E6%92%92%E8%B0%8E%23&t=31&band_rank=4&Refer=top)
1. [拼多多送货上门新规11月13日生效](https://s.weibo.com//weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E9%80%81%E8%B4%A7%E4%B8%8A%E9%97%A8%E6%96%B0%E8%A7%8411%E6%9C%8813%E6%97%A5%E7%94%9F%E6%95%88%23&t=31&band_rank=5&Refer=top)
1. [高叶愣了几秒哭了](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%8F%B6%E6%84%A3%E4%BA%86%E5%87%A0%E7%A7%92%E5%93%AD%E4%BA%86%23&t=31&band_rank=6&Refer=top)
1. [金子涵妹妹回复网友](https://s.weibo.com//weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%A6%B9%E5%A6%B9%E5%9B%9E%E5%A4%8D%E7%BD%91%E5%8F%8B%23&t=31&band_rank=7&Refer=top)
1. [花坛藏尸案凶手审讯画面首度公开](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E5%87%B6%E6%89%8B%E5%AE%A1%E8%AE%AF%E7%94%BB%E9%9D%A2%E9%A6%96%E5%BA%A6%E5%85%AC%E5%BC%80%23&t=31&band_rank=8&Refer=top)
1. [李泽楷公司卖出全球最贵人寿保单](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E6%B3%BD%E6%A5%B7%E5%85%AC%E5%8F%B8%E5%8D%96%E5%87%BA%E5%85%A8%E7%90%83%E6%9C%80%E8%B4%B5%E4%BA%BA%E5%AF%BF%E4%BF%9D%E5%8D%95%23&t=31&band_rank=9&Refer=top)
1. [领克900L首发亮相](https://s.weibo.com//weibo?q=%23%E9%A2%86%E5%85%8B900L%E9%A6%96%E5%8F%91%E4%BA%AE%E7%9B%B8%23&t=31&band_rank=10&Refer=top)
1. [男子肛门藏冰毒入境被抓](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E8%82%9B%E9%97%A8%E8%97%8F%E5%86%B0%E6%AF%92%E5%85%A5%E5%A2%83%E8%A2%AB%E6%8A%93%23&t=31&band_rank=11&Refer=top)
1. [金鸡影帝影后 实至名归](https://s.weibo.com//weibo?q=%E9%87%91%E9%B8%A1%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%20%E5%AE%9E%E8%87%B3%E5%90%8D%E5%BD%92&t=31&band_rank=13&Refer=top)
1. [何炅甚至唱得比许飞好](https://s.weibo.com//weibo?q=%23%E4%BD%95%E7%82%85%E7%94%9A%E8%87%B3%E5%94%B1%E5%BE%97%E6%AF%94%E8%AE%B8%E9%A3%9E%E5%A5%BD%23&t=31&band_rank=14&Refer=top)
1. [朱一龙哽咽恭喜高叶](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%93%BD%E5%92%BD%E6%81%AD%E5%96%9C%E9%AB%98%E5%8F%B6%23&t=31&band_rank=15&Refer=top)
1. [钟楚曦金鸡奖发言](https://s.weibo.com//weibo?q=%23%E9%92%9F%E6%A5%9A%E6%9B%A6%E9%87%91%E9%B8%A1%E5%A5%96%E5%8F%91%E8%A8%80%23&t=31&band_rank=16&Refer=top)
1. [女子补缴社保个人承担不到10万](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E8%A1%A5%E7%BC%B4%E7%A4%BE%E4%BF%9D%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%E4%B8%8D%E5%88%B010%E4%B8%87&t=31&band_rank=18&Refer=top)
1. [5个上门维修师傅2个说了实话](https://s.weibo.com//weibo?q=%235%E4%B8%AA%E4%B8%8A%E9%97%A8%E7%BB%B4%E4%BF%AE%E5%B8%88%E5%82%852%E4%B8%AA%E8%AF%B4%E4%BA%86%E5%AE%9E%E8%AF%9D%23&t=31&band_rank=19&Refer=top)
1. [彩民花20元机选中2000万大奖](https://s.weibo.com//weibo?q=%23%E5%BD%A9%E6%B0%91%E8%8A%B120%E5%85%83%E6%9C%BA%E9%80%89%E4%B8%AD2000%E4%B8%87%E5%A4%A7%E5%A5%96%23&t=31&band_rank=20&Refer=top)
1. [白小纯没有认证电竞选手的原因](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%B2%A1%E6%9C%89%E8%AE%A4%E8%AF%81%E7%94%B5%E7%AB%9E%E9%80%89%E6%89%8B%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=21&Refer=top)
1. [梁家辉影史第二位三金影帝](https://s.weibo.com//weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%BD%B1%E5%8F%B2%E7%AC%AC%E4%BA%8C%E4%BD%8D%E4%B8%89%E9%87%91%E5%BD%B1%E5%B8%9D%23&t=31&band_rank=22&Refer=top)
1. [奶奶说选不喜欢的孩子养老不心疼](https://s.weibo.com//weibo?q=%E5%A5%B6%E5%A5%B6%E8%AF%B4%E9%80%89%E4%B8%8D%E5%96%9C%E6%AC%A2%E7%9A%84%E5%AD%A9%E5%AD%90%E5%85%BB%E8%80%81%E4%B8%8D%E5%BF%83%E7%96%BC&t=31&band_rank=23&Refer=top)
1. [2026等到了关谷悠悠的大结果](https://s.weibo.com//weibo?q=%232026%E7%AD%89%E5%88%B0%E4%BA%86%E5%85%B3%E8%B0%B7%E6%82%A0%E6%82%A0%E7%9A%84%E5%A4%A7%E7%BB%93%E6%9E%9C%23&t=31&band_rank=24&Refer=top)
1. [丁程鑫不小心把衣扣解开了](https://s.weibo.com//weibo?q=%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%8D%E5%B0%8F%E5%BF%83%E6%8A%8A%E8%A1%A3%E6%89%A3%E8%A7%A3%E5%BC%80%E4%BA%86&t=31&band_rank=25&Refer=top)
1. [白鹿听到画地为牢的反应](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E5%90%AC%E5%88%B0%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=26&Refer=top)
1. [生理性喜欢 vs 生理性厌恶](https://s.weibo.com//weibo?q=%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%20vs%20%E7%94%9F%E7%90%86%E6%80%A7%E5%8E%8C%E6%81%B6&t=31&band_rank=27&Refer=top)
1. [我的初中同学黄景瑜](https://s.weibo.com//weibo?q=%23%E6%88%91%E7%9A%84%E5%88%9D%E4%B8%AD%E5%90%8C%E5%AD%A6%E9%BB%84%E6%99%AF%E7%91%9C%23&t=31&band_rank=28&Refer=top)
1. [学龄人口达峰 幼儿园小学初中资源优化](https://s.weibo.com//weibo?q=%E5%AD%A6%E9%BE%84%E4%BA%BA%E5%8F%A3%E8%BE%BE%E5%B3%B0%20%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%B0%8F%E5%AD%A6%E5%88%9D%E4%B8%AD%E8%B5%84%E6%BA%90%E4%BC%98%E5%8C%96&t=31&band_rank=29&Refer=top)
1. [梅根父亲涉性虐待影像内容曝光](https://s.weibo.com//weibo?q=%23%E6%A2%85%E6%A0%B9%E7%88%B6%E4%BA%B2%E6%B6%89%E6%80%A7%E8%99%90%E5%BE%85%E5%BD%B1%E5%83%8F%E5%86%85%E5%AE%B9%E6%9B%9D%E5%85%89%23&t=31&band_rank=30&Refer=top)
1. [和平精英职业联赛](https://s.weibo.com//weibo?q=%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E8%81%8C%E4%B8%9A%E8%81%94%E8%B5%9B&t=31&band_rank=31&Refer=top)
1. [白鹿听完孟子义说话的反应](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E5%90%AC%E5%AE%8C%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E8%AF%9D%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=32&Refer=top)
1. [从赚240万到亏600万的人生变化](https://s.weibo.com//weibo?q=%23%E4%BB%8E%E8%B5%9A240%E4%B8%87%E5%88%B0%E4%BA%8F600%E4%B8%87%E7%9A%84%E4%BA%BA%E7%94%9F%E5%8F%98%E5%8C%96%23&t=31&band_rank=33&Refer=top)
1. [尚公主言尚晚摇圆房](https://s.weibo.com//weibo?q=%E5%B0%9A%E5%85%AC%E4%B8%BB%E8%A8%80%E5%B0%9A%E6%99%9A%E6%91%87%E5%9C%86%E6%88%BF&t=31&band_rank=34&Refer=top)
1. [严浩翔给瞿颖递玫瑰前扭这几下](https://s.weibo.com//weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%BB%99%E7%9E%BF%E9%A2%96%E9%80%92%E7%8E%AB%E7%91%B0%E5%89%8D%E6%89%AD%E8%BF%99%E5%87%A0%E4%B8%8B%23&t=31&band_rank=35&Refer=top)
1. [高叶金鸡影后](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%8F%B6%E9%87%91%E9%B8%A1%E5%BD%B1%E5%90%8E%23&t=31&band_rank=36&Refer=top)
1. [芒果喊话撒贝宁厉娜](https://s.weibo.com//weibo?q=%23%E8%8A%92%E6%9E%9C%E5%96%8A%E8%AF%9D%E6%92%92%E8%B4%9D%E5%AE%81%E5%8E%89%E5%A8%9C%23&t=31&band_rank=37&Refer=top)
1. [EDG官宣Smoggy离队](https://s.weibo.com//weibo?q=EDG%E5%AE%98%E5%AE%A3Smoggy%E7%A6%BB%E9%98%9F&t=31&band_rank=38&Refer=top)
1. [原来真正的阿尔兹海默是这样的](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%98%BF%E5%B0%94%E5%85%B9%E6%B5%B7%E9%BB%98%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23&t=31&band_rank=39&Refer=top)
1. [一位韩国TheShy粉丝想说的话](https://s.weibo.com//weibo?q=%E4%B8%80%E4%BD%8D%E9%9F%A9%E5%9B%BDTheShy%E7%B2%89%E4%B8%9D%E6%83%B3%E8%AF%B4%E7%9A%84%E8%AF%9D&t=31&band_rank=40&Refer=top)
1. [曾舜晞在许飞面前画地为牢](https://s.weibo.com//weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E5%9C%A8%E8%AE%B8%E9%A3%9E%E9%9D%A2%E5%89%8D%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%23&t=31&band_rank=41&Refer=top)
1. [EDG冠军阵容解散](https://s.weibo.com//weibo?q=EDG%E5%86%A0%E5%86%9B%E9%98%B5%E5%AE%B9%E8%A7%A3%E6%95%A3&t=31&band_rank=42&Refer=top)
1. [阿里宣布平头哥赴港上市](https://s.weibo.com//weibo?q=%23%E9%98%BF%E9%87%8C%E5%AE%A3%E5%B8%83%E5%B9%B3%E5%A4%B4%E5%93%A5%E8%B5%B4%E6%B8%AF%E4%B8%8A%E5%B8%82%23&t=31&band_rank=43&Refer=top)
1. [CPI](https://s.weibo.com//weibo?q=CPI&t=31&band_rank=44&Refer=top)
1. [Sask说GEN打BLG四六开](https://s.weibo.com//weibo?q=%23Sask%E8%AF%B4GEN%E6%89%93BLG%E5%9B%9B%E5%85%AD%E5%BC%80%23&t=31&band_rank=45&Refer=top)
1. [iPhoneDuo不用抢了](https://s.weibo.com//weibo?q=%23iPhoneDuo%E4%B8%8D%E7%94%A8%E6%8A%A2%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [王曼昱混团或兼项女单女双](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%B7%B7%E5%9B%A2%E6%88%96%E5%85%BC%E9%A1%B9%E5%A5%B3%E5%8D%95%E5%A5%B3%E5%8F%8C&t=31&band_rank=47&Refer=top)
1. [警方通报司机溅湿路人强行撞车逃离](https://s.weibo.com//weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8F%B8%E6%9C%BA%E6%BA%85%E6%B9%BF%E8%B7%AF%E4%BA%BA%E5%BC%BA%E8%A1%8C%E6%92%9E%E8%BD%A6%E9%80%83%E7%A6%BB%23&t=31&band_rank=48&Refer=top)
1. [外国人高铁车厢抽烟引质疑](https://s.weibo.com//weibo?q=%E5%A4%96%E5%9B%BD%E4%BA%BA%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E6%8A%BD%E7%83%9F%E5%BC%95%E8%B4%A8%E7%96%91&t=31&band_rank=49&Refer=top)
1. [大连英博包揽金球金帅金童](https://s.weibo.com//weibo?q=%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%E5%8C%85%E6%8F%BD%E9%87%91%E7%90%83%E9%87%91%E5%B8%85%E9%87%91%E7%AB%A5&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
