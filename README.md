# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-30 14:42:36

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
<!-- 最后更新时间 Sun Aug 30 2026 08:39:13 GMT+0800 (China Standard Time) -->

1. [吉隆口岸大楼只剩钢筋骨架](https://so.toutiao.com/search?keyword=吉隆口岸大楼只剩钢筋骨架)
1. [旅客携带81支人血粪便样本入境被查](https://so.toutiao.com/search?keyword=旅客携带81支人血粪便样本入境被查)
1. [一批高新装备投入西藏吉隆受灾核心区](https://so.toutiao.com/search?keyword=一批高新装备投入西藏吉隆受灾核心区)
1. [西藏泥石流致16人遇难546人失联](https://so.toutiao.com/search?keyword=西藏泥石流致16人遇难546人失联)
1. [吉隆泥石流为何救援难度极大](https://so.toutiao.com/search?keyword=吉隆泥石流为何救援难度极大)
1. [常冰玉战胜赵心童首夺排名赛冠军](https://so.toutiao.com/search?keyword=常冰玉战胜赵心童首夺排名赛冠军)
1. [白岩松谈企业违规解约107名应届生](https://so.toutiao.com/search?keyword=白岩松谈企业违规解约107名应届生)
1. [新能源汽车为什么难以实现修车自由](https://so.toutiao.com/search?keyword=新能源汽车为什么难以实现修车自由)
1. [刚入警一年的女孩在吉隆口岸失联](https://so.toutiao.com/search?keyword=刚入警一年的女孩在吉隆口岸失联)
1. [母亲扛50斤行李送女儿上学](https://so.toutiao.com/search?keyword=母亲扛50斤行李送女儿上学)
1. [尼泊尔泥石流冰川源头曝光？假的](https://so.toutiao.com/search?keyword=尼泊尔泥石流冰川源头曝光？假的)
1. [孙千腰以下全是腿](https://so.toutiao.com/search?keyword=孙千腰以下全是腿)
1. [吉隆救援队驾冲锋舟穿S弯急流探路](https://so.toutiao.com/search?keyword=吉隆救援队驾冲锋舟穿S弯急流探路)
1. [和田由纪子赛后飙泪 疑似炮轰主帅](https://so.toutiao.com/search?keyword=和田由纪子赛后飙泪%20疑似炮轰主帅)
1. [比亚迪在日本销量为何上不去](https://so.toutiao.com/search?keyword=比亚迪在日本销量为何上不去)
1. [尼泊尔一重灾区3天仅挖通道路50米](https://so.toutiao.com/search?keyword=尼泊尔一重灾区3天仅挖通道路50米)
1. [大学新生开学三件套预算直冲2万](https://so.toutiao.com/search?keyword=大学新生开学三件套预算直冲2万)
1. [DQ冰激凌机器人员工比人慢4分钟](https://so.toutiao.com/search?keyword=DQ冰激凌机器人员工比人慢4分钟)
1. [邓紫棋与王嘉尔同框](https://so.toutiao.com/search?keyword=邓紫棋与王嘉尔同框)
1. [辛贝特曾将以总理长子从美国救回](https://so.toutiao.com/search?keyword=辛贝特曾将以总理长子从美国救回)
1. [44岁韩国演员李勇株离世](https://so.toutiao.com/search?keyword=44岁韩国演员李勇株离世)
1. [老板带员工胖东来扫货狂买40辆购物车](https://so.toutiao.com/search?keyword=老板带员工胖东来扫货狂买40辆购物车)
1. [云南磨憨镇水库漫坝省委书记指挥调度](https://so.toutiao.com/search?keyword=云南磨憨镇水库漫坝省委书记指挥调度)
1. [肾脏不好的人身体会有哪些变化](https://so.toutiao.com/search?keyword=肾脏不好的人身体会有哪些变化)
1. [车企调整燃油车研发路线已成趋势](https://so.toutiao.com/search?keyword=车企调整燃油车研发路线已成趋势)
1. [当一个中专生成为脱口秀冠军](https://so.toutiao.com/search?keyword=当一个中专生成为脱口秀冠军)
1. [23点后才睡错过的不只是美容觉](https://so.toutiao.com/search?keyword=23点后才睡错过的不只是美容觉)
1. [荣耀Magic9系列疑似入网](https://so.toutiao.com/search?keyword=荣耀Magic9系列疑似入网)
1. [上海一面包店货架全是照片没有面包](https://so.toutiao.com/search?keyword=上海一面包店货架全是照片没有面包)
1. [奔驰车停地库两年没开车内长毛发霉](https://so.toutiao.com/search?keyword=奔驰车停地库两年没开车内长毛发霉)
1. [尹航站在队友视角评价樊振东](https://so.toutiao.com/search?keyword=尹航站在队友视角评价樊振东)
1. [世预赛塞尔维亚大胜冰岛 约基奇划水](https://so.toutiao.com/search?keyword=世预赛塞尔维亚大胜冰岛%20约基奇划水)
1. [父亲实地考察物价给女儿涨生活费](https://so.toutiao.com/search?keyword=父亲实地考察物价给女儿涨生活费)
1. [蛋价为何一涨再涨](https://so.toutiao.com/search?keyword=蛋价为何一涨再涨)
1. [张帅：没想到今年还能站上大满贯赛场](https://so.toutiao.com/search?keyword=张帅：没想到今年还能站上大满贯赛场)
1. [常冰玉夺冠激动落泪](https://so.toutiao.com/search?keyword=常冰玉夺冠激动落泪)
1. [拖欠上千万工程款镇政府账户被冻结](https://so.toutiao.com/search?keyword=拖欠上千万工程款镇政府账户被冻结)
1. [媒体：日本加速准备多种“偷袭”手段](https://so.toutiao.com/search?keyword=媒体：日本加速准备多种“偷袭”手段)
1. [出生7天女婴查出牛奶蛋白过敏](https://so.toutiao.com/search?keyword=出生7天女婴查出牛奶蛋白过敏)
1. [海南大学失联女研究生确认离世](https://so.toutiao.com/search?keyword=海南大学失联女研究生确认离世)
1. [华为苹果折叠屏9月对决](https://so.toutiao.com/search?keyword=华为苹果折叠屏9月对决)
1. [妈妈送儿子从湖南到浙江上大学](https://so.toutiao.com/search?keyword=妈妈送儿子从湖南到浙江上大学)
1. [牛弹琴：加拿大开始卡美国脖子了](https://so.toutiao.com/search?keyword=牛弹琴：加拿大开始卡美国脖子了)
1. [茅台涨不动了 白酒信仰要碎了吗](https://so.toutiao.com/search?keyword=茅台涨不动了%20白酒信仰要碎了吗)
1. [基辅一仓库遭俄军袭击致37人死亡](https://so.toutiao.com/search?keyword=基辅一仓库遭俄军袭击致37人死亡)
1. [热刺0比2不敌纽卡 球迷纷纷提前退场](https://so.toutiao.com/search?keyword=热刺0比2不敌纽卡%20球迷纷纷提前退场)
1. [姚琛教曹骏怎么掌握镜头感](https://so.toutiao.com/search?keyword=姚琛教曹骏怎么掌握镜头感)
1. [婚宴17道主菜上错10道酒店被判赔偿](https://so.toutiao.com/search?keyword=婚宴17道主菜上错10道酒店被判赔偿)
1. [考文垂英超开局两连败0进球](https://so.toutiao.com/search?keyword=考文垂英超开局两连败0进球)
1. [警方通报两男子为寻刺激高架竞速](https://so.toutiao.com/search?keyword=警方通报两男子为寻刺激高架竞速)
1. [美国无预兆公开新型导弹有何意图](https://so.toutiao.com/search?keyword=美国无预兆公开新型导弹有何意图)
1. [女孩考入国防科大20多名家人自驾送学](https://so.toutiao.com/search?keyword=女孩考入国防科大20多名家人自驾送学)
1. [离异爸爸急寻被前妻抢走的女儿](https://so.toutiao.com/search?keyword=离异爸爸急寻被前妻抢走的女儿)
1. [不与安东尼奥续约？中国足协辟谣](https://so.toutiao.com/search?keyword=不与安东尼奥续约？中国足协辟谣)
1. [王菲现身阿那亚](https://so.toutiao.com/search?keyword=王菲现身阿那亚)
1. [井柏然说看自己吻戏像被扒光了](https://so.toutiao.com/search?keyword=井柏然说看自己吻戏像被扒光了)
1. [美国为何大范围推行“国有化”政策](https://so.toutiao.com/search?keyword=美国为何大范围推行“国有化”政策)
1. [朱忠明任上海市政府党组书记](https://so.toutiao.com/search?keyword=朱忠明任上海市政府党组书记)
1. [女子接娃途中捡到价值90余万金块](https://so.toutiao.com/search?keyword=女子接娃途中捡到价值90余万金块)
1. [小伙从200斤减到120斤考上国防科大](https://so.toutiao.com/search?keyword=小伙从200斤减到120斤考上国防科大)
1. [中德关系回不去了吗](https://so.toutiao.com/search?keyword=中德关系回不去了吗)
1. [白酒真的卖不动了吗](https://so.toutiao.com/search?keyword=白酒真的卖不动了吗)
1. [樊振东无缘德国杯8强](https://so.toutiao.com/search?keyword=樊振东无缘德国杯8强)
1. [赖岳谦：两岸统一是现在进行时](https://so.toutiao.com/search?keyword=赖岳谦：两岸统一是现在进行时)
1. [宇树研发投入真不如养猪的吗](https://so.toutiao.com/search?keyword=宇树研发投入真不如养猪的吗)
1. [钢筋石笼首次运抵吉隆抢险现场](https://so.toutiao.com/search?keyword=钢筋石笼首次运抵吉隆抢险现场)
1. [日本女排爆冷无缘亚锦赛决赛](https://so.toutiao.com/search?keyword=日本女排爆冷无缘亚锦赛决赛)
1. [男子半年收集750张瑞幸取餐码贴纸](https://so.toutiao.com/search?keyword=男子半年收集750张瑞幸取餐码贴纸)
1. [美加贸易战开打 特朗普想要什么](https://so.toutiao.com/search?keyword=美加贸易战开打%20特朗普想要什么)
1. [中国女排晋级亚锦赛决赛](https://so.toutiao.com/search?keyword=中国女排晋级亚锦赛决赛)
1. [王毅同尼泊尔外长希西尔通电话](https://so.toutiao.com/search?keyword=王毅同尼泊尔外长希西尔通电话)
1. [打通北极航道 俄为何找上中国造船](https://so.toutiao.com/search?keyword=打通北极航道%20俄为何找上中国造船)
1. [特朗普对加拿大下狠手影响几何](https://so.toutiao.com/search?keyword=特朗普对加拿大下狠手影响几何)
1. [中国把地月太空网线拉好了](https://so.toutiao.com/search?keyword=中国把地月太空网线拉好了)
1. [长鑫存储起诉五角大楼](https://so.toutiao.com/search?keyword=长鑫存储起诉五角大楼)
1. [尼日尔国家电视台恢复播出](https://so.toutiao.com/search?keyword=尼日尔国家电视台恢复播出)
1. [孔绍逊已任甘肃省委副书记](https://so.toutiao.com/search?keyword=孔绍逊已任甘肃省委副书记)
1. [余承东上手华为全新三折叠](https://so.toutiao.com/search?keyword=余承东上手华为全新三折叠)
1. [宋亚东KO击败乌马尔](https://so.toutiao.com/search?keyword=宋亚东KO击败乌马尔)
1. [中方紧急调派专家赴尼泊尔实施救援](https://so.toutiao.com/search?keyword=中方紧急调派专家赴尼泊尔实施救援)
1. [邵永灵：美国掠夺委内瑞拉石油](https://so.toutiao.com/search?keyword=邵永灵：美国掠夺委内瑞拉石油)
1. [普京出席活动用中文说“你好”](https://so.toutiao.com/search?keyword=普京出席活动用中文说“你好”)
1. [乘客称航班上遭邻座扇耳光 航司回应](https://so.toutiao.com/search?keyword=乘客称航班上遭邻座扇耳光%20航司回应)
1. [男子猛咬蟹钳致后牙裂到牙髓](https://so.toutiao.com/search?keyword=男子猛咬蟹钳致后牙裂到牙髓)
1. [黄景瑜现身UFC上海站](https://so.toutiao.com/search?keyword=黄景瑜现身UFC上海站)
1. [云南磨憨发生洪涝灾害](https://so.toutiao.com/search?keyword=云南磨憨发生洪涝灾害)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Aug 30 2026 14:37:32 GMT+0800 (China Standard Time) -->

1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [吉隆泥石流已致16人遇难546人失联](https://www.zhihu.com/search?q=%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B416%E4%BA%BA%E9%81%87%E9%9A%BE546%E4%BA%BA%E5%A4%B1%E8%81%94)
1. [个人房贷最长不超过 40 年](https://www.zhihu.com/search?q=%E4%B8%AA%E4%BA%BA%E6%88%BF%E8%B4%B7%E6%9C%80%E9%95%BF%E4%B8%8D%E8%B6%85%E8%BF%87%2040%20%E5%B9%B4)
1. [西藏泥石流原因系尼泊尔境内冰岩崩](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%8E%9F%E5%9B%A0%E7%B3%BB%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%A2%83%E5%86%85%E5%86%B0%E5%B2%A9%E5%B4%A9)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [国家动物博物馆两小孩致标本受损](https://www.zhihu.com/search?q=%E5%9B%BD%E5%AE%B6%E5%8A%A8%E7%89%A9%E5%8D%9A%E7%89%A9%E9%A6%86%E4%B8%A4%E5%B0%8F%E5%AD%A9%E8%87%B4%E6%A0%87%E6%9C%AC%E5%8F%97%E6%8D%9F)
1. [Zhihu CLI 功能上新](https://www.zhihu.com/search?q=Zhihu%20CLI%20%E5%8A%9F%E8%83%BD%E4%B8%8A%E6%96%B0)
1. [新版《国防动员法》10 月 1 日实施](https://www.zhihu.com/search?q=%E6%96%B0%E7%89%88%E3%80%8A%E5%9B%BD%E9%98%B2%E5%8A%A8%E5%91%98%E6%B3%95%E3%80%8B10%20%E6%9C%88%201%20%E6%97%A5%E5%AE%9E%E6%96%BD)
1. [王楚钦孙颖莎等5人放弃亚锦赛](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AD%895%E4%BA%BA%E6%94%BE%E5%BC%83%E4%BA%9A%E9%94%A6%E8%B5%9B)
1. [刘翔向网友求助职场选择](https://www.zhihu.com/search?q=%E5%88%98%E7%BF%94%E5%90%91%E7%BD%91%E5%8F%8B%E6%B1%82%E5%8A%A9%E8%81%8C%E5%9C%BA%E9%80%89%E6%8B%A9)
1. [星宇股份裁应届生疑被告到欧盟](https://www.zhihu.com/search?q=%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%A3%81%E5%BA%94%E5%B1%8A%E7%94%9F%E7%96%91%E8%A2%AB%E5%91%8A%E5%88%B0%E6%AC%A7%E7%9B%9F)
1. [尼泊尔北部暴发山洪](https://www.zhihu.com/search?q=%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%8C%97%E9%83%A8%E6%9A%B4%E5%8F%91%E5%B1%B1%E6%B4%AA)
1. [樊振东无缘德国杯8强](https://www.zhihu.com/search?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%97%A0%E7%BC%98%E5%BE%B7%E5%9B%BD%E6%9D%AF8%E5%BC%BA)
1. [景甜回应被起诉](https://www.zhihu.com/search?q=%E6%99%AF%E7%94%9C%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%B5%B7%E8%AF%89)
1. [比尔盖茨万字长文示警AI时代](https://www.zhihu.com/search?q=%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E4%B8%87%E5%AD%97%E9%95%BF%E6%96%87%E7%A4%BA%E8%AD%A6AI%E6%97%B6%E4%BB%A3)
1. [四川一县将低分教师合影称耻辱](https://www.zhihu.com/search?q=%E5%9B%9B%E5%B7%9D%E4%B8%80%E5%8E%BF%E5%B0%86%E4%BD%8E%E5%88%86%E6%95%99%E5%B8%88%E5%90%88%E5%BD%B1%E7%A7%B0%E8%80%BB%E8%BE%B1)
1. [星宇股份劝退应届生补偿方案](https://www.zhihu.com/search?q=%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F%E8%A1%A5%E5%81%BF%E6%96%B9%E6%A1%88)
1. [甲醛白菜事件 3 名嫌疑人被刑拘](https://www.zhihu.com/search?q=%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E4%BA%8B%E4%BB%B6%203%20%E5%90%8D%E5%AB%8C%E7%96%91%E4%BA%BA%E8%A2%AB%E5%88%91%E6%8B%98)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Aug 30 2026 14:42:36 GMT+0800 (China Standard Time) -->

1. [西藏泥石流已致16死546失联，泥石流灾害系因尼泊尔一条冰川断裂发生冰岩崩，还有哪些信息值得关注？](https://www.zhihu.com/question/2077314972804014300)
1. [一家三口候补车票，8 岁小孩被分到不同车厢致无奈退票，怎样能避免这种情况？购票机制还有哪些优化空间？](https://www.zhihu.com/question/2076659559964341000)
1. [全国中小学新教材将全部替换完成，对学生和教师带来哪些具体改变？](https://www.zhihu.com/question/2077107224984249300)
1. [国内教材什么时候开始背上“防自学”名声的？](https://www.zhihu.com/question/2035637768714466000)
1. [如何看待孩子因为我没有给零花钱，为了一口零食放低姿态向同学乞讨，甚至喊同学做爸爸，孩子没骨气该不该打？](https://www.zhihu.com/question/2076658574630113500)
1. [周星驰为什么坚持用张美娥做丑配？](https://www.zhihu.com/question/2060701714739679700)
1. [客观评价《凡人修仙传》第 189 集，是否封神？](https://www.zhihu.com/question/2077028669915128300)
1. [如何评价腾讯刚刚发布的Hy4 preview？](https://www.zhihu.com/question/2076682200167217000)
1. [阿尔瓦雷斯传出身患抑郁，一周绝食，多次缺席训练，坚定想要转会巴塞罗那，你如何评价这一系列操作？](https://www.zhihu.com/question/2077053456372834600)
1. [医疗保障法 2027 年 1 月 1 日起施行，将给我们的生活带来哪些改变？](https://www.zhihu.com/question/2076697141242873600)
1. [特朗普称美国获得超650亿桶委石油储量的「多数控制权」，美国纳税人无需为此承担任何费用，如何看待此事？](https://www.zhihu.com/question/2076965570528941000)
1. [樊振东 11-13 惜败户上隼辅，其所在球队 1-3 不敌对手，无缘德国杯 8 强，如何评价他的表现？](https://www.zhihu.com/question/2077132758401246500)
1. [百万粉丝网红「松哥打虎」涉黑被抓，以其为首的涉黑恶犯罪组织被打掉，哪些信息值得关注？](https://www.zhihu.com/question/2076848936157974800)
1. [涉教师耻辱合影县是国家重点帮扶县，教师每天实时监测辍学人数，这项工作反映了当地教育面临哪些深层挑战？](https://www.zhihu.com/question/2076709478544757800)
1. [网传 PL-17 导弹 J-20 弹仓无法容纳，是真的吗？若属实，这是设计局限还是战略考量？](https://www.zhihu.com/question/2075414467538699500)
1. [如何看待工信部通报一致性检测典型案例，比亚迪一款插混车型因油耗过高上榜？](https://www.zhihu.com/question/2076734017597194800)
1. [如何看待辽宁中考小三门（生物学、地理、历史）不纳入总分，会带来哪些影响？](https://www.zhihu.com/question/2076761888042571300)
1. [当兵被班长往死里整，家里不愿帮你走动，你是硬留还是回家？](https://www.zhihu.com/question/2075236179797096200)
1. [如何评价黄霄雲二巡演唱会《宇宙无敌号2.0》杭州首站？](https://www.zhihu.com/question/2077146435313784000)
1. [2026年世界杯葡萄牙队为什么始终让c罗担任首发中锋?教练看不出他状态水平下滑，应该换人吗?](https://www.zhihu.com/question/2076127868057396500)
1. [如果普通座位空着属于浪费资源，那么一等座和商务座空着算不算资源浪费？](https://www.zhihu.com/question/2074323265791775200)
1. [如何评价三角洲主播29小时《街霸6》上大师，被锤开挂？](https://www.zhihu.com/question/2075549371173815800)
1. [福特（Ford）汽车的优势是什么？](https://www.zhihu.com/question/21110843)
1. [不奇怪吗？工业革命两百年来，只有十分之一国家完成工业化，其余永远完不成工业化，为什么？](https://www.zhihu.com/question/2049060571459368700)
1. [《爱情公寓》羽墨的角色为什么被放弃了？而悠悠却被保留下来？](https://www.zhihu.com/question/49771510)
1. [国家卫健委宣布白血病已非「不治之症」，多数患者可治愈，这一突破是如何实现的？背后有哪些医学原理？](https://www.zhihu.com/question/2074455186999984000)
1. [郑州北龙湖疑现多条巨型鱼类，网友推测为「水老虎」 ，这可能是什么鱼？出现在城市内湖会有哪些潜在影响？](https://www.zhihu.com/question/2075494563582408000)
1. [六岁男童旅游被烟花炸伤右眼几近失明，半年找不到放烟花的人，妈妈称「连告谁都不清楚」，到底谁该对此负责？](https://www.zhihu.com/question/2076749706848383700)
1. [乒协公示亚锦赛选拔办法，王楚钦、孙颖莎等 5 人放弃参赛，背后有哪些原因？国乒亚锦赛前景如何？](https://www.zhihu.com/question/2076988218390442200)
1. [你会不会提前教孩子下一学期的课？](https://www.zhihu.com/question/2045786725046395000)
1. [吉隆口岸地貌发生明显改变，已看不出任何建筑物轮廓，救援队进行拉网式排查搜救，目前救援面临哪些难点？](https://www.zhihu.com/question/2076960285475043000)
1. [涉张家口康保县「甲醛保鲜」事件，3 名嫌疑人被刑事拘留，有哪些信息值得关注？如何从法律角度解读？](https://www.zhihu.com/question/2077058533497862100)
1. [《爱情公寓》官方六年首次换头像，主演频繁合体，引发「回归季」猜测，可能性有多大？](https://www.zhihu.com/question/2076069365967844900)
1. [奔驰、宝马发布短片讽刺速成车，对此你怎么看？](https://www.zhihu.com/question/2076228837369700600)
1. [尼泊尔山洪遇难人数升至 669 人、2426 人失联，目前当地情况如何？](https://www.zhihu.com/question/2076729617759433000)
1. [男子面试提交方案，被拒后收到公司一千元「车马费与茶水费」，男子称「感受到尊重」，如何评价该做法？](https://www.zhihu.com/question/2076742550052922000)
1. [爸爸为了防止女儿早恋，带她到处旅游并故意把她晒黑，这种做法真的能起到防止早恋的作用吗？](https://www.zhihu.com/question/2074767872866383600)
1. [什么道理懂了后可以一生受用？](https://www.zhihu.com/question/456002135)
1. [2026美网资格赛决胜轮，郑钦文决胜盘送蛋普里丹金娜，打进美网正赛，这场比赛打得怎么样？](https://www.zhihu.com/question/2076821036126024700)
1. [和同事一起运动，会给职场关系带来哪些变化？](https://www.zhihu.com/question/2068304155001747000)
1. [新加坡人几乎都是在外面吃饭，他们有没有预制菜？](https://www.zhihu.com/question/2076313906579096000)
1. [用了5年的合法固定车位，被邻楼老太强行霸占，放完杂物直接砌水泥墩，物业管不了我该怎么办？](https://www.zhihu.com/question/2038383492602532900)
1. [总觉得累、睡不醒、没精神，是懒还是身体出了问题？](https://www.zhihu.com/question/2061760436316419300)
1. [为什么我国这么多高层住宅，真的缺土地吗？](https://www.zhihu.com/question/2027782324171841800)
1. [怎么看OpenAI因Cursor被SpaceX收购，将停止向Cursor提供 AI 模型？](https://www.zhihu.com/question/2076984800188093200)
1. [被称为「全球央行年会」的杰克逊霍尔经济政策研讨会将拉开帷幕，沃什将进行开幕演讲，有哪些信息值得关注？](https://www.zhihu.com/question/2076618428551357000)
1. [LPL2026 第三赛段季后赛 TES 2:3 不敌 LGD 跌入败者组，如何评价这场比赛？](https://www.zhihu.com/question/2077063958318600700)
1. [UFC 上海站宋亚东第二回合 KO 战胜乌马尔，如何评价这场比赛？](https://www.zhihu.com/question/2077159437056173600)
1. [GLM 5.3 正式开源，有什么值得关注的亮点？](https://www.zhihu.com/question/2076806281394926000)
1. [看到有人说，孩子上幼儿园不哭的，都是因为平时就没有安全感，是这样吗？](https://www.zhihu.com/question/2075675286998345500)
1. [为什么会有人觉得奥黛塔应该对旅行者有敌意？](https://www.zhihu.com/question/2072008467922135000)
1. [电影《空枪》中有哪些不易察觉的细节？](https://www.zhihu.com/question/2073510167874726000)
1. [在没有现代意义上的银行业的古代，乱世中的小兵战利品和军饷怎么保全？在稍具银行业的近古和近代乱世中呢？](https://www.zhihu.com/question/1913567499158557000)
1. [如何评价井柏然、孙千主演的电视剧《早春晴朗》？](https://www.zhihu.com/question/2075953902944347600)
1. [你会一个人出去旅游吗?](https://www.zhihu.com/question/1920450791052908500)
1. [刘备作为刘邦的后裔，为何早年极度落魄？](https://www.zhihu.com/question/2043738976394142000)
1. [《复仇者联盟 4》内地重映定档，9 月 25 日同步北美，为年底复联5 上映预热，你会去电影院看吗？](https://www.zhihu.com/question/2075886099897869800)
1. [新高一女生，想做数学物理的量子场论方向的科研，学完了量子场论，我还需要读哪些数学书？](https://www.zhihu.com/question/2074868399788902400)

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
<!-- 最后更新时间 Sun Aug 30 2026 08:27:17 GMT+0800 (China Standard Time) -->

1. [习近平主席推动上海精神焕发时代光彩](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%B8%BB%E5%B8%AD%E6%8E%A8%E5%8A%A8%E4%B8%8A%E6%B5%B7%E7%B2%BE%E7%A5%9E%E7%84%95%E5%8F%91%E6%97%B6%E4%BB%A3%E5%85%89%E5%BD%A9%23&Refer=new_time)
1. [吉隆口岸小邬警官确认平安](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%B0%8F%E9%82%AC%E8%AD%A6%E5%AE%98%E7%A1%AE%E8%AE%A4%E5%B9%B3%E5%AE%89%23&t=31&band_rank=1&Refer=top)
1. [吉隆口岸沿途挂满衣物碎片](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%B2%BF%E9%80%94%E6%8C%82%E6%BB%A1%E8%A1%A3%E7%89%A9%E7%A2%8E%E7%89%87%23&t=31&band_rank=2&Refer=top)
1. [AI赋能新电商发展](https://s.weibo.com//weibo?q=%23AI%E8%B5%8B%E8%83%BD%E6%96%B0%E7%94%B5%E5%95%86%E5%8F%91%E5%B1%95%23&t=31&band_rank=3&Refer=top)
1. [长大后先对什么祛魅了](https://s.weibo.com//weibo?q=%E9%95%BF%E5%A4%A7%E5%90%8E%E5%85%88%E5%AF%B9%E4%BB%80%E4%B9%88%E7%A5%9B%E9%AD%85%E4%BA%86&t=31&band_rank=4&Refer=top)
1. [小说男女主照进现实了](https://s.weibo.com//weibo?q=%E5%B0%8F%E8%AF%B4%E7%94%B7%E5%A5%B3%E4%B8%BB%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E%E4%BA%86&t=31&band_rank=5&Refer=top)
1. [户上隼辅回应3比2樊振东](https://s.weibo.com//weibo?q=%23%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%E5%9B%9E%E5%BA%943%E6%AF%942%E6%A8%8A%E6%8C%AF%E4%B8%9C%23&t=31&band_rank=6&Refer=top)
1. [樊振东2比3户上隼辅](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E6%AF%943%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23&t=31&band_rank=7&Refer=top)
1. [黄景瑜疯狂拥抱宋亚东](https://s.weibo.com//weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E7%96%AF%E7%8B%82%E6%8B%A5%E6%8A%B1%E5%AE%8B%E4%BA%9A%E4%B8%9C%23&t=31&band_rank=8&Refer=top)
1. [被井柏然吻技演技迷住了](https://s.weibo.com//weibo?q=%E8%A2%AB%E4%BA%95%E6%9F%8F%E7%84%B6%E5%90%BB%E6%8A%80%E6%BC%94%E6%8A%80%E8%BF%B7%E4%BD%8F%E4%BA%86&t=31&band_rank=9&Refer=top)
1. [尼泊尔山洪已致675死2498失联](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%87%B4675%E6%AD%BB2498%E5%A4%B1%E8%81%94%23&t=31&band_rank=10&Refer=top)
1. [金价暴跌之前有人直接清仓](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E4%B9%8B%E5%89%8D%E6%9C%89%E4%BA%BA%E7%9B%B4%E6%8E%A5%E6%B8%85%E4%BB%93%23&t=31&band_rank=11&Refer=top)
1. [王一博征服西欧最高峰](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%81%E6%9C%8D%E8%A5%BF%E6%AC%A7%E6%9C%80%E9%AB%98%E5%B3%B0%23&t=31&band_rank=12&Refer=top)
1. [医生回应女孩游泳后全身长20多个疣](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%B8%B8%E6%B3%B3%E5%90%8E%E5%85%A8%E8%BA%AB%E9%95%BF20%E5%A4%9A%E4%B8%AA%E7%96%A3%23&t=31&band_rank=13&Refer=top)
1. [尼泊尔山洪 民众误判](https://s.weibo.com//weibo?q=%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%20%E6%B0%91%E4%BC%97%E8%AF%AF%E5%88%A4&t=31&band_rank=14&Refer=top)
1. [吉隆口岸救援挖掘机履带没入急流](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%95%91%E6%8F%B4%E6%8C%96%E6%8E%98%E6%9C%BA%E5%B1%A5%E5%B8%A6%E6%B2%A1%E5%85%A5%E6%80%A5%E6%B5%81%23&t=31&band_rank=15&Refer=top)
1. [官方通报博主称拔钉被以扬尘叫停](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8D%9A%E4%B8%BB%E7%A7%B0%E6%8B%94%E9%92%89%E8%A2%AB%E4%BB%A5%E6%89%AC%E5%B0%98%E5%8F%AB%E5%81%9C%23&t=31&band_rank=16&Refer=top)
1. [剧里看到朴允浩整容成柳俊烈](https://s.weibo.com//weibo?q=%E5%89%A7%E9%87%8C%E7%9C%8B%E5%88%B0%E6%9C%B4%E5%85%81%E6%B5%A9%E6%95%B4%E5%AE%B9%E6%88%90%E6%9F%B3%E4%BF%8A%E7%83%88&t=31&band_rank=17&Refer=top)
1. [14家央国企将开放超60亿条高价值数据](https://s.weibo.com//weibo?q=14%E5%AE%B6%E5%A4%AE%E5%9B%BD%E4%BC%81%E5%B0%86%E5%BC%80%E6%94%BE%E8%B6%8560%E4%BA%BF%E6%9D%A1%E9%AB%98%E4%BB%B7%E5%80%BC%E6%95%B0%E6%8D%AE&t=31&band_rank=18&Refer=top)
1. [王菲躲镜头](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%8F%B2%E8%BA%B2%E9%95%9C%E5%A4%B4%23&t=31&band_rank=19&Refer=top)
1. [比包贝尔回应先来的是他新剧](https://s.weibo.com//weibo?q=%23%E6%AF%94%E5%8C%85%E8%B4%9D%E5%B0%94%E5%9B%9E%E5%BA%94%E5%85%88%E6%9D%A5%E7%9A%84%E6%98%AF%E4%BB%96%E6%96%B0%E5%89%A7%23&t=31&band_rank=20&Refer=top)
1. [这5种常见蔬菜是抗炎高手](https://s.weibo.com//weibo?q=%23%E8%BF%995%E7%A7%8D%E5%B8%B8%E8%A7%81%E8%94%AC%E8%8F%9C%E6%98%AF%E6%8A%97%E7%82%8E%E9%AB%98%E6%89%8B%23&t=31&band_rank=21&Refer=top)
1. [南极水银释放量激增550%](https://s.weibo.com//weibo?q=%23%E5%8D%97%E6%9E%81%E6%B0%B4%E9%93%B6%E9%87%8A%E6%94%BE%E9%87%8F%E6%BF%80%E5%A2%9E550%25%23&t=31&band_rank=22&Refer=top)
1. [苏新皓深夜发文](https://s.weibo.com//weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%B7%B1%E5%A4%9C%E5%8F%91%E6%96%87%23&t=31&band_rank=23&Refer=top)
1. [女乘客航班上遭邻座暴力殴打](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E4%B9%98%E5%AE%A2%E8%88%AA%E7%8F%AD%E4%B8%8A%E9%81%AD%E9%82%BB%E5%BA%A7%E6%9A%B4%E5%8A%9B%E6%AE%B4%E6%89%93%23&t=31&band_rank=24&Refer=top)
1. [蔡依林回应7点关机9点半睡觉](https://s.weibo.com//weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%9B%9E%E5%BA%947%E7%82%B9%E5%85%B3%E6%9C%BA9%E7%82%B9%E5%8D%8A%E7%9D%A1%E8%A7%89%23&t=31&band_rank=25&Refer=top)
1. [睡前喝一杯就能睡得好的真相](https://s.weibo.com//weibo?q=%23%E7%9D%A1%E5%89%8D%E5%96%9D%E4%B8%80%E6%9D%AF%E5%B0%B1%E8%83%BD%E7%9D%A1%E5%BE%97%E5%A5%BD%E7%9A%84%E7%9C%9F%E7%9B%B8%23&t=31&band_rank=26&Refer=top)
1. [常冰玉击败赵心童夺冠](https://s.weibo.com//weibo?q=%23%E5%B8%B8%E5%86%B0%E7%8E%89%E5%87%BB%E8%B4%A5%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%A4%BA%E5%86%A0%23&t=31&band_rank=27&Refer=top)
1. [现实版爷爷和7个葫芦娃火了](https://s.weibo.com//weibo?q=%23%E7%8E%B0%E5%AE%9E%E7%89%88%E7%88%B7%E7%88%B7%E5%92%8C7%E4%B8%AA%E8%91%AB%E8%8A%A6%E5%A8%83%E7%81%AB%E4%BA%86%23&t=31&band_rank=28&Refer=top)
1. [白敬亭孙千待播剧](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E5%AD%99%E5%8D%83%E5%BE%85%E6%92%AD%E5%89%A7%23&t=31&band_rank=29&Refer=top)
1. [尼泊尔山洪已致675人遇难](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%87%B4675%E4%BA%BA%E9%81%87%E9%9A%BE%23&t=31&band_rank=30&Refer=top)
1. [KPL](https://s.weibo.com//weibo?q=KPL&t=31&band_rank=31&Refer=top)
1. [丽江胁迫游客消费导游被行拘](https://s.weibo.com//weibo?q=%23%E4%B8%BD%E6%B1%9F%E8%83%81%E8%BF%AB%E6%B8%B8%E5%AE%A2%E6%B6%88%E8%B4%B9%E5%AF%BC%E6%B8%B8%E8%A2%AB%E8%A1%8C%E6%8B%98%23&t=31&band_rank=32&Refer=top)
1. [面馆偶遇王菲李嫣](https://s.weibo.com//weibo?q=%23%E9%9D%A2%E9%A6%86%E5%81%B6%E9%81%87%E7%8E%8B%E8%8F%B2%E6%9D%8E%E5%AB%A3%23&t=31&band_rank=33&Refer=top)
1. [尼泊尔幸存者称根本来不及逃生](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B9%B8%E5%AD%98%E8%80%85%E7%A7%B0%E6%A0%B9%E6%9C%AC%E6%9D%A5%E4%B8%8D%E5%8F%8A%E9%80%83%E7%94%9F%23&t=31&band_rank=34&Refer=top)
1. [全球第99高峰一半冰层坠入山谷](https://s.weibo.com//weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC99%E9%AB%98%E5%B3%B0%E4%B8%80%E5%8D%8A%E5%86%B0%E5%B1%82%E5%9D%A0%E5%85%A5%E5%B1%B1%E8%B0%B7%23&t=31&band_rank=35&Refer=top)
1. [吉隆口岸入警1年樊乐乐失联](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%85%A5%E8%AD%A61%E5%B9%B4%E6%A8%8A%E4%B9%90%E4%B9%90%E5%A4%B1%E8%81%94%23&t=31&band_rank=36&Refer=top)
1. [是我妈在发帖吗](https://s.weibo.com//weibo?q=%E6%98%AF%E6%88%91%E5%A6%88%E5%9C%A8%E5%8F%91%E5%B8%96%E5%90%97&t=31&band_rank=37&Refer=top)
1. [管泽元 BLG](https://s.weibo.com//weibo?q=%E7%AE%A1%E6%B3%BD%E5%85%83%20BLG&t=31&band_rank=38&Refer=top)
1. [女孩咳了一个月肺里竟取出1颗牙](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%92%B3%E4%BA%86%E4%B8%80%E4%B8%AA%E6%9C%88%E8%82%BA%E9%87%8C%E7%AB%9F%E5%8F%96%E5%87%BA1%E9%A2%97%E7%89%99%23&t=31&band_rank=39&Refer=top)
1. [赵心童恭喜常冰玉](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E6%81%AD%E5%96%9C%E5%B8%B8%E5%86%B0%E7%8E%89%23&t=31&band_rank=40&Refer=top)
1. [上海通报2名男子高架竞速被抓](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%80%9A%E6%8A%A52%E5%90%8D%E7%94%B7%E5%AD%90%E9%AB%98%E6%9E%B6%E7%AB%9E%E9%80%9F%E8%A2%AB%E6%8A%93%23&t=31&band_rank=41&Refer=top)
1. [萨摩耶坐飞机超重都不耶了](https://s.weibo.com//weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%9D%90%E9%A3%9E%E6%9C%BA%E8%B6%85%E9%87%8D%E9%83%BD%E4%B8%8D%E8%80%B6%E4%BA%86%23&t=31&band_rank=42&Refer=top)
1. [肯德基最离谱的联名来了](https://s.weibo.com//weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E6%9C%80%E7%A6%BB%E8%B0%B1%E7%9A%84%E8%81%94%E5%90%8D%E6%9D%A5%E4%BA%86%23&t=31&band_rank=43&Refer=top)
1. [李嫣窦靖童宋妍霏再次同框](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%AB%A3%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%AE%8B%E5%A6%8D%E9%9C%8F%E5%86%8D%E6%AC%A1%E5%90%8C%E6%A1%86%23&t=31&band_rank=44&Refer=top)
1. [此人的舞蹈功底恐怕在我之上](https://s.weibo.com//weibo?q=%E6%AD%A4%E4%BA%BA%E7%9A%84%E8%88%9E%E8%B9%88%E5%8A%9F%E5%BA%95%E6%81%90%E6%80%95%E5%9C%A8%E6%88%91%E4%B9%8B%E4%B8%8A&t=31&band_rank=45&Refer=top)
1. [田曦薇顶级出装一套比一套美](https://s.weibo.com//weibo?q=%E7%94%B0%E6%9B%A6%E8%96%87%E9%A1%B6%E7%BA%A7%E5%87%BA%E8%A3%85%E4%B8%80%E5%A5%97%E6%AF%94%E4%B8%80%E5%A5%97%E7%BE%8E&t=31&band_rank=46&Refer=top)
1. [张翰朱梓骁好久不见再坐一桌](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%BF%B0%E6%9C%B1%E6%A2%93%E9%AA%81%E5%A5%BD%E4%B9%85%E4%B8%8D%E8%A7%81%E5%86%8D%E5%9D%90%E4%B8%80%E6%A1%8C%23&t=31&band_rank=47&Refer=top)
1. [伊朗发了一个嘲讽美国的神视频](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E4%BA%86%E4%B8%80%E4%B8%AA%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%E7%9A%84%E7%A5%9E%E8%A7%86%E9%A2%91%23&t=31&band_rank=48&Refer=top)
1. [吉隆口岸两张照片只剩一颗树](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E4%B8%A4%E5%BC%A0%E7%85%A7%E7%89%87%E5%8F%AA%E5%89%A9%E4%B8%80%E9%A2%97%E6%A0%91%23&t=31&band_rank=49&Refer=top)
1. [汪苏泷嘉宾周兴哲](https://s.weibo.com//weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%98%89%E5%AE%BE%E5%91%A8%E5%85%B4%E5%93%B2%23&t=31&band_rank=50&Refer=top)
1. [长大后先对什么祛魅了](https://s.weibo.com//weibo?q=%E9%95%BF%E5%A4%A7%E5%90%8E%E5%85%88%E5%AF%B9%E4%BB%80%E4%B9%88%E7%A5%9B%E9%AD%85%E4%BA%86&t=31&band_rank=1&Refer=top)
1. [小说男女主照进现实了](https://s.weibo.com//weibo?q=%E5%B0%8F%E8%AF%B4%E7%94%B7%E5%A5%B3%E4%B8%BB%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E%E4%BA%86&t=31&band_rank=2&Refer=top)
1. [吉隆口岸小邬警官确认平安](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%B0%8F%E9%82%AC%E8%AD%A6%E5%AE%98%E7%A1%AE%E8%AE%A4%E5%B9%B3%E5%AE%89%23&t=31&band_rank=4&Refer=top)
1. [樊振东2比3户上隼辅](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E6%AF%943%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23&t=31&band_rank=5&Refer=top)
1. [剧里看到朴允浩整容成柳俊烈](https://s.weibo.com//weibo?q=%E5%89%A7%E9%87%8C%E7%9C%8B%E5%88%B0%E6%9C%B4%E5%85%81%E6%B5%A9%E6%95%B4%E5%AE%B9%E6%88%90%E6%9F%B3%E4%BF%8A%E7%83%88&t=31&band_rank=6&Refer=top)
1. [萨摩耶坐飞机超重都不耶了](https://s.weibo.com//weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%9D%90%E9%A3%9E%E6%9C%BA%E8%B6%85%E9%87%8D%E9%83%BD%E4%B8%8D%E8%80%B6%E4%BA%86%23&t=31&band_rank=7&Refer=top)
1. [官方通报博主称拔钉被以扬尘叫停](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8D%9A%E4%B8%BB%E7%A7%B0%E6%8B%94%E9%92%89%E8%A2%AB%E4%BB%A5%E6%89%AC%E5%B0%98%E5%8F%AB%E5%81%9C%23&t=31&band_rank=9&Refer=top)
1. [冲锋衣选颜色邪修大法](https://s.weibo.com//weibo?q=%23%E5%86%B2%E9%94%8B%E8%A1%A3%E9%80%89%E9%A2%9C%E8%89%B2%E9%82%AA%E4%BF%AE%E5%A4%A7%E6%B3%95%23&t=31&band_rank=10&Refer=top)
1. [吉隆口岸沿途挂满衣物碎片](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%B2%BF%E9%80%94%E6%8C%82%E6%BB%A1%E8%A1%A3%E7%89%A9%E7%A2%8E%E7%89%87%23&t=31&band_rank=11&Refer=top)
1. [女乘客航班上遭邻座暴力殴打](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E4%B9%98%E5%AE%A2%E8%88%AA%E7%8F%AD%E4%B8%8A%E9%81%AD%E9%82%BB%E5%BA%A7%E6%9A%B4%E5%8A%9B%E6%AE%B4%E6%89%93%23&t=31&band_rank=12&Refer=top)
1. [金价1小时连降4次](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B71%E5%B0%8F%E6%97%B6%E8%BF%9E%E9%99%8D4%E6%AC%A1%23&t=31&band_rank=13&Refer=top)
1. [尼泊尔幸存者称根本来不及逃生](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B9%B8%E5%AD%98%E8%80%85%E7%A7%B0%E6%A0%B9%E6%9C%AC%E6%9D%A5%E4%B8%8D%E5%8F%8A%E9%80%83%E7%94%9F%23&t=31&band_rank=14&Refer=top)
1. [早春晴朗](https://s.weibo.com//weibo?q=%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97&t=31&band_rank=15&Refer=top)
1. [比包贝尔回应先来的是他新剧](https://s.weibo.com//weibo?q=%23%E6%AF%94%E5%8C%85%E8%B4%9D%E5%B0%94%E5%9B%9E%E5%BA%94%E5%85%88%E6%9D%A5%E7%9A%84%E6%98%AF%E4%BB%96%E6%96%B0%E5%89%A7%23&t=31&band_rank=16&Refer=top)
1. [户上隼辅首胜樊振东官网都崩了](https://s.weibo.com//weibo?q=%23%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%E9%A6%96%E8%83%9C%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%AE%98%E7%BD%91%E9%83%BD%E5%B4%A9%E4%BA%86%23&t=31&band_rank=17&Refer=top)
1. [吉隆口岸入警1年樊乐乐失联](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%85%A5%E8%AD%A61%E5%B9%B4%E6%A8%8A%E4%B9%90%E4%B9%90%E5%A4%B1%E8%81%94%23&t=31&band_rank=18&Refer=top)
1. [宋亚东KO乌马尔](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E4%B8%9CKO%E4%B9%8C%E9%A9%AC%E5%B0%94%23&t=31&band_rank=19&Refer=top)
1. [被井柏然吻技演技迷住了](https://s.weibo.com//weibo?q=%E8%A2%AB%E4%BA%95%E6%9F%8F%E7%84%B6%E5%90%BB%E6%8A%80%E6%BC%94%E6%8A%80%E8%BF%B7%E4%BD%8F%E4%BA%86&t=31&band_rank=20&Refer=top)
1. [肯德基最离谱的联名来了](https://s.weibo.com//weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E6%9C%80%E7%A6%BB%E8%B0%B1%E7%9A%84%E8%81%94%E5%90%8D%E6%9D%A5%E4%BA%86%23&t=31&band_rank=21&Refer=top)
1. [这5种常见蔬菜是抗炎高手](https://s.weibo.com//weibo?q=%23%E8%BF%995%E7%A7%8D%E5%B8%B8%E8%A7%81%E8%94%AC%E8%8F%9C%E6%98%AF%E6%8A%97%E7%82%8E%E9%AB%98%E6%89%8B%23&t=31&band_rank=22&Refer=top)
1. [女子分享自己怀孕后的唯一收入方式](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%86%E4%BA%AB%E8%87%AA%E5%B7%B1%E6%80%80%E5%AD%95%E5%90%8E%E7%9A%84%E5%94%AF%E4%B8%80%E6%94%B6%E5%85%A5%E6%96%B9%E5%BC%8F%23&t=31&band_rank=23&Refer=top)
1. [房子薄成这样原来真的有人住在里面](https://s.weibo.com//weibo?q=%23%E6%88%BF%E5%AD%90%E8%96%84%E6%88%90%E8%BF%99%E6%A0%B7%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E4%BD%8F%E5%9C%A8%E9%87%8C%E9%9D%A2%23&t=31&band_rank=24&Refer=top)
1. [樊振东无缘德国杯8强](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%97%A0%E7%BC%98%E5%BE%B7%E5%9B%BD%E6%9D%AF8%E5%BC%BA%23&t=31&band_rank=25&Refer=top)
1. [常冰玉击败赵心童夺冠](https://s.weibo.com//weibo?q=%23%E5%B8%B8%E5%86%B0%E7%8E%89%E5%87%BB%E8%B4%A5%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%A4%BA%E5%86%A0%23&t=31&band_rank=26&Refer=top)
1. [奥克森豪森vs杜塞尔多夫](https://s.weibo.com//weibo?q=%E5%A5%A5%E5%85%8B%E6%A3%AE%E8%B1%AA%E6%A3%AEvs%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB&t=31&band_rank=27&Refer=top)
1. [原来真的有人住在里面](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E4%BD%8F%E5%9C%A8%E9%87%8C%E9%9D%A2%23&t=31&band_rank=28&Refer=top)
1. [伊朗发了一个嘲讽美国的神视频](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E4%BA%86%E4%B8%80%E4%B8%AA%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%E7%9A%84%E7%A5%9E%E8%A7%86%E9%A2%91%23&t=31&band_rank=29&Refer=top)
1. [催粮发脾气的猫咪走红](https://s.weibo.com//weibo?q=%E5%82%AC%E7%B2%AE%E5%8F%91%E8%84%BE%E6%B0%94%E7%9A%84%E7%8C%AB%E5%92%AA%E8%B5%B0%E7%BA%A2&t=31&band_rank=30&Refer=top)
1. [原来专业助理是这样帮老板包场的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E4%B8%93%E4%B8%9A%E5%8A%A9%E7%90%86%E6%98%AF%E8%BF%99%E6%A0%B7%E5%B8%AE%E8%80%81%E6%9D%BF%E5%8C%85%E5%9C%BA%E7%9A%84&t=31&band_rank=32&Refer=top)
1. [是我妈在发帖吗](https://s.weibo.com//weibo?q=%E6%98%AF%E6%88%91%E5%A6%88%E5%9C%A8%E5%8F%91%E5%B8%96%E5%90%97&t=31&band_rank=33&Refer=top)
1. [田曦薇顶级出装一套比一套美](https://s.weibo.com//weibo?q=%E7%94%B0%E6%9B%A6%E8%96%87%E9%A1%B6%E7%BA%A7%E5%87%BA%E8%A3%85%E4%B8%80%E5%A5%97%E6%AF%94%E4%B8%80%E5%A5%97%E7%BE%8E&t=31&band_rank=34&Refer=top)
1. [西藏泥石流救援](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%95%91%E6%8F%B4%23&t=31&band_rank=35&Refer=top)
1. [此人的舞蹈功底恐怕在我之上](https://s.weibo.com//weibo?q=%E6%AD%A4%E4%BA%BA%E7%9A%84%E8%88%9E%E8%B9%88%E5%8A%9F%E5%BA%95%E6%81%90%E6%80%95%E5%9C%A8%E6%88%91%E4%B9%8B%E4%B8%8A&t=31&band_rank=36&Refer=top)
1. [男子婚后第三天自愿给房子加妻子名字](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%A9%9A%E5%90%8E%E7%AC%AC%E4%B8%89%E5%A4%A9%E8%87%AA%E6%84%BF%E7%BB%99%E6%88%BF%E5%AD%90%E5%8A%A0%E5%A6%BB%E5%AD%90%E5%90%8D%E5%AD%97%23&t=31&band_rank=37&Refer=top)
1. [常冰玉10比7赵心童](https://s.weibo.com//weibo?q=%23%E5%B8%B8%E5%86%B0%E7%8E%8910%E6%AF%947%E8%B5%B5%E5%BF%83%E7%AB%A5%23&t=31&band_rank=38&Refer=top)
1. [中国半导体两个好消息](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%8A%E5%AF%BC%E4%BD%93%E4%B8%A4%E4%B8%AA%E5%A5%BD%E6%B6%88%E6%81%AF%23&t=31&band_rank=39&Refer=top)
1. [小米18Fold](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B318Fold&t=31&band_rank=40&Refer=top)
1. [90后守国门警花文燕仍无音信](https://s.weibo.com//weibo?q=%2390%E5%90%8E%E5%AE%88%E5%9B%BD%E9%97%A8%E8%AD%A6%E8%8A%B1%E6%96%87%E7%87%95%E4%BB%8D%E6%97%A0%E9%9F%B3%E4%BF%A1%23&t=31&band_rank=41&Refer=top)
1. [金价为什么又跌了](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%88%E8%B7%8C%E4%BA%86%23&t=31&band_rank=42&Refer=top)
1. [王菲躲镜头](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%8F%B2%E8%BA%B2%E9%95%9C%E5%A4%B4%23&t=31&band_rank=43&Refer=top)
1. [央视曝光保温杯造假套路](https://s.weibo.com//weibo?q=%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E4%BF%9D%E6%B8%A9%E6%9D%AF%E9%80%A0%E5%81%87%E5%A5%97%E8%B7%AF&t=31&band_rank=44&Refer=top)
1. [中国女排3比0伊朗女排](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%940%E4%BC%8A%E6%9C%97%E5%A5%B3%E6%8E%92&t=31&band_rank=45&Refer=top)
1. [家长轻信偏方7岁女童全身皮肤糜烂](https://s.weibo.com//weibo?q=%23%E5%AE%B6%E9%95%BF%E8%BD%BB%E4%BF%A1%E5%81%8F%E6%96%B97%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%85%A8%E8%BA%AB%E7%9A%AE%E8%82%A4%E7%B3%9C%E7%83%82%23&t=31&band_rank=46&Refer=top)
1. [上海通报2名男子高架竞速被抓](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%80%9A%E6%8A%A52%E5%90%8D%E7%94%B7%E5%AD%90%E9%AB%98%E6%9E%B6%E7%AB%9E%E9%80%9F%E8%A2%AB%E6%8A%93%23&t=31&band_rank=47&Refer=top)
1. [TOP在演唱会上哭了](https://s.weibo.com//weibo?q=%23TOP%E5%9C%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%93%AD%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [凡人修仙传189集改编争议](https://s.weibo.com//weibo?q=%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0189%E9%9B%86%E6%94%B9%E7%BC%96%E4%BA%89%E8%AE%AE&t=31&band_rank=49&Refer=top)
1. [首批救援队在吉隆山头彻夜坚守](https://s.weibo.com//weibo?q=%23%E9%A6%96%E6%89%B9%E6%95%91%E6%8F%B4%E9%98%9F%E5%9C%A8%E5%90%89%E9%9A%86%E5%B1%B1%E5%A4%B4%E5%BD%BB%E5%A4%9C%E5%9D%9A%E5%AE%88%23&t=31&band_rank=50&Refer=top)
1. [吉隆口岸小邬警官确认平安](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%B0%8F%E9%82%AC%E8%AD%A6%E5%AE%98%E7%A1%AE%E8%AE%A4%E5%B9%B3%E5%AE%89%23&t=31&band_rank=2&Refer=top)
1. [吉隆口岸沿途挂满衣物碎片](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%B2%BF%E9%80%94%E6%8C%82%E6%BB%A1%E8%A1%A3%E7%89%A9%E7%A2%8E%E7%89%87%23&t=31&band_rank=4&Refer=top)
1. [早春晴朗](https://s.weibo.com//weibo?q=%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97&t=31&band_rank=6&Refer=top)
1. [房子薄成这样原来真的有人住在里面](https://s.weibo.com//weibo?q=%23%E6%88%BF%E5%AD%90%E8%96%84%E6%88%90%E8%BF%99%E6%A0%B7%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E4%BD%8F%E5%9C%A8%E9%87%8C%E9%9D%A2%23&t=31&band_rank=9&Refer=top)
1. [金价1小时连降4次](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B71%E5%B0%8F%E6%97%B6%E8%BF%9E%E9%99%8D4%E6%AC%A1%23&t=31&band_rank=11&Refer=top)
1. [剧里看到朴允浩整容成柳俊烈](https://s.weibo.com//weibo?q=%E5%89%A7%E9%87%8C%E7%9C%8B%E5%88%B0%E6%9C%B4%E5%85%81%E6%B5%A9%E6%95%B4%E5%AE%B9%E6%88%90%E6%9F%B3%E4%BF%8A%E7%83%88&t=31&band_rank=12&Refer=top)
1. [吉隆口岸入警1年樊乐乐失联](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%85%A5%E8%AD%A61%E5%B9%B4%E6%A8%8A%E4%B9%90%E4%B9%90%E5%A4%B1%E8%81%94%23&t=31&band_rank=13&Refer=top)
1. [被井柏然吻技演技迷住了](https://s.weibo.com//weibo?q=%E8%A2%AB%E4%BA%95%E6%9F%8F%E7%84%B6%E5%90%BB%E6%8A%80%E6%BC%94%E6%8A%80%E8%BF%B7%E4%BD%8F%E4%BA%86&t=31&band_rank=14&Refer=top)
1. [户上隼辅首胜樊振东官网都崩了](https://s.weibo.com//weibo?q=%23%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%E9%A6%96%E8%83%9C%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%AE%98%E7%BD%91%E9%83%BD%E5%B4%A9%E4%BA%86%23&t=31&band_rank=15&Refer=top)
1. [原来真的有人住在里面](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E4%BD%8F%E5%9C%A8%E9%87%8C%E9%9D%A2%23&t=31&band_rank=16&Refer=top)
1. [尼泊尔幸存者称根本来不及逃生](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B9%B8%E5%AD%98%E8%80%85%E7%A7%B0%E6%A0%B9%E6%9C%AC%E6%9D%A5%E4%B8%8D%E5%8F%8A%E9%80%83%E7%94%9F%23&t=31&band_rank=17&Refer=top)
1. [常冰玉击败赵心童夺冠](https://s.weibo.com//weibo?q=%23%E5%B8%B8%E5%86%B0%E7%8E%89%E5%87%BB%E8%B4%A5%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%A4%BA%E5%86%A0%23&t=31&band_rank=18&Refer=top)
1. [萨摩耶坐飞机超重都不耶了](https://s.weibo.com//weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%9D%90%E9%A3%9E%E6%9C%BA%E8%B6%85%E9%87%8D%E9%83%BD%E4%B8%8D%E8%80%B6%E4%BA%86%23&t=31&band_rank=19&Refer=top)
1. [伊朗发了一个嘲讽美国的神视频](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E4%BA%86%E4%B8%80%E4%B8%AA%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%E7%9A%84%E7%A5%9E%E8%A7%86%E9%A2%91%23&t=31&band_rank=20&Refer=top)
1. [女子分享自己怀孕后的唯一收入方式](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%86%E4%BA%AB%E8%87%AA%E5%B7%B1%E6%80%80%E5%AD%95%E5%90%8E%E7%9A%84%E5%94%AF%E4%B8%80%E6%94%B6%E5%85%A5%E6%96%B9%E5%BC%8F%23&t=31&band_rank=21&Refer=top)
1. [常冰玉10比7赵心童](https://s.weibo.com//weibo?q=%23%E5%B8%B8%E5%86%B0%E7%8E%8910%E6%AF%947%E8%B5%B5%E5%BF%83%E7%AB%A5%23&t=31&band_rank=23&Refer=top)
1. [比包贝尔回应先来的是他新剧](https://s.weibo.com//weibo?q=%23%E6%AF%94%E5%8C%85%E8%B4%9D%E5%B0%94%E5%9B%9E%E5%BA%94%E5%85%88%E6%9D%A5%E7%9A%84%E6%98%AF%E4%BB%96%E6%96%B0%E5%89%A7%23&t=31&band_rank=24&Refer=top)
1. [宋亚东KO乌马尔](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E4%B8%9CKO%E4%B9%8C%E9%A9%AC%E5%B0%94%23&t=31&band_rank=25&Refer=top)
1. [小米18Fold](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B318Fold&t=31&band_rank=26&Refer=top)
1. [樊振东无缘德国杯8强](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%97%A0%E7%BC%98%E5%BE%B7%E5%9B%BD%E6%9D%AF8%E5%BC%BA%23&t=31&band_rank=27&Refer=top)
1. [90后守国门警花文燕仍无音信](https://s.weibo.com//weibo?q=%2390%E5%90%8E%E5%AE%88%E5%9B%BD%E9%97%A8%E8%AD%A6%E8%8A%B1%E6%96%87%E7%87%95%E4%BB%8D%E6%97%A0%E9%9F%B3%E4%BF%A1%23&t=31&band_rank=28&Refer=top)
1. [央视曝光保温杯造假套路](https://s.weibo.com//weibo?q=%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E4%BF%9D%E6%B8%A9%E6%9D%AF%E9%80%A0%E5%81%87%E5%A5%97%E8%B7%AF&t=31&band_rank=29&Refer=top)
1. [吉隆口岸大楼只剩钢筋骨架](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%A4%A7%E6%A5%BC%E5%8F%AA%E5%89%A9%E9%92%A2%E7%AD%8B%E9%AA%A8%E6%9E%B6%23&t=31&band_rank=30&Refer=top)
1. [是我妈在发帖吗](https://s.weibo.com//weibo?q=%E6%98%AF%E6%88%91%E5%A6%88%E5%9C%A8%E5%8F%91%E5%B8%96%E5%90%97&t=31&band_rank=32&Refer=top)
1. [肯德基最离谱的联名来了](https://s.weibo.com//weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E6%9C%80%E7%A6%BB%E8%B0%B1%E7%9A%84%E8%81%94%E5%90%8D%E6%9D%A5%E4%BA%86%23&t=31&band_rank=33&Refer=top)
1. [原来专业助理是这样帮老板包场的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E4%B8%93%E4%B8%9A%E5%8A%A9%E7%90%86%E6%98%AF%E8%BF%99%E6%A0%B7%E5%B8%AE%E8%80%81%E6%9D%BF%E5%8C%85%E5%9C%BA%E7%9A%84&t=31&band_rank=35&Refer=top)
1. [女乘客航班上遭邻座暴力殴打](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E4%B9%98%E5%AE%A2%E8%88%AA%E7%8F%AD%E4%B8%8A%E9%81%AD%E9%82%BB%E5%BA%A7%E6%9A%B4%E5%8A%9B%E6%AE%B4%E6%89%93%23&t=31&band_rank=37&Refer=top)
1. [王菲躲镜头](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%8F%B2%E8%BA%B2%E9%95%9C%E5%A4%B4%23&t=31&band_rank=38&Refer=top)
1. [男子婚后第三天自愿给房子加妻子名字](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%A9%9A%E5%90%8E%E7%AC%AC%E4%B8%89%E5%A4%A9%E8%87%AA%E6%84%BF%E7%BB%99%E6%88%BF%E5%AD%90%E5%8A%A0%E5%A6%BB%E5%AD%90%E5%90%8D%E5%AD%97%23&t=31&band_rank=39&Refer=top)
1. [TES要打iG了](https://s.weibo.com//weibo?q=%23TES%E8%A6%81%E6%89%93iG%E4%BA%86%23&t=31&band_rank=40&Refer=top)
1. [西藏泥石流救援](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%95%91%E6%8F%B4%23&t=31&band_rank=41&Refer=top)
1. [凡人修仙传189集改编争议](https://s.weibo.com//weibo?q=%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0189%E9%9B%86%E6%94%B9%E7%BC%96%E4%BA%89%E8%AE%AE&t=31&band_rank=42&Refer=top)
1. [首批救援队在吉隆山头彻夜坚守](https://s.weibo.com//weibo?q=%23%E9%A6%96%E6%89%B9%E6%95%91%E6%8F%B4%E9%98%9F%E5%9C%A8%E5%90%89%E9%9A%86%E5%B1%B1%E5%A4%B4%E5%BD%BB%E5%A4%9C%E5%9D%9A%E5%AE%88%23&t=31&band_rank=43&Refer=top)
1. [TOP在演唱会上哭了](https://s.weibo.com//weibo?q=%23TOP%E5%9C%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%93%AD%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [用这种微信头像或被封号](https://s.weibo.com//weibo?q=%23%E7%94%A8%E8%BF%99%E7%A7%8D%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F%E6%88%96%E8%A2%AB%E5%B0%81%E5%8F%B7%23&t=31&band_rank=45&Refer=top)
1. [官方通报博主称拔钉被以扬尘叫停](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8D%9A%E4%B8%BB%E7%A7%B0%E6%8B%94%E9%92%89%E8%A2%AB%E4%BB%A5%E6%89%AC%E5%B0%98%E5%8F%AB%E5%81%9C%23&t=31&band_rank=46&Refer=top)
1. [宋妍霏看阿那亚音乐节](https://s.weibo.com//weibo?q=%E5%AE%8B%E5%A6%8D%E9%9C%8F%E7%9C%8B%E9%98%BF%E9%82%A3%E4%BA%9A%E9%9F%B3%E4%B9%90%E8%8A%82&t=31&band_rank=47&Refer=top)
1. [金价为什么又跌了](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%88%E8%B7%8C%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [孕妈吃2斤小龙虾感染紧急剖宫产](https://s.weibo.com//weibo?q=%23%E5%AD%95%E5%A6%88%E5%90%832%E6%96%A4%E5%B0%8F%E9%BE%99%E8%99%BE%E6%84%9F%E6%9F%93%E7%B4%A7%E6%80%A5%E5%89%96%E5%AE%AB%E4%BA%A7%23&t=31&band_rank=49&Refer=top)
1. [刘宇宁林一下意识保护王玉雯](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9E%97%E4%B8%80%E4%B8%8B%E6%84%8F%E8%AF%86%E4%BF%9D%E6%8A%A4%E7%8E%8B%E7%8E%89%E9%9B%AF%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
