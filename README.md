# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-21 01:10:10

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
<!-- 最后更新时间 Wed Oct 21 2026 01:31:10 GMT+0800 (China Standard Time) -->

1. [日美利剑演习是否为介入台海做准备](https://so.toutiao.com/search?keyword=日美利剑演习是否为介入台海做准备)
1. [马斯克被杨立昆质疑后回怼](https://so.toutiao.com/search?keyword=马斯克被杨立昆质疑后回怼)
1. [前三季度中国经济“成绩单”来了](https://so.toutiao.com/search?keyword=前三季度中国经济“成绩单”来了)
1. [工信部：禁止车辆行驶时用零重力座椅](https://so.toutiao.com/search?keyword=工信部：禁止车辆行驶时用零重力座椅)
1. [特朗普：中方在乌问题上立场很公允](https://so.toutiao.com/search?keyword=特朗普：中方在乌问题上立场很公允)
1. [菲媒警告：驱逐大使中方必然对等回应](https://so.toutiao.com/search?keyword=菲媒警告：驱逐大使中方必然对等回应)
1. [血糖高身体会抛出7个信号](https://so.toutiao.com/search?keyword=血糖高身体会抛出7个信号)
1. [美国一战斗舰冲闯中国南沙海域](https://so.toutiao.com/search?keyword=美国一战斗舰冲闯中国南沙海域)
1. [第二代比亚迪海鸥上市](https://so.toutiao.com/search?keyword=第二代比亚迪海鸥上市)
1. [泽连斯基：作为伙伴我愿向特朗普让步](https://so.toutiao.com/search?keyword=泽连斯基：作为伙伴我愿向特朗普让步)
1. [“完美恋人”背后的陷阱](https://so.toutiao.com/search?keyword=“完美恋人”背后的陷阱)
1. [李小冉：一忍再忍不想占用公共资源](https://so.toutiao.com/search?keyword=李小冉：一忍再忍不想占用公共资源)
1. [石破茂批高市早苗对待历史“不诚实”](https://so.toutiao.com/search?keyword=石破茂批高市早苗对待历史“不诚实”)
1. [华为带火阔直板 安卓手机集体跟进](https://so.toutiao.com/search?keyword=华为带火阔直板%20安卓手机集体跟进)
1. [钟南山院士是真正的薄肌“90后”](https://so.toutiao.com/search?keyword=钟南山院士是真正的薄肌“90后”)
1. [董明珠：格力技工学校禁止谈恋爱](https://so.toutiao.com/search?keyword=董明珠：格力技工学校禁止谈恋爱)
1. [媒体：孩子的友谊不该被一块手表绑架](https://so.toutiao.com/search?keyword=媒体：孩子的友谊不该被一块手表绑架)
1. [专家：房地产最危险的是不涨也不跌](https://so.toutiao.com/search?keyword=专家：房地产最危险的是不涨也不跌)
1. [日美联合7国磨“利剑”究竟练什么](https://so.toutiao.com/search?keyword=日美联合7国磨“利剑”究竟练什么)
1. [儿子逼父母还债被父亲打伤 父亲免罚](https://so.toutiao.com/search?keyword=儿子逼父母还债被父亲打伤%20父亲免罚)
1. [人民日报钟声：日本再次撕下和平伪装](https://so.toutiao.com/search?keyword=人民日报钟声：日本再次撕下和平伪装)
1. [英国将派战斗机协助沙特抵御胡塞袭击](https://so.toutiao.com/search?keyword=英国将派战斗机协助沙特抵御胡塞袭击)
1. [马斯克警告人类将被AI“一击拿下”](https://so.toutiao.com/search?keyword=马斯克警告人类将被AI“一击拿下”)
1. [印度搞边境基建的机器能从中国买吗](https://so.toutiao.com/search?keyword=印度搞边境基建的机器能从中国买吗)
1. [专家：A股市场主要风险是输入性风险](https://so.toutiao.com/search?keyword=专家：A股市场主要风险是输入性风险)
1. [缅甸公布昂山素季近照](https://so.toutiao.com/search?keyword=缅甸公布昂山素季近照)
1. [新央企国家数据集团领导班子公布](https://so.toutiao.com/search?keyword=新央企国家数据集团领导班子公布)
1. [小米8款新车商标曝光](https://so.toutiao.com/search?keyword=小米8款新车商标曝光)
1. [邵永灵：美日军演解放军无人机侦察](https://so.toutiao.com/search?keyword=邵永灵：美日军演解放军无人机侦察)
1. [张柏芝说养育3个儿子很轻松](https://so.toutiao.com/search?keyword=张柏芝说养育3个儿子很轻松)
1. [数据领域“国家队”是干什么的](https://so.toutiao.com/search?keyword=数据领域“国家队”是干什么的)
1. [男子被拐22年后凭碎片记忆寻回至亲](https://so.toutiao.com/search?keyword=男子被拐22年后凭碎片记忆寻回至亲)
1. [影石回应资助网红飞行滑板博主](https://so.toutiao.com/search?keyword=影石回应资助网红飞行滑板博主)
1. [周小川：防范AI投资失败引发金融风险](https://so.toutiao.com/search?keyword=周小川：防范AI投资失败引发金融风险)
1. [27岁爱心博主患罕见真菌感染离世](https://so.toutiao.com/search?keyword=27岁爱心博主患罕见真菌感染离世)
1. [刘恺威承认新恋情](https://so.toutiao.com/search?keyword=刘恺威承认新恋情)
1. [欧盟：俄乌冲突结束前不解除对俄制裁](https://so.toutiao.com/search?keyword=欧盟：俄乌冲突结束前不解除对俄制裁)
1. [专家：美日利剑演习剧本值得高度警惕](https://so.toutiao.com/search?keyword=专家：美日利剑演习剧本值得高度警惕)
1. [钟南山院士开球一路小跑神采奕奕](https://so.toutiao.com/search?keyword=钟南山院士开球一路小跑神采奕奕)
1. [专家：我国消费由性价比向质价比转变](https://so.toutiao.com/search?keyword=专家：我国消费由性价比向质价比转变)
1. [俄方期待APEC实现中美俄元首会晤](https://so.toutiao.com/search?keyword=俄方期待APEC实现中美俄元首会晤)
1. [张雪说不要送米了](https://so.toutiao.com/search?keyword=张雪说不要送米了)
1. [有理儿有面：对“精日”言行零容忍](https://so.toutiao.com/search?keyword=有理儿有面：对“精日”言行零容忍)
1. [退休时间是按生日当天还是当月算](https://so.toutiao.com/search?keyword=退休时间是按生日当天还是当月算)
1. [美舰首次在仙宾礁挑衅有何意图](https://so.toutiao.com/search?keyword=美舰首次在仙宾礁挑衅有何意图)
1. [新央企国家数据集团成立](https://so.toutiao.com/search?keyword=新央企国家数据集团成立)
1. [日本万人大集会高呼高市马上下台](https://so.toutiao.com/search?keyword=日本万人大集会高呼高市马上下台)
1. [全球铁矿石价格是怎样被中国打下来的](https://so.toutiao.com/search?keyword=全球铁矿石价格是怎样被中国打下来的)
1. [智驾“小蓝灯”将迎国标](https://so.toutiao.com/search?keyword=智驾“小蓝灯”将迎国标)
1. [德总理：不希望与中国打贸易战](https://so.toutiao.com/search?keyword=德总理：不希望与中国打贸易战)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Oct 21 2026 04:33:59 GMT+0800 (China Standard Time) -->

1. [英伟达市值9天蒸发4万亿](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC9%E5%A4%A9%E8%92%B8%E5%8F%914%E4%B8%87%E4%BA%BF)
1. [自愿放弃社保无效](https://www.zhihu.com/search?q=%E8%87%AA%E6%84%BF%E6%94%BE%E5%BC%83%E7%A4%BE%E4%BF%9D%E6%97%A0%E6%95%88)
1. [灵活就业人员可贷款缴社保](https://www.zhihu.com/search?q=%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E4%BA%BA%E5%91%98%E5%8F%AF%E8%B4%B7%E6%AC%BE%E7%BC%B4%E7%A4%BE%E4%BF%9D)
1. [社保基金会副理事长王文灵被双开](https://www.zhihu.com/search?q=%E7%A4%BE%E4%BF%9D%E5%9F%BA%E9%87%91%E4%BC%9A%E5%89%AF%E7%90%86%E4%BA%8B%E9%95%BF%E7%8E%8B%E6%96%87%E7%81%B5%E8%A2%AB%E5%8F%8C%E5%BC%80)
1. [法国发生近年来最严重暴力骚乱](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E5%8F%91%E7%94%9F%E8%BF%91%E5%B9%B4%E6%9D%A5%E6%9C%80%E4%B8%A5%E9%87%8D%E6%9A%B4%E5%8A%9B%E9%AA%9A%E4%B9%B1)
1. [身披旭日旗留学生被遣返](https://www.zhihu.com/search?q=%E8%BA%AB%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E7%95%99%E5%AD%A6%E7%94%9F%E8%A2%AB%E9%81%A3%E8%BF%94)
1. [李小冉官宣离婚](https://www.zhihu.com/search?q=%E6%9D%8E%E5%B0%8F%E5%86%89%E5%AE%98%E5%AE%A3%E7%A6%BB%E5%A9%9A)
1. [DeepSeek开放自研搜索API](https://www.zhihu.com/search?q=DeepSeek%E5%BC%80%E6%94%BE%E8%87%AA%E7%A0%94%E6%90%9C%E7%B4%A2API)
1. [网红王扁遭前经纪人锤击](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E7%8E%8B%E6%89%81%E9%81%AD%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E9%94%A4%E5%87%BB)
1. [小天才手表封闭社交被质疑](https://www.zhihu.com/search?q=%E5%B0%8F%E5%A4%A9%E6%89%8D%E6%89%8B%E8%A1%A8%E5%B0%81%E9%97%AD%E7%A4%BE%E4%BA%A4%E8%A2%AB%E8%B4%A8%E7%96%91)
1. [稻城亚丁高反去世男子系非法穿越](https://www.zhihu.com/search?q=%E7%A8%BB%E5%9F%8E%E4%BA%9A%E4%B8%81%E9%AB%98%E5%8F%8D%E5%8E%BB%E4%B8%96%E7%94%B7%E5%AD%90%E7%B3%BB%E9%9D%9E%E6%B3%95%E7%A9%BF%E8%B6%8A)
1. [女子情绪失控砸毁30万五粮液](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%E7%A0%B8%E6%AF%8130%E4%B8%87%E4%BA%94%E7%B2%AE%E6%B6%B2)
1. [DeepSeek云服务推理框架DeepInfer](https://www.zhihu.com/search?q=DeepSeek%E4%BA%91%E6%9C%8D%E5%8A%A1%E6%8E%A8%E7%90%86%E6%A1%86%E6%9E%B6DeepInfer)
1. [工信部称确有部分车企产品验证不充分](https://www.zhihu.com/search?q=%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%A7%B0%E7%A1%AE%E6%9C%89%E9%83%A8%E5%88%86%E8%BD%A6%E4%BC%81%E4%BA%A7%E5%93%81%E9%AA%8C%E8%AF%81%E4%B8%8D%E5%85%85%E5%88%86)
1. [网传国内MC相关下载被封禁](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E5%9B%BD%E5%86%85MC%E7%9B%B8%E5%85%B3%E4%B8%8B%E8%BD%BD%E8%A2%AB%E5%B0%81%E7%A6%81)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Oct 21 2026 01:10:10 GMT+0800 (China Standard Time) -->

1. [如何看待2026年10月20日下午疑似国内所有mc相关下载被封禁？](https://www.zhihu.com/question/2095905104423662800)
1. [如何看待DeepSeek开源的大规模云服务推理框架 DeepInfer ？](https://www.zhihu.com/question/2095922064804636400)
1. [工信部提出「坚决防范不合理创新设计和未经充分研发测试验证的汽车产品进入市场」，这会给行业带来哪些转向？](https://www.zhihu.com/question/2095916704706705000)
1. [小天才手表回应「有意封闭平台利用孩子社交需求」，称能正常添加到联系人，能平息质疑吗？这对孩子影响多大？](https://www.zhihu.com/question/2095810210455445800)
1. [生殖隔离解除24小时、氧气消失三秒、所有动物失明72小时和全球暴雨10年，上述哪个灾难危害最大？](https://www.zhihu.com/question/2095258672733615000)
1. [如何看待 00 后小伙自学机械手搓载人飞行滑板，成功飞越长江？这个飞行滑板的技术原理是什么？](https://www.zhihu.com/question/2095632163530077700)
1. [现在 AI 短剧满天飞，怎么没见影视行业人员发声？](https://www.zhihu.com/question/2090228809819862000)
1. [新能源车渗透率攀升至 67%创历史新高，燃油车为何加速萎缩？](https://www.zhihu.com/question/2094934531933468400)
1. [独生女车祸去世 10 年后赔偿所剩不多，父母再次起诉获批5年生活费，如何从法律角度解读？](https://www.zhihu.com/question/2095673449092073000)
1. [中国留学生俄罗斯课堂披旭日旗后道歉且已被遣返，如何评价？他在俄罗斯当地及回国后可能面临哪些实质追责？](https://www.zhihu.com/question/2095439399555285800)
1. [美舰冲闯中国南沙群岛仙宾礁附近海域，南部战区依法依规跟踪监视，美方意欲何为？哪些信息值得关注？](https://www.zhihu.com/question/2095867073184511500)
1. [香港盒饭比大陆贵那么多，那如果从大陆运很多盒饭到香港岂不是赚翻了？](https://www.zhihu.com/question/2092668605007769900)
1. [法国多地发生暴力骚乱，当前在法华人的情况怎么样？怎样保障自身安全？留学生需要调整上学计划吗？](https://www.zhihu.com/question/2095230439828841200)
1. [蒙古国草原火灾疑因一企业日籍高管为钓鱼违规进入引燃，此次火灾造成损失有多大？该高管可能要承担哪些责任？](https://www.zhihu.com/question/2095827235907134000)
1. [怎么看DeepSeek官宣单集群日均吞吐达 155 万亿 Token，单卡每小时收入38 美金？](https://www.zhihu.com/question/2095938083422263000)
1. [李小冉官宣去年已经与徐佳宁离婚，他们的婚姻可能出现了什么问题？](https://www.zhihu.com/question/2095610916247007700)
1. [为什么目前 AI 的设备是用 Mac 为主，而不是熟知的 Windows？](https://www.zhihu.com/question/2059660303915397400)
1. [如何看待 9 月 BBA 旗下无一车型零售破万？这是否意味着消费者不再单纯认豪华车标？](https://www.zhihu.com/question/2095630667409254100)
1. [女子打喷嚏震断肋骨，这和每天喝2杯以上咖啡的关系有多大？为什么现在骨质疏松年轻化了？可以如何预防？](https://www.zhihu.com/question/2095832295131145700)
1. [智驾小蓝灯颜色进入新国标，车灯禁显示文字、禁用语音关灯，这样规定有哪些考虑？会怎样影响今后的设计？](https://www.zhihu.com/question/2095876727058556400)
1. [2026《全球前 2％ 顶尖科学家榜单》出炉，你或者你熟识的人入选了么？](https://www.zhihu.com/question/2091926847034318800)
1. [四川南充一9岁男童被发现多处烫伤双手变形，当地回应称孩子未受虐待，伤疤系意外所致，具体情况如何？](https://www.zhihu.com/question/2094084342637187600)
1. [2026 年维密大秀在洛杉矶举行，刘雯第10次登台，奚梦瑶时隔8年回归，如何评价此届维密大秀？](https://www.zhihu.com/question/2095446342763902500)
1. [如何看待模仿王源博主「王扁」被前经纪人用锤子击打头部约 10 分钟，双方有什么矛盾？](https://www.zhihu.com/question/2095221593614164700)
1. [赛博朋克：边缘行者2这部动画怎么样？](https://www.zhihu.com/question/2095476095848014300)
1. [澳洲一公司用AI假扮受害者接听诈骗电话以提前套取诈骗犯信息，这项技术值得在我国推广以解决诈骗问题吗？](https://www.zhihu.com/question/2094749068610072800)
1. [为什么古代王朝和外族打仗时很少有压倒性的优势?](https://www.zhihu.com/question/1955302533577803800)
1. [选择工作时，直属领导对人的影响，会不会比公司和行业更大？](https://www.zhihu.com/question/2094451383831192600)
1. [想安装全屋智能，小白应该从哪里开始着手？](https://www.zhihu.com/question/2038940531795997200)
1. [并不存在R³→R²的一一映射，那怎么制造二向箔？](https://www.zhihu.com/question/1993443241434042400)

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
<!-- 最后更新时间 Wed Oct 21 2026 01:19:50 GMT+0800 (China Standard Time) -->

1. [在新的长征路上继续奋勇前进](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E6%96%B0%E7%9A%84%E9%95%BF%E5%BE%81%E8%B7%AF%E4%B8%8A%E7%BB%A7%E7%BB%AD%E5%A5%8B%E5%8B%87%E5%89%8D%E8%BF%9B%23&Refer=new_time)
1. [男子捡到38000元留了道题给失主](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E6%8D%A1%E5%88%B038000%E5%85%83%E7%95%99%E4%BA%86%E9%81%93%E9%A2%98%E7%BB%99%E5%A4%B1%E4%B8%BB%23&t=31&band_rank=1&Refer=top)
1. [香港名媛碎尸案曝关键新证词](https://s.weibo.com//weibo?q=%23%E9%A6%99%E6%B8%AF%E5%90%8D%E5%AA%9B%E7%A2%8E%E5%B0%B8%E6%A1%88%E6%9B%9D%E5%85%B3%E9%94%AE%E6%96%B0%E8%AF%81%E8%AF%8D%23&t=31&band_rank=2&Refer=top)
1. [同心同行长征路](https://s.weibo.com//weibo?q=%23%E5%90%8C%E5%BF%83%E5%90%8C%E8%A1%8C%E9%95%BF%E5%BE%81%E8%B7%AF%23&t=31&band_rank=3&Refer=top)
1. [油车电车10年成本账怎么算](https://s.weibo.com//weibo?q=%E6%B2%B9%E8%BD%A6%E7%94%B5%E8%BD%A610%E5%B9%B4%E6%88%90%E6%9C%AC%E8%B4%A6%E6%80%8E%E4%B9%88%E7%AE%97&t=31&band_rank=4&Refer=top)
1. [法国乱成一锅粥了还有人威胁中国](https://s.weibo.com//weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%E8%BF%98%E6%9C%89%E4%BA%BA%E5%A8%81%E8%83%81%E4%B8%AD%E5%9B%BD%23&t=31&band_rank=5&Refer=top)
1. [易梦玲巴黎被偷](https://s.weibo.com//weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E5%B7%B4%E9%BB%8E%E8%A2%AB%E5%81%B7%23&t=31&band_rank=6&Refer=top)
1. [曝湖南台力捧张雅琪原因](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%B9%96%E5%8D%97%E5%8F%B0%E5%8A%9B%E6%8D%A7%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=7&Refer=top)
1. [陆毅鲍蕾女儿18岁生日试装](https://s.weibo.com//weibo?q=%23%E9%99%86%E6%AF%85%E9%B2%8D%E8%95%BE%E5%A5%B3%E5%84%BF18%E5%B2%81%E7%94%9F%E6%97%A5%E8%AF%95%E8%A3%85%23&t=31&band_rank=8&Refer=top)
1. [南海](https://s.weibo.com//weibo?q=%E5%8D%97%E6%B5%B7&t=31&band_rank=9&Refer=top)
1. [怪不得魏娆跟养母并不亲](https://s.weibo.com//weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%AD%8F%E5%A8%86%E8%B7%9F%E5%85%BB%E6%AF%8D%E5%B9%B6%E4%B8%8D%E4%BA%B2%23&t=31&band_rank=10&Refer=top)
1. [广州白云代孕地下手术室被举报](https://s.weibo.com//weibo?q=%E5%B9%BF%E5%B7%9E%E7%99%BD%E4%BA%91%E4%BB%A3%E5%AD%95%E5%9C%B0%E4%B8%8B%E6%89%8B%E6%9C%AF%E5%AE%A4%E8%A2%AB%E4%B8%BE%E6%8A%A5&t=31&band_rank=11&Refer=top)
1. [刘雯维密回归太权威了](https://s.weibo.com//weibo?q=%23%E5%88%98%E9%9B%AF%E7%BB%B4%E5%AF%86%E5%9B%9E%E5%BD%92%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23&t=31&band_rank=12&Refer=top)
1. [等等党赢麻了](https://s.weibo.com//weibo?q=%23%E7%AD%89%E7%AD%89%E5%85%9A%E8%B5%A2%E9%BA%BB%E4%BA%86%23&t=31&band_rank=13&Refer=top)
1. [美人余大结局可太解气了](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E4%BA%BA%E4%BD%99%E5%A4%A7%E7%BB%93%E5%B1%80%E5%8F%AF%E5%A4%AA%E8%A7%A3%E6%B0%94%E4%BA%86%23&t=31&band_rank=14&Refer=top)
1. [到底谁把微信变成工作软件的](https://s.weibo.com//weibo?q=%E5%88%B0%E5%BA%95%E8%B0%81%E6%8A%8A%E5%BE%AE%E4%BF%A1%E5%8F%98%E6%88%90%E5%B7%A5%E4%BD%9C%E8%BD%AF%E4%BB%B6%E7%9A%84&t=31&band_rank=15&Refer=top)
1. [田曦薇 我望着你不肯后退的眼睛](https://s.weibo.com//weibo?q=%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%88%91%E6%9C%9B%E7%9D%80%E4%BD%A0%E4%B8%8D%E8%82%AF%E5%90%8E%E9%80%80%E7%9A%84%E7%9C%BC%E7%9D%9B&t=31&band_rank=16&Refer=top)
1. [梁淅沥首个官方直拍](https://s.weibo.com//weibo?q=%23%E6%A2%81%E6%B7%85%E6%B2%A5%E9%A6%96%E4%B8%AA%E5%AE%98%E6%96%B9%E7%9B%B4%E6%8B%8D%23&t=31&band_rank=17&Refer=top)
1. [理想汽车发布电池保障政策](https://s.weibo.com//weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%E5%8F%91%E5%B8%83%E7%94%B5%E6%B1%A0%E4%BF%9D%E9%9A%9C%E6%94%BF%E7%AD%96%23&t=31&band_rank=18&Refer=top)
1. [男子抽关节积液抽出喷泉效果](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%BD%E5%85%B3%E8%8A%82%E7%A7%AF%E6%B6%B2%E6%8A%BD%E5%87%BA%E5%96%B7%E6%B3%89%E6%95%88%E6%9E%9C%23&t=31&band_rank=19&Refer=top)
1. [医生回应钟南山心梗后每周运动3次](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E9%92%9F%E5%8D%97%E5%B1%B1%E5%BF%83%E6%A2%97%E5%90%8E%E6%AF%8F%E5%91%A8%E8%BF%90%E5%8A%A83%E6%AC%A1%23&t=31&band_rank=20&Refer=top)
1. [唐禹哲获刑1年7个月缓刑3年](https://s.weibo.com//weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E8%8E%B7%E5%88%911%E5%B9%B47%E4%B8%AA%E6%9C%88%E7%BC%93%E5%88%913%E5%B9%B4%23&t=31&band_rank=21&Refer=top)
1. [沈阳致6死16伤公交事故多人被处理](https://s.weibo.com//weibo?q=%23%E6%B2%88%E9%98%B3%E8%87%B46%E6%AD%BB16%E4%BC%A4%E5%85%AC%E4%BA%A4%E4%BA%8B%E6%95%85%E5%A4%9A%E4%BA%BA%E8%A2%AB%E5%A4%84%E7%90%86%23&t=31&band_rank=22&Refer=top)
1. [周芙已经认出了魏娆才是亲生女儿](https://s.weibo.com//weibo?q=%23%E5%91%A8%E8%8A%99%E5%B7%B2%E7%BB%8F%E8%AE%A4%E5%87%BA%E4%BA%86%E9%AD%8F%E5%A8%86%E6%89%8D%E6%98%AF%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%23&t=31&band_rank=23&Refer=top)
1. [维密大翅膀代表什么](https://s.weibo.com//weibo?q=%23%E7%BB%B4%E5%AF%86%E5%A4%A7%E7%BF%85%E8%86%80%E4%BB%A3%E8%A1%A8%E4%BB%80%E4%B9%88%23&t=31&band_rank=24&Refer=top)
1. [井柏然最有腔调的红毯来了](https://s.weibo.com//weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%9C%80%E6%9C%89%E8%85%94%E8%B0%83%E7%9A%84%E7%BA%A2%E6%AF%AF%E6%9D%A5%E4%BA%86%23&t=31&band_rank=25&Refer=top)
1. [嫁金钗魏娆的身世终于要大白于天下了](https://s.weibo.com//weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E9%AD%8F%E5%A8%86%E7%9A%84%E8%BA%AB%E4%B8%96%E7%BB%88%E4%BA%8E%E8%A6%81%E5%A4%A7%E7%99%BD%E4%BA%8E%E5%A4%A9%E4%B8%8B%E4%BA%86%23&t=31&band_rank=26&Refer=top)
1. [4名小朋友吃火锅多一块小酥肉夹给老板](https://s.weibo.com//weibo?q=%234%E5%90%8D%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%90%83%E7%81%AB%E9%94%85%E5%A4%9A%E4%B8%80%E5%9D%97%E5%B0%8F%E9%85%A5%E8%82%89%E5%A4%B9%E7%BB%99%E8%80%81%E6%9D%BF%23&t=31&band_rank=27&Refer=top)
1. [旭日旗事件涉事学生曾骂劝阻同学](https://s.weibo.com//weibo?q=%23%E6%97%AD%E6%97%A5%E6%97%97%E4%BA%8B%E4%BB%B6%E6%B6%89%E4%BA%8B%E5%AD%A6%E7%94%9F%E6%9B%BE%E9%AA%82%E5%8A%9D%E9%98%BB%E5%90%8C%E5%AD%A6%23&t=31&band_rank=28&Refer=top)
1. [女子往店里搬水男子帮忙却被造黄谣](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BE%80%E5%BA%97%E9%87%8C%E6%90%AC%E6%B0%B4%E7%94%B7%E5%AD%90%E5%B8%AE%E5%BF%99%E5%8D%B4%E8%A2%AB%E9%80%A0%E9%BB%84%E8%B0%A3%23&t=31&band_rank=29&Refer=top)
1. [医保个人账户跨省共济落地全国](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E4%BF%9D%E4%B8%AA%E4%BA%BA%E8%B4%A6%E6%88%B7%E8%B7%A8%E7%9C%81%E5%85%B1%E6%B5%8E%E8%90%BD%E5%9C%B0%E5%85%A8%E5%9B%BD%23&t=31&band_rank=30&Refer=top)
1. [奚梦瑶走秀时脚被纱挂住了](https://s.weibo.com//weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E8%B5%B0%E7%A7%80%E6%97%B6%E8%84%9A%E8%A2%AB%E7%BA%B1%E6%8C%82%E4%BD%8F%E4%BA%86%23&t=31&band_rank=31&Refer=top)
1. [Sakee喊话GAI](https://s.weibo.com//weibo?q=Sakee%E5%96%8A%E8%AF%9DGAI&t=31&band_rank=32&Refer=top)
1. [小英被指忘本](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E8%8B%B1%E8%A2%AB%E6%8C%87%E5%BF%98%E6%9C%AC%23&t=31&band_rank=33&Refer=top)
1. [淘宝崩了](https://s.weibo.com//weibo?q=%E6%B7%98%E5%AE%9D%E5%B4%A9%E4%BA%86&t=31&band_rank=34&Refer=top)
1. [Ally一上来就把男嘉宾钓晕了](https://s.weibo.com//weibo?q=%23Ally%E4%B8%80%E4%B8%8A%E6%9D%A5%E5%B0%B1%E6%8A%8A%E7%94%B7%E5%98%89%E5%AE%BE%E9%92%93%E6%99%95%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [中了100万后的生活是怎么样的](https://s.weibo.com//weibo?q=%E4%B8%AD%E4%BA%86100%E4%B8%87%E5%90%8E%E7%9A%84%E7%94%9F%E6%B4%BB%E6%98%AF%E6%80%8E%E4%B9%88%E6%A0%B7%E7%9A%84&t=31&band_rank=36&Refer=top)
1. [嫁金钗网飞对打doctorX](https://s.weibo.com//weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E7%BD%91%E9%A3%9E%E5%AF%B9%E6%89%93doctorX%23&t=31&band_rank=37&Refer=top)
1. [双十一](https://s.weibo.com//weibo?q=%E5%8F%8C%E5%8D%81%E4%B8%80&t=31&band_rank=38&Refer=top)
1. [RNG道歉微博62.6万评论](https://s.weibo.com//weibo?q=RNG%E9%81%93%E6%AD%89%E5%BE%AE%E5%8D%9A62.6%E4%B8%87%E8%AF%84%E8%AE%BA&t=31&band_rank=39&Refer=top)
1. [玉簟秋追夫名场面](https://s.weibo.com//weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%E8%BF%BD%E5%A4%AB%E5%90%8D%E5%9C%BA%E9%9D%A2%23&t=31&band_rank=40&Refer=top)
1. [北京主帅回应战胜广东男篮](https://s.weibo.com//weibo?q=%23%E5%8C%97%E4%BA%AC%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%BA%94%E6%88%98%E8%83%9C%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AE%23&t=31&band_rank=41&Refer=top)
1. [鞠婧祎拒绝螺蛳粉的表情](https://s.weibo.com//weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%8B%92%E7%BB%9D%E8%9E%BA%E8%9B%B3%E7%B2%89%E7%9A%84%E8%A1%A8%E6%83%85%23&t=31&band_rank=42&Refer=top)
1. [比亚迪第二代海鸥大不一样](https://s.weibo.com//weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E7%AC%AC%E4%BA%8C%E4%BB%A3%E6%B5%B7%E9%B8%A5%E5%A4%A7%E4%B8%8D%E4%B8%80%E6%A0%B7%23&t=31&band_rank=43&Refer=top)
1. [吴越这段话我反复听了十几遍](https://s.weibo.com//weibo?q=%23%E5%90%B4%E8%B6%8A%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%88%91%E5%8F%8D%E5%A4%8D%E5%90%AC%E4%BA%86%E5%8D%81%E5%87%A0%E9%81%8D%23&t=31&band_rank=44&Refer=top)
1. [王腾说希望雷总放我们一条生路](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%85%BE%E8%AF%B4%E5%B8%8C%E6%9C%9B%E9%9B%B7%E6%80%BB%E6%94%BE%E6%88%91%E4%BB%AC%E4%B8%80%E6%9D%A1%E7%94%9F%E8%B7%AF%23&t=31&band_rank=45&Refer=top)
1. [贝儿18岁身高](https://s.weibo.com//weibo?q=%23%E8%B4%9D%E5%84%BF18%E5%B2%81%E8%BA%AB%E9%AB%98%23&t=31&band_rank=46&Refer=top)
1. [钟南山心梗后仍每周运动3次](https://s.weibo.com//weibo?q=%E9%92%9F%E5%8D%97%E5%B1%B1%E5%BF%83%E6%A2%97%E5%90%8E%E4%BB%8D%E6%AF%8F%E5%91%A8%E8%BF%90%E5%8A%A83%E6%AC%A1&t=31&band_rank=47&Refer=top)
1. [大学生忘付10元线上补餐费摊主发声](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%BF%98%E4%BB%9810%E5%85%83%E7%BA%BF%E4%B8%8A%E8%A1%A5%E9%A4%90%E8%B4%B9%E6%91%8A%E4%B8%BB%E5%8F%91%E5%A3%B0%23&t=31&band_rank=48&Refer=top)
1. [马龙生日众好友欢聚庆祝](https://s.weibo.com//weibo?q=%E9%A9%AC%E9%BE%99%E7%94%9F%E6%97%A5%E4%BC%97%E5%A5%BD%E5%8F%8B%E6%AC%A2%E8%81%9A%E5%BA%86%E7%A5%9D&t=31&band_rank=49&Refer=top)
1. [肖战演唱会二开售票无退票权益](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8C%E5%BC%80%E5%94%AE%E7%A5%A8%E6%97%A0%E9%80%80%E7%A5%A8%E6%9D%83%E7%9B%8A%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
