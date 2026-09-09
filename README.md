# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-09 08:17:22

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
<!-- 最后更新时间 Wed Sep 09 2026 08:31:18 GMT+0800 (China Standard Time) -->

1. [香港首任特首董建华逝世](https://so.toutiao.com/search?keyword=香港首任特首董建华逝世)
1. [博主：特朗普中期选举被自己亲手烧掉](https://so.toutiao.com/search?keyword=博主：特朗普中期选举被自己亲手烧掉)
1. [我国进出口连续4个月保持两位数增长](https://so.toutiao.com/search?keyword=我国进出口连续4个月保持两位数增长)
1. [毛泽东广场众人齐唱国歌共同缅怀](https://so.toutiao.com/search?keyword=毛泽东广场众人齐唱国歌共同缅怀)
1. [一家三口吃自助火锅只点一份大闹餐厅](https://so.toutiao.com/search?keyword=一家三口吃自助火锅只点一份大闹餐厅)
1. [年内160家村镇银行退出市场](https://so.toutiao.com/search?keyword=年内160家村镇银行退出市场)
1. [美军一架水下无人机在中东发生故障](https://so.toutiao.com/search?keyword=美军一架水下无人机在中东发生故障)
1. [三巨头混战万元折叠屏](https://so.toutiao.com/search?keyword=三巨头混战万元折叠屏)
1. [郑钦文：我的巅峰期还在后面](https://so.toutiao.com/search?keyword=郑钦文：我的巅峰期还在后面)
1. [曾在中行工作的女博士有望成德总理](https://so.toutiao.com/search?keyword=曾在中行工作的女博士有望成德总理)
1. [深圳一科技公司中秋国庆连放13天](https://so.toutiao.com/search?keyword=深圳一科技公司中秋国庆连放13天)
1. [新疆中考科目及分值重大调整系谣言](https://so.toutiao.com/search?keyword=新疆中考科目及分值重大调整系谣言)
1. [河南一医院现“丁义珍窗口”](https://so.toutiao.com/search?keyword=河南一医院现“丁义珍窗口”)
1. [太子奶创始人李途纯逝世](https://so.toutiao.com/search?keyword=太子奶创始人李途纯逝世)
1. [皇马2-1国米 姆巴佩破门](https://so.toutiao.com/search?keyword=皇马2-1国米%20姆巴佩破门)
1. [小米回应客户试驾途中驶出车道](https://so.toutiao.com/search?keyword=小米回应客户试驾途中驶出车道)
1. [浙江一公司收到美国3.66亿元关税退税](https://so.toutiao.com/search?keyword=浙江一公司收到美国3.66亿元关税退税)
1. [“中国屏”到底有多厉害](https://so.toutiao.com/search?keyword=“中国屏”到底有多厉害)
1. [人民日报谈“葫芦娃爷爷”摘下葫芦](https://so.toutiao.com/search?keyword=人民日报谈“葫芦娃爷爷”摘下葫芦)
1. [男子手机相册8000多张照片突然没了](https://so.toutiao.com/search?keyword=男子手机相册8000多张照片突然没了)
1. [郑钦文一年狂赚1.5亿元](https://so.toutiao.com/search?keyword=郑钦文一年狂赚1.5亿元)
1. [宇树IPO后具身智能如何定价](https://so.toutiao.com/search?keyword=宇树IPO后具身智能如何定价)
1. [小伙看奶奶路上坠亡9天后奶奶去世](https://so.toutiao.com/search?keyword=小伙看奶奶路上坠亡9天后奶奶去世)
1. [产妇生完女婴发现腹中还有一娃](https://so.toutiao.com/search?keyword=产妇生完女婴发现腹中还有一娃)
1. [江西遂川泥石流已致12人遇难](https://so.toutiao.com/search?keyword=江西遂川泥石流已致12人遇难)
1. [俄称打击乌设施 乌称打击俄军集结区](https://so.toutiao.com/search?keyword=俄称打击乌设施%20乌称打击俄军集结区)
1. [小区业主投票把新能源车“赶出”地库](https://so.toutiao.com/search?keyword=小区业主投票把新能源车“赶出”地库)
1. [NBA球星狄龙赴武当学太极](https://so.toutiao.com/search?keyword=NBA球星狄龙赴武当学太极)
1. [俄德为何再度交恶](https://so.toutiao.com/search?keyword=俄德为何再度交恶)
1. [手机涨价原因找到了](https://so.toutiao.com/search?keyword=手机涨价原因找到了)
1. [金球奖最佳年轻球员十人候选](https://so.toutiao.com/search?keyword=金球奖最佳年轻球员十人候选)
1. [男子偷拍未公开战机刚发布就被查](https://so.toutiao.com/search?keyword=男子偷拍未公开战机刚发布就被查)
1. [记者：穆里尼奥不满前锋们不回防](https://so.toutiao.com/search?keyword=记者：穆里尼奥不满前锋们不回防)
1. [武汉非法代孕地下实验室被查封](https://so.toutiao.com/search?keyword=武汉非法代孕地下实验室被查封)
1. [女子向西安一步行街雨水井塞不明物](https://so.toutiao.com/search?keyword=女子向西安一步行街雨水井塞不明物)
1. [8月汽车销量前十已无燃油车](https://so.toutiao.com/search?keyword=8月汽车销量前十已无燃油车)
1. [彭冠英高海宁同框路透](https://so.toutiao.com/search?keyword=彭冠英高海宁同框路透)
1. [歼-16D现身中阿军演有何意味](https://so.toutiao.com/search?keyword=歼-16D现身中阿军演有何意味)
1. [厂家回应月饼礼盒小包装未印生产日期](https://so.toutiao.com/search?keyword=厂家回应月饼礼盒小包装未印生产日期)
1. [中国田径跳跃部期待实现自我突破](https://so.toutiao.com/search?keyword=中国田径跳跃部期待实现自我突破)
1. [女子零食店内多次盗窃被抓](https://so.toutiao.com/search?keyword=女子零食店内多次盗窃被抓)
1. [俄称俄没有忘记日本军国主义](https://so.toutiao.com/search?keyword=俄称俄没有忘记日本军国主义)
1. [欧盟称以色列破坏“两国方案”前景](https://so.toutiao.com/search?keyword=欧盟称以色列破坏“两国方案”前景)
1. [安徽省委省政府派出安全生产督察组](https://so.toutiao.com/search?keyword=安徽省委省政府派出安全生产督察组)
1. [柯文哲二审不认罪喊话法院直播](https://so.toutiao.com/search?keyword=柯文哲二审不认罪喊话法院直播)
1. [48岁倪虹洁：迟一点长大也没关系](https://so.toutiao.com/search?keyword=48岁倪虹洁：迟一点长大也没关系)
1. [为何欧美患者排队到上海治癌症](https://so.toutiao.com/search?keyword=为何欧美患者排队到上海治癌症)
1. [赵一鸣省钱超市真省钱吗？记者实探](https://so.toutiao.com/search?keyword=赵一鸣省钱超市真省钱吗？记者实探)
1. [唐国强问赖冠霖有家庭了吗](https://so.toutiao.com/search?keyword=唐国强问赖冠霖有家庭了吗)
1. [五角大楼泄密特朗普震怒](https://so.toutiao.com/search?keyword=五角大楼泄密特朗普震怒)
1. [这轮冷空气究竟有多猛](https://so.toutiao.com/search?keyword=这轮冷空气究竟有多猛)
1. [苹果即将发布三款新iPhone](https://so.toutiao.com/search?keyword=苹果即将发布三款新iPhone)
1. [印度150年神庙被冲走是天灾还是人祸](https://so.toutiao.com/search?keyword=印度150年神庙被冲走是天灾还是人祸)
1. [俄方：希望恢复乌克兰问题三方谈判](https://so.toutiao.com/search?keyword=俄方：希望恢复乌克兰问题三方谈判)
1. [美网赞叹郑钦文奇迹翻盘：惹不起](https://so.toutiao.com/search?keyword=美网赞叹郑钦文奇迹翻盘：惹不起)
1. [母亲为去世儿子销户民警含泪拥抱安慰](https://so.toutiao.com/search?keyword=母亲为去世儿子销户民警含泪拥抱安慰)
1. [父亲说现在的郑钦文最可怕](https://so.toutiao.com/search?keyword=父亲说现在的郑钦文最可怕)
1. [有理儿有面：谁杀死了MAGA周边](https://so.toutiao.com/search?keyword=有理儿有面：谁杀死了MAGA周边)
1. [郑钦文实现千万分之一概率事件](https://so.toutiao.com/search?keyword=郑钦文实现千万分之一概率事件)
1. [老兵驾车13小时到韶山祭奠毛主席](https://so.toutiao.com/search?keyword=老兵驾车13小时到韶山祭奠毛主席)
1. [俄军前线大量用重磅航弹拆楼意味啥](https://so.toutiao.com/search?keyword=俄军前线大量用重磅航弹拆楼意味啥)
1. [郑钦文说逆转不是运气](https://so.toutiao.com/search?keyword=郑钦文说逆转不是运气)
1. [媒体：折叠屏手机大战华为率先出招](https://so.toutiao.com/search?keyword=媒体：折叠屏手机大战华为率先出招)
1. [赖岳谦：“台独”不配住在中国台湾](https://so.toutiao.com/search?keyword=赖岳谦：“台独”不配住在中国台湾)
1. [大一新生带了一大包馕和室友分享](https://so.toutiao.com/search?keyword=大一新生带了一大包馕和室友分享)
1. [学者：日本没资格喊“敌国条款”过时](https://so.toutiao.com/search?keyword=学者：日本没资格喊“敌国条款”过时)
1. [日本二氯二氢硅为何被认定存在倾销](https://so.toutiao.com/search?keyword=日本二氯二氢硅为何被认定存在倾销)
1. [常喝茶对身体有哪些好处](https://so.toutiao.com/search?keyword=常喝茶对身体有哪些好处)
1. [洪秀柱参观张雪机车：我腿短跨不上去](https://so.toutiao.com/search?keyword=洪秀柱参观张雪机车：我腿短跨不上去)
1. [应急管理部原部长王祥喜被双开](https://so.toutiao.com/search?keyword=应急管理部原部长王祥喜被双开)
1. [普京与特朗普通话讨论乌危机等问题](https://so.toutiao.com/search?keyword=普京与特朗普通话讨论乌危机等问题)
1. [焦点访谈曝光跨省黑加油产业链](https://so.toutiao.com/search?keyword=焦点访谈曝光跨省黑加油产业链)
1. [“贝加尔力量”天然气管道为何经蒙古](https://so.toutiao.com/search?keyword=“贝加尔力量”天然气管道为何经蒙古)
1. [刘建宏：国足着眼下一代的崛起](https://so.toutiao.com/search?keyword=刘建宏：国足着眼下一代的崛起)
1. [迪丽热巴回应被评“晒黑长胖变壮”](https://so.toutiao.com/search?keyword=迪丽热巴回应被评“晒黑长胖变壮”)
1. [女篮世界杯中国队晋级八强稳了吗](https://so.toutiao.com/search?keyword=女篮世界杯中国队晋级八强稳了吗)
1. [沙特称胡塞武装袭击已致73人受伤](https://so.toutiao.com/search?keyword=沙特称胡塞武装袭击已致73人受伤)
1. [江西扫黑除恶首战告捷](https://so.toutiao.com/search?keyword=江西扫黑除恶首战告捷)
1. [德媒：巨额新增债务威胁德信用评级](https://so.toutiao.com/search?keyword=德媒：巨额新增债务威胁德信用评级)
1. [如何看待俄称包围约1700名乌军](https://so.toutiao.com/search?keyword=如何看待俄称包围约1700名乌军)
1. [折叠屏手机你选哪一家](https://so.toutiao.com/search?keyword=折叠屏手机你选哪一家)
1. [加拿大对美报复性关税措施生效](https://so.toutiao.com/search?keyword=加拿大对美报复性关税措施生效)
1. [专家：俄乌战火重燃 核心问题仍难解](https://so.toutiao.com/search?keyword=专家：俄乌战火重燃%20核心问题仍难解)
1. [小米澎程上市首日门店加班到次日](https://so.toutiao.com/search?keyword=小米澎程上市首日门店加班到次日)
1. [博主：韩旭打出世界级水平](https://so.toutiao.com/search?keyword=博主：韩旭打出世界级水平)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Sep 09 2026 08:10:31 GMT+0800 (China Standard Time) -->

1. [江西孩子看演唱会后全家低保取消](https://www.zhihu.com/search?q=%E6%B1%9F%E8%A5%BF%E5%AD%A9%E5%AD%90%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%8E%E5%85%A8%E5%AE%B6%E4%BD%8E%E4%BF%9D%E5%8F%96%E6%B6%88)
1. [郭德纲歪曲篡改抗战歌曲被罚](https://www.zhihu.com/search?q=%E9%83%AD%E5%BE%B7%E7%BA%B2%E6%AD%AA%E6%9B%B2%E7%AF%A1%E6%94%B9%E6%8A%97%E6%88%98%E6%AD%8C%E6%9B%B2%E8%A2%AB%E7%BD%9A)
1. [吃播网红干饭莹莹去世年仅24岁](https://www.zhihu.com/search?q=%E5%90%83%E6%92%AD%E7%BD%91%E7%BA%A2%E5%B9%B2%E9%A5%AD%E8%8E%B9%E8%8E%B9%E5%8E%BB%E4%B8%96%E5%B9%B4%E4%BB%8524%E5%B2%81)
1. [多地严查赵一鸣、好想来等品牌](https://www.zhihu.com/search?q=%E5%A4%9A%E5%9C%B0%E4%B8%A5%E6%9F%A5%E8%B5%B5%E4%B8%80%E9%B8%A3%E3%80%81%E5%A5%BD%E6%83%B3%E6%9D%A5%E7%AD%89%E5%93%81%E7%89%8C)
1. [网传字节跳动员工开始战略怀孕](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E5%91%98%E5%B7%A5%E5%BC%80%E5%A7%8B%E6%88%98%E7%95%A5%E6%80%80%E5%AD%95)
1. [武大通报教授被举报事件](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A4%A7%E9%80%9A%E6%8A%A5%E6%95%99%E6%8E%88%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%BA%8B%E4%BB%B6)
1. [汤家凤呼吁取消英语主科地位](https://www.zhihu.com/search?q=%E6%B1%A4%E5%AE%B6%E5%87%A4%E5%91%BC%E5%90%81%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%E5%9C%B0%E4%BD%8D)
1. [上海10月1日起生娃个人「不花钱」](https://www.zhihu.com/search?q=%E4%B8%8A%E6%B5%B710%E6%9C%881%E6%97%A5%E8%B5%B7%E7%94%9F%E5%A8%83%E4%B8%AA%E4%BA%BA%E3%80%8C%E4%B8%8D%E8%8A%B1%E9%92%B1%E3%80%8D)
1. [China GT 上海站赛车起火](https://www.zhihu.com/search?q=China%20GT%20%E4%B8%8A%E6%B5%B7%E7%AB%99%E8%B5%9B%E8%BD%A6%E8%B5%B7%E7%81%AB)
1. [N-S 方程疑似被 AI 解决](https://www.zhihu.com/search?q=N-S%20%E6%96%B9%E7%A8%8B%E7%96%91%E4%BC%BC%E8%A2%AB%20AI%20%E8%A7%A3%E5%86%B3)
1. [南宁站一旅客跳轨与列车碰撞身亡](https://www.zhihu.com/search?q=%E5%8D%97%E5%AE%81%E7%AB%99%E4%B8%80%E6%97%85%E5%AE%A2%E8%B7%B3%E8%BD%A8%E4%B8%8E%E5%88%97%E8%BD%A6%E7%A2%B0%E6%92%9E%E8%BA%AB%E4%BA%A1)
1. [女子停捐不到一个月被催捐](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E5%81%9C%E6%8D%90%E4%B8%8D%E5%88%B0%E4%B8%80%E4%B8%AA%E6%9C%88%E8%A2%AB%E5%82%AC%E6%8D%90)
1. [太子奶创始人李途纯去世](https://www.zhihu.com/search?q=%E5%A4%AA%E5%AD%90%E5%A5%B6%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9D%8E%E9%80%94%E7%BA%AF%E5%8E%BB%E4%B8%96)
1. [iG 3:0 LGD](https://www.zhihu.com/search?q=iG%203%3A0%20LGD)
1. [江西遂川泥石流致11死1失联](https://www.zhihu.com/search?q=%E6%B1%9F%E8%A5%BF%E9%81%82%E5%B7%9D%E6%B3%A5%E7%9F%B3%E6%B5%81%E8%87%B411%E6%AD%BB1%E5%A4%B1%E8%81%94)
1. [耿同学落户杭州任特聘讲师](https://www.zhihu.com/search?q=%E8%80%BF%E5%90%8C%E5%AD%A6%E8%90%BD%E6%88%B7%E6%9D%AD%E5%B7%9E%E4%BB%BB%E7%89%B9%E8%81%98%E8%AE%B2%E5%B8%88)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Sep 09 2026 08:17:22 GMT+0800 (China Standard Time) -->

1. [如何看待 Buckmaster 披露 OpenAI 在 NS 方程突破中的学术掠夺与威胁言论？](https://www.zhihu.com/question/2080654680389052000)
1. [都说 GPT-6-Astra 强，有没有实际点的应用案例？](https://www.zhihu.com/question/2080482298223400000)
1. [考研数学名师汤家凤称对历史不计入中考总分深感痛心，你怎么看？](https://www.zhihu.com/question/2079870624105870800)
1. [上海10月1日起生娃个人「不花钱」，产检超额费用全兜底，住院分娩政策内费用全报销，新政会带来哪些利好？](https://www.zhihu.com/question/2080743820598010600)
1. [高一女生军训遭强制猥亵，涉事「教官」有犯罪记录，已被刑拘，其将承担哪些法律责任？学校要担责吗？](https://www.zhihu.com/question/2080772037556152300)
1. [怎么看 DeepSeek Flash 系列9月10日将再调整定价，除输出外回归8月17日前价格？](https://www.zhihu.com/question/2080799652820029700)
1. [武汉通报非法辅助生殖地下实验室称已查封，8 名涉案人员被控制，哪些信息值得关注？](https://www.zhihu.com/question/2080713693583754000)
1. [紫金矿业半年报出现「人民币政府」「新熊源」等低级错误，且部分错误延续六年，财报审校到底谁在把关？](https://www.zhihu.com/question/2080349294146610200)
1. [太子奶创始人李途纯去世，曾以8888万夺央视「标王」，被拘禁15个月后获无罪释放，如何评价他的一生？](https://www.zhihu.com/question/2080698018320344300)
1. [近期不少医院医生挂号页面出现「医保扣分情况」介绍，这是什么意思？](https://www.zhihu.com/question/2080384784979554600)
1. [《欢迎来龙餐馆》为什么袭击的时候偏偏留了老扎一命？](https://www.zhihu.com/question/2079298778436321800)
1. [如何评价国足发布最新大名单，布尼亚明、赵松源等入选？](https://www.zhihu.com/question/2080727498304837400)
1. [特朗普发布新版「美国总统从夯到拉排名」，自己夯爆了，拜登、奥巴马在「失败区」，你怎么看特朗普的排名？](https://www.zhihu.com/question/2080276423739172000)
1. [如何看待冯小刚电影《抓特务》上线流媒体后出现口碑逆袭？可能有哪些原因？](https://www.zhihu.com/question/2080594668526514700)
1. [怎么看 OpenAI 在 Navier–Stokes 数学难题上取得的进展反而出现争议？](https://www.zhihu.com/question/2080681933982393600)
1. [网传长江武汉段三艘驳船，单次十秒倾倒大量黑色物质入江，相关部门已紧急巡查，倾倒物可能是什么？危害多大？](https://www.zhihu.com/question/2080294144782645000)
1. [律师称深圳富豪夫妻联手送小三进监狱，致其被判 14 年，指控判决存在程序违规，如何从法律角度解读？](https://www.zhihu.com/question/2080624585049727200)
1. [如何看待华为首款阔直板Pura X View上市定价5999起，这个价格是否有竞争力？](https://www.zhihu.com/question/2080336843980256300)
1. [三位学者虚构 4500 份简历，投递发现海归面试概率比本土求职者低 16.2%，海归学历不再吃香了吗？](https://www.zhihu.com/question/2080616606447694600)
1. [贵州福泉三名未成年女孩接连失联，目前均已找到，有哪些信息值得关注？](https://www.zhihu.com/question/2080237533758055000)
1. [网红晒百万捐款截图被查实仅捐 1 元，借灾情「诈捐」博流量该如何惩处？灾情中的「假慈善」为何屡屡出现？](https://www.zhihu.com/question/2080586140742939400)
1. [毛阿敏为什么要在镜头面前把许晴逼到崩溃？](https://www.zhihu.com/question/2078132215284753200)
1. [孙悟空大闹天宫时，如来佛祖为什么那么听话，玉帝一"传旨"他就来？](https://www.zhihu.com/question/2078942322033796900)
1. [丹麦老板称越南建厂成本比中国贵 10%，这透露出全球供应链怎样的变化？](https://www.zhihu.com/question/2080340515971715600)
1. [为何有些人认知很高还会经常容易被骗？](https://www.zhihu.com/question/2079732602697692400)
1. [自我暗示有那么神奇吗？如何才能实现自我提升？](https://www.zhihu.com/question/1896894992603129000)
1. [媒体称塑料外卖盒等都含有微塑料，会穿过血脑屏障进入大脑，什么是微塑料？会产生什么影响？又该如何应对？](https://www.zhihu.com/question/2080223901372475000)
1. [微信会成为中国版的超级Telegram吗？](https://www.zhihu.com/question/2023911893291550700)
1. [第一批「20后」正式上小学了，送学家长横跨70后、80后、90后、00后，你如何看待这种「时代错位」？](https://www.zhihu.com/question/2078108755187725800)
1. [山西 17 岁男生被人冒充警察殴打，打人者看守所写信求谅解，谅解书能获减刑吗？如何从法律角度解读？](https://www.zhihu.com/question/2080649759170061800)
1. [「耿同学」已落户杭州，获聘为浙江传媒学院特聘讲师，这对他学术打假工作可能有哪些帮助或影响？](https://www.zhihu.com/question/2080742188825015000)
1. [日本外储8月录得史上最大降幅，日元兑美元升破154，汇率创6个月新高，其持续升值对市场影响几何？](https://www.zhihu.com/question/2080554537186759200)
1. [如何评价AA推出V4.2评分标准，GPT-6分数超过Muse Spark 1.3？](https://www.zhihu.com/question/2079499882709233700)
1. [如何评价GPT6在Blender建模的水平两极分化？](https://www.zhihu.com/question/2079875098979448600)
1. [杨逍和范遥对上玄冥二老有无胜算？](https://www.zhihu.com/question/1963582705104066000)
1. [为什么做菜都用葱姜蒜干辣椒五椒八角酱油醋糖或者更多，炒出的菜通红通红，而不是少放佐料保持菜本味？](https://www.zhihu.com/question/1907837514024220400)
1. [有没有什么很方便做的菜?](https://www.zhihu.com/question/3777927578)
1. [为什么现在网上的信息越来越多，我们却越来越难找到真正想要的东西？](https://www.zhihu.com/question/2078550836330944500)
1. [在职场，最好养成哪些小习惯？](https://www.zhihu.com/question/496319766)
1. [你最喜欢的一道菜是什么？它的做法是怎样的？](https://www.zhihu.com/question/3417443522)
1. [在北京，为什么北五环的房价比南三环还贵呢？](https://www.zhihu.com/question/660587105)
1. [深度求索发布DeepSeek V4.1 Flash 的中间版本内测，该模型体验如何?](https://www.zhihu.com/question/2080678583714977500)
1. [LPL 2026赛季季后赛 iG 3:0 淘汰 LGD 距离晋级决赛仅一步之遥，如何评价这场比赛？](https://www.zhihu.com/question/2080688697410852000)
1. [如何看待Alpöge 和 Buckmaster 关于Navier-Stokes方程的工作？](https://www.zhihu.com/question/2080659787990177500)

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
<!-- 最后更新时间 Wed Sep 09 2026 08:22:10 GMT+0800 (China Standard Time) -->

1. [习近平同英国首相伯纳姆通电话](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%90%8C%E8%8B%B1%E5%9B%BD%E9%A6%96%E7%9B%B8%E4%BC%AF%E7%BA%B3%E5%A7%86%E9%80%9A%E7%94%B5%E8%AF%9D%23&Refer=new_time)
1. [香港首任特首董建华逝世](https://s.weibo.com//weibo?q=%E9%A6%99%E6%B8%AF%E9%A6%96%E4%BB%BB%E7%89%B9%E9%A6%96%E8%91%A3%E5%BB%BA%E5%8D%8E%E9%80%9D%E4%B8%96&t=31&band_rank=1&Refer=top)
1. [美股 光通信](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1%20%E5%85%89%E9%80%9A%E4%BF%A1&t=31&band_rank=2&Refer=top)
1. [从瑞金到延安的初心奔赴](https://s.weibo.com//weibo?q=%23%E4%BB%8E%E7%91%9E%E9%87%91%E5%88%B0%E5%BB%B6%E5%AE%89%E7%9A%84%E5%88%9D%E5%BF%83%E5%A5%94%E8%B5%B4%23&t=31&band_rank=3&Refer=top)
1. [这段话杀死了内耗型人格](https://s.weibo.com//weibo?q=%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E5%86%85%E8%80%97%E5%9E%8B%E4%BA%BA%E6%A0%BC&t=31&band_rank=4&Refer=top)
1. [这样的吃播该全面叫停了](https://s.weibo.com//weibo?q=%E8%BF%99%E6%A0%B7%E7%9A%84%E5%90%83%E6%92%AD%E8%AF%A5%E5%85%A8%E9%9D%A2%E5%8F%AB%E5%81%9C%E4%BA%86&t=31&band_rank=5&Refer=top)
1. [毛泽东逝世50周年](https://s.weibo.com//weibo?q=%23%E6%AF%9B%E6%B3%BD%E4%B8%9C%E9%80%9D%E4%B8%9650%E5%91%A8%E5%B9%B4%23&t=31&band_rank=6&Refer=top)
1. [iPhone18Pro发布会倒计时](https://s.weibo.com//weibo?q=iPhone18Pro%E5%8F%91%E5%B8%83%E4%BC%9A%E5%80%92%E8%AE%A1%E6%97%B6&t=31&band_rank=7&Refer=top)
1. [小米回应澎程试驾事故](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E6%BE%8E%E7%A8%8B%E8%AF%95%E9%A9%BE%E4%BA%8B%E6%95%85%23&t=31&band_rank=8&Refer=top)
1. [栾念尚之桃重逢擦肩而过](https://s.weibo.com//weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E9%87%8D%E9%80%A2%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87%23&t=31&band_rank=9&Refer=top)
1. [我的前半生](https://s.weibo.com//weibo?q=%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F&t=31&band_rank=10&Refer=top)
1. [小米澎程首撞](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E9%A6%96%E6%92%9E&t=31&band_rank=11&Refer=top)
1. [双休不一定是休周六周日](https://s.weibo.com//weibo?q=%E5%8F%8C%E4%BC%91%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%98%AF%E4%BC%91%E5%91%A8%E5%85%AD%E5%91%A8%E6%97%A5&t=31&band_rank=12&Refer=top)
1. [张婧仪 宋威龙](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%A9%A7%E4%BB%AA%20%E5%AE%8B%E5%A8%81%E9%BE%99&t=31&band_rank=13&Refer=top)
1. [差点没认出杨洋](https://s.weibo.com//weibo?q=%23%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E6%9D%A8%E6%B4%8B%23&t=31&band_rank=14&Refer=top)
1. [女子趁49岁男友午睡将其杀害分尸](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B6%8149%E5%B2%81%E7%94%B7%E5%8F%8B%E5%8D%88%E7%9D%A1%E5%B0%86%E5%85%B6%E6%9D%80%E5%AE%B3%E5%88%86%E5%B0%B8%23&t=31&band_rank=15&Refer=top)
1. [毛主席逝世50周年缅怀](https://s.weibo.com//weibo?q=%E6%AF%9B%E4%B8%BB%E5%B8%AD%E9%80%9D%E4%B8%9650%E5%91%A8%E5%B9%B4%E7%BC%85%E6%80%80&t=31&band_rank=16&Refer=top)
1. [皇马2比1国际米兰](https://s.weibo.com//weibo?q=%E7%9A%87%E9%A9%AC2%E6%AF%941%E5%9B%BD%E9%99%85%E7%B1%B3%E5%85%B0&t=31&band_rank=17&Refer=top)
1. [医生眼里让大脑休息最好的方法](https://s.weibo.com//weibo?q=%E5%8C%BB%E7%94%9F%E7%9C%BC%E9%87%8C%E8%AE%A9%E5%A4%A7%E8%84%91%E4%BC%91%E6%81%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E6%B3%95&t=31&band_rank=18&Refer=top)
1. [刘畅邓恩熙有牵手戏份](https://s.weibo.com//weibo?q=%E5%88%98%E7%95%85%E9%82%93%E6%81%A9%E7%86%99%E6%9C%89%E7%89%B5%E6%89%8B%E6%88%8F%E4%BB%BD&t=31&band_rank=19&Refer=top)
1. [郑钦文胜率](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%E8%83%9C%E7%8E%87&t=31&band_rank=20&Refer=top)
1. [井柏然 倪妮](https://s.weibo.com//weibo?q=%E4%BA%95%E6%9F%8F%E7%84%B6%20%E5%80%AA%E5%A6%AE&t=31&band_rank=21&Refer=top)
1. [什么是人生最顶级的享受](https://s.weibo.com//weibo?q=%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%BA%E7%94%9F%E6%9C%80%E9%A1%B6%E7%BA%A7%E7%9A%84%E4%BA%AB%E5%8F%97&t=31&band_rank=22&Refer=top)
1. [小学生梦游从7楼坠下砸烂宝马车](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E6%A2%A6%E6%B8%B8%E4%BB%8E7%E6%A5%BC%E5%9D%A0%E4%B8%8B%E7%A0%B8%E7%83%82%E5%AE%9D%E9%A9%AC%E8%BD%A6%23&t=31&band_rank=23&Refer=top)
1. [受资助女孩质问为何没打生活费](https://s.weibo.com//weibo?q=%E5%8F%97%E8%B5%84%E5%8A%A9%E5%A5%B3%E5%AD%A9%E8%B4%A8%E9%97%AE%E4%B8%BA%E4%BD%95%E6%B2%A1%E6%89%93%E7%94%9F%E6%B4%BB%E8%B4%B9&t=31&band_rank=24&Refer=top)
1. [印度21岁女运动员因外貌走红](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A621%E5%B2%81%E5%A5%B3%E8%BF%90%E5%8A%A8%E5%91%98%E5%9B%A0%E5%A4%96%E8%B2%8C%E8%B5%B0%E7%BA%A2%23&t=31&band_rank=25&Refer=top)
1. [YSL发了好多肖战神图](https://s.weibo.com//weibo?q=%23YSL%E5%8F%91%E4%BA%86%E5%A5%BD%E5%A4%9A%E8%82%96%E6%88%98%E7%A5%9E%E5%9B%BE%23&t=31&band_rank=26&Refer=top)
1. [日本女篮惨败](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E7%AF%AE%E6%83%A8%E8%B4%A5%23&t=31&band_rank=27&Refer=top)
1. [日本名古屋强降雨创历史纪录](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%BC%BA%E9%99%8D%E9%9B%A8%E5%88%9B%E5%8E%86%E5%8F%B2%E7%BA%AA%E5%BD%95%23&t=31&band_rank=28&Refer=top)
1. [张婧仪宋威龙情侣演久了会有夫妻相](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AE%8B%E5%A8%81%E9%BE%99%E6%83%85%E4%BE%A3%E6%BC%94%E4%B9%85%E4%BA%86%E4%BC%9A%E6%9C%89%E5%A4%AB%E5%A6%BB%E7%9B%B8%23&t=31&band_rank=29&Refer=top)
1. [女子吃墨鱼吃出剧毒红斑斗蟹](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E5%A2%A8%E9%B1%BC%E5%90%83%E5%87%BA%E5%89%A7%E6%AF%92%E7%BA%A2%E6%96%91%E6%96%97%E8%9F%B9%23&t=31&band_rank=30&Refer=top)
1. [意识到婴儿行为不可预测的猫](https://s.weibo.com//weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E5%A9%B4%E5%84%BF%E8%A1%8C%E4%B8%BA%E4%B8%8D%E5%8F%AF%E9%A2%84%E6%B5%8B%E7%9A%84%E7%8C%AB%23&t=31&band_rank=31&Refer=top)
1. [小米 宁德时代](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%20%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3&t=31&band_rank=32&Refer=top)
1. [曝虞书欣敖瑞鹏出演我欲乘风](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%95%96%E7%91%9E%E9%B9%8F%E5%87%BA%E6%BC%94%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23&t=31&band_rank=33&Refer=top)
1. [金球奖](https://s.weibo.com//weibo?q=%E9%87%91%E7%90%83%E5%A5%96&t=31&band_rank=34&Refer=top)
1. [LPL](https://s.weibo.com//weibo?q=LPL&t=31&band_rank=35&Refer=top)
1. [耐克给郑钦文写的文案](https://s.weibo.com//weibo?q=%23%E8%80%90%E5%85%8B%E7%BB%99%E9%83%91%E9%92%A6%E6%96%87%E5%86%99%E7%9A%84%E6%96%87%E6%A1%88%23&t=31&band_rank=36&Refer=top)
1. [肩颈疼的时候可以试试这个姿势](https://s.weibo.com//weibo?q=%E8%82%A9%E9%A2%88%E7%96%BC%E7%9A%84%E6%97%B6%E5%80%99%E5%8F%AF%E4%BB%A5%E8%AF%95%E8%AF%95%E8%BF%99%E4%B8%AA%E5%A7%BF%E5%8A%BF&t=31&band_rank=37&Refer=top)
1. [欧冠](https://s.weibo.com//weibo?q=%E6%AC%A7%E5%86%A0&t=31&band_rank=38&Refer=top)
1. [低保香港演唱会事件 命运捉弄人](https://s.weibo.com//weibo?q=%E4%BD%8E%E4%BF%9D%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8B%E4%BB%B6%20%E5%91%BD%E8%BF%90%E6%8D%89%E5%BC%84%E4%BA%BA&t=31&band_rank=39&Refer=top)
1. [萨巴伦卡抢十险胜6号种子诺斯科娃](https://s.weibo.com//weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%8A%A2%E5%8D%81%E9%99%A9%E8%83%9C6%E5%8F%B7%E7%A7%8D%E5%AD%90%E8%AF%BA%E6%96%AF%E7%A7%91%E5%A8%83%23&t=31&band_rank=40&Refer=top)
1. [张雪机车把打工人尊严焊死合同里](https://s.weibo.com//weibo?q=%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8A%8A%E6%89%93%E5%B7%A5%E4%BA%BA%E5%B0%8A%E4%B8%A5%E7%84%8A%E6%AD%BB%E5%90%88%E5%90%8C%E9%87%8C&t=31&band_rank=41&Refer=top)
1. [郑钦文胜率预测13比87莱巴金娜](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%83%9C%E7%8E%87%E9%A2%84%E6%B5%8B13%E6%AF%9487%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23&t=31&band_rank=42&Refer=top)
1. [丁禹兮工作室发声明](https://s.weibo.com//weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E5%A3%B0%E6%98%8E%23&t=31&band_rank=43&Refer=top)
1. [女子还不起房贷喊话前男友收回](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E8%BF%98%E4%B8%8D%E8%B5%B7%E6%88%BF%E8%B4%B7%E5%96%8A%E8%AF%9D%E5%89%8D%E7%94%B7%E5%8F%8B%E6%94%B6%E5%9B%9E&t=31&band_rank=44&Refer=top)
1. [腿脚不便大妈来退儿子买给女友衣服](https://s.weibo.com//weibo?q=%23%E8%85%BF%E8%84%9A%E4%B8%8D%E4%BE%BF%E5%A4%A7%E5%A6%88%E6%9D%A5%E9%80%80%E5%84%BF%E5%AD%90%E4%B9%B0%E7%BB%99%E5%A5%B3%E5%8F%8B%E8%A1%A3%E6%9C%8D%23&t=31&band_rank=45&Refer=top)
1. [哈兰德梅开二度](https://s.weibo.com//weibo?q=%E5%93%88%E5%85%B0%E5%BE%B7%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6&t=31&band_rank=46&Refer=top)
1. [A股现54亿天价离婚](https://s.weibo.com//weibo?q=%23A%E8%82%A1%E7%8E%B054%E4%BA%BF%E5%A4%A9%E4%BB%B7%E7%A6%BB%E5%A9%9A%23&t=31&band_rank=47&Refer=top)
1. [成毅待播剧角色热度第一](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E5%BE%85%E6%92%AD%E5%89%A7%E8%A7%92%E8%89%B2%E7%83%AD%E5%BA%A6%E7%AC%AC%E4%B8%80%23&t=31&band_rank=48&Refer=top)
1. [早春晴朗火的原因](https://s.weibo.com//weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%81%AB%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=49&Refer=top)
1. [毛阿敏评价反转](https://s.weibo.com//weibo?q=%E6%AF%9B%E9%98%BF%E6%95%8F%E8%AF%84%E4%BB%B7%E5%8F%8D%E8%BD%AC&t=31&band_rank=50&Refer=top)
1. [这段话杀死了内耗型人格](https://s.weibo.com//weibo?q=%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E5%86%85%E8%80%97%E5%9E%8B%E4%BA%BA%E6%A0%BC&t=31&band_rank=1&Refer=top)
1. [这样的吃播该全面叫停了](https://s.weibo.com//weibo?q=%E8%BF%99%E6%A0%B7%E7%9A%84%E5%90%83%E6%92%AD%E8%AF%A5%E5%85%A8%E9%9D%A2%E5%8F%AB%E5%81%9C%E4%BA%86&t=31&band_rank=2&Refer=top)
1. [平陆运河9月16日建成通航](https://s.weibo.com//weibo?q=%23%E5%B9%B3%E9%99%86%E8%BF%90%E6%B2%B39%E6%9C%8816%E6%97%A5%E5%BB%BA%E6%88%90%E9%80%9A%E8%88%AA%23&t=31&band_rank=3&Refer=top)
1. [意识到婴儿行为不可预测的猫](https://s.weibo.com//weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E5%A9%B4%E5%84%BF%E8%A1%8C%E4%B8%BA%E4%B8%8D%E5%8F%AF%E9%A2%84%E6%B5%8B%E7%9A%84%E7%8C%AB%23&t=31&band_rank=4&Refer=top)
1. [医生眼里让大脑休息最好的方法](https://s.weibo.com//weibo?q=%E5%8C%BB%E7%94%9F%E7%9C%BC%E9%87%8C%E8%AE%A9%E5%A4%A7%E8%84%91%E4%BC%91%E6%81%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E6%B3%95&t=31&band_rank=5&Refer=top)
1. [萨巴伦卡连续6年进美网四强](https://s.weibo.com//weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E8%BF%9E%E7%BB%AD6%E5%B9%B4%E8%BF%9B%E7%BE%8E%E7%BD%91%E5%9B%9B%E5%BC%BA%23&t=31&band_rank=6&Refer=top)
1. [吃紧急避孕药时机真的很关键](https://s.weibo.com//weibo?q=%E5%90%83%E7%B4%A7%E6%80%A5%E9%81%BF%E5%AD%95%E8%8D%AF%E6%97%B6%E6%9C%BA%E7%9C%9F%E7%9A%84%E5%BE%88%E5%85%B3%E9%94%AE&t=31&band_rank=7&Refer=top)
1. [Crisp力挺TheShy](https://s.weibo.com//weibo?q=%23Crisp%E5%8A%9B%E6%8C%BATheShy%23&t=31&band_rank=8&Refer=top)
1. [金球奖](https://s.weibo.com//weibo?q=%E9%87%91%E7%90%83%E5%A5%96&t=31&band_rank=9&Refer=top)
1. [郑钦文 冲击美网四强](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%20%E5%86%B2%E5%87%BB%E7%BE%8E%E7%BD%91%E5%9B%9B%E5%BC%BA&t=31&band_rank=10&Refer=top)
1. [双休不一定是休周六周日](https://s.weibo.com//weibo?q=%E5%8F%8C%E4%BC%91%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%98%AF%E4%BC%91%E5%91%A8%E5%85%AD%E5%91%A8%E6%97%A5&t=31&band_rank=11&Refer=top)
1. [印度21岁女运动员因外貌走红](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A621%E5%B2%81%E5%A5%B3%E8%BF%90%E5%8A%A8%E5%91%98%E5%9B%A0%E5%A4%96%E8%B2%8C%E8%B5%B0%E7%BA%A2%23&t=31&band_rank=12&Refer=top)
1. [女子还不起房贷喊话前男友收回](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E8%BF%98%E4%B8%8D%E8%B5%B7%E6%88%BF%E8%B4%B7%E5%96%8A%E8%AF%9D%E5%89%8D%E7%94%B7%E5%8F%8B%E6%94%B6%E5%9B%9E&t=31&band_rank=13&Refer=top)
1. [00后现状怎么做到全国统一的](https://s.weibo.com//weibo?q=00%E5%90%8E%E7%8E%B0%E7%8A%B6%E6%80%8E%E4%B9%88%E5%81%9A%E5%88%B0%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84&t=31&band_rank=14&Refer=top)
1. [苹果用户换华为](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%E6%8D%A2%E5%8D%8E%E4%B8%BA&t=31&band_rank=15&Refer=top)
1. [女子吃墨鱼吃出剧毒红斑斗蟹](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E5%A2%A8%E9%B1%BC%E5%90%83%E5%87%BA%E5%89%A7%E6%AF%92%E7%BA%A2%E6%96%91%E6%96%97%E8%9F%B9%23&t=31&band_rank=16&Refer=top)
1. [我的前半生](https://s.weibo.com//weibo?q=%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F&t=31&band_rank=17&Refer=top)
1. [AI吃播](https://s.weibo.com//weibo?q=AI%E5%90%83%E6%92%AD&t=31&band_rank=18&Refer=top)
1. [特朗普一次惹了20国](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%80%E6%AC%A1%E6%83%B9%E4%BA%8620%E5%9B%BD%23&t=31&band_rank=19&Refer=top)
1. [吃播已成吃人的流量赛道](https://s.weibo.com//weibo?q=%23%E5%90%83%E6%92%AD%E5%B7%B2%E6%88%90%E5%90%83%E4%BA%BA%E7%9A%84%E6%B5%81%E9%87%8F%E8%B5%9B%E9%81%93%23&t=31&band_rank=20&Refer=top)
1. [受资助女孩质问为何没打生活费](https://s.weibo.com//weibo?q=%E5%8F%97%E8%B5%84%E5%8A%A9%E5%A5%B3%E5%AD%A9%E8%B4%A8%E9%97%AE%E4%B8%BA%E4%BD%95%E6%B2%A1%E6%89%93%E7%94%9F%E6%B4%BB%E8%B4%B9&t=31&band_rank=21&Refer=top)
1. [一家三口吃单人锅只点一份大闹餐厅](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%83%E5%8D%95%E4%BA%BA%E9%94%85%E5%8F%AA%E7%82%B9%E4%B8%80%E4%BB%BD%E5%A4%A7%E9%97%B9%E9%A4%90%E5%8E%85%23&t=31&band_rank=23&Refer=top)
1. [做饭时的一个小改变就可以控血糖](https://s.weibo.com//weibo?q=%23%E5%81%9A%E9%A5%AD%E6%97%B6%E7%9A%84%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%94%B9%E5%8F%98%E5%B0%B1%E5%8F%AF%E4%BB%A5%E6%8E%A7%E8%A1%80%E7%B3%96%23&t=31&band_rank=24&Refer=top)
1. [腿脚不便大妈来退儿子买给女友衣服](https://s.weibo.com//weibo?q=%23%E8%85%BF%E8%84%9A%E4%B8%8D%E4%BE%BF%E5%A4%A7%E5%A6%88%E6%9D%A5%E9%80%80%E5%84%BF%E5%AD%90%E4%B9%B0%E7%BB%99%E5%A5%B3%E5%8F%8B%E8%A1%A3%E6%9C%8D%23&t=31&band_rank=25&Refer=top)
1. [郑钦文以2260万美元位列世界网坛收入榜第七](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%BB%A52260%E4%B8%87%E7%BE%8E%E5%85%83%E4%BD%8D%E5%88%97%E4%B8%96%E7%95%8C%E7%BD%91%E5%9D%9B%E6%94%B6%E5%85%A5%E6%A6%9C%E7%AC%AC%E4%B8%83%23&t=31&band_rank=26&Refer=top)
1. [打了21个耳洞的耳朵](https://s.weibo.com//weibo?q=%23%E6%89%93%E4%BA%8621%E4%B8%AA%E8%80%B3%E6%B4%9E%E7%9A%84%E8%80%B3%E6%9C%B5%23&t=31&band_rank=27&Refer=top)
1. [百分之三十的爱也是爱](https://s.weibo.com//weibo?q=%E7%99%BE%E5%88%86%E4%B9%8B%E4%B8%89%E5%8D%81%E7%9A%84%E7%88%B1%E4%B9%9F%E6%98%AF%E7%88%B1&t=31&band_rank=28&Refer=top)
1. [旅行青蛙](https://s.weibo.com//weibo?q=%E6%97%85%E8%A1%8C%E9%9D%92%E8%9B%99&t=31&band_rank=29&Refer=top)
1. [C罗18次金球提名依旧领跑](https://s.weibo.com//weibo?q=%23C%E7%BD%9718%E6%AC%A1%E9%87%91%E7%90%83%E6%8F%90%E5%90%8D%E4%BE%9D%E6%97%A7%E9%A2%86%E8%B7%91%23&t=31&band_rank=30&Refer=top)
1. [萨巴伦卡抢十险胜6号种子诺斯科娃](https://s.weibo.com//weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%8A%A2%E5%8D%81%E9%99%A9%E8%83%9C6%E5%8F%B7%E7%A7%8D%E5%AD%90%E8%AF%BA%E6%96%AF%E7%A7%91%E5%A8%83%23&t=31&band_rank=31&Refer=top)
1. [低保香港演唱会事件 命运捉弄人](https://s.weibo.com//weibo?q=%E4%BD%8E%E4%BF%9D%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8B%E4%BB%B6%20%E5%91%BD%E8%BF%90%E6%8D%89%E5%BC%84%E4%BA%BA&t=31&band_rank=32&Refer=top)
1. [韩女之间正在流行的苹果派](https://s.weibo.com//weibo?q=%E9%9F%A9%E5%A5%B3%E4%B9%8B%E9%97%B4%E6%AD%A3%E5%9C%A8%E6%B5%81%E8%A1%8C%E7%9A%84%E8%8B%B9%E6%9E%9C%E6%B4%BE&t=31&band_rank=33&Refer=top)
1. [早春晴朗原版台词 只是睡了6年](https://s.weibo.com//weibo?q=%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%8E%9F%E7%89%88%E5%8F%B0%E8%AF%8D%20%E5%8F%AA%E6%98%AF%E7%9D%A1%E4%BA%866%E5%B9%B4&t=31&band_rank=34&Refer=top)
1. [整个英语体系没有比这个更完整的了](https://s.weibo.com//weibo?q=%E6%95%B4%E4%B8%AA%E8%8B%B1%E8%AF%AD%E4%BD%93%E7%B3%BB%E6%B2%A1%E6%9C%89%E6%AF%94%E8%BF%99%E4%B8%AA%E6%9B%B4%E5%AE%8C%E6%95%B4%E7%9A%84%E4%BA%86&t=31&band_rank=35&Refer=top)
1. [诺斯科娃无缘美网4强](https://s.weibo.com//weibo?q=%23%E8%AF%BA%E6%96%AF%E7%A7%91%E5%A8%83%E6%97%A0%E7%BC%98%E7%BE%8E%E7%BD%914%E5%BC%BA%23&t=31&band_rank=36&Refer=top)
1. [郑钦文vs莱巴金娜前瞻](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E5%89%8D%E7%9E%BB%23&t=31&band_rank=37&Refer=top)
1. [诺斯科娃破发萨巴伦卡](https://s.weibo.com//weibo?q=%23%E8%AF%BA%E6%96%AF%E7%A7%91%E5%A8%83%E7%A0%B4%E5%8F%91%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%23&t=31&band_rank=38&Refer=top)
1. [刘畅邓恩熙有牵手戏份](https://s.weibo.com//weibo?q=%E5%88%98%E7%95%85%E9%82%93%E6%81%A9%E7%86%99%E6%9C%89%E7%89%B5%E6%89%8B%E6%88%8F%E4%BB%BD&t=31&band_rank=39&Refer=top)
1. [张雪机车把打工人尊严焊死合同里](https://s.weibo.com//weibo?q=%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8A%8A%E6%89%93%E5%B7%A5%E4%BA%BA%E5%B0%8A%E4%B8%A5%E7%84%8A%E6%AD%BB%E5%90%88%E5%90%8C%E9%87%8C&t=31&band_rank=40&Refer=top)
1. [郑钦文 赞助商高兴坏了](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%20%E8%B5%9E%E5%8A%A9%E5%95%86%E9%AB%98%E5%85%B4%E5%9D%8F%E4%BA%86&t=31&band_rank=41&Refer=top)
1. [A股现54亿天价离婚](https://s.weibo.com//weibo?q=%23A%E8%82%A1%E7%8E%B054%E4%BA%BF%E5%A4%A9%E4%BB%B7%E7%A6%BB%E5%A9%9A%23&t=31&band_rank=42&Refer=top)
1. [梅姨长相暂不公开原因](https://s.weibo.com//weibo?q=%23%E6%A2%85%E5%A7%A8%E9%95%BF%E7%9B%B8%E6%9A%82%E4%B8%8D%E5%85%AC%E5%BC%80%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=43&Refer=top)
1. [青岛小店卖咖啡36岁以上老人2.99元](https://s.weibo.com//weibo?q=%23%E9%9D%92%E5%B2%9B%E5%B0%8F%E5%BA%97%E5%8D%96%E5%92%96%E5%95%A136%E5%B2%81%E4%BB%A5%E4%B8%8A%E8%80%81%E4%BA%BA2.99%E5%85%83%23&t=31&band_rank=44&Refer=top)
1. [Crisp预测iG晋级世界赛](https://s.weibo.com//weibo?q=%23Crisp%E9%A2%84%E6%B5%8BiG%E6%99%8B%E7%BA%A7%E4%B8%96%E7%95%8C%E8%B5%9B%23&t=31&band_rank=45&Refer=top)
1. [中国女篮 冲八强](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%20%E5%86%B2%E5%85%AB%E5%BC%BA&t=31&band_rank=46&Refer=top)
1. [金球奖30人候选名单](https://s.weibo.com//weibo?q=%E9%87%91%E7%90%83%E5%A5%9630%E4%BA%BA%E5%80%99%E9%80%89%E5%90%8D%E5%8D%95&t=31&band_rank=47&Refer=top)
1. [太子奶](https://s.weibo.com//weibo?q=%E5%A4%AA%E5%AD%90%E5%A5%B6&t=31&band_rank=48&Refer=top)
1. [巴黎圣日耳曼10人入选金球候选](https://s.weibo.com//weibo?q=%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC10%E4%BA%BA%E5%85%A5%E9%80%89%E9%87%91%E7%90%83%E5%80%99%E9%80%89&t=31&band_rank=49&Refer=top)
1. [刘青松直播聊Gimgoon](https://s.weibo.com//weibo?q=%E5%88%98%E9%9D%92%E6%9D%BE%E7%9B%B4%E6%92%AD%E8%81%8AGimgoon&t=31&band_rank=50&Refer=top)
1. [AI吃播](https://s.weibo.com//weibo?q=AI%E5%90%83%E6%92%AD&t=31&band_rank=4&Refer=top)
1. [Crisp力挺TheShy](https://s.weibo.com//weibo?q=%23Crisp%E5%8A%9B%E6%8C%BATheShy%23&t=31&band_rank=5&Refer=top)
1. [刘畅邓恩熙有牵手戏份](https://s.weibo.com//weibo?q=%E5%88%98%E7%95%85%E9%82%93%E6%81%A9%E7%86%99%E6%9C%89%E7%89%B5%E6%89%8B%E6%88%8F%E4%BB%BD&t=31&band_rank=6&Refer=top)
1. [苹果用户换华为](https://s.weibo.com//weibo?q=%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%E6%8D%A2%E5%8D%8E%E4%B8%BA&t=31&band_rank=7&Refer=top)
1. [郑钦文 冲击美网四强](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%20%E5%86%B2%E5%87%BB%E7%BE%8E%E7%BD%91%E5%9B%9B%E5%BC%BA&t=31&band_rank=8&Refer=top)
1. [医生眼里让大脑休息最好的方法](https://s.weibo.com//weibo?q=%E5%8C%BB%E7%94%9F%E7%9C%BC%E9%87%8C%E8%AE%A9%E5%A4%A7%E8%84%91%E4%BC%91%E6%81%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E6%B3%95&t=31&band_rank=9&Refer=top)
1. [金球奖](https://s.weibo.com//weibo?q=%E9%87%91%E7%90%83%E5%A5%96&t=31&band_rank=10&Refer=top)
1. [梅姨长相暂不公开原因](https://s.weibo.com//weibo?q=%23%E6%A2%85%E5%A7%A8%E9%95%BF%E7%9B%B8%E6%9A%82%E4%B8%8D%E5%85%AC%E5%BC%80%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=13&Refer=top)
1. [刘青松直播聊Gimgoon](https://s.weibo.com//weibo?q=%E5%88%98%E9%9D%92%E6%9D%BE%E7%9B%B4%E6%92%AD%E8%81%8AGimgoon&t=31&band_rank=14&Refer=top)
1. [女子还不起房贷喊话前男友收回](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E8%BF%98%E4%B8%8D%E8%B5%B7%E6%88%BF%E8%B4%B7%E5%96%8A%E8%AF%9D%E5%89%8D%E7%94%B7%E5%8F%8B%E6%94%B6%E5%9B%9E&t=31&band_rank=15&Refer=top)
1. [00后现状怎么做到全国统一的](https://s.weibo.com//weibo?q=00%E5%90%8E%E7%8E%B0%E7%8A%B6%E6%80%8E%E4%B9%88%E5%81%9A%E5%88%B0%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84&t=31&band_rank=16&Refer=top)
1. [吃紧急避孕药时机真的很关键](https://s.weibo.com//weibo?q=%E5%90%83%E7%B4%A7%E6%80%A5%E9%81%BF%E5%AD%95%E8%8D%AF%E6%97%B6%E6%9C%BA%E7%9C%9F%E7%9A%84%E5%BE%88%E5%85%B3%E9%94%AE&t=31&band_rank=17&Refer=top)
1. [特朗普一次惹了20国](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%80%E6%AC%A1%E6%83%B9%E4%BA%8620%E5%9B%BD%23&t=31&band_rank=18&Refer=top)
1. [旅行青蛙](https://s.weibo.com//weibo?q=%E6%97%85%E8%A1%8C%E9%9D%92%E8%9B%99&t=31&band_rank=19&Refer=top)
1. [华为 备用机](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%20%E5%A4%87%E7%94%A8%E6%9C%BA&t=31&band_rank=20&Refer=top)
1. [一家三口吃单人锅只点一份大闹餐厅](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%83%E5%8D%95%E4%BA%BA%E9%94%85%E5%8F%AA%E7%82%B9%E4%B8%80%E4%BB%BD%E5%A4%A7%E9%97%B9%E9%A4%90%E5%8E%85%23&t=31&band_rank=21&Refer=top)
1. [受资助女孩质问为何没打生活费](https://s.weibo.com//weibo?q=%E5%8F%97%E8%B5%84%E5%8A%A9%E5%A5%B3%E5%AD%A9%E8%B4%A8%E9%97%AE%E4%B8%BA%E4%BD%95%E6%B2%A1%E6%89%93%E7%94%9F%E6%B4%BB%E8%B4%B9&t=31&band_rank=22&Refer=top)
1. [什么是人生最顶级的享受](https://s.weibo.com//weibo?q=%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%BA%E7%94%9F%E6%9C%80%E9%A1%B6%E7%BA%A7%E7%9A%84%E4%BA%AB%E5%8F%97&t=31&band_rank=23&Refer=top)
1. [腿脚不便大妈来退儿子买给女友衣服](https://s.weibo.com//weibo?q=%23%E8%85%BF%E8%84%9A%E4%B8%8D%E4%BE%BF%E5%A4%A7%E5%A6%88%E6%9D%A5%E9%80%80%E5%84%BF%E5%AD%90%E4%B9%B0%E7%BB%99%E5%A5%B3%E5%8F%8B%E8%A1%A3%E6%9C%8D%23&t=31&band_rank=24&Refer=top)
1. [C罗18次金球提名依旧领跑](https://s.weibo.com//weibo?q=%23C%E7%BD%9718%E6%AC%A1%E9%87%91%E7%90%83%E6%8F%90%E5%90%8D%E4%BE%9D%E6%97%A7%E9%A2%86%E8%B7%91%23&t=31&band_rank=25&Refer=top)
1. [打了21个耳洞的耳朵](https://s.weibo.com//weibo?q=%23%E6%89%93%E4%BA%8621%E4%B8%AA%E8%80%B3%E6%B4%9E%E7%9A%84%E8%80%B3%E6%9C%B5%23&t=31&band_rank=26&Refer=top)
1. [一诺 菲菲](https://s.weibo.com//weibo?q=%E4%B8%80%E8%AF%BA%20%E8%8F%B2%E8%8F%B2&t=31&band_rank=27&Refer=top)
1. [C罗连续4年无缘金球奖提名](https://s.weibo.com//weibo?q=%23C%E7%BD%97%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E6%97%A0%E7%BC%98%E9%87%91%E7%90%83%E5%A5%96%E6%8F%90%E5%90%8D%23&t=31&band_rank=28&Refer=top)
1. [红果日活超爱优腾芒总和](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E6%9E%9C%E6%97%A5%E6%B4%BB%E8%B6%85%E7%88%B1%E4%BC%98%E8%85%BE%E8%8A%92%E6%80%BB%E5%92%8C%23&t=31&band_rank=29&Refer=top)
1. [吃播已成吃人的流量赛道](https://s.weibo.com//weibo?q=%23%E5%90%83%E6%92%AD%E5%B7%B2%E6%88%90%E5%90%83%E4%BA%BA%E7%9A%84%E6%B5%81%E9%87%8F%E8%B5%9B%E9%81%93%23&t=31&band_rank=30&Refer=top)
1. [低保香港演唱会事件 命运捉弄人](https://s.weibo.com//weibo?q=%E4%BD%8E%E4%BF%9D%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%8B%E4%BB%B6%20%E5%91%BD%E8%BF%90%E6%8D%89%E5%BC%84%E4%BA%BA&t=31&band_rank=31&Refer=top)
1. [意识到婴儿行为不可预测的猫](https://s.weibo.com//weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E5%A9%B4%E5%84%BF%E8%A1%8C%E4%B8%BA%E4%B8%8D%E5%8F%AF%E9%A2%84%E6%B5%8B%E7%9A%84%E7%8C%AB%23&t=31&band_rank=32&Refer=top)
1. [郑钦文 赞助商高兴坏了](https://s.weibo.com//weibo?q=%E9%83%91%E9%92%A6%E6%96%87%20%E8%B5%9E%E5%8A%A9%E5%95%86%E9%AB%98%E5%85%B4%E5%9D%8F%E4%BA%86&t=31&band_rank=33&Refer=top)
1. [郑钦文vs莱巴金娜前瞻](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E5%89%8D%E7%9E%BB%23&t=31&band_rank=34&Refer=top)
1. [无畏直播](https://s.weibo.com//weibo?q=%E6%97%A0%E7%95%8F%E7%9B%B4%E6%92%AD&t=31&band_rank=36&Refer=top)
1. [韩女之间正在流行的苹果派](https://s.weibo.com//weibo?q=%E9%9F%A9%E5%A5%B3%E4%B9%8B%E9%97%B4%E6%AD%A3%E5%9C%A8%E6%B5%81%E8%A1%8C%E7%9A%84%E8%8B%B9%E6%9E%9C%E6%B4%BE&t=31&band_rank=37&Refer=top)
1. [哈兰德贝林厄姆入选金球奖名单](https://s.weibo.com//weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E5%85%A5%E9%80%89%E9%87%91%E7%90%83%E5%A5%96%E5%90%8D%E5%8D%95%23&t=31&band_rank=38&Refer=top)
1. [郑钦文以2260万美元位列世界网坛收入榜第七](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%BB%A52260%E4%B8%87%E7%BE%8E%E5%85%83%E4%BD%8D%E5%88%97%E4%B8%96%E7%95%8C%E7%BD%91%E5%9D%9B%E6%94%B6%E5%85%A5%E6%A6%9C%E7%AC%AC%E4%B8%83%23&t=31&band_rank=39&Refer=top)
1. [洛克王国](https://s.weibo.com//weibo?q=%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD&t=31&band_rank=40&Refer=top)
1. [时之笛 Switch2](https://s.weibo.com//weibo?q=%E6%97%B6%E4%B9%8B%E7%AC%9B%20Switch2&t=31&band_rank=41&Refer=top)
1. [卢昱晓苏落薇眼妆](https://s.weibo.com//weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E8%8B%8F%E8%90%BD%E8%96%87%E7%9C%BC%E5%A6%86%23&t=31&band_rank=42&Refer=top)
1. [我的前半生](https://s.weibo.com//weibo?q=%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F&t=31&band_rank=43&Refer=top)
1. [加拿大正式报复美国](https://s.weibo.com//weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%AD%A3%E5%BC%8F%E6%8A%A5%E5%A4%8D%E7%BE%8E%E5%9B%BD%23&t=31&band_rank=44&Refer=top)
1. [虞书欣我欲乘风明年开机](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%E6%98%8E%E5%B9%B4%E5%BC%80%E6%9C%BA%23&t=31&band_rank=45&Refer=top)
1. [A股现54亿天价离婚](https://s.weibo.com//weibo?q=%23A%E8%82%A1%E7%8E%B054%E4%BA%BF%E5%A4%A9%E4%BB%B7%E7%A6%BB%E5%A9%9A%23&t=31&band_rank=46&Refer=top)
1. [张雪机车把打工人尊严焊死合同里](https://s.weibo.com//weibo?q=%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8A%8A%E6%89%93%E5%B7%A5%E4%BA%BA%E5%B0%8A%E4%B8%A5%E7%84%8A%E6%AD%BB%E5%90%88%E5%90%8C%E9%87%8C&t=31&band_rank=47&Refer=top)
1. [雷军发布会后发长文](https://s.weibo.com//weibo?q=%23%E9%9B%B7%E5%86%9B%E5%8F%91%E5%B8%83%E4%BC%9A%E5%90%8E%E5%8F%91%E9%95%BF%E6%96%87%23&t=31&band_rank=48&Refer=top)
1. [燃油车真卖不动了吗](https://s.weibo.com//weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E7%9C%9F%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%E5%90%97%23&t=31&band_rank=49&Refer=top)
1. [LGD发文恭喜iG](https://s.weibo.com//weibo?q=%23LGD%E5%8F%91%E6%96%87%E6%81%AD%E5%96%9CiG%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
