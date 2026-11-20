# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-21 04:24:27

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
<!-- 最后更新时间 Sat Nov 21 2026 02:47:06 GMT+0800 (China Standard Time) -->

1. [胖东来搬离后原址所开新商场几乎倒闭](https://so.toutiao.com/search?keyword=胖东来搬离后原址所开新商场几乎倒闭)
1. [高市早苗拍特朗普试图搭话被无视](https://so.toutiao.com/search?keyword=高市早苗拍特朗普试图搭话被无视)
1. [亚太经合组织贸易数字化合作框架](https://so.toutiao.com/search?keyword=亚太经合组织贸易数字化合作框架)
1. [500元以下的羽绒服到底能不能买](https://so.toutiao.com/search?keyword=500元以下的羽绒服到底能不能买)
1. [特朗普从中国返美途中发帖](https://so.toutiao.com/search?keyword=特朗普从中国返美途中发帖)
1. [女子晒婆婆带娃前后变化](https://so.toutiao.com/search?keyword=女子晒婆婆带娃前后变化)
1. [赖岳谦：汉奸走狗才盲目追捧日本人](https://so.toutiao.com/search?keyword=赖岳谦：汉奸走狗才盲目追捧日本人)
1. [日方称中方接待高市早苗符合惯例](https://so.toutiao.com/search?keyword=日方称中方接待高市早苗符合惯例)
1. [深圳华丽转型生动诠释APEC理念](https://so.toutiao.com/search?keyword=深圳华丽转型生动诠释APEC理念)
1. [余承东纠正“开车可以睡觉”言论](https://so.toutiao.com/search?keyword=余承东纠正“开车可以睡觉”言论)
1. [“社保断缴三个月账户清零”不实](https://so.toutiao.com/search?keyword=“社保断缴三个月账户清零”不实)
1. [李亚鹏想帮王菲母女3人和声被拒绝](https://so.toutiao.com/search?keyword=李亚鹏想帮王菲母女3人和声被拒绝)
1. [“全球最大医院”原党委书记被双开](https://so.toutiao.com/search?keyword=“全球最大医院”原党委书记被双开)
1. [墨西哥总统感谢中国女保镖](https://so.toutiao.com/search?keyword=墨西哥总统感谢中国女保镖)
1. [李子柒当选四川省文联副主席](https://so.toutiao.com/search?keyword=李子柒当选四川省文联副主席)
1. [西班牙本世纪已9次击败法国](https://so.toutiao.com/search?keyword=西班牙本世纪已9次击败法国)
1. [特朗普称行程太满没顾上见金正恩](https://so.toutiao.com/search?keyword=特朗普称行程太满没顾上见金正恩)
1. [一家人下楼散步误入剧组](https://so.toutiao.com/search?keyword=一家人下楼散步误入剧组)
1. [儿子将满18岁消失17年的父亲来求赡养](https://so.toutiao.com/search?keyword=儿子将满18岁消失17年的父亲来求赡养)
1. [满分10分 特朗普为中俄美会晤打12分](https://so.toutiao.com/search?keyword=满分10分%20特朗普为中俄美会晤打12分)
1. [全球市场恐慌升温](https://so.toutiao.com/search?keyword=全球市场恐慌升温)
1. [女子进金店要买89万黄金 店员报警](https://so.toutiao.com/search?keyword=女子进金店要买89万黄金%20店员报警)
1. [特朗普说完全理解普京的愤怒](https://so.toutiao.com/search?keyword=特朗普说完全理解普京的愤怒)
1. [钧正平：日方应收回涉台错误言论](https://so.toutiao.com/search?keyword=钧正平：日方应收回涉台错误言论)
1. [方程豹折叠方向盘引质疑](https://so.toutiao.com/search?keyword=方程豹折叠方向盘引质疑)
1. [APEC凭啥让全球六成GDP聚在一起](https://so.toutiao.com/search?keyword=APEC凭啥让全球六成GDP聚在一起)
1. [东京万人集会抗议高市政权政策](https://so.toutiao.com/search?keyword=东京万人集会抗议高市政权政策)
1. [大地出现异常地震就要来了吗](https://so.toutiao.com/search?keyword=大地出现异常地震就要来了吗)
1. [中方回应高市在深圳就台湾问题表态](https://so.toutiao.com/search?keyword=中方回应高市在深圳就台湾问题表态)
1. [27岁庞众望完成博士论文答辩](https://so.toutiao.com/search?keyword=27岁庞众望完成博士论文答辩)
1. [伊能静一眼看破所有嘉宾](https://so.toutiao.com/search?keyword=伊能静一眼看破所有嘉宾)
1. [专家：中俄美会晤提振全球发展信心](https://so.toutiao.com/search?keyword=专家：中俄美会晤提振全球发展信心)
1. [北京菜百首饰总店金条卖断货](https://so.toutiao.com/search?keyword=北京菜百首饰总店金条卖断货)
1. [特朗普为何打电话批评欧盟援乌](https://so.toutiao.com/search?keyword=特朗普为何打电话批评欧盟援乌)
1. [王毅给深圳办会打100分](https://so.toutiao.com/search?keyword=王毅给深圳办会打100分)
1. [俄罗斯为何愿低价卖气给中国](https://so.toutiao.com/search?keyword=俄罗斯为何愿低价卖气给中国)
1. [APEC国宴大厨分享蒸鱼秘诀](https://so.toutiao.com/search?keyword=APEC国宴大厨分享蒸鱼秘诀)
1. [马斯克：太空进入成本或降100倍](https://so.toutiao.com/search?keyword=马斯克：太空进入成本或降100倍)
1. [小说里的A市在深圳具象化了](https://so.toutiao.com/search?keyword=小说里的A市在深圳具象化了)
1. [中国相机爆火海外的原因是什么](https://so.toutiao.com/search?keyword=中国相机爆火海外的原因是什么)
1. [美俄总统专机有何区别](https://so.toutiao.com/search?keyword=美俄总统专机有何区别)
1. [乌博主称俄军向基辅发射锆石导弹](https://so.toutiao.com/search?keyword=乌博主称俄军向基辅发射锆石导弹)
1. [相声演员杨议将恢复演出？当地回应](https://so.toutiao.com/search?keyword=相声演员杨议将恢复演出？当地回应)
1. [广东将发放5000万元文旅消费券](https://so.toutiao.com/search?keyword=广东将发放5000万元文旅消费券)
1. [零跑多款车型陷质量争议](https://so.toutiao.com/search?keyword=零跑多款车型陷质量争议)
1. [陈楚生《狂流》唱出时代感](https://so.toutiao.com/search?keyword=陈楚生《狂流》唱出时代感)
1. [李在明为何称迈向开放的步伐不能停歇](https://so.toutiao.com/search?keyword=李在明为何称迈向开放的步伐不能停歇)
1. [买件羽绒服怎么这么难](https://so.toutiao.com/search?keyword=买件羽绒服怎么这么难)
1. [广州荔枝冰酒为何能选入晚宴菜单](https://so.toutiao.com/search?keyword=广州荔枝冰酒为何能选入晚宴菜单)
1. [多家券商研判A股后市](https://so.toutiao.com/search?keyword=多家券商研判A股后市)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Nov 21 2026 04:05:02 GMT+0800 (China Standard Time) -->

1. [中俄美三国元首会晤](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4)
1. [AI证明黎曼猜想](https://www.zhihu.com/search?q=AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [多所高校不向2027级研究生提供宿舍](https://www.zhihu.com/search?q=%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E4%B8%8D%E5%90%912027%E7%BA%A7%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8F%90%E4%BE%9B%E5%AE%BF%E8%88%8D)
1. [马斯克离开深圳突访上海](https://www.zhihu.com/search?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A6%BB%E5%BC%80%E6%B7%B1%E5%9C%B3%E7%AA%81%E8%AE%BF%E4%B8%8A%E6%B5%B7)
1. [Anthropic上市](https://www.zhihu.com/search?q=Anthropic%E4%B8%8A%E5%B8%82)
1. [知乎智能搜索全新上线](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2%E5%85%A8%E6%96%B0%E4%B8%8A%E7%BA%BF)
1. [李子柒当选四川文联副主席](https://www.zhihu.com/search?q=%E6%9D%8E%E5%AD%90%E6%9F%92%E5%BD%93%E9%80%89%E5%9B%9B%E5%B7%9D%E6%96%87%E8%81%94%E5%89%AF%E4%B8%BB%E5%B8%AD)
1. [特朗普说美国不支持台独](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%BE%8E%E5%9B%BD%E4%B8%8D%E6%94%AF%E6%8C%81%E5%8F%B0%E7%8B%AC)
1. [DeepSeek调整API定价](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4API%E5%AE%9A%E4%BB%B7)
1. [知乎智能搜索skill](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2skill)
1. [英伟达将不再向中国销售H200](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B0%86%E4%B8%8D%E5%86%8D%E5%90%91%E4%B8%AD%E5%9B%BD%E9%94%80%E5%94%AEH200)
1. [黄仁勋称愿重返英伟达任CEO](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E6%84%BF%E9%87%8D%E8%BF%94%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%BB%BBCEO)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Nov 21 2026 04:24:27 GMT+0800 (China Standard Time) -->

1. [数学家称与 AI 合作证明了黎曼猜想，证明稿超 25 万页，黎曼猜想真的被解决了吗？](https://www.zhihu.com/question/2107239235015263500)
1. [神秘模型 Gestalt 横空出世，设计基准上大幅超越 Claude、GPT，这款模型到底是啥来历？](https://www.zhihu.com/question/2106839067346350000)
1. [王毅介绍中俄美元首会晤情况，称这是一次「和平峰会」，是载入史册的标志性事件，传递出了哪些信号？](https://www.zhihu.com/question/2107019870122547200)
1. [中俄美三方的和平宣言发布后，将会为俄乌局势带来哪些变量？](https://www.zhihu.com/question/2106847799899678500)
1. [酒店的浴室为什么大多是透明的？](https://www.zhihu.com/question/527454391)
1. [特朗普称如果满分 10 分，可以为中俄美元首会晤打 12 分，此次会晤对他有多重要？美方有哪些收获？](https://www.zhihu.com/question/2107079876813353000)
1. [DeepSeek 第二轮融资 1050 多亿元落地，31 家外部股东入局，怎样解读？](https://www.zhihu.com/question/2106889511993189600)
1. [中国政法、上大、上海交大等多所高校不向2027级研究生提供宿舍，为何各校宿舍紧张问题都迟迟没能解决？](https://www.zhihu.com/question/2107038570422563800)
1. [如何看待马斯克离开深圳，突访上海？](https://www.zhihu.com/question/2106907755730814200)
1. [为什么唐僧对猪八戒会有一点偏爱？](https://www.zhihu.com/question/1977299907032397300)
1. [如何评价《fx战士久留美》第八集？](https://www.zhihu.com/question/2106829634486772700)
1. [江南大学回应 「大学英语改为选修」，有通过四六级等免修条件，这一改革会成为趋势吗？](https://www.zhihu.com/question/2106695521175860700)
1. [黄金大跌，你们会去购买黄金吗？](https://www.zhihu.com/question/2098797483895828500)
1. [U17 世界杯小组赛，西班牙 U17 vs 中国 U17 男足，如何评价本场比赛？](https://www.zhihu.com/question/2107245763558209300)
1. [你家的第一台电视是什么样的？为什么小时候总是特别期待看电视？](https://www.zhihu.com/question/2106780350219121000)
1. [如何评价华为全新先锋潮流子品牌OSTA星芒？](https://www.zhihu.com/question/2106692200478269400)
1. [如果 GTA6明年上 PC，什么配置可以发挥最完全体的画面效果？](https://www.zhihu.com/question/2107056554713289500)
1. [旅行者 1 号飞行近 50 年抵达 1 光日位置，这一深空里程碑有哪些特殊价值？](https://www.zhihu.com/question/2106398972487137000)
1. [如何评价《蓝色星原：旅谣》公测前瞻节目？](https://www.zhihu.com/question/2106152174262800600)
1. [如何评价成毅主演的电视剧《两京十五日》？](https://www.zhihu.com/question/2107165635797071600)
1. [现货黄金跌破 3600 美元关口，这意味着什么？这轮下跌会跌到什么位置才有实质性支撑？](https://www.zhihu.com/question/2107019375895238400)
1. [GTA6目前首日销量估算为2458万份，销售额约23.6亿美元，比5代高出3倍，如何评价这一成绩？](https://www.zhihu.com/question/2107069840678834400)
1. [驴友穿越秦岭遇难，家属起诉救援队，法院判定救援队、环保部门无过错，组织者赔偿18万余元，如何看待此事？](https://www.zhihu.com/question/2106482614722883800)
1. [很多人说GTA6没意思“不好玩”，那GTA系列真正的魅力在哪里呢？](https://www.zhihu.com/question/2106788569822109700)
1. [为什么我感觉自己做饭并没有比点外卖省钱？](https://www.zhihu.com/question/438496778)
1. [发达国家中，日本人出国旅游意愿为何那么低？](https://www.zhihu.com/question/2062065010873055000)
1. [美国要是提前知道英国大部分殖民地都是和平解放，会不会后悔打独立战争？](https://www.zhihu.com/question/2105765526047871500)
1. [为什么欧美使用壁炉的普遍性这么高，而中国却没有？](https://www.zhihu.com/question/20796435)
1. [如何评价电影《饥饿游戏：收获日出》？](https://www.zhihu.com/question/2106752968116720600)
1. [军备竞赛是怎么拖垮苏联的？](https://www.zhihu.com/question/2057125871677445600)

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
<!-- 最后更新时间 Sat Nov 21 2026 05:17:10 GMT+0800 (China Standard Time) -->

1. [习近平会见马来西亚总理](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%BC%9A%E8%A7%81%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E6%80%BB%E7%90%86%23&Refer=new_time)
1. [后会友期黄焖鸡事件原声视频](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%BB%84%E7%84%96%E9%B8%A1%E4%BA%8B%E4%BB%B6%E5%8E%9F%E5%A3%B0%E8%A7%86%E9%A2%91&t=31&band_rank=1&Refer=top)
1. [DeepSeek付费体验直线上升](https://s.weibo.com//weibo?q=DeepSeek%E4%BB%98%E8%B4%B9%E4%BD%93%E9%AA%8C%E7%9B%B4%E7%BA%BF%E4%B8%8A%E5%8D%87&t=31&band_rank=2&Refer=top)
1. [APEC盛会效应拉满](https://s.weibo.com//weibo?q=%23APEC%E7%9B%9B%E4%BC%9A%E6%95%88%E5%BA%94%E6%8B%89%E6%BB%A1%23&t=31&band_rank=3&Refer=top)
1. [王子璇问马天宇你不会爱上我](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E9%97%AE%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BD%A0%E4%B8%8D%E4%BC%9A%E7%88%B1%E4%B8%8A%E6%88%91%23&t=31&band_rank=4&Refer=top)
1. [晋妈给李勒优铺的路是接手面馆](https://s.weibo.com//weibo?q=%23%E6%99%8B%E5%A6%88%E7%BB%99%E6%9D%8E%E5%8B%92%E4%BC%98%E9%93%BA%E7%9A%84%E8%B7%AF%E6%98%AF%E6%8E%A5%E6%89%8B%E9%9D%A2%E9%A6%86%23&t=31&band_rank=5&Refer=top)
1. [金价罕见大跌原因找到了](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E7%BD%95%E8%A7%81%E5%A4%A7%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23&t=31&band_rank=6&Refer=top)
1. [张萌回应青稚打听式安慰](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E5%9B%9E%E5%BA%94%E9%9D%92%E7%A8%9A%E6%89%93%E5%90%AC%E5%BC%8F%E5%AE%89%E6%85%B0%23&t=31&band_rank=7&Refer=top)
1. [金价](https://s.weibo.com//weibo?q=%E9%87%91%E4%BB%B7&t=31&band_rank=8&Refer=top)
1. [AI证明黎曼猜想传闻](https://s.weibo.com//weibo?q=AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E4%BC%A0%E9%97%BB&t=31&band_rank=9&Refer=top)
1. [余承东称现在L2开车不能睡觉](https://s.weibo.com//weibo?q=%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E7%8E%B0%E5%9C%A8L2%E5%BC%80%E8%BD%A6%E4%B8%8D%E8%83%BD%E7%9D%A1%E8%A7%89&t=31&band_rank=10&Refer=top)
1. [成毅两京十五日演技表现](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E6%BC%94%E6%8A%80%E8%A1%A8%E7%8E%B0%23&t=31&band_rank=11&Refer=top)
1. [曝青稚妈妈讨厌后会友期的原因](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E9%9D%92%E7%A8%9A%E5%A6%88%E5%A6%88%E8%AE%A8%E5%8E%8C%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=12&Refer=top)
1. [林更新你怎么什么都敢演](https://s.weibo.com//weibo?q=%23%E6%9E%97%E6%9B%B4%E6%96%B0%E4%BD%A0%E6%80%8E%E4%B9%88%E4%BB%80%E4%B9%88%E9%83%BD%E6%95%A2%E6%BC%94%23&t=31&band_rank=13&Refer=top)
1. [白小纯淘汰33](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%B7%98%E6%B1%B033%23&t=31&band_rank=14&Refer=top)
1. [杨超越一开口就是满分作文](https://s.weibo.com//weibo?q=%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%B8%80%E5%BC%80%E5%8F%A3%E5%B0%B1%E6%98%AF%E6%BB%A1%E5%88%86%E4%BD%9C%E6%96%87&t=31&band_rank=15&Refer=top)
1. [深圳人又开始原装出街了](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E5%8F%88%E5%BC%80%E5%A7%8B%E5%8E%9F%E8%A3%85%E5%87%BA%E8%A1%97%E4%BA%86%23&t=31&band_rank=16&Refer=top)
1. [文吉儿袜子塞沙发底下](https://s.weibo.com//weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E8%A2%9C%E5%AD%90%E5%A1%9E%E6%B2%99%E5%8F%91%E5%BA%95%E4%B8%8B%23&t=31&band_rank=17&Refer=top)
1. [U17国足0比5西班牙U17](https://s.weibo.com//weibo?q=%23U17%E5%9B%BD%E8%B6%B30%E6%AF%945%E8%A5%BF%E7%8F%AD%E7%89%99U17%23&t=31&band_rank=18&Refer=top)
1. [苗苗生病后郑恺在家做了8个人的饭](https://s.weibo.com//weibo?q=%23%E8%8B%97%E8%8B%97%E7%94%9F%E7%97%85%E5%90%8E%E9%83%91%E6%81%BA%E5%9C%A8%E5%AE%B6%E5%81%9A%E4%BA%868%E4%B8%AA%E4%BA%BA%E7%9A%84%E9%A5%AD%23&t=31&band_rank=19&Refer=top)
1. [男子清理死亡现场一单收3万](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E6%B8%85%E7%90%86%E6%AD%BB%E4%BA%A1%E7%8E%B0%E5%9C%BA%E4%B8%80%E5%8D%95%E6%94%B63%E4%B8%87%23&t=31&band_rank=20&Refer=top)
1. [选伴侣最牛的思路](https://s.weibo.com//weibo?q=%E9%80%89%E4%BC%B4%E4%BE%A3%E6%9C%80%E7%89%9B%E7%9A%84%E6%80%9D%E8%B7%AF&t=31&band_rank=21&Refer=top)
1. [不要跟任何同事说你的事](https://s.weibo.com//weibo?q=%E4%B8%8D%E8%A6%81%E8%B7%9F%E4%BB%BB%E4%BD%95%E5%90%8C%E4%BA%8B%E8%AF%B4%E4%BD%A0%E7%9A%84%E4%BA%8B&t=31&band_rank=22&Refer=top)
1. [童家堡](https://s.weibo.com//weibo?q=%E7%AB%A5%E5%AE%B6%E5%A0%A1&t=31&band_rank=23&Refer=top)
1. [马天宇家丑不可外扬](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%AE%B6%E4%B8%91%E4%B8%8D%E5%8F%AF%E5%A4%96%E6%89%AC%23&t=31&band_rank=24&Refer=top)
1. [青稚巅峰挑战赛淘汰榜第五](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A%E5%B7%85%E5%B3%B0%E6%8C%91%E6%88%98%E8%B5%9B%E6%B7%98%E6%B1%B0%E6%A6%9C%E7%AC%AC%E4%BA%94&t=31&band_rank=25&Refer=top)
1. [这就是妈](https://s.weibo.com//weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E5%A6%88%23&t=31&band_rank=26&Refer=top)
1. [两京十五日收视率](https://s.weibo.com//weibo?q=%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E6%94%B6%E8%A7%86%E7%8E%87&t=31&band_rank=27&Refer=top)
1. [老了留短发只是因为不用服美役了](https://s.weibo.com//weibo?q=%23%E8%80%81%E4%BA%86%E7%95%99%E7%9F%AD%E5%8F%91%E5%8F%AA%E6%98%AF%E5%9B%A0%E4%B8%BA%E4%B8%8D%E7%94%A8%E6%9C%8D%E7%BE%8E%E5%BD%B9%E4%BA%86%23&t=31&band_rank=28&Refer=top)
1. [许飞 全是巧思](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%20%E5%85%A8%E6%98%AF%E5%B7%A7%E6%80%9D&t=31&band_rank=29&Refer=top)
1. [U17国足vs西班牙U17](https://s.weibo.com//weibo?q=U17%E5%9B%BD%E8%B6%B3vs%E8%A5%BF%E7%8F%AD%E7%89%99U17&t=31&band_rank=30&Refer=top)
1. [雕稳健不让青稚和主持人握手](https://s.weibo.com//weibo?q=%23%E9%9B%95%E7%A8%B3%E5%81%A5%E4%B8%8D%E8%AE%A9%E9%9D%92%E7%A8%9A%E5%92%8C%E4%B8%BB%E6%8C%81%E4%BA%BA%E6%8F%A1%E6%89%8B%23&t=31&band_rank=31&Refer=top)
1. [股民集体抛售科技股](https://s.weibo.com//weibo?q=%23%E8%82%A1%E6%B0%91%E9%9B%86%E4%BD%93%E6%8A%9B%E5%94%AE%E7%A7%91%E6%8A%80%E8%82%A1%23&t=31&band_rank=32&Refer=top)
1. [奚梦瑶的孩子以为何猷君还能长高](https://s.weibo.com//weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%9A%84%E5%AD%A9%E5%AD%90%E4%BB%A5%E4%B8%BA%E4%BD%95%E7%8C%B7%E5%90%9B%E8%BF%98%E8%83%BD%E9%95%BF%E9%AB%98%23&t=31&band_rank=33&Refer=top)
1. [ON直播力挺Viper](https://s.weibo.com//weibo?q=ON%E7%9B%B4%E6%92%AD%E5%8A%9B%E6%8C%BAViper&t=31&band_rank=34&Refer=top)
1. [詹俊谈U17国足0比5西班牙](https://s.weibo.com//weibo?q=%23%E8%A9%B9%E4%BF%8A%E8%B0%88U17%E5%9B%BD%E8%B6%B30%E6%AF%945%E8%A5%BF%E7%8F%AD%E7%89%99%23&t=31&band_rank=35&Refer=top)
1. [Gucci晚宴](https://s.weibo.com//weibo?q=Gucci%E6%99%9A%E5%AE%B4&t=31&band_rank=36&Refer=top)
1. [特朗普刚返美就发重大预告](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%88%9A%E8%BF%94%E7%BE%8E%E5%B0%B1%E5%8F%91%E9%87%8D%E5%A4%A7%E9%A2%84%E5%91%8A%23&t=31&band_rank=37&Refer=top)
1. [女子用手账的方式记录每天喝的咖啡](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E6%89%8B%E8%B4%A6%E7%9A%84%E6%96%B9%E5%BC%8F%E8%AE%B0%E5%BD%95%E6%AF%8F%E5%A4%A9%E5%96%9D%E7%9A%84%E5%92%96%E5%95%A1%23&t=31&band_rank=38&Refer=top)
1. [MAMA获奖名单](https://s.weibo.com//weibo?q=MAMA%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=39&Refer=top)
1. [无畏契约](https://s.weibo.com//weibo?q=%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6&t=31&band_rank=40&Refer=top)
1. [过去你瞧不上的现在高攀不起](https://s.weibo.com//weibo?q=%E8%BF%87%E5%8E%BB%E4%BD%A0%E7%9E%A7%E4%B8%8D%E4%B8%8A%E7%9A%84%E7%8E%B0%E5%9C%A8%E9%AB%98%E6%94%80%E4%B8%8D%E8%B5%B7&t=31&band_rank=41&Refer=top)
1. [华为首款鸿蒙AI手机](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%A6%96%E6%AC%BE%E9%B8%BF%E8%92%99AI%E6%89%8B%E6%9C%BA%23&t=31&band_rank=42&Refer=top)
1. [于和伟说突然不会演戏了](https://s.weibo.com//weibo?q=%23%E4%BA%8E%E5%92%8C%E4%BC%9F%E8%AF%B4%E7%AA%81%E7%84%B6%E4%B8%8D%E4%BC%9A%E6%BC%94%E6%88%8F%E4%BA%86%23&t=31&band_rank=43&Refer=top)
1. [余承东强调开车不能睡觉](https://s.weibo.com//weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%BC%BA%E8%B0%83%E5%BC%80%E8%BD%A6%E4%B8%8D%E8%83%BD%E7%9D%A1%E8%A7%89%23&t=31&band_rank=44&Refer=top)
1. [文吉儿 陈晓楠](https://s.weibo.com//weibo?q=%E6%96%87%E5%90%89%E5%84%BF%20%E9%99%88%E6%99%93%E6%A5%A0&t=31&band_rank=45&Refer=top)
1. [中国唱将](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%94%B1%E5%B0%86&t=31&band_rank=46&Refer=top)
1. [Delight DK](https://s.weibo.com//weibo?q=Delight%20DK&t=31&band_rank=47&Refer=top)
1. [声生不息收视第一](https://s.weibo.com//weibo?q=%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E6%94%B6%E8%A7%86%E7%AC%AC%E4%B8%80&t=31&band_rank=48&Refer=top)
1. [U17国足对阵西班牙U17战绩对比](https://s.weibo.com//weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E5%AF%B9%E9%98%B5%E8%A5%BF%E7%8F%AD%E7%89%99U17%E6%88%98%E7%BB%A9%E5%AF%B9%E6%AF%94%23&t=31&band_rank=49&Refer=top)
1. [李亚鹏想为李嫣窦靖童王菲和声被拒](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E6%83%B3%E4%B8%BA%E6%9D%8E%E5%AB%A3%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%8E%8B%E8%8F%B2%E5%92%8C%E5%A3%B0%E8%A2%AB%E6%8B%92%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
