# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-06 10:28:06

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
<!-- 最后更新时间 Fri Nov 06 2026 06:14:34 GMT+0800 (China Standard Time) -->

1. [参保人数减少8300万？医保局回应](https://so.toutiao.com/search?keyword=参保人数减少8300万？医保局回应)
1. [普京签令临时接管日本烟草在俄工厂](https://so.toutiao.com/search?keyword=普京签令临时接管日本烟草在俄工厂)
1. [世界互联网大会乌镇峰会今天闭幕](https://so.toutiao.com/search?keyword=世界互联网大会乌镇峰会今天闭幕)
1. [阔直板手机为什么火了](https://so.toutiao.com/search?keyword=阔直板手机为什么火了)
1. [北京中小学将全部取消外送餐](https://so.toutiao.com/search?keyword=北京中小学将全部取消外送餐)
1. [独生子女不一定能继承父母全部遗产](https://so.toutiao.com/search?keyword=独生子女不一定能继承父母全部遗产)
1. [小学招跟岗教师 无薪资不包食宿](https://so.toutiao.com/search?keyword=小学招跟岗教师%20无薪资不包食宿)
1. [黄之锋再获刑10年](https://so.toutiao.com/search?keyword=黄之锋再获刑10年)
1. [AI短剧为何几乎没有清宫戏](https://so.toutiao.com/search?keyword=AI短剧为何几乎没有清宫戏)
1. [春节连休9天](https://so.toutiao.com/search?keyword=春节连休9天)
1. [青少年短视频成瘾9大真相](https://so.toutiao.com/search?keyword=青少年短视频成瘾9大真相)
1. [刘晓庆发文称被人算计](https://so.toutiao.com/search?keyword=刘晓庆发文称被人算计)
1. [男星袁成杰成老赖 曾与戚薇搭档组合](https://so.toutiao.com/search?keyword=男星袁成杰成老赖%20曾与戚薇搭档组合)
1. [女子称应聘医院岗位被要求上交丝袜](https://so.toutiao.com/search?keyword=女子称应聘医院岗位被要求上交丝袜)
1. [老婆怀胎5个月陪丈夫捡土豆](https://so.toutiao.com/search?keyword=老婆怀胎5个月陪丈夫捡土豆)
1. [C罗告别信全文](https://so.toutiao.com/search?keyword=C罗告别信全文)
1. [大家都不接陌生电话是不是好事](https://so.toutiao.com/search?keyword=大家都不接陌生电话是不是好事)
1. [长期吃大豆的好处有哪些](https://so.toutiao.com/search?keyword=长期吃大豆的好处有哪些)
1. [外卖员拍照送达后连踩外卖好几脚](https://so.toutiao.com/search?keyword=外卖员拍照送达后连踩外卖好几脚)
1. [外方飞行员看到运-20一脸不可思议](https://so.toutiao.com/search?keyword=外方飞行员看到运-20一脸不可思议)
1. [德国籍中医专程来墓碑抄药方带回](https://so.toutiao.com/search?keyword=德国籍中医专程来墓碑抄药方带回)
1. [厉娜：不会再和许飞做朋友](https://so.toutiao.com/search?keyword=厉娜：不会再和许飞做朋友)
1. [伊朗议长回应万斯：美国就像赌徒](https://so.toutiao.com/search?keyword=伊朗议长回应万斯：美国就像赌徒)
1. [马兴瑞被提起公诉](https://so.toutiao.com/search?keyword=马兴瑞被提起公诉)
1. [医生：每天吃个蛋好过营养粉](https://so.toutiao.com/search?keyword=医生：每天吃个蛋好过营养粉)
1. [若房地产支柱地位难以为继谁能接棒](https://so.toutiao.com/search?keyword=若房地产支柱地位难以为继谁能接棒)
1. [2027年放假安排](https://so.toutiao.com/search?keyword=2027年放假安排)
1. [印度自研盾构机难度有多大](https://so.toutiao.com/search?keyword=印度自研盾构机难度有多大)
1. [比亚迪第二代海豹07上市](https://so.toutiao.com/search?keyword=比亚迪第二代海豹07上市)
1. [A股放量反弹能走多远](https://so.toutiao.com/search?keyword=A股放量反弹能走多远)
1. [80岁老中医转三趟车到墓碑寻药方](https://so.toutiao.com/search?keyword=80岁老中医转三趟车到墓碑寻药方)
1. [2027年没有超长工作周](https://so.toutiao.com/search?keyword=2027年没有超长工作周)
1. [厕所偷拍者不乏高知人群、公司高管](https://so.toutiao.com/search?keyword=厕所偷拍者不乏高知人群、公司高管)
1. [52岁吴彦祖在公园和大伯大妈一起健身](https://so.toutiao.com/search?keyword=52岁吴彦祖在公园和大伯大妈一起健身)
1. [医生建议骑电动车戴全盔头盔出行](https://so.toutiao.com/search?keyword=医生建议骑电动车戴全盔头盔出行)
1. [胡塞“狮子大开口”](https://so.toutiao.com/search?keyword=胡塞“狮子大开口”)
1. [日本或将允许核武器入境](https://so.toutiao.com/search?keyword=日本或将允许核武器入境)
1. [55岁女教师用爱挽救下轻生男子](https://so.toutiao.com/search?keyword=55岁女教师用爱挽救下轻生男子)
1. [东风-61亮相不到一年已常态参训](https://so.toutiao.com/search?keyword=东风-61亮相不到一年已常态参训)
1. [菲律宾对华政策失序意味着什么](https://so.toutiao.com/search?keyword=菲律宾对华政策失序意味着什么)
1. [丰田销量下滑为何却上调利润预期](https://so.toutiao.com/search?keyword=丰田销量下滑为何却上调利润预期)
1. [一键计算27年拼假方案](https://so.toutiao.com/search?keyword=一键计算27年拼假方案)
1. [金价站上4100美元 跌势反转了吗](https://so.toutiao.com/search?keyword=金价站上4100美元%20跌势反转了吗)
1. [石齐平：APEC峰会大概率将不同于以往](https://so.toutiao.com/search?keyword=石齐平：APEC峰会大概率将不同于以往)
1. [存储巨头闪迪将于两周后拆股](https://so.toutiao.com/search?keyword=存储巨头闪迪将于两周后拆股)
1. [张朝阳：算法推荐容易让人越看越窄](https://so.toutiao.com/search?keyword=张朝阳：算法推荐容易让人越看越窄)
1. [越南高铁为何实现不了商业闭环](https://so.toutiao.com/search?keyword=越南高铁为何实现不了商业闭环)
1. [C罗国家队退役：成败兴亡一刹那](https://so.toutiao.com/search?keyword=C罗国家队退役：成败兴亡一刹那)
1. [黄渤谈父母患老年痴呆](https://so.toutiao.com/search?keyword=黄渤谈父母患老年痴呆)
1. [为什么建议老年人练点力量](https://so.toutiao.com/search?keyword=为什么建议老年人练点力量)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Nov 06 2026 10:22:27 GMT+0800 (China Standard Time) -->

1. [BLG 3:0 淘汰DK](https://www.zhihu.com/search?q=BLG%203%3A0%20%E6%B7%98%E6%B1%B0DK)
1. [美股暴跌遭抛售潮](https://www.zhihu.com/search?q=%E7%BE%8E%E8%82%A1%E6%9A%B4%E8%B7%8C%E9%81%AD%E6%8A%9B%E5%94%AE%E6%BD%AE)
1. [张雪重庆大学开价被学生嫌弃](https://www.zhihu.com/search?q=%E5%BC%A0%E9%9B%AA%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%BC%80%E4%BB%B7%E8%A2%AB%E5%AD%A6%E7%94%9F%E5%AB%8C%E5%BC%83)
1. [王楚钦0-3温瑞博](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A60-3%E6%B8%A9%E7%91%9E%E5%8D%9A)
1. [马斯克称别逼我买下微软](https://www.zhihu.com/search?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E5%88%AB%E9%80%BC%E6%88%91%E4%B9%B0%E4%B8%8B%E5%BE%AE%E8%BD%AF)
1. [南京大学抬头率](https://www.zhihu.com/search?q=%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%8A%AC%E5%A4%B4%E7%8E%87)
1. [特朗普被指全面惨败](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E6%8C%87%E5%85%A8%E9%9D%A2%E6%83%A8%E8%B4%A5)
1. [C 罗宣布从国家队退役](https://www.zhihu.com/search?q=C%20%E7%BD%97%E5%AE%A3%E5%B8%83%E4%BB%8E%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%80%80%E5%BD%B9)
1. [王子璇说不想跟文吉儿做朋友了](https://www.zhihu.com/search?q=%E7%8E%8B%E5%AD%90%E7%92%87%E8%AF%B4%E4%B8%8D%E6%83%B3%E8%B7%9F%E6%96%87%E5%90%89%E5%84%BF%E5%81%9A%E6%9C%8B%E5%8F%8B%E4%BA%86)
1. [红果短剧处理两万部低质短剧](https://www.zhihu.com/search?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%A4%84%E7%90%86%E4%B8%A4%E4%B8%87%E9%83%A8%E4%BD%8E%E8%B4%A8%E7%9F%AD%E5%89%A7)
1. [反中乱港分子黄之锋再获刑10年](https://www.zhihu.com/search?q=%E5%8F%8D%E4%B8%AD%E4%B9%B1%E6%B8%AF%E5%88%86%E5%AD%90%E9%BB%84%E4%B9%8B%E9%94%8B%E5%86%8D%E8%8E%B7%E5%88%9110%E5%B9%B4)
1. [抖音副总裁李亮发文怼秦朔](https://www.zhihu.com/search?q=%E6%8A%96%E9%9F%B3%E5%89%AF%E6%80%BB%E8%A3%81%E6%9D%8E%E4%BA%AE%E5%8F%91%E6%96%87%E6%80%BC%E7%A7%A6%E6%9C%94)
1. [陕西发生重大刑案嫌疑人持刀在逃](https://www.zhihu.com/search?q=%E9%99%95%E8%A5%BF%E5%8F%91%E7%94%9F%E9%87%8D%E5%A4%A7%E5%88%91%E6%A1%88%E5%AB%8C%E7%96%91%E4%BA%BA%E6%8C%81%E5%88%80%E5%9C%A8%E9%80%83)
1. [副教授白保国去世留下绝笔信](https://www.zhihu.com/search?q=%E5%89%AF%E6%95%99%E6%8E%88%E7%99%BD%E4%BF%9D%E5%9B%BD%E5%8E%BB%E4%B8%96%E7%95%99%E4%B8%8B%E7%BB%9D%E7%AC%94%E4%BF%A1)
1. [字节时间论战](https://www.zhihu.com/search?q=%E5%AD%97%E8%8A%82%E6%97%B6%E9%97%B4%E8%AE%BA%E6%88%98)
1. [九寨沟景区内打人事件](https://www.zhihu.com/search?q=%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%99%AF%E5%8C%BA%E5%86%85%E6%89%93%E4%BA%BA%E4%BA%8B%E4%BB%B6)
1. [GEN 晋级四强](https://www.zhihu.com/search?q=GEN%20%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA)
1. [张雪：不能逼我把应届生工资提到20万](https://www.zhihu.com/search?q=%E5%BC%A0%E9%9B%AA%EF%BC%9A%E4%B8%8D%E8%83%BD%E9%80%BC%E6%88%91%E6%8A%8A%E5%BA%94%E5%B1%8A%E7%94%9F%E5%B7%A5%E8%B5%84%E6%8F%90%E5%88%B020%E4%B8%87)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Nov 06 2026 10:28:06 GMT+0800 (China Standard Time) -->

1. [美股创 19 个月来最大单日跌幅、纳指暴跌5.52%，科技股遭遇抛售潮，引发市场恐慌的核心原因是什么？](https://www.zhihu.com/question/2101831171671904300)
1. [S16 淘汰赛 BLG 3:0 淘汰 DK 晋级四强，如何评价这场比赛？](https://www.zhihu.com/question/2101903871006224600)
1. [大学生身挂 11 部手机无偿代跑校园跑，被查后独自扛下处分不供出同学，这算真义气还是真违规？](https://www.zhihu.com/question/2101612544959969000)
1. [如何看待 TheShy 谈及回归原因「曾许诺 iG 老板有困难联系我，队伍掉入涅槃后我必须信守承诺」？](https://www.zhihu.com/question/2101640171577766100)
1. [月薪8000，同事天天点星巴克下午茶，我却连奶茶都舍不得喝，这种消费观差距正常吗？该怎么调整心态？](https://www.zhihu.com/question/1924412537547513900)
1. [2026WTT法兰克福冠军赛，王楚钦 0-3 温瑞博，无缘男单八强，如何评价本场比赛？](https://www.zhihu.com/question/2101860214341383200)
1. [如何看待北京交通大学官方表态，雄安校区已被明确为学校的唯一主校区？](https://www.zhihu.com/question/2101691958401971200)
1. [太原一小学招「跟岗教师」无薪资食宿、备用上岗，要求本科有教资，人社局回应肯定不对，为什么会有这种形式？](https://www.zhihu.com/question/2101704167924541200)
1. [中国有没有那种中国人不怎么去，但是外国人却很喜欢去的古迹?](https://www.zhihu.com/question/2098824135749194500)
1. [研究称穿袜子睡觉可缩短入睡时间 7.5 分钟，是真的吗？背后的原理是啥？](https://www.zhihu.com/question/2101025509043696400)
1. [美国多州州长拟暂停审批 AI 数据中心，将对算力基建产生哪些连锁反应？](https://www.zhihu.com/question/2101356243331840000)
1. [广东拟规定电话手表、手机等智能终端不得入校，你支持这样的规定吗？实际落地可能会遇到哪些问题？](https://www.zhihu.com/question/2101652985285712000)
1. [如何看待当年大陆追台湾偶像剧，到如今台湾追大陆红果短剧的变化？](https://www.zhihu.com/question/2101429214150910200)
1. [独居养猫后为什么感觉失去了自由？](https://www.zhihu.com/question/2000509193875132700)
1. [东北最大煤制天然气项目正式投产，煤炭将被转化成天然气，煤制气是如何做到的？会是未来的发展方向吗？](https://www.zhihu.com/question/2100904326705296600)
1. [有消息称 Anthropic IPO 已被取消，媒体称消息并不可靠，到底怎么回事？被取消可能性有多大？](https://www.zhihu.com/question/2101338491275535400)
1. [美股史诗级暴跌，单日蒸发约 2.8 万亿美元，AI 产业链集体崩盘，是单纯监管预期利空还是大行情拐点？](https://www.zhihu.com/question/2101822062662886700)
1. [曝 DeepSeek V5 将采用华为昇腾 950 芯片作为核心训练算力，这意味着什么？](https://www.zhihu.com/question/2100918856617288400)
1. [张雪自掏 30 万给公司首席发动机工程师买房，要求只能写员工自己名字，如何看待这一举措？](https://www.zhihu.com/question/2101708093352682000)
1. [电影《教父》好在哪里？](https://www.zhihu.com/question/20136523)
1. [2026 年美国中期选举的结果，可能会怎样影响 2028 年总统大选？](https://www.zhihu.com/question/2099524198938801400)
1. [如何评价《一人之下》第783（838）话？](https://www.zhihu.com/question/2101833012962922800)
1. [怎么看待「字节时间」争议？短视频、微短剧靠算法抢夺注意力，只靠我们自己自律够吗？](https://www.zhihu.com/question/2100646272281601000)
1. [如果要在《西游记》的猪八戒、孙悟空、唐僧和沙和尚四人组中选一位当领导，你愿意跟随谁？为啥？](https://www.zhihu.com/question/2084329691708486000)
1. [如何评价综艺《后会友期》第四期？](https://www.zhihu.com/question/2101650373576319700)
1. [杭州骨灰撒钱塘江已有八百余户报名，符合条件的还能领两千元补贴，如何看待这一服务？会影响生态环境吗？](https://www.zhihu.com/question/2101418619233989000)
1. [女子分段买票升一等座因车厢重联不通只能站着，12306 称不退差价无补偿合理吗？](https://www.zhihu.com/question/2101237959244699400)
1. [怎么看待张萌称马天宇越过她找她老公道歉，成了十年心结？找异性朋友的对象沟通，为什么会让对方感到不尊重？](https://www.zhihu.com/question/2101675858259698400)
1. [为什么美国大多数是木质房屋，而不使用既耐烧又环保的钢制或者砖混的房屋？](https://www.zhihu.com/question/11807348860)
1. [日本政府考虑在紧急情况下引进核武器，将对亚太安全局势产生哪些影响？](https://www.zhihu.com/question/2101729167503110700)
1. [C罗官宣从葡萄牙国家队正式退役，如何评价此事，他为何会选择在此时退役？](https://www.zhihu.com/question/2101742566919992300)
1. [反中乱港分子黄之锋再判 10 年，哪些信息值得关注？带来哪些警示？](https://www.zhihu.com/question/2101651157710128400)
1. [冯远征认为 AI 短剧里的角色长相完美，却让人看完就忘，「因为角色没有呼吸」，你同意此观点吗？](https://www.zhihu.com/question/2101279300045338400)
1. [钱德勒·帕森斯吐槽中国品牌球鞋「给钱多，但鞋太烂，我受伤绝对跟这有关系」，这算实话实说，还是吃饭砸锅？](https://www.zhihu.com/question/2101352581674919200)
1. [淘宝闪购上线「家宴」高端外卖项目，引进米其林品牌，高端外卖市场大吗？](https://www.zhihu.com/question/2101619797695754500)
1. [小伙200多万买14套房年收租21万，成功实现30岁退休，这是怎么做到的？会涉及交税问题吗？](https://www.zhihu.com/question/2101275943104951600)
1. [「AI教父」辛顿警告，今明两年就有可能发生人工智能领域的切尔诺贝利事故，可能是什么情况？存在哪些隐患？](https://www.zhihu.com/question/2101374444023146500)
1. [商鞅为什么要用徙木立信来建立百姓对官府的信任，这对第一次变法顺利推行有什么作用？](https://www.zhihu.com/question/2084935519646102800)
1. [比利时等欧洲八国超市遭黑客攻击，冷柜升至 50℃，是谁发动的攻击？会成为新型网络战手段吗？该如何防范？](https://www.zhihu.com/question/2100889432480139000)
1. [如何评价最近的币安黑客事件？](https://www.zhihu.com/question/2099429988240048400)
1. [巴菲特称已 48 年不喝水只喝可乐，是真的吗？健康吗？如何从医学角度看待这一饮食习惯？](https://www.zhihu.com/question/2100626480447370500)
1. [患者被三甲医院医生推荐去三乙医院，花费2万多元又被告知治不了只退四千元，这是什么套路？暴露出什么问题？](https://www.zhihu.com/question/2101364650180700200)
1. [特朗普宣布将停止每年约 40 亿美元对以色列援助，背后原因是什么？将对美以关系和中东局势产生什么影响？](https://www.zhihu.com/question/2101246252964918000)
1. [天津商业局计划「探索承接 F1 赛事」，这个计划靠谱吗，F1 未来可能增加新的中国站吗？](https://www.zhihu.com/question/2101323240136078600)
1. [如何看待《后会友期》里的白小纯和青稚？](https://www.zhihu.com/question/2100528359084243000)
1. [马斯克豪掷4.45亿美元押注共和党却失利，特斯拉、SpaceX应声下挫，接下来会面临怎样的监管压力？](https://www.zhihu.com/question/2101388537237084200)
1. [加州翻红和得州翻蓝哪个更严重？](https://www.zhihu.com/question/3191819627)
1. [柯洁在围棋界是怎样的地位？](https://www.zhihu.com/question/1938751849441268700)
1. [你身边有适合跟你一起上《后会友期》的朋友吗，说说你们的故事？](https://www.zhihu.com/question/2100576328038572300)
1. [如何看待华为擎云 HM650系列实现 100%产品元器件国产化率，首款鸿蒙台式机对政企市场意味着什么？](https://www.zhihu.com/question/2101037387820418600)
1. [央行 11 月 15 日起上调外汇存款准备金率至 6%，释放怎样的调控信号？会影响人民币对美元走势吗？](https://www.zhihu.com/question/2100891242536100000)
1. [去美国打工还是去澳洲搬砖？](https://www.zhihu.com/question/1974780566747498000)
1. [《影之刃零》这种 “一键美化连招” 的设计，算不算动作游戏界的美图秀秀？是创新还是虚假的操作爽感？](https://www.zhihu.com/question/2101273701798958800)
1. [2026年寒假的《林冲：风雪山神庙》，能给追光这几年的票房连续扑街止损吗？](https://www.zhihu.com/question/2100211825757442800)

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
<!-- 最后更新时间 Fri Nov 06 2026 06:07:14 GMT+0800 (China Standard Time) -->

1. [五中全会精神学习手册请查收](https://s.weibo.com//weibo?q=%23%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%E7%B2%BE%E7%A5%9E%E5%AD%A6%E4%B9%A0%E6%89%8B%E5%86%8C%E8%AF%B7%E6%9F%A5%E6%94%B6%23&Refer=new_time)
1. [美股](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1&t=31&band_rank=1&Refer=top)
1. [曝白小纯天早期天霸工资](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%A4%A9%E6%97%A9%E6%9C%9F%E5%A4%A9%E9%9C%B8%E5%B7%A5%E8%B5%84%23&t=31&band_rank=2&Refer=top)
1. [我国秋粮收获已过9成](https://s.weibo.com//weibo?q=%23%E6%88%91%E5%9B%BD%E7%A7%8B%E7%B2%AE%E6%94%B6%E8%8E%B7%E5%B7%B2%E8%BF%879%E6%88%90%23&t=31&band_rank=3&Refer=top)
1. [王子璇手机是被收走的](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%89%8B%E6%9C%BA%E6%98%AF%E8%A2%AB%E6%94%B6%E8%B5%B0%E7%9A%84%23&t=31&band_rank=4&Refer=top)
1. [官方回应居民医保参保人数下降](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%B1%85%E6%B0%91%E5%8C%BB%E4%BF%9D%E5%8F%82%E4%BF%9D%E4%BA%BA%E6%95%B0%E4%B8%8B%E9%99%8D%23&t=31&band_rank=5&Refer=top)
1. [黄渤因阿尔兹海默遗传风险恐惧多年](https://s.weibo.com//weibo?q=%23%E9%BB%84%E6%B8%A4%E5%9B%A0%E9%98%BF%E5%B0%94%E5%85%B9%E6%B5%B7%E9%BB%98%E9%81%97%E4%BC%A0%E9%A3%8E%E9%99%A9%E6%81%90%E6%83%A7%E5%A4%9A%E5%B9%B4%23&t=31&band_rank=6&Refer=top)
1. [袁成杰被列为失信被执行人](https://s.weibo.com//weibo?q=%23%E8%A2%81%E6%88%90%E6%9D%B0%E8%A2%AB%E5%88%97%E4%B8%BA%E5%A4%B1%E4%BF%A1%E8%A2%AB%E6%89%A7%E8%A1%8C%E4%BA%BA%23&t=31&band_rank=7&Refer=top)
1. [美股存储光通信板块重挫](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1%E5%AD%98%E5%82%A8%E5%85%89%E9%80%9A%E4%BF%A1%E6%9D%BF%E5%9D%97%E9%87%8D%E6%8C%AB&t=31&band_rank=8&Refer=top)
1. [朋友为八个被扔蛋黄讨公道](https://s.weibo.com//weibo?q=%E6%9C%8B%E5%8F%8B%E4%B8%BA%E5%85%AB%E4%B8%AA%E8%A2%AB%E6%89%94%E8%9B%8B%E9%BB%84%E8%AE%A8%E5%85%AC%E9%81%93&t=31&band_rank=9&Refer=top)
1. [无薪招聘](https://s.weibo.com//weibo?q=%E6%97%A0%E8%96%AA%E6%8B%9B%E8%81%98&t=31&band_rank=10&Refer=top)
1. [王子璇走心发言疑似预制](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E8%B5%B0%E5%BF%83%E5%8F%91%E8%A8%80%E7%96%91%E4%BC%BC%E9%A2%84%E5%88%B6%23&t=31&band_rank=11&Refer=top)
1. [孟子义说张萌美颜参数有点大](https://s.weibo.com//weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E5%BC%A0%E8%90%8C%E7%BE%8E%E9%A2%9C%E5%8F%82%E6%95%B0%E6%9C%89%E7%82%B9%E5%A4%A7%23&t=31&band_rank=12&Refer=top)
1. [电竞男这两位闹翻了](https://s.weibo.com//weibo?q=%E7%94%B5%E7%AB%9E%E7%94%B7%E8%BF%99%E4%B8%A4%E4%BD%8D%E9%97%B9%E7%BF%BB%E4%BA%86&t=31&band_rank=13&Refer=top)
1. [王一博又从瓜田路过](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%8F%88%E4%BB%8E%E7%93%9C%E7%94%B0%E8%B7%AF%E8%BF%87%23&t=31&band_rank=14&Refer=top)
1. [蔡天凤案法医披露烹煮头颅细节](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E6%A1%88%E6%B3%95%E5%8C%BB%E6%8A%AB%E9%9C%B2%E7%83%B9%E7%85%AE%E5%A4%B4%E9%A2%85%E7%BB%86%E8%8A%82%23&t=31&band_rank=15&Refer=top)
1. [普京签署法令接管日本烟草在俄资产](https://s.weibo.com//weibo?q=%23%E6%99%AE%E4%BA%AC%E7%AD%BE%E7%BD%B2%E6%B3%95%E4%BB%A4%E6%8E%A5%E7%AE%A1%E6%97%A5%E6%9C%AC%E7%83%9F%E8%8D%89%E5%9C%A8%E4%BF%84%E8%B5%84%E4%BA%A7%23&t=31&band_rank=16&Refer=top)
1. [端午中秋各1天假](https://s.weibo.com//weibo?q=%23%E7%AB%AF%E5%8D%88%E4%B8%AD%E7%A7%8B%E5%90%841%E5%A4%A9%E5%81%87%23&t=31&band_rank=17&Refer=top)
1. [人社局回应小学无薪酬招跟岗教师](https://s.weibo.com//weibo?q=%23%E4%BA%BA%E7%A4%BE%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%AD%A6%E6%97%A0%E8%96%AA%E9%85%AC%E6%8B%9B%E8%B7%9F%E5%B2%97%E6%95%99%E5%B8%88%23&t=31&band_rank=18&Refer=top)
1. [美股AI硬件股大跌](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1AI%E7%A1%AC%E4%BB%B6%E8%82%A1%E5%A4%A7%E8%B7%8C&t=31&band_rank=19&Refer=top)
1. [达喀尔青奥会](https://s.weibo.com//weibo?q=%E8%BE%BE%E5%96%80%E5%B0%94%E9%9D%92%E5%A5%A5%E4%BC%9A&t=31&band_rank=20&Refer=top)
1. [北京旅游笑话经久不衰](https://s.weibo.com//weibo?q=%E5%8C%97%E4%BA%AC%E6%97%85%E6%B8%B8%E7%AC%91%E8%AF%9D%E7%BB%8F%E4%B9%85%E4%B8%8D%E8%A1%B0&t=31&band_rank=21&Refer=top)
1. [二十多年好友穿吊带谁受得了](https://s.weibo.com//weibo?q=%E4%BA%8C%E5%8D%81%E5%A4%9A%E5%B9%B4%E5%A5%BD%E5%8F%8B%E7%A9%BF%E5%90%8A%E5%B8%A6%E8%B0%81%E5%8F%97%E5%BE%97%E4%BA%86&t=31&band_rank=22&Refer=top)
1. [林珍娜认为与TOP的恋情没有错](https://s.weibo.com//weibo?q=%23%E6%9E%97%E7%8F%8D%E5%A8%9C%E8%AE%A4%E4%B8%BA%E4%B8%8ETOP%E7%9A%84%E6%81%8B%E6%83%85%E6%B2%A1%E6%9C%89%E9%94%99%23&t=31&band_rank=23&Refer=top)
1. [众球星致敬C罗](https://s.weibo.com//weibo?q=%23%E4%BC%97%E7%90%83%E6%98%9F%E8%87%B4%E6%95%ACC%E7%BD%97%23&t=31&band_rank=24&Refer=top)
1. [许飞全平台实名上网](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%85%A8%E5%B9%B3%E5%8F%B0%E5%AE%9E%E5%90%8D%E4%B8%8A%E7%BD%91%23&t=31&band_rank=25&Refer=top)
1. [卢昱晓折月亮开播口碑](https://s.weibo.com//weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%8A%98%E6%9C%88%E4%BA%AE%E5%BC%80%E6%92%AD%E5%8F%A3%E7%A2%91%23&t=31&band_rank=26&Refer=top)
1. [卵巢癌70%的患者生存时间不超5年](https://s.weibo.com//weibo?q=%23%E5%8D%B5%E5%B7%A2%E7%99%8C70%25%E7%9A%84%E6%82%A3%E8%80%85%E7%94%9F%E5%AD%98%E6%97%B6%E9%97%B4%E4%B8%8D%E8%B6%855%E5%B9%B4%23&t=31&band_rank=27&Refer=top)
1. [PEL解说聊白小纯帮青稚挡酒](https://s.weibo.com//weibo?q=%23PEL%E8%A7%A3%E8%AF%B4%E8%81%8A%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%B8%AE%E9%9D%92%E7%A8%9A%E6%8C%A1%E9%85%92%23&t=31&band_rank=28&Refer=top)
1. [但斌回应重仓AI回撤大](https://s.weibo.com//weibo?q=%E4%BD%86%E6%96%8C%E5%9B%9E%E5%BA%94%E9%87%8D%E4%BB%93AI%E5%9B%9E%E6%92%A4%E5%A4%A7&t=31&band_rank=29&Refer=top)
1. [女子厕所当场抓住同事偷拍浑身发抖](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8E%95%E6%89%80%E5%BD%93%E5%9C%BA%E6%8A%93%E4%BD%8F%E5%90%8C%E4%BA%8B%E5%81%B7%E6%8B%8D%E6%B5%91%E8%BA%AB%E5%8F%91%E6%8A%96%23&t=31&band_rank=30&Refer=top)
1. [司马缸砸光的珍贵监控视频](https://s.weibo.com//weibo?q=%E5%8F%B8%E9%A9%AC%E7%BC%B8%E7%A0%B8%E5%85%89%E7%9A%84%E7%8F%8D%E8%B4%B5%E7%9B%91%E6%8E%A7%E8%A7%86%E9%A2%91&t=31&band_rank=31&Refer=top)
1. [3个日常习惯是血糖波动的元凶](https://s.weibo.com//weibo?q=%233%E4%B8%AA%E6%97%A5%E5%B8%B8%E4%B9%A0%E6%83%AF%E6%98%AF%E8%A1%80%E7%B3%96%E6%B3%A2%E5%8A%A8%E7%9A%84%E5%85%83%E5%87%B6%23&t=31&band_rank=32&Refer=top)
1. [肖战就这样戏约不断](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%B0%B1%E8%BF%99%E6%A0%B7%E6%88%8F%E7%BA%A6%E4%B8%8D%E6%96%AD%23&t=31&band_rank=33&Refer=top)
1. [真正在意就不喊宝贝了](https://s.weibo.com//weibo?q=%E7%9C%9F%E6%AD%A3%E5%9C%A8%E6%84%8F%E5%B0%B1%E4%B8%8D%E5%96%8A%E5%AE%9D%E8%B4%9D%E4%BA%86&t=31&band_rank=34&Refer=top)
1. [苹果触屏笔记本有点尴尬](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%E8%A7%A6%E5%B1%8F%E7%AC%94%E8%AE%B0%E6%9C%AC%E6%9C%89%E7%82%B9%E5%B0%B4%E5%B0%AC&t=31&band_rank=35&Refer=top)
1. [阿尔兹海默症遗传概率6到8成](https://s.weibo.com//weibo?q=%23%E9%98%BF%E5%B0%94%E5%85%B9%E6%B5%B7%E9%BB%98%E7%97%87%E9%81%97%E4%BC%A0%E6%A6%82%E7%8E%876%E5%88%B08%E6%88%90%23&t=31&band_rank=36&Refer=top)
1. [美股开盘纳指大跌728点](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1%E5%BC%80%E7%9B%98%E7%BA%B3%E6%8C%87%E5%A4%A7%E8%B7%8C728%E7%82%B9&t=31&band_rank=37&Refer=top)
1. [白小纯青稚排名比较](https://s.weibo.com//weibo?q=%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E6%8E%92%E5%90%8D%E6%AF%94%E8%BE%83&t=31&band_rank=38&Refer=top)
1. [无畏契约](https://s.weibo.com//weibo?q=%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6&t=31&band_rank=39&Refer=top)
1. [我就说中国有龙](https://s.weibo.com//weibo?q=%E6%88%91%E5%B0%B1%E8%AF%B4%E4%B8%AD%E5%9B%BD%E6%9C%89%E9%BE%99&t=31&band_rank=40&Refer=top)
1. [后会友期81.2%了](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F81.2%25%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [C罗回应退出葡萄牙国家队](https://s.weibo.com//weibo?q=C%E7%BD%97%E5%9B%9E%E5%BA%94%E9%80%80%E5%87%BA%E8%91%A1%E8%90%84%E7%89%99%E5%9B%BD%E5%AE%B6%E9%98%9F&t=31&band_rank=42&Refer=top)
1. [许飞脚踹厉娜](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E8%84%9A%E8%B8%B9%E5%8E%89%E5%A8%9C%23&t=31&band_rank=43&Refer=top)
1. [被大家去家务化的装修狠狠震撼到了](https://s.weibo.com//weibo?q=%23%E8%A2%AB%E5%A4%A7%E5%AE%B6%E5%8E%BB%E5%AE%B6%E5%8A%A1%E5%8C%96%E7%9A%84%E8%A3%85%E4%BF%AE%E7%8B%A0%E7%8B%A0%E9%9C%87%E6%92%BC%E5%88%B0%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [炎亚纶看起来迫不及待了](https://s.weibo.com//weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E7%9C%8B%E8%B5%B7%E6%9D%A5%E8%BF%AB%E4%B8%8D%E5%8F%8A%E5%BE%85%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [纯稚矛盾本质是懂不懂](https://s.weibo.com//weibo?q=%E7%BA%AF%E7%A8%9A%E7%9F%9B%E7%9B%BE%E6%9C%AC%E8%B4%A8%E6%98%AF%E6%87%82%E4%B8%8D%E6%87%82&t=31&band_rank=46&Refer=top)
1. [葡萄牙总理说C罗继续代表葡萄牙](https://s.weibo.com//weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E6%80%BB%E7%90%86%E8%AF%B4C%E7%BD%97%E7%BB%A7%E7%BB%AD%E4%BB%A3%E8%A1%A8%E8%91%A1%E8%90%84%E7%89%99%23&t=31&band_rank=47&Refer=top)
1. [接班人回应C罗退役](https://s.weibo.com//weibo?q=%23%E6%8E%A5%E7%8F%AD%E4%BA%BA%E5%9B%9E%E5%BA%94C%E7%BD%97%E9%80%80%E5%BD%B9%23&t=31&band_rank=48&Refer=top)
1. [九尾回应LGD晋级年总四强](https://s.weibo.com//weibo?q=%23%E4%B9%9D%E5%B0%BE%E5%9B%9E%E5%BA%94LGD%E6%99%8B%E7%BA%A7%E5%B9%B4%E6%80%BB%E5%9B%9B%E5%BC%BA%23&t=31&band_rank=49&Refer=top)
1. [走之前给男朋友做了135顿饭](https://s.weibo.com//weibo?q=%23%E8%B5%B0%E4%B9%8B%E5%89%8D%E7%BB%99%E7%94%B7%E6%9C%8B%E5%8F%8B%E5%81%9A%E4%BA%86135%E9%A1%BF%E9%A5%AD%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
