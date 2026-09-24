# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-25 03:12:43

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
<!-- 最后更新时间 Fri Sep 25 2026 03:29:31 GMT+0800 (China Standard Time) -->

1. [习近平同特朗普会谈](https://so.toutiao.com/search?keyword=习近平同特朗普会谈)
1. [习近平在白宫欢迎仪式上致辞](https://so.toutiao.com/search?keyword=习近平在白宫欢迎仪式上致辞)
1. [世界技能大赛上的“色香味”](https://so.toutiao.com/search?keyword=世界技能大赛上的“色香味”)
1. [美总统亲赴机场迎接释放何种讯息](https://so.toutiao.com/search?keyword=美总统亲赴机场迎接释放何种讯息)
1. [国乒男团遭日本逆转无缘九连冠](https://so.toutiao.com/search?keyword=国乒男团遭日本逆转无缘九连冠)
1. [国防部：统一将根除“台独”祸根乱源](https://so.toutiao.com/search?keyword=国防部：统一将根除“台独”祸根乱源)
1. [中方回应会否邀请特朗普出席APEC峰会](https://so.toutiao.com/search?keyword=中方回应会否邀请特朗普出席APEC峰会)
1. [国乒女团3-0横扫日本豪取六连冠](https://so.toutiao.com/search?keyword=国乒女团3-0横扫日本豪取六连冠)
1. [美国Z世代的“非常中国时刻”](https://so.toutiao.com/search?keyword=美国Z世代的“非常中国时刻”)
1. [特朗普遗憾欢迎晚宴座位不够多](https://so.toutiao.com/search?keyword=特朗普遗憾欢迎晚宴座位不够多)
1. [别被这些关于月饼的谣言误导](https://so.toutiao.com/search?keyword=别被这些关于月饼的谣言误导)
1. [升糖最快的主食不是米饭而是这6种](https://so.toutiao.com/search?keyword=升糖最快的主食不是米饭而是这6种)
1. [美方战机飞越致敬](https://so.toutiao.com/search?keyword=美方战机飞越致敬)
1. [媒体：银牌不是靶子但必须是一记警钟](https://so.toutiao.com/search?keyword=媒体：银牌不是靶子但必须是一记警钟)
1. [越南为何向美国订购90架飞机](https://so.toutiao.com/search?keyword=越南为何向美国订购90架飞机)
1. [国防部：台湾问题不容任何外来干涉](https://so.toutiao.com/search?keyword=国防部：台湾问题不容任何外来干涉)
1. [河南矿山过中秋1600余桌宴席摆进厂房](https://so.toutiao.com/search?keyword=河南矿山过中秋1600余桌宴席摆进厂房)
1. [土耳其和巴基斯坦会向沙特派兵吗](https://so.toutiao.com/search?keyword=土耳其和巴基斯坦会向沙特派兵吗)
1. [我军22架艘次军机舰船位台岛周边活动](https://so.toutiao.com/search?keyword=我军22架艘次军机舰船位台岛周边活动)
1. [张雪的老东家离上市又近了一步](https://so.toutiao.com/search?keyword=张雪的老东家离上市又近了一步)
1. [王楚钦谈决赛阵容：不要揣测教练意图](https://so.toutiao.com/search?keyword=王楚钦谈决赛阵容：不要揣测教练意图)
1. [游本昌与患癌妻子走过70年白金婚](https://so.toutiao.com/search?keyword=游本昌与患癌妻子走过70年白金婚)
1. [日本选手打破男子200米蛙泳世界纪录](https://so.toutiao.com/search?keyword=日本选手打破男子200米蛙泳世界纪录)
1. [赛力斯回应何时推出问界轿车](https://so.toutiao.com/search?keyword=赛力斯回应何时推出问界轿车)
1. [国防部回应新西兰军舰过航台湾海峡](https://so.toutiao.com/search?keyword=国防部回应新西兰军舰过航台湾海峡)
1. [19岁温瑞博乒乓球男团决赛丢2分](https://so.toutiao.com/search?keyword=19岁温瑞博乒乓球男团决赛丢2分)
1. [博主：中美在AI领域走向合作是大趋势](https://so.toutiao.com/search?keyword=博主：中美在AI领域走向合作是大趋势)
1. [中秋节多家企业效仿胖东来宠员工](https://so.toutiao.com/search?keyword=中秋节多家企业效仿胖东来宠员工)
1. [刘国梁现场观战亚运乒乓男团决赛](https://so.toutiao.com/search?keyword=刘国梁现场观战亚运乒乓男团决赛)
1. [演员李嘉明追忆游本昌](https://so.toutiao.com/search?keyword=演员李嘉明追忆游本昌)
1. [月饼这门生意为何赚钱](https://so.toutiao.com/search?keyword=月饼这门生意为何赚钱)
1. [王楚钦：尽快收拾心情面对后面比赛](https://so.toutiao.com/search?keyword=王楚钦：尽快收拾心情面对后面比赛)
1. [游本昌13岁户籍卡在南京档案馆保存](https://so.toutiao.com/search?keyword=游本昌13岁户籍卡在南京档案馆保存)
1. [业内：推进养老保险改革促进制度发展](https://so.toutiao.com/search?keyword=业内：推进养老保险改革促进制度发展)
1. [葛曼棋因伤止步亚运会女子100米预赛](https://so.toutiao.com/search?keyword=葛曼棋因伤止步亚运会女子100米预赛)
1. [游本昌离世 “佐料演员”为何被铭记](https://so.toutiao.com/search?keyword=游本昌离世%20“佐料演员”为何被铭记)
1. [国防部：民进党当局出卖民族尊严利益](https://so.toutiao.com/search?keyword=国防部：民进党当局出卖民族尊严利益)
1. [中国小孩哥小孩姐亚运泳池红透半边天](https://so.toutiao.com/search?keyword=中国小孩哥小孩姐亚运泳池红透半边天)
1. [邵永灵：联合国演讲让高市回味无穷](https://so.toutiao.com/search?keyword=邵永灵：联合国演讲让高市回味无穷)
1. [《我不是大师》开播](https://so.toutiao.com/search?keyword=《我不是大师》开播)
1. [记者：日本办亚运会为何这么“省”](https://so.toutiao.com/search?keyword=记者：日本办亚运会为何这么“省”)
1. [小米18 Pro Max首发评测](https://so.toutiao.com/search?keyword=小米18%20Pro%20Max首发评测)
1. [国防部敦促日停止在南海问题搬弄是非](https://so.toutiao.com/search?keyword=国防部敦促日停止在南海问题搬弄是非)
1. [张展硕半小时2金](https://so.toutiao.com/search?keyword=张展硕半小时2金)
1. [游本昌在《繁花》中饰演爷叔](https://so.toutiao.com/search?keyword=游本昌在《繁花》中饰演爷叔)
1. [国防部：警惕新型军国主义为祸世界](https://so.toutiao.com/search?keyword=国防部：警惕新型军国主义为祸世界)
1. [男子4×100米自由泳接力中国队卫冕](https://so.toutiao.com/search?keyword=男子4×100米自由泳接力中国队卫冕)
1. [也门胡塞武装为何突然势如破竹](https://so.toutiao.com/search?keyword=也门胡塞武装为何突然势如破竹)
1. [游本昌一周前刚过完93岁生日](https://so.toutiao.com/search?keyword=游本昌一周前刚过完93岁生日)
1. [男足亚运队凭何逆袭拿到“大结果”](https://so.toutiao.com/search?keyword=男足亚运队凭何逆袭拿到“大结果”)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Sep 25 2026 03:06:21 GMT+0800 (China Standard Time) -->

1. [冯小刚回应垃圾观众言论](https://www.zhihu.com/search?q=%E5%86%AF%E5%B0%8F%E5%88%9A%E5%9B%9E%E5%BA%94%E5%9E%83%E5%9C%BE%E8%A7%82%E4%BC%97%E8%A8%80%E8%AE%BA)
1. [任正非重申华为不造车](https://www.zhihu.com/search?q=%E4%BB%BB%E6%AD%A3%E9%9D%9E%E9%87%8D%E7%94%B3%E5%8D%8E%E4%B8%BA%E4%B8%8D%E9%80%A0%E8%BD%A6)
1. [国乒男团 2-3 日本队](https://www.zhihu.com/search?q=%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%202-3%20%E6%97%A5%E6%9C%AC%E9%98%9F)
1. [国乒女团 3-0 日本队](https://www.zhihu.com/search?q=%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%203-0%20%E6%97%A5%E6%9C%AC%E9%98%9F)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [到梦空间](https://www.zhihu.com/search?q=%E5%88%B0%E6%A2%A6%E7%A9%BA%E9%97%B4)
1. [表演艺术家游本昌去世](https://www.zhihu.com/search?q=%E8%A1%A8%E6%BC%94%E8%89%BA%E6%9C%AF%E5%AE%B6%E6%B8%B8%E6%9C%AC%E6%98%8C%E5%8E%BB%E4%B8%96)
1. [人民日报评第一学历歧视](https://www.zhihu.com/search?q=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E7%AC%AC%E4%B8%80%E5%AD%A6%E5%8E%86%E6%AD%A7%E8%A7%86)
1. [豆包员工感慨豆包成边缘产品](https://www.zhihu.com/search?q=%E8%B1%86%E5%8C%85%E5%91%98%E5%B7%A5%E6%84%9F%E6%85%A8%E8%B1%86%E5%8C%85%E6%88%90%E8%BE%B9%E7%BC%98%E4%BA%A7%E5%93%81)
1. [王楚钦 0-3 张本智和](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%200-3%20%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C)
1. [腾讯「龙虾」将正式停止运营](https://www.zhihu.com/search?q=%E8%85%BE%E8%AE%AF%E3%80%8C%E9%BE%99%E8%99%BE%E3%80%8D%E5%B0%86%E6%AD%A3%E5%BC%8F%E5%81%9C%E6%AD%A2%E8%BF%90%E8%90%A5)
1. [车企集体和宁德提分手](https://www.zhihu.com/search?q=%E8%BD%A6%E4%BC%81%E9%9B%86%E4%BD%93%E5%92%8C%E5%AE%81%E5%BE%B7%E6%8F%90%E5%88%86%E6%89%8B)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Sep 25 2026 03:12:43 GMT+0800 (China Standard Time) -->

1. [亚运乒乓女团决赛，中国 3-0 横扫日本，豪取亚运六连冠，如何评价本场比赛？](https://www.zhihu.com/question/2086478313287940000)
1. [重庆立法「艾滋病感染者应主动告知配偶、与本人有性关系者等」，有哪些意义？解决了哪些问题？](https://www.zhihu.com/question/2086391671403591200)
1. [日本上半年出口额小于韩国台湾香港，甚至低于广东省，日本到底怎么了？](https://www.zhihu.com/question/2086202236804322600)
1. [网友吐槽美团抽成太多，一份25元的外卖商家实际到手收入6.08元，是真的吗？剩下的钱都花在了什么环节？](https://www.zhihu.com/question/2086444635463705900)
1. [亚运会羽毛球男团决赛，中国 2-3 不敌印尼，如何评价本场比赛？](https://www.zhihu.com/question/2086476360046699300)
1. [很多人只上公立学校，不补课，每年教育预算不到3千，照样考985，照样考清北，你支持“躺平式培养”吗？](https://www.zhihu.com/question/2086234571297896000)
1. [潮州市住建局回应5公里路面500个井盖，称井盖密度没法更改，真的没法改吗？井盖排布密集是正常的吗？](https://www.zhihu.com/question/2085267477965923000)
1. [山西忻州通报「煤企为抄近道拦腰截断明长城」，将深入调查历年来存在的问题，哪些信息值得关注？](https://www.zhihu.com/question/2085739185508557000)
1. [如何评价大伟哥在米哈游2027校园招聘宣讲会上海交通大学专场的演讲？](https://www.zhihu.com/question/2086256784436740600)
1. [在西游记中，为什么孙悟空明明是抢了东海龙王的定海神针，在孙悟空遇到困难的时候东海龙王还肯帮忙？](https://www.zhihu.com/question/2067422261213128400)
1. [我国接受过高等教育的人口达 2.7 亿，这意味着什么？哪些信息值得关注？](https://www.zhihu.com/question/2041277507777844000)
1. [为什么有些人明明知道自己想要什么，却还是没有力量往前走？](https://www.zhihu.com/question/2080656215315690500)
1. [毁掉职业生涯的坏习惯有哪些？](https://www.zhihu.com/question/1942850990509363500)
1. [如何看待知乎篮球圈出现的攻坚球、困难球、简单球、抗产量等说法？](https://www.zhihu.com/question/2086219989581837800)
1. [为什么游戏的制作组明明知道玩家不喜欢“通马桶”任务，还要用这类任务塞满游戏？](https://www.zhihu.com/question/2082869009670848800)
1. [如何看待数学在AI的威胁下岌岌可危？](https://www.zhihu.com/question/2082905736150003700)
1. [现在个人自媒体的难点在哪里？](https://www.zhihu.com/question/2063443860383126800)
1. [如果家里只有你一个人，你会自己做饭吗？](https://www.zhihu.com/question/1889032020576952800)
1. [现在Vibe coding基本不需要IDE辅助了，为什么用手机编程还是很罕见？](https://www.zhihu.com/question/2084276691090908400)
1. [华人藏家花费 2400 万元追回疑似圆明园龙首，此事具有哪些意义？](https://www.zhihu.com/question/2085881529876718000)
1. [亚运会乒乓球男团决赛，温瑞博 1-3 松岛辉空，如何评价本场比赛？](https://www.zhihu.com/question/2086524443459678700)
1. [如何评价腾讯「龙虾」QClaw将正式停止运营，用户可申请退款，也可将数据迁移至WorkBuddy？](https://www.zhihu.com/question/2086390340013876500)
1. [王楚钦回应不敌张本智和，称自己有做的不好的地方，在能力上有一定差距，你怎么看？](https://www.zhihu.com/question/2086558559337015300)
1. [亚运会乒乓球男团决赛，林诗栋 3-1 户上隼辅，如何评价本场比赛？](https://www.zhihu.com/question/2086508641385805300)
1. [亚运乒乓球男团决赛，中国 2-3 日本，王楚钦不敌张本成胜负手，如何评价本场比赛？](https://www.zhihu.com/question/2086477992079745300)
1. [你们喜欢做什么美食呢？](https://www.zhihu.com/question/1940449550285382700)
1. [怎么看网友用两小时就实现了 TypeSafe AI 用了两年 RLCD 才做到的 Jev 模型效果？](https://www.zhihu.com/question/2084281918074385700)
1. [各类型的单机游戏分别有哪些值得推荐？](https://www.zhihu.com/question/25028214)
1. [如何系统地学习半导体？](https://www.zhihu.com/question/15321054358)
1. [有了一千万，你还愿意继续上班吗？](https://www.zhihu.com/question/2079009174395081700)

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
<!-- 最后更新时间 Fri Sep 25 2026 03:18:05 GMT+0800 (China Standard Time) -->

1. [习近平同特朗普小范围交流高清大图](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%90%8C%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%8F%E8%8C%83%E5%9B%B4%E4%BA%A4%E6%B5%81%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23&Refer=new_time)
1. [中美元首华盛顿会晤](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%8D%8E%E7%9B%9B%E9%A1%BF%E4%BC%9A%E6%99%A4%23&t=31&band_rank=1&Refer=top)
1. [邀请10万名美国青少年来华交流学习](https://s.weibo.com//weibo?q=%23%E9%82%80%E8%AF%B710%E4%B8%87%E5%90%8D%E7%BE%8E%E5%9B%BD%E9%9D%92%E5%B0%91%E5%B9%B4%E6%9D%A5%E5%8D%8E%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0%23&t=31&band_rank=2&Refer=top)
1. [乒乓情缘续写友谊新篇](https://s.weibo.com//weibo?q=%23%E4%B9%92%E4%B9%93%E6%83%85%E7%BC%98%E7%BB%AD%E5%86%99%E5%8F%8B%E8%B0%8A%E6%96%B0%E7%AF%87%23&t=31&band_rank=3&Refer=top)
1. [中美不必讳言竞争](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%8D%E5%BF%85%E8%AE%B3%E8%A8%80%E7%AB%9E%E4%BA%89%23&t=31&band_rank=4&Refer=top)
1. [中秋节](https://s.weibo.com//weibo?q=%E4%B8%AD%E7%A7%8B%E8%8A%82&t=31&band_rank=5&Refer=top)
1. [国乒女团金牌](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E9%87%91%E7%89%8C&t=31&band_rank=6&Refer=top)
1. [李现新剧首播反响](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%96%B0%E5%89%A7%E9%A6%96%E6%92%AD%E5%8F%8D%E5%93%8D%23&t=31&band_rank=7&Refer=top)
1. [郑钦文 观众干扰比赛](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%20%E8%A7%82%E4%BC%97%E5%B9%B2%E6%89%B0%E6%AF%94%E8%B5%9B&t=31&band_rank=8&Refer=top)
1. [亚运会游泳](https://s.weibo.com//weibo?q=%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B8%B8%E6%B3%B3&t=31&band_rank=9&Refer=top)
1. [花少9熟人局](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%919%E7%86%9F%E4%BA%BA%E5%B1%80%23&t=31&band_rank=10&Refer=top)
1. [喝完泰奶差点要见太奶了](https://s.weibo.com//weibo?q=%23%E5%96%9D%E5%AE%8C%E6%B3%B0%E5%A5%B6%E5%B7%AE%E7%82%B9%E8%A6%81%E8%A7%81%E5%A4%AA%E5%A5%B6%E4%BA%86%23&t=31&band_rank=11&Refer=top)
1. [港媒取的标题也太好笑了](https://s.weibo.com//weibo?q=%E6%B8%AF%E5%AA%92%E5%8F%96%E7%9A%84%E6%A0%87%E9%A2%98%E4%B9%9F%E5%A4%AA%E5%A5%BD%E7%AC%91%E4%BA%86&t=31&band_rank=12&Refer=top)
1. [潘展乐责任全在我](https://s.weibo.com//weibo?q=%E6%BD%98%E5%B1%95%E4%B9%90%E8%B4%A3%E4%BB%BB%E5%85%A8%E5%9C%A8%E6%88%91&t=31&band_rank=13&Refer=top)
1. [孙颖莎回应国乒女团金牌](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E9%87%91%E7%89%8C%23&t=31&band_rank=14&Refer=top)
1. [早春晴朗到底赚到了多少](https://s.weibo.com//weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%88%B0%E5%BA%95%E8%B5%9A%E5%88%B0%E4%BA%86%E5%A4%9A%E5%B0%91%23&t=31&band_rank=15&Refer=top)
1. [比利简金杯深圳总决赛](https://s.weibo.com//weibo?q=%E6%AF%94%E5%88%A9%E7%AE%80%E9%87%91%E6%9D%AF%E6%B7%B1%E5%9C%B3%E6%80%BB%E5%86%B3%E8%B5%9B&t=31&band_rank=16&Refer=top)
1. [郑钦文0比2鲍里妮](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%870%E6%AF%942%E9%B2%8D%E9%87%8C%E5%A6%AE%23&t=31&band_rank=17&Refer=top)
1. [国羽男团银牌](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E7%BE%BD%E7%94%B7%E5%9B%A2%E9%93%B6%E7%89%8C%23&t=31&band_rank=18&Refer=top)
1. [郑钦文0比2保利尼](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%870%E6%AF%942%E4%BF%9D%E5%88%A9%E5%B0%BC%23&t=31&band_rank=19&Refer=top)
1. [比利简金杯中国1比1意大利](https://s.weibo.com//weibo?q=%23%E6%AF%94%E5%88%A9%E7%AE%80%E9%87%91%E6%9D%AF%E4%B8%AD%E5%9B%BD1%E6%AF%941%E6%84%8F%E5%A4%A7%E5%88%A9%23&t=31&band_rank=20&Refer=top)
1. [张本智和说以前国乒场下还3位高手](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E4%BB%A5%E5%89%8D%E5%9B%BD%E4%B9%92%E5%9C%BA%E4%B8%8B%E8%BF%983%E4%BD%8D%E9%AB%98%E6%89%8B%23&t=31&band_rank=21&Refer=top)
1. [花少北复活了](https://s.weibo.com//weibo?q=%E8%8A%B1%E5%B0%91%E5%8C%97%E5%A4%8D%E6%B4%BB%E4%BA%86&t=31&band_rank=22&Refer=top)
1. [王皓回应丢冠](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E7%9A%93%E5%9B%9E%E5%BA%94%E4%B8%A2%E5%86%A0%23&t=31&band_rank=23&Refer=top)
1. [井柏然刘雯 大大方方](https://s.weibo.com//weibo?q=%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%20%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9&t=31&band_rank=24&Refer=top)
1. [刘国梁 日本队](https://s.weibo.com//weibo?q=%E5%88%98%E5%9B%BD%E6%A2%81%20%E6%97%A5%E6%9C%AC%E9%98%9F&t=31&band_rank=25&Refer=top)
1. [饭桌上吃得越少别人越拿不准](https://s.weibo.com//weibo?q=%E9%A5%AD%E6%A1%8C%E4%B8%8A%E5%90%83%E5%BE%97%E8%B6%8A%E5%B0%91%E5%88%AB%E4%BA%BA%E8%B6%8A%E6%8B%BF%E4%B8%8D%E5%87%86&t=31&band_rank=26&Refer=top)
1. [国乒男团颁奖后纷纷摘下银牌](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E9%A2%81%E5%A5%96%E5%90%8E%E7%BA%B7%E7%BA%B7%E6%91%98%E4%B8%8B%E9%93%B6%E7%89%8C%23&t=31&band_rank=27&Refer=top)
1. [邓亚萍谈国乒男团输日本](https://s.weibo.com//weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%B0%88%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BE%93%E6%97%A5%E6%9C%AC%23&t=31&band_rank=28&Refer=top)
1. [王楚钦评价争议](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%84%E4%BB%B7%E4%BA%89%E8%AE%AE&t=31&band_rank=29&Refer=top)
1. [中秋福利取消让仇人释怀](https://s.weibo.com//weibo?q=%E4%B8%AD%E7%A7%8B%E7%A6%8F%E5%88%A9%E5%8F%96%E6%B6%88%E8%AE%A9%E4%BB%87%E4%BA%BA%E9%87%8A%E6%80%80&t=31&band_rank=30&Refer=top)
1. [国乒 樊振东](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%20%E6%A8%8A%E6%8C%AF%E4%B8%9C&t=31&band_rank=31&Refer=top)
1. [李现李一桐情侣名](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%9D%8E%E4%B8%80%E6%A1%90%E6%83%85%E4%BE%A3%E5%90%8D%23&t=31&band_rank=32&Refer=top)
1. [王楚钦0比3张本智和](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A5%9A%E9%92%A60%E6%AF%943%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C&t=31&band_rank=33&Refer=top)
1. [白鹿吃面都不敢看镜头了](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E5%90%83%E9%9D%A2%E9%83%BD%E4%B8%8D%E6%95%A2%E7%9C%8B%E9%95%9C%E5%A4%B4%E4%BA%86%23&t=31&band_rank=34&Refer=top)
1. [日本官员在刘国梁面前疯狂庆祝](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AE%98%E5%91%98%E5%9C%A8%E5%88%98%E5%9B%BD%E6%A2%81%E9%9D%A2%E5%89%8D%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%23&t=31&band_rank=35&Refer=top)
1. [Angelababy米兰时装周状态](https://s.weibo.com//weibo?q=%23Angelababy%E7%B1%B3%E5%85%B0%E6%97%B6%E8%A3%85%E5%91%A8%E7%8A%B6%E6%80%81%23&t=31&band_rank=36&Refer=top)
1. [张本智和放话日本乒乓已超中国](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%94%BE%E8%AF%9D%E6%97%A5%E6%9C%AC%E4%B9%92%E4%B9%93%E5%B7%B2%E8%B6%85%E4%B8%AD%E5%9B%BD%23&t=31&band_rank=37&Refer=top)
1. [男性真正的强壮是不恐惧亲密](https://s.weibo.com//weibo?q=%E7%94%B7%E6%80%A7%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BC%BA%E5%A3%AE%E6%98%AF%E4%B8%8D%E6%81%90%E6%83%A7%E4%BA%B2%E5%AF%86&t=31&band_rank=38&Refer=top)
1. [王楚钦回应不敌张本智和](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23&t=31&band_rank=39&Refer=top)
1. [井柏然家里剩下的只有刘雯的了](https://s.weibo.com//weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AE%B6%E9%87%8C%E5%89%A9%E4%B8%8B%E7%9A%84%E5%8F%AA%E6%9C%89%E5%88%98%E9%9B%AF%E7%9A%84%E4%BA%86%23&t=31&band_rank=40&Refer=top)
1. [早田希娜招架不住被孙颖莎打笑了](https://s.weibo.com//weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E6%8B%9B%E6%9E%B6%E4%B8%8D%E4%BD%8F%E8%A2%AB%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%93%E7%AC%91%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [国乒男团 怀念樊振东](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%20%E6%80%80%E5%BF%B5%E6%A8%8A%E6%8C%AF%E4%B8%9C&t=31&band_rank=42&Refer=top)
1. [王嘉尔回应粉丝追星体验不好](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%9B%9E%E5%BA%94%E7%B2%89%E4%B8%9D%E8%BF%BD%E6%98%9F%E4%BD%93%E9%AA%8C%E4%B8%8D%E5%A5%BD%23&t=31&band_rank=43&Refer=top)
1. [中美元首小范围交流](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%B0%8F%E8%8C%83%E5%9B%B4%E4%BA%A4%E6%B5%81%23&t=31&band_rank=44&Refer=top)
1. [韩网民称日本故意不用正式照片](https://s.weibo.com//weibo?q=%E9%9F%A9%E7%BD%91%E6%B0%91%E7%A7%B0%E6%97%A5%E6%9C%AC%E6%95%85%E6%84%8F%E4%B8%8D%E7%94%A8%E6%AD%A3%E5%BC%8F%E7%85%A7%E7%89%87&t=31&band_rank=45&Refer=top)
1. [樊振东中国之壁](https://s.weibo.com//weibo?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%AD%E5%9B%BD%E4%B9%8B%E5%A3%81&t=31&band_rank=46&Refer=top)
1. [曝南烟斋笔录男二号AI换脸](https://s.weibo.com//weibo?q=%E6%9B%9D%E5%8D%97%E7%83%9F%E6%96%8B%E7%AC%94%E5%BD%95%E7%94%B7%E4%BA%8C%E5%8F%B7AI%E6%8D%A2%E8%84%B8&t=31&band_rank=47&Refer=top)
1. [刘国梁 国乒](https://s.weibo.com//weibo?q=%E5%88%98%E5%9B%BD%E6%A2%81%20%E5%9B%BD%E4%B9%92&t=31&band_rank=48&Refer=top)
1. [王嘉尔又住院了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%8F%88%E4%BD%8F%E9%99%A2%E4%BA%86%23&t=31&band_rank=49&Refer=top)
1. [王楚钦回应国乒男团银牌](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E9%93%B6%E7%89%8C%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
