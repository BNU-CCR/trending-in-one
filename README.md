# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-22 07:19:16

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
<!-- 最后更新时间 Sun Nov 22 2026 06:19:52 GMT+0800 (China Standard Time) -->

1. [美国人为什么开始反对AI了](https://so.toutiao.com/search?keyword=美国人为什么开始反对AI了)
1. [特朗普称不支持“台独”引岛内震动](https://so.toutiao.com/search?keyword=特朗普称不支持“台独”引岛内震动)
1. [APEC“中国年”取得哪些成果](https://so.toutiao.com/search?keyword=APEC“中国年”取得哪些成果)
1. [还40年房贷和租40年房怎么选](https://so.toutiao.com/search?keyword=还40年房贷和租40年房怎么选)
1. [老人娶小35岁女子 三次起诉家人](https://so.toutiao.com/search?keyword=老人娶小35岁女子%20三次起诉家人)
1. [演员张国强为何突然霸屏](https://so.toutiao.com/search?keyword=演员张国强为何突然霸屏)
1. [建议大家不要一直穿同一双鞋](https://so.toutiao.com/search?keyword=建议大家不要一直穿同一双鞋)
1. [血压在这一区间的人要尽早干预](https://so.toutiao.com/search?keyword=血压在这一区间的人要尽早干预)
1. [高市搭讪特朗普被无视 日网民：丢人](https://so.toutiao.com/search?keyword=高市搭讪特朗普被无视%20日网民：丢人)
1. [睡觉穿袜子有助入睡 但5类人不建议](https://so.toutiao.com/search?keyword=睡觉穿袜子有助入睡%20但5类人不建议)
1. [顺丰速运被暂停参加全军采购活动](https://so.toutiao.com/search?keyword=顺丰速运被暂停参加全军采购活动)
1. [这些“神仙岗位”都是假的](https://so.toutiao.com/search?keyword=这些“神仙岗位”都是假的)
1. [车澈离婚后狂瘦68斤](https://so.toutiao.com/search?keyword=车澈离婚后狂瘦68斤)
1. [顺丰被暂停参加全军采购活动有何影响](https://so.toutiao.com/search?keyword=顺丰被暂停参加全军采购活动有何影响)
1. [金价下跌 现在买金镯子还是再等等](https://so.toutiao.com/search?keyword=金价下跌%20现在买金镯子还是再等等)
1. [决定长寿的3件关键事是什么](https://so.toutiao.com/search?keyword=决定长寿的3件关键事是什么)
1. [出生中国的神经科学家突遭ICE拘留](https://so.toutiao.com/search?keyword=出生中国的神经科学家突遭ICE拘留)
1. [大兴安岭“猫冬”用漏盆下河捞鱼](https://so.toutiao.com/search?keyword=大兴安岭“猫冬”用漏盆下河捞鱼)
1. [国标麻将榜一大姐1年打了20多场比赛](https://so.toutiao.com/search?keyword=国标麻将榜一大姐1年打了20多场比赛)
1. [黄景瑜腿绞泰国拳王](https://so.toutiao.com/search?keyword=黄景瑜腿绞泰国拳王)
1. [杨天真晒零下十度雪地泳装照](https://so.toutiao.com/search?keyword=杨天真晒零下十度雪地泳装照)
1. [山东确定2026年度养老金计发基数](https://so.toutiao.com/search?keyword=山东确定2026年度养老金计发基数)
1. [越南急着向中国取经的根源是什么](https://so.toutiao.com/search?keyword=越南急着向中国取经的根源是什么)
1. [普京对乌克兰军人喊话](https://so.toutiao.com/search?keyword=普京对乌克兰军人喊话)
1. [胰腺癌新药传来重大突破](https://so.toutiao.com/search?keyword=胰腺癌新药传来重大突破)
1. [男生初二觉醒戒断游戏逆袭成年级第二](https://so.toutiao.com/search?keyword=男生初二觉醒戒断游戏逆袭成年级第二)
1. [特朗普一句话搅乱硅谷AI企业出海生意](https://so.toutiao.com/search?keyword=特朗普一句话搅乱硅谷AI企业出海生意)
1. [鲁比奥会参选下届美国总统吗](https://so.toutiao.com/search?keyword=鲁比奥会参选下届美国总统吗)
1. [14日面试13日出结果？长安大学致歉](https://so.toutiao.com/search?keyword=14日面试13日出结果？长安大学致歉)
1. [主人去世20天小猫每天守墓旁](https://so.toutiao.com/search?keyword=主人去世20天小猫每天守墓旁)
1. [特朗普：中俄美元首会晤史无前例](https://so.toutiao.com/search?keyword=特朗普：中俄美元首会晤史无前例)
1. [高市的粉丝外交为何拍到钢板上](https://so.toutiao.com/search?keyword=高市的粉丝外交为何拍到钢板上)
1. [伊朗称击中一架F-16战机](https://so.toutiao.com/search?keyword=伊朗称击中一架F-16战机)
1. [全球PCB供应告急](https://so.toutiao.com/search?keyword=全球PCB供应告急)
1. [为何泽连斯基向欧洲要钱毫不客气](https://so.toutiao.com/search?keyword=为何泽连斯基向欧洲要钱毫不客气)
1. [外国人眼里的深圳长什么样](https://so.toutiao.com/search?keyword=外国人眼里的深圳长什么样)
1. [高市早苗为何继续推动援乌](https://so.toutiao.com/search?keyword=高市早苗为何继续推动援乌)
1. [方力申刷新港澳横渡纪录](https://so.toutiao.com/search?keyword=方力申刷新港澳横渡纪录)
1. [外国人体验深圳：来了就是深圳人](https://so.toutiao.com/search?keyword=外国人体验深圳：来了就是深圳人)
1. [于和伟接受新华社专访](https://so.toutiao.com/search?keyword=于和伟接受新华社专访)
1. [俄乌袭桥战升级](https://so.toutiao.com/search?keyword=俄乌袭桥战升级)
1. [学者：当务之急是做好扩大内需](https://so.toutiao.com/search?keyword=学者：当务之急是做好扩大内需)
1. [大厂为何忙着把养老搬上线](https://so.toutiao.com/search?keyword=大厂为何忙着把养老搬上线)
1. [台学者：大陆根本不需要动武](https://so.toutiao.com/search?keyword=台学者：大陆根本不需要动武)
1. [马斯克为何在上海大谈人形机器人](https://so.toutiao.com/search?keyword=马斯克为何在上海大谈人形机器人)
1. [菲总统夸赞中方选曲温暖贴心](https://so.toutiao.com/search?keyword=菲总统夸赞中方选曲温暖贴心)
1. [低温对神舟二十四号发射有何挑战](https://so.toutiao.com/search?keyword=低温对神舟二十四号发射有何挑战)
1. [特朗普在深圳跳了YMCA](https://so.toutiao.com/search?keyword=特朗普在深圳跳了YMCA)
1. [张荣恭：两岸不是“国与国”的关系](https://so.toutiao.com/search?keyword=张荣恭：两岸不是“国与国”的关系)
1. [王安宇公主抱王楚然](https://so.toutiao.com/search?keyword=王安宇公主抱王楚然)
1. [青海德令哈目前总体情况平稳](https://so.toutiao.com/search?keyword=青海德令哈目前总体情况平稳)
1. [两名日本人在上海发生冲突致一人死亡](https://so.toutiao.com/search?keyword=两名日本人在上海发生冲突致一人死亡)
1. [永州队主场1-1战平长沙队](https://so.toutiao.com/search?keyword=永州队主场1-1战平长沙队)
1. [80后小伙放弃高薪工作到大凉山支教](https://so.toutiao.com/search?keyword=80后小伙放弃高薪工作到大凉山支教)
1. [扁桃体反复发炎该不该割](https://so.toutiao.com/search?keyword=扁桃体反复发炎该不该割)
1. [朱雀三号回收发动机点火试车有何意义](https://so.toutiao.com/search?keyword=朱雀三号回收发动机点火试车有何意义)
1. [英超官方解释哈兰德进球无效](https://so.toutiao.com/search?keyword=英超官方解释哈兰德进球无效)
1. [WTT总决赛混双外卡归属引争议](https://so.toutiao.com/search?keyword=WTT总决赛混双外卡归属引争议)
1. [美政府面临停摆风险](https://so.toutiao.com/search?keyword=美政府面临停摆风险)
1. [怎么看深圳名场面刷屏海外](https://so.toutiao.com/search?keyword=怎么看深圳名场面刷屏海外)
1. [河南培育钻石1克拉千元](https://so.toutiao.com/search?keyword=河南培育钻石1克拉千元)
1. [安德森收获曼城生涯英超首球](https://so.toutiao.com/search?keyword=安德森收获曼城生涯英超首球)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Nov 22 2026 07:09:14 GMT+0800 (China Standard Time) -->

1. [多所高校不向2027级研究生提供宿舍](https://www.zhihu.com/search?q=%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E4%B8%8D%E5%90%912027%E7%BA%A7%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8F%90%E4%BE%9B%E5%AE%BF%E8%88%8D)
1. [特朗普刚返美就发重大预告](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E5%88%9A%E8%BF%94%E7%BE%8E%E5%B0%B1%E5%8F%91%E9%87%8D%E5%A4%A7%E9%A2%84%E5%91%8A)
1. [AI证明黎曼猜想](https://www.zhihu.com/search?q=AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [知乎智能搜索全新上线](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2%E5%85%A8%E6%96%B0%E4%B8%8A%E7%BA%BF)
1. [李子柒当选四川文联副主席](https://www.zhihu.com/search?q=%E6%9D%8E%E5%AD%90%E6%9F%92%E5%BD%93%E9%80%89%E5%9B%9B%E5%B7%9D%E6%96%87%E8%81%94%E5%89%AF%E4%B8%BB%E5%B8%AD)
1. [黄仁勋据称将创办新的半导体公司](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%8D%AE%E7%A7%B0%E5%B0%86%E5%88%9B%E5%8A%9E%E6%96%B0%E7%9A%84%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%85%AC%E5%8F%B8)
1. [中俄美三国元首会晤](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4)
1. [知乎智能搜索](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2)
1. [中方回应高市早苗礼宾安排](https://www.zhihu.com/search?q=%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A4%BC%E5%AE%BE%E5%AE%89%E6%8E%92)
1. [Anthropic上市](https://www.zhihu.com/search?q=Anthropic%E4%B8%8A%E5%B8%82)
1. [知乎数据开放平台新玩法](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%95%B0%E6%8D%AE%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E6%96%B0%E7%8E%A9%E6%B3%95)
1. [顺丰被暂停参加全军采购](https://www.zhihu.com/search?q=%E9%A1%BA%E4%B8%B0%E8%A2%AB%E6%9A%82%E5%81%9C%E5%8F%82%E5%8A%A0%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD)
1. [DeepSeek付费体验直线上升](https://www.zhihu.com/search?q=DeepSeek%E4%BB%98%E8%B4%B9%E4%BD%93%E9%AA%8C%E7%9B%B4%E7%BA%BF%E4%B8%8A%E5%8D%87)
1. [DeepSeek调整对话上限长度](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4%E5%AF%B9%E8%AF%9D%E4%B8%8A%E9%99%90%E9%95%BF%E5%BA%A6)
1. [数学家完成NS方程无外力证明](https://www.zhihu.com/search?q=%E6%95%B0%E5%AD%A6%E5%AE%B6%E5%AE%8C%E6%88%90NS%E6%96%B9%E7%A8%8B%E6%97%A0%E5%A4%96%E5%8A%9B%E8%AF%81%E6%98%8E)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Nov 22 2026 07:19:16 GMT+0800 (China Standard Time) -->

1. [MIT 团队发布对黎曼猜想证明的验证，超 17 万模块全部编译无错，这意味着黎曼猜想证明多大概率为真？](https://www.zhihu.com/question/2107387590592525600)
1. [Lean与 Mathlib 社区联合声明，正式确认 Alpöge 对黎曼猜想的证明正确，这意味着什么？](https://www.zhihu.com/question/2107620110105932500)
1. [荷兰法院裁定比亚迪Ti7抄袭路虎卫士，颁布销售禁令，对此怎么看？](https://www.zhihu.com/question/2107417541236806000)
1. [如何看待11月21日三维ns方程有限时间爆破的形式化证明疑似已经完成？](https://www.zhihu.com/question/2107281397077500200)
1. [顺丰速运涉嫌存在违规问题，被暂停参加全军采购活动，具体是怎么回事？](https://www.zhihu.com/question/2107442131073593900)
1. [20多天婴儿被喂白开水中毒肾损伤，新生儿为何不能像成年人一样正常喝白开水？该如何科学喂养？](https://www.zhihu.com/question/2106868147718284300)
1. [怎么看 OpenAI 宣布升级反蒸馏防御，隐藏推理提取成功率从 54% 降至 0.2% ？](https://www.zhihu.com/question/2107430398359885300)
1. [如何看待截至2026年5月11日，米哈游57810 颗英伟达H200获批却未发货，这意味着什么？](https://www.zhihu.com/question/2107534705163777300)
1. [如何看待韩国高考中国史题正确率不足一成？这道题难度究竟如何？](https://www.zhihu.com/question/2107440924695291000)
1. [菲尔兹奖得主邓煜称「人类不能放弃自主思考给 AI 当狗」，如何看待这一观点？](https://www.zhihu.com/question/2099876169013258200)
1. [SEC正调查英伟达潜在会计问题，股价当天跌超14%，这件事后续会如何发展？](https://www.zhihu.com/question/2107472069340550100)
1. [有比《持械入宋》更好看的短剧吗？](https://www.zhihu.com/question/2103550053273149400)
1. [如何评价米哈游电子科技大学校招宣讲会技术负责人曝光原神IP未来的研发方向？](https://www.zhihu.com/question/2107022824976159700)
1. [山东威海发现加拿大飞来的干饭雪雁，威海不是号称雪窝子吗？为啥候鸟会选择在这过冬？](https://www.zhihu.com/question/2106702040785339400)
1. [为啥我军没有名满天下的特种部队？比如海豹部队什么的？](https://www.zhihu.com/question/2107046874389729300)
1. [姚顺雨携腾讯混元团队完成 120 分钟在线问答，有哪些信息值得关注？](https://www.zhihu.com/question/2107402315917420500)
1. [邵佳一带队取得 10 战 4 胜 2 平 4 负战绩，亚洲杯延期，该优先补强哪块短板？](https://www.zhihu.com/question/2106274596567700200)
1. [黎曼猜想数学证明长达 25 万页是什么概念？人类还有可能完整读懂吗？](https://www.zhihu.com/question/2107262299765306400)
1. [摩尔线程官宣消费级显卡「庐山」，宣称光追暴涨 50 倍且刷新显存上限，实际体验能达到预期吗？](https://www.zhihu.com/question/2107187179504006100)
1. [特朗普返美后召开新闻发布会，称中俄美元首会晤「史无前例」「意义重大」，哪些信息值得关注？](https://www.zhihu.com/question/2107175088915050800)
1. [如何看待DeepSeek因免费端限额，且无充值入口，被称付费体验直线上升？它们会开放C端个人订阅吗？](https://www.zhihu.com/question/2107394861363983000)
1. [如何评价11月微软悄悄上架的全新中文输入法？](https://www.zhihu.com/question/2106793828950843400)
1. [《Gta6》M站用户开分仅3.7分，现已5.4分，如何看待用户评分与媒体评分两极分化？](https://www.zhihu.com/question/2107390437933707500)
1. [数学家宣称 Claude 证明黎曼猜想，为啥Anthropic股价仍在暴跌？市场不买账，核心原因是啥？](https://www.zhihu.com/question/2107267149399947000)
1. [超强厄尔尼诺已经形成，已成为有记录以来最强，这意味着什么？产生的气候影响大吗？](https://www.zhihu.com/question/2106305744966530800)
1. [如何看待余承东再称L3自动驾驶来临后可睡觉但不能睡死，随后微博强调现在是L2但未明确L3能否睡觉？](https://www.zhihu.com/question/2107155066318858000)
1. [特朗普称不允许美企海外建数据中心，如果违反将面临「巨额税收」处罚，这会对美国科技公司发展带来哪些影响？](https://www.zhihu.com/question/2107449650592445700)
1. [信用卡近一年减少 3400 万张，信用卡为何逐渐失去吸引力？背后反映出消费者支付习惯发生了哪些变化？](https://www.zhihu.com/question/2107163928622888000)
1. [想要孩子脾气稳，家长脾气就得先稳，你觉得对吗？](https://www.zhihu.com/question/2061027581084820000)
1. [孩子学习过程中，有没有哪个进步瞬间惊艳到了你？](https://www.zhihu.com/question/2093789387150586600)
1. [为什么早餐利润这么高大家都不去做呢？](https://www.zhihu.com/question/621050716)
1. [网友称零跑A10装啤酒致后备厢储物盒脱落，客服称未接到反馈，具体是怎么回事？储物盒能如何规避承重隐患？](https://www.zhihu.com/question/2107047283686691600)
1. [为什么网络上总是说“外卖小哥藏龙卧虎”，这种刻板印象到底是怎么形成的？](https://www.zhihu.com/question/2106416810002273800)
1. [黄金一周大跌近9%，考验3500美元关口，现在适合抄底黄金吗？](https://www.zhihu.com/question/2107401788676743400)
1. [初三女儿因妈妈当亲戚面说她的糗事儿而离家住同学家，妈妈却说“有什么不能说的”，这事到底谁的问题更大？](https://www.zhihu.com/question/2106544120856580600)
1. [有哪些方言是你以为全国通用，长大后才发现只有家里人才懂的？](https://www.zhihu.com/question/2104616197803047000)
1. [繁体字会不会再衍生出不同于大陆简体字的简化文字系统？](https://www.zhihu.com/question/1890690783696367900)
1. [黄金还会再次跌到600一克吗？](https://www.zhihu.com/question/2107047477912379400)
1. [你今天感悟到了什么？](https://www.zhihu.com/question/1935426558882981600)
1. [黄土高原地区为什么要住窑洞？](https://www.zhihu.com/question/2088745451675825200)

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
<!-- 最后更新时间 Sun Nov 22 2026 03:28:59 GMT+0800 (China Standard Time) -->

1. [和合共生](https://s.weibo.com//weibo?q=%23%E5%92%8C%E5%90%88%E5%85%B1%E7%94%9F%23&Refer=new_time)
1. [特朗普深圳不拉窗帘原因找到了](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%B7%B1%E5%9C%B3%E4%B8%8D%E6%8B%89%E7%AA%97%E5%B8%98%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23&t=31&band_rank=1&Refer=top)
1. [Fly奖杯被撞掉](https://s.weibo.com//weibo?q=%23Fly%E5%A5%96%E6%9D%AF%E8%A2%AB%E6%92%9E%E6%8E%89%23&t=31&band_rank=2&Refer=top)
1. [APEC现场的确定性藏在这些细节里](https://s.weibo.com//weibo?q=%23APEC%E7%8E%B0%E5%9C%BA%E7%9A%84%E7%A1%AE%E5%AE%9A%E6%80%A7%E8%97%8F%E5%9C%A8%E8%BF%99%E4%BA%9B%E7%BB%86%E8%8A%82%E9%87%8C%23&t=31&band_rank=3&Refer=top)
1. [这居然是王子璇](https://s.weibo.com//weibo?q=%23%E8%BF%99%E5%B1%85%E7%84%B6%E6%98%AF%E7%8E%8B%E5%AD%90%E7%92%87%23&t=31&band_rank=4&Refer=top)
1. [厉娜出场帅晕了](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E5%87%BA%E5%9C%BA%E5%B8%85%E6%99%95%E4%BA%86%23&t=31&band_rank=5&Refer=top)
1. [周杰高情商回答穷人该不该生孩子](https://s.weibo.com//weibo?q=%E5%91%A8%E6%9D%B0%E9%AB%98%E6%83%85%E5%95%86%E5%9B%9E%E7%AD%94%E7%A9%B7%E4%BA%BA%E8%AF%A5%E4%B8%8D%E8%AF%A5%E7%94%9F%E5%AD%A9%E5%AD%90&t=31&band_rank=6&Refer=top)
1. [央视揭秘网络女主播真实生态](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E6%8F%AD%E7%A7%98%E7%BD%91%E7%BB%9C%E5%A5%B3%E4%B8%BB%E6%92%AD%E7%9C%9F%E5%AE%9E%E7%94%9F%E6%80%81%23&t=31&band_rank=7&Refer=top)
1. [体坛 圈运](https://s.weibo.com//weibo?q=%E4%BD%93%E5%9D%9B%20%E5%9C%88%E8%BF%90&t=31&band_rank=8&Refer=top)
1. [榜一大哥的占有欲从屏幕爬进现实](https://s.weibo.com//weibo?q=%23%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E7%9A%84%E5%8D%A0%E6%9C%89%E6%AC%B2%E4%BB%8E%E5%B1%8F%E5%B9%95%E7%88%AC%E8%BF%9B%E7%8E%B0%E5%AE%9E%23&t=31&band_rank=9&Refer=top)
1. [韩国涉嫌作弊满分考生遗书公开](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B6%89%E5%AB%8C%E4%BD%9C%E5%BC%8A%E6%BB%A1%E5%88%86%E8%80%83%E7%94%9F%E9%81%97%E4%B9%A6%E5%85%AC%E5%BC%80%23&t=31&band_rank=10&Refer=top)
1. [2名在华日本人发生冲突1人死亡](https://s.weibo.com//weibo?q=%232%E5%90%8D%E5%9C%A8%E5%8D%8E%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%8F%91%E7%94%9F%E5%86%B2%E7%AA%811%E4%BA%BA%E6%AD%BB%E4%BA%A1%23&t=31&band_rank=11&Refer=top)
1. [羽绒服生意变天了](https://s.weibo.com//weibo?q=%23%E7%BE%BD%E7%BB%92%E6%9C%8D%E7%94%9F%E6%84%8F%E5%8F%98%E5%A4%A9%E4%BA%86%23&t=31&band_rank=12&Refer=top)
1. [陈赫 天霸](https://s.weibo.com//weibo?q=%E9%99%88%E8%B5%AB%20%E5%A4%A9%E9%9C%B8&t=31&band_rank=13&Refer=top)
1. [原来转账是可以拦截的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E8%BD%AC%E8%B4%A6%E6%98%AF%E5%8F%AF%E4%BB%A5%E6%8B%A6%E6%88%AA%E7%9A%84&t=31&band_rank=14&Refer=top)
1. [Bin背小书包是想退役](https://s.weibo.com//weibo?q=%23Bin%E8%83%8C%E5%B0%8F%E4%B9%A6%E5%8C%85%E6%98%AF%E6%83%B3%E9%80%80%E5%BD%B9%23&t=31&band_rank=15&Refer=top)
1. [顺丰速运被暂停参加全军采购活动](https://s.weibo.com//weibo?q=%23%E9%A1%BA%E4%B8%B0%E9%80%9F%E8%BF%90%E8%A2%AB%E6%9A%82%E5%81%9C%E5%8F%82%E5%8A%A0%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD%E6%B4%BB%E5%8A%A8%23&t=31&band_rank=16&Refer=top)
1. [王菲李嫣黑白自拍](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%9D%8E%E5%AB%A3%E9%BB%91%E7%99%BD%E8%87%AA%E6%8B%8D%23&t=31&band_rank=17&Refer=top)
1. [杜海涛和沈梦辰太接地气了](https://s.weibo.com//weibo?q=%23%E6%9D%9C%E6%B5%B7%E6%B6%9B%E5%92%8C%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%A4%AA%E6%8E%A5%E5%9C%B0%E6%B0%94%E4%BA%86%23&t=31&band_rank=18&Refer=top)
1. [晋妈解释给李勒优开亲密付](https://s.weibo.com//weibo?q=%23%E6%99%8B%E5%A6%88%E8%A7%A3%E9%87%8A%E7%BB%99%E6%9D%8E%E5%8B%92%E4%BC%98%E5%BC%80%E4%BA%B2%E5%AF%86%E4%BB%98%23&t=31&band_rank=19&Refer=top)
1. [刘宪华抽到亲妹妹](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AE%AA%E5%8D%8E%E6%8A%BD%E5%88%B0%E4%BA%B2%E5%A6%B9%E5%A6%B9%23&t=31&band_rank=20&Refer=top)
1. [沈腾摔倒现发所有人都在扶](https://s.weibo.com//weibo?q=%23%E6%B2%88%E8%85%BE%E6%91%94%E5%80%92%E7%8E%B0%E5%8F%91%E6%89%80%E6%9C%89%E4%BA%BA%E9%83%BD%E5%9C%A8%E6%89%B6%23&t=31&band_rank=21&Refer=top)
1. [白小纯远点一穿二](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%BF%9C%E7%82%B9%E4%B8%80%E7%A9%BF%E4%BA%8C%23&t=31&band_rank=22&Refer=top)
1. [肾脏这辈子打的就是高端局](https://s.weibo.com//weibo?q=%E8%82%BE%E8%84%8F%E8%BF%99%E8%BE%88%E5%AD%90%E6%89%93%E7%9A%84%E5%B0%B1%E6%98%AF%E9%AB%98%E7%AB%AF%E5%B1%80&t=31&band_rank=23&Refer=top)
1. [秦昊当着镜头直接数落伊能静](https://s.weibo.com//weibo?q=%23%E7%A7%A6%E6%98%8A%E5%BD%93%E7%9D%80%E9%95%9C%E5%A4%B4%E7%9B%B4%E6%8E%A5%E6%95%B0%E8%90%BD%E4%BC%8A%E8%83%BD%E9%9D%99%23&t=31&band_rank=24&Refer=top)
1. [杨超越说跪下董思成秒跪](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%AF%B4%E8%B7%AA%E4%B8%8B%E8%91%A3%E6%80%9D%E6%88%90%E7%A7%92%E8%B7%AA%23&t=31&band_rank=25&Refer=top)
1. [成毅演技](https://s.weibo.com//weibo?q=%E6%88%90%E6%AF%85%E6%BC%94%E6%8A%80&t=31&band_rank=26&Refer=top)
1. [白小纯青稚同时淘汰](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E5%90%8C%E6%97%B6%E6%B7%98%E6%B1%B0%23&t=31&band_rank=27&Refer=top)
1. [苏新皓给自己的黑手调滤镜](https://s.weibo.com//weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E7%BB%99%E8%87%AA%E5%B7%B1%E7%9A%84%E9%BB%91%E6%89%8B%E8%B0%83%E6%BB%A4%E9%95%9C%23&t=31&band_rank=28&Refer=top)
1. [CBA俱乐部杯](https://s.weibo.com//weibo?q=CBA%E4%BF%B1%E4%B9%90%E9%83%A8%E6%9D%AF&t=31&band_rank=29&Refer=top)
1. [武警战士王猛真猛](https://s.weibo.com//weibo?q=%23%E6%AD%A6%E8%AD%A6%E6%88%98%E5%A3%AB%E7%8E%8B%E7%8C%9B%E7%9C%9F%E7%8C%9B%23&t=31&band_rank=30&Refer=top)
1. [男孩相亲二次见面疑似成了](https://s.weibo.com//weibo?q=%E7%94%B7%E5%AD%A9%E7%9B%B8%E4%BA%B2%E4%BA%8C%E6%AC%A1%E8%A7%81%E9%9D%A2%E7%96%91%E4%BC%BC%E6%88%90%E4%BA%86&t=31&band_rank=31&Refer=top)
1. [曝窦唯四婚](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E7%AA%A6%E5%94%AF%E5%9B%9B%E5%A9%9A%23&t=31&band_rank=32&Refer=top)
1. [田柾国直播](https://s.weibo.com//weibo?q=%E7%94%B0%E6%9F%BE%E5%9B%BD%E7%9B%B4%E6%92%AD&t=31&band_rank=33&Refer=top)
1. [为什么全世界所有资产都在跌](https://s.weibo.com//weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%85%A8%E4%B8%96%E7%95%8C%E6%89%80%E6%9C%89%E8%B5%84%E4%BA%A7%E9%83%BD%E5%9C%A8%E8%B7%8C%23&t=31&band_rank=34&Refer=top)
1. [逐玉见面会张凌赫现场书法展示](https://s.weibo.com//weibo?q=%23%E9%80%90%E7%8E%89%E8%A7%81%E9%9D%A2%E4%BC%9A%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%B0%E5%9C%BA%E4%B9%A6%E6%B3%95%E5%B1%95%E7%A4%BA%23&t=31&band_rank=35&Refer=top)
1. [李亚鹏找李嫣吃饭](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E6%89%BE%E6%9D%8E%E5%AB%A3%E5%90%83%E9%A5%AD%23&t=31&band_rank=36&Refer=top)
1. [青稚今日最高伤害](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E4%BB%8A%E6%97%A5%E6%9C%80%E9%AB%98%E4%BC%A4%E5%AE%B3%23&t=31&band_rank=37&Refer=top)
1. [天霸12局6鸡](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E9%9C%B812%E5%B1%806%E9%B8%A1%23&t=31&band_rank=38&Refer=top)
1. [昀牵孟绕](https://s.weibo.com//weibo?q=%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95&t=31&band_rank=39&Refer=top)
1. [Viper直播](https://s.weibo.com//weibo?q=Viper%E7%9B%B4%E6%92%AD&t=31&band_rank=40&Refer=top)
1. [终于有节目讽刺内娱乱象了](https://s.weibo.com//weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E8%8A%82%E7%9B%AE%E8%AE%BD%E5%88%BA%E5%86%85%E5%A8%B1%E4%B9%B1%E8%B1%A1%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [白鹿短发跳舞好有少年感](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9F%AD%E5%8F%91%E8%B7%B3%E8%88%9E%E5%A5%BD%E6%9C%89%E5%B0%91%E5%B9%B4%E6%84%9F%23&t=31&band_rank=42&Refer=top)
1. [月薪6千过出两万的生活质量](https://s.weibo.com//weibo?q=%E6%9C%88%E8%96%AA6%E5%8D%83%E8%BF%87%E5%87%BA%E4%B8%A4%E4%B8%87%E7%9A%84%E7%94%9F%E6%B4%BB%E8%B4%A8%E9%87%8F&t=31&band_rank=43&Refer=top)
1. [BLG全员邀功](https://s.weibo.com//weibo?q=%23BLG%E5%85%A8%E5%91%98%E9%82%80%E5%8A%9F%23&t=31&band_rank=44&Refer=top)
1. [体坛17杀被毒死](https://s.weibo.com//weibo?q=%E4%BD%93%E5%9D%9B17%E6%9D%80%E8%A2%AB%E6%AF%92%E6%AD%BB&t=31&band_rank=45&Refer=top)
1. [BLG全员复盘S14决赛](https://s.weibo.com//weibo?q=%23BLG%E5%85%A8%E5%91%98%E5%A4%8D%E7%9B%98S14%E5%86%B3%E8%B5%9B%23&t=31&band_rank=46&Refer=top)
1. [李昀锐说白鹿想的还是片场跟家里](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%AF%B4%E7%99%BD%E9%B9%BF%E6%83%B3%E7%9A%84%E8%BF%98%E6%98%AF%E7%89%87%E5%9C%BA%E8%B7%9F%E5%AE%B6%E9%87%8C%23&t=31&band_rank=47&Refer=top)
1. [刘佳玺把杨超越董思成视频发给肖添仁](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%BD%B3%E7%8E%BA%E6%8A%8A%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%91%A3%E6%80%9D%E6%88%90%E8%A7%86%E9%A2%91%E5%8F%91%E7%BB%99%E8%82%96%E6%B7%BB%E4%BB%81%23&t=31&band_rank=48&Refer=top)
1. [彭昱畅被AI融脸](https://s.weibo.com//weibo?q=%23%E5%BD%AD%E6%98%B1%E7%95%85%E8%A2%ABAI%E8%9E%8D%E8%84%B8%23&t=31&band_rank=49&Refer=top)
1. [上海男篮俱乐部杯出局](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AE%E4%BF%B1%E4%B9%90%E9%83%A8%E6%9D%AF%E5%87%BA%E5%B1%80%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
