# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-05 07:42:29

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
<!-- 最后更新时间 Thu Nov 05 2026 02:50:42 GMT+0800 (China Standard Time) -->

1. [新疆军区数千名新兵夜间紧急拉动演练](https://so.toutiao.com/search?keyword=新疆军区数千名新兵夜间紧急拉动演练)
1. [高市早苗以怪异姿势面见日本天皇](https://so.toutiao.com/search?keyword=高市早苗以怪异姿势面见日本天皇)
1. [新技术、新成果亮相互联网之光博览会](https://so.toutiao.com/search?keyword=新技术、新成果亮相互联网之光博览会)
1. [红军为什么必须过草地](https://so.toutiao.com/search?keyword=红军为什么必须过草地)
1. [51岁阿姨参加健美比赛 体脂率12%](https://so.toutiao.com/search?keyword=51岁阿姨参加健美比赛%20体脂率12%)
1. [AI短剧《持械入宋》为何火了](https://so.toutiao.com/search?keyword=AI短剧《持械入宋》为何火了)
1. [沃尔沃XC70落地不到20万](https://so.toutiao.com/search?keyword=沃尔沃XC70落地不到20万)
1. [优质蛋白排行榜出炉](https://so.toutiao.com/search?keyword=优质蛋白排行榜出炉)
1. [女子在胖东来洗手间洗头引热议](https://so.toutiao.com/search?keyword=女子在胖东来洗手间洗头引热议)
1. [A股迎来“大奇迹日” 后市怎么看](https://so.toutiao.com/search?keyword=A股迎来“大奇迹日”%20后市怎么看)
1. [巴彦淖尔一医院大楼起火图系AI生成](https://so.toutiao.com/search?keyword=巴彦淖尔一医院大楼起火图系AI生成)
1. [杨坤自曝患抑郁症20年](https://so.toutiao.com/search?keyword=杨坤自曝患抑郁症20年)
1. [攻击-21为何能拿下全球第一](https://so.toutiao.com/search?keyword=攻击-21为何能拿下全球第一)
1. [王毅把话说到不可容忍 菲方听懂了吗](https://so.toutiao.com/search?keyword=王毅把话说到不可容忍%20菲方听懂了吗)
1. [阿曼为何把航天大单交给中国](https://so.toutiao.com/search?keyword=阿曼为何把航天大单交给中国)
1. [女孩结婚不要彩礼用三轮车接亲](https://so.toutiao.com/search?keyword=女孩结婚不要彩礼用三轮车接亲)
1. [团伙售卖3000余名艺人网红隐私信息](https://so.toutiao.com/search?keyword=团伙售卖3000余名艺人网红隐私信息)
1. [媒体评九寨沟游客冲突处理结果](https://so.toutiao.com/search?keyword=媒体评九寨沟游客冲突处理结果)
1. [国台办：大陆是世界最安全地区之一](https://so.toutiao.com/search?keyword=国台办：大陆是世界最安全地区之一)
1. [46岁高圆圆红毛衣生图](https://so.toutiao.com/search?keyword=46岁高圆圆红毛衣生图)
1. [美众议长称输中期选举是历史规律](https://so.toutiao.com/search?keyword=美众议长称输中期选举是历史规律)
1. [伊朗议长：美选举结果表明对战争说不](https://so.toutiao.com/search?keyword=伊朗议长：美选举结果表明对战争说不)
1. [苹果天气bug：多地零下32℃](https://so.toutiao.com/search?keyword=苹果天气bug：多地零下32℃)
1. [夫妻晒被子被小鸟相中筑巢孵蛋](https://so.toutiao.com/search?keyword=夫妻晒被子被小鸟相中筑巢孵蛋)
1. [特朗普承认伊朗战事影响中期选举](https://so.toutiao.com/search?keyword=特朗普承认伊朗战事影响中期选举)
1. [谭松韵回应出道21年才36岁](https://so.toutiao.com/search?keyword=谭松韵回应出道21年才36岁)
1. [董宇辉官宣新品牌](https://so.toutiao.com/search?keyword=董宇辉官宣新品牌)
1. [中方回应美国中期选举](https://so.toutiao.com/search?keyword=中方回应美国中期选举)
1. [绿营竟称在沈伯洋身上看到孙中山先生](https://so.toutiao.com/search?keyword=绿营竟称在沈伯洋身上看到孙中山先生)
1. [网友上海街头偶遇张柏芝](https://so.toutiao.com/search?keyword=网友上海街头偶遇张柏芝)
1. [比亚迪股价何时能重回上涨通道](https://so.toutiao.com/search?keyword=比亚迪股价何时能重回上涨通道)
1. [年轻人为何爱上小电驴](https://so.toutiao.com/search?keyword=年轻人为何爱上小电驴)
1. [台北民众吐露心声：一定要换掉民进党](https://so.toutiao.com/search?keyword=台北民众吐露心声：一定要换掉民进党)
1. [毛晓彤说在追《后会友期》](https://so.toutiao.com/search?keyword=毛晓彤说在追《后会友期》)
1. [解放军如何破局反制美日军演](https://so.toutiao.com/search?keyword=解放军如何破局反制美日军演)
1. [日本安保文件调整对华措辞有何意图](https://so.toutiao.com/search?keyword=日本安保文件调整对华措辞有何意图)
1. [王小利想走出“刘能舒适圈”](https://so.toutiao.com/search?keyword=王小利想走出“刘能舒适圈”)
1. [博主：席卷全球的风险暂时消停了](https://so.toutiao.com/search?keyword=博主：席卷全球的风险暂时消停了)
1. [全球房地产市场周期日益分化](https://so.toutiao.com/search?keyword=全球房地产市场周期日益分化)
1. [王艺迪不敌德国43岁老将](https://so.toutiao.com/search?keyword=王艺迪不敌德国43岁老将)
1. [宝马预计汽车利润率逼近零](https://so.toutiao.com/search?keyword=宝马预计汽车利润率逼近零)
1. [中国铁建党委常委李兴龙被查](https://so.toutiao.com/search?keyword=中国铁建党委常委李兴龙被查)
1. [金融三巨头如何联手救市](https://so.toutiao.com/search?keyword=金融三巨头如何联手救市)
1. [老人半年种出14.5斤大红薯](https://so.toutiao.com/search?keyword=老人半年种出14.5斤大红薯)
1. [别让横向课题变成教师的“筹款命题”](https://so.toutiao.com/search?keyword=别让横向课题变成教师的“筹款命题”)
1. [越南想复制中国高铁经验难在哪](https://so.toutiao.com/search?keyword=越南想复制中国高铁经验难在哪)
1. [专家：中国刺激经济选项比欧美日多](https://so.toutiao.com/search?keyword=专家：中国刺激经济选项比欧美日多)
1. [王毅应约同菲律宾外长通电话背后](https://so.toutiao.com/search?keyword=王毅应约同菲律宾外长通电话背后)
1. [长城汽车利润为何腰斩](https://so.toutiao.com/search?keyword=长城汽车利润为何腰斩)
1. [媒体人：芒果没有不可或缺的综艺人](https://so.toutiao.com/search?keyword=媒体人：芒果没有不可或缺的综艺人)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Nov 05 2026 07:36:59 GMT+0800 (China Standard Time) -->

1. [张雪重庆大学开价被学生嫌弃](https://www.zhihu.com/search?q=%E5%BC%A0%E9%9B%AA%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%BC%80%E4%BB%B7%E8%A2%AB%E5%AD%A6%E7%94%9F%E5%AB%8C%E5%BC%83)
1. [陕西发生重大刑案嫌疑人持刀在逃](https://www.zhihu.com/search?q=%E9%99%95%E8%A5%BF%E5%8F%91%E7%94%9F%E9%87%8D%E5%A4%A7%E5%88%91%E6%A1%88%E5%AB%8C%E7%96%91%E4%BA%BA%E6%8C%81%E5%88%80%E5%9C%A8%E9%80%83)
1. [新华社追问国乒男队怎么了](https://www.zhihu.com/search?q=%E6%96%B0%E5%8D%8E%E7%A4%BE%E8%BF%BD%E9%97%AE%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E6%80%8E%E4%B9%88%E4%BA%86)
1. [iG 3-1 TES](https://www.zhihu.com/search?q=iG%203-1%20TES)
1. [特朗普被指全面惨败](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E6%8C%87%E5%85%A8%E9%9D%A2%E6%83%A8%E8%B4%A5)
1. [九寨沟景区内打人事件](https://www.zhihu.com/search?q=%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%99%AF%E5%8C%BA%E5%86%85%E6%89%93%E4%BA%BA%E4%BA%8B%E4%BB%B6)
1. [抖音副总裁李亮发文怼秦朔](https://www.zhihu.com/search?q=%E6%8A%96%E9%9F%B3%E5%89%AF%E6%80%BB%E8%A3%81%E6%9D%8E%E4%BA%AE%E5%8F%91%E6%96%87%E6%80%BC%E7%A7%A6%E6%9C%94)
1. [南京大学抬头率](https://www.zhihu.com/search?q=%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%8A%AC%E5%A4%B4%E7%8E%87)
1. [10元快剪正席卷理发行业](https://www.zhihu.com/search?q=10%E5%85%83%E5%BF%AB%E5%89%AA%E6%AD%A3%E5%B8%AD%E5%8D%B7%E7%90%86%E5%8F%91%E8%A1%8C%E4%B8%9A)
1. [DeepSeek移动端应用上线](https://www.zhihu.com/search?q=DeepSeek%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BA%94%E7%94%A8%E4%B8%8A%E7%BA%BF)
1. [iphone显示多地降至零下30度](https://www.zhihu.com/search?q=iphone%E6%98%BE%E7%A4%BA%E5%A4%9A%E5%9C%B0%E9%99%8D%E8%87%B3%E9%9B%B6%E4%B8%8B30%E5%BA%A6)
1. [上汽奥迪买一赠一营销被立案](https://www.zhihu.com/search?q=%E4%B8%8A%E6%B1%BD%E5%A5%A5%E8%BF%AA%E4%B9%B0%E4%B8%80%E8%B5%A0%E4%B8%80%E8%90%A5%E9%94%80%E8%A2%AB%E7%AB%8B%E6%A1%88)
1. [网友提名《后会友期》第二季阵容](https://www.zhihu.com/search?q=%E7%BD%91%E5%8F%8B%E6%8F%90%E5%90%8D%E3%80%8A%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E3%80%8B%E7%AC%AC%E4%BA%8C%E5%AD%A3%E9%98%B5%E5%AE%B9)
1. [被拐男子认亲后拉黑养家断联](https://www.zhihu.com/search?q=%E8%A2%AB%E6%8B%90%E7%94%B7%E5%AD%90%E8%AE%A4%E4%BA%B2%E5%90%8E%E6%8B%89%E9%BB%91%E5%85%BB%E5%AE%B6%E6%96%AD%E8%81%94)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Nov 05 2026 07:42:29 GMT+0800 (China Standard Time) -->

1. [如何评价张雪回应校招起薪10万被嫌低，称「你不能逼我把应届生工资提到20万」？其拿老员工举例算傲慢吗？](https://www.zhihu.com/question/2101274789797282800)
1. [我请客的饭局席间一人感谢主赐他日用的饮食，我开玩笑说那这顿我不买单了，他为何会生气？](https://www.zhihu.com/question/406887759)
1. [如果军长已经坚决下达了必须执行的命令，而旅长坚定认为命令是错的，一定会导致战役的失败，那怎么办？](https://www.zhihu.com/question/2099319258408825900)
1. [抖音副总裁李亮发文称「我真心认为秦朔不是蠢就是坏」，如何看待双方观点及指控？](https://www.zhihu.com/question/2101258456724402400)
1. [人类还需要多长时间把石油挖完？](https://www.zhihu.com/question/1930470934625630000)
1. [2026年11月4日A股超4600只个股飘红，三大指数集体大涨，科创50暴涨近10%，怎样解读？](https://www.zhihu.com/question/2100541228118963000)
1. [南京一老人横穿快速路，后方车辆反应不及致多车连环追尾，如何看待交警判决老人不担责，追尾车辆按比担责？](https://www.zhihu.com/question/2100991454428522500)
1. [为什么字节跳动如此害怕「字节时间」？](https://www.zhihu.com/question/2100649711723963400)
1. [儿子沉迷看电视，爸爸「魔改」电视系统，看 10 分钟抽查一道题，这招怎么样？对孩子管用吗？](https://www.zhihu.com/question/2101035704512005400)
1. [《西游记》真假美猴王之后，唐僧再也没有念过紧箍咒，是孙悟空真的被换掉了吗？](https://www.zhihu.com/question/2098427617066103000)
1. [网传DeepSeek V5 已经做出来了但官方未发布，是真的吗？可能什么时候发布？](https://www.zhihu.com/question/2099896271318398000)
1. [男子转情人2575万，情人回转2258万，妻子要求返全款，法院判还317万元差额，如何从法律角度解读？](https://www.zhihu.com/question/2098072205288653600)
1. [iPhone Duo 开售一周行情遇冷，业内调侃「一个成功的黄牛起码亏十几万」，背后的核心原因是什么？](https://www.zhihu.com/question/2100960777104577500)
1. [怎么看 Anthropic 发布 Smart Reports，老板可以直接看员工产出和对话类型统计？](https://www.zhihu.com/question/2100612812506715100)
1. [为什么 GPT 先起飞，Claude 现在却断档领先？他们有独特的训练方法吗？](https://www.zhihu.com/question/2100991081307453200)
1. [何洁在《后会友期》中直言「05 超女前三她都不爽」，她们之间发生了什么？](https://www.zhihu.com/question/2099191374666883300)
1. [「直接获得100万」和「每获得1元，你将额外获得100元（因此而获得的不算）」，你选哪个？](https://www.zhihu.com/question/2098979788241237800)
1. [TES 用复出归来的 Jackeylove 换掉 JiaQi 是不是 2026 年最大的败笔？](https://www.zhihu.com/question/2101280953372865800)
1. [《圣斗士星矢》中雅典娜为什么敢只身闯极乐净土？](https://www.zhihu.com/question/2074400795638903800)
1. [有好吃的美食推荐一下给我吗?](https://www.zhihu.com/question/1970501745995131000)
1. [美中期选举共和党丢失参众两院，特朗普全面惨败，将产生哪些连锁反应？美国老百姓为何如此不满特朗普政府？](https://www.zhihu.com/question/2101296173638055700)
1. [胡歌自曝过了40岁身体开始走下坡路，已戒烟很久，出差会背AED，年龄真是分水岭吗？这些措施用处有多大？](https://www.zhihu.com/question/2100539537923338800)
1. [22岁女孩月薪3500，存款35000，有买车的想法，接受贷款，到底买还是不买？](https://www.zhihu.com/question/2099523413752672300)
1. [陕西一导演上街举牌求人看电影，称没钱宣发，反映出中小成本电影面临哪些困境？这样的影片要如何被看见？](https://www.zhihu.com/question/2100223313167348200)
1. [如何看待2026年美国中期选举特朗普两院尽丢？得州翻蓝又意味着什么？](https://www.zhihu.com/question/2101271124130666000)
1. [你现在正读的是什么书？](https://www.zhihu.com/question/1912626816876798500)
1. [开车的时候，有车想插队到你前面，你会让他插进来吗？](https://www.zhihu.com/question/2101217553209111300)
1. [普通人装修最大的困难是没住过好房子，是真的吗？](https://www.zhihu.com/question/1977762131584771300)
1. [万岁山网红「胖郎中」收到「切胃减肥」宣传邀约，该手术对身体影响有多大？真的适合找达人宣传吗？](https://www.zhihu.com/question/2100563545377325300)
1. [为什么明明知道很多大道理，情绪上头时却依然控制不住自己？](https://www.zhihu.com/question/2098459642510812400)
1. [《海贼王》路飞被曝解锁「黑色猿猴」新形态，如何评价这一设定？](https://www.zhihu.com/question/2101250269363319000)
1. [《英雄联盟》S16 首场八强赛决胜局遭遇超长暂停，现场发生了什么？](https://www.zhihu.com/question/2101252648439476700)
1. [豆包用户数被红果超越，这说明了什么？普通人对 AI 的真实需求被高估了吗？](https://www.zhihu.com/question/2100943272122250800)
1. [为什么陈赓的风评一边倒的好？](https://www.zhihu.com/question/1902454179068380400)
1. [上汽奥迪因发布「AUDI 全系买一赠一」文案实为赠车模被立案调查，这种营销方式可能会面临哪些处罚？](https://www.zhihu.com/question/2101019662498715000)
1. [假设一个人以近光速跑百米，大家看他到底是快还是慢？](https://www.zhihu.com/question/465351333)
1. [如何看待华为云宣布下线盘古2.0 Flash、Pro模型服务？](https://www.zhihu.com/question/2100911175315763200)
1. [如何评价王小利、赵本山电视剧《走马上任》？](https://www.zhihu.com/question/2100667554176020500)
1. [2026年美国中期选举，美民主党称夺回参议院，特朗普被指全面惨败，如何理解当前的选情？未来要关注什么？](https://www.zhihu.com/question/2100904648848810200)
1. [苹果宣布国行 Apple 智能接入阿里通义千问，为何选择与阿里合作？](https://www.zhihu.com/question/2099779139737744100)
1. [OpenAI 新模型 GPT-6.2Astra 曝光，有哪些值得关注的信息？](https://www.zhihu.com/question/2100547520220943400)
1. [现在的年轻人为什么不爱社交了？](https://www.zhihu.com/question/2072650993444065500)
1. [如何评价朱元璋强制迁徙江浙百姓去北方，云贵等穷乡僻壤受苦受难的行为？](https://www.zhihu.com/question/2073485521817448400)
1. [当没有 Token 额度了，你会开始手动改 AI 生成的代码吗？](https://www.zhihu.com/question/2100912392884506600)
1. [费城76人开局7胜1负东部第一，有冠军相吗？](https://www.zhihu.com/question/2100972047732053500)
1. [每天都不知道要吃什么，有什么推荐吗？](https://www.zhihu.com/question/1906997352755099600)

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
<!-- 最后更新时间 Thu Nov 05 2026 02:05:21 GMT+0800 (China Standard Time) -->

1. [从两座纪念碑读懂中阿千年之交](https://s.weibo.com//weibo?q=%23%E4%BB%8E%E4%B8%A4%E5%BA%A7%E7%BA%AA%E5%BF%B5%E7%A2%91%E8%AF%BB%E6%87%82%E4%B8%AD%E9%98%BF%E5%8D%83%E5%B9%B4%E4%B9%8B%E4%BA%A4%23&Refer=new_time)
1. [嫁金钗忘删AI水印了](https://s.weibo.com//weibo?q=%E5%AB%81%E9%87%91%E9%92%97%E5%BF%98%E5%88%A0AI%E6%B0%B4%E5%8D%B0%E4%BA%86&t=31&band_rank=1&Refer=top)
1. [高市早苗以怪异姿势面见日本天皇](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%BB%A5%E6%80%AA%E5%BC%82%E5%A7%BF%E5%8A%BF%E9%9D%A2%E8%A7%81%E6%97%A5%E6%9C%AC%E5%A4%A9%E7%9A%87%23&t=31&band_rank=2&Refer=top)
1. [方浩明以亲身经历感知中国](https://s.weibo.com//weibo?q=%23%E6%96%B9%E6%B5%A9%E6%98%8E%E4%BB%A5%E4%BA%B2%E8%BA%AB%E7%BB%8F%E5%8E%86%E6%84%9F%E7%9F%A5%E4%B8%AD%E5%9B%BD%23&t=31&band_rank=3&Refer=top)
1. [许飞看到之后不得迷死啊](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E7%9C%8B%E5%88%B0%E4%B9%8B%E5%90%8E%E4%B8%8D%E5%BE%97%E8%BF%B7%E6%AD%BB%E5%95%8A%23&t=31&band_rank=4&Refer=top)
1. [上岸第一件先娶意中人](https://s.weibo.com//weibo?q=%E4%B8%8A%E5%B2%B8%E7%AC%AC%E4%B8%80%E4%BB%B6%E5%85%88%E5%A8%B6%E6%84%8F%E4%B8%AD%E4%BA%BA&t=31&band_rank=5&Refer=top)
1. [叶非夜实名举报郭宇欣偷税漏税](https://s.weibo.com//weibo?q=%23%E5%8F%B6%E9%9D%9E%E5%A4%9C%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5%E9%83%AD%E5%AE%87%E6%AC%A3%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23&t=31&band_rank=6&Refer=top)
1. [厉娜已拿下三个商务](https://s.weibo.com//weibo?q=%23%E5%8E%89%E5%A8%9C%E5%B7%B2%E6%8B%BF%E4%B8%8B%E4%B8%89%E4%B8%AA%E5%95%86%E5%8A%A1%23&t=31&band_rank=7&Refer=top)
1. [韩网吐槽没有年轻人演了吗](https://s.weibo.com//weibo?q=%E9%9F%A9%E7%BD%91%E5%90%90%E6%A7%BD%E6%B2%A1%E6%9C%89%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%BC%94%E4%BA%86%E5%90%97&t=31&band_rank=8&Refer=top)
1. [郭士强 中国男篮](https://s.weibo.com//weibo?q=%E9%83%AD%E5%A3%AB%E5%BC%BA%20%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE&t=31&band_rank=9&Refer=top)
1. [出租屋轻生男子6岁儿子患病长期住院](https://s.weibo.com//weibo?q=%23%E5%87%BA%E7%A7%9F%E5%B1%8B%E8%BD%BB%E7%94%9F%E7%94%B7%E5%AD%906%E5%B2%81%E5%84%BF%E5%AD%90%E6%82%A3%E7%97%85%E9%95%BF%E6%9C%9F%E4%BD%8F%E9%99%A2%23&t=31&band_rank=10&Refer=top)
1. [女儿初潮弄脏沙发爸爸送花安慰](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%84%BF%E5%88%9D%E6%BD%AE%E5%BC%84%E8%84%8F%E6%B2%99%E5%8F%91%E7%88%B8%E7%88%B8%E9%80%81%E8%8A%B1%E5%AE%89%E6%85%B0%23&t=31&band_rank=11&Refer=top)
1. [许飞 厉娜](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%20%E5%8E%89%E5%A8%9C&t=31&band_rank=12&Refer=top)
1. [后会友期第二季呼声TOP10](https://s.weibo.com//weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%91%BC%E5%A3%B0TOP10%23&t=31&band_rank=13&Refer=top)
1. [美股](https://s.weibo.com//weibo?q=%E7%BE%8E%E8%82%A1&t=31&band_rank=14&Refer=top)
1. [后会友期爆火 AI时代情感需求](https://s.weibo.com//weibo?q=%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%88%86%E7%81%AB%20AI%E6%97%B6%E4%BB%A3%E6%83%85%E6%84%9F%E9%9C%80%E6%B1%82&t=31&band_rank=15&Refer=top)
1. [刘亦菲曾轶可入选破冰名单](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%A6%E8%8F%B2%E6%9B%BE%E8%BD%B6%E5%8F%AF%E5%85%A5%E9%80%89%E7%A0%B4%E5%86%B0%E5%90%8D%E5%8D%95&t=31&band_rank=16&Refer=top)
1. [烧伤男生ICU对口型说我不治了](https://s.weibo.com//weibo?q=%23%E7%83%A7%E4%BC%A4%E7%94%B7%E7%94%9FICU%E5%AF%B9%E5%8F%A3%E5%9E%8B%E8%AF%B4%E6%88%91%E4%B8%8D%E6%B2%BB%E4%BA%86%23&t=31&band_rank=17&Refer=top)
1. [温瑞博vs王楚钦](https://s.weibo.com//weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9Avs%E7%8E%8B%E6%A5%9A%E9%92%A6%23&t=31&band_rank=18&Refer=top)
1. [花8万坐月子产后两个月伤口还流脓](https://s.weibo.com//weibo?q=%23%E8%8A%B18%E4%B8%87%E5%9D%90%E6%9C%88%E5%AD%90%E4%BA%A7%E5%90%8E%E4%B8%A4%E4%B8%AA%E6%9C%88%E4%BC%A4%E5%8F%A3%E8%BF%98%E6%B5%81%E8%84%93%23&t=31&band_rank=19&Refer=top)
1. [赵昭仪 颜安](https://s.weibo.com//weibo?q=%E8%B5%B5%E6%98%AD%E4%BB%AA%20%E9%A2%9C%E5%AE%89&t=31&band_rank=20&Refer=top)
1. [同学卖上海房回老家引争议](https://s.weibo.com//weibo?q=%E5%90%8C%E5%AD%A6%E5%8D%96%E4%B8%8A%E6%B5%B7%E6%88%BF%E5%9B%9E%E8%80%81%E5%AE%B6%E5%BC%95%E4%BA%89%E8%AE%AE&t=31&band_rank=21&Refer=top)
1. [男生代课冒充男友遇上真男友](https://s.weibo.com//weibo?q=%E7%94%B7%E7%94%9F%E4%BB%A3%E8%AF%BE%E5%86%92%E5%85%85%E7%94%B7%E5%8F%8B%E9%81%87%E4%B8%8A%E7%9C%9F%E7%94%B7%E5%8F%8B&t=31&band_rank=22&Refer=top)
1. [小孩都知道买东西是隐形家务](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%AD%A9%E9%83%BD%E7%9F%A5%E9%81%93%E4%B9%B0%E4%B8%9C%E8%A5%BF%E6%98%AF%E9%9A%90%E5%BD%A2%E5%AE%B6%E5%8A%A1&t=31&band_rank=23&Refer=top)
1. [红果时间](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E6%9E%9C%E6%97%B6%E9%97%B4%23&t=31&band_rank=24&Refer=top)
1. [iG全员冲击0.009%的可能](https://s.weibo.com//weibo?q=%23iG%E5%85%A8%E5%91%98%E5%86%B2%E5%87%BB0.009%25%E7%9A%84%E5%8F%AF%E8%83%BD%23&t=31&band_rank=25&Refer=top)
1. [易烊千玺方辟谣恋情传闻](https://s.weibo.com//weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%96%B9%E8%BE%9F%E8%B0%A3%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%23&t=31&band_rank=26&Refer=top)
1. [原来大家都是这样消除怨气的](https://s.weibo.com//weibo?q=%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E6%B6%88%E9%99%A4%E6%80%A8%E6%B0%94%E7%9A%84&t=31&band_rank=27&Refer=top)
1. [好聪明的路人打码方法](https://s.weibo.com//weibo?q=%E5%A5%BD%E8%81%AA%E6%98%8E%E7%9A%84%E8%B7%AF%E4%BA%BA%E6%89%93%E7%A0%81%E6%96%B9%E6%B3%95&t=31&band_rank=28&Refer=top)
1. [女子每月花3600住酒店上班](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AF%8F%E6%9C%88%E8%8A%B13600%E4%BD%8F%E9%85%92%E5%BA%97%E4%B8%8A%E7%8F%AD%23&t=31&band_rank=29&Refer=top)
1. [高市早苗举止怪异被批丢人](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%B8%BE%E6%AD%A2%E6%80%AA%E5%BC%82%E8%A2%AB%E6%89%B9%E4%B8%A2%E4%BA%BA%23&t=31&band_rank=30&Refer=top)
1. [微信文件过期了用wps能打开](https://s.weibo.com//weibo?q=%E5%BE%AE%E4%BF%A1%E6%96%87%E4%BB%B6%E8%BF%87%E6%9C%9F%E4%BA%86%E7%94%A8wps%E8%83%BD%E6%89%93%E5%BC%80&t=31&band_rank=31&Refer=top)
1. [白小纯青稚红V了](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E7%BA%A2V%E4%BA%86%23&t=31&band_rank=32&Refer=top)
1. [第五人格](https://s.weibo.com//weibo?q=%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC&t=31&band_rank=33&Refer=top)
1. [陈哲远的床单是花开富贵](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E7%9A%84%E5%BA%8A%E5%8D%95%E6%98%AF%E8%8A%B1%E5%BC%80%E5%AF%8C%E8%B4%B5%23&t=31&band_rank=34&Refer=top)
1. [郭宇欣叶非夜合作4部作品](https://s.weibo.com//weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E5%8F%B6%E9%9D%9E%E5%A4%9C%E5%90%88%E4%BD%9C4%E9%83%A8%E4%BD%9C%E5%93%81%23&t=31&band_rank=35&Refer=top)
1. [女孩说爸爸妈妈都不要我了](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%A9%E8%AF%B4%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88%E9%83%BD%E4%B8%8D%E8%A6%81%E6%88%91%E4%BA%86&t=31&band_rank=36&Refer=top)
1. [李嘉格被审判](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%98%89%E6%A0%BC%E8%A2%AB%E5%AE%A1%E5%88%A4%23&t=31&band_rank=37&Refer=top)
1. [唐嫣杨幂同台被王凯隔开](https://s.weibo.com//weibo?q=%23%E5%94%90%E5%AB%A3%E6%9D%A8%E5%B9%82%E5%90%8C%E5%8F%B0%E8%A2%AB%E7%8E%8B%E5%87%AF%E9%9A%94%E5%BC%80%23&t=31&band_rank=38&Refer=top)
1. [狼队 换人](https://s.weibo.com//weibo?q=%E7%8B%BC%E9%98%9F%20%E6%8D%A2%E4%BA%BA&t=31&band_rank=39&Refer=top)
1. [张雪校招不是傲慢是对现实的忠诚](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%A0%A1%E6%8B%9B%E4%B8%8D%E6%98%AF%E5%82%B2%E6%85%A2%E6%98%AF%E5%AF%B9%E7%8E%B0%E5%AE%9E%E7%9A%84%E5%BF%A0%E8%AF%9A%23&t=31&band_rank=40&Refer=top)
1. [一个爱吃漂亮饭的人轻轻的碎了](https://s.weibo.com//weibo?q=%E4%B8%80%E4%B8%AA%E7%88%B1%E5%90%83%E6%BC%82%E4%BA%AE%E9%A5%AD%E7%9A%84%E4%BA%BA%E8%BD%BB%E8%BD%BB%E7%9A%84%E7%A2%8E%E4%BA%86&t=31&band_rank=41&Refer=top)
1. [369彻底出圈](https://s.weibo.com//weibo?q=%23369%E5%BD%BB%E5%BA%95%E5%87%BA%E5%9C%88%23&t=31&band_rank=42&Refer=top)
1. [全国寺院道观财务大检查](https://s.weibo.com//weibo?q=%E5%85%A8%E5%9B%BD%E5%AF%BA%E9%99%A2%E9%81%93%E8%A7%82%E8%B4%A2%E5%8A%A1%E5%A4%A7%E6%A3%80%E6%9F%A5&t=31&band_rank=43&Refer=top)
1. [迪丽热巴出演迪奥短片](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%87%BA%E6%BC%94%E8%BF%AA%E5%A5%A5%E7%9F%AD%E7%89%87%23&t=31&band_rank=44&Refer=top)
1. [这就是勤换洗水杯的原因](https://s.weibo.com//weibo?q=%E8%BF%99%E5%B0%B1%E6%98%AF%E5%8B%A4%E6%8D%A2%E6%B4%97%E6%B0%B4%E6%9D%AF%E7%9A%84%E5%8E%9F%E5%9B%A0&t=31&band_rank=45&Refer=top)
1. [中国男篮 世预赛](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%20%E4%B8%96%E9%A2%84%E8%B5%9B&t=31&band_rank=46&Refer=top)
1. [W盛典官宣上海](https://s.weibo.com//weibo?q=%23W%E7%9B%9B%E5%85%B8%E5%AE%98%E5%AE%A3%E4%B8%8A%E6%B5%B7%23&t=31&band_rank=47&Refer=top)
1. [Jennie比基尼身材](https://s.weibo.com//weibo?q=%23Jennie%E6%AF%94%E5%9F%BA%E5%B0%BC%E8%BA%AB%E6%9D%90%23&t=31&band_rank=48&Refer=top)
1. [内存短缺预计持续至2030年](https://s.weibo.com//weibo?q=%E5%86%85%E5%AD%98%E7%9F%AD%E7%BC%BA%E9%A2%84%E8%AE%A1%E6%8C%81%E7%BB%AD%E8%87%B32030%E5%B9%B4&t=31&band_rank=49&Refer=top)
1. [美共和党警告民主党别报复](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%85%B1%E5%92%8C%E5%85%9A%E8%AD%A6%E5%91%8A%E6%B0%91%E4%B8%BB%E5%85%9A%E5%88%AB%E6%8A%A5%E5%A4%8D%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
