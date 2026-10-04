# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-05 01:37:07

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
<!-- 最后更新时间 Sun Oct 04 2026 23:30:27 GMT+0800 (China Standard Time) -->

1. [第20届亚运会闭幕](https://so.toutiao.com/search?keyword=第20届亚运会闭幕)
1. [俄前总理：西方最大错误就是太怕普京](https://so.toutiao.com/search?keyword=俄前总理：西方最大错误就是太怕普京)
1. [中国健儿追梦之路永不停歇](https://so.toutiao.com/search?keyword=中国健儿追梦之路永不停歇)
1. [国庆景区热度前10被小城包揽](https://so.toutiao.com/search?keyword=国庆景区热度前10被小城包揽)
1. [男足亚运摘铜登上《新闻联播》](https://so.toutiao.com/search?keyword=男足亚运摘铜登上《新闻联播》)
1. [王曼昱回应15分钟速胜](https://so.toutiao.com/search?keyword=王曼昱回应15分钟速胜)
1. [高市早苗强烈要求美方配合调查](https://so.toutiao.com/search?keyword=高市早苗强烈要求美方配合调查)
1. [台当局危险驱离大陆渔船致船只受损](https://so.toutiao.com/search?keyword=台当局危险驱离大陆渔船致船只受损)
1. [吴宜泽深圳公开赛夺冠](https://so.toutiao.com/search?keyword=吴宜泽深圳公开赛夺冠)
1. [迪拜航空6岁女孩母亲发现异动上报](https://so.toutiao.com/search?keyword=迪拜航空6岁女孩母亲发现异动上报)
1. [国庆出行购票藏骗局？警惕诈骗陷阱](https://so.toutiao.com/search?keyword=国庆出行购票藏骗局？警惕诈骗陷阱)
1. [中国人开始放心开电车跑长途了吗](https://so.toutiao.com/search?keyword=中国人开始放心开电车跑长途了吗)
1. [百慕大飞波士顿失联飞机残骸已找到](https://so.toutiao.com/search?keyword=百慕大飞波士顿失联飞机残骸已找到)
1. [韩乔生谈王楚钦登海报：有啥争议的](https://so.toutiao.com/search?keyword=韩乔生谈王楚钦登海报：有啥争议的)
1. [张雪谈国足0比5不敌巴勒斯坦](https://so.toutiao.com/search?keyword=张雪谈国足0比5不敌巴勒斯坦)
1. [余承东：华为已量产381款韬芯片](https://so.toutiao.com/search?keyword=余承东：华为已量产381款韬芯片)
1. [中国体育代表团蝉联金牌榜榜首](https://so.toutiao.com/search?keyword=中国体育代表团蝉联金牌榜榜首)
1. [张家齐说想学着掌控和主导人生](https://so.toutiao.com/search?keyword=张家齐说想学着掌控和主导人生)
1. [河南万岁山只见人不见“山”](https://so.toutiao.com/search?keyword=河南万岁山只见人不见“山”)
1. [张本美和说通过休息调整状态](https://so.toutiao.com/search?keyword=张本美和说通过休息调整状态)
1. [苹果将为受影响用户免费更换新机](https://so.toutiao.com/search?keyword=苹果将为受影响用户免费更换新机)
1. [交警上高速指挥守护假期出行顺畅](https://so.toutiao.com/search?keyword=交警上高速指挥守护假期出行顺畅)
1. [女子报冰岛外国团除了导游全是中国人](https://so.toutiao.com/search?keyword=女子报冰岛外国团除了导游全是中国人)
1. [乌克兰首都基辅响起强烈爆炸声](https://so.toutiao.com/search?keyword=乌克兰首都基辅响起强烈爆炸声)
1. [韩国U23球员光速道歉](https://so.toutiao.com/search?keyword=韩国U23球员光速道歉)
1. [北京热门地标持续火热](https://so.toutiao.com/search?keyword=北京热门地标持续火热)
1. [游客凌晨2时排队胖东来收获免费早餐](https://so.toutiao.com/search?keyword=游客凌晨2时排队胖东来收获免费早餐)
1. [中国游客听到China一呼百应](https://so.toutiao.com/search?keyword=中国游客听到China一呼百应)
1. [王艺迪3-2险胜波尔卡诺娃](https://so.toutiao.com/search?keyword=王艺迪3-2险胜波尔卡诺娃)
1. [新华社出图回顾亚运会精彩瞬间](https://so.toutiao.com/search?keyword=新华社出图回顾亚运会精彩瞬间)
1. [宁波花岙岛滩涂被质疑圈占收费赶海](https://so.toutiao.com/search?keyword=宁波花岙岛滩涂被质疑圈占收费赶海)
1. [多人练“闪身步”进医院](https://so.toutiao.com/search?keyword=多人练“闪身步”进医院)
1. [人大一校友捐资5.03亿元](https://so.toutiao.com/search?keyword=人大一校友捐资5.03亿元)
1. [“永港少爷”叶泓声现身湘超永州主场](https://so.toutiao.com/search?keyword=“永港少爷”叶泓声现身湘超永州主场)
1. [降压药服用有哪些常见误区](https://so.toutiao.com/search?keyword=降压药服用有哪些常见误区)
1. [记住这些意气风发的中国健儿名字](https://so.toutiao.com/search?keyword=记住这些意气风发的中国健儿名字)
1. [河南开封“中式浪漫”圈粉游客](https://so.toutiao.com/search?keyword=河南开封“中式浪漫”圈粉游客)
1. [张玉宁在赛后冲突中被掐脖子](https://so.toutiao.com/search?keyword=张玉宁在赛后冲突中被掐脖子)
1. [假期电车出行补能焦虑如何破局](https://so.toutiao.com/search?keyword=假期电车出行补能焦虑如何破局)
1. [美债5%高利率为何没砸动美股](https://so.toutiao.com/search?keyword=美债5%高利率为何没砸动美股)
1. [安东尼奥：U23国足像我的亲儿子](https://so.toutiao.com/search?keyword=安东尼奥：U23国足像我的亲儿子)
1. [爬珠峰都堵？网传视频发布于几个月前](https://so.toutiao.com/search?keyword=爬珠峰都堵？网传视频发布于几个月前)
1. [美军启动新计划马斯克参与领导意味啥](https://so.toutiao.com/search?keyword=美军启动新计划马斯克参与领导意味啥)
1. [小孩哥在花坛发现2枚恐龙蛋化石](https://so.toutiao.com/search?keyword=小孩哥在花坛发现2枚恐龙蛋化石)
1. [贵州晴隆回应“抗战公路圈起来收费”](https://so.toutiao.com/search?keyword=贵州晴隆回应“抗战公路圈起来收费”)
1. [美罗斯福号航母前往海湾地区有何意图](https://so.toutiao.com/search?keyword=美罗斯福号航母前往海湾地区有何意图)
1. [李昊回应水瓶被扔：反正他们踢不进](https://so.toutiao.com/search?keyword=李昊回应水瓶被扔：反正他们踢不进)
1. [泰山现火情多架直升机参与扑救](https://so.toutiao.com/search?keyword=泰山现火情多架直升机参与扑救)
1. [闫妮回应“微醺”人设](https://so.toutiao.com/search?keyword=闫妮回应“微醺”人设)
1. [亚运会收官日：赛场之内 输赢之外](https://so.toutiao.com/search?keyword=亚运会收官日：赛场之内%20输赢之外)
1. [冷空气来袭 多地气温将创新低](https://so.toutiao.com/search?keyword=冷空气来袭%20多地气温将创新低)
1. [亚运会闭幕式举行](https://so.toutiao.com/search?keyword=亚运会闭幕式举行)
1. [多地深度游、主题玩法花式“上新”](https://so.toutiao.com/search?keyword=多地深度游、主题玩法花式“上新”)
1. [“七金王”张展硕无缘亚运男子MVP](https://so.toutiao.com/search?keyword=“七金王”张展硕无缘亚运男子MVP)
1. [有人提前出发和返程避开客流高峰](https://so.toutiao.com/search?keyword=有人提前出发和返程避开客流高峰)
1. [商家回应3片回锅肉卖105元](https://so.toutiao.com/search?keyword=商家回应3片回锅肉卖105元)
1. [亚运会闭幕中国优势项目多点开花](https://so.toutiao.com/search?keyword=亚运会闭幕中国优势项目多点开花)
1. [按摩淋巴可以“排毒”？不正确](https://so.toutiao.com/search?keyword=按摩淋巴可以“排毒”？不正确)
1. [乌方为何公开把朝鲜战俘送韩国一事](https://so.toutiao.com/search?keyword=乌方为何公开把朝鲜战俘送韩国一事)
1. [美国2万亿美元押注AI谁会被收割](https://so.toutiao.com/search?keyword=美国2万亿美元押注AI谁会被收割)
1. [U23亚运男足携铜牌抵京](https://so.toutiao.com/search?keyword=U23亚运男足携铜牌抵京)
1. [国庆前3天高速新能源车充电近300万次](https://so.toutiao.com/search?keyword=国庆前3天高速新能源车充电近300万次)
1. [中美俄领导人2022年后将首次同框](https://so.toutiao.com/search?keyword=中美俄领导人2022年后将首次同框)
1. [李健演唱《情怨》怀念刘欢](https://so.toutiao.com/search?keyword=李健演唱《情怨》怀念刘欢)
1. [王励勤：中国乒乓使命不只是争金夺银](https://so.toutiao.com/search?keyword=王励勤：中国乒乓使命不只是争金夺银)
1. [于子迪成为亚运史上最年轻MVP](https://so.toutiao.com/search?keyword=于子迪成为亚运史上最年轻MVP)
1. [葡萄牙官方晒B费谈C罗视频](https://so.toutiao.com/search?keyword=葡萄牙官方晒B费谈C罗视频)
1. [中国代表团的亚运会“中考”表现如何](https://so.toutiao.com/search?keyword=中国代表团的亚运会“中考”表现如何)
1. [“一国两制”台湾方案在岛内引热议](https://so.toutiao.com/search?keyword=“一国两制”台湾方案在岛内引热议)
1. [台湾“九合一”选举投票日临近](https://so.toutiao.com/search?keyword=台湾“九合一”选举投票日临近)
1. [俄征兵扩军乌作战无人化？大V解读](https://so.toutiao.com/search?keyword=俄征兵扩军乌作战无人化？大V解读)
1. [黄金消费新风潮：金饰“轻量化”](https://so.toutiao.com/search?keyword=黄金消费新风潮：金饰“轻量化”)
1. [詹姆斯闪耀76人对抗赛](https://so.toutiao.com/search?keyword=詹姆斯闪耀76人对抗赛)
1. [何卓佳3-0战胜韩莹](https://so.toutiao.com/search?keyword=何卓佳3-0战胜韩莹)
1. [高市：强烈要求美方最大限度配合调查](https://so.toutiao.com/search?keyword=高市：强烈要求美方最大限度配合调查)
1. [萨巴伦卡爆冷出局](https://so.toutiao.com/search?keyword=萨巴伦卡爆冷出局)
1. [文保工人给乐山大佛掏耳朵养护？假的](https://so.toutiao.com/search?keyword=文保工人给乐山大佛掏耳朵养护？假的)
1. [沙特联军回应胡塞称袭击利雅得](https://so.toutiao.com/search?keyword=沙特联军回应胡塞称袭击利雅得)
1. [全世界都在找中国游客拍照](https://so.toutiao.com/search?keyword=全世界都在找中国游客拍照)
1. [普京谈苏联解体：盲信西方君子协定](https://so.toutiao.com/search?keyword=普京谈苏联解体：盲信西方君子协定)
1. [李昊小抄水瓶被对手扔上看台](https://so.toutiao.com/search?keyword=李昊小抄水瓶被对手扔上看台)
1. [董宇辉《兰知春序音乐会》西安开演](https://so.toutiao.com/search?keyword=董宇辉《兰知春序音乐会》西安开演)
1. [北京：明天起高速迎返程车流高峰](https://so.toutiao.com/search?keyword=北京：明天起高速迎返程车流高峰)
1. [韩国男足亚运夺金预计20人免兵役](https://so.toutiao.com/search?keyword=韩国男足亚运夺金预计20人免兵役)
1. [俄被曝谋划把基辅炸回“石器时代”](https://so.toutiao.com/search?keyword=俄被曝谋划把基辅炸回“石器时代”)
1. [部分一线城市月供接近房租说明啥](https://so.toutiao.com/search?keyword=部分一线城市月供接近房租说明啥)
1. [朱辰杰发文：我们一定会越来越好](https://so.toutiao.com/search?keyword=朱辰杰发文：我们一定会越来越好)
1. [外籍游客镜头下的重庆之夜](https://so.toutiao.com/search?keyword=外籍游客镜头下的重庆之夜)
1. [迪丽热巴穿明艳红裙漫步巴黎](https://so.toutiao.com/search?keyword=迪丽热巴穿明艳红裙漫步巴黎)
1. [江西运动员亚运获8金1银2铜](https://so.toutiao.com/search?keyword=江西运动员亚运获8金1银2铜)
1. [“补贴+贴息”激发假日消费活力](https://so.toutiao.com/search?keyword=“补贴+贴息”激发假日消费活力)
1. [贺炜：这不是简单的一枚铜牌](https://so.toutiao.com/search?keyword=贺炜：这不是简单的一枚铜牌)
1. [巴勒斯坦球员向国足致歉](https://so.toutiao.com/search?keyword=巴勒斯坦球员向国足致歉)
1. [俄军反复轰炸基辅一座桥有何意图](https://so.toutiao.com/search?keyword=俄军反复轰炸基辅一座桥有何意图)
1. [日本观众在亚运赛场举起旭日旗](https://so.toutiao.com/search?keyword=日本观众在亚运赛场举起旭日旗)
1. [司机开着“智驾”在高速上睡着了](https://so.toutiao.com/search?keyword=司机开着“智驾”在高速上睡着了)
1. [有人被水猴子吸干血？警方辟谣](https://so.toutiao.com/search?keyword=有人被水猴子吸干血？警方辟谣)
1. [新华社：0:5给中国足球的又一记警钟](https://so.toutiao.com/search?keyword=新华社：0:5给中国足球的又一记警钟)
1. [超长蛋挞还能火多久](https://so.toutiao.com/search?keyword=超长蛋挞还能火多久)
1. [国庆期间珠穆朗玛峰人山人海](https://so.toutiao.com/search?keyword=国庆期间珠穆朗玛峰人山人海)
1. [中央气象台发布大风蓝色预警](https://so.toutiao.com/search?keyword=中央气象台发布大风蓝色预警)
1. [美债为何狂飙](https://so.toutiao.com/search?keyword=美债为何狂飙)
1. [丰田8月全球销量为何下降](https://so.toutiao.com/search?keyword=丰田8月全球销量为何下降)
1. [《西游记》作曲许镜清向星火社维权](https://so.toutiao.com/search?keyword=《西游记》作曲许镜清向星火社维权)
1. [郑丽文批苏贞昌一向横着走](https://so.toutiao.com/search?keyword=郑丽文批苏贞昌一向横着走)
1. [中俄白等八国超4.7万人集结大练兵](https://so.toutiao.com/search?keyword=中俄白等八国超4.7万人集结大练兵)
1. [AI已经有意识了吗](https://so.toutiao.com/search?keyword=AI已经有意识了吗)
1. [科研人员谈“3000米外一枪命中”](https://so.toutiao.com/search?keyword=科研人员谈“3000米外一枪命中”)
1. [新华社：留给中国女足的时间不多了](https://so.toutiao.com/search?keyword=新华社：留给中国女足的时间不多了)
1. [女子别车遭脚踹被罚200元](https://so.toutiao.com/search?keyword=女子别车遭脚踹被罚200元)
1. [军媒：祖国完全统一历史任务定能实现](https://so.toutiao.com/search?keyword=军媒：祖国完全统一历史任务定能实现)
1. [国庆档票房已超5亿元](https://so.toutiao.com/search?keyword=国庆档票房已超5亿元)
1. [国庆文旅消费转向“深度体验”](https://so.toutiao.com/search?keyword=国庆文旅消费转向“深度体验”)
1. [中国夫妇刚拿澳洲绿卡车祸身亡](https://so.toutiao.com/search?keyword=中国夫妇刚拿澳洲绿卡车祸身亡)
1. [中国队亚运169金收官](https://so.toutiao.com/search?keyword=中国队亚运169金收官)
1. [老将吴曦谈下半场球队换人调整](https://so.toutiao.com/search?keyword=老将吴曦谈下半场球队换人调整)
1. [孩子放不下手机怎么办](https://so.toutiao.com/search?keyword=孩子放不下手机怎么办)
1. [“好冷空气”来了 对气候有何影响](https://so.toutiao.com/search?keyword=“好冷空气”来了%20对气候有何影响)
1. [这些粗粮可能比米饭还升糖](https://so.toutiao.com/search?keyword=这些粗粮可能比米饭还升糖)
1. [黑龙江丰林县：高铁赋能引客来](https://so.toutiao.com/search?keyword=黑龙江丰林县：高铁赋能引客来)
1. [排队买60厘米长的蛋挞买的到底是什么](https://so.toutiao.com/search?keyword=排队买60厘米长的蛋挞买的到底是什么)
1. [学者谈诺奖“潜力股”努佐](https://so.toutiao.com/search?keyword=学者谈诺奖“潜力股”努佐)
1. [普京前顾问称俄正研究第二次向东转](https://so.toutiao.com/search?keyword=普京前顾问称俄正研究第二次向东转)
1. [欧国联：西班牙3-1捷克](https://so.toutiao.com/search?keyword=欧国联：西班牙3-1捷克)
1. [高市政府任内首次对俄实施制裁](https://so.toutiao.com/search?keyword=高市政府任内首次对俄实施制裁)
1. [全球债市陷入罕见抛售风暴](https://so.toutiao.com/search?keyword=全球债市陷入罕见抛售风暴)
1. [G1156次列车把荆楚风光搬进车厢](https://so.toutiao.com/search?keyword=G1156次列车把荆楚风光搬进车厢)
1. [在珠峰下偶遇世界之巅的守护者](https://so.toutiao.com/search?keyword=在珠峰下偶遇世界之巅的守护者)
1. [评论员：民进党不如把钱花在民众身上](https://so.toutiao.com/search?keyword=评论员：民进党不如把钱花在民众身上)
1. [万朵“伞花”绽放上海外滩](https://so.toutiao.com/search?keyword=万朵“伞花”绽放上海外滩)
1. [俄军士兵驾车时遭无人机袭击将其打爆](https://so.toutiao.com/search?keyword=俄军士兵驾车时遭无人机袭击将其打爆)
1. [美伊调解与备战并行](https://so.toutiao.com/search?keyword=美伊调解与备战并行)
1. [家国长歌](https://so.toutiao.com/search?keyword=家国长歌)
1. [韩国“梦之队”完败给中国队](https://so.toutiao.com/search?keyword=韩国“梦之队”完败给中国队)
1. [苹果小米等新手机出现部分黑屏现象](https://so.toutiao.com/search?keyword=苹果小米等新手机出现部分黑屏现象)
1. [拿下点球大战！U23国足获亚运铜牌](https://so.toutiao.com/search?keyword=拿下点球大战！U23国足获亚运铜牌)
1. [媒体：央行“四箭齐发”释放利好](https://so.toutiao.com/search?keyword=媒体：央行“四箭齐发”释放利好)
1. [媒体人：难怪当年许昕说林诗栋是天才](https://so.toutiao.com/search?keyword=媒体人：难怪当年许昕说林诗栋是天才)
1. [为什么现在的酒店不再收押金查房了](https://so.toutiao.com/search?keyword=为什么现在的酒店不再收押金查房了)
1. [9位国之脊梁登上高速巨型广告牌](https://so.toutiao.com/search?keyword=9位国之脊梁登上高速巨型广告牌)
1. [南昌民警组成人墙护送130万游客离场](https://so.toutiao.com/search?keyword=南昌民警组成人墙护送130万游客离场)
1. [足球记者马德兴赛后哽咽发声](https://so.toutiao.com/search?keyword=足球记者马德兴赛后哽咽发声)
1. [前空乘自述：行业对乘务员太苛刻](https://so.toutiao.com/search?keyword=前空乘自述：行业对乘务员太苛刻)
1. [王钰栋回应一脚世界波后被叫球王](https://so.toutiao.com/search?keyword=王钰栋回应一脚世界波后被叫球王)
1. [郑丽文亮明一中立场抓住中间选民领跑](https://so.toutiao.com/search?keyword=郑丽文亮明一中立场抓住中间选民领跑)
1. [名嘴：“台独”若踩红线大陆绝不留情](https://so.toutiao.com/search?keyword=名嘴：“台独”若踩红线大陆绝不留情)
1. [彭啸：这是我人生中最有含金量的奖牌](https://so.toutiao.com/search?keyword=彭啸：这是我人生中最有含金量的奖牌)
1. [国足想通过比赛找信心没想反崩了盘](https://so.toutiao.com/search?keyword=国足想通过比赛找信心没想反崩了盘)
1. [朝鲜进行中程战略导弹发射训练](https://so.toutiao.com/search?keyword=朝鲜进行中程战略导弹发射训练)
1. [亚运冠军和五星红旗的同框瞬间](https://so.toutiao.com/search?keyword=亚运冠军和五星红旗的同框瞬间)
1. [美对台军售约9361亿新台币尚未交付](https://so.toutiao.com/search?keyword=美对台军售约9361亿新台币尚未交付)
1. [外媒：中国国庆假期激发文旅消费活力](https://so.toutiao.com/search?keyword=外媒：中国国庆假期激发文旅消费活力)
1. [安东尼奥：此刻我是最幸福的教练](https://so.toutiao.com/search?keyword=安东尼奥：此刻我是最幸福的教练)
1. [阿曼副驾想在以色列复制911恐袭吗](https://so.toutiao.com/search?keyword=阿曼副驾想在以色列复制911恐袭吗)
1. [大V：红利曼失守暴露俄军最致命问题](https://so.toutiao.com/search?keyword=大V：红利曼失守暴露俄军最致命问题)
1. [台湾一男子帮忙推车躲过一劫](https://so.toutiao.com/search?keyword=台湾一男子帮忙推车躲过一劫)
1. [四川理亚路：行至天际 坐看云起](https://so.toutiao.com/search?keyword=四川理亚路：行至天际%20坐看云起)
1. [如何看待迪拜航空“空中惊魂”](https://so.toutiao.com/search?keyword=如何看待迪拜航空“空中惊魂”)
1. [俄乌停火为何越谈越远](https://so.toutiao.com/search?keyword=俄乌停火为何越谈越远)
1. [吃螃蟹有何讲究](https://so.toutiao.com/search?keyword=吃螃蟹有何讲究)
1. [王欣瑜中网首秀出局](https://so.toutiao.com/search?keyword=王欣瑜中网首秀出局)
1. [俄警告外国公民不要留在基辅](https://so.toutiao.com/search?keyword=俄警告外国公民不要留在基辅)
1. [凯恩谈英格兰队未来目标](https://so.toutiao.com/search?keyword=凯恩谈英格兰队未来目标)
1. [金价银价“巨震”](https://so.toutiao.com/search?keyword=金价银价“巨震”)
1. [朝鲜：永远关闭南部边境避免接触韩国](https://so.toutiao.com/search?keyword=朝鲜：永远关闭南部边境避免接触韩国)
1. [韩媒感叹中国亚运每天都是金牌日](https://so.toutiao.com/search?keyword=韩媒感叹中国亚运每天都是金牌日)
1. [对手因伤退赛郑钦文中网晋级](https://so.toutiao.com/search?keyword=对手因伤退赛郑钦文中网晋级)
1. [亚运会中国三大球只有女排夺金](https://so.toutiao.com/search?keyword=亚运会中国三大球只有女排夺金)
1. [16岁孙心然中网两连胜将战高芙](https://so.toutiao.com/search?keyword=16岁孙心然中网两连胜将战高芙)
1. [中国队首夺男子橄榄球亚运银牌](https://so.toutiao.com/search?keyword=中国队首夺男子橄榄球亚运银牌)
1. [评论员：女足无缘亚运奖牌并不意外](https://so.toutiao.com/search?keyword=评论员：女足无缘亚运奖牌并不意外)
1. [中国足球队发文祝贺U23亚运会摘铜](https://so.toutiao.com/search?keyword=中国足球队发文祝贺U23亚运会摘铜)
1. [评论员：黄岩岛主权不容撼动](https://so.toutiao.com/search?keyword=评论员：黄岩岛主权不容撼动)
1. [国足开球踢给巴勒斯坦 解说懵圈](https://so.toutiao.com/search?keyword=国足开球踢给巴勒斯坦%20解说懵圈)
1. [苏超观众席举起巨型国旗](https://so.toutiao.com/search?keyword=苏超观众席举起巨型国旗)
1. [国足赛后谢场遭现场球迷怒斥](https://so.toutiao.com/search?keyword=国足赛后谢场遭现场球迷怒斥)
1. [媒体：男女足亚运成绩反差鲜明](https://so.toutiao.com/search?keyword=媒体：男女足亚运成绩反差鲜明)
1. [李昊扑点再现大心脏微笑](https://so.toutiao.com/search?keyword=李昊扑点再现大心脏微笑)
1. [密林深处官兵用脚步丈量祖国山河](https://so.toutiao.com/search?keyword=密林深处官兵用脚步丈量祖国山河)
1. [博主复盘男足铜牌战：奖牌弥足珍贵](https://so.toutiao.com/search?keyword=博主复盘男足铜牌战：奖牌弥足珍贵)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Oct 04 2026 21:11:12 GMT+0800 (China Standard Time) -->

1. [纹身是免疫细胞一辈子的战斗](https://www.zhihu.com/search?q=%E7%BA%B9%E8%BA%AB%E6%98%AF%E5%85%8D%E7%96%AB%E7%BB%86%E8%83%9E%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E6%88%98%E6%96%97)
1. [东航再通报空姐下跪事件](https://www.zhihu.com/search?q=%E4%B8%9C%E8%88%AA%E5%86%8D%E9%80%9A%E6%8A%A5%E7%A9%BA%E5%A7%90%E4%B8%8B%E8%B7%AA%E4%BA%8B%E4%BB%B6)
1. [田馥甄说现在讲话要非常小心](https://www.zhihu.com/search?q=%E7%94%B0%E9%A6%A5%E7%94%84%E8%AF%B4%E7%8E%B0%E5%9C%A8%E8%AE%B2%E8%AF%9D%E8%A6%81%E9%9D%9E%E5%B8%B8%E5%B0%8F%E5%BF%83)
1. [李飞飞称十年后只剩两类劳动](https://www.zhihu.com/search?q=%E6%9D%8E%E9%A3%9E%E9%A3%9E%E7%A7%B0%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%AA%E5%89%A9%E4%B8%A4%E7%B1%BB%E5%8A%B3%E5%8A%A8)
1. [德国教材：很多中国人没有汽车](https://www.zhihu.com/search?q=%E5%BE%B7%E5%9B%BD%E6%95%99%E6%9D%90%EF%BC%9A%E5%BE%88%E5%A4%9A%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B2%A1%E6%9C%89%E6%B1%BD%E8%BD%A6)
1. [中国男足时隔 28 年再夺亚运铜牌](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E8%B6%B3%E6%97%B6%E9%9A%94%2028%20%E5%B9%B4%E5%86%8D%E5%A4%BA%E4%BA%9A%E8%BF%90%E9%93%9C%E7%89%8C)
1. [国足0比5惨败却让小将接受采访](https://www.zhihu.com/search?q=%E5%9B%BD%E8%B6%B30%E6%AF%945%E6%83%A8%E8%B4%A5%E5%8D%B4%E8%AE%A9%E5%B0%8F%E5%B0%86%E6%8E%A5%E5%8F%97%E9%87%87%E8%AE%BF)
1. [中国队 169 金 89 银 83 铜收官](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E9%98%9F%20169%20%E9%87%91%2089%20%E9%93%B6%2083%20%E9%93%9C%E6%94%B6%E5%AE%98)
1. [孕妇骑车别车被司机踹翻](https://www.zhihu.com/search?q=%E5%AD%95%E5%A6%87%E9%AA%91%E8%BD%A6%E5%88%AB%E8%BD%A6%E8%A2%AB%E5%8F%B8%E6%9C%BA%E8%B8%B9%E7%BF%BB)
1. [巴勒斯坦球员向国足道歉](https://www.zhihu.com/search?q=%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E7%90%83%E5%91%98%E5%90%91%E5%9B%BD%E8%B6%B3%E9%81%93%E6%AD%89)
1. [警方查处孕妇驾驶摩托别车遭脚踹事件](https://www.zhihu.com/search?q=%E8%AD%A6%E6%96%B9%E6%9F%A5%E5%A4%84%E5%AD%95%E5%A6%87%E9%A9%BE%E9%A9%B6%E6%91%A9%E6%89%98%E5%88%AB%E8%BD%A6%E9%81%AD%E8%84%9A%E8%B8%B9%E4%BA%8B%E4%BB%B6)
1. [张家齐 母女关系不可能修复了](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%20%E6%AF%8D%E5%A5%B3%E5%85%B3%E7%B3%BB%E4%B8%8D%E5%8F%AF%E8%83%BD%E4%BF%AE%E5%A4%8D%E4%BA%86)
1. [原央视主持人阿丘回应被通报](https://www.zhihu.com/search?q=%E5%8E%9F%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E9%98%BF%E4%B8%98%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%80%9A%E6%8A%A5)
1. [法国多地爆发学生抗议](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E5%A4%9A%E5%9C%B0%E7%88%86%E5%8F%91%E5%AD%A6%E7%94%9F%E6%8A%97%E8%AE%AE)
1. [AI 抽卡出重大成果论文署名归属](https://www.zhihu.com/search?q=AI%20%E6%8A%BD%E5%8D%A1%E5%87%BA%E9%87%8D%E5%A4%A7%E6%88%90%E6%9E%9C%E8%AE%BA%E6%96%87%E7%BD%B2%E5%90%8D%E5%BD%92%E5%B1%9E)
1. [中国男足 0-5 巴勒斯坦](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E8%B6%B3%200-5%20%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6)
1. [国庆多地高速服务区电车取号排队充电](https://www.zhihu.com/search?q=%E5%9B%BD%E5%BA%86%E5%A4%9A%E5%9C%B0%E9%AB%98%E9%80%9F%E6%9C%8D%E5%8A%A1%E5%8C%BA%E7%94%B5%E8%BD%A6%E5%8F%96%E5%8F%B7%E6%8E%92%E9%98%9F%E5%85%85%E7%94%B5)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Oct 05 2026 01:37:07 GMT+0800 (China Standard Time) -->

1. [韩国网友不满亚运会夺金牌就能免兵役，你怎么看？这到底算正当奖励还是过度特权？](https://www.zhihu.com/question/2090023577105819100)
1. [2027 年泰晤士大学排名出炉，清华首次超越欧洲大陆所有高校，有哪些信息值得关注？](https://www.zhihu.com/question/2088679331371530000)
1. [有哪些演员演了完全不符合本人气质的角色，结果却意外封神？](https://www.zhihu.com/question/1925863261938619000)
1. [“飞行员想带我们一起自杀！”怎么看待迪拜航空飞机一分钟骤降1.5万英尺，机组人员刺伤同事?](https://www.zhihu.com/question/2088713859351704600)
1. [如何看待昆明力争 2026年 11 月份开始逐步试点开放滇池专门游泳区域？](https://www.zhihu.com/question/2088724437944235000)
1. [德国教材「很多中国人没有汽车，出行靠自行车或步行」等内容引争议，这真是现行教材吗？为何会出现这种错误？](https://www.zhihu.com/question/2089638530678875100)
1. [国产旗舰新机集体涨价后 iPhone 销量反弹，导致这一现象的原因是什么？](https://www.zhihu.com/question/2088048820919734500)
1. [网传俄罗斯一实验室助理打破试管后感染鼠疫死亡，近200人被纳入医学观察，有哪些信息值得关注？](https://www.zhihu.com/question/2089822273524057000)
1. [今年亚运会哪一场比赛最让你热血沸腾？](https://www.zhihu.com/question/2085327453967185400)
1. [神雕结尾，郭靖为什么不再称呼周伯通大哥，反而称周老爷子？](https://www.zhihu.com/question/2057489594103419100)
1. [《艾希：续》众筹突破2000万，制作人直播下跪求大家别再捐了，恳请不要「造神」，这事你怎么看？](https://www.zhihu.com/question/2090119406818956300)
1. [《凡人修仙传》动画第194集中女船长李婴宁的表现怎么样？这一集整体质量如何？](https://www.zhihu.com/question/2089781685340711000)
1. [周扬青自嘲脸「馒化」了，什么是「馒化脸」？医美技术发展能避免这种情况吗？](https://www.zhihu.com/question/2089117053814663200)
1. [孩子说周末就要睡个懒觉，不要叫他，让他自然醒，你怎么看？](https://www.zhihu.com/question/2089669154861273000)
1. [你对于 2026 年诺贝尔生理学或医学奖的预测是什么？](https://www.zhihu.com/question/2081709250993303600)
1. [国庆高速电车充电排队几小时，甚至电量1%趴窝，电车长途真的不适合节假日跑高速吗？](https://www.zhihu.com/question/2089281712429843000)
1. [怎么提高自己的语言表达能力还有思维能力？](https://www.zhihu.com/question/10113427938)
1. [如何评价上海一音乐教师赴泰后失联多日，手机 IP 曾显示在缅甸？目前情况如何？](https://www.zhihu.com/question/2089658031193773300)
1. [你会一直干一个工作，还是不停的更换工作呢？](https://www.zhihu.com/question/2044074027866751000)
1. [2026 赛季 F1 巴林大奖赛马来西亚站，维斯塔潘夺冠，勒克莱尔第四，如何评价本场比赛？](https://www.zhihu.com/question/2090144799043105300)
1. [如何看待10月3日《思想耀岭南》对话库洛游戏CEO刘胜，提到中国未来的好游戏大概率会出自广东？](https://www.zhihu.com/question/2090086026102453000)
1. [《大明王朝1566》里「改稻为桑」这么一个虚构出来的议题，本来解决起来很简单，怎么就搞得这么复杂？](https://www.zhihu.com/question/2027421719724311600)
1. [为什么现在下属越来越不尊重领导了，你说一句，他顶10句？](https://www.zhihu.com/question/2086502731292979700)
1. [为什么发现现在番茄ai文越来越多了？](https://www.zhihu.com/question/1985872496201859600)
1. [到底该怎么跟同事相处？](https://www.zhihu.com/question/2046580460646617300)
1. [你有没有想过将职场与家庭教育跨界连接？如果把职场的效率思维迁移到孩子身上，会发生什么？](https://www.zhihu.com/question/2086784250444096800)
1. [为什么有那么多的人喜欢参观古迹？](https://www.zhihu.com/question/290915559)
1. [网友称纹身是免疫细胞一辈子的战斗，这是真的吗？对健康会有哪些影响？](https://www.zhihu.com/question/2089414718989365800)
1. [AI绘画为何不如预期，是研发重心不在艺术吗？](https://www.zhihu.com/question/2082893717426398000)
1. [学习时注意力不集中，如何快速恢复专注？](https://www.zhihu.com/question/2088035442742634200)

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
<!-- 最后更新时间 Mon Oct 05 2026 01:39:53 GMT+0800 (China Standard Time) -->

1. [怀爱国之心立报国之志](https://s.weibo.com//weibo?q=%23%E6%80%80%E7%88%B1%E5%9B%BD%E4%B9%8B%E5%BF%83%E7%AB%8B%E6%8A%A5%E5%9B%BD%E4%B9%8B%E5%BF%97%23&Refer=new_time)
1. [超10万份孕妇血样被偷运出境](https://s.weibo.com//weibo?q=%23%E8%B6%8510%E4%B8%87%E4%BB%BD%E5%AD%95%E5%A6%87%E8%A1%80%E6%A0%B7%E8%A2%AB%E5%81%B7%E8%BF%90%E5%87%BA%E5%A2%83%23&t=31&band_rank=1&Refer=top)
1. [年轻人开始不买景区冤种三件套了](https://s.weibo.com//weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E4%B8%8D%E4%B9%B0%E6%99%AF%E5%8C%BA%E5%86%A4%E7%A7%8D%E4%B8%89%E4%BB%B6%E5%A5%97%E4%BA%86%23&t=31&band_rank=2&Refer=top)
1. [中国红闪耀亚运闭幕式](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BA%A2%E9%97%AA%E8%80%80%E4%BA%9A%E8%BF%90%E9%97%AD%E5%B9%95%E5%BC%8F%23&t=31&band_rank=3&Refer=top)
1. [蔡康永现身台独分子竞选会场](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E7%8E%B0%E8%BA%AB%E5%8F%B0%E7%8B%AC%E5%88%86%E5%AD%90%E7%AB%9E%E9%80%89%E4%BC%9A%E5%9C%BA%23&t=31&band_rank=4&Refer=top)
1. [康康 EDG](https://s.weibo.com//weibo?q=%E5%BA%B7%E5%BA%B7%20EDG&t=31&band_rank=5&Refer=top)
1. [肖战生日](https://s.weibo.com//weibo?q=%E8%82%96%E6%88%98%E7%94%9F%E6%97%A5&t=31&band_rank=6&Refer=top)
1. [崔晋 李勒优](https://s.weibo.com//weibo?q=%E5%B4%94%E6%99%8B%20%E6%9D%8E%E5%8B%92%E4%BC%98&t=31&band_rank=7&Refer=top)
1. [四川地震](https://s.weibo.com//weibo?q=%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87&t=31&band_rank=8&Refer=top)
1. [李勒优说没有一个地方是属于我的归属](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E8%AF%B4%E6%B2%A1%E6%9C%89%E4%B8%80%E4%B8%AA%E5%9C%B0%E6%96%B9%E6%98%AF%E5%B1%9E%E4%BA%8E%E6%88%91%E7%9A%84%E5%BD%92%E5%B1%9E%23&t=31&band_rank=9&Refer=top)
1. [国庆反向旅游迎来新变化](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E5%BA%86%E5%8F%8D%E5%90%91%E6%97%85%E6%B8%B8%E8%BF%8E%E6%9D%A5%E6%96%B0%E5%8F%98%E5%8C%96%23&t=31&band_rank=10&Refer=top)
1. [蔡康永 零跑汽车](https://s.weibo.com//weibo?q=%E8%94%A1%E5%BA%B7%E6%B0%B8%20%E9%9B%B6%E8%B7%91%E6%B1%BD%E8%BD%A6&t=31&band_rank=11&Refer=top)
1. [蔡康永](https://s.weibo.com//weibo?q=%E8%94%A1%E5%BA%B7%E6%B0%B8&t=31&band_rank=12&Refer=top)
1. [女特警礼貌拒绝老外过于热情的动作](https://s.weibo.com//weibo?q=%E5%A5%B3%E7%89%B9%E8%AD%A6%E7%A4%BC%E8%B2%8C%E6%8B%92%E7%BB%9D%E8%80%81%E5%A4%96%E8%BF%87%E4%BA%8E%E7%83%AD%E6%83%85%E7%9A%84%E5%8A%A8%E4%BD%9C&t=31&band_rank=13&Refer=top)
1. [任嘉伦 红果短剧](https://s.weibo.com//weibo?q=%E4%BB%BB%E5%98%89%E4%BC%A6%20%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7&t=31&band_rank=14&Refer=top)
1. [檀健次生日工作室发文](https://s.weibo.com//weibo?q=%E6%AA%80%E5%81%A5%E6%AC%A1%E7%94%9F%E6%97%A5%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%96%87&t=31&band_rank=15&Refer=top)
1. [王祖贤大粉脱粉](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%E5%A4%A7%E7%B2%89%E8%84%B1%E7%B2%89%23&t=31&band_rank=16&Refer=top)
1. [胖东来被指招聘性别歧视](https://s.weibo.com//weibo?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A2%AB%E6%8C%87%E6%8B%9B%E8%81%98%E6%80%A7%E5%88%AB%E6%AD%A7%E8%A7%86&t=31&band_rank=17&Refer=top)
1. [兰香如故我妻子竟然是我妻子](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%88%91%E5%A6%BB%E5%AD%90%E7%AB%9F%E7%84%B6%E6%98%AF%E6%88%91%E5%A6%BB%E5%AD%90%23&t=31&band_rank=18&Refer=top)
1. [带小孩不要坐商务座](https://s.weibo.com//weibo?q=%23%E5%B8%A6%E5%B0%8F%E5%AD%A9%E4%B8%8D%E8%A6%81%E5%9D%90%E5%95%86%E5%8A%A1%E5%BA%A7%23&t=31&band_rank=19&Refer=top)
1. [国庆景区热度前10被小城包揽](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E5%BA%86%E6%99%AF%E5%8C%BA%E7%83%AD%E5%BA%A6%E5%89%8D10%E8%A2%AB%E5%B0%8F%E5%9F%8E%E5%8C%85%E6%8F%BD%23&t=31&band_rank=20&Refer=top)
1. [疑似王橹杰B站浏览记录](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E7%8E%8B%E6%A9%B9%E6%9D%B0B%E7%AB%99%E6%B5%8F%E8%A7%88%E8%AE%B0%E5%BD%95%23&t=31&band_rank=21&Refer=top)
1. [晋妈称感谢崔晋而非李勒优](https://s.weibo.com//weibo?q=%E6%99%8B%E5%A6%88%E7%A7%B0%E6%84%9F%E8%B0%A2%E5%B4%94%E6%99%8B%E8%80%8C%E9%9D%9E%E6%9D%8E%E5%8B%92%E4%BC%98&t=31&band_rank=22&Refer=top)
1. [肖战那一抹红帮我承住所有的矛盾与果敢](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E9%82%A3%E4%B8%80%E6%8A%B9%E7%BA%A2%E5%B8%AE%E6%88%91%E6%89%BF%E4%BD%8F%E6%89%80%E6%9C%89%E7%9A%84%E7%9F%9B%E7%9B%BE%E4%B8%8E%E6%9E%9C%E6%95%A2%23&t=31&band_rank=23&Refer=top)
1. [内娱请停止老头综艺](https://s.weibo.com//weibo?q=%23%E5%86%85%E5%A8%B1%E8%AF%B7%E5%81%9C%E6%AD%A2%E8%80%81%E5%A4%B4%E7%BB%BC%E8%89%BA%23&t=31&band_rank=24&Refer=top)
1. [男生描述喜欢的女生很少提性格](https://s.weibo.com//weibo?q=%E7%94%B7%E7%94%9F%E6%8F%8F%E8%BF%B0%E5%96%9C%E6%AC%A2%E7%9A%84%E5%A5%B3%E7%94%9F%E5%BE%88%E5%B0%91%E6%8F%90%E6%80%A7%E6%A0%BC&t=31&band_rank=25&Refer=top)
1. [猴子帮女子摘苍耳一脸嫌弃](https://s.weibo.com//weibo?q=%E7%8C%B4%E5%AD%90%E5%B8%AE%E5%A5%B3%E5%AD%90%E6%91%98%E8%8B%8D%E8%80%B3%E4%B8%80%E8%84%B8%E5%AB%8C%E5%BC%83&t=31&band_rank=26&Refer=top)
1. [高知家庭养出营养不良娃](https://s.weibo.com//weibo?q=%E9%AB%98%E7%9F%A5%E5%AE%B6%E5%BA%AD%E5%85%BB%E5%87%BA%E8%90%A5%E5%85%BB%E4%B8%8D%E8%89%AF%E5%A8%83&t=31&band_rank=27&Refer=top)
1. [高市早苗称已向美国提出强烈抗议](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A7%B0%E5%B7%B2%E5%90%91%E7%BE%8E%E5%9B%BD%E6%8F%90%E5%87%BA%E5%BC%BA%E7%83%88%E6%8A%97%E8%AE%AE%23&t=31&band_rank=28&Refer=top)
1. [24岁女生吃2小时自助餐被送急诊](https://s.weibo.com//weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%94%9F%E5%90%832%E5%B0%8F%E6%97%B6%E8%87%AA%E5%8A%A9%E9%A4%90%E8%A2%AB%E9%80%81%E6%80%A5%E8%AF%8A%23&t=31&band_rank=29&Refer=top)
1. [教你一招彻底删除隐私记录](https://s.weibo.com//weibo?q=%23%E6%95%99%E4%BD%A0%E4%B8%80%E6%8B%9B%E5%BD%BB%E5%BA%95%E5%88%A0%E9%99%A4%E9%9A%90%E7%A7%81%E8%AE%B0%E5%BD%95%23&t=31&band_rank=30&Refer=top)
1. [主角被夺舍亲近之人怎会看不出](https://s.weibo.com//weibo?q=%E4%B8%BB%E8%A7%92%E8%A2%AB%E5%A4%BA%E8%88%8D%E4%BA%B2%E8%BF%91%E4%B9%8B%E4%BA%BA%E6%80%8E%E4%BC%9A%E7%9C%8B%E4%B8%8D%E5%87%BA&t=31&band_rank=31&Refer=top)
1. [研二女生坠楼疑因导师压力](https://s.weibo.com//weibo?q=%E7%A0%94%E4%BA%8C%E5%A5%B3%E7%94%9F%E5%9D%A0%E6%A5%BC%E7%96%91%E5%9B%A0%E5%AF%BC%E5%B8%88%E5%8E%8B%E5%8A%9B&t=31&band_rank=32&Refer=top)
1. [AG战胜RW](https://s.weibo.com//weibo?q=AG%E6%88%98%E8%83%9CRW&t=31&band_rank=33&Refer=top)
1. [跳水金牌榜张家齐排在第四](https://s.weibo.com//weibo?q=%23%E8%B7%B3%E6%B0%B4%E9%87%91%E7%89%8C%E6%A6%9C%E5%BC%A0%E5%AE%B6%E9%BD%90%E6%8E%92%E5%9C%A8%E7%AC%AC%E5%9B%9B%23&t=31&band_rank=34&Refer=top)
1. [江苏惊现日本小镰仓](https://s.weibo.com//weibo?q=%E6%B1%9F%E8%8B%8F%E6%83%8A%E7%8E%B0%E6%97%A5%E6%9C%AC%E5%B0%8F%E9%95%B0%E4%BB%93&t=31&band_rank=35&Refer=top)
1. [王橹杰B站账号澄清](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0B%E7%AB%99%E8%B4%A6%E5%8F%B7%E6%BE%84%E6%B8%85%23&t=31&band_rank=36&Refer=top)
1. [刘雯亮相MiuMiu春夏秀](https://s.weibo.com//weibo?q=%E5%88%98%E9%9B%AF%E4%BA%AE%E7%9B%B8MiuMiu%E6%98%A5%E5%A4%8F%E7%A7%80&t=31&band_rank=37&Refer=top)
1. [吴宜泽再夺一冠](https://s.weibo.com//weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%86%8D%E5%A4%BA%E4%B8%80%E5%86%A0%23&t=31&band_rank=38&Refer=top)
1. [一诺采访](https://s.weibo.com//weibo?q=%E4%B8%80%E8%AF%BA%E9%87%87%E8%AE%BF&t=31&band_rank=39&Refer=top)
1. [张家齐为我的乳腺负责了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%B8%BA%E6%88%91%E7%9A%84%E4%B9%B3%E8%85%BA%E8%B4%9F%E8%B4%A3%E4%BA%86%23&t=31&band_rank=40&Refer=top)
1. [梓渝偶遇](https://s.weibo.com//weibo?q=%E6%A2%93%E6%B8%9D%E5%81%B6%E9%81%87&t=31&band_rank=41&Refer=top)
1. [华伦天奴大秀](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%BC%A6%E5%A4%A9%E5%A5%B4%E5%A4%A7%E7%A7%80&t=31&band_rank=42&Refer=top)
1. [长江的鱼多到成为四川景点](https://s.weibo.com//weibo?q=%E9%95%BF%E6%B1%9F%E7%9A%84%E9%B1%BC%E5%A4%9A%E5%88%B0%E6%88%90%E4%B8%BA%E5%9B%9B%E5%B7%9D%E6%99%AF%E7%82%B9&t=31&band_rank=43&Refer=top)
1. [韩路称烤串店开业遭遇新型骚扰](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E8%B7%AF%E7%A7%B0%E7%83%A4%E4%B8%B2%E5%BA%97%E5%BC%80%E4%B8%9A%E9%81%AD%E9%81%87%E6%96%B0%E5%9E%8B%E9%AA%9A%E6%89%B0%23&t=31&band_rank=44&Refer=top)
1. [张桂源发了9分钟vlog](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%8F%91%E4%BA%869%E5%88%86%E9%92%9Fvlog%23&t=31&band_rank=45&Refer=top)
1. [闪身步都火到国外了](https://s.weibo.com//weibo?q=%23%E9%97%AA%E8%BA%AB%E6%AD%A5%E9%83%BD%E7%81%AB%E5%88%B0%E5%9B%BD%E5%A4%96%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [王鹤棣站在台上看演唱会](https://s.weibo.com//weibo?q=%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%AB%99%E5%9C%A8%E5%8F%B0%E4%B8%8A%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A&t=31&band_rank=47&Refer=top)
1. [姚琛部落选了王一博的无感](https://s.weibo.com//weibo?q=%23%E5%A7%9A%E7%90%9B%E9%83%A8%E8%90%BD%E9%80%89%E4%BA%86%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9A%84%E6%97%A0%E6%84%9F%23&t=31&band_rank=48&Refer=top)
1. [鞠婧祎曾舜晞 七星彩](https://s.weibo.com//weibo?q=%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%9B%BE%E8%88%9C%E6%99%9E%20%E4%B8%83%E6%98%9F%E5%BD%A9&t=31&band_rank=49&Refer=top)
1. [代露娃刚考上大学就做艺考老师赚钱了](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E5%88%9A%E8%80%83%E4%B8%8A%E5%A4%A7%E5%AD%A6%E5%B0%B1%E5%81%9A%E8%89%BA%E8%80%83%E8%80%81%E5%B8%88%E8%B5%9A%E9%92%B1%E4%BA%86%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
