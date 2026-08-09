# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-10 03:49:43

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
<!-- 最后更新时间 Mon Aug 10 2026 03:18:30 GMT+0800 (China Standard Time) -->

1. [台风白海豚正式登陆](https://so.toutiao.com/search?keyword=台风白海豚正式登陆)
1. [伊朗最高领袖与总统会谈](https://so.toutiao.com/search?keyword=伊朗最高领袖与总统会谈)
1. [Chinamaxxing全球出圈！是啥意思](https://so.toutiao.com/search?keyword=Chinamaxxing全球出圈！是啥意思)
1. [200多位院士专家为一人齐聚哈工程](https://so.toutiao.com/search?keyword=200多位院士专家为一人齐聚哈工程)
1. [白海豚对华东华北影响会大于巴威](https://so.toutiao.com/search?keyword=白海豚对华东华北影响会大于巴威)
1. [以军士兵把枪口对准中国记者](https://so.toutiao.com/search?keyword=以军士兵把枪口对准中国记者)
1. [大V：日称解放军有8架歼35是自欺欺人](https://so.toutiao.com/search?keyword=大V：日称解放军有8架歼35是自欺欺人)
1. [司机瞥见竹子晃动紧急停车躲过滑坡](https://so.toutiao.com/search?keyword=司机瞥见竹子晃动紧急停车躲过滑坡)
1. [婴儿被子蒙头 小猫扒醒宝妈](https://so.toutiao.com/search?keyword=婴儿被子蒙头%20小猫扒醒宝妈)
1. [台风登陆现场：狂风怒扫雨水横飞](https://so.toutiao.com/search?keyword=台风登陆现场：狂风怒扫雨水横飞)
1. [网民AI造谣“西平灭门案”被行拘](https://so.toutiao.com/search?keyword=网民AI造谣“西平灭门案”被行拘)
1. [女演员朱锐自称破产失业](https://so.toutiao.com/search?keyword=女演员朱锐自称破产失业)
1. [谢霆锋没提王菲名字全网都听懂了](https://so.toutiao.com/search?keyword=谢霆锋没提王菲名字全网都听懂了)
1. [上门女婿出轨女邻居多年被判重婚罪](https://so.toutiao.com/search?keyword=上门女婿出轨女邻居多年被判重婚罪)
1. [蔡文静腰链造型又撩又辣](https://so.toutiao.com/search?keyword=蔡文静腰链造型又撩又辣)
1. [新能源充电站一辆SUV突然起火爆燃](https://so.toutiao.com/search?keyword=新能源充电站一辆SUV突然起火爆燃)
1. [多名游客下海遇险 多方逆行救人](https://so.toutiao.com/search?keyword=多名游客下海遇险%20多方逆行救人)
1. [台湾记者直面白海豚紧抓杆不敢松手](https://so.toutiao.com/search?keyword=台湾记者直面白海豚紧抓杆不敢松手)
1. [89岁钟南山每周健身3次](https://so.toutiao.com/search?keyword=89岁钟南山每周健身3次)
1. [叶倩文宣布喜添新孙](https://so.toutiao.com/search?keyword=叶倩文宣布喜添新孙)
1. [印女子出轨被撞破与情夫一起遭毒打](https://so.toutiao.com/search?keyword=印女子出轨被撞破与情夫一起遭毒打)
1. [研究发现“伟哥”成分或有抗癌潜力](https://so.toutiao.com/search?keyword=研究发现“伟哥”成分或有抗癌潜力)
1. [媒体：两则新闻照见台湾当下困境](https://so.toutiao.com/search?keyword=媒体：两则新闻照见台湾当下困境)
1. [于东来回应胖东来近25年老店年底关闭](https://so.toutiao.com/search?keyword=于东来回应胖东来近25年老店年底关闭)
1. [学者：日本精工制造不容小觑](https://so.toutiao.com/search?keyword=学者：日本精工制造不容小觑)
1. [多地高分生扎堆填报中本贯通](https://so.toutiao.com/search?keyword=多地高分生扎堆填报中本贯通)
1. [女子误入密林 救援队砍出生命通道](https://so.toutiao.com/search?keyword=女子误入密林%20救援队砍出生命通道)
1. [10万台中国空调坐着火车去欧洲](https://so.toutiao.com/search?keyword=10万台中国空调坐着火车去欧洲)
1. [今年第16号台风“琵鹭”生成](https://so.toutiao.com/search?keyword=今年第16号台风“琵鹭”生成)
1. [台风白海豚在浙江乐清二次登陆](https://so.toutiao.com/search?keyword=台风白海豚在浙江乐清二次登陆)
1. [80多岁外婆门打不开直接翻院墙出门](https://so.toutiao.com/search?keyword=80多岁外婆门打不开直接翻院墙出门)
1. [飞宁波航班颠簸超1小时备降杭州](https://so.toutiao.com/search?keyword=飞宁波航班颠簸超1小时备降杭州)
1. [茅台半个月连涨两次 被“割”的是谁](https://so.toutiao.com/search?keyword=茅台半个月连涨两次%20被“割”的是谁)
1. [用笑容治愈全网的彭仕运遗体已找到](https://so.toutiao.com/search?keyword=用笑容治愈全网的彭仕运遗体已找到)
1. [上半年手机市场分化严重](https://so.toutiao.com/search?keyword=上半年手机市场分化严重)
1. [骑手期盼司机经过积水路段慢一点](https://so.toutiao.com/search?keyword=骑手期盼司机经过积水路段慢一点)
1. [中超第22轮积分榜：蓉城仍13分领跑](https://so.toutiao.com/search?keyword=中超第22轮积分榜：蓉城仍13分领跑)
1. [美以男子在菲律宾机场大打出手](https://so.toutiao.com/search?keyword=美以男子在菲律宾机场大打出手)
1. [新疆阿勒泰野外使用激光灭蚊](https://so.toutiao.com/search?keyword=新疆阿勒泰野外使用激光灭蚊)
1. [伊朗陆军司令：将回应任何敌对行动](https://so.toutiao.com/search?keyword=伊朗陆军司令：将回应任何敌对行动)
1. [单依纯演唱会让全国网友认识浐灞](https://so.toutiao.com/search?keyword=单依纯演唱会让全国网友认识浐灞)
1. [老人买200万保险退保只退108万](https://so.toutiao.com/search?keyword=老人买200万保险退保只退108万)
1. [毛宁向世界分享AI“中式天庭”](https://so.toutiao.com/search?keyword=毛宁向世界分享AI“中式天庭”)
1. [印度为何要在本土造阵风战机](https://so.toutiao.com/search?keyword=印度为何要在本土造阵风战机)
1. [南航回应飞机起飞滑行中遭遇雷击](https://so.toutiao.com/search?keyword=南航回应飞机起飞滑行中遭遇雷击)
1. [宋佳：“小花”来到百花特别高兴](https://so.toutiao.com/search?keyword=宋佳：“小花”来到百花特别高兴)
1. [揭秘广东省运会开幕式主场馆建设](https://so.toutiao.com/search?keyword=揭秘广东省运会开幕式主场馆建设)
1. [肖国栋：未来斯诺克肯定是中国的](https://so.toutiao.com/search?keyword=肖国栋：未来斯诺克肯定是中国的)
1. [学者：工业能力决定现代防空作战走向](https://so.toutiao.com/search?keyword=学者：工业能力决定现代防空作战走向)
1. [媒体人：日本白皮书明面防卫暗地扩军](https://so.toutiao.com/search?keyword=媒体人：日本白皮书明面防卫暗地扩军)
1. [白海豚已减弱为台风级](https://so.toutiao.com/search?keyword=白海豚已减弱为台风级)
1. [周星驰母亲现身香港路演现场](https://so.toutiao.com/search?keyword=周星驰母亲现身香港路演现场)
1. [杭州一小学开放教室安置235名工友](https://so.toutiao.com/search?keyword=杭州一小学开放教室安置235名工友)
1. [刘嘉玲晒与周星驰合照](https://so.toutiao.com/search?keyword=刘嘉玲晒与周星驰合照)
1. [俄乌战争会有“大结局”吗](https://so.toutiao.com/search?keyword=俄乌战争会有“大结局”吗)
1. [男子被海浪带离岸边 众人营救](https://so.toutiao.com/search?keyword=男子被海浪带离岸边%20众人营救)
1. [墨菲晋级斯诺克中国公开赛16强](https://so.toutiao.com/search?keyword=墨菲晋级斯诺克中国公开赛16强)
1. [哈马斯称坚持加沙停火协议路线图](https://so.toutiao.com/search?keyword=哈马斯称坚持加沙停火协议路线图)
1. [以拒绝“和平委员会”的加沙和平计划](https://so.toutiao.com/search?keyword=以拒绝“和平委员会”的加沙和平计划)
1. [上海全力守护市民“菜篮子”](https://so.toutiao.com/search?keyword=上海全力守护市民“菜篮子”)
1. [白海豚登陆强度略强于巴威](https://so.toutiao.com/search?keyword=白海豚登陆强度略强于巴威)
1. [刘晓庆陈冲同台合唱《绒花》](https://so.toutiao.com/search?keyword=刘晓庆陈冲同台合唱《绒花》)
1. [浙江00后女村支书冲在防台一线](https://so.toutiao.com/search?keyword=浙江00后女村支书冲在防台一线)
1. [湘超永州主场竖起120多面各地旗帜](https://so.toutiao.com/search?keyword=湘超永州主场竖起120多面各地旗帜)
1. [美航母的“无人机大脑”水平如何](https://so.toutiao.com/search?keyword=美航母的“无人机大脑”水平如何)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Mon Aug 10 2026 03:47:04 GMT+0800 (China Standard Time) -->

1. [第一批抱冬瓜睡觉受害者出现](https://www.zhihu.com/search?q=%E7%AC%AC%E4%B8%80%E6%89%B9%E6%8A%B1%E5%86%AC%E7%93%9C%E7%9D%A1%E8%A7%89%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0)
1. [台风白海豚](https://www.zhihu.com/search?q=%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A)
1. [新华日报评竹知了事件](https://www.zhihu.com/search?q=%E6%96%B0%E5%8D%8E%E6%97%A5%E6%8A%A5%E8%AF%84%E7%AB%B9%E7%9F%A5%E4%BA%86%E4%BA%8B%E4%BB%B6)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [网红雅典娜证实被害](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E9%9B%85%E5%85%B8%E5%A8%9C%E8%AF%81%E5%AE%9E%E8%A2%AB%E5%AE%B3)
1. [定位纠纷致外卖员被砍成植物人](https://www.zhihu.com/search?q=%E5%AE%9A%E4%BD%8D%E7%BA%A0%E7%BA%B7%E8%87%B4%E5%A4%96%E5%8D%96%E5%91%98%E8%A2%AB%E7%A0%8D%E6%88%90%E6%A4%8D%E7%89%A9%E4%BA%BA)
1. [雪佛兰退出中国市场](https://www.zhihu.com/search?q=%E9%9B%AA%E4%BD%9B%E5%85%B0%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA)
1. [上半年国内手机销量TOP30出炉](https://www.zhihu.com/search?q=%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%9B%BD%E5%86%85%E6%89%8B%E6%9C%BA%E9%94%80%E9%87%8FTOP30%E5%87%BA%E7%82%89)
1. [日本一医院错把患者脑部当肿瘤切除](https://www.zhihu.com/search?q=%E6%97%A5%E6%9C%AC%E4%B8%80%E5%8C%BB%E9%99%A2%E9%94%99%E6%8A%8A%E6%82%A3%E8%80%85%E8%84%91%E9%83%A8%E5%BD%93%E8%82%BF%E7%98%A4%E5%88%87%E9%99%A4)
1. [梅西父亲去世](https://www.zhihu.com/search?q=%E6%A2%85%E8%A5%BF%E7%88%B6%E4%BA%B2%E5%8E%BB%E4%B8%96)
1. [欢迎来龙餐馆热映](https://www.zhihu.com/search?q=%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E7%83%AD%E6%98%A0)
1. [古二曝繁花剧组涉偷税吸毒](https://www.zhihu.com/search?q=%E5%8F%A4%E4%BA%8C%E6%9B%9D%E7%B9%81%E8%8A%B1%E5%89%A7%E7%BB%84%E6%B6%89%E5%81%B7%E7%A8%8E%E5%90%B8%E6%AF%92)
1. [温岭全力搜救被卷走9岁男孩](https://www.zhihu.com/search?q=%E6%B8%A9%E5%B2%AD%E5%85%A8%E5%8A%9B%E6%90%9C%E6%95%91%E8%A2%AB%E5%8D%B7%E8%B5%B09%E5%B2%81%E7%94%B7%E5%AD%A9)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Aug 10 2026 03:49:43 GMT+0800 (China Standard Time) -->

1. [「抱冬瓜睡觉降温」走红，有人尝试，结果半夜瓜炸了，好端端的冬瓜为什么会爆裂？](https://www.zhihu.com/question/2068090103704941000)
1. [如何看待日本一医院错把患者脑部当肿瘤切除？](https://www.zhihu.com/question/2069354305589621000)
1. [如何看待“现在查 RTX 5090 价格已经变成了一种恐怖片题材”这个梗？](https://www.zhihu.com/question/2067910668142093800)
1. [Wayward 称 BLG 放弃 Bin 是最错误决定，你如何评价？](https://www.zhihu.com/question/2069827123896907300)
1. [台风「白海豚」在浙江台州玉环沿海登陆，中心附近最大风力 14 级，你那边现在情况如何？](https://www.zhihu.com/question/2068622608979813600)
1. [鲁迅连个长篇都没有，可是为什么一提到中国现当代文学的TOP1，就都想到了他？](https://www.zhihu.com/question/1957061060604437500)
1. [女子被狗舔脚后被判定狂犬病三级暴露，因脚趾甲沟炎存在皮肤破损，反映出什么认知误区？哪些情况要及时就医？](https://www.zhihu.com/question/2069321207866987800)
1. [菲媒证实网红雅典娜被害，网传该案仍有部分电诈犯未归案，目前案件的真实进展如何？](https://www.zhihu.com/question/2069726177812374000)
1. [如何看待美军林肯号航母爆出物资短缺，环境恶劣、飞行甲板磨出洞等情况？](https://www.zhihu.com/question/2069728803518148900)
1. [天蚕土豆新书【神通者】到底如何？](https://www.zhihu.com/question/2069430560733369000)
1. [某数码博主算出上半年国内手机销量TOP30，苹果包揽前三华为领跑国产，数据可靠吗？哪些信息值得关注？](https://www.zhihu.com/question/2069715027674624300)
1. [你会去电影院看沈腾主演的新电影《欢迎来龙餐馆》吗？票房能破50亿吗?](https://www.zhihu.com/question/2068398077522793500)
1. [美国科学家首次用 AI 设计出病毒，意味着什么？生物安全防线该如何应对？](https://www.zhihu.com/question/2068991097578021600)
1. [如何看待贵州网红金蝉子账号发布讣告，称外号「老表」的打工网红彭仕运在老家游泳时不幸溺水身亡？](https://www.zhihu.com/question/2068817961792623600)
1. [《亮剑》中有什么不符合逻辑的片段呢？](https://www.zhihu.com/question/1923757189924907000)
1. [河南西平县涉重大刑案逃犯被抓，还有哪些信息值得关注？](https://www.zhihu.com/question/2069506911318315300)
1. [2026WTT横滨冠军赛，张本智和4比1吴晙诚卫冕成功，如何评价这场比赛？](https://www.zhihu.com/question/2069869187867137000)
1. [如何看待最近爆火的“成吉思鸡”现象？](https://www.zhihu.com/question/2065112578406328000)
1. [如何看待 2026 年 8 月 8 日，史诗级电影《奥德赛》的点映上座率高达 57.3% 左右？](https://www.zhihu.com/question/2069512576657105200)
1. [医生韩杰因医疗事故获刑仍不认罪，如何界定医疗过失的刑事边界？](https://www.zhihu.com/question/2068717228388888800)
1. [要不要做博后？](https://www.zhihu.com/question/2052016546743064300)
1. [还有哪些类似《奥德赛》一样史诗题材的电影值得一看？](https://www.zhihu.com/question/2068418251516633300)
1. [2026WTT横滨冠军赛，张本智和4:2击败松岛辉空，挺进决赛，如何评价这场比赛？](https://www.zhihu.com/question/2069791953693185800)
1. [为什么人们总害怕改变现状？](https://www.zhihu.com/question/8466555607)
1. [为什么感觉好莱坞的特效越来越不如以前真实？](https://www.zhihu.com/question/459841876)
1. [《侠客风云传》《逸剑风云决》这类游戏，为何总喜欢将魔教妖女作为红颜知己？江湖中没有好女孩了吗？](https://www.zhihu.com/question/2068272333865891600)
1. [面对海量信息流，我该如何有效获取深度知识而非碎片化内容？](https://www.zhihu.com/question/1973345790182302500)
1. [量化交易系统在实盘中，如何区分"正常回撤"和"因子失效"？](https://www.zhihu.com/question/2042585713821079300)
1. [祁同伟的自杀，对沙瑞金和侯亮平有何影响？](https://www.zhihu.com/question/1928734665180702200)
1. [那么多奸臣和酷吏明知道自己会被皇帝卸磨杀驴，为什么还锲而不舍的做事？](https://www.zhihu.com/question/424335059)
1. [为什么会有这么多人喜欢看纪录片？](https://www.zhihu.com/question/360098555)
1. [家里养宠物，用84消毒可以吗？](https://www.zhihu.com/question/276059064)
1. [BLG 官宣 Flandre 加入，你看好这次的再度联手吗？可能会对选手以及战队有哪些影响？](https://www.zhihu.com/question/2069798790676968700)
1. [兹白说钟离曾经是“岩主天星” 那这个 “岩主天星”到底是个什么样的存在？](https://www.zhihu.com/question/2002423834540778500)
1. [凡人修仙传动画186集最高在线人数多少？](https://www.zhihu.com/question/2068852278321324800)
1. [台风「白海豚」逼近，9岁男孩在浙江温岭海边被浪卷走，带来哪些警示？目前救援难点有哪些？](https://www.zhihu.com/question/2069556360698488300)
1. [雪佛兰正式停售中国市场，如何评价这个汽车品牌在华的21年？](https://www.zhihu.com/question/2069357693840667600)

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
<!-- 最后更新时间 Mon Aug 10 2026 03:07:34 GMT+0800 (China Standard Time) -->

1. [健全上下贯通执行有力的组织体系](https://s.weibo.com//weibo?q=%23%E5%81%A5%E5%85%A8%E4%B8%8A%E4%B8%8B%E8%B4%AF%E9%80%9A%E6%89%A7%E8%A1%8C%E6%9C%89%E5%8A%9B%E7%9A%84%E7%BB%84%E7%BB%87%E4%BD%93%E7%B3%BB%23&Refer=new_time)
1. [百花奖](https://s.weibo.com//weibo?q=%E7%99%BE%E8%8A%B1%E5%A5%96&t=31&band_rank=1&Refer=top)
1. [台风白海豚](https://s.weibo.com//weibo?q=%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A&t=31&band_rank=2&Refer=top)
1. [中国制造硬核瞬间](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%E7%A1%AC%E6%A0%B8%E7%9E%AC%E9%97%B4%23&t=31&band_rank=3&Refer=top)
1. [沈腾 影帝](https://s.weibo.com//weibo?q=%E6%B2%88%E8%85%BE%20%E5%BD%B1%E5%B8%9D&t=31&band_rank=4&Refer=top)
1. [杭州交警建议明早提前一小时出门](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%BA%A4%E8%AD%A6%E5%BB%BA%E8%AE%AE%E6%98%8E%E6%97%A9%E6%8F%90%E5%89%8D%E4%B8%80%E5%B0%8F%E6%97%B6%E5%87%BA%E9%97%A8%23&t=31&band_rank=5&Refer=top)
1. [上海地铁停运](https://s.weibo.com//weibo?q=%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%81%9C%E8%BF%90&t=31&band_rank=6&Refer=top)
1. [人鱼](https://s.weibo.com//weibo?q=%E4%BA%BA%E9%B1%BC&t=31&band_rank=7&Refer=top)
1. [龙餐馆 奥斯卡](https://s.weibo.com//weibo?q=%E9%BE%99%E9%A4%90%E9%A6%86%20%E5%A5%A5%E6%96%AF%E5%8D%A1&t=31&band_rank=8&Refer=top)
1. [张本智和说和妹妹同时夺冠意义重大](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E5%92%8C%E5%A6%B9%E5%A6%B9%E5%90%8C%E6%97%B6%E5%A4%BA%E5%86%A0%E6%84%8F%E4%B9%89%E9%87%8D%E5%A4%A7%23&t=31&band_rank=9&Refer=top)
1. [极氪7X充电起火](https://s.weibo.com//weibo?q=%E6%9E%81%E6%B0%AA7X%E5%85%85%E7%94%B5%E8%B5%B7%E7%81%AB&t=31&band_rank=10&Refer=top)
1. [儿子去世孙子不捧骨灰盒被查出非亲生](https://s.weibo.com//weibo?q=%23%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E5%AD%99%E5%AD%90%E4%B8%8D%E6%8D%A7%E9%AA%A8%E7%81%B0%E7%9B%92%E8%A2%AB%E6%9F%A5%E5%87%BA%E9%9D%9E%E4%BA%B2%E7%94%9F%23&t=31&band_rank=11&Refer=top)
1. [婴儿快窒息时被小猫救下宝妈发声](https://s.weibo.com//weibo?q=%23%E5%A9%B4%E5%84%BF%E5%BF%AB%E7%AA%92%E6%81%AF%E6%97%B6%E8%A2%AB%E5%B0%8F%E7%8C%AB%E6%95%91%E4%B8%8B%E5%AE%9D%E5%A6%88%E5%8F%91%E5%A3%B0%23&t=31&band_rank=12&Refer=top)
1. [白海豚 居家办公](https://s.weibo.com//weibo?q=%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E5%B1%85%E5%AE%B6%E5%8A%9E%E5%85%AC&t=31&band_rank=13&Refer=top)
1. [母亲看自闭症孩子独自玩耍情绪失控](https://s.weibo.com//weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%9C%8B%E8%87%AA%E9%97%AD%E7%97%87%E5%AD%A9%E5%AD%90%E7%8B%AC%E8%87%AA%E7%8E%A9%E8%80%8D%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23&t=31&band_rank=14&Refer=top)
1. [朱一龙鼻子怎么了](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E9%BC%BB%E5%AD%90%E6%80%8E%E4%B9%88%E4%BA%86%23&t=31&band_rank=15&Refer=top)
1. [浙江省甬江发生2026年第1号洪水](https://s.weibo.com//weibo?q=%E6%B5%99%E6%B1%9F%E7%9C%81%E7%94%AC%E6%B1%9F%E5%8F%91%E7%94%9F2026%E5%B9%B4%E7%AC%AC1%E5%8F%B7%E6%B4%AA%E6%B0%B4&t=31&band_rank=16&Refer=top)
1. [上海地铁明天4条线路全线停运](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E6%98%8E%E5%A4%A94%E6%9D%A1%E7%BA%BF%E8%B7%AF%E5%85%A8%E7%BA%BF%E5%81%9C%E8%BF%90%23&t=31&band_rank=17&Refer=top)
1. [患者走了医生躲角落哭半小时](https://s.weibo.com//weibo?q=%E6%82%A3%E8%80%85%E8%B5%B0%E4%BA%86%E5%8C%BB%E7%94%9F%E8%BA%B2%E8%A7%92%E8%90%BD%E5%93%AD%E5%8D%8A%E5%B0%8F%E6%97%B6&t=31&band_rank=18&Refer=top)
1. [白海豚提前登陆](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%23&t=31&band_rank=19&Refer=top)
1. [张凌赫还原谢征名台词](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%98%E5%8E%9F%E8%B0%A2%E5%BE%81%E5%90%8D%E5%8F%B0%E8%AF%8D%23&t=31&band_rank=20&Refer=top)
1. [我每次陷入亲密关系的日常](https://s.weibo.com//weibo?q=%E6%88%91%E6%AF%8F%E6%AC%A1%E9%99%B7%E5%85%A5%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E7%9A%84%E6%97%A5%E5%B8%B8&t=31&band_rank=21&Refer=top)
1. [印度女子出轨被撞破在院子内遭毒打](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E5%87%BA%E8%BD%A8%E8%A2%AB%E6%92%9E%E7%A0%B4%E5%9C%A8%E9%99%A2%E5%AD%90%E5%86%85%E9%81%AD%E6%AF%92%E6%89%93%23&t=31&band_rank=22&Refer=top)
1. [女子3万全款购入宝鸡40平米住宅](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%903%E4%B8%87%E5%85%A8%E6%AC%BE%E8%B4%AD%E5%85%A5%E5%AE%9D%E9%B8%A140%E5%B9%B3%E7%B1%B3%E4%BD%8F%E5%AE%85%23&t=31&band_rank=23&Refer=top)
1. [迪丽热巴素颜香港plog](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E9%A2%9C%E9%A6%99%E6%B8%AFplog%23&t=31&band_rank=24&Refer=top)
1. [婚外胚胎案原配痛心男方变化大](https://s.weibo.com//weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E7%97%9B%E5%BF%83%E7%94%B7%E6%96%B9%E5%8F%98%E5%8C%96%E5%A4%A7%23&t=31&band_rank=25&Refer=top)
1. [男子回应给拾荒老人点烧烤被扔垃圾桶](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E7%BB%99%E6%8B%BE%E8%8D%92%E8%80%81%E4%BA%BA%E7%82%B9%E7%83%A7%E7%83%A4%E8%A2%AB%E6%89%94%E5%9E%83%E5%9C%BE%E6%A1%B6%23&t=31&band_rank=26&Refer=top)
1. [仙逆动画](https://s.weibo.com//weibo?q=%E4%BB%99%E9%80%86%E5%8A%A8%E7%94%BB&t=31&band_rank=27&Refer=top)
1. [大家都走到职场的哪一步了](https://s.weibo.com//weibo?q=%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%B5%B0%E5%88%B0%E8%81%8C%E5%9C%BA%E7%9A%84%E5%93%AA%E4%B8%80%E6%AD%A5%E4%BA%86&t=31&band_rank=28&Refer=top)
1. [怎么挑选眼镜框](https://s.weibo.com//weibo?q=%E6%80%8E%E4%B9%88%E6%8C%91%E9%80%89%E7%9C%BC%E9%95%9C%E6%A1%86&t=31&band_rank=29&Refer=top)
1. [上海地铁](https://s.weibo.com//weibo?q=%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81&t=31&band_rank=30&Refer=top)
1. [自驾3个月活得原始又低级](https://s.weibo.com//weibo?q=%E8%87%AA%E9%A9%BE3%E4%B8%AA%E6%9C%88%E6%B4%BB%E5%BE%97%E5%8E%9F%E5%A7%8B%E5%8F%88%E4%BD%8E%E7%BA%A7&t=31&band_rank=31&Refer=top)
1. [蔡磊多次提出离婚都被妻子拒绝](https://s.weibo.com//weibo?q=%23%E8%94%A1%E7%A3%8A%E5%A4%9A%E6%AC%A1%E6%8F%90%E5%87%BA%E7%A6%BB%E5%A9%9A%E9%83%BD%E8%A2%AB%E5%A6%BB%E5%AD%90%E6%8B%92%E7%BB%9D%23&t=31&band_rank=32&Refer=top)
1. [婴儿被子蒙头快窒息时小猫扒醒宝妈](https://s.weibo.com//weibo?q=%23%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%AD%90%E8%92%99%E5%A4%B4%E5%BF%AB%E7%AA%92%E6%81%AF%E6%97%B6%E5%B0%8F%E7%8C%AB%E6%89%92%E9%86%92%E5%AE%9D%E5%A6%88%23&t=31&band_rank=33&Refer=top)
1. [宋亚轩IP在浙江](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9IP%E5%9C%A8%E6%B5%99%E6%B1%9F%23&t=31&band_rank=34&Refer=top)
1. [男孩1年暴长20厘米全身长满纹](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%A91%E5%B9%B4%E6%9A%B4%E9%95%BF20%E5%8E%98%E7%B1%B3%E5%85%A8%E8%BA%AB%E9%95%BF%E6%BB%A1%E7%BA%B9%23&t=31&band_rank=35&Refer=top)
1. [自闭症哥哥的话唠妹妹堪比心理医生](https://s.weibo.com//weibo?q=%E8%87%AA%E9%97%AD%E7%97%87%E5%93%A5%E5%93%A5%E7%9A%84%E8%AF%9D%E5%94%A0%E5%A6%B9%E5%A6%B9%E5%A0%AA%E6%AF%94%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F&t=31&band_rank=36&Refer=top)
1. [半熟恋人](https://s.weibo.com//weibo?q=%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA&t=31&band_rank=37&Refer=top)
1. [伊朗高层重要人事变动](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E6%9C%97%E9%AB%98%E5%B1%82%E9%87%8D%E8%A6%81%E4%BA%BA%E4%BA%8B%E5%8F%98%E5%8A%A8%23&t=31&band_rank=38&Refer=top)
1. [台风 周末登陆](https://s.weibo.com//weibo?q=%E5%8F%B0%E9%A3%8E%20%E5%91%A8%E6%9C%AB%E7%99%BB%E9%99%86&t=31&band_rank=39&Refer=top)
1. [温州发布海水倒灌风险预警](https://s.weibo.com//weibo?q=%23%E6%B8%A9%E5%B7%9E%E5%8F%91%E5%B8%83%E6%B5%B7%E6%B0%B4%E5%80%92%E7%81%8C%E9%A3%8E%E9%99%A9%E9%A2%84%E8%AD%A6%23&t=31&band_rank=40&Refer=top)
1. [鉴定3个孩子非亲生奶奶仍想接手抚养](https://s.weibo.com//weibo?q=%23%E9%89%B4%E5%AE%9A3%E4%B8%AA%E5%AD%A9%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B6%E5%A5%B6%E4%BB%8D%E6%83%B3%E6%8E%A5%E6%89%8B%E6%8A%9A%E5%85%BB%23&t=31&band_rank=41&Refer=top)
1. [白海豚减弱为台风级](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%87%8F%E5%BC%B1%E4%B8%BA%E5%8F%B0%E9%A3%8E%E7%BA%A7%23&t=31&band_rank=42&Refer=top)
1. [易烊千玺工作室感谢百花奖认可](https://s.weibo.com//weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%84%9F%E8%B0%A2%E7%99%BE%E8%8A%B1%E5%A5%96%E8%AE%A4%E5%8F%AF%23&t=31&band_rank=43&Refer=top)
1. [百花奖最佳女配角提名片段](https://s.weibo.com//weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%E8%A7%92%E6%8F%90%E5%90%8D%E7%89%87%E6%AE%B5%23&t=31&band_rank=44&Refer=top)
1. [杨幂对接确认出席百花奖颁奖典礼](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E5%B9%82%E5%AF%B9%E6%8E%A5%E7%A1%AE%E8%AE%A4%E5%87%BA%E5%B8%AD%E7%99%BE%E8%8A%B1%E5%A5%96%E9%A2%81%E5%A5%96%E5%85%B8%E7%A4%BC%23&t=31&band_rank=45&Refer=top)
1. [医疗垃圾 手机壳](https://s.weibo.com//weibo?q=%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%20%E6%89%8B%E6%9C%BA%E5%A3%B3&t=31&band_rank=46&Refer=top)
1. [南京 弹性办公](https://s.weibo.com//weibo?q=%E5%8D%97%E4%BA%AC%20%E5%BC%B9%E6%80%A7%E5%8A%9E%E5%85%AC&t=31&band_rank=47&Refer=top)
1. [狗狗不停地用爪子求小猫舔它](https://s.weibo.com//weibo?q=%23%E7%8B%97%E7%8B%97%E4%B8%8D%E5%81%9C%E5%9C%B0%E7%94%A8%E7%88%AA%E5%AD%90%E6%B1%82%E5%B0%8F%E7%8C%AB%E8%88%94%E5%AE%83%23&t=31&band_rank=48&Refer=top)
1. [乒乓球多人上榜中国品牌青年榜](https://s.weibo.com//weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E5%A4%9A%E4%BA%BA%E4%B8%8A%E6%A6%9C%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E9%9D%92%E5%B9%B4%E6%A6%9C%23&t=31&band_rank=49&Refer=top)
1. [白鲨CF双料冠军](https://s.weibo.com//weibo?q=%E7%99%BD%E9%B2%A8CF%E5%8F%8C%E6%96%99%E5%86%A0%E5%86%9B&t=31&band_rank=50&Refer=top)
1. [白海豚 居家办公](https://s.weibo.com//weibo?q=%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E5%B1%85%E5%AE%B6%E5%8A%9E%E5%85%AC&t=31&band_rank=6&Refer=top)
1. [上海地铁停运](https://s.weibo.com//weibo?q=%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%81%9C%E8%BF%90&t=31&band_rank=7&Refer=top)
1. [朱一龙鼻子怎么了](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E9%BC%BB%E5%AD%90%E6%80%8E%E4%B9%88%E4%BA%86%23&t=31&band_rank=9&Refer=top)
1. [张本智和说和妹妹同时夺冠意义重大](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E5%92%8C%E5%A6%B9%E5%A6%B9%E5%90%8C%E6%97%B6%E5%A4%BA%E5%86%A0%E6%84%8F%E4%B9%89%E9%87%8D%E5%A4%A7%23&t=31&band_rank=10&Refer=top)
1. [母亲看自闭症孩子独自玩耍情绪失控](https://s.weibo.com//weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%9C%8B%E8%87%AA%E9%97%AD%E7%97%87%E5%AD%A9%E5%AD%90%E7%8B%AC%E8%87%AA%E7%8E%A9%E8%80%8D%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23&t=31&band_rank=13&Refer=top)
1. [上海地铁明天4条线路全线停运](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E6%98%8E%E5%A4%A94%E6%9D%A1%E7%BA%BF%E8%B7%AF%E5%85%A8%E7%BA%BF%E5%81%9C%E8%BF%90%23&t=31&band_rank=14&Refer=top)
1. [人鱼](https://s.weibo.com//weibo?q=%E4%BA%BA%E9%B1%BC&t=31&band_rank=15&Refer=top)
1. [张凌赫还原谢征名台词](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%98%E5%8E%9F%E8%B0%A2%E5%BE%81%E5%90%8D%E5%8F%B0%E8%AF%8D%23&t=31&band_rank=16&Refer=top)
1. [极氪7X充电起火](https://s.weibo.com//weibo?q=%E6%9E%81%E6%B0%AA7X%E5%85%85%E7%94%B5%E8%B5%B7%E7%81%AB&t=31&band_rank=17&Refer=top)
1. [浙江省甬江发生2026年第1号洪水](https://s.weibo.com//weibo?q=%E6%B5%99%E6%B1%9F%E7%9C%81%E7%94%AC%E6%B1%9F%E5%8F%91%E7%94%9F2026%E5%B9%B4%E7%AC%AC1%E5%8F%B7%E6%B4%AA%E6%B0%B4&t=31&band_rank=18&Refer=top)
1. [迪丽热巴素颜香港plog](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E9%A2%9C%E9%A6%99%E6%B8%AFplog%23&t=31&band_rank=20&Refer=top)
1. [男孩1年暴长20厘米全身长满纹](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%A91%E5%B9%B4%E6%9A%B4%E9%95%BF20%E5%8E%98%E7%B1%B3%E5%85%A8%E8%BA%AB%E9%95%BF%E6%BB%A1%E7%BA%B9%23&t=31&band_rank=23&Refer=top)
1. [大家都走到职场的哪一步了](https://s.weibo.com//weibo?q=%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%B5%B0%E5%88%B0%E8%81%8C%E5%9C%BA%E7%9A%84%E5%93%AA%E4%B8%80%E6%AD%A5%E4%BA%86&t=31&band_rank=24&Refer=top)
1. [患者走了医生躲角落哭半小时](https://s.weibo.com//weibo?q=%E6%82%A3%E8%80%85%E8%B5%B0%E4%BA%86%E5%8C%BB%E7%94%9F%E8%BA%B2%E8%A7%92%E8%90%BD%E5%93%AD%E5%8D%8A%E5%B0%8F%E6%97%B6&t=31&band_rank=25&Refer=top)
1. [女子3万全款购入宝鸡40平米住宅](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%903%E4%B8%87%E5%85%A8%E6%AC%BE%E8%B4%AD%E5%85%A5%E5%AE%9D%E9%B8%A140%E5%B9%B3%E7%B1%B3%E4%BD%8F%E5%AE%85%23&t=31&band_rank=26&Refer=top)
1. [婴儿被子蒙头快窒息时小猫扒醒宝妈](https://s.weibo.com//weibo?q=%23%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%AD%90%E8%92%99%E5%A4%B4%E5%BF%AB%E7%AA%92%E6%81%AF%E6%97%B6%E5%B0%8F%E7%8C%AB%E6%89%92%E9%86%92%E5%AE%9D%E5%A6%88%23&t=31&band_rank=27&Refer=top)
1. [宋亚轩IP在浙江](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9IP%E5%9C%A8%E6%B5%99%E6%B1%9F%23&t=31&band_rank=28&Refer=top)
1. [男子回应给拾荒老人点烧烤被扔垃圾桶](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E7%BB%99%E6%8B%BE%E8%8D%92%E8%80%81%E4%BA%BA%E7%82%B9%E7%83%A7%E7%83%A4%E8%A2%AB%E6%89%94%E5%9E%83%E5%9C%BE%E6%A1%B6%23&t=31&band_rank=29&Refer=top)
1. [鉴定3个孩子非亲生奶奶仍想接手抚养](https://s.weibo.com//weibo?q=%23%E9%89%B4%E5%AE%9A3%E4%B8%AA%E5%AD%A9%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B6%E5%A5%B6%E4%BB%8D%E6%83%B3%E6%8E%A5%E6%89%8B%E6%8A%9A%E5%85%BB%23&t=31&band_rank=30&Refer=top)
1. [蔡磊多次提出离婚都被妻子拒绝](https://s.weibo.com//weibo?q=%23%E8%94%A1%E7%A3%8A%E5%A4%9A%E6%AC%A1%E6%8F%90%E5%87%BA%E7%A6%BB%E5%A9%9A%E9%83%BD%E8%A2%AB%E5%A6%BB%E5%AD%90%E6%8B%92%E7%BB%9D%23&t=31&band_rank=31&Refer=top)
1. [自驾3个月活得原始又低级](https://s.weibo.com//weibo?q=%E8%87%AA%E9%A9%BE3%E4%B8%AA%E6%9C%88%E6%B4%BB%E5%BE%97%E5%8E%9F%E5%A7%8B%E5%8F%88%E4%BD%8E%E7%BA%A7&t=31&band_rank=32&Refer=top)
1. [上海地铁](https://s.weibo.com//weibo?q=%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81&t=31&band_rank=33&Refer=top)
1. [半熟恋人](https://s.weibo.com//weibo?q=%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA&t=31&band_rank=34&Refer=top)
1. [易烊千玺工作室感谢百花奖认可](https://s.weibo.com//weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%84%9F%E8%B0%A2%E7%99%BE%E8%8A%B1%E5%A5%96%E8%AE%A4%E5%8F%AF%23&t=31&band_rank=35&Refer=top)
1. [南京 弹性办公](https://s.weibo.com//weibo?q=%E5%8D%97%E4%BA%AC%20%E5%BC%B9%E6%80%A7%E5%8A%9E%E5%85%AC&t=31&band_rank=37&Refer=top)
1. [百花奖最佳女配角提名片段](https://s.weibo.com//weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%E8%A7%92%E6%8F%90%E5%90%8D%E7%89%87%E6%AE%B5%23&t=31&band_rank=38&Refer=top)
1. [杨幂对接确认出席百花奖颁奖典礼](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E5%B9%82%E5%AF%B9%E6%8E%A5%E7%A1%AE%E8%AE%A4%E5%87%BA%E5%B8%AD%E7%99%BE%E8%8A%B1%E5%A5%96%E9%A2%81%E5%A5%96%E5%85%B8%E7%A4%BC%23&t=31&band_rank=39&Refer=top)
1. [医疗垃圾 手机壳](https://s.weibo.com//weibo?q=%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%20%E6%89%8B%E6%9C%BA%E5%A3%B3&t=31&band_rank=40&Refer=top)
1. [白海豚减弱为台风级](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%87%8F%E5%BC%B1%E4%B8%BA%E5%8F%B0%E9%A3%8E%E7%BA%A7%23&t=31&band_rank=41&Refer=top)
1. [伊朗高层重要人事变动](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E6%9C%97%E9%AB%98%E5%B1%82%E9%87%8D%E8%A6%81%E4%BA%BA%E4%BA%8B%E5%8F%98%E5%8A%A8%23&t=31&band_rank=42&Refer=top)
1. [南京地铁](https://s.weibo.com//weibo?q=%E5%8D%97%E4%BA%AC%E5%9C%B0%E9%93%81&t=31&band_rank=43&Refer=top)
1. [仙逆动画](https://s.weibo.com//weibo?q=%E4%BB%99%E9%80%86%E5%8A%A8%E7%94%BB&t=31&band_rank=44&Refer=top)
1. [深圳飞无锡航班起飞遭雷击延误3小时](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%A3%9E%E6%97%A0%E9%94%A1%E8%88%AA%E7%8F%AD%E8%B5%B7%E9%A3%9E%E9%81%AD%E9%9B%B7%E5%87%BB%E5%BB%B6%E8%AF%AF3%E5%B0%8F%E6%97%B6%23&t=31&band_rank=45&Refer=top)
1. [WTT横滨冠军赛女单冠军](https://s.weibo.com//weibo?q=%23WTT%E6%A8%AA%E6%BB%A8%E5%86%A0%E5%86%9B%E8%B5%9B%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%23&t=31&band_rank=46&Refer=top)
1. [印航客机急坠91米飞行员疑毒驾](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E8%88%AA%E5%AE%A2%E6%9C%BA%E6%80%A5%E5%9D%A091%E7%B1%B3%E9%A3%9E%E8%A1%8C%E5%91%98%E7%96%91%E6%AF%92%E9%A9%BE%23&t=31&band_rank=47&Refer=top)
1. [阿森纳vs多特蒙德](https://s.weibo.com//weibo?q=%E9%98%BF%E6%A3%AE%E7%BA%B3vs%E5%A4%9A%E7%89%B9%E8%92%99%E5%BE%B7&t=31&band_rank=48&Refer=top)
1. [婚外胚胎案原配痛心男方变化大](https://s.weibo.com//weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E7%97%9B%E5%BF%83%E7%94%B7%E6%96%B9%E5%8F%98%E5%8C%96%E5%A4%A7%23&t=31&band_rank=49&Refer=top)
1. [龙餐馆 比我不是药神好十个抓娃娃](https://s.weibo.com//weibo?q=%E9%BE%99%E9%A4%90%E9%A6%86%20%E6%AF%94%E6%88%91%E4%B8%8D%E6%98%AF%E8%8D%AF%E7%A5%9E%E5%A5%BD%E5%8D%81%E4%B8%AA%E6%8A%93%E5%A8%83%E5%A8%83&t=31&band_rank=50&Refer=top)
1. [上海地铁停运](https://s.weibo.com//weibo?q=%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%81%9C%E8%BF%90&t=31&band_rank=5&Refer=top)
1. [龙餐馆 奥斯卡](https://s.weibo.com//weibo?q=%E9%BE%99%E9%A4%90%E9%A6%86%20%E5%A5%A5%E6%96%AF%E5%8D%A1&t=31&band_rank=7&Refer=top)
1. [朱一龙鼻子怎么了](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E9%BC%BB%E5%AD%90%E6%80%8E%E4%B9%88%E4%BA%86%23&t=31&band_rank=8&Refer=top)
1. [上海地铁明天4条线路全线停运](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E6%98%8E%E5%A4%A94%E6%9D%A1%E7%BA%BF%E8%B7%AF%E5%85%A8%E7%BA%BF%E5%81%9C%E8%BF%90%23&t=31&band_rank=12&Refer=top)
1. [婴儿快窒息时被小猫救下宝妈发声](https://s.weibo.com//weibo?q=%23%E5%A9%B4%E5%84%BF%E5%BF%AB%E7%AA%92%E6%81%AF%E6%97%B6%E8%A2%AB%E5%B0%8F%E7%8C%AB%E6%95%91%E4%B8%8B%E5%AE%9D%E5%A6%88%E5%8F%91%E5%A3%B0%23&t=31&band_rank=13&Refer=top)
1. [杭州交警建议明早提前一小时出门](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%BA%A4%E8%AD%A6%E5%BB%BA%E8%AE%AE%E6%98%8E%E6%97%A9%E6%8F%90%E5%89%8D%E4%B8%80%E5%B0%8F%E6%97%B6%E5%87%BA%E9%97%A8%23&t=31&band_rank=14&Refer=top)
1. [上海地铁](https://s.weibo.com//weibo?q=%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81&t=31&band_rank=15&Refer=top)
1. [人鱼](https://s.weibo.com//weibo?q=%E4%BA%BA%E9%B1%BC&t=31&band_rank=16&Refer=top)
1. [张凌赫还原谢征名台词](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%98%E5%8E%9F%E8%B0%A2%E5%BE%81%E5%90%8D%E5%8F%B0%E8%AF%8D%23&t=31&band_rank=17&Refer=top)
1. [易烊千玺工作室感谢百花奖认可](https://s.weibo.com//weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%84%9F%E8%B0%A2%E7%99%BE%E8%8A%B1%E5%A5%96%E8%AE%A4%E5%8F%AF%23&t=31&band_rank=18&Refer=top)
1. [浙江省甬江发生2026年第1号洪水](https://s.weibo.com//weibo?q=%E6%B5%99%E6%B1%9F%E7%9C%81%E7%94%AC%E6%B1%9F%E5%8F%91%E7%94%9F2026%E5%B9%B4%E7%AC%AC1%E5%8F%B7%E6%B4%AA%E6%B0%B4&t=31&band_rank=19&Refer=top)
1. [白海豚提前登陆](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%23&t=31&band_rank=20&Refer=top)
1. [印度女子出轨被撞破在院子内遭毒打](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E5%87%BA%E8%BD%A8%E8%A2%AB%E6%92%9E%E7%A0%B4%E5%9C%A8%E9%99%A2%E5%AD%90%E5%86%85%E9%81%AD%E6%AF%92%E6%89%93%23&t=31&band_rank=21&Refer=top)
1. [我每次陷入亲密关系的日常](https://s.weibo.com//weibo?q=%E6%88%91%E6%AF%8F%E6%AC%A1%E9%99%B7%E5%85%A5%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E7%9A%84%E6%97%A5%E5%B8%B8&t=31&band_rank=22&Refer=top)
1. [伊朗高层重要人事变动](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E6%9C%97%E9%AB%98%E5%B1%82%E9%87%8D%E8%A6%81%E4%BA%BA%E4%BA%8B%E5%8F%98%E5%8A%A8%23&t=31&band_rank=23&Refer=top)
1. [婴儿被子蒙头快窒息时小猫扒醒宝妈](https://s.weibo.com//weibo?q=%23%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%AD%90%E8%92%99%E5%A4%B4%E5%BF%AB%E7%AA%92%E6%81%AF%E6%97%B6%E5%B0%8F%E7%8C%AB%E6%89%92%E9%86%92%E5%AE%9D%E5%A6%88%23&t=31&band_rank=24&Refer=top)
1. [男孩1年暴长20厘米全身长满纹](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%A91%E5%B9%B4%E6%9A%B4%E9%95%BF20%E5%8E%98%E7%B1%B3%E5%85%A8%E8%BA%AB%E9%95%BF%E6%BB%A1%E7%BA%B9%23&t=31&band_rank=25&Refer=top)
1. [大家都走到职场的哪一步了](https://s.weibo.com//weibo?q=%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%B5%B0%E5%88%B0%E8%81%8C%E5%9C%BA%E7%9A%84%E5%93%AA%E4%B8%80%E6%AD%A5%E4%BA%86&t=31&band_rank=26&Refer=top)
1. [宋亚轩IP在浙江](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9IP%E5%9C%A8%E6%B5%99%E6%B1%9F%23&t=31&band_rank=27&Refer=top)
1. [患者走了医生躲角落哭半小时](https://s.weibo.com//weibo?q=%E6%82%A3%E8%80%85%E8%B5%B0%E4%BA%86%E5%8C%BB%E7%94%9F%E8%BA%B2%E8%A7%92%E8%90%BD%E5%93%AD%E5%8D%8A%E5%B0%8F%E6%97%B6&t=31&band_rank=28&Refer=top)
1. [迪丽热巴素颜香港plog](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E9%A2%9C%E9%A6%99%E6%B8%AFplog%23&t=31&band_rank=29&Refer=top)
1. [母亲看自闭症孩子独自玩耍情绪失控](https://s.weibo.com//weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%9C%8B%E8%87%AA%E9%97%AD%E7%97%87%E5%AD%A9%E5%AD%90%E7%8B%AC%E8%87%AA%E7%8E%A9%E8%80%8D%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23&t=31&band_rank=30&Refer=top)
1. [江波龙定增溢价45%投资者炸锅](https://s.weibo.com//weibo?q=%23%E6%B1%9F%E6%B3%A2%E9%BE%99%E5%AE%9A%E5%A2%9E%E6%BA%A2%E4%BB%B745%25%E6%8A%95%E8%B5%84%E8%80%85%E7%82%B8%E9%94%85%23&t=31&band_rank=31&Refer=top)
1. [鉴定3个孩子非亲生奶奶仍想接手抚养](https://s.weibo.com//weibo?q=%23%E9%89%B4%E5%AE%9A3%E4%B8%AA%E5%AD%A9%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B6%E5%A5%B6%E4%BB%8D%E6%83%B3%E6%8E%A5%E6%89%8B%E6%8A%9A%E5%85%BB%23&t=31&band_rank=32&Refer=top)
1. [医疗垃圾 手机壳](https://s.weibo.com//weibo?q=%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%20%E6%89%8B%E6%9C%BA%E5%A3%B3&t=31&band_rank=33&Refer=top)
1. [百花奖最佳女配角提名片段](https://s.weibo.com//weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%E8%A7%92%E6%8F%90%E5%90%8D%E7%89%87%E6%AE%B5%23&t=31&band_rank=34&Refer=top)
1. [杨幂对接确认出席百花奖颁奖典礼](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E5%B9%82%E5%AF%B9%E6%8E%A5%E7%A1%AE%E8%AE%A4%E5%87%BA%E5%B8%AD%E7%99%BE%E8%8A%B1%E5%A5%96%E9%A2%81%E5%A5%96%E5%85%B8%E7%A4%BC%23&t=31&band_rank=35&Refer=top)
1. [南京 弹性办公](https://s.weibo.com//weibo?q=%E5%8D%97%E4%BA%AC%20%E5%BC%B9%E6%80%A7%E5%8A%9E%E5%85%AC&t=31&band_rank=36&Refer=top)
1. [南京地铁](https://s.weibo.com//weibo?q=%E5%8D%97%E4%BA%AC%E5%9C%B0%E9%93%81&t=31&band_rank=37&Refer=top)
1. [白海豚减弱为台风级](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%87%8F%E5%BC%B1%E4%B8%BA%E5%8F%B0%E9%A3%8E%E7%BA%A7%23&t=31&band_rank=38&Refer=top)
1. [深圳飞无锡航班起飞遭雷击延误3小时](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%A3%9E%E6%97%A0%E9%94%A1%E8%88%AA%E7%8F%AD%E8%B5%B7%E9%A3%9E%E9%81%AD%E9%9B%B7%E5%87%BB%E5%BB%B6%E8%AF%AF3%E5%B0%8F%E6%97%B6%23&t=31&band_rank=39&Refer=top)
1. [男子回应给拾荒老人点烧烤被扔垃圾桶](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E7%BB%99%E6%8B%BE%E8%8D%92%E8%80%81%E4%BA%BA%E7%82%B9%E7%83%A7%E7%83%A4%E8%A2%AB%E6%89%94%E5%9E%83%E5%9C%BE%E6%A1%B6%23&t=31&band_rank=40&Refer=top)
1. [自闭症哥哥的话唠妹妹堪比心理医生](https://s.weibo.com//weibo?q=%E8%87%AA%E9%97%AD%E7%97%87%E5%93%A5%E5%93%A5%E7%9A%84%E8%AF%9D%E5%94%A0%E5%A6%B9%E5%A6%B9%E5%A0%AA%E6%AF%94%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F&t=31&band_rank=41&Refer=top)
1. [自驾3个月活得原始又低级](https://s.weibo.com//weibo?q=%E8%87%AA%E9%A9%BE3%E4%B8%AA%E6%9C%88%E6%B4%BB%E5%BE%97%E5%8E%9F%E5%A7%8B%E5%8F%88%E4%BD%8E%E7%BA%A7&t=31&band_rank=42&Refer=top)
1. [白鲨CF双料冠军](https://s.weibo.com//weibo?q=%E7%99%BD%E9%B2%A8CF%E5%8F%8C%E6%96%99%E5%86%A0%E5%86%9B&t=31&band_rank=43&Refer=top)
1. [婚外胚胎案原配痛心男方变化大](https://s.weibo.com//weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E7%97%9B%E5%BF%83%E7%94%B7%E6%96%B9%E5%8F%98%E5%8C%96%E5%A4%A7%23&t=31&band_rank=44&Refer=top)
1. [仙逆动画](https://s.weibo.com//weibo?q=%E4%BB%99%E9%80%86%E5%8A%A8%E7%94%BB&t=31&band_rank=45&Refer=top)
1. [龙餐馆 比我不是药神好十个抓娃娃](https://s.weibo.com//weibo?q=%E9%BE%99%E9%A4%90%E9%A6%86%20%E6%AF%94%E6%88%91%E4%B8%8D%E6%98%AF%E8%8D%AF%E7%A5%9E%E5%A5%BD%E5%8D%81%E4%B8%AA%E6%8A%93%E5%A8%83%E5%A8%83&t=31&band_rank=46&Refer=top)
1. [台风白海豚过境迪士尼变水上乐园](https://s.weibo.com//weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E8%BF%87%E5%A2%83%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%8F%98%E6%B0%B4%E4%B8%8A%E4%B9%90%E5%9B%AD%23&t=31&band_rank=47&Refer=top)
1. [耳机左右耳电量未解之谜](https://s.weibo.com//weibo?q=%E8%80%B3%E6%9C%BA%E5%B7%A6%E5%8F%B3%E8%80%B3%E7%94%B5%E9%87%8F%E6%9C%AA%E8%A7%A3%E4%B9%8B%E8%B0%9C&t=31&band_rank=48&Refer=top)
1. [半熟恋人](https://s.weibo.com//weibo?q=%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA&t=31&band_rank=49&Refer=top)
1. [阿森纳vs多特蒙德](https://s.weibo.com//weibo?q=%E9%98%BF%E6%A3%AE%E7%BA%B3vs%E5%A4%9A%E7%89%B9%E8%92%99%E5%BE%B7&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
