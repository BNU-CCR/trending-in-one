# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-04 09:23:59

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
<!-- 最后更新时间 Wed Nov 04 2026 11:13:44 GMT+0800 (China Standard Time) -->

1. [失联清华毕业留学生已安全回家](https://so.toutiao.com/search?keyword=失联清华毕业留学生已安全回家)
1. [越南高铁还未开建就提出供应商本土化](https://so.toutiao.com/search?keyword=越南高铁还未开建就提出供应商本土化)
1. [全球伙伴期待同中国携手开拓新机遇](https://so.toutiao.com/search?keyword=全球伙伴期待同中国携手开拓新机遇)
1. [美媒预测民主党将重掌众议院](https://so.toutiao.com/search?keyword=美媒预测民主党将重掌众议院)
1. [“还是沈阳”5天秋假迎客6.8万人次](https://so.toutiao.com/search?keyword=“还是沈阳”5天秋假迎客6.8万人次)
1. [苹果天气bug：多地零下32℃](https://so.toutiao.com/search?keyword=苹果天气bug：多地零下32℃)
1. [默茨：德国将继续全力支持乌克兰](https://so.toutiao.com/search?keyword=默茨：德国将继续全力支持乌克兰)
1. [上汽奥迪买一赠一营销被立案调查](https://so.toutiao.com/search?keyword=上汽奥迪买一赠一营销被立案调查)
1. [《小白杨》词作者梁上泉去世](https://so.toutiao.com/search?keyword=《小白杨》词作者梁上泉去世)
1. [IG击败TES 时隔7年再进S赛四强](https://so.toutiao.com/search?keyword=IG击败TES%20时隔7年再进S赛四强)
1. [这5个辐射谣言千万别信](https://so.toutiao.com/search?keyword=这5个辐射谣言千万别信)
1. [萧敬腾开箱张雪机车直夸是艺术品](https://so.toutiao.com/search?keyword=萧敬腾开箱张雪机车直夸是艺术品)
1. [热播剧《小城良方》带火加格达奇](https://so.toutiao.com/search?keyword=热播剧《小城良方》带火加格达奇)
1. [媒体：沈伯洋的草包本质原形毕露](https://so.toutiao.com/search?keyword=媒体：沈伯洋的草包本质原形毕露)
1. [46岁高圆圆红毛衣生图](https://so.toutiao.com/search?keyword=46岁高圆圆红毛衣生图)
1. [老中医去世后把100个药方刻在墓碑](https://so.toutiao.com/search?keyword=老中医去世后把100个药方刻在墓碑)
1. [九千岁的稻和一千岁的麦“同框”](https://so.toutiao.com/search?keyword=九千岁的稻和一千岁的麦“同框”)
1. [高颜值保洁大叔：年轻时相亲被嫌丑](https://so.toutiao.com/search?keyword=高颜值保洁大叔：年轻时相亲被嫌丑)
1. [LOL官方回应S16长暂停](https://so.toutiao.com/search?keyword=LOL官方回应S16长暂停)
1. [多地小学老师转岗教中学](https://so.toutiao.com/search?keyword=多地小学老师转岗教中学)
1. [美国中期选举](https://so.toutiao.com/search?keyword=美国中期选举)
1. [李钟硕新剧颜值回春](https://so.toutiao.com/search?keyword=李钟硕新剧颜值回春)
1. [俄女高官访华就日本军事化加速发声](https://so.toutiao.com/search?keyword=俄女高官访华就日本军事化加速发声)
1. [婚礼当天离世新郎父母筹钱办丧事](https://so.toutiao.com/search?keyword=婚礼当天离世新郎父母筹钱办丧事)
1. [博主：家庭真正的底牌是现金流](https://so.toutiao.com/search?keyword=博主：家庭真正的底牌是现金流)
1. [a16z谈机器人：先去工厂干活](https://so.toutiao.com/search?keyword=a16z谈机器人：先去工厂干活)
1. [徐艺洋婚礼只收罗正200元份子钱](https://so.toutiao.com/search?keyword=徐艺洋婚礼只收罗正200元份子钱)
1. [沈阳保洁大叔称每天上百号人来合影](https://so.toutiao.com/search?keyword=沈阳保洁大叔称每天上百号人来合影)
1. [具身智能大脑混战](https://so.toutiao.com/search?keyword=具身智能大脑混战)
1. [老人花5万换4家医院没查出病因](https://so.toutiao.com/search?keyword=老人花5万换4家医院没查出病因)
1. [2027年军队文职招考明起报名](https://so.toutiao.com/search?keyword=2027年军队文职招考明起报名)
1. [11月将有4次冷空气先后到访](https://so.toutiao.com/search?keyword=11月将有4次冷空气先后到访)
1. [美坠机事故9名遇难者身份曝光](https://so.toutiao.com/search?keyword=美坠机事故9名遇难者身份曝光)
1. [他们的道歉为啥球迷不买账](https://so.toutiao.com/search?keyword=他们的道歉为啥球迷不买账)
1. [媒体人：上海将不会与麦基继续合作](https://so.toutiao.com/search?keyword=媒体人：上海将不会与麦基继续合作)
1. [丁俊晖决胜局逆转晋级国锦赛八强](https://so.toutiao.com/search?keyword=丁俊晖决胜局逆转晋级国锦赛八强)
1. [日本对华为什么总是两头摇摆](https://so.toutiao.com/search?keyword=日本对华为什么总是两头摇摆)
1. [马斯克的太空算力散热方案可行吗](https://so.toutiao.com/search?keyword=马斯克的太空算力散热方案可行吗)
1. [菲律宾经济还能自救吗](https://so.toutiao.com/search?keyword=菲律宾经济还能自救吗)
1. [蔚来换电官宣突破1.3亿次](https://so.toutiao.com/search?keyword=蔚来换电官宣突破1.3亿次)
1. [张朝阳：互联网被算法介入太厉害](https://so.toutiao.com/search?keyword=张朝阳：互联网被算法介入太厉害)
1. [银行股为何开始回调](https://so.toutiao.com/search?keyword=银行股为何开始回调)
1. [专家：美中期选举难撼中美大局](https://so.toutiao.com/search?keyword=专家：美中期选举难撼中美大局)
1. [小米注资欣旺达背后有哪些看点](https://so.toutiao.com/search?keyword=小米注资欣旺达背后有哪些看点)
1. [专家：谨防银行股成股市堰塞湖](https://so.toutiao.com/search?keyword=专家：谨防银行股成股市堰塞湖)
1. [王楚钦之外国乒男队还能靠谁](https://so.toutiao.com/search?keyword=王楚钦之外国乒男队还能靠谁)
1. [大范围雨雪将袭南方](https://so.toutiao.com/search?keyword=大范围雨雪将袭南方)
1. [博主：真正拖垮德国工业的不是高气价](https://so.toutiao.com/search?keyword=博主：真正拖垮德国工业的不是高气价)
1. [许飞曾端盘子还债](https://so.toutiao.com/search?keyword=许飞曾端盘子还债)
1. [媒体：美国中期选举进入终局时刻](https://so.toutiao.com/search?keyword=媒体：美国中期选举进入终局时刻)
1. [千年乌镇遇新变](https://so.toutiao.com/search?keyword=千年乌镇遇新变)
1. [上班族每月花3600元住酒店代租房](https://so.toutiao.com/search?keyword=上班族每月花3600元住酒店代租房)
1. [特朗普称年底结束对以色列援助](https://so.toutiao.com/search?keyword=特朗普称年底结束对以色列援助)
1. [牛肉被猕猴桃腌制下锅碎成肉渣](https://so.toutiao.com/search?keyword=牛肉被猕猴桃腌制下锅碎成肉渣)
1. [黄金从暴涨到暴跌有哪些启示](https://so.toutiao.com/search?keyword=黄金从暴涨到暴跌有哪些启示)
1. [国行Apple智能上线首批核心功能](https://so.toutiao.com/search?keyword=国行Apple智能上线首批核心功能)
1. [治网这件事需要你我共“举”](https://so.toutiao.com/search?keyword=治网这件事需要你我共“举”)
1. [高圆圆在上班和上进间选择上山](https://so.toutiao.com/search?keyword=高圆圆在上班和上进间选择上山)
1. [儿子总发烧 拆卧室墙现大面积霉斑](https://so.toutiao.com/search?keyword=儿子总发烧%20拆卧室墙现大面积霉斑)
1. [让二追三 曼联3-2罗马终结9场不胜](https://so.toutiao.com/search?keyword=让二追三%20曼联3-2罗马终结9场不胜)
1. [南京多所高中推迟上学时间](https://so.toutiao.com/search?keyword=南京多所高中推迟上学时间)
1. [陈幸同横扫金娜英晋级](https://so.toutiao.com/search?keyword=陈幸同横扫金娜英晋级)
1. [村民打百米深井连抽5天致3户房屋开裂](https://so.toutiao.com/search?keyword=村民打百米深井连抽5天致3户房屋开裂)
1. [38岁男子拒绝住院24小时后心脏骤停](https://so.toutiao.com/search?keyword=38岁男子拒绝住院24小时后心脏骤停)
1. [博主：076解决无人机着舰世界难题](https://so.toutiao.com/search?keyword=博主：076解决无人机着舰世界难题)
1. [全球首款全尺寸超仿真机器人亮相](https://so.toutiao.com/search?keyword=全球首款全尺寸超仿真机器人亮相)
1. [学者：AI会导致出现越来越多“弃民”](https://so.toutiao.com/search?keyword=学者：AI会导致出现越来越多“弃民”)
1. [教育厅长回应高中生每天在校15小时](https://so.toutiao.com/search?keyword=教育厅长回应高中生每天在校15小时)
1. [绝味鸭脖真的拿到了“大芒果”](https://so.toutiao.com/search?keyword=绝味鸭脖真的拿到了“大芒果”)
1. [美媒体人称特朗普或用核武](https://so.toutiao.com/search?keyword=美媒体人称特朗普或用核武)
1. [樊振东2年没打WTT仍居第二](https://so.toutiao.com/search?keyword=樊振东2年没打WTT仍居第二)
1. [数字人民币发工资有何意义](https://so.toutiao.com/search?keyword=数字人民币发工资有何意义)
1. [丈夫出轨生子 妻子起诉返还5483元](https://so.toutiao.com/search?keyword=丈夫出轨生子%20妻子起诉返还5483元)
1. [记者暗访调查“蛇类地下交易链”](https://so.toutiao.com/search?keyword=记者暗访调查“蛇类地下交易链”)
1. [肖战说如果没有生活我演不了刘铮亮](https://so.toutiao.com/search?keyword=肖战说如果没有生活我演不了刘铮亮)
1. [美坠机遇难女副驾最后发送短信曝光](https://so.toutiao.com/search?keyword=美坠机遇难女副驾最后发送短信曝光)
1. [陈奕迅一家取关黄泽林](https://so.toutiao.com/search?keyword=陈奕迅一家取关黄泽林)
1. [人民币升值 央行“点刹车”调节](https://so.toutiao.com/search?keyword=人民币升值%20央行“点刹车”调节)
1. [国内三艘现役航母全部出海有何意味](https://so.toutiao.com/search?keyword=国内三艘现役航母全部出海有何意味)
1. [于强：台当局应摒弃半导体业优越心态](https://so.toutiao.com/search?keyword=于强：台当局应摒弃半导体业优越心态)
1. [王毅同菲律宾外长通电话](https://so.toutiao.com/search?keyword=王毅同菲律宾外长通电话)
1. [比亚迪的野心：2030年登顶巴西](https://so.toutiao.com/search?keyword=比亚迪的野心：2030年登顶巴西)
1. [唐驳虎：中国抢先美国登月绝非妄想](https://so.toutiao.com/search?keyword=唐驳虎：中国抢先美国登月绝非妄想)
1. [国际油价涨跌对“两桶油”有何影响](https://so.toutiao.com/search?keyword=国际油价涨跌对“两桶油”有何影响)
1. [日方为何对驻日美军违法犯罪一再忍让](https://so.toutiao.com/search?keyword=日方为何对驻日美军违法犯罪一再忍让)
1. [胖东来回应茶叶里有头发赔偿10倍](https://so.toutiao.com/search?keyword=胖东来回应茶叶里有头发赔偿10倍)
1. [外交部回应英伟达相关报道](https://so.toutiao.com/search?keyword=外交部回应英伟达相关报道)
1. [欣旺达的价值重构](https://so.toutiao.com/search?keyword=欣旺达的价值重构)
1. [比亚迪纯电月销量顶美国一个季度](https://so.toutiao.com/search?keyword=比亚迪纯电月销量顶美国一个季度)
1. [出口企业为何抢着把美元换成人民币](https://so.toutiao.com/search?keyword=出口企业为何抢着把美元换成人民币)
1. [刘延东同志遗体在京火化](https://so.toutiao.com/search?keyword=刘延东同志遗体在京火化)
1. [刘延东同志生平](https://so.toutiao.com/search?keyword=刘延东同志生平)
1. [大V：菲律宾在东盟防长扩大会出洋相](https://so.toutiao.com/search?keyword=大V：菲律宾在东盟防长扩大会出洋相)
1. [十人国安4-7泰港亚冠首败](https://so.toutiao.com/search?keyword=十人国安4-7泰港亚冠首败)
1. [牛肉被猕猴桃腌制下锅碎成“肉渣”](https://so.toutiao.com/search?keyword=牛肉被猕猴桃腌制下锅碎成“肉渣”)
1. [菲发言人到中国使馆留言区撒泼](https://so.toutiao.com/search?keyword=菲发言人到中国使馆留言区撒泼)
1. [拦截高超音速导弹有多难](https://so.toutiao.com/search?keyword=拦截高超音速导弹有多难)
1. [美保守派各州选民抛弃特朗普](https://so.toutiao.com/search?keyword=美保守派各州选民抛弃特朗普)
1. [邵永灵：福建舰与罗斯福号同处南海](https://so.toutiao.com/search?keyword=邵永灵：福建舰与罗斯福号同处南海)
1. [中外斯诺克球员盛赞南京](https://so.toutiao.com/search?keyword=中外斯诺克球员盛赞南京)
1. [马斯克在美国推进7个大型设施建设](https://so.toutiao.com/search?keyword=马斯克在美国推进7个大型设施建设)
1. [中俄遏制日本右翼势力进行了哪些合作](https://so.toutiao.com/search?keyword=中俄遏制日本右翼势力进行了哪些合作)
1. [专家：奥沃诺事件不应定性为过失杀人](https://so.toutiao.com/search?keyword=专家：奥沃诺事件不应定性为过失杀人)
1. [张雪公布明年MXGP战车](https://so.toutiao.com/search?keyword=张雪公布明年MXGP战车)
1. [中期选举民主党关键战区为何爆发内讧](https://so.toutiao.com/search?keyword=中期选举民主党关键战区为何爆发内讧)
1. [俄方：欧洲不能参加乌克兰问题谈判](https://so.toutiao.com/search?keyword=俄方：欧洲不能参加乌克兰问题谈判)
1. [王楚钦复出首战告捷](https://so.toutiao.com/search?keyword=王楚钦复出首战告捷)
1. [美媒紧盯中国造舰反映哪些问题](https://so.toutiao.com/search?keyword=美媒紧盯中国造舰反映哪些问题)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Nov 04 2026 09:19:05 GMT+0800 (China Standard Time) -->

1. [新华社追问国乒男队怎么了](https://www.zhihu.com/search?q=%E6%96%B0%E5%8D%8E%E7%A4%BE%E8%BF%BD%E9%97%AE%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E6%80%8E%E4%B9%88%E4%BA%86)
1. [副教授白保国投湖去世留下绝笔信](https://www.zhihu.com/search?q=%E5%89%AF%E6%95%99%E6%8E%88%E7%99%BD%E4%BF%9D%E5%9B%BD%E6%8A%95%E6%B9%96%E5%8E%BB%E4%B8%96%E7%95%99%E4%B8%8B%E7%BB%9D%E7%AC%94%E4%BF%A1)
1. [10元快剪正席卷理发行业](https://www.zhihu.com/search?q=10%E5%85%83%E5%BF%AB%E5%89%AA%E6%AD%A3%E5%B8%AD%E5%8D%B7%E7%90%86%E5%8F%91%E8%A1%8C%E4%B8%9A)
1. [警方通报网约车被狂欢人群围困4小时](https://www.zhihu.com/search?q=%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%BD%91%E7%BA%A6%E8%BD%A6%E8%A2%AB%E7%8B%82%E6%AC%A2%E4%BA%BA%E7%BE%A4%E5%9B%B4%E5%9B%B04%E5%B0%8F%E6%97%B6)
1. [九寨沟景区内打人事件](https://www.zhihu.com/search?q=%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%99%AF%E5%8C%BA%E5%86%85%E6%89%93%E4%BA%BA%E4%BA%8B%E4%BB%B6)
1. [TES vs iG](https://www.zhihu.com/search?q=TES%20vs%20iG)
1. [曝陈奕迅因女儿被绿与黄泽林绝交](https://www.zhihu.com/search?q=%E6%9B%9D%E9%99%88%E5%A5%95%E8%BF%85%E5%9B%A0%E5%A5%B3%E5%84%BF%E8%A2%AB%E7%BB%BF%E4%B8%8E%E9%BB%84%E6%B3%BD%E6%9E%97%E7%BB%9D%E4%BA%A4)
1. [8岁女孩课间被同学撞致脑死亡](https://www.zhihu.com/search?q=8%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%AF%BE%E9%97%B4%E8%A2%AB%E5%90%8C%E5%AD%A6%E6%92%9E%E8%87%B4%E8%84%91%E6%AD%BB%E4%BA%A1)
1. [疑似京城乔姐发声要求易建联道歉](https://www.zhihu.com/search?q=%E7%96%91%E4%BC%BC%E4%BA%AC%E5%9F%8E%E4%B9%94%E5%A7%90%E5%8F%91%E5%A3%B0%E8%A6%81%E6%B1%82%E6%98%93%E5%BB%BA%E8%81%94%E9%81%93%E6%AD%89)
1. [美国一公务机坠毁致9死](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E4%B8%80%E5%85%AC%E5%8A%A1%E6%9C%BA%E5%9D%A0%E6%AF%81%E8%87%B49%E6%AD%BB)
1. [网传offer8垫钱姐论文造假面临延毕](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0offer8%E5%9E%AB%E9%92%B1%E5%A7%90%E8%AE%BA%E6%96%87%E9%80%A0%E5%81%87%E9%9D%A2%E4%B8%B4%E5%BB%B6%E6%AF%95)
1. [iphone显示多地降至零下30度](https://www.zhihu.com/search?q=iphone%E6%98%BE%E7%A4%BA%E5%A4%9A%E5%9C%B0%E9%99%8D%E8%87%B3%E9%9B%B6%E4%B8%8B30%E5%BA%A6)
1. [开造啦！好奇岛](https://www.zhihu.com/search?q=%E5%BC%80%E9%80%A0%E5%95%A6%EF%BC%81%E5%A5%BD%E5%A5%87%E5%B2%9B)
1. [网传九寨沟老人插队被劝阻后打人](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E4%B9%9D%E5%AF%A8%E6%B2%9F%E8%80%81%E4%BA%BA%E6%8F%92%E9%98%9F%E8%A2%AB%E5%8A%9D%E9%98%BB%E5%90%8E%E6%89%93%E4%BA%BA)
1. [好奇岛装扮游戏](https://www.zhihu.com/search?q=%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [知乎好奇岛装扮游戏](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Nov 04 2026 09:23:59 GMT+0800 (China Standard Time) -->

1. [中国公务团组人员被瑞典警方拘押，中使馆再发提醒，具体情况如何？海外游玩需注意哪些标识？](https://www.zhihu.com/question/2100906229702681900)
1. [清华毕业生UCL留学疑遭电诈，账户陆续转出数十万元，邮箱最新留言「我人平安，被诈骗了」，如何看待此事？](https://www.zhihu.com/question/2100715122348004000)
1. [S16淘汰赛TES VS iG，如何评价这场比赛？](https://www.zhihu.com/question/2101181692593584000)
1. [武汉一小区爆燃致 2 死 1 伤，调查、处置工作正在进行中，目前情况如何？](https://www.zhihu.com/question/2100890499762446600)
1. [两人分1亿元，对方给自己9999万9999，只给你1元，若你拒绝双方都会失去全部收益，你会接受吗？](https://www.zhihu.com/question/2056394072684770300)
1. [英国男子卡尔布什比徒步 28 年环游地球一圈回家，一路经历了哪些难以想象的挑战？这样的坚持意味着什么？](https://www.zhihu.com/question/2099928060027990500)
1. [胡歌自曝过了40岁身体开始走下坡路，已戒烟很久，出差会背AED，年龄真是分水岭吗？这些措施用处有多大？](https://www.zhihu.com/question/2100539537923338800)
1. [如何看待宇树机器人因过热退出登泰山大赛，被担架抬下山？人形机器人的发展目前还存在哪些技术瓶颈？](https://www.zhihu.com/question/2100633417675293400)
1. [为什么垂直鼠标没有流行起来？](https://www.zhihu.com/question/2085093726301448200)
1. [如何看待2027年国考中多省七八成名额来自税务局？](https://www.zhihu.com/question/2094420726933623600)
1. [为何智谱有底气让套餐GLM-5.3 flash价格比肩GPT-6.1 Sol？](https://www.zhihu.com/question/2100276309146575400)
1. [人民币升破 6.65 后，央行出手上调外汇存准率，如何看待人民币汇率未来的走势以及政策预期？](https://www.zhihu.com/question/2100893726981579300)
1. [延安大学副教授白保国去世，疑因未完成考核指标，如何理解他绝笔信中所述的问题？](https://www.zhihu.com/question/2100913497722680600)
1. [武汉一高校通报一名在校女生将其初中男同学以男扮女装的方式带入宿舍，学校已作出处理，具体情况如何？](https://www.zhihu.com/question/2100883350558701300)
1. [如何看待江苏家长反映孩子每天在校时间15小时，晚自习超22点，江苏省教育厅厅长回应「深感内疚」？](https://www.zhihu.com/question/2100708479040231400)
1. [特朗普民调支持率曾一度跌至 31%，创下历史最低纪录，问题出在哪里？该如何「翻盘」？](https://www.zhihu.com/question/2099492639410058200)
1. [男子被拐30余年后认亲，拉黑养家并断联，称一辈子不原谅，如何看待其决绝态度？这算忘恩负义吗？](https://www.zhihu.com/question/2100703359200138000)
1. [抖音副总裁李亮多次反驳秦朔「字节时间」相关文章，秦朔称已就相关言论提起名誉权诉讼，他能胜诉吗？](https://www.zhihu.com/question/2100639463642593300)
1. [日子过久了，你发现哪些东西压根不用买？](https://www.zhihu.com/question/2011862336206566000)
1. [月薪2万但毫无意义的工作值得坚持吗？](https://www.zhihu.com/question/2046955271797454000)
1. [为什么理工科行业没有类似《令人心动的offer》、《闪闪发光的你》这种职场综艺?](https://www.zhihu.com/question/456693791)
1. [为什么奇瑞汽车在海外市场表现强劲，在国内却显得「叫好不叫座」？](https://www.zhihu.com/question/1992192098187879700)
1. [西乙前锋德米格尔与对方门将相撞后心脏骤停，年仅30岁离世，如何看待这一悲剧？门将需要承担法律责任吗？](https://www.zhihu.com/question/2100992814611785500)
1. [洛阳一卤蛋店爆火，每天能卖 3000 多个，老板称太累跪求顾客少来，为啥能这么火爆？](https://www.zhihu.com/question/2099216071949382700)
1. [为什么《影之刃零》本体只有145G，预载时却需要预留接近两倍的容量？](https://www.zhihu.com/question/2098527207794779400)
1. [为什么感觉现在喝红酒的人少了呢？](https://www.zhihu.com/question/1909986563070358300)
1. [17 岁男生被人冒充警察骗出家殴打，被告三人均当庭认罪认罚，将择期宣判，三人可能承担哪些法律责任？](https://www.zhihu.com/question/2099157287952724500)
1. [媒体称 U17 国足想要在 U17 世界杯出线难度不小，你认同吗？这支队伍大概能走到什么程度？](https://www.zhihu.com/question/2100496010677936600)
1. [在家怎么才能赚到钱？](https://www.zhihu.com/question/439234931)
1. [作为一名律师，你有案源焦虑吗？](https://www.zhihu.com/question/648883458)
1. [基于DeepSeek Harness的手机插件 DSH Go上线后 Star 破4千，实际体验如何？](https://www.zhihu.com/question/2099981630773400800)
1. [AI 零代码手写算子速度比 DeepSeek 人类手写巅峰还快 9.8%，这意味着什么？](https://www.zhihu.com/question/2099804620293927400)
1. [古代的苦水水质口感相当于现在的自来水吗？](https://www.zhihu.com/question/2098924793349289000)
1. [网友爆料 Zuian 签证疑似过关正在美服训练，如情况属实 TES 会把 369 轮换下场吗？](https://www.zhihu.com/question/2100910652667556400)
1. [大模型的理论基础中，有哪些令人惊叹的数学工具或关键研究？](https://www.zhihu.com/question/2015477375933097000)
1. [保时捷女销冠再夺第一，所属公司却半年亏 2.7 亿，个人业绩拉满、公司疯狂失血，传统豪华车市场怎么了？](https://www.zhihu.com/question/2100560990764889600)
1. [红果短剧登顶台湾 App 下载榜首，有人退订 Netflix，背后的原因是什么？](https://www.zhihu.com/question/2100527984583222300)
1. [2026 年美国中期选举，共和党与民主党谁能最终获胜？](https://www.zhihu.com/question/2100152878602131200)
1. [男子32元买彩票中1113万，过期两天兑奖被拒，起诉索赔被驳回承担8.8万诉讼费，怎样从法律角度解读？](https://www.zhihu.com/question/2100595209889497300)
1. [如何看待张雪机车在重庆大学宣讲开的薪资，92毕业研发人员年薪12-15万元？在当地和业内算什么水平？](https://www.zhihu.com/question/2098392850639730400)
1. [如何解读2026年10月汽车销量榜：比亚迪近49万稳居第一，小米、小鹏齐破5万，鸿蒙智行同比却腰斩？](https://www.zhihu.com/question/2100349565874476300)
1. [WTT 法兰克福冠军赛男单，王楚钦 3-0 林德，晋级 16 强，如何评价本场比赛？](https://www.zhihu.com/question/2101014455257489400)
1. [申根区会对中国大陆普通护照持有者免签吗？](https://www.zhihu.com/question/594207449)
1. [​《影之刃零》武林都乱成这样了，为何朝廷还不来管？](https://www.zhihu.com/question/2100704746302595300)
1. [李佳琦直播间半小时售出 2 万亿 Token，AI Token 会成为未来直播带货的热销品吗？](https://www.zhihu.com/question/2100704253669069600)
1. [全国将有 260 万辆新能源车面临电池脱保，换电池比车贵难题该如何破解？](https://www.zhihu.com/question/2099823962918331100)
1. [影之刃零卖268，但游戏中一章“庞镇”的体量就已远超很多大型游戏的全部体量，这会卷死同行或后来者吗？](https://www.zhihu.com/question/2100647252532507600)
1. [《战锤40k》中人类的苦难是不是帝皇导致的？](https://www.zhihu.com/question/14962719595)
1. [你为什么不化妆？](https://www.zhihu.com/question/403494008)
1. [番茄炒鸡蛋你们加糖吗？](https://www.zhihu.com/question/4597948099)

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
<!-- 最后更新时间 Wed Nov 04 2026 09:29:06 GMT+0800 (China Standard Time) -->

1. [习近平总书记的黄河牵挂](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%80%BB%E4%B9%A6%E8%AE%B0%E7%9A%84%E9%BB%84%E6%B2%B3%E7%89%B5%E6%8C%82%23&Refer=new_time)
1. [苹果客服回应天气离谱](https://s.weibo.com//weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E5%A4%A9%E6%B0%94%E7%A6%BB%E8%B0%B1%23&t=31&band_rank=1&Refer=top)
1. [女生刷到另一个自己竟是双胞胎](https://s.weibo.com//weibo?q=%E5%A5%B3%E7%94%9F%E5%88%B7%E5%88%B0%E5%8F%A6%E4%B8%80%E4%B8%AA%E8%87%AA%E5%B7%B1%E7%AB%9F%E6%98%AF%E5%8F%8C%E8%83%9E%E8%83%8E&t=31&band_rank=2&Refer=top)
1. [2026世界市长对话宁波](https://s.weibo.com//weibo?q=%232026%E4%B8%96%E7%95%8C%E5%B8%82%E9%95%BF%E5%AF%B9%E8%AF%9D%E5%AE%81%E6%B3%A2%23&t=31&band_rank=3&Refer=top)
1. [网友自称是厉娜接私活告密当事人](https://s.weibo.com//weibo?q=%23%E7%BD%91%E5%8F%8B%E8%87%AA%E7%A7%B0%E6%98%AF%E5%8E%89%E5%A8%9C%E6%8E%A5%E7%A7%81%E6%B4%BB%E5%91%8A%E5%AF%86%E5%BD%93%E4%BA%8B%E4%BA%BA%23&t=31&band_rank=4&Refer=top)
1. [红果历史短剧有点出乎意料](https://s.weibo.com//weibo?q=%E7%BA%A2%E6%9E%9C%E5%8E%86%E5%8F%B2%E7%9F%AD%E5%89%A7%E6%9C%89%E7%82%B9%E5%87%BA%E4%B9%8E%E6%84%8F%E6%96%99&t=31&band_rank=5&Refer=top)
1. [TES极限翻盘iG](https://s.weibo.com//weibo?q=%23TES%E6%9E%81%E9%99%90%E7%BF%BB%E7%9B%98iG%23&t=31&band_rank=6&Refer=top)
1. [女子凌晨被陌生人钻被窝贴脸窥探](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E9%92%BB%E8%A2%AB%E7%AA%9D%E8%B4%B4%E8%84%B8%E7%AA%A5%E6%8E%A2%23&t=31&band_rank=7&Refer=top)
1. [何炅 我画地为牢啊撒贝宁](https://s.weibo.com//weibo?q=%E4%BD%95%E7%82%85%20%E6%88%91%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E5%95%8A%E6%92%92%E8%B4%9D%E5%AE%81&t=31&band_rank=8&Refer=top)
1. [红果短剧到底有多离谱](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E7%A6%BB%E8%B0%B1%23&t=31&band_rank=9&Refer=top)
1. [Wei杰斯好强](https://s.weibo.com//weibo?q=%23Wei%E6%9D%B0%E6%96%AF%E5%A5%BD%E5%BC%BA%23&t=31&band_rank=10&Refer=top)
1. [TES对战IG](https://s.weibo.com//weibo?q=TES%E5%AF%B9%E6%88%98IG&t=31&band_rank=11&Refer=top)
1. [iPhone天气下周五温差](https://s.weibo.com//weibo?q=iPhone%E5%A4%A9%E6%B0%94%E4%B8%8B%E5%91%A8%E4%BA%94%E6%B8%A9%E5%B7%AE&t=31&band_rank=12&Refer=top)
1. [杂交水稻专家邓国富被开除党籍](https://s.weibo.com//weibo?q=%23%E6%9D%82%E4%BA%A4%E6%B0%B4%E7%A8%BB%E4%B8%93%E5%AE%B6%E9%82%93%E5%9B%BD%E5%AF%8C%E8%A2%AB%E5%BC%80%E9%99%A4%E5%85%9A%E7%B1%8D%23&t=31&band_rank=13&Refer=top)
1. [许飞经纪人 去找厉娜](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E7%BB%8F%E7%BA%AA%E4%BA%BA%20%E5%8E%BB%E6%89%BE%E5%8E%89%E5%A8%9C&t=31&band_rank=14&Refer=top)
1. [易烊千玺和于适粉丝都发了澄清](https://s.weibo.com//weibo?q=%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%92%8C%E4%BA%8E%E9%80%82%E7%B2%89%E4%B8%9D%E9%83%BD%E5%8F%91%E4%BA%86%E6%BE%84%E6%B8%85&t=31&band_rank=15&Refer=top)
1. [抖音副总裁恶语回应专家批评](https://s.weibo.com//weibo?q=%E6%8A%96%E9%9F%B3%E5%89%AF%E6%80%BB%E8%A3%81%E6%81%B6%E8%AF%AD%E5%9B%9E%E5%BA%94%E4%B8%93%E5%AE%B6%E6%89%B9%E8%AF%84&t=31&band_rank=16&Refer=top)
1. [李钟硕新剧尺度](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E6%96%B0%E5%89%A7%E5%B0%BA%E5%BA%A6%23&t=31&band_rank=17&Refer=top)
1. [杨幂曾偷偷观察唐嫣](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9B%BE%E5%81%B7%E5%81%B7%E8%A7%82%E5%AF%9F%E5%94%90%E5%AB%A3%23&t=31&band_rank=18&Refer=top)
1. [亚洲首富又换人](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E6%B4%B2%E9%A6%96%E5%AF%8C%E5%8F%88%E6%8D%A2%E4%BA%BA%23&t=31&band_rank=19&Refer=top)
1. [欧冠](https://s.weibo.com//weibo?q=%E6%AC%A7%E5%86%A0&t=31&band_rank=20&Refer=top)
1. [清华父亲211妻子孩子没考上高中](https://s.weibo.com//weibo?q=%E6%B8%85%E5%8D%8E%E7%88%B6%E4%BA%B2211%E5%A6%BB%E5%AD%90%E5%AD%A9%E5%AD%90%E6%B2%A1%E8%80%83%E4%B8%8A%E9%AB%98%E4%B8%AD&t=31&band_rank=21&Refer=top)
1. [尚公主被偷数据](https://s.weibo.com//weibo?q=%E5%B0%9A%E5%85%AC%E4%B8%BB%E8%A2%AB%E5%81%B7%E6%95%B0%E6%8D%AE&t=31&band_rank=22&Refer=top)
1. [终于知道大家搬离高层的原因](https://s.weibo.com//weibo?q=%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%A4%A7%E5%AE%B6%E6%90%AC%E7%A6%BB%E9%AB%98%E5%B1%82%E7%9A%84%E5%8E%9F%E5%9B%A0&t=31&band_rank=23&Refer=top)
1. [iG打TES拿到赛点](https://s.weibo.com//weibo?q=%23iG%E6%89%93TES%E6%8B%BF%E5%88%B0%E8%B5%9B%E7%82%B9%23&t=31&band_rank=24&Refer=top)
1. [李钟硕新剧回春了](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E6%96%B0%E5%89%A7%E5%9B%9E%E6%98%A5%E4%BA%86%23&t=31&band_rank=25&Refer=top)
1. [红果短剧虚拟正义](https://s.weibo.com//weibo?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E8%99%9A%E6%8B%9F%E6%AD%A3%E4%B9%89&t=31&band_rank=26&Refer=top)
1. [iG VN](https://s.weibo.com//weibo?q=iG%20VN&t=31&band_rank=27&Refer=top)
1. [认知高的人一个明显信号](https://s.weibo.com//weibo?q=%E8%AE%A4%E7%9F%A5%E9%AB%98%E7%9A%84%E4%BA%BA%E4%B8%80%E4%B8%AA%E6%98%8E%E6%98%BE%E4%BF%A1%E5%8F%B7&t=31&band_rank=28&Refer=top)
1. [广州规定房东不得加收水电费](https://s.weibo.com//weibo?q=%23%E5%B9%BF%E5%B7%9E%E8%A7%84%E5%AE%9A%E6%88%BF%E4%B8%9C%E4%B8%8D%E5%BE%97%E5%8A%A0%E6%94%B6%E6%B0%B4%E7%94%B5%E8%B4%B9%23&t=31&band_rank=29&Refer=top)
1. [一栋居民楼打出991通诈骗电话](https://s.weibo.com//weibo?q=%23%E4%B8%80%E6%A0%8B%E5%B1%85%E6%B0%91%E6%A5%BC%E6%89%93%E5%87%BA991%E9%80%9A%E8%AF%88%E9%AA%97%E7%94%B5%E8%AF%9D%23&t=31&band_rank=30&Refer=top)
1. [苹果天气](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%E5%A4%A9%E6%B0%94&t=31&band_rank=31&Refer=top)
1. [媳妇规定的卫生间使用流程火了](https://s.weibo.com//weibo?q=%E5%AA%B3%E5%A6%87%E8%A7%84%E5%AE%9A%E7%9A%84%E5%8D%AB%E7%94%9F%E9%97%B4%E4%BD%BF%E7%94%A8%E6%B5%81%E7%A8%8B%E7%81%AB%E4%BA%86&t=31&band_rank=32&Refer=top)
1. [许飞震惊到瞳孔放大](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E9%9C%87%E6%83%8A%E5%88%B0%E7%9E%B3%E5%AD%94%E6%94%BE%E5%A4%A7&t=31&band_rank=33&Refer=top)
1. [法国已经有人三个人吃一个菜](https://s.weibo.com//weibo?q=%E6%B3%95%E5%9B%BD%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%BA%E4%B8%89%E4%B8%AA%E4%BA%BA%E5%90%83%E4%B8%80%E4%B8%AA%E8%8F%9C&t=31&band_rank=34&Refer=top)
1. [大学副教授去世疑因未完成考核指标](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E5%AD%A6%E5%89%AF%E6%95%99%E6%8E%88%E5%8E%BB%E4%B8%96%E7%96%91%E5%9B%A0%E6%9C%AA%E5%AE%8C%E6%88%90%E8%80%83%E6%A0%B8%E6%8C%87%E6%A0%87%23&t=31&band_rank=35&Refer=top)
1. [王者荣耀](https://s.weibo.com//weibo?q=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80&t=31&band_rank=36&Refer=top)
1. [肖战身高被小城良方全剧组围观](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E8%BA%AB%E9%AB%98%E8%A2%AB%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%85%A8%E5%89%A7%E7%BB%84%E5%9B%B4%E8%A7%82%23&t=31&band_rank=37&Refer=top)
1. [女子每天玩手机10小时患手机痴呆症](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AF%8F%E5%A4%A9%E7%8E%A9%E6%89%8B%E6%9C%BA10%E5%B0%8F%E6%97%B6%E6%82%A3%E6%89%8B%E6%9C%BA%E7%97%B4%E5%91%86%E7%97%87%23&t=31&band_rank=38&Refer=top)
1. [原来大家都是这样恢复心气的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E6%81%A2%E5%A4%8D%E5%BF%83%E6%B0%94%E7%9A%84&t=31&band_rank=39&Refer=top)
1. [369带队扳回一城](https://s.weibo.com//weibo?q=%23369%E5%B8%A6%E9%98%9F%E6%89%B3%E5%9B%9E%E4%B8%80%E5%9F%8E%23&t=31&band_rank=40&Refer=top)
1. [LPL](https://s.weibo.com//weibo?q=%23LPL%23&t=31&band_rank=41&Refer=top)
1. [李茂关注了肖战](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E8%8C%82%E5%85%B3%E6%B3%A8%E4%BA%86%E8%82%96%E6%88%98%23&t=31&band_rank=42&Refer=top)
1. [电诈园区搬到马达加斯加](https://s.weibo.com//weibo?q=%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%90%AC%E5%88%B0%E9%A9%AC%E8%BE%BE%E5%8A%A0%E6%96%AF%E5%8A%A0&t=31&band_rank=43&Refer=top)
1. [369世界赛第四个MVP](https://s.weibo.com//weibo?q=%23369%E4%B8%96%E7%95%8C%E8%B5%9B%E7%AC%AC%E5%9B%9B%E4%B8%AAMVP%23&t=31&band_rank=44&Refer=top)
1. [广州8岁女童课间被撞脑死亡](https://s.weibo.com//weibo?q=%E5%B9%BF%E5%B7%9E8%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%AF%BE%E9%97%B4%E8%A2%AB%E6%92%9E%E8%84%91%E6%AD%BB%E4%BA%A1&t=31&band_rank=45&Refer=top)
1. [你说这是76岁的刘晓庆](https://s.weibo.com//weibo?q=%23%E4%BD%A0%E8%AF%B4%E8%BF%99%E6%98%AF76%E5%B2%81%E7%9A%84%E5%88%98%E6%99%93%E5%BA%86%23&t=31&band_rank=46&Refer=top)
1. [张凌赫像电梯一样升起来了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%83%8F%E7%94%B5%E6%A2%AF%E4%B8%80%E6%A0%B7%E5%8D%87%E8%B5%B7%E6%9D%A5%E4%BA%86%23&t=31&band_rank=47&Refer=top)
1. [二胎一般不会抑郁因为世界有秩序](https://s.weibo.com//weibo?q=%E4%BA%8C%E8%83%8E%E4%B8%80%E8%88%AC%E4%B8%8D%E4%BC%9A%E6%8A%91%E9%83%81%E5%9B%A0%E4%B8%BA%E4%B8%96%E7%95%8C%E6%9C%89%E7%A7%A9%E5%BA%8F&t=31&band_rank=48&Refer=top)
1. [这作者是真上过班](https://s.weibo.com//weibo?q=%E8%BF%99%E4%BD%9C%E8%80%85%E6%98%AF%E7%9C%9F%E4%B8%8A%E8%BF%87%E7%8F%AD&t=31&band_rank=49&Refer=top)
1. [王玉雯工作室被气成啥样了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%A2%AB%E6%B0%94%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23&t=31&band_rank=50&Refer=top)
1. [女生刷到另一个自己竟是双胞胎](https://s.weibo.com//weibo?q=%E5%A5%B3%E7%94%9F%E5%88%B7%E5%88%B0%E5%8F%A6%E4%B8%80%E4%B8%AA%E8%87%AA%E5%B7%B1%E7%AB%9F%E6%98%AF%E5%8F%8C%E8%83%9E%E8%83%8E&t=31&band_rank=1&Refer=top)
1. [女子每天玩手机10小时患手机痴呆症](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AF%8F%E5%A4%A9%E7%8E%A9%E6%89%8B%E6%9C%BA10%E5%B0%8F%E6%97%B6%E6%82%A3%E6%89%8B%E6%9C%BA%E7%97%B4%E5%91%86%E7%97%87%23&t=31&band_rank=2&Refer=top)
1. [iPhone天气下周五温差](https://s.weibo.com//weibo?q=iPhone%E5%A4%A9%E6%B0%94%E4%B8%8B%E5%91%A8%E4%BA%94%E6%B8%A9%E5%B7%AE&t=31&band_rank=4&Refer=top)
1. [九寨沟打人事件调解收尾并非和稀泥](https://s.weibo.com//weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%89%93%E4%BA%BA%E4%BA%8B%E4%BB%B6%E8%B0%83%E8%A7%A3%E6%94%B6%E5%B0%BE%E5%B9%B6%E9%9D%9E%E5%92%8C%E7%A8%80%E6%B3%A5%23&t=31&band_rank=5&Refer=top)
1. [孙颖莎](https://s.weibo.com//weibo?q=%E5%AD%99%E9%A2%96%E8%8E%8E&t=31&band_rank=6&Refer=top)
1. [许飞经纪人 去找厉娜](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E7%BB%8F%E7%BA%AA%E4%BA%BA%20%E5%8E%BB%E6%89%BE%E5%8E%89%E5%A8%9C&t=31&band_rank=7&Refer=top)
1. [倪萍 医美](https://s.weibo.com//weibo?q=%E5%80%AA%E8%90%8D%20%E5%8C%BB%E7%BE%8E&t=31&band_rank=8&Refer=top)
1. [李钟硕新剧回春了](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E6%96%B0%E5%89%A7%E5%9B%9E%E6%98%A5%E4%BA%86%23&t=31&band_rank=9&Refer=top)
1. [红果短剧 全家都在刷](https://s.weibo.com//weibo?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%20%E5%85%A8%E5%AE%B6%E9%83%BD%E5%9C%A8%E5%88%B7&t=31&band_rank=10&Refer=top)
1. [终于知道大家搬离高层的原因](https://s.weibo.com//weibo?q=%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%A4%A7%E5%AE%B6%E6%90%AC%E7%A6%BB%E9%AB%98%E5%B1%82%E7%9A%84%E5%8E%9F%E5%9B%A0&t=31&band_rank=11&Refer=top)
1. [央视频也画地为牢了厉娜](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E9%A2%91%E4%B9%9F%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E4%BA%86%E5%8E%89%E5%A8%9C%23&t=31&band_rank=12&Refer=top)
1. [王玉雯工作室被气成啥样了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%A2%AB%E6%B0%94%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23&t=31&band_rank=13&Refer=top)
1. [印度确认申办2036年夏季奥运会](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%A1%AE%E8%AE%A4%E7%94%B3%E5%8A%9E2036%E5%B9%B4%E5%A4%8F%E5%AD%A3%E5%A5%A5%E8%BF%90%E4%BC%9A%23&t=31&band_rank=14&Refer=top)
1. [杂交水稻专家邓国富被开除党籍](https://s.weibo.com//weibo?q=%23%E6%9D%82%E4%BA%A4%E6%B0%B4%E7%A8%BB%E4%B8%93%E5%AE%B6%E9%82%93%E5%9B%BD%E5%AF%8C%E8%A2%AB%E5%BC%80%E9%99%A4%E5%85%9A%E7%B1%8D%23&t=31&band_rank=15&Refer=top)
1. [张凌赫像电梯一样升起来了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%83%8F%E7%94%B5%E6%A2%AF%E4%B8%80%E6%A0%B7%E5%8D%87%E8%B5%B7%E6%9D%A5%E4%BA%86%23&t=31&band_rank=16&Refer=top)
1. [华为新机线上线下差价一千](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E6%96%B0%E6%9C%BA%E7%BA%BF%E4%B8%8A%E7%BA%BF%E4%B8%8B%E5%B7%AE%E4%BB%B7%E4%B8%80%E5%8D%83&t=31&band_rank=17&Refer=top)
1. [WTT法兰克福冠军赛2026](https://s.weibo.com//weibo?q=WTT%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E5%86%A0%E5%86%9B%E8%B5%9B2026&t=31&band_rank=18&Refer=top)
1. [Blue否认与Lisa恋情](https://s.weibo.com//weibo?q=%23Blue%E5%90%A6%E8%AE%A4%E4%B8%8ELisa%E6%81%8B%E6%83%85%23&t=31&band_rank=19&Refer=top)
1. [霍建华说拍如懿传内心很煎熬](https://s.weibo.com//weibo?q=%23%E9%9C%8D%E5%BB%BA%E5%8D%8E%E8%AF%B4%E6%8B%8D%E5%A6%82%E6%87%BF%E4%BC%A0%E5%86%85%E5%BF%83%E5%BE%88%E7%85%8E%E7%86%AC%23&t=31&band_rank=20&Refer=top)
1. [孙铭阳祝孙颖莎大胆往前走](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%93%AD%E9%98%B3%E7%A5%9D%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%A7%E8%83%86%E5%BE%80%E5%89%8D%E8%B5%B0%23&t=31&band_rank=22&Refer=top)
1. [这作者是真上过班](https://s.weibo.com//weibo?q=%E8%BF%99%E4%BD%9C%E8%80%85%E6%98%AF%E7%9C%9F%E4%B8%8A%E8%BF%87%E7%8F%AD&t=31&band_rank=23&Refer=top)
1. [无人扶我青云志我就自己搞点事](https://s.weibo.com//weibo?q=%E6%97%A0%E4%BA%BA%E6%89%B6%E6%88%91%E9%9D%92%E4%BA%91%E5%BF%97%E6%88%91%E5%B0%B1%E8%87%AA%E5%B7%B1%E6%90%9E%E7%82%B9%E4%BA%8B&t=31&band_rank=24&Refer=top)
1. [九寨沟老人打人被指倚老卖老](https://s.weibo.com//weibo?q=%E4%B9%9D%E5%AF%A8%E6%B2%9F%E8%80%81%E4%BA%BA%E6%89%93%E4%BA%BA%E8%A2%AB%E6%8C%87%E5%80%9A%E8%80%81%E5%8D%96%E8%80%81&t=31&band_rank=25&Refer=top)
1. [嫁金钗 第二季](https://s.weibo.com//weibo?q=%E5%AB%81%E9%87%91%E9%92%97%20%E7%AC%AC%E4%BA%8C%E5%AD%A3&t=31&band_rank=26&Refer=top)
1. [白小纯疑似回应与王子璇传闻](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E4%B8%8E%E7%8E%8B%E5%AD%90%E7%92%87%E4%BC%A0%E9%97%BB%23&t=31&band_rank=27&Refer=top)
1. [嫁金钗烂尾了吗](https://s.weibo.com//weibo?q=%E5%AB%81%E9%87%91%E9%92%97%E7%83%82%E5%B0%BE%E4%BA%86%E5%90%97&t=31&band_rank=28&Refer=top)
1. [特朗普回应中期选举魔咒](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E4%B8%AD%E6%9C%9F%E9%80%89%E4%B8%BE%E9%AD%94%E5%92%92%23&t=31&band_rank=29&Refer=top)
1. [王毅同菲律宾外长通话](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%AF%85%E5%90%8C%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%A4%96%E9%95%BF%E9%80%9A%E8%AF%9D%23&t=31&band_rank=30&Refer=top)
1. [原来大家都是这样恢复心气的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E6%81%A2%E5%A4%8D%E5%BF%83%E6%B0%94%E7%9A%84&t=31&band_rank=32&Refer=top)
1. [王者荣耀](https://s.weibo.com//weibo?q=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80&t=31&band_rank=33&Refer=top)
1. [天气](https://s.weibo.com//weibo?q=%E5%A4%A9%E6%B0%94&t=31&band_rank=34&Refer=top)
1. [名字里的雪其实是血液的血](https://s.weibo.com//weibo?q=%E5%90%8D%E5%AD%97%E9%87%8C%E7%9A%84%E9%9B%AA%E5%85%B6%E5%AE%9E%E6%98%AF%E8%A1%80%E6%B6%B2%E7%9A%84%E8%A1%80&t=31&band_rank=35&Refer=top)
1. [刘丁硕谈王楚钦3比0林德](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E8%B0%88%E7%8E%8B%E6%A5%9A%E9%92%A63%E6%AF%940%E6%9E%97%E5%BE%B7%23&t=31&band_rank=36&Refer=top)
1. [猕猴桃能让牛肉变烂肉是因蛋白酶](https://s.weibo.com//weibo?q=%23%E7%8C%95%E7%8C%B4%E6%A1%83%E8%83%BD%E8%AE%A9%E7%89%9B%E8%82%89%E5%8F%98%E7%83%82%E8%82%89%E6%98%AF%E5%9B%A0%E8%9B%8B%E7%99%BD%E9%85%B6%23&t=31&band_rank=37&Refer=top)
1. [白小纯青稚赶上好时候了](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E8%B5%B6%E4%B8%8A%E5%A5%BD%E6%97%B6%E5%80%99%E4%BA%86%23&t=31&band_rank=38&Refer=top)
1. [TES对战iG首发名单](https://s.weibo.com//weibo?q=%23TES%E5%AF%B9%E6%88%98iG%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23&t=31&band_rank=39&Refer=top)
1. [天气预报](https://s.weibo.com//weibo?q=%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5&t=31&band_rank=40&Refer=top)
1. [林青霞72岁生日晒公益照](https://s.weibo.com//weibo?q=%23%E6%9E%97%E9%9D%92%E9%9C%9E72%E5%B2%81%E7%94%9F%E6%97%A5%E6%99%92%E5%85%AC%E7%9B%8A%E7%85%A7%23&t=31&band_rank=41&Refer=top)
1. [丁俊晖6比5马奎尔](https://s.weibo.com//weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%966%E6%AF%945%E9%A9%AC%E5%A5%8E%E5%B0%94%23&t=31&band_rank=42&Refer=top)
1. [玄彬说孙艺珍不让演爱情戏就不演](https://s.weibo.com//weibo?q=%23%E7%8E%84%E5%BD%AC%E8%AF%B4%E5%AD%99%E8%89%BA%E7%8F%8D%E4%B8%8D%E8%AE%A9%E6%BC%94%E7%88%B1%E6%83%85%E6%88%8F%E5%B0%B1%E4%B8%8D%E6%BC%94%23&t=31&band_rank=43&Refer=top)
1. [月嫂最后一次哄睡宝宝让宝妈泪崩](https://s.weibo.com//weibo?q=%23%E6%9C%88%E5%AB%82%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E5%93%84%E7%9D%A1%E5%AE%9D%E5%AE%9D%E8%AE%A9%E5%AE%9D%E5%A6%88%E6%B3%AA%E5%B4%A9%23&t=31&band_rank=44&Refer=top)
1. [主播长得像田曦薇开直播赚了几十万](https://s.weibo.com//weibo?q=%23%E4%B8%BB%E6%92%AD%E9%95%BF%E5%BE%97%E5%83%8F%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%80%E7%9B%B4%E6%92%AD%E8%B5%9A%E4%BA%86%E5%87%A0%E5%8D%81%E4%B8%87%23&t=31&band_rank=45&Refer=top)
1. [周杰伦和蔡依林能否去上后会友期](https://s.weibo.com//weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%92%8C%E8%94%A1%E4%BE%9D%E6%9E%97%E8%83%BD%E5%90%A6%E5%8E%BB%E4%B8%8A%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23&t=31&band_rank=46&Refer=top)
1. [S16淘汰赛](https://s.weibo.com//weibo?q=%23S16%E6%B7%98%E6%B1%B0%E8%B5%9B%23&t=31&band_rank=47&Refer=top)
1. [文吉儿的百度百科是自己写的吗](https://s.weibo.com//weibo?q=%E6%96%87%E5%90%89%E5%84%BF%E7%9A%84%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91%E6%98%AF%E8%87%AA%E5%B7%B1%E5%86%99%E7%9A%84%E5%90%97&t=31&band_rank=48&Refer=top)
1. [阴阳师](https://s.weibo.com//weibo?q=%E9%98%B4%E9%98%B3%E5%B8%88&t=31&band_rank=49&Refer=top)
1. [华为星芒价格](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E6%98%9F%E8%8A%92%E4%BB%B7%E6%A0%BC&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
