# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-17 00:59:01

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
<!-- 最后更新时间 Wed Sep 16 2026 20:48:52 GMT+0800 (China Standard Time) -->

1. [亚运会U23国足2-1逆转朝鲜](https://so.toutiao.com/search?keyword=亚运会U23国足2-1逆转朝鲜)
1. [马来西亚总理强硬回应扣押以色列货物](https://so.toutiao.com/search?keyword=马来西亚总理强硬回应扣押以色列货物)
1. [夏粮收购总量超1亿吨](https://so.toutiao.com/search?keyword=夏粮收购总量超1亿吨)
1. [董军：对霸权主义军国主义保持警惕](https://so.toutiao.com/search?keyword=董军：对霸权主义军国主义保持警惕)
1. [父母离世后小伙3次应征终入伍](https://so.toutiao.com/search?keyword=父母离世后小伙3次应征终入伍)
1. [校方回应小学生雨天打伞端饭盒回教室](https://so.toutiao.com/search?keyword=校方回应小学生雨天打伞端饭盒回教室)
1. [近百国代表齐聚北京香山论坛](https://so.toutiao.com/search?keyword=近百国代表齐聚北京香山论坛)
1. [父母送独女入伍临行前久久相拥](https://so.toutiao.com/search?keyword=父母送独女入伍临行前久久相拥)
1. [杜特尔特被羁押18个月后现身法庭](https://so.toutiao.com/search?keyword=杜特尔特被羁押18个月后现身法庭)
1. [男子钓鱼钓到“水中杀手”鳄雀鳝](https://so.toutiao.com/search?keyword=男子钓鱼钓到“水中杀手”鳄雀鳝)
1. [“民政部组织国盛民安补贴工程”不实](https://so.toutiao.com/search?keyword=“民政部组织国盛民安补贴工程”不实)
1. [10岁男童轻生警方撤回不予立案](https://so.toutiao.com/search?keyword=10岁男童轻生警方撤回不予立案)
1. [日媒：朝鲜体育相将赴日出席亚运会](https://so.toutiao.com/search?keyword=日媒：朝鲜体育相将赴日出席亚运会)
1. [香港住房新政落地意味着什么](https://so.toutiao.com/search?keyword=香港住房新政落地意味着什么)
1. [于东来骑张雪机车园区“遛弯”](https://so.toutiao.com/search?keyword=于东来骑张雪机车园区“遛弯”)
1. [怦然心动导演夫妇被儿子刺死案新进展](https://so.toutiao.com/search?keyword=怦然心动导演夫妇被儿子刺死案新进展)
1. [俄高级将领疑被乌军干掉？大V解读](https://so.toutiao.com/search?keyword=俄高级将领疑被乌军干掉？大V解读)
1. [女孩字正腔圆演讲气场惊艳众人](https://so.toutiao.com/search?keyword=女孩字正腔圆演讲气场惊艳众人)
1. [女子徒手掐隐翅虫玩结果中招了](https://so.toutiao.com/search?keyword=女子徒手掐隐翅虫玩结果中招了)
1. [评论员：A股反弹释放强心剂](https://so.toutiao.com/search?keyword=评论员：A股反弹释放强心剂)
1. [退休副省长家丢了243万元茅台名酒](https://so.toutiao.com/search?keyword=退休副省长家丢了243万元茅台名酒)
1. [研究发现每天吃够豆类高血压风险降低](https://so.toutiao.com/search?keyword=研究发现每天吃够豆类高血压风险降低)
1. [亚运会开幕式中国代表团旗手确定](https://so.toutiao.com/search?keyword=亚运会开幕式中国代表团旗手确定)
1. [机构：美联储今晚或“鸽派加息”](https://so.toutiao.com/search?keyword=机构：美联储今晚或“鸽派加息”)
1. [80后富豪要掏30亿救哪吒汽车图什么](https://so.toutiao.com/search?keyword=80后富豪要掏30亿救哪吒汽车图什么)
1. [男孩入伍与女友隔着围栏牵手久久不放](https://so.toutiao.com/search?keyword=男孩入伍与女友隔着围栏牵手久久不放)
1. [铜价站上历史高位废铜也成“香饽饽”](https://so.toutiao.com/search?keyword=铜价站上历史高位废铜也成“香饽饽”)
1. [女子称买海螺意外开出粉色“海螺珠”](https://so.toutiao.com/search?keyword=女子称买海螺意外开出粉色“海螺珠”)
1. [韩企用死者皮肤提取物美容引争议](https://so.toutiao.com/search?keyword=韩企用死者皮肤提取物美容引争议)
1. [崔天凯：一劳永逸解决台湾问题](https://so.toutiao.com/search?keyword=崔天凯：一劳永逸解决台湾问题)
1. [黑龙江女兵被国家仪仗队选中](https://so.toutiao.com/search?keyword=黑龙江女兵被国家仪仗队选中)
1. [宁德时代为何被叫“老登”](https://so.toutiao.com/search?keyword=宁德时代为何被叫“老登”)
1. [丁文虎已任江苏省铁路集团总经理](https://so.toutiao.com/search?keyword=丁文虎已任江苏省铁路集团总经理)
1. [日本坠毁的全球鹰无人机性能如何](https://so.toutiao.com/search?keyword=日本坠毁的全球鹰无人机性能如何)
1. [默茨对华变脸也想打“经济安全”牌吗](https://so.toutiao.com/search?keyword=默茨对华变脸也想打“经济安全”牌吗)
1. [亚运会中国代表团自带检测设备？不实](https://so.toutiao.com/search?keyword=亚运会中国代表团自带检测设备？不实)
1. [曝许嵩冯禧结婚](https://so.toutiao.com/search?keyword=曝许嵩冯禧结婚)
1. [任泽平：美联储加息预期升温](https://so.toutiao.com/search?keyword=任泽平：美联储加息预期升温)
1. [联合国维和副秘书长感谢中国维和军人](https://so.toutiao.com/search?keyword=联合国维和副秘书长感谢中国维和军人)
1. [张维为：台民众谈论统一增多是好趋势](https://so.toutiao.com/search?keyword=张维为：台民众谈论统一增多是好趋势)
1. [胡明轩全场6投2中得到5分](https://so.toutiao.com/search?keyword=胡明轩全场6投2中得到5分)
1. [俄乌继续互相发动无人机袭击](https://so.toutiao.com/search?keyword=俄乌继续互相发动无人机袭击)
1. [光通信+半导体双主线爆发](https://so.toutiao.com/search?keyword=光通信+半导体双主线爆发)
1. [新兵出征怕妈妈掉眼泪未让亲人送别](https://so.toutiao.com/search?keyword=新兵出征怕妈妈掉眼泪未让亲人送别)
1. [刀郎音乐会巡演深圳站售罄](https://so.toutiao.com/search?keyword=刀郎音乐会巡演深圳站售罄)
1. [张雪：重庆摩托车配套资源很丰富](https://so.toutiao.com/search?keyword=张雪：重庆摩托车配套资源很丰富)
1. [四川茂县山体滑坡 161人被提前转移](https://so.toutiao.com/search?keyword=四川茂县山体滑坡%20161人被提前转移)
1. [平陆运河通航对广西有何好处](https://so.toutiao.com/search?keyword=平陆运河通航对广西有何好处)
1. [中越防长友好交流](https://so.toutiao.com/search?keyword=中越防长友好交流)
1. [乌军方称打死俄军一名少将](https://so.toutiao.com/search?keyword=乌军方称打死俄军一名少将)
1. [多国奥委会批评日本](https://so.toutiao.com/search?keyword=多国奥委会批评日本)
1. [一线城市房价涨了](https://so.toutiao.com/search?keyword=一线城市房价涨了)
1. [一组数字解码平陆运河](https://so.toutiao.com/search?keyword=一组数字解码平陆运河)
1. [警方调查“南方医科大学跳楼事件”](https://so.toutiao.com/search?keyword=警方调查“南方医科大学跳楼事件”)
1. [弟弟离世数周社恐哥哥无法自理死亡](https://so.toutiao.com/search?keyword=弟弟离世数周社恐哥哥无法自理死亡)
1. [赵家驹巨人之旅破纪录夺冠](https://so.toutiao.com/search?keyword=赵家驹巨人之旅破纪录夺冠)
1. [韩国法院判朝鲜赔偿446亿韩元](https://so.toutiao.com/search?keyword=韩国法院判朝鲜赔偿446亿韩元)
1. [32岁教师因病去世 朋友圈留绝笔信](https://so.toutiao.com/search?keyword=32岁教师因病去世%20朋友圈留绝笔信)
1. [女儿撮合离异母亲与丧偶公公结婚](https://so.toutiao.com/search?keyword=女儿撮合离异母亲与丧偶公公结婚)
1. [不良信息一键举报 共建清朗网络空间](https://so.toutiao.com/search?keyword=不良信息一键举报%20共建清朗网络空间)
1. [平陆运河将如何改变广西经济地理格局](https://so.toutiao.com/search?keyword=平陆运河将如何改变广西经济地理格局)
1. [中国女排击败菲律宾斩获亚运开门红](https://so.toutiao.com/search?keyword=中国女排击败菲律宾斩获亚运开门红)
1. [文章再现名梗哥哥我顺极了](https://so.toutiao.com/search?keyword=文章再现名梗哥哥我顺极了)
1. [我国人口总量14.05亿](https://so.toutiao.com/search?keyword=我国人口总量14.05亿)
1. [张雪打车被认出后幽默否认](https://so.toutiao.com/search?keyword=张雪打车被认出后幽默否认)
1. [中美签订20年LNG购销大单意味着什么](https://so.toutiao.com/search?keyword=中美签订20年LNG购销大单意味着什么)
1. [演员王凯在光明日报发文](https://so.toutiao.com/search?keyword=演员王凯在光明日报发文)
1. [紫薯和红薯营养到底差在哪](https://so.toutiao.com/search?keyword=紫薯和红薯营养到底差在哪)
1. [iOS 27表现如何](https://so.toutiao.com/search?keyword=iOS%2027表现如何)
1. [AI开始预测人类](https://so.toutiao.com/search?keyword=AI开始预测人类)
1. [国乒出征亚运会 马龙特地送行](https://so.toutiao.com/search?keyword=国乒出征亚运会%20马龙特地送行)
1. [曝赛力斯每卖一辆车车价10%归华为](https://so.toutiao.com/search?keyword=曝赛力斯每卖一辆车车价10%归华为)
1. [尹锡悦涉嫌作伪证案二审被判无罪](https://so.toutiao.com/search?keyword=尹锡悦涉嫌作伪证案二审被判无罪)
1. [“干饭哥”盛李豪随队出征亚运会](https://so.toutiao.com/search?keyword=“干饭哥”盛李豪随队出征亚运会)
1. [重庆市级文物马家洋房流拍后降价百万](https://so.toutiao.com/search?keyword=重庆市级文物马家洋房流拍后降价百万)
1. [国台办：祖国统一大势不可阻挡](https://so.toutiao.com/search?keyword=国台办：祖国统一大势不可阻挡)
1. [周鸿祎称不会再投资新能源汽车](https://so.toutiao.com/search?keyword=周鸿祎称不会再投资新能源汽车)
1. [平陆运河迎来正式通航](https://so.toutiao.com/search?keyword=平陆运河迎来正式通航)
1. [解放军仪仗司礼大队亮相北京香山论坛](https://so.toutiao.com/search?keyword=解放军仪仗司礼大队亮相北京香山论坛)
1. [峰学蔚来中秋国庆连休23天](https://so.toutiao.com/search?keyword=峰学蔚来中秋国庆连休23天)
1. [亲历者：54年前平陆运河勘测很辛苦](https://so.toutiao.com/search?keyword=亲历者：54年前平陆运河勘测很辛苦)
1. [韩国男篮34分大胜约旦杀进四强](https://so.toutiao.com/search?keyword=韩国男篮34分大胜约旦杀进四强)
1. [民营航天真要起飞了吗](https://so.toutiao.com/search?keyword=民营航天真要起飞了吗)
1. [提前偿债省份扩围 天津拟还4亿](https://so.toutiao.com/search?keyword=提前偿债省份扩围%20天津拟还4亿)
1. [国台办批台当局阻挡两岸同胞走近走亲](https://so.toutiao.com/search?keyword=国台办批台当局阻挡两岸同胞走近走亲)
1. [沙特为何喊停对欧洲的部分石油供应](https://so.toutiao.com/search?keyword=沙特为何喊停对欧洲的部分石油供应)
1. [宋凯观看U23男足赛前训练](https://so.toutiao.com/search?keyword=宋凯观看U23男足赛前训练)
1. [朵朵不知道佟丽娅陈思诚离婚](https://so.toutiao.com/search?keyword=朵朵不知道佟丽娅陈思诚离婚)
1. [血糖忽高忽低有何危害](https://so.toutiao.com/search?keyword=血糖忽高忽低有何危害)
1. [野人先生创始人：别跟着差评做产品](https://so.toutiao.com/search?keyword=野人先生创始人：别跟着差评做产品)
1. [俄印先进民航客机生产项目会失败吗](https://so.toutiao.com/search?keyword=俄印先进民航客机生产项目会失败吗)
1. [董军出席北京香山论坛开幕式](https://so.toutiao.com/search?keyword=董军出席北京香山论坛开幕式)
1. [芯片的这波繁荣有何不同](https://so.toutiao.com/search?keyword=芯片的这波繁荣有何不同)
1. [李大霄：辞职炒股是不理性的](https://so.toutiao.com/search?keyword=李大霄：辞职炒股是不理性的)
1. [越南能接班世界工厂吗](https://so.toutiao.com/search?keyword=越南能接班世界工厂吗)
1. [国台办回应台湾学生历史认知混乱](https://so.toutiao.com/search?keyword=国台办回应台湾学生历史认知混乱)
1. [速溶咖啡可能加速衰老](https://so.toutiao.com/search?keyword=速溶咖啡可能加速衰老)
1. [隐翅虫为何出现在北方](https://so.toutiao.com/search?keyword=隐翅虫为何出现在北方)
1. [中国为什么又和美国签署天然气长约](https://so.toutiao.com/search?keyword=中国为什么又和美国签署天然气长约)
1. [一组数据看8月份国民经济运行平稳](https://so.toutiao.com/search?keyword=一组数据看8月份国民经济运行平稳)
1. [华为高层内部万字长文曝光](https://so.toutiao.com/search?keyword=华为高层内部万字长文曝光)
1. [西部多了一个“沿海城市”意味着什么](https://so.toutiao.com/search?keyword=西部多了一个“沿海城市”意味着什么)
1. [央视拿下日本名古屋亚运会主转播权](https://so.toutiao.com/search?keyword=央视拿下日本名古屋亚运会主转播权)
1. [快递公司为啥抢着上无人车](https://so.toutiao.com/search?keyword=快递公司为啥抢着上无人车)
1. [胡塞武装为何能在也门逼退沙特战机](https://so.toutiao.com/search?keyword=胡塞武装为何能在也门逼退沙特战机)
1. [大爷进山失联 民警放鞭炮辨位找回](https://so.toutiao.com/search?keyword=大爷进山失联%20民警放鞭炮辨位找回)
1. [女生花12小时做拼豆送姚安娜](https://so.toutiao.com/search?keyword=女生花12小时做拼豆送姚安娜)
1. [范玮琪曾说陈建州滴酒不沾](https://so.toutiao.com/search?keyword=范玮琪曾说陈建州滴酒不沾)
1. [存1万定期1年但忘了30年](https://so.toutiao.com/search?keyword=存1万定期1年但忘了30年)
1. [媒体：台湾恐被推向更险境](https://so.toutiao.com/search?keyword=媒体：台湾恐被推向更险境)
1. [专家：楼市基本触底](https://so.toutiao.com/search?keyword=专家：楼市基本触底)
1. [姆巴佩在西甲面对23队全部取得进球](https://so.toutiao.com/search?keyword=姆巴佩在西甲面对23队全部取得进球)
1. [罗援：台湾问题是中国核心利益的核心](https://so.toutiao.com/search?keyword=罗援：台湾问题是中国核心利益的核心)
1. [樊振东未参赛登亚运会海报原因](https://so.toutiao.com/search?keyword=樊振东未参赛登亚运会海报原因)
1. [“黑人”陈建州心梗入院](https://so.toutiao.com/search?keyword=“黑人”陈建州心梗入院)
1. [俄无人机差点打到英前首相？俄方回应](https://so.toutiao.com/search?keyword=俄无人机差点打到英前首相？俄方回应)
1. [南京一高校学生大晚上排长队洗澡](https://so.toutiao.com/search?keyword=南京一高校学生大晚上排长队洗澡)
1. [媒体评烈性犬牛头梗失控咬伤四五人](https://so.toutiao.com/search?keyword=媒体评烈性犬牛头梗失控咬伤四五人)
1. [10后学生流行起“呆毛”发型](https://so.toutiao.com/search?keyword=10后学生流行起“呆毛”发型)
1. [敬一丹：亲历中国电视改革](https://so.toutiao.com/search?keyword=敬一丹：亲历中国电视改革)
1. [MCN批量造“村长”带货](https://so.toutiao.com/search?keyword=MCN批量造“村长”带货)
1. [云南一村山体开裂出现“马刀树”](https://so.toutiao.com/search?keyword=云南一村山体开裂出现“马刀树”)
1. [老人接到女儿离世噩耗 导游助其回家](https://so.toutiao.com/search?keyword=老人接到女儿离世噩耗%20导游助其回家)
1. [李大霄：市场结构化调整可能性大](https://so.toutiao.com/search?keyword=李大霄：市场结构化调整可能性大)
1. [中国车企价格战把零件厂榨干了吗](https://so.toutiao.com/search?keyword=中国车企价格战把零件厂榨干了吗)
1. [中方回应美军称已拥有在轨太空武器](https://so.toutiao.com/search?keyword=中方回应美军称已拥有在轨太空武器)
1. [牛肉价格为什么开始“起飞”](https://so.toutiao.com/search?keyword=牛肉价格为什么开始“起飞”)
1. [“能看海的地铁”试乘首日挤爆了](https://so.toutiao.com/search?keyword=“能看海的地铁”试乘首日挤爆了)
1. [温铁军谈比亚迪](https://so.toutiao.com/search?keyword=温铁军谈比亚迪)
1. [男子性侵15岁智力残疾少女获刑4年](https://so.toutiao.com/search?keyword=男子性侵15岁智力残疾少女获刑4年)
1. [男子买1斤蚯蚓忘取出结果一夜跑光](https://so.toutiao.com/search?keyword=男子买1斤蚯蚓忘取出结果一夜跑光)
1. [塔克拉玛干沙漠发现大型地下水水源](https://so.toutiao.com/search?keyword=塔克拉玛干沙漠发现大型地下水水源)
1. [DeepSeek工程师发文引热议](https://so.toutiao.com/search?keyword=DeepSeek工程师发文引热议)
1. [女子冒充村干部带货被立案调查](https://so.toutiao.com/search?keyword=女子冒充村干部带货被立案调查)
1. [被网红恶搞获赔款杨坤将全部捐出](https://so.toutiao.com/search?keyword=被网红恶搞获赔款杨坤将全部捐出)
1. [老太入棺一天后又睁眼“复活”](https://so.toutiao.com/search?keyword=老太入棺一天后又睁眼“复活”)
1. [司机补路后拉绳警示致人死亡](https://so.toutiao.com/search?keyword=司机补路后拉绳警示致人死亡)
1. [德国企业为何“弃美选华”](https://so.toutiao.com/search?keyword=德国企业为何“弃美选华”)
1. [武汉必走的citywalk路线](https://so.toutiao.com/search?keyword=武汉必走的citywalk路线)
1. [男子苦钓三天钓起118斤大青鱼](https://so.toutiao.com/search?keyword=男子苦钓三天钓起118斤大青鱼)
1. [媒体：促进人口高质量发展需综合施策](https://so.toutiao.com/search?keyword=媒体：促进人口高质量发展需综合施策)
1. [国乒踏上亚运征程](https://so.toutiao.com/search?keyword=国乒踏上亚运征程)
1. [研究：得糖尿病的人大多离不开这4点](https://so.toutiao.com/search?keyword=研究：得糖尿病的人大多离不开这4点)
1. [老板娘称被公职人员强奸最新进展](https://so.toutiao.com/search?keyword=老板娘称被公职人员强奸最新进展)
1. [俄大量无人机和导弹袭击乌有何目的](https://so.toutiao.com/search?keyword=俄大量无人机和导弹袭击乌有何目的)
1. [黄仁勋：中国对AI的叙事方式更务实](https://so.toutiao.com/search?keyword=黄仁勋：中国对AI的叙事方式更务实)
1. [黎明当选四川雅安市市长](https://so.toutiao.com/search?keyword=黎明当选四川雅安市市长)
1. [4岁女孩玩金箍棒捅坏家中万元电视](https://so.toutiao.com/search?keyword=4岁女孩玩金箍棒捅坏家中万元电视)
1. [平台月付将退出支付选项冲上热搜](https://so.toutiao.com/search?keyword=平台月付将退出支付选项冲上热搜)
1. [英国若“解体”有何影响](https://so.toutiao.com/search?keyword=英国若“解体”有何影响)
1. [苹果回应iPhone 18 Pro破发](https://so.toutiao.com/search?keyword=苹果回应iPhone%2018%20Pro破发)
1. [李大霄：A股牛市已经告一段落](https://so.toutiao.com/search?keyword=李大霄：A股牛市已经告一段落)
1. [“日不落”要变成“小不列颠”吗](https://so.toutiao.com/search?keyword=“日不落”要变成“小不列颠”吗)
1. [鸠山由纪夫：日本应始终反省和道歉](https://so.toutiao.com/search?keyword=鸠山由纪夫：日本应始终反省和道歉)
1. [问界致全体渠道伙伴的函曝光](https://so.toutiao.com/search?keyword=问界致全体渠道伙伴的函曝光)
1. [伊总统：不能让美以获知最高领袖行踪](https://so.toutiao.com/search?keyword=伊总统：不能让美以获知最高领袖行踪)
1. [赖岳谦：美国做而不宣撤回到二三岛链](https://so.toutiao.com/search?keyword=赖岳谦：美国做而不宣撤回到二三岛链)
1. [香港鸭脷洲发生“双尸案”](https://so.toutiao.com/search?keyword=香港鸭脷洲发生“双尸案”)
1. [李梦一秒化身“赵星棠”](https://so.toutiao.com/search?keyword=李梦一秒化身“赵星棠”)
1. [吴心伯：美国不可能为“台独”而战](https://so.toutiao.com/search?keyword=吴心伯：美国不可能为“台独”而战)
1. [海南保亭村民：30亩菜地全部被淹](https://so.toutiao.com/search?keyword=海南保亭村民：30亩菜地全部被淹)
1. [退役女将军亲历北京香山论坛20年](https://so.toutiao.com/search?keyword=退役女将军亲历北京香山论坛20年)
1. [野人先生创始人曾回应“价格贵”](https://so.toutiao.com/search?keyword=野人先生创始人曾回应“价格贵”)
1. [俄军大规模无人机夜袭乌西部有何目的](https://so.toutiao.com/search?keyword=俄军大规模无人机夜袭乌西部有何目的)
1. [日本共产党委员长落泪痛批高市政府](https://so.toutiao.com/search?keyword=日本共产党委员长落泪痛批高市政府)
1. [iPhone 18 Pro美国预售遇冷](https://so.toutiao.com/search?keyword=iPhone%2018%20Pro美国预售遇冷)
1. [全键盘版“阔直板”手机爆火](https://so.toutiao.com/search?keyword=全键盘版“阔直板”手机爆火)
1. [名古屋亚运会的“节俭实验”也有麻烦](https://so.toutiao.com/search?keyword=名古屋亚运会的“节俭实验”也有麻烦)
1. [发改委安排3000万支持海南灾后恢复](https://so.toutiao.com/search?keyword=发改委安排3000万支持海南灾后恢复)
1. [世纪工程平陆运河六大看点](https://so.toutiao.com/search?keyword=世纪工程平陆运河六大看点)
1. [浙大教授回应飘逸刘海：我本色表现](https://so.toutiao.com/search?keyword=浙大教授回应飘逸刘海：我本色表现)
1. [任泽平：未来是结构性牛市](https://so.toutiao.com/search?keyword=任泽平：未来是结构性牛市)
1. [外交部：望日中议联秉持对华友好传统](https://so.toutiao.com/search?keyword=外交部：望日中议联秉持对华友好传统)
1. [茶器上的花纹是如何制作出来的](https://so.toutiao.com/search?keyword=茶器上的花纹是如何制作出来的)
1. [电厂冷却塔画蓝天白云引鸟类保护争议](https://so.toutiao.com/search?keyword=电厂冷却塔画蓝天白云引鸟类保护争议)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Sep 16 2026 21:29:04 GMT+0800 (China Standard Time) -->

1. [南方医科大学通报学生坠亡](https://www.zhihu.com/search?q=%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E5%AD%A6%E7%94%9F%E5%9D%A0%E4%BA%A1)
1. [华为赛力斯合作模式调整](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E8%B5%9B%E5%8A%9B%E6%96%AF%E5%90%88%E4%BD%9C%E6%A8%A1%E5%BC%8F%E8%B0%83%E6%95%B4)
1. [野人先生首度发声](https://www.zhihu.com/search?q=%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E9%A6%96%E5%BA%A6%E5%8F%91%E5%A3%B0)
1. [四川茂县山体滑坡](https://www.zhihu.com/search?q=%E5%9B%9B%E5%B7%9D%E8%8C%82%E5%8E%BF%E5%B1%B1%E4%BD%93%E6%BB%91%E5%9D%A1)
1. [知乎 CLI 创作者能力上新](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%20CLI%20%E5%88%9B%E4%BD%9C%E8%80%85%E8%83%BD%E5%8A%9B%E4%B8%8A%E6%96%B0)
1. [中国男篮挺进亚运会四强](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E6%8C%BA%E8%BF%9B%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%9B%9B%E5%BC%BA)
1. [王鹤棣方称已取证报警](https://www.zhihu.com/search?q=%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%96%B9%E7%A7%B0%E5%B7%B2%E5%8F%96%E8%AF%81%E6%8A%A5%E8%AD%A6)
1. [女子拍下骇人巨型蜗牛引热议](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E6%8B%8D%E4%B8%8B%E9%AA%87%E4%BA%BA%E5%B7%A8%E5%9E%8B%E8%9C%97%E7%89%9B%E5%BC%95%E7%83%AD%E8%AE%AE)
1. [韩国尸皮针3000元一针爆火](https://www.zhihu.com/search?q=%E9%9F%A9%E5%9B%BD%E5%B0%B8%E7%9A%AE%E9%92%883000%E5%85%83%E4%B8%80%E9%92%88%E7%88%86%E7%81%AB)
1. [平陆运河9月16日建成通航](https://www.zhihu.com/search?q=%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B39%E6%9C%8816%E6%97%A5%E5%BB%BA%E6%88%90%E9%80%9A%E8%88%AA)
1. [广州大学城发生伤人事件](https://www.zhihu.com/search?q=%E5%B9%BF%E5%B7%9E%E5%A4%A7%E5%AD%A6%E5%9F%8E%E5%8F%91%E7%94%9F%E4%BC%A4%E4%BA%BA%E4%BA%8B%E4%BB%B6)
1. [华为高层内部万字长文曝光](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E9%AB%98%E5%B1%82%E5%86%85%E9%83%A8%E4%B8%87%E5%AD%97%E9%95%BF%E6%96%87%E6%9B%9D%E5%85%89)
1. [警方回应南方医科大学疑有学生坠楼事件](https://www.zhihu.com/search?q=%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E7%96%91%E6%9C%89%E5%AD%A6%E7%94%9F%E5%9D%A0%E6%A5%BC%E4%BA%8B%E4%BB%B6)
1. [多车队宣布永久退出中国 GT](https://www.zhihu.com/search?q=%E5%A4%9A%E8%BD%A6%E9%98%9F%E5%AE%A3%E5%B8%83%E6%B0%B8%E4%B9%85%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%20GT)
1. [中国男篮vs沙特](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E6%B2%99%E7%89%B9)
1. [情侣在演唱会求婚被喊坐下](https://www.zhihu.com/search?q=%E6%83%85%E4%BE%A3%E5%9C%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B1%82%E5%A9%9A%E8%A2%AB%E5%96%8A%E5%9D%90%E4%B8%8B)
1. [宁德时代上半年营收利润双增股价却大跌](https://www.zhihu.com/search?q=%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E4%B8%8A%E5%8D%8A%E5%B9%B4%E8%90%A5%E6%94%B6%E5%88%A9%E6%B6%A6%E5%8F%8C%E5%A2%9E%E8%82%A1%E4%BB%B7%E5%8D%B4%E5%A4%A7%E8%B7%8C)
1. [DeepSeek 刘胜与回应长文爆火](https://www.zhihu.com/search?q=DeepSeek%20%E5%88%98%E8%83%9C%E4%B8%8E%E5%9B%9E%E5%BA%94%E9%95%BF%E6%96%87%E7%88%86%E7%81%AB)
1. [湘雅医学院教师PPT称23年未见父母](https://www.zhihu.com/search?q=%E6%B9%98%E9%9B%85%E5%8C%BB%E5%AD%A6%E9%99%A2%E6%95%99%E5%B8%88PPT%E7%A7%B023%E5%B9%B4%E6%9C%AA%E8%A7%81%E7%88%B6%E6%AF%8D)
1. [时代峰峻被曝无限期整改](https://www.zhihu.com/search?q=%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%A2%AB%E6%9B%9D%E6%97%A0%E9%99%90%E6%9C%9F%E6%95%B4%E6%94%B9)
1. [HYROX选手失禁仍完赛](https://www.zhihu.com/search?q=HYROX%E9%80%89%E6%89%8B%E5%A4%B1%E7%A6%81%E4%BB%8D%E5%AE%8C%E8%B5%9B)
1. [野人先生创始人曾回应冰淇淋太贵](https://www.zhihu.com/search?q=%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9B%BE%E5%9B%9E%E5%BA%94%E5%86%B0%E6%B7%87%E6%B7%8B%E5%A4%AA%E8%B4%B5)
1. [三星嘲讽苹果iPhoneDuo](https://www.zhihu.com/search?q=%E4%B8%89%E6%98%9F%E5%98%B2%E8%AE%BD%E8%8B%B9%E6%9E%9CiPhoneDuo)
1. [曝姆巴佩与登贝莱彻底决裂](https://www.zhihu.com/search?q=%E6%9B%9D%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%B8%8E%E7%99%BB%E8%B4%9D%E8%8E%B1%E5%BD%BB%E5%BA%95%E5%86%B3%E8%A3%82)
1. [南太行200多斤驴友被挤下悬崖](https://www.zhihu.com/search?q=%E5%8D%97%E5%A4%AA%E8%A1%8C200%E5%A4%9A%E6%96%A4%E9%A9%B4%E5%8F%8B%E8%A2%AB%E6%8C%A4%E4%B8%8B%E6%82%AC%E5%B4%96)
1. [卫龙进口魔芋粉检出二氧化硫超标](https://www.zhihu.com/search?q=%E5%8D%AB%E9%BE%99%E8%BF%9B%E5%8F%A3%E9%AD%94%E8%8A%8B%E7%B2%89%E6%A3%80%E5%87%BA%E4%BA%8C%E6%B0%A7%E5%8C%96%E7%A1%AB%E8%B6%85%E6%A0%87)
1. [钟薛高将复活](https://www.zhihu.com/search?q=%E9%92%9F%E8%96%9B%E9%AB%98%E5%B0%86%E5%A4%8D%E6%B4%BB)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Sep 17 2026 00:59:01 GMT+0800 (China Standard Time) -->

1. [中国男子涉嫌在印尼渔猎玳瑁并烹饪，离境时被拦接受调查，玳瑁是什么动物？若属实他将承担什么责任？](https://www.zhihu.com/question/2083156467859957000)
1. [野人先生在沉默数日后首度发声，「感谢大家长期以来对野人先生的关心和支持」，你觉得这波公关处理怎么样？](https://www.zhihu.com/question/2083566699115299300)
1. [韩国 3000 元一针的「尸皮针」火了，把死人皮肤组织打进活人脸里真能抗衰老吗？会有安全和伦理风险吗？](https://www.zhihu.com/question/2083526236886626800)
1. [为什么QQ邮箱这么好用大家还是觉得它「档次不够高」？](https://www.zhihu.com/question/22891817)
1. [平陆运河正式通航，广西从此江海直连，这条设想了近百年的运河建设难度有多大？它能「带飞」中国西南吗？](https://www.zhihu.com/question/2082841016533632500)
1. [钟薛高宣布重启，推出三种口味，零售价最低跌到 6.9 元一支，你看好钟薛高这次「复活」吗？](https://www.zhihu.com/question/2083299849705715000)
1. [平陆运河开通了，真的能节约运费吗？](https://www.zhihu.com/question/2081646932867523300)
1. [啄木鸟维修更换开关收费 2800 元，投诉后仅退款 1000 元，这合理吗？家庭维修为啥难明码标价？](https://www.zhihu.com/question/2083551350592483800)
1. [港中大（深圳）实行 9 个月工资制，并期望年轻教授 5 年内获诺奖，这会如何影响学术生态？](https://www.zhihu.com/question/2082839178635757000)
1. [《雍正王朝》中为什么康熙总是不急不慢、智珠在握的感觉，而雍正却动不动就发火大喊大叫？](https://www.zhihu.com/question/1918778248533345800)
1. [「儿子去世孙子非亲生案」老人两度败诉，将召开再审听证会，希望获得对孙子探视权，再审听证会结果会怎样？](https://www.zhihu.com/question/2081674008291034600)
1. [南方医科大学一学生坠楼身亡，其二姐称「导师对弟弟很关心」，导师辟谣「不给批假」，哪些信息值得关注？](https://www.zhihu.com/question/2083339404777730300)
1. [伊朗单日击落 3 架美军 MQ-1 无人机，美军密集出动同一侦察机，想获取什么情报？还是试探伊朗防空？](https://www.zhihu.com/question/2083344144982980600)
1. [王鹤棣方称已就网传不实聊天记录报警并完成取证，静和医疗否认王鹤棣曾就诊，到底发生了什么？](https://www.zhihu.com/question/2083618864349143800)
1. [为什么感觉现在的教育工作者都在吐槽小孩越来越笨了？究竟是个别现象被当普遍现象还是真的如此？](https://www.zhihu.com/question/2079682827247956000)
1. [南京一高校学生晚上排长队洗澡，学生反映「每天排队都是一个小时起步」，真是这样吗？有哪些解决办法？](https://www.zhihu.com/question/2083311751991400000)
1. [学生党无力支付token费用怎么办？](https://www.zhihu.com/question/2078470854380471800)
1. [如何评价全球首款AI智能体手机努比亚NaviX Ultra豆包手机发布开售？有什么亮点与不足？](https://www.zhihu.com/question/2083496255733364200)
1. [埃斯皮绝杀！皇马3-2埃尔切 姆巴佩传射迪奥曼德助攻居莱尔造乌龙，如何评价这场比赛皇马的表现？](https://www.zhihu.com/question/2083464745307452200)
1. [为什么笔记本电脑那么不耐用？](https://www.zhihu.com/question/2047668772417303800)
1. [范玮琪老公陈建州突发心梗，已送医完成手术，「血管堵到90%」是什么程度？心梗前可能有哪些征兆？](https://www.zhihu.com/question/2083322310895690500)
1. [男性私处医美打玻尿酸真能有效吗？有可能会导致栓塞吗？手术风险有多大？](https://www.zhihu.com/question/2083611717200601900)
1. [为什么观众和影评人都能看出的剧情硬伤，电影里却依然存在？](https://www.zhihu.com/question/2067760487266309600)
1. [为什么宝可梦没有出现类似其他回合制游戏那样的“小作文”式技能描述？](https://www.zhihu.com/question/2082918898869985300)
1. [《凡人修仙传》年番是否扩圈失败？](https://www.zhihu.com/question/2063305126698284300)
1. [一直走不出悲伤怎么办？困在原地走不出来，总是在纠结过往、否定自己，到底该怎么调适？](https://www.zhihu.com/question/666675989)
1. [愚昧的根源是什么？](https://www.zhihu.com/question/2083131324085417500)
1. [为什么职场中乐于助人的人最后往往变成了 "老好人"，活变得越来越多？](https://www.zhihu.com/question/2074948202449613600)
1. [为什么感觉江湖人士有内力就不做防护的和人打架很傻?](https://www.zhihu.com/question/2013647855663989800)
1. [有哪些好吃的美食，可以给我推荐吗？](https://www.zhihu.com/question/12250418196)

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
<!-- 最后更新时间 Thu Sep 17 2026 01:08:25 GMT+0800 (China Standard Time) -->

1. [习近平提笔写下人民的保护神](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%8F%90%E7%AC%94%E5%86%99%E4%B8%8B%E4%BA%BA%E6%B0%91%E7%9A%84%E4%BF%9D%E6%8A%A4%E7%A5%9E%23&Refer=new_time)
1. [第一批穿德训鞋的受害者出现了](https://s.weibo.com//weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%A9%BF%E5%BE%B7%E8%AE%AD%E9%9E%8B%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23&t=31&band_rank=1&Refer=top)
1. [曝国乒落地名古屋被困机场](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%9B%BD%E4%B9%92%E8%90%BD%E5%9C%B0%E5%90%8D%E5%8F%A4%E5%B1%8B%E8%A2%AB%E5%9B%B0%E6%9C%BA%E5%9C%BA%23&t=31&band_rank=2&Refer=top)
1. [一组关键词看平陆运河硬核实力](https://s.weibo.com//weibo?q=%23%E4%B8%80%E7%BB%84%E5%85%B3%E9%94%AE%E8%AF%8D%E7%9C%8B%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B3%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%23&t=31&band_rank=3&Refer=top)
1. [iPhone18Pro炫光](https://s.weibo.com//weibo?q=%23iPhone18Pro%E7%82%AB%E5%85%89%23&t=31&band_rank=4&Refer=top)
1. [连休13天大学汇总](https://s.weibo.com//weibo?q=%E8%BF%9E%E4%BC%9113%E5%A4%A9%E5%A4%A7%E5%AD%A6%E6%B1%87%E6%80%BB&t=31&band_rank=5&Refer=top)
1. [南医大坠亡事件导师学生聊天记录](https://s.weibo.com//weibo?q=%23%E5%8D%97%E5%8C%BB%E5%A4%A7%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%E5%AF%BC%E5%B8%88%E5%AD%A6%E7%94%9F%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23&t=31&band_rank=6&Refer=top)
1. [小伙记录母亲最后14天的视频火了](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E4%BC%99%E8%AE%B0%E5%BD%95%E6%AF%8D%E4%BA%B2%E6%9C%80%E5%90%8E14%E5%A4%A9%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23&t=31&band_rank=7&Refer=top)
1. [孟子义柯淳爱在无尽夏拥抱路透](https://s.weibo.com//weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9F%AF%E6%B7%B3%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%E6%8B%A5%E6%8A%B1%E8%B7%AF%E9%80%8F%23&t=31&band_rank=8&Refer=top)
1. [多国亚运代表队落地名古屋被困机场](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E5%9B%BD%E4%BA%9A%E8%BF%90%E4%BB%A3%E8%A1%A8%E9%98%9F%E8%90%BD%E5%9C%B0%E5%90%8D%E5%8F%A4%E5%B1%8B%E8%A2%AB%E5%9B%B0%E6%9C%BA%E5%9C%BA%23&t=31&band_rank=9&Refer=top)
1. [性格决定命运这句话太残忍了](https://s.weibo.com//weibo?q=%E6%80%A7%E6%A0%BC%E5%86%B3%E5%AE%9A%E5%91%BD%E8%BF%90%E8%BF%99%E5%8F%A5%E8%AF%9D%E5%A4%AA%E6%AE%8B%E5%BF%8D%E4%BA%86&t=31&band_rank=10&Refer=top)
1. [玻尿酸科普](https://s.weibo.com//weibo?q=%E7%8E%BB%E5%B0%BF%E9%85%B8%E7%A7%91%E6%99%AE&t=31&band_rank=11&Refer=top)
1. [坠亡学生姐姐发声](https://s.weibo.com//weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%AD%A6%E7%94%9F%E5%A7%90%E5%A7%90%E5%8F%91%E5%A3%B0%23&t=31&band_rank=12&Refer=top)
1. [谭松韵演出生理性恐惧](https://s.weibo.com//weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%BC%94%E5%87%BA%E7%94%9F%E7%90%86%E6%80%A7%E6%81%90%E6%83%A7%23&t=31&band_rank=13&Refer=top)
1. [一直对月薪3万没概念直到换成天](https://s.weibo.com//weibo?q=%E4%B8%80%E7%9B%B4%E5%AF%B9%E6%9C%88%E8%96%AA3%E4%B8%87%E6%B2%A1%E6%A6%82%E5%BF%B5%E7%9B%B4%E5%88%B0%E6%8D%A2%E6%88%90%E5%A4%A9&t=31&band_rank=14&Refer=top)
1. [幼童坠亡事发房间监控未插电](https://s.weibo.com//weibo?q=%23%E5%B9%BC%E7%AB%A5%E5%9D%A0%E4%BA%A1%E4%BA%8B%E5%8F%91%E6%88%BF%E9%97%B4%E7%9B%91%E6%8E%A7%E6%9C%AA%E6%8F%92%E7%94%B5%23&t=31&band_rank=15&Refer=top)
1. [兰香如故这段完全get到官配了](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%BF%99%E6%AE%B5%E5%AE%8C%E5%85%A8get%E5%88%B0%E5%AE%98%E9%85%8D%E4%BA%86%23&t=31&band_rank=16&Refer=top)
1. [突然一下就搞明白函数了](https://s.weibo.com//weibo?q=%23%E7%AA%81%E7%84%B6%E4%B8%80%E4%B8%8B%E5%B0%B1%E6%90%9E%E6%98%8E%E7%99%BD%E5%87%BD%E6%95%B0%E4%BA%86%23&t=31&band_rank=17&Refer=top)
1. [盛夏晴朗](https://s.weibo.com//weibo?q=%E7%9B%9B%E5%A4%8F%E6%99%B4%E6%9C%97&t=31&band_rank=18&Refer=top)
1. [钟文泽评测iPhone 18 Pro](https://s.weibo.com//weibo?q=%E9%92%9F%E6%96%87%E6%B3%BD%E8%AF%84%E6%B5%8BiPhone%2018%20Pro&t=31&band_rank=19&Refer=top)
1. [上海干湿垃圾还在分吗](https://s.weibo.com//weibo?q=%E4%B8%8A%E6%B5%B7%E5%B9%B2%E6%B9%BF%E5%9E%83%E5%9C%BE%E8%BF%98%E5%9C%A8%E5%88%86%E5%90%97&t=31&band_rank=20&Refer=top)
1. [一点点 威胁员工](https://s.weibo.com//weibo?q=%E4%B8%80%E7%82%B9%E7%82%B9%20%E5%A8%81%E8%83%81%E5%91%98%E5%B7%A5&t=31&band_rank=21&Refer=top)
1. [iPhone18ProMax充电速度](https://s.weibo.com//weibo?q=%23iPhone18ProMax%E5%85%85%E7%94%B5%E9%80%9F%E5%BA%A6%23&t=31&band_rank=22&Refer=top)
1. [人生自取其辱十件套](https://s.weibo.com//weibo?q=%E4%BA%BA%E7%94%9F%E8%87%AA%E5%8F%96%E5%85%B6%E8%BE%B1%E5%8D%81%E4%BB%B6%E5%A5%97&t=31&band_rank=23&Refer=top)
1. [导师曾给坠亡医学生转账2.2万](https://s.weibo.com//weibo?q=%23%E5%AF%BC%E5%B8%88%E6%9B%BE%E7%BB%99%E5%9D%A0%E4%BA%A1%E5%8C%BB%E5%AD%A6%E7%94%9F%E8%BD%AC%E8%B4%A62.2%E4%B8%87%23&t=31&band_rank=24&Refer=top)
1. [女演员成植物人5年后康复回归拍戏](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%88%90%E6%A4%8D%E7%89%A9%E4%BA%BA5%E5%B9%B4%E5%90%8E%E5%BA%B7%E5%A4%8D%E5%9B%9E%E5%BD%92%E6%8B%8D%E6%88%8F%23&t=31&band_rank=25&Refer=top)
1. [小胖说打完年总回狼队](https://s.weibo.com//weibo?q=%E5%B0%8F%E8%83%96%E8%AF%B4%E6%89%93%E5%AE%8C%E5%B9%B4%E6%80%BB%E5%9B%9E%E7%8B%BC%E9%98%9F&t=31&band_rank=26&Refer=top)
1. [市委书记说前人欠债凭啥我还](https://s.weibo.com//weibo?q=%23%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%AF%B4%E5%89%8D%E4%BA%BA%E6%AC%A0%E5%80%BA%E5%87%AD%E5%95%A5%E6%88%91%E8%BF%98%23&t=31&band_rank=27&Refer=top)
1. [田曦薇 雪粒镇](https://s.weibo.com//weibo?q=%E7%94%B0%E6%9B%A6%E8%96%87%20%E9%9B%AA%E7%B2%92%E9%95%87&t=31&band_rank=28&Refer=top)
1. [每天处理猫咪跟小小人类纠纷](https://s.weibo.com//weibo?q=%E6%AF%8F%E5%A4%A9%E5%A4%84%E7%90%86%E7%8C%AB%E5%92%AA%E8%B7%9F%E5%B0%8F%E5%B0%8F%E4%BA%BA%E7%B1%BB%E7%BA%A0%E7%BA%B7&t=31&band_rank=29&Refer=top)
1. [中国体操队在机场等了6小时](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E9%98%9F%E5%9C%A8%E6%9C%BA%E5%9C%BA%E7%AD%89%E4%BA%866%E5%B0%8F%E6%97%B6%23&t=31&band_rank=30&Refer=top)
1. [南医大事件涉事导师门诊已约满](https://s.weibo.com//weibo?q=%23%E5%8D%97%E5%8C%BB%E5%A4%A7%E4%BA%8B%E4%BB%B6%E6%B6%89%E4%BA%8B%E5%AF%BC%E5%B8%88%E9%97%A8%E8%AF%8A%E5%B7%B2%E7%BA%A6%E6%BB%A1%23&t=31&band_rank=31&Refer=top)
1. [朋友在国外呆了8年没回国](https://s.weibo.com//weibo?q=%E6%9C%8B%E5%8F%8B%E5%9C%A8%E5%9B%BD%E5%A4%96%E5%91%86%E4%BA%868%E5%B9%B4%E6%B2%A1%E5%9B%9E%E5%9B%BD&t=31&band_rank=32&Refer=top)
1. [iPhone Duo无微信平板](https://s.weibo.com//weibo?q=iPhone%20Duo%E6%97%A0%E5%BE%AE%E4%BF%A1%E5%B9%B3%E6%9D%BF&t=31&band_rank=33&Refer=top)
1. [父亲遛狗2岁幼童从18楼坠亡](https://s.weibo.com//weibo?q=%23%E7%88%B6%E4%BA%B2%E9%81%9B%E7%8B%972%E5%B2%81%E5%B9%BC%E7%AB%A5%E4%BB%8E18%E6%A5%BC%E5%9D%A0%E4%BA%A1%23&t=31&band_rank=34&Refer=top)
1. [iPhoneDuo暂不支持微信平板模式](https://s.weibo.com//weibo?q=%23iPhoneDuo%E6%9A%82%E4%B8%8D%E6%94%AF%E6%8C%81%E5%BE%AE%E4%BF%A1%E5%B9%B3%E6%9D%BF%E6%A8%A1%E5%BC%8F%23&t=31&band_rank=35&Refer=top)
1. [大学毕业生举报资助人是间谍](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E5%AD%A6%E6%AF%95%E4%B8%9A%E7%94%9F%E4%B8%BE%E6%8A%A5%E8%B5%84%E5%8A%A9%E4%BA%BA%E6%98%AF%E9%97%B4%E8%B0%8D%23&t=31&band_rank=36&Refer=top)
1. [全新理想i9价格公布](https://s.weibo.com//weibo?q=%23%E5%85%A8%E6%96%B0%E7%90%86%E6%83%B3i9%E4%BB%B7%E6%A0%BC%E5%85%AC%E5%B8%83%23&t=31&band_rank=37&Refer=top)
1. [井柏然给栾念做的PPT](https://s.weibo.com//weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%BB%99%E6%A0%BE%E5%BF%B5%E5%81%9A%E7%9A%84PPT%23&t=31&band_rank=38&Refer=top)
1. [孙子无血缘再审听证会奶奶当场晕倒](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%AD%90%E6%97%A0%E8%A1%80%E7%BC%98%E5%86%8D%E5%AE%A1%E5%90%AC%E8%AF%81%E4%BC%9A%E5%A5%B6%E5%A5%B6%E5%BD%93%E5%9C%BA%E6%99%95%E5%80%92%23&t=31&band_rank=39&Refer=top)
1. [兰香如故15集](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%8515%E9%9B%86%23&t=31&band_rank=40&Refer=top)
1. [第一次见这么弹性的上下班时间](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BF%99%E4%B9%88%E5%BC%B9%E6%80%A7%E7%9A%84%E4%B8%8A%E4%B8%8B%E7%8F%AD%E6%97%B6%E9%97%B4&t=31&band_rank=41&Refer=top)
1. [兰香如故](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85&t=31&band_rank=42&Refer=top)
1. [美联储今晚声明五大看点](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E4%BB%8A%E6%99%9A%E5%A3%B0%E6%98%8E%E4%BA%94%E5%A4%A7%E7%9C%8B%E7%82%B9%23&t=31&band_rank=43&Refer=top)
1. [方程SGT](https://s.weibo.com//weibo?q=%E6%96%B9%E7%A8%8BSGT&t=31&band_rank=44&Refer=top)
1. [国乒被困亚运机场只给水不给饭](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E8%A2%AB%E5%9B%B0%E4%BA%9A%E8%BF%90%E6%9C%BA%E5%9C%BA%E5%8F%AA%E7%BB%99%E6%B0%B4%E4%B8%8D%E7%BB%99%E9%A5%AD%23&t=31&band_rank=45&Refer=top)
1. [这帝王蟹真的死的莫名其妙的](https://s.weibo.com//weibo?q=%23%E8%BF%99%E5%B8%9D%E7%8E%8B%E8%9F%B9%E7%9C%9F%E7%9A%84%E6%AD%BB%E7%9A%84%E8%8E%AB%E5%90%8D%E5%85%B6%E5%A6%99%E7%9A%84%23&t=31&band_rank=46&Refer=top)
1. [女子怀孕5次均流产妇科检查却正常](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%955%E6%AC%A1%E5%9D%87%E6%B5%81%E4%BA%A7%E5%A6%87%E7%A7%91%E6%A3%80%E6%9F%A5%E5%8D%B4%E6%AD%A3%E5%B8%B8%23&t=31&band_rank=47&Refer=top)
1. [付辛博夜旅人 AI换脸](https://s.weibo.com//weibo?q=%E4%BB%98%E8%BE%9B%E5%8D%9A%E5%A4%9C%E6%97%85%E4%BA%BA%20AI%E6%8D%A2%E8%84%B8&t=31&band_rank=48&Refer=top)
1. [曝TES法务反击](https://s.weibo.com//weibo?q=%23%E6%9B%9DTES%E6%B3%95%E5%8A%A1%E5%8F%8D%E5%87%BB%23&t=31&band_rank=49&Refer=top)
1. [25岁小伙被确诊全球罕见变异白血病](https://s.weibo.com//weibo?q=%2325%E5%B2%81%E5%B0%8F%E4%BC%99%E8%A2%AB%E7%A1%AE%E8%AF%8A%E5%85%A8%E7%90%83%E7%BD%95%E8%A7%81%E5%8F%98%E5%BC%82%E7%99%BD%E8%A1%80%E7%97%85%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
