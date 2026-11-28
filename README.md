# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-28 10:42:26

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
<!-- 最后更新时间 Sat Nov 28 2026 06:54:38 GMT+0800 (China Standard Time) -->

1. [国家队抄底力度已超“924”](https://so.toutiao.com/search?keyword=国家队抄底力度已超“924”)
1. [武契奇称一旦绝食将不接受救治](https://so.toutiao.com/search?keyword=武契奇称一旦绝食将不接受救治)
1. [我国知识产权创造量质齐升](https://so.toutiao.com/search?keyword=我国知识产权创造量质齐升)
1. [博主：现金为王时代到来](https://so.toutiao.com/search?keyword=博主：现金为王时代到来)
1. [原来鹅毛大雪是真的](https://so.toutiao.com/search?keyword=原来鹅毛大雪是真的)
1. [又一家车企宣布停产燃油车](https://so.toutiao.com/search?keyword=又一家车企宣布停产燃油车)
1. [正部级蓝天立被判死缓](https://so.toutiao.com/search?keyword=正部级蓝天立被判死缓)
1. [董明珠当魏建军面数次训斥员工](https://so.toutiao.com/search?keyword=董明珠当魏建军面数次训斥员工)
1. [三只松鼠让员工住毛坯房是鼠目寸光](https://so.toutiao.com/search?keyword=三只松鼠让员工住毛坯房是鼠目寸光)
1. [个人大额存单起点降至10万元](https://so.toutiao.com/search?keyword=个人大额存单起点降至10万元)
1. [女子怀疑大爷偷拍 民警查手机无证据](https://so.toutiao.com/search?keyword=女子怀疑大爷偷拍%20民警查手机无证据)
1. [新版九年级下册教材未正式出版](https://so.toutiao.com/search?keyword=新版九年级下册教材未正式出版)
1. [刘亦菲黑色短裙造型](https://so.toutiao.com/search?keyword=刘亦菲黑色短裙造型)
1. [科创板一天收复全年跌幅](https://so.toutiao.com/search?keyword=科创板一天收复全年跌幅)
1. [50余人摘走数百斤橘子仅留下10元](https://so.toutiao.com/search?keyword=50余人摘走数百斤橘子仅留下10元)
1. [被ICE拘留的中国博士被挖出新背景](https://so.toutiao.com/search?keyword=被ICE拘留的中国博士被挖出新背景)
1. [巴基斯坦航天员离开地球的48小时](https://so.toutiao.com/search?keyword=巴基斯坦航天员离开地球的48小时)
1. [央行发布人民币存贷款利率管理规定](https://so.toutiao.com/search?keyword=央行发布人民币存贷款利率管理规定)
1. [广电新规首日部分电视仍有开机广告](https://so.toutiao.com/search?keyword=广电新规首日部分电视仍有开机广告)
1. [菲军方为何主动替解放军行动找理由](https://so.toutiao.com/search?keyword=菲军方为何主动替解放军行动找理由)
1. [69岁葛优带儿子逛商场](https://so.toutiao.com/search?keyword=69岁葛优带儿子逛商场)
1. [特朗普女婿为何罕见警告以色列](https://so.toutiao.com/search?keyword=特朗普女婿为何罕见警告以色列)
1. [大众被建议卖身中国让德国人吵翻了](https://so.toutiao.com/search?keyword=大众被建议卖身中国让德国人吵翻了)
1. [特朗普：普京若想来G20当然可以](https://so.toutiao.com/search?keyword=特朗普：普京若想来G20当然可以)
1. [董明珠回应不招留学生争议](https://so.toutiao.com/search?keyword=董明珠回应不招留学生争议)
1. [孕妇生下裹着完整胎膜的宝宝](https://so.toutiao.com/search?keyword=孕妇生下裹着完整胎膜的宝宝)
1. [华为概念股集体涨停](https://so.toutiao.com/search?keyword=华为概念股集体涨停)
1. [胡歌刘涛新剧吻戏路透](https://so.toutiao.com/search?keyword=胡歌刘涛新剧吻戏路透)
1. [普京与印度AI领域天才少年自拍](https://so.toutiao.com/search?keyword=普京与印度AI领域天才少年自拍)
1. [电视开机广告被禁意义有多大](https://so.toutiao.com/search?keyword=电视开机广告被禁意义有多大)
1. [如何养出健康好肝脏](https://so.toutiao.com/search?keyword=如何养出健康好肝脏)
1. [海康威视取消大小周遭员工抵制](https://so.toutiao.com/search?keyword=海康威视取消大小周遭员工抵制)
1. [为何说内塔尼亚胡竞选翻盘可能性不小](https://so.toutiao.com/search?keyword=为何说内塔尼亚胡竞选翻盘可能性不小)
1. [三只松鼠就员工宿舍脏乱差致歉](https://so.toutiao.com/search?keyword=三只松鼠就员工宿舍脏乱差致歉)
1. [国家队抄底A股释放什么信号](https://so.toutiao.com/search?keyword=国家队抄底A股释放什么信号)
1. [靳伟辞去北京市副市长职务](https://so.toutiao.com/search?keyword=靳伟辞去北京市副市长职务)
1. [王菲22年前专访视频再引关注](https://so.toutiao.com/search?keyword=王菲22年前专访视频再引关注)
1. [特朗普称奥巴马把普京踢出G8是羞辱](https://so.toutiao.com/search?keyword=特朗普称奥巴马把普京踢出G8是羞辱)
1. [奥迪Q9首发亮相](https://so.toutiao.com/search?keyword=奥迪Q9首发亮相)
1. [3.8万管孕妇血样被偷运的三重警示](https://so.toutiao.com/search?keyword=3.8万管孕妇血样被偷运的三重警示)
1. [解放军借珠海航展要传达什么信号](https://so.toutiao.com/search?keyword=解放军借珠海航展要传达什么信号)
1. [马光远：此次稳市政策释放重磅信号](https://so.toutiao.com/search?keyword=马光远：此次稳市政策释放重磅信号)
1. [红军烈士后人终于找到先辈安息之所](https://so.toutiao.com/search?keyword=红军烈士后人终于找到先辈安息之所)
1. [比亚迪仰望汽车高管：仰望就是仰望](https://so.toutiao.com/search?keyword=比亚迪仰望汽车高管：仰望就是仰望)
1. [俄方为何一边展示善意一边敲打日本](https://so.toutiao.com/search?keyword=俄方为何一边展示善意一边敲打日本)
1. [岛内舆论：唯两岸合作能破除美方勒索](https://so.toutiao.com/search?keyword=岛内舆论：唯两岸合作能破除美方勒索)
1. [新一届江苏省委常委亮相](https://so.toutiao.com/search?keyword=新一届江苏省委常委亮相)
1. [神24到底有多重要](https://so.toutiao.com/search?keyword=神24到底有多重要)
1. [胡兵自曝已15年没谈过恋爱](https://so.toutiao.com/search?keyword=胡兵自曝已15年没谈过恋爱)
1. [俄军空天军副司令为何被查](https://so.toutiao.com/search?keyword=俄军空天军副司令为何被查)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Nov 28 2026 05:10:16 GMT+0800 (China Standard Time) -->

1. [蔡磊已进渐冻症终末期](https://www.zhihu.com/search?q=%E8%94%A1%E7%A3%8A%E5%B7%B2%E8%BF%9B%E6%B8%90%E5%86%BB%E7%97%87%E7%BB%88%E6%9C%AB%E6%9C%9F)
1. [男孩为求愉悦感吃20片感冒药](https://www.zhihu.com/search?q=%E7%94%B7%E5%AD%A9%E4%B8%BA%E6%B1%82%E6%84%89%E6%82%A6%E6%84%9F%E5%90%8320%E7%89%87%E6%84%9F%E5%86%92%E8%8D%AF)
1. [腾讯元宝被曝大裁员](https://www.zhihu.com/search?q=%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D%E8%A2%AB%E6%9B%9D%E5%A4%A7%E8%A3%81%E5%91%98)
1. [DeepSeek调整API定价](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4API%E5%AE%9A%E4%BB%B7)
1. [武大教师曾某某被举报事件调查结果](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A4%A7%E6%95%99%E5%B8%88%E6%9B%BE%E6%9F%90%E6%9F%90%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%BA%8B%E4%BB%B6%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C)
1. [黎曼猜想证明压缩至7.6万行](https://www.zhihu.com/search?q=%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E8%AF%81%E6%98%8E%E5%8E%8B%E7%BC%A9%E8%87%B37.6%E4%B8%87%E8%A1%8C)
1. [知乎与DeepSeek开展合作](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E4%B8%8EDeepSeek%E5%BC%80%E5%B1%95%E5%90%88%E4%BD%9C)
1. [女子超40岁被酒店拒绝入住](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E8%B6%8540%E5%B2%81%E8%A2%AB%E9%85%92%E5%BA%97%E6%8B%92%E7%BB%9D%E5%85%A5%E4%BD%8F)
1. [年轻人开始劝父母卖县城空房](https://www.zhihu.com/search?q=%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8A%9D%E7%88%B6%E6%AF%8D%E5%8D%96%E5%8E%BF%E5%9F%8E%E7%A9%BA%E6%88%BF)
1. [11月27日A股行情](https://www.zhihu.com/search?q=11%E6%9C%8827%E6%97%A5A%E8%82%A1%E8%A1%8C%E6%83%85)
1. [商务部称机关单位带头过紧日子](https://www.zhihu.com/search?q=%E5%95%86%E5%8A%A1%E9%83%A8%E7%A7%B0%E6%9C%BA%E5%85%B3%E5%8D%95%E4%BD%8D%E5%B8%A6%E5%A4%B4%E8%BF%87%E7%B4%A7%E6%97%A5%E5%AD%90)
1. [U17国足8-0斐济](https://www.zhihu.com/search?q=U17%E5%9B%BD%E8%B6%B38-0%E6%96%90%E6%B5%8E)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Nov 28 2026 10:42:26 GMT+0800 (China Standard Time) -->

1. [国常会的通稿首次使用了「国家队」、类「平准基金」这些提法，释放了哪些信号？](https://www.zhihu.com/question/2109697976268321300)
1. [《后会友期》「告密门」播出后，厉娜风评光速下滑，网友要求她向许飞道歉，她们的矛盾真的只是友情问题吗？](https://www.zhihu.com/question/2109309669831172600)
1. [如何看待女子称因年龄超 40 岁被酒店拒绝入住？预订平台没有醒目提示，这种规定合法吗？](https://www.zhihu.com/question/2109585824480236000)
1. [如何评价冯骥在《后 AI 时代最重要的问题》一文中的思考和想法？](https://www.zhihu.com/question/2109705664087816200)
1. [模特七海发博表示 「我的脸已经成 AI 短剧里的赛博恶役」，AI 融脸为什么维权难？](https://www.zhihu.com/question/2109242936701478400)
1. [特斯拉和 SpaceX 冲刺年底合并，将成人类史上最大并购案，马斯克为何要合并两家公司？](https://www.zhihu.com/question/2109592384853861600)
1. [雅迪、爱玛、九号等15家电动自行车企业被点名，部分企业涉违法出售不合格产品情况，哪些信息值得关注？](https://www.zhihu.com/question/2109686222276622000)
1. [如何看待济南医保官方视频号工作人员误以为直播结束，骂咨询者脑子有病，医保局回应称已批评教育并要求道歉？](https://www.zhihu.com/question/2109655670127605500)
1. [武汉一烧烤店员工餐有鲍鱼生蚝，大闸蟹基围虾随便吃，老板称「吃饱才有力气干活」，这个福利怎么样？](https://www.zhihu.com/question/2108558920985863700)
1. [商务部开新闻发布会称机关单位带头过紧日子，透露了什么信号？可能有哪些影响？](https://www.zhihu.com/question/2109592991497189000)
1. [海康威视辟谣网传工作新规，称反对以在岗时间替代价值贡献的无效「内卷」，对此你怎么看？](https://www.zhihu.com/question/2109666479654297600)
1. [民航监管部门正研究国内航司整合计划，该方案落地会面临哪些现实难点？](https://www.zhihu.com/question/2109265386894116000)
1. [女子入住上海四千一晚酒店，孩子不慎碰坏一摆件被索赔三千元，远高于采购价，这一索赔标准合理吗？](https://www.zhihu.com/question/2109291472705033200)
1. [能拍出《大明王朝 1566》的导演为什么会在《两京十五日》翻车了？](https://www.zhihu.com/question/2108875718960617200)
1. [招聘为何更看重第一学历而非最高学历？](https://www.zhihu.com/question/2082987252792170000)
1. [三只松鼠被曝CEO与员工薪资相差 23 倍，这个薪资差距在行业里属于什么水平？算高吗？](https://www.zhihu.com/question/2109669812406334200)
1. [如何看待白俄罗斯总统卢卡申科在接受采访时表示「如果追溯历史，整个俄罗斯都应该归蒙古所有」？](https://www.zhihu.com/question/2109299572098995700)
1. [网传「纳米海绵不宜用来洗碗，每磨损一克释放 650 万个微塑料」，是这样吗？用它洗碗安全吗？](https://www.zhihu.com/question/2108211840027313700)
1. [快手第三季度营收 316 亿元，净利润 7.9 亿元，日活 4.17 亿，如何解读这份财报？](https://www.zhihu.com/question/2106815239039752000)
1. [国产显卡过几年是不是也要起来了？](https://www.zhihu.com/question/2107059907736486700)
1. [为什么计算机现在已经不如土木了？](https://www.zhihu.com/question/2101179129135642400)
1. [北大教师右眼被注入工业气体获赔 388 万，顶格惩罚性赔偿的依据是什么？](https://www.zhihu.com/question/2109322061701177900)
1. [既然生孩子又费钱、又费力、又费时间，为什么还有人愿意生？有孩子的人真实感受里，幸福更多还是苦恼更多？](https://www.zhihu.com/question/2108881590663242500)
1. [Intel在CPU上似乎对AMD实现了性能和市占率上的再次压制？发生什么了？](https://www.zhihu.com/question/2108543675601101600)
1. [如何评价《中华小当家》里小当家把朝天椒、蒜蓉和豆瓣酱加到通心粉里，并做成饺子，落败被盘古处决的剧情？](https://www.zhihu.com/question/1930259032301611000)
1. [如果一个月给你8000，但办公室永远只有你一个人，连说话的人都没有，你能坚持多久？](https://www.zhihu.com/question/2107406132625069600)
1. [女生如何练背以及肩膀？](https://www.zhihu.com/question/30209238)
1. [小鹏图灵 AI 智驾官宣 2027 年第二季度推出付费订阅，该模式能否支撑智驾长期迭代？](https://www.zhihu.com/question/2108953959847219500)
1. [不考虑作品质量情况下，中国摇滚如今是否是世界摇滚中最有活力的?](https://www.zhihu.com/question/2072096073968047400)
1. [如果曼联最终不幸降级，国内各大平台会买英冠的版权吗，曼联的球迷足够支撑这个消费吗？](https://www.zhihu.com/question/2109238021992046800)
1. [A股迎史诗级暴涨，沪深两市成交额重回2万亿，创业板指放量大涨超11%，超400只个股涨停，发生了什么？](https://www.zhihu.com/question/2109643924381726700)
1. [如何评价懂车帝最新回应“尊界 V800 刹车踏板支架断裂”事件：公司内部仍在等待相关结果？](https://www.zhihu.com/question/2109005398313391400)
1. [如何看待韩媒爆料，韩国国税厅将向LPL韩援李某（疑似Tarzan）征收35亿韩元综合所得税？](https://www.zhihu.com/question/2109634600578439000)
1. [狮子并非中国的产物，为何石狮子却成了中国的守门神？](https://www.zhihu.com/question/565692238)
1. [媒体曝海康威视取消大小周，严格执行八小时工作制，有员工称每月少近三千元，公司的工时调整为何员工不买账？](https://www.zhihu.com/question/2108244269681189600)
1. [如何看待有人质疑老款问界M9使用圆线电机引发高价低配争议？](https://www.zhihu.com/question/2108966270058108400)
1. [为什么猫的颜色最多只有三种?](https://www.zhihu.com/question/667381276)
1. [如何评价文章《我疆画地为牢》？文章中写员工离职后遭竞业索赔250万，真实情况是这样吗？](https://www.zhihu.com/question/2109630564487492900)
1. [巴渝民众日常为啥喜欢吃豌杂面？](https://www.zhihu.com/question/2108159227390960600)
1. [为什么吕子乔不撩诺澜？](https://www.zhihu.com/question/497073110)
1. [为什么植物大战僵尸现在还受欢迎，而愤怒的小鸟却很少有人玩了？](https://www.zhihu.com/question/2102466524611199500)
1. [中国标准化研究院发布十大最宜居城市，北京、济南、青岛排前三，怎样看待这份榜单？你心中的宜居城市是哪些？](https://www.zhihu.com/question/2109591033314894300)
1. [如果红果短剧改为付费观看，那么结果将如何？](https://www.zhihu.com/question/2108125203414963000)
1. [如何评价纯电718电池在原来中置发动机的位置？](https://www.zhihu.com/question/2096905267929785300)
1. [欧盟落地混动进口临时配额，中国对应配额为 19.18 万辆，国内混动出口车企该如何应对这一限制？](https://www.zhihu.com/question/2108663441766598100)
1. [为什么烧烤店要用铁签子？客人要求打包怎么办？](https://www.zhihu.com/question/1978722841781360000)

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
<!-- 最后更新时间 Sat Nov 28 2026 06:06:28 GMT+0800 (China Standard Time) -->

1. [亚太合作鹏程万里](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E5%A4%AA%E5%90%88%E4%BD%9C%E9%B9%8F%E7%A8%8B%E4%B8%87%E9%87%8C%23&Refer=new_time)
1. [董明珠现场发火魏建军解围](https://s.weibo.com//weibo?q=%E8%91%A3%E6%98%8E%E7%8F%A0%E7%8E%B0%E5%9C%BA%E5%8F%91%E7%81%AB%E9%AD%8F%E5%BB%BA%E5%86%9B%E8%A7%A3%E5%9B%B4&t=31&band_rank=1&Refer=top)
1. [后会友期第三次飞行嘉宾阵容](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%AC%AC%E4%B8%89%E6%AC%A1%E9%A3%9E%E8%A1%8C%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23&t=31&band_rank=2&Refer=top)
1. [180秒回顾神24发射任务](https://s.weibo.com//weibo?q=%23180%E7%A7%92%E5%9B%9E%E9%A1%BE%E7%A5%9E24%E5%8F%91%E5%B0%84%E4%BB%BB%E5%8A%A1%23&t=31&band_rank=3&Refer=top)
1. [千万不要用纸巾包贵重物品](https://s.weibo.com//weibo?q=%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%94%A8%E7%BA%B8%E5%B7%BE%E5%8C%85%E8%B4%B5%E9%87%8D%E7%89%A9%E5%93%81&t=31&band_rank=4&Refer=top)
1. [多平台已下架纸质短剧](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%B7%B2%E4%B8%8B%E6%9E%B6%E7%BA%B8%E8%B4%A8%E7%9F%AD%E5%89%A7%23&t=31&band_rank=5&Refer=top)
1. [厉娜前经纪人张阿瞳发文](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%BC%A0%E9%98%BF%E7%9E%B3%E5%8F%91%E6%96%87%23&t=31&band_rank=6&Refer=top)
1. [马天宇 我都40了肯定有过亲密关系啊](https://s.weibo.com//weibo?q=%E9%A9%AC%E5%A4%A9%E5%AE%87%20%E6%88%91%E9%83%BD40%E4%BA%86%E8%82%AF%E5%AE%9A%E6%9C%89%E8%BF%87%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%95%8A&t=31&band_rank=7&Refer=top)
1. [秦牛正威回应订婚再退婚](https://s.weibo.com//weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E5%9B%9E%E5%BA%94%E8%AE%A2%E5%A9%9A%E5%86%8D%E9%80%80%E5%A9%9A%23&t=31&band_rank=8&Refer=top)
1. [中国母女阿根廷旅游被5名劫匪围攻](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%AF%8D%E5%A5%B3%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%97%85%E6%B8%B8%E8%A2%AB5%E5%90%8D%E5%8A%AB%E5%8C%AA%E5%9B%B4%E6%94%BB%23&t=31&band_rank=9&Refer=top)
1. [见到真正的非暴力沟通了](https://s.weibo.com//weibo?q=%E8%A7%81%E5%88%B0%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%9D%9E%E6%9A%B4%E5%8A%9B%E6%B2%9F%E9%80%9A%E4%BA%86&t=31&band_rank=10&Refer=top)
1. [央行新规取消贷款罚息利率上下限](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A1%8C%E6%96%B0%E8%A7%84%E5%8F%96%E6%B6%88%E8%B4%B7%E6%AC%BE%E7%BD%9A%E6%81%AF%E5%88%A9%E7%8E%87%E4%B8%8A%E4%B8%8B%E9%99%90%23&t=31&band_rank=11&Refer=top)
1. [金价真的大涨了](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E7%9C%9F%E7%9A%84%E5%A4%A7%E6%B6%A8%E4%BA%86%23&t=31&band_rank=12&Refer=top)
1. [三只松鼠一夜整改反而让人唏嘘](https://s.weibo.com//weibo?q=%23%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E4%B8%80%E5%A4%9C%E6%95%B4%E6%94%B9%E5%8F%8D%E8%80%8C%E8%AE%A9%E4%BA%BA%E5%94%8F%E5%98%98%23&t=31&band_rank=13&Refer=top)
1. [第一次听说吃雪蛤直接抵制](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%AC%E8%AF%B4%E5%90%83%E9%9B%AA%E8%9B%A4%E7%9B%B4%E6%8E%A5%E6%8A%B5%E5%88%B6&t=31&band_rank=14&Refer=top)
1. [赵昭仪说剧组不吃槟榔的人很少见](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E8%AF%B4%E5%89%A7%E7%BB%84%E4%B8%8D%E5%90%83%E6%A7%9F%E6%A6%94%E7%9A%84%E4%BA%BA%E5%BE%88%E5%B0%91%E8%A7%81%23&t=31&band_rank=15&Refer=top)
1. [U17世界杯亚洲区7队出线](https://s.weibo.com//weibo?q=U17%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BA%9A%E6%B4%B2%E5%8C%BA7%E9%98%9F%E5%87%BA%E7%BA%BF&t=31&band_rank=16&Refer=top)
1. [济南医保骂人主播被解除劳动关系](https://s.weibo.com//weibo?q=%23%E6%B5%8E%E5%8D%97%E5%8C%BB%E4%BF%9D%E9%AA%82%E4%BA%BA%E4%B8%BB%E6%92%AD%E8%A2%AB%E8%A7%A3%E9%99%A4%E5%8A%B3%E5%8A%A8%E5%85%B3%E7%B3%BB%23&t=31&band_rank=17&Refer=top)
1. [Knight力挺JackeyLove](https://s.weibo.com//weibo?q=%23Knight%E5%8A%9B%E6%8C%BAJackeyLove%23&t=31&band_rank=18&Refer=top)
1. [辛芷蕾花少又迎来宣发期](https://s.weibo.com//weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E8%8A%B1%E5%B0%91%E5%8F%88%E8%BF%8E%E6%9D%A5%E5%AE%A3%E5%8F%91%E6%9C%9F%23&t=31&band_rank=19&Refer=top)
1. [赖冠霖摄像不抽烟不喝酒不吃槟榔](https://s.weibo.com//weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E6%91%84%E5%83%8F%E4%B8%8D%E6%8A%BD%E7%83%9F%E4%B8%8D%E5%96%9D%E9%85%92%E4%B8%8D%E5%90%83%E6%A7%9F%E6%A6%94%23&t=31&band_rank=20&Refer=top)
1. [妈妈用四十二岁回应二十一岁](https://s.weibo.com//weibo?q=%E5%A6%88%E5%A6%88%E7%94%A8%E5%9B%9B%E5%8D%81%E4%BA%8C%E5%B2%81%E5%9B%9E%E5%BA%94%E4%BA%8C%E5%8D%81%E4%B8%80%E5%B2%81&t=31&band_rank=21&Refer=top)
1. [妻子出轨生子丈夫选择抚养第三者急了](https://s.weibo.com//weibo?q=%23%E5%A6%BB%E5%AD%90%E5%87%BA%E8%BD%A8%E7%94%9F%E5%AD%90%E4%B8%88%E5%A4%AB%E9%80%89%E6%8B%A9%E6%8A%9A%E5%85%BB%E7%AC%AC%E4%B8%89%E8%80%85%E6%80%A5%E4%BA%86%23&t=31&band_rank=22&Refer=top)
1. [一方不服离婚称仍要追她](https://s.weibo.com//weibo?q=%E4%B8%80%E6%96%B9%E4%B8%8D%E6%9C%8D%E7%A6%BB%E5%A9%9A%E7%A7%B0%E4%BB%8D%E8%A6%81%E8%BF%BD%E5%A5%B9&t=31&band_rank=23&Refer=top)
1. [AG直晋世界赛总决赛](https://s.weibo.com//weibo?q=%23AG%E7%9B%B4%E6%99%8B%E4%B8%96%E7%95%8C%E8%B5%9B%E6%80%BB%E5%86%B3%E8%B5%9B%23&t=31&band_rank=24&Refer=top)
1. [3c](https://s.weibo.com//weibo?q=3c&t=31&band_rank=25&Refer=top)
1. [A股迎史诗级暴涨](https://s.weibo.com//weibo?q=%23A%E8%82%A1%E8%BF%8E%E5%8F%B2%E8%AF%97%E7%BA%A7%E6%9A%B4%E6%B6%A8%23&t=31&band_rank=26&Refer=top)
1. [白小纯真的有人疼](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E7%96%BC%23&t=31&band_rank=27&Refer=top)
1. [花花精英赛MVP](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E8%8A%B1%E7%B2%BE%E8%8B%B1%E8%B5%9BMVP%23&t=31&band_rank=28&Refer=top)
1. [曾经大胃王如今吃一口都奢侈](https://s.weibo.com//weibo?q=%E6%9B%BE%E7%BB%8F%E5%A4%A7%E8%83%83%E7%8E%8B%E5%A6%82%E4%BB%8A%E5%90%83%E4%B8%80%E5%8F%A3%E9%83%BD%E5%A5%A2%E4%BE%88&t=31&band_rank=29&Refer=top)
1. [伞兵看后会友期气到表情失控](https://s.weibo.com//weibo?q=%E4%BC%9E%E5%85%B5%E7%9C%8B%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%B0%94%E5%88%B0%E8%A1%A8%E6%83%85%E5%A4%B1%E6%8E%A7&t=31&band_rank=30&Refer=top)
1. [猫妈气场拉满教训偷跑小猫](https://s.weibo.com//weibo?q=%E7%8C%AB%E5%A6%88%E6%B0%94%E5%9C%BA%E6%8B%89%E6%BB%A1%E6%95%99%E8%AE%AD%E5%81%B7%E8%B7%91%E5%B0%8F%E7%8C%AB&t=31&band_rank=31&Refer=top)
1. [A股放量暴涨 国家队稳市](https://s.weibo.com//weibo?q=A%E8%82%A1%E6%94%BE%E9%87%8F%E6%9A%B4%E6%B6%A8%20%E5%9B%BD%E5%AE%B6%E9%98%9F%E7%A8%B3%E5%B8%82&t=31&band_rank=32&Refer=top)
1. [许飞厉娜对谈剪辑争议](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%E5%AF%B9%E8%B0%88%E5%89%AA%E8%BE%91%E4%BA%89%E8%AE%AE&t=31&band_rank=33&Refer=top)
1. [长子长孙没先结婚被说会断亲](https://s.weibo.com//weibo?q=%E9%95%BF%E5%AD%90%E9%95%BF%E5%AD%99%E6%B2%A1%E5%85%88%E7%BB%93%E5%A9%9A%E8%A2%AB%E8%AF%B4%E4%BC%9A%E6%96%AD%E4%BA%B2&t=31&band_rank=34&Refer=top)
1. [小伊伊老公发离婚判决书](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E4%BC%8A%E4%BC%8A%E8%80%81%E5%85%AC%E5%8F%91%E7%A6%BB%E5%A9%9A%E5%88%A4%E5%86%B3%E4%B9%A6%23&t=31&band_rank=35&Refer=top)
1. [爱上辛芷蕾真的是必然的](https://s.weibo.com//weibo?q=%E7%88%B1%E4%B8%8A%E8%BE%9B%E8%8A%B7%E8%95%BE%E7%9C%9F%E7%9A%84%E6%98%AF%E5%BF%85%E7%84%B6%E7%9A%84&t=31&band_rank=36&Refer=top)
1. [KPL选手直播禁玩三角洲](https://s.weibo.com//weibo?q=%23KPL%E9%80%89%E6%89%8B%E7%9B%B4%E6%92%AD%E7%A6%81%E7%8E%A9%E4%B8%89%E8%A7%92%E6%B4%B2%23&t=31&band_rank=37&Refer=top)
1. [郭律毒舌谈生理性喜欢](https://s.weibo.com//weibo?q=%E9%83%AD%E5%BE%8B%E6%AF%92%E8%88%8C%E8%B0%88%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2&t=31&band_rank=38&Refer=top)
1. [青稚投喂白小纯](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E6%8A%95%E5%96%82%E7%99%BD%E5%B0%8F%E7%BA%AF%23&t=31&band_rank=39&Refer=top)
1. [王俊凯王源易烊千玺现状](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%8E%B0%E7%8A%B6%23&t=31&band_rank=40&Refer=top)
1. [男子去世前曾为已去世女友守灵3天](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E5%89%8D%E6%9B%BE%E4%B8%BA%E5%B7%B2%E5%8E%BB%E4%B8%96%E5%A5%B3%E5%8F%8B%E5%AE%88%E7%81%B53%E5%A4%A9%23&t=31&band_rank=41&Refer=top)
1. [后会友期要录回门宴](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%A6%81%E5%BD%95%E5%9B%9E%E9%97%A8%E5%AE%B4%23&t=31&band_rank=42&Refer=top)
1. [曝369婉拒BLG](https://s.weibo.com//weibo?q=%23%E6%9B%9D369%E5%A9%89%E6%8B%92BLG%23&t=31&band_rank=43&Refer=top)
1. [第五人格赛事](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B5%9B%E4%BA%8B&t=31&band_rank=44&Refer=top)
1. [文吉儿说王子璇都是假意](https://s.weibo.com//weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E8%AF%B4%E7%8E%8B%E5%AD%90%E7%92%87%E9%83%BD%E6%98%AF%E5%81%87%E6%84%8F%23&t=31&band_rank=45&Refer=top)
1. [马天宇回应财务自由](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%9B%9E%E5%BA%94%E8%B4%A2%E5%8A%A1%E8%87%AA%E7%94%B1%23&t=31&band_rank=46&Refer=top)
1. [发现了换手机的最佳时机](https://s.weibo.com//weibo?q=%E5%8F%91%E7%8E%B0%E4%BA%86%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA&t=31&band_rank=47&Refer=top)
1. [赖冠霖对赵昭仪说自己剧组随便坐](https://s.weibo.com//weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E5%AF%B9%E8%B5%B5%E6%98%AD%E4%BB%AA%E8%AF%B4%E8%87%AA%E5%B7%B1%E5%89%A7%E7%BB%84%E9%9A%8F%E4%BE%BF%E5%9D%90%23&t=31&band_rank=48&Refer=top)
1. [2026f1卡塔尔大奖赛](https://s.weibo.com//weibo?q=2026f1%E5%8D%A1%E5%A1%94%E5%B0%94%E5%A4%A7%E5%A5%96%E8%B5%9B&t=31&band_rank=49&Refer=top)
1. [法医刘良称九成学生都是女生](https://s.weibo.com//weibo?q=%23%E6%B3%95%E5%8C%BB%E5%88%98%E8%89%AF%E7%A7%B0%E4%B9%9D%E6%88%90%E5%AD%A6%E7%94%9F%E9%83%BD%E6%98%AF%E5%A5%B3%E7%94%9F%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
