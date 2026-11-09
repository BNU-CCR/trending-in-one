# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-10 01:31:58

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
<!-- 最后更新时间 Mon Nov 09 2026 15:07:09 GMT+0800 (China Standard Time) -->

1. [油价预计将大幅下调](https://so.toutiao.com/search?keyword=油价预计将大幅下调)
1. [王健林14年后再任万达商管董事长](https://so.toutiao.com/search?keyword=王健林14年后再任万达商管董事长)
1. [进博会上的“运动经济”观察](https://so.toutiao.com/search?keyword=进博会上的“运动经济”观察)
1. [大连主帅被泼啤酒滑倒光速变脸](https://so.toutiao.com/search?keyword=大连主帅被泼啤酒滑倒光速变脸)
1. [如何看待张雪遇上和于东来一样的难题](https://so.toutiao.com/search?keyword=如何看待张雪遇上和于东来一样的难题)
1. [国务院批准暂停对美船舶收费至2027年](https://so.toutiao.com/search?keyword=国务院批准暂停对美船舶收费至2027年)
1. [这个小老板把大连足球救成了冠军](https://so.toutiao.com/search?keyword=这个小老板把大连足球救成了冠军)
1. [张雪机车米兰展车零件被偷光](https://so.toutiao.com/search?keyword=张雪机车米兰展车零件被偷光)
1. [寒衣节](https://so.toutiao.com/search?keyword=寒衣节)
1. [史诗级逆转！英博夺队史中超首冠](https://so.toutiao.com/search?keyword=史诗级逆转！英博夺队史中超首冠)
1. [练普拉提就能掰正骨盆？医生辟谣](https://so.toutiao.com/search?keyword=练普拉提就能掰正骨盆？医生辟谣)
1. [许飞：我作茧自缚](https://so.toutiao.com/search?keyword=许飞：我作茧自缚)
1. [大连英博中超夺冠创造世界足坛奇迹](https://so.toutiao.com/search?keyword=大连英博中超夺冠创造世界足坛奇迹)
1. [英伟达超7600万元货物失踪 专家解读](https://so.toutiao.com/search?keyword=英伟达超7600万元货物失踪%20专家解读)
1. [中国将继续暂停实施对美加征24%关税](https://so.toutiao.com/search?keyword=中国将继续暂停实施对美加征24%关税)
1. [胖东来：哪怕赔付到破产也要坚守原则](https://so.toutiao.com/search?keyword=胖东来：哪怕赔付到破产也要坚守原则)
1. [早田希娜赢球后还在认真记笔记](https://so.toutiao.com/search?keyword=早田希娜赢球后还在认真记笔记)
1. [内塔尼亚胡会三度回归总理之位吗](https://so.toutiao.com/search?keyword=内塔尼亚胡会三度回归总理之位吗)
1. [蓉城主帅：我非常失望非常绝望](https://so.toutiao.com/search?keyword=蓉城主帅：我非常失望非常绝望)
1. [太原火灾公寓开发商已成老赖](https://so.toutiao.com/search?keyword=太原火灾公寓开发商已成老赖)
1. [美媒诬黄仁勋出轨对象是中国间谍](https://so.toutiao.com/search?keyword=美媒诬黄仁勋出轨对象是中国间谍)
1. [立陶宛议员批前政府设“台湾代表处”](https://so.toutiao.com/search?keyword=立陶宛议员批前政府设“台湾代表处”)
1. [疑似秦始皇儿子头骨面容复原图公布](https://so.toutiao.com/search?keyword=疑似秦始皇儿子头骨面容复原图公布)
1. [黄仁勋承认出轨](https://so.toutiao.com/search?keyword=黄仁勋承认出轨)
1. [中国球员NBA常规赛两双仅3人](https://so.toutiao.com/search?keyword=中国球员NBA常规赛两双仅3人)
1. [评论员：俄乌战争短期内不会结束](https://so.toutiao.com/search?keyword=评论员：俄乌战争短期内不会结束)
1. [大爷自学网购下单15吨红薯做粉条](https://so.toutiao.com/search?keyword=大爷自学网购下单15吨红薯做粉条)
1. [疑似韩东君新恋情曝光](https://so.toutiao.com/search?keyword=疑似韩东君新恋情曝光)
1. [家庭火灾逃生演练注意事项](https://so.toutiao.com/search?keyword=家庭火灾逃生演练注意事项)
1. [大连英博成立不到5年登顶中超](https://so.toutiao.com/search?keyword=大连英博成立不到5年登顶中超)
1. [国家队入场是否意味着A股已经触底](https://so.toutiao.com/search?keyword=国家队入场是否意味着A股已经触底)
1. [斯波：克莱彻底投开了](https://so.toutiao.com/search?keyword=斯波：克莱彻底投开了)
1. [河南财经政法大学通报教师骚扰女生](https://so.toutiao.com/search?keyword=河南财经政法大学通报教师骚扰女生)
1. [成都蓉城主帅回应“是否辞职”](https://so.toutiao.com/search?keyword=成都蓉城主帅回应“是否辞职”)
1. [著名劳动模范董加耕逝世](https://so.toutiao.com/search?keyword=著名劳动模范董加耕逝世)
1. [马斯克：特斯拉将进一步改进Cybercab](https://so.toutiao.com/search?keyword=马斯克：特斯拉将进一步改进Cybercab)
1. [金子涵自曝多年积蓄被骗光](https://so.toutiao.com/search?keyword=金子涵自曝多年积蓄被骗光)
1. [大连英博中超夺冠全城掀起免单潮](https://so.toutiao.com/search?keyword=大连英博中超夺冠全城掀起免单潮)
1. [立冬后建议改一下睡觉时间](https://so.toutiao.com/search?keyword=立冬后建议改一下睡觉时间)
1. [攻击-11高清细节一次看够](https://so.toutiao.com/search?keyword=攻击-11高清细节一次看够)
1. [WTT法兰克福冠军赛奖金积分汇总](https://so.toutiao.com/search?keyword=WTT法兰克福冠军赛奖金积分汇总)
1. [空警-600搭配歼-15DT有多能打](https://so.toutiao.com/search?keyword=空警-600搭配歼-15DT有多能打)
1. [朱刚日尧：演博古不脸谱化标签化](https://so.toutiao.com/search?keyword=朱刚日尧：演博古不脸谱化标签化)
1. [业内：新房成交收缩已经接近尾声](https://so.toutiao.com/search?keyword=业内：新房成交收缩已经接近尾声)
1. [美国退还关税为何仍留不住工厂](https://so.toutiao.com/search?keyword=美国退还关税为何仍留不住工厂)
1. [俄乌谈判之际俄军炸乌发电厂有何考量](https://so.toutiao.com/search?keyword=俄乌谈判之际俄军炸乌发电厂有何考量)
1. [BLG 3-1战胜T1晋级决赛](https://so.toutiao.com/search?keyword=BLG%203-1战胜T1晋级决赛)
1. [2.5万名跑者齐聚眉山东坡马拉松](https://so.toutiao.com/search?keyword=2.5万名跑者齐聚眉山东坡马拉松)
1. [俄打击变电站 乌军工后方供电被切断](https://so.toutiao.com/search?keyword=俄打击变电站%20乌军工后方供电被切断)
1. [上交所上市公司总市值超65万亿元](https://so.toutiao.com/search?keyword=上交所上市公司总市值超65万亿元)
1. [大连多个景区对山东游客免费100天](https://so.toutiao.com/search?keyword=大连多个景区对山东游客免费100天)
1. [从进博会看先进制造业汇聚创新动能](https://so.toutiao.com/search?keyword=从进博会看先进制造业汇聚创新动能)
1. [内塔尼亚胡还能当多久总理](https://so.toutiao.com/search?keyword=内塔尼亚胡还能当多久总理)
1. [张本智和晋级法兰克福冠军赛决赛](https://so.toutiao.com/search?keyword=张本智和晋级法兰克福冠军赛决赛)
1. [优质蛋白食物第一名出炉](https://so.toutiao.com/search?keyword=优质蛋白食物第一名出炉)
1. [南京辟谣“31岁医生被刺身亡”](https://so.toutiao.com/search?keyword=南京辟谣“31岁医生被刺身亡”)
1. [拼多多送货上门新规有何影响](https://so.toutiao.com/search?keyword=拼多多送货上门新规有何影响)
1. [詹姆斯赛季新高22分 76人力擒公牛](https://so.toutiao.com/search?keyword=詹姆斯赛季新高22分%2076人力擒公牛)
1. [秦皇岛居民称20年没见过这么大雪](https://so.toutiao.com/search?keyword=秦皇岛居民称20年没见过这么大雪)
1. [曝迪丽热巴没买房常年住酒店](https://so.toutiao.com/search?keyword=曝迪丽热巴没买房常年住酒店)
1. [越南消费为什么这么猛](https://so.toutiao.com/search?keyword=越南消费为什么这么猛)
1. [演员阿颜扁桃体切除术后不幸离世](https://so.toutiao.com/search?keyword=演员阿颜扁桃体切除术后不幸离世)
1. [金晨透露已举家搬迁至三亚](https://so.toutiao.com/search?keyword=金晨透露已举家搬迁至三亚)
1. [6层居民楼5户反映噪音扰民 民警蹲守](https://so.toutiao.com/search?keyword=6层居民楼5户反映噪音扰民%20民警蹲守)
1. [11国在俄美乌三方和谈前一天举行军演](https://so.toutiao.com/search?keyword=11国在俄美乌三方和谈前一天举行军演)
1. [成都蓉城丢冠是输给了“心魔”吗](https://so.toutiao.com/search?keyword=成都蓉城丢冠是输给了“心魔”吗)
1. [C罗的口碑为什么塌了](https://so.toutiao.com/search?keyword=C罗的口碑为什么塌了)
1. [马竞vs巴萨全场数据](https://so.toutiao.com/search?keyword=马竞vs巴萨全场数据)
1. [医生提醒：三类人群要慎食羊肉](https://so.toutiao.com/search?keyword=医生提醒：三类人群要慎食羊肉)
1. [广西一团伙包装卖淫女色情敲诈被端](https://so.toutiao.com/search?keyword=广西一团伙包装卖淫女色情敲诈被端)
1. [雪后八达岭长城“长”满人](https://so.toutiao.com/search?keyword=雪后八达岭长城“长”满人)
1. [台湾第二批新购F-16战机抵台](https://so.toutiao.com/search?keyword=台湾第二批新购F-16战机抵台)
1. [马斯克称软银正在违约燃气轮机订单](https://so.toutiao.com/search?keyword=马斯克称软银正在违约燃气轮机订单)
1. [记者卧底调查女厕偷拍黑产](https://so.toutiao.com/search?keyword=记者卧底调查女厕偷拍黑产)
1. [澳企一年炼出62吨重稀土意味着什么](https://so.toutiao.com/search?keyword=澳企一年炼出62吨重稀土意味着什么)
1. [网友微信状态发“画地为牢”被辞退](https://so.toutiao.com/search?keyword=网友微信状态发“画地为牢”被辞退)
1. [别让5种劳损耗空你的身体](https://so.toutiao.com/search?keyword=别让5种劳损耗空你的身体)
1. [中国足球顶级联赛冠军次数排行榜](https://so.toutiao.com/search?keyword=中国足球顶级联赛冠军次数排行榜)
1. [有理儿有面：日本正给一颗炸弹装引信](https://so.toutiao.com/search?keyword=有理儿有面：日本正给一颗炸弹装引信)
1. [秦皇岛积雪超20厘米](https://so.toutiao.com/search?keyword=秦皇岛积雪超20厘米)
1. [明年260万新能源车电池面临脱保](https://so.toutiao.com/search?keyword=明年260万新能源车电池面临脱保)
1. [媒体：“美数中算”不仅仅是一句调侃](https://so.toutiao.com/search?keyword=媒体：“美数中算”不仅仅是一句调侃)
1. [每晚睡7小时卒中发病风险最低](https://so.toutiao.com/search?keyword=每晚睡7小时卒中发病风险最低)
1. [阿奇姆彭首获中超联赛冠军](https://so.toutiao.com/search?keyword=阿奇姆彭首获中超联赛冠军)
1. [媒体评11元买房：踩踏鹤岗城市形象](https://so.toutiao.com/search?keyword=媒体评11元买房：踩踏鹤岗城市形象)
1. [杨鸣谈詹姆斯防守](https://so.toutiao.com/search?keyword=杨鸣谈詹姆斯防守)
1. [穆雷：约基奇拥有顶级球商和比赛视野](https://so.toutiao.com/search?keyword=穆雷：约基奇拥有顶级球商和比赛视野)
1. [国乒更新伊斯坦布尔常规挑战赛名单](https://so.toutiao.com/search?keyword=国乒更新伊斯坦布尔常规挑战赛名单)
1. [巴萨2-1马竞 费尔明双响亚马尔献助攻](https://so.toutiao.com/search?keyword=巴萨2-1马竞%20费尔明双响亚马尔献助攻)
1. [大连外援走出“六亲不认”步伐](https://so.toutiao.com/search?keyword=大连外援走出“六亲不认”步伐)
1. [比亚迪李云飞：今年销量预计略有增长](https://so.toutiao.com/search?keyword=比亚迪李云飞：今年销量预计略有增长)
1. [外媒热议蓉城丢冠：世纪崩盘](https://so.toutiao.com/search?keyword=外媒热议蓉城丢冠：世纪崩盘)
1. [江西省公安厅警务技术一级主任被查](https://so.toutiao.com/search?keyword=江西省公安厅警务技术一级主任被查)
1. [我国新一代光刻机模型亮相](https://so.toutiao.com/search?keyword=我国新一代光刻机模型亮相)
1. [蓉城球迷到球队下榻酒店喊主帅下课](https://so.toutiao.com/search?keyword=蓉城球迷到球队下榻酒店喊主帅下课)
1. [泽连斯基：美民主党站在我们这一边](https://so.toutiao.com/search?keyword=泽连斯基：美民主党站在我们这一边)
1. [成都蓉城为何会丢冠](https://so.toutiao.com/search?keyword=成都蓉城为何会丢冠)
1. [胡军晒儿子康康18岁成人礼照片](https://so.toutiao.com/search?keyword=胡军晒儿子康康18岁成人礼照片)
1. [从历史两次暴跌反弹看该持有什么板块](https://so.toutiao.com/search?keyword=从历史两次暴跌反弹看该持有什么板块)
1. [中方坚决反对荷兰干涉香港事务](https://so.toutiao.com/search?keyword=中方坚决反对荷兰干涉香港事务)
1. [人民币四年新高美为何加息也拦不住](https://so.toutiao.com/search?keyword=人民币四年新高美为何加息也拦不住)
1. [于正求厉娜原谅许飞](https://so.toutiao.com/search?keyword=于正求厉娜原谅许飞)
1. [大连球迷：泰山是我亲哥](https://so.toutiao.com/search?keyword=大连球迷：泰山是我亲哥)
1. [老年抚养比超过少儿抚养比意味着什么](https://so.toutiao.com/search?keyword=老年抚养比超过少儿抚养比意味着什么)
1. [石家庄火流星碎块为普通球粒陨石](https://so.toutiao.com/search?keyword=石家庄火流星碎块为普通球粒陨石)
1. [王力宏演唱会出现移动提词器](https://so.toutiao.com/search?keyword=王力宏演唱会出现移动提词器)
1. [国乒男单今年6站冠军赛0冠](https://so.toutiao.com/search?keyword=国乒男单今年6站冠军赛0冠)
1. [没有“三高”也可能突发血栓](https://so.toutiao.com/search?keyword=没有“三高”也可能突发血栓)
1. [郑州能提前供暖吗？官方回应](https://so.toutiao.com/search?keyword=郑州能提前供暖吗？官方回应)
1. [球迷怒斥蓉城管理层降本增“笑”](https://so.toutiao.com/search?keyword=球迷怒斥蓉城管理层降本增“笑”)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Nov 10 2026 01:26:20 GMT+0800 (China Standard Time) -->

1. [黄仁勋承认婚外情](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%89%BF%E8%AE%A4%E5%A9%9A%E5%A4%96%E6%83%85)
1. [黄渤自曝今年几乎没戏拍](https://www.zhihu.com/search?q=%E9%BB%84%E6%B8%A4%E8%87%AA%E6%9B%9D%E4%BB%8A%E5%B9%B4%E5%87%A0%E4%B9%8E%E6%B2%A1%E6%88%8F%E6%8B%8D)
1. [王楚钦发文反思总结](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E6%96%87%E5%8F%8D%E6%80%9D%E6%80%BB%E7%BB%93)
1. [BLG 3-1 T1](https://www.zhihu.com/search?q=BLG%203-1%20T1)
1. [黄仁勋否认交往中国女间谍](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E5%90%A6%E8%AE%A4%E4%BA%A4%E5%BE%80%E4%B8%AD%E5%9B%BD%E5%A5%B3%E9%97%B4%E8%B0%8D)
1. [曝某新能源车被曝前后轮毂装反](https://www.zhihu.com/search?q=%E6%9B%9D%E6%9F%90%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E8%A2%AB%E6%9B%9D%E5%89%8D%E5%90%8E%E8%BD%AE%E6%AF%82%E8%A3%85%E5%8F%8D)
1. [黄仁勋或被英伟达免职](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%88%96%E8%A2%AB%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%85%8D%E8%81%8C)
1. [知乎好奇岛装扮游戏](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [胖东来回应洗发水被指产地造假](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94%E6%B4%97%E5%8F%91%E6%B0%B4%E8%A2%AB%E6%8C%87%E4%BA%A7%E5%9C%B0%E9%80%A0%E5%81%87)
1. [杭州警方通报致 2 死刑案](https://www.zhihu.com/search?q=%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E8%87%B4%202%20%E6%AD%BB%E5%88%91%E6%A1%88)
1. [大连英博夺得中超冠军](https://www.zhihu.com/search?q=%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%E5%A4%BA%E5%BE%97%E4%B8%AD%E8%B6%85%E5%86%A0%E5%86%9B)
1. [疑似秦始皇儿子头骨面容被复原](https://www.zhihu.com/search?q=%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E5%A4%B4%E9%AA%A8%E9%9D%A2%E5%AE%B9%E8%A2%AB%E5%A4%8D%E5%8E%9F)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Nov 10 2026 01:31:58 GMT+0800 (China Standard Time) -->

1. [「世另我」左右手首次在全球总决赛顶峰相见，你看好谁最终夺得 S16 总决赛冠军？](https://www.zhihu.com/question/2103059985731155500)
1. [疑似秦始皇儿子头骨面容被复原，男子死时约30岁，头骨右颞骨中嵌有一枚青铜箭头，哪些细节值得关注？](https://www.zhihu.com/question/2102853586312849200)
1. [哈工大硕士毕业后创业失败，如今在街头卖气球，被人质疑「浪费资源」，如何评价他的选择？真的是浪费资源吗？](https://www.zhihu.com/question/2102480088411419100)
1. [5吨的大象都会被吃，骆驼却几乎无天敌，为啥没有食肉动物吃它呢？](https://www.zhihu.com/question/2102402187066356500)
1. [如何看待iG投资人称AL说被淘汰的队要给晋级的LPL队伍打训练赛，结果自己淘汰后第二天就回去了？](https://www.zhihu.com/question/2103133144081588500)
1. [马斯克爆料称「软银正在违约燃气轮机订单」，是真的吗？这一爆料对市场的影响有多大？](https://www.zhihu.com/question/2103023634302204000)
1. [投入几个亿开五星级酒店的人，这辈子能把钱赚回来吗？](https://www.zhihu.com/question/430168669)
1. [如何看待蔡少芬一家五口在中国香港住83平米房子却说是「豪宅」，很知足？](https://www.zhihu.com/question/2102923372690663400)
1. [为什么 Doran 仍然是那个 Doran，S16 全球总决赛 T1 带不动他了？](https://www.zhihu.com/question/2103060366867555300)
1. [2026中超终于落下大幕，大连加冕，成都蓉城以一种几乎无法复刻的方式丢掉了冠军，为啥大家都觉得挺好？](https://www.zhihu.com/question/2102835109233694700)
1. [代号「玄龙」的攻击-11 隐身无人机公开亮相，这一无人机有哪些细节值得关注？将如何影响未来空战？](https://www.zhihu.com/question/2103123453817656000)
1. [英伟达突发「史上最大GPU盗窃案」，价值 1140 万美元的硬件失踪，具体什么情况？可能带来哪些影响？](https://www.zhihu.com/question/2102838731207964000)
1. [全身麻醉醒来像「跳过了」几个小时，睡眠为什么没有这种感觉？](https://www.zhihu.com/question/2086783568102144000)
1. [把娃户口挪去东北（比如鹤岗），读高中和高考，是否可行？ 哪个城市比较建议？](https://www.zhihu.com/question/2098513012952979000)
1. [张朝阳说从来不看AI漫剧，AI让内容产生一种塑料感，像化肥催熟的西红柿没有味，你同意吗？](https://www.zhihu.com/question/2102717260867559400)
1. [英伟达美股夜盘跌超 3%，其后续股价走势会如何？](https://www.zhihu.com/question/2103054279376204000)
1. [如何看待Science最新研究证实阉割小鼠能够延长其寿命，且成年后阉割效果最好？](https://www.zhihu.com/question/2102130271294441200)
1. [2026 年的 T1 相比 2025 年差在哪？真的是换走 Gumayusi 导致的吗？](https://www.zhihu.com/question/2103087025725203700)
1. [感觉还是时常对孩子有亏欠？感觉给孩子托举的还是不够多，怎么办？](https://www.zhihu.com/question/2044482302038759200)
1. [我提出离职后领导加薪挽留，同时收到了其它公司的 offer，我该怎么选呢？](https://www.zhihu.com/question/884763344)
1. [如何评价 Faker 在 S16 全球总决赛上的表现？](https://www.zhihu.com/question/2103063049640977000)
1. [为何很多中国父母不懂得跟子女好好聊天？](https://www.zhihu.com/question/2100849986003124200)
1. [河南财大就「教师赵某彦被举报性骚扰女生」一事发布通报，称已成立专项调查组，事件有哪些值得关注的信息？](https://www.zhihu.com/question/2103083334569911300)
1. [怎么看大学里动不动就整个上午或下午没课的空闲状态？是否应该像高中那样排满课、多布置作业才算没荒废时间？](https://www.zhihu.com/question/2101155408748476200)
1. [山姆多款始祖鸟加拿大鹅被抢空，有商品比官方便宜近5000元，为什么能卖这么便宜？背后是怎样的商业策略？](https://www.zhihu.com/question/2102852244009744000)
1. [957 直播中爆料「小道消息 Zeus 将回归 T1」2027 年的 T1 会卷土重来吗？](https://www.zhihu.com/question/2103088687386817800)
1. [广东妈妈认为“山东饭”能长高，坚持为6岁儿子做疙瘩汤、煎饼等，一月后长高1.3厘米，山东饭这么神奇吗？](https://www.zhihu.com/question/2103126074590871600)
1. [智谱 GLM-5.5 研发线索指向 100%RSI 与 100T 数据目标，这意味着什么？](https://www.zhihu.com/question/2101971195096835300)
1. [网友提名《后会友期》第二季阵容，杨幂唐嫣、范玮琪张韶涵、蒋欣刘涛等 10 组嘉宾你最想看哪对合体？](https://www.zhihu.com/question/2101343336816719400)
1. [如何看待乔治凯南评价说中国人是亚洲的法国人？](https://www.zhihu.com/question/1966118887918671400)

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
<!-- 最后更新时间 Tue Nov 10 2026 01:39:53 GMT+0800 (China Standard Time) -->

1. [就是要做党和人民信赖的新闻工作者](https://s.weibo.com//weibo?q=%23%E5%B0%B1%E6%98%AF%E8%A6%81%E5%81%9A%E5%85%9A%E5%92%8C%E4%BA%BA%E6%B0%91%E4%BF%A1%E8%B5%96%E7%9A%84%E6%96%B0%E9%97%BB%E5%B7%A5%E4%BD%9C%E8%80%85%23&Refer=new_time)
1. [白小纯 王子璇](https://s.weibo.com//weibo?q=%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E7%8E%8B%E5%AD%90%E7%92%87&t=31&band_rank=1&Refer=top)
1. [老人将6亿遗产留给再婚妻子](https://s.weibo.com//weibo?q=%23%E8%80%81%E4%BA%BA%E5%B0%866%E4%BA%BF%E9%81%97%E4%BA%A7%E7%95%99%E7%BB%99%E5%86%8D%E5%A9%9A%E5%A6%BB%E5%AD%90%23&t=31&band_rank=2&Refer=top)
1. [铸牢共同体中华一家亲](https://s.weibo.com//weibo?q=%23%E9%93%B8%E7%89%A2%E5%85%B1%E5%90%8C%E4%BD%93%E4%B8%AD%E5%8D%8E%E4%B8%80%E5%AE%B6%E4%BA%B2%23&t=31&band_rank=3&Refer=top)
1. [白小纯在发现有人没上车的30秒](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%9C%A8%E5%8F%91%E7%8E%B0%E6%9C%89%E4%BA%BA%E6%B2%A1%E4%B8%8A%E8%BD%A6%E7%9A%8430%E7%A7%92%23&t=31&band_rank=4&Refer=top)
1. [W盛典内场](https://s.weibo.com//weibo?q=W%E7%9B%9B%E5%85%B8%E5%86%85%E5%9C%BA&t=31&band_rank=5&Refer=top)
1. [疑似自费高定艺人回复网友](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E5%9B%9E%E5%A4%8D%E7%BD%91%E5%8F%8B%23&t=31&band_rank=6&Refer=top)
1. [石家庄天降陨石最大单体35公斤](https://s.weibo.com//weibo?q=%23%E7%9F%B3%E5%AE%B6%E5%BA%84%E5%A4%A9%E9%99%8D%E9%99%A8%E7%9F%B3%E6%9C%80%E5%A4%A7%E5%8D%95%E4%BD%9335%E5%85%AC%E6%96%A4%23&t=31&band_rank=7&Refer=top)
1. [尚公主官方拆cp](https://s.weibo.com//weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%AE%98%E6%96%B9%E6%8B%86cp%23&t=31&band_rank=8&Refer=top)
1. [国乒问题并非王楚钦一个人问题](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E9%97%AE%E9%A2%98%E5%B9%B6%E9%9D%9E%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%80%E4%B8%AA%E4%BA%BA%E9%97%AE%E9%A2%98%23&t=31&band_rank=9&Refer=top)
1. [大型SUV第一名是小米澎程N90](https://s.weibo.com//weibo?q=%E5%A4%A7%E5%9E%8BSUV%E7%AC%AC%E4%B8%80%E5%90%8D%E6%98%AF%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90&t=31&band_rank=10&Refer=top)
1. [王子璇方否认与白小纯恋情](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%96%B9%E5%90%A6%E8%AE%A4%E4%B8%8E%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%81%8B%E6%83%85%23&t=31&band_rank=11&Refer=top)
1. [黄仁勋的恋爱脑伤到了哪些硅谷大佬](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%9A%84%E6%81%8B%E7%88%B1%E8%84%91%E4%BC%A4%E5%88%B0%E4%BA%86%E5%93%AA%E4%BA%9B%E7%A1%85%E8%B0%B7%E5%A4%A7%E4%BD%AC%23&t=31&band_rank=12&Refer=top)
1. [刘诗诗躲了半天还是没躲过](https://s.weibo.com//weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%BA%B2%E4%BA%86%E5%8D%8A%E5%A4%A9%E8%BF%98%E6%98%AF%E6%B2%A1%E8%BA%B2%E8%BF%87%23&t=31&band_rank=13&Refer=top)
1. [白敬亭井柏然 你穿着貂我露着背](https://s.weibo.com//weibo?q=%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%20%E4%BD%A0%E7%A9%BF%E7%9D%80%E8%B2%82%E6%88%91%E9%9C%B2%E7%9D%80%E8%83%8C&t=31&band_rank=14&Refer=top)
1. [白小纯青稚飞升](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E9%A3%9E%E5%8D%87%23&t=31&band_rank=15&Refer=top)
1. [黄仁勋持股不足4%为何能主导英伟达](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E6%8C%81%E8%82%A1%E4%B8%8D%E8%B6%B34%25%E4%B8%BA%E4%BD%95%E8%83%BD%E4%B8%BB%E5%AF%BC%E8%8B%B1%E4%BC%9F%E8%BE%BE%23&t=31&band_rank=16&Refer=top)
1. [虞书欣吓张凌赫一跳](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%93%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%80%E8%B7%B3%23&t=31&band_rank=17&Refer=top)
1. [黄仁勋出事看似是八卦其实是生意](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%87%BA%E4%BA%8B%E7%9C%8B%E4%BC%BC%E6%98%AF%E5%85%AB%E5%8D%A6%E5%85%B6%E5%AE%9E%E6%98%AF%E7%94%9F%E6%84%8F%23&t=31&band_rank=18&Refer=top)
1. [山姆现20元一包泡面](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E5%A7%86%E7%8E%B020%E5%85%83%E4%B8%80%E5%8C%85%E6%B3%A1%E9%9D%A2%23&t=31&band_rank=19&Refer=top)
1. [没钱时的你不是真实的你](https://s.weibo.com//weibo?q=%E6%B2%A1%E9%92%B1%E6%97%B6%E7%9A%84%E4%BD%A0%E4%B8%8D%E6%98%AF%E7%9C%9F%E5%AE%9E%E7%9A%84%E4%BD%A0&t=31&band_rank=20&Refer=top)
1. [王子璇手机型号](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%89%8B%E6%9C%BA%E5%9E%8B%E5%8F%B7%23&t=31&band_rank=21&Refer=top)
1. [白敬亭井柏然宋威龙王嘉尔张凌赫同框](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AE%8B%E5%A8%81%E9%BE%99%E7%8E%8B%E5%98%89%E5%B0%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%8C%E6%A1%86%23&t=31&band_rank=22&Refer=top)
1. [舍友狗去世全宿舍要披麻戴孝吗](https://s.weibo.com//weibo?q=%E8%88%8D%E5%8F%8B%E7%8B%97%E5%8E%BB%E4%B8%96%E5%85%A8%E5%AE%BF%E8%88%8D%E8%A6%81%E6%8A%AB%E9%BA%BB%E6%88%B4%E5%AD%9D%E5%90%97&t=31&band_rank=23&Refer=top)
1. [舍友用婴幼儿洗发水我满脸问号](https://s.weibo.com//weibo?q=%E8%88%8D%E5%8F%8B%E7%94%A8%E5%A9%B4%E5%B9%BC%E5%84%BF%E6%B4%97%E5%8F%91%E6%B0%B4%E6%88%91%E6%BB%A1%E8%84%B8%E9%97%AE%E5%8F%B7&t=31&band_rank=24&Refer=top)
1. [许飞抢完明星红包也取关](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%8A%A2%E5%AE%8C%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%E4%B9%9F%E5%8F%96%E5%85%B3%23&t=31&band_rank=25&Refer=top)
1. [用空气炸锅烤奶茶太香了](https://s.weibo.com//weibo?q=%23%E7%94%A8%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%83%A4%E5%A5%B6%E8%8C%B6%E5%A4%AA%E9%A6%99%E4%BA%86%23&t=31&band_rank=26&Refer=top)
1. [辛芷蕾W盛典内场](https://s.weibo.com//weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BEW%E7%9B%9B%E5%85%B8%E5%86%85%E5%9C%BA%23&t=31&band_rank=27&Refer=top)
1. [刘恺威陪读小糯米一年半没安排工作](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%E9%99%AA%E8%AF%BB%E5%B0%8F%E7%B3%AF%E7%B1%B3%E4%B8%80%E5%B9%B4%E5%8D%8A%E6%B2%A1%E5%AE%89%E6%8E%92%E5%B7%A5%E4%BD%9C%23&t=31&band_rank=28&Refer=top)
1. [花坛埋尸案女子曾每年给儿子织毛衣](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%9D%9B%E5%9F%8B%E5%B0%B8%E6%A1%88%E5%A5%B3%E5%AD%90%E6%9B%BE%E6%AF%8F%E5%B9%B4%E7%BB%99%E5%84%BF%E5%AD%90%E7%BB%87%E6%AF%9B%E8%A1%A3%23&t=31&band_rank=29&Refer=top)
1. [美股高开高走科技股大涨](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1%E9%AB%98%E5%BC%80%E9%AB%98%E8%B5%B0%E7%A7%91%E6%8A%80%E8%82%A1%E5%A4%A7%E6%B6%A8&t=31&band_rank=30&Refer=top)
1. [W盛典晚宴座位](https://s.weibo.com//weibo?q=%23W%E7%9B%9B%E5%85%B8%E6%99%9A%E5%AE%B4%E5%BA%A7%E4%BD%8D%23&t=31&band_rank=31&Refer=top)
1. [闲鱼聊天记录太尴尬了](https://s.weibo.com//weibo?q=%E9%97%B2%E9%B1%BC%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E5%A4%AA%E5%B0%B4%E5%B0%AC%E4%BA%86&t=31&band_rank=32&Refer=top)
1. [纯璇](https://s.weibo.com//weibo?q=%E7%BA%AF%E7%92%87&t=31&band_rank=33&Refer=top)
1. [虞书欣宋威龙干杯](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%AE%8B%E5%A8%81%E9%BE%99%E5%B9%B2%E6%9D%AF%23&t=31&band_rank=34&Refer=top)
1. [时代少年团粉丝喊了七周年快乐](https://s.weibo.com//weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%B2%89%E4%B8%9D%E5%96%8A%E4%BA%86%E4%B8%83%E5%91%A8%E5%B9%B4%E5%BF%AB%E4%B9%90%23&t=31&band_rank=35&Refer=top)
1. [唐嫣W盛典内场](https://s.weibo.com//weibo?q=%E5%94%90%E5%AB%A3W%E7%9B%9B%E5%85%B8%E5%86%85%E5%9C%BA&t=31&band_rank=36&Refer=top)
1. [oner称赞Xun](https://s.weibo.com//weibo?q=%23oner%E7%A7%B0%E8%B5%9EXun%23&t=31&band_rank=37&Refer=top)
1. [W盛典全员镜头](https://s.weibo.com//weibo?q=%23W%E7%9B%9B%E5%85%B8%E5%85%A8%E5%91%98%E9%95%9C%E5%A4%B4%23&t=31&band_rank=38&Refer=top)
1. [王楚钦发文反思总结](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E6%96%87%E5%8F%8D%E6%80%9D%E6%80%BB%E7%BB%93%23&t=31&band_rank=39&Refer=top)
1. [墨尔本中国骑手遇害案嫌犯大闹法庭](https://s.weibo.com//weibo?q=%23%E5%A2%A8%E5%B0%94%E6%9C%AC%E4%B8%AD%E5%9B%BD%E9%AA%91%E6%89%8B%E9%81%87%E5%AE%B3%E6%A1%88%E5%AB%8C%E7%8A%AF%E5%A4%A7%E9%97%B9%E6%B3%95%E5%BA%AD%23&t=31&band_rank=40&Refer=top)
1. [Zeus重返T1转会传闻](https://s.weibo.com//weibo?q=Zeus%E9%87%8D%E8%BF%94T1%E8%BD%AC%E4%BC%9A%E4%BC%A0%E9%97%BB&t=31&band_rank=41&Refer=top)
1. [金鸡奖最佳男主角提名](https://s.weibo.com//weibo?q=%E9%87%91%E9%B8%A1%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%E8%A7%92%E6%8F%90%E5%90%8D&t=31&band_rank=42&Refer=top)
1. [迪丽热巴爸爸20分钟卖了7000单苹果](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%88%B8%E7%88%B820%E5%88%86%E9%92%9F%E5%8D%96%E4%BA%867000%E5%8D%95%E8%8B%B9%E6%9E%9C%23&t=31&band_rank=43&Refer=top)
1. [比亚迪大唐前后轮毂装反](https://s.weibo.com//weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%A4%A7%E5%94%90%E5%89%8D%E5%90%8E%E8%BD%AE%E6%AF%82%E8%A3%85%E5%8F%8D%23&t=31&band_rank=44&Refer=top)
1. [骨科医生做手术要戴可撕式面罩](https://s.weibo.com//weibo?q=%23%E9%AA%A8%E7%A7%91%E5%8C%BB%E7%94%9F%E5%81%9A%E6%89%8B%E6%9C%AF%E8%A6%81%E6%88%B4%E5%8F%AF%E6%92%95%E5%BC%8F%E9%9D%A2%E7%BD%A9%23&t=31&band_rank=45&Refer=top)
1. [Faker的格局](https://s.weibo.com//weibo?q=%23Faker%E7%9A%84%E6%A0%BC%E5%B1%80%23&t=31&band_rank=46&Refer=top)
1. [男子回应结婚25年不让妻子上班](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E7%BB%93%E5%A9%9A25%E5%B9%B4%E4%B8%8D%E8%AE%A9%E5%A6%BB%E5%AD%90%E4%B8%8A%E7%8F%AD%23&t=31&band_rank=47&Refer=top)
1. [小米汽车10月全系破万](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A610%E6%9C%88%E5%85%A8%E7%B3%BB%E7%A0%B4%E4%B8%87&t=31&band_rank=48&Refer=top)
1. [哈尔滨烤地瓜原价1688到手8元](https://s.weibo.com//weibo?q=%E5%93%88%E5%B0%94%E6%BB%A8%E7%83%A4%E5%9C%B0%E7%93%9C%E5%8E%9F%E4%BB%B71688%E5%88%B0%E6%89%8B8%E5%85%83&t=31&band_rank=49&Refer=top)
1. [程靖淇谈王楚钦发文](https://s.weibo.com//weibo?q=%23%E7%A8%8B%E9%9D%96%E6%B7%87%E8%B0%88%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E6%96%87%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
