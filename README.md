# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-02 02:33:45

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
<!-- 最后更新时间 Tue Sep 01 2026 23:09:30 GMT+0800 (China Standard Time) -->

1. [大爷遛鱼4小时钓起50斤大青鱼](https://so.toutiao.com/search?keyword=大爷遛鱼4小时钓起50斤大青鱼)
1. [39岁抗癌博主“芳芳”离世](https://so.toutiao.com/search?keyword=39岁抗癌博主“芳芳”离世)
1. [透视暑期消费新变化](https://so.toutiao.com/search?keyword=透视暑期消费新变化)
1. [女子携儿子出游酒后跳河失联4日](https://so.toutiao.com/search?keyword=女子携儿子出游酒后跳河失联4日)
1. [苏州一学校初一超90个班](https://so.toutiao.com/search?keyword=苏州一学校初一超90个班)
1. [吉隆口岸陆上救援通道即将打通](https://so.toutiao.com/search?keyword=吉隆口岸陆上救援通道即将打通)
1. [有银行称办40年房贷需35岁以下](https://so.toutiao.com/search?keyword=有银行称办40年房贷需35岁以下)
1. [东部战区座座军营送老兵](https://so.toutiao.com/search?keyword=东部战区座座军营送老兵)
1. [20后入学家长年龄相差近30岁](https://so.toutiao.com/search?keyword=20后入学家长年龄相差近30岁)
1. [退役女兵用三种身份守护同一份忠诚](https://so.toutiao.com/search?keyword=退役女兵用三种身份守护同一份忠诚)
1. [印度16岁少女被骗上大巴遭轮奸](https://so.toutiao.com/search?keyword=印度16岁少女被骗上大巴遭轮奸)
1. [“云南文山12级台风致人伤亡”不实](https://so.toutiao.com/search?keyword=“云南文山12级台风致人伤亡”不实)
1. [英国疯狂挑衅俄罗斯在赌什么](https://so.toutiao.com/search?keyword=英国疯狂挑衅俄罗斯在赌什么)
1. [中国男篮公布亚运会12人名单](https://so.toutiao.com/search?keyword=中国男篮公布亚运会12人名单)
1. [徐帆开车送养女去学校](https://so.toutiao.com/search?keyword=徐帆开车送养女去学校)
1. [吉隆救援为何不直接炸出泄流通道](https://so.toutiao.com/search?keyword=吉隆救援为何不直接炸出泄流通道)
1. [女子肚子大如孕20周查出多发性肌瘤](https://so.toutiao.com/search?keyword=女子肚子大如孕20周查出多发性肌瘤)
1. [世界会迎来大的金融危机吗](https://so.toutiao.com/search?keyword=世界会迎来大的金融危机吗)
1. [印度加气站软管爆裂7人狂奔](https://so.toutiao.com/search?keyword=印度加气站软管爆裂7人狂奔)
1. [砸杨瀚森球迷已被批评教育](https://so.toutiao.com/search?keyword=砸杨瀚森球迷已被批评教育)
1. [尼泊尔泥石流已致1066人死亡](https://so.toutiao.com/search?keyword=尼泊尔泥石流已致1066人死亡)
1. [电动车误入大货车转弯盲区被卷入车底](https://so.toutiao.com/search?keyword=电动车误入大货车转弯盲区被卷入车底)
1. [航班因台风取消 预定酒店为何不退款](https://so.toutiao.com/search?keyword=航班因台风取消%20预定酒店为何不退款)
1. [普京与伊朗总统会面](https://so.toutiao.com/search?keyword=普京与伊朗总统会面)
1. [现实版“爷爷和7个葫芦娃”走红](https://so.toutiao.com/search?keyword=现实版“爷爷和7个葫芦娃”走红)
1. [家长反对交600元请保洁扫教室被禁言](https://so.toutiao.com/search?keyword=家长反对交600元请保洁扫教室被禁言)
1. [俄高官警告：俄乌冲突恐走向失控](https://so.toutiao.com/search?keyword=俄高官警告：俄乌冲突恐走向失控)
1. [手机集体涨价 谁为性能溢出买单](https://so.toutiao.com/search?keyword=手机集体涨价%20谁为性能溢出买单)
1. [哈萨克斯坦能买到五代机吗](https://so.toutiao.com/search?keyword=哈萨克斯坦能买到五代机吗)
1. [比亚迪终于等来业绩拐点了吗](https://so.toutiao.com/search?keyword=比亚迪终于等来业绩拐点了吗)
1. [河北省直幼儿园开学](https://so.toutiao.com/search?keyword=河北省直幼儿园开学)
1. [女子赢2600万后质疑律师费过高](https://so.toutiao.com/search?keyword=女子赢2600万后质疑律师费过高)
1. [于东来痛批明星扎堆直播带货](https://so.toutiao.com/search?keyword=于东来痛批明星扎堆直播带货)
1. [山东一小学新生古风名字惊艳亮相](https://so.toutiao.com/search?keyword=山东一小学新生古风名字惊艳亮相)
1. [本周A股如何走](https://so.toutiao.com/search?keyword=本周A股如何走)
1. [网红曹奶奶安详离世 享年94岁](https://so.toutiao.com/search?keyword=网红曹奶奶安详离世%20享年94岁)
1. [新疆吐鲁番市托克逊县发生3.4级地震](https://so.toutiao.com/search?keyword=新疆吐鲁番市托克逊县发生3.4级地震)
1. [专家：美国拉G20围堵中国的牌打不响](https://so.toutiao.com/search?keyword=专家：美国拉G20围堵中国的牌打不响)
1. [《早春晴朗》火到海外](https://so.toutiao.com/search?keyword=《早春晴朗》火到海外)
1. [廖三宁：把接下来的亚运会打好](https://so.toutiao.com/search?keyword=廖三宁：把接下来的亚运会打好)
1. [多品牌手机悄然涨价](https://so.toutiao.com/search?keyword=多品牌手机悄然涨价)
1. [大连门将禁区外手球被红牌罚下](https://so.toutiao.com/search?keyword=大连门将禁区外手球被红牌罚下)
1. [足协杯：北京国安3-1兰州陇原竞技](https://so.toutiao.com/search?keyword=足协杯：北京国安3-1兰州陇原竞技)
1. [成都首批“20后”上小学了](https://so.toutiao.com/search?keyword=成都首批“20后”上小学了)
1. [如何评价中国男篮战胜黎巴嫩](https://so.toutiao.com/search?keyword=如何评价中国男篮战胜黎巴嫩)
1. [孩子进校园家长还在围栏外“加班”](https://so.toutiao.com/search?keyword=孩子进校园家长还在围栏外“加班”)
1. [为何说大豆贸易给中美关系留了条缝](https://so.toutiao.com/search?keyword=为何说大豆贸易给中美关系留了条缝)
1. [美国为何向海湾国家金融机构下手](https://so.toutiao.com/search?keyword=美国为何向海湾国家金融机构下手)
1. [莫迪发布与普京同车照片](https://so.toutiao.com/search?keyword=莫迪发布与普京同车照片)
1. [老人买20多年彩票中712万大奖](https://so.toutiao.com/search?keyword=老人买20多年彩票中712万大奖)
1. [国内手机用户平均换机周期破42个月](https://so.toutiao.com/search?keyword=国内手机用户平均换机周期破42个月)
1. [中国数字乡村成绩单来了](https://so.toutiao.com/search?keyword=中国数字乡村成绩单来了)
1. [作家王新军突发疾病去世](https://so.toutiao.com/search?keyword=作家王新军突发疾病去世)
1. [淄博首富干出2000亿港元IPO](https://so.toutiao.com/search?keyword=淄博首富干出2000亿港元IPO)
1. [宇树员工称奖惩机制只有罚几乎没有奖](https://so.toutiao.com/search?keyword=宇树员工称奖惩机制只有罚几乎没有奖)
1. [普京谈中俄免签制度 外交部回应](https://so.toutiao.com/search?keyword=普京谈中俄免签制度%20外交部回应)
1. [手机很贵的时代全面到来了吗](https://so.toutiao.com/search?keyword=手机很贵的时代全面到来了吗)
1. [顾客催促快出餐 老板对包子喊加油](https://so.toutiao.com/search?keyword=顾客催促快出餐%20老板对包子喊加油)
1. [多地初中现超大校额1个年级超90个班](https://so.toutiao.com/search?keyword=多地初中现超大校额1个年级超90个班)
1. [济宁一地辟谣虚假人才引进信息](https://so.toutiao.com/search?keyword=济宁一地辟谣虚假人才引进信息)
1. [奶奶送小孙女到自己的母校上学](https://so.toutiao.com/search?keyword=奶奶送小孙女到自己的母校上学)
1. [爸爸送女儿上大学返程时一路偷偷掉泪](https://so.toutiao.com/search?keyword=爸爸送女儿上大学返程时一路偷偷掉泪)
1. [金晨方发律师声明否认出国生子](https://so.toutiao.com/search?keyword=金晨方发律师声明否认出国生子)
1. [脑瘫男孩逆袭站上大学讲台](https://so.toutiao.com/search?keyword=脑瘫男孩逆袭站上大学讲台)
1. [约580名中国香港运动员将出战亚运会](https://so.toutiao.com/search?keyword=约580名中国香港运动员将出战亚运会)
1. [印度持续“劝退”黄金需求](https://so.toutiao.com/search?keyword=印度持续“劝退”黄金需求)
1. [俄军猛炸乌阵地释放什么信号](https://so.toutiao.com/search?keyword=俄军猛炸乌阵地释放什么信号)
1. [外交部：中国在委合法权益须得到保障](https://so.toutiao.com/search?keyword=外交部：中国在委合法权益须得到保障)
1. [中方：没有兴趣也从未干涉他国内政](https://so.toutiao.com/search?keyword=中方：没有兴趣也从未干涉他国内政)
1. [张子枫暴瘦后首次公开活动](https://so.toutiao.com/search?keyword=张子枫暴瘦后首次公开活动)
1. [名创优品怎么了](https://so.toutiao.com/search?keyword=名创优品怎么了)
1. [郭士强呼吁大家对球员多多包容](https://so.toutiao.com/search?keyword=郭士强呼吁大家对球员多多包容)
1. [教育局回应中学寝室环境脏乱差](https://so.toutiao.com/search?keyword=教育局回应中学寝室环境脏乱差)
1. [重庆奉节一男子拒服兵役被通报](https://so.toutiao.com/search?keyword=重庆奉节一男子拒服兵役被通报)
1. [开学首日家长扛着床垫送孩子报到](https://so.toutiao.com/search?keyword=开学首日家长扛着床垫送孩子报到)
1. [美军方高层集体表态打不动了](https://so.toutiao.com/search?keyword=美军方高层集体表态打不动了)
1. [美国航母停靠前芭堤雅严打卖淫](https://so.toutiao.com/search?keyword=美国航母停靠前芭堤雅严打卖淫)
1. [教育部明确中小学幼儿园开学要求](https://so.toutiao.com/search?keyword=教育部明确中小学幼儿园开学要求)
1. [男子被“越狱”娃娃鱼咬伤](https://so.toutiao.com/search?keyword=男子被“越狱”娃娃鱼咬伤)
1. [中小学教室采光和照明卫生标准来了](https://so.toutiao.com/search?keyword=中小学教室采光和照明卫生标准来了)
1. [中国女排亚运会12人名单公布](https://so.toutiao.com/search?keyword=中国女排亚运会12人名单公布)
1. [小英送女儿上国际学校](https://so.toutiao.com/search?keyword=小英送女儿上国际学校)
1. [泰女子因欠钱被酒吧经理当众剃光头](https://so.toutiao.com/search?keyword=泰女子因欠钱被酒吧经理当众剃光头)
1. [日元保卫战崩盘病根在高市早苗吗](https://so.toutiao.com/search?keyword=日元保卫战崩盘病根在高市早苗吗)
1. [顶楼业主砸掉两个飘窗引邻居恐慌](https://so.toutiao.com/search?keyword=顶楼业主砸掉两个飘窗引邻居恐慌)
1. [杨瀚森倒地后被自家球迷拿球砸](https://so.toutiao.com/search?keyword=杨瀚森倒地后被自家球迷拿球砸)
1. [中方在乌克兰问题上致力于劝和促谈](https://so.toutiao.com/search?keyword=中方在乌克兰问题上致力于劝和促谈)
1. [上海松江迎接首批秋季退役士兵返乡](https://so.toutiao.com/search?keyword=上海松江迎接首批秋季退役士兵返乡)
1. [郑钦文把WTA捧的“10后神话”拆了](https://so.toutiao.com/search?keyword=郑钦文把WTA捧的“10后神话”拆了)
1. [9月众多品牌手机大调价 记者实探](https://so.toutiao.com/search?keyword=9月众多品牌手机大调价%20记者实探)
1. [中方回应美新将合作建大型深水港](https://so.toutiao.com/search?keyword=中方回应美新将合作建大型深水港)
1. [魅族回应手机涨价](https://so.toutiao.com/search?keyword=魅族回应手机涨价)
1. [今天179万人冲进武汉校园](https://so.toutiao.com/search?keyword=今天179万人冲进武汉校园)
1. [科技助力田管 推动粮食稳产增收](https://so.toutiao.com/search?keyword=科技助力田管%20推动粮食稳产增收)
1. [一年级小孩开学抱妈痛哭看呆学姐](https://so.toutiao.com/search?keyword=一年级小孩开学抱妈痛哭看呆学姐)
1. [女孩起夜如厕误把电视柜当马桶坐塌](https://so.toutiao.com/search?keyword=女孩起夜如厕误把电视柜当马桶坐塌)
1. [众多艺术家送别李维康](https://so.toutiao.com/search?keyword=众多艺术家送别李维康)
1. [全球罕见双同卵双生四胞胎上小学了](https://so.toutiao.com/search?keyword=全球罕见双同卵双生四胞胎上小学了)
1. [“外卖员向饮料里加百草枯”系谣言](https://so.toutiao.com/search?keyword=“外卖员向饮料里加百草枯”系谣言)
1. [杨瀚森将缺席后续世预赛](https://so.toutiao.com/search?keyword=杨瀚森将缺席后续世预赛)
1. [大众已启动对星宇股份投诉专项调查](https://so.toutiao.com/search?keyword=大众已启动对星宇股份投诉专项调查)
1. [尼泊尔一侧失联中国公民近百人](https://so.toutiao.com/search?keyword=尼泊尔一侧失联中国公民近百人)
1. [华为小米荣耀多款手机集体调价](https://so.toutiao.com/search?keyword=华为小米荣耀多款手机集体调价)
1. [一场没有刀郎的演唱会为何让人动容](https://so.toutiao.com/search?keyword=一场没有刀郎的演唱会为何让人动容)
1. [吉隆口岸国门所在地仅剩地基](https://so.toutiao.com/search?keyword=吉隆口岸国门所在地仅剩地基)
1. [离职员工改价8元买走100克金条被判刑](https://so.toutiao.com/search?keyword=离职员工改价8元买走100克金条被判刑)
1. [小学开学首日家长们校外“盯盯”打卡](https://so.toutiao.com/search?keyword=小学开学首日家长们校外“盯盯”打卡)
1. [普京向吉尔吉斯斯坦总统夫人献花](https://so.toutiao.com/search?keyword=普京向吉尔吉斯斯坦总统夫人献花)
1. [官方通报女子被踢845个群被迫离职](https://so.toutiao.com/search?keyword=官方通报女子被踢845个群被迫离职)
1. [唐代小瓶子上有间微缩“葡萄园”](https://so.toutiao.com/search?keyword=唐代小瓶子上有间微缩“葡萄园”)
1. [新疆两姑娘追随支教老师脚步考进武大](https://so.toutiao.com/search?keyword=新疆两姑娘追随支教老师脚步考进武大)
1. [包贝尔因出轨风波新剧被除名](https://so.toutiao.com/search?keyword=包贝尔因出轨风波新剧被除名)
1. [95后家长用AI一键搞定开学采购](https://so.toutiao.com/search?keyword=95后家长用AI一键搞定开学采购)
1. [医保局回应门诊输液收20元空调费](https://so.toutiao.com/search?keyword=医保局回应门诊输液收20元空调费)
1. [贵州千户苗寨民族服饰打卡太出圈](https://so.toutiao.com/search?keyword=贵州千户苗寨民族服饰打卡太出圈)
1. [年轻人结婚开始用金条代替三金](https://so.toutiao.com/search?keyword=年轻人结婚开始用金条代替三金)
1. [西藏悼念吉隆泥石流灾害遇难者](https://so.toutiao.com/search?keyword=西藏悼念吉隆泥石流灾害遇难者)
1. [04年女老师第一次当班主任](https://so.toutiao.com/search?keyword=04年女老师第一次当班主任)
1. [巴菲特向投资者发出直白警告](https://so.toutiao.com/search?keyword=巴菲特向投资者发出直白警告)
1. [苏州银行女高管转任副调研员](https://so.toutiao.com/search?keyword=苏州银行女高管转任副调研员)
1. [毛主席纪念堂恢复对外开放](https://so.toutiao.com/search?keyword=毛主席纪念堂恢复对外开放)
1. [00后的孩子都上小学了](https://so.toutiao.com/search?keyword=00后的孩子都上小学了)
1. [张雪机车香港首批交付](https://so.toutiao.com/search?keyword=张雪机车香港首批交付)
1. [日本男星电车内性侵女高中生被捕](https://so.toutiao.com/search?keyword=日本男星电车内性侵女高中生被捕)
1. [选举不如预期辞去党主席？郑丽文回应](https://so.toutiao.com/search?keyword=选举不如预期辞去党主席？郑丽文回应)
1. [榴莲价格“大跳水”](https://so.toutiao.com/search?keyword=榴莲价格“大跳水”)
1. [如何看华为重回中国手机市场份额第一](https://so.toutiao.com/search?keyword=如何看华为重回中国手机市场份额第一)
1. [男子模仿喜剧之王桥段上演开学名场面](https://so.toutiao.com/search?keyword=男子模仿喜剧之王桥段上演开学名场面)
1. [五角大楼自曝“家底见空”](https://so.toutiao.com/search?keyword=五角大楼自曝“家底见空”)
1. [被丈夫扔下土崖坠亡女子家属发声](https://so.toutiao.com/search?keyword=被丈夫扔下土崖坠亡女子家属发声)
1. [美国教师回中国 昔日学生热泪盈眶](https://so.toutiao.com/search?keyword=美国教师回中国%20昔日学生热泪盈眶)
1. [3岁加沙男孩遭以军袭击身亡](https://so.toutiao.com/search?keyword=3岁加沙男孩遭以军袭击身亡)
1. [郑钦文打哭16岁俄罗斯新星](https://so.toutiao.com/search?keyword=郑钦文打哭16岁俄罗斯新星)
1. [志愿者帮烈士家属秋收](https://so.toutiao.com/search?keyword=志愿者帮烈士家属秋收)
1. [上半年营收4678亿的华为在做几门生意](https://so.toutiao.com/search?keyword=上半年营收4678亿的华为在做几门生意)
1. [全球将迎来本年度第三次“时间重叠”](https://so.toutiao.com/search?keyword=全球将迎来本年度第三次“时间重叠”)
1. [吉隆泥石流冲击痕迹最高达60米](https://so.toutiao.com/search?keyword=吉隆泥石流冲击痕迹最高达60米)
1. [郑钦文时隔457天再取大满贯正赛胜利](https://so.toutiao.com/search?keyword=郑钦文时隔457天再取大满贯正赛胜利)
1. [感受中国服贸增长强劲动能](https://so.toutiao.com/search?keyword=感受中国服贸增长强劲动能)
1. [德总理称以色列是中东唯一民主国家](https://so.toutiao.com/search?keyword=德总理称以色列是中东唯一民主国家)
1. [一家16口包中巴送新生上大学](https://so.toutiao.com/search?keyword=一家16口包中巴送新生上大学)
1. [网友意外拍到泥石流暴发瞬间](https://so.toutiao.com/search?keyword=网友意外拍到泥石流暴发瞬间)
1. [华为小米荣耀多款手机今日集体调价](https://so.toutiao.com/search?keyword=华为小米荣耀多款手机今日集体调价)
1. [普京抵达吉尔吉斯斯坦获赠雪豹玩具](https://so.toutiao.com/search?keyword=普京抵达吉尔吉斯斯坦获赠雪豹玩具)
1. [胖东来员工看演唱会高喊休的自由假](https://so.toutiao.com/search?keyword=胖东来员工看演唱会高喊休的自由假)
1. [男子多次被同一辆车挡路提醒后遭报复](https://so.toutiao.com/search?keyword=男子多次被同一辆车挡路提醒后遭报复)
1. [中国男篮两连胜暂列小组第三](https://so.toutiao.com/search?keyword=中国男篮两连胜暂列小组第三)
1. [美陆军部长被曝已向特朗普递交辞呈](https://so.toutiao.com/search?keyword=美陆军部长被曝已向特朗普递交辞呈)
1. [战友 我们等你们回来签收快递](https://so.toutiao.com/search?keyword=战友%20我们等你们回来签收快递)
1. [演员王鸥：我目前独自养育一个孩子](https://so.toutiao.com/search?keyword=演员王鸥：我目前独自养育一个孩子)
1. [郑钦文2-1逆转柳托娃](https://so.toutiao.com/search?keyword=郑钦文2-1逆转柳托娃)
1. [美股三大指数集体收跌](https://so.toutiao.com/search?keyword=美股三大指数集体收跌)
1. [美国炸鸡巨头中国首店开业](https://so.toutiao.com/search?keyword=美国炸鸡巨头中国首店开业)
1. [情侣住酒店145天将房间变成垃圾场](https://so.toutiao.com/search?keyword=情侣住酒店145天将房间变成垃圾场)
1. [电脑两个月从一万二涨到一万七](https://so.toutiao.com/search?keyword=电脑两个月从一万二涨到一万七)
1. [六大行房贷余额少了5000多亿](https://so.toutiao.com/search?keyword=六大行房贷余额少了5000多亿)
1. [“子涵梓萱”的时代已经过去](https://so.toutiao.com/search?keyword=“子涵梓萱”的时代已经过去)
1. [库克回应任苹果CEO最后一天](https://so.toutiao.com/search?keyword=库克回应任苹果CEO最后一天)
1. [女子疑要2万港元筹码被拒诬告男网友](https://so.toutiao.com/search?keyword=女子疑要2万港元筹码被拒诬告男网友)
1. [茶饮店模特半裸出任一日店长引争议](https://so.toutiao.com/search?keyword=茶饮店模特半裸出任一日店长引争议)
1. [文具店老板坚持15年免费代包书皮](https://so.toutiao.com/search?keyword=文具店老板坚持15年免费代包书皮)
1. [世亚预F组最新排名：中国男篮第三](https://so.toutiao.com/search?keyword=世亚预F组最新排名：中国男篮第三)
1. [台风“沙德尔”停止编号后再度加强](https://so.toutiao.com/search?keyword=台风“沙德尔”停止编号后再度加强)
1. [利物浦官宣新边锋巴尔科拉](https://so.toutiao.com/search?keyword=利物浦官宣新边锋巴尔科拉)
1. [西甲积分榜：巴萨3轮全胜领跑](https://so.toutiao.com/search?keyword=西甲积分榜：巴萨3轮全胜领跑)
1. [“西湖兜篮”靠什么完成蜕变](https://so.toutiao.com/search?keyword=“西湖兜篮”靠什么完成蜕变)
1. [这些位置长了息肉一定要当心](https://so.toutiao.com/search?keyword=这些位置长了息肉一定要当心)
1. [班主任何时变成了“烫手山芋”](https://so.toutiao.com/search?keyword=班主任何时变成了“烫手山芋”)
1. [黄曲霉素就藏在厨房5个角落](https://so.toutiao.com/search?keyword=黄曲霉素就藏在厨房5个角落)
1. [拉菲尼亚抽射破门梅开二度](https://so.toutiao.com/search?keyword=拉菲尼亚抽射破门梅开二度)
1. [家电三巨头集体“造人”](https://so.toutiao.com/search?keyword=家电三巨头集体“造人”)
1. [探访中亚“义乌”解锁“中国密码”](https://so.toutiao.com/search?keyword=探访中亚“义乌”解锁“中国密码”)
1. [杨瀚森绝杀 中国男篮险胜黎巴嫩](https://so.toutiao.com/search?keyword=杨瀚森绝杀%20中国男篮险胜黎巴嫩)
1. [罗永浩再怒斥电视机厂商](https://so.toutiao.com/search?keyword=罗永浩再怒斥电视机厂商)
1. [开学了舅舅送别十位外甥](https://so.toutiao.com/search?keyword=开学了舅舅送别十位外甥)
1. [662分考生高考出分后和父亲实地探校](https://so.toutiao.com/search?keyword=662分考生高考出分后和父亲实地探校)
1. [为什么建议35岁就开始控糖](https://so.toutiao.com/search?keyword=为什么建议35岁就开始控糖)
1. [亚马尔巴萨生涯已斩获50球](https://so.toutiao.com/search?keyword=亚马尔巴萨生涯已斩获50球)
1. [特斯拉现后轮塌陷“通病”](https://so.toutiao.com/search?keyword=特斯拉现后轮塌陷“通病”)
1. [特朗普在加拿大的实名认证地标要没了](https://so.toutiao.com/search?keyword=特朗普在加拿大的实名认证地标要没了)
1. [江苏省委组织部部长刘建洋被查](https://so.toutiao.com/search?keyword=江苏省委组织部部长刘建洋被查)
1. [华为上半年营收4678亿元](https://so.toutiao.com/search?keyword=华为上半年营收4678亿元)
1. [中国男人为什么突然不爱皮鞋了](https://so.toutiao.com/search?keyword=中国男人为什么突然不爱皮鞋了)
1. [吉隆口岸核心区现存建筑仅剩水塔](https://so.toutiao.com/search?keyword=吉隆口岸核心区现存建筑仅剩水塔)
1. [俄罗斯为何要向中国购买破冰货轮](https://so.toutiao.com/search?keyword=俄罗斯为何要向中国购买破冰货轮)
1. [马杜罗狱中近照曝光：双手比耶](https://so.toutiao.com/search?keyword=马杜罗狱中近照曝光：双手比耶)
1. [海来阿木被歌迷递烟举动吓走](https://so.toutiao.com/search?keyword=海来阿木被歌迷递烟举动吓走)
1. [杨鸣现身中国男篮世预赛现场](https://so.toutiao.com/search?keyword=杨鸣现身中国男篮世预赛现场)
1. [外媒：中国AI迫使美国重新思考AI战略](https://so.toutiao.com/search?keyword=外媒：中国AI迫使美国重新思考AI战略)
1. [绿营人士力挺统一释放什么信号](https://so.toutiao.com/search?keyword=绿营人士力挺统一释放什么信号)
1. [笔试第一超第二名20多分引质疑](https://so.toutiao.com/search?keyword=笔试第一超第二名20多分引质疑)
1. [*ST闻泰重大诉讼新进展](https://so.toutiao.com/search?keyword=*ST闻泰重大诉讼新进展)
1. [媒体：体育反腐挑破脓疮利于长出新肌](https://so.toutiao.com/search?keyword=媒体：体育反腐挑破脓疮利于长出新肌)
1. [人形机器人到底是谁在批量买单](https://so.toutiao.com/search?keyword=人形机器人到底是谁在批量买单)
1. [韩副总理欲坐飞机赴美却得知职位不保](https://so.toutiao.com/search?keyword=韩副总理欲坐飞机赴美却得知职位不保)
1. [王兴兴：宇树的王](https://so.toutiao.com/search?keyword=王兴兴：宇树的王)
1. [邱震海：特朗普政府极度缺乏长期战略](https://so.toutiao.com/search?keyword=邱震海：特朗普政府极度缺乏长期战略)
1. [大连蓝天救援车被指售卖祭祀用品](https://so.toutiao.com/search?keyword=大连蓝天救援车被指售卖祭祀用品)
1. [中方敦促日方严惩擅闯中国使馆者](https://so.toutiao.com/search?keyword=中方敦促日方严惩擅闯中国使馆者)
1. [陈雨菲等多位国羽主力退出中国大师赛](https://so.toutiao.com/search?keyword=陈雨菲等多位国羽主力退出中国大师赛)
1. [王鸥何九华没有商业关联](https://so.toutiao.com/search?keyword=王鸥何九华没有商业关联)
1. [王俊杰替补拿下11分5篮板1抢断](https://so.toutiao.com/search?keyword=王俊杰替补拿下11分5篮板1抢断)
1. [《重案六组：消失的警号》是黑马吗](https://so.toutiao.com/search?keyword=《重案六组：消失的警号》是黑马吗)
1. [巴基斯坦总理与伊朗总统举行会晤](https://so.toutiao.com/search?keyword=巴基斯坦总理与伊朗总统举行会晤)
1. [丁俊晖晋级斯诺克英国公开赛64强](https://so.toutiao.com/search?keyword=丁俊晖晋级斯诺克英国公开赛64强)
1. [赵继伟高难度中投+抢断](https://so.toutiao.com/search?keyword=赵继伟高难度中投+抢断)
1. [新疆姑娘跨越4000多公里到南昌上学](https://so.toutiao.com/search?keyword=新疆姑娘跨越4000多公里到南昌上学)
1. [片仔癀上半年营收净利双降](https://so.toutiao.com/search?keyword=片仔癀上半年营收净利双降)
1. [日本万亿日元追AI是作秀还是自救](https://so.toutiao.com/search?keyword=日本万亿日元追AI是作秀还是自救)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Sep 02 2026 02:27:43 GMT+0800 (China Standard Time) -->

1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [王鸥官宣独自养育孩子](https://www.zhihu.com/search?q=%E7%8E%8B%E9%B8%A5%E5%AE%98%E5%AE%A3%E7%8B%AC%E8%87%AA%E5%85%BB%E8%82%B2%E5%AD%A9%E5%AD%90)
1. [新版《国防动员法》10 月 1 日实施](https://www.zhihu.com/search?q=%E6%96%B0%E7%89%88%E3%80%8A%E5%9B%BD%E9%98%B2%E5%8A%A8%E5%91%98%E6%B3%95%E3%80%8B10%20%E6%9C%88%201%20%E6%97%A5%E5%AE%9E%E6%96%BD)
1. [Zhihu CLI 功能上新](https://www.zhihu.com/search?q=Zhihu%20CLI%20%E5%8A%9F%E8%83%BD%E4%B8%8A%E6%96%B0)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [官方通报女子被踢出群被迫离职](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%B8%A2%E5%87%BA%E7%BE%A4%E8%A2%AB%E8%BF%AB%E7%A6%BB%E8%81%8C)
1. [官方通报星宇股份批量劝退应届生](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E6%89%B9%E9%87%8F%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F)
1. [多款手机正式涨价](https://www.zhihu.com/search?q=%E5%A4%9A%E6%AC%BE%E6%89%8B%E6%9C%BA%E6%AD%A3%E5%BC%8F%E6%B6%A8%E4%BB%B7)
1. [星宇股份裁应届生疑被告到欧盟](https://www.zhihu.com/search?q=%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%A3%81%E5%BA%94%E5%B1%8A%E7%94%9F%E7%96%91%E8%A2%AB%E5%91%8A%E5%88%B0%E6%AC%A7%E7%9B%9F)
1. [国家动物博物馆两小孩致标本受损](https://www.zhihu.com/search?q=%E5%9B%BD%E5%AE%B6%E5%8A%A8%E7%89%A9%E5%8D%9A%E7%89%A9%E9%A6%86%E4%B8%A4%E5%B0%8F%E5%AD%A9%E8%87%B4%E6%A0%87%E6%9C%AC%E5%8F%97%E6%8D%9F)
1. [库克正式卸任苹果 CEO](https://www.zhihu.com/search?q=%E5%BA%93%E5%85%8B%E6%AD%A3%E5%BC%8F%E5%8D%B8%E4%BB%BB%E8%8B%B9%E6%9E%9C%20CEO)
1. [宇树否认「只有罚无奖」机制](https://www.zhihu.com/search?q=%E5%AE%87%E6%A0%91%E5%90%A6%E8%AE%A4%E3%80%8C%E5%8F%AA%E6%9C%89%E7%BD%9A%E6%97%A0%E5%A5%96%E3%80%8D%E6%9C%BA%E5%88%B6)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Sep 02 2026 02:33:45 GMT+0800 (China Standard Time) -->

1. [深圳全市中小学生校服款式统一，学生家长可自行去商超购买，怎样看待这种模式？你支持全国推广吗？](https://www.zhihu.com/question/2078089875853505300)
1. [9月1日起外籍个人从外商投资企业取得股息红利不再免征个税，如何解读？会带来多大规模的税收增量？](https://www.zhihu.com/question/2078155283776458800)
1. [如何看待曝科大讯飞公关副总裁韩煜尘被解除职务？有什么隐情吗？](https://www.zhihu.com/question/2077806827740165400)
1. [如何看待宇树回应「重处罚少奖励」、100 元报销须王兴兴审批，称很多内容不实？公司该如何设计奖惩机制？](https://www.zhihu.com/question/2078162988490383400)
1. [如何评价张一山、李沐宸主演的刑侦剧《重案六组：消失的警号》？](https://www.zhihu.com/question/2077819863561679400)
1. [R星确认GTA6每个房间都手工打造，连NPC喝什么、桌上留什么痕迹都精心设计，你看好这种细节投入吗？](https://www.zhihu.com/question/2077564942153269800)
1. [藏族为啥爱去成都，而不是西宁？](https://www.zhihu.com/question/2074509228237234200)
1. [国产编程语言 zlangv0.12.2.0 发布，支持中文编程，这意味着什么？](https://www.zhihu.com/question/2075987799711430100)
1. [越南批量设立直辖市，这对其经济发展和承接中国产业转移意味着什么？](https://www.zhihu.com/question/2077740582496122400)
1. [为什么鲁菜身为八大菜系之首，我们却很少见到鲁菜馆呢？](https://www.zhihu.com/question/1918046967973523700)
1. [高铁二等座变无座，12306 称临时调整无赔偿，此规定合理吗？](https://www.zhihu.com/question/2077087227780272400)
1. [2026暑期档票房 124.98 亿，创影史最高场次纪录，《功夫女足》夺冠，如何评价这一成绩？](https://www.zhihu.com/question/2078049623604719600)
1. [如何评价《绿灯军团》第三集？](https://www.zhihu.com/question/2077706323114866000)
1. [如何评价半个月不到，天蚕土豆的新书在读从1100多万跌到200万？](https://www.zhihu.com/question/2077757241512440000)
1. [学数学是尽可能的多刷题还是一道题多思考？](https://www.zhihu.com/question/2069408986873467100)
1. [为啥总觉得虚竹、金轮法王、张无忌实战差？](https://www.zhihu.com/question/1950568608578143700)
1. [NBA历史最强八人轮换，你的选择是什么？](https://www.zhihu.com/question/1939312899219777500)
1. [2627赛季英超第2轮阿斯顿维拉 0:1 阿森纳，如何评价这场比赛？](https://www.zhihu.com/question/2077954524350829600)
1. [特斯拉在港澳推出更平价版 Model3，最低售价不足18万元，这个价格竞争力如何？会有人愿意买单吗？](https://www.zhihu.com/question/2077517477119054800)
1. [河南 5 人聚餐吃生鱼片确诊肝吸血虫病，如何避免该病？是否有扩散的风险？](https://www.zhihu.com/question/2077414549037266400)
1. [刘翔姚明苏炳添发展轨道大不同，只有刘翔陷入是否买断困境，是赛道不同还是性格和选择造成的？](https://www.zhihu.com/question/2076312692642653200)
1. [以双鱼座阿布罗狄的能力他是如何能成黄金圣斗士的？](https://www.zhihu.com/question/393133674)
1. [如何面对他人对你的恶意？](https://www.zhihu.com/question/335128751)
1. [如何评价 8 月 28 日 LPL 场间互动主持人十月因“判定抢答”引发争议及后续道歉？](https://www.zhihu.com/question/2076800593423815200)
1. [「正常倾诉」和「倒情绪垃圾」的界限在哪里？](https://www.zhihu.com/question/13591645870)
1. [日剧里经常出现的障子纸门有什么特别之处，为什么明明容易破但还是延续了几百年？](https://www.zhihu.com/question/2073047511577649700)
1. [就国内而言，读大学的意义是什么?](https://www.zhihu.com/question/27622564)
1. [孙权与刘备联盟破裂，是谁之过?](https://www.zhihu.com/question/3088432957)
1. [《脱口秀和Ta的朋友们》第三季，小奇夺冠算是意外吗？](https://www.zhihu.com/question/2077675077198427000)
1. [9.1 开学了，送孩子返校的家长和复工的老师们是什么心情？](https://www.zhihu.com/question/2077746456002127400)

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
<!-- 最后更新时间 Wed Sep 02 2026 02:39:14 GMT+0800 (China Standard Time) -->

1. [2026上合峰会习近平提出4点主张](https://s.weibo.com//weibo?q=%232026%E4%B8%8A%E5%90%88%E5%B3%B0%E4%BC%9A%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%8F%90%E5%87%BA4%E7%82%B9%E4%B8%BB%E5%BC%A0%23&Refer=new_time)
1. [手机涨价 卖不动](https://s.weibo.com//weibo?q=%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%20%E5%8D%96%E4%B8%8D%E5%8A%A8&t=31&band_rank=1&Refer=top)
1. [张一山演技](https://s.weibo.com//weibo?q=%E5%BC%A0%E4%B8%80%E5%B1%B1%E6%BC%94%E6%8A%80&t=31&band_rank=2&Refer=top)
1. [上合示范区释放区域经贸合作新动能](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E5%90%88%E7%A4%BA%E8%8C%83%E5%8C%BA%E9%87%8A%E6%94%BE%E5%8C%BA%E5%9F%9F%E7%BB%8F%E8%B4%B8%E5%90%88%E4%BD%9C%E6%96%B0%E5%8A%A8%E8%83%BD%23&t=31&band_rank=3&Refer=top)
1. [苹果CEO特努斯入驻微博](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9CCEO%E7%89%B9%E5%8A%AA%E6%96%AF%E5%85%A5%E9%A9%BB%E5%BE%AE%E5%8D%9A&t=31&band_rank=4&Refer=top)
1. [花少2](https://s.weibo.com//weibo?q=%E8%8A%B1%E5%B0%912&t=31&band_rank=5&Refer=top)
1. [那个用防窥屏的朋友](https://s.weibo.com//weibo?q=%E9%82%A3%E4%B8%AA%E7%94%A8%E9%98%B2%E7%AA%A5%E5%B1%8F%E7%9A%84%E6%9C%8B%E5%8F%8B&t=31&band_rank=6&Refer=top)
1. [杨洋花少口碑](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E6%B4%8B%E8%8A%B1%E5%B0%91%E5%8F%A3%E7%A2%91%23&t=31&band_rank=7&Refer=top)
1. [深圳校服为什么引发网友共鸣](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%A0%A1%E6%9C%8D%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BC%95%E5%8F%91%E7%BD%91%E5%8F%8B%E5%85%B1%E9%B8%A3%23&t=31&band_rank=8&Refer=top)
1. [花少2分析](https://s.weibo.com//weibo?q=%E8%8A%B1%E5%B0%912%E5%88%86%E6%9E%90&t=31&band_rank=9&Refer=top)
1. [手机涨价](https://s.weibo.com//weibo?q=%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7&t=31&band_rank=10&Refer=top)
1. [皇马将西藏与尼泊尔并列拒绝改正](https://s.weibo.com//weibo?q=%23%E7%9A%87%E9%A9%AC%E5%B0%86%E8%A5%BF%E8%97%8F%E4%B8%8E%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B9%B6%E5%88%97%E6%8B%92%E7%BB%9D%E6%94%B9%E6%AD%A3%23&t=31&band_rank=11&Refer=top)
1. [断亲潮 八成年轻人一年只联系一两次](https://s.weibo.com//weibo?q=%E6%96%AD%E4%BA%B2%E6%BD%AE%20%E5%85%AB%E6%88%90%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%80%E5%B9%B4%E5%8F%AA%E8%81%94%E7%B3%BB%E4%B8%80%E4%B8%A4%E6%AC%A1&t=31&band_rank=12&Refer=top)
1. [皇马 中国西藏](https://s.weibo.com//weibo?q=%E7%9A%87%E9%A9%AC%20%E4%B8%AD%E5%9B%BD%E8%A5%BF%E8%97%8F&t=31&band_rank=13&Refer=top)
1. [年轻人断亲潮](https://s.weibo.com//weibo?q=%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%96%AD%E4%BA%B2%E6%BD%AE&t=31&band_rank=14&Refer=top)
1. [才知道老一辈做饭比我们更狠](https://s.weibo.com//weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E8%80%81%E4%B8%80%E8%BE%88%E5%81%9A%E9%A5%AD%E6%AF%94%E6%88%91%E4%BB%AC%E6%9B%B4%E7%8B%A0%23&t=31&band_rank=15&Refer=top)
1. [被父母全力托举的孩子会不会被养废](https://s.weibo.com//weibo?q=%E8%A2%AB%E7%88%B6%E6%AF%8D%E5%85%A8%E5%8A%9B%E6%89%98%E4%B8%BE%E7%9A%84%E5%AD%A9%E5%AD%90%E4%BC%9A%E4%B8%8D%E4%BC%9A%E8%A2%AB%E5%85%BB%E5%BA%9F&t=31&band_rank=16&Refer=top)
1. [西藏4万平方米搜寻两遍意味着什么](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F4%E4%B8%87%E5%B9%B3%E6%96%B9%E7%B1%B3%E6%90%9C%E5%AF%BB%E4%B8%A4%E9%81%8D%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23&t=31&band_rank=17&Refer=top)
1. [苹果或将下架11款设备](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%88%96%E5%B0%86%E4%B8%8B%E6%9E%B611%E6%AC%BE%E8%AE%BE%E5%A4%87%23&t=31&band_rank=18&Refer=top)
1. [女装半片毛衣卖128元](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E8%A3%85%E5%8D%8A%E7%89%87%E6%AF%9B%E8%A1%A3%E5%8D%96128%E5%85%83%23&t=31&band_rank=19&Refer=top)
1. [女性内衣加抗癌药紫杉醇成分引争议](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E6%80%A7%E5%86%85%E8%A1%A3%E5%8A%A0%E6%8A%97%E7%99%8C%E8%8D%AF%E7%B4%AB%E6%9D%89%E9%86%87%E6%88%90%E5%88%86%E5%BC%95%E4%BA%89%E8%AE%AE%23&t=31&band_rank=20&Refer=top)
1. [徐州12345涌入万件演唱会诉求](https://s.weibo.com//weibo?q=%23%E5%BE%90%E5%B7%9E12345%E6%B6%8C%E5%85%A5%E4%B8%87%E4%BB%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E8%AF%89%E6%B1%82%23&t=31&band_rank=21&Refer=top)
1. [杭州电梯事件女方公司被扒](https://s.weibo.com//weibo?q=%E6%9D%AD%E5%B7%9E%E7%94%B5%E6%A2%AF%E4%BA%8B%E4%BB%B6%E5%A5%B3%E6%96%B9%E5%85%AC%E5%8F%B8%E8%A2%AB%E6%89%92&t=31&band_rank=22&Refer=top)
1. [可可里小姐闭店 女装退货率](https://s.weibo.com//weibo?q=%E5%8F%AF%E5%8F%AF%E9%87%8C%E5%B0%8F%E5%A7%90%E9%97%AD%E5%BA%97%20%E5%A5%B3%E8%A3%85%E9%80%80%E8%B4%A7%E7%8E%87&t=31&band_rank=23&Refer=top)
1. [曼城1.2亿镑报价恩佐](https://s.weibo.com//weibo?q=%23%E6%9B%BC%E5%9F%8E1.2%E4%BA%BF%E9%95%91%E6%8A%A5%E4%BB%B7%E6%81%A9%E4%BD%90%23&t=31&band_rank=24&Refer=top)
1. [井柏然的吻戏是弯腰往上亲](https://s.weibo.com//weibo?q=%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9A%84%E5%90%BB%E6%88%8F%E6%98%AF%E5%BC%AF%E8%85%B0%E5%BE%80%E4%B8%8A%E4%BA%B2&t=31&band_rank=25&Refer=top)
1. [找了29年的人已离世24年男子崩溃大哭](https://s.weibo.com//weibo?q=%23%E6%89%BE%E4%BA%8629%E5%B9%B4%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%A6%BB%E4%B8%9624%E5%B9%B4%E7%94%B7%E5%AD%90%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23&t=31&band_rank=26&Refer=top)
1. [印度一24岁员工被喷嘴击中头部身亡](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%8024%E5%B2%81%E5%91%98%E5%B7%A5%E8%A2%AB%E5%96%B7%E5%98%B4%E5%87%BB%E4%B8%AD%E5%A4%B4%E9%83%A8%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=27&Refer=top)
1. [家长撕孩子作业老师怎么回复](https://s.weibo.com//weibo?q=%E5%AE%B6%E9%95%BF%E6%92%95%E5%AD%A9%E5%AD%90%E4%BD%9C%E4%B8%9A%E8%80%81%E5%B8%88%E6%80%8E%E4%B9%88%E5%9B%9E%E5%A4%8D&t=31&band_rank=28&Refer=top)
1. [足协杯](https://s.weibo.com//weibo?q=%E8%B6%B3%E5%8D%8F%E6%9D%AF&t=31&band_rank=29&Refer=top)
1. [中方回应俄愿将免签制度转为永久性](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BF%84%E6%84%BF%E5%B0%86%E5%85%8D%E7%AD%BE%E5%88%B6%E5%BA%A6%E8%BD%AC%E4%B8%BA%E6%B0%B8%E4%B9%85%E6%80%A7%23&t=31&band_rank=30&Refer=top)
1. [无畏以后直播间见](https://s.weibo.com//weibo?q=%E6%97%A0%E7%95%8F%E4%BB%A5%E5%90%8E%E7%9B%B4%E6%92%AD%E9%97%B4%E8%A7%81&t=31&band_rank=31&Refer=top)
1. [灵活的走位可以避免绝大多数的伤害](https://s.weibo.com//weibo?q=%E7%81%B5%E6%B4%BB%E7%9A%84%E8%B5%B0%E4%BD%8D%E5%8F%AF%E4%BB%A5%E9%81%BF%E5%85%8D%E7%BB%9D%E5%A4%A7%E5%A4%9A%E6%95%B0%E7%9A%84%E4%BC%A4%E5%AE%B3&t=31&band_rank=32&Refer=top)
1. [36岁女子求职被HR脑补有孩子](https://s.weibo.com//weibo?q=%2336%E5%B2%81%E5%A5%B3%E5%AD%90%E6%B1%82%E8%81%8C%E8%A2%ABHR%E8%84%91%E8%A1%A5%E6%9C%89%E5%AD%A9%E5%AD%90%23&t=31&band_rank=33&Refer=top)
1. [男子盘手串包浆后被妻子用刷子搓干净](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E7%9B%98%E6%89%8B%E4%B8%B2%E5%8C%85%E6%B5%86%E5%90%8E%E8%A2%AB%E5%A6%BB%E5%AD%90%E7%94%A8%E5%88%B7%E5%AD%90%E6%90%93%E5%B9%B2%E5%87%80%23&t=31&band_rank=34&Refer=top)
1. [一个狗狗找不到主人的视频火了](https://s.weibo.com//weibo?q=%E4%B8%80%E4%B8%AA%E7%8B%97%E7%8B%97%E6%89%BE%E4%B8%8D%E5%88%B0%E4%B8%BB%E4%BA%BA%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86&t=31&band_rank=35&Refer=top)
1. [周迅今年两部作品入围A类电影节](https://s.weibo.com//weibo?q=%E5%91%A8%E8%BF%85%E4%BB%8A%E5%B9%B4%E4%B8%A4%E9%83%A8%E4%BD%9C%E5%93%81%E5%85%A5%E5%9B%B4A%E7%B1%BB%E7%94%B5%E5%BD%B1%E8%8A%82&t=31&band_rank=36&Refer=top)
1. [iPhoneUltra黄牛溢价](https://s.weibo.com//weibo?q=iPhoneUltra%E9%BB%84%E7%89%9B%E6%BA%A2%E4%BB%B7&t=31&band_rank=37&Refer=top)
1. [欧豪演技](https://s.weibo.com//weibo?q=%E6%AC%A7%E8%B1%AA%E6%BC%94%E6%8A%80&t=31&band_rank=38&Refer=top)
1. [官方通报男子入伍不到3月拒服兵役](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E5%85%A5%E4%BC%8D%E4%B8%8D%E5%88%B03%E6%9C%88%E6%8B%92%E6%9C%8D%E5%85%B5%E5%BD%B9%23&t=31&band_rank=39&Refer=top)
1. [皇马应向中国公众诚恳道歉](https://s.weibo.com//weibo?q=%23%E7%9A%87%E9%A9%AC%E5%BA%94%E5%90%91%E4%B8%AD%E5%9B%BD%E5%85%AC%E4%BC%97%E8%AF%9A%E6%81%B3%E9%81%93%E6%AD%89%23&t=31&band_rank=40&Refer=top)
1. [深圳一婴儿早产116天出生仅330克](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%A9%B4%E5%84%BF%E6%97%A9%E4%BA%A7116%E5%A4%A9%E5%87%BA%E7%94%9F%E4%BB%85330%E5%85%8B%23&t=31&band_rank=41&Refer=top)
1. [栾念哭给我狠狠哭](https://s.weibo.com//weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%93%AD%E7%BB%99%E6%88%91%E7%8B%A0%E7%8B%A0%E5%93%AD%23&t=31&band_rank=42&Refer=top)
1. [香港大药房不仅是骗财更是害人](https://s.weibo.com//weibo?q=%23%E9%A6%99%E6%B8%AF%E5%A4%A7%E8%8D%AF%E6%88%BF%E4%B8%8D%E4%BB%85%E6%98%AF%E9%AA%97%E8%B4%A2%E6%9B%B4%E6%98%AF%E5%AE%B3%E4%BA%BA%23&t=31&band_rank=43&Refer=top)
1. [虎跳峡4分钟山体滑坡画面曝光](https://s.weibo.com//weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A14%E5%88%86%E9%92%9F%E5%B1%B1%E4%BD%93%E6%BB%91%E5%9D%A1%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23&t=31&band_rank=44&Refer=top)
1. [断亲潮 年轻人释然](https://s.weibo.com//weibo?q=%E6%96%AD%E4%BA%B2%E6%BD%AE%20%E5%B9%B4%E8%BD%BB%E4%BA%BA%E9%87%8A%E7%84%B6&t=31&band_rank=45&Refer=top)
1. [妈妈晒出自闭症女儿](https://s.weibo.com//weibo?q=%23%E5%A6%88%E5%A6%88%E6%99%92%E5%87%BA%E8%87%AA%E9%97%AD%E7%97%87%E5%A5%B3%E5%84%BF%23&t=31&band_rank=46&Refer=top)
1. [开学第一课](https://s.weibo.com//weibo?q=%E5%BC%80%E5%AD%A6%E7%AC%AC%E4%B8%80%E8%AF%BE&t=31&band_rank=47&Refer=top)
1. [谷爱凌13岁开始读育儿手册](https://s.weibo.com//weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C13%E5%B2%81%E5%BC%80%E5%A7%8B%E8%AF%BB%E8%82%B2%E5%84%BF%E6%89%8B%E5%86%8C%23&t=31&band_rank=48&Refer=top)
1. [回应是很昂贵的情感劳动](https://s.weibo.com//weibo?q=%E5%9B%9E%E5%BA%94%E6%98%AF%E5%BE%88%E6%98%82%E8%B4%B5%E7%9A%84%E6%83%85%E6%84%9F%E5%8A%B3%E5%8A%A8&t=31&band_rank=49&Refer=top)
1. [黄金白银快速下跌](https://s.weibo.com//weibo?q=%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E5%BF%AB%E9%80%9F%E4%B8%8B%E8%B7%8C&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
