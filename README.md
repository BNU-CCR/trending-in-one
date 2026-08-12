# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-13 01:15:32

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
<!-- 最后更新时间 Thu Aug 13 2026 00:31:18 GMT+0800 (China Standard Time) -->

1. [朱镕基同志逝世](https://so.toutiao.com/search?keyword=朱镕基同志逝世)
1. [朱镕基同志遗像发布](https://so.toutiao.com/search?keyword=朱镕基同志遗像发布)
1. [新能源汽车新车销量占比首超60%](https://so.toutiao.com/search?keyword=新能源汽车新车销量占比首超60%)
1. [《新闻联播》播发朱镕基逝世](https://so.toutiao.com/search?keyword=《新闻联播》播发朱镕基逝世)
1. [中方用孔子一句话送给美方](https://so.toutiao.com/search?keyword=中方用孔子一句话送给美方)
1. [上半年全国结婚登记327.5万对](https://so.toutiao.com/search?keyword=上半年全国结婚登记327.5万对)
1. [英仙座流星雨将迎来极大](https://so.toutiao.com/search?keyword=英仙座流星雨将迎来极大)
1. [C919圆满完成首次国际商业航班飞行](https://so.toutiao.com/search?keyword=C919圆满完成首次国际商业航班飞行)
1. [中印发生新的边境事件？中方回应](https://so.toutiao.com/search?keyword=中印发生新的边境事件？中方回应)
1. [酒店为何把小瓶洗护换成大瓶](https://so.toutiao.com/search?keyword=酒店为何把小瓶洗护换成大瓶)
1. [郭兰英1994年将演唱版权无偿捐国家](https://so.toutiao.com/search?keyword=郭兰英1994年将演唱版权无偿捐国家)
1. [上海安徽这些涉暴雨信息是谣言](https://so.toutiao.com/search?keyword=上海安徽这些涉暴雨信息是谣言)
1. [男子出轨销售买千万保险还转账350万](https://so.toutiao.com/search?keyword=男子出轨销售买千万保险还转账350万)
1. [赵一鸣零食被困在毛利里了吗](https://so.toutiao.com/search?keyword=赵一鸣零食被困在毛利里了吗)
1. [业内：机器人技术反向回流手机](https://so.toutiao.com/search?keyword=业内：机器人技术反向回流手机)
1. [胖东来弃租背后房东的“话事权”转移](https://so.toutiao.com/search?keyword=胖东来弃租背后房东的“话事权”转移)
1. [原来姚安娜是艺名](https://so.toutiao.com/search?keyword=原来姚安娜是艺名)
1. [普京穿军装在导弹巡洋舰上点名日本](https://so.toutiao.com/search?keyword=普京穿军装在导弹巡洋舰上点名日本)
1. [荣耀Magic9系列手机外观首曝](https://so.toutiao.com/search?keyword=荣耀Magic9系列手机外观首曝)
1. [伊朗：目前使用武器都是自主研发的](https://so.toutiao.com/search?keyword=伊朗：目前使用武器都是自主研发的)
1. [母亲与怀孕妻子遇害 男子发声](https://so.toutiao.com/search?keyword=母亲与怀孕妻子遇害%20男子发声)
1. [女孩在自家店里完成12部位颠球](https://so.toutiao.com/search?keyword=女孩在自家店里完成12部位颠球)
1. [男子分手十几年后欲要回金手镯](https://so.toutiao.com/search?keyword=男子分手十几年后欲要回金手镯)
1. [男子上班脑出血送医后死亡未认定工伤](https://so.toutiao.com/search?keyword=男子上班脑出血送医后死亡未认定工伤)
1. [四川阿坝州汶川县发生3.0级地震](https://so.toutiao.com/search?keyword=四川阿坝州汶川县发生3.0级地震)
1. [丁程鑫周柯宇躺张凌赫胸肌上](https://so.toutiao.com/search?keyword=丁程鑫周柯宇躺张凌赫胸肌上)
1. [冯小刚徐帆亮相成龙电影周闭幕式](https://so.toutiao.com/search?keyword=冯小刚徐帆亮相成龙电影周闭幕式)
1. [北特科技为何押上18.5亿入局机器人](https://so.toutiao.com/search?keyword=北特科技为何押上18.5亿入局机器人)
1. [女子躲雨遇热心店主狂买10件衣服](https://so.toutiao.com/search?keyword=女子躲雨遇热心店主狂买10件衣服)
1. [汽车实体按键“杀”回来了](https://so.toutiao.com/search?keyword=汽车实体按键“杀”回来了)
1. [红杉投资人李彦男正在关心什么](https://so.toutiao.com/search?keyword=红杉投资人李彦男正在关心什么)
1. [女儿想在同学家过夜被爸爸拒绝](https://so.toutiao.com/search?keyword=女儿想在同学家过夜被爸爸拒绝)
1. [男子伪装快递员杀害前女友被判死刑](https://so.toutiao.com/search?keyword=男子伪装快递员杀害前女友被判死刑)
1. [金饰冲高至1300元/克 未来走势如何](https://so.toutiao.com/search?keyword=金饰冲高至1300元/克%20未来走势如何)
1. [王晶现身哈尔滨港片“大佬”气场全开](https://so.toutiao.com/search?keyword=王晶现身哈尔滨港片“大佬”气场全开)
1. [贾冰：这两天的热搜快给我热馊了](https://so.toutiao.com/search?keyword=贾冰：这两天的热搜快给我热馊了)
1. [男子看病8天花8万治疗按分钟收费](https://so.toutiao.com/search?keyword=男子看病8天花8万治疗按分钟收费)
1. [香港打击街头卖淫20名女子被捕](https://so.toutiao.com/search?keyword=香港打击街头卖淫20名女子被捕)
1. [演员刘涛现身哈尔滨](https://so.toutiao.com/search?keyword=演员刘涛现身哈尔滨)
1. [伊朗总统向多名新任军事指挥官致贺信](https://so.toutiao.com/search?keyword=伊朗总统向多名新任军事指挥官致贺信)
1. [荣耀在谋划什么大项目](https://so.toutiao.com/search?keyword=荣耀在谋划什么大项目)
1. [56岁男子独闯南太行济源段失联3天](https://so.toutiao.com/search?keyword=56岁男子独闯南太行济源段失联3天)
1. [89家公募打新宇树科技获配近18亿](https://so.toutiao.com/search?keyword=89家公募打新宇树科技获配近18亿)
1. [越南为何陷入“越输出越难发展”怪圈](https://so.toutiao.com/search?keyword=越南为何陷入“越输出越难发展”怪圈)
1. [曝湖人将再度易主](https://so.toutiao.com/search?keyword=曝湖人将再度易主)
1. [博主：俄朝轮番亮剑打懵日本右翼](https://so.toutiao.com/search?keyword=博主：俄朝轮番亮剑打懵日本右翼)
1. [康师傅和统一为何对老产品越来越依赖](https://so.toutiao.com/search?keyword=康师傅和统一为何对老产品越来越依赖)
1. [郑海霞：对中国女篮冲击世界杯有信心](https://so.toutiao.com/search?keyword=郑海霞：对中国女篮冲击世界杯有信心)
1. [郑州交警回应车主为躲积水把车停高架](https://so.toutiao.com/search?keyword=郑州交警回应车主为躲积水把车停高架)
1. [高志凯：谁搞“台独”就是真正的汉奸](https://so.toutiao.com/search?keyword=高志凯：谁搞“台独”就是真正的汉奸)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Aug 13 2026 01:10:26 GMT+0800 (China Standard Time) -->

1. [朱镕基同志逝世](https://www.zhihu.com/search?q=%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96)
1. [王宝强0票](https://www.zhihu.com/search?q=%E7%8E%8B%E5%AE%9D%E5%BC%BA0%E7%A5%A8)
1. [腾讯发布二季度财报](https://www.zhihu.com/search?q=%E8%85%BE%E8%AE%AF%E5%8F%91%E5%B8%83%E4%BA%8C%E5%AD%A3%E5%BA%A6%E8%B4%A2%E6%8A%A5)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [英仙座流星雨](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BB%99%E5%BA%A7%E6%B5%81%E6%98%9F%E9%9B%A8)
1. [郭德纲篡改红歌武汉文旅立案](https://www.zhihu.com/search?q=%E9%83%AD%E5%BE%B7%E7%BA%B2%E7%AF%A1%E6%94%B9%E7%BA%A2%E6%AD%8C%E6%AD%A6%E6%B1%89%E6%96%87%E6%97%85%E7%AB%8B%E6%A1%88)
1. [荣耀发布会](https://www.zhihu.com/search?q=%E8%8D%A3%E8%80%80%E5%8F%91%E5%B8%83%E4%BC%9A)
1. [百万粉网红姜小柔因车祸去世](https://www.zhihu.com/search?q=%E7%99%BE%E4%B8%87%E7%B2%89%E7%BD%91%E7%BA%A2%E5%A7%9C%E5%B0%8F%E6%9F%94%E5%9B%A0%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96)
1. [网红巴旦木公主晒与卢本伟结婚照](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E6%99%92%E4%B8%8E%E5%8D%A2%E6%9C%AC%E4%BC%9F%E7%BB%93%E5%A9%9A%E7%85%A7)
1. [同济大学取消教师长期聘任](https://www.zhihu.com/search?q=%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%E5%8F%96%E6%B6%88%E6%95%99%E5%B8%88%E9%95%BF%E6%9C%9F%E8%81%98%E4%BB%BB)
1. [山西一实习护士晒患者隐私照](https://www.zhihu.com/search?q=%E5%B1%B1%E8%A5%BF%E4%B8%80%E5%AE%9E%E4%B9%A0%E6%8A%A4%E5%A3%AB%E6%99%92%E6%82%A3%E8%80%85%E9%9A%90%E7%A7%81%E7%85%A7)
1. [Claude黎曼猜想获重大突破](https://www.zhihu.com/search?q=Claude%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E8%8E%B7%E9%87%8D%E5%A4%A7%E7%AA%81%E7%A0%B4)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Aug 13 2026 01:15:32 GMT+0800 (China Standard Time) -->

1. [中共中央 全国人大常委会 国务院 全国政协讣告 朱镕基同志逝世](https://www.zhihu.com/question/2070933430993414087)
1. [上海、浙江等多地试点直升高中，部分学校改为十二年一贯制，怎样看待这种模式？中考的功能可能发生哪些变化？](https://www.zhihu.com/question/2070815706040329700)
1. [据媒体报道部分手机壳疑似采用废弃针管等医疗垃圾加工而成，真的吗？对健康会有多大危害？消费者该如何辨别？](https://www.zhihu.com/question/2070066925363619000)
1. [DeepSeek Pro正式版已经发布，如何评价该模型？](https://www.zhihu.com/question/2071014727606703000)
1. [赵一鸣牛肉干 64 元复称仅 17 元，店方称不知道为啥出错，暴露了哪些管理漏洞？消费者如何避免被坑？](https://www.zhihu.com/question/2070790151454684400)
1. [黑洞的引力如此之大，连光都无法逃脱，那它内部的物质最终去了哪里？](https://www.zhihu.com/question/1943680908252148200)
1. [内蒙古一警车被指擅自更换车标，警方称正在整改，会面临哪些处罚？警车作为执法车辆为何会出现此类违规操作？](https://www.zhihu.com/question/2070438924262930000)
1. [腾讯发布二季度财报，上半年资本开支增长 82%，二季度达到 527.84 亿元，如何解读？](https://www.zhihu.com/question/2070928873705791700)
1. [你认为川菜的麻辣是为了祛湿，还是为了掩盖食材不新鲜味道？](https://www.zhihu.com/question/2065696591072203800)
1. [7 月小米 SU7 销量 21,044 辆，连续 4 个月位列 20 万以上轿车销量第一，如何评价？](https://www.zhihu.com/question/2070807325699580700)
1. [《王者荣耀世界》第二赛季无限期延期，官方补偿 6500 玄晶加 10 连抽，玩家会买账吗？](https://www.zhihu.com/question/2070571923441034500)
1. [为什么《哪吒之魔童闹海》获百花奖最佳影片无人站起，《惊蛰无声》获优秀影片，现场全体起立？](https://www.zhihu.com/question/2070482846033121800)
1. [如果城市允许骑马，且有公共马厩供马休息，你愿意骑马通勤吗？](https://www.zhihu.com/question/2061806723862631200)
1. [女子开一天一夜空调后确诊呼吸性碱中毒，是空调导致的吗？为什么会被误传为「二氧化碳中毒」，二者有何区别？](https://www.zhihu.com/question/2068973888067965000)
1. [梁文锋财富一年暴涨 3850% ，跻身全球亿万富豪榜，他是如何做到的？](https://www.zhihu.com/question/2070810807168980700)
1. [家庭资产几乎都在房子里，到底危险在哪？](https://www.zhihu.com/question/2070454238250111500)
1. [我一个月挣3000，有必要花时间去看《资治通鉴》这种书吗？看了又意义何在？](https://www.zhihu.com/question/665158131)
1. [为什么液体可以完全浮在水上面，固体则必须被淹没一部分？](https://www.zhihu.com/question/11742854315)
1. [为什么《蜘蛛侠》能拍「交不起房租」，国产大片却总在拍「光鲜亮丽的拯救世界」？](https://www.zhihu.com/question/2068356359494559500)
1. [方博0-3不敌卡纳克-贾哈，止步瑞典大满贯首轮，如何评价本场比赛两人的表现？](https://www.zhihu.com/question/2070981033655378200)
1. [雷军称小米成功量产发光材料，成为国内首家实现底层发光材料自研的手机厂商，这意味着什么？会带来什么改变？](https://www.zhihu.com/question/2070796946256520000)
1. [如何看待杨奇回应《黑神话：钟馗》进度「设计阶段会远离 AIGC 工具，诺兰的奥德赛也是古法创作」？](https://www.zhihu.com/question/2070508935673378600)
1. [为什么有的人天生「精力旺盛」，有的人天生「低精力」？](https://www.zhihu.com/question/2069144593418003500)
1. [如何看待京东上大规模出现「李鬼」笔记本电脑？](https://www.zhihu.com/question/2070197481544202000)
1. [为什么一些东北的朋友经常称“手机”为“电话”？](https://www.zhihu.com/question/2050334625361294800)
1. [《影之刃 零》游戏预告中有位女性角色“炼邪”，身着铁质胸甲在打铁，这样穿真的不怕烫伤吗？](https://www.zhihu.com/question/2070909531006283800)
1. [如何评价2026年8月米哈游《原神》7.0至冬，死之执政若娜瓦戏份？](https://www.zhihu.com/question/2070950459226035000)
1. [LPL2026赛季第三赛段组内赛BLG 1:2 JDG，如何评价这场比赛？](https://www.zhihu.com/question/2070969819730536400)
1. [武大靖出任中国短道速滑队主教练，他有哪些优势？将面临哪些挑战？](https://www.zhihu.com/question/2070877052618782000)
1. [如何看待2026上半年韩国和台湾地区的出口额超过了日本？](https://www.zhihu.com/question/2070341346217534500)
1. [如何评价2026年8月米哈游《原神》7.0【至冬】大世界地图？](https://www.zhihu.com/question/2070554826006599200)
1. [jdk21到jdk25，为什么基本没见java圈对虚拟线程有什么热度，还在抱在老一套线程池？](https://www.zhihu.com/question/1963249539436766700)

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
<!-- 最后更新时间 Thu Aug 13 2026 00:15:14 GMT+0800 (China Standard Time) -->

1. [用严明的纪律管全党治全党](https://s.weibo.com//weibo?q=%23%E7%94%A8%E4%B8%A5%E6%98%8E%E7%9A%84%E7%BA%AA%E5%BE%8B%E7%AE%A1%E5%85%A8%E5%85%9A%E6%B2%BB%E5%85%A8%E5%85%9A%23&Refer=new_time)
1. [朱镕基同志逝世](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23&t=31&band_rank=1&Refer=top)
1. [微信群聊可以彻底关闭通知了](https://s.weibo.com//weibo?q=%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%81%8A%E5%8F%AF%E4%BB%A5%E5%BD%BB%E5%BA%95%E5%85%B3%E9%97%AD%E9%80%9A%E7%9F%A5%E4%BA%86&t=31&band_rank=2&Refer=top)
1. [60万亿元消费蓝海要来了](https://s.weibo.com//weibo?q=%2360%E4%B8%87%E4%BA%BF%E5%85%83%E6%B6%88%E8%B4%B9%E8%93%9D%E6%B5%B7%E8%A6%81%E6%9D%A5%E4%BA%86%23&t=31&band_rank=3&Refer=top)
1. [喜欢穿洞洞鞋的人天塌了](https://s.weibo.com//weibo?q=%23%E5%96%9C%E6%AC%A2%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23&t=31&band_rank=4&Refer=top)
1. [湖人售价120亿美元](https://s.weibo.com//weibo?q=%23%E6%B9%96%E4%BA%BA%E5%94%AE%E4%BB%B7120%E4%BA%BF%E7%BE%8E%E5%85%83%23&t=31&band_rank=5&Refer=top)
1. [龙餐馆](https://s.weibo.com//weibo?q=%E9%BE%99%E9%A4%90%E9%A6%86&t=31&band_rank=6&Refer=top)
1. [英仙座流星雨](https://s.weibo.com//weibo?q=%E8%8B%B1%E4%BB%99%E5%BA%A7%E6%B5%81%E6%98%9F%E9%9B%A8&t=31&band_rank=7&Refer=top)
1. [虞书欣丁禹兮 我欲乘风](https://s.weibo.com//weibo?q=%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%81%E7%A6%B9%E5%85%AE%20%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E&t=31&band_rank=8&Refer=top)
1. [流星雨 许愿](https://s.weibo.com//weibo?q=%E6%B5%81%E6%98%9F%E9%9B%A8%20%E8%AE%B8%E6%84%BF&t=31&band_rank=9&Refer=top)
1. [JDG战胜BLG](https://s.weibo.com//weibo?q=JDG%E6%88%98%E8%83%9CBLG&t=31&band_rank=10&Refer=top)
1. [任敏漂亮到不敢认](https://s.weibo.com//weibo?q=%23%E4%BB%BB%E6%95%8F%E6%BC%82%E4%BA%AE%E5%88%B0%E4%B8%8D%E6%95%A2%E8%AE%A4%23&t=31&band_rank=11&Refer=top)
1. [李雪健已经完全听不见了](https://s.weibo.com//weibo?q=%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E7%BB%8F%E5%AE%8C%E5%85%A8%E5%90%AC%E4%B8%8D%E8%A7%81%E4%BA%86&t=31&band_rank=12&Refer=top)
1. [3孩非亲生案女方称已确诊重度抑郁](https://s.weibo.com//weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A5%B3%E6%96%B9%E7%A7%B0%E5%B7%B2%E7%A1%AE%E8%AF%8A%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%23&t=31&band_rank=13&Refer=top)
1. [迪丽热巴扫货十分钟买了十几件](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%AB%E8%B4%A7%E5%8D%81%E5%88%86%E9%92%9F%E4%B9%B0%E4%BA%86%E5%8D%81%E5%87%A0%E4%BB%B6%23&t=31&band_rank=14&Refer=top)
1. [内娱神剧 出轨雌竞](https://s.weibo.com//weibo?q=%E5%86%85%E5%A8%B1%E7%A5%9E%E5%89%A7%20%E5%87%BA%E8%BD%A8%E9%9B%8C%E7%AB%9E&t=31&band_rank=15&Refer=top)
1. [胖东来许昌老店关闭周边商户发声](https://s.weibo.com//weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%AE%B8%E6%98%8C%E8%80%81%E5%BA%97%E5%85%B3%E9%97%AD%E5%91%A8%E8%BE%B9%E5%95%86%E6%88%B7%E5%8F%91%E5%A3%B0%23&t=31&band_rank=16&Refer=top)
1. [花开锦绣热度](https://s.weibo.com//weibo?q=%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E7%83%AD%E5%BA%A6&t=31&band_rank=17&Refer=top)
1. [时代峰峻招聘薪资](https://s.weibo.com//weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%8B%9B%E8%81%98%E8%96%AA%E8%B5%84%23&t=31&band_rank=18&Refer=top)
1. [泰国失联女孩祁萌更新社媒](https://s.weibo.com//weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A4%B1%E8%81%94%E5%A5%B3%E5%AD%A9%E7%A5%81%E8%90%8C%E6%9B%B4%E6%96%B0%E7%A4%BE%E5%AA%92%23&t=31&band_rank=19&Refer=top)
1. [荣耀RobotPhone价格](https://s.weibo.com//weibo?q=%23%E8%8D%A3%E8%80%80RobotPhone%E4%BB%B7%E6%A0%BC%23&t=31&band_rank=20&Refer=top)
1. [没药花园谈绑匪撕票](https://s.weibo.com//weibo?q=%23%E6%B2%A1%E8%8D%AF%E8%8A%B1%E5%9B%AD%E8%B0%88%E7%BB%91%E5%8C%AA%E6%92%95%E7%A5%A8%23&t=31&band_rank=21&Refer=top)
1. [迪丽热巴美商](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BE%8E%E5%95%86%23&t=31&band_rank=22&Refer=top)
1. [日全食](https://s.weibo.com//weibo?q=%E6%97%A5%E5%85%A8%E9%A3%9F&t=31&band_rank=23&Refer=top)
1. [王加一分享和肖战相识的过往](https://s.weibo.com//weibo?q=%E7%8E%8B%E5%8A%A0%E4%B8%80%E5%88%86%E4%BA%AB%E5%92%8C%E8%82%96%E6%88%98%E7%9B%B8%E8%AF%86%E7%9A%84%E8%BF%87%E5%BE%80&t=31&band_rank=24&Refer=top)
1. [马天宇 麦迪娜你要跟谁结婚](https://s.weibo.com//weibo?q=%E9%A9%AC%E5%A4%A9%E5%AE%87%20%E9%BA%A6%E8%BF%AA%E5%A8%9C%E4%BD%A0%E8%A6%81%E8%B7%9F%E8%B0%81%E7%BB%93%E5%A9%9A&t=31&band_rank=25&Refer=top)
1. [BLG圣枪哥首秀失利](https://s.weibo.com//weibo?q=%23BLG%E5%9C%A3%E6%9E%AA%E5%93%A5%E9%A6%96%E7%A7%80%E5%A4%B1%E5%88%A9%23&t=31&band_rank=26&Refer=top)
1. [演唱会 11连坐](https://s.weibo.com//weibo?q=%E6%BC%94%E5%94%B1%E4%BC%9A%2011%E8%BF%9E%E5%9D%90&t=31&band_rank=27&Refer=top)
1. [龙餐馆 老扎](https://s.weibo.com//weibo?q=%E9%BE%99%E9%A4%90%E9%A6%86%20%E8%80%81%E6%89%8E&t=31&band_rank=28&Refer=top)
1. [全裸坠亡币圈富豪房间内细节曝光](https://s.weibo.com//weibo?q=%23%E5%85%A8%E8%A3%B8%E5%9D%A0%E4%BA%A1%E5%B8%81%E5%9C%88%E5%AF%8C%E8%B1%AA%E6%88%BF%E9%97%B4%E5%86%85%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23&t=31&band_rank=29&Refer=top)
1. [岛内称台军演习让解放军牙都笑歪了](https://s.weibo.com//weibo?q=%23%E5%B2%9B%E5%86%85%E7%A7%B0%E5%8F%B0%E5%86%9B%E6%BC%94%E4%B9%A0%E8%AE%A9%E8%A7%A3%E6%94%BE%E5%86%9B%E7%89%99%E9%83%BD%E7%AC%91%E6%AD%AA%E4%BA%86%23&t=31&band_rank=30&Refer=top)
1. [内娱今年仅12人上身大牌高定](https://s.weibo.com//weibo?q=%E5%86%85%E5%A8%B1%E4%BB%8A%E5%B9%B4%E4%BB%8512%E4%BA%BA%E4%B8%8A%E8%BA%AB%E5%A4%A7%E7%89%8C%E9%AB%98%E5%AE%9A&t=31&band_rank=31&Refer=top)
1. [时代峰峻把所有岗位招了一遍](https://s.weibo.com//weibo?q=%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%8A%8A%E6%89%80%E6%9C%89%E5%B2%97%E4%BD%8D%E6%8B%9B%E4%BA%86%E4%B8%80%E9%81%8D&t=31&band_rank=32&Refer=top)
1. [江泽民同志诞辰100周年](https://s.weibo.com//weibo?q=%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4&t=31&band_rank=33&Refer=top)
1. [初代网红晚晚开始卖衣服](https://s.weibo.com//weibo?q=%23%E5%88%9D%E4%BB%A3%E7%BD%91%E7%BA%A2%E6%99%9A%E6%99%9A%E5%BC%80%E5%A7%8B%E5%8D%96%E8%A1%A3%E6%9C%8D%23&t=31&band_rank=34&Refer=top)
1. [周杰伦MV女孩回应](https://s.weibo.com//weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6MV%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%23&t=31&band_rank=35&Refer=top)
1. [银行能办结婚证了](https://s.weibo.com//weibo?q=%23%E9%93%B6%E8%A1%8C%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23&t=31&band_rank=36&Refer=top)
1. [C罗宣布结婚](https://s.weibo.com//weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23&t=31&band_rank=37&Refer=top)
1. [张睿 李若嘉](https://s.weibo.com//weibo?q=%E5%BC%A0%E7%9D%BF%20%E6%9D%8E%E8%8B%A5%E5%98%89&t=31&band_rank=38&Refer=top)
1. [Lululemon劲敌来中国了](https://s.weibo.com//weibo?q=%23Lululemon%E5%8A%B2%E6%95%8C%E6%9D%A5%E4%B8%AD%E5%9B%BD%E4%BA%86%23&t=31&band_rank=39&Refer=top)
1. [这段话缓解了我的焦虑](https://s.weibo.com//weibo?q=%E8%BF%99%E6%AE%B5%E8%AF%9D%E7%BC%93%E8%A7%A3%E4%BA%86%E6%88%91%E7%9A%84%E7%84%A6%E8%99%91&t=31&band_rank=40&Refer=top)
1. [曝张真源将录制声生不息](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%B0%86%E5%BD%95%E5%88%B6%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%23&t=31&band_rank=41&Refer=top)
1. [卫健委介入17岁女孩流产监护人不知情](https://s.weibo.com//weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E4%BB%8B%E5%85%A517%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%B5%81%E4%BA%A7%E7%9B%91%E6%8A%A4%E4%BA%BA%E4%B8%8D%E7%9F%A5%E6%83%85%23&t=31&band_rank=42&Refer=top)
1. [天坛公园保洁用海绵吸水挤到桶里](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E5%9D%9B%E5%85%AC%E5%9B%AD%E4%BF%9D%E6%B4%81%E7%94%A8%E6%B5%B7%E7%BB%B5%E5%90%B8%E6%B0%B4%E6%8C%A4%E5%88%B0%E6%A1%B6%E9%87%8C%23&t=31&band_rank=43&Refer=top)
1. [SYG零封KSG](https://s.weibo.com//weibo?q=%23SYG%E9%9B%B6%E5%B0%81KSG%23&t=31&band_rank=44&Refer=top)
1. [送礼要送有溢价的东西](https://s.weibo.com//weibo?q=%E9%80%81%E7%A4%BC%E8%A6%81%E9%80%81%E6%9C%89%E6%BA%A2%E4%BB%B7%E7%9A%84%E4%B8%9C%E8%A5%BF&t=31&band_rank=45&Refer=top)
1. [田曦薇新剧照](https://s.weibo.com//weibo?q=%E7%94%B0%E6%9B%A6%E8%96%87%E6%96%B0%E5%89%A7%E7%85%A7&t=31&band_rank=46&Refer=top)
1. [TF四代彩排照](https://s.weibo.com//weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%BD%A9%E6%8E%92%E7%85%A7%23&t=31&band_rank=47&Refer=top)
1. [普京说俄罗斯对日本没有诉求](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E4%BF%84%E7%BD%97%E6%96%AF%E5%AF%B9%E6%97%A5%E6%9C%AC%E6%B2%A1%E6%9C%89%E8%AF%89%E6%B1%82%23&t=31&band_rank=48&Refer=top)
1. [腾讯回应负自由现金流138亿元](https://s.weibo.com//weibo?q=%23%E8%85%BE%E8%AE%AF%E5%9B%9E%E5%BA%94%E8%B4%9F%E8%87%AA%E7%94%B1%E7%8E%B0%E9%87%91%E6%B5%81138%E4%BA%BF%E5%85%83%23&t=31&band_rank=49&Refer=top)
1. [女子进店避雨后买9件衣服回馈善意](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%9B%E5%BA%97%E9%81%BF%E9%9B%A8%E5%90%8E%E4%B9%B09%E4%BB%B6%E8%A1%A3%E6%9C%8D%E5%9B%9E%E9%A6%88%E5%96%84%E6%84%8F%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
