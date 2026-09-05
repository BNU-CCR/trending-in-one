# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-05 08:08:41

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
<!-- 最后更新时间 Sat Sep 05 2026 09:21:38 GMT+0800 (China Standard Time) -->

1. [公司霸气回应日本打机床牌卡中国脖子](https://so.toutiao.com/search?keyword=公司霸气回应日本打机床牌卡中国脖子)
1. [菲法院为何下令逮捕副总统](https://so.toutiao.com/search?keyword=菲法院为何下令逮捕副总统)
1. [稳步提升参保质量 推动“三医”协同发展](https://so.toutiao.com/search?keyword=稳步提升参保质量%20推动“三医”协同发展)
1. [张雪机车法国站排位赛包揽前二](https://so.toutiao.com/search?keyword=张雪机车法国站排位赛包揽前二)
1. [孩子上幼儿园想家上演“逃学威龙”](https://so.toutiao.com/search?keyword=孩子上幼儿园想家上演“逃学威龙”)
1. [贺娇龙母亲拒立雕像：别给县里增负担](https://so.toutiao.com/search?keyword=贺娇龙母亲拒立雕像：别给县里增负担)
1. [中国女篮不敌美国女篮](https://so.toutiao.com/search?keyword=中国女篮不敌美国女篮)
1. [福建老城墙秒变防洪堤隔40公分洪水](https://so.toutiao.com/search?keyword=福建老城墙秒变防洪堤隔40公分洪水)
1. [“阔屏手机”风起 厂商纷纷跟进](https://so.toutiao.com/search?keyword=“阔屏手机”风起%20厂商纷纷跟进)
1. [美存储芯片光通信集体暴涨](https://so.toutiao.com/search?keyword=美存储芯片光通信集体暴涨)
1. [演员刘钧在公园跳广场舞被偶遇](https://so.toutiao.com/search?keyword=演员刘钧在公园跳广场舞被偶遇)
1. [联通在青岛大学与校方起冲突？假的](https://so.toutiao.com/search?keyword=联通在青岛大学与校方起冲突？假的)
1. [章泽天不抢话为什么成了一个问题](https://so.toutiao.com/search?keyword=章泽天不抢话为什么成了一个问题)
1. [网友偶遇张馨予何捷广州看车](https://so.toutiao.com/search?keyword=网友偶遇张馨予何捷广州看车)
1. [德比斯花了20年才拿到第一个杆位](https://so.toutiao.com/search?keyword=德比斯花了20年才拿到第一个杆位)
1. [82岁朱幼麟在香港首驾张雪机车](https://so.toutiao.com/search?keyword=82岁朱幼麟在香港首驾张雪机车)
1. [一家三口吃水洗鸡蛋集体中毒](https://so.toutiao.com/search?keyword=一家三口吃水洗鸡蛋集体中毒)
1. [“梅姨”画像更新](https://so.toutiao.com/search?keyword=“梅姨”画像更新)
1. [洪水侵袭“中国白茶第一镇”](https://so.toutiao.com/search?keyword=洪水侵袭“中国白茶第一镇”)
1. [男子与前女友纠纷被其现男友等打死](https://so.toutiao.com/search?keyword=男子与前女友纠纷被其现男友等打死)
1. [新加坡谈52人在广西涉案被扣](https://so.toutiao.com/search?keyword=新加坡谈52人在广西涉案被扣)
1. [赵心童1-5不敌特鲁姆普无缘半决赛](https://so.toutiao.com/search?keyword=赵心童1-5不敌特鲁姆普无缘半决赛)
1. [马斯克的无人驾驶车是划时代产品吗](https://so.toutiao.com/search?keyword=马斯克的无人驾驶车是划时代产品吗)
1. [52名新加坡公民在广西被捕](https://so.toutiao.com/search?keyword=52名新加坡公民在广西被捕)
1. [李月汝护照弄丢到底是谁的责任](https://so.toutiao.com/search?keyword=李月汝护照弄丢到底是谁的责任)
1. [乌克兰两大安全机构为何爆发枪战](https://so.toutiao.com/search?keyword=乌克兰两大安全机构为何爆发枪战)
1. [特朗普证实威特科夫库什纳将访问俄乌](https://so.toutiao.com/search?keyword=特朗普证实威特科夫库什纳将访问俄乌)
1. [41岁李念和14岁女儿跳舞](https://so.toutiao.com/search?keyword=41岁李念和14岁女儿跳舞)
1. [多国从美国运回黄金有何影响](https://so.toutiao.com/search?keyword=多国从美国运回黄金有何影响)
1. [俄为油库加装巨型“防无人机网”](https://so.toutiao.com/search?keyword=俄为油库加装巨型“防无人机网”)
1. [菲军警宣扬“中国威胁”有何企图](https://so.toutiao.com/search?keyword=菲军警宣扬“中国威胁”有何企图)
1. [穆里尼奥遭遇回归皇马后首败](https://so.toutiao.com/search?keyword=穆里尼奥遭遇回归皇马后首败)
1. [外交部点赞的两位救人英雄受表彰](https://so.toutiao.com/search?keyword=外交部点赞的两位救人英雄受表彰)
1. [为什么手机卖不动了反而要涨价](https://so.toutiao.com/search?keyword=为什么手机卖不动了反而要涨价)
1. [九月手机圈Pro Max大乱斗](https://so.toutiao.com/search?keyword=九月手机圈Pro%20Max大乱斗)
1. [李跃勇当选河南驻马店市委书记](https://so.toutiao.com/search?keyword=李跃勇当选河南驻马店市委书记)
1. [男孩从38楼阳台爬下被楼下邻居拽住](https://so.toutiao.com/search?keyword=男孩从38楼阳台爬下被楼下邻居拽住)
1. [27岁网约车司机心梗去世留下俩女儿](https://so.toutiao.com/search?keyword=27岁网约车司机心梗去世留下俩女儿)
1. [许晴曾回应在《花少2》饭局遭冷落](https://so.toutiao.com/search?keyword=许晴曾回应在《花少2》饭局遭冷落)
1. [泽连斯基称乌国家安全局遭袭](https://so.toutiao.com/search?keyword=泽连斯基称乌国家安全局遭袭)
1. [佟丽娅与陈思诚合体带娃吃饭](https://so.toutiao.com/search?keyword=佟丽娅与陈思诚合体带娃吃饭)
1. [钓友帐篷里钻进2米长眼镜王蛇](https://so.toutiao.com/search?keyword=钓友帐篷里钻进2米长眼镜王蛇)
1. [解放军将派出兵力赴俄参加实兵演习](https://so.toutiao.com/search?keyword=解放军将派出兵力赴俄参加实兵演习)
1. [阿尔卡拉斯：吴易昺的打法不可思议](https://so.toutiao.com/search?keyword=阿尔卡拉斯：吴易昺的打法不可思议)
1. [山东省委书记省长带头捐款](https://so.toutiao.com/search?keyword=山东省委书记省长带头捐款)
1. [国防部回应台军方提交兵力整建计划](https://so.toutiao.com/search?keyword=国防部回应台军方提交兵力整建计划)
1. [本·西蒙斯重返NBA](https://so.toutiao.com/search?keyword=本·西蒙斯重返NBA)
1. [证监会开出2.55亿巨额罚单](https://so.toutiao.com/search?keyword=证监会开出2.55亿巨额罚单)
1. [欠百万绝望小伙学胖东来理念翻盘买车](https://so.toutiao.com/search?keyword=欠百万绝望小伙学胖东来理念翻盘买车)
1. [大V：高市早苗或对麻生太郎“宣战”](https://so.toutiao.com/search?keyword=大V：高市早苗或对麻生太郎“宣战”)
1. [如是书院学员辟谷一天只喝水吃5个枣](https://so.toutiao.com/search?keyword=如是书院学员辟谷一天只喝水吃5个枣)
1. [贺娇龙葬于父亲墓旁 母亲拒给立雕像](https://so.toutiao.com/search?keyword=贺娇龙葬于父亲墓旁%20母亲拒给立雕像)
1. [长期这样吃饭全身炎症上升](https://so.toutiao.com/search?keyword=长期这样吃饭全身炎症上升)
1. [研究发现每天吃够豆类高血压风险降低](https://so.toutiao.com/search?keyword=研究发现每天吃够豆类高血压风险降低)
1. [男子得知母亲去世大哭到无法开车](https://so.toutiao.com/search?keyword=男子得知母亲去世大哭到无法开车)
1. [媒体：电视该回归大屏的公共价值了](https://so.toutiao.com/search?keyword=媒体：电视该回归大屏的公共价值了)
1. [尼泊尔不向中国寻求气候正义赔偿](https://so.toutiao.com/search?keyword=尼泊尔不向中国寻求气候正义赔偿)
1. [我国目前有1870万名教师](https://so.toutiao.com/search?keyword=我国目前有1870万名教师)
1. [幼儿园萌娃沉迷“劳动”想不起来哭](https://so.toutiao.com/search?keyword=幼儿园萌娃沉迷“劳动”想不起来哭)
1. [33岁抗癌博主唐豆豆离世](https://so.toutiao.com/search?keyword=33岁抗癌博主唐豆豆离世)
1. [教育部回应“教师面对学生不敢管”](https://so.toutiao.com/search?keyword=教育部回应“教师面对学生不敢管”)
1. [马斯克再次“画大饼”还会有多少人信](https://so.toutiao.com/search?keyword=马斯克再次“画大饼”还会有多少人信)
1. [美航母停靠泰国 指挥官严令禁止嫖娼](https://so.toutiao.com/search?keyword=美航母停靠泰国%20指挥官严令禁止嫖娼)
1. [女生眼里进虫直接用手扒拉出来](https://so.toutiao.com/search?keyword=女生眼里进虫直接用手扒拉出来)
1. [十年后真会有十亿台机器人吗](https://so.toutiao.com/search?keyword=十年后真会有十亿台机器人吗)
1. [周冬雨会突然拉肚子](https://so.toutiao.com/search?keyword=周冬雨会突然拉肚子)
1. [刀郎官宣线上音乐会](https://so.toutiao.com/search?keyword=刀郎官宣线上音乐会)
1. [女高音歌唱家龚爽去世 年仅37岁](https://so.toutiao.com/search?keyword=女高音歌唱家龚爽去世%20年仅37岁)
1. [650亿桶石油为何压不住美国油价](https://so.toutiao.com/search?keyword=650亿桶石油为何压不住美国油价)
1. [越南追加30亿美元修铁路图什么](https://so.toutiao.com/search?keyword=越南追加30亿美元修铁路图什么)
1. [中国女篮失误次数是美国女篮两倍多](https://so.toutiao.com/search?keyword=中国女篮失误次数是美国女篮两倍多)
1. [Token经济要开始崩了吗](https://so.toutiao.com/search?keyword=Token经济要开始崩了吗)
1. [新生爸妈送学游变成“蜜月游”](https://so.toutiao.com/search?keyword=新生爸妈送学游变成“蜜月游”)
1. [普京：俄军最近推进速度明显加快](https://so.toutiao.com/search?keyword=普京：俄军最近推进速度明显加快)
1. [媒体：防止职校生实习成“法外飞地”](https://so.toutiao.com/search?keyword=媒体：防止职校生实习成“法外飞地”)
1. [中国男子在菲律宾移民局羁押中心去世](https://so.toutiao.com/search?keyword=中国男子在菲律宾移民局羁押中心去世)
1. [专家：美伊冲突升级与否受限于军力](https://so.toutiao.com/search?keyword=专家：美伊冲突升级与否受限于军力)
1. [暴雨袭击莆田 龙舟上阵转移群众](https://so.toutiao.com/search?keyword=暴雨袭击莆田%20龙舟上阵转移群众)
1. [美联储9月加息预期升温](https://so.toutiao.com/search?keyword=美联储9月加息预期升温)
1. [贵州秋假连着中秋国庆连休13天系谣言](https://so.toutiao.com/search?keyword=贵州秋假连着中秋国庆连休13天系谣言)
1. [外交部：已向韩方提出严正交涉](https://so.toutiao.com/search?keyword=外交部：已向韩方提出严正交涉)
1. [全国唯一有两所211高校县级市迎新生](https://so.toutiao.com/search?keyword=全国唯一有两所211高校县级市迎新生)
1. [美总统称赞美国“就业数据”](https://so.toutiao.com/search?keyword=美总统称赞美国“就业数据”)
1. [极端天气频发或将重塑保险定价逻辑](https://so.toutiao.com/search?keyword=极端天气频发或将重塑保险定价逻辑)
1. [菲律宾地方法院下令逮捕副总统莎拉](https://so.toutiao.com/search?keyword=菲律宾地方法院下令逮捕副总统莎拉)
1. [媒体：教师困境根子在校门之外](https://so.toutiao.com/search?keyword=媒体：教师困境根子在校门之外)
1. [女童电子病历被医生标注“刁蛮”](https://so.toutiao.com/search?keyword=女童电子病历被医生标注“刁蛮”)
1. [吉隆泥石流已致31人遇难531人失联](https://so.toutiao.com/search?keyword=吉隆泥石流已致31人遇难531人失联)
1. [王又又：高市亲手掐断日本经济命脉](https://so.toutiao.com/search?keyword=王又又：高市亲手掐断日本经济命脉)
1. [黄金市场风向如何变化](https://so.toutiao.com/search?keyword=黄金市场风向如何变化)
1. [24岁抗癌博主小詹去世](https://so.toutiao.com/search?keyword=24岁抗癌博主小詹去世)
1. [外媒被“广东造”新能源汽车圈粉](https://so.toutiao.com/search?keyword=外媒被“广东造”新能源汽车圈粉)
1. [中俄蒙开展“边防合作-2026”联演](https://so.toutiao.com/search?keyword=中俄蒙开展“边防合作-2026”联演)
1. [杨小菁当选河南许昌市委书记](https://so.toutiao.com/search?keyword=杨小菁当选河南许昌市委书记)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Sep 05 2026 08:55:04 GMT+0800 (China Standard Time) -->

1. [武汉大学教授曾梦琪被举报](https://www.zhihu.com/search?q=%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E6%95%99%E6%8E%88%E6%9B%BE%E6%A2%A6%E7%90%AA%E8%A2%AB%E4%B8%BE%E6%8A%A5)
1. [女子吃甜虾肠道爬出寄生虫](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E5%90%83%E7%94%9C%E8%99%BE%E8%82%A0%E9%81%93%E7%88%AC%E5%87%BA%E5%AF%84%E7%94%9F%E8%99%AB)
1. [GPT-6 正式发布](https://www.zhihu.com/search?q=GPT-6%20%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [孙宇晨最新发文](https://www.zhihu.com/search?q=%E5%AD%99%E5%AE%87%E6%99%A8%E6%9C%80%E6%96%B0%E5%8F%91%E6%96%87)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [张继科带教乒乓球一个半小时25元](https://www.zhihu.com/search?q=%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%B8%A6%E6%95%99%E4%B9%92%E4%B9%93%E7%90%83%E4%B8%80%E4%B8%AA%E5%8D%8A%E5%B0%8F%E6%97%B625%E5%85%83)
1. [曝科大讯飞公关副总裁被解除职务](https://www.zhihu.com/search?q=%E6%9B%9D%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E5%85%AC%E5%85%B3%E5%89%AF%E6%80%BB%E8%A3%81%E8%A2%AB%E8%A7%A3%E9%99%A4%E8%81%8C%E5%8A%A1)
1. [乌克兰两部门基辅交火](https://www.zhihu.com/search?q=%E4%B9%8C%E5%85%8B%E5%85%B0%E4%B8%A4%E9%83%A8%E9%97%A8%E5%9F%BA%E8%BE%85%E4%BA%A4%E7%81%AB)
1. [官方通报星宇股份批量劝退应届生](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E6%89%B9%E9%87%8F%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F)
1. [乡音无改鬓毛shuāi远上寒山石径xié](https://www.zhihu.com/search?q=%E4%B9%A1%E9%9F%B3%E6%97%A0%E6%94%B9%E9%AC%93%E6%AF%9Bshu%C4%81i%E8%BF%9C%E4%B8%8A%E5%AF%92%E5%B1%B1%E7%9F%B3%E5%BE%84xi%C3%A9)
1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [充值1000误到账26419933亿元](https://www.zhihu.com/search?q=%E5%85%85%E5%80%BC1000%E8%AF%AF%E5%88%B0%E8%B4%A626419933%E4%BA%BF%E5%85%83)
1. [49岁公司高管接受临床试药后死亡](https://www.zhihu.com/search?q=49%E5%B2%81%E5%85%AC%E5%8F%B8%E9%AB%98%E7%AE%A1%E6%8E%A5%E5%8F%97%E4%B8%B4%E5%BA%8A%E8%AF%95%E8%8D%AF%E5%90%8E%E6%AD%BB%E4%BA%A1)
1. [ChatGPT等AI服务集体故障](https://www.zhihu.com/search?q=ChatGPT%E7%AD%89AI%E6%9C%8D%E5%8A%A1%E9%9B%86%E4%BD%93%E6%95%85%E9%9A%9C)
1. [美国 8 月非农数据公布](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%208%20%E6%9C%88%E9%9D%9E%E5%86%9C%E6%95%B0%E6%8D%AE%E5%85%AC%E5%B8%83)
1. [西藏泥石流已致 31 死 531 失联](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B4%2031%20%E6%AD%BB%20531%20%E5%A4%B1%E8%81%94)
1. [美国女篮 vs 中国女篮](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E5%A5%B3%E7%AF%AE%20vs%20%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Sep 05 2026 08:08:41 GMT+0800 (China Standard Time) -->

1. [央视晚会将「乡音无改鬓毛衰」读 shuāi 而非 cuī，为什么和早年学的不一样了？如何看待这一变化？](https://www.zhihu.com/question/2079167935671530500)
1. [女子吃甜虾后肚子痛 10 多天，肠道发现寄生虫，人们常说海水里的生鲜没有寄生虫靠谱吗？怎样吃才安全？](https://www.zhihu.com/question/2078660058091729200)
1. [家长在寿司郎餐位用杯子给孩童接尿，顾客称服务员未加制止，从海底捞到寿司郎，门店遇此类事该怎么妥善处理？](https://www.zhihu.com/question/2079182746052552400)
1. [为什么大部分老实人改不掉反应慢的毛病，被欺辱了不会当场反击，只会事后记仇？](https://www.zhihu.com/question/9967937857)
1. [突然之间破亿，鸿蒙系统和开源鸿蒙为什么发展的如此之快？](https://www.zhihu.com/question/2078432156339140400)
1. [如何看待《重案六组：消失的警号》开播后，观众呼吁「还我季洁」？季洁为何在观众心中不可替代？](https://www.zhihu.com/question/2078187559780185000)
1. [农村的老人为什么都不太喜欢去城里住？](https://www.zhihu.com/question/2054319245593522700)
1. [如何评价勇哥新开的社区食堂？](https://www.zhihu.com/question/2078608395037422600)
1. [罗永浩称「谁做老人傻瓜电视，我免费带货一年」，商业上如何看电视越做越复杂，但想看电视却越来越麻烦？](https://www.zhihu.com/question/2078137132128920300)
1. [苹果现在才做折叠屏，是来得太晚，还是正好等到了技术成熟？](https://www.zhihu.com/question/2076754620832135200)
1. [如何评价GPT-6Astra，是目前智能程度最高的模型吗？](https://www.zhihu.com/question/2079099260516184300)
1. [2026 女篮世界杯小组赛，中国女篮 61-94 不敌美国女篮，如何评价本场比赛？](https://www.zhihu.com/question/2079140562767296000)
1. [国航回应「美国地勤不拔油管扯爆国航油箱」，航班加油时加油车非正常移动导致飞机部件损伤，如何看待此事？](https://www.zhihu.com/question/2078552060379902000)
1. [如何评价电影《一刀倾城》（又名神州第一刀）？](https://www.zhihu.com/question/63139215)
1. [上海交大内部 PPT 曝光高校AI教育困局，课程迭代远落后技术发展，学生反超老师成常态，该怎样破解？](https://www.zhihu.com/question/2078852068052137200)
1. [男子肚子疼被误诊为胃癌，医院瞒着切全胃，为何会出现如此离谱的医疗事故？医院赔22万，能抵消男子损失吗？](https://www.zhihu.com/question/2079207919535350300)
1. [我儿子开学上初一了，大概从四年级开始成绩开始下滑，现在只能考70分了，我应该放手吗？](https://www.zhihu.com/question/2066790953046824400)
1. [耿同学锤刘光慧、曲静的《Nature》论文涉数据造假，哪些信息值得关注？](https://www.zhihu.com/question/2079254543552837400)
1. [华为国行 5G 疑似回归，Mate90 系列入网，为何在此时选择回归？其 5G 回归有何技术突破创新？](https://www.zhihu.com/question/2078803707794297000)
1. [女留学生被杀，凶手作案动机初步披露，系被害人要公开二人关系，凶手担心失去教职，还有哪些细节值得关注？](https://www.zhihu.com/question/2079153698018522000)
1. [程序员每天消耗几千万上亿的Token，到底产出了什么？](https://www.zhihu.com/question/2078056911908365600)
1. [大学养的 10 只鸡和 2 只鹅被校内工人偷走，施工方赔7000元，如何看待处罚结果？应承担哪些责任？](https://www.zhihu.com/question/2078155526551163100)
1. [你觉得中国女篮李月汝「护照遗失」的理由成立吗，因公护照和个人护照补办的流程差在哪里，真的完全来不及吗？](https://www.zhihu.com/question/2078792215732512300)
1. [最近内存、存储甚至显卡涨价，一个个都说自己要当等等党，难不成你要等到2040年么？](https://www.zhihu.com/question/2078521113076830500)
1. [陈丹青曾力捧木心、仲树，但前者被指「文本再生」后者被指「汉化抄袭」，如何评价？他捧人的眼光有问题吗？](https://www.zhihu.com/question/2075251334274443000)
1. [为什么一只蚂蚁无论从多高的地方摔下来都不会被摔伤摔死，其他动物摔下来直接死翘翘了，背后是什么原理呢？](https://www.zhihu.com/question/2078282956834194700)
1. [全国小学、初中全部完成新教材替换，小学语文课文总数减少，数学简易方程调整到初中学，如何看待这次调整？](https://www.zhihu.com/question/2078414372993610800)
1. [15 万的油车与 15 万的电车，相同用车情况下，8 年费用对比如何？](https://www.zhihu.com/question/2078379707381310700)
1. [人人影视回归变正版，会员定价 25 元/月，用户们还会为曾经的情怀买单吗？你看好其市场前景吗？](https://www.zhihu.com/question/2079120419454285000)
1. [有哪些食物让你一吃就很惊喜？](https://www.zhihu.com/question/310548588)
1. [尼泊尔校长 10 秒内撤离 900 学生，对学校灾害应急预案有何借鉴意义？](https://www.zhihu.com/question/2077744255909606000)
1. [如何看待日本GDP占美国的比重从1995年的71%下降到2026年的13%？](https://www.zhihu.com/question/2074085438403489800)
1. [消息称月之暗面保密递交港股IPO，估值冲刺350亿美元，从不着急上市到骤然提速，背后有何考量？](https://www.zhihu.com/question/2079133150333101300)
1. [如何评价GPT-6打破孪生素数猜想最新纪录？](https://www.zhihu.com/question/2079153750703457000)
1. [历史上有哪些堪称无解的阳谋？](https://www.zhihu.com/question/1908526728994887000)
1. [职场中，主动争取资源和隐忍踏实，哪种职场模式更适合普通人发展？](https://www.zhihu.com/question/2077504885331965700)
1. [如何评价 OpenAI 最新发布的 GPT-6 Astra，并宣称人类进入 AGI 时代？](https://www.zhihu.com/question/2079054472190470000)
1. [你见过的风格最多变的食材有什么？具体有哪些奇妙的做法?](https://www.zhihu.com/question/1913308740712641500)
1. [有什么歌词是长大了才懂的？](https://www.zhihu.com/question/15114757910)
1. [女儿三年级下学期考了年级第一，但学习和生活状态让我特别焦虑，想请教大家该怎么引导？](https://www.zhihu.com/question/1940203297408526300)
1. [你有没有修过一件旧物？](https://www.zhihu.com/question/2050954650086593500)
1. [曝西贝拖欠离职补偿金，贾国龙称「要到2028年才能给」，这种行为在法律上如何定性？离职员工如何维权？](https://www.zhihu.com/question/2079160174732736000)
1. [如何看待今年的超级厄尔尼诺现象？](https://www.zhihu.com/question/2043053520912388400)

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
<!-- 最后更新时间 Sat Sep 05 2026 08:12:11 GMT+0800 (China Standard Time) -->

1. [习近平致信祝贺小喇叭开播70周年](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E8%87%B4%E4%BF%A1%E7%A5%9D%E8%B4%BA%E5%B0%8F%E5%96%87%E5%8F%AD%E5%BC%80%E6%92%AD70%E5%91%A8%E5%B9%B4%23&Refer=new_time)
1. [2岁男童把家中百草枯当饮料喝下](https://s.weibo.com//weibo?q=%232%E5%B2%81%E7%94%B7%E7%AB%A5%E6%8A%8A%E5%AE%B6%E4%B8%AD%E7%99%BE%E8%8D%89%E6%9E%AF%E5%BD%93%E9%A5%AE%E6%96%99%E5%96%9D%E4%B8%8B%23&t=31&band_rank=1&Refer=top)
1. [皇马 姆巴佩](https://s.weibo.com//weibo?q=%E7%9A%87%E9%A9%AC%20%E5%A7%86%E5%B7%B4%E4%BD%A9&t=31&band_rank=2&Refer=top)
1. [全国多地迎来丰收季](https://s.weibo.com//weibo?q=%23%E5%85%A8%E5%9B%BD%E5%A4%9A%E5%9C%B0%E8%BF%8E%E6%9D%A5%E4%B8%B0%E6%94%B6%E5%AD%A3%23&t=31&band_rank=3&Refer=top)
1. [日本请求俄拆纪念碑菊花纹章遭拒](https://s.weibo.com//weibo?q=%E6%97%A5%E6%9C%AC%E8%AF%B7%E6%B1%82%E4%BF%84%E6%8B%86%E7%BA%AA%E5%BF%B5%E7%A2%91%E8%8F%8A%E8%8A%B1%E7%BA%B9%E7%AB%A0%E9%81%AD%E6%8B%92&t=31&band_rank=4&Refer=top)
1. [极限挑战 重拍](https://s.weibo.com//weibo?q=%E6%9E%81%E9%99%90%E6%8C%91%E6%88%98%20%E9%87%8D%E6%8B%8D&t=31&band_rank=5&Refer=top)
1. [非农数据 黄金](https://s.weibo.com//weibo?q=%E9%9D%9E%E5%86%9C%E6%95%B0%E6%8D%AE%20%E9%BB%84%E9%87%91&t=31&band_rank=6&Refer=top)
1. [为什么现在这么流行耳夹式耳机](https://s.weibo.com//weibo?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E8%BF%99%E4%B9%88%E6%B5%81%E8%A1%8C%E8%80%B3%E5%A4%B9%E5%BC%8F%E8%80%B3%E6%9C%BA&t=31&band_rank=7&Refer=top)
1. [在夜市买了一只很可爱的串串小狗](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E5%A4%9C%E5%B8%82%E4%B9%B0%E4%BA%86%E4%B8%80%E5%8F%AA%E5%BE%88%E5%8F%AF%E7%88%B1%E7%9A%84%E4%B8%B2%E4%B8%B2%E5%B0%8F%E7%8B%97%23&t=31&band_rank=8&Refer=top)
1. [许晴被骂毛阿敏心疼](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E6%99%B4%E8%A2%AB%E9%AA%82%E6%AF%9B%E9%98%BF%E6%95%8F%E5%BF%83%E7%96%BC%23&t=31&band_rank=9&Refer=top)
1. [张雪机车法国站排位赛包揽前二](https://s.weibo.com//weibo?q=%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%B3%95%E5%9B%BD%E7%AB%99%E6%8E%92%E4%BD%8D%E8%B5%9B%E5%8C%85%E6%8F%BD%E5%89%8D%E4%BA%8C&t=31&band_rank=10&Refer=top)
1. [罗志祥复出争议](https://s.weibo.com//weibo?q=%E7%BD%97%E5%BF%97%E7%A5%A5%E5%A4%8D%E5%87%BA%E4%BA%89%E8%AE%AE&t=31&band_rank=11&Refer=top)
1. [刘雯 避嫌](https://s.weibo.com//weibo?q=%E5%88%98%E9%9B%AF%20%E9%81%BF%E5%AB%8C&t=31&band_rank=12&Refer=top)
1. [美存储芯片光通信集体暴涨](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E5%85%89%E9%80%9A%E4%BF%A1%E9%9B%86%E4%BD%93%E6%9A%B4%E6%B6%A8%23&t=31&band_rank=13&Refer=top)
1. [佟丽娅陈思诚边界感](https://s.weibo.com//weibo?q=%E4%BD%9F%E4%B8%BD%E5%A8%85%E9%99%88%E6%80%9D%E8%AF%9A%E8%BE%B9%E7%95%8C%E6%84%9F&t=31&band_rank=14&Refer=top)
1. [这是真正凭本事吃饭的行业](https://s.weibo.com//weibo?q=%23%E8%BF%99%E6%98%AF%E7%9C%9F%E6%AD%A3%E5%87%AD%E6%9C%AC%E4%BA%8B%E5%90%83%E9%A5%AD%E7%9A%84%E8%A1%8C%E4%B8%9A%23&t=31&band_rank=15&Refer=top)
1. [王楚钦退赛1000卫冕积分即将清零](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%80%80%E8%B5%9B1000%E5%8D%AB%E5%86%95%E7%A7%AF%E5%88%86%E5%8D%B3%E5%B0%86%E6%B8%85%E9%9B%B6%23&t=31&band_rank=16&Refer=top)
1. [刘雯评论区](https://s.weibo.com//weibo?q=%23%E5%88%98%E9%9B%AF%E8%AF%84%E8%AE%BA%E5%8C%BA%23&t=31&band_rank=17&Refer=top)
1. [寿司郎给孩子接小便的家长回应](https://s.weibo.com//weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E7%BB%99%E5%AD%A9%E5%AD%90%E6%8E%A5%E5%B0%8F%E4%BE%BF%E7%9A%84%E5%AE%B6%E9%95%BF%E5%9B%9E%E5%BA%94%23&t=31&band_rank=18&Refer=top)
1. [井柏然孙千cp粉现状](https://s.weibo.com//weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83cp%E7%B2%89%E7%8E%B0%E7%8A%B6%23&t=31&band_rank=19&Refer=top)
1. [AI编程时代最黑暗的一晚](https://s.weibo.com//weibo?q=AI%E7%BC%96%E7%A8%8B%E6%97%B6%E4%BB%A3%E6%9C%80%E9%BB%91%E6%9A%97%E7%9A%84%E4%B8%80%E6%99%9A&t=31&band_rank=20&Refer=top)
1. [将40岁的身体恢复到25岁的方法](https://s.weibo.com//weibo?q=%E5%B0%8640%E5%B2%81%E7%9A%84%E8%BA%AB%E4%BD%93%E6%81%A2%E5%A4%8D%E5%88%B025%E5%B2%81%E7%9A%84%E6%96%B9%E6%B3%95&t=31&band_rank=21&Refer=top)
1. [出锅前放盐才是隐藏控盐高手](https://s.weibo.com//weibo?q=%23%E5%87%BA%E9%94%85%E5%89%8D%E6%94%BE%E7%9B%90%E6%89%8D%E6%98%AF%E9%9A%90%E8%97%8F%E6%8E%A7%E7%9B%90%E9%AB%98%E6%89%8B%23&t=31&band_rank=22&Refer=top)
1. [上海到成都被订硬座还打卡女子拒出差](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%88%B0%E6%88%90%E9%83%BD%E8%A2%AB%E8%AE%A2%E7%A1%AC%E5%BA%A7%E8%BF%98%E6%89%93%E5%8D%A1%E5%A5%B3%E5%AD%90%E6%8B%92%E5%87%BA%E5%B7%AE%23&t=31&band_rank=23&Refer=top)
1. [松岛辉空或将登顶世界第一](https://s.weibo.com//weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%88%96%E5%B0%86%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23&t=31&band_rank=24&Refer=top)
1. [2015湖南台综艺有多神](https://s.weibo.com//weibo?q=2015%E6%B9%96%E5%8D%97%E5%8F%B0%E7%BB%BC%E8%89%BA%E6%9C%89%E5%A4%9A%E7%A5%9E&t=31&band_rank=25&Refer=top)
1. [男子被打持刀反抗却遭压制窒息而死](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%93%E6%8C%81%E5%88%80%E5%8F%8D%E6%8A%97%E5%8D%B4%E9%81%AD%E5%8E%8B%E5%88%B6%E7%AA%92%E6%81%AF%E8%80%8C%E6%AD%BB%23&t=31&band_rank=26&Refer=top)
1. [杨博文发了70分钟的vlog](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%8F%91%E4%BA%8670%E5%88%86%E9%92%9F%E7%9A%84vlog%23&t=31&band_rank=27&Refer=top)
1. [披哥二公排名](https://s.weibo.com//weibo?q=%E6%8A%AB%E5%93%A5%E4%BA%8C%E5%85%AC%E6%8E%92%E5%90%8D&t=31&band_rank=28&Refer=top)
1. [俄罗斯建粉碎大日本帝国纪念碑](https://s.weibo.com//weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%BB%BA%E7%B2%89%E7%A2%8E%E5%A4%A7%E6%97%A5%E6%9C%AC%E5%B8%9D%E5%9B%BD%E7%BA%AA%E5%BF%B5%E7%A2%91%23&t=31&band_rank=29&Refer=top)
1. [炎亚纶很想上花少](https://s.weibo.com//weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E5%BE%88%E6%83%B3%E4%B8%8A%E8%8A%B1%E5%B0%91%23&t=31&band_rank=30&Refer=top)
1. [全球变暖反而让寒潮更猛](https://s.weibo.com//weibo?q=%E5%85%A8%E7%90%83%E5%8F%98%E6%9A%96%E5%8F%8D%E8%80%8C%E8%AE%A9%E5%AF%92%E6%BD%AE%E6%9B%B4%E7%8C%9B&t=31&band_rank=31&Refer=top)
1. [原来高定是直接把人请到总部量身定制](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%AB%98%E5%AE%9A%E6%98%AF%E7%9B%B4%E6%8E%A5%E6%8A%8A%E4%BA%BA%E8%AF%B7%E5%88%B0%E6%80%BB%E9%83%A8%E9%87%8F%E8%BA%AB%E5%AE%9A%E5%88%B6%23&t=31&band_rank=32&Refer=top)
1. [出轨跟纸片人啥关系](https://s.weibo.com//weibo?q=%E5%87%BA%E8%BD%A8%E8%B7%9F%E7%BA%B8%E7%89%87%E4%BA%BA%E5%95%A5%E5%85%B3%E7%B3%BB&t=31&band_rank=33&Refer=top)
1. [姆巴佩点球被扑](https://s.weibo.com//weibo?q=%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%82%B9%E7%90%83%E8%A2%AB%E6%89%91&t=31&band_rank=34&Refer=top)
1. [吴易昺0比3阿尔卡拉斯](https://s.weibo.com//weibo?q=%23%E5%90%B4%E6%98%93%E6%98%BA0%E6%AF%943%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AF%23&t=31&band_rank=35&Refer=top)
1. [宋雨琦瘦成啥了](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%98%A6%E6%88%90%E5%95%A5%E4%BA%86%23&t=31&band_rank=36&Refer=top)
1. [印度2只流浪狗吓退性侵者](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A62%E5%8F%AA%E6%B5%81%E6%B5%AA%E7%8B%97%E5%90%93%E9%80%80%E6%80%A7%E4%BE%B5%E8%80%85%23&t=31&band_rank=37&Refer=top)
1. [配型非亲生女儿称报警基因检测全没用](https://s.weibo.com//weibo?q=%23%E9%85%8D%E5%9E%8B%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%E7%A7%B0%E6%8A%A5%E8%AD%A6%E5%9F%BA%E5%9B%A0%E6%A3%80%E6%B5%8B%E5%85%A8%E6%B2%A1%E7%94%A8%23&t=31&band_rank=38&Refer=top)
1. [为什么人上了年纪脸会变宽](https://s.weibo.com//weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BA%BA%E4%B8%8A%E4%BA%86%E5%B9%B4%E7%BA%AA%E8%84%B8%E4%BC%9A%E5%8F%98%E5%AE%BD%23&t=31&band_rank=39&Refer=top)
1. [郑钦文vs凯斯比赛时间](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87vs%E5%87%AF%E6%96%AF%E6%AF%94%E8%B5%9B%E6%97%B6%E9%97%B4&t=31&band_rank=40&Refer=top)
1. [多方回应18岁女孩疑被已婚男友打死](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%9418%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%96%91%E8%A2%AB%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%8F%8B%E6%89%93%E6%AD%BB%23&t=31&band_rank=41&Refer=top)
1. [花少2嘉宾干活表](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%912%E5%98%89%E5%AE%BE%E5%B9%B2%E6%B4%BB%E8%A1%A8%23&t=31&band_rank=42&Refer=top)
1. [28岁的人生应该是什么样呢](https://s.weibo.com//weibo?q=28%E5%B2%81%E7%9A%84%E4%BA%BA%E7%94%9F%E5%BA%94%E8%AF%A5%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E5%91%A2&t=31&band_rank=43&Refer=top)
1. [阿尔卡拉斯称赞吴易昺](https://s.weibo.com//weibo?q=%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AF%E7%A7%B0%E8%B5%9E%E5%90%B4%E6%98%93%E6%98%BA&t=31&band_rank=44&Refer=top)
1. [王传君老了才知芒果好](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%80%81%E4%BA%86%E6%89%8D%E7%9F%A5%E8%8A%92%E6%9E%9C%E5%A5%BD%23&t=31&band_rank=45&Refer=top)
1. [皇家贝蒂斯1比0皇马](https://s.weibo.com//weibo?q=%E7%9A%87%E5%AE%B6%E8%B4%9D%E8%92%82%E6%96%AF1%E6%AF%940%E7%9A%87%E9%A9%AC&t=31&band_rank=46&Refer=top)
1. [孙千听到今天星期五的反应](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%8D%83%E5%90%AC%E5%88%B0%E4%BB%8A%E5%A4%A9%E6%98%9F%E6%9C%9F%E4%BA%94%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=47&Refer=top)
1. [35岁以后存肌肉就是最好的抗衰](https://s.weibo.com//weibo?q=%2335%E5%B2%81%E4%BB%A5%E5%90%8E%E5%AD%98%E8%82%8C%E8%82%89%E5%B0%B1%E6%98%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%8A%97%E8%A1%B0%23&t=31&band_rank=48&Refer=top)
1. [宇宙最大医院连续三任院长落马](https://s.weibo.com//weibo?q=%23%E5%AE%87%E5%AE%99%E6%9C%80%E5%A4%A7%E5%8C%BB%E9%99%A2%E8%BF%9E%E7%BB%AD%E4%B8%89%E4%BB%BB%E9%99%A2%E9%95%BF%E8%90%BD%E9%A9%AC%23&t=31&band_rank=49&Refer=top)
1. [特斯拉无人驾驶电车每公里成本0.8元](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%97%A0%E4%BA%BA%E9%A9%BE%E9%A9%B6%E7%94%B5%E8%BD%A6%E6%AF%8F%E5%85%AC%E9%87%8C%E6%88%90%E6%9C%AC0.8%E5%85%83%23&t=31&band_rank=50&Refer=top)
1. [为什么现在这么流行耳夹式耳机](https://s.weibo.com//weibo?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E8%BF%99%E4%B9%88%E6%B5%81%E8%A1%8C%E8%80%B3%E5%A4%B9%E5%BC%8F%E8%80%B3%E6%9C%BA&t=31&band_rank=1&Refer=top)
1. [极限挑战 重拍](https://s.weibo.com//weibo?q=%E6%9E%81%E9%99%90%E6%8C%91%E6%88%98%20%E9%87%8D%E6%8B%8D&t=31&band_rank=2&Refer=top)
1. [这是真正凭本事吃饭的行业](https://s.weibo.com//weibo?q=%23%E8%BF%99%E6%98%AF%E7%9C%9F%E6%AD%A3%E5%87%AD%E6%9C%AC%E4%BA%8B%E5%90%83%E9%A5%AD%E7%9A%84%E8%A1%8C%E4%B8%9A%23&t=31&band_rank=5&Refer=top)
1. [张雪机车法国站排位赛包揽前二](https://s.weibo.com//weibo?q=%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%B3%95%E5%9B%BD%E7%AB%99%E6%8E%92%E4%BD%8D%E8%B5%9B%E5%8C%85%E6%8F%BD%E5%89%8D%E4%BA%8C&t=31&band_rank=6&Refer=top)
1. [披哥二公排名](https://s.weibo.com//weibo?q=%E6%8A%AB%E5%93%A5%E4%BA%8C%E5%85%AC%E6%8E%92%E5%90%8D&t=31&band_rank=7&Refer=top)
1. [莆田暴雨亲历者饿得受不了](https://s.weibo.com//weibo?q=%23%E8%8E%86%E7%94%B0%E6%9A%B4%E9%9B%A8%E4%BA%B2%E5%8E%86%E8%80%85%E9%A5%BF%E5%BE%97%E5%8F%97%E4%B8%8D%E4%BA%86%23&t=31&band_rank=8&Refer=top)
1. [花少2嘉宾干活表](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%912%E5%98%89%E5%AE%BE%E5%B9%B2%E6%B4%BB%E8%A1%A8%23&t=31&band_rank=9&Refer=top)
1. [萨巴伦卡晋级美网16强](https://s.weibo.com//weibo?q=%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%99%8B%E7%BA%A7%E7%BE%8E%E7%BD%9116%E5%BC%BA&t=31&band_rank=10&Refer=top)
1. [2岁男童把家中百草枯当饮料喝下](https://s.weibo.com//weibo?q=%232%E5%B2%81%E7%94%B7%E7%AB%A5%E6%8A%8A%E5%AE%B6%E4%B8%AD%E7%99%BE%E8%8D%89%E6%9E%AF%E5%BD%93%E9%A5%AE%E6%96%99%E5%96%9D%E4%B8%8B%23&t=31&band_rank=11&Refer=top)
1. [2015湖南台综艺有多神](https://s.weibo.com//weibo?q=2015%E6%B9%96%E5%8D%97%E5%8F%B0%E7%BB%BC%E8%89%BA%E6%9C%89%E5%A4%9A%E7%A5%9E&t=31&band_rank=12&Refer=top)
1. [寿司郎给孩子接小便的家长回应](https://s.weibo.com//weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E7%BB%99%E5%AD%A9%E5%AD%90%E6%8E%A5%E5%B0%8F%E4%BE%BF%E7%9A%84%E5%AE%B6%E9%95%BF%E5%9B%9E%E5%BA%94%23&t=31&band_rank=13&Refer=top)
1. [王楚钦退赛1000卫冕积分即将清零](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%80%80%E8%B5%9B1000%E5%8D%AB%E5%86%95%E7%A7%AF%E5%88%86%E5%8D%B3%E5%B0%86%E6%B8%85%E9%9B%B6%23&t=31&band_rank=14&Refer=top)
1. [28岁的人生应该是什么样呢](https://s.weibo.com//weibo?q=28%E5%B2%81%E7%9A%84%E4%BA%BA%E7%94%9F%E5%BA%94%E8%AF%A5%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E5%91%A2&t=31&band_rank=15&Refer=top)
1. [想找大结果先自己成为大结果](https://s.weibo.com//weibo?q=%E6%83%B3%E6%89%BE%E5%A4%A7%E7%BB%93%E6%9E%9C%E5%85%88%E8%87%AA%E5%B7%B1%E6%88%90%E4%B8%BA%E5%A4%A7%E7%BB%93%E6%9E%9C&t=31&band_rank=16&Refer=top)
1. [松岛辉空或将登顶世界第一](https://s.weibo.com//weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%88%96%E5%B0%86%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23&t=31&band_rank=17&Refer=top)
1. [郑钦文vs凯斯比赛时间](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87vs%E5%87%AF%E6%96%AF%E6%AF%94%E8%B5%9B%E6%97%B6%E9%97%B4&t=31&band_rank=18&Refer=top)
1. [美网第三轮](https://s.weibo.com//weibo?q=%E7%BE%8E%E7%BD%91%E7%AC%AC%E4%B8%89%E8%BD%AE&t=31&band_rank=19&Refer=top)
1. [上海到成都被订硬座还打卡女子拒出差](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%88%B0%E6%88%90%E9%83%BD%E8%A2%AB%E8%AE%A2%E7%A1%AC%E5%BA%A7%E8%BF%98%E6%89%93%E5%8D%A1%E5%A5%B3%E5%AD%90%E6%8B%92%E5%87%BA%E5%B7%AE%23&t=31&band_rank=20&Refer=top)
1. [出轨跟纸片人啥关系](https://s.weibo.com//weibo?q=%E5%87%BA%E8%BD%A8%E8%B7%9F%E7%BA%B8%E7%89%87%E4%BA%BA%E5%95%A5%E5%85%B3%E7%B3%BB&t=31&band_rank=22&Refer=top)
1. [贝蒂斯VS皇马](https://s.weibo.com//weibo?q=%E8%B4%9D%E8%92%82%E6%96%AFVS%E7%9A%87%E9%A9%AC&t=31&band_rank=23&Refer=top)
1. [路人根本没兴趣和耐心回看花少6](https://s.weibo.com//weibo?q=%23%E8%B7%AF%E4%BA%BA%E6%A0%B9%E6%9C%AC%E6%B2%A1%E5%85%B4%E8%B6%A3%E5%92%8C%E8%80%90%E5%BF%83%E5%9B%9E%E7%9C%8B%E8%8A%B1%E5%B0%916%23&t=31&band_rank=24&Refer=top)
1. [孙千听到今天星期五的反应](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%8D%83%E5%90%AC%E5%88%B0%E4%BB%8A%E5%A4%A9%E6%98%9F%E6%9C%9F%E4%BA%94%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=25&Refer=top)
1. [中国女篮vs美国女篮](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E7%BE%8E%E5%9B%BD%E5%A5%B3%E7%AF%AE&t=31&band_rank=26&Refer=top)
1. [张雪机车 WSBK法国站](https://s.weibo.com//weibo?q=%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%20WSBK%E6%B3%95%E5%9B%BD%E7%AB%99&t=31&band_rank=27&Refer=top)
1. [张雪机车回应排位赛包揽前2](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9E%E5%BA%94%E6%8E%92%E4%BD%8D%E8%B5%9B%E5%8C%85%E6%8F%BD%E5%89%8D2%23&t=31&band_rank=28&Refer=top)
1. [同花顺](https://s.weibo.com//weibo?q=%E5%90%8C%E8%8A%B1%E9%A1%BA&t=31&band_rank=29&Refer=top)
1. [莆田部分区域严重内涝停水停电](https://s.weibo.com//weibo?q=%23%E8%8E%86%E7%94%B0%E9%83%A8%E5%88%86%E5%8C%BA%E5%9F%9F%E4%B8%A5%E9%87%8D%E5%86%85%E6%B6%9D%E5%81%9C%E6%B0%B4%E5%81%9C%E7%94%B5%23&t=31&band_rank=30&Refer=top)
1. [俄罗斯建粉碎大日本帝国纪念碑](https://s.weibo.com//weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%BB%BA%E7%B2%89%E7%A2%8E%E5%A4%A7%E6%97%A5%E6%9C%AC%E5%B8%9D%E5%9B%BD%E7%BA%AA%E5%BF%B5%E7%A2%91%23&t=31&band_rank=31&Refer=top)
1. [配型非亲生女儿称报警基因检测全没用](https://s.weibo.com//weibo?q=%23%E9%85%8D%E5%9E%8B%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%E7%A7%B0%E6%8A%A5%E8%AD%A6%E5%9F%BA%E5%9B%A0%E6%A3%80%E6%B5%8B%E5%85%A8%E6%B2%A1%E7%94%A8%23&t=31&band_rank=32&Refer=top)
1. [原来高定是直接把人请到总部量身定制](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%AB%98%E5%AE%9A%E6%98%AF%E7%9B%B4%E6%8E%A5%E6%8A%8A%E4%BA%BA%E8%AF%B7%E5%88%B0%E6%80%BB%E9%83%A8%E9%87%8F%E8%BA%AB%E5%AE%9A%E5%88%B6%23&t=31&band_rank=33&Refer=top)
1. [印度2只流浪狗吓退性侵者](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A62%E5%8F%AA%E6%B5%81%E6%B5%AA%E7%8B%97%E5%90%93%E9%80%80%E6%80%A7%E4%BE%B5%E8%80%85%23&t=31&band_rank=34&Refer=top)
1. [要你管 难听](https://s.weibo.com//weibo?q=%E8%A6%81%E4%BD%A0%E7%AE%A1%20%E9%9A%BE%E5%90%AC&t=31&band_rank=35&Refer=top)
1. [张雪机车排位赛包揽前二](https://s.weibo.com//weibo?q=%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8E%92%E4%BD%8D%E8%B5%9B%E5%8C%85%E6%8F%BD%E5%89%8D%E4%BA%8C&t=31&band_rank=36&Refer=top)
1. [中国女篮 到底练什么了](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%20%E5%88%B0%E5%BA%95%E7%BB%83%E4%BB%80%E4%B9%88%E4%BA%86&t=31&band_rank=37&Refer=top)
1. [曹骏回应难听](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%9B%9E%E5%BA%94%E9%9A%BE%E5%90%AC%23&t=31&band_rank=38&Refer=top)
1. [韩国学校挂明星不挂科学家](https://s.weibo.com//weibo?q=%E9%9F%A9%E5%9B%BD%E5%AD%A6%E6%A0%A1%E6%8C%82%E6%98%8E%E6%98%9F%E4%B8%8D%E6%8C%82%E7%A7%91%E5%AD%A6%E5%AE%B6&t=31&band_rank=39&Refer=top)
1. [妈妈震惊女儿发箍标价1490元](https://s.weibo.com//weibo?q=%23%E5%A6%88%E5%A6%88%E9%9C%87%E6%83%8A%E5%A5%B3%E5%84%BF%E5%8F%91%E7%AE%8D%E6%A0%87%E4%BB%B71490%E5%85%83%23&t=31&band_rank=40&Refer=top)
1. [教育部回应教师不敢管学生](https://s.weibo.com//weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%95%99%E5%B8%88%E4%B8%8D%E6%95%A2%E7%AE%A1%E5%AD%A6%E7%94%9F%23&t=31&band_rank=41&Refer=top)
1. [多方回应18岁女孩疑被已婚男友打死](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%9418%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%96%91%E8%A2%AB%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%8F%8B%E6%89%93%E6%AD%BB%23&t=31&band_rank=42&Refer=top)
1. [中国女篮不敌美国女篮](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E4%B8%8D%E6%95%8C%E7%BE%8E%E5%9B%BD%E5%A5%B3%E7%AF%AE&t=31&band_rank=43&Refer=top)
1. [TES iG首发名单](https://s.weibo.com//weibo?q=TES%20iG%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95&t=31&band_rank=44&Refer=top)
1. [黄晓明明天爱心基金感谢梓渝](https://s.weibo.com//weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E6%98%8E%E5%A4%A9%E7%88%B1%E5%BF%83%E5%9F%BA%E9%87%91%E6%84%9F%E8%B0%A2%E6%A2%93%E6%B8%9D%23&t=31&band_rank=45&Refer=top)
1. [花少8开局就是地狱难度](https://s.weibo.com//weibo?q=%E8%8A%B1%E5%B0%918%E5%BC%80%E5%B1%80%E5%B0%B1%E6%98%AF%E5%9C%B0%E7%8B%B1%E9%9A%BE%E5%BA%A6&t=31&band_rank=46&Refer=top)
1. [德比斯摔车后夺杆位](https://s.weibo.com//weibo?q=%E5%BE%B7%E6%AF%94%E6%96%AF%E6%91%94%E8%BD%A6%E5%90%8E%E5%A4%BA%E6%9D%86%E4%BD%8D&t=31&band_rank=47&Refer=top)
1. [陈若轩淘汰待定](https://s.weibo.com//weibo?q=%E9%99%88%E8%8B%A5%E8%BD%A9%E6%B7%98%E6%B1%B0%E5%BE%85%E5%AE%9A&t=31&band_rank=48&Refer=top)
1. [Pro Max命名被吐槽泛滥](https://s.weibo.com//weibo?q=Pro%20Max%E5%91%BD%E5%90%8D%E8%A2%AB%E5%90%90%E6%A7%BD%E6%B3%9B%E6%BB%A5&t=31&band_rank=49&Refer=top)
1. [吉隆泥石流遇难31人失联531人](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE31%E4%BA%BA%E5%A4%B1%E8%81%94531%E4%BA%BA%23&t=31&band_rank=50&Refer=top)
1. [把青春华章写在祖国大地上](https://s.weibo.com//weibo?q=%E6%8A%8A%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%E5%86%99%E5%9C%A8%E7%A5%96%E5%9B%BD%E5%A4%A7%E5%9C%B0%E4%B8%8A&t=31&band_rank=3&Refer=top)
1. [花少2嘉宾干活表](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%912%E5%98%89%E5%AE%BE%E5%B9%B2%E6%B4%BB%E8%A1%A8%23&t=31&band_rank=4&Refer=top)
1. [披哥二公排名](https://s.weibo.com//weibo?q=%E6%8A%AB%E5%93%A5%E4%BA%8C%E5%85%AC%E6%8E%92%E5%90%8D&t=31&band_rank=5&Refer=top)
1. [日本请求俄拆纪念碑菊花纹章遭拒](https://s.weibo.com//weibo?q=%E6%97%A5%E6%9C%AC%E8%AF%B7%E6%B1%82%E4%BF%84%E6%8B%86%E7%BA%AA%E5%BF%B5%E7%A2%91%E8%8F%8A%E8%8A%B1%E7%BA%B9%E7%AB%A0%E9%81%AD%E6%8B%92&t=31&band_rank=6&Refer=top)
1. [张雪机车法国站排位赛包揽前二](https://s.weibo.com//weibo?q=%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%B3%95%E5%9B%BD%E7%AB%99%E6%8E%92%E4%BD%8D%E8%B5%9B%E5%8C%85%E6%8F%BD%E5%89%8D%E4%BA%8C&t=31&band_rank=7&Refer=top)
1. [要你管 难听](https://s.weibo.com//weibo?q=%E8%A6%81%E4%BD%A0%E7%AE%A1%20%E9%9A%BE%E5%90%AC&t=31&band_rank=8&Refer=top)
1. [王楚钦退赛1000卫冕积分即将清零](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%80%80%E8%B5%9B1000%E5%8D%AB%E5%86%95%E7%A7%AF%E5%88%86%E5%8D%B3%E5%B0%86%E6%B8%85%E9%9B%B6%23&t=31&band_rank=9&Refer=top)
1. [莆田暴雨亲历者饿得受不了](https://s.weibo.com//weibo?q=%23%E8%8E%86%E7%94%B0%E6%9A%B4%E9%9B%A8%E4%BA%B2%E5%8E%86%E8%80%85%E9%A5%BF%E5%BE%97%E5%8F%97%E4%B8%8D%E4%BA%86%23&t=31&band_rank=10&Refer=top)
1. [松岛辉空或将登顶世界第一](https://s.weibo.com//weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%88%96%E5%B0%86%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23&t=31&band_rank=13&Refer=top)
1. [路人根本没兴趣和耐心回看花少6](https://s.weibo.com//weibo?q=%23%E8%B7%AF%E4%BA%BA%E6%A0%B9%E6%9C%AC%E6%B2%A1%E5%85%B4%E8%B6%A3%E5%92%8C%E8%80%90%E5%BF%83%E5%9B%9E%E7%9C%8B%E8%8A%B1%E5%B0%916%23&t=31&band_rank=14&Refer=top)
1. [Pro Max命名被吐槽泛滥](https://s.weibo.com//weibo?q=Pro%20Max%E5%91%BD%E5%90%8D%E8%A2%AB%E5%90%90%E6%A7%BD%E6%B3%9B%E6%BB%A5&t=31&band_rank=16&Refer=top)
1. [花少8开局就是地狱难度](https://s.weibo.com//weibo?q=%E8%8A%B1%E5%B0%918%E5%BC%80%E5%B1%80%E5%B0%B1%E6%98%AF%E5%9C%B0%E7%8B%B1%E9%9A%BE%E5%BA%A6&t=31&band_rank=17&Refer=top)
1. [TES iG首发名单](https://s.weibo.com//weibo?q=TES%20iG%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95&t=31&band_rank=19&Refer=top)
1. [孙千听到今天星期五的反应](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%8D%83%E5%90%AC%E5%88%B0%E4%BB%8A%E5%A4%A9%E6%98%9F%E6%9C%9F%E4%BA%94%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=20&Refer=top)
1. [出轨跟纸片人啥关系](https://s.weibo.com//weibo?q=%E5%87%BA%E8%BD%A8%E8%B7%9F%E7%BA%B8%E7%89%87%E4%BA%BA%E5%95%A5%E5%85%B3%E7%B3%BB&t=31&band_rank=21&Refer=top)
1. [将40岁的身体恢复到25岁的方法](https://s.weibo.com//weibo?q=%E5%B0%8640%E5%B2%81%E7%9A%84%E8%BA%AB%E4%BD%93%E6%81%A2%E5%A4%8D%E5%88%B025%E5%B2%81%E7%9A%84%E6%96%B9%E6%B3%95&t=31&band_rank=22&Refer=top)
1. [这是真正凭本事吃饭的行业](https://s.weibo.com//weibo?q=%23%E8%BF%99%E6%98%AF%E7%9C%9F%E6%AD%A3%E5%87%AD%E6%9C%AC%E4%BA%8B%E5%90%83%E9%A5%AD%E7%9A%84%E8%A1%8C%E4%B8%9A%23&t=31&band_rank=23&Refer=top)
1. [妈妈震惊女儿发箍标价1490元](https://s.weibo.com//weibo?q=%23%E5%A6%88%E5%A6%88%E9%9C%87%E6%83%8A%E5%A5%B3%E5%84%BF%E5%8F%91%E7%AE%8D%E6%A0%87%E4%BB%B71490%E5%85%83%23&t=31&band_rank=24&Refer=top)
1. [曹骏回应难听](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%9B%9E%E5%BA%94%E9%9A%BE%E5%90%AC%23&t=31&band_rank=25&Refer=top)
1. [陈若轩淘汰待定](https://s.weibo.com//weibo?q=%E9%99%88%E8%8B%A5%E8%BD%A9%E6%B7%98%E6%B1%B0%E5%BE%85%E5%AE%9A&t=31&band_rank=26&Refer=top)
1. [本西蒙斯重返NBA](https://s.weibo.com//weibo?q=%23%E6%9C%AC%E8%A5%BF%E8%92%99%E6%96%AF%E9%87%8D%E8%BF%94NBA%23&t=31&band_rank=27&Refer=top)
1. [想找大结果先自己成为大结果](https://s.weibo.com//weibo?q=%E6%83%B3%E6%89%BE%E5%A4%A7%E7%BB%93%E6%9E%9C%E5%85%88%E8%87%AA%E5%B7%B1%E6%88%90%E4%B8%BA%E5%A4%A7%E7%BB%93%E6%9E%9C&t=31&band_rank=28&Refer=top)
1. [尼泊尔900人被困在6个隧道内](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94900%E4%BA%BA%E8%A2%AB%E5%9B%B0%E5%9C%A86%E4%B8%AA%E9%9A%A7%E9%81%93%E5%86%85%23&t=31&band_rank=29&Refer=top)
1. [吉隆泥石流遇难31人失联531人](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE31%E4%BA%BA%E5%A4%B1%E8%81%94531%E4%BA%BA%23&t=31&band_rank=30&Refer=top)
1. [韩国学校挂明星不挂科学家](https://s.weibo.com//weibo?q=%E9%9F%A9%E5%9B%BD%E5%AD%A6%E6%A0%A1%E6%8C%82%E6%98%8E%E6%98%9F%E4%B8%8D%E6%8C%82%E7%A7%91%E5%AD%A6%E5%AE%B6&t=31&band_rank=31&Refer=top)
1. [印度2只流浪狗吓退性侵者](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A62%E5%8F%AA%E6%B5%81%E6%B5%AA%E7%8B%97%E5%90%93%E9%80%80%E6%80%A7%E4%BE%B5%E8%80%85%23&t=31&band_rank=33&Refer=top)
1. [狼队第20次晋级决赛](https://s.weibo.com//weibo?q=%23%E7%8B%BC%E9%98%9F%E7%AC%AC20%E6%AC%A1%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23&t=31&band_rank=34&Refer=top)
1. [俄罗斯建粉碎大日本帝国纪念碑](https://s.weibo.com//weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%BB%BA%E7%B2%89%E7%A2%8E%E5%A4%A7%E6%97%A5%E6%9C%AC%E5%B8%9D%E5%9B%BD%E7%BA%AA%E5%BF%B5%E7%A2%91%23&t=31&band_rank=35&Refer=top)
1. [同花顺](https://s.weibo.com//weibo?q=%E5%90%8C%E8%8A%B1%E9%A1%BA&t=31&band_rank=36&Refer=top)
1. [杨博文助眠vlog](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%8A%A9%E7%9C%A0vlog%23&t=31&band_rank=37&Refer=top)
1. [王赫野跳舞像赵四](https://s.weibo.com//weibo?q=%E7%8E%8B%E8%B5%AB%E9%87%8E%E8%B7%B3%E8%88%9E%E5%83%8F%E8%B5%B5%E5%9B%9B&t=31&band_rank=38&Refer=top)
1. [教育部回应教师不敢管学生](https://s.weibo.com//weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%95%99%E5%B8%88%E4%B8%8D%E6%95%A2%E7%AE%A1%E5%AD%A6%E7%94%9F%23&t=31&band_rank=39&Refer=top)
1. [有人想靠复盘花少6洗白](https://s.weibo.com//weibo?q=%E6%9C%89%E4%BA%BA%E6%83%B3%E9%9D%A0%E5%A4%8D%E7%9B%98%E8%8A%B1%E5%B0%916%E6%B4%97%E7%99%BD&t=31&band_rank=40&Refer=top)
1. [栾念盯着前男友照顾尚之桃](https://s.weibo.com//weibo?q=%23%E6%A0%BE%E5%BF%B5%E7%9B%AF%E7%9D%80%E5%89%8D%E7%94%B7%E5%8F%8B%E7%85%A7%E9%A1%BE%E5%B0%9A%E4%B9%8B%E6%A1%83%23&t=31&band_rank=41&Refer=top)
1. [美网第三轮](https://s.weibo.com//weibo?q=%E7%BE%8E%E7%BD%91%E7%AC%AC%E4%B8%89%E8%BD%AE&t=31&band_rank=42&Refer=top)
1. [郑昌盛文文恋人关系认定参考测谎仪](https://s.weibo.com//weibo?q=%23%E9%83%91%E6%98%8C%E7%9B%9B%E6%96%87%E6%96%87%E6%81%8B%E4%BA%BA%E5%85%B3%E7%B3%BB%E8%AE%A4%E5%AE%9A%E5%8F%82%E8%80%83%E6%B5%8B%E8%B0%8E%E4%BB%AA%23&t=31&band_rank=43&Refer=top)
1. [邓为花少8情商](https://s.weibo.com//weibo?q=%23%E9%82%93%E4%B8%BA%E8%8A%B1%E5%B0%918%E6%83%85%E5%95%86%23&t=31&band_rank=44&Refer=top)
1. [重庆33岁抗癌博主唐豆豆不幸离世](https://s.weibo.com//weibo?q=%23%E9%87%8D%E5%BA%8633%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E5%94%90%E8%B1%86%E8%B1%86%E4%B8%8D%E5%B9%B8%E7%A6%BB%E4%B8%96%23&t=31&band_rank=46&Refer=top)
1. [沈梦辰在衣服上打了个死结](https://s.weibo.com//weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%9C%A8%E8%A1%A3%E6%9C%8D%E4%B8%8A%E6%89%93%E4%BA%86%E4%B8%AA%E6%AD%BB%E7%BB%93%23&t=31&band_rank=47&Refer=top)
1. [张雪机车回应排位赛包揽前2](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9E%E5%BA%94%E6%8E%92%E4%BD%8D%E8%B5%9B%E5%8C%85%E6%8F%BD%E5%89%8D2%23&t=31&band_rank=48&Refer=top)
1. [德比斯摔车后夺杆位](https://s.weibo.com//weibo?q=%E5%BE%B7%E6%AF%94%E6%96%AF%E6%91%94%E8%BD%A6%E5%90%8E%E5%A4%BA%E6%9D%86%E4%BD%8D&t=31&band_rank=49&Refer=top)
1. [曹骏让节目组把训练镜头放出来](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E9%AA%8F%E8%AE%A9%E8%8A%82%E7%9B%AE%E7%BB%84%E6%8A%8A%E8%AE%AD%E7%BB%83%E9%95%9C%E5%A4%B4%E6%94%BE%E5%87%BA%E6%9D%A5%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
