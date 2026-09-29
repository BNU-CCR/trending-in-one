# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-29 23:54:33

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
<!-- 最后更新时间 Wed Sep 30 2026 00:06:54 GMT+0800 (China Standard Time) -->

1. [混合4×100中国夺冠 陈妤颉再添1金](https://so.toutiao.com/search?keyword=混合4×100中国夺冠%20陈妤颉再添1金)
1. [宋佳金鹰奖最佳女主](https://so.toutiao.com/search?keyword=宋佳金鹰奖最佳女主)
1. [人民英雄 永垂不朽](https://so.toutiao.com/search?keyword=人民英雄%20永垂不朽)
1. [陈妤颉最后一棒上演惊天逆转](https://so.toutiao.com/search?keyword=陈妤颉最后一棒上演惊天逆转)
1. [于和伟2026白玉兰金鹰双料视帝](https://so.toutiao.com/search?keyword=于和伟2026白玉兰金鹰双料视帝)
1. [房贷贴息后100万房贷月供能省多少](https://so.toutiao.com/search?keyword=房贷贴息后100万房贷月供能省多少)
1. [陈芋汐赛后落泪：跳水是生命重要部分](https://so.toutiao.com/search?keyword=陈芋汐赛后落泪：跳水是生命重要部分)
1. [特朗普评中美会晤：满分10分我打12分](https://so.toutiao.com/search?keyword=特朗普评中美会晤：满分10分我打12分)
1. [房贷贴息](https://so.toutiao.com/search?keyword=房贷贴息)
1. [张家齐称陈芋汐是天才中的天才](https://so.toutiao.com/search?keyword=张家齐称陈芋汐是天才中的天才)
1. [电竞将退出亚运会？不实](https://so.toutiao.com/search?keyword=电竞将退出亚运会？不实)
1. [杨紫张一山同框](https://so.toutiao.com/search?keyword=杨紫张一山同框)
1. [谁能享受房贷贴息](https://so.toutiao.com/search?keyword=谁能享受房贷贴息)
1. [这5个健康红灯要警惕](https://so.toutiao.com/search?keyword=这5个健康红灯要警惕)
1. [何炅马丽舞台上暖心拥抱](https://so.toutiao.com/search?keyword=何炅马丽舞台上暖心拥抱)
1. [演唱会总导演回应草根歌手侯浪救场](https://so.toutiao.com/search?keyword=演唱会总导演回应草根歌手侯浪救场)
1. [王毅：日本若不汲取历史教训难有未来](https://so.toutiao.com/search?keyword=王毅：日本若不汲取历史教训难有未来)
1. [梅婷获金鹰奖最佳女配角奖](https://so.toutiao.com/search?keyword=梅婷获金鹰奖最佳女配角奖)
1. [国家首次对个人商贷贴息](https://so.toutiao.com/search?keyword=国家首次对个人商贷贴息)
1. [河南矿山发钱现场变财务运动会](https://so.toutiao.com/search?keyword=河南矿山发钱现场变财务运动会)
1. [朱亚文获金鹰最佳男配宋佳哭了](https://so.toutiao.com/search?keyword=朱亚文获金鹰最佳男配宋佳哭了)
1. [宫廷糕点 泼天流量](https://so.toutiao.com/search?keyword=宫廷糕点%20泼天流量)
1. [星舰从烧钱机器变成赚钱工具了吗](https://so.toutiao.com/search?keyword=星舰从烧钱机器变成赚钱工具了吗)
1. [杨德龙谈A股成交额创14个月新低](https://so.toutiao.com/search?keyword=杨德龙谈A股成交额创14个月新低)
1. [为什么越来越多人不愿交物业费了](https://so.toutiao.com/search?keyword=为什么越来越多人不愿交物业费了)
1. [华为外挂“巨炮”专利公开](https://so.toutiao.com/search?keyword=华为外挂“巨炮”专利公开)
1. [李现李一桐合跳《学功夫练武术》](https://so.toutiao.com/search?keyword=李现李一桐合跳《学功夫练武术》)
1. [何立峰会见岩屋毅一行访华团](https://so.toutiao.com/search?keyword=何立峰会见岩屋毅一行访华团)
1. [这份国庆长假追剧片单请收好](https://so.toutiao.com/search?keyword=这份国庆长假追剧片单请收好)
1. [银价为何比金价更脆弱](https://so.toutiao.com/search?keyword=银价为何比金价更脆弱)
1. [医生：40岁后一定要防猝死](https://so.toutiao.com/search?keyword=医生：40岁后一定要防猝死)
1. [日方被指举报亚运竞走冠军穿错鞋](https://so.toutiao.com/search?keyword=日方被指举报亚运竞走冠军穿错鞋)
1. [脑梗真的和洗澡有关吗](https://so.toutiao.com/search?keyword=脑梗真的和洗澡有关吗)
1. [9月A股缩量调整仅两行业收涨](https://so.toutiao.com/search?keyword=9月A股缩量调整仅两行业收涨)
1. [乡村豪宅越来越多说明什么](https://so.toutiao.com/search?keyword=乡村豪宅越来越多说明什么)
1. [自摆乌龙！中国女足无缘决赛](https://so.toutiao.com/search?keyword=自摆乌龙！中国女足无缘决赛)
1. [安眠药开药新规](https://so.toutiao.com/search?keyword=安眠药开药新规)
1. [荣耀Magic9重新定义“拍得能用”](https://so.toutiao.com/search?keyword=荣耀Magic9重新定义“拍得能用”)
1. [台网红“馆长”：两岸统一是大势所趋](https://so.toutiao.com/search?keyword=台网红“馆长”：两岸统一是大势所趋)
1. [张本智和看到妹妹输球仰天翻白眼](https://so.toutiao.com/search?keyword=张本智和看到妹妹输球仰天翻白眼)
1. [媒体人：女足还在踢90年代足球](https://so.toutiao.com/search?keyword=媒体人：女足还在踢90年代足球)
1. [周鸿祎：AI动摇人类认知根基](https://so.toutiao.com/search?keyword=周鸿祎：AI动摇人类认知根基)
1. [国乒队员结束亚运之旅回国](https://so.toutiao.com/search?keyword=国乒队员结束亚运之旅回国)
1. [《兰香如故》导演谈拍摄初衷](https://so.toutiao.com/search?keyword=《兰香如故》导演谈拍摄初衷)
1. [邵永灵谈泽连斯基表示俄已开始动员](https://so.toutiao.com/search?keyword=邵永灵谈泽连斯基表示俄已开始动员)
1. [胡歌带妻女出门被偶遇](https://so.toutiao.com/search?keyword=胡歌带妻女出门被偶遇)
1. [汽车电池竞争转向背后](https://so.toutiao.com/search?keyword=汽车电池竞争转向背后)
1. [“控糖”到底该控什么糖](https://so.toutiao.com/search?keyword=“控糖”到底该控什么糖)
1. [国羽单打为何连续失守](https://so.toutiao.com/search?keyword=国羽单打为何连续失守)
1. [日本经贸代表团为何急着访华](https://so.toutiao.com/search?keyword=日本经贸代表团为何急着访华)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Sep 30 2026 04:43:57 GMT+0800 (China Standard Time) -->

1. [杜淳妻子王灿被骗灌肠](https://www.zhihu.com/search?q=%E6%9D%9C%E6%B7%B3%E5%A6%BB%E5%AD%90%E7%8E%8B%E7%81%BF%E8%A2%AB%E9%AA%97%E7%81%8C%E8%82%A0)
1. [武契奇宣布辞职](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A5%91%E5%A5%87%E5%AE%A3%E5%B8%83%E8%BE%9E%E8%81%8C)
1. [林诗栋 4-0 王楚钦夺金](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B%204-0%20%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E9%87%91)
1. [张家齐妈妈公开念家书批评女儿](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E5%85%AC%E5%BC%80%E5%BF%B5%E5%AE%B6%E4%B9%A6%E6%89%B9%E8%AF%84%E5%A5%B3%E5%84%BF)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [刘欢到退休时仍是副教授](https://www.zhihu.com/search?q=%E5%88%98%E6%AC%A2%E5%88%B0%E9%80%80%E4%BC%91%E6%97%B6%E4%BB%8D%E6%98%AF%E5%89%AF%E6%95%99%E6%8E%88)
1. [张家齐妈妈聊天记录 窒息](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%20%E7%AA%92%E6%81%AF)
1. [王楚钦：不知道为什么就是感觉累](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%EF%BC%9A%E4%B8%8D%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B0%B1%E6%98%AF%E6%84%9F%E8%A7%89%E7%B4%AF)
1. [居民房贷贴息政策 10 月 1 日起实施](https://www.zhihu.com/search?q=%E5%B1%85%E6%B0%91%E6%88%BF%E8%B4%B7%E8%B4%B4%E6%81%AF%E6%94%BF%E7%AD%96%2010%20%E6%9C%88%201%20%E6%97%A5%E8%B5%B7%E5%AE%9E%E6%96%BD)
1. [郑刚实名举报罗永浩偷税漏税](https://www.zhihu.com/search?q=%E9%83%91%E5%88%9A%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E)
1. [2岁娃疑连吃8个月银鳕鱼汞中毒](https://www.zhihu.com/search?q=2%E5%B2%81%E5%A8%83%E7%96%91%E8%BF%9E%E5%90%838%E4%B8%AA%E6%9C%88%E9%93%B6%E9%B3%95%E9%B1%BC%E6%B1%9E%E4%B8%AD%E6%AF%92)
1. [网传将出台全国房贷贴息政策](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E5%B0%86%E5%87%BA%E5%8F%B0%E5%85%A8%E5%9B%BD%E6%88%BF%E8%B4%B7%E8%B4%B4%E6%81%AF%E6%94%BF%E7%AD%96)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Sep 29 2026 23:54:33 GMT+0800 (China Standard Time) -->

1. [居民房贷贴息政策10月1日起实施，年化贴息1%、最长补贴5年，限定房价150万以内，哪些信息值得关注？](https://www.zhihu.com/question/2088328834617811200)
1. [陕西醉驾碾压教师并拖行5.9公里致死案提级审理，罪名变更为故意杀人，法律上如何分析？](https://www.zhihu.com/question/2088119863676089000)
1. [深蓝董事长称车载冰箱使用率 5%，娱乐屏全年使用不足10次，这些配置真的鸡肋吗？那为啥行业在狂卷配置？](https://www.zhihu.com/question/2087587655189881300)
1. [如何看待 AMD 收购李飞飞创立的World Labs，李飞飞将任AMD执行副总裁兼首席科学家？](https://www.zhihu.com/question/2088185975017153500)
1. [媒体追问那英临时加唱是否罚款引热议，「举报式采访」为啥引发争议？媒体这样报道合理吗？](https://www.zhihu.com/question/2088304193140252700)
1. [2 岁娃疑似连吃 8 个月银鳕鱼汞中毒，生产商回应深海野生银鳕天然存在微量汞，儿童食用银鳕鱼安全吗？](https://www.zhihu.com/question/2088189824180266200)
1. [国乒亚运会参加7项，拿下6金4银，仅男团未能夺金，如何评价本届亚运会国乒战绩？](https://www.zhihu.com/question/2088001437158720300)
1. [亚运会男女混4×100米接力决赛，中国队以40秒78夺金，拿下该项目亚运会历史首金，如何评价这场比赛？](https://www.zhihu.com/question/2088247556220400600)
1. [为什么河虾的价格比明虾高那么多？](https://www.zhihu.com/question/3827459284)
1. [怎么看媒体曝 Anthropic 提交 IPO 招股书，25年营收增长12倍，净亏损420亿美元？](https://www.zhihu.com/question/2088194648518947800)
1. [东京奥运前夕，张家齐母亲写了一封满是训诫内容的家书，但教练没有把家书给张家齐，怎样看待教练的做法？](https://www.zhihu.com/question/2087956519622898700)
1. [8.59 元香菜遭「仅退款」，商家驱车千里跨省讨回，如何评价？电商商家维权成本这么高，症结在哪？](https://www.zhihu.com/question/2087999455794566700)
1. [曾风靡全国的五笔为什么逐渐被拼音输入法取代了？](https://www.zhihu.com/question/561899452)
1. [假如我在GPT3.5发布的第三天立刻上线性能对标DeepSeekV4.1的模型会怎么样？](https://www.zhihu.com/question/2086464412991371300)
1. [如何让一个中学生看懂拉格朗日力学？](https://www.zhihu.com/question/462287813)
1. [手机内置广告一直被骂，为什么没有一个厂商出一款纯净无广告的手机，是给的太多了吗？](https://www.zhihu.com/question/2086472782729196800)
1. [排骨炖土豆和排骨炖玉米你喜欢哪个？](https://www.zhihu.com/question/1919453015628317400)
1. [地球上的所有动物都没有穿衣服，还不是活得好好的，为什么只有我们人类才穿衣服，难道不穿衣服就活不了吗？](https://www.zhihu.com/question/2082064671708922600)
1. [到底是薪资决定了态度，还是态度决定了薪资？](https://www.zhihu.com/question/8552961869)
1. [华为 Mate90 系列旗舰定档 10 月 1 日发售，有哪些亮点值得关注？](https://www.zhihu.com/question/2088199945174177300)
1. [有运动员称亚运金牌有「瑕疵」，边缘区域存在色差，组委会连夜更换，为什么会这样？可能是哪些环节出现问题？](https://www.zhihu.com/question/2087090532799308500)
1. [很多人吐槽月饼又甜又腻不好吃，你有同感吗？如果有机会，你会怎么改良/DIY月饼的做法/口味？](https://www.zhihu.com/question/2082963646145983500)
1. [童话故事《手捧空花盆的孩子》国王给每个孩子发了熟的种子，为了验证孩子的诚实，他却用了谎言，怎么解释？](https://www.zhihu.com/question/40312940)
1. [如何评价荣耀Magic9系列起售价 4499 元，在今年集体涨价的大环境下，这个含金量有多高？](https://www.zhihu.com/question/2087863658260984800)
1. [被没练过的普通人拳击一下跟肘击一下哪个伤害更大？](https://www.zhihu.com/question/1997633932955515000)
1. [在和家的朝夕相处中，你对「怎么住更好」这件事有了哪些新的理解或答案？](https://www.zhihu.com/question/2085780301519610400)
1. [格斗家为什么不用鞭锏锤来捶打自己，增加身体的抗击打能力？](https://www.zhihu.com/question/650263507)
1. [一天之计在于晨。你是怎么吃好早餐的？](https://www.zhihu.com/question/2077644474025621200)
1. [世界各国各地区的议会（尤其是两院制的上议院）都有哪些奇特的规定？](https://www.zhihu.com/question/2087187150710256000)
1. [现实中的天才是一种怎样的存在？](https://www.zhihu.com/question/268607001)
1. [从本届亚运会来看，林诗栋夺得 3 金 1 银要成为国乒一哥了吗？](https://www.zhihu.com/question/2087997878270523100)
1. [多地贷款中介集体解散群聊、删除朋友圈，背后原因是什么？会带来哪些影响？](https://www.zhihu.com/question/2087614254006400800)
1. [如何看待联合国专家预测未来七年内全球性战争风险急速攀升？](https://www.zhihu.com/question/2087076854901499400)
1. [网友称Tiffany销售承诺送月饼后将其寄错给他人，吐槽后账号被举报，相关负责人致歉，具体怎么回事？](https://www.zhihu.com/question/2088040289751361300)
1. [为什么摩托车永远成不了主流交通工具？](https://www.zhihu.com/question/2087307863853097200)
1. [怎么看待超长蛋挞的爆红？](https://www.zhihu.com/question/2085307820598105600)
1. [网友吐槽「毫无人性关怀的大厂却总致力于打造出充满人性光辉的产品」，你怎么看待这个观点？](https://www.zhihu.com/question/2087300723268481300)
1. [怎样看待王楚钦称不知道为什么就是感觉累，找不太到之前打球的感觉？他要怎样才能找回之前的状态？](https://www.zhihu.com/question/2088009996894038000)
1. [如何看待我的世界（minecraft）加入了最新的第四个维度 the SIFT？](https://www.zhihu.com/question/2087522332306838300)
1. [如何评价刘欢《从头再来》这首歌？](https://www.zhihu.com/question/2087220367001645600)
1. [旅途中，有哪些古建筑真正配得上「叹为观止」四个字？](https://www.zhihu.com/question/658208644)
1. [广东清远试点免中考，十二年贯通小中高，贯通培育面临着哪些挑战？你认为这一政策值得推广吗？](https://www.zhihu.com/question/2088192687509692700)
1. [现在AI演员的表演能力越来越强，以后是不是都变成了AI演员来演戏了？](https://www.zhihu.com/question/2082774023272919600)
1. [锤子科技前投资人郑刚实名举报罗永浩偷税漏税，罗永浩指其诬告，具体是什么情况？他俩有啥恩怨？](https://www.zhihu.com/question/2087817719617774800)
1. [天山深处崛起「世界最高坝」大石峡水利枢纽，为什么要在干旱缺水的新疆戈壁中截流造个大水库？建起来有多难？](https://www.zhihu.com/question/2086454660316112600)
1. [中国U23男足在时隔28年重返亚运四强后，究竟能否跨越韩国队这座“大山”，真正实现历史性的突破？](https://www.zhihu.com/question/2088197045509215200)
1. [黑胡子导弹是高超音速导弹吗？](https://www.zhihu.com/question/2088055678023758300)
1. [如何看待国羽教练李矛的这段采访谈国家队训练「3000米×6，间隔休息2分钟……真这么干要死人的」？](https://www.zhihu.com/question/2087961937862550300)
1. [如何评价 9 月 28 日发布的Claude Sonnet 5.5？](https://www.zhihu.com/question/2088116998165226000)
1. [一汽大众巨型爆米花机实验，160℃高温+50圈翻滚双重极限测试，是否重新定义了家用纯电车的安全底线？](https://www.zhihu.com/question/2088212579529265700)
1. [2026亚运会乒乓球男单决赛，林诗栋 4-0 王楚钦夺得金牌，如何评价本场比赛？](https://www.zhihu.com/question/2087911809458102800)
1. [印、美联合团队研究称「混凝土中掺入人粪，抗折强度提高 42%」，如何理解该研究的理论和现实意义？](https://www.zhihu.com/question/2087853929207787800)
1. [杭州女子每月花3000元跨省2小时去上海上班，称「算了笔账总体是划算的」，真划算吗？怎样看待她的选择？](https://www.zhihu.com/question/2087928868850112300)
1. [为什么父母总爱说「我都是为了你好」，但我们这代人却最害怕听到这句话？](https://www.zhihu.com/question/2074084739418477000)
1. [曝携程推新规鼓励「无理由事假」，员工休1天无理由事假，团队得600元团建经费，如何看待这种激励方式？](https://www.zhihu.com/question/2087911286118019800)
1. [为什么日式料理中会大量使用酱油和味噌？](https://www.zhihu.com/question/13079900270)
1. [中国男子、女子百米接力双双夺得亚运会金牌，怎样评价这两场比赛？](https://www.zhihu.com/question/2088023546408563200)
1. [哆啦A梦明明拥有无数逆天道具，却似乎没怎么改变大雄的人生，创作者想表达什么？](https://www.zhihu.com/question/2053048540797130500)
1. [如何看待常德一老人因误解养老金政策拾荒 21 年，最终领到 42 万养老金？暴露了背后哪些问题？](https://www.zhihu.com/question/2087842325703520500)
1. [要检查孩子作业，孩子回应「老师要求做完，又没要求做对」来回避检查作业，怎么纠正孩子更好呢？](https://www.zhihu.com/question/1893232431370310000)
1. [林雨薇长文告别国家队，称伤病缠身，赛前「领导劝不必硬拼」，此后将赴福州大学教书，对此你怎么看？](https://www.zhihu.com/question/2087855251550200000)
1. [面对「过紧日子」的要求，大学预算中哪些开支「该紧」，哪些「不该紧」？](https://www.zhihu.com/question/2084700478647039700)
1. [真实历史上的瞎子阿炳是怎样的人？](https://www.zhihu.com/question/497250165)
1. [《复联 4》重映全球首周票房斩获 8600 万美元，为何还能展现出如此强的号召力？](https://www.zhihu.com/question/2087746333335615200)
1. [为啥现在有些人道德水平不高、守法意识薄弱，维权意识却很强烈？](https://www.zhihu.com/question/2087579690596656000)
1. [如何评价《新大头儿子》系列电影被网友吐槽画风诡异、大头儿子像「鬼火少年」？](https://www.zhihu.com/question/2087565298354189600)
1. [我觉得乾隆的字挺好看呀，为什么在书法界评价很低？](https://www.zhihu.com/question/2085453188900168400)
1. [网上都说计算机炸了，为什么现实中一堆转专业到计算机的？](https://www.zhihu.com/question/2075577882076885000)
1. [为什么厂家不把预制菜直接卖给c端用户？省得我叫外卖了?](https://www.zhihu.com/question/1952882788639417900)
1. [王楚钦本届亚运会一金未拿，怎样评价他的状态？打法上可能有哪些问题？](https://www.zhihu.com/question/2087999745213949000)
1. [体育总局局长表示，亚运会部分传统优势项目遇到挑战，成绩不及预期，可能有哪些原因？](https://www.zhihu.com/question/2087828556701241300)
1. [双汇火腿肠销量连续下滑，传统火腿肠为何越来越卖不动？方便面触底反弹，火腿肠却持续下滑，问题出在哪里？](https://www.zhihu.com/question/2087819360249144000)
1. [怎么看 OpenAI 的 Pro 订阅取消 5x 和 20x 的描述？](https://www.zhihu.com/question/2087607174948186000)
1. [沙漠烈日下，用电视播放绿洲画面，能吸引到骆驼吗？](https://www.zhihu.com/question/2087525916880664000)
1. [有网友在雷军评论区下呼吁小米 18 系列推出无防窥版，防窥屏真的很影响体验吗？有啥解决的办法吗？](https://www.zhihu.com/question/2087641499965940200)
1. [亚运会乒乓球女双决赛，王曼昱/蒯曼 4-0 战胜张本美和/早田希娜夺得金牌，如何评价本场比赛？](https://www.zhihu.com/question/2087912811338920000)
1. [如何评价2026年9月米哈游《原神》7.1版本，冰神冰之女皇戏份？](https://www.zhihu.com/question/2086242322979805000)
1. [袁绍三个儿子中谁的能力最突出？能在他死后守住袁家霸业？](https://www.zhihu.com/question/1987412291256332500)
1. [如何评价吴艳妮夺铜后发言「起跑慢因三年前的阴影，我没有被挫折和网暴打败」？](https://www.zhihu.com/question/2087849328337318100)
1. [亚奥理事会回应「电子竞技项目将退出亚运会」，称传闻与工作安排不符，具体是怎么回事？](https://www.zhihu.com/question/2087805520950158600)
1. [火影忍者中的五大国分别对应了哪五个国家？](https://www.zhihu.com/question/36189325)
1. [我国南疆塔克拉玛干沙漠发现两处大型地下水水源，这意味着什么？将对当地生态和经济带来哪些影响？](https://www.zhihu.com/question/2083110699207808800)
1. [可以详细说下从GPT-1到GPT-4，有哪些变化，是如何发展的？](https://www.zhihu.com/question/618248545)
1. [斯内普那么爱莉莉，为什么输给了詹姆？](https://www.zhihu.com/question/359390507)
1. [似乎不少日式西幻作品会设定在遥远的东方有大和的，为什么中式西幻作品却很少有设定在东方有中国的？](https://www.zhihu.com/question/2085346903768749600)
1. [一个人开车跑高速犯困了，除了喝红牛和掐大腿，还有什么真正有效的提神方法？](https://www.zhihu.com/question/2084653683766191600)
1. [中美「300亿对300亿」对等降税框架公布，超90%产品将享受最惠国关税待遇，将带来哪些利好？](https://www.zhihu.com/question/2087868581669070000)
1. [作为父母，如果孩子的理想很平凡，你会尊重孩子吗？](https://www.zhihu.com/question/2082179870243676400)
1. [自己做饭是为了省钱还是健康？](https://www.zhihu.com/question/1999815894617061000)

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
<!-- 最后更新时间 Wed Sep 30 2026 00:00:15 GMT+0800 (China Standard Time) -->

1. [英魂不朽山河永念](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E9%AD%82%E4%B8%8D%E6%9C%BD%E5%B1%B1%E6%B2%B3%E6%B0%B8%E5%BF%B5%23&Refer=new_time)
1. [金鹰奖获奖名单](https://s.weibo.com//weibo?q=%E9%87%91%E9%B9%B0%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=1&Refer=top)
1. [芒果的策划又封神了](https://s.weibo.com//weibo?q=%E8%8A%92%E6%9E%9C%E7%9A%84%E7%AD%96%E5%88%92%E5%8F%88%E5%B0%81%E7%A5%9E%E4%BA%86&t=31&band_rank=2&Refer=top)
1. [遵义三日](https://s.weibo.com//weibo?q=%23%E9%81%B5%E4%B9%89%E4%B8%89%E6%97%A5%23&t=31&band_rank=3&Refer=top)
1. [购房贴息 150万](https://s.weibo.com//weibo?q=%E8%B4%AD%E6%88%BF%E8%B4%B4%E6%81%AF%20150%E4%B8%87&t=31&band_rank=4&Refer=top)
1. [陈梦福原爱第4次交手](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%A2%A6%E7%A6%8F%E5%8E%9F%E7%88%B1%E7%AC%AC4%E6%AC%A1%E4%BA%A4%E6%89%8B%23&t=31&band_rank=5&Refer=top)
1. [泰国洪灾后大量蛇和鳄鱼出没](https://s.weibo.com//weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B4%AA%E7%81%BE%E5%90%8E%E5%A4%A7%E9%87%8F%E8%9B%87%E5%92%8C%E9%B3%84%E9%B1%BC%E5%87%BA%E6%B2%A1%23&t=31&band_rank=6&Refer=top)
1. [家有儿女小雪刘星合体](https://s.weibo.com//weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E5%B0%8F%E9%9B%AA%E5%88%98%E6%98%9F%E5%90%88%E4%BD%93%23&t=31&band_rank=7&Refer=top)
1. [孙怡平遥影后](https://s.weibo.com//weibo?q=%23%E5%AD%99%E6%80%A1%E5%B9%B3%E9%81%A5%E5%BD%B1%E5%90%8E%23&t=31&band_rank=8&Refer=top)
1. [陈妤颉极限反超](https://s.weibo.com//weibo?q=%E9%99%88%E5%A6%A4%E9%A2%89%E6%9E%81%E9%99%90%E5%8F%8D%E8%B6%85&t=31&band_rank=9&Refer=top)
1. [陈梦看亚运会感叹球速快](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%A2%A6%E7%9C%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%84%9F%E5%8F%B9%E7%90%83%E9%80%9F%E5%BF%AB%23&t=31&band_rank=10&Refer=top)
1. [赵丽颖身体到底怎么了](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%BA%AB%E4%BD%93%E5%88%B0%E5%BA%95%E6%80%8E%E4%B9%88%E4%BA%86%23&t=31&band_rank=11&Refer=top)
1. [刘学义不认识杨迪何炅](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E4%B8%8D%E8%AE%A4%E8%AF%86%E6%9D%A8%E8%BF%AA%E4%BD%95%E7%82%85%23&t=31&band_rank=12&Refer=top)
1. [胡歌闫妮别闹了](https://s.weibo.com//weibo?q=%E8%83%A1%E6%AD%8C%E9%97%AB%E5%A6%AE%E5%88%AB%E9%97%B9%E4%BA%86&t=31&band_rank=13&Refer=top)
1. [张家齐妈妈说不能和男孩子开玩笑](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%AF%B4%E4%B8%8D%E8%83%BD%E5%92%8C%E7%94%B7%E5%AD%A9%E5%AD%90%E5%BC%80%E7%8E%A9%E7%AC%91%23&t=31&band_rank=14&Refer=top)
1. [心动9 脚底板](https://s.weibo.com//weibo?q=%E5%BF%83%E5%8A%A89%20%E8%84%9A%E5%BA%95%E6%9D%BF&t=31&band_rank=15&Refer=top)
1. [陈妤颉回应混合接力夺冠](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%E5%9B%9E%E5%BA%94%E6%B7%B7%E5%90%88%E6%8E%A5%E5%8A%9B%E5%A4%BA%E5%86%A0%23&t=31&band_rank=16&Refer=top)
1. [飞天奖](https://s.weibo.com//weibo?q=%E9%A3%9E%E5%A4%A9%E5%A5%96&t=31&band_rank=17&Refer=top)
1. [小巷人家 陪跑](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%20%E9%99%AA%E8%B7%91&t=31&band_rank=18&Refer=top)
1. [Dior春夏大秀万物生长](https://s.weibo.com//weibo?q=%23Dior%E6%98%A5%E5%A4%8F%E5%A4%A7%E7%A7%80%E4%B8%87%E7%89%A9%E7%94%9F%E9%95%BF%23&t=31&band_rank=19&Refer=top)
1. [王传福被选为比亚迪董事会董事长](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BC%A0%E7%A6%8F%E8%A2%AB%E9%80%89%E4%B8%BA%E6%AF%94%E4%BA%9A%E8%BF%AA%E8%91%A3%E4%BA%8B%E4%BC%9A%E8%91%A3%E4%BA%8B%E9%95%BF%23&t=31&band_rank=20&Refer=top)
1. [时代峰峻跨代卡包](https://s.weibo.com//weibo?q=%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%B7%A8%E4%BB%A3%E5%8D%A1%E5%8C%85&t=31&band_rank=21&Refer=top)
1. [王鹤棣不吃压力回应](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%E5%9B%9E%E5%BA%94%23&t=31&band_rank=22&Refer=top)
1. [何炅点名](https://s.weibo.com//weibo?q=%E4%BD%95%E7%82%85%E7%82%B9%E5%90%8D&t=31&band_rank=23&Refer=top)
1. [宋佳金鹰视后](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BD%B3%E9%87%91%E9%B9%B0%E8%A7%86%E5%90%8E%23&t=31&band_rank=24&Refer=top)
1. [男子每天喂鱼把鱼饿死发现鱼粮被拦](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E6%AF%8F%E5%A4%A9%E5%96%82%E9%B1%BC%E6%8A%8A%E9%B1%BC%E9%A5%BF%E6%AD%BB%E5%8F%91%E7%8E%B0%E9%B1%BC%E7%B2%AE%E8%A2%AB%E6%8B%A6%23&t=31&band_rank=25&Refer=top)
1. [Dior大秀](https://s.weibo.com//weibo?q=Dior%E5%A4%A7%E7%A7%80&t=31&band_rank=26&Refer=top)
1. [穆祉丞](https://s.weibo.com//weibo?q=%E7%A9%86%E7%A5%89%E4%B8%9E&t=31&band_rank=27&Refer=top)
1. [金价下跌30岁左右年轻人成消费主力](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C30%E5%B2%81%E5%B7%A6%E5%8F%B3%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%88%90%E6%B6%88%E8%B4%B9%E4%B8%BB%E5%8A%9B%23&t=31&band_rank=28&Refer=top)
1. [破坏夫妻关系最大的杀手](https://s.weibo.com//weibo?q=%E7%A0%B4%E5%9D%8F%E5%A4%AB%E5%A6%BB%E5%85%B3%E7%B3%BB%E6%9C%80%E5%A4%A7%E7%9A%84%E6%9D%80%E6%89%8B&t=31&band_rank=29&Refer=top)
1. [狗熊哆嗦毛示范者是前文旅部司长](https://s.weibo.com//weibo?q=%23%E7%8B%97%E7%86%8A%E5%93%86%E5%97%A6%E6%AF%9B%E7%A4%BA%E8%8C%83%E8%80%85%E6%98%AF%E5%89%8D%E6%96%87%E6%97%85%E9%83%A8%E5%8F%B8%E9%95%BF%23&t=31&band_rank=30&Refer=top)
1. [生命树金鹰奖最佳电视剧](https://s.weibo.com//weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B5%E8%A7%86%E5%89%A7%23&t=31&band_rank=31&Refer=top)
1. [生万物](https://s.weibo.com//weibo?q=%E7%94%9F%E4%B8%87%E7%89%A9&t=31&band_rank=32&Refer=top)
1. [网传大学生替缺课老师讲课一小时](https://s.weibo.com//weibo?q=%E7%BD%91%E4%BC%A0%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%9B%BF%E7%BC%BA%E8%AF%BE%E8%80%81%E5%B8%88%E8%AE%B2%E8%AF%BE%E4%B8%80%E5%B0%8F%E6%97%B6&t=31&band_rank=33&Refer=top)
1. [蒋欣 可惜](https://s.weibo.com//weibo?q=%E8%92%8B%E6%AC%A3%20%E5%8F%AF%E6%83%9C&t=31&band_rank=34&Refer=top)
1. [宋佳二封三大奖](https://s.weibo.com//weibo?q=%E5%AE%8B%E4%BD%B3%E4%BA%8C%E5%B0%81%E4%B8%89%E5%A4%A7%E5%A5%96&t=31&band_rank=35&Refer=top)
1. [国庆节的前一天是烈士纪念日](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E5%BA%86%E8%8A%82%E7%9A%84%E5%89%8D%E4%B8%80%E5%A4%A9%E6%98%AF%E7%83%88%E5%A3%AB%E7%BA%AA%E5%BF%B5%E6%97%A5%23&t=31&band_rank=36&Refer=top)
1. [迪丽热巴看秀扇扇子这一下](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9C%8B%E7%A7%80%E6%89%87%E6%89%87%E5%AD%90%E8%BF%99%E4%B8%80%E4%B8%8B%23&t=31&band_rank=37&Refer=top)
1. [华晨宇被拽](https://s.weibo.com//weibo?q=%E5%8D%8E%E6%99%A8%E5%AE%87%E8%A2%AB%E6%8B%BD&t=31&band_rank=38&Refer=top)
1. [全红婵伤病](https://s.weibo.com//weibo?q=%E5%85%A8%E7%BA%A2%E5%A9%B5%E4%BC%A4%E7%97%85&t=31&band_rank=39&Refer=top)
1. [热巴谷爱凌李昀锐秀场同框](https://s.weibo.com//weibo?q=%23%E7%83%AD%E5%B7%B4%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9D%8E%E6%98%80%E9%94%90%E7%A7%80%E5%9C%BA%E5%90%8C%E6%A1%86%23&t=31&band_rank=40&Refer=top)
1. [生命树](https://s.weibo.com//weibo?q=%E7%94%9F%E5%91%BD%E6%A0%91&t=31&band_rank=41&Refer=top)
1. [陈妤颉领先泰国队0.09秒](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%E9%A2%86%E5%85%88%E6%B3%B0%E5%9B%BD%E9%98%9F0.09%E7%A7%92%23&t=31&band_rank=42&Refer=top)
1. [王鹤棣 哥们的哥们也很好](https://s.weibo.com//weibo?q=%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E5%93%A5%E4%BB%AC%E7%9A%84%E5%93%A5%E4%BB%AC%E4%B9%9F%E5%BE%88%E5%A5%BD&t=31&band_rank=43&Refer=top)
1. [沈梦辰的鞋穿帮了](https://s.weibo.com//weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E7%9A%84%E9%9E%8B%E7%A9%BF%E5%B8%AE%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [英雄永垂不朽](https://s.weibo.com//weibo?q=%E8%8B%B1%E9%9B%84%E6%B0%B8%E5%9E%82%E4%B8%8D%E6%9C%BD&t=31&band_rank=45&Refer=top)
1. [天安门执勤武警被大橘猫缠绕](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E6%89%A7%E5%8B%A4%E6%AD%A6%E8%AD%A6%E8%A2%AB%E5%A4%A7%E6%A9%98%E7%8C%AB%E7%BC%A0%E7%BB%95%23&t=31&band_rank=46&Refer=top)
1. [中国男排3比2韩国男排](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E6%8E%923%E6%AF%942%E9%9F%A9%E5%9B%BD%E7%94%B7%E6%8E%92&t=31&band_rank=47&Refer=top)
1. [金智秀 Dior公主](https://s.weibo.com//weibo?q=%E9%87%91%E6%99%BA%E7%A7%80%20Dior%E5%85%AC%E4%B8%BB&t=31&band_rank=48&Refer=top)
1. [vivo开始抓考勤了](https://s.weibo.com//weibo?q=%23vivo%E5%BC%80%E5%A7%8B%E6%8A%93%E8%80%83%E5%8B%A4%E4%BA%86%23&t=31&band_rank=49&Refer=top)
1. [超长蛋挞的第一个受害者出现了](https://s.weibo.com//weibo?q=%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
