# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-22 07:19:24

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
<!-- 最后更新时间 Tue Sep 22 2026 08:16:39 GMT+0800 (China Standard Time) -->

1. [美多架F-16战机飞往格陵兰岛意味啥](https://so.toutiao.com/search?keyword=美多架F-16战机飞往格陵兰岛意味啥)
1. [雷军回应“打新宇树赚了100多亿”](https://so.toutiao.com/search?keyword=雷军回应“打新宇树赚了100多亿”)
1. [当前我国粮食市场保持总体平稳](https://so.toutiao.com/search?keyword=当前我国粮食市场保持总体平稳)
1. [钟南山团队发现71%肺结节患者不吸烟](https://so.toutiao.com/search?keyword=钟南山团队发现71%肺结节患者不吸烟)
1. [张展硕霸气回应最后时刻反超日本队](https://so.toutiao.com/search?keyword=张展硕霸气回应最后时刻反超日本队)
1. [豪华燃油车集体“腰斩式”降价](https://so.toutiao.com/search?keyword=豪华燃油车集体“腰斩式”降价)
1. [A股反弹窗口有望延续](https://so.toutiao.com/search?keyword=A股反弹窗口有望延续)
1. [媒体：中国男篮需纠错再出发](https://so.toutiao.com/search?keyword=媒体：中国男篮需纠错再出发)
1. [煤企为抄近道在明长城挖了个口子](https://so.toutiao.com/search?keyword=煤企为抄近道在明长城挖了个口子)
1. [“尘封”已久的“闪身步”火了](https://so.toutiao.com/search?keyword=“尘封”已久的“闪身步”火了)
1. [青海辟谣“前文旅厅厅长开网约车”](https://so.toutiao.com/search?keyword=青海辟谣“前文旅厅厅长开网约车”)
1. [徐嘉余：甲鱼未来可期](https://so.toutiao.com/search?keyword=徐嘉余：甲鱼未来可期)
1. [媒体：宁德时代没说错话但答错了题](https://so.toutiao.com/search?keyword=媒体：宁德时代没说错话但答错了题)
1. [男子花17元网购空礼盒装入散装月饼](https://so.toutiao.com/search?keyword=男子花17元网购空礼盒装入散装月饼)
1. [远离高血压等慢病从这7个好习惯开始](https://so.toutiao.com/search?keyword=远离高血压等慢病从这7个好习惯开始)
1. [闲鱼回应涉黄](https://so.toutiao.com/search?keyword=闲鱼回应涉黄)
1. [已婚女子与男子开房次日全裸身亡](https://so.toutiao.com/search?keyword=已婚女子与男子开房次日全裸身亡)
1. [91岁奶奶认不出子女却记得89年前的歌](https://so.toutiao.com/search?keyword=91岁奶奶认不出子女却记得89年前的歌)
1. [国际油价21日显著下跌](https://so.toutiao.com/search?keyword=国际油价21日显著下跌)
1. [苹果18第一批“受害者”来了吗](https://so.toutiao.com/search?keyword=苹果18第一批“受害者”来了吗)
1. [月饼不好卖了](https://so.toutiao.com/search?keyword=月饼不好卖了)
1. [妹妹送哥哥入伍上一秒微笑下一秒大哭](https://so.toutiao.com/search?keyword=妹妹送哥哥入伍上一秒微笑下一秒大哭)
1. [风口浪尖上的闲鱼处在十字路口](https://so.toutiao.com/search?keyword=风口浪尖上的闲鱼处在十字路口)
1. [为啥部分消费者抱着非宁德不选心态](https://so.toutiao.com/search?keyword=为啥部分消费者抱着非宁德不选心态)
1. [潘展乐称张展硕是奇迹之子](https://so.toutiao.com/search?keyword=潘展乐称张展硕是奇迹之子)
1. [日本一海滩有鲸爆风险](https://so.toutiao.com/search?keyword=日本一海滩有鲸爆风险)
1. [王思雨：我们的主要目标是战胜日韩](https://so.toutiao.com/search?keyword=王思雨：我们的主要目标是战胜日韩)
1. [美元刚加完息为何就大幅贬值](https://so.toutiao.com/search?keyword=美元刚加完息为何就大幅贬值)
1. [柬埔寨“8号电诈园区”内部曝光](https://so.toutiao.com/search?keyword=柬埔寨“8号电诈园区”内部曝光)
1. [中国女排将与日本女排争冠](https://so.toutiao.com/search?keyword=中国女排将与日本女排争冠)
1. [为何今年中秋是“十五的月亮十七圆”](https://so.toutiao.com/search?keyword=为何今年中秋是“十五的月亮十七圆”)
1. [半月谈：中国篮球不需要“辛苦叙事”](https://so.toutiao.com/search?keyword=半月谈：中国篮球不需要“辛苦叙事”)
1. [中国队男子4x200自接力夺冠](https://so.toutiao.com/search?keyword=中国队男子4x200自接力夺冠)
1. [官方：全谷物营养丰富节粮又健康](https://so.toutiao.com/search?keyword=官方：全谷物营养丰富节粮又健康)
1. [杨利伟：香港航天员在轨表现优异](https://so.toutiao.com/search?keyword=杨利伟：香港航天员在轨表现优异)
1. [美科技巨头为何集体高喊“AI失控”](https://so.toutiao.com/search?keyword=美科技巨头为何集体高喊“AI失控”)
1. [老楼加装电梯难题怎么破](https://so.toutiao.com/search?keyword=老楼加装电梯难题怎么破)
1. [专家为推动膳食转型支招](https://so.toutiao.com/search?keyword=专家为推动膳食转型支招)
1. [武汉站将启动大规模改造](https://so.toutiao.com/search?keyword=武汉站将启动大规模改造)
1. [覃伟中被查](https://so.toutiao.com/search?keyword=覃伟中被查)
1. [《兰香如故》侯长荣颜值太高引热议](https://so.toutiao.com/search?keyword=《兰香如故》侯长荣颜值太高引热议)
1. [赛力斯距离富裕还有多远](https://so.toutiao.com/search?keyword=赛力斯距离富裕还有多远)
1. [为何说“德国做对了一切却失了未来”](https://so.toutiao.com/search?keyword=为何说“德国做对了一切却失了未来”)
1. [霍启刚现身亚运现场低调观赛](https://so.toutiao.com/search?keyword=霍启刚现身亚运现场低调观赛)
1. [高志凯：台湾问题不会一直拖下去](https://so.toutiao.com/search?keyword=高志凯：台湾问题不会一直拖下去)
1. [五角大楼“披萨指数”飙升](https://so.toutiao.com/search?keyword=五角大楼“披萨指数”飙升)
1. [宁德时代市值4个月蒸发7000亿](https://so.toutiao.com/search?keyword=宁德时代市值4个月蒸发7000亿)
1. [乌军伤亡到底有多大](https://so.toutiao.com/search?keyword=乌军伤亡到底有多大)
1. [毛宁发布中美两国元首历次互动视频](https://so.toutiao.com/search?keyword=毛宁发布中美两国元首历次互动视频)
1. [曝篮协曾为某位教练特批千万以上均薪](https://so.toutiao.com/search?keyword=曝篮协曾为某位教练特批千万以上均薪)
1. [中国队亚运赛场90分钟连揽7金](https://so.toutiao.com/search?keyword=中国队亚运赛场90分钟连揽7金)
1. [覃伟中被查 广东：坚决拥护党中央决定](https://so.toutiao.com/search?keyword=覃伟中被查%20广东：坚决拥护党中央决定)
1. [乌克兰无人机为何能突袭莫斯科腹地](https://so.toutiao.com/search?keyword=乌克兰无人机为何能突袭莫斯科腹地)
1. [网民造谣“某企业不让普工上厕所”被拘](https://so.toutiao.com/search?keyword=网民造谣“某企业不让普工上厕所”被拘)
1. [油价节前或大涨](https://so.toutiao.com/search?keyword=油价节前或大涨)
1. [13岁小孩姐于子迪夺2金](https://so.toutiao.com/search?keyword=13岁小孩姐于子迪夺2金)
1. [评论员：日本亚运会的混乱远超预期](https://so.toutiao.com/search?keyword=评论员：日本亚运会的混乱远超预期)
1. [中国女排亚运会从未跌出前三](https://so.toutiao.com/search?keyword=中国女排亚运会从未跌出前三)
1. [评论员一针见血戳穿美国地缘野心](https://so.toutiao.com/search?keyword=评论员一针见血戳穿美国地缘野心)
1. [刘国梁现身亚运会](https://so.toutiao.com/search?keyword=刘国梁现身亚运会)
1. [这些食物可能是结节的“催化剂”](https://so.toutiao.com/search?keyword=这些食物可能是结节的“催化剂”)
1. [朱雨玲：球拍未冷人生常新](https://so.toutiao.com/search?keyword=朱雨玲：球拍未冷人生常新)
1. [外交部回应对日本稀土出口限制](https://so.toutiao.com/search?keyword=外交部回应对日本稀土出口限制)
1. [土耳其巴基斯坦会协防沙特吗](https://so.toutiao.com/search?keyword=土耳其巴基斯坦会协防沙特吗)
1. [日本执政联盟新变化暗藏危机](https://so.toutiao.com/search?keyword=日本执政联盟新变化暗藏危机)
1. [亚运会中国女足小组第一出线](https://so.toutiao.com/search?keyword=亚运会中国女足小组第一出线)
1. [房地产板块是否要迎来底部反转](https://so.toutiao.com/search?keyword=房地产板块是否要迎来底部反转)
1. [vivo X500 Pro Max体验](https://so.toutiao.com/search?keyword=vivo%20X500%20Pro%20Max体验)
1. [国际奥委会主席回应日本亚运村挨批](https://so.toutiao.com/search?keyword=国际奥委会主席回应日本亚运村挨批)
1. [女排球员王奥芊：相信自己的判断](https://so.toutiao.com/search?keyword=女排球员王奥芊：相信自己的判断)
1. [伊朗男篮赢中国获铜牌全队免服兵役](https://so.toutiao.com/search?keyword=伊朗男篮赢中国获铜牌全队免服兵役)
1. [平陆运河将如何改写中国制造](https://so.toutiao.com/search?keyword=平陆运河将如何改写中国制造)
1. [沪指节前能冲过4000点吗](https://so.toutiao.com/search?keyword=沪指节前能冲过4000点吗)
1. [媒体评“儿子去世孙子疑非亲生”案](https://so.toutiao.com/search?keyword=媒体评“儿子去世孙子疑非亲生”案)
1. [A股高开高走 这波反弹怎么看](https://so.toutiao.com/search?keyword=A股高开高走%20这波反弹怎么看)
1. [一汽-大众还能守住基本盘吗](https://so.toutiao.com/search?keyword=一汽-大众还能守住基本盘吗)
1. [杨毅：杜锋杨鸣都不可能接手男篮](https://so.toutiao.com/search?keyword=杨毅：杜锋杨鸣都不可能接手男篮)
1. [宋鸿兵：美元信誉的“大修”才刚开始](https://so.toutiao.com/search?keyword=宋鸿兵：美元信誉的“大修”才刚开始)
1. [亚运场内外争议多](https://so.toutiao.com/search?keyword=亚运场内外争议多)
1. [英国真的会“解体”吗](https://so.toutiao.com/search?keyword=英国真的会“解体”吗)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Sep 22 2026 12:48:23 GMT+0800 (China Standard Time) -->

1. [网购燃气防风罩致妻儿中毒身亡](https://www.zhihu.com/search?q=%E7%BD%91%E8%B4%AD%E7%87%83%E6%B0%94%E9%98%B2%E9%A3%8E%E7%BD%A9%E8%87%B4%E5%A6%BB%E5%84%BF%E4%B8%AD%E6%AF%92%E8%BA%AB%E4%BA%A1)
1. [闲鱼暗藏涉黄产业链](https://www.zhihu.com/search?q=%E9%97%B2%E9%B1%BC%E6%9A%97%E8%97%8F%E6%B6%89%E9%BB%84%E4%BA%A7%E4%B8%9A%E9%93%BE)
1. [大量食品用果葡糖浆替代白砂糖](https://www.zhihu.com/search?q=%E5%A4%A7%E9%87%8F%E9%A3%9F%E5%93%81%E7%94%A8%E6%9E%9C%E8%91%A1%E7%B3%96%E6%B5%86%E6%9B%BF%E4%BB%A3%E7%99%BD%E7%A0%82%E7%B3%96)
1. [张展硕亚运会接力逆转夺冠](https://www.zhihu.com/search?q=%E5%BC%A0%E5%B1%95%E7%A1%95%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%8E%A5%E5%8A%9B%E9%80%86%E8%BD%AC%E5%A4%BA%E5%86%A0)
1. [物理竞赛现AI辅助答题行为](https://www.zhihu.com/search?q=%E7%89%A9%E7%90%86%E7%AB%9E%E8%B5%9B%E7%8E%B0AI%E8%BE%85%E5%8A%A9%E7%AD%94%E9%A2%98%E8%A1%8C%E4%B8%BA)
1. [盛李豪王子菲刷新世界纪录](https://www.zhihu.com/search?q=%E7%9B%9B%E6%9D%8E%E8%B1%AA%E7%8E%8B%E5%AD%90%E8%8F%B2%E5%88%B7%E6%96%B0%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [曝患者因医疗纠纷向产科医生扔粪便](https://www.zhihu.com/search?q=%E6%9B%9D%E6%82%A3%E8%80%85%E5%9B%A0%E5%8C%BB%E7%96%97%E7%BA%A0%E7%BA%B7%E5%90%91%E4%BA%A7%E7%A7%91%E5%8C%BB%E7%94%9F%E6%89%94%E7%B2%AA%E4%BE%BF)
1. [月饼告别「礼赠时代」了吗](https://www.zhihu.com/search?q=%E6%9C%88%E9%A5%BC%E5%91%8A%E5%88%AB%E3%80%8C%E7%A4%BC%E8%B5%A0%E6%97%B6%E4%BB%A3%E3%80%8D%E4%BA%86%E5%90%97)
1. [杭州拟废止低空经济补贴措施](https://www.zhihu.com/search?q=%E6%9D%AD%E5%B7%9E%E6%8B%9F%E5%BA%9F%E6%AD%A2%E4%BD%8E%E7%A9%BA%E7%BB%8F%E6%B5%8E%E8%A1%A5%E8%B4%B4%E6%8E%AA%E6%96%BD)
1. [大一新生军训离队旅游教官疑似被罚](https://www.zhihu.com/search?q=%E5%A4%A7%E4%B8%80%E6%96%B0%E7%94%9F%E5%86%9B%E8%AE%AD%E7%A6%BB%E9%98%9F%E6%97%85%E6%B8%B8%E6%95%99%E5%AE%98%E7%96%91%E4%BC%BC%E8%A2%AB%E7%BD%9A)
1. [张家齐看到妈妈出丑后冷笑](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9C%8B%E5%88%B0%E5%A6%88%E5%A6%88%E5%87%BA%E4%B8%91%E5%90%8E%E5%86%B7%E7%AC%91)
1. [许嵩官宣结婚](https://www.zhihu.com/search?q=%E8%AE%B8%E5%B5%A9%E5%AE%98%E5%AE%A3%E7%BB%93%E5%A9%9A)
1. [钟南山团队发现肺结节发病新趋势](https://www.zhihu.com/search?q=%E9%92%9F%E5%8D%97%E5%B1%B1%E5%9B%A2%E9%98%9F%E5%8F%91%E7%8E%B0%E8%82%BA%E7%BB%93%E8%8A%82%E5%8F%91%E7%97%85%E6%96%B0%E8%B6%8B%E5%8A%BF)
1. [多所高校取消吸烟学生学费减免资格](https://www.zhihu.com/search?q=%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E5%8F%96%E6%B6%88%E5%90%B8%E7%83%9F%E5%AD%A6%E7%94%9F%E5%AD%A6%E8%B4%B9%E5%87%8F%E5%85%8D%E8%B5%84%E6%A0%BC)
1. [中国男篮 70-79 伊朗男篮](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%2070-79%20%E4%BC%8A%E6%9C%97%E7%94%B7%E7%AF%AE)
1. [智谱 Zcode 被曝上传 Git 操作](https://www.zhihu.com/search?q=%E6%99%BA%E8%B0%B1%20Zcode%20%E8%A2%AB%E6%9B%9D%E4%B8%8A%E4%BC%A0%20Git%20%E6%93%8D%E4%BD%9C)
1. [秦始皇陵水银来源被找到](https://www.zhihu.com/search?q=%E7%A7%A6%E5%A7%8B%E7%9A%87%E9%99%B5%E6%B0%B4%E9%93%B6%E6%9D%A5%E6%BA%90%E8%A2%AB%E6%89%BE%E5%88%B0)
1. [南京一幼儿园在洗菜池用 84 刷鞋](https://www.zhihu.com/search?q=%E5%8D%97%E4%BA%AC%E4%B8%80%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%9C%A8%E6%B4%97%E8%8F%9C%E6%B1%A0%E7%94%A8%2084%20%E5%88%B7%E9%9E%8B)
1. [理记炮轰罗永浩](https://www.zhihu.com/search?q=%E7%90%86%E8%AE%B0%E7%82%AE%E8%BD%B0%E7%BD%97%E6%B0%B8%E6%B5%A9)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Sep 22 2026 07:19:24 GMT+0800 (China Standard Time) -->

1. [网友呼吁归还配料表中的白砂糖，它为啥重回白月光？食品饮料为何用果葡糖浆替代白砂糖？前者会影响健康吗？](https://www.zhihu.com/question/2085265745911309800)
1. [网购燃气灶防风罩一月后妻儿中毒死亡，该产品为何会导致如此严重的事故？是否该全面禁售？](https://www.zhihu.com/question/2085143623151235600)
1. [大一新生军训跑去旅游，网传学校报警寻人、教官被取消留役资格，校方回应该生正办理退学手续，如何看待此事？](https://www.zhihu.com/question/2085141629112010000)
1. [如何看待中共中央办公厅、国务院办公厅印发《关于分类推进高校改革的意见》？](https://www.zhihu.com/question/2085106449617892600)
1. [如何评价 2026 年全国中学生物理竞赛机构营及复赛大规模出现AI「辅助答题」行为？](https://www.zhihu.com/question/2085386253248350200)
1. [如何看待新华社新闻“公然侮辱诋毁乒乓球、跳水运动员，多人被罚！”？](https://www.zhihu.com/question/2084583841319106600)
1. [如何看待米哈游26年9月21日的反舞弊通报？](https://www.zhihu.com/question/2085375928109097500)
1. [为什么很多国人喜欢把手机和电脑的系统语言设置成英文？](https://www.zhihu.com/question/28352699)
1. [如何看待 Anthropic 推演 2030 年美国经济中「钱将继续流向有钱人」的结论？](https://www.zhihu.com/question/2085308622058120000)
1. [新一期LPR公布，1年期为3.0%，5年期以上为3.5%，均连续16个月保持不变，如何解读？](https://www.zhihu.com/question/2084934611600151600)
1. [闲鱼回应「暗藏涉黄产业链，涉大量未成年」，称已成立专项小组，情况有多严重？应怎样加强监管？](https://www.zhihu.com/question/2084398387164624400)
1. [一医院被曝不给实习生放中秋假，遭网络曝光后疑医院职工称要「整死」爆料者，哪些信息值得关注？](https://www.zhihu.com/question/2085398243685267000)
1. [iPhone18 Pro涨价后，现在还坚持一步到位买大容量内存的，是否在为品牌溢价买单？](https://www.zhihu.com/question/2085028629323560700)
1. [中国队夺亚运会男子 4×200 米自由泳接力金牌，最后一棒张展硕上演大逆转，怎样评价他们的表现？](https://www.zhihu.com/question/2085425672294330600)
1. [施一公称西湖大学放弃科研量化指标，对高校学术评价有何启示和挑战？](https://www.zhihu.com/question/2084637163774277000)
1. [浙江女子散步时被蝙蝠撞脸未发现伤口，医生称只要直接接触按 III 级暴露处置，这是为什么？](https://www.zhihu.com/question/2083136966967805400)
1. [一中大侠退学了，你怎么看？](https://www.zhihu.com/question/2082747171796001500)
1. [日常把家里收拾干净、规律作息，看似无用的小事，为何能治愈精神内耗？](https://www.zhihu.com/question/2061392774667227100)
1. [为什么现在掀起了对古早影视剧的吐槽热潮，比如步步惊心，如懿传之类的影视作品？](https://www.zhihu.com/question/2082878564236641300)
1. [现在纯牛奶每100毫升的蛋白质含量，怎么越来越高了？高的牛奶已经到4.0了?](https://www.zhihu.com/question/2068401908591727400)
1. [苹果硬件负责人称看到 iPhone 贴膜就浑身不自在，这反映了厂商与用户之间怎样的理念冲突？](https://www.zhihu.com/question/2084949965886048300)
1. [如何看待胡歌电影之路发展不顺？他路人缘那么好，为什么票房一直扑？](https://www.zhihu.com/question/2084833286736692700)
1. [iPhone17正常使用，能用几年？](https://www.zhihu.com/question/1969638438677517000)
1. [司机好心补路、拉绳警示，导致路过女子被绳索勒颈身亡，被以过失致人死亡罪逮捕，如何从法律角度解读？](https://www.zhihu.com/question/2083518548656253000)
1. [佟丽娅拒绝参与行业奖项评选，不愿承受获奖后非议，如何看待这一选择？作品口碑能否替代奖项认可？](https://www.zhihu.com/question/2084284624364991500)
1. [油车和电车跑长途，各自在什么情况下更适合做自驾主力？](https://www.zhihu.com/question/2083290959194997200)
1. [为什么历史上闽南地区的人无法把珠三角拿下？](https://www.zhihu.com/question/584205819)
1. [如何评价施瓦辛格的电影《真实的谎言》？](https://www.zhihu.com/question/31593203)
1. [iG 成 LPL 史上首支涅槃组晋级全球总决赛资格赛队伍，如何评价其表现？](https://www.zhihu.com/question/2084757349433198300)
1. [中学生花大量时间整理错题本，真的比直接刷题更有效吗？](https://www.zhihu.com/question/2084604477810668500)
1. [四川大学等高校规定，有吸烟等消费型不良嗜好就取消学费减免资格，这一规定合理吗？](https://www.zhihu.com/question/2085328278622036700)
1. [波兰总理的说法，是不是关于乌克兰军队伤亡人数最客观的证据？](https://www.zhihu.com/question/2084721304435955700)
1. [如何看待ZCode于0921开源并关闭issue？](https://www.zhihu.com/question/2085298741364388000)
1. [哪些角色/人物能让你惊呼「他们居然是同一个人」？](https://www.zhihu.com/question/26914197)
1. [为什么《火影忍者》的忍术常常需要结印？](https://www.zhihu.com/question/2084240549620535600)
1. [写小说的基本功都有哪些？](https://www.zhihu.com/question/2081295822675764500)
1. [如何看待樊振东入选2025中国品牌人物500强，位列第19名？](https://www.zhihu.com/question/2085407691028091000)
1. [职场上“太负责”，到底是优点，还是给自己挖坑？](https://www.zhihu.com/question/2081121291998962000)
1. [​为什么当下ACT游戏中，以“长枪”为主武器的主角很少？](https://www.zhihu.com/question/2083678727662318000)
1. [有哪些特别有风格（包括画风绝佳、特别唯美）的漫画和漫画家？](https://www.zhihu.com/question/265059475)
1. [韩立修仙修到最后，有孙悟空的几成实力？](https://www.zhihu.com/question/2077679926761755000)
1. [“学习的本质是极致的重复”，这个对吗？](https://www.zhihu.com/question/788419129)

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
<!-- 最后更新时间 Tue Sep 22 2026 09:40:27 GMT+0800 (China Standard Time) -->

1. [二十届五中全会10月26日至29日召开](https://s.weibo.com//weibo?q=%23%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A10%E6%9C%8826%E6%97%A5%E8%87%B329%E6%97%A5%E5%8F%AC%E5%BC%80%23&Refer=new_time)
1. [美心月饼打六折卖](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%BF%83%E6%9C%88%E9%A5%BC%E6%89%93%E5%85%AD%E6%8A%98%E5%8D%96%23&t=31&band_rank=1&Refer=top)
1. [盛夏晴朗](https://s.weibo.com//weibo?q=%E7%9B%9B%E5%A4%8F%E6%99%B4%E6%9C%97&t=31&band_rank=2&Refer=top)
1. [两部门紧急拨付2亿支持4省救灾](https://s.weibo.com//weibo?q=%23%E4%B8%A4%E9%83%A8%E9%97%A8%E7%B4%A7%E6%80%A5%E6%8B%A8%E4%BB%982%E4%BA%BF%E6%94%AF%E6%8C%814%E7%9C%81%E6%95%91%E7%81%BE%23&t=31&band_rank=3&Refer=top)
1. [潘展乐 张展硕](https://s.weibo.com//weibo?q=%E6%BD%98%E5%B1%95%E4%B9%90%20%E5%BC%A0%E5%B1%95%E7%A1%95&t=31&band_rank=4&Refer=top)
1. [代孕机构16万贩卖多余婴儿](https://s.weibo.com//weibo?q=%E4%BB%A3%E5%AD%95%E6%9C%BA%E6%9E%8416%E4%B8%87%E8%B4%A9%E5%8D%96%E5%A4%9A%E4%BD%99%E5%A9%B4%E5%84%BF&t=31&band_rank=5&Refer=top)
1. [国家电网传来重磅突破](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%94%B5%E7%BD%91%E4%BC%A0%E6%9D%A5%E9%87%8D%E7%A3%85%E7%AA%81%E7%A0%B4%23&t=31&band_rank=6&Refer=top)
1. [AI或可替代教师只需一个班主任](https://s.weibo.com//weibo?q=AI%E6%88%96%E5%8F%AF%E6%9B%BF%E4%BB%A3%E6%95%99%E5%B8%88%E5%8F%AA%E9%9C%80%E4%B8%80%E4%B8%AA%E7%8F%AD%E4%B8%BB%E4%BB%BB&t=31&band_rank=7&Refer=top)
1. [刘雨昕帮谢金燕发声](https://s.weibo.com//weibo?q=%23%E5%88%98%E9%9B%A8%E6%98%95%E5%B8%AE%E8%B0%A2%E9%87%91%E7%87%95%E5%8F%91%E5%A3%B0%23&t=31&band_rank=8&Refer=top)
1. [中国女排vs日本女排决赛](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8E%92%E5%86%B3%E8%B5%9B&t=31&band_rank=9&Refer=top)
1. [许嵩我们的感情没问题](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E5%B5%A9%E6%88%91%E4%BB%AC%E7%9A%84%E6%84%9F%E6%83%85%E6%B2%A1%E9%97%AE%E9%A2%98%23&t=31&band_rank=10&Refer=top)
1. [王俊凯回复王源用了波浪号](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%9B%9E%E5%A4%8D%E7%8E%8B%E6%BA%90%E7%94%A8%E4%BA%86%E6%B3%A2%E6%B5%AA%E5%8F%B7%23&t=31&band_rank=11&Refer=top)
1. [雷军澄清早餐被骂装](https://s.weibo.com//weibo?q=%E9%9B%B7%E5%86%9B%E6%BE%84%E6%B8%85%E6%97%A9%E9%A4%90%E8%A2%AB%E9%AA%82%E8%A3%85&t=31&band_rank=12&Refer=top)
1. [吴尊晒NeiNei穿婚服](https://s.weibo.com//weibo?q=%E5%90%B4%E5%B0%8A%E6%99%92NeiNei%E7%A9%BF%E5%A9%9A%E6%9C%8D&t=31&band_rank=13&Refer=top)
1. [炒菜锅洗拖把致50名幼儿集体呕吐](https://s.weibo.com//weibo?q=%23%E7%82%92%E8%8F%9C%E9%94%85%E6%B4%97%E6%8B%96%E6%8A%8A%E8%87%B450%E5%90%8D%E5%B9%BC%E5%84%BF%E9%9B%86%E4%BD%93%E5%91%95%E5%90%90%23&t=31&band_rank=14&Refer=top)
1. [张百乔点赞被云离婚](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E7%82%B9%E8%B5%9E%E8%A2%AB%E4%BA%91%E7%A6%BB%E5%A9%9A%23&t=31&band_rank=15&Refer=top)
1. [肖战湾区升明月的权威我后知后觉](https://s.weibo.com//weibo?q=%E8%82%96%E6%88%98%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E7%9A%84%E6%9D%83%E5%A8%81%E6%88%91%E5%90%8E%E7%9F%A5%E5%90%8E%E8%A7%89&t=31&band_rank=16&Refer=top)
1. [张展硕回应反超绝杀日本队](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E5%9B%9E%E5%BA%94%E5%8F%8D%E8%B6%85%E7%BB%9D%E6%9D%80%E6%97%A5%E6%9C%AC%E9%98%9F%23&t=31&band_rank=17&Refer=top)
1. [曝某S加女主片酬从几千万降至100万](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%9F%90S%E5%8A%A0%E5%A5%B3%E4%B8%BB%E7%89%87%E9%85%AC%E4%BB%8E%E5%87%A0%E5%8D%83%E4%B8%87%E9%99%8D%E8%87%B3100%E4%B8%87%23&t=31&band_rank=18&Refer=top)
1. [不二之臣转发金允植](https://s.weibo.com//weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%E8%BD%AC%E5%8F%91%E9%87%91%E5%85%81%E6%A4%8D%23&t=31&band_rank=19&Refer=top)
1. [日本老龄化体现在亚运会颁奖礼](https://s.weibo.com//weibo?q=%E6%97%A5%E6%9C%AC%E8%80%81%E9%BE%84%E5%8C%96%E4%BD%93%E7%8E%B0%E5%9C%A8%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%A2%81%E5%A5%96%E7%A4%BC&t=31&band_rank=20&Refer=top)
1. [对一千块钱的概念越来越模糊了](https://s.weibo.com//weibo?q=%E5%AF%B9%E4%B8%80%E5%8D%83%E5%9D%97%E9%92%B1%E7%9A%84%E6%A6%82%E5%BF%B5%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%A8%A1%E7%B3%8A%E4%BA%86&t=31&band_rank=21&Refer=top)
1. [鹿晗养头发的痛](https://s.weibo.com//weibo?q=%E9%B9%BF%E6%99%97%E5%85%BB%E5%A4%B4%E5%8F%91%E7%9A%84%E7%97%9B&t=31&band_rank=22&Refer=top)
1. [王俊凯跟王源说话语气都变温柔了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%B7%9F%E7%8E%8B%E6%BA%90%E8%AF%B4%E8%AF%9D%E8%AF%AD%E6%B0%94%E9%83%BD%E5%8F%98%E6%B8%A9%E6%9F%94%E4%BA%86%23&t=31&band_rank=23&Refer=top)
1. [吕蕺儿不跟林大爷求救的原因](https://s.weibo.com//weibo?q=%23%E5%90%95%E8%95%BA%E5%84%BF%E4%B8%8D%E8%B7%9F%E6%9E%97%E5%A4%A7%E7%88%B7%E6%B1%82%E6%95%91%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=24&Refer=top)
1. [不二之臣致歉声明](https://s.weibo.com//weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23&t=31&band_rank=25&Refer=top)
1. [Meta市值一夜暴增1.29万亿](https://s.weibo.com//weibo?q=%23Meta%E5%B8%82%E5%80%BC%E4%B8%80%E5%A4%9C%E6%9A%B4%E5%A2%9E1.29%E4%B8%87%E4%BA%BF%23&t=31&band_rank=26&Refer=top)
1. [初中生早餐 碳水配碳水](https://s.weibo.com//weibo?q=%E5%88%9D%E4%B8%AD%E7%94%9F%E6%97%A9%E9%A4%90%20%E7%A2%B3%E6%B0%B4%E9%85%8D%E7%A2%B3%E6%B0%B4&t=31&band_rank=27&Refer=top)
1. [Lisa疑似与blue谈恋爱了](https://s.weibo.com//weibo?q=%23Lisa%E7%96%91%E4%BC%BC%E4%B8%8Eblue%E8%B0%88%E6%81%8B%E7%88%B1%E4%BA%86%23&t=31&band_rank=28&Refer=top)
1. [iPhone18Pro吐槽](https://s.weibo.com//weibo?q=%23iPhone18Pro%E5%90%90%E6%A7%BD%23&t=31&band_rank=29&Refer=top)
1. [中国队亚运会今日看点](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%BB%8A%E6%97%A5%E7%9C%8B%E7%82%B9%23&t=31&band_rank=30&Refer=top)
1. [谢金燕回应没戴麦](https://s.weibo.com//weibo?q=%23%E8%B0%A2%E9%87%91%E7%87%95%E5%9B%9E%E5%BA%94%E6%B2%A1%E6%88%B4%E9%BA%A6%23&t=31&band_rank=31&Refer=top)
1. [曝田曦薇严浩翔主演雪粒镇](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%A5%E6%B5%A9%E7%BF%94%E4%B8%BB%E6%BC%94%E9%9B%AA%E7%B2%92%E9%95%87%23&t=31&band_rank=32&Refer=top)
1. [曝金鹰奖最佳男女主](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E5%A5%B3%E4%B8%BB%23&t=31&band_rank=33&Refer=top)
1. [面包和馒头经常吃哪个更健康](https://s.weibo.com//weibo?q=%23%E9%9D%A2%E5%8C%85%E5%92%8C%E9%A6%92%E5%A4%B4%E7%BB%8F%E5%B8%B8%E5%90%83%E5%93%AA%E4%B8%AA%E6%9B%B4%E5%81%A5%E5%BA%B7%23&t=31&band_rank=34&Refer=top)
1. [老人送医担架掉落头部着地后去世](https://s.weibo.com//weibo?q=%23%E8%80%81%E4%BA%BA%E9%80%81%E5%8C%BB%E6%8B%85%E6%9E%B6%E6%8E%89%E8%90%BD%E5%A4%B4%E9%83%A8%E7%9D%80%E5%9C%B0%E5%90%8E%E5%8E%BB%E4%B8%96%23&t=31&band_rank=35&Refer=top)
1. [孟子义抓彩带给关晓彤](https://s.weibo.com//weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8A%93%E5%BD%A9%E5%B8%A6%E7%BB%99%E5%85%B3%E6%99%93%E5%BD%A4%23&t=31&band_rank=36&Refer=top)
1. [麦当劳被曝提前点出餐](https://s.weibo.com//weibo?q=%E9%BA%A6%E5%BD%93%E5%8A%B3%E8%A2%AB%E6%9B%9D%E6%8F%90%E5%89%8D%E7%82%B9%E5%87%BA%E9%A4%90&t=31&band_rank=37&Refer=top)
1. [油价节前或大涨](https://s.weibo.com//weibo?q=%23%E6%B2%B9%E4%BB%B7%E8%8A%82%E5%89%8D%E6%88%96%E5%A4%A7%E6%B6%A8%23&t=31&band_rank=38&Refer=top)
1. [美半导体股暴涨原因](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%8D%8A%E5%AF%BC%E4%BD%93%E8%82%A1%E6%9A%B4%E6%B6%A8%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=39&Refer=top)
1. [五个月坚持下来减重15斤](https://s.weibo.com//weibo?q=%23%E4%BA%94%E4%B8%AA%E6%9C%88%E5%9D%9A%E6%8C%81%E4%B8%8B%E6%9D%A5%E5%87%8F%E9%87%8D15%E6%96%A4%23&t=31&band_rank=40&Refer=top)
1. [兰香也不喊林锦岐大爷了](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E4%B9%9F%E4%B8%8D%E5%96%8A%E6%9E%97%E9%94%A6%E5%B2%90%E5%A4%A7%E7%88%B7%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [曝华为Mate90系列线下开始分货](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BAMate90%E7%B3%BB%E5%88%97%E7%BA%BF%E4%B8%8B%E5%BC%80%E5%A7%8B%E5%88%86%E8%B4%A7%23&t=31&band_rank=42&Refer=top)
1. [马竞官方嘲讽皇马](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E7%AB%9E%E5%AE%98%E6%96%B9%E5%98%B2%E8%AE%BD%E7%9A%87%E9%A9%AC%23&t=31&band_rank=43&Refer=top)
1. [覃海洋回应状态下滑](https://s.weibo.com//weibo?q=%23%E8%A6%83%E6%B5%B7%E6%B4%8B%E5%9B%9E%E5%BA%94%E7%8A%B6%E6%80%81%E4%B8%8B%E6%BB%91%23&t=31&band_rank=44&Refer=top)
1. [亚运会](https://s.weibo.com//weibo?q=%E4%BA%9A%E8%BF%90%E4%BC%9A&t=31&band_rank=45&Refer=top)
1. [你身体缺什么其实早就显露出来了](https://s.weibo.com//weibo?q=%E4%BD%A0%E8%BA%AB%E4%BD%93%E7%BC%BA%E4%BB%80%E4%B9%88%E5%85%B6%E5%AE%9E%E6%97%A9%E5%B0%B1%E6%98%BE%E9%9C%B2%E5%87%BA%E6%9D%A5%E4%BA%86&t=31&band_rank=46&Refer=top)
1. [巴图姆退役](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E5%9B%BE%E5%A7%86%E9%80%80%E5%BD%B9%23&t=31&band_rank=47&Refer=top)
1. [柬埔寨电诈园区内部曝光](https://s.weibo.com//weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%86%85%E9%83%A8%E6%9B%9D%E5%85%89%23&t=31&band_rank=48&Refer=top)
1. [肖战我们俩有点暧昧了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%88%91%E4%BB%AC%E4%BF%A9%E6%9C%89%E7%82%B9%E6%9A%A7%E6%98%A7%E4%BA%86%23&t=31&band_rank=49&Refer=top)
1. [美股科技股集体大涨](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1%E7%A7%91%E6%8A%80%E8%82%A1%E9%9B%86%E4%BD%93%E5%A4%A7%E6%B6%A8&t=31&band_rank=50&Refer=top)
1. [习近平9月23日至25日访问美国](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B39%E6%9C%8823%E6%97%A5%E8%87%B325%E6%97%A5%E8%AE%BF%E9%97%AE%E7%BE%8E%E5%9B%BD%23&Refer=new_time)
1. [潘展乐 张展硕](https://s.weibo.com//weibo?q=%E6%BD%98%E5%B1%95%E4%B9%90%20%E5%BC%A0%E5%B1%95%E7%A1%95&t=31&band_rank=1&Refer=top)
1. [16岁少年与14岁女孩发生关系判3年](https://s.weibo.com//weibo?q=%2316%E5%B2%81%E5%B0%91%E5%B9%B4%E4%B8%8E14%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%E5%88%A43%E5%B9%B4%23&t=31&band_rank=2&Refer=top)
1. [AI或可替代教师只需一个班主任](https://s.weibo.com//weibo?q=AI%E6%88%96%E5%8F%AF%E6%9B%BF%E4%BB%A3%E6%95%99%E5%B8%88%E5%8F%AA%E9%9C%80%E4%B8%80%E4%B8%AA%E7%8F%AD%E4%B8%BB%E4%BB%BB&t=31&band_rank=4&Refer=top)
1. [中国女子仙本那旅游遭男子闯入脱衣](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E4%BB%99%E6%9C%AC%E9%82%A3%E6%97%85%E6%B8%B8%E9%81%AD%E7%94%B7%E5%AD%90%E9%97%AF%E5%85%A5%E8%84%B1%E8%A1%A3%23&t=31&band_rank=5&Refer=top)
1. [X300 X500](https://s.weibo.com//weibo?q=X300%20X500&t=31&band_rank=6&Refer=top)
1. [潘展乐张展硕接力逆转](https://s.weibo.com//weibo?q=%E6%BD%98%E5%B1%95%E4%B9%90%E5%BC%A0%E5%B1%95%E7%A1%95%E6%8E%A5%E5%8A%9B%E9%80%86%E8%BD%AC&t=31&band_rank=7&Refer=top)
1. [名古屋亚运会游泳](https://s.weibo.com//weibo?q=%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B8%B8%E6%B3%B3&t=31&band_rank=8&Refer=top)
1. [曝金鹰奖最佳男女主](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E5%A5%B3%E4%B8%BB%23&t=31&band_rank=9&Refer=top)
1. [林锦岐许兰香洞房强制爱](https://s.weibo.com//weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E8%AE%B8%E5%85%B0%E9%A6%99%E6%B4%9E%E6%88%BF%E5%BC%BA%E5%88%B6%E7%88%B1%23&t=31&band_rank=10&Refer=top)
1. [16岁小伙被判强奸罪家属发声](https://s.weibo.com//weibo?q=%2316%E5%B2%81%E5%B0%8F%E4%BC%99%E8%A2%AB%E5%88%A4%E5%BC%BA%E5%A5%B8%E7%BD%AA%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23&t=31&band_rank=12&Refer=top)
1. [罗永浩已取证将起诉](https://s.weibo.com//weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%B7%B2%E5%8F%96%E8%AF%81%E5%B0%86%E8%B5%B7%E8%AF%89%23&t=31&band_rank=14&Refer=top)
1. [曝某S加女主片酬从几千万降至100万](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%9F%90S%E5%8A%A0%E5%A5%B3%E4%B8%BB%E7%89%87%E9%85%AC%E4%BB%8E%E5%87%A0%E5%8D%83%E4%B8%87%E9%99%8D%E8%87%B3100%E4%B8%87%23&t=31&band_rank=15&Refer=top)
1. [鹿晗养头发的痛](https://s.weibo.com//weibo?q=%E9%B9%BF%E6%99%97%E5%85%BB%E5%A4%B4%E5%8F%91%E7%9A%84%E7%97%9B&t=31&band_rank=16&Refer=top)
1. [王一博香港帆船比赛](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%A6%99%E6%B8%AF%E5%B8%86%E8%88%B9%E6%AF%94%E8%B5%9B%23&t=31&band_rank=17&Refer=top)
1. [油价节前或大涨](https://s.weibo.com//weibo?q=%23%E6%B2%B9%E4%BB%B7%E8%8A%82%E5%89%8D%E6%88%96%E5%A4%A7%E6%B6%A8%23&t=31&band_rank=18&Refer=top)
1. [vivo X500定价给友商压力](https://s.weibo.com//weibo?q=vivo%20X500%E5%AE%9A%E4%BB%B7%E7%BB%99%E5%8F%8B%E5%95%86%E5%8E%8B%E5%8A%9B&t=31&band_rank=19&Refer=top)
1. [张展硕潘展乐追回三秒差距](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E6%BD%98%E5%B1%95%E4%B9%90%E8%BF%BD%E5%9B%9E%E4%B8%89%E7%A7%92%E5%B7%AE%E8%B7%9D%23&t=31&band_rank=20&Refer=top)
1. [你身体缺什么其实早就显露出来了](https://s.weibo.com//weibo?q=%E4%BD%A0%E8%BA%AB%E4%BD%93%E7%BC%BA%E4%BB%80%E4%B9%88%E5%85%B6%E5%AE%9E%E6%97%A9%E5%B0%B1%E6%98%BE%E9%9C%B2%E5%87%BA%E6%9D%A5%E4%BA%86&t=31&band_rank=21&Refer=top)
1. [初中生早餐 碳水配碳水](https://s.weibo.com//weibo?q=%E5%88%9D%E4%B8%AD%E7%94%9F%E6%97%A9%E9%A4%90%20%E7%A2%B3%E6%B0%B4%E9%85%8D%E7%A2%B3%E6%B0%B4&t=31&band_rank=22&Refer=top)
1. [面包和馒头经常吃哪个更健康](https://s.weibo.com//weibo?q=%23%E9%9D%A2%E5%8C%85%E5%92%8C%E9%A6%92%E5%A4%B4%E7%BB%8F%E5%B8%B8%E5%90%83%E5%93%AA%E4%B8%AA%E6%9B%B4%E5%81%A5%E5%BA%B7%23&t=31&band_rank=23&Refer=top)
1. [五个月坚持下来减重15斤](https://s.weibo.com//weibo?q=%23%E4%BA%94%E4%B8%AA%E6%9C%88%E5%9D%9A%E6%8C%81%E4%B8%8B%E6%9D%A5%E5%87%8F%E9%87%8D15%E6%96%A4%23&t=31&band_rank=24&Refer=top)
1. [Lisa疑似与blue谈恋爱了](https://s.weibo.com//weibo?q=%23Lisa%E7%96%91%E4%BC%BC%E4%B8%8Eblue%E8%B0%88%E6%81%8B%E7%88%B1%E4%BA%86%23&t=31&band_rank=25&Refer=top)
1. [杨紫直播皮肤状态](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9B%B4%E6%92%AD%E7%9A%AE%E8%82%A4%E7%8A%B6%E6%80%81%23&t=31&band_rank=26&Refer=top)
1. [肖战我们俩有点暧昧了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%88%91%E4%BB%AC%E4%BF%A9%E6%9C%89%E7%82%B9%E6%9A%A7%E6%98%A7%E4%BA%86%23&t=31&band_rank=27&Refer=top)
1. [关晓彤孟子义对视绷不住一点](https://s.weibo.com//weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%AD%9F%E5%AD%90%E4%B9%89%E5%AF%B9%E8%A7%86%E7%BB%B7%E4%B8%8D%E4%BD%8F%E4%B8%80%E7%82%B9%23&t=31&band_rank=28&Refer=top)
1. [对一千块钱的概念越来越模糊了](https://s.weibo.com//weibo?q=%E5%AF%B9%E4%B8%80%E5%8D%83%E5%9D%97%E9%92%B1%E7%9A%84%E6%A6%82%E5%BF%B5%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%A8%A1%E7%B3%8A%E4%BA%86&t=31&band_rank=29&Refer=top)
1. [中国女排3比2逆转泰国](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%942%E9%80%86%E8%BD%AC%E6%B3%B0%E5%9B%BD%23&t=31&band_rank=30&Refer=top)
1. [闲鱼快成黄鱼了](https://s.weibo.com//weibo?q=%23%E9%97%B2%E9%B1%BC%E5%BF%AB%E6%88%90%E9%BB%84%E9%B1%BC%E4%BA%86%23&t=31&band_rank=31&Refer=top)
1. [一刀切开赌石的瞬间安静了](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%88%80%E5%88%87%E5%BC%80%E8%B5%8C%E7%9F%B3%E7%9A%84%E7%9E%AC%E9%97%B4%E5%AE%89%E9%9D%99%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [28岁上海读博的我迷茫了](https://s.weibo.com//weibo?q=28%E5%B2%81%E4%B8%8A%E6%B5%B7%E8%AF%BB%E5%8D%9A%E7%9A%84%E6%88%91%E8%BF%B7%E8%8C%AB%E4%BA%86&t=31&band_rank=33&Refer=top)
1. [贾国龙 公关](https://s.weibo.com//weibo?q=%E8%B4%BE%E5%9B%BD%E9%BE%99%20%E5%85%AC%E5%85%B3&t=31&band_rank=34&Refer=top)
1. [柬埔寨电诈园区内部曝光](https://s.weibo.com//weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%86%85%E9%83%A8%E6%9B%9D%E5%85%89%23&t=31&band_rank=35&Refer=top)
1. [校方回应男生逃避军训飞往上海旅游](https://s.weibo.com//weibo?q=%23%E6%A0%A1%E6%96%B9%E5%9B%9E%E5%BA%94%E7%94%B7%E7%94%9F%E9%80%83%E9%81%BF%E5%86%9B%E8%AE%AD%E9%A3%9E%E5%BE%80%E4%B8%8A%E6%B5%B7%E6%97%85%E6%B8%B8%23&t=31&band_rank=36&Refer=top)
1. [兰香如故](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85&t=31&band_rank=37&Refer=top)
1. [王俊凯居家人夫感](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B1%85%E5%AE%B6%E4%BA%BA%E5%A4%AB%E6%84%9F%23&t=31&band_rank=38&Refer=top)
1. [亚运会](https://s.weibo.com//weibo?q=%E4%BA%9A%E8%BF%90%E4%BC%9A&t=31&band_rank=39&Refer=top)
1. [谁发明的婚礼大棉棒](https://s.weibo.com//weibo?q=%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%E5%A9%9A%E7%A4%BC%E5%A4%A7%E6%A3%89%E6%A3%92&t=31&band_rank=40&Refer=top)
1. [兰香如故27集预告给我磕活了](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%8527%E9%9B%86%E9%A2%84%E5%91%8A%E7%BB%99%E6%88%91%E7%A3%95%E6%B4%BB%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [16岁小伙涉强奸证人称双方谈恋爱](https://s.weibo.com//weibo?q=%2316%E5%B2%81%E5%B0%8F%E4%BC%99%E6%B6%89%E5%BC%BA%E5%A5%B8%E8%AF%81%E4%BA%BA%E7%A7%B0%E5%8F%8C%E6%96%B9%E8%B0%88%E6%81%8B%E7%88%B1%23&t=31&band_rank=42&Refer=top)
1. [LPL瑞士轮现状](https://s.weibo.com//weibo?q=%23LPL%E7%91%9E%E5%A3%AB%E8%BD%AE%E7%8E%B0%E7%8A%B6%23&t=31&band_rank=43&Refer=top)
1. [食客评罗永浩点赞回锅肉](https://s.weibo.com//weibo?q=%E9%A3%9F%E5%AE%A2%E8%AF%84%E7%BD%97%E6%B0%B8%E6%B5%A9%E7%82%B9%E8%B5%9E%E5%9B%9E%E9%94%85%E8%82%89&t=31&band_rank=44&Refer=top)
1. [盛李豪父母成立体育公司](https://s.weibo.com//weibo?q=%23%E7%9B%9B%E6%9D%8E%E8%B1%AA%E7%88%B6%E6%AF%8D%E6%88%90%E7%AB%8B%E4%BD%93%E8%82%B2%E5%85%AC%E5%8F%B8%23&t=31&band_rank=45&Refer=top)
1. [张展硕回应分段1分42秒92最快](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E5%9B%9E%E5%BA%94%E5%88%86%E6%AE%B51%E5%88%8642%E7%A7%9292%E6%9C%80%E5%BF%AB%23&t=31&band_rank=46&Refer=top)
1. [一瓯春](https://s.weibo.com//weibo?q=%E4%B8%80%E7%93%AF%E6%98%A5&t=31&band_rank=47&Refer=top)
1. [女子仙本那旅游凌晨遭男子闯入脱衣](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%99%E6%9C%AC%E9%82%A3%E6%97%85%E6%B8%B8%E5%87%8C%E6%99%A8%E9%81%AD%E7%94%B7%E5%AD%90%E9%97%AF%E5%85%A5%E8%84%B1%E8%A1%A3%23&t=31&band_rank=48&Refer=top)
1. [中国游泳队金金金金金](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E6%B3%B3%E9%98%9F%E9%87%91%E9%87%91%E9%87%91%E9%87%91%E9%87%91%23&t=31&band_rank=49&Refer=top)
1. [潘展乐称张展硕是奇迹之子](https://s.weibo.com//weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E7%A7%B0%E5%BC%A0%E5%B1%95%E7%A1%95%E6%98%AF%E5%A5%87%E8%BF%B9%E4%B9%8B%E5%AD%90%23&t=31&band_rank=50&Refer=top)
1. [中国女子仙本那旅游遭男子闯入脱衣](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E4%BB%99%E6%9C%AC%E9%82%A3%E6%97%85%E6%B8%B8%E9%81%AD%E7%94%B7%E5%AD%90%E9%97%AF%E5%85%A5%E8%84%B1%E8%A1%A3%23&t=31&band_rank=1&Refer=top)
1. [坚持四个注重做强先进制造业](https://s.weibo.com//weibo?q=%23%E5%9D%9A%E6%8C%81%E5%9B%9B%E4%B8%AA%E6%B3%A8%E9%87%8D%E5%81%9A%E5%BC%BA%E5%85%88%E8%BF%9B%E5%88%B6%E9%80%A0%E4%B8%9A%23&t=31&band_rank=3&Refer=top)
1. [16岁小伙被判强奸罪家属发声](https://s.weibo.com//weibo?q=%2316%E5%B2%81%E5%B0%8F%E4%BC%99%E8%A2%AB%E5%88%A4%E5%BC%BA%E5%A5%B8%E7%BD%AA%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23&t=31&band_rank=5&Refer=top)
1. [曝某S加女主片酬从几千万降至100万](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%9F%90S%E5%8A%A0%E5%A5%B3%E4%B8%BB%E7%89%87%E9%85%AC%E4%BB%8E%E5%87%A0%E5%8D%83%E4%B8%87%E9%99%8D%E8%87%B3100%E4%B8%87%23&t=31&band_rank=6&Refer=top)
1. [吴尊晒NeiNei穿婚服](https://s.weibo.com//weibo?q=%E5%90%B4%E5%B0%8A%E6%99%92NeiNei%E7%A9%BF%E5%A9%9A%E6%9C%8D&t=31&band_rank=7&Refer=top)
1. [Lisa疑似与blue谈恋爱了](https://s.weibo.com//weibo?q=%23Lisa%E7%96%91%E4%BC%BC%E4%B8%8Eblue%E8%B0%88%E6%81%8B%E7%88%B1%E4%BA%86%23&t=31&band_rank=8&Refer=top)
1. [X300 X500](https://s.weibo.com//weibo?q=X300%20X500&t=31&band_rank=10&Refer=top)
1. [张家齐这一跳完全就是教科书级别](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%BF%99%E4%B8%80%E8%B7%B3%E5%AE%8C%E5%85%A8%E5%B0%B1%E6%98%AF%E6%95%99%E7%A7%91%E4%B9%A6%E7%BA%A7%E5%88%AB%23&t=31&band_rank=11&Refer=top)
1. [柬埔寨电诈园区内部曝光](https://s.weibo.com//weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%86%85%E9%83%A8%E6%9B%9D%E5%85%89%23&t=31&band_rank=12&Refer=top)
1. [罗永浩已取证将起诉](https://s.weibo.com//weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%B7%B2%E5%8F%96%E8%AF%81%E5%B0%86%E8%B5%B7%E8%AF%89%23&t=31&band_rank=13&Refer=top)
1. [名古屋亚运会游泳](https://s.weibo.com//weibo?q=%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B8%B8%E6%B3%B3&t=31&band_rank=14&Refer=top)
1. [vivo X500定价给友商压力](https://s.weibo.com//weibo?q=vivo%20X500%E5%AE%9A%E4%BB%B7%E7%BB%99%E5%8F%8B%E5%95%86%E5%8E%8B%E5%8A%9B&t=31&band_rank=15&Refer=top)
1. [方圆向王者荣耀游戏玩家道歉](https://s.weibo.com//weibo?q=%23%E6%96%B9%E5%9C%86%E5%90%91%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%B8%B8%E6%88%8F%E7%8E%A9%E5%AE%B6%E9%81%93%E6%AD%89%23&t=31&band_rank=17&Refer=top)
1. [关晓彤孟子义对视绷不住一点](https://s.weibo.com//weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%AD%9F%E5%AD%90%E4%B9%89%E5%AF%B9%E8%A7%86%E7%BB%B7%E4%B8%8D%E4%BD%8F%E4%B8%80%E7%82%B9%23&t=31&band_rank=18&Refer=top)
1. [贾国龙 公关](https://s.weibo.com//weibo?q=%E8%B4%BE%E5%9B%BD%E9%BE%99%20%E5%85%AC%E5%85%B3&t=31&band_rank=19&Refer=top)
1. [兰香如故](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85&t=31&band_rank=20&Refer=top)
1. [谁发明的婚礼大棉棒](https://s.weibo.com//weibo?q=%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%E5%A9%9A%E7%A4%BC%E5%A4%A7%E6%A3%89%E6%A3%92&t=31&band_rank=22&Refer=top)
1. [初中生早餐 碳水配碳水](https://s.weibo.com//weibo?q=%E5%88%9D%E4%B8%AD%E7%94%9F%E6%97%A9%E9%A4%90%20%E7%A2%B3%E6%B0%B4%E9%85%8D%E7%A2%B3%E6%B0%B4&t=31&band_rank=23&Refer=top)
1. [张展硕潘展乐追回三秒差距](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E6%BD%98%E5%B1%95%E4%B9%90%E8%BF%BD%E5%9B%9E%E4%B8%89%E7%A7%92%E5%B7%AE%E8%B7%9D%23&t=31&band_rank=24&Refer=top)
1. [王者回应打击黑灰产](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%80%85%E5%9B%9E%E5%BA%94%E6%89%93%E5%87%BB%E9%BB%91%E7%81%B0%E4%BA%A7%23&t=31&band_rank=25&Refer=top)
1. [vivoX500系列测评](https://s.weibo.com//weibo?q=%23vivoX500%E7%B3%BB%E5%88%97%E6%B5%8B%E8%AF%84%23&t=31&band_rank=26&Refer=top)
1. [小米汽车仅公布首批和首销月数据](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E4%BB%85%E5%85%AC%E5%B8%83%E9%A6%96%E6%89%B9%E5%92%8C%E9%A6%96%E9%94%80%E6%9C%88%E6%95%B0%E6%8D%AE&t=31&band_rank=27&Refer=top)
1. [亚运会](https://s.weibo.com//weibo?q=%E4%BA%9A%E8%BF%90%E4%BC%9A&t=31&band_rank=28&Refer=top)
1. [白鹿锁骨能接发夹](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E9%94%81%E9%AA%A8%E8%83%BD%E6%8E%A5%E5%8F%91%E5%A4%B9%23&t=31&band_rank=29&Refer=top)
1. [特朗普回应中美元首会晤](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%23&t=31&band_rank=30&Refer=top)
1. [五个月坚持下来减重15斤](https://s.weibo.com//weibo?q=%23%E4%BA%94%E4%B8%AA%E6%9C%88%E5%9D%9A%E6%8C%81%E4%B8%8B%E6%9D%A5%E5%87%8F%E9%87%8D15%E6%96%A4%23&t=31&band_rank=32&Refer=top)
1. [张佳宁机场都要人扶着走](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E4%BD%B3%E5%AE%81%E6%9C%BA%E5%9C%BA%E9%83%BD%E8%A6%81%E4%BA%BA%E6%89%B6%E7%9D%80%E8%B5%B0%23&t=31&band_rank=33&Refer=top)
1. [贵阳街头10元脆哨炒饭发明人是天才](https://s.weibo.com//weibo?q=%E8%B4%B5%E9%98%B3%E8%A1%97%E5%A4%B410%E5%85%83%E8%84%86%E5%93%A8%E7%82%92%E9%A5%AD%E5%8F%91%E6%98%8E%E4%BA%BA%E6%98%AF%E5%A4%A9%E6%89%8D&t=31&band_rank=34&Refer=top)
1. [28岁上海读博的我迷茫了](https://s.weibo.com//weibo?q=28%E5%B2%81%E4%B8%8A%E6%B5%B7%E8%AF%BB%E5%8D%9A%E7%9A%84%E6%88%91%E8%BF%B7%E8%8C%AB%E4%BA%86&t=31&band_rank=35&Refer=top)
1. [重庆理工大学通报女子称遭性侵](https://s.weibo.com//weibo?q=%23%E9%87%8D%E5%BA%86%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E6%80%A7%E4%BE%B5%23&t=31&band_rank=37&Refer=top)
1. [16岁小伙涉强奸证人称双方谈恋爱](https://s.weibo.com//weibo?q=%2316%E5%B2%81%E5%B0%8F%E4%BC%99%E6%B6%89%E5%BC%BA%E5%A5%B8%E8%AF%81%E4%BA%BA%E7%A7%B0%E5%8F%8C%E6%96%B9%E8%B0%88%E6%81%8B%E7%88%B1%23&t=31&band_rank=38&Refer=top)
1. [X500系列 12GB](https://s.weibo.com//weibo?q=X500%E7%B3%BB%E5%88%97%2012GB&t=31&band_rank=39&Refer=top)
1. [LPL瑞士轮现状](https://s.weibo.com//weibo?q=%23LPL%E7%91%9E%E5%A3%AB%E8%BD%AE%E7%8E%B0%E7%8A%B6%23&t=31&band_rank=40&Refer=top)
1. [杨紫直播皮肤状态](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9B%B4%E6%92%AD%E7%9A%AE%E8%82%A4%E7%8A%B6%E6%80%81%23&t=31&band_rank=41&Refer=top)
1. [王一博香港帆船比赛](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%A6%99%E6%B8%AF%E5%B8%86%E8%88%B9%E6%AF%94%E8%B5%9B%23&t=31&band_rank=42&Refer=top)
1. [vivo X500 Pro Max体验](https://s.weibo.com//weibo?q=vivo%20X500%20Pro%20Max%E4%BD%93%E9%AA%8C&t=31&band_rank=43&Refer=top)
1. [网友配音过后的周也哭戏](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E9%85%8D%E9%9F%B3%E8%BF%87%E5%90%8E%E7%9A%84%E5%91%A8%E4%B9%9F%E5%93%AD%E6%88%8F&t=31&band_rank=44&Refer=top)
1. [vivo X500系列发布](https://s.weibo.com//weibo?q=vivo%20X500%E7%B3%BB%E5%88%97%E5%8F%91%E5%B8%83&t=31&band_rank=45&Refer=top)
1. [一刀切开赌石的瞬间安静了](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%88%80%E5%88%87%E5%BC%80%E8%B5%8C%E7%9F%B3%E7%9A%84%E7%9E%AC%E9%97%B4%E5%AE%89%E9%9D%99%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [秀才 兰香](https://s.weibo.com//weibo?q=%E7%A7%80%E6%89%8D%20%E5%85%B0%E9%A6%99&t=31&band_rank=47&Refer=top)
1. [肖战我们俩有点暧昧了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%88%91%E4%BB%AC%E4%BF%A9%E6%9C%89%E7%82%B9%E6%9A%A7%E6%98%A7%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [印度一对情侣晚归被多人围堵施暴](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%AF%B9%E6%83%85%E4%BE%A3%E6%99%9A%E5%BD%92%E8%A2%AB%E5%A4%9A%E4%BA%BA%E5%9B%B4%E5%A0%B5%E6%96%BD%E6%9A%B4%23&t=31&band_rank=49&Refer=top)
1. [王俊凯回复敖子逸](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%9B%9E%E5%A4%8D%E6%95%96%E5%AD%90%E9%80%B8&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
