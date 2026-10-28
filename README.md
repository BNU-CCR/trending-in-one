# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-29 00:05:16

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
<!-- 最后更新时间 Wed Oct 28 2026 22:25:03 GMT+0800 (China Standard Time) -->

1. [国务院原副总理刘延东逝世](https://so.toutiao.com/search?keyword=国务院原副总理刘延东逝世)
1. [刘延东同志遗像](https://so.toutiao.com/search?keyword=刘延东同志遗像)
1. [找准发展新质生产力的着力点](https://so.toutiao.com/search?keyword=找准发展新质生产力的着力点)
1. [人民日报评姆巴佩翻车](https://so.toutiao.com/search?keyword=人民日报评姆巴佩翻车)
1. [男子回应借助AI买彩票中508万](https://so.toutiao.com/search?keyword=男子回应借助AI买彩票中508万)
1. [西班牙列车相撞已致64死](https://so.toutiao.com/search?keyword=西班牙列车相撞已致64死)
1. [南京一公园现成片“加拿大一枝黄花”](https://so.toutiao.com/search?keyword=南京一公园现成片“加拿大一枝黄花”)
1. [交警现场喷字警示“老头乐”非法上路](https://so.toutiao.com/search?keyword=交警现场喷字警示“老头乐”非法上路)
1. [算力网加速织就 八大枢纽各展所长](https://so.toutiao.com/search?keyword=算力网加速织就%20八大枢纽各展所长)
1. [23岁网红夏夏抗癌5年去世](https://so.toutiao.com/search?keyword=23岁网红夏夏抗癌5年去世)
1. [中小学秋假安排需注意这些误区](https://so.toutiao.com/search?keyword=中小学秋假安排需注意这些误区)
1. [杭州女孩东北旅游回来后吃啥都不香了](https://so.toutiao.com/search?keyword=杭州女孩东北旅游回来后吃啥都不香了)
1. [总台确认收到皇马道歉函](https://so.toutiao.com/search?keyword=总台确认收到皇马道歉函)
1. [比亚迪版“劳斯莱斯”要来了](https://so.toutiao.com/search?keyword=比亚迪版“劳斯莱斯”要来了)
1. [中方强烈要求美国立即停止封锁古巴](https://so.toutiao.com/search?keyword=中方强烈要求美国立即停止封锁古巴)
1. [皇马称姆巴佩言论仅代表个人](https://so.toutiao.com/search?keyword=皇马称姆巴佩言论仅代表个人)
1. [解放军舰艇在菲东海域集结有何深意](https://so.toutiao.com/search?keyword=解放军舰艇在菲东海域集结有何深意)
1. [小伙邀网友喝喜酒近500人到场](https://so.toutiao.com/search?keyword=小伙邀网友喝喜酒近500人到场)
1. [辽宁舰首次穿越菲腹地释放哪些信号](https://so.toutiao.com/search?keyword=辽宁舰首次穿越菲腹地释放哪些信号)
1. [男子多次触摸女同事隐私部位被拘捕](https://so.toutiao.com/search?keyword=男子多次触摸女同事隐私部位被拘捕)
1. [皇马道歉](https://so.toutiao.com/search?keyword=皇马道歉)
1. [我国境外烈士褒扬工作不断深入](https://so.toutiao.com/search?keyword=我国境外烈士褒扬工作不断深入)
1. [为什么男性也有更年期](https://so.toutiao.com/search?keyword=为什么男性也有更年期)
1. [海信称与姆巴佩无商业合作](https://so.toutiao.com/search?keyword=海信称与姆巴佩无商业合作)
1. [飞机发动机到底有多难制造](https://so.toutiao.com/search?keyword=飞机发动机到底有多难制造)
1. [令人心动的offer8停更](https://so.toutiao.com/search?keyword=令人心动的offer8停更)
1. [中方重视姆巴佩作出的道歉](https://so.toutiao.com/search?keyword=中方重视姆巴佩作出的道歉)
1. [食用油的保质期是指未开封状态](https://so.toutiao.com/search?keyword=食用油的保质期是指未开封状态)
1. [巴萨官方向严重铁路事故遇难者致哀](https://so.toutiao.com/search?keyword=巴萨官方向严重铁路事故遇难者致哀)
1. [姆巴佩事件波及皇马周边生意](https://so.toutiao.com/search?keyword=姆巴佩事件波及皇马周边生意)
1. [委内瑞拉会成为美国“第51州”吗](https://so.toutiao.com/search?keyword=委内瑞拉会成为美国“第51州”吗)
1. [邵永灵：特朗普的招牌不管用了](https://so.toutiao.com/search?keyword=邵永灵：特朗普的招牌不管用了)
1. [姆巴佩风波：道德条款如何替品牌止损](https://so.toutiao.com/search?keyword=姆巴佩风波：道德条款如何替品牌止损)
1. [15名机关干部“卧底”送外卖](https://so.toutiao.com/search?keyword=15名机关干部“卧底”送外卖)
1. [大衣哥回应农民种地不辛苦言论](https://so.toutiao.com/search?keyword=大衣哥回应农民种地不辛苦言论)
1. [西甲主席与中国大使会面](https://so.toutiao.com/search?keyword=西甲主席与中国大使会面)
1. [iPhone Duo遭吐槽意味着什么](https://so.toutiao.com/search?keyword=iPhone%20Duo遭吐槽意味着什么)
1. [男子没孩子一直怪妻子结果是无精症](https://so.toutiao.com/search?keyword=男子没孩子一直怪妻子结果是无精症)
1. [多所高校工资绕开银行卡意味着什么](https://so.toutiao.com/search?keyword=多所高校工资绕开银行卡意味着什么)
1. [日本高官为何呼吁老百姓囤粮](https://so.toutiao.com/search?keyword=日本高官为何呼吁老百姓囤粮)
1. [女子被蜱虫咬伤后确诊森林脑炎](https://so.toutiao.com/search?keyword=女子被蜱虫咬伤后确诊森林脑炎)
1. [3000万豪宅地库出入口在隧道](https://so.toutiao.com/search?keyword=3000万豪宅地库出入口在隧道)
1. [悬空寺恐高游客每一步都在硬撑](https://so.toutiao.com/search?keyword=悬空寺恐高游客每一步都在硬撑)
1. [邵永灵：特朗普成“票房毒药”](https://so.toutiao.com/search?keyword=邵永灵：特朗普成“票房毒药”)
1. [身家1270亿周群飞成中国女首富](https://so.toutiao.com/search?keyword=身家1270亿周群飞成中国女首富)
1. [村民1800斤玉米被一夜掰光 民警追回](https://so.toutiao.com/search?keyword=村民1800斤玉米被一夜掰光%20民警追回)
1. [樊振东社媒取关姆巴佩](https://so.toutiao.com/search?keyword=樊振东社媒取关姆巴佩)
1. [专家呼吁重视脑梗死](https://so.toutiao.com/search?keyword=专家呼吁重视脑梗死)
1. [大众计划2027年实现L3技术就绪](https://so.toutiao.com/search?keyword=大众计划2027年实现L3技术就绪)
1. [姆巴佩三语道歉是真心悔过吗](https://so.toutiao.com/search?keyword=姆巴佩三语道歉是真心悔过吗)
1. [国台办回应特朗普涉台言论](https://so.toutiao.com/search?keyword=国台办回应特朗普涉台言论)
1. [以优良作风厚植党的执政根基](https://so.toutiao.com/search?keyword=以优良作风厚植党的执政根基)
1. [民调：内塔尼亚胡阵营未获过半议席](https://so.toutiao.com/search?keyword=民调：内塔尼亚胡阵营未获过半议席)
1. [澳方向中方返还两件文物](https://so.toutiao.com/search?keyword=澳方向中方返还两件文物)
1. [国台办：祖国终将统一也必将统一](https://so.toutiao.com/search?keyword=国台办：祖国终将统一也必将统一)
1. [金鸡影帝戈治均去世](https://so.toutiao.com/search?keyword=金鸡影帝戈治均去世)
1. [交旅融合绘就出行新图景](https://so.toutiao.com/search?keyword=交旅融合绘就出行新图景)
1. [23只硬科技股目标上涨空间超100%](https://so.toutiao.com/search?keyword=23只硬科技股目标上涨空间超100%)
1. [长期吃素能“排毒”？假的](https://so.toutiao.com/search?keyword=长期吃素能“排毒”？假的)
1. [东契奇复制粘贴式三分](https://so.toutiao.com/search?keyword=东契奇复制粘贴式三分)
1. [邱世卿谈在台喊“我是中国人”遭网暴](https://so.toutiao.com/search?keyword=邱世卿谈在台喊“我是中国人”遭网暴)
1. [研究发现吃肉可能与长寿有关](https://so.toutiao.com/search?keyword=研究发现吃肉可能与长寿有关)
1. [外媒记者惊叹中国大规模制造能力](https://so.toutiao.com/search?keyword=外媒记者惊叹中国大规模制造能力)
1. [日本防灾大臣喊话囤粮释放什么信号](https://so.toutiao.com/search?keyword=日本防灾大臣喊话囤粮释放什么信号)
1. [三星折叠屏手机广告切“苹果”](https://so.toutiao.com/search?keyword=三星折叠屏手机广告切“苹果”)
1. [央视称皇马道歉没到位前一切免谈](https://so.toutiao.com/search?keyword=央视称皇马道歉没到位前一切免谈)
1. [毛林林：比起做母亲更想先做自己](https://so.toutiao.com/search?keyword=毛林林：比起做母亲更想先做自己)
1. [采访姆巴佩节目组致歉](https://so.toutiao.com/search?keyword=采访姆巴佩节目组致歉)
1. [菲军舰“跟踪”辽宁舰？全世界都笑了](https://so.toutiao.com/search?keyword=菲军舰“跟踪”辽宁舰？全世界都笑了)
1. [媒体：姆巴佩的一纸道歉难掩伤害](https://so.toutiao.com/search?keyword=媒体：姆巴佩的一纸道歉难掩伤害)
1. [国台办：越来越多台湾渔产品走入大陆](https://so.toutiao.com/search?keyword=国台办：越来越多台湾渔产品走入大陆)
1. [运油-20给歼-15T空中加油意味什么](https://so.toutiao.com/search?keyword=运油-20给歼-15T空中加油意味什么)
1. [媒体：姆巴佩认的是账不是错](https://so.toutiao.com/search?keyword=媒体：姆巴佩认的是账不是错)
1. [腾讯旗下两款游戏下架姆巴佩素材](https://so.toutiao.com/search?keyword=腾讯旗下两款游戏下架姆巴佩素材)
1. [小博索纳罗败选后赴美有何影响](https://so.toutiao.com/search?keyword=小博索纳罗败选后赴美有何影响)
1. [媒体喊话皇马：别总当鸵鸟](https://so.toutiao.com/search?keyword=媒体喊话皇马：别总当鸵鸟)
1. [妙可蓝多该如何算好营销账](https://so.toutiao.com/search?keyword=妙可蓝多该如何算好营销账)
1. [俄向日本提恢复全面对话条件](https://so.toutiao.com/search?keyword=俄向日本提恢复全面对话条件)
1. [普京称俄罗斯与伊朗保持密切合作](https://so.toutiao.com/search?keyword=普京称俄罗斯与伊朗保持密切合作)
1. [马斯克言论引爆存储板块](https://so.toutiao.com/search?keyword=马斯克言论引爆存储板块)
1. [大布与孙颖莎切磋对练全程迷弟笑](https://so.toutiao.com/search?keyword=大布与孙颖莎切磋对练全程迷弟笑)
1. [中国足协与皇马俱乐部严正交涉](https://so.toutiao.com/search?keyword=中国足协与皇马俱乐部严正交涉)
1. [印度黄金珠宝商罕见集体空仓](https://so.toutiao.com/search?keyword=印度黄金珠宝商罕见集体空仓)
1. [刚买就要换电池？二手电车还能买吗](https://so.toutiao.com/search?keyword=刚买就要换电池？二手电车还能买吗)
1. [光明日报：不容侮辱中国已故伟大领袖](https://so.toutiao.com/search?keyword=光明日报：不容侮辱中国已故伟大领袖)
1. [黄金为何跌破四千美元](https://so.toutiao.com/search?keyword=黄金为何跌破四千美元)
1. [一辆新能源车的“德国朋友圈”](https://so.toutiao.com/search?keyword=一辆新能源车的“德国朋友圈”)
1. [西甲致歉](https://so.toutiao.com/search?keyword=西甲致歉)
1. [人民日报：停车收费要算清“分钟账”](https://so.toutiao.com/search?keyword=人民日报：停车收费要算清“分钟账”)
1. [邱毅：台选举只剩“民主”虚伪外衣](https://so.toutiao.com/search?keyword=邱毅：台选举只剩“民主”虚伪外衣)
1. [刷新吉尼斯纪录的张雪机车现身新晃](https://so.toutiao.com/search?keyword=刷新吉尼斯纪录的张雪机车现身新晃)
1. [看作风建设如何落到群众身边](https://so.toutiao.com/search?keyword=看作风建设如何落到群众身边)
1. [身家1270亿 周群飞成中国女首富](https://so.toutiao.com/search?keyword=身家1270亿%20周群飞成中国女首富)
1. [德总统在安徽开电车体验手机停车](https://so.toutiao.com/search?keyword=德总统在安徽开电车体验手机停车)
1. [为何中国一直不拖走菲律宾“破船”](https://so.toutiao.com/search?keyword=为何中国一直不拖走菲律宾“破船”)
1. [储户拿“离柜概不负责”拒退钱](https://so.toutiao.com/search?keyword=储户拿“离柜概不负责”拒退钱)
1. [前9月规上工业企业利润较快增长](https://so.toutiao.com/search?keyword=前9月规上工业企业利润较快增长)
1. [外交部回应姆巴佩发表不当言论](https://so.toutiao.com/search?keyword=外交部回应姆巴佩发表不当言论)
1. [四价流感疫苗消失了？不实](https://so.toutiao.com/search?keyword=四价流感疫苗消失了？不实)
1. [卢拉连任后巴西资产为何暴跌](https://so.toutiao.com/search?keyword=卢拉连任后巴西资产为何暴跌)
1. [大众想用中国成果反哺欧洲市场](https://so.toutiao.com/search?keyword=大众想用中国成果反哺欧洲市场)
1. [网友称参加婚礼吃了一桌子外卖](https://so.toutiao.com/search?keyword=网友称参加婚礼吃了一桌子外卖)
1. [民调：利库德集团仍为以议会最大党](https://so.toutiao.com/search?keyword=民调：利库德集团仍为以议会最大党)
1. [阿森纳爆冷被336倍身价差球队淘汰](https://so.toutiao.com/search?keyword=阿森纳爆冷被336倍身价差球队淘汰)
1. [央视全面叫停涉姆巴佩赛事和广告播出](https://so.toutiao.com/search?keyword=央视全面叫停涉姆巴佩赛事和广告播出)
1. [男子趁金价下跌给媳妇买金镯子](https://so.toutiao.com/search?keyword=男子趁金价下跌给媳妇买金镯子)
1. [小米首个住宅小区开售](https://so.toutiao.com/search?keyword=小米首个住宅小区开售)
1. [美伊战争警报为何再起](https://so.toutiao.com/search?keyword=美伊战争警报为何再起)
1. [许家印香港山顶豪宅被曝违建730平](https://so.toutiao.com/search?keyword=许家印香港山顶豪宅被曝违建730平)
1. [皇马两年4踩涉华底线为何一错再错](https://so.toutiao.com/search?keyword=皇马两年4踩涉华底线为何一错再错)
1. [爱德华兹将接受手术预计缺席俩月](https://so.toutiao.com/search?keyword=爱德华兹将接受手术预计缺席俩月)
1. [年轻人为什么爱上骑小电驴](https://so.toutiao.com/search?keyword=年轻人为什么爱上骑小电驴)
1. [美联储今夜还加息吗](https://so.toutiao.com/search?keyword=美联储今夜还加息吗)
1. [男子称在胖东来买酒1年多后被退差价](https://so.toutiao.com/search?keyword=男子称在胖东来买酒1年多后被退差价)
1. [昂跑要掂量下姆巴佩和中国哪个重要](https://so.toutiao.com/search?keyword=昂跑要掂量下姆巴佩和中国哪个重要)
1. [博主：老干妈这次的负分不冤](https://so.toutiao.com/search?keyword=博主：老干妈这次的负分不冤)
1. [花生是血脂“杀手”吗](https://so.toutiao.com/search?keyword=花生是血脂“杀手”吗)
1. [新郎邀网友撑场面两天接待近200人](https://so.toutiao.com/search?keyword=新郎邀网友撑场面两天接待近200人)
1. [中国对菲律宾有哪些反制手段](https://so.toutiao.com/search?keyword=中国对菲律宾有哪些反制手段)
1. [皇马吧声明：坚守底线](https://so.toutiao.com/search?keyword=皇马吧声明：坚守底线)
1. [有理儿有面：特朗普悬赏抓“鬼”](https://so.toutiao.com/search?keyword=有理儿有面：特朗普悬赏抓“鬼”)
1. [宇树为何要在暴涨途中主动“泼冷水”](https://so.toutiao.com/search?keyword=宇树为何要在暴涨途中主动“泼冷水”)
1. [媒体：底线面前姆巴佩道歉没有豁免权](https://so.toutiao.com/search?keyword=媒体：底线面前姆巴佩道歉没有豁免权)
1. [C罗入选国家队11月初选名单](https://so.toutiao.com/search?keyword=C罗入选国家队11月初选名单)
1. [三季度公募基金前十大重仓股](https://so.toutiao.com/search?keyword=三季度公募基金前十大重仓股)
1. [Anthropic研究员给全球博士生泼冷水](https://so.toutiao.com/search?keyword=Anthropic研究员给全球博士生泼冷水)
1. [陈国豪高效贡献14分7篮板](https://so.toutiao.com/search?keyword=陈国豪高效贡献14分7篮板)
1. [日本演练从陆地打击军舰意欲何为](https://so.toutiao.com/search?keyword=日本演练从陆地打击军舰意欲何为)
1. [多国为何不敢轻易下场帮沙特](https://so.toutiao.com/search?keyword=多国为何不敢轻易下场帮沙特)
1. [申裕斌3-0郑怡静晋级16强](https://so.toutiao.com/search?keyword=申裕斌3-0郑怡静晋级16强)
1. [央行发布9月股票市场运行情况](https://so.toutiao.com/search?keyword=央行发布9月股票市场运行情况)
1. [巨额“神秘资金”涌入美国中期选举](https://so.toutiao.com/search?keyword=巨额“神秘资金”涌入美国中期选举)
1. [博主：短剧的黄金时代可能还在路上](https://so.toutiao.com/search?keyword=博主：短剧的黄金时代可能还在路上)
1. [17岁AI研究员被曝获700万年薪邀约](https://so.toutiao.com/search?keyword=17岁AI研究员被曝获700万年薪邀约)
1. [你吃的烤肠可能是鸡脖子做的](https://so.toutiao.com/search?keyword=你吃的烤肠可能是鸡脖子做的)
1. [白银遭遇史诗级洗盘](https://so.toutiao.com/search?keyword=白银遭遇史诗级洗盘)
1. [卢拉因何实现逆风翻盘](https://so.toutiao.com/search?keyword=卢拉因何实现逆风翻盘)
1. [家长月花3000多元住酒店陪读](https://so.toutiao.com/search?keyword=家长月花3000多元住酒店陪读)
1. [武契奇败选意味着什么](https://so.toutiao.com/search?keyword=武契奇败选意味着什么)
1. [王会民贪4.36亿获死缓](https://so.toutiao.com/search?keyword=王会民贪4.36亿获死缓)
1. [我国进入中度老龄化阶段](https://so.toutiao.com/search?keyword=我国进入中度老龄化阶段)
1. [A股千元股只剩贵州茅台意味着什么](https://so.toutiao.com/search?keyword=A股千元股只剩贵州茅台意味着什么)
1. [钓鱼者踩断大桥管道1人死亡](https://so.toutiao.com/search?keyword=钓鱼者踩断大桥管道1人死亡)
1. [德国总统时隔8年再访华传递什么信号](https://so.toutiao.com/search?keyword=德国总统时隔8年再访华传递什么信号)
1. [以议会选举或决定内塔尼亚胡政治生涯](https://so.toutiao.com/search?keyword=以议会选举或决定内塔尼亚胡政治生涯)
1. [总台回应西甲主席](https://so.toutiao.com/search?keyword=总台回应西甲主席)
1. [邵永灵：辽宁舰西太砺兵直面外部施压](https://so.toutiao.com/search?keyword=邵永灵：辽宁舰西太砺兵直面外部施压)
1. [石家庄彩民花10元中682万大奖](https://so.toutiao.com/search?keyword=石家庄彩民花10元中682万大奖)
1. [吃中国饭砸中国锅 姆巴佩不配](https://so.toutiao.com/search?keyword=吃中国饭砸中国锅%20姆巴佩不配)
1. [租客留277元离开房东退回1177元](https://so.toutiao.com/search?keyword=租客留277元离开房东退回1177元)
1. [白鹤滩水电站把奔涌江水变成清洁电能](https://so.toutiao.com/search?keyword=白鹤滩水电站把奔涌江水变成清洁电能)
1. [姆巴佩多平台被禁言](https://so.toutiao.com/search?keyword=姆巴佩多平台被禁言)
1. [邵永灵：七国为美日军演站台各怀心思](https://so.toutiao.com/search?keyword=邵永灵：七国为美日军演站台各怀心思)
1. [美中期选举前夕民调出炉](https://so.toutiao.com/search?keyword=美中期选举前夕民调出炉)
1. [媒体：喜欢姆巴佩不等于无条件包庇](https://so.toutiao.com/search?keyword=媒体：喜欢姆巴佩不等于无条件包庇)
1. [不吃甜食就不会得糖尿病吗](https://so.toutiao.com/search?keyword=不吃甜食就不会得糖尿病吗)
1. [苹果折叠屏“出师不利”](https://so.toutiao.com/search?keyword=苹果折叠屏“出师不利”)
1. [塞尔维亚前进党为何会败选](https://so.toutiao.com/search?keyword=塞尔维亚前进党为何会败选)
1. [乌称俄发动16枚弹道导弹袭乌](https://so.toutiao.com/search?keyword=乌称俄发动16枚弹道导弹袭乌)
1. [别让智慧养老院沦为“聪明摆设”](https://so.toutiao.com/search?keyword=别让智慧养老院沦为“聪明摆设”)
1. [同是国产摩托车夺冠为何热度有差别](https://so.toutiao.com/search?keyword=同是国产摩托车夺冠为何热度有差别)
1. [俄乌冲突今年能否终结](https://so.toutiao.com/search?keyword=俄乌冲突今年能否终结)
1. [家电企业冰火两重天](https://so.toutiao.com/search?keyword=家电企业冰火两重天)
1. [中部六省22万亿GDP背后](https://so.toutiao.com/search?keyword=中部六省22万亿GDP背后)
1. [苹果承认少量iPhone Duo内屏异常](https://so.toutiao.com/search?keyword=苹果承认少量iPhone%20Duo内屏异常)
1. [昂跑39天前才签下姆巴佩](https://so.toutiao.com/search?keyword=昂跑39天前才签下姆巴佩)
1. [章子怡受聘香港浸会大学荣誉教授](https://so.toutiao.com/search?keyword=章子怡受聘香港浸会大学荣誉教授)
1. [漫评：日本借“安全焦虑”搞军事扩张](https://so.toutiao.com/search?keyword=漫评：日本借“安全焦虑”搞军事扩张)
1. [蜜雪冰城将全面使用悦鲜活牛奶](https://so.toutiao.com/search?keyword=蜜雪冰城将全面使用悦鲜活牛奶)
1. [网红“双波”ICU昏迷24天后苏醒](https://so.toutiao.com/search?keyword=网红“双波”ICU昏迷24天后苏醒)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Oct 28 2026 23:59:32 GMT+0800 (China Standard Time) -->

1. [金价大跌](https://www.zhihu.com/search?q=%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C)
1. [姆巴佩涉华不当言论](https://www.zhihu.com/search?q=%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B6%89%E5%8D%8E%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA)
1. [西班牙高铁相撞已致64人死亡](https://www.zhihu.com/search?q=%E8%A5%BF%E7%8F%AD%E7%89%99%E9%AB%98%E9%93%81%E7%9B%B8%E6%92%9E%E5%B7%B2%E8%87%B464%E4%BA%BA%E6%AD%BB%E4%BA%A1)
1. [好奇岛装扮游戏](https://www.zhihu.com/search?q=%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [反诈博主徽剑被曝遇害](https://www.zhihu.com/search?q=%E5%8F%8D%E8%AF%88%E5%8D%9A%E4%B8%BB%E5%BE%BD%E5%89%91%E8%A2%AB%E6%9B%9D%E9%81%87%E5%AE%B3)
1. [毛不易婚礼致辞争议](https://www.zhihu.com/search?q=%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E8%87%B4%E8%BE%9E%E4%BA%89%E8%AE%AE)
1. [极客湾《旗舰手机大横评》](https://www.zhihu.com/search?q=%E6%9E%81%E5%AE%A2%E6%B9%BE%E3%80%8A%E6%97%97%E8%88%B0%E6%89%8B%E6%9C%BA%E5%A4%A7%E6%A8%AA%E8%AF%84%E3%80%8B)
1. [巴基斯坦对台湾航司关闭领空](https://www.zhihu.com/search?q=%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%AF%B9%E5%8F%B0%E6%B9%BE%E8%88%AA%E5%8F%B8%E5%85%B3%E9%97%AD%E9%A2%86%E7%A9%BA)
1. [央视称皇马的道歉没到位前一切免谈](https://www.zhihu.com/search?q=%E5%A4%AE%E8%A7%86%E7%A7%B0%E7%9A%87%E9%A9%AC%E7%9A%84%E9%81%93%E6%AD%89%E6%B2%A1%E5%88%B0%E4%BD%8D%E5%89%8D%E4%B8%80%E5%88%87%E5%85%8D%E8%B0%88)
1. [多方终止与姆巴佩合作](https://www.zhihu.com/search?q=%E5%A4%9A%E6%96%B9%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%90%88%E4%BD%9C)
1. [OpenAI宣布斩获三项重大科学突破](https://www.zhihu.com/search?q=OpenAI%E5%AE%A3%E5%B8%83%E6%96%A9%E8%8E%B7%E4%B8%89%E9%A1%B9%E9%87%8D%E5%A4%A7%E7%A7%91%E5%AD%A6%E7%AA%81%E7%A0%B4)
1. [蒋欣遭男设计师突然亲脖子](https://www.zhihu.com/search?q=%E8%92%8B%E6%AC%A3%E9%81%AD%E7%94%B7%E8%AE%BE%E8%AE%A1%E5%B8%88%E7%AA%81%E7%84%B6%E4%BA%B2%E8%84%96%E5%AD%90)
1. [皇马称姆巴佩仅代表个人](https://www.zhihu.com/search?q=%E7%9A%87%E9%A9%AC%E7%A7%B0%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BB%85%E4%BB%A3%E8%A1%A8%E4%B8%AA%E4%BA%BA)
1. [县委书记拒绝张雪为家乡打广告](https://www.zhihu.com/search?q=%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%92%E7%BB%9D%E5%BC%A0%E9%9B%AA%E4%B8%BA%E5%AE%B6%E4%B9%A1%E6%89%93%E5%B9%BF%E5%91%8A)
1. [外交部回应姆巴佩道歉](https://www.zhihu.com/search?q=%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%81%93%E6%AD%89)
1. [网传李子祺研一主刀手术患者死亡](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E6%9D%8E%E5%AD%90%E7%A5%BA%E7%A0%94%E4%B8%80%E4%B8%BB%E5%88%80%E6%89%8B%E6%9C%AF%E6%82%A3%E8%80%85%E6%AD%BB%E4%BA%A1)
1. [中国互联网到底存不存在字节时间](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E5%88%B0%E5%BA%95%E5%AD%98%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%AD%97%E8%8A%82%E6%97%B6%E9%97%B4)
1. [中国足协与皇马俱乐部严正交涉](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E8%B6%B3%E5%8D%8F%E4%B8%8E%E7%9A%87%E9%A9%AC%E4%BF%B1%E4%B9%90%E9%83%A8%E4%B8%A5%E6%AD%A3%E4%BA%A4%E6%B6%89)
1. [中土网民爆发大规模互怼](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9C%9F%E7%BD%91%E6%B0%91%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%92%E6%80%BC)
1. [OpenAI证伪ETH猜想](https://www.zhihu.com/search?q=OpenAI%E8%AF%81%E4%BC%AAETH%E7%8C%9C%E6%83%B3)
1. [姆巴佩道歉](https://www.zhihu.com/search?q=%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%81%93%E6%AD%89)
1. [日剧Vivant抹黑中国](https://www.zhihu.com/search?q=%E6%97%A5%E5%89%A7Vivant%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD)
1. [法国报告首例人类感染沙蒙达病毒](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E6%8A%A5%E5%91%8A%E9%A6%96%E4%BE%8B%E4%BA%BA%E7%B1%BB%E6%84%9F%E6%9F%93%E6%B2%99%E8%92%99%E8%BE%BE%E7%97%85%E6%AF%92)
1. [小米首个住宅小区开售](https://www.zhihu.com/search?q=%E5%B0%8F%E7%B1%B3%E9%A6%96%E4%B8%AA%E4%BD%8F%E5%AE%85%E5%B0%8F%E5%8C%BA%E5%BC%80%E5%94%AE)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Oct 29 2026 00:05:16 GMT+0800 (China Standard Time) -->

1. [外交部回应姆巴佩道歉，「我们重视当事人作出的道歉」，姆巴佩事件的后续走向还有哪些可能性？](https://www.zhihu.com/question/2098798235125019600)
1. [西班牙高铁相撞事故已造成 64 人死亡，有中国公民受伤，初步调查显示事故系人为失误所致，具体情况如何？](https://www.zhihu.com/question/2098832855782483000)
1. [小米首个住宅小区正式开售，仅面向内部员工销售，为何小米开始卖房了？未来会推出更多楼盘向大众销售吗？](https://www.zhihu.com/question/2098438230131433500)
1. [「酱油」一词为什么正在被「生抽」和「老抽」替代？](https://www.zhihu.com/question/618083427)
1. [如何评价秦朔发文《可怕的红果与中国互联网的字节时间》？](https://www.zhihu.com/question/2098759832840794000)
1. [央媒称不认可皇马表态，此前皇马称姆巴佩仅代表个人，俱乐部和中国赞助商合作照常，皇马为何敢如此「傲慢」？](https://www.zhihu.com/question/2098687138820616200)
1. [自媒体称澳大利亚每年花费巨额从中国进口屎壳郎，这是真吗？中国的屎壳郎真的如此兢兢业业、不挑食吗？](https://www.zhihu.com/question/626416441)
1. [媒体呼吁「医疗真人秀叫停」，《offer 8》会被整改或停播吗？节目对医患信任的真实影响到底有多严重？](https://www.zhihu.com/question/2098377875137062400)
1. [如何评价樊振东首次解说MLB（美国职业棒球大联盟）比赛？](https://www.zhihu.com/question/2098851131489260300)
1. [很多年轻人「对工作的容忍度只有两年」，这反映出怎样的职场心态？](https://www.zhihu.com/question/2065927971630856000)
1. [年轻人开始流行「喝大水」，喝水越多越好吗？短时间大量喝水有什么危害？如何正确饮水？](https://www.zhihu.com/question/2096616246028649700)
1. [安徽女子赴泰失联近 3 个月，家属称被拐至园区 50 万元遭转走，警方已立案，具体情况如何？](https://www.zhihu.com/question/2098549728707179000)
1. [《影之刃零》的特别鸣谢名单占据游戏界的半壁江山，刘伟、女流、冯骥统统上榜，对此你怎么看？](https://www.zhihu.com/question/2098821087471654400)
1. [近五年旋转小火锅新增门店超2万家，海底捞等巨头争相入局，为啥旋转小火锅又火了？这一次热潮能持续多久？](https://www.zhihu.com/question/2098496213372723200)
1. [如果鸡能长到100千克重，那人是不是就有巨大的鸡翅可以吃了？](https://www.zhihu.com/question/2083553210300625400)
1. [为什么我感觉时间过得越来越快？](https://www.zhihu.com/question/50821488)
1. [S16 全球总决赛 Faker 及 T1 达成第七冠的概率有多大？](https://www.zhihu.com/question/2098127889073793000)
1. [公司以绩效考核的方式全员扣工资，但考核后业绩越来越差，感觉陷入了恶性循环，是不是哪错了，如何调整？](https://www.zhihu.com/question/1933551197136062200)
1. [孩子作业还没完成，该不该带他去参加家庭中的重要活动？](https://www.zhihu.com/question/2092343435931940600)
1. [华为 PuraXView 销量超 60 万台且持续缺货，阔直屏形态会成为行业新趋势吗？](https://www.zhihu.com/question/2097980354397315600)
1. [海信回应与皇马合作，称与皇马的赞助区域仅限西班牙地区，这样就能撇清关系吗？](https://www.zhihu.com/question/2098775137059173600)
1. [任泽平被取消「经济学家」认证，如何看待诸多网红经济学家的含金量？](https://www.zhihu.com/question/2098715823489513200)
1. [如何看待皇马官方致歉，称「就姆巴佩近期言论对中国人民造成的不适表达歉意」？](https://www.zhihu.com/question/2098823562035295000)
1. [自己累死累活，孩子觉得理所当然，怎么才能让孩子懂得感恩，而不是一味索取？](https://www.zhihu.com/question/1958130310219818000)
1. [如何评价2026年纪录片「人生七年」系列的最终章《70up》?](https://www.zhihu.com/question/2098384062008370200)
1. [《鹿鼎记》海大富查清了太后的秘密，为什么不告诉康熙，反而自己深夜去摊牌？](https://www.zhihu.com/question/2069031468723185000)
1. [如果有一天没有大模型了，古法编程你还回的去吗？](https://www.zhihu.com/question/2082439003412894500)
1. [你们早上一般都喜欢吃什么早餐？](https://www.zhihu.com/question/10066499527)
1. [如何评价电影《奇怪的她》？](https://www.zhihu.com/question/23946888)
1. [如何看待张一鸣以 6700 亿元登顶中国首富，刷新中国首富财富纪录？今年的胡润百富榜有哪些新变化？](https://www.zhihu.com/question/2098365544483255300)

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
<!-- 最后更新时间 Thu Oct 29 2026 00:43:53 GMT+0800 (China Standard Time) -->

1. [新征程上持之以恒推进全面从严治党](https://s.weibo.com//weibo?q=%23%E6%96%B0%E5%BE%81%E7%A8%8B%E4%B8%8A%E6%8C%81%E4%B9%8B%E4%BB%A5%E6%81%92%E6%8E%A8%E8%BF%9B%E5%85%A8%E9%9D%A2%E4%BB%8E%E4%B8%A5%E6%B2%BB%E5%85%9A%23&Refer=new_time)
1. [女子欠1700元被限高公开照片](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AC%A01700%E5%85%83%E8%A2%AB%E9%99%90%E9%AB%98%E5%85%AC%E5%BC%80%E7%85%A7%E7%89%87%23&t=31&band_rank=1&Refer=top)
1. [巴基斯坦对台湾航司关闭领空](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%AF%B9%E5%8F%B0%E6%B9%BE%E8%88%AA%E5%8F%B8%E5%85%B3%E9%97%AD%E9%A2%86%E7%A9%BA%23&t=31&band_rank=2&Refer=top)
1. [数说中国经济澎湃动能](https://s.weibo.com//weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E6%BE%8E%E6%B9%83%E5%8A%A8%E8%83%BD%23&t=31&band_rank=3&Refer=top)
1. [西班牙列车相撞已致68死](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%88%97%E8%BD%A6%E7%9B%B8%E6%92%9E%E5%B7%B2%E8%87%B468%E6%AD%BB%23&t=31&band_rank=4&Refer=top)
1. [剑来](https://s.weibo.com//weibo?q=%E5%89%91%E6%9D%A5&t=31&band_rank=5&Refer=top)
1. [理想i6首销挤爆APP](https://s.weibo.com//weibo?q=%23%E7%90%86%E6%83%B3i6%E9%A6%96%E9%94%80%E6%8C%A4%E7%88%86APP%23&t=31&band_rank=6&Refer=top)
1. [女子被蜱虫咬伤住ICU28天四肢瘫痪](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%9C%B1%E8%99%AB%E5%92%AC%E4%BC%A4%E4%BD%8FICU28%E5%A4%A9%E5%9B%9B%E8%82%A2%E7%98%AB%E7%97%AA%23&t=31&band_rank=7&Refer=top)
1. [开始推理吧官宣第五季](https://s.weibo.com//weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%E5%AE%98%E5%AE%A3%E7%AC%AC%E4%BA%94%E5%AD%A3%23&t=31&band_rank=8&Refer=top)
1. [刘延东同志逝世](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%BB%B6%E4%B8%9C%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23&t=31&band_rank=9&Refer=top)
1. [这些电影真的巨好看](https://s.weibo.com//weibo?q=%E8%BF%99%E4%BA%9B%E7%94%B5%E5%BD%B1%E7%9C%9F%E7%9A%84%E5%B7%A8%E5%A5%BD%E7%9C%8B&t=31&band_rank=10&Refer=top)
1. [现在就出发5 金晨](https://s.weibo.com//weibo?q=%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%915%20%E9%87%91%E6%99%A8&t=31&band_rank=11&Refer=top)
1. [三丽鸥将与抹黑中国日剧再次联名](https://s.weibo.com//weibo?q=%23%E4%B8%89%E4%B8%BD%E9%B8%A5%E5%B0%86%E4%B8%8E%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD%E6%97%A5%E5%89%A7%E5%86%8D%E6%AC%A1%E8%81%94%E5%90%8D%23&t=31&band_rank=12&Refer=top)
1. [十日终焉](https://s.weibo.com//weibo?q=%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89&t=31&band_rank=13&Refer=top)
1. [以色列大选](https://s.weibo.com//weibo?q=%E4%BB%A5%E8%89%B2%E5%88%97%E5%A4%A7%E9%80%89&t=31&band_rank=14&Refer=top)
1. [白小纯 青稚](https://s.weibo.com//weibo?q=%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E9%9D%92%E7%A8%9A&t=31&band_rank=15&Refer=top)
1. [坠亡幼童父亲曾两次网购窗户安全锁](https://s.weibo.com//weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E6%9B%BE%E4%B8%A4%E6%AC%A1%E7%BD%91%E8%B4%AD%E7%AA%97%E6%88%B7%E5%AE%89%E5%85%A8%E9%94%81%23&t=31&band_rank=16&Refer=top)
1. [夏夏去世前断联多年的父母来送别](https://s.weibo.com//weibo?q=%23%E5%A4%8F%E5%A4%8F%E5%8E%BB%E4%B8%96%E5%89%8D%E6%96%AD%E8%81%94%E5%A4%9A%E5%B9%B4%E7%9A%84%E7%88%B6%E6%AF%8D%E6%9D%A5%E9%80%81%E5%88%AB%23&t=31&band_rank=17&Refer=top)
1. [新征程上持之以恒推进全面从严治党](https://s.weibo.com//weibo?q=%23%E6%96%B0%E5%BE%81%E7%A8%8B%E4%B8%8A%E6%8C%81%E4%B9%8B%E4%BB%A5%E6%81%92%E6%8E%A8%E8%BF%9B%E5%85%A8%E9%9D%A2%E4%BB%8E%E4%B8%A5%E6%B2%BB%E5%85%9A%23&t=31&band_rank=18&Refer=top)
1. [NEON编舞师称无人跳对](https://s.weibo.com//weibo?q=NEON%E7%BC%96%E8%88%9E%E5%B8%88%E7%A7%B0%E6%97%A0%E4%BA%BA%E8%B7%B3%E5%AF%B9&t=31&band_rank=19&Refer=top)
1. [华为](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA&t=31&band_rank=20&Refer=top)
1. [每天吃四个鸡蛋一个月血脂会怎样](https://s.weibo.com//weibo?q=%E6%AF%8F%E5%A4%A9%E5%90%83%E5%9B%9B%E4%B8%AA%E9%B8%A1%E8%9B%8B%E4%B8%80%E4%B8%AA%E6%9C%88%E8%A1%80%E8%84%82%E4%BC%9A%E6%80%8E%E6%A0%B7&t=31&band_rank=21&Refer=top)
1. [王艺迪展望卫冕之旅](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AA%E5%B1%95%E6%9C%9B%E5%8D%AB%E5%86%95%E4%B9%8B%E6%97%85%23&t=31&band_rank=22&Refer=top)
1. [皇马在1.8亿粉平台发布道歉](https://s.weibo.com//weibo?q=%23%E7%9A%87%E9%A9%AC%E5%9C%A81.8%E4%BA%BF%E7%B2%89%E5%B9%B3%E5%8F%B0%E5%8F%91%E5%B8%83%E9%81%93%E6%AD%89%23&t=31&band_rank=23&Refer=top)
1. [樊振东说很荣幸走进棒球世界](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%AF%B4%E5%BE%88%E8%8D%A3%E5%B9%B8%E8%B5%B0%E8%BF%9B%E6%A3%92%E7%90%83%E4%B8%96%E7%95%8C%23&t=31&band_rank=24&Refer=top)
1. [皇马第一次低头来得太晚](https://s.weibo.com//weibo?q=%23%E7%9A%87%E9%A9%AC%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%BD%8E%E5%A4%B4%E6%9D%A5%E5%BE%97%E5%A4%AA%E6%99%9A%23&t=31&band_rank=25&Refer=top)
1. [我承认之前对尚公主声音大了点](https://s.weibo.com//weibo?q=%23%E6%88%91%E6%89%BF%E8%AE%A4%E4%B9%8B%E5%89%8D%E5%AF%B9%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%A3%B0%E9%9F%B3%E5%A4%A7%E4%BA%86%E7%82%B9%23&t=31&band_rank=26&Refer=top)
1. [姆巴佩的道歉没发1.35亿粉的iG上](https://s.weibo.com//weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%9A%84%E9%81%93%E6%AD%89%E6%B2%A1%E5%8F%911.35%E4%BA%BF%E7%B2%89%E7%9A%84iG%E4%B8%8A%23&t=31&band_rank=27&Refer=top)
1. [张铭恩 给女友拍照是男人一生的课题](https://s.weibo.com//weibo?q=%E5%BC%A0%E9%93%AD%E6%81%A9%20%E7%BB%99%E5%A5%B3%E5%8F%8B%E6%8B%8D%E7%85%A7%E6%98%AF%E7%94%B7%E4%BA%BA%E4%B8%80%E7%94%9F%E7%9A%84%E8%AF%BE%E9%A2%98&t=31&band_rank=28&Refer=top)
1. [剑来拍出了李宛妲的人生镜头](https://s.weibo.com//weibo?q=%23%E5%89%91%E6%9D%A5%E6%8B%8D%E5%87%BA%E4%BA%86%E6%9D%8E%E5%AE%9B%E5%A6%B2%E7%9A%84%E4%BA%BA%E7%94%9F%E9%95%9C%E5%A4%B4%23&t=31&band_rank=29&Refer=top)
1. [王一博怕冰淇淋球掉小抗议了一下](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%80%95%E5%86%B0%E6%B7%87%E6%B7%8B%E7%90%83%E6%8E%89%E5%B0%8F%E6%8A%97%E8%AE%AE%E4%BA%86%E4%B8%80%E4%B8%8B%23&t=31&band_rank=30&Refer=top)
1. [老师念一年级值日表名字脚抠地](https://s.weibo.com//weibo?q=%E8%80%81%E5%B8%88%E5%BF%B5%E4%B8%80%E5%B9%B4%E7%BA%A7%E5%80%BC%E6%97%A5%E8%A1%A8%E5%90%8D%E5%AD%97%E8%84%9A%E6%8A%A0%E5%9C%B0&t=31&band_rank=31&Refer=top)
1. [张展硕破潘展乐200自全国纪录](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%B1%95%E7%A1%95%E7%A0%B4%E6%BD%98%E5%B1%95%E4%B9%90200%E8%87%AA%E5%85%A8%E5%9B%BD%E7%BA%AA%E5%BD%95&t=31&band_rank=32&Refer=top)
1. [刘旸 TOP](https://s.weibo.com//weibo?q=%E5%88%98%E6%97%B8%20TOP&t=31&band_rank=33&Refer=top)
1. [狼队战胜TES](https://s.weibo.com//weibo?q=%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CTES&t=31&band_rank=34&Refer=top)
1. [狼队晋级年总胜者组半决赛](https://s.weibo.com//weibo?q=%E7%8B%BC%E9%98%9F%E6%99%8B%E7%BA%A7%E5%B9%B4%E6%80%BB%E8%83%9C%E8%80%85%E7%BB%84%E5%8D%8A%E5%86%B3%E8%B5%9B&t=31&band_rank=35&Refer=top)
1. [张铭恩晒给女友拍的丑照片](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%93%AD%E6%81%A9%E6%99%92%E7%BB%99%E5%A5%B3%E5%8F%8B%E6%8B%8D%E7%9A%84%E4%B8%91%E7%85%A7%E7%89%87%23&t=31&band_rank=36&Refer=top)
1. [西媒就姆巴佩闯下大祸算了笔账](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E5%AA%92%E5%B0%B1%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%97%AF%E4%B8%8B%E5%A4%A7%E7%A5%B8%E7%AE%97%E4%BA%86%E7%AC%94%E8%B4%A6%23&t=31&band_rank=37&Refer=top)
1. [王凯陪王鸥过生日了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%87%AF%E9%99%AA%E7%8E%8B%E9%B8%A5%E8%BF%87%E7%94%9F%E6%97%A5%E4%BA%86%23&t=31&band_rank=38&Refer=top)
1. [皇马道歉函](https://s.weibo.com//weibo?q=%23%E7%9A%87%E9%A9%AC%E9%81%93%E6%AD%89%E5%87%BD%23&t=31&band_rank=39&Refer=top)
1. [姆巴佩言论风波期间更新个人照](https://s.weibo.com//weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%A8%80%E8%AE%BA%E9%A3%8E%E6%B3%A2%E6%9C%9F%E9%97%B4%E6%9B%B4%E6%96%B0%E4%B8%AA%E4%BA%BA%E7%85%A7%23&t=31&band_rank=40&Refer=top)
1. [女子听ChatGPT停药后猝死父亲发声](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%ACChatGPT%E5%81%9C%E8%8D%AF%E5%90%8E%E7%8C%9D%E6%AD%BB%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23&t=31&band_rank=41&Refer=top)
1. [现在就出发5原班人马](https://s.weibo.com//weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%915%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23&t=31&band_rank=42&Refer=top)
1. [陈昊宇加入女子推理社3](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%98%8A%E5%AE%87%E5%8A%A0%E5%85%A5%E5%A5%B3%E5%AD%90%E6%8E%A8%E7%90%86%E7%A4%BE3%23&t=31&band_rank=43&Refer=top)
1. [海信回应与皇马合作](https://s.weibo.com//weibo?q=%23%E6%B5%B7%E4%BF%A1%E5%9B%9E%E5%BA%94%E4%B8%8E%E7%9A%87%E9%A9%AC%E5%90%88%E4%BD%9C%23&t=31&band_rank=44&Refer=top)
1. [已故演员高秀敏被印上祭祀用品](https://s.weibo.com//weibo?q=%23%E5%B7%B2%E6%95%85%E6%BC%94%E5%91%98%E9%AB%98%E7%A7%80%E6%95%8F%E8%A2%AB%E5%8D%B0%E4%B8%8A%E7%A5%AD%E7%A5%80%E7%94%A8%E5%93%81%23&t=31&band_rank=45&Refer=top)
1. [尚公主没搞懂九重紫为啥火](https://s.weibo.com//weibo?q=%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%B2%A1%E6%90%9E%E6%87%82%E4%B9%9D%E9%87%8D%E7%B4%AB%E4%B8%BA%E5%95%A5%E7%81%AB&t=31&band_rank=46&Refer=top)
1. [李宛妲出来那一幕好美](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%AE%9B%E5%A6%B2%E5%87%BA%E6%9D%A5%E9%82%A3%E4%B8%80%E5%B9%95%E5%A5%BD%E7%BE%8E%23&t=31&band_rank=47&Refer=top)
1. [鞠婧祎休假](https://s.weibo.com//weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%BC%91%E5%81%87%23&t=31&band_rank=48&Refer=top)
1. [将门独后](https://s.weibo.com//weibo?q=%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E&t=31&band_rank=49&Refer=top)
1. [2026款理想i6售价24.98万元](https://s.weibo.com//weibo?q=%232026%E6%AC%BE%E7%90%86%E6%83%B3i6%E5%94%AE%E4%BB%B724.98%E4%B8%87%E5%85%83%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
