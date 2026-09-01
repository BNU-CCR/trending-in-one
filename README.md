# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-01 13:11:58

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
<!-- 最后更新时间 Tue Sep 01 2026 08:03:49 GMT+0800 (China Standard Time) -->

1. [吉隆口岸国门所在地仅剩地基](https://so.toutiao.com/search?keyword=吉隆口岸国门所在地仅剩地基)
1. [郑钦文时隔457天再取大满贯正赛胜利](https://so.toutiao.com/search?keyword=郑钦文时隔457天再取大满贯正赛胜利)
1. [感受中国服贸增长强劲动能](https://so.toutiao.com/search?keyword=感受中国服贸增长强劲动能)
1. [德总理称以色列是中东唯一民主国家](https://so.toutiao.com/search?keyword=德总理称以色列是中东唯一民主国家)
1. [一家16口包中巴送新生上大学](https://so.toutiao.com/search?keyword=一家16口包中巴送新生上大学)
1. [网友意外拍到泥石流暴发瞬间](https://so.toutiao.com/search?keyword=网友意外拍到泥石流暴发瞬间)
1. [华为小米荣耀多款手机今日集体调价](https://so.toutiao.com/search?keyword=华为小米荣耀多款手机今日集体调价)
1. [普京抵达吉尔吉斯斯坦获赠雪豹玩具](https://so.toutiao.com/search?keyword=普京抵达吉尔吉斯斯坦获赠雪豹玩具)
1. [胖东来员工看演唱会高喊休的自由假](https://so.toutiao.com/search?keyword=胖东来员工看演唱会高喊休的自由假)
1. [吉隆泥石流冲击痕迹最高达60米](https://so.toutiao.com/search?keyword=吉隆泥石流冲击痕迹最高达60米)
1. [“外卖员向饮料里加百草枯”系谣言](https://so.toutiao.com/search?keyword=“外卖员向饮料里加百草枯”系谣言)
1. [包贝尔因出轨风波新剧被除名](https://so.toutiao.com/search?keyword=包贝尔因出轨风波新剧被除名)
1. [男子多次被同一辆车挡路提醒后遭报复](https://so.toutiao.com/search?keyword=男子多次被同一辆车挡路提醒后遭报复)
1. [榴莲价格“大跳水”](https://so.toutiao.com/search?keyword=榴莲价格“大跳水”)
1. [尼泊尔一侧失联中国公民近百人](https://so.toutiao.com/search?keyword=尼泊尔一侧失联中国公民近百人)
1. [全球将迎来本年度第三次“时间重叠”](https://so.toutiao.com/search?keyword=全球将迎来本年度第三次“时间重叠”)
1. [日本男星电车内性侵女高中生被捕](https://so.toutiao.com/search?keyword=日本男星电车内性侵女高中生被捕)
1. [中国男篮两连胜暂列小组第三](https://so.toutiao.com/search?keyword=中国男篮两连胜暂列小组第三)
1. [美陆军部长被曝已向特朗普递交辞呈](https://so.toutiao.com/search?keyword=美陆军部长被曝已向特朗普递交辞呈)
1. [战友 我们等你们回来签收快递](https://so.toutiao.com/search?keyword=战友%20我们等你们回来签收快递)
1. [演员王鸥：我目前独自养育一个孩子](https://so.toutiao.com/search?keyword=演员王鸥：我目前独自养育一个孩子)
1. [郑钦文2-1逆转柳托娃](https://so.toutiao.com/search?keyword=郑钦文2-1逆转柳托娃)
1. [美股三大指数集体收跌](https://so.toutiao.com/search?keyword=美股三大指数集体收跌)
1. [美国炸鸡巨头中国首店开业](https://so.toutiao.com/search?keyword=美国炸鸡巨头中国首店开业)
1. [情侣住酒店145天将房间变成垃圾场](https://so.toutiao.com/search?keyword=情侣住酒店145天将房间变成垃圾场)
1. [电脑两个月从一万二涨到一万七](https://so.toutiao.com/search?keyword=电脑两个月从一万二涨到一万七)
1. [六大行房贷余额少了5000多亿](https://so.toutiao.com/search?keyword=六大行房贷余额少了5000多亿)
1. [“子涵梓萱”的时代已经过去](https://so.toutiao.com/search?keyword=“子涵梓萱”的时代已经过去)
1. [库克回应任苹果CEO最后一天](https://so.toutiao.com/search?keyword=库克回应任苹果CEO最后一天)
1. [女子疑要2万港元筹码被拒诬告男网友](https://so.toutiao.com/search?keyword=女子疑要2万港元筹码被拒诬告男网友)
1. [茶饮店模特半裸出任一日店长引争议](https://so.toutiao.com/search?keyword=茶饮店模特半裸出任一日店长引争议)
1. [文具店老板坚持15年免费代包书皮](https://so.toutiao.com/search?keyword=文具店老板坚持15年免费代包书皮)
1. [世亚预F组最新排名：中国男篮第三](https://so.toutiao.com/search?keyword=世亚预F组最新排名：中国男篮第三)
1. [台风“沙德尔”停止编号后再度加强](https://so.toutiao.com/search?keyword=台风“沙德尔”停止编号后再度加强)
1. [利物浦官宣新边锋巴尔科拉](https://so.toutiao.com/search?keyword=利物浦官宣新边锋巴尔科拉)
1. [西甲积分榜：巴萨3轮全胜领跑](https://so.toutiao.com/search?keyword=西甲积分榜：巴萨3轮全胜领跑)
1. [“西湖兜篮”靠什么完成蜕变](https://so.toutiao.com/search?keyword=“西湖兜篮”靠什么完成蜕变)
1. [这些位置长了息肉一定要当心](https://so.toutiao.com/search?keyword=这些位置长了息肉一定要当心)
1. [班主任何时变成了“烫手山芋”](https://so.toutiao.com/search?keyword=班主任何时变成了“烫手山芋”)
1. [黄曲霉素就藏在厨房5个角落](https://so.toutiao.com/search?keyword=黄曲霉素就藏在厨房5个角落)
1. [拉菲尼亚抽射破门梅开二度](https://so.toutiao.com/search?keyword=拉菲尼亚抽射破门梅开二度)
1. [家电三巨头集体“造人”](https://so.toutiao.com/search?keyword=家电三巨头集体“造人”)
1. [探访中亚“义乌”解锁“中国密码”](https://so.toutiao.com/search?keyword=探访中亚“义乌”解锁“中国密码”)
1. [杨瀚森绝杀 中国男篮险胜黎巴嫩](https://so.toutiao.com/search?keyword=杨瀚森绝杀%20中国男篮险胜黎巴嫩)
1. [罗永浩再怒斥电视机厂商](https://so.toutiao.com/search?keyword=罗永浩再怒斥电视机厂商)
1. [开学了舅舅送别十位外甥](https://so.toutiao.com/search?keyword=开学了舅舅送别十位外甥)
1. [662分考生高考出分后和父亲实地探校](https://so.toutiao.com/search?keyword=662分考生高考出分后和父亲实地探校)
1. [为什么建议35岁就开始控糖](https://so.toutiao.com/search?keyword=为什么建议35岁就开始控糖)
1. [亚马尔巴萨生涯已斩获50球](https://so.toutiao.com/search?keyword=亚马尔巴萨生涯已斩获50球)
1. [特斯拉现后轮塌陷“通病”](https://so.toutiao.com/search?keyword=特斯拉现后轮塌陷“通病”)
1. [特朗普在加拿大的实名认证地标要没了](https://so.toutiao.com/search?keyword=特朗普在加拿大的实名认证地标要没了)
1. [江苏省委组织部部长刘建洋被查](https://so.toutiao.com/search?keyword=江苏省委组织部部长刘建洋被查)
1. [华为上半年营收4678亿元](https://so.toutiao.com/search?keyword=华为上半年营收4678亿元)
1. [中国男人为什么突然不爱皮鞋了](https://so.toutiao.com/search?keyword=中国男人为什么突然不爱皮鞋了)
1. [吉隆口岸核心区现存建筑仅剩水塔](https://so.toutiao.com/search?keyword=吉隆口岸核心区现存建筑仅剩水塔)
1. [俄罗斯为何要向中国购买破冰货轮](https://so.toutiao.com/search?keyword=俄罗斯为何要向中国购买破冰货轮)
1. [马杜罗狱中近照曝光：双手比耶](https://so.toutiao.com/search?keyword=马杜罗狱中近照曝光：双手比耶)
1. [海来阿木被歌迷递烟举动吓走](https://so.toutiao.com/search?keyword=海来阿木被歌迷递烟举动吓走)
1. [杨鸣现身中国男篮世预赛现场](https://so.toutiao.com/search?keyword=杨鸣现身中国男篮世预赛现场)
1. [外媒：中国AI迫使美国重新思考AI战略](https://so.toutiao.com/search?keyword=外媒：中国AI迫使美国重新思考AI战略)
1. [绿营人士力挺统一释放什么信号](https://so.toutiao.com/search?keyword=绿营人士力挺统一释放什么信号)
1. [笔试第一超第二名20多分引质疑](https://so.toutiao.com/search?keyword=笔试第一超第二名20多分引质疑)
1. [*ST闻泰重大诉讼新进展](https://so.toutiao.com/search?keyword=*ST闻泰重大诉讼新进展)
1. [媒体：体育反腐挑破脓疮利于长出新肌](https://so.toutiao.com/search?keyword=媒体：体育反腐挑破脓疮利于长出新肌)
1. [人形机器人到底是谁在批量买单](https://so.toutiao.com/search?keyword=人形机器人到底是谁在批量买单)
1. [韩副总理欲坐飞机赴美却得知职位不保](https://so.toutiao.com/search?keyword=韩副总理欲坐飞机赴美却得知职位不保)
1. [王兴兴：宇树的王](https://so.toutiao.com/search?keyword=王兴兴：宇树的王)
1. [邱震海：特朗普政府极度缺乏长期战略](https://so.toutiao.com/search?keyword=邱震海：特朗普政府极度缺乏长期战略)
1. [大连蓝天救援车被指售卖祭祀用品](https://so.toutiao.com/search?keyword=大连蓝天救援车被指售卖祭祀用品)
1. [中方敦促日方严惩擅闯中国使馆者](https://so.toutiao.com/search?keyword=中方敦促日方严惩擅闯中国使馆者)
1. [陈雨菲等多位国羽主力退出中国大师赛](https://so.toutiao.com/search?keyword=陈雨菲等多位国羽主力退出中国大师赛)
1. [王鸥何九华没有商业关联](https://so.toutiao.com/search?keyword=王鸥何九华没有商业关联)
1. [王俊杰替补拿下11分5篮板1抢断](https://so.toutiao.com/search?keyword=王俊杰替补拿下11分5篮板1抢断)
1. [《重案六组：消失的警号》是黑马吗](https://so.toutiao.com/search?keyword=《重案六组：消失的警号》是黑马吗)
1. [巴基斯坦总理与伊朗总统举行会晤](https://so.toutiao.com/search?keyword=巴基斯坦总理与伊朗总统举行会晤)
1. [丁俊晖晋级斯诺克英国公开赛64强](https://so.toutiao.com/search?keyword=丁俊晖晋级斯诺克英国公开赛64强)
1. [赵继伟高难度中投+抢断](https://so.toutiao.com/search?keyword=赵继伟高难度中投+抢断)
1. [新疆姑娘跨越4000多公里到南昌上学](https://so.toutiao.com/search?keyword=新疆姑娘跨越4000多公里到南昌上学)
1. [片仔癀上半年营收净利双降](https://so.toutiao.com/search?keyword=片仔癀上半年营收净利双降)
1. [日本万亿日元追AI是作秀还是自救](https://so.toutiao.com/search?keyword=日本万亿日元追AI是作秀还是自救)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Sep 01 2026 13:01:37 GMT+0800 (China Standard Time) -->

1. [孙宇晨重仓资产被欧盟英国制裁](https://www.zhihu.com/search?q=%E5%AD%99%E5%AE%87%E6%99%A8%E9%87%8D%E4%BB%93%E8%B5%84%E4%BA%A7%E8%A2%AB%E6%AC%A7%E7%9B%9F%E8%8B%B1%E5%9B%BD%E5%88%B6%E8%A3%81)
1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [王鸥官宣独自养育孩子](https://www.zhihu.com/search?q=%E7%8E%8B%E9%B8%A5%E5%AE%98%E5%AE%A3%E7%8B%AC%E8%87%AA%E5%85%BB%E8%82%B2%E5%AD%A9%E5%AD%90)
1. [Zhihu CLI 功能上新](https://www.zhihu.com/search?q=Zhihu%20CLI%20%E5%8A%9F%E8%83%BD%E4%B8%8A%E6%96%B0)
1. [官方通报女子被踢出群被迫离职](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%B8%A2%E5%87%BA%E7%BE%A4%E8%A2%AB%E8%BF%AB%E7%A6%BB%E8%81%8C)
1. [郑钦文逆转柳托娃晋级美网次轮](https://www.zhihu.com/search?q=%E9%83%91%E9%92%A6%E6%96%87%E9%80%86%E8%BD%AC%E6%9F%B3%E6%89%98%E5%A8%83%E6%99%8B%E7%BA%A7%E7%BE%8E%E7%BD%91%E6%AC%A1%E8%BD%AE)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [多款手机正式涨价](https://www.zhihu.com/search?q=%E5%A4%9A%E6%AC%BE%E6%89%8B%E6%9C%BA%E6%AD%A3%E5%BC%8F%E6%B6%A8%E4%BB%B7)
1. [库克正式卸任苹果 CEO](https://www.zhihu.com/search?q=%E5%BA%93%E5%85%8B%E6%AD%A3%E5%BC%8F%E5%8D%B8%E4%BB%BB%E8%8B%B9%E6%9E%9C%20CEO)
1. [新版《国防动员法》10 月 1 日实施](https://www.zhihu.com/search?q=%E6%96%B0%E7%89%88%E3%80%8A%E5%9B%BD%E9%98%B2%E5%8A%A8%E5%91%98%E6%B3%95%E3%80%8B10%20%E6%9C%88%201%20%E6%97%A5%E5%AE%9E%E6%96%BD)
1. [中国男人正在抛弃皮鞋](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E4%BA%BA%E6%AD%A3%E5%9C%A8%E6%8A%9B%E5%BC%83%E7%9A%AE%E9%9E%8B)
1. [国家动物博物馆两小孩致标本受损](https://www.zhihu.com/search?q=%E5%9B%BD%E5%AE%B6%E5%8A%A8%E7%89%A9%E5%8D%9A%E7%89%A9%E9%A6%86%E4%B8%A4%E5%B0%8F%E5%AD%A9%E8%87%B4%E6%A0%87%E6%9C%AC%E5%8F%97%E6%8D%9F)
1. [中国羽协副主席夏煊泽被查](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%BE%BD%E5%8D%8F%E5%89%AF%E4%B8%BB%E5%B8%AD%E5%A4%8F%E7%85%8A%E6%B3%BD%E8%A2%AB%E6%9F%A5)
1. [官方通报星宇股份批量劝退应届生](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E6%89%B9%E9%87%8F%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F)
1. [蒋炎岩：无Token CS学生应退学](https://www.zhihu.com/search?q=%E8%92%8B%E7%82%8E%E5%B2%A9%EF%BC%9A%E6%97%A0Token%20CS%E5%AD%A6%E7%94%9F%E5%BA%94%E9%80%80%E5%AD%A6)
1. [刘翔向网友求助职场选择](https://www.zhihu.com/search?q=%E5%88%98%E7%BF%94%E5%90%91%E7%BD%91%E5%8F%8B%E6%B1%82%E5%8A%A9%E8%81%8C%E5%9C%BA%E9%80%89%E6%8B%A9)
1. [《花少 2》爆料](https://www.zhihu.com/search?q=%E3%80%8A%E8%8A%B1%E5%B0%91%202%E3%80%8B%E7%88%86%E6%96%99)
1. [中国女排憾负泰国无缘直通奥运会](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E6%86%BE%E8%B4%9F%E6%B3%B0%E5%9B%BD%E6%97%A0%E7%BC%98%E7%9B%B4%E9%80%9A%E5%A5%A5%E8%BF%90%E4%BC%9A)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Sep 01 2026 13:11:58 GMT+0800 (China Standard Time) -->

1. [三大航上半年全部亏损，国航净亏22.86亿，东航净亏21.79亿，南航净亏36.96亿，为什么会这样？](https://www.zhihu.com/question/2077685778461750800)
1. [华为上半年营收 4678 亿元，归母净利润 234.28 亿元，如何看待其业绩表现？](https://www.zhihu.com/question/2077814556945135600)
1. [如何评价凡人修仙传189集争议巨大，对比177集还愿意改片，这次官方零公开回应，不修改成片，冷处理？](https://www.zhihu.com/question/2077546484770387000)
1. [国内首部 AIGC 长剧《后西游记》开播，登陆湖南卫视黄金档，好看吗？会对影视行业有怎样的影响？](https://www.zhihu.com/question/2077565922349413600)
1. [华为、小米、荣耀等手机品牌正式涨价，涨幅均超 200 元，最高涨千元，将对用户及手机市场带来哪些影响？](https://www.zhihu.com/question/2078035027267248600)
1. [为什么一斤粮食还没有一瓶瓶装水贵？](https://www.zhihu.com/question/2074824250477785600)
1. [大泽乡起义时，陈胜说遇雨失期法皆斩与睡虎地秦简记载不同。那么陈胜是真不知法还是故意这么说？](https://www.zhihu.com/question/1969786526624874800)
1. [如何评价半个月不到，天蚕土豆的新书在读从1100多万跌到200万？](https://www.zhihu.com/question/2077757241512440000)
1. [官方通报女子被踢出 845 个群被迫离职，用人单位已履行判决，事件中暴露的问题该如何有效解决？](https://www.zhihu.com/question/2078050476826649300)
1. [杨瀚森绝杀黎巴嫩，小杨未来能到哪一步?他的发展你有什么建议?](https://www.zhihu.com/question/2077870074057187800)
1. [有什么看描述平平无奇，但其实非常超模的游戏技能/道具?](https://www.zhihu.com/question/2063786226524624600)
1. [特斯拉在港澳推出更平价版 Model3，最低售价不足18万元，这个价格竞争力如何？会有人愿意买单吗？](https://www.zhihu.com/question/2077517477119054800)
1. [尼泊尔错坚河冲击坑周边冰川仍有崩落可能，存在重大风险隐患，对救援影响有多大？哪些地区需要警惕？](https://www.zhihu.com/question/2077806910720275000)
1. [2026年美网首轮，郑钦文三盘逆转柳托娃，取得今年大满贯首胜，如何评价？](https://www.zhihu.com/question/2077933998521717000)
1. [吉林一虎园幼虎疑被饲养员一脚踢昏，园方称饲养员遭幼虎咬住引发本能反应，幼虎咬人有多疼？踢昏它要多大力？](https://www.zhihu.com/question/2077757982943573800)
1. [如何看待研究根据中美两国数据发现工时和消费的相关性，这是「多休息才能多消费」吗？](https://www.zhihu.com/question/2078053778146551300)
1. [怎么看待麻省理工报告称人工智能现在可以合理完成几乎所有本科书面作业？](https://www.zhihu.com/question/2077850860353279700)
1. [演员王鸥发文称正独自养育一个孩子，对此你有哪些祝福？](https://www.zhihu.com/question/2077802961162301700)
1. [吉隆口岸未来应该如何重建以应对可能的地质风险？](https://www.zhihu.com/question/2077704208401414000)
1. [韩医生发表案件公开声明，已提交申诉材料，程序全面启动，本案申诉改判的可能性有多大？](https://www.zhihu.com/question/2076229979373843700)
1. [济南一小区选择不要物业公司，居民自己管自己，一户一天一块钱，怎样看待这种方式？有哪些利弊？](https://www.zhihu.com/question/2077786847460026400)
1. [樊振东德国杯无缘 8 强，他在比赛中发挥出了哪些问题？](https://www.zhihu.com/question/2077380380118737700)
1. [为什么教堂没有功德箱？那教堂的收入从哪里来？](https://www.zhihu.com/question/8674291793)
1. [两代人能出两个进士两个举人，有多难？](https://www.zhihu.com/question/1922629015560259300)
1. [孩子选择困难症，连去饭店点菜这种简单的事情都犹豫不决。到底该怎么办？](https://www.zhihu.com/question/2076336090995222300)
1. [一般开车几年后会由很猛变得胆小？](https://www.zhihu.com/question/653871360)
1. [为什么好多游戏都有暴击率，但是没有对应的“半伤率“？](https://www.zhihu.com/question/2077784671014990600)
1. [手游是不是已经陷入 “不氪就没法舒服玩” 的死循环？](https://www.zhihu.com/question/2076039584018850000)
1. [童年被剥夺玩耍时间全力拼学业，长大之后会不会留下心理缺憾？](https://www.zhihu.com/question/2076201142720246500)
1. [年薪60+万，一手提拔我的领导跟公司大老板有分歧，要我辞职跟他去创业，我该怎么办？](https://www.zhihu.com/question/2075219931705119500)
1. [杨瀚森准绝杀！男篮世预赛第二阶段，中国男篮 89:87 战胜黎巴嫩男篮，如何评价本场比赛？](https://www.zhihu.com/question/2077708039566659600)
1. [如何看待现在县城的中学逐渐衰弱？](https://www.zhihu.com/question/12137646002)
1. [广东一高中被指限制学生上课时上卫生间次数，「一学期仅有一次」，学校这么做合理吗？上课时去厕所要约束吗？](https://www.zhihu.com/question/2077770023171634400)
1. [如何看待沪教版美术书教孩子动手做中国传统服饰？](https://www.zhihu.com/question/2077742825551160000)
1. [假设大和号撞上泰坦尼克中的冰山，会怎么样?](https://www.zhihu.com/question/367101053)
1. [中小学开学选班主任真的「堪比泰国征兵现场」吗？为什么年轻人不爱当班主任了？班主任的一天都要干啥？](https://www.zhihu.com/question/2077535461820593000)
1. [女子工作6年多被迫离职，最后半个月工资仅55元，被踢出845个工作群，维权历经近一年，为什么这么难？](https://www.zhihu.com/question/2077550784615539500)
1. [尼泊尔泥石流灾害已致 903 人遇难，4247 人失联，目前当地救援情况如何？](https://www.zhihu.com/question/2077738468134708700)
1. [三国杀里八卦阵和仁王盾哪个比较实用一点?](https://www.zhihu.com/question/323560111)
1. [怎么看OpenAI 的 Codex 将取消上下文压缩，换成「硬切窗口 」和「外部记忆」？](https://www.zhihu.com/question/2077507444545165000)
1. [新版《国防动员法》2026 年 10 月 1 日实施，哪些信息值得关注？会带来什么影响？](https://www.zhihu.com/question/2076954184558047700)
1. [多所高校发布本科毕业论文抽检通知，将对问题论文指导教师追责，此举将如何影响高校教师的论文指导方式？](https://www.zhihu.com/question/2076732320636261000)
1. [如果《人民的名义》里面的大风厂真的爆炸了会怎么样？](https://www.zhihu.com/question/667976800)
1. [如何看待WinUI开源了？](https://www.zhihu.com/question/2077370223762719700)
1. [体育世界中，哪位运动员最让你惋惜？为什么？](https://www.zhihu.com/question/368012981)
1. [诺兰电影奥德赛里为何奥德修斯的船员不把阿波罗（实际上是赫利俄斯）的牛全吃了以报复阿波罗？](https://www.zhihu.com/question/2072326236970525700)
1. [人为什么需要借礼物、仪式和节日来确认一段感情？](https://www.zhihu.com/question/2072666413970592500)
1. [《爱情公寓》羽墨的角色为什么被放弃了？而悠悠却被保留下来？](https://www.zhihu.com/question/49771510)
1. [为什么火车票买长乘短没人说有问题，但一人买两个位子就有人说不行？](https://www.zhihu.com/question/7323468750)
1. [霍金举办的时间旅行宴会为何无人露面？](https://www.zhihu.com/question/337260240)
1. [长久的爱，是一次承诺的延续，还是两个人在变化中一次次重新选择彼此？](https://www.zhihu.com/question/2072666413756594000)
1. [希特勒可以逼西班牙入轴吗？](https://www.zhihu.com/question/1899529865520210700)
1. [宇树股价「腰斩」从 1100 跌至 555 元，机器人第一股 2200 亿蒸发，有哪些原因和影响？](https://www.zhihu.com/question/2077739048634946000)
1. [如何评价2026年国产镜头的水平？](https://www.zhihu.com/question/2073098395858879000)
1. [餐饮店用来「过油」的油，炸了那么多不同种类的食物，再用来炒菜难道不会串味吗?](https://www.zhihu.com/question/2014321032002036500)
1. [在家吃火锅，怎样才能做出比店里还好吃的味道？](https://www.zhihu.com/question/1955952470686667500)
1. [在足球或篮球等项目中，有没有球员在俱乐部只是蓝领角色，但在国家队却是绝对核心的案例？](https://www.zhihu.com/question/2077008189174834000)
1. [武器里面有哪些违反直觉的设计？](https://www.zhihu.com/question/1987593216678195700)
1. [美军袭击伊朗拉腊克岛，这是美军一个月来首次对伊采取军事行动，伊方誓言报复，本次冲突会升级吗？](https://www.zhihu.com/question/2077683153028888600)
1. [为什么这个世界上存在有电影院，但没有游戏院的说法呢？](https://www.zhihu.com/question/2072412309545301500)
1. [Kimi K3 的实际表现真有被吹捧的那么强吗？](https://www.zhihu.com/question/2063649731096614000)
1. [悟透了什么道理之后让你的人生越来越顺了？](https://www.zhihu.com/question/3269055313)
1. [玄幻小说中的那些号称“全知全能”的 BOSS 为什么不在早期就消灭掉主角?](https://www.zhihu.com/question/2034991469417714400)
1. [中国羽毛球协会副主席夏煊泽接受纪律审查和监察调查，原副主席兼秘书长王伟接受监察调查，哪些信息值得关注？](https://www.zhihu.com/question/2077798903039145000)
1. [中国女排无缘亚锦赛冠军，赛后很多网友呼吁召回朱婷，为什么中国女排不召回朱婷？一个朱婷能解决所有问题吗？](https://www.zhihu.com/question/2077683343475176200)
1. [为什么有些网文套路明明很老，读者却总是百看不厌？到底什么样的“爽点”设计才能真正拿捏人性？](https://www.zhihu.com/question/2046485925300025000)
1. [闲置的“旧手机”，你们都拿来干啥了，有没有什么妙用？](https://www.zhihu.com/question/1918598041331560400)
1. [阿里巴巴 2027 财年第一季度营收 2689.5 亿元，阿里云外部商业化收入增长 45%，如何解读？](https://www.zhihu.com/question/2073831252768175000)
1. [养生先从哪里开始？](https://www.zhihu.com/question/11072451017)
1. [如何评价鹰角高调租下万科9万m²独栋大平层用于办公？](https://www.zhihu.com/question/2077199059757147100)
1. [频繁使用ai会不会变愚钝?](https://www.zhihu.com/question/1931990997006550800)

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
<!-- 最后更新时间 Tue Sep 01 2026 07:55:54 GMT+0800 (China Standard Time) -->

1. [中吉元首出席签字仪式](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%90%89%E5%85%83%E9%A6%96%E5%87%BA%E5%B8%AD%E7%AD%BE%E5%AD%97%E4%BB%AA%E5%BC%8F%23&Refer=new_time)
1. [特朗普称伊朗已死](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BC%8A%E6%9C%97%E5%B7%B2%E6%AD%BB%23&t=31&band_rank=1&Refer=top)
1. [郑钦文2比1柳托娃](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%872%E6%AF%941%E6%9F%B3%E6%89%98%E5%A8%83%23&t=31&band_rank=2&Refer=top)
1. [20项措施推动消费扩容升级](https://s.weibo.com//weibo?q=%2320%E9%A1%B9%E6%8E%AA%E6%96%BD%E6%8E%A8%E5%8A%A8%E6%B6%88%E8%B4%B9%E6%89%A9%E5%AE%B9%E5%8D%87%E7%BA%A7%23&t=31&band_rank=3&Refer=top)
1. [一个超好用的情绪控制技巧](https://s.weibo.com//weibo?q=%E4%B8%80%E4%B8%AA%E8%B6%85%E5%A5%BD%E7%94%A8%E7%9A%84%E6%83%85%E7%BB%AA%E6%8E%A7%E5%88%B6%E6%8A%80%E5%B7%A7&t=31&band_rank=4&Refer=top)
1. [郑钦文终结柳托娃9连胜](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BB%88%E7%BB%93%E6%9F%B3%E6%89%98%E5%A8%839%E8%BF%9E%E8%83%9C%23&t=31&band_rank=5&Refer=top)
1. [库克正式卸任苹果CEO](https://s.weibo.com//weibo?q=%23%E5%BA%93%E5%85%8B%E6%AD%A3%E5%BC%8F%E5%8D%B8%E4%BB%BB%E8%8B%B9%E6%9E%9CCEO%23&t=31&band_rank=6&Refer=top)
1. [敖瑞鹏和孙千领奖像是在走T台](https://s.weibo.com//weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%92%8C%E5%AD%99%E5%8D%83%E9%A2%86%E5%A5%96%E5%83%8F%E6%98%AF%E5%9C%A8%E8%B5%B0T%E5%8F%B0%23&t=31&band_rank=7&Refer=top)
1. [多款手机正式涨价](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E6%AC%BE%E6%89%8B%E6%9C%BA%E6%AD%A3%E5%BC%8F%E6%B6%A8%E4%BB%B7%23&t=31&band_rank=8&Refer=top)
1. [还我季洁](https://s.weibo.com//weibo?q=%E8%BF%98%E6%88%91%E5%AD%A3%E6%B4%81&t=31&band_rank=9&Refer=top)
1. [好直观的降本增效](https://s.weibo.com//weibo?q=%E5%A5%BD%E7%9B%B4%E8%A7%82%E7%9A%84%E9%99%8D%E6%9C%AC%E5%A2%9E%E6%95%88&t=31&band_rank=10&Refer=top)
1. [黄磊回应不再参加向往的生活](https://s.weibo.com//weibo?q=%23%E9%BB%84%E7%A3%8A%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%86%8D%E5%8F%82%E5%8A%A0%E5%90%91%E5%BE%80%E7%9A%84%E7%94%9F%E6%B4%BB%23&t=31&band_rank=11&Refer=top)
1. [孙千飞机上收到空姐的信](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%8D%83%E9%A3%9E%E6%9C%BA%E4%B8%8A%E6%94%B6%E5%88%B0%E7%A9%BA%E5%A7%90%E7%9A%84%E4%BF%A1%23&t=31&band_rank=12&Refer=top)
1. [美国炸鸡巨头中国首店开业](https://s.weibo.com//weibo?q=%E7%BE%8E%E5%9B%BD%E7%82%B8%E9%B8%A1%E5%B7%A8%E5%A4%B4%E4%B8%AD%E5%9B%BD%E9%A6%96%E5%BA%97%E5%BC%80%E4%B8%9A&t=31&band_rank=13&Refer=top)
1. [两小时演唱会休息了80分钟](https://s.weibo.com//weibo?q=%E4%B8%A4%E5%B0%8F%E6%97%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BC%91%E6%81%AF%E4%BA%8680%E5%88%86%E9%92%9F&t=31&band_rank=14&Refer=top)
1. [日本男星回应电车内性侵高中女生](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E6%98%9F%E5%9B%9E%E5%BA%94%E7%94%B5%E8%BD%A6%E5%86%85%E6%80%A7%E4%BE%B5%E9%AB%98%E4%B8%AD%E5%A5%B3%E7%94%9F%23&t=31&band_rank=15&Refer=top)
1. [陈粒 Ryan](https://s.weibo.com//weibo?q=%E9%99%88%E7%B2%92%20Ryan&t=31&band_rank=16&Refer=top)
1. [上一辈未必有现在的00后能省](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E4%B8%80%E8%BE%88%E6%9C%AA%E5%BF%85%E6%9C%89%E7%8E%B0%E5%9C%A8%E7%9A%8400%E5%90%8E%E8%83%BD%E7%9C%81%23&t=31&band_rank=17&Refer=top)
1. [吉隆口岸遍布巨石](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E9%81%8D%E5%B8%83%E5%B7%A8%E7%9F%B3%23&t=31&band_rank=18&Refer=top)
1. [AI小鸭机器人24小时售260万美元](https://s.weibo.com//weibo?q=AI%E5%B0%8F%E9%B8%AD%E6%9C%BA%E5%99%A8%E4%BA%BA24%E5%B0%8F%E6%97%B6%E5%94%AE260%E4%B8%87%E7%BE%8E%E5%85%83&t=31&band_rank=19&Refer=top)
1. [尼泊尔泥石流已致939遇难3925失联](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B4939%E9%81%87%E9%9A%BE3925%E5%A4%B1%E8%81%94%23&t=31&band_rank=20&Refer=top)
1. [王鸥回复李小冉](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E9%B8%A5%E5%9B%9E%E5%A4%8D%E6%9D%8E%E5%B0%8F%E5%86%89%23&t=31&band_rank=21&Refer=top)
1. [包贝尔导包文婧主演新剧38万人预约](https://s.weibo.com//weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%AF%BC%E5%8C%85%E6%96%87%E5%A9%A7%E4%B8%BB%E6%BC%94%E6%96%B0%E5%89%A738%E4%B8%87%E4%BA%BA%E9%A2%84%E7%BA%A6%23&t=31&band_rank=22&Refer=top)
1. [子宫状态好的人经期有5个特点](https://s.weibo.com//weibo?q=%23%E5%AD%90%E5%AE%AB%E7%8A%B6%E6%80%81%E5%A5%BD%E7%9A%84%E4%BA%BA%E7%BB%8F%E6%9C%9F%E6%9C%895%E4%B8%AA%E7%89%B9%E7%82%B9%23&t=31&band_rank=23&Refer=top)
1. [办婚礼未领证男方去世判决结果](https://s.weibo.com//weibo?q=%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%9C%AA%E9%A2%86%E8%AF%81%E7%94%B7%E6%96%B9%E5%8E%BB%E4%B8%96%E5%88%A4%E5%86%B3%E7%BB%93%E6%9E%9C&t=31&band_rank=24&Refer=top)
1. [杨瀚森绝杀](https://s.weibo.com//weibo?q=%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%BB%9D%E6%9D%80&t=31&band_rank=25&Refer=top)
1. [一种燃脂不掉肌肉的吃饭方法](https://s.weibo.com//weibo?q=%E4%B8%80%E7%A7%8D%E7%87%83%E8%84%82%E4%B8%8D%E6%8E%89%E8%82%8C%E8%82%89%E7%9A%84%E5%90%83%E9%A5%AD%E6%96%B9%E6%B3%95&t=31&band_rank=26&Refer=top)
1. [赵今麦躺在王安宇的怀里](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%BA%BA%E5%9C%A8%E7%8E%8B%E5%AE%89%E5%AE%87%E7%9A%84%E6%80%80%E9%87%8C%23&t=31&band_rank=27&Refer=top)
1. [王鸥采访曾说孩子的父亲很重要](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E9%B8%A5%E9%87%87%E8%AE%BF%E6%9B%BE%E8%AF%B4%E5%AD%A9%E5%AD%90%E7%9A%84%E7%88%B6%E4%BA%B2%E5%BE%88%E9%87%8D%E8%A6%81%23&t=31&band_rank=28&Refer=top)
1. [九月文案](https://s.weibo.com//weibo?q=%E4%B9%9D%E6%9C%88%E6%96%87%E6%A1%88&t=31&band_rank=29&Refer=top)
1. [柳托娃落泪郑钦文拥抱](https://s.weibo.com//weibo?q=%E6%9F%B3%E6%89%98%E5%A8%83%E8%90%BD%E6%B3%AA%E9%83%91%E9%92%A6%E6%96%87%E6%8B%A5%E6%8A%B1&t=31&band_rank=30&Refer=top)
1. [六大行房贷余额少了5000多亿](https://s.weibo.com//weibo?q=%23%E5%85%AD%E5%A4%A7%E8%A1%8C%E6%88%BF%E8%B4%B7%E4%BD%99%E9%A2%9D%E5%B0%91%E4%BA%865000%E5%A4%9A%E4%BA%BF%23&t=31&band_rank=31&Refer=top)
1. [女子接收诈骗犯男友261万判不用还](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8E%A5%E6%94%B6%E8%AF%88%E9%AA%97%E7%8A%AF%E7%94%B7%E5%8F%8B261%E4%B8%87%E5%88%A4%E4%B8%8D%E7%94%A8%E8%BF%98%23&t=31&band_rank=32&Refer=top)
1. [詹俊谈阿根廷队长宣布国家队退役](https://s.weibo.com//weibo?q=%23%E8%A9%B9%E4%BF%8A%E8%B0%88%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%95%BF%E5%AE%A3%E5%B8%83%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%80%80%E5%BD%B9%23&t=31&band_rank=33&Refer=top)
1. [李沐宸自曝演季洁压力大](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E6%B2%90%E5%AE%B8%E8%87%AA%E6%9B%9D%E6%BC%94%E5%AD%A3%E6%B4%81%E5%8E%8B%E5%8A%9B%E5%A4%A7%23&t=31&band_rank=34&Refer=top)
1. [出生人口 双休落实](https://s.weibo.com//weibo?q=%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3%20%E5%8F%8C%E4%BC%91%E8%90%BD%E5%AE%9E&t=31&band_rank=35&Refer=top)
1. [2028洛杉矶奥运会](https://s.weibo.com//weibo?q=2028%E6%B4%9B%E6%9D%89%E7%9F%B6%E5%A5%A5%E8%BF%90%E4%BC%9A&t=31&band_rank=36&Refer=top)
1. [重案六组](https://s.weibo.com//weibo?q=%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84&t=31&band_rank=37&Refer=top)
1. [早春晴朗](https://s.weibo.com//weibo?q=%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97&t=31&band_rank=38&Refer=top)
1. [阿森纳1比0客胜维拉](https://s.weibo.com//weibo?q=%E9%98%BF%E6%A3%AE%E7%BA%B31%E6%AF%940%E5%AE%A2%E8%83%9C%E7%BB%B4%E6%8B%89&t=31&band_rank=39&Refer=top)
1. [沈腾评论关晓彤无米版徐福烩饭](https://s.weibo.com//weibo?q=%E6%B2%88%E8%85%BE%E8%AF%84%E8%AE%BA%E5%85%B3%E6%99%93%E5%BD%A4%E6%97%A0%E7%B1%B3%E7%89%88%E5%BE%90%E7%A6%8F%E7%83%A9%E9%A5%AD&t=31&band_rank=40&Refer=top)
1. [朱志鑫张极拌嘴其他人的反应](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%BC%A0%E6%9E%81%E6%8B%8C%E5%98%B4%E5%85%B6%E4%BB%96%E4%BA%BA%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=41&Refer=top)
1. [阿根廷国家队致敬队长](https://s.weibo.com//weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9B%BD%E5%AE%B6%E9%98%9F%E8%87%B4%E6%95%AC%E9%98%9F%E9%95%BF%23&t=31&band_rank=42&Refer=top)
1. [中方回应尼政府拒绝外国救援队](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E5%B0%BC%E6%94%BF%E5%BA%9C%E6%8B%92%E7%BB%9D%E5%A4%96%E5%9B%BD%E6%95%91%E6%8F%B4%E9%98%9F%23&t=31&band_rank=43&Refer=top)
1. [九成美说考研上岸是拍的小段子](https://s.weibo.com//weibo?q=%23%E4%B9%9D%E6%88%90%E7%BE%8E%E8%AF%B4%E8%80%83%E7%A0%94%E4%B8%8A%E5%B2%B8%E6%98%AF%E6%8B%8D%E7%9A%84%E5%B0%8F%E6%AE%B5%E5%AD%90%23&t=31&band_rank=44&Refer=top)
1. [沈腾回应关晓彤无米版徐福烩饭](https://s.weibo.com//weibo?q=%23%E6%B2%88%E8%85%BE%E5%9B%9E%E5%BA%94%E5%85%B3%E6%99%93%E5%BD%A4%E6%97%A0%E7%B1%B3%E7%89%88%E5%BE%90%E7%A6%8F%E7%83%A9%E9%A5%AD%23&t=31&band_rank=45&Refer=top)
1. [经常看书与不看书的差距有多大](https://s.weibo.com//weibo?q=%E7%BB%8F%E5%B8%B8%E7%9C%8B%E4%B9%A6%E4%B8%8E%E4%B8%8D%E7%9C%8B%E4%B9%A6%E7%9A%84%E5%B7%AE%E8%B7%9D%E6%9C%89%E5%A4%9A%E5%A4%A7&t=31&band_rank=46&Refer=top)
1. [中国影坛最担心的事来了](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%BD%B1%E5%9D%9B%E6%9C%80%E6%8B%85%E5%BF%83%E7%9A%84%E4%BA%8B%E6%9D%A5%E4%BA%86&t=31&band_rank=47&Refer=top)
1. [消化了这段话你就能少走五年弯路](https://s.weibo.com//weibo?q=%23%E6%B6%88%E5%8C%96%E4%BA%86%E8%BF%99%E6%AE%B5%E8%AF%9D%E4%BD%A0%E5%B0%B1%E8%83%BD%E5%B0%91%E8%B5%B0%E4%BA%94%E5%B9%B4%E5%BC%AF%E8%B7%AF%23&t=31&band_rank=48&Refer=top)
1. [美国航母停靠前芭堤雅严打卖淫](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%88%AA%E6%AF%8D%E5%81%9C%E9%9D%A0%E5%89%8D%E8%8A%AD%E5%A0%A4%E9%9B%85%E4%B8%A5%E6%89%93%E5%8D%96%E6%B7%AB%23&t=31&band_rank=49&Refer=top)
1. [AI长剧后西游记收视第一](https://s.weibo.com//weibo?q=%23AI%E9%95%BF%E5%89%A7%E5%90%8E%E8%A5%BF%E6%B8%B8%E8%AE%B0%E6%94%B6%E8%A7%86%E7%AC%AC%E4%B8%80%23&t=31&band_rank=50&Refer=top)
1. [习近平用吉尔吉斯语向仪仗队员问好](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E7%94%A8%E5%90%89%E5%B0%94%E5%90%89%E6%96%AF%E8%AF%AD%E5%90%91%E4%BB%AA%E4%BB%97%E9%98%9F%E5%91%98%E9%97%AE%E5%A5%BD%23&Refer=new_time)
1. [郑钦文2比1柳托娃](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%872%E6%AF%941%E6%9F%B3%E6%89%98%E5%A8%83%23&t=31&band_rank=1&Refer=top)
1. [一个超好用的情绪控制技巧](https://s.weibo.com//weibo?q=%E4%B8%80%E4%B8%AA%E8%B6%85%E5%A5%BD%E7%94%A8%E7%9A%84%E6%83%85%E7%BB%AA%E6%8E%A7%E5%88%B6%E6%8A%80%E5%B7%A7&t=31&band_rank=2&Refer=top)
1. [特朗普称伊朗已死](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BC%8A%E6%9C%97%E5%B7%B2%E6%AD%BB%23&t=31&band_rank=4&Refer=top)
1. [阿根廷国家队致敬队长](https://s.weibo.com//weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9B%BD%E5%AE%B6%E9%98%9F%E8%87%B4%E6%95%AC%E9%98%9F%E9%95%BF%23&t=31&band_rank=5&Refer=top)
1. [好直观的降本增效](https://s.weibo.com//weibo?q=%E5%A5%BD%E7%9B%B4%E8%A7%82%E7%9A%84%E9%99%8D%E6%9C%AC%E5%A2%9E%E6%95%88&t=31&band_rank=6&Refer=top)
1. [还我季洁](https://s.weibo.com//weibo?q=%E8%BF%98%E6%88%91%E5%AD%A3%E6%B4%81&t=31&band_rank=7&Refer=top)
1. [尼泊尔泥石流已致939遇难3925失联](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B4939%E9%81%87%E9%9A%BE3925%E5%A4%B1%E8%81%94%23&t=31&band_rank=8&Refer=top)
1. [杨瀚森绝杀](https://s.weibo.com//weibo?q=%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%BB%9D%E6%9D%80&t=31&band_rank=9&Refer=top)
1. [早春晴朗](https://s.weibo.com//weibo?q=%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97&t=31&band_rank=10&Refer=top)
1. [两小时演唱会休息了80分钟](https://s.weibo.com//weibo?q=%E4%B8%A4%E5%B0%8F%E6%97%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BC%91%E6%81%AF%E4%BA%8680%E5%88%86%E9%92%9F&t=31&band_rank=11&Refer=top)
1. [日本男星回应电车内性侵高中女生](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E6%98%9F%E5%9B%9E%E5%BA%94%E7%94%B5%E8%BD%A6%E5%86%85%E6%80%A7%E4%BE%B5%E9%AB%98%E4%B8%AD%E5%A5%B3%E7%94%9F%23&t=31&band_rank=12&Refer=top)
1. [郑钦文vs柳托娃](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E6%9F%B3%E6%89%98%E5%A8%83%23&t=31&band_rank=13&Refer=top)
1. [重案六组](https://s.weibo.com//weibo?q=%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84&t=31&band_rank=14&Refer=top)
1. [美国炸鸡巨头上海首店代排费150](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%82%B8%E9%B8%A1%E5%B7%A8%E5%A4%B4%E4%B8%8A%E6%B5%B7%E9%A6%96%E5%BA%97%E4%BB%A3%E6%8E%92%E8%B4%B9150%23&t=31&band_rank=15&Refer=top)
1. [沈腾回应关晓彤无米版徐福烩饭](https://s.weibo.com//weibo?q=%23%E6%B2%88%E8%85%BE%E5%9B%9E%E5%BA%94%E5%85%B3%E6%99%93%E5%BD%A4%E6%97%A0%E7%B1%B3%E7%89%88%E5%BE%90%E7%A6%8F%E7%83%A9%E9%A5%AD%23&t=31&band_rank=16&Refer=top)
1. [郑钦文美网首轮](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%91%E9%A6%96%E8%BD%AE%23&t=31&band_rank=17&Refer=top)
1. [子涵梓萱的时代已成过去式](https://s.weibo.com//weibo?q=%23%E5%AD%90%E6%B6%B5%E6%A2%93%E8%90%B1%E7%9A%84%E6%97%B6%E4%BB%A3%E5%B7%B2%E6%88%90%E8%BF%87%E5%8E%BB%E5%BC%8F%23&t=31&band_rank=18&Refer=top)
1. [吉隆口岸唯一能看到的建筑](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%94%AF%E4%B8%80%E8%83%BD%E7%9C%8B%E5%88%B0%E7%9A%84%E5%BB%BA%E7%AD%91%23&t=31&band_rank=19&Refer=top)
1. [中国男篮绝杀黎巴嫩男篮](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E7%BB%9D%E6%9D%80%E9%BB%8E%E5%B7%B4%E5%AB%A9%E7%94%B7%E7%AF%AE%23&t=31&band_rank=20&Refer=top)
1. [中国影坛最担心的事来了](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%BD%B1%E5%9D%9B%E6%9C%80%E6%8B%85%E5%BF%83%E7%9A%84%E4%BA%8B%E6%9D%A5%E4%BA%86&t=31&band_rank=21&Refer=top)
1. [办婚礼未领证男方去世判决结果](https://s.weibo.com//weibo?q=%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%9C%AA%E9%A2%86%E8%AF%81%E7%94%B7%E6%96%B9%E5%8E%BB%E4%B8%96%E5%88%A4%E5%86%B3%E7%BB%93%E6%9E%9C&t=31&band_rank=22&Refer=top)
1. [郑钦文预测胜率低于柳托娃](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%A2%84%E6%B5%8B%E8%83%9C%E7%8E%87%E4%BD%8E%E4%BA%8E%E6%9F%B3%E6%89%98%E5%A8%83%23&t=31&band_rank=23&Refer=top)
1. [经常看书与不看书的差距有多大](https://s.weibo.com//weibo?q=%E7%BB%8F%E5%B8%B8%E7%9C%8B%E4%B9%A6%E4%B8%8E%E4%B8%8D%E7%9C%8B%E4%B9%A6%E7%9A%84%E5%B7%AE%E8%B7%9D%E6%9C%89%E5%A4%9A%E5%A4%A7&t=31&band_rank=24&Refer=top)
1. [曝科大讯飞公关副总裁被解职](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E5%85%AC%E5%85%B3%E5%89%AF%E6%80%BB%E8%A3%81%E8%A2%AB%E8%A7%A3%E8%81%8C%23&t=31&band_rank=25&Refer=top)
1. [杨瀚森回应绝杀黎巴嫩男篮](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E5%9B%9E%E5%BA%94%E7%BB%9D%E6%9D%80%E9%BB%8E%E5%B7%B4%E5%AB%A9%E7%94%B7%E7%AF%AE%23&t=31&band_rank=26&Refer=top)
1. [90元一桶的炸鸡代排费要150元](https://s.weibo.com//weibo?q=%2390%E5%85%83%E4%B8%80%E6%A1%B6%E7%9A%84%E7%82%B8%E9%B8%A1%E4%BB%A3%E6%8E%92%E8%B4%B9%E8%A6%81150%E5%85%83%23&t=31&band_rank=27&Refer=top)
1. [出生人口 双休落实](https://s.weibo.com//weibo?q=%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3%20%E5%8F%8C%E4%BC%91%E8%90%BD%E5%AE%9E&t=31&band_rank=28&Refer=top)
1. [16岁女孩车祸离世母亲恳求归还手机](https://s.weibo.com//weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%BD%A6%E7%A5%B8%E7%A6%BB%E4%B8%96%E6%AF%8D%E4%BA%B2%E6%81%B3%E6%B1%82%E5%BD%92%E8%BF%98%E6%89%8B%E6%9C%BA%23&t=31&band_rank=29&Refer=top)
1. [AI长剧后西游记收视第一](https://s.weibo.com//weibo?q=%23AI%E9%95%BF%E5%89%A7%E5%90%8E%E8%A5%BF%E6%B8%B8%E8%AE%B0%E6%94%B6%E8%A7%86%E7%AC%AC%E4%B8%80%23&t=31&band_rank=30&Refer=top)
1. [iG王者荣耀分部](https://s.weibo.com//weibo?q=iG%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%88%86%E9%83%A8&t=31&band_rank=31&Refer=top)
1. [沈腾评论关晓彤无米版徐福烩饭](https://s.weibo.com//weibo?q=%E6%B2%88%E8%85%BE%E8%AF%84%E8%AE%BA%E5%85%B3%E6%99%93%E5%BD%A4%E6%97%A0%E7%B1%B3%E7%89%88%E5%BE%90%E7%A6%8F%E7%83%A9%E9%A5%AD&t=31&band_rank=32&Refer=top)
1. [第五人格](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC&t=31&band_rank=33&Refer=top)
1. [六大行房贷余额少了5000多亿](https://s.weibo.com//weibo?q=%23%E5%85%AD%E5%A4%A7%E8%A1%8C%E6%88%BF%E8%B4%B7%E4%BD%99%E9%A2%9D%E5%B0%91%E4%BA%865000%E5%A4%9A%E4%BA%BF%23&t=31&band_rank=34&Refer=top)
1. [消化了这段话你就能少走五年弯路](https://s.weibo.com//weibo?q=%23%E6%B6%88%E5%8C%96%E4%BA%86%E8%BF%99%E6%AE%B5%E8%AF%9D%E4%BD%A0%E5%B0%B1%E8%83%BD%E5%B0%91%E8%B5%B0%E4%BA%94%E5%B9%B4%E5%BC%AF%E8%B7%AF%23&t=31&band_rank=35&Refer=top)
1. [一种燃脂不掉肌肉的吃饭方法](https://s.weibo.com//weibo?q=%E4%B8%80%E7%A7%8D%E7%87%83%E8%84%82%E4%B8%8D%E6%8E%89%E8%82%8C%E8%82%89%E7%9A%84%E5%90%83%E9%A5%AD%E6%96%B9%E6%B3%95&t=31&band_rank=36&Refer=top)
1. [这取啥名](https://s.weibo.com//weibo?q=%23%E8%BF%99%E5%8F%96%E5%95%A5%E5%90%8D%23&t=31&band_rank=37&Refer=top)
1. [中方回应尼政府拒绝外国救援队](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E5%B0%BC%E6%94%BF%E5%BA%9C%E6%8B%92%E7%BB%9D%E5%A4%96%E5%9B%BD%E6%95%91%E6%8F%B4%E9%98%9F%23&t=31&band_rank=38&Refer=top)
1. [女子接收诈骗犯男友261万判不用还](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8E%A5%E6%94%B6%E8%AF%88%E9%AA%97%E7%8A%AF%E7%94%B7%E5%8F%8B261%E4%B8%87%E5%88%A4%E4%B8%8D%E7%94%A8%E8%BF%98%23&t=31&band_rank=39&Refer=top)
1. [早春晴朗25.6](https://s.weibo.com//weibo?q=%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%9725.6&t=31&band_rank=40&Refer=top)
1. [杨博文收官长文](https://s.weibo.com//weibo?q=%E6%9D%A8%E5%8D%9A%E6%96%87%E6%94%B6%E5%AE%98%E9%95%BF%E6%96%87&t=31&band_rank=41&Refer=top)
1. [新加坡女童申请不要弟妹](https://s.weibo.com//weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%A5%B3%E7%AB%A5%E7%94%B3%E8%AF%B7%E4%B8%8D%E8%A6%81%E5%BC%9F%E5%A6%B9%23&t=31&band_rank=42&Refer=top)
1. [这得看多少集AI漫剧才演这么像](https://s.weibo.com//weibo?q=%E8%BF%99%E5%BE%97%E7%9C%8B%E5%A4%9A%E5%B0%91%E9%9B%86AI%E6%BC%AB%E5%89%A7%E6%89%8D%E6%BC%94%E8%BF%99%E4%B9%88%E5%83%8F&t=31&band_rank=43&Refer=top)
1. [多架次直升机驰援吉隆灾区](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E6%9E%B6%E6%AC%A1%E7%9B%B4%E5%8D%87%E6%9C%BA%E9%A9%B0%E6%8F%B4%E5%90%89%E9%9A%86%E7%81%BE%E5%8C%BA%23&t=31&band_rank=44&Refer=top)
1. [山姆9个月卖了100万个会员](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E5%A7%869%E4%B8%AA%E6%9C%88%E5%8D%96%E4%BA%86100%E4%B8%87%E4%B8%AA%E4%BC%9A%E5%91%98%23&t=31&band_rank=45&Refer=top)
1. [杨瀚森打出NBA级竞技水平](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E6%89%93%E5%87%BANBA%E7%BA%A7%E7%AB%9E%E6%8A%80%E6%B0%B4%E5%B9%B3%23&t=31&band_rank=46&Refer=top)
1. [出生人口连锁反应](https://s.weibo.com//weibo?q=%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3%E8%BF%9E%E9%94%81%E5%8F%8D%E5%BA%94&t=31&band_rank=47&Refer=top)
1. [严丝合缝的两只小狗](https://s.weibo.com//weibo?q=%23%E4%B8%A5%E4%B8%9D%E5%90%88%E7%BC%9D%E7%9A%84%E4%B8%A4%E5%8F%AA%E5%B0%8F%E7%8B%97%23&t=31&band_rank=48&Refer=top)
1. [杨瀚森状态](https://s.weibo.com//weibo?q=%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%8A%B6%E6%80%81&t=31&band_rank=49&Refer=top)
1. [半是蜜糖半是伤 于中中巅峰](https://s.weibo.com//weibo?q=%E5%8D%8A%E6%98%AF%E8%9C%9C%E7%B3%96%E5%8D%8A%E6%98%AF%E4%BC%A4%20%E4%BA%8E%E4%B8%AD%E4%B8%AD%E5%B7%85%E5%B3%B0&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
