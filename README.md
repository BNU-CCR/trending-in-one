# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-09 00:30:46

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
<!-- 最后更新时间 Thu Oct 08 2026 17:26:10 GMT+0800 (China Standard Time) -->

1. [A股节后第一天部分银行股为何创新高](https://so.toutiao.com/search?keyword=A股节后第一天部分银行股为何创新高)
1. [周启豪3-0战胜张本智和](https://so.toutiao.com/search?keyword=周启豪3-0战胜张本智和)
1. [中国长假吸引外国人入境过中国节](https://so.toutiao.com/search?keyword=中国长假吸引外国人入境过中国节)
1. [外交部回应直呼高市早苗名字](https://so.toutiao.com/search?keyword=外交部回应直呼高市早苗名字)
1. [松岛辉空晋级中国大满贯男单八强](https://so.toutiao.com/search?keyword=松岛辉空晋级中国大满贯男单八强)
1. [江淮汽车回应尊界V800刹车踏板断裂](https://so.toutiao.com/search?keyword=江淮汽车回应尊界V800刹车踏板断裂)
1. [上3休1再上5休2](https://so.toutiao.com/search?keyword=上3休1再上5休2)
1. [创业板为何大跌](https://so.toutiao.com/search?keyword=创业板为何大跌)
1. [广州市委原书记张硕辅被查](https://so.toutiao.com/search?keyword=广州市委原书记张硕辅被查)
1. [寒露养生记住三要点](https://so.toutiao.com/search?keyword=寒露养生记住三要点)
1. [头孢停药3天能喝酒？谣言](https://so.toutiao.com/search?keyword=头孢停药3天能喝酒？谣言)
1. [A股收盘：创业板指跌3.15%](https://so.toutiao.com/search?keyword=A股收盘：创业板指跌3.15%)
1. [胡塞导弹打到利雅得机场意味着什么](https://so.toutiao.com/search?keyword=胡塞导弹打到利雅得机场意味着什么)
1. [医生：40岁后一定要防猝死](https://so.toutiao.com/search?keyword=医生：40岁后一定要防猝死)
1. [业内：节后A股仍有波段修复机会](https://so.toutiao.com/search?keyword=业内：节后A股仍有波段修复机会)
1. [乌军推进20公里 俄军出了什么问题](https://so.toutiao.com/search?keyword=乌军推进20公里%20俄军出了什么问题)
1. [高速免费最后60秒工作人员比司机还急](https://so.toutiao.com/search?keyword=高速免费最后60秒工作人员比司机还急)
1. [朱思冰回应战胜蒯曼晋级八强](https://so.toutiao.com/search?keyword=朱思冰回应战胜蒯曼晋级八强)
1. [A股能否迎来年内最后一波行情](https://so.toutiao.com/search?keyword=A股能否迎来年内最后一波行情)
1. [余承东向霍震寰交付尊界V800](https://so.toutiao.com/search?keyword=余承东向霍震寰交付尊界V800)
1. [尊界V800测试中刹车踏板支架断裂](https://so.toutiao.com/search?keyword=尊界V800测试中刹车踏板支架断裂)
1. [东北一家人牛大妈扮演者彭玉去世](https://so.toutiao.com/search?keyword=东北一家人牛大妈扮演者彭玉去世)
1. [司机驱车3小时一招上下高速只花12元](https://so.toutiao.com/search?keyword=司机驱车3小时一招上下高速只花12元)
1. [C罗公开发声致歉](https://so.toutiao.com/search?keyword=C罗公开发声致歉)
1. [王曼昱险胜石洵瑶晋级八强](https://so.toutiao.com/search?keyword=王曼昱险胜石洵瑶晋级八强)
1. [央视披露一次紧急营救北斗卫星](https://so.toutiao.com/search?keyword=央视披露一次紧急营救北斗卫星)
1. [车主花350元将车拖20多米到加油站](https://so.toutiao.com/search?keyword=车主花350元将车拖20多米到加油站)
1. [学生作业到底该谁打印](https://so.toutiao.com/search?keyword=学生作业到底该谁打印)
1. [李胜峰：世界已改变 台湾要回家了](https://so.toutiao.com/search?keyword=李胜峰：世界已改变%20台湾要回家了)
1. [中国空间站将迎来首批外籍航天员](https://so.toutiao.com/search?keyword=中国空间站将迎来首批外籍航天员)
1. [缅北电诈逃脱者说当地全员赏金猎人](https://so.toutiao.com/search?keyword=缅北电诈逃脱者说当地全员赏金猎人)
1. [第七届全国养老金发展论坛观察](https://so.toutiao.com/search?keyword=第七届全国养老金发展论坛观察)
1. [俄鼠疫研究人员死亡 有哪些未知信息](https://so.toutiao.com/search?keyword=俄鼠疫研究人员死亡%20有哪些未知信息)
1. [全年最绚烂秋色压轴出场](https://so.toutiao.com/search?keyword=全年最绚烂秋色压轴出场)
1. [胡塞武装袭击沙特机场有何影响](https://so.toutiao.com/search?keyword=胡塞武装袭击沙特机场有何影响)
1. [马克龙：要令人敬畏须拥有强大实力](https://so.toutiao.com/search?keyword=马克龙：要令人敬畏须拥有强大实力)
1. [华为最新5A设备名单出炉](https://so.toutiao.com/search?keyword=华为最新5A设备名单出炉)
1. [驾驶员高速上见警察停车问路被劝离](https://so.toutiao.com/search?keyword=驾驶员高速上见警察停车问路被劝离)
1. [全国哪里“菊”势正好](https://so.toutiao.com/search?keyword=全国哪里“菊”势正好)
1. [张家齐母女和解了吗](https://so.toutiao.com/search?keyword=张家齐母女和解了吗)
1. [朝媒警告美国：台湾问题纯属中国内政](https://so.toutiao.com/search?keyword=朝媒警告美国：台湾问题纯属中国内政)
1. [寒露时节饮食攻略](https://so.toutiao.com/search?keyword=寒露时节饮食攻略)
1. [收评：创业板指冲高回落跌超3%](https://so.toutiao.com/search?keyword=收评：创业板指冲高回落跌超3%)
1. [分析师：黄金可能还差最后一跌](https://so.toutiao.com/search?keyword=分析师：黄金可能还差最后一跌)
1. [2027年度居民医保陆续开缴](https://so.toutiao.com/search?keyword=2027年度居民医保陆续开缴)
1. [电动车为何成了国家“储能宝库”](https://so.toutiao.com/search?keyword=电动车为何成了国家“储能宝库”)
1. [刘建宏谈中网场地空位多](https://so.toutiao.com/search?keyword=刘建宏谈中网场地空位多)
1. [特朗普回应或遭弹劾](https://so.toutiao.com/search?keyword=特朗普回应或遭弹劾)
1. [华为能靠品牌对抗涨价潮吗](https://so.toutiao.com/search?keyword=华为能靠品牌对抗涨价潮吗)
1. [从华为高通专利交易看科技格局转向](https://so.toutiao.com/search?keyword=从华为高通专利交易看科技格局转向)
1. [俄罗斯发动大规模打击](https://so.toutiao.com/search?keyword=俄罗斯发动大规模打击)
1. [点赞！大国工程重器进度条刷新](https://so.toutiao.com/search?keyword=点赞！大国工程重器进度条刷新)
1. [俄鼠疫研究机构员工确诊不明原因肺炎](https://so.toutiao.com/search?keyword=俄鼠疫研究机构员工确诊不明原因肺炎)
1. [演员王星4天被卖3次](https://so.toutiao.com/search?keyword=演员王星4天被卖3次)
1. [怎么看粤J2888T车主被全网关注](https://so.toutiao.com/search?keyword=怎么看粤J2888T车主被全网关注)
1. [寒露时节养生注意这5点](https://so.toutiao.com/search?keyword=寒露时节养生注意这5点)
1. [如何看待俄实验室病毒外泄致死事件](https://so.toutiao.com/search?keyword=如何看待俄实验室病毒外泄致死事件)
1. [泽连斯基：俄弹道导弹仍是乌最大挑战](https://so.toutiao.com/search?keyword=泽连斯基：俄弹道导弹仍是乌最大挑战)
1. [寒露有哪些习俗](https://so.toutiao.com/search?keyword=寒露有哪些习俗)
1. [警方辟谣四川五通桥一处楼房垮掉](https://so.toutiao.com/search?keyword=警方辟谣四川五通桥一处楼房垮掉)
1. [女子买房多年得知客厅上方有座坟](https://so.toutiao.com/search?keyword=女子买房多年得知客厅上方有座坟)
1. [郑钦文明日迎战斯维托丽娜](https://so.toutiao.com/search?keyword=郑钦文明日迎战斯维托丽娜)
1. [胡塞武装：对沙特实施三轮打击](https://so.toutiao.com/search?keyword=胡塞武装：对沙特实施三轮打击)
1. [中国警方：缅北电诈死灰复燃也不怕](https://so.toutiao.com/search?keyword=中国警方：缅北电诈死灰复燃也不怕)
1. [俄密集轰炸乌克兰导弹工厂有何影响](https://so.toutiao.com/search?keyword=俄密集轰炸乌克兰导弹工厂有何影响)
1. [76年前的今天中国人民志愿军组成](https://so.toutiao.com/search?keyword=76年前的今天中国人民志愿军组成)
1. [缅北电诈窝点距我口岸仅200米](https://so.toutiao.com/search?keyword=缅北电诈窝点距我口岸仅200米)
1. [男子照顾发烧的娃后遭遇“鬼压床”](https://so.toutiao.com/search?keyword=男子照顾发烧的娃后遭遇“鬼压床”)
1. [菲副总统莎拉否认收受巨额现金](https://so.toutiao.com/search?keyword=菲副总统莎拉否认收受巨额现金)
1. [佘智江落网时嚣张妄言人脉能摆平](https://so.toutiao.com/search?keyword=佘智江落网时嚣张妄言人脉能摆平)
1. [重庆李子坝地下33米藏着一亿现钞](https://so.toutiao.com/search?keyword=重庆李子坝地下33米藏着一亿现钞)
1. [寒露时节注意心脑血管和呼吸道防护](https://so.toutiao.com/search?keyword=寒露时节注意心脑血管和呼吸道防护)
1. [文旅局长铺床后续：县政府写信感谢学生](https://so.toutiao.com/search?keyword=文旅局长铺床后续：县政府写信感谢学生)
1. [前CIA官员电信诈骗美政府近2亿美元](https://so.toutiao.com/search?keyword=前CIA官员电信诈骗美政府近2亿美元)
1. [吴奇隆 不赚钱也是这个立场](https://so.toutiao.com/search?keyword=吴奇隆%20不赚钱也是这个立场)
1. [新娘九个舅舅染不同颜色头发送嫁](https://so.toutiao.com/search?keyword=新娘九个舅舅染不同颜色头发送嫁)
1. [正确散步好处超多](https://so.toutiao.com/search?keyword=正确散步好处超多)
1. [当年沙特联军为何没能灭掉胡塞武装](https://so.toutiao.com/search?keyword=当年沙特联军为何没能灭掉胡塞武装)
1. [国庆假期新能源汽车充电有何趋势](https://so.toutiao.com/search?keyword=国庆假期新能源汽车充电有何趋势)
1. [寒露：丹枫叠彩 秋光如饴](https://so.toutiao.com/search?keyword=寒露：丹枫叠彩%20秋光如饴)
1. [乌空袭俄炼油厂有何目的](https://so.toutiao.com/search?keyword=乌空袭俄炼油厂有何目的)
1. [国庆热门景点为何集中在小城市](https://so.toutiao.com/search?keyword=国庆热门景点为何集中在小城市)
1. [高芙：这段时间身心消耗大](https://so.toutiao.com/search?keyword=高芙：这段时间身心消耗大)
1. [为什么药物要分“左右”](https://so.toutiao.com/search?keyword=为什么药物要分“左右”)
1. [国庆高速免费最后1分钟车主极限卡点](https://so.toutiao.com/search?keyword=国庆高速免费最后1分钟车主极限卡点)
1. [诺奖得主哈尔岑82岁仍在写论文](https://so.toutiao.com/search?keyword=诺奖得主哈尔岑82岁仍在写论文)
1. [王星失联前向女友求救发猫喂了没](https://so.toutiao.com/search?keyword=王星失联前向女友求救发猫喂了没)
1. [日本前外相：中日关系恶化责任在日本](https://so.toutiao.com/search?keyword=日本前外相：中日关系恶化责任在日本)
1. [斯维托丽娜晋级女单八强将战郑钦文](https://so.toutiao.com/search?keyword=斯维托丽娜晋级女单八强将战郑钦文)
1. [为什么学校不统一打印作业](https://so.toutiao.com/search?keyword=为什么学校不统一打印作业)
1. [实探河南高速充电点：开封即到即充](https://so.toutiao.com/search?keyword=实探河南高速充电点：开封即到即充)
1. [菲方为何专挑中国节日期间在南海出手](https://so.toutiao.com/search?keyword=菲方为何专挑中国节日期间在南海出手)
1. [央视点名过度依赖辅助驾驶现象](https://so.toutiao.com/search?keyword=央视点名过度依赖辅助驾驶现象)
1. [秋冬时节谨防血压波动](https://so.toutiao.com/search?keyword=秋冬时节谨防血压波动)
1. [俄回应法国试射洲际导弹](https://so.toutiao.com/search?keyword=俄回应法国试射洲际导弹)
1. [对话平陆运河背后的硬核总工](https://so.toutiao.com/search?keyword=对话平陆运河背后的硬核总工)
1. [《什么意思夫妇》广州路演](https://so.toutiao.com/search?keyword=《什么意思夫妇》广州路演)
1. [孙颖莎爆冷止步32强](https://so.toutiao.com/search?keyword=孙颖莎爆冷止步32强)
1. [郑钦文闯入中网女单八强](https://so.toutiao.com/search?keyword=郑钦文闯入中网女单八强)
1. [年轻人为何觉得景区越来越没意思了](https://so.toutiao.com/search?keyword=年轻人为何觉得景区越来越没意思了)
1. [缅北电诈主犯反问民警杀人要什么感受](https://so.toutiao.com/search?keyword=缅北电诈主犯反问民警杀人要什么感受)
1. [对手赢孙颖莎后开心到不知怎么形容](https://so.toutiao.com/search?keyword=对手赢孙颖莎后开心到不知怎么形容)
1. [李玉刚宣布《万疆》永久免费授权](https://so.toutiao.com/search?keyword=李玉刚宣布《万疆》永久免费授权)
1. [土耳其和巴基斯坦向沙特派兵意味什么](https://so.toutiao.com/search?keyword=土耳其和巴基斯坦向沙特派兵意味什么)
1. [余承东：华为今后不得不涨价](https://so.toutiao.com/search?keyword=余承东：华为今后不得不涨价)
1. [李在明：必须让“亲日富三代”消失](https://so.toutiao.com/search?keyword=李在明：必须让“亲日富三代”消失)
1. [孙颖莎比赛前一晚一直在发烧](https://so.toutiao.com/search?keyword=孙颖莎比赛前一晚一直在发烧)
1. [演员王星发文感恩祖国](https://so.toutiao.com/search?keyword=演员王星发文感恩祖国)
1. [印度调查亚运会“惨败”事件](https://so.toutiao.com/search?keyword=印度调查亚运会“惨败”事件)
1. [新一轮油价调整时间定了](https://so.toutiao.com/search?keyword=新一轮油价调整时间定了)
1. [C罗强势声明会产生什么效应](https://so.toutiao.com/search?keyword=C罗强势声明会产生什么效应)
1. [粤J2888T车主到郑州了](https://so.toutiao.com/search?keyword=粤J2888T车主到郑州了)
1. [化学诺奖成果能避免反应停悲剧吗](https://so.toutiao.com/search?keyword=化学诺奖成果能避免反应停悲剧吗)
1. [日媒发问中国游客去哪了](https://so.toutiao.com/search?keyword=日媒发问中国游客去哪了)
1. [金价回调引燃国庆购金热潮](https://so.toutiao.com/search?keyword=金价回调引燃国庆购金热潮)
1. [学者：美大兵在日犯命案暴露驻军死结](https://so.toutiao.com/search?keyword=学者：美大兵在日犯命案暴露驻军死结)
1. [诺贝尔化学奖研究改变现代制药工业](https://so.toutiao.com/search?keyword=诺贝尔化学奖研究改变现代制药工业)
1. [博主：基辅被推向最凶险临界点](https://so.toutiao.com/search?keyword=博主：基辅被推向最凶险临界点)
1. [超慢跑让你轻松“暴击”内脏脂肪](https://so.toutiao.com/search?keyword=超慢跑让你轻松“暴击”内脏脂肪)
1. [缅北白家涉诈超290亿](https://so.toutiao.com/search?keyword=缅北白家涉诈超290亿)
1. [老人给4个女儿签了遗嘱儿子不知情](https://so.toutiao.com/search?keyword=老人给4个女儿签了遗嘱儿子不知情)
1. [在泰失联的上海音乐教师已回国](https://so.toutiao.com/search?keyword=在泰失联的上海音乐教师已回国)
1. [男子高速上开智驾后睡着被处罚](https://so.toutiao.com/search?keyword=男子高速上开智驾后睡着被处罚)
1. [下个假期就是2027年了](https://so.toutiao.com/search?keyword=下个假期就是2027年了)
1. [王曼昱蒯曼晋级中国大满贯女双八强](https://so.toutiao.com/search?keyword=王曼昱蒯曼晋级中国大满贯女双八强)
1. [华为：昇腾中国市场份额已超英伟达](https://so.toutiao.com/search?keyword=华为：昇腾中国市场份额已超英伟达)
1. [黄金价格等待趋势信号](https://so.toutiao.com/search?keyword=黄金价格等待趋势信号)
1. [唐湘龙：盼此生见证国家统一](https://so.toutiao.com/search?keyword=唐湘龙：盼此生见证国家统一)
1. [郑丽文呼吁国民党停止内耗内斗](https://so.toutiao.com/search?keyword=郑丽文呼吁国民党停止内耗内斗)
1. [《兰香如故》女配叙事还差了哪一步](https://so.toutiao.com/search?keyword=《兰香如故》女配叙事还差了哪一步)
1. [魏东旭：日本暴露针对台海用兵野心](https://so.toutiao.com/search?keyword=魏东旭：日本暴露针对台海用兵野心)
1. [驻日美军恶行不断 日为何仍维护同盟](https://so.toutiao.com/search?keyword=驻日美军恶行不断%20日为何仍维护同盟)
1. [生命分子的镜像谜题有了答案](https://so.toutiao.com/search?keyword=生命分子的镜像谜题有了答案)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Oct 08 2026 18:28:15 GMT+0800 (China Standard Time) -->

1. [尊界v800刹车踏板支架断裂](https://www.zhihu.com/search?q=%E5%B0%8A%E7%95%8Cv800%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82)
1. [张家齐妈妈看见张家齐就哭](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E7%9C%8B%E8%A7%81%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%B0%B1%E5%93%AD)
1. [OpenAI宣布解决准黎曼猜想](https://www.zhihu.com/search?q=OpenAI%E5%AE%A3%E5%B8%83%E8%A7%A3%E5%86%B3%E5%87%86%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [孙颖莎止步中国大满贯32强](https://www.zhihu.com/search?q=%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AD%A2%E6%AD%A5%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF32%E5%BC%BA)
1. [白俄女模特被骗至缅甸遭杀害](https://www.zhihu.com/search?q=%E7%99%BD%E4%BF%84%E5%A5%B3%E6%A8%A1%E7%89%B9%E8%A2%AB%E9%AA%97%E8%87%B3%E7%BC%85%E7%94%B8%E9%81%AD%E6%9D%80%E5%AE%B3)
1. [网传俄实验室发生鼠疫泄漏](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E4%BF%84%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E7%94%9F%E9%BC%A0%E7%96%AB%E6%B3%84%E6%BC%8F)
1. [江淮汽车被砸跌停](https://www.zhihu.com/search?q=%E6%B1%9F%E6%B7%AE%E6%B1%BD%E8%BD%A6%E8%A2%AB%E7%A0%B8%E8%B7%8C%E5%81%9C)
1. [江苏太仓通报网传代孕情况](https://www.zhihu.com/search?q=%E6%B1%9F%E8%8B%8F%E5%A4%AA%E4%BB%93%E9%80%9A%E6%8A%A5%E7%BD%91%E4%BC%A0%E4%BB%A3%E5%AD%95%E6%83%85%E5%86%B5)
1. [普宁考生称因HIV被拒教师入职](https://www.zhihu.com/search?q=%E6%99%AE%E5%AE%81%E8%80%83%E7%94%9F%E7%A7%B0%E5%9B%A0HIV%E8%A2%AB%E6%8B%92%E6%95%99%E5%B8%88%E5%85%A5%E8%81%8C)
1. [缅北电诈犯随机杀陌生人祭天](https://www.zhihu.com/search?q=%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E7%8A%AF%E9%9A%8F%E6%9C%BA%E6%9D%80%E9%99%8C%E7%94%9F%E4%BA%BA%E7%A5%AD%E5%A4%A9)
1. [俄罗斯不明病因肺炎事件四种说法](https://www.zhihu.com/search?q=%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%8D%E6%98%8E%E7%97%85%E5%9B%A0%E8%82%BA%E7%82%8E%E4%BA%8B%E4%BB%B6%E5%9B%9B%E7%A7%8D%E8%AF%B4%E6%B3%95)
1. [2026年诺贝尔化学奖](https://www.zhihu.com/search?q=2026%E5%B9%B4%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%8C%96%E5%AD%A6%E5%A5%96)
1. [国乒首次无缘中国大满贯混双领奖台](https://www.zhihu.com/search?q=%E5%9B%BD%E4%B9%92%E9%A6%96%E6%AC%A1%E6%97%A0%E7%BC%98%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E6%B7%B7%E5%8F%8C%E9%A2%86%E5%A5%96%E5%8F%B0)
1. [尊界V800刹车踏板支架断裂](https://www.zhihu.com/search?q=%E5%B0%8A%E7%95%8CV800%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82)
1. [OpenAI全面上线GPT-6](https://www.zhihu.com/search?q=OpenAI%E5%85%A8%E9%9D%A2%E4%B8%8A%E7%BA%BFGPT-6)
1. [为什么每个APP都想追着借钱给你](https://www.zhihu.com/search?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E6%AF%8F%E4%B8%AAAPP%E9%83%BD%E6%83%B3%E8%BF%BD%E7%9D%80%E5%80%9F%E9%92%B1%E7%BB%99%E4%BD%A0)
1. [特朗普将向马斯克颁发科学成就奖](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E5%90%91%E9%A9%AC%E6%96%AF%E5%85%8B%E9%A2%81%E5%8F%91%E7%A7%91%E5%AD%A6%E6%88%90%E5%B0%B1%E5%A5%96)
1. [纪录片《缅北电诈覆灭纪实》首播](https://www.zhihu.com/search?q=%E7%BA%AA%E5%BD%95%E7%89%87%E3%80%8A%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E8%A6%86%E7%81%AD%E7%BA%AA%E5%AE%9E%E3%80%8B%E9%A6%96%E6%92%AD)
1. [超10万份孕妇血样被偷运出境](https://www.zhihu.com/search?q=%E8%B6%8510%E4%B8%87%E4%BB%BD%E5%AD%95%E5%A6%87%E8%A1%80%E6%A0%B7%E8%A2%AB%E5%81%B7%E8%BF%90%E5%87%BA%E5%A2%83)
1. [中方放弃谈判直接抓佤邦副总司令](https://www.zhihu.com/search?q=%E4%B8%AD%E6%96%B9%E6%94%BE%E5%BC%83%E8%B0%88%E5%88%A4%E7%9B%B4%E6%8E%A5%E6%8A%93%E4%BD%A4%E9%82%A6%E5%89%AF%E6%80%BB%E5%8F%B8%E4%BB%A4)
1. [2026诺贝尔物理学奖](https://www.zhihu.com/search?q=2026%E8%AF%BA%E8%B4%9D%E5%B0%94%E7%89%A9%E7%90%86%E5%AD%A6%E5%A5%96)
1. [曝腾讯退货张居正](https://www.zhihu.com/search?q=%E6%9B%9D%E8%85%BE%E8%AE%AF%E9%80%80%E8%B4%A7%E5%BC%A0%E5%B1%85%E6%AD%A3)
1. [王皓遭辱骂拍照取证](https://www.zhihu.com/search?q=%E7%8E%8B%E7%9A%93%E9%81%AD%E8%BE%B1%E9%AA%82%E6%8B%8D%E7%85%A7%E5%8F%96%E8%AF%81)
1. [OpenAI公开722篇数学手稿](https://www.zhihu.com/search?q=OpenAI%E5%85%AC%E5%BC%80722%E7%AF%87%E6%95%B0%E5%AD%A6%E6%89%8B%E7%A8%BF)
1. [俄罗斯否认实施肺鼠疫防疫措施](https://www.zhihu.com/search?q=%E4%BF%84%E7%BD%97%E6%96%AF%E5%90%A6%E8%AE%A4%E5%AE%9E%E6%96%BD%E8%82%BA%E9%BC%A0%E7%96%AB%E9%98%B2%E7%96%AB%E6%8E%AA%E6%96%BD)
1. [中国乒协将建立赛场禁入名单制度](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E4%B9%92%E5%8D%8F%E5%B0%86%E5%BB%BA%E7%AB%8B%E8%B5%9B%E5%9C%BA%E7%A6%81%E5%85%A5%E5%90%8D%E5%8D%95%E5%88%B6%E5%BA%A6)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Oct 09 2026 00:30:46 GMT+0800 (China Standard Time) -->

1. [车子熄火距加油站仅 20 米，加油员拒绝打散装汽油，车主花 350 元拖车到加油站，到底是谁的问题？](https://www.zhihu.com/question/2091483293715846400)
1. [祁连县官方回应征用宿舍事件，称宿舍已复原消杀，给学生发放文创礼包，如何评价这次处置与善后措施？](https://www.zhihu.com/question/2091499233140651300)
1. [国庆电影票房以 11.65 亿收官，创十三年来新低，如何看待国庆档电影票房持续走低？](https://www.zhihu.com/question/2091479232845238800)
1. [央行发布关于人民币汇率的政策立场，称中国没有必要，也无意通过汇率贬值获取贸易竞争优势，如何解读？](https://www.zhihu.com/question/2091589191394185200)
1. [购房者买房多年才得知客厅正上方天台埋着一座土坟，房东和物业应承担责任吗？购房者应怎样维权？](https://www.zhihu.com/question/2091475651387547600)
1. [如何评价字节Seed团队发现DeepSeek性能漂移？](https://www.zhihu.com/question/2091513666864682200)
1. [中国自古没有饮用白酒的习惯，为什么50-70后如此爱喝白酒？](https://www.zhihu.com/question/572641319)
1. [我国房地产进入存量时代，二手房交易占比超 50%，现房销售是大势所趋，普通人买房该如何调整思路？](https://www.zhihu.com/question/2084228022954111700)
1. [国内有哪些「德不配位」的 5A 级景区？](https://www.zhihu.com/question/641121892)
1. [为什么大家一边喊穷，一边又在疯狂旅游？](https://www.zhihu.com/question/2088038498796413400)
1. [俄罗斯官方将研究员死因定性为不明病因肺炎，为啥外界会联系到「鼠疫」？网传四种感染来源的说法哪种更合理？](https://www.zhihu.com/question/2091484309827712000)
1. [跳水运动员张家齐和她母亲的关系揭示了中国式母女的哪些问题？](https://www.zhihu.com/question/2088041826112618800)
1. [如何看待李玉刚宣布《万疆》永久免费授权，任何歌手在演唱会上演唱《万疆》分文不取？](https://www.zhihu.com/question/2091248657194554600)
1. [为什么说华中科技大学是工科大学中的异类？](https://www.zhihu.com/question/631961183)
1. [越南连续推出多型主战装备，其军工为何能「突然崛起」？](https://www.zhihu.com/question/2090385161133344000)
1. [德法提议设贸易「紧急切断开关」指向中国，将对中欧经贸产生何种影响？](https://www.zhihu.com/question/2090751605838815500)
1. [为了实现Token自由，自己买GPU值得吗？](https://www.zhihu.com/question/2080572349796168700)
1. [曝华为 Mate 90 系列手机首销期销量超 27 万台，“超大杯”占比约 40% 你怎么看？](https://www.zhihu.com/question/2091256143515595300)
1. [如何看待现在大部分零零后学生几乎不会使用网址进行搜索？](https://www.zhihu.com/question/2081375256166637600)
1. [如何看待 DeepSeek 估值已接近 5000 亿元？](https://www.zhihu.com/question/2091466415639196400)
1. [江淮汽车回应尊界 V800 刹车踏板断裂，称正在调查和测试，江淮汽车怎样才能平稳度过此次风波？](https://www.zhihu.com/question/2091556881332269300)
1. [2026WTT北京大满贯赛第三轮，周启豪3-0爆冷击败张本智和，如何评价这场比赛？](https://www.zhihu.com/question/2091531629483378000)
1. [为啥每个 APP 都想追着借钱给我？](https://www.zhihu.com/question/2091451395748651800)
1. [当你老了，你希望住在一个什么样的家里，让自己舒服地老去？](https://www.zhihu.com/question/2088297961302090000)
1. [你会要求孩子以成为学霸为目标吗？](https://www.zhihu.com/question/2088369831359804200)
1. [如何评价江淮汽车股价跌停？和尊界风波有关吗？](https://www.zhihu.com/question/2091510176536687900)
1. [为什么探春抽到的花签意为“必得贵婿”，但又属于薄命之人？](https://www.zhihu.com/question/1924713281127428600)
1. [你的家乡有什么美食让人一听就知道你是哪里的？](https://www.zhihu.com/question/1932675850882486500)
1. [2026 年化学诺奖颁给「手性」，药名里的「左」「右」（左氧氟沙星、右佐匹克隆）是这个原理的应用吗？](https://www.zhihu.com/question/2091234953853757400)
1. [季前赛-开拓者力克勇士，杨瀚森6分2板4助1断，生涯首次打满末节12分钟，如何评价这场比赛小杨的表现？](https://www.zhihu.com/question/2091510365494555000)

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
<!-- 最后更新时间 Fri Oct 09 2026 00:38:03 GMT+0800 (China Standard Time) -->

1. [总书记考察的长征故地](https://s.weibo.com//weibo?q=%23%E6%80%BB%E4%B9%A6%E8%AE%B0%E8%80%83%E5%AF%9F%E7%9A%84%E9%95%BF%E5%BE%81%E6%95%85%E5%9C%B0%23&Refer=new_time)
1. [肺鼠疫可飞沫传播](https://s.weibo.com//weibo?q=%23%E8%82%BA%E9%BC%A0%E7%96%AB%E5%8F%AF%E9%A3%9E%E6%B2%AB%E4%BC%A0%E6%92%AD%23&t=31&band_rank=1&Refer=top)
1. [警方通报小区楼顶发现可疑骨头](https://s.weibo.com//weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%B0%8F%E5%8C%BA%E6%A5%BC%E9%A1%B6%E5%8F%91%E7%8E%B0%E5%8F%AF%E7%96%91%E9%AA%A8%E5%A4%B4%23&t=31&band_rank=2&Refer=top)
1. [假期超21亿人次跨区域流动](https://s.weibo.com//weibo?q=%23%E5%81%87%E6%9C%9F%E8%B6%8521%E4%BA%BF%E4%BA%BA%E6%AC%A1%E8%B7%A8%E5%8C%BA%E5%9F%9F%E6%B5%81%E5%8A%A8%23&t=31&band_rank=3&Refer=top)
1. [肺鼠疫会人传人](https://s.weibo.com//weibo?q=%E8%82%BA%E9%BC%A0%E7%96%AB%E4%BC%9A%E4%BA%BA%E4%BC%A0%E4%BA%BA&t=31&band_rank=4&Refer=top)
1. [赵丽颖 飞天奖](https://s.weibo.com//weibo?q=%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E9%A3%9E%E5%A4%A9%E5%A5%96&t=31&band_rank=5&Refer=top)
1. [肖战 南京演唱会](https://s.weibo.com//weibo?q=%E8%82%96%E6%88%98%20%E5%8D%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A&t=31&band_rank=6&Refer=top)
1. [纪委回应女局长被举报婚内出轨多人](https://s.weibo.com//weibo?q=%23%E7%BA%AA%E5%A7%94%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%B1%80%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A8%E5%A4%9A%E4%BA%BA%23&t=31&band_rank=7&Refer=top)
1. [82岁老姑娘养老规划太有智慧](https://s.weibo.com//weibo?q=82%E5%B2%81%E8%80%81%E5%A7%91%E5%A8%98%E5%85%BB%E8%80%81%E8%A7%84%E5%88%92%E5%A4%AA%E6%9C%89%E6%99%BA%E6%85%A7&t=31&band_rank=8&Refer=top)
1. [三甲医生回应喝大水](https://s.weibo.com//weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%96%9D%E5%A4%A7%E6%B0%B4%23&t=31&band_rank=9&Refer=top)
1. [王楚钦与勒布伦兄弟热聊](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8E%E5%8B%92%E5%B8%83%E4%BC%A6%E5%85%84%E5%BC%9F%E7%83%AD%E8%81%8A%23&t=31&band_rank=10&Refer=top)
1. [肺鼠疫症状](https://s.weibo.com//weibo?q=%E8%82%BA%E9%BC%A0%E7%96%AB%E7%97%87%E7%8A%B6&t=31&band_rank=11&Refer=top)
1. [崔晋李勒优聊天记录](https://s.weibo.com//weibo?q=%23%E5%B4%94%E6%99%8B%E6%9D%8E%E5%8B%92%E4%BC%98%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23&t=31&band_rank=12&Refer=top)
1. [林依晨老公](https://s.weibo.com//weibo?q=%E6%9E%97%E4%BE%9D%E6%99%A8%E8%80%81%E5%85%AC&t=31&band_rank=13&Refer=top)
1. [李一桐le成断层第一](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90le%E6%88%90%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23&t=31&band_rank=14&Refer=top)
1. [温瑞博说脑子都是浆糊](https://s.weibo.com//weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A%E8%AF%B4%E8%84%91%E5%AD%90%E9%83%BD%E6%98%AF%E6%B5%86%E7%B3%8A%23&t=31&band_rank=15&Refer=top)
1. [俄罗斯不明肺炎会传进来吗](https://s.weibo.com//weibo?q=%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%8D%E6%98%8E%E8%82%BA%E7%82%8E%E4%BC%9A%E4%BC%A0%E8%BF%9B%E6%9D%A5%E5%90%97&t=31&band_rank=16&Refer=top)
1. [新冠刚开始也是不明原因肺炎](https://s.weibo.com//weibo?q=%E6%96%B0%E5%86%A0%E5%88%9A%E5%BC%80%E5%A7%8B%E4%B9%9F%E6%98%AF%E4%B8%8D%E6%98%8E%E5%8E%9F%E5%9B%A0%E8%82%BA%E7%82%8E&t=31&band_rank=17&Refer=top)
1. [李勒优嫂子](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%8B%92%E4%BC%98%E5%AB%82%E5%AD%90&t=31&band_rank=18&Refer=top)
1. [AI历史剧火了也遭举报](https://s.weibo.com//weibo?q=AI%E5%8E%86%E5%8F%B2%E5%89%A7%E7%81%AB%E4%BA%86%E4%B9%9F%E9%81%AD%E4%B8%BE%E6%8A%A5&t=31&band_rank=19&Refer=top)
1. [王皓王楚钦观战温瑞博莫雷高德比赛](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E7%9A%93%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%A7%82%E6%88%98%E6%B8%A9%E7%91%9E%E5%8D%9A%E8%8E%AB%E9%9B%B7%E9%AB%98%E5%BE%B7%E6%AF%94%E8%B5%9B%23&t=31&band_rank=20&Refer=top)
1. [感觉不对劲一定不要回应](https://s.weibo.com//weibo?q=%E6%84%9F%E8%A7%89%E4%B8%8D%E5%AF%B9%E5%8A%B2%E4%B8%80%E5%AE%9A%E4%B8%8D%E8%A6%81%E5%9B%9E%E5%BA%94&t=31&band_rank=21&Refer=top)
1. [李一桐 Happy就是le](https://s.weibo.com//weibo?q=%E6%9D%8E%E4%B8%80%E6%A1%90%20Happy%E5%B0%B1%E6%98%AFle&t=31&band_rank=22&Refer=top)
1. [赵晴4.0](https://s.weibo.com//weibo?q=%E8%B5%B5%E6%99%B44.0&t=31&band_rank=23&Refer=top)
1. [俄罗斯肺炎](https://s.weibo.com//weibo?q=%E4%BF%84%E7%BD%97%E6%96%AF%E8%82%BA%E7%82%8E&t=31&band_rank=24&Refer=top)
1. [摔死75岁裁判的摔角手已被捕](https://s.weibo.com//weibo?q=%23%E6%91%94%E6%AD%BB75%E5%B2%81%E8%A3%81%E5%88%A4%E7%9A%84%E6%91%94%E8%A7%92%E6%89%8B%E5%B7%B2%E8%A2%AB%E6%8D%95%23&t=31&band_rank=25&Refer=top)
1. [金莎晒一家三口合照](https://s.weibo.com//weibo?q=%23%E9%87%91%E8%8E%8E%E6%99%92%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%88%E7%85%A7%23&t=31&band_rank=26&Refer=top)
1. [女子垃圾桶里捡到一袋染色的5元纸币](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9E%83%E5%9C%BE%E6%A1%B6%E9%87%8C%E6%8D%A1%E5%88%B0%E4%B8%80%E8%A2%8B%E6%9F%93%E8%89%B2%E7%9A%845%E5%85%83%E7%BA%B8%E5%B8%81%23&t=31&band_rank=27&Refer=top)
1. [国内金价跌至890元](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E5%86%85%E9%87%91%E4%BB%B7%E8%B7%8C%E8%87%B3890%E5%85%83%23&t=31&band_rank=28&Refer=top)
1. [男子每天喝2000毫升水得结石了](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E6%AF%8F%E5%A4%A9%E5%96%9D2000%E6%AF%AB%E5%8D%87%E6%B0%B4%E5%BE%97%E7%BB%93%E7%9F%B3%E4%BA%86%23&t=31&band_rank=29&Refer=top)
1. [成都楼顶7岁男童坟墓系谣言](https://s.weibo.com//weibo?q=%23%E6%88%90%E9%83%BD%E6%A5%BC%E9%A1%B67%E5%B2%81%E7%94%B7%E7%AB%A5%E5%9D%9F%E5%A2%93%E7%B3%BB%E8%B0%A3%E8%A8%80%23&t=31&band_rank=30&Refer=top)
1. [赵晴化的这个妆据说要好几万](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E6%99%B4%E5%8C%96%E7%9A%84%E8%BF%99%E4%B8%AA%E5%A6%86%E6%8D%AE%E8%AF%B4%E8%A6%81%E5%A5%BD%E5%87%A0%E4%B8%87%23&t=31&band_rank=31&Refer=top)
1. [女局长被举报婚内出轨多人家属发声](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%B1%80%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A8%E5%A4%9A%E4%BA%BA%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23&t=31&band_rank=32&Refer=top)
1. [up主叮当猫 女朋友](https://s.weibo.com//weibo?q=up%E4%B8%BB%E5%8F%AE%E5%BD%93%E7%8C%AB%20%E5%A5%B3%E6%9C%8B%E5%8F%8B&t=31&band_rank=33&Refer=top)
1. [王一博诉陈情令出品方侵权案开庭](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%AF%89%E9%99%88%E6%83%85%E4%BB%A4%E5%87%BA%E5%93%81%E6%96%B9%E4%BE%B5%E6%9D%83%E6%A1%88%E5%BC%80%E5%BA%AD%23&t=31&band_rank=34&Refer=top)
1. [晋妈面馆遭大量低分差评](https://s.weibo.com//weibo?q=%23%E6%99%8B%E5%A6%88%E9%9D%A2%E9%A6%86%E9%81%AD%E5%A4%A7%E9%87%8F%E4%BD%8E%E5%88%86%E5%B7%AE%E8%AF%84%23&t=31&band_rank=35&Refer=top)
1. [39岁的石原里美](https://s.weibo.com//weibo?q=%2339%E5%B2%81%E7%9A%84%E7%9F%B3%E5%8E%9F%E9%87%8C%E7%BE%8E%23&t=31&band_rank=36&Refer=top)
1. [景区小马被游客骑断腰椎](https://s.weibo.com//weibo?q=%E6%99%AF%E5%8C%BA%E5%B0%8F%E9%A9%AC%E8%A2%AB%E6%B8%B8%E5%AE%A2%E9%AA%91%E6%96%AD%E8%85%B0%E6%A4%8E&t=31&band_rank=37&Refer=top)
1. [荷兰已有10人感染西尼罗病毒死亡](https://s.weibo.com//weibo?q=%23%E8%8D%B7%E5%85%B0%E5%B7%B2%E6%9C%8910%E4%BA%BA%E6%84%9F%E6%9F%93%E8%A5%BF%E5%B0%BC%E7%BD%97%E7%97%85%E6%AF%92%E6%AD%BB%E4%BA%A1%23&t=31&band_rank=38&Refer=top)
1. [新还珠尔康真的帅我一脸](https://s.weibo.com//weibo?q=%23%E6%96%B0%E8%BF%98%E7%8F%A0%E5%B0%94%E5%BA%B7%E7%9C%9F%E7%9A%84%E5%B8%85%E6%88%91%E4%B8%80%E8%84%B8%23&t=31&band_rank=39&Refer=top)
1. [停止主动后关系像没有一样](https://s.weibo.com//weibo?q=%E5%81%9C%E6%AD%A2%E4%B8%BB%E5%8A%A8%E5%90%8E%E5%85%B3%E7%B3%BB%E5%83%8F%E6%B2%A1%E6%9C%89%E4%B8%80%E6%A0%B7&t=31&band_rank=40&Refer=top)
1. [向佐喝蛋白粉把肾喝成70岁](https://s.weibo.com//weibo?q=%23%E5%90%91%E4%BD%90%E5%96%9D%E8%9B%8B%E7%99%BD%E7%B2%89%E6%8A%8A%E8%82%BE%E5%96%9D%E6%88%9070%E5%B2%81%23&t=31&band_rank=41&Refer=top)
1. [老祖宗没骗我北冥有鱼是真的](https://s.weibo.com//weibo?q=%E8%80%81%E7%A5%96%E5%AE%97%E6%B2%A1%E9%AA%97%E6%88%91%E5%8C%97%E5%86%A5%E6%9C%89%E9%B1%BC%E6%98%AF%E7%9C%9F%E7%9A%84&t=31&band_rank=42&Refer=top)
1. [俄驻华大使馆发声](https://s.weibo.com//weibo?q=%23%E4%BF%84%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E9%A6%86%E5%8F%91%E5%A3%B0%23&t=31&band_rank=43&Refer=top)
1. [温瑞博vs莫雷加德](https://s.weibo.com//weibo?q=%E6%B8%A9%E7%91%9E%E5%8D%9Avs%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7&t=31&band_rank=44&Refer=top)
1. [Jennie盆栽哥舞台](https://s.weibo.com//weibo?q=%23Jennie%E7%9B%86%E6%A0%BD%E5%93%A5%E8%88%9E%E5%8F%B0%23&t=31&band_rank=45&Refer=top)
1. [墨西哥摔角手赛场上摔死75岁裁判](https://s.weibo.com//weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E6%91%94%E8%A7%92%E6%89%8B%E8%B5%9B%E5%9C%BA%E4%B8%8A%E6%91%94%E6%AD%BB75%E5%B2%81%E8%A3%81%E5%88%A4%23&t=31&band_rank=46&Refer=top)
1. [张本美和说和松岛辉空风格完全不同](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E8%AF%B4%E5%92%8C%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E9%A3%8E%E6%A0%BC%E5%AE%8C%E5%85%A8%E4%B8%8D%E5%90%8C%23&t=31&band_rank=47&Refer=top)
1. [白敬亭婉拒王楚然](https://s.weibo.com//weibo?q=%E7%99%BD%E6%95%AC%E4%BA%AD%E5%A9%89%E6%8B%92%E7%8E%8B%E6%A5%9A%E7%84%B6&t=31&band_rank=48&Refer=top)
1. [小米澎程](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B&t=31&band_rank=49&Refer=top)
1. [钟楚曦把口红全切了](https://s.weibo.com//weibo?q=%23%E9%92%9F%E6%A5%9A%E6%9B%A6%E6%8A%8A%E5%8F%A3%E7%BA%A2%E5%85%A8%E5%88%87%E4%BA%86%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
