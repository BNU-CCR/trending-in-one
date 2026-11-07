# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-07 07:11:00

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
<!-- 最后更新时间 Sat Nov 07 2026 07:28:45 GMT+0800 (China Standard Time) -->

1. [立冬有哪些老传统](https://so.toutiao.com/search?keyword=立冬有哪些老传统)
1. [女子带娃仅点6元豆芽连吃7碗米饭](https://so.toutiao.com/search?keyword=女子带娃仅点6元豆芽连吃7碗米饭)
1. [一组数据感受中国经济强劲脉动](https://so.toutiao.com/search?keyword=一组数据感受中国经济强劲脉动)
1. [今日立冬 离除夕还有90天](https://so.toutiao.com/search?keyword=今日立冬%20离除夕还有90天)
1. [上海原市长龚正等12名正部履新职](https://so.toutiao.com/search?keyword=上海原市长龚正等12名正部履新职)
1. [存款利率拐点来了？有储户存500万](https://so.toutiao.com/search?keyword=存款利率拐点来了？有储户存500万)
1. [陈熠拿下WTT法兰克福冠军赛八强席位](https://so.toutiao.com/search?keyword=陈熠拿下WTT法兰克福冠军赛八强席位)
1. [立冬记得照顾好自己](https://so.toutiao.com/search?keyword=立冬记得照顾好自己)
1. [李乐成被免去工信部部长职务](https://so.toutiao.com/search?keyword=李乐成被免去工信部部长职务)
1. [美股收盘：AI概念股止跌反弹](https://so.toutiao.com/search?keyword=美股收盘：AI概念股止跌反弹)
1. [10月辟谣榜](https://so.toutiao.com/search?keyword=10月辟谣榜)
1. [男护士猥亵14岁女孩获刑1年2个月](https://so.toutiao.com/search?keyword=男护士猥亵14岁女孩获刑1年2个月)
1. [哈尔滨下“棉花雪”了](https://so.toutiao.com/search?keyword=哈尔滨下“棉花雪”了)
1. [无薪跟岗 教师招聘不带这么羞辱人的](https://so.toutiao.com/search?keyword=无薪跟岗%20教师招聘不带这么羞辱人的)
1. [中国造出人类已知最冷物质有什么用](https://so.toutiao.com/search?keyword=中国造出人类已知最冷物质有什么用)
1. [葡媒：贡萨洛·拉莫斯成为锋线主力](https://so.toutiao.com/search?keyword=葡媒：贡萨洛·拉莫斯成为锋线主力)
1. [“AI教父”：AI可能撕裂整个社会](https://so.toutiao.com/search?keyword=“AI教父”：AI可能撕裂整个社会)
1. [楼房玻璃能发热一年省8万取暖费](https://so.toutiao.com/search?keyword=楼房玻璃能发热一年省8万取暖费)
1. [张雪说入职1年员工百分百涨工资](https://so.toutiao.com/search?keyword=张雪说入职1年员工百分百涨工资)
1. [微软收缩AI算力租赁](https://so.toutiao.com/search?keyword=微软收缩AI算力租赁)
1. [特朗普签发公告：禁止擅改总统办公室](https://so.toutiao.com/search?keyword=特朗普签发公告：禁止擅改总统办公室)
1. [乔欣被曝在美国生了孩子](https://so.toutiao.com/search?keyword=乔欣被曝在美国生了孩子)
1. [女中医说墓碑上的药方实用还不贵](https://so.toutiao.com/search?keyword=女中医说墓碑上的药方实用还不贵)
1. [普京签令接管日本在俄企业释放何信号](https://so.toutiao.com/search?keyword=普京签令接管日本在俄企业释放何信号)
1. [南京零元面馆爆火](https://so.toutiao.com/search?keyword=南京零元面馆爆火)
1. [中国纯电车如何跨过500km/h这道坎](https://so.toutiao.com/search?keyword=中国纯电车如何跨过500km/h这道坎)
1. [实验猴涨至26万一只](https://so.toutiao.com/search?keyword=实验猴涨至26万一只)
1. [未来谁能接棒房地产成中国经济新支柱](https://so.toutiao.com/search?keyword=未来谁能接棒房地产成中国经济新支柱)
1. [热苏斯：新队长按国家队出场次数选](https://so.toutiao.com/search?keyword=热苏斯：新队长按国家队出场次数选)
1. [男子心梗前给豆包打电话救了自己](https://so.toutiao.com/search?keyword=男子心梗前给豆包打电话救了自己)
1. [“女老虎”余艳红主动投案被查](https://so.toutiao.com/search?keyword=“女老虎”余艳红主动投案被查)
1. [媒体：内塔尼亚胡总理宝座悬了](https://so.toutiao.com/search?keyword=媒体：内塔尼亚胡总理宝座悬了)
1. [赵丽颖王仁君金鸡奖开幕式拥抱](https://so.toutiao.com/search?keyword=赵丽颖王仁君金鸡奖开幕式拥抱)
1. [啤酒对血糖伤害有多大](https://so.toutiao.com/search?keyword=啤酒对血糖伤害有多大)
1. [外交部：中日关系严重困难日方全责](https://so.toutiao.com/search?keyword=外交部：中日关系严重困难日方全责)
1. [专家：美伊或走向不战不和的僵持](https://so.toutiao.com/search?keyword=专家：美伊或走向不战不和的僵持)
1. [国防部回应攻击-21在四川舰成功起降](https://so.toutiao.com/search?keyword=国防部回应攻击-21在四川舰成功起降)
1. [美国非农数据爆表藏着三个坏消息](https://so.toutiao.com/search?keyword=美国非农数据爆表藏着三个坏消息)
1. [这个冬天的哈尔滨横竖都是顶流](https://so.toutiao.com/search?keyword=这个冬天的哈尔滨横竖都是顶流)
1. [什么是2026年人工智能的真实面貌](https://so.toutiao.com/search?keyword=什么是2026年人工智能的真实面貌)
1. [11元拍得鹤岗一套房是赚了吗](https://so.toutiao.com/search?keyword=11元拍得鹤岗一套房是赚了吗)
1. [淮海战役的支前运动与宣传工作](https://so.toutiao.com/search?keyword=淮海战役的支前运动与宣传工作)
1. [谁在把女性隐私明码标价](https://so.toutiao.com/search?keyword=谁在把女性隐私明码标价)
1. [AI如此聪明为什么我们的工资还没涨](https://so.toutiao.com/search?keyword=AI如此聪明为什么我们的工资还没涨)
1. [媒体：发展人工智能也应共建共享](https://so.toutiao.com/search?keyword=媒体：发展人工智能也应共建共享)
1. [东风-61导弹列装火箭军传递什么信号](https://so.toutiao.com/search?keyword=东风-61导弹列装火箭军传递什么信号)
1. [A股国家队最新增持路径浮出水面](https://so.toutiao.com/search?keyword=A股国家队最新增持路径浮出水面)
1. [浙江妈妈陪着学医女儿抄方子](https://so.toutiao.com/search?keyword=浙江妈妈陪着学医女儿抄方子)
1. [曝钟汉良隐婚](https://so.toutiao.com/search?keyword=曝钟汉良隐婚)
1. [学员引体向上51个破校纪录](https://so.toutiao.com/search?keyword=学员引体向上51个破校纪录)
1. [国防部：须高度警惕日本重启战争机器](https://so.toutiao.com/search?keyword=国防部：须高度警惕日本重启战争机器)
1. [智慧教室会侵犯学生隐私系误读](https://so.toutiao.com/search?keyword=智慧教室会侵犯学生隐私系误读)
1. [中国气象局启动暴雪四级应急响应](https://so.toutiao.com/search?keyword=中国气象局启动暴雪四级应急响应)
1. [《后会友期》是怎么爆的](https://so.toutiao.com/search?keyword=《后会友期》是怎么爆的)
1. [6城住户存款超3万亿](https://so.toutiao.com/search?keyword=6城住户存款超3万亿)
1. [日本经济又要被绑上战车了吗](https://so.toutiao.com/search?keyword=日本经济又要被绑上战车了吗)
1. [深圳大批花海上新](https://so.toutiao.com/search?keyword=深圳大批花海上新)
1. [全国人大常委会举行宪法宣誓仪式](https://so.toutiao.com/search?keyword=全国人大常委会举行宪法宣誓仪式)
1. [仰望U9X创造503.17km/h极速纪录](https://so.toutiao.com/search?keyword=仰望U9X创造503.17km/h极速纪录)
1. [刻100个药方墓碑每天三四百人祭拜](https://so.toutiao.com/search?keyword=刻100个药方墓碑每天三四百人祭拜)
1. [WTT法兰克福冠军赛周启豪1-3林昀儒](https://so.toutiao.com/search?keyword=WTT法兰克福冠军赛周启豪1-3林昀儒)
1. [甘肃省武威市委书记武和谦被查](https://so.toutiao.com/search?keyword=甘肃省武威市委书记武和谦被查)
1. [龙赛罗致敬C罗](https://so.toutiao.com/search?keyword=龙赛罗致敬C罗)
1. [邵永灵：日企已扛不住稀土荒](https://so.toutiao.com/search?keyword=邵永灵：日企已扛不住稀土荒)
1. [邵永灵：内塔尼亚胡总理宝座岌岌可危](https://so.toutiao.com/search?keyword=邵永灵：内塔尼亚胡总理宝座岌岌可危)
1. [老钱回应修猫修狗视频爆火](https://so.toutiao.com/search?keyword=老钱回应修猫修狗视频爆火)
1. [拳王泰森改行说脱口秀了](https://so.toutiao.com/search?keyword=拳王泰森改行说脱口秀了)
1. [AI已绑架整个美国市场了吗](https://so.toutiao.com/search?keyword=AI已绑架整个美国市场了吗)
1. [美防长回应被要求辞职](https://so.toutiao.com/search?keyword=美防长回应被要求辞职)
1. [陈福利卸任全国人大常委会副秘书长](https://so.toutiao.com/search?keyword=陈福利卸任全国人大常委会副秘书长)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Nov 07 2026 07:04:43 GMT+0800 (China Standard Time) -->

1. [张雪重庆大学开价被学生嫌弃](https://www.zhihu.com/search?q=%E5%BC%A0%E9%9B%AA%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%BC%80%E4%BB%B7%E8%A2%AB%E5%AD%A6%E7%94%9F%E5%AB%8C%E5%BC%83)
1. [美股暴跌遭抛售潮](https://www.zhihu.com/search?q=%E7%BE%8E%E8%82%A1%E6%9A%B4%E8%B7%8C%E9%81%AD%E6%8A%9B%E5%94%AE%E6%BD%AE)
1. [南京大学抬头率](https://www.zhihu.com/search?q=%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%8A%AC%E5%A4%B4%E7%8E%87)
1. [知乎好奇岛装扮游戏](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [红果短剧处理两万部低质短剧](https://www.zhihu.com/search?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%A4%84%E7%90%86%E4%B8%A4%E4%B8%87%E9%83%A8%E4%BD%8E%E8%B4%A8%E7%9F%AD%E5%89%A7)
1. [BLG 3:0 淘汰DK](https://www.zhihu.com/search?q=BLG%203%3A0%20%E6%B7%98%E6%B1%B0DK)
1. [特朗普被指全面惨败](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E6%8C%87%E5%85%A8%E9%9D%A2%E6%83%A8%E8%B4%A5)
1. [王楚钦0-3温瑞博](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A60-3%E6%B8%A9%E7%91%9E%E5%8D%9A)
1. [警方通报孙某军因情感纠纷行凶](https://www.zhihu.com/search?q=%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%AD%99%E6%9F%90%E5%86%9B%E5%9B%A0%E6%83%85%E6%84%9F%E7%BA%A0%E7%BA%B7%E8%A1%8C%E5%87%B6)
1. [北交大明确雄安为唯一主校区](https://www.zhihu.com/search?q=%E5%8C%97%E4%BA%A4%E5%A4%A7%E6%98%8E%E7%A1%AE%E9%9B%84%E5%AE%89%E4%B8%BA%E5%94%AF%E4%B8%80%E4%B8%BB%E6%A0%A1%E5%8C%BA)
1. [美国民主党欲推超级AI禁令](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E6%B0%91%E4%B8%BB%E5%85%9A%E6%AC%B2%E6%8E%A8%E8%B6%85%E7%BA%A7AI%E7%A6%81%E4%BB%A4)
1. [陕西重大刑案致3死2伤](https://www.zhihu.com/search?q=%E9%99%95%E8%A5%BF%E9%87%8D%E5%A4%A7%E5%88%91%E6%A1%88%E8%87%B43%E6%AD%BB2%E4%BC%A4)
1. [C 罗宣布从国家队退役](https://www.zhihu.com/search?q=C%20%E7%BD%97%E5%AE%A3%E5%B8%83%E4%BB%8E%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%80%80%E5%BD%B9)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Nov 07 2026 07:11:00 GMT+0800 (China Standard Time) -->

1. [如何看待仰望U9 Xtreme在阿布扎比开放公路跑出503.17km/h这件事？](https://www.zhihu.com/question/2102058162580935700)
1. [看完 AI 仿真人剧《持械入宋》，感觉技术上并没有很高壁垒，实拍难度也不大，为什么真人影视里没人来拍？](https://www.zhihu.com/question/2101987202196400000)
1. [如何看待广电总局重申未来将把重点放在扶持真人短剧，以及规范 AI 短剧？这对短剧行业会带来哪些影响？](https://www.zhihu.com/question/2101979474723960000)
1. [我让老公把一盘土豆丝倒女儿碗里，她气的把筷子摔了，还向我爆粗口，我教训了她一顿，我做错了吗？](https://www.zhihu.com/question/1926739737244305400)
1. [每天给你5000元，但是第二天你的存款会自动消失，你愿意吗？](https://www.zhihu.com/question/2100563777120909300)
1. [民主党提出超级 AI 禁令，美股迎来 1896 年以来中期选举后表现最差的第二个交易日，影响有多大？](https://www.zhihu.com/question/2101977105504236000)
1. [为什么现在的棉服填充物都是聚酯纤维而不是棉花？](https://www.zhihu.com/question/1975538469355934200)
1. [研究生导师是更喜欢保研上来的学生还是考研上来的学生？](https://www.zhihu.com/question/2098191977334445800)
1. [男子预判金价能到2000元/克，花光积蓄买7斤黄金，9个月亏114万元，急用钱无奈割肉，如何看待此事？](https://www.zhihu.com/question/2101426752694261500)
1. [云南咖啡为何走不出中国？](https://www.zhihu.com/question/321589074)
1. [爱奇艺回应「年度最恶心的广告」，此次出现的内容属于「弹幕广告」，不包含在会员权益内，怎样看待这一回应？](https://www.zhihu.com/question/2102014481567938000)
1. [儿子偷卖母亲 13 克金项链，母亲得知真相后报警，儿子被采取刑事强制措施，拿自己家的东西算偷吗？](https://www.zhihu.com/question/2101972581469500400)
1. [如果给你月薪9000，天天去图书馆看书你愿意吗？](https://www.zhihu.com/question/2096936259998447000)
1. [全国 3.35 万座寺院、 9000 座道观同步启动财务大检查，到底意味着什么？](https://www.zhihu.com/question/2101611329513693400)
1. [从千元高端菜到几十元快餐纷纷搞起「板前」，这究竟是中餐的升级，还是新一波流量密码？](https://www.zhihu.com/question/2098729741008295400)
1. [杭州骨灰撒钱塘江已有八百余户报名，符合条件的还能领两千元补贴，如何看待这一服务？会影响生态环境吗？](https://www.zhihu.com/question/2101418619233989000)
1. [《大明王朝1566》提出的改稻为桑，如果好好经营，是不是个好国策呢？](https://www.zhihu.com/question/2079512014485976600)
1. [你对禁止电动自行车加装挡风被怎么看？](https://www.zhihu.com/question/2101223614091617300)
1. [巴菲特称已 48 年不喝水只喝可乐，是真的吗？健康吗？如何从医学角度看待这一饮食习惯？](https://www.zhihu.com/question/2100626480447370500)
1. [中国有没有那种中国人不怎么去，但是外国人却很喜欢去的古迹?](https://www.zhihu.com/question/2098824135749194500)
1. [红楼梦中荣国府为何三代就衰败了？](https://www.zhihu.com/question/1959100132072067600)
1. [如何评价2026年1月出版的郑宁所著的《沉默的皖北》一书？](https://www.zhihu.com/question/2007469901158307000)
1. [彭城之战中刘邦为什么会惨败？](https://www.zhihu.com/question/604028149)
1. [对于还没有真正认识人生哲理的年轻人，你有什么建议？](https://www.zhihu.com/question/2100638944597746700)
1. [男子违停被贴 55 张贴纸，律师称或涉嫌侵害车主财产权，如何从法律角度解读？](https://www.zhihu.com/question/2101629230484345300)
1. [如何看待万斯公开批评特朗普政策称共和党败选是因为伊朗战争？他是在与特朗普进行切割吗？](https://www.zhihu.com/question/2101610363875768000)
1. [70年代及之前的PLA为什么普遍是驮马步兵师？为什么没有采用载重量更大的挽马？](https://www.zhihu.com/question/2099946439635892000)
1. [20世纪70至80年代，为什么很少有家长接送小学生读书？](https://www.zhihu.com/question/2014747540814340600)
1. [明明上班熬得很难受，为什么不敢轻易裸辞？](https://www.zhihu.com/question/2084747459436332500)
1. [拜仁将与凯恩续约三年，据称凯恩将得到「创纪录的薪水」，成为欧洲薪水最高的球员，如何评价此事？](https://www.zhihu.com/question/2101705162276299300)
1. [张雪称若学生同意，将公开面试过程，会参加 36 名重庆大学学生二面，有利于缓解之前的争议吗？](https://www.zhihu.com/question/2102006607915894500)
1. [如何评价《原神》新角色安娜丝塔夏立绘？](https://www.zhihu.com/question/2102010159216201700)
1. [为什么说住宅楼的空调机位是“反人类”设计？](https://www.zhihu.com/question/1997273379535861200)
1. [如何评价DeepSeek Harness公布日活用户达150万？这会影响AI编程和智能体市场的竞争吗？](https://www.zhihu.com/question/2101823381955990800)
1. [美股遭遇「黑色星期四」，AI板块重挫，SOX指数下跌超12%，国际原油大涨超3%，后市怎么看？](https://www.zhihu.com/question/2101923145217209000)
1. [纯打游戏，选ps5还是高配pc？](https://www.zhihu.com/question/604427872)
1. [怎样控制自己的情绪而不是压抑自己的情绪?](https://www.zhihu.com/question/1973474155304331000)
1. [单位里为什么总是少不了勾心斗角？](https://www.zhihu.com/question/2086027288408242200)
1. [抛开工资不谈，工作是为了什么？](https://www.zhihu.com/question/2100598509380681700)
1. [在日本人看来，女孩子自称“僕”真的很粗鲁吗？](https://www.zhihu.com/question/439090326)

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
<!-- 最后更新时间 Sat Nov 07 2026 07:17:37 GMT+0800 (China Standard Time) -->

1. [确保选出人民满意的代表](https://s.weibo.com//weibo?q=%23%E7%A1%AE%E4%BF%9D%E9%80%89%E5%87%BA%E4%BA%BA%E6%B0%91%E6%BB%A1%E6%84%8F%E7%9A%84%E4%BB%A3%E8%A1%A8%23&Refer=new_time)
1. [没本事但听话的婚姻没内耗](https://s.weibo.com//weibo?q=%E6%B2%A1%E6%9C%AC%E4%BA%8B%E4%BD%86%E5%90%AC%E8%AF%9D%E7%9A%84%E5%A9%9A%E5%A7%BB%E6%B2%A1%E5%86%85%E8%80%97&t=31&band_rank=1&Refer=top)
1. [圆通总裁心疼儿子Tim](https://s.weibo.com//weibo?q=%23%E5%9C%86%E9%80%9A%E6%80%BB%E8%A3%81%E5%BF%83%E7%96%BC%E5%84%BF%E5%AD%90Tim%23&t=31&band_rank=2&Refer=top)
1. [铸牢共同体中华一家亲](https://s.weibo.com//weibo?q=%23%E9%93%B8%E7%89%A2%E5%85%B1%E5%90%8C%E4%BD%93%E4%B8%AD%E5%8D%8E%E4%B8%80%E5%AE%B6%E4%BA%B2%23&t=31&band_rank=3&Refer=top)
1. [全麻胃肠镜睡一觉就做完](https://s.weibo.com//weibo?q=%E5%85%A8%E9%BA%BB%E8%83%83%E8%82%A0%E9%95%9C%E7%9D%A1%E4%B8%80%E8%A7%89%E5%B0%B1%E5%81%9A%E5%AE%8C&t=31&band_rank=4&Refer=top)
1. [许飞非虚构写作级别的表达](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E9%9D%9E%E8%99%9A%E6%9E%84%E5%86%99%E4%BD%9C%E7%BA%A7%E5%88%AB%E7%9A%84%E8%A1%A8%E8%BE%BE&t=31&band_rank=5&Refer=top)
1. [原来器官没在我以为的地方](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%99%A8%E5%AE%98%E6%B2%A1%E5%9C%A8%E6%88%91%E4%BB%A5%E4%B8%BA%E7%9A%84%E5%9C%B0%E6%96%B9%23&t=31&band_rank=6&Refer=top)
1. [3城人均住户存款超20万](https://s.weibo.com//weibo?q=%233%E5%9F%8E%E4%BA%BA%E5%9D%87%E4%BD%8F%E6%88%B7%E5%AD%98%E6%AC%BE%E8%B6%8520%E4%B8%87%23&t=31&band_rank=7&Refer=top)
1. [KC挑衅Faker](https://s.weibo.com//weibo?q=%23KC%E6%8C%91%E8%A1%85Faker%23&t=31&band_rank=8&Refer=top)
1. [美国10月非农远超预期](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD10%E6%9C%88%E9%9D%9E%E5%86%9C%E8%BF%9C%E8%B6%85%E9%A2%84%E6%9C%9F%23&t=31&band_rank=9&Refer=top)
1. [后会友期综史一](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%BB%BC%E5%8F%B2%E4%B8%80%23&t=31&band_rank=10&Refer=top)
1. [张萌老公简历居然这么厉害](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E8%80%81%E5%85%AC%E7%AE%80%E5%8E%86%E5%B1%85%E7%84%B6%E8%BF%99%E4%B9%88%E5%8E%89%E5%AE%B3%23&t=31&band_rank=11&Refer=top)
1. [小米澎程主驾车门被撞仍保护车主](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E4%B8%BB%E9%A9%BE%E8%BD%A6%E9%97%A8%E8%A2%AB%E6%92%9E%E4%BB%8D%E4%BF%9D%E6%8A%A4%E8%BD%A6%E4%B8%BB&t=31&band_rank=12&Refer=top)
1. [11岁女童遭性侵被困宾馆5小时](https://s.weibo.com//weibo?q=%2311%E5%B2%81%E5%A5%B3%E7%AB%A5%E9%81%AD%E6%80%A7%E4%BE%B5%E8%A2%AB%E5%9B%B0%E5%AE%BE%E9%A6%865%E5%B0%8F%E6%97%B6%23&t=31&band_rank=13&Refer=top)
1. [厉娜因为有工作激动到睡不着](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E5%9B%A0%E4%B8%BA%E6%9C%89%E5%B7%A5%E4%BD%9C%E6%BF%80%E5%8A%A8%E5%88%B0%E7%9D%A1%E4%B8%8D%E7%9D%80%23&t=31&band_rank=14&Refer=top)
1. [肖战以为比杆多耳是个名人](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E4%BB%A5%E4%B8%BA%E6%AF%94%E6%9D%86%E5%A4%9A%E8%80%B3%E6%98%AF%E4%B8%AA%E5%90%8D%E4%BA%BA%23&t=31&band_rank=15&Refer=top)
1. [临沂一车凌晨冲撞多车和摊位后逃逸](https://s.weibo.com//weibo?q=%23%E4%B8%B4%E6%B2%82%E4%B8%80%E8%BD%A6%E5%87%8C%E6%99%A8%E5%86%B2%E6%92%9E%E5%A4%9A%E8%BD%A6%E5%92%8C%E6%91%8A%E4%BD%8D%E5%90%8E%E9%80%83%E9%80%B8%23&t=31&band_rank=16&Refer=top)
1. [赵丽颖周迅打招呼](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%91%A8%E8%BF%85%E6%89%93%E6%8B%9B%E5%91%BC%23&t=31&band_rank=17&Refer=top)
1. [网友解读白小纯审判青稚](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E8%A7%A3%E8%AF%BB%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AE%A1%E5%88%A4%E9%9D%92%E7%A8%9A&t=31&band_rank=18&Refer=top)
1. [姜妍吃的饭被蒋欣看到天要塌了](https://s.weibo.com//weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%90%83%E7%9A%84%E9%A5%AD%E8%A2%AB%E8%92%8B%E6%AC%A3%E7%9C%8B%E5%88%B0%E5%A4%A9%E8%A6%81%E5%A1%8C%E4%BA%86%23&t=31&band_rank=19&Refer=top)
1. [肖战小城良方收视节节高](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E6%94%B6%E8%A7%86%E8%8A%82%E8%8A%82%E9%AB%98%23&t=31&band_rank=20&Refer=top)
1. [大冰回答八年没上班的女子](https://s.weibo.com//weibo?q=%E5%A4%A7%E5%86%B0%E5%9B%9E%E7%AD%94%E5%85%AB%E5%B9%B4%E6%B2%A1%E4%B8%8A%E7%8F%AD%E7%9A%84%E5%A5%B3%E5%AD%90&t=31&band_rank=21&Refer=top)
1. [工作真的会改变人的性格](https://s.weibo.com//weibo?q=%E5%B7%A5%E4%BD%9C%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%94%B9%E5%8F%98%E4%BA%BA%E7%9A%84%E6%80%A7%E6%A0%BC&t=31&band_rank=22&Refer=top)
1. [永远不要和人产生太深的羁绊](https://s.weibo.com//weibo?q=%E6%B0%B8%E8%BF%9C%E4%B8%8D%E8%A6%81%E5%92%8C%E4%BA%BA%E4%BA%A7%E7%94%9F%E5%A4%AA%E6%B7%B1%E7%9A%84%E7%BE%81%E7%BB%8A&t=31&band_rank=23&Refer=top)
1. [11元拍下鹤岗一套房男子发声](https://s.weibo.com//weibo?q=%2311%E5%85%83%E6%8B%8D%E4%B8%8B%E9%B9%A4%E5%B2%97%E4%B8%80%E5%A5%97%E6%88%BF%E7%94%B7%E5%AD%90%E5%8F%91%E5%A3%B0%23&t=31&band_rank=24&Refer=top)
1. [有能退休的城市就有安全感](https://s.weibo.com//weibo?q=%E6%9C%89%E8%83%BD%E9%80%80%E4%BC%91%E7%9A%84%E5%9F%8E%E5%B8%82%E5%B0%B1%E6%9C%89%E5%AE%89%E5%85%A8%E6%84%9F&t=31&band_rank=25&Refer=top)
1. [立冬后建议多吃这些食物](https://s.weibo.com//weibo?q=%23%E7%AB%8B%E5%86%AC%E5%90%8E%E5%BB%BA%E8%AE%AE%E5%A4%9A%E5%90%83%E8%BF%99%E4%BA%9B%E9%A3%9F%E7%89%A9%23&t=31&band_rank=26&Refer=top)
1. [做了近视激光手术的人后来怎样了](https://s.weibo.com//weibo?q=%23%E5%81%9A%E4%BA%86%E8%BF%91%E8%A7%86%E6%BF%80%E5%85%89%E6%89%8B%E6%9C%AF%E7%9A%84%E4%BA%BA%E5%90%8E%E6%9D%A5%E6%80%8E%E6%A0%B7%E4%BA%86%23&t=31&band_rank=27&Refer=top)
1. [特斯拉将逐步停产Cybertruck](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%B0%86%E9%80%90%E6%AD%A5%E5%81%9C%E4%BA%A7Cybertruck%23&t=31&band_rank=28&Refer=top)
1. [青稚听到和白小纯一起住偷笑](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E5%90%AC%E5%88%B0%E5%92%8C%E7%99%BD%E5%B0%8F%E7%BA%AF%E4%B8%80%E8%B5%B7%E4%BD%8F%E5%81%B7%E7%AC%91%23&t=31&band_rank=29&Refer=top)
1. [女子称父亲倒在站台旅客施救被制止](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E7%88%B6%E4%BA%B2%E5%80%92%E5%9C%A8%E7%AB%99%E5%8F%B0%E6%97%85%E5%AE%A2%E6%96%BD%E6%95%91%E8%A2%AB%E5%88%B6%E6%AD%A2%23&t=31&band_rank=30&Refer=top)
1. [车站回应制止旅客救倒地男子](https://s.weibo.com//weibo?q=%23%E8%BD%A6%E7%AB%99%E5%9B%9E%E5%BA%94%E5%88%B6%E6%AD%A2%E6%97%85%E5%AE%A2%E6%95%91%E5%80%92%E5%9C%B0%E7%94%B7%E5%AD%90%23&t=31&band_rank=31&Refer=top)
1. [格拉夫认领赵丽颖珠宝](https://s.weibo.com//weibo?q=%E6%A0%BC%E6%8B%89%E5%A4%AB%E8%AE%A4%E9%A2%86%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%8F%A0%E5%AE%9D&t=31&band_rank=32&Refer=top)
1. [友情的回光返照最让人失落](https://s.weibo.com//weibo?q=%E5%8F%8B%E6%83%85%E7%9A%84%E5%9B%9E%E5%85%89%E8%BF%94%E7%85%A7%E6%9C%80%E8%AE%A9%E4%BA%BA%E5%A4%B1%E8%90%BD&t=31&band_rank=33&Refer=top)
1. [青稚白小纯好标准的刻舟求剑](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%A5%BD%E6%A0%87%E5%87%86%E7%9A%84%E5%88%BB%E8%88%9F%E6%B1%82%E5%89%91&t=31&band_rank=34&Refer=top)
1. [曝乔欣有孩子了](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E4%B9%94%E6%AC%A3%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [张萌辟谣大IP剧是陈情令](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E8%BE%9F%E8%B0%A3%E5%A4%A7IP%E5%89%A7%E6%98%AF%E9%99%88%E6%83%85%E4%BB%A4%23&t=31&band_rank=36&Refer=top)
1. [WTA年终总决赛单人照公布](https://s.weibo.com//weibo?q=%23WTA%E5%B9%B4%E7%BB%88%E6%80%BB%E5%86%B3%E8%B5%9B%E5%8D%95%E4%BA%BA%E7%85%A7%E5%85%AC%E5%B8%83%23&t=31&band_rank=37&Refer=top)
1. [Keria喊话Canna](https://s.weibo.com//weibo?q=%23Keria%E5%96%8A%E8%AF%9DCanna%23&t=31&band_rank=38&Refer=top)
1. [雨果1比3维东斯霍特](https://s.weibo.com//weibo?q=%23%E9%9B%A8%E6%9E%9C1%E6%AF%943%E7%BB%B4%E4%B8%9C%E6%96%AF%E9%9C%8D%E7%89%B9%23&t=31&band_rank=39&Refer=top)
1. [曾沛慈看孙燕姿演唱会点歌](https://s.weibo.com//weibo?q=%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9C%8B%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%82%B9%E6%AD%8C&t=31&band_rank=40&Refer=top)
1. [许飞是全网唯一文吉儿王子璇CP粉](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E6%98%AF%E5%85%A8%E7%BD%91%E5%94%AF%E4%B8%80%E6%96%87%E5%90%89%E5%84%BF%E7%8E%8B%E5%AD%90%E7%92%87CP%E7%B2%89&t=31&band_rank=41&Refer=top)
1. [商户称商南命案受伤警察流了很多血](https://s.weibo.com//weibo?q=%23%E5%95%86%E6%88%B7%E7%A7%B0%E5%95%86%E5%8D%97%E5%91%BD%E6%A1%88%E5%8F%97%E4%BC%A4%E8%AD%A6%E5%AF%9F%E6%B5%81%E4%BA%86%E5%BE%88%E5%A4%9A%E8%A1%80%23&t=31&band_rank=42&Refer=top)
1. [F1巴西大奖赛](https://s.weibo.com//weibo?q=F1%E5%B7%B4%E8%A5%BF%E5%A4%A7%E5%A5%96%E8%B5%9B&t=31&band_rank=43&Refer=top)
1. [还原商南重大刑事案嫌疑人路线](https://s.weibo.com//weibo?q=%23%E8%BF%98%E5%8E%9F%E5%95%86%E5%8D%97%E9%87%8D%E5%A4%A7%E5%88%91%E4%BA%8B%E6%A1%88%E5%AB%8C%E7%96%91%E4%BA%BA%E8%B7%AF%E7%BA%BF%23&t=31&band_rank=44&Refer=top)
1. [马天宇没去的剧疑似是陈情令](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E6%B2%A1%E5%8E%BB%E7%9A%84%E5%89%A7%E7%96%91%E4%BC%BC%E6%98%AF%E9%99%88%E6%83%85%E4%BB%A4%23&t=31&band_rank=45&Refer=top)
1. [重大气象灾害暴雪四级应急响应](https://s.weibo.com//weibo?q=%23%E9%87%8D%E5%A4%A7%E6%B0%94%E8%B1%A1%E7%81%BE%E5%AE%B3%E6%9A%B4%E9%9B%AA%E5%9B%9B%E7%BA%A7%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94%23&t=31&band_rank=46&Refer=top)
1. [天霸老板解释为什么换下白小纯](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E9%9C%B8%E8%80%81%E6%9D%BF%E8%A7%A3%E9%87%8A%E4%B8%BA%E4%BB%80%E4%B9%88%E6%8D%A2%E4%B8%8B%E7%99%BD%E5%B0%8F%E7%BA%AF%23&t=31&band_rank=47&Refer=top)
1. [王子璇把文吉儿的两头退路都堵死了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%8A%8A%E6%96%87%E5%90%89%E5%84%BF%E7%9A%84%E4%B8%A4%E5%A4%B4%E9%80%80%E8%B7%AF%E9%83%BD%E5%A0%B5%E6%AD%BB%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [取消化妆大赛吧我们已经有冠军了](https://s.weibo.com//weibo?q=%E5%8F%96%E6%B6%88%E5%8C%96%E5%A6%86%E5%A4%A7%E8%B5%9B%E5%90%A7%E6%88%91%E4%BB%AC%E5%B7%B2%E7%BB%8F%E6%9C%89%E5%86%A0%E5%86%9B%E4%BA%86&t=31&band_rank=49&Refer=top)
1. [华为连续三年拍金鸡百花宣传片](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%B9%B4%E6%8B%8D%E9%87%91%E9%B8%A1%E7%99%BE%E8%8A%B1%E5%AE%A3%E4%BC%A0%E7%89%87&t=31&band_rank=50&Refer=top)
1. [习近平同加蓬总统恩圭马会谈](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%90%8C%E5%8A%A0%E8%93%AC%E6%80%BB%E7%BB%9F%E6%81%A9%E5%9C%AD%E9%A9%AC%E4%BC%9A%E8%B0%88%23&Refer=new_time)
1. [后会友期综史一](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%BB%BC%E5%8F%B2%E4%B8%80%23&t=31&band_rank=1&Refer=top)
1. [特斯拉将逐步停产Cybertruck](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%B0%86%E9%80%90%E6%AD%A5%E5%81%9C%E4%BA%A7Cybertruck%23&t=31&band_rank=2&Refer=top)
1. [一图速览进博会亮点](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%9B%BE%E9%80%9F%E8%A7%88%E8%BF%9B%E5%8D%9A%E4%BC%9A%E4%BA%AE%E7%82%B9%23&t=31&band_rank=3&Refer=top)
1. [许飞非虚构写作级别的表达](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E9%9D%9E%E8%99%9A%E6%9E%84%E5%86%99%E4%BD%9C%E7%BA%A7%E5%88%AB%E7%9A%84%E8%A1%A8%E8%BE%BE&t=31&band_rank=4&Refer=top)
1. [小米澎程主驾车门被撞仍保护车主](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E4%B8%BB%E9%A9%BE%E8%BD%A6%E9%97%A8%E8%A2%AB%E6%92%9E%E4%BB%8D%E4%BF%9D%E6%8A%A4%E8%BD%A6%E4%B8%BB&t=31&band_rank=5&Refer=top)
1. [厉娜因为有工作激动到睡不着](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E5%9B%A0%E4%B8%BA%E6%9C%89%E5%B7%A5%E4%BD%9C%E6%BF%80%E5%8A%A8%E5%88%B0%E7%9D%A1%E4%B8%8D%E7%9D%80%23&t=31&band_rank=6&Refer=top)
1. [没本事但听话的婚姻没内耗](https://s.weibo.com//weibo?q=%E6%B2%A1%E6%9C%AC%E4%BA%8B%E4%BD%86%E5%90%AC%E8%AF%9D%E7%9A%84%E5%A9%9A%E5%A7%BB%E6%B2%A1%E5%86%85%E8%80%97&t=31&band_rank=7&Refer=top)
1. [姜妍吃的饭被蒋欣看到天要塌了](https://s.weibo.com//weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%90%83%E7%9A%84%E9%A5%AD%E8%A2%AB%E8%92%8B%E6%AC%A3%E7%9C%8B%E5%88%B0%E5%A4%A9%E8%A6%81%E5%A1%8C%E4%BA%86%23&t=31&band_rank=8&Refer=top)
1. [青稚听到和白小纯一起住偷笑](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E5%90%AC%E5%88%B0%E5%92%8C%E7%99%BD%E5%B0%8F%E7%BA%AF%E4%B8%80%E8%B5%B7%E4%BD%8F%E5%81%B7%E7%AC%91%23&t=31&band_rank=9&Refer=top)
1. [小米成立中国区公关部](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%88%90%E7%AB%8B%E4%B8%AD%E5%9B%BD%E5%8C%BA%E5%85%AC%E5%85%B3%E9%83%A8%23&t=31&band_rank=10&Refer=top)
1. [圆通总裁心疼儿子Tim](https://s.weibo.com//weibo?q=%23%E5%9C%86%E9%80%9A%E6%80%BB%E8%A3%81%E5%BF%83%E7%96%BC%E5%84%BF%E5%AD%90Tim%23&t=31&band_rank=11&Refer=top)
1. [网友解读白小纯审判青稚](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E8%A7%A3%E8%AF%BB%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AE%A1%E5%88%A4%E9%9D%92%E7%A8%9A&t=31&band_rank=12&Refer=top)
1. [KC挑衅Faker](https://s.weibo.com//weibo?q=%23KC%E6%8C%91%E8%A1%85Faker%23&t=31&band_rank=13&Refer=top)
1. [张萌老公简历居然这么厉害](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E8%80%81%E5%85%AC%E7%AE%80%E5%8E%86%E5%B1%85%E7%84%B6%E8%BF%99%E4%B9%88%E5%8E%89%E5%AE%B3%23&t=31&band_rank=14&Refer=top)
1. [曝我们来了阵容](https://s.weibo.com//weibo?q=%E6%9B%9D%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%E9%98%B5%E5%AE%B9&t=31&band_rank=15&Refer=top)
1. [11岁女童遭性侵被困宾馆5小时](https://s.weibo.com//weibo?q=%2311%E5%B2%81%E5%A5%B3%E7%AB%A5%E9%81%AD%E6%80%A7%E4%BE%B5%E8%A2%AB%E5%9B%B0%E5%AE%BE%E9%A6%865%E5%B0%8F%E6%97%B6%23&t=31&band_rank=16&Refer=top)
1. [女子称父亲倒在站台旅客施救被制止](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E7%88%B6%E4%BA%B2%E5%80%92%E5%9C%A8%E7%AB%99%E5%8F%B0%E6%97%85%E5%AE%A2%E6%96%BD%E6%95%91%E8%A2%AB%E5%88%B6%E6%AD%A2%23&t=31&band_rank=17&Refer=top)
1. [美国10月非农远超预期](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD10%E6%9C%88%E9%9D%9E%E5%86%9C%E8%BF%9C%E8%B6%85%E9%A2%84%E6%9C%9F%23&t=31&band_rank=18&Refer=top)
1. [皮肤一碰就破女孩父母称不生二胎](https://s.weibo.com//weibo?q=%23%E7%9A%AE%E8%82%A4%E4%B8%80%E7%A2%B0%E5%B0%B1%E7%A0%B4%E5%A5%B3%E5%AD%A9%E7%88%B6%E6%AF%8D%E7%A7%B0%E4%B8%8D%E7%94%9F%E4%BA%8C%E8%83%8E%23&t=31&band_rank=19&Refer=top)
1. [半个娱乐圈来厦门了](https://s.weibo.com//weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E6%9D%A5%E5%8E%A6%E9%97%A8%E4%BA%86%23&t=31&band_rank=20&Refer=top)
1. [许飞是全网唯一文吉儿王子璇CP粉](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E6%98%AF%E5%85%A8%E7%BD%91%E5%94%AF%E4%B8%80%E6%96%87%E5%90%89%E5%84%BF%E7%8E%8B%E5%AD%90%E7%92%87CP%E7%B2%89&t=31&band_rank=21&Refer=top)
1. [青稚白小纯好标准的刻舟求剑](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%A5%BD%E6%A0%87%E5%87%86%E7%9A%84%E5%88%BB%E8%88%9F%E6%B1%82%E5%89%91&t=31&band_rank=22&Refer=top)
1. [青稚白小纯和好 全联盟开始狼人杀](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%92%8C%E5%A5%BD%20%E5%85%A8%E8%81%94%E7%9B%9F%E5%BC%80%E5%A7%8B%E7%8B%BC%E4%BA%BA%E6%9D%80&t=31&band_rank=23&Refer=top)
1. [张萌辟谣大IP剧是陈情令](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E8%BE%9F%E8%B0%A3%E5%A4%A7IP%E5%89%A7%E6%98%AF%E9%99%88%E6%83%85%E4%BB%A4%23&t=31&band_rank=24&Refer=top)
1. [大冰回答八年没上班的女子](https://s.weibo.com//weibo?q=%E5%A4%A7%E5%86%B0%E5%9B%9E%E7%AD%94%E5%85%AB%E5%B9%B4%E6%B2%A1%E4%B8%8A%E7%8F%AD%E7%9A%84%E5%A5%B3%E5%AD%90&t=31&band_rank=25&Refer=top)
1. [工作真的会改变人的性格](https://s.weibo.com//weibo?q=%E5%B7%A5%E4%BD%9C%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%94%B9%E5%8F%98%E4%BA%BA%E7%9A%84%E6%80%A7%E6%A0%BC&t=31&band_rank=26&Refer=top)
1. [曝乔欣有孩子了](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E4%B9%94%E6%AC%A3%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23&t=31&band_rank=27&Refer=top)
1. [赵丽颖周迅打招呼](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%91%A8%E8%BF%85%E6%89%93%E6%8B%9B%E5%91%BC%23&t=31&band_rank=28&Refer=top)
1. [11元拍下鹤岗一套房男子发声](https://s.weibo.com//weibo?q=%2311%E5%85%83%E6%8B%8D%E4%B8%8B%E9%B9%A4%E5%B2%97%E4%B8%80%E5%A5%97%E6%88%BF%E7%94%B7%E5%AD%90%E5%8F%91%E5%A3%B0%23&t=31&band_rank=29&Refer=top)
1. [立冬后建议多吃这些食物](https://s.weibo.com//weibo?q=%23%E7%AB%8B%E5%86%AC%E5%90%8E%E5%BB%BA%E8%AE%AE%E5%A4%9A%E5%90%83%E8%BF%99%E4%BA%9B%E9%A3%9F%E7%89%A9%23&t=31&band_rank=30&Refer=top)
1. [天霸老板解释为什么换下白小纯](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E9%9C%B8%E8%80%81%E6%9D%BF%E8%A7%A3%E9%87%8A%E4%B8%BA%E4%BB%80%E4%B9%88%E6%8D%A2%E4%B8%8B%E7%99%BD%E5%B0%8F%E7%BA%AF%23&t=31&band_rank=31&Refer=top)
1. [马天宇没去的剧疑似是陈情令](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E6%B2%A1%E5%8E%BB%E7%9A%84%E5%89%A7%E7%96%91%E4%BC%BC%E6%98%AF%E9%99%88%E6%83%85%E4%BB%A4%23&t=31&band_rank=32&Refer=top)
1. [原来器官没在我以为的地方](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%99%A8%E5%AE%98%E6%B2%A1%E5%9C%A8%E6%88%91%E4%BB%A5%E4%B8%BA%E7%9A%84%E5%9C%B0%E6%96%B9%23&t=31&band_rank=33&Refer=top)
1. [青稚白小纯的老板是陈赫鹿晗](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9A%84%E8%80%81%E6%9D%BF%E6%98%AF%E9%99%88%E8%B5%AB%E9%B9%BF%E6%99%97%23&t=31&band_rank=34&Refer=top)
1. [张柏芝夸迪丽热巴很漂亮](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%A4%B8%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BE%88%E6%BC%82%E4%BA%AE%23&t=31&band_rank=35&Refer=top)
1. [全麻胃肠镜睡一觉就做完](https://s.weibo.com//weibo?q=%E5%85%A8%E9%BA%BB%E8%83%83%E8%82%A0%E9%95%9C%E7%9D%A1%E4%B8%80%E8%A7%89%E5%B0%B1%E5%81%9A%E5%AE%8C&t=31&band_rank=36&Refer=top)
1. [取消化妆大赛吧我们已经有冠军了](https://s.weibo.com//weibo?q=%E5%8F%96%E6%B6%88%E5%8C%96%E5%A6%86%E5%A4%A7%E8%B5%9B%E5%90%A7%E6%88%91%E4%BB%AC%E5%B7%B2%E7%BB%8F%E6%9C%89%E5%86%A0%E5%86%9B%E4%BA%86&t=31&band_rank=37&Refer=top)
1. [王子璇把文吉儿的两头退路都堵死了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%8A%8A%E6%96%87%E5%90%89%E5%84%BF%E7%9A%84%E4%B8%A4%E5%A4%B4%E9%80%80%E8%B7%AF%E9%83%BD%E5%A0%B5%E6%AD%BB%E4%BA%86%23&t=31&band_rank=38&Refer=top)
1. [格拉夫认领赵丽颖珠宝](https://s.weibo.com//weibo?q=%E6%A0%BC%E6%8B%89%E5%A4%AB%E8%AE%A4%E9%A2%86%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%8F%A0%E5%AE%9D&t=31&band_rank=39&Refer=top)
1. [曝朱婷可能将在本赛季后退役](https://s.weibo.com//weibo?q=%E6%9B%9D%E6%9C%B1%E5%A9%B7%E5%8F%AF%E8%83%BD%E5%B0%86%E5%9C%A8%E6%9C%AC%E8%B5%9B%E5%AD%A3%E5%90%8E%E9%80%80%E5%BD%B9&t=31&band_rank=40&Refer=top)
1. [贝林厄姆兄弟同时入选英格兰队](https://s.weibo.com//weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E5%85%84%E5%BC%9F%E5%90%8C%E6%97%B6%E5%85%A5%E9%80%89%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%9F%23&t=31&band_rank=41&Refer=top)
1. [粤语连出轨都这么有氛围感](https://s.weibo.com//weibo?q=%E7%B2%A4%E8%AF%AD%E8%BF%9E%E5%87%BA%E8%BD%A8%E9%83%BD%E8%BF%99%E4%B9%88%E6%9C%89%E6%B0%9B%E5%9B%B4%E6%84%9F&t=31&band_rank=42&Refer=top)
1. [做了近视激光手术的人后来怎样了](https://s.weibo.com//weibo?q=%23%E5%81%9A%E4%BA%86%E8%BF%91%E8%A7%86%E6%BF%80%E5%85%89%E6%89%8B%E6%9C%AF%E7%9A%84%E4%BA%BA%E5%90%8E%E6%9D%A5%E6%80%8E%E6%A0%B7%E4%BA%86%23&t=31&band_rank=43&Refer=top)
1. [张小斐 备战奥运](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%B0%8F%E6%96%90%20%E5%A4%87%E6%88%98%E5%A5%A5%E8%BF%90&t=31&band_rank=44&Refer=top)
1. [曾沛慈看孙燕姿演唱会点歌](https://s.weibo.com//weibo?q=%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9C%8B%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%82%B9%E6%AD%8C&t=31&band_rank=45&Refer=top)
1. [陈情令选角时间线](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%83%85%E4%BB%A4%E9%80%89%E8%A7%92%E6%97%B6%E9%97%B4%E7%BA%BF%23&t=31&band_rank=46&Refer=top)
1. [F1巴西大奖赛](https://s.weibo.com//weibo?q=F1%E5%B7%B4%E8%A5%BF%E5%A4%A7%E5%A5%96%E8%B5%9B&t=31&band_rank=47&Refer=top)
1. [白小纯梭哈的原因找到了](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%A2%AD%E5%93%88%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [商户称商南命案受伤警察流了很多血](https://s.weibo.com//weibo?q=%23%E5%95%86%E6%88%B7%E7%A7%B0%E5%95%86%E5%8D%97%E5%91%BD%E6%A1%88%E5%8F%97%E4%BC%A4%E8%AD%A6%E5%AF%9F%E6%B5%81%E4%BA%86%E5%BE%88%E5%A4%9A%E8%A1%80%23&t=31&band_rank=49&Refer=top)
1. [曝PEL魏无羡念了青稚退役的弹幕](https://s.weibo.com//weibo?q=%23%E6%9B%9DPEL%E9%AD%8F%E6%97%A0%E7%BE%A1%E5%BF%B5%E4%BA%86%E9%9D%92%E7%A8%9A%E9%80%80%E5%BD%B9%E7%9A%84%E5%BC%B9%E5%B9%95%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
