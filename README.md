# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-23 04:09:05

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
<!-- 最后更新时间 Fri Oct 23 2026 06:42:20 GMT+0800 (China Standard Time) -->

1. [西藏那曲巴青县发生7.0级地震](https://so.toutiao.com/search?keyword=西藏那曲巴青县发生7.0级地震)
1. [大火逼近中国 日本道歉岂能只道一半](https://so.toutiao.com/search?keyword=大火逼近中国%20日本道歉岂能只道一半)
1. [新兴领域良性循环加快形成](https://so.toutiao.com/search?keyword=新兴领域良性循环加快形成)
1. [女子100天零违章获奖1吨汽油](https://so.toutiao.com/search?keyword=女子100天零违章获奖1吨汽油)
1. [时速400公里的高铁真要来了吗](https://so.toutiao.com/search?keyword=时速400公里的高铁真要来了吗)
1. [人民日报评星巴克“消费入座”](https://so.toutiao.com/search?keyword=人民日报评星巴克“消费入座”)
1. [张本智和被打出0-11惨败](https://so.toutiao.com/search?keyword=张本智和被打出0-11惨败)
1. [女子叫顺风车司机竟让她来开](https://so.toutiao.com/search?keyword=女子叫顺风车司机竟让她来开)
1. [“蹭座”的人走了星巴克的难题还在](https://so.toutiao.com/search?keyword=“蹭座”的人走了星巴克的难题还在)
1. [亚锦赛国乒女团决赛不敌日本](https://so.toutiao.com/search?keyword=亚锦赛国乒女团决赛不敌日本)
1. [女子称地铁站内看5小时书被扣15元](https://so.toutiao.com/search?keyword=女子称地铁站内看5小时书被扣15元)
1. [贾乃亮从早播到晚](https://so.toutiao.com/search?keyword=贾乃亮从早播到晚)
1. [外地患者组团到高校传播艾滋病不实](https://so.toutiao.com/search?keyword=外地患者组团到高校传播艾滋病不实)
1. [演唱会黄牛一个月获利100万](https://so.toutiao.com/search?keyword=演唱会黄牛一个月获利100万)
1. [72岁李雪健再登舞台](https://so.toutiao.com/search?keyword=72岁李雪健再登舞台)
1. [乌克兰外长会见中国大使：感谢中方](https://so.toutiao.com/search?keyword=乌克兰外长会见中国大使：感谢中方)
1. [杭州大二学生开一人公司营收破60万](https://so.toutiao.com/search?keyword=杭州大二学生开一人公司营收破60万)
1. [解放军13艘次船舰位台岛周边活动](https://so.toutiao.com/search?keyword=解放军13艘次船舰位台岛周边活动)
1. [人民币升值的真正推手是什么](https://so.toutiao.com/search?keyword=人民币升值的真正推手是什么)
1. [“大9”车型混战 万辆爆款也站不稳了](https://so.toutiao.com/search?keyword=“大9”车型混战%20万辆爆款也站不稳了)
1. [捷达M6正式上市](https://so.toutiao.com/search?keyword=捷达M6正式上市)
1. [人民日报评综艺里医学生盲猜病情](https://so.toutiao.com/search?keyword=人民日报评综艺里医学生盲猜病情)
1. [北京市委就夏林茂被查表态](https://so.toutiao.com/search?keyword=北京市委就夏林茂被查表态)
1. [邓超迪士尼偶遇应采儿一家](https://so.toutiao.com/search?keyword=邓超迪士尼偶遇应采儿一家)
1. [台学者：大陆海警船你威胁得了吗](https://so.toutiao.com/search?keyword=台学者：大陆海警船你威胁得了吗)
1. [iPhone Duo折叠3000次后折痕加深](https://so.toutiao.com/search?keyword=iPhone%20Duo折叠3000次后折痕加深)
1. [乌克兰最好的结局是成为芬兰吗](https://so.toutiao.com/search?keyword=乌克兰最好的结局是成为芬兰吗)
1. [长征颂歌编剧：李雪健的后背都会演戏](https://so.toutiao.com/search?keyword=长征颂歌编剧：李雪健的后背都会演戏)
1. [张本智和输球后扶桌跪地](https://so.toutiao.com/search?keyword=张本智和输球后扶桌跪地)
1. [马天宇与张萌重聚修复好友关系](https://so.toutiao.com/search?keyword=马天宇与张萌重聚修复好友关系)
1. [北京市副市长夏林茂被查](https://so.toutiao.com/search?keyword=北京市副市长夏林茂被查)
1. [红军长征凭什么越走越强](https://so.toutiao.com/search?keyword=红军长征凭什么越走越强)
1. [欧洲多国爆发抗议示威 民众怎么看](https://so.toutiao.com/search?keyword=欧洲多国爆发抗议示威%20民众怎么看)
1. [大众全球召回7.27万辆电动车](https://so.toutiao.com/search?keyword=大众全球召回7.27万辆电动车)
1. [泽连斯基对领土态度为什么突然松动](https://so.toutiao.com/search?keyword=泽连斯基对领土态度为什么突然松动)
1. [马斯克的技术霸权正架空美军事霸权吗](https://so.toutiao.com/search?keyword=马斯克的技术霸权正架空美军事霸权吗)
1. [霜降养生不能盲目跟风进补](https://so.toutiao.com/search?keyword=霜降养生不能盲目跟风进补)
1. [牛市逻辑真的不在了吗](https://so.toutiao.com/search?keyword=牛市逻辑真的不在了吗)
1. [高反去世男子家人辟谣想找免费直升机](https://so.toutiao.com/search?keyword=高反去世男子家人辟谣想找免费直升机)
1. [西安阿达西称现在没有利润还贴钱](https://so.toutiao.com/search?keyword=西安阿达西称现在没有利润还贴钱)
1. [胡塞与沙特冲突会升级为无差别攻击吗](https://so.toutiao.com/search?keyword=胡塞与沙特冲突会升级为无差别攻击吗)
1. [泽连斯基为何借美媒平台释放和谈信号](https://so.toutiao.com/search?keyword=泽连斯基为何借美媒平台释放和谈信号)
1. [曝DeepSeek拟筹得约1000亿元融资](https://so.toutiao.com/search?keyword=曝DeepSeek拟筹得约1000亿元融资)
1. [解放军演练海岛起降](https://so.toutiao.com/search?keyword=解放军演练海岛起降)
1. [柴油危机影响有多大](https://so.toutiao.com/search?keyword=柴油危机影响有多大)
1. [孙坚谈及已故继父落泪](https://so.toutiao.com/search?keyword=孙坚谈及已故继父落泪)
1. [特朗普为何给内塔尼亚胡送“大礼”](https://so.toutiao.com/search?keyword=特朗普为何给内塔尼亚胡送“大礼”)
1. [《令人心动的offer8》为何引争议](https://so.toutiao.com/search?keyword=《令人心动的offer8》为何引争议)
1. [基金经理又到“集体反思时刻”了吗](https://so.toutiao.com/search?keyword=基金经理又到“集体反思时刻”了吗)
1. [印尼股市暴跌背后的资源主权博弈](https://so.toutiao.com/search?keyword=印尼股市暴跌背后的资源主权博弈)
1. [媒体：莫让冲突切片消解内容本意](https://so.toutiao.com/search?keyword=媒体：莫让冲突切片消解内容本意)
1. [部分私募产品年内收益告负](https://so.toutiao.com/search?keyword=部分私募产品年内收益告负)
1. [专家：A股基本面没问题](https://so.toutiao.com/search?keyword=专家：A股基本面没问题)
1. [后援会称郭雪芙平安无恙](https://so.toutiao.com/search?keyword=后援会称郭雪芙平安无恙)
1. [人民日报：在新长征路上阔步前行](https://so.toutiao.com/search?keyword=人民日报：在新长征路上阔步前行)
1. [兆易创新核心业务驶入成长快车道](https://so.toutiao.com/search?keyword=兆易创新核心业务驶入成长快车道)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Oct 23 2026 07:19:17 GMT+0800 (China Standard Time) -->

1. [西藏那曲地震已造成16死46伤](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B2%E5%9C%B0%E9%9C%87%E5%B7%B2%E9%80%A0%E6%88%9016%E6%AD%BB46%E4%BC%A4)
1. [宝马员工争着离职挤崩系统](https://www.zhihu.com/search?q=%E5%AE%9D%E9%A9%AC%E5%91%98%E5%B7%A5%E4%BA%89%E7%9D%80%E7%A6%BB%E8%81%8C%E6%8C%A4%E5%B4%A9%E7%B3%BB%E7%BB%9F)
1. [警方称问界汽车事故司机已遇难](https://www.zhihu.com/search?q=%E8%AD%A6%E6%96%B9%E7%A7%B0%E9%97%AE%E7%95%8C%E6%B1%BD%E8%BD%A6%E4%BA%8B%E6%95%85%E5%8F%B8%E6%9C%BA%E5%B7%B2%E9%81%87%E9%9A%BE)
1. [拟出台的中国AI禁令震动全球](https://www.zhihu.com/search?q=%E6%8B%9F%E5%87%BA%E5%8F%B0%E7%9A%84%E4%B8%AD%E5%9B%BDAI%E7%A6%81%E4%BB%A4%E9%9C%87%E5%8A%A8%E5%85%A8%E7%90%83)
1. [中土网民爆发大规模互怼](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9C%9F%E7%BD%91%E6%B0%91%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%92%E6%80%BC)
1. [英伟达市值9天蒸发4万亿](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC9%E5%A4%A9%E8%92%B8%E5%8F%914%E4%B8%87%E4%BA%BF)
1. [内娱进入大怀孕时代](https://www.zhihu.com/search?q=%E5%86%85%E5%A8%B1%E8%BF%9B%E5%85%A5%E5%A4%A7%E6%80%80%E5%AD%95%E6%97%B6%E4%BB%A3)
1. [泽连斯基称保留75%领土可达成和平协议](https://www.zhihu.com/search?q=%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E4%BF%9D%E7%95%9975%25%E9%A2%86%E5%9C%9F%E5%8F%AF%E8%BE%BE%E6%88%90%E5%92%8C%E5%B9%B3%E5%8D%8F%E8%AE%AE)
1. [女子情绪失控砸毁30万五粮液](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%E7%A0%B8%E6%AF%8130%E4%B8%87%E4%BA%94%E7%B2%AE%E6%B6%B2)
1. [法国发生近年来最严重暴力骚乱](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E5%8F%91%E7%94%9F%E8%BF%91%E5%B9%B4%E6%9D%A5%E6%9C%80%E4%B8%A5%E9%87%8D%E6%9A%B4%E5%8A%9B%E9%AA%9A%E4%B9%B1)
1. [女子地铁站看书5小时被扣15元](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E5%9C%B0%E9%93%81%E7%AB%99%E7%9C%8B%E4%B9%A65%E5%B0%8F%E6%97%B6%E8%A2%AB%E6%89%A315%E5%85%83)
1. [DeepSeek新模型名登顶最差榜](https://www.zhihu.com/search?q=DeepSeek%E6%96%B0%E6%A8%A1%E5%9E%8B%E5%90%8D%E7%99%BB%E9%A1%B6%E6%9C%80%E5%B7%AE%E6%A6%9C)
1. [西藏巴青县发生7.0级地震](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E5%B7%B4%E9%9D%92%E5%8E%BF%E5%8F%91%E7%94%9F7.0%E7%BA%A7%E5%9C%B0%E9%9C%87)
1. [国乒女团2-3不敌日本获亚军](https://www.zhihu.com/search?q=%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A22-3%E4%B8%8D%E6%95%8C%E6%97%A5%E6%9C%AC%E8%8E%B7%E4%BA%9A%E5%86%9B)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Oct 23 2026 04:09:05 GMT+0800 (China Standard Time) -->

1. [留美在读女博士答辩失利，向实验室同门咖啡机投毒「丙烯酰胺」，如何看待这一事件？](https://www.zhihu.com/question/2096228188099540200)
1. [如何评价SemiAnalysis认为DeepSeek与华为已形成共生关系？](https://www.zhihu.com/question/2096603053763847000)
1. [乒乓亚锦赛女团决赛，中国队 2-3 不敌日本获女团亚军，如何评价本场比赛？](https://www.zhihu.com/question/2096725438974224400)
1. [iPhone Duo测评出炉，折叠3000次后，折痕明显加深，高负载下发热明显，还有哪些问题值得关注？](https://www.zhihu.com/question/2096555342171563800)
1. [女子离婚后发现前夫婚内继承 400 多万房款，起诉要求分割这笔钱财，法院判决支持，如何从法律角度解读？](https://www.zhihu.com/question/2096547342124172800)
1. [中国拟出台的「AI 出口禁令」会影响使用 AI 产品和中企海外业务吗？将对中美 AI 竞争有何影响？](https://www.zhihu.com/question/2096230307561037800)
1. [中国古代人民为什么不用煤炭当燃料呢？](https://www.zhihu.com/question/331837590)
1. [西藏那曲市巴青县发生 7.0 级地震，当地目前具体情况如何？你那边有震感吗？](https://www.zhihu.com/question/2096734873637445600)
1. [如何看待 HLE 以「未带多余队服婉拒 TES 交换队服请求」转头 iG 与 Guma 交换成功？](https://www.zhihu.com/question/2096626213141705200)
1. [如何评价宇树发布全新机器人「H2-X功夫传奇 守护」，宣称能徒手抬车、勇斗歹徒？在实际生活中会用在哪？](https://www.zhihu.com/question/2096327185309160700)
1. [乒乓球亚锦赛男团决赛，中国 3-0 韩国，队史第 26 次夺冠，如何评价本场比赛？](https://www.zhihu.com/question/2096757965445411000)
1. [你知道的最冷最冷的冷知识是啥？](https://www.zhihu.com/question/1917673665325148000)
1. [红果短剧日活超「爱优腾芒」四家总和，原因有哪些？](https://www.zhihu.com/question/2087882162238382600)
1. [如何看待10月21日前后nodejs PHP Oracle Chrome Linux都爆出超高危漏洞？](https://www.zhihu.com/question/2096392948342580000)
1. [儿子逼父母贷款替其还债被拒，欲断绝父子关系被父亲打致轻伤二级，如何理解法院判父亲免予刑事处罚？](https://www.zhihu.com/question/2096553146264675000)
1. [日本关键稀土钇储备将耗尽，求助美国敦促中方放宽管制，稀土将耗尽一事将对日方产生多大影响？](https://www.zhihu.com/question/2096043493517013000)
1. [曝某明星长期借不到高定，自费购买礼服后引该品牌PR暴怒，可能会是谁？为啥自费购买也会引起高奢品牌不满？](https://www.zhihu.com/question/2096378566657012200)
1. [如何评价英雄联盟 S16 全球总决赛入围赛因阴间时间，解说及二路主播集体加班播到「神志不清」？](https://www.zhihu.com/question/2095377732439912700)
1. [女子地铁站内看书 5 个小时被扣 15 元，怎么看待地铁超时收费？其中读书空间等消费场景的设置合理吗？](https://www.zhihu.com/question/2096527240208938000)
1. [医生说现在的鸡都是快速养殖，激素多，吃了对孩子身体不好，是这样吗？](https://www.zhihu.com/question/694420968)
1. [腾讯股价跌破 400 港元创新低，市值较高点缩水近四成，问题出在哪？市场对腾讯的估值逻辑发生哪些转变？](https://www.zhihu.com/question/2096284238119228700)
1. [AI 写代码太快，Review 不过来，要不要违背祖训放弃 Review？](https://www.zhihu.com/question/2094239068095602700)
1. [iPhone Duo要开卖了微信等应用还没适配，为何会出现这样的错位？这会对购买意愿有多大影响？](https://www.zhihu.com/question/2096569066114611000)
1. [吴艳妮面对采访说自己训练强度能达到12秒7、12秒6的程度，但是比赛就是达不到，你怎么看？](https://www.zhihu.com/question/2095964207070105900)
1. [兵马俑明明很写实，为什么中国雕塑后来“放弃” 了这条路？](https://www.zhihu.com/question/2095898029207336000)
1. [特朗普称将砸逾 4 亿美元助共和党选举，或成美国历史上烧钱最多的中期选举，共和党胜算有多大？](https://www.zhihu.com/question/2096563694825992700)
1. [带孩子去某快餐店吃饭，妈妈还在等着取餐，过来时一看，孩子在和别人家（不认识）一起吃他们的餐，气不气？](https://www.zhihu.com/question/2096382258659776500)
1. [你有哪些感悟或者人生经验告诉现在的年轻人？](https://www.zhihu.com/question/1919785941905684200)
1. [你心中最下饭的素菜是哪一道？](https://www.zhihu.com/question/2083620192060453000)
1. [能分享一顿你特别日常的一顿晚餐吗？](https://www.zhihu.com/question/1983200338166167000)

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
<!-- 最后更新时间 Fri Oct 23 2026 06:29:17 GMT+0800 (China Standard Time) -->

1. [大力弘扬伟大长征精神](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E5%8A%9B%E5%BC%98%E6%89%AC%E4%BC%9F%E5%A4%A7%E9%95%BF%E5%BE%81%E7%B2%BE%E7%A5%9E%23&Refer=new_time)
1. [西藏7级地震](https://s.weibo.com//weibo?q=%E8%A5%BF%E8%97%8F7%E7%BA%A7%E5%9C%B0%E9%9C%87&t=31&band_rank=1&Refer=top)
1. [国乒女团2比3日本女团](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A22%E6%AF%943%E6%97%A5%E6%9C%AC%E5%A5%B3%E5%9B%A2%23&t=31&band_rank=2&Refer=top)
1. [长征是刻在大国重器上的信仰](https://s.weibo.com//weibo?q=%23%E9%95%BF%E5%BE%81%E6%98%AF%E5%88%BB%E5%9C%A8%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E4%B8%8A%E7%9A%84%E4%BF%A1%E4%BB%B0%23&t=31&band_rank=3&Refer=top)
1. [王彦霖回应肖战说倪大红赢了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%BD%A6%E9%9C%96%E5%9B%9E%E5%BA%94%E8%82%96%E6%88%98%E8%AF%B4%E5%80%AA%E5%A4%A7%E7%BA%A2%E8%B5%A2%E4%BA%86%23&t=31&band_rank=4&Refer=top)
1. [苹果内屏磨砂膜能徒手撕下](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%E5%86%85%E5%B1%8F%E7%A3%A8%E7%A0%82%E8%86%9C%E8%83%BD%E5%BE%92%E6%89%8B%E6%92%95%E4%B8%8B&t=31&band_rank=5&Refer=top)
1. [国乒男团夺亚锦赛第26冠](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%A4%BA%E4%BA%9A%E9%94%A6%E8%B5%9B%E7%AC%AC26%E5%86%A0%23&t=31&band_rank=6&Refer=top)
1. [直击西藏那曲7.0级地震](https://s.weibo.com//weibo?q=%23%E7%9B%B4%E5%87%BB%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B27.0%E7%BA%A7%E5%9C%B0%E9%9C%87%23&t=31&band_rank=7&Refer=top)
1. [在星巴克开会1小时被提醒点单5次](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E5%BC%80%E4%BC%9A1%E5%B0%8F%E6%97%B6%E8%A2%AB%E6%8F%90%E9%86%92%E7%82%B9%E5%8D%955%E6%AC%A1%23&t=31&band_rank=8&Refer=top)
1. [后会友期 想请不敢请的都放观察室了](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E6%83%B3%E8%AF%B7%E4%B8%8D%E6%95%A2%E8%AF%B7%E7%9A%84%E9%83%BD%E6%94%BE%E8%A7%82%E5%AF%9F%E5%AE%A4%E4%BA%86&t=31&band_rank=9&Refer=top)
1. [张家齐和妈妈的关系触痛网友](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%92%8C%E5%A6%88%E5%A6%88%E7%9A%84%E5%85%B3%E7%B3%BB%E8%A7%A6%E7%97%9B%E7%BD%91%E5%8F%8B&t=31&band_rank=10&Refer=top)
1. [婚礼发言说虽然不是我的妻子](https://s.weibo.com//weibo?q=%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%E8%AF%B4%E8%99%BD%E7%84%B6%E4%B8%8D%E6%98%AF%E6%88%91%E7%9A%84%E5%A6%BB%E5%AD%90&t=31&band_rank=11&Refer=top)
1. [41岁女子存百万后去世](https://s.weibo.com//weibo?q=41%E5%B2%81%E5%A5%B3%E5%AD%90%E5%AD%98%E7%99%BE%E4%B8%87%E5%90%8E%E5%8E%BB%E4%B8%96&t=31&band_rank=12&Refer=top)
1. [美股](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1&t=31&band_rank=13&Refer=top)
1. [马天宇低谷期找杨幂谈心](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BD%8E%E8%B0%B7%E6%9C%9F%E6%89%BE%E6%9D%A8%E5%B9%82%E8%B0%88%E5%BF%83%23&t=31&band_rank=14&Refer=top)
1. [李雪健听不见说不了的无声表演](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%90%AC%E4%B8%8D%E8%A7%81%E8%AF%B4%E4%B8%8D%E4%BA%86%E7%9A%84%E6%97%A0%E5%A3%B0%E8%A1%A8%E6%BC%94%23&t=31&band_rank=15&Refer=top)
1. [消防赶往西藏地震震中](https://s.weibo.com//weibo?q=%23%E6%B6%88%E9%98%B2%E8%B5%B6%E5%BE%80%E8%A5%BF%E8%97%8F%E5%9C%B0%E9%9C%87%E9%9C%87%E4%B8%AD%23&t=31&band_rank=16&Refer=top)
1. [坠亡幼童父亲回应扔掉孩子遗物](https://s.weibo.com//weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E6%89%94%E6%8E%89%E5%AD%A9%E5%AD%90%E9%81%97%E7%89%A9%23&t=31&band_rank=17&Refer=top)
1. [国乒女团 桥本帆乃香](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%20%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99&t=31&band_rank=18&Refer=top)
1. [张萌后悔找马天宇上节目](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E5%90%8E%E6%82%94%E6%89%BE%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%8A%E8%8A%82%E7%9B%AE%23&t=31&band_rank=19&Refer=top)
1. [西藏那曲7.0级地震最近县城57公里](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B27.0%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%9C%80%E8%BF%91%E5%8E%BF%E5%9F%8E57%E5%85%AC%E9%87%8C%23&t=31&band_rank=20&Refer=top)
1. [女子讲述妈妈56岁为何得老年痴呆](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E8%AE%B2%E8%BF%B0%E5%A6%88%E5%A6%8856%E5%B2%81%E4%B8%BA%E4%BD%95%E5%BE%97%E8%80%81%E5%B9%B4%E7%97%B4%E5%91%86&t=31&band_rank=21&Refer=top)
1. [女子称惠州海景房跌剩一千八](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%83%A0%E5%B7%9E%E6%B5%B7%E6%99%AF%E6%88%BF%E8%B7%8C%E5%89%A9%E4%B8%80%E5%8D%83%E5%85%AB&t=31&band_rank=22&Refer=top)
1. [在北京没有社交的原因](https://s.weibo.com//weibo?q=%E5%9C%A8%E5%8C%97%E4%BA%AC%E6%B2%A1%E6%9C%89%E7%A4%BE%E4%BA%A4%E7%9A%84%E5%8E%9F%E5%9B%A0&t=31&band_rank=23&Refer=top)
1. [肖战小城良方把湿巾纸都撕成条了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E6%8A%8A%E6%B9%BF%E5%B7%BE%E7%BA%B8%E9%83%BD%E6%92%95%E6%88%90%E6%9D%A1%E4%BA%86%23&t=31&band_rank=24&Refer=top)
1. [虞书欣怎么笑成这样](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%80%8E%E4%B9%88%E7%AC%91%E6%88%90%E8%BF%99%E6%A0%B7%23&t=31&band_rank=25&Refer=top)
1. [人民日报评张凌赫申请赴台遭拒](https://s.weibo.com//weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B3%E8%AF%B7%E8%B5%B4%E5%8F%B0%E9%81%AD%E6%8B%92%23&t=31&band_rank=26&Refer=top)
1. [厉娜 许飞](https://s.weibo.com//weibo?q=%E5%8E%89%E5%A8%9C%20%E8%AE%B8%E9%A3%9E&t=31&band_rank=27&Refer=top)
1. [美股科技巨头全线崩盘](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E8%82%A1%E7%A7%91%E6%8A%80%E5%B7%A8%E5%A4%B4%E5%85%A8%E7%BA%BF%E5%B4%A9%E7%9B%98%23&t=31&band_rank=28&Refer=top)
1. [A股 科技股](https://s.weibo.com//weibo?q=A%E8%82%A1%20%E7%A7%91%E6%8A%80%E8%82%A1&t=31&band_rank=29&Refer=top)
1. [黄婷婷李艺彤闹掰谁在释怀谁在获利](https://s.weibo.com//weibo?q=%23%E9%BB%84%E5%A9%B7%E5%A9%B7%E6%9D%8E%E8%89%BA%E5%BD%A4%E9%97%B9%E6%8E%B0%E8%B0%81%E5%9C%A8%E9%87%8A%E6%80%80%E8%B0%81%E5%9C%A8%E8%8E%B7%E5%88%A9%23&t=31&band_rank=30&Refer=top)
1. [四个孩子给跑长途爸爸送饭](https://s.weibo.com//weibo?q=%E5%9B%9B%E4%B8%AA%E5%AD%A9%E5%AD%90%E7%BB%99%E8%B7%91%E9%95%BF%E9%80%94%E7%88%B8%E7%88%B8%E9%80%81%E9%A5%AD&t=31&band_rank=31&Refer=top)
1. [试拍王一博被朱珠美晕](https://s.weibo.com//weibo?q=%23%E8%AF%95%E6%8B%8D%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%A2%AB%E6%9C%B1%E7%8F%A0%E7%BE%8E%E6%99%95%23&t=31&band_rank=32&Refer=top)
1. [魏娆在陆濯最爱她的时候选择和离](https://s.weibo.com//weibo?q=%23%E9%AD%8F%E5%A8%86%E5%9C%A8%E9%99%86%E6%BF%AF%E6%9C%80%E7%88%B1%E5%A5%B9%E7%9A%84%E6%97%B6%E5%80%99%E9%80%89%E6%8B%A9%E5%92%8C%E7%A6%BB%23&t=31&band_rank=33&Refer=top)
1. [刘宇宁 薄肌变大胸](https://s.weibo.com//weibo?q=%E5%88%98%E5%AE%87%E5%AE%81%20%E8%96%84%E8%82%8C%E5%8F%98%E5%A4%A7%E8%83%B8&t=31&band_rank=34&Refer=top)
1. [姜妍小城良方演技口碑](https://s.weibo.com//weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E6%BC%94%E6%8A%80%E5%8F%A3%E7%A2%91%23&t=31&band_rank=35&Refer=top)
1. [侯英超谈国乒女团不敌日本](https://s.weibo.com//weibo?q=%23%E4%BE%AF%E8%8B%B1%E8%B6%85%E8%B0%88%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E4%B8%8D%E6%95%8C%E6%97%A5%E6%9C%AC%23&t=31&band_rank=36&Refer=top)
1. [李子祺10篇SCI被指挂名水刊](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%AD%90%E7%A5%BA10%E7%AF%87SCI%E8%A2%AB%E6%8C%87%E6%8C%82%E5%90%8D%E6%B0%B4%E5%88%8A&t=31&band_rank=37&Refer=top)
1. [厉娜听到许飞回答的反应](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E5%90%AC%E5%88%B0%E8%AE%B8%E9%A3%9E%E5%9B%9E%E7%AD%94%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=38&Refer=top)
1. [巴青地震亲历者讲述房子震得嘎嘎叫](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E9%9D%92%E5%9C%B0%E9%9C%87%E4%BA%B2%E5%8E%86%E8%80%85%E8%AE%B2%E8%BF%B0%E6%88%BF%E5%AD%90%E9%9C%87%E5%BE%97%E5%98%8E%E5%98%8E%E5%8F%AB%23&t=31&band_rank=39&Refer=top)
1. [月嫂说宝宝只有两件衣服](https://s.weibo.com//weibo?q=%E6%9C%88%E5%AB%82%E8%AF%B4%E5%AE%9D%E5%AE%9D%E5%8F%AA%E6%9C%89%E4%B8%A4%E4%BB%B6%E8%A1%A3%E6%9C%8D&t=31&band_rank=40&Refer=top)
1. [Lacoste大秀](https://s.weibo.com//weibo?q=Lacoste%E5%A4%A7%E7%A7%80&t=31&band_rank=41&Refer=top)
1. [国乒男团vs韩国](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2vs%E9%9F%A9%E5%9B%BD&t=31&band_rank=42&Refer=top)
1. [剃毛前以为要死了剃毛后重见太阳](https://s.weibo.com//weibo?q=%E5%89%83%E6%AF%9B%E5%89%8D%E4%BB%A5%E4%B8%BA%E8%A6%81%E6%AD%BB%E4%BA%86%E5%89%83%E6%AF%9B%E5%90%8E%E9%87%8D%E8%A7%81%E5%A4%AA%E9%98%B3&t=31&band_rank=43&Refer=top)
1. [人民日报评医学生盲猜病情](https://s.weibo.com//weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%8C%BB%E5%AD%A6%E7%94%9F%E7%9B%B2%E7%8C%9C%E7%97%85%E6%83%85%23&t=31&band_rank=44&Refer=top)
1. [那曲本次地震为震中近5年最大地震](https://s.weibo.com//weibo?q=%23%E9%82%A3%E6%9B%B2%E6%9C%AC%E6%AC%A1%E5%9C%B0%E9%9C%87%E4%B8%BA%E9%9C%87%E4%B8%AD%E8%BF%915%E5%B9%B4%E6%9C%80%E5%A4%A7%E5%9C%B0%E9%9C%87%23&t=31&band_rank=45&Refer=top)
1. [西藏地震暂无人员伤亡](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E5%9C%B0%E9%9C%87%E6%9A%82%E6%97%A0%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%23&t=31&band_rank=46&Refer=top)
1. [侯英超称打削球没有捷径](https://s.weibo.com//weibo?q=%E4%BE%AF%E8%8B%B1%E8%B6%85%E7%A7%B0%E6%89%93%E5%89%8A%E7%90%83%E6%B2%A1%E6%9C%89%E6%8D%B7%E5%BE%84&t=31&band_rank=47&Refer=top)
1. [亚锦赛国乒男团1比0韩国](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A21%E6%AF%940%E9%9F%A9%E5%9B%BD%23&t=31&band_rank=48&Refer=top)
1. [张凌赫田曦薇逐玉嫁金钗串台了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E9%80%90%E7%8E%89%E5%AB%81%E9%87%91%E9%92%97%E4%B8%B2%E5%8F%B0%E4%BA%86%23&t=31&band_rank=49&Refer=top)
1. [赵丽颖霍建华 剧播不好别怪妆造](https://s.weibo.com//weibo?q=%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%9C%8D%E5%BB%BA%E5%8D%8E%20%E5%89%A7%E6%92%AD%E4%B8%8D%E5%A5%BD%E5%88%AB%E6%80%AA%E5%A6%86%E9%80%A0&t=31&band_rank=50&Refer=top)
1. [后会友期 想请不敢请的都放观察室了](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E6%83%B3%E8%AF%B7%E4%B8%8D%E6%95%A2%E8%AF%B7%E7%9A%84%E9%83%BD%E6%94%BE%E8%A7%82%E5%AF%9F%E5%AE%A4%E4%BA%86&t=31&band_rank=2&Refer=top)
1. [向着胜利再出发](https://s.weibo.com//weibo?q=%23%E5%90%91%E7%9D%80%E8%83%9C%E5%88%A9%E5%86%8D%E5%87%BA%E5%8F%91%23&t=31&band_rank=3&Refer=top)
1. [国乒男团夺亚锦赛第26冠](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%A4%BA%E4%BA%9A%E9%94%A6%E8%B5%9B%E7%AC%AC26%E5%86%A0%23&t=31&band_rank=4&Refer=top)
1. [国乒女团2比3日本女团](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A22%E6%AF%943%E6%97%A5%E6%9C%AC%E5%A5%B3%E5%9B%A2%23&t=31&band_rank=5&Refer=top)
1. [马天宇低谷期找杨幂谈心](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BD%8E%E8%B0%B7%E6%9C%9F%E6%89%BE%E6%9D%A8%E5%B9%82%E8%B0%88%E5%BF%83%23&t=31&band_rank=6&Refer=top)
1. [在星巴克开会1小时被提醒点单5次](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E5%BC%80%E4%BC%9A1%E5%B0%8F%E6%97%B6%E8%A2%AB%E6%8F%90%E9%86%92%E7%82%B9%E5%8D%955%E6%AC%A1%23&t=31&band_rank=7&Refer=top)
1. [赵丽颖霍建华 剧播不好别怪妆造](https://s.weibo.com//weibo?q=%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%9C%8D%E5%BB%BA%E5%8D%8E%20%E5%89%A7%E6%92%AD%E4%B8%8D%E5%A5%BD%E5%88%AB%E6%80%AA%E5%A6%86%E9%80%A0&t=31&band_rank=8&Refer=top)
1. [直击西藏那曲7.0级地震](https://s.weibo.com//weibo?q=%23%E7%9B%B4%E5%87%BB%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B27.0%E7%BA%A7%E5%9C%B0%E9%9C%87%23&t=31&band_rank=9&Refer=top)
1. [虞书欣怎么笑成这样](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%80%8E%E4%B9%88%E7%AC%91%E6%88%90%E8%BF%99%E6%A0%B7%23&t=31&band_rank=10&Refer=top)
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
