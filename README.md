# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-12 00:15:10

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
<!-- 最后更新时间 Wed Aug 12 2026 00:29:43 GMT+0800 (China Standard Time) -->

1. [女子3万全款购入宝鸡40平米住宅](https://so.toutiao.com/search?keyword=女子3万全款购入宝鸡40平米住宅)
1. [文献纪录片《江泽民》播出](https://so.toutiao.com/search?keyword=文献纪录片《江泽民》播出)
1. [全方位培养、引进、用好人才](https://so.toutiao.com/search?keyword=全方位培养、引进、用好人才)
1. [炸鸡店深夜爆单店员情绪崩溃](https://so.toutiao.com/search?keyword=炸鸡店深夜爆单店员情绪崩溃)
1. [984.5高校火了](https://so.toutiao.com/search?keyword=984.5高校火了)
1. [比亚迪2027款海豹06上市](https://so.toutiao.com/search?keyword=比亚迪2027款海豹06上市)
1. [租金从800降到450房东决定不租了](https://so.toutiao.com/search?keyword=租金从800降到450房东决定不租了)
1. [女子做核磁忘摘金手镯](https://so.toutiao.com/search?keyword=女子做核磁忘摘金手镯)
1. [36岁网红为救父亲氨气中毒去世](https://so.toutiao.com/search?keyword=36岁网红为救父亲氨气中毒去世)
1. [乌无人机为何奔袭1300公里炸俄炼油厂](https://so.toutiao.com/search?keyword=乌无人机为何奔袭1300公里炸俄炼油厂)
1. [“上海女子在台风中坠楼”不实](https://so.toutiao.com/search?keyword=“上海女子在台风中坠楼”不实)
1. [网友偶遇90岁李明启](https://so.toutiao.com/search?keyword=网友偶遇90岁李明启)
1. [《我的前半生》全网翻红](https://so.toutiao.com/search?keyword=《我的前半生》全网翻红)
1. [睡车里被酒店收150元住宿费事件反转](https://so.toutiao.com/search?keyword=睡车里被酒店收150元住宿费事件反转)
1. [中国气象局：高度警惕河南暴雨极端性](https://so.toutiao.com/search?keyword=中国气象局：高度警惕河南暴雨极端性)
1. [中国印尼将在台岛以东演练释放何信号](https://so.toutiao.com/search?keyword=中国印尼将在台岛以东演练释放何信号)
1. [印度想摆脱对华光伏依赖为何弄巧成拙](https://so.toutiao.com/search?keyword=印度想摆脱对华光伏依赖为何弄巧成拙)
1. [7月销量前十仅一款燃油车](https://so.toutiao.com/search?keyword=7月销量前十仅一款燃油车)
1. [手机NFC功能不要随便打开](https://so.toutiao.com/search?keyword=手机NFC功能不要随便打开)
1. [家属回应男子遗体滞留太平间12年](https://so.toutiao.com/search?keyword=家属回应男子遗体滞留太平间12年)
1. [978万户疯抢宇树股票](https://so.toutiao.com/search?keyword=978万户疯抢宇树股票)
1. [乘客突发心梗 地铁工作人员紧急救治](https://so.toutiao.com/search?keyword=乘客突发心梗%20地铁工作人员紧急救治)
1. [邱毅：大陆创造统一条件民进党很紧张](https://so.toutiao.com/search?keyword=邱毅：大陆创造统一条件民进党很紧张)
1. [印度航发是怎么被中国拉开差距的](https://so.toutiao.com/search?keyword=印度航发是怎么被中国拉开差距的)
1. [站岗时哨兵都会想些啥](https://so.toutiao.com/search?keyword=站岗时哨兵都会想些啥)
1. [媒体：新型黑恶势力露头就打](https://so.toutiao.com/search?keyword=媒体：新型黑恶势力露头就打)
1. [美国为何对沙土巴协议无动于衷](https://so.toutiao.com/search?keyword=美国为何对沙土巴协议无动于衷)
1. [马斯克母子强推中国游](https://so.toutiao.com/search?keyword=马斯克母子强推中国游)
1. [沪指失守3950点 资金切换到3条主线](https://so.toutiao.com/search?keyword=沪指失守3950点%20资金切换到3条主线)
1. [车辆占用他人车位一夜 车门被踹坏](https://so.toutiao.com/search?keyword=车辆占用他人车位一夜%20车门被踹坏)
1. [男子冒充交警上路拦车被拘留](https://so.toutiao.com/search?keyword=男子冒充交警上路拦车被拘留)
1. [宇树科技中签号出炉](https://so.toutiao.com/search?keyword=宇树科技中签号出炉)
1. [谁给了长鑫对苹果说“不”的底气](https://so.toutiao.com/search?keyword=谁给了长鑫对苹果说“不”的底气)
1. [为何说雪佛兰败走中国不冤](https://so.toutiao.com/search?keyword=为何说雪佛兰败走中国不冤)
1. [龙翔贪2.61亿被判死缓](https://so.toutiao.com/search?keyword=龙翔贪2.61亿被判死缓)
1. [河南10座大型水库预泄](https://so.toutiao.com/search?keyword=河南10座大型水库预泄)
1. [朋友圈评论教体局长免职被拘后续](https://so.toutiao.com/search?keyword=朋友圈评论教体局长免职被拘后续)
1. [韩国两大存储芯片巨头均上涨](https://so.toutiao.com/search?keyword=韩国两大存储芯片巨头均上涨)
1. [沈腾《欢迎来龙餐馆》拍摄地在哪](https://so.toutiao.com/search?keyword=沈腾《欢迎来龙餐馆》拍摄地在哪)
1. [朝鲜谴责日本发布“重新侵略白皮书”](https://so.toutiao.com/search?keyword=朝鲜谴责日本发布“重新侵略白皮书”)
1. [姐弟俩打架奶奶拉偏架打姐姐](https://so.toutiao.com/search?keyword=姐弟俩打架奶奶拉偏架打姐姐)
1. [贵州兴义马岭河峡谷火爆出圈](https://so.toutiao.com/search?keyword=贵州兴义马岭河峡谷火爆出圈)
1. [公交司机称开公交直达拉萨 公司回应](https://so.toutiao.com/search?keyword=公交司机称开公交直达拉萨%20公司回应)
1. [NBA揭幕战76人将挑战尼克斯](https://so.toutiao.com/search?keyword=NBA揭幕战76人将挑战尼克斯)
1. [金价冲上4400美元 黄金股为何跳水](https://so.toutiao.com/search?keyword=金价冲上4400美元%20黄金股为何跳水)
1. [世界芯片巨头为何突然“抱紧”河南](https://so.toutiao.com/search?keyword=世界芯片巨头为何突然“抱紧”河南)
1. [萨日娜的观众缘从何而来](https://so.toutiao.com/search?keyword=萨日娜的观众缘从何而来)
1. [何小鹏谈“速成车”](https://so.toutiao.com/search?keyword=何小鹏谈“速成车”)
1. [内蒙古境内重要考古发现公布](https://so.toutiao.com/search?keyword=内蒙古境内重要考古发现公布)
1. [宇树成了400亿灵心巧手的软肋吗](https://so.toutiao.com/search?keyword=宇树成了400亿灵心巧手的软肋吗)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Aug 11 2026 23:15:52 GMT+0800 (China Standard Time) -->

1. [《欢迎来龙餐馆》](https://www.zhihu.com/search?q=%E3%80%8A%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E3%80%8B)
1. [王宝强0票](https://www.zhihu.com/search?q=%E7%8E%8B%E5%AE%9D%E5%BC%BA0%E7%A5%A8)
1. [台风「白海豚」](https://www.zhihu.com/search?q=%E5%8F%B0%E9%A3%8E%E3%80%8C%E7%99%BD%E6%B5%B7%E8%B1%9A%E3%80%8D)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [055 遵义舰演习遭潜艇「击沉」](https://www.zhihu.com/search?q=055%20%E9%81%B5%E4%B9%89%E8%88%B0%E6%BC%94%E4%B9%A0%E9%81%AD%E6%BD%9C%E8%89%87%E3%80%8C%E5%87%BB%E6%B2%89%E3%80%8D)
1. [同济大学取消教师长期聘任](https://www.zhihu.com/search?q=%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%E5%8F%96%E6%B6%88%E6%95%99%E5%B8%88%E9%95%BF%E6%9C%9F%E8%81%98%E4%BB%BB)
1. [湖北宜昌进入战时状态](https://www.zhihu.com/search?q=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C%E8%BF%9B%E5%85%A5%E6%88%98%E6%97%B6%E7%8A%B6%E6%80%81)
1. [台风「白海豚」致上海无锡内涝](https://www.zhihu.com/search?q=%E5%8F%B0%E9%A3%8E%E3%80%8C%E7%99%BD%E6%B5%B7%E8%B1%9A%E3%80%8D%E8%87%B4%E4%B8%8A%E6%B5%B7%E6%97%A0%E9%94%A1%E5%86%85%E6%B6%9D)
1. [百万粉网红姜小柔因车祸去世](https://www.zhihu.com/search?q=%E7%99%BE%E4%B8%87%E7%B2%89%E7%BD%91%E7%BA%A2%E5%A7%9C%E5%B0%8F%E6%9F%94%E5%9B%A0%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96)
1. [网红巴旦木公主晒与卢本伟结婚照](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E6%99%92%E4%B8%8E%E5%8D%A2%E6%9C%AC%E4%BC%9F%E7%BB%93%E5%A9%9A%E7%85%A7)
1. [易烊千玺百花奖最佳男主角](https://www.zhihu.com/search?q=%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%E8%A7%92)
1. [贾冰私下饭局爆粗口被偷拍](https://www.zhihu.com/search?q=%E8%B4%BE%E5%86%B0%E7%A7%81%E4%B8%8B%E9%A5%AD%E5%B1%80%E7%88%86%E7%B2%97%E5%8F%A3%E8%A2%AB%E5%81%B7%E6%8B%8D)
1. [宁波警方并未证实雅典娜被害](https://www.zhihu.com/search?q=%E5%AE%81%E6%B3%A2%E8%AD%A6%E6%96%B9%E5%B9%B6%E6%9C%AA%E8%AF%81%E5%AE%9E%E9%9B%85%E5%85%B8%E5%A8%9C%E8%A2%AB%E5%AE%B3)
1. [豆包否认推荐酒店抽取 12% 佣金](https://www.zhihu.com/search?q=%E8%B1%86%E5%8C%85%E5%90%A6%E8%AE%A4%E6%8E%A8%E8%8D%90%E9%85%92%E5%BA%97%E6%8A%BD%E5%8F%96%2012%25%20%E4%BD%A3%E9%87%91)
1. [Claude黎曼猜想获重大突破](https://www.zhihu.com/search?q=Claude%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E8%8E%B7%E9%87%8D%E5%A4%A7%E7%AA%81%E7%A0%B4)
1. [睡车里被收「住宿费」反转媒体道歉](https://www.zhihu.com/search?q=%E7%9D%A1%E8%BD%A6%E9%87%8C%E8%A2%AB%E6%94%B6%E3%80%8C%E4%BD%8F%E5%AE%BF%E8%B4%B9%E3%80%8D%E5%8F%8D%E8%BD%AC%E5%AA%92%E4%BD%93%E9%81%93%E6%AD%89)
1. [中星4B卫星发射失利](https://www.zhihu.com/search?q=%E4%B8%AD%E6%98%9F4B%E5%8D%AB%E6%98%9F%E5%8F%91%E5%B0%84%E5%A4%B1%E5%88%A9)
1. [方文山方回应出轨传闻](https://www.zhihu.com/search?q=%E6%96%B9%E6%96%87%E5%B1%B1%E6%96%B9%E5%9B%9E%E5%BA%94%E5%87%BA%E8%BD%A8%E4%BC%A0%E9%97%BB)
1. [黄金](https://www.zhihu.com/search?q=%E9%BB%84%E9%87%91)
1. [费大厨撤下全国小炒肉大王称号](https://www.zhihu.com/search?q=%E8%B4%B9%E5%A4%A7%E5%8E%A8%E6%92%A4%E4%B8%8B%E5%85%A8%E5%9B%BD%E5%B0%8F%E7%82%92%E8%82%89%E5%A4%A7%E7%8E%8B%E7%A7%B0%E5%8F%B7)
1. [网红雅典娜证实被害](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E9%9B%85%E5%85%B8%E5%A8%9C%E8%AF%81%E5%AE%9E%E8%A2%AB%E5%AE%B3)
1. [百花奖获奖名单](https://www.zhihu.com/search?q=%E7%99%BE%E8%8A%B1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95)
1. [定位纠纷致外卖员被砍成植物人](https://www.zhihu.com/search?q=%E5%AE%9A%E4%BD%8D%E7%BA%A0%E7%BA%B7%E8%87%B4%E5%A4%96%E5%8D%96%E5%91%98%E8%A2%AB%E7%A0%8D%E6%88%90%E6%A4%8D%E7%89%A9%E4%BA%BA)
1. [古二曝繁花剧组涉偷税吸毒](https://www.zhihu.com/search?q=%E5%8F%A4%E4%BA%8C%E6%9B%9D%E7%B9%81%E8%8A%B1%E5%89%A7%E7%BB%84%E6%B6%89%E5%81%B7%E7%A8%8E%E5%90%B8%E6%AF%92)
1. [台风「白海豚」深入内陆](https://www.zhihu.com/search?q=%E5%8F%B0%E9%A3%8E%E3%80%8C%E7%99%BD%E6%B5%B7%E8%B1%9A%E3%80%8D%E6%B7%B1%E5%85%A5%E5%86%85%E9%99%86)
1. [武汉司门口城管摊贩冲突](https://www.zhihu.com/search?q=%E6%AD%A6%E6%B1%89%E5%8F%B8%E9%97%A8%E5%8F%A3%E5%9F%8E%E7%AE%A1%E6%91%8A%E8%B4%A9%E5%86%B2%E7%AA%81)
1. [台风白海豚](https://www.zhihu.com/search?q=%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A)
1. [第一批抱冬瓜睡觉受害者已出现](https://www.zhihu.com/search?q=%E7%AC%AC%E4%B8%80%E6%89%B9%E6%8A%B1%E5%86%AC%E7%93%9C%E7%9D%A1%E8%A7%89%E5%8F%97%E5%AE%B3%E8%80%85%E5%B7%B2%E5%87%BA%E7%8E%B0)
1. [雪佛兰退出中国市场](https://www.zhihu.com/search?q=%E9%9B%AA%E4%BD%9B%E5%85%B0%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA)
1. [第一批抱冬瓜睡觉受害者出现](https://www.zhihu.com/search?q=%E7%AC%AC%E4%B8%80%E6%89%B9%E6%8A%B1%E5%86%AC%E7%93%9C%E7%9D%A1%E8%A7%89%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0)
1. [《欢迎来龙餐馆》热映](https://www.zhihu.com/search?q=%E3%80%8A%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E3%80%8B%E7%83%AD%E6%98%A0)
1. [存款市场罕见两极分化](https://www.zhihu.com/search?q=%E5%AD%98%E6%AC%BE%E5%B8%82%E5%9C%BA%E7%BD%95%E8%A7%81%E4%B8%A4%E6%9E%81%E5%88%86%E5%8C%96)
1. [上半年国内手机销量TOP30出炉](https://www.zhihu.com/search?q=%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%9B%BD%E5%86%85%E6%89%8B%E6%9C%BA%E9%94%80%E9%87%8FTOP30%E5%87%BA%E7%82%89)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Aug 12 2026 00:15:10 GMT+0800 (China Standard Time) -->

1. [上海突如其来的大暴雨，市区很多路段全面积水，无法排出的原因是什么？](https://www.zhihu.com/question/2062262812324508200)
1. [如何看待 8 月 10 日沈腾主演电影《欢迎来龙餐馆》总票房预测值大幅提升至 35.4 亿人民币？](https://www.zhihu.com/question/2070305441545040400)
1. [5 万元以下微型车遇冷，40 万元以上新能源车热销，这说明了什么？](https://www.zhihu.com/question/2069887569639248100)
1. [为什么沈腾作为中国影史票房第一人，却金鸡、百花、华表一个奖都没拿？](https://www.zhihu.com/question/2070076711593406500)
1. [睡车里被酒店收 150 元住宿费事件反转，媒体因报道呈现不够全面客观致歉，如何避免类似事件再次发生？](https://www.zhihu.com/question/2070468397289010000)
1. [炸鸡店外卖爆单致店员压力大到崩溃痛哭，疑出现呼吸碱中毒现象，看完这一幕你想说什么？](https://www.zhihu.com/question/2070522643753563400)
1. [今年百花奖王宝强 0 票，对此你的看法是什么？](https://www.zhihu.com/question/2070427612044961800)
1. [Claude证明黎曼猜想取得了重大突破，这个事件有什么开创性意义？](https://www.zhihu.com/question/2070452772391194600)
1. [为什么武侠游戏招式名爱用"降龙十八掌"式的华丽辞藻,而西方中世纪骑士游戏招式却朴素得像说明书?](https://www.zhihu.com/question/2070098614244864800)
1. [现在年轻人都很少主动考驾照了，未来还有必要人手一本驾照吗？](https://www.zhihu.com/question/2066668547292522000)
1. [演员贾冰参加朋友饭局被偷拍，网传视频中有爆粗口、抽烟喝酒等行为，是真的吗？为什么反而被网友力挺？](https://www.zhihu.com/question/2070108326516318500)
1. [短剧演员自曝富婆带资进组演女主，给自己硬加 60 多场吻戏，短剧上线仅数日便被下架，如何看待此事？](https://www.zhihu.com/question/2069387389651215600)
1. [因为给我买车买房没提前跟我弟说，我弟把我全家都拉黑了快7年了，父子都不愿低头，怎么破冰？](https://www.zhihu.com/question/2068757535138566400)
1. [曝方文山长期婚内出轨，精神操控多位女性，方文山回应因筹拍网剧产生纠纷被投资方污蔑，具体啥情况？](https://www.zhihu.com/question/2070481032956962000)
1. [伊朗高层近期密集调整军政核心职位，是出于哪些考虑？向外界传递了怎样的信息？](https://www.zhihu.com/question/2070450417981469200)
1. [张本兄妹同时包揽 WTT 横滨冠军赛单打冠军，会对国乒的霸主地位有影响吗？国乒到底怎么了？](https://www.zhihu.com/question/2069914089296487000)
1. [16 岁少年强抱女友跳河自己上岸女友溺亡，凶手母亲包庇其 17 年，凶手及其家属可能受到哪些处罚？](https://www.zhihu.com/question/2070461199141920800)
1. [怎么看 DeepSeek 注册 Harness 公众号并选用黑鲸鱼 logo ？](https://www.zhihu.com/question/2070437867311174100)
1. [易烊千玺连续四届提名百花奖，终凭《小小的我》刘春和一角成 00 后首位百花影帝，如何评价他的表演？](https://www.zhihu.com/question/2070253242945106700)
1. [如何评价起点官方被曝禁止新人作者使用 AI 润色？否则不允许上架？](https://www.zhihu.com/question/2068955233896640800)
1. [如何看待网红「巴旦木公主」晒结婚证官宣结婚？](https://www.zhihu.com/question/2070519082533614600)
1. [媒体曝中国网红「雅典娜」确认遇害，宁波警方称并未证实其已遇害，事件真相到底如何？](https://www.zhihu.com/question/2070285462472583000)
1. [《欢迎来龙餐馆》老扎为什么没有偷偷放走徐福？](https://www.zhihu.com/question/2070475496945448000)
1. [为啥感觉麻辣烫越来越贵，而自助小火锅却在越卷越便宜？同样是汤煮菜，为啥会出现这样的差异？](https://www.zhihu.com/question/2067711801098069800)
1. [如何评价《欢迎来龙餐馆》里的角色赛夫？](https://www.zhihu.com/question/2069840201854227500)
1. [黄霄雲直播说自己从极其普通家庭里面出来的，是真的吗？](https://www.zhihu.com/question/405358746)
1. [曾经的钢琴为雅，现在怎么感觉没什么人愿意练钢琴了？](https://www.zhihu.com/question/1998873387645305600)
1. [费大厨撤下「全国小炒肉大王」 宣传，上菜口号更换为 「精选黑猪肉、专业大厨炒」，此举带来的影响有多大？](https://www.zhihu.com/question/2070112824437876500)
1. [如何评价黄景瑜、蒋奇明主演的法治剧《重器》？](https://www.zhihu.com/question/2070202797971039500)
1. [据称美「爱国者」导弹库存不足 1700 枚，美国军工生产力为何短缺？可能对美伊战争有哪些影响？](https://www.zhihu.com/question/2070161196481778000)

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
<!-- 最后更新时间 Wed Aug 12 2026 00:15:51 GMT+0800 (China Standard Time) -->

1. [习近平就哥伦比亚强烈地震致慰问电](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%B0%B1%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%E5%BC%BA%E7%83%88%E5%9C%B0%E9%9C%87%E8%87%B4%E6%85%B0%E9%97%AE%E7%94%B5%23&Refer=new_time)
1. [曝赵一鸣4块牛肉干64元复称仅17元](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%B5%B5%E4%B8%80%E9%B8%A34%E5%9D%97%E7%89%9B%E8%82%89%E5%B9%B264%E5%85%83%E5%A4%8D%E7%A7%B0%E4%BB%8517%E5%85%83%23&t=31&band_rank=1&Refer=top)
1. [忙到晕倒炸鸡店员工已结算工资离职](https://s.weibo.com//weibo?q=%23%E5%BF%99%E5%88%B0%E6%99%95%E5%80%92%E7%82%B8%E9%B8%A1%E5%BA%97%E5%91%98%E5%B7%A5%E5%B7%B2%E7%BB%93%E7%AE%97%E5%B7%A5%E8%B5%84%E7%A6%BB%E8%81%8C%23&t=31&band_rank=2&Refer=top)
1. [请查收这份暴雨天避险指南](https://s.weibo.com//weibo?q=%23%E8%AF%B7%E6%9F%A5%E6%94%B6%E8%BF%99%E4%BB%BD%E6%9A%B4%E9%9B%A8%E5%A4%A9%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%23&t=31&band_rank=3&Refer=top)
1. [曝刺棠女主换成杨超越了](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%A5%B3%E4%B8%BB%E6%8D%A2%E6%88%90%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%BA%86%23&t=31&band_rank=4&Refer=top)
1. [樊振东WTT冠军榜位列第二](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9CWTT%E5%86%A0%E5%86%9B%E6%A6%9C%E4%BD%8D%E5%88%97%E7%AC%AC%E4%BA%8C%23&t=31&band_rank=5&Refer=top)
1. [建议女生不要在网上过度分享](https://s.weibo.com//weibo?q=%E5%BB%BA%E8%AE%AE%E5%A5%B3%E7%94%9F%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%BD%91%E4%B8%8A%E8%BF%87%E5%BA%A6%E5%88%86%E4%BA%AB&t=31&band_rank=6&Refer=top)
1. [贺峻霖向往的生活常驻](https://s.weibo.com//weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%90%91%E5%BE%80%E7%9A%84%E7%94%9F%E6%B4%BB%E5%B8%B8%E9%A9%BB%23&t=31&band_rank=7&Refer=top)
1. [龙餐馆豆瓣开分8.4](https://s.weibo.com//weibo?q=%E9%BE%99%E9%A4%90%E9%A6%86%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%868.4&t=31&band_rank=8&Refer=top)
1. [恢复生命力只需要一些低成本爱好](https://s.weibo.com//weibo?q=%E6%81%A2%E5%A4%8D%E7%94%9F%E5%91%BD%E5%8A%9B%E5%8F%AA%E9%9C%80%E8%A6%81%E4%B8%80%E4%BA%9B%E4%BD%8E%E6%88%90%E6%9C%AC%E7%88%B1%E5%A5%BD&t=31&band_rank=9&Refer=top)
1. [小菜园致歉](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E8%8F%9C%E5%9B%AD%E8%87%B4%E6%AD%89%23&t=31&band_rank=10&Refer=top)
1. [妻子孕晚期出轨博士后写道歉信](https://s.weibo.com//weibo?q=%23%E5%A6%BB%E5%AD%90%E5%AD%95%E6%99%9A%E6%9C%9F%E5%87%BA%E8%BD%A8%E5%8D%9A%E5%A3%AB%E5%90%8E%E5%86%99%E9%81%93%E6%AD%89%E4%BF%A1%23&t=31&band_rank=11&Refer=top)
1. [白鹿的带货能力](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E5%B8%A6%E8%B4%A7%E8%83%BD%E5%8A%9B%23&t=31&band_rank=12&Refer=top)
1. [KPL电竞少年结束巴黎之行](https://s.weibo.com//weibo?q=%23KPL%E7%94%B5%E7%AB%9E%E5%B0%91%E5%B9%B4%E7%BB%93%E6%9D%9F%E5%B7%B4%E9%BB%8E%E4%B9%8B%E8%A1%8C%23&t=31&band_rank=13&Refer=top)
1. [丁程鑫录制好六提前离场](https://s.weibo.com//weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BD%95%E5%88%B6%E5%A5%BD%E5%85%AD%E6%8F%90%E5%89%8D%E7%A6%BB%E5%9C%BA%23&t=31&band_rank=14&Refer=top)
1. [男子直播淫秽内容获利0.1元被判刑](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E7%9B%B4%E6%92%AD%E6%B7%AB%E7%A7%BD%E5%86%85%E5%AE%B9%E8%8E%B7%E5%88%A90.1%E5%85%83%E8%A2%AB%E5%88%A4%E5%88%91%23&t=31&band_rank=15&Refer=top)
1. [欢迎来龙餐馆](https://s.weibo.com//weibo?q=%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86&t=31&band_rank=16&Refer=top)
1. [巴旦木公主晒结婚证](https://s.weibo.com//weibo?q=%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E6%99%92%E7%BB%93%E5%A9%9A%E8%AF%81&t=31&band_rank=17&Refer=top)
1. [曝卢昱晓不演刺棠进七星彩](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%8D%E6%BC%94%E5%88%BA%E6%A3%A0%E8%BF%9B%E4%B8%83%E6%98%9F%E5%BD%A9%23&t=31&band_rank=18&Refer=top)
1. [叙利亚前总统被判死刑](https://s.weibo.com//weibo?q=%23%E5%8F%99%E5%88%A9%E4%BA%9A%E5%89%8D%E6%80%BB%E7%BB%9F%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23&t=31&band_rank=19&Refer=top)
1. [王橹杰陈思罕双人舞台](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%99%88%E6%80%9D%E7%BD%95%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0&t=31&band_rank=20&Refer=top)
1. [哪吒获奖台下嘉宾反应冷淡原因](https://s.weibo.com//weibo?q=%E5%93%AA%E5%90%92%E8%8E%B7%E5%A5%96%E5%8F%B0%E4%B8%8B%E5%98%89%E5%AE%BE%E5%8F%8D%E5%BA%94%E5%86%B7%E6%B7%A1%E5%8E%9F%E5%9B%A0&t=31&band_rank=21&Refer=top)
1. [胚胎案妻子遭短信轰炸](https://s.weibo.com//weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E9%81%AD%E7%9F%AD%E4%BF%A1%E8%BD%B0%E7%82%B8%23&t=31&band_rank=22&Refer=top)
1. [杨洋陈都灵 等风热吻你](https://s.weibo.com//weibo?q=%E6%9D%A8%E6%B4%8B%E9%99%88%E9%83%BD%E7%81%B5%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0&t=31&band_rank=23&Refer=top)
1. [宁艺卓solo第二套高定](https://s.weibo.com//weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93solo%E7%AC%AC%E4%BA%8C%E5%A5%97%E9%AB%98%E5%AE%9A%23&t=31&band_rank=24&Refer=top)
1. [现在的增程车突然能加92了](https://s.weibo.com//weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%A2%9E%E7%A8%8B%E8%BD%A6%E7%AA%81%E7%84%B6%E8%83%BD%E5%8A%A092%E4%BA%86%23&t=31&band_rank=25&Refer=top)
1. [王橹杰陈浚铭虚拟彩排](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%99%88%E6%B5%9A%E9%93%AD%E8%99%9A%E6%8B%9F%E5%BD%A9%E6%8E%92%23&t=31&band_rank=26&Refer=top)
1. [男子上班脑出血家属无奈拔管后死亡](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8A%E7%8F%AD%E8%84%91%E5%87%BA%E8%A1%80%E5%AE%B6%E5%B1%9E%E6%97%A0%E5%A5%88%E6%8B%94%E7%AE%A1%E5%90%8E%E6%AD%BB%E4%BA%A1%23&t=31&band_rank=27&Refer=top)
1. [七星彩](https://s.weibo.com//weibo?q=%E4%B8%83%E6%98%9F%E5%BD%A9&t=31&band_rank=28&Refer=top)
1. [哪吒159亿票房为何换不来全体起立](https://s.weibo.com//weibo?q=%23%E5%93%AA%E5%90%92159%E4%BA%BF%E7%A5%A8%E6%88%BF%E4%B8%BA%E4%BD%95%E6%8D%A2%E4%B8%8D%E6%9D%A5%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23&t=31&band_rank=29&Refer=top)
1. [台风白海豚](https://s.weibo.com//weibo?q=%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A&t=31&band_rank=30&Refer=top)
1. [娜扎上户口的时候名字多打字了](https://s.weibo.com//weibo?q=%23%E5%A8%9C%E6%89%8E%E4%B8%8A%E6%88%B7%E5%8F%A3%E7%9A%84%E6%97%B6%E5%80%99%E5%90%8D%E5%AD%97%E5%A4%9A%E6%89%93%E5%AD%97%E4%BA%86%23&t=31&band_rank=31&Refer=top)
1. [一诺巴黎之行正式落幕](https://s.weibo.com//weibo?q=%23%E4%B8%80%E8%AF%BA%E5%B7%B4%E9%BB%8E%E4%B9%8B%E8%A1%8C%E6%AD%A3%E5%BC%8F%E8%90%BD%E5%B9%95%23&t=31&band_rank=32&Refer=top)
1. [杨幂粤语是跟小糯米学的吗](https://s.weibo.com//weibo?q=%E6%9D%A8%E5%B9%82%E7%B2%A4%E8%AF%AD%E6%98%AF%E8%B7%9F%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%AD%A6%E7%9A%84%E5%90%97&t=31&band_rank=33&Refer=top)
1. [宇树科技中签者发声](https://s.weibo.com//weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%E8%80%85%E5%8F%91%E5%A3%B0%23&t=31&band_rank=34&Refer=top)
1. [北京暴雨](https://s.weibo.com//weibo?q=%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8&t=31&band_rank=35&Refer=top)
1. [熊黛林双胞胎女儿颜值](https://s.weibo.com//weibo?q=%23%E7%86%8A%E9%BB%9B%E6%9E%97%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%23&t=31&band_rank=36&Refer=top)
1. [我听交警的涉事女子道歉赔偿](https://s.weibo.com//weibo?q=%23%E6%88%91%E5%90%AC%E4%BA%A4%E8%AD%A6%E7%9A%84%E6%B6%89%E4%BA%8B%E5%A5%B3%E5%AD%90%E9%81%93%E6%AD%89%E8%B5%94%E5%81%BF%23&t=31&band_rank=37&Refer=top)
1. [NBA圣诞大战](https://s.weibo.com//weibo?q=NBA%E5%9C%A3%E8%AF%9E%E5%A4%A7%E6%88%98&t=31&band_rank=38&Refer=top)
1. [时代峰峻澄清张极嫂子传闻](https://s.weibo.com//weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%BE%84%E6%B8%85%E5%BC%A0%E6%9E%81%E5%AB%82%E5%AD%90%E4%BC%A0%E9%97%BB%23&t=31&band_rank=39&Refer=top)
1. [曝唐探4肖央主演王宝强客串](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%94%90%E6%8E%A24%E8%82%96%E5%A4%AE%E4%B8%BB%E6%BC%94%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%AE%A2%E4%B8%B2%23&t=31&band_rank=40&Refer=top)
1. [燃油车为什么卖不动了](https://s.weibo.com//weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [红米K100Pro系列价格](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E7%B1%B3K100Pro%E7%B3%BB%E5%88%97%E4%BB%B7%E6%A0%BC%23&t=31&band_rank=42&Refer=top)
1. [加拿大偶遇郑恺苗苗](https://s.weibo.com//weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%81%B6%E9%81%87%E9%83%91%E6%81%BA%E8%8B%97%E8%8B%97%23&t=31&band_rank=43&Refer=top)
1. [张婉婷疑似怀三胎了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E7%96%91%E4%BC%BC%E6%80%80%E4%B8%89%E8%83%8E%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [失望性情感隔离](https://s.weibo.com//weibo?q=%E5%A4%B1%E6%9C%9B%E6%80%A7%E6%83%85%E6%84%9F%E9%9A%94%E7%A6%BB&t=31&band_rank=45&Refer=top)
1. [日本篡改历史被反噬了](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E7%AF%A1%E6%94%B9%E5%8E%86%E5%8F%B2%E8%A2%AB%E5%8F%8D%E5%99%AC%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [夫妻结婚40年都AA制丈夫在家装监控](https://s.weibo.com//weibo?q=%23%E5%A4%AB%E5%A6%BB%E7%BB%93%E5%A9%9A40%E5%B9%B4%E9%83%BDAA%E5%88%B6%E4%B8%88%E5%A4%AB%E5%9C%A8%E5%AE%B6%E8%A3%85%E7%9B%91%E6%8E%A7%23&t=31&band_rank=47&Refer=top)
1. [无言 古堡很浪漫](https://s.weibo.com//weibo?q=%E6%97%A0%E8%A8%80%20%E5%8F%A4%E5%A0%A1%E5%BE%88%E6%B5%AA%E6%BC%AB&t=31&band_rank=48&Refer=top)
1. [白鹿直播七分钟人数破500万](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B4%E6%92%AD%E4%B8%83%E5%88%86%E9%92%9F%E4%BA%BA%E6%95%B0%E7%A0%B4500%E4%B8%87%23&t=31&band_rank=49&Refer=top)
1. [海力士重启中国NAND闪存工厂建设](https://s.weibo.com//weibo?q=%23%E6%B5%B7%E5%8A%9B%E5%A3%AB%E9%87%8D%E5%90%AF%E4%B8%AD%E5%9B%BDNAND%E9%97%AA%E5%AD%98%E5%B7%A5%E5%8E%82%E5%BB%BA%E8%AE%BE%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
