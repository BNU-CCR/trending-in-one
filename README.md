# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-26 00:57:19

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
<!-- 最后更新时间 Wed Aug 26 2026 00:13:48 GMT+0800 (China Standard Time) -->

1. [台风紫檀已登陆](https://so.toutiao.com/search?keyword=台风紫檀已登陆)
1. [在韩失联中国女生遇害 嫌犯落网](https://so.toutiao.com/search?keyword=在韩失联中国女生遇害%20嫌犯落网)
1. [外国游客沉浸式体验“中国酷”](https://so.toutiao.com/search?keyword=外国游客沉浸式体验“中国酷”)
1. [30多国宣布准备向乌派兵](https://so.toutiao.com/search?keyword=30多国宣布准备向乌派兵)
1. [“羞辱式”劝退应届生的上市公司致歉](https://so.toutiao.com/search?keyword=“羞辱式”劝退应届生的上市公司致歉)
1. [专家：中东军购天平正倾向中国](https://so.toutiao.com/search?keyword=专家：中东军购天平正倾向中国)
1. [在韩遇害女生原计划23日回国入职](https://so.toutiao.com/search?keyword=在韩遇害女生原计划23日回国入职)
1. [80、90、00后退休时间一览](https://so.toutiao.com/search?keyword=80、90、00后退休时间一览)
1. [一架美国军机降落莫斯科](https://so.toutiao.com/search?keyword=一架美国军机降落莫斯科)
1. [官方：征集火箭军部队违规采购问题](https://so.toutiao.com/search?keyword=官方：征集火箭军部队违规采购问题)
1. [“武汉轮椅老人上高架蓄意碰瓷”不实](https://so.toutiao.com/search?keyword=“武汉轮椅老人上高架蓄意碰瓷”不实)
1. [赵丽颖突发身体不适](https://so.toutiao.com/search?keyword=赵丽颖突发身体不适)
1. [约8500名朝鲜兵员部署至俄乌前线](https://so.toutiao.com/search?keyword=约8500名朝鲜兵员部署至俄乌前线)
1. [演员陈明求职上热搜后热度不减](https://so.toutiao.com/search?keyword=演员陈明求职上热搜后热度不减)
1. [瓶装饮料为什么不好卖了](https://so.toutiao.com/search?keyword=瓶装饮料为什么不好卖了)
1. [央媒评扶老人被索赔：法律不能和稀泥](https://so.toutiao.com/search?keyword=央媒评扶老人被索赔：法律不能和稀泥)
1. [美防长称不排除再次军事打击伊朗](https://so.toutiao.com/search?keyword=美防长称不排除再次军事打击伊朗)
1. [尹锡悦出庭作证：宣布戒严是因为天真](https://so.toutiao.com/search?keyword=尹锡悦出庭作证：宣布戒严是因为天真)
1. [媒体：人道主义补偿不是息事宁人工具](https://so.toutiao.com/search?keyword=媒体：人道主义补偿不是息事宁人工具)
1. [A股转折点近了吗](https://so.toutiao.com/search?keyword=A股转折点近了吗)
1. [大众汽车计划扩大裁员规模至10万人](https://so.toutiao.com/search?keyword=大众汽车计划扩大裁员规模至10万人)
1. [女子翻相册发现和张凌赫搭过戏](https://so.toutiao.com/search?keyword=女子翻相册发现和张凌赫搭过戏)
1. [人形机器人百米竞速再次刷新纪录](https://so.toutiao.com/search?keyword=人形机器人百米竞速再次刷新纪录)
1. [《披哥6》选手欢子陷摆烂退赛争议](https://so.toutiao.com/search?keyword=《披哥6》选手欢子陷摆烂退赛争议)
1. [女子不足百斤过度节食抽出14斤腹水](https://so.toutiao.com/search?keyword=女子不足百斤过度节食抽出14斤腹水)
1. [成都蛋烘糕奶奶遭镜头霸凌](https://so.toutiao.com/search?keyword=成都蛋烘糕奶奶遭镜头霸凌)
1. [浙江女子支付宝莫名其妙被扣钱](https://so.toutiao.com/search?keyword=浙江女子支付宝莫名其妙被扣钱)
1. [阳澄湖大闸蟹IP形象首次亮相](https://so.toutiao.com/search?keyword=阳澄湖大闸蟹IP形象首次亮相)
1. [记者：中埃“文明之鹰”联训再升级](https://so.toutiao.com/search?keyword=记者：中埃“文明之鹰”联训再升级)
1. [男孩手臂骨折成S形 医生一分钟捋直](https://so.toutiao.com/search?keyword=男孩手臂骨折成S形%20医生一分钟捋直)
1. [曝美方多次面试联合国秘书长候选人](https://so.toutiao.com/search?keyword=曝美方多次面试联合国秘书长候选人)
1. [中方：同伊朗合作不应受到干扰破坏](https://so.toutiao.com/search?keyword=中方：同伊朗合作不应受到干扰破坏)
1. [为什么说9月会有好行情](https://so.toutiao.com/search?keyword=为什么说9月会有好行情)
1. [湖中惊现多条“神秘大鱼”](https://so.toutiao.com/search?keyword=湖中惊现多条“神秘大鱼”)
1. [叔叔带侄女录取通知书到亲人坟前报喜](https://so.toutiao.com/search?keyword=叔叔带侄女录取通知书到亲人坟前报喜)
1. [国安部：靖国神社就是战犯神社](https://so.toutiao.com/search?keyword=国安部：靖国神社就是战犯神社)
1. [美欧宇航员再次出舱执行舱外任务](https://so.toutiao.com/search?keyword=美欧宇航员再次出舱执行舱外任务)
1. [中国机器人蹲身一跃跳出近3.3米高](https://so.toutiao.com/search?keyword=中国机器人蹲身一跃跳出近3.3米高)
1. [四川省人大常委会原委员刘中伯被双开](https://so.toutiao.com/search?keyword=四川省人大常委会原委员刘中伯被双开)
1. [从12楼坠楼男子近50天过去仍未醒](https://so.toutiao.com/search?keyword=从12楼坠楼男子近50天过去仍未醒)
1. [王楚钦孙颖莎将出战中国大满贯](https://so.toutiao.com/search?keyword=王楚钦孙颖莎将出战中国大满贯)
1. [女子腰上冒水疱确诊带状疱疹](https://so.toutiao.com/search?keyword=女子腰上冒水疱确诊带状疱疹)
1. [网友爆料特斯拉FSD进入中国无望](https://so.toutiao.com/search?keyword=网友爆料特斯拉FSD进入中国无望)
1. [博主让电动两轮车飞上“天”](https://so.toutiao.com/search?keyword=博主让电动两轮车飞上“天”)
1. [开学季中学“发型令”引热议](https://so.toutiao.com/search?keyword=开学季中学“发型令”引热议)
1. [乌兰察布山洪4人遇难](https://so.toutiao.com/search?keyword=乌兰察布山洪4人遇难)
1. [电梯故障儿童被困救援流程遭质疑](https://so.toutiao.com/search?keyword=电梯故障儿童被困救援流程遭质疑)
1. [小伙把腹胀当胃病查出肝癌晚期](https://so.toutiao.com/search?keyword=小伙把腹胀当胃病查出肝癌晚期)
1. [两村民遭野猪攻击1人坠崖身亡1人受伤](https://so.toutiao.com/search?keyword=两村民遭野猪攻击1人坠崖身亡1人受伤)
1. [越南为何为对接中国铁路追加30亿美元](https://so.toutiao.com/search?keyword=越南为何为对接中国铁路追加30亿美元)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Aug 26 2026 00:58:33 GMT+0800 (China Standard Time) -->

1. [官方通报星宇股份批量劝退应届生](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E6%89%B9%E9%87%8F%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F)
1. [中国女生在韩失联已遇害](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%B7%B2%E9%81%87%E5%AE%B3)
1. [北大教授称灵活就业是一种福利](https://www.zhihu.com/search?q=%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E7%A7%B0%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%98%AF%E4%B8%80%E7%A7%8D%E7%A6%8F%E5%88%A9)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [台风「紫檀」登陆](https://www.zhihu.com/search?q=%E5%8F%B0%E9%A3%8E%E3%80%8C%E7%B4%AB%E6%AA%80%E3%80%8D%E7%99%BB%E9%99%86)
1. [老人进店休息离世店家帮扶遭索赔](https://www.zhihu.com/search?q=%E8%80%81%E4%BA%BA%E8%BF%9B%E5%BA%97%E4%BC%91%E6%81%AF%E7%A6%BB%E4%B8%96%E5%BA%97%E5%AE%B6%E5%B8%AE%E6%89%B6%E9%81%AD%E7%B4%A2%E8%B5%94)
1. [陕西版「孙小果」二审维持死刑](https://www.zhihu.com/search?q=%E9%99%95%E8%A5%BF%E7%89%88%E3%80%8C%E5%AD%99%E5%B0%8F%E6%9E%9C%E3%80%8D%E4%BA%8C%E5%AE%A1%E7%BB%B4%E6%8C%81%E6%AD%BB%E5%88%91)
1. [德芙七夕营销翻车](https://www.zhihu.com/search?q=%E5%BE%B7%E8%8A%99%E4%B8%83%E5%A4%95%E8%90%A5%E9%94%80%E7%BF%BB%E8%BD%A6)
1. [小米玄戒芯片发布会](https://www.zhihu.com/search?q=%E5%B0%8F%E7%B1%B3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E5%8F%91%E5%B8%83%E4%BC%9A)
1. [《黑神话：钟馗》发布实机演示视频](https://www.zhihu.com/search?q=%E3%80%8A%E9%BB%91%E7%A5%9E%E8%AF%9D%EF%BC%9A%E9%92%9F%E9%A6%97%E3%80%8B%E5%8F%91%E5%B8%83%E5%AE%9E%E6%9C%BA%E6%BC%94%E7%A4%BA%E8%A7%86%E9%A2%91)
1. [甲醛白菜被运往江苏安徽多地](https://www.zhihu.com/search?q=%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E8%A2%AB%E8%BF%90%E5%BE%80%E6%B1%9F%E8%8B%8F%E5%AE%89%E5%BE%BD%E5%A4%9A%E5%9C%B0)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Aug 26 2026 00:57:19 GMT+0800 (China Standard Time) -->

1. [德芙七夕营销「趁男朋友不在跟暧昧对象分享」翻车，为何此类翻车频繁发生，哪里出了问题？对德芙会有影响吗？](https://www.zhihu.com/question/2075290376429216000)
1. [舍友们提议轮流请客吃饭，不想参加也不想请，如何礼貌拒绝不被孤立？](https://www.zhihu.com/question/2072469113600055000)
1. [希尔顿花园等贴牌外资酒店遇冷，消费者吐槽「还不如全季亚朵」，外资酒店贴牌大法不灵了吗？为什么会这样？](https://www.zhihu.com/question/2075239391585485000)
1. [媒体报道一斤鸭脖能买一斤牛肉一斤排骨，为什么会出现这种价格倒挂现象？鸭货真的降完价还是「刺客」吗？](https://www.zhihu.com/question/2074470804750854100)
1. [大批 AI 博主集中停更，背后真实原因是什么，AI 内容赛道接下来会如何发展？](https://www.zhihu.com/question/2072979072867747800)
1. [蚊子只是叮了人一下，人就要蚊子的命，这对蚊子来说公平吗？](https://www.zhihu.com/question/2074337665013630000)
1. [多名农民称莫名成企业法人「被贷款」千万元，涉事银行已启动调查，哪些问题值得关注？](https://www.zhihu.com/question/2074828820763369500)
1. [法国团队利用离体死后人脑组织控制机械手弹钢琴，该实验有何科学原理和伦理意义？](https://www.zhihu.com/question/2072671013171728600)
1. [教育部通知「幼儿园不能提前教授小学知识」「一年级不能布置书面作业、不进行纸笔考试」，会带来哪些影响？](https://www.zhihu.com/question/2075512171858023200)
1. [为什么童星的发展都很一般？戏路都很窄？](https://www.zhihu.com/question/426538873)
1. [2026 金鹰奖提名揭晓，于和伟王宝强胡歌争视帝，闫妮宋佳马伊俐杨紫争视后，杨幂掉提，你看好哪些获奖？](https://www.zhihu.com/question/2075603608276394200)
1. [Shein 上市估值从 1000 亿缩水到 270 亿美元，跨境电商快时尚的「黄金时代」是不是过去了？](https://www.zhihu.com/question/2075160925938479900)
1. [如何看待索尼强调「数字游戏仅授权不出售，封号即资产清零」？你支持“全价购买≠拥有”这种做法吗？](https://www.zhihu.com/question/2075302437615842300)
1. [想跟领导提升职的事情，又不敢当面说，发了微信没收到回复，还有必要再当面说么？](https://www.zhihu.com/question/2013899900576866800)
1. [《英雄联盟》怀旧服高调上线却迅速「塌房」，为何「情怀牌」不灵了？](https://www.zhihu.com/question/2075508983952062000)
1. [美国宣布对伊朗实施「经济孤立」新措施，涉航空、黄金、航运等五大领域，这会切断伊朗「所有经济命脉」吗？](https://www.zhihu.com/question/2075544793917272000)
1. [如何看待诺兰《奥德赛》全球吸金超13.52亿，力压《死侍与金刚狼》登顶影史票房最高 R 级电影？](https://www.zhihu.com/question/2074082605125694200)
1. [如何看待丁俊晖连续首轮出局后表示「不知道你们在期待什么」，丁俊晖现在在国内排第几，状态还能恢复吗？](https://www.zhihu.com/question/2075194548683104800)
1. [有哪些有意思的，很cool的开源项目 ？](https://www.zhihu.com/question/22407853)
1. [从《敦刻尔克》《奥本海默》到《奥德赛》，诺兰为何转向回望历史与古典史诗？](https://www.zhihu.com/question/2071351480712262700)
1. [董宇辉等主播走后，东方甄选少发4亿薪酬，新财年净赚超5亿元，怎样解读这一变化？东方甄选转型算成功了吗？](https://www.zhihu.com/question/2074875402359661800)
1. [一碗好面，是面条更重要，还是面汤更重要，还是里面配菜更重要？](https://www.zhihu.com/question/2068409472641503500)
1. [前DeepMind科学家曹原称AI4S最难的是「验证」，为什么「验证」会成为AI自动科研的关键瓶颈？](https://www.zhihu.com/question/2073487407362437000)
1. [如何看待有说法认为：AI 可以证明一些数学猜想，但AI永远成不了开创性数学宗师？](https://www.zhihu.com/question/2072656982637557500)
1. [人民海军海空接力星夜救援重伤渔民，此次行动有哪些亮点？](https://www.zhihu.com/question/2074844700922614500)
1. [如何看待印第安纳步行者（pacers）正在酝酿将球队的中文名换掉，你认为更合适的译名应该是什么？](https://www.zhihu.com/question/2075533221463159300)
1. [天理的社区塑造是不是没达到预期？](https://www.zhihu.com/question/2075005962864351000)
1. [如何看待东华理工大学本科生一年发含JACS在内的七篇论文?](https://www.zhihu.com/question/2075174016571138800)
1. [社交平台看到一个妈妈说孩子学习才给开空调，不然就不开，大人陪孩子一起热，这是暑假，怎么看待这样的事件？](https://www.zhihu.com/question/2075065585021477400)
1. [每隔3~5公里设置自然弯道是高速公路设计的常识，但是为啥我们经常看到美国国家公路直的像到天堂一样？](https://www.zhihu.com/question/37162221)
1. [亲密关系中的「边界感」和「疏离感」，真正的分界点在哪里？](https://www.zhihu.com/question/2072666413693773300)
1. [2026年了，大学生一个月多少生活费才合理？](https://www.zhihu.com/question/2066558957817160700)
1. [高铁无座票和二等座同价再度引发争议，为何二者价格一样？是否有可能差异化定价？](https://www.zhihu.com/question/2075247106428879400)
1. [科二坡道起步总是熄火，半联动到底怎么找？听声音还是看转速表？](https://www.zhihu.com/question/2071545206634289000)
1. [火车票无座票是否应打折或者明示？](https://www.zhihu.com/question/2074414876584304600)

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
<!-- 最后更新时间 Wed Aug 26 2026 01:04:14 GMT+0800 (China Standard Time) -->

1. [习主席同约旦国王谈了这些大事](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E4%B8%BB%E5%B8%AD%E5%90%8C%E7%BA%A6%E6%97%A6%E5%9B%BD%E7%8E%8B%E8%B0%88%E4%BA%86%E8%BF%99%E4%BA%9B%E5%A4%A7%E4%BA%8B%23&Refer=new_time)
1. [在嫌疑人住处发现在韩遇害女生遗体](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E5%AB%8C%E7%96%91%E4%BA%BA%E4%BD%8F%E5%A4%84%E5%8F%91%E7%8E%B0%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%23&t=31&band_rank=1&Refer=top)
1. [中国公民尽快撤离斯威士兰](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%B0%BD%E5%BF%AB%E6%92%A4%E7%A6%BB%E6%96%AF%E5%A8%81%E5%A3%AB%E5%85%B0%23&t=31&band_rank=2&Refer=top)
1. [6张网建设进度条刷新](https://s.weibo.com//weibo?q=%236%E5%BC%A0%E7%BD%91%E5%BB%BA%E8%AE%BE%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%88%B7%E6%96%B0%23&t=31&band_rank=3&Refer=top)
1. [过得好的人最明显的标志](https://s.weibo.com//weibo?q=%E8%BF%87%E5%BE%97%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%80%E6%98%8E%E6%98%BE%E7%9A%84%E6%A0%87%E5%BF%97&t=31&band_rank=4&Refer=top)
1. [杀害在韩女生嫌疑人曾自称男友报警](https://s.weibo.com//weibo?q=%23%E6%9D%80%E5%AE%B3%E5%9C%A8%E9%9F%A9%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%96%91%E4%BA%BA%E6%9B%BE%E8%87%AA%E7%A7%B0%E7%94%B7%E5%8F%8B%E6%8A%A5%E8%AD%A6%23&t=31&band_rank=5&Refer=top)
1. [刘亦菲掉提金鹰奖最佳女主](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23&t=31&band_rank=6&Refer=top)
1. [原来只有我上班在乱穿](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E5%8F%AA%E6%9C%89%E6%88%91%E4%B8%8A%E7%8F%AD%E5%9C%A8%E4%B9%B1%E7%A9%BF&t=31&band_rank=7&Refer=top)
1. [杭州警方通报女子称在电梯遭骚扰](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%9C%A8%E7%94%B5%E6%A2%AF%E9%81%AD%E9%AA%9A%E6%89%B0%23&t=31&band_rank=8&Refer=top)
1. [13岁上海女孩靠AI三天赚1.8万元](https://s.weibo.com//weibo?q=%2313%E5%B2%81%E4%B8%8A%E6%B5%B7%E5%A5%B3%E5%AD%A9%E9%9D%A0AI%E4%B8%89%E5%A4%A9%E8%B5%9A1.8%E4%B8%87%E5%85%83%23&t=31&band_rank=9&Refer=top)
1. [爱情公寓](https://s.weibo.com//weibo?q=%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93&t=31&band_rank=10&Refer=top)
1. [在韩失联女生已遇害](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%B7%B2%E9%81%87%E5%AE%B3%23&t=31&band_rank=11&Refer=top)
1. [洪崖洞](https://s.weibo.com//weibo?q=%E6%B4%AA%E5%B4%96%E6%B4%9E&t=31&band_rank=12&Refer=top)
1. [赴韩失联女生父母至今仍不知情](https://s.weibo.com//weibo?q=%23%E8%B5%B4%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E7%88%B6%E6%AF%8D%E8%87%B3%E4%BB%8A%E4%BB%8D%E4%B8%8D%E7%9F%A5%E6%83%85%23&t=31&band_rank=13&Refer=top)
1. [金鹰奖提名名单](https://s.weibo.com//weibo?q=%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95&t=31&band_rank=14&Refer=top)
1. [在韩失联中国女生死因或涉暴力犯罪](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%AD%BB%E5%9B%A0%E6%88%96%E6%B6%89%E6%9A%B4%E5%8A%9B%E7%8A%AF%E7%BD%AA%23&t=31&band_rank=15&Refer=top)
1. [乳房触诊当事医生称已起诉](https://s.weibo.com//weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E8%B5%B7%E8%AF%89%23&t=31&band_rank=16&Refer=top)
1. [医生谈1米67女孩101斤被认定偏重](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%881%E7%B1%B367%E5%A5%B3%E5%AD%A9101%E6%96%A4%E8%A2%AB%E8%AE%A4%E5%AE%9A%E5%81%8F%E9%87%8D%23&t=31&band_rank=17&Refer=top)
1. [白鹿的奖运](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E5%A5%96%E8%BF%90%23&t=31&band_rank=18&Refer=top)
1. [30多国准备派兵乌克兰](https://s.weibo.com//weibo?q=%2330%E5%A4%9A%E5%9B%BD%E5%87%86%E5%A4%87%E6%B4%BE%E5%85%B5%E4%B9%8C%E5%85%8B%E5%85%B0%23&t=31&band_rank=19&Refer=top)
1. [这种黑色小飞虫是移动病菌库](https://s.weibo.com//weibo?q=%23%E8%BF%99%E7%A7%8D%E9%BB%91%E8%89%B2%E5%B0%8F%E9%A3%9E%E8%99%AB%E6%98%AF%E7%A7%BB%E5%8A%A8%E7%97%85%E8%8F%8C%E5%BA%93%23&t=31&band_rank=20&Refer=top)
1. [goodthings 难听](https://s.weibo.com//weibo?q=goodthings%20%E9%9A%BE%E5%90%AC&t=31&band_rank=21&Refer=top)
1. [灵活就业 社保压力](https://s.weibo.com//weibo?q=%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%20%E7%A4%BE%E4%BF%9D%E5%8E%8B%E5%8A%9B&t=31&band_rank=22&Refer=top)
1. [爱情公寓 王冠](https://s.weibo.com//weibo?q=%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E7%8E%8B%E5%86%A0&t=31&band_rank=23&Refer=top)
1. [考公女子在星巴克撑伞备考](https://s.weibo.com//weibo?q=%E8%80%83%E5%85%AC%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E6%92%91%E4%BC%9E%E5%A4%87%E8%80%83&t=31&band_rank=24&Refer=top)
1. [内娱十年前真的很流行谈恋爱和结婚](https://s.weibo.com//weibo?q=%23%E5%86%85%E5%A8%B1%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9C%9F%E7%9A%84%E5%BE%88%E6%B5%81%E8%A1%8C%E8%B0%88%E6%81%8B%E7%88%B1%E5%92%8C%E7%BB%93%E5%A9%9A%23&t=31&band_rank=25&Refer=top)
1. [亚运会预算超标](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%A2%84%E7%AE%97%E8%B6%85%E6%A0%87%23&t=31&band_rank=26&Refer=top)
1. [女子因裁员焦虑每天通宵学习](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E8%A3%81%E5%91%98%E7%84%A6%E8%99%91%E6%AF%8F%E5%A4%A9%E9%80%9A%E5%AE%B5%E5%AD%A6%E4%B9%A0%23&t=31&band_rank=27&Refer=top)
1. [朱志鑫cue到troublemaker](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABcue%E5%88%B0troublemaker%23&t=31&band_rank=28&Refer=top)
1. [读懂下半年中国经济发力方向](https://s.weibo.com//weibo?q=%23%E8%AF%BB%E6%87%82%E4%B8%8B%E5%8D%8A%E5%B9%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%8A%9B%E6%96%B9%E5%90%91%23&t=31&band_rank=29&Refer=top)
1. [25岁失联中国女生不太会说韩语](https://s.weibo.com//weibo?q=%2325%E5%B2%81%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E4%B8%8D%E5%A4%AA%E4%BC%9A%E8%AF%B4%E9%9F%A9%E8%AF%AD%23&t=31&band_rank=30&Refer=top)
1. [台风](https://s.weibo.com//weibo?q=%E5%8F%B0%E9%A3%8E&t=31&band_rank=31&Refer=top)
1. [韩警方将对遇害女生遗体进行尸检](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E5%B0%86%E5%AF%B9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%E8%BF%9B%E8%A1%8C%E5%B0%B8%E6%A3%80%23&t=31&band_rank=32&Refer=top)
1. [官方通报星宇股份解聘应届生](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%A7%A3%E8%81%98%E5%BA%94%E5%B1%8A%E7%94%9F%23&t=31&band_rank=33&Refer=top)
1. [苹果M6芯片](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9CM6%E8%8A%AF%E7%89%87%23&t=31&band_rank=34&Refer=top)
1. [我驻釜山总领事馆要求严惩凶手](https://s.weibo.com//weibo?q=%23%E6%88%91%E9%A9%BB%E9%87%9C%E5%B1%B1%E6%80%BB%E9%A2%86%E4%BA%8B%E9%A6%86%E8%A6%81%E6%B1%82%E4%B8%A5%E6%83%A9%E5%87%B6%E6%89%8B%23&t=31&band_rank=35&Refer=top)
1. [新款MacMini来了](https://s.weibo.com//weibo?q=%23%E6%96%B0%E6%AC%BEMacMini%E6%9D%A5%E4%BA%86%23&t=31&band_rank=36&Refer=top)
1. [13岁用AI接百万商单](https://s.weibo.com//weibo?q=13%E5%B2%81%E7%94%A8AI%E6%8E%A5%E7%99%BE%E4%B8%87%E5%95%86%E5%8D%95&t=31&band_rank=37&Refer=top)
1. [苹果发布全球首款量产2nm芯片](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E5%85%A8%E7%90%83%E9%A6%96%E6%AC%BE%E9%87%8F%E4%BA%A72nm%E8%8A%AF%E7%89%87%23&t=31&band_rank=38&Refer=top)
1. [早春晴朗](https://s.weibo.com//weibo?q=%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97&t=31&band_rank=39&Refer=top)
1. [原来大家都是这样防止被套话的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%98%B2%E6%AD%A2%E8%A2%AB%E5%A5%97%E8%AF%9D%E7%9A%84&t=31&band_rank=40&Refer=top)
1. [97%教师存在职业健康困扰](https://s.weibo.com//weibo?q=%2397%25%E6%95%99%E5%B8%88%E5%AD%98%E5%9C%A8%E8%81%8C%E4%B8%9A%E5%81%A5%E5%BA%B7%E5%9B%B0%E6%89%B0%23&t=31&band_rank=41&Refer=top)
1. [72%教师下班后仍需及时回信息](https://s.weibo.com//weibo?q=%2372%25%E6%95%99%E5%B8%88%E4%B8%8B%E7%8F%AD%E5%90%8E%E4%BB%8D%E9%9C%80%E5%8F%8A%E6%97%B6%E5%9B%9E%E4%BF%A1%E6%81%AF%23&t=31&band_rank=42&Refer=top)
1. [邻居否认牌馆去世老人与店主不熟](https://s.weibo.com//weibo?q=%23%E9%82%BB%E5%B1%85%E5%90%A6%E8%AE%A4%E7%89%8C%E9%A6%86%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E4%B8%8E%E5%BA%97%E4%B8%BB%E4%B8%8D%E7%86%9F%23&t=31&band_rank=43&Refer=top)
1. [乳房触诊20多次后发现结节摸不到](https://s.weibo.com//weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A20%E5%A4%9A%E6%AC%A1%E5%90%8E%E5%8F%91%E7%8E%B0%E7%BB%93%E8%8A%82%E6%91%B8%E4%B8%8D%E5%88%B0%23&t=31&band_rank=44&Refer=top)
1. [金鹰奖 这个人真叫袁子弹吗](https://s.weibo.com//weibo?q=%E9%87%91%E9%B9%B0%E5%A5%96%20%E8%BF%99%E4%B8%AA%E4%BA%BA%E7%9C%9F%E5%8F%AB%E8%A2%81%E5%AD%90%E5%BC%B9%E5%90%97&t=31&band_rank=45&Refer=top)
1. [小米阔折叠原型机加了风扇](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E9%98%94%E6%8A%98%E5%8F%A0%E5%8E%9F%E5%9E%8B%E6%9C%BA%E5%8A%A0%E4%BA%86%E9%A3%8E%E6%89%87&t=31&band_rank=46&Refer=top)
1. [中国女子在泰被绑架丢路边监控曝光](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%B3%B0%E8%A2%AB%E7%BB%91%E6%9E%B6%E4%B8%A2%E8%B7%AF%E8%BE%B9%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23&t=31&band_rank=47&Refer=top)
1. [原来这种身材是天选种地人](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E8%BF%99%E7%A7%8D%E8%BA%AB%E6%9D%90%E6%98%AF%E5%A4%A9%E9%80%89%E7%A7%8D%E5%9C%B0%E4%BA%BA&t=31&band_rank=48&Refer=top)
1. [王楚钦孙颖莎出战中国大满贯](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%87%BA%E6%88%98%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%23&t=31&band_rank=49&Refer=top)
1. [杨幂掉提](https://s.weibo.com//weibo?q=%E6%9D%A8%E5%B9%82%E6%8E%89%E6%8F%90&t=31&band_rank=50&Refer=top)
1. [在韩失联女生已遇害](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%B7%B2%E9%81%87%E5%AE%B3%23&t=31&band_rank=1&Refer=top)
1. [杭州警方通报女子称在电梯遭骚扰](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%9C%A8%E7%94%B5%E6%A2%AF%E9%81%AD%E9%AA%9A%E6%89%B0%23&t=31&band_rank=2&Refer=top)
1. [读懂下半年中国经济发力方向](https://s.weibo.com//weibo?q=%23%E8%AF%BB%E6%87%82%E4%B8%8B%E5%8D%8A%E5%B9%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%8A%9B%E6%96%B9%E5%90%91%23&t=31&band_rank=3&Refer=top)
1. [原来只有我上班在乱穿](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E5%8F%AA%E6%9C%89%E6%88%91%E4%B8%8A%E7%8F%AD%E5%9C%A8%E4%B9%B1%E7%A9%BF&t=31&band_rank=4&Refer=top)
1. [刘亦菲掉提金鹰奖最佳女主](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23&t=31&band_rank=5&Refer=top)
1. [在嫌疑人住处发现在韩遇害女生遗体](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E5%AB%8C%E7%96%91%E4%BA%BA%E4%BD%8F%E5%A4%84%E5%8F%91%E7%8E%B0%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%23&t=31&band_rank=6&Refer=top)
1. [13岁上海女孩靠AI三天赚1.8万元](https://s.weibo.com//weibo?q=%2313%E5%B2%81%E4%B8%8A%E6%B5%B7%E5%A5%B3%E5%AD%A9%E9%9D%A0AI%E4%B8%89%E5%A4%A9%E8%B5%9A1.8%E4%B8%87%E5%85%83%23&t=31&band_rank=7&Refer=top)
1. [爱情公寓](https://s.weibo.com//weibo?q=%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93&t=31&band_rank=8&Refer=top)
1. [中国公民尽快撤离斯威士兰](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%B0%BD%E5%BF%AB%E6%92%A4%E7%A6%BB%E6%96%AF%E5%A8%81%E5%A3%AB%E5%85%B0%23&t=31&band_rank=9&Refer=top)
1. [金鹰奖提名名单](https://s.weibo.com//weibo?q=%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95&t=31&band_rank=10&Refer=top)
1. [赴韩失联女生父母至今仍不知情](https://s.weibo.com//weibo?q=%23%E8%B5%B4%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E7%88%B6%E6%AF%8D%E8%87%B3%E4%BB%8A%E4%BB%8D%E4%B8%8D%E7%9F%A5%E6%83%85%23&t=31&band_rank=11&Refer=top)
1. [赵丽颖突发身体不适](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23&t=31&band_rank=12&Refer=top)
1. [在韩失联中国女生死因或涉暴力犯罪](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%AD%BB%E5%9B%A0%E6%88%96%E6%B6%89%E6%9A%B4%E5%8A%9B%E7%8A%AF%E7%BD%AA%23&t=31&band_rank=13&Refer=top)
1. [刘亦菲茜茜公主大片](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%8C%9C%E8%8C%9C%E5%85%AC%E4%B8%BB%E5%A4%A7%E7%89%87%23&t=31&band_rank=14&Refer=top)
1. [韩国愈演愈烈的失踪事件](https://s.weibo.com//weibo?q=%E9%9F%A9%E5%9B%BD%E6%84%88%E6%BC%94%E6%84%88%E7%83%88%E7%9A%84%E5%A4%B1%E8%B8%AA%E4%BA%8B%E4%BB%B6&t=31&band_rank=15&Refer=top)
1. [宋威龙赵丽颖被AI漫剧融脸](https://s.weibo.com//weibo?q=%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%A2%ABAI%E6%BC%AB%E5%89%A7%E8%9E%8D%E8%84%B8&t=31&band_rank=17&Refer=top)
1. [王俊凯小程序和网址备案](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%92%8C%E7%BD%91%E5%9D%80%E5%A4%87%E6%A1%88%23&t=31&band_rank=18&Refer=top)
1. [25岁失联中国女生不太会说韩语](https://s.weibo.com//weibo?q=%2325%E5%B2%81%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E4%B8%8D%E5%A4%AA%E4%BC%9A%E8%AF%B4%E9%9F%A9%E8%AF%AD%23&t=31&band_rank=19&Refer=top)
1. [97%教师存在职业健康困扰](https://s.weibo.com//weibo?q=%2397%25%E6%95%99%E5%B8%88%E5%AD%98%E5%9C%A8%E8%81%8C%E4%B8%9A%E5%81%A5%E5%BA%B7%E5%9B%B0%E6%89%B0%23&t=31&band_rank=20&Refer=top)
1. [13岁用AI接百万商单](https://s.weibo.com//weibo?q=13%E5%B2%81%E7%94%A8AI%E6%8E%A5%E7%99%BE%E4%B8%87%E5%95%86%E5%8D%95&t=31&band_rank=25&Refer=top)
1. [这种黑色小飞虫是移动病菌库](https://s.weibo.com//weibo?q=%23%E8%BF%99%E7%A7%8D%E9%BB%91%E8%89%B2%E5%B0%8F%E9%A3%9E%E8%99%AB%E6%98%AF%E7%A7%BB%E5%8A%A8%E7%97%85%E8%8F%8C%E5%BA%93%23&t=31&band_rank=26&Refer=top)
1. [苹果M6芯片](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9CM6%E8%8A%AF%E7%89%87%23&t=31&band_rank=27&Refer=top)
1. [官方通报星宇股份解聘应届生](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%A7%A3%E8%81%98%E5%BA%94%E5%B1%8A%E7%94%9F%23&t=31&band_rank=28&Refer=top)
1. [内娱十年前真的很流行谈恋爱和结婚](https://s.weibo.com//weibo?q=%23%E5%86%85%E5%A8%B1%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9C%9F%E7%9A%84%E5%BE%88%E6%B5%81%E8%A1%8C%E8%B0%88%E6%81%8B%E7%88%B1%E5%92%8C%E7%BB%93%E5%A9%9A%23&t=31&band_rank=29&Refer=top)
1. [孙红雷泰钽700](https://s.weibo.com//weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E6%B3%B0%E9%92%BD700%23&t=31&band_rank=30&Refer=top)
1. [过得好的人最明显的标志](https://s.weibo.com//weibo?q=%E8%BF%87%E5%BE%97%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%80%E6%98%8E%E6%98%BE%E7%9A%84%E6%A0%87%E5%BF%97&t=31&band_rank=31&Refer=top)
1. [成都天府新区房价腰斩](https://s.weibo.com//weibo?q=%E6%88%90%E9%83%BD%E5%A4%A9%E5%BA%9C%E6%96%B0%E5%8C%BA%E6%88%BF%E4%BB%B7%E8%85%B0%E6%96%A9&t=31&band_rank=33&Refer=top)
1. [台风](https://s.weibo.com//weibo?q=%E5%8F%B0%E9%A3%8E&t=31&band_rank=34&Refer=top)
1. [杭州滨江电梯纠纷反转](https://s.weibo.com//weibo?q=%E6%9D%AD%E5%B7%9E%E6%BB%A8%E6%B1%9F%E7%94%B5%E6%A2%AF%E7%BA%A0%E7%BA%B7%E5%8F%8D%E8%BD%AC&t=31&band_rank=35&Refer=top)
1. [72%教师下班后仍需及时回信息](https://s.weibo.com//weibo?q=%2372%25%E6%95%99%E5%B8%88%E4%B8%8B%E7%8F%AD%E5%90%8E%E4%BB%8D%E9%9C%80%E5%8F%8A%E6%97%B6%E5%9B%9E%E4%BF%A1%E6%81%AF%23&t=31&band_rank=36&Refer=top)
1. [女子因裁员焦虑每天通宵学习](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E8%A3%81%E5%91%98%E7%84%A6%E8%99%91%E6%AF%8F%E5%A4%A9%E9%80%9A%E5%AE%B5%E5%AD%A6%E4%B9%A0%23&t=31&band_rank=37&Refer=top)
1. [七星彩 鞠婧祎](https://s.weibo.com//weibo?q=%E4%B8%83%E6%98%9F%E5%BD%A9%20%E9%9E%A0%E5%A9%A7%E7%A5%8E&t=31&band_rank=38&Refer=top)
1. [亚运会预算超标](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%A2%84%E7%AE%97%E8%B6%85%E6%A0%87%23&t=31&band_rank=39&Refer=top)
1. [苹果发布全球首款量产2nm芯片](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E5%85%A8%E7%90%83%E9%A6%96%E6%AC%BE%E9%87%8F%E4%BA%A72nm%E8%8A%AF%E7%89%87%23&t=31&band_rank=40&Refer=top)
1. [张伟打开还珠格格爱上李晟](https://s.weibo.com//weibo?q=%E5%BC%A0%E4%BC%9F%E6%89%93%E5%BC%80%E8%BF%98%E7%8F%A0%E6%A0%BC%E6%A0%BC%E7%88%B1%E4%B8%8A%E6%9D%8E%E6%99%9F&t=31&band_rank=41&Refer=top)
1. [孙英宰Somi否认恋情](https://s.weibo.com//weibo?q=%23%E5%AD%99%E8%8B%B1%E5%AE%B0Somi%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23&t=31&band_rank=42&Refer=top)
1. [乳房触诊20多次后发现结节摸不到](https://s.weibo.com//weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A20%E5%A4%9A%E6%AC%A1%E5%90%8E%E5%8F%91%E7%8E%B0%E7%BB%93%E8%8A%82%E6%91%B8%E4%B8%8D%E5%88%B0%23&t=31&band_rank=43&Refer=top)
1. [原来大家都是这样防止被套话的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%98%B2%E6%AD%A2%E8%A2%AB%E5%A5%97%E8%AF%9D%E7%9A%84&t=31&band_rank=44&Refer=top)
1. [新款MacMini来了](https://s.weibo.com//weibo?q=%23%E6%96%B0%E6%AC%BEMacMini%E6%9D%A5%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [白鹿的奖运](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E5%A5%96%E8%BF%90%23&t=31&band_rank=46&Refer=top)
1. [华为乾崑智驾配泰钽700有多强](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%99%BA%E9%A9%BE%E9%85%8D%E6%B3%B0%E9%92%BD700%E6%9C%89%E5%A4%9A%E5%BC%BA%23&t=31&band_rank=47&Refer=top)
1. [何穗谈妊娠纹](https://s.weibo.com//weibo?q=%23%E4%BD%95%E7%A9%97%E8%B0%88%E5%A6%8A%E5%A8%A0%E7%BA%B9%23&t=31&band_rank=48&Refer=top)
1. [朱志鑫cue到troublemaker](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABcue%E5%88%B0troublemaker%23&t=31&band_rank=49&Refer=top)
1. [中国女子在泰被绑架丢路边监控曝光](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%B3%B0%E8%A2%AB%E7%BB%91%E6%9E%B6%E4%B8%A2%E8%B7%AF%E8%BE%B9%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
