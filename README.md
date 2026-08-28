# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-28 04:32:48

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
<!-- 最后更新时间 Fri Aug 28 2026 06:33:28 GMT+0800 (China Standard Time) -->

1. [国防部：要求美方立即停止武装台湾](https://so.toutiao.com/search?keyword=国防部：要求美方立即停止武装台湾)
1. [赵心童登顶世界第一](https://so.toutiao.com/search?keyword=赵心童登顶世界第一)
1. [全力搜寻吉隆泥石流失联人员](https://so.toutiao.com/search?keyword=全力搜寻吉隆泥石流失联人员)
1. [结婚8年3女非亲生当事人首次露脸](https://so.toutiao.com/search?keyword=结婚8年3女非亲生当事人首次露脸)
1. [专家：油价长期下行趋势很难改变](https://so.toutiao.com/search?keyword=专家：油价长期下行趋势很难改变)
1. [散步是“延寿”运动第一名](https://so.toutiao.com/search?keyword=散步是“延寿”运动第一名)
1. [江西省省长叶建春被查](https://so.toutiao.com/search?keyword=江西省省长叶建春被查)
1. [为何越来越多城里人开始自己种菜](https://so.toutiao.com/search?keyword=为何越来越多城里人开始自己种菜)
1. [汗血宝马满地打滚 外籍记者看呆了](https://so.toutiao.com/search?keyword=汗血宝马满地打滚%20外籍记者看呆了)
1. [人民日报评企业批量劝退应届生](https://so.toutiao.com/search?keyword=人民日报评企业批量劝退应届生)
1. [四川泸州近期发生山火？不实](https://so.toutiao.com/search?keyword=四川泸州近期发生山火？不实)
1. [尼泊尔山洪死亡人数升至359人](https://so.toutiao.com/search?keyword=尼泊尔山洪死亡人数升至359人)
1. [男子出轨女邻居并住其家中](https://so.toutiao.com/search?keyword=男子出轨女邻居并住其家中)
1. [何炅自曝断交的人不超过4个](https://so.toutiao.com/search?keyword=何炅自曝断交的人不超过4个)
1. [中方：尼泊尔一侧失联中国公民近百人](https://so.toutiao.com/search?keyword=中方：尼泊尔一侧失联中国公民近百人)
1. [男子打水漂一发入魂 超1亿网友围观](https://so.toutiao.com/search?keyword=男子打水漂一发入魂%20超1亿网友围观)
1. [一家五口在重庆误入立交桥获暖心救助](https://so.toutiao.com/search?keyword=一家五口在重庆误入立交桥获暖心救助)
1. [西藏吉隆受灾前后对比图](https://so.toutiao.com/search?keyword=西藏吉隆受灾前后对比图)
1. [店内离世老人儿子道歉](https://so.toutiao.com/search?keyword=店内离世老人儿子道歉)
1. [父母公证赠女儿295万 离婚时女婿要分](https://so.toutiao.com/search?keyword=父母公证赠女儿295万%20离婚时女婿要分)
1. [“买断”刘翔需要多少钱](https://so.toutiao.com/search?keyword=“买断”刘翔需要多少钱)
1. [西藏泥石流灾害核心区画面曝光](https://so.toutiao.com/search?keyword=西藏泥石流灾害核心区画面曝光)
1. [妻旅第2季四对夫妻两对离婚](https://so.toutiao.com/search?keyword=妻旅第2季四对夫妻两对离婚)
1. [刘翔求助背后：旧时代英雄新时代困境](https://so.toutiao.com/search?keyword=刘翔求助背后：旧时代英雄新时代困境)
1. [西藏泥石流3人遇难558人失联](https://so.toutiao.com/search?keyword=西藏泥石流3人遇难558人失联)
1. [集中销毁烟花致570多户村民房屋受损](https://so.toutiao.com/search?keyword=集中销毁烟花致570多户村民房屋受损)
1. [男子带亲属“捉奸”殴打男方获刑](https://so.toutiao.com/search?keyword=男子带亲属“捉奸”殴打男方获刑)
1. [36岁合肥市民模仿沈腾走红](https://so.toutiao.com/search?keyword=36岁合肥市民模仿沈腾走红)
1. [杭州“兔子警官”回应有MCN机构找她](https://so.toutiao.com/search?keyword=杭州“兔子警官”回应有MCN机构找她)
1. [曝马斯克黄仁勋等将出席G20科技会议](https://so.toutiao.com/search?keyword=曝马斯克黄仁勋等将出席G20科技会议)
1. [清美副教授航天员画作引争议](https://so.toutiao.com/search?keyword=清美副教授航天员画作引争议)
1. [印度14岁男孩洗澡遭野猪生扑跳河](https://so.toutiao.com/search?keyword=印度14岁男孩洗澡遭野猪生扑跳河)
1. [国防部：台澎金马是中国的一部分](https://so.toutiao.com/search?keyword=国防部：台澎金马是中国的一部分)
1. [香港警方通报68岁老人掌掴5岁女童](https://so.toutiao.com/search?keyword=香港警方通报68岁老人掌掴5岁女童)
1. [叶建春被查 江西省委：引以为戒](https://so.toutiao.com/search?keyword=叶建春被查%20江西省委：引以为戒)
1. [哈工大自研造出8英寸金刚石](https://so.toutiao.com/search?keyword=哈工大自研造出8英寸金刚石)
1. [高盛：黄金是西方投资者“小众资产”](https://so.toutiao.com/search?keyword=高盛：黄金是西方投资者“小众资产”)
1. [17岁抗癌博主卢明霞去世](https://so.toutiao.com/search?keyword=17岁抗癌博主卢明霞去世)
1. [中芯国际上半年归母净利润44.67亿元](https://so.toutiao.com/search?keyword=中芯国际上半年归母净利润44.67亿元)
1. [刘亦菲为何无缘金鹰奖提名](https://so.toutiao.com/search?keyword=刘亦菲为何无缘金鹰奖提名)
1. [研究：侵华日军曾用日本士兵做实验](https://so.toutiao.com/search?keyword=研究：侵华日军曾用日本士兵做实验)
1. [越南又设一批直辖市](https://so.toutiao.com/search?keyword=越南又设一批直辖市)
1. [童星歌手徐杰因肝病离世年仅29岁](https://so.toutiao.com/search?keyword=童星歌手徐杰因肝病离世年仅29岁)
1. [扶老人被索赔1.9万店主收到全额退款](https://so.toutiao.com/search?keyword=扶老人被索赔1.9万店主收到全额退款)
1. [博主：阉割版阵风战机让埃及有苦难言](https://so.toutiao.com/search?keyword=博主：阉割版阵风战机让埃及有苦难言)
1. [国防部回应菲非法坐滩仁爱礁](https://so.toutiao.com/search?keyword=国防部回应菲非法坐滩仁爱礁)
1. [折叠屏iPhone9月10日将亮相](https://so.toutiao.com/search?keyword=折叠屏iPhone9月10日将亮相)
1. [在菲绑架团伙头目邱某某被遣返回国](https://so.toutiao.com/search?keyword=在菲绑架团伙头目邱某某被遣返回国)
1. [吉隆泥石流为何破坏性这么大](https://so.toutiao.com/search?keyword=吉隆泥石流为何破坏性这么大)
1. [加拿大对美反制为何避开钾肥等产品](https://so.toutiao.com/search?keyword=加拿大对美反制为何避开钾肥等产品)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Aug 28 2026 13:22:14 GMT+0800 (China Standard Time) -->

1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [刘翔向网友求助职场选择](https://www.zhihu.com/search?q=%E5%88%98%E7%BF%94%E5%90%91%E7%BD%91%E5%8F%8B%E6%B1%82%E5%8A%A9%E8%81%8C%E5%9C%BA%E9%80%89%E6%8B%A9)
1. [包贝尔被曝酒店出轨](https://www.zhihu.com/search?q=%E5%8C%85%E8%B4%9D%E5%B0%94%E8%A2%AB%E6%9B%9D%E9%85%92%E5%BA%97%E5%87%BA%E8%BD%A8)
1. [Zhihu CLI 功能上新](https://www.zhihu.com/search?q=Zhihu%20CLI%20%E5%8A%9F%E8%83%BD%E4%B8%8A%E6%96%B0)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [中国博士人数疑超驴存栏量](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E5%8D%9A%E5%A3%AB%E4%BA%BA%E6%95%B0%E7%96%91%E8%B6%85%E9%A9%B4%E5%AD%98%E6%A0%8F%E9%87%8F)
1. [中国女生在韩失联已遇害](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%B7%B2%E9%81%87%E5%AE%B3)
1. [星宇股份劝退应届生补偿方案](https://www.zhihu.com/search?q=%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F%E8%A1%A5%E5%81%BF%E6%96%B9%E6%A1%88)
1. [星宇股份裁应届生疑被告到欧盟](https://www.zhihu.com/search?q=%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%A3%81%E5%BA%94%E5%B1%8A%E7%94%9F%E7%96%91%E8%A2%AB%E5%91%8A%E5%88%B0%E6%AC%A7%E7%9B%9F)
1. [粥饼伦天津店因房租暴涨暂停营业](https://www.zhihu.com/search?q=%E7%B2%A5%E9%A5%BC%E4%BC%A6%E5%A4%A9%E6%B4%A5%E5%BA%97%E5%9B%A0%E6%88%BF%E7%A7%9F%E6%9A%B4%E6%B6%A8%E6%9A%82%E5%81%9C%E8%90%A5%E4%B8%9A)
1. [成都蛋烘糕奶奶被镜头霸凌](https://www.zhihu.com/search?q=%E6%88%90%E9%83%BD%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%E8%A2%AB%E9%95%9C%E5%A4%B4%E9%9C%B8%E5%87%8C)
1. [德芙七夕营销翻车](https://www.zhihu.com/search?q=%E5%BE%B7%E8%8A%99%E4%B8%83%E5%A4%95%E8%90%A5%E9%94%80%E7%BF%BB%E8%BD%A6)
1. [孙宇晨起诉景甜](https://www.zhihu.com/search?q=%E5%AD%99%E5%AE%87%E6%99%A8%E8%B5%B7%E8%AF%89%E6%99%AF%E7%94%9C)
1. [日本艺术家草间弥生去世](https://www.zhihu.com/search?q=%E6%97%A5%E6%9C%AC%E8%89%BA%E6%9C%AF%E5%AE%B6%E8%8D%89%E9%97%B4%E5%BC%A5%E7%94%9F%E5%8E%BB%E4%B8%96)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Aug 28 2026 04:32:48 GMT+0800 (China Standard Time) -->

1. [100 多家上市公司将补缴税款总额达 77 亿，如何看待「金税四期」对企业合规成本的影响？](https://www.zhihu.com/question/2076245086363283700)
1. [西藏吉隆泥石流由高位冰崩引发，这类灾害在监控和预警上有哪些难点？全球变暖背景下这类灾害会更频发吗？](https://www.zhihu.com/question/2076314353272190500)
1. [宗馥莉旗下啵啵汽水铺销售遇冷，直播62场销售额不足10万，为什么会遇冷？其自有品牌前景如何？](https://www.zhihu.com/question/2076237750362005500)
1. [英伟达同意以 129 亿美元收购 Hugging Face，如何看待这一举措？](https://www.zhihu.com/question/2076264970849711600)
1. [汽车仪表盘误差，必须上浮10%-20%才是真实速度，这样的隐性知识是怎么流传出来的？](https://www.zhihu.com/question/2075570200771151600)
1. [许诺孩子如果考年级前十，就给他买个苹果手机，孩子这次考试年级第十，要不要买？](https://www.zhihu.com/question/2075707445230552000)
1. [《源初之结》是不是宣告米哈游走出舒适区了？](https://www.zhihu.com/question/2076220720288371700)
1. [「请 3 天假休 13 天」模式走红，透露出当代人怎样的休假观念？](https://www.zhihu.com/question/2075728277612802300)
1. [买完正版Minecraft以后可以玩些什么？](https://www.zhihu.com/question/665009481)
1. [《凡人修仙传》动漫是否已经被毁了？](https://www.zhihu.com/question/2074995204373878000)
1. [如何看待恒大 1.03 亿债权组合包拍卖以 14 万成交？对购房者、供应链上下游等会产生哪些连锁影响？](https://www.zhihu.com/question/2075992901184480500)
1. [尼泊尔山洪死亡人数升至 359 人，有 910 人失联，目前当地情况怎么样？](https://www.zhihu.com/question/2076209729705965000)
1. [deepseek-harness 的热度这么快过去了吗？](https://www.zhihu.com/question/2073031817049925000)
1. [为什么有人说逻辑就是拓扑？](https://www.zhihu.com/question/13067177307)
1. [俄媒曝 30 多个国家将在俄乌停火达成后立即向乌克兰派兵，此举将如何影响俄乌冲突局势？](https://www.zhihu.com/question/2075675774821086200)
1. [网友扒出星宇股份裁应届生被告到欧盟了，是真的吗？会对其造成什么影响？](https://www.zhihu.com/question/2076340228973750000)
1. [同样老师同样课堂，孩子学习差距巨大，教育真的能抹平天赋差距吗？](https://www.zhihu.com/question/2074813538300867000)
1. [新修版黄药师只爱梅超风，不爱冯蘅母女你们是怎么理解的？](https://www.zhihu.com/question/484054930)
1. [为什么身边的中年男人不是热衷炒股，就是热衷钓鱼？](https://www.zhihu.com/question/1908287806243046400)
1. [《剑网三》制作人郭炜炜正式离职西山居，为什么他会选择在此时卸任CEO，这将会带来什么影响？](https://www.zhihu.com/question/2076341389319849500)
1. [你认为刘翔和上海体育局这次的矛盾最终会如何收场，为什么，双方的诉求存在调和的可能吗？](https://www.zhihu.com/question/2076094940300273000)
1. [西藏日喀则吉隆口岸发生泥石流，致 3 人遇难 558 人失联，有建筑被掩埋，目前情况如何？](https://www.zhihu.com/question/2075969425702741200)
1. [90后、00后甚至10后的大家，对中元节现在是什么印象？](https://www.zhihu.com/question/2074482766285227300)
1. [在日常生活中，为什么有些人特别有魅力，是哪些特质吸引了你？](https://www.zhihu.com/question/2063300709316040400)
1. [如何去培养一个性格好，情绪稳定的孩子？](https://www.zhihu.com/question/2074786948573574400)
1. [为什么当我们向身边人袒露抑郁或精神困境时，收到的往往是“别想太多”，而不是真正的被看见？](https://www.zhihu.com/question/2073178368351195400)
1. [为什么看不到男人四五个人结伴一起去旅行的？](https://www.zhihu.com/question/2074380142697244000)
1. [帮扶老人被索赔事件，店主已收到老人家属 1.9 万全额退款，怎样看待这一结果？](https://www.zhihu.com/question/2076281057649718300)
1. [如果你的孩子参加工作了，你会问跟他/她要钱吗？](https://www.zhihu.com/question/2073685240342696400)
1. [Anthropic预计IPO后的潜在收入超30万亿，超越SpaceX上市前市场预期，对此你怎么看？](https://www.zhihu.com/question/2075925482827150800)

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
<!-- 最后更新时间 Fri Aug 28 2026 04:37:20 GMT+0800 (China Standard Time) -->

1. [当务之急是千方百计搜救失联人员](https://s.weibo.com//weibo?q=%23%E5%BD%93%E5%8A%A1%E4%B9%8B%E6%80%A5%E6%98%AF%E5%8D%83%E6%96%B9%E7%99%BE%E8%AE%A1%E6%90%9C%E6%95%91%E5%A4%B1%E8%81%94%E4%BA%BA%E5%91%98%23&Refer=new_time)
1. [有事没事就庆祝一下的家族](https://s.weibo.com//weibo?q=%E6%9C%89%E4%BA%8B%E6%B2%A1%E4%BA%8B%E5%B0%B1%E5%BA%86%E7%A5%9D%E4%B8%80%E4%B8%8B%E7%9A%84%E5%AE%B6%E6%97%8F&t=31&band_rank=1&Refer=top)
1. [台风](https://s.weibo.com//weibo?q=%E5%8F%B0%E9%A3%8E&t=31&band_rank=2&Refer=top)
1. [从绿色算力到词元经济](https://s.weibo.com//weibo?q=%23%E4%BB%8E%E7%BB%BF%E8%89%B2%E7%AE%97%E5%8A%9B%E5%88%B0%E8%AF%8D%E5%85%83%E7%BB%8F%E6%B5%8E%23&t=31&band_rank=3&Refer=top)
1. [欧冠抽签](https://s.weibo.com//weibo?q=%23%E6%AC%A7%E5%86%A0%E6%8A%BD%E7%AD%BE%23&t=31&band_rank=4&Refer=top)
1. [中国男篮vs卡塔尔男篮](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E5%8D%A1%E5%A1%94%E5%B0%94%E7%94%B7%E7%AF%AE&t=31&band_rank=5&Refer=top)
1. [郑钦文vs普里丹金娜](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E6%99%AE%E9%87%8C%E4%B8%B9%E9%87%91%E5%A8%9C%23&t=31&band_rank=6&Refer=top)
1. [小边牧到家第一天就开始牧猫了](https://s.weibo.com//weibo?q=%E5%B0%8F%E8%BE%B9%E7%89%A7%E5%88%B0%E5%AE%B6%E7%AC%AC%E4%B8%80%E5%A4%A9%E5%B0%B1%E5%BC%80%E5%A7%8B%E7%89%A7%E7%8C%AB%E4%BA%86&t=31&band_rank=7&Refer=top)
1. [普拉提原来这么不体面啊](https://s.weibo.com//weibo?q=%E6%99%AE%E6%8B%89%E6%8F%90%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E4%B8%8D%E4%BD%93%E9%9D%A2%E5%95%8A&t=31&band_rank=8&Refer=top)
1. [花少2被称第五大名著](https://s.weibo.com//weibo?q=%E8%8A%B1%E5%B0%912%E8%A2%AB%E7%A7%B0%E7%AC%AC%E4%BA%94%E5%A4%A7%E5%90%8D%E8%91%97&t=31&band_rank=9&Refer=top)
1. [赵心童登顶世界第一](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23&t=31&band_rank=10&Refer=top)
1. [90后亿万富翁孙宇晨商业版图](https://s.weibo.com//weibo?q=%2390%E5%90%8E%E4%BA%BF%E4%B8%87%E5%AF%8C%E7%BF%81%E5%AD%99%E5%AE%87%E6%99%A8%E5%95%86%E4%B8%9A%E7%89%88%E5%9B%BE%23&t=31&band_rank=11&Refer=top)
1. [西藏吉隆泥石流救援](https://s.weibo.com//weibo?q=%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%95%91%E6%8F%B4&t=31&band_rank=12&Refer=top)
1. [尼泊尔山洪359人死亡910人失联](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA359%E4%BA%BA%E6%AD%BB%E4%BA%A1910%E4%BA%BA%E5%A4%B1%E8%81%94%23&t=31&band_rank=13&Refer=top)
1. [孙宇晨曾拍下巴菲特的午餐](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%AE%87%E6%99%A8%E6%9B%BE%E6%8B%8D%E4%B8%8B%E5%B7%B4%E8%8F%B2%E7%89%B9%E7%9A%84%E5%8D%88%E9%A4%90%23&t=31&band_rank=14&Refer=top)
1. [柳州地震](https://s.weibo.com//weibo?q=%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87&t=31&band_rank=15&Refer=top)
1. [台湾高中语文露骨内容引争议](https://s.weibo.com//weibo?q=%E5%8F%B0%E6%B9%BE%E9%AB%98%E4%B8%AD%E8%AF%AD%E6%96%87%E9%9C%B2%E9%AA%A8%E5%86%85%E5%AE%B9%E5%BC%95%E4%BA%89%E8%AE%AE&t=31&band_rank=16&Refer=top)
1. [金鹰奖延期](https://s.weibo.com//weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%BB%B6%E6%9C%9F%23&t=31&band_rank=17&Refer=top)
1. [佳偶天成回款2.51亿](https://s.weibo.com//weibo?q=%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E5%9B%9E%E6%AC%BE2.51%E4%BA%BF&t=31&band_rank=18&Refer=top)
1. [9岁儿子疯狂沉迷手机单亲妈妈急哭](https://s.weibo.com//weibo?q=%239%E5%B2%81%E5%84%BF%E5%AD%90%E7%96%AF%E7%8B%82%E6%B2%89%E8%BF%B7%E6%89%8B%E6%9C%BA%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E6%80%A5%E5%93%AD%23&t=31&band_rank=19&Refer=top)
1. [9岁男孩小区内遭垃圾车碾轧身亡](https://s.weibo.com//weibo?q=%239%E5%B2%81%E7%94%B7%E5%AD%A9%E5%B0%8F%E5%8C%BA%E5%86%85%E9%81%AD%E5%9E%83%E5%9C%BE%E8%BD%A6%E7%A2%BE%E8%BD%A7%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=20&Refer=top)
1. [西藏吉隆泥石流](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%23&t=31&band_rank=21&Refer=top)
1. [清华美院 丑画](https://s.weibo.com//weibo?q=%E6%B8%85%E5%8D%8E%E7%BE%8E%E9%99%A2%20%E4%B8%91%E7%94%BB&t=31&band_rank=22&Refer=top)
1. [台风沙德尔](https://s.weibo.com//weibo?q=%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94&t=31&band_rank=23&Refer=top)
1. [西藏吉隆口岸最新航拍画面](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%9C%80%E6%96%B0%E8%88%AA%E6%8B%8D%E7%94%BB%E9%9D%A2%23&t=31&band_rank=24&Refer=top)
1. [尼泊尔网友拍到泥石流冲断大桥](https://s.weibo.com//weibo?q=%E5%B0%BC%E6%B3%8A%E5%B0%94%E7%BD%91%E5%8F%8B%E6%8B%8D%E5%88%B0%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%86%B2%E6%96%AD%E5%A4%A7%E6%A1%A5&t=31&band_rank=25&Refer=top)
1. [送人离开要等对方看不到你才走](https://s.weibo.com//weibo?q=%E9%80%81%E4%BA%BA%E7%A6%BB%E5%BC%80%E8%A6%81%E7%AD%89%E5%AF%B9%E6%96%B9%E7%9C%8B%E4%B8%8D%E5%88%B0%E4%BD%A0%E6%89%8D%E8%B5%B0&t=31&band_rank=26&Refer=top)
1. [你永远斗不过一个读了王阳明的女生](https://s.weibo.com//weibo?q=%E4%BD%A0%E6%B0%B8%E8%BF%9C%E6%96%97%E4%B8%8D%E8%BF%87%E4%B8%80%E4%B8%AA%E8%AF%BB%E4%BA%86%E7%8E%8B%E9%98%B3%E6%98%8E%E7%9A%84%E5%A5%B3%E7%94%9F&t=31&band_rank=27&Refer=top)
1. [上海武术院 财政拨款](https://s.weibo.com//weibo?q=%E4%B8%8A%E6%B5%B7%E6%AD%A6%E6%9C%AF%E9%99%A2%20%E8%B4%A2%E6%94%BF%E6%8B%A8%E6%AC%BE&t=31&band_rank=28&Refer=top)
1. [尼泊尔冰崩7分钟到西藏吉隆](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%86%B0%E5%B4%A97%E5%88%86%E9%92%9F%E5%88%B0%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%23&t=31&band_rank=29&Refer=top)
1. [西藏泥石流遇难3人失联558人](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE3%E4%BA%BA%E5%A4%B1%E8%81%94558%E4%BA%BA%23&t=31&band_rank=30&Refer=top)
1. [越用codex越觉得可怕](https://s.weibo.com//weibo?q=%E8%B6%8A%E7%94%A8codex%E8%B6%8A%E8%A7%89%E5%BE%97%E5%8F%AF%E6%80%95&t=31&band_rank=31&Refer=top)
1. [如果没有探头根本不会相信](https://s.weibo.com//weibo?q=%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E6%8E%A2%E5%A4%B4%E6%A0%B9%E6%9C%AC%E4%B8%8D%E4%BC%9A%E7%9B%B8%E4%BF%A1&t=31&band_rank=32&Refer=top)
1. [翼龙无人机传回泥石流灾区高清画面](https://s.weibo.com//weibo?q=%23%E7%BF%BC%E9%BE%99%E6%97%A0%E4%BA%BA%E6%9C%BA%E4%BC%A0%E5%9B%9E%E6%B3%A5%E7%9F%B3%E6%B5%81%E7%81%BE%E5%8C%BA%E9%AB%98%E6%B8%85%E7%94%BB%E9%9D%A2%23&t=31&band_rank=33&Refer=top)
1. [22岁女生患不宁腿综合征](https://s.weibo.com//weibo?q=%2322%E5%B2%81%E5%A5%B3%E7%94%9F%E6%82%A3%E4%B8%8D%E5%AE%81%E8%85%BF%E7%BB%BC%E5%90%88%E5%BE%81%23&t=31&band_rank=34&Refer=top)
1. [千万不要纠正孩子的这五个习惯](https://s.weibo.com//weibo?q=%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%BA%A0%E6%AD%A3%E5%AD%A9%E5%AD%90%E7%9A%84%E8%BF%99%E4%BA%94%E4%B8%AA%E4%B9%A0%E6%83%AF&t=31&band_rank=35&Refer=top)
1. [什么行为会让人好感度暴跌](https://s.weibo.com//weibo?q=%E4%BB%80%E4%B9%88%E8%A1%8C%E4%B8%BA%E4%BC%9A%E8%AE%A9%E4%BA%BA%E5%A5%BD%E6%84%9F%E5%BA%A6%E6%9A%B4%E8%B7%8C&t=31&band_rank=36&Refer=top)
1. [一定要选择跟有情有义的人交往](https://s.weibo.com//weibo?q=%E4%B8%80%E5%AE%9A%E8%A6%81%E9%80%89%E6%8B%A9%E8%B7%9F%E6%9C%89%E6%83%85%E6%9C%89%E4%B9%89%E7%9A%84%E4%BA%BA%E4%BA%A4%E5%BE%80&t=31&band_rank=37&Refer=top)
1. [香港警方通报68岁老人掌掴5岁女童](https://s.weibo.com//weibo?q=%23%E9%A6%99%E6%B8%AF%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A568%E5%B2%81%E8%80%81%E4%BA%BA%E6%8E%8C%E6%8E%B45%E5%B2%81%E5%A5%B3%E7%AB%A5%23&t=31&band_rank=38&Refer=top)
1. [兔子警官回应辅警身份争议](https://s.weibo.com//weibo?q=%23%E5%85%94%E5%AD%90%E8%AD%A6%E5%AE%98%E5%9B%9E%E5%BA%94%E8%BE%85%E8%AD%A6%E8%BA%AB%E4%BB%BD%E4%BA%89%E8%AE%AE%23&t=31&band_rank=39&Refer=top)
1. [尼泊尔10年超1400人因山洪遇难](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%9410%E5%B9%B4%E8%B6%851400%E4%BA%BA%E5%9B%A0%E5%B1%B1%E6%B4%AA%E9%81%87%E9%9A%BE%23&t=31&band_rank=40&Refer=top)
1. [女子生下4胞胎丈夫感慨省了几十万](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E4%B8%8B4%E8%83%9E%E8%83%8E%E4%B8%88%E5%A4%AB%E6%84%9F%E6%85%A8%E7%9C%81%E4%BA%86%E5%87%A0%E5%8D%81%E4%B8%87%23&t=31&band_rank=41&Refer=top)
1. [乐山一男孩小区玩耍被垃圾车撞亡](https://s.weibo.com//weibo?q=%23%E4%B9%90%E5%B1%B1%E4%B8%80%E7%94%B7%E5%AD%A9%E5%B0%8F%E5%8C%BA%E7%8E%A9%E8%80%8D%E8%A2%AB%E5%9E%83%E5%9C%BE%E8%BD%A6%E6%92%9E%E4%BA%A1%23&t=31&band_rank=42&Refer=top)
1. [井柏然孙千半裸疗伤海报](https://s.weibo.com//weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E5%8D%8A%E8%A3%B8%E7%96%97%E4%BC%A4%E6%B5%B7%E6%8A%A5%23&t=31&band_rank=43&Refer=top)
1. [卖黄金不赚钱了](https://s.weibo.com//weibo?q=%23%E5%8D%96%E9%BB%84%E9%87%91%E4%B8%8D%E8%B5%9A%E9%92%B1%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [央视网再评湖南扶老人被索赔事件](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E5%86%8D%E8%AF%84%E6%B9%96%E5%8D%97%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%94%E4%BA%8B%E4%BB%B6%23&t=31&band_rank=45&Refer=top)
1. [两兄妹被蜂群蜇亡父亲最新发声](https://s.weibo.com//weibo?q=%23%E4%B8%A4%E5%85%84%E5%A6%B9%E8%A2%AB%E8%9C%82%E7%BE%A4%E8%9C%87%E4%BA%A1%E7%88%B6%E4%BA%B2%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23&t=31&band_rank=46&Refer=top)
1. [B站业绩](https://s.weibo.com//weibo?q=%23B%E7%AB%99%E4%B8%9A%E7%BB%A9%23&t=31&band_rank=47&Refer=top)
1. [KPL十年十大年度记忆人物](https://s.weibo.com//weibo?q=%23KPL%E5%8D%81%E5%B9%B4%E5%8D%81%E5%A4%A7%E5%B9%B4%E5%BA%A6%E8%AE%B0%E5%BF%86%E4%BA%BA%E7%89%A9%23&t=31&band_rank=48&Refer=top)
1. [蔚来最出圈的功能是实习生做的](https://s.weibo.com//weibo?q=%23%E8%94%9A%E6%9D%A5%E6%9C%80%E5%87%BA%E5%9C%88%E7%9A%84%E5%8A%9F%E8%83%BD%E6%98%AF%E5%AE%9E%E4%B9%A0%E7%94%9F%E5%81%9A%E7%9A%84%23&t=31&band_rank=49&Refer=top)
1. [吉隆受灾害影响群众完成安置](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%97%E7%81%BE%E5%AE%B3%E5%BD%B1%E5%93%8D%E7%BE%A4%E4%BC%97%E5%AE%8C%E6%88%90%E5%AE%89%E7%BD%AE%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
