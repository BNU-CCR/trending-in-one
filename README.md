# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-14 00:19:54

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
<!-- 最后更新时间 Sun Sep 13 2026 20:51:02 GMT+0800 (China Standard Time) -->

1. [金砖国家领导人集体合影](https://so.toutiao.com/search?keyword=金砖国家领导人集体合影)
1. [伊朗股市单日大涨逾15万点](https://so.toutiao.com/search?keyword=伊朗股市单日大涨逾15万点)
1. [透过服贸会，外资抢抓三大新机遇](https://so.toutiao.com/search?keyword=透过服贸会，外资抢抓三大新机遇)
1. [烧烤店被检查15次：系1人投诉116次](https://so.toutiao.com/search?keyword=烧烤店被检查15次：系1人投诉116次)
1. [胖东来新招工准则：合同4年不续签](https://so.toutiao.com/search?keyword=胖东来新招工准则：合同4年不续签)
1. [央视30秒视频悼念敬一丹](https://so.toutiao.com/search?keyword=央视30秒视频悼念敬一丹)
1. [陈熠澳门冠军赛亚军](https://so.toutiao.com/search?keyword=陈熠澳门冠军赛亚军)
1. [市委书记多次称前面的债凭什么我还](https://so.toutiao.com/search?keyword=市委书记多次称前面的债凭什么我还)
1. [38家药企涉商业贿赂被点名](https://so.toutiao.com/search?keyword=38家药企涉商业贿赂被点名)
1. [官方通报菏泽古沉船考古疑似文物遗失](https://so.toutiao.com/search?keyword=官方通报菏泽古沉船考古疑似文物遗失)
1. [网民造谣商业街发生枪战被拘](https://so.toutiao.com/search?keyword=网民造谣商业街发生枪战被拘)
1. [大衣哥朱之文回应外出从不带助理](https://so.toutiao.com/search?keyword=大衣哥朱之文回应外出从不带助理)
1. [库里空降粤BA](https://so.toutiao.com/search?keyword=库里空降粤BA)
1. [小七龄童去世](https://so.toutiao.com/search?keyword=小七龄童去世)
1. [被动物咬伤后如何处理](https://so.toutiao.com/search?keyword=被动物咬伤后如何处理)
1. [张本美和赛季三连冠](https://so.toutiao.com/search?keyword=张本美和赛季三连冠)
1. [敬一丹账号讣告：感谢这世界让我走过](https://so.toutiao.com/search?keyword=敬一丹账号讣告：感谢这世界让我走过)
1. [葫芦爷爷一顿饭被叫出去10次](https://so.toutiao.com/search?keyword=葫芦爷爷一顿饭被叫出去10次)
1. [消费者称新买的苹果手机时间总是变慢](https://so.toutiao.com/search?keyword=消费者称新买的苹果手机时间总是变慢)
1. [央视知名主持人敬一丹去世](https://so.toutiao.com/search?keyword=央视知名主持人敬一丹去世)
1. [因为热爱所以选择再穿军装](https://so.toutiao.com/search?keyword=因为热爱所以选择再穿军装)
1. [iPhone 17大降价](https://so.toutiao.com/search?keyword=iPhone%2017大降价)
1. [“打塔人”在10层楼高树上打松塔](https://so.toutiao.com/search?keyword=“打塔人”在10层楼高树上打松塔)
1. [台媒称岛内呼吁统一的声量持续增大](https://so.toutiao.com/search?keyword=台媒称岛内呼吁统一的声量持续增大)
1. [货车卸货时溜车 司机跳车逃生](https://so.toutiao.com/search?keyword=货车卸货时溜车%20司机跳车逃生)
1. [六小龄童做客安徽六安](https://so.toutiao.com/search?keyword=六小龄童做客安徽六安)
1. [最大国产AI芯片集群诞生意味着什么](https://so.toutiao.com/search?keyword=最大国产AI芯片集群诞生意味着什么)
1. [研究糖尿病50多年的医生总结控糖经验](https://so.toutiao.com/search?keyword=研究糖尿病50多年的医生总结控糖经验)
1. [伊朗局势外溢风险牵动中东安全局势](https://so.toutiao.com/search?keyword=伊朗局势外溢风险牵动中东安全局势)
1. [手机蓝牙别常开 这些窃密手段要警惕](https://so.toutiao.com/search?keyword=手机蓝牙别常开%20这些窃密手段要警惕)
1. [手机涨价潮背后谁在闷声发大财](https://so.toutiao.com/search?keyword=手机涨价潮背后谁在闷声发大财)
1. [终于我也成了第一个接孩子的家长](https://so.toutiao.com/search?keyword=终于我也成了第一个接孩子的家长)
1. [陈鲁豫称最近还想着约敬一丹做节目](https://so.toutiao.com/search?keyword=陈鲁豫称最近还想着约敬一丹做节目)
1. [重庆市政府办公厅副主任陶晓锋被查](https://so.toutiao.com/search?keyword=重庆市政府办公厅副主任陶晓锋被查)
1. [为何顶尖AI实验室研究人员接连请辞](https://so.toutiao.com/search?keyword=为何顶尖AI实验室研究人员接连请辞)
1. [十大机构看后市：A股或迎反攻行情](https://so.toutiao.com/search?keyword=十大机构看后市：A股或迎反攻行情)
1. [刀郎线上演唱会开播1小时观看近千万](https://so.toutiao.com/search?keyword=刀郎线上演唱会开播1小时观看近千万)
1. [乌克兰每天战争支出1.9亿美元](https://so.toutiao.com/search?keyword=乌克兰每天战争支出1.9亿美元)
1. [China GT受伤车手感谢救人车手](https://so.toutiao.com/search?keyword=China%20GT受伤车手感谢救人车手)
1. [巴西女子同时接受6项整容手术后死亡](https://so.toutiao.com/search?keyword=巴西女子同时接受6项整容手术后死亡)
1. [用户为什么不愿意打开电视了](https://so.toutiao.com/search?keyword=用户为什么不愿意打开电视了)
1. [超强厄尔尼诺要来了吗](https://so.toutiao.com/search?keyword=超强厄尔尼诺要来了吗)
1. [泰国先算了一笔中国游客长假账](https://so.toutiao.com/search?keyword=泰国先算了一笔中国游客长假账)
1. [如何看待AI三巨头喊“减速”](https://so.toutiao.com/search?keyword=如何看待AI三巨头喊“减速”)
1. [小车从高架桥坠下 众人抬车救人](https://so.toutiao.com/search?keyword=小车从高架桥坠下%20众人抬车救人)
1. [广西大学甘蔗与制糖产业学院建设成效](https://so.toutiao.com/search?keyword=广西大学甘蔗与制糖产业学院建设成效)
1. [记者和拳击选手同台比胳膊](https://so.toutiao.com/search?keyword=记者和拳击选手同台比胳膊)
1. [华为Mate 90价格爆料](https://so.toutiao.com/search?keyword=华为Mate%2090价格爆料)
1. [起床后做这3个动作测测身体健康度](https://so.toutiao.com/search?keyword=起床后做这3个动作测测身体健康度)
1. [00后创业“做水”被农夫山泉索赔15万](https://so.toutiao.com/search?keyword=00后创业“做水”被农夫山泉索赔15万)
1. [曝比亚迪再购10艘LNG动力汽车运输船](https://so.toutiao.com/search?keyword=曝比亚迪再购10艘LNG动力汽车运输船)
1. [女生在飞机上看到震撼的大国基建](https://so.toutiao.com/search?keyword=女生在飞机上看到震撼的大国基建)
1. [这个暑期旅游还有哪些新趋势](https://so.toutiao.com/search?keyword=这个暑期旅游还有哪些新趋势)
1. [河北医大二院收贿46次涉1.84亿](https://so.toutiao.com/search?keyword=河北医大二院收贿46次涉1.84亿)
1. [美国车评界被中国新能源车震撼](https://so.toutiao.com/search?keyword=美国车评界被中国新能源车震撼)
1. [六小龄童堂兄小七龄童去世](https://so.toutiao.com/search?keyword=六小龄童堂兄小七龄童去世)
1. [印尼一艘载有243人的客轮失联](https://so.toutiao.com/search?keyword=印尼一艘载有243人的客轮失联)
1. [脑出血急救记住这几步](https://so.toutiao.com/search?keyword=脑出血急救记住这几步)
1. [李美珍夺哈尔滨女子半马冠军](https://so.toutiao.com/search?keyword=李美珍夺哈尔滨女子半马冠军)
1. [73岁赵雅芝首度登临高定秀场](https://so.toutiao.com/search?keyword=73岁赵雅芝首度登临高定秀场)
1. [莱巴金娜夺冠 “硬地女王”易主了吗](https://so.toutiao.com/search?keyword=莱巴金娜夺冠%20“硬地女王”易主了吗)
1. [菲查明5000名假菲籍 称多数是中国人](https://so.toutiao.com/search?keyword=菲查明5000名假菲籍%20称多数是中国人)
1. [大衣哥坦言羡慕有文化的年轻人](https://so.toutiao.com/search?keyword=大衣哥坦言羡慕有文化的年轻人)
1. [重庆53岁女子走失46年后终归家](https://so.toutiao.com/search?keyword=重庆53岁女子走失46年后终归家)
1. [博主：丁俊晖不欠中国斯诺克什么](https://so.toutiao.com/search?keyword=博主：丁俊晖不欠中国斯诺克什么)
1. [媒体评2个月上门检查15次逼停烧烤店](https://so.toutiao.com/search?keyword=媒体评2个月上门检查15次逼停烧烤店)
1. [傅园慧喜提“五折叠”笑得停不下来](https://so.toutiao.com/search?keyword=傅园慧喜提“五折叠”笑得停不下来)
1. [李胜峰：和平统一是台湾最后一条路](https://so.toutiao.com/search?keyword=李胜峰：和平统一是台湾最后一条路)
1. [官方通报水库冒黄泥浆](https://so.toutiao.com/search?keyword=官方通报水库冒黄泥浆)
1. [生双胞胎到底靠基因还是靠运气](https://so.toutiao.com/search?keyword=生双胞胎到底靠基因还是靠运气)
1. [刘畊宏自曝参加披哥掉粉近40万](https://so.toutiao.com/search?keyword=刘畊宏自曝参加披哥掉粉近40万)
1. [男生去年考上北大放弃今年又进北大](https://so.toutiao.com/search?keyword=男生去年考上北大放弃今年又进北大)
1. [也门政府军为何如此“溃败”](https://so.toutiao.com/search?keyword=也门政府军为何如此“溃败”)
1. [如何看孙心然夺美网青少年女单冠军](https://so.toutiao.com/search?keyword=如何看孙心然夺美网青少年女单冠军)
1. [赵雷当爸爸了](https://so.toutiao.com/search?keyword=赵雷当爸爸了)
1. [伊朗遭袭伤者：美国导弹改变我的人生](https://so.toutiao.com/search?keyword=伊朗遭袭伤者：美国导弹改变我的人生)
1. [警方通报公职人员醉驾致一对夫妻身亡](https://so.toutiao.com/search?keyword=警方通报公职人员醉驾致一对夫妻身亡)
1. [“本升专”为何成了新选择](https://so.toutiao.com/search?keyword=“本升专”为何成了新选择)
1. [刀郎：没有什么所谓的刀家班](https://so.toutiao.com/search?keyword=刀郎：没有什么所谓的刀家班)
1. [大V：美元要连闯三关](https://so.toutiao.com/search?keyword=大V：美元要连闯三关)
1. [印度称对台湾问题政策立场没有改变](https://so.toutiao.com/search?keyword=印度称对台湾问题政策立场没有改变)
1. [平陆运河到底有多牛](https://so.toutiao.com/search?keyword=平陆运河到底有多牛)
1. [电视为何卖不动了](https://so.toutiao.com/search?keyword=电视为何卖不动了)
1. [侯悦任中国驻意大利兼驻圣马力诺大使](https://so.toutiao.com/search?keyword=侯悦任中国驻意大利兼驻圣马力诺大使)
1. [石齐平：中美科技比拼的过去现在未来](https://so.toutiao.com/search?keyword=石齐平：中美科技比拼的过去现在未来)
1. [WTT澳门冠军赛男单四强出炉](https://so.toutiao.com/search?keyword=WTT澳门冠军赛男单四强出炉)
1. [iPhone 18 Pro系列开售秒售罄](https://so.toutiao.com/search?keyword=iPhone%2018%20Pro系列开售秒售罄)
1. [小米澎程迎来上海首批车主](https://so.toutiao.com/search?keyword=小米澎程迎来上海首批车主)
1. [“明太鱼啦啦队”现身东北超](https://so.toutiao.com/search?keyword=“明太鱼啦啦队”现身东北超)
1. [黎巴嫩总统：不会与以进行新谈判](https://so.toutiao.com/search?keyword=黎巴嫩总统：不会与以进行新谈判)
1. [乌鲁木齐马拉松女子半马冠军产生](https://so.toutiao.com/search?keyword=乌鲁木齐马拉松女子半马冠军产生)
1. [被特朗普连续“点名”台当局相当紧张](https://so.toutiao.com/search?keyword=被特朗普连续“点名”台当局相当紧张)
1. [美总统希望北爱与爱尔兰统一引英不满](https://so.toutiao.com/search?keyword=美总统希望北爱与爱尔兰统一引英不满)
1. [外资眼中的A股“黄金坑”在哪](https://so.toutiao.com/search?keyword=外资眼中的A股“黄金坑”在哪)
1. [泽连斯基：不确定乌能否加入北约](https://so.toutiao.com/search?keyword=泽连斯基：不确定乌能否加入北约)
1. [莎拉波娃为莱巴金娜颁奖](https://so.toutiao.com/search?keyword=莎拉波娃为莱巴金娜颁奖)
1. [中国将于2027年接任金砖主席国](https://so.toutiao.com/search?keyword=中国将于2027年接任金砖主席国)
1. [看懂中国贸易出海新模式](https://so.toutiao.com/search?keyword=看懂中国贸易出海新模式)
1. [一支拖鞋军正在改写中东格局](https://so.toutiao.com/search?keyword=一支拖鞋军正在改写中东格局)
1. [四川卫视将重播《山歌万里》音乐会](https://so.toutiao.com/search?keyword=四川卫视将重播《山歌万里》音乐会)
1. [莫迪会见普京称愿支持俄乌和平努力](https://so.toutiao.com/search?keyword=莫迪会见普京称愿支持俄乌和平努力)
1. [外卖员往饮料里加百草枯？假的](https://so.toutiao.com/search?keyword=外卖员往饮料里加百草枯？假的)
1. [女选手大便失禁完赛HYROX引争议](https://so.toutiao.com/search?keyword=女选手大便失禁完赛HYROX引争议)
1. [赵雷演唱会上惊喜宣布当爸爸了](https://so.toutiao.com/search?keyword=赵雷演唱会上惊喜宣布当爸爸了)
1. [雷军为首批小米澎程车主开车门](https://so.toutiao.com/search?keyword=雷军为首批小米澎程车主开车门)
1. [双胞胎姐妹同校同专业还选了同寝室](https://so.toutiao.com/search?keyword=双胞胎姐妹同校同专业还选了同寝室)
1. [沙特两次请求 美仍拒绝出手打击胡塞](https://so.toutiao.com/search?keyword=沙特两次请求%20美仍拒绝出手打击胡塞)
1. [罗纳尔多现场观看美网女单决赛](https://so.toutiao.com/search?keyword=罗纳尔多现场观看美网女单决赛)
1. [大衣哥称助农直播给钱都不要](https://so.toutiao.com/search?keyword=大衣哥称助农直播给钱都不要)
1. [莱巴金娜2-1萨巴伦卡首夺美网冠军](https://so.toutiao.com/search?keyword=莱巴金娜2-1萨巴伦卡首夺美网冠军)
1. [评论员：亚运会中国男篮迎最好时机](https://so.toutiao.com/search?keyword=评论员：亚运会中国男篮迎最好时机)
1. [下雨天也挡不住哈马跑友热情](https://so.toutiao.com/search?keyword=下雨天也挡不住哈马跑友热情)
1. [萨巴伦卡输球气到摔拍](https://so.toutiao.com/search?keyword=萨巴伦卡输球气到摔拍)
1. [宋佳那英同台合唱《梦醒了》](https://so.toutiao.com/search?keyword=宋佳那英同台合唱《梦醒了》)
1. [女篮世界杯法国队86-64胜德国队](https://so.toutiao.com/search?keyword=女篮世界杯法国队86-64胜德国队)
1. [16岁孙心然夺美网青少年女单冠军](https://so.toutiao.com/search?keyword=16岁孙心然夺美网青少年女单冠军)
1. [孟子义建模脸出片好轻松](https://so.toutiao.com/search?keyword=孟子义建模脸出片好轻松)
1. [郑丽文直言岛内存在“绿色恐怖”](https://so.toutiao.com/search?keyword=郑丽文直言岛内存在“绿色恐怖”)
1. [《魔兽世界：永恒》11月4日上线](https://so.toutiao.com/search?keyword=《魔兽世界：永恒》11月4日上线)
1. [韩国女星蔡琳否认因语言不通离婚](https://so.toutiao.com/search?keyword=韩国女星蔡琳否认因语言不通离婚)
1. [苏超排名“大换血” 南通跃升至第二](https://so.toutiao.com/search?keyword=苏超排名“大换血”%20南通跃升至第二)
1. [3个方法把阳气“养”回来](https://so.toutiao.com/search?keyword=3个方法把阳气“养”回来)
1. [严子怡获世界田径终极冠军赛亚军](https://so.toutiao.com/search?keyword=严子怡获世界田径终极冠军赛亚军)
1. [丁俊晖无缘斯诺克英格兰公开赛决赛](https://so.toutiao.com/search?keyword=丁俊晖无缘斯诺克英格兰公开赛决赛)
1. [多国友人感受中式婚俗魅力](https://so.toutiao.com/search?keyword=多国友人感受中式婚俗魅力)
1. [乌鲁木齐马拉松42.195公里变歌舞长廊](https://so.toutiao.com/search?keyword=乌鲁木齐马拉松42.195公里变歌舞长廊)
1. [熊茂平卸任大连市委书记职务](https://so.toutiao.com/search?keyword=熊茂平卸任大连市委书记职务)
1. [特努斯谈苹果折叠屏手机](https://so.toutiao.com/search?keyword=特努斯谈苹果折叠屏手机)
1. [“大金砖”合作有哪些变与不变](https://so.toutiao.com/search?keyword=“大金砖”合作有哪些变与不变)
1. [王俊杰谈胜巴林：通过这场球找状态](https://so.toutiao.com/search?keyword=王俊杰谈胜巴林：通过这场球找状态)
1. [硕士因第一学历是专科被大厂拒之门外](https://so.toutiao.com/search?keyword=硕士因第一学历是专科被大厂拒之门外)
1. [84岁老人独自来店为自己挑选寿衣](https://so.toutiao.com/search?keyword=84岁老人独自来店为自己挑选寿衣)
1. [博主：F1太需要中国了](https://so.toutiao.com/search?keyword=博主：F1太需要中国了)
1. [男生去年考上北大放弃今年又考进北大](https://so.toutiao.com/search?keyword=男生去年考上北大放弃今年又考进北大)
1. [超级厄尔尼诺来袭中国将面临什么](https://so.toutiao.com/search?keyword=超级厄尔尼诺来袭中国将面临什么)
1. [郭有才又回到了菏泽南站](https://so.toutiao.com/search?keyword=郭有才又回到了菏泽南站)
1. [被罚了51.79亿的携程为何还在杀熟](https://so.toutiao.com/search?keyword=被罚了51.79亿的携程为何还在杀熟)
1. [多地小学改为养老院](https://so.toutiao.com/search?keyword=多地小学改为养老院)
1. [年轻人血管为什么会开始堵了](https://so.toutiao.com/search?keyword=年轻人血管为什么会开始堵了)
1. [女性观众为什么爱看“追妻火葬场”](https://so.toutiao.com/search?keyword=女性观众为什么爱看“追妻火葬场”)
1. [北大硕士因本科非北大年薪被降5万](https://so.toutiao.com/search?keyword=北大硕士因本科非北大年薪被降5万)
1. [前TVB女星钟丽淇被曝急送ICU](https://so.toutiao.com/search?keyword=前TVB女星钟丽淇被曝急送ICU)
1. [日本旅游业承受签证费暴涨代价](https://so.toutiao.com/search?keyword=日本旅游业承受签证费暴涨代价)
1. [那英南京演唱会新编《山沟沟》](https://so.toutiao.com/search?keyword=那英南京演唱会新编《山沟沟》)
1. [特朗普7400万美元广告砸向关键选区](https://so.toutiao.com/search?keyword=特朗普7400万美元广告砸向关键选区)
1. [支付宝回应1.8元可伪造上亿转账截图](https://so.toutiao.com/search?keyword=支付宝回应1.8元可伪造上亿转账截图)
1. [俄方不排除普京和特朗普在中国会晤](https://so.toutiao.com/search?keyword=俄方不排除普京和特朗普在中国会晤)
1. [女子散步被蝙蝠撞脸紧急就医](https://so.toutiao.com/search?keyword=女子散步被蝙蝠撞脸紧急就医)
1. [下周上班时间有变](https://so.toutiao.com/search?keyword=下周上班时间有变)
1. [冉莹颖回应债还清后是否离婚](https://so.toutiao.com/search?keyword=冉莹颖回应债还清后是否离婚)
1. [试驾小米澎程意外驶出车道用户已锁单](https://so.toutiao.com/search?keyword=试驾小米澎程意外驶出车道用户已锁单)
1. [张雪被问带薪休假爽不：我是发钱那个](https://so.toutiao.com/search?keyword=张雪被问带薪休假爽不：我是发钱那个)
1. [吴沚默自曝在横店拍短剧遭遇潜规则](https://so.toutiao.com/search?keyword=吴沚默自曝在横店拍短剧遭遇潜规则)
1. [iPhone Duo炒到9万 黄牛贷款百万囤货](https://so.toutiao.com/search?keyword=iPhone%20Duo炒到9万%20黄牛贷款百万囤货)
1. [市委原书记化债不力被通报](https://so.toutiao.com/search?keyword=市委原书记化债不力被通报)
1. [中东局势骤变 全球经济承压](https://so.toutiao.com/search?keyword=中东局势骤变%20全球经济承压)
1. [下周会是黄金分水岭吗](https://so.toutiao.com/search?keyword=下周会是黄金分水岭吗)
1. [泡面怎么成了年轻人深夜“顶配大餐”](https://so.toutiao.com/search?keyword=泡面怎么成了年轻人深夜“顶配大餐”)
1. [伊拉克关闭与伊朗边境口岸有何考量](https://so.toutiao.com/search?keyword=伊拉克关闭与伊朗边境口岸有何考量)
1. [杨幂玩梗说自己45岁](https://so.toutiao.com/search?keyword=杨幂玩梗说自己45岁)
1. [房东催租反给租户转账2万](https://so.toutiao.com/search?keyword=房东催租反给租户转账2万)
1. [台人士：越来越多台青乐于走进大陆](https://so.toutiao.com/search?keyword=台人士：越来越多台青乐于走进大陆)
1. [人民日报：化债绝非数字游戏](https://so.toutiao.com/search?keyword=人民日报：化债绝非数字游戏)
1. [iPhone折叠屏为何命名为Duo](https://so.toutiao.com/search?keyword=iPhone折叠屏为何命名为Duo)
1. [学者：“台独”分子私利至上甘当棋子](https://so.toutiao.com/search?keyword=学者：“台独”分子私利至上甘当棋子)
1. [胖东来两款网红月饼改线上购买](https://so.toutiao.com/search?keyword=胖东来两款网红月饼改线上购买)
1. [无锡市长蒋锋拟任设区市委书记](https://so.toutiao.com/search?keyword=无锡市长蒋锋拟任设区市委书记)
1. [李大霄：美联储加息的压力正在逼近](https://so.toutiao.com/search?keyword=李大霄：美联储加息的压力正在逼近)
1. [宁波大学暴雨典礼为何戳中人心](https://so.toutiao.com/search?keyword=宁波大学暴雨典礼为何戳中人心)
1. [中国男篮提前晋级亚运会八强](https://so.toutiao.com/search?keyword=中国男篮提前晋级亚运会八强)
1. [张本美和4-1战胜斯佐科斯晋级四强](https://so.toutiao.com/search?keyword=张本美和4-1战胜斯佐科斯晋级四强)
1. [雄安国际算力一体化调度中心上线运行](https://so.toutiao.com/search?keyword=雄安国际算力一体化调度中心上线运行)
1. [金砖峰会为中印关系带来哪些机遇](https://so.toutiao.com/search?keyword=金砖峰会为中印关系带来哪些机遇)
1. [马珊珊任沈阳市委副书记](https://so.toutiao.com/search?keyword=马珊珊任沈阳市委副书记)
1. [日本外交为何接连碰壁](https://so.toutiao.com/search?keyword=日本外交为何接连碰壁)
1. [15人合买彩票中3000万港元起纠纷](https://so.toutiao.com/search?keyword=15人合买彩票中3000万港元起纠纷)
1. [刘銮雄与弟弟罕同场看谭咏麟演唱会](https://so.toutiao.com/search?keyword=刘銮雄与弟弟罕同场看谭咏麟演唱会)
1. [AI安全研究者掀起“末日概率”讨论](https://so.toutiao.com/search?keyword=AI安全研究者掀起“末日概率”讨论)
1. [欧洲网友锐评让日本右翼破防](https://so.toutiao.com/search?keyword=欧洲网友锐评让日本右翼破防)
1. [AI真正的进化史](https://so.toutiao.com/search?keyword=AI真正的进化史)
1. [赵雷演唱会专列上歌迷自发大合唱](https://so.toutiao.com/search?keyword=赵雷演唱会专列上歌迷自发大合唱)
1. [记者直击金砖峰会媒体中心](https://so.toutiao.com/search?keyword=记者直击金砖峰会媒体中心)
1. [陈幸同晋级WTT澳门冠军赛女单4强](https://so.toutiao.com/search?keyword=陈幸同晋级WTT澳门冠军赛女单4强)
1. [戴羽彤亮相宿迁奥体助阵苏超](https://so.toutiao.com/search?keyword=戴羽彤亮相宿迁奥体助阵苏超)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Mon Sep 14 2026 00:13:15 GMT+0800 (China Standard Time) -->

1. [多车队宣布永久退出中国 GT](https://www.zhihu.com/search?q=%E5%A4%9A%E8%BD%A6%E9%98%9F%E5%AE%A3%E5%B8%83%E6%B0%B8%E4%B9%85%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%20GT)
1. [邓煜等菲奖得主称 AI 公司正摧毁数学](https://www.zhihu.com/search?q=%E9%82%93%E7%85%9C%E7%AD%89%E8%8F%B2%E5%A5%96%E5%BE%97%E4%B8%BB%E7%A7%B0%20AI%20%E5%85%AC%E5%8F%B8%E6%AD%A3%E6%91%A7%E6%AF%81%E6%95%B0%E5%AD%A6)
1. [女子称被公职人员推入厕所强奸](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%A2%AB%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E6%8E%A8%E5%85%A5%E5%8E%95%E6%89%80%E5%BC%BA%E5%A5%B8)
1. [美情报机构称中国6家AI公司涉嫌「蒸馏」](https://www.zhihu.com/search?q=%E7%BE%8E%E6%83%85%E6%8A%A5%E6%9C%BA%E6%9E%84%E7%A7%B0%E4%B8%AD%E5%9B%BD6%E5%AE%B6AI%E5%85%AC%E5%8F%B8%E6%B6%89%E5%AB%8C%E3%80%8C%E8%92%B8%E9%A6%8F%E3%80%8D)
1. [知乎 CLI 创作者能力上新](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%20CLI%20%E5%88%9B%E4%BD%9C%E8%80%85%E8%83%BD%E5%8A%9B%E4%B8%8A%E6%96%B0)
1. [三星嘲讽苹果iPhoneDuo](https://www.zhihu.com/search?q=%E4%B8%89%E6%98%9F%E5%98%B2%E8%AE%BD%E8%8B%B9%E6%9E%9CiPhoneDuo)
1. [星宇股份产业园被曝九成是临时工](https://www.zhihu.com/search?q=%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E4%BA%A7%E4%B8%9A%E5%9B%AD%E8%A2%AB%E6%9B%9D%E4%B9%9D%E6%88%90%E6%98%AF%E4%B8%B4%E6%97%B6%E5%B7%A5)
1. [勇哥维护让员工干17个小时的老板](https://www.zhihu.com/search?q=%E5%8B%87%E5%93%A5%E7%BB%B4%E6%8A%A4%E8%AE%A9%E5%91%98%E5%B7%A5%E5%B9%B217%E4%B8%AA%E5%B0%8F%E6%97%B6%E7%9A%84%E8%80%81%E6%9D%BF)
1. [胖东来员工四年学员制](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E5%91%98%E5%B7%A5%E5%9B%9B%E5%B9%B4%E5%AD%A6%E5%91%98%E5%88%B6)
1. [HYROX选手失禁仍完赛](https://www.zhihu.com/search?q=HYROX%E9%80%89%E6%89%8B%E5%A4%B1%E7%A6%81%E4%BB%8D%E5%AE%8C%E8%B5%9B)
1. [住建局副局长群内辱骂业主被停职](https://www.zhihu.com/search?q=%E4%BD%8F%E5%BB%BA%E5%B1%80%E5%89%AF%E5%B1%80%E9%95%BF%E7%BE%A4%E5%86%85%E8%BE%B1%E9%AA%82%E4%B8%9A%E4%B8%BB%E8%A2%AB%E5%81%9C%E8%81%8C)
1. [菏泽古沉船元青花疑遭内盗](https://www.zhihu.com/search?q=%E8%8F%8F%E6%B3%BD%E5%8F%A4%E6%B2%89%E8%88%B9%E5%85%83%E9%9D%92%E8%8A%B1%E7%96%91%E9%81%AD%E5%86%85%E7%9B%97)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Sep 14 2026 00:19:54 GMT+0800 (China Standard Time) -->

1. [如何看待于东来发文称胖东来再招员工都是学员性质，合同四年，不续签？意味着什么？](https://www.zhihu.com/question/2082478357984421600)
1. [罗永浩称野人先生冰激凌很一般，野人先生该如何回应这场突发舆情？](https://www.zhihu.com/question/2082497943508973000)
1. [LPL 2026 赛季季后赛总决赛 AL 3:1 击败 BLG 夺得总冠军，如何评价这场比赛？](https://www.zhihu.com/question/2082449921253303600)
1. [清朝人口为何从1400万迅速长到4亿？呈现爆发式增长，是何原因？](https://www.zhihu.com/question/528355615)
1. [河北医大二院工作人员先后收受贿赂46次，累计涉案1.84亿元，超30家药企长期行贿，哪些环节出了问题？](https://www.zhihu.com/question/2082440100701548800)
1. [HYROX 北京站比赛选手失禁仍完成比赛，比赛规则和卫生安全引争议，如何看待此事？](https://www.zhihu.com/question/2082250121257997300)
1. [浙江太乙圣莲拟 30 亿元入主哪吒汽车，将如何影响其未来战略布局？](https://www.zhihu.com/question/2081827882993824000)
1. [男生去年考上北大医学部放弃，2026 年又考进北大图灵班，做到这点有多难？怎样看待他的选择？](https://www.zhihu.com/question/2082370923865420800)
1. [如何评价魔兽争霸3新出的酒馆英雄“被遗忘者圣骑士”？](https://www.zhihu.com/question/2082386280025941800)
1. [如何看待苹果宣布app可以直接获取iPhone Duo铰链开合角度？将此应用于开屏广告的前景如何？](https://www.zhihu.com/question/2081661494270415400)
1. [宁波大学开学典礼突降暴雨，校长仅讲 3 句话为何会走红网络？引发了大家怎样的共鸣？](https://www.zhihu.com/question/2082012177599305000)
1. [16 岁中国小将孙心然夺得美网青少年组女单冠军，怎样评价她的表现？她未来的潜力如何？](https://www.zhihu.com/question/2082373635344266200)
1. [如何看待《崩坏：星穹铁道》翁法罗斯剧情号称整部游戏的大纲这一观点？](https://www.zhihu.com/question/2081534904131663400)
1. [《狂飙》中的老默是咋死的？](https://www.zhihu.com/question/580531991)
1. [为什么酒店标间两张床的价格反而会低于一张床的大床房的价格，这背后的定价逻辑是什么？](https://www.zhihu.com/question/663413512)
1. [预感将被裁员且能力不足，该主动辞职吗？](https://www.zhihu.com/question/2081988407358767900)
1. [2026 年 WTT 澳门冠军赛，中国选手陈熠 3-4 日本选手张本美和，如何评价这场比赛？](https://www.zhihu.com/question/2082540197502088200)
1. [勇哥餐饮事件，博主线下调查发现火锅店实为两班倒，并非员工单人工作17小时，这一调查结果能否平息争议？](https://www.zhihu.com/question/2081927215936189200)
1. [你喜欢自己做早餐还是外面买现成的?](https://www.zhihu.com/question/1908766509767058000)
1. [如何看待罗永浩称野人先生冰激凌很一般，比钟薛高难吃？他的评价会对品牌产生影响吗？](https://www.zhihu.com/question/2082470366912561700)
1. [网友爆料付航脱口秀1300张门票有一千张黄牛票，检票时强实名导致80%观众进不了，反映了哪些市场乱象？](https://www.zhihu.com/question/2082137769556628200)
1. [iPhone 18 Pro 新品发售，拼多多百亿补贴直降 1000 元，你会在拼多多买吗？](https://www.zhihu.com/question/2082400824102229800)
1. [iPhone18Pro系列全球售价对比，256G国行9999元，美国仅8000元，为什么有这么大差别？](https://www.zhihu.com/question/2081416860436898600)
1. [职场上为什么有能力的人爬不上去？](https://www.zhihu.com/question/2058854687621882600)
1. [职场里最消耗人的不是加班，而是哪些看不见的 “隐性内耗”？](https://www.zhihu.com/question/2051325415319516400)
1. [在职场中，工作态度和业务能力哪个对职业发展影响更大？](https://www.zhihu.com/question/2069702777467671600)
1. [2026 WTT 澳门冠军赛男单半决赛，莫雷加德 4-3 绝杀张本智和，如何评价这场比赛？](https://www.zhihu.com/question/2082474944718444000)
1. [2627赛季英超联赛英超第4轮利物浦 0:0 富勒姆，如何评价这场比赛？](https://www.zhihu.com/question/2082227310040826000)
1. [想和孩子发火时，如何能快速控制好自己的情绪，减少负面情绪输出？](https://www.zhihu.com/question/5359599763)
1. [武林外传里佟石头和无双互相有好感，佟湘玉阻止的真正目的是什么？](https://www.zhihu.com/question/330508597)

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
<!-- 最后更新时间 Mon Sep 14 2026 00:28:03 GMT+0800 (China Standard Time) -->

1. [习近平圆满结束出席金砖国家领导人第十八次会晤](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%9C%86%E6%BB%A1%E7%BB%93%E6%9D%9F%E5%87%BA%E5%B8%AD%E9%87%91%E7%A0%96%E5%9B%BD%E5%AE%B6%E9%A2%86%E5%AF%BC%E4%BA%BA%E7%AC%AC%E5%8D%81%E5%85%AB%E6%AC%A1%E4%BC%9A%E6%99%A4%23&Refer=new_time)
1. [Bin回应AL夺冠](https://s.weibo.com//weibo?q=%23Bin%E5%9B%9E%E5%BA%94AL%E5%A4%BA%E5%86%A0%23&t=31&band_rank=1&Refer=top)
1. [AL夺冠](https://s.weibo.com//weibo?q=AL%E5%A4%BA%E5%86%A0&t=31&band_rank=2&Refer=top)
1. [寻找金砖温度的答案](https://s.weibo.com//weibo?q=%23%E5%AF%BB%E6%89%BE%E9%87%91%E7%A0%96%E6%B8%A9%E5%BA%A6%E7%9A%84%E7%AD%94%E6%A1%88%23&t=31&band_rank=3&Refer=top)
1. [王曼昱登顶世界第一](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80&t=31&band_rank=4&Refer=top)
1. [白桃星座一周运势](https://s.weibo.com//weibo?q=%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF&t=31&band_rank=5&Refer=top)
1. [下周上5休1再上1](https://s.weibo.com//weibo?q=%23%E4%B8%8B%E5%91%A8%E4%B8%8A5%E4%BC%911%E5%86%8D%E4%B8%8A1%23&t=31&band_rank=6&Refer=top)
1. [井柏然孙千偷偷牵手](https://s.weibo.com//weibo?q=%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E5%81%B7%E5%81%B7%E7%89%B5%E6%89%8B&t=31&band_rank=7&Refer=top)
1. [大学生生活费才3000](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%9F%E6%B4%BB%E8%B4%B9%E6%89%8D3000%23&t=31&band_rank=8&Refer=top)
1. [女子拍下骇人巨型蜗牛引热议](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%8D%E4%B8%8B%E9%AA%87%E4%BA%BA%E5%B7%A8%E5%9E%8B%E8%9C%97%E7%89%9B%E5%BC%95%E7%83%AD%E8%AE%AE%23&t=31&band_rank=9&Refer=top)
1. [赵雷鸟巢演唱会](https://s.weibo.com//weibo?q=%E8%B5%B5%E9%9B%B7%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A&t=31&band_rank=10&Refer=top)
1. [彭小苒直播穿的衣服](https://s.weibo.com//weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E7%9B%B4%E6%92%AD%E7%A9%BF%E7%9A%84%E8%A1%A3%E6%9C%8D%23&t=31&band_rank=11&Refer=top)
1. [上海多个班级通知全班居家隔离](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%9A%E4%B8%AA%E7%8F%AD%E7%BA%A7%E9%80%9A%E7%9F%A5%E5%85%A8%E7%8F%AD%E5%B1%85%E5%AE%B6%E9%9A%94%E7%A6%BB%23&t=31&band_rank=12&Refer=top)
1. [情侣在演唱会求婚遭后排喊坐下](https://s.weibo.com//weibo?q=%23%E6%83%85%E4%BE%A3%E5%9C%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B1%82%E5%A9%9A%E9%81%AD%E5%90%8E%E6%8E%92%E5%96%8A%E5%9D%90%E4%B8%8B%23&t=31&band_rank=13&Refer=top)
1. [郑恺苗苗在加拿大租了一个月房子](https://s.weibo.com//weibo?q=%23%E9%83%91%E6%81%BA%E8%8B%97%E8%8B%97%E5%9C%A8%E5%8A%A0%E6%8B%BF%E5%A4%A7%E7%A7%9F%E4%BA%86%E4%B8%80%E4%B8%AA%E6%9C%88%E6%88%BF%E5%AD%90%23&t=31&band_rank=14&Refer=top)
1. [被举报116次的烧烤店被责令整改](https://s.weibo.com//weibo?q=%23%E8%A2%AB%E4%B8%BE%E6%8A%A5116%E6%AC%A1%E7%9A%84%E7%83%A7%E7%83%A4%E5%BA%97%E8%A2%AB%E8%B4%A3%E4%BB%A4%E6%95%B4%E6%94%B9%23&t=31&band_rank=15&Refer=top)
1. [8年前的孙千](https://s.weibo.com//weibo?q=%238%E5%B9%B4%E5%89%8D%E7%9A%84%E5%AD%99%E5%8D%83%23&t=31&band_rank=16&Refer=top)
1. [野人先生回应罗永浩说难吃](https://s.weibo.com//weibo?q=%23%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E5%9B%9E%E5%BA%94%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E9%9A%BE%E5%90%83%23&t=31&band_rank=17&Refer=top)
1. [日本亏本也要卖给中国图什么](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%8F%E6%9C%AC%E4%B9%9F%E8%A6%81%E5%8D%96%E7%BB%99%E4%B8%AD%E5%9B%BD%E5%9B%BE%E4%BB%80%E4%B9%88%23&t=31&band_rank=18&Refer=top)
1. [张真源编辑记录](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E7%BC%96%E8%BE%91%E8%AE%B0%E5%BD%95%23&t=31&band_rank=19&Refer=top)
1. [连井柏然都有些不知所措了](https://s.weibo.com//weibo?q=%23%E8%BF%9E%E4%BA%95%E6%9F%8F%E7%84%B6%E9%83%BD%E6%9C%89%E4%BA%9B%E4%B8%8D%E7%9F%A5%E6%89%80%E6%8E%AA%E4%BA%86%23&t=31&band_rank=20&Refer=top)
1. [网友爆国内某日本药企在918开年会](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E7%88%86%E5%9B%BD%E5%86%85%E6%9F%90%E6%97%A5%E6%9C%AC%E8%8D%AF%E4%BC%81%E5%9C%A8918%E5%BC%80%E5%B9%B4%E4%BC%9A&t=31&band_rank=21&Refer=top)
1. [国乒女单冠军赛颗粒无收](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%E8%B5%9B%E9%A2%97%E7%B2%92%E6%97%A0%E6%94%B6&t=31&band_rank=22&Refer=top)
1. [服贸会十四年成绩单](https://s.weibo.com//weibo?q=%23%E6%9C%8D%E8%B4%B8%E4%BC%9A%E5%8D%81%E5%9B%9B%E5%B9%B4%E6%88%90%E7%BB%A9%E5%8D%95%23&t=31&band_rank=23&Refer=top)
1. [优酷招商大剧片单](https://s.weibo.com//weibo?q=%23%E4%BC%98%E9%85%B7%E6%8B%9B%E5%95%86%E5%A4%A7%E5%89%A7%E7%89%87%E5%8D%95%23&t=31&band_rank=24&Refer=top)
1. [北方 隐翅虫](https://s.weibo.com//weibo?q=%E5%8C%97%E6%96%B9%20%E9%9A%90%E7%BF%85%E8%99%AB&t=31&band_rank=25&Refer=top)
1. [谭松韵演技](https://s.weibo.com//weibo?q=%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%BC%94%E6%8A%80&t=31&band_rank=26&Refer=top)
1. [王橹杰在重追小马宝莉](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%9C%A8%E9%87%8D%E8%BF%BD%E5%B0%8F%E9%A9%AC%E5%AE%9D%E8%8E%89%23&t=31&band_rank=27&Refer=top)
1. [中微公司82岁董事长套现5300万](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%BE%AE%E5%85%AC%E5%8F%B882%E5%B2%81%E8%91%A3%E4%BA%8B%E9%95%BF%E5%A5%97%E7%8E%B05300%E4%B8%87%23&t=31&band_rank=28&Refer=top)
1. [女儿房间怪味难消爸爸挪开柜子看傻](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%84%BF%E6%88%BF%E9%97%B4%E6%80%AA%E5%91%B3%E9%9A%BE%E6%B6%88%E7%88%B8%E7%88%B8%E6%8C%AA%E5%BC%80%E6%9F%9C%E5%AD%90%E7%9C%8B%E5%82%BB%23&t=31&band_rank=29&Refer=top)
1. [安东内利夺马德里站冠军](https://s.weibo.com//weibo?q=%23%E5%AE%89%E4%B8%9C%E5%86%85%E5%88%A9%E5%A4%BA%E9%A9%AC%E5%BE%B7%E9%87%8C%E7%AB%99%E5%86%A0%E5%86%9B%23&t=31&band_rank=30&Refer=top)
1. [三大AI巨头联手呼吁放缓开发步伐](https://s.weibo.com//weibo?q=%23%E4%B8%89%E5%A4%A7AI%E5%B7%A8%E5%A4%B4%E8%81%94%E6%89%8B%E5%91%BC%E5%90%81%E6%94%BE%E7%BC%93%E5%BC%80%E5%8F%91%E6%AD%A5%E4%BC%90%23&t=31&band_rank=31&Refer=top)
1. [爱笑回应AL夺冠](https://s.weibo.com//weibo?q=%23%E7%88%B1%E7%AC%91%E5%9B%9E%E5%BA%94AL%E5%A4%BA%E5%86%A0%23&t=31&band_rank=32&Refer=top)
1. [海底捞最伟大的吃法出现了](https://s.weibo.com//weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%90%83%E6%B3%95%E5%87%BA%E7%8E%B0%E4%BA%86%23&t=31&band_rank=33&Refer=top)
1. [情久重返KPL](https://s.weibo.com//weibo?q=%23%E6%83%85%E4%B9%85%E9%87%8D%E8%BF%94KPL%23&t=31&band_rank=34&Refer=top)
1. [张本美和冠军](https://s.weibo.com//weibo?q=%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E5%86%A0%E5%86%9B&t=31&band_rank=35&Refer=top)
1. [乐高拼的王一博](https://s.weibo.com//weibo?q=%23%E4%B9%90%E9%AB%98%E6%8B%BC%E7%9A%84%E7%8E%8B%E4%B8%80%E5%8D%9A%23&t=31&band_rank=36&Refer=top)
1. [Knight回应决赛不敌AL](https://s.weibo.com//weibo?q=%23Knight%E5%9B%9E%E5%BA%94%E5%86%B3%E8%B5%9B%E4%B8%8D%E6%95%8CAL%23&t=31&band_rank=37&Refer=top)
1. [胖东来又在做什么实验](https://s.weibo.com//weibo?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E5%8F%88%E5%9C%A8%E5%81%9A%E4%BB%80%E4%B9%88%E5%AE%9E%E9%AA%8C&t=31&band_rank=38&Refer=top)
1. [爱笑 发微博](https://s.weibo.com//weibo?q=%E7%88%B1%E7%AC%91%20%E5%8F%91%E5%BE%AE%E5%8D%9A&t=31&band_rank=39&Refer=top)
1. [东京没下雨也没淋湿巴黎](https://s.weibo.com//weibo?q=%23%E4%B8%9C%E4%BA%AC%E6%B2%A1%E4%B8%8B%E9%9B%A8%E4%B9%9F%E6%B2%A1%E6%B7%8B%E6%B9%BF%E5%B7%B4%E9%BB%8E%23&t=31&band_rank=40&Refer=top)
1. [我国从来没有第一学历这个概念](https://s.weibo.com//weibo?q=%23%E6%88%91%E5%9B%BD%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E7%AC%AC%E4%B8%80%E5%AD%A6%E5%8E%86%E8%BF%99%E4%B8%AA%E6%A6%82%E5%BF%B5%23&t=31&band_rank=41&Refer=top)
1. [代斯晒张月生日会合照](https://s.weibo.com//weibo?q=%E4%BB%A3%E6%96%AF%E6%99%92%E5%BC%A0%E6%9C%88%E7%94%9F%E6%97%A5%E4%BC%9A%E5%90%88%E7%85%A7&t=31&band_rank=42&Refer=top)
1. [时代少年团 湾区升明月](https://s.weibo.com//weibo?q=%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88&t=31&band_rank=43&Refer=top)
1. [人类语言被AI一秒抛弃](https://s.weibo.com//weibo?q=%E4%BA%BA%E7%B1%BB%E8%AF%AD%E8%A8%80%E8%A2%ABAI%E4%B8%80%E7%A7%92%E6%8A%9B%E5%BC%83&t=31&band_rank=44&Refer=top)
1. [兰香如故热度破28000](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%83%AD%E5%BA%A6%E7%A0%B428000%23&t=31&band_rank=45&Refer=top)
1. [萧敬腾演唱会女生回应](https://s.weibo.com//weibo?q=%23%E8%90%A7%E6%95%AC%E8%85%BE%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A5%B3%E7%94%9F%E5%9B%9E%E5%BA%94%23&t=31&band_rank=46&Refer=top)
1. [泰国和尚藏4.28亿泰铢](https://s.weibo.com//weibo?q=%E6%B3%B0%E5%9B%BD%E5%92%8C%E5%B0%9A%E8%97%8F4.28%E4%BA%BF%E6%B3%B0%E9%93%A2&t=31&band_rank=47&Refer=top)
1. [Breathe等了整整七年](https://s.weibo.com//weibo?q=Breathe%E7%AD%89%E4%BA%86%E6%95%B4%E6%95%B4%E4%B8%83%E5%B9%B4&t=31&band_rank=48&Refer=top)
1. [莱万特vs巴萨](https://s.weibo.com//weibo?q=%E8%8E%B1%E4%B8%87%E7%89%B9vs%E5%B7%B4%E8%90%A8&t=31&band_rank=49&Refer=top)
1. [曼联vs曼城首发](https://s.weibo.com//weibo?q=%E6%9B%BC%E8%81%94vs%E6%9B%BC%E5%9F%8E%E9%A6%96%E5%8F%91&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
