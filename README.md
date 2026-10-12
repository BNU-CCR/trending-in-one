# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-12 08:34:42

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
<!-- 最后更新时间 Mon Oct 12 2026 14:27:09 GMT+0800 (China Standard Time) -->

1. [“中国天眼”发现真实宇宙三体世界](https://so.toutiao.com/search?keyword=“中国天眼”发现真实宇宙三体世界)
1. [郑钦文3年商业收入追平李娜整个生涯](https://so.toutiao.com/search?keyword=郑钦文3年商业收入追平李娜整个生涯)
1. [文物里的长征故事](https://so.toutiao.com/search?keyword=文物里的长征故事)
1. [央视曝投资1.2亿项目仅建5个棚](https://so.toutiao.com/search?keyword=央视曝投资1.2亿项目仅建5个棚)
1. [郑钦文因伤退出武网](https://so.toutiao.com/search?keyword=郑钦文因伤退出武网)
1. [男子“举报”母亲在家大量囤积废品](https://so.toutiao.com/search?keyword=男子“举报”母亲在家大量囤积废品)
1. [中方制裁巴拉圭、伯利兹反华政客](https://so.toutiao.com/search?keyword=中方制裁巴拉圭、伯利兹反华政客)
1. [郑钦文父亲多家公司取名满贯](https://so.toutiao.com/search?keyword=郑钦文父亲多家公司取名满贯)
1. [“速成车”为什么越来越多](https://so.toutiao.com/search?keyword=“速成车”为什么越来越多)
1. [媒体人谈央视曝光农业大棚被撂荒](https://so.toutiao.com/search?keyword=媒体人谈央视曝光农业大棚被撂荒)
1. [北京热力辟谣内部人员代缴采暖费打折](https://so.toutiao.com/search?keyword=北京热力辟谣内部人员代缴采暖费打折)
1. [霸王茶姬买一送一 直击门店现况](https://so.toutiao.com/search?keyword=霸王茶姬买一送一%20直击门店现况)
1. [强震后巴拿马运河还稳得住吗](https://so.toutiao.com/search?keyword=强震后巴拿马运河还稳得住吗)
1. [控糖的“最小有效时间”找到了](https://so.toutiao.com/search?keyword=控糖的“最小有效时间”找到了)
1. [郑钦文对手输球告状：没有加油声](https://so.toutiao.com/search?keyword=郑钦文对手输球告状：没有加油声)
1. [全网家长学山东食谱养娃](https://so.toutiao.com/search?keyword=全网家长学山东食谱养娃)
1. [医生提醒：不要捡街头的银杏果吃](https://so.toutiao.com/search?keyword=医生提醒：不要捡街头的银杏果吃)
1. [人民日报评郑钦文夺冠](https://so.toutiao.com/search?keyword=人民日报评郑钦文夺冠)
1. [张雪机车葡萄牙站再登领奖台](https://so.toutiao.com/search?keyword=张雪机车葡萄牙站再登领奖台)
1. [中国旅客转机亲历爆炸：大家都在哭喊](https://so.toutiao.com/search?keyword=中国旅客转机亲历爆炸：大家都在哭喊)
1. [五胞胎爸爸：尿不湿4个月用4000多片](https://so.toutiao.com/search?keyword=五胞胎爸爸：尿不湿4个月用4000多片)
1. [郑钦文红袍加身举金杯旋转拍照](https://so.toutiao.com/search?keyword=郑钦文红袍加身举金杯旋转拍照)
1. [挪威学者：乌克兰在军事上已彻底战败](https://so.toutiao.com/search?keyword=挪威学者：乌克兰在军事上已彻底战败)
1. [周鸿祎：中国AI又一场硬仗来了](https://so.toutiao.com/search?keyword=周鸿祎：中国AI又一场硬仗来了)
1. [华为折叠机累计发货量已破2000万台](https://so.toutiao.com/search?keyword=华为折叠机累计发货量已破2000万台)
1. [胡塞武装的弹道导弹美国能拦截吗](https://so.toutiao.com/search?keyword=胡塞武装的弹道导弹美国能拦截吗)
1. [博主：国乒输得起才赢得久](https://so.toutiao.com/search?keyword=博主：国乒输得起才赢得久)
1. [优必选和宇树的财务曲线为何反着来](https://so.toutiao.com/search?keyword=优必选和宇树的财务曲线为何反着来)
1. [“拖鞋军”为何能打瘫沙特首都机场](https://so.toutiao.com/search?keyword=“拖鞋军”为何能打瘫沙特首都机场)
1. [赵少康将二访沈伯洋引岛内舆论担忧](https://so.toutiao.com/search?keyword=赵少康将二访沈伯洋引岛内舆论担忧)
1. [更换社保卡必须在原发卡地吗](https://so.toutiao.com/search?keyword=更换社保卡必须在原发卡地吗)
1. [郑钦文首夺中网冠军](https://so.toutiao.com/search?keyword=郑钦文首夺中网冠军)
1. [泽连斯基回应特朗普说乌需要新总统](https://so.toutiao.com/search?keyword=泽连斯基回应特朗普说乌需要新总统)
1. [A股短期调整 市场信心是否稳固](https://so.toutiao.com/search?keyword=A股短期调整%20市场信心是否稳固)
1. [媒体：女局长离婚风波不能止于八卦](https://so.toutiao.com/search?keyword=媒体：女局长离婚风波不能止于八卦)
1. [大二专科生称靠切片三年赚七百万](https://so.toutiao.com/search?keyword=大二专科生称靠切片三年赚七百万)
1. [蔡琴宣布退出舞台时间](https://so.toutiao.com/search?keyword=蔡琴宣布退出舞台时间)
1. [郑钦文的“金句时刻”](https://so.toutiao.com/search?keyword=郑钦文的“金句时刻”)
1. [百亿私募创始人谈中外股市分化原因](https://so.toutiao.com/search?keyword=百亿私募创始人谈中外股市分化原因)
1. [博主：沙特能否明白胡塞打不垮](https://so.toutiao.com/search?keyword=博主：沙特能否明白胡塞打不垮)
1. [成都都江堰“日照金山”火了](https://so.toutiao.com/search?keyword=成都都江堰“日照金山”火了)
1. [新皇岗口岸迎来首位入境旅客](https://so.toutiao.com/search?keyword=新皇岗口岸迎来首位入境旅客)
1. [郑钦文决赛闪身步躲球](https://so.toutiao.com/search?keyword=郑钦文决赛闪身步躲球)
1. [我国多地出现地磁暴](https://so.toutiao.com/search?keyword=我国多地出现地磁暴)
1. [霸王茶姬店员劝退消费者](https://so.toutiao.com/search?keyword=霸王茶姬店员劝退消费者)
1. [深圳市委原常委王守睿被查](https://so.toutiao.com/search?keyword=深圳市委原常委王守睿被查)
1. [台学者：以解放军实力对台湾围之即可](https://so.toutiao.com/search?keyword=台学者：以解放军实力对台湾围之即可)
1. [小鹏计划2027年欧洲落地NGP](https://so.toutiao.com/search?keyword=小鹏计划2027年欧洲落地NGP)
1. [加油新规11月1日起全面实施](https://so.toutiao.com/search?keyword=加油新规11月1日起全面实施)
1. [曝凯尔·弗格将加盟广东宏远男篮](https://so.toutiao.com/search?keyword=曝凯尔·弗格将加盟广东宏远男篮)
1. [节后错峰出游持续升温](https://so.toutiao.com/search?keyword=节后错峰出游持续升温)
1. [专家：合肥全城飘香非常罕见](https://so.toutiao.com/search?keyword=专家：合肥全城飘香非常罕见)
1. [人民日报评刹车踏板风波](https://so.toutiao.com/search?keyword=人民日报评刹车踏板风波)
1. [郑钦文合影环节调皮地摘掉爸爸帽子](https://so.toutiao.com/search?keyword=郑钦文合影环节调皮地摘掉爸爸帽子)
1. [郑钦文回应夺冠：压力大到呕吐](https://so.toutiao.com/search?keyword=郑钦文回应夺冠：压力大到呕吐)
1. [亲子鉴定32份报告21个非亲生？假的](https://so.toutiao.com/search?keyword=亲子鉴定32份报告21个非亲生？假的)
1. [身高2米2网红小玥去世年仅26岁](https://so.toutiao.com/search?keyword=身高2米2网红小玥去世年仅26岁)
1. [张雪机车德比斯锁定年度总亚军](https://so.toutiao.com/search?keyword=张雪机车德比斯锁定年度总亚军)
1. [武汉市委市政府向郑钦文致贺电](https://so.toutiao.com/search?keyword=武汉市委市政府向郑钦文致贺电)
1. [中国人亲历机场遇袭：多人被巨响吓哭](https://so.toutiao.com/search?keyword=中国人亲历机场遇袭：多人被巨响吓哭)
1. [胖东来施工现场干净得像AI](https://so.toutiao.com/search?keyword=胖东来施工现场干净得像AI)
1. [大闸蟹价格大跌](https://so.toutiao.com/search?keyword=大闸蟹价格大跌)
1. [中国混动车在欧洲要被“限流”了](https://so.toutiao.com/search?keyword=中国混动车在欧洲要被“限流”了)
1. [医生：熬夜就是熬命](https://so.toutiao.com/search?keyword=医生：熬夜就是熬命)
1. [牛弹琴：泽连斯基最凶险的时刻来了](https://so.toutiao.com/search?keyword=牛弹琴：泽连斯基最凶险的时刻来了)
1. [郑钦文狂揽115万美元奖金](https://so.toutiao.com/search?keyword=郑钦文狂揽115万美元奖金)
1. [秋天为何还有暴雨](https://so.toutiao.com/search?keyword=秋天为何还有暴雨)
1. [王曼昱松岛辉空酷姐酷弟夺冠都不笑](https://so.toutiao.com/search?keyword=王曼昱松岛辉空酷姐酷弟夺冠都不笑)
1. [解放军位台岛周边演训活动天经地义](https://so.toutiao.com/search?keyword=解放军位台岛周边演训活动天经地义)
1. [多国战机导弹云集沙特将围攻胡塞吗](https://so.toutiao.com/search?keyword=多国战机导弹云集沙特将围攻胡塞吗)
1. [王曼昱说对日本球员只有一点优势了](https://so.toutiao.com/search?keyword=王曼昱说对日本球员只有一点优势了)
1. [浙江展会现黑科技“电驴”](https://so.toutiao.com/search?keyword=浙江展会现黑科技“电驴”)
1. [沙特利雅得机场再遇袭1死11伤](https://so.toutiao.com/search?keyword=沙特利雅得机场再遇袭1死11伤)
1. [宣称投资15亿大棚被荒废](https://so.toutiao.com/search?keyword=宣称投资15亿大棚被荒废)
1. [沙特利雅得机场再遭袭 多国谴责胡塞](https://so.toutiao.com/search?keyword=沙特利雅得机场再遭袭%20多国谴责胡塞)
1. [多纳鲁马1分钟内三连扑](https://so.toutiao.com/search?keyword=多纳鲁马1分钟内三连扑)
1. [男子在家晾衣服一套操作看呆网友](https://so.toutiao.com/search?keyword=男子在家晾衣服一套操作看呆网友)
1. [李连杰澄清抛妻弃子传闻](https://so.toutiao.com/search?keyword=李连杰澄清抛妻弃子传闻)
1. [俄鼠疫疑云下留学生：公共场所没防疫](https://so.toutiao.com/search?keyword=俄鼠疫疑云下留学生：公共场所没防疫)
1. [包贝尔出轨风波后与包文婧出游](https://so.toutiao.com/search?keyword=包贝尔出轨风波后与包文婧出游)
1. [超强厄尔尼诺或致广州冬季强寒潮](https://so.toutiao.com/search?keyword=超强厄尔尼诺或致广州冬季强寒潮)
1. [郑钦文赛后唱王心凌《梦的光点》](https://so.toutiao.com/search?keyword=郑钦文赛后唱王心凌《梦的光点》)
1. [蒙古国草原火情蔓延至我边境](https://so.toutiao.com/search?keyword=蒙古国草原火情蔓延至我边境)
1. [国防部批赖清德是“台湾之祸”](https://so.toutiao.com/search?keyword=国防部批赖清德是“台湾之祸”)
1. [曼城3-0送十人利物浦首败](https://so.toutiao.com/search?keyword=曼城3-0送十人利物浦首败)
1. [李一桐谈《美人余》余梦](https://so.toutiao.com/search?keyword=李一桐谈《美人余》余梦)
1. [95号汽油有望跌回8元区间](https://so.toutiao.com/search?keyword=95号汽油有望跌回8元区间)
1. [遭袭沙特机场航站楼烟雾弥漫碎片满地](https://so.toutiao.com/search?keyword=遭袭沙特机场航站楼烟雾弥漫碎片满地)
1. [如何缓解“青菜焦虑症”](https://so.toutiao.com/search?keyword=如何缓解“青菜焦虑症”)
1. [梅艳芳哥哥跪地痛哭否认偷骨灰](https://so.toutiao.com/search?keyword=梅艳芳哥哥跪地痛哭否认偷骨灰)
1. [郑钦文救球神来之笔](https://so.toutiao.com/search?keyword=郑钦文救球神来之笔)
1. [为何大量国人在沙特务工](https://so.toutiao.com/search?keyword=为何大量国人在沙特务工)
1. [常州第一人民医院原院长何小舟被查](https://so.toutiao.com/search?keyword=常州第一人民医院原院长何小舟被查)
1. [有理儿有面：特朗普上演美式双标](https://so.toutiao.com/search?keyword=有理儿有面：特朗普上演美式双标)
1. [沙特遭遇十年来最惨袭击](https://so.toutiao.com/search?keyword=沙特遭遇十年来最惨袭击)
1. [周鸿祎左膝粉碎性骨折](https://so.toutiao.com/search?keyword=周鸿祎左膝粉碎性骨折)
1. [特朗普：俄乌双方同意“能源停火”](https://so.toutiao.com/search?keyword=特朗普：俄乌双方同意“能源停火”)
1. [台湾民众街头举五星红旗高喊要统一](https://so.toutiao.com/search?keyword=台湾民众街头举五星红旗高喊要统一)
1. [邓亚萍谈WTT中国大满贯男单决赛](https://so.toutiao.com/search?keyword=邓亚萍谈WTT中国大满贯男单决赛)
1. [特朗普为何急着和普京联手](https://so.toutiao.com/search?keyword=特朗普为何急着和普京联手)
1. [郑钦文拿下中网冠军热泪盈眶](https://so.toutiao.com/search?keyword=郑钦文拿下中网冠军热泪盈眶)
1. [媒体：社保“应保尽保”要下大功夫](https://so.toutiao.com/search?keyword=媒体：社保“应保尽保”要下大功夫)
1. [医生两次对五胞胎母亲说希望别后悔](https://so.toutiao.com/search?keyword=医生两次对五胞胎母亲说希望别后悔)
1. [专家：东风快递区域拒止让敌不敢来](https://so.toutiao.com/search?keyword=专家：东风快递区域拒止让敌不敢来)
1. [沙特利雅得机场遭袭12死309伤](https://so.toutiao.com/search?keyword=沙特利雅得机场遭袭12死309伤)
1. [媒体评国乒无缘包揽中国大满贯五冠](https://so.toutiao.com/search?keyword=媒体评国乒无缘包揽中国大满贯五冠)
1. [媒体人：广东男篮或沦为省内第三球队](https://so.toutiao.com/search?keyword=媒体人：广东男篮或沦为省内第三球队)
1. [王曼昱横扫佐藤瞳夺冠](https://so.toutiao.com/search?keyword=王曼昱横扫佐藤瞳夺冠)
1. [梅艳芳骨灰被盗近3月无线索](https://so.toutiao.com/search?keyword=梅艳芳骨灰被盗近3月无线索)
1. [郑丽文喊话沈伯洋：不要躲闪](https://so.toutiao.com/search?keyword=郑丽文喊话沈伯洋：不要躲闪)
1. [回顾郑钦文中网夺冠之路](https://so.toutiao.com/search?keyword=回顾郑钦文中网夺冠之路)
1. [基辅连卫生纸都缺了吗](https://so.toutiao.com/search?keyword=基辅连卫生纸都缺了吗)
1. [沙特首都机场遇袭意味着什么](https://so.toutiao.com/search?keyword=沙特首都机场遇袭意味着什么)
1. [库克和苏炳添一起在广州叹早茶](https://so.toutiao.com/search?keyword=库克和苏炳添一起在广州叹早茶)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Mon Oct 12 2026 10:20:22 GMT+0800 (China Standard Time) -->

1. [人民日报评尊界刹车踏板风波](https://www.zhihu.com/search?q=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%B0%8A%E7%95%8C%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E9%A3%8E%E6%B3%A2)
1. [林诗栋被撤销亚锦赛男单混双报名](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B%E8%A2%AB%E6%92%A4%E9%94%80%E4%BA%9A%E9%94%A6%E8%B5%9B%E7%94%B7%E5%8D%95%E6%B7%B7%E5%8F%8C%E6%8A%A5%E5%90%8D)
1. [大二专科生称靠切片三年赚七百万](https://www.zhihu.com/search?q=%E5%A4%A7%E4%BA%8C%E4%B8%93%E7%A7%91%E7%94%9F%E7%A7%B0%E9%9D%A0%E5%88%87%E7%89%87%E4%B8%89%E5%B9%B4%E8%B5%9A%E4%B8%83%E7%99%BE%E4%B8%87)
1. [沙特利雅得机场遭袭致12死309伤](https://www.zhihu.com/search?q=%E6%B2%99%E7%89%B9%E5%88%A9%E9%9B%85%E5%BE%97%E6%9C%BA%E5%9C%BA%E9%81%AD%E8%A2%AD%E8%87%B412%E6%AD%BB309%E4%BC%A4)
1. [柏林45秒退出申办2036奥运](https://www.zhihu.com/search?q=%E6%9F%8F%E6%9E%9745%E7%A7%92%E9%80%80%E5%87%BA%E7%94%B3%E5%8A%9E2036%E5%A5%A5%E8%BF%90)
1. [沙特利雅得机场再次遇袭](https://www.zhihu.com/search?q=%E6%B2%99%E7%89%B9%E5%88%A9%E9%9B%85%E5%BE%97%E6%9C%BA%E5%9C%BA%E5%86%8D%E6%AC%A1%E9%81%87%E8%A2%AD)
1. [郑钦文夺得中网女单冠军](https://www.zhihu.com/search?q=%E9%83%91%E9%92%A6%E6%96%87%E5%A4%BA%E5%BE%97%E4%B8%AD%E7%BD%91%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B)
1. [江淮汽车回应尊界刹车踏板支架断裂](https://www.zhihu.com/search?q=%E6%B1%9F%E6%B7%AE%E6%B1%BD%E8%BD%A6%E5%9B%9E%E5%BA%94%E5%B0%8A%E7%95%8C%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82)
1. [男子国庆被排7天班未去遭开除](https://www.zhihu.com/search?q=%E7%94%B7%E5%AD%90%E5%9B%BD%E5%BA%86%E8%A2%AB%E6%8E%927%E5%A4%A9%E7%8F%AD%E6%9C%AA%E5%8E%BB%E9%81%AD%E5%BC%80%E9%99%A4)
1. [邵艾伦对话孙宇晨](https://www.zhihu.com/search?q=%E9%82%B5%E8%89%BE%E4%BC%A6%E5%AF%B9%E8%AF%9D%E5%AD%99%E5%AE%87%E6%99%A8)
1. [胡歌称拍仙剑三很无聊](https://www.zhihu.com/search?q=%E8%83%A1%E6%AD%8C%E7%A7%B0%E6%8B%8D%E4%BB%99%E5%89%91%E4%B8%89%E5%BE%88%E6%97%A0%E8%81%8A)
1. [永州一局长被举报婚内出轨多人](https://www.zhihu.com/search?q=%E6%B0%B8%E5%B7%9E%E4%B8%80%E5%B1%80%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A8%E5%A4%9A%E4%BA%BA)
1. [自闭症儿童乘电梯遭陌生男子踹飞](https://www.zhihu.com/search?q=%E8%87%AA%E9%97%AD%E7%97%87%E5%84%BF%E7%AB%A5%E4%B9%98%E7%94%B5%E6%A2%AF%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%E8%B8%B9%E9%A3%9E)
1. [儿科医生拒绝家长插队遭投诉](https://www.zhihu.com/search?q=%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E6%8B%92%E7%BB%9D%E5%AE%B6%E9%95%BF%E6%8F%92%E9%98%9F%E9%81%AD%E6%8A%95%E8%AF%89)
1. [曝梅艳芳骨灰盒疑似被盗](https://www.zhihu.com/search?q=%E6%9B%9D%E6%A2%85%E8%89%B3%E8%8A%B3%E9%AA%A8%E7%81%B0%E7%9B%92%E7%96%91%E4%BC%BC%E8%A2%AB%E7%9B%97)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Oct 12 2026 08:34:42 GMT+0800 (China Standard Time) -->

1. [中网女单决赛，郑钦文 2-0 战胜安德列娃夺得冠军，如何评价本场比赛以及她的亮眼表现？](https://www.zhihu.com/question/2092635424363476000)
1. [儿科医生按号顺序抢救车祸重伤儿童，后一位家长插队被拒后打电话投诉，此事背后反映了哪些问题？](https://www.zhihu.com/question/2092686581832180700)
1. [媒体曝46岁「数学家」用AI炒股登上富豪榜，年赚642亿，如何看待这一造富神话？对普通人有借鉴意义吗？](https://www.zhihu.com/question/2092640723375842300)
1. [女子3个月对盒马399件商品申请仅退款，快递员取件退还吃剩的，涉嫌诈骗罪被采取刑事强制，如何看待此事？](https://www.zhihu.com/question/2092372203266487300)
1. [为什么大部分医院的院长副院长都是心外科胸外科上任的？](https://www.zhihu.com/question/1904336392173093000)
1. [我国验证出一种全新抗癌疗法，一针纳米材料打进肿瘤可让癌细胞生锈死亡，原理是什么？这一成果具有哪些意义？](https://www.zhihu.com/question/2092387652544589800)
1. [ai现在发展到什么程度了？](https://www.zhihu.com/question/2076955434141873200)
1. [历史上关羽的谥号是壮缪侯，这个谥号是个恶谥吗？](https://www.zhihu.com/question/2040909685105086700)
1. [男子国庆被排 7 天班 1 天未去遭开除，法院判公司合法解除，从法律角度该如何解读？](https://www.zhihu.com/question/2092544237233517000)
1. [如何看待知名配音小N与奇响天外合约到期不续，成自由人，对个人发展有何利弊?](https://www.zhihu.com/question/2092573513815168300)
1. [为什么喝酒喝到微醺会让人感到快乐？](https://www.zhihu.com/question/614889347)
1. [《纽约时报》评选 21 世纪百佳剧集《绝命毒师》登顶，这份榜单符合你的预期吗？](https://www.zhihu.com/question/2087154137708480300)
1. [如何看待腾讯QClaw停运后，网易LobsterAI发信称「不会将用户体验与数据当作内部赛马筹码」？](https://www.zhihu.com/question/2092227766993294600)
1. [曼城 3-0 送十人利物浦首败，哈兰德谢尔基破门，如何评价这场比赛？](https://www.zhihu.com/question/2092759303287584800)
1. [如何评价《兰香如故》中赵星棠因家族奉行“女子无才便是德”而不识字，连账目都要依赖婢女青葙处理？](https://www.zhihu.com/question/2092644406272733700)
1. [人社部提出「通过政策优化、数据找人等措施，力争基本养老保险参保率稳定在95%以上」，哪些信息值得关注？](https://www.zhihu.com/question/2092332439364489500)
1. [WTT中国大满贯赛，男世一松岛辉空 4-3 林昀儒夺冠，怎么评价本场比赛以及19岁松岛辉空的上升势头？](https://www.zhihu.com/question/2092697880695928000)
1. [史上最大退休潮来了，未来 14 年，平均每天 6 万人退休 ​，养老金体系该如何应对？](https://www.zhihu.com/question/2092187029413090600)
1. [第四届衢州烂柯杯世界围棋公开赛，韩国申真谞、申旻埈、卞相壹、李志贤包揽四强，如何看待这一结果？](https://www.zhihu.com/question/2092304359237406700)
1. [怎么看 Cloudflare 宣布 Deno 团队整体加入，原 Deno 运行时一年后停止开发？](https://www.zhihu.com/question/2092196286669895700)
1. [广东 5 人吃野生红尾鲤确诊哈夫病，这种病是如何引发的？日常吃鱼该怎样防范？](https://www.zhihu.com/question/2091593487581975300)
1. [因长期辱骂江秋莲被判道歉+赔付，网红黄建生公开发文向江秋莲道歉，哪些信息值得关注？](https://www.zhihu.com/question/2092373331072612400)
1. [OpenAI 发布 175 页四维挂谷猜想证明稿，这意味着什么？](https://www.zhihu.com/question/2092197283857175000)
1. [道德经被人改了，还能看吗？](https://www.zhihu.com/question/400897266)
1. [我们能从 2026 诺奖得主身上学习到什么？](https://www.zhihu.com/question/2091987413103129300)
1. [多车企扎堆发布猛踩刹车视频，会倒逼行业提高安全冗余标准吗？](https://www.zhihu.com/question/2092302606202946600)
1. [做人最基本的底线是什么？](https://www.zhihu.com/question/2076124165787088000)
1. [同事表面称兄道弟，背地打小报告，职场“假朋友”是不是比真敌人更致命？](https://www.zhihu.com/question/2037471845826425000)
1. [谁在用Codex？实际体验真有那么好吗？](https://www.zhihu.com/question/2057495861937153300)
1. [在职场中，A承担了 80% 的工作量，B只做 20%，但B零失误，为什么最后奖金、升职全是干活少的B？](https://www.zhihu.com/question/2091907275392866300)
1. [为什么五子棋始终没有发展起来？](https://www.zhihu.com/question/284634562)
1. [沙特利雅得机场遭袭，造成 12 人死亡 309 人受伤，哪些信息值得关注？对中东局势有何影响？](https://www.zhihu.com/question/2092513467722719500)
1. [如何评价郑钦文拿到中国球手的第一个中网冠军？这也是李娜之后中国网球的第二个WTA1000大师赛冠军？](https://www.zhihu.com/question/2092726996291868400)
1. [大二专科生自述靠切片三年赚七百万，直播切片究竟是怎么赚钱的？这种赚钱模式能复制吗？](https://www.zhihu.com/question/2092562681433514200)
1. [红果短剧为何让人着迷？](https://www.zhihu.com/question/2081873980173174300)
1. [如何看待四川巴中12345被指拖欠员工工资，工作人员称欠薪问题已在解决，常拖欠不属实，暴露了哪些问题？](https://www.zhihu.com/question/2091593011432010500)
1. [深圳中小学将迎春秋假且不调休，会对双职工家庭带来哪些影响？](https://www.zhihu.com/question/2092006267560649500)
1. [岸本齐史的全新漫画《火影忍者：暗影崛起》正式公布，对此你有哪些期待？](https://www.zhihu.com/question/2092554410895171800)
1. [为什么感觉gpt6反而不好用了？](https://www.zhihu.com/question/2079863733422142700)
1. [《天国：拯救》主创说玩家厌倦了“天选之人”，可如果真让亨利当个普通人，玩家能接受不特别的主角吗？](https://www.zhihu.com/question/2090584961963378700)
1. [《三体》3中褚岩摧毁水滴后为什么直接广播，而不是尝试再次建立威慑？](https://www.zhihu.com/question/2075269578842816800)
1. [刘欢是怎么做到一天音乐学院都没上过，就能在音乐方面有这么大的造诣的？](https://www.zhihu.com/question/2090980380291736800)
1. [为什么不把香港元朗、屯门、北区划到深圳，既能帮助香港开发荒地，又能解决深圳的用地不足问题？](https://www.zhihu.com/question/2049776403307029800)
1. [《空之轨迹2nd》里艾丝蒂尔这种天然呆放现实职场，你会觉得她是真性情还是情商低？](https://www.zhihu.com/question/2083962505064355300)

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
<!-- 最后更新时间 Mon Oct 12 2026 08:38:48 GMT+0800 (China Standard Time) -->

1. [我们的长征路](https://s.weibo.com//weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E9%95%BF%E5%BE%81%E8%B7%AF%23&Refer=new_time)
1. [霸王茶姬买一送一](https://s.weibo.com//weibo?q=%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E4%B9%B0%E4%B8%80%E9%80%81%E4%B8%80&t=31&band_rank=1&Refer=top)
1. [郑钦文晒图庆祝夺冠](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%99%92%E5%9B%BE%E5%BA%86%E7%A5%9D%E5%A4%BA%E5%86%A0%23&t=31&band_rank=2&Refer=top)
1. [本周这些数据值得关注](https://s.weibo.com//weibo?q=%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8&t=31&band_rank=3&Refer=top)
1. [记者暗访有偿陪伴服务](https://s.weibo.com//weibo?q=%23%E8%AE%B0%E8%80%85%E6%9A%97%E8%AE%BF%E6%9C%89%E5%81%BF%E9%99%AA%E4%BC%B4%E6%9C%8D%E5%8A%A1%23&t=31&band_rank=4&Refer=top)
1. [央视曝投资1.2亿项目仅建5个棚](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%8A%95%E8%B5%841.2%E4%BA%BF%E9%A1%B9%E7%9B%AE%E4%BB%85%E5%BB%BA5%E4%B8%AA%E6%A3%9A%23&t=31&band_rank=5&Refer=top)
1. [女孩去马来西亚高薪工作后失联](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%A9%E5%8E%BB%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E9%AB%98%E8%96%AA%E5%B7%A5%E4%BD%9C%E5%90%8E%E5%A4%B1%E8%81%94&t=31&band_rank=6&Refer=top)
1. [李娜 郑钦文](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%A8%9C%20%E9%83%91%E9%92%A6%E6%96%87&t=31&band_rank=7&Refer=top)
1. [郑钦文收获明年澳网的种子席位](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%94%B6%E8%8E%B7%E6%98%8E%E5%B9%B4%E6%BE%B3%E7%BD%91%E7%9A%84%E7%A7%8D%E5%AD%90%E5%B8%AD%E4%BD%8D%23&t=31&band_rank=8&Refer=top)
1. [第一次知道汉语拼音的由来](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9F%A5%E9%81%93%E6%B1%89%E8%AF%AD%E6%8B%BC%E9%9F%B3%E7%9A%84%E7%94%B1%E6%9D%A5&t=31&band_rank=9&Refer=top)
1. [关晓彤回应去宋雨琦演唱会](https://s.weibo.com//weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%9B%9E%E5%BA%94%E5%8E%BB%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=10&Refer=top)
1. [性压抑和性羞耻都会向外投射](https://s.weibo.com//weibo?q=%E6%80%A7%E5%8E%8B%E6%8A%91%E5%92%8C%E6%80%A7%E7%BE%9E%E8%80%BB%E9%83%BD%E4%BC%9A%E5%90%91%E5%A4%96%E6%8A%95%E5%B0%84&t=31&band_rank=11&Refer=top)
1. [林俊杰对七七说不要害羞](https://s.weibo.com//weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%AF%B9%E4%B8%83%E4%B8%83%E8%AF%B4%E4%B8%8D%E8%A6%81%E5%AE%B3%E7%BE%9E%23&t=31&band_rank=12&Refer=top)
1. [侯明昊工作室 别扯了单身勿扰](https://s.weibo.com//weibo?q=%E4%BE%AF%E6%98%8E%E6%98%8A%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%88%AB%E6%89%AF%E4%BA%86%E5%8D%95%E8%BA%AB%E5%8B%BF%E6%89%B0&t=31&band_rank=13&Refer=top)
1. [社保](https://s.weibo.com//weibo?q=%E7%A4%BE%E4%BF%9D&t=31&band_rank=14&Refer=top)
1. [短剧男演员凭什么日薪五六万](https://s.weibo.com//weibo?q=%E7%9F%AD%E5%89%A7%E7%94%B7%E6%BC%94%E5%91%98%E5%87%AD%E4%BB%80%E4%B9%88%E6%97%A5%E8%96%AA%E4%BA%94%E5%85%AD%E4%B8%87&t=31&band_rank=15&Refer=top)
1. [身高2.2米巨人网红小玥去世](https://s.weibo.com//weibo?q=%23%E8%BA%AB%E9%AB%982.2%E7%B1%B3%E5%B7%A8%E4%BA%BA%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E5%8E%BB%E4%B8%96%23&t=31&band_rank=16&Refer=top)
1. [我变成了那晚的母亲](https://s.weibo.com//weibo?q=%E6%88%91%E5%8F%98%E6%88%90%E4%BA%86%E9%82%A3%E6%99%9A%E7%9A%84%E6%AF%8D%E4%BA%B2&t=31&band_rank=17&Refer=top)
1. [腾讯史上破2w7的综艺](https://s.weibo.com//weibo?q=%23%E8%85%BE%E8%AE%AF%E5%8F%B2%E4%B8%8A%E7%A0%B42w7%E7%9A%84%E7%BB%BC%E8%89%BA%23&t=31&band_rank=18&Refer=top)
1. [郑钦文的商业价值有多高](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%E7%9A%84%E5%95%86%E4%B8%9A%E4%BB%B7%E5%80%BC%E6%9C%89%E5%A4%9A%E9%AB%98&t=31&band_rank=19&Refer=top)
1. [周鸿祎攀岩从3米高处摔下](https://s.weibo.com//weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E6%94%80%E5%B2%A9%E4%BB%8E3%E7%B1%B3%E9%AB%98%E5%A4%84%E6%91%94%E4%B8%8B%23&t=31&band_rank=20&Refer=top)
1. [被骗缅北女孩遭遇惨不忍睹](https://s.weibo.com//weibo?q=%E8%A2%AB%E9%AA%97%E7%BC%85%E5%8C%97%E5%A5%B3%E5%AD%A9%E9%81%AD%E9%81%87%E6%83%A8%E4%B8%8D%E5%BF%8D%E7%9D%B9&t=31&band_rank=21&Refer=top)
1. [真的建议大家要对钱有概念](https://s.weibo.com//weibo?q=%E7%9C%9F%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A6%81%E5%AF%B9%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5&t=31&band_rank=22&Refer=top)
1. [双胞胎只有彼此才是自由](https://s.weibo.com//weibo?q=%E5%8F%8C%E8%83%9E%E8%83%8E%E5%8F%AA%E6%9C%89%E5%BD%BC%E6%AD%A4%E6%89%8D%E6%98%AF%E8%87%AA%E7%94%B1&t=31&band_rank=23&Refer=top)
1. [恋爱要找大方的男朋友](https://s.weibo.com//weibo?q=%E6%81%8B%E7%88%B1%E8%A6%81%E6%89%BE%E5%A4%A7%E6%96%B9%E7%9A%84%E7%94%B7%E6%9C%8B%E5%8F%8B&t=31&band_rank=24&Refer=top)
1. [网红小玥去世男友发讣告](https://s.weibo.com//weibo?q=%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E5%8E%BB%E4%B8%96%E7%94%B7%E5%8F%8B%E5%8F%91%E8%AE%A3%E5%91%8A&t=31&band_rank=25&Refer=top)
1. [身上出现这样的红点要警惕](https://s.weibo.com//weibo?q=%23%E8%BA%AB%E4%B8%8A%E5%87%BA%E7%8E%B0%E8%BF%99%E6%A0%B7%E7%9A%84%E7%BA%A2%E7%82%B9%E8%A6%81%E8%AD%A6%E6%83%95%23&t=31&band_rank=26&Refer=top)
1. [郑钦文就差一个大满贯冠军了](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%B0%B1%E5%B7%AE%E4%B8%80%E4%B8%AA%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%A0%E5%86%9B%E4%BA%86%23&t=31&band_rank=27&Refer=top)
1. [老护士辞职后儿科投诉翻倍](https://s.weibo.com//weibo?q=%E8%80%81%E6%8A%A4%E5%A3%AB%E8%BE%9E%E8%81%8C%E5%90%8E%E5%84%BF%E7%A7%91%E6%8A%95%E8%AF%89%E7%BF%BB%E5%80%8D&t=31&band_rank=28&Refer=top)
1. [中国女性传统坐姿松弛张扬](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%80%A7%E4%BC%A0%E7%BB%9F%E5%9D%90%E5%A7%BF%E6%9D%BE%E5%BC%9B%E5%BC%A0%E6%89%AC&t=31&band_rank=29&Refer=top)
1. [马化腾带28岁青年与省委书记座谈](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%8C%96%E8%85%BE%E5%B8%A628%E5%B2%81%E9%9D%92%E5%B9%B4%E4%B8%8E%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E5%BA%A7%E8%B0%88%23&t=31&band_rank=30&Refer=top)
1. [郑钦文调皮摘掉爸爸帽子露出光头](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%B0%83%E7%9A%AE%E6%91%98%E6%8E%89%E7%88%B8%E7%88%B8%E5%B8%BD%E5%AD%90%E9%9C%B2%E5%87%BA%E5%85%89%E5%A4%B4%23&t=31&band_rank=31&Refer=top)
1. [侯明昊卢昱晓 观鹤笔记](https://s.weibo.com//weibo?q=%E4%BE%AF%E6%98%8E%E6%98%8A%E5%8D%A2%E6%98%B1%E6%99%93%20%E8%A7%82%E9%B9%A4%E7%AC%94%E8%AE%B0&t=31&band_rank=32&Refer=top)
1. [玉簟秋原著](https://s.weibo.com//weibo?q=%E7%8E%89%E7%B0%9F%E7%A7%8B%E5%8E%9F%E8%91%97&t=31&band_rank=33&Refer=top)
1. [撒贝宁龙凤胎身高遗传了妈妈李白](https://s.weibo.com//weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E9%BE%99%E5%87%A4%E8%83%8E%E8%BA%AB%E9%AB%98%E9%81%97%E4%BC%A0%E4%BA%86%E5%A6%88%E5%A6%88%E6%9D%8E%E7%99%BD%23&t=31&band_rank=34&Refer=top)
1. [郑钦文夺冠采访](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%E5%A4%BA%E5%86%A0%E9%87%87%E8%AE%BF&t=31&band_rank=35&Refer=top)
1. [郑钦文教练祝贺她开演唱会](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%95%99%E7%BB%83%E7%A5%9D%E8%B4%BA%E5%A5%B9%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=36&Refer=top)
1. [郑钦文女王回眸](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%A5%B3%E7%8E%8B%E5%9B%9E%E7%9C%B8%23&t=31&band_rank=37&Refer=top)
1. [刘浩存舞台行公主礼](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E8%88%9E%E5%8F%B0%E8%A1%8C%E5%85%AC%E4%B8%BB%E7%A4%BC%23&t=31&band_rank=38&Refer=top)
1. [网传缅北诈骗盯上泰百粉丝](https://s.weibo.com//weibo?q=%E7%BD%91%E4%BC%A0%E7%BC%85%E5%8C%97%E8%AF%88%E9%AA%97%E7%9B%AF%E4%B8%8A%E6%B3%B0%E7%99%BE%E7%B2%89%E4%B8%9D&t=31&band_rank=39&Refer=top)
1. [松岛辉空王曼昱长大了怎么不笑了](https://s.weibo.com//weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E7%8E%8B%E6%9B%BC%E6%98%B1%E9%95%BF%E5%A4%A7%E4%BA%86%E6%80%8E%E4%B9%88%E4%B8%8D%E7%AC%91%E4%BA%86%23&t=31&band_rank=40&Refer=top)
1. [七七与林俊杰妈妈看演出](https://s.weibo.com//weibo?q=%E4%B8%83%E4%B8%83%E4%B8%8E%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%A6%88%E5%A6%88%E7%9C%8B%E6%BC%94%E5%87%BA&t=31&band_rank=41&Refer=top)
1. [婚姻不是年龄到了就该结](https://s.weibo.com//weibo?q=%E5%A9%9A%E5%A7%BB%E4%B8%8D%E6%98%AF%E5%B9%B4%E9%BE%84%E5%88%B0%E4%BA%86%E5%B0%B1%E8%AF%A5%E7%BB%93&t=31&band_rank=42&Refer=top)
1. [成熟后才知道品味毫无意义](https://s.weibo.com//weibo?q=%E6%88%90%E7%86%9F%E5%90%8E%E6%89%8D%E7%9F%A5%E9%81%93%E5%93%81%E5%91%B3%E6%AF%AB%E6%97%A0%E6%84%8F%E4%B9%89&t=31&band_rank=43&Refer=top)
1. [李九 AG](https://s.weibo.com//weibo?q=%E6%9D%8E%E4%B9%9D%20AG&t=31&band_rank=44&Refer=top)
1. [杭州限狗令白天遛狗罚款](https://s.weibo.com//weibo?q=%E6%9D%AD%E5%B7%9E%E9%99%90%E7%8B%97%E4%BB%A4%E7%99%BD%E5%A4%A9%E9%81%9B%E7%8B%97%E7%BD%9A%E6%AC%BE&t=31&band_rank=45&Refer=top)
1. [男子国庆旷工4天遭开除起诉被驳回](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%BD%E5%BA%86%E6%97%B7%E5%B7%A54%E5%A4%A9%E9%81%AD%E5%BC%80%E9%99%A4%E8%B5%B7%E8%AF%89%E8%A2%AB%E9%A9%B3%E5%9B%9E%23&t=31&band_rank=46&Refer=top)
1. [国乒团队全体起立为王曼昱鼓掌](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E5%9B%A2%E9%98%9F%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%E4%B8%BA%E7%8E%8B%E6%9B%BC%E6%98%B1%E9%BC%93%E6%8E%8C%23&t=31&band_rank=47&Refer=top)
1. [2.2米去世女网红小玥曾被查出脑瘤](https://s.weibo.com//weibo?q=%232.2%E7%B1%B3%E5%8E%BB%E4%B8%96%E5%A5%B3%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E6%9B%BE%E8%A2%AB%E6%9F%A5%E5%87%BA%E8%84%91%E7%98%A4%23&t=31&band_rank=48&Refer=top)
1. [刘学义林锦岐告别兰香](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%9E%97%E9%94%A6%E5%B2%90%E5%91%8A%E5%88%AB%E5%85%B0%E9%A6%99%23&t=31&band_rank=49&Refer=top)
1. [印度男同事女友是六边形战士](https://s.weibo.com//weibo?q=%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%90%8C%E4%BA%8B%E5%A5%B3%E5%8F%8B%E6%98%AF%E5%85%AD%E8%BE%B9%E5%BD%A2%E6%88%98%E5%A3%AB&t=31&band_rank=50&Refer=top)
1. [郑钦文就差一个大满贯冠军了](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%B0%B1%E5%B7%AE%E4%B8%80%E4%B8%AA%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%A0%E5%86%9B%E4%BA%86%23&t=31&band_rank=2&Refer=top)
1. [李娜 郑钦文](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%A8%9C%20%E9%83%91%E9%92%A6%E6%96%87&t=31&band_rank=4&Refer=top)
1. [郑钦文收获明年澳网的种子席位](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%94%B6%E8%8E%B7%E6%98%8E%E5%B9%B4%E6%BE%B3%E7%BD%91%E7%9A%84%E7%A7%8D%E5%AD%90%E5%B8%AD%E4%BD%8D%23&t=31&band_rank=5&Refer=top)
1. [身高2.2米巨人网红小玥去世](https://s.weibo.com//weibo?q=%23%E8%BA%AB%E9%AB%982.2%E7%B1%B3%E5%B7%A8%E4%BA%BA%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E5%8E%BB%E4%B8%96%23&t=31&band_rank=6&Refer=top)
1. [记者暗访有偿陪伴服务](https://s.weibo.com//weibo?q=%23%E8%AE%B0%E8%80%85%E6%9A%97%E8%AE%BF%E6%9C%89%E5%81%BF%E9%99%AA%E4%BC%B4%E6%9C%8D%E5%8A%A1%23&t=31&band_rank=7&Refer=top)
1. [中国女性传统坐姿松弛张扬](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%80%A7%E4%BC%A0%E7%BB%9F%E5%9D%90%E5%A7%BF%E6%9D%BE%E5%BC%9B%E5%BC%A0%E6%89%AC&t=31&band_rank=8&Refer=top)
1. [李思潼妆前妆后变化好大](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E5%A6%86%E5%89%8D%E5%A6%86%E5%90%8E%E5%8F%98%E5%8C%96%E5%A5%BD%E5%A4%A7%23&t=31&band_rank=9&Refer=top)
1. [郑钦文中网夺冠捧杯时刻](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%AD%E7%BD%91%E5%A4%BA%E5%86%A0%E6%8D%A7%E6%9D%AF%E6%97%B6%E5%88%BB%23&t=31&band_rank=10&Refer=top)
1. [社保](https://s.weibo.com//weibo?q=%E7%A4%BE%E4%BF%9D&t=31&band_rank=11&Refer=top)
1. [关晓彤回应去宋雨琦演唱会](https://s.weibo.com//weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%9B%9E%E5%BA%94%E5%8E%BB%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=12&Refer=top)
1. [李九 AG](https://s.weibo.com//weibo?q=%E6%9D%8E%E4%B9%9D%20AG&t=31&band_rank=13&Refer=top)
1. [利物浦0比3曼城](https://s.weibo.com//weibo?q=%E5%88%A9%E7%89%A9%E6%B5%A60%E6%AF%943%E6%9B%BC%E5%9F%8E&t=31&band_rank=14&Refer=top)
1. [曼城6战全胜领跑积分榜](https://s.weibo.com//weibo?q=%E6%9B%BC%E5%9F%8E6%E6%88%98%E5%85%A8%E8%83%9C%E9%A2%86%E8%B7%91%E7%A7%AF%E5%88%86%E6%A6%9C&t=31&band_rank=15&Refer=top)
1. [网传缅北诈骗盯上泰百粉丝](https://s.weibo.com//weibo?q=%E7%BD%91%E4%BC%A0%E7%BC%85%E5%8C%97%E8%AF%88%E9%AA%97%E7%9B%AF%E4%B8%8A%E6%B3%B0%E7%99%BE%E7%B2%89%E4%B8%9D&t=31&band_rank=16&Refer=top)
1. [利物浦红牌](https://s.weibo.com//weibo?q=%E5%88%A9%E7%89%A9%E6%B5%A6%E7%BA%A2%E7%89%8C&t=31&band_rank=17&Refer=top)
1. [老护士辞职后儿科投诉翻倍](https://s.weibo.com//weibo?q=%E8%80%81%E6%8A%A4%E5%A3%AB%E8%BE%9E%E8%81%8C%E5%90%8E%E5%84%BF%E7%A7%91%E6%8A%95%E8%AF%89%E7%BF%BB%E5%80%8D&t=31&band_rank=18&Refer=top)
1. [郑钦文奖杯的重量是梦想的重量](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%A5%96%E6%9D%AF%E7%9A%84%E9%87%8D%E9%87%8F%E6%98%AF%E6%A2%A6%E6%83%B3%E7%9A%84%E9%87%8D%E9%87%8F%23&t=31&band_rank=19&Refer=top)
1. [央视曝投资1.2亿项目仅建5个棚](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%8A%95%E8%B5%841.2%E4%BA%BF%E9%A1%B9%E7%9B%AE%E4%BB%85%E5%BB%BA5%E4%B8%AA%E6%A3%9A%23&t=31&band_rank=20&Refer=top)
1. [身上出现这样的红点要警惕](https://s.weibo.com//weibo?q=%23%E8%BA%AB%E4%B8%8A%E5%87%BA%E7%8E%B0%E8%BF%99%E6%A0%B7%E7%9A%84%E7%BA%A2%E7%82%B9%E8%A6%81%E8%AD%A6%E6%83%95%23&t=31&band_rank=22&Refer=top)
1. [中网终于迎来属于中国自己的女单冠军](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BD%91%E7%BB%88%E4%BA%8E%E8%BF%8E%E6%9D%A5%E5%B1%9E%E4%BA%8E%E4%B8%AD%E5%9B%BD%E8%87%AA%E5%B7%B1%E7%9A%84%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%23&t=31&band_rank=23&Refer=top)
1. [郑钦文爸爸妈妈现场见证女儿夺冠](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88%E7%8E%B0%E5%9C%BA%E8%A7%81%E8%AF%81%E5%A5%B3%E5%84%BF%E5%A4%BA%E5%86%A0%23&t=31&band_rank=24&Refer=top)
1. [厚本我不是NPC演技](https://s.weibo.com//weibo?q=%23%E5%8E%9A%E6%9C%AC%E6%88%91%E4%B8%8D%E6%98%AFNPC%E6%BC%94%E6%8A%80%23&t=31&band_rank=25&Refer=top)
1. [郑钦文代言](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%E4%BB%A3%E8%A8%80&t=31&band_rank=26&Refer=top)
1. [利物浦vs曼城](https://s.weibo.com//weibo?q=%23%E5%88%A9%E7%89%A9%E6%B5%A6vs%E6%9B%BC%E5%9F%8E%23&t=31&band_rank=27&Refer=top)
1. [保姆被误会勾引男主人](https://s.weibo.com//weibo?q=%23%E4%BF%9D%E5%A7%86%E8%A2%AB%E8%AF%AF%E4%BC%9A%E5%8B%BE%E5%BC%95%E7%94%B7%E4%B8%BB%E4%BA%BA%23&t=31&band_rank=28&Refer=top)
1. [中网奖金](https://s.weibo.com//weibo?q=%E4%B8%AD%E7%BD%91%E5%A5%96%E9%87%91&t=31&band_rank=29&Refer=top)
1. [郑钦文中网女单夺冠](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%E4%B8%AD%E7%BD%91%E5%A5%B3%E5%8D%95%E5%A4%BA%E5%86%A0&t=31&band_rank=30&Refer=top)
1. [印度男同事女友是六边形战士](https://s.weibo.com//weibo?q=%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%90%8C%E4%BA%8B%E5%A5%B3%E5%8F%8B%E6%98%AF%E5%85%AD%E8%BE%B9%E5%BD%A2%E6%88%98%E5%A3%AB&t=31&band_rank=31&Refer=top)
1. [姐姐给老弟煮六包线面在外网火了](https://s.weibo.com//weibo?q=%E5%A7%90%E5%A7%90%E7%BB%99%E8%80%81%E5%BC%9F%E7%85%AE%E5%85%AD%E5%8C%85%E7%BA%BF%E9%9D%A2%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86&t=31&band_rank=32&Refer=top)
1. [AG战胜TES](https://s.weibo.com//weibo?q=AG%E6%88%98%E8%83%9CTES&t=31&band_rank=33&Refer=top)
1. [中国人时隔14年再夺1000赛冠军](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%97%B6%E9%9A%9414%E5%B9%B4%E5%86%8D%E5%A4%BA1000%E8%B5%9B%E5%86%A0%E5%86%9B%23&t=31&band_rank=34&Refer=top)
1. [2.2米去世女网红小玥曾被查出脑瘤](https://s.weibo.com//weibo?q=%232.2%E7%B1%B3%E5%8E%BB%E4%B8%96%E5%A5%B3%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E6%9B%BE%E8%A2%AB%E6%9F%A5%E5%87%BA%E8%84%91%E7%98%A4%23&t=31&band_rank=35&Refer=top)
1. [松岛辉空启蒙教练是中国顶级球员](https://s.weibo.com//weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E5%90%AF%E8%92%99%E6%95%99%E7%BB%83%E6%98%AF%E4%B8%AD%E5%9B%BD%E9%A1%B6%E7%BA%A7%E7%90%83%E5%91%98%23&t=31&band_rank=36&Refer=top)
1. [梅尼耶妻子手臂瘦得吓人](https://s.weibo.com//weibo?q=%23%E6%A2%85%E5%B0%BC%E8%80%B6%E5%A6%BB%E5%AD%90%E6%89%8B%E8%87%82%E7%98%A6%E5%BE%97%E5%90%93%E4%BA%BA%23&t=31&band_rank=37&Refer=top)
1. [神兵小将](https://s.weibo.com//weibo?q=%E7%A5%9E%E5%85%B5%E5%B0%8F%E5%B0%86&t=31&band_rank=38&Refer=top)
1. [李九说AG轮换是填错名单](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E4%B9%9D%E8%AF%B4AG%E8%BD%AE%E6%8D%A2%E6%98%AF%E5%A1%AB%E9%94%99%E5%90%8D%E5%8D%95%23&t=31&band_rank=39&Refer=top)
1. [龚俊F1采访](https://s.weibo.com//weibo?q=%23%E9%BE%9A%E4%BF%8AF1%E9%87%87%E8%AE%BF%23&t=31&band_rank=40&Refer=top)
1. [张盛解说漏掉李娜](https://s.weibo.com//weibo?q=%E5%BC%A0%E7%9B%9B%E8%A7%A3%E8%AF%B4%E6%BC%8F%E6%8E%89%E6%9D%8E%E5%A8%9C&t=31&band_rank=41&Refer=top)
1. [解说调侃AG轮换填错](https://s.weibo.com//weibo?q=%E8%A7%A3%E8%AF%B4%E8%B0%83%E4%BE%83AG%E8%BD%AE%E6%8D%A2%E5%A1%AB%E9%94%99&t=31&band_rank=42&Refer=top)
1. [郑钦文喜欢的中网歌单张韶涵含量拉满](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%96%9C%E6%AC%A2%E7%9A%84%E4%B8%AD%E7%BD%91%E6%AD%8C%E5%8D%95%E5%BC%A0%E9%9F%B6%E6%B6%B5%E5%90%AB%E9%87%8F%E6%8B%89%E6%BB%A1%23&t=31&band_rank=43&Refer=top)
1. [一定要频繁的记录和表达自己](https://s.weibo.com//weibo?q=%E4%B8%80%E5%AE%9A%E8%A6%81%E9%A2%91%E7%B9%81%E7%9A%84%E8%AE%B0%E5%BD%95%E5%92%8C%E8%A1%A8%E8%BE%BE%E8%87%AA%E5%B7%B1&t=31&band_rank=44&Refer=top)
1. [林娜琏断眉合唱](https://s.weibo.com//weibo?q=%E6%9E%97%E5%A8%9C%E7%90%8F%E6%96%AD%E7%9C%89%E5%90%88%E5%94%B1&t=31&band_rank=45&Refer=top)
1. [一诺守约好准](https://s.weibo.com//weibo?q=%23%E4%B8%80%E8%AF%BA%E5%AE%88%E7%BA%A6%E5%A5%BD%E5%87%86%23&t=31&band_rank=46&Refer=top)
1. [梦的光点](https://s.weibo.com//weibo?q=%E6%A2%A6%E7%9A%84%E5%85%89%E7%82%B9&t=31&band_rank=47&Refer=top)
1. [刘学义林锦岐告别兰香](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%9E%97%E9%94%A6%E5%B2%90%E5%91%8A%E5%88%AB%E5%85%B0%E9%A6%99%23&t=31&band_rank=48&Refer=top)
1. [杭州限狗令白天遛狗罚款](https://s.weibo.com//weibo?q=%E6%9D%AD%E5%B7%9E%E9%99%90%E7%8B%97%E4%BB%A4%E7%99%BD%E5%A4%A9%E9%81%9B%E7%8B%97%E7%BD%9A%E6%AC%BE&t=31&band_rank=49&Refer=top)
1. [2026中网](https://s.weibo.com//weibo?q=2026%E4%B8%AD%E7%BD%91&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
