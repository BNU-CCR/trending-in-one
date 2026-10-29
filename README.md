# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-29 22:23:05

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
<!-- 最后更新时间 Fri Oct 30 2026 03:13:17 GMT+0800 (China Standard Time) -->

1. [中共中央30日上午举行新闻发布会](https://so.toutiao.com/search?keyword=中共中央30日上午举行新闻发布会)
1. [邀全网喝喜酒小伙打工3年攒了近17万](https://so.toutiao.com/search?keyword=邀全网喝喜酒小伙打工3年攒了近17万)
1. [“三张桌子”看作风](https://so.toutiao.com/search?keyword=“三张桌子”看作风)
1. [工资改发数字人民币了有啥变化](https://so.toutiao.com/search?keyword=工资改发数字人民币了有啥变化)
1. [阻碍中国防长参会 菲方怕些什么](https://so.toutiao.com/search?keyword=阻碍中国防长参会%20菲方怕些什么)
1. [国防部回应新一代核潜艇参与导弹试射](https://so.toutiao.com/search?keyword=国防部回应新一代核潜艇参与导弹试射)
1. [华为阔直板上市50天出货量超100万台](https://so.toutiao.com/search?keyword=华为阔直板上市50天出货量超100万台)
1. [国防部：菲方非法坐滩军舰早该被拖走](https://so.toutiao.com/search?keyword=国防部：菲方非法坐滩军舰早该被拖走)
1. [跨越山海的开放活力](https://so.toutiao.com/search?keyword=跨越山海的开放活力)
1. [日学者：高市对华混合战布局已成形](https://so.toutiao.com/search?keyword=日学者：高市对华混合战布局已成形)
1. [打破“茅台洗脚”污名谣言](https://so.toutiao.com/search?keyword=打破“茅台洗脚”污名谣言)
1. [人民日报锐评年轻人养不起老人了](https://so.toutiao.com/search?keyword=人民日报锐评年轻人养不起老人了)
1. [何洁直言05超女“前三我都不爽”](https://so.toutiao.com/search?keyword=何洁直言05超女“前三我都不爽”)
1. [乌干达15年吃掉38人“食人魔”落网](https://so.toutiao.com/search?keyword=乌干达15年吃掉38人“食人魔”落网)
1. [邀网友赴婚礼的小伙：女友是我的动力](https://so.toutiao.com/search?keyword=邀网友赴婚礼的小伙：女友是我的动力)
1. [已故演员高秀敏被印上祭祀用品](https://so.toutiao.com/search?keyword=已故演员高秀敏被印上祭祀用品)
1. [钓友钓58斤大青鱼被拖入3米水中](https://so.toutiao.com/search?keyword=钓友钓58斤大青鱼被拖入3米水中)
1. [女子金手镯剪开发现大量黑色物质](https://so.toutiao.com/search?keyword=女子金手镯剪开发现大量黑色物质)
1. [西班牙宣布全国哀悼3天](https://so.toutiao.com/search?keyword=西班牙宣布全国哀悼3天)
1. [39岁中国籍老板在泰遭袭身亡](https://so.toutiao.com/search?keyword=39岁中国籍老板在泰遭袭身亡)
1. [姆巴佩的道歉没发1.35亿粉的iG上](https://so.toutiao.com/search?keyword=姆巴佩的道歉没发1.35亿粉的iG上)
1. [男子吃土豆蘸辣椒两个月减重22斤](https://so.toutiao.com/search?keyword=男子吃土豆蘸辣椒两个月减重22斤)
1. [HelloKitty的道歉未同步海外账号](https://so.toutiao.com/search?keyword=HelloKitty的道歉未同步海外账号)
1. [姆巴佩或面临天文数字赔偿](https://so.toutiao.com/search?keyword=姆巴佩或面临天文数字赔偿)
1. [75岁王石携万科旧将创业](https://so.toutiao.com/search?keyword=75岁王石携万科旧将创业)
1. [巴基斯坦禁飞 “台独”像热锅上蚂蚁](https://so.toutiao.com/search?keyword=巴基斯坦禁飞%20“台独”像热锅上蚂蚁)
1. [西媒：皇马因中国赞助被迫表态道歉](https://so.toutiao.com/search?keyword=西媒：皇马因中国赞助被迫表态道歉)
1. [研究称我国4成老人陷入“失乐”困境](https://so.toutiao.com/search?keyword=研究称我国4成老人陷入“失乐”困境)
1. [国防部：台湾问题是中国人自己的事](https://so.toutiao.com/search?keyword=国防部：台湾问题是中国人自己的事)
1. [未来十年钱会流向哪里](https://so.toutiao.com/search?keyword=未来十年钱会流向哪里)
1. [为何说领空是一个国家最诚实的立场](https://so.toutiao.com/search?keyword=为何说领空是一个国家最诚实的立场)
1. [你以为是在养生可能是在“养病”](https://so.toutiao.com/search?keyword=你以为是在养生可能是在“养病”)
1. [孤儿婚礼几千陌生人赴约的善意](https://so.toutiao.com/search?keyword=孤儿婚礼几千陌生人赴约的善意)
1. [华为Mate 90将全系支持四卡三待](https://so.toutiao.com/search?keyword=华为Mate%2090将全系支持四卡三待)
1. [尹锡悦庭审卖惨说总统太难做](https://so.toutiao.com/search?keyword=尹锡悦庭审卖惨说总统太难做)
1. [青年协助蒋万安抽选举号次遭绿营网暴](https://so.toutiao.com/search?keyword=青年协助蒋万安抽选举号次遭绿营网暴)
1. [孙颖莎获河北省记大功奖励](https://so.toutiao.com/search?keyword=孙颖莎获河北省记大功奖励)
1. [马天宇缺氧嘴唇发紫仍不忘“吃瓜”](https://so.toutiao.com/search?keyword=马天宇缺氧嘴唇发紫仍不忘“吃瓜”)
1. [金价跌回8字头 有人直奔柜台买金条](https://so.toutiao.com/search?keyword=金价跌回8字头%20有人直奔柜台买金条)
1. [麻生太郎陷黑金丑闻 高市早苗会如何](https://so.toutiao.com/search?keyword=麻生太郎陷黑金丑闻%20高市早苗会如何)
1. [德国总统访华意味什么](https://so.toutiao.com/search?keyword=德国总统访华意味什么)
1. [谁是A股业绩“增降王”](https://so.toutiao.com/search?keyword=谁是A股业绩“增降王”)
1. [专家：A股将迎来修复](https://so.toutiao.com/search?keyword=专家：A股将迎来修复)
1. [评论员：俄乌和平路漫漫](https://so.toutiao.com/search?keyword=评论员：俄乌和平路漫漫)
1. [国防部：日方挑动阵营对抗不得人心](https://so.toutiao.com/search?keyword=国防部：日方挑动阵营对抗不得人心)
1. [普京请非洲领导人吃冰淇淋](https://so.toutiao.com/search?keyword=普京请非洲领导人吃冰淇淋)
1. [内塔尼亚胡是如何在竞选中翻盘的](https://so.toutiao.com/search?keyword=内塔尼亚胡是如何在竞选中翻盘的)
1. [国防部：赖清德阻挡不了祖国统一大势](https://so.toutiao.com/search?keyword=国防部：赖清德阻挡不了祖国统一大势)
1. [“树枝悟空”缔造者回应走红](https://so.toutiao.com/search?keyword=“树枝悟空”缔造者回应走红)
1. [男子列车上偷手机 贼喊捉贼被抓](https://so.toutiao.com/search?keyword=男子列车上偷手机%20贼喊捉贼被抓)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Oct 29 2026 22:13:11 GMT+0800 (China Standard Time) -->

1. [反诈博主徽剑被曝遇害](https://www.zhihu.com/search?q=%E5%8F%8D%E8%AF%88%E5%8D%9A%E4%B8%BB%E5%BE%BD%E5%89%91%E8%A2%AB%E6%9B%9D%E9%81%87%E5%AE%B3)
1. [辽宁一中学筛查肺结核多人共用针头](https://www.zhihu.com/search?q=%E8%BE%BD%E5%AE%81%E4%B8%80%E4%B8%AD%E5%AD%A6%E7%AD%9B%E6%9F%A5%E8%82%BA%E7%BB%93%E6%A0%B8%E5%A4%9A%E4%BA%BA%E5%85%B1%E7%94%A8%E9%92%88%E5%A4%B4)
1. [姆巴佩涉华不当言论](https://www.zhihu.com/search?q=%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B6%89%E5%8D%8E%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA)
1. [好奇岛装扮游戏](https://www.zhihu.com/search?q=%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [AI 开发者白皮书](https://www.zhihu.com/search?q=AI%20%E5%BC%80%E5%8F%91%E8%80%85%E7%99%BD%E7%9A%AE%E4%B9%A6)
1. [曝有皇马高管甚至在看笑话](https://www.zhihu.com/search?q=%E6%9B%9D%E6%9C%89%E7%9A%87%E9%A9%AC%E9%AB%98%E7%AE%A1%E7%94%9A%E8%87%B3%E5%9C%A8%E7%9C%8B%E7%AC%91%E8%AF%9D)
1. [毛不易婚礼致辞争议](https://www.zhihu.com/search?q=%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E8%87%B4%E8%BE%9E%E4%BA%89%E8%AE%AE)
1. [姆巴佩恐面临天文数字赔偿](https://www.zhihu.com/search?q=%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%81%90%E9%9D%A2%E4%B8%B4%E5%A4%A9%E6%96%87%E6%95%B0%E5%AD%97%E8%B5%94%E5%81%BF)
1. [蒋欣遭男设计师突然亲脖子](https://www.zhihu.com/search?q=%E8%92%8B%E6%AC%A3%E9%81%AD%E7%94%B7%E8%AE%BE%E8%AE%A1%E5%B8%88%E7%AA%81%E7%84%B6%E4%BA%B2%E8%84%96%E5%AD%90)
1. [中资网贷印度亏损70亿退场](https://www.zhihu.com/search?q=%E4%B8%AD%E8%B5%84%E7%BD%91%E8%B4%B7%E5%8D%B0%E5%BA%A6%E4%BA%8F%E6%8D%9F70%E4%BA%BF%E9%80%80%E5%9C%BA)
1. [曝白百何与张思麟已离婚](https://www.zhihu.com/search?q=%E6%9B%9D%E7%99%BD%E7%99%BE%E4%BD%95%E4%B8%8E%E5%BC%A0%E6%80%9D%E9%BA%9F%E5%B7%B2%E7%A6%BB%E5%A9%9A)
1. [OpenAI宣布斩获三项重大科学突破](https://www.zhihu.com/search?q=OpenAI%E5%AE%A3%E5%B8%83%E6%96%A9%E8%8E%B7%E4%B8%89%E9%A1%B9%E9%87%8D%E5%A4%A7%E7%A7%91%E5%AD%A6%E7%AA%81%E7%A0%B4)
1. [LYON 1-2 iG](https://www.zhihu.com/search?q=LYON%201-2%20iG)
1. [美联储宣布维持利率不变](https://www.zhihu.com/search?q=%E7%BE%8E%E8%81%94%E5%82%A8%E5%AE%A3%E5%B8%83%E7%BB%B4%E6%8C%81%E5%88%A9%E7%8E%87%E4%B8%8D%E5%8F%98)
1. [新生将大体老师头骨当道具摆拍](https://www.zhihu.com/search?q=%E6%96%B0%E7%94%9F%E5%B0%86%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E5%A4%B4%E9%AA%A8%E5%BD%93%E9%81%93%E5%85%B7%E6%91%86%E6%8B%8D)
1. [《影之刃零》正式发售](https://www.zhihu.com/search?q=%E3%80%8A%E5%BD%B1%E4%B9%8B%E5%88%83%E9%9B%B6%E3%80%8B%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%94%AE)
1. [央视称皇马的道歉没到位前一切免谈](https://www.zhihu.com/search?q=%E5%A4%AE%E8%A7%86%E7%A7%B0%E7%9A%87%E9%A9%AC%E7%9A%84%E9%81%93%E6%AD%89%E6%B2%A1%E5%88%B0%E4%BD%8D%E5%89%8D%E4%B8%80%E5%88%87%E5%85%8D%E8%B0%88)
1. [金价大跌](https://www.zhihu.com/search?q=%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C)
1. [LYON对战iG](https://www.zhihu.com/search?q=LYON%E5%AF%B9%E6%88%98iG)
1. [MKOI 0-2 T1](https://www.zhihu.com/search?q=MKOI%200-2%20T1)
1. [三丽鸥致歉](https://www.zhihu.com/search?q=%E4%B8%89%E4%B8%BD%E9%B8%A5%E8%87%B4%E6%AD%89)
1. [多方终止与姆巴佩合作](https://www.zhihu.com/search?q=%E5%A4%9A%E6%96%B9%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%90%88%E4%BD%9C)
1. [OpenAI证伪ETH猜想](https://www.zhihu.com/search?q=OpenAI%E8%AF%81%E4%BC%AAETH%E7%8C%9C%E6%83%B3)
1. [发布姆巴佩争议言论的节目组致歉](https://www.zhihu.com/search?q=%E5%8F%91%E5%B8%83%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BA%89%E8%AE%AE%E8%A8%80%E8%AE%BA%E7%9A%84%E8%8A%82%E7%9B%AE%E7%BB%84%E8%87%B4%E6%AD%89)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Oct 29 2026 22:23:05 GMT+0800 (China Standard Time) -->

1. [如何理解梁文锋「在颠覆性的技术面前，闭源形成的护城河是短暂的」这一判断？](https://www.zhihu.com/question/2098733383778149000)
1. [三丽鸥在日本官网用中日双语道歉，如何看待此回应？你还会为三丽鸥买单吗？](https://www.zhihu.com/question/2099160783238255400)
1. [科普书出现「双头虾」图片，出版社称正在下架召回，为何出现如此明显错误？科普类出版该限制 AI 配图吗？](https://www.zhihu.com/question/2098771415411291600)
1. [中国第一个「三机场」城市来了，上海为啥要建第三机场？为何落在南通？将带来哪些影响？](https://www.zhihu.com/question/2098784117227616300)
1. [前巴西国脚奥斯卡发声称「为一些言论感到难过，希望更多外籍球员尊重中国」，这种认知差异该如何扭转？](https://www.zhihu.com/question/2099160176750243800)
1. [华为制药军团表态，其公司定位是医药行业的AI赋能者，而不是跟大家抢着做药，意味着什么？背后有哪些考量？](https://www.zhihu.com/question/2099103184987714600)
1. [武汉家长每月花3000多元住酒店陪读，称比租房灵活省心，这种方式值得借鉴吗？长期来看哪种方式更划算？](https://www.zhihu.com/question/2098725295796614400)
1. [如何评价AI短剧《大明,李景隆的别样人生》？](https://www.zhihu.com/question/2060278561760605400)
1. [为什么全世界只有中国有文旅局以及“文旅”这个概念？](https://www.zhihu.com/question/1924240503332930600)
1. [周杰伦曾经的一年一张专辑的速度到底是个什么概念？](https://www.zhihu.com/question/317783067)
1. [村民为悬挂婚庆气球在水库大坝公路钻数十个孔，水务局责令拆除，这对大坝有多大危害？钻洞行为违法吗？](https://www.zhihu.com/question/2098908929262732300)
1. [如何看待奕境回应浙江台州X9起火事故，称车辆在刹停状态下被重载渣土车追尾，动力电池保持完好？](https://www.zhihu.com/question/2099056314647369700)
1. [大一新生将「大体老师」头骨当道具摆拍发朋友圈，如何看待此事？会带来哪些影响？](https://www.zhihu.com/question/2097051860653831400)
1. [曝西甲主席正考虑前往中国，媒体称姆巴佩事件致西甲每赛季潜在损失1亿欧，他怎样做才能化解这巨额财务损失？](https://www.zhihu.com/question/2099229886933988400)
1. [百家中资网贷出海印度亏损 70 亿退场，导致这一溃败的核心原因是什么？](https://www.zhihu.com/question/2098323820520260000)
1. [美媒称巴基斯坦已对中国台湾地区航空公司关闭领空，是全球首个采取该措施的国家， 哪些信息值得关注？](https://www.zhihu.com/question/2098908630355649500)
1. [如何看待 iG 晋级八强后 Meiko 采访称「我觉得现在 iG 可以战胜任何一支队伍」？](https://www.zhihu.com/question/2099102373297615000)
1. [如何评价苹果于10月29日发布售价22999起的触摸屏Macbook Pro？](https://www.zhihu.com/question/2099070911362213000)
1. [西班牙高铁事故已致68死，相撞时车速超100公里/时，系人为失误，暴露什么问题？防撞系统为啥没起作用？](https://www.zhihu.com/question/2098890167763169800)
1. [如果「老登」们不买小鹏汽车了，这对他们是好事还是坏事？从瞄准年轻人受众的层面看，这波公关算成功吗？](https://www.zhihu.com/question/2097695845101429800)
1. [江苏一医生被曝用「豆包」查药，患者家属因此拒绝其开具处方，你看诊时能接受医生使用 AI 工具吗？](https://www.zhihu.com/question/2098804738414399500)
1. [如何评价武侠动作游戏《影之刃零》，它到底好不好玩？](https://www.zhihu.com/question/2098943209586144500)
1. [如何评价亚马逊前华人女工程师疑似按照ChatGPT的建议自行减少抗癫痫药物后猝死这一事件？](https://www.zhihu.com/question/2098895782283841800)
1. [兵部尚书冻死在御书房外会引发藩王造反？历史上真的发生过类似的事吗？](https://www.zhihu.com/question/2098035011463148300)
1. [辽宁康平通报一中学筛查肺结核时多名学生共用一个针头，涉及的78名学生检测结果均无异常，暴露出什么问题？](https://www.zhihu.com/question/2099135177825969200)
1. [为何湘菜不如川菜那么流行？](https://www.zhihu.com/question/583368576)
1. [中国麻将在美国爆火，套装卖到 400 美元仍排队抢购，这股风潮是怎么来的？麻将为什么有这样的出海潜力？](https://www.zhihu.com/question/2098435655415984400)
1. [10月底了，日本还有石油吗？](https://www.zhihu.com/question/2097727823439992300)
1. [五粮液 Q3 净利润 9.58 亿元，同比下降 48.25%，如何看待剔除「调节报表」后的业绩表现？](https://www.zhihu.com/question/2098719837019009500)
1. [如果进化论是对的，植物为何不进化得很难吃？](https://www.zhihu.com/question/663413105)
1. [姆巴佩恐面临天文数字赔偿，分析称潜在商业损失至少1亿美元，这是怎么算出来的？他会自此失去中国市场吗？](https://www.zhihu.com/question/2099062244881295000)
1. [皇马拒绝西甲对姆巴佩事件的帮助，有皇马高管甚至在看笑话，双方关系为何如此紧张？这场风波会加剧矛盾吗？](https://www.zhihu.com/question/2099084202876433200)
1. [三丽鸥终止与抹黑中国的日剧《VIVANT》联名并致歉，网友称其未正面回应历史争议，如何看待这份声明？](https://www.zhihu.com/question/2098893531104409300)
1. [厂里为了降成本把计件单价压低了，结果老员工走了，新员工招不来，这烂摊子怎么收拾？](https://www.zhihu.com/question/2097941932748153600)
1. [成都马拉松两名配速员赛中违规换装被取消成绩和禁赛，免费装备为何有如此吸引力让跑者「以身试法」？](https://www.zhihu.com/question/2098420792530662700)
1. [为什么男性会保留乳头？是不是基因偷懒不想另起炉灶和留条可能性后路？](https://www.zhihu.com/question/2088034202138813700)
1. [offer8 嘉宾李子祺曾自述研一主刀脑室外分流手术，网传患者最终去世，是真的吗？这样手术合规吗？](https://www.zhihu.com/question/2097048180932043300)
1. [Anthropic 宣布「编程面试已死」，程序员靠什么证明自己？](https://www.zhihu.com/question/2098813429200810800)
1. [怎样看待上海一小区多名幼童裸体在公共区域跑动，妈妈称管不住？父母这种「不作为」需要承担法律责任吗？](https://www.zhihu.com/question/2098856386176054000)
1. [为什么在00后眼里，90后就已经是“老登”了？](https://www.zhihu.com/question/2096526786033197800)
1. [如何看待谷歌推出Gemini 4 Carbon，在多个榜单拿下全球第一？](https://www.zhihu.com/question/2098949045934880000)
1. [如何看待2026年10月28日，比亚迪员工数突破102万人？](https://www.zhihu.com/question/2098833611659154700)
1. [S16 瑞士轮 iG 2:1 击败 LYON 晋级八强赛，如何评价这场比赛？](https://www.zhihu.com/question/2099021543275762200)
1. [如何看待大伟哥谈DeepSeek追求性价比，米哈游AI大模型追求解决极难问题，称要做「前所未有的事」？](https://www.zhihu.com/question/2098876748163199200)
1. [WTT 蒙彼利埃冠军赛男单首轮，张本智和 0-3 爆冷遭高茨横扫出局，如何评价他的表现？](https://www.zhihu.com/question/2099075904219648500)
1. [媒体曝撒尿牛肉味丸原料多为鸡脖泥，牛肉味纯靠牛肉膏，这类速冻肉丸存在哪些食品安全隐患？这算违法吗？](https://www.zhihu.com/question/2098700998789304600)
1. [为什么我炒的所有菜始终都是只有一股子调料堆积的反苦味儿，而毫无香味儿可言，令人倒胃口，这到底为什么？](https://www.zhihu.com/question/2018979299491885600)
1. [杨瀚森被下放到混音队，你对他在发展联盟的表现有何期待，你看好他最终留在开拓者执行完四年合同吗？](https://www.zhihu.com/question/2099093407616299500)
1. [《令人心动的 offer 8》停更，具体是怎么回事？和最近的风波有关吗？](https://www.zhihu.com/question/2098769563584131800)
1. [苹果 14 英寸触控屏 MacBookPro 曝光起售价贵约 16%，消费者会买账吗？](https://www.zhihu.com/question/2098701748714188800)
1. [如何评价《崩坏：星穹铁道》千星纪游PV「有关星空的寓言集•其三」？](https://www.zhihu.com/question/2099108913043990000)
1. [西班牙高铁相撞事故已造成 64 人死亡，有中国公民受伤，初步调查显示事故系人为失误所致，具体情况如何？](https://www.zhihu.com/question/2098832855782483000)
1. [长鑫科技已被纳入上证综指和上证科创综指，均位列第一大权重股，其股价波动会给指数带来多大影响？](https://www.zhihu.com/question/2098766117422604800)
1. [美国各界热议「要不要对中国车开放」，若放宽准入会对美本土汽车产业带来哪些冲击？](https://www.zhihu.com/question/2089754502639502000)
1. [外交部回应姆巴佩道歉，「我们重视当事人作出的道歉」，姆巴佩事件的后续走向还有哪些可能性？](https://www.zhihu.com/question/2098798235125019600)
1. [如果现代考古不再主动发掘帝王大墓，长远来看，是保护了历史，还是丢失了解读文明的机会？](https://www.zhihu.com/question/2093434226444068600)
1. [小天才手表封闭社交引争议，不买真会被孤立吗？如何看待这种现象？](https://www.zhihu.com/question/2095919151252620800)
1. [张雪现身重庆大学校招，承诺「大部分员工入职一年后涨薪 20% 」，你怎么看？](https://www.zhihu.com/question/2098401754257928700)
1. [如何评价秦朔发文《可怕的红果与中国互联网的字节时间》？](https://www.zhihu.com/question/2098759832840794000)
1. [安徽女子赴泰失联近 3 个月，家属称被拐至园区 50 万元遭转走，警方已立案，具体情况如何？](https://www.zhihu.com/question/2098549728707179000)
1. [云南腾冲据传一辣椒厂发生火灾致全城人咳嗽，具体情况如何？对环境和居民健康有何影响？后续责任如何判定？](https://www.zhihu.com/question/2098098020118160600)
1. [当初明朝为什么要放弃河套地区？](https://www.zhihu.com/question/305887122)
1. [火车票供需矛盾为何长期存在？](https://www.zhihu.com/question/2096238476962305000)
1. [如果鸡能长到100千克重，那人是不是就有巨大的鸡翅可以吃了？](https://www.zhihu.com/question/2083553210300625400)
1. [为什么都是汽车行业，外国汽车行业发展的时候，供应商过得挺好，国内汽车行业发展了，供应商变得这么难？](https://www.zhihu.com/question/12570275372)
1. [苹果 10 月 28 日发布新品，爆料人称将推出新的 MacBook Pro ，哪些信息值得关注？](https://www.zhihu.com/question/2095802670250567700)
1. [如何看待刘涛与某品牌创始人合影时，被对方频繁触碰胸部腰部，陈都灵也被贴身触碰？遇到这种情况该怎样应对？](https://www.zhihu.com/question/2098830303036793300)
1. [近五年旋转小火锅新增门店超2万家，海底捞等巨头争相入局，为啥旋转小火锅又火了？这一次热潮能持续多久？](https://www.zhihu.com/question/2098496213372723200)
1. [2035 年我国将建成全国统一电力市场体系，将对发电企业和居民用电带来哪些具体影响？](https://www.zhihu.com/question/2004976058462672100)
1. [首部AI院线电影《三星堆：未来往事》票房遇冷，上映前博纳三连板，AI电影的故事到底还能不能讲下去？](https://www.zhihu.com/question/2097792623402555000)
1. [《鹿鼎记》海大富查清了太后的秘密，为什么不告诉康熙，反而自己深夜去摊牌？](https://www.zhihu.com/question/2069031468723185000)
1. [公司以绩效考核的方式全员扣工资，但考核后业绩越来越差，感觉陷入了恶性循环，是不是哪错了，如何调整？](https://www.zhihu.com/question/1933551197136062200)
1. [《影之刃零》的特别鸣谢名单占据游戏界的半壁江山，刘伟、女流、冯骥统统上榜，对此你怎么看？](https://www.zhihu.com/question/2098821087471654400)
1. [任泽平被取消「经济学家」认证，如何看待诸多网红经济学家的含金量？](https://www.zhihu.com/question/2098715823489513200)
1. [小米首个住宅小区正式开售，仅面向内部员工销售，为何小米开始卖房了？未来会推出更多楼盘向大众销售吗？](https://www.zhihu.com/question/2098438230131433500)
1. [「酱油」一词为什么正在被「生抽」和「老抽」替代？](https://www.zhihu.com/question/618083427)
1. [媒体呼吁「医疗真人秀叫停」，《offer 8》会被整改或停播吗？节目对医患信任的真实影响到底有多严重？](https://www.zhihu.com/question/2098377875137062400)
1. [如何评价樊振东首次解说MLB（美国职业棒球大联盟）比赛？](https://www.zhihu.com/question/2098851131489260300)
1. [很多年轻人「对工作的容忍度只有两年」，这反映出怎样的职场心态？](https://www.zhihu.com/question/2065927971630856000)
1. [S16 全球总决赛 Faker 及 T1 达成第七冠的概率有多大？](https://www.zhihu.com/question/2098127889073793000)
1. [自媒体称澳大利亚每年花费巨额从中国进口屎壳郎，这是真吗？中国的屎壳郎真的如此兢兢业业、不挑食吗？](https://www.zhihu.com/question/626416441)
1. [在电视剧《小城良方》中让你印象最深刻的情节是什么?](https://www.zhihu.com/question/2096359981729818000)
1. [为什么我感觉时间过得越来越快？](https://www.zhihu.com/question/50821488)
1. [《绝区零》中，菲欧妮一直死亡复活真的没有副作用吗？](https://www.zhihu.com/question/2096276721381143300)
1. [年轻人开始流行「喝大水」，喝水越多越好吗？短时间大量喝水有什么危害？如何正确饮水？](https://www.zhihu.com/question/2096616246028649700)
1. [如果有一天没有大模型了，古法编程你还回的去吗？](https://www.zhihu.com/question/2082439003412894500)
1. [华为 PuraXView 销量超 60 万台且持续缺货，阔直屏形态会成为行业新趋势吗？](https://www.zhihu.com/question/2097980354397315600)
1. [海信回应与皇马合作，称与皇马的赞助区域仅限西班牙地区，这样就能撇清关系吗？](https://www.zhihu.com/question/2098775137059173600)
1. [如何看待皇马官方致歉，称「就姆巴佩近期言论对中国人民造成的不适表达歉意」？](https://www.zhihu.com/question/2098823562035295000)
1. [从业务骨干变成小领导后，最该先改掉的习惯是什么？](https://www.zhihu.com/question/2096576137950508800)
1. [提升自己最快的方法是什么？](https://www.zhihu.com/question/3494555087)
1. [如何看待张一鸣以 6700 亿元登顶中国首富，刷新中国首富财富纪录？今年的胡润百富榜有哪些新变化？](https://www.zhihu.com/question/2098365544483255300)
1. [除了常见的麻雀、喜鹊，我们身边还有哪些不那么引人注目但同样有趣的鸟类？](https://www.zhihu.com/question/2059231204239468500)
1. [为什么OpenAi和Anthropic不用自己的顶级AI去炒股？就像幻方量化一样？](https://www.zhihu.com/question/2096860633161545200)
1. [如何搭建AI企业知识库？](https://www.zhihu.com/question/633933836)
1. [央媒称不认可皇马表态，此前皇马称姆巴佩仅代表个人，俱乐部和中国赞助商合作照常，皇马为何敢如此「傲慢」？](https://www.zhihu.com/question/2098687138820616200)
1. [孩子作业还没完成，该不该带他去参加家庭中的重要活动？](https://www.zhihu.com/question/2092343435931940600)
1. [自己累死累活，孩子觉得理所当然，怎么才能让孩子懂得感恩，而不是一味索取？](https://www.zhihu.com/question/1958130310219818000)
1. [如何评价2026年纪录片「人生七年」系列的最终章《70up》?](https://www.zhihu.com/question/2098384062008370200)
1. [你们早上一般都喜欢吃什么早餐？](https://www.zhihu.com/question/10066499527)
1. [如何评价电影《奇怪的她》？](https://www.zhihu.com/question/23946888)

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
<!-- 最后更新时间 Fri Oct 30 2026 00:15:46 GMT+0800 (China Standard Time) -->

1. [党的二十届五中全会公报](https://s.weibo.com//weibo?q=%23%E5%85%9A%E7%9A%84%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%E5%85%AC%E6%8A%A5%23&Refer=new_time)
1. [红果红了](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%BA%A2%E4%BA%86%23&t=31&band_rank=1&Refer=top)
1. [姆巴佩曾代言饮品单日销量为0](https://s.weibo.com//weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%9B%BE%E4%BB%A3%E8%A8%80%E9%A5%AE%E5%93%81%E5%8D%95%E6%97%A5%E9%94%80%E9%87%8F%E4%B8%BA0%23&t=31&band_rank=2&Refer=top)
1. [百年大党何以永葆生机活力](https://s.weibo.com//weibo?q=%23%E7%99%BE%E5%B9%B4%E5%A4%A7%E5%85%9A%E4%BD%95%E4%BB%A5%E6%B0%B8%E8%91%86%E7%94%9F%E6%9C%BA%E6%B4%BB%E5%8A%9B%23&t=31&band_rank=3&Refer=top)
1. [王腾创业首款智能戒指](https://s.weibo.com//weibo?q=%E7%8E%8B%E8%85%BE%E5%88%9B%E4%B8%9A%E9%A6%96%E6%AC%BE%E6%99%BA%E8%83%BD%E6%88%92%E6%8C%87&t=31&band_rank=4&Refer=top)
1. [小鹏MONAL05价格炸裂](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL05%E4%BB%B7%E6%A0%BC%E7%82%B8%E8%A3%82%23&t=31&band_rank=5&Refer=top)
1. [王腾感谢小米和雷总](https://s.weibo.com//weibo?q=%E7%8E%8B%E8%85%BE%E6%84%9F%E8%B0%A2%E5%B0%8F%E7%B1%B3%E5%92%8C%E9%9B%B7%E6%80%BB&t=31&band_rank=6&Refer=top)
1. [谁来管管小城良方编剧](https://s.weibo.com//weibo?q=%23%E8%B0%81%E6%9D%A5%E7%AE%A1%E7%AE%A1%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E7%BC%96%E5%89%A7%23&t=31&band_rank=7&Refer=top)
1. [崔永熙补篮绝杀](https://s.weibo.com//weibo?q=%23%E5%B4%94%E6%B0%B8%E7%86%99%E8%A1%A5%E7%AF%AE%E7%BB%9D%E6%9D%80%23&t=31&band_rank=8&Refer=top)
1. [数说中国海洋经济动力澎湃](https://s.weibo.com//weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E6%B5%B7%E6%B4%8B%E7%BB%8F%E6%B5%8E%E5%8A%A8%E5%8A%9B%E6%BE%8E%E6%B9%83%23&t=31&band_rank=9&Refer=top)
1. [ISHORing定价1799元](https://s.weibo.com//weibo?q=%23ISHORing%E5%AE%9A%E4%BB%B71799%E5%85%83%23&t=31&band_rank=10&Refer=top)
1. [给阿嬷的情书为何口碑反转](https://s.weibo.com//weibo?q=%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E4%B8%BA%E4%BD%95%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC&t=31&band_rank=11&Refer=top)
1. [人民日报锐评年轻人养不起老人了](https://s.weibo.com//weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E9%94%90%E8%AF%84%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%85%BB%E4%B8%8D%E8%B5%B7%E8%80%81%E4%BA%BA%E4%BA%86%23&t=31&band_rank=12&Refer=top)
1. [把大体老师遗骨当玩物配当医生吗](https://s.weibo.com//weibo?q=%23%E6%8A%8A%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E9%81%97%E9%AA%A8%E5%BD%93%E7%8E%A9%E7%89%A9%E9%85%8D%E5%BD%93%E5%8C%BB%E7%94%9F%E5%90%97%23&t=31&band_rank=13&Refer=top)
1. [女高管隆胸死亡前曾抱怨全是坑](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E9%AB%98%E7%AE%A1%E9%9A%86%E8%83%B8%E6%AD%BB%E4%BA%A1%E5%89%8D%E6%9B%BE%E6%8A%B1%E6%80%A8%E5%85%A8%E6%98%AF%E5%9D%91%23&t=31&band_rank=14&Refer=top)
1. [文吉儿上证据后王子璇失忆表现](https://s.weibo.com//weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E4%B8%8A%E8%AF%81%E6%8D%AE%E5%90%8E%E7%8E%8B%E5%AD%90%E7%92%87%E5%A4%B1%E5%BF%86%E8%A1%A8%E7%8E%B0%23&t=31&band_rank=15&Refer=top)
1. [感觉厉娜能活99岁](https://s.weibo.com//weibo?q=%23%E6%84%9F%E8%A7%89%E5%8E%89%E5%A8%9C%E8%83%BD%E6%B4%BB99%E5%B2%81%23&t=31&band_rank=16&Refer=top)
1. [星巴克遭不消费人群抵制](https://s.weibo.com//weibo?q=%E6%98%9F%E5%B7%B4%E5%85%8B%E9%81%AD%E4%B8%8D%E6%B6%88%E8%B4%B9%E4%BA%BA%E7%BE%A4%E6%8A%B5%E5%88%B6&t=31&band_rank=17&Refer=top)
1. [等风热吻你剧超现状](https://s.weibo.com//weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E5%89%A7%E8%B6%85%E7%8E%B0%E7%8A%B6%23&t=31&band_rank=18&Refer=top)
1. [长沙一新生摆拍大体老师最新进展](https://s.weibo.com//weibo?q=%23%E9%95%BF%E6%B2%99%E4%B8%80%E6%96%B0%E7%94%9F%E6%91%86%E6%8B%8D%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23&t=31&band_rank=19&Refer=top)
1. [女裤裆部太长做成吊裆裤](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E8%A3%A4%E8%A3%86%E9%83%A8%E5%A4%AA%E9%95%BF%E5%81%9A%E6%88%90%E5%90%8A%E8%A3%86%E8%A3%A4%23&t=31&band_rank=20&Refer=top)
1. [李宇春翻查何洁婚礼短信到凌晨两点](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E7%BF%BB%E6%9F%A5%E4%BD%95%E6%B4%81%E5%A9%9A%E7%A4%BC%E7%9F%AD%E4%BF%A1%E5%88%B0%E5%87%8C%E6%99%A8%E4%B8%A4%E7%82%B9%23&t=31&band_rank=21&Refer=top)
1. [疑似王子璇文吉儿知情人爆料](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E7%8E%8B%E5%AD%90%E7%92%87%E6%96%87%E5%90%89%E5%84%BF%E7%9F%A5%E6%83%85%E4%BA%BA%E7%88%86%E6%96%99%23&t=31&band_rank=22&Refer=top)
1. [难怪说钟楚曦两年能画出一套房](https://s.weibo.com//weibo?q=%E9%9A%BE%E6%80%AA%E8%AF%B4%E9%92%9F%E6%A5%9A%E6%9B%A6%E4%B8%A4%E5%B9%B4%E8%83%BD%E7%94%BB%E5%87%BA%E4%B8%80%E5%A5%97%E6%88%BF&t=31&band_rank=23&Refer=top)
1. [Swisse产品被检出铅含量超标](https://s.weibo.com//weibo?q=%23Swisse%E4%BA%A7%E5%93%81%E8%A2%AB%E6%A3%80%E5%87%BA%E9%93%85%E5%90%AB%E9%87%8F%E8%B6%85%E6%A0%87%23&t=31&band_rank=24&Refer=top)
1. [C罗发文感谢球迷](https://s.weibo.com//weibo?q=%23C%E7%BD%97%E5%8F%91%E6%96%87%E6%84%9F%E8%B0%A2%E7%90%83%E8%BF%B7%23&t=31&band_rank=25&Refer=top)
1. [何洁曾发和李宇春聊天记录截图](https://s.weibo.com//weibo?q=%23%E4%BD%95%E6%B4%81%E6%9B%BE%E5%8F%91%E5%92%8C%E6%9D%8E%E5%AE%87%E6%98%A5%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E6%88%AA%E5%9B%BE%23&t=31&band_rank=26&Refer=top)
1. [田曦薇15年高中时期的视频](https://s.weibo.com//weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%8715%E5%B9%B4%E9%AB%98%E4%B8%AD%E6%97%B6%E6%9C%9F%E7%9A%84%E8%A7%86%E9%A2%91%23&t=31&band_rank=27&Refer=top)
1. [李玉刚承认自己创业一败涂地](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E7%8E%89%E5%88%9A%E6%89%BF%E8%AE%A4%E8%87%AA%E5%B7%B1%E5%88%9B%E4%B8%9A%E4%B8%80%E8%B4%A5%E6%B6%82%E5%9C%B0%23&t=31&band_rank=28&Refer=top)
1. [女生买驴打滚问那么多火了](https://s.weibo.com//weibo?q=%E5%A5%B3%E7%94%9F%E4%B9%B0%E9%A9%B4%E6%89%93%E6%BB%9A%E9%97%AE%E9%82%A3%E4%B9%88%E5%A4%9A%E7%81%AB%E4%BA%86&t=31&band_rank=29&Refer=top)
1. [外交部回应三丽鸥取消Vivant联名](https://s.weibo.com//weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E4%B8%89%E4%B8%BD%E9%B8%A5%E5%8F%96%E6%B6%88Vivant%E8%81%94%E5%90%8D%23&t=31&band_rank=30&Refer=top)
1. [隆胸身亡女子生前聊天记录曝光](https://s.weibo.com//weibo?q=%23%E9%9A%86%E8%83%B8%E8%BA%AB%E4%BA%A1%E5%A5%B3%E5%AD%90%E7%94%9F%E5%89%8D%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E6%9B%9D%E5%85%89%23&t=31&band_rank=31&Refer=top)
1. [菅韧姿早该这么演了](https://s.weibo.com//weibo?q=%23%E8%8F%85%E9%9F%A7%E5%A7%BF%E6%97%A9%E8%AF%A5%E8%BF%99%E4%B9%88%E6%BC%94%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [78名学生共用针头调查要给社会交代](https://s.weibo.com//weibo?q=%2378%E5%90%8D%E5%AD%A6%E7%94%9F%E5%85%B1%E7%94%A8%E9%92%88%E5%A4%B4%E8%B0%83%E6%9F%A5%E8%A6%81%E7%BB%99%E7%A4%BE%E4%BC%9A%E4%BA%A4%E4%BB%A3%23&t=31&band_rank=33&Refer=top)
1. [原来有这么多不用和人打交道的工作](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E4%B8%8D%E7%94%A8%E5%92%8C%E4%BA%BA%E6%89%93%E4%BA%A4%E9%81%93%E7%9A%84%E5%B7%A5%E4%BD%9C&t=31&band_rank=34&Refer=top)
1. [将门毒后书粉好硬气](https://s.weibo.com//weibo?q=%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E4%B9%A6%E7%B2%89%E5%A5%BD%E7%A1%AC%E6%B0%94&t=31&band_rank=35&Refer=top)
1. [曝某女艺人不敢与梅尼耶妻子合照](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%9F%90%E5%A5%B3%E8%89%BA%E4%BA%BA%E4%B8%8D%E6%95%A2%E4%B8%8E%E6%A2%85%E5%B0%BC%E8%80%B6%E5%A6%BB%E5%AD%90%E5%90%88%E7%85%A7%23&t=31&band_rank=36&Refer=top)
1. [许飞曾p图黄晓明结婚照](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E6%9B%BEp%E5%9B%BE%E9%BB%84%E6%99%93%E6%98%8E%E7%BB%93%E5%A9%9A%E7%85%A7&t=31&band_rank=37&Refer=top)
1. [KPL](https://s.weibo.com//weibo?q=KPL&t=31&band_rank=38&Refer=top)
1. [三丽鸥中国销售额超300亿日元](https://s.weibo.com//weibo?q=%23%E4%B8%89%E4%B8%BD%E9%B8%A5%E4%B8%AD%E5%9B%BD%E9%94%80%E5%94%AE%E9%A2%9D%E8%B6%85300%E4%BA%BF%E6%97%A5%E5%85%83%23&t=31&band_rank=39&Refer=top)
1. [中国给姆巴佩皇马亮红牌](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%99%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%9A%87%E9%A9%AC%E4%BA%AE%E7%BA%A2%E7%89%8C%23&t=31&band_rank=40&Refer=top)
1. [顾客因金价下跌要求退款被拒](https://s.weibo.com//weibo?q=%23%E9%A1%BE%E5%AE%A2%E5%9B%A0%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E8%A6%81%E6%B1%82%E9%80%80%E6%AC%BE%E8%A2%AB%E6%8B%92%23&t=31&band_rank=41&Refer=top)
1. [王一栩在等虞书欣三搭](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E6%A0%A9%E5%9C%A8%E7%AD%89%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%89%E6%90%AD%23&t=31&band_rank=42&Refer=top)
1. [杨幂张小斐拌嘴找惠英红评理](https://s.weibo.com//weibo?q=%E6%9D%A8%E5%B9%82%E5%BC%A0%E5%B0%8F%E6%96%90%E6%8B%8C%E5%98%B4%E6%89%BE%E6%83%A0%E8%8B%B1%E7%BA%A2%E8%AF%84%E7%90%86&t=31&band_rank=43&Refer=top)
1. [多地有暴雪](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%9C%89%E6%9A%B4%E9%9B%AA%23&t=31&band_rank=44&Refer=top)
1. [张一鸣6700亿账面估值](https://s.weibo.com//weibo?q=%E5%BC%A0%E4%B8%80%E9%B8%A36700%E4%BA%BF%E8%B4%A6%E9%9D%A2%E4%BC%B0%E5%80%BC&t=31&band_rank=45&Refer=top)
1. [魏娆直接废了太子](https://s.weibo.com//weibo?q=%23%E9%AD%8F%E5%A8%86%E7%9B%B4%E6%8E%A5%E5%BA%9F%E4%BA%86%E5%A4%AA%E5%AD%90%23&t=31&band_rank=46&Refer=top)
1. [梁靖崑隔空喊话西蒙高茨](https://s.weibo.com//weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E9%9A%94%E7%A9%BA%E5%96%8A%E8%AF%9D%E8%A5%BF%E8%92%99%E9%AB%98%E8%8C%A8%23&t=31&band_rank=47&Refer=top)
1. [谷歌大跌超13%](https://s.weibo.com//weibo?q=%23%E8%B0%B7%E6%AD%8C%E5%A4%A7%E8%B7%8C%E8%B6%8513%25%23&t=31&band_rank=48&Refer=top)
1. [男子吃凉土豆蘸辣椒面2个月瘦22斤](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%83%E5%87%89%E5%9C%9F%E8%B1%86%E8%98%B8%E8%BE%A3%E6%A4%92%E9%9D%A22%E4%B8%AA%E6%9C%88%E7%98%A622%E6%96%A4%23&t=31&band_rank=49&Refer=top)
1. [女生看到天地辽阔觉得不必在一起](https://s.weibo.com//weibo?q=%E5%A5%B3%E7%94%9F%E7%9C%8B%E5%88%B0%E5%A4%A9%E5%9C%B0%E8%BE%BD%E9%98%94%E8%A7%89%E5%BE%97%E4%B8%8D%E5%BF%85%E5%9C%A8%E4%B8%80%E8%B5%B7&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
