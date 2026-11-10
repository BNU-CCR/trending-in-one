# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-10 09:33:10

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
<!-- 最后更新时间 Tue Nov 10 2026 09:45:31 GMT+0800 (China Standard Time) -->

1. [桂林成立调查组核查天桥扶梯问题](https://so.toutiao.com/search?keyword=桂林成立调查组核查天桥扶梯问题)
1. [特朗普称没必要再对伊朗采取军事行动](https://so.toutiao.com/search?keyword=特朗普称没必要再对伊朗采取军事行动)
1. [三大变化折射进博会开放新内涵](https://so.toutiao.com/search?keyword=三大变化折射进博会开放新内涵)
1. [美股三大指数集体收涨](https://so.toutiao.com/search?keyword=美股三大指数集体收涨)
1. [特朗普：不希望美在AI领域落后中国](https://so.toutiao.com/search?keyword=特朗普：不希望美在AI领域落后中国)
1. [山姆为何低价甩卖始祖鸟加拿大鹅](https://so.toutiao.com/search?keyword=山姆为何低价甩卖始祖鸟加拿大鹅)
1. [猪肉又便宜了](https://so.toutiao.com/search?keyword=猪肉又便宜了)
1. [油价预计将大幅下调](https://so.toutiao.com/search?keyword=油价预计将大幅下调)
1. [厦金大桥（厦门段）海上主线桥贯通](https://so.toutiao.com/search?keyword=厦金大桥（厦门段）海上主线桥贯通)
1. [女子买7元早餐发现卡里近26万没了](https://so.toutiao.com/search?keyword=女子买7元早餐发现卡里近26万没了)
1. [中央网信办整治科普健康类网络谣言](https://so.toutiao.com/search?keyword=中央网信办整治科普健康类网络谣言)
1. [迪丽热巴爸爸20分钟卖了7000单苹果](https://so.toutiao.com/search?keyword=迪丽热巴爸爸20分钟卖了7000单苹果)
1. [高叶哽咽回应金鸡提名](https://so.toutiao.com/search?keyword=高叶哽咽回应金鸡提名)
1. [隋俊波称新剧《谷雨》是惊喜](https://so.toutiao.com/search?keyword=隋俊波称新剧《谷雨》是惊喜)
1. [许飞：我作茧自缚](https://so.toutiao.com/search?keyword=许飞：我作茧自缚)
1. [澳华人社团为遇害骑手筹款51万澳元](https://so.toutiao.com/search?keyword=澳华人社团为遇害骑手筹款51万澳元)
1. [柯文哲喊话赖当局不该制造社会对立](https://so.toutiao.com/search?keyword=柯文哲喊话赖当局不该制造社会对立)
1. [云南昭通农户草莓大棚因积雪倒塌受损](https://so.toutiao.com/search?keyword=云南昭通农户草莓大棚因积雪倒塌受损)
1. [云南等地多阴雨 新疆等地多雨雪](https://so.toutiao.com/search?keyword=云南等地多阴雨%20新疆等地多雨雪)
1. [俄常驻联合国代表称不接受冻结乌冲突](https://so.toutiao.com/search?keyword=俄常驻联合国代表称不接受冻结乌冲突)
1. [中方驳斥黄仁勋出轨女子为中国工作](https://so.toutiao.com/search?keyword=中方驳斥黄仁勋出轨女子为中国工作)
1. [王楚钦发文反思：重新审视自己](https://so.toutiao.com/search?keyword=王楚钦发文反思：重新审视自己)
1. [大连夺冠多家餐饮店自发免单让利](https://so.toutiao.com/search?keyword=大连夺冠多家餐饮店自发免单让利)
1. [王健林再任万达商管董事长释放何信号](https://so.toutiao.com/search?keyword=王健林再任万达商管董事长释放何信号)
1. [菲外交部就涉华言论敲打防长](https://so.toutiao.com/search?keyword=菲外交部就涉华言论敲打防长)
1. [徐艺洋见面会上随机舞蹈秀](https://so.toutiao.com/search?keyword=徐艺洋见面会上随机舞蹈秀)
1. [中国乒协公布2026混团世界杯参赛名单](https://so.toutiao.com/search?keyword=中国乒协公布2026混团世界杯参赛名单)
1. [辛芷蕾亮相W盛典晚宴](https://so.toutiao.com/search?keyword=辛芷蕾亮相W盛典晚宴)
1. [美众议员要求弹劾防长 特朗普发声](https://so.toutiao.com/search?keyword=美众议员要求弹劾防长%20特朗普发声)
1. [菲总统表弟入狱了还有私人助理陪](https://so.toutiao.com/search?keyword=菲总统表弟入狱了还有私人助理陪)
1. [DeepSeek把战场搬到了“驾驭层”](https://so.toutiao.com/search?keyword=DeepSeek把战场搬到了“驾驭层”)
1. [斯诺克冠中冠韦克林闯进四强](https://so.toutiao.com/search?keyword=斯诺克冠中冠韦克林闯进四强)
1. [哈尔滨烤地瓜原价1688到手8元](https://so.toutiao.com/search?keyword=哈尔滨烤地瓜原价1688到手8元)
1. [谷歌被曝向英伟达发起挑战](https://so.toutiao.com/search?keyword=谷歌被曝向英伟达发起挑战)
1. [谢文能右眼受伤](https://so.toutiao.com/search?keyword=谢文能右眼受伤)
1. [美国10月CPI增速或明显放缓](https://so.toutiao.com/search?keyword=美国10月CPI增速或明显放缓)
1. [专家：AI已越过“超级智能逃逸速度”](https://so.toutiao.com/search?keyword=专家：AI已越过“超级智能逃逸速度”)
1. [郭艾伦谈维金斯打球风格](https://so.toutiao.com/search?keyword=郭艾伦谈维金斯打球风格)
1. [猪油被称“心血管杀手”冤不冤](https://so.toutiao.com/search?keyword=猪油被称“心血管杀手”冤不冤)
1. [蒋龙金鸡奖提名感慨此生无憾](https://so.toutiao.com/search?keyword=蒋龙金鸡奖提名感慨此生无憾)
1. [NBA官宣周最佳球员](https://so.toutiao.com/search?keyword=NBA官宣周最佳球员)
1. [三大指数集体高开 创业板指高开2.44%](https://so.toutiao.com/search?keyword=三大指数集体高开%20创业板指高开2.44%)
1. [演员高圆圆亮相金鸡华语电影之夜](https://so.toutiao.com/search?keyword=演员高圆圆亮相金鸡华语电影之夜)
1. [民办小学虚构物资紧缺持续索捐](https://so.toutiao.com/search?keyword=民办小学虚构物资紧缺持续索捐)
1. [媒体人谈蓉城拒绝拍摄夺冠纪录片](https://so.toutiao.com/search?keyword=媒体人谈蓉城拒绝拍摄夺冠纪录片)
1. [黄国昌再追苏巧慧家族贪腐丑闻](https://so.toutiao.com/search?keyword=黄国昌再追苏巧慧家族贪腐丑闻)
1. [媒体谈AI生成“古代监控录像”](https://so.toutiao.com/search?keyword=媒体谈AI生成“古代监控录像”)
1. [演员王雷跪地庆祝大连英博夺冠](https://so.toutiao.com/search?keyword=演员王雷跪地庆祝大连英博夺冠)
1. [片仔癀财报释放什么信号](https://so.toutiao.com/search?keyword=片仔癀财报释放什么信号)
1. [警惕日本加快进攻性武器部署](https://so.toutiao.com/search?keyword=警惕日本加快进攻性武器部署)
1. [全球股市集体拉升 原油直线闪崩](https://so.toutiao.com/search?keyword=全球股市集体拉升%20原油直线闪崩)
1. [英伟达巨额货物失踪哪些细节值得推敲](https://so.toutiao.com/search?keyword=英伟达巨额货物失踪哪些细节值得推敲)
1. [老人立遗嘱将6亿遗产留给再婚妻子](https://so.toutiao.com/search?keyword=老人立遗嘱将6亿遗产留给再婚妻子)
1. [中方回应外媒涉60万枚英伟达芯片报道](https://so.toutiao.com/search?keyword=中方回应外媒涉60万枚英伟达芯片报道)
1. [攻击-11无人机：歼20的黄金搭档](https://so.toutiao.com/search?keyword=攻击-11无人机：歼20的黄金搭档)
1. [《谷雨》收视播放多榜登顶](https://so.toutiao.com/search?keyword=《谷雨》收视播放多榜登顶)
1. [英伟达股价盘初下跌8.8%](https://so.toutiao.com/search?keyword=英伟达股价盘初下跌8.8%)
1. [大二女生称AI毁了她的计算机学位](https://so.toutiao.com/search?keyword=大二女生称AI毁了她的计算机学位)
1. [你有没有单独花超100元吃一顿饭](https://so.toutiao.com/search?keyword=你有没有单独花超100元吃一顿饭)
1. [国产AI芯片加速蚕食英伟达市场](https://so.toutiao.com/search?keyword=国产AI芯片加速蚕食英伟达市场)
1. [6人餐消费51万？饭店称小票系伪造](https://so.toutiao.com/search?keyword=6人餐消费51万？饭店称小票系伪造)
1. [10月汽车市场发生了哪些变化](https://so.toutiao.com/search?keyword=10月汽车市场发生了哪些变化)
1. [山姆正在被自己赶下神坛吗](https://so.toutiao.com/search?keyword=山姆正在被自己赶下神坛吗)
1. [网友海边偶遇赵丽颖](https://so.toutiao.com/search?keyword=网友海边偶遇赵丽颖)
1. [运动会上小女孩在场下自信舞蹈](https://so.toutiao.com/search?keyword=运动会上小女孩在场下自信舞蹈)
1. [评论员：日本越来越多企业押注军工](https://so.toutiao.com/search?keyword=评论员：日本越来越多企业押注军工)
1. [浙江成都相继官宣阿洛伊西兄弟离任](https://so.toutiao.com/search?keyword=浙江成都相继官宣阿洛伊西兄弟离任)
1. [美国普通人为何拼命反对AI数据中心](https://so.toutiao.com/search?keyword=美国普通人为何拼命反对AI数据中心)
1. [菲律宾敲打防长的声明有何意义](https://so.toutiao.com/search?keyword=菲律宾敲打防长的声明有何意义)
1. [朱之文称黑粉打电话求和](https://so.toutiao.com/search?keyword=朱之文称黑粉打电话求和)
1. [刀锋球迷会：请有关部门严查蓉城问题](https://so.toutiao.com/search?keyword=刀锋球迷会：请有关部门严查蓉城问题)
1. [伊朗称在霍尔木兹海峡摧毁敌导航系统](https://so.toutiao.com/search?keyword=伊朗称在霍尔木兹海峡摧毁敌导航系统)
1. [程靖淇：不能把问题都归于王楚钦一人](https://so.toutiao.com/search?keyword=程靖淇：不能把问题都归于王楚钦一人)
1. [刘诗诗复古名伶造型](https://so.toutiao.com/search?keyword=刘诗诗复古名伶造型)
1. [吴艳妮分享拉伸干货](https://so.toutiao.com/search?keyword=吴艳妮分享拉伸干货)
1. [A股新一轮行情还立得住吗](https://so.toutiao.com/search?keyword=A股新一轮行情还立得住吗)
1. [梁家辉独乘高铁奔赴金鸡奖颁奖典礼](https://so.toutiao.com/search?keyword=梁家辉独乘高铁奔赴金鸡奖颁奖典礼)
1. [超节点走向规模交付意味着什么](https://so.toutiao.com/search?keyword=超节点走向规模交付意味着什么)
1. [白敬亭走红毯戴毛帽子](https://so.toutiao.com/search?keyword=白敬亭走红毯戴毛帽子)
1. [苏见信调侃掰的馍大小适配自己个子](https://so.toutiao.com/search?keyword=苏见信调侃掰的馍大小适配自己个子)
1. [攻击-11实弹发射首发命中](https://so.toutiao.com/search?keyword=攻击-11实弹发射首发命中)
1. [李若彤与赵雅芝活动同框](https://so.toutiao.com/search?keyword=李若彤与赵雅芝活动同框)
1. [王传君称自己曾是讨好型人格](https://so.toutiao.com/search?keyword=王传君称自己曾是讨好型人格)
1. [中方继续暂停对5家美相关子公司反制](https://so.toutiao.com/search?keyword=中方继续暂停对5家美相关子公司反制)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Nov 10 2026 09:29:36 GMT+0800 (China Standard Time) -->

1. [黄仁勋承认婚外情](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%89%BF%E8%AE%A4%E5%A9%9A%E5%A4%96%E6%83%85)
1. [黄渤自曝今年几乎没戏拍](https://www.zhihu.com/search?q=%E9%BB%84%E6%B8%A4%E8%87%AA%E6%9B%9D%E4%BB%8A%E5%B9%B4%E5%87%A0%E4%B9%8E%E6%B2%A1%E6%88%8F%E6%8B%8D)
1. [BLG 3-1 T1](https://www.zhihu.com/search?q=BLG%203-1%20T1)
1. [黄仁勋或被英伟达免职](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%88%96%E8%A2%AB%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%85%8D%E8%81%8C)
1. [黄仁勋否认交往中国女间谍](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E5%90%A6%E8%AE%A4%E4%BA%A4%E5%BE%80%E4%B8%AD%E5%9B%BD%E5%A5%B3%E9%97%B4%E8%B0%8D)
1. [胖东来回应洗发水被指产地造假](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94%E6%B4%97%E5%8F%91%E6%B0%B4%E8%A2%AB%E6%8C%87%E4%BA%A7%E5%9C%B0%E9%80%A0%E5%81%87)
1. [杭州警方通报致 2 死刑案](https://www.zhihu.com/search?q=%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E8%87%B4%202%20%E6%AD%BB%E5%88%91%E6%A1%88)
1. [知乎好奇岛装扮游戏](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E5%A5%BD%E5%A5%87%E5%B2%9B%E8%A3%85%E6%89%AE%E6%B8%B8%E6%88%8F)
1. [疑似秦始皇儿子头骨面容被复原](https://www.zhihu.com/search?q=%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E5%A4%B4%E9%AA%A8%E9%9D%A2%E5%AE%B9%E8%A2%AB%E5%A4%8D%E5%8E%9F)
1. [山西太原一公寓火灾致14死](https://www.zhihu.com/search?q=%E5%B1%B1%E8%A5%BF%E5%A4%AA%E5%8E%9F%E4%B8%80%E5%85%AC%E5%AF%93%E7%81%AB%E7%81%BE%E8%87%B414%E6%AD%BB)
1. [王楚钦发文反思总结](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E6%96%87%E5%8F%8D%E6%80%9D%E6%80%BB%E7%BB%93)
1. [李一桐疑下场开撕芒果台](https://www.zhihu.com/search?q=%E6%9D%8E%E4%B8%80%E6%A1%90%E7%96%91%E4%B8%8B%E5%9C%BA%E5%BC%80%E6%92%95%E8%8A%92%E6%9E%9C%E5%8F%B0)
1. [曝某新能源车被曝前后轮毂装反](https://www.zhihu.com/search?q=%E6%9B%9D%E6%9F%90%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E8%A2%AB%E6%9B%9D%E5%89%8D%E5%90%8E%E8%BD%AE%E6%AF%82%E8%A3%85%E5%8F%8D)
1. [大连英博夺得中超冠军](https://www.zhihu.com/search?q=%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%E5%A4%BA%E5%BE%97%E4%B8%AD%E8%B6%85%E5%86%A0%E5%86%9B)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Nov 10 2026 09:33:10 GMT+0800 (China Standard Time) -->

1. [胖东来发布系统化问题处理标准，称赔到破产也要坚守原则，落地难点在哪？](https://www.zhihu.com/question/2102955820770125600)
1. [疑似秦始皇儿子头骨面容被复原，男子死时约30岁，头骨右颞骨中嵌有一枚青铜箭头，哪些细节值得关注？](https://www.zhihu.com/question/2102853586312849200)
1. [女子设置失误，5年给邻居充了近6000元话费，发觉后要求返还被拒，法院判定应全部返还，如何看待此事？](https://www.zhihu.com/question/2100595201832116500)
1. [山姆多款始祖鸟加拿大鹅被抢空，有商品比官方便宜近5000元，为什么能卖这么便宜？背后是怎样的商业策略？](https://www.zhihu.com/question/2102852244009744000)
1. [女儿兴高采烈地向爸爸述说第一笔工资的用途，全是用来买她喜爱的东西，一分都不考虑家长。这个问题怎么看？](https://www.zhihu.com/question/2081714595043993600)
1. [广东妈妈认为“山东饭”能长高，坚持为6岁儿子做疙瘩汤、煎饼等，一月后长高1.3厘米，山东饭这么神奇吗？](https://www.zhihu.com/question/2103126074590871600)
1. [哈工大硕士毕业后创业失败，如今在街头卖气球，被人质疑「浪费资源」，如何评价他的选择？真的是浪费资源吗？](https://www.zhihu.com/question/2102480088411419100)
1. [Faker 无缘四连冠，赛后镜头捕捉其释怀笑容，对此你有什么想说的？](https://www.zhihu.com/question/2103089913650312700)
1. [动物都知道躲避天敌，而为什么几千年了，昆虫还是不知道躲着人类？](https://www.zhihu.com/question/2017588180904346600)
1. [如何看待蓉城博主发文「请成都纪委介入调查成都蓉城可能存在的违法违纪行为」？](https://www.zhihu.com/question/2103131292707415300)
1. [Claude Fable 5.2 正式发布了，大家怎么看它的实际能力和性价比？](https://www.zhihu.com/question/2103352437654475000)
1. [巴拉圭韦诺银行爆雷致 300 万人无法取款，总统遭弹劾被捕，这场危机快速失控的核心原因是什么？](https://www.zhihu.com/question/2102495730837595100)
1. [马和驴交配的时候在想什么？他们会觉得彼此符合自己的择偶标准吗？他们又是如何看待骡子的呢？](https://www.zhihu.com/question/12971345454)
1. [投入几个亿开五星级酒店的人，这辈子能把钱赚回来吗？](https://www.zhihu.com/question/430168669)
1. [伊朗向特朗普发48小时最后通牒，要么接受德黑兰提出的最新方案，要么面临军事冲突升级，特朗普会如何选择？](https://www.zhihu.com/question/2103246242599756300)
1. [英伟达单日市值蒸发 1.2 万亿元，是市场过度反应了吗？](https://www.zhihu.com/question/2103080219653268200)
1. [陕西西咸新区一政务服务中心门头遭挖掘机破坏，嫌疑人已被采取刑事强制措施，无人员受伤，具体情况如何？](https://www.zhihu.com/question/2103200947187012000)
1. [S16总决赛由BLG迎战GEN，你会看好哪一方？](https://www.zhihu.com/question/2103068085720828000)
1. [男子月薪过万公司按 4 千基数缴社保被裁后追讨，暴露了哪些问题？该如何维权？](https://www.zhihu.com/question/2102726671300408300)
1. [代号「玄龙」的攻击-11 隐身无人机公开亮相，这一无人机有哪些细节值得关注？将如何影响未来空战？](https://www.zhihu.com/question/2103123453817656000)
1. [媒体称黄仁勋或被英伟达免职，免职可能性大吗？若因调查离任，英伟达将由谁接管？](https://www.zhihu.com/question/2103217477421201200)
1. [怎么看崔添翼说 DeepSeek Harness 的目标是成为 Agent 时代的操作系统？](https://www.zhihu.com/question/2102892502852358400)
1. [为什么 Doran 仍然是那个 Doran，S16 全球总决赛 T1 带不动他了？](https://www.zhihu.com/question/2103060366867555300)
1. [河南财大就「教师赵某彦被举报性骚扰女生」一事发布通报，称已成立专项调查组，事件有哪些值得关注的信息？](https://www.zhihu.com/question/2103083334569911300)
1. [怎么看大学里动不动就整个上午或下午没课的空闲状态？是否应该像高中那样排满课、多布置作业才算没荒废时间？](https://www.zhihu.com/question/2101155408748476200)
1. [据说可以从孩子的脸上知道“一个家庭过得怎样”是真的吗？](https://www.zhihu.com/question/2002473673051883300)
1. [957 直播中爆料「小道消息 Zeus 将回归 T1」2027 年的 T1 会卷土重来吗？](https://www.zhihu.com/question/2103088687386817800)
1. [腾讯姚顺雨谈「大模型公司护城河」：更多存在于产品层，而不是模型层，如何评价？](https://www.zhihu.com/question/2103065564763482000)
1. [腾讯为什么能一直屹立在互联网的潮头？马化腾做对了什么？](https://www.zhihu.com/question/13197090034)
1. [马斯克爆料称「软银正在违约燃气轮机订单」，是真的吗？这一爆料对市场的影响有多大？](https://www.zhihu.com/question/2103023634302204000)
1. [「世另我」左右手首次在全球总决赛顶峰相见，你看好谁最终夺得 S16 总决赛冠军？](https://www.zhihu.com/question/2103059985731155500)
1. [5吨的大象都会被吃，骆驼却几乎无天敌，为啥没有食肉动物吃它呢？](https://www.zhihu.com/question/2102402187066356500)
1. [如何看待iG投资人称AL说被淘汰的队要给晋级的LPL队伍打训练赛，结果自己淘汰后第二天就回去了？](https://www.zhihu.com/question/2103133144081588500)
1. [如何看待蔡少芬一家五口在中国香港住83平米房子却说是「豪宅」，很知足？](https://www.zhihu.com/question/2102923372690663400)
1. [2026中超终于落下大幕，大连加冕，成都蓉城以一种几乎无法复刻的方式丢掉了冠军，为啥大家都觉得挺好？](https://www.zhihu.com/question/2102835109233694700)
1. [英伟达突发「史上最大GPU盗窃案」，价值 1140 万美元的硬件失踪，具体什么情况？可能带来哪些影响？](https://www.zhihu.com/question/2102838731207964000)
1. [全身麻醉醒来像「跳过了」几个小时，睡眠为什么没有这种感觉？](https://www.zhihu.com/question/2086783568102144000)
1. [把娃户口挪去东北（比如鹤岗），读高中和高考，是否可行？ 哪个城市比较建议？](https://www.zhihu.com/question/2098513012952979000)
1. [张朝阳说从来不看AI漫剧，AI让内容产生一种塑料感，像化肥催熟的西红柿没有味，你同意吗？](https://www.zhihu.com/question/2102717260867559400)
1. [英伟达美股夜盘跌超 3%，其后续股价走势会如何？](https://www.zhihu.com/question/2103054279376204000)
1. [如何看待Science最新研究证实阉割小鼠能够延长其寿命，且成年后阉割效果最好？](https://www.zhihu.com/question/2102130271294441200)
1. [2026 年的 T1 相比 2025 年差在哪？真的是换走 Gumayusi 导致的吗？](https://www.zhihu.com/question/2103087025725203700)
1. [感觉还是时常对孩子有亏欠？感觉给孩子托举的还是不够多，怎么办？](https://www.zhihu.com/question/2044482302038759200)
1. [我提出离职后领导加薪挽留，同时收到了其它公司的 offer，我该怎么选呢？](https://www.zhihu.com/question/884763344)
1. [如何评价 Faker 在 S16 全球总决赛上的表现？](https://www.zhihu.com/question/2103063049640977000)
1. [为何很多中国父母不懂得跟子女好好聊天？](https://www.zhihu.com/question/2100849986003124200)
1. [智谱 GLM-5.5 研发线索指向 100%RSI 与 100T 数据目标，这意味着什么？](https://www.zhihu.com/question/2101971195096835300)
1. [网友提名《后会友期》第二季阵容，杨幂唐嫣、范玮琪张韶涵、蒋欣刘涛等 10 组嘉宾你最想看哪对合体？](https://www.zhihu.com/question/2101343336816719400)
1. [如何看待乔治凯南评价说中国人是亚洲的法国人？](https://www.zhihu.com/question/1966118887918671400)

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
<!-- 最后更新时间 Tue Nov 10 2026 09:39:43 GMT+0800 (China Standard Time) -->

1. [就是要做党和人民信赖的新闻工作者](https://s.weibo.com//weibo?q=%23%E5%B0%B1%E6%98%AF%E8%A6%81%E5%81%9A%E5%85%9A%E5%92%8C%E4%BA%BA%E6%B0%91%E4%BF%A1%E8%B5%96%E7%9A%84%E6%96%B0%E9%97%BB%E5%B7%A5%E4%BD%9C%E8%80%85%23&Refer=new_time)
1. [石家庄天降陨石最大单体35公斤](https://s.weibo.com//weibo?q=%23%E7%9F%B3%E5%AE%B6%E5%BA%84%E5%A4%A9%E9%99%8D%E9%99%A8%E7%9F%B3%E6%9C%80%E5%A4%A7%E5%8D%95%E4%BD%9335%E5%85%AC%E6%96%A4%23&t=31&band_rank=1&Refer=top)
1. [小米四款车全部上榜](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E5%9B%9B%E6%AC%BE%E8%BD%A6%E5%85%A8%E9%83%A8%E4%B8%8A%E6%A6%9C&t=31&band_rank=2&Refer=top)
1. [铸牢共同体中华一家亲](https://s.weibo.com//weibo?q=%23%E9%93%B8%E7%89%A2%E5%85%B1%E5%90%8C%E4%BD%93%E4%B8%AD%E5%8D%8E%E4%B8%80%E5%AE%B6%E4%BA%B2%23&t=31&band_rank=3&Refer=top)
1. [没有性缘亲缘的综艺也有绯闻](https://s.weibo.com//weibo?q=%E6%B2%A1%E6%9C%89%E6%80%A7%E7%BC%98%E4%BA%B2%E7%BC%98%E7%9A%84%E7%BB%BC%E8%89%BA%E4%B9%9F%E6%9C%89%E7%BB%AF%E9%97%BB&t=31&band_rank=4&Refer=top)
1. [一碗免费面咋把隔壁小店逼到想搬家](https://s.weibo.com//weibo?q=%23%E4%B8%80%E7%A2%97%E5%85%8D%E8%B4%B9%E9%9D%A2%E5%92%8B%E6%8A%8A%E9%9A%94%E5%A3%81%E5%B0%8F%E5%BA%97%E9%80%BC%E5%88%B0%E6%83%B3%E6%90%AC%E5%AE%B6%23&t=31&band_rank=5&Refer=top)
1. [男子搬家遭敲诈威胁除非把房子卖了](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E6%90%AC%E5%AE%B6%E9%81%AD%E6%95%B2%E8%AF%88%E5%A8%81%E8%83%81%E9%99%A4%E9%9D%9E%E6%8A%8A%E6%88%BF%E5%AD%90%E5%8D%96%E4%BA%86%23&t=31&band_rank=6&Refer=top)
1. [BLG到纽约了](https://s.weibo.com//weibo?q=%23BLG%E5%88%B0%E7%BA%BD%E7%BA%A6%E4%BA%86%23&t=31&band_rank=7&Refer=top)
1. [德牧不是狗是家里人](https://s.weibo.com//weibo?q=%E5%BE%B7%E7%89%A7%E4%B8%8D%E6%98%AF%E7%8B%97%E6%98%AF%E5%AE%B6%E9%87%8C%E4%BA%BA&t=31&band_rank=8&Refer=top)
1. [日本担心高市早苗在APEC被冷落](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8B%85%E5%BF%83%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%9C%A8APEC%E8%A2%AB%E5%86%B7%E8%90%BD%23&t=31&band_rank=9&Refer=top)
1. [林一在卢昱晓家里直播](https://s.weibo.com//weibo?q=%23%E6%9E%97%E4%B8%80%E5%9C%A8%E5%8D%A2%E6%98%B1%E6%99%93%E5%AE%B6%E9%87%8C%E7%9B%B4%E6%92%AD%23&t=31&band_rank=10&Refer=top)
1. [白小纯说去韩国打了水光针](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%AF%B4%E5%8E%BB%E9%9F%A9%E5%9B%BD%E6%89%93%E4%BA%86%E6%B0%B4%E5%85%89%E9%92%88%23&t=31&band_rank=11&Refer=top)
1. [金晨 没澄清不住海边没有妹妹](https://s.weibo.com//weibo?q=%E9%87%91%E6%99%A8%20%E6%B2%A1%E6%BE%84%E6%B8%85%E4%B8%8D%E4%BD%8F%E6%B5%B7%E8%BE%B9%E6%B2%A1%E6%9C%89%E5%A6%B9%E5%A6%B9&t=31&band_rank=12&Refer=top)
1. [王楚钦 国乒男队](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%20%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F&t=31&band_rank=13&Refer=top)
1. [警方通报政务大厅门头遭破坏](https://s.weibo.com//weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E6%94%BF%E5%8A%A1%E5%A4%A7%E5%8E%85%E9%97%A8%E5%A4%B4%E9%81%AD%E7%A0%B4%E5%9D%8F%23&t=31&band_rank=14&Refer=top)
1. [白敬亭果然看上井柏然的衣服了](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E6%9E%9C%E7%84%B6%E7%9C%8B%E4%B8%8A%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9A%84%E8%A1%A3%E6%9C%8D%E4%BA%86%23&t=31&band_rank=15&Refer=top)
1. [童家堡回应白小纯恋情](https://s.weibo.com//weibo?q=%23%E7%AB%A5%E5%AE%B6%E5%A0%A1%E5%9B%9E%E5%BA%94%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%81%8B%E6%83%85%23&t=31&band_rank=16&Refer=top)
1. [英伟达市值一夜蒸发1.29万亿元](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC%E4%B8%80%E5%A4%9C%E8%92%B8%E5%8F%911.29%E4%B8%87%E4%BA%BF%E5%85%83%23&t=31&band_rank=17&Refer=top)
1. [张凌赫是真升咖了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%98%AF%E7%9C%9F%E5%8D%87%E5%92%96%E4%BA%86%23&t=31&band_rank=18&Refer=top)
1. [山姆现20元一包泡面](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E5%A7%86%E7%8E%B020%E5%85%83%E4%B8%80%E5%8C%85%E6%B3%A1%E9%9D%A2%23&t=31&band_rank=19&Refer=top)
1. [W盛典红毯神级镜头出现了](https://s.weibo.com//weibo?q=%23W%E7%9B%9B%E5%85%B8%E7%BA%A2%E6%AF%AF%E7%A5%9E%E7%BA%A7%E9%95%9C%E5%A4%B4%E5%87%BA%E7%8E%B0%E4%BA%86%23&t=31&band_rank=20&Refer=top)
1. [白小纯 王子璇](https://s.weibo.com//weibo?q=%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E7%8E%8B%E5%AD%90%E7%92%87&t=31&band_rank=21&Refer=top)
1. [黄仁勋 佩奇](https://s.weibo.com//weibo?q=%E9%BB%84%E4%BB%81%E5%8B%8B%20%E4%BD%A9%E5%A5%87&t=31&band_rank=22&Refer=top)
1. [迪丽热巴自曝有人加其父母微信骚扰](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%87%AA%E6%9B%9D%E6%9C%89%E4%BA%BA%E5%8A%A0%E5%85%B6%E7%88%B6%E6%AF%8D%E5%BE%AE%E4%BF%A1%E9%AA%9A%E6%89%B0%23&t=31&band_rank=23&Refer=top)
1. [黄仁勋他老婆如果离婚能分多少钱](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E4%BB%96%E8%80%81%E5%A9%86%E5%A6%82%E6%9E%9C%E7%A6%BB%E5%A9%9A%E8%83%BD%E5%88%86%E5%A4%9A%E5%B0%91%E9%92%B1%23&t=31&band_rank=24&Refer=top)
1. [王传君坦言爱情公寓只是份工作](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%9D%A6%E8%A8%80%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%8F%AA%E6%98%AF%E4%BB%BD%E5%B7%A5%E4%BD%9C%23&t=31&band_rank=25&Refer=top)
1. [舍友狗去世全宿舍要披麻戴孝吗](https://s.weibo.com//weibo?q=%E8%88%8D%E5%8F%8B%E7%8B%97%E5%8E%BB%E4%B8%96%E5%85%A8%E5%AE%BF%E8%88%8D%E8%A6%81%E6%8A%AB%E9%BA%BB%E6%88%B4%E5%AD%9D%E5%90%97&t=31&band_rank=26&Refer=top)
1. [杨幂给倪妮整理裙摆](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E5%B9%82%E7%BB%99%E5%80%AA%E5%A6%AE%E6%95%B4%E7%90%86%E8%A3%99%E6%91%86%23&t=31&band_rank=27&Refer=top)
1. [油价突然直线跳水](https://s.weibo.com//weibo?q=%E6%B2%B9%E4%BB%B7%E7%AA%81%E7%84%B6%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4&t=31&band_rank=28&Refer=top)
1. [29周胎儿重度脑积水子宫内做手术](https://s.weibo.com//weibo?q=%2329%E5%91%A8%E8%83%8E%E5%84%BF%E9%87%8D%E5%BA%A6%E8%84%91%E7%A7%AF%E6%B0%B4%E5%AD%90%E5%AE%AB%E5%86%85%E5%81%9A%E6%89%8B%E6%9C%AF%23&t=31&band_rank=29&Refer=top)
1. [用空气炸锅烤奶茶太香了](https://s.weibo.com//weibo?q=%23%E7%94%A8%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%83%A4%E5%A5%B6%E8%8C%B6%E5%A4%AA%E9%A6%99%E4%BA%86%23&t=31&band_rank=30&Refer=top)
1. [前队友谈被青稚压力](https://s.weibo.com//weibo?q=%23%E5%89%8D%E9%98%9F%E5%8F%8B%E8%B0%88%E8%A2%AB%E9%9D%92%E7%A8%9A%E5%8E%8B%E5%8A%9B%23&t=31&band_rank=31&Refer=top)
1. [唐嫣W盛典晚宴座位](https://s.weibo.com//weibo?q=%23%E5%94%90%E5%AB%A3W%E7%9B%9B%E5%85%B8%E6%99%9A%E5%AE%B4%E5%BA%A7%E4%BD%8D%23&t=31&band_rank=32&Refer=top)
1. [郑钦文谷爱凌两位体坛女王](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%A4%E4%BD%8D%E4%BD%93%E5%9D%9B%E5%A5%B3%E7%8E%8B%23&t=31&band_rank=33&Refer=top)
1. [比亚迪荷兰办公室遭突击搜查](https://s.weibo.com//weibo?q=%E6%AF%94%E4%BA%9A%E8%BF%AA%E8%8D%B7%E5%85%B0%E5%8A%9E%E5%85%AC%E5%AE%A4%E9%81%AD%E7%AA%81%E5%87%BB%E6%90%9C%E6%9F%A5&t=31&band_rank=34&Refer=top)
1. [环太平沟](https://s.weibo.com//weibo?q=%E7%8E%AF%E5%A4%AA%E5%B9%B3%E6%B2%9F&t=31&band_rank=35&Refer=top)
1. [后会友期除了当事人都上线吃瓜了](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%99%A4%E4%BA%86%E5%BD%93%E4%BA%8B%E4%BA%BA%E9%83%BD%E4%B8%8A%E7%BA%BF%E5%90%83%E7%93%9C%E4%BA%86%23&t=31&band_rank=36&Refer=top)
1. [倪妮左拥刘诗诗右抱杨幂](https://s.weibo.com//weibo?q=%23%E5%80%AA%E5%A6%AE%E5%B7%A6%E6%8B%A5%E5%88%98%E8%AF%97%E8%AF%97%E5%8F%B3%E6%8A%B1%E6%9D%A8%E5%B9%82%23&t=31&band_rank=37&Refer=top)
1. [iPhoneAir2机模曝光](https://s.weibo.com//weibo?q=%23iPhoneAir2%E6%9C%BA%E6%A8%A1%E6%9B%9D%E5%85%89%23&t=31&band_rank=38&Refer=top)
1. [女子独自露营遭陌生男子骚扰](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%8B%AC%E8%87%AA%E9%9C%B2%E8%90%A5%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%E9%AA%9A%E6%89%B0%23&t=31&band_rank=39&Refer=top)
1. [卡里克未来几小时可能被曼联解雇](https://s.weibo.com//weibo?q=%23%E5%8D%A1%E9%87%8C%E5%85%8B%E6%9C%AA%E6%9D%A5%E5%87%A0%E5%B0%8F%E6%97%B6%E5%8F%AF%E8%83%BD%E8%A2%AB%E6%9B%BC%E8%81%94%E8%A7%A3%E9%9B%87%23&t=31&band_rank=40&Refer=top)
1. [刘诗诗躲了半天还是没躲过](https://s.weibo.com//weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%BA%B2%E4%BA%86%E5%8D%8A%E5%A4%A9%E8%BF%98%E6%98%AF%E6%B2%A1%E8%BA%B2%E8%BF%87%23&t=31&band_rank=41&Refer=top)
1. [白敬亭井柏然 你穿着貂我露着背](https://s.weibo.com//weibo?q=%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%20%E4%BD%A0%E7%A9%BF%E7%9D%80%E8%B2%82%E6%88%91%E9%9C%B2%E7%9D%80%E8%83%8C&t=31&band_rank=42&Refer=top)
1. [一个录了十几天的友综而已](https://s.weibo.com//weibo?q=%23%E4%B8%80%E4%B8%AA%E5%BD%95%E4%BA%86%E5%8D%81%E5%87%A0%E5%A4%A9%E7%9A%84%E5%8F%8B%E7%BB%BC%E8%80%8C%E5%B7%B2%23&t=31&band_rank=43&Refer=top)
1. [从洗洁精就能看出来设计师的重要性](https://s.weibo.com//weibo?q=%E4%BB%8E%E6%B4%97%E6%B4%81%E7%B2%BE%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%87%BA%E6%9D%A5%E8%AE%BE%E8%AE%A1%E5%B8%88%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7&t=31&band_rank=44&Refer=top)
1. [原来许飞的衣服在这买的](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%AE%B8%E9%A3%9E%E7%9A%84%E8%A1%A3%E6%9C%8D%E5%9C%A8%E8%BF%99%E4%B9%B0%E7%9A%84%23&t=31&band_rank=45&Refer=top)
1. [医生说药有点贵结账十七块六](https://s.weibo.com//weibo?q=%E5%8C%BB%E7%94%9F%E8%AF%B4%E8%8D%AF%E6%9C%89%E7%82%B9%E8%B4%B5%E7%BB%93%E8%B4%A6%E5%8D%81%E4%B8%83%E5%9D%97%E5%85%AD&t=31&band_rank=46&Refer=top)
1. [立冬后要改一下睡觉时间](https://s.weibo.com//weibo?q=%23%E7%AB%8B%E5%86%AC%E5%90%8E%E8%A6%81%E6%94%B9%E4%B8%80%E4%B8%8B%E7%9D%A1%E8%A7%89%E6%97%B6%E9%97%B4%23&t=31&band_rank=47&Refer=top)
1. [虞书欣钟楚曦互动](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%92%9F%E6%A5%9A%E6%9B%A6%E4%BA%92%E5%8A%A8%23&t=31&band_rank=48&Refer=top)
1. [卡里乌斯再现超巨失误](https://s.weibo.com//weibo?q=%23%E5%8D%A1%E9%87%8C%E4%B9%8C%E6%96%AF%E5%86%8D%E7%8E%B0%E8%B6%85%E5%B7%A8%E5%A4%B1%E8%AF%AF%23&t=31&band_rank=49&Refer=top)
1. [男子回应结婚25年不让妻子上班](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E7%BB%93%E5%A9%9A25%E5%B9%B4%E4%B8%8D%E8%AE%A9%E5%A6%BB%E5%AD%90%E4%B8%8A%E7%8F%AD%23&t=31&band_rank=50&Refer=top)
1. [白小纯 王子璇](https://s.weibo.com//weibo?q=%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E7%8E%8B%E5%AD%90%E7%92%87&t=31&band_rank=1&Refer=top)
1. [老人将6亿遗产留给再婚妻子](https://s.weibo.com//weibo?q=%23%E8%80%81%E4%BA%BA%E5%B0%866%E4%BA%BF%E9%81%97%E4%BA%A7%E7%95%99%E7%BB%99%E5%86%8D%E5%A9%9A%E5%A6%BB%E5%AD%90%23&t=31&band_rank=2&Refer=top)
1. [白小纯在发现有人没上车的30秒](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%9C%A8%E5%8F%91%E7%8E%B0%E6%9C%89%E4%BA%BA%E6%B2%A1%E4%B8%8A%E8%BD%A6%E7%9A%8430%E7%A7%92%23&t=31&band_rank=4&Refer=top)
1. [W盛典内场](https://s.weibo.com//weibo?q=W%E7%9B%9B%E5%85%B8%E5%86%85%E5%9C%BA&t=31&band_rank=5&Refer=top)
1. [疑似自费高定艺人回复网友](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E5%9B%9E%E5%A4%8D%E7%BD%91%E5%8F%8B%23&t=31&band_rank=6&Refer=top)
1. [石家庄天降陨石最大单体35公斤](https://s.weibo.com//weibo?q=%23%E7%9F%B3%E5%AE%B6%E5%BA%84%E5%A4%A9%E9%99%8D%E9%99%A8%E7%9F%B3%E6%9C%80%E5%A4%A7%E5%8D%95%E4%BD%9335%E5%85%AC%E6%96%A4%23&t=31&band_rank=7&Refer=top)
1. [尚公主官方拆cp](https://s.weibo.com//weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%AE%98%E6%96%B9%E6%8B%86cp%23&t=31&band_rank=8&Refer=top)
1. [国乒问题并非王楚钦一个人问题](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E9%97%AE%E9%A2%98%E5%B9%B6%E9%9D%9E%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%80%E4%B8%AA%E4%BA%BA%E9%97%AE%E9%A2%98%23&t=31&band_rank=9&Refer=top)
1. [大型SUV第一名是小米澎程N90](https://s.weibo.com//weibo?q=%E5%A4%A7%E5%9E%8BSUV%E7%AC%AC%E4%B8%80%E5%90%8D%E6%98%AF%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90&t=31&band_rank=10&Refer=top)
1. [王子璇方否认与白小纯恋情](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%96%B9%E5%90%A6%E8%AE%A4%E4%B8%8E%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%81%8B%E6%83%85%23&t=31&band_rank=11&Refer=top)
1. [黄仁勋的恋爱脑伤到了哪些硅谷大佬](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%9A%84%E6%81%8B%E7%88%B1%E8%84%91%E4%BC%A4%E5%88%B0%E4%BA%86%E5%93%AA%E4%BA%9B%E7%A1%85%E8%B0%B7%E5%A4%A7%E4%BD%AC%23&t=31&band_rank=12&Refer=top)
1. [刘诗诗躲了半天还是没躲过](https://s.weibo.com//weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%BA%B2%E4%BA%86%E5%8D%8A%E5%A4%A9%E8%BF%98%E6%98%AF%E6%B2%A1%E8%BA%B2%E8%BF%87%23&t=31&band_rank=13&Refer=top)
1. [白敬亭井柏然 你穿着貂我露着背](https://s.weibo.com//weibo?q=%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%20%E4%BD%A0%E7%A9%BF%E7%9D%80%E8%B2%82%E6%88%91%E9%9C%B2%E7%9D%80%E8%83%8C&t=31&band_rank=14&Refer=top)
1. [白小纯青稚飞升](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E9%A3%9E%E5%8D%87%23&t=31&band_rank=15&Refer=top)
1. [黄仁勋持股不足4%为何能主导英伟达](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E6%8C%81%E8%82%A1%E4%B8%8D%E8%B6%B34%25%E4%B8%BA%E4%BD%95%E8%83%BD%E4%B8%BB%E5%AF%BC%E8%8B%B1%E4%BC%9F%E8%BE%BE%23&t=31&band_rank=16&Refer=top)
1. [虞书欣吓张凌赫一跳](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%93%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%80%E8%B7%B3%23&t=31&band_rank=17&Refer=top)
1. [黄仁勋出事看似是八卦其实是生意](https://s.weibo.com//weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%87%BA%E4%BA%8B%E7%9C%8B%E4%BC%BC%E6%98%AF%E5%85%AB%E5%8D%A6%E5%85%B6%E5%AE%9E%E6%98%AF%E7%94%9F%E6%84%8F%23&t=31&band_rank=18&Refer=top)
1. [没钱时的你不是真实的你](https://s.weibo.com//weibo?q=%E6%B2%A1%E9%92%B1%E6%97%B6%E7%9A%84%E4%BD%A0%E4%B8%8D%E6%98%AF%E7%9C%9F%E5%AE%9E%E7%9A%84%E4%BD%A0&t=31&band_rank=20&Refer=top)
1. [王子璇手机型号](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%89%8B%E6%9C%BA%E5%9E%8B%E5%8F%B7%23&t=31&band_rank=21&Refer=top)
1. [白敬亭井柏然宋威龙王嘉尔张凌赫同框](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AE%8B%E5%A8%81%E9%BE%99%E7%8E%8B%E5%98%89%E5%B0%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%8C%E6%A1%86%23&t=31&band_rank=22&Refer=top)
1. [舍友狗去世全宿舍要披麻戴孝吗](https://s.weibo.com//weibo?q=%E8%88%8D%E5%8F%8B%E7%8B%97%E5%8E%BB%E4%B8%96%E5%85%A8%E5%AE%BF%E8%88%8D%E8%A6%81%E6%8A%AB%E9%BA%BB%E6%88%B4%E5%AD%9D%E5%90%97&t=31&band_rank=23&Refer=top)
1. [舍友用婴幼儿洗发水我满脸问号](https://s.weibo.com//weibo?q=%E8%88%8D%E5%8F%8B%E7%94%A8%E5%A9%B4%E5%B9%BC%E5%84%BF%E6%B4%97%E5%8F%91%E6%B0%B4%E6%88%91%E6%BB%A1%E8%84%B8%E9%97%AE%E5%8F%B7&t=31&band_rank=24&Refer=top)
1. [许飞抢完明星红包也取关](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%8A%A2%E5%AE%8C%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%E4%B9%9F%E5%8F%96%E5%85%B3%23&t=31&band_rank=25&Refer=top)
1. [用空气炸锅烤奶茶太香了](https://s.weibo.com//weibo?q=%23%E7%94%A8%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%83%A4%E5%A5%B6%E8%8C%B6%E5%A4%AA%E9%A6%99%E4%BA%86%23&t=31&band_rank=26&Refer=top)
1. [辛芷蕾W盛典内场](https://s.weibo.com//weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BEW%E7%9B%9B%E5%85%B8%E5%86%85%E5%9C%BA%23&t=31&band_rank=27&Refer=top)
1. [刘恺威陪读小糯米一年半没安排工作](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%E9%99%AA%E8%AF%BB%E5%B0%8F%E7%B3%AF%E7%B1%B3%E4%B8%80%E5%B9%B4%E5%8D%8A%E6%B2%A1%E5%AE%89%E6%8E%92%E5%B7%A5%E4%BD%9C%23&t=31&band_rank=28&Refer=top)
1. [花坛埋尸案女子曾每年给儿子织毛衣](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%9D%9B%E5%9F%8B%E5%B0%B8%E6%A1%88%E5%A5%B3%E5%AD%90%E6%9B%BE%E6%AF%8F%E5%B9%B4%E7%BB%99%E5%84%BF%E5%AD%90%E7%BB%87%E6%AF%9B%E8%A1%A3%23&t=31&band_rank=29&Refer=top)
1. [美股高开高走科技股大涨](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1%E9%AB%98%E5%BC%80%E9%AB%98%E8%B5%B0%E7%A7%91%E6%8A%80%E8%82%A1%E5%A4%A7%E6%B6%A8&t=31&band_rank=30&Refer=top)
1. [W盛典晚宴座位](https://s.weibo.com//weibo?q=%23W%E7%9B%9B%E5%85%B8%E6%99%9A%E5%AE%B4%E5%BA%A7%E4%BD%8D%23&t=31&band_rank=31&Refer=top)
1. [闲鱼聊天记录太尴尬了](https://s.weibo.com//weibo?q=%E9%97%B2%E9%B1%BC%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E5%A4%AA%E5%B0%B4%E5%B0%AC%E4%BA%86&t=31&band_rank=32&Refer=top)
1. [纯璇](https://s.weibo.com//weibo?q=%E7%BA%AF%E7%92%87&t=31&band_rank=33&Refer=top)
1. [虞书欣宋威龙干杯](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%AE%8B%E5%A8%81%E9%BE%99%E5%B9%B2%E6%9D%AF%23&t=31&band_rank=34&Refer=top)
1. [时代少年团粉丝喊了七周年快乐](https://s.weibo.com//weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%B2%89%E4%B8%9D%E5%96%8A%E4%BA%86%E4%B8%83%E5%91%A8%E5%B9%B4%E5%BF%AB%E4%B9%90%23&t=31&band_rank=35&Refer=top)
1. [唐嫣W盛典内场](https://s.weibo.com//weibo?q=%E5%94%90%E5%AB%A3W%E7%9B%9B%E5%85%B8%E5%86%85%E5%9C%BA&t=31&band_rank=36&Refer=top)
1. [oner称赞Xun](https://s.weibo.com//weibo?q=%23oner%E7%A7%B0%E8%B5%9EXun%23&t=31&band_rank=37&Refer=top)
1. [W盛典全员镜头](https://s.weibo.com//weibo?q=%23W%E7%9B%9B%E5%85%B8%E5%85%A8%E5%91%98%E9%95%9C%E5%A4%B4%23&t=31&band_rank=38&Refer=top)
1. [王楚钦发文反思总结](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E6%96%87%E5%8F%8D%E6%80%9D%E6%80%BB%E7%BB%93%23&t=31&band_rank=39&Refer=top)
1. [墨尔本中国骑手遇害案嫌犯大闹法庭](https://s.weibo.com//weibo?q=%23%E5%A2%A8%E5%B0%94%E6%9C%AC%E4%B8%AD%E5%9B%BD%E9%AA%91%E6%89%8B%E9%81%87%E5%AE%B3%E6%A1%88%E5%AB%8C%E7%8A%AF%E5%A4%A7%E9%97%B9%E6%B3%95%E5%BA%AD%23&t=31&band_rank=40&Refer=top)
1. [Zeus重返T1转会传闻](https://s.weibo.com//weibo?q=Zeus%E9%87%8D%E8%BF%94T1%E8%BD%AC%E4%BC%9A%E4%BC%A0%E9%97%BB&t=31&band_rank=41&Refer=top)
1. [金鸡奖最佳男主角提名](https://s.weibo.com//weibo?q=%E9%87%91%E9%B8%A1%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%E8%A7%92%E6%8F%90%E5%90%8D&t=31&band_rank=42&Refer=top)
1. [迪丽热巴爸爸20分钟卖了7000单苹果](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%88%B8%E7%88%B820%E5%88%86%E9%92%9F%E5%8D%96%E4%BA%867000%E5%8D%95%E8%8B%B9%E6%9E%9C%23&t=31&band_rank=43&Refer=top)
1. [比亚迪大唐前后轮毂装反](https://s.weibo.com//weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%A4%A7%E5%94%90%E5%89%8D%E5%90%8E%E8%BD%AE%E6%AF%82%E8%A3%85%E5%8F%8D%23&t=31&band_rank=44&Refer=top)
1. [骨科医生做手术要戴可撕式面罩](https://s.weibo.com//weibo?q=%23%E9%AA%A8%E7%A7%91%E5%8C%BB%E7%94%9F%E5%81%9A%E6%89%8B%E6%9C%AF%E8%A6%81%E6%88%B4%E5%8F%AF%E6%92%95%E5%BC%8F%E9%9D%A2%E7%BD%A9%23&t=31&band_rank=45&Refer=top)
1. [Faker的格局](https://s.weibo.com//weibo?q=%23Faker%E7%9A%84%E6%A0%BC%E5%B1%80%23&t=31&band_rank=46&Refer=top)
1. [男子回应结婚25年不让妻子上班](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E7%BB%93%E5%A9%9A25%E5%B9%B4%E4%B8%8D%E8%AE%A9%E5%A6%BB%E5%AD%90%E4%B8%8A%E7%8F%AD%23&t=31&band_rank=47&Refer=top)
1. [小米汽车10月全系破万](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A610%E6%9C%88%E5%85%A8%E7%B3%BB%E7%A0%B4%E4%B8%87&t=31&band_rank=48&Refer=top)
1. [哈尔滨烤地瓜原价1688到手8元](https://s.weibo.com//weibo?q=%E5%93%88%E5%B0%94%E6%BB%A8%E7%83%A4%E5%9C%B0%E7%93%9C%E5%8E%9F%E4%BB%B71688%E5%88%B0%E6%89%8B8%E5%85%83&t=31&band_rank=49&Refer=top)
1. [程靖淇谈王楚钦发文](https://s.weibo.com//weibo?q=%23%E7%A8%8B%E9%9D%96%E6%B7%87%E8%B0%88%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E6%96%87%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
