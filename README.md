# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-13 16:00:34

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
<!-- 最后更新时间 Fri Nov 13 2026 15:53:31 GMT+0800 (China Standard Time) -->

1. [黄仁勋辞任英伟达CEO](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E8%BE%9E%E4%BB%BB%E8%8B%B1%E4%BC%9F%E8%BE%BECEO)
1. [2027年考研报名人数347万](https://www.zhihu.com/search?q=2027%E5%B9%B4%E8%80%83%E7%A0%94%E6%8A%A5%E5%90%8D%E4%BA%BA%E6%95%B0347%E4%B8%87)
1. [RTX5080暴跌4000元](https://www.zhihu.com/search?q=RTX5080%E6%9A%B4%E8%B7%8C4000%E5%85%83)
1. [拜登遇袭](https://www.zhihu.com/search?q=%E6%8B%9C%E7%99%BB%E9%81%87%E8%A2%AD)
1. [黄仁勋再被曝出轨前高管](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E5%86%8D%E8%A2%AB%E6%9B%9D%E5%87%BA%E8%BD%A8%E5%89%8D%E9%AB%98%E7%AE%A1)
1. [网传腾讯裁员20%](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E8%85%BE%E8%AE%AF%E8%A3%81%E5%91%9820%25)
1. [库克被提名为黄仁勋潜在继任者](https://www.zhihu.com/search?q=%E5%BA%93%E5%85%8B%E8%A2%AB%E6%8F%90%E5%90%8D%E4%B8%BA%E9%BB%84%E4%BB%81%E5%8B%8B%E6%BD%9C%E5%9C%A8%E7%BB%A7%E4%BB%BB%E8%80%85)
1. [文吉儿餐桌事变](https://www.zhihu.com/search?q=%E6%96%87%E5%90%89%E5%84%BF%E9%A4%90%E6%A1%8C%E4%BA%8B%E5%8F%98)
1. [黄仁勋为什么突然辞职](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E7%AA%81%E7%84%B6%E8%BE%9E%E8%81%8C)
1. [胖东来洗发水陷罗生门](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E6%B4%97%E5%8F%91%E6%B0%B4%E9%99%B7%E7%BD%97%E7%94%9F%E9%97%A8)
1. [微软Outlook服务宕机](https://www.zhihu.com/search?q=%E5%BE%AE%E8%BD%AFOutlook%E6%9C%8D%E5%8A%A1%E5%AE%95%E6%9C%BA)
1. [黄仁勋聘请律所Paul Weiss](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E8%81%98%E8%AF%B7%E5%BE%8B%E6%89%80Paul%20Weiss)
1. [司美格鲁肽等减肥神药或致永久失明](https://www.zhihu.com/search?q=%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E7%AD%89%E5%87%8F%E8%82%A5%E7%A5%9E%E8%8D%AF%E6%88%96%E8%87%B4%E6%B0%B8%E4%B9%85%E5%A4%B1%E6%98%8E)
1. [女子撞翻300斤切糕赔2万多](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E6%92%9E%E7%BF%BB300%E6%96%A4%E5%88%87%E7%B3%95%E8%B5%942%E4%B8%87%E5%A4%9A)
1. [比亚迪大唐被曝前后轮毂装反](https://www.zhihu.com/search?q=%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%A4%A7%E5%94%90%E8%A2%AB%E6%9B%9D%E5%89%8D%E5%90%8E%E8%BD%AE%E6%AF%82%E8%A3%85%E5%8F%8D)
1. [离岸信托个税10月入库超1200亿](https://www.zhihu.com/search?q=%E7%A6%BB%E5%B2%B8%E4%BF%A1%E6%89%98%E4%B8%AA%E7%A8%8E10%E6%9C%88%E5%85%A5%E5%BA%93%E8%B6%851200%E4%BA%BF)
1. [高三生拼豆店干坐离开前留纸条道歉](https://www.zhihu.com/search?q=%E9%AB%98%E4%B8%89%E7%94%9F%E6%8B%BC%E8%B1%86%E5%BA%97%E5%B9%B2%E5%9D%90%E7%A6%BB%E5%BC%80%E5%89%8D%E7%95%99%E7%BA%B8%E6%9D%A1%E9%81%93%E6%AD%89)
1. [黄仁勋辞职](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E8%BE%9E%E8%81%8C)
1. [英伟达股价大跌](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%82%A1%E4%BB%B7%E5%A4%A7%E8%B7%8C)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Nov 13 2026 16:00:34 GMT+0800 (China Standard Time) -->

1. [被曝大裁员的腾讯，是业务出了什么问题吗？](https://www.zhihu.com/question/2104225780083287000)
1. [微软多项服务发生大规模故障，Outlook异常报告超13万起，问题可能出在哪？你现在还能正常登录吗？](https://www.zhihu.com/question/2104481527711144000)
1. [网友称高铁座椅 USB 口充手机越充越掉电，12306 称电压更低，用于应急补电，这个设计合理吗？](https://www.zhihu.com/question/2103538454634180600)
1. [前两年平价牛肉餐饮疯狂开店，现如今牛肉价格涨幅已达 27% ，牛肉为何吃不起了？](https://www.zhihu.com/question/2103784826771863000)
1. [三年多没联系的同事，突然发微信问我在不在？我该怎么回复？](https://www.zhihu.com/question/2072258048358363100)
1. [两广人为什么餐餐吃空心菜？真这么好吃吗？](https://www.zhihu.com/question/2091280758447121000)
1. [张雪回应「读书无用论」，称这种定义很 low，自己几乎每天都学习，如何看待这一表态？](https://www.zhihu.com/question/2103876810748454000)
1. [郭树清再度建议尽快启动「遗产税」与「赠与税」，新增税收补助基本养老金，如何解读？](https://www.zhihu.com/question/2104519048557851000)
1. [禅让制为何在尧舜禹之间传了三代就玩不下去了？](https://www.zhihu.com/question/2103759019978630400)
1. [大学保研中举报现象越来越频发，背后原因是什么？为了保研主动切断同学关系是否可取？](https://www.zhihu.com/question/2103788856000755500)
1. [饶毅喊话耿同学「欢迎耿同学批评」，如何理解他们两位观点的异同？](https://www.zhihu.com/question/2103930682833467100)
1. [2026.11《崩坏星穹铁道》4.7，如何评价绝灭大君归寂/假面愚者未抵/无名客领航员我见？](https://www.zhihu.com/question/2104166395877634000)
1. [东鹏饮料开始卖酒了，名字就叫好厉害，你看好吗？](https://www.zhihu.com/question/2104149087188510700)
1. [黄仁勋算是美国中期选举的牺牲品吗？为什么偏偏是他？](https://www.zhihu.com/question/2104350711869698800)
1. [为什么人到中年，很多人会觉得友情没那么重要？还有些人会觉得这是成熟的表现？](https://www.zhihu.com/question/2103417826614538500)
1. [《密档》口碑、票房均不如《给阿嬷的情书》《南京照相馆》，其导演却拿下最佳导演，金鸡奖的评审逻辑是什么？](https://www.zhihu.com/question/2103800406706841300)
1. [2627赛季NBA常规赛猛龙 112:123 76 人，如何评价这场比赛？](https://www.zhihu.com/question/2104520803836507100)
1. [2026年11月《崩坏星穹铁道》4.7版本如何评价虚照/阿哈？](https://www.zhihu.com/question/2103937112273954300)
1. [如果你的同事聚餐时从不出钱，过后还钱还总是不还零钱，怎么办？](https://www.zhihu.com/question/1908466997211140900)
1. [不断地向人道歉是什么心理？过多的道歉为什么让人反感？](https://www.zhihu.com/question/29501821)
1. [正午阳光声明「我司所有项目信息…皆以正午及各项目官方渠道露出为准」，发生了什么？为何电视剧番位引争议？](https://www.zhihu.com/question/2104113763087380500)
1. [为什么说「赶出来的车」，和「磨出来的车」不是一回事？](https://www.zhihu.com/question/2104217110700415000)
1. [为什么伽利略、爱因斯坦没有成为物理学单位？](https://www.zhihu.com/question/14403971689)
1. [一个人的思考能力是如何培养出来的？](https://www.zhihu.com/question/2019931076626261200)
1. [闪充和换电，到底谁更好？](https://www.zhihu.com/question/2088232838428734200)
1. [北方家庭不再烧煤取暖的当下，空气能热泵该怎么选？到底谁才是真正的极寒制暖王？](https://www.zhihu.com/question/2104166389158356700)
1. [芹菜叶的神仙吃法，你知道几款?](https://www.zhihu.com/question/1950476207519933400)
1. [为什么父母越用力，孩子反而越难长出自己的力量？](https://www.zhihu.com/question/2089454282911256800)
1. [让自己变好的建议有哪些？](https://www.zhihu.com/question/437758396)
1. [显示器从60Hz升级到165Hz后，日常使用感觉没差别，高刷新率具体体现在哪里？](https://www.zhihu.com/question/2093395050088735200)
1. [荷兰法院已驳回捷豹路虎突击调取比亚迪研发资料的申请，还有哪些信息值得关注？这一裁定意味着什么？](https://www.zhihu.com/question/2104195756106019600)
1. [刘欢死因首次曝光，系感染性休克，生前与膀胱癌斗争十几年，膀胱癌有多危险？该怎样预防？](https://www.zhihu.com/question/2104319975074657000)
1. [如何看待马化腾在腾讯 28 周年庆全员会上的讲话？](https://www.zhihu.com/question/2104232899662669800)
1. [如何看待28岁中国留学毕业生在墨尔本遇袭，两根手指被砍断，膝盖被砍伤，还遭朋友卷走5.4万澳元医药费？](https://www.zhihu.com/question/2103997936267019800)
1. [房子已经过剩，为什么一直还在新盖楼盘？](https://www.zhihu.com/question/2075640740537963800)
1. [卡蓓诺洗发水宣称日本进口，日本主流渠道却查无此牌，抖音官旗又突然闭店，这件事后续会如何发展？](https://www.zhihu.com/question/2103952928415422500)
1. [成都成中国唯一入选美国《国家地理》全球最佳旅行地城市，凭什么吸引世界目光？](https://www.zhihu.com/question/2101800244514121200)
1. [乡干部捅伤村民潜逃 15 年，其间违规吃空饷 140 万元并升为正科，暴露出哪些问题？](https://www.zhihu.com/question/2101649988895904500)
1. [如何看待2026年10月特斯拉国内销量暴跌？](https://www.zhihu.com/question/2103258099138173000)
1. [《福尔摩斯》原著里头的房东太太为什么会像个仆人一样伺候她的租客？](https://www.zhihu.com/question/266192012)
1. [英伟达为何会选择科莱特·克雷斯出任临时CEO？她个人有哪些成就？她能坐稳继任者位置吗？](https://www.zhihu.com/question/2104338148985775600)
1. [感觉影之刃里的各种字体都好帅啊，比如“决战、殒命”等，这是单独请人写的吗，还是说能靠AI跑一批出来？](https://www.zhihu.com/question/2101991601568536000)
1. [如何看待张一鸣称字节不应依赖蒸馏，应长期自主研发，「追上 OpenAI 还需三四年」？核心难点在哪？](https://www.zhihu.com/question/2104125774148147000)
1. [网传腾讯裁员 15-20%，腾讯辟谣「裁员50%」的说法，实际什么情况？可能涉及哪些业务？](https://www.zhihu.com/question/2104132164308530700)
1. [黄仁勋之后，谁最可能接管英伟达？](https://www.zhihu.com/question/2104177734893007400)
1. [德芙因七夕广告宣扬错误婚恋观，代运营方被罚 80 万，怎样看待这一结果？](https://www.zhihu.com/question/2104239650290098700)
1. [蒂姆·库克被提名为英伟达一把手潜在继任者，特朗普也建议其担任CEO，库克成为英伟达新掌门的概率大吗？](https://www.zhihu.com/question/2104153189284931600)
1. [如何评价《一人之下》第784（839）话？](https://www.zhihu.com/question/2104370535656318700)
1. [黄仁勋突然辞职，是被动离场，还是主动自保？](https://www.zhihu.com/question/2104338340149294800)
1. [工作中怀疑最大领导不喜欢你，怎么办？](https://www.zhihu.com/question/5812889831)
1. [港媒曝霍启山与娜然喜帖，二人 12 月 12 日将在香港办婚礼，哪些细节值得关注？](https://www.zhihu.com/question/2103921611434939600)
1. [女子在西西弗书店买了200元的书，想坐咖啡区却被拒，店方称需另行消费才能入座，这一规定合理吗？](https://www.zhihu.com/question/2104110182112482000)
1. [如何看待女子称产后患血小板减少症遭丈夫拒之门外导致其流离失所，后男方因涉遗弃罪被捕？这是怎样的病症？](https://www.zhihu.com/question/2104178867791292200)
1. [塔图姆杰伦-布朗赛场重逢，塔图姆打招呼布朗装没看到，他俩还能和好吗，「画地为牢」在生活里是普遍现象吗？](https://www.zhihu.com/question/2103806205231462400)
1. [历史上有没有哪个名人一生都很顺遂？](https://www.zhihu.com/question/5510658029)
1. [为什么解放战争时期，国民党军队的完美作战计划没能实施成功？](https://www.zhihu.com/question/2018265935614584800)
1. [罗伯特巴乔算是意大利足球史上脚下技术最好的球员吗?](https://www.zhihu.com/question/2009288151)
1. [为什么现在的孩子都喜欢玩手机？](https://www.zhihu.com/question/2102501027404583400)
1. [黄仁勋辞去英伟达 CEO 职务，会给中国 AI 芯片厂商带来新的发展机会吗？](https://www.zhihu.com/question/2104342766322808600)
1. [GPT-6.2 开启首测，有网友称其性能可压倒 Opus5.5，二者实际体验差距有多大？](https://www.zhihu.com/question/2103125335730669300)
1. [如何看待院士称剑桥大学50张病床配600位科学家，国内配5个大夫就超编了，是否应该大力扩编医生?](https://www.zhihu.com/question/2103431538201384400)
1. [杨世光2026-11-11确切的说国产EUV2027年8月发布，如何看待这个消息？](https://www.zhihu.com/question/2104130661825122800)
1. [RTX5080 售价暴跌 4000 元，这波降价核心原因是什么，现在适合入手吗？](https://www.zhihu.com/question/2103812903170318600)
1. [如何评价黄仁勋任职英伟达CEO期间的全部贡献？](https://www.zhihu.com/question/2104242987278546200)
1. [如何看待马志明收郭德纲为义子？](https://www.zhihu.com/question/2103957347660051200)
1. [怎么看 Anthropic IPO 提到 Claude适配全芯片训练和推理，接入 AMD只用 3 天？](https://www.zhihu.com/question/2103879116948771800)
1. [如何评价特朗普离任时给拜登的信？「与他在现实中的言论截然不同」指的是什么？](https://www.zhihu.com/question/2103845113960952000)
1. [你支持小区取消物业，实行业主自治管理吗？](https://www.zhihu.com/question/2089365159668093400)
1. [关羽傲，张飞烈，这两个人为何从未真正“合不来”？](https://www.zhihu.com/question/2078455553186125600)
1. [餐饮店用来「过油」的油，炸了那么多不同种类的食物，再用来炒菜难道不会串味吗?](https://www.zhihu.com/question/2014321032002036500)
1. [虾真正好吃的做法是什么？](https://www.zhihu.com/question/667695423)
1. [张雪称员工今年工资大概率普涨10%，每年固定普涨，这样的薪酬机制优势在哪？](https://www.zhihu.com/question/2103951417606252000)
1. [余承东正式官宣华为子品牌「星芒」（OSTA），可能面向哪些用户？它会如何与华为现有产品线区分？](https://www.zhihu.com/question/2103854627128959500)
1. [网红「疯狂小马哥」离世，家人称是「打 PK」被要求喝20瓶酒中途猝死，连麦者与平台应承担责任吗？](https://www.zhihu.com/question/2103943866126525700)
1. [如何看待《影之刃零》双Boss战后QTE失败会触发“小葵抱憾终身”的悲剧CG？](https://www.zhihu.com/question/2102857382921618200)
1. [某律师为了不把敏感资料上传云端，用 8 张 V100 搭建一台数千瓦功耗的本地 AI 服务器值得吗？](https://www.zhihu.com/question/2103844614528395300)

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
<!-- 最后更新时间 Fri Nov 13 2026 09:56:48 GMT+0800 (China Standard Time) -->

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
