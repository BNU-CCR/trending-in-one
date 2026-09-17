# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-18 02:16:54

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
<!-- 最后更新时间 Fri Sep 18 2026 01:15:11 GMT+0800 (China Standard Time) -->

1. [中美外长通电话](https://so.toutiao.com/search?keyword=中美外长通电话)
1. [王毅：中美双方要筹备好下阶段高层交往](https://so.toutiao.com/search?keyword=王毅：中美双方要筹备好下阶段高层交往)
1. [平陆运河激活西部“新动脉”](https://so.toutiao.com/search?keyword=平陆运河激活西部“新动脉”)
1. [广东惠州公安查获42公斤散装柴油](https://so.toutiao.com/search?keyword=广东惠州公安查获42公斤散装柴油)
1. [一车人都买错票车站 12306新增提醒](https://so.toutiao.com/search?keyword=一车人都买错票车站%2012306新增提醒)
1. [苹果最贵手机还没开售就翻车了吗](https://so.toutiao.com/search?keyword=苹果最贵手机还没开售就翻车了吗)
1. [俄罗斯为何要给输华天然气管道改名](https://so.toutiao.com/search?keyword=俄罗斯为何要给输华天然气管道改名)
1. [人民日报：病根不除日本没有未来](https://so.toutiao.com/search?keyword=人民日报：病根不除日本没有未来)
1. [中国运动员在日本机场干等6小时](https://so.toutiao.com/search?keyword=中国运动员在日本机场干等6小时)
1. [特朗普为何硬刚AI三巨头](https://so.toutiao.com/search?keyword=特朗普为何硬刚AI三巨头)
1. [外卖员向餐食吐口水摆拍案细节披露](https://so.toutiao.com/search?keyword=外卖员向餐食吐口水摆拍案细节披露)
1. [机顶盒将成为历史](https://so.toutiao.com/search?keyword=机顶盒将成为历史)
1. [猪景房8888元一晚还送一头猪](https://so.toutiao.com/search?keyword=猪景房8888元一晚还送一头猪)
1. [于东来建议给家人花钱不超3成收入](https://so.toutiao.com/search?keyword=于东来建议给家人花钱不超3成收入)
1. [小孩哥手搓语文书太有才了](https://so.toutiao.com/search?keyword=小孩哥手搓语文书太有才了)
1. [最新调研：楼市看涨预期反弹至56%](https://so.toutiao.com/search?keyword=最新调研：楼市看涨预期反弹至56%)
1. [中医暂不纳入首批医保医疗服务目录](https://so.toutiao.com/search?keyword=中医暂不纳入首批医保医疗服务目录)
1. [美联储加息落地 全球紧缩交易重启](https://so.toutiao.com/search?keyword=美联储加息落地%20全球紧缩交易重启)
1. [山东菏泽首位女市长李春英辞职](https://so.toutiao.com/search?keyword=山东菏泽首位女市长李春英辞职)
1. [女子40天内两次脑梗 与烟雾病有关](https://so.toutiao.com/search?keyword=女子40天内两次脑梗%20与烟雾病有关)
1. [台民众：打起来一定输美国不可能帮忙](https://so.toutiao.com/search?keyword=台民众：打起来一定输美国不可能帮忙)
1. [赛力斯和华为在下怎样一盘棋](https://so.toutiao.com/search?keyword=赛力斯和华为在下怎样一盘棋)
1. [黄仁勋：开源模型中国贡献最大](https://so.toutiao.com/search?keyword=黄仁勋：开源模型中国贡献最大)
1. [200元以上的月饼礼盒为何卖不动了](https://so.toutiao.com/search?keyword=200元以上的月饼礼盒为何卖不动了)
1. [初代网红“晚晚”做女装月销额破千万](https://so.toutiao.com/search?keyword=初代网红“晚晚”做女装月销额破千万)
1. [国内手机“无卡时代”更进一步](https://so.toutiao.com/search?keyword=国内手机“无卡时代”更进一步)
1. [尼泊尔泥石流灾害已致1410人遇难](https://so.toutiao.com/search?keyword=尼泊尔泥石流灾害已致1410人遇难)
1. [高市内阁全体阁僚提交辞呈](https://so.toutiao.com/search?keyword=高市内阁全体阁僚提交辞呈)
1. [媒体：观众看电视的需求其实很简单](https://so.toutiao.com/search?keyword=媒体：观众看电视的需求其实很简单)
1. [iPhone Duo不支持微信双开？客服回应](https://so.toutiao.com/search?keyword=iPhone%20Duo不支持微信双开？客服回应)
1. [墨西哥城上空拍到不明飞行物](https://so.toutiao.com/search?keyword=墨西哥城上空拍到不明飞行物)
1. [黄仁勋自嘲身高：总觉得需要站椅子上](https://so.toutiao.com/search?keyword=黄仁勋自嘲身高：总觉得需要站椅子上)
1. [演员尹正力推小鹏智驾](https://so.toutiao.com/search?keyword=演员尹正力推小鹏智驾)
1. [香港官员谈深港联手打造河套](https://so.toutiao.com/search?keyword=香港官员谈深港联手打造河套)
1. [女子生育后双目失明双耳失聪](https://so.toutiao.com/search?keyword=女子生育后双目失明双耳失聪)
1. [普京：任何人都无法分裂和吓倒俄罗斯](https://so.toutiao.com/search?keyword=普京：任何人都无法分裂和吓倒俄罗斯)
1. [美联储加息普通人的钱包会有事吗](https://so.toutiao.com/search?keyword=美联储加息普通人的钱包会有事吗)
1. [考军校差7分男孩偷偷报名参军](https://so.toutiao.com/search?keyword=考军校差7分男孩偷偷报名参军)
1. [医生教你读懂高血压](https://so.toutiao.com/search?keyword=医生教你读懂高血压)
1. [HYROX失禁女选手致歉](https://so.toutiao.com/search?keyword=HYROX失禁女选手致歉)
1. [情人20万雇凶欲杀原配双双获刑](https://so.toutiao.com/search?keyword=情人20万雇凶欲杀原配双双获刑)
1. [多银行借iPhone 18加码营销](https://so.toutiao.com/search?keyword=多银行借iPhone%2018加码营销)
1. [时隔3年多美联储加息25个基点](https://so.toutiao.com/search?keyword=时隔3年多美联储加息25个基点)
1. [如何看待德美签弹药生产协议](https://so.toutiao.com/search?keyword=如何看待德美签弹药生产协议)
1. [《兰香如故》里的老南京四季滋味](https://so.toutiao.com/search?keyword=《兰香如故》里的老南京四季滋味)
1. [乌美元首近期会晤谈什么](https://so.toutiao.com/search?keyword=乌美元首近期会晤谈什么)
1. [美联储加息正揭开美债高风险盖头吗](https://so.toutiao.com/search?keyword=美联储加息正揭开美债高风险盖头吗)
1. [苹果折叠屏手机测评吵成两派](https://so.toutiao.com/search?keyword=苹果折叠屏手机测评吵成两派)
1. [邵永灵：泽连斯基又开始乱碰瓷了](https://so.toutiao.com/search?keyword=邵永灵：泽连斯基又开始乱碰瓷了)
1. [怎么看日本一“全球鹰”无人机坠毁](https://so.toutiao.com/search?keyword=怎么看日本一“全球鹰”无人机坠毁)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Sep 18 2026 00:55:39 GMT+0800 (China Standard Time) -->

1. [华为高层内部万字长文曝光](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E9%AB%98%E5%B1%82%E5%86%85%E9%83%A8%E4%B8%87%E5%AD%97%E9%95%BF%E6%96%87%E6%9B%9D%E5%85%89)
1. [美联储宣布加息25个基点](https://www.zhihu.com/search?q=%E7%BE%8E%E8%81%94%E5%82%A8%E5%AE%A3%E5%B8%83%E5%8A%A0%E6%81%AF25%E4%B8%AA%E5%9F%BA%E7%82%B9)
1. [南方医科大学通报学生坠亡](https://www.zhihu.com/search?q=%E5%8D%97%E6%96%B9%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E5%AD%A6%E7%94%9F%E5%9D%A0%E4%BA%A1)
1. [HYROX 失禁选手道歉](https://www.zhihu.com/search?q=HYROX%20%E5%A4%B1%E7%A6%81%E9%80%89%E6%89%8B%E9%81%93%E6%AD%89)
1. [知乎 CLI 创作者能力上新](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%20CLI%20%E5%88%9B%E4%BD%9C%E8%80%85%E8%83%BD%E5%8A%9B%E4%B8%8A%E6%96%B0)
1. [高市内阁全体阁僚提交辞呈](https://www.zhihu.com/search?q=%E9%AB%98%E5%B8%82%E5%86%85%E9%98%81%E5%85%A8%E4%BD%93%E9%98%81%E5%83%9A%E6%8F%90%E4%BA%A4%E8%BE%9E%E5%91%88)
1. [DeepSeek 工程师刘胜与长文](https://www.zhihu.com/search?q=DeepSeek%20%E5%B7%A5%E7%A8%8B%E5%B8%88%E5%88%98%E8%83%9C%E4%B8%8E%E9%95%BF%E6%96%87)
1. [问界将由赛力斯主导](https://www.zhihu.com/search?q=%E9%97%AE%E7%95%8C%E5%B0%86%E7%94%B1%E8%B5%9B%E5%8A%9B%E6%96%AF%E4%B8%BB%E5%AF%BC)
1. [韩国尸皮针3000元一针爆火](https://www.zhihu.com/search?q=%E9%9F%A9%E5%9B%BD%E5%B0%B8%E7%9A%AE%E9%92%883000%E5%85%83%E4%B8%80%E9%92%88%E7%88%86%E7%81%AB)
1. [野人先生首度发声](https://www.zhihu.com/search?q=%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E9%A6%96%E5%BA%A6%E5%8F%91%E5%A3%B0)
1. [问界撤出鸿蒙智行门店](https://www.zhihu.com/search?q=%E9%97%AE%E7%95%8C%E6%92%A4%E5%87%BA%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E9%97%A8%E5%BA%97)
1. [平陆运河正式通航](https://www.zhihu.com/search?q=%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B3%E6%AD%A3%E5%BC%8F%E9%80%9A%E8%88%AA)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Sep 18 2026 02:16:54 GMT+0800 (China Standard Time) -->

1. [广电总局表示，将机顶盒功能以软件形态内置于电视机，会对行业带来哪些变化？能解决看电视麻烦的问题吗？](https://www.zhihu.com/question/2083865288337011000)
1. [如何看待 HYROX 失禁选手就北京赛场事件道歉，决定追溯性退出该场比赛，并放弃此前获得的积分？](https://www.zhihu.com/question/2084022859974665700)
1. [如果存在一个100%深海覆盖的海洋星球，对人类来说会不会非常恐怖？里面会发展出什么生命吗？](https://www.zhihu.com/question/2083246063851411000)
1. [LPL 2026 赛季资格赛TES 3-1 iG，如何评价这场比赛？](https://www.zhihu.com/question/2083952279225423400)
1. [一照相馆设体重要求，仅接受 120 斤以下客户预订，因 「部分顾客常要求过度修图」，如何看待这一规定？](https://www.zhihu.com/question/2083133384671368400)
1. [张一鸣身家突破 1050 亿美元首次成亚洲首富，如何评价其商业成就？](https://www.zhihu.com/question/2083595578223637000)
1. [国乒、国羽、中国体操队被困名古屋机场，现场只提供水无食品，为什么会这样？暴露出亚运会组织方的哪些问题？](https://www.zhihu.com/question/2083719036232324000)
1. [AI已经有解决千禧年数学难题的能力，在读基础数学博士应该怎么办？](https://www.zhihu.com/question/2082915493397140000)
1. [有没有好吃的美食推荐呀？](https://www.zhihu.com/question/1897098395644036000)
1. [有哪些演员让你觉得第一眼惊为天人，后面觉得很普通，甚至怪怪的？](https://www.zhihu.com/question/1932799403552383200)
1. [如何看待前 OpenAI 研究员发布的新模型「Jev」 ？这类模型会成为 Agent 的新技术路线吗？](https://www.zhihu.com/question/2083549123160926000)
1. [苏轼在黄州如此凄惨，为何还很快乐？](https://www.zhihu.com/question/8344602403)
1. [教父的政治资源只属于教父一人，并不属于柯里昂家族，所以柯里昂家族是不是很脆弱？](https://www.zhihu.com/question/11915255459)
1. [一样的父母一样的教，大儿子考上好大学，小儿子却染了黄头发，为什么会有这么大差别？](https://www.zhihu.com/question/2078776197551481000)
1. [为什么「翻篇是人生最重要的能力之一」？面对不愿放下的过往，人们该如何自处？](https://www.zhihu.com/question/2081544594639082500)
1. [全新理想 i9 今晚发布，有哪些技术亮点？预计销量如何？](https://www.zhihu.com/question/2083527375418146800)
1. [百度搜索为什么没落了？](https://www.zhihu.com/question/2020203409219809500)
1. [亚运女子板球1/4决赛场地积水取消，中国队世界排名低于对手被判负，一场未打结束亚运征程，这规则合理吗？](https://www.zhihu.com/question/2083894090341377300)
1. [报告显示 72% 的成年人未达饮用水适宜摄入量，水没喝够会对身体产生啥影响？该怎样正确喝水？](https://www.zhihu.com/question/2083121786422387500)
1. [这次亚运会，中国男足能拿奖牌吗？](https://www.zhihu.com/question/2082012854706778400)
1. [坠亡幼童父亲举报妻子发布的视频侵犯其肖像权，他有权这么做吗？](https://www.zhihu.com/question/2083944607859959600)
1. [美联储宣布加息 25 个基点，时隔三年再度加息，对全球经济有哪些影响？全球资产价格会有怎样的连锁反应？](https://www.zhihu.com/question/2083741444628656600)
1. [为什么宝可梦没有出现类似其他回合制游戏那样的“小作文”式技能描述？](https://www.zhihu.com/question/2082918898869985300)
1. [你最喜欢的一种红薯吃法是怎么做的？](https://www.zhihu.com/question/10896580492)
1. [如何评价《三角洲行动》S11 赛季的钓鱼玩法？](https://www.zhihu.com/question/2080670964275044600)
1. [怎样才能不懦弱，不被别人欺负？](https://www.zhihu.com/question/659541156)
1. [你最想体验文学史上哪个作家的人生？](https://www.zhihu.com/question/2074566645792744700)
1. [我有学历，有经验，但是迟迟得不到晋升，该怎么办呢？](https://www.zhihu.com/question/2044385183705588500)
1. [伊朗单日击落 3 架美军 MQ-1 无人机，美军密集出动同一侦察机，想获取什么情报？还是试探伊朗防空？](https://www.zhihu.com/question/2083344144982980600)
1. [钟薛高宣布重启，推出三种口味，零售价最低跌到 6.9 元一支，你看好钟薛高这次「复活」吗？](https://www.zhihu.com/question/2083299849705715000)

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
<!-- 最后更新时间 Fri Sep 18 2026 02:21:24 GMT+0800 (China Standard Time) -->

1. [总书记引领科技强国路](https://s.weibo.com//weibo?q=%23%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%BC%95%E9%A2%86%E7%A7%91%E6%8A%80%E5%BC%BA%E5%9B%BD%E8%B7%AF%23&Refer=new_time)
1. [粉笔 谁是公考培训界的良心](https://s.weibo.com//weibo?q=%E7%B2%89%E7%AC%94%20%E8%B0%81%E6%98%AF%E5%85%AC%E8%80%83%E5%9F%B9%E8%AE%AD%E7%95%8C%E7%9A%84%E8%89%AF%E5%BF%83&t=31&band_rank=1&Refer=top)
1. [医生回应举手式睡姿是身体在求救](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E4%B8%BE%E6%89%8B%E5%BC%8F%E7%9D%A1%E5%A7%BF%E6%98%AF%E8%BA%AB%E4%BD%93%E5%9C%A8%E6%B1%82%E6%95%91%23&t=31&band_rank=2&Refer=top)
1. [第23届东博会峰会](https://s.weibo.com//weibo?q=%23%E7%AC%AC23%E5%B1%8A%E4%B8%9C%E5%8D%9A%E4%BC%9A%E5%B3%B0%E4%BC%9A%23&t=31&band_rank=3&Refer=top)
1. [粉笔 超格](https://s.weibo.com//weibo?q=%E7%B2%89%E7%AC%94%20%E8%B6%85%E6%A0%BC&t=31&band_rank=4&Refer=top)
1. [日本玉米便当](https://s.weibo.com//weibo?q=%E6%97%A5%E6%9C%AC%E7%8E%89%E7%B1%B3%E4%BE%BF%E5%BD%93&t=31&band_rank=5&Refer=top)
1. [偶像来了 国际大花](https://s.weibo.com//weibo?q=%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%20%E5%9B%BD%E9%99%85%E5%A4%A7%E8%8A%B1&t=31&band_rank=6&Refer=top)
1. [公考大战](https://s.weibo.com//weibo?q=%E5%85%AC%E8%80%83%E5%A4%A7%E6%88%98&t=31&band_rank=7&Refer=top)
1. [袁东直播间乱成一锅粥了](https://s.weibo.com//weibo?q=%23%E8%A2%81%E4%B8%9C%E7%9B%B4%E6%92%AD%E9%97%B4%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%23&t=31&band_rank=8&Refer=top)
1. [影视飓风评测 看完不想买了](https://s.weibo.com//weibo?q=%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E8%AF%84%E6%B5%8B%20%E7%9C%8B%E5%AE%8C%E4%B8%8D%E6%83%B3%E4%B9%B0%E4%BA%86&t=31&band_rank=9&Refer=top)
1. [如果你出生于1992年至2003年之间](https://s.weibo.com//weibo?q=%23%E5%A6%82%E6%9E%9C%E4%BD%A0%E5%87%BA%E7%94%9F%E4%BA%8E1992%E5%B9%B4%E8%87%B32003%E5%B9%B4%E4%B9%8B%E9%97%B4%23&t=31&band_rank=10&Refer=top)
1. [粉笔疯了](https://s.weibo.com//weibo?q=%E7%B2%89%E7%AC%94%E7%96%AF%E4%BA%86&t=31&band_rank=11&Refer=top)
1. [杨某媛疑似在西班牙读博](https://s.weibo.com//weibo?q=%E6%9D%A8%E6%9F%90%E5%AA%9B%E7%96%91%E4%BC%BC%E5%9C%A8%E8%A5%BF%E7%8F%AD%E7%89%99%E8%AF%BB%E5%8D%9A&t=31&band_rank=12&Refer=top)
1. [2岁幼童18楼坠亡邻居发声](https://s.weibo.com//weibo?q=%232%E5%B2%81%E5%B9%BC%E7%AB%A518%E6%A5%BC%E5%9D%A0%E4%BA%A1%E9%82%BB%E5%B1%85%E5%8F%91%E5%A3%B0%23&t=31&band_rank=13&Refer=top)
1. [原来杜翠雀第一个想给李兰香下毒](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%9D%9C%E7%BF%A0%E9%9B%80%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%83%B3%E7%BB%99%E6%9D%8E%E5%85%B0%E9%A6%99%E4%B8%8B%E6%AF%92%23&t=31&band_rank=14&Refer=top)
1. [18万爱马仕退款14万等2年包还没退](https://s.weibo.com//weibo?q=%2318%E4%B8%87%E7%88%B1%E9%A9%AC%E4%BB%95%E9%80%80%E6%AC%BE14%E4%B8%87%E7%AD%892%E5%B9%B4%E5%8C%85%E8%BF%98%E6%B2%A1%E9%80%80%23&t=31&band_rank=15&Refer=top)
1. [我恨我没有钱但特别识货](https://s.weibo.com//weibo?q=%23%E6%88%91%E6%81%A8%E6%88%91%E6%B2%A1%E6%9C%89%E9%92%B1%E4%BD%86%E7%89%B9%E5%88%AB%E8%AF%86%E8%B4%A7%23&t=31&band_rank=16&Refer=top)
1. [30岁后找对象比赚钱还难](https://s.weibo.com//weibo?q=30%E5%B2%81%E5%90%8E%E6%89%BE%E5%AF%B9%E8%B1%A1%E6%AF%94%E8%B5%9A%E9%92%B1%E8%BF%98%E9%9A%BE&t=31&band_rank=17&Refer=top)
1. [小鹏G9L价格炸裂](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E9%B9%8FG9L%E4%BB%B7%E6%A0%BC%E7%82%B8%E8%A3%82%23&t=31&band_rank=18&Refer=top)
1. [女子直播遭400多斤发情公鹿偷袭](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9B%B4%E6%92%AD%E9%81%AD400%E5%A4%9A%E6%96%A4%E5%8F%91%E6%83%85%E5%85%AC%E9%B9%BF%E5%81%B7%E8%A2%AD%23&t=31&band_rank=19&Refer=top)
1. [JackeyLove眼含热泪](https://s.weibo.com//weibo?q=%23JackeyLove%E7%9C%BC%E5%90%AB%E7%83%AD%E6%B3%AA%23&t=31&band_rank=20&Refer=top)
1. [iOS27电池图标 丑](https://s.weibo.com//weibo?q=iOS27%E7%94%B5%E6%B1%A0%E5%9B%BE%E6%A0%87%20%E4%B8%91&t=31&band_rank=21&Refer=top)
1. [HYROX失禁女选手致歉](https://s.weibo.com//weibo?q=%23HYROX%E5%A4%B1%E7%A6%81%E5%A5%B3%E9%80%89%E6%89%8B%E8%87%B4%E6%AD%89%23&t=31&band_rank=22&Refer=top)
1. [918](https://s.weibo.com//weibo?q=918&t=31&band_rank=23&Refer=top)
1. [女子生孩子后双目失明双耳失聪](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E5%AD%A9%E5%AD%90%E5%90%8E%E5%8F%8C%E7%9B%AE%E5%A4%B1%E6%98%8E%E5%8F%8C%E8%80%B3%E5%A4%B1%E8%81%AA%23&t=31&band_rank=24&Refer=top)
1. [何炅官宣我们来了重启](https://s.weibo.com//weibo?q=%23%E4%BD%95%E7%82%85%E5%AE%98%E5%AE%A3%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%E9%87%8D%E5%90%AF%23&t=31&band_rank=25&Refer=top)
1. [丞磊徐若晗新剧尺度](https://s.weibo.com//weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%BE%90%E8%8B%A5%E6%99%97%E6%96%B0%E5%89%A7%E5%B0%BA%E5%BA%A6%23&t=31&band_rank=26&Refer=top)
1. [武大口腔手术纠纷](https://s.weibo.com//weibo?q=%E6%AD%A6%E5%A4%A7%E5%8F%A3%E8%85%94%E6%89%8B%E6%9C%AF%E7%BA%A0%E7%BA%B7&t=31&band_rank=27&Refer=top)
1. [香港历史上首个五年规划](https://s.weibo.com//weibo?q=%E9%A6%99%E6%B8%AF%E5%8E%86%E5%8F%B2%E4%B8%8A%E9%A6%96%E4%B8%AA%E4%BA%94%E5%B9%B4%E8%A7%84%E5%88%92&t=31&band_rank=28&Refer=top)
1. [2026湾区升明月你最期待谁](https://s.weibo.com//weibo?q=%232026%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E4%BD%A0%E6%9C%80%E6%9C%9F%E5%BE%85%E8%B0%81%23&t=31&band_rank=29&Refer=top)
1. [王楚钦练到力竭](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%BB%83%E5%88%B0%E5%8A%9B%E7%AB%AD%23&t=31&band_rank=30&Refer=top)
1. [健身房老板的天都塌了](https://s.weibo.com//weibo?q=%23%E5%81%A5%E8%BA%AB%E6%88%BF%E8%80%81%E6%9D%BF%E7%9A%84%E5%A4%A9%E9%83%BD%E5%A1%8C%E4%BA%86%23&t=31&band_rank=31&Refer=top)
1. [亚运会](https://s.weibo.com//weibo?q=%E4%BA%9A%E8%BF%90%E4%BC%9A&t=31&band_rank=32&Refer=top)
1. [粉笔说做生意却哄着小孩喊恩师](https://s.weibo.com//weibo?q=%23%E7%B2%89%E7%AC%94%E8%AF%B4%E5%81%9A%E7%94%9F%E6%84%8F%E5%8D%B4%E5%93%84%E7%9D%80%E5%B0%8F%E5%AD%A9%E5%96%8A%E6%81%A9%E5%B8%88%23&t=31&band_rank=33&Refer=top)
1. [粉笔承认模仿超格](https://s.weibo.com//weibo?q=%E7%B2%89%E7%AC%94%E6%89%BF%E8%AE%A4%E6%A8%A1%E4%BB%BF%E8%B6%85%E6%A0%BC&t=31&band_rank=34&Refer=top)
1. [兰香如故预告](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%A2%84%E5%91%8A&t=31&band_rank=35&Refer=top)
1. [iOS27电池图标 年年吐槽年年买](https://s.weibo.com//weibo?q=iOS27%E7%94%B5%E6%B1%A0%E5%9B%BE%E6%A0%87%20%E5%B9%B4%E5%B9%B4%E5%90%90%E6%A7%BD%E5%B9%B4%E5%B9%B4%E4%B9%B0&t=31&band_rank=36&Refer=top)
1. [西雅图吸毒者末世景象](https://s.weibo.com//weibo?q=%E8%A5%BF%E9%9B%85%E5%9B%BE%E5%90%B8%E6%AF%92%E8%80%85%E6%9C%AB%E4%B8%96%E6%99%AF%E8%B1%A1&t=31&band_rank=37&Refer=top)
1. [周也这样宣传真的可以吗](https://s.weibo.com//weibo?q=%E5%91%A8%E4%B9%9F%E8%BF%99%E6%A0%B7%E5%AE%A3%E4%BC%A0%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E5%90%97&t=31&band_rank=38&Refer=top)
1. [关晓彤林一新剧13秒亲了4次](https://s.weibo.com//weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%9E%97%E4%B8%80%E6%96%B0%E5%89%A713%E7%A7%92%E4%BA%B2%E4%BA%864%E6%AC%A1%23&t=31&band_rank=39&Refer=top)
1. [九毛九股价跌至九毛九](https://s.weibo.com//weibo?q=%23%E4%B9%9D%E6%AF%9B%E4%B9%9D%E8%82%A1%E4%BB%B7%E8%B7%8C%E8%87%B3%E4%B9%9D%E6%AF%9B%E4%B9%9D%23&t=31&band_rank=40&Refer=top)
1. [iG争LPL四号种子](https://s.weibo.com//weibo?q=%23iG%E4%BA%89LPL%E5%9B%9B%E5%8F%B7%E7%A7%8D%E5%AD%90%23&t=31&band_rank=41&Refer=top)
1. [殷桃回应嫌弃邓为](https://s.weibo.com//weibo?q=%23%E6%AE%B7%E6%A1%83%E5%9B%9E%E5%BA%94%E5%AB%8C%E5%BC%83%E9%82%93%E4%B8%BA%23&t=31&band_rank=42&Refer=top)
1. [小猫突然把小狗的头扶正了](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%AA%81%E7%84%B6%E6%8A%8A%E5%B0%8F%E7%8B%97%E7%9A%84%E5%A4%B4%E6%89%B6%E6%AD%A3%E4%BA%86%23&t=31&band_rank=43&Refer=top)
1. [KPL十周年影像](https://s.weibo.com//weibo?q=%23KPL%E5%8D%81%E5%91%A8%E5%B9%B4%E5%BD%B1%E5%83%8F%23&t=31&band_rank=44&Refer=top)
1. [TES全员回应晋级世界赛](https://s.weibo.com//weibo?q=%23TES%E5%85%A8%E5%91%98%E5%9B%9E%E5%BA%94%E6%99%8B%E7%BA%A7%E4%B8%96%E7%95%8C%E8%B5%9B%23&t=31&band_rank=45&Refer=top)
1. [其实附近小区只有我在吃那款饼干](https://s.weibo.com//weibo?q=%23%E5%85%B6%E5%AE%9E%E9%99%84%E8%BF%91%E5%B0%8F%E5%8C%BA%E5%8F%AA%E6%9C%89%E6%88%91%E5%9C%A8%E5%90%83%E9%82%A3%E6%AC%BE%E9%A5%BC%E5%B9%B2%23&t=31&band_rank=46&Refer=top)
1. [Wayward回应TES战胜iG](https://s.weibo.com//weibo?q=%23Wayward%E5%9B%9E%E5%BA%94TES%E6%88%98%E8%83%9CiG%23&t=31&band_rank=47&Refer=top)
1. [苹果新机冰火两重天](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E6%9C%BA%E5%86%B0%E7%81%AB%E4%B8%A4%E9%87%8D%E5%A4%A9%23&t=31&band_rank=48&Refer=top)
1. [AG菲菲和长生连线](https://s.weibo.com//weibo?q=AG%E8%8F%B2%E8%8F%B2%E5%92%8C%E9%95%BF%E7%94%9F%E8%BF%9E%E7%BA%BF&t=31&band_rank=49&Refer=top)
1. [粉笔小作文](https://s.weibo.com//weibo?q=%E7%B2%89%E7%AC%94%E5%B0%8F%E4%BD%9C%E6%96%87&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
