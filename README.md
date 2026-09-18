# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-18 23:03:16

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
<!-- 最后更新时间 Sat Sep 19 2026 00:42:23 GMT+0800 (China Standard Time) -->

1. [秦始皇祖母陵墓或现世](https://so.toutiao.com/search?keyword=秦始皇祖母陵墓或现世)
1. [媒体：于东来正被自己的人设绑架](https://so.toutiao.com/search?keyword=媒体：于东来正被自己的人设绑架)
1. [平陆运河释放多重红利](https://so.toutiao.com/search?keyword=平陆运河释放多重红利)
1. [中国男篮大比分不敌日本](https://so.toutiao.com/search?keyword=中国男篮大比分不敌日本)
1. [业主买下1层4户圈占公共走廊](https://so.toutiao.com/search?keyword=业主买下1层4户圈占公共走廊)
1. [住建部：4楼及以上住宅都要加装电梯](https://so.toutiao.com/search?keyword=住建部：4楼及以上住宅都要加装电梯)
1. [人民网评罗永浩说野人先生难吃](https://so.toutiao.com/search?keyword=人民网评罗永浩说野人先生难吃)
1. [博主谈中国男篮大比分不敌日本](https://so.toutiao.com/search?keyword=博主谈中国男篮大比分不敌日本)
1. [物理学家：AI可能以巨大失望告终](https://so.toutiao.com/search?keyword=物理学家：AI可能以巨大失望告终)
1. [住建部：支持老旧房屋原拆原建](https://so.toutiao.com/search?keyword=住建部：支持老旧房屋原拆原建)
1. [绵阳一养猪场单日死亡500头猪不实](https://so.toutiao.com/search?keyword=绵阳一养猪场单日死亡500头猪不实)
1. [佟丽娅回应在董璇婚礼上表情严肃](https://so.toutiao.com/search?keyword=佟丽娅回应在董璇婚礼上表情严肃)
1. [郭士强成首位两输日本的中国男篮主帅](https://so.toutiao.com/search?keyword=郭士强成首位两输日本的中国男篮主帅)
1. [男子高空作业绳子被2楼老人剪断](https://so.toutiao.com/search?keyword=男子高空作业绳子被2楼老人剪断)
1. [菲船加速冲撞中国海警船](https://so.toutiao.com/search?keyword=菲船加速冲撞中国海警船)
1. [郭士强 不打分](https://so.toutiao.com/search?keyword=郭士强%20不打分)
1. [又一轮日本首相“保卫战”开打了](https://so.toutiao.com/search?keyword=又一轮日本首相“保卫战”开打了)
1. [猫科动物百年来首现新物种](https://so.toutiao.com/search?keyword=猫科动物百年来首现新物种)
1. [胡金秋：这场比赛准备没有对方充足](https://so.toutiao.com/search?keyword=胡金秋：这场比赛准备没有对方充足)
1. [中俄同时推翻美国对伊制裁草案](https://so.toutiao.com/search?keyword=中俄同时推翻美国对伊制裁草案)
1. [男子15万抢到10台iPhone18PM](https://so.toutiao.com/search?keyword=男子15万抢到10台iPhone18PM)
1. [小球迷看男篮输了哭到颤抖](https://so.toutiao.com/search?keyword=小球迷看男篮输了哭到颤抖)
1. [佟丽娅在发小的新疆餐厅招待鲁豫](https://so.toutiao.com/search?keyword=佟丽娅在发小的新疆餐厅招待鲁豫)
1. [美媒：全球为特朗普的历史执念买单](https://so.toutiao.com/search?keyword=美媒：全球为特朗普的历史执念买单)
1. [亚运会乒乓球抽签结果出炉](https://so.toutiao.com/search?keyword=亚运会乒乓球抽签结果出炉)
1. [长期吃腐乳到底对身体好不好](https://so.toutiao.com/search?keyword=长期吃腐乳到底对身体好不好)
1. [华源任上海市副市长](https://so.toutiao.com/search?keyword=华源任上海市副市长)
1. [李在明：特朗普金正恩数月内或会晤](https://so.toutiao.com/search?keyword=李在明：特朗普金正恩数月内或会晤)
1. [吉林出现野生东北虎“五虎同框”](https://so.toutiao.com/search?keyword=吉林出现野生东北虎“五虎同框”)
1. [心梗脑梗与哪些因素有关](https://so.toutiao.com/search?keyword=心梗脑梗与哪些因素有关)
1. [赛力斯有没有能力把问界继续卖好](https://so.toutiao.com/search?keyword=赛力斯有没有能力把问界继续卖好)
1. [路人避雨时主动帮屋主抢收被淋稻谷](https://so.toutiao.com/search?keyword=路人避雨时主动帮屋主抢收被淋稻谷)
1. [泰王自驾飞机回国边招手边拉操纵杆](https://so.toutiao.com/search?keyword=泰王自驾飞机回国边招手边拉操纵杆)
1. [中国工人为何成为蒙古外籍劳工主力](https://so.toutiao.com/search?keyword=中国工人为何成为蒙古外籍劳工主力)
1. [赛力斯的真正考验来了](https://so.toutiao.com/search?keyword=赛力斯的真正考验来了)
1. [张雪官宣签约美国名将豪斯](https://so.toutiao.com/search?keyword=张雪官宣签约美国名将豪斯)
1. [民警吃饭时偶遇违法嫌疑人](https://so.toutiao.com/search?keyword=民警吃饭时偶遇违法嫌疑人)
1. [退休民警诉讼拿下2亿物流园控股权](https://so.toutiao.com/search?keyword=退休民警诉讼拿下2亿物流园控股权)
1. [支教老师邹志鹏：这个世界需要傻子](https://so.toutiao.com/search?keyword=支教老师邹志鹏：这个世界需要傻子)
1. [平陆运河：一条改写流向的通道](https://so.toutiao.com/search?keyword=平陆运河：一条改写流向的通道)
1. [陕西发现战国晚期秦王级别墓葬](https://so.toutiao.com/search?keyword=陕西发现战国晚期秦王级别墓葬)
1. [美驻日使馆9月18日发帖让日网民破防](https://so.toutiao.com/search?keyword=美驻日使馆9月18日发帖让日网民破防)
1. [iPhone Duo散热翻车了吗](https://so.toutiao.com/search?keyword=iPhone%20Duo散热翻车了吗)
1. [唐户部尚书李承嘉墓考古成果公布](https://so.toutiao.com/search?keyword=唐户部尚书李承嘉墓考古成果公布)
1. [老兵：九一八是插在我心口的刀子](https://so.toutiao.com/search?keyword=老兵：九一八是插在我心口的刀子)
1. [官方通报长江武汉段倾倒淤泥事件](https://so.toutiao.com/search?keyword=官方通报长江武汉段倾倒淤泥事件)
1. [何小鹏：小鹏今年开始电池都自己干](https://so.toutiao.com/search?keyword=何小鹏：小鹏今年开始电池都自己干)
1. [村民称在自家地烧1平米杂草被罚500](https://so.toutiao.com/search?keyword=村民称在自家地烧1平米杂草被罚500)
1. [泰总理：中国推动世界经济发展](https://so.toutiao.com/search?keyword=泰总理：中国推动世界经济发展)
1. [黄牛称iPhone 18 Pro没人要](https://so.toutiao.com/search?keyword=黄牛称iPhone%2018%20Pro没人要)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Sep 19 2026 02:25:05 GMT+0800 (China Standard Time) -->

1. [华为高层内部万字长文曝光](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E9%AB%98%E5%B1%82%E5%86%85%E9%83%A8%E4%B8%87%E5%AD%97%E9%95%BF%E6%96%87%E6%9B%9D%E5%85%89)
1. [七旬老人冰棺复活后再度去世](https://www.zhihu.com/search?q=%E4%B8%83%E6%97%AC%E8%80%81%E4%BA%BA%E5%86%B0%E6%A3%BA%E5%A4%8D%E6%B4%BB%E5%90%8E%E5%86%8D%E5%BA%A6%E5%8E%BB%E4%B8%96)
1. [华为突破冯诺依曼单机架构](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E7%AA%81%E7%A0%B4%E5%86%AF%E8%AF%BA%E4%BE%9D%E6%9B%BC%E5%8D%95%E6%9C%BA%E6%9E%B6%E6%9E%84)
1. [网友称让郭士强下课](https://www.zhihu.com/search?q=%E7%BD%91%E5%8F%8B%E7%A7%B0%E8%AE%A9%E9%83%AD%E5%A3%AB%E5%BC%BA%E4%B8%8B%E8%AF%BE)
1. [知乎 CLI 创作者能力上新](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%20CLI%20%E5%88%9B%E4%BD%9C%E8%80%85%E8%83%BD%E5%8A%9B%E4%B8%8A%E6%96%B0)
1. [永和豆浆现黑丝洗澡内容被指擦边](https://www.zhihu.com/search?q=%E6%B0%B8%E5%92%8C%E8%B1%86%E6%B5%86%E7%8E%B0%E9%BB%91%E4%B8%9D%E6%B4%97%E6%BE%A1%E5%86%85%E5%AE%B9%E8%A2%AB%E6%8C%87%E6%93%A6%E8%BE%B9)
1. [广西孙子非亲生案鉴定机构被罚](https://www.zhihu.com/search?q=%E5%B9%BF%E8%A5%BF%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E9%89%B4%E5%AE%9A%E6%9C%BA%E6%9E%84%E8%A2%AB%E7%BD%9A)
1. [美联储宣布加息25个基点](https://www.zhihu.com/search?q=%E7%BE%8E%E8%81%94%E5%82%A8%E5%AE%A3%E5%B8%83%E5%8A%A0%E6%81%AF25%E4%B8%AA%E5%9F%BA%E7%82%B9)
1. [学生称同济大学痛经请假需脱裤检查](https://www.zhihu.com/search?q=%E5%AD%A6%E7%94%9F%E7%A7%B0%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%E7%97%9B%E7%BB%8F%E8%AF%B7%E5%81%87%E9%9C%80%E8%84%B1%E8%A3%A4%E6%A3%80%E6%9F%A5)
1. [中国男篮 77-97 日本男篮](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%2077-97%20%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE)
1. [韩国尸皮针3000元一针爆火](https://www.zhihu.com/search?q=%E9%9F%A9%E5%9B%BD%E5%B0%B8%E7%9A%AE%E9%92%883000%E5%85%83%E4%B8%80%E9%92%88%E7%88%86%E7%81%AB)
1. [DeepSeek 工程师刘胜与长文](https://www.zhihu.com/search?q=DeepSeek%20%E5%B7%A5%E7%A8%8B%E5%B8%88%E5%88%98%E8%83%9C%E4%B8%8E%E9%95%BF%E6%96%87)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Sep 18 2026 23:03:16 GMT+0800 (China Standard Time) -->

1. [姐姐姐夫答应我上大学送我电脑，现在说只给5000块钱，这应该吗？](https://www.zhihu.com/question/2083872661831263700)
1. [今年前8个月全国上线微短剧43万部，其中AI剧占比超九成，广电总局表示要大力扶持真人剧，透露哪些信号？](https://www.zhihu.com/question/2083887492047036700)
1. [更大的超级乌龙来了，亚运会曲棍球比赛，主办方将朝鲜国歌错当成韩国国歌播放，韩国计划抗议，对此你怎么看？](https://www.zhihu.com/question/2084320053546022100)
1. [亚运男篮半决赛，中国男篮 77-97 不敌日本男篮，无缘亚运会决赛，如何评价本场比赛？](https://www.zhihu.com/question/2084269010455984000)
1. [办公楼进来条蛇，我被惊吓后把它打死了，事后发现这是国家保护动物，我需要负法律责任吗？](https://www.zhihu.com/question/658116158)
1. [如何看待住房城乡建设部称「我国房地产进入存量时代」？未来房地产行业将如何发展？房价如何变化？](https://www.zhihu.com/question/2084226545174962200)
1. [睡觉时将双手举过头顶的「投降式」睡姿，其实是身体在求救，这是真的吗？会带来哪些影响？怎样的睡姿最科学？](https://www.zhihu.com/question/2083956845534605600)
1. [长江倾倒淤泥事件官方通报，称涉事企业被立案查处，11 名相关责任人被追责，哪些信息值得关注？](https://www.zhihu.com/question/2084369406054720800)
1. [人民币兑美元再破6.7，美国加息、美元走强、美债收益率上行背景下，为何人民币汇率不跌反涨？](https://www.zhihu.com/question/2084231179130164700)
1. [孙悟空为什么被压前叫“泼猴”，出来后都喊“大圣”？](https://www.zhihu.com/question/2082122467494064600)
1. [8 个月婴儿被医院注射十倍肾上腺素，这可能会对婴儿造成哪些影响？医院在治疗过程中存在哪些违规操作？](https://www.zhihu.com/question/2083231068295886000)
1. [印度媒体吐槽名古屋亚运会「要是换成印度这么干，早就被骂翻成全球丑闻了」，对此你怎么看？](https://www.zhihu.com/question/2083986747210167000)
1. [中国男篮 77-97 不敌日本男篮后，网友称让郭士强下课，如何评价这场比赛他的战术安排？真的有问题吗？](https://www.zhihu.com/question/2084379544182417000)
1. [想换车了，非常纠结换新能源还是油车，打听了几个人，也说不出特别的理由，长远来看，换油车好还是电车好？](https://www.zhihu.com/question/2076600663304319700)
1. [永和豆浆被指擦边，400 万粉授权账号播黑丝、洗澡内容，这算品牌营销的一次「翻车」吗？](https://www.zhihu.com/question/2084191863120947000)
1. [印度央行强制塔塔控股公司上市，或成印度史上最大 IPO，为什么还有强制上市的情况？](https://www.zhihu.com/question/2083879086175118000)
1. [穴居人晚上去哪里拉屎？](https://www.zhihu.com/question/511767882)
1. [佟丽娅回应离婚对儿子的影响，称儿子现在还不知道父母离婚，孩子真的感受不到吗？如何看待她直面争议的态度？](https://www.zhihu.com/question/2083239926473278000)
1. [一家三代隐居大理深山六年，大人不上班孩子不上学，这种模式对孩子有影响吗？这样的生活是理想还是代价？](https://www.zhihu.com/question/2084236089636799000)
1. [为什么生意再小，赚钱的速度都远超打工？](https://www.zhihu.com/question/1973749451853169700)
1. [中国海警回应菲船只碰撞我海警艇，正告菲方立即停止一切侵权挑衅行径，有哪些信息值得关注？](https://www.zhihu.com/question/2084284024198116600)
1. [沙特发现 1.1 亿吨稀土铀超级矿，对全球稀土及能源市场意味着什么？](https://www.zhihu.com/question/2083296809175233500)
1. [为什么有些验证码看起来很容易但是没人做自动识别的？](https://www.zhihu.com/question/35085930)
1. [潜伏中谢若琳真的爱晚秋吗？](https://www.zhihu.com/question/38363320)
1. [作为家长，如何看待孩子的不完美？](https://www.zhihu.com/question/2083466637525762800)
1. [职场上，能力强但不会来事，真的很难升职吗？](https://www.zhihu.com/question/2013645700773193000)
1. [你觉得职场中最重要的一条生存法则是什么？](https://www.zhihu.com/question/2075696277891839200)
1. [内耗的本质是什么？有什么办法可以解决这个问题吗？](https://www.zhihu.com/question/1963531355695616300)
1. [网传浙江师范大学强制新生填写父母工作单位、月收入等12项隐私信息，为啥要填这么详细？真的有必要吗？](https://www.zhihu.com/question/2083934201863202800)
1. [你见过最机智的回答是什么？](https://www.zhihu.com/question/58152053)
1. [退休副省长家丢了 243 万元茅台等名酒，管家因盗窃罪获刑10年半，哪些细节值得关注？](https://www.zhihu.com/question/2083586923906295300)
1. [如何看待华为突破冯诺依曼「单机」架构？](https://www.zhihu.com/question/2084200588892451300)
1. [如何看待「快递小哥救助摔倒老人反被索赔超 92 万」一案，终审驳回全部诉求 ？法律怎样降低救人的风险？](https://www.zhihu.com/question/2083927414493681200)
1. [义乌开始卖载人飞碟飞行器了，单笔订单卖出 1.2 亿元，离普通人还有多远？商业化还要解决哪些问题？](https://www.zhihu.com/question/2083949287025788700)
1. [名古屋亚运会用「邮轮+集装箱房」替代亚运村，巴黎奥运村极度简陋无空调，为啥如今的体育大赛越办越寒酸？](https://www.zhihu.com/question/2081790151865406500)
1. [曝甲醛白菜的博主渔猎齐哥再曝广东清远「硫磺竹笋」，当地发布通报称情况属实，哪些信息值得关注？](https://www.zhihu.com/question/2084183379600204500)
1. [很多老师称现在批改作业不能用×，要换成◯、△，是为了保护学生吗？真的有用吗？打×本身有问题吗？](https://www.zhihu.com/question/2083585452137608200)
1. [媒体称美国大模型已被日本错误历史观污染，有哪些信息值得关注？](https://www.zhihu.com/question/2084003052877341200)
1. [粉笔公考发小作文「谁是公考培训界的良心」，自曝一比一模仿友商课程并怒批友商「哭穷卖惨」，如何评价？](https://www.zhihu.com/question/2083960930673620700)
1. [2026 软科世界一流学科排名公布，中国内地高校在 22 个学科排名世界第一，还有哪些信息值得关注？](https://www.zhihu.com/question/2083189535622391600)
1. [都说雄性激素会让毛囊萎缩导致脱发，那为什么同样激素水平，有的人秃顶，有的人却发量浓密？](https://www.zhihu.com/question/2083906822814094800)
1. [特斯拉为什么坚持不用激光雷达，只靠纯视觉方案？](https://www.zhihu.com/question/2082750927564546000)
1. [在职场，某部门或科室要搞分组化管理，现有刘备、曹操、孙权三种风格的领导让你选，你愿意跟随谁？为什么？](https://www.zhihu.com/question/2038681483498484000)
1. [外媒曝新一任 007 詹姆斯·邦德 6 人演员候选名单，符合你的预期吗？有没有更好的人选？](https://www.zhihu.com/question/2076309744126358000)
1. [全球陷入「抢钨大战」，两年时间价格上涨了约 9 倍，为啥会疯涨？钨这种稀有金属的战略价值体现在哪里？](https://www.zhihu.com/question/2082873227517359000)
1. [台式机八大件中，寿命最长和最短的分别是哪个？](https://www.zhihu.com/question/2083229152661063400)
1. [于东来建议给家人花钱不超 3 成收入，呼吁员工「为自己而活」，如何看待这一观点？](https://www.zhihu.com/question/2083920000126022100)
1. [为什么麦当劳在中国不如肯德基？](https://www.zhihu.com/question/644485856)
1. [宇树科技大涨重回500元，总市值重返2000亿元，当下是触底反弹还是下跌中继？谁在500元下方接盘？](https://www.zhihu.com/question/2083975165638198800)
1. [TES 拿下 LPL 三号种子席位挺进 S16，如何评价他们本次季后赛表现？](https://www.zhihu.com/question/2084039837368193300)
1. [很多人说「不能以中国标准看其他国家办大赛」，但办好比赛不是东道主该做的吗，为什么好像全世界都在草台化？](https://www.zhihu.com/question/2083895446393418800)
1. [如何评价名古屋亚运会的奖牌设计，以及其理念「破碎与重组」？](https://www.zhihu.com/question/2084228827564045000)
1. [如何评价《原神》官方确认9月「深境螺旋」11层中「陆巡舰」、「愚人众特辖队」存在BUG？](https://www.zhihu.com/question/2084212809433403600)
1. [美股三大指数全线收涨，纳指涨1.69%，半导体狂飙，英特尔涨7.67%，科技股集体上涨，如何解读？](https://www.zhihu.com/question/2084205403479302700)
1. [「西方伪史论」中的谣言的源头在哪？是如何传播开来的？](https://www.zhihu.com/question/2080359293014864400)
1. [古代真的能女扮男装吗？](https://www.zhihu.com/question/416947758)
1. [如何评价许晴在花少2中崩溃的表现？](https://www.zhihu.com/question/31074500)
1. [没有背景，不喜欢谄媚，只靠对科研的一腔热情，在学术道路上能走远吗？](https://www.zhihu.com/question/15615079657)
1. [《火焰纹章：万缕千丝》获IGN10分评价，你认为这是火纹最好的一代吗？](https://www.zhihu.com/question/2083653713638461700)
1. [金庸为何对杨佩佩工作室魔改的98版神雕侠侣深恶痛绝？](https://www.zhihu.com/question/2046574955551257900)
1. [如何看待 GPT-6-Astra 刷新信息学竞赛题复杂度记录？](https://www.zhihu.com/question/2083930184395372300)
1. [如何看待 985 高校带头扩招，部分高校新生突破2万人，部分高校研究生人数超过本科生？](https://www.zhihu.com/question/2083954330625954600)
1. [如何看待 HYROX 失禁选手就北京赛场事件道歉，决定追溯性退出该场比赛，并放弃此前获得的积分？](https://www.zhihu.com/question/2084022859974665700)
1. [学生称同济大学痛经请假需脱裤检查，校医院称检查由医生视情况决定，学校有权这么做吗？有更好解决办法吗？](https://www.zhihu.com/question/2083967193939538000)
1. [日本亚运会住宿条件遭吐槽，真实情况如何？原因是什么？](https://www.zhihu.com/question/2082122351093798100)
1. [如何看待在医学降分的背景下，继续扩大医学生招生培养规模？](https://www.zhihu.com/question/2082939253642864400)
1. [南京博物院引发关注的画作中，仍有 1 幅下落不明，可能去哪儿了？还能追回来吗？](https://www.zhihu.com/question/2083638521164554500)
1. [广电总局表示，将机顶盒功能以软件形态内置于电视机，会对行业带来哪些变化？能解决看电视麻烦的问题吗？](https://www.zhihu.com/question/2083865288337011000)
1. [「一点点」否认威胁员工家人，「提着牛奶上门，当时沟通进展顺利」，哪些信息值得关注？](https://www.zhihu.com/question/2083942767869309700)
1. [家从来都不是讲道理的地方，而是讲爱的地方，你认同这种说法吗？](https://www.zhihu.com/question/2082586378999747000)
1. [教父的政治资源只属于教父一人，并不属于柯里昂家族，所以柯里昂家族是不是很脆弱？](https://www.zhihu.com/question/11915255459)
1. [如果存在一个100%深海覆盖的海洋星球，对人类来说会不会非常恐怖？里面会发展出什么生命吗？](https://www.zhihu.com/question/2083246063851411000)
1. [为什么同样白天，地球上是一片明亮，而外太空却是添黑一片？](https://www.zhihu.com/question/2031983569594233900)
1. [我有学历，有经验，但是迟迟得不到晋升，该怎么办呢？](https://www.zhihu.com/question/2044385183705588500)
1. [有哪些演员让你觉得第一眼惊为天人，后面觉得很普通，甚至怪怪的？](https://www.zhihu.com/question/1932799403552383200)
1. [一个十四岁的孩子，总是对父母的引导表现出不屑一顾，有人知道作为父母该怎样教导孩子吗？](https://www.zhihu.com/question/2071953028593333000)
1. [张一鸣身家突破 1050 亿美元首次成亚洲首富，如何评价其商业成就？](https://www.zhihu.com/question/2083595578223637000)
1. [坠亡幼童父亲举报妻子发布的视频侵犯其肖像权，他有权这么做吗？](https://www.zhihu.com/question/2083944607859959600)
1. [一照相馆设体重要求，仅接受 120 斤以下客户预订，因 「部分顾客常要求过度修图」，如何看待这一规定？](https://www.zhihu.com/question/2083133384671368400)
1. [辽宁葫芦岛一校多名学生出现呕吐症状，初步判断为食堂烹饪加工食品不当，引发胃肠炎，有哪些信息值得关注？](https://www.zhihu.com/question/2083930281480643300)
1. [百度搜索为什么没落了？](https://www.zhihu.com/question/2020203409219809500)
1. [美联储宣布加息 25 个基点，时隔三年再度加息，对全球经济有哪些影响？全球资产价格会有怎样的连锁反应？](https://www.zhihu.com/question/2083741444628656600)
1. [一样的父母一样的教，大儿子考上好大学，小儿子却染了黄头发，为什么会有这么大差别？](https://www.zhihu.com/question/2078776197551481000)
1. [项羽出卖曹无伤，是不是短视？](https://www.zhihu.com/question/2082414688810317800)
1. [为什么我国现在的中学生抑郁症越来越多？](https://www.zhihu.com/question/438664248)
1. [如果只能在上海待一天，有什么美食值得推荐？](https://www.zhihu.com/question/311147503)
1. [电影《神探之痕迹》定档10月1日上映，张译主演，根据《中国神探——共和国刑警崔道植》改编，你有何期待？](https://www.zhihu.com/question/2083495616315746000)
1. [你走过最值得复刻的一条访古路线是什么？](https://www.zhihu.com/question/2082927800147600100)
1. [如果你离职了，还会联系以前的领导吗？](https://www.zhihu.com/question/2082647957770446800)
1. [LPL 2026 赛季资格赛TES 3-1 iG，如何评价这场比赛？](https://www.zhihu.com/question/2083952279225423400)
1. [国乒、国羽、中国体操队被困名古屋机场，现场只提供水无食品，为什么会这样？暴露出亚运会组织方的哪些问题？](https://www.zhihu.com/question/2083719036232324000)
1. [AI已经有解决千禧年数学难题的能力，在读基础数学博士应该怎么办？](https://www.zhihu.com/question/2082915493397140000)
1. [如何看待前 OpenAI 研究员发布的新模型「Jev」 ？这类模型会成为 Agent 的新技术路线吗？](https://www.zhihu.com/question/2083549123160926000)
1. [苏轼在黄州如此凄惨，为何还很快乐？](https://www.zhihu.com/question/8344602403)
1. [为什么「翻篇是人生最重要的能力之一」？面对不愿放下的过往，人们该如何自处？](https://www.zhihu.com/question/2081544594639082500)
1. [全新理想 i9 今晚发布，有哪些技术亮点？预计销量如何？](https://www.zhihu.com/question/2083527375418146800)
1. [有没有好吃的美食推荐呀？](https://www.zhihu.com/question/1897098395644036000)
1. [如何评价《原神》沃雅妮莎角色PV——「心之声」？](https://www.zhihu.com/question/2083888246304552200)
1. [名古屋亚运会邮轮选手村接船仪式上日方演员扮演丰臣秀吉，引发韩国某大学徐姓教授写邮件抗议，对此你怎么看？](https://www.zhihu.com/question/2083920518969647600)
1. [报告显示 72% 的成年人未达饮用水适宜摄入量，水没喝够会对身体产生啥影响？该怎样正确喝水？](https://www.zhihu.com/question/2083121786422387500)
1. [为什么宝可梦没有出现类似其他回合制游戏那样的“小作文”式技能描述？](https://www.zhihu.com/question/2082918898869985300)
1. [你最喜欢的一种红薯吃法是怎么做的？](https://www.zhihu.com/question/10896580492)
1. [你最想体验文学史上哪个作家的人生？](https://www.zhihu.com/question/2074566645792744700)
1. [怎样才能不懦弱，不被别人欺负？](https://www.zhihu.com/question/659541156)
1. [如何评价《三角洲行动》S11 赛季的钓鱼玩法？](https://www.zhihu.com/question/2080670964275044600)
1. [亚运女子板球1/4决赛场地积水取消，中国队世界排名低于对手被判负，一场未打结束亚运征程，这规则合理吗？](https://www.zhihu.com/question/2083894090341377300)
1. [这次亚运会，中国男足能拿奖牌吗？](https://www.zhihu.com/question/2082012854706778400)
1. [伊朗单日击落 3 架美军 MQ-1 无人机，美军密集出动同一侦察机，想获取什么情报？还是试探伊朗防空？](https://www.zhihu.com/question/2083344144982980600)
1. [钟薛高宣布重启，推出三种口味，零售价最低跌到 6.9 元一支，你看好钟薛高这次「复活」吗？](https://www.zhihu.com/question/2083299849705715000)

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
<!-- 最后更新时间 Sat Sep 19 2026 00:33:01 GMT+0800 (China Standard Time) -->

1. [大力弘扬伟大抗战精神](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E5%8A%9B%E5%BC%98%E6%89%AC%E4%BC%9F%E5%A4%A7%E6%8A%97%E6%88%98%E7%B2%BE%E7%A5%9E%23&Refer=new_time)
1. [中国的小偷为何断崖式下降](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E7%9A%84%E5%B0%8F%E5%81%B7%E4%B8%BA%E4%BD%95%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E9%99%8D&t=31&band_rank=1&Refer=top)
1. [法考成绩](https://s.weibo.com//weibo?q=%E6%B3%95%E8%80%83%E6%88%90%E7%BB%A9&t=31&band_rank=2&Refer=top)
1. [斑驳旧物铭刻90多年前不屈抗争](https://s.weibo.com//weibo?q=%23%E6%96%91%E9%A9%B3%E6%97%A7%E7%89%A9%E9%93%AD%E5%88%BB90%E5%A4%9A%E5%B9%B4%E5%89%8D%E4%B8%8D%E5%B1%88%E6%8A%97%E4%BA%89%23&t=31&band_rank=3&Refer=top)
1. [郑合惠子没有感情全是演技](https://s.weibo.com//weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E6%B2%A1%E6%9C%89%E6%84%9F%E6%83%85%E5%85%A8%E6%98%AF%E6%BC%94%E6%8A%80%23&t=31&band_rank=4&Refer=top)
1. [菲船加速冲撞中国海警船现场视频](https://s.weibo.com//weibo?q=%23%E8%8F%B2%E8%88%B9%E5%8A%A0%E9%80%9F%E5%86%B2%E6%92%9E%E4%B8%AD%E5%9B%BD%E6%B5%B7%E8%AD%A6%E8%88%B9%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%23&t=31&band_rank=5&Refer=top)
1. [韩国选手听到朝鲜国歌集体慌乱](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%80%89%E6%89%8B%E5%90%AC%E5%88%B0%E6%9C%9D%E9%B2%9C%E5%9B%BD%E6%AD%8C%E9%9B%86%E4%BD%93%E6%85%8C%E4%B9%B1%23&t=31&band_rank=6&Refer=top)
1. [杨毅谈男篮不敌日本](https://s.weibo.com//weibo?q=%E6%9D%A8%E6%AF%85%E8%B0%88%E7%94%B7%E7%AF%AE%E4%B8%8D%E6%95%8C%E6%97%A5%E6%9C%AC&t=31&band_rank=7&Refer=top)
1. [学医果然什么事都能遇到](https://s.weibo.com//weibo?q=%E5%AD%A6%E5%8C%BB%E6%9E%9C%E7%84%B6%E4%BB%80%E4%B9%88%E4%BA%8B%E9%83%BD%E8%83%BD%E9%81%87%E5%88%B0&t=31&band_rank=8&Refer=top)
1. [郑合惠子演技好牛](https://s.weibo.com//weibo?q=%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E6%BC%94%E6%8A%80%E5%A5%BD%E7%89%9B&t=31&band_rank=9&Refer=top)
1. [美使馆918发帖日本网民破防](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E4%BD%BF%E9%A6%86918%E5%8F%91%E5%B8%96%E6%97%A5%E6%9C%AC%E7%BD%91%E6%B0%91%E7%A0%B4%E9%98%B2%23&t=31&band_rank=10&Refer=top)
1. [中国男篮惨败被日本球员嘲讽](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E6%83%A8%E8%B4%A5%E8%A2%AB%E6%97%A5%E6%9C%AC%E7%90%83%E5%91%98%E5%98%B2%E8%AE%BD%23&t=31&band_rank=11&Refer=top)
1. [池昌旭林珍娜太拼了吧](https://s.weibo.com//weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%9E%97%E7%8F%8D%E5%A8%9C%E5%A4%AA%E6%8B%BC%E4%BA%86%E5%90%A7%23&t=31&band_rank=12&Refer=top)
1. [郭士强 下课](https://s.weibo.com//weibo?q=%E9%83%AD%E5%A3%AB%E5%BC%BA%20%E4%B8%8B%E8%AF%BE&t=31&band_rank=13&Refer=top)
1. [卢昱晓的脾气](https://s.weibo.com//weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%9A%84%E8%84%BE%E6%B0%94%23&t=31&band_rank=14&Refer=top)
1. [兰香如故能否成为下一个知否](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%83%BD%E5%90%A6%E6%88%90%E4%B8%BA%E4%B8%8B%E4%B8%80%E4%B8%AA%E7%9F%A5%E5%90%A6%23&t=31&band_rank=15&Refer=top)
1. [中国男篮vs日本男篮](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE&t=31&band_rank=16&Refer=top)
1. [外国人称鹿晗本可统治KPOP](https://s.weibo.com//weibo?q=%E5%A4%96%E5%9B%BD%E4%BA%BA%E7%A7%B0%E9%B9%BF%E6%99%97%E6%9C%AC%E5%8F%AF%E7%BB%9F%E6%B2%BBKPOP&t=31&band_rank=17&Refer=top)
1. [本届亚运会混乱程度](https://s.weibo.com//weibo?q=%E6%9C%AC%E5%B1%8A%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B7%B7%E4%B9%B1%E7%A8%8B%E5%BA%A6&t=31&band_rank=18&Refer=top)
1. [湖南卫视连发20条王鹤棣](https://s.weibo.com//weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E8%BF%9E%E5%8F%9120%E6%9D%A1%E7%8E%8B%E9%B9%A4%E6%A3%A3%23&t=31&band_rank=19&Refer=top)
1. [华为赛力斯问界归属变动](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E8%B5%9B%E5%8A%9B%E6%96%AF%E9%97%AE%E7%95%8C%E5%BD%92%E5%B1%9E%E5%8F%98%E5%8A%A8&t=31&band_rank=20&Refer=top)
1. [挑情丑闻](https://s.weibo.com//weibo?q=%E6%8C%91%E6%83%85%E4%B8%91%E9%97%BB&t=31&band_rank=21&Refer=top)
1. [好清醒的顶级认知](https://s.weibo.com//weibo?q=%E5%A5%BD%E6%B8%85%E9%86%92%E7%9A%84%E9%A1%B6%E7%BA%A7%E8%AE%A4%E7%9F%A5&t=31&band_rank=22&Refer=top)
1. [女子称失踪闺蜜托梦暗示尸骸位置](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%A4%B1%E8%B8%AA%E9%97%BA%E8%9C%9C%E6%89%98%E6%A2%A6%E6%9A%97%E7%A4%BA%E5%B0%B8%E9%AA%B8%E4%BD%8D%E7%BD%AE%23&t=31&band_rank=23&Refer=top)
1. [iPhone17Pro和18Pro外观对比](https://s.weibo.com//weibo?q=%23iPhone17Pro%E5%92%8C18Pro%E5%A4%96%E8%A7%82%E5%AF%B9%E6%AF%94%23&t=31&band_rank=24&Refer=top)
1. [女子吐槽吃魏家凉皮牛肉堡像喝油](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E5%90%83%E9%AD%8F%E5%AE%B6%E5%87%89%E7%9A%AE%E7%89%9B%E8%82%89%E5%A0%A1%E5%83%8F%E5%96%9D%E6%B2%B9%23&t=31&band_rank=25&Refer=top)
1. [池昌旭林珍娜吻戏](https://s.weibo.com//weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%9E%97%E7%8F%8D%E5%A8%9C%E5%90%BB%E6%88%8F%23&t=31&band_rank=26&Refer=top)
1. [原来这就叫感官过载啊](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E5%8F%AB%E6%84%9F%E5%AE%98%E8%BF%87%E8%BD%BD%E5%95%8A%23&t=31&band_rank=27&Refer=top)
1. [人民网评罗永浩说野人先生难吃](https://s.weibo.com//weibo?q=%23%E4%BA%BA%E6%B0%91%E7%BD%91%E8%AF%84%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E9%9A%BE%E5%90%83%23&t=31&band_rank=28&Refer=top)
1. [王鹤棣考古视频连发](https://s.weibo.com//weibo?q=%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%80%83%E5%8F%A4%E8%A7%86%E9%A2%91%E8%BF%9E%E5%8F%91&t=31&band_rank=29&Refer=top)
1. [愿意停下来的才是聪明人](https://s.weibo.com//weibo?q=%E6%84%BF%E6%84%8F%E5%81%9C%E4%B8%8B%E6%9D%A5%E7%9A%84%E6%89%8D%E6%98%AF%E8%81%AA%E6%98%8E%E4%BA%BA&t=31&band_rank=30&Refer=top)
1. [法考](https://s.weibo.com//weibo?q=%E6%B3%95%E8%80%83&t=31&band_rank=31&Refer=top)
1. [杜翠雀活到了最后](https://s.weibo.com//weibo?q=%23%E6%9D%9C%E7%BF%A0%E9%9B%80%E6%B4%BB%E5%88%B0%E4%BA%86%E6%9C%80%E5%90%8E%23&t=31&band_rank=32&Refer=top)
1. [原广东省政府参事谈罗永浩吐槽](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E5%B9%BF%E4%B8%9C%E7%9C%81%E6%94%BF%E5%BA%9C%E5%8F%82%E4%BA%8B%E8%B0%88%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%90%90%E6%A7%BD%23&t=31&band_rank=33&Refer=top)
1. [谭松韵收着演](https://s.weibo.com//weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%94%B6%E7%9D%80%E6%BC%94%23&t=31&band_rank=34&Refer=top)
1. [贾国龙西贝焖面开业4个月倒闭了](https://s.weibo.com//weibo?q=%23%E8%B4%BE%E5%9B%BD%E9%BE%99%E8%A5%BF%E8%B4%9D%E7%84%96%E9%9D%A2%E5%BC%80%E4%B8%9A4%E4%B8%AA%E6%9C%88%E5%80%92%E9%97%AD%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [WE全员回应无缘S16](https://s.weibo.com//weibo?q=%23WE%E5%85%A8%E5%91%98%E5%9B%9E%E5%BA%94%E6%97%A0%E7%BC%98S16%23&t=31&band_rank=36&Refer=top)
1. [亲子鉴定 医保](https://s.weibo.com//weibo?q=%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%20%E5%8C%BB%E4%BF%9D&t=31&band_rank=37&Refer=top)
1. [联合早报](https://s.weibo.com//weibo?q=%E8%81%94%E5%90%88%E6%97%A9%E6%8A%A5&t=31&band_rank=38&Refer=top)
1. [男子高空作业绳子被2楼老人剪断](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E9%AB%98%E7%A9%BA%E4%BD%9C%E4%B8%9A%E7%BB%B3%E5%AD%90%E8%A2%AB2%E6%A5%BC%E8%80%81%E4%BA%BA%E5%89%AA%E6%96%AD%23&t=31&band_rank=39&Refer=top)
1. [郭士强成首位两输日本的中国男篮主帅](https://s.weibo.com//weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%E6%88%90%E9%A6%96%E4%BD%8D%E4%B8%A4%E8%BE%93%E6%97%A5%E6%9C%AC%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E4%B8%BB%E5%B8%85%23&t=31&band_rank=40&Refer=top)
1. [吃芒果真的是一件很私密的事](https://s.weibo.com//weibo?q=%E5%90%83%E8%8A%92%E6%9E%9C%E7%9C%9F%E7%9A%84%E6%98%AF%E4%B8%80%E4%BB%B6%E5%BE%88%E7%A7%81%E5%AF%86%E7%9A%84%E4%BA%8B&t=31&band_rank=41&Refer=top)
1. [佟丽娅首谈离婚真相](https://s.weibo.com//weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E9%A6%96%E8%B0%88%E7%A6%BB%E5%A9%9A%E7%9C%9F%E7%9B%B8%23&t=31&band_rank=42&Refer=top)
1. [湖北通报长江武汉段倾倒淤泥事件](https://s.weibo.com//weibo?q=%23%E6%B9%96%E5%8C%97%E9%80%9A%E6%8A%A5%E9%95%BF%E6%B1%9F%E6%AD%A6%E6%B1%89%E6%AE%B5%E5%80%BE%E5%80%92%E6%B7%A4%E6%B3%A5%E4%BA%8B%E4%BB%B6%23&t=31&band_rank=43&Refer=top)
1. [兰香如故数据倒挂](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%95%B0%E6%8D%AE%E5%80%92%E6%8C%82&t=31&band_rank=44&Refer=top)
1. [中国男篮回应不敌日本队](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E6%97%A5%E6%9C%AC%E9%98%9F%23&t=31&band_rank=45&Refer=top)
1. [曝何瑞贤有孩子了](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E4%BD%95%E7%91%9E%E8%B4%A4%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [卢昱晓发自拍被骂只会萌萌的道歉](https://s.weibo.com//weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%8F%91%E8%87%AA%E6%8B%8D%E8%A2%AB%E9%AA%82%E5%8F%AA%E4%BC%9A%E8%90%8C%E8%90%8C%E7%9A%84%E9%81%93%E6%AD%89%23&t=31&band_rank=47&Refer=top)
1. [乔尔杰维奇 郭士强](https://s.weibo.com//weibo?q=%E4%B9%94%E5%B0%94%E6%9D%B0%E7%BB%B4%E5%A5%87%20%E9%83%AD%E5%A3%AB%E5%BC%BA&t=31&band_rank=48&Refer=top)
1. [花少8 无聊](https://s.weibo.com//weibo?q=%E8%8A%B1%E5%B0%918%20%E6%97%A0%E8%81%8A&t=31&band_rank=49&Refer=top)
1. [日本男篮仅2人入选世预赛名单](https://s.weibo.com//weibo?q=%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%E4%BB%852%E4%BA%BA%E5%85%A5%E9%80%89%E4%B8%96%E9%A2%84%E8%B5%9B%E5%90%8D%E5%8D%95&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
