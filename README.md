# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-20 11:18:28

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
<!-- 最后更新时间 Fri Nov 20 2026 18:24:53 GMT+0800 (China Standard Time) -->

1. [特朗普从中国返美途中发帖](https://so.toutiao.com/search?keyword=特朗普从中国返美途中发帖)
1. [余承东回应“开车可以睡觉”](https://so.toutiao.com/search?keyword=余承东回应“开车可以睡觉”)
1. [中国担任2026APEC东道主成果清单](https://so.toutiao.com/search?keyword=中国担任2026APEC东道主成果清单)
1. [日方称中方接待高市早苗符合惯例](https://so.toutiao.com/search?keyword=日方称中方接待高市早苗符合惯例)
1. [华为全新子品牌星芒正式发布](https://so.toutiao.com/search?keyword=华为全新子品牌星芒正式发布)
1. [县委书记说不能过度消费张雪](https://so.toutiao.com/search?keyword=县委书记说不能过度消费张雪)
1. [中方回应高市在深圳就台湾问题表态](https://so.toutiao.com/search?keyword=中方回应高市在深圳就台湾问题表态)
1. [青岛彩民花20元中1369万大奖](https://so.toutiao.com/search?keyword=青岛彩民花20元中1369万大奖)
1. [我国智能制造整体迈入世界前列](https://so.toutiao.com/search?keyword=我国智能制造整体迈入世界前列)
1. [墨西哥总统感谢中国女保镖](https://so.toutiao.com/search?keyword=墨西哥总统感谢中国女保镖)
1. [酸甜苦辣咸五味辟谣图鉴](https://so.toutiao.com/search?keyword=酸甜苦辣咸五味辟谣图鉴)
1. [“全球最大医院”原党委书记被双开](https://so.toutiao.com/search?keyword=“全球最大医院”原党委书记被双开)
1. [特朗普称行程太满没顾上见金正恩](https://so.toutiao.com/search?keyword=特朗普称行程太满没顾上见金正恩)
1. [伊能静一眼看破所有嘉宾](https://so.toutiao.com/search?keyword=伊能静一眼看破所有嘉宾)
1. [女子进金店要买89万黄金 店员报警](https://so.toutiao.com/search?keyword=女子进金店要买89万黄金%20店员报警)
1. [高市是时候收回涉台错误言论了](https://so.toutiao.com/search?keyword=高市是时候收回涉台错误言论了)
1. [儿子将满18岁消失17年的父亲来求赡养](https://so.toutiao.com/search?keyword=儿子将满18岁消失17年的父亲来求赡养)
1. [郎平髋关节膝关节颈椎都做了置换手术](https://so.toutiao.com/search?keyword=郎平髋关节膝关节颈椎都做了置换手术)
1. [满分10分 特朗普为中俄美会晤打12分](https://so.toutiao.com/search?keyword=满分10分%20特朗普为中俄美会晤打12分)
1. [现货黄金一周连破四大关口](https://so.toutiao.com/search?keyword=现货黄金一周连破四大关口)
1. [泽连斯基称国家债务已增至2760亿美元](https://so.toutiao.com/search?keyword=泽连斯基称国家债务已增至2760亿美元)
1. [特朗普说完全理解普京的愤怒](https://so.toutiao.com/search?keyword=特朗普说完全理解普京的愤怒)
1. [黄金白银为何突然暴跌](https://so.toutiao.com/search?keyword=黄金白银为何突然暴跌)
1. [大V：A股短线反弹窗口或已打开](https://so.toutiao.com/search?keyword=大V：A股短线反弹窗口或已打开)
1. [沪指险守3500点 多只银行股创新高](https://so.toutiao.com/search?keyword=沪指险守3500点%20多只银行股创新高)
1. [40多位负责APEC晚宴的厨师回到顺德](https://so.toutiao.com/search?keyword=40多位负责APEC晚宴的厨师回到顺德)
1. [市场在等什么信号](https://so.toutiao.com/search?keyword=市场在等什么信号)
1. [国内油价预计下调460元/吨](https://so.toutiao.com/search?keyword=国内油价预计下调460元/吨)
1. [马斯克从深圳飞到了上海](https://so.toutiao.com/search?keyword=马斯克从深圳飞到了上海)
1. [默茨：欧洲将很快加入乌问题谈判](https://so.toutiao.com/search?keyword=默茨：欧洲将很快加入乌问题谈判)
1. [泽连斯基摊手回应特朗普称普京为朋友](https://so.toutiao.com/search?keyword=泽连斯基摊手回应特朗普称普京为朋友)
1. [专家：A股最大风险是外部输入性风险](https://so.toutiao.com/search?keyword=专家：A股最大风险是外部输入性风险)
1. [王毅给深圳办会打100分](https://so.toutiao.com/search?keyword=王毅给深圳办会打100分)
1. [李大霄：别人恐惧的时候我贪婪](https://so.toutiao.com/search?keyword=李大霄：别人恐惧的时候我贪婪)
1. [AI该长成什么样年轻人自己说了算](https://so.toutiao.com/search?keyword=AI该长成什么样年轻人自己说了算)
1. [普京：中俄美元首会晤前所未有](https://so.toutiao.com/search?keyword=普京：中俄美元首会晤前所未有)
1. [中国平安重返万亿市值](https://so.toutiao.com/search?keyword=中国平安重返万亿市值)
1. [糖尿病患者吃红薯记住这3点](https://so.toutiao.com/search?keyword=糖尿病患者吃红薯记住这3点)
1. [优先招35岁以上员工老板称被投诉](https://so.toutiao.com/search?keyword=优先招35岁以上员工老板称被投诉)
1. [鸿蒙智行尚界汽车累计交付近九万台](https://so.toutiao.com/search?keyword=鸿蒙智行尚界汽车累计交付近九万台)
1. [媒体：多国领导人感谢中国不是客套话](https://so.toutiao.com/search?keyword=媒体：多国领导人感谢中国不是客套话)
1. [华为星芒OSTA O1 Pro配置汇总](https://so.toutiao.com/search?keyword=华为星芒OSTA%20O1%20Pro配置汇总)
1. [欧洲领导人为何不敢和普京当面沟通](https://so.toutiao.com/search?keyword=欧洲领导人为何不敢和普京当面沟通)
1. [如何看马斯克24小时闪电访华](https://so.toutiao.com/search?keyword=如何看马斯克24小时闪电访华)
1. [李子柒当选四川省文联副主席](https://so.toutiao.com/search?keyword=李子柒当选四川省文联副主席)
1. [俄乌互轰无人机谁能撑到最后](https://so.toutiao.com/search?keyword=俄乌互轰无人机谁能撑到最后)
1. [英伟达拟5亿美元收购Inception](https://so.toutiao.com/search?keyword=英伟达拟5亿美元收购Inception)
1. [专家：A股下行风险有限](https://so.toutiao.com/search?keyword=专家：A股下行风险有限)
1. [深圳为何能跑出多个食品饮料头部品牌](https://so.toutiao.com/search?keyword=深圳为何能跑出多个食品饮料头部品牌)
1. [享界V8搭载全新立体精雕LOGO](https://so.toutiao.com/search?keyword=享界V8搭载全新立体精雕LOGO)
1. [中俄美元首和平宣言](https://so.toutiao.com/search?keyword=中俄美元首和平宣言)
1. [APEC新机遇 年轻人如何“接接接”](https://so.toutiao.com/search?keyword=APEC新机遇%20年轻人如何“接接接”)
1. [韩国总统夫人被舞狮英歌舞圈粉](https://so.toutiao.com/search?keyword=韩国总统夫人被舞狮英歌舞圈粉)
1. [李在明发文感谢中国热情接待](https://so.toutiao.com/search?keyword=李在明发文感谢中国热情接待)
1. [金店老板说金价已经到底了](https://so.toutiao.com/search?keyword=金店老板说金价已经到底了)
1. [《多喜一家人》为何差评不断](https://so.toutiao.com/search?keyword=《多喜一家人》为何差评不断)
1. [光影绘湾区 璀璨深圳夜](https://so.toutiao.com/search?keyword=光影绘湾区%20璀璨深圳夜)
1. [老人学会网购后下单15吨薯条喂猪](https://so.toutiao.com/search?keyword=老人学会网购后下单15吨薯条喂猪)
1. [游客在三亚海边捡到百斤重金枪鱼](https://so.toutiao.com/search?keyword=游客在三亚海边捡到百斤重金枪鱼)
1. [外媒镜头里的深圳：科幻走进现实](https://so.toutiao.com/search?keyword=外媒镜头里的深圳：科幻走进现实)
1. [王菲窦靖童李嫣将合作发歌](https://so.toutiao.com/search?keyword=王菲窦靖童李嫣将合作发歌)
1. [东京万人集会抗议高市政权政策](https://so.toutiao.com/search?keyword=东京万人集会抗议高市政权政策)
1. [零跑回应几箱啤酒把后备箱压露底](https://so.toutiao.com/search?keyword=零跑回应几箱啤酒把后备箱压露底)
1. [为何波司登高端羽绒服销售遇冷](https://so.toutiao.com/search?keyword=为何波司登高端羽绒服销售遇冷)
1. [中方回应高市早苗礼宾安排](https://so.toutiao.com/search?keyword=中方回应高市早苗礼宾安排)
1. [蒋欣亮相《多喜一家人》追剧团](https://so.toutiao.com/search?keyword=蒋欣亮相《多喜一家人》追剧团)
1. [普京回应克里米亚大桥遭袭](https://so.toutiao.com/search?keyword=普京回应克里米亚大桥遭袭)
1. [现货黄金跌破3600美元](https://so.toutiao.com/search?keyword=现货黄金跌破3600美元)
1. [三大指数大幅低开](https://so.toutiao.com/search?keyword=三大指数大幅低开)
1. [华强北变身APEC“民间会场”](https://so.toutiao.com/search?keyword=华强北变身APEC“民间会场”)
1. [妈妈呼喊女儿被骂不准外地人随便叫](https://so.toutiao.com/search?keyword=妈妈呼喊女儿被骂不准外地人随便叫)
1. [黄金长期配置逻辑变了吗](https://so.toutiao.com/search?keyword=黄金长期配置逻辑变了吗)
1. [特朗普和普京会晤时开了个玩笑](https://so.toutiao.com/search?keyword=特朗普和普京会晤时开了个玩笑)
1. [牛肉为什么突然贵了](https://so.toutiao.com/search?keyword=牛肉为什么突然贵了)
1. [北大时期张泉灵美成女儿国国王了](https://so.toutiao.com/search?keyword=北大时期张泉灵美成女儿国国王了)
1. [特朗普说美国不支持“台独”](https://so.toutiao.com/search?keyword=特朗普说美国不支持“台独”)
1. [比亚迪发布折叠方向盘](https://so.toutiao.com/search?keyword=比亚迪发布折叠方向盘)
1. [方程豹钛9正式上市](https://so.toutiao.com/search?keyword=方程豹钛9正式上市)
1. [两千公里之外河北这样“参会”APEC](https://so.toutiao.com/search?keyword=两千公里之外河北这样“参会”APEC)
1. [年轻人还要攒小金豆吗](https://so.toutiao.com/search?keyword=年轻人还要攒小金豆吗)
1. [特朗普称不会仓促决定对伊行动](https://so.toutiao.com/search?keyword=特朗普称不会仓促决定对伊行动)
1. [深圳能为亚太提供哪些启示](https://so.toutiao.com/search?keyword=深圳能为亚太提供哪些启示)
1. [孙千拍戏路透大长腿快溢出屏幕](https://so.toutiao.com/search?keyword=孙千拍戏路透大长腿快溢出屏幕)
1. [中国机器人刷屏海外社交平台](https://so.toutiao.com/search?keyword=中国机器人刷屏海外社交平台)
1. [特朗普：请中国继续保持强大](https://so.toutiao.com/search?keyword=特朗普：请中国继续保持强大)
1. [一副AI眼镜背后藏着“半个亚太”](https://so.toutiao.com/search?keyword=一副AI眼镜背后藏着“半个亚太”)
1. [深圳市民街头偶遇多国政要](https://so.toutiao.com/search?keyword=深圳市民街头偶遇多国政要)
1. [普京随行副官携带核公文包](https://so.toutiao.com/search?keyword=普京随行副官携带核公文包)
1. [U17世界杯：法国3-1海地](https://so.toutiao.com/search?keyword=U17世界杯：法国3-1海地)
1. [中国管制盾构机出口印度作何感想](https://so.toutiao.com/search?keyword=中国管制盾构机出口印度作何感想)
1. [特朗普感激中国](https://so.toutiao.com/search?keyword=特朗普感激中国)
1. [姚安娜摆摊卖瓷器被游客砍价](https://so.toutiao.com/search?keyword=姚安娜摆摊卖瓷器被游客砍价)
1. [已有9家券商参投DeepSeek](https://so.toutiao.com/search?keyword=已有9家券商参投DeepSeek)
1. [60秒回顾历次APEC特色服饰](https://so.toutiao.com/search?keyword=60秒回顾历次APEC特色服饰)
1. [APEC宴会桌布置设计感拉满](https://so.toutiao.com/search?keyword=APEC宴会桌布置设计感拉满)
1. [三个维度看中企出海新风向](https://so.toutiao.com/search?keyword=三个维度看中企出海新风向)
1. [王毅到机场送别特朗普](https://so.toutiao.com/search?keyword=王毅到机场送别特朗普)
1. [亚太同心 共话合作新愿景](https://so.toutiao.com/search?keyword=亚太同心%20共话合作新愿景)
1. [深圳市民在街头偶遇多国政要](https://so.toutiao.com/search?keyword=深圳市民在街头偶遇多国政要)
1. [睡前有5种表现要警惕脑梗](https://so.toutiao.com/search?keyword=睡前有5种表现要警惕脑梗)
1. [马斯克曾坐高铁到西安看兵马俑](https://so.toutiao.com/search?keyword=马斯克曾坐高铁到西安看兵马俑)
1. [特朗普离深登机时做挥拳动作](https://so.toutiao.com/search?keyword=特朗普离深登机时做挥拳动作)
1. [一湾红树林 向亚太讲述“共生”之道](https://so.toutiao.com/search?keyword=一湾红树林%20向亚太讲述“共生”之道)
1. [官方辟谣要求基金公司上报AI敞口](https://so.toutiao.com/search?keyword=官方辟谣要求基金公司上报AI敞口)
1. [马斯克在空军一号看中美元首互动](https://so.toutiao.com/search?keyword=马斯克在空军一号看中美元首互动)
1. [华为新机薄出新高度](https://so.toutiao.com/search?keyword=华为新机薄出新高度)
1. [普京用中文对与会者说谢谢](https://so.toutiao.com/search?keyword=普京用中文对与会者说谢谢)
1. [美再度收紧中国芯片海外代工](https://so.toutiao.com/search?keyword=美再度收紧中国芯片海外代工)
1. [王毅送别美俄元首后举行记者会](https://so.toutiao.com/search?keyword=王毅送别美俄元首后举行记者会)
1. [DeepSeek二轮融资出资方曝光](https://so.toutiao.com/search?keyword=DeepSeek二轮融资出资方曝光)
1. [泰国记者来中国买买买直呼没钱了](https://so.toutiao.com/search?keyword=泰国记者来中国买买买直呼没钱了)
1. [飞了49年旅行者1号抵达1光日](https://so.toutiao.com/search?keyword=飞了49年旅行者1号抵达1光日)
1. [女子照料患癌男友并转走29万](https://so.toutiao.com/search?keyword=女子照料患癌男友并转走29万)
1. [普京：难怪您会选这里举办APEC](https://so.toutiao.com/search?keyword=普京：难怪您会选这里举办APEC)
1. [明年起职称评审管理新规将施行](https://so.toutiao.com/search?keyword=明年起职称评审管理新规将施行)
1. [叶连平将成为“大体老师”](https://so.toutiao.com/search?keyword=叶连平将成为“大体老师”)
1. [特朗普沉浸式欣赏深圳的夜](https://so.toutiao.com/search?keyword=特朗普沉浸式欣赏深圳的夜)
1. [黄金价格由什么决定](https://so.toutiao.com/search?keyword=黄金价格由什么决定)
1. [专家：中俄美会晤释放强力积极信号](https://so.toutiao.com/search?keyword=专家：中俄美会晤释放强力积极信号)
1. [当方向盘可以收纳 SUV座舱会变啥样](https://so.toutiao.com/search?keyword=当方向盘可以收纳%20SUV座舱会变啥样)
1. [王菲时隔17年再唱《爱笑的天使》](https://so.toutiao.com/search?keyword=王菲时隔17年再唱《爱笑的天使》)
1. [比亚迪发布DMS超级混动全能平台](https://so.toutiao.com/search?keyword=比亚迪发布DMS超级混动全能平台)
1. [男子饭后胸闷查出三根冠状动脉堵塞](https://so.toutiao.com/search?keyword=男子饭后胸闷查出三根冠状动脉堵塞)
1. [普京乘电梯时主动礼让文莱苏丹](https://so.toutiao.com/search?keyword=普京乘电梯时主动礼让文莱苏丹)
1. [财信证券：A股政策底已确认](https://so.toutiao.com/search?keyword=财信证券：A股政策底已确认)
1. [乌军为何反复袭击克里米亚大桥](https://so.toutiao.com/search?keyword=乌军为何反复袭击克里米亚大桥)
1. [中俄美元首同框](https://so.toutiao.com/search?keyword=中俄美元首同框)
1. [蒋欣杨采钰同框](https://so.toutiao.com/search?keyword=蒋欣杨采钰同框)
1. [2028年黄金重返5600美元靠谱吗](https://so.toutiao.com/search?keyword=2028年黄金重返5600美元靠谱吗)
1. [美过渡版“空军一号”有何槽点](https://so.toutiao.com/search?keyword=美过渡版“空军一号”有何槽点)
1. [葡媒：C罗的致敬仪式像葬礼](https://so.toutiao.com/search?keyword=葡媒：C罗的致敬仪式像葬礼)
1. [马天宇回忆原生家庭崩溃大哭](https://so.toutiao.com/search?keyword=马天宇回忆原生家庭崩溃大哭)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Nov 20 2026 11:06:33 GMT+0800 (China Standard Time) -->

1. [高市早苗抵达深圳](https://www.zhihu.com/search?q=%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3)
1. [中俄美三国元首会晤](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4)
1. [传腾讯内部空前危机感](https://www.zhihu.com/search?q=%E4%BC%A0%E8%85%BE%E8%AE%AF%E5%86%85%E9%83%A8%E7%A9%BA%E5%89%8D%E5%8D%B1%E6%9C%BA%E6%84%9F)
1. [英伟达将不再向中国销售H200](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B0%86%E4%B8%8D%E5%86%8D%E5%90%91%E4%B8%AD%E5%9B%BD%E9%94%80%E5%94%AEH200)
1. [2026深圳APEC峰会](https://www.zhihu.com/search?q=2026%E6%B7%B1%E5%9C%B3APEC%E5%B3%B0%E4%BC%9A)
1. [特朗普说美国不支持台独](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%BE%8E%E5%9B%BD%E4%B8%8D%E6%94%AF%E6%8C%81%E5%8F%B0%E7%8B%AC)
1. [GTA6正式发布](https://www.zhihu.com/search?q=GTA6%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [黄仁勋称愿重返英伟达任CEO](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E6%84%BF%E9%87%8D%E8%BF%94%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%BB%BBCEO)
1. [DeepSeek调整对话上限长度](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4%E5%AF%B9%E8%AF%9D%E4%B8%8A%E9%99%90%E9%95%BF%E5%BA%A6)
1. [Anthropic上市](https://www.zhihu.com/search?q=Anthropic%E4%B8%8A%E5%B8%82)
1. [APEC世纪晚宴菜单曝光](https://www.zhihu.com/search?q=APEC%E4%B8%96%E7%BA%AA%E6%99%9A%E5%AE%B4%E8%8F%9C%E5%8D%95%E6%9B%9D%E5%85%89)
1. [爱奇艺或将触发退市警告](https://www.zhihu.com/search?q=%E7%88%B1%E5%A5%87%E8%89%BA%E6%88%96%E5%B0%86%E8%A7%A6%E5%8F%91%E9%80%80%E5%B8%82%E8%AD%A6%E5%91%8A)
1. [英伟达宣布告别黄仁勋时代](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%AE%A3%E5%B8%83%E5%91%8A%E5%88%AB%E9%BB%84%E4%BB%81%E5%8B%8B%E6%97%B6%E4%BB%A3)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Nov 20 2026 11:18:28 GMT+0800 (China Standard Time) -->

1. [中俄美元首发表和平宣言，三国元首重申核战争打不赢也打不得，哪些信息值得重点关注？](https://www.zhihu.com/question/2106822157141534200)
1. [中俄美和平宣言为何特别强调国际刑事法院不得滥用管辖权？具体针对的是什么？这一表述有何现实背景？](https://www.zhihu.com/question/2106848715306526000)
1. [腾讯披露WorkBuddy近七天年化收入超5亿美元，有用户月付4万元买服务，数据背后有多大「含金量」？](https://www.zhihu.com/question/2106533852478977800)
1. [美国总统特朗普称美国不支持「台独」，这一发言释放了哪些信号？](https://www.zhihu.com/question/2106816145466417200)
1. [如何看待郎平表示，不认同「竞技体育，菜是原罪」这句话，并称「努力一辈子没赢冠军，那也不能算失败者」？](https://www.zhihu.com/question/2106820088896512800)
1. [如何看待张朝阳回应搜狐「躺平」：没资源做大模型，但每天凌晨4点起床，讲物理课也是工作？](https://www.zhihu.com/question/2106691940146332000)
1. [为啥中文的一二三笔画简单明了，零的笔画那么多啊?](https://www.zhihu.com/question/606813087)
1. [腾讯姚顺雨主导AI架构精简，而全公司11万人面临大调整，这类扁平化变革落地难点在哪？](https://www.zhihu.com/question/2104663850607966000)
1. [直属领导的管理水平，是不是直接决定了职场幸福感？](https://www.zhihu.com/question/2059075711210674200)
1. [地暖是24小时开着省钱，还是分时段开更省钱？](https://www.zhihu.com/question/437934361)
1. [周杰伦武汉演唱会580元大屏观演区引热议，此前有人认为是性价比之王，也有人不接受看不到真人，你怎么看？](https://www.zhihu.com/question/2105728003292637000)
1. [爱奇艺股价已连续 27 个交易日低于 1 美元，最快将于11月23日触发退市警告，它真的会退市吗？](https://www.zhihu.com/question/2106740458650957600)
1. [感觉身边只剩酒肉朋友，聊的不是孩子上学就是社会新闻，再往深就没话了，有时候不明白交情怎么就停在这儿了？](https://www.zhihu.com/question/2106571582248155000)
1. [史上最大IPO开始交易，Anthropic首日收涨17%，市值为1.271万亿美元，怎样评价这一表现？](https://www.zhihu.com/question/2106663248388960500)
1. [前世界亚军中单 Corn 回忆 Uzi 卢锡安打野事件「韩国打野未沟通就秒选」，真相到底是怎样的？](https://www.zhihu.com/question/2106752005976716300)
1. [离婚前男方将游戏账号以 88 万卖给朋友，女方要求分割，法院判决 2:1 比例分，如何从法律角度解读？](https://www.zhihu.com/question/2106406907846182100)
1. [S16 总决赛 LPL 夺冠，TI15 CNDOTA 全部止步小组赛，未来他们的成绩差距会越来越大吗？](https://www.zhihu.com/question/2105964975202067700)
1. [很多人说GTA6或者GTA系列玩法单调，无非就是射击+开车，是不是玩法创新在这种3A上遇到瓶颈了？](https://www.zhihu.com/question/2106787583531409700)
1. [GTA6是被情怀捧起来的吗？](https://www.zhihu.com/question/2106690691409633800)
1. [陈晓楠因文吉儿与王子璇在细节问题上持续对抗叫停谈话，处理方式合理吗？文吉儿与王子璇的沟通存在哪些问题？](https://www.zhihu.com/question/2106800026538043100)
1. [《后会友期》中白小纯称「努力也是一种天赋」，你认可吗？努力究竟是可选的态度还是与生俱来的天赋？](https://www.zhihu.com/question/2106749850322560300)
1. [如何评价DOTA2的7.42版本改动？](https://www.zhihu.com/question/2106664875657381600)
1. [现货黄金跌破 3600 美元关口，这意味着什么？这轮下跌会跌到什么位置才有实质性支撑？](https://www.zhihu.com/question/2107019375895238400)
1. [如何评价27.99万起售的方程豹钛9，方盒子大六座SUV可以是家庭的唯一用车吗？](https://www.zhihu.com/question/2106857547277789000)
1. [如何看待丰田员工餐摆拍造假？](https://www.zhihu.com/question/2106090303207772400)
1. [胖东来今年累计销售额超过 258 亿元，同比增长 26.34%，如何看待这份业绩表现？](https://www.zhihu.com/question/2105706046706693000)
1. [如何评价《GTA6》的剧情以及人物设定？](https://www.zhihu.com/question/321730711)
1. [长城汽车 2026 年前三季度净利润暴跌 55% ，是什么原因导致的？](https://www.zhihu.com/question/2102286017998988000)
1. [腾讯控股公布微信 QQ 月活差 9 亿，为什么腾讯坚持留着 QQ 不合并？QQ 还有哪些市场？](https://www.zhihu.com/question/2106674294499402500)
1. [你家乡最值得专程去吃的非遗美食是什么，为什么？](https://www.zhihu.com/question/2075463766326638300)
1. [中俄美元首同框，有哪些意义？对国际局势有哪些影响？](https://www.zhihu.com/question/2106665457826775000)
1. [马斯克盛赞中国，直言中美合作越多越好，并表示特斯拉会继续在中国提高产量，如何看待他这一发言？](https://www.zhihu.com/question/2106751822610133200)
1. [加州翻红和佛州翻蓝哪个更可怕？](https://www.zhihu.com/question/2101505383613440300)
1. [一根 1m 长的玻璃棒，摔到地上断成 3 段，最短一段的平均值是多少？](https://www.zhihu.com/question/507262676)
1. [安徽霍邱拆墙让路老人的女儿否认因买新车拆墙，到底什么情况？后续调查重点是什么？](https://www.zhihu.com/question/2106326337359197400)
1. [男朋友一被领导说就离职，频繁裸辞后长期空窗，是我太计较吗？](https://www.zhihu.com/question/2105339041600350000)
1. [如何看待网传小米大模型业务MiMo或独立融资？](https://www.zhihu.com/question/2106468887957082400)
1. [前中国女子体操运动员芦玉菲自曝被单位欠缴91个月社保，最新回应已补缴完成，如何评价？](https://www.zhihu.com/question/2106508372249931800)
1. [为什么大家这么关注APEC会议？](https://www.zhihu.com/question/2105936986515171000)
1. [如何评价S16决赛结束后，王多多的结束语？](https://www.zhihu.com/question/2105987189423216600)
1. [如何评价一见 auto 的文章《理想宁德，后会友期》？宁德向理想一天发三封催款邮件，其中出了什么问题？](https://www.zhihu.com/question/2106653014534706200)
1. [怎么看DeepSeek API 联网搜索与抓页改为免费？](https://www.zhihu.com/question/2106672632099758300)
1. [多所高校要求师生论文发表前备案否则不算科研成果，如果解读这一高校新规？](https://www.zhihu.com/question/2106372097987684000)
1. [河南一学子536分捡漏上北大，曾因分数过低遭北大三次退档，现被公派瑞士读博，如何看待他的求学之路？](https://www.zhihu.com/question/2105965624749054000)
1. [深圳 APEC 世纪晚宴菜单曝光，以地道粤菜为主，同时融入国际菜肴元素，菜品设计考量了哪些核心因素？](https://www.zhihu.com/question/2103409527672591600)
1. [有什么给刚进入大学的女生的忠告？](https://www.zhihu.com/question/2104230623502136800)
1. [如何评价游戏《侠盗猎车手VI》（GTA6），它到底好不好玩？](https://www.zhihu.com/question/2106459198645191400)
1. [2627赛季NBA常规赛爵士 109:97 湖人，如何评价这场比赛？](https://www.zhihu.com/question/2106706240739070700)
1. [泽连斯基公布导弹打击克里米亚大桥致桥拱桥跨坍塌画面，此举将引发哪些连锁反应？](https://www.zhihu.com/question/2106134560761292800)
1. [选唐尼回归饰演大反派毁灭博士不会造成观众感受混乱吗？为什么非唐尼不可？](https://www.zhihu.com/question/663654542)
1. [《GTA6》M站开分99，这是一个什么水平？有1分扣在哪了？](https://www.zhihu.com/question/2106462901686858000)
1. [国台办回应「建议 2032 年两岸统一货币」，称只要利于两岸关系和平发展都欢迎，统一货币会有哪些影响？](https://www.zhihu.com/question/2106651560688052200)

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
<!-- 最后更新时间 Fri Nov 20 2026 11:30:51 GMT+0800 (China Standard Time) -->

1. [习主席中俄美元首会晤重要讲话金句](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E4%B8%BB%E5%B8%AD%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%E9%87%8D%E8%A6%81%E8%AE%B2%E8%AF%9D%E9%87%91%E5%8F%A5%23&Refer=new_time)
1. [国家领导人双边会晤](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E5%AE%B6%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%8F%8C%E8%BE%B9%E4%BC%9A%E6%99%A4%23&t=31&band_rank=1&Refer=top)
1. [马斯克从深圳飞到了上海](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E4%BB%8E%E6%B7%B1%E5%9C%B3%E9%A3%9E%E5%88%B0%E4%BA%86%E4%B8%8A%E6%B5%B7%23&t=31&band_rank=2&Refer=top)
1. [2026APEC东道主成果清单](https://s.weibo.com//weibo?q=%232026APEC%E4%B8%9C%E9%81%93%E4%B8%BB%E6%88%90%E6%9E%9C%E6%B8%85%E5%8D%95%23&t=31&band_rank=3&Refer=top)
1. [杨瀚森对阵雄鹿首节登场](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E5%AF%B9%E9%98%B5%E9%9B%84%E9%B9%BF%E9%A6%96%E8%8A%82%E7%99%BB%E5%9C%BA%23&t=31&band_rank=4&Refer=top)
1. [多所高校不向2027级研究生提供宿舍](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E4%B8%8D%E5%90%912027%E7%BA%A7%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8F%90%E4%BE%9B%E5%AE%BF%E8%88%8D%23&t=31&band_rank=5&Refer=top)
1. [文吉儿又让白小纯顺她去医院](https://s.weibo.com//weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E5%8F%88%E8%AE%A9%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%A1%BA%E5%A5%B9%E5%8E%BB%E5%8C%BB%E9%99%A2%23&t=31&band_rank=6&Refer=top)
1. [后会友期观察室很严重的问题](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%A7%82%E5%AF%9F%E5%AE%A4%E5%BE%88%E4%B8%A5%E9%87%8D%E7%9A%84%E9%97%AE%E9%A2%98%23&t=31&band_rank=7&Refer=top)
1. [小米18](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B318&t=31&band_rank=8&Refer=top)
1. [一图读懂APEC合作如何惠及百姓生活](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%9B%BE%E8%AF%BB%E6%87%82APEC%E5%90%88%E4%BD%9C%E5%A6%82%E4%BD%95%E6%83%A0%E5%8F%8A%E7%99%BE%E5%A7%93%E7%94%9F%E6%B4%BB%23&t=31&band_rank=9&Refer=top)
1. [许飞真是巧思上长了个人](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E7%9C%9F%E6%98%AF%E5%B7%A7%E6%80%9D%E4%B8%8A%E9%95%BF%E4%BA%86%E4%B8%AA%E4%BA%BA&t=31&band_rank=10&Refer=top)
1. [股市](https://s.weibo.com//weibo?q=%E8%82%A1%E5%B8%82&t=31&band_rank=11&Refer=top)
1. [金价跌到7字头囤金人心态崩了](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E5%88%B07%E5%AD%97%E5%A4%B4%E5%9B%A4%E9%87%91%E4%BA%BA%E5%BF%83%E6%80%81%E5%B4%A9%E4%BA%86%23&t=31&band_rank=12&Refer=top)
1. [美股再度大跌](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1%E5%86%8D%E5%BA%A6%E5%A4%A7%E8%B7%8C&t=31&band_rank=13&Refer=top)
1. [张泉灵就像有人开团一秒跟了一样](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%B3%89%E7%81%B5%E5%B0%B1%E5%83%8F%E6%9C%89%E4%BA%BA%E5%BC%80%E5%9B%A2%E4%B8%80%E7%A7%92%E8%B7%9F%E4%BA%86%E4%B8%80%E6%A0%B7%23&t=31&band_rank=14&Refer=top)
1. [李勒优大号自己弄回来了](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%A4%A7%E5%8F%B7%E8%87%AA%E5%B7%B1%E5%BC%84%E5%9B%9E%E6%9D%A5%E4%BA%86%23&t=31&band_rank=15&Refer=top)
1. [Jennie现在走的路线有点太夸张](https://s.weibo.com//weibo?q=%23Jennie%E7%8E%B0%E5%9C%A8%E8%B5%B0%E7%9A%84%E8%B7%AF%E7%BA%BF%E6%9C%89%E7%82%B9%E5%A4%AA%E5%A4%B8%E5%BC%A0%23&t=31&band_rank=16&Refer=top)
1. [马天宇李明德名誉纠纷案已开庭](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E6%9D%8E%E6%98%8E%E5%BE%B7%E5%90%8D%E8%AA%89%E7%BA%A0%E7%BA%B7%E6%A1%88%E5%B7%B2%E5%BC%80%E5%BA%AD%23&t=31&band_rank=17&Refer=top)
1. [特朗普空军一号内部曝光](https://s.weibo.com//weibo?q=%E7%89%B9%E6%9C%97%E6%99%AE%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%86%85%E9%83%A8%E6%9B%9D%E5%85%89&t=31&band_rank=18&Refer=top)
1. [同居生孩分手后男方起诉返还百万](https://s.weibo.com//weibo?q=%23%E5%90%8C%E5%B1%85%E7%94%9F%E5%AD%A9%E5%88%86%E6%89%8B%E5%90%8E%E7%94%B7%E6%96%B9%E8%B5%B7%E8%AF%89%E8%BF%94%E8%BF%98%E7%99%BE%E4%B8%87%23&t=31&band_rank=19&Refer=top)
1. [演员开演唱会 爱豆演戏](https://s.weibo.com//weibo?q=%E6%BC%94%E5%91%98%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%20%E7%88%B1%E8%B1%86%E6%BC%94%E6%88%8F&t=31&band_rank=20&Refer=top)
1. [黄金](https://s.weibo.com//weibo?q=%E9%BB%84%E9%87%91&t=31&band_rank=21&Refer=top)
1. [杨超越粉丝手搓太阳雨AI网页](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E7%B2%89%E4%B8%9D%E6%89%8B%E6%90%93%E5%A4%AA%E9%98%B3%E9%9B%A8AI%E7%BD%91%E9%A1%B5%23&t=31&band_rank=22&Refer=top)
1. [文吉儿帽子](https://s.weibo.com//weibo?q=%E6%96%87%E5%90%89%E5%84%BF%E5%B8%BD%E5%AD%90&t=31&band_rank=23&Refer=top)
1. [Viper BLG](https://s.weibo.com//weibo?q=Viper%20BLG&t=31&band_rank=24&Refer=top)
1. [伊能静没来之前可给张泉灵委屈坏了](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E6%B2%A1%E6%9D%A5%E4%B9%8B%E5%89%8D%E5%8F%AF%E7%BB%99%E5%BC%A0%E6%B3%89%E7%81%B5%E5%A7%94%E5%B1%88%E5%9D%8F%E4%BA%86%23&t=31&band_rank=25&Refer=top)
1. [时代少年团杂志](https://s.weibo.com//weibo?q=%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%9D%82%E5%BF%97&t=31&band_rank=26&Refer=top)
1. [李勒优房子晋妈仅添砂石水泥](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E6%88%BF%E5%AD%90%E6%99%8B%E5%A6%88%E4%BB%85%E6%B7%BB%E7%A0%82%E7%9F%B3%E6%B0%B4%E6%B3%A5%23&t=31&band_rank=27&Refer=top)
1. [王楚钦登上海外时尚运动杂志封面](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%99%BB%E4%B8%8A%E6%B5%B7%E5%A4%96%E6%97%B6%E5%B0%9A%E8%BF%90%E5%8A%A8%E6%9D%82%E5%BF%97%E5%B0%81%E9%9D%A2&t=31&band_rank=28&Refer=top)
1. [长期心情不好真的会改变一个人](https://s.weibo.com//weibo?q=%E9%95%BF%E6%9C%9F%E5%BF%83%E6%83%85%E4%B8%8D%E5%A5%BD%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%94%B9%E5%8F%98%E4%B8%80%E4%B8%AA%E4%BA%BA&t=31&band_rank=29&Refer=top)
1. [女儿蛋糕放钱妈妈当众塞给儿媳](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%84%BF%E8%9B%8B%E7%B3%95%E6%94%BE%E9%92%B1%E5%A6%88%E5%A6%88%E5%BD%93%E4%BC%97%E5%A1%9E%E7%BB%99%E5%84%BF%E5%AA%B3%23&t=31&band_rank=30&Refer=top)
1. [白小纯青稚听到现场喊纯稚的表情](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E5%90%AC%E5%88%B0%E7%8E%B0%E5%9C%BA%E5%96%8A%E7%BA%AF%E7%A8%9A%E7%9A%84%E8%A1%A8%E6%83%85%23&t=31&band_rank=31&Refer=top)
1. [特朗普给中俄美元首会晤打12分](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%BB%99%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%E6%89%9312%E5%88%86%23&t=31&band_rank=32&Refer=top)
1. [伊能静一眼看破所有嘉宾](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E4%B8%80%E7%9C%BC%E7%9C%8B%E7%A0%B4%E6%89%80%E6%9C%89%E5%98%89%E5%AE%BE%23&t=31&band_rank=33&Refer=top)
1. [特朗普从中国返美途中发帖](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%BB%8E%E4%B8%AD%E5%9B%BD%E8%BF%94%E7%BE%8E%E9%80%94%E4%B8%AD%E5%8F%91%E5%B8%96%23&t=31&band_rank=34&Refer=top)
1. [赵丽颖合影被拉到C位](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%90%88%E5%BD%B1%E8%A2%AB%E6%8B%89%E5%88%B0C%E4%BD%8D%23&t=31&band_rank=35&Refer=top)
1. [特朗普称理解普京的愤怒](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%90%86%E8%A7%A3%E6%99%AE%E4%BA%AC%E7%9A%84%E6%84%A4%E6%80%92%23&t=31&band_rank=36&Refer=top)
1. [金店老板称金价跌回500不可能](https://s.weibo.com//weibo?q=%23%E9%87%91%E5%BA%97%E8%80%81%E6%9D%BF%E7%A7%B0%E9%87%91%E4%BB%B7%E8%B7%8C%E5%9B%9E500%E4%B8%8D%E5%8F%AF%E8%83%BD%23&t=31&band_rank=37&Refer=top)
1. [特朗普离开深圳前与王毅面谈](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A6%BB%E5%BC%80%E6%B7%B1%E5%9C%B3%E5%89%8D%E4%B8%8E%E7%8E%8B%E6%AF%85%E9%9D%A2%E8%B0%88%23&t=31&band_rank=38&Refer=top)
1. [慢阻肺治疗不再是喘了才治](https://s.weibo.com//weibo?q=%23%E6%85%A2%E9%98%BB%E8%82%BA%E6%B2%BB%E7%96%97%E4%B8%8D%E5%86%8D%E6%98%AF%E5%96%98%E4%BA%86%E6%89%8D%E6%B2%BB%23&t=31&band_rank=39&Refer=top)
1. [爸爸掉水里先吃苹果还是香蕉](https://s.weibo.com//weibo?q=%E7%88%B8%E7%88%B8%E6%8E%89%E6%B0%B4%E9%87%8C%E5%85%88%E5%90%83%E8%8B%B9%E6%9E%9C%E8%BF%98%E6%98%AF%E9%A6%99%E8%95%89&t=31&band_rank=40&Refer=top)
1. [崔晋风波后首更博](https://s.weibo.com//weibo?q=%23%E5%B4%94%E6%99%8B%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E6%9B%B4%E5%8D%9A%23&t=31&band_rank=41&Refer=top)
1. [女子打4份工养家月入3万多元](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%934%E4%BB%BD%E5%B7%A5%E5%85%BB%E5%AE%B6%E6%9C%88%E5%85%A53%E4%B8%87%E5%A4%9A%E5%85%83%23&t=31&band_rank=42&Refer=top)
1. [GTA6曼迪演员](https://s.weibo.com//weibo?q=%23GTA6%E6%9B%BC%E8%BF%AA%E6%BC%94%E5%91%98%23&t=31&band_rank=43&Refer=top)
1. [刘琳全程脱稿配音俄语](https://s.weibo.com//weibo?q=%23%E5%88%98%E7%90%B3%E5%85%A8%E7%A8%8B%E8%84%B1%E7%A8%BF%E9%85%8D%E9%9F%B3%E4%BF%84%E8%AF%AD%23&t=31&band_rank=44&Refer=top)
1. [A股开盘仅97家上涨](https://s.weibo.com//weibo?q=A%E8%82%A1%E5%BC%80%E7%9B%98%E4%BB%8597%E5%AE%B6%E4%B8%8A%E6%B6%A8&t=31&band_rank=45&Refer=top)
1. [苗苗是舞蹈演员对体态要求高](https://s.weibo.com//weibo?q=%23%E8%8B%97%E8%8B%97%E6%98%AF%E8%88%9E%E8%B9%88%E6%BC%94%E5%91%98%E5%AF%B9%E4%BD%93%E6%80%81%E8%A6%81%E6%B1%82%E9%AB%98%23&t=31&band_rank=46&Refer=top)
1. [有观众举报后会友期](https://s.weibo.com//weibo?q=%23%E6%9C%89%E8%A7%82%E4%BC%97%E4%B8%BE%E6%8A%A5%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23&t=31&band_rank=47&Refer=top)
1. [曹翠芬回应赵丽颖王仁君](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E7%BF%A0%E8%8A%AC%E5%9B%9E%E5%BA%94%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%8E%8B%E4%BB%81%E5%90%9B%23&t=31&band_rank=48&Refer=top)
1. [儿子将满18岁消失17年的父亲来求赡养](https://s.weibo.com//weibo?q=%23%E5%84%BF%E5%AD%90%E5%B0%86%E6%BB%A118%E5%B2%81%E6%B6%88%E5%A4%B117%E5%B9%B4%E7%9A%84%E7%88%B6%E4%BA%B2%E6%9D%A5%E6%B1%82%E8%B5%A1%E5%85%BB%23&t=31&band_rank=49&Refer=top)
1. [近90名大佬签署反Anthropic声明](https://s.weibo.com//weibo?q=%23%E8%BF%9190%E5%90%8D%E5%A4%A7%E4%BD%AC%E7%AD%BE%E7%BD%B2%E5%8F%8DAnthropic%E5%A3%B0%E6%98%8E%23&t=31&band_rank=50&Refer=top)
1. [中俄美元首深圳会晤](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E6%B7%B1%E5%9C%B3%E4%BC%9A%E6%99%A4%23&Refer=new_time)
1. [中俄美元首和平宣言](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%92%8C%E5%B9%B3%E5%AE%A3%E8%A8%80%23&t=31&band_rank=1&Refer=top)
1. [一图读懂深圳倡议](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%9B%BE%E8%AF%BB%E6%87%82%E6%B7%B1%E5%9C%B3%E5%80%A1%E8%AE%AE%23&t=31&band_rank=3&Refer=top)
1. [特朗普登上空军一号挥手告别](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%99%BB%E4%B8%8A%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E6%8C%A5%E6%89%8B%E5%91%8A%E5%88%AB%23&t=31&band_rank=4&Refer=top)
1. [特朗普登机前又做标志性动作](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%99%BB%E6%9C%BA%E5%89%8D%E5%8F%88%E5%81%9A%E6%A0%87%E5%BF%97%E6%80%A7%E5%8A%A8%E4%BD%9C%23&t=31&band_rank=5&Refer=top)
1. [李在明发文感谢中国热情接待](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%8F%91%E6%96%87%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%E7%83%AD%E6%83%85%E6%8E%A5%E5%BE%85%23&t=31&band_rank=6&Refer=top)
1. [APEC晚宴用荔枝酒已限购](https://s.weibo.com//weibo?q=%23APEC%E6%99%9A%E5%AE%B4%E7%94%A8%E8%8D%94%E6%9E%9D%E9%85%92%E5%B7%B2%E9%99%90%E8%B4%AD%23&t=31&band_rank=7&Refer=top)
1. [全妆深圳惊艳了世界](https://s.weibo.com//weibo?q=%23%E5%85%A8%E5%A6%86%E6%B7%B1%E5%9C%B3%E6%83%8A%E8%89%B3%E4%BA%86%E4%B8%96%E7%95%8C%23&t=31&band_rank=8&Refer=top)
1. [普京在会晤现场说了什么](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E5%9C%A8%E4%BC%9A%E6%99%A4%E7%8E%B0%E5%9C%BA%E8%AF%B4%E4%BA%86%E4%BB%80%E4%B9%88%23&t=31&band_rank=9&Refer=top)
1. [普京说这些把中俄美联系在一起](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E8%BF%99%E4%BA%9B%E6%8A%8A%E4%B8%AD%E4%BF%84%E7%BE%8E%E8%81%94%E7%B3%BB%E5%9C%A8%E4%B8%80%E8%B5%B7%23&t=31&band_rank=10&Refer=top)
1. [宇宙其实根本就没有白天](https://s.weibo.com//weibo?q=%E5%AE%87%E5%AE%99%E5%85%B6%E5%AE%9E%E6%A0%B9%E6%9C%AC%E5%B0%B1%E6%B2%A1%E6%9C%89%E7%99%BD%E5%A4%A9&t=31&band_rank=11&Refer=top)
1. [文吉儿又有新综艺了](https://s.weibo.com//weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E5%8F%88%E6%9C%89%E6%96%B0%E7%BB%BC%E8%89%BA%E4%BA%86%23&t=31&band_rank=12&Refer=top)
1. [20多天婴儿被喂白开水中毒肾损伤](https://s.weibo.com//weibo?q=%2320%E5%A4%9A%E5%A4%A9%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%96%82%E7%99%BD%E5%BC%80%E6%B0%B4%E4%B8%AD%E6%AF%92%E8%82%BE%E6%8D%9F%E4%BC%A4%23&t=31&band_rank=13&Refer=top)
1. [马天宇自曝幼时因打疫苗遭毒打](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%87%AA%E6%9B%9D%E5%B9%BC%E6%97%B6%E5%9B%A0%E6%89%93%E7%96%AB%E8%8B%97%E9%81%AD%E6%AF%92%E6%89%93%23&t=31&band_rank=14&Refer=top)
1. [这就是Dior点灯活动C位的含金量吗](https://s.weibo.com//weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AFDior%E7%82%B9%E7%81%AF%E6%B4%BB%E5%8A%A8C%E4%BD%8D%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E5%90%97%23&t=31&band_rank=15&Refer=top)
1. [泰国总理携夫人在深圳南山吃宵夜](https://s.weibo.com//weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E6%90%BA%E5%A4%AB%E4%BA%BA%E5%9C%A8%E6%B7%B1%E5%9C%B3%E5%8D%97%E5%B1%B1%E5%90%83%E5%AE%B5%E5%A4%9C%23&t=31&band_rank=16&Refer=top)
1. [伊能静还是不负众望](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%BF%98%E6%98%AF%E4%B8%8D%E8%B4%9F%E4%BC%97%E6%9C%9B%23&t=31&band_rank=17&Refer=top)
1. [对亚洲女生服美役的程度感到震惊](https://s.weibo.com//weibo?q=%23%E5%AF%B9%E4%BA%9A%E6%B4%B2%E5%A5%B3%E7%94%9F%E6%9C%8D%E7%BE%8E%E5%BD%B9%E7%9A%84%E7%A8%8B%E5%BA%A6%E6%84%9F%E5%88%B0%E9%9C%87%E6%83%8A%23&t=31&band_rank=18&Refer=top)
1. [优先招35岁以上员工餐厅停业](https://s.weibo.com//weibo?q=%23%E4%BC%98%E5%85%88%E6%8B%9B35%E5%B2%81%E4%BB%A5%E4%B8%8A%E5%91%98%E5%B7%A5%E9%A4%90%E5%8E%85%E5%81%9C%E4%B8%9A%23&t=31&band_rank=19&Refer=top)
1. [老芒果诡计多端](https://s.weibo.com//weibo?q=%E8%80%81%E8%8A%92%E6%9E%9C%E8%AF%A1%E8%AE%A1%E5%A4%9A%E7%AB%AF&t=31&band_rank=20&Refer=top)
1. [苗苗怀二胎身材走样锻炼时被郑恺逗了一下](https://s.weibo.com//weibo?q=%23%E8%8B%97%E8%8B%97%E6%80%80%E4%BA%8C%E8%83%8E%E8%BA%AB%E6%9D%90%E8%B5%B0%E6%A0%B7%E9%94%BB%E7%82%BC%E6%97%B6%E8%A2%AB%E9%83%91%E6%81%BA%E9%80%97%E4%BA%86%E4%B8%80%E4%B8%8B%23&t=31&band_rank=21&Refer=top)
1. [文吉儿圈内好友没提王子璇](https://s.weibo.com//weibo?q=%E6%96%87%E5%90%89%E5%84%BF%E5%9C%88%E5%86%85%E5%A5%BD%E5%8F%8B%E6%B2%A1%E6%8F%90%E7%8E%8B%E5%AD%90%E7%92%87&t=31&band_rank=22&Refer=top)
1. [赵丽颖合影被拉到C位](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%90%88%E5%BD%B1%E8%A2%AB%E6%8B%89%E5%88%B0C%E4%BD%8D%23&t=31&band_rank=23&Refer=top)
1. [青岛失联女生最后监控走向海边](https://s.weibo.com//weibo?q=%E9%9D%92%E5%B2%9B%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E6%9C%80%E5%90%8E%E7%9B%91%E6%8E%A7%E8%B5%B0%E5%90%91%E6%B5%B7%E8%BE%B9&t=31&band_rank=24&Refer=top)
1. [许飞说可以和厉娜去观察室了](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E8%AF%B4%E5%8F%AF%E4%BB%A5%E5%92%8C%E5%8E%89%E5%A8%9C%E5%8E%BB%E8%A7%82%E5%AF%9F%E5%AE%A4%E4%BA%86%23&t=31&band_rank=25&Refer=top)
1. [林孝埈年度竞燃号召力运动员](https://s.weibo.com//weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E5%B9%B4%E5%BA%A6%E7%AB%9E%E7%87%83%E5%8F%B7%E5%8F%AC%E5%8A%9B%E8%BF%90%E5%8A%A8%E5%91%98%23&t=31&band_rank=26&Refer=top)
1. [后会友期全员都想吃文王的瓜](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%85%A8%E5%91%98%E9%83%BD%E6%83%B3%E5%90%83%E6%96%87%E7%8E%8B%E7%9A%84%E7%93%9C&t=31&band_rank=27&Refer=top)
1. [芦玉菲退役后社保被欠七年五个月](https://s.weibo.com//weibo?q=%E8%8A%A6%E7%8E%89%E8%8F%B2%E9%80%80%E5%BD%B9%E5%90%8E%E7%A4%BE%E4%BF%9D%E8%A2%AB%E6%AC%A0%E4%B8%83%E5%B9%B4%E4%BA%94%E4%B8%AA%E6%9C%88&t=31&band_rank=28&Refer=top)
1. [青稚回应王栎鑫](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E5%9B%9E%E5%BA%94%E7%8E%8B%E6%A0%8E%E9%91%AB%23&t=31&band_rank=29&Refer=top)
1. [五星上将麦克阿瑟谈深圳50年巨变](https://s.weibo.com//weibo?q=%23%E4%BA%94%E6%98%9F%E4%B8%8A%E5%B0%86%E9%BA%A6%E5%85%8B%E9%98%BF%E7%91%9F%E8%B0%88%E6%B7%B1%E5%9C%B350%E5%B9%B4%E5%B7%A8%E5%8F%98%23&t=31&band_rank=30&Refer=top)
1. [上次哭成这样还是因为厉娜许飞](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%AC%A1%E5%93%AD%E6%88%90%E8%BF%99%E6%A0%B7%E8%BF%98%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%8E%89%E5%A8%9C%E8%AE%B8%E9%A3%9E%23&t=31&band_rank=31&Refer=top)
1. [韩国总统夫人被舞狮英歌舞表演圈粉](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%80%BB%E7%BB%9F%E5%A4%AB%E4%BA%BA%E8%A2%AB%E8%88%9E%E7%8B%AE%E8%8B%B1%E6%AD%8C%E8%88%9E%E8%A1%A8%E6%BC%94%E5%9C%88%E7%B2%89%23&t=31&band_rank=32&Refer=top)
1. [直接把缅因给打成兔子了](https://s.weibo.com//weibo?q=%E7%9B%B4%E6%8E%A5%E6%8A%8A%E7%BC%85%E5%9B%A0%E7%BB%99%E6%89%93%E6%88%90%E5%85%94%E5%AD%90%E4%BA%86&t=31&band_rank=33&Refer=top)
1. [青稚晒竞燃之夜奖杯](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E6%99%92%E7%AB%9E%E7%87%83%E4%B9%8B%E5%A4%9C%E5%A5%96%E6%9D%AF%23&t=31&band_rank=34&Refer=top)
1. [看完爸爸跳的忘了原本女儿怎么跳的](https://s.weibo.com//weibo?q=%23%E7%9C%8B%E5%AE%8C%E7%88%B8%E7%88%B8%E8%B7%B3%E7%9A%84%E5%BF%98%E4%BA%86%E5%8E%9F%E6%9C%AC%E5%A5%B3%E5%84%BF%E6%80%8E%E4%B9%88%E8%B7%B3%E7%9A%84%23&t=31&band_rank=35&Refer=top)
1. [跟狗长大的猫成了狗狗猫](https://s.weibo.com//weibo?q=%E8%B7%9F%E7%8B%97%E9%95%BF%E5%A4%A7%E7%9A%84%E7%8C%AB%E6%88%90%E4%BA%86%E7%8B%97%E7%8B%97%E7%8C%AB&t=31&band_rank=36&Refer=top)
1. [曹翠芬发言赵丽颖快哭了](https://s.weibo.com//weibo?q=%23%E6%9B%B9%E7%BF%A0%E8%8A%AC%E5%8F%91%E8%A8%80%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%BF%AB%E5%93%AD%E4%BA%86%23&t=31&band_rank=37&Refer=top)
1. [APEC晚宴领导人迎宾乐是按国定制](https://s.weibo.com//weibo?q=%23APEC%E6%99%9A%E5%AE%B4%E9%A2%86%E5%AF%BC%E4%BA%BA%E8%BF%8E%E5%AE%BE%E4%B9%90%E6%98%AF%E6%8C%89%E5%9B%BD%E5%AE%9A%E5%88%B6%23&t=31&band_rank=38&Refer=top)
1. [杨超越18年和25年的跳舞对比](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A18%E5%B9%B4%E5%92%8C25%E5%B9%B4%E7%9A%84%E8%B7%B3%E8%88%9E%E5%AF%B9%E6%AF%94%23&t=31&band_rank=39&Refer=top)
1. [华强北长满了外国人](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E5%BC%BA%E5%8C%97%E9%95%BF%E6%BB%A1%E4%BA%86%E5%A4%96%E5%9B%BD%E4%BA%BA%23&t=31&band_rank=40&Refer=top)
1. [三国重申能源稳定流动的重要性](https://s.weibo.com//weibo?q=%23%E4%B8%89%E5%9B%BD%E9%87%8D%E7%94%B3%E8%83%BD%E6%BA%90%E7%A8%B3%E5%AE%9A%E6%B5%81%E5%8A%A8%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23&t=31&band_rank=41&Refer=top)
1. [APEC同款荔枝冰酒原果汁含量100%](https://s.weibo.com//weibo?q=%23APEC%E5%90%8C%E6%AC%BE%E8%8D%94%E6%9E%9D%E5%86%B0%E9%85%92%E5%8E%9F%E6%9E%9C%E6%B1%81%E5%90%AB%E9%87%8F100%25%23&t=31&band_rank=42&Refer=top)
1. [BIGBANG](https://s.weibo.com//weibo?q=BIGBANG&t=31&band_rank=43&Refer=top)
1. [APEC在台湾刷屏了](https://s.weibo.com//weibo?q=%23APEC%E5%9C%A8%E5%8F%B0%E6%B9%BE%E5%88%B7%E5%B1%8F%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [王菲窦靖童李嫣将合作发歌](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%8F%B2%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%9D%8E%E5%AB%A3%E5%B0%86%E5%90%88%E4%BD%9C%E5%8F%91%E6%AD%8C%23&t=31&band_rank=45&Refer=top)
1. [APEC晚宴用荔枝冰酒销量暴增900倍](https://s.weibo.com//weibo?q=%23APEC%E6%99%9A%E5%AE%B4%E7%94%A8%E8%8D%94%E6%9E%9D%E5%86%B0%E9%85%92%E9%94%80%E9%87%8F%E6%9A%B4%E5%A2%9E900%E5%80%8D%23&t=31&band_rank=46&Refer=top)
1. [朱志鑫一撒娇就夹起来了](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E4%B8%80%E6%92%92%E5%A8%87%E5%B0%B1%E5%A4%B9%E8%B5%B7%E6%9D%A5%E4%BA%86%23&t=31&band_rank=47&Refer=top)
1. [杨乐乐分享和汪涵谈恋爱过程](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E4%B9%90%E4%B9%90%E5%88%86%E4%BA%AB%E5%92%8C%E6%B1%AA%E6%B6%B5%E8%B0%88%E6%81%8B%E7%88%B1%E8%BF%87%E7%A8%8B%23&t=31&band_rank=48&Refer=top)
1. [甲亢哥直播GTA6近24小时](https://s.weibo.com//weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E7%9B%B4%E6%92%ADGTA6%E8%BF%9124%E5%B0%8F%E6%97%B6%23&t=31&band_rank=49&Refer=top)
1. [秦岚你学学刘涛怎么保暖的](https://s.weibo.com//weibo?q=%23%E7%A7%A6%E5%B2%9A%E4%BD%A0%E5%AD%A6%E5%AD%A6%E5%88%98%E6%B6%9B%E6%80%8E%E4%B9%88%E4%BF%9D%E6%9A%96%E7%9A%84%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
