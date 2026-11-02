# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-02 23:57:16

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
<!-- 最后更新时间 Tue Nov 03 2026 02:47:54 GMT+0800 (China Standard Time) -->

1. [中国公务团组人员被瑞典警方拘押](https://so.toutiao.com/search?keyword=中国公务团组人员被瑞典警方拘押)
1. [男子彩票中1113万过期2天兑奖被拒](https://so.toutiao.com/search?keyword=男子彩票中1113万过期2天兑奖被拒)
1. [一批重大工程建设正酣](https://so.toutiao.com/search?keyword=一批重大工程建设正酣)
1. [黄金价格暴跌背后的全球资本巨变](https://so.toutiao.com/search?keyword=黄金价格暴跌背后的全球资本巨变)
1. [导演江小鱼去世 年仅56岁](https://so.toutiao.com/search?keyword=导演江小鱼去世%20年仅56岁)
1. [社保欠缴处罚有了全国统一尺度](https://so.toutiao.com/search?keyword=社保欠缴处罚有了全国统一尺度)
1. [我国已达到世界地空导弹武器系统前列](https://so.toutiao.com/search?keyword=我国已达到世界地空导弹武器系统前列)
1. [牛弹琴：内塔尼亚胡很可能被赶下台](https://so.toutiao.com/search?keyword=牛弹琴：内塔尼亚胡很可能被赶下台)
1. [中国为何不大规模扫货俄罗斯低价粮](https://so.toutiao.com/search?keyword=中国为何不大规模扫货俄罗斯低价粮)
1. [新华社发文：国乒男队怎么了](https://so.toutiao.com/search?keyword=新华社发文：国乒男队怎么了)
1. [网民编造花260万登顶珠峰被罚](https://so.toutiao.com/search?keyword=网民编造花260万登顶珠峰被罚)
1. [老人家门口离世 邻居用衣服轻轻盖住](https://so.toutiao.com/search?keyword=老人家门口离世%20邻居用衣服轻轻盖住)
1. [汪峰晒和四个孩子的合照](https://so.toutiao.com/search?keyword=汪峰晒和四个孩子的合照)
1. [A股将迎千亿级增量资金](https://so.toutiao.com/search?keyword=A股将迎千亿级增量资金)
1. [比亚迪102万员工意味着什么](https://so.toutiao.com/search?keyword=比亚迪102万员工意味着什么)
1. [伊朗最高领袖赋予政府谈判权限](https://so.toutiao.com/search?keyword=伊朗最高领袖赋予政府谈判权限)
1. [俄3000亿欧元海外资产还能拿回来吗](https://so.toutiao.com/search?keyword=俄3000亿欧元海外资产还能拿回来吗)
1. [股票回购增持再贷款率降至1%](https://so.toutiao.com/search?keyword=股票回购增持再贷款率降至1%)
1. [电诈团伙已转移到非洲](https://so.toutiao.com/search?keyword=电诈团伙已转移到非洲)
1. [月嫂阿姨下户前最后一次哄睡宝宝](https://so.toutiao.com/search?keyword=月嫂阿姨下户前最后一次哄睡宝宝)
1. [中国第一大肝病已经不是乙肝了](https://so.toutiao.com/search?keyword=中国第一大肝病已经不是乙肝了)
1. [10岁女孩身高1米8 爸爸回应](https://so.toutiao.com/search?keyword=10岁女孩身高1米8%20爸爸回应)
1. [医生提醒床虱极易误诊](https://so.toutiao.com/search?keyword=医生提醒床虱极易误诊)
1. [演员邵万林去世](https://so.toutiao.com/search?keyword=演员邵万林去世)
1. [暴跌三成后谁在偷偷抄底黄金](https://so.toutiao.com/search?keyword=暴跌三成后谁在偷偷抄底黄金)
1. [评论员：中国要在黄岩岛关门了](https://so.toutiao.com/search?keyword=评论员：中国要在黄岩岛关门了)
1. [高端理发店为何干不过10元快剪](https://so.toutiao.com/search?keyword=高端理发店为何干不过10元快剪)
1. [NASA局长对中国登月计划破防背后](https://so.toutiao.com/search?keyword=NASA局长对中国登月计划破防背后)
1. [普京批准中俄一项铁路共建协定](https://so.toutiao.com/search?keyword=普京批准中俄一项铁路共建协定)
1. [胡明轩拿下23分2板4助](https://so.toutiao.com/search?keyword=胡明轩拿下23分2板4助)
1. [安徽省六安市委原书记叶露中被双开](https://so.toutiao.com/search?keyword=安徽省六安市委原书记叶露中被双开)
1. [云南省委书记等补选为省人大代表](https://so.toutiao.com/search?keyword=云南省委书记等补选为省人大代表)
1. [时隔两年金融监管部门再次护盘](https://so.toutiao.com/search?keyword=时隔两年金融监管部门再次护盘)
1. [A股放量反攻是反弹还是反转](https://so.toutiao.com/search?keyword=A股放量反攻是反弹还是反转)
1. [美国中期选举现“十一月惊奇”](https://so.toutiao.com/search?keyword=美国中期选举现“十一月惊奇”)
1. [《影之刃零》吸金超10亿](https://so.toutiao.com/search?keyword=《影之刃零》吸金超10亿)
1. [普京称赞马斯克是天才背后释放何信号](https://so.toutiao.com/search?keyword=普京称赞马斯克是天才背后释放何信号)
1. [女焊工入行19年月薪15000元](https://so.toutiao.com/search?keyword=女焊工入行19年月薪15000元)
1. [克林顿现身民主党竞选活动](https://so.toutiao.com/search?keyword=克林顿现身民主党竞选活动)
1. [证监会拟修订上市公司股份回购规则](https://so.toutiao.com/search?keyword=证监会拟修订上市公司股份回购规则)
1. [《走马上任》是民国喜剧天花板吗](https://so.toutiao.com/search?keyword=《走马上任》是民国喜剧天花板吗)
1. [女孩表演喷火遇上互动感超强的观众](https://so.toutiao.com/search?keyword=女孩表演喷火遇上互动感超强的观众)
1. [王毅王文涛将共同主持APEC相关会议](https://so.toutiao.com/search?keyword=王毅王文涛将共同主持APEC相关会议)
1. [王虹在香港领取求是杰出科学家奖](https://so.toutiao.com/search?keyword=王虹在香港领取求是杰出科学家奖)
1. [东海部分海域进行军事演练禁止驶入](https://so.toutiao.com/search?keyword=东海部分海域进行军事演练禁止驶入)
1. [广州原书记郭永航被双开](https://so.toutiao.com/search?keyword=广州原书记郭永航被双开)
1. [高雄市长选战白热化](https://so.toutiao.com/search?keyword=高雄市长选战白热化)
1. [新人买三金后金价下跌又来买金手链](https://so.toutiao.com/search?keyword=新人买三金后金价下跌又来买金手链)
1. [AI对影视行业的真正冲击是什么](https://so.toutiao.com/search?keyword=AI对影视行业的真正冲击是什么)
1. [男子给儿子留言后失联 手机留床头柜](https://so.toutiao.com/search?keyword=男子给儿子留言后失联%20手机留床头柜)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Nov 03 2026 07:29:15 GMT+0800 (China Standard Time) -->

1. [法定放假总数已增至13天](https://www.zhihu.com/search?q=%E6%B3%95%E5%AE%9A%E6%94%BE%E5%81%87%E6%80%BB%E6%95%B0%E5%B7%B2%E5%A2%9E%E8%87%B313%E5%A4%A9)
1. [将有两名中国人登陆月球](https://www.zhihu.com/search?q=%E5%B0%86%E6%9C%89%E4%B8%A4%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%99%BB%E9%99%86%E6%9C%88%E7%90%83)
1. [波兰总理趁总统外访发动政变](https://www.zhihu.com/search?q=%E6%B3%A2%E5%85%B0%E6%80%BB%E7%90%86%E8%B6%81%E6%80%BB%E7%BB%9F%E5%A4%96%E8%AE%BF%E5%8F%91%E5%8A%A8%E6%94%BF%E5%8F%98)
1. [好奇岛装扮游戏](https://www.zhihu.com/search?q=%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [罗技广告再被指以狗比喻用户](https://www.zhihu.com/search?q=%E7%BD%97%E6%8A%80%E5%B9%BF%E5%91%8A%E5%86%8D%E8%A2%AB%E6%8C%87%E4%BB%A5%E7%8B%97%E6%AF%94%E5%96%BB%E7%94%A8%E6%88%B7)
1. [美国一公务机坠毁致9死](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E4%B8%80%E5%85%AC%E5%8A%A1%E6%9C%BA%E5%9D%A0%E6%AF%81%E8%87%B49%E6%AD%BB)
1. [反诈博主徽剑被曝遇害](https://www.zhihu.com/search?q=%E5%8F%8D%E8%AF%88%E5%8D%9A%E4%B8%BB%E5%BE%BD%E5%89%91%E8%A2%AB%E6%9B%9D%E9%81%87%E5%AE%B3)
1. [居民贷款或将首次出现净偿还](https://www.zhihu.com/search?q=%E5%B1%85%E6%B0%91%E8%B4%B7%E6%AC%BE%E6%88%96%E5%B0%86%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%87%80%E5%81%BF%E8%BF%98)
1. [张雪要求飞行超5小时全员头等舱](https://www.zhihu.com/search?q=%E5%BC%A0%E9%9B%AA%E8%A6%81%E6%B1%82%E9%A3%9E%E8%A1%8C%E8%B6%855%E5%B0%8F%E6%97%B6%E5%85%A8%E5%91%98%E5%A4%B4%E7%AD%89%E8%88%B1)
1. [柬埔寨电诈园区转移至非洲](https://www.zhihu.com/search?q=%E6%9F%AC%E5%9F%94%E5%AF%A8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E8%BD%AC%E7%A7%BB%E8%87%B3%E9%9D%9E%E6%B4%B2)
1. [美国中期选举](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E4%B8%AD%E6%9C%9F%E9%80%89%E4%B8%BE)
1. [DeepSeek发布super-agent构想](https://www.zhihu.com/search?q=DeepSeek%E5%8F%91%E5%B8%83super-agent%E6%9E%84%E6%83%B3)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Nov 02 2026 23:57:16 GMT+0800 (China Standard Time) -->

1. [美国一公务机在居民区坠毁致9死，距特朗普的海湖庄园仅七八公里，具体情况如何？可能是什么原因？](https://www.zhihu.com/question/2100501083466326300)
1. [美国一邮轮推出 246 万元起「终身旅居」套餐，2 年后因燃油成本乘客被赶下船，怎么看邮轮的毁约行为？](https://www.zhihu.com/question/2100494142325223700)
1. [如何看待南京一助教老师休息日爬山5小时未回工作消息遭辞退？「休息日定时查看3次工作号」的要求合法吗？](https://www.zhihu.com/question/2100514068792661800)
1. [网友发现罗技广告又以狗比喻用户，客服回应已展开调查，为什么继此前舆论风波后还会出现这种情况？](https://www.zhihu.com/question/2100514761490129700)
1. [如何看待即使在山河四省，也有很多高中生疯狂玩游戏，抄作业，早恋，摆烂，最后全凭高考分数考上985的？](https://www.zhihu.com/question/2097354391070291500)
1. [第二届苏超结束，流量断崖下跌，这个比赛未来还有新的破局增长点吗，未来这个比赛将立足于哪里？](https://www.zhihu.com/question/2100539974781072000)
1. [Bin 赛后采访称「都说 Zeus 是世一上，今天我击败了他就接替了他的位置」对此你有什么想说的？](https://www.zhihu.com/question/2100542237821986600)
1. [砍完人就收进剑鞘，剑不会臭吗？](https://www.zhihu.com/question/2095907153181505500)
1. [微软大裁员后许多印度裔员工的上班vlog被扒，上班即食堂、锻炼打球等是真的吗？真实的职场环境是怎样的？](https://www.zhihu.com/question/2100586352018284800)
1. [币安被盗资产已补回 90%，剩余 10% 因流动性较低暂未补齐，此次事件还有哪些问题需要解决？](https://www.zhihu.com/question/2100144466690405400)
1. [美国中期选举临近，捐款榜前十里七家倒向共和党，支持率却不如民主党，为啥金钱失去了以往一锤定音的威力？](https://www.zhihu.com/question/2099494216397054500)
1. [武汉警方通报网约车被狂欢人群围困4小时，对29岁男子予以治安处罚，对多人批评教育，怎样从法律角度解读？](https://www.zhihu.com/question/2100687447990302200)
1. [地球上的动物为什么很多都进化出“睡觉”这一习性？](https://www.zhihu.com/question/2069724416724952600)
1. [联想指纹加密 U 盘被曝拆壳即可明文读取数据，为何硬件加密会形同虚设？](https://www.zhihu.com/question/2100532447242932500)
1. [离职了 前同事直接问我找到工作没怎么回复呀？](https://www.zhihu.com/question/659496375)
1. [微软向 6 万名员工开放自愿离职方案，为何连 Copilot 部门也成重灾区？](https://www.zhihu.com/question/2098769070032164600)
1. [Homme 总结 S16 失利「我没能很好地解读版本，心里满怀愧疚」HLE 的失利他责任有多大？](https://www.zhihu.com/question/2100542718195627800)
1. [如何评价影之刃零？](https://www.zhihu.com/question/2099860363948906000)
1. [谁最可能成为中国首位登月航天员，他的历史地位将会如何？](https://www.zhihu.com/question/2099963603109651200)
1. [gpt越来越不行了，是为什么？](https://www.zhihu.com/question/1905941578591211800)
1. [如何看待 Rookie 采访称「我想成为第二个世界赛双冠中单选手，想要 iG 再次夺冠重振联赛」？](https://www.zhihu.com/question/2100541815300388600)
1. [法定节假日增至 13 天并优化调休，将对公众生活与休假体验带来哪些改变？](https://www.zhihu.com/question/2099697728552952000)
1. [仰望 U9Xtreme 将挑战更高极速，国产纯电超跑冲击 500km/h 大关有哪些技术看点？](https://www.zhihu.com/question/2100545408288175000)
1. [如何评价《心动的信号6》侯卓成杨汝晴官宣分手?](https://www.zhihu.com/question/2100021921895208400)
1. [金饰年内每克跌近 550 元，30 克手镯一天就能亏 800元，为什么有人说黄金抄底比登天还难？](https://www.zhihu.com/question/2100190289180861200)
1. [为什么我们会同情文学里的失败者，却常常看不起现实中同样失败的人？](https://www.zhihu.com/question/2075743262611187500)
1. [早餐如何做得简单还营养饱腹？？](https://www.zhihu.com/question/2046883441933817000)
1. [有哪些不同词语或词根同一个音译名其实八竿子打不着?](https://www.zhihu.com/question/1936896942329278500)
1. [为什么有些人工作能力很强，却始终找不到适合自己的职业方向？](https://www.zhihu.com/question/2092339336964583700)
1. [家里两个男孩，老小介意捡哥哥的旧衣服穿，心生不满，该怎么安抚和引导？](https://www.zhihu.com/question/2056373448641926400)
1. [为何AI短剧好像放弃了清宫戏，而更倾向于唐/宋/架空朝代？跟观众偏好、技术、选题、价值观有啥关系吗？](https://www.zhihu.com/question/2100281204884731600)
1. [《影之刃零》能复刻《黑神话：悟空》的千万级销量神话吗？](https://www.zhihu.com/question/2098861445219985200)
1. [庆功宴上，领导表扬你一句后夹起一块鱼给你，说：“鱼是好鱼，就是刺多”，你该如何高情商地回答？](https://www.zhihu.com/question/2099783520373756700)
1. [中国首次载人登月时，航天员走出舱门后的第一句话适合说什么？](https://www.zhihu.com/question/2099962739854669800)
1. [央行、金融监管总局、证监会召开座谈会，研究推动支持资本市场工具使用，这次含金量和9.24比能到几成？](https://www.zhihu.com/question/2100255430828103000)
1. [柬埔寨电诈园区转到非洲，主要从事网恋、加密货币及虚假投资诈骗，为什么会转移地点？海外出行需要注意什么？](https://www.zhihu.com/question/2100488722936328400)
1. [岳不群是一开始就是坏人还是中途变坏？](https://www.zhihu.com/question/597388955)
1. [孩子主动和我说，不想拿第一名，只想做中等舒服的人，我该怎么办？](https://www.zhihu.com/question/2098060428395991600)
1. [如何评价明日方舟SideStory 《时间啊，向前！》活动剧情？](https://www.zhihu.com/question/2100403413968339700)
1. [《影之刃零》为什么要做出打完boss直接进入下一章并会导致前面任务全部失败的设计？](https://www.zhihu.com/question/2100025998196603000)
1. [德国30多城爆发抗议，抗议高昂生活成本并要求改善教育，本次席卷欧洲抗议浪潮影响有多大？可能会如何收尾？](https://www.zhihu.com/question/2100276778795099400)
1. [为什么英雄联盟解说在提 Kanavi 时感觉有很强情绪，这是什么原因？](https://www.zhihu.com/question/2100132578984289300)
1. [你认为特朗普和共和党能赢下今年的中期选举吗？](https://www.zhihu.com/question/2008641759798894800)
1. [为什么在中国，很多人认为中国球员踢不好球是因为太有钱了？](https://www.zhihu.com/question/2064955425045353000)
1. [热播剧《小城良方》中用甲硝唑磨粉吸进鼻子治鼻炎被质疑，甲硝唑粉真的能治鼻炎吗？可能会有哪些风险？](https://www.zhihu.com/question/2099543121717454300)
1. [全球平板出货量同比下降 12.3%，平板还有必要每年发布新款吗？为啥平板越来越难卖了？](https://www.zhihu.com/question/2098132006286487600)
1. [影之刃零公布销量，发售72小时全平台突破400万份，想知道这个数据算卖的好吗？](https://www.zhihu.com/question/2100531782424715800)
1. [DeepSeek 主打性价比而 Kimi 瞄准高价，这种定价分歧反映出怎样的商业逻辑？](https://www.zhihu.com/question/2099804149479223300)
1. [红果日活1.68亿，AI短剧一集可能只赚一块钱，对此你怎么看？AI短剧为何不赚钱？](https://www.zhihu.com/question/2098854103598239700)
1. [巴菲特天天吃麦当劳还喝那么多可乐为何还那么长寿？](https://www.zhihu.com/question/279093295)
1. [如何评价崩坏星穹铁道4.6混沌回忆——物竞天择？](https://www.zhihu.com/question/2100479905368641800)
1. [关羽轻慢孙权，导致孙刘联盟破裂，失去荆州自己被杀，那是咎由自取，凭什么把这个怪在孙权身上？](https://www.zhihu.com/question/2089123100776470000)
1. [孩子嫌我管得太多，我该放手还是继续坚持规则？](https://www.zhihu.com/question/2093947699401962500)
1. [假如10年前张琳芃和郜林能够留洋，对他们个人、还有国足会有什么影响？](https://www.zhihu.com/question/2097008572282554400)
1. [职场中遇到喜欢挑拨离间的人如何应对最好？](https://www.zhihu.com/question/2095841775118181400)
1. [作为家长，你会允许孩子接受别人家给的零食或饭菜吗？](https://www.zhihu.com/question/2079132333660181200)
1. [如何看待鸿蒙智行五界2026年10月销量合计33537辆？五界是否能生存下去？](https://www.zhihu.com/question/2100246281591510500)
1. [如何评价比亚迪 10 月新能源汽车销量 49.02 万辆，海外销量翻倍？横向对比这一销量属于什么水平？](https://www.zhihu.com/question/2100317442232644400)
1. [江苏多地物业引入巡逻机器人「一台抵 5 个保安」，这会成为未来趋势吗？](https://www.zhihu.com/question/2099653516453328600)
1. [鲁迅在《孔乙己》中写民国的普通打工人傍午就下班，下班后喝黄酒，吃盐煮笋、茴香豆是否符合历史？](https://www.zhihu.com/question/2100159022481532200)
1. [如何评价山东东营80后男子用枯枝搭建巨型齐天大圣走红？为什么这件私人创作能引发这么大共鸣？](https://www.zhihu.com/question/2098799350503699500)
1. [怎么看百度搜索降价千次4.9元，这是针对 DeepSeek 搜索的千次 5 元吗？](https://www.zhihu.com/question/2099967799934314000)
1. [你知道的最冷的冷知识是什么？](https://www.zhihu.com/question/51459956)
1. [如何评价懂车帝MPV爬坡测试视频？](https://www.zhihu.com/question/2099981621046859000)
1. [外媒称《影之刃零》后期难度太低甚至初见杀最终 Boss，如何评价该难度设计？](https://www.zhihu.com/question/2098056295370711800)
1. [如何评价 2026 年 10 月小米汽车交付量超过 50000 台？](https://www.zhihu.com/question/2100160196362385000)
1. [三连冠选手 Gumayusi 生涯首次无缘 S 赛八强，如何评价他本届赛事的表现？](https://www.zhihu.com/question/2100140951066894300)
1. [法国爆发第三轮抗议活动，抗议人数从55万降至32万，是意味着这轮社会抗议正在降温吗？抗议还会持续多久？](https://www.zhihu.com/question/2100178342901020000)
1. [怎么看 Anthropic IPO 前夕被黑石评为“垃圾级”？](https://www.zhihu.com/question/2100203992827557600)
1. [几百年后的人看现在，会不会觉得内燃机是人类在汽车制造上的一条弯路?](https://www.zhihu.com/question/14858801086)
1. [自媒体博主称苹果Duo中国版偷工减料，取消了卫星通信、UWB等组件，是真的吗？使用体验会受到影响吗？](https://www.zhihu.com/question/2100124169555764700)
1. [奥特曼称 OpenAI 内部新模型让他兴奋到两晚没睡，这意味着什么？](https://www.zhihu.com/question/2099437165495300600)
1. [我国宣布派遣三名航天员登月，那么他们登上月球后应该说一句什么话才能在历史书上压倒阿姆斯特朗那句话呢？](https://www.zhihu.com/question/2100177964231149300)
1. [41 岁 C 罗距职业生涯千球仅差 15 球，这一纪录对世界足坛意味着什么？](https://www.zhihu.com/question/2099769633012200000)
1. [南京一男子在星巴克不消费占座，被店员提醒后反报警，经调解后离开门店，怎样看待这一行为？](https://www.zhihu.com/question/2099542758293877200)
1. [如何看待钓友钓58斤青鱼被拖入3米水中，仍紧握鱼竿被连人带鱼救起？你钓鱼时印象最深刻的经历是怎样的？](https://www.zhihu.com/question/2099138301290443000)
1. [现货黄金跌至一年低点，白银跌破 50 美元，贵金属这波大跌是什么原因？](https://www.zhihu.com/question/2099792854877058300)
1. [如何看待王子璇和文吉儿的关系？](https://www.zhihu.com/question/2099506436925548300)
1. [四川华蓥大摆荡致1名16岁游客死亡调查报告公布，2名责任人已移送司法机关处理，哪些信息值得关注？](https://www.zhihu.com/question/2099965221775173400)
1. [DeepSeek4.1Pro迟迟不发布的原因有哪些？](https://www.zhihu.com/question/2099909586245399600)
1. [如何快速分辨出一个人是否善良？](https://www.zhihu.com/question/511919341)
1. [Anthropic 账面亏损 807 亿美元却冲刺 2 万亿IPO，背后的原因是什么？](https://www.zhihu.com/question/2099683580964352500)
1. [如何评价《星布谷地》公测前瞻特别节目？](https://www.zhihu.com/question/2096909622519001300)
1. [如何评价第43届物理竞赛决赛？](https://www.zhihu.com/question/7704826101)
1. [985和211之间学生的水平差距有多大？](https://www.zhihu.com/question/654524433)
1. [如何评价《原神》2026年11月1日更新的幻想真境剧诗（水雷岩）？](https://www.zhihu.com/question/2100109742731538400)

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
<!-- 最后更新时间 Tue Nov 03 2026 01:13:17 GMT+0800 (China Standard Time) -->

1. [习近平指示进一步做好黄河保护治理](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%8C%87%E7%A4%BA%E8%BF%9B%E4%B8%80%E6%AD%A5%E5%81%9A%E5%A5%BD%E9%BB%84%E6%B2%B3%E4%BF%9D%E6%8A%A4%E6%B2%BB%E7%90%86%23&Refer=new_time)
1. [新华社追问国乒男队怎么了](https://s.weibo.com//weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E8%BF%BD%E9%97%AE%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E6%80%8E%E4%B9%88%E4%BA%86%23&t=31&band_rank=1&Refer=top)
1. [2027或是最舒服年](https://s.weibo.com//weibo?q=%232027%E6%88%96%E6%98%AF%E6%9C%80%E8%88%92%E6%9C%8D%E5%B9%B4%23&t=31&band_rank=2&Refer=top)
1. [在乌镇峰会提前体验未来](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E4%B9%8C%E9%95%87%E5%B3%B0%E4%BC%9A%E6%8F%90%E5%89%8D%E4%BD%93%E9%AA%8C%E6%9C%AA%E6%9D%A5%23&t=31&band_rank=3&Refer=top)
1. [文吉儿王子璇 诡异](https://s.weibo.com//weibo?q=%E6%96%87%E5%90%89%E5%84%BF%E7%8E%8B%E5%AD%90%E7%92%87%20%E8%AF%A1%E5%BC%82&t=31&band_rank=4&Refer=top)
1. [后会友期提名](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%8F%90%E5%90%8D&t=31&band_rank=5&Refer=top)
1. [马天宇仅互关评论后的杨幂](https://s.weibo.com//weibo?q=%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BB%85%E4%BA%92%E5%85%B3%E8%AF%84%E8%AE%BA%E5%90%8E%E7%9A%84%E6%9D%A8%E5%B9%82&t=31&band_rank=6&Refer=top)
1. [蔡文静父亲全程偏袒无血缘的孙子](https://s.weibo.com//weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%88%B6%E4%BA%B2%E5%85%A8%E7%A8%8B%E5%81%8F%E8%A2%92%E6%97%A0%E8%A1%80%E7%BC%98%E7%9A%84%E5%AD%99%E5%AD%90%23&t=31&band_rank=7&Refer=top)
1. [玉簟秋](https://s.weibo.com//weibo?q=%E7%8E%89%E7%B0%9F%E7%A7%8B&t=31&band_rank=8&Refer=top)
1. [红果短剧刷到天亮](https://s.weibo.com//weibo?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%88%B7%E5%88%B0%E5%A4%A9%E4%BA%AE&t=31&band_rank=9&Refer=top)
1. [超20万人看了一场假乒乓球比赛](https://s.weibo.com//weibo?q=%23%E8%B6%8520%E4%B8%87%E4%BA%BA%E7%9C%8B%E4%BA%86%E4%B8%80%E5%9C%BA%E5%81%87%E4%B9%92%E4%B9%93%E7%90%83%E6%AF%94%E8%B5%9B%23&t=31&band_rank=10&Refer=top)
1. [张雪重庆大学开价被学生嫌弃](https://s.weibo.com//weibo?q=%E5%BC%A0%E9%9B%AA%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%BC%80%E4%BB%B7%E8%A2%AB%E5%AD%A6%E7%94%9F%E5%AB%8C%E5%BC%83&t=31&band_rank=11&Refer=top)
1. [瑞幸新联名放真人被吐槽](https://s.weibo.com//weibo?q=%E7%91%9E%E5%B9%B8%E6%96%B0%E8%81%94%E5%90%8D%E6%94%BE%E7%9C%9F%E4%BA%BA%E8%A2%AB%E5%90%90%E6%A7%BD&t=31&band_rank=12&Refer=top)
1. [鲍蕾娱乐圈理财顶级天花板](https://s.weibo.com//weibo?q=%23%E9%B2%8D%E8%95%BE%E5%A8%B1%E4%B9%90%E5%9C%88%E7%90%86%E8%B4%A2%E9%A1%B6%E7%BA%A7%E5%A4%A9%E8%8A%B1%E6%9D%BF%23&t=31&band_rank=13&Refer=top)
1. [长沙烈士公园穿和服带武士刀拍照](https://s.weibo.com//weibo?q=%E9%95%BF%E6%B2%99%E7%83%88%E5%A3%AB%E5%85%AC%E5%9B%AD%E7%A9%BF%E5%92%8C%E6%9C%8D%E5%B8%A6%E6%AD%A6%E5%A3%AB%E5%88%80%E6%8B%8D%E7%85%A7&t=31&band_rank=14&Refer=top)
1. [Jennie与男伴亲密贴脸](https://s.weibo.com//weibo?q=%23Jennie%E4%B8%8E%E7%94%B7%E4%BC%B4%E4%BA%B2%E5%AF%86%E8%B4%B4%E8%84%B8%23&t=31&band_rank=15&Refer=top)
1. [青稚白小纯对摄影师发火](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E6%91%84%E5%BD%B1%E5%B8%88%E5%8F%91%E7%81%AB%23&t=31&band_rank=16&Refer=top)
1. [阚清子瘦到98斤了](https://s.weibo.com//weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%98%A6%E5%88%B098%E6%96%A4%E4%BA%86%23&t=31&band_rank=17&Refer=top)
1. [柯淳玩厉娜梗](https://s.weibo.com//weibo?q=%23%E6%9F%AF%E6%B7%B3%E7%8E%A9%E5%8E%89%E5%A8%9C%E6%A2%97%23&t=31&band_rank=18&Refer=top)
1. [美股](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1&t=31&band_rank=19&Refer=top)
1. [新娘退场摔倒新郎还在沉浸式撒娃娃](https://s.weibo.com//weibo?q=%23%E6%96%B0%E5%A8%98%E9%80%80%E5%9C%BA%E6%91%94%E5%80%92%E6%96%B0%E9%83%8E%E8%BF%98%E5%9C%A8%E6%B2%89%E6%B5%B8%E5%BC%8F%E6%92%92%E5%A8%83%E5%A8%83%23&t=31&band_rank=20&Refer=top)
1. [后会友期导演回应](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%AF%BC%E6%BC%94%E5%9B%9E%E5%BA%94%23&t=31&band_rank=21&Refer=top)
1. [蔡文静全家没人在乎她的感受](https://s.weibo.com//weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%85%A8%E5%AE%B6%E6%B2%A1%E4%BA%BA%E5%9C%A8%E4%B9%8E%E5%A5%B9%E7%9A%84%E6%84%9F%E5%8F%97%23&t=31&band_rank=22&Refer=top)
1. [芒果 我涨停了厉娜](https://s.weibo.com//weibo?q=%E8%8A%92%E6%9E%9C%20%E6%88%91%E6%B6%A8%E5%81%9C%E4%BA%86%E5%8E%89%E5%A8%9C&t=31&band_rank=23&Refer=top)
1. [8岁女孩课间被同学冲撞至脑死亡](https://s.weibo.com//weibo?q=%238%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%AF%BE%E9%97%B4%E8%A2%AB%E5%90%8C%E5%AD%A6%E5%86%B2%E6%92%9E%E8%87%B3%E8%84%91%E6%AD%BB%E4%BA%A1%23&t=31&band_rank=24&Refer=top)
1. [黄金突然上涨了](https://s.weibo.com//weibo?q=%23%E9%BB%84%E9%87%91%E7%AA%81%E7%84%B6%E4%B8%8A%E6%B6%A8%E4%BA%86%23&t=31&band_rank=25&Refer=top)
1. [荆轲刺秦王监控视频](https://s.weibo.com//weibo?q=%E8%8D%86%E8%BD%B2%E5%88%BA%E7%A7%A6%E7%8E%8B%E7%9B%91%E6%8E%A7%E8%A7%86%E9%A2%91&t=31&band_rank=26&Refer=top)
1. [陆毅家大部分钱应该都是鲍蕾赚的吧](https://s.weibo.com//weibo?q=%23%E9%99%86%E6%AF%85%E5%AE%B6%E5%A4%A7%E9%83%A8%E5%88%86%E9%92%B1%E5%BA%94%E8%AF%A5%E9%83%BD%E6%98%AF%E9%B2%8D%E8%95%BE%E8%B5%9A%E7%9A%84%E5%90%A7%23&t=31&band_rank=27&Refer=top)
1. [迪丽热巴黄明昊 从前有只鲸](https://s.weibo.com//weibo?q=%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%BB%84%E6%98%8E%E6%98%8A%20%E4%BB%8E%E5%89%8D%E6%9C%89%E5%8F%AA%E9%B2%B8&t=31&band_rank=28&Refer=top)
1. [唐宣宗被谋弑添新证](https://s.weibo.com//weibo?q=%23%E5%94%90%E5%AE%A3%E5%AE%97%E8%A2%AB%E8%B0%8B%E5%BC%91%E6%B7%BB%E6%96%B0%E8%AF%81%23&t=31&band_rank=29&Refer=top)
1. [今年WTT高级别赛事国乒男单仅1冠](https://s.weibo.com//weibo?q=%23%E4%BB%8A%E5%B9%B4WTT%E9%AB%98%E7%BA%A7%E5%88%AB%E8%B5%9B%E4%BA%8B%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E4%BB%851%E5%86%A0%23&t=31&band_rank=30&Refer=top)
1. [瓶子解说言论涉及JDG与AG](https://s.weibo.com//weibo?q=%E7%93%B6%E5%AD%90%E8%A7%A3%E8%AF%B4%E8%A8%80%E8%AE%BA%E6%B6%89%E5%8F%8AJDG%E4%B8%8EAG&t=31&band_rank=31&Refer=top)
1. [喜欢买黄金的人天塌了](https://s.weibo.com//weibo?q=%E5%96%9C%E6%AC%A2%E4%B9%B0%E9%BB%84%E9%87%91%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86&t=31&band_rank=32&Refer=top)
1. [许飞吴昕十点出发十点醒](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%90%B4%E6%98%95%E5%8D%81%E7%82%B9%E5%87%BA%E5%8F%91%E5%8D%81%E7%82%B9%E9%86%92%23&t=31&band_rank=33&Refer=top)
1. [青稚40w福利](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A40w%E7%A6%8F%E5%88%A9%23&t=31&band_rank=34&Refer=top)
1. [肖战成毅广播电视精品创作大会VCR](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%88%90%E6%AF%85%E5%B9%BF%E6%92%AD%E7%94%B5%E8%A7%86%E7%B2%BE%E5%93%81%E5%88%9B%E4%BD%9C%E5%A4%A7%E4%BC%9AVCR%23&t=31&band_rank=35&Refer=top)
1. [丞磊 出圈](https://s.weibo.com//weibo?q=%E4%B8%9E%E7%A3%8A%20%E5%87%BA%E5%9C%88&t=31&band_rank=36&Refer=top)
1. [宋仲基3岁儿子都这么大了](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BB%B2%E5%9F%BA3%E5%B2%81%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23&t=31&band_rank=37&Refer=top)
1. [许飞空降回复](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E7%A9%BA%E9%99%8D%E5%9B%9E%E5%A4%8D%23&t=31&band_rank=38&Refer=top)
1. [田田小阿姨曾盗用素人照片](https://s.weibo.com//weibo?q=%23%E7%94%B0%E7%94%B0%E5%B0%8F%E9%98%BF%E5%A7%A8%E6%9B%BE%E7%9B%97%E7%94%A8%E7%B4%A0%E4%BA%BA%E7%85%A7%E7%89%87%23&t=31&band_rank=39&Refer=top)
1. [爆T1没有与多兰续约意向](https://s.weibo.com//weibo?q=%23%E7%88%86T1%E6%B2%A1%E6%9C%89%E4%B8%8E%E5%A4%9A%E5%85%B0%E7%BB%AD%E7%BA%A6%E6%84%8F%E5%90%91%23&t=31&band_rank=40&Refer=top)
1. [中年人的三件套你总得占一样](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%B8%89%E4%BB%B6%E5%A5%97%E4%BD%A0%E6%80%BB%E5%BE%97%E5%8D%A0%E4%B8%80%E6%A0%B7&t=31&band_rank=41&Refer=top)
1. [肖战作品的打分人数](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E4%BD%9C%E5%93%81%E7%9A%84%E6%89%93%E5%88%86%E4%BA%BA%E6%95%B0%23&t=31&band_rank=42&Refer=top)
1. [1113万弃奖奖金已纳入彩票公益金](https://s.weibo.com//weibo?q=%231113%E4%B8%87%E5%BC%83%E5%A5%96%E5%A5%96%E9%87%91%E5%B7%B2%E7%BA%B3%E5%85%A5%E5%BD%A9%E7%A5%A8%E5%85%AC%E7%9B%8A%E9%87%91%23&t=31&band_rank=43&Refer=top)
1. [王一博车号585致敬58号车手](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BD%A6%E5%8F%B7585%E8%87%B4%E6%95%AC58%E5%8F%B7%E8%BD%A6%E6%89%8B&t=31&band_rank=44&Refer=top)
1. [时代峰峻骂人客服被开除](https://s.weibo.com//weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AA%82%E4%BA%BA%E5%AE%A2%E6%9C%8D%E8%A2%AB%E5%BC%80%E9%99%A4%23&t=31&band_rank=45&Refer=top)
1. [恋与深空 名创优品](https://s.weibo.com//weibo?q=%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81&t=31&band_rank=46&Refer=top)
1. [刘些宁边拍刘亦菲边哭](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%9B%E5%AE%81%E8%BE%B9%E6%8B%8D%E5%88%98%E4%BA%A6%E8%8F%B2%E8%BE%B9%E5%93%AD&t=31&band_rank=47&Refer=top)
1. [王一博官宣加盟雪邦站](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%AE%98%E5%AE%A3%E5%8A%A0%E7%9B%9F%E9%9B%AA%E9%82%A6%E7%AB%99&t=31&band_rank=48&Refer=top)
1. [日本网友称中文晕碳太厉害](https://s.weibo.com//weibo?q=%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E7%A7%B0%E4%B8%AD%E6%96%87%E6%99%95%E7%A2%B3%E5%A4%AA%E5%8E%89%E5%AE%B3&t=31&band_rank=49&Refer=top)
1. [社保欠缴逾期不缴可罚1至3倍](https://s.weibo.com//weibo?q=%23%E7%A4%BE%E4%BF%9D%E6%AC%A0%E7%BC%B4%E9%80%BE%E6%9C%9F%E4%B8%8D%E7%BC%B4%E5%8F%AF%E7%BD%9A1%E8%87%B33%E5%80%8D%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
