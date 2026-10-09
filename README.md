# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-10 04:59:32

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
<!-- 最后更新时间 Sat Oct 10 2026 05:13:25 GMT+0800 (China Standard Time) -->

1. [李子坝地下33米藏一亿现钞](https://so.toutiao.com/search?keyword=李子坝地下33米藏一亿现钞)
1. [郭晶晶获授荣誉院士霍启刚直言骄傲](https://so.toutiao.com/search?keyword=郭晶晶获授荣誉院士霍启刚直言骄傲)
1. [走进长征展览，一起重温“伟大远征”](https://so.toutiao.com/search?keyword=走进长征展览，一起重温“伟大远征”)
1. [女局长被指出轨多人 当地成立调查组](https://so.toutiao.com/search?keyword=女局长被指出轨多人%20当地成立调查组)
1. [马斯克称未来金钱可能不再重要](https://so.toutiao.com/search?keyword=马斯克称未来金钱可能不再重要)
1. [大英博物馆两件康熙时期青花瓷遭损坏](https://so.toutiao.com/search?keyword=大英博物馆两件康熙时期青花瓷遭损坏)
1. [美军12架军机连夜撤离英国意味着什么](https://so.toutiao.com/search?keyword=美军12架军机连夜撤离英国意味着什么)
1. [反诈民警：400来电大胆挂断](https://so.toutiao.com/search?keyword=反诈民警：400来电大胆挂断)
1. [女儿谈101岁父亲106岁母亲长寿秘诀](https://so.toutiao.com/search?keyword=女儿谈101岁父亲106岁母亲长寿秘诀)
1. [特朗普为什么非要给AI改名字](https://so.toutiao.com/search?keyword=特朗普为什么非要给AI改名字)
1. [欧豪被胡军李乃文“架”着走上红毯](https://so.toutiao.com/search?keyword=欧豪被胡军李乃文“架”着走上红毯)
1. [张碧晨被迪丽热巴美迷糊了](https://so.toutiao.com/search?keyword=张碧晨被迪丽热巴美迷糊了)
1. [北京辟谣：警惕兼职刷单诈骗手段](https://so.toutiao.com/search?keyword=北京辟谣：警惕兼职刷单诈骗手段)
1. [王仁君获飞天奖优秀男演员奖](https://so.toutiao.com/search?keyword=王仁君获飞天奖优秀男演员奖)
1. [张雪机车WSBK冲击第七冠](https://so.toutiao.com/search?keyword=张雪机车WSBK冲击第七冠)
1. [出轨多人的女局长巨额财产哪来的](https://so.toutiao.com/search?keyword=出轨多人的女局长巨额财产哪来的)
1. [万茜亮相第35届飞天奖红毯](https://so.toutiao.com/search?keyword=万茜亮相第35届飞天奖红毯)
1. [“投资魔女”李蓓为何看空A股科技股](https://so.toutiao.com/search?keyword=“投资魔女”李蓓为何看空A股科技股)
1. [周启豪晋级中国大满贯4强](https://so.toutiao.com/search?keyword=周启豪晋级中国大满贯4强)
1. [闫妮关晓彤亮相飞天奖红毯](https://so.toutiao.com/search?keyword=闫妮关晓彤亮相飞天奖红毯)
1. [女子花99000元买100多克黄金送父母](https://so.toutiao.com/search?keyword=女子花99000元买100多克黄金送父母)
1. [中小银行大额存单利率逆势上调](https://so.toutiao.com/search?keyword=中小银行大额存单利率逆势上调)
1. [高圆圆张鲁一共同亮相飞天奖红毯](https://so.toutiao.com/search?keyword=高圆圆张鲁一共同亮相飞天奖红毯)
1. [NBA中国赛：火箭轻取独行侠 申京三双](https://so.toutiao.com/search?keyword=NBA中国赛：火箭轻取独行侠%20申京三双)
1. [胡塞武装伤亡数字曝光](https://so.toutiao.com/search?keyword=胡塞武装伤亡数字曝光)
1. [郭京飞回应减肥话题](https://so.toutiao.com/search?keyword=郭京飞回应减肥话题)
1. [两“虎”被开除党籍](https://so.toutiao.com/search?keyword=两“虎”被开除党籍)
1. [中东原油供应恢复 油价为何仍高企](https://so.toutiao.com/search?keyword=中东原油供应恢复%20油价为何仍高企)
1. [刘家成获飞天奖优秀导演奖](https://so.toutiao.com/search?keyword=刘家成获飞天奖优秀导演奖)
1. [王曼昱进中国大满贯四强](https://so.toutiao.com/search?keyword=王曼昱进中国大满贯四强)
1. [高市早苗反对将AI改名为SI](https://so.toutiao.com/search?keyword=高市早苗反对将AI改名为SI)
1. [胡塞1天三袭沙特 叙利亚会下场吗](https://so.toutiao.com/search?keyword=胡塞1天三袭沙特%20叙利亚会下场吗)
1. [曝小米YU7上市一年单车销售额达624亿](https://so.toutiao.com/search?keyword=曝小米YU7上市一年单车销售额达624亿)
1. [谢寒冰：沈伯洋睁眼说瞎话](https://so.toutiao.com/search?keyword=谢寒冰：沈伯洋睁眼说瞎话)
1. [特朗普在白宫成立“超级智能工作组”](https://so.toutiao.com/search?keyword=特朗普在白宫成立“超级智能工作组”)
1. [美称通过谈判结束俄乌冲突几乎不可能](https://so.toutiao.com/search?keyword=美称通过谈判结束俄乌冲突几乎不可能)
1. [五角大楼将网络直播枪决凶手](https://so.toutiao.com/search?keyword=五角大楼将网络直播枪决凶手)
1. [假期床车旅行爆火：三口6天仅花1600](https://so.toutiao.com/search?keyword=假期床车旅行爆火：三口6天仅花1600)
1. [俄不明原因肺炎地区正解除防疫措施](https://so.toutiao.com/search?keyword=俄不明原因肺炎地区正解除防疫措施)
1. [基辅两座大桥为何成了俄军靶心](https://so.toutiao.com/search?keyword=基辅两座大桥为何成了俄军靶心)
1. [中国科协之声：诺奖不是万能标尺](https://so.toutiao.com/search?keyword=中国科协之声：诺奖不是万能标尺)
1. [《美人余》开播](https://so.toutiao.com/search?keyword=《美人余》开播)
1. [评论员：中欧经贸关系迎来关键节点](https://so.toutiao.com/search?keyword=评论员：中欧经贸关系迎来关键节点)
1. [李勒优哥嫂近30日双双掉粉](https://so.toutiao.com/search?keyword=李勒优哥嫂近30日双双掉粉)
1. [于适：希望拍出更多好作品回馈观众](https://so.toutiao.com/search?keyword=于适：希望拍出更多好作品回馈观众)
1. [被中国军舰“拉爆”的外舰身份引猜测](https://so.toutiao.com/search?keyword=被中国军舰“拉爆”的外舰身份引猜测)
1. [辛芷蕾感谢摄影师王一博](https://so.toutiao.com/search?keyword=辛芷蕾感谢摄影师王一博)
1. [朱亚文跟随剧组亮相飞天奖红毯](https://so.toutiao.com/search?keyword=朱亚文跟随剧组亮相飞天奖红毯)
1. [深圳中小学春秋假安排发布](https://so.toutiao.com/search?keyword=深圳中小学春秋假安排发布)
1. [厄尔尼诺如何影响秘鲁凤尾鱼](https://so.toutiao.com/search?keyword=厄尔尼诺如何影响秘鲁凤尾鱼)
1. [五连胜！郑钦文重返中网四强](https://so.toutiao.com/search?keyword=五连胜！郑钦文重返中网四强)
1. [法国为何试射潜射战略弹道导弹](https://so.toutiao.com/search?keyword=法国为何试射潜射战略弹道导弹)
1. [金价下跌金店忙疯](https://so.toutiao.com/search?keyword=金价下跌金店忙疯)
1. [高血压来临时身体会发出哪些信号](https://so.toutiao.com/search?keyword=高血压来临时身体会发出哪些信号)
1. [博主：小米汽车改写汽车市场规则](https://so.toutiao.com/search?keyword=博主：小米汽车改写汽车市场规则)
1. [如何看待OpenAI解决四维挂谷问题](https://so.toutiao.com/search?keyword=如何看待OpenAI解决四维挂谷问题)
1. [《兰香如故》到底什么水平](https://so.toutiao.com/search?keyword=《兰香如故》到底什么水平)
1. [郭麒麟新剧《此处通往繁星》好看吗](https://so.toutiao.com/search?keyword=郭麒麟新剧《此处通往繁星》好看吗)
1. [胡塞武装与沙特持续对峙争夺三大目标](https://so.toutiao.com/search?keyword=胡塞武装与沙特持续对峙争夺三大目标)
1. [如何把AI从成本项变成增长杠杆](https://so.toutiao.com/search?keyword=如何把AI从成本项变成增长杠杆)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Oct 10 2026 03:32:05 GMT+0800 (China Standard Time) -->

1. [711关闭印度全部门店](https://www.zhihu.com/search?q=711%E5%85%B3%E9%97%AD%E5%8D%B0%E5%BA%A6%E5%85%A8%E9%83%A8%E9%97%A8%E5%BA%97)
1. [白俄女模特被骗至缅甸遭杀害](https://www.zhihu.com/search?q=%E7%99%BD%E4%BF%84%E5%A5%B3%E6%A8%A1%E7%89%B9%E8%A2%AB%E9%AA%97%E8%87%B3%E7%BC%85%E7%94%B8%E9%81%AD%E6%9D%80%E5%AE%B3)
1. [OpenAI宣布解决准黎曼猜想](https://www.zhihu.com/search?q=OpenAI%E5%AE%A3%E5%B8%83%E8%A7%A3%E5%86%B3%E5%87%86%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [邵艾伦对话孙宇晨](https://www.zhihu.com/search?q=%E9%82%B5%E8%89%BE%E4%BC%A6%E5%AF%B9%E8%AF%9D%E5%AD%99%E5%AE%87%E6%99%A8)
1. [俄解除不明原因肺炎防疫措施](https://www.zhihu.com/search?q=%E4%BF%84%E8%A7%A3%E9%99%A4%E4%B8%8D%E6%98%8E%E5%8E%9F%E5%9B%A0%E8%82%BA%E7%82%8E%E9%98%B2%E7%96%AB%E6%8E%AA%E6%96%BD)
1. [俄罗斯不明病因肺炎事件四种说法](https://www.zhihu.com/search?q=%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%8D%E6%98%8E%E7%97%85%E5%9B%A0%E8%82%BA%E7%82%8E%E4%BA%8B%E4%BB%B6%E5%9B%9B%E7%A7%8D%E8%AF%B4%E6%B3%95)
1. [王仁君首获飞天奖视帝](https://www.zhihu.com/search?q=%E7%8E%8B%E4%BB%81%E5%90%9B%E9%A6%96%E8%8E%B7%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%A7%86%E5%B8%9D)
1. [宋佳获飞天奖视后](https://www.zhihu.com/search?q=%E5%AE%8B%E4%BD%B3%E8%8E%B7%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%A7%86%E5%90%8E)
1. [字节Seed团队发现DeepSeek性能漂移](https://www.zhihu.com/search?q=%E5%AD%97%E8%8A%82Seed%E5%9B%A2%E9%98%9F%E5%8F%91%E7%8E%B0DeepSeek%E6%80%A7%E8%83%BD%E6%BC%82%E7%A7%BB)
1. [缅北电诈犯随机杀陌生人祭天](https://www.zhihu.com/search?q=%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E7%8A%AF%E9%9A%8F%E6%9C%BA%E6%9D%80%E9%99%8C%E7%94%9F%E4%BA%BA%E7%A5%AD%E5%A4%A9)
1. [湖南一局长被举报婚内出轨](https://www.zhihu.com/search?q=%E6%B9%96%E5%8D%97%E4%B8%80%E5%B1%80%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A8)
1. [港媒曝邓紫棋结婚](https://www.zhihu.com/search?q=%E6%B8%AF%E5%AA%92%E6%9B%9D%E9%82%93%E7%B4%AB%E6%A3%8B%E7%BB%93%E5%A9%9A)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Oct 10 2026 04:59:32 GMT+0800 (China Standard Time) -->

1. [宋佳获飞天视后实现大满贯，王仁君获视帝，如何评价第 35 届飞天奖获奖名单？](https://www.zhihu.com/question/2091976844157380000)
1. [如何评价最近爆火的“不烧心”梗？](https://www.zhihu.com/question/2089435419062579500)
1. [OpenAI 爆冷，1-9月年化营收低于预期200亿，美股、日经科技板块重挫，如何看其业绩影响？](https://www.zhihu.com/question/2091810817008259800)
1. [为什么很多人买新能源车之前很兴奋，开了一年后却开始怀念燃油车？](https://www.zhihu.com/question/2086594998665999600)
1. [非遗花鼓灯基本功「闪身步」走红全网，为何让年轻人如此上头？](https://www.zhihu.com/question/2087640476774043600)
1. [如何看待「喝大水理论」走红？反映了背后哪些现象？](https://www.zhihu.com/question/2091539021641900300)
1. [为什么b21陷入了一种“新锐但无用”的窘迫状态？](https://www.zhihu.com/question/2091807685645813200)
1. [贵州遵义一新郎婚礼当天就医输液后死亡，家属称输液区域监控未投入使用，公安已介入，哪些信息值得关注？](https://www.zhihu.com/question/2091881372683956700)
1. [在甄嬛传中，为什么甄嬛从开始就对自己的太监和宫女比较仁慈？](https://www.zhihu.com/question/1982216646656538000)
1. [历史上有哪些因为抖机灵而倒霉的人？](https://www.zhihu.com/question/2076241346558480600)
1. [柏林仅45秒退出2036奥运申办，该怎么解读这件事？](https://www.zhihu.com/question/2088250815702160600)
1. [古代没有洗洁精，满锅油污古人到底怎么洗？](https://www.zhihu.com/question/2090745571023835400)
1. [如何评价杨超越、蒋龙主演的剧版《喜剧之王》？](https://www.zhihu.com/question/2090904129430354000)
1. [因《变形计》走红的李勒优与晋妈关系生变，网友扒出上学盖房是政府资助、晋妈富养女儿是人设等，具体啥情况？](https://www.zhihu.com/question/2090364329396631300)
1. [人口仅1.6万的小岛安圭拉靠.ai域名每年躺赚数千万美元，域名是怎么赚钱的？别的国家能买下这个域名吗？](https://www.zhihu.com/question/2056046101895934000)
1. [湖南一局长被举报婚内出轨，前夫讨要口头约定余款被诉敲诈，哪些事实待厘清？本案罪与非罪的核心证据是什么？](https://www.zhihu.com/question/2091803632920258000)
1. [有人说学狗叫能够缓解压力和停止胡思乱想，这是真的吗？还有哪些邪门且有点搞笑的缓解压力方式？](https://www.zhihu.com/question/2089300567835107300)
1. [港媒曝邓紫棋与男友在纽约秘密结婚，公司称「不回应艺人私生活」，你怎么看待？](https://www.zhihu.com/question/2090845293906608400)
1. [日曜体育创始人谈樊振东回归也救不了国乒人才断档问题，你觉得是这样吗？人才断档问题根源在哪？怎么解决？](https://www.zhihu.com/question/2092016424885515800)
1. [WTT 中国大满贯，王艺迪 2-4 张本美和，止步女单八强，如何评价这场比赛 ？](https://www.zhihu.com/question/2091899301735523000)
1. [黄仁勋称中国 2030 年将搞定国产先进光刻机，这一判断能否实现？](https://www.zhihu.com/question/2083270435341447700)
1. [为什么北京大学简称“北大”，清华大学却简称“清华”而非“清大”？](https://www.zhihu.com/question/2024801794736361500)
1. [如何评价2026年10月米哈游《绝区零》3.3版本前瞻直播【重返天空的旅程】？](https://www.zhihu.com/question/2091790297730639000)
1. [曝华为 Mate 90 系列手机首销期销量超 27 万台，“超大杯”占比约 40% 你怎么看？](https://www.zhihu.com/question/2091256143515595300)
1. [如何看待 Claude 辅助提出 3SUM 猜想的反例？](https://www.zhihu.com/question/2090919793809479400)
1. [越南连续推出多型主战装备，其军工为何能「突然崛起」？](https://www.zhihu.com/question/2090385161133344000)
1. [如何看待现在大部分零零后学生几乎不会使用网址进行搜索？](https://www.zhihu.com/question/2081375256166637600)
1. [不少网友认为「电诈」的罪名听起来太轻，应归属为「恐怖组织罪」，你咋看？从判罚和定义上来看两者有何区别？](https://www.zhihu.com/question/2091123258095401000)
1. [如何看待 DeepSeek 估值已接近 5000 亿元？](https://www.zhihu.com/question/2091466415639196400)
1. [购房者买房多年才得知客厅正上方天台埋着一座土坟，房东和物业应承担责任吗？购房者应怎样维权？](https://www.zhihu.com/question/2091475651387547600)
1. [陶哲轩转发多位数学家抵制 OpenAI 的文章，怎么看待该观点？这将对 AI 数学研究带来哪些改变？](https://www.zhihu.com/question/2091831158468245000)
1. [2026 WTT 中国大满贯，周启豪 4-2 张禹珍，首次晋级大满贯赛事男单4强，如何评价本场比赛？](https://www.zhihu.com/question/2091981681532130000)
1. [如何看待2026年10月米哈游《绝区零》3.3版本前瞻，联动《崩坏星穹铁道》知更鸟，卡芙卡？](https://www.zhihu.com/question/2091982920835667200)
1. [如何评价《论语》里的“暮春者，春服既成，冠者五六人，童子六七人，浴乎沂，风乎舞雩，咏而归。” ？](https://www.zhihu.com/question/32132285)
1. [玉米不能当饭吃，怎么成为了世界三大粮食作物之一？](https://www.zhihu.com/question/337913080)
1. [开学第一天，有些家长就开始焦虑了，家庭教育应该主要由一个人负责，还是需要父母共同参与？](https://www.zhihu.com/question/2078781455400974000)
1. [发现孩子遇事只会逃避和推卸责任，应该怎样引导？](https://www.zhihu.com/question/2042864596617270500)
1. [馒头的不一样吃法有哪些？](https://www.zhihu.com/question/1910963261429516000)
1. [好久未联系的老同学，突然联系你，想要来你的城市旅游，顺便借住你家，你想拒绝，该如何回复？](https://www.zhihu.com/question/2088581144166118400)
1. [武侠电视剧里的高手为何不总用轻功赶路？](https://www.zhihu.com/question/2087876000956917500)
1. [有什么关于猪的冷知识吗？](https://www.zhihu.com/question/2090134963396031500)

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
<!-- 最后更新时间 Sat Oct 10 2026 05:02:41 GMT+0800 (China Standard Time) -->

1. [四重视角看中华民族的文化主体性](https://s.weibo.com//weibo?q=%23%E5%9B%9B%E9%87%8D%E8%A7%86%E8%A7%92%E7%9C%8B%E4%B8%AD%E5%8D%8E%E6%B0%91%E6%97%8F%E7%9A%84%E6%96%87%E5%8C%96%E4%B8%BB%E4%BD%93%E6%80%A7%23&Refer=new_time)
1. [飞天奖获奖名单](https://s.weibo.com//weibo?q=%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=1&Refer=top)
1. [盛家的儿女一个比一个争气](https://s.weibo.com//weibo?q=%23%E7%9B%9B%E5%AE%B6%E7%9A%84%E5%84%BF%E5%A5%B3%E4%B8%80%E4%B8%AA%E6%AF%94%E4%B8%80%E4%B8%AA%E4%BA%89%E6%B0%94%23&t=31&band_rank=2&Refer=top)
1. [十五五开局六张网齐铺开](https://s.weibo.com//weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E5%BC%80%E5%B1%80%E5%85%AD%E5%BC%A0%E7%BD%91%E9%BD%90%E9%93%BA%E5%BC%80%23&t=31&band_rank=3&Refer=top)
1. [王仁君是杨幂大学班长](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E6%98%AF%E6%9D%A8%E5%B9%82%E5%A4%A7%E5%AD%A6%E7%8F%AD%E9%95%BF%23&t=31&band_rank=4&Refer=top)
1. [养了五年的猫突然开线还能修吗](https://s.weibo.com//weibo?q=%E5%85%BB%E4%BA%86%E4%BA%94%E5%B9%B4%E7%9A%84%E7%8C%AB%E7%AA%81%E7%84%B6%E5%BC%80%E7%BA%BF%E8%BF%98%E8%83%BD%E4%BF%AE%E5%90%97&t=31&band_rank=5&Refer=top)
1. [沐言爸爸隐婚生子女儿走红后才公开](https://s.weibo.com//weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E9%9A%90%E5%A9%9A%E7%94%9F%E5%AD%90%E5%A5%B3%E5%84%BF%E8%B5%B0%E7%BA%A2%E5%90%8E%E6%89%8D%E5%85%AC%E5%BC%80%23&t=31&band_rank=6&Refer=top)
1. [王仁君飞天奖视帝](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%A7%86%E5%B8%9D%23&t=31&band_rank=7&Refer=top)
1. [华为赛力斯合作模式调整](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E8%B5%9B%E5%8A%9B%E6%96%AF%E5%90%88%E4%BD%9C%E6%A8%A1%E5%BC%8F%E8%B0%83%E6%95%B4&t=31&band_rank=8&Refer=top)
1. [蛋白质对人体有多重要](https://s.weibo.com//weibo?q=%E8%9B%8B%E7%99%BD%E8%B4%A8%E5%AF%B9%E4%BA%BA%E4%BD%93%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81&t=31&band_rank=9&Refer=top)
1. [顾客买绳子老板娘发现不对劲](https://s.weibo.com//weibo?q=%E9%A1%BE%E5%AE%A2%E4%B9%B0%E7%BB%B3%E5%AD%90%E8%80%81%E6%9D%BF%E5%A8%98%E5%8F%91%E7%8E%B0%E4%B8%8D%E5%AF%B9%E5%8A%B2&t=31&band_rank=10&Refer=top)
1. [女子仅退款9斤蜜薯称有本事来拿](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%85%E9%80%80%E6%AC%BE9%E6%96%A4%E8%9C%9C%E8%96%AF%E7%A7%B0%E6%9C%89%E6%9C%AC%E4%BA%8B%E6%9D%A5%E6%8B%BF%23&t=31&band_rank=11&Refer=top)
1. [赵丽颖恭喜王仁君](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%81%AD%E5%96%9C%E7%8E%8B%E4%BB%81%E5%90%9B%23&t=31&band_rank=12&Refer=top)
1. [妈妈回应沐言为何没读私立学校](https://s.weibo.com//weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E6%B2%90%E8%A8%80%E4%B8%BA%E4%BD%95%E6%B2%A1%E8%AF%BB%E7%A7%81%E7%AB%8B%E5%AD%A6%E6%A0%A1%23&t=31&band_rank=13&Refer=top)
1. [54岁马化腾罕见露面](https://s.weibo.com//weibo?q=%2354%E5%B2%81%E9%A9%AC%E5%8C%96%E8%85%BE%E7%BD%95%E8%A7%81%E9%9C%B2%E9%9D%A2%23&t=31&band_rank=14&Refer=top)
1. [小巷人家 陪跑](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%20%E9%99%AA%E8%B7%91&t=31&band_rank=15&Refer=top)
1. [沐言爸爸是游乐王子](https://s.weibo.com//weibo?q=%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E6%98%AF%E6%B8%B8%E4%B9%90%E7%8E%8B%E5%AD%90&t=31&band_rank=16&Refer=top)
1. [南来北往](https://s.weibo.com//weibo?q=%E5%8D%97%E6%9D%A5%E5%8C%97%E5%BE%80&t=31&band_rank=17&Refer=top)
1. [林昀儒郑怡静10比3冠军点遭惊天逆转](https://s.weibo.com//weibo?q=%23%E6%9E%97%E6%98%80%E5%84%92%E9%83%91%E6%80%A1%E9%9D%9910%E6%AF%943%E5%86%A0%E5%86%9B%E7%82%B9%E9%81%AD%E6%83%8A%E5%A4%A9%E9%80%86%E8%BD%AC%23&t=31&band_rank=18&Refer=top)
1. [男子赴宴不听劝酒被送回家后死亡](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E8%B5%B4%E5%AE%B4%E4%B8%8D%E5%90%AC%E5%8A%9D%E9%85%92%E8%A2%AB%E9%80%81%E5%9B%9E%E5%AE%B6%E5%90%8E%E6%AD%BB%E4%BA%A1%23&t=31&band_rank=19&Refer=top)
1. [双汇食品安全问题频发](https://s.weibo.com//weibo?q=%E5%8F%8C%E6%B1%87%E9%A3%9F%E5%93%81%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98%E9%A2%91%E5%8F%91&t=31&band_rank=20&Refer=top)
1. [大闸蟹全线崩盘](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E9%97%B8%E8%9F%B9%E5%85%A8%E7%BA%BF%E5%B4%A9%E7%9B%98%23&t=31&band_rank=21&Refer=top)
1. [妈妈说男的死得比女的早](https://s.weibo.com//weibo?q=%E5%A6%88%E5%A6%88%E8%AF%B4%E7%94%B7%E7%9A%84%E6%AD%BB%E5%BE%97%E6%AF%94%E5%A5%B3%E7%9A%84%E6%97%A9&t=31&band_rank=22&Refer=top)
1. [金智媛新剧收视率](https://s.weibo.com//weibo?q=%E9%87%91%E6%99%BA%E5%AA%9B%E6%96%B0%E5%89%A7%E6%94%B6%E8%A7%86%E7%8E%87&t=31&band_rank=23&Refer=top)
1. [飞天奖优秀电视剧](https://s.weibo.com//weibo?q=%E9%A3%9E%E5%A4%A9%E5%A5%96%E4%BC%98%E7%A7%80%E7%94%B5%E8%A7%86%E5%89%A7&t=31&band_rank=24&Refer=top)
1. [沐言爸爸居然是结巴](https://s.weibo.com//weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E5%B1%85%E7%84%B6%E6%98%AF%E7%BB%93%E5%B7%B4%23&t=31&band_rank=25&Refer=top)
1. [肖战外网断层](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%A4%96%E7%BD%91%E6%96%AD%E5%B1%82%23&t=31&band_rank=26&Refer=top)
1. [小姐姐拍照被楼上老奶奶拍下](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%A7%90%E5%A7%90%E6%8B%8D%E7%85%A7%E8%A2%AB%E6%A5%BC%E4%B8%8A%E8%80%81%E5%A5%B6%E5%A5%B6%E6%8B%8D%E4%B8%8B&t=31&band_rank=27&Refer=top)
1. [李勒优第一份工资被扣1000](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%8B%92%E4%BC%98%E7%AC%AC%E4%B8%80%E4%BB%BD%E5%B7%A5%E8%B5%84%E8%A2%AB%E6%89%A31000&t=31&band_rank=28&Refer=top)
1. [赵丽颖实现了全方位有奖](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%AE%9E%E7%8E%B0%E4%BA%86%E5%85%A8%E6%96%B9%E4%BD%8D%E6%9C%89%E5%A5%96%23&t=31&band_rank=29&Refer=top)
1. [俄导弹击中基辅大桥猛烈爆炸画面](https://s.weibo.com//weibo?q=%23%E4%BF%84%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E5%9F%BA%E8%BE%85%E5%A4%A7%E6%A1%A5%E7%8C%9B%E7%83%88%E7%88%86%E7%82%B8%E7%94%BB%E9%9D%A2%23&t=31&band_rank=30&Refer=top)
1. [周杰伦晒与BIGBANG合照](https://s.weibo.com//weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%99%92%E4%B8%8EBIGBANG%E5%90%88%E7%85%A7%23&t=31&band_rank=31&Refer=top)
1. [有人清理预付费项目包括理发](https://s.weibo.com//weibo?q=%E6%9C%89%E4%BA%BA%E6%B8%85%E7%90%86%E9%A2%84%E4%BB%98%E8%B4%B9%E9%A1%B9%E7%9B%AE%E5%8C%85%E6%8B%AC%E7%90%86%E5%8F%91&t=31&band_rank=32&Refer=top)
1. [沉默的荣耀等获飞天奖优秀电视剧奖](https://s.weibo.com//weibo?q=%23%E6%B2%89%E9%BB%98%E7%9A%84%E8%8D%A3%E8%80%80%E7%AD%89%E8%8E%B7%E9%A3%9E%E5%A4%A9%E5%A5%96%E4%BC%98%E7%A7%80%E7%94%B5%E8%A7%86%E5%89%A7%E5%A5%96%23&t=31&band_rank=33&Refer=top)
1. [中年夫妻十条亲密动作清单](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%B9%B4%E5%A4%AB%E5%A6%BB%E5%8D%81%E6%9D%A1%E4%BA%B2%E5%AF%86%E5%8A%A8%E4%BD%9C%E6%B8%85%E5%8D%95&t=31&band_rank=34&Refer=top)
1. [王仁君获奖感言](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%23&t=31&band_rank=35&Refer=top)
1. [我的阿勒泰](https://s.weibo.com//weibo?q=%E6%88%91%E7%9A%84%E9%98%BF%E5%8B%92%E6%B3%B0&t=31&band_rank=36&Refer=top)
1. [崩坏星穹铁道](https://s.weibo.com//weibo?q=%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93&t=31&band_rank=37&Refer=top)
1. [开保胎药却取到引产药孕妇发声](https://s.weibo.com//weibo?q=%23%E5%BC%80%E4%BF%9D%E8%83%8E%E8%8D%AF%E5%8D%B4%E5%8F%96%E5%88%B0%E5%BC%95%E4%BA%A7%E8%8D%AF%E5%AD%95%E5%A6%87%E5%8F%91%E5%A3%B0%23&t=31&band_rank=38&Refer=top)
1. [中网女单四强对阵](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BD%91%E5%A5%B3%E5%8D%95%E5%9B%9B%E5%BC%BA%E5%AF%B9%E9%98%B5%23&t=31&band_rank=39&Refer=top)
1. [林仲勋申裕斌夺冠](https://s.weibo.com//weibo?q=%23%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C%E5%A4%BA%E5%86%A0%23&t=31&band_rank=40&Refer=top)
1. [南京三千万豪宅难卖一千五百万](https://s.weibo.com//weibo?q=%E5%8D%97%E4%BA%AC%E4%B8%89%E5%8D%83%E4%B8%87%E8%B1%AA%E5%AE%85%E9%9A%BE%E5%8D%96%E4%B8%80%E5%8D%83%E4%BA%94%E7%99%BE%E4%B8%87&t=31&band_rank=41&Refer=top)
1. [CBA季前赛](https://s.weibo.com//weibo?q=CBA%E5%AD%A3%E5%89%8D%E8%B5%9B&t=31&band_rank=42&Refer=top)
1. [清融没轮换](https://s.weibo.com//weibo?q=%E6%B8%85%E8%9E%8D%E6%B2%A1%E8%BD%AE%E6%8D%A2&t=31&band_rank=43&Refer=top)
1. [WTT混双](https://s.weibo.com//weibo?q=WTT%E6%B7%B7%E5%8F%8C&t=31&band_rank=44&Refer=top)
1. [Cortis全开麦唱功引热议](https://s.weibo.com//weibo?q=Cortis%E5%85%A8%E5%BC%80%E9%BA%A6%E5%94%B1%E5%8A%9F%E5%BC%95%E7%83%AD%E8%AE%AE&t=31&band_rank=45&Refer=top)
1. [KPL十周年](https://s.weibo.com//weibo?q=KPL%E5%8D%81%E5%91%A8%E5%B9%B4&t=31&band_rank=46&Refer=top)
1. [刘亦菲 水蜜桃公主](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%B0%B4%E8%9C%9C%E6%A1%83%E5%85%AC%E4%B8%BB&t=31&band_rank=47&Refer=top)
1. [超长蛋挞陆续下架](https://s.weibo.com//weibo?q=%23%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E9%99%86%E7%BB%AD%E4%B8%8B%E6%9E%B6%23&t=31&band_rank=48&Refer=top)
1. [周杰伦转发著名中国歌手](https://s.weibo.com//weibo?q=%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%BD%AC%E5%8F%91%E8%91%97%E5%90%8D%E4%B8%AD%E5%9B%BD%E6%AD%8C%E6%89%8B&t=31&band_rank=49&Refer=top)
1. [JDG战胜DYG](https://s.weibo.com//weibo?q=JDG%E6%88%98%E8%83%9CDYG&t=31&band_rank=50&Refer=top)
1. [王仁君飞天奖视帝](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%A7%86%E5%B8%9D%23&t=31&band_rank=2&Refer=top)
1. [林仲勋申裕斌夺冠](https://s.weibo.com//weibo?q=%23%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C%E5%A4%BA%E5%86%A0%23&t=31&band_rank=4&Refer=top)
1. [长柏真的高中了](https://s.weibo.com//weibo?q=%E9%95%BF%E6%9F%8F%E7%9C%9F%E7%9A%84%E9%AB%98%E4%B8%AD%E4%BA%86&t=31&band_rank=5&Refer=top)
1. [赵丽颖恭喜王仁君](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%81%AD%E5%96%9C%E7%8E%8B%E4%BB%81%E5%90%9B%23&t=31&band_rank=6&Refer=top)
1. [54岁马化腾罕见露面](https://s.weibo.com//weibo?q=%2354%E5%B2%81%E9%A9%AC%E5%8C%96%E8%85%BE%E7%BD%95%E8%A7%81%E9%9C%B2%E9%9D%A2%23&t=31&band_rank=7&Refer=top)
1. [山西一医院保胎药错发成引产药](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%80%E5%8C%BB%E9%99%A2%E4%BF%9D%E8%83%8E%E8%8D%AF%E9%94%99%E5%8F%91%E6%88%90%E5%BC%95%E4%BA%A7%E8%8D%AF%23&t=31&band_rank=8&Refer=top)
1. [超长蛋挞陆续下架](https://s.weibo.com//weibo?q=%23%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E9%99%86%E7%BB%AD%E4%B8%8B%E6%9E%B6%23&t=31&band_rank=9&Refer=top)
1. [蛋白质对人体有多重要](https://s.weibo.com//weibo?q=%E8%9B%8B%E7%99%BD%E8%B4%A8%E5%AF%B9%E4%BA%BA%E4%BD%93%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81&t=31&band_rank=10&Refer=top)
1. [母亲被儿子催过户后后悔只生一个](https://s.weibo.com//weibo?q=%E6%AF%8D%E4%BA%B2%E8%A2%AB%E5%84%BF%E5%AD%90%E5%82%AC%E8%BF%87%E6%88%B7%E5%90%8E%E5%90%8E%E6%82%94%E5%8F%AA%E7%94%9F%E4%B8%80%E4%B8%AA&t=31&band_rank=11&Refer=top)
1. [沐言爸爸隐婚生子女儿走红后才公开](https://s.weibo.com//weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E9%9A%90%E5%A9%9A%E7%94%9F%E5%AD%90%E5%A5%B3%E5%84%BF%E8%B5%B0%E7%BA%A2%E5%90%8E%E6%89%8D%E5%85%AC%E5%BC%80%23&t=31&band_rank=12&Refer=top)
1. [金智媛新剧收视率](https://s.weibo.com//weibo?q=%E9%87%91%E6%99%BA%E5%AA%9B%E6%96%B0%E5%89%A7%E6%94%B6%E8%A7%86%E7%8E%87&t=31&band_rank=13&Refer=top)
1. [小巷人家 陪跑](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%20%E9%99%AA%E8%B7%91&t=31&band_rank=14&Refer=top)
1. [沐言爸爸居然是结巴](https://s.weibo.com//weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E5%B1%85%E7%84%B6%E6%98%AF%E7%BB%93%E5%B7%B4%23&t=31&band_rank=15&Refer=top)
1. [林仲勋申裕斌3比2林昀儒郑怡静](https://s.weibo.com//weibo?q=%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C3%E6%AF%942%E6%9E%97%E6%98%80%E5%84%92%E9%83%91%E6%80%A1%E9%9D%99&t=31&band_rank=16&Refer=top)
1. [女子仅退款9斤蜜薯称有本事来拿](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%85%E9%80%80%E6%AC%BE9%E6%96%A4%E8%9C%9C%E8%96%AF%E7%A7%B0%E6%9C%89%E6%9C%AC%E4%BA%8B%E6%9D%A5%E6%8B%BF%23&t=31&band_rank=17&Refer=top)
1. [沐言爸爸是游乐王子](https://s.weibo.com//weibo?q=%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E6%98%AF%E6%B8%B8%E4%B9%90%E7%8E%8B%E5%AD%90&t=31&band_rank=18&Refer=top)
1. [新郎婚礼当天就医离世家属盼知死因](https://s.weibo.com//weibo?q=%23%E6%96%B0%E9%83%8E%E5%A9%9A%E7%A4%BC%E5%BD%93%E5%A4%A9%E5%B0%B1%E5%8C%BB%E7%A6%BB%E4%B8%96%E5%AE%B6%E5%B1%9E%E7%9B%BC%E7%9F%A5%E6%AD%BB%E5%9B%A0%23&t=31&band_rank=19&Refer=top)
1. [宋佳飞天奖视后](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BD%B3%E9%A3%9E%E5%A4%A9%E5%A5%96%E8%A7%86%E5%90%8E%23&t=31&band_rank=20&Refer=top)
1. [大娘子福气了一门双星](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E5%A8%98%E5%AD%90%E7%A6%8F%E6%B0%94%E4%BA%86%E4%B8%80%E9%97%A8%E5%8F%8C%E6%98%9F%23&t=31&band_rank=22&Refer=top)
1. [47岁高圆圆和46岁张鲁一](https://s.weibo.com//weibo?q=%2347%E5%B2%81%E9%AB%98%E5%9C%86%E5%9C%86%E5%92%8C46%E5%B2%81%E5%BC%A0%E9%B2%81%E4%B8%80%23&t=31&band_rank=23&Refer=top)
1. [积英巷盛家满门荣耀](https://s.weibo.com//weibo?q=%23%E7%A7%AF%E8%8B%B1%E5%B7%B7%E7%9B%9B%E5%AE%B6%E6%BB%A1%E9%97%A8%E8%8D%A3%E8%80%80%23&t=31&band_rank=24&Refer=top)
1. [中年夫妻十条亲密动作清单](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%B9%B4%E5%A4%AB%E5%A6%BB%E5%8D%81%E6%9D%A1%E4%BA%B2%E5%AF%86%E5%8A%A8%E4%BD%9C%E6%B8%85%E5%8D%95&t=31&band_rank=25&Refer=top)
1. [山姆回应拟限制亲友卡绑定](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E5%A7%86%E5%9B%9E%E5%BA%94%E6%8B%9F%E9%99%90%E5%88%B6%E4%BA%B2%E5%8F%8B%E5%8D%A1%E7%BB%91%E5%AE%9A%23&t=31&band_rank=26&Refer=top)
1. [国色芳华飞天奖优秀电视剧](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E8%89%B2%E8%8A%B3%E5%8D%8E%E9%A3%9E%E5%A4%A9%E5%A5%96%E4%BC%98%E7%A7%80%E7%94%B5%E8%A7%86%E5%89%A7%23&t=31&band_rank=27&Refer=top)
1. [刘亦菲 水蜜桃公主](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%B0%B4%E8%9C%9C%E6%A1%83%E5%85%AC%E4%B8%BB&t=31&band_rank=28&Refer=top)
1. [妈妈说男的死得比女的早](https://s.weibo.com//weibo?q=%E5%A6%88%E5%A6%88%E8%AF%B4%E7%94%B7%E7%9A%84%E6%AD%BB%E5%BE%97%E6%AF%94%E5%A5%B3%E7%9A%84%E6%97%A9&t=31&band_rank=29&Refer=top)
1. [中网女单四强对阵](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BD%91%E5%A5%B3%E5%8D%95%E5%9B%9B%E5%BC%BA%E5%AF%B9%E9%98%B5%23&t=31&band_rank=31&Refer=top)
1. [周杰伦晒与BIGBANG合照](https://s.weibo.com//weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%99%92%E4%B8%8EBIGBANG%E5%90%88%E7%85%A7%23&t=31&band_rank=32&Refer=top)
1. [妈妈回应沐言为何没读私立学校](https://s.weibo.com//weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E6%B2%90%E8%A8%80%E4%B8%BA%E4%BD%95%E6%B2%A1%E8%AF%BB%E7%A7%81%E7%AB%8B%E5%AD%A6%E6%A0%A1%23&t=31&band_rank=33&Refer=top)
1. [崩坏星穹铁道](https://s.weibo.com//weibo?q=%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93&t=31&band_rank=34&Refer=top)
1. [iPhone18Pro卖不动了](https://s.weibo.com//weibo?q=%23iPhone18Pro%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [宋佳一串三](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BD%B3%E4%B8%80%E4%B8%B2%E4%B8%89%23&t=31&band_rank=36&Refer=top)
1. [李勒优第一份工资被扣1000](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%8B%92%E4%BC%98%E7%AC%AC%E4%B8%80%E4%BB%BD%E5%B7%A5%E8%B5%84%E8%A2%AB%E6%89%A31000&t=31&band_rank=37&Refer=top)
1. [周杰伦转发著名中国歌手](https://s.weibo.com//weibo?q=%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%BD%AC%E5%8F%91%E8%91%97%E5%90%8D%E4%B8%AD%E5%9B%BD%E6%AD%8C%E6%89%8B&t=31&band_rank=38&Refer=top)
1. [小姐姐拍照被楼上老奶奶拍下](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%A7%90%E5%A7%90%E6%8B%8D%E7%85%A7%E8%A2%AB%E6%A5%BC%E4%B8%8A%E8%80%81%E5%A5%B6%E5%A5%B6%E6%8B%8D%E4%B8%8B&t=31&band_rank=39&Refer=top)
1. [沐言一家冰岛行爆火](https://s.weibo.com//weibo?q=%23%E6%B2%90%E8%A8%80%E4%B8%80%E5%AE%B6%E5%86%B0%E5%B2%9B%E8%A1%8C%E7%88%86%E7%81%AB%23&t=31&band_rank=40&Refer=top)
1. [养了五年的猫突然开线还能修吗](https://s.weibo.com//weibo?q=%E5%85%BB%E4%BA%86%E4%BA%94%E5%B9%B4%E7%9A%84%E7%8C%AB%E7%AA%81%E7%84%B6%E5%BC%80%E7%BA%BF%E8%BF%98%E8%83%BD%E4%BF%AE%E5%90%97&t=31&band_rank=41&Refer=top)
1. [曝李勒优想和崔晋一家一刀两断](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%8B%92%E4%BC%98%E6%83%B3%E5%92%8C%E5%B4%94%E6%99%8B%E4%B8%80%E5%AE%B6%E4%B8%80%E5%88%80%E4%B8%A4%E6%96%AD%23&t=31&band_rank=42&Refer=top)
1. [肿瘤科医生垫付40万病逝](https://s.weibo.com//weibo?q=%E8%82%BF%E7%98%A4%E7%A7%91%E5%8C%BB%E7%94%9F%E5%9E%AB%E4%BB%9840%E4%B8%87%E7%97%85%E9%80%9D&t=31&band_rank=43&Refer=top)
1. [辛芷蕾晒王一博拍的自己](https://s.weibo.com//weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E6%99%92%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%8B%8D%E7%9A%84%E8%87%AA%E5%B7%B1%23&t=31&band_rank=44&Refer=top)
1. [南京三千万豪宅难卖一千五百万](https://s.weibo.com//weibo?q=%E5%8D%97%E4%BA%AC%E4%B8%89%E5%8D%83%E4%B8%87%E8%B1%AA%E5%AE%85%E9%9A%BE%E5%8D%96%E4%B8%80%E5%8D%83%E4%BA%94%E7%99%BE%E4%B8%87&t=31&band_rank=45&Refer=top)
1. [肖战外网断层](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%A4%96%E7%BD%91%E6%96%AD%E5%B1%82%23&t=31&band_rank=46&Refer=top)
1. [清融没轮换](https://s.weibo.com//weibo?q=%E6%B8%85%E8%9E%8D%E6%B2%A1%E8%BD%AE%E6%8D%A2&t=31&band_rank=47&Refer=top)
1. [Cortis全开麦唱功引热议](https://s.weibo.com//weibo?q=Cortis%E5%85%A8%E5%BC%80%E9%BA%A6%E5%94%B1%E5%8A%9F%E5%BC%95%E7%83%AD%E8%AE%AE&t=31&band_rank=48&Refer=top)
1. [浴血荣光](https://s.weibo.com//weibo?q=%E6%B5%B4%E8%A1%80%E8%8D%A3%E5%85%89&t=31&band_rank=49&Refer=top)
1. [辽宁男篮](https://s.weibo.com//weibo?q=%E8%BE%BD%E5%AE%81%E7%94%B7%E7%AF%AE&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
