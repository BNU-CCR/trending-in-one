# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-16 05:51:40

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
<!-- 最后更新时间 Mon Nov 16 2026 06:03:06 GMT+0800 (China Standard Time) -->

1. [油价11月26日24时将调整](https://so.toutiao.com/search?keyword=油价11月26日24时将调整)
1. [凌晨3点多家电影院爆满](https://so.toutiao.com/search?keyword=凌晨3点多家电影院爆满)
1. [通达亚太 共赴未来](https://so.toutiao.com/search?keyword=通达亚太%20共赴未来)
1. [男子长期吃猪脚饭确诊糖尿病酮症](https://so.toutiao.com/search?keyword=男子长期吃猪脚饭确诊糖尿病酮症)
1. [中国砒霜治疗白血病成国际方案](https://so.toutiao.com/search?keyword=中国砒霜治疗白血病成国际方案)
1. [人民日报三问希望小学卖惨骗捐案](https://so.toutiao.com/search?keyword=人民日报三问希望小学卖惨骗捐案)
1. [探秘塔克拉玛干沙漠千年巨型胡杨](https://so.toutiao.com/search?keyword=探秘塔克拉玛干沙漠千年巨型胡杨)
1. [BLG夺冠](https://so.toutiao.com/search?keyword=BLG夺冠)
1. [业内称山姆399元羽绒服是钩子商品](https://so.toutiao.com/search?keyword=业内称山姆399元羽绒服是钩子商品)
1. [女子0时酒驾被查称以为现在没人查了](https://so.toutiao.com/search?keyword=女子0时酒驾被查称以为现在没人查了)
1. [官方辟谣连霍高速发生泥石流](https://so.toutiao.com/search?keyword=官方辟谣连霍高速发生泥石流)
1. [APEC领导人会议周参会嘉宾陆续抵达](https://so.toutiao.com/search?keyword=APEC领导人会议周参会嘉宾陆续抵达)
1. [解放军东风-61有多强](https://so.toutiao.com/search?keyword=解放军东风-61有多强)
1. [哪些蔬菜不适合放进冰箱](https://so.toutiao.com/search?keyword=哪些蔬菜不适合放进冰箱)
1. [楼市新趋势：家庭变小房子变大](https://so.toutiao.com/search?keyword=楼市新趋势：家庭变小房子变大)
1. [BLG夺冠刷屏半个娱乐圈](https://so.toutiao.com/search?keyword=BLG夺冠刷屏半个娱乐圈)
1. [多地叫停强制家长护学](https://so.toutiao.com/search?keyword=多地叫停强制家长护学)
1. [中方代表：中东海湾必须遏止战争](https://so.toutiao.com/search?keyword=中方代表：中东海湾必须遏止战争)
1. [居民存款搬家放缓](https://so.toutiao.com/search?keyword=居民存款搬家放缓)
1. [高速上窜出东北虎 司机紧急避让](https://so.toutiao.com/search?keyword=高速上窜出东北虎%20司机紧急避让)
1. [BLG一穿四](https://so.toutiao.com/search?keyword=BLG一穿四)
1. [方博获代表哈萨克斯坦参赛后首冠](https://so.toutiao.com/search?keyword=方博获代表哈萨克斯坦参赛后首冠)
1. [研究：吃对碳水不易胖](https://so.toutiao.com/search?keyword=研究：吃对碳水不易胖)
1. [中国AI短剧在美国爆火意味着什么](https://so.toutiao.com/search?keyword=中国AI短剧在美国爆火意味着什么)
1. [印外长为何感慨“错过1988年的班车”](https://so.toutiao.com/search?keyword=印外长为何感慨“错过1988年的班车”)
1. [北京金店挤满人](https://so.toutiao.com/search?keyword=北京金店挤满人)
1. [胖东来羽绒服标注进货价与毛利率](https://so.toutiao.com/search?keyword=胖东来羽绒服标注进货价与毛利率)
1. [萌娃第一次叫妈妈被意外记录](https://so.toutiao.com/search?keyword=萌娃第一次叫妈妈被意外记录)
1. [有家长问“能否保证新老师不怀孕”](https://so.toutiao.com/search?keyword=有家长问“能否保证新老师不怀孕”)
1. [12位APEC经济体领导人将出席峰会](https://so.toutiao.com/search?keyword=12位APEC经济体领导人将出席峰会)
1. [小猴子看到悟空coser好奇上前查看](https://so.toutiao.com/search?keyword=小猴子看到悟空coser好奇上前查看)
1. [拜登回忆录痛批内塔尼亚胡说话不算数](https://so.toutiao.com/search?keyword=拜登回忆录痛批内塔尼亚胡说话不算数)
1. [歌迷玉蝴蝶妆造赴约谢霆锋演唱会](https://so.toutiao.com/search?keyword=歌迷玉蝴蝶妆造赴约谢霆锋演唱会)
1. [BLG夺冠 比亚迪赢麻了吗](https://so.toutiao.com/search?keyword=BLG夺冠%20比亚迪赢麻了吗)
1. [市场开始淘汰机器人了吗](https://so.toutiao.com/search?keyword=市场开始淘汰机器人了吗)
1. [记者调查辽宁鞍山建筑垃圾违规倾倒](https://so.toutiao.com/search?keyword=记者调查辽宁鞍山建筑垃圾违规倾倒)
1. [匈牙利前部长被抄出2000万美元现金](https://so.toutiao.com/search?keyword=匈牙利前部长被抄出2000万美元现金)
1. [A股反攻信号来了吗](https://so.toutiao.com/search?keyword=A股反攻信号来了吗)
1. [樊振东3-0速胜戈索](https://so.toutiao.com/search?keyword=樊振东3-0速胜戈索)
1. [央视曝光建筑垃圾侵占基本农田](https://so.toutiao.com/search?keyword=央视曝光建筑垃圾侵占基本农田)
1. [糖尿病很可能让身体“千疮百孔”](https://so.toutiao.com/search?keyword=糖尿病很可能让身体“千疮百孔”)
1. [国际人士：中国提出的倡议非常重要](https://so.toutiao.com/search?keyword=国际人士：中国提出的倡议非常重要)
1. [哈尔滨一超市特价肉1.99元一斤](https://so.toutiao.com/search?keyword=哈尔滨一超市特价肉1.99元一斤)
1. [拜登新回忆录披露2024大选退选内情](https://so.toutiao.com/search?keyword=拜登新回忆录披露2024大选退选内情)
1. [胖东来普通足金1070元一克](https://so.toutiao.com/search?keyword=胖东来普通足金1070元一克)
1. [领土换入约能解开俄乌僵局吗](https://so.toutiao.com/search?keyword=领土换入约能解开俄乌僵局吗)
1. [原价超百万的CAR-T抗癌药进医保](https://so.toutiao.com/search?keyword=原价超百万的CAR-T抗癌药进医保)
1. [广东省委书记探班APEC新闻中心](https://so.toutiao.com/search?keyword=广东省委书记探班APEC新闻中心)
1. [机器人投资为何“资本冷产业热”](https://so.toutiao.com/search?keyword=机器人投资为何“资本冷产业热”)
1. [国产双靶点降糖药入选医保药品目录](https://so.toutiao.com/search?keyword=国产双靶点降糖药入选医保药品目录)
1. [化妆师晒自己给顾客化的“素颜妆”](https://so.toutiao.com/search?keyword=化妆师晒自己给顾客化的“素颜妆”)
1. [落石砸中小车女子及时跑开](https://so.toutiao.com/search?keyword=落石砸中小车女子及时跑开)
1. [中国珠宝为何让全球消费者心动](https://so.toutiao.com/search?keyword=中国珠宝为何让全球消费者心动)
1. [中国拉面在德国大学食堂火了](https://so.toutiao.com/search?keyword=中国拉面在德国大学食堂火了)
1. [企业高管齐聚ABAC第四次会议](https://so.toutiao.com/search?keyword=企业高管齐聚ABAC第四次会议)
1. [东北卖水果有多实在](https://so.toutiao.com/search?keyword=东北卖水果有多实在)
1. [深圳的未来究竟有多酷](https://so.toutiao.com/search?keyword=深圳的未来究竟有多酷)
1. [许淑华诬陷蒋万安吃霸王餐挨告](https://so.toutiao.com/search?keyword=许淑华诬陷蒋万安吃霸王餐挨告)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Mon Nov 16 2026 06:46:22 GMT+0800 (China Standard Time) -->

1. [业内称山姆399元羽绒服是钩子商品](https://www.zhihu.com/search?q=%E4%B8%9A%E5%86%85%E7%A7%B0%E5%B1%B1%E5%A7%86399%E5%85%83%E7%BE%BD%E7%BB%92%E6%9C%8D%E6%98%AF%E9%92%A9%E5%AD%90%E5%95%86%E5%93%81)
1. [美国所有航班暂停起飞](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E6%89%80%E6%9C%89%E8%88%AA%E7%8F%AD%E6%9A%82%E5%81%9C%E8%B5%B7%E9%A3%9E)
1. [BLG 夺冠](https://www.zhihu.com/search?q=BLG%20%E5%A4%BA%E5%86%A0)
1. [中国三口之家已不是主流](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E4%B8%89%E5%8F%A3%E4%B9%8B%E5%AE%B6%E5%B7%B2%E4%B8%8D%E6%98%AF%E4%B8%BB%E6%B5%81)
1. [黄仁勋再被曝出轨前高管](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E5%86%8D%E8%A2%AB%E6%9B%9D%E5%87%BA%E8%BD%A8%E5%89%8D%E9%AB%98%E7%AE%A1)
1. [曝珠海华发爆雷欠债4000亿](https://www.zhihu.com/search?q=%E6%9B%9D%E7%8F%A0%E6%B5%B7%E5%8D%8E%E5%8F%91%E7%88%86%E9%9B%B7%E6%AC%A0%E5%80%BA4000%E4%BA%BF)
1. [马斯克签署恢复黄仁勋职位请愿书](https://www.zhihu.com/search?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E7%AD%BE%E7%BD%B2%E6%81%A2%E5%A4%8D%E9%BB%84%E4%BB%81%E5%8B%8B%E8%81%8C%E4%BD%8D%E8%AF%B7%E6%84%BF%E4%B9%A6)
1. [星舰飞船首次成功回收](https://www.zhihu.com/search?q=%E6%98%9F%E8%88%B0%E9%A3%9E%E8%88%B9%E9%A6%96%E6%AC%A1%E6%88%90%E5%8A%9F%E5%9B%9E%E6%94%B6)
1. [江苏多地整改高中生超长待机](https://www.zhihu.com/search?q=%E6%B1%9F%E8%8B%8F%E5%A4%9A%E5%9C%B0%E6%95%B4%E6%94%B9%E9%AB%98%E4%B8%AD%E7%94%9F%E8%B6%85%E9%95%BF%E5%BE%85%E6%9C%BA)
1. [乌对俄发动近5年来最大规模空袭](https://www.zhihu.com/search?q=%E4%B9%8C%E5%AF%B9%E4%BF%84%E5%8F%91%E5%8A%A8%E8%BF%915%E5%B9%B4%E6%9D%A5%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%A9%BA%E8%A2%AD)
1. [Knight获S16总决赛FMVP](https://www.zhihu.com/search?q=Knight%E8%8E%B7S16%E6%80%BB%E5%86%B3%E8%B5%9BFMVP)
1. [英伟达超97%员工希望黄仁勋回归](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%B6%8597%25%E5%91%98%E5%B7%A5%E5%B8%8C%E6%9C%9B%E9%BB%84%E4%BB%81%E5%8B%8B%E5%9B%9E%E5%BD%92)
1. [方博复出首夺WTT男单冠军](https://www.zhihu.com/search?q=%E6%96%B9%E5%8D%9A%E5%A4%8D%E5%87%BA%E9%A6%96%E5%A4%BAWTT%E7%94%B7%E5%8D%95%E5%86%A0%E5%86%9B)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Nov 16 2026 05:51:40 GMT+0800 (China Standard Time) -->

1. [「圣枪哥」因未在 S16 全球总决赛上场无缘冠军皮肤，对此你有什么想说的？](https://www.zhihu.com/question/2105213477421950500)
1. [炸串摊主遭差评后轻生去世，当地警方不予立案，死者家属称将对避雷贴发帖人提起诉讼，如何从法律角度解读？](https://www.zhihu.com/question/2104546575322183400)
1. [美国又有近万架航班取消或延误，预计15日晚恢复正常，故障根源仍尚未查明，能预期恢复正常吗？](https://www.zhihu.com/question/2105279535771907800)
1. [BLG 成功逆袭夺冠，雷鸟达成不退款条件，如何评价这一波营销策略？](https://www.zhihu.com/question/2105217978186691600)
1. [山姆靠399元羽绒服、低价始祖鸟/加拿大鹅频频出圈，这类产品真的是市场稀缺品吗？山姆真正在「卖什么」？](https://www.zhihu.com/question/2104931349115229000)
1. [Riot 宣布《英雄联盟》即将全面升级为《英雄联盟:曙光》，你觉得此举对于这款游戏意味着什么？](https://www.zhihu.com/question/2105179283391866400)
1. [Knight 成为首位中国籍全球总决赛冠军中单，他能在中单选手中排进第几名？](https://www.zhihu.com/question/2105211418282833200)
1. [小学生在回答里写「吃饭打包很丢脸」，老师打叉并扣其4分，你觉得这个回答到底该不该被扣分？](https://www.zhihu.com/question/2105107042067392300)
1. [开拓者官号发赛场照，唯独单放1张杨瀚森通道离去背影图，是否预示截止日会交易杨瀚森，去哪个队好？](https://www.zhihu.com/question/2105121212687037400)
1. [如何评价 Ruler 在 S16 全球总决赛上的表现？](https://www.zhihu.com/question/2105146658178561000)
1. [乌克兰一夜向俄罗斯发射近 1200 架无人机，创下冲突以来最大规模袭击之一，释放了什么信号？](https://www.zhihu.com/question/2104984568293848600)
1. [「英雄牌钢笔」没落的原因是什么？](https://www.zhihu.com/question/20616337)
1. [为什么一直以老练闻名的 Canyon 在 S16 总决赛上就「查无此人」了？](https://www.zhihu.com/question/2105205635084022800)
1. [「不要公开宣布你的个人目标」有没有道理？](https://www.zhihu.com/question/34419275)
1. [如何评价 Chovy 在 S16 全球总决赛上的表现？](https://www.zhihu.com/question/2105146373834105000)
1. [中国新能源企业在芬建厂涉人口贩运调查，出海中企该如何规避海外用工合规风险？](https://www.zhihu.com/question/2105092208948933400)
1. [外媒曝中国男足再度收紧纹身限制，国脚需佩戴肤色护臂遮盖，对此你怎么看，国家队限制纹身外露是否合理？](https://www.zhihu.com/question/2104152081246282200)
1. [iPhoneDuo经45.7万次折叠后屏幕完好铰链松动，测试结果说明了啥？能在多大程度上反映手机寿命？](https://www.zhihu.com/question/2104970594072490800)
1. [记者称安切洛蒂不愿放弃巴西主帅职位接手排名英超第 18 的曼联，背后有哪些考量？](https://www.zhihu.com/question/2104010645993800400)
1. [WTT伊斯坦布尔站男单决赛，方博4-1姜东硕，夺得男单冠军，从复出到夺冠仅5个月，如何评价他的表现？](https://www.zhihu.com/question/2105407072649078000)
1. [如何评价赵本山在《走马上任》原声演唱的推广曲《慌啥子嘛》？](https://www.zhihu.com/question/2104898849722602200)
1. [如何看待王传君谈《爱情公寓》言论争议，称当年脑子里只有「关我屁事」和「关你屁事」，现在为冲动买单？](https://www.zhihu.com/question/2103430981067847000)
1. [职场人士如何在工作之余还能坚持学习英语？](https://www.zhihu.com/question/24763078)
1. [大家日常都是怎么省钱的？](https://www.zhihu.com/question/14403188184)
1. [Windows系统相比macOS系统，真的卡的要死，Windows明知它的致命短板，为何一直都不解决？](https://www.zhihu.com/question/2103555144390653700)
1. [遗传角度来看，孙子是和爷爷奶奶血缘更近，还是和外公外婆？](https://www.zhihu.com/question/307479952)
1. [既然饶毅指出，国家投入的科研经费已远超科研工作的实际需求，为何广大科研人员在争项目时依旧压力巨大？](https://www.zhihu.com/question/2002806178120499700)
1. [为何大部分父母开始时总认为教育孩子「应该」很容易，自己「应该」没问题？](https://www.zhihu.com/question/2103010764525156000)
1. [崩坏星穹铁道4.7版本更新了货币战争S2，体验如何？](https://www.zhihu.com/question/2104267934386353200)
1. [39元购买力挑战：如果给你39元采购食材，你能做出多么____的一餐？](https://www.zhihu.com/question/2104599035356996900)
1. [GEN 总决赛不敌 BLG 止步亚军，这场比赛他们输在哪？](https://www.zhihu.com/question/2105209509492822000)
1. [如何评价Knight荣获s16FMVP？](https://www.zhihu.com/question/2105215213016564500)
1. [男子失业后断供房贷靠跑外卖维生，法院判决非恶意断供，涉案房系唯一住所暂不拍卖房产，如何从法律角度解读？](https://www.zhihu.com/question/2104510599564636400)
1. [C 罗退出国家队后葡萄牙首战 1 比 4 惨败丹麦，这场失利暴露出哪些核心问题？](https://www.zhihu.com/question/2105227846880850400)

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
<!-- 最后更新时间 Mon Nov 16 2026 06:59:12 GMT+0800 (China Standard Time) -->

1. [习近平将出席APEC工商领导人峰会](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%B0%86%E5%87%BA%E5%B8%ADAPEC%E5%B7%A5%E5%95%86%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B3%B0%E4%BC%9A%23&Refer=new_time)
1. [买衣服别被面料名字忽悠](https://s.weibo.com//weibo?q=%E4%B9%B0%E8%A1%A3%E6%9C%8D%E5%88%AB%E8%A2%AB%E9%9D%A2%E6%96%99%E5%90%8D%E5%AD%97%E5%BF%BD%E6%82%A0&t=31&band_rank=1&Refer=top)
1. [西班牙vs英格兰](https://s.weibo.com//weibo?q=%E8%A5%BF%E7%8F%AD%E7%89%99vs%E8%8B%B1%E6%A0%BC%E5%85%B0&t=31&band_rank=2&Refer=top)
1. [开放的深圳与亚太共赴新程](https://s.weibo.com//weibo?q=%23%E5%BC%80%E6%94%BE%E7%9A%84%E6%B7%B1%E5%9C%B3%E4%B8%8E%E4%BA%9A%E5%A4%AA%E5%85%B1%E8%B5%B4%E6%96%B0%E7%A8%8B%23&t=31&band_rank=3&Refer=top)
1. [高中累死累活读书后遗症](https://s.weibo.com//weibo?q=%E9%AB%98%E4%B8%AD%E7%B4%AF%E6%AD%BB%E7%B4%AF%E6%B4%BB%E8%AF%BB%E4%B9%A6%E5%90%8E%E9%81%97%E7%97%87&t=31&band_rank=4&Refer=top)
1. [西班牙2比3英格兰](https://s.weibo.com//weibo?q=%E8%A5%BF%E7%8F%AD%E7%89%992%E6%AF%943%E8%8B%B1%E6%A0%BC%E5%85%B0&t=31&band_rank=5&Refer=top)
1. [韩网友爆料Jennie妈妈](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E7%BD%91%E5%8F%8B%E7%88%86%E6%96%99Jennie%E5%A6%88%E5%A6%88%23&t=31&band_rank=6&Refer=top)
1. [白鹿进组前的伙食](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E8%BF%9B%E7%BB%84%E5%89%8D%E7%9A%84%E4%BC%99%E9%A3%9F%23&t=31&band_rank=7&Refer=top)
1. [内娱这样的台词我等了二十年](https://s.weibo.com//weibo?q=%E5%86%85%E5%A8%B1%E8%BF%99%E6%A0%B7%E7%9A%84%E5%8F%B0%E8%AF%8D%E6%88%91%E7%AD%89%E4%BA%86%E4%BA%8C%E5%8D%81%E5%B9%B4&t=31&band_rank=8&Refer=top)
1. [胖东来羽绒服区人山人海](https://s.weibo.com//weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E7%BE%BD%E7%BB%92%E6%9C%8D%E5%8C%BA%E4%BA%BA%E5%B1%B1%E4%BA%BA%E6%B5%B7%23&t=31&band_rank=9&Refer=top)
1. [你的朋友圈设置为三天可见了吗](https://s.weibo.com//weibo?q=%23%E4%BD%A0%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%AE%BE%E7%BD%AE%E4%B8%BA%E4%B8%89%E5%A4%A9%E5%8F%AF%E8%A7%81%E4%BA%86%E5%90%97%23&t=31&band_rank=10&Refer=top)
1. [国乒全军覆没34岁方博夺冠](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A134%E5%B2%81%E6%96%B9%E5%8D%9A%E5%A4%BA%E5%86%A0%23&t=31&band_rank=11&Refer=top)
1. [红果AI漫剧热播榜排名TOP10](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E6%9E%9CAI%E6%BC%AB%E5%89%A7%E7%83%AD%E6%92%AD%E6%A6%9C%E6%8E%92%E5%90%8DTOP10%23&t=31&band_rank=12&Refer=top)
1. [方博回应复出夺冠](https://s.weibo.com//weibo?q=%23%E6%96%B9%E5%8D%9A%E5%9B%9E%E5%BA%94%E5%A4%8D%E5%87%BA%E5%A4%BA%E5%86%A0%23&t=31&band_rank=13&Refer=top)
1. [青稚聊天记录](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95&t=31&band_rank=14&Refer=top)
1. [曝许飞退群](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%AE%B8%E9%A3%9E%E9%80%80%E7%BE%A4%23&t=31&band_rank=15&Refer=top)
1. [凌晨3点杭州多家电影院爆满](https://s.weibo.com//weibo?q=%23%E5%87%8C%E6%99%A83%E7%82%B9%E6%9D%AD%E5%B7%9E%E5%A4%9A%E5%AE%B6%E7%94%B5%E5%BD%B1%E9%99%A2%E7%88%86%E6%BB%A1%23&t=31&band_rank=16&Refer=top)
1. [Lisa把钱塞腰上被质疑](https://s.weibo.com//weibo?q=Lisa%E6%8A%8A%E9%92%B1%E5%A1%9E%E8%85%B0%E4%B8%8A%E8%A2%AB%E8%B4%A8%E7%96%91&t=31&band_rank=17&Refer=top)
1. [樊振东暴力熊猫回归](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%9A%B4%E5%8A%9B%E7%86%8A%E7%8C%AB%E5%9B%9E%E5%BD%92%23&t=31&band_rank=18&Refer=top)
1. [BLG一串四原来是烤串的串](https://s.weibo.com//weibo?q=%23BLG%E4%B8%80%E4%B8%B2%E5%9B%9B%E5%8E%9F%E6%9D%A5%E6%98%AF%E7%83%A4%E4%B8%B2%E7%9A%84%E4%B8%B2%23&t=31&band_rank=19&Refer=top)
1. [BLG庆功宴](https://s.weibo.com//weibo?q=%23BLG%E5%BA%86%E5%8A%9F%E5%AE%B4%23&t=31&band_rank=20&Refer=top)
1. [妈妈试了三次才懂孩子想吃煎蛋](https://s.weibo.com//weibo?q=%E5%A6%88%E5%A6%88%E8%AF%95%E4%BA%86%E4%B8%89%E6%AC%A1%E6%89%8D%E6%87%82%E5%AD%A9%E5%AD%90%E6%83%B3%E5%90%83%E7%85%8E%E8%9B%8B&t=31&band_rank=21&Refer=top)
1. [夫妻约定二胎一家一个姓](https://s.weibo.com//weibo?q=%E5%A4%AB%E5%A6%BB%E7%BA%A6%E5%AE%9A%E4%BA%8C%E8%83%8E%E4%B8%80%E5%AE%B6%E4%B8%80%E4%B8%AA%E5%A7%93&t=31&band_rank=22&Refer=top)
1. [弟弟去世轮到给弟弟祭祀的日子](https://s.weibo.com//weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%8E%BB%E4%B8%96%E8%BD%AE%E5%88%B0%E7%BB%99%E5%BC%9F%E5%BC%9F%E7%A5%AD%E7%A5%80%E7%9A%84%E6%97%A5%E5%AD%90%23&t=31&band_rank=23&Refer=top)
1. [宋亚轩回归现发成绩](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E5%BD%92%E7%8E%B0%E5%8F%91%E6%88%90%E7%BB%A9%23&t=31&band_rank=24&Refer=top)
1. [白鹿换新手机](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8D%A2%E6%96%B0%E6%89%8B%E6%9C%BA%23&t=31&band_rank=25&Refer=top)
1. [砒霜口服药让白血病患存活率超97%](https://s.weibo.com//weibo?q=%23%E7%A0%92%E9%9C%9C%E5%8F%A3%E6%9C%8D%E8%8D%AF%E8%AE%A9%E7%99%BD%E8%A1%80%E7%97%85%E6%82%A3%E5%AD%98%E6%B4%BB%E7%8E%87%E8%B6%8597%25%23&t=31&band_rank=26&Refer=top)
1. [丹麦新工签将向中国公民开放](https://s.weibo.com//weibo?q=%E4%B8%B9%E9%BA%A6%E6%96%B0%E5%B7%A5%E7%AD%BE%E5%B0%86%E5%90%91%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%BC%80%E6%94%BE&t=31&band_rank=27&Refer=top)
1. [00后真是在各过各的](https://s.weibo.com//weibo?q=00%E5%90%8E%E7%9C%9F%E6%98%AF%E5%9C%A8%E5%90%84%E8%BF%87%E5%90%84%E7%9A%84&t=31&band_rank=28&Refer=top)
1. [男孩拆外卖拆出小猫笑到停不下来](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%A9%E6%8B%86%E5%A4%96%E5%8D%96%E6%8B%86%E5%87%BA%E5%B0%8F%E7%8C%AB%E7%AC%91%E5%88%B0%E5%81%9C%E4%B8%8D%E4%B8%8B%E6%9D%A5%23&t=31&band_rank=29&Refer=top)
1. [四川落石砸中车辆画面](https://s.weibo.com//weibo?q=%23%E5%9B%9B%E5%B7%9D%E8%90%BD%E7%9F%B3%E7%A0%B8%E4%B8%AD%E8%BD%A6%E8%BE%86%E7%94%BB%E9%9D%A2%23&t=31&band_rank=30&Refer=top)
1. [WTA祝贺安德列娃](https://s.weibo.com//weibo?q=%23WTA%E7%A5%9D%E8%B4%BA%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%23&t=31&band_rank=31&Refer=top)
1. [华晨宇爱与不爱很明显](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E7%88%B1%E4%B8%8E%E4%B8%8D%E7%88%B1%E5%BE%88%E6%98%8E%E6%98%BE%23&t=31&band_rank=32&Refer=top)
1. [BLG夺冠快乐延续到汪苏泷演唱会](https://s.weibo.com//weibo?q=BLG%E5%A4%BA%E5%86%A0%E5%BF%AB%E4%B9%90%E5%BB%B6%E7%BB%AD%E5%88%B0%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A&t=31&band_rank=33&Refer=top)
1. [好的亲密关系是支持不是消耗](https://s.weibo.com//weibo?q=%E5%A5%BD%E7%9A%84%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E6%98%AF%E6%94%AF%E6%8C%81%E4%B8%8D%E6%98%AF%E6%B6%88%E8%80%97&t=31&band_rank=34&Refer=top)
1. [没买雷鸟感觉亏大了](https://s.weibo.com//weibo?q=%E6%B2%A1%E4%B9%B0%E9%9B%B7%E9%B8%9F%E6%84%9F%E8%A7%89%E4%BA%8F%E5%A4%A7%E4%BA%86&t=31&band_rank=35&Refer=top)
1. [侯明昊工作室谴责品牌违规售票](https://s.weibo.com//weibo?q=%E4%BE%AF%E6%98%8E%E6%98%8A%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%B0%B4%E8%B4%A3%E5%93%81%E7%89%8C%E8%BF%9D%E8%A7%84%E5%94%AE%E7%A5%A8&t=31&band_rank=36&Refer=top)
1. [安德列娃对决斯维托丽娜](https://s.weibo.com//weibo?q=%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%E5%AF%B9%E5%86%B3%E6%96%AF%E7%BB%B4%E6%89%98%E4%B8%BD%E5%A8%9C&t=31&band_rank=37&Refer=top)
1. [Karsa安慰Junjia](https://s.weibo.com//weibo?q=%23Karsa%E5%AE%89%E6%85%B0Junjia%23&t=31&band_rank=38&Refer=top)
1. [王橹杰穆祉丞小狗呲牙小猫呲牙](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B0%8F%E7%8B%97%E5%91%B2%E7%89%99%E5%B0%8F%E7%8C%AB%E5%91%B2%E7%89%99%23&t=31&band_rank=39&Refer=top)
1. [盗墓团伙藏身废弃酒店挖百米暗道](https://s.weibo.com//weibo?q=%23%E7%9B%97%E5%A2%93%E5%9B%A2%E4%BC%99%E8%97%8F%E8%BA%AB%E5%BA%9F%E5%BC%83%E9%85%92%E5%BA%97%E6%8C%96%E7%99%BE%E7%B1%B3%E6%9A%97%E9%81%93%23&t=31&band_rank=40&Refer=top)
1. [青稚前女友](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A%E5%89%8D%E5%A5%B3%E5%8F%8B&t=31&band_rank=41&Refer=top)
1. [原来一千粒扣子是这么打包的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E4%B8%80%E5%8D%83%E7%B2%92%E6%89%A3%E5%AD%90%E6%98%AF%E8%BF%99%E4%B9%88%E6%89%93%E5%8C%85%E7%9A%84&t=31&band_rank=42&Refer=top)
1. [方博曾击败许昕张继科](https://s.weibo.com//weibo?q=%23%E6%96%B9%E5%8D%9A%E6%9B%BE%E5%87%BB%E8%B4%A5%E8%AE%B8%E6%98%95%E5%BC%A0%E7%BB%A7%E7%A7%91%23&t=31&band_rank=43&Refer=top)
1. [穆祉丞18岁最后一条动态](https://s.weibo.com//weibo?q=%E7%A9%86%E7%A5%89%E4%B8%9E18%E5%B2%81%E6%9C%80%E5%90%8E%E4%B8%80%E6%9D%A1%E5%8A%A8%E6%80%81&t=31&band_rank=44&Refer=top)
1. [猫是机会主义者具象化了](https://s.weibo.com//weibo?q=%E7%8C%AB%E6%98%AF%E6%9C%BA%E4%BC%9A%E4%B8%BB%E4%B9%89%E8%80%85%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86&t=31&band_rank=45&Refer=top)
1. [女子推理社](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E6%8E%A8%E7%90%86%E7%A4%BE&t=31&band_rank=46&Refer=top)
1. [Knight世界赛最高KDA](https://s.weibo.com//weibo?q=%23Knight%E4%B8%96%E7%95%8C%E8%B5%9B%E6%9C%80%E9%AB%98KDA%23&t=31&band_rank=47&Refer=top)
1. [曝DK全员离队](https://s.weibo.com//weibo?q=%23%E6%9B%9DDK%E5%85%A8%E5%91%98%E7%A6%BB%E9%98%9F%23&t=31&band_rank=48&Refer=top)
1. [Knight夺冠后鼓励chovy](https://s.weibo.com//weibo?q=%23Knight%E5%A4%BA%E5%86%A0%E5%90%8E%E9%BC%93%E5%8A%B1chovy%23&t=31&band_rank=49&Refer=top)
1. [张家齐妈妈是北京拆迁户](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E6%98%AF%E5%8C%97%E4%BA%AC%E6%8B%86%E8%BF%81%E6%88%B7%23&t=31&band_rank=50&Refer=top)
1. [国乒全军覆没34岁方博夺冠](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A134%E5%B2%81%E6%96%B9%E5%8D%9A%E5%A4%BA%E5%86%A0%23&t=31&band_rank=1&Refer=top)
1. [青稚聊天记录](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95&t=31&band_rank=2&Refer=top)
1. [2分钟快闪视频看APEC热词](https://s.weibo.com//weibo?q=%232%E5%88%86%E9%92%9F%E5%BF%AB%E9%97%AA%E8%A7%86%E9%A2%91%E7%9C%8BAPEC%E7%83%AD%E8%AF%8D%23&t=31&band_rank=3&Refer=top)
1. [红果AI漫剧热播榜排名TOP10](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E6%9E%9CAI%E6%BC%AB%E5%89%A7%E7%83%AD%E6%92%AD%E6%A6%9C%E6%8E%92%E5%90%8DTOP10%23&t=31&band_rank=4&Refer=top)
1. [BLG庆功宴](https://s.weibo.com//weibo?q=%23BLG%E5%BA%86%E5%8A%9F%E5%AE%B4%23&t=31&band_rank=5&Refer=top)
1. [曝许飞退群](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%AE%B8%E9%A3%9E%E9%80%80%E7%BE%A4%23&t=31&band_rank=7&Refer=top)
1. [买衣服别被面料名字忽悠](https://s.weibo.com//weibo?q=%E4%B9%B0%E8%A1%A3%E6%9C%8D%E5%88%AB%E8%A2%AB%E9%9D%A2%E6%96%99%E5%90%8D%E5%AD%97%E5%BF%BD%E6%82%A0&t=31&band_rank=8&Refer=top)
1. [内娱这样的台词我等了二十年](https://s.weibo.com//weibo?q=%E5%86%85%E5%A8%B1%E8%BF%99%E6%A0%B7%E7%9A%84%E5%8F%B0%E8%AF%8D%E6%88%91%E7%AD%89%E4%BA%86%E4%BA%8C%E5%8D%81%E5%B9%B4&t=31&band_rank=9&Refer=top)
1. [丹麦新工签将向中国公民开放](https://s.weibo.com//weibo?q=%E4%B8%B9%E9%BA%A6%E6%96%B0%E5%B7%A5%E7%AD%BE%E5%B0%86%E5%90%91%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%BC%80%E6%94%BE&t=31&band_rank=10&Refer=top)
1. [白鹿进组前的伙食](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E8%BF%9B%E7%BB%84%E5%89%8D%E7%9A%84%E4%BC%99%E9%A3%9F%23&t=31&band_rank=11&Refer=top)
1. [Lisa把钱塞腰上被质疑](https://s.weibo.com//weibo?q=Lisa%E6%8A%8A%E9%92%B1%E5%A1%9E%E8%85%B0%E4%B8%8A%E8%A2%AB%E8%B4%A8%E7%96%91&t=31&band_rank=12&Refer=top)
1. [BLG一串四原来是烤串的串](https://s.weibo.com//weibo?q=%23BLG%E4%B8%80%E4%B8%B2%E5%9B%9B%E5%8E%9F%E6%9D%A5%E6%98%AF%E7%83%A4%E4%B8%B2%E7%9A%84%E4%B8%B2%23&t=31&band_rank=13&Refer=top)
1. [朱天天 创造101](https://s.weibo.com//weibo?q=%E6%9C%B1%E5%A4%A9%E5%A4%A9%20%E5%88%9B%E9%80%A0101&t=31&band_rank=14&Refer=top)
1. [侯明昊工作室谴责品牌违规售票](https://s.weibo.com//weibo?q=%E4%BE%AF%E6%98%8E%E6%98%8A%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%B0%B4%E8%B4%A3%E5%93%81%E7%89%8C%E8%BF%9D%E8%A7%84%E5%94%AE%E7%A5%A8&t=31&band_rank=15&Refer=top)
1. [白鹿换新手机](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8D%A2%E6%96%B0%E6%89%8B%E6%9C%BA%23&t=31&band_rank=16&Refer=top)
1. [穆祉丞18岁最后一条动态](https://s.weibo.com//weibo?q=%E7%A9%86%E7%A5%89%E4%B8%9E18%E5%B2%81%E6%9C%80%E5%90%8E%E4%B8%80%E6%9D%A1%E5%8A%A8%E6%80%81&t=31&band_rank=17&Refer=top)
1. [胡先煦我后面几期更笨](https://s.weibo.com//weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E6%88%91%E5%90%8E%E9%9D%A2%E5%87%A0%E6%9C%9F%E6%9B%B4%E7%AC%A8%23&t=31&band_rank=18&Refer=top)
1. [砒霜口服药让白血病患存活率超97%](https://s.weibo.com//weibo?q=%23%E7%A0%92%E9%9C%9C%E5%8F%A3%E6%9C%8D%E8%8D%AF%E8%AE%A9%E7%99%BD%E8%A1%80%E7%97%85%E6%82%A3%E5%AD%98%E6%B4%BB%E7%8E%87%E8%B6%8597%25%23&t=31&band_rank=19&Refer=top)
1. [猪肉价跌得有多狠](https://s.weibo.com//weibo?q=%23%E7%8C%AA%E8%82%89%E4%BB%B7%E8%B7%8C%E5%BE%97%E6%9C%89%E5%A4%9A%E7%8B%A0%23&t=31&band_rank=20&Refer=top)
1. [雪中飞向侯明昊道歉](https://s.weibo.com//weibo?q=%23%E9%9B%AA%E4%B8%AD%E9%A3%9E%E5%90%91%E4%BE%AF%E6%98%8E%E6%98%8A%E9%81%93%E6%AD%89%23&t=31&band_rank=22&Refer=top)
1. [张家齐妈妈是北京拆迁户](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E6%98%AF%E5%8C%97%E4%BA%AC%E6%8B%86%E8%BF%81%E6%88%B7%23&t=31&band_rank=23&Refer=top)
1. [青稚前女友](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A%E5%89%8D%E5%A5%B3%E5%8F%8B&t=31&band_rank=24&Refer=top)
1. [夫妻约定二胎一家一个姓](https://s.weibo.com//weibo?q=%E5%A4%AB%E5%A6%BB%E7%BA%A6%E5%AE%9A%E4%BA%8C%E8%83%8E%E4%B8%80%E5%AE%B6%E4%B8%80%E4%B8%AA%E5%A7%93&t=31&band_rank=25&Refer=top)
1. [曝DK全员离队](https://s.weibo.com//weibo?q=%23%E6%9B%9DDK%E5%85%A8%E5%91%98%E7%A6%BB%E9%98%9F%23&t=31&band_rank=26&Refer=top)
1. [方博回应复出夺冠](https://s.weibo.com//weibo?q=%23%E6%96%B9%E5%8D%9A%E5%9B%9E%E5%BA%94%E5%A4%8D%E5%87%BA%E5%A4%BA%E5%86%A0%23&t=31&band_rank=27&Refer=top)
1. [LCK解说长达十分钟盛赞BLG](https://s.weibo.com//weibo?q=%23LCK%E8%A7%A3%E8%AF%B4%E9%95%BF%E8%BE%BE%E5%8D%81%E5%88%86%E9%92%9F%E7%9B%9B%E8%B5%9EBLG%23&t=31&band_rank=29&Refer=top)
1. [你的朋友圈设置为三天可见了吗](https://s.weibo.com//weibo?q=%23%E4%BD%A0%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%AE%BE%E7%BD%AE%E4%B8%BA%E4%B8%89%E5%A4%A9%E5%8F%AF%E8%A7%81%E4%BA%86%E5%90%97%23&t=31&band_rank=30&Refer=top)
1. [于正说白小纯很帅](https://s.weibo.com//weibo?q=%23%E4%BA%8E%E6%AD%A3%E8%AF%B4%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%BE%88%E5%B8%85%23&t=31&band_rank=31&Refer=top)
1. [王橹杰穆祉丞小狗呲牙小猫呲牙](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B0%8F%E7%8B%97%E5%91%B2%E7%89%99%E5%B0%8F%E7%8C%AB%E5%91%B2%E7%89%99%23&t=31&band_rank=32&Refer=top)
1. [Karsa安慰Junjia](https://s.weibo.com//weibo?q=%23Karsa%E5%AE%89%E6%85%B0Junjia%23&t=31&band_rank=33&Refer=top)
1. [Knight世界赛最高KDA](https://s.weibo.com//weibo?q=%23Knight%E4%B8%96%E7%95%8C%E8%B5%9B%E6%9C%80%E9%AB%98KDA%23&t=31&band_rank=34&Refer=top)
1. [弟弟去世轮到给弟弟祭祀的日子](https://s.weibo.com//weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%8E%BB%E4%B8%96%E8%BD%AE%E5%88%B0%E7%BB%99%E5%BC%9F%E5%BC%9F%E7%A5%AD%E7%A5%80%E7%9A%84%E6%97%A5%E5%AD%90%23&t=31&band_rank=35&Refer=top)
1. [Viper把圣枪哥拉到奖杯前合影](https://s.weibo.com//weibo?q=%23Viper%E6%8A%8A%E5%9C%A3%E6%9E%AA%E5%93%A5%E6%8B%89%E5%88%B0%E5%A5%96%E6%9D%AF%E5%89%8D%E5%90%88%E5%BD%B1%23&t=31&band_rank=36&Refer=top)
1. [青稚前女友六点澄清](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%85%AD%E7%82%B9%E6%BE%84%E6%B8%85&t=31&band_rank=37&Refer=top)
1. [好的亲密关系是支持不是消耗](https://s.weibo.com//weibo?q=%E5%A5%BD%E7%9A%84%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E6%98%AF%E6%94%AF%E6%8C%81%E4%B8%8D%E6%98%AF%E6%B6%88%E8%80%97&t=31&band_rank=38&Refer=top)
1. [suk送白小纯奖杯回放](https://s.weibo.com//weibo?q=%23suk%E9%80%81%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%A5%96%E6%9D%AF%E5%9B%9E%E6%94%BE%23&t=31&band_rank=39&Refer=top)
1. [杨瀚森交易辟谣](https://s.weibo.com//weibo?q=%E6%9D%A8%E7%80%9A%E6%A3%AE%E4%BA%A4%E6%98%93%E8%BE%9F%E8%B0%A3&t=31&band_rank=40&Refer=top)
1. [白敬亭现发4口碑](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E7%8E%B0%E5%8F%914%E5%8F%A3%E7%A2%91%23&t=31&band_rank=41&Refer=top)
1. [宋亚轩回归现发成绩](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E5%BD%92%E7%8E%B0%E5%8F%91%E6%88%90%E7%BB%A9%23&t=31&band_rank=42&Refer=top)
1. [高迪宣布取消明年1月演唱会](https://s.weibo.com//weibo?q=%23%E9%AB%98%E8%BF%AA%E5%AE%A3%E5%B8%83%E5%8F%96%E6%B6%88%E6%98%8E%E5%B9%B41%E6%9C%88%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=43&Refer=top)
1. [今天是太阳雨小情侣出国就大方了](https://s.weibo.com//weibo?q=%23%E4%BB%8A%E5%A4%A9%E6%98%AF%E5%A4%AA%E9%98%B3%E9%9B%A8%E5%B0%8F%E6%83%85%E4%BE%A3%E5%87%BA%E5%9B%BD%E5%B0%B1%E5%A4%A7%E6%96%B9%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [女子推理社](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E6%8E%A8%E7%90%86%E7%A4%BE&t=31&band_rank=45&Refer=top)
1. [2026MMA完整获奖名单](https://s.weibo.com//weibo?q=2026MMA%E5%AE%8C%E6%95%B4%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=46&Refer=top)
1. [华晨宇爱与不爱很明显](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E7%88%B1%E4%B8%8E%E4%B8%8D%E7%88%B1%E5%BE%88%E6%98%8E%E6%98%BE%23&t=31&band_rank=47&Refer=top)
1. [暖阳没拿年度最佳打野](https://s.weibo.com//weibo?q=%23%E6%9A%96%E9%98%B3%E6%B2%A1%E6%8B%BF%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BD%B3%E6%89%93%E9%87%8E%23&t=31&band_rank=48&Refer=top)
1. [胖东来羽绒服区人山人海](https://s.weibo.com//weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E7%BE%BD%E7%BB%92%E6%9C%8D%E5%8C%BA%E4%BA%BA%E5%B1%B1%E4%BA%BA%E6%B5%B7%23&t=31&band_rank=49&Refer=top)
1. [方博复出首冠](https://s.weibo.com//weibo?q=%23%E6%96%B9%E5%8D%9A%E5%A4%8D%E5%87%BA%E9%A6%96%E5%86%A0%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
