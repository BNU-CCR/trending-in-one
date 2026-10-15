# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-15 12:42:37

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
<!-- 最后更新时间 Thu Oct 15 2026 08:49:20 GMT+0800 (China Standard Time) -->

1. [新一轮冷空气影响多大](https://so.toutiao.com/search?keyword=新一轮冷空气影响多大)
1. [美股科技题材全线下挫 纳指跌近2%](https://so.toutiao.com/search?keyword=美股科技题材全线下挫%20纳指跌近2%)
1. [2026年前三季度外贸量质齐升](https://so.toutiao.com/search?keyword=2026年前三季度外贸量质齐升)
1. [巴黎车展老外卷尺量中国车](https://so.toutiao.com/search?keyword=巴黎车展老外卷尺量中国车)
1. [多地组织筛查干部档案有何深意](https://so.toutiao.com/search?keyword=多地组织筛查干部档案有何深意)
1. [暴跌35%的恒科没救了吗](https://so.toutiao.com/search?keyword=暴跌35%的恒科没救了吗)
1. [欧冠皇马4-3逆转罗马](https://so.toutiao.com/search?keyword=欧冠皇马4-3逆转罗马)
1. [中期选举迫近特朗普发起“悲情动员”](https://so.toutiao.com/search?keyword=中期选举迫近特朗普发起“悲情动员”)
1. [美国制裁印度转头却向俄买油](https://so.toutiao.com/search?keyword=美国制裁印度转头却向俄买油)
1. [比亚迪家庭大SUV区间挤满对手](https://so.toutiao.com/search?keyword=比亚迪家庭大SUV区间挤满对手)
1. [小心“人脸授权”背后的陷阱](https://so.toutiao.com/search?keyword=小心“人脸授权”背后的陷阱)
1. [福州一工人长相酷似陈小春](https://so.toutiao.com/search?keyword=福州一工人长相酷似陈小春)
1. [刘学义凭借《兰香如故》涨粉超100万](https://so.toutiao.com/search?keyword=刘学义凭借《兰香如故》涨粉超100万)
1. [国际油价或突破120美元](https://so.toutiao.com/search?keyword=国际油价或突破120美元)
1. [全球资金疯狂涌入科技股背后](https://so.toutiao.com/search?keyword=全球资金疯狂涌入科技股背后)
1. [贵州小伙零彩礼迎娶1.8米俄罗斯姑娘](https://so.toutiao.com/search?keyword=贵州小伙零彩礼迎娶1.8米俄罗斯姑娘)
1. [伊朗称全天候监控霍尔木兹海峡](https://so.toutiao.com/search?keyword=伊朗称全天候监控霍尔木兹海峡)
1. [美国CPI超预期 全球股市阴云密布](https://so.toutiao.com/search?keyword=美国CPI超预期%20全球股市阴云密布)
1. [陈小春被网友喊话去找撞脸大哥认亲](https://so.toutiao.com/search?keyword=陈小春被网友喊话去找撞脸大哥认亲)
1. [2027年或成史上最热一年](https://so.toutiao.com/search?keyword=2027年或成史上最热一年)
1. [74岁爷爷被称为山东版摩根·弗里曼](https://so.toutiao.com/search?keyword=74岁爷爷被称为山东版摩根·弗里曼)
1. [博主：韩股越来越像一只存储芯片ETF](https://so.toutiao.com/search?keyword=博主：韩股越来越像一只存储芯片ETF)
1. [美国已暂停情报支援乌克兰了吗](https://so.toutiao.com/search?keyword=美国已暂停情报支援乌克兰了吗)
1. [41万亿美债真相是什么](https://so.toutiao.com/search?keyword=41万亿美债真相是什么)
1. [新鸭绿江大桥仅用于货运？中方回应](https://so.toutiao.com/search?keyword=新鸭绿江大桥仅用于货运？中方回应)
1. [金晨刚交完学费美国学校就倒闭了](https://so.toutiao.com/search?keyword=金晨刚交完学费美国学校就倒闭了)
1. [两个潮汕人干出1100亿芯片王国](https://so.toutiao.com/search?keyword=两个潮汕人干出1100亿芯片王国)
1. [妈妈误寄50斤羊粪到女儿母校放了20天](https://so.toutiao.com/search?keyword=妈妈误寄50斤羊粪到女儿母校放了20天)
1. [美芯片股跌势加剧](https://so.toutiao.com/search?keyword=美芯片股跌势加剧)
1. [男子每天2包烟抽38年心脏血管堵90%](https://so.toutiao.com/search?keyword=男子每天2包烟抽38年心脏血管堵90%)
1. [李仁科院士开会期间辞世 年仅65岁](https://so.toutiao.com/search?keyword=李仁科院士开会期间辞世%20年仅65岁)
1. [蛋黄到底该不该吃](https://so.toutiao.com/search?keyword=蛋黄到底该不该吃)
1. [我军匕首枪曝光](https://so.toutiao.com/search?keyword=我军匕首枪曝光)
1. [知名对冲基金经理全面看空美股](https://so.toutiao.com/search?keyword=知名对冲基金经理全面看空美股)
1. [张本兄妹搭档混双冲洛奥](https://so.toutiao.com/search?keyword=张本兄妹搭档混双冲洛奥)
1. [IMF：日本GDP明年或降至全球第六](https://so.toutiao.com/search?keyword=IMF：日本GDP明年或降至全球第六)
1. [富时A50期指连续夜盘收跌0.86%](https://so.toutiao.com/search?keyword=富时A50期指连续夜盘收跌0.86%)
1. [iPhone Duo维修价格出炉](https://so.toutiao.com/search?keyword=iPhone%20Duo维修价格出炉)
1. [胡塞武装如何让沙特防空网失守](https://so.toutiao.com/search?keyword=胡塞武装如何让沙特防空网失守)
1. [“女老虎”包惠被开除党籍](https://so.toutiao.com/search?keyword=“女老虎”包惠被开除党籍)
1. [“狗熊哆嗦毛”“闪身步”为何爆火](https://so.toutiao.com/search?keyword=“狗熊哆嗦毛”“闪身步”为何爆火)
1. [支撑一轮牛市的核心因素有哪些](https://so.toutiao.com/search?keyword=支撑一轮牛市的核心因素有哪些)
1. [个人能查看自己的档案吗](https://so.toutiao.com/search?keyword=个人能查看自己的档案吗)
1. [刘德华新片开机仪式现场遛龟](https://so.toutiao.com/search?keyword=刘德华新片开机仪式现场遛龟)
1. [成都警方通报“女子持U型锁打人”](https://so.toutiao.com/search?keyword=成都警方通报“女子持U型锁打人”)
1. [专家：美9月通胀加剧 加息预期增加](https://so.toutiao.com/search?keyword=专家：美9月通胀加剧%20加息预期增加)
1. [周鸿祎：AI最大危险是太想完成目标](https://so.toutiao.com/search?keyword=周鸿祎：AI最大危险是太想完成目标)
1. [LV在中国为何越来越难卖了](https://so.toutiao.com/search?keyword=LV在中国为何越来越难卖了)
1. [对话日本前驻华大使宫本雄二](https://so.toutiao.com/search?keyword=对话日本前驻华大使宫本雄二)
1. [乌军停止袭击俄能源设施释放何信号](https://so.toutiao.com/search?keyword=乌军停止袭击俄能源设施释放何信号)
1. [女子被母亲介绍的相亲对象骗122万](https://so.toutiao.com/search?keyword=女子被母亲介绍的相亲对象骗122万)
1. [比亚迪大汉正式上市](https://so.toutiao.com/search?keyword=比亚迪大汉正式上市)
1. [媒体：医疗体制改革已经进入深水区](https://so.toutiao.com/search?keyword=媒体：医疗体制改革已经进入深水区)
1. [李吉妮爆冷逆转头号种子萨巴伦卡](https://so.toutiao.com/search?keyword=李吉妮爆冷逆转头号种子萨巴伦卡)
1. [“殡葬第一股”300亿市值崩塌](https://so.toutiao.com/search?keyword=“殡葬第一股”300亿市值崩塌)
1. [超强厄尔尼诺来了 将有哪些影响](https://so.toutiao.com/search?keyword=超强厄尔尼诺来了%20将有哪些影响)
1. [小酒窝被医生夸比着尺子长的](https://so.toutiao.com/search?keyword=小酒窝被医生夸比着尺子长的)
1. [日本5373家企业倒闭意味着什么](https://so.toutiao.com/search?keyword=日本5373家企业倒闭意味着什么)
1. [官方通报女子高铁开免提电话1小时](https://so.toutiao.com/search?keyword=官方通报女子高铁开免提电话1小时)
1. [专家：歼20综合战力全面超越F-22](https://so.toutiao.com/search?keyword=专家：歼20综合战力全面超越F-22)
1. [高盛：谁高位接盘了美股科技](https://so.toutiao.com/search?keyword=高盛：谁高位接盘了美股科技)
1. [泽连斯基为何罕见怒怼特朗普](https://so.toutiao.com/search?keyword=泽连斯基为何罕见怒怼特朗普)
1. [特朗普发与老虎嬉戏AI视频遭痛骂](https://so.toutiao.com/search?keyword=特朗普发与老虎嬉戏AI视频遭痛骂)
1. [普京亲信如何被中国技术折服](https://so.toutiao.com/search?keyword=普京亲信如何被中国技术折服)
1. [霍尔木兹危机下中国油气产业链显韧性](https://so.toutiao.com/search?keyword=霍尔木兹危机下中国油气产业链显韧性)
1. [进餐顺序或对血糖水平产生影响](https://so.toutiao.com/search?keyword=进餐顺序或对血糖水平产生影响)
1. [海尔官宣孙颖莎成为全球品牌代言人](https://so.toutiao.com/search?keyword=海尔官宣孙颖莎成为全球品牌代言人)
1. [萨巴伦卡武网赛中砸球拍释放情绪](https://so.toutiao.com/search?keyword=萨巴伦卡武网赛中砸球拍释放情绪)
1. [奇瑞捷途全新旅行者7上市](https://so.toutiao.com/search?keyword=奇瑞捷途全新旅行者7上市)
1. [SpaceX为何对乌军用星链终端限速](https://so.toutiao.com/search?keyword=SpaceX为何对乌军用星链终端限速)
1. [解放军多海域演练有力震慑“台独”](https://so.toutiao.com/search?keyword=解放军多海域演练有力震慑“台独”)
1. [“拖鞋军”胡塞武装都有哪些装备](https://so.toutiao.com/search?keyword=“拖鞋军”胡塞武装都有哪些装备)
1. [评论员：美将台湾地区视为棋子](https://so.toutiao.com/search?keyword=评论员：美将台湾地区视为棋子)
1. [媒体：高铁公共空间不是自家客厅](https://so.toutiao.com/search?keyword=媒体：高铁公共空间不是自家客厅)
1. [大V：沙特严重低估胡塞真正实力](https://so.toutiao.com/search?keyword=大V：沙特严重低估胡塞真正实力)
1. [胡先煦李宛妲疑似买新房同居](https://so.toutiao.com/search?keyword=胡先煦李宛妲疑似买新房同居)
1. [频遭无人机袭击 莫斯科还安全吗](https://so.toutiao.com/search?keyword=频遭无人机袭击%20莫斯科还安全吗)
1. [香港发生珠宝大劫案](https://so.toutiao.com/search?keyword=香港发生珠宝大劫案)
1. [武网前二种子皆首战出局](https://so.toutiao.com/search?keyword=武网前二种子皆首战出局)
1. [节后市场震荡复盘](https://so.toutiao.com/search?keyword=节后市场震荡复盘)
1. [“萨克斯大爷”直呼太火自己不适应](https://so.toutiao.com/search?keyword=“萨克斯大爷”直呼太火自己不适应)
1. [美国9月CPI同比增长3.7%](https://so.toutiao.com/search?keyword=美国9月CPI同比增长3.7%)
1. [美元霸权信用卡还能刷多久](https://so.toutiao.com/search?keyword=美元霸权信用卡还能刷多久)
1. [记录“伦敦腔”爷爷的拍摄者发声](https://so.toutiao.com/search?keyword=记录“伦敦腔”爷爷的拍摄者发声)
1. [张雪社牛上身亲自拉赞助](https://so.toutiao.com/search?keyword=张雪社牛上身亲自拉赞助)
1. [一集装箱船驶离霍尔木兹海峡时被击中](https://so.toutiao.com/search?keyword=一集装箱船驶离霍尔木兹海峡时被击中)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Oct 15 2026 12:30:34 GMT+0800 (China Standard Time) -->

1. [老人凌晨下地干活被气枪击中身亡](https://www.zhihu.com/search?q=%E8%80%81%E4%BA%BA%E5%87%8C%E6%99%A8%E4%B8%8B%E5%9C%B0%E5%B9%B2%E6%B4%BB%E8%A2%AB%E6%B0%94%E6%9E%AA%E5%87%BB%E4%B8%AD%E8%BA%AB%E4%BA%A1)
1. [博主曝懂车帝隐瞒丰田车测试问题](https://www.zhihu.com/search?q=%E5%8D%9A%E4%B8%BB%E6%9B%9D%E6%87%82%E8%BD%A6%E5%B8%9D%E9%9A%90%E7%9E%92%E4%B8%B0%E7%94%B0%E8%BD%A6%E6%B5%8B%E8%AF%95%E9%97%AE%E9%A2%98)
1. [王星被胁迫借下的网贷该不该还](https://www.zhihu.com/search?q=%E7%8E%8B%E6%98%9F%E8%A2%AB%E8%83%81%E8%BF%AB%E5%80%9F%E4%B8%8B%E7%9A%84%E7%BD%91%E8%B4%B7%E8%AF%A5%E4%B8%8D%E8%AF%A5%E8%BF%98)
1. [DeepSeek崩了](https://www.zhihu.com/search?q=DeepSeek%E5%B4%A9%E4%BA%86)
1. [女子高铁上和男友开免提打1小时电话](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E4%B8%8A%E5%92%8C%E7%94%B7%E5%8F%8B%E5%BC%80%E5%85%8D%E6%8F%90%E6%89%931%E5%B0%8F%E6%97%B6%E7%94%B5%E8%AF%9D)
1. [宜宾一摊主被顾客差评后跳河轻生](https://www.zhihu.com/search?q=%E5%AE%9C%E5%AE%BE%E4%B8%80%E6%91%8A%E4%B8%BB%E8%A2%AB%E9%A1%BE%E5%AE%A2%E5%B7%AE%E8%AF%84%E5%90%8E%E8%B7%B3%E6%B2%B3%E8%BD%BB%E7%94%9F)
1. [教师被迫耻辱合影教体局局长已调离](https://www.zhihu.com/search?q=%E6%95%99%E5%B8%88%E8%A2%AB%E8%BF%AB%E8%80%BB%E8%BE%B1%E5%90%88%E5%BD%B1%E6%95%99%E4%BD%93%E5%B1%80%E5%B1%80%E9%95%BF%E5%B7%B2%E8%B0%83%E7%A6%BB)
1. [1.9元汽水涉事医务人员已报警](https://www.zhihu.com/search?q=1.9%E5%85%83%E6%B1%BD%E6%B0%B4%E6%B6%89%E4%BA%8B%E5%8C%BB%E5%8A%A1%E4%BA%BA%E5%91%98%E5%B7%B2%E6%8A%A5%E8%AD%A6)
1. [二本女生待业一年坚持找双休](https://www.zhihu.com/search?q=%E4%BA%8C%E6%9C%AC%E5%A5%B3%E7%94%9F%E5%BE%85%E4%B8%9A%E4%B8%80%E5%B9%B4%E5%9D%9A%E6%8C%81%E6%89%BE%E5%8F%8C%E4%BC%91)
1. [饶毅曝某华人编辑收费200万帮发论文](https://www.zhihu.com/search?q=%E9%A5%B6%E6%AF%85%E6%9B%9D%E6%9F%90%E5%8D%8E%E4%BA%BA%E7%BC%96%E8%BE%91%E6%94%B6%E8%B4%B9200%E4%B8%87%E5%B8%AE%E5%8F%91%E8%AE%BA%E6%96%87)
1. [腾讯打算拿什么撬动红果近2亿日活](https://www.zhihu.com/search?q=%E8%85%BE%E8%AE%AF%E6%89%93%E7%AE%97%E6%8B%BF%E4%BB%80%E4%B9%88%E6%92%AC%E5%8A%A8%E7%BA%A2%E6%9E%9C%E8%BF%912%E4%BA%BF%E6%97%A5%E6%B4%BB)
1. [曝大厂员工当众掌掴领导](https://www.zhihu.com/search?q=%E6%9B%9D%E5%A4%A7%E5%8E%82%E5%91%98%E5%B7%A5%E5%BD%93%E4%BC%97%E6%8E%8C%E6%8E%B4%E9%A2%86%E5%AF%BC)
1. [日本爆发倒闭潮](https://www.zhihu.com/search?q=%E6%97%A5%E6%9C%AC%E7%88%86%E5%8F%91%E5%80%92%E9%97%AD%E6%BD%AE)
1. [番茄小说签约新规](https://www.zhihu.com/search?q=%E7%95%AA%E8%8C%84%E5%B0%8F%E8%AF%B4%E7%AD%BE%E7%BA%A6%E6%96%B0%E8%A7%84)
1. [呼伦贝尔发布鼠疫风险提示](https://www.zhihu.com/search?q=%E5%91%BC%E4%BC%A6%E8%B4%9D%E5%B0%94%E5%8F%91%E5%B8%83%E9%BC%A0%E7%96%AB%E9%A3%8E%E9%99%A9%E6%8F%90%E7%A4%BA)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Oct 15 2026 12:42:37 GMT+0800 (China Standard Time) -->

1. [如何评价博主「北美花生就是我」爆料懂车帝曾测试出丰田赛那车型后摆臂断裂，但未进行发布？](https://www.zhihu.com/question/2093821528492204500)
1. [「耻辱」合影事件最新进展，雷波县教体局局长已被调离，这样的处置方式如何？](https://www.zhihu.com/question/2093768214543087600)
1. [10 月 15 日 DeepSeek 网页和 APP 显示「服务器暂时不可用」，可能是哪些原因导致的？](https://www.zhihu.com/question/2093997001205446000)
1. [名校硕士辞职去大专教书，年薪 25 万降至月薪 9 千，本人称试过了才知要什么，如何看待这种职业选择？](https://www.zhihu.com/question/2093748550467437800)
1. [豆包手机助手放开屏幕自动化操作权限，阿里、腾讯系等 App 明确拒绝，如何看待此事？存在哪些争议点？](https://www.zhihu.com/question/2093648090582599200)
1. [前中国工程院院士、中南大学原校长张尧学被逮捕，受贿数额特别巨大，哪些信息值得关注？](https://www.zhihu.com/question/2093694552544470500)
1. [短剧被指让人越看越「笨」，高密度反转的短剧真的会影响专注力吗？为啥短剧一刷就停不下来？](https://www.zhihu.com/question/2093793245977212000)
1. [《西游记》里的二郎神坑杀了花果山无数猴精，孙悟空为何不计前嫌与其称兄道弟？](https://www.zhihu.com/question/44016534)
1. [又漂亮又丑的长相是什么样子的？](https://www.zhihu.com/question/323389488)
1. [如何评价京东iPhone Duo早鸟包，不能抵手机款且不能退款，被网友指官方黄牛？平台这样做合理吗？](https://www.zhihu.com/question/2093803354644113000)
1. [怎样看待沙特阿美石油公司位于达曼的总部被胡塞武装的导弹击中，遭到大面积破坏？](https://www.zhihu.com/question/2093669434577646600)
1. [红楼梦中王子腾是四大家族最大靠山，却没有被正面描写，是一种神秘的存在。王子腾究竟是一个什么样的人物？](https://www.zhihu.com/question/5565495375)
1. [南京博物院回应「徐湖平去世」，称目前暂未掌握该消息，具体情况如何？](https://www.zhihu.com/question/2093705623174996500)
1. [网友称部分华为门店样机试用被限时，门店称「防止小孩长时间占用样机打游戏」，这种规定合理吗？](https://www.zhihu.com/question/2093023077651177500)
1. [苏轼连续被贬惠州儋州，为什么不辞官回乡，过普通人生活？](https://www.zhihu.com/question/2090920560666612500)
1. [我觉得openai最近这段时间写出来的所有论文，全部都是错误的，这难道不是很明显的吗？](https://www.zhihu.com/question/2092058455427359000)
1. [火箭为什么非得一级一级扔，做一枚能直接飞上天的「大火箭」不行吗？](https://www.zhihu.com/question/2092580800571229200)
1. [陈妤颉个子不高，咋跑得那么快？身高、腿长和跑步快慢有关吗？](https://www.zhihu.com/question/2091086803856004400)
1. [欧冠曼城 2:4 不敌巴黎圣日尔曼，哈兰德双响难救主，杜埃、登贝莱传射，如何评价这场比赛？](https://www.zhihu.com/question/2093931613084181200)
1. [「晕车」是否说明人类的身体还未适应现代的生活方式？](https://www.zhihu.com/question/1923125997043164200)
1. [网友称小米SU7刹车助力器故障频发，是真的吗？双备份制动系统为何还会出现踏板异常？](https://www.zhihu.com/question/2092709077810006000)
1. [研究显示中国高校教师平均年薪 15.54 万元，此收入是高是低，薪酬体系如何影响教学与科研平衡？](https://www.zhihu.com/question/2031055936807231700)
1. [如何评价美剧《幻视任务》第1-2集？](https://www.zhihu.com/question/2093660697146270200)
1. [外媒爆料 Deft 服完兵役后将加盟 NS，会对队伍及 LCK 格局带来哪些影响？](https://www.zhihu.com/question/2092574376940007700)
1. [三国时期的「挟天子以令诸侯」具体起了多大作用？](https://www.zhihu.com/question/2091486074048726300)
1. [《生化危机：爆发夜》有哪些槽点？](https://www.zhihu.com/question/2092938929351521000)
1. [你听过或经历过的最神奇的工伤是什么？](https://www.zhihu.com/question/273776303)
1. [如何评价安东尼奥带队战绩？冲击2030年世界杯，由他接掌成年国足是否是最优解？](https://www.zhihu.com/question/2089790346356177000)
1. [为什么很多玩家认为买断制游戏反而更划算？](https://www.zhihu.com/question/2032057148964915200)
1. [今天吃了什么好吃的？分享一下你的美食日记！?](https://www.zhihu.com/question/1907839353847261000)
1. [如何看待郑钦文中网夺冠后躺在球场上，直播镜头对准其裙底长达4 秒？出现这种画面算直播事故吗？](https://www.zhihu.com/question/2093731795820700000)
1. [微信上线绿泡泡短剧，腾讯此前多次进军短剧市场都效果平平，这次能成功吗？能撼动红果的地位吗？](https://www.zhihu.com/question/2093689082383524900)
1. [四部门要求新车研发必须包含「两冬一夏」测试，会改变汽车行业格局吗？](https://www.zhihu.com/question/2092952717853571000)
1. [OpenAI 员工涉嫌在高管会议室安装窃听器，结果被自家 AI 协助破案，如何评价这起事件？](https://www.zhihu.com/question/2093575542540875000)
1. [奇瑞汽车在马来西亚再次发生断轴事故，你怎么看待此事？](https://www.zhihu.com/question/2093240813253874700)
1. [中朝新鸭绿江大桥 10 月 15 日正式开通，哪些信息值得关注？](https://www.zhihu.com/question/2093646629383430400)
1. [美国 9 月 CPI 数据公布，同比上涨 3.7%，高于市场预期的 3.6%，释放了哪些信号？](https://www.zhihu.com/question/2093811458442093000)
1. [人类为什么不能培育一种专门象牙很长的大象？非得去猎杀野生大象？](https://www.zhihu.com/question/1968989779006829600)
1. [刘邦凭什么七年得天下？](https://www.zhihu.com/question/1937505886517068800)
1. [33 岁销冠确诊胃癌晚期后突然被辞退，公司不服劳动仲裁判赔 11 万提起诉讼，法院可能会怎样判决？](https://www.zhihu.com/question/2093379096701039600)
1. [今年以来各地出台超 880 条楼市政策，房价离企稳还有多远？](https://www.zhihu.com/question/2093643821523230700)
1. [国台办回应蔡康永现身沈伯洋竞选活动，在大是大非问题上没有任何模糊的空间，哪些信息值得关注？](https://www.zhihu.com/question/2093662309310620200)
1. [群演疑似猥亵女演员，《此处通往繁星》剧组回应将撤下争议片段并调查，若属实剧组及涉事演员需承担哪些责任？](https://www.zhihu.com/question/2093629140502933800)
1. [如何看待网红女装品牌CHICYOU因使用狸花猫背部毛皮制作毛领遭网友抵制？哪些渠道的毛皮可能涉嫌违法？](https://www.zhihu.com/question/2093001535881832000)
1. [说说谭松韵的演技怎么样？](https://www.zhihu.com/question/306541316)
1. [中国航展 30 周年将至，航空工业集团将组织更强阵容参展，大家希望看见哪些展品？](https://www.zhihu.com/question/2093638745492923400)
1. [郑钦文夺冠，上汽奥迪发文「AUDI 全系买一送一」，送的却是车模引发热议，大家怎么看？](https://www.zhihu.com/question/2092980571324380000)
1. [如何评价2026年上映的韩国电影《希望》？](https://www.zhihu.com/question/2081814537989372000)
1. [传 RTX508024GB 定档 2027 年 Q1，如何看待该卡接任新旗舰？](https://www.zhihu.com/question/2093345148323342300)
1. [有哪些看似很健康的垃圾食品？](https://www.zhihu.com/question/308419008)
1. [PS5 全机型遭底层漏洞破解，会对索尼主机生态产生哪些冲击？](https://www.zhihu.com/question/2088701899113489200)
1. [乔丹为什么90年大幅度增重后，跑跳能力没有下滑，中投也没有丢？](https://www.zhihu.com/question/585434072)
1. [怎么看 OpenAI 的 NS 数学证明被发现其实没遵循 Spanish program？](https://www.zhihu.com/question/2093654423369152500)
1. [如何看待二本毕业女生待业一年，仍坚持找一份双休工作？是不愿降低生活标准，还是对就业市场缺乏认知？](https://www.zhihu.com/question/2093283021692605200)
1. [LV 承认起诉茉莉奶白产生负面影响，第三季度中国客群需求下降 15% ，怎样看待这一变化？](https://www.zhihu.com/question/2093383237888484400)
1. [《琅琊榜》的权谋真的很幼稚吗？](https://www.zhihu.com/question/1888170995262682400)
1. [如果人的脚进化成蹄子会怎么样？](https://www.zhihu.com/question/645292302)
1. [如果贾宝玉不小心娶了夏金桂，贾家的人能搞定她吗？](https://www.zhihu.com/question/426303627)
1. [武汉的超高层住宅未来的出路在哪里？](https://www.zhihu.com/question/652170353)
1. [方便面煮着吃为什么比泡着吃更香？](https://www.zhihu.com/question/2088359008025559600)
1. [为什么《兰香如故》电视剧，女主结婚从丫鬟到豪门贵妇就劝退了观众？](https://www.zhihu.com/question/2092260909305553200)
1. [如果你有25万的存款，面对1500的衣服裤子你会不会犹豫啊？](https://www.zhihu.com/question/2092975777457378800)
1. [猪肚可以做成什么美食？](https://www.zhihu.com/question/642821169)
1. [当孩子取的好成绩的时候，你会怎么奖励他？](https://www.zhihu.com/question/2081633077701371400)
1. [和孩子在一起，你会闯红灯吗？为什么？](https://www.zhihu.com/question/2090421932114163200)
1. [一男子在悬空寺古建筑横梁做引体向上，警方已立案，涉事者将承担哪些责任？](https://www.zhihu.com/question/2093390624560871200)
1. [如何看待《兰香如故》中吕戢儿和女主互换这一剧情安排？](https://www.zhihu.com/question/2089798903109515000)
1. [孩子刷短视频上瘾看不进书，手机真的会毁掉孩子的深度阅读能力吗？](https://www.zhihu.com/question/2092143619943708000)
1. [为什么“依法”协助当事人进行诉讼不叫“法师”而叫“律师”？](https://www.zhihu.com/question/2089647041488147000)
1. [孩子的哪一个瞬间让您特别感动？](https://www.zhihu.com/question/623842636)
1. [广州球迷联盟发表声明，要把广州豹当成新主队简直是无稽之谈，如何评价这份声明？为什么广州豹不被认可？](https://www.zhihu.com/question/2093614158843475000)
1. [如果人类会光合作用，还用上班吗？](https://www.zhihu.com/question/2022089773574099000)
1. [大家都喜欢吃什么馅的饺子？](https://www.zhihu.com/question/38619578)
1. [你会经常在孩子面前诉说“我为你付出了多少”吗？](https://www.zhihu.com/question/2042269499068568000)
1. [拳头限制《英雄联盟》下载他人录像权限，这将对游戏生态产生哪些影响？](https://www.zhihu.com/question/2091245803746628400)
1. [《崩坏:星穹铁道》绝大部分的游戏（强度）理解到底在什么层次？](https://www.zhihu.com/question/2093072308671980300)
1. [有什么好吃又便宜的下饭菜？](https://www.zhihu.com/question/745509722)
1. [为何《崩铁》如今越来越多角色关键机制设在2命？大部分角色被称为2命质变?](https://www.zhihu.com/question/2088665763020391200)
1. [儿童的时代来了，提倡尊重儿童、给孩子放权，温和包容，孩子真的不会反拿捏父母底线、变得得寸进尺吗？](https://www.zhihu.com/question/2042933503147475500)

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
<!-- 最后更新时间 Thu Oct 15 2026 07:59:06 GMT+0800 (China Standard Time) -->

1. [习近平向第140届中国进出口商品交易会致贺信](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%90%91%E7%AC%AC140%E5%B1%8A%E4%B8%AD%E5%9B%BD%E8%BF%9B%E5%87%BA%E5%8F%A3%E5%95%86%E5%93%81%E4%BA%A4%E6%98%93%E4%BC%9A%E8%87%B4%E8%B4%BA%E4%BF%A1%23&Refer=new_time)
1. [入职第一天因截图社死](https://s.weibo.com//weibo?q=%E5%85%A5%E8%81%8C%E7%AC%AC%E4%B8%80%E5%A4%A9%E5%9B%A0%E6%88%AA%E5%9B%BE%E7%A4%BE%E6%AD%BB&t=31&band_rank=1&Refer=top)
1. [黄金白银断崖式大跌](https://s.weibo.com//weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E6%96%AD%E5%B4%96%E5%BC%8F%E5%A4%A7%E8%B7%8C%23&t=31&band_rank=2&Refer=top)
1. [把保障人民健康融入各项政策](https://s.weibo.com//weibo?q=%23%E6%8A%8A%E4%BF%9D%E9%9A%9C%E4%BA%BA%E6%B0%91%E5%81%A5%E5%BA%B7%E8%9E%8D%E5%85%A5%E5%90%84%E9%A1%B9%E6%94%BF%E7%AD%96%23&t=31&band_rank=3&Refer=top)
1. [好一个乖乖女热度登顶](https://s.weibo.com//weibo?q=%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3%E7%83%AD%E5%BA%A6%E7%99%BB%E9%A1%B6&t=31&band_rank=4&Refer=top)
1. [东北生化危机不知该怕还是笑](https://s.weibo.com//weibo?q=%E4%B8%9C%E5%8C%97%E7%94%9F%E5%8C%96%E5%8D%B1%E6%9C%BA%E4%B8%8D%E7%9F%A5%E8%AF%A5%E6%80%95%E8%BF%98%E6%98%AF%E7%AC%91&t=31&band_rank=5&Refer=top)
1. [柯淳余茵 好一个乖乖女](https://s.weibo.com//weibo?q=%E6%9F%AF%E6%B7%B3%E4%BD%99%E8%8C%B5%20%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3&t=31&band_rank=6&Refer=top)
1. [男子因经济拮据心生怨愤杀陌生女子](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E7%BB%8F%E6%B5%8E%E6%8B%AE%E6%8D%AE%E5%BF%83%E7%94%9F%E6%80%A8%E6%84%A4%E6%9D%80%E9%99%8C%E7%94%9F%E5%A5%B3%E5%AD%90%23&t=31&band_rank=7&Refer=top)
1. [酒店因肖战演唱会从179涨到2193元](https://s.weibo.com//weibo?q=%23%E9%85%92%E5%BA%97%E5%9B%A0%E8%82%96%E6%88%98%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BB%8E179%E6%B6%A8%E5%88%B02193%E5%85%83%23&t=31&band_rank=8&Refer=top)
1. [曼城2比4巴黎圣日耳曼](https://s.weibo.com//weibo?q=%E6%9B%BC%E5%9F%8E2%E6%AF%944%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC&t=31&band_rank=9&Refer=top)
1. [1岁幼儿误食毒鸡蛋后脑萎缩](https://s.weibo.com//weibo?q=%231%E5%B2%81%E5%B9%BC%E5%84%BF%E8%AF%AF%E9%A3%9F%E6%AF%92%E9%B8%A1%E8%9B%8B%E5%90%8E%E8%84%91%E8%90%8E%E7%BC%A9%23&t=31&band_rank=10&Refer=top)
1. [研究生欠十一个网贷全面逾期](https://s.weibo.com//weibo?q=%E7%A0%94%E7%A9%B6%E7%94%9F%E6%AC%A0%E5%8D%81%E4%B8%80%E4%B8%AA%E7%BD%91%E8%B4%B7%E5%85%A8%E9%9D%A2%E9%80%BE%E6%9C%9F&t=31&band_rank=11&Refer=top)
1. [陈小春](https://s.weibo.com//weibo?q=%E9%99%88%E5%B0%8F%E6%98%A5&t=31&band_rank=12&Refer=top)
1. [肖战这把火已经烧到天边了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E8%BF%99%E6%8A%8A%E7%81%AB%E5%B7%B2%E7%BB%8F%E7%83%A7%E5%88%B0%E5%A4%A9%E8%BE%B9%E4%BA%86%23&t=31&band_rank=13&Refer=top)
1. [好一个乖乖女](https://s.weibo.com//weibo?q=%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3&t=31&band_rank=14&Refer=top)
1. [闫妮做宣传而已太累了可不好](https://s.weibo.com//weibo?q=%23%E9%97%AB%E5%A6%AE%E5%81%9A%E5%AE%A3%E4%BC%A0%E8%80%8C%E5%B7%B2%E5%A4%AA%E7%B4%AF%E4%BA%86%E5%8F%AF%E4%B8%8D%E5%A5%BD%23&t=31&band_rank=15&Refer=top)
1. [7天6夜堵截蒙古国火灾330余公里](https://s.weibo.com//weibo?q=%237%E5%A4%A96%E5%A4%9C%E5%A0%B5%E6%88%AA%E8%92%99%E5%8F%A4%E5%9B%BD%E7%81%AB%E7%81%BE330%E4%BD%99%E5%85%AC%E9%87%8C%23&t=31&band_rank=16&Refer=top)
1. [黄金](https://s.weibo.com//weibo?q=%E9%BB%84%E9%87%91&t=31&band_rank=17&Refer=top)
1. [宝蓝结婚](https://s.weibo.com//weibo?q=%E5%AE%9D%E8%93%9D%E7%BB%93%E5%A9%9A&t=31&band_rank=18&Refer=top)
1. [aijing母亲道歉](https://s.weibo.com//weibo?q=%23aijing%E6%AF%8D%E4%BA%B2%E9%81%93%E6%AD%89%23&t=31&band_rank=19&Refer=top)
1. [国行iPhone接入通义千问](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E8%A1%8CiPhone%E6%8E%A5%E5%85%A5%E9%80%9A%E4%B9%89%E5%8D%83%E9%97%AE%23&t=31&band_rank=20&Refer=top)
1. [女孩月经量大补铁食补](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%A9%E6%9C%88%E7%BB%8F%E9%87%8F%E5%A4%A7%E8%A1%A5%E9%93%81%E9%A3%9F%E8%A1%A5&t=31&band_rank=21&Refer=top)
1. [母亲没争抚养权想住儿子家](https://s.weibo.com//weibo?q=%E6%AF%8D%E4%BA%B2%E6%B2%A1%E4%BA%89%E6%8A%9A%E5%85%BB%E6%9D%83%E6%83%B3%E4%BD%8F%E5%84%BF%E5%AD%90%E5%AE%B6&t=31&band_rank=22&Refer=top)
1. [人赚不到认知以外的钱](https://s.weibo.com//weibo?q=%E4%BA%BA%E8%B5%9A%E4%B8%8D%E5%88%B0%E8%AE%A4%E7%9F%A5%E4%BB%A5%E5%A4%96%E7%9A%84%E9%92%B1&t=31&band_rank=23&Refer=top)
1. [原来农村的柴火灶已经这么有型了](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%9C%E6%9D%91%E7%9A%84%E6%9F%B4%E7%81%AB%E7%81%B6%E5%B7%B2%E7%BB%8F%E8%BF%99%E4%B9%88%E6%9C%89%E5%9E%8B%E4%BA%86%23&t=31&band_rank=24&Refer=top)
1. [徐梦洁演技口碑](https://s.weibo.com//weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E6%BC%94%E6%8A%80%E5%8F%A3%E7%A2%91%23&t=31&band_rank=25&Refer=top)
1. [陈小春和疑似弟弟耳朵都有个窝痕](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%92%8C%E7%96%91%E4%BC%BC%E5%BC%9F%E5%BC%9F%E8%80%B3%E6%9C%B5%E9%83%BD%E6%9C%89%E4%B8%AA%E7%AA%9D%E7%97%95%23&t=31&band_rank=26&Refer=top)
1. [狗被提着一路偷吃油条没被发现](https://s.weibo.com//weibo?q=%23%E7%8B%97%E8%A2%AB%E6%8F%90%E7%9D%80%E4%B8%80%E8%B7%AF%E5%81%B7%E5%90%83%E6%B2%B9%E6%9D%A1%E6%B2%A1%E8%A2%AB%E5%8F%91%E7%8E%B0%23&t=31&band_rank=27&Refer=top)
1. [低血糖女生以为不吃饭只会饿](https://s.weibo.com//weibo?q=%E4%BD%8E%E8%A1%80%E7%B3%96%E5%A5%B3%E7%94%9F%E4%BB%A5%E4%B8%BA%E4%B8%8D%E5%90%83%E9%A5%AD%E5%8F%AA%E4%BC%9A%E9%A5%BF&t=31&band_rank=28&Refer=top)
1. [金晨自曝中专被叫垃圾婆](https://s.weibo.com//weibo?q=%E9%87%91%E6%99%A8%E8%87%AA%E6%9B%9D%E4%B8%AD%E4%B8%93%E8%A2%AB%E5%8F%AB%E5%9E%83%E5%9C%BE%E5%A9%86&t=31&band_rank=29&Refer=top)
1. [郑钦文火遍外网](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%E7%81%AB%E9%81%8D%E5%A4%96%E7%BD%91&t=31&band_rank=30&Refer=top)
1. [96岁老人独自坐43小时进西藏](https://s.weibo.com//weibo?q=96%E5%B2%81%E8%80%81%E4%BA%BA%E7%8B%AC%E8%87%AA%E5%9D%9043%E5%B0%8F%E6%97%B6%E8%BF%9B%E8%A5%BF%E8%97%8F&t=31&band_rank=31&Refer=top)
1. [雷军官宣小米汽车北方冬季六重保障](https://s.weibo.com//weibo?q=%23%E9%9B%B7%E5%86%9B%E5%AE%98%E5%AE%A3%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%8C%97%E6%96%B9%E5%86%AC%E5%AD%A3%E5%85%AD%E9%87%8D%E4%BF%9D%E9%9A%9C%23&t=31&band_rank=32&Refer=top)
1. [三十岁真的没啥好焦虑](https://s.weibo.com//weibo?q=%E4%B8%89%E5%8D%81%E5%B2%81%E7%9C%9F%E7%9A%84%E6%B2%A1%E5%95%A5%E5%A5%BD%E7%84%A6%E8%99%91&t=31&band_rank=33&Refer=top)
1. [马来西亚偶遇王一博](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%81%B6%E9%81%87%E7%8E%8B%E4%B8%80%E5%8D%9A%23&t=31&band_rank=34&Refer=top)
1. [高原否认插足王菲窦唯的婚姻](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%8E%9F%E5%90%A6%E8%AE%A4%E6%8F%92%E8%B6%B3%E7%8E%8B%E8%8F%B2%E7%AA%A6%E5%94%AF%E7%9A%84%E5%A9%9A%E5%A7%BB%23&t=31&band_rank=35&Refer=top)
1. [盛艾敬朋友也发声了](https://s.weibo.com//weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E6%9C%8B%E5%8F%8B%E4%B9%9F%E5%8F%91%E5%A3%B0%E4%BA%86%23&t=31&band_rank=36&Refer=top)
1. [iPhoneDuo维修价格出炉](https://s.weibo.com//weibo?q=%23iPhoneDuo%E7%BB%B4%E4%BF%AE%E4%BB%B7%E6%A0%BC%E5%87%BA%E7%82%89%23&t=31&band_rank=37&Refer=top)
1. [快递车我管你这个那个的](https://s.weibo.com//weibo?q=%E5%BF%AB%E9%80%92%E8%BD%A6%E6%88%91%E7%AE%A1%E4%BD%A0%E8%BF%99%E4%B8%AA%E9%82%A3%E4%B8%AA%E7%9A%84&t=31&band_rank=38&Refer=top)
1. [虎跳峡观景台跳江者尚未打捞到](https://s.weibo.com//weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A1%E8%A7%82%E6%99%AF%E5%8F%B0%E8%B7%B3%E6%B1%9F%E8%80%85%E5%B0%9A%E6%9C%AA%E6%89%93%E6%8D%9E%E5%88%B0%23&t=31&band_rank=39&Refer=top)
1. [京津冀交界百米差别挺大](https://s.weibo.com//weibo?q=%E4%BA%AC%E6%B4%A5%E5%86%80%E4%BA%A4%E7%95%8C%E7%99%BE%E7%B1%B3%E5%B7%AE%E5%88%AB%E6%8C%BA%E5%A4%A7&t=31&band_rank=40&Refer=top)
1. [流浪猫主动上门求职成功当上家猫](https://s.weibo.com//weibo?q=%23%E6%B5%81%E6%B5%AA%E7%8C%AB%E4%B8%BB%E5%8A%A8%E4%B8%8A%E9%97%A8%E6%B1%82%E8%81%8C%E6%88%90%E5%8A%9F%E5%BD%93%E4%B8%8A%E5%AE%B6%E7%8C%AB%23&t=31&band_rank=41&Refer=top)
1. [马斯克全面押宝共和党](https://s.weibo.com//weibo?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E5%85%A8%E9%9D%A2%E6%8A%BC%E5%AE%9D%E5%85%B1%E5%92%8C%E5%85%9A&t=31&band_rank=42&Refer=top)
1. [贾静雯吃饭的菜居然全是蛋白质](https://s.weibo.com//weibo?q=%23%E8%B4%BE%E9%9D%99%E9%9B%AF%E5%90%83%E9%A5%AD%E7%9A%84%E8%8F%9C%E5%B1%85%E7%84%B6%E5%85%A8%E6%98%AF%E8%9B%8B%E7%99%BD%E8%B4%A8%23&t=31&band_rank=43&Refer=top)
1. [胚胎案原配称对方反复要求开价](https://s.weibo.com//weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E7%A7%B0%E5%AF%B9%E6%96%B9%E5%8F%8D%E5%A4%8D%E8%A6%81%E6%B1%82%E5%BC%80%E4%BB%B7%23&t=31&band_rank=44&Refer=top)
1. [周杰伦在墨尔本街头弹钢琴](https://s.weibo.com//weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%9C%A8%E5%A2%A8%E5%B0%94%E6%9C%AC%E8%A1%97%E5%A4%B4%E5%BC%B9%E9%92%A2%E7%90%B4%23&t=31&band_rank=45&Refer=top)
1. [熬夜的账身体都在记着](https://s.weibo.com//weibo?q=%23%E7%86%AC%E5%A4%9C%E7%9A%84%E8%B4%A6%E8%BA%AB%E4%BD%93%E9%83%BD%E5%9C%A8%E8%AE%B0%E7%9D%80%23&t=31&band_rank=46&Refer=top)
1. [泽连斯基称基辅遭袭未收到西方警告](https://s.weibo.com//weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E5%9F%BA%E8%BE%85%E9%81%AD%E8%A2%AD%E6%9C%AA%E6%94%B6%E5%88%B0%E8%A5%BF%E6%96%B9%E8%AD%A6%E5%91%8A%23&t=31&band_rank=47&Refer=top)
1. [创业板指回撤近35%](https://s.weibo.com//weibo?q=%23%E5%88%9B%E4%B8%9A%E6%9D%BF%E6%8C%87%E5%9B%9E%E6%92%A4%E8%BF%9135%25%23&t=31&band_rank=48&Refer=top)
1. [曼城vs巴黎圣日耳曼](https://s.weibo.com//weibo?q=%23%E6%9B%BC%E5%9F%8Evs%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC%23&t=31&band_rank=49&Refer=top)
1. [CPI](https://s.weibo.com//weibo?q=CPI&t=31&band_rank=50&Refer=top)
1. [好一个乖乖女热度登顶](https://s.weibo.com//weibo?q=%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3%E7%83%AD%E5%BA%A6%E7%99%BB%E9%A1%B6&t=31&band_rank=2&Refer=top)
1. [90多年前红军的承诺生生不息](https://s.weibo.com//weibo?q=%2390%E5%A4%9A%E5%B9%B4%E5%89%8D%E7%BA%A2%E5%86%9B%E7%9A%84%E6%89%BF%E8%AF%BA%E7%94%9F%E7%94%9F%E4%B8%8D%E6%81%AF%23&t=31&band_rank=3&Refer=top)
1. [男子因经济拮据心生怨愤杀陌生女子](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E7%BB%8F%E6%B5%8E%E6%8B%AE%E6%8D%AE%E5%BF%83%E7%94%9F%E6%80%A8%E6%84%A4%E6%9D%80%E9%99%8C%E7%94%9F%E5%A5%B3%E5%AD%90%23&t=31&band_rank=4&Refer=top)
1. [好一个乖乖女](https://s.weibo.com//weibo?q=%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3&t=31&band_rank=5&Refer=top)
1. [陈小春](https://s.weibo.com//weibo?q=%E9%99%88%E5%B0%8F%E6%98%A5&t=31&band_rank=6&Refer=top)
1. [肖战这把火已经烧到天边了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E8%BF%99%E6%8A%8A%E7%81%AB%E5%B7%B2%E7%BB%8F%E7%83%A7%E5%88%B0%E5%A4%A9%E8%BE%B9%E4%BA%86%23&t=31&band_rank=7&Refer=top)
1. [aijing母亲道歉](https://s.weibo.com//weibo?q=%23aijing%E6%AF%8D%E4%BA%B2%E9%81%93%E6%AD%89%23&t=31&band_rank=8&Refer=top)
1. [虎跳峡观景台跳江者尚未打捞到](https://s.weibo.com//weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A1%E8%A7%82%E6%99%AF%E5%8F%B0%E8%B7%B3%E6%B1%9F%E8%80%85%E5%B0%9A%E6%9C%AA%E6%89%93%E6%8D%9E%E5%88%B0%23&t=31&band_rank=9&Refer=top)
1. [男方前一晚抱孩子第二天办婚宴](https://s.weibo.com//weibo?q=%23%E7%94%B7%E6%96%B9%E5%89%8D%E4%B8%80%E6%99%9A%E6%8A%B1%E5%AD%A9%E5%AD%90%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%8A%9E%E5%A9%9A%E5%AE%B4%23&t=31&band_rank=10&Refer=top)
1. [黄金](https://s.weibo.com//weibo?q=%E9%BB%84%E9%87%91&t=31&band_rank=11&Refer=top)
1. [盛艾敬朋友也发声了](https://s.weibo.com//weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E6%9C%8B%E5%8F%8B%E4%B9%9F%E5%8F%91%E5%A3%B0%E4%BA%86%23&t=31&band_rank=12&Refer=top)
1. [酒店因肖战演唱会从179涨到2193元](https://s.weibo.com//weibo?q=%23%E9%85%92%E5%BA%97%E5%9B%A0%E8%82%96%E6%88%98%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BB%8E179%E6%B6%A8%E5%88%B02193%E5%85%83%23&t=31&band_rank=13&Refer=top)
1. [武网遭遇史诗级削弱](https://s.weibo.com//weibo?q=%23%E6%AD%A6%E7%BD%91%E9%81%AD%E9%81%87%E5%8F%B2%E8%AF%97%E7%BA%A7%E5%89%8A%E5%BC%B1%23&t=31&band_rank=14&Refer=top)
1. [陈小春和疑似弟弟耳朵都有个窝痕](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%92%8C%E7%96%91%E4%BC%BC%E5%BC%9F%E5%BC%9F%E8%80%B3%E6%9C%B5%E9%83%BD%E6%9C%89%E4%B8%AA%E7%AA%9D%E7%97%95%23&t=31&band_rank=15&Refer=top)
1. [奚梦瑶和现在简直判若两人](https://s.weibo.com//weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%92%8C%E7%8E%B0%E5%9C%A8%E7%AE%80%E7%9B%B4%E5%88%A4%E8%8B%A5%E4%B8%A4%E4%BA%BA%23&t=31&band_rank=16&Refer=top)
1. [盛艾敬同学发声](https://s.weibo.com//weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E5%90%8C%E5%AD%A6%E5%8F%91%E5%A3%B0%23&t=31&band_rank=17&Refer=top)
1. [郑钦文火遍外网](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%E7%81%AB%E9%81%8D%E5%A4%96%E7%BD%91&t=31&band_rank=18&Refer=top)
1. [CPI](https://s.weibo.com//weibo?q=CPI&t=31&band_rank=19&Refer=top)
1. [星链限速致乌军多个任务中断](https://s.weibo.com//weibo?q=%23%E6%98%9F%E9%93%BE%E9%99%90%E9%80%9F%E8%87%B4%E4%B9%8C%E5%86%9B%E5%A4%9A%E4%B8%AA%E4%BB%BB%E5%8A%A1%E4%B8%AD%E6%96%AD%23&t=31&band_rank=20&Refer=top)
1. [母亲没争抚养权想住儿子家](https://s.weibo.com//weibo?q=%E6%AF%8D%E4%BA%B2%E6%B2%A1%E4%BA%89%E6%8A%9A%E5%85%BB%E6%9D%83%E6%83%B3%E4%BD%8F%E5%84%BF%E5%AD%90%E5%AE%B6&t=31&band_rank=21&Refer=top)
1. [人赚不到认知以外的钱](https://s.weibo.com//weibo?q=%E4%BA%BA%E8%B5%9A%E4%B8%8D%E5%88%B0%E8%AE%A4%E7%9F%A5%E4%BB%A5%E5%A4%96%E7%9A%84%E9%92%B1&t=31&band_rank=22&Refer=top)
1. [曼城vs巴黎圣日耳曼](https://s.weibo.com//weibo?q=%23%E6%9B%BC%E5%9F%8Evs%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC%23&t=31&band_rank=23&Refer=top)
1. [狗被提着一路偷吃油条没被发现](https://s.weibo.com//weibo?q=%23%E7%8B%97%E8%A2%AB%E6%8F%90%E7%9D%80%E4%B8%80%E8%B7%AF%E5%81%B7%E5%90%83%E6%B2%B9%E6%9D%A1%E6%B2%A1%E8%A2%AB%E5%8F%91%E7%8E%B0%23&t=31&band_rank=24&Refer=top)
1. [熬夜的账身体都在记着](https://s.weibo.com//weibo?q=%23%E7%86%AC%E5%A4%9C%E7%9A%84%E8%B4%A6%E8%BA%AB%E4%BD%93%E9%83%BD%E5%9C%A8%E8%AE%B0%E7%9D%80%23&t=31&band_rank=25&Refer=top)
1. [低血糖女生以为不吃饭只会饿](https://s.weibo.com//weibo?q=%E4%BD%8E%E8%A1%80%E7%B3%96%E5%A5%B3%E7%94%9F%E4%BB%A5%E4%B8%BA%E4%B8%8D%E5%90%83%E9%A5%AD%E5%8F%AA%E4%BC%9A%E9%A5%BF&t=31&band_rank=26&Refer=top)
1. [三十岁真的没啥好焦虑](https://s.weibo.com//weibo?q=%E4%B8%89%E5%8D%81%E5%B2%81%E7%9C%9F%E7%9A%84%E6%B2%A1%E5%95%A5%E5%A5%BD%E7%84%A6%E8%99%91&t=31&band_rank=27&Refer=top)
1. [林茨vs利物浦](https://s.weibo.com//weibo?q=%E6%9E%97%E8%8C%A8vs%E5%88%A9%E7%89%A9%E6%B5%A6&t=31&band_rank=28&Refer=top)
1. [原来农村的柴火灶已经这么有型了](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%9C%E6%9D%91%E7%9A%84%E6%9F%B4%E7%81%AB%E7%81%B6%E5%B7%B2%E7%BB%8F%E8%BF%99%E4%B9%88%E6%9C%89%E5%9E%8B%E4%BA%86%23&t=31&band_rank=29&Refer=top)
1. [胡先煦 刁卓](https://s.weibo.com//weibo?q=%E8%83%A1%E5%85%88%E7%85%A6%20%E5%88%81%E5%8D%93&t=31&band_rank=30&Refer=top)
1. [女孩月经量大补铁食补](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%A9%E6%9C%88%E7%BB%8F%E9%87%8F%E5%A4%A7%E8%A1%A5%E9%93%81%E9%A3%9F%E8%A1%A5&t=31&band_rank=31&Refer=top)
1. [被白女的服美役程度震惊到了](https://s.weibo.com//weibo?q=%23%E8%A2%AB%E7%99%BD%E5%A5%B3%E7%9A%84%E6%9C%8D%E7%BE%8E%E5%BD%B9%E7%A8%8B%E5%BA%A6%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [徐梦洁演技口碑](https://s.weibo.com//weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E6%BC%94%E6%8A%80%E5%8F%A3%E7%A2%91%23&t=31&band_rank=33&Refer=top)
1. [黄金白银断崖式大跌](https://s.weibo.com//weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E6%96%AD%E5%B4%96%E5%BC%8F%E5%A4%A7%E8%B7%8C%23&t=31&band_rank=34&Refer=top)
1. [2026KPL年度总决赛](https://s.weibo.com//weibo?q=2026KPL%E5%B9%B4%E5%BA%A6%E6%80%BB%E5%86%B3%E8%B5%9B&t=31&band_rank=35&Refer=top)
1. [威马汽车官方号发文讨薪](https://s.weibo.com//weibo?q=%E5%A8%81%E9%A9%AC%E6%B1%BD%E8%BD%A6%E5%AE%98%E6%96%B9%E5%8F%B7%E5%8F%91%E6%96%87%E8%AE%A8%E8%96%AA&t=31&band_rank=36&Refer=top)
1. [雷军官宣小米汽车北方冬季六重保障](https://s.weibo.com//weibo?q=%23%E9%9B%B7%E5%86%9B%E5%AE%98%E5%AE%A3%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%8C%97%E6%96%B9%E5%86%AC%E5%AD%A3%E5%85%AD%E9%87%8D%E4%BF%9D%E9%9A%9C%23&t=31&band_rank=37&Refer=top)
1. [萨巴伦卡武网爆冷出局](https://s.weibo.com//weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%AD%A6%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23&t=31&band_rank=38&Refer=top)
1. [快递车我管你这个那个的](https://s.weibo.com//weibo?q=%E5%BF%AB%E9%80%92%E8%BD%A6%E6%88%91%E7%AE%A1%E4%BD%A0%E8%BF%99%E4%B8%AA%E9%82%A3%E4%B8%AA%E7%9A%84&t=31&band_rank=39&Refer=top)
1. [原来这才是正确的消费观](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%89%8D%E6%98%AF%E6%AD%A3%E7%A1%AE%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%23&t=31&band_rank=40&Refer=top)
1. [贾静雯吃饭的菜居然全是蛋白质](https://s.weibo.com//weibo?q=%23%E8%B4%BE%E9%9D%99%E9%9B%AF%E5%90%83%E9%A5%AD%E7%9A%84%E8%8F%9C%E5%B1%85%E7%84%B6%E5%85%A8%E6%98%AF%E8%9B%8B%E7%99%BD%E8%B4%A8%23&t=31&band_rank=41&Refer=top)
1. [金泰妍怎么了](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%B3%B0%E5%A6%8D%E6%80%8E%E4%B9%88%E4%BA%86%23&t=31&band_rank=42&Refer=top)
1. [7天6夜堵截蒙古国火灾330余公里](https://s.weibo.com//weibo?q=%237%E5%A4%A96%E5%A4%9C%E5%A0%B5%E6%88%AA%E8%92%99%E5%8F%A4%E5%9B%BD%E7%81%AB%E7%81%BE330%E4%BD%99%E5%85%AC%E9%87%8C%23&t=31&band_rank=43&Refer=top)
1. [少去云南不然心会野](https://s.weibo.com//weibo?q=%E5%B0%91%E5%8E%BB%E4%BA%91%E5%8D%97%E4%B8%8D%E7%84%B6%E5%BF%83%E4%BC%9A%E9%87%8E&t=31&band_rank=44&Refer=top)
1. [顾客买830元脆皮捏捏全部捏碎后退货](https://s.weibo.com//weibo?q=%23%E9%A1%BE%E5%AE%A2%E4%B9%B0830%E5%85%83%E8%84%86%E7%9A%AE%E6%8D%8F%E6%8D%8F%E5%85%A8%E9%83%A8%E6%8D%8F%E7%A2%8E%E5%90%8E%E9%80%80%E8%B4%A7%23&t=31&band_rank=45&Refer=top)
1. [钟意赛前带妹引争议](https://s.weibo.com//weibo?q=%E9%92%9F%E6%84%8F%E8%B5%9B%E5%89%8D%E5%B8%A6%E5%A6%B9%E5%BC%95%E4%BA%89%E8%AE%AE&t=31&band_rank=46&Refer=top)
1. [莫氏鸡煲珠海店开业未满半年暂停营业](https://s.weibo.com//weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E7%8F%A0%E6%B5%B7%E5%BA%97%E5%BC%80%E4%B8%9A%E6%9C%AA%E6%BB%A1%E5%8D%8A%E5%B9%B4%E6%9A%82%E5%81%9C%E8%90%A5%E4%B8%9A%23&t=31&band_rank=47&Refer=top)
1. [A2OLITE取得NEWJEANS同等成绩](https://s.weibo.com//weibo?q=%23A2OLITE%E5%8F%96%E5%BE%97NEWJEANS%E5%90%8C%E7%AD%89%E6%88%90%E7%BB%A9%23&t=31&band_rank=48&Refer=top)
1. [马来西亚偶遇王一博](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%81%B6%E9%81%87%E7%8E%8B%E4%B8%80%E5%8D%9A%23&t=31&band_rank=49&Refer=top)
1. [iPhoneDuo维修价格出炉](https://s.weibo.com//weibo?q=%23iPhoneDuo%E7%BB%B4%E4%BF%AE%E4%BB%B7%E6%A0%BC%E5%87%BA%E7%82%89%23&t=31&band_rank=50&Refer=top)
1. [好一个乖乖女](https://s.weibo.com//weibo?q=%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3&t=31&band_rank=4&Refer=top)
1. [虎跳峡观景台跳江者尚未打捞到](https://s.weibo.com//weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A1%E8%A7%82%E6%99%AF%E5%8F%B0%E8%B7%B3%E6%B1%9F%E8%80%85%E5%B0%9A%E6%9C%AA%E6%89%93%E6%8D%9E%E5%88%B0%23&t=31&band_rank=5&Refer=top)
1. [胡先煦 刁卓](https://s.weibo.com//weibo?q=%E8%83%A1%E5%85%88%E7%85%A6%20%E5%88%81%E5%8D%93&t=31&band_rank=7&Refer=top)
1. [盛艾敬朋友也发声了](https://s.weibo.com//weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E6%9C%8B%E5%8F%8B%E4%B9%9F%E5%8F%91%E5%A3%B0%E4%BA%86%23&t=31&band_rank=8&Refer=top)
1. [男子因经济拮据心生怨愤杀陌生女子](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E7%BB%8F%E6%B5%8E%E6%8B%AE%E6%8D%AE%E5%BF%83%E7%94%9F%E6%80%A8%E6%84%A4%E6%9D%80%E9%99%8C%E7%94%9F%E5%A5%B3%E5%AD%90%23&t=31&band_rank=9&Refer=top)
1. [iPhoneDuo维修价格出炉](https://s.weibo.com//weibo?q=%23iPhoneDuo%E7%BB%B4%E4%BF%AE%E4%BB%B7%E6%A0%BC%E5%87%BA%E7%82%89%23&t=31&band_rank=10&Refer=top)
1. [在高铁座位上排便男子已被拘](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E9%AB%98%E9%93%81%E5%BA%A7%E4%BD%8D%E4%B8%8A%E6%8E%92%E4%BE%BF%E7%94%B7%E5%AD%90%E5%B7%B2%E8%A2%AB%E6%8B%98%23&t=31&band_rank=11&Refer=top)
1. [黄金](https://s.weibo.com//weibo?q=%E9%BB%84%E9%87%91&t=31&band_rank=12&Refer=top)
1. [奚梦瑶和现在简直判若两人](https://s.weibo.com//weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%92%8C%E7%8E%B0%E5%9C%A8%E7%AE%80%E7%9B%B4%E5%88%A4%E8%8B%A5%E4%B8%A4%E4%BA%BA%23&t=31&band_rank=13&Refer=top)
1. [aijing母亲道歉](https://s.weibo.com//weibo?q=%23aijing%E6%AF%8D%E4%BA%B2%E9%81%93%E6%AD%89%23&t=31&band_rank=14&Refer=top)
1. [肖战的烦恼](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E7%9A%84%E7%83%A6%E6%81%BC%23&t=31&band_rank=16&Refer=top)
1. [贾静雯吃饭的菜居然全是蛋白质](https://s.weibo.com//weibo?q=%23%E8%B4%BE%E9%9D%99%E9%9B%AF%E5%90%83%E9%A5%AD%E7%9A%84%E8%8F%9C%E5%B1%85%E7%84%B6%E5%85%A8%E6%98%AF%E8%9B%8B%E7%99%BD%E8%B4%A8%23&t=31&band_rank=17&Refer=top)
1. [原来这才是正确的消费观](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%89%8D%E6%98%AF%E6%AD%A3%E7%A1%AE%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%23&t=31&band_rank=18&Refer=top)
1. [绿泡泡对标红果](https://s.weibo.com//weibo?q=%23%E7%BB%BF%E6%B3%A1%E6%B3%A1%E5%AF%B9%E6%A0%87%E7%BA%A2%E6%9E%9C%23&t=31&band_rank=19&Refer=top)
1. [顾客买830元脆皮捏捏全部捏碎后退货](https://s.weibo.com//weibo?q=%23%E9%A1%BE%E5%AE%A2%E4%B9%B0830%E5%85%83%E8%84%86%E7%9A%AE%E6%8D%8F%E6%8D%8F%E5%85%A8%E9%83%A8%E6%8D%8F%E7%A2%8E%E5%90%8E%E9%80%80%E8%B4%A7%23&t=31&band_rank=20&Refer=top)
1. [人赚不到认知以外的钱](https://s.weibo.com//weibo?q=%E4%BA%BA%E8%B5%9A%E4%B8%8D%E5%88%B0%E8%AE%A4%E7%9F%A5%E4%BB%A5%E5%A4%96%E7%9A%84%E9%92%B1&t=31&band_rank=21&Refer=top)
1. [低血糖女生以为不吃饭只会饿](https://s.weibo.com//weibo?q=%E4%BD%8E%E8%A1%80%E7%B3%96%E5%A5%B3%E7%94%9F%E4%BB%A5%E4%B8%BA%E4%B8%8D%E5%90%83%E9%A5%AD%E5%8F%AA%E4%BC%9A%E9%A5%BF&t=31&band_rank=22&Refer=top)
1. [肖战演唱会下沉市场](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%23&t=31&band_rank=23&Refer=top)
1. [金泰妍怎么了](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%B3%B0%E5%A6%8D%E6%80%8E%E4%B9%88%E4%BA%86%23&t=31&band_rank=24&Refer=top)
1. [警方通报一女子持U型锁伤人](https://s.weibo.com//weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%80%E5%A5%B3%E5%AD%90%E6%8C%81U%E5%9E%8B%E9%94%81%E4%BC%A4%E4%BA%BA%23&t=31&band_rank=25&Refer=top)
1. [iPhoneDuo早鸟包重新上架](https://s.weibo.com//weibo?q=%23iPhoneDuo%E6%97%A9%E9%B8%9F%E5%8C%85%E9%87%8D%E6%96%B0%E4%B8%8A%E6%9E%B6%23&t=31&band_rank=26&Refer=top)
1. [李吉妮2比1萨巴伦卡](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%90%89%E5%A6%AE2%E6%AF%941%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%23&t=31&band_rank=27&Refer=top)
1. [三十岁真的没啥好焦虑](https://s.weibo.com//weibo?q=%E4%B8%89%E5%8D%81%E5%B2%81%E7%9C%9F%E7%9A%84%E6%B2%A1%E5%95%A5%E5%A5%BD%E7%84%A6%E8%99%91&t=31&band_rank=28&Refer=top)
1. [韩半马猝死女网红生前就读顶尖学府](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%8D%8A%E9%A9%AC%E7%8C%9D%E6%AD%BB%E5%A5%B3%E7%BD%91%E7%BA%A2%E7%94%9F%E5%89%8D%E5%B0%B1%E8%AF%BB%E9%A1%B6%E5%B0%96%E5%AD%A6%E5%BA%9C%23&t=31&band_rank=29&Refer=top)
1. [北约与俄罗斯核对抗](https://s.weibo.com//weibo?q=%23%E5%8C%97%E7%BA%A6%E4%B8%8E%E4%BF%84%E7%BD%97%E6%96%AF%E6%A0%B8%E5%AF%B9%E6%8A%97%23&t=31&band_rank=30&Refer=top)
1. [郑钦文火遍外网](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%E7%81%AB%E9%81%8D%E5%A4%96%E7%BD%91&t=31&band_rank=31&Refer=top)
1. [黄霄雲 钟意](https://s.weibo.com//weibo?q=%E9%BB%84%E9%9C%84%E9%9B%B2%20%E9%92%9F%E6%84%8F&t=31&band_rank=33&Refer=top)
1. [香港周生生发生珠宝劫案](https://s.weibo.com//weibo?q=%23%E9%A6%99%E6%B8%AF%E5%91%A8%E7%94%9F%E7%94%9F%E5%8F%91%E7%94%9F%E7%8F%A0%E5%AE%9D%E5%8A%AB%E6%A1%88%23&t=31&band_rank=34&Refer=top)
1. [狗被提着一路偷吃油条没被发现](https://s.weibo.com//weibo?q=%23%E7%8B%97%E8%A2%AB%E6%8F%90%E7%9D%80%E4%B8%80%E8%B7%AF%E5%81%B7%E5%90%83%E6%B2%B9%E6%9D%A1%E6%B2%A1%E8%A2%AB%E5%8F%91%E7%8E%B0%23&t=31&band_rank=35&Refer=top)
1. [马来西亚偶遇王一博](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%81%B6%E9%81%87%E7%8E%8B%E4%B8%80%E5%8D%9A%23&t=31&band_rank=36&Refer=top)
1. [5个缺钾症状](https://s.weibo.com//weibo?q=%235%E4%B8%AA%E7%BC%BA%E9%92%BE%E7%97%87%E7%8A%B6%23&t=31&band_rank=37&Refer=top)
1. [莫氏鸡煲珠海店开业未满半年暂停营业](https://s.weibo.com//weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E7%8F%A0%E6%B5%B7%E5%BA%97%E5%BC%80%E4%B8%9A%E6%9C%AA%E6%BB%A1%E5%8D%8A%E5%B9%B4%E6%9A%82%E5%81%9C%E8%90%A5%E4%B8%9A%23&t=31&band_rank=38&Refer=top)
1. [原来农村的柴火灶已经这么有型了](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%9C%E6%9D%91%E7%9A%84%E6%9F%B4%E7%81%AB%E7%81%B6%E5%B7%B2%E7%BB%8F%E8%BF%99%E4%B9%88%E6%9C%89%E5%9E%8B%E4%BA%86%23&t=31&band_rank=40&Refer=top)
1. [萨巴伦卡武网爆冷出局](https://s.weibo.com//weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%AD%A6%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23&t=31&band_rank=41&Refer=top)
1. [狼队回应不敌LGDNBW](https://s.weibo.com//weibo?q=%23%E7%8B%BC%E9%98%9F%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8CLGDNBW%23&t=31&band_rank=42&Refer=top)
1. [A2OLITE取得NEWJEANS同等成绩](https://s.weibo.com//weibo?q=%23A2OLITE%E5%8F%96%E5%BE%97NEWJEANS%E5%90%8C%E7%AD%89%E6%88%90%E7%BB%A9%23&t=31&band_rank=43&Refer=top)
1. [裴淳华说想在中国安度晚年](https://s.weibo.com//weibo?q=%E8%A3%B4%E6%B7%B3%E5%8D%8E%E8%AF%B4%E6%83%B3%E5%9C%A8%E4%B8%AD%E5%9B%BD%E5%AE%89%E5%BA%A6%E6%99%9A%E5%B9%B4&t=31&band_rank=44&Refer=top)
1. [钟意赛前带妹引争议](https://s.weibo.com//weibo?q=%E9%92%9F%E6%84%8F%E8%B5%9B%E5%89%8D%E5%B8%A6%E5%A6%B9%E5%BC%95%E4%BA%89%E8%AE%AE&t=31&band_rank=45&Refer=top)
1. [ILLIT新歌被评团播bgm](https://s.weibo.com//weibo?q=ILLIT%E6%96%B0%E6%AD%8C%E8%A2%AB%E8%AF%84%E5%9B%A2%E6%92%ADbgm&t=31&band_rank=46&Refer=top)
1. [CPI](https://s.weibo.com//weibo?q=CPI&t=31&band_rank=47&Refer=top)
1. [胡先煦心心念念的宋亚轩终于来了](https://s.weibo.com//weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E5%BF%83%E5%BF%83%E5%BF%B5%E5%BF%B5%E7%9A%84%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%BB%88%E4%BA%8E%E6%9D%A5%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [逐玉给田曦薇庆生](https://s.weibo.com//weibo?q=%23%E9%80%90%E7%8E%89%E7%BB%99%E7%94%B0%E6%9B%A6%E8%96%87%E5%BA%86%E7%94%9F%23&t=31&band_rank=49&Refer=top)
1. [王一博看起来吃的很香](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9C%8B%E8%B5%B7%E6%9D%A5%E5%90%83%E7%9A%84%E5%BE%88%E9%A6%99%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
