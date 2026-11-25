# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-25 05:13:45

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
<!-- 最后更新时间 Wed Nov 25 2026 09:01:32 GMT+0800 (China Standard Time) -->

1. [神舟二十四号载人飞船发射成功](https://so.toutiao.com/search?keyword=神舟二十四号载人飞船发射成功)
1. [特朗普对一道中国菜念念不忘](https://so.toutiao.com/search?keyword=特朗普对一道中国菜念念不忘)
1. [神舟二十四号任务看点拉满](https://so.toutiao.com/search?keyword=神舟二十四号任务看点拉满)
1. [上海就陈吉宁被查表态](https://so.toutiao.com/search?keyword=上海就陈吉宁被查表态)
1. [智谱为何持续震荡](https://so.toutiao.com/search?keyword=智谱为何持续震荡)
1. [男子劝父母卖掉空置8年婚房](https://so.toutiao.com/search?keyword=男子劝父母卖掉空置8年婚房)
1. [陈吉宁被查](https://so.toutiao.com/search?keyword=陈吉宁被查)
1. [小米汽车利润为何突然掉头](https://so.toutiao.com/search?keyword=小米汽车利润为何突然掉头)
1. [超级厄尔尼诺发威 暴雪袭击日本](https://so.toutiao.com/search?keyword=超级厄尔尼诺发威%20暴雪袭击日本)
1. [女老师阔腿裤钻进老鼠捏住继续讲课](https://so.toutiao.com/search?keyword=女老师阔腿裤钻进老鼠捏住继续讲课)
1. [今天是毛岸英同志牺牲76周年](https://so.toutiao.com/search?keyword=今天是毛岸英同志牺牲76周年)
1. [国内成品油零售价有望再下调](https://so.toutiao.com/search?keyword=国内成品油零售价有望再下调)
1. [优秀辟谣作品高校巡展举办](https://so.toutiao.com/search?keyword=优秀辟谣作品高校巡展举办)
1. [地级市市长转任县委书记](https://so.toutiao.com/search?keyword=地级市市长转任县委书记)
1. [张雪机车引燃摩托热](https://so.toutiao.com/search?keyword=张雪机车引燃摩托热)
1. [张纪中妻子自曝领证时才得知丈夫年龄](https://so.toutiao.com/search?keyword=张纪中妻子自曝领证时才得知丈夫年龄)
1. [老师回忆航天员武毅：他肯钻研不服输](https://so.toutiao.com/search?keyword=老师回忆航天员武毅：他肯钻研不服输)
1. [网友手绘《两京十五日》太子出城线](https://so.toutiao.com/search?keyword=网友手绘《两京十五日》太子出城线)
1. [撞脸张雪男子年轻时被说像林俊杰](https://so.toutiao.com/search?keyword=撞脸张雪男子年轻时被说像林俊杰)
1. [世界城市体系排名香港登上亚洲第一](https://so.toutiao.com/search?keyword=世界城市体系排名香港登上亚洲第一)
1. [成毅工作室告黑](https://so.toutiao.com/search?keyword=成毅工作室告黑)
1. [余承东：欢迎更多同行一起创新](https://so.toutiao.com/search?keyword=余承东：欢迎更多同行一起创新)
1. [AI模型强大到无法发布了吗](https://so.toutiao.com/search?keyword=AI模型强大到无法发布了吗)
1. [卢卡申科：愿陪泽连斯基赴莫斯科谈判](https://so.toutiao.com/search?keyword=卢卡申科：愿陪泽连斯基赴莫斯科谈判)
1. [鸿蒙正在把折叠屏变成随身工作台](https://so.toutiao.com/search?keyword=鸿蒙正在把折叠屏变成随身工作台)
1. [皇马5-1逆转埃因霍温豪取欧冠5连胜](https://so.toutiao.com/search?keyword=皇马5-1逆转埃因霍温豪取欧冠5连胜)
1. [王传福到底想做多大的生意](https://so.toutiao.com/search?keyword=王传福到底想做多大的生意)
1. [吴昕被6岁小师傅叫奶奶当场愣住](https://so.toutiao.com/search?keyword=吴昕被6岁小师傅叫奶奶当场愣住)
1. [C罗收获个人生涯第987球](https://so.toutiao.com/search?keyword=C罗收获个人生涯第987球)
1. [普京：必将回应乌对俄能源设施的袭击](https://so.toutiao.com/search?keyword=普京：必将回应乌对俄能源设施的袭击)
1. [4000个甲骨文目前认出1500个](https://so.toutiao.com/search?keyword=4000个甲骨文目前认出1500个)
1. [高血压标准变了会影响多少人](https://so.toutiao.com/search?keyword=高血压标准变了会影响多少人)
1. [美国或再挥“关税大棒”](https://so.toutiao.com/search?keyword=美国或再挥“关税大棒”)
1. [年轻人为何流行胳膊上贴“小圆片”](https://so.toutiao.com/search?keyword=年轻人为何流行胳膊上贴“小圆片”)
1. [男子杀妻抛尸后伪装好女婿10年](https://so.toutiao.com/search?keyword=男子杀妻抛尸后伪装好女婿10年)
1. [李维嘉200平的家干净得找不出1根头发](https://so.toutiao.com/search?keyword=李维嘉200平的家干净得找不出1根头发)
1. [财经大V靠什么赚钱](https://so.toutiao.com/search?keyword=财经大V靠什么赚钱)
1. [黎曼猜想证明两天砍掉240万行](https://so.toutiao.com/search?keyword=黎曼猜想证明两天砍掉240万行)
1. [李维嘉回应被王菲搂着唱歌](https://so.toutiao.com/search?keyword=李维嘉回应被王菲搂着唱歌)
1. [东北的洗浴已经这么卷了吗](https://so.toutiao.com/search?keyword=东北的洗浴已经这么卷了吗)
1. [蒋欣瘦成这样了](https://so.toutiao.com/search?keyword=蒋欣瘦成这样了)
1. [华为又有一款手机销量破百万](https://so.toutiao.com/search?keyword=华为又有一款手机销量破百万)
1. [年轻人开始劝父母卖空房收息](https://so.toutiao.com/search?keyword=年轻人开始劝父母卖空房收息)
1. [广东化州举报非法猎捕贩卖鸟类有奖](https://so.toutiao.com/search?keyword=广东化州举报非法猎捕贩卖鸟类有奖)
1. [张萌才知道马天宇给她浪姐加过油](https://so.toutiao.com/search?keyword=张萌才知道马天宇给她浪姐加过油)
1. [中方回应黄仁勋复职](https://so.toutiao.com/search?keyword=中方回应黄仁勋复职)
1. [研究员讲述与月亮的故事](https://so.toutiao.com/search?keyword=研究员讲述与月亮的故事)
1. [中国空间站首次迎外国人有何意义](https://so.toutiao.com/search?keyword=中国空间站首次迎外国人有何意义)
1. [黄奕自曝婚内遭家暴产后背千万债务](https://so.toutiao.com/search?keyword=黄奕自曝婚内遭家暴产后背千万债务)
1. [34米路口只给12秒绿灯 残疾人被撞身亡](https://so.toutiao.com/search?keyword=34米路口只给12秒绿灯%20残疾人被撞身亡)
1. [高血压标准变了？会影响多少人](https://so.toutiao.com/search?keyword=高血压标准变了？会影响多少人)
1. [第三代唐搭载比亚迪线控底盘](https://so.toutiao.com/search?keyword=第三代唐搭载比亚迪线控底盘)
1. [县委书记回应张雪分期买摩托建议](https://so.toutiao.com/search?keyword=县委书记回应张雪分期买摩托建议)
1. [国际高血压指南更新](https://so.toutiao.com/search?keyword=国际高血压指南更新)
1. [1.1万华为员工用上鸿蒙台式机](https://so.toutiao.com/search?keyword=1.1万华为员工用上鸿蒙台式机)
1. [余承东：华为首创磁控展平技术](https://so.toutiao.com/search?keyword=余承东：华为首创磁控展平技术)
1. [村支书网上摇来几百辆车帮村里压路](https://so.toutiao.com/search?keyword=村支书网上摇来几百辆车帮村里压路)
1. [刚果金将暂停钴出口 宁德时代咋应对](https://so.toutiao.com/search?keyword=刚果金将暂停钴出口%20宁德时代咋应对)
1. [东北大爷拿“花洒”浇出一个冰坡](https://so.toutiao.com/search?keyword=东北大爷拿“花洒”浇出一个冰坡)
1. [巴基斯坦小哥为何能拿到“天宫”门票](https://so.toutiao.com/search?keyword=巴基斯坦小哥为何能拿到“天宫”门票)
1. [战火外溢对俄乌冲突有何影响](https://so.toutiao.com/search?keyword=战火外溢对俄乌冲突有何影响)
1. [冬季洗澡越洗越痒？医生提醒](https://so.toutiao.com/search?keyword=冬季洗澡越洗越痒？医生提醒)
1. [吴胜华贪1.13亿被判无期](https://so.toutiao.com/search?keyword=吴胜华贪1.13亿被判无期)
1. [业内：12月中旬前股市有望走出反弹](https://so.toutiao.com/search?keyword=业内：12月中旬前股市有望走出反弹)
1. [华为动态血糖仪将于12月11日开售](https://so.toutiao.com/search?keyword=华为动态血糖仪将于12月11日开售)
1. [魏建军为何主动把焦虑摆在台前](https://so.toutiao.com/search?keyword=魏建军为何主动把焦虑摆在台前)
1. [方力申：横渡港澳的“飞鱼王子”](https://so.toutiao.com/search?keyword=方力申：横渡港澳的“飞鱼王子”)
1. [复盘美股“惊心动魄”的一天](https://so.toutiao.com/search?keyword=复盘美股“惊心动魄”的一天)
1. [老挝摘掉最贫困帽子日媒为何酸了](https://so.toutiao.com/search?keyword=老挝摘掉最贫困帽子日媒为何酸了)
1. [莱昂纳多妙传 安佩姆梅开二度](https://so.toutiao.com/search?keyword=莱昂纳多妙传%20安佩姆梅开二度)
1. [方力申回应横渡港澳筹得千万港元善款](https://so.toutiao.com/search?keyword=方力申回应横渡港澳筹得千万港元善款)
1. [AI时代成毅这样的演员为何稀缺](https://so.toutiao.com/search?keyword=AI时代成毅这样的演员为何稀缺)
1. [华为逆势稳住大折叠起售价背后](https://so.toutiao.com/search?keyword=华为逆势稳住大折叠起售价背后)
1. [张雪干拍卖副业是智商税吗](https://so.toutiao.com/search?keyword=张雪干拍卖副业是智商税吗)
1. [邵永灵：俄海上航线不再安全](https://so.toutiao.com/search?keyword=邵永灵：俄海上航线不再安全)
1. [台名医批民进党鼠目寸光](https://so.toutiao.com/search?keyword=台名医批民进党鼠目寸光)
1. [阿尔巴尼亚否认参与袭击俄护卫舰](https://so.toutiao.com/search?keyword=阿尔巴尼亚否认参与袭击俄护卫舰)
1. [博主：不要急于定义赵松源](https://so.toutiao.com/search?keyword=博主：不要急于定义赵松源)
1. [华为MateX8售价12999元起](https://so.toutiao.com/search?keyword=华为MateX8售价12999元起)
1. [东方算芯探索算力芯片技术路径](https://so.toutiao.com/search?keyword=东方算芯探索算力芯片技术路径)

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
<!-- 最后更新时间 Wed Nov 25 2026 05:13:45 GMT+0800 (China Standard Time) -->

1. [中韩自贸协定谈判里，中方首次同意给予韩国电影、游戏等领域最惠国待遇，将给两国影视行业带来哪些机遇？](https://www.zhihu.com/question/2106818758044030500)
1. [特朗普称黄仁勋是「国家瑰宝」，若在美遇不公可去中国，黄仁勋未来若来华可能有哪些选择？](https://www.zhihu.com/question/2108601916930226000)
1. [小米集团 2026 Q3 财报发布，经调整净利润 48.84 亿元，同比下降56.8%，怎样解读？](https://www.zhihu.com/question/2108615793676137700)
1. [AI 短剧《丑狐》爆火后引发大量讨论，它能戳中观众的核心原因是什么？](https://www.zhihu.com/question/2108451365806776800)
1. [高志凯称欧洲在人工智能发展中的作用几乎是零，这一观点是否站得住脚？](https://www.zhihu.com/question/2104246988380418800)
1. [英伟达卖空者预计亏损 122 亿美元，创下 2019 年以来最大单日亏损，怎么看待这次史诗级空头暴击？](https://www.zhihu.com/question/2108467878504812500)
1. [谷歌 Android17 全球份额仅约 1%，安卓版本碎片化为何迟迟难解？](https://www.zhihu.com/question/2099630396027691300)
1. [专家称年轻人持续出现变懒、变沉默等状态，可能并非「社恐」而是精神分裂症阴性症状，是真的吗？该怎样区分？](https://www.zhihu.com/question/2101452936345826600)
1. [为什么让Ai随机说一个1到30之间的数，大部分都会说17？](https://www.zhihu.com/question/2078883145160582400)
1. [《西游记》中，真的是大海里是水，但龙宫内是干的吗？如果是的话，各个人物进龙宫时怎么晾干衣服？](https://www.zhihu.com/question/1924912454988731100)
1. [诸葛亮是否配得上武庙十哲？](https://www.zhihu.com/question/11502497919)
1. [为什么日本剑术流派的名字都这么夸张，梦幻流神道流？](https://www.zhihu.com/question/304413614)
1. [如何评价冬宫密令系列任务？](https://www.zhihu.com/question/2106522180884378600)
1. [你坚持过哪些细小的好习惯？](https://www.zhihu.com/question/26784045)
1. [如何评价库洛投资的AI被曝通过刷票登顶TTS Arena，后被发现除名？](https://www.zhihu.com/question/2108495194920428000)
1. [特朗普称亲自说服英伟达董事会推动黄仁勋复职，副总统万斯出面沟通，白宫为何这么拼？这波介入起了多大作用？](https://www.zhihu.com/question/2108467893239400200)
1. [AI 出现以后，产品经理会不会成为稀缺资源？](https://www.zhihu.com/question/2108136315627763700)
1. [如何评价《黑神话：悟空》主美杨奇评价GTA6是昂贵且低效的艺术品，「工业化」一词是对它的贬损?](https://www.zhihu.com/question/2108009531645092900)
1. [华为Mate 90 Air，作为华为最薄的Mate直板机，算不算重新定义Air品类的行业标准？](https://www.zhihu.com/question/2108501789800657000)
1. [为什么吕子乔不撩诺澜？](https://www.zhihu.com/question/497073110)
1. [全国首例「性侵认定工伤」案劳动争议案一审判决，当事人崔丽丽获赔 137 万余元，如何看待这一判决？](https://www.zhihu.com/question/2108221687007287000)
1. [余承东在享界V8 发布会上说电池团队干不过别人，你怎么看？](https://www.zhihu.com/question/2107136191762126000)
1. [朱某求职改简历将 41 岁改 37 岁遭拒录，起诉公司索赔 10 万，法院判不构成年龄歧视依据是什么？](https://www.zhihu.com/question/2107380462448648200)
1. [奇异值分解（SVD）有哪些很厉害的应用？](https://www.zhihu.com/question/31167170)
1. [人的烦恼是想出来的吗？](https://www.zhihu.com/question/2089061713140245800)
1. [什么馅的饺子在你心中封神？](https://www.zhihu.com/question/631103201)
1. [有没有感觉查酒驾这场闹剧正在慢慢退场呢？](https://www.zhihu.com/question/2106748863524742000)
1. [研究生选导师时，如何判断一位导师是否适合自己？](https://www.zhihu.com/question/2098456382227989000)
1. [为什么大便之前体重和大便之后的体重一样？难道排泄物没有重量吗？](https://www.zhihu.com/question/2105195950671245300)
1. [能源行业里 AIGC 除了做宣传，还能在哪些场景实现真正落地？](https://www.zhihu.com/question/2108212483806777600)

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
<!-- 最后更新时间 Wed Nov 25 2026 07:06:35 GMT+0800 (China Standard Time) -->

1. [习近平主席向世界推介中国这四座城市](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%B8%BB%E5%B8%AD%E5%90%91%E4%B8%96%E7%95%8C%E6%8E%A8%E4%BB%8B%E4%B8%AD%E5%9B%BD%E8%BF%99%E5%9B%9B%E5%BA%A7%E5%9F%8E%E5%B8%82%23&Refer=new_time)
1. [特朗普对一道中国菜念念不忘](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%AF%B9%E4%B8%80%E9%81%93%E4%B8%AD%E5%9B%BD%E8%8F%9C%E5%BF%B5%E5%BF%B5%E4%B8%8D%E5%BF%98%23&t=31&band_rank=1&Refer=top)
1. [黄仁勋回归最大受害者出现](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%9B%9E%E5%BD%92%E6%9C%80%E5%A4%A7%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%23&t=31&band_rank=2&Refer=top)
1. [一张网背后的中国经济底气](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%BC%A0%E7%BD%91%E8%83%8C%E5%90%8E%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%BA%95%E6%B0%94%23&t=31&band_rank=3&Refer=top)
1. [王牌对王牌第十季阵容](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E7%89%8C%E5%AF%B9%E7%8E%8B%E7%89%8C%E7%AC%AC%E5%8D%81%E5%AD%A3%E9%98%B5%E5%AE%B9%23&t=31&band_rank=4&Refer=top)
1. [旺仔牛奶更不好卖了](https://s.weibo.com//weibo?q=%23%E6%97%BA%E4%BB%94%E7%89%9B%E5%A5%B6%E6%9B%B4%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23&t=31&band_rank=5&Refer=top)
1. [曝王牌对王牌10新增常驻王一博](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E7%8E%8B%E7%89%8C%E5%AF%B9%E7%8E%8B%E7%89%8C10%E6%96%B0%E5%A2%9E%E5%B8%B8%E9%A9%BB%E7%8E%8B%E4%B8%80%E5%8D%9A%23&t=31&band_rank=6&Refer=top)
1. [美国拟对数十国加征关税](https://s.weibo.com//weibo?q=%E7%BE%8E%E5%9B%BD%E6%8B%9F%E5%AF%B9%E6%95%B0%E5%8D%81%E5%9B%BD%E5%8A%A0%E5%BE%81%E5%85%B3%E7%A8%8E&t=31&band_rank=7&Refer=top)
1. [陈吉宁被查上海表态](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%90%89%E5%AE%81%E8%A2%AB%E6%9F%A5%E4%B8%8A%E6%B5%B7%E8%A1%A8%E6%80%81%23&t=31&band_rank=8&Refer=top)
1. [皇马5比1逆转埃因霍温](https://s.weibo.com//weibo?q=%E7%9A%87%E9%A9%AC5%E6%AF%941%E9%80%86%E8%BD%AC%E5%9F%83%E5%9B%A0%E9%9C%8D%E6%B8%A9&t=31&band_rank=9&Refer=top)
1. [成毅台词是设计还是硬伤](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E5%8F%B0%E8%AF%8D%E6%98%AF%E8%AE%BE%E8%AE%A1%E8%BF%98%E6%98%AF%E7%A1%AC%E4%BC%A4%23&t=31&band_rank=10&Refer=top)
1. [陈吉宁从清华校长到被查](https://s.weibo.com//weibo?q=%E9%99%88%E5%90%89%E5%AE%81%E4%BB%8E%E6%B8%85%E5%8D%8E%E6%A0%A1%E9%95%BF%E5%88%B0%E8%A2%AB%E6%9F%A5&t=31&band_rank=11&Refer=top)
1. [张艺谋电影 肖战杨幂](https://s.weibo.com//weibo?q=%E5%BC%A0%E8%89%BA%E8%B0%8B%E7%94%B5%E5%BD%B1%20%E8%82%96%E6%88%98%E6%9D%A8%E5%B9%82&t=31&band_rank=12&Refer=top)
1. [黄奕女儿说你都能当艺人为啥我不行](https://s.weibo.com//weibo?q=%E9%BB%84%E5%A5%95%E5%A5%B3%E5%84%BF%E8%AF%B4%E4%BD%A0%E9%83%BD%E8%83%BD%E5%BD%93%E8%89%BA%E4%BA%BA%E4%B8%BA%E5%95%A5%E6%88%91%E4%B8%8D%E8%A1%8C&t=31&band_rank=13&Refer=top)
1. [黄磊真空围裙](https://s.weibo.com//weibo?q=%E9%BB%84%E7%A3%8A%E7%9C%9F%E7%A9%BA%E5%9B%B4%E8%A3%99&t=31&band_rank=14&Refer=top)
1. [情侣包间求婚服务员推门打断要纸箱](https://s.weibo.com//weibo?q=%23%E6%83%85%E4%BE%A3%E5%8C%85%E9%97%B4%E6%B1%82%E5%A9%9A%E6%9C%8D%E5%8A%A1%E5%91%98%E6%8E%A8%E9%97%A8%E6%89%93%E6%96%AD%E8%A6%81%E7%BA%B8%E7%AE%B1%23&t=31&band_rank=15&Refer=top)
1. [小伊伊老公回应离婚](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E4%BC%8A%E4%BC%8A%E8%80%81%E5%85%AC%E5%9B%9E%E5%BA%94%E7%A6%BB%E5%A9%9A%23&t=31&band_rank=16&Refer=top)
1. [女子被情绪疗愈洗脑6年成重度抑郁](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E6%83%85%E7%BB%AA%E7%96%97%E6%84%88%E6%B4%97%E8%84%916%E5%B9%B4%E6%88%90%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%23&t=31&band_rank=17&Refer=top)
1. [女子被骗花1400万囤300件低价水晶](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E9%AA%97%E8%8A%B11400%E4%B8%87%E5%9B%A4300%E4%BB%B6%E4%BD%8E%E4%BB%B7%E6%B0%B4%E6%99%B6%23&t=31&band_rank=18&Refer=top)
1. [鸿蒙积分兑换断货](https://s.weibo.com//weibo?q=%E9%B8%BF%E8%92%99%E7%A7%AF%E5%88%86%E5%85%91%E6%8D%A2%E6%96%AD%E8%B4%A7&t=31&band_rank=19&Refer=top)
1. [Anthropic破发](https://s.weibo.com//weibo?q=%23Anthropic%E7%A0%B4%E5%8F%91%23&t=31&band_rank=20&Refer=top)
1. [以为猫咪离世后摸到心跳](https://s.weibo.com//weibo?q=%E4%BB%A5%E4%B8%BA%E7%8C%AB%E5%92%AA%E7%A6%BB%E4%B8%96%E5%90%8E%E6%91%B8%E5%88%B0%E5%BF%83%E8%B7%B3&t=31&band_rank=21&Refer=top)
1. [欧冠联赛](https://s.weibo.com//weibo?q=%E6%AC%A7%E5%86%A0%E8%81%94%E8%B5%9B&t=31&band_rank=22&Refer=top)
1. [中国航天又一项新的历史](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E5%8F%88%E4%B8%80%E9%A1%B9%E6%96%B0%E7%9A%84%E5%8E%86%E5%8F%B2%23&t=31&band_rank=23&Refer=top)
1. [treetree炸鸡上架3分钟卖空1天量](https://s.weibo.com//weibo?q=%23treetree%E7%82%B8%E9%B8%A1%E4%B8%8A%E6%9E%B63%E5%88%86%E9%92%9F%E5%8D%96%E7%A9%BA1%E5%A4%A9%E9%87%8F%23&t=31&band_rank=24&Refer=top)
1. [官方回应男子坠楼轻生砸中男孩](https://s.weibo.com//weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E5%9D%A0%E6%A5%BC%E8%BD%BB%E7%94%9F%E7%A0%B8%E4%B8%AD%E7%94%B7%E5%AD%A9%23&t=31&band_rank=25&Refer=top)
1. [看不上别人就不要接受对方付出](https://s.weibo.com//weibo?q=%E7%9C%8B%E4%B8%8D%E4%B8%8A%E5%88%AB%E4%BA%BA%E5%B0%B1%E4%B8%8D%E8%A6%81%E6%8E%A5%E5%8F%97%E5%AF%B9%E6%96%B9%E4%BB%98%E5%87%BA&t=31&band_rank=26&Refer=top)
1. [王佳佳从北京搬到杭州两个月了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BD%B3%E4%BD%B3%E4%BB%8E%E5%8C%97%E4%BA%AC%E6%90%AC%E5%88%B0%E6%9D%AD%E5%B7%9E%E4%B8%A4%E4%B8%AA%E6%9C%88%E4%BA%86%23&t=31&band_rank=27&Refer=top)
1. [白小纯把青稚粉丝团退了](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%8A%8A%E9%9D%92%E7%A8%9A%E7%B2%89%E4%B8%9D%E5%9B%A2%E9%80%80%E4%BA%86%23&t=31&band_rank=28&Refer=top)
1. [成毅闪现朱卜花直播间](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E9%97%AA%E7%8E%B0%E6%9C%B1%E5%8D%9C%E8%8A%B1%E7%9B%B4%E6%92%AD%E9%97%B4%23&t=31&band_rank=29&Refer=top)
1. [谢砚吃醋气疯了](https://s.weibo.com//weibo?q=%23%E8%B0%A2%E7%A0%9A%E5%90%83%E9%86%8B%E6%B0%94%E7%96%AF%E4%BA%86%23&t=31&band_rank=30&Refer=top)
1. [貂闯入鸡舍遇意想不到的守卫](https://s.weibo.com//weibo?q=%E8%B2%82%E9%97%AF%E5%85%A5%E9%B8%A1%E8%88%8D%E9%81%87%E6%84%8F%E6%83%B3%E4%B8%8D%E5%88%B0%E7%9A%84%E5%AE%88%E5%8D%AB&t=31&band_rank=31&Refer=top)
1. [陈吉宁被查](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%90%89%E5%AE%81%E8%A2%AB%E6%9F%A5%23&t=31&band_rank=32&Refer=top)
1. [东北的洗浴已经这么卷了吗](https://s.weibo.com//weibo?q=%E4%B8%9C%E5%8C%97%E7%9A%84%E6%B4%97%E6%B5%B4%E5%B7%B2%E7%BB%8F%E8%BF%99%E4%B9%88%E5%8D%B7%E4%BA%86%E5%90%97&t=31&band_rank=33&Refer=top)
1. [白小纯涉及猎奇行为](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%B6%89%E5%8F%8A%E7%8C%8E%E5%A5%87%E8%A1%8C%E4%B8%BA%23&t=31&band_rank=34&Refer=top)
1. [李艺彤一个奇葩我就不说什么了](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E8%89%BA%E5%BD%A4%E4%B8%80%E4%B8%AA%E5%A5%87%E8%91%A9%E6%88%91%E5%B0%B1%E4%B8%8D%E8%AF%B4%E4%BB%80%E4%B9%88%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [华为史上最薄最强智能手表来了](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%96%84%E6%9C%80%E5%BC%BA%E6%99%BA%E8%83%BD%E6%89%8B%E8%A1%A8%E6%9D%A5%E4%BA%86%23&t=31&band_rank=36&Refer=top)
1. [25岁女研究生青海自驾失联4天](https://s.weibo.com//weibo?q=%2325%E5%B2%81%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E9%9D%92%E6%B5%B7%E8%87%AA%E9%A9%BE%E5%A4%B1%E8%81%944%E5%A4%A9%23&t=31&band_rank=37&Refer=top)
1. [塞内加尔夺回2025非洲杯冠军](https://s.weibo.com//weibo?q=%23%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94%E5%A4%BA%E5%9B%9E2025%E9%9D%9E%E6%B4%B2%E6%9D%AF%E5%86%A0%E5%86%9B%23&t=31&band_rank=38&Refer=top)
1. [华伦天奴晚宴代言人发言](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E4%BC%A6%E5%A4%A9%E5%A5%B4%E6%99%9A%E5%AE%B4%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%8F%91%E8%A8%80%23&t=31&band_rank=39&Refer=top)
1. [欧美股市全线大跳水](https://s.weibo.com//weibo?q=%23%E6%AC%A7%E7%BE%8E%E8%82%A1%E5%B8%82%E5%85%A8%E7%BA%BF%E5%A4%A7%E8%B7%B3%E6%B0%B4%23&t=31&band_rank=40&Refer=top)
1. [妻子突然性格大变体谅老公竟是出轨](https://s.weibo.com//weibo?q=%23%E5%A6%BB%E5%AD%90%E7%AA%81%E7%84%B6%E6%80%A7%E6%A0%BC%E5%A4%A7%E5%8F%98%E4%BD%93%E8%B0%85%E8%80%81%E5%85%AC%E7%AB%9F%E6%98%AF%E5%87%BA%E8%BD%A8%23&t=31&band_rank=41&Refer=top)
1. [文吉儿做了两次消融手术](https://s.weibo.com//weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E5%81%9A%E4%BA%86%E4%B8%A4%E6%AC%A1%E6%B6%88%E8%9E%8D%E6%89%8B%E6%9C%AF%23&t=31&band_rank=42&Refer=top)
1. [苏醒回应争议](https://s.weibo.com//weibo?q=%E8%8B%8F%E9%86%92%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE&t=31&band_rank=43&Refer=top)
1. [和平精英](https://s.weibo.com//weibo?q=%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1&t=31&band_rank=44&Refer=top)
1. [康熙十二世孙称雍正篡位](https://s.weibo.com//weibo?q=%E5%BA%B7%E7%86%99%E5%8D%81%E4%BA%8C%E4%B8%96%E5%AD%99%E7%A7%B0%E9%9B%8D%E6%AD%A3%E7%AF%A1%E4%BD%8D&t=31&band_rank=45&Refer=top)
1. [怕被赶出去只能放低姿态](https://s.weibo.com//weibo?q=%E6%80%95%E8%A2%AB%E8%B5%B6%E5%87%BA%E5%8E%BB%E5%8F%AA%E8%83%BD%E6%94%BE%E4%BD%8E%E5%A7%BF%E6%80%81&t=31&band_rank=46&Refer=top)
1. [马天宇文吉儿矛盾比张萌都大](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E6%96%87%E5%90%89%E5%84%BF%E7%9F%9B%E7%9B%BE%E6%AF%94%E5%BC%A0%E8%90%8C%E9%83%BD%E5%A4%A7%23&t=31&band_rank=47&Refer=top)
1. [宝妈曝智能门锁陌生人刷脸秒开](https://s.weibo.com//weibo?q=%23%E5%AE%9D%E5%A6%88%E6%9B%9D%E6%99%BA%E8%83%BD%E9%97%A8%E9%94%81%E9%99%8C%E7%94%9F%E4%BA%BA%E5%88%B7%E8%84%B8%E7%A7%92%E5%BC%80%23&t=31&band_rank=48&Refer=top)
1. [黄景瑜又被街拍捕捉到了](https://s.weibo.com//weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%8F%88%E8%A2%AB%E8%A1%97%E6%8B%8D%E6%8D%95%E6%8D%89%E5%88%B0%E4%BA%86%23&t=31&band_rank=49&Refer=top)
1. [1岁男婴长青春痘性早熟确诊癌症](https://s.weibo.com//weibo?q=%231%E5%B2%81%E7%94%B7%E5%A9%B4%E9%95%BF%E9%9D%92%E6%98%A5%E7%97%98%E6%80%A7%E6%97%A9%E7%86%9F%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
