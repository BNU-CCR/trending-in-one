# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-20 05:05:40

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
<!-- 最后更新时间 Tue Oct 20 2026 06:37:14 GMT+0800 (China Standard Time) -->

1. [身披旭日旗中国留学生或被开除遣返](https://so.toutiao.com/search?keyword=身披旭日旗中国留学生或被开除遣返)
1. [广州一村每人发3.65元补偿款](https://so.toutiao.com/search?keyword=广州一村每人发3.65元补偿款)
1. [动能向新、结构向优](https://so.toutiao.com/search?keyword=动能向新、结构向优)
1. [中纪委连打三“虎”](https://so.toutiao.com/search?keyword=中纪委连打三“虎”)
1. [公司给2千员工每人发1条5克纯金手链](https://so.toutiao.com/search?keyword=公司给2千员工每人发1条5克纯金手链)
1. [大学生生活费到底一个月多少合适](https://so.toutiao.com/search?keyword=大学生生活费到底一个月多少合适)
1. [没退休就意外离世交的社保怎么办](https://so.toutiao.com/search?keyword=没退休就意外离世交的社保怎么办)
1. [汇源集团：不再生产“汇源”果汁](https://so.toutiao.com/search?keyword=汇源集团：不再生产“汇源”果汁)
1. [抗癌博主黄大青去世 年仅35岁](https://so.toutiao.com/search?keyword=抗癌博主黄大青去世%20年仅35岁)
1. [90%脑卒中能提前预防](https://so.toutiao.com/search?keyword=90%脑卒中能提前预防)
1. [“重庆一车从60米高架桥坠落”不实](https://so.toutiao.com/search?keyword=“重庆一车从60米高架桥坠落”不实)
1. [“小孩”7天两冠4-0复仇日本强敌](https://so.toutiao.com/search?keyword=“小孩”7天两冠4-0复仇日本强敌)
1. [钧正平就中国留学生身披旭日旗发声](https://so.toutiao.com/search?keyword=钧正平就中国留学生身披旭日旗发声)
1. [科比23岁女儿首登维密T台大秀](https://so.toutiao.com/search?keyword=科比23岁女儿首登维密T台大秀)
1. [蒋龙得知金鸡奖提名哭了：以为做梦](https://so.toutiao.com/search?keyword=蒋龙得知金鸡奖提名哭了：以为做梦)
1. [李小冉前夫及关联公司被执行2111万](https://so.toutiao.com/search?keyword=李小冉前夫及关联公司被执行2111万)
1. [曝披旭日旗留学生曾表达支持“台独”](https://so.toutiao.com/search?keyword=曝披旭日旗留学生曾表达支持“台独”)
1. [乌千架无人机夜袭圣彼得堡有何意图](https://so.toutiao.com/search?keyword=乌千架无人机夜袭圣彼得堡有何意图)
1. [稻城高反去世男生未随同伴下撤](https://so.toutiao.com/search?keyword=稻城高反去世男生未随同伴下撤)
1. [李在明：韩国必须收回战时作战指挥权](https://so.toutiao.com/search?keyword=李在明：韩国必须收回战时作战指挥权)
1. [女局长遭“仙人跳”被敲诈19万](https://so.toutiao.com/search?keyword=女局长遭“仙人跳”被敲诈19万)
1. [知情人讲述“精日”留学生处置细节](https://so.toutiao.com/search?keyword=知情人讲述“精日”留学生处置细节)
1. [女子用AI救了前夫一命](https://so.toutiao.com/search?keyword=女子用AI救了前夫一命)
1. [辛芷蕾掉提金鸡奖](https://so.toutiao.com/search?keyword=辛芷蕾掉提金鸡奖)
1. [知情人称身披旭日旗留学生是南京人](https://so.toutiao.com/search?keyword=知情人称身披旭日旗留学生是南京人)
1. [稻城亚丁去世男子母亲付了救援费用](https://so.toutiao.com/search?keyword=稻城亚丁去世男子母亲付了救援费用)
1. [岳云鹏常州相声演出被吐槽听不清](https://so.toutiao.com/search?keyword=岳云鹏常州相声演出被吐槽听不清)
1. [人民日报：对“精日”言行零容忍](https://so.toutiao.com/search?keyword=人民日报：对“精日”言行零容忍)
1. [赖岳谦：解放军“四海联动”盯住美日](https://so.toutiao.com/search?keyword=赖岳谦：解放军“四海联动”盯住美日)
1. [男子抚养儿子9年发现非亲生 法院判了](https://so.toutiao.com/search?keyword=男子抚养儿子9年发现非亲生%20法院判了)
1. [张雪为提升食堂米饭口感全网求助](https://so.toutiao.com/search?keyword=张雪为提升食堂米饭口感全网求助)
1. [央行将推动实现退出存贷款基准利率](https://so.toutiao.com/search?keyword=央行将推动实现退出存贷款基准利率)
1. [一公司违规代开发票43.4亿元](https://so.toutiao.com/search?keyword=一公司违规代开发票43.4亿元)
1. [林芳正能解开中日死结吗](https://so.toutiao.com/search?keyword=林芳正能解开中日死结吗)
1. [法国社会动荡背后的现实矛盾](https://so.toutiao.com/search?keyword=法国社会动荡背后的现实矛盾)
1. [稻城亚丁高反去世男子系非法穿越](https://so.toutiao.com/search?keyword=稻城亚丁高反去世男子系非法穿越)
1. [山姆回应被指品质暴跌](https://so.toutiao.com/search?keyword=山姆回应被指品质暴跌)
1. [央行政策利率换锚有何影响](https://so.toutiao.com/search?keyword=央行政策利率换锚有何影响)
1. [张纯如妈妈为女儿铜像系上鸢尾丝巾](https://so.toutiao.com/search?keyword=张纯如妈妈为女儿铜像系上鸢尾丝巾)
1. [张雪官宣首款电摩明年上市](https://so.toutiao.com/search?keyword=张雪官宣首款电摩明年上市)
1. [维密大秀变了](https://so.toutiao.com/search?keyword=维密大秀变了)
1. [巴西废除“上六休一”工作制度](https://so.toutiao.com/search?keyword=巴西废除“上六休一”工作制度)
1. [郑又平：蒋万安团队切勿自乱阵脚](https://so.toutiao.com/search?keyword=郑又平：蒋万安团队切勿自乱阵脚)
1. [9月BBA没有一款车零售过万](https://so.toutiao.com/search?keyword=9月BBA没有一款车零售过万)
1. [央行宣布将出台多项政策举措](https://so.toutiao.com/search?keyword=央行宣布将出台多项政策举措)
1. [医生推荐练四个动作强化臀大肌](https://so.toutiao.com/search?keyword=医生推荐练四个动作强化臀大肌)
1. [外交部提醒赴法中国公民加强安全防范](https://so.toutiao.com/search?keyword=外交部提醒赴法中国公民加强安全防范)
1. [谢霆锋打卡江西小炒](https://so.toutiao.com/search?keyword=谢霆锋打卡江西小炒)
1. [证监会：稳步推出北证50ETF](https://so.toutiao.com/search?keyword=证监会：稳步推出北证50ETF)
1. [“金融女老虎”俞小平被开除党籍](https://so.toutiao.com/search?keyword=“金融女老虎”俞小平被开除党籍)
1. [媒体：A股市值一哥更迭折射产业变迁](https://so.toutiao.com/search?keyword=媒体：A股市值一哥更迭折射产业变迁)
1. [证监会发布证券市场先行赔付指导意见](https://so.toutiao.com/search?keyword=证监会发布证券市场先行赔付指导意见)
1. [游乐船倾覆致4死事故调查报告发布](https://so.toutiao.com/search?keyword=游乐船倾覆致4死事故调查报告发布)
1. [金融监管总局：整治无序竞争取得成效](https://so.toutiao.com/search?keyword=金融监管总局：整治无序竞争取得成效)
1. [高盛预计全球央行8月购金量达79吨](https://so.toutiao.com/search?keyword=高盛预计全球央行8月购金量达79吨)
1. [法国多地将局部宵禁](https://so.toutiao.com/search?keyword=法国多地将局部宵禁)
1. [任泽平：市场见底 结构性行情将展开](https://so.toutiao.com/search?keyword=任泽平：市场见底%20结构性行情将展开)
1. [法国总统马克龙访问科威特](https://so.toutiao.com/search?keyword=法国总统马克龙访问科威特)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Oct 20 2026 05:02:17 GMT+0800 (China Standard Time) -->

1. [英伟达市值9天蒸发4万亿](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC9%E5%A4%A9%E8%92%B8%E5%8F%914%E4%B8%87%E4%BA%BF)
1. [自愿放弃社保无效](https://www.zhihu.com/search?q=%E8%87%AA%E6%84%BF%E6%94%BE%E5%BC%83%E7%A4%BE%E4%BF%9D%E6%97%A0%E6%95%88)
1. [法国发生近年来最严重暴力骚乱](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E5%8F%91%E7%94%9F%E8%BF%91%E5%B9%B4%E6%9D%A5%E6%9C%80%E4%B8%A5%E9%87%8D%E6%9A%B4%E5%8A%9B%E9%AA%9A%E4%B9%B1)
1. [灵活就业人员可贷款缴社保](https://www.zhihu.com/search?q=%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E4%BA%BA%E5%91%98%E5%8F%AF%E8%B4%B7%E6%AC%BE%E7%BC%B4%E7%A4%BE%E4%BF%9D)
1. [中国留学生俄罗斯课堂披旭日旗](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E4%BF%84%E7%BD%97%E6%96%AF%E8%AF%BE%E5%A0%82%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97)
1. [前三季度中国GDP同比增长4.6%](https://www.zhihu.com/search?q=%E5%89%8D%E4%B8%89%E5%AD%A3%E5%BA%A6%E4%B8%AD%E5%9B%BDGDP%E5%90%8C%E6%AF%94%E5%A2%9E%E9%95%BF4.6%25)
1. [班主任休产假遭家长质问一定要生孩子吗](https://www.zhihu.com/search?q=%E7%8F%AD%E4%B8%BB%E4%BB%BB%E4%BC%91%E4%BA%A7%E5%81%87%E9%81%AD%E5%AE%B6%E9%95%BF%E8%B4%A8%E9%97%AE%E4%B8%80%E5%AE%9A%E8%A6%81%E7%94%9F%E5%AD%A9%E5%AD%90%E5%90%97)
1. [汇源集团不再生产带汇源商标果汁](https://www.zhihu.com/search?q=%E6%B1%87%E6%BA%90%E9%9B%86%E5%9B%A2%E4%B8%8D%E5%86%8D%E7%94%9F%E4%BA%A7%E5%B8%A6%E6%B1%87%E6%BA%90%E5%95%86%E6%A0%87%E6%9E%9C%E6%B1%81)
1. [吴越质问花姐骗了多少钱](https://www.zhihu.com/search?q=%E5%90%B4%E8%B6%8A%E8%B4%A8%E9%97%AE%E8%8A%B1%E5%A7%90%E9%AA%97%E4%BA%86%E5%A4%9A%E5%B0%91%E9%92%B1)
1. [加拿大一军事基地爆炸起火多人伤亡](https://www.zhihu.com/search?q=%E5%8A%A0%E6%8B%BF%E5%A4%A7%E4%B8%80%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%E7%88%86%E7%82%B8%E8%B5%B7%E7%81%AB%E5%A4%9A%E4%BA%BA%E4%BC%A4%E4%BA%A1)
1. [郑州警方辟谣一家五口自杀](https://www.zhihu.com/search?q=%E9%83%91%E5%B7%9E%E8%AD%A6%E6%96%B9%E8%BE%9F%E8%B0%A3%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E8%87%AA%E6%9D%80)
1. [王自如喊话罗永浩想与其和解](https://www.zhihu.com/search?q=%E7%8E%8B%E8%87%AA%E5%A6%82%E5%96%8A%E8%AF%9D%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%83%B3%E4%B8%8E%E5%85%B6%E5%92%8C%E8%A7%A3)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Oct 20 2026 05:05:40 GMT+0800 (China Standard Time) -->

1. [同样是生活成本抗议，法国这轮骚乱和 2018 年黄背心差在哪？](https://www.zhihu.com/question/2095227460857983200)
1. [汇源集团发布严正声明，宣布和「汇源」品牌切割、推出新品牌咱家果源，具体怎么回事？会带来哪些市场影响？](https://www.zhihu.com/question/2095447353687815400)
1. [如何评价中国南京籍留学生，在莫斯科国立大学历史系课堂，身披旭日旗、桌上摆放日军军帽？](https://www.zhihu.com/question/2094350166518249200)
1. [马斯克宣布明年给美国每名儿童送 1 股 SpaceX 股票，这相当于多少钱？他的目的是什么？](https://www.zhihu.com/question/2095565952968569900)
1. [21 岁男子在稻城亚丁徒步时因严重高反去世，官方称「事发地不在景区，系非法穿越」，有哪些警示？](https://www.zhihu.com/question/2095605933854253800)
1. [王自如喊话罗永浩，称想与其和解，他们之间有啥过往恩怨？能成功和解吗？](https://www.zhihu.com/question/2095252005765604600)
1. [星巴克店员称 10 月 20 日起实施「消费入座」新规，你支持吗？落地难度大吗？](https://www.zhihu.com/question/2095573616037573000)
1. [如何看待日文“の”在中文互联网上的广泛使用？](https://www.zhihu.com/question/524236208)
1. [能不能建议修改火车开车前五分钟停止检票？](https://www.zhihu.com/question/525603632)
1. [如何看待模仿王源博主「王扁」被前经纪人用锤子击打头部约 10 分钟，双方有什么矛盾？](https://www.zhihu.com/question/2095221593614164700)
1. [梁文锋和DeepSeek，为什么配得上"国运级"三个字？](https://www.zhihu.com/question/2093628371448217900)
1. [前护士张水华破赛会纪录夺得西马冠军，如何评价她的表现？](https://www.zhihu.com/question/2095160978170181400)
1. [加拿大军事基地发生重大爆炸火灾事故，已致4死数十伤，这场致命事故有哪些关键细节？暴露了什么问题？](https://www.zhihu.com/question/2095269037022492200)
1. [一场高中生罢课为什么能烧到全国，法国社会的火药桶到底是怎么堆起来的？](https://www.zhihu.com/question/2095225318562689500)
1. [如果胡卫东和刘玉栋去NBA，在NBA能打上主力吗？](https://www.zhihu.com/question/385765685)
1. [法国千所学校抗议演变成暴力骚乱，背后深层原因是什么？](https://www.zhihu.com/question/2090011710354633200)
1. [《死神千年血战篇》第四季祸进谭开播，如何评价第九集？](https://www.zhihu.com/question/2095633883878503400)
1. [如何评价乔曼根尼罗透露的大本版《蝙蝠侠》剧情？](https://www.zhihu.com/question/2095328899500720400)
1. [如何评价DeepSeek 开放自研搜索API，单价为每1000次成功请求5元？](https://www.zhihu.com/question/2094892066190915300)
1. [马斯克已砸下3.66亿美元帮助共和党，他曾宣布减少政治支出，为何再次加码？](https://www.zhihu.com/question/2093371552045781000)
1. [iPhone Duo 溢价从超5万元跌至3000元，首销价格为什么会快速回落？](https://www.zhihu.com/question/2095513862397337600)
1. [古代中国政府为什么没有发明银行？](https://www.zhihu.com/question/2084662594594419500)
1. [女子晒iPhone 18Pro订单泄露物流单号，骗子找5人接力跑腿冒领，快递、跑腿平台该承担多少责任？](https://www.zhihu.com/question/2093988287304284200)
1. [昆明一事业编岗位九千人报名，这种「卷王岗」都是怎么出现的？实际备考难度有多大？](https://www.zhihu.com/question/2095087599677174500)
1. [Transformer 模型为何如此深刻地改变深度学习？](https://www.zhihu.com/question/2046917078884553700)
1. [S16 瑞士轮首轮 TES 抽中强敌 HLE，临危受命的 369 能顶住压力吗？](https://www.zhihu.com/question/2095394256655537000)
1. [「王者万象棋」哪个棋手最适合新手玩家？](https://www.zhihu.com/question/2094404092437312500)
1. [司美格鲁肽在美遭批量起诉，因患者用后患上可致盲的眼病，这真是GLP-1导致的吗？此类药物还有哪些风险？](https://www.zhihu.com/question/2085486428255774000)
1. [Deepseek对传统搜索的冲击有多大？](https://www.zhihu.com/question/13453602540)
1. [中国男足世界排名跌至第 96 位创近十年新低，主要原因是什么？](https://www.zhihu.com/question/2091487310999189200)

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
<!-- 最后更新时间 Tue Oct 20 2026 05:09:47 GMT+0800 (China Standard Time) -->

1. [总书记为何关注这项新基建](https://s.weibo.com//weibo?q=%23%E6%80%BB%E4%B9%A6%E8%AE%B0%E4%B8%BA%E4%BD%95%E5%85%B3%E6%B3%A8%E8%BF%99%E9%A1%B9%E6%96%B0%E5%9F%BA%E5%BB%BA%23&Refer=new_time)
1. [蒙古国草原大火为何没烧进来](https://s.weibo.com//weibo?q=%E8%92%99%E5%8F%A4%E5%9B%BD%E8%8D%89%E5%8E%9F%E5%A4%A7%E7%81%AB%E4%B8%BA%E4%BD%95%E6%B2%A1%E7%83%A7%E8%BF%9B%E6%9D%A5&t=31&band_rank=1&Refer=top)
1. [留学生披旭日旗暴露个人精神的病态](https://s.weibo.com//weibo?q=%23%E7%95%99%E5%AD%A6%E7%94%9F%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E6%9A%B4%E9%9C%B2%E4%B8%AA%E4%BA%BA%E7%B2%BE%E7%A5%9E%E7%9A%84%E7%97%85%E6%80%81%23&t=31&band_rank=2&Refer=top)
1. [何以中国当惊世界殊](https://s.weibo.com//weibo?q=%23%E4%BD%95%E4%BB%A5%E4%B8%AD%E5%9B%BD%E5%BD%93%E6%83%8A%E4%B8%96%E7%95%8C%E6%AE%8A%23&t=31&band_rank=3&Refer=top)
1. [田曦薇剧宣真穿的婚纱](https://s.weibo.com//weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%89%A7%E5%AE%A3%E7%9C%9F%E7%A9%BF%E7%9A%84%E5%A9%9A%E7%BA%B1%23&t=31&band_rank=4&Refer=top)
1. [谭松韵刘学义像疲惫了一天的新郎新娘](https://s.weibo.com//weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%88%98%E5%AD%A6%E4%B9%89%E5%83%8F%E7%96%B2%E6%83%AB%E4%BA%86%E4%B8%80%E5%A4%A9%E7%9A%84%E6%96%B0%E9%83%8E%E6%96%B0%E5%A8%98%23&t=31&band_rank=5&Refer=top)
1. [李小冉离婚后找闺蜜疗伤](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%A6%BB%E5%A9%9A%E5%90%8E%E6%89%BE%E9%97%BA%E8%9C%9C%E7%96%97%E4%BC%A4%23&t=31&band_rank=6&Refer=top)
1. [徐佳宁求婚时说给你五个亿让你作](https://s.weibo.com//weibo?q=%23%E5%BE%90%E4%BD%B3%E5%AE%81%E6%B1%82%E5%A9%9A%E6%97%B6%E8%AF%B4%E7%BB%99%E4%BD%A0%E4%BA%94%E4%B8%AA%E4%BA%BF%E8%AE%A9%E4%BD%A0%E4%BD%9C%23&t=31&band_rank=7&Refer=top)
1. [原来学霸是这样背书的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E5%AD%A6%E9%9C%B8%E6%98%AF%E8%BF%99%E6%A0%B7%E8%83%8C%E4%B9%A6%E7%9A%84&t=31&band_rank=8&Refer=top)
1. [法国骚乱反差一幕](https://s.weibo.com//weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AA%9A%E4%B9%B1%E5%8F%8D%E5%B7%AE%E4%B8%80%E5%B9%95%23&t=31&band_rank=9&Refer=top)
1. [身披旭日旗中国留学生或被开除遣返](https://s.weibo.com//weibo?q=%23%E8%BA%AB%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E6%88%96%E8%A2%AB%E5%BC%80%E9%99%A4%E9%81%A3%E8%BF%94%23&t=31&band_rank=10&Refer=top)
1. [李小冉参加乘风时徐佳宁打赏至榜一](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%82%E5%8A%A0%E4%B9%98%E9%A3%8E%E6%97%B6%E5%BE%90%E4%BD%B3%E5%AE%81%E6%89%93%E8%B5%8F%E8%87%B3%E6%A6%9C%E4%B8%80%23&t=31&band_rank=11&Refer=top)
1. [男子出狱发现账户50多万只剩六块四](https://s.weibo.com//weibo?q=%E7%94%B7%E5%AD%90%E5%87%BA%E7%8B%B1%E5%8F%91%E7%8E%B0%E8%B4%A6%E6%88%B750%E5%A4%9A%E4%B8%87%E5%8F%AA%E5%89%A9%E5%85%AD%E5%9D%97%E5%9B%9B&t=31&band_rank=12&Refer=top)
1. [高反去世男子母亲付了救援相关费用](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%8F%8D%E5%8E%BB%E4%B8%96%E7%94%B7%E5%AD%90%E6%AF%8D%E4%BA%B2%E4%BB%98%E4%BA%86%E6%95%91%E6%8F%B4%E7%9B%B8%E5%85%B3%E8%B4%B9%E7%94%A8%23&t=31&band_rank=13&Refer=top)
1. [谭松韵刘学义直播避嫌避成啥样了](https://s.weibo.com//weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%88%98%E5%AD%A6%E4%B9%89%E7%9B%B4%E6%92%AD%E9%81%BF%E5%AB%8C%E9%81%BF%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23&t=31&band_rank=14&Refer=top)
1. [田曦薇跳娆黛摇](https://s.weibo.com//weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%B7%B3%E5%A8%86%E9%BB%9B%E6%91%87%23&t=31&band_rank=15&Refer=top)
1. [何猷君炫妻狂魔](https://s.weibo.com//weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E7%82%AB%E5%A6%BB%E7%8B%82%E9%AD%94%23&t=31&band_rank=16&Refer=top)
1. [特朗普喊话美国民众别去法国参加革命](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%96%8A%E8%AF%9D%E7%BE%8E%E5%9B%BD%E6%B0%91%E4%BC%97%E5%88%AB%E5%8E%BB%E6%B3%95%E5%9B%BD%E5%8F%82%E5%8A%A0%E9%9D%A9%E5%91%BD%23&t=31&band_rank=17&Refer=top)
1. [京东多买多返明日上线](https://s.weibo.com//weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%A4%9A%E4%B9%B0%E5%A4%9A%E8%BF%94%E6%98%8E%E6%97%A5%E4%B8%8A%E7%BA%BF%23&t=31&band_rank=18&Refer=top)
1. [房子降到150万好卖多了](https://s.weibo.com//weibo?q=%23%E6%88%BF%E5%AD%90%E9%99%8D%E5%88%B0150%E4%B8%87%E5%A5%BD%E5%8D%96%E5%A4%9A%E4%BA%86%23&t=31&band_rank=19&Refer=top)
1. [高反支帐篷躺卧男子去世目击者发声](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%8F%8D%E6%94%AF%E5%B8%90%E7%AF%B7%E8%BA%BA%E5%8D%A7%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23&t=31&band_rank=20&Refer=top)
1. [仙人跳后报警被强奸多名受害人被抓](https://s.weibo.com//weibo?q=%23%E4%BB%99%E4%BA%BA%E8%B7%B3%E5%90%8E%E6%8A%A5%E8%AD%A6%E8%A2%AB%E5%BC%BA%E5%A5%B8%E5%A4%9A%E5%90%8D%E5%8F%97%E5%AE%B3%E4%BA%BA%E8%A2%AB%E6%8A%93%23&t=31&band_rank=21&Refer=top)
1. [萨摩耶走秀时突然憋不住了](https://s.weibo.com//weibo?q=%E8%90%A8%E6%91%A9%E8%80%B6%E8%B5%B0%E7%A7%80%E6%97%B6%E7%AA%81%E7%84%B6%E6%86%8B%E4%B8%8D%E4%BD%8F%E4%BA%86&t=31&band_rank=22&Refer=top)
1. [Aijing](https://s.weibo.com//weibo?q=Aijing&t=31&band_rank=23&Refer=top)
1. [代谢快的人vs代谢慢的人](https://s.weibo.com//weibo?q=%E4%BB%A3%E8%B0%A2%E5%BF%AB%E7%9A%84%E4%BA%BAvs%E4%BB%A3%E8%B0%A2%E6%85%A2%E7%9A%84%E4%BA%BA&t=31&band_rank=24&Refer=top)
1. [男友说大海还没你好看](https://s.weibo.com//weibo?q=%E7%94%B7%E5%8F%8B%E8%AF%B4%E5%A4%A7%E6%B5%B7%E8%BF%98%E6%B2%A1%E4%BD%A0%E5%A5%BD%E7%9C%8B&t=31&band_rank=25&Refer=top)
1. [出去玩十天回来被追着还钱](https://s.weibo.com//weibo?q=%E5%87%BA%E5%8E%BB%E7%8E%A9%E5%8D%81%E5%A4%A9%E5%9B%9E%E6%9D%A5%E8%A2%AB%E8%BF%BD%E7%9D%80%E8%BF%98%E9%92%B1&t=31&band_rank=26&Refer=top)
1. [奚梦瑶怀孕时胖到140斤](https://s.weibo.com//weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%80%80%E5%AD%95%E6%97%B6%E8%83%96%E5%88%B0140%E6%96%A4%23&t=31&band_rank=27&Refer=top)
1. [滚筒洗衣机排污口90%的人没打开过](https://s.weibo.com//weibo?q=%23%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%8E%92%E6%B1%A1%E5%8F%A390%25%E7%9A%84%E4%BA%BA%E6%B2%A1%E6%89%93%E5%BC%80%E8%BF%87%23&t=31&band_rank=28&Refer=top)
1. [姜妍分享了清炖牛肋条的做法](https://s.weibo.com//weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%88%86%E4%BA%AB%E4%BA%86%E6%B8%85%E7%82%96%E7%89%9B%E8%82%8B%E6%9D%A1%E7%9A%84%E5%81%9A%E6%B3%95%23&t=31&band_rank=29&Refer=top)
1. [女儿用拼多多给农村父母远程装修](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%84%BF%E7%94%A8%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%BB%99%E5%86%9C%E6%9D%91%E7%88%B6%E6%AF%8D%E8%BF%9C%E7%A8%8B%E8%A3%85%E4%BF%AE%23&t=31&band_rank=30&Refer=top)
1. [苹果手机很多人不知道的操作](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E6%93%8D%E4%BD%9C&t=31&band_rank=31&Refer=top)
1. [谷爱凌在外网大赞奚梦瑶状态](https://s.weibo.com//weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9C%A8%E5%A4%96%E7%BD%91%E5%A4%A7%E8%B5%9E%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%8A%B6%E6%80%81%23&t=31&band_rank=32&Refer=top)
1. [仙人跳团伙多次真报警来胁迫受害者](https://s.weibo.com//weibo?q=%23%E4%BB%99%E4%BA%BA%E8%B7%B3%E5%9B%A2%E4%BC%99%E5%A4%9A%E6%AC%A1%E7%9C%9F%E6%8A%A5%E8%AD%A6%E6%9D%A5%E8%83%81%E8%BF%AB%E5%8F%97%E5%AE%B3%E8%80%85%23&t=31&band_rank=33&Refer=top)
1. [沙特宣布处决两名孟加拉国公民](https://s.weibo.com//weibo?q=%23%E6%B2%99%E7%89%B9%E5%AE%A3%E5%B8%83%E5%A4%84%E5%86%B3%E4%B8%A4%E5%90%8D%E5%AD%9F%E5%8A%A0%E6%8B%89%E5%9B%BD%E5%85%AC%E6%B0%91%23&t=31&band_rank=34&Refer=top)
1. [张雪官宣首款电摩](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%AE%98%E5%AE%A3%E9%A6%96%E6%AC%BE%E7%94%B5%E6%91%A9%23&t=31&band_rank=35&Refer=top)
1. [ally恋综和直播间差别好大](https://s.weibo.com//weibo?q=%23ally%E6%81%8B%E7%BB%BC%E5%92%8C%E7%9B%B4%E6%92%AD%E9%97%B4%E5%B7%AE%E5%88%AB%E5%A5%BD%E5%A4%A7%23&t=31&band_rank=36&Refer=top)
1. [98岁爷爷嫌吃不饱要打工](https://s.weibo.com//weibo?q=98%E5%B2%81%E7%88%B7%E7%88%B7%E5%AB%8C%E5%90%83%E4%B8%8D%E9%A5%B1%E8%A6%81%E6%89%93%E5%B7%A5&t=31&band_rank=37&Refer=top)
1. [尤浩然去吃了998一个的巨型汉堡](https://s.weibo.com//weibo?q=%23%E5%B0%A4%E6%B5%A9%E7%84%B6%E5%8E%BB%E5%90%83%E4%BA%86998%E4%B8%80%E4%B8%AA%E7%9A%84%E5%B7%A8%E5%9E%8B%E6%B1%89%E5%A0%A1%23&t=31&band_rank=38&Refer=top)
1. [马斯克家族关系图](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%AE%B6%E6%97%8F%E5%85%B3%E7%B3%BB%E5%9B%BE%23&t=31&band_rank=39&Refer=top)
1. [宫内孕同时也可能合并宫外孕](https://s.weibo.com//weibo?q=%E5%AE%AB%E5%86%85%E5%AD%95%E5%90%8C%E6%97%B6%E4%B9%9F%E5%8F%AF%E8%83%BD%E5%90%88%E5%B9%B6%E5%AE%AB%E5%A4%96%E5%AD%95&t=31&band_rank=40&Refer=top)
1. [恋爱博士](https://s.weibo.com//weibo?q=%E6%81%8B%E7%88%B1%E5%8D%9A%E5%A3%AB&t=31&band_rank=41&Refer=top)
1. [想要的晚年状态被10后老人具象化了](https://s.weibo.com//weibo?q=%23%E6%83%B3%E8%A6%81%E7%9A%84%E6%99%9A%E5%B9%B4%E7%8A%B6%E6%80%81%E8%A2%AB10%E5%90%8E%E8%80%81%E4%BA%BA%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23&t=31&band_rank=42&Refer=top)
1. [盛艾敬妈妈和裴珠泫一样大](https://s.weibo.com//weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E5%A6%88%E5%A6%88%E5%92%8C%E8%A3%B4%E7%8F%A0%E6%B3%AB%E4%B8%80%E6%A0%B7%E5%A4%A7%23&t=31&band_rank=43&Refer=top)
1. [仙人跳团伙利用15岁成员作诱饵敲诈](https://s.weibo.com//weibo?q=%23%E4%BB%99%E4%BA%BA%E8%B7%B3%E5%9B%A2%E4%BC%99%E5%88%A9%E7%94%A815%E5%B2%81%E6%88%90%E5%91%98%E4%BD%9C%E8%AF%B1%E9%A5%B5%E6%95%B2%E8%AF%88%23&t=31&band_rank=44&Refer=top)
1. [狗狗有蜱虫主人找鸡帮忙](https://s.weibo.com//weibo?q=%23%E7%8B%97%E7%8B%97%E6%9C%89%E8%9C%B1%E8%99%AB%E4%B8%BB%E4%BA%BA%E6%89%BE%E9%B8%A1%E5%B8%AE%E5%BF%99%23&t=31&band_rank=45&Refer=top)
1. [证监会完善违规减持处罚规则](https://s.weibo.com//weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%E5%AE%8C%E5%96%84%E8%BF%9D%E8%A7%84%E5%87%8F%E6%8C%81%E5%A4%84%E7%BD%9A%E8%A7%84%E5%88%99%23&t=31&band_rank=46&Refer=top)
1. [嫁金钗](https://s.weibo.com//weibo?q=%E5%AB%81%E9%87%91%E9%92%97&t=31&band_rank=47&Refer=top)
1. [看望重症病人该怎么说](https://s.weibo.com//weibo?q=%E7%9C%8B%E6%9C%9B%E9%87%8D%E7%97%87%E7%97%85%E4%BA%BA%E8%AF%A5%E6%80%8E%E4%B9%88%E8%AF%B4&t=31&band_rank=48&Refer=top)
1. [孙颖莎拒应援河北卫视下场引导](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%8B%92%E5%BA%94%E6%8F%B4%E6%B2%B3%E5%8C%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%E5%BC%95%E5%AF%BC%23&t=31&band_rank=49&Refer=top)
1. [社保基金会原副理事长王文灵被双开](https://s.weibo.com//weibo?q=%23%E7%A4%BE%E4%BF%9D%E5%9F%BA%E9%87%91%E4%BC%9A%E5%8E%9F%E5%89%AF%E7%90%86%E4%BA%8B%E9%95%BF%E7%8E%8B%E6%96%87%E7%81%B5%E8%A2%AB%E5%8F%8C%E5%BC%80%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
