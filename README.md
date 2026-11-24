# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-24 18:57:00

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
<!-- 最后更新时间 Wed Nov 25 2026 00:16:53 GMT+0800 (China Standard Time) -->

1. [上海就陈吉宁被查表态](https://so.toutiao.com/search?keyword=上海就陈吉宁被查表态)
1. [超级厄尔尼诺发威 暴雪袭击日本](https://so.toutiao.com/search?keyword=超级厄尔尼诺发威%20暴雪袭击日本)
1. [神舟二十四号任务看点拉满](https://so.toutiao.com/search?keyword=神舟二十四号任务看点拉满)
1. [陈吉宁被查](https://so.toutiao.com/search?keyword=陈吉宁被查)
1. [女老师阔腿裤钻进老鼠捏住继续讲课](https://so.toutiao.com/search?keyword=女老师阔腿裤钻进老鼠捏住继续讲课)
1. [高血压标准变了？会影响多少人](https://so.toutiao.com/search?keyword=高血压标准变了？会影响多少人)
1. [年轻人开始劝父母卖空房收息](https://so.toutiao.com/search?keyword=年轻人开始劝父母卖空房收息)
1. [中方回应黄仁勋复职](https://so.toutiao.com/search?keyword=中方回应黄仁勋复职)
1. [地级市市长转任县委书记](https://so.toutiao.com/search?keyword=地级市市长转任县委书记)
1. [第三代唐搭载比亚迪线控底盘](https://so.toutiao.com/search?keyword=第三代唐搭载比亚迪线控底盘)
1. [李维嘉200平的家干净得找不出1根头发](https://so.toutiao.com/search?keyword=李维嘉200平的家干净得找不出1根头发)
1. [县委书记回应张雪分期买摩托建议](https://so.toutiao.com/search?keyword=县委书记回应张雪分期买摩托建议)
1. [优秀辟谣作品高校巡展举办](https://so.toutiao.com/search?keyword=优秀辟谣作品高校巡展举办)
1. [张纪中妻子自曝领证时才得知丈夫年龄](https://so.toutiao.com/search?keyword=张纪中妻子自曝领证时才得知丈夫年龄)
1. [东北的洗浴已经这么卷了吗](https://so.toutiao.com/search?keyword=东北的洗浴已经这么卷了吗)
1. [国际高血压指南更新](https://so.toutiao.com/search?keyword=国际高血压指南更新)
1. [蒋欣瘦成这样了](https://so.toutiao.com/search?keyword=蒋欣瘦成这样了)
1. [1.1万华为员工用上鸿蒙台式机](https://so.toutiao.com/search?keyword=1.1万华为员工用上鸿蒙台式机)
1. [余承东：华为首创磁控展平技术](https://so.toutiao.com/search?keyword=余承东：华为首创磁控展平技术)
1. [华为又有一款手机销量破百万](https://so.toutiao.com/search?keyword=华为又有一款手机销量破百万)
1. [村支书网上摇来几百辆车帮村里压路](https://so.toutiao.com/search?keyword=村支书网上摇来几百辆车帮村里压路)
1. [刚果金将暂停钴出口 宁德时代咋应对](https://so.toutiao.com/search?keyword=刚果金将暂停钴出口%20宁德时代咋应对)
1. [东北大爷拿“花洒”浇出一个冰坡](https://so.toutiao.com/search?keyword=东北大爷拿“花洒”浇出一个冰坡)
1. [巴基斯坦小哥为何能拿到“天宫”门票](https://so.toutiao.com/search?keyword=巴基斯坦小哥为何能拿到“天宫”门票)
1. [战火外溢对俄乌冲突有何影响](https://so.toutiao.com/search?keyword=战火外溢对俄乌冲突有何影响)
1. [年轻人为何流行胳膊上贴“小圆片”](https://so.toutiao.com/search?keyword=年轻人为何流行胳膊上贴“小圆片”)
1. [男子杀妻抛尸后伪装好女婿10年](https://so.toutiao.com/search?keyword=男子杀妻抛尸后伪装好女婿10年)
1. [冬季洗澡越洗越痒？医生提醒](https://so.toutiao.com/search?keyword=冬季洗澡越洗越痒？医生提醒)
1. [吴胜华贪1.13亿被判无期](https://so.toutiao.com/search?keyword=吴胜华贪1.13亿被判无期)
1. [业内：12月中旬前股市有望走出反弹](https://so.toutiao.com/search?keyword=业内：12月中旬前股市有望走出反弹)
1. [华为动态血糖仪将于12月11日开售](https://so.toutiao.com/search?keyword=华为动态血糖仪将于12月11日开售)
1. [李维嘉回应被王菲搂着唱歌](https://so.toutiao.com/search?keyword=李维嘉回应被王菲搂着唱歌)
1. [魏建军为何主动把焦虑摆在台前](https://so.toutiao.com/search?keyword=魏建军为何主动把焦虑摆在台前)
1. [方力申：横渡港澳的“飞鱼王子”](https://so.toutiao.com/search?keyword=方力申：横渡港澳的“飞鱼王子”)
1. [复盘美股“惊心动魄”的一天](https://so.toutiao.com/search?keyword=复盘美股“惊心动魄”的一天)
1. [老挝摘掉最贫困帽子日媒为何酸了](https://so.toutiao.com/search?keyword=老挝摘掉最贫困帽子日媒为何酸了)
1. [莱昂纳多妙传 安佩姆梅开二度](https://so.toutiao.com/search?keyword=莱昂纳多妙传%20安佩姆梅开二度)
1. [方力申回应横渡港澳筹得千万港元善款](https://so.toutiao.com/search?keyword=方力申回应横渡港澳筹得千万港元善款)
1. [AI时代成毅这样的演员为何稀缺](https://so.toutiao.com/search?keyword=AI时代成毅这样的演员为何稀缺)
1. [华为逆势稳住大折叠起售价背后](https://so.toutiao.com/search?keyword=华为逆势稳住大折叠起售价背后)
1. [张雪干拍卖副业是智商税吗](https://so.toutiao.com/search?keyword=张雪干拍卖副业是智商税吗)
1. [黎曼猜想证明两天砍掉240万行](https://so.toutiao.com/search?keyword=黎曼猜想证明两天砍掉240万行)
1. [邵永灵：俄海上航线不再安全](https://so.toutiao.com/search?keyword=邵永灵：俄海上航线不再安全)
1. [吴昕被6岁小师傅叫奶奶当场愣住](https://so.toutiao.com/search?keyword=吴昕被6岁小师傅叫奶奶当场愣住)
1. [台名医批民进党鼠目寸光](https://so.toutiao.com/search?keyword=台名医批民进党鼠目寸光)
1. [阿尔巴尼亚否认参与袭击俄护卫舰](https://so.toutiao.com/search?keyword=阿尔巴尼亚否认参与袭击俄护卫舰)
1. [博主：不要急于定义赵松源](https://so.toutiao.com/search?keyword=博主：不要急于定义赵松源)
1. [华为MateX8售价12999元起](https://so.toutiao.com/search?keyword=华为MateX8售价12999元起)
1. [东方算芯探索算力芯片技术路径](https://so.toutiao.com/search?keyword=东方算芯探索算力芯片技术路径)
1. [撞脸张雪男子年轻时被说像林俊杰](https://so.toutiao.com/search?keyword=撞脸张雪男子年轻时被说像林俊杰)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Nov 25 2026 05:08:46 GMT+0800 (China Standard Time) -->

1. [陈吉宁被查](https://www.zhihu.com/search?q=%E9%99%88%E5%90%89%E5%AE%81%E8%A2%AB%E6%9F%A5)
1. [黄仁勋恢复英伟达总裁CEO职务](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%81%A2%E5%A4%8D%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%80%BB%E8%A3%81CEO%E8%81%8C%E5%8A%A1)
1. [余文乐自曝躯体化严重到不能开车](https://www.zhihu.com/search?q=%E4%BD%99%E6%96%87%E4%B9%90%E8%87%AA%E6%9B%9D%E8%BA%AF%E4%BD%93%E5%8C%96%E4%B8%A5%E9%87%8D%E5%88%B0%E4%B8%8D%E8%83%BD%E5%BC%80%E8%BD%A6)
1. [美媒称黄仁勋常态化羞辱员工](https://www.zhihu.com/search?q=%E7%BE%8E%E5%AA%92%E7%A7%B0%E9%BB%84%E4%BB%81%E5%8B%8B%E5%B8%B8%E6%80%81%E5%8C%96%E7%BE%9E%E8%BE%B1%E5%91%98%E5%B7%A5)
1. [AI证明黎曼猜想](https://www.zhihu.com/search?q=AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [DeepSeek调整API定价](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4API%E5%AE%9A%E4%BB%B7)
1. [邓煜：人不能放弃思考给AI当狗](https://www.zhihu.com/search?q=%E9%82%93%E7%85%9C%EF%BC%9A%E4%BA%BA%E4%B8%8D%E8%83%BD%E6%94%BE%E5%BC%83%E6%80%9D%E8%80%83%E7%BB%99AI%E5%BD%93%E7%8B%97)
1. [英伟达单日市值飙升创纪录](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%8D%95%E6%97%A5%E5%B8%82%E5%80%BC%E9%A3%99%E5%8D%87%E5%88%9B%E7%BA%AA%E5%BD%95)
1. [特朗普被曝抄底巨额英伟达股票](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E6%9B%9D%E6%8A%84%E5%BA%95%E5%B7%A8%E9%A2%9D%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%82%A1%E7%A5%A8)
1. [Anthropic称证明VP≠VNP](https://www.zhihu.com/search?q=Anthropic%E7%A7%B0%E8%AF%81%E6%98%8EVP%E2%89%A0VNP)
1. [浙江宣传称消费降级是伪命题](https://www.zhihu.com/search?q=%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E7%A7%B0%E6%B6%88%E8%B4%B9%E9%99%8D%E7%BA%A7%E6%98%AF%E4%BC%AA%E5%91%BD%E9%A2%98)
1. [如何看待伤仲永被移出语文教材](https://www.zhihu.com/search?q=%E5%A6%82%E4%BD%95%E7%9C%8B%E5%BE%85%E4%BC%A4%E4%BB%B2%E6%B0%B8%E8%A2%AB%E7%A7%BB%E5%87%BA%E8%AF%AD%E6%96%87%E6%95%99%E6%9D%90)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Nov 24 2026 18:57:00 GMT+0800 (China Standard Time) -->

1. [美股集体大幅收高，英伟达暴涨超31%，单日市值大增9500亿美元创全球纪录，如何理解？行情能持续多久？](https://www.zhihu.com/question/2108463757307241000)
1. [淘股吧两届冠军仅5个月就从1541万亏到74万，最后宣告破产，一代炒股冠军的陨落带给投资者哪些反思？](https://www.zhihu.com/question/2108201156111327500)
1. [神舟二十四号载人飞船瞄准11月25日8时18分发射，「天宫」将迎来首位外籍航天员，有哪些信息值得关注？](https://www.zhihu.com/question/2108486612505949400)
1. [魏建军自曝这几年焦虑，称「长城汽车曾经是中国自主品牌的销冠，如今已滑到了第九」，你觉得问题出在哪？](https://www.zhihu.com/question/2108263058791571700)
1. [为什么让Ai随机说一个1到30之间的数，大部分都会说17？](https://www.zhihu.com/question/2078883145160582400)
1. [R星劝玩家别用任务清单和攻略玩《GTA6》，说放慢才能感受到手工打磨的细节，如何评价？](https://www.zhihu.com/question/2107988065939738600)
1. [据我所知，韩国兵役人人避之不及，这种制度真的能培养出有战斗力的部队吗？](https://www.zhihu.com/question/2106499364415857700)
1. [去世到安葬不超 24 小时，山东济阳一村推行「一日丧」引热议，这种丧葬风俗值得推广吗？](https://www.zhihu.com/question/2108194895324357000)
1. [英伟达宣布恢复黄仁勋CEO身份，那以前被曝反对黄仁勋的临时CEO科莱特·克雷斯还能在英伟达混下去吗？](https://www.zhihu.com/question/2108321152791736600)
1. [如果用一句话总结，《大明王朝 1566》到底讲了什么？](https://www.zhihu.com/question/2039767623869666000)
1. [BLG 庆功饭堂夜上 Viper 称 24 年总决赛第五局阵容难玩，当时 BP 沟通存在哪些问题？](https://www.zhihu.com/question/2107776444789268500)
1. [某部委员工与间谍签署「保密与忠诚」条款、窃取百余份情报被判死刑，哪些信息值得关注？](https://www.zhihu.com/question/2108143417800615200)
1. [《GTA6》官宣首日零售销售额37.9亿美元、预售3250万份，这个成绩是什么水平？](https://www.zhihu.com/question/2107430348179219000)
1. [黎曼猜想被证明，人类数学家还有用吗？学数学专业的人还有意义吗？](https://www.zhihu.com/question/2107410046787262000)
1. [问界M9车主开辅助驾驶熟睡引热议，怎么看待此事？](https://www.zhihu.com/question/2107839702669837600)
1. [英伟达卖空者预计亏损 122 亿美元，创下 2019 年以来最大单日亏损，怎么看待这次史诗级空头暴击？](https://www.zhihu.com/question/2108467878504812500)
1. [《西虹市首富》里面想花完钱却越花越多的情况，现实里面会发生吗？](https://www.zhihu.com/question/428046378)
1. [网传红果短剧最热50词中，「重生」登顶，这份名单跟你日常刷剧体感一样吗？反映了中国观众哪些偏好趋势？](https://www.zhihu.com/question/2108225841003853000)
1. [英伟达进入黄仁勋2.0时代，这一次和之前相比发生了哪些变化？黄仁勋需要如何证明自己？](https://www.zhihu.com/question/2108553707339998200)
1. [为什么吕子乔不撩诺澜？](https://www.zhihu.com/question/497073110)
1. [马斯克转发黄仁勋复职公告，称「错误已经被纠正」，为啥马斯克这么支持黄仁勋？背后有哪些利益关系？](https://www.zhihu.com/question/2108338140326754300)
1. [全国首例「性侵认定工伤」案劳动争议案一审判决，当事人崔丽丽获赔 137 万余元，如何看待这一判决？](https://www.zhihu.com/question/2108221687007287000)
1. [2026 年 U17 世界杯赵松源双响，U17 国足 2 比 2 战平摩洛哥，如何评价他的发挥？](https://www.zhihu.com/question/2108387292587074600)
1. [如何看待Anthropic数学家Alpöge称黎曼猜想25万页证明是玩笑，Lean代码是垃圾但能编译？](https://www.zhihu.com/question/2108555122380902400)
1. [华为史上最强大折叠Mate X8发布，有哪些亮点？对折叠屏行业有何意义？](https://www.zhihu.com/question/2108246172838129700)
1. [如何看待 BLG 夺冠后，米勒等 LPL 解说及曾恶意带 Bin 节奏的 UP 主被群起「清算」？](https://www.zhihu.com/question/2106518167774352100)
1. [阿姨花100元参加旅游团，却花34万元买了套房，涉事者要担责吗？是如何诱导中老年人一步步高价购房的？](https://www.zhihu.com/question/2108228048419906300)
1. [特朗普称亲自说服英伟达董事会推动黄仁勋复职，副总统万斯出面沟通，白宫为何这么拼？这波介入起了多大作用？](https://www.zhihu.com/question/2108467893239400200)
1. [如何看待华为Mate X8 在屏幕上的全面升级，有哪些技术突破值得关注？](https://www.zhihu.com/question/2108246091724609000)
1. [成毅主演《两京十五日》口碑两极分化，核心原因是什么？](https://www.zhihu.com/question/2107756804830671000)
1. [U17世界杯小组赛，中国U17男足补时读秒阶段遭绝平，最终2比2摩洛哥，怎样评价本场比赛？](https://www.zhihu.com/question/2108346189238067700)
1. [懂车帝回应「测试内容大调整」，称不再开放对比类内容等信息失实，具体是怎么回事？实际有哪些调整？](https://www.zhihu.com/question/2108257367678613200)
1. [骑手一句「treetree的」带火披萨店炸鸡，老板直言爆单做不过来，为啥此类视频能迅速调起大众购买欲？](https://www.zhihu.com/question/2108166891873073000)
1. [黄仁勋辞任后 11 天被全票请回，这波极限拉扯到底谁输谁赢？这次回归，他真能就此高枕无忧吗？](https://www.zhihu.com/question/2108357079689860900)
1. [幼儿园要招两岁孩子了，新政策支持幼儿园改造扩建，举办两至三岁幼儿的托班，该举措对家长和孩子有哪些好处？](https://www.zhihu.com/question/2108198291775165200)
1. [黄仁勋称将以最大的谦卑和新的承诺承担这一责任，英伟达接下来将怎样发展？此前的策略会发生变化吗？](https://www.zhihu.com/question/2108335183820579000)
1. [Digital Foundry 称《GTA6》即便高端 PC 也难稳 60 帧，其核心瓶颈要如何解决？](https://www.zhihu.com/question/2107441603245876500)
1. [有哪些化学冷知识？](https://www.zhihu.com/question/38488404)
1. [黄仁勋「熹妃回宫」特朗普帮了多大的忙？对特朗普会有哪些好处？](https://www.zhihu.com/question/2108326762346017800)
1. [《后会友期》第六期马天宇爆哭，他的问题好像和友情无关了，他不能和任何人建立亲密关系，根本问题是什么？](https://www.zhihu.com/question/2107131481713815800)
1. [如何看待俄海军20380型护卫舰「水星」号在利比亚班加西港遭袭起火爆炸，泽连斯基证实系乌方无人艇击沉？](https://www.zhihu.com/question/2107987555467654400)
1. [为什么现在高铁、火车不能开窗，以前火车却可以？](https://www.zhihu.com/question/11998951249)
1. [汽车明显在增多，为啥有的洗车店却干不下去了？](https://www.zhihu.com/question/541903869)
1. [真有“只可意会，不可言传”的事物吗？](https://www.zhihu.com/question/2098095491963675400)
1. [NVIDIA董事会宣布即日起恢复黄仁勋的总裁、首席执行官和董事职务。如何评价该事件？](https://www.zhihu.com/question/2108319925819523300)
1. [你觉得地暖好还是暖气片好？](https://www.zhihu.com/question/1900096168882569200)
1. [为什么大便之前体重和大便之后的体重一样？难道排泄物没有重量吗？](https://www.zhihu.com/question/2105195950671245300)
1. [孙权比曹操、刘备晚去世30年，为什么不趁机一统天下，而是沉迷权斗?](https://www.zhihu.com/question/2086056176236639500)
1. [哪个国家里私家车上贴国旗挂国旗(非车牌上)的比例最高?](https://www.zhihu.com/question/2090851256197722400)
1. [如何评价佟丽娅、王皓主演的喜剧电影《我没错！》？](https://www.zhihu.com/question/2104633342549300500)
1. [男人怎么能让外貌有年轻的感觉？](https://www.zhihu.com/question/2014041387084030700)
1. [孩子放学后跟我说「妈妈，今天班主任又发火了，在班里骂我们班考得真差，丢人」，你怎么回答？](https://www.zhihu.com/question/2106763437380523300)
1. [为什么还有人（特别是有些老板）固执的认为不打游戏的常规办公台式机，10多年前的四代i5仍然足够？](https://www.zhihu.com/question/1987103901682517000)
1. [哪部影视剧中的细节处理最令你印象深刻？](https://www.zhihu.com/question/352418691)
1. [人生在世应该怎么过？](https://www.zhihu.com/question/2100147338769609200)
1. [网上那么多的人烧token用agent，但我觉得直接调用api好贵，是我太穷了吗？](https://www.zhihu.com/question/2074853935786075000)
1. [如何评价 Google 发布的 Gemini 4 Neon？](https://www.zhihu.com/question/2106628033834768000)
1. [能分享一下你今天的饮食吗？](https://www.zhihu.com/question/1909017762078127000)
1. [张家齐妈妈按女儿要求写下400字反思并道歉，承认自己太唠叨，一次道歉能修复长期疏远的亲子关系吗？](https://www.zhihu.com/question/2107891385890071300)

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
<!-- 最后更新时间 Tue Nov 24 2026 20:40:18 GMT+0800 (China Standard Time) -->

1. [习近平主席向世界推介中国这四座城市](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%B8%BB%E5%B8%AD%E5%90%91%E4%B8%96%E7%95%8C%E6%8E%A8%E4%BB%8B%E4%B8%AD%E5%9B%BD%E8%BF%99%E5%9B%9B%E5%BA%A7%E5%9F%8E%E5%B8%82%23&Refer=new_time)
1. [陈吉宁被查](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%90%89%E5%AE%81%E8%A2%AB%E6%9F%A5%23&t=31&band_rank=1&Refer=top)
1. [19楼落地窗底部装无限位外凸窗](https://s.weibo.com//weibo?q=%2319%E6%A5%BC%E8%90%BD%E5%9C%B0%E7%AA%97%E5%BA%95%E9%83%A8%E8%A3%85%E6%97%A0%E9%99%90%E4%BD%8D%E5%A4%96%E5%87%B8%E7%AA%97%23&t=31&band_rank=2&Refer=top)
1. [绿色智引擎驱动低碳出海](https://s.weibo.com//weibo?q=%23%E7%BB%BF%E8%89%B2%E6%99%BA%E5%BC%95%E6%93%8E%E9%A9%B1%E5%8A%A8%E4%BD%8E%E7%A2%B3%E5%87%BA%E6%B5%B7%23&t=31&band_rank=3&Refer=top)
1. [马天宇文吉儿矛盾比张萌都大](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E6%96%87%E5%90%89%E5%84%BF%E7%9F%9B%E7%9B%BE%E6%AF%94%E5%BC%A0%E8%90%8C%E9%83%BD%E5%A4%A7%23&t=31&band_rank=4&Refer=top)
1. [曝Mate90积分国补到手4616](https://s.weibo.com//weibo?q=%23%E6%9B%9DMate90%E7%A7%AF%E5%88%86%E5%9B%BD%E8%A1%A5%E5%88%B0%E6%89%8B4616%23&t=31&band_rank=5&Refer=top)
1. [维嘉跟王菲说别介意我蹭你流量](https://s.weibo.com//weibo?q=%23%E7%BB%B4%E5%98%89%E8%B7%9F%E7%8E%8B%E8%8F%B2%E8%AF%B4%E5%88%AB%E4%BB%8B%E6%84%8F%E6%88%91%E8%B9%AD%E4%BD%A0%E6%B5%81%E9%87%8F%23&t=31&band_rank=6&Refer=top)
1. [女子打扫老人发霉房屋后发烧吐血丝](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E6%89%AB%E8%80%81%E4%BA%BA%E5%8F%91%E9%9C%89%E6%88%BF%E5%B1%8B%E5%90%8E%E5%8F%91%E7%83%A7%E5%90%90%E8%A1%80%E4%B8%9D%23&t=31&band_rank=7&Refer=top)
1. [男子杀妻抛尸后伪装好女婿10年](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%A6%BB%E6%8A%9B%E5%B0%B8%E5%90%8E%E4%BC%AA%E8%A3%85%E5%A5%BD%E5%A5%B3%E5%A9%BF10%E5%B9%B4%23&t=31&band_rank=8&Refer=top)
1. [小米三季度净利润48.84亿](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%B8%89%E5%AD%A3%E5%BA%A6%E5%87%80%E5%88%A9%E6%B6%A648.84%E4%BA%BF%23&t=31&band_rank=9&Refer=top)
1. [女子峨嵋山极限通勤上班半年瘦12斤](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B3%A8%E5%B5%8B%E5%B1%B1%E6%9E%81%E9%99%90%E9%80%9A%E5%8B%A4%E4%B8%8A%E7%8F%AD%E5%8D%8A%E5%B9%B4%E7%98%A612%E6%96%A4%23&t=31&band_rank=10&Refer=top)
1. [贾静雯 修杰楷](https://s.weibo.com//weibo?q=%E8%B4%BE%E9%9D%99%E9%9B%AF%20%E4%BF%AE%E6%9D%B0%E6%A5%B7&t=31&band_rank=11&Refer=top)
1. [康熙十二世孙称雍正篡位](https://s.weibo.com//weibo?q=%E5%BA%B7%E7%86%99%E5%8D%81%E4%BA%8C%E4%B8%96%E5%AD%99%E7%A7%B0%E9%9B%8D%E6%AD%A3%E7%AF%A1%E4%BD%8D&t=31&band_rank=12&Refer=top)
1. [文吉儿甲状腺手术后胖了20斤](https://s.weibo.com//weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E7%94%B2%E7%8A%B6%E8%85%BA%E6%89%8B%E6%9C%AF%E5%90%8E%E8%83%96%E4%BA%8620%E6%96%A4%23&t=31&band_rank=13&Refer=top)
1. [林智妍李到晛分手](https://s.weibo.com//weibo?q=%23%E6%9E%97%E6%99%BA%E5%A6%8D%E6%9D%8E%E5%88%B0%E6%99%9B%E5%88%86%E6%89%8B%23&t=31&band_rank=14&Refer=top)
1. [韩国网友对内娱帅哥的分类](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E5%AF%B9%E5%86%85%E5%A8%B1%E5%B8%85%E5%93%A5%E7%9A%84%E5%88%86%E7%B1%BB%23&t=31&band_rank=15&Refer=top)
1. [卢旺达摸着中国人过河](https://s.weibo.com//weibo?q=%E5%8D%A2%E6%97%BA%E8%BE%BE%E6%91%B8%E7%9D%80%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%BF%87%E6%B2%B3&t=31&band_rank=16&Refer=top)
1. [小城良方央八收视率破4](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%A4%AE%E5%85%AB%E6%94%B6%E8%A7%86%E7%8E%87%E7%A0%B44%23&t=31&band_rank=17&Refer=top)
1. [陆婷给曾艳芬发律师函](https://s.weibo.com//weibo?q=%23%E9%99%86%E5%A9%B7%E7%BB%99%E6%9B%BE%E8%89%B3%E8%8A%AC%E5%8F%91%E5%BE%8B%E5%B8%88%E5%87%BD%23&t=31&band_rank=18&Refer=top)
1. [巴黎世家机车包重返顶流](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E9%BB%8E%E4%B8%96%E5%AE%B6%E6%9C%BA%E8%BD%A6%E5%8C%85%E9%87%8D%E8%BF%94%E9%A1%B6%E6%B5%81%23&t=31&band_rank=19&Refer=top)
1. [浙江卫视一口气官宣10部AI综艺](https://s.weibo.com//weibo?q=%23%E6%B5%99%E6%B1%9F%E5%8D%AB%E8%A7%86%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%98%E5%AE%A310%E9%83%A8AI%E7%BB%BC%E8%89%BA%23&t=31&band_rank=20&Refer=top)
1. [姚译添要做全女综艺](https://s.weibo.com//weibo?q=%23%E5%A7%9A%E8%AF%91%E6%B7%BB%E8%A6%81%E5%81%9A%E5%85%A8%E5%A5%B3%E7%BB%BC%E8%89%BA%23&t=31&band_rank=21&Refer=top)
1. [张萌昨天才知道马天宇给她浪姐加油](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E6%98%A8%E5%A4%A9%E6%89%8D%E7%9F%A5%E9%81%93%E9%A9%AC%E5%A4%A9%E5%AE%87%E7%BB%99%E5%A5%B9%E6%B5%AA%E5%A7%90%E5%8A%A0%E6%B2%B9%23&t=31&band_rank=22&Refer=top)
1. [要了两个月生活费才发现认错人了](https://s.weibo.com//weibo?q=%E8%A6%81%E4%BA%86%E4%B8%A4%E4%B8%AA%E6%9C%88%E7%94%9F%E6%B4%BB%E8%B4%B9%E6%89%8D%E5%8F%91%E7%8E%B0%E8%AE%A4%E9%94%99%E4%BA%BA%E4%BA%86&t=31&band_rank=23&Refer=top)
1. [70%肝癌早期无明显症状](https://s.weibo.com//weibo?q=%2370%25%E8%82%9D%E7%99%8C%E6%97%A9%E6%9C%9F%E6%97%A0%E6%98%8E%E6%98%BE%E7%97%87%E7%8A%B6%23&t=31&band_rank=24&Refer=top)
1. [新娘提1341次分手新郎回1342次不行](https://s.weibo.com//weibo?q=%23%E6%96%B0%E5%A8%98%E6%8F%901341%E6%AC%A1%E5%88%86%E6%89%8B%E6%96%B0%E9%83%8E%E5%9B%9E1342%E6%AC%A1%E4%B8%8D%E8%A1%8C%23&t=31&band_rank=25&Refer=top)
1. [49岁李维嘉家里干净得没有一根头发](https://s.weibo.com//weibo?q=%2349%E5%B2%81%E6%9D%8E%E7%BB%B4%E5%98%89%E5%AE%B6%E9%87%8C%E5%B9%B2%E5%87%80%E5%BE%97%E6%B2%A1%E6%9C%89%E4%B8%80%E6%A0%B9%E5%A4%B4%E5%8F%91%23&t=31&band_rank=26&Refer=top)
1. [赚了多少钱都别炫](https://s.weibo.com//weibo?q=%E8%B5%9A%E4%BA%86%E5%A4%9A%E5%B0%91%E9%92%B1%E9%83%BD%E5%88%AB%E7%82%AB&t=31&band_rank=27&Refer=top)
1. [肝不好的人身上可能有一黄二红三黑](https://s.weibo.com//weibo?q=%23%E8%82%9D%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%BA%E8%BA%AB%E4%B8%8A%E5%8F%AF%E8%83%BD%E6%9C%89%E4%B8%80%E9%BB%84%E4%BA%8C%E7%BA%A2%E4%B8%89%E9%BB%91%23&t=31&band_rank=28&Refer=top)
1. [根本装不出有钱人的松弛感](https://s.weibo.com//weibo?q=%E6%A0%B9%E6%9C%AC%E8%A3%85%E4%B8%8D%E5%87%BA%E6%9C%89%E9%92%B1%E4%BA%BA%E7%9A%84%E6%9D%BE%E5%BC%9B%E6%84%9F&t=31&band_rank=29&Refer=top)
1. [余承东 iPhoneDuo](https://s.weibo.com//weibo?q=%E4%BD%99%E6%89%BF%E4%B8%9C%20iPhoneDuo&t=31&band_rank=30&Refer=top)
1. [黄仁勋复职穿的是Dior棉夹克](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%A4%8D%E8%81%8C%E7%A9%BF%E7%9A%84%E6%98%AFDior%E6%A3%89%E5%A4%B9%E5%85%8B%23&t=31&band_rank=31&Refer=top)
1. [吴胜华受贿1.13亿余元](https://s.weibo.com//weibo?q=%23%E5%90%B4%E8%83%9C%E5%8D%8E%E5%8F%97%E8%B4%BF1.13%E4%BA%BF%E4%BD%99%E5%85%83%23&t=31&band_rank=32&Refer=top)
1. [为什么有人看病能在诊室待很久](https://s.weibo.com//weibo?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%BA%E7%9C%8B%E7%97%85%E8%83%BD%E5%9C%A8%E8%AF%8A%E5%AE%A4%E5%BE%85%E5%BE%88%E4%B9%85&t=31&band_rank=33&Refer=top)
1. [曾艳芬陆婷聊天记录](https://s.weibo.com//weibo?q=%23%E6%9B%BE%E8%89%B3%E8%8A%AC%E9%99%86%E5%A9%B7%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23&t=31&band_rank=34&Refer=top)
1. [徐彰彬黄铉辰疑似机场起争执](https://s.weibo.com//weibo?q=%23%E5%BE%90%E5%BD%B0%E5%BD%AC%E9%BB%84%E9%93%89%E8%BE%B0%E7%96%91%E4%BC%BC%E6%9C%BA%E5%9C%BA%E8%B5%B7%E4%BA%89%E6%89%A7%23&t=31&band_rank=35&Refer=top)
1. [华伦天奴活动造型](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E4%BC%A6%E5%A4%A9%E5%A5%B4%E6%B4%BB%E5%8A%A8%E9%80%A0%E5%9E%8B%23&t=31&band_rank=36&Refer=top)
1. [润到美国三个月就受不了](https://s.weibo.com//weibo?q=%E6%B6%A6%E5%88%B0%E7%BE%8E%E5%9B%BD%E4%B8%89%E4%B8%AA%E6%9C%88%E5%B0%B1%E5%8F%97%E4%B8%8D%E4%BA%86&t=31&band_rank=37&Refer=top)
1. [青稚白小纯你们到底私下吃了多少火锅](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E4%BD%A0%E4%BB%AC%E5%88%B0%E5%BA%95%E7%A7%81%E4%B8%8B%E5%90%83%E4%BA%86%E5%A4%9A%E5%B0%91%E7%81%AB%E9%94%85%23&t=31&band_rank=38&Refer=top)
1. [冬季取暖体感等级图鉴](https://s.weibo.com//weibo?q=%23%E5%86%AC%E5%AD%A3%E5%8F%96%E6%9A%96%E4%BD%93%E6%84%9F%E7%AD%89%E7%BA%A7%E5%9B%BE%E9%89%B4%23&t=31&band_rank=39&Refer=top)
1. [TF四代五公演唱会纪录片](https://s.weibo.com//weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BA%AA%E5%BD%95%E7%89%87%23&t=31&band_rank=40&Refer=top)
1. [易烊千玺就这样热脸贴冷屁股](https://s.weibo.com//weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B0%B1%E8%BF%99%E6%A0%B7%E7%83%AD%E8%84%B8%E8%B4%B4%E5%86%B7%E5%B1%81%E8%82%A1%23&t=31&band_rank=41&Refer=top)
1. [什么样的人需要管理体重](https://s.weibo.com//weibo?q=%23%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%E4%BA%BA%E9%9C%80%E8%A6%81%E7%AE%A1%E7%90%86%E4%BD%93%E9%87%8D%23&t=31&band_rank=42&Refer=top)
1. [深圳感谢市民全妆出街](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%84%9F%E8%B0%A2%E5%B8%82%E6%B0%91%E5%85%A8%E5%A6%86%E5%87%BA%E8%A1%97%23&t=31&band_rank=43&Refer=top)
1. [特朗普称在深圳吃到很棒的中国菜](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%9C%A8%E6%B7%B1%E5%9C%B3%E5%90%83%E5%88%B0%E5%BE%88%E6%A3%92%E7%9A%84%E4%B8%AD%E5%9B%BD%E8%8F%9C%23&t=31&band_rank=44&Refer=top)
1. [高迪憔悴了](https://s.weibo.com//weibo?q=%23%E9%AB%98%E8%BF%AA%E6%86%94%E6%82%B4%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [A股科技跳水原因找到了](https://s.weibo.com//weibo?q=%23A%E8%82%A1%E7%A7%91%E6%8A%80%E8%B7%B3%E6%B0%B4%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [鹿晗北京风很大吗](https://s.weibo.com//weibo?q=%23%E9%B9%BF%E6%99%97%E5%8C%97%E4%BA%AC%E9%A3%8E%E5%BE%88%E5%A4%A7%E5%90%97%23&t=31&band_rank=47&Refer=top)
1. [空调开到30度屋里还是不热](https://s.weibo.com//weibo?q=%E7%A9%BA%E8%B0%83%E5%BC%80%E5%88%B030%E5%BA%A6%E5%B1%8B%E9%87%8C%E8%BF%98%E6%98%AF%E4%B8%8D%E7%83%AD&t=31&band_rank=48&Refer=top)
1. [无畏一诺直播](https://s.weibo.com//weibo?q=%E6%97%A0%E7%95%8F%E4%B8%80%E8%AF%BA%E7%9B%B4%E6%92%AD&t=31&band_rank=49&Refer=top)
1. [90M文本整惨DeepSeek](https://s.weibo.com//weibo?q=90M%E6%96%87%E6%9C%AC%E6%95%B4%E6%83%A8DeepSeek&t=31&band_rank=50&Refer=top)
1. [100秒看习近平主席的APEC时间](https://s.weibo.com//weibo?q=%23100%E7%A7%92%E7%9C%8B%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%B8%BB%E5%B8%AD%E7%9A%84APEC%E6%97%B6%E9%97%B4%23&Refer=new_time)
1. [34米路仅12秒绿灯已调整为28秒](https://s.weibo.com//weibo?q=%2334%E7%B1%B3%E8%B7%AF%E4%BB%8512%E7%A7%92%E7%BB%BF%E7%81%AF%E5%B7%B2%E8%B0%83%E6%95%B4%E4%B8%BA28%E7%A7%92%23&t=31&band_rank=1&Refer=top)
1. [白小纯 嘉年华](https://s.weibo.com//weibo?q=%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E5%98%89%E5%B9%B4%E5%8D%8E&t=31&band_rank=2&Refer=top)
1. [智能穿戴打开消费新空间](https://s.weibo.com//weibo?q=%23%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4%E6%89%93%E5%BC%80%E6%B6%88%E8%B4%B9%E6%96%B0%E7%A9%BA%E9%97%B4%23&t=31&band_rank=3&Refer=top)
1. [网购裤子扯出内裤平台仅退款](https://s.weibo.com//weibo?q=%23%E7%BD%91%E8%B4%AD%E8%A3%A4%E5%AD%90%E6%89%AF%E5%87%BA%E5%86%85%E8%A3%A4%E5%B9%B3%E5%8F%B0%E4%BB%85%E9%80%80%E6%AC%BE%23&t=31&band_rank=4&Refer=top)
1. [AI短剧丑狐爆火](https://s.weibo.com//weibo?q=AI%E7%9F%AD%E5%89%A7%E4%B8%91%E7%8B%90%E7%88%86%E7%81%AB&t=31&band_rank=5&Refer=top)
1. [黄仁勋复职原因](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%A4%8D%E8%81%8C%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=6&Refer=top)
1. [文吉儿只是说话直白](https://s.weibo.com//weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E5%8F%AA%E6%98%AF%E8%AF%B4%E8%AF%9D%E7%9B%B4%E7%99%BD%23&t=31&band_rank=7&Refer=top)
1. [黄仁勋说我犯了一些非常严重的错误](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%AF%B4%E6%88%91%E7%8A%AF%E4%BA%86%E4%B8%80%E4%BA%9B%E9%9D%9E%E5%B8%B8%E4%B8%A5%E9%87%8D%E7%9A%84%E9%94%99%E8%AF%AF%23&t=31&band_rank=8&Refer=top)
1. [韩股暴涨熔断](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E8%82%A1%E6%9A%B4%E6%B6%A8%E7%86%94%E6%96%AD%23&t=31&band_rank=9&Refer=top)
1. [黄仁勋回归后纽约时报遭群嘲](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%9B%9E%E5%BD%92%E5%90%8E%E7%BA%BD%E7%BA%A6%E6%97%B6%E6%8A%A5%E9%81%AD%E7%BE%A4%E5%98%B2%23&t=31&band_rank=10&Refer=top)
1. [陈伟霆尺度太大只能选在澳门了](https://s.weibo.com//weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E5%B0%BA%E5%BA%A6%E5%A4%AA%E5%A4%A7%E5%8F%AA%E8%83%BD%E9%80%89%E5%9C%A8%E6%BE%B3%E9%97%A8%E4%BA%86%23&t=31&band_rank=11&Refer=top)
1. [男子强奸女友出狱后将其掐死](https://s.weibo.com//weibo?q=%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%E5%A5%B3%E5%8F%8B%E5%87%BA%E7%8B%B1%E5%90%8E%E5%B0%86%E5%85%B6%E6%8E%90%E6%AD%BB&t=31&band_rank=12&Refer=top)
1. [文吉儿 校花](https://s.weibo.com//weibo?q=%E6%96%87%E5%90%89%E5%84%BF%20%E6%A0%A1%E8%8A%B1&t=31&band_rank=13&Refer=top)
1. [出红毯千万不能站在两个笑星中间](https://s.weibo.com//weibo?q=%23%E5%87%BA%E7%BA%A2%E6%AF%AF%E5%8D%83%E4%B8%87%E4%B8%8D%E8%83%BD%E7%AB%99%E5%9C%A8%E4%B8%A4%E4%B8%AA%E7%AC%91%E6%98%9F%E4%B8%AD%E9%97%B4%23&t=31&band_rank=14&Refer=top)
1. [瘦小女列车长死命拉住跳轨轻生男](https://s.weibo.com//weibo?q=%23%E7%98%A6%E5%B0%8F%E5%A5%B3%E5%88%97%E8%BD%A6%E9%95%BF%E6%AD%BB%E5%91%BD%E6%8B%89%E4%BD%8F%E8%B7%B3%E8%BD%A8%E8%BD%BB%E7%94%9F%E7%94%B7%23&t=31&band_rank=15&Refer=top)
1. [特朗普把抵达深圳照片打印出来了](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%8A%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%E7%85%A7%E7%89%87%E6%89%93%E5%8D%B0%E5%87%BA%E6%9D%A5%E4%BA%86%23&t=31&band_rank=16&Refer=top)
1. [王菲牵李嫣就像牵公主一样](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%8F%B2%E7%89%B5%E6%9D%8E%E5%AB%A3%E5%B0%B1%E5%83%8F%E7%89%B5%E5%85%AC%E4%B8%BB%E4%B8%80%E6%A0%B7%23&t=31&band_rank=17&Refer=top)
1. [白小纯真的交了很多好朋友](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9C%9F%E7%9A%84%E4%BA%A4%E4%BA%86%E5%BE%88%E5%A4%9A%E5%A5%BD%E6%9C%8B%E5%8F%8B%23&t=31&band_rank=18&Refer=top)
1. [孙芮怕被粉丝发现肚子提前去机场躲着](https://s.weibo.com//weibo?q=%23%E5%AD%99%E8%8A%AE%E6%80%95%E8%A2%AB%E7%B2%89%E4%B8%9D%E5%8F%91%E7%8E%B0%E8%82%9A%E5%AD%90%E6%8F%90%E5%89%8D%E5%8E%BB%E6%9C%BA%E5%9C%BA%E8%BA%B2%E7%9D%80%23&t=31&band_rank=19&Refer=top)
1. [特朗普说没人能赶上黄仁勋的成就](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E6%B2%A1%E4%BA%BA%E8%83%BD%E8%B5%B6%E4%B8%8A%E9%BB%84%E4%BB%81%E5%8B%8B%E7%9A%84%E6%88%90%E5%B0%B1%23&t=31&band_rank=20&Refer=top)
1. [老师称现在早恋尺度大](https://s.weibo.com//weibo?q=%E8%80%81%E5%B8%88%E7%A7%B0%E7%8E%B0%E5%9C%A8%E6%97%A9%E6%81%8B%E5%B0%BA%E5%BA%A6%E5%A4%A7&t=31&band_rank=21&Refer=top)
1. [巴基斯坦航天员随神23返回](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%88%AA%E5%A4%A9%E5%91%98%E9%9A%8F%E7%A5%9E23%E8%BF%94%E5%9B%9E%23&t=31&band_rank=22&Refer=top)
1. [神24乘组跨国组队](https://s.weibo.com//weibo?q=%23%E7%A5%9E24%E4%B9%98%E7%BB%84%E8%B7%A8%E5%9B%BD%E7%BB%84%E9%98%9F%23&t=31&band_rank=23&Refer=top)
1. [49岁李维嘉家里干净得没有一根头发](https://s.weibo.com//weibo?q=%2349%E5%B2%81%E6%9D%8E%E7%BB%B4%E5%98%89%E5%AE%B6%E9%87%8C%E5%B9%B2%E5%87%80%E5%BE%97%E6%B2%A1%E6%9C%89%E4%B8%80%E6%A0%B9%E5%A4%B4%E5%8F%91%23&t=31&band_rank=24&Refer=top)
1. [法院回应34米路绿灯12秒行人被撞亡](https://s.weibo.com//weibo?q=%23%E6%B3%95%E9%99%A2%E5%9B%9E%E5%BA%9434%E7%B1%B3%E8%B7%AF%E7%BB%BF%E7%81%AF12%E7%A7%92%E8%A1%8C%E4%BA%BA%E8%A2%AB%E6%92%9E%E4%BA%A1%23&t=31&band_rank=25&Refer=top)
1. [李雪琴居然这么瘦了](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E5%B1%85%E7%84%B6%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23&t=31&band_rank=26&Refer=top)
1. [美国一议员向上翻眼球被质疑非人类](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E8%AE%AE%E5%91%98%E5%90%91%E4%B8%8A%E7%BF%BB%E7%9C%BC%E7%90%83%E8%A2%AB%E8%B4%A8%E7%96%91%E9%9D%9E%E4%BA%BA%E7%B1%BB%23&t=31&band_rank=27&Refer=top)
1. [纯稚 顶流](https://s.weibo.com//weibo?q=%E7%BA%AF%E7%A8%9A%20%E9%A1%B6%E6%B5%81&t=31&band_rank=28&Refer=top)
1. [两京十五日朱瞻基喝药吐了](https://s.weibo.com//weibo?q=%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E6%9C%B1%E7%9E%BB%E5%9F%BA%E5%96%9D%E8%8D%AF%E5%90%90%E4%BA%86&t=31&band_rank=29&Refer=top)
1. [成毅选了一条不讨巧的路](https://s.weibo.com//weibo?q=%E6%88%90%E6%AF%85%E9%80%89%E4%BA%86%E4%B8%80%E6%9D%A1%E4%B8%8D%E8%AE%A8%E5%B7%A7%E7%9A%84%E8%B7%AF&t=31&band_rank=30&Refer=top)
1. [年轻人开始劝父母卖县城空房收息](https://s.weibo.com//weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8A%9D%E7%88%B6%E6%AF%8D%E5%8D%96%E5%8E%BF%E5%9F%8E%E7%A9%BA%E6%88%BF%E6%94%B6%E6%81%AF%23&t=31&band_rank=31&Refer=top)
1. [黄仁勋恢复英伟达CEO职务](https://s.weibo.com//weibo?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%81%A2%E5%A4%8D%E8%8B%B1%E4%BC%9F%E8%BE%BECEO%E8%81%8C%E5%8A%A1&t=31&band_rank=32&Refer=top)
1. [神24乘组](https://s.weibo.com//weibo?q=%23%E7%A5%9E24%E4%B9%98%E7%BB%84%23&t=31&band_rank=33&Refer=top)
1. [蒋欣瘦成这样了](https://s.weibo.com//weibo?q=%E8%92%8B%E6%AC%A3%E7%98%A6%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86&t=31&band_rank=34&Refer=top)
1. [猝死女教师最后朋友圈称被焦虑填满](https://s.weibo.com//weibo?q=%23%E7%8C%9D%E6%AD%BB%E5%A5%B3%E6%95%99%E5%B8%88%E6%9C%80%E5%90%8E%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%A7%B0%E8%A2%AB%E7%84%A6%E8%99%91%E5%A1%AB%E6%BB%A1%23&t=31&band_rank=35&Refer=top)
1. [全方位织密一老一小照护网](https://s.weibo.com//weibo?q=%23%E5%85%A8%E6%96%B9%E4%BD%8D%E7%BB%87%E5%AF%86%E4%B8%80%E8%80%81%E4%B8%80%E5%B0%8F%E7%85%A7%E6%8A%A4%E7%BD%91%23&t=31&band_rank=36&Refer=top)
1. [詹姆斯半场压哨三分](https://s.weibo.com//weibo?q=%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8D%8A%E5%9C%BA%E5%8E%8B%E5%93%A8%E4%B8%89%E5%88%86&t=31&band_rank=37&Refer=top)
1. [孙芮疑似23年结的婚](https://s.weibo.com//weibo?q=%23%E5%AD%99%E8%8A%AE%E7%96%91%E4%BC%BC23%E5%B9%B4%E7%BB%93%E7%9A%84%E5%A9%9A%23&t=31&band_rank=38&Refer=top)
1. [芒果赶紧放母带还文吉儿清白](https://s.weibo.com//weibo?q=%23%E8%8A%92%E6%9E%9C%E8%B5%B6%E7%B4%A7%E6%94%BE%E6%AF%8D%E5%B8%A6%E8%BF%98%E6%96%87%E5%90%89%E5%84%BF%E6%B8%85%E7%99%BD%23&t=31&band_rank=39&Refer=top)
1. [作者称丑狐寒心脸灵感来自工作](https://s.weibo.com//weibo?q=%23%E4%BD%9C%E8%80%85%E7%A7%B0%E4%B8%91%E7%8B%90%E5%AF%92%E5%BF%83%E8%84%B8%E7%81%B5%E6%84%9F%E6%9D%A5%E8%87%AA%E5%B7%A5%E4%BD%9C%23&t=31&band_rank=40&Refer=top)
1. [县委书记走访红糖厂家说捡点渣渣吃](https://s.weibo.com//weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%B5%B0%E8%AE%BF%E7%BA%A2%E7%B3%96%E5%8E%82%E5%AE%B6%E8%AF%B4%E6%8D%A1%E7%82%B9%E6%B8%A3%E6%B8%A3%E5%90%83%23&t=31&band_rank=41&Refer=top)
1. [果然世界就是一个巨大的羊群效应](https://s.weibo.com//weibo?q=%23%E6%9E%9C%E7%84%B6%E4%B8%96%E7%95%8C%E5%B0%B1%E6%98%AF%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E7%BE%8A%E7%BE%A4%E6%95%88%E5%BA%94%23&t=31&band_rank=42&Refer=top)
1. [甲亢哥百米跑出10秒35](https://s.weibo.com//weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E7%99%BE%E7%B1%B3%E8%B7%91%E5%87%BA10%E7%A7%9235%23&t=31&band_rank=43&Refer=top)
1. [终于见识到镜头有多苛刻了](https://s.weibo.com//weibo?q=%23%E7%BB%88%E4%BA%8E%E8%A7%81%E8%AF%86%E5%88%B0%E9%95%9C%E5%A4%B4%E6%9C%89%E5%A4%9A%E8%8B%9B%E5%88%BB%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [脂肪肝的危害或许被低估了](https://s.weibo.com//weibo?q=%23%E8%84%82%E8%82%AA%E8%82%9D%E7%9A%84%E5%8D%B1%E5%AE%B3%E6%88%96%E8%AE%B8%E8%A2%AB%E4%BD%8E%E4%BC%B0%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [复联五预告里一半人根本不认识](https://s.weibo.com//weibo?q=%E5%A4%8D%E8%81%94%E4%BA%94%E9%A2%84%E5%91%8A%E9%87%8C%E4%B8%80%E5%8D%8A%E4%BA%BA%E6%A0%B9%E6%9C%AC%E4%B8%8D%E8%AE%A4%E8%AF%86&t=31&band_rank=46&Refer=top)
1. [青稚一直道歉的原因](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E4%B8%80%E7%9B%B4%E9%81%93%E6%AD%89%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=47&Refer=top)
1. [浮嶋敏回应被绝平](https://s.weibo.com//weibo?q=%23%E6%B5%AE%E5%B6%8B%E6%95%8F%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%BB%9D%E5%B9%B3%23&t=31&band_rank=48&Refer=top)
1. [神24航天员见面会](https://s.weibo.com//weibo?q=%23%E7%A5%9E24%E8%88%AA%E5%A4%A9%E5%91%98%E8%A7%81%E9%9D%A2%E4%BC%9A%23&t=31&band_rank=49&Refer=top)
1. [舒淇得奖冯德伦反应](https://s.weibo.com//weibo?q=%23%E8%88%92%E6%B7%87%E5%BE%97%E5%A5%96%E5%86%AF%E5%BE%B7%E4%BC%A6%E5%8F%8D%E5%BA%94%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
