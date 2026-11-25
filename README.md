# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-25 22:26:24

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
<!-- 最后更新时间 Wed Nov 25 2026 18:23:06 GMT+0800 (China Standard Time) -->

1. [中外航天员实现首次“太空握手”](https://so.toutiao.com/search?keyword=中外航天员实现首次“太空握手”)
1. [特朗普对一道中国菜念念不忘](https://so.toutiao.com/search?keyword=特朗普对一道中国菜念念不忘)
1. [国货品牌高质量发展步伐坚实](https://so.toutiao.com/search?keyword=国货品牌高质量发展步伐坚实)
1. [巴基斯坦航天员说中国空间站我来了](https://so.toutiao.com/search?keyword=巴基斯坦航天员说中国空间站我来了)
1. [专家号加价至900元 陪诊成牟利灰产](https://so.toutiao.com/search?keyword=专家号加价至900元%20陪诊成牟利灰产)
1. [安徽4岁走失男童找到已无生命体征](https://so.toutiao.com/search?keyword=安徽4岁走失男童找到已无生命体征)
1. [中外航天员第一张太空合影](https://so.toutiao.com/search?keyword=中外航天员第一张太空合影)
1. [巴航天员接过太空小蛋糕深深闻了闻](https://so.toutiao.com/search?keyword=巴航天员接过太空小蛋糕深深闻了闻)
1. [超级厄尔尼诺发威 暴雪袭击日本](https://so.toutiao.com/search?keyword=超级厄尔尼诺发威%20暴雪袭击日本)
1. [中国天宫还会接待哪些国家的航天员](https://so.toutiao.com/search?keyword=中国天宫还会接待哪些国家的航天员)
1. [四类谣言盯上“一老一小”群体](https://so.toutiao.com/search?keyword=四类谣言盯上“一老一小”群体)
1. [石川佳纯宣布结婚](https://so.toutiao.com/search?keyword=石川佳纯宣布结婚)
1. [17.91亿元出逃长鑫科技](https://so.toutiao.com/search?keyword=17.91亿元出逃长鑫科技)
1. [宁德时代大跌超8%](https://so.toutiao.com/search?keyword=宁德时代大跌超8%)
1. [巴基斯坦航天为何没落了](https://so.toutiao.com/search?keyword=巴基斯坦航天为何没落了)
1. [岳母谈到汤洪波时嘴角压不住了](https://so.toutiao.com/search?keyword=岳母谈到汤洪波时嘴角压不住了)
1. [郎永淳首度回应从央视离职原因](https://so.toutiao.com/search?keyword=郎永淳首度回应从央视离职原因)
1. [男子3孩非亲生案一审宣判](https://so.toutiao.com/search?keyword=男子3孩非亲生案一审宣判)
1. [巴基斯坦各界围观神24发射](https://so.toutiao.com/search?keyword=巴基斯坦各界围观神24发射)
1. [伊朗总统在哈梅内伊墓前下跪致敬](https://so.toutiao.com/search?keyword=伊朗总统在哈梅内伊墓前下跪致敬)
1. [为何A股再度走弱](https://so.toutiao.com/search?keyword=为何A股再度走弱)
1. [巴基斯坦总理：感谢兄弟般的中国](https://so.toutiao.com/search?keyword=巴基斯坦总理：感谢兄弟般的中国)
1. [唐驳虎：特朗普酝酿新一轮关税](https://so.toutiao.com/search?keyword=唐驳虎：特朗普酝酿新一轮关税)
1. [撞脸张雪男子年轻时被说像林俊杰](https://so.toutiao.com/search?keyword=撞脸张雪男子年轻时被说像林俊杰)
1. [火箭发射与朝霞同框浪漫壮美](https://so.toutiao.com/search?keyword=火箭发射与朝霞同框浪漫壮美)
1. [车主四条胎被图钉扎成筛子](https://so.toutiao.com/search?keyword=车主四条胎被图钉扎成筛子)
1. [A股三大指数集体收跌](https://so.toutiao.com/search?keyword=A股三大指数集体收跌)
1. [巴基斯坦人首次进入太空意味着什么](https://so.toutiao.com/search?keyword=巴基斯坦人首次进入太空意味着什么)
1. [糖尿病患者晨起有哪些表现](https://so.toutiao.com/search?keyword=糖尿病患者晨起有哪些表现)
1. [创业板指跌4.19%](https://so.toutiao.com/search?keyword=创业板指跌4.19%)
1. [神二十三两人回一人留背后有何考量](https://so.toutiao.com/search?keyword=神二十三两人回一人留背后有何考量)
1. [每天喝一碗“开水冲鸡蛋”有何变化](https://so.toutiao.com/search?keyword=每天喝一碗“开水冲鸡蛋”有何变化)
1. [被“切片”的剧情失去了什么](https://so.toutiao.com/search?keyword=被“切片”的剧情失去了什么)
1. [神舟二十四号任务有何突破](https://so.toutiao.com/search?keyword=神舟二十四号任务有何突破)
1. [股债金全球暴跌普通人怎么守住财富](https://so.toutiao.com/search?keyword=股债金全球暴跌普通人怎么守住财富)
1. [萧旭岑：国民党坚持反“台独”](https://so.toutiao.com/search?keyword=萧旭岑：国民党坚持反“台独”)
1. [巴基斯坦航天员手指国旗向镜头敬礼](https://so.toutiao.com/search?keyword=巴基斯坦航天员手指国旗向镜头敬礼)
1. [男子称女儿不像自己要求鉴定被驳回](https://so.toutiao.com/search?keyword=男子称女儿不像自己要求鉴定被驳回)
1. [上海就陈吉宁被查表态](https://so.toutiao.com/search?keyword=上海就陈吉宁被查表态)
1. [一图纵览中国太空餐桌进化史](https://so.toutiao.com/search?keyword=一图纵览中国太空餐桌进化史)
1. [王楚钦林诗栋周启豪等现身成都](https://so.toutiao.com/search?keyword=王楚钦林诗栋周启豪等现身成都)
1. [AI泡沫若破裂美联储下场救市有用吗](https://so.toutiao.com/search?keyword=AI泡沫若破裂美联储下场救市有用吗)
1. [汤洪波母亲看完直播就去喂猪喂鸡](https://so.toutiao.com/search?keyword=汤洪波母亲看完直播就去喂猪喂鸡)
1. [肖战参加《小城良方》研讨会](https://so.toutiao.com/search?keyword=肖战参加《小城良方》研讨会)
1. [A股接下来的见底究竟看什么](https://so.toutiao.com/search?keyword=A股接下来的见底究竟看什么)
1. [神舟二十四号载人飞船发射成功](https://so.toutiao.com/search?keyword=神舟二十四号载人飞船发射成功)
1. [银价大跌背后](https://so.toutiao.com/search?keyword=银价大跌背后)
1. [朱之文：钱花出去才算是自己的](https://so.toutiao.com/search?keyword=朱之文：钱花出去才算是自己的)
1. [巴航天员的中文被点赞](https://so.toutiao.com/search?keyword=巴航天员的中文被点赞)
1. [野哨对比赛的影响有多大](https://so.toutiao.com/search?keyword=野哨对比赛的影响有多大)
1. [神舟二十四号任务看点拉满](https://so.toutiao.com/search?keyword=神舟二十四号任务看点拉满)
1. [智谱为何持续震荡](https://so.toutiao.com/search?keyword=智谱为何持续震荡)
1. [男子劝父母卖掉空置8年婚房](https://so.toutiao.com/search?keyword=男子劝父母卖掉空置8年婚房)
1. [陈吉宁被查](https://so.toutiao.com/search?keyword=陈吉宁被查)
1. [小米汽车利润为何突然掉头](https://so.toutiao.com/search?keyword=小米汽车利润为何突然掉头)
1. [女老师阔腿裤钻进老鼠捏住继续讲课](https://so.toutiao.com/search?keyword=女老师阔腿裤钻进老鼠捏住继续讲课)
1. [今天是毛岸英同志牺牲76周年](https://so.toutiao.com/search?keyword=今天是毛岸英同志牺牲76周年)
1. [国内成品油零售价有望再下调](https://so.toutiao.com/search?keyword=国内成品油零售价有望再下调)
1. [优秀辟谣作品高校巡展举办](https://so.toutiao.com/search?keyword=优秀辟谣作品高校巡展举办)
1. [地级市市长转任县委书记](https://so.toutiao.com/search?keyword=地级市市长转任县委书记)
1. [张雪机车引燃摩托热](https://so.toutiao.com/search?keyword=张雪机车引燃摩托热)
1. [张纪中妻子自曝领证时才得知丈夫年龄](https://so.toutiao.com/search?keyword=张纪中妻子自曝领证时才得知丈夫年龄)
1. [老师回忆航天员武毅：他肯钻研不服输](https://so.toutiao.com/search?keyword=老师回忆航天员武毅：他肯钻研不服输)
1. [网友手绘《两京十五日》太子出城线](https://so.toutiao.com/search?keyword=网友手绘《两京十五日》太子出城线)
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
<!-- 最后更新时间 Wed Nov 25 2026 23:32:42 GMT+0800 (China Standard Time) -->

1. [黄仁勋恢复英伟达总裁CEO职务](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%81%A2%E5%A4%8D%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%80%BB%E8%A3%81CEO%E8%81%8C%E5%8A%A1)
1. [余文乐自曝躯体化严重到不能开车](https://www.zhihu.com/search?q=%E4%BD%99%E6%96%87%E4%B9%90%E8%87%AA%E6%9B%9D%E8%BA%AF%E4%BD%93%E5%8C%96%E4%B8%A5%E9%87%8D%E5%88%B0%E4%B8%8D%E8%83%BD%E5%BC%80%E8%BD%A6)
1. [DeepSeek调整API定价](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4API%E5%AE%9A%E4%BB%B7)
1. [斗鱼及创始人被执行1.9亿余元](https://www.zhihu.com/search?q=%E6%96%97%E9%B1%BC%E5%8F%8A%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%A2%AB%E6%89%A7%E8%A1%8C1.9%E4%BA%BF%E4%BD%99%E5%85%83)
1. [Zeus 回归 T1](https://www.zhihu.com/search?q=Zeus%20%E5%9B%9E%E5%BD%92%20T1)
1. [第47届青龙电影奖获奖名单](https://www.zhihu.com/search?q=%E7%AC%AC47%E5%B1%8A%E9%9D%92%E9%BE%99%E7%94%B5%E5%BD%B1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95)
1. [年轻人开始劝父母卖县城空房](https://www.zhihu.com/search?q=%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8A%9D%E7%88%B6%E6%AF%8D%E5%8D%96%E5%8E%BF%E5%9F%8E%E7%A9%BA%E6%88%BF)
1. [美媒称黄仁勋常态化羞辱员工](https://www.zhihu.com/search?q=%E7%BE%8E%E5%AA%92%E7%A7%B0%E9%BB%84%E4%BB%81%E5%8B%8B%E5%B8%B8%E6%80%81%E5%8C%96%E7%BE%9E%E8%BE%B1%E5%91%98%E5%B7%A5)
1. [上海大学生宿舍坠亡两日后被发现](https://www.zhihu.com/search?q=%E4%B8%8A%E6%B5%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%AE%BF%E8%88%8D%E5%9D%A0%E4%BA%A1%E4%B8%A4%E6%97%A5%E5%90%8E%E8%A2%AB%E5%8F%91%E7%8E%B0)
1. [神舟二十四号发射任务](https://www.zhihu.com/search?q=%E7%A5%9E%E8%88%9F%E4%BA%8C%E5%8D%81%E5%9B%9B%E5%8F%B7%E5%8F%91%E5%B0%84%E4%BB%BB%E5%8A%A1)
1. [AI证明黎曼猜想](https://www.zhihu.com/search?q=AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [网传Anthropic称质因数分解属P](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0Anthropic%E7%A7%B0%E8%B4%A8%E5%9B%A0%E6%95%B0%E5%88%86%E8%A7%A3%E5%B1%9EP)
1. [邓煜：人不能放弃思考给AI当狗](https://www.zhihu.com/search?q=%E9%82%93%E7%85%9C%EF%BC%9A%E4%BA%BA%E4%B8%8D%E8%83%BD%E6%94%BE%E5%BC%83%E6%80%9D%E8%80%83%E7%BB%99AI%E5%BD%93%E7%8B%97)
1. [特朗普被曝抄底巨额英伟达股票](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E6%9B%9D%E6%8A%84%E5%BA%95%E5%B7%A8%E9%A2%9D%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%82%A1%E7%A5%A8)
1. [浙江宣传称消费降级是伪命题](https://www.zhihu.com/search?q=%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E7%A7%B0%E6%B6%88%E8%B4%B9%E9%99%8D%E7%BA%A7%E6%98%AF%E4%BC%AA%E5%91%BD%E9%A2%98)
1. [英伟达单日市值飙升创纪录](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%8D%95%E6%97%A5%E5%B8%82%E5%80%BC%E9%A3%99%E5%8D%87%E5%88%9B%E7%BA%AA%E5%BD%95)
1. [Anthropic称证明VP≠VNP](https://www.zhihu.com/search?q=Anthropic%E7%A7%B0%E8%AF%81%E6%98%8EVP%E2%89%A0VNP)
1. [两届炒股大赛冠军破产](https://www.zhihu.com/search?q=%E4%B8%A4%E5%B1%8A%E7%82%92%E8%82%A1%E5%A4%A7%E8%B5%9B%E5%86%A0%E5%86%9B%E7%A0%B4%E4%BA%A7)
1. [陈吉宁被查](https://www.zhihu.com/search?q=%E9%99%88%E5%90%89%E5%AE%81%E8%A2%AB%E6%9F%A5)
1. [如何看待伤仲永被移出语文教材](https://www.zhihu.com/search?q=%E5%A6%82%E4%BD%95%E7%9C%8B%E5%BE%85%E4%BC%A4%E4%BB%B2%E6%B0%B8%E8%A2%AB%E7%A7%BB%E5%87%BA%E8%AF%AD%E6%96%87%E6%95%99%E6%9D%90)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Nov 25 2026 22:26:24 GMT+0800 (China Standard Time) -->

1. [特朗普公开提及一道配了漂亮「帽子」的中国菜，直呼好吃却叫不出名字，可能是哪一道菜？](https://www.zhihu.com/question/2108823980911977700)
1. [为什么神舟二十四号外籍航天员名额给了巴基斯坦而不是其他国家？](https://www.zhihu.com/question/2108916871718073600)
1. [情侣求婚关键时刻，服务员闯入询问「能否拿走纸箱」，餐厅提抹零49元，服务员闯入合理吗？餐厅需要补偿吗？](https://www.zhihu.com/question/2108840639701803800)
1. [如何看待曾毓群曾表态，因为宁德时代在撑着这个价钱，只要我们把价钱低下来，锂电行业比光伏还惨？](https://www.zhihu.com/question/2107879530920678100)
1. [年轻人开始劝父母卖县城空房，换成现金收利息，空置多年的房子有必要留吗？](https://www.zhihu.com/question/2108516619337065000)
1. [黄仁勋复职后首开全员大会致歉，称自己每天都要接受心理治疗，此举能修复此前受损的内部信任吗？](https://www.zhihu.com/question/2108827841663951600)
1. [如何看待黄仁勋辟谣特朗普施压复职说法，称是董事会自主作出决定？二人口径为何不一致？](https://www.zhihu.com/question/2108869758925923800)
1. [如何看待《两京十五日》火烧太庙、射太祖画像的剧情？](https://www.zhihu.com/question/2107834692301071000)
1. [突然脑洞一下，如果王勃参加高考，语文作文写出了滕王阁序，会因为只有773个字，不到800而扣分吗？](https://www.zhihu.com/question/2055249552723202800)
1. [亲戚要借车到北京玩，我想拒绝，因为对方几乎没开过高速，但是不知道怎么说才不得罪人？](https://www.zhihu.com/question/2051218257361761300)
1. [如何看待黑客放出《GTA 6》Xbox版核心文件后，民间靠AI不到24小时就搬上PC并成功进入实机？](https://www.zhihu.com/question/2108737825650762800)
1. [曝 Elk 或回归 BLG，真实性如何？若回归他与老队友的磨合情况会如何？能适应战队新的战术体系吗？](https://www.zhihu.com/question/2108877202796143600)
1. [怎么看 Axios 报道，OpenAI 和 Anthropic 因为内部模型太强，可能无法发布 ？](https://www.zhihu.com/question/2108663109493716000)
1. [商品房楼板国标普遍仅10-12cm，为什么不统一再加厚15cm？加厚楼板能否彻底解决楼层噪音困扰？](https://www.zhihu.com/question/2066353729507422700)
1. [重庆一男孩吃面被坠楼男子砸中，男孩无生命危险，警方已介入，此类事件责任该如何界定？](https://www.zhihu.com/question/2108734679998321000)
1. [大家都用 Deepseek Harness 了嘛，感受如何？](https://www.zhihu.com/question/2071607223839732000)
1. [如果红果短剧改为付费观看，那么结果将如何？](https://www.zhihu.com/question/2108125203414963000)
1. [摩根大通发布《中国房地产，只有幸存者才能生存》研报，如何解读其中的内容？](https://www.zhihu.com/question/2106329177578271700)
1. [有开发者称 DeepSeek Harness 存在默认上传用户会话日志的行为，具体情况如何？](https://www.zhihu.com/question/2108953280650941200)
1. [豆包和 DeepSeek 哪个好用？](https://www.zhihu.com/question/2042157689262826000)
1. [金价大幅回撤，银行和交易所都在风险提示，避险逻辑失效，黄金还能不能作为保值资产？](https://www.zhihu.com/question/2107872963349451300)
1. [募款超过嫣然天使基金救助承载能力，李亚鹏建议月捐 1 元支持嫣然基金，如何看待这种小额长期公益思路？](https://www.zhihu.com/question/2107455866412848400)
1. [《地球还有救吗》提及升温6℃将造成毁灭性灾难，这是真的吗？](https://www.zhihu.com/question/2108844703839949600)
1. [黄多多贝儿先后官宣出道，星二代扎堆进圈会挤压普通新人发展机会吗？](https://www.zhihu.com/question/2106383813853159700)
1. [如何看待江西在古代名人辈出，而现在却没有什么存在感了？](https://www.zhihu.com/question/2106499063617156000)
1. [如何看待 OpenAI 新公开 9 篇数学成果，包括新的数学工具？](https://www.zhihu.com/question/2108874261175744000)
1. [你的家乡都有哪些风味独特，让人难以忘怀的野菜？](https://www.zhihu.com/question/2107136399115805700)
1. [大学四年，究竟该把“钻木取火”教透，还是早点把“打火机”发到学生手里？](https://www.zhihu.com/question/2099546608065165300)
1. [作为孩子的父母，要与自己和解，与生活和解，与孩子和解，你是怎么与孩子和解的？](https://www.zhihu.com/question/2106660747782706400)
1. [米哈游二次元捉宠新作《崩坏：因缘精灵》三测体验如何？2027年公测能成为下一个爆款吗？](https://www.zhihu.com/question/2108863983977329700)
1. [神舟二十四号载人飞船发射取得圆满成功，中国空间站迎来首位外籍航天员，此次发射任务还有哪些看点？](https://www.zhihu.com/question/2108654680351797500)
1. [AI 短剧《丑狐》爆火后引发大量讨论，它能戳中观众的核心原因是什么？](https://www.zhihu.com/question/2108451365806776800)
1. [为什么我觉得憨豆先生的表演非常庸俗幼稚，一点儿也不可笑？是中西文化的不同么？](https://www.zhihu.com/question/365957338)
1. [特朗普称黄仁勋是「国家瑰宝」，若在美遇不公可去中国，黄仁勋未来若来华可能有哪些选择？](https://www.zhihu.com/question/2108601916930226000)
1. [如何看与Claude一起证明黎曼猜想的数学家莱文特(Levent Alpoge)的感言呢？](https://www.zhihu.com/question/2107907327009502200)
1. [如何看待 Anthropic 价格跌破发行价？](https://www.zhihu.com/question/2108665221980148700)
1. [高志凯称欧洲在人工智能发展中的作用几乎是零，这一观点是否站得住脚？](https://www.zhihu.com/question/2104246988380418800)
1. [为什么历史网络小说对于游牧政权的描写都不正确？](https://www.zhihu.com/question/2107744019908400600)
1. [方言中有哪些不为人知的语言学冷知识？](https://www.zhihu.com/question/2104591108315378400)
1. [黄仁勋「熹妃回宫」特朗普帮了多大的忙？对特朗普会有哪些好处？](https://www.zhihu.com/question/2108326762346017800)
1. [因开塞露含甘油，自媒体宣传其可保湿淡纹、功效逼近大牌面霜，真这么管用吗？有其他体面一点的护肤办法吗？](https://www.zhihu.com/question/2108210685716820500)
1. [《西游记》中孙悟空大闹天宫后，为何没有被直接处死？](https://www.zhihu.com/question/2103807449383883000)
1. [中俄美《和平宣言》如何解读？](https://www.zhihu.com/question/2107833017746060300)
1. [34 米路绿灯 12 秒行人被撞亡，法院判定双方同等责任的依据是什么？](https://www.zhihu.com/question/2108513690165188000)
1. [长期在生源差的学校教学对老师有什么影响？](https://www.zhihu.com/question/2107005680506892800)
1. [本田因安全气囊存在破裂风险，将在美国召回超过80万辆汽车，哪些信息值得关注？](https://www.zhihu.com/question/2107565403664823600)
1. [如何理解黎曼猜想，NS 等纯数学难题的现实意义？它们的现实重要性主要体现在哪里？](https://www.zhihu.com/question/2107770677130547200)
1. [如何评价华为新发布的Mate 90 Air，轻薄旗舰能带来哪些优势体验？](https://www.zhihu.com/question/2108847221840012000)
1. [博士卧底当主播6月，经历PK和羞辱惩罚，至今仍有心理阴影，暴露出哪些问题？PK为何沦为主播出丑的生意？](https://www.zhihu.com/question/2107863107414356700)
1. [二岁孩子，做事儿总是急躁，没有耐心，做不好就发脾气怎么办？](https://www.zhihu.com/question/2107282240573129700)
1. [中韩自贸协定谈判里，中方首次同意给予韩国电影、游戏等领域最惠国待遇，将给两国影视行业带来哪些机遇？](https://www.zhihu.com/question/2106818758044030500)
1. [小米集团 2026 Q3 财报发布，经调整净利润 48.84 亿元，同比下降56.8%，怎样解读？](https://www.zhihu.com/question/2108615793676137700)
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
<!-- 最后更新时间 Thu Nov 26 2026 01:24:48 GMT+0800 (China Standard Time) -->

1. [中巴领导人就神24飞天互致贺电](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%B7%B4%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B0%B1%E7%A5%9E24%E9%A3%9E%E5%A4%A9%E4%BA%92%E8%87%B4%E8%B4%BA%E7%94%B5%23&Refer=new_time)
1. [金价扛不住了](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E6%89%9B%E4%B8%8D%E4%BD%8F%E4%BA%86%23&t=31&band_rank=1&Refer=top)
1. [华为自研HBM内存方案](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E8%87%AA%E7%A0%94HBM%E5%86%85%E5%AD%98%E6%96%B9%E6%A1%88&t=31&band_rank=2&Refer=top)
1. [神24乘组进驻天宫](https://s.weibo.com//weibo?q=%23%E7%A5%9E24%E4%B9%98%E7%BB%84%E8%BF%9B%E9%A9%BB%E5%A4%A9%E5%AE%AB%23&t=31&band_rank=3&Refer=top)
1. [许飞乐意看厉娜哭还有后半句](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E4%B9%90%E6%84%8F%E7%9C%8B%E5%8E%89%E5%A8%9C%E5%93%AD%E8%BF%98%E6%9C%89%E5%90%8E%E5%8D%8A%E5%8F%A5&t=31&band_rank=4&Refer=top)
1. [ON BLG](https://s.weibo.com//weibo?q=ON%20BLG&t=31&band_rank=5&Refer=top)
1. [网友抵制王玉雯代言皮草](https://s.weibo.com//weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8A%B5%E5%88%B6%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%BB%A3%E8%A8%80%E7%9A%AE%E8%8D%89%23&t=31&band_rank=6&Refer=top)
1. [疑似文吉儿朋友圈辟谣办婚礼](https://s.weibo.com//weibo?q=%E7%96%91%E4%BC%BC%E6%96%87%E5%90%89%E5%84%BF%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%BE%9F%E8%B0%A3%E5%8A%9E%E5%A9%9A%E7%A4%BC&t=31&band_rank=7&Refer=top)
1. [最帅保洁大叔宣布辞职](https://s.weibo.com//weibo?q=%23%E6%9C%80%E5%B8%85%E4%BF%9D%E6%B4%81%E5%A4%A7%E5%8F%94%E5%AE%A3%E5%B8%83%E8%BE%9E%E8%81%8C%23&t=31&band_rank=8&Refer=top)
1. [坠楼致2男孩受伤老人已身亡](https://s.weibo.com//weibo?q=%23%E5%9D%A0%E6%A5%BC%E8%87%B42%E7%94%B7%E5%AD%A9%E5%8F%97%E4%BC%A4%E8%80%81%E4%BA%BA%E5%B7%B2%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=9&Refer=top)
1. [当Bin听到Zeus回归T1](https://s.weibo.com//weibo?q=%23%E5%BD%93Bin%E5%90%AC%E5%88%B0Zeus%E5%9B%9E%E5%BD%92T1%23&t=31&band_rank=10&Refer=top)
1. [炒股亏钱最对不起的是家人](https://s.weibo.com//weibo?q=%E7%82%92%E8%82%A1%E4%BA%8F%E9%92%B1%E6%9C%80%E5%AF%B9%E4%B8%8D%E8%B5%B7%E7%9A%84%E6%98%AF%E5%AE%B6%E4%BA%BA&t=31&band_rank=11&Refer=top)
1. [伊能静说许飞有一点假大方](https://s.weibo.com//weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%AF%B4%E8%AE%B8%E9%A3%9E%E6%9C%89%E4%B8%80%E7%82%B9%E5%81%87%E5%A4%A7%E6%96%B9%23&t=31&band_rank=12&Refer=top)
1. [郭子睿回应自己为什么进圈](https://s.weibo.com//weibo?q=%23%E9%83%AD%E5%AD%90%E7%9D%BF%E5%9B%9E%E5%BA%94%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%9B%E5%9C%88%23&t=31&band_rank=13&Refer=top)
1. [谷爱凌肩膀脱臼](https://s.weibo.com//weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%82%A9%E8%86%80%E8%84%B1%E8%87%BC%23&t=31&band_rank=14&Refer=top)
1. [爱奇艺 云包场](https://s.weibo.com//weibo?q=%E7%88%B1%E5%A5%87%E8%89%BA%20%E4%BA%91%E5%8C%85%E5%9C%BA&t=31&band_rank=15&Refer=top)
1. [全度妍三封青龙影后](https://s.weibo.com//weibo?q=%23%E5%85%A8%E5%BA%A6%E5%A6%8D%E4%B8%89%E5%B0%81%E9%9D%92%E9%BE%99%E5%BD%B1%E5%90%8E%23&t=31&band_rank=16&Refer=top)
1. [后会友期所有线索串起来了](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%89%80%E6%9C%89%E7%BA%BF%E7%B4%A2%E4%B8%B2%E8%B5%B7%E6%9D%A5%E4%BA%86%23&t=31&band_rank=17&Refer=top)
1. [青稚看白小纯MVP结算画面的反应](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E7%9C%8B%E7%99%BD%E5%B0%8F%E7%BA%AFMVP%E7%BB%93%E7%AE%97%E7%94%BB%E9%9D%A2%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=18&Refer=top)
1. [王玉雯方回应代言皮草争议](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BB%A3%E8%A8%80%E7%9A%AE%E8%8D%89%E4%BA%89%E8%AE%AE%23&t=31&band_rank=19&Refer=top)
1. [疑似李河民恋情](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E6%9D%8E%E6%B2%B3%E6%B0%91%E6%81%8B%E6%83%85%23&t=31&band_rank=20&Refer=top)
1. [工信部公示小米新SU7Ultra](https://s.weibo.com//weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E5%85%AC%E7%A4%BA%E5%B0%8F%E7%B1%B3%E6%96%B0SU7Ultra%23&t=31&band_rank=21&Refer=top)
1. [印度女子遭同事轮奸在场多人协助](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E9%81%AD%E5%90%8C%E4%BA%8B%E8%BD%AE%E5%A5%B8%E5%9C%A8%E5%9C%BA%E5%A4%9A%E4%BA%BA%E5%8D%8F%E5%8A%A9%23&t=31&band_rank=22&Refer=top)
1. [黄金史上暴跌最快半年恢复](https://s.weibo.com//weibo?q=%23%E9%BB%84%E9%87%91%E5%8F%B2%E4%B8%8A%E6%9A%B4%E8%B7%8C%E6%9C%80%E5%BF%AB%E5%8D%8A%E5%B9%B4%E6%81%A2%E5%A4%8D%23&t=31&band_rank=23&Refer=top)
1. [曝文吉儿微信停用](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E6%96%87%E5%90%89%E5%84%BF%E5%BE%AE%E4%BF%A1%E5%81%9C%E7%94%A8%23&t=31&band_rank=24&Refer=top)
1. [青稚白小纯1V1练枪](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF1V1%E7%BB%83%E6%9E%AA%23&t=31&band_rank=25&Refer=top)
1. [朱亚文版朱瞻基](https://s.weibo.com//weibo?q=%E6%9C%B1%E4%BA%9A%E6%96%87%E7%89%88%E6%9C%B1%E7%9E%BB%E5%9F%BA&t=31&band_rank=26&Refer=top)
1. [王俊凯调解 后会友期变后会无期](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%B0%83%E8%A7%A3%20%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%8F%98%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F&t=31&band_rank=27&Refer=top)
1. [一诺说想和无畏交朋友](https://s.weibo.com//weibo?q=%23%E4%B8%80%E8%AF%BA%E8%AF%B4%E6%83%B3%E5%92%8C%E6%97%A0%E7%95%8F%E4%BA%A4%E6%9C%8B%E5%8F%8B%23&t=31&band_rank=28&Refer=top)
1. [白头发是身体在发出压力警告](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%A4%B4%E5%8F%91%E6%98%AF%E8%BA%AB%E4%BD%93%E5%9C%A8%E5%8F%91%E5%87%BA%E5%8E%8B%E5%8A%9B%E8%AD%A6%E5%91%8A%23&t=31&band_rank=29&Refer=top)
1. [印度晒航天员失重训练](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%99%92%E8%88%AA%E5%A4%A9%E5%91%98%E5%A4%B1%E9%87%8D%E8%AE%AD%E7%BB%83%23&t=31&band_rank=30&Refer=top)
1. [刘亦菲换手机了](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8D%A2%E6%89%8B%E6%9C%BA%E4%BA%86&t=31&band_rank=31&Refer=top)
1. [成毅两京十五日台网双爆了](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E5%8F%B0%E7%BD%91%E5%8F%8C%E7%88%86%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [向太自曝体内装有十个心脏支架](https://s.weibo.com//weibo?q=%23%E5%90%91%E5%A4%AA%E8%87%AA%E6%9B%9D%E4%BD%93%E5%86%85%E8%A3%85%E6%9C%89%E5%8D%81%E4%B8%AA%E5%BF%83%E8%84%8F%E6%94%AF%E6%9E%B6%23&t=31&band_rank=33&Refer=top)
1. [巴基斯坦航天员在天宫中文唠嗑](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%88%AA%E5%A4%A9%E5%91%98%E5%9C%A8%E5%A4%A9%E5%AE%AB%E4%B8%AD%E6%96%87%E5%94%A0%E5%97%91%23&t=31&band_rank=34&Refer=top)
1. [申敏儿看李光洙颁奖的表情](https://s.weibo.com//weibo?q=%23%E7%94%B3%E6%95%8F%E5%84%BF%E7%9C%8B%E6%9D%8E%E5%85%89%E6%B4%99%E9%A2%81%E5%A5%96%E7%9A%84%E8%A1%A8%E6%83%85%23&t=31&band_rank=35&Refer=top)
1. [拔掉白头发会发生什么](https://s.weibo.com//weibo?q=%23%E6%8B%94%E6%8E%89%E7%99%BD%E5%A4%B4%E5%8F%91%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88%23&t=31&band_rank=36&Refer=top)
1. [957爆料Ming加入WBG](https://s.weibo.com//weibo?q=%23957%E7%88%86%E6%96%99Ming%E5%8A%A0%E5%85%A5WBG%23&t=31&band_rank=37&Refer=top)
1. [金价现在可翻了好几倍](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E7%8E%B0%E5%9C%A8%E5%8F%AF%E7%BF%BB%E4%BA%86%E5%A5%BD%E5%87%A0%E5%80%8D%23&t=31&band_rank=38&Refer=top)
1. [贝儿穿上了妈妈当年上春晚的裙子](https://s.weibo.com//weibo?q=%23%E8%B4%9D%E5%84%BF%E7%A9%BF%E4%B8%8A%E4%BA%86%E5%A6%88%E5%A6%88%E5%BD%93%E5%B9%B4%E4%B8%8A%E6%98%A5%E6%99%9A%E7%9A%84%E8%A3%99%E5%AD%90%23&t=31&band_rank=39&Refer=top)
1. [巴基斯坦航天员有专属的航天食品库](https://s.weibo.com//weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%88%AA%E5%A4%A9%E5%91%98%E6%9C%89%E4%B8%93%E5%B1%9E%E7%9A%84%E8%88%AA%E5%A4%A9%E9%A3%9F%E5%93%81%E5%BA%93%23&t=31&band_rank=40&Refer=top)
1. [青龙奖](https://s.weibo.com//weibo?q=%E9%9D%92%E9%BE%99%E5%A5%96&t=31&band_rank=41&Refer=top)
1. [Oo33的鸽](https://s.weibo.com//weibo?q=%23Oo33%E7%9A%84%E9%B8%BD%23&t=31&band_rank=42&Refer=top)
1. [Zeus称Joemash多次向自己道歉](https://s.weibo.com//weibo?q=%23Zeus%E7%A7%B0Joemash%E5%A4%9A%E6%AC%A1%E5%90%91%E8%87%AA%E5%B7%B1%E9%81%93%E6%AD%89%23&t=31&band_rank=43&Refer=top)
1. [zeus说BLG夺冠很帅](https://s.weibo.com//weibo?q=%23zeus%E8%AF%B4BLG%E5%A4%BA%E5%86%A0%E5%BE%88%E5%B8%85%23&t=31&band_rank=44&Refer=top)
1. [小学教材全解 上古真神](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%AD%A6%E6%95%99%E6%9D%90%E5%85%A8%E8%A7%A3%20%E4%B8%8A%E5%8F%A4%E7%9C%9F%E7%A5%9E&t=31&band_rank=45&Refer=top)
1. [教师熟睡时遭凶手杀害身中20余刀](https://s.weibo.com//weibo?q=%E6%95%99%E5%B8%88%E7%86%9F%E7%9D%A1%E6%97%B6%E9%81%AD%E5%87%B6%E6%89%8B%E6%9D%80%E5%AE%B3%E8%BA%AB%E4%B8%AD20%E4%BD%99%E5%88%80&t=31&band_rank=46&Refer=top)
1. [湖南网警公布一起恶意抹黑华为案例](https://s.weibo.com//weibo?q=%23%E6%B9%96%E5%8D%97%E7%BD%91%E8%AD%A6%E5%85%AC%E5%B8%83%E4%B8%80%E8%B5%B7%E6%81%B6%E6%84%8F%E6%8A%B9%E9%BB%91%E5%8D%8E%E4%B8%BA%E6%A1%88%E4%BE%8B%23&t=31&band_rank=47&Refer=top)
1. [黄金跌破3500美元](https://s.weibo.com//weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E7%A0%B43500%E7%BE%8E%E5%85%83%23&t=31&band_rank=48&Refer=top)
1. [曝Ming复出](https://s.weibo.com//weibo?q=%23%E6%9B%9DMing%E5%A4%8D%E5%87%BA%23&t=31&band_rank=49&Refer=top)
1. [泰警方称被绑中国女子疑遭嫌犯下药](https://s.weibo.com//weibo?q=%23%E6%B3%B0%E8%AD%A6%E6%96%B9%E7%A7%B0%E8%A2%AB%E7%BB%91%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E7%96%91%E9%81%AD%E5%AB%8C%E7%8A%AF%E4%B8%8B%E8%8D%AF%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
