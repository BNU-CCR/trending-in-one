# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-27 10:12:56

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
<!-- 最后更新时间 Fri Nov 27 2026 06:33:15 GMT+0800 (China Standard Time) -->

1. [中纪委连打三“虎”](https://so.toutiao.com/search?keyword=中纪委连打三“虎”)
1. [新郎发言落泪 新娘大喊不要哭冷死了](https://so.toutiao.com/search?keyword=新郎发言落泪%20新娘大喊不要哭冷死了)
1. [一组数据看世界屋脊上的中国速度](https://so.toutiao.com/search?keyword=一组数据看世界屋脊上的中国速度)
1. [遭举报的武大女教授已被免职](https://so.toutiao.com/search?keyword=遭举报的武大女教授已被免职)
1. [董明珠回应不招留学生争议](https://so.toutiao.com/search?keyword=董明珠回应不招留学生争议)
1. [75岁正部级蔡赴朝被开除党籍](https://so.toutiao.com/search?keyword=75岁正部级蔡赴朝被开除党籍)
1. [隔着玻璃晒太阳补不了维生素D](https://so.toutiao.com/search?keyword=隔着玻璃晒太阳补不了维生素D)
1. [谷爱凌发文致歉](https://so.toutiao.com/search?keyword=谷爱凌发文致歉)
1. [66岁木匠回应耗费40年复刻应县木塔](https://so.toutiao.com/search?keyword=66岁木匠回应耗费40年复刻应县木塔)
1. [宝宝等投喂勺子靠近瞬间嘴巴张最大](https://so.toutiao.com/search?keyword=宝宝等投喂勺子靠近瞬间嘴巴张最大)
1. [重庆小升初有内部选拔？不实](https://so.toutiao.com/search?keyword=重庆小升初有内部选拔？不实)
1. [张靓颖演唱会舞台换装炸场](https://so.toutiao.com/search?keyword=张靓颖演唱会舞台换装炸场)
1. [向太自曝弟弟妹妹相继烧炭离世](https://so.toutiao.com/search?keyword=向太自曝弟弟妹妹相继烧炭离世)
1. [王兴兴：5-10年内机器人产量或超汽车](https://so.toutiao.com/search?keyword=王兴兴：5-10年内机器人产量或超汽车)
1. [高市早苗获颁最佳着装奖遭群嘲](https://so.toutiao.com/search?keyword=高市早苗获颁最佳着装奖遭群嘲)
1. [俄空天军副总司令被捕](https://so.toutiao.com/search?keyword=俄空天军副总司令被捕)
1. [董明珠：汽车产业害虫该灭就灭](https://so.toutiao.com/search?keyword=董明珠：汽车产业害虫该灭就灭)
1. [中方要求菲方拖走非法坐滩军舰](https://so.toutiao.com/search?keyword=中方要求菲方拖走非法坐滩军舰)
1. [英伟达暂停向东南亚四国交付芯片](https://so.toutiao.com/search?keyword=英伟达暂停向东南亚四国交付芯片)
1. [立陶宛敦促台当局认错](https://so.toutiao.com/search?keyword=立陶宛敦促台当局认错)
1. [向太称向华强女儿翻脸不认人](https://so.toutiao.com/search?keyword=向太称向华强女儿翻脸不认人)
1. [郑州胖东来还没开业周边商户已抢租](https://so.toutiao.com/search?keyword=郑州胖东来还没开业周边商户已抢租)
1. [猪油是心血管杀手吗](https://so.toutiao.com/search?keyword=猪油是心血管杀手吗)
1. [研究：咖啡加牛奶抗炎效果或翻倍](https://so.toutiao.com/search?keyword=研究：咖啡加牛奶抗炎效果或翻倍)
1. [全球首个乙肝功能性治愈新药中国获批](https://so.toutiao.com/search?keyword=全球首个乙肝功能性治愈新药中国获批)
1. [曝高市提前抵达深圳是想偶遇特朗普](https://so.toutiao.com/search?keyword=曝高市提前抵达深圳是想偶遇特朗普)
1. [美团和淘宝闪购全面取消超时扣款处罚](https://so.toutiao.com/search?keyword=美团和淘宝闪购全面取消超时扣款处罚)
1. [数学家王虹再获重磅国际大奖](https://so.toutiao.com/search?keyword=数学家王虹再获重磅国际大奖)
1. [蔡磊已进入渐冻症终末期](https://so.toutiao.com/search?keyword=蔡磊已进入渐冻症终末期)
1. [人民日报就当前供强需弱发声](https://so.toutiao.com/search?keyword=人民日报就当前供强需弱发声)
1. [坚守四年的黄金多头离场](https://so.toutiao.com/search?keyword=坚守四年的黄金多头离场)
1. [美媒为何关注中国8吨载重无人机](https://so.toutiao.com/search?keyword=美媒为何关注中国8吨载重无人机)
1. [普京爱吃粤菜离开前还打包上飞机](https://so.toutiao.com/search?keyword=普京爱吃粤菜离开前还打包上飞机)
1. [昆仑山失联三人徒步走出无人区](https://so.toutiao.com/search?keyword=昆仑山失联三人徒步走出无人区)
1. [女生在七门学科中拿下四科第一](https://so.toutiao.com/search?keyword=女生在七门学科中拿下四科第一)
1. [专家预计明年A股由结构性机会主导](https://so.toutiao.com/search?keyword=专家预计明年A股由结构性机会主导)
1. [专家：黄仁勋复出风波还没结束](https://so.toutiao.com/search?keyword=专家：黄仁勋复出风波还没结束)
1. [专家：解放军坚决反制一切威胁挑衅](https://so.toutiao.com/search?keyword=专家：解放军坚决反制一切威胁挑衅)
1. [中方：日方应还中国人民以净土](https://so.toutiao.com/search?keyword=中方：日方应还中国人民以净土)
1. [专家：中国镓锗底牌一张没动](https://so.toutiao.com/search?keyword=专家：中国镓锗底牌一张没动)
1. [商务部：坚决反对美对中国加征关税](https://so.toutiao.com/search?keyword=商务部：坚决反对美对中国加征关税)
1. [华为将推出新的智驾品牌](https://so.toutiao.com/search?keyword=华为将推出新的智驾品牌)
1. [乌军6名士兵伪装成俄军被全歼](https://so.toutiao.com/search?keyword=乌军6名士兵伪装成俄军被全歼)
1. [董明珠建议长城进军拖拉机](https://so.toutiao.com/search?keyword=董明珠建议长城进军拖拉机)
1. [WTT世界乒联祝贺王曼昱解锁新里程碑](https://so.toutiao.com/search?keyword=WTT世界乒联祝贺王曼昱解锁新里程碑)
1. [美国或对韩国半导体征收15%过剩关税](https://so.toutiao.com/search?keyword=美国或对韩国半导体征收15%过剩关税)
1. [长城汽车首台超跑原型车测试进展披露](https://so.toutiao.com/search?keyword=长城汽车首台超跑原型车测试进展披露)
1. [华为长鑫将与三星SK海力士正面交锋](https://so.toutiao.com/search?keyword=华为长鑫将与三星SK海力士正面交锋)
1. [中方回应美拟对华加征新一轮关税](https://so.toutiao.com/search?keyword=中方回应美拟对华加征新一轮关税)
1. [马天宇愿分一部分遗产给一位挚友](https://so.toutiao.com/search?keyword=马天宇愿分一部分遗产给一位挚友)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Nov 27 2026 03:34:59 GMT+0800 (China Standard Time) -->

1. [蔡磊已进渐冻症终末期](https://www.zhihu.com/search?q=%E8%94%A1%E7%A3%8A%E5%B7%B2%E8%BF%9B%E6%B8%90%E5%86%BB%E7%97%87%E7%BB%88%E6%9C%AB%E6%9C%9F)
1. [DeepSeek调整API定价](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4API%E5%AE%9A%E4%BB%B7)
1. [上海大学生宿舍坠亡两日后被发现](https://www.zhihu.com/search?q=%E4%B8%8A%E6%B5%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%AE%BF%E8%88%8D%E5%9D%A0%E4%BA%A1%E4%B8%A4%E6%97%A5%E5%90%8E%E8%A2%AB%E5%8F%91%E7%8E%B0)
1. [付鹏称小红书美女关注资产必崩](https://www.zhihu.com/search?q=%E4%BB%98%E9%B9%8F%E7%A7%B0%E5%B0%8F%E7%BA%A2%E4%B9%A6%E7%BE%8E%E5%A5%B3%E5%85%B3%E6%B3%A8%E8%B5%84%E4%BA%A7%E5%BF%85%E5%B4%A9)
1. [美军受控引爆5吨劣化叠氮化铅](https://www.zhihu.com/search?q=%E7%BE%8E%E5%86%9B%E5%8F%97%E6%8E%A7%E5%BC%95%E7%88%865%E5%90%A8%E5%8A%A3%E5%8C%96%E5%8F%A0%E6%B0%AE%E5%8C%96%E9%93%85)
1. [武大教师曾某某被举报事件调查结果](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A4%A7%E6%95%99%E5%B8%88%E6%9B%BE%E6%9F%90%E6%9F%90%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%BA%8B%E4%BB%B6%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C)
1. [黎曼猜想证明压缩至7.6万行](https://www.zhihu.com/search?q=%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E8%AF%81%E6%98%8E%E5%8E%8B%E7%BC%A9%E8%87%B37.6%E4%B8%87%E8%A1%8C)
1. [黄仁勋恢复英伟达总裁CEO职务](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%81%A2%E5%A4%8D%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%80%BB%E8%A3%81CEO%E8%81%8C%E5%8A%A1)
1. [浙江宣传发文驳唱衰中国经济](https://www.zhihu.com/search?q=%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E5%8F%91%E6%96%87%E9%A9%B3%E5%94%B1%E8%A1%B0%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E)
1. [中国U17男足 vs 斐济U17男足](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BDU17%E7%94%B7%E8%B6%B3%20vs%20%E6%96%90%E6%B5%8EU17%E7%94%B7%E8%B6%B3)
1. [普京打包深圳炒菜上飞机](https://www.zhihu.com/search?q=%E6%99%AE%E4%BA%AC%E6%89%93%E5%8C%85%E6%B7%B1%E5%9C%B3%E7%82%92%E8%8F%9C%E4%B8%8A%E9%A3%9E%E6%9C%BA)
1. [绿灯太快残疾男子跑不迭被撞身亡](https://www.zhihu.com/search?q=%E7%BB%BF%E7%81%AF%E5%A4%AA%E5%BF%AB%E6%AE%8B%E7%96%BE%E7%94%B7%E5%AD%90%E8%B7%91%E4%B8%8D%E8%BF%AD%E8%A2%AB%E6%92%9E%E8%BA%AB%E4%BA%A1)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Nov 27 2026 10:12:56 GMT+0800 (China Standard Time) -->

1. [巴基斯坦航天员随神舟二十四号进驻天宫，是否预示着美国、日本或者其他国家航天员今后可能也可以？](https://www.zhihu.com/question/2108915782302421500)
1. [东北人好像比别的地方更痴迷于始祖鸟、可隆、迪桑特这些高价低性价比运动服饰，为什么会这样？](https://www.zhihu.com/question/2107954937695164000)
1. [魏建军感慨车企竞争激烈，董明珠提出「家里冲进老鼠把它打掉就好」，这套竞争思路放在现在的汽车行业适合吗？](https://www.zhihu.com/question/2109305887672357000)
1. [U17世界杯男足小组赛，中国U17男足 8-0 斐济U17男足，如何评价本场比赛？](https://www.zhihu.com/question/2109332098678879700)
1. [如何看待寰球华人「中国梦·深圳杯」诗词楹联征稿一等奖《念奴娇·华为前董事长孙亚芳颂》？](https://www.zhihu.com/question/2108646975482454500)
1. [沈阳最帅保洁大叔宣布辞职，如何评价他的选择？他接下来可能会去干什么？](https://www.zhihu.com/question/2109025597510739000)
1. [三只松鼠就「员工宿舍环境脏乱差」致歉，称立即进行转移安置，怎样看待这一回应？员工权益该如何保障？](https://www.zhihu.com/question/2109391750410276900)
1. [腾讯元宝被曝大裁员，不少加班一年的员工仍以「背星」绩效为由被裁，此类操作是否合规？](https://www.zhihu.com/question/2109350965136705300)
1. [如何评价DeepSeek网页和App端开始展示消耗额度？](https://www.zhihu.com/question/2109411707877695700)
1. [睡虎地秦简中记录了大量基层小吏的日常工作，先秦普通官吏的一天，到底和我们想象中有多大差距？](https://www.zhihu.com/question/2037220265193640400)
1. [网飞版《三体》第二季预告曝光，定档 2027 年 1 月 14 日，你在本季里最期待看到哪些内容？](https://www.zhihu.com/question/2105965880248983800)
1. [高中生武术比赛滑倒尝试鲤鱼打挺失败仍获亚军，官方称仅 3 人参赛无违规，该结果是否合理？](https://www.zhihu.com/question/2108924693923341600)
1. [斯坦福学者与 AI 提出引力理论与量子力学统一的新理论，如何理解该事件？](https://www.zhihu.com/question/2109335761182876200)
1. [斗鱼及陈少杰被执行超 1.9 亿，从巅峰到接连踩雷，斗鱼这些年衰落的核心原因是什么？](https://www.zhihu.com/question/2108965316487295200)
1. [中国男篮世预赛出线形势堪忧，很可能无法参加明年男篮世界杯，对此你怎么看？](https://www.zhihu.com/question/2109423177944102700)
1. [为什么2026年《步步惊心》的口碑反转，若曦遭群嘲？](https://www.zhihu.com/question/2047718336063189800)
1. [《复仇者联盟 5》首个幕后特辑小罗伯特·唐尼出镜，从钢铁侠到毁灭博士，漫威为何一直押宝RDJ？](https://www.zhihu.com/question/2106706450663700000)
1. [《后会友期》让许飞厉娜对质，却始终没厘清消息传递的关键环节，节目为何回避传话人的身份？传话人可能是谁？](https://www.zhihu.com/question/2109292648997417700)
1. [网友爆料小米YU7车型前视摄像头集中故障，行车录像无法录制，前向防碰撞失效，是批次质量问题吗？](https://www.zhihu.com/question/2109256447582266600)
1. [如何看待高校校园 App 泛滥现象？智慧校园为何反而成了学生的手机负担？](https://www.zhihu.com/question/2107039915577971200)
1. [如何看待普京在深圳下榻期间喜欢上酒店粤菜，离店前还特意打包带上飞机？](https://www.zhihu.com/question/2109257162182452000)
1. [如何评价极客湾发布的手机影像大横评视频？](https://www.zhihu.com/question/2108960337538164500)
1. [业主搜索发现有 WiFi 名诅咒自家 8 岁孩子，怀疑是楼下邻居所为，该如何合法维权？](https://www.zhihu.com/question/2108982413300865000)
1. [看了GEN第二场，感觉上单VN是版本陷阱，世界赛的VN好像都没赢，GEN为什么要选VN？](https://www.zhihu.com/question/2105414811802661400)
1. [长鑫科技将回购金额上限从20亿元上调至50亿元，释放了什么信号？](https://www.zhihu.com/question/2106894072740894700)
1. [厦航年利润7亿人民币，现在却突然订了74亿美元波音飞机，相当70 年利润，这笔账风险落在谁身上？](https://www.zhihu.com/question/2108699823377589200)
1. [为什么植物大战僵尸现在还受欢迎，而愤怒的小鸟却很少有人玩了？](https://www.zhihu.com/question/2102466524611199500)
1. [如果一个月给你8000，但办公室永远只有你一个人，连说话的人都没有，你能坚持多久？](https://www.zhihu.com/question/2107406132625069600)
1. [孩子生病了，要不要送孩子去学校？](https://www.zhihu.com/question/2085639284485366000)
1. [为什么烧烤店要用铁签子？客人要求打包怎么办？](https://www.zhihu.com/question/1978722841781360000)
1. [两地通报女教授介入已婚副校长家庭事件，安大副校长付某、武大曾某某被免职，有哪些值得关注的信息？](https://www.zhihu.com/question/2109373596413818400)
1. [魏建军直言很多车企靠国家补贴生存，拿到的补贴比车企盈利还多，该说法有依据吗？](https://www.zhihu.com/question/2109295438058870500)
1. [「画地为牢」正片播出，厉娜称许飞影响了自己的发展，和许飞沟通非常困难，她们之间的沟通到底有什么问题？](https://www.zhihu.com/question/2109280067545031700)
1. [男篮世预赛，中国男篮80-82 不敌沙特阿拉伯男篮，出线形式堪忧，如何评价本场比赛？](https://www.zhihu.com/question/2109332292363444700)
1. [《英雄联盟电竞经理》宣布将于 27 年 1 月份停服，如何评价这款游戏的运营历程？](https://www.zhihu.com/question/2109279912733270300)
1. [如何看待北大、清华在密云、通州新建校区而不落户雄安？](https://www.zhihu.com/question/2103097723176198400)
1. [黄仁勋将于12月3日出席美国参议院听证会，证人名单上只有他一人，如何解读？](https://www.zhihu.com/question/2108493193511711500)
1. [如何看待网警通报有人针对华为、鸿蒙、问界发布数百条不实评论，捏造“千亿营销”虚假信息被行政处罚？](https://www.zhihu.com/question/2108999091560642000)
1. [如何看待黎曼猜想证明已被压缩 99.5% 到 7.6 万行？](https://www.zhihu.com/question/2109221701389239300)
1. [欧盟落地混动进口临时配额，中国对应配额为 19.18 万辆，国内混动出口车企该如何应对这一限制？](https://www.zhihu.com/question/2108663441766598100)
1. [坚持吃钙片的话，骨密度会不会有一些增加呢？](https://www.zhihu.com/question/2071996172307280100)
1. [曝梁文锋身家攀升至 550 亿美元，成全球最富 AI 模型创始人，是真的吗？意味着什么？](https://www.zhihu.com/question/2109197560539604500)
1. [什么样的男孩子长大了最有出息？](https://www.zhihu.com/question/363020796)
1. [马斯克将送全美儿童每人 2 股 SpaceX 股票，这对 SpaceX 股权结构有何影响？](https://www.zhihu.com/question/2109301090437153500)
1. [网红甲亢哥百米跑出 10.35 秒，前 15 米加速度比博尔特还快，这一成绩含金量如何？](https://www.zhihu.com/question/2108516163269439700)
1. [市民花 750 元为空调移机，5 年后拆机才发现铜管被换成铝管，铜管和铝管有啥不同？还能维权吗？](https://www.zhihu.com/question/2108865051851317800)
1. [汉中3 孩均非亲生离婚案一审判女方赔 22 万自行承担 27 万欠款，该判罚的法律依据是什么？](https://www.zhihu.com/question/2109011566599455000)
1. [2026 年 U17 世界杯，国足遭摩洛哥读秒绝平两轮积 1 分，末轮对阵斐济如何才能出线？](https://www.zhihu.com/question/2108671208430618600)
1. [快被楼上噪音吵死了怎么办？](https://www.zhihu.com/question/2090428741860249900)
1. [高中物理使用微元法的本质是什么？](https://www.zhihu.com/question/1887462742442636800)
1. [如何评价极客湾视频《极客湾手机影像大横评》？](https://www.zhihu.com/question/2108954540691268400)

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
<!-- 最后更新时间 Fri Nov 27 2026 04:16:43 GMT+0800 (China Standard Time) -->

1. [总书记寄语中国航天事业](https://s.weibo.com//weibo?q=%23%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%AF%84%E8%AF%AD%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E4%BA%8B%E4%B8%9A%23&Refer=new_time)
1. [三只松鼠致歉声明](https://s.weibo.com//weibo?q=%23%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23&t=31&band_rank=1&Refer=top)
1. [中纪委一天连打三虎](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BA%AA%E5%A7%94%E4%B8%80%E5%A4%A9%E8%BF%9E%E6%89%93%E4%B8%89%E8%99%8E%23&t=31&band_rank=2&Refer=top)
1. [从5到24看载人航天之路](https://s.weibo.com//weibo?q=%23%E4%BB%8E5%E5%88%B024%E7%9C%8B%E8%BD%BD%E4%BA%BA%E8%88%AA%E5%A4%A9%E4%B9%8B%E8%B7%AF%23&t=31&band_rank=3&Refer=top)
1. [算了吧许飞别爱了](https://s.weibo.com//weibo?q=%23%E7%AE%97%E4%BA%86%E5%90%A7%E8%AE%B8%E9%A3%9E%E5%88%AB%E7%88%B1%E4%BA%86%23&t=31&band_rank=4&Refer=top)
1. [前排全部在质问厉娜](https://s.weibo.com//weibo?q=%23%E5%89%8D%E6%8E%92%E5%85%A8%E9%83%A8%E5%9C%A8%E8%B4%A8%E9%97%AE%E5%8E%89%E5%A8%9C%23&t=31&band_rank=5&Refer=top)
1. [U17国足8比0斐济](https://s.weibo.com//weibo?q=U17%E5%9B%BD%E8%B6%B38%E6%AF%940%E6%96%90%E6%B5%8E&t=31&band_rank=6&Refer=top)
1. [胡明轩 中国男篮](https://s.weibo.com//weibo?q=%E8%83%A1%E6%98%8E%E8%BD%A9%20%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE&t=31&band_rank=7&Refer=top)
1. [杨蓉自曝患有遗传病](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E8%93%89%E8%87%AA%E6%9B%9D%E6%82%A3%E6%9C%89%E9%81%97%E4%BC%A0%E7%97%85%23&t=31&band_rank=8&Refer=top)
1. [中国男篮不敌沙特裁判争议](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E4%B8%8D%E6%95%8C%E6%B2%99%E7%89%B9%E8%A3%81%E5%88%A4%E4%BA%89%E8%AE%AE&t=31&band_rank=9&Refer=top)
1. [全球首个乙肝治愈新药中国获批](https://s.weibo.com//weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E4%B8%AA%E4%B9%99%E8%82%9D%E6%B2%BB%E6%84%88%E6%96%B0%E8%8D%AF%E4%B8%AD%E5%9B%BD%E8%8E%B7%E6%89%B9%23&t=31&band_rank=10&Refer=top)
1. [怀孕本质是你一个人的事](https://s.weibo.com//weibo?q=%E6%80%80%E5%AD%95%E6%9C%AC%E8%B4%A8%E6%98%AF%E4%BD%A0%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E4%BA%8B&t=31&band_rank=11&Refer=top)
1. [许飞怎么这么多料](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%80%8E%E4%B9%88%E8%BF%99%E4%B9%88%E5%A4%9A%E6%96%99%23&t=31&band_rank=12&Refer=top)
1. [三只松鼠员工必须用鼠取名](https://s.weibo.com//weibo?q=%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E5%91%98%E5%B7%A5%E5%BF%85%E9%A1%BB%E7%94%A8%E9%BC%A0%E5%8F%96%E5%90%8D&t=31&band_rank=13&Refer=top)
1. [厉娜远远没有麦琳承受的多](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E8%BF%9C%E8%BF%9C%E6%B2%A1%E6%9C%89%E9%BA%A6%E7%90%B3%E6%89%BF%E5%8F%97%E7%9A%84%E5%A4%9A%23&t=31&band_rank=14&Refer=top)
1. [武大调查谈话238人次](https://s.weibo.com//weibo?q=%E6%AD%A6%E5%A4%A7%E8%B0%83%E6%9F%A5%E8%B0%88%E8%AF%9D238%E4%BA%BA%E6%AC%A1&t=31&band_rank=15&Refer=top)
1. [PEL竞男不知情被拍](https://s.weibo.com//weibo?q=PEL%E7%AB%9E%E7%94%B7%E4%B8%8D%E7%9F%A5%E6%83%85%E8%A2%AB%E6%8B%8D&t=31&band_rank=16&Refer=top)
1. [哪个大学没名气但某领域顶尖](https://s.weibo.com//weibo?q=%E5%93%AA%E4%B8%AA%E5%A4%A7%E5%AD%A6%E6%B2%A1%E5%90%8D%E6%B0%94%E4%BD%86%E6%9F%90%E9%A2%86%E5%9F%9F%E9%A1%B6%E5%B0%96&t=31&band_rank=17&Refer=top)
1. [Angelababy雷霆高光](https://s.weibo.com//weibo?q=Angelababy%E9%9B%B7%E9%9C%86%E9%AB%98%E5%85%89&t=31&band_rank=18&Refer=top)
1. [武汉大学](https://s.weibo.com//weibo?q=%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6&t=31&band_rank=19&Refer=top)
1. [越南直播卖货太抽象了](https://s.weibo.com//weibo?q=%E8%B6%8A%E5%8D%97%E7%9B%B4%E6%92%AD%E5%8D%96%E8%B4%A7%E5%A4%AA%E6%8A%BD%E8%B1%A1%E4%BA%86&t=31&band_rank=20&Refer=top)
1. [徐璐身材](https://s.weibo.com//weibo?q=%E5%BE%90%E7%92%90%E8%BA%AB%E6%9D%90&t=31&band_rank=21&Refer=top)
1. [医生提醒不要长期大量补充维生素D](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E4%B8%8D%E8%A6%81%E9%95%BF%E6%9C%9F%E5%A4%A7%E9%87%8F%E8%A1%A5%E5%85%85%E7%BB%B4%E7%94%9F%E7%B4%A0D%23&t=31&band_rank=22&Refer=top)
1. [后会友期看得我精神哮喘了](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%9C%8B%E5%BE%97%E6%88%91%E7%B2%BE%E7%A5%9E%E5%93%AE%E5%96%98%E4%BA%86&t=31&band_rank=23&Refer=top)
1. [2026和平精英全球总决赛](https://s.weibo.com//weibo?q=2026%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E5%85%A8%E7%90%83%E6%80%BB%E5%86%B3%E8%B5%9B&t=31&band_rank=24&Refer=top)
1. [白小纯给青稚挡火锅](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%BB%99%E9%9D%92%E7%A8%9A%E6%8C%A1%E7%81%AB%E9%94%85%23&t=31&band_rank=25&Refer=top)
1. [U17国足vs斐济U17](https://s.weibo.com//weibo?q=%23U17%E5%9B%BD%E8%B6%B3vs%E6%96%90%E6%B5%8EU17%23&t=31&band_rank=26&Refer=top)
1. [东北老丈人搭大炕全村围观](https://s.weibo.com//weibo?q=%E4%B8%9C%E5%8C%97%E8%80%81%E4%B8%88%E4%BA%BA%E6%90%AD%E5%A4%A7%E7%82%95%E5%85%A8%E6%9D%91%E5%9B%B4%E8%A7%82&t=31&band_rank=27&Refer=top)
1. [芒果拍PEL竞男他们还不知道](https://s.weibo.com//weibo?q=%23%E8%8A%92%E6%9E%9C%E6%8B%8DPEL%E7%AB%9E%E7%94%B7%E4%BB%96%E4%BB%AC%E8%BF%98%E4%B8%8D%E7%9F%A5%E9%81%93%23&t=31&band_rank=28&Refer=top)
1. [吴哲晗 结婚](https://s.weibo.com//weibo?q=%E5%90%B4%E5%93%B2%E6%99%97%20%E7%BB%93%E5%A9%9A&t=31&band_rank=29&Refer=top)
1. [郭士强 换人](https://s.weibo.com//weibo?q=%E9%83%AD%E5%A3%AB%E5%BC%BA%20%E6%8D%A2%E4%BA%BA&t=31&band_rank=30&Refer=top)
1. [不适合在小朋友面前提的话题](https://s.weibo.com//weibo?q=%E4%B8%8D%E9%80%82%E5%90%88%E5%9C%A8%E5%B0%8F%E6%9C%8B%E5%8F%8B%E9%9D%A2%E5%89%8D%E6%8F%90%E7%9A%84%E8%AF%9D%E9%A2%98&t=31&band_rank=31&Refer=top)
1. [董路谈U17国足8比0斐济](https://s.weibo.com//weibo?q=%23%E8%91%A3%E8%B7%AF%E8%B0%88U17%E5%9B%BD%E8%B6%B38%E6%AF%940%E6%96%90%E6%B5%8E%23&t=31&band_rank=32&Refer=top)
1. [小哥以为捡的小奶狗越长越不对劲](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%93%A5%E4%BB%A5%E4%B8%BA%E6%8D%A1%E7%9A%84%E5%B0%8F%E5%A5%B6%E7%8B%97%E8%B6%8A%E9%95%BF%E8%B6%8A%E4%B8%8D%E5%AF%B9%E5%8A%B2&t=31&band_rank=33&Refer=top)
1. [女友去世后失联男子手机最后定位](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%8F%8B%E5%8E%BB%E4%B8%96%E5%90%8E%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%90%E6%89%8B%E6%9C%BA%E6%9C%80%E5%90%8E%E5%AE%9A%E4%BD%8D%23&t=31&band_rank=34&Refer=top)
1. [U17国足今晚取胜便晋级](https://s.weibo.com//weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E4%BB%8A%E6%99%9A%E5%8F%96%E8%83%9C%E4%BE%BF%E6%99%8B%E7%BA%A7%23&t=31&band_rank=35&Refer=top)
1. [看到摔死小猪文字真的好难受](https://s.weibo.com//weibo?q=%E7%9C%8B%E5%88%B0%E6%91%94%E6%AD%BB%E5%B0%8F%E7%8C%AA%E6%96%87%E5%AD%97%E7%9C%9F%E7%9A%84%E5%A5%BD%E9%9A%BE%E5%8F%97&t=31&band_rank=36&Refer=top)
1. [肖战解安全带下车这段](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E8%A7%A3%E5%AE%89%E5%85%A8%E5%B8%A6%E4%B8%8B%E8%BD%A6%E8%BF%99%E6%AE%B5%23&t=31&band_rank=37&Refer=top)
1. [郭士强说三分失准导致输球](https://s.weibo.com//weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%E8%AF%B4%E4%B8%89%E5%88%86%E5%A4%B1%E5%87%86%E5%AF%BC%E8%87%B4%E8%BE%93%E7%90%83%23&t=31&band_rank=38&Refer=top)
1. [新加坡人比利时人语言太搞了](https://s.weibo.com//weibo?q=%E6%96%B0%E5%8A%A0%E5%9D%A1%E4%BA%BA%E6%AF%94%E5%88%A9%E6%97%B6%E4%BA%BA%E8%AF%AD%E8%A8%80%E5%A4%AA%E6%90%9E%E4%BA%86&t=31&band_rank=39&Refer=top)
1. [董明珠称汽车行业有老鼠](https://s.weibo.com//weibo?q=%E8%91%A3%E6%98%8E%E7%8F%A0%E7%A7%B0%E6%B1%BD%E8%BD%A6%E8%A1%8C%E4%B8%9A%E6%9C%89%E8%80%81%E9%BC%A0&t=31&band_rank=40&Refer=top)
1. [三只松鼠员工住12人间](https://s.weibo.com//weibo?q=%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E5%91%98%E5%B7%A5%E4%BD%8F12%E4%BA%BA%E9%97%B4&t=31&band_rank=41&Refer=top)
1. [向太继女烟头烫伤各执一词](https://s.weibo.com//weibo?q=%E5%90%91%E5%A4%AA%E7%BB%A7%E5%A5%B3%E7%83%9F%E5%A4%B4%E7%83%AB%E4%BC%A4%E5%90%84%E6%89%A7%E4%B8%80%E8%AF%8D&t=31&band_rank=42&Refer=top)
1. [终于知道马天宇需要什么样的朋友了](https://s.weibo.com//weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E9%A9%AC%E5%A4%A9%E5%AE%87%E9%9C%80%E8%A6%81%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%BA%86%23&t=31&band_rank=43&Refer=top)
1. [月亮](https://s.weibo.com//weibo?q=%E6%9C%88%E4%BA%AE&t=31&band_rank=44&Refer=top)
1. [花花全球总决赛11淘汰MVP](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E8%8A%B1%E5%85%A8%E7%90%83%E6%80%BB%E5%86%B3%E8%B5%9B11%E6%B7%98%E6%B1%B0MVP%23&t=31&band_rank=45&Refer=top)
1. [U17国足打破多项队史纪录](https://s.weibo.com//weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E6%89%93%E7%A0%B4%E5%A4%9A%E9%A1%B9%E9%98%9F%E5%8F%B2%E7%BA%AA%E5%BD%95%23&t=31&band_rank=46&Refer=top)
1. [花花独狼吃鸡](https://s.weibo.com//weibo?q=%E8%8A%B1%E8%8A%B1%E7%8B%AC%E7%8B%BC%E5%90%83%E9%B8%A1&t=31&band_rank=47&Refer=top)
1. [易峥给无畏道歉了](https://s.weibo.com//weibo?q=%23%E6%98%93%E5%B3%A5%E7%BB%99%E6%97%A0%E7%95%8F%E9%81%93%E6%AD%89%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [易峥点赞](https://s.weibo.com//weibo?q=%E6%98%93%E5%B3%A5%E7%82%B9%E8%B5%9E&t=31&band_rank=49&Refer=top)
1. [刘浩存方拒绝任何形式的跟踪追拍行为](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%96%B9%E6%8B%92%E7%BB%9D%E4%BB%BB%E4%BD%95%E5%BD%A2%E5%BC%8F%E7%9A%84%E8%B7%9F%E8%B8%AA%E8%BF%BD%E6%8B%8D%E8%A1%8C%E4%B8%BA%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
