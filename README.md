# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-20 02:03:18

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
<!-- 最后更新时间 Sat Sep 19 2026 22:44:46 GMT+0800 (China Standard Time) -->

1. [数学老师投300万拍电影票房不足3万](https://so.toutiao.com/search?keyword=数学老师投300万拍电影票房不足3万)
1. [传统豪车集体降价续命](https://so.toutiao.com/search?keyword=传统豪车集体降价续命)
1. [各地开展不同形式国防教育活动](https://so.toutiao.com/search?keyword=各地开展不同形式国防教育活动)
1. [亚运会开幕式](https://so.toutiao.com/search?keyword=亚运会开幕式)
1. [飞天茅台终端价下跌的原因是什么](https://so.toutiao.com/search?keyword=飞天茅台终端价下跌的原因是什么)
1. [民警吃宵夜遇邻桌仨小偷在“复盘”](https://so.toutiao.com/search?keyword=民警吃宵夜遇邻桌仨小偷在“复盘”)
1. [“手搓电影”《目不转睛》票房遇冷](https://so.toutiao.com/search?keyword=“手搓电影”《目不转睛》票房遇冷)
1. [37岁法国前总理宣布参选总统](https://so.toutiao.com/search?keyword=37岁法国前总理宣布参选总统)
1. [胡明轩吴愉高擎五星红旗入场](https://so.toutiao.com/search?keyword=胡明轩吴愉高擎五星红旗入场)
1. [莎拉做好接任总统准备？菲总统府回应](https://so.toutiao.com/search?keyword=莎拉做好接任总统准备？菲总统府回应)
1. [网民编造彭州山区蛇患致死被处罚](https://so.toutiao.com/search?keyword=网民编造彭州山区蛇患致死被处罚)
1. [张雪挑染了头发嘴硬称老了白了](https://so.toutiao.com/search?keyword=张雪挑染了头发嘴硬称老了白了)
1. [黄渤调侃黄晓明成黄博了](https://so.toutiao.com/search?keyword=黄渤调侃黄晓明成黄博了)
1. [父女在商场遭人围堵4岁女儿被吓哭](https://so.toutiao.com/search?keyword=父女在商场遭人围堵4岁女儿被吓哭)
1. [北京奥运会背包现身名古屋亚运会](https://so.toutiao.com/search?keyword=北京奥运会背包现身名古屋亚运会)
1. [“苏超”八强出炉](https://so.toutiao.com/search?keyword=“苏超”八强出炉)
1. [多家银行上调存款利率](https://so.toutiao.com/search?keyword=多家银行上调存款利率)
1. [西贝门店员工称工资推迟了10天发放](https://so.toutiao.com/search?keyword=西贝门店员工称工资推迟了10天发放)
1. [普京就阿斯塔尼娜身亡发声](https://so.toutiao.com/search?keyword=普京就阿斯塔尼娜身亡发声)
1. [胖东来药店的清火栀麦片售价仅1元1盒](https://so.toutiao.com/search?keyword=胖东来药店的清火栀麦片售价仅1元1盒)
1. [40岁许嵩结婚 女方为00后主持人](https://so.toutiao.com/search?keyword=40岁许嵩结婚%20女方为00后主持人)
1. [iPhone 18 Pro破发有黄牛亏本抛售](https://so.toutiao.com/search?keyword=iPhone%2018%20Pro破发有黄牛亏本抛售)
1. [美色情电影制片人家藏失踪女子影像](https://so.toutiao.com/search?keyword=美色情电影制片人家藏失踪女子影像)
1. [中国体育代表团入场](https://so.toutiao.com/search?keyword=中国体育代表团入场)
1. [赛力斯总裁：汽车产业最大风险是速成](https://so.toutiao.com/search?keyword=赛力斯总裁：汽车产业最大风险是速成)
1. [美乌领导人新会晤能推动俄乌停火吗](https://so.toutiao.com/search?keyword=美乌领导人新会晤能推动俄乌停火吗)
1. [施一公：西湖大学不设任何科技奖励](https://so.toutiao.com/search?keyword=施一公：西湖大学不设任何科技奖励)
1. [长期憋尿的危害有多大](https://so.toutiao.com/search?keyword=长期憋尿的危害有多大)
1. [西贝回应倒闭传闻](https://so.toutiao.com/search?keyword=西贝回应倒闭传闻)
1. [经销商透露张雪机车在香港已经爆单](https://so.toutiao.com/search?keyword=经销商透露张雪机车在香港已经爆单)
1. [毛东东访朝在毛岸英烈士铜像前祭酒](https://so.toutiao.com/search?keyword=毛东东访朝在毛岸英烈士铜像前祭酒)
1. [亚组委就错播国歌向韩国代表团致歉](https://so.toutiao.com/search?keyword=亚组委就错播国歌向韩国代表团致歉)
1. [12306已拒绝出票133.1万张](https://so.toutiao.com/search?keyword=12306已拒绝出票133.1万张)
1. [券商员工代客操盘巨亏9206万元](https://so.toutiao.com/search?keyword=券商员工代客操盘巨亏9206万元)
1. [张迎春已任新疆党委副书记](https://so.toutiao.com/search?keyword=张迎春已任新疆党委副书记)
1. [那些年属于亚运圣火的独特浪漫](https://so.toutiao.com/search?keyword=那些年属于亚运圣火的独特浪漫)
1. [啄木鸟维修换1个开关收费2800](https://so.toutiao.com/search?keyword=啄木鸟维修换1个开关收费2800)
1. [男子买法拍房被赚50万差价 法院判了](https://so.toutiao.com/search?keyword=男子买法拍房被赚50万差价%20法院判了)
1. [摩托车产业进入新周期](https://so.toutiao.com/search?keyword=摩托车产业进入新周期)
1. [《兰香如故》何以黑马杀出](https://so.toutiao.com/search?keyword=《兰香如故》何以黑马杀出)
1. [安世“分家”近一年内情](https://so.toutiao.com/search?keyword=安世“分家”近一年内情)
1. [英国博主探访云南糯扎渡水电站](https://so.toutiao.com/search?keyword=英国博主探访云南糯扎渡水电站)
1. [女子淡定放生1米多长双头蛇](https://so.toutiao.com/search?keyword=女子淡定放生1米多长双头蛇)
1. [中国房地产拐点要来了吗](https://so.toutiao.com/search?keyword=中国房地产拐点要来了吗)
1. [老板学胖东来崔培军让生意起死回生](https://so.toutiao.com/search?keyword=老板学胖东来崔培军让生意起死回生)
1. [地球宜居期还剩多少年](https://so.toutiao.com/search?keyword=地球宜居期还剩多少年)
1. [记者探访中国武术套路队亚运备赛现场](https://so.toutiao.com/search?keyword=记者探访中国武术套路队亚运备赛现场)
1. [叉车司机助女子扶稳倾倒三轮](https://so.toutiao.com/search?keyword=叉车司机助女子扶稳倾倒三轮)
1. [被顾客用西瓜砸头摊主获赔7万元](https://so.toutiao.com/search?keyword=被顾客用西瓜砸头摊主获赔7万元)
1. [国乒队仅王励勤参加亚运会开幕式](https://so.toutiao.com/search?keyword=国乒队仅王励勤参加亚运会开幕式)
1. [一组数据看中国经济活力迸发](https://so.toutiao.com/search?keyword=一组数据看中国经济活力迸发)
1. [《新闻联播》正在直播](https://so.toutiao.com/search?keyword=《新闻联播》正在直播)
1. [救助老人反遭索赔92万快递员发声](https://so.toutiao.com/search?keyword=救助老人反遭索赔92万快递员发声)
1. [曝泽连斯基没上特朗普联大会晤名单](https://so.toutiao.com/search?keyword=曝泽连斯基没上特朗普联大会晤名单)
1. [司机私改收款码多收乘客289元被立案](https://so.toutiao.com/search?keyword=司机私改收款码多收乘客289元被立案)
1. [零跑能成为汽车界苹果吗](https://so.toutiao.com/search?keyword=零跑能成为汽车界苹果吗)
1. [张雪回应被称为最寒酸的亿万富翁](https://so.toutiao.com/search?keyword=张雪回应被称为最寒酸的亿万富翁)
1. [张华被免去深圳市副市长职务](https://so.toutiao.com/search?keyword=张华被免去深圳市副市长职务)
1. [张雪机车发布5款新车 最高售价13.8万](https://so.toutiao.com/search?keyword=张雪机车发布5款新车%20最高售价13.8万)
1. [外国市长探访“中国车谷”](https://so.toutiao.com/search?keyword=外国市长探访“中国车谷”)
1. [张维为批“台独”分子不见棺材不掉泪](https://so.toutiao.com/search?keyword=张维为批“台独”分子不见棺材不掉泪)
1. [平陆运河通航 居民拍对比视频](https://so.toutiao.com/search?keyword=平陆运河通航%20居民拍对比视频)
1. [泰总理斥责不法外国人要死回自己家死](https://so.toutiao.com/search?keyword=泰总理斥责不法外国人要死回自己家死)
1. [于东来把想“考胖”的年轻人吓住了吗](https://so.toutiao.com/search?keyword=于东来把想“考胖”的年轻人吓住了吗)
1. [女子4次起诉离婚均被驳回](https://so.toutiao.com/search?keyword=女子4次起诉离婚均被驳回)
1. [美军方：与伊朗战争已耗资451亿美元](https://so.toutiao.com/search?keyword=美军方：与伊朗战争已耗资451亿美元)
1. [媒体：于东来正被自己的人设绑架](https://so.toutiao.com/search?keyword=媒体：于东来正被自己的人设绑架)
1. [华为昇腾跨过生态拐点](https://so.toutiao.com/search?keyword=华为昇腾跨过生态拐点)
1. [不愿住校的新高一学生越来越多了吗](https://so.toutiao.com/search?keyword=不愿住校的新高一学生越来越多了吗)
1. [鳄鱼和牙签鸟的友情故事是真的吗](https://so.toutiao.com/search?keyword=鳄鱼和牙签鸟的友情故事是真的吗)
1. [沙特首都利雅得再次传出爆炸声](https://so.toutiao.com/search?keyword=沙特首都利雅得再次传出爆炸声)
1. [韩歌手交往已婚男赔原配3000万韩元](https://so.toutiao.com/search?keyword=韩歌手交往已婚男赔原配3000万韩元)
1. [papi酱的猫“大咪”去世](https://so.toutiao.com/search?keyword=papi酱的猫“大咪”去世)
1. [糖油混合物比肥肉还容易让人长胖](https://so.toutiao.com/search?keyword=糖油混合物比肥肉还容易让人长胖)
1. [张雪称签了一个顶级车手](https://so.toutiao.com/search?keyword=张雪称签了一个顶级车手)
1. [福建省信访局局长朱百里主动交代问题](https://so.toutiao.com/search?keyword=福建省信访局局长朱百里主动交代问题)
1. [长沙一公司每周上班三天半月薪7000](https://so.toutiao.com/search?keyword=长沙一公司每周上班三天半月薪7000)
1. [站在中国队最前列的女拳击手吴愉](https://so.toutiao.com/search?keyword=站在中国队最前列的女拳击手吴愉)
1. [全球牛市要结束了吗](https://so.toutiao.com/search?keyword=全球牛市要结束了吗)
1. [黑龙江局地气温暴降近20℃](https://so.toutiao.com/search?keyword=黑龙江局地气温暴降近20℃)
1. [谭松韵刘学义抢手机剧宣](https://so.toutiao.com/search?keyword=谭松韵刘学义抢手机剧宣)
1. [曝美军AI曾误判中国货船险些惹大祸](https://so.toutiao.com/search?keyword=曝美军AI曾误判中国货船险些惹大祸)
1. [小区窗台惊现白色大蟒蛇 消防已处理](https://so.toutiao.com/search?keyword=小区窗台惊现白色大蟒蛇%20消防已处理)
1. [“错换人生28年”姚策的生父去世](https://so.toutiao.com/search?keyword=“错换人生28年”姚策的生父去世)
1. [中国开放红利持续释放](https://so.toutiao.com/search?keyword=中国开放红利持续释放)
1. [男童被独留家中坠楼12分钟发生了什么](https://so.toutiao.com/search?keyword=男童被独留家中坠楼12分钟发生了什么)
1. [国际市长们体验武汉光谷空轨](https://so.toutiao.com/search?keyword=国际市长们体验武汉光谷空轨)
1. [张本智和放话要开启“日本时代”](https://so.toutiao.com/search?keyword=张本智和放话要开启“日本时代”)
1. [沙特首都利雅得遭空袭](https://so.toutiao.com/search?keyword=沙特首都利雅得遭空袭)
1. [人民网评罗永浩说野人先生难吃](https://so.toutiao.com/search?keyword=人民网评罗永浩说野人先生难吃)
1. [郭士强下课冲上热搜](https://so.toutiao.com/search?keyword=郭士强下课冲上热搜)
1. [辟谣周榜｜江西多处堤坝溃决系谣言](https://so.toutiao.com/search?keyword=辟谣周榜｜江西多处堤坝溃决系谣言)
1. [AI女演员访谈卡壳后突然飙粤语](https://so.toutiao.com/search?keyword=AI女演员访谈卡壳后突然飙粤语)
1. [中国女篮65分狂胜泰国夺亚运开门红](https://so.toutiao.com/search?keyword=中国女篮65分狂胜泰国夺亚运开门红)
1. [媒体：菲律宾918当天挑衅需掂量后果](https://so.toutiao.com/search?keyword=媒体：菲律宾918当天挑衅需掂量后果)
1. [林芳正改组前夜就预感会出局](https://so.toutiao.com/search?keyword=林芳正改组前夜就预感会出局)
1. [亚运会开幕式有哪些看点](https://so.toutiao.com/search?keyword=亚运会开幕式有哪些看点)
1. [机器人开始自己找活干了](https://so.toutiao.com/search?keyword=机器人开始自己找活干了)
1. [美军为何突然亮出太空武器](https://so.toutiao.com/search?keyword=美军为何突然亮出太空武器)
1. [护士长提醒年轻人少喝饮料少熬夜](https://so.toutiao.com/search?keyword=护士长提醒年轻人少喝饮料少熬夜)
1. [中国女篮主教练：争取最好成绩](https://so.toutiao.com/search?keyword=中国女篮主教练：争取最好成绩)
1. [日本男篮主帅将在76人任助教](https://so.toutiao.com/search?keyword=日本男篮主帅将在76人任助教)
1. [中国CNS论文数量比四年前增加125%](https://so.toutiao.com/search?keyword=中国CNS论文数量比四年前增加125%)
1. [偷车贼从广安骑到成都还顺路偷茶坊](https://so.toutiao.com/search?keyword=偷车贼从广安骑到成都还顺路偷茶坊)
1. [郭士强的“非常辛苦”说给谁听](https://so.toutiao.com/search?keyword=郭士强的“非常辛苦”说给谁听)
1. [《长征组歌》艺术总监萧霞谈长征精神](https://so.toutiao.com/search?keyword=《长征组歌》艺术总监萧霞谈长征精神)
1. [60厘米超长蛋挞走红](https://so.toutiao.com/search?keyword=60厘米超长蛋挞走红)
1. [普京批欧洲领导人宣扬对俄开战](https://so.toutiao.com/search?keyword=普京批欧洲领导人宣扬对俄开战)
1. [黄牛都不看的iPhone 18 Pro谁在买](https://so.toutiao.com/search?keyword=黄牛都不看的iPhone%2018%20Pro谁在买)
1. [局长被查家人花300万找政治骗子捞人](https://so.toutiao.com/search?keyword=局长被查家人花300万找政治骗子捞人)
1. [中国篮球国家队回应“男篮负日本”](https://so.toutiao.com/search?keyword=中国篮球国家队回应“男篮负日本”)
1. [秦腔名家李爱琴逝世](https://so.toutiao.com/search?keyword=秦腔名家李爱琴逝世)
1. [WNBA自由人胜山猫](https://so.toutiao.com/search?keyword=WNBA自由人胜山猫)
1. [9月19日北京部分区域试鸣防空警报](https://so.toutiao.com/search?keyword=9月19日北京部分区域试鸣防空警报)
1. [“宁王”的宝座要易主了吗](https://so.toutiao.com/search?keyword=“宁王”的宝座要易主了吗)
1. [新车出现异响 车主要求换车被拒](https://so.toutiao.com/search?keyword=新车出现异响%20车主要求换车被拒)
1. [佟丽娅回应在董璇婚礼上表情严肃](https://so.toutiao.com/search?keyword=佟丽娅回应在董璇婚礼上表情严肃)
1. [是谁在买300倍PE利润的“神股”](https://so.toutiao.com/search?keyword=是谁在买300倍PE利润的“神股”)
1. [浙江宁波市委原书记叶承垣逝世](https://so.toutiao.com/search?keyword=浙江宁波市委原书记叶承垣逝世)
1. [孕妇便秘用力致胎盘剥离面达4/5](https://so.toutiao.com/search?keyword=孕妇便秘用力致胎盘剥离面达4/5)
1. [长期频繁喝奶茶有何健康风险](https://so.toutiao.com/search?keyword=长期频繁喝奶茶有何健康风险)
1. [博主：俄军布良斯克防线被撕开](https://so.toutiao.com/search?keyword=博主：俄军布良斯克防线被撕开)
1. [郑丽文怒呛民进党有意送退役舰给菲](https://so.toutiao.com/search?keyword=郑丽文怒呛民进党有意送退役舰给菲)
1. [中国男篮11月迎世亚预第五窗口期比赛](https://so.toutiao.com/search?keyword=中国男篮11月迎世亚预第五窗口期比赛)
1. [佟丽娅回应主持央视春晚相关传言](https://so.toutiao.com/search?keyword=佟丽娅回应主持央视春晚相关传言)
1. [俄乌冲突以来俄首次杜马选举举行](https://so.toutiao.com/search?keyword=俄乌冲突以来俄首次杜马选举举行)
1. [杨毅谈中国男篮不敌日本](https://so.toutiao.com/search?keyword=杨毅谈中国男篮不敌日本)
1. [湖北一火车站正式拆除](https://so.toutiao.com/search?keyword=湖北一火车站正式拆除)
1. [住建部：4楼及以上住宅都要加装电梯](https://so.toutiao.com/search?keyword=住建部：4楼及以上住宅都要加装电梯)
1. [何立峰将赴美国与美方举行经贸磋商](https://so.toutiao.com/search?keyword=何立峰将赴美国与美方举行经贸磋商)
1. [平陆运河释放多重红利](https://so.toutiao.com/search?keyword=平陆运河释放多重红利)
1. [胡塞武装10年兵力从3万增至35万](https://so.toutiao.com/search?keyword=胡塞武装10年兵力从3万增至35万)
1. [2名外籍游客抱出侧翻被困车中老人](https://so.toutiao.com/search?keyword=2名外籍游客抱出侧翻被困车中老人)
1. [于东来考察胖东来梦之城建设](https://so.toutiao.com/search?keyword=于东来考察胖东来梦之城建设)
1. [亚运再次失利 中国男篮差距何在](https://so.toutiao.com/search?keyword=亚运再次失利%20中国男篮差距何在)
1. [黄仁勋出售约4.6万股英伟达股票](https://so.toutiao.com/search?keyword=黄仁勋出售约4.6万股英伟达股票)
1. [《兰香如故》：东方美学入戏入情入境](https://so.toutiao.com/search?keyword=《兰香如故》：东方美学入戏入情入境)
1. [国乒男单签表出炉：王楚钦张本同半区](https://so.toutiao.com/search?keyword=国乒男单签表出炉：王楚钦张本同半区)
1. [餐厅否认放炒菜录音冒充现炒](https://so.toutiao.com/search?keyword=餐厅否认放炒菜录音冒充现炒)
1. [国乒女单签表出炉：孙颖莎守下半区](https://so.toutiao.com/search?keyword=国乒女单签表出炉：孙颖莎守下半区)
1. [好剧的路正在越走越宽](https://so.toutiao.com/search?keyword=好剧的路正在越走越宽)
1. [8月70城商品住宅销售价格降幅收窄](https://so.toutiao.com/search?keyword=8月70城商品住宅销售价格降幅收窄)
1. [越南带着29份协议访美有何企图](https://so.toutiao.com/search?keyword=越南带着29份协议访美有何企图)
1. [上海夫妇谈九一八事变：历史不要忘](https://so.toutiao.com/search?keyword=上海夫妇谈九一八事变：历史不要忘)
1. [媒体评市民标记危险井盖被城管约谈](https://so.toutiao.com/search?keyword=媒体评市民标记危险井盖被城管约谈)
1. [博主：俄借高油价倒逼制裁解除](https://so.toutiao.com/search?keyword=博主：俄借高油价倒逼制裁解除)
1. [首批市民游客“畅游”平陆运河](https://so.toutiao.com/search?keyword=首批市民游客“畅游”平陆运河)
1. [男子15万抢到10台iPhone18PM](https://so.toutiao.com/search?keyword=男子15万抢到10台iPhone18PM)
1. [小鹏要把卖车和卖技术一起推向全球](https://so.toutiao.com/search?keyword=小鹏要把卖车和卖技术一起推向全球)
1. [AI真能毁灭人类吗](https://so.toutiao.com/search?keyword=AI真能毁灭人类吗)
1. [中俄经贸合作分委会会议召开](https://so.toutiao.com/search?keyword=中俄经贸合作分委会会议召开)
1. [“恋陪本”靠什么让消费者持续上头](https://so.toutiao.com/search?keyword=“恋陪本”靠什么让消费者持续上头)
1. [网友线下偶遇孙千](https://so.toutiao.com/search?keyword=网友线下偶遇孙千)
1. [导游向台湾青年讲述九一八](https://so.toutiao.com/search?keyword=导游向台湾青年讲述九一八)
1. [运动员展示亚运房间：全是纸板做的](https://so.toutiao.com/search?keyword=运动员展示亚运房间：全是纸板做的)
1. [佟丽娅在发小的新疆餐厅招待鲁豫](https://so.toutiao.com/search?keyword=佟丽娅在发小的新疆餐厅招待鲁豫)
1. [AI“碾碎”了书意味着什么](https://so.toutiao.com/search?keyword=AI“碾碎”了书意味着什么)
1. [长期吃腐乳到底对身体好不好](https://so.toutiao.com/search?keyword=长期吃腐乳到底对身体好不好)
1. [平陆运河为何能打通西南的任督二脉](https://so.toutiao.com/search?keyword=平陆运河为何能打通西南的任督二脉)
1. [猫科动物百年来首现新物种](https://so.toutiao.com/search?keyword=猫科动物百年来首现新物种)
1. [男子高空作业绳子被2楼老人剪断](https://so.toutiao.com/search?keyword=男子高空作业绳子被2楼老人剪断)
1. [货车司机称压坏20余棵白菜被索赔1万](https://so.toutiao.com/search?keyword=货车司机称压坏20余棵白菜被索赔1万)
1. [20吨货车溜车女司机徒手拽停](https://so.toutiao.com/search?keyword=20吨货车溜车女司机徒手拽停)
1. [退休民警诉讼拿下2亿物流园控股权](https://so.toutiao.com/search?keyword=退休民警诉讼拿下2亿物流园控股权)
1. [学者：中美正加强各领域实质性磋商](https://so.toutiao.com/search?keyword=学者：中美正加强各领域实质性磋商)
1. [博主：战争正在逼近日本](https://so.toutiao.com/search?keyword=博主：战争正在逼近日本)
1. [秦始皇祖母陵墓或现世](https://so.toutiao.com/search?keyword=秦始皇祖母陵墓或现世)
1. [中国男篮大比分不敌日本](https://so.toutiao.com/search?keyword=中国男篮大比分不敌日本)
1. [宁德时代正在经历至暗时刻](https://so.toutiao.com/search?keyword=宁德时代正在经历至暗时刻)
1. [中国工人为何成为蒙古外籍劳工主力](https://so.toutiao.com/search?keyword=中国工人为何成为蒙古外籍劳工主力)
1. [物理学家：AI可能以巨大失望告终](https://so.toutiao.com/search?keyword=物理学家：AI可能以巨大失望告终)
1. [绵阳一养猪场单日死亡500头猪不实](https://so.toutiao.com/search?keyword=绵阳一养猪场单日死亡500头猪不实)
1. [郭士强成首位两输日本的中国男篮主帅](https://so.toutiao.com/search?keyword=郭士强成首位两输日本的中国男篮主帅)
1. [村民称在自家地烧1平米杂草被罚500](https://so.toutiao.com/search?keyword=村民称在自家地烧1平米杂草被罚500)
1. [业主买下1层4户圈占公共走廊](https://so.toutiao.com/search?keyword=业主买下1层4户圈占公共走廊)
1. [心梗脑梗与哪些因素有关](https://so.toutiao.com/search?keyword=心梗脑梗与哪些因素有关)
1. [中俄同时推翻美国对伊制裁草案](https://so.toutiao.com/search?keyword=中俄同时推翻美国对伊制裁草案)
1. [赛力斯有没有能力把问界继续卖好](https://so.toutiao.com/search?keyword=赛力斯有没有能力把问界继续卖好)
1. [住建部：支持老旧房屋原拆原建](https://so.toutiao.com/search?keyword=住建部：支持老旧房屋原拆原建)
1. [李在明：特朗普金正恩数月内或会晤](https://so.toutiao.com/search?keyword=李在明：特朗普金正恩数月内或会晤)
1. [俄学者：中国赢得越来越多尊重](https://so.toutiao.com/search?keyword=俄学者：中国赢得越来越多尊重)
1. [菲船加速冲撞中国海警船](https://so.toutiao.com/search?keyword=菲船加速冲撞中国海警船)
1. [美驻日使馆9月18日发帖让日网民破防](https://so.toutiao.com/search?keyword=美驻日使馆9月18日发帖让日网民破防)
1. [吉林出现野生东北虎“五虎同框”](https://so.toutiao.com/search?keyword=吉林出现野生东北虎“五虎同框”)
1. [黄牛称iPhone 18 Pro没人要](https://so.toutiao.com/search?keyword=黄牛称iPhone%2018%20Pro没人要)
1. [美媒：全球为特朗普的历史执念买单](https://so.toutiao.com/search?keyword=美媒：全球为特朗普的历史执念买单)
1. [生娃失明失聪女子原本是英语老师](https://so.toutiao.com/search?keyword=生娃失明失聪女子原本是英语老师)
1. [何小鹏：小鹏今年开始电池都自己干](https://so.toutiao.com/search?keyword=何小鹏：小鹏今年开始电池都自己干)
1. [中国射击队因酒店远不参加亚运开幕式](https://so.toutiao.com/search?keyword=中国射击队因酒店远不参加亚运开幕式)
1. [中方：绝不允许日本军国主义死灰复燃](https://so.toutiao.com/search?keyword=中方：绝不允许日本军国主义死灰复燃)
1. [赛力斯的真正考验来了](https://so.toutiao.com/search?keyword=赛力斯的真正考验来了)
1. [郭士强 不打分](https://so.toutiao.com/search?keyword=郭士强%20不打分)
1. [又一轮日本首相“保卫战”开打了](https://so.toutiao.com/search?keyword=又一轮日本首相“保卫战”开打了)
1. [小球迷看男篮输了哭到颤抖](https://so.toutiao.com/search?keyword=小球迷看男篮输了哭到颤抖)
1. [陕西发现战国晚期秦王级别墓葬](https://so.toutiao.com/search?keyword=陕西发现战国晚期秦王级别墓葬)
1. [张雪官宣签约美国名将豪斯](https://so.toutiao.com/search?keyword=张雪官宣签约美国名将豪斯)
1. [王楚钦孙颖莎王曼昱谈亚运会住邮轮](https://so.toutiao.com/search?keyword=王楚钦孙颖莎王曼昱谈亚运会住邮轮)
1. [唐户部尚书李承嘉墓考古成果公布](https://so.toutiao.com/search?keyword=唐户部尚书李承嘉墓考古成果公布)
1. [华源任上海市副市长](https://so.toutiao.com/search?keyword=华源任上海市副市长)
1. [胡金秋：这场比赛准备没有对方充足](https://so.toutiao.com/search?keyword=胡金秋：这场比赛准备没有对方充足)
1. [老兵：九一八是插在我心口的刀子](https://so.toutiao.com/search?keyword=老兵：九一八是插在我心口的刀子)
1. [路人避雨时主动帮屋主抢收被淋稻谷](https://so.toutiao.com/search?keyword=路人避雨时主动帮屋主抢收被淋稻谷)
1. [博主谈中国男篮大比分不敌日本](https://so.toutiao.com/search?keyword=博主谈中国男篮大比分不敌日本)
1. [亚运会乒乓球抽签结果出炉](https://so.toutiao.com/search?keyword=亚运会乒乓球抽签结果出炉)
1. [民警吃饭时偶遇违法嫌疑人](https://so.toutiao.com/search?keyword=民警吃饭时偶遇违法嫌疑人)
1. [长沙警方辟谣电动车时速超25码要被抓](https://so.toutiao.com/search?keyword=长沙警方辟谣电动车时速超25码要被抓)
1. [日本军演频频搅动地区安全](https://so.toutiao.com/search?keyword=日本军演频频搅动地区安全)
1. [泰王自驾飞机回国边招手边拉操纵杆](https://so.toutiao.com/search?keyword=泰王自驾飞机回国边招手边拉操纵杆)
1. [支教老师邹志鹏：这个世界需要傻子](https://so.toutiao.com/search?keyword=支教老师邹志鹏：这个世界需要傻子)
1. [平陆运河：一条改写流向的通道](https://so.toutiao.com/search?keyword=平陆运河：一条改写流向的通道)
1. [iPhone Duo散热翻车了吗](https://so.toutiao.com/search?keyword=iPhone%20Duo散热翻车了吗)
1. [官方通报长江武汉段倾倒淤泥事件](https://so.toutiao.com/search?keyword=官方通报长江武汉段倾倒淤泥事件)
1. [泰总理：中国推动世界经济发展](https://so.toutiao.com/search?keyword=泰总理：中国推动世界经济发展)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Sep 20 2026 01:59:32 GMT+0800 (China Standard Time) -->

1. [华为突破冯诺依曼单机架构](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E7%AA%81%E7%A0%B4%E5%86%AF%E8%AF%BA%E4%BE%9D%E6%9B%BC%E5%8D%95%E6%9C%BA%E6%9E%B6%E6%9E%84)
1. [华为高层内部万字长文曝光](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E9%AB%98%E5%B1%82%E5%86%85%E9%83%A8%E4%B8%87%E5%AD%97%E9%95%BF%E6%96%87%E6%9B%9D%E5%85%89)
1. [歌手许嵩官宣结婚](https://www.zhihu.com/search?q=%E6%AD%8C%E6%89%8B%E8%AE%B8%E5%B5%A9%E5%AE%98%E5%AE%A3%E7%BB%93%E5%A9%9A)
1. [iG 3:1 JDG](https://www.zhihu.com/search?q=iG%203%3A1%20JDG)
1. [知乎 CLI 创作者能力上新](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%20CLI%20%E5%88%9B%E4%BD%9C%E8%80%85%E8%83%BD%E5%8A%9B%E4%B8%8A%E6%96%B0)
1. [西贝被曝将彻底倒闭](https://www.zhihu.com/search?q=%E8%A5%BF%E8%B4%9D%E8%A2%AB%E6%9B%9D%E5%B0%86%E5%BD%BB%E5%BA%95%E5%80%92%E9%97%AD)
1. [广西孙子非亲生案鉴定机构被罚](https://www.zhihu.com/search?q=%E5%B9%BF%E8%A5%BF%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E9%89%B4%E5%AE%9A%E6%9C%BA%E6%9E%84%E8%A2%AB%E7%BD%9A)
1. [智谱ZCode被曝偷传用户数据](https://www.zhihu.com/search?q=%E6%99%BA%E8%B0%B1ZCode%E8%A2%AB%E6%9B%9D%E5%81%B7%E4%BC%A0%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE)
1. [12306已拒绝出票133.1万张](https://www.zhihu.com/search?q=12306%E5%B7%B2%E6%8B%92%E7%BB%9D%E5%87%BA%E7%A5%A8133.1%E4%B8%87%E5%BC%A0)
1. [中国男篮 77-97 日本男篮](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%2077-97%20%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE)
1. [李小璐赵涛疑似恋情](https://www.zhihu.com/search?q=%E6%9D%8E%E5%B0%8F%E7%92%90%E8%B5%B5%E6%B6%9B%E7%96%91%E4%BC%BC%E6%81%8B%E6%83%85)
1. [特朗普称将获格陵兰岛安全永久控制权](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%B0%86%E8%8E%B7%E6%A0%BC%E9%99%B5%E5%85%B0%E5%B2%9B%E5%AE%89%E5%85%A8%E6%B0%B8%E4%B9%85%E6%8E%A7%E5%88%B6%E6%9D%83)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Sep 20 2026 02:03:18 GMT+0800 (China Standard Time) -->

1. [什么东西被发明出来后，莫名其妙地违背了它的用途？](https://www.zhihu.com/question/2083219865272374500)
1. [LPL 2026 冒泡赛决赛 iG 3:1 淘汰 JDG 夺得最后一张世界赛门票，如何评价这场比赛？](https://www.zhihu.com/question/2084674456329495600)
1. [如何看待名古屋亚运会开幕式被吐槽诡异、审美丑？此前东京奥运会也遭吐槽，为何日式审美总给人感觉很阴冷？](https://www.zhihu.com/question/2084709350677771800)
1. [字节跳动将飞书并入豆包，创始人张一鸣称「史上最大押注」意味着什么？](https://www.zhihu.com/question/2084372005369952000)
1. [为什么很多过了35岁的女性会突然拼命想要孩子？](https://www.zhihu.com/question/2082375926558599000)
1. [《高等学校领导人员管理办法》明确党委书记和校长一般不担任校内科研项目主要负责人，旨在解决哪些问题？](https://www.zhihu.com/question/2083327753110271200)
1. [突然发现“乘法交换律”好像并不总是成立，乘法分配律在较小数字上的成立都只是巧合吗？](https://www.zhihu.com/question/2076493090857268200)
1. [正颌手术做反当事人已清空作品，称达成和解，网友曝正颌手术并未做反，是术后拒绝正畸导致问题，具体咋回事？](https://www.zhihu.com/question/2084053894259106000)
1. [网友称患者因买不到化疗药只能直接联系药企，最后成功以合理价格买到药，是真的吗？反映出医药流通哪些问题？](https://www.zhihu.com/question/2078528398536790000)
1. [电影《生化危机：爆发夜》确认引进，快递小哥误入浣熊市怪物爆发夜，你对这部回归生存恐怖的新作有何期待？](https://www.zhihu.com/question/2083210913494951200)
1. [OpenAI 被曝雪藏数百个 AI 数学证明，这一爆料有哪些依据？人类数学研究的意义何在？](https://www.zhihu.com/question/2084194257187902700)
1. [歌手许嵩官宣结婚，你有哪些祝福？](https://www.zhihu.com/question/2084741951949993500)
1. [多地充电站试点「谷充峰放」，网友称电动汽车充电可不花钱，还能赚差价，真是这样吗？怎样看待这种模式？](https://www.zhihu.com/question/2083558982149300700)
1. [为什么这两年加多宝彻底销声匿迹了？](https://www.zhihu.com/question/312268331)
1. [湖南航空一航班下机时旅客携带充电宝起火，舱内烟雾弥漫，为何安检拦住非3C 充电宝还会有这种事故？](https://www.zhihu.com/question/2083897155400332000)
1. [特朗普称美国将获得对格陵兰岛安全「永久控制权」，丹麦称下周签署协议，保留主权，这是变相拿下格陵兰了吗？](https://www.zhihu.com/question/2084546841962603500)
1. [AL、BLG、TES、iG 成为 S16 总决赛参赛队伍，这四支参赛队伍都能在世界赛上走多远？](https://www.zhihu.com/question/2084745565477106200)
1. [如何评价31岁博士辞医院工作去送外卖、做驻唱？现代社会如何看待人选择生活方式的自由，探索生活的可能性？](https://www.zhihu.com/question/2084313080465450200)
1. [2627赛季英超联赛英超第5轮布莱顿 VS 阿森纳，如何评价这场比赛？](https://www.zhihu.com/question/2084764867425204200)
1. [iPhone 18 Pro 被曝高价版用 QLC 闪存，这会对用户体验带来多大影响？](https://www.zhihu.com/question/2059024722852059000)
1. [蒸十笼包子，最上面的先熟还是最下面的先熟？](https://www.zhihu.com/question/384206412)
1. [欧美会不会后悔自己去工业化，自废武功？](https://www.zhihu.com/question/659652777)
1. [沈鼓集团上市 2 日 4 次触发临停，盘中涨近 300%，哪些信息值得关注？](https://www.zhihu.com/question/2084291813628540700)
1. [睡觉时将双手举过头顶的「投降式」睡姿，其实是身体在求救，这是真的吗？会带来哪些影响？怎样的睡姿最科学？](https://www.zhihu.com/question/2083956845534605600)
1. [iPhone 18 Pro首销，门店排长队，Pro Max加价抢，Pro破发无人收，为什么差距这么大？](https://www.zhihu.com/question/2084214698082302000)
1. [蜘蛛竟然不是昆虫，为什么呢，那蜘蛛属于什么？](https://www.zhihu.com/question/3102086641)
1. [叶绿素怎么进化出来的？](https://www.zhihu.com/question/418037265)
1. [如何看待星铁官方新动态暗示火花才是阿哈的可能性？](https://www.zhihu.com/question/2083879809311102000)
1. [如何制出一块完美的冰块？](https://www.zhihu.com/question/607928175)
1. [什么事是你上了大学才知道的？](https://www.zhihu.com/question/406491354)

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
<!-- 最后更新时间 Sun Sep 20 2026 02:07:13 GMT+0800 (China Standard Time) -->

1. [习近平总书记多次寄语中国体育健儿](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%A4%9A%E6%AC%A1%E5%AF%84%E8%AF%AD%E4%B8%AD%E5%9B%BD%E4%BD%93%E8%82%B2%E5%81%A5%E5%84%BF%23&Refer=new_time)
1. [长期不工作的人会失去什么](https://s.weibo.com//weibo?q=%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%A4%B1%E5%8E%BB%E4%BB%80%E4%B9%88&t=31&band_rank=1&Refer=top)
1. [披荆斩棘三公上半场排名](https://s.weibo.com//weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%89%E5%85%AC%E4%B8%8A%E5%8D%8A%E5%9C%BA%E6%8E%92%E5%90%8D%23&t=31&band_rank=2&Refer=top)
1. [前8月全国铁路发送旅客超33亿人次](https://s.weibo.com//weibo?q=%23%E5%89%8D8%E6%9C%88%E5%85%A8%E5%9B%BD%E9%93%81%E8%B7%AF%E5%8F%91%E9%80%81%E6%97%85%E5%AE%A2%E8%B6%8533%E4%BA%BF%E4%BA%BA%E6%AC%A1%23&t=31&band_rank=3&Refer=top)
1. [周也你这演技我看得也很痛苦](https://s.weibo.com//weibo?q=%23%E5%91%A8%E4%B9%9F%E4%BD%A0%E8%BF%99%E6%BC%94%E6%8A%80%E6%88%91%E7%9C%8B%E5%BE%97%E4%B9%9F%E5%BE%88%E7%97%9B%E8%8B%A6%23&t=31&band_rank=4&Refer=top)
1. [LPL出征仪式 寒酸](https://s.weibo.com//weibo?q=LPL%E5%87%BA%E5%BE%81%E4%BB%AA%E5%BC%8F%20%E5%AF%92%E9%85%B8&t=31&band_rank=5&Refer=top)
1. [华晨宇齐天](https://s.weibo.com//weibo?q=%E5%8D%8E%E6%99%A8%E5%AE%87%E9%BD%90%E5%A4%A9&t=31&band_rank=6&Refer=top)
1. [郑合惠子回应演杜翠雀](https://s.weibo.com//weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E5%9B%9E%E5%BA%94%E6%BC%94%E6%9D%9C%E7%BF%A0%E9%9B%80%23&t=31&band_rank=7&Refer=top)
1. [被顾客用西瓜砸头摊主获赔7万元](https://s.weibo.com//weibo?q=%23%E8%A2%AB%E9%A1%BE%E5%AE%A2%E7%94%A8%E8%A5%BF%E7%93%9C%E7%A0%B8%E5%A4%B4%E6%91%8A%E4%B8%BB%E8%8E%B7%E8%B5%947%E4%B8%87%E5%85%83%23&t=31&band_rank=8&Refer=top)
1. [布莱顿3比0阿森纳](https://s.weibo.com//weibo?q=%23%E5%B8%83%E8%8E%B1%E9%A1%BF3%E6%AF%940%E9%98%BF%E6%A3%AE%E7%BA%B3%23&t=31&band_rank=9&Refer=top)
1. [司美格鲁肽成变质回流药重灾区](https://s.weibo.com//weibo?q=%23%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E6%88%90%E5%8F%98%E8%B4%A8%E5%9B%9E%E6%B5%81%E8%8D%AF%E9%87%8D%E7%81%BE%E5%8C%BA%23&t=31&band_rank=10&Refer=top)
1. [王源演唱会结束打开手机一看天塌了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BB%93%E6%9D%9F%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E4%B8%80%E7%9C%8B%E5%A4%A9%E5%A1%8C%E4%BA%86%23&t=31&band_rank=11&Refer=top)
1. [实在搞不懂调休的意义](https://s.weibo.com//weibo?q=%23%E5%AE%9E%E5%9C%A8%E6%90%9E%E4%B8%8D%E6%87%82%E8%B0%83%E4%BC%91%E7%9A%84%E6%84%8F%E4%B9%89%23&t=31&band_rank=12&Refer=top)
1. [父女在商场遭人围堵4岁女儿被吓哭](https://s.weibo.com//weibo?q=%23%E7%88%B6%E5%A5%B3%E5%9C%A8%E5%95%86%E5%9C%BA%E9%81%AD%E4%BA%BA%E5%9B%B4%E5%A0%B54%E5%B2%81%E5%A5%B3%E5%84%BF%E8%A2%AB%E5%90%93%E5%93%AD%23&t=31&band_rank=13&Refer=top)
1. [丈夫家暴妻子致死子女出具谅解书](https://s.weibo.com//weibo?q=%23%E4%B8%88%E5%A4%AB%E5%AE%B6%E6%9A%B4%E5%A6%BB%E5%AD%90%E8%87%B4%E6%AD%BB%E5%AD%90%E5%A5%B3%E5%87%BA%E5%85%B7%E8%B0%85%E8%A7%A3%E4%B9%A6%23&t=31&band_rank=14&Refer=top)
1. [亚运会开幕式 诡异](https://s.weibo.com//weibo?q=%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%20%E8%AF%A1%E5%BC%82&t=31&band_rank=15&Refer=top)
1. [兰香如故](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85&t=31&band_rank=16&Refer=top)
1. [Bin要拿S16冠军](https://s.weibo.com//weibo?q=%23Bin%E8%A6%81%E6%8B%BFS16%E5%86%A0%E5%86%9B%23&t=31&band_rank=17&Refer=top)
1. [亚运会](https://s.weibo.com//weibo?q=%E4%BA%9A%E8%BF%90%E4%BC%9A&t=31&band_rank=18&Refer=top)
1. [挑情丑闻](https://s.weibo.com//weibo?q=%E6%8C%91%E6%83%85%E4%B8%91%E9%97%BB&t=31&band_rank=19&Refer=top)
1. [曝小米18Fold七天激活近8万台](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%B0%8F%E7%B1%B318Fold%E4%B8%83%E5%A4%A9%E6%BF%80%E6%B4%BB%E8%BF%918%E4%B8%87%E5%8F%B0%23&t=31&band_rank=20&Refer=top)
1. [爱情公寓 别试探了有市场](https://s.weibo.com//weibo?q=%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E5%88%AB%E8%AF%95%E6%8E%A2%E4%BA%86%E6%9C%89%E5%B8%82%E5%9C%BA&t=31&band_rank=21&Refer=top)
1. [iG晋级S16](https://s.weibo.com//weibo?q=%23iG%E6%99%8B%E7%BA%A7S16%23&t=31&band_rank=22&Refer=top)
1. [齐天太好听了](https://s.weibo.com//weibo?q=%23%E9%BD%90%E5%A4%A9%E5%A4%AA%E5%A5%BD%E5%90%AC%E4%BA%86%23&t=31&band_rank=23&Refer=top)
1. [黄子弘凡永久终止与声幻娱乐合作](https://s.weibo.com//weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E6%B0%B8%E4%B9%85%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A3%B0%E5%B9%BB%E5%A8%B1%E4%B9%90%E5%90%88%E4%BD%9C%23&t=31&band_rank=24&Refer=top)
1. [不需要找关系就能进的好工作](https://s.weibo.com//weibo?q=%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%BE%E5%85%B3%E7%B3%BB%E5%B0%B1%E8%83%BD%E8%BF%9B%E7%9A%84%E5%A5%BD%E5%B7%A5%E4%BD%9C&t=31&band_rank=25&Refer=top)
1. [北漂月薪一万五两顿花9块](https://s.weibo.com//weibo?q=%23%E5%8C%97%E6%BC%82%E6%9C%88%E8%96%AA%E4%B8%80%E4%B8%87%E4%BA%94%E4%B8%A4%E9%A1%BF%E8%8A%B19%E5%9D%97%23&t=31&band_rank=26&Refer=top)
1. [张睿回应齐天舞台](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%9D%BF%E5%9B%9E%E5%BA%94%E9%BD%90%E5%A4%A9%E8%88%9E%E5%8F%B0%23&t=31&band_rank=27&Refer=top)
1. [杜翠雀不知道黄道婆很正常](https://s.weibo.com//weibo?q=%E6%9D%9C%E7%BF%A0%E9%9B%80%E4%B8%8D%E7%9F%A5%E9%81%93%E9%BB%84%E9%81%93%E5%A9%86%E5%BE%88%E6%AD%A3%E5%B8%B8&t=31&band_rank=28&Refer=top)
1. [布莱顿vs阿森纳](https://s.weibo.com//weibo?q=%E5%B8%83%E8%8E%B1%E9%A1%BFvs%E9%98%BF%E6%A3%AE%E7%BA%B3&t=31&band_rank=29&Refer=top)
1. [韩国运动员发文救救我们](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%BF%90%E5%8A%A8%E5%91%98%E5%8F%91%E6%96%87%E6%95%91%E6%95%91%E6%88%91%E4%BB%AC%23&t=31&band_rank=30&Refer=top)
1. [亚运会中国队夺金日](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%A4%BA%E9%87%91%E6%97%A5%23&t=31&band_rank=31&Refer=top)
1. [Rookie晋级S16后发合照](https://s.weibo.com//weibo?q=%23Rookie%E6%99%8B%E7%BA%A7S16%E5%90%8E%E5%8F%91%E5%90%88%E7%85%A7%23&t=31&band_rank=32&Refer=top)
1. [沙特罕见向以色列求援](https://s.weibo.com//weibo?q=%23%E6%B2%99%E7%89%B9%E7%BD%95%E8%A7%81%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%E6%B1%82%E6%8F%B4%23&t=31&band_rank=33&Refer=top)
1. [深圳出租车111元车费强收400被查](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%87%BA%E7%A7%9F%E8%BD%A6111%E5%85%83%E8%BD%A6%E8%B4%B9%E5%BC%BA%E6%94%B6400%E8%A2%AB%E6%9F%A5%23&t=31&band_rank=34&Refer=top)
1. [王俊凯听粉丝大合唱听哭了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E7%B2%89%E4%B8%9D%E5%A4%A7%E5%90%88%E5%94%B1%E5%90%AC%E5%93%AD%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [承接别人情绪的聊天技巧](https://s.weibo.com//weibo?q=%E6%89%BF%E6%8E%A5%E5%88%AB%E4%BA%BA%E6%83%85%E7%BB%AA%E7%9A%84%E8%81%8A%E5%A4%A9%E6%8A%80%E5%B7%A7&t=31&band_rank=36&Refer=top)
1. [西贝内部人士回应倒闭传闻](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%B4%9D%E5%86%85%E9%83%A8%E4%BA%BA%E5%A3%AB%E5%9B%9E%E5%BA%94%E5%80%92%E9%97%AD%E4%BC%A0%E9%97%BB%23&t=31&band_rank=37&Refer=top)
1. [对视两次就可以让他记住你](https://s.weibo.com//weibo?q=%E5%AF%B9%E8%A7%86%E4%B8%A4%E6%AC%A1%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%AE%A9%E4%BB%96%E8%AE%B0%E4%BD%8F%E4%BD%A0&t=31&band_rank=38&Refer=top)
1. [看亚运会开幕式被吓到了](https://s.weibo.com//weibo?q=%E7%9C%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%E8%A2%AB%E5%90%93%E5%88%B0%E4%BA%86&t=31&band_rank=39&Refer=top)
1. [苏超](https://s.weibo.com//weibo?q=%E8%8B%8F%E8%B6%85&t=31&band_rank=40&Refer=top)
1. [粉笔称前CEO素质低被辞退](https://s.weibo.com//weibo?q=%23%E7%B2%89%E7%AC%94%E7%A7%B0%E5%89%8DCEO%E7%B4%A0%E8%B4%A8%E4%BD%8E%E8%A2%AB%E8%BE%9E%E9%80%80%23&t=31&band_rank=41&Refer=top)
1. [苹果18出了爱情公寓聚会了](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9C18%E5%87%BA%E4%BA%86%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E8%81%9A%E4%BC%9A%E4%BA%86%23&t=31&band_rank=42&Refer=top)
1. [Wei和TheShy赛后拥抱GALA](https://s.weibo.com//weibo?q=%23Wei%E5%92%8CTheShy%E8%B5%9B%E5%90%8E%E6%8B%A5%E6%8A%B1GALA%23&t=31&band_rank=43&Refer=top)
1. [披荆斩棘三公成绩](https://s.weibo.com//weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%89%E5%85%AC%E6%88%90%E7%BB%A9%23&t=31&band_rank=44&Refer=top)
1. [LOL官方发文恭喜iG晋级](https://s.weibo.com//weibo?q=%23LOL%E5%AE%98%E6%96%B9%E5%8F%91%E6%96%87%E6%81%AD%E5%96%9CiG%E6%99%8B%E7%BA%A7%23&t=31&band_rank=45&Refer=top)
1. [香港查获估值1.25亿港元大麻花](https://s.weibo.com//weibo?q=%23%E9%A6%99%E6%B8%AF%E6%9F%A5%E8%8E%B7%E4%BC%B0%E5%80%BC1.25%E4%BA%BF%E6%B8%AF%E5%85%83%E5%A4%A7%E9%BA%BB%E8%8A%B1%23&t=31&band_rank=46&Refer=top)
1. [被锦鲤用尾巴打脸了的小金毛](https://s.weibo.com//weibo?q=%23%E8%A2%AB%E9%94%A6%E9%B2%A4%E7%94%A8%E5%B0%BE%E5%B7%B4%E6%89%93%E8%84%B8%E4%BA%86%E7%9A%84%E5%B0%8F%E9%87%91%E6%AF%9B%23&t=31&band_rank=47&Refer=top)
1. [护学岗4人全是高龄老人最大67岁](https://s.weibo.com//weibo?q=%23%E6%8A%A4%E5%AD%A6%E5%B2%974%E4%BA%BA%E5%85%A8%E6%98%AF%E9%AB%98%E9%BE%84%E8%80%81%E4%BA%BA%E6%9C%80%E5%A4%A767%E5%B2%81%23&t=31&band_rank=48&Refer=top)
1. [十几万合同被母亲当废纸9元卖掉](https://s.weibo.com//weibo?q=%23%E5%8D%81%E5%87%A0%E4%B8%87%E5%90%88%E5%90%8C%E8%A2%AB%E6%AF%8D%E4%BA%B2%E5%BD%93%E5%BA%9F%E7%BA%B89%E5%85%83%E5%8D%96%E6%8E%89%23&t=31&band_rank=49&Refer=top)
1. [夫妻印尼溺亡导游为不会游泳兼职学生](https://s.weibo.com//weibo?q=%23%E5%A4%AB%E5%A6%BB%E5%8D%B0%E5%B0%BC%E6%BA%BA%E4%BA%A1%E5%AF%BC%E6%B8%B8%E4%B8%BA%E4%B8%8D%E4%BC%9A%E6%B8%B8%E6%B3%B3%E5%85%BC%E8%81%8C%E5%AD%A6%E7%94%9F%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
