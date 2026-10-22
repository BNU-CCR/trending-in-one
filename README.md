# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-22 12:50:15

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
<!-- 最后更新时间 Thu Oct 22 2026 09:46:35 GMT+0800 (China Standard Time) -->

1. [中国限制盾构机出口对印度影响有多大](https://so.toutiao.com/search?keyword=中国限制盾构机出口对印度影响有多大)
1. [普京称首艘油轮将向美国运4万吨柴油](https://so.toutiao.com/search?keyword=普京称首艘油轮将向美国运4万吨柴油)
1. [中国经济发展绿色化底色愈加鲜明](https://so.toutiao.com/search?keyword=中国经济发展绿色化底色愈加鲜明)
1. [中国体操女团时隔20年世锦赛夺冠](https://so.toutiao.com/search?keyword=中国体操女团时隔20年世锦赛夺冠)
1. [“小天才”就不能安安心心做块表吗](https://so.toutiao.com/search?keyword=“小天才”就不能安安心心做块表吗)
1. [《小城良方》开播口碑](https://so.toutiao.com/search?keyword=《小城良方》开播口碑)
1. [法国总统：坚决杜绝骚乱重演](https://so.toutiao.com/search?keyword=法国总统：坚决杜绝骚乱重演)
1. [泽连斯基：愿保留75%领土以达和平](https://so.toutiao.com/search?keyword=泽连斯基：愿保留75%领土以达和平)
1. [传国玉玺究竟去哪了](https://so.toutiao.com/search?keyword=传国玉玺究竟去哪了)
1. [日本79岁女护理员上18小时夜班](https://so.toutiao.com/search?keyword=日本79岁女护理员上18小时夜班)
1. [打疫苗会破坏自身免疫系统？假的](https://so.toutiao.com/search?keyword=打疫苗会破坏自身免疫系统？假的)
1. [骗子冒充儿子朋友上门取走5万](https://so.toutiao.com/search?keyword=骗子冒充儿子朋友上门取走5万)
1. [于东来：已拿出2000万投资爱情研究](https://so.toutiao.com/search?keyword=于东来：已拿出2000万投资爱情研究)
1. [伊朗最高领袖会见议会议长卡利巴夫](https://so.toutiao.com/search?keyword=伊朗最高领袖会见议会议长卡利巴夫)
1. [人民日报评特斯拉能飞：不必妄自菲薄](https://so.toutiao.com/search?keyword=人民日报评特斯拉能飞：不必妄自菲薄)
1. [台风蔷琵周末将给江浙沪台带去风雨](https://so.toutiao.com/search?keyword=台风蔷琵周末将给江浙沪台带去风雨)
1. [广东台山通报“住宅疑存放骨灰”](https://so.toutiao.com/search?keyword=广东台山通报“住宅疑存放骨灰”)
1. [女子称被自家12斤猫踹进手术室](https://so.toutiao.com/search?keyword=女子称被自家12斤猫踹进手术室)
1. [第一批用AI裁员的老板后悔了](https://so.toutiao.com/search?keyword=第一批用AI裁员的老板后悔了)
1. [西安阿达西称现在没有利润还贴钱](https://so.toutiao.com/search?keyword=西安阿达西称现在没有利润还贴钱)
1. [张雪发现餐后水果没人吃要求更换](https://so.toutiao.com/search?keyword=张雪发现餐后水果没人吃要求更换)
1. [意政府增派军人并批准法令以应对骚乱](https://so.toutiao.com/search?keyword=意政府增派军人并批准法令以应对骚乱)
1. [李庚希手持艾灸锤走上红毯](https://so.toutiao.com/search?keyword=李庚希手持艾灸锤走上红毯)
1. [12306回应Z114次列车开售即售罄](https://so.toutiao.com/search?keyword=12306回应Z114次列车开售即售罄)
1. [有长寿潜质的人身体大多有这5个表现](https://so.toutiao.com/search?keyword=有长寿潜质的人身体大多有这5个表现)
1. [腾讯姚顺雨想把DeepSeek卷到加班](https://so.toutiao.com/search?keyword=腾讯姚顺雨想把DeepSeek卷到加班)
1. [迪奥曼德欧冠替补传射建功](https://so.toutiao.com/search?keyword=迪奥曼德欧冠替补传射建功)
1. [宁德时代“躺赚”日子结束了吗](https://so.toutiao.com/search?keyword=宁德时代“躺赚”日子结束了吗)
1. [李胜峰：大陆做好迎接任何挑战的准备](https://so.toutiao.com/search?keyword=李胜峰：大陆做好迎接任何挑战的准备)
1. [邱彪：被动情况下大家没泄气我很欣慰](https://so.toutiao.com/search?keyword=邱彪：被动情况下大家没泄气我很欣慰)
1. [张凌赫赴台被拒他们到底在怕什么](https://so.toutiao.com/search?keyword=张凌赫赴台被拒他们到底在怕什么)
1. [外媒：深圳为筹备APEC全方位焕新](https://so.toutiao.com/search?keyword=外媒：深圳为筹备APEC全方位焕新)
1. [博主谈超强厄尔尼诺：狼来了的故事](https://so.toutiao.com/search?keyword=博主谈超强厄尔尼诺：狼来了的故事)
1. [媒体：中蒙边境火灾日企应向中国道歉](https://so.toutiao.com/search?keyword=媒体：中蒙边境火灾日企应向中国道歉)
1. [遛狗时家中男童坠亡案父亲发声](https://so.toutiao.com/search?keyword=遛狗时家中男童坠亡案父亲发声)
1. [苹果官网iPhone Duo每人限购2台](https://so.toutiao.com/search?keyword=苹果官网iPhone%20Duo每人限购2台)
1. [皇马4-1大胜莱比锡](https://so.toutiao.com/search?keyword=皇马4-1大胜莱比锡)
1. [“神探”李昌钰将安葬于扬州](https://so.toutiao.com/search?keyword=“神探”李昌钰将安葬于扬州)
1. [博主：中国商业航天打开新局面](https://so.toutiao.com/search?keyword=博主：中国商业航天打开新局面)
1. [00后男生手搓“飞行滑板”爆火](https://so.toutiao.com/search?keyword=00后男生手搓“飞行滑板”爆火)
1. [媒体：城市温度不能光靠商家善意](https://so.toutiao.com/search?keyword=媒体：城市温度不能光靠商家善意)
1. [博主：美元信誉恐遭重创](https://so.toutiao.com/search?keyword=博主：美元信誉恐遭重创)
1. [台当局不升级法国旅游警示惹怒民众](https://so.toutiao.com/search?keyword=台当局不升级法国旅游警示惹怒民众)
1. [李扬：要大力发展资本市场](https://so.toutiao.com/search?keyword=李扬：要大力发展资本市场)
1. [沙特胡塞停火死循环如何破局](https://so.toutiao.com/search?keyword=沙特胡塞停火死循环如何破局)
1. [曼联“内讧”为哪般](https://so.toutiao.com/search?keyword=曼联“内讧”为哪般)
1. [俄军继续打击乌物流中心及港口设施](https://so.toutiao.com/search?keyword=俄军继续打击乌物流中心及港口设施)
1. [红军凭意志穿越草地绝境](https://so.toutiao.com/search?keyword=红军凭意志穿越草地绝境)
1. [“美股七姐妹”有哪些数据值得关注](https://so.toutiao.com/search?keyword=“美股七姐妹”有哪些数据值得关注)
1. [俄称将对日美联合军演采取回应措施](https://so.toutiao.com/search?keyword=俄称将对日美联合军演采取回应措施)
1. [唐驳虎：中国老板已准备放弃越南了](https://so.toutiao.com/search?keyword=唐驳虎：中国老板已准备放弃越南了)
1. [人类历史上最大的投资泡沫或正在破裂](https://so.toutiao.com/search?keyword=人类历史上最大的投资泡沫或正在破裂)
1. [事关公积金贷款宁波辟谣](https://so.toutiao.com/search?keyword=事关公积金贷款宁波辟谣)
1. [经中方允许菲向非法坐滩船运生活物资](https://so.toutiao.com/search?keyword=经中方允许菲向非法坐滩船运生活物资)
1. [国家癌症中心公布发病前五癌症](https://so.toutiao.com/search?keyword=国家癌症中心公布发病前五癌症)
1. [邵永灵：中美军机台海再交锋](https://so.toutiao.com/search?keyword=邵永灵：中美军机台海再交锋)
1. [郑钦文局间吃香蕉出圈 医生解读](https://so.toutiao.com/search?keyword=郑钦文局间吃香蕉出圈%20医生解读)
1. [维密也开始“纯过日子”了吗](https://so.toutiao.com/search?keyword=维密也开始“纯过日子”了吗)
1. [美舰冲闯仙宾礁是要为菲律宾撑腰吗](https://so.toutiao.com/search?keyword=美舰冲闯仙宾礁是要为菲律宾撑腰吗)
1. [日本稀土钇库存将耗尽？中方回应](https://so.toutiao.com/search?keyword=日本稀土钇库存将耗尽？中方回应)
1. [解放军“围观”美日演习？学者解读](https://so.toutiao.com/search?keyword=解放军“围观”美日演习？学者解读)
1. [华尔街大佬：AI确定已是大泡沫](https://so.toutiao.com/search?keyword=华尔街大佬：AI确定已是大泡沫)
1. [手机市场为何突然入冬了](https://so.toutiao.com/search?keyword=手机市场为何突然入冬了)
1. [胡塞武装凭什么成中东“双头鹰”](https://so.toutiao.com/search?keyword=胡塞武装凭什么成中东“双头鹰”)
1. [外媒：普京决定释放美国公民哈伯德](https://so.toutiao.com/search?keyword=外媒：普京决定释放美国公民哈伯德)
1. [媒体：董明珠办技校先别急着叫好](https://so.toutiao.com/search?keyword=媒体：董明珠办技校先别急着叫好)
1. [是否愿将乌纳入中俄美会晤？中方回应](https://so.toutiao.com/search?keyword=是否愿将乌纳入中俄美会晤？中方回应)
1. [高油价引发抗议马克龙赴中东“买油”](https://so.toutiao.com/search?keyword=高油价引发抗议马克龙赴中东“买油”)
1. [宝马员工为何争着被裁](https://so.toutiao.com/search?keyword=宝马员工为何争着被裁)
1. [官方通报女子错过检票哀求工作人员](https://so.toutiao.com/search?keyword=官方通报女子错过检票哀求工作人员)
1. [比亚迪L3级自动驾驶有望2028年落地](https://so.toutiao.com/search?keyword=比亚迪L3级自动驾驶有望2028年落地)
1. [美为何要求欧洲恢复购买俄石油天然气](https://so.toutiao.com/search?keyword=美为何要求欧洲恢复购买俄石油天然气)
1. [周涛称知止比知行更重要](https://so.toutiao.com/search?keyword=周涛称知止比知行更重要)
1. [雷军：汽车产业若没有安全其他都是0](https://so.toutiao.com/search?keyword=雷军：汽车产业若没有安全其他都是0)
1. [俄军目前在战区有90万名军人](https://so.toutiao.com/search?keyword=俄军目前在战区有90万名军人)
1. [周鸿祎谈美国“封杀”DeepSeek](https://so.toutiao.com/search?keyword=周鸿祎谈美国“封杀”DeepSeek)
1. [国乒男团亚锦赛3-0战胜伊朗男团](https://so.toutiao.com/search?keyword=国乒男团亚锦赛3-0战胜伊朗男团)
1. [俄愿在下月恢复俄美乌三方谈判](https://so.toutiao.com/search?keyword=俄愿在下月恢复俄美乌三方谈判)
1. [A股又一次冲高回落究竟谁在砸盘](https://so.toutiao.com/search?keyword=A股又一次冲高回落究竟谁在砸盘)
1. [外交部：敦促美方立即停止对古巴封锁](https://so.toutiao.com/search?keyword=外交部：敦促美方立即停止对古巴封锁)
1. [美俄大国博弈之下乌克兰出路何在](https://so.toutiao.com/search?keyword=美俄大国博弈之下乌克兰出路何在)
1. [杨幂亮相时尚芭莎年度盛典](https://so.toutiao.com/search?keyword=杨幂亮相时尚芭莎年度盛典)
1. [问界辟谣网传电池爆燃智驾撞击](https://so.toutiao.com/search?keyword=问界辟谣网传电池爆燃智驾撞击)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Oct 22 2026 12:35:45 GMT+0800 (China Standard Time) -->

1. [英伟达市值9天蒸发4万亿](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC9%E5%A4%A9%E8%92%B8%E5%8F%914%E4%B8%87%E4%BA%BF)
1. [警方称问界汽车事故司机已遇难](https://www.zhihu.com/search?q=%E8%AD%A6%E6%96%B9%E7%A7%B0%E9%97%AE%E7%95%8C%E6%B1%BD%E8%BD%A6%E4%BA%8B%E6%95%85%E5%8F%B8%E6%9C%BA%E5%B7%B2%E9%81%87%E9%9A%BE)
1. [宝马员工争着离职挤崩系统](https://www.zhihu.com/search?q=%E5%AE%9D%E9%A9%AC%E5%91%98%E5%B7%A5%E4%BA%89%E7%9D%80%E7%A6%BB%E8%81%8C%E6%8C%A4%E5%B4%A9%E7%B3%BB%E7%BB%9F)
1. [内娱进入大怀孕时代](https://www.zhihu.com/search?q=%E5%86%85%E5%A8%B1%E8%BF%9B%E5%85%A5%E5%A4%A7%E6%80%80%E5%AD%95%E6%97%B6%E4%BB%A3)
1. [泽连斯基称保留75%领土可达成和平协议](https://www.zhihu.com/search?q=%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E4%BF%9D%E7%95%9975%25%E9%A2%86%E5%9C%9F%E5%8F%AF%E8%BE%BE%E6%88%90%E5%92%8C%E5%B9%B3%E5%8D%8F%E8%AE%AE)
1. [医保个人账户跨省共济落地全国](https://www.zhihu.com/search?q=%E5%8C%BB%E4%BF%9D%E4%B8%AA%E4%BA%BA%E8%B4%A6%E6%88%B7%E8%B7%A8%E7%9C%81%E5%85%B1%E6%B5%8E%E8%90%BD%E5%9C%B0%E5%85%A8%E5%9B%BD)
1. [法国发生近年来最严重暴力骚乱](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E5%8F%91%E7%94%9F%E8%BF%91%E5%B9%B4%E6%9D%A5%E6%9C%80%E4%B8%A5%E9%87%8D%E6%9A%B4%E5%8A%9B%E9%AA%9A%E4%B9%B1)
1. [女子情绪失控砸毁30万五粮液](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%E7%A0%B8%E6%AF%8130%E4%B8%87%E4%BA%94%E7%B2%AE%E6%B6%B2)
1. [红果短剧把观众时间换成钱](https://www.zhihu.com/search?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E6%8A%8A%E8%A7%82%E4%BC%97%E6%97%B6%E9%97%B4%E6%8D%A2%E6%88%90%E9%92%B1)
1. [中国体操女队时隔20年夺金](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E9%98%9F%E6%97%B6%E9%9A%9420%E5%B9%B4%E5%A4%BA%E9%87%91)
1. [网传国内MC相关下载被封禁](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E5%9B%BD%E5%86%85MC%E7%9B%B8%E5%85%B3%E4%B8%8B%E8%BD%BD%E8%A2%AB%E5%B0%81%E7%A6%81)
1. [马斯克称未来钱将毫无意义](https://www.zhihu.com/search?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E6%9C%AA%E6%9D%A5%E9%92%B1%E5%B0%86%E6%AF%AB%E6%97%A0%E6%84%8F%E4%B9%89)
1. [DeepSeek单集群日吞吐155万亿](https://www.zhihu.com/search?q=DeepSeek%E5%8D%95%E9%9B%86%E7%BE%A4%E6%97%A5%E5%90%9E%E5%90%90155%E4%B8%87%E4%BA%BF)
1. [DeepSeek新模型名登顶最差榜](https://www.zhihu.com/search?q=DeepSeek%E6%96%B0%E6%A8%A1%E5%9E%8B%E5%90%8D%E7%99%BB%E9%A1%B6%E6%9C%80%E5%B7%AE%E6%A6%9C)
1. [网红王扁遭前经纪人锤击](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E7%8E%8B%E6%89%81%E9%81%AD%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E9%94%A4%E5%87%BB)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Oct 22 2026 12:50:15 GMT+0800 (China Standard Time) -->

1. [张雪公开求助如何让食堂的米饭好吃，不少人送米上门，张雪称不是米的问题，食堂做米饭有哪些技术难点？](https://www.zhihu.com/question/2096179248318911500)
1. [已知西瓜瓤在西瓜被切开后是红色的，那切开之前是什么颜色的？](https://www.zhihu.com/question/62083107)
1. [红果短剧宣布将下线金币功能，这一商业决策背后有哪些考虑？是不需要靠「薅羊毛」引流实现增长了吗？](https://www.zhihu.com/question/2096299255153391600)
1. [如何评价BioWare于10月22日宣布关闭，为何一个诞生过博德之门等游戏的公司最终走向如此下场？](https://www.zhihu.com/question/2096410582849163500)
1. [古代穷人为什么不搬到海边去？海边鱼多不是饿不死吗？](https://www.zhihu.com/question/2095863857705239800)
1. [车灯新国标公布后，「外显大屏」形态的像素灯将成为历史，汽车大灯的技术发展方向将如何调整？](https://www.zhihu.com/question/2095889644000733200)
1. [南京警方回应「留学生在俄身披旭日旗」，称已有专门的部门在处理，哪些信息值得关注？](https://www.zhihu.com/question/2096367479593199600)
1. [腾讯股价跌破 400 港元创新低，市值较高点缩水近四成，问题出在哪？市场对腾讯的估值逻辑发生哪些转变？](https://www.zhihu.com/question/2096284238119228700)
1. [多款 3A 老游戏被 AI 光速反编译并移植网页端，将对游戏行业带来哪些冲击？](https://www.zhihu.com/question/2094620721343481600)
1. [你听过哪些「被逼到没有退路，最后自己硬是走出一条路」的故事？](https://www.zhihu.com/question/2091827536925873000)
1. [医生说现在的鸡都是快速养殖，激素多，吃了对孩子身体不好，是这样吗？](https://www.zhihu.com/question/694420968)
1. [网友称黄豆吃多在列车连放128个闷屁，疑多位同车厢乘客称被臭到怀疑人生，黄豆吃多「危害」真有这么大吗？](https://www.zhihu.com/question/2096324424190228000)
1. [国家癌症中心发布数据，甲状腺癌跃居发病第 3 位，20～39 岁男女发病率最高，为什么会这样？](https://www.zhihu.com/question/2096183185604399900)
1. [泽连斯基表示，乌克兰愿在保留至少75%领土控制权的基础上达成和平协议，你怎么看？](https://www.zhihu.com/question/2096328160241633000)
1. [辛芷蕾凭《日掛中天》获威尼斯影后却未入围金鸡奖，如何看待这一结果？](https://www.zhihu.com/question/2095497362407960600)
1. [遇到碰撞起火事故，车企宣传的AEB，真的能救命吗？](https://www.zhihu.com/question/2096295258988474400)
1. [中国体操女队时隔 20 年再夺世锦赛女团金牌，如何评价姑娘们的发挥？](https://www.zhihu.com/question/2096473940185162200)
1. [吴艳妮面对采访说自己训练强度能达到12秒7、12秒6的程度，但是比赛就是达不到，你怎么看？](https://www.zhihu.com/question/2095964207070105900)
1. [如何评价《offer8》医学季定档后引发医学生集体吐槽？真实的医学生规培现状与节目呈现差别有多大？](https://www.zhihu.com/question/2096268242515751700)
1. [国家癌症中心公布发病前五癌症，较二十年前发生变动，胃癌食管癌跌出前五，背后有哪些原因？反映了什么趋势？](https://www.zhihu.com/question/2096009520778582000)
1. [如何看待乘客错过高铁检票后情绪崩溃跪求工作人员，12306 回应无论是否发车不会例外放行？](https://www.zhihu.com/question/2096332490944110600)
1. [央行将退出存贷款基准利率，用市场化利率指标来替代，如何解读这一变化带来的影响？](https://www.zhihu.com/question/2095816410123298000)
1. [如何评价2026年10月米哈游《绝区零》3.3版本，挽昼女士？](https://www.zhihu.com/question/2096310403148027100)
1. [《边缘行者 2》开播获外媒满分评价，该作水准究竟如何？](https://www.zhihu.com/question/2095844332825752800)
1. [丹麦男子卖中国包子一天赚 5 万元，中式面食在海外有多受欢迎？还有哪些中国传统小吃最有可能在海外走红？](https://www.zhihu.com/question/2095237911004145400)
1. [同时遇到顾客点菜、催菜、买单、投诉各一桌，优先处理顺序是什么？](https://www.zhihu.com/question/2060780376558196000)
1. [身边有没有活得特别智慧的长辈，他/她给你什么启示？](https://www.zhihu.com/question/55927783)
1. [无论去哪里上班都被一眼看出来是老实人，该怎么办?](https://www.zhihu.com/question/2019217867418125300)
1. [适合上班族晚上下班回去做的家常菜有哪些？](https://www.zhihu.com/question/9023206394)
1. [在职场中，学历更重要 还是能力更重要?](https://www.zhihu.com/question/2000201119809429800)
1. [两部门发布公告，对盾构机、挖泥船、高端无人机等实施出口管制，释放了哪些信号？](https://www.zhihu.com/question/2095840965227561700)
1. [为什么我觉得“强者从不抱怨环境”这句话，本质上是一种对弱者的霸凌？](https://www.zhihu.com/question/2090039238993748700)
1. [有哪些国内能看到的书同时在国外是禁书？](https://www.zhihu.com/question/53557905)
1. [女子下班后绕道买菜，遭遇车祸身亡，人社部门不予认定工伤，法院判决算工伤，如何理解？](https://www.zhihu.com/question/2095276237493102000)
1. [连英伟达都承认消费级显卡已超出其控制，AI 显卡内存涨价狂潮何时结束?](https://www.zhihu.com/question/2095674841978488600)
1. [伊朗已有超3万名女性忍者，熟练使用弓、剑、飞镖等武器等训练画面走热，背后是怎样的社会文化环境？](https://www.zhihu.com/question/2095115972684112400)
1. [如何看待 52 岁刘恺威与 32 岁黎纪君恋情公开，两人因匹克球互生情愫，已秘密恋爱两个月？](https://www.zhihu.com/question/2095834533178208500)
1. [如何看待人民锐评发表文章「特斯拉能飞，我们就被甩开了？」，中国汽车行业未来该如何发展？](https://www.zhihu.com/question/2096169041811478500)
1. [宁德时代 A 股盘中跌超 10％，本轮大跌有哪些诱因？动力电池行业增长逻辑要变了吗？](https://www.zhihu.com/question/2096182082548523300)
1. [为什么数学题永远刷不完，总是千变万化？](https://www.zhihu.com/question/2058204747518186500)
1. [为啥这几年双十一、双十二活动周期被拉长、玩法不断改进，反而热度好像还不如以前了？你今年有「剁手」吗？](https://www.zhihu.com/question/2095972167292643000)
1. [日本年轻人流行「取消吃饭」，背后折射出怎样的现实困境？](https://www.zhihu.com/question/2095145716528291800)
1. [一家三口被困酒店卫生间超4小时，其间消防喷淋失控致婴儿险失温，当事人索赔15万，从法律角度如何解读？](https://www.zhihu.com/question/2095917714824853500)
1. [网友高铁偶遇自称114岁老人，能熟练使用智能手机，年龄真实性如何？横跨民国到AI时代的人生会是怎样的？](https://www.zhihu.com/question/2095844033167716900)
1. [如何评价山东“仙人跳”犯罪团伙作案38起，其中3名受害者拒不付款被采取强制措施，有哪些细节值得关注？](https://www.zhihu.com/question/2095821509633774600)
1. [陶哲轩和邓煜的对谈《数学与 AI 究竟是什么关系？》，如何理解他们各自的观点？](https://www.zhihu.com/question/2095840244973004000)
1. [现在 AI 短剧满天飞，怎么没见影视行业人员发声？](https://www.zhihu.com/question/2090228809819862000)
1. [医保个人账户跨省共济落地全国，意味着什么？将带来哪些利好？](https://www.zhihu.com/question/2096149013556721400)
1. [微软最新研究称 Agent 的「长记忆」可能是毒药，造成这一现象的原因是什么？](https://www.zhihu.com/question/2094431650885145300)
1. [抛开工资不谈，支撑你每天上班的动力是什么？](https://www.zhihu.com/question/2093668222637810000)
1. [国内有哪些自然风景极美的旅行地推荐？](https://www.zhihu.com/question/62082912)
1. [辅导孩子作业的时候，孩子迟迟不懂，你是反思自己不会教，还是觉得孩子笨呢？](https://www.zhihu.com/question/2095228005811594000)
1. [收入很高，但毫无意义的工作，你会坚持吗？](https://www.zhihu.com/question/2053528234554308400)
1. [到底什么样的家庭才能养出松弛感的孩子？](https://www.zhihu.com/question/2084202420641478700)
1. [2026 年维密大秀在洛杉矶举行，刘雯第10次登台，奚梦瑶时隔8年回归，如何评价此届维密大秀？](https://www.zhihu.com/question/2095446342763902500)
1. [并不存在R³→R²的一一映射，那怎么制造二向箔？](https://www.zhihu.com/question/1993443241434042400)
1. [《红楼梦》中的“茄鲞”是一道杜撰的菜吗？](https://www.zhihu.com/question/25353387)
1. [樊振东发文称不管啥心态，都无法改变偷拍不尊重人的本质，如何看待以爱为名的侵扰？怎样算真正支持运动员？](https://www.zhihu.com/question/2096173845665118000)
1. [印度 CA 机构 eMudhra 私钥存严重缺陷遭各大厂商阻断，将带来哪些影响？](https://www.zhihu.com/question/2096267545154172400)
1. [土耳其人其实大部分是希腊人后裔，是真的吗？为什么现在的土耳其人大部分都不认同？](https://www.zhihu.com/question/2096313313864804000)
1. [如何理解《万箭穿心》中的李宝莉？](https://www.zhihu.com/question/63633989)
1. [「遇事就慌」是阅历太浅还是性格懦弱？](https://www.zhihu.com/question/49757171)
1. [日本独立游戏开发者称发出去就被 AI 抄走，你觉得独立开发者该怎么办？](https://www.zhihu.com/question/2095491583533658000)
1. [为什么目前 AI 的设备是用 Mac 为主，而不是熟知的 Windows？](https://www.zhihu.com/question/2059660303915397400)
1. [如何评价姚明提出的“体育产业化不能唯金牌论”？](https://www.zhihu.com/question/2085845423416140000)
1. [法国爆发严重暴力骚乱，超50万人上街抗议，马克龙公开谴责，冲突的深层根源是什么？折射出法国怎样的危机？](https://www.zhihu.com/question/2095436236819096000)
1. [历史上哪些人物的结局最令人感到唏嘘和无奈？](https://www.zhihu.com/question/1957042331921393400)

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
<!-- 最后更新时间 Thu Oct 22 2026 13:02:42 GMT+0800 (China Standard Time) -->

1. [纪念长征胜利90周年大会](https://s.weibo.com//weibo?q=%23%E7%BA%AA%E5%BF%B5%E9%95%BF%E5%BE%81%E8%83%9C%E5%88%A990%E5%91%A8%E5%B9%B4%E5%A4%A7%E4%BC%9A%23&Refer=new_time)
1. [嫁金钗君黛死在魏娆怀里](https://s.weibo.com//weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%90%9B%E9%BB%9B%E6%AD%BB%E5%9C%A8%E9%AD%8F%E5%A8%86%E6%80%80%E9%87%8C%23&t=31&band_rank=1&Refer=top)
1. [上海婚纱店疑删除祖海高定内容](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A9%9A%E7%BA%B1%E5%BA%97%E7%96%91%E5%88%A0%E9%99%A4%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%E5%86%85%E5%AE%B9%23&t=31&band_rank=2&Refer=top)
1. [走好属于我们这一代的长征路](https://s.weibo.com//weibo?q=%23%E8%B5%B0%E5%A5%BD%E5%B1%9E%E4%BA%8E%E6%88%91%E4%BB%AC%E8%BF%99%E4%B8%80%E4%BB%A3%E7%9A%84%E9%95%BF%E5%BE%81%E8%B7%AF%23&t=31&band_rank=3&Refer=top)
1. [肖战能否达成电视剧三平台破万](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E8%83%BD%E5%90%A6%E8%BE%BE%E6%88%90%E7%94%B5%E8%A7%86%E5%89%A7%E4%B8%89%E5%B9%B3%E5%8F%B0%E7%A0%B4%E4%B8%87%23&t=31&band_rank=4&Refer=top)
1. [原来用AI写论文是会有痕迹的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E7%94%A8AI%E5%86%99%E8%AE%BA%E6%96%87%E6%98%AF%E4%BC%9A%E6%9C%89%E7%97%95%E8%BF%B9%E7%9A%84&t=31&band_rank=5&Refer=top)
1. [君黛喝毒酒下线](https://s.weibo.com//weibo?q=%23%E5%90%9B%E9%BB%9B%E5%96%9D%E6%AF%92%E9%85%92%E4%B8%8B%E7%BA%BF%23&t=31&band_rank=6&Refer=top)
1. [人民日报评老师被家长无理举报](https://s.weibo.com//weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E8%80%81%E5%B8%88%E8%A2%AB%E5%AE%B6%E9%95%BF%E6%97%A0%E7%90%86%E4%B8%BE%E6%8A%A5%23&t=31&band_rank=7&Refer=top)
1. [君黛到死都没叫魏恒娥一声阿母](https://s.weibo.com//weibo?q=%23%E5%90%9B%E9%BB%9B%E5%88%B0%E6%AD%BB%E9%83%BD%E6%B2%A1%E5%8F%AB%E9%AD%8F%E6%81%92%E5%A8%A5%E4%B8%80%E5%A3%B0%E9%98%BF%E6%AF%8D%23&t=31&band_rank=8&Refer=top)
1. [VOGUE盛典红毯](https://s.weibo.com//weibo?q=%23VOGUE%E7%9B%9B%E5%85%B8%E7%BA%A2%E6%AF%AF%23&t=31&band_rank=9&Refer=top)
1. [红秀主编艾特的造型师没说一句话](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E7%A7%80%E4%B8%BB%E7%BC%96%E8%89%BE%E7%89%B9%E7%9A%84%E9%80%A0%E5%9E%8B%E5%B8%88%E6%B2%A1%E8%AF%B4%E4%B8%80%E5%8F%A5%E8%AF%9D%23&t=31&band_rank=10&Refer=top)
1. [女子称地铁站内看5小时书被扣15元](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%9C%B0%E9%93%81%E7%AB%99%E5%86%85%E7%9C%8B5%E5%B0%8F%E6%97%B6%E4%B9%A6%E8%A2%AB%E6%89%A315%E5%85%83%23&t=31&band_rank=11&Refer=top)
1. [杨瀚森5分2篮板](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE5%E5%88%862%E7%AF%AE%E6%9D%BF%23&t=31&band_rank=12&Refer=top)
1. [嫁金钗单更一周](https://s.weibo.com//weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%8D%95%E6%9B%B4%E4%B8%80%E5%91%A8%23&t=31&band_rank=13&Refer=top)
1. [郑欣宜在沈殿霞墓前哭](https://s.weibo.com//weibo?q=%E9%83%91%E6%AC%A3%E5%AE%9C%E5%9C%A8%E6%B2%88%E6%AE%BF%E9%9C%9E%E5%A2%93%E5%89%8D%E5%93%AD&t=31&band_rank=14&Refer=top)
1. [侯明昊在雪中飞](https://s.weibo.com//weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%9C%A8%E9%9B%AA%E4%B8%AD%E9%A3%9E%23&t=31&band_rank=15&Refer=top)
1. [曝自费高定艺人名字](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E5%90%8D%E5%AD%97%23&t=31&band_rank=16&Refer=top)
1. [广州白云代孕窝点无人开门难处置](https://s.weibo.com//weibo?q=%E5%B9%BF%E5%B7%9E%E7%99%BD%E4%BA%91%E4%BB%A3%E5%AD%95%E7%AA%9D%E7%82%B9%E6%97%A0%E4%BA%BA%E5%BC%80%E9%97%A8%E9%9A%BE%E5%A4%84%E7%BD%AE&t=31&band_rank=17&Refer=top)
1. [孙千的理想出逃计划](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%8D%83%E7%9A%84%E7%90%86%E6%83%B3%E5%87%BA%E9%80%83%E8%AE%A1%E5%88%92%23&t=31&band_rank=18&Refer=top)
1. [离婚后发现前夫婚内继承400余万](https://s.weibo.com//weibo?q=%E7%A6%BB%E5%A9%9A%E5%90%8E%E5%8F%91%E7%8E%B0%E5%89%8D%E5%A4%AB%E5%A9%9A%E5%86%85%E7%BB%A7%E6%89%BF400%E4%BD%99%E4%B8%87&t=31&band_rank=19&Refer=top)
1. [客服回应iPhoneDuo微信QQ不适配](https://s.weibo.com//weibo?q=%23%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94iPhoneDuo%E5%BE%AE%E4%BF%A1QQ%E4%B8%8D%E9%80%82%E9%85%8D%23&t=31&band_rank=20&Refer=top)
1. [严浩翔欧阳娣娣身高差](https://s.weibo.com//weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%AC%A7%E9%98%B3%E5%A8%A3%E5%A8%A3%E8%BA%AB%E9%AB%98%E5%B7%AE%23&t=31&band_rank=21&Refer=top)
1. [iPhoneDuo微信不适配](https://s.weibo.com//weibo?q=%23iPhoneDuo%E5%BE%AE%E4%BF%A1%E4%B8%8D%E9%80%82%E9%85%8D%23&t=31&band_rank=22&Refer=top)
1. [杨瀚森第四节登场](https://s.weibo.com//weibo?q=%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%AC%AC%E5%9B%9B%E8%8A%82%E7%99%BB%E5%9C%BA&t=31&band_rank=23&Refer=top)
1. [红果开始忘本](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%BC%80%E5%A7%8B%E5%BF%98%E6%9C%AC%23&t=31&band_rank=24&Refer=top)
1. [字母哥35分 爱德华兹45分](https://s.weibo.com//weibo?q=%E5%AD%97%E6%AF%8D%E5%93%A535%E5%88%86%20%E7%88%B1%E5%BE%B7%E5%8D%8E%E5%85%B945%E5%88%86&t=31&band_rank=25&Refer=top)
1. [前女友曝陈天润语音](https://s.weibo.com//weibo?q=%23%E5%89%8D%E5%A5%B3%E5%8F%8B%E6%9B%9D%E9%99%88%E5%A4%A9%E6%B6%A6%E8%AF%AD%E9%9F%B3%23&t=31&band_rank=26&Refer=top)
1. [业内澄清给艺人买高定](https://s.weibo.com//weibo?q=%23%E4%B8%9A%E5%86%85%E6%BE%84%E6%B8%85%E7%BB%99%E8%89%BA%E4%BA%BA%E4%B9%B0%E9%AB%98%E5%AE%9A%23&t=31&band_rank=27&Refer=top)
1. [沈殿霞6000万信托](https://s.weibo.com//weibo?q=%E6%B2%88%E6%AE%BF%E9%9C%9E6000%E4%B8%87%E4%BF%A1%E6%89%98&t=31&band_rank=28&Refer=top)
1. [A股千元科技股仅剩一只](https://s.weibo.com//weibo?q=%23A%E8%82%A1%E5%8D%83%E5%85%83%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%85%E5%89%A9%E4%B8%80%E5%8F%AA%23&t=31&band_rank=29&Refer=top)
1. [纪念长征胜利90周年全场唱国歌](https://s.weibo.com//weibo?q=%23%E7%BA%AA%E5%BF%B5%E9%95%BF%E5%BE%81%E8%83%9C%E5%88%A990%E5%91%A8%E5%B9%B4%E5%85%A8%E5%9C%BA%E5%94%B1%E5%9B%BD%E6%AD%8C%23&t=31&band_rank=30&Refer=top)
1. [曝文咏珊生女](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%96%87%E5%92%8F%E7%8F%8A%E7%94%9F%E5%A5%B3%23&t=31&band_rank=31&Refer=top)
1. [湖人揭幕战大胜勇士22分](https://s.weibo.com//weibo?q=%23%E6%B9%96%E4%BA%BA%E6%8F%AD%E5%B9%95%E6%88%98%E5%A4%A7%E8%83%9C%E5%8B%87%E5%A3%AB22%E5%88%86%23&t=31&band_rank=32&Refer=top)
1. [蔡文静工作留痕的重要性](https://s.weibo.com//weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23&t=31&band_rank=33&Refer=top)
1. [我们的咖位不一样了](https://s.weibo.com//weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%92%96%E4%BD%8D%E4%B8%8D%E4%B8%80%E6%A0%B7%E4%BA%86%23&t=31&band_rank=34&Refer=top)
1. [嫁金钗](https://s.weibo.com//weibo?q=%E5%AB%81%E9%87%91%E9%92%97&t=31&band_rank=35&Refer=top)
1. [负债7w另有1万信用卡即将逾期](https://s.weibo.com//weibo?q=%23%E8%B4%9F%E5%80%BA7w%E5%8F%A6%E6%9C%891%E4%B8%87%E4%BF%A1%E7%94%A8%E5%8D%A1%E5%8D%B3%E5%B0%86%E9%80%BE%E6%9C%9F%23&t=31&band_rank=36&Refer=top)
1. [魏恒娥本想借着丽昭仪彻底处死魏娆](https://s.weibo.com//weibo?q=%23%E9%AD%8F%E6%81%92%E5%A8%A5%E6%9C%AC%E6%83%B3%E5%80%9F%E7%9D%80%E4%B8%BD%E6%98%AD%E4%BB%AA%E5%BD%BB%E5%BA%95%E5%A4%84%E6%AD%BB%E9%AD%8F%E5%A8%86%23&t=31&band_rank=37&Refer=top)
1. [嫁金钗追剧日历](https://s.weibo.com//weibo?q=%E5%AB%81%E9%87%91%E9%92%97%E8%BF%BD%E5%89%A7%E6%97%A5%E5%8E%86&t=31&band_rank=38&Refer=top)
1. [张智霖说19岁儿子没自己帅](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E8%AF%B419%E5%B2%81%E5%84%BF%E5%AD%90%E6%B2%A1%E8%87%AA%E5%B7%B1%E5%B8%85%23&t=31&band_rank=39&Refer=top)
1. [杭州警方通报盘石创始人田宁失联](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%9B%98%E7%9F%B3%E5%88%9B%E5%A7%8B%E4%BA%BA%E7%94%B0%E5%AE%81%E5%A4%B1%E8%81%94%23&t=31&band_rank=40&Refer=top)
1. [张小斐体面人](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E4%BD%93%E9%9D%A2%E4%BA%BA%23&t=31&band_rank=41&Refer=top)
1. [A股](https://s.weibo.com//weibo?q=A%E8%82%A1&t=31&band_rank=42&Refer=top)
1. [多款App暂未适配iPhoneDuo](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E6%AC%BEApp%E6%9A%82%E6%9C%AA%E9%80%82%E9%85%8DiPhoneDuo%23&t=31&band_rank=43&Refer=top)
1. [一百万买高定 主体性太强还是太弱](https://s.weibo.com//weibo?q=%E4%B8%80%E7%99%BE%E4%B8%87%E4%B9%B0%E9%AB%98%E5%AE%9A%20%E4%B8%BB%E4%BD%93%E6%80%A7%E5%A4%AA%E5%BC%BA%E8%BF%98%E6%98%AF%E5%A4%AA%E5%BC%B1&t=31&band_rank=44&Refer=top)
1. [东契奇中圈压哨三分](https://s.weibo.com//weibo?q=%23%E4%B8%9C%E5%A5%91%E5%A5%87%E4%B8%AD%E5%9C%88%E5%8E%8B%E5%93%A8%E4%B8%89%E5%88%86%23&t=31&band_rank=45&Refer=top)
1. [红秀主编内涵造型师造谣艺人](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E7%A7%80%E4%B8%BB%E7%BC%96%E5%86%85%E6%B6%B5%E9%80%A0%E5%9E%8B%E5%B8%88%E9%80%A0%E8%B0%A3%E8%89%BA%E4%BA%BA%23&t=31&band_rank=46&Refer=top)
1. [红果免费看剧广告变现模式已跑通](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%85%8D%E8%B4%B9%E7%9C%8B%E5%89%A7%E5%B9%BF%E5%91%8A%E5%8F%98%E7%8E%B0%E6%A8%A1%E5%BC%8F%E5%B7%B2%E8%B7%91%E9%80%9A%23&t=31&band_rank=47&Refer=top)
1. [归期坐网约车发生连环追尾事故](https://s.weibo.com//weibo?q=%E5%BD%92%E6%9C%9F%E5%9D%90%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%8F%91%E7%94%9F%E8%BF%9E%E7%8E%AF%E8%BF%BD%E5%B0%BE%E4%BA%8B%E6%95%85&t=31&band_rank=48&Refer=top)
1. [勇士vs湖人](https://s.weibo.com//weibo?q=%E5%8B%87%E5%A3%ABvs%E6%B9%96%E4%BA%BA&t=31&band_rank=49&Refer=top)
1. [料酒去腥的惊天骗局](https://s.weibo.com//weibo?q=%E6%96%99%E9%85%92%E5%8E%BB%E8%85%A5%E7%9A%84%E6%83%8A%E5%A4%A9%E9%AA%97%E5%B1%80&t=31&band_rank=50&Refer=top)
1. [我们的长征路](https://s.weibo.com//weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E9%95%BF%E5%BE%81%E8%B7%AF%23&Refer=new_time)
1. [中国体操女团时隔20年夺冠](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E5%9B%A2%E6%97%B6%E9%9A%9420%E5%B9%B4%E5%A4%BA%E5%86%A0%23&t=31&band_rank=1&Refer=top)
1. [红果短剧自砍摇钱树](https://s.weibo.com//weibo?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E8%87%AA%E7%A0%8D%E6%91%87%E9%92%B1%E6%A0%91&t=31&band_rank=2&Refer=top)
1. [这台世界顶尖大科学装置首次出光](https://s.weibo.com//weibo?q=%23%E8%BF%99%E5%8F%B0%E4%B8%96%E7%95%8C%E9%A1%B6%E5%B0%96%E5%A4%A7%E7%A7%91%E5%AD%A6%E8%A3%85%E7%BD%AE%E9%A6%96%E6%AC%A1%E5%87%BA%E5%85%89%23&t=31&band_rank=3&Refer=top)
1. [肖战小城良方路人进场](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%B7%AF%E4%BA%BA%E8%BF%9B%E5%9C%BA%23&t=31&band_rank=4&Refer=top)
1. [泽连斯基愿保留75%领土以达和平](https://s.weibo.com//weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E6%84%BF%E4%BF%9D%E7%95%9975%25%E9%A2%86%E5%9C%9F%E4%BB%A5%E8%BE%BE%E5%92%8C%E5%B9%B3%23&t=31&band_rank=5&Refer=top)
1. [体操世锦赛女团决赛](https://s.weibo.com//weibo?q=%23%E4%BD%93%E6%93%8D%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A5%B3%E5%9B%A2%E5%86%B3%E8%B5%9B%23&t=31&band_rank=6&Refer=top)
1. [宁德时代崩跌原因](https://s.weibo.com//weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%B4%A9%E8%B7%8C%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=7&Refer=top)
1. [网友物理推导问界M9车速](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E7%89%A9%E7%90%86%E6%8E%A8%E5%AF%BC%E9%97%AE%E7%95%8CM9%E8%BD%A6%E9%80%9F&t=31&band_rank=8&Refer=top)
1. [邱祺缘 体操世锦赛](https://s.weibo.com//weibo?q=%E9%82%B1%E7%A5%BA%E7%BC%98%20%E4%BD%93%E6%93%8D%E4%B8%96%E9%94%A6%E8%B5%9B&t=31&band_rank=9&Refer=top)
1. [长生 AG](https://s.weibo.com//weibo?q=%E9%95%BF%E7%94%9F%20AG&t=31&band_rank=10&Refer=top)
1. [和女同事相处真的要小心分寸](https://s.weibo.com//weibo?q=%E5%92%8C%E5%A5%B3%E5%90%8C%E4%BA%8B%E7%9B%B8%E5%A4%84%E7%9C%9F%E7%9A%84%E8%A6%81%E5%B0%8F%E5%BF%83%E5%88%86%E5%AF%B8&t=31&band_rank=11&Refer=top)
1. [曝自费高定艺人名字](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E5%90%8D%E5%AD%97%23&t=31&band_rank=12&Refer=top)
1. [原来明星租一次高定这么贵啊](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E6%98%9F%E7%A7%9F%E4%B8%80%E6%AC%A1%E9%AB%98%E5%AE%9A%E8%BF%99%E4%B9%88%E8%B4%B5%E5%95%8A%23&t=31&band_rank=13&Refer=top)
1. [周杰伦说我是中国人有什么可讨论的](https://s.weibo.com//weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%AF%B4%E6%88%91%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%9C%89%E4%BB%80%E4%B9%88%E5%8F%AF%E8%AE%A8%E8%AE%BA%E7%9A%84%23&t=31&band_rank=14&Refer=top)
1. [盛艾敬妈妈疑似涉嫌诈骗](https://s.weibo.com//weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E5%A6%88%E5%A6%88%E7%96%91%E4%BC%BC%E6%B6%89%E5%AB%8C%E8%AF%88%E9%AA%97%23&t=31&band_rank=15&Refer=top)
1. [拜仁2比2阿森纳](https://s.weibo.com//weibo?q=%23%E6%8B%9C%E4%BB%812%E6%AF%942%E9%98%BF%E6%A3%AE%E7%BA%B3%23&t=31&band_rank=16&Refer=top)
1. [武志红李雪被指缺乏爱的体验](https://s.weibo.com//weibo?q=%E6%AD%A6%E5%BF%97%E7%BA%A2%E6%9D%8E%E9%9B%AA%E8%A2%AB%E6%8C%87%E7%BC%BA%E4%B9%8F%E7%88%B1%E7%9A%84%E4%BD%93%E9%AA%8C&t=31&band_rank=17&Refer=top)
1. [张小斐 救场](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%95%91%E5%9C%BA&t=31&band_rank=18&Refer=top)
1. [肖战刘铮亮当群演了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%88%98%E9%93%AE%E4%BA%AE%E5%BD%93%E7%BE%A4%E6%BC%94%E4%BA%86%23&t=31&band_rank=19&Refer=top)
1. [中国体操女团12套全顺](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E5%9B%A212%E5%A5%97%E5%85%A8%E9%A1%BA&t=31&band_rank=20&Refer=top)
1. [料酒去腥的惊天骗局](https://s.weibo.com//weibo?q=%E6%96%99%E9%85%92%E5%8E%BB%E8%85%A5%E7%9A%84%E6%83%8A%E5%A4%A9%E9%AA%97%E5%B1%80&t=31&band_rank=21&Refer=top)
1. [蔡天凤案邻居证词曝光案发细节](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E6%A1%88%E9%82%BB%E5%B1%85%E8%AF%81%E8%AF%8D%E6%9B%9D%E5%85%89%E6%A1%88%E5%8F%91%E7%BB%86%E8%8A%82%23&t=31&band_rank=22&Refer=top)
1. [刘铮亮父亲冬泳溺亡](https://s.weibo.com//weibo?q=%E5%88%98%E9%93%AE%E4%BA%AE%E7%88%B6%E4%BA%B2%E5%86%AC%E6%B3%B3%E6%BA%BA%E4%BA%A1&t=31&band_rank=23&Refer=top)
1. [芭莎 有人在后台不出来](https://s.weibo.com//weibo?q=%E8%8A%AD%E8%8E%8E%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%8E%E5%8F%B0%E4%B8%8D%E5%87%BA%E6%9D%A5&t=31&band_rank=24&Refer=top)
1. [影视飓风iPhoneDuo评测](https://s.weibo.com//weibo?q=%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8EiPhoneDuo%E8%AF%84%E6%B5%8B&t=31&band_rank=25&Refer=top)
1. [祖海高定压轴款](https://s.weibo.com//weibo?q=%23%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%E5%8E%8B%E8%BD%B4%E6%AC%BE%23&t=31&band_rank=26&Refer=top)
1. [别人一眼看出是当老师的](https://s.weibo.com//weibo?q=%E5%88%AB%E4%BA%BA%E4%B8%80%E7%9C%BC%E7%9C%8B%E5%87%BA%E6%98%AF%E5%BD%93%E8%80%81%E5%B8%88%E7%9A%84&t=31&band_rank=27&Refer=top)
1. [张清颖平衡木15.066分](https://s.weibo.com//weibo?q=%E5%BC%A0%E6%B8%85%E9%A2%96%E5%B9%B3%E8%A1%A1%E6%9C%A815.066%E5%88%86&t=31&band_rank=28&Refer=top)
1. [宇树机器人展示举起汽车救人](https://s.weibo.com//weibo?q=%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B1%95%E7%A4%BA%E4%B8%BE%E8%B5%B7%E6%B1%BD%E8%BD%A6%E6%95%91%E4%BA%BA&t=31&band_rank=29&Refer=top)
1. [泽连斯基称讨论美俄乌领导人会晤可能性](https://s.weibo.com//weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E8%AE%A8%E8%AE%BA%E7%BE%8E%E4%BF%84%E4%B9%8C%E9%A2%86%E5%AF%BC%E4%BA%BA%E4%BC%9A%E6%99%A4%E5%8F%AF%E8%83%BD%E6%80%A7%23&t=31&band_rank=30&Refer=top)
1. [上海婚纱店认领祖海高定](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A9%9A%E7%BA%B1%E5%BA%97%E8%AE%A4%E9%A2%86%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%23&t=31&band_rank=31&Refer=top)
1. [蔡文静在张小斐之前走完红毯了](https://s.weibo.com//weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%9C%A8%E5%BC%A0%E5%B0%8F%E6%96%90%E4%B9%8B%E5%89%8D%E8%B5%B0%E5%AE%8C%E7%BA%A2%E6%AF%AF%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [本年度最会怼人的网友出现了](https://s.weibo.com//weibo?q=%E6%9C%AC%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BC%9A%E6%80%BC%E4%BA%BA%E7%9A%84%E7%BD%91%E5%8F%8B%E5%87%BA%E7%8E%B0%E4%BA%86&t=31&band_rank=33&Refer=top)
1. [杨幂压轴](https://s.weibo.com//weibo?q=%E6%9D%A8%E5%B9%82%E5%8E%8B%E8%BD%B4&t=31&band_rank=34&Refer=top)
1. [33岁女子南太行徒步失联身亡](https://s.weibo.com//weibo?q=33%E5%B2%81%E5%A5%B3%E5%AD%90%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%BE%92%E6%AD%A5%E5%A4%B1%E8%81%94%E8%BA%AB%E4%BA%A1&t=31&band_rank=35&Refer=top)
1. [中国体操女队获得洛奥资格](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E9%98%9F%E8%8E%B7%E5%BE%97%E6%B4%9B%E5%A5%A5%E8%B5%84%E6%A0%BC%23&t=31&band_rank=36&Refer=top)
1. [女孩回应撞脸大S](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%E6%92%9E%E8%84%B8%E5%A4%A7S%23&t=31&band_rank=37&Refer=top)
1. [小城良方全网曝光5.54亿](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%85%A8%E7%BD%91%E6%9B%9D%E5%85%895.54%E4%BA%BF%23&t=31&band_rank=38&Refer=top)
1. [小米成立独立汽车安全研究中心](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%88%90%E7%AB%8B%E7%8B%AC%E7%AB%8B%E6%B1%BD%E8%BD%A6%E5%AE%89%E5%85%A8%E7%A0%94%E7%A9%B6%E4%B8%AD%E5%BF%83%23&t=31&band_rank=39&Refer=top)
1. [李雪发文反讽武志红](https://s.weibo.com//weibo?q=%E6%9D%8E%E9%9B%AA%E5%8F%91%E6%96%87%E5%8F%8D%E8%AE%BD%E6%AD%A6%E5%BF%97%E7%BA%A2&t=31&band_rank=40&Refer=top)
1. [罗晋称呼唐嫣我太太](https://s.weibo.com//weibo?q=%23%E7%BD%97%E6%99%8B%E7%A7%B0%E5%91%BC%E5%94%90%E5%AB%A3%E6%88%91%E5%A4%AA%E5%A4%AA%23&t=31&band_rank=41&Refer=top)
1. [印度男子谋杀39岁中国女子终身监禁](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E8%B0%8B%E6%9D%8039%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E7%BB%88%E8%BA%AB%E7%9B%91%E7%A6%81%23&t=31&band_rank=42&Refer=top)
1. [詹俊谈科莫vs曼联](https://s.weibo.com//weibo?q=%23%E8%A9%B9%E4%BF%8A%E8%B0%88%E7%A7%91%E8%8E%ABvs%E6%9B%BC%E8%81%94%23&t=31&band_rank=43&Refer=top)
1. [柯沁沁平衡木14.400分](https://s.weibo.com//weibo?q=%E6%9F%AF%E6%B2%81%E6%B2%81%E5%B9%B3%E8%A1%A1%E6%9C%A814.400%E5%88%86&t=31&band_rank=44&Refer=top)
1. [AG 退役](https://s.weibo.com//weibo?q=AG%20%E9%80%80%E5%BD%B9&t=31&band_rank=45&Refer=top)
1. [问界辟谣网传电池爆燃智驾撞击](https://s.weibo.com//weibo?q=%23%E9%97%AE%E7%95%8C%E8%BE%9F%E8%B0%A3%E7%BD%91%E4%BC%A0%E7%94%B5%E6%B1%A0%E7%88%86%E7%87%83%E6%99%BA%E9%A9%BE%E6%92%9E%E5%87%BB%23&t=31&band_rank=46&Refer=top)
1. [iPhoneDuo折痕真实体验](https://s.weibo.com//weibo?q=%23iPhoneDuo%E6%8A%98%E7%97%95%E7%9C%9F%E5%AE%9E%E4%BD%93%E9%AA%8C%23&t=31&band_rank=47&Refer=top)
1. [我喝多了都出不了这么多错](https://s.weibo.com//weibo?q=%E6%88%91%E5%96%9D%E5%A4%9A%E4%BA%86%E9%83%BD%E5%87%BA%E4%B8%8D%E4%BA%86%E8%BF%99%E4%B9%88%E5%A4%9A%E9%94%99&t=31&band_rank=48&Refer=top)
1. [樊振东这次发文又引用了中庸和孟子](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BF%99%E6%AC%A1%E5%8F%91%E6%96%87%E5%8F%88%E5%BC%95%E7%94%A8%E4%BA%86%E4%B8%AD%E5%BA%B8%E5%92%8C%E5%AD%9F%E5%AD%90%23&t=31&band_rank=49&Refer=top)
1. [白鹿开毯](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E6%AF%AF%23&t=31&band_rank=50&Refer=top)
1. [红果短剧自砍摇钱树](https://s.weibo.com//weibo?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E8%87%AA%E7%A0%8D%E6%91%87%E9%92%B1%E6%A0%91&t=31&band_rank=1&Refer=top)
1. [长生 AG](https://s.weibo.com//weibo?q=%E9%95%BF%E7%94%9F%20AG&t=31&band_rank=2&Refer=top)
1. [长征硬核知识点十问十答](https://s.weibo.com//weibo?q=%23%E9%95%BF%E5%BE%81%E7%A1%AC%E6%A0%B8%E7%9F%A5%E8%AF%86%E7%82%B9%E5%8D%81%E9%97%AE%E5%8D%81%E7%AD%94%23&t=31&band_rank=3&Refer=top)
1. [AG 退役](https://s.weibo.com//weibo?q=AG%20%E9%80%80%E5%BD%B9&t=31&band_rank=4&Refer=top)
1. [网友物理推导问界M9车速](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E7%89%A9%E7%90%86%E6%8E%A8%E5%AF%BC%E9%97%AE%E7%95%8CM9%E8%BD%A6%E9%80%9F&t=31&band_rank=5&Refer=top)
1. [曝自费高定艺人名字](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E5%90%8D%E5%AD%97%23&t=31&band_rank=6&Refer=top)
1. [原来明星租一次高定这么贵啊](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E6%98%9F%E7%A7%9F%E4%B8%80%E6%AC%A1%E9%AB%98%E5%AE%9A%E8%BF%99%E4%B9%88%E8%B4%B5%E5%95%8A%23&t=31&band_rank=7&Refer=top)
1. [张小斐 救场](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%95%91%E5%9C%BA&t=31&band_rank=8&Refer=top)
1. [泽连斯基愿保留75%领土以达和平](https://s.weibo.com//weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E6%84%BF%E4%BF%9D%E7%95%9975%25%E9%A2%86%E5%9C%9F%E4%BB%A5%E8%BE%BE%E5%92%8C%E5%B9%B3%23&t=31&band_rank=9&Refer=top)
1. [芭莎 有人在后台不出来](https://s.weibo.com//weibo?q=%E8%8A%AD%E8%8E%8E%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%8E%E5%8F%B0%E4%B8%8D%E5%87%BA%E6%9D%A5&t=31&band_rank=10&Refer=top)
1. [蔡文静在张小斐之前走完红毯了](https://s.weibo.com//weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%9C%A8%E5%BC%A0%E5%B0%8F%E6%96%90%E4%B9%8B%E5%89%8D%E8%B5%B0%E5%AE%8C%E7%BA%A2%E6%AF%AF%E4%BA%86%23&t=31&band_rank=12&Refer=top)
1. [女孩回应撞脸大S](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%E6%92%9E%E8%84%B8%E5%A4%A7S%23&t=31&band_rank=13&Refer=top)
1. [白鹿开毯](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E6%AF%AF%23&t=31&band_rank=14&Refer=top)
1. [祖海高定压轴款](https://s.weibo.com//weibo?q=%23%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%E5%8E%8B%E8%BD%B4%E6%AC%BE%23&t=31&band_rank=15&Refer=top)
1. [肖战小城良方路人进场](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%B7%AF%E4%BA%BA%E8%BF%9B%E5%9C%BA%23&t=31&band_rank=16&Refer=top)
1. [疑似晋妈小号回怼网友](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E6%99%8B%E5%A6%88%E5%B0%8F%E5%8F%B7%E5%9B%9E%E6%80%BC%E7%BD%91%E5%8F%8B%23&t=31&band_rank=17&Refer=top)
1. [印度男子谋杀39岁中国女子终身监禁](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E8%B0%8B%E6%9D%8039%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E7%BB%88%E8%BA%AB%E7%9B%91%E7%A6%81%23&t=31&band_rank=18&Refer=top)
1. [杭州大学生开一人公司营收破60万](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%BC%80%E4%B8%80%E4%BA%BA%E5%85%AC%E5%8F%B8%E8%90%A5%E6%94%B6%E7%A0%B460%E4%B8%87%23&t=31&band_rank=19&Refer=top)
1. [男子身中17刀身亡17岁少年被刑拘](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E8%BA%AB%E4%B8%AD17%E5%88%80%E8%BA%AB%E4%BA%A117%E5%B2%81%E5%B0%91%E5%B9%B4%E8%A2%AB%E5%88%91%E6%8B%98%23&t=31&band_rank=20&Refer=top)
1. [杨幂压轴](https://s.weibo.com//weibo?q=%E6%9D%A8%E5%B9%82%E5%8E%8B%E8%BD%B4&t=31&band_rank=21&Refer=top)
1. [嫁金钗](https://s.weibo.com//weibo?q=%E5%AB%81%E9%87%91%E9%92%97&t=31&band_rank=22&Refer=top)
1. [料酒去腥的惊天骗局](https://s.weibo.com//weibo?q=%E6%96%99%E9%85%92%E5%8E%BB%E8%85%A5%E7%9A%84%E6%83%8A%E5%A4%A9%E9%AA%97%E5%B1%80&t=31&band_rank=23&Refer=top)
1. [影视飓风iPhoneDuo评测](https://s.weibo.com//weibo?q=%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8EiPhoneDuo%E8%AF%84%E6%B5%8B&t=31&band_rank=24&Refer=top)
1. [蔡文静好惨啊](https://s.weibo.com//weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%A5%BD%E6%83%A8%E5%95%8A%23&t=31&band_rank=25&Refer=top)
1. [16岁男孩睡梦中睾丸扭转720度](https://s.weibo.com//weibo?q=%2316%E5%B2%81%E7%94%B7%E5%AD%A9%E7%9D%A1%E6%A2%A6%E4%B8%AD%E7%9D%BE%E4%B8%B8%E6%89%AD%E8%BD%AC720%E5%BA%A6%23&t=31&band_rank=26&Refer=top)
1. [罗晋和唐嫣讨论女儿画的画](https://s.weibo.com//weibo?q=%23%E7%BD%97%E6%99%8B%E5%92%8C%E5%94%90%E5%AB%A3%E8%AE%A8%E8%AE%BA%E5%A5%B3%E5%84%BF%E7%94%BB%E7%9A%84%E7%94%BB%23&t=31&band_rank=27&Refer=top)
1. [泽连斯基称讨论美俄乌领导人会晤可能性](https://s.weibo.com//weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E8%AE%A8%E8%AE%BA%E7%BE%8E%E4%BF%84%E4%B9%8C%E9%A2%86%E5%AF%BC%E4%BA%BA%E4%BC%9A%E6%99%A4%E5%8F%AF%E8%83%BD%E6%80%A7%23&t=31&band_rank=28&Refer=top)
1. [女子在冰箱养蛙现吃现捞](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%86%B0%E7%AE%B1%E5%85%BB%E8%9B%99%E7%8E%B0%E5%90%83%E7%8E%B0%E6%8D%9E%23&t=31&band_rank=29&Refer=top)
1. [穆霍娃入围总决赛](https://s.weibo.com//weibo?q=%23%E7%A9%86%E9%9C%8D%E5%A8%83%E5%85%A5%E5%9B%B4%E6%80%BB%E5%86%B3%E8%B5%9B%23&t=31&band_rank=30&Refer=top)
1. [刘铮亮父亲冬泳溺亡](https://s.weibo.com//weibo?q=%E5%88%98%E9%93%AE%E4%BA%AE%E7%88%B6%E4%BA%B2%E5%86%AC%E6%B3%B3%E6%BA%BA%E4%BA%A1&t=31&band_rank=32&Refer=top)
1. [盛艾敬父母欠薪遭韩网批评](https://s.weibo.com//weibo?q=%E7%9B%9B%E8%89%BE%E6%95%AC%E7%88%B6%E6%AF%8D%E6%AC%A0%E8%96%AA%E9%81%AD%E9%9F%A9%E7%BD%91%E6%89%B9%E8%AF%84&t=31&band_rank=34&Refer=top)
1. [曝自费高定艺人把品牌pr气坏了](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E6%8A%8A%E5%93%81%E7%89%8Cpr%E6%B0%94%E5%9D%8F%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [樊振东这次发文又引用了中庸和孟子](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BF%99%E6%AC%A1%E5%8F%91%E6%96%87%E5%8F%88%E5%BC%95%E7%94%A8%E4%BA%86%E4%B8%AD%E5%BA%B8%E5%92%8C%E5%AD%9F%E5%AD%90%23&t=31&band_rank=36&Refer=top)
1. [王栎鑫前妻晚上经常哭](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A0%8E%E9%91%AB%E5%89%8D%E5%A6%BB%E6%99%9A%E4%B8%8A%E7%BB%8F%E5%B8%B8%E5%93%AD%23&t=31&band_rank=37&Refer=top)
1. [fm 火力全开](https://s.weibo.com//weibo?q=fm%20%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80&t=31&band_rank=38&Refer=top)
1. [罗晋称呼唐嫣我太太](https://s.weibo.com//weibo?q=%23%E7%BD%97%E6%99%8B%E7%A7%B0%E5%91%BC%E5%94%90%E5%AB%A3%E6%88%91%E5%A4%AA%E5%A4%AA%23&t=31&band_rank=39&Refer=top)
1. [问界辟谣网传电池爆燃智驾撞击](https://s.weibo.com//weibo?q=%23%E9%97%AE%E7%95%8C%E8%BE%9F%E8%B0%A3%E7%BD%91%E4%BC%A0%E7%94%B5%E6%B1%A0%E7%88%86%E7%87%83%E6%99%BA%E9%A9%BE%E6%92%9E%E5%87%BB%23&t=31&band_rank=40&Refer=top)
1. [一诺状态](https://s.weibo.com//weibo?q=%E4%B8%80%E8%AF%BA%E7%8A%B6%E6%80%81&t=31&band_rank=41&Refer=top)
1. [肖战刘铮亮当群演了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%88%98%E9%93%AE%E4%BA%AE%E5%BD%93%E7%BE%A4%E6%BC%94%E4%BA%86%23&t=31&band_rank=42&Refer=top)
1. [2026共创之夜节目抽象剧透](https://s.weibo.com//weibo?q=%232026%E5%85%B1%E5%88%9B%E4%B9%8B%E5%A4%9C%E8%8A%82%E7%9B%AE%E6%8A%BD%E8%B1%A1%E5%89%A7%E9%80%8F%23&t=31&band_rank=43&Refer=top)
1. [iPhoneDuo折痕真实体验](https://s.weibo.com//weibo?q=%23iPhoneDuo%E6%8A%98%E7%97%95%E7%9C%9F%E5%AE%9E%E4%BD%93%E9%AA%8C%23&t=31&band_rank=44&Refer=top)
1. [陈天润恋情传闻](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%A4%A9%E6%B6%A6%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%23&t=31&band_rank=45&Refer=top)
1. [芭莎内场座位](https://s.weibo.com//weibo?q=%E8%8A%AD%E8%8E%8E%E5%86%85%E5%9C%BA%E5%BA%A7%E4%BD%8D&t=31&band_rank=46&Refer=top)
1. [钟意长生拥抱](https://s.weibo.com//weibo?q=%23%E9%92%9F%E6%84%8F%E9%95%BF%E7%94%9F%E6%8B%A5%E6%8A%B1%23&t=31&band_rank=47&Refer=top)
1. [我已经变成被时代抛弃的老人](https://s.weibo.com//weibo?q=%E6%88%91%E5%B7%B2%E7%BB%8F%E5%8F%98%E6%88%90%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%8A%9B%E5%BC%83%E7%9A%84%E8%80%81%E4%BA%BA&t=31&band_rank=48&Refer=top)
1. [儿童手表三亚遗失后被带到俄罗斯](https://s.weibo.com//weibo?q=%23%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8%E4%B8%89%E4%BA%9A%E9%81%97%E5%A4%B1%E5%90%8E%E8%A2%AB%E5%B8%A6%E5%88%B0%E4%BF%84%E7%BD%97%E6%96%AF%23&t=31&band_rank=49&Refer=top)
1. [河南博物馆偶遇14岁满级小孩](https://s.weibo.com//weibo?q=%E6%B2%B3%E5%8D%97%E5%8D%9A%E7%89%A9%E9%A6%86%E5%81%B6%E9%81%8714%E5%B2%81%E6%BB%A1%E7%BA%A7%E5%B0%8F%E5%AD%A9&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
