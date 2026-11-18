# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-18 12:24:10

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
<!-- 最后更新时间 Wed Nov 18 2026 21:22:35 GMT+0800 (China Standard Time) -->

1. [习近平迎接特朗普](https://so.toutiao.com/search?keyword=习近平迎接特朗普)
1. [APEC各国领导人合影](https://so.toutiao.com/search?keyword=APEC各国领导人合影)
1. [APEC十二年间有哪些新变化？](https://so.toutiao.com/search?keyword=APEC十二年间有哪些新变化？)
1. [特朗普出席欢迎晚宴驻足听乐队演奏](https://so.toutiao.com/search?keyword=特朗普出席欢迎晚宴驻足听乐队演奏)
1. [中方回应英伟达停止向华供应H200芯片](https://so.toutiao.com/search?keyword=中方回应英伟达停止向华供应H200芯片)
1. [这几天深圳人随机偶遇CEO主持人](https://so.toutiao.com/search?keyword=这几天深圳人随机偶遇CEO主持人)
1. [特朗普车队车前插中美两国国旗](https://so.toutiao.com/search?keyword=特朗普车队车前插中美两国国旗)
1. [市监局回应烤全羊被指剥不出1两肉](https://so.toutiao.com/search?keyword=市监局回应烤全羊被指剥不出1两肉)
1. [中外媒体紧盯这些APEC关键词](https://so.toutiao.com/search?keyword=中外媒体紧盯这些APEC关键词)
1. [历史性时刻：普京特朗普同日抵达深圳](https://so.toutiao.com/search?keyword=历史性时刻：普京特朗普同日抵达深圳)
1. [养老保险缴15年就能坐等退休？假的](https://so.toutiao.com/search?keyword=养老保险缴15年就能坐等退休？假的)
1. [韩国人李在佑：广州是第二故乡](https://so.toutiao.com/search?keyword=韩国人李在佑：广州是第二故乡)
1. [中国军人在空军一号轰鸣声前岿然不动](https://so.toutiao.com/search?keyword=中国军人在空军一号轰鸣声前岿然不动)
1. [千万粉时政UP主谈湖北亚太机遇](https://so.toutiao.com/search?keyword=千万粉时政UP主谈湖北亚太机遇)
1. [宁德时代连续两日尾盘获抢筹](https://so.toutiao.com/search?keyword=宁德时代连续两日尾盘获抢筹)
1. [普京到高校演讲离场时挥手致意](https://so.toutiao.com/search?keyword=普京到高校演讲离场时挥手致意)
1. [猪价重回9元关口](https://so.toutiao.com/search?keyword=猪价重回9元关口)
1. [今日30只个股突破年线](https://so.toutiao.com/search?keyword=今日30只个股突破年线)
1. [泰国总理回到老家广东大飙粤语](https://so.toutiao.com/search?keyword=泰国总理回到老家广东大飙粤语)
1. [特朗普坐上专属座驾在车上挥手](https://so.toutiao.com/search?keyword=特朗普坐上专属座驾在车上挥手)
1. [陆毅女儿贝儿官宣出道](https://so.toutiao.com/search?keyword=陆毅女儿贝儿官宣出道)
1. [台湾岛内震撼：全世界焦点都在深圳](https://so.toutiao.com/search?keyword=台湾岛内震撼：全世界焦点都在深圳)
1. [泰总理随行人员刚出舱门就拍拍拍](https://so.toutiao.com/search?keyword=泰总理随行人员刚出舱门就拍拍拍)
1. [“羊”字辈股票为何集体退潮](https://so.toutiao.com/search?keyword=“羊”字辈股票为何集体退潮)
1. [普京为何感谢中国](https://so.toutiao.com/search?keyword=普京为何感谢中国)
1. [克里米亚大桥遇袭会影响俄军补给线吗](https://so.toutiao.com/search?keyword=克里米亚大桥遇袭会影响俄军补给线吗)
1. [国台办回应“两岸2032年统一货币”](https://so.toutiao.com/search?keyword=国台办回应“两岸2032年统一货币”)
1. [马斯克现身特朗普随行大巴车](https://so.toutiao.com/search?keyword=马斯克现身特朗普随行大巴车)
1. [特朗普谈俄乌冲突：乌克兰正在输](https://so.toutiao.com/search?keyword=特朗普谈俄乌冲突：乌克兰正在输)
1. [为何还有人坚持只买油车](https://so.toutiao.com/search?keyword=为何还有人坚持只买油车)
1. [深圳机场停满各国领导人专机](https://so.toutiao.com/search?keyword=深圳机场停满各国领导人专机)
1. [中国银行原副行长林景臻一审获刑13年](https://so.toutiao.com/search?keyword=中国银行原副行长林景臻一审获刑13年)
1. [新西兰代表大赞中国汽车](https://so.toutiao.com/search?keyword=新西兰代表大赞中国汽车)
1. [普京出席欢迎晚宴对镜头微笑挥手](https://so.toutiao.com/search?keyword=普京出席欢迎晚宴对镜头微笑挥手)
1. [男子滩涂赶海抓青蟹 个头惊人](https://so.toutiao.com/search?keyword=男子滩涂赶海抓青蟹%20个头惊人)
1. [今天的A股到底谁在赚钱](https://so.toutiao.com/search?keyword=今天的A股到底谁在赚钱)
1. [记者称普京车队起码有40多辆](https://so.toutiao.com/search?keyword=记者称普京车队起码有40多辆)
1. [胖东来羽绒服区太火爆](https://so.toutiao.com/search?keyword=胖东来羽绒服区太火爆)
1. [美学者开中国电动车走马可·波罗之路](https://so.toutiao.com/search?keyword=美学者开中国电动车走马可·波罗之路)
1. [特朗普成首位踏足深圳的在任美总统](https://so.toutiao.com/search?keyword=特朗普成首位踏足深圳的在任美总统)
1. [怎么看克里米亚大桥遭袭](https://so.toutiao.com/search?keyword=怎么看克里米亚大桥遭袭)
1. [华为海思概念股涨1.02%](https://so.toutiao.com/search?keyword=华为海思概念股涨1.02%)
1. [空军表演队拉彩烟欢迎特朗普](https://so.toutiao.com/search?keyword=空军表演队拉彩烟欢迎特朗普)
1. [当地回应80-89岁老人高龄津贴5元/月](https://so.toutiao.com/search?keyword=当地回应80-89岁老人高龄津贴5元/月)
1. [深圳城市时间中心揭牌](https://so.toutiao.com/search?keyword=深圳城市时间中心揭牌)
1. [何超琼发言董明珠全程注视满眼欣赏](https://so.toutiao.com/search?keyword=何超琼发言董明珠全程注视满眼欣赏)
1. [菲律宾为何没签“硅和平”协议](https://so.toutiao.com/search?keyword=菲律宾为何没签“硅和平”协议)
1. [两市全天特大单净流入40.22亿元](https://so.toutiao.com/search?keyword=两市全天特大单净流入40.22亿元)
1. [美官员用中文表白：来了就是深圳人](https://so.toutiao.com/search?keyword=美官员用中文表白：来了就是深圳人)
1. [邵永灵：日本想打造亚洲能源枢纽](https://so.toutiao.com/search?keyword=邵永灵：日本想打造亚洲能源枢纽)
1. [习近平将会见普京](https://so.toutiao.com/search?keyword=习近平将会见普京)
1. [特朗普将于18日晚抵达深圳](https://so.toutiao.com/search?keyword=特朗普将于18日晚抵达深圳)
1. [APEC“中国年”取得丰硕成果](https://so.toutiao.com/search?keyword=APEC“中国年”取得丰硕成果)
1. [文莱领导人握手前中方安保1秒摘手套](https://so.toutiao.com/search?keyword=文莱领导人握手前中方安保1秒摘手套)
1. [凌晨接机“中国排面”依旧整齐划一](https://so.toutiao.com/search?keyword=凌晨接机“中国排面”依旧整齐划一)
1. [俄驻华大使：俄转向东方趋势不可逆](https://so.toutiao.com/search?keyword=俄驻华大使：俄转向东方趋势不可逆)
1. [南方旅客到长白山刚出站就铲雪](https://so.toutiao.com/search?keyword=南方旅客到长白山刚出站就铲雪)
1. [何超琼APEC发出邀请](https://so.toutiao.com/search?keyword=何超琼APEC发出邀请)
1. [APEC“中国年”这些知识点不容错过](https://so.toutiao.com/search?keyword=APEC“中国年”这些知识点不容错过)
1. [王传福：中国车企出海不只是输出技术](https://so.toutiao.com/search?keyword=王传福：中国车企出海不只是输出技术)
1. [小獬豸捉“妖”记](https://so.toutiao.com/search?keyword=小獬豸捉“妖”记)
1. [普京抵达深圳](https://so.toutiao.com/search?keyword=普京抵达深圳)
1. [男子结婚9年三个子女非亲生](https://so.toutiao.com/search?keyword=男子结婚9年三个子女非亲生)
1. [俄乌互炸大桥透露哪些战场变化](https://so.toutiao.com/search?keyword=俄乌互炸大桥透露哪些战场变化)
1. [李在明夫妇向中方迎宾人员鼓掌致意](https://so.toutiao.com/search?keyword=李在明夫妇向中方迎宾人员鼓掌致意)
1. [如何看待雷军给AI的时间表](https://so.toutiao.com/search?keyword=如何看待雷军给AI的时间表)
1. [魏建军回应于东来复购310辆坦克700](https://so.toutiao.com/search?keyword=魏建军回应于东来复购310辆坦克700)
1. [王兴雷军APEC现场并排热聊](https://so.toutiao.com/search?keyword=王兴雷军APEC现场并排热聊)
1. [现货黄金失守3800美元关口](https://so.toutiao.com/search?keyword=现货黄金失守3800美元关口)
1. [广东机器人在美国“上岗”](https://so.toutiao.com/search?keyword=广东机器人在美国“上岗”)
1. [刘德华辅导女儿写作业也烦恼](https://so.toutiao.com/search?keyword=刘德华辅导女儿写作业也烦恼)
1. [俄军运输机空中起火后机头朝下坠毁](https://so.toutiao.com/search?keyword=俄军运输机空中起火后机头朝下坠毁)
1. [360度沉浸式打卡APEC新闻中心](https://so.toutiao.com/search?keyword=360度沉浸式打卡APEC新闻中心)
1. [智利总统专机悬挂中智两国国旗](https://so.toutiao.com/search?keyword=智利总统专机悬挂中智两国国旗)
1. [今年羽绒羽毛为何旺季不旺](https://so.toutiao.com/search?keyword=今年羽绒羽毛为何旺季不旺)
1. [深圳人去香蜜公园看APEC](https://so.toutiao.com/search?keyword=深圳人去香蜜公园看APEC)
1. [深圳北站母女齐当志愿者](https://so.toutiao.com/search?keyword=深圳北站母女齐当志愿者)
1. [羽绒服热议背后的消费趋势](https://so.toutiao.com/search?keyword=羽绒服热议背后的消费趋势)
1. [深圳市民给APEC晚宴疯狂安利猪脚饭](https://so.toutiao.com/search?keyword=深圳市民给APEC晚宴疯狂安利猪脚饭)
1. [女子得知被抱养辞职回农村陪养父母](https://so.toutiao.com/search?keyword=女子得知被抱养辞职回农村陪养父母)
1. [球迷高唱《海阔天空》给国足加油](https://so.toutiao.com/search?keyword=球迷高唱《海阔天空》给国足加油)
1. [元首外交“深圳时间”聚焦哪些话题](https://so.toutiao.com/search?keyword=元首外交“深圳时间”聚焦哪些话题)
1. [APEC赋能中山造出海提速](https://so.toutiao.com/search?keyword=APEC赋能中山造出海提速)
1. [俄罗斯姑娘在广州架起中俄商业桥梁](https://so.toutiao.com/search?keyword=俄罗斯姑娘在广州架起中俄商业桥梁)
1. [特朗普亚洲行团队名单](https://so.toutiao.com/search?keyword=特朗普亚洲行团队名单)
1. [翻译还原杨瀚森“砍”戈贝尔始末](https://so.toutiao.com/search?keyword=翻译还原杨瀚森“砍”戈贝尔始末)
1. [从深圳看世界到世界看深圳](https://so.toutiao.com/search?keyword=从深圳看世界到世界看深圳)
1. [深圳人全妆出街迎APEC](https://so.toutiao.com/search?keyword=深圳人全妆出街迎APEC)
1. [库里：这可能是最后一份合同了](https://so.toutiao.com/search?keyword=库里：这可能是最后一份合同了)
1. [2000余位政商界代表齐聚深圳前海](https://so.toutiao.com/search?keyword=2000余位政商界代表齐聚深圳前海)
1. [中方回应特朗普称或在华会见金正恩](https://so.toutiao.com/search?keyword=中方回应特朗普称或在华会见金正恩)
1. [王传福：我赢你输的路子走不远](https://so.toutiao.com/search?keyword=王传福：我赢你输的路子走不远)
1. [英国宣布向乌提供千余枚防空导弹](https://so.toutiao.com/search?keyword=英国宣布向乌提供千余枚防空导弹)
1. [APEC工商领导人峰会一线观察](https://so.toutiao.com/search?keyword=APEC工商领导人峰会一线观察)
1. [蒋万安谢龙介联手打水库光电议题](https://so.toutiao.com/search?keyword=蒋万安谢龙介联手打水库光电议题)
1. [评论员谈库里右膝软骨退化](https://so.toutiao.com/search?keyword=评论员谈库里右膝软骨退化)
1. [人民日报：共享亚太合作成果](https://so.toutiao.com/search?keyword=人民日报：共享亚太合作成果)
1. [电视剧《伟大的长征》为何能火](https://so.toutiao.com/search?keyword=电视剧《伟大的长征》为何能火)
1. [陈文清：推动各地彻查涉黑涉恶腐败](https://so.toutiao.com/search?keyword=陈文清：推动各地彻查涉黑涉恶腐败)
1. [智利总统夫人与中方女保镖互动](https://so.toutiao.com/search?keyword=智利总统夫人与中方女保镖互动)
1. [APEC工商领导人峰会今天聚焦哪些议题](https://so.toutiao.com/search?keyword=APEC工商领导人峰会今天聚焦哪些议题)
1. [小米回应雷军APEC发言紧张](https://so.toutiao.com/search?keyword=小米回应雷军APEC发言紧张)
1. [女子下单400余次均仅退款被刑拘](https://so.toutiao.com/search?keyword=女子下单400余次均仅退款被刑拘)
1. [身体有这些异常很可能是血管堵了](https://so.toutiao.com/search?keyword=身体有这些异常很可能是血管堵了)
1. [特朗普宣布即将访华 将与中俄元首会晤](https://so.toutiao.com/search?keyword=特朗普宣布即将访华%20将与中俄元首会晤)
1. [经常吃面条对身体好还是不好](https://so.toutiao.com/search?keyword=经常吃面条对身体好还是不好)
1. [深圳以暖心服务迎接亚太宾客](https://so.toutiao.com/search?keyword=深圳以暖心服务迎接亚太宾客)
1. [深圳APEC主持人阵容拉满](https://so.toutiao.com/search?keyword=深圳APEC主持人阵容拉满)
1. [小米辟谣汽车召回短信](https://so.toutiao.com/search?keyword=小米辟谣汽车召回短信)
1. [《慌啥子嘛》为什么让成年人破防](https://so.toutiao.com/search?keyword=《慌啥子嘛》为什么让成年人破防)
1. [特朗普亚洲行团队名单：鲁比奥在列](https://so.toutiao.com/search?keyword=特朗普亚洲行团队名单：鲁比奥在列)
1. [于东来奖励员工310辆坦克700](https://so.toutiao.com/search?keyword=于东来奖励员工310辆坦克700)
1. [董明珠称格力已研发机器人十几年](https://so.toutiao.com/search?keyword=董明珠称格力已研发机器人十几年)
1. [特朗普戴红领带开启亚洲行](https://so.toutiao.com/search?keyword=特朗普戴红领带开启亚洲行)
1. [为何AI漫剧里的脸让人觉得完美](https://so.toutiao.com/search?keyword=为何AI漫剧里的脸让人觉得完美)
1. [郭德纲委托律师发布声明](https://so.toutiao.com/search?keyword=郭德纲委托律师发布声明)
1. [DeepSeek限制免费用量说明什么](https://so.toutiao.com/search?keyword=DeepSeek限制免费用量说明什么)
1. [猪肉降价为何牛肉价格却在涨](https://so.toutiao.com/search?keyword=猪肉降价为何牛肉价格却在涨)
1. [普京将带3位副总理7位部长来华参会](https://so.toutiao.com/search?keyword=普京将带3位副总理7位部长来华参会)
1. [甘肃两当县因慢生活出圈](https://so.toutiao.com/search?keyword=甘肃两当县因慢生活出圈)
1. [业主拖欠842.48元物业费被起诉](https://so.toutiao.com/search?keyword=业主拖欠842.48元物业费被起诉)
1. [老外们在深圳贴退热贴用筷子吃烧烤](https://so.toutiao.com/search?keyword=老外们在深圳贴退热贴用筷子吃烧烤)
1. [国足连追两球2-2战平巴林](https://so.toutiao.com/search?keyword=国足连追两球2-2战平巴林)
1. [中芯国际逼近全球晶圆代工第二名](https://so.toutiao.com/search?keyword=中芯国际逼近全球晶圆代工第二名)
1. [雷军APEC发言](https://so.toutiao.com/search?keyword=雷军APEC发言)
1. [泰国正大集团董事长想买中国的电](https://so.toutiao.com/search?keyword=泰国正大集团董事长想买中国的电)
1. [王传福试驾方程豹钛9竖大拇指](https://so.toutiao.com/search?keyword=王传福试驾方程豹钛9竖大拇指)
1. [一场雪后河南有了自己的林海雪原](https://so.toutiao.com/search?keyword=一场雪后河南有了自己的林海雪原)
1. [飞鸟为何频频出现在APEC城市中](https://so.toutiao.com/search?keyword=飞鸟为何频频出现在APEC城市中)
1. [U19国足2-1战胜韩国 再夺熊猫杯冠军](https://so.toutiao.com/search?keyword=U19国足2-1战胜韩国%20再夺熊猫杯冠军)
1. [菲总统回忆二人K歌 高市转移话题尬笑](https://so.toutiao.com/search?keyword=菲总统回忆二人K歌%20高市转移话题尬笑)
1. [特朗普将成首位到访深圳的在任美总统](https://so.toutiao.com/search?keyword=特朗普将成首位到访深圳的在任美总统)
1. [加拿大总理亮出Plan B有何意味](https://so.toutiao.com/search?keyword=加拿大总理亮出Plan%20B有何意味)
1. [深圳：海外消费者扫货中国科技伴手礼](https://so.toutiao.com/search?keyword=深圳：海外消费者扫货中国科技伴手礼)
1. [中俄美元首面对面会晤谈什么](https://so.toutiao.com/search?keyword=中俄美元首面对面会晤谈什么)
1. [唐湘龙：孙中山先生的期望大陆办到了](https://so.toutiao.com/search?keyword=唐湘龙：孙中山先生的期望大陆办到了)
1. [美国封堵新马泰等国远程算力租赁通道](https://so.toutiao.com/search?keyword=美国封堵新马泰等国远程算力租赁通道)
1. [APEC嘉宾随行人员各个角度拍仪仗队](https://so.toutiao.com/search?keyword=APEC嘉宾随行人员各个角度拍仪仗队)
1. [广东省省长会见泰国正大集团董事长](https://so.toutiao.com/search?keyword=广东省省长会见泰国正大集团董事长)
1. [董明珠回应格力坚持造芯](https://so.toutiao.com/search?keyword=董明珠回应格力坚持造芯)
1. [APEC“深圳时刻”激活中国经济新增量](https://so.toutiao.com/search?keyword=APEC“深圳时刻”激活中国经济新增量)
1. [英伟达推出全新量子纠错解码算法](https://so.toutiao.com/search?keyword=英伟达推出全新量子纠错解码算法)
1. [《谷雨》用故事彰显税收法治公平](https://so.toutiao.com/search?keyword=《谷雨》用故事彰显税收法治公平)
1. [董明珠：解决人类的问题企业才有价值](https://so.toutiao.com/search?keyword=董明珠：解决人类的问题企业才有价值)
1. [U23国足主帅和郜林观战国足vs巴林](https://so.toutiao.com/search?keyword=U23国足主帅和郜林观战国足vs巴林)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Nov 18 2026 21:53:46 GMT+0800 (China Standard Time) -->

1. [业内称山姆399元羽绒服是钩子商品](https://www.zhihu.com/search?q=%E4%B8%9A%E5%86%85%E7%A7%B0%E5%B1%B1%E5%A7%86399%E5%85%83%E7%BE%BD%E7%BB%92%E6%9C%8D%E6%98%AF%E9%92%A9%E5%AD%90%E5%95%86%E5%93%81)
1. [2026深圳APEC峰会](https://www.zhihu.com/search?q=2026%E6%B7%B1%E5%9C%B3APEC%E5%B3%B0%E4%BC%9A)
1. [英伟达Q3财报](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BEQ3%E8%B4%A2%E6%8A%A5)
1. [黄仁勋称愿重返英伟达任CEO](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E6%84%BF%E9%87%8D%E8%BF%94%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%BB%BBCEO)
1. [美国总统特朗普抵达深圳](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E6%80%BB%E7%BB%9F%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3)
1. [知乎数据开放平台新玩法](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%95%B0%E6%8D%AE%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E6%96%B0%E7%8E%A9%E6%B3%95)
1. [中俄美元首将在深圳会晤](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%B0%86%E5%9C%A8%E6%B7%B1%E5%9C%B3%E4%BC%9A%E6%99%A4)
1. [《GTA6》媒体评分解禁](https://www.zhihu.com/search?q=%E3%80%8AGTA6%E3%80%8B%E5%AA%92%E4%BD%93%E8%AF%84%E5%88%86%E8%A7%A3%E7%A6%81)
1. [传腾讯内部空前危机感](https://www.zhihu.com/search?q=%E4%BC%A0%E8%85%BE%E8%AE%AF%E5%86%85%E9%83%A8%E7%A9%BA%E5%89%8D%E5%8D%B1%E6%9C%BA%E6%84%9F)
1. [英伟达史上首次单季营收突破千亿美元](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%8F%B2%E4%B8%8A%E9%A6%96%E6%AC%A1%E5%8D%95%E5%AD%A3%E8%90%A5%E6%94%B6%E7%AA%81%E7%A0%B4%E5%8D%83%E4%BA%BF%E7%BE%8E%E5%85%83)
1. [开造啦！好奇岛](https://www.zhihu.com/search?q=%E5%BC%80%E9%80%A0%E5%95%A6%EF%BC%81%E5%A5%BD%E5%A5%87%E5%B2%9B)
1. [烤全羊事件涉事民宿被立案调查](https://www.zhihu.com/search?q=%E7%83%A4%E5%85%A8%E7%BE%8A%E4%BA%8B%E4%BB%B6%E6%B6%89%E4%BA%8B%E6%B0%91%E5%AE%BF%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5)
1. [雷军APEC发言](https://www.zhihu.com/search?q=%E9%9B%B7%E5%86%9BAPEC%E5%8F%91%E8%A8%80)
1. [OpenAI 发布 GPT-6.2 Astra/Sol](https://www.zhihu.com/search?q=OpenAI%20%E5%8F%91%E5%B8%83%20GPT-6.2%20Astra%2FSol)
1. [英伟达将不再向中国销售H200](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B0%86%E4%B8%8D%E5%86%8D%E5%90%91%E4%B8%AD%E5%9B%BD%E9%94%80%E5%94%AEH200)
1. [知乎智能搜索新玩法](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2%E6%96%B0%E7%8E%A9%E6%B3%95)
1. [虞书欣围裙照尺度争议](https://www.zhihu.com/search?q=%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9B%B4%E8%A3%99%E7%85%A7%E5%B0%BA%E5%BA%A6%E4%BA%89%E8%AE%AE)
1. [DeepSeek调整对话上限长度](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4%E5%AF%B9%E8%AF%9D%E4%B8%8A%E9%99%90%E9%95%BF%E5%BA%A6)
1. [失业男子断供房贷被判非恶意断供](https://www.zhihu.com/search?q=%E5%A4%B1%E4%B8%9A%E7%94%B7%E5%AD%90%E6%96%AD%E4%BE%9B%E6%88%BF%E8%B4%B7%E8%A2%AB%E5%88%A4%E9%9D%9E%E6%81%B6%E6%84%8F%E6%96%AD%E4%BE%9B)
1. [英伟达工程师戴士钦宣布离职](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B7%A5%E7%A8%8B%E5%B8%88%E6%88%B4%E5%A3%AB%E9%92%A6%E5%AE%A3%E5%B8%83%E7%A6%BB%E8%81%8C)
1. [湘雅二医院被曝全AI论文](https://www.zhihu.com/search?q=%E6%B9%98%E9%9B%85%E4%BA%8C%E5%8C%BB%E9%99%A2%E8%A2%AB%E6%9B%9D%E5%85%A8AI%E8%AE%BA%E6%96%87)
1. [曝黄仁勋考虑重返英伟达](https://www.zhihu.com/search?q=%E6%9B%9D%E9%BB%84%E4%BB%81%E5%8B%8B%E8%80%83%E8%99%91%E9%87%8D%E8%BF%94%E8%8B%B1%E4%BC%9F%E8%BE%BE)
1. [地方债三年间减少11万亿](https://www.zhihu.com/search?q=%E5%9C%B0%E6%96%B9%E5%80%BA%E4%B8%89%E5%B9%B4%E9%97%B4%E5%87%8F%E5%B0%9111%E4%B8%87%E4%BA%BF)
1. [BLG 夺冠](https://www.zhihu.com/search?q=BLG%20%E5%A4%BA%E5%86%A0)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Nov 18 2026 12:24:10 GMT+0800 (China Standard Time) -->

1. [雷军APEC发言称过去几年挣到钱的 AI 公司很少，认为具身智能产业想象力将超汽车产业，对此你怎么看？](https://www.zhihu.com/question/2106085808956560100)
1. [女子在盒马下单四百多次全部申请仅退款，称「刺激解压」，明知不光彩还是忍不住下单，如何从心理学角度解读？](https://www.zhihu.com/question/2106047811234030300)
1. [劝表弟读博，他说现在的博士已经不是前几年了，真是这样吗？](https://www.zhihu.com/question/2104959116976329000)
1. [网传生菜「塌房」了，看似健康其实膳食纤维的含量很低，是真的吗？](https://www.zhihu.com/question/2105731473911146500)
1. [曝《GTA6》PC 版将于 2027 年第一季度发售，为何 R 星双平台间隔会进一步缩短？](https://www.zhihu.com/question/2093489092713526500)
1. [怎么看 JetBrains 成立 20 年来第一次亏损，这是不是代表了一个时代的结束？](https://www.zhihu.com/question/2106013584778175200)
1. [同台亮相APEC，王传福谈新能源减排，雷军畅享AI未来，如何看待两位大佬的“殊途同归”？](https://www.zhihu.com/question/2106096949791408600)
1. [BLG在联赛内组建梦之队一家独大真的有利于联赛发展吗？](https://www.zhihu.com/question/2105600105885836800)
1. [不少「固收+」理财近 1 个月收益为负，「固收+」里的「+」通常加了什么？它会带来哪些额外风险？](https://www.zhihu.com/question/2105963047525114400)
1. [小孩耍脾气躺地不起，家长撒手离去，随后孩子被轿车碾压，在孩子闹情绪时，家长如何引导才有效又解决问题？](https://www.zhihu.com/question/664242324)
1. [丘成桐以求真院长身份在人民日报撰文，称「五到十年内有望本土培养出领军数学家」，如何理解他的这篇文章？](https://www.zhihu.com/question/2105991418887893500)
1. [杨瀚森垃圾时间登场被安排执行砍鲨战术短时间 5 犯，这一安排合理吗？](https://www.zhihu.com/question/2106007472783751000)
1. [为什么近期国产3A动作游戏（《黑神话：悟空》《明末：渊虚之羽》《影之刃零》）普遍走暗黑压抑风格？](https://www.zhihu.com/question/2106055989501993500)
1. [48 岁律师与法援对象沟通时突发脑溢血去世，交五险却无法享受工亡待遇，为啥会出现这种情况？](https://www.zhihu.com/question/2106058517216024000)
1. [波司登王力宏同款羽绒服售价 2399 元至 5999 元，仅售 16 件，波司登高端化之路走错了吗？](https://www.zhihu.com/question/2105450993685213400)
1. [医学生就业工作真的很难吗？](https://www.zhihu.com/question/1910660324329239800)
1. [《影之刃零》二周目继承全部武装、饰品与技能，实际游玩体验如何？](https://www.zhihu.com/question/2100234766876525300)
1. [github上有哪些有趣的项目？](https://www.zhihu.com/question/66863799)
1. [初代新能源车集中出保，电池换包价赶超二手车价，想修无渠道，想换不划算，车主该怎么办？](https://www.zhihu.com/question/2103903193642095000)
1. [前 PS 高管称 PS6 性能升级不重要，价格便宜才是好，这个观点合理吗？](https://www.zhihu.com/question/2102832555426895400)
1. [英伟达新任董事长哈维·琼斯表示，无意让黄仁勋回归重新担任 CEO，为何态度如此坚决？背后有哪些考量？](https://www.zhihu.com/question/2106289433519416000)
1. [61 岁女子登机口抛硬币祈福致航班延误 58 分钟被拘 5 日，该处罚尺度是否合理？](https://www.zhihu.com/question/2105818186549666800)
1. [洗衣机「15 分钟快洗」模式洗不干净衣物，为什么厂商还要设置这一功能？](https://www.zhihu.com/question/1970439468998717700)
1. [有哪些「很下酒」的菜?](https://www.zhihu.com/question/1928864190287806700)
1. [连续坚持10秒不呼吸就奖励100元，每再坚持1秒，奖励就会翻倍一次，你认为你能赚多少？](https://www.zhihu.com/question/2104407572514092000)
1. [精力充沛的人是怎么做到的？](https://www.zhihu.com/question/15147461541)
1. [为什么飞机不能飞过西藏？](https://www.zhihu.com/question/65375264)
1. [U19 国足 2-1 战胜韩国，时隔 8 年再夺熊猫杯冠军，如何评价本场比赛？](https://www.zhihu.com/question/2106138950708323600)
1. [看了《后会友期》后，你有什么样的感想？](https://www.zhihu.com/question/2101142375158526000)
1. [如何评价 TGA2026完整的游戏提名名单？](https://www.zhihu.com/question/2106200832119199500)
1. [特朗普启程亚洲行，准备参与 APEC 会议，称「可能与金正恩委员长会面」，哪些信息值得关注？](https://www.zhihu.com/question/2105949199779086300)
1. [字节能做出超越腾讯的聊天软件吗？](https://www.zhihu.com/question/2106049410635231500)
1. [Doggo 就抢女友事件致歉「这完全是我个人的错，没有任何借口」，对此你有什么想说的？](https://www.zhihu.com/question/2105973381002519300)
1. [如何评价信小呆中1亿锦鲤大奖，奖品多为代金券、一度花光积蓄？普通人遇上这种天降流量，该怎么选才不亏？](https://www.zhihu.com/question/2106009181564178400)
1. [国足友谊赛，中国男足 2-2 巴林，拜合拉木、张玉宁破门、王钰栋造点，如何评价本场比赛双方的表现？](https://www.zhihu.com/question/2106123425273968400)
1. [美联储主席警告美国 AI 热潮若落空将致美股大跌失业率攀升，该判断有哪些现实依据？](https://www.zhihu.com/question/2105947087221412900)
1. [现在的AI剧制作越来越精良，不久的将来，它是否会完全抢占真人剧市场？](https://www.zhihu.com/question/2054598994492396500)
1. [如何看待在家教市场上，清北大一新生的兼职时薪比很多经验丰富的老教师都多？](https://www.zhihu.com/question/2105699450907780600)
1. [《地下城与勇士》怀旧服定于 2027 年上线，你认为「八百万勇士」能否如期回归？](https://www.zhihu.com/question/2022437072498083000)
1. [为何芒果能精准抓住 NPD特质这一元素，并找到嘉宾做出多档爆款综艺？现实生活中真有这么多 NPD 吗？](https://www.zhihu.com/question/2088256382164105000)
1. [最新研究显示全球冰冻圈已突破安全底线，部分变化不可逆，会带来什么影响？普通人能怎么应对？](https://www.zhihu.com/question/2105719588914840800)
1. [本山大叔的“慌啥子嘛”能治愈么？](https://www.zhihu.com/question/2105295066294116900)
1. [孩子刚上初中就发现语文成绩特别不好，有没有什么好的方法提高成绩？](https://www.zhihu.com/question/492306156)
1. [中国985大学是否全部进入世界前1000？](https://www.zhihu.com/question/2105232985708566000)
1. [中国汽车出口增长趋势是否可持续?](https://www.zhihu.com/question/2080253961152488200)
1. [现货黄金创年内新低，金饰克价回撤超540元，50克金镯账面缩水2.7万，现在该抄底吗？](https://www.zhihu.com/question/2105707069491958300)
1. [在职场，被当众指责该怎么回击？](https://www.zhihu.com/question/2067224625583494400)
1. [为什么BLG放弃全华班就夺冠了？](https://www.zhihu.com/question/2105323260577633500)
1. [为什么在家带娃会比上班还要累？](https://www.zhihu.com/question/2105934835910972000)
1. [英伟达空头大赚超240亿美元，特朗普、索罗斯等财团高位密集减持，但散户却持续抄底，对此你怎么看？](https://www.zhihu.com/question/2105939960176165600)
1. [有哪些看似奇特的饮食吃法，其实是当地人因为地理气候而演化出的生存智慧？](https://www.zhihu.com/question/2104260379253724000)
1. [大学生活费是按月给好，还是按周给好？](https://www.zhihu.com/question/2104174043566024000)
1. [如何评价《影之刃零》在庞镇里塞进一个骨婉约这样的小boss？](https://www.zhihu.com/question/2102325874158842600)
1. [现在真的不推荐读博吗？](https://www.zhihu.com/question/2103547320075810000)
1. [纵观历史几千年，为什么科技才近一两百年发生了质的飞跃，有了电话、飞机、火车，那么之前的人们在干嘛去了？](https://www.zhihu.com/question/46853150)

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
<!-- 最后更新时间 Wed Nov 18 2026 12:33:00 GMT+0800 (China Standard Time) -->

1. [习近平出席APEC工商领导人峰会开幕式](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%87%BA%E5%B8%ADAPEC%E5%B7%A5%E5%95%86%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B3%B0%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%23&Refer=new_time)
1. [APEC](https://s.weibo.com//weibo?q=APEC&t=31&band_rank=1&Refer=top)
1. [深圳机场成了APEC随行团打卡点](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9C%BA%E5%9C%BA%E6%88%90%E4%BA%86APEC%E9%9A%8F%E8%A1%8C%E5%9B%A2%E6%89%93%E5%8D%A1%E7%82%B9%23&t=31&band_rank=2&Refer=top)
1. [APEC中国年这些知识点不容错过](https://s.weibo.com//weibo?q=%23APEC%E4%B8%AD%E5%9B%BD%E5%B9%B4%E8%BF%99%E4%BA%9B%E7%9F%A5%E8%AF%86%E7%82%B9%E4%B8%8D%E5%AE%B9%E9%94%99%E8%BF%87%23&t=31&band_rank=3&Refer=top)
1. [深圳人全妆出街迎APEC](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E5%85%A8%E5%A6%86%E5%87%BA%E8%A1%97%E8%BF%8EAPEC%23&t=31&band_rank=4&Refer=top)
1. [王楚钦孙颖莎总决赛混双外卡](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%80%BB%E5%86%B3%E8%B5%9B%E6%B7%B7%E5%8F%8C%E5%A4%96%E5%8D%A1%23&t=31&band_rank=5&Refer=top)
1. [宝珠](https://s.weibo.com//weibo?q=%E5%AE%9D%E7%8F%A0&t=31&band_rank=6&Refer=top)
1. [王传福王兴雷军绝密群聊](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BC%A0%E7%A6%8F%E7%8E%8B%E5%85%B4%E9%9B%B7%E5%86%9B%E7%BB%9D%E5%AF%86%E7%BE%A4%E8%81%8A%23&t=31&band_rank=7&Refer=top)
1. [APEC合影](https://s.weibo.com//weibo?q=%23APEC%E5%90%88%E5%BD%B1%23&t=31&band_rank=8&Refer=top)
1. [两京十五日](https://s.weibo.com//weibo?q=%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5&t=31&band_rank=9&Refer=top)
1. [李在明夫妇向中方迎宾人员鼓掌致意](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%A4%AB%E5%A6%87%E5%90%91%E4%B8%AD%E6%96%B9%E8%BF%8E%E5%AE%BE%E4%BA%BA%E5%91%98%E9%BC%93%E6%8E%8C%E8%87%B4%E6%84%8F%23&t=31&band_rank=10&Refer=top)
1. [陆毅女儿贝儿正式出道](https://s.weibo.com//weibo?q=%23%E9%99%86%E6%AF%85%E5%A5%B3%E5%84%BF%E8%B4%9D%E5%84%BF%E6%AD%A3%E5%BC%8F%E5%87%BA%E9%81%93%23&t=31&band_rank=11&Refer=top)
1. [游客曝1600的烤全羊剥不出1两肉](https://s.weibo.com//weibo?q=%23%E6%B8%B8%E5%AE%A2%E6%9B%9D1600%E7%9A%84%E7%83%A4%E5%85%A8%E7%BE%8A%E5%89%A5%E4%B8%8D%E5%87%BA1%E4%B8%A4%E8%82%89%23&t=31&band_rank=12&Refer=top)
1. [高市早苗向中方代表打招呼姿态引热议](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%90%91%E4%B8%AD%E6%96%B9%E4%BB%A3%E8%A1%A8%E6%89%93%E6%8B%9B%E5%91%BC%E5%A7%BF%E6%80%81%E5%BC%95%E7%83%AD%E8%AE%AE%23&t=31&band_rank=13&Refer=top)
1. [黄金](https://s.weibo.com//weibo?q=%E9%BB%84%E9%87%91&t=31&band_rank=14&Refer=top)
1. [郑恺女儿英文水平超过不少大学生了](https://s.weibo.com//weibo?q=%23%E9%83%91%E6%81%BA%E5%A5%B3%E5%84%BF%E8%8B%B1%E6%96%87%E6%B0%B4%E5%B9%B3%E8%B6%85%E8%BF%87%E4%B8%8D%E5%B0%91%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%BA%86%23&t=31&band_rank=15&Refer=top)
1. [蔚来高管回应爸爸我爱你违规](https://s.weibo.com//weibo?q=%23%E8%94%9A%E6%9D%A5%E9%AB%98%E7%AE%A1%E5%9B%9E%E5%BA%94%E7%88%B8%E7%88%B8%E6%88%91%E7%88%B1%E4%BD%A0%E8%BF%9D%E8%A7%84%23&t=31&band_rank=16&Refer=top)
1. [黄晓明杨颖都看了BIGBANG演唱会](https://s.weibo.com//weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E6%9D%A8%E9%A2%96%E9%83%BD%E7%9C%8B%E4%BA%86BIGBANG%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=17&Refer=top)
1. [峨眉山来了群女弟子](https://s.weibo.com//weibo?q=%E5%B3%A8%E7%9C%89%E5%B1%B1%E6%9D%A5%E4%BA%86%E7%BE%A4%E5%A5%B3%E5%BC%9F%E5%AD%90&t=31&band_rank=18&Refer=top)
1. [杨超越都要考古了](https://s.weibo.com//weibo?q=%E6%9D%A8%E8%B6%85%E8%B6%8A%E9%83%BD%E8%A6%81%E8%80%83%E5%8F%A4%E4%BA%86&t=31&band_rank=19&Refer=top)
1. [江南 拒绝芒果](https://s.weibo.com//weibo?q=%E6%B1%9F%E5%8D%97%20%E6%8B%92%E7%BB%9D%E8%8A%92%E6%9E%9C&t=31&band_rank=20&Refer=top)
1. [难怪郑恺高考成绩可以上复旦](https://s.weibo.com//weibo?q=%23%E9%9A%BE%E6%80%AA%E9%83%91%E6%81%BA%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%E5%8F%AF%E4%BB%A5%E4%B8%8A%E5%A4%8D%E6%97%A6%23&t=31&band_rank=21&Refer=top)
1. [WTT](https://s.weibo.com//weibo?q=WTT&t=31&band_rank=22&Refer=top)
1. [Canyon决赛不清楚怎么帮边线](https://s.weibo.com//weibo?q=%23Canyon%E5%86%B3%E8%B5%9B%E4%B8%8D%E6%B8%85%E6%A5%9A%E6%80%8E%E4%B9%88%E5%B8%AE%E8%BE%B9%E7%BA%BF%23&t=31&band_rank=23&Refer=top)
1. [王力宏的非凡就是不烦](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%9A%84%E9%9D%9E%E5%87%A1%E5%B0%B1%E6%98%AF%E4%B8%8D%E7%83%A6%23&t=31&band_rank=24&Refer=top)
1. [庞颖说许飞是个每天读童话的屠夫](https://s.weibo.com//weibo?q=%23%E5%BA%9E%E9%A2%96%E8%AF%B4%E8%AE%B8%E9%A3%9E%E6%98%AF%E4%B8%AA%E6%AF%8F%E5%A4%A9%E8%AF%BB%E7%AB%A5%E8%AF%9D%E7%9A%84%E5%B1%A0%E5%A4%AB%23&t=31&band_rank=25&Refer=top)
1. [Tim吐槽苹果homeview](https://s.weibo.com//weibo?q=%23Tim%E5%90%90%E6%A7%BD%E8%8B%B9%E6%9E%9Chomeview%23&t=31&band_rank=26&Refer=top)
1. [供应商快被车企拖死了](https://s.weibo.com//weibo?q=%E4%BE%9B%E5%BA%94%E5%95%86%E5%BF%AB%E8%A2%AB%E8%BD%A6%E4%BC%81%E6%8B%96%E6%AD%BB%E4%BA%86&t=31&band_rank=27&Refer=top)
1. [内娱下星二代了](https://s.weibo.com//weibo?q=%E5%86%85%E5%A8%B1%E4%B8%8B%E6%98%9F%E4%BA%8C%E4%BB%A3%E4%BA%86&t=31&band_rank=28&Refer=top)
1. [129万一针抗癌药进医保](https://s.weibo.com//weibo?q=%23129%E4%B8%87%E4%B8%80%E9%92%88%E6%8A%97%E7%99%8C%E8%8D%AF%E8%BF%9B%E5%8C%BB%E4%BF%9D%23&t=31&band_rank=29&Refer=top)
1. [中方支持成立世界湾区经济合作联盟](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E6%96%B9%E6%94%AF%E6%8C%81%E6%88%90%E7%AB%8B%E4%B8%96%E7%95%8C%E6%B9%BE%E5%8C%BA%E7%BB%8F%E6%B5%8E%E5%90%88%E4%BD%9C%E8%81%94%E7%9B%9F%23&t=31&band_rank=30&Refer=top)
1. [怪不得许飞爆了一个月还是0商务](https://s.weibo.com//weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%AE%B8%E9%A3%9E%E7%88%86%E4%BA%86%E4%B8%80%E4%B8%AA%E6%9C%88%E8%BF%98%E6%98%AF0%E5%95%86%E5%8A%A1%23&t=31&band_rank=31&Refer=top)
1. [盒马仅退款400次女子认罪认罚](https://s.weibo.com//weibo?q=%23%E7%9B%92%E9%A9%AC%E4%BB%85%E9%80%80%E6%AC%BE400%E6%AC%A1%E5%A5%B3%E5%AD%90%E8%AE%A4%E7%BD%AA%E8%AE%A4%E7%BD%9A%23&t=31&band_rank=32&Refer=top)
1. [韩网热议海外韩剧粉爬墙中剧](https://s.weibo.com//weibo?q=%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AE%E6%B5%B7%E5%A4%96%E9%9F%A9%E5%89%A7%E7%B2%89%E7%88%AC%E5%A2%99%E4%B8%AD%E5%89%A7&t=31&band_rank=33&Refer=top)
1. [奶茶店推出半米高超长杯奶茶](https://s.weibo.com//weibo?q=%23%E5%A5%B6%E8%8C%B6%E5%BA%97%E6%8E%A8%E5%87%BA%E5%8D%8A%E7%B1%B3%E9%AB%98%E8%B6%85%E9%95%BF%E6%9D%AF%E5%A5%B6%E8%8C%B6%23&t=31&band_rank=34&Refer=top)
1. [41人没症状被AI查出早期肠癌](https://s.weibo.com//weibo?q=%2341%E4%BA%BA%E6%B2%A1%E7%97%87%E7%8A%B6%E8%A2%ABAI%E6%9F%A5%E5%87%BA%E6%97%A9%E6%9C%9F%E8%82%A0%E7%99%8C%23&t=31&band_rank=35&Refer=top)
1. [普京罕见没有提黑色手提箱保镖贴身随行](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E7%BD%95%E8%A7%81%E6%B2%A1%E6%9C%89%E6%8F%90%E9%BB%91%E8%89%B2%E6%89%8B%E6%8F%90%E7%AE%B1%E4%BF%9D%E9%95%96%E8%B4%B4%E8%BA%AB%E9%9A%8F%E8%A1%8C%23&t=31&band_rank=36&Refer=top)
1. [容错率大到你难以想象](https://s.weibo.com//weibo?q=%23%E5%AE%B9%E9%94%99%E7%8E%87%E5%A4%A7%E5%88%B0%E4%BD%A0%E9%9A%BE%E4%BB%A5%E6%83%B3%E8%B1%A1%23&t=31&band_rank=37&Refer=top)
1. [杨瀚森 开拓者](https://s.weibo.com//weibo?q=%E6%9D%A8%E7%80%9A%E6%A3%AE%20%E5%BC%80%E6%8B%93%E8%80%85&t=31&band_rank=38&Refer=top)
1. [终于轮到九零后被叫大爷了](https://s.weibo.com//weibo?q=%E7%BB%88%E4%BA%8E%E8%BD%AE%E5%88%B0%E4%B9%9D%E9%9B%B6%E5%90%8E%E8%A2%AB%E5%8F%AB%E5%A4%A7%E7%88%B7%E4%BA%86&t=31&band_rank=39&Refer=top)
1. [峨眉山来了群女弟子31公里拉练](https://s.weibo.com//weibo?q=%23%E5%B3%A8%E7%9C%89%E5%B1%B1%E6%9D%A5%E4%BA%86%E7%BE%A4%E5%A5%B3%E5%BC%9F%E5%AD%9031%E5%85%AC%E9%87%8C%E6%8B%89%E7%BB%83%23&t=31&band_rank=40&Refer=top)
1. [今天是太阳雨收视5连冠](https://s.weibo.com//weibo?q=%23%E4%BB%8A%E5%A4%A9%E6%98%AF%E5%A4%AA%E9%98%B3%E9%9B%A8%E6%94%B6%E8%A7%865%E8%BF%9E%E5%86%A0%23&t=31&band_rank=41&Refer=top)
1. [董思成 升咖](https://s.weibo.com//weibo?q=%E8%91%A3%E6%80%9D%E6%88%90%20%E5%8D%87%E5%92%96&t=31&band_rank=42&Refer=top)
1. [刘涛秦岚虞书欣金晨蔡文静自拍](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%B6%9B%E7%A7%A6%E5%B2%9A%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%87%91%E6%99%A8%E8%94%A1%E6%96%87%E9%9D%99%E8%87%AA%E6%8B%8D%23&t=31&band_rank=43&Refer=top)
1. [雷军晒深圳风景](https://s.weibo.com//weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%92%E6%B7%B1%E5%9C%B3%E9%A3%8E%E6%99%AF%23&t=31&band_rank=44&Refer=top)
1. [金价一直下跌原因](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%80%E7%9B%B4%E4%B8%8B%E8%B7%8C%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=45&Refer=top)
1. [看BIGBANG演唱会的明星](https://s.weibo.com//weibo?q=%23%E7%9C%8BBIGBANG%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E6%98%8E%E6%98%9F%23&t=31&band_rank=46&Refer=top)
1. [东风日产NX7聪明舒服还好开](https://s.weibo.com//weibo?q=%23%E4%B8%9C%E9%A3%8E%E6%97%A5%E4%BA%A7NX7%E8%81%AA%E6%98%8E%E8%88%92%E6%9C%8D%E8%BF%98%E5%A5%BD%E5%BC%80%23&t=31&band_rank=47&Refer=top)
1. [APEC盛会上的中国红旗](https://s.weibo.com//weibo?q=%23APEC%E7%9B%9B%E4%BC%9A%E4%B8%8A%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%BA%A2%E6%97%97%23&t=31&band_rank=48&Refer=top)
1. [王传福王兴雷军演我和朋友的日常](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BC%A0%E7%A6%8F%E7%8E%8B%E5%85%B4%E9%9B%B7%E5%86%9B%E6%BC%94%E6%88%91%E5%92%8C%E6%9C%8B%E5%8F%8B%E7%9A%84%E6%97%A5%E5%B8%B8%23&t=31&band_rank=49&Refer=top)
1. [杨超越八年终于有人生角色](https://s.weibo.com//weibo?q=%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%85%AB%E5%B9%B4%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E7%94%9F%E8%A7%92%E8%89%B2&t=31&band_rank=50&Refer=top)
1. [亚太是我们的共同家园](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E5%A4%AA%E6%98%AF%E6%88%91%E4%BB%AC%E7%9A%84%E5%85%B1%E5%90%8C%E5%AE%B6%E5%9B%AD%23&Refer=new_time)
1. [普京凌晨抵达深圳现场画面](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E5%87%8C%E6%99%A8%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23&t=31&band_rank=1&Refer=top)
1. [豆包加聊天功能或威胁微信](https://s.weibo.com//weibo?q=%E8%B1%86%E5%8C%85%E5%8A%A0%E8%81%8A%E5%A4%A9%E5%8A%9F%E8%83%BD%E6%88%96%E5%A8%81%E8%83%81%E5%BE%AE%E4%BF%A1&t=31&band_rank=2&Refer=top)
1. [2026APEC这些看点值得期待](https://s.weibo.com//weibo?q=%232026APEC%E8%BF%99%E4%BA%9B%E7%9C%8B%E7%82%B9%E5%80%BC%E5%BE%97%E6%9C%9F%E5%BE%85%23&t=31&band_rank=3&Refer=top)
1. [字节被指只差聊天软件](https://s.weibo.com//weibo?q=%E5%AD%97%E8%8A%82%E8%A2%AB%E6%8C%87%E5%8F%AA%E5%B7%AE%E8%81%8A%E5%A4%A9%E8%BD%AF%E4%BB%B6&t=31&band_rank=5&Refer=top)
1. [曝厉娜和朋友蛐蛐许飞](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%8E%89%E5%A8%9C%E5%92%8C%E6%9C%8B%E5%8F%8B%E8%9B%90%E8%9B%90%E8%AE%B8%E9%A3%9E%23&t=31&band_rank=6&Refer=top)
1. [快女冠军段林希咋倒嗓成这样](https://s.weibo.com//weibo?q=%23%E5%BF%AB%E5%A5%B3%E5%86%A0%E5%86%9B%E6%AE%B5%E6%9E%97%E5%B8%8C%E5%92%8B%E5%80%92%E5%97%93%E6%88%90%E8%BF%99%E6%A0%B7%23&t=31&band_rank=7&Refer=top)
1. [雷军APEC现场挨个发名片](https://s.weibo.com//weibo?q=%23%E9%9B%B7%E5%86%9BAPEC%E7%8E%B0%E5%9C%BA%E6%8C%A8%E4%B8%AA%E5%8F%91%E5%90%8D%E7%89%87%23&t=31&band_rank=8&Refer=top)
1. [肖战小城良方又加新广](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%8F%88%E5%8A%A0%E6%96%B0%E5%B9%BF%23&t=31&band_rank=9&Refer=top)
1. [字节多领域追赶腾讯](https://s.weibo.com//weibo?q=%E5%AD%97%E8%8A%82%E5%A4%9A%E9%A2%86%E5%9F%9F%E8%BF%BD%E8%B5%B6%E8%85%BE%E8%AE%AF&t=31&band_rank=10&Refer=top)
1. [普京抵达深圳](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%23&t=31&band_rank=11&Refer=top)
1. [一个月一万块这工作普通人干不了](https://s.weibo.com//weibo?q=%E4%B8%80%E4%B8%AA%E6%9C%88%E4%B8%80%E4%B8%87%E5%9D%97%E8%BF%99%E5%B7%A5%E4%BD%9C%E6%99%AE%E9%80%9A%E4%BA%BA%E5%B9%B2%E4%B8%8D%E4%BA%86&t=31&band_rank=12&Refer=top)
1. [BLG赛点局ON高喊别虐泉](https://s.weibo.com//weibo?q=%23BLG%E8%B5%9B%E7%82%B9%E5%B1%80ON%E9%AB%98%E5%96%8A%E5%88%AB%E8%99%90%E6%B3%89%23&t=31&band_rank=13&Refer=top)
1. [虞书欣近1年掉粉118万](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BF%911%E5%B9%B4%E6%8E%89%E7%B2%89118%E4%B8%87%23&t=31&band_rank=14&Refer=top)
1. [杜海涛英语直播 全障碍交流](https://s.weibo.com//weibo?q=%E6%9D%9C%E6%B5%B7%E6%B6%9B%E8%8B%B1%E8%AF%AD%E7%9B%B4%E6%92%AD%20%E5%85%A8%E9%9A%9C%E7%A2%8D%E4%BA%A4%E6%B5%81&t=31&band_rank=15&Refer=top)
1. [TGA2026年度游戏提名公开](https://s.weibo.com//weibo?q=%23TGA2026%E5%B9%B4%E5%BA%A6%E6%B8%B8%E6%88%8F%E6%8F%90%E5%90%8D%E5%85%AC%E5%BC%80%23&t=31&band_rank=16&Refer=top)
1. [小米18真机曝光](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B318%E7%9C%9F%E6%9C%BA%E6%9B%9D%E5%85%89%23&t=31&band_rank=17&Refer=top)
1. [深圳人收起人字拖换皮鞋小白鞋](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E6%94%B6%E8%B5%B7%E4%BA%BA%E5%AD%97%E6%8B%96%E6%8D%A2%E7%9A%AE%E9%9E%8B%E5%B0%8F%E7%99%BD%E9%9E%8B%23&t=31&band_rank=18&Refer=top)
1. [字节产品矩阵缺聊天软件](https://s.weibo.com//weibo?q=%E5%AD%97%E8%8A%82%E4%BA%A7%E5%93%81%E7%9F%A9%E9%98%B5%E7%BC%BA%E8%81%8A%E5%A4%A9%E8%BD%AF%E4%BB%B6&t=31&band_rank=19&Refer=top)
1. [雷军给APEC观众拍合影](https://s.weibo.com//weibo?q=%23%E9%9B%B7%E5%86%9B%E7%BB%99APEC%E8%A7%82%E4%BC%97%E6%8B%8D%E5%90%88%E5%BD%B1%23&t=31&band_rank=20&Refer=top)
1. [满足两个条件暧昧一定会发生](https://s.weibo.com//weibo?q=%E6%BB%A1%E8%B6%B3%E4%B8%A4%E4%B8%AA%E6%9D%A1%E4%BB%B6%E6%9A%A7%E6%98%A7%E4%B8%80%E5%AE%9A%E4%BC%9A%E5%8F%91%E7%94%9F&t=31&band_rank=22&Refer=top)
1. [厉娜听到许飞说免费接私活的表情](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E5%90%AC%E5%88%B0%E8%AE%B8%E9%A3%9E%E8%AF%B4%E5%85%8D%E8%B4%B9%E6%8E%A5%E7%A7%81%E6%B4%BB%E7%9A%84%E8%A1%A8%E6%83%85%23&t=31&band_rank=23&Refer=top)
1. [杨超越说皮肤好的秘诀就是敷面膜](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%AF%B4%E7%9A%AE%E8%82%A4%E5%A5%BD%E7%9A%84%E7%A7%98%E8%AF%80%E5%B0%B1%E6%98%AF%E6%95%B7%E9%9D%A2%E8%86%9C%23&t=31&band_rank=24&Refer=top)
1. [早期肺癌没啥感觉](https://s.weibo.com//weibo?q=%E6%97%A9%E6%9C%9F%E8%82%BA%E7%99%8C%E6%B2%A1%E5%95%A5%E6%84%9F%E8%A7%89&t=31&band_rank=25&Refer=top)
1. [左航表白TOP](https://s.weibo.com//weibo?q=%23%E5%B7%A6%E8%88%AA%E8%A1%A8%E7%99%BDTOP%23&t=31&band_rank=26&Refer=top)
1. [注意力就是爱的直接证明](https://s.weibo.com//weibo?q=%E6%B3%A8%E6%84%8F%E5%8A%9B%E5%B0%B1%E6%98%AF%E7%88%B1%E7%9A%84%E7%9B%B4%E6%8E%A5%E8%AF%81%E6%98%8E&t=31&band_rank=27&Refer=top)
1. [字节 微信](https://s.weibo.com//weibo?q=%E5%AD%97%E8%8A%82%20%E5%BE%AE%E4%BF%A1&t=31&band_rank=28&Refer=top)
1. [曾沛慈说要去声生不息追星](https://s.weibo.com//weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%AF%B4%E8%A6%81%E5%8E%BB%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E8%BF%BD%E6%98%9F%23&t=31&band_rank=29&Refer=top)
1. [小米回应雷军APEC发言紧张](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E9%9B%B7%E5%86%9BAPEC%E5%8F%91%E8%A8%80%E7%B4%A7%E5%BC%A0%23&t=31&band_rank=30&Refer=top)
1. [不要让自己成为任何事情的最后一环](https://s.weibo.com//weibo?q=%E4%B8%8D%E8%A6%81%E8%AE%A9%E8%87%AA%E5%B7%B1%E6%88%90%E4%B8%BA%E4%BB%BB%E4%BD%95%E4%BA%8B%E6%83%85%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E7%8E%AF&t=31&band_rank=31&Refer=top)
1. [拉布拉多没穿警服被当成流浪狗](https://s.weibo.com//weibo?q=%E6%8B%89%E5%B8%83%E6%8B%89%E5%A4%9A%E6%B2%A1%E7%A9%BF%E8%AD%A6%E6%9C%8D%E8%A2%AB%E5%BD%93%E6%88%90%E6%B5%81%E6%B5%AA%E7%8B%97&t=31&band_rank=32&Refer=top)
1. [奚梦瑶白到整个人都在发光](https://s.weibo.com//weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%99%BD%E5%88%B0%E6%95%B4%E4%B8%AA%E4%BA%BA%E9%83%BD%E5%9C%A8%E5%8F%91%E5%85%89%23&t=31&band_rank=33&Refer=top)
1. [英伟达预计第四季度营收超预期](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E9%A2%84%E8%AE%A1%E7%AC%AC%E5%9B%9B%E5%AD%A3%E5%BA%A6%E8%90%A5%E6%94%B6%E8%B6%85%E9%A2%84%E6%9C%9F%23&t=31&band_rank=34&Refer=top)
1. [宝妈坐月子腿疼确诊肺癌晚期](https://s.weibo.com//weibo?q=%23%E5%AE%9D%E5%A6%88%E5%9D%90%E6%9C%88%E5%AD%90%E8%85%BF%E7%96%BC%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%23&t=31&band_rank=35&Refer=top)
1. [肾功能正在崩塌的7个信号](https://s.weibo.com//weibo?q=%E8%82%BE%E5%8A%9F%E8%83%BD%E6%AD%A3%E5%9C%A8%E5%B4%A9%E5%A1%8C%E7%9A%847%E4%B8%AA%E4%BF%A1%E5%8F%B7&t=31&band_rank=36&Refer=top)
1. [这个马吃草的理由太搞笑](https://s.weibo.com//weibo?q=%E8%BF%99%E4%B8%AA%E9%A9%AC%E5%90%83%E8%8D%89%E7%9A%84%E7%90%86%E7%94%B1%E5%A4%AA%E6%90%9E%E7%AC%91&t=31&band_rank=37&Refer=top)
1. [难怪郑恺联合国演讲毫无压力](https://s.weibo.com//weibo?q=%23%E9%9A%BE%E6%80%AA%E9%83%91%E6%81%BA%E8%81%94%E5%90%88%E5%9B%BD%E6%BC%94%E8%AE%B2%E6%AF%AB%E6%97%A0%E5%8E%8B%E5%8A%9B%23&t=31&band_rank=38&Refer=top)
1. [男子的相亲经历比相声还精彩](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E7%9A%84%E7%9B%B8%E4%BA%B2%E7%BB%8F%E5%8E%86%E6%AF%94%E7%9B%B8%E5%A3%B0%E8%BF%98%E7%B2%BE%E5%BD%A9%23&t=31&band_rank=39&Refer=top)
1. [谁说琵琶虾没有肉](https://s.weibo.com//weibo?q=%E8%B0%81%E8%AF%B4%E7%90%B5%E7%90%B6%E8%99%BE%E6%B2%A1%E6%9C%89%E8%82%89&t=31&band_rank=40&Refer=top)
1. [雷军APEC台上台下的反差感](https://s.weibo.com//weibo?q=%23%E9%9B%B7%E5%86%9BAPEC%E5%8F%B0%E4%B8%8A%E5%8F%B0%E4%B8%8B%E7%9A%84%E5%8F%8D%E5%B7%AE%E6%84%9F%23&t=31&band_rank=41&Refer=top)
1. [贾静雯对老公和女儿的态度差异](https://s.weibo.com//weibo?q=%23%E8%B4%BE%E9%9D%99%E9%9B%AF%E5%AF%B9%E8%80%81%E5%85%AC%E5%92%8C%E5%A5%B3%E5%84%BF%E7%9A%84%E6%80%81%E5%BA%A6%E5%B7%AE%E5%BC%82%23&t=31&band_rank=42&Refer=top)
1. [怎么会有人把豆包训成老伴了](https://s.weibo.com//weibo?q=%E6%80%8E%E4%B9%88%E4%BC%9A%E6%9C%89%E4%BA%BA%E6%8A%8A%E8%B1%86%E5%8C%85%E8%AE%AD%E6%88%90%E8%80%81%E4%BC%B4%E4%BA%86&t=31&band_rank=43&Refer=top)
1. [小锁女装](https://s.weibo.com//weibo?q=%E5%B0%8F%E9%94%81%E5%A5%B3%E8%A3%85&t=31&band_rank=44&Refer=top)
1. [双层高铁动卧内部打卡](https://s.weibo.com//weibo?q=%23%E5%8F%8C%E5%B1%82%E9%AB%98%E9%93%81%E5%8A%A8%E5%8D%A7%E5%86%85%E9%83%A8%E6%89%93%E5%8D%A1%23&t=31&band_rank=45&Refer=top)
1. [金价三重冲击](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%89%E9%87%8D%E5%86%B2%E5%87%BB%23&t=31&band_rank=46&Refer=top)
1. [Ruler看BLG捧杯摇头不语](https://s.weibo.com//weibo?q=%23Ruler%E7%9C%8BBLG%E6%8D%A7%E6%9D%AF%E6%91%87%E5%A4%B4%E4%B8%8D%E8%AF%AD%23&t=31&band_rank=47&Refer=top)
1. [原来白小纯说了这么多遍天霸啊](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%AF%B4%E4%BA%86%E8%BF%99%E4%B9%88%E5%A4%9A%E9%81%8D%E5%A4%A9%E9%9C%B8%E5%95%8A%23&t=31&band_rank=48&Refer=top)
1. [猫的树说太阳雨本来只有22集到出国前](https://s.weibo.com//weibo?q=%23%E7%8C%AB%E7%9A%84%E6%A0%91%E8%AF%B4%E5%A4%AA%E9%98%B3%E9%9B%A8%E6%9C%AC%E6%9D%A5%E5%8F%AA%E6%9C%8922%E9%9B%86%E5%88%B0%E5%87%BA%E5%9B%BD%E5%89%8D%23&t=31&band_rank=49&Refer=top)
1. [小锁女装开播五分钟十万人](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E9%94%81%E5%A5%B3%E8%A3%85%E5%BC%80%E6%92%AD%E4%BA%94%E5%88%86%E9%92%9F%E5%8D%81%E4%B8%87%E4%BA%BA%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
