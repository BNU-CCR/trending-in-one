# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-14 00:26:44

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
<!-- 最后更新时间 Fri Nov 13 2026 16:43:01 GMT+0800 (China Standard Time) -->

1. [男子花4千多元做AI短剧火了](https://so.toutiao.com/search?keyword=男子花4千多元做AI短剧火了)
1. [新一轮大范围雨雪明夜起来袭](https://so.toutiao.com/search?keyword=新一轮大范围雨雪明夜起来袭)
1. [亚太共此时](https://so.toutiao.com/search?keyword=亚太共此时)
1. [外交部：中方反对滥用出口管制措施](https://so.toutiao.com/search?keyword=外交部：中方反对滥用出口管制措施)
1. [余承东：华为与赛力斯合作进入新阶段](https://so.toutiao.com/search?keyword=余承东：华为与赛力斯合作进入新阶段)
1. [伊朗再次打击美军在中东军事设施](https://so.toutiao.com/search?keyword=伊朗再次打击美军在中东军事设施)
1. [东山精密跌停](https://so.toutiao.com/search?keyword=东山精密跌停)
1. [叶倩文在南京档案馆找到家人户籍卡](https://so.toutiao.com/search?keyword=叶倩文在南京档案馆找到家人户籍卡)
1. [国家卫健委：我国严禁任何形式代孕](https://so.toutiao.com/search?keyword=国家卫健委：我国严禁任何形式代孕)
1. [印度股市反弹](https://so.toutiao.com/search?keyword=印度股市反弹)
1. [破译“科学”流言不可不知100个真相](https://so.toutiao.com/search?keyword=破译“科学”流言不可不知100个真相)
1. [以色列禁止法极左翼领导人梅朗雄入境](https://so.toutiao.com/search?keyword=以色列禁止法极左翼领导人梅朗雄入境)
1. [普京特别感谢美国第一夫人](https://so.toutiao.com/search?keyword=普京特别感谢美国第一夫人)
1. [零元面馆老板：愿全额补偿受损商户](https://so.toutiao.com/search?keyword=零元面馆老板：愿全额补偿受损商户)
1. [Outlook崩了日本政府改用电话工作](https://so.toutiao.com/search?keyword=Outlook崩了日本政府改用电话工作)
1. [创业板指跌3.32%](https://so.toutiao.com/search?keyword=创业板指跌3.32%)
1. [楼上5个娃跑跳制造噪音楼下反击](https://so.toutiao.com/search?keyword=楼上5个娃跑跳制造噪音楼下反击)
1. [女子3年没睡过整觉 吃安眠药也没用](https://so.toutiao.com/search?keyword=女子3年没睡过整觉%20吃安眠药也没用)
1. [酒后这3个信号说明不适合喝酒](https://so.toutiao.com/search?keyword=酒后这3个信号说明不适合喝酒)
1. [AI短剧还能走多远](https://so.toutiao.com/search?keyword=AI短剧还能走多远)
1. [“一代腿王”黄正利去世](https://so.toutiao.com/search?keyword=“一代腿王”黄正利去世)
1. [上海交警用英文丝滑执法走红](https://so.toutiao.com/search?keyword=上海交警用英文丝滑执法走红)
1. [现役仅11人做到过单场50分10助](https://so.toutiao.com/search?keyword=现役仅11人做到过单场50分10助)
1. [美国纽约楼房倒塌事故已致8死18伤](https://so.toutiao.com/search?keyword=美国纽约楼房倒塌事故已致8死18伤)
1. [团伙利用AI制作天价酒水账单被抓](https://so.toutiao.com/search?keyword=团伙利用AI制作天价酒水账单被抓)
1. [今年前10月个税收入预计超去年全年](https://so.toutiao.com/search?keyword=今年前10月个税收入预计超去年全年)
1. [马天宇：求求青稚别拍了](https://so.toutiao.com/search?keyword=马天宇：求求青稚别拍了)
1. [栗正杰：蒋万安比起半个月前差别很大](https://so.toutiao.com/search?keyword=栗正杰：蒋万安比起半个月前差别很大)
1. [日本为何无法成为一流军事强国](https://so.toutiao.com/search?keyword=日本为何无法成为一流军事强国)
1. [唐湘龙：罗大佑曾在演唱会剪美国护照](https://so.toutiao.com/search?keyword=唐湘龙：罗大佑曾在演唱会剪美国护照)
1. [深圳：APEC期间地铁公交五折优惠](https://so.toutiao.com/search?keyword=深圳：APEC期间地铁公交五折优惠)
1. [国防部：菲应约束个别政客危险言行](https://so.toutiao.com/search?keyword=国防部：菲应约束个别政客危险言行)
1. [中到大雪即将抵达河南](https://so.toutiao.com/search?keyword=中到大雪即将抵达河南)
1. [比亚迪悬赏最高500万征集抹黑线索](https://so.toutiao.com/search?keyword=比亚迪悬赏最高500万征集抹黑线索)
1. [男子每天喝1升含糖饮料血糖仪爆表](https://so.toutiao.com/search?keyword=男子每天喝1升含糖饮料血糖仪爆表)
1. [淮海战役作战命令进试卷有何意义](https://so.toutiao.com/search?keyword=淮海战役作战命令进试卷有何意义)
1. [冰箱当废品卖50元 男子自拆卖260](https://so.toutiao.com/search?keyword=冰箱当废品卖50元%20男子自拆卖260)
1. [蒋万安“回娘家”现身台立法机构](https://so.toutiao.com/search?keyword=蒋万安“回娘家”现身台立法机构)
1. [2027研究生报考人数347万](https://so.toutiao.com/search?keyword=2027研究生报考人数347万)
1. [特斯拉与SpaceX合并有进展](https://so.toutiao.com/search?keyword=特斯拉与SpaceX合并有进展)
1. [尾盘2只沪深300ETF显著放量](https://so.toutiao.com/search?keyword=尾盘2只沪深300ETF显著放量)
1. [华为Mate X8真机疑曝光](https://so.toutiao.com/search?keyword=华为Mate%20X8真机疑曝光)
1. [9类高危习惯悄悄诱发膀胱癌](https://so.toutiao.com/search?keyword=9类高危习惯悄悄诱发膀胱癌)
1. [这些小习惯正悄悄拉高你的血糖血脂](https://so.toutiao.com/search?keyword=这些小习惯正悄悄拉高你的血糖血脂)
1. [蒋万安正式请假启动拜票](https://so.toutiao.com/search?keyword=蒋万安正式请假启动拜票)
1. [俄方：普京与特朗普将在APEC期间会晤](https://so.toutiao.com/search?keyword=俄方：普京与特朗普将在APEC期间会晤)
1. [媒体：国足急需一场胜利止颓势](https://so.toutiao.com/search?keyword=媒体：国足急需一场胜利止颓势)
1. [中国中东问题特使会见沙特外交大臣](https://so.toutiao.com/search?keyword=中国中东问题特使会见沙特外交大臣)
1. [专家：以开放合作引领亚太共同体进程](https://so.toutiao.com/search?keyword=专家：以开放合作引领亚太共同体进程)
1. [刘欢患“不死癌症”系讹传](https://so.toutiao.com/search?keyword=刘欢患“不死癌症”系讹传)
1. [老教师的辞职照见一线教师管教困境](https://so.toutiao.com/search?keyword=老教师的辞职照见一线教师管教困境)
1. [学者：美国限制中国却卡住了自己](https://so.toutiao.com/search?keyword=学者：美国限制中国却卡住了自己)
1. [中国经济三季报亮点解析](https://so.toutiao.com/search?keyword=中国经济三季报亮点解析)
1. [特朗普连续发帖痛斥民主党腐败](https://so.toutiao.com/search?keyword=特朗普连续发帖痛斥民主党腐败)
1. [齐达内：对手领先后我们有些散乱](https://so.toutiao.com/search?keyword=齐达内：对手领先后我们有些散乱)
1. [辽宁公布最新油价](https://so.toutiao.com/search?keyword=辽宁公布最新油价)
1. [刘欢安葬于北京 曾与膀胱癌斗争多年](https://so.toutiao.com/search?keyword=刘欢安葬于北京%20曾与膀胱癌斗争多年)
1. [广西广东福建等地有暴雨](https://so.toutiao.com/search?keyword=广西广东福建等地有暴雨)
1. [国内油价是怎么算的](https://so.toutiao.com/search?keyword=国内油价是怎么算的)
1. [“商家扬言取消外卖”系引流套路](https://so.toutiao.com/search?keyword=“商家扬言取消外卖”系引流套路)
1. [汪明荃演唱会场地选在酒店宴会厅](https://so.toutiao.com/search?keyword=汪明荃演唱会场地选在酒店宴会厅)
1. [上汽大众ID.ERA 5X限时9.99万起](https://so.toutiao.com/search?keyword=上汽大众ID.ERA%205X限时9.99万起)
1. [山姆399元羽绒服断货供应商回应](https://so.toutiao.com/search?keyword=山姆399元羽绒服断货供应商回应)
1. [张可依回应赛后身披国旗喊China](https://so.toutiao.com/search?keyword=张可依回应赛后身披国旗喊China)
1. [秦朔：憾别倪润峰](https://so.toutiao.com/search?keyword=秦朔：憾别倪润峰)
1. [专家：科学护肾记住这几件事](https://so.toutiao.com/search?keyword=专家：科学护肾记住这几件事)
1. [蓉城球迷目睹丢冠后泣不成声](https://so.toutiao.com/search?keyword=蓉城球迷目睹丢冠后泣不成声)
1. [控糖别误伤牛奶酸奶](https://so.toutiao.com/search?keyword=控糖别误伤牛奶酸奶)
1. [俄称愿立即与美国讨论欧洲安全问题](https://so.toutiao.com/search?keyword=俄称愿立即与美国讨论欧洲安全问题)
1. [马志明正式收郭德纲为义子](https://so.toutiao.com/search?keyword=马志明正式收郭德纲为义子)
1. [iPhone 13为何突然又火了](https://so.toutiao.com/search?keyword=iPhone%2013为何突然又火了)
1. [退役特级飞行员：中国空军发展太快](https://so.toutiao.com/search?keyword=退役特级飞行员：中国空军发展太快)
1. [前UFC冠军梅拉布赛前遭多人围殴](https://so.toutiao.com/search?keyword=前UFC冠军梅拉布赛前遭多人围殴)
1. [库里腹斜肌撕裂 两周后复查](https://so.toutiao.com/search?keyword=库里腹斜肌撕裂%20两周后复查)
1. [多纳鲁马近5场比赛3次因失误导致丢球](https://so.toutiao.com/search?keyword=多纳鲁马近5场比赛3次因失误导致丢球)
1. [中国给沙漠锁边为世界贡献多大](https://so.toutiao.com/search?keyword=中国给沙漠锁边为世界贡献多大)
1. [杨鸣：郭士强选人肯定用比较熟悉的](https://so.toutiao.com/search?keyword=杨鸣：郭士强选人肯定用比较熟悉的)
1. [男子失业断供房贷 法院暂不拍卖房产](https://so.toutiao.com/search?keyword=男子失业断供房贷%20法院暂不拍卖房产)
1. [迷你罗完成葡萄牙U17国家队首秀](https://so.toutiao.com/search?keyword=迷你罗完成葡萄牙U17国家队首秀)
1. [欧盟称将继续参与乌克兰和平谈判](https://so.toutiao.com/search?keyword=欧盟称将继续参与乌克兰和平谈判)
1. [血管悄悄老化身体会有哪些信号](https://so.toutiao.com/search?keyword=血管悄悄老化身体会有哪些信号)
1. [日本民间团体举行集会反对修宪扩军](https://so.toutiao.com/search?keyword=日本民间团体举行集会反对修宪扩军)
1. [秋假出行安全提醒](https://so.toutiao.com/search?keyword=秋假出行安全提醒)
1. [雅迪电动三轮车最高时速缩水近四成](https://so.toutiao.com/search?keyword=雅迪电动三轮车最高时速缩水近四成)
1. [国内商品期市夜盘收盘多数上涨](https://so.toutiao.com/search?keyword=国内商品期市夜盘收盘多数上涨)
1. [董明珠首次回应格力技校热点问题](https://so.toutiao.com/search?keyword=董明珠首次回应格力技校热点问题)
1. [血糖升高有哪些症状](https://so.toutiao.com/search?keyword=血糖升高有哪些症状)
1. [东京审判宣判78周年 日本反省了吗](https://so.toutiao.com/search?keyword=东京审判宣判78周年%20日本反省了吗)
1. [跟着《后会友期》开启西藏之旅](https://so.toutiao.com/search?keyword=跟着《后会友期》开启西藏之旅)
1. [斯玛特因挥拳打人被停薪禁赛3场](https://so.toutiao.com/search?keyword=斯玛特因挥拳打人被停薪禁赛3场)
1. [伊朗南部锡里克遭袭](https://so.toutiao.com/search?keyword=伊朗南部锡里克遭袭)
1. [12306回应绿皮车字头改念英文](https://so.toutiao.com/search?keyword=12306回应绿皮车字头改念英文)
1. [贵州威宁县发生4.5级地震](https://so.toutiao.com/search?keyword=贵州威宁县发生4.5级地震)
1. [油价13日起下调](https://so.toutiao.com/search?keyword=油价13日起下调)
1. [美媒：美让俄提交新俄欧安全协议方案](https://so.toutiao.com/search?keyword=美媒：美让俄提交新俄欧安全协议方案)
1. [多地试点直升普通高中](https://so.toutiao.com/search?keyword=多地试点直升普通高中)
1. [媒体：挟洋谋“独”不过是竹篮打水](https://so.toutiao.com/search?keyword=媒体：挟洋谋“独”不过是竹篮打水)
1. [拜登：若早知患癌我会辞职](https://so.toutiao.com/search?keyword=拜登：若早知患癌我会辞职)
1. [克里为何呼吁跟上中国绿能发展步伐](https://so.toutiao.com/search?keyword=克里为何呼吁跟上中国绿能发展步伐)
1. [第一个攻克癌症的中国公司已经亏损了](https://so.toutiao.com/search?keyword=第一个攻克癌症的中国公司已经亏损了)
1. [华尔街疯狂抛售黄金意味着什么](https://so.toutiao.com/search?keyword=华尔街疯狂抛售黄金意味着什么)
1. [普京：俄不能接受外国军队在乌驻扎](https://so.toutiao.com/search?keyword=普京：俄不能接受外国军队在乌驻扎)
1. [双11为何越来越安静了](https://so.toutiao.com/search?keyword=双11为何越来越安静了)
1. [“两岸和平倡议大会”在台北举办](https://so.toutiao.com/search?keyword=“两岸和平倡议大会”在台北举办)
1. [朴树哥哥否认朴树去世](https://so.toutiao.com/search?keyword=朴树哥哥否认朴树去世)
1. [老板给连吃7碗米饭母女放钱系摆拍](https://so.toutiao.com/search?keyword=老板给连吃7碗米饭母女放钱系摆拍)
1. [老板假装扫码为特殊顾客买单500次](https://so.toutiao.com/search?keyword=老板假装扫码为特殊顾客买单500次)
1. [专家解析金价急跌](https://so.toutiao.com/search?keyword=专家解析金价急跌)
1. [国产手机再迎双品牌战略](https://so.toutiao.com/search?keyword=国产手机再迎双品牌战略)
1. [这些习惯暗藏心脑血管风险](https://so.toutiao.com/search?keyword=这些习惯暗藏心脑血管风险)
1. [美俄乌三方会谈落幕：换俘迎破局](https://so.toutiao.com/search?keyword=美俄乌三方会谈落幕：换俘迎破局)
1. [我军16架艘次军机舰船位台岛周边活动](https://so.toutiao.com/search?keyword=我军16架艘次军机舰船位台岛周边活动)
1. [爆款羽绒服工厂为何甘心躲在山姆后面](https://so.toutiao.com/search?keyword=爆款羽绒服工厂为何甘心躲在山姆后面)
1. [确诊糖尿病后还能吃甜食吗](https://so.toutiao.com/search?keyword=确诊糖尿病后还能吃甜食吗)
1. [中方奉劝七国集团管好自己的事情](https://so.toutiao.com/search?keyword=中方奉劝七国集团管好自己的事情)
1. [郭德纲在天津举办收徒仪式](https://so.toutiao.com/search?keyword=郭德纲在天津举办收徒仪式)
1. [台湾青年：台湾从来不是一个国家](https://so.toutiao.com/search?keyword=台湾青年：台湾从来不是一个国家)
1. [男子疑遭拘禁殴打后去世 5人被公诉](https://so.toutiao.com/search?keyword=男子疑遭拘禁殴打后去世%205人被公诉)
1. [深圳满城簕杜鹃喜迎客来](https://so.toutiao.com/search?keyword=深圳满城簕杜鹃喜迎客来)
1. [台陆军前总司令：台湾人就是中国人](https://so.toutiao.com/search?keyword=台陆军前总司令：台湾人就是中国人)
1. [孙中山与唐山](https://so.toutiao.com/search?keyword=孙中山与唐山)
1. [蛋白质怎么补最有效](https://so.toutiao.com/search?keyword=蛋白质怎么补最有效)
1. [双11最猛的增长不在商品](https://so.toutiao.com/search?keyword=双11最猛的增长不在商品)
1. [77万亿存款到期会流向哪里](https://so.toutiao.com/search?keyword=77万亿存款到期会流向哪里)
1. [吉利星越L PLUS开启预售](https://so.toutiao.com/search?keyword=吉利星越L%20PLUS开启预售)
1. [中国国民党举办纪念孙中山诞辰座谈会](https://so.toutiao.com/search?keyword=中国国民党举办纪念孙中山诞辰座谈会)
1. [“内分泌失调”有哪些症状](https://so.toutiao.com/search?keyword=“内分泌失调”有哪些症状)
1. [法院：补税不代表可避开税务失信惩戒](https://so.toutiao.com/search?keyword=法院：补税不代表可避开税务失信惩戒)
1. [赖岳谦：攻击-21可实现致命攻击](https://so.toutiao.com/search?keyword=赖岳谦：攻击-21可实现致命攻击)
1. [普京说俄乌间没有灰色地带只有国界](https://so.toutiao.com/search?keyword=普京说俄乌间没有灰色地带只有国界)
1. [博主：C罗在中国商业价值被重估](https://so.toutiao.com/search?keyword=博主：C罗在中国商业价值被重估)
1. [泽连斯基：星链系统出现严重运行异常](https://so.toutiao.com/search?keyword=泽连斯基：星链系统出现严重运行异常)
1. [攻击-11能否助歼-20重塑空战新格局](https://so.toutiao.com/search?keyword=攻击-11能否助歼-20重塑空战新格局)
1. [秋冬嘴唇容易脱皮怎么办](https://so.toutiao.com/search?keyword=秋冬嘴唇容易脱皮怎么办)
1. [日本新型军国主义祸患无穷](https://so.toutiao.com/search?keyword=日本新型军国主义祸患无穷)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Nov 14 2026 00:15:32 GMT+0800 (China Standard Time) -->

1. [交大医学院基因编辑事件官方通报](https://www.zhihu.com/search?q=%E4%BA%A4%E5%A4%A7%E5%8C%BB%E5%AD%A6%E9%99%A2%E5%9F%BA%E5%9B%A0%E7%BC%96%E8%BE%91%E4%BA%8B%E4%BB%B6%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5)
1. [RTX5080暴跌4000元](https://www.zhihu.com/search?q=RTX5080%E6%9A%B4%E8%B7%8C4000%E5%85%83)
1. [拜登遇袭](https://www.zhihu.com/search?q=%E6%8B%9C%E7%99%BB%E9%81%87%E8%A2%AD)
1. [黄仁勋再被曝出轨前高管](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E5%86%8D%E8%A2%AB%E6%9B%9D%E5%87%BA%E8%BD%A8%E5%89%8D%E9%AB%98%E7%AE%A1)
1. [网传腾讯裁员20%](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E8%85%BE%E8%AE%AF%E8%A3%81%E5%91%9820%25)
1. [库克被提名为黄仁勋潜在继任者](https://www.zhihu.com/search?q=%E5%BA%93%E5%85%8B%E8%A2%AB%E6%8F%90%E5%90%8D%E4%B8%BA%E9%BB%84%E4%BB%81%E5%8B%8B%E6%BD%9C%E5%9C%A8%E7%BB%A7%E4%BB%BB%E8%80%85)
1. [黄仁勋为什么突然辞职](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E7%AA%81%E7%84%B6%E8%BE%9E%E8%81%8C)
1. [黄仁勋再被曝第三段婚外情](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E5%86%8D%E8%A2%AB%E6%9B%9D%E7%AC%AC%E4%B8%89%E6%AE%B5%E5%A9%9A%E5%A4%96%E6%83%85)
1. [2027年考研报名人数347万](https://www.zhihu.com/search?q=2027%E5%B9%B4%E8%80%83%E7%A0%94%E6%8A%A5%E5%90%8D%E4%BA%BA%E6%95%B0347%E4%B8%87)
1. [胖东来洗发水陷罗生门](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E6%B4%97%E5%8F%91%E6%B0%B4%E9%99%B7%E7%BD%97%E7%94%9F%E9%97%A8)
1. [大学保研举报现象频发](https://www.zhihu.com/search?q=%E5%A4%A7%E5%AD%A6%E4%BF%9D%E7%A0%94%E4%B8%BE%E6%8A%A5%E7%8E%B0%E8%B1%A1%E9%A2%91%E5%8F%91)
1. [黄仁勋在英伟达的最后数小时](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E5%9C%A8%E8%8B%B1%E4%BC%9F%E8%BE%BE%E7%9A%84%E6%9C%80%E5%90%8E%E6%95%B0%E5%B0%8F%E6%97%B6)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Nov 14 2026 00:26:44 GMT+0800 (China Standard Time) -->

1. [前两年平价牛肉餐饮疯狂开店，现如今牛肉价格涨幅已达 27% ，牛肉为何吃不起了？](https://www.zhihu.com/question/2103784826771863000)
1. [国铁规定 Z 字头列车不再读「直」改用英文字母发音，如何看待这种转变？](https://www.zhihu.com/question/2103584365720744200)
1. [前字节美团招聘负责人称「给大模型人才开1亿年薪不贵」如何看待此观点？给大模型人才开上亿年薪，算天价吗？](https://www.zhihu.com/question/2104296182344427000)
1. [为什么国内止痛药普遍使用布洛芬而不是阿司匹林？](https://www.zhihu.com/question/316552162)
1. [如何评价清华大学 2026 年本科生特等奖学金的 15 名候选人？](https://www.zhihu.com/question/2103811077255579400)
1. [家里的老人总是不间断的给孩子吃零食导致孩子不吃饭，我该怎么沟通？](https://www.zhihu.com/question/1950159878141252600)
1. [在图书馆里面看闲书而不是刷题/工作/自习的人，到底是怎么想的？](https://www.zhihu.com/question/2093827089275302400)
1. [Fable 5.2生成FPS游戏《Saltline》成本约为550美元，如果换成人工，大概需要多少钱？](https://www.zhihu.com/question/2103967386147755800)
1. [重庆通报「帮连吃 7 碗米饭母女放钱」视频系摆拍已立案，这类虚假摆拍该承担哪些法律责任？](https://www.zhihu.com/question/2104310469767054800)
1. [明明跟梁家辉一起演的《捕风追影》，戏份也不少，为啥成龙没有奖项提名？](https://www.zhihu.com/question/2103623242048956200)
1. [如何看待央视足球之夜为成都蓉城做的专题片《梦的溃败》？](https://www.zhihu.com/question/2104542523745989400)
1. [高架上汽车撞上风筝线，车顶、雷达等多处被割坏，为什么一根线能有这么大威力？遇到这种情况该怎么办？](https://www.zhihu.com/question/2104171958761777200)
1. [李彦宏称公司不会仅用 AI 就更有竞争力，这一说法有何依据？](https://www.zhihu.com/question/2104247609519093200)
1. [黄仁勋算是美国中期选举的牺牲品吗？为什么偏偏是他？](https://www.zhihu.com/question/2104350711869698800)
1. [导演白雪认为如果停止思考和阅读，只依靠大脑存量内容和 AI 对话，长期一定会出问题，你碰过类似情况吗？](https://www.zhihu.com/question/2102865309602242800)
1. [你还记得第一次自己下厨的那天吗？当时为什么决定自己做饭，做出了怎样的一餐？](https://www.zhihu.com/question/2104545207102584800)
1. [为什么刘欢在死亡证明上的死因是「感染性休克」而非「膀胱癌」呢？](https://www.zhihu.com/question/2104342767946176300)
1. [何超琼称「不是让一百个人来澳门一次，而是希望一个人来一百次」，如何看待这一旅游发展理念？](https://www.zhihu.com/question/2095459699088962300)
1. [早餐适合吃什么呢？](https://www.zhihu.com/question/7505918109)
1. [《后会友期》聊天提及写序时，王子璇说「我下次还会收费」，如何看待这一态度？这算彻底放下了吗？](https://www.zhihu.com/question/2104214983948986400)
1. [金价再度跌破 3900 美元，这轮调整的底部区间大概在哪里？当前位置的中长期配置性价比如何？](https://www.zhihu.com/question/2104485675286389800)
1. [有没有一种炸货，你吃到后就感觉「要过年了」？](https://www.zhihu.com/question/639053124)
1. [东鹏饮料开始卖酒了，名字就叫好厉害，你看好吗？](https://www.zhihu.com/question/2104149087188510700)
1. [人一定要有一份“稳定”的工作才算好吗？](https://www.zhihu.com/question/2095624907342325500)
1. [假如你有一天醒来，发现穿越成了《哈利波特》中的汤姆里德尔，你该怎么生存下去？](https://www.zhihu.com/question/521896424)
1. [为什么黑格尔说中国没有历史？](https://www.zhihu.com/question/2104144183305020700)
1. [房子已经过剩，为什么一直还在新盖楼盘？](https://www.zhihu.com/question/2075640740537963800)
1. [小学的家庭作业到底要不要帮孩子检查？](https://www.zhihu.com/question/2101091447273534000)
1. [大白菜可以做成什么好吃的美食？](https://www.zhihu.com/question/655297409)
1. [RTX5080 售价暴跌 4000 元，这波降价核心原因是什么，现在适合入手吗？](https://www.zhihu.com/question/2103812903170318600)

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
<!-- 最后更新时间 Fri Nov 13 2026 17:43:02 GMT+0800 (China Standard Time) -->

1. [坚持和加强党对国有企业的全面领导](https://s.weibo.com//weibo?q=%23%E5%9D%9A%E6%8C%81%E5%92%8C%E5%8A%A0%E5%BC%BA%E5%85%9A%E5%AF%B9%E5%9B%BD%E6%9C%89%E4%BC%81%E4%B8%9A%E7%9A%84%E5%85%A8%E9%9D%A2%E9%A2%86%E5%AF%BC%23&Refer=new_time)
1. [飞秒手术要降价了](https://s.weibo.com//weibo?q=%23%E9%A3%9E%E7%A7%92%E6%89%8B%E6%9C%AF%E8%A6%81%E9%99%8D%E4%BB%B7%E4%BA%86%23&t=31&band_rank=1&Refer=top)
1. [官方通报交大基因编辑事件](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%BA%A4%E5%A4%A7%E5%9F%BA%E5%9B%A0%E7%BC%96%E8%BE%91%E4%BA%8B%E4%BB%B6%23&t=31&band_rank=2&Refer=top)
1. [我们的城市有条中山路](https://s.weibo.com//weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%9F%8E%E5%B8%82%E6%9C%89%E6%9D%A1%E4%B8%AD%E5%B1%B1%E8%B7%AF%23&t=31&band_rank=3&Refer=top)
1. [陈晓楠 张泉灵](https://s.weibo.com//weibo?q=%E9%99%88%E6%99%93%E6%A5%A0%20%E5%BC%A0%E6%B3%89%E7%81%B5&t=31&band_rank=4&Refer=top)
1. [我国严禁任何形式代孕](https://s.weibo.com//weibo?q=%23%E6%88%91%E5%9B%BD%E4%B8%A5%E7%A6%81%E4%BB%BB%E4%BD%95%E5%BD%A2%E5%BC%8F%E4%BB%A3%E5%AD%95%23&t=31&band_rank=5&Refer=top)
1. [青稚说感觉不到白小纯对成绩的渴望](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E8%AF%B4%E6%84%9F%E8%A7%89%E4%B8%8D%E5%88%B0%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E6%88%90%E7%BB%A9%E7%9A%84%E6%B8%B4%E6%9C%9B%23&t=31&band_rank=6&Refer=top)
1. [和平饭店账单造假事件15人被抓](https://s.weibo.com//weibo?q=%23%E5%92%8C%E5%B9%B3%E9%A5%AD%E5%BA%97%E8%B4%A6%E5%8D%95%E9%80%A0%E5%81%87%E4%BA%8B%E4%BB%B615%E4%BA%BA%E8%A2%AB%E6%8A%93%23&t=31&band_rank=7&Refer=top)
1. [2027研究生报考人数347万](https://s.weibo.com//weibo?q=%232027%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8A%A5%E8%80%83%E4%BA%BA%E6%95%B0347%E4%B8%87%23&t=31&band_rank=8&Refer=top)
1. [太阳雨 编剧](https://s.weibo.com//weibo?q=%E5%A4%AA%E9%98%B3%E9%9B%A8%20%E7%BC%96%E5%89%A7&t=31&band_rank=9&Refer=top)
1. [放二十年的金砖被物理好的人取走了](https://s.weibo.com//weibo?q=%E6%94%BE%E4%BA%8C%E5%8D%81%E5%B9%B4%E7%9A%84%E9%87%91%E7%A0%96%E8%A2%AB%E7%89%A9%E7%90%86%E5%A5%BD%E7%9A%84%E4%BA%BA%E5%8F%96%E8%B5%B0%E4%BA%86&t=31&band_rank=10&Refer=top)
1. [白小纯成绩](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%88%90%E7%BB%A9%23&t=31&band_rank=11&Refer=top)
1. [王子璇听到白小纯说青稚是太子爷的表情](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E5%90%AC%E5%88%B0%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%AF%B4%E9%9D%92%E7%A8%9A%E6%98%AF%E5%A4%AA%E5%AD%90%E7%88%B7%E7%9A%84%E8%A1%A8%E6%83%85%23&t=31&band_rank=12&Refer=top)
1. [水均益墓前和刘欢女儿合影送别](https://s.weibo.com//weibo?q=%23%E6%B0%B4%E5%9D%87%E7%9B%8A%E5%A2%93%E5%89%8D%E5%92%8C%E5%88%98%E6%AC%A2%E5%A5%B3%E5%84%BF%E5%90%88%E5%BD%B1%E9%80%81%E5%88%AB%23&t=31&band_rank=13&Refer=top)
1. [宋雨琦转发中国台湾被韩网热议](https://s.weibo.com//weibo?q=%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%BD%AC%E5%8F%91%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E8%A2%AB%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AE&t=31&band_rank=14&Refer=top)
1. [金晨发文秒删](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%A8%E5%8F%91%E6%96%87%E7%A7%92%E5%88%A0%23&t=31&band_rank=15&Refer=top)
1. [青稚的成绩](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E7%9A%84%E6%88%90%E7%BB%A9%23&t=31&band_rank=16&Refer=top)
1. [杨超越早期经历](https://s.weibo.com//weibo?q=%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%97%A9%E6%9C%9F%E7%BB%8F%E5%8E%86&t=31&band_rank=17&Refer=top)
1. [肖战不戴口罩](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E4%B8%8D%E6%88%B4%E5%8F%A3%E7%BD%A9%23&t=31&band_rank=18&Refer=top)
1. [余承东出席问界发布会](https://s.weibo.com//weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%87%BA%E5%B8%AD%E9%97%AE%E7%95%8C%E5%8F%91%E5%B8%83%E4%BC%9A%23&t=31&band_rank=19&Refer=top)
1. [通报前1天老板仍否认7碗米饭摆拍](https://s.weibo.com//weibo?q=%23%E9%80%9A%E6%8A%A5%E5%89%8D1%E5%A4%A9%E8%80%81%E6%9D%BF%E4%BB%8D%E5%90%A6%E8%AE%A47%E7%A2%97%E7%B1%B3%E9%A5%AD%E6%91%86%E6%8B%8D%23&t=31&band_rank=20&Refer=top)
1. [付航说当保安只拦上汽大众车](https://s.weibo.com//weibo?q=%23%E4%BB%98%E8%88%AA%E8%AF%B4%E5%BD%93%E4%BF%9D%E5%AE%89%E5%8F%AA%E6%8B%A6%E4%B8%8A%E6%B1%BD%E5%A4%A7%E4%BC%97%E8%BD%A6%23&t=31&band_rank=21&Refer=top)
1. [黄明昊想上后会友期](https://s.weibo.com//weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%E6%83%B3%E4%B8%8A%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23&t=31&band_rank=22&Refer=top)
1. [黄仁勋被移出英伟达高管名单](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%A2%AB%E7%A7%BB%E5%87%BA%E8%8B%B1%E4%BC%9F%E8%BE%BE%E9%AB%98%E7%AE%A1%E5%90%8D%E5%8D%95%23&t=31&band_rank=23&Refer=top)
1. [叶倩文在南京档案馆找到家人户籍](https://s.weibo.com//weibo?q=%23%E5%8F%B6%E5%80%A9%E6%96%87%E5%9C%A8%E5%8D%97%E4%BA%AC%E6%A1%A3%E6%A1%88%E9%A6%86%E6%89%BE%E5%88%B0%E5%AE%B6%E4%BA%BA%E6%88%B7%E7%B1%8D%23&t=31&band_rank=24&Refer=top)
1. [曝魏晨被雪藏的原因](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E9%AD%8F%E6%99%A8%E8%A2%AB%E9%9B%AA%E8%97%8F%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=25&Refer=top)
1. [年年体检血糖正常却查出糖尿病](https://s.weibo.com//weibo?q=%23%E5%B9%B4%E5%B9%B4%E4%BD%93%E6%A3%80%E8%A1%80%E7%B3%96%E6%AD%A3%E5%B8%B8%E5%8D%B4%E6%9F%A5%E5%87%BA%E7%B3%96%E5%B0%BF%E7%97%85%23&t=31&band_rank=26&Refer=top)
1. [Zeus回归T1传闻](https://s.weibo.com//weibo?q=Zeus%E5%9B%9E%E5%BD%92T1%E4%BC%A0%E9%97%BB&t=31&band_rank=27&Refer=top)
1. [问界](https://s.weibo.com//weibo?q=%E9%97%AE%E7%95%8C&t=31&band_rank=28&Refer=top)
1. [后会友期陈晓楠评论区](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%99%88%E6%99%93%E6%A5%A0%E8%AF%84%E8%AE%BA%E5%8C%BA&t=31&band_rank=29&Refer=top)
1. [S16决赛海报公布](https://s.weibo.com//weibo?q=%23S16%E5%86%B3%E8%B5%9B%E6%B5%B7%E6%8A%A5%E5%85%AC%E5%B8%83%23&t=31&band_rank=30&Refer=top)
1. [八旬老人成了医疗人球](https://s.weibo.com//weibo?q=%E5%85%AB%E6%97%AC%E8%80%81%E4%BA%BA%E6%88%90%E4%BA%86%E5%8C%BB%E7%96%97%E4%BA%BA%E7%90%83&t=31&band_rank=31&Refer=top)
1. [余承东张兴海](https://s.weibo.com//weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%BC%A0%E5%85%B4%E6%B5%B7%23&t=31&band_rank=32&Refer=top)
1. [张萌反驳白小纯说努力是天赋](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E5%8F%8D%E9%A9%B3%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%AF%B4%E5%8A%AA%E5%8A%9B%E6%98%AF%E5%A4%A9%E8%B5%8B%23&t=31&band_rank=33&Refer=top)
1. [看她的眼睛和皮肤是真的很有说服力](https://s.weibo.com//weibo?q=%23%E7%9C%8B%E5%A5%B9%E7%9A%84%E7%9C%BC%E7%9D%9B%E5%92%8C%E7%9A%AE%E8%82%A4%E6%98%AF%E7%9C%9F%E7%9A%84%E5%BE%88%E6%9C%89%E8%AF%B4%E6%9C%8D%E5%8A%9B%23&t=31&band_rank=34&Refer=top)
1. [电影麻将女王内地票房4455元](https://s.weibo.com//weibo?q=%23%E7%94%B5%E5%BD%B1%E9%BA%BB%E5%B0%86%E5%A5%B3%E7%8E%8B%E5%86%85%E5%9C%B0%E7%A5%A8%E6%88%BF4455%E5%85%83%23&t=31&band_rank=35&Refer=top)
1. [郭晶晶一句咽霍启刚乖乖吃](https://s.weibo.com//weibo?q=%E9%83%AD%E6%99%B6%E6%99%B6%E4%B8%80%E5%8F%A5%E5%92%BD%E9%9C%8D%E5%90%AF%E5%88%9A%E4%B9%96%E4%B9%96%E5%90%83&t=31&band_rank=36&Refer=top)
1. [考研人数](https://s.weibo.com//weibo?q=%E8%80%83%E7%A0%94%E4%BA%BA%E6%95%B0&t=31&band_rank=37&Refer=top)
1. [叶舒华在台湾综艺说了Chinese](https://s.weibo.com//weibo?q=%23%E5%8F%B6%E8%88%92%E5%8D%8E%E5%9C%A8%E5%8F%B0%E6%B9%BE%E7%BB%BC%E8%89%BA%E8%AF%B4%E4%BA%86Chinese%23&t=31&band_rank=38&Refer=top)
1. [阿姨照料患癌男同事14年开销AA制](https://s.weibo.com//weibo?q=%23%E9%98%BF%E5%A7%A8%E7%85%A7%E6%96%99%E6%82%A3%E7%99%8C%E7%94%B7%E5%90%8C%E4%BA%8B14%E5%B9%B4%E5%BC%80%E9%94%80AA%E5%88%B6%23&t=31&band_rank=39&Refer=top)
1. [美国限制中国半导体反倒卡住自己](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%99%90%E5%88%B6%E4%B8%AD%E5%9B%BD%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%8F%8D%E5%80%92%E5%8D%A1%E4%BD%8F%E8%87%AA%E5%B7%B1%23&t=31&band_rank=40&Refer=top)
1. [胡歌绯闻女友上中老年恋综](https://s.weibo.com//weibo?q=%23%E8%83%A1%E6%AD%8C%E7%BB%AF%E9%97%BB%E5%A5%B3%E5%8F%8B%E4%B8%8A%E4%B8%AD%E8%80%81%E5%B9%B4%E6%81%8B%E7%BB%BC%23&t=31&band_rank=41&Refer=top)
1. [第一次看怎么装鼻假体的视频](https://s.weibo.com//weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E6%80%8E%E4%B9%88%E8%A3%85%E9%BC%BB%E5%81%87%E4%BD%93%E7%9A%84%E8%A7%86%E9%A2%91%23&t=31&band_rank=42&Refer=top)
1. [曝王子璇朱正廷翻拍好一个乖乖女](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%AD%90%E7%92%87%E6%9C%B1%E6%AD%A3%E5%BB%B7%E7%BF%BB%E6%8B%8D%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3%23&t=31&band_rank=43&Refer=top)
1. [金价下跌买金人少一半](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E4%B9%B0%E9%87%91%E4%BA%BA%E5%B0%91%E4%B8%80%E5%8D%8A%23&t=31&band_rank=44&Refer=top)
1. [英伟达对黄仁勋的信心为何不见了](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%AF%B9%E9%BB%84%E4%BB%81%E5%8B%8B%E7%9A%84%E4%BF%A1%E5%BF%83%E4%B8%BA%E4%BD%95%E4%B8%8D%E8%A7%81%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [问界新M8售价](https://s.weibo.com//weibo?q=%23%E9%97%AE%E7%95%8C%E6%96%B0M8%E5%94%AE%E4%BB%B7%23&t=31&band_rank=46&Refer=top)
1. [张泉灵紧急切割](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%B3%89%E7%81%B5%E7%B4%A7%E6%80%A5%E5%88%87%E5%89%B2%23&t=31&band_rank=47&Refer=top)
1. [LOL揭晓历届S赛决赛赛果](https://s.weibo.com//weibo?q=%23LOL%E6%8F%AD%E6%99%93%E5%8E%86%E5%B1%8AS%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%B5%9B%E6%9E%9C%23&t=31&band_rank=48&Refer=top)
1. [18岁女孩确诊肺癌家人以泪洗面](https://s.weibo.com//weibo?q=%2318%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E5%AE%B6%E4%BA%BA%E4%BB%A5%E6%B3%AA%E6%B4%97%E9%9D%A2%23&t=31&band_rank=49&Refer=top)
1. [张智霖袁咏仪儿子20岁了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E8%A2%81%E5%92%8F%E4%BB%AA%E5%84%BF%E5%AD%9020%E5%B2%81%E4%BA%86%23&t=31&band_rank=50&Refer=top)
1. [共襄中华民族伟大复兴盛举](https://s.weibo.com//weibo?q=%23%E5%85%B1%E8%A5%84%E4%B8%AD%E5%8D%8E%E6%B0%91%E6%97%8F%E4%BC%9F%E5%A4%A7%E5%A4%8D%E5%85%B4%E7%9B%9B%E4%B8%BE%23&Refer=new_time)
1. [王子璇白小纯4公里开了三小时](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E7%99%BD%E5%B0%8F%E7%BA%AF4%E5%85%AC%E9%87%8C%E5%BC%80%E4%BA%86%E4%B8%89%E5%B0%8F%E6%97%B6%23&t=31&band_rank=1&Refer=top)
1. [微软Outlook服务宕机](https://s.weibo.com//weibo?q=%E5%BE%AE%E8%BD%AFOutlook%E6%9C%8D%E5%8A%A1%E5%AE%95%E6%9C%BA&t=31&band_rank=2&Refer=top)
1. [中国正在编织这样一张大网](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%AD%A3%E5%9C%A8%E7%BC%96%E7%BB%87%E8%BF%99%E6%A0%B7%E4%B8%80%E5%BC%A0%E5%A4%A7%E7%BD%91%23&t=31&band_rank=3&Refer=top)
1. [女子刮痧排淤堵脖上刮出3条大血印](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%AE%E7%97%A7%E6%8E%92%E6%B7%A4%E5%A0%B5%E8%84%96%E4%B8%8A%E5%88%AE%E5%87%BA3%E6%9D%A1%E5%A4%A7%E8%A1%80%E5%8D%B0%23&t=31&band_rank=4&Refer=top)
1. [高中生困电梯2小时被让等物业上班](https://s.weibo.com//weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E5%9B%B0%E7%94%B5%E6%A2%AF2%E5%B0%8F%E6%97%B6%E8%A2%AB%E8%AE%A9%E7%AD%89%E7%89%A9%E4%B8%9A%E4%B8%8A%E7%8F%AD%23&t=31&band_rank=5&Refer=top)
1. [张萌后悔叫马天宇上节目](https://s.weibo.com//weibo?q=%E5%BC%A0%E8%90%8C%E5%90%8E%E6%82%94%E5%8F%AB%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%8A%E8%8A%82%E7%9B%AE&t=31&band_rank=6&Refer=top)
1. [普通人用AI和会用AI的人](https://s.weibo.com//weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E7%94%A8AI%E5%92%8C%E4%BC%9A%E7%94%A8AI%E7%9A%84%E4%BA%BA%23&t=31&band_rank=7&Refer=top)
1. [给阿嬷的情书获奖反应冷淡](https://s.weibo.com//weibo?q=%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E8%8E%B7%E5%A5%96%E5%8F%8D%E5%BA%94%E5%86%B7%E6%B7%A1&t=31&band_rank=8&Refer=top)
1. [后会友期民宿离晚餐地点不到四公里](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%B0%91%E5%AE%BF%E7%A6%BB%E6%99%9A%E9%A4%90%E5%9C%B0%E7%82%B9%E4%B8%8D%E5%88%B0%E5%9B%9B%E5%85%AC%E9%87%8C%23&t=31&band_rank=9&Refer=top)
1. [英伟达大跌13%](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%A4%A7%E8%B7%8C13%25%23&t=31&band_rank=10&Refer=top)
1. [金晨发文秒删](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%A8%E5%8F%91%E6%96%87%E7%A7%92%E5%88%A0%23&t=31&band_rank=11&Refer=top)
1. [怀孕妻子发现丈夫的白月光](https://s.weibo.com//weibo?q=%E6%80%80%E5%AD%95%E5%A6%BB%E5%AD%90%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E7%9A%84%E7%99%BD%E6%9C%88%E5%85%89&t=31&band_rank=12&Refer=top)
1. [金价](https://s.weibo.com//weibo?q=%E9%87%91%E4%BB%B7&t=31&band_rank=13&Refer=top)
1. [刘欢癌症扩散后曾放手一搏试新药](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%AC%A2%E7%99%8C%E7%97%87%E6%89%A9%E6%95%A3%E5%90%8E%E6%9B%BE%E6%94%BE%E6%89%8B%E4%B8%80%E6%90%8F%E8%AF%95%E6%96%B0%E8%8D%AF%23&t=31&band_rank=14&Refer=top)
1. [曝汤臣二公子和90花隐婚](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%B1%A4%E8%87%A3%E4%BA%8C%E5%85%AC%E5%AD%90%E5%92%8C90%E8%8A%B1%E9%9A%90%E5%A9%9A%23&t=31&band_rank=15&Refer=top)
1. [感觉杨超越不捂住董思成的嘴都要亲了](https://s.weibo.com//weibo?q=%23%E6%84%9F%E8%A7%89%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%B8%8D%E6%8D%82%E4%BD%8F%E8%91%A3%E6%80%9D%E6%88%90%E7%9A%84%E5%98%B4%E9%83%BD%E8%A6%81%E4%BA%B2%E4%BA%86%23&t=31&band_rank=16&Refer=top)
1. [金晨回应回归现在就出发4](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%A8%E5%9B%9E%E5%BA%94%E5%9B%9E%E5%BD%92%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23&t=31&band_rank=17&Refer=top)
1. [英伟达临时CEO曾因黄仁勋入职](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%B8%B4%E6%97%B6CEO%E6%9B%BE%E5%9B%A0%E9%BB%84%E4%BB%81%E5%8B%8B%E5%85%A5%E8%81%8C%23&t=31&band_rank=18&Refer=top)
1. [男子失业断供与银行协商还贷被拒](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%A4%B1%E4%B8%9A%E6%96%AD%E4%BE%9B%E4%B8%8E%E9%93%B6%E8%A1%8C%E5%8D%8F%E5%95%86%E8%BF%98%E8%B4%B7%E8%A2%AB%E6%8B%92%23&t=31&band_rank=19&Refer=top)
1. [意大利3比1法国](https://s.weibo.com//weibo?q=%E6%84%8F%E5%A4%A7%E5%88%A93%E6%AF%941%E6%B3%95%E5%9B%BD&t=31&band_rank=20&Refer=top)
1. [黄仁勋4万美元打造出4万亿英伟达](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B4%E4%B8%87%E7%BE%8E%E5%85%83%E6%89%93%E9%80%A0%E5%87%BA4%E4%B8%87%E4%BA%BF%E8%8B%B1%E4%BC%9F%E8%BE%BE%23&t=31&band_rank=21&Refer=top)
1. [刘欢妻子长文](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%AC%A2%E5%A6%BB%E5%AD%90%E9%95%BF%E6%96%87%23&t=31&band_rank=22&Refer=top)
1. [男子怀疑女儿是外星人](https://s.weibo.com//weibo?q=%E7%94%B7%E5%AD%90%E6%80%80%E7%96%91%E5%A5%B3%E5%84%BF%E6%98%AF%E5%A4%96%E6%98%9F%E4%BA%BA&t=31&band_rank=23&Refer=top)
1. [散户30分钟抄底英伟达1.1亿美元](https://s.weibo.com//weibo?q=%23%E6%95%A3%E6%88%B730%E5%88%86%E9%92%9F%E6%8A%84%E5%BA%95%E8%8B%B1%E4%BC%9F%E8%BE%BE1.1%E4%BA%BF%E7%BE%8E%E5%85%83%23&t=31&band_rank=24&Refer=top)
1. [白小纯 王子璇](https://s.weibo.com//weibo?q=%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E7%8E%8B%E5%AD%90%E7%92%87&t=31&band_rank=25&Refer=top)
1. [厉娜节目里第一次叫许飞名字](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E8%8A%82%E7%9B%AE%E9%87%8C%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%8F%AB%E8%AE%B8%E9%A3%9E%E5%90%8D%E5%AD%97%23&t=31&band_rank=26&Refer=top)
1. [青云稚上](https://s.weibo.com//weibo?q=%E9%9D%92%E4%BA%91%E7%A8%9A%E4%B8%8A&t=31&band_rank=27&Refer=top)
1. [英伟达股民天塌了](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%82%A1%E6%B0%91%E5%A4%A9%E5%A1%8C%E4%BA%86%23&t=31&band_rank=28&Refer=top)
1. [女子腿疼找中医扎针血直往外喷](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E8%85%BF%E7%96%BC%E6%89%BE%E4%B8%AD%E5%8C%BB%E6%89%8E%E9%92%88%E8%A1%80%E7%9B%B4%E5%BE%80%E5%A4%96%E5%96%B7%23&t=31&band_rank=29&Refer=top)
1. [金价再迎暴跌专家劝别抄底](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E5%86%8D%E8%BF%8E%E6%9A%B4%E8%B7%8C%E4%B8%93%E5%AE%B6%E5%8A%9D%E5%88%AB%E6%8A%84%E5%BA%95%23&t=31&band_rank=30&Refer=top)
1. [白小纯眼睛就没离开过王子璇](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9C%BC%E7%9D%9B%E5%B0%B1%E6%B2%A1%E7%A6%BB%E5%BC%80%E8%BF%87%E7%8E%8B%E5%AD%90%E7%92%87%23&t=31&band_rank=31&Refer=top)
1. [奚梦瑶出演盆栽新歌MV](https://s.weibo.com//weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%87%BA%E6%BC%94%E7%9B%86%E6%A0%BD%E6%96%B0%E6%AD%8CMV%23&t=31&band_rank=32&Refer=top)
1. [镜头转到周洁琼时这张脸好权威](https://s.weibo.com//weibo?q=%23%E9%95%9C%E5%A4%B4%E8%BD%AC%E5%88%B0%E5%91%A8%E6%B4%81%E7%90%BC%E6%97%B6%E8%BF%99%E5%BC%A0%E8%84%B8%E5%A5%BD%E6%9D%83%E5%A8%81%23&t=31&band_rank=33&Refer=top)
1. [拜登说早知道患癌就不参选了](https://s.weibo.com//weibo?q=%23%E6%8B%9C%E7%99%BB%E8%AF%B4%E6%97%A9%E7%9F%A5%E9%81%93%E6%82%A3%E7%99%8C%E5%B0%B1%E4%B8%8D%E5%8F%82%E9%80%89%E4%BA%86%23&t=31&band_rank=34&Refer=top)
1. [后会友期接人vs花少接人](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%8E%A5%E4%BA%BAvs%E8%8A%B1%E5%B0%91%E6%8E%A5%E4%BA%BA%23&t=31&band_rank=35&Refer=top)
1. [7碗米饭摆拍事件更显媒体调查价值](https://s.weibo.com//weibo?q=%237%E7%A2%97%E7%B1%B3%E9%A5%AD%E6%91%86%E6%8B%8D%E4%BA%8B%E4%BB%B6%E6%9B%B4%E6%98%BE%E5%AA%92%E4%BD%93%E8%B0%83%E6%9F%A5%E4%BB%B7%E5%80%BC%23&t=31&band_rank=36&Refer=top)
1. [肖战真是完全没变化的](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E7%9C%9F%E6%98%AF%E5%AE%8C%E5%85%A8%E6%B2%A1%E5%8F%98%E5%8C%96%E7%9A%84%23&t=31&band_rank=37&Refer=top)
1. [面试虚报500万面试官掏计算器](https://s.weibo.com//weibo?q=%E9%9D%A2%E8%AF%95%E8%99%9A%E6%8A%A5500%E4%B8%87%E9%9D%A2%E8%AF%95%E5%AE%98%E6%8E%8F%E8%AE%A1%E7%AE%97%E5%99%A8&t=31&band_rank=38&Refer=top)
1. [影视飓风Tim开通个人账号](https://s.weibo.com//weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E5%BC%80%E9%80%9A%E4%B8%AA%E4%BA%BA%E8%B4%A6%E5%8F%B7%23&t=31&band_rank=39&Refer=top)
1. [恩比德膝盖受伤返回更衣室](https://s.weibo.com//weibo?q=%E6%81%A9%E6%AF%94%E5%BE%B7%E8%86%9D%E7%9B%96%E5%8F%97%E4%BC%A4%E8%BF%94%E5%9B%9E%E6%9B%B4%E8%A1%A3%E5%AE%A4&t=31&band_rank=40&Refer=top)
1. [医生说今年流感毒株不太一样](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E4%BB%8A%E5%B9%B4%E6%B5%81%E6%84%9F%E6%AF%92%E6%A0%AA%E4%B8%8D%E5%A4%AA%E4%B8%80%E6%A0%B7%23&t=31&band_rank=41&Refer=top)
1. [英伟达市值蒸发1.21万亿](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%911.21%E4%B8%87%E4%BA%BF%23&t=31&band_rank=42&Refer=top)
1. [张凌赫回复粉丝穿秋裤](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%A4%8D%E7%B2%89%E4%B8%9D%E7%A9%BF%E7%A7%8B%E8%A3%A4%23&t=31&band_rank=43&Refer=top)
1. [科技新一说黄仁勋走了英伟达缺少灵魂](https://s.weibo.com//weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E8%AF%B4%E9%BB%84%E4%BB%81%E5%8B%8B%E8%B5%B0%E4%BA%86%E8%8B%B1%E4%BC%9F%E8%BE%BE%E7%BC%BA%E5%B0%91%E7%81%B5%E9%AD%82%23&t=31&band_rank=44&Refer=top)
1. [姜妍太适合当主持了](https://s.weibo.com//weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%A4%AA%E9%80%82%E5%90%88%E5%BD%93%E4%B8%BB%E6%8C%81%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [发布朴树去世消息网友已私密账号](https://s.weibo.com//weibo?q=%23%E5%8F%91%E5%B8%83%E6%9C%B4%E6%A0%91%E5%8E%BB%E4%B8%96%E6%B6%88%E6%81%AF%E7%BD%91%E5%8F%8B%E5%B7%B2%E7%A7%81%E5%AF%86%E8%B4%A6%E5%8F%B7%23&t=31&band_rank=46&Refer=top)
1. [美国司法部对英伟达展开调查](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%B8%E6%B3%95%E9%83%A8%E5%AF%B9%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B1%95%E5%BC%80%E8%B0%83%E6%9F%A5%23&t=31&band_rank=47&Refer=top)
1. [男子失业断供法院协调不拍卖房产](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%A4%B1%E4%B8%9A%E6%96%AD%E4%BE%9B%E6%B3%95%E9%99%A2%E5%8D%8F%E8%B0%83%E4%B8%8D%E6%8B%8D%E5%8D%96%E6%88%BF%E4%BA%A7%23&t=31&band_rank=48&Refer=top)
1. [同事认你是领导才是领导](https://s.weibo.com//weibo?q=%E5%90%8C%E4%BA%8B%E8%AE%A4%E4%BD%A0%E6%98%AF%E9%A2%86%E5%AF%BC%E6%89%8D%E6%98%AF%E9%A2%86%E5%AF%BC&t=31&band_rank=49&Refer=top)
1. [广州小学生嘉豪因名字被取笑](https://s.weibo.com//weibo?q=%E5%B9%BF%E5%B7%9E%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%98%89%E8%B1%AA%E5%9B%A0%E5%90%8D%E5%AD%97%E8%A2%AB%E5%8F%96%E7%AC%91&t=31&band_rank=50&Refer=top)
1. [特朗普回应黄仁勋辞职](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E9%BB%84%E4%BB%81%E5%8B%8B%E8%BE%9E%E8%81%8C%23&t=31&band_rank=1&Refer=top)
1. [刘欢妻子长文](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%AC%A2%E5%A6%BB%E5%AD%90%E9%95%BF%E6%96%87%23&t=31&band_rank=2&Refer=top)
1. [APEC中国年看中国外贸底色](https://s.weibo.com//weibo?q=%23APEC%E4%B8%AD%E5%9B%BD%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%E5%A4%96%E8%B4%B8%E5%BA%95%E8%89%B2%23&t=31&band_rank=3&Refer=top)
1. [美股](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1&t=31&band_rank=4&Refer=top)
1. [向太问许飞为什么当时不解开误会](https://s.weibo.com//weibo?q=%23%E5%90%91%E5%A4%AA%E9%97%AE%E8%AE%B8%E9%A3%9E%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BD%93%E6%97%B6%E4%B8%8D%E8%A7%A3%E5%BC%80%E8%AF%AF%E4%BC%9A%23&t=31&band_rank=5&Refer=top)
1. [发布朴树去世消息网友已私密账号](https://s.weibo.com//weibo?q=%23%E5%8F%91%E5%B8%83%E6%9C%B4%E6%A0%91%E5%8E%BB%E4%B8%96%E6%B6%88%E6%81%AF%E7%BD%91%E5%8F%8B%E5%B7%B2%E7%A7%81%E5%AF%86%E8%B4%A6%E5%8F%B7%23&t=31&band_rank=6&Refer=top)
1. [给阿嬷的情书获奖反应冷淡](https://s.weibo.com//weibo?q=%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E8%8E%B7%E5%A5%96%E5%8F%8D%E5%BA%94%E5%86%B7%E6%B7%A1&t=31&band_rank=7&Refer=top)
1. [20岁男子疑遭拘禁殴打被解救后去世](https://s.weibo.com//weibo?q=%2320%E5%B2%81%E7%94%B7%E5%AD%90%E7%96%91%E9%81%AD%E6%8B%98%E7%A6%81%E6%AE%B4%E6%89%93%E8%A2%AB%E8%A7%A3%E6%95%91%E5%90%8E%E5%8E%BB%E4%B8%96%23&t=31&band_rank=8&Refer=top)
1. [官方通报母女点豆芽吃7碗饭摆拍](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%AF%8D%E5%A5%B3%E7%82%B9%E8%B1%86%E8%8A%BD%E5%90%837%E7%A2%97%E9%A5%AD%E6%91%86%E6%8B%8D%23&t=31&band_rank=9&Refer=top)
1. [S16总决赛解说评论阵容公布](https://s.weibo.com//weibo?q=S16%E6%80%BB%E5%86%B3%E8%B5%9B%E8%A7%A3%E8%AF%B4%E8%AF%84%E8%AE%BA%E9%98%B5%E5%AE%B9%E5%85%AC%E5%B8%83&t=31&band_rank=10&Refer=top)
1. [英伟达临时CEO首次发声](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%B8%B4%E6%97%B6CEO%E9%A6%96%E6%AC%A1%E5%8F%91%E5%A3%B0%23&t=31&band_rank=11&Refer=top)
1. [刘欢查出疑似癌症转移第二天岳父去世](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%AC%A2%E6%9F%A5%E5%87%BA%E7%96%91%E4%BC%BC%E7%99%8C%E7%97%87%E8%BD%AC%E7%A7%BB%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%B2%B3%E7%88%B6%E5%8E%BB%E4%B8%96%23&t=31&band_rank=12&Refer=top)
1. [王腾谈黄仁勋辞职](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%85%BE%E8%B0%88%E9%BB%84%E4%BB%81%E5%8B%8B%E8%BE%9E%E8%81%8C%23&t=31&band_rank=13&Refer=top)
1. [疑似青稚白小纯对话用了传声耳机](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E8%AF%9D%E7%94%A8%E4%BA%86%E4%BC%A0%E5%A3%B0%E8%80%B3%E6%9C%BA%23&t=31&band_rank=14&Refer=top)
1. [你王菲啊 厉娜](https://s.weibo.com//weibo?q=%E4%BD%A0%E7%8E%8B%E8%8F%B2%E5%95%8A%20%E5%8E%89%E5%A8%9C&t=31&band_rank=15&Refer=top)
1. [普通人用AI和会用AI的人](https://s.weibo.com//weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E7%94%A8AI%E5%92%8C%E4%BC%9A%E7%94%A8AI%E7%9A%84%E4%BA%BA%23&t=31&band_rank=16&Refer=top)
1. [姜妍太适合当主持了](https://s.weibo.com//weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%A4%AA%E9%80%82%E5%90%88%E5%BD%93%E4%B8%BB%E6%8C%81%E4%BA%86%23&t=31&band_rank=17&Refer=top)
1. [大冰谈夫妻异地城市选择](https://s.weibo.com//weibo?q=%E5%A4%A7%E5%86%B0%E8%B0%88%E5%A4%AB%E5%A6%BB%E5%BC%82%E5%9C%B0%E5%9F%8E%E5%B8%82%E9%80%89%E6%8B%A9&t=31&band_rank=18&Refer=top)
1. [朴树停演静养](https://s.weibo.com//weibo?q=%E6%9C%B4%E6%A0%91%E5%81%9C%E6%BC%94%E9%9D%99%E5%85%BB&t=31&band_rank=19&Refer=top)
1. [英伟达大跌13%](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%A4%A7%E8%B7%8C13%25%23&t=31&band_rank=20&Refer=top)
1. [男子怀疑女儿是外星人](https://s.weibo.com//weibo?q=%E7%94%B7%E5%AD%90%E6%80%80%E7%96%91%E5%A5%B3%E5%84%BF%E6%98%AF%E5%A4%96%E6%98%9F%E4%BA%BA&t=31&band_rank=21&Refer=top)
1. [影视飓风Tim开通个人账号](https://s.weibo.com//weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E5%BC%80%E9%80%9A%E4%B8%AA%E4%BA%BA%E8%B4%A6%E5%8F%B7%23&t=31&band_rank=22&Refer=top)
1. [面试虚报500万面试官掏计算器](https://s.weibo.com//weibo?q=%E9%9D%A2%E8%AF%95%E8%99%9A%E6%8A%A5500%E4%B8%87%E9%9D%A2%E8%AF%95%E5%AE%98%E6%8E%8F%E8%AE%A1%E7%AE%97%E5%99%A8&t=31&band_rank=23&Refer=top)
1. [谭sir联动KPL选手反差拉满](https://s.weibo.com//weibo?q=%23%E8%B0%ADsir%E8%81%94%E5%8A%A8KPL%E9%80%89%E6%89%8B%E5%8F%8D%E5%B7%AE%E6%8B%89%E6%BB%A1%23&t=31&band_rank=24&Refer=top)
1. [英伟达执行副总裁出任临时CEO](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%89%A7%E8%A1%8C%E5%89%AF%E6%80%BB%E8%A3%81%E5%87%BA%E4%BB%BB%E4%B8%B4%E6%97%B6CEO%23&t=31&band_rank=25&Refer=top)
1. [只有青稚察觉到表白不对](https://s.weibo.com//weibo?q=%23%E5%8F%AA%E6%9C%89%E9%9D%92%E7%A8%9A%E5%AF%9F%E8%A7%89%E5%88%B0%E8%A1%A8%E7%99%BD%E4%B8%8D%E5%AF%B9%23&t=31&band_rank=26&Refer=top)
1. [真正的AI高手都有一个共同点](https://s.weibo.com//weibo?q=%E7%9C%9F%E6%AD%A3%E7%9A%84AI%E9%AB%98%E6%89%8B%E9%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%E5%85%B1%E5%90%8C%E7%82%B9&t=31&band_rank=27&Refer=top)
1. [白小纯王子璇合影](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%8E%8B%E5%AD%90%E7%92%87%E5%90%88%E5%BD%B1%23&t=31&band_rank=28&Refer=top)
1. [金价再迎暴跌专家劝别抄底](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E5%86%8D%E8%BF%8E%E6%9A%B4%E8%B7%8C%E4%B8%93%E5%AE%B6%E5%8A%9D%E5%88%AB%E6%8A%84%E5%BA%95%23&t=31&band_rank=29&Refer=top)
1. [女子腿疼找中医扎针血直往外喷](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E8%85%BF%E7%96%BC%E6%89%BE%E4%B8%AD%E5%8C%BB%E6%89%8E%E9%92%88%E8%A1%80%E7%9B%B4%E5%BE%80%E5%A4%96%E5%96%B7%23&t=31&band_rank=30&Refer=top)
1. [对面好贴心以为不认识淑字](https://s.weibo.com//weibo?q=%E5%AF%B9%E9%9D%A2%E5%A5%BD%E8%B4%B4%E5%BF%83%E4%BB%A5%E4%B8%BA%E4%B8%8D%E8%AE%A4%E8%AF%86%E6%B7%91%E5%AD%97&t=31&band_rank=31&Refer=top)
1. [谭sir指挥KPL选手开团](https://s.weibo.com//weibo?q=%23%E8%B0%ADsir%E6%8C%87%E6%8C%A5KPL%E9%80%89%E6%89%8B%E5%BC%80%E5%9B%A2%23&t=31&band_rank=32&Refer=top)
1. [教育局回应小学教师上班聚众赌博](https://s.weibo.com//weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%AD%A6%E6%95%99%E5%B8%88%E4%B8%8A%E7%8F%AD%E8%81%9A%E4%BC%97%E8%B5%8C%E5%8D%9A%23&t=31&band_rank=33&Refer=top)
1. [山姆399羽绒服 代工白牌200多](https://s.weibo.com//weibo?q=%E5%B1%B1%E5%A7%86399%E7%BE%BD%E7%BB%92%E6%9C%8D%20%E4%BB%A3%E5%B7%A5%E7%99%BD%E7%89%8C200%E5%A4%9A&t=31&band_rank=34&Refer=top)
1. [代入文吉儿视角真的很崩溃](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E5%85%A5%E6%96%87%E5%90%89%E5%84%BF%E8%A7%86%E8%A7%92%E7%9C%9F%E7%9A%84%E5%BE%88%E5%B4%A9%E6%BA%83%23&t=31&band_rank=35&Refer=top)
1. [厉娜照顾许飞](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E7%85%A7%E9%A1%BE%E8%AE%B8%E9%A3%9E%23&t=31&band_rank=36&Refer=top)
1. [用空气炸锅做苹果烤蛋奶](https://s.weibo.com//weibo?q=%23%E7%94%A8%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E5%81%9A%E8%8B%B9%E6%9E%9C%E7%83%A4%E8%9B%8B%E5%A5%B6%23&t=31&band_rank=37&Refer=top)
1. [抓姐姐头发可以姐姐还手不行](https://s.weibo.com//weibo?q=%E6%8A%93%E5%A7%90%E5%A7%90%E5%A4%B4%E5%8F%91%E5%8F%AF%E4%BB%A5%E5%A7%90%E5%A7%90%E8%BF%98%E6%89%8B%E4%B8%8D%E8%A1%8C&t=31&band_rank=38&Refer=top)
1. [马天宇这里其实看出来了吧](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%BF%99%E9%87%8C%E5%85%B6%E5%AE%9E%E7%9C%8B%E5%87%BA%E6%9D%A5%E4%BA%86%E5%90%A7%23&t=31&band_rank=39&Refer=top)
1. [英伟达任命首位董事会主席](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%BB%BB%E5%91%BD%E9%A6%96%E4%BD%8D%E8%91%A3%E4%BA%8B%E4%BC%9A%E4%B8%BB%E5%B8%AD%23&t=31&band_rank=40&Refer=top)
1. [男生直球让我畏惧又喜欢](https://s.weibo.com//weibo?q=%E7%94%B7%E7%94%9F%E7%9B%B4%E7%90%83%E8%AE%A9%E6%88%91%E7%95%8F%E6%83%A7%E5%8F%88%E5%96%9C%E6%AC%A2&t=31&band_rank=41&Refer=top)
1. [大美回应离婚消息](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E7%BE%8E%E5%9B%9E%E5%BA%94%E7%A6%BB%E5%A9%9A%E6%B6%88%E6%81%AF%23&t=31&band_rank=42&Refer=top)
1. [字节冲击BAT格局](https://s.weibo.com//weibo?q=%E5%AD%97%E8%8A%82%E5%86%B2%E5%87%BBBAT%E6%A0%BC%E5%B1%80&t=31&band_rank=43&Refer=top)
1. [苹果平板卖不动了](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B9%B3%E6%9D%BF%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [同事认你是领导才是领导](https://s.weibo.com//weibo?q=%E5%90%8C%E4%BA%8B%E8%AE%A4%E4%BD%A0%E6%98%AF%E9%A2%86%E5%AF%BC%E6%89%8D%E6%98%AF%E9%A2%86%E5%AF%BC&t=31&band_rank=45&Refer=top)
1. [金价明年有望冲击5300](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E6%98%8E%E5%B9%B4%E6%9C%89%E6%9C%9B%E5%86%B2%E5%87%BB5300%23&t=31&band_rank=46&Refer=top)
1. [朱一龙23岁演的剧要播了](https://s.weibo.com//weibo?q=%E6%9C%B1%E4%B8%80%E9%BE%9923%E5%B2%81%E6%BC%94%E7%9A%84%E5%89%A7%E8%A6%81%E6%92%AD%E4%BA%86&t=31&band_rank=47&Refer=top)
1. [告别信官宣唯一导演领衔主演](https://s.weibo.com//weibo?q=%23%E5%91%8A%E5%88%AB%E4%BF%A1%E5%AE%98%E5%AE%A3%E5%94%AF%E4%B8%80%E5%AF%BC%E6%BC%94%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%23&t=31&band_rank=48&Refer=top)
1. [小猫原生家庭的痛](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%8C%AB%E5%8E%9F%E7%94%9F%E5%AE%B6%E5%BA%AD%E7%9A%84%E7%97%9B&t=31&band_rank=49&Refer=top)
1. [女孩腹痛持续一年癌细胞全身转移](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%85%B9%E7%97%9B%E6%8C%81%E7%BB%AD%E4%B8%80%E5%B9%B4%E7%99%8C%E7%BB%86%E8%83%9E%E5%85%A8%E8%BA%AB%E8%BD%AC%E7%A7%BB%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
