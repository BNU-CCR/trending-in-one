# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-21 17:58:24

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
<!-- 最后更新时间 Sun Nov 22 2026 00:56:40 GMT+0800 (China Standard Time) -->

1. [美国人为什么开始反对AI了](https://so.toutiao.com/search?keyword=美国人为什么开始反对AI了)
1. [还40年房贷和租40年房怎么选](https://so.toutiao.com/search?keyword=还40年房贷和租40年房怎么选)
1. [APEC“中国年”取得哪些成果](https://so.toutiao.com/search?keyword=APEC“中国年”取得哪些成果)
1. [鲁比奥会参选下届美国总统吗](https://so.toutiao.com/search?keyword=鲁比奥会参选下届美国总统吗)
1. [外国人眼里的深圳长什么样](https://so.toutiao.com/search?keyword=外国人眼里的深圳长什么样)
1. [演员张国强为何突然霸屏](https://so.toutiao.com/search?keyword=演员张国强为何突然霸屏)
1. [建议大家不要一直穿同一双鞋](https://so.toutiao.com/search?keyword=建议大家不要一直穿同一双鞋)
1. [伊朗称击中一架F-16战机](https://so.toutiao.com/search?keyword=伊朗称击中一架F-16战机)
1. [青海德令哈目前总体情况平稳](https://so.toutiao.com/search?keyword=青海德令哈目前总体情况平稳)
1. [决定长寿的3件关键事是什么](https://so.toutiao.com/search?keyword=决定长寿的3件关键事是什么)
1. [两名日本人在上海发生冲突致一人死亡](https://so.toutiao.com/search?keyword=两名日本人在上海发生冲突致一人死亡)
1. [这些“神仙岗位”都是假的](https://so.toutiao.com/search?keyword=这些“神仙岗位”都是假的)
1. [方力申刷新港澳横渡纪录](https://so.toutiao.com/search?keyword=方力申刷新港澳横渡纪录)
1. [车澈离婚后狂瘦68斤](https://so.toutiao.com/search?keyword=车澈离婚后狂瘦68斤)
1. [顺丰被暂停参加全军采购活动有何影响](https://so.toutiao.com/search?keyword=顺丰被暂停参加全军采购活动有何影响)
1. [男生初二觉醒戒断游戏逆袭成年级第二](https://so.toutiao.com/search?keyword=男生初二觉醒戒断游戏逆袭成年级第二)
1. [14日面试13日出结果？长安大学致歉](https://so.toutiao.com/search?keyword=14日面试13日出结果？长安大学致歉)
1. [顺丰速运被暂停参加全军采购活动](https://so.toutiao.com/search?keyword=顺丰速运被暂停参加全军采购活动)
1. [特朗普称不支持“台独”引岛内震动](https://so.toutiao.com/search?keyword=特朗普称不支持“台独”引岛内震动)
1. [高市的粉丝外交为何拍到钢板上](https://so.toutiao.com/search?keyword=高市的粉丝外交为何拍到钢板上)
1. [杨天真晒零下十度雪地泳装照](https://so.toutiao.com/search?keyword=杨天真晒零下十度雪地泳装照)
1. [血压在这一区间的人要尽早干预](https://so.toutiao.com/search?keyword=血压在这一区间的人要尽早干预)
1. [外国人体验深圳：来了就是深圳人](https://so.toutiao.com/search?keyword=外国人体验深圳：来了就是深圳人)
1. [全球PCB供应告急](https://so.toutiao.com/search?keyword=全球PCB供应告急)
1. [黄景瑜腿绞泰国拳王](https://so.toutiao.com/search?keyword=黄景瑜腿绞泰国拳王)
1. [睡觉穿袜子有助入睡 但5类人不建议](https://so.toutiao.com/search?keyword=睡觉穿袜子有助入睡%20但5类人不建议)
1. [老人娶小35岁女子 三次起诉家人](https://so.toutiao.com/search?keyword=老人娶小35岁女子%20三次起诉家人)
1. [大厂为何忙着把养老搬上线](https://so.toutiao.com/search?keyword=大厂为何忙着把养老搬上线)
1. [国标麻将榜一大姐1年打了20多场比赛](https://so.toutiao.com/search?keyword=国标麻将榜一大姐1年打了20多场比赛)
1. [特朗普一句话搅乱硅谷AI企业出海生意](https://so.toutiao.com/search?keyword=特朗普一句话搅乱硅谷AI企业出海生意)
1. [越南急着向中国取经的根源是什么](https://so.toutiao.com/search?keyword=越南急着向中国取经的根源是什么)
1. [普京对乌克兰军人喊话](https://so.toutiao.com/search?keyword=普京对乌克兰军人喊话)
1. [大兴安岭“猫冬”用漏盆下河捞鱼](https://so.toutiao.com/search?keyword=大兴安岭“猫冬”用漏盆下河捞鱼)
1. [学者：当务之急是做好扩大内需](https://so.toutiao.com/search?keyword=学者：当务之急是做好扩大内需)
1. [高市早苗为何继续推动援乌](https://so.toutiao.com/search?keyword=高市早苗为何继续推动援乌)
1. [菲总统夸赞中方选曲温暖贴心](https://so.toutiao.com/search?keyword=菲总统夸赞中方选曲温暖贴心)
1. [永州队主场1-1战平长沙队](https://so.toutiao.com/search?keyword=永州队主场1-1战平长沙队)
1. [80后小伙放弃高薪工作到大凉山支教](https://so.toutiao.com/search?keyword=80后小伙放弃高薪工作到大凉山支教)
1. [扁桃体反复发炎该不该割](https://so.toutiao.com/search?keyword=扁桃体反复发炎该不该割)
1. [朱雀三号回收发动机点火试车有何意义](https://so.toutiao.com/search?keyword=朱雀三号回收发动机点火试车有何意义)
1. [英超官方解释哈兰德进球无效](https://so.toutiao.com/search?keyword=英超官方解释哈兰德进球无效)
1. [WTT总决赛混双外卡归属引争议](https://so.toutiao.com/search?keyword=WTT总决赛混双外卡归属引争议)
1. [美政府面临停摆风险](https://so.toutiao.com/search?keyword=美政府面临停摆风险)
1. [俄乌袭桥战升级](https://so.toutiao.com/search?keyword=俄乌袭桥战升级)
1. [低温对神舟二十四号发射有何挑战](https://so.toutiao.com/search?keyword=低温对神舟二十四号发射有何挑战)
1. [高市搭讪特朗普被无视 日网民：丢人](https://so.toutiao.com/search?keyword=高市搭讪特朗普被无视%20日网民：丢人)
1. [怎么看深圳名场面刷屏海外](https://so.toutiao.com/search?keyword=怎么看深圳名场面刷屏海外)
1. [张荣恭：两岸不是“国与国”的关系](https://so.toutiao.com/search?keyword=张荣恭：两岸不是“国与国”的关系)
1. [河南培育钻石1克拉千元](https://so.toutiao.com/search?keyword=河南培育钻石1克拉千元)
1. [安德森收获曼城生涯英超首球](https://so.toutiao.com/search?keyword=安德森收获曼城生涯英超首球)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Nov 22 2026 01:26:06 GMT+0800 (China Standard Time) -->

1. [多所高校不向2027级研究生提供宿舍](https://www.zhihu.com/search?q=%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E4%B8%8D%E5%90%912027%E7%BA%A7%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8F%90%E4%BE%9B%E5%AE%BF%E8%88%8D)
1. [特朗普刚返美就发重大预告](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E5%88%9A%E8%BF%94%E7%BE%8E%E5%B0%B1%E5%8F%91%E9%87%8D%E5%A4%A7%E9%A2%84%E5%91%8A)
1. [AI证明黎曼猜想](https://www.zhihu.com/search?q=AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [中俄美三国元首会晤](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4)
1. [李子柒当选四川文联副主席](https://www.zhihu.com/search?q=%E6%9D%8E%E5%AD%90%E6%9F%92%E5%BD%93%E9%80%89%E5%9B%9B%E5%B7%9D%E6%96%87%E8%81%94%E5%89%AF%E4%B8%BB%E5%B8%AD)
1. [Anthropic上市](https://www.zhihu.com/search?q=Anthropic%E4%B8%8A%E5%B8%82)
1. [黄仁勋据称将创办新的半导体公司](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%8D%AE%E7%A7%B0%E5%B0%86%E5%88%9B%E5%8A%9E%E6%96%B0%E7%9A%84%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%85%AC%E5%8F%B8)
1. [中方回应高市早苗礼宾安排](https://www.zhihu.com/search?q=%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A4%BC%E5%AE%BE%E5%AE%89%E6%8E%92)
1. [顺丰被暂停参加全军采购](https://www.zhihu.com/search?q=%E9%A1%BA%E4%B8%B0%E8%A2%AB%E6%9A%82%E5%81%9C%E5%8F%82%E5%8A%A0%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD)
1. [DeepSeek付费体验直线上升](https://www.zhihu.com/search?q=DeepSeek%E4%BB%98%E8%B4%B9%E4%BD%93%E9%AA%8C%E7%9B%B4%E7%BA%BF%E4%B8%8A%E5%8D%87)
1. [DeepSeek调整对话上限长度](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4%E5%AF%B9%E8%AF%9D%E4%B8%8A%E9%99%90%E9%95%BF%E5%BA%A6)
1. [数学家完成NS方程无外力证明](https://www.zhihu.com/search?q=%E6%95%B0%E5%AD%A6%E5%AE%B6%E5%AE%8C%E6%88%90NS%E6%96%B9%E7%A8%8B%E6%97%A0%E5%A4%96%E5%8A%9B%E8%AF%81%E6%98%8E)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Nov 21 2026 17:58:24 GMT+0800 (China Standard Time) -->

1. [特朗普返美后召开新闻发布会，称中俄美元首会晤「史无前例」「意义重大」，哪些信息值得关注？](https://www.zhihu.com/question/2107175088915050800)
1. [黎曼猜想数学证明长达 25 万页是什么概念？人类还有可能完整读懂吗？](https://www.zhihu.com/question/2107262299765306400)
1. [胖东来生活广场闭店后周围商户陆续搬走，曝租金降至400万后仍无人接盘，现在来看房东涨租算不算决策失误？](https://www.zhihu.com/question/2106756998976857600)
1. [韩国首次用「紧急灾难通知」让全国手机响铃 10.5 秒防高考作弊，此举合理吗？](https://www.zhihu.com/question/2106706684672471000)
1. [为什么早餐利润这么高大家都不去做呢？](https://www.zhihu.com/question/621050716)
1. [娃哈哈集团董事长许思敏被曝已辞职，宗馥莉48小时内调整247人职务，此轮调整会给娃哈哈带来怎样的影响？](https://www.zhihu.com/question/2107411950162240500)
1. [《Gta6》M站用户开分仅3.7分，现已5.4分，如何看待用户评分与媒体评分两极分化？](https://www.zhihu.com/question/2107390437933707500)
1. [11月20日美股三大指数集体重挫，AI交易遭猛烈拋售，Anthropic上市次日跌8.5%，怎样解读？](https://www.zhihu.com/question/2107375172101432000)
1. [BLG夺冠，能唤回多少国内玩家的热情重回《英雄联盟》？](https://www.zhihu.com/question/2105255823601619000)
1. [为什么肠道会精准排出菌群异常的大便（腹泻）却又能把正常菌群的大便留在肠道内？](https://www.zhihu.com/question/2063277342005391600)
1. [为什么网络上总是说“外卖小哥藏龙卧虎”，这种刻板印象到底是怎么形成的？](https://www.zhihu.com/question/2106416810002273800)
1. [数学家宣称 Claude 证明黎曼猜想，为啥Anthropic股价仍在暴跌？市场不买账，核心原因是啥？](https://www.zhihu.com/question/2107267149399947000)
1. [摩尔线程官宣消费级显卡「庐山」，宣称光追暴涨 50 倍且刷新显存上限，实际体验能达到预期吗？](https://www.zhihu.com/question/2107187179504006100)
1. [特朗普称不允许美企海外建数据中心，如果违反将面临「巨额税收」处罚，这会对美国科技公司发展带来哪些影响？](https://www.zhihu.com/question/2107449650592445700)
1. [《后会友期》中马天宇说“青稚原生家庭正常，白小纯原生家庭不正常”，在当时的场合中，这种行为合适吗？](https://www.zhihu.com/question/2103149759569598000)
1. [如何看待DeepSeek因免费端限额，且无充值入口，被称付费体验直线上升？它们会开放C端个人订阅吗？](https://www.zhihu.com/question/2107394861363983000)
1. [如何评价11月微软悄悄上架的全新中文输入法？](https://www.zhihu.com/question/2106793828950843400)
1. [超强厄尔尼诺已经形成，已成为有记录以来最强，这意味着什么？产生的气候影响大吗？](https://www.zhihu.com/question/2106305744966530800)
1. [凡人修仙传动漫201集观众满意吗？](https://www.zhihu.com/question/2106002146114155000)
1. [如何看待11月21日三维ns方程有限时间爆破的形式化证明疑似已经完成？](https://www.zhihu.com/question/2107281397077500200)
1. [黄仁勋据称将创办新的半导体公司，或将筹资 500 亿用于创业，可能性有多大？](https://www.zhihu.com/question/2107169370904289500)
1. [初三女儿因妈妈当亲戚面说她的糗事儿而离家住同学家，妈妈却说“有什么不能说的”，这事到底谁的问题更大？](https://www.zhihu.com/question/2106544120856580600)
1. [繁体字会不会再衍生出不同于大陆简体字的简化文字系统？](https://www.zhihu.com/question/1890690783696367900)
1. [有哪些方言是你以为全国通用，长大后才发现只有家里人才懂的？](https://www.zhihu.com/question/2104616197803047000)
1. [信用卡近一年减少 3400 万张，信用卡为何逐渐失去吸引力？背后反映出消费者支付习惯发生了哪些变化？](https://www.zhihu.com/question/2107163928622888000)
1. [如何看待余承东再称L3自动驾驶来临后可睡觉但不能睡死，随后微博强调现在是L2但未明确L3能否睡觉？](https://www.zhihu.com/question/2107155066318858000)
1. [黄金还会再次跌到600一克吗？](https://www.zhihu.com/question/2107047477912379400)
1. [黄牛称炒茅台已「几乎无利可图」，酒厂逐步拿回定价权，这门「生意」为什么不赚钱了？近十年来发生什么变化？](https://www.zhihu.com/question/2106114904289718800)
1. [叔本华为什么讨厌黑格尔？](https://www.zhihu.com/question/379657356)
1. [曝《后会友期 2》已经开始接触嘉宾了，是真的吗？你期待看到哪一对？](https://www.zhihu.com/question/2107154492948833300)
1. [数学家称与 AI 合作证明了黎曼猜想，证明稿超 25 万页，黎曼猜想真的被解决了吗？](https://www.zhihu.com/question/2107239235015263500)
1. [为什么欧美使用壁炉的普遍性这么高，而中国却没有？](https://www.zhihu.com/question/20796435)
1. [发达国家中，日本人出国旅游意愿为何那么低？](https://www.zhihu.com/question/2062065010873055000)
1. [特朗普称如果满分 10 分，可以为中俄美元首会晤打 12 分，此次会晤对他有多重要？美方有哪些收获？](https://www.zhihu.com/question/2107079876813353000)
1. [为什么我感觉自己做饭并没有比点外卖省钱？](https://www.zhihu.com/question/438496778)
1. [有哪些事情是去了澳门才知道的？](https://www.zhihu.com/question/554154050)
1. [雷军称明年小米汽车正式出海，强调和当地供应链深度合作，如何看待小米汽车出海的时机与打法？](https://www.zhihu.com/question/2106436190547322400)
1. [U17 世界杯小组赛，西班牙 U17 vs 中国 U17 男足，如何评价本场比赛？](https://www.zhihu.com/question/2107245763558209300)
1. [如果 GTA6明年上 PC，什么配置可以发挥最完全体的画面效果？](https://www.zhihu.com/question/2107056554713289500)
1. [如何评价成毅主演的电视剧《两京十五日》？](https://www.zhihu.com/question/2107165635797071600)
1. [在中世纪时代拒绝骑士决斗，或在美国西部时代拒绝牛仔决斗，直接认怂，能活命么？](https://www.zhihu.com/question/356942001)
1. [神秘模型 Gestalt 横空出世，设计基准上大幅超越 Claude、GPT，这款模型到底是啥来历？](https://www.zhihu.com/question/2106839067346350000)
1. [为什么现在这么多应届生把考公当作唯一的出路？](https://www.zhihu.com/question/2072367049150559700)
1. [作为史上第一部惊悚悬疑类型的奥斯卡最佳影片，《沉默的羔羊》经典在哪里？](https://www.zhihu.com/question/20999746)
1. [下班后，就不想接收任何工作消息，这算精神不正常吗？](https://www.zhihu.com/question/1905806651077956000)
1. [中国政法、上大、上海交大等多所高校不向2027级研究生提供宿舍，为何各校宿舍紧张问题都迟迟没能解决？](https://www.zhihu.com/question/2107038570422563800)
1. [GTA6目前首日销量估算为2458万份，销售额约23.6亿美元，比5代高出3倍，如何评价这一成绩？](https://www.zhihu.com/question/2107069840678834400)
1. [DeepSeek 第二轮融资 1050 多亿元落地，31 家外部股东入局，怎样解读？](https://www.zhihu.com/question/2106889511993189600)
1. [中俄美三方的和平宣言发布后，将会为俄乌局势带来哪些变量？](https://www.zhihu.com/question/2106847799899678500)
1. [为什么还有人要去当乡村教师？](https://www.zhihu.com/question/36214031)
1. [黄金大跌，你们会去购买黄金吗？](https://www.zhihu.com/question/2098797483895828500)
1. [祁同伟当年要是在司法所干下去，结果会如何？](https://www.zhihu.com/question/1903471516374534100)
1. [2026年三星杯决胜局，李钦诚执白中盘突然崩溃不敌卞相壹，后者再获世界冠军，如何评价本场对局？](https://www.zhihu.com/question/2107105476928169500)
1. [媒体称中国 AI 人才不再迷恋美国成群回国，这一趋势背后的核心动因是什么？](https://www.zhihu.com/question/2106184065661641500)
1. [直属领导的管理水平，是不是直接决定了职场幸福感？](https://www.zhihu.com/question/2059075711210674200)
1. [中俄美和平宣言为何特别强调国际刑事法院不得滥用管辖权？具体针对的是什么？这一表述有何现实背景？](https://www.zhihu.com/question/2106848715306526000)
1. [王毅介绍中俄美元首会晤情况，称这是一次「和平峰会」，是载入史册的标志性事件，传递出了哪些信号？](https://www.zhihu.com/question/2107019870122547200)
1. [酒店的浴室为什么大多是透明的？](https://www.zhihu.com/question/527454391)
1. [如何看待马斯克离开深圳，突访上海？](https://www.zhihu.com/question/2106907755730814200)
1. [为什么唐僧对猪八戒会有一点偏爱？](https://www.zhihu.com/question/1977299907032397300)
1. [如何评价《fx战士久留美》第八集？](https://www.zhihu.com/question/2106829634486772700)
1. [江南大学回应 「大学英语改为选修」，有通过四六级等免修条件，这一改革会成为趋势吗？](https://www.zhihu.com/question/2106695521175860700)
1. [你家的第一台电视是什么样的？为什么小时候总是特别期待看电视？](https://www.zhihu.com/question/2106780350219121000)
1. [如何评价华为全新先锋潮流子品牌OSTA星芒？](https://www.zhihu.com/question/2106692200478269400)
1. [旅行者 1 号飞行近 50 年抵达 1 光日位置，这一深空里程碑有哪些特殊价值？](https://www.zhihu.com/question/2106398972487137000)
1. [如何评价《蓝色星原：旅谣》公测前瞻节目？](https://www.zhihu.com/question/2106152174262800600)
1. [现货黄金跌破 3600 美元关口，这意味着什么？这轮下跌会跌到什么位置才有实质性支撑？](https://www.zhihu.com/question/2107019375895238400)
1. [驴友穿越秦岭遇难，家属起诉救援队，法院判定救援队、环保部门无过错，组织者赔偿18万余元，如何看待此事？](https://www.zhihu.com/question/2106482614722883800)
1. [很多人说GTA6没意思“不好玩”，那GTA系列真正的魅力在哪里呢？](https://www.zhihu.com/question/2106788569822109700)
1. [美国要是提前知道英国大部分殖民地都是和平解放，会不会后悔打独立战争？](https://www.zhihu.com/question/2105765526047871500)
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
<!-- 最后更新时间 Sat Nov 21 2026 19:24:33 GMT+0800 (China Standard Time) -->

1. [习主席为建设亚太共同体指明方向](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E4%B8%BB%E5%B8%AD%E4%B8%BA%E5%BB%BA%E8%AE%BE%E4%BA%9A%E5%A4%AA%E5%85%B1%E5%90%8C%E4%BD%93%E6%8C%87%E6%98%8E%E6%96%B9%E5%90%91%23&Refer=new_time)
1. [特朗普深圳不拉窗帘原因找到了](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%B7%B1%E5%9C%B3%E4%B8%8D%E6%8B%89%E7%AA%97%E5%B8%98%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23&t=31&band_rank=1&Refer=top)
1. [青海地震](https://s.weibo.com//weibo?q=%E9%9D%92%E6%B5%B7%E5%9C%B0%E9%9C%87&t=31&band_rank=2&Refer=top)
1. [唱空中国经济者终会落空](https://s.weibo.com//weibo?q=%23%E5%94%B1%E7%A9%BA%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E8%80%85%E7%BB%88%E4%BC%9A%E8%90%BD%E7%A9%BA%23&t=31&band_rank=3&Refer=top)
1. [白小纯 青稚](https://s.weibo.com//weibo?q=%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E9%9D%92%E7%A8%9A&t=31&band_rank=4&Refer=top)
1. [Tim说我爹太离谱了](https://s.weibo.com//weibo?q=%23Tim%E8%AF%B4%E6%88%91%E7%88%B9%E5%A4%AA%E7%A6%BB%E8%B0%B1%E4%BA%86%23&t=31&band_rank=5&Refer=top)
1. [逐玉](https://s.weibo.com//weibo?q=%E9%80%90%E7%8E%89&t=31&band_rank=6&Refer=top)
1. [AI剧打败真人剧的真正原因](https://s.weibo.com//weibo?q=%23AI%E5%89%A7%E6%89%93%E8%B4%A5%E7%9C%9F%E4%BA%BA%E5%89%A7%E7%9A%84%E7%9C%9F%E6%AD%A3%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=7&Refer=top)
1. [C罗7米巨型雕像上海揭幕](https://s.weibo.com//weibo?q=%23C%E7%BD%977%E7%B1%B3%E5%B7%A8%E5%9E%8B%E9%9B%95%E5%83%8F%E4%B8%8A%E6%B5%B7%E6%8F%AD%E5%B9%95%23&t=31&band_rank=8&Refer=top)
1. [青海德令哈5.6级地震](https://s.weibo.com//weibo?q=%23%E9%9D%92%E6%B5%B7%E5%BE%B7%E4%BB%A4%E5%93%885.6%E7%BA%A7%E5%9C%B0%E9%9C%87%23&t=31&band_rank=9&Refer=top)
1. [顺丰速运被暂停参加全军采购活动](https://s.weibo.com//weibo?q=%23%E9%A1%BA%E4%B8%B0%E9%80%9F%E8%BF%90%E8%A2%AB%E6%9A%82%E5%81%9C%E5%8F%82%E5%8A%A0%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD%E6%B4%BB%E5%8A%A8%23&t=31&band_rank=10&Refer=top)
1. [张凌赫说田曦薇更瘦更美了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B4%E7%94%B0%E6%9B%A6%E8%96%87%E6%9B%B4%E7%98%A6%E6%9B%B4%E7%BE%8E%E4%BA%86%23&t=31&band_rank=11&Refer=top)
1. [沈腾摔倒现发所有人都在扶](https://s.weibo.com//weibo?q=%23%E6%B2%88%E8%85%BE%E6%91%94%E5%80%92%E7%8E%B0%E5%8F%91%E6%89%80%E6%9C%89%E4%BA%BA%E9%83%BD%E5%9C%A8%E6%89%B6%23&t=31&band_rank=12&Refer=top)
1. [曝孙芮已经结婚两年了](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%AD%99%E8%8A%AE%E5%B7%B2%E7%BB%8F%E7%BB%93%E5%A9%9A%E4%B8%A4%E5%B9%B4%E4%BA%86%23&t=31&band_rank=13&Refer=top)
1. [特朗普在APEC晚宴跳YMCA](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9C%A8APEC%E6%99%9A%E5%AE%B4%E8%B7%B3YMCA%23&t=31&band_rank=14&Refer=top)
1. [田作之赫](https://s.weibo.com//weibo?q=%E7%94%B0%E4%BD%9C%E4%B9%8B%E8%B5%AB&t=31&band_rank=15&Refer=top)
1. [安宥真张元英MAMA舞台开场](https://s.weibo.com//weibo?q=%23%E5%AE%89%E5%AE%A5%E7%9C%9F%E5%BC%A0%E5%85%83%E8%8B%B1MAMA%E8%88%9E%E5%8F%B0%E5%BC%80%E5%9C%BA%23&t=31&band_rank=16&Refer=top)
1. [两京十五日台词](https://s.weibo.com//weibo?q=%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E5%8F%B0%E8%AF%8D&t=31&band_rank=17&Refer=top)
1. [张凌赫田曦薇逐玉两岸粉丝见面会](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E9%80%90%E7%8E%89%E4%B8%A4%E5%B2%B8%E7%B2%89%E4%B8%9D%E8%A7%81%E9%9D%A2%E4%BC%9A%23&t=31&band_rank=18&Refer=top)
1. [八马茶业被暂停参加全军采购活动](https://s.weibo.com//weibo?q=%23%E5%85%AB%E9%A9%AC%E8%8C%B6%E4%B8%9A%E8%A2%AB%E6%9A%82%E5%81%9C%E5%8F%82%E5%8A%A0%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD%E6%B4%BB%E5%8A%A8%23&t=31&band_rank=19&Refer=top)
1. [权志龙长发](https://s.weibo.com//weibo?q=%E6%9D%83%E5%BF%97%E9%BE%99%E9%95%BF%E5%8F%91&t=31&band_rank=20&Refer=top)
1. [易立竞回复手撕文吉儿](https://s.weibo.com//weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E5%9B%9E%E5%A4%8D%E6%89%8B%E6%92%95%E6%96%87%E5%90%89%E5%84%BF%23&t=31&band_rank=21&Refer=top)
1. [家有儿女片酬放现在也超许多人](https://s.weibo.com//weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E7%89%87%E9%85%AC%E6%94%BE%E7%8E%B0%E5%9C%A8%E4%B9%9F%E8%B6%85%E8%AE%B8%E5%A4%9A%E4%BA%BA%23&t=31&band_rank=22&Refer=top)
1. [陈伟霆何穗儿子学会走路了](https://s.weibo.com//weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%BD%95%E7%A9%97%E5%84%BF%E5%AD%90%E5%AD%A6%E4%BC%9A%E8%B5%B0%E8%B7%AF%E4%BA%86%23&t=31&band_rank=23&Refer=top)
1. [中国队短道速滑世巡赛夺金](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E4%B8%96%E5%B7%A1%E8%B5%9B%E5%A4%BA%E9%87%91%23&t=31&band_rank=24&Refer=top)
1. [孙芮结婚怀孕](https://s.weibo.com//weibo?q=%E5%AD%99%E8%8A%AE%E7%BB%93%E5%A9%9A%E6%80%80%E5%AD%95&t=31&band_rank=25&Refer=top)
1. [16岁女孩遭性侵后被迫改口称自愿](https://s.weibo.com//weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD%E6%80%A7%E4%BE%B5%E5%90%8E%E8%A2%AB%E8%BF%AB%E6%94%B9%E5%8F%A3%E7%A7%B0%E8%87%AA%E6%84%BF%23&t=31&band_rank=26&Refer=top)
1. [爱笑的天使末尾是王菲抱着李嫣](https://s.weibo.com//weibo?q=%23%E7%88%B1%E7%AC%91%E7%9A%84%E5%A4%A9%E4%BD%BF%E6%9C%AB%E5%B0%BE%E6%98%AF%E7%8E%8B%E8%8F%B2%E6%8A%B1%E7%9D%80%E6%9D%8E%E5%AB%A3%23&t=31&band_rank=27&Refer=top)
1. [金裕贞差点被风吹倒了](https://s.weibo.com//weibo?q=%23%E9%87%91%E8%A3%95%E8%B4%9E%E5%B7%AE%E7%82%B9%E8%A2%AB%E9%A3%8E%E5%90%B9%E5%80%92%E4%BA%86%23&t=31&band_rank=28&Refer=top)
1. [金价跌至7开头金店经理直呼天塌了](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E8%87%B37%E5%BC%80%E5%A4%B4%E9%87%91%E5%BA%97%E7%BB%8F%E7%90%86%E7%9B%B4%E5%91%BC%E5%A4%A9%E5%A1%8C%E4%BA%86%23&t=31&band_rank=29&Refer=top)
1. [曝Tarzan离开AL加入JDG](https://s.weibo.com//weibo?q=%23%E6%9B%9DTarzan%E7%A6%BB%E5%BC%80AL%E5%8A%A0%E5%85%A5JDG%23&t=31&band_rank=30&Refer=top)
1. [T1的官宣开始了](https://s.weibo.com//weibo?q=%23T1%E7%9A%84%E5%AE%98%E5%AE%A3%E5%BC%80%E5%A7%8B%E4%BA%86%23&t=31&band_rank=31&Refer=top)
1. [CORTIS获得MAMA年度歌曲](https://s.weibo.com//weibo?q=%23CORTIS%E8%8E%B7%E5%BE%97MAMA%E5%B9%B4%E5%BA%A6%E6%AD%8C%E6%9B%B2%23&t=31&band_rank=32&Refer=top)
1. [杨超越祝郑雨陈砚周永远幸福](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E7%A5%9D%E9%83%91%E9%9B%A8%E9%99%88%E7%A0%9A%E5%91%A8%E6%B0%B8%E8%BF%9C%E5%B9%B8%E7%A6%8F%23&t=31&band_rank=33&Refer=top)
1. [王安宇公主抱王楚然](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%85%AC%E4%B8%BB%E6%8A%B1%E7%8E%8B%E6%A5%9A%E7%84%B6%23&t=31&band_rank=34&Refer=top)
1. [太阳雨国外篇是杀青两个月后拍的](https://s.weibo.com//weibo?q=%E5%A4%AA%E9%98%B3%E9%9B%A8%E5%9B%BD%E5%A4%96%E7%AF%87%E6%98%AF%E6%9D%80%E9%9D%92%E4%B8%A4%E4%B8%AA%E6%9C%88%E5%90%8E%E6%8B%8D%E7%9A%84&t=31&band_rank=35&Refer=top)
1. [中国短道女接3000米夺金](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E5%A5%B3%E6%8E%A53000%E7%B1%B3%E5%A4%BA%E9%87%91%23&t=31&band_rank=36&Refer=top)
1. [李勒优 崔晋](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%8B%92%E4%BC%98%20%E5%B4%94%E6%99%8B&t=31&band_rank=37&Refer=top)
1. [猫的树今天是太阳雨收官长文](https://s.weibo.com//weibo?q=%E7%8C%AB%E7%9A%84%E6%A0%91%E4%BB%8A%E5%A4%A9%E6%98%AF%E5%A4%AA%E9%98%B3%E9%9B%A8%E6%94%B6%E5%AE%98%E9%95%BF%E6%96%87&t=31&band_rank=38&Refer=top)
1. [两京十五日真没把我们当外人](https://s.weibo.com//weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E7%9C%9F%E6%B2%A1%E6%8A%8A%E6%88%91%E4%BB%AC%E5%BD%93%E5%A4%96%E4%BA%BA%23&t=31&band_rank=39&Refer=top)
1. [我们来了阵容](https://s.weibo.com//weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%E9%98%B5%E5%AE%B9%23&t=31&band_rank=40&Refer=top)
1. [3岁女童生前遭凶手母子联合殴打](https://s.weibo.com//weibo?q=%233%E5%B2%81%E5%A5%B3%E7%AB%A5%E7%94%9F%E5%89%8D%E9%81%AD%E5%87%B6%E6%89%8B%E6%AF%8D%E5%AD%90%E8%81%94%E5%90%88%E6%AE%B4%E6%89%93%23&t=31&band_rank=41&Refer=top)
1. [炎亚纶铁了心要上后会友期](https://s.weibo.com//weibo?q=%E7%82%8E%E4%BA%9A%E7%BA%B6%E9%93%81%E4%BA%86%E5%BF%83%E8%A6%81%E4%B8%8A%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F&t=31&band_rank=42&Refer=top)
1. [老乡杯](https://s.weibo.com//weibo?q=%E8%80%81%E4%B9%A1%E6%9D%AF&t=31&band_rank=43&Refer=top)
1. [太阳大声帮权志龙捋头发](https://s.weibo.com//weibo?q=%E5%A4%AA%E9%98%B3%E5%A4%A7%E5%A3%B0%E5%B8%AE%E6%9D%83%E5%BF%97%E9%BE%99%E6%8D%8B%E5%A4%B4%E5%8F%91&t=31&band_rank=44&Refer=top)
1. [余承东称百余万辆车零燃烧](https://s.weibo.com//weibo?q=%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E7%99%BE%E4%BD%99%E4%B8%87%E8%BE%86%E8%BD%A6%E9%9B%B6%E7%87%83%E7%83%A7&t=31&band_rank=45&Refer=top)
1. [无畏直播](https://s.weibo.com//weibo?q=%E6%97%A0%E7%95%8F%E7%9B%B4%E6%92%AD&t=31&band_rank=46&Refer=top)
1. [肾脏这辈子打的就是高端局](https://s.weibo.com//weibo?q=%E8%82%BE%E8%84%8F%E8%BF%99%E8%BE%88%E5%AD%90%E6%89%93%E7%9A%84%E5%B0%B1%E6%98%AF%E9%AB%98%E7%AB%AF%E5%B1%80&t=31&band_rank=47&Refer=top)
1. [亲妈不让女儿上学自称示范在家教育](https://s.weibo.com//weibo?q=%23%E4%BA%B2%E5%A6%88%E4%B8%8D%E8%AE%A9%E5%A5%B3%E5%84%BF%E4%B8%8A%E5%AD%A6%E8%87%AA%E7%A7%B0%E7%A4%BA%E8%8C%83%E5%9C%A8%E5%AE%B6%E6%95%99%E8%82%B2%23&t=31&band_rank=48&Refer=top)
1. [比特币暴跌超29万人爆仓](https://s.weibo.com//weibo?q=%E6%AF%94%E7%89%B9%E5%B8%81%E6%9A%B4%E8%B7%8C%E8%B6%8529%E4%B8%87%E4%BA%BA%E7%88%86%E4%BB%93&t=31&band_rank=49&Refer=top)
1. [日首相官邸发布高市访华画面集锦](https://s.weibo.com//weibo?q=%23%E6%97%A5%E9%A6%96%E7%9B%B8%E5%AE%98%E9%82%B8%E5%8F%91%E5%B8%83%E9%AB%98%E5%B8%82%E8%AE%BF%E5%8D%8E%E7%94%BB%E9%9D%A2%E9%9B%86%E9%94%A6%23&t=31&band_rank=50&Refer=top)
1. [习近平会见泰国总理](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%BC%9A%E8%A7%81%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%23&Refer=new_time)
1. [胖东来搬离后原址所开新商场几乎倒闭](https://s.weibo.com//weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%90%AC%E7%A6%BB%E5%90%8E%E5%8E%9F%E5%9D%80%E6%89%80%E5%BC%80%E6%96%B0%E5%95%86%E5%9C%BA%E5%87%A0%E4%B9%8E%E5%80%92%E9%97%AD%23&t=31&band_rank=1&Refer=top)
1. [特朗普说看看深圳再看看我们](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%9C%8B%E7%9C%8B%E6%B7%B1%E5%9C%B3%E5%86%8D%E7%9C%8B%E7%9C%8B%E6%88%91%E4%BB%AC%23&t=31&band_rank=2&Refer=top)
1. [APEC盛会效应拉满](https://s.weibo.com//weibo?q=%23APEC%E7%9B%9B%E4%BC%9A%E6%95%88%E5%BA%94%E6%8B%89%E6%BB%A1%23&t=31&band_rank=3&Refer=top)
1. [特朗普称不允许美企海外建数据中心](https://s.weibo.com//weibo?q=%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%B8%8D%E5%85%81%E8%AE%B8%E7%BE%8E%E4%BC%81%E6%B5%B7%E5%A4%96%E5%BB%BA%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83&t=31&band_rank=4&Refer=top)
1. [黎曼猜想](https://s.weibo.com//weibo?q=%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3&t=31&band_rank=5&Refer=top)
1. [问界M9车主开辅助驾驶熟睡](https://s.weibo.com//weibo?q=%E9%97%AE%E7%95%8CM9%E8%BD%A6%E4%B8%BB%E5%BC%80%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E7%86%9F%E7%9D%A1&t=31&band_rank=6&Refer=top)
1. [特朗普涉中俄美最新表态](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%B6%89%E4%B8%AD%E4%BF%84%E7%BE%8E%E6%9C%80%E6%96%B0%E8%A1%A8%E6%80%81%23&t=31&band_rank=7&Refer=top)
1. [这段爆破戏疑似AI做的](https://s.weibo.com//weibo?q=%E8%BF%99%E6%AE%B5%E7%88%86%E7%A0%B4%E6%88%8F%E7%96%91%E4%BC%BCAI%E5%81%9A%E7%9A%84&t=31&band_rank=8&Refer=top)
1. [比亚迪折叠方向盘能干嘛](https://s.weibo.com//weibo?q=%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%8A%98%E5%8F%A0%E6%96%B9%E5%90%91%E7%9B%98%E8%83%BD%E5%B9%B2%E5%98%9B&t=31&band_rank=9&Refer=top)
1. [张萌回应青稚打听式安慰](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E5%9B%9E%E5%BA%94%E9%9D%92%E7%A8%9A%E6%89%93%E5%90%AC%E5%BC%8F%E5%AE%89%E6%85%B0%23&t=31&band_rank=10&Refer=top)
1. [孙芮结婚怀孕](https://s.weibo.com//weibo?q=%E5%AD%99%E8%8A%AE%E7%BB%93%E5%A9%9A%E6%80%80%E5%AD%95&t=31&band_rank=11&Refer=top)
1. [炎亚纶汪东城世纪大和解](https://s.weibo.com//weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E6%B1%AA%E4%B8%9C%E5%9F%8E%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%92%8C%E8%A7%A3%23&t=31&band_rank=12&Refer=top)
1. [以前的朱瞻基现在的朱瞻基](https://s.weibo.com//weibo?q=%E4%BB%A5%E5%89%8D%E7%9A%84%E6%9C%B1%E7%9E%BB%E5%9F%BA%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%9C%B1%E7%9E%BB%E5%9F%BA&t=31&band_rank=13&Refer=top)
1. [美AI科技股崩盘原因](https://s.weibo.com//weibo?q=%23%E7%BE%8EAI%E7%A7%91%E6%8A%80%E8%82%A1%E5%B4%A9%E7%9B%98%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=14&Refer=top)
1. [张萌的大胆穿搭直接吓到孟子义](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E7%9A%84%E5%A4%A7%E8%83%86%E7%A9%BF%E6%90%AD%E7%9B%B4%E6%8E%A5%E5%90%93%E5%88%B0%E5%AD%9F%E5%AD%90%E4%B9%89%23&t=31&band_rank=15&Refer=top)
1. [孙芮属于军婚](https://s.weibo.com//weibo?q=%23%E5%AD%99%E8%8A%AE%E5%B1%9E%E4%BA%8E%E5%86%9B%E5%A9%9A%23&t=31&band_rank=16&Refer=top)
1. [父亲把房留给妹妹哥哥搬前打砸诅咒](https://s.weibo.com//weibo?q=%23%E7%88%B6%E4%BA%B2%E6%8A%8A%E6%88%BF%E7%95%99%E7%BB%99%E5%A6%B9%E5%A6%B9%E5%93%A5%E5%93%A5%E6%90%AC%E5%89%8D%E6%89%93%E7%A0%B8%E8%AF%85%E5%92%92%23&t=31&band_rank=17&Refer=top)
1. [深圳人又开始原装出街了](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E5%8F%88%E5%BC%80%E5%A7%8B%E5%8E%9F%E8%A3%85%E5%87%BA%E8%A1%97%E4%BA%86%23&t=31&band_rank=18&Refer=top)
1. [神仙岗位招聘实为引流卖课](https://s.weibo.com//weibo?q=%23%E7%A5%9E%E4%BB%99%E5%B2%97%E4%BD%8D%E6%8B%9B%E8%81%98%E5%AE%9E%E4%B8%BA%E5%BC%95%E6%B5%81%E5%8D%96%E8%AF%BE%23&t=31&band_rank=19&Refer=top)
1. [王天辰郭晓婷开机](https://s.weibo.com//weibo?q=%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%E5%BC%80%E6%9C%BA&t=31&band_rank=20&Refer=top)
1. [李嫣喝水都要用口罩遮着](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%AB%A3%E5%96%9D%E6%B0%B4%E9%83%BD%E8%A6%81%E7%94%A8%E5%8F%A3%E7%BD%A9%E9%81%AE%E7%9D%80%23&t=31&band_rank=21&Refer=top)
1. [王子璇问马天宇你不会爱上我](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E9%97%AE%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BD%A0%E4%B8%8D%E4%BC%9A%E7%88%B1%E4%B8%8A%E6%88%91%23&t=31&band_rank=22&Refer=top)
1. [伊能静介绍了和秦昊在上海的家](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E4%BB%8B%E7%BB%8D%E4%BA%86%E5%92%8C%E7%A7%A6%E6%98%8A%E5%9C%A8%E4%B8%8A%E6%B5%B7%E7%9A%84%E5%AE%B6%23&t=31&band_rank=23&Refer=top)
1. [DeepSeek付费体验直线上升](https://s.weibo.com//weibo?q=DeepSeek%E4%BB%98%E8%B4%B9%E4%BD%93%E9%AA%8C%E7%9B%B4%E7%BA%BF%E4%B8%8A%E5%8D%87&t=31&band_rank=24&Refer=top)
1. [后会友期让我不适的part](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%AE%A9%E6%88%91%E4%B8%8D%E9%80%82%E7%9A%84part&t=31&band_rank=25&Refer=top)
1. [李嫣唱歌太孝顺了](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%AB%A3%E5%94%B1%E6%AD%8C%E5%A4%AA%E5%AD%9D%E9%A1%BA%E4%BA%86%23&t=31&band_rank=26&Refer=top)
1. [崔晋 李勒优](https://s.weibo.com//weibo?q=%E5%B4%94%E6%99%8B%20%E6%9D%8E%E5%8B%92%E4%BC%98&t=31&band_rank=27&Refer=top)
1. [庞众望即将从清华毕业](https://s.weibo.com//weibo?q=%23%E5%BA%9E%E4%BC%97%E6%9C%9B%E5%8D%B3%E5%B0%86%E4%BB%8E%E6%B8%85%E5%8D%8E%E6%AF%95%E4%B8%9A%23&t=31&band_rank=28&Refer=top)
1. [金价下跌花同样的钱到手金子却更少](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E8%8A%B1%E5%90%8C%E6%A0%B7%E7%9A%84%E9%92%B1%E5%88%B0%E6%89%8B%E9%87%91%E5%AD%90%E5%8D%B4%E6%9B%B4%E5%B0%91%23&t=31&band_rank=29&Refer=top)
1. [聊到肖战张国强开启夸夸模式](https://s.weibo.com//weibo?q=%23%E8%81%8A%E5%88%B0%E8%82%96%E6%88%98%E5%BC%A0%E5%9B%BD%E5%BC%BA%E5%BC%80%E5%90%AF%E5%A4%B8%E5%A4%B8%E6%A8%A1%E5%BC%8F%23&t=31&band_rank=30&Refer=top)
1. [Elk BLG](https://s.weibo.com//weibo?q=Elk%20BLG&t=31&band_rank=31&Refer=top)
1. [上海人安慰人北京人瞎过吧](https://s.weibo.com//weibo?q=%E4%B8%8A%E6%B5%B7%E4%BA%BA%E5%AE%89%E6%85%B0%E4%BA%BA%E5%8C%97%E4%BA%AC%E4%BA%BA%E7%9E%8E%E8%BF%87%E5%90%A7&t=31&band_rank=32&Refer=top)
1. [杨超越和董思成究竟哪里不熟](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%92%8C%E8%91%A3%E6%80%9D%E6%88%90%E7%A9%B6%E7%AB%9F%E5%93%AA%E9%87%8C%E4%B8%8D%E7%86%9F%23&t=31&band_rank=33&Refer=top)
1. [晋妈给李勒优铺的路是接手面馆](https://s.weibo.com//weibo?q=%23%E6%99%8B%E5%A6%88%E7%BB%99%E6%9D%8E%E5%8B%92%E4%BC%98%E9%93%BA%E7%9A%84%E8%B7%AF%E6%98%AF%E6%8E%A5%E6%89%8B%E9%9D%A2%E9%A6%86%23&t=31&band_rank=34&Refer=top)
1. [马天宇当明星后把亲戚接到了北京](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%BD%93%E6%98%8E%E6%98%9F%E5%90%8E%E6%8A%8A%E4%BA%B2%E6%88%9A%E6%8E%A5%E5%88%B0%E4%BA%86%E5%8C%97%E4%BA%AC%23&t=31&band_rank=35&Refer=top)
1. [华为Logo价格121元](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BALogo%E4%BB%B7%E6%A0%BC121%E5%85%83&t=31&band_rank=36&Refer=top)
1. [后会友期黄焖鸡事件原声视频](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%BB%84%E7%84%96%E9%B8%A1%E4%BA%8B%E4%BB%B6%E5%8E%9F%E5%A3%B0%E8%A7%86%E9%A2%91&t=31&band_rank=37&Refer=top)
1. [成毅两京十五日演技表现](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E6%BC%94%E6%8A%80%E8%A1%A8%E7%8E%B0%23&t=31&band_rank=38&Refer=top)
1. [刘宇宁这一段建议载入综艺史册](https://s.weibo.com//weibo?q=%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%99%E4%B8%80%E6%AE%B5%E5%BB%BA%E8%AE%AE%E8%BD%BD%E5%85%A5%E7%BB%BC%E8%89%BA%E5%8F%B2%E5%86%8C&t=31&band_rank=39&Refer=top)
1. [凯恩韧带撕裂](https://s.weibo.com//weibo?q=%23%E5%87%AF%E6%81%A9%E9%9F%A7%E5%B8%A6%E6%92%95%E8%A3%82%23&t=31&band_rank=40&Refer=top)
1. [林更新你怎么什么都敢演](https://s.weibo.com//weibo?q=%23%E6%9E%97%E6%9B%B4%E6%96%B0%E4%BD%A0%E6%80%8E%E4%B9%88%E4%BB%80%E4%B9%88%E9%83%BD%E6%95%A2%E6%BC%94%23&t=31&band_rank=41&Refer=top)
1. [陶哲轩回应AI证明黎曼猜想传闻](https://s.weibo.com//weibo?q=%23%E9%99%B6%E5%93%B2%E8%BD%A9%E5%9B%9E%E5%BA%94AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E4%BC%A0%E9%97%BB%23&t=31&band_rank=42&Refer=top)
1. [厉娜摘掉茶色眼镜了](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E6%91%98%E6%8E%89%E8%8C%B6%E8%89%B2%E7%9C%BC%E9%95%9C%E4%BA%86%23&t=31&band_rank=43&Refer=top)
1. [C罗986球](https://s.weibo.com//weibo?q=%23C%E7%BD%97986%E7%90%83%23&t=31&band_rank=44&Refer=top)
1. [周也让我眼前一亮](https://s.weibo.com//weibo?q=%23%E5%91%A8%E4%B9%9F%E8%AE%A9%E6%88%91%E7%9C%BC%E5%89%8D%E4%B8%80%E4%BA%AE%23&t=31&band_rank=45&Refer=top)
1. [闺蜜在韩国的羊排店偶遇帅哥时](https://s.weibo.com//weibo?q=%23%E9%97%BA%E8%9C%9C%E5%9C%A8%E9%9F%A9%E5%9B%BD%E7%9A%84%E7%BE%8A%E6%8E%92%E5%BA%97%E5%81%B6%E9%81%87%E5%B8%85%E5%93%A5%E6%97%B6%23&t=31&band_rank=46&Refer=top)
1. [伊能静发长文谈后会友期](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%8F%91%E9%95%BF%E6%96%87%E8%B0%88%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23&t=31&band_rank=47&Refer=top)
1. [星芒16G版本全平台售罄](https://s.weibo.com//weibo?q=%23%E6%98%9F%E8%8A%9216G%E7%89%88%E6%9C%AC%E5%85%A8%E5%B9%B3%E5%8F%B0%E5%94%AE%E7%BD%84%23&t=31&band_rank=48&Refer=top)
1. [10岁好友溺亡同伴隐瞒4小时未求救](https://s.weibo.com//weibo?q=%2310%E5%B2%81%E5%A5%BD%E5%8F%8B%E6%BA%BA%E4%BA%A1%E5%90%8C%E4%BC%B4%E9%9A%90%E7%9E%924%E5%B0%8F%E6%97%B6%E6%9C%AA%E6%B1%82%E6%95%91%23&t=31&band_rank=49&Refer=top)
1. [一家四口自驾遇落石36岁父亲身亡](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E8%87%AA%E9%A9%BE%E9%81%87%E8%90%BD%E7%9F%B336%E5%B2%81%E7%88%B6%E4%BA%B2%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=50&Refer=top)
1. [习近平会见马来西亚总理](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%BC%9A%E8%A7%81%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E6%80%BB%E7%90%86%23&Refer=new_time)
1. [后会友期黄焖鸡事件原声视频](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%BB%84%E7%84%96%E9%B8%A1%E4%BA%8B%E4%BB%B6%E5%8E%9F%E5%A3%B0%E8%A7%86%E9%A2%91&t=31&band_rank=1&Refer=top)
1. [DeepSeek付费体验直线上升](https://s.weibo.com//weibo?q=DeepSeek%E4%BB%98%E8%B4%B9%E4%BD%93%E9%AA%8C%E7%9B%B4%E7%BA%BF%E4%B8%8A%E5%8D%87&t=31&band_rank=2&Refer=top)
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
