# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-26 07:39:20

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
<!-- 最后更新时间 Thu Nov 26 2026 04:08:05 GMT+0800 (China Standard Time) -->

1. [金价大跌金店挤爆 抢黄金的人在抢啥](https://so.toutiao.com/search?keyword=金价大跌金店挤爆%20抢黄金的人在抢啥)
1. [陈吉宁被查 上海市政府党组等表态](https://so.toutiao.com/search?keyword=陈吉宁被查%20上海市政府党组等表态)
1. [中外航天员在中国空间站“太空会师”](https://so.toutiao.com/search?keyword=中外航天员在中国空间站“太空会师”)
1. [AI正在帮忙抓贪官](https://so.toutiao.com/search?keyword=AI正在帮忙抓贪官)
1. [巴主持人激动播报：这是最自豪时刻](https://so.toutiao.com/search?keyword=巴主持人激动播报：这是最自豪时刻)
1. [安徽4岁走失男童找到已无生命体征](https://so.toutiao.com/search?keyword=安徽4岁走失男童找到已无生命体征)
1. [金价暴跌与大妈抄底的博弈](https://so.toutiao.com/search?keyword=金价暴跌与大妈抄底的博弈)
1. [巴航天员专属食品库有100多个品类](https://so.toutiao.com/search?keyword=巴航天员专属食品库有100多个品类)
1. [报告：未来10年国内汽柴油萎缩超四成](https://so.toutiao.com/search?keyword=报告：未来10年国内汽柴油萎缩超四成)
1. [美国58岁女子猪肾移植满一年](https://so.toutiao.com/search?keyword=美国58岁女子猪肾移植满一年)
1. [“天津滨海新区试点免中考升学”不实](https://so.toutiao.com/search?keyword=“天津滨海新区试点免中考升学”不实)
1. [每天喝一碗“开水冲鸡蛋”有何变化](https://so.toutiao.com/search?keyword=每天喝一碗“开水冲鸡蛋”有何变化)
1. [石川佳纯宣布结婚](https://so.toutiao.com/search?keyword=石川佳纯宣布结婚)
1. [专家：年轻人的买房观变了](https://so.toutiao.com/search?keyword=专家：年轻人的买房观变了)
1. [高盛：明年中国经济三大支撑因素显现](https://so.toutiao.com/search?keyword=高盛：明年中国经济三大支撑因素显现)
1. [巴基斯坦航天员手指国旗向镜头敬礼](https://so.toutiao.com/search?keyword=巴基斯坦航天员手指国旗向镜头敬礼)
1. [情侣花3300在餐厅求婚遭服务员打断](https://so.toutiao.com/search?keyword=情侣花3300在餐厅求婚遭服务员打断)
1. [海南首趟V字头列车来了](https://so.toutiao.com/search?keyword=海南首趟V字头列车来了)
1. [火箭发射与朝霞同框浪漫壮美](https://so.toutiao.com/search?keyword=火箭发射与朝霞同框浪漫壮美)
1. [华为Mate X8首拆](https://so.toutiao.com/search?keyword=华为Mate%20X8首拆)
1. [王玉雯工作室回应皮草质疑](https://so.toutiao.com/search?keyword=王玉雯工作室回应皮草质疑)
1. [神舟二十四号载人飞船发射成功](https://so.toutiao.com/search?keyword=神舟二十四号载人飞船发射成功)
1. [APEC晚宴“木蒸笼”火出圈](https://so.toutiao.com/search?keyword=APEC晚宴“木蒸笼”火出圈)
1. [高市早苗遭吐槽精神状态不妙](https://so.toutiao.com/search?keyword=高市早苗遭吐槽精神状态不妙)
1. [糖尿病患者晨起有哪些表现](https://so.toutiao.com/search?keyword=糖尿病患者晨起有哪些表现)
1. [郎永淳首度回应从央视离职原因](https://so.toutiao.com/search?keyword=郎永淳首度回应从央视离职原因)
1. [为何转人工客服这么难](https://so.toutiao.com/search?keyword=为何转人工客服这么难)
1. [融资余额减少9000亿市场何时见底](https://so.toutiao.com/search?keyword=融资余额减少9000亿市场何时见底)
1. [沈阳高颜值保洁大叔决定辞职](https://so.toutiao.com/search?keyword=沈阳高颜值保洁大叔决定辞职)
1. [老旧小区加装电梯钱从哪来](https://so.toutiao.com/search?keyword=老旧小区加装电梯钱从哪来)
1. [巴基斯坦航天为何没落了](https://so.toutiao.com/search?keyword=巴基斯坦航天为何没落了)
1. [九阳股份的狂欢谁来买单](https://so.toutiao.com/search?keyword=九阳股份的狂欢谁来买单)
1. [中外航天员实现首次“太空握手”](https://so.toutiao.com/search?keyword=中外航天员实现首次“太空握手”)
1. [岛内舆论扎心追问：台湾应向何方](https://so.toutiao.com/search?keyword=岛内舆论扎心追问：台湾应向何方)
1. [北京发布社保待遇有关问题通告](https://so.toutiao.com/search?keyword=北京发布社保待遇有关问题通告)
1. [神舟飞船对接天宫空间站为何越来越快](https://so.toutiao.com/search?keyword=神舟飞船对接天宫空间站为何越来越快)
1. [伊朗总统在哈梅内伊墓前下跪致敬](https://so.toutiao.com/search?keyword=伊朗总统在哈梅内伊墓前下跪致敬)
1. [新债王警告美国化解债务只剩三条路](https://so.toutiao.com/search?keyword=新债王警告美国化解债务只剩三条路)
1. [中国男篮冲击世界杯](https://so.toutiao.com/search?keyword=中国男篮冲击世界杯)
1. [巴基斯坦总理：感谢兄弟般的中国](https://so.toutiao.com/search?keyword=巴基斯坦总理：感谢兄弟般的中国)
1. [于谦到济南第一站又是吃把子肉](https://so.toutiao.com/search?keyword=于谦到济南第一站又是吃把子肉)
1. [专家：AI若暴雷美国经济真伤不起](https://so.toutiao.com/search?keyword=专家：AI若暴雷美国经济真伤不起)
1. [巴大使：好好学中文万一能上太空呢](https://so.toutiao.com/search?keyword=巴大使：好好学中文万一能上太空呢)
1. [策略师：黄金回调仍具备风险对冲意义](https://so.toutiao.com/search?keyword=策略师：黄金回调仍具备风险对冲意义)
1. [大凉山公益慢火车车次更名](https://so.toutiao.com/search?keyword=大凉山公益慢火车车次更名)
1. [巴基斯坦航天员说中国空间站我来了](https://so.toutiao.com/search?keyword=巴基斯坦航天员说中国空间站我来了)
1. [中外航天员第一张太空合影](https://so.toutiao.com/search?keyword=中外航天员第一张太空合影)
1. [冬季如何科学养护新能源车](https://so.toutiao.com/search?keyword=冬季如何科学养护新能源车)
1. [孙颖莎王曼昱成都公园打球](https://so.toutiao.com/search?keyword=孙颖莎王曼昱成都公园打球)
1. [史上最大AI IPO破发释放什么信号](https://so.toutiao.com/search?keyword=史上最大AI%20IPO破发释放什么信号)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Nov 26 2026 08:16:16 GMT+0800 (China Standard Time) -->

1. [余文乐自曝躯体化严重到不能开车](https://www.zhihu.com/search?q=%E4%BD%99%E6%96%87%E4%B9%90%E8%87%AA%E6%9B%9D%E8%BA%AF%E4%BD%93%E5%8C%96%E4%B8%A5%E9%87%8D%E5%88%B0%E4%B8%8D%E8%83%BD%E5%BC%80%E8%BD%A6)
1. [DeepSeek调整API定价](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4API%E5%AE%9A%E4%BB%B7)
1. [黄仁勋恢复英伟达总裁CEO职务](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%81%A2%E5%A4%8D%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%80%BB%E8%A3%81CEO%E8%81%8C%E5%8A%A1)
1. [年轻人开始劝父母卖县城空房](https://www.zhihu.com/search?q=%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8A%9D%E7%88%B6%E6%AF%8D%E5%8D%96%E5%8E%BF%E5%9F%8E%E7%A9%BA%E6%88%BF)
1. [上海大学生宿舍坠亡两日后被发现](https://www.zhihu.com/search?q=%E4%B8%8A%E6%B5%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%AE%BF%E8%88%8D%E5%9D%A0%E4%BA%A1%E4%B8%A4%E6%97%A5%E5%90%8E%E8%A2%AB%E5%8F%91%E7%8E%B0)
1. [美媒称黄仁勋常态化羞辱员工](https://www.zhihu.com/search?q=%E7%BE%8E%E5%AA%92%E7%A7%B0%E9%BB%84%E4%BB%81%E5%8B%8B%E5%B8%B8%E6%80%81%E5%8C%96%E7%BE%9E%E8%BE%B1%E5%91%98%E5%B7%A5)
1. [神舟二十四号发射任务](https://www.zhihu.com/search?q=%E7%A5%9E%E8%88%9F%E4%BA%8C%E5%8D%81%E5%9B%9B%E5%8F%B7%E5%8F%91%E5%B0%84%E4%BB%BB%E5%8A%A1)
1. [黎曼猜想证明被Lean社区确认](https://www.zhihu.com/search?q=%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E8%AF%81%E6%98%8E%E8%A2%ABLean%E7%A4%BE%E5%8C%BA%E7%A1%AE%E8%AE%A4)
1. [AI证明黎曼猜想](https://www.zhihu.com/search?q=AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [网传Anthropic称质因数分解属P](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0Anthropic%E7%A7%B0%E8%B4%A8%E5%9B%A0%E6%95%B0%E5%88%86%E8%A7%A3%E5%B1%9EP)
1. [两届炒股大赛冠军破产](https://www.zhihu.com/search?q=%E4%B8%A4%E5%B1%8A%E7%82%92%E8%82%A1%E5%A4%A7%E8%B5%9B%E5%86%A0%E5%86%9B%E7%A0%B4%E4%BA%A7)
1. [斗鱼及创始人被执行1.9亿余元](https://www.zhihu.com/search?q=%E6%96%97%E9%B1%BC%E5%8F%8A%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%A2%AB%E6%89%A7%E8%A1%8C1.9%E4%BA%BF%E4%BD%99%E5%85%83)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Nov 26 2026 07:39:20 GMT+0800 (China Standard Time) -->

1. [为什么神舟二十四号外籍航天员名额给了巴基斯坦而不是其他国家？](https://www.zhihu.com/question/2108916871718073600)
1. [OpenAI证明矩阵乘法指数下界为9/4，如何看待？](https://www.zhihu.com/question/2108865707819771100)
1. [央视曝光3.8万余份孕妇血走私案，国安部警示孕妇血样走私或泄露我国遗传弱点，科学依据和风险具体是什么？](https://www.zhihu.com/question/2109003777294295000)
1. [T1 官宣 Zeus 回归队伍并签约至 2029 年，ZOFPK 组合的 T1 还会继续称霸吗？](https://www.zhihu.com/question/2108988267815073500)
1. [突然脑洞一下，如果王勃参加高考，语文作文写出了滕王阁序，会因为只有773个字，不到800而扣分吗？](https://www.zhihu.com/question/2055249552723202800)
1. [商品房楼板国标普遍仅10-12cm，为什么不统一再加厚15cm？加厚楼板能否彻底解决楼层噪音困扰？](https://www.zhihu.com/question/2066353729507422700)
1. [怎么看 Axios 报道，OpenAI 和 Anthropic 因为内部模型太强，可能无法发布 ？](https://www.zhihu.com/question/2108663109493716000)
1. [如何评价凡人修仙传解析博主夏九幽的视频《为何凡人动漫年番四创下全系列最低分，评分只有7.7分》？](https://www.zhihu.com/question/2108653952418038500)
1. [情侣求婚关键时刻，服务员闯入询问「能否拿走纸箱」，餐厅提出抹零49元，服务员闯入合理吗？餐厅该补偿吗？](https://www.zhihu.com/question/2108840639701803800)
1. [学生因课间说方言被学校认定违纪，学校回应称已取消规定，这种提倡讲普通话的方式是不是过激了？](https://www.zhihu.com/question/2108975774661173800)
1. [如何评价国铁集团2027年第一季度（2026.12.28）调图对客运列车的调整？](https://www.zhihu.com/question/2069151409061287200)
1. [如何看待黑客放出《GTA 6》Xbox版核心文件后，民间靠AI不到24小时就搬上PC并成功进入实机？](https://www.zhihu.com/question/2108737825650762800)
1. [如何看待黄仁勋辟谣特朗普施压复职说法，称是董事会自主作出决定？二人口径为何不一致？](https://www.zhihu.com/question/2108869758925923800)
1. [重庆一男孩吃面被坠楼男子砸中，男孩无生命危险，警方已介入，此类事件责任该如何界定？](https://www.zhihu.com/question/2108734679998321000)
1. [豆包和 DeepSeek 哪个好用？](https://www.zhihu.com/question/2042157689262826000)
1. [「结婚八年三孩非亲生案」一审认定女方存在重大过错，判决赔偿男方共计二十二万，大家如何看待这个结果？](https://www.zhihu.com/question/2108927460083495200)
1. [如何评价黄仁勋回归英伟达首日说「没电脑用，想要台 RTX Spark」？你觉得最好用的办公电脑是啥？](https://www.zhihu.com/question/2108890432125888500)
1. [摩根大通发布《中国房地产，只有幸存者才能生存》研报，如何解读其中的内容？](https://www.zhihu.com/question/2106329177578271700)
1. [黄多多贝儿先后官宣出道，星二代扎堆进圈会挤压普通新人发展机会吗？](https://www.zhihu.com/question/2106383813853159700)
1. [如何看待《两京十五日》火烧太庙、射太祖画像的剧情？](https://www.zhihu.com/question/2107834692301071000)
1. [金价大幅回撤，银行和交易所都在风险提示，避险逻辑失效，黄金还能不能作为保值资产？](https://www.zhihu.com/question/2107872963349451300)
1. [募款超过嫣然天使基金救助承载能力，李亚鹏建议月捐 1 元支持嫣然基金，如何看待这种小额长期公益思路？](https://www.zhihu.com/question/2107455866412848400)
1. [如何看待曾毓群曾表态，因为宁德时代在撑着这个价钱，只要我们把价钱低下来，锂电行业比光伏还惨？](https://www.zhihu.com/question/2107879530920678100)
1. [为何董洁和刘亦菲的颜值差别那么大了?](https://www.zhihu.com/question/661729925)
1. [博士卧底当主播6月，经历PK和羞辱惩罚，至今仍有心理阴影，暴露出哪些问题？PK为何沦为主播出丑的生意？](https://www.zhihu.com/question/2107863107414356700)
1. [如果红果短剧改为付费观看，那么结果将如何？](https://www.zhihu.com/question/2108125203414963000)
1. [为什么吕子乔不撩诺澜？](https://www.zhihu.com/question/497073110)
1. [大家都爱包什么馅儿的饺子啊？](https://www.zhihu.com/question/9930106913)
1. [在一些枪炮类武器注定会成为动漫中的战力垫脚石的世界观中，人类研发出它的意义是什么？](https://www.zhihu.com/question/2106850034386064000)
1. [德银认为「芯片美元」正在取代「石油美元」，这一判断依据和背后逻辑是什么？](https://www.zhihu.com/question/2106682730880812300)

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
<!-- 最后更新时间 Thu Nov 26 2026 01:24:48 GMT+0800 (China Standard Time) -->

1. [中巴领导人就神24飞天互致贺电](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%B7%B4%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B0%B1%E7%A5%9E24%E9%A3%9E%E5%A4%A9%E4%BA%92%E8%87%B4%E8%B4%BA%E7%94%B5%23&Refer=new_time)
1. [金价扛不住了](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E6%89%9B%E4%B8%8D%E4%BD%8F%E4%BA%86%23&t=31&band_rank=1&Refer=top)
1. [华为自研HBM内存方案](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E8%87%AA%E7%A0%94HBM%E5%86%85%E5%AD%98%E6%96%B9%E6%A1%88&t=31&band_rank=2&Refer=top)
1. [神24乘组进驻天宫](https://s.weibo.com//weibo?q=%23%E7%A5%9E24%E4%B9%98%E7%BB%84%E8%BF%9B%E9%A9%BB%E5%A4%A9%E5%AE%AB%23&t=31&band_rank=3&Refer=top)
1. [许飞乐意看厉娜哭还有后半句](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E4%B9%90%E6%84%8F%E7%9C%8B%E5%8E%89%E5%A8%9C%E5%93%AD%E8%BF%98%E6%9C%89%E5%90%8E%E5%8D%8A%E5%8F%A5&t=31&band_rank=4&Refer=top)
1. [ON BLG](https://s.weibo.com//weibo?q=ON%20BLG&t=31&band_rank=5&Refer=top)
1. [网友抵制王玉雯代言皮草](https://s.weibo.com//weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8A%B5%E5%88%B6%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%BB%A3%E8%A8%80%E7%9A%AE%E8%8D%89%23&t=31&band_rank=6&Refer=top)
1. [疑似文吉儿朋友圈辟谣办婚礼](https://s.weibo.com//weibo?q=%E7%96%91%E4%BC%BC%E6%96%87%E5%90%89%E5%84%BF%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%BE%9F%E8%B0%A3%E5%8A%9E%E5%A9%9A%E7%A4%BC&t=31&band_rank=7&Refer=top)
1. [最帅保洁大叔宣布辞职](https://s.weibo.com//weibo?q=%23%E6%9C%80%E5%B8%85%E4%BF%9D%E6%B4%81%E5%A4%A7%E5%8F%94%E5%AE%A3%E5%B8%83%E8%BE%9E%E8%81%8C%23&t=31&band_rank=8&Refer=top)
1. [坠楼致2男孩受伤老人已身亡](https://s.weibo.com//weibo?q=%23%E5%9D%A0%E6%A5%BC%E8%87%B42%E7%94%B7%E5%AD%A9%E5%8F%97%E4%BC%A4%E8%80%81%E4%BA%BA%E5%B7%B2%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=9&Refer=top)
1. [当Bin听到Zeus回归T1](https://s.weibo.com//weibo?q=%23%E5%BD%93Bin%E5%90%AC%E5%88%B0Zeus%E5%9B%9E%E5%BD%92T1%23&t=31&band_rank=10&Refer=top)
1. [炒股亏钱最对不起的是家人](https://s.weibo.com//weibo?q=%E7%82%92%E8%82%A1%E4%BA%8F%E9%92%B1%E6%9C%80%E5%AF%B9%E4%B8%8D%E8%B5%B7%E7%9A%84%E6%98%AF%E5%AE%B6%E4%BA%BA&t=31&band_rank=11&Refer=top)
1. [伊能静说许飞有一点假大方](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%AF%B4%E8%AE%B8%E9%A3%9E%E6%9C%89%E4%B8%80%E7%82%B9%E5%81%87%E5%A4%A7%E6%96%B9%23&t=31&band_rank=12&Refer=top)
1. [郭子睿回应自己为什么进圈](https://s.weibo.com//weibo?q=%23%E9%83%AD%E5%AD%90%E7%9D%BF%E5%9B%9E%E5%BA%94%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%9B%E5%9C%88%23&t=31&band_rank=13&Refer=top)
1. [谷爱凌肩膀脱臼](https://s.weibo.com//weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%82%A9%E8%86%80%E8%84%B1%E8%87%BC%23&t=31&band_rank=14&Refer=top)
1. [爱奇艺 云包场](https://s.weibo.com//weibo?q=%E7%88%B1%E5%A5%87%E8%89%BA%20%E4%BA%91%E5%8C%85%E5%9C%BA&t=31&band_rank=15&Refer=top)
1. [全度妍三封青龙影后](https://s.weibo.com//weibo?q=%23%E5%85%A8%E5%BA%A6%E5%A6%8D%E4%B8%89%E5%B0%81%E9%9D%92%E9%BE%99%E5%BD%B1%E5%90%8E%23&t=31&band_rank=16&Refer=top)
1. [后会友期所有线索串起来了](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%89%80%E6%9C%89%E7%BA%BF%E7%B4%A2%E4%B8%B2%E8%B5%B7%E6%9D%A5%E4%BA%86%23&t=31&band_rank=17&Refer=top)
1. [青稚看白小纯MVP结算画面的反应](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E7%9C%8B%E7%99%BD%E5%B0%8F%E7%BA%AFMVP%E7%BB%93%E7%AE%97%E7%94%BB%E9%9D%A2%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=18&Refer=top)
1. [王玉雯方回应代言皮草争议](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BB%A3%E8%A8%80%E7%9A%AE%E8%8D%89%E4%BA%89%E8%AE%AE%23&t=31&band_rank=19&Refer=top)
1. [疑似李河民恋情](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E6%9D%8E%E6%B2%B3%E6%B0%91%E6%81%8B%E6%83%85%23&t=31&band_rank=20&Refer=top)
1. [工信部公示小米新SU7Ultra](https://s.weibo.com//weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E5%85%AC%E7%A4%BA%E5%B0%8F%E7%B1%B3%E6%96%B0SU7Ultra%23&t=31&band_rank=21&Refer=top)
1. [印度女子遭同事轮奸在场多人协助](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E9%81%AD%E5%90%8C%E4%BA%8B%E8%BD%AE%E5%A5%B8%E5%9C%A8%E5%9C%BA%E5%A4%9A%E4%BA%BA%E5%8D%8F%E5%8A%A9%23&t=31&band_rank=22&Refer=top)
1. [黄金史上暴跌最快半年恢复](https://s.weibo.com//weibo?q=%23%E9%BB%84%E9%87%91%E5%8F%B2%E4%B8%8A%E6%9A%B4%E8%B7%8C%E6%9C%80%E5%BF%AB%E5%8D%8A%E5%B9%B4%E6%81%A2%E5%A4%8D%23&t=31&band_rank=23&Refer=top)
1. [曝文吉儿微信停用](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%96%87%E5%90%89%E5%84%BF%E5%BE%AE%E4%BF%A1%E5%81%9C%E7%94%A8%23&t=31&band_rank=24&Refer=top)
1. [青稚白小纯1V1练枪](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF1V1%E7%BB%83%E6%9E%AA%23&t=31&band_rank=25&Refer=top)
1. [朱亚文版朱瞻基](https://s.weibo.com//weibo?q=%E6%9C%B1%E4%BA%9A%E6%96%87%E7%89%88%E6%9C%B1%E7%9E%BB%E5%9F%BA&t=31&band_rank=26&Refer=top)
1. [王俊凯调解 后会友期变后会无期](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%B0%83%E8%A7%A3%20%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%8F%98%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F&t=31&band_rank=27&Refer=top)
1. [一诺说想和无畏交朋友](https://s.weibo.com//weibo?q=%23%E4%B8%80%E8%AF%BA%E8%AF%B4%E6%83%B3%E5%92%8C%E6%97%A0%E7%95%8F%E4%BA%A4%E6%9C%8B%E5%8F%8B%23&t=31&band_rank=28&Refer=top)
1. [白头发是身体在发出压力警告](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%A4%B4%E5%8F%91%E6%98%AF%E8%BA%AB%E4%BD%93%E5%9C%A8%E5%8F%91%E5%87%BA%E5%8E%8B%E5%8A%9B%E8%AD%A6%E5%91%8A%23&t=31&band_rank=29&Refer=top)
1. [印度晒航天员失重训练](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%99%92%E8%88%AA%E5%A4%A9%E5%91%98%E5%A4%B1%E9%87%8D%E8%AE%AD%E7%BB%83%23&t=31&band_rank=30&Refer=top)
1. [刘亦菲换手机了](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8D%A2%E6%89%8B%E6%9C%BA%E4%BA%86&t=31&band_rank=31&Refer=top)
1. [成毅两京十五日台网双爆了](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E5%8F%B0%E7%BD%91%E5%8F%8C%E7%88%86%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [向太自曝体内装有十个心脏支架](https://s.weibo.com//weibo?q=%23%E5%90%91%E5%A4%AA%E8%87%AA%E6%9B%9D%E4%BD%93%E5%86%85%E8%A3%85%E6%9C%89%E5%8D%81%E4%B8%AA%E5%BF%83%E8%84%8F%E6%94%AF%E6%9E%B6%23&t=31&band_rank=33&Refer=top)
1. [巴基斯坦航天员在天宫中文唠嗑](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%88%AA%E5%A4%A9%E5%91%98%E5%9C%A8%E5%A4%A9%E5%AE%AB%E4%B8%AD%E6%96%87%E5%94%A0%E5%97%91%23&t=31&band_rank=34&Refer=top)
1. [申敏儿看李光洙颁奖的表情](https://s.weibo.com//weibo?q=%23%E7%94%B3%E6%95%8F%E5%84%BF%E7%9C%8B%E6%9D%8E%E5%85%89%E6%B4%99%E9%A2%81%E5%A5%96%E7%9A%84%E8%A1%A8%E6%83%85%23&t=31&band_rank=35&Refer=top)
1. [拔掉白头发会发生什么](https://s.weibo.com//weibo?q=%23%E6%8B%94%E6%8E%89%E7%99%BD%E5%A4%B4%E5%8F%91%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88%23&t=31&band_rank=36&Refer=top)
1. [957爆料Ming加入WBG](https://s.weibo.com//weibo?q=%23957%E7%88%86%E6%96%99Ming%E5%8A%A0%E5%85%A5WBG%23&t=31&band_rank=37&Refer=top)
1. [金价现在可翻了好几倍](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E7%8E%B0%E5%9C%A8%E5%8F%AF%E7%BF%BB%E4%BA%86%E5%A5%BD%E5%87%A0%E5%80%8D%23&t=31&band_rank=38&Refer=top)
1. [贝儿穿上了妈妈当年上春晚的裙子](https://s.weibo.com//weibo?q=%23%E8%B4%9D%E5%84%BF%E7%A9%BF%E4%B8%8A%E4%BA%86%E5%A6%88%E5%A6%88%E5%BD%93%E5%B9%B4%E4%B8%8A%E6%98%A5%E6%99%9A%E7%9A%84%E8%A3%99%E5%AD%90%23&t=31&band_rank=39&Refer=top)
1. [巴基斯坦航天员有专属的航天食品库](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%88%AA%E5%A4%A9%E5%91%98%E6%9C%89%E4%B8%93%E5%B1%9E%E7%9A%84%E8%88%AA%E5%A4%A9%E9%A3%9F%E5%93%81%E5%BA%93%23&t=31&band_rank=40&Refer=top)
1. [青龙奖](https://s.weibo.com//weibo?q=%E9%9D%92%E9%BE%99%E5%A5%96&t=31&band_rank=41&Refer=top)
1. [Oo33的鸽](https://s.weibo.com//weibo?q=%23Oo33%E7%9A%84%E9%B8%BD%23&t=31&band_rank=42&Refer=top)
1. [Zeus称Joemash多次向自己道歉](https://s.weibo.com//weibo?q=%23Zeus%E7%A7%B0Joemash%E5%A4%9A%E6%AC%A1%E5%90%91%E8%87%AA%E5%B7%B1%E9%81%93%E6%AD%89%23&t=31&band_rank=43&Refer=top)
1. [zeus说BLG夺冠很帅](https://s.weibo.com//weibo?q=%23zeus%E8%AF%B4BLG%E5%A4%BA%E5%86%A0%E5%BE%88%E5%B8%85%23&t=31&band_rank=44&Refer=top)
1. [小学教材全解 上古真神](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%AD%A6%E6%95%99%E6%9D%90%E5%85%A8%E8%A7%A3%20%E4%B8%8A%E5%8F%A4%E7%9C%9F%E7%A5%9E&t=31&band_rank=45&Refer=top)
1. [教师熟睡时遭凶手杀害身中20余刀](https://s.weibo.com//weibo?q=%E6%95%99%E5%B8%88%E7%86%9F%E7%9D%A1%E6%97%B6%E9%81%AD%E5%87%B6%E6%89%8B%E6%9D%80%E5%AE%B3%E8%BA%AB%E4%B8%AD20%E4%BD%99%E5%88%80&t=31&band_rank=46&Refer=top)
1. [湖南网警公布一起恶意抹黑华为案例](https://s.weibo.com//weibo?q=%23%E6%B9%96%E5%8D%97%E7%BD%91%E8%AD%A6%E5%85%AC%E5%B8%83%E4%B8%80%E8%B5%B7%E6%81%B6%E6%84%8F%E6%8A%B9%E9%BB%91%E5%8D%8E%E4%B8%BA%E6%A1%88%E4%BE%8B%23&t=31&band_rank=47&Refer=top)
1. [黄金跌破3500美元](https://s.weibo.com//weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E7%A0%B43500%E7%BE%8E%E5%85%83%23&t=31&band_rank=48&Refer=top)
1. [曝Ming复出](https://s.weibo.com//weibo?q=%23%E6%9B%9DMing%E5%A4%8D%E5%87%BA%23&t=31&band_rank=49&Refer=top)
1. [泰警方称被绑中国女子疑遭嫌犯下药](https://s.weibo.com//weibo?q=%23%E6%B3%B0%E8%AD%A6%E6%96%B9%E7%A7%B0%E8%A2%AB%E7%BB%91%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E7%96%91%E9%81%AD%E5%AB%8C%E7%8A%AF%E4%B8%8B%E8%8D%AF%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
