# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-09 14:33:45

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
<!-- 最后更新时间 Mon Nov 09 2026 07:59:18 GMT+0800 (China Standard Time) -->

1. [大连多个景区对山东游客免费100天](https://so.toutiao.com/search?keyword=大连多个景区对山东游客免费100天)
1. [大爷自学网购下单15吨红薯做粉条](https://so.toutiao.com/search?keyword=大爷自学网购下单15吨红薯做粉条)
1. [从进博会看先进制造业汇聚创新动能](https://so.toutiao.com/search?keyword=从进博会看先进制造业汇聚创新动能)
1. [内塔尼亚胡还能当多久总理](https://so.toutiao.com/search?keyword=内塔尼亚胡还能当多久总理)
1. [黄仁勋承认出轨](https://so.toutiao.com/search?keyword=黄仁勋承认出轨)
1. [张本智和晋级法兰克福冠军赛决赛](https://so.toutiao.com/search?keyword=张本智和晋级法兰克福冠军赛决赛)
1. [疑似秦始皇儿子头骨面容复原图公布](https://so.toutiao.com/search?keyword=疑似秦始皇儿子头骨面容复原图公布)
1. [优质蛋白食物第一名出炉](https://so.toutiao.com/search?keyword=优质蛋白食物第一名出炉)
1. [立冬后建议改一下睡觉时间](https://so.toutiao.com/search?keyword=立冬后建议改一下睡觉时间)
1. [大连主帅被泼啤酒滑倒光速变脸](https://so.toutiao.com/search?keyword=大连主帅被泼啤酒滑倒光速变脸)
1. [南京辟谣“31岁医生被刺身亡”](https://so.toutiao.com/search?keyword=南京辟谣“31岁医生被刺身亡”)
1. [拼多多送货上门新规有何影响](https://so.toutiao.com/search?keyword=拼多多送货上门新规有何影响)
1. [詹姆斯赛季新高22分 76人力擒公牛](https://so.toutiao.com/search?keyword=詹姆斯赛季新高22分%2076人力擒公牛)
1. [秦皇岛居民称20年没见过这么大雪](https://so.toutiao.com/search?keyword=秦皇岛居民称20年没见过这么大雪)
1. [曝迪丽热巴没买房常年住酒店](https://so.toutiao.com/search?keyword=曝迪丽热巴没买房常年住酒店)
1. [越南消费为什么这么猛](https://so.toutiao.com/search?keyword=越南消费为什么这么猛)
1. [演员阿颜扁桃体切除术后不幸离世](https://so.toutiao.com/search?keyword=演员阿颜扁桃体切除术后不幸离世)
1. [金晨透露已举家搬迁至三亚](https://so.toutiao.com/search?keyword=金晨透露已举家搬迁至三亚)
1. [史诗级逆转！英博夺队史中超首冠](https://so.toutiao.com/search?keyword=史诗级逆转！英博夺队史中超首冠)
1. [6层居民楼5户反映噪音扰民 民警蹲守](https://so.toutiao.com/search?keyword=6层居民楼5户反映噪音扰民%20民警蹲守)
1. [11国在俄美乌三方和谈前一天举行军演](https://so.toutiao.com/search?keyword=11国在俄美乌三方和谈前一天举行军演)
1. [成都蓉城丢冠是输给了“心魔”吗](https://so.toutiao.com/search?keyword=成都蓉城丢冠是输给了“心魔”吗)
1. [C罗的口碑为什么塌了](https://so.toutiao.com/search?keyword=C罗的口碑为什么塌了)
1. [马竞vs巴萨全场数据](https://so.toutiao.com/search?keyword=马竞vs巴萨全场数据)
1. [蓉城主帅：我非常失望非常绝望](https://so.toutiao.com/search?keyword=蓉城主帅：我非常失望非常绝望)
1. [医生提醒：三类人群要慎食羊肉](https://so.toutiao.com/search?keyword=医生提醒：三类人群要慎食羊肉)
1. [广西一团伙包装卖淫女色情敲诈被端](https://so.toutiao.com/search?keyword=广西一团伙包装卖淫女色情敲诈被端)
1. [雪后八达岭长城“长”满人](https://so.toutiao.com/search?keyword=雪后八达岭长城“长”满人)
1. [台湾第二批新购F-16战机抵台](https://so.toutiao.com/search?keyword=台湾第二批新购F-16战机抵台)
1. [马斯克称软银正在违约燃气轮机订单](https://so.toutiao.com/search?keyword=马斯克称软银正在违约燃气轮机订单)
1. [记者卧底调查女厕偷拍黑产](https://so.toutiao.com/search?keyword=记者卧底调查女厕偷拍黑产)
1. [澳企一年炼出62吨重稀土意味着什么](https://so.toutiao.com/search?keyword=澳企一年炼出62吨重稀土意味着什么)
1. [英伟达超7600万元货物失踪 专家解读](https://so.toutiao.com/search?keyword=英伟达超7600万元货物失踪%20专家解读)
1. [网友微信状态发“画地为牢”被辞退](https://so.toutiao.com/search?keyword=网友微信状态发“画地为牢”被辞退)
1. [别让5种劳损耗空你的身体](https://so.toutiao.com/search?keyword=别让5种劳损耗空你的身体)
1. [中国足球顶级联赛冠军次数排行榜](https://so.toutiao.com/search?keyword=中国足球顶级联赛冠军次数排行榜)
1. [有理儿有面：日本正给一颗炸弹装引信](https://so.toutiao.com/search?keyword=有理儿有面：日本正给一颗炸弹装引信)
1. [秦皇岛积雪超20厘米](https://so.toutiao.com/search?keyword=秦皇岛积雪超20厘米)
1. [明年260万新能源车电池面临脱保](https://so.toutiao.com/search?keyword=明年260万新能源车电池面临脱保)
1. [媒体：“美数中算”不仅仅是一句调侃](https://so.toutiao.com/search?keyword=媒体：“美数中算”不仅仅是一句调侃)
1. [每晚睡7小时卒中发病风险最低](https://so.toutiao.com/search?keyword=每晚睡7小时卒中发病风险最低)
1. [阿奇姆彭首获中超联赛冠军](https://so.toutiao.com/search?keyword=阿奇姆彭首获中超联赛冠军)
1. [中国球员NBA常规赛两双仅3人](https://so.toutiao.com/search?keyword=中国球员NBA常规赛两双仅3人)
1. [媒体评11元买房：踩踏鹤岗城市形象](https://so.toutiao.com/search?keyword=媒体评11元买房：踩踏鹤岗城市形象)
1. [杨鸣谈詹姆斯防守](https://so.toutiao.com/search?keyword=杨鸣谈詹姆斯防守)
1. [穆雷：约基奇拥有顶级球商和比赛视野](https://so.toutiao.com/search?keyword=穆雷：约基奇拥有顶级球商和比赛视野)
1. [大连英博成立不到5年登顶中超](https://so.toutiao.com/search?keyword=大连英博成立不到5年登顶中超)
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
<!-- 最后更新时间 Mon Nov 09 2026 07:41:38 GMT+0800 (China Standard Time) -->

1. [BLG vs T1](https://www.zhihu.com/search?q=BLG%20vs%20T1)
1. [山西太原一公寓火灾致5 死](https://www.zhihu.com/search?q=%E5%B1%B1%E8%A5%BF%E5%A4%AA%E5%8E%9F%E4%B8%80%E5%85%AC%E5%AF%93%E7%81%AB%E7%81%BE%E8%87%B45%20%E6%AD%BB)
1. [最后一位开国将军王扶之逝世](https://www.zhihu.com/search?q=%E6%9C%80%E5%90%8E%E4%B8%80%E4%BD%8D%E5%BC%80%E5%9B%BD%E5%B0%86%E5%86%9B%E7%8E%8B%E6%89%B6%E4%B9%8B%E9%80%9D%E4%B8%96)
1. [黄仁勋承认婚外情](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%89%BF%E8%AE%A4%E5%A9%9A%E5%A4%96%E6%83%85)
1. [GEN 3-0 iG](https://www.zhihu.com/search?q=GEN%203-0%20iG)
1. [人民日报批年轻人养不起老人论调](https://www.zhihu.com/search?q=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%89%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%85%BB%E4%B8%8D%E8%B5%B7%E8%80%81%E4%BA%BA%E8%AE%BA%E8%B0%83)
1. [大连英博夺得中超冠军](https://www.zhihu.com/search?q=%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%E5%A4%BA%E5%BE%97%E4%B8%AD%E8%B6%85%E5%86%A0%E5%86%9B)
1. [知乎好奇岛装扮游戏](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [男子11元拍走鹤岗60多平房屋](https://www.zhihu.com/search?q=%E7%94%B7%E5%AD%9011%E5%85%83%E6%8B%8D%E8%B5%B0%E9%B9%A4%E5%B2%9760%E5%A4%9A%E5%B9%B3%E6%88%BF%E5%B1%8B)
1. [孙宇晨就与景甜财产纠纷案再发声](https://www.zhihu.com/search?q=%E5%AD%99%E5%AE%87%E6%99%A8%E5%B0%B1%E4%B8%8E%E6%99%AF%E7%94%9C%E8%B4%A2%E4%BA%A7%E7%BA%A0%E7%BA%B7%E6%A1%88%E5%86%8D%E5%8F%91%E5%A3%B0)
1. [11月7日DeepSeek 崩了](https://www.zhihu.com/search?q=11%E6%9C%887%E6%97%A5DeepSeek%20%E5%B4%A9%E4%BA%86)
1. [男子表演式上班以骗薪13万](https://www.zhihu.com/search?q=%E7%94%B7%E5%AD%90%E8%A1%A8%E6%BC%94%E5%BC%8F%E4%B8%8A%E7%8F%AD%E4%BB%A5%E9%AA%97%E8%96%AA13%E4%B8%87)
1. [英伟达突发史上最大GPU盗窃案](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E7%AA%81%E5%8F%91%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7GPU%E7%9B%97%E7%AA%83%E6%A1%88)
1. [字节跳动扣子下线解散](https://www.zhihu.com/search?q=%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E6%89%A3%E5%AD%90%E4%B8%8B%E7%BA%BF%E8%A7%A3%E6%95%A3)
1. [疑似秦始皇儿子头骨面容被复原](https://www.zhihu.com/search?q=%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E5%A4%B4%E9%AA%A8%E9%9D%A2%E5%AE%B9%E8%A2%AB%E5%A4%8D%E5%8E%9F)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Nov 09 2026 14:33:45 GMT+0800 (China Standard Time) -->

1. [S16淘汰赛BLG VS T1，如何评价这场比赛？](https://www.zhihu.com/question/2102992165089579800)
1. [自媒体曝胖东来爆火的卡蓓诺洗发水疑为非日本制造，胖东来否认产地造假并将启动维权，哪些信息值得关注？](https://www.zhihu.com/question/2102487963552765200)
1. [山西太原迎泽区一公寓发生火灾，已致 14 人死亡，具体情况如何？](https://www.zhihu.com/question/2102831883318813200)
1. [黄渤自曝今年几乎没戏拍，如何看待实力派演员陷入空窗期？](https://www.zhihu.com/question/2102012267004958700)
1. [S16 半决赛 T1 1:3 不敌 BLG 无缘决赛，这场比赛他们输在哪？](https://www.zhihu.com/question/2103060164601501000)
1. [汝南那么好听，为什么要改成驻马店？](https://www.zhihu.com/question/418412789)
1. [BLG 连斩 LCK 三队晋级总决赛，他们能在决赛上击败 GEN，一穿四夺冠吗？](https://www.zhihu.com/question/2103059281805304800)
1. [如何看待蔡少芬一家五口在中国香港住83平米房子却说是「豪宅」，很知足？](https://www.zhihu.com/question/2102923372690663400)
1. [实验猴涨至26万一只，部分养殖企业已无猴可售，会对医药行业产生哪些影响？涨价热潮可能还会持续多久？](https://www.zhihu.com/question/2102042105917063400)
1. [为什么小米、华为、理想、小鹏、蔚来等新能源车企虽然有竞争，却都不约而同要放弃和宁德时代的单一合作？](https://www.zhihu.com/question/2081333782171465200)
1. [曹操和刘备死后，孙权便是天下第一雄主，而且正值壮年，为什么不能一统天下？](https://www.zhihu.com/question/1949198428434313200)
1. [因试用期 6 个月没转正，离职人员篡改后台数据致企业数百万损失，有哪些警示？职场遇这种情况该怎么处理？](https://www.zhihu.com/question/2100915840963044400)
1. [幼师毕业的 21 岁女生转行当环卫工称「待遇好」，折射出年轻人怎样的就业观变化？](https://www.zhihu.com/question/2100312974527313400)
1. [把娃户口挪去东北（比如鹤岗），读高中和高考，是否可行？ 哪个城市比较建议？](https://www.zhihu.com/question/2098513012952979000)
1. [东南亚国家里是不是只有越南不搞电信诈骗？](https://www.zhihu.com/question/1936095555173474300)
1. [英伟达美股夜盘跌超 3%，其后续股价走势会如何？](https://www.zhihu.com/question/2103054279376204000)
1. [一名普通人在拼命的情况下，能不能20分钟跑完5公里？](https://www.zhihu.com/question/2018447241094903000)
1. [2026 WTT 法兰克福冠军赛张本智和 4-2 胜弗朗西斯卡夺冠，如何评价他本场表现？](https://www.zhihu.com/question/2102970538540917800)
1. [人类是不是无法想象出来从来没见过的东西？](https://www.zhihu.com/question/417852496)
1. [上海微电子新一代光刻机模型亮相，该成果实现量产还需要攻克哪些核心难点？](https://www.zhihu.com/question/2102816165504591400)
1. [黄仁勋为何突然公开发文承认婚外情，为什么选择这一时间？](https://www.zhihu.com/question/2103039156586637000)
1. [媒体人称杨瀚森跟主力打总能获机会，垃圾时间跟亨德森打摸不着球，是什么原因导致的？](https://www.zhihu.com/question/2102986419153249800)
1. [大连文体旅集团旗下景区对山东老铁免费 100 天，以贺大连英博中超夺冠，你怎么看？能把大连文旅带火吗？](https://www.zhihu.com/question/2103033649801033000)
1. [全身麻醉醒来像「跳过了」几个小时，睡眠为什么没有这种感觉？](https://www.zhihu.com/question/2086783568102144000)
1. [微信状态发「画地为牢」被公司辞退，理由是「工作不积极」，社交吐槽能成为公司解除劳动关系的理由吗？](https://www.zhihu.com/question/2102861867601479400)
1. [2627 赛季 NBA 常规赛湖人 121:116 活塞，如何评价这场比赛？](https://www.zhihu.com/question/2103022165130007600)
1. [OpenAI「重置大神」Tibo 被调岗，接手重置权的 Andrew 会带来哪些改变？](https://www.zhihu.com/question/2102148066476299500)
1. [是孩子不感恩，还是我们太敏感了，让孩子用他的零花钱给我买奶茶，他不要，他要我给他买东西却理所当然？](https://www.zhihu.com/question/2074267149191988000)
1. [Agent和Harness到底是什么关系？](https://www.zhihu.com/question/2056893939261633000)
1. [西游里的大罗仙和太乙仙有什么区别？](https://www.zhihu.com/question/540428385)
1. [最后一位开国将军王扶之逝世，享年 104 岁，如何评价他的贡献？](https://www.zhihu.com/question/2102710109755241000)
1. [如何评价 the shy 选手赛后采访表示“希望 chovy 选手夺冠”？](https://www.zhihu.com/question/2102817124020496100)
1. [你如何看待人民日报客户端刊发的评论《一有分歧就举报，老师还怎么教孩子？》？](https://www.zhihu.com/question/2097312561024722400)
1. [大三男生宿舍手搓 AI 漫剧不到一年营收超 300 万，这是怎么做到的？实际赚了多少？普通人能效仿吗？](https://www.zhihu.com/question/2102727338995860500)
1. [比亚迪超豪华行政旗舰仰望「鼎曜」全球首秀，这款车的市场竞争力如何？](https://www.zhihu.com/question/2102552604710647600)
1. [电影《白衣逆行者》未能如期公映，疑似悄然撤档，如何看待此事？为什么现在电影定档、撤档越来越随意？](https://www.zhihu.com/question/2102057389406904300)
1. [54 岁大哥自学AI短剧登顶红果榜，团队成员一年还清债务，普通人真能靠AI翻身吗？有啥值得借鉴的思路？](https://www.zhihu.com/question/2102042636320298200)
1. [曝《后会友期》中文吉儿选择下车翻篇求和，王子璇坚决不下车，如何看待两人的选择？](https://www.zhihu.com/question/2100992374096787000)
1. [2627赛季英超联赛英超第10轮曼联 4:4 阿斯顿维拉，如何评价这场比赛？](https://www.zhihu.com/question/2102922413939881700)
1. [马斯克称Cybertruck明年逐步停产，实际销量仅目标产能一成，曾爆火的赛博皮卡为何没能跑通商业化？](https://www.zhihu.com/question/2102304929872458200)
1. [2岁幼童被开水烫伤后去世，无偿照看者遭索赔116万、最终赔偿15万元，为何这也要担责？法律上如何分析？](https://www.zhihu.com/question/2102758988194510800)
1. [如何评价波兰发生恐怖袭击致 6 死 16 伤，枪手被「极右翼意识形态」蛊惑，并「持极端民族主义观点」？](https://www.zhihu.com/question/2102652698558572300)
1. [怎么看待男子在出租公寓内坠亡，二房东被判担责40%赔偿76万余元?法律责任是如何划分的？](https://www.zhihu.com/question/2101331653033464300)
1. [如何评价 CSP-J/S 2026 第二轮多省多名考生代码高度近似，而 CCF 不受理民间举报？](https://www.zhihu.com/question/2102502792200037000)
1. [《影之刃零》中为何在人物读信时手里是光球，做个信件的建模很难吗？](https://www.zhihu.com/question/2101389512131855000)
1. [如何看待广州一公司控告多名员工因降薪而工作懈怠，导致公司结业？](https://www.zhihu.com/question/2101996437701768400)
1. [中国短剧霸榜全球，百强榜拿下82席，下载收入包揽前三，美国付费，东南亚、拉美冲量，还有多久红利期？](https://www.zhihu.com/question/2102423958968653800)
1. [妻子在家私装监控拍下丈夫出轨被认定非法证据，从法律角度该如何解读？](https://www.zhihu.com/question/2094635438808081200)
1. [越南有潜力成为下一个崛起大国吗？](https://www.zhihu.com/question/2102603766625318000)
1. [哪些名字能拯救牛这个姓氏？](https://www.zhihu.com/question/312875657)
1. [为什么腾讯一直坚持买ds的token免费发给用户也不愿意自己部署ds？](https://www.zhihu.com/question/2101848429152429600)
1. [日本统治韩国40年，为什么却没能同化韩国？](https://www.zhihu.com/question/2099154260315452400)
1. [张艺谋直言AI的技术飞跃带来平视感，「电影不再是精英的艺术，普通人都是导演、编剧」，怎么看待这一观点？](https://www.zhihu.com/question/2102442137832748800)
1. [林黛玉家也是名门望族，她借住贾府期间，林如海为什么没有给她钱财？](https://www.zhihu.com/question/2033463566653712400)
1. [如何评价《嫁金钗》大结局女主软禁太后杀死亲王摆下鸿门宴携胚胎以令诸侯，最后以护国长公主身份摄政天下？](https://www.zhihu.com/question/2102316298638250500)
1. [教育部推行教师 AI 全覆盖培训，部分教师却表示「越用 AI 反而越累」，为什么会出现这种现象？](https://www.zhihu.com/question/2101733537099559200)
1. [中超第 30 轮，大连英博 3-1 天津津门虎，完成史诗大逆转夺冠，如何评价本场比赛？](https://www.zhihu.com/question/2102756878681727500)
1. [成都蓉城本赛季丢冠的逆天程度在世界体育史上能排到什么水平？](https://www.zhihu.com/question/2102814330005856300)
1. [卡夫卡为什么要在临死前让好友把他未发表的作品全部销毁？](https://www.zhihu.com/question/19898892)
1. [为什么只有牛排分几分熟，而鸡肉、猪肉都要吃全熟呢？](https://www.zhihu.com/question/11494521022)
1. [如何评价 TheShy 在 S16 全球总决赛上的综合表现？](https://www.zhihu.com/question/2102684053056872700)
1. [如何看待 Chovy 首次晋级决赛采访称「无论 Knight 还是 Faker，我都会战胜他们夺冠」？](https://www.zhihu.com/question/2102691120597525000)
1. [《红楼梦》里，假如大观园拆了，把里面的人都放出来各自谋生，你觉得谁讨生活的能力更强？](https://www.zhihu.com/question/2065808689915809800)
1. [据传 ChatGPT 开始大规模封号，是真的吗？原因可能是什么？](https://www.zhihu.com/question/2102508937723565800)
1. [如何评价小说《校花的贴身高手》？](https://www.zhihu.com/question/62231952)
1. [外卖大战一年，美团、阿里、京东三家亏掉上千亿，怎么看这一结果？未来的外卖市场可能是什么走向？](https://www.zhihu.com/question/2101998994679232300)
1. [锦瑟中李商隐到底要表达什么意思？](https://www.zhihu.com/question/1919082177557172200)
1. [如何引导孩子自己解决问题？](https://www.zhihu.com/question/424143663)
1. [丧尸作品中后期人类内斗为何让人乏味？](https://www.zhihu.com/question/2098008639080551700)

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
<!-- 最后更新时间 Mon Nov 09 2026 14:51:11 GMT+0800 (China Standard Time) -->

1. [永远做党和人民的忠诚卫士](https://s.weibo.com//weibo?q=%23%E6%B0%B8%E8%BF%9C%E5%81%9A%E5%85%9A%E5%92%8C%E4%BA%BA%E6%B0%91%E7%9A%84%E5%BF%A0%E8%AF%9A%E5%8D%AB%E5%A3%AB%23&Refer=new_time)
1. [iG投资人开团AL](https://s.weibo.com//weibo?q=%23iG%E6%8A%95%E8%B5%84%E4%BA%BA%E5%BC%80%E5%9B%A2AL%23&t=31&band_rank=1&Refer=top)
1. [Doran说T1本可以赢BLG](https://s.weibo.com//weibo?q=%23Doran%E8%AF%B4T1%E6%9C%AC%E5%8F%AF%E4%BB%A5%E8%B5%A2BLG%23&t=31&band_rank=2&Refer=top)
1. [铸牢共同体中华一家亲](https://s.weibo.com//weibo?q=%23%E9%93%B8%E7%89%A2%E5%85%B1%E5%90%8C%E4%BD%93%E4%B8%AD%E5%8D%8E%E4%B8%80%E5%AE%B6%E4%BA%B2%23&t=31&band_rank=3&Refer=top)
1. [日本地铁太压抑了](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%93%81%E5%A4%AA%E5%8E%8B%E6%8A%91%E4%BA%86%23&t=31&band_rank=4&Refer=top)
1. [再婚皇后道具疑似是在拼多多买的](https://s.weibo.com//weibo?q=%23%E5%86%8D%E5%A9%9A%E7%9A%87%E5%90%8E%E9%81%93%E5%85%B7%E7%96%91%E4%BC%BC%E6%98%AF%E5%9C%A8%E6%8B%BC%E5%A4%9A%E5%A4%9A%E4%B9%B0%E7%9A%84%23&t=31&band_rank=5&Refer=top)
1. [为什么满地都是口腔诊所](https://s.weibo.com//weibo?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E6%BB%A1%E5%9C%B0%E9%83%BD%E6%98%AF%E5%8F%A3%E8%85%94%E8%AF%8A%E6%89%80&t=31&band_rank=6&Refer=top)
1. [青稚今天我给白小纯道歉了](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E4%BB%8A%E5%A4%A9%E6%88%91%E7%BB%99%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%81%93%E6%AD%89%E4%BA%86%23&t=31&band_rank=7&Refer=top)
1. [太原火灾](https://s.weibo.com//weibo?q=%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE&t=31&band_rank=8&Refer=top)
1. [Bin说GEN不如T1](https://s.weibo.com//weibo?q=%23Bin%E8%AF%B4GEN%E4%B8%8D%E5%A6%82T1%23&t=31&band_rank=9&Refer=top)
1. [太原一建筑火灾已致14死](https://s.weibo.com//weibo?q=%23%E5%A4%AA%E5%8E%9F%E4%B8%80%E5%BB%BA%E7%AD%91%E7%81%AB%E7%81%BE%E5%B7%B2%E8%87%B414%E6%AD%BB%23&t=31&band_rank=10&Refer=top)
1. [金子涵被下药中毒](https://s.weibo.com//weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%A2%AB%E4%B8%8B%E8%8D%AF%E4%B8%AD%E6%AF%92%23&t=31&band_rank=11&Refer=top)
1. [许飞人品](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E4%BA%BA%E5%93%81&t=31&band_rank=12&Refer=top)
1. [猫的树发文](https://s.weibo.com//weibo?q=%23%E7%8C%AB%E7%9A%84%E6%A0%91%E5%8F%91%E6%96%87%23&t=31&band_rank=13&Refer=top)
1. [黄仁勋出轨对英伟达影响有多大](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%BD%B1%E5%93%8D%E6%9C%89%E5%A4%9A%E5%A4%A7%23&t=31&band_rank=14&Refer=top)
1. [张雪机车米兰展车零件被偷光](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%B1%B3%E5%85%B0%E5%B1%95%E8%BD%A6%E9%9B%B6%E4%BB%B6%E8%A2%AB%E5%81%B7%E5%85%89%23&t=31&band_rank=15&Refer=top)
1. [虞书欣 W盛典](https://s.weibo.com//weibo?q=%E8%99%9E%E4%B9%A6%E6%AC%A3%20W%E7%9B%9B%E5%85%B8&t=31&band_rank=16&Refer=top)
1. [iPhone18Pro天猫历史最大降幅](https://s.weibo.com//weibo?q=%23iPhone18Pro%E5%A4%A9%E7%8C%AB%E5%8E%86%E5%8F%B2%E6%9C%80%E5%A4%A7%E9%99%8D%E5%B9%85%23&t=31&band_rank=17&Refer=top)
1. [W盛典出图](https://s.weibo.com//weibo?q=W%E7%9B%9B%E5%85%B8%E5%87%BA%E5%9B%BE&t=31&band_rank=18&Refer=top)
1. [让女性站立小便就是真的女性友好吗](https://s.weibo.com//weibo?q=%23%E8%AE%A9%E5%A5%B3%E6%80%A7%E7%AB%99%E7%AB%8B%E5%B0%8F%E4%BE%BF%E5%B0%B1%E6%98%AF%E7%9C%9F%E7%9A%84%E5%A5%B3%E6%80%A7%E5%8F%8B%E5%A5%BD%E5%90%97%23&t=31&band_rank=19&Refer=top)
1. [高迪 我没对不起过大美](https://s.weibo.com//weibo?q=%E9%AB%98%E8%BF%AA%20%E6%88%91%E6%B2%A1%E5%AF%B9%E4%B8%8D%E8%B5%B7%E8%BF%87%E5%A4%A7%E7%BE%8E&t=31&band_rank=20&Refer=top)
1. [马斯克](https://s.weibo.com//weibo?q=%E9%A9%AC%E6%96%AF%E5%85%8B&t=31&band_rank=21&Refer=top)
1. [黄仁勋41年爱妻人设崩塌](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B41%E5%B9%B4%E7%88%B1%E5%A6%BB%E4%BA%BA%E8%AE%BE%E5%B4%A9%E5%A1%8C%23&t=31&band_rank=22&Refer=top)
1. [马斯克黄仁勋惺惺相惜](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E9%BB%84%E4%BB%81%E5%8B%8B%E6%83%BA%E6%83%BA%E7%9B%B8%E6%83%9C%23&t=31&band_rank=23&Refer=top)
1. [曝黄仁勋出轨对象为新加坡一企业高管](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E9%BB%84%E4%BB%81%E5%8B%8B%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%B1%A1%E4%B8%BA%E6%96%B0%E5%8A%A0%E5%9D%A1%E4%B8%80%E4%BC%81%E4%B8%9A%E9%AB%98%E7%AE%A1%23&t=31&band_rank=24&Refer=top)
1. [6位商界人士出轨6种后果](https://s.weibo.com//weibo?q=%236%E4%BD%8D%E5%95%86%E7%95%8C%E4%BA%BA%E5%A3%AB%E5%87%BA%E8%BD%A86%E7%A7%8D%E5%90%8E%E6%9E%9C%23&t=31&band_rank=25&Refer=top)
1. [iG老板希望BLG给iG复仇](https://s.weibo.com//weibo?q=%23iG%E8%80%81%E6%9D%BF%E5%B8%8C%E6%9C%9BBLG%E7%BB%99iG%E5%A4%8D%E4%BB%87%23&t=31&band_rank=26&Refer=top)
1. [SM 新男团](https://s.weibo.com//weibo?q=SM%20%E6%96%B0%E7%94%B7%E5%9B%A2&t=31&band_rank=27&Refer=top)
1. [在淘宝扣扣搜搜地体面一把](https://s.weibo.com//weibo?q=%23%E5%9C%A8%E6%B7%98%E5%AE%9D%E6%89%A3%E6%89%A3%E6%90%9C%E6%90%9C%E5%9C%B0%E4%BD%93%E9%9D%A2%E4%B8%80%E6%8A%8A%23&t=31&band_rank=28&Refer=top)
1. [大连几乎所有饭店宣布夺冠就免单](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E8%BF%9E%E5%87%A0%E4%B9%8E%E6%89%80%E6%9C%89%E9%A5%AD%E5%BA%97%E5%AE%A3%E5%B8%83%E5%A4%BA%E5%86%A0%E5%B0%B1%E5%85%8D%E5%8D%95%23&t=31&band_rank=29&Refer=top)
1. [失业缓冲期首次出现在国家政策文件](https://s.weibo.com//weibo?q=%23%E5%A4%B1%E4%B8%9A%E7%BC%93%E5%86%B2%E6%9C%9F%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%9C%A8%E5%9B%BD%E5%AE%B6%E6%94%BF%E7%AD%96%E6%96%87%E4%BB%B6%23&t=31&band_rank=30&Refer=top)
1. [金子涵前几天露宿街头](https://s.weibo.com//weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%89%8D%E5%87%A0%E5%A4%A9%E9%9C%B2%E5%AE%BF%E8%A1%97%E5%A4%B4%23&t=31&band_rank=31&Refer=top)
1. [T1不敌BLG后台镜头曝光](https://s.weibo.com//weibo?q=%23T1%E4%B8%8D%E6%95%8CBLG%E5%90%8E%E5%8F%B0%E9%95%9C%E5%A4%B4%E6%9B%9D%E5%85%89%23&t=31&band_rank=32&Refer=top)
1. [吴磊立了两个绝对不会塌的人设](https://s.weibo.com//weibo?q=%23%E5%90%B4%E7%A3%8A%E7%AB%8B%E4%BA%86%E4%B8%A4%E4%B8%AA%E7%BB%9D%E5%AF%B9%E4%B8%8D%E4%BC%9A%E5%A1%8C%E7%9A%84%E4%BA%BA%E8%AE%BE%23&t=31&band_rank=33&Refer=top)
1. [黄仁勋讨论中最传神的图](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%AE%A8%E8%AE%BA%E4%B8%AD%E6%9C%80%E4%BC%A0%E7%A5%9E%E7%9A%84%E5%9B%BE%23&t=31&band_rank=34&Refer=top)
1. [太原火灾 消防](https://s.weibo.com//weibo?q=%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%20%E6%B6%88%E9%98%B2&t=31&band_rank=35&Refer=top)
1. [曝后会友期有一对反差太大](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%9C%89%E4%B8%80%E5%AF%B9%E5%8F%8D%E5%B7%AE%E5%A4%AA%E5%A4%A7%23&t=31&band_rank=36&Refer=top)
1. [英伟达](https://s.weibo.com//weibo?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE&t=31&band_rank=37&Refer=top)
1. [娇妹宣布与公司解约](https://s.weibo.com//weibo?q=%E5%A8%87%E5%A6%B9%E5%AE%A3%E5%B8%83%E4%B8%8E%E5%85%AC%E5%8F%B8%E8%A7%A3%E7%BA%A6&t=31&band_rank=38&Refer=top)
1. [梁家辉坐高铁参加金鸡奖](https://s.weibo.com//weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%9D%90%E9%AB%98%E9%93%81%E5%8F%82%E5%8A%A0%E9%87%91%E9%B8%A1%E5%A5%96%23&t=31&band_rank=39&Refer=top)
1. [成都蓉城丢冠后管理遭批](https://s.weibo.com//weibo?q=%E6%88%90%E9%83%BD%E8%93%89%E5%9F%8E%E4%B8%A2%E5%86%A0%E5%90%8E%E7%AE%A1%E7%90%86%E9%81%AD%E6%89%B9&t=31&band_rank=40&Refer=top)
1. [李佳航谈Faker输了](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%88%AA%E8%B0%88Faker%E8%BE%93%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [LPL恭喜BLG](https://s.weibo.com//weibo?q=LPL%E6%81%AD%E5%96%9CBLG&t=31&band_rank=42&Refer=top)
1. [特朗普回应出访亚洲是否带黄仁勋](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E5%87%BA%E8%AE%BF%E4%BA%9A%E6%B4%B2%E6%98%AF%E5%90%A6%E5%B8%A6%E9%BB%84%E4%BB%81%E5%8B%8B%23&t=31&band_rank=43&Refer=top)
1. [PEL开屏](https://s.weibo.com//weibo?q=PEL%E5%BC%80%E5%B1%8F&t=31&band_rank=44&Refer=top)
1. [米勒记得相拥痛哭](https://s.weibo.com//weibo?q=%23%E7%B1%B3%E5%8B%92%E8%AE%B0%E5%BE%97%E7%9B%B8%E6%8B%A5%E7%97%9B%E5%93%AD%23&t=31&band_rank=45&Refer=top)
1. [唐嫣 摩登女郎](https://s.weibo.com//weibo?q=%E5%94%90%E5%AB%A3%20%E6%91%A9%E7%99%BB%E5%A5%B3%E9%83%8E&t=31&band_rank=46&Refer=top)
1. [谭松韵墨绿色抹胸裙](https://s.weibo.com//weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%A2%A8%E7%BB%BF%E8%89%B2%E6%8A%B9%E8%83%B8%E8%A3%99%23&t=31&band_rank=47&Refer=top)
1. [太阳雨原定22集拍到了24集](https://s.weibo.com//weibo?q=%23%E5%A4%AA%E9%98%B3%E9%9B%A8%E5%8E%9F%E5%AE%9A22%E9%9B%86%E6%8B%8D%E5%88%B0%E4%BA%8624%E9%9B%86%23&t=31&band_rank=48&Refer=top)
1. [樊振东分享竞技体育魅力](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%88%86%E4%BA%AB%E7%AB%9E%E6%8A%80%E4%BD%93%E8%82%B2%E9%AD%85%E5%8A%9B%23&t=31&band_rank=49&Refer=top)
1. [太原酒店老板称起火点内无商家营业](https://s.weibo.com//weibo?q=%23%E5%A4%AA%E5%8E%9F%E9%85%92%E5%BA%97%E8%80%81%E6%9D%BF%E7%A7%B0%E8%B5%B7%E7%81%AB%E7%82%B9%E5%86%85%E6%97%A0%E5%95%86%E5%AE%B6%E8%90%A5%E4%B8%9A%23&t=31&band_rank=50&Refer=top)
1. [高原上习近平让出自己的氧气袋](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%8E%9F%E4%B8%8A%E4%B9%A0%E8%BF%91%E5%B9%B3%E8%AE%A9%E5%87%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E6%B0%A7%E6%B0%94%E8%A2%8B%23&Refer=new_time)
1. [黄仁勋承认出轨](https://s.weibo.com//weibo?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%89%BF%E8%AE%A4%E5%87%BA%E8%BD%A8&t=31&band_rank=1&Refer=top)
1. [BLG对战T1](https://s.weibo.com//weibo?q=%23BLG%E5%AF%B9%E6%88%98T1%23&t=31&band_rank=2&Refer=top)
1. [中国消费图景向新向优](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B6%88%E8%B4%B9%E5%9B%BE%E6%99%AF%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23&t=31&band_rank=3&Refer=top)
1. [马斯克突爆孙正义猛料](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%AA%81%E7%88%86%E5%AD%99%E6%AD%A3%E4%B9%89%E7%8C%9B%E6%96%99%23&t=31&band_rank=4&Refer=top)
1. [疑似秦始皇儿子遗骸遭肢解](https://s.weibo.com//weibo?q=%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E9%81%97%E9%AA%B8%E9%81%AD%E8%82%A2%E8%A7%A3&t=31&band_rank=5&Refer=top)
1. [许飞 我作茧自缚](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%20%E6%88%91%E4%BD%9C%E8%8C%A7%E8%87%AA%E7%BC%9A&t=31&band_rank=6&Refer=top)
1. [付鹏称AI漫剧全部亏损](https://s.weibo.com//weibo?q=%E4%BB%98%E9%B9%8F%E7%A7%B0AI%E6%BC%AB%E5%89%A7%E5%85%A8%E9%83%A8%E4%BA%8F%E6%8D%9F&t=31&band_rank=7&Refer=top)
1. [早田希娜法兰克福站冠军](https://s.weibo.com//weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E7%AB%99%E5%86%A0%E5%86%9B%23&t=31&band_rank=8&Refer=top)
1. [BLG一比零T1](https://s.weibo.com//weibo?q=%23BLG%E4%B8%80%E6%AF%94%E9%9B%B6T1%23&t=31&band_rank=9&Refer=top)
1. [白小纯口碑反转](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC%23&t=31&band_rank=10&Refer=top)
1. [金子涵被骗](https://s.weibo.com//weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%A2%AB%E9%AA%97%23&t=31&band_rank=11&Refer=top)
1. [徐艺洋这身材穿个麻袋都好看](https://s.weibo.com//weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E8%BF%99%E8%BA%AB%E6%9D%90%E7%A9%BF%E4%B8%AA%E9%BA%BB%E8%A2%8B%E9%83%BD%E5%A5%BD%E7%9C%8B%23&t=31&band_rank=12&Refer=top)
1. [热巴住酒店15年的真实原因](https://s.weibo.com//weibo?q=%23%E7%83%AD%E5%B7%B4%E4%BD%8F%E9%85%92%E5%BA%9715%E5%B9%B4%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=13&Refer=top)
1. [女子查到男友父亲有案底后崩溃](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E6%9F%A5%E5%88%B0%E7%94%B7%E5%8F%8B%E7%88%B6%E4%BA%B2%E6%9C%89%E6%A1%88%E5%BA%95%E5%90%8E%E5%B4%A9%E6%BA%83&t=31&band_rank=14&Refer=top)
1. [太原火灾送医院救治38人](https://s.weibo.com//weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E9%80%81%E5%8C%BB%E9%99%A2%E6%95%91%E6%B2%BB38%E4%BA%BA%23&t=31&band_rank=15&Refer=top)
1. [蔡少芬一家五口在香港住83平的房子](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%B0%91%E8%8A%AC%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E5%9C%A8%E9%A6%99%E6%B8%AF%E4%BD%8F83%E5%B9%B3%E7%9A%84%E6%88%BF%E5%AD%90%23&t=31&band_rank=16&Refer=top)
1. [F1](https://s.weibo.com//weibo?q=F1&t=31&band_rank=17&Refer=top)
1. [无锡女厕惊现站立式小便厕位](https://s.weibo.com//weibo?q=%23%E6%97%A0%E9%94%A1%E5%A5%B3%E5%8E%95%E6%83%8A%E7%8E%B0%E7%AB%99%E7%AB%8B%E5%BC%8F%E5%B0%8F%E4%BE%BF%E5%8E%95%E4%BD%8D%23&t=31&band_rank=18&Refer=top)
1. [半决赛神Bin天降](https://s.weibo.com//weibo?q=%23%E5%8D%8A%E5%86%B3%E8%B5%9B%E7%A5%9EBin%E5%A4%A9%E9%99%8D%23&t=31&band_rank=19&Refer=top)
1. [马竞1比2巴萨](https://s.weibo.com//weibo?q=%E9%A9%AC%E7%AB%9E1%E6%AF%942%E5%B7%B4%E8%90%A8&t=31&band_rank=20&Refer=top)
1. [现在的艾滋可不只是通过性传播了](https://s.weibo.com//weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E8%89%BE%E6%BB%8B%E5%8F%AF%E4%B8%8D%E5%8F%AA%E6%98%AF%E9%80%9A%E8%BF%87%E6%80%A7%E4%BC%A0%E6%92%AD%E4%BA%86%23&t=31&band_rank=21&Refer=top)
1. [外貌是成本极低收益极高的变量](https://s.weibo.com//weibo?q=%E5%A4%96%E8%B2%8C%E6%98%AF%E6%88%90%E6%9C%AC%E6%9E%81%E4%BD%8E%E6%94%B6%E7%9B%8A%E6%9E%81%E9%AB%98%E7%9A%84%E5%8F%98%E9%87%8F&t=31&band_rank=22&Refer=top)
1. [黄仁勋女儿因家庭原因取消韩国行](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%A5%B3%E5%84%BF%E5%9B%A0%E5%AE%B6%E5%BA%AD%E5%8E%9F%E5%9B%A0%E5%8F%96%E6%B6%88%E9%9F%A9%E5%9B%BD%E8%A1%8C%23&t=31&band_rank=23&Refer=top)
1. [发生日快乐才知老同学已离世](https://s.weibo.com//weibo?q=%E5%8F%91%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%E6%89%8D%E7%9F%A5%E8%80%81%E5%90%8C%E5%AD%A6%E5%B7%B2%E7%A6%BB%E4%B8%96&t=31&band_rank=24&Refer=top)
1. [金子涵前几天露宿街头](https://s.weibo.com//weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%89%8D%E5%87%A0%E5%A4%A9%E9%9C%B2%E5%AE%BF%E8%A1%97%E5%A4%B4%23&t=31&band_rank=25&Refer=top)
1. [金晨澄清搬家不等于退圈](https://s.weibo.com//weibo?q=%E9%87%91%E6%99%A8%E6%BE%84%E6%B8%85%E6%90%AC%E5%AE%B6%E4%B8%8D%E7%AD%89%E4%BA%8E%E9%80%80%E5%9C%88&t=31&band_rank=26&Refer=top)
1. [大连景区对山东人免费](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E8%BF%9E%E6%99%AF%E5%8C%BA%E5%AF%B9%E5%B1%B1%E4%B8%9C%E4%BA%BA%E5%85%8D%E8%B4%B9%23&t=31&band_rank=27&Refer=top)
1. [演员王雷跪地庆祝大连英博夺冠](https://s.weibo.com//weibo?q=%23%E6%BC%94%E5%91%98%E7%8E%8B%E9%9B%B7%E8%B7%AA%E5%9C%B0%E5%BA%86%E7%A5%9D%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%E5%A4%BA%E5%86%A0%23&t=31&band_rank=28&Refer=top)
1. [曼联4比4阿斯顿维拉](https://s.weibo.com//weibo?q=%E6%9B%BC%E8%81%944%E6%AF%944%E9%98%BF%E6%96%AF%E9%A1%BF%E7%BB%B4%E6%8B%89&t=31&band_rank=29&Refer=top)
1. [以色列政坛迎来历史性一刻](https://s.weibo.com//weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%94%BF%E5%9D%9B%E8%BF%8E%E6%9D%A5%E5%8E%86%E5%8F%B2%E6%80%A7%E4%B8%80%E5%88%BB%23&t=31&band_rank=30&Refer=top)
1. [中国台湾省网友惊叹大陆道路好平](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E7%9C%81%E7%BD%91%E5%8F%8B%E6%83%8A%E5%8F%B9%E5%A4%A7%E9%99%86%E9%81%93%E8%B7%AF%E5%A5%BD%E5%B9%B3&t=31&band_rank=31&Refer=top)
1. [徐艺洋跳九万字真的扭到心巴上了](https://s.weibo.com//weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E8%B7%B3%E4%B9%9D%E4%B8%87%E5%AD%97%E7%9C%9F%E7%9A%84%E6%89%AD%E5%88%B0%E5%BF%83%E5%B7%B4%E4%B8%8A%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [Bin哥大龙战神](https://s.weibo.com//weibo?q=%23Bin%E5%93%A5%E5%A4%A7%E9%BE%99%E6%88%98%E7%A5%9E%23&t=31&band_rank=33&Refer=top)
1. [太原起火建筑楼内有酒店培训机构](https://s.weibo.com//weibo?q=%23%E5%A4%AA%E5%8E%9F%E8%B5%B7%E7%81%AB%E5%BB%BA%E7%AD%91%E6%A5%BC%E5%86%85%E6%9C%89%E9%85%92%E5%BA%97%E5%9F%B9%E8%AE%AD%E6%9C%BA%E6%9E%84%23&t=31&band_rank=34&Refer=top)
1. [山姆全球购上架加拿大鹅始祖鸟](https://s.weibo.com//weibo?q=%E5%B1%B1%E5%A7%86%E5%85%A8%E7%90%83%E8%B4%AD%E4%B8%8A%E6%9E%B6%E5%8A%A0%E6%8B%BF%E5%A4%A7%E9%B9%85%E5%A7%8B%E7%A5%96%E9%B8%9F&t=31&band_rank=35&Refer=top)
1. [睡眠好是三十五岁后的财富](https://s.weibo.com//weibo?q=%E7%9D%A1%E7%9C%A0%E5%A5%BD%E6%98%AF%E4%B8%89%E5%8D%81%E4%BA%94%E5%B2%81%E5%90%8E%E7%9A%84%E8%B4%A2%E5%AF%8C&t=31&band_rank=36&Refer=top)
1. [中国人心目中天庭的样子火了](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BF%83%E7%9B%AE%E4%B8%AD%E5%A4%A9%E5%BA%AD%E7%9A%84%E6%A0%B7%E5%AD%90%E7%81%AB%E4%BA%86%23&t=31&band_rank=37&Refer=top)
1. [陈浩民家保姆工资每月6000多](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%B5%A9%E6%B0%91%E5%AE%B6%E4%BF%9D%E5%A7%86%E5%B7%A5%E8%B5%84%E6%AF%8F%E6%9C%886000%E5%A4%9A%23&t=31&band_rank=38&Refer=top)
1. [上车前陌生人下车后想娶她](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E8%BD%A6%E5%89%8D%E9%99%8C%E7%94%9F%E4%BA%BA%E4%B8%8B%E8%BD%A6%E5%90%8E%E6%83%B3%E5%A8%B6%E5%A5%B9%23&t=31&band_rank=39&Refer=top)
1. [曼联 降级区](https://s.weibo.com//weibo?q=%E6%9B%BC%E8%81%94%20%E9%99%8D%E7%BA%A7%E5%8C%BA&t=31&band_rank=40&Refer=top)
1. [iPhone每年换一次和五年换一次](https://s.weibo.com//weibo?q=iPhone%E6%AF%8F%E5%B9%B4%E6%8D%A2%E4%B8%80%E6%AC%A1%E5%92%8C%E4%BA%94%E5%B9%B4%E6%8D%A2%E4%B8%80%E6%AC%A1&t=31&band_rank=41&Refer=top)
1. [所以后会友期能火啊](https://s.weibo.com//weibo?q=%23%E6%89%80%E4%BB%A5%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%83%BD%E7%81%AB%E5%95%8A%23&t=31&band_rank=42&Refer=top)
1. [T1的bp](https://s.weibo.com//weibo?q=T1%E7%9A%84bp&t=31&band_rank=43&Refer=top)
1. [28岁男子爬山4小时横纹肌溶解](https://s.weibo.com//weibo?q=%2328%E5%B2%81%E7%94%B7%E5%AD%90%E7%88%AC%E5%B1%B14%E5%B0%8F%E6%97%B6%E6%A8%AA%E7%BA%B9%E8%82%8C%E6%BA%B6%E8%A7%A3%23&t=31&band_rank=44&Refer=top)
1. [代高政要和闫桉参加后会友期](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%AB%98%E6%94%BF%E8%A6%81%E5%92%8C%E9%97%AB%E6%A1%89%E5%8F%82%E5%8A%A0%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23&t=31&band_rank=45&Refer=top)
1. [人休息够了包容度会高很多](https://s.weibo.com//weibo?q=%E4%BA%BA%E4%BC%91%E6%81%AF%E5%A4%9F%E4%BA%86%E5%8C%85%E5%AE%B9%E5%BA%A6%E4%BC%9A%E9%AB%98%E5%BE%88%E5%A4%9A&t=31&band_rank=46&Refer=top)
1. [小糯米才12岁](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B3%AF%E7%B1%B3%E6%89%8D12%E5%B2%81%23&t=31&band_rank=47&Refer=top)
1. [早田希娜回应在比赛中记笔记](https://s.weibo.com//weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E5%9B%9E%E5%BA%94%E5%9C%A8%E6%AF%94%E8%B5%9B%E4%B8%AD%E8%AE%B0%E7%AC%94%E8%AE%B0%23&t=31&band_rank=48&Refer=top)
1. [疑似秦始皇儿子头骨面容复原图](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E5%A4%B4%E9%AA%A8%E9%9D%A2%E5%AE%B9%E5%A4%8D%E5%8E%9F%E5%9B%BE%23&t=31&band_rank=49&Refer=top)
1. [代高政还有七部待播剧](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%AB%98%E6%94%BF%E8%BF%98%E6%9C%89%E4%B8%83%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%23&t=31&band_rank=50&Refer=top)
1. [疑似秦始皇儿子遗骸遭肢解](https://s.weibo.com//weibo?q=%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E9%81%97%E9%AA%B8%E9%81%AD%E8%82%A2%E8%A7%A3&t=31&band_rank=1&Refer=top)
1. [马斯克突爆孙正义猛料](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%AA%81%E7%88%86%E5%AD%99%E6%AD%A3%E4%B9%89%E7%8C%9B%E6%96%99%23&t=31&band_rank=2&Refer=top)
1. [付鹏称AI漫剧全部亏损](https://s.weibo.com//weibo?q=%E4%BB%98%E9%B9%8F%E7%A7%B0AI%E6%BC%AB%E5%89%A7%E5%85%A8%E9%83%A8%E4%BA%8F%E6%8D%9F&t=31&band_rank=4&Refer=top)
1. [许飞 我作茧自缚](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%20%E6%88%91%E4%BD%9C%E8%8C%A7%E8%87%AA%E7%BC%9A&t=31&band_rank=5&Refer=top)
1. [金子涵被骗](https://s.weibo.com//weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%A2%AB%E9%AA%97%23&t=31&band_rank=6&Refer=top)
1. [蔡少芬一家五口在香港住83平的房子](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%B0%91%E8%8A%AC%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E5%9C%A8%E9%A6%99%E6%B8%AF%E4%BD%8F83%E5%B9%B3%E7%9A%84%E6%88%BF%E5%AD%90%23&t=31&band_rank=7&Refer=top)
1. [发生日快乐才知老同学已离世](https://s.weibo.com//weibo?q=%E5%8F%91%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%E6%89%8D%E7%9F%A5%E8%80%81%E5%90%8C%E5%AD%A6%E5%B7%B2%E7%A6%BB%E4%B8%96&t=31&band_rank=8&Refer=top)
1. [太原火灾送医院救治38人](https://s.weibo.com//weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E9%80%81%E5%8C%BB%E9%99%A2%E6%95%91%E6%B2%BB38%E4%BA%BA%23&t=31&band_rank=9&Refer=top)
1. [小糯米才12岁](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B3%AF%E7%B1%B3%E6%89%8D12%E5%B2%81%23&t=31&band_rank=10&Refer=top)
1. [徐艺洋这身材穿个麻袋都好看](https://s.weibo.com//weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E8%BF%99%E8%BA%AB%E6%9D%90%E7%A9%BF%E4%B8%AA%E9%BA%BB%E8%A2%8B%E9%83%BD%E5%A5%BD%E7%9C%8B%23&t=31&band_rank=11&Refer=top)
1. [陈浩民家保姆工资每月6000多](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%B5%A9%E6%B0%91%E5%AE%B6%E4%BF%9D%E5%A7%86%E5%B7%A5%E8%B5%84%E6%AF%8F%E6%9C%886000%E5%A4%9A%23&t=31&band_rank=12&Refer=top)
1. [女子查到男友父亲有案底后崩溃](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E6%9F%A5%E5%88%B0%E7%94%B7%E5%8F%8B%E7%88%B6%E4%BA%B2%E6%9C%89%E6%A1%88%E5%BA%95%E5%90%8E%E5%B4%A9%E6%BA%83&t=31&band_rank=13&Refer=top)
1. [文吉儿微信名](https://s.weibo.com//weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E5%BE%AE%E4%BF%A1%E5%90%8D%23&t=31&band_rank=14&Refer=top)
1. [无锡女厕惊现站立式小便厕位](https://s.weibo.com//weibo?q=%23%E6%97%A0%E9%94%A1%E5%A5%B3%E5%8E%95%E6%83%8A%E7%8E%B0%E7%AB%99%E7%AB%8B%E5%BC%8F%E5%B0%8F%E4%BE%BF%E5%8E%95%E4%BD%8D%23&t=31&band_rank=15&Refer=top)
1. [白小纯叫王子璇姐姐完整过程](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%8F%AB%E7%8E%8B%E5%AD%90%E7%92%87%E5%A7%90%E5%A7%90%E5%AE%8C%E6%95%B4%E8%BF%87%E7%A8%8B%23&t=31&band_rank=16&Refer=top)
1. [金子涵被骗到陌生城市偷走护照](https://s.weibo.com//weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%A2%AB%E9%AA%97%E5%88%B0%E9%99%8C%E7%94%9F%E5%9F%8E%E5%B8%82%E5%81%B7%E8%B5%B0%E6%8A%A4%E7%85%A7%23&t=31&band_rank=17&Refer=top)
1. [代高政要和闫桉参加后会友期](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%AB%98%E6%94%BF%E8%A6%81%E5%92%8C%E9%97%AB%E6%A1%89%E5%8F%82%E5%8A%A0%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23&t=31&band_rank=18&Refer=top)
1. [二手交易网站惊现成都夺冠冰箱贴](https://s.weibo.com//weibo?q=%23%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E7%BD%91%E7%AB%99%E6%83%8A%E7%8E%B0%E6%88%90%E9%83%BD%E5%A4%BA%E5%86%A0%E5%86%B0%E7%AE%B1%E8%B4%B4%23&t=31&band_rank=19&Refer=top)
1. [大连主教练被泼啤酒滑倒光速变脸](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E8%BF%9E%E4%B8%BB%E6%95%99%E7%BB%83%E8%A2%AB%E6%B3%BC%E5%95%A4%E9%85%92%E6%BB%91%E5%80%92%E5%85%89%E9%80%9F%E5%8F%98%E8%84%B8%23&t=31&band_rank=20&Refer=top)
1. [许飞 厉娜](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%20%E5%8E%89%E5%A8%9C&t=31&band_rank=21&Refer=top)
1. [后会友期黄焖鸡门口没监控](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%BB%84%E7%84%96%E9%B8%A1%E9%97%A8%E5%8F%A3%E6%B2%A1%E7%9B%91%E6%8E%A7&t=31&band_rank=23&Refer=top)
1. [中国人心目中天庭的样子火了](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BF%83%E7%9B%AE%E4%B8%AD%E5%A4%A9%E5%BA%AD%E7%9A%84%E6%A0%B7%E5%AD%90%E7%81%AB%E4%BA%86%23&t=31&band_rank=24&Refer=top)
1. [芒果综艺播放量有点吓人](https://s.weibo.com//weibo?q=%23%E8%8A%92%E6%9E%9C%E7%BB%BC%E8%89%BA%E6%92%AD%E6%94%BE%E9%87%8F%E6%9C%89%E7%82%B9%E5%90%93%E4%BA%BA%23&t=31&band_rank=25&Refer=top)
1. [阿尔卡拉斯首夺巴黎赛冠军](https://s.weibo.com//weibo?q=%23%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AF%E9%A6%96%E5%A4%BA%E5%B7%B4%E9%BB%8E%E8%B5%9B%E5%86%A0%E5%86%9B%23&t=31&band_rank=26&Refer=top)
1. [田曦薇代高政合照](https://s.weibo.com//weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%BB%A3%E9%AB%98%E6%94%BF%E5%90%88%E7%85%A7%23&t=31&band_rank=27&Refer=top)
1. [白小纯对青稚早已松口](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E9%9D%92%E7%A8%9A%E6%97%A9%E5%B7%B2%E6%9D%BE%E5%8F%A3%23&t=31&band_rank=28&Refer=top)
1. [最尊重钱的平台诞生了](https://s.weibo.com//weibo?q=%23%E6%9C%80%E5%B0%8A%E9%87%8D%E9%92%B1%E7%9A%84%E5%B9%B3%E5%8F%B0%E8%AF%9E%E7%94%9F%E4%BA%86%23&t=31&band_rank=29&Refer=top)
1. [成都蓉城连续错失冠军点](https://s.weibo.com//weibo?q=%E6%88%90%E9%83%BD%E8%93%89%E5%9F%8E%E8%BF%9E%E7%BB%AD%E9%94%99%E5%A4%B1%E5%86%A0%E5%86%9B%E7%82%B9&t=31&band_rank=30&Refer=top)
1. [颜安退出密逃团综录制](https://s.weibo.com//weibo?q=%23%E9%A2%9C%E5%AE%89%E9%80%80%E5%87%BA%E5%AF%86%E9%80%83%E5%9B%A2%E7%BB%BC%E5%BD%95%E5%88%B6%23&t=31&band_rank=31&Refer=top)
1. [曝迪丽热巴没买房常年住酒店](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B2%A1%E4%B9%B0%E6%88%BF%E5%B8%B8%E5%B9%B4%E4%BD%8F%E9%85%92%E5%BA%97%23&t=31&band_rank=32&Refer=top)
1. [九尾问Gemini刷什么下播](https://s.weibo.com//weibo?q=%23%E4%B9%9D%E5%B0%BE%E9%97%AEGemini%E5%88%B7%E4%BB%80%E4%B9%88%E4%B8%8B%E6%92%AD%23&t=31&band_rank=33&Refer=top)
1. [面包蟹三个孔里拉出白色条状物](https://s.weibo.com//weibo?q=%E9%9D%A2%E5%8C%85%E8%9F%B9%E4%B8%89%E4%B8%AA%E5%AD%94%E9%87%8C%E6%8B%89%E5%87%BA%E7%99%BD%E8%89%B2%E6%9D%A1%E7%8A%B6%E7%89%A9&t=31&band_rank=34&Refer=top)
1. [上车前陌生人下车后想娶她](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E8%BD%A6%E5%89%8D%E9%99%8C%E7%94%9F%E4%BA%BA%E4%B8%8B%E8%BD%A6%E5%90%8E%E6%83%B3%E5%A8%B6%E5%A5%B9%23&t=31&band_rank=35&Refer=top)
1. [芒果找神人这方面是有点手段的](https://s.weibo.com//weibo?q=%E8%8A%92%E6%9E%9C%E6%89%BE%E7%A5%9E%E4%BA%BA%E8%BF%99%E6%96%B9%E9%9D%A2%E6%98%AF%E6%9C%89%E7%82%B9%E6%89%8B%E6%AE%B5%E7%9A%84&t=31&band_rank=36&Refer=top)
1. [马斯克称软银涡轮机订单违约](https://s.weibo.com//weibo?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E8%BD%AF%E9%93%B6%E6%B6%A1%E8%BD%AE%E6%9C%BA%E8%AE%A2%E5%8D%95%E8%BF%9D%E7%BA%A6&t=31&band_rank=37&Refer=top)
1. [大连景区对山东人免费](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E8%BF%9E%E6%99%AF%E5%8C%BA%E5%AF%B9%E5%B1%B1%E4%B8%9C%E4%BA%BA%E5%85%8D%E8%B4%B9%23&t=31&band_rank=38&Refer=top)
1. [曝天霸粉丝群曾蛐蛐青稚](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%A4%A9%E9%9C%B8%E7%B2%89%E4%B8%9D%E7%BE%A4%E6%9B%BE%E8%9B%90%E8%9B%90%E9%9D%92%E7%A8%9A%23&t=31&band_rank=39&Refer=top)
1. [CSL中超联赛回应大连英博夺冠](https://s.weibo.com//weibo?q=%23CSL%E4%B8%AD%E8%B6%85%E8%81%94%E8%B5%9B%E5%9B%9E%E5%BA%94%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%E5%A4%BA%E5%86%A0%23&t=31&band_rank=40&Refer=top)
1. [疑似文吉儿社媒账号注销](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E6%96%87%E5%90%89%E5%84%BF%E7%A4%BE%E5%AA%92%E8%B4%A6%E5%8F%B7%E6%B3%A8%E9%94%80%23&t=31&band_rank=41&Refer=top)
1. [张萌知道马天宇喜欢小孩也是拼了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E7%9F%A5%E9%81%93%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%96%9C%E6%AC%A2%E5%B0%8F%E5%AD%A9%E4%B9%9F%E6%98%AF%E6%8B%BC%E4%BA%86%23&t=31&band_rank=42&Refer=top)
1. [女子打轻薄针后脸垮得像老人](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E8%BD%BB%E8%96%84%E9%92%88%E5%90%8E%E8%84%B8%E5%9E%AE%E5%BE%97%E5%83%8F%E8%80%81%E4%BA%BA%23&t=31&band_rank=43&Refer=top)
1. [日本瑞士之间交易中国凭什么可喊停](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E7%91%9E%E5%A3%AB%E4%B9%8B%E9%97%B4%E4%BA%A4%E6%98%93%E4%B8%AD%E5%9B%BD%E5%87%AD%E4%BB%80%E4%B9%88%E5%8F%AF%E5%96%8A%E5%81%9C%23&t=31&band_rank=44&Refer=top)
1. [成都球员痛哭](https://s.weibo.com//weibo?q=%23%E6%88%90%E9%83%BD%E7%90%83%E5%91%98%E7%97%9B%E5%93%AD%23&t=31&band_rank=45&Refer=top)
1. [疑似秦始皇儿子头骨面容复原图](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E5%A4%B4%E9%AA%A8%E9%9D%A2%E5%AE%B9%E5%A4%8D%E5%8E%9F%E5%9B%BE%23&t=31&band_rank=46&Refer=top)
1. [以色列政坛迎来历史性一刻](https://s.weibo.com//weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%94%BF%E5%9D%9B%E8%BF%8E%E6%9D%A5%E5%8E%86%E5%8F%B2%E6%80%A7%E4%B8%80%E5%88%BB%23&t=31&band_rank=47&Refer=top)
1. [漠河舞厅 王安宇李宛妲](https://s.weibo.com//weibo?q=%E6%BC%A0%E6%B2%B3%E8%88%9E%E5%8E%85%20%E7%8E%8B%E5%AE%89%E5%AE%87%E6%9D%8E%E5%AE%9B%E5%A6%B2&t=31&band_rank=48&Refer=top)
1. [九尾说Gemini墨迹](https://s.weibo.com//weibo?q=%E4%B9%9D%E5%B0%BE%E8%AF%B4Gemini%E5%A2%A8%E8%BF%B9&t=31&band_rank=49&Refer=top)
1. [山姆加拿大鹅不支持无理由退货](https://s.weibo.com//weibo?q=%E5%B1%B1%E5%A7%86%E5%8A%A0%E6%8B%BF%E5%A4%A7%E9%B9%85%E4%B8%8D%E6%94%AF%E6%8C%81%E6%97%A0%E7%90%86%E7%94%B1%E9%80%80%E8%B4%A7&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
