# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-03 02:45:25

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
<!-- 最后更新时间 Wed Sep 02 2026 22:40:45 GMT+0800 (China Standard Time) -->

1. [“常来祖宗海更能体会飞行意义”](https://so.toutiao.com/search?keyword=“常来祖宗海更能体会飞行意义”)
1. [“梅姨”被提起公诉](https://so.toutiao.com/search?keyword=“梅姨”被提起公诉)
1. [开学季，这份安全手册请查收](https://so.toutiao.com/search?keyword=开学季，这份安全手册请查收)
1. [印5名特种兵从直升机跳入河中2人失踪](https://so.toutiao.com/search?keyword=印5名特种兵从直升机跳入河中2人失踪)
1. [吉隆泥石流致21人遇难541人失联](https://so.toutiao.com/search?keyword=吉隆泥石流致21人遇难541人失联)
1. [国台办回应郑丽文向西藏灾区捐款](https://so.toutiao.com/search?keyword=国台办回应郑丽文向西藏灾区捐款)
1. [安世半导体在华21亿资产被冻结](https://so.toutiao.com/search?keyword=安世半导体在华21亿资产被冻结)
1. [吉隆口岸泥石流堆积物最高达16米](https://so.toutiao.com/search?keyword=吉隆口岸泥石流堆积物最高达16米)
1. [暴雨影响福建多地紧急停课](https://so.toutiao.com/search?keyword=暴雨影响福建多地紧急停课)
1. [萌娃不想上学从家装睡到学校](https://so.toutiao.com/search?keyword=萌娃不想上学从家装睡到学校)
1. [中美为什么突然转战金融](https://so.toutiao.com/search?keyword=中美为什么突然转战金融)
1. [“温州瑞安高速强降雨致人员死亡”不实](https://so.toutiao.com/search?keyword=“温州瑞安高速强降雨致人员死亡”不实)
1. [丈夫与公公同一天去世 儿媳撑起小家](https://so.toutiao.com/search?keyword=丈夫与公公同一天去世%20儿媳撑起小家)
1. [林心如现身九寨沟](https://so.toutiao.com/search?keyword=林心如现身九寨沟)
1. [女子喝冰冻可乐瞬间满嘴血](https://so.toutiao.com/search?keyword=女子喝冰冻可乐瞬间满嘴血)
1. [夫妻倒卖柴油被查处](https://so.toutiao.com/search?keyword=夫妻倒卖柴油被查处)
1. [俄军开启高强度导弹消耗战](https://so.toutiao.com/search?keyword=俄军开启高强度导弹消耗战)
1. [伊朗：4名士兵在美军袭击中死亡](https://so.toutiao.com/search?keyword=伊朗：4名士兵在美军袭击中死亡)
1. [媒体：地方税的最大税种来了](https://so.toutiao.com/search?keyword=媒体：地方税的最大税种来了)
1. [妈妈火车站为服役12年儿子找姻缘](https://so.toutiao.com/search?keyword=妈妈火车站为服役12年儿子找姻缘)
1. [菲律宾巨蟒在洪水中挨家挨户“串门”](https://so.toutiao.com/search?keyword=菲律宾巨蟒在洪水中挨家挨户“串门”)
1. [爸妈没交接好导致宝宝被扔地上](https://so.toutiao.com/search?keyword=爸妈没交接好导致宝宝被扔地上)
1. [单眼皮突然变双眼皮可能是衰老信号](https://so.toutiao.com/search?keyword=单眼皮突然变双眼皮可能是衰老信号)
1. [德媒：中国最重要资源是人口智力潜能](https://so.toutiao.com/search?keyword=德媒：中国最重要资源是人口智力潜能)
1. [黄之锋当庭认罪](https://so.toutiao.com/search?keyword=黄之锋当庭认罪)
1. [开学第一天班里来了“特困生”](https://so.toutiao.com/search?keyword=开学第一天班里来了“特困生”)
1. [莫迪为何要当面劝普京停火](https://so.toutiao.com/search?keyword=莫迪为何要当面劝普京停火)
1. [市民打119后上传火警视频遇开屏广告](https://so.toutiao.com/search?keyword=市民打119后上传火警视频遇开屏广告)
1. [山羊被蟒蛇缠住拖进水中后死亡](https://so.toutiao.com/search?keyword=山羊被蟒蛇缠住拖进水中后死亡)
1. [爸爸牺牲妈妈瞒10年儿子考上军校](https://so.toutiao.com/search?keyword=爸爸牺牲妈妈瞒10年儿子考上军校)
1. [青岛即墨码头秒变海鲜市场](https://so.toutiao.com/search?keyword=青岛即墨码头秒变海鲜市场)
1. [女子被当街殴打撕扯 2人被刑拘](https://so.toutiao.com/search?keyword=女子被当街殴打撕扯%202人被刑拘)
1. [学者：美财长利用G20绑架中美矛盾](https://so.toutiao.com/search?keyword=学者：美财长利用G20绑架中美矛盾)
1. [开学第一天33名家长被骗9108元](https://so.toutiao.com/search?keyword=开学第一天33名家长被骗9108元)
1. [高圆圆：最好我先走赵又廷收拾后续](https://so.toutiao.com/search?keyword=高圆圆：最好我先走赵又廷收拾后续)
1. [胖东来回应供应商需有双休和交社保](https://so.toutiao.com/search?keyword=胖东来回应供应商需有双休和交社保)
1. [父亲叮嘱上大学的女儿多交朋友](https://so.toutiao.com/search?keyword=父亲叮嘱上大学的女儿多交朋友)
1. [普京回应俄新一轮动员传言](https://so.toutiao.com/search?keyword=普京回应俄新一轮动员传言)
1. [江西把校服选择权还给学生和家长](https://so.toutiao.com/search?keyword=江西把校服选择权还给学生和家长)
1. [9月3日是中国人民抗日战争胜利纪念日](https://so.toutiao.com/search?keyword=9月3日是中国人民抗日战争胜利纪念日)
1. [湖南炎陵60余名因暴雨被困群众获救](https://so.toutiao.com/search?keyword=湖南炎陵60余名因暴雨被困群众获救)
1. [深圳校服为何让全网感叹真香](https://so.toutiao.com/search?keyword=深圳校服为何让全网感叹真香)
1. [台风“沙德尔”为何能二次发威](https://so.toutiao.com/search?keyword=台风“沙德尔”为何能二次发威)
1. [这几类蔬菜吃前要处理好](https://so.toutiao.com/search?keyword=这几类蔬菜吃前要处理好)
1. [中国盾构书写“硬核”创新故事](https://so.toutiao.com/search?keyword=中国盾构书写“硬核”创新故事)
1. [退伍军人被发小策划“社死”惊喜迎接](https://so.toutiao.com/search?keyword=退伍军人被发小策划“社死”惊喜迎接)
1. [中文成为埃及年轻人“新技能”](https://so.toutiao.com/search?keyword=中文成为埃及年轻人“新技能”)
1. [医保局：勿将病种支付标准与绩效挂钩](https://so.toutiao.com/search?keyword=医保局：勿将病种支付标准与绩效挂钩)
1. [“杀鱼妹妹”开学典礼上台发言](https://so.toutiao.com/search?keyword=“杀鱼妹妹”开学典礼上台发言)
1. [中方对G20会议未发表公报深表遗憾](https://so.toutiao.com/search?keyword=中方对G20会议未发表公报深表遗憾)
1. [中俄领导人讨论中美俄会晤？中方回应](https://so.toutiao.com/search?keyword=中俄领导人讨论中美俄会晤？中方回应)
1. [第260名不满与第2600名同寝想退学](https://so.toutiao.com/search?keyword=第260名不满与第2600名同寝想退学)
1. [读懂这个“50.9%”的分量](https://so.toutiao.com/search?keyword=读懂这个“50.9%”的分量)
1. [山西发生重大刑案警方悬赏捉拿光头男](https://so.toutiao.com/search?keyword=山西发生重大刑案警方悬赏捉拿光头男)
1. [尼泊尔泥石流已致1118死4858失联](https://so.toutiao.com/search?keyword=尼泊尔泥石流已致1118死4858失联)
1. [开学了这些谣言家长要警惕](https://so.toutiao.com/search?keyword=开学了这些谣言家长要警惕)
1. [赛考斯时隔27年再访中国 外交部回应](https://so.toutiao.com/search?keyword=赛考斯时隔27年再访中国%20外交部回应)
1. [国台办：台湾同胞来大陆无需有顾虑](https://so.toutiao.com/search?keyword=国台办：台湾同胞来大陆无需有顾虑)
1. [男子花数万元服务费 相亲对象是婚托](https://so.toutiao.com/search?keyword=男子花数万元服务费%20相亲对象是婚托)
1. [雷军晒小米18 Fold真机](https://so.toutiao.com/search?keyword=雷军晒小米18%20Fold真机)
1. [教体局回应女子称反映食材发霉被辞](https://so.toutiao.com/search?keyword=教体局回应女子称反映食材发霉被辞)
1. [普京：俄美情报部门接触从未中断](https://so.toutiao.com/search?keyword=普京：俄美情报部门接触从未中断)
1. [温州部分养老院人员和附近居民转移](https://so.toutiao.com/search?keyword=温州部分养老院人员和附近居民转移)
1. [星宇股份的麻烦才刚刚开始吗](https://so.toutiao.com/search?keyword=星宇股份的麻烦才刚刚开始吗)
1. [女子带娃迎接退伍丈夫泪洒当场](https://so.toutiao.com/search?keyword=女子带娃迎接退伍丈夫泪洒当场)
1. [预计9月将有2-3个台风登陆或影响我国](https://so.toutiao.com/search?keyword=预计9月将有2-3个台风登陆或影响我国)
1. [郭台铭携妻参加库克卸任晚宴](https://so.toutiao.com/search?keyword=郭台铭携妻参加库克卸任晚宴)
1. [俄罗斯人拿人民币在黑河夜市疯狂扫货](https://so.toutiao.com/search?keyword=俄罗斯人拿人民币在黑河夜市疯狂扫货)
1. [广东南澳发布台风黄色预警 全县停课](https://so.toutiao.com/search?keyword=广东南澳发布台风黄色预警%20全县停课)
1. [12年老兵退役回家与家人在车站相拥](https://so.toutiao.com/search?keyword=12年老兵退役回家与家人在车站相拥)
1. [浙江苍南一中学被淹停课](https://so.toutiao.com/search?keyword=浙江苍南一中学被淹停课)
1. [业主孩子考入重点高中获物业奖励](https://so.toutiao.com/search?keyword=业主孩子考入重点高中获物业奖励)
1. [家长称孩子头发被理发店恶意剪短](https://so.toutiao.com/search?keyword=家长称孩子头发被理发店恶意剪短)
1. [全国小学初中已全部替换新教材](https://so.toutiao.com/search?keyword=全国小学初中已全部替换新教材)
1. [企业公共关系指数报告特别提到胖东来](https://so.toutiao.com/search?keyword=企业公共关系指数报告特别提到胖东来)
1. [李梦还有机会重返国家队吗](https://so.toutiao.com/search?keyword=李梦还有机会重返国家队吗)
1. [方媛夸郭富城身材好穿什么都有型](https://so.toutiao.com/search?keyword=方媛夸郭富城身材好穿什么都有型)
1. [我们的数字遗产归谁所有](https://so.toutiao.com/search?keyword=我们的数字遗产归谁所有)
1. [刘桂平任市场监管总局局长](https://so.toutiao.com/search?keyword=刘桂平任市场监管总局局长)
1. [男子提醒邻居逃生被洪水冲走失踪](https://so.toutiao.com/search?keyword=男子提醒邻居逃生被洪水冲走失踪)
1. [32岁美国银行副总裁时代广场被刺身亡](https://so.toutiao.com/search?keyword=32岁美国银行副总裁时代广场被刺身亡)
1. [每天多喝1杯这些饮料口腔癌风险增5倍](https://so.toutiao.com/search?keyword=每天多喝1杯这些饮料口腔癌风险增5倍)
1. [华为旗舰手机直涨1000元](https://so.toutiao.com/search?keyword=华为旗舰手机直涨1000元)
1. [出生仅9天的先心病患儿重获“心生”](https://so.toutiao.com/search?keyword=出生仅9天的先心病患儿重获“心生”)
1. [美国副总统演讲严重口误](https://so.toutiao.com/search?keyword=美国副总统演讲严重口误)
1. [宁静回应杨洋走丢](https://so.toutiao.com/search?keyword=宁静回应杨洋走丢)
1. [我国电力供给迎来新格局](https://so.toutiao.com/search?keyword=我国电力供给迎来新格局)
1. [吉隆口岸核心区域救援通道已抢通](https://so.toutiao.com/search?keyword=吉隆口岸核心区域救援通道已抢通)
1. [怀孕妻子迎参军12年小伙退伍回家](https://so.toutiao.com/search?keyword=怀孕妻子迎参军12年小伙退伍回家)
1. [武打巨星陈观泰去世 曾饰演马永贞](https://so.toutiao.com/search?keyword=武打巨星陈观泰去世%20曾饰演马永贞)
1. [苹果市值一夜飙升超8000亿元](https://so.toutiao.com/search?keyword=苹果市值一夜飙升超8000亿元)
1. [普京警告西方国家：别想把俄当猎物](https://so.toutiao.com/search?keyword=普京警告西方国家：别想把俄当猎物)
1. [福建宁德暴雨内涝千余人转移](https://so.toutiao.com/search?keyword=福建宁德暴雨内涝千余人转移)
1. [尼泊尔泥石流遇难人数升至1127人](https://so.toutiao.com/search?keyword=尼泊尔泥石流遇难人数升至1127人)
1. [孔绍逊任甘肃省代省长](https://so.toutiao.com/search?keyword=孔绍逊任甘肃省代省长)
1. [大叔2600元买空调发现是8年前产品](https://so.toutiao.com/search?keyword=大叔2600元买空调发现是8年前产品)
1. [乘客被打后公开打人者信息 法院判了](https://so.toutiao.com/search?keyword=乘客被打后公开打人者信息%20法院判了)
1. [英国为何执着于援助乌克兰](https://so.toutiao.com/search?keyword=英国为何执着于援助乌克兰)
1. [泰国将调整免签政策 中使馆发文提醒](https://so.toutiao.com/search?keyword=泰国将调整免签政策%20中使馆发文提醒)
1. [燧原科技开启申购 中一签或赚28万](https://so.toutiao.com/search?keyword=燧原科技开启申购%20中一签或赚28万)
1. [多地社保缴费基数结束连年快涨](https://so.toutiao.com/search?keyword=多地社保缴费基数结束连年快涨)
1. [离家9年27岁退伍女兵向妈妈敬礼](https://so.toutiao.com/search?keyword=离家9年27岁退伍女兵向妈妈敬礼)
1. [普京回应泽连斯基关于俄领空言论](https://so.toutiao.com/search?keyword=普京回应泽连斯基关于俄领空言论)
1. [黄磊回应做饭难吃](https://so.toutiao.com/search?keyword=黄磊回应做饭难吃)
1. [男子爱车贴膜忘去水印满车字母](https://so.toutiao.com/search?keyword=男子爱车贴膜忘去水印满车字母)
1. [美发动打击 伊将升级反击强度](https://so.toutiao.com/search?keyword=美发动打击%20伊将升级反击强度)
1. [南部战区位黄岩岛领海领空战备警巡](https://so.toutiao.com/search?keyword=南部战区位黄岩岛领海领空战备警巡)
1. [媒体：皇马请使用“中国西藏”](https://so.toutiao.com/search?keyword=媒体：皇马请使用“中国西藏”)
1. [印度16岁少女被骗上大巴遭轮奸](https://so.toutiao.com/search?keyword=印度16岁少女被骗上大巴遭轮奸)
1. [美股交易员闻到了“恐慌”的味道](https://so.toutiao.com/search?keyword=美股交易员闻到了“恐慌”的味道)
1. [特朗普称正重审美国在马岛争端立场](https://so.toutiao.com/search?keyword=特朗普称正重审美国在马岛争端立场)
1. [普京：俄日关系恶化责任完全在日方](https://so.toutiao.com/search?keyword=普京：俄日关系恶化责任完全在日方)
1. [尼泊尔口岸一侧多个村镇不复存在](https://so.toutiao.com/search?keyword=尼泊尔口岸一侧多个村镇不复存在)
1. [任振鹤辞去甘肃省省长职务](https://so.toutiao.com/search?keyword=任振鹤辞去甘肃省省长职务)
1. [中国通号集团原党委副书记被开除党籍](https://so.toutiao.com/search?keyword=中国通号集团原党委副书记被开除党籍)
1. [“樊振东效应”在德国持续扩大](https://so.toutiao.com/search?keyword=“樊振东效应”在德国持续扩大)
1. [蔚来拧巴的地方在哪儿](https://so.toutiao.com/search?keyword=蔚来拧巴的地方在哪儿)
1. [雷军：小米澎程9月7日正式上市](https://so.toutiao.com/search?keyword=雷军：小米澎程9月7日正式上市)
1. [弟弟退伍返乡 姐姐一路小跑迎接](https://so.toutiao.com/search?keyword=弟弟退伍返乡%20姐姐一路小跑迎接)
1. [谢霆锋现身青岛海尔总部](https://so.toutiao.com/search?keyword=谢霆锋现身青岛海尔总部)
1. [女兵的迷彩青春](https://so.toutiao.com/search?keyword=女兵的迷彩青春)
1. [评论员：中国男篮新阵容面临三大挑战](https://so.toutiao.com/search?keyword=评论员：中国男篮新阵容面临三大挑战)
1. [李斌首次回应蔚来智驾负责人创业](https://so.toutiao.com/search?keyword=李斌首次回应蔚来智驾负责人创业)
1. [带你见识什么叫“破障开路”](https://so.toutiao.com/search?keyword=带你见识什么叫“破障开路”)
1. [赖清德吹嘘台防务预算 国台办驳斥](https://so.toutiao.com/search?keyword=赖清德吹嘘台防务预算%20国台办驳斥)
1. [吉隆受灾核心区遭泥石流两次过境](https://so.toutiao.com/search?keyword=吉隆受灾核心区遭泥石流两次过境)
1. [广东多地迎暴雨考验](https://so.toutiao.com/search?keyword=广东多地迎暴雨考验)
1. [12年老兵退伍妻子带定制海报迎接](https://so.toutiao.com/search?keyword=12年老兵退伍妻子带定制海报迎接)
1. [透视暑期消费新变化](https://so.toutiao.com/search?keyword=透视暑期消费新变化)
1. [男子12年光荣退伍感谢父母妻子支持](https://so.toutiao.com/search?keyword=男子12年光荣退伍感谢父母妻子支持)
1. [丁俊晖4-0横扫肖恩·奥沙利文](https://so.toutiao.com/search?keyword=丁俊晖4-0横扫肖恩·奥沙利文)
1. [有银行称办40年房贷需35岁以下](https://so.toutiao.com/search?keyword=有银行称办40年房贷需35岁以下)
1. [退伍老兵回家 父亲举着横幅接站](https://so.toutiao.com/search?keyword=退伍老兵回家%20父亲举着横幅接站)
1. [苹果新CEO：秋季发布会必将惊艳四座](https://so.toutiao.com/search?keyword=苹果新CEO：秋季发布会必将惊艳四座)
1. [20后入学家长年龄相差近30岁](https://so.toutiao.com/search?keyword=20后入学家长年龄相差近30岁)
1. [“云南文山12级台风致人伤亡”不实](https://so.toutiao.com/search?keyword=“云南文山12级台风致人伤亡”不实)
1. [女子当街被殴打扒裤 当地回应](https://so.toutiao.com/search?keyword=女子当街被殴打扒裤%20当地回应)
1. [蔚来单车成本下半年至少再涨2000元](https://so.toutiao.com/search?keyword=蔚来单车成本下半年至少再涨2000元)
1. [吉隆救援为何不直接炸出泄流通道](https://so.toutiao.com/search?keyword=吉隆救援为何不直接炸出泄流通道)
1. [曼城1.25亿英镑签下恩佐](https://so.toutiao.com/search?keyword=曼城1.25亿英镑签下恩佐)
1. [于东来痛批明星扎堆直播带货](https://so.toutiao.com/search?keyword=于东来痛批明星扎堆直播带货)
1. [苹果CEO特努斯薪酬约5800万美元](https://so.toutiao.com/search?keyword=苹果CEO特努斯薪酬约5800万美元)
1. [赛考斯启程返美与殷玉珍相拥泪别](https://so.toutiao.com/search?keyword=赛考斯启程返美与殷玉珍相拥泪别)
1. [现实版“爷爷和7个葫芦娃”走红](https://so.toutiao.com/search?keyword=现实版“爷爷和7个葫芦娃”走红)
1. [李斌透露蔚来明年产品规划](https://so.toutiao.com/search?keyword=李斌透露蔚来明年产品规划)
1. [吴宜泽1-4不敌威尔逊无缘32强](https://so.toutiao.com/search?keyword=吴宜泽1-4不敌威尔逊无缘32强)
1. [博主：俄导弹正掐灭乌克兰反击能力](https://so.toutiao.com/search?keyword=博主：俄导弹正掐灭乌克兰反击能力)
1. [房地产将告别期房预售时代](https://so.toutiao.com/search?keyword=房地产将告别期房预售时代)
1. [老人买20多年彩票中712万大奖](https://so.toutiao.com/search?keyword=老人买20多年彩票中712万大奖)
1. [普京：乌问题谈判进程处于冻结状态](https://so.toutiao.com/search?keyword=普京：乌问题谈判进程处于冻结状态)
1. [刘晓庆330万元借贷纠纷案二审败诉](https://so.toutiao.com/search?keyword=刘晓庆330万元借贷纠纷案二审败诉)
1. [希音上市 聚光灯却已不在它身上](https://so.toutiao.com/search?keyword=希音上市%20聚光灯却已不在它身上)
1. [女生穿高跟鞋机场捧花接退伍男友](https://so.toutiao.com/search?keyword=女生穿高跟鞋机场捧花接退伍男友)
1. [山东一小学新生古风名字惊艳亮相](https://so.toutiao.com/search?keyword=山东一小学新生古风名字惊艳亮相)
1. [库克15年CEO生涯被低估了吗](https://so.toutiao.com/search?keyword=库克15年CEO生涯被低估了吗)
1. [女孩起夜如厕误把电视柜当马桶坐塌](https://so.toutiao.com/search?keyword=女孩起夜如厕误把电视柜当马桶坐塌)
1. [俄高官警告：俄乌冲突恐走向失控](https://so.toutiao.com/search?keyword=俄高官警告：俄乌冲突恐走向失控)
1. [官方通报女子被踢845个群被迫离职](https://so.toutiao.com/search?keyword=官方通报女子被踢845个群被迫离职)
1. [苏州等多地初中出现超大校额](https://so.toutiao.com/search?keyword=苏州等多地初中出现超大校额)
1. [是谁在默默“托举”理想汽车](https://so.toutiao.com/search?keyword=是谁在默默“托举”理想汽车)
1. [库克给接任者留下了哪些课题](https://so.toutiao.com/search?keyword=库克给接任者留下了哪些课题)
1. [大树倒伏砸中电单车骑行者](https://so.toutiao.com/search?keyword=大树倒伏砸中电单车骑行者)
1. [大爷遛鱼4小时钓起50斤大青鱼](https://so.toutiao.com/search?keyword=大爷遛鱼4小时钓起50斤大青鱼)
1. [苏州拼盘演唱会被曝两小时休息80分钟](https://so.toutiao.com/search?keyword=苏州拼盘演唱会被曝两小时休息80分钟)
1. [双预警齐发 江西浙江等地有大暴雨](https://so.toutiao.com/search?keyword=双预警齐发%20江西浙江等地有大暴雨)
1. [手机集体涨价 谁为性能溢出买单](https://so.toutiao.com/search?keyword=手机集体涨价%20谁为性能溢出买单)
1. [美航母“东拼西凑”的尴尬](https://so.toutiao.com/search?keyword=美航母“东拼西凑”的尴尬)
1. [美国航母停靠前芭堤雅严打卖淫](https://so.toutiao.com/search?keyword=美国航母停靠前芭堤雅严打卖淫)
1. [国内手机用户平均换机周期破42个月](https://so.toutiao.com/search?keyword=国内手机用户平均换机周期破42个月)
1. [华东地区发现特大铜金矿有何影响](https://so.toutiao.com/search?keyword=华东地区发现特大铜金矿有何影响)
1. [榴莲价格“大跳水”](https://so.toutiao.com/search?keyword=榴莲价格“大跳水”)
1. [网红曹奶奶安详离世 享年94岁](https://so.toutiao.com/search?keyword=网红曹奶奶安详离世%20享年94岁)
1. [英国疯狂挑衅俄罗斯在赌什么](https://so.toutiao.com/search?keyword=英国疯狂挑衅俄罗斯在赌什么)
1. [女子携儿子出游酒后跳河失联4日](https://so.toutiao.com/search?keyword=女子携儿子出游酒后跳河失联4日)
1. [离职员工改价8元买走100克金条被判刑](https://so.toutiao.com/search?keyword=离职员工改价8元买走100克金条被判刑)
1. [委内瑞拉为何接受美国石油协议](https://so.toutiao.com/search?keyword=委内瑞拉为何接受美国石油协议)
1. [尼泊尔泥石流已致1066人死亡](https://so.toutiao.com/search?keyword=尼泊尔泥石流已致1066人死亡)
1. [女子赢2600万后质疑律师费过高](https://so.toutiao.com/search?keyword=女子赢2600万后质疑律师费过高)
1. [39岁抗癌博主“芳芳”离世](https://so.toutiao.com/search?keyword=39岁抗癌博主“芳芳”离世)
1. [吉隆口岸国门所在地仅剩地基](https://so.toutiao.com/search?keyword=吉隆口岸国门所在地仅剩地基)
1. [家长反对交600元请保洁扫教室被禁言](https://so.toutiao.com/search?keyword=家长反对交600元请保洁扫教室被禁言)
1. [作家王新军突发疾病去世](https://so.toutiao.com/search?keyword=作家王新军突发疾病去世)
1. [比亚迪终于等来业绩拐点了吗](https://so.toutiao.com/search?keyword=比亚迪终于等来业绩拐点了吗)
1. [评论员：特朗普改名风波是政治闹剧](https://so.toutiao.com/search?keyword=评论员：特朗普改名风波是政治闹剧)
1. [世界会迎来大的金融危机吗](https://so.toutiao.com/search?keyword=世界会迎来大的金融危机吗)
1. [比亚迪海外营收首超大中华区意味什么](https://so.toutiao.com/search?keyword=比亚迪海外营收首超大中华区意味什么)
1. [泰女子因欠钱被酒吧经理当众剃光头](https://so.toutiao.com/search?keyword=泰女子因欠钱被酒吧经理当众剃光头)
1. [去年全国药店净减少约2.2万家](https://so.toutiao.com/search?keyword=去年全国药店净减少约2.2万家)
1. [中国男篮公布亚运会12人名单](https://so.toutiao.com/search?keyword=中国男篮公布亚运会12人名单)
1. [6家上市机器人公司谁在领跑谁在掉队](https://so.toutiao.com/search?keyword=6家上市机器人公司谁在领跑谁在掉队)
1. [全球罕见双同卵双生四胞胎上小学了](https://so.toutiao.com/search?keyword=全球罕见双同卵双生四胞胎上小学了)
1. [专家：美国拉G20围堵中国的牌打不响](https://so.toutiao.com/search?keyword=专家：美国拉G20围堵中国的牌打不响)
1. [运油-20首次给阵风战机加油意味什么](https://so.toutiao.com/search?keyword=运油-20首次给阵风战机加油意味什么)
1. [女子反复流产竟是体内镉金属超标](https://so.toutiao.com/search?keyword=女子反复流产竟是体内镉金属超标)
1. [刘和平：太平洋成反“台独”博弈前沿](https://so.toutiao.com/search?keyword=刘和平：太平洋成反“台独”博弈前沿)
1. [东部战区座座军营送老兵](https://so.toutiao.com/search?keyword=东部战区座座军营送老兵)
1. [徐帆开车送养女去学校](https://so.toutiao.com/search?keyword=徐帆开车送养女去学校)
1. [莫迪发布与普京同车照片](https://so.toutiao.com/search?keyword=莫迪发布与普京同车照片)
1. [多品牌手机悄然涨价](https://so.toutiao.com/search?keyword=多品牌手机悄然涨价)
1. [本周A股如何走](https://so.toutiao.com/search?keyword=本周A股如何走)
1. [普京与伊朗总统会面](https://so.toutiao.com/search?keyword=普京与伊朗总统会面)
1. [李在明为何突然改组内阁](https://so.toutiao.com/search?keyword=李在明为何突然改组内阁)
1. [8月杭州二手房成交6337套](https://so.toutiao.com/search?keyword=8月杭州二手房成交6337套)
1. [康复治疗师教你怎么使用筋膜枪](https://so.toutiao.com/search?keyword=康复治疗师教你怎么使用筋膜枪)
1. [砸杨瀚森球迷已被批评教育](https://so.toutiao.com/search?keyword=砸杨瀚森球迷已被批评教育)
1. [美股9月能躲过大跌魔咒吗](https://so.toutiao.com/search?keyword=美股9月能躲过大跌魔咒吗)
1. [闻泰科技：变更闻泰转债转股来源](https://so.toutiao.com/search?keyword=闻泰科技：变更闻泰转债转股来源)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Sep 03 2026 02:39:27 GMT+0800 (China Standard Time) -->

1. [中国男人正在抛弃皮鞋](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E4%BA%BA%E6%AD%A3%E5%9C%A8%E6%8A%9B%E5%BC%83%E7%9A%AE%E9%9E%8B)
1. [胡锡进怒批孙宇晨](https://www.zhihu.com/search?q=%E8%83%A1%E9%94%A1%E8%BF%9B%E6%80%92%E6%89%B9%E5%AD%99%E5%AE%87%E6%99%A8)
1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [Zhihu CLI 功能上新](https://www.zhihu.com/search?q=Zhihu%20CLI%20%E5%8A%9F%E8%83%BD%E4%B8%8A%E6%96%B0)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [王鸥官宣独自养育孩子](https://www.zhihu.com/search?q=%E7%8E%8B%E9%B8%A5%E5%AE%98%E5%AE%A3%E7%8B%AC%E8%87%AA%E5%85%BB%E8%82%B2%E5%AD%A9%E5%AD%90)
1. [反中乱港分子黄之锋当庭认罪](https://www.zhihu.com/search?q=%E5%8F%8D%E4%B8%AD%E4%B9%B1%E6%B8%AF%E5%88%86%E5%AD%90%E9%BB%84%E4%B9%8B%E9%94%8B%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA)
1. [梅姨被公诉](https://www.zhihu.com/search?q=%E6%A2%85%E5%A7%A8%E8%A2%AB%E5%85%AC%E8%AF%89)
1. [新版《国防动员法》10 月 1 日实施](https://www.zhihu.com/search?q=%E6%96%B0%E7%89%88%E3%80%8A%E5%9B%BD%E9%98%B2%E5%8A%A8%E5%91%98%E6%B3%95%E3%80%8B10%20%E6%9C%88%201%20%E6%97%A5%E5%AE%9E%E6%96%BD)
1. [多地小学老师改教初中](https://www.zhihu.com/search?q=%E5%A4%9A%E5%9C%B0%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E6%94%B9%E6%95%99%E5%88%9D%E4%B8%AD)
1. [曝科大讯飞公关副总裁被解除职务](https://www.zhihu.com/search?q=%E6%9B%9D%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E5%85%AC%E5%85%B3%E5%89%AF%E6%80%BB%E8%A3%81%E8%A2%AB%E8%A7%A3%E9%99%A4%E8%81%8C%E5%8A%A1)
1. [星宇股份裁应届生疑被告到欧盟](https://www.zhihu.com/search?q=%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%A3%81%E5%BA%94%E5%B1%8A%E7%94%9F%E7%96%91%E8%A2%AB%E5%91%8A%E5%88%B0%E6%AC%A7%E7%9B%9F)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Sep 03 2026 02:45:25 GMT+0800 (China Standard Time) -->

1. [怎样看待央视抽查保温杯连304钢印都能造假？](https://www.zhihu.com/question/2077321081388647400)
1. [黄之锋在香港高等法院就「串谋勾结外国或者境外势力危害国家安全」案当庭认罪，哪些信息值得关注？](https://www.zhihu.com/question/2078466231653479700)
1. [西藏泥石流已致 21 死 541 失联，发现遗物 847 件，有哪些信息值得关注？](https://www.zhihu.com/question/2078579015065887200)
1. [男子盘手串包浆后被妻子用刷子搓净，玩家集体破防，到底什么是包浆？女子洗掉的到底是包浆还是油泥？](https://www.zhihu.com/question/2078389946146976500)
1. [为什么江西小炒会越来越多？](https://www.zhihu.com/question/2076963909853102300)
1. [欧、美、日、英，多国债市遭抛售潮，这种现象以前发生过吗？](https://www.zhihu.com/question/2078423950367744300)
1. [苹果、小米、华为发布时间撞档，为啥大家都选 9 月发布新品？扎堆发布不会影响销量吗？](https://www.zhihu.com/question/2078445037713450500)
1. [小学老师感慨「梓萱」「子涵」已成过去式， 现在取名有哪些新趋势？为啥会发生这种变化？](https://www.zhihu.com/question/2078092686771409400)
1. [如何评价 22.99 万起售的比亚迪海狮 08？有哪些亮点值得关注？](https://www.zhihu.com/question/2078536930053169400)
1. [TOP登陆少年开演唱会，徐州12345被粉丝用作「对线」工具，近5万件诉求涌入，这种行为该受到处罚吗？](https://www.zhihu.com/question/2078472073869883000)
1. [家长提议班级收 600 元请保洁，有家长反对被禁言，如何看待此事？小学生参与班级劳动家长该不该插手？](https://www.zhihu.com/question/2078199895417274400)
1. [怎么看美国《外交政策》（Foreign Policy）称「中国的成功正迫使美国重新思考AI战略」？](https://www.zhihu.com/question/2078117316865402400)
1. [如何评价最白的乌鸦新书《请勿高考时渡劫》达成10万首订，这本书有意思不？](https://www.zhihu.com/question/2078429565551129000)
1. [港媒曝香港武打巨星陈观泰去世，享年80岁，曾出演《马永贞》《血滴子》等，你对他塑造的角色有哪些记忆？](https://www.zhihu.com/question/2078467898893231000)
1. [「药茅」片仔癀半年报利润下滑 24.22%，其市值较巅峰已蒸发超 2100 亿，如何解读？](https://www.zhihu.com/question/2078054742500930000)
1. [deepseek-v4-flash、glm-5.3-flash、qwen-3.8-flash怎么选择？](https://www.zhihu.com/question/2077826134134282200)
1. [LCK季后赛HLE让二追三T1挺进胜者组决赛，如何评价这场比赛？](https://www.zhihu.com/question/2078576563612927200)
1. [美联储这次加息的概率有多大？](https://www.zhihu.com/question/2077297716640666600)
1. [15 万的油车与 15 万的电车，相同用车情况下，8 年费用对比如何？](https://www.zhihu.com/question/2078379707381310700)
1. [如何评价阿森纳在2026年夏窗尾声的转会操作？](https://www.zhihu.com/question/2076388541567853600)
1. [美伊再次开打，特朗普威胁伊朗若报复将遭受「更猛烈」打击，此轮袭击将如何影响中东局势？](https://www.zhihu.com/question/2078394585563100700)
1. [如何评价纪录片克莱克森的农场?](https://www.zhihu.com/question/486632334)
1. [大家身边有没有那种「名字很吓人，实地看却很普通」的地方？这样的名字是怎么来的？](https://www.zhihu.com/question/2075544888804905200)
1. [如何培养一个孩子的时间观念呢？](https://www.zhihu.com/question/2078374347421508600)
1. [美国航母抵达泰国，泰方心情复杂，背后有哪些深层原因？](https://www.zhihu.com/question/2078403618252777000)
1. [鸡蛋除了西红柿还能炒什么?](https://www.zhihu.com/question/2037443300584601000)
1. [如何缓和与上司的关系？](https://www.zhihu.com/question/7692884686)
1. [为什么很多大学生更喜欢买标准版 iPhone，而不是 Pro？](https://www.zhihu.com/question/2075613391306208800)
1. [为什么郭芙会在风陵渡口挥马鞭威胁平民老百姓？](https://www.zhihu.com/question/2076828510795067400)
1. [为什么洗烘一体机被越来越多人嫌弃？独立烘干机反而火了？](https://www.zhihu.com/question/2027791553876248000)

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
<!-- 最后更新时间 Thu Sep 03 2026 02:48:20 GMT+0800 (China Standard Time) -->

1. [习近平同塞西会谈高清大图](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%90%8C%E5%A1%9E%E8%A5%BF%E4%BC%9A%E8%B0%88%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23&Refer=new_time)
1. [家长在班级群自报干部身份](https://s.weibo.com//weibo?q=%23%E5%AE%B6%E9%95%BF%E5%9C%A8%E7%8F%AD%E7%BA%A7%E7%BE%A4%E8%87%AA%E6%8A%A5%E5%B9%B2%E9%83%A8%E8%BA%AB%E4%BB%BD%23&t=31&band_rank=1&Refer=top)
1. [微信新功能专治各种看不见](https://s.weibo.com//weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%96%B0%E5%8A%9F%E8%83%BD%E4%B8%93%E6%B2%BB%E5%90%84%E7%A7%8D%E7%9C%8B%E4%B8%8D%E8%A7%81%23&t=31&band_rank=2&Refer=top)
1. [开局之年看山西](https://s.weibo.com//weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E5%B1%B1%E8%A5%BF%23&t=31&band_rank=3&Refer=top)
1. [花少2毛阿敏放现在算虐待老人](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%912%E6%AF%9B%E9%98%BF%E6%95%8F%E6%94%BE%E7%8E%B0%E5%9C%A8%E7%AE%97%E8%99%90%E5%BE%85%E8%80%81%E4%BA%BA%23&t=31&band_rank=4&Refer=top)
1. [好讨厌需要靠争抢来的东西](https://s.weibo.com//weibo?q=%E5%A5%BD%E8%AE%A8%E5%8E%8C%E9%9C%80%E8%A6%81%E9%9D%A0%E4%BA%89%E6%8A%A2%E6%9D%A5%E7%9A%84%E4%B8%9C%E8%A5%BF&t=31&band_rank=5&Refer=top)
1. [李月汝护照遗失缺席世界杯](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E6%9C%88%E6%B1%9D%E6%8A%A4%E7%85%A7%E9%81%97%E5%A4%B1%E7%BC%BA%E5%B8%AD%E4%B8%96%E7%95%8C%E6%9D%AF%23&t=31&band_rank=6&Refer=top)
1. [吉隆泥石流遇难21人失联541人](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE21%E4%BA%BA%E5%A4%B1%E8%81%94541%E4%BA%BA%23&t=31&band_rank=7&Refer=top)
1. [priest入围2027纽曼华语文学奖](https://s.weibo.com//weibo?q=priest%E5%85%A5%E5%9B%B42027%E7%BA%BD%E6%9B%BC%E5%8D%8E%E8%AF%AD%E6%96%87%E5%AD%A6%E5%A5%96&t=31&band_rank=8&Refer=top)
1. [杀害中国女生嫌犯供述作案过程](https://s.weibo.com//weibo?q=%23%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E4%BE%9B%E8%BF%B0%E4%BD%9C%E6%A1%88%E8%BF%87%E7%A8%8B%23&t=31&band_rank=9&Refer=top)
1. [独居真的只适合个别人](https://s.weibo.com//weibo?q=%E7%8B%AC%E5%B1%85%E7%9C%9F%E7%9A%84%E5%8F%AA%E9%80%82%E5%90%88%E4%B8%AA%E5%88%AB%E4%BA%BA&t=31&band_rank=10&Refer=top)
1. [幼儿园上午开学下午停办](https://s.weibo.com//weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E4%B8%8A%E5%8D%88%E5%BC%80%E5%AD%A6%E4%B8%8B%E5%8D%88%E5%81%9C%E5%8A%9E%23&t=31&band_rank=11&Refer=top)
1. [没有性生活也有必要打HPV疫苗](https://s.weibo.com//weibo?q=%E6%B2%A1%E6%9C%89%E6%80%A7%E7%94%9F%E6%B4%BB%E4%B9%9F%E6%9C%89%E5%BF%85%E8%A6%81%E6%89%93HPV%E7%96%AB%E8%8B%97&t=31&band_rank=12&Refer=top)
1. [为什么爱流向不缺爱的人](https://s.weibo.com//weibo?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E7%88%B1%E6%B5%81%E5%90%91%E4%B8%8D%E7%BC%BA%E7%88%B1%E7%9A%84%E4%BA%BA&t=31&band_rank=13&Refer=top)
1. [辽宁中考 历史不计入总分](https://s.weibo.com//weibo?q=%E8%BE%BD%E5%AE%81%E4%B8%AD%E8%80%83%20%E5%8E%86%E5%8F%B2%E4%B8%8D%E8%AE%A1%E5%85%A5%E6%80%BB%E5%88%86&t=31&band_rank=14&Refer=top)
1. [乌克兰两部门在基辅交火](https://s.weibo.com//weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E4%B8%A4%E9%83%A8%E9%97%A8%E5%9C%A8%E5%9F%BA%E8%BE%85%E4%BA%A4%E7%81%AB%23&t=31&band_rank=15&Refer=top)
1. [张雪惊讶97岁李锦记掌门人喝冰可乐](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%83%8A%E8%AE%B697%E5%B2%81%E6%9D%8E%E9%94%A6%E8%AE%B0%E6%8E%8C%E9%97%A8%E4%BA%BA%E5%96%9D%E5%86%B0%E5%8F%AF%E4%B9%90%23&t=31&band_rank=16&Refer=top)
1. [宁静花少2偶像来了人设对比](https://s.weibo.com//weibo?q=%23%E5%AE%81%E9%9D%99%E8%8A%B1%E5%B0%912%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%E4%BA%BA%E8%AE%BE%E5%AF%B9%E6%AF%94%23&t=31&band_rank=17&Refer=top)
1. [吾恩见不得粉丝为我难过](https://s.weibo.com//weibo?q=%E5%90%BE%E6%81%A9%E8%A7%81%E4%B8%8D%E5%BE%97%E7%B2%89%E4%B8%9D%E4%B8%BA%E6%88%91%E9%9A%BE%E8%BF%87&t=31&band_rank=18&Refer=top)
1. [中国队女篮世界杯12人名单](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%A5%B3%E7%AF%AE%E4%B8%96%E7%95%8C%E6%9D%AF12%E4%BA%BA%E5%90%8D%E5%8D%95%23&t=31&band_rank=19&Refer=top)
1. [花少4开始一个杨幂结束七个杨幂](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%914%E5%BC%80%E5%A7%8B%E4%B8%80%E4%B8%AA%E6%9D%A8%E5%B9%82%E7%BB%93%E6%9D%9F%E4%B8%83%E4%B8%AA%E6%9D%A8%E5%B9%82%23&t=31&band_rank=20&Refer=top)
1. [突然发现有车之后心态变了](https://s.weibo.com//weibo?q=%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%9C%89%E8%BD%A6%E4%B9%8B%E5%90%8E%E5%BF%83%E6%80%81%E5%8F%98%E4%BA%86&t=31&band_rank=21&Refer=top)
1. [果然年轻人开店活人感就是重](https://s.weibo.com//weibo?q=%23%E6%9E%9C%E7%84%B6%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%BA%97%E6%B4%BB%E4%BA%BA%E6%84%9F%E5%B0%B1%E6%98%AF%E9%87%8D%23&t=31&band_rank=22&Refer=top)
1. [命运不会让你错过属于你的东西](https://s.weibo.com//weibo?q=%E5%91%BD%E8%BF%90%E4%B8%8D%E4%BC%9A%E8%AE%A9%E4%BD%A0%E9%94%99%E8%BF%87%E5%B1%9E%E4%BA%8E%E4%BD%A0%E7%9A%84%E4%B8%9C%E8%A5%BF&t=31&band_rank=23&Refer=top)
1. [花少4整季最大的矛盾](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%914%E6%95%B4%E5%AD%A3%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%9B%E7%9B%BE%23&t=31&band_rank=24&Refer=top)
1. [好像连吃月饼也出现代沟了](https://s.weibo.com//weibo?q=%23%E5%A5%BD%E5%83%8F%E8%BF%9E%E5%90%83%E6%9C%88%E9%A5%BC%E4%B9%9F%E5%87%BA%E7%8E%B0%E4%BB%A3%E6%B2%9F%E4%BA%86%23&t=31&band_rank=25&Refer=top)
1. [一针99万元外国人来中国抗癌](https://s.weibo.com//weibo?q=%23%E4%B8%80%E9%92%8899%E4%B8%87%E5%85%83%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9D%A5%E4%B8%AD%E5%9B%BD%E6%8A%97%E7%99%8C%23&t=31&band_rank=26&Refer=top)
1. [何超琼17岁就和父亲出去应酬了](https://s.weibo.com//weibo?q=%23%E4%BD%95%E8%B6%85%E7%90%BC17%E5%B2%81%E5%B0%B1%E5%92%8C%E7%88%B6%E4%BA%B2%E5%87%BA%E5%8E%BB%E5%BA%94%E9%85%AC%E4%BA%86%23&t=31&band_rank=27&Refer=top)
1. [尼泊尔泥石流中现房屋般大小巨石](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%E4%B8%AD%E7%8E%B0%E6%88%BF%E5%B1%8B%E8%88%AC%E5%A4%A7%E5%B0%8F%E5%B7%A8%E7%9F%B3%23&t=31&band_rank=28&Refer=top)
1. [女子喝冰冻可乐瞬间满嘴血](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%96%9D%E5%86%B0%E5%86%BB%E5%8F%AF%E4%B9%90%E7%9E%AC%E9%97%B4%E6%BB%A1%E5%98%B4%E8%A1%80%23&t=31&band_rank=29&Refer=top)
1. [消防员说吉隆救援途中遇熊和狼](https://s.weibo.com//weibo?q=%23%E6%B6%88%E9%98%B2%E5%91%98%E8%AF%B4%E5%90%89%E9%9A%86%E6%95%91%E6%8F%B4%E9%80%94%E4%B8%AD%E9%81%87%E7%86%8A%E5%92%8C%E7%8B%BC%23&t=31&band_rank=30&Refer=top)
1. [今天胜利胜利胜利](https://s.weibo.com//weibo?q=%23%E4%BB%8A%E5%A4%A9%E8%83%9C%E5%88%A9%E8%83%9C%E5%88%A9%E8%83%9C%E5%88%A9%23&t=31&band_rank=31&Refer=top)
1. [通用搭配技巧我好像悟了](https://s.weibo.com//weibo?q=%23%E9%80%9A%E7%94%A8%E6%90%AD%E9%85%8D%E6%8A%80%E5%B7%A7%E6%88%91%E5%A5%BD%E5%83%8F%E6%82%9F%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [温州停课](https://s.weibo.com//weibo?q=%23%E6%B8%A9%E5%B7%9E%E5%81%9C%E8%AF%BE%23&t=31&band_rank=33&Refer=top)
1. [每个中国人都该记住0903](https://s.weibo.com//weibo?q=%E6%AF%8F%E4%B8%AA%E4%B8%AD%E5%9B%BD%E4%BA%BA%E9%83%BD%E8%AF%A5%E8%AE%B0%E4%BD%8F0903&t=31&band_rank=34&Refer=top)
1. [搜救犬救援时发现幸存者的反应](https://s.weibo.com//weibo?q=%23%E6%90%9C%E6%95%91%E7%8A%AC%E6%95%91%E6%8F%B4%E6%97%B6%E5%8F%91%E7%8E%B0%E5%B9%B8%E5%AD%98%E8%80%85%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=35&Refer=top)
1. [中国抗日战争拯救人类文明](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8A%97%E6%97%A5%E6%88%98%E4%BA%89%E6%8B%AF%E6%95%91%E4%BA%BA%E7%B1%BB%E6%96%87%E6%98%8E%23&t=31&band_rank=36&Refer=top)
1. [老一辈是不是都这么天真](https://s.weibo.com//weibo?q=%E8%80%81%E4%B8%80%E8%BE%88%E6%98%AF%E4%B8%8D%E6%98%AF%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A9%E7%9C%9F&t=31&band_rank=37&Refer=top)
1. [大众针对星宇股份用工风波启动调查](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E4%BC%97%E9%92%88%E5%AF%B9%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E7%94%A8%E5%B7%A5%E9%A3%8E%E6%B3%A2%E5%90%AF%E5%8A%A8%E8%B0%83%E6%9F%A5%23&t=31&band_rank=38&Refer=top)
1. [爸爸以为妈妈接住了不料宝宝摔落在地](https://s.weibo.com//weibo?q=%23%E7%88%B8%E7%88%B8%E4%BB%A5%E4%B8%BA%E5%A6%88%E5%A6%88%E6%8E%A5%E4%BD%8F%E4%BA%86%E4%B8%8D%E6%96%99%E5%AE%9D%E5%AE%9D%E6%91%94%E8%90%BD%E5%9C%A8%E5%9C%B0%23&t=31&band_rank=39&Refer=top)
1. [流浪狗和原住民对视那一刻](https://s.weibo.com//weibo?q=%23%E6%B5%81%E6%B5%AA%E7%8B%97%E5%92%8C%E5%8E%9F%E4%BD%8F%E6%B0%91%E5%AF%B9%E8%A7%86%E9%82%A3%E4%B8%80%E5%88%BB%23&t=31&band_rank=40&Refer=top)
1. [花儿与少年2026官宣](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B42026%E5%AE%98%E5%AE%A3%23&t=31&band_rank=41&Refer=top)
1. [从小就是个很输不起的人](https://s.weibo.com//weibo?q=%E4%BB%8E%E5%B0%8F%E5%B0%B1%E6%98%AF%E4%B8%AA%E5%BE%88%E8%BE%93%E4%B8%8D%E8%B5%B7%E7%9A%84%E4%BA%BA&t=31&band_rank=42&Refer=top)
1. [5岁宝宝为了开学典礼半夜悄悄练习](https://s.weibo.com//weibo?q=%235%E5%B2%81%E5%AE%9D%E5%AE%9D%E4%B8%BA%E4%BA%86%E5%BC%80%E5%AD%A6%E5%85%B8%E7%A4%BC%E5%8D%8A%E5%A4%9C%E6%82%84%E6%82%84%E7%BB%83%E4%B9%A0%23&t=31&band_rank=43&Refer=top)
1. [宁静录制第二天就发现花少2节目本质](https://s.weibo.com//weibo?q=%23%E5%AE%81%E9%9D%99%E5%BD%95%E5%88%B6%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%B0%B1%E5%8F%91%E7%8E%B0%E8%8A%B1%E5%B0%912%E8%8A%82%E7%9B%AE%E6%9C%AC%E8%B4%A8%23&t=31&band_rank=44&Refer=top)
1. [HLE让二追三T1](https://s.weibo.com//weibo?q=%23HLE%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89T1%23&t=31&band_rank=45&Refer=top)
1. [杨洋花少2里唯一一次无理要求](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E6%B4%8B%E8%8A%B1%E5%B0%912%E9%87%8C%E5%94%AF%E4%B8%80%E4%B8%80%E6%AC%A1%E6%97%A0%E7%90%86%E8%A6%81%E6%B1%82%23&t=31&band_rank=46&Refer=top)
1. [手机涨价以为会疯抢结果询价都没人](https://s.weibo.com//weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E4%BB%A5%E4%B8%BA%E4%BC%9A%E7%96%AF%E6%8A%A2%E7%BB%93%E6%9E%9C%E8%AF%A2%E4%BB%B7%E9%83%BD%E6%B2%A1%E4%BA%BA%23&t=31&band_rank=47&Refer=top)
1. [书源把武则天选错成梦奇](https://s.weibo.com//weibo?q=%23%E4%B9%A6%E6%BA%90%E6%8A%8A%E6%AD%A6%E5%88%99%E5%A4%A9%E9%80%89%E9%94%99%E6%88%90%E6%A2%A6%E5%A5%87%23&t=31&band_rank=48&Refer=top)
1. [富爸爸穷爸爸作者自曝负债12亿美元](https://s.weibo.com//weibo?q=%23%E5%AF%8C%E7%88%B8%E7%88%B8%E7%A9%B7%E7%88%B8%E7%88%B8%E4%BD%9C%E8%80%85%E8%87%AA%E6%9B%9D%E8%B4%9F%E5%80%BA12%E4%BA%BF%E7%BE%8E%E5%85%83%23&t=31&band_rank=49&Refer=top)
1. [爸爸牺牲妈妈瞒10年儿子考上军校](https://s.weibo.com//weibo?q=%23%E7%88%B8%E7%88%B8%E7%89%BA%E7%89%B2%E5%A6%88%E5%A6%88%E7%9E%9210%E5%B9%B4%E5%84%BF%E5%AD%90%E8%80%83%E4%B8%8A%E5%86%9B%E6%A0%A1%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
