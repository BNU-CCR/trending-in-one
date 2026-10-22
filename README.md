# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-22 23:19:10

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
<!-- 最后更新时间 Fri Oct 23 2026 02:46:14 GMT+0800 (China Standard Time) -->

1. [西藏那曲巴青县发生7.0级地震](https://so.toutiao.com/search?keyword=西藏那曲巴青县发生7.0级地震)
1. [大火逼近中国 日本道歉岂能只道一半](https://so.toutiao.com/search?keyword=大火逼近中国%20日本道歉岂能只道一半)
1. [新兴领域良性循环加快形成](https://so.toutiao.com/search?keyword=新兴领域良性循环加快形成)
1. [女子100天零违章获奖1吨汽油](https://so.toutiao.com/search?keyword=女子100天零违章获奖1吨汽油)
1. [时速400公里的高铁真要来了吗](https://so.toutiao.com/search?keyword=时速400公里的高铁真要来了吗)
1. [人民日报评星巴克“消费入座”](https://so.toutiao.com/search?keyword=人民日报评星巴克“消费入座”)
1. [张本智和被打出0-11惨败](https://so.toutiao.com/search?keyword=张本智和被打出0-11惨败)
1. [北京市委就夏林茂被查表态](https://so.toutiao.com/search?keyword=北京市委就夏林茂被查表态)
1. [杭州大二学生开一人公司营收破60万](https://so.toutiao.com/search?keyword=杭州大二学生开一人公司营收破60万)
1. [亚锦赛国乒女团决赛不敌日本](https://so.toutiao.com/search?keyword=亚锦赛国乒女团决赛不敌日本)
1. [乌克兰外长会见中国大使：感谢中方](https://so.toutiao.com/search?keyword=乌克兰外长会见中国大使：感谢中方)
1. [72岁李雪健再登舞台](https://so.toutiao.com/search?keyword=72岁李雪健再登舞台)
1. [外地患者组团到高校传播艾滋病不实](https://so.toutiao.com/search?keyword=外地患者组团到高校传播艾滋病不实)
1. [女子称地铁站内看5小时书被扣15元](https://so.toutiao.com/search?keyword=女子称地铁站内看5小时书被扣15元)
1. [演唱会黄牛一个月获利100万](https://so.toutiao.com/search?keyword=演唱会黄牛一个月获利100万)
1. [北京市副市长夏林茂被查](https://so.toutiao.com/search?keyword=北京市副市长夏林茂被查)
1. [人民日报评综艺里医学生盲猜病情](https://so.toutiao.com/search?keyword=人民日报评综艺里医学生盲猜病情)
1. [“大9”车型混战 万辆爆款也站不稳了](https://so.toutiao.com/search?keyword=“大9”车型混战%20万辆爆款也站不稳了)
1. [人民币升值的真正推手是什么](https://so.toutiao.com/search?keyword=人民币升值的真正推手是什么)
1. [贾乃亮从早播到晚](https://so.toutiao.com/search?keyword=贾乃亮从早播到晚)
1. [牛市逻辑真的不在了吗](https://so.toutiao.com/search?keyword=牛市逻辑真的不在了吗)
1. [iPhone Duo折叠3000次后折痕加深](https://so.toutiao.com/search?keyword=iPhone%20Duo折叠3000次后折痕加深)
1. [马天宇与张萌重聚修复好友关系](https://so.toutiao.com/search?keyword=马天宇与张萌重聚修复好友关系)
1. [女子叫顺风车司机竟让她来开](https://so.toutiao.com/search?keyword=女子叫顺风车司机竟让她来开)
1. [台学者：大陆海警船你威胁得了吗](https://so.toutiao.com/search?keyword=台学者：大陆海警船你威胁得了吗)
1. [泽连斯基对领土态度为什么突然松动](https://so.toutiao.com/search?keyword=泽连斯基对领土态度为什么突然松动)
1. [红军长征凭什么越走越强](https://so.toutiao.com/search?keyword=红军长征凭什么越走越强)
1. [曝DeepSeek拟筹得约1000亿元融资](https://so.toutiao.com/search?keyword=曝DeepSeek拟筹得约1000亿元融资)
1. [张本智和输球后扶桌跪地](https://so.toutiao.com/search?keyword=张本智和输球后扶桌跪地)
1. [解放军13艘次船舰位台岛周边活动](https://so.toutiao.com/search?keyword=解放军13艘次船舰位台岛周边活动)
1. [媒体：莫让冲突切片消解内容本意](https://so.toutiao.com/search?keyword=媒体：莫让冲突切片消解内容本意)
1. [胡塞与沙特冲突会升级为无差别攻击吗](https://so.toutiao.com/search?keyword=胡塞与沙特冲突会升级为无差别攻击吗)
1. [特朗普为何给内塔尼亚胡送“大礼”](https://so.toutiao.com/search?keyword=特朗普为何给内塔尼亚胡送“大礼”)
1. [马斯克的技术霸权正架空美军事霸权吗](https://so.toutiao.com/search?keyword=马斯克的技术霸权正架空美军事霸权吗)
1. [西安阿达西称现在没有利润还贴钱](https://so.toutiao.com/search?keyword=西安阿达西称现在没有利润还贴钱)
1. [柴油危机影响有多大](https://so.toutiao.com/search?keyword=柴油危机影响有多大)
1. [部分私募产品年内收益告负](https://so.toutiao.com/search?keyword=部分私募产品年内收益告负)
1. [霜降养生不能盲目跟风进补](https://so.toutiao.com/search?keyword=霜降养生不能盲目跟风进补)
1. [乌克兰最好的结局是成为芬兰吗](https://so.toutiao.com/search?keyword=乌克兰最好的结局是成为芬兰吗)
1. [捷达M6正式上市](https://so.toutiao.com/search?keyword=捷达M6正式上市)
1. [基金经理又到“集体反思时刻”了吗](https://so.toutiao.com/search?keyword=基金经理又到“集体反思时刻”了吗)
1. [泽连斯基为何借美媒平台释放和谈信号](https://so.toutiao.com/search?keyword=泽连斯基为何借美媒平台释放和谈信号)
1. [长征颂歌编剧：李雪健的后背都会演戏](https://so.toutiao.com/search?keyword=长征颂歌编剧：李雪健的后背都会演戏)
1. [欧洲多国爆发抗议示威 民众怎么看](https://so.toutiao.com/search?keyword=欧洲多国爆发抗议示威%20民众怎么看)
1. [高反去世男子家人辟谣想找免费直升机](https://so.toutiao.com/search?keyword=高反去世男子家人辟谣想找免费直升机)
1. [专家：A股基本面没问题](https://so.toutiao.com/search?keyword=专家：A股基本面没问题)
1. [印尼股市暴跌背后的资源主权博弈](https://so.toutiao.com/search?keyword=印尼股市暴跌背后的资源主权博弈)
1. [后援会称郭雪芙平安无恙](https://so.toutiao.com/search?keyword=后援会称郭雪芙平安无恙)
1. [人民日报：在新长征路上阔步前行](https://so.toutiao.com/search?keyword=人民日报：在新长征路上阔步前行)
1. [兆易创新核心业务驶入成长快车道](https://so.toutiao.com/search?keyword=兆易创新核心业务驶入成长快车道)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Oct 23 2026 04:02:54 GMT+0800 (China Standard Time) -->

1. [宝马员工争着离职挤崩系统](https://www.zhihu.com/search?q=%E5%AE%9D%E9%A9%AC%E5%91%98%E5%B7%A5%E4%BA%89%E7%9D%80%E7%A6%BB%E8%81%8C%E6%8C%A4%E5%B4%A9%E7%B3%BB%E7%BB%9F)
1. [警方称问界汽车事故司机已遇难](https://www.zhihu.com/search?q=%E8%AD%A6%E6%96%B9%E7%A7%B0%E9%97%AE%E7%95%8C%E6%B1%BD%E8%BD%A6%E4%BA%8B%E6%95%85%E5%8F%B8%E6%9C%BA%E5%B7%B2%E9%81%87%E9%9A%BE)
1. [西藏巴青县发生7.0级地震](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E5%B7%B4%E9%9D%92%E5%8E%BF%E5%8F%91%E7%94%9F7.0%E7%BA%A7%E5%9C%B0%E9%9C%87)
1. [国乒女团2-3不敌日本获亚军](https://www.zhihu.com/search?q=%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A22-3%E4%B8%8D%E6%95%8C%E6%97%A5%E6%9C%AC%E8%8E%B7%E4%BA%9A%E5%86%9B)
1. [拟出台的中国AI禁令震动全球](https://www.zhihu.com/search?q=%E6%8B%9F%E5%87%BA%E5%8F%B0%E7%9A%84%E4%B8%AD%E5%9B%BDAI%E7%A6%81%E4%BB%A4%E9%9C%87%E5%8A%A8%E5%85%A8%E7%90%83)
1. [英伟达市值9天蒸发4万亿](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC9%E5%A4%A9%E8%92%B8%E5%8F%914%E4%B8%87%E4%BA%BF)
1. [中土网民爆发大规模互怼](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9C%9F%E7%BD%91%E6%B0%91%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%92%E6%80%BC)
1. [内娱进入大怀孕时代](https://www.zhihu.com/search?q=%E5%86%85%E5%A8%B1%E8%BF%9B%E5%85%A5%E5%A4%A7%E6%80%80%E5%AD%95%E6%97%B6%E4%BB%A3)
1. [泽连斯基称保留75%领土可达成和平协议](https://www.zhihu.com/search?q=%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E4%BF%9D%E7%95%9975%25%E9%A2%86%E5%9C%9F%E5%8F%AF%E8%BE%BE%E6%88%90%E5%92%8C%E5%B9%B3%E5%8D%8F%E8%AE%AE)
1. [女子情绪失控砸毁30万五粮液](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%E7%A0%B8%E6%AF%8130%E4%B8%87%E4%BA%94%E7%B2%AE%E6%B6%B2)
1. [法国发生近年来最严重暴力骚乱](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E5%8F%91%E7%94%9F%E8%BF%91%E5%B9%B4%E6%9D%A5%E6%9C%80%E4%B8%A5%E9%87%8D%E6%9A%B4%E5%8A%9B%E9%AA%9A%E4%B9%B1)
1. [女子地铁站看书5小时被扣15元](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E5%9C%B0%E9%93%81%E7%AB%99%E7%9C%8B%E4%B9%A65%E5%B0%8F%E6%97%B6%E8%A2%AB%E6%89%A315%E5%85%83)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Oct 22 2026 23:19:10 GMT+0800 (China Standard Time) -->

1. [留美在读女博士答辩失利，向实验室同门咖啡机投毒「丙烯酰胺」，如何看待这一事件？](https://www.zhihu.com/question/2096228188099540200)
1. [女子离婚后发现前夫婚内继承 400 多万房款，起诉要求分割这笔钱财，法院判决支持，如何从法律角度解读？](https://www.zhihu.com/question/2096547342124172800)
1. [如何评价SemiAnalysis认为DeepSeek与华为已形成共生关系？](https://www.zhihu.com/question/2096603053763847000)
1. [医生说现在的鸡都是快速养殖，激素多，吃了对孩子身体不好，是这样吗？](https://www.zhihu.com/question/694420968)
1. [中国拟出台的「AI 出口禁令」会影响使用 AI 产品和中企海外业务吗？将对中美 AI 竞争有何影响？](https://www.zhihu.com/question/2096230307561037800)
1. [乒乓亚锦赛女团决赛，中国队 2-3 不敌日本获女团亚军，如何评价本场比赛？](https://www.zhihu.com/question/2096725438974224400)
1. [中国古代人民为什么不用煤炭当燃料呢？](https://www.zhihu.com/question/331837590)
1. [为什么我国的中学生大部分都不会做引体向上？](https://www.zhihu.com/question/661972031)
1. [iPhone Duo测评出炉，折叠3000次后，折痕明显加深，高负载下发热明显，还有哪些问题值得关注？](https://www.zhihu.com/question/2096555342171563800)
1. [儿子逼父母贷款替其还债被拒，欲断绝父子关系被父亲打致轻伤二级，如何理解法院判父亲免予刑事处罚？](https://www.zhihu.com/question/2096553146264675000)
1. [女子地铁站内看书 5 个小时被扣 15 元，怎么看待地铁超时收费？其中读书空间等消费场景的设置合理吗？](https://www.zhihu.com/question/2096527240208938000)
1. [如何看待 HLE 以「未带多余队服婉拒 TES 交换队服请求」转头 iG 与 Guma 交换成功？](https://www.zhihu.com/question/2096626213141705200)
1. [曝某明星长期借不到高定，自费购买礼服后引该品牌PR暴怒，可能会是谁？为啥自费购买也会引起高奢品牌不满？](https://www.zhihu.com/question/2096378566657012200)
1. [腾讯股价跌破 400 港元创新低，市值较高点缩水近四成，问题出在哪？市场对腾讯的估值逻辑发生哪些转变？](https://www.zhihu.com/question/2096284238119228700)
1. [如何评价宇树发布全新机器人「H2-X功夫传奇 守护」，宣称能徒手抬车、勇斗歹徒？在实际生活中会用在哪？](https://www.zhihu.com/question/2096327185309160700)
1. [日本关键稀土钇储备将耗尽，求助美国敦促中方放宽管制，稀土将耗尽一事将对日方产生多大影响？](https://www.zhihu.com/question/2096043493517013000)
1. [为啥孙策传位给其弟孙权，而不是儿子？](https://www.zhihu.com/question/2094538424543982800)
1. [2627赛季NBA常规赛独行侠 110:128 火箭，如何评价这场比赛？](https://www.zhihu.com/question/2096522772457567500)
1. [国家癌症中心公布发病前五癌症，较二十年前发生变动，胃癌食管癌跌出前五，背后有哪些原因？反映了什么趋势？](https://www.zhihu.com/question/2096009520778582000)
1. [如何评价英雄联盟 S16 全球总决赛入围赛因阴间时间，解说及二路主播集体加班播到「神志不清」？](https://www.zhihu.com/question/2095377732439912700)
1. [明代运粮为何不走海运？](https://www.zhihu.com/question/527845779)
1. [吴艳妮面对采访说自己训练强度能达到12秒7、12秒6的程度，但是比赛就是达不到，你怎么看？](https://www.zhihu.com/question/2095964207070105900)
1. [iPhone Duo要开卖了微信等应用还没适配，为何会出现这样的错位？这会对购买意愿有多大影响？](https://www.zhihu.com/question/2096569066114611000)
1. [职场上，为什么不要轻易跟同事说心里话？](https://www.zhihu.com/question/2094057918685618700)
1. [有哪些在体制内里明白的道理？](https://www.zhihu.com/question/10238080811)
1. [特朗普称将砸逾 4 亿美元助共和党选举，或成美国历史上烧钱最多的中期选举，共和党胜算有多大？](https://www.zhihu.com/question/2096563694825992700)
1. [为什么曼联的临时主帅成绩看着还行，一转正就拉胯了？](https://www.zhihu.com/question/2094106102753448200)
1. [为什么说「及时止损」是一种清醒？](https://www.zhihu.com/question/2094341501518083800)
1. [带孩子去某快餐店吃饭，妈妈还在等着取餐，过来时一看，孩子在和别人家（不认识）一起吃他们的餐，气不气？](https://www.zhihu.com/question/2096382258659776500)
1. [为什么职场沟通越讲究「体面」，真正的分歧反而越难摆上台面？](https://www.zhihu.com/question/2096205839128158700)
1. [多款 3A 老游戏被 AI 光速反编译并移植网页端，将对游戏行业带来哪些冲击？](https://www.zhihu.com/question/2094620721343481600)
1. [车灯新国标公布后，「外显大屏」形态的像素灯将成为历史，汽车大灯的技术发展方向将如何调整？](https://www.zhihu.com/question/2095889644000733200)
1. [红果短剧宣布将下线金币功能，这一商业决策背后有哪些考虑？是不需要靠「薅羊毛」引流实现增长了吗？](https://www.zhihu.com/question/2096299255153391600)
1. [乒乓球亚锦赛男团半决赛，国乒3-1中国台北队，将在决赛对阵韩国队，如何评价本场比赛？](https://www.zhihu.com/question/2096596376046126300)
1. [泽连斯基表示，乌克兰愿在保留至少75%领土控制权的基础上达成和平协议，你怎么看？](https://www.zhihu.com/question/2096328160241633000)
1. [怎么看 Claude 推出 Claude Duet， Personal Bot 真的是下一个战场？](https://www.zhihu.com/question/2096518672877621800)
1. [民进党当局拒绝艺人张凌赫赴台交流，国台办回应称「与广大台湾同胞的意愿背道而驰」，如何看待这件事？](https://www.zhihu.com/question/2096186688091459600)
1. [美国政府指示各机构停用 DeepSeek ，外交部表示反对将科技经贸问题政治化，美国此举有何意图？](https://www.zhihu.com/question/2095898196539073300)
1. [杨瀚森打满第四节得5分3 板，2627赛季NBA常规赛，太阳 83:124 开拓者，如何评价这场比赛？](https://www.zhihu.com/question/2096545549797409500)
1. [如何评价10月22日发布的《影之刃零》最终PV？](https://www.zhihu.com/question/2096556684730709200)
1. [3Blue1Brown 称「现在是学数学的最佳时机」，如何看待此观点？](https://www.zhihu.com/question/2095500647957378300)
1. [泡泡玛特五连跌，段永平称会继续买入，但不会超过公司的 10%，如何看待泡泡玛特近期的表现？](https://www.zhihu.com/question/2096540698732225000)
1. [“汉末三杰”的皇甫嵩、朱儁和卢植三人谁最厉害？](https://www.zhihu.com/question/2077397398129853200)
1. [理想汽车发布电池保障政策，称将对电池不自燃提供终身保障，你认为这一举措能够赢得市场信任吗？](https://www.zhihu.com/question/2095997829340558600)
1. [OpenAI的722篇论文之后，未来基础数学研究者将何去何从？](https://www.zhihu.com/question/2092262007995213300)
1. [如果给你1000元「改造基金」，对附近的公共设施或场所做一些方便视障朋友生活的小改造，你有什么巧思？](https://www.zhihu.com/question/2088680825684547600)
1. [为什么母语记忆一个词基本上不会忘记，而学习外语第二天就搞忘了呢？](https://www.zhihu.com/question/7445010389)
1. [NBA常规赛湖人127:105大胜勇士，如何评价本场比赛？](https://www.zhihu.com/question/2096570138963211000)
1. [能分享一顿你特别日常的一顿晚餐吗？](https://www.zhihu.com/question/1983200338166167000)
1. [张雪公开求助如何让食堂的米饭好吃，不少人送米上门，张雪称不是米的问题，食堂做米饭有哪些技术难点？](https://www.zhihu.com/question/2096179248318911500)
1. [已知西瓜瓤在西瓜被切开后是红色的，那切开之前是什么颜色的？](https://www.zhihu.com/question/62083107)
1. [如何评价BioWare于10月22日宣布关闭，为何一个诞生过博德之门等游戏的公司最终走向如此下场？](https://www.zhihu.com/question/2096410582849163500)
1. [古代穷人为什么不搬到海边去？海边鱼多不是饿不死吗？](https://www.zhihu.com/question/2095863857705239800)
1. [南京警方回应「留学生在俄身披旭日旗」，称已有专门的部门在处理，哪些信息值得关注？](https://www.zhihu.com/question/2096367479593199600)
1. [你听过哪些「被逼到没有退路，最后自己硬是走出一条路」的故事？](https://www.zhihu.com/question/2091827536925873000)
1. [网友称黄豆吃多在列车连放128个闷屁，疑多位同车厢乘客称被臭到怀疑人生，黄豆吃多「危害」真有这么大吗？](https://www.zhihu.com/question/2096324424190228000)
1. [国家癌症中心发布数据，甲状腺癌跃居发病第 3 位，20～39 岁男女发病率最高，为什么会这样？](https://www.zhihu.com/question/2096183185604399900)
1. [辛芷蕾凭《日掛中天》获威尼斯影后却未入围金鸡奖，如何看待这一结果？](https://www.zhihu.com/question/2095497362407960600)
1. [遇到碰撞起火事故，车企宣传的AEB，真的能救命吗？](https://www.zhihu.com/question/2096295258988474400)
1. [中国体操女队时隔 20 年再夺世锦赛女团金牌，如何评价姑娘们的发挥？](https://www.zhihu.com/question/2096473940185162200)
1. [如何评价《offer8》医学季定档后引发医学生集体吐槽？真实的医学生规培现状与节目呈现差别有多大？](https://www.zhihu.com/question/2096268242515751700)
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
<!-- 最后更新时间 Fri Oct 23 2026 03:20:10 GMT+0800 (China Standard Time) -->

1. [大力弘扬伟大长征精神](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E5%8A%9B%E5%BC%98%E6%89%AC%E4%BC%9F%E5%A4%A7%E9%95%BF%E5%BE%81%E7%B2%BE%E7%A5%9E%23&Refer=new_time)
1. [西藏7级地震](https://s.weibo.com//weibo?q=%E8%A5%BF%E8%97%8F7%E7%BA%A7%E5%9C%B0%E9%9C%87&t=31&band_rank=1&Refer=top)
1. [后会友期 想请不敢请的都放观察室了](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E6%83%B3%E8%AF%B7%E4%B8%8D%E6%95%A2%E8%AF%B7%E7%9A%84%E9%83%BD%E6%94%BE%E8%A7%82%E5%AF%9F%E5%AE%A4%E4%BA%86&t=31&band_rank=2&Refer=top)
1. [向着胜利再出发](https://s.weibo.com//weibo?q=%23%E5%90%91%E7%9D%80%E8%83%9C%E5%88%A9%E5%86%8D%E5%87%BA%E5%8F%91%23&t=31&band_rank=3&Refer=top)
1. [国乒男团夺亚锦赛第26冠](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%A4%BA%E4%BA%9A%E9%94%A6%E8%B5%9B%E7%AC%AC26%E5%86%A0%23&t=31&band_rank=4&Refer=top)
1. [国乒女团2比3日本女团](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A22%E6%AF%943%E6%97%A5%E6%9C%AC%E5%A5%B3%E5%9B%A2%23&t=31&band_rank=5&Refer=top)
1. [马天宇低谷期找杨幂谈心](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BD%8E%E8%B0%B7%E6%9C%9F%E6%89%BE%E6%9D%A8%E5%B9%82%E8%B0%88%E5%BF%83%23&t=31&band_rank=6&Refer=top)
1. [在星巴克开会1小时被提醒点单5次](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E5%BC%80%E4%BC%9A1%E5%B0%8F%E6%97%B6%E8%A2%AB%E6%8F%90%E9%86%92%E7%82%B9%E5%8D%955%E6%AC%A1%23&t=31&band_rank=7&Refer=top)
1. [赵丽颖霍建华 剧播不好别怪妆造](https://s.weibo.com//weibo?q=%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%9C%8D%E5%BB%BA%E5%8D%8E%20%E5%89%A7%E6%92%AD%E4%B8%8D%E5%A5%BD%E5%88%AB%E6%80%AA%E5%A6%86%E9%80%A0&t=31&band_rank=8&Refer=top)
1. [直击西藏那曲7.0级地震](https://s.weibo.com//weibo?q=%23%E7%9B%B4%E5%87%BB%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B27.0%E7%BA%A7%E5%9C%B0%E9%9C%87%23&t=31&band_rank=9&Refer=top)
1. [虞书欣怎么笑成这样](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%80%8E%E4%B9%88%E7%AC%91%E6%88%90%E8%BF%99%E6%A0%B7%23&t=31&band_rank=10&Refer=top)
1. [婚礼发言说虽然不是我的妻子](https://s.weibo.com//weibo?q=%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%E8%AF%B4%E8%99%BD%E7%84%B6%E4%B8%8D%E6%98%AF%E6%88%91%E7%9A%84%E5%A6%BB%E5%AD%90&t=31&band_rank=11&Refer=top)
1. [41岁女子存百万后去世](https://s.weibo.com//weibo?q=41%E5%B2%81%E5%A5%B3%E5%AD%90%E5%AD%98%E7%99%BE%E4%B8%87%E5%90%8E%E5%8E%BB%E4%B8%96&t=31&band_rank=12&Refer=top)
1. [人民日报评张凌赫申请赴台遭拒](https://s.weibo.com//weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B3%E8%AF%B7%E8%B5%B4%E5%8F%B0%E9%81%AD%E6%8B%92%23&t=31&band_rank=13&Refer=top)
1. [美股](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1&t=31&band_rank=14&Refer=top)
1. [孙俪邓超女儿小花跳舞总是撞上其他舞者](https://s.weibo.com//weibo?q=%23%E5%AD%99%E4%BF%AA%E9%82%93%E8%B6%85%E5%A5%B3%E5%84%BF%E5%B0%8F%E8%8A%B1%E8%B7%B3%E8%88%9E%E6%80%BB%E6%98%AF%E6%92%9E%E4%B8%8A%E5%85%B6%E4%BB%96%E8%88%9E%E8%80%85%23&t=31&band_rank=15&Refer=top)
1. [张家齐和妈妈的关系触痛网友](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%92%8C%E5%A6%88%E5%A6%88%E7%9A%84%E5%85%B3%E7%B3%BB%E8%A7%A6%E7%97%9B%E7%BD%91%E5%8F%8B&t=31&band_rank=16&Refer=top)
1. [张萌后悔找马天宇上节目](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E5%90%8E%E6%82%94%E6%89%BE%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%8A%E8%8A%82%E7%9B%AE%23&t=31&band_rank=17&Refer=top)
1. [白鹿工作室注销](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%B3%A8%E9%94%80%23&t=31&band_rank=18&Refer=top)
1. [黄婷婷李艺彤闹掰谁在释怀谁在获利](https://s.weibo.com//weibo?q=%23%E9%BB%84%E5%A9%B7%E5%A9%B7%E6%9D%8E%E8%89%BA%E5%BD%A4%E9%97%B9%E6%8E%B0%E8%B0%81%E5%9C%A8%E9%87%8A%E6%80%80%E8%B0%81%E5%9C%A8%E8%8E%B7%E5%88%A9%23&t=31&band_rank=19&Refer=top)
1. [人民日报评医学生盲猜病情](https://s.weibo.com//weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%8C%BB%E5%AD%A6%E7%94%9F%E7%9B%B2%E7%8C%9C%E7%97%85%E6%83%85%23&t=31&band_rank=20&Refer=top)
1. [月嫂说宝宝只有两件衣服](https://s.weibo.com//weibo?q=%E6%9C%88%E5%AB%82%E8%AF%B4%E5%AE%9D%E5%AE%9D%E5%8F%AA%E6%9C%89%E4%B8%A4%E4%BB%B6%E8%A1%A3%E6%9C%8D&t=31&band_rank=21&Refer=top)
1. [厉娜 许飞](https://s.weibo.com//weibo?q=%E5%8E%89%E5%A8%9C%20%E8%AE%B8%E9%A3%9E&t=31&band_rank=22&Refer=top)
1. [国乒女团 桥本帆乃香](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%20%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99&t=31&band_rank=23&Refer=top)
1. [女子称惠州海景房跌剩一千八](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%83%A0%E5%B7%9E%E6%B5%B7%E6%99%AF%E6%88%BF%E8%B7%8C%E5%89%A9%E4%B8%80%E5%8D%83%E5%85%AB&t=31&band_rank=24&Refer=top)
1. [坠亡幼童父亲回应扔掉孩子遗物](https://s.weibo.com//weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E6%89%94%E6%8E%89%E5%AD%A9%E5%AD%90%E9%81%97%E7%89%A9%23&t=31&band_rank=25&Refer=top)
1. [陈天润 前女友](https://s.weibo.com//weibo?q=%E9%99%88%E5%A4%A9%E6%B6%A6%20%E5%89%8D%E5%A5%B3%E5%8F%8B&t=31&band_rank=26&Refer=top)
1. [在北京没有社交的原因](https://s.weibo.com//weibo?q=%E5%9C%A8%E5%8C%97%E4%BA%AC%E6%B2%A1%E6%9C%89%E7%A4%BE%E4%BA%A4%E7%9A%84%E5%8E%9F%E5%9B%A0&t=31&band_rank=27&Refer=top)
1. [魏娆在陆濯最爱她的时候选择和离](https://s.weibo.com//weibo?q=%23%E9%AD%8F%E5%A8%86%E5%9C%A8%E9%99%86%E6%BF%AF%E6%9C%80%E7%88%B1%E5%A5%B9%E7%9A%84%E6%97%B6%E5%80%99%E9%80%89%E6%8B%A9%E5%92%8C%E7%A6%BB%23&t=31&band_rank=28&Refer=top)
1. [A股 科技股](https://s.weibo.com//weibo?q=A%E8%82%A1%20%E7%A7%91%E6%8A%80%E8%82%A1&t=31&band_rank=29&Refer=top)
1. [曝奥迪华为合作开发A8](https://s.weibo.com//weibo?q=%E6%9B%9D%E5%A5%A5%E8%BF%AA%E5%8D%8E%E4%B8%BA%E5%90%88%E4%BD%9C%E5%BC%80%E5%8F%91A8&t=31&band_rank=30&Refer=top)
1. [王彦霖回应肖战说倪大红赢了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%BD%A6%E9%9C%96%E5%9B%9E%E5%BA%94%E8%82%96%E6%88%98%E8%AF%B4%E5%80%AA%E5%A4%A7%E7%BA%A2%E8%B5%A2%E4%BA%86%23&t=31&band_rank=31&Refer=top)
1. [亚锦赛国乒男团1比0韩国](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A21%E6%AF%940%E9%9F%A9%E5%9B%BD%23&t=31&band_rank=32&Refer=top)
1. [刘宇宁 薄肌变大胸](https://s.weibo.com//weibo?q=%E5%88%98%E5%AE%87%E5%AE%81%20%E8%96%84%E8%82%8C%E5%8F%98%E5%A4%A7%E8%83%B8&t=31&band_rank=33&Refer=top)
1. [虞书欣八年前的活动只有三个粉丝](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%85%AB%E5%B9%B4%E5%89%8D%E7%9A%84%E6%B4%BB%E5%8A%A8%E5%8F%AA%E6%9C%89%E4%B8%89%E4%B8%AA%E7%B2%89%E4%B8%9D%23&t=31&band_rank=34&Refer=top)
1. [两部门派出工作组赶赴西藏震区](https://s.weibo.com//weibo?q=%23%E4%B8%A4%E9%83%A8%E9%97%A8%E6%B4%BE%E5%87%BA%E5%B7%A5%E4%BD%9C%E7%BB%84%E8%B5%B6%E8%B5%B4%E8%A5%BF%E8%97%8F%E9%9C%87%E5%8C%BA%23&t=31&band_rank=35&Refer=top)
1. [西藏地震暂无人员伤亡](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E5%9C%B0%E9%9C%87%E6%9A%82%E6%97%A0%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%23&t=31&band_rank=36&Refer=top)
1. [Zeus谈婉拒TES交换队服](https://s.weibo.com//weibo?q=%23Zeus%E8%B0%88%E5%A9%89%E6%8B%92TES%E4%BA%A4%E6%8D%A2%E9%98%9F%E6%9C%8D%23&t=31&band_rank=37&Refer=top)
1. [亚锦赛国乒男团2比0韩国](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A22%E6%AF%940%E9%9F%A9%E5%9B%BD%23&t=31&band_rank=38&Refer=top)
1. [西藏那曲7.0级地震最近县城57公里](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B27.0%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%9C%80%E8%BF%91%E5%8E%BF%E5%9F%8E57%E5%85%AC%E9%87%8C%23&t=31&band_rank=39&Refer=top)
1. [何炅黄磊回乌镇蘑菇屋了](https://s.weibo.com//weibo?q=%23%E4%BD%95%E7%82%85%E9%BB%84%E7%A3%8A%E5%9B%9E%E4%B9%8C%E9%95%87%E8%98%91%E8%8F%87%E5%B1%8B%E4%BA%86%23&t=31&band_rank=40&Refer=top)
1. [厉娜许飞当面对质](https://s.weibo.com//weibo?q=%E5%8E%89%E5%A8%9C%E8%AE%B8%E9%A3%9E%E5%BD%93%E9%9D%A2%E5%AF%B9%E8%B4%A8&t=31&band_rank=41&Refer=top)
1. [试拍王一博被朱珠美晕](https://s.weibo.com//weibo?q=%23%E8%AF%95%E6%8B%8D%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%A2%AB%E6%9C%B1%E7%8F%A0%E7%BE%8E%E6%99%95%23&t=31&band_rank=42&Refer=top)
1. [九尾带队晋级淘汰赛](https://s.weibo.com//weibo?q=%23%E4%B9%9D%E5%B0%BE%E5%B8%A6%E9%98%9F%E6%99%8B%E7%BA%A7%E6%B7%98%E6%B1%B0%E8%B5%9B%23&t=31&band_rank=43&Refer=top)
1. [李子祺10篇SCI被指挂名水刊](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%AD%90%E7%A5%BA10%E7%AF%87SCI%E8%A2%AB%E6%8C%87%E6%8C%82%E5%90%8D%E6%B0%B4%E5%88%8A&t=31&band_rank=44&Refer=top)
1. [侯英超称打削球没有捷径](https://s.weibo.com//weibo?q=%E4%BE%AF%E8%8B%B1%E8%B6%85%E7%A7%B0%E6%89%93%E5%89%8A%E7%90%83%E6%B2%A1%E6%9C%89%E6%8D%B7%E5%BE%84&t=31&band_rank=45&Refer=top)
1. [姜妍小城良方演技口碑](https://s.weibo.com//weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E6%BC%94%E6%8A%80%E5%8F%A3%E7%A2%91%23&t=31&band_rank=46&Refer=top)
1. [国乒男团vs韩国](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2vs%E9%9F%A9%E5%9B%BD&t=31&band_rank=47&Refer=top)
1. [抖音被指侵权视频恢复上架](https://s.weibo.com//weibo?q=%E6%8A%96%E9%9F%B3%E8%A2%AB%E6%8C%87%E4%BE%B5%E6%9D%83%E8%A7%86%E9%A2%91%E6%81%A2%E5%A4%8D%E4%B8%8A%E6%9E%B6&t=31&band_rank=48&Refer=top)
1. [巴青地震亲历者讲述房子震得嘎嘎叫](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E9%9D%92%E5%9C%B0%E9%9C%87%E4%BA%B2%E5%8E%86%E8%80%85%E8%AE%B2%E8%BF%B0%E6%88%BF%E5%AD%90%E9%9C%87%E5%BE%97%E5%98%8E%E5%98%8E%E5%8F%AB%23&t=31&band_rank=49&Refer=top)
1. [张凌赫田曦薇逐玉嫁金钗串台了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E9%80%90%E7%8E%89%E5%AB%81%E9%87%91%E9%92%97%E4%B8%B2%E5%8F%B0%E4%BA%86%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
