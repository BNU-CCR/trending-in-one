# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-11 05:40:30

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
<!-- 最后更新时间 Fri Sep 11 2026 07:23:09 GMT+0800 (China Standard Time) -->

1. [青岛货轮火灾25人遇难](https://so.toutiao.com/search?keyword=青岛货轮火灾25人遇难)
1. [菲律宾政坛72小时局势反转](https://so.toutiao.com/search?keyword=菲律宾政坛72小时局势反转)
1. [从8月物价数据看消费提质扩容](https://so.toutiao.com/search?keyword=从8月物价数据看消费提质扩容)
1. [低保户装空调取消资格？民政部门回应](https://so.toutiao.com/search?keyword=低保户装空调取消资格？民政部门回应)
1. [纽约夜空2977架无人机重现世贸双子塔](https://so.toutiao.com/search?keyword=纽约夜空2977架无人机重现世贸双子塔)
1. [中国女篮无缘世界杯4强](https://so.toutiao.com/search?keyword=中国女篮无缘世界杯4强)
1. [老师把4.8万奖金平分给400多名学生](https://so.toutiao.com/search?keyword=老师把4.8万奖金平分给400多名学生)
1. [为什么说2027年是新能源车真正起点](https://so.toutiao.com/search?keyword=为什么说2027年是新能源车真正起点)
1. [“宇宙最大医院”连续三任院长落马](https://so.toutiao.com/search?keyword=“宇宙最大医院”连续三任院长落马)
1. [人类第一次老人比小孩还多](https://so.toutiao.com/search?keyword=人类第一次老人比小孩还多)
1. [西藏网警通报6起涉泥石流灾害谣言](https://so.toutiao.com/search?keyword=西藏网警通报6起涉泥石流灾害谣言)
1. [男演员王新昉在出租屋去世](https://so.toutiao.com/search?keyword=男演员王新昉在出租屋去世)
1. [许绍雄去世近一年代言商仍用其头像](https://so.toutiao.com/search?keyword=许绍雄去世近一年代言商仍用其头像)
1. [泰安50岁“仙女姐姐”老师火了](https://so.toutiao.com/search?keyword=泰安50岁“仙女姐姐”老师火了)
1. [汽修店老板海姆立克救回1岁窒息幼童](https://so.toutiao.com/search?keyword=汽修店老板海姆立克救回1岁窒息幼童)
1. [辽宁铁岭“唤醒”沉睡15年的养老金](https://so.toutiao.com/search?keyword=辽宁铁岭“唤醒”沉睡15年的养老金)
1. [越南女星回应合照被刘亦菲裁掉](https://so.toutiao.com/search?keyword=越南女星回应合照被刘亦菲裁掉)
1. [外交部回应印度拟对小米启动调查](https://so.toutiao.com/search?keyword=外交部回应印度拟对小米启动调查)
1. [相声演员何伟被曝为虚拟货币站台](https://so.toutiao.com/search?keyword=相声演员何伟被曝为虚拟货币站台)
1. [人民日报评女生赴港追星取消低保](https://so.toutiao.com/search?keyword=人民日报评女生赴港追星取消低保)
1. [超63万人预约15999元iPhone Duo](https://so.toutiao.com/search?keyword=超63万人预约15999元iPhone%20Duo)
1. [男子抚养侄女十几年送其去上大学](https://so.toutiao.com/search?keyword=男子抚养侄女十几年送其去上大学)
1. [8箱白酒放14年部分变空瓶](https://so.toutiao.com/search?keyword=8箱白酒放14年部分变空瓶)
1. [罗永浩连用7个“抄的”吐槽iPhoneDuo](https://so.toutiao.com/search?keyword=罗永浩连用7个“抄的”吐槽iPhoneDuo)
1. [特朗普祝贺德极右翼后被默茨取消通话](https://so.toutiao.com/search?keyword=特朗普祝贺德极右翼后被默茨取消通话)
1. [妈妈称7岁白化病女儿出门被喊怪物](https://so.toutiao.com/search?keyword=妈妈称7岁白化病女儿出门被喊怪物)
1. [手机巨头为什么都在抢夺“阔折叠”](https://so.toutiao.com/search?keyword=手机巨头为什么都在抢夺“阔折叠”)
1. [罗杰斯：将中国股票留给女儿们](https://so.toutiao.com/search?keyword=罗杰斯：将中国股票留给女儿们)
1. [媒体：中国女篮的“中考”及格了](https://so.toutiao.com/search?keyword=媒体：中国女篮的“中考”及格了)
1. [WTT澳门冠军赛国乒四将竞争八强席位](https://so.toutiao.com/search?keyword=WTT澳门冠军赛国乒四将竞争八强席位)
1. [评论员：俄若动用核武代价极其沉重](https://so.toutiao.com/search?keyword=评论员：俄若动用核武代价极其沉重)
1. [国内成品油价将迎年内第十二次上调](https://so.toutiao.com/search?keyword=国内成品油价将迎年内第十二次上调)
1. [老款iPhone成“理财产品”了吗](https://so.toutiao.com/search?keyword=老款iPhone成“理财产品”了吗)
1. [美财长为何称乌或重复二战后德国命运](https://so.toutiao.com/search?keyword=美财长为何称乌或重复二战后德国命运)
1. [女子用房车陪读称比租房经济](https://so.toutiao.com/search?keyword=女子用房车陪读称比租房经济)
1. [女篮不敌法国止步8强 张子宇送7失误](https://so.toutiao.com/search?keyword=女篮不敌法国止步8强%20张子宇送7失误)
1. [曼联大胜迎欧冠开门红](https://so.toutiao.com/search?keyword=曼联大胜迎欧冠开门红)
1. [参加九三阅兵的姑娘们如今怎么样了](https://so.toutiao.com/search?keyword=参加九三阅兵的姑娘们如今怎么样了)
1. [美股三大指数4连跌 SK海力士跌超5%](https://so.toutiao.com/search?keyword=美股三大指数4连跌%20SK海力士跌超5%)
1. [特朗普预告战事将终结 伊朗开出条件](https://so.toutiao.com/search?keyword=特朗普预告战事将终结%20伊朗开出条件)
1. [U20女足世界杯积分榜](https://so.toutiao.com/search?keyword=U20女足世界杯积分榜)
1. [教师节为何变成家长的“送礼劫”](https://so.toutiao.com/search?keyword=教师节为何变成家长的“送礼劫”)
1. [多架美国军机在伊朗袭击中受损](https://so.toutiao.com/search?keyword=多架美国军机在伊朗袭击中受损)
1. [苹果折叠屏和其他厂商有何不同](https://so.toutiao.com/search?keyword=苹果折叠屏和其他厂商有何不同)
1. [人民日报锐评一边高消费一边领低保](https://so.toutiao.com/search?keyword=人民日报锐评一边高消费一边领低保)
1. [国办：政府采购项目全额采用现金支付](https://so.toutiao.com/search?keyword=国办：政府采购项目全额采用现金支付)
1. [“梅姨”落网前视频首曝光](https://so.toutiao.com/search?keyword=“梅姨”落网前视频首曝光)
1. [秋天吃石榴有哪些好处](https://so.toutiao.com/search?keyword=秋天吃石榴有哪些好处)
1. [李小璐贾乃亮带甜馨做公益](https://so.toutiao.com/search?keyword=李小璐贾乃亮带甜馨做公益)
1. [如何看待巴方宣传片出现印巴空战画面](https://so.toutiao.com/search?keyword=如何看待巴方宣传片出现印巴空战画面)
1. [青岛一外籍货轮火灾现场图](https://so.toutiao.com/search?keyword=青岛一外籍货轮火灾现场图)
1. [A股成交量创年度新低意味着什么](https://so.toutiao.com/search?keyword=A股成交量创年度新低意味着什么)
1. [苹果iPhone 18 Pro/Max 售价](https://so.toutiao.com/search?keyword=苹果iPhone%2018%20Pro/Max%20售价)
1. [印度2047年真能成为发达国家吗](https://so.toutiao.com/search?keyword=印度2047年真能成为发达国家吗)
1. [专家：魏德尔才是德国清醒的人](https://so.toutiao.com/search?keyword=专家：魏德尔才是德国清醒的人)
1. [乌军被迫用机炮拦截无人机说明什么](https://so.toutiao.com/search?keyword=乌军被迫用机炮拦截无人机说明什么)
1. [媒体：善意不能被“绑架”](https://so.toutiao.com/search?keyword=媒体：善意不能被“绑架”)
1. [烟台2人因涉嫌失火罪被刑拘](https://so.toutiao.com/search?keyword=烟台2人因涉嫌失火罪被刑拘)
1. [欧盟拟减少对中国供应商支出有何意图](https://so.toutiao.com/search?keyword=欧盟拟减少对中国供应商支出有何意图)
1. [苹果折叠屏无缘角逐任何一个参数第一](https://so.toutiao.com/search?keyword=苹果折叠屏无缘角逐任何一个参数第一)
1. [猪被泥石流掩埋36天仍生还](https://so.toutiao.com/search?keyword=猪被泥石流掩埋36天仍生还)
1. [俄罗斯核威慑的真相是什么](https://so.toutiao.com/search?keyword=俄罗斯核威慑的真相是什么)
1. [金砖合作机制为年轻人带来了什么](https://so.toutiao.com/search?keyword=金砖合作机制为年轻人带来了什么)
1. [iPhone Duo发布市场为什么没鼓掌](https://so.toutiao.com/search?keyword=iPhone%20Duo发布市场为什么没鼓掌)
1. [苹果折叠机闯入中国的三道坎](https://so.toutiao.com/search?keyword=苹果折叠机闯入中国的三道坎)
1. [苹果发布会真正的重点是什么](https://so.toutiao.com/search?keyword=苹果发布会真正的重点是什么)
1. [《交锋》编剧：“人”是最深的伏笔](https://so.toutiao.com/search?keyword=《交锋》编剧：“人”是最深的伏笔)
1. [女篮世界杯中国队止步八强](https://so.toutiao.com/search?keyword=女篮世界杯中国队止步八强)
1. [德国极右翼抬头意味着什么](https://so.toutiao.com/search?keyword=德国极右翼抬头意味着什么)
1. [折叠机扎堆上市网友在吵什么](https://so.toutiao.com/search?keyword=折叠机扎堆上市网友在吵什么)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Sep 11 2026 06:32:59 GMT+0800 (China Standard Time) -->

1. [刘翔被体育局买断获49.4万](https://www.zhihu.com/search?q=%E5%88%98%E7%BF%94%E8%A2%AB%E4%BD%93%E8%82%B2%E5%B1%80%E4%B9%B0%E6%96%AD%E8%8E%B749.4%E4%B8%87)
1. [日本暴发梅毒疫情](https://www.zhihu.com/search?q=%E6%97%A5%E6%9C%AC%E6%9A%B4%E5%8F%91%E6%A2%85%E6%AF%92%E7%96%AB%E6%83%85)
1. [2026 苹果秋季发布会](https://www.zhihu.com/search?q=2026%20%E8%8B%B9%E6%9E%9C%E7%A7%8B%E5%AD%A3%E5%8F%91%E5%B8%83%E4%BC%9A)
1. [江西孩子看演唱会后全家低保取消](https://www.zhihu.com/search?q=%E6%B1%9F%E8%A5%BF%E5%AD%A9%E5%AD%90%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%8E%E5%85%A8%E5%AE%B6%E4%BD%8E%E4%BF%9D%E5%8F%96%E6%B6%88)
1. [知乎 CLI 创作者能力上新](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%20CLI%20%E5%88%9B%E4%BD%9C%E8%80%85%E8%83%BD%E5%8A%9B%E4%B8%8A%E6%96%B0)
1. [霍奇猜想疑被OpenAI解决](https://www.zhihu.com/search?q=%E9%9C%8D%E5%A5%87%E7%8C%9C%E6%83%B3%E7%96%91%E8%A2%ABOpenAI%E8%A7%A3%E5%86%B3)
1. [某厂车间裸奔扔粪便传闻](https://www.zhihu.com/search?q=%E6%9F%90%E5%8E%82%E8%BD%A6%E9%97%B4%E8%A3%B8%E5%A5%94%E6%89%94%E7%B2%AA%E4%BE%BF%E4%BC%A0%E9%97%BB)
1. [高考132分学生开学数学考12分](https://www.zhihu.com/search?q=%E9%AB%98%E8%80%83132%E5%88%86%E5%AD%A6%E7%94%9F%E5%BC%80%E5%AD%A6%E6%95%B0%E5%AD%A6%E8%80%8312%E5%88%86)
1. [青岛一货轮火灾已造成 25 人遇难](https://www.zhihu.com/search?q=%E9%9D%92%E5%B2%9B%E4%B8%80%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE%E5%B7%B2%E9%80%A0%E6%88%90%2025%20%E4%BA%BA%E9%81%87%E9%9A%BE)
1. [「裸奔拉屎」系事发储能巨头瑞浦兰钧](https://www.zhihu.com/search?q=%E3%80%8C%E8%A3%B8%E5%A5%94%E6%8B%89%E5%B1%8E%E3%80%8D%E7%B3%BB%E4%BA%8B%E5%8F%91%E5%82%A8%E8%83%BD%E5%B7%A8%E5%A4%B4%E7%91%9E%E6%B5%A6%E5%85%B0%E9%92%A7)
1. [勇哥维护让员工干17个小时的老板](https://www.zhihu.com/search?q=%E5%8B%87%E5%93%A5%E7%BB%B4%E6%8A%A4%E8%AE%A9%E5%91%98%E5%B7%A5%E5%B9%B217%E4%B8%AA%E5%B0%8F%E6%97%B6%E7%9A%84%E8%80%81%E6%9D%BF)
1. [武汉大学教授曾梦琪被举报](https://www.zhihu.com/search?q=%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E6%95%99%E6%8E%88%E6%9B%BE%E6%A2%A6%E7%90%AA%E8%A2%AB%E4%B8%BE%E6%8A%A5)
1. [NS方程相关研究取得进展](https://www.zhihu.com/search?q=NS%E6%96%B9%E7%A8%8B%E7%9B%B8%E5%85%B3%E7%A0%94%E7%A9%B6%E5%8F%96%E5%BE%97%E8%BF%9B%E5%B1%95)
1. [女篮世界杯中国vs法国](https://www.zhihu.com/search?q=%E5%A5%B3%E7%AF%AE%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9B%BDvs%E6%B3%95%E5%9B%BD)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Sep 11 2026 05:40:30 GMT+0800 (China Standard Time) -->

1. [女子旧手机号二次放号后支付宝被哈啰盗刷 6551 元，平台仅补 200 元，这合理吗？暴露了哪些问题？](https://www.zhihu.com/question/2081001656066504200)
1. [数学已经被 AI 彻底革命了么？](https://www.zhihu.com/question/2081004982103270000)
1. [我不明白中国网球一姐郑钦文，为啥前段时间状态低迷，这次美网她就如换了一个人似的？](https://www.zhihu.com/question/2080059745206125000)
1. [既然AI一分钟就能开发出像《开心消消乐》《植物大战僵尸》这样的游戏，为什么排行榜上还是这些老游戏？](https://www.zhihu.com/question/2076970531870466800)
1. [如何看待大二学生因用名牌手机被取消资助后威胁要曝光，现愿意更换手机、到资助者亲戚家的店里打工挣钱？](https://www.zhihu.com/question/2080768309436458200)
1. [我看《明朝那些事儿》，发现宦官这个字眼尤为频繁，但唯独少了外戚，请问外戚去哪里了？](https://www.zhihu.com/question/2066992982801306600)
1. [2026 女篮世界杯 1/4 决赛，中国女篮61比90不敌法国女篮，止步八强，如何评价本场比赛？](https://www.zhihu.com/question/2081332911245096700)
1. [浦东机场出租车司机以「车坏了」、「提前付钱」为由甩客，乱象背后原因是什么？](https://www.zhihu.com/question/2079910901730300400)
1. [酒店为什么会有三小时钟点房？](https://www.zhihu.com/question/351651719)
1. [网友吐槽各大地方台充斥着虚假卖药广告，是普遍现象吗？电视台广告审查机制是怎样的，为何屡禁不止？](https://www.zhihu.com/question/2081025720684209700)
1. [怎么看 GPT-6 Astra 判断代码没人看的时候，会倾向写人类看不懂的高度压缩“机器垃圾代码”？](https://www.zhihu.com/question/2080336745191817700)
1. [新加坡印度裔占高级公务员 35%，远超人口占比 9%，这背后可能有哪些原因？](https://www.zhihu.com/question/2080661249017246200)
1. [工业革命给人类最大的启示是什么？或者说揭示的最深层次的原理是什么？](https://www.zhihu.com/question/2057205241355954000)
1. [如何评价世界历史上的包税制度？](https://www.zhihu.com/question/268232269)
1. [「员工裸奔拉屎事件」事发储能巨头瑞浦兰钧，公司称因离职手续引发，哪些信息值得关注？](https://www.zhihu.com/question/2081467325547373000)
1. [iPhone Duo 靠雾面纳米玻璃降低折痕可见度，怎样看待这种方式？要完全消除折叠痕还有哪些难点？](https://www.zhihu.com/question/2081316147840771600)
1. [如何评价《王者万象棋》这款游戏？它到底好不好玩？](https://www.zhihu.com/question/2080986057722574800)
1. [陈赫电竞房引发热议，其「含金量」体现在哪些方面，对普通玩家有何参考？](https://www.zhihu.com/question/2072254278954230300)
1. [为什么武侠游戏越来越少出现蜀山这个概念了？](https://www.zhihu.com/question/2071713815440446500)
1. [如何看待三星嘲讽苹果 iPhoneDuo，称其「热剩饭」？苹果这个时候为什么一定要推出折叠屏手机？](https://www.zhihu.com/question/2081320443747594800)
1. [为什么感觉国内以前很常见的铁路道口现在很多都停用撤销了？](https://www.zhihu.com/question/1981267614182445600)
1. [有了DeepSeek后，是不是不用看书了？](https://www.zhihu.com/question/11386602914)
1. [在魔兽争霸三中，如果禁用了所有驱散效果，那么哪个种族最强，哪个最弱?](https://www.zhihu.com/question/1924416585944262700)
1. [如何评价动画《BanG Dream! YUME∞MITA》第13集?](https://www.zhihu.com/question/2081158275156940300)
1. [你会希望孩子反驳你的意见吗，为什么？](https://www.zhihu.com/question/1924490442285749500)
1. [为什么阴天的时候人的情绪更容易低落？光照变化会通过怎样的生物通路，影响我们大脑的情绪状态？](https://www.zhihu.com/question/2079260262738221000)
1. [为什么和宠物说话会感到快乐？](https://www.zhihu.com/question/15021848795)
1. [家里做的哪道菜是厨房的经典？](https://www.zhihu.com/question/4385663585)
1. [怎么平衡生活与工作，才能轻松点？](https://www.zhihu.com/question/1904524332379636000)
1. [不想当导演的编剧是好编剧么？](https://www.zhihu.com/question/1919552818257327900)
1. [如何评价正式发布的 DeepSeek V4.1 Flash？](https://www.zhihu.com/question/2081380378493961500)
1. [白人饭的魅力主要是省时还是健康？](https://www.zhihu.com/question/2068725103534330400)

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
<!-- 最后更新时间 Fri Sep 11 2026 05:42:59 GMT+0800 (China Standard Time) -->

1. [习近平对青岛货轮火灾作出重要指示](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%AF%B9%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE%E4%BD%9C%E5%87%BA%E9%87%8D%E8%A6%81%E6%8C%87%E7%A4%BA%23&Refer=new_time)
1. [人为什么要读书最好的答案](https://s.weibo.com//weibo?q=%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E8%AF%BB%E4%B9%A6%E6%9C%80%E5%A5%BD%E7%9A%84%E7%AD%94%E6%A1%88&t=31&band_rank=1&Refer=top)
1. [上海28元一份馄饨只有两颗](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B728%E5%85%83%E4%B8%80%E4%BB%BD%E9%A6%84%E9%A5%A8%E5%8F%AA%E6%9C%89%E4%B8%A4%E9%A2%97%23&t=31&band_rank=2&Refer=top)
1. [我国成功发射一箭六星](https://s.weibo.com//weibo?q=%23%E6%88%91%E5%9B%BD%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%E4%B8%80%E7%AE%AD%E5%85%AD%E6%98%9F%23&t=31&band_rank=3&Refer=top)
1. [建议大家把内裤袜子丢洗衣机洗](https://s.weibo.com//weibo?q=%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%8A%8A%E5%86%85%E8%A3%A4%E8%A2%9C%E5%AD%90%E4%B8%A2%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%B4%97&t=31&band_rank=4&Refer=top)
1. [2岁女孩逛故宫指着文物让爸爸买](https://s.weibo.com//weibo?q=%232%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%80%9B%E6%95%85%E5%AE%AB%E6%8C%87%E7%9D%80%E6%96%87%E7%89%A9%E8%AE%A9%E7%88%B8%E7%88%B8%E4%B9%B0%23&t=31&band_rank=5&Refer=top)
1. [舍不得十岁老狗放弃更好大学](https://s.weibo.com//weibo?q=%E8%88%8D%E4%B8%8D%E5%BE%97%E5%8D%81%E5%B2%81%E8%80%81%E7%8B%97%E6%94%BE%E5%BC%83%E6%9B%B4%E5%A5%BD%E5%A4%A7%E5%AD%A6&t=31&band_rank=6&Refer=top)
1. [青岛货轮火灾25人遇难](https://s.weibo.com//weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE25%E4%BA%BA%E9%81%87%E9%9A%BE%23&t=31&band_rank=7&Refer=top)
1. [教育界迎来了最严厉的父母](https://s.weibo.com//weibo?q=%E6%95%99%E8%82%B2%E7%95%8C%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E6%AF%8D&t=31&band_rank=8&Refer=top)
1. [多邻国 iPhone的duo是我的多](https://s.weibo.com//weibo?q=%E5%A4%9A%E9%82%BB%E5%9B%BD%20iPhone%E7%9A%84duo%E6%98%AF%E6%88%91%E7%9A%84%E5%A4%9A&t=31&band_rank=9&Refer=top)
1. [曼联vs沙巴巴库](https://s.weibo.com//weibo?q=%23%E6%9B%BC%E8%81%94vs%E6%B2%99%E5%B7%B4%E5%B7%B4%E5%BA%93%23&t=31&band_rank=10&Refer=top)
1. [女子独自骑马去新疆遇大爷骚扰](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%8B%AC%E8%87%AA%E9%AA%91%E9%A9%AC%E5%8E%BB%E6%96%B0%E7%96%86%E9%81%87%E5%A4%A7%E7%88%B7%E9%AA%9A%E6%89%B0%23&t=31&band_rank=11&Refer=top)
1. [4次考公失败后花2万2旅行6国](https://s.weibo.com//weibo?q=%234%E6%AC%A1%E8%80%83%E5%85%AC%E5%A4%B1%E8%B4%A5%E5%90%8E%E8%8A%B12%E4%B8%872%E6%97%85%E8%A1%8C6%E5%9B%BD%23&t=31&band_rank=12&Refer=top)
1. [马来亚大学回应称将会采取必要措施](https://s.weibo.com//weibo?q=%E9%A9%AC%E6%9D%A5%E4%BA%9A%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E7%A7%B0%E5%B0%86%E4%BC%9A%E9%87%87%E5%8F%96%E5%BF%85%E8%A6%81%E6%8E%AA%E6%96%BD&t=31&band_rank=13&Refer=top)
1. [不买不招35岁员工的公司产品](https://s.weibo.com//weibo?q=%E4%B8%8D%E4%B9%B0%E4%B8%8D%E6%8B%9B35%E5%B2%81%E5%91%98%E5%B7%A5%E7%9A%84%E5%85%AC%E5%8F%B8%E4%BA%A7%E5%93%81&t=31&band_rank=14&Refer=top)
1. [青岛货轮火灾造成重大人员伤亡](https://s.weibo.com//weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE%E9%80%A0%E6%88%90%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%23&t=31&band_rank=15&Refer=top)
1. [华为Mate90 定价](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BAMate90%20%E5%AE%9A%E4%BB%B7&t=31&band_rank=16&Refer=top)
1. [10天不吃糖身体变化有多大](https://s.weibo.com//weibo?q=%2310%E5%A4%A9%E4%B8%8D%E5%90%83%E7%B3%96%E8%BA%AB%E4%BD%93%E5%8F%98%E5%8C%96%E6%9C%89%E5%A4%9A%E5%A4%A7%23&t=31&band_rank=17&Refer=top)
1. [花少8一分钟就把选房解决了](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%918%E4%B8%80%E5%88%86%E9%92%9F%E5%B0%B1%E6%8A%8A%E9%80%89%E6%88%BF%E8%A7%A3%E5%86%B3%E4%BA%86%23&t=31&band_rank=18&Refer=top)
1. [感情真的会跟着环境走](https://s.weibo.com//weibo?q=%E6%84%9F%E6%83%85%E7%9C%9F%E7%9A%84%E4%BC%9A%E8%B7%9F%E7%9D%80%E7%8E%AF%E5%A2%83%E8%B5%B0&t=31&band_rank=19&Refer=top)
1. [翻篇是人生最重要的能力之一](https://s.weibo.com//weibo?q=%E7%BF%BB%E7%AF%87%E6%98%AF%E4%BA%BA%E7%94%9F%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E8%83%BD%E5%8A%9B%E4%B9%8B%E4%B8%80&t=31&band_rank=20&Refer=top)
1. [晚上走路45分钟](https://s.weibo.com//weibo?q=%23%E6%99%9A%E4%B8%8A%E8%B5%B0%E8%B7%AF45%E5%88%86%E9%92%9F%23&t=31&band_rank=21&Refer=top)
1. [这种情况建议手洗内裤](https://s.weibo.com//weibo?q=%23%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E5%BB%BA%E8%AE%AE%E6%89%8B%E6%B4%97%E5%86%85%E8%A3%A4%23&t=31&band_rank=22&Refer=top)
1. [刘翔职业生涯高光时刻](https://s.weibo.com//weibo?q=%23%E5%88%98%E7%BF%94%E8%81%8C%E4%B8%9A%E7%94%9F%E6%B6%AF%E9%AB%98%E5%85%89%E6%97%B6%E5%88%BB%23&t=31&band_rank=23&Refer=top)
1. [糖摄入过多身体的11个表现](https://s.weibo.com//weibo?q=%23%E7%B3%96%E6%91%84%E5%85%A5%E8%BF%87%E5%A4%9A%E8%BA%AB%E4%BD%93%E7%9A%8411%E4%B8%AA%E8%A1%A8%E7%8E%B0%23&t=31&band_rank=24&Refer=top)
1. [三星回应多邻国开撕](https://s.weibo.com//weibo?q=%E4%B8%89%E6%98%9F%E5%9B%9E%E5%BA%94%E5%A4%9A%E9%82%BB%E5%9B%BD%E5%BC%80%E6%92%95&t=31&band_rank=25&Refer=top)
1. [中国人心目中神仙的样子在外网火爆了](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BF%83%E7%9B%AE%E4%B8%AD%E7%A5%9E%E4%BB%99%E7%9A%84%E6%A0%B7%E5%AD%90%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E7%88%86%E4%BA%86%23&t=31&band_rank=26&Refer=top)
1. [iPhone17Pro线下降价](https://s.weibo.com//weibo?q=%23iPhone17Pro%E7%BA%BF%E4%B8%8B%E9%99%8D%E4%BB%B7%23&t=31&band_rank=27&Refer=top)
1. [苹果 安卓](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%20%E5%AE%89%E5%8D%93&t=31&band_rank=28&Refer=top)
1. [教师节](https://s.weibo.com//weibo?q=%E6%95%99%E5%B8%88%E8%8A%82&t=31&band_rank=29&Refer=top)
1. [iPhone18Pro价格](https://s.weibo.com//weibo?q=iPhone18Pro%E4%BB%B7%E6%A0%BC&t=31&band_rank=30&Refer=top)
1. [特朗普给近百万美国人发500美元](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%BB%99%E8%BF%91%E7%99%BE%E4%B8%87%E7%BE%8E%E5%9B%BD%E4%BA%BA%E5%8F%91500%E7%BE%8E%E5%85%83%23&t=31&band_rank=31&Refer=top)
1. [哥哥拿英歌棍打妹妹膝盖妈妈砸他茶杯](https://s.weibo.com//weibo?q=%E5%93%A5%E5%93%A5%E6%8B%BF%E8%8B%B1%E6%AD%8C%E6%A3%8D%E6%89%93%E5%A6%B9%E5%A6%B9%E8%86%9D%E7%9B%96%E5%A6%88%E5%A6%88%E7%A0%B8%E4%BB%96%E8%8C%B6%E6%9D%AF&t=31&band_rank=32&Refer=top)
1. [女生爬峨眉山还原功夫熊猫名场面](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E7%94%9F%E7%88%AC%E5%B3%A8%E7%9C%89%E5%B1%B1%E8%BF%98%E5%8E%9F%E5%8A%9F%E5%A4%AB%E7%86%8A%E7%8C%AB%E5%90%8D%E5%9C%BA%E9%9D%A2%23&t=31&band_rank=33&Refer=top)
1. [告诉你一个不受伤的方法](https://s.weibo.com//weibo?q=%E5%91%8A%E8%AF%89%E4%BD%A0%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%8F%97%E4%BC%A4%E7%9A%84%E6%96%B9%E6%B3%95&t=31&band_rank=34&Refer=top)
1. [日本梅毒暴发与三个一有关](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E6%A2%85%E6%AF%92%E6%9A%B4%E5%8F%91%E4%B8%8E%E4%B8%89%E4%B8%AA%E4%B8%80%E6%9C%89%E5%85%B3%23&t=31&band_rank=35&Refer=top)
1. [中国女篮止步世界杯八强](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E6%AD%A2%E6%AD%A5%E4%B8%96%E7%95%8C%E6%9D%AF%E5%85%AB%E5%BC%BA%23&t=31&band_rank=36&Refer=top)
1. [千里浩瀚真敢开](https://s.weibo.com//weibo?q=%23%E5%8D%83%E9%87%8C%E6%B5%A9%E7%80%9A%E7%9C%9F%E6%95%A2%E5%BC%80%23&t=31&band_rank=37&Refer=top)
1. [女子小区兼职代丢垃圾1次3元](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%8F%E5%8C%BA%E5%85%BC%E8%81%8C%E4%BB%A3%E4%B8%A2%E5%9E%83%E5%9C%BE1%E6%AC%A13%E5%85%83%23&t=31&band_rank=38&Refer=top)
1. [中国女篮29分不敌法国](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE29%E5%88%86%E4%B8%8D%E6%95%8C%E6%B3%95%E5%9B%BD&t=31&band_rank=39&Refer=top)
1. [欧洲央行加息25个基点](https://s.weibo.com//weibo?q=%E6%AC%A7%E6%B4%B2%E5%A4%AE%E8%A1%8C%E5%8A%A0%E6%81%AF25%E4%B8%AA%E5%9F%BA%E7%82%B9&t=31&band_rank=40&Refer=top)
1. [孙怡被说妆前一个人妆后一个人](https://s.weibo.com//weibo?q=%23%E5%AD%99%E6%80%A1%E8%A2%AB%E8%AF%B4%E5%A6%86%E5%89%8D%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%A6%86%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BA%BA%23&t=31&band_rank=41&Refer=top)
1. [姥姥姥爷其实还活着](https://s.weibo.com//weibo?q=%E5%A7%A5%E5%A7%A5%E5%A7%A5%E7%88%B7%E5%85%B6%E5%AE%9E%E8%BF%98%E6%B4%BB%E7%9D%80&t=31&band_rank=42&Refer=top)
1. [幼儿高烧昏厥父亲踹坏电梯被困](https://s.weibo.com//weibo?q=%E5%B9%BC%E5%84%BF%E9%AB%98%E7%83%A7%E6%98%8F%E5%8E%A5%E7%88%B6%E4%BA%B2%E8%B8%B9%E5%9D%8F%E7%94%B5%E6%A2%AF%E8%A2%AB%E5%9B%B0&t=31&band_rank=43&Refer=top)
1. [曝泸州音乐节10月6日那场取消](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%B3%B8%E5%B7%9E%E9%9F%B3%E4%B9%90%E8%8A%8210%E6%9C%886%E6%97%A5%E9%82%A3%E5%9C%BA%E5%8F%96%E6%B6%88%23&t=31&band_rank=44&Refer=top)
1. [中国女篮VS法国女篮](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEVS%E6%B3%95%E5%9B%BD%E5%A5%B3%E7%AF%AE%23&t=31&band_rank=45&Refer=top)
1. [丈夫肥胖久坐致妻子4次怀孕全流产](https://s.weibo.com//weibo?q=%23%E4%B8%88%E5%A4%AB%E8%82%A5%E8%83%96%E4%B9%85%E5%9D%90%E8%87%B4%E5%A6%BB%E5%AD%904%E6%AC%A1%E6%80%80%E5%AD%95%E5%85%A8%E6%B5%81%E4%BA%A7%23&t=31&band_rank=46&Refer=top)
1. [娄艺潇iPhone18预言被京东接住了](https://s.weibo.com//weibo?q=%23%E5%A8%84%E8%89%BA%E6%BD%87iPhone18%E9%A2%84%E8%A8%80%E8%A2%AB%E4%BA%AC%E4%B8%9C%E6%8E%A5%E4%BD%8F%E4%BA%86%23&t=31&band_rank=47&Refer=top)
1. [成年人的选择题突然变成了数学题](https://s.weibo.com//weibo?q=%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E9%80%89%E6%8B%A9%E9%A2%98%E7%AA%81%E7%84%B6%E5%8F%98%E6%88%90%E4%BA%86%E6%95%B0%E5%AD%A6%E9%A2%98&t=31&band_rank=48&Refer=top)
1. [iPhoneDuo真机长这样](https://s.weibo.com//weibo?q=iPhoneDuo%E7%9C%9F%E6%9C%BA%E9%95%BF%E8%BF%99%E6%A0%B7&t=31&band_rank=49&Refer=top)
1. [韩旭谈中国女篮vs法国女篮](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E6%97%AD%E8%B0%88%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E6%B3%95%E5%9B%BD%E5%A5%B3%E7%AF%AE%23&t=31&band_rank=50&Refer=top)
1. [女子独自骑马去新疆遇大爷骚扰](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%8B%AC%E8%87%AA%E9%AA%91%E9%A9%AC%E5%8E%BB%E6%96%B0%E7%96%86%E9%81%87%E5%A4%A7%E7%88%B7%E9%AA%9A%E6%89%B0%23&t=31&band_rank=5&Refer=top)
1. [教育界迎来了最严厉的父母](https://s.weibo.com//weibo?q=%E6%95%99%E8%82%B2%E7%95%8C%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E6%AF%8D&t=31&band_rank=6&Refer=top)
1. [华为Mate90 定价](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BAMate90%20%E5%AE%9A%E4%BB%B7&t=31&band_rank=7&Refer=top)
1. [舍不得十岁老狗放弃更好大学](https://s.weibo.com//weibo?q=%E8%88%8D%E4%B8%8D%E5%BE%97%E5%8D%81%E5%B2%81%E8%80%81%E7%8B%97%E6%94%BE%E5%BC%83%E6%9B%B4%E5%A5%BD%E5%A4%A7%E5%AD%A6&t=31&band_rank=8&Refer=top)
1. [日本梅毒暴发与三个一有关](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E6%A2%85%E6%AF%92%E6%9A%B4%E5%8F%91%E4%B8%8E%E4%B8%89%E4%B8%AA%E4%B8%80%E6%9C%89%E5%85%B3%23&t=31&band_rank=9&Refer=top)
1. [花少8一分钟就把选房解决了](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%918%E4%B8%80%E5%88%86%E9%92%9F%E5%B0%B1%E6%8A%8A%E9%80%89%E6%88%BF%E8%A7%A3%E5%86%B3%E4%BA%86%23&t=31&band_rank=10&Refer=top)
1. [马来亚大学回应称将会采取必要措施](https://s.weibo.com//weibo?q=%E9%A9%AC%E6%9D%A5%E4%BA%9A%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E7%A7%B0%E5%B0%86%E4%BC%9A%E9%87%87%E5%8F%96%E5%BF%85%E8%A6%81%E6%8E%AA%E6%96%BD&t=31&band_rank=11&Refer=top)
1. [曝泸州音乐节10月6日那场取消](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%B3%B8%E5%B7%9E%E9%9F%B3%E4%B9%90%E8%8A%8210%E6%9C%886%E6%97%A5%E9%82%A3%E5%9C%BA%E5%8F%96%E6%B6%88%23&t=31&band_rank=13&Refer=top)
1. [青岛货轮火灾25人遇难](https://s.weibo.com//weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE25%E4%BA%BA%E9%81%87%E9%9A%BE%23&t=31&band_rank=15&Refer=top)
1. [iPhoneDuo真机长这样](https://s.weibo.com//weibo?q=iPhoneDuo%E7%9C%9F%E6%9C%BA%E9%95%BF%E8%BF%99%E6%A0%B7&t=31&band_rank=16&Refer=top)
1. [感情真的会跟着环境走](https://s.weibo.com//weibo?q=%E6%84%9F%E6%83%85%E7%9C%9F%E7%9A%84%E4%BC%9A%E8%B7%9F%E7%9D%80%E7%8E%AF%E5%A2%83%E8%B5%B0&t=31&band_rank=17&Refer=top)
1. [赵昭仪录节目突发哮喘](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E5%BD%95%E8%8A%82%E7%9B%AE%E7%AA%81%E5%8F%91%E5%93%AE%E5%96%98%23&t=31&band_rank=18&Refer=top)
1. [10天不吃糖身体变化有多大](https://s.weibo.com//weibo?q=%2310%E5%A4%A9%E4%B8%8D%E5%90%83%E7%B3%96%E8%BA%AB%E4%BD%93%E5%8F%98%E5%8C%96%E6%9C%89%E5%A4%9A%E5%A4%A7%23&t=31&band_rank=19&Refer=top)
1. [花少8两小时播放量破1.27亿](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%918%E4%B8%A4%E5%B0%8F%E6%97%B6%E6%92%AD%E6%94%BE%E9%87%8F%E7%A0%B41.27%E4%BA%BF%23&t=31&band_rank=20&Refer=top)
1. [iPhone17Pro线下降价](https://s.weibo.com//weibo?q=%23iPhone17Pro%E7%BA%BF%E4%B8%8B%E9%99%8D%E4%BB%B7%23&t=31&band_rank=23&Refer=top)
1. [幼儿高烧昏厥父亲踹坏电梯被困](https://s.weibo.com//weibo?q=%E5%B9%BC%E5%84%BF%E9%AB%98%E7%83%A7%E6%98%8F%E5%8E%A5%E7%88%B6%E4%BA%B2%E8%B8%B9%E5%9D%8F%E7%94%B5%E6%A2%AF%E8%A2%AB%E5%9B%B0&t=31&band_rank=24&Refer=top)
1. [苹果 安卓](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%20%E5%AE%89%E5%8D%93&t=31&band_rank=25&Refer=top)
1. [糖摄入过多身体的11个表现](https://s.weibo.com//weibo?q=%23%E7%B3%96%E6%91%84%E5%85%A5%E8%BF%87%E5%A4%9A%E8%BA%AB%E4%BD%93%E7%9A%8411%E4%B8%AA%E8%A1%A8%E7%8E%B0%23&t=31&band_rank=26&Refer=top)
1. [三星回应多邻国开撕](https://s.weibo.com//weibo?q=%E4%B8%89%E6%98%9F%E5%9B%9E%E5%BA%94%E5%A4%9A%E9%82%BB%E5%9B%BD%E5%BC%80%E6%92%95&t=31&band_rank=27&Refer=top)
1. [刘翔职业生涯高光时刻](https://s.weibo.com//weibo?q=%23%E5%88%98%E7%BF%94%E8%81%8C%E4%B8%9A%E7%94%9F%E6%B6%AF%E9%AB%98%E5%85%89%E6%97%B6%E5%88%BB%23&t=31&band_rank=28&Refer=top)
1. [告诉你一个不受伤的方法](https://s.weibo.com//weibo?q=%E5%91%8A%E8%AF%89%E4%BD%A0%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%8F%97%E4%BC%A4%E7%9A%84%E6%96%B9%E6%B3%95&t=31&band_rank=29&Refer=top)
1. [青岛货轮火灾造成重大人员伤亡](https://s.weibo.com//weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE%E9%80%A0%E6%88%90%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%23&t=31&band_rank=30&Refer=top)
1. [iPhone18Pro价格](https://s.weibo.com//weibo?q=iPhone18Pro%E4%BB%B7%E6%A0%BC&t=31&band_rank=33&Refer=top)
1. [成年人的选择题突然变成了数学题](https://s.weibo.com//weibo?q=%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E9%80%89%E6%8B%A9%E9%A2%98%E7%AA%81%E7%84%B6%E5%8F%98%E6%88%90%E4%BA%86%E6%95%B0%E5%AD%A6%E9%A2%98&t=31&band_rank=34&Refer=top)
1. [孙怡被说妆前一个人妆后一个人](https://s.weibo.com//weibo?q=%23%E5%AD%99%E6%80%A1%E8%A2%AB%E8%AF%B4%E5%A6%86%E5%89%8D%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%A6%86%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BA%BA%23&t=31&band_rank=35&Refer=top)
1. [曝卡修恋爱](https://s.weibo.com//weibo?q=%E6%9B%9D%E5%8D%A1%E4%BF%AE%E6%81%8B%E7%88%B1&t=31&band_rank=36&Refer=top)
1. [中国女篮VS法国女篮](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEVS%E6%B3%95%E5%9B%BD%E5%A5%B3%E7%AF%AE%23&t=31&band_rank=37&Refer=top)
1. [花少8全员有嘴](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%918%E5%85%A8%E5%91%98%E6%9C%89%E5%98%B4%23&t=31&band_rank=39&Refer=top)
1. [多邻国开撕iPhone Duo](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E9%82%BB%E5%9B%BD%E5%BC%80%E6%92%95iPhone%20Duo%23&t=31&band_rank=40&Refer=top)
1. [终于理解了超快换机的年轻人](https://s.weibo.com//weibo?q=%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E4%BA%86%E8%B6%85%E5%BF%AB%E6%8D%A2%E6%9C%BA%E7%9A%84%E5%B9%B4%E8%BD%BB%E4%BA%BA&t=31&band_rank=41&Refer=top)
1. [邻居说梅姨拍照时下意识挡脸](https://s.weibo.com//weibo?q=%23%E9%82%BB%E5%B1%85%E8%AF%B4%E6%A2%85%E5%A7%A8%E6%8B%8D%E7%85%A7%E6%97%B6%E4%B8%8B%E6%84%8F%E8%AF%86%E6%8C%A1%E8%84%B8%23&t=31&band_rank=42&Refer=top)
1. [曝虞书欣主演明月曾照小重山](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%BB%E6%BC%94%E6%98%8E%E6%9C%88%E6%9B%BE%E7%85%A7%E5%B0%8F%E9%87%8D%E5%B1%B1%23&t=31&band_rank=43&Refer=top)
1. [无畏直播跨零点](https://s.weibo.com//weibo?q=%23%E6%97%A0%E7%95%8F%E7%9B%B4%E6%92%AD%E8%B7%A8%E9%9B%B6%E7%82%B9%23&t=31&band_rank=44&Refer=top)
1. [中国女篮无缘世界杯四强](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E6%97%A0%E7%BC%98%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%23&t=31&band_rank=45&Refer=top)
1. [娄艺潇iPhone18预言被京东接住了](https://s.weibo.com//weibo?q=%23%E5%A8%84%E8%89%BA%E6%BD%87iPhone18%E9%A2%84%E8%A8%80%E8%A2%AB%E4%BA%AC%E4%B8%9C%E6%8E%A5%E4%BD%8F%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [罗永浩说库克终于退了](https://s.weibo.com//weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E5%BA%93%E5%85%8B%E7%BB%88%E4%BA%8E%E9%80%80%E4%BA%86%23&t=31&band_rank=47&Refer=top)
1. [中国女篮止步世界杯八强](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E6%AD%A2%E6%AD%A5%E4%B8%96%E7%95%8C%E6%9D%AF%E5%85%AB%E5%BC%BA%23&t=31&band_rank=48&Refer=top)
1. [丈夫肥胖久坐致妻子4次怀孕全流产](https://s.weibo.com//weibo?q=%23%E4%B8%88%E5%A4%AB%E8%82%A5%E8%83%96%E4%B9%85%E5%9D%90%E8%87%B4%E5%A6%BB%E5%AD%904%E6%AC%A1%E6%80%80%E5%AD%95%E5%85%A8%E6%B5%81%E4%BA%A7%23&t=31&band_rank=49&Refer=top)
1. [IU新歌献给刘仁娜](https://s.weibo.com//weibo?q=%23IU%E6%96%B0%E6%AD%8C%E7%8C%AE%E7%BB%99%E5%88%98%E4%BB%81%E5%A8%9C%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
