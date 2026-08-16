# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-17 01:36:02

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
<!-- 最后更新时间 Mon Aug 17 2026 01:51:59 GMT+0800 (China Standard Time) -->

1. [朱镕基同志遗体18日火化](https://so.toutiao.com/search?keyword=朱镕基同志遗体18日火化)
1. [问界儿童车即将上市](https://so.toutiao.com/search?keyword=问界儿童车即将上市)
1. [一组数据看中国经济的澎湃动能](https://so.toutiao.com/search?keyword=一组数据看中国经济的澎湃动能)
1. [莫斯科遭乌方600架无人机袭击](https://so.toutiao.com/search?keyword=莫斯科遭乌方600架无人机袭击)
1. [媒体：中方16问后菲防长路只剩一条](https://so.toutiao.com/search?keyword=媒体：中方16问后菲防长路只剩一条)
1. [县委大院69间土坯房用了69年](https://so.toutiao.com/search?keyword=县委大院69间土坯房用了69年)
1. [伊朗称逮捕或消灭美军者将获奖励](https://so.toutiao.com/search?keyword=伊朗称逮捕或消灭美军者将获奖励)
1. [如何看待美军舰因故障在南海滞留4天](https://so.toutiao.com/search?keyword=如何看待美军舰因故障在南海滞留4天)
1. [请3天假连休13天](https://so.toutiao.com/search?keyword=请3天假连休13天)
1. [吴艳妮全锦赛三连冠+六冠王](https://so.toutiao.com/search?keyword=吴艳妮全锦赛三连冠+六冠王)
1. [两人为博眼球发布不实信息被处罚](https://so.toutiao.com/search?keyword=两人为博眼球发布不实信息被处罚)
1. [胖东来周边店主：生意没了心气也没了](https://so.toutiao.com/search?keyword=胖东来周边店主：生意没了心气也没了)
1. [央视曝光近150人组团夜爬封禁山峰](https://so.toutiao.com/search?keyword=央视曝光近150人组团夜爬封禁山峰)
1. [传销头目出狱办书院暴力管教被刑拘](https://so.toutiao.com/search?keyword=传销头目出狱办书院暴力管教被刑拘)
1. [胖东来将闭门老店28个收银口排长龙](https://so.toutiao.com/search?keyword=胖东来将闭门老店28个收银口排长龙)
1. [黄金还会二次暴涨吗](https://so.toutiao.com/search?keyword=黄金还会二次暴涨吗)
1. [邵永灵：汉奸石平连站直都不敢](https://so.toutiao.com/search?keyword=邵永灵：汉奸石平连站直都不敢)
1. [梭子蟹大量上市 中医提醒](https://so.toutiao.com/search?keyword=梭子蟹大量上市%20中医提醒)
1. [俄火箭航天中心遭乌军袭击起火](https://so.toutiao.com/search?keyword=俄火箭航天中心遭乌军袭击起火)
1. [孙楠回应体重只有128斤](https://so.toutiao.com/search?keyword=孙楠回应体重只有128斤)
1. [独库公路抛物被扔回 男子劝阻获赞](https://so.toutiao.com/search?keyword=独库公路抛物被扔回%20男子劝阻获赞)
1. [日军在南京每晚至少发生一千起强奸案](https://so.toutiao.com/search?keyword=日军在南京每晚至少发生一千起强奸案)
1. [乌特种兵渗透到俄军阵地意味什么](https://so.toutiao.com/search?keyword=乌特种兵渗透到俄军阵地意味什么)
1. [台当局查扣首辆张雪机车在怕什么](https://so.toutiao.com/search?keyword=台当局查扣首辆张雪机车在怕什么)
1. [伊朗称美军已被驱逐不得进入海峡](https://so.toutiao.com/search?keyword=伊朗称美军已被驱逐不得进入海峡)
1. [17岁少年确诊胃癌一个半月后离世](https://so.toutiao.com/search?keyword=17岁少年确诊胃癌一个半月后离世)
1. [西太平洋首次没有美国航母有何影响](https://so.toutiao.com/search?keyword=西太平洋首次没有美国航母有何影响)
1. [日本民众集会高喊：高市早苗下台](https://so.toutiao.com/search?keyword=日本民众集会高喊：高市早苗下台)
1. [00后女儿和80后妈妈前后脚生娃](https://so.toutiao.com/search?keyword=00后女儿和80后妈妈前后脚生娃)
1. [新加坡老人轻拍女童头部被家长撂倒](https://so.toutiao.com/search?keyword=新加坡老人轻拍女童头部被家长撂倒)
1. [扎蟹女工两三秒制服梭子蟹](https://so.toutiao.com/search?keyword=扎蟹女工两三秒制服梭子蟹)
1. [哈尔滨把街道当自己家客厅拖](https://so.toutiao.com/search?keyword=哈尔滨把街道当自己家客厅拖)
1. [F勒布伦晋级WTT瑞典大满贯决赛](https://so.toutiao.com/search?keyword=F勒布伦晋级WTT瑞典大满贯决赛)
1. [乌称已使俄电商巨头多个物流中心停运](https://so.toutiao.com/search?keyword=乌称已使俄电商巨头多个物流中心停运)
1. [轿车冲破墙体怼到小伙床边](https://so.toutiao.com/search?keyword=轿车冲破墙体怼到小伙床边)
1. [这波金价反弹普通人该追还是该等](https://so.toutiao.com/search?keyword=这波金价反弹普通人该追还是该等)
1. [居民楼禁开油烟餐饮记者实探广州小区](https://so.toutiao.com/search?keyword=居民楼禁开油烟餐饮记者实探广州小区)
1. [全国锦标赛男子110米栏陈圆将夺冠](https://so.toutiao.com/search?keyword=全国锦标赛男子110米栏陈圆将夺冠)
1. [何穗妊娠纹](https://so.toutiao.com/search?keyword=何穗妊娠纹)
1. [媒体人：美债买卖日本救火中国搬家](https://so.toutiao.com/search?keyword=媒体人：美债买卖日本救火中国搬家)
1. [中国男篮热身赛不敌乌拉圭队](https://so.toutiao.com/search?keyword=中国男篮热身赛不敌乌拉圭队)
1. [陈伟霆获TMEA年度最具影响力全能歌手](https://so.toutiao.com/search?keyword=陈伟霆获TMEA年度最具影响力全能歌手)
1. [俄罗斯就美土供乌武器计划提出质询](https://so.toutiao.com/search?keyword=俄罗斯就美土供乌武器计划提出质询)
1. [极端降雨考验北方城市韧性](https://so.toutiao.com/search?keyword=极端降雨考验北方城市韧性)
1. [刚摘的鲜食玉米有多“娇贵”](https://so.toutiao.com/search?keyword=刚摘的鲜食玉米有多“娇贵”)
1. [中国U17女足5-0大胜皇马U17女足](https://so.toutiao.com/search?keyword=中国U17女足5-0大胜皇马U17女足)
1. [C罗称今年或是职业生涯最后一年](https://so.toutiao.com/search?keyword=C罗称今年或是职业生涯最后一年)
1. [危急时刻村支书带人连夜抢险排涝](https://so.toutiao.com/search?keyword=危急时刻村支书带人连夜抢险排涝)
1. [回望阿富汗战争：失去的20年](https://so.toutiao.com/search?keyword=回望阿富汗战争：失去的20年)
1. [十大券商策略来了](https://so.toutiao.com/search?keyword=十大券商策略来了)
1. [学胖东来的超市养活了一批调改师](https://so.toutiao.com/search?keyword=学胖东来的超市养活了一批调改师)
1. [福建8000余艘渔船结束伏季休渔出海](https://so.toutiao.com/search?keyword=福建8000余艘渔船结束伏季休渔出海)
1. [收割机换胶条式传导链保住玉米完整度](https://so.toutiao.com/search?keyword=收割机换胶条式传导链保住玉米完整度)
1. [合肥142名准大学生参加集体升学礼](https://so.toutiao.com/search?keyword=合肥142名准大学生参加集体升学礼)
1. [《欢迎来龙餐馆》背后的历史故事](https://so.toutiao.com/search?keyword=《欢迎来龙餐馆》背后的历史故事)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Mon Aug 17 2026 01:32:46 GMT+0800 (China Standard Time) -->

1. [朱镕基同志遗体 18 日火化](https://www.zhihu.com/search?q=%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%93%2018%20%E6%97%A5%E7%81%AB%E5%8C%96)
1. [儿科医生韩杰因医疗事故罪被判刑](https://www.zhihu.com/search?q=%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E9%9F%A9%E6%9D%B0%E5%9B%A0%E5%8C%BB%E7%96%97%E4%BA%8B%E6%95%85%E7%BD%AA%E8%A2%AB%E5%88%A4%E5%88%91)
1. [旺旺董事长称要淘汰没贡献的员工](https://www.zhihu.com/search?q=%E6%97%BA%E6%97%BA%E8%91%A3%E4%BA%8B%E9%95%BF%E7%A7%B0%E8%A6%81%E6%B7%98%E6%B1%B0%E6%B2%A1%E8%B4%A1%E7%8C%AE%E7%9A%84%E5%91%98%E5%B7%A5)
1. [王艺迪4-2张本美和](https://www.zhihu.com/search?q=%E7%8E%8B%E8%89%BA%E8%BF%AA4-2%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [胖东来招军人和刑释人员](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E6%8B%9B%E5%86%9B%E4%BA%BA%E5%92%8C%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98)
1. [欢迎来龙餐馆](https://www.zhihu.com/search?q=%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86)
1. [披荆斩棘2026初舞台](https://www.zhihu.com/search?q=%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%982026%E5%88%9D%E8%88%9E%E5%8F%B0)
1. [3到5年内社保走向全额实缴](https://www.zhihu.com/search?q=3%E5%88%B05%E5%B9%B4%E5%86%85%E7%A4%BE%E4%BF%9D%E8%B5%B0%E5%90%91%E5%85%A8%E9%A2%9D%E5%AE%9E%E7%BC%B4)
1. [胖东来关闭门店引大排长龙](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E5%85%B3%E9%97%AD%E9%97%A8%E5%BA%97%E5%BC%95%E5%A4%A7%E6%8E%92%E9%95%BF%E9%BE%99)
1. [程序员正在集体自费上班](https://www.zhihu.com/search?q=%E7%A8%8B%E5%BA%8F%E5%91%98%E6%AD%A3%E5%9C%A8%E9%9B%86%E4%BD%93%E8%87%AA%E8%B4%B9%E4%B8%8A%E7%8F%AD)
1. [胖东来首批刑释职工无一离职](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E9%A6%96%E6%89%B9%E5%88%91%E9%87%8A%E8%81%8C%E5%B7%A5%E6%97%A0%E4%B8%80%E7%A6%BB%E8%81%8C)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Aug 17 2026 01:36:02 GMT+0800 (China Standard Time) -->

1. [朱镕基同志遗体18日火化 天安门等地将下半旗志哀](https://www.zhihu.com/question/2072330702507529924)
1. [胖东来将闭门店现大排长龙，附近商贩说要跟着搬迁，为啥这么多年过去了胖东来的客户粘性还这么强？](https://www.zhihu.com/question/2072261517668344800)
1. [“马云给你5亿元花呗额度”和“马化腾给你1亿q币”，只能要一个，你要哪个？](https://www.zhihu.com/question/2063350913864054300)
1. [同样是独栋，为什么北美的独栋都有完备的设施，但国内农村做不到？](https://www.zhihu.com/question/2071306248780255500)
1. [旺旺被指太甜后连夜晒出无糖低糖新品，企业这一听劝的行为能自救吗？看完后你会购买吗？](https://www.zhihu.com/question/2072246554115536000)
1. [为什么越南和印度也开始发钱「催生」了？此举能有效解决人口问题带来的挑战吗？](https://www.zhihu.com/question/2070635312297121800)
1. [《欢迎来龙餐馆》老扎为什么一直说菜咸了？有什么别的隐喻吗？](https://www.zhihu.com/question/2071658364904239900)
1. [乌克兰出现由日本人组成的战斗分队，与俄军作战，会对局势有哪些影响？日本未来会大规模介入俄乌冲突吗？](https://www.zhihu.com/question/2072370715114697000)
1. [为什么国内无法观看IMAX 70mm 胶片版《奥德赛》？](https://www.zhihu.com/question/2064434098815374000)
1. [让孩子读《钢铁是怎样炼成的》是不是已经不适合这个时代了呢？](https://www.zhihu.com/question/1939757494105805800)
1. [李宗盛为什么口碑变差了?](https://www.zhihu.com/question/388993745)
1. [韩国总统李在明称房地产泡沫已不容忽视，韩国楼市现在泡沫严重吗？](https://www.zhihu.com/question/2071334965493682200)
1. [枪杀联合健康保险 CEO 的路易吉正式认罪，12 月将迎来量刑，或面临终身监禁，哪些信息值得关注？](https://www.zhihu.com/question/2071884777888682000)
1. [研究称每天吃西红柿，6 周可显著减轻脂肪肝，是真的吗？怎么吃效果最好？](https://www.zhihu.com/question/2071202723014206700)
1. [2026WTT瑞典大满贯男单半决赛，张本智和4比3再胜松岛辉空，如何评价这场比赛？](https://www.zhihu.com/question/2072425043506865700)
1. [2026WTT瑞典大满贯，张本智和4-3逆转松岛辉空，挺进男单决赛，如何评价这场比赛？](https://www.zhihu.com/question/2072425230065317000)
1. [继小米YU7完成品类启蒙后，岚图追光S、智界RX接连入局，FUV这个市场到底有没有想象空间？](https://www.zhihu.com/question/2072291192566452200)
1. [在古代还没有毒品概念的时候，天然成瘾植物为何没有成为顶级香料？](https://www.zhihu.com/question/2068587429079020800)
1. [为什么诺兰非要选《奥德赛》？这个故事和现代人有什么关系？](https://www.zhihu.com/question/2070555651827131600)
1. [西游记里是谁开的天?是盘古还是太上老君?](https://www.zhihu.com/question/667947422)
1. [如何看待《欢迎到龙餐馆》讲中东故事，却全程国内取景拍摄，手搓一座乱世下的中东城？](https://www.zhihu.com/question/2071533521441485000)
1. [RTX60系显卡大概什么时候发布?](https://www.zhihu.com/question/1940427571205478100)
1. [曾经爆火的洞洞鞋遇冷，Crocs 联合瑞幸推出近六百元洞洞鞋，二手平台半价出售，高价洞洞鞋卖不动了吗？](https://www.zhihu.com/question/2070889441451939300)
1. [为什么欧洲王室接受一夫一妻制，私生子和妾没有继承权？](https://www.zhihu.com/question/1907158055105308000)
1. [2026 WTT 瑞典大满贯，王艺迪 4-2 击败张本美和挺进决赛，如何评价这场比赛？](https://www.zhihu.com/question/2072398881665587000)
1. [关于线性代数的专业优质又严谨的书籍（教材、专著和文章等）都有哪些？](https://www.zhihu.com/question/10435680418)
1. [《重器》中哪个案件让你感触最深？](https://www.zhihu.com/question/2070203078205076700)
1. [如何评价红色警戒2的美术风格？](https://www.zhihu.com/question/568769078)
1. [西安女子 3 万全款拿下宝鸡 40 平老房，你会入手这类「万元老破小」吗？这种低压力买房思路你认同吗？](https://www.zhihu.com/question/2070435156947462100)
1. [人类从古至今有没有一本书的智慧跟境界超过道德经？](https://www.zhihu.com/question/386602005)
1. [如何评价《鸣潮美术设定集Vol.01》标准定价188元，能预测销量大概有多少吗？](https://www.zhihu.com/question/2071724295840064800)
1. [旺旺被指最大竞争对手是糖，网友集体呼吁旺旺减糖，这样真能救旺旺吗？传统食品行业正面临哪些挑战？](https://www.zhihu.com/question/2071910735857333500)
1. [如何看待起点现在一棒子打死ai，一点都不准用的行为？](https://www.zhihu.com/question/2069337193563398700)
1. [如果条件允许的话，完全以矿泉水或纯净水作为日常饮用水好不好？](https://www.zhihu.com/question/32244325)

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
<!-- 最后更新时间 Mon Aug 17 2026 01:40:08 GMT+0800 (China Standard Time) -->

1. [切实担负起管党治党政治责任](https://s.weibo.com//weibo?q=%23%E5%88%87%E5%AE%9E%E6%8B%85%E8%B4%9F%E8%B5%B7%E7%AE%A1%E5%85%9A%E6%B2%BB%E5%85%9A%E6%94%BF%E6%B2%BB%E8%B4%A3%E4%BB%BB%23&Refer=new_time)
1. [披荆斩棘排名](https://s.weibo.com//weibo?q=%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%8E%92%E5%90%8D&t=31&band_rank=1&Refer=top)
1. [王曼昱vs王艺迪](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E7%8E%8B%E8%89%BA%E8%BF%AA&t=31&band_rank=2&Refer=top)
1. [为中国航天点赞](https://s.weibo.com//weibo?q=%23%E4%B8%BA%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E7%82%B9%E8%B5%9E%23&t=31&band_rank=3&Refer=top)
1. [Jennie因服装问题道歉](https://s.weibo.com//weibo?q=%23Jennie%E5%9B%A0%E6%9C%8D%E8%A3%85%E9%97%AE%E9%A2%98%E9%81%93%E6%AD%89%23&t=31&band_rank=4&Refer=top)
1. [张睿披哥下沉市场口碑](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%8A%AB%E5%93%A5%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23&t=31&band_rank=5&Refer=top)
1. [王俊凯口误了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%A3%E8%AF%AF%E4%BA%86%23&t=31&band_rank=6&Refer=top)
1. [女主播希望停止榜一大哥病态折磨](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%B8%8C%E6%9C%9B%E5%81%9C%E6%AD%A2%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E7%97%85%E6%80%81%E6%8A%98%E7%A3%A8%23&t=31&band_rank=7&Refer=top)
1. [阿森纳3比0曼城](https://s.weibo.com//weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B33%E6%AF%940%E6%9B%BC%E5%9F%8E%23&t=31&band_rank=8&Refer=top)
1. [盗墓笔记](https://s.weibo.com//weibo?q=%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0&t=31&band_rank=9&Refer=top)
1. [旺旺的无糖产品连店员都没听过](https://s.weibo.com//weibo?q=%23%E6%97%BA%E6%97%BA%E7%9A%84%E6%97%A0%E7%B3%96%E4%BA%A7%E5%93%81%E8%BF%9E%E5%BA%97%E5%91%98%E9%83%BD%E6%B2%A1%E5%90%AC%E8%BF%87%23&t=31&band_rank=10&Refer=top)
1. [邓紫棋](https://s.weibo.com//weibo?q=%E9%82%93%E7%B4%AB%E6%A3%8B&t=31&band_rank=11&Refer=top)
1. [C罗乔治娜婚礼合照](https://s.weibo.com//weibo?q=%23C%E7%BD%97%E4%B9%94%E6%B2%BB%E5%A8%9C%E5%A9%9A%E7%A4%BC%E5%90%88%E7%85%A7%23&t=31&band_rank=12&Refer=top)
1. [谷爱凌否认恋情](https://s.weibo.com//weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23&t=31&band_rank=13&Refer=top)
1. [小沈阳初舞台第一](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%88%9D%E8%88%9E%E5%8F%B0%E7%AC%AC%E4%B8%80%23&t=31&band_rank=14&Refer=top)
1. [云旗](https://s.weibo.com//weibo?q=%E4%BA%91%E6%97%97&t=31&band_rank=15&Refer=top)
1. [王橹杰 上春山](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E4%B8%8A%E6%98%A5%E5%B1%B1&t=31&band_rank=16&Refer=top)
1. [狼队战胜AG](https://s.weibo.com//weibo?q=%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CAG&t=31&band_rank=17&Refer=top)
1. [请3天假连休13天](https://s.weibo.com//weibo?q=%E8%AF%B73%E5%A4%A9%E5%81%87%E8%BF%9E%E4%BC%9113%E5%A4%A9&t=31&band_rank=18&Refer=top)
1. [离世39岁儿科医生最后一条朋友圈](https://s.weibo.com//weibo?q=%23%E7%A6%BB%E4%B8%9639%E5%B2%81%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E6%9C%80%E5%90%8E%E4%B8%80%E6%9D%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%23&t=31&band_rank=19&Refer=top)
1. [吴艳妮13秒12夺冠](https://s.weibo.com//weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE13%E7%A7%9212%E5%A4%BA%E5%86%A0%23&t=31&band_rank=20&Refer=top)
1. [礼物要送有溢价的东西](https://s.weibo.com//weibo?q=%E7%A4%BC%E7%89%A9%E8%A6%81%E9%80%81%E6%9C%89%E6%BA%A2%E4%BB%B7%E7%9A%84%E4%B8%9C%E8%A5%BF&t=31&band_rank=21&Refer=top)
1. [居民存款7月又少了6300亿](https://s.weibo.com//weibo?q=%23%E5%B1%85%E6%B0%91%E5%AD%98%E6%AC%BE7%E6%9C%88%E5%8F%88%E5%B0%91%E4%BA%866300%E4%BA%BF%23&t=31&band_rank=22&Refer=top)
1. [KPL](https://s.weibo.com//weibo?q=KPL&t=31&band_rank=23&Refer=top)
1. [游客不信胖东来爆满到店买2购物车](https://s.weibo.com//weibo?q=%23%E6%B8%B8%E5%AE%A2%E4%B8%8D%E4%BF%A1%E8%83%96%E4%B8%9C%E6%9D%A5%E7%88%86%E6%BB%A1%E5%88%B0%E5%BA%97%E4%B9%B02%E8%B4%AD%E7%89%A9%E8%BD%A6%23&t=31&band_rank=24&Refer=top)
1. [TMEA获奖名单](https://s.weibo.com//weibo?q=TMEA%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=25&Refer=top)
1. [披哥听劝](https://s.weibo.com//weibo?q=%23%E6%8A%AB%E5%93%A5%E5%90%AC%E5%8A%9D%23&t=31&band_rank=26&Refer=top)
1. [恋与深空](https://s.weibo.com//weibo?q=%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA&t=31&band_rank=27&Refer=top)
1. [有人要求政府联系某明星给自己过生日](https://s.weibo.com//weibo?q=%23%E6%9C%89%E4%BA%BA%E8%A6%81%E6%B1%82%E6%94%BF%E5%BA%9C%E8%81%94%E7%B3%BB%E6%9F%90%E6%98%8E%E6%98%9F%E7%BB%99%E8%87%AA%E5%B7%B1%E8%BF%87%E7%94%9F%E6%97%A5%23&t=31&band_rank=28&Refer=top)
1. [满江 叔圈天菜](https://s.weibo.com//weibo?q=%E6%BB%A1%E6%B1%9F%20%E5%8F%94%E5%9C%88%E5%A4%A9%E8%8F%9C&t=31&band_rank=29&Refer=top)
1. [日本共产党最新表态](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E5%85%B1%E4%BA%A7%E5%85%9A%E6%9C%80%E6%96%B0%E8%A1%A8%E6%80%81%23&t=31&band_rank=30&Refer=top)
1. [你是我见过炒蛋炒饭最干净的厨子了](https://s.weibo.com//weibo?q=%E4%BD%A0%E6%98%AF%E6%88%91%E8%A7%81%E8%BF%87%E7%82%92%E8%9B%8B%E7%82%92%E9%A5%AD%E6%9C%80%E5%B9%B2%E5%87%80%E7%9A%84%E5%8E%A8%E5%AD%90%E4%BA%86&t=31&band_rank=31&Refer=top)
1. [王源年度最佳内地男歌手](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%BA%90%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BD%B3%E5%86%85%E5%9C%B0%E7%94%B7%E6%AD%8C%E6%89%8B%23&t=31&band_rank=32&Refer=top)
1. [建议大家减少对日常琐事的决策时间](https://s.weibo.com//weibo?q=%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%87%8F%E5%B0%91%E5%AF%B9%E6%97%A5%E5%B8%B8%E7%90%90%E4%BA%8B%E7%9A%84%E5%86%B3%E7%AD%96%E6%97%B6%E9%97%B4&t=31&band_rank=33&Refer=top)
1. [市民打12345投诉月光太亮影响睡觉](https://s.weibo.com//weibo?q=%23%E5%B8%82%E6%B0%91%E6%89%9312345%E6%8A%95%E8%AF%89%E6%9C%88%E5%85%89%E5%A4%AA%E4%BA%AE%E5%BD%B1%E5%93%8D%E7%9D%A1%E8%A7%89%23&t=31&band_rank=34&Refer=top)
1. [谷爱凌最后一个吃到自己的瓜](https://s.weibo.com//weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%90%83%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23&t=31&band_rank=35&Refer=top)
1. [魏子宸太有杰尼斯味了](https://s.weibo.com//weibo?q=%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A4%AA%E6%9C%89%E6%9D%B0%E5%B0%BC%E6%96%AF%E5%91%B3%E4%BA%86&t=31&band_rank=36&Refer=top)
1. [李煜东哭了](https://s.weibo.com//weibo?q=%E6%9D%8E%E7%85%9C%E4%B8%9C%E5%93%AD%E4%BA%86&t=31&band_rank=37&Refer=top)
1. [龙餐馆](https://s.weibo.com//weibo?q=%E9%BE%99%E9%A4%90%E9%A6%86&t=31&band_rank=38&Refer=top)
1. [iG晋级骑士之路](https://s.weibo.com//weibo?q=iG%E6%99%8B%E7%BA%A7%E9%AA%91%E5%A3%AB%E4%B9%8B%E8%B7%AF&t=31&band_rank=39&Refer=top)
1. [沈佳润还是藏不住事的年纪](https://s.weibo.com//weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%BF%98%E6%98%AF%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%8B%E7%9A%84%E5%B9%B4%E7%BA%AA%23&t=31&band_rank=40&Refer=top)
1. [美国女子怀孕八个月却每天吸食芬太尼](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%85%AB%E4%B8%AA%E6%9C%88%E5%8D%B4%E6%AF%8F%E5%A4%A9%E5%90%B8%E9%A3%9F%E8%8A%AC%E5%A4%AA%E5%B0%BC%23&t=31&band_rank=41&Refer=top)
1. [孙楠 降维打击](https://s.weibo.com//weibo?q=%E5%AD%99%E6%A5%A0%20%E9%99%8D%E7%BB%B4%E6%89%93%E5%87%BB&t=31&band_rank=42&Refer=top)
1. [众解说看iG晋级骑士之路](https://s.weibo.com//weibo?q=%23%E4%BC%97%E8%A7%A3%E8%AF%B4%E7%9C%8BiG%E6%99%8B%E7%BA%A7%E9%AA%91%E5%A3%AB%E4%B9%8B%E8%B7%AF%23&t=31&band_rank=43&Refer=top)
1. [阿森纳vs曼城](https://s.weibo.com//weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3vs%E6%9B%BC%E5%9F%8E%23&t=31&band_rank=44&Refer=top)
1. [四代跳Attention](https://s.weibo.com//weibo?q=%23%E5%9B%9B%E4%BB%A3%E8%B7%B3Attention%23&t=31&band_rank=45&Refer=top)
1. [王俊凯一直在咳嗽](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%92%B3%E5%97%BD%23&t=31&band_rank=46&Refer=top)
1. [王橹杰 虚拟](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E8%99%9A%E6%8B%9F&t=31&band_rank=47&Refer=top)
1. [披哥初舞台危险成员](https://s.weibo.com//weibo?q=%23%E6%8A%AB%E5%93%A5%E5%88%9D%E8%88%9E%E5%8F%B0%E5%8D%B1%E9%99%A9%E6%88%90%E5%91%98%23&t=31&band_rank=48&Refer=top)
1. [陈伟霆张新成 山海相逢](https://s.weibo.com//weibo?q=%E9%99%88%E4%BC%9F%E9%9C%86%E5%BC%A0%E6%96%B0%E6%88%90%20%E5%B1%B1%E6%B5%B7%E7%9B%B8%E9%80%A2&t=31&band_rank=49&Refer=top)
1. [Xiaohu说队内沟通费劲](https://s.weibo.com//weibo?q=%23Xiaohu%E8%AF%B4%E9%98%9F%E5%86%85%E6%B2%9F%E9%80%9A%E8%B4%B9%E5%8A%B2%23&t=31&band_rank=50&Refer=top)
1. [朱镕基同志遗体18日火化](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%9318%E6%97%A5%E7%81%AB%E5%8C%96%23&t=31&band_rank=1&Refer=top)
1. [披荆斩棘排名](https://s.weibo.com//weibo?q=%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%8E%92%E5%90%8D&t=31&band_rank=2&Refer=top)
1. [王俊凯口误了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%A3%E8%AF%AF%E4%BA%86%23&t=31&band_rank=4&Refer=top)
1. [女主播希望停止榜一大哥病态折磨](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%B8%8C%E6%9C%9B%E5%81%9C%E6%AD%A2%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E7%97%85%E6%80%81%E6%8A%98%E7%A3%A8%23&t=31&band_rank=5&Refer=top)
1. [邓紫棋](https://s.weibo.com//weibo?q=%E9%82%93%E7%B4%AB%E6%A3%8B&t=31&band_rank=6&Refer=top)
1. [请3天假连休13天](https://s.weibo.com//weibo?q=%E8%AF%B73%E5%A4%A9%E5%81%87%E8%BF%9E%E4%BC%9113%E5%A4%A9&t=31&band_rank=7&Refer=top)
1. [盗墓笔记](https://s.weibo.com//weibo?q=%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0&t=31&band_rank=8&Refer=top)
1. [吴艳妮13秒12夺冠](https://s.weibo.com//weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE13%E7%A7%9212%E5%A4%BA%E5%86%A0%23&t=31&band_rank=9&Refer=top)
1. [阿森纳3比0曼城](https://s.weibo.com//weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B33%E6%AF%940%E6%9B%BC%E5%9F%8E%23&t=31&band_rank=10&Refer=top)
1. [Jennie因服装问题道歉](https://s.weibo.com//weibo?q=%23Jennie%E5%9B%A0%E6%9C%8D%E8%A3%85%E9%97%AE%E9%A2%98%E9%81%93%E6%AD%89%23&t=31&band_rank=11&Refer=top)
1. [张睿披哥下沉市场口碑](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%8A%AB%E5%93%A5%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23&t=31&band_rank=12&Refer=top)
1. [C罗乔治娜婚礼合照](https://s.weibo.com//weibo?q=%23C%E7%BD%97%E4%B9%94%E6%B2%BB%E5%A8%9C%E5%A9%9A%E7%A4%BC%E5%90%88%E7%85%A7%23&t=31&band_rank=13&Refer=top)
1. [张柏芝有种经济上行的美](https://s.weibo.com//weibo?q=%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%9C%89%E7%A7%8D%E7%BB%8F%E6%B5%8E%E4%B8%8A%E8%A1%8C%E7%9A%84%E7%BE%8E&t=31&band_rank=14&Refer=top)
1. [赵今麦好美](https://s.weibo.com//weibo?q=%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%A5%BD%E7%BE%8E&t=31&band_rank=15&Refer=top)
1. [谷爱凌否认恋情](https://s.weibo.com//weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23&t=31&band_rank=16&Refer=top)
1. [居民存款7月又少了6300亿](https://s.weibo.com//weibo?q=%23%E5%B1%85%E6%B0%91%E5%AD%98%E6%AC%BE7%E6%9C%88%E5%8F%88%E5%B0%91%E4%BA%866300%E4%BA%BF%23&t=31&band_rank=17&Refer=top)
1. [苹果阿里合作新进展](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9C%E9%98%BF%E9%87%8C%E5%90%88%E4%BD%9C%E6%96%B0%E8%BF%9B%E5%B1%95%23&t=31&band_rank=18&Refer=top)
1. [狼队战胜AG](https://s.weibo.com//weibo?q=%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CAG&t=31&band_rank=19&Refer=top)
1. [TMEA获奖名单](https://s.weibo.com//weibo?q=TMEA%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=20&Refer=top)
1. [小沈阳初舞台第一](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%88%9D%E8%88%9E%E5%8F%B0%E7%AC%AC%E4%B8%80%23&t=31&band_rank=21&Refer=top)
1. [游客不信胖东来爆满到店买2购物车](https://s.weibo.com//weibo?q=%23%E6%B8%B8%E5%AE%A2%E4%B8%8D%E4%BF%A1%E8%83%96%E4%B8%9C%E6%9D%A5%E7%88%86%E6%BB%A1%E5%88%B0%E5%BA%97%E4%B9%B02%E8%B4%AD%E7%89%A9%E8%BD%A6%23&t=31&band_rank=22&Refer=top)
1. [丁程鑫从不遮掩自己农村家庭背景](https://s.weibo.com//weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BB%8E%E4%B8%8D%E9%81%AE%E6%8E%A9%E8%87%AA%E5%B7%B1%E5%86%9C%E6%9D%91%E5%AE%B6%E5%BA%AD%E8%83%8C%E6%99%AF%23&t=31&band_rank=23&Refer=top)
1. [王橹杰 上春山](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E4%B8%8A%E6%98%A5%E5%B1%B1&t=31&band_rank=24&Refer=top)
1. [旺旺的无糖产品连店员都没听过](https://s.weibo.com//weibo?q=%23%E6%97%BA%E6%97%BA%E7%9A%84%E6%97%A0%E7%B3%96%E4%BA%A7%E5%93%81%E8%BF%9E%E5%BA%97%E5%91%98%E9%83%BD%E6%B2%A1%E5%90%AC%E8%BF%87%23&t=31&band_rank=25&Refer=top)
1. [严浩翔的排面](https://s.weibo.com//weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9A%84%E6%8E%92%E9%9D%A2%23&t=31&band_rank=26&Refer=top)
1. [王源年度最佳内地男歌手](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%BA%90%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BD%B3%E5%86%85%E5%9C%B0%E7%94%B7%E6%AD%8C%E6%89%8B%23&t=31&band_rank=27&Refer=top)
1. [美国女子怀孕八个月却每天吸食芬太尼](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%85%AB%E4%B8%AA%E6%9C%88%E5%8D%B4%E6%AF%8F%E5%A4%A9%E5%90%B8%E9%A3%9F%E8%8A%AC%E5%A4%AA%E5%B0%BC%23&t=31&band_rank=28&Refer=top)
1. [孙楠 降维打击](https://s.weibo.com//weibo?q=%E5%AD%99%E6%A5%A0%20%E9%99%8D%E7%BB%B4%E6%89%93%E5%87%BB&t=31&band_rank=29&Refer=top)
1. [陈奕恒回应摔倒](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E5%9B%9E%E5%BA%94%E6%91%94%E5%80%92%23&t=31&band_rank=30&Refer=top)
1. [有人要求政府联系某明星给自己过生日](https://s.weibo.com//weibo?q=%23%E6%9C%89%E4%BA%BA%E8%A6%81%E6%B1%82%E6%94%BF%E5%BA%9C%E8%81%94%E7%B3%BB%E6%9F%90%E6%98%8E%E6%98%9F%E7%BB%99%E8%87%AA%E5%B7%B1%E8%BF%87%E7%94%9F%E6%97%A5%23&t=31&band_rank=31&Refer=top)
1. [满江 叔圈天菜](https://s.weibo.com//weibo?q=%E6%BB%A1%E6%B1%9F%20%E5%8F%94%E5%9C%88%E5%A4%A9%E8%8F%9C&t=31&band_rank=32&Refer=top)
1. [丁禹兮说看得到粉丝的压力](https://s.weibo.com//weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E8%AF%B4%E7%9C%8B%E5%BE%97%E5%88%B0%E7%B2%89%E4%B8%9D%E7%9A%84%E5%8E%8B%E5%8A%9B%23&t=31&band_rank=33&Refer=top)
1. [谷爱凌最后一个吃到自己的瓜](https://s.weibo.com//weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%90%83%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23&t=31&band_rank=34&Refer=top)
1. [麦琳确实很适合亚裔妆容](https://s.weibo.com//weibo?q=%23%E9%BA%A6%E7%90%B3%E7%A1%AE%E5%AE%9E%E5%BE%88%E9%80%82%E5%90%88%E4%BA%9A%E8%A3%94%E5%A6%86%E5%AE%B9%23&t=31&band_rank=35&Refer=top)
1. [阿森纳vs曼城](https://s.weibo.com//weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3vs%E6%9B%BC%E5%9F%8E%23&t=31&band_rank=36&Refer=top)
1. [市民打12345投诉月光太亮影响睡觉](https://s.weibo.com//weibo?q=%23%E5%B8%82%E6%B0%91%E6%89%9312345%E6%8A%95%E8%AF%89%E6%9C%88%E5%85%89%E5%A4%AA%E4%BA%AE%E5%BD%B1%E5%93%8D%E7%9D%A1%E8%A7%89%23&t=31&band_rank=37&Refer=top)
1. [四代跳Attention](https://s.weibo.com//weibo?q=%23%E5%9B%9B%E4%BB%A3%E8%B7%B3Attention%23&t=31&band_rank=38&Refer=top)
1. [建议大家减少对日常琐事的决策时间](https://s.weibo.com//weibo?q=%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%87%8F%E5%B0%91%E5%AF%B9%E6%97%A5%E5%B8%B8%E7%90%90%E4%BA%8B%E7%9A%84%E5%86%B3%E7%AD%96%E6%97%B6%E9%97%B4&t=31&band_rank=39&Refer=top)
1. [KPL](https://s.weibo.com//weibo?q=KPL&t=31&band_rank=40&Refer=top)
1. [离世39岁儿科医生最后一条朋友圈](https://s.weibo.com//weibo?q=%23%E7%A6%BB%E4%B8%9639%E5%B2%81%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E6%9C%80%E5%90%8E%E4%B8%80%E6%9D%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%23&t=31&band_rank=41&Refer=top)
1. [王橹杰 虚拟](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E8%99%9A%E6%8B%9F&t=31&band_rank=42&Refer=top)
1. [云旗](https://s.weibo.com//weibo?q=%E4%BA%91%E6%97%97&t=31&band_rank=43&Refer=top)
1. [iG晋级骑士之路](https://s.weibo.com//weibo?q=iG%E6%99%8B%E7%BA%A7%E9%AA%91%E5%A3%AB%E4%B9%8B%E8%B7%AF&t=31&band_rank=44&Refer=top)
1. [沈佳润还是藏不住事的年纪](https://s.weibo.com//weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%BF%98%E6%98%AF%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%8B%E7%9A%84%E5%B9%B4%E7%BA%AA%23&t=31&band_rank=45&Refer=top)
1. [鹿晗天资是很残忍的东西](https://s.weibo.com//weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%A9%E8%B5%84%E6%98%AF%E5%BE%88%E6%AE%8B%E5%BF%8D%E7%9A%84%E4%B8%9C%E8%A5%BF%23&t=31&band_rank=46&Refer=top)
1. [恋与深空](https://s.weibo.com//weibo?q=%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA&t=31&band_rank=47&Refer=top)
1. [魏子宸太有杰尼斯味了](https://s.weibo.com//weibo?q=%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A4%AA%E6%9C%89%E6%9D%B0%E5%B0%BC%E6%96%AF%E5%91%B3%E4%BA%86&t=31&band_rank=48&Refer=top)
1. [李煜东哭了](https://s.weibo.com//weibo?q=%E6%9D%8E%E7%85%9C%E4%B8%9C%E5%93%AD%E4%BA%86&t=31&band_rank=49&Refer=top)
1. [A股又见大肉签](https://s.weibo.com//weibo?q=A%E8%82%A1%E5%8F%88%E8%A7%81%E5%A4%A7%E8%82%89%E7%AD%BE&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
