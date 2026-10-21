# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-22 03:22:07

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
<!-- 最后更新时间 Wed Oct 21 2026 23:33:53 GMT+0800 (China Standard Time) -->

1. [警方回应“留学生在国外身披旭日旗”](https://so.toutiao.com/search?keyword=警方回应“留学生在国外身披旭日旗”)
1. [泽连斯基：愿保留75%领土以达和平](https://so.toutiao.com/search?keyword=泽连斯基：愿保留75%领土以达和平)
1. [中国经济发展绿色化底色愈加鲜明](https://so.toutiao.com/search?keyword=中国经济发展绿色化底色愈加鲜明)
1. [西安阿达西称现在没有利润还贴钱](https://so.toutiao.com/search?keyword=西安阿达西称现在没有利润还贴钱)
1. [传国玉玺究竟去哪了](https://so.toutiao.com/search?keyword=传国玉玺究竟去哪了)
1. [唐驳虎：中国老板已准备放弃越南了](https://so.toutiao.com/search?keyword=唐驳虎：中国老板已准备放弃越南了)
1. [俄愿在下月恢复俄美乌三方谈判](https://so.toutiao.com/search?keyword=俄愿在下月恢复俄美乌三方谈判)
1. [人民日报评特斯拉能飞：不必妄自菲薄](https://so.toutiao.com/search?keyword=人民日报评特斯拉能飞：不必妄自菲薄)
1. [于东来：已拿出2000万投资爱情研究](https://so.toutiao.com/search?keyword=于东来：已拿出2000万投资爱情研究)
1. [李胜峰：大陆做好迎接任何挑战的准备](https://so.toutiao.com/search?keyword=李胜峰：大陆做好迎接任何挑战的准备)
1. [遛狗时家中男童坠亡案父亲发声](https://so.toutiao.com/search?keyword=遛狗时家中男童坠亡案父亲发声)
1. [事关公积金贷款宁波辟谣](https://so.toutiao.com/search?keyword=事关公积金贷款宁波辟谣)
1. [“小天才”就不能安安心心做块表吗](https://so.toutiao.com/search?keyword=“小天才”就不能安安心心做块表吗)
1. [12306回应Z114次列车开售即售罄](https://so.toutiao.com/search?keyword=12306回应Z114次列车开售即售罄)
1. [邵永灵：中美军机台海再交锋](https://so.toutiao.com/search?keyword=邵永灵：中美军机台海再交锋)
1. [刚果（金）将检验埃博拉疫苗效果](https://so.toutiao.com/search?keyword=刚果（金）将检验埃博拉疫苗效果)
1. [郑钦文局间吃香蕉出圈 医生解读](https://so.toutiao.com/search?keyword=郑钦文局间吃香蕉出圈%20医生解读)
1. [张凌赫赴台被拒他们到底在怕什么](https://so.toutiao.com/search?keyword=张凌赫赴台被拒他们到底在怕什么)
1. [日本稀土钇库存将耗尽？中方回应](https://so.toutiao.com/search?keyword=日本稀土钇库存将耗尽？中方回应)
1. [日本79岁女护理员上18小时夜班](https://so.toutiao.com/search?keyword=日本79岁女护理员上18小时夜班)
1. [张雪发现餐后水果没人吃要求更换](https://so.toutiao.com/search?keyword=张雪发现餐后水果没人吃要求更换)
1. [国家癌症中心公布发病前五癌症](https://so.toutiao.com/search?keyword=国家癌症中心公布发病前五癌症)
1. [解放军“围观”美日演习？学者解读](https://so.toutiao.com/search?keyword=解放军“围观”美日演习？学者解读)
1. [苹果官网iPhone Duo每人限购2台](https://so.toutiao.com/search?keyword=苹果官网iPhone%20Duo每人限购2台)
1. [外媒：普京决定释放美国公民哈伯德](https://so.toutiao.com/search?keyword=外媒：普京决定释放美国公民哈伯德)
1. [“神探”李昌钰将安葬于扬州](https://so.toutiao.com/search?keyword=“神探”李昌钰将安葬于扬州)
1. [国乒男团亚锦赛3-0战胜伊朗男团](https://so.toutiao.com/search?keyword=国乒男团亚锦赛3-0战胜伊朗男团)
1. [周涛称知止比知行更重要](https://so.toutiao.com/search?keyword=周涛称知止比知行更重要)
1. [腾讯姚顺雨想把DeepSeek卷到加班](https://so.toutiao.com/search?keyword=腾讯姚顺雨想把DeepSeek卷到加班)
1. [是否愿将乌纳入中俄美会晤？中方回应](https://so.toutiao.com/search?keyword=是否愿将乌纳入中俄美会晤？中方回应)
1. [00后男生手搓“飞行滑板”爆火](https://so.toutiao.com/search?keyword=00后男生手搓“飞行滑板”爆火)
1. [校方回应李子祺称博士期间不上临床](https://so.toutiao.com/search?keyword=校方回应李子祺称博士期间不上临床)
1. [美为何要求欧洲恢复购买俄石油天然气](https://so.toutiao.com/search?keyword=美为何要求欧洲恢复购买俄石油天然气)
1. [媒体：董明珠办技校先别急着叫好](https://so.toutiao.com/search?keyword=媒体：董明珠办技校先别急着叫好)
1. [宝马员工为何争着被裁](https://so.toutiao.com/search?keyword=宝马员工为何争着被裁)
1. [朝称在维护领土主权上不能有半点犹豫](https://so.toutiao.com/search?keyword=朝称在维护领土主权上不能有半点犹豫)
1. [美俄大国博弈之下乌克兰出路何在](https://so.toutiao.com/search?keyword=美俄大国博弈之下乌克兰出路何在)
1. [杨幂亮相时尚芭莎年度盛典](https://so.toutiao.com/search?keyword=杨幂亮相时尚芭莎年度盛典)
1. [美舰冲闯仙宾礁是要为菲律宾撑腰吗](https://so.toutiao.com/search?keyword=美舰冲闯仙宾礁是要为菲律宾撑腰吗)
1. [官方通报女子错过检票哀求工作人员](https://so.toutiao.com/search?keyword=官方通报女子错过检票哀求工作人员)
1. [雷军：汽车产业若没有安全其他都是0](https://so.toutiao.com/search?keyword=雷军：汽车产业若没有安全其他都是0)
1. [罗晋出席活动夸赞女儿](https://so.toutiao.com/search?keyword=罗晋出席活动夸赞女儿)
1. [经中方允许菲向非法坐滩船运生活物资](https://so.toutiao.com/search?keyword=经中方允许菲向非法坐滩船运生活物资)
1. [华尔街大佬：AI确定已是大泡沫](https://so.toutiao.com/search?keyword=华尔街大佬：AI确定已是大泡沫)
1. [周鸿祎谈美国“封杀”DeepSeek](https://so.toutiao.com/search?keyword=周鸿祎谈美国“封杀”DeepSeek)
1. [黄海部分海域进行军事活动](https://so.toutiao.com/search?keyword=黄海部分海域进行军事活动)
1. [A股科技牛市结束了吗](https://so.toutiao.com/search?keyword=A股科技牛市结束了吗)
1. [比亚迪L3级自动驾驶有望2028年落地](https://so.toutiao.com/search?keyword=比亚迪L3级自动驾驶有望2028年落地)
1. [有长寿潜质的人身体大多有这5个表现](https://so.toutiao.com/search?keyword=有长寿潜质的人身体大多有这5个表现)
1. [高油价引发抗议马克龙赴中东“买油”](https://so.toutiao.com/search?keyword=高油价引发抗议马克龙赴中东“买油”)
1. [国内黄金克价跌破890元](https://so.toutiao.com/search?keyword=国内黄金克价跌破890元)
1. [外国友人镜头里的中国乡村全面振兴](https://so.toutiao.com/search?keyword=外国友人镜头里的中国乡村全面振兴)
1. [3位老人开三轮车南下 签互不追责协议](https://so.toutiao.com/search?keyword=3位老人开三轮车南下%20签互不追责协议)
1. [特朗普称美援乌数千亿却一无所获](https://so.toutiao.com/search?keyword=特朗普称美援乌数千亿却一无所获)
1. [美日“利剑”演习有何变化](https://so.toutiao.com/search?keyword=美日“利剑”演习有何变化)
1. [宋鸿兵：油价破100重创特朗普选情](https://so.toutiao.com/search?keyword=宋鸿兵：油价破100重创特朗普选情)
1. [国台办：中国完全统一任务一定能实现](https://so.toutiao.com/search?keyword=国台办：中国完全统一任务一定能实现)
1. [第一批用AI裁员的老板后悔了](https://so.toutiao.com/search?keyword=第一批用AI裁员的老板后悔了)
1. [曝马斯克下令对乌“星盾”系统限速](https://so.toutiao.com/search?keyword=曝马斯克下令对乌“星盾”系统限速)
1. [网友劝西安阿达西涨价](https://so.toutiao.com/search?keyword=网友劝西安阿达西涨价)
1. [某中院原司法鉴定处主任退休后被追责](https://so.toutiao.com/search?keyword=某中院原司法鉴定处主任退休后被追责)
1. [警方回应“问界汽车碰撞起火”](https://so.toutiao.com/search?keyword=警方回应“问界汽车碰撞起火”)
1. [宁德时代股价较历史高点腰斩](https://so.toutiao.com/search?keyword=宁德时代股价较历史高点腰斩)
1. [二人故意转账3万诬告陷害法官被追责](https://so.toutiao.com/search?keyword=二人故意转账3万诬告陷害法官被追责)
1. [人类历史上最大的投资泡沫或正在破裂](https://so.toutiao.com/search?keyword=人类历史上最大的投资泡沫或正在破裂)
1. [洪超：长征途中牺牲的第一位红军师长](https://so.toutiao.com/search?keyword=洪超：长征途中牺牲的第一位红军师长)
1. [林依轮大儿子林子濠结婚了](https://so.toutiao.com/search?keyword=林依轮大儿子林子濠结婚了)
1. [喝完水总跑厕所和半天不去哪个更伤身](https://so.toutiao.com/search?keyword=喝完水总跑厕所和半天不去哪个更伤身)
1. [手机市场为何突然入冬了](https://so.toutiao.com/search?keyword=手机市场为何突然入冬了)
1. [2030年L3级自动驾驶渗透率预计超35%](https://so.toutiao.com/search?keyword=2030年L3级自动驾驶渗透率预计超35%)
1. [高梓淇离婚六年后宣布新恋情](https://so.toutiao.com/search?keyword=高梓淇离婚六年后宣布新恋情)
1. [群众发现司法人员违反审判职责可举报](https://so.toutiao.com/search?keyword=群众发现司法人员违反审判职责可举报)
1. [76人为何能掀翻尼克斯](https://so.toutiao.com/search?keyword=76人为何能掀翻尼克斯)
1. [黄仁勋当着德国总理面点出中国优势](https://so.toutiao.com/search?keyword=黄仁勋当着德国总理面点出中国优势)
1. [男子捡到38000元留了道题给失主](https://so.toutiao.com/search?keyword=男子捡到38000元留了道题给失主)
1. [工信部：禁止车辆行驶时用零重力座椅](https://so.toutiao.com/search?keyword=工信部：禁止车辆行驶时用零重力座椅)
1. [宁德时代三季度利润增速放缓](https://so.toutiao.com/search?keyword=宁德时代三季度利润增速放缓)
1. [数据领域“国家队”是干什么的](https://so.toutiao.com/search?keyword=数据领域“国家队”是干什么的)
1. [万斯：美国与乌克兰并非正式盟友](https://so.toutiao.com/search?keyword=万斯：美国与乌克兰并非正式盟友)
1. [女子迟到错过检票失控哀求工作人员](https://so.toutiao.com/search?keyword=女子迟到错过检票失控哀求工作人员)
1. [美国“罗斯福”号航母将派往中东](https://so.toutiao.com/search?keyword=美国“罗斯福”号航母将派往中东)
1. [菲总统府：马科斯无意驱逐中国大使](https://so.toutiao.com/search?keyword=菲总统府：马科斯无意驱逐中国大使)
1. [宝马计划明年底前裁撤8000个白领岗位](https://so.toutiao.com/search?keyword=宝马计划明年底前裁撤8000个白领岗位)
1. [福州启动防台风Ⅳ级应急响应](https://so.toutiao.com/search?keyword=福州启动防台风Ⅳ级应急响应)
1. [美日“利剑”军演为何挺进与那国岛](https://so.toutiao.com/search?keyword=美日“利剑”军演为何挺进与那国岛)
1. [原中国气象局副局长谈极端天气](https://so.toutiao.com/search?keyword=原中国气象局副局长谈极端天气)
1. [特朗普施压泽连斯基同俄达成协议](https://so.toutiao.com/search?keyword=特朗普施压泽连斯基同俄达成协议)
1. [香港查获多支网红医美“尸皮针”](https://so.toutiao.com/search?keyword=香港查获多支网红医美“尸皮针”)
1. [A股到底部了吗？卖方观点显分歧](https://so.toutiao.com/search?keyword=A股到底部了吗？卖方观点显分歧)
1. [多项惠民政策加速落地](https://so.toutiao.com/search?keyword=多项惠民政策加速落地)
1. [董明珠办技校为何让家长挤破头](https://so.toutiao.com/search?keyword=董明珠办技校为何让家长挤破头)
1. [高铁座椅是HPV感染来源？专家辟谣](https://so.toutiao.com/search?keyword=高铁座椅是HPV感染来源？专家辟谣)
1. [特朗普为何突然对乌克兰翻脸](https://so.toutiao.com/search?keyword=特朗普为何突然对乌克兰翻脸)
1. [国台办回应约六成台青认为不能依靠美](https://so.toutiao.com/search?keyword=国台办回应约六成台青认为不能依靠美)
1. [比亚迪张卓回应海鸥无仪表设计](https://so.toutiao.com/search?keyword=比亚迪张卓回应海鸥无仪表设计)
1. [菲议员连夸中国大使有学识绅士直率](https://so.toutiao.com/search?keyword=菲议员连夸中国大使有学识绅士直率)
1. [76人揭幕战掀翻卫冕冠军尼克斯](https://so.toutiao.com/search?keyword=76人揭幕战掀翻卫冕冠军尼克斯)
1. [特朗普：中方在乌问题上立场很公允](https://so.toutiao.com/search?keyword=特朗普：中方在乌问题上立场很公允)
1. [《嫁金钗》毛林林演技如何](https://so.toutiao.com/search?keyword=《嫁金钗》毛林林演技如何)
1. [文班亚马连续送切特大帽](https://so.toutiao.com/search?keyword=文班亚马连续送切特大帽)
1. [高速提示应急道可用 司机借用却被罚](https://so.toutiao.com/search?keyword=高速提示应急道可用%20司机借用却被罚)
1. [福克斯抱摔霍姆格伦引发冲突](https://so.toutiao.com/search?keyword=福克斯抱摔霍姆格伦引发冲突)
1. [中东“榜一大哥”率团来华提飞行汽车](https://so.toutiao.com/search?keyword=中东“榜一大哥”率团来华提飞行汽车)
1. [研究：工业化国家癌症年轻化趋势加剧](https://so.toutiao.com/search?keyword=研究：工业化国家癌症年轻化趋势加剧)
1. [台媒：台湾沦为美“选举提款机”](https://so.toutiao.com/search?keyword=台媒：台湾沦为美“选举提款机”)
1. [泽连斯基要求欧盟提供700亿欧元资金](https://so.toutiao.com/search?keyword=泽连斯基要求欧盟提供700亿欧元资金)
1. [国台办：将举办台湾光复纪念活动](https://so.toutiao.com/search?keyword=国台办：将举办台湾光复纪念活动)
1. [日本拉美国搞军演想走向何方](https://so.toutiao.com/search?keyword=日本拉美国搞军演想走向何方)
1. [于东来晒乘机照片](https://so.toutiao.com/search?keyword=于东来晒乘机照片)
1. [杰伦布朗冲进内线战斧劈扣](https://so.toutiao.com/search?keyword=杰伦布朗冲进内线战斧劈扣)
1. [黄金消费降温了吗](https://so.toutiao.com/search?keyword=黄金消费降温了吗)
1. [台退将：辽宁舰再赴西太是警告日本](https://so.toutiao.com/search?keyword=台退将：辽宁舰再赴西太是警告日本)
1. [日军事评论家：日本军国主义风险加剧](https://so.toutiao.com/search?keyword=日军事评论家：日本军国主义风险加剧)
1. [法国将部署军队反恐力量应对示威活动](https://so.toutiao.com/search?keyword=法国将部署军队反恐力量应对示威活动)
1. [媒体：没有学历不代表不学习](https://so.toutiao.com/search?keyword=媒体：没有学历不代表不学习)
1. [国台办回应民进党当局拒张凌赫赴台](https://so.toutiao.com/search?keyword=国台办回应民进党当局拒张凌赫赴台)
1. [钟南山院士是真正的薄肌“90后”](https://so.toutiao.com/search?keyword=钟南山院士是真正的薄肌“90后”)
1. [樊振东发声抵制偷拍](https://so.toutiao.com/search?keyword=樊振东发声抵制偷拍)
1. [为什么人们不爱接陌生电话了](https://so.toutiao.com/search?keyword=为什么人们不爱接陌生电话了)
1. [王进健任云南省委常委](https://so.toutiao.com/search?keyword=王进健任云南省委常委)
1. [宝马在华销量为何持续下滑](https://so.toutiao.com/search?keyword=宝马在华销量为何持续下滑)
1. [观众对打小三斗渣男剧情审美疲劳了吗](https://so.toutiao.com/search?keyword=观众对打小三斗渣男剧情审美疲劳了吗)
1. [高油价推动全球电动汽车销售](https://so.toutiao.com/search?keyword=高油价推动全球电动汽车销售)
1. [父亲盼刘恺威女友春节来家过年](https://so.toutiao.com/search?keyword=父亲盼刘恺威女友春节来家过年)
1. [前三季度中国经济“成绩单”来了](https://so.toutiao.com/search?keyword=前三季度中国经济“成绩单”来了)
1. [日美利剑演习是否为介入台海做准备](https://so.toutiao.com/search?keyword=日美利剑演习是否为介入台海做准备)
1. [欧冠：巴萨2-4客负巴黎](https://so.toutiao.com/search?keyword=欧冠：巴萨2-4客负巴黎)
1. [人民日报钟声：日本再次撕下和平伪装](https://so.toutiao.com/search?keyword=人民日报钟声：日本再次撕下和平伪装)
1. [退休时间是按生日当天还是当月算](https://so.toutiao.com/search?keyword=退休时间是按生日当天还是当月算)
1. [“完美恋人”背后的陷阱](https://so.toutiao.com/search?keyword=“完美恋人”背后的陷阱)
1. [血糖高身体会抛出7个信号](https://so.toutiao.com/search?keyword=血糖高身体会抛出7个信号)
1. [李小冉：一忍再忍不想占用公共资源](https://so.toutiao.com/search?keyword=李小冉：一忍再忍不想占用公共资源)
1. [末节23-0 绿军揭幕战惨遭活塞逆转](https://so.toutiao.com/search?keyword=末节23-0%20绿军揭幕战惨遭活塞逆转)
1. [超强台风蔷琵很大可能紧擦浙江](https://so.toutiao.com/search?keyword=超强台风蔷琵很大可能紧擦浙江)
1. [菲媒警告：驱逐大使中方必然对等回应](https://so.toutiao.com/search?keyword=菲媒警告：驱逐大使中方必然对等回应)
1. [缅甸公布昂山素季近照](https://so.toutiao.com/search?keyword=缅甸公布昂山素季近照)
1. [媒体：孩子的友谊不该被一块手表绑架](https://so.toutiao.com/search?keyword=媒体：孩子的友谊不该被一块手表绑架)
1. [三站一轮游 赵心童无缘爱尔兰赛32强](https://so.toutiao.com/search?keyword=三站一轮游%20赵心童无缘爱尔兰赛32强)
1. [美国一战斗舰冲闯中国南沙海域](https://so.toutiao.com/search?keyword=美国一战斗舰冲闯中国南沙海域)
1. [第二代比亚迪海鸥上市](https://so.toutiao.com/search?keyword=第二代比亚迪海鸥上市)
1. [华为带火阔直板 安卓手机集体跟进](https://so.toutiao.com/search?keyword=华为带火阔直板%20安卓手机集体跟进)
1. [马斯克警告人类将被AI“一击拿下”](https://so.toutiao.com/search?keyword=马斯克警告人类将被AI“一击拿下”)
1. [凯尔特人新援乔治7记三分球空砍38分](https://so.toutiao.com/search?keyword=凯尔特人新援乔治7记三分球空砍38分)
1. [理想汽车发布电池保障计划](https://so.toutiao.com/search?keyword=理想汽车发布电池保障计划)
1. [美以伊战火重燃概率上升](https://so.toutiao.com/search?keyword=美以伊战火重燃概率上升)
1. [国产剧恶女叙事为何越热越单薄](https://so.toutiao.com/search?keyword=国产剧恶女叙事为何越热越单薄)
1. [专家：房地产最危险的是不涨也不跌](https://so.toutiao.com/search?keyword=专家：房地产最危险的是不涨也不跌)
1. [张柏芝说养育3个儿子很轻松](https://so.toutiao.com/search?keyword=张柏芝说养育3个儿子很轻松)
1. [男子掏5万元找公司代缴社保遇退费难](https://so.toutiao.com/search?keyword=男子掏5万元找公司代缴社保遇退费难)
1. [56岁女子8月退休9月重返大学读研](https://so.toutiao.com/search?keyword=56岁女子8月退休9月重返大学读研)
1. [男子被拐22年后凭碎片记忆寻回至亲](https://so.toutiao.com/search?keyword=男子被拐22年后凭碎片记忆寻回至亲)
1. [泽连斯基：作为伙伴我愿向特朗普让步](https://so.toutiao.com/search?keyword=泽连斯基：作为伙伴我愿向特朗普让步)
1. [换电在宁德时代被提到新战略高度](https://so.toutiao.com/search?keyword=换电在宁德时代被提到新战略高度)
1. [谢寒冰：沈伯洋“快演不下去”](https://so.toutiao.com/search?keyword=谢寒冰：沈伯洋“快演不下去”)
1. [日本万人大集会高呼高市马上下台](https://so.toutiao.com/search?keyword=日本万人大集会高呼高市马上下台)
1. [刘恺威承认新恋情](https://so.toutiao.com/search?keyword=刘恺威承认新恋情)
1. [小米8款新车商标曝光](https://so.toutiao.com/search?keyword=小米8款新车商标曝光)
1. [CBA：四川91比88险胜吉林](https://so.toutiao.com/search?keyword=CBA：四川91比88险胜吉林)
1. [儿子逼父母还债被父亲打伤 父亲免罚](https://so.toutiao.com/search?keyword=儿子逼父母还债被父亲打伤%20父亲免罚)
1. [Q3全球手机出货量为何创新低](https://so.toutiao.com/search?keyword=Q3全球手机出货量为何创新低)
1. [中东酋长要把国产飞行汽车“飞”回家](https://so.toutiao.com/search?keyword=中东酋长要把国产飞行汽车“飞”回家)
1. [石破茂批高市早苗对待历史“不诚实”](https://so.toutiao.com/search?keyword=石破茂批高市早苗对待历史“不诚实”)
1. [有理儿有面：对“精日”言行零容忍](https://so.toutiao.com/search?keyword=有理儿有面：对“精日”言行零容忍)
1. [马斯克被杨立昆质疑后回怼](https://so.toutiao.com/search?keyword=马斯克被杨立昆质疑后回怼)
1. [马斯克向特朗普账户捐80亿美元的图谋](https://so.toutiao.com/search?keyword=马斯克向特朗普账户捐80亿美元的图谋)
1. [董明珠：格力技工学校禁止谈恋爱](https://so.toutiao.com/search?keyword=董明珠：格力技工学校禁止谈恋爱)
1. [记者采访遭殴打 警方介入](https://so.toutiao.com/search?keyword=记者采访遭殴打%20警方介入)
1. [日美联合7国磨“利剑”究竟练什么](https://so.toutiao.com/search?keyword=日美联合7国磨“利剑”究竟练什么)
1. [专家：A股市场主要风险是输入性风险](https://so.toutiao.com/search?keyword=专家：A股市场主要风险是输入性风险)
1. [印度搞边境基建的机器能从中国买吗](https://so.toutiao.com/search?keyword=印度搞边境基建的机器能从中国买吗)
1. [周小川：防范AI投资失败引发金融风险](https://so.toutiao.com/search?keyword=周小川：防范AI投资失败引发金融风险)
1. [郑丽文哽咽感谢张丽善翻转家乡形象](https://so.toutiao.com/search?keyword=郑丽文哽咽感谢张丽善翻转家乡形象)
1. [新央企国家数据集团领导班子公布](https://so.toutiao.com/search?keyword=新央企国家数据集团领导班子公布)
1. [邵永灵：美日军演解放军无人机侦察](https://so.toutiao.com/search?keyword=邵永灵：美日军演解放军无人机侦察)
1. [美舰首次在仙宾礁挑衅有何意图](https://so.toutiao.com/search?keyword=美舰首次在仙宾礁挑衅有何意图)
1. [全球铁矿石价格是怎样被中国打下来的](https://so.toutiao.com/search?keyword=全球铁矿石价格是怎样被中国打下来的)
1. [专家：美日利剑演习剧本值得高度警惕](https://so.toutiao.com/search?keyword=专家：美日利剑演习剧本值得高度警惕)
1. [欧盟：俄乌冲突结束前不解除对俄制裁](https://so.toutiao.com/search?keyword=欧盟：俄乌冲突结束前不解除对俄制裁)
1. [特朗普公开支持以总理连任有何考量](https://so.toutiao.com/search?keyword=特朗普公开支持以总理连任有何考量)
1. [新央企国家数据集团成立](https://so.toutiao.com/search?keyword=新央企国家数据集团成立)
1. [工信部：部分车企测试验证不充分](https://so.toutiao.com/search?keyword=工信部：部分车企测试验证不充分)
1. [27岁爱心博主患罕见真菌感染离世](https://so.toutiao.com/search?keyword=27岁爱心博主患罕见真菌感染离世)
1. [中方回应美要求机构停用DeepSeek](https://so.toutiao.com/search?keyword=中方回应美要求机构停用DeepSeek)
1. [北京队96-78战胜广东队迎两连胜](https://so.toutiao.com/search?keyword=北京队96-78战胜广东队迎两连胜)
1. [俄方期待APEC实现中美俄元首会晤](https://so.toutiao.com/search?keyword=俄方期待APEC实现中美俄元首会晤)
1. [英国将派战斗机协助沙特抵御胡塞袭击](https://so.toutiao.com/search?keyword=英国将派战斗机协助沙特抵御胡塞袭击)
1. [影石回应资助网红飞行滑板博主](https://so.toutiao.com/search?keyword=影石回应资助网红飞行滑板博主)
1. [钟南山院士开球一路小跑神采奕奕](https://so.toutiao.com/search?keyword=钟南山院士开球一路小跑神采奕奕)
1. [专家：我国消费由性价比向质价比转变](https://so.toutiao.com/search?keyword=专家：我国消费由性价比向质价比转变)
1. [张雪说不要送米了](https://so.toutiao.com/search?keyword=张雪说不要送米了)
1. [智驾“小蓝灯”将迎国标](https://so.toutiao.com/search?keyword=智驾“小蓝灯”将迎国标)
1. [德总理：不希望与中国打贸易战](https://so.toutiao.com/search?keyword=德总理：不希望与中国打贸易战)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Oct 21 2026 23:12:41 GMT+0800 (China Standard Time) -->

1. [警方称问界汽车事故司机已遇难](https://www.zhihu.com/search?q=%E8%AD%A6%E6%96%B9%E7%A7%B0%E9%97%AE%E7%95%8C%E6%B1%BD%E8%BD%A6%E4%BA%8B%E6%95%85%E5%8F%B8%E6%9C%BA%E5%B7%B2%E9%81%87%E9%9A%BE)
1. [泽连斯基称保留75%领土可达成和平协议](https://www.zhihu.com/search?q=%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E4%BF%9D%E7%95%9975%25%E9%A2%86%E5%9C%9F%E5%8F%AF%E8%BE%BE%E6%88%90%E5%92%8C%E5%B9%B3%E5%8D%8F%E8%AE%AE)
1. [英伟达市值9天蒸发4万亿](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC9%E5%A4%A9%E8%92%B8%E5%8F%914%E4%B8%87%E4%BA%BF)
1. [马斯克称未来钱将毫无意义](https://www.zhihu.com/search?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E6%9C%AA%E6%9D%A5%E9%92%B1%E5%B0%86%E6%AF%AB%E6%97%A0%E6%84%8F%E4%B9%89)
1. [红果短剧宣布将下线金币功能](https://www.zhihu.com/search?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%AE%A3%E5%B8%83%E5%B0%86%E4%B8%8B%E7%BA%BF%E9%87%91%E5%B8%81%E5%8A%9F%E8%83%BD)
1. [医保个人账户跨省共济落地全国](https://www.zhihu.com/search?q=%E5%8C%BB%E4%BF%9D%E4%B8%AA%E4%BA%BA%E8%B4%A6%E6%88%B7%E8%B7%A8%E7%9C%81%E5%85%B1%E6%B5%8E%E8%90%BD%E5%9C%B0%E5%85%A8%E5%9B%BD)
1. [陕西一问界M9碰撞后起火](https://www.zhihu.com/search?q=%E9%99%95%E8%A5%BF%E4%B8%80%E9%97%AE%E7%95%8CM9%E7%A2%B0%E6%92%9E%E5%90%8E%E8%B5%B7%E7%81%AB)
1. [DeepSeek单集群日吞吐155万亿](https://www.zhihu.com/search?q=DeepSeek%E5%8D%95%E9%9B%86%E7%BE%A4%E6%97%A5%E5%90%9E%E5%90%90155%E4%B8%87%E4%BA%BF)
1. [法国发生近年来最严重暴力骚乱](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E5%8F%91%E7%94%9F%E8%BF%91%E5%B9%B4%E6%9D%A5%E6%9C%80%E4%B8%A5%E9%87%8D%E6%9A%B4%E5%8A%9B%E9%AA%9A%E4%B9%B1)
1. [网传国内MC相关下载被封禁](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E5%9B%BD%E5%86%85MC%E7%9B%B8%E5%85%B3%E4%B8%8B%E8%BD%BD%E8%A2%AB%E5%B0%81%E7%A6%81)
1. [国家癌症中心公布发病前五癌症](https://www.zhihu.com/search?q=%E5%9B%BD%E5%AE%B6%E7%99%8C%E7%97%87%E4%B8%AD%E5%BF%83%E5%85%AC%E5%B8%83%E5%8F%91%E7%97%85%E5%89%8D%E4%BA%94%E7%99%8C%E7%97%87)
1. [女子情绪失控砸毁30万五粮液](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%E7%A0%B8%E6%AF%8130%E4%B8%87%E4%BA%94%E7%B2%AE%E6%B6%B2)
1. [樊振东发文抵制偷拍](https://www.zhihu.com/search?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8F%91%E6%96%87%E6%8A%B5%E5%88%B6%E5%81%B7%E6%8B%8D)
1. [网红王扁遭前经纪人锤击](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E7%8E%8B%E6%89%81%E9%81%AD%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E9%94%A4%E5%87%BB)
1. [DeepSeek新模型名登顶最差榜](https://www.zhihu.com/search?q=DeepSeek%E6%96%B0%E6%A8%A1%E5%9E%8B%E5%90%8D%E7%99%BB%E9%A1%B6%E6%9C%80%E5%B7%AE%E6%A6%9C)
1. [网友称蟑螂粉是蛋白粉平替](https://www.zhihu.com/search?q=%E7%BD%91%E5%8F%8B%E7%A7%B0%E8%9F%91%E8%9E%82%E7%B2%89%E6%98%AF%E8%9B%8B%E7%99%BD%E7%B2%89%E5%B9%B3%E6%9B%BF)
1. [造谣肖战演唱会门票25万元者被拘](https://www.zhihu.com/search?q=%E9%80%A0%E8%B0%A3%E8%82%96%E6%88%98%E6%BC%94%E5%94%B1%E4%BC%9A%E9%97%A8%E7%A5%A825%E4%B8%87%E5%85%83%E8%80%85%E8%A2%AB%E6%8B%98)
1. [灵活就业人员可贷款缴社保](https://www.zhihu.com/search?q=%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E4%BA%BA%E5%91%98%E5%8F%AF%E8%B4%B7%E6%AC%BE%E7%BC%B4%E7%A4%BE%E4%BF%9D)
1. [法国乱成一锅粥了还有人威胁中国](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%E8%BF%98%E6%9C%89%E4%BA%BA%E5%A8%81%E8%83%81%E4%B8%AD%E5%9B%BD)
1. [身披旭日旗留学生被遣返](https://www.zhihu.com/search?q=%E8%BA%AB%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E7%95%99%E5%AD%A6%E7%94%9F%E8%A2%AB%E9%81%A3%E8%BF%94)
1. [李小冉官宣离婚](https://www.zhihu.com/search?q=%E6%9D%8E%E5%B0%8F%E5%86%89%E5%AE%98%E5%AE%A3%E7%A6%BB%E5%A9%9A)
1. [自愿放弃社保无效](https://www.zhihu.com/search?q=%E8%87%AA%E6%84%BF%E6%94%BE%E5%BC%83%E7%A4%BE%E4%BF%9D%E6%97%A0%E6%95%88)
1. [社保基金会副理事长王文灵被双开](https://www.zhihu.com/search?q=%E7%A4%BE%E4%BF%9D%E5%9F%BA%E9%87%91%E4%BC%9A%E5%89%AF%E7%90%86%E4%BA%8B%E9%95%BF%E7%8E%8B%E6%96%87%E7%81%B5%E8%A2%AB%E5%8F%8C%E5%BC%80)
1. [稻城亚丁高反去世男子系非法穿越](https://www.zhihu.com/search?q=%E7%A8%BB%E5%9F%8E%E4%BA%9A%E4%B8%81%E9%AB%98%E5%8F%8D%E5%8E%BB%E4%B8%96%E7%94%B7%E5%AD%90%E7%B3%BB%E9%9D%9E%E6%B3%95%E7%A9%BF%E8%B6%8A)
1. [马斯克宣布给全美儿童送股票](https://www.zhihu.com/search?q=%E9%A9%AC%E6%96%AF%E5%85%8B%E5%AE%A3%E5%B8%83%E7%BB%99%E5%85%A8%E7%BE%8E%E5%84%BF%E7%AB%A5%E9%80%81%E8%82%A1%E7%A5%A8)
1. [吴越质问花姐骗了多少钱](https://www.zhihu.com/search?q=%E5%90%B4%E8%B6%8A%E8%B4%A8%E9%97%AE%E8%8A%B1%E5%A7%90%E9%AA%97%E4%BA%86%E5%A4%9A%E5%B0%91%E9%92%B1)
1. [DeepSeek开放自研搜索API](https://www.zhihu.com/search?q=DeepSeek%E5%BC%80%E6%94%BE%E8%87%AA%E7%A0%94%E6%90%9C%E7%B4%A2API)
1. [小天才手表封闭社交被质疑](https://www.zhihu.com/search?q=%E5%B0%8F%E5%A4%A9%E6%89%8D%E6%89%8B%E8%A1%A8%E5%B0%81%E9%97%AD%E7%A4%BE%E4%BA%A4%E8%A2%AB%E8%B4%A8%E7%96%91)
1. [DeepSeek云服务推理框架DeepInfer](https://www.zhihu.com/search?q=DeepSeek%E4%BA%91%E6%9C%8D%E5%8A%A1%E6%8E%A8%E7%90%86%E6%A1%86%E6%9E%B6DeepInfer)
1. [工信部称确有部分车企产品验证不充分](https://www.zhihu.com/search?q=%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%A7%B0%E7%A1%AE%E6%9C%89%E9%83%A8%E5%88%86%E8%BD%A6%E4%BC%81%E4%BA%A7%E5%93%81%E9%AA%8C%E8%AF%81%E4%B8%8D%E5%85%85%E5%88%86)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Oct 22 2026 03:22:07 GMT+0800 (China Standard Time) -->

1. [两部门发布公告，对盾构机、挖泥船、高端无人机等实施出口管制，释放了哪些信号？](https://www.zhihu.com/question/2095840965227561700)
1. [《红楼梦》中的“茄鲞”是一道杜撰的菜吗？](https://www.zhihu.com/question/25353387)
1. [樊振东发文称不管啥心态，都无法改变偷拍不尊重人的本质，如何看待以爱为名的侵扰？怎样算真正支持运动员？](https://www.zhihu.com/question/2096173845665118000)
1. [连英伟达都承认消费级显卡已超出其控制，AI 显卡内存涨价狂潮何时结束?](https://www.zhihu.com/question/2095674841978488600)
1. [如何看待乘客错过高铁检票后情绪崩溃跪求工作人员，12306 回应无论是否发车不会例外放行？](https://www.zhihu.com/question/2096332490944110600)
1. [泽连斯基表示，乌克兰愿在保留至少75%领土控制权的基础上达成和平协议，你怎么看？](https://www.zhihu.com/question/2096328160241633000)
1. [为啥这几年双十一、双十二活动周期被拉长、玩法不断改进，反而热度好像还不如以前了？你今年有「剁手」吗？](https://www.zhihu.com/question/2095972167292643000)
1. [印度 CA 机构 eMudhra 私钥存严重缺陷遭各大厂商阻断，将带来哪些影响？](https://www.zhihu.com/question/2096267545154172400)
1. [丹麦男子卖中国包子一天赚 5 万元，中式面食在海外有多受欢迎？还有哪些中国传统小吃最有可能在海外走红？](https://www.zhihu.com/question/2095237911004145400)
1. [如何评价山东“仙人跳”犯罪团伙作案38起，其中3名受害者拒不付款被采取强制措施，有哪些细节值得关注？](https://www.zhihu.com/question/2095821509633774600)
1. [如何看待 52 岁刘恺威与 32 岁黎纪君恋情公开，两人因匹克球互生情愫，已秘密恋爱两个月？](https://www.zhihu.com/question/2095834533178208500)
1. [如何看待人民锐评发表文章「特斯拉能飞，我们就被甩开了？」，中国汽车行业未来该如何发展？](https://www.zhihu.com/question/2096169041811478500)
1. [宁德时代 A 股盘中跌超 10％，本轮大跌有哪些诱因？动力电池行业增长逻辑要变了吗？](https://www.zhihu.com/question/2096182082548523300)
1. [一家三口被困酒店卫生间超4小时，其间消防喷淋失控致婴儿险失温，当事人索赔15万，从法律角度如何解读？](https://www.zhihu.com/question/2095917714824853500)
1. [为什么我觉得“强者从不抱怨环境”这句话，本质上是一种对弱者的霸凌？](https://www.zhihu.com/question/2090039238993748700)
1. [土耳其人其实大部分是希腊人后裔，是真的吗？为什么现在的土耳其人大部分都不认同？](https://www.zhihu.com/question/2096313313864804000)
1. [如何理解《万箭穿心》中的李宝莉？](https://www.zhihu.com/question/63633989)
1. [网友高铁偶遇自称114岁老人，能熟练使用智能手机，年龄真实性如何？横跨民国到AI时代的人生会是怎样的？](https://www.zhihu.com/question/2095844033167716900)
1. [医保个人账户跨省共济落地全国，意味着什么？将带来哪些利好？](https://www.zhihu.com/question/2096149013556721400)
1. [陶哲轩和邓煜的对谈《数学与 AI 究竟是什么关系？》，如何理解他们各自的观点？](https://www.zhihu.com/question/2095840244973004000)
1. [女子下班后绕道买菜，遭遇车祸身亡，人社部门不予认定工伤，法院判决算工伤，如何理解？](https://www.zhihu.com/question/2095276237493102000)
1. [伊朗已有超3万名女性忍者，熟练使用弓、剑、飞镖等武器等训练画面走热，背后是怎样的社会文化环境？](https://www.zhihu.com/question/2095115972684112400)
1. [「遇事就慌」是阅历太浅还是性格懦弱？](https://www.zhihu.com/question/49757171)
1. [日本年轻人流行「取消吃饭」，背后折射出怎样的现实困境？](https://www.zhihu.com/question/2095145716528291800)
1. [日本独立游戏开发者称发出去就被 AI 抄走，你觉得独立开发者该怎么办？](https://www.zhihu.com/question/2095491583533658000)
1. [现在 AI 短剧满天飞，怎么没见影视行业人员发声？](https://www.zhihu.com/question/2090228809819862000)
1. [为什么目前 AI 的设备是用 Mac 为主，而不是熟知的 Windows？](https://www.zhihu.com/question/2059660303915397400)
1. [如何评价姚明提出的“体育产业化不能唯金牌论”？](https://www.zhihu.com/question/2085845423416140000)
1. [法国爆发严重暴力骚乱，超50万人上街抗议，马克龙公开谴责，冲突的深层根源是什么？折射出法国怎样的危机？](https://www.zhihu.com/question/2095436236819096000)
1. [历史上哪些人物的结局最令人感到唏嘘和无奈？](https://www.zhihu.com/question/1957042331921393400)

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
<!-- 最后更新时间 Thu Oct 22 2026 03:24:44 GMT+0800 (China Standard Time) -->

1. [我们的长征路](https://s.weibo.com//weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E9%95%BF%E5%BE%81%E8%B7%AF%23&Refer=new_time)
1. [红果短剧自砍摇钱树](https://s.weibo.com//weibo?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E8%87%AA%E7%A0%8D%E6%91%87%E9%92%B1%E6%A0%91&t=31&band_rank=1&Refer=top)
1. [长生 AG](https://s.weibo.com//weibo?q=%E9%95%BF%E7%94%9F%20AG&t=31&band_rank=2&Refer=top)
1. [长征硬核知识点十问十答](https://s.weibo.com//weibo?q=%23%E9%95%BF%E5%BE%81%E7%A1%AC%E6%A0%B8%E7%9F%A5%E8%AF%86%E7%82%B9%E5%8D%81%E9%97%AE%E5%8D%81%E7%AD%94%23&t=31&band_rank=3&Refer=top)
1. [AG 退役](https://s.weibo.com//weibo?q=AG%20%E9%80%80%E5%BD%B9&t=31&band_rank=4&Refer=top)
1. [网友物理推导问界M9车速](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E7%89%A9%E7%90%86%E6%8E%A8%E5%AF%BC%E9%97%AE%E7%95%8CM9%E8%BD%A6%E9%80%9F&t=31&band_rank=5&Refer=top)
1. [曝自费高定艺人名字](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E5%90%8D%E5%AD%97%23&t=31&band_rank=6&Refer=top)
1. [原来明星租一次高定这么贵啊](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E6%98%9F%E7%A7%9F%E4%B8%80%E6%AC%A1%E9%AB%98%E5%AE%9A%E8%BF%99%E4%B9%88%E8%B4%B5%E5%95%8A%23&t=31&band_rank=7&Refer=top)
1. [张小斐 救场](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%95%91%E5%9C%BA&t=31&band_rank=8&Refer=top)
1. [泽连斯基愿保留75%领土以达和平](https://s.weibo.com//weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E6%84%BF%E4%BF%9D%E7%95%9975%25%E9%A2%86%E5%9C%9F%E4%BB%A5%E8%BE%BE%E5%92%8C%E5%B9%B3%23&t=31&band_rank=9&Refer=top)
1. [芭莎 有人在后台不出来](https://s.weibo.com//weibo?q=%E8%8A%AD%E8%8E%8E%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%8E%E5%8F%B0%E4%B8%8D%E5%87%BA%E6%9D%A5&t=31&band_rank=10&Refer=top)
1. [和女同事相处真的要小心分寸](https://s.weibo.com//weibo?q=%E5%92%8C%E5%A5%B3%E5%90%8C%E4%BA%8B%E7%9B%B8%E5%A4%84%E7%9C%9F%E7%9A%84%E8%A6%81%E5%B0%8F%E5%BF%83%E5%88%86%E5%AF%B8&t=31&band_rank=11&Refer=top)
1. [蔡文静在张小斐之前走完红毯了](https://s.weibo.com//weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%9C%A8%E5%BC%A0%E5%B0%8F%E6%96%90%E4%B9%8B%E5%89%8D%E8%B5%B0%E5%AE%8C%E7%BA%A2%E6%AF%AF%E4%BA%86%23&t=31&band_rank=12&Refer=top)
1. [女孩回应撞脸大S](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%E6%92%9E%E8%84%B8%E5%A4%A7S%23&t=31&band_rank=13&Refer=top)
1. [白鹿开毯](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E6%AF%AF%23&t=31&band_rank=14&Refer=top)
1. [祖海高定压轴款](https://s.weibo.com//weibo?q=%23%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%E5%8E%8B%E8%BD%B4%E6%AC%BE%23&t=31&band_rank=15&Refer=top)
1. [肖战小城良方路人进场](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%B7%AF%E4%BA%BA%E8%BF%9B%E5%9C%BA%23&t=31&band_rank=16&Refer=top)
1. [疑似晋妈小号回怼网友](https://s.weibo.com//weibo?q=%23%E7%96%91%E4%BC%BC%E6%99%8B%E5%A6%88%E5%B0%8F%E5%8F%B7%E5%9B%9E%E6%80%BC%E7%BD%91%E5%8F%8B%23&t=31&band_rank=17&Refer=top)
1. [印度男子谋杀39岁中国女子终身监禁](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E8%B0%8B%E6%9D%8039%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E7%BB%88%E8%BA%AB%E7%9B%91%E7%A6%81%23&t=31&band_rank=18&Refer=top)
1. [杭州大学生开一人公司营收破60万](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%BC%80%E4%B8%80%E4%BA%BA%E5%85%AC%E5%8F%B8%E8%90%A5%E6%94%B6%E7%A0%B460%E4%B8%87%23&t=31&band_rank=19&Refer=top)
1. [男子身中17刀身亡17岁少年被刑拘](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E8%BA%AB%E4%B8%AD17%E5%88%80%E8%BA%AB%E4%BA%A117%E5%B2%81%E5%B0%91%E5%B9%B4%E8%A2%AB%E5%88%91%E6%8B%98%23&t=31&band_rank=20&Refer=top)
1. [杨幂压轴](https://s.weibo.com//weibo?q=%E6%9D%A8%E5%B9%82%E5%8E%8B%E8%BD%B4&t=31&band_rank=21&Refer=top)
1. [嫁金钗](https://s.weibo.com//weibo?q=%E5%AB%81%E9%87%91%E9%92%97&t=31&band_rank=22&Refer=top)
1. [料酒去腥的惊天骗局](https://s.weibo.com//weibo?q=%E6%96%99%E9%85%92%E5%8E%BB%E8%85%A5%E7%9A%84%E6%83%8A%E5%A4%A9%E9%AA%97%E5%B1%80&t=31&band_rank=23&Refer=top)
1. [影视飓风iPhoneDuo评测](https://s.weibo.com//weibo?q=%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8EiPhoneDuo%E8%AF%84%E6%B5%8B&t=31&band_rank=24&Refer=top)
1. [蔡文静好惨啊](https://s.weibo.com//weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%A5%BD%E6%83%A8%E5%95%8A%23&t=31&band_rank=25&Refer=top)
1. [16岁男孩睡梦中睾丸扭转720度](https://s.weibo.com//weibo?q=%2316%E5%B2%81%E7%94%B7%E5%AD%A9%E7%9D%A1%E6%A2%A6%E4%B8%AD%E7%9D%BE%E4%B8%B8%E6%89%AD%E8%BD%AC720%E5%BA%A6%23&t=31&band_rank=26&Refer=top)
1. [罗晋和唐嫣讨论女儿画的画](https://s.weibo.com//weibo?q=%23%E7%BD%97%E6%99%8B%E5%92%8C%E5%94%90%E5%AB%A3%E8%AE%A8%E8%AE%BA%E5%A5%B3%E5%84%BF%E7%94%BB%E7%9A%84%E7%94%BB%23&t=31&band_rank=27&Refer=top)
1. [泽连斯基称讨论美俄乌领导人会晤可能性](https://s.weibo.com//weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E8%AE%A8%E8%AE%BA%E7%BE%8E%E4%BF%84%E4%B9%8C%E9%A2%86%E5%AF%BC%E4%BA%BA%E4%BC%9A%E6%99%A4%E5%8F%AF%E8%83%BD%E6%80%A7%23&t=31&band_rank=28&Refer=top)
1. [女子在冰箱养蛙现吃现捞](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%86%B0%E7%AE%B1%E5%85%BB%E8%9B%99%E7%8E%B0%E5%90%83%E7%8E%B0%E6%8D%9E%23&t=31&band_rank=29&Refer=top)
1. [穆霍娃入围总决赛](https://s.weibo.com//weibo?q=%23%E7%A9%86%E9%9C%8D%E5%A8%83%E5%85%A5%E5%9B%B4%E6%80%BB%E5%86%B3%E8%B5%9B%23&t=31&band_rank=30&Refer=top)
1. [上海婚纱店认领祖海高定](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A9%9A%E7%BA%B1%E5%BA%97%E8%AE%A4%E9%A2%86%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%23&t=31&band_rank=31&Refer=top)
1. [刘铮亮父亲冬泳溺亡](https://s.weibo.com//weibo?q=%E5%88%98%E9%93%AE%E4%BA%AE%E7%88%B6%E4%BA%B2%E5%86%AC%E6%B3%B3%E6%BA%BA%E4%BA%A1&t=31&band_rank=32&Refer=top)
1. [本年度最会怼人的网友出现了](https://s.weibo.com//weibo?q=%E6%9C%AC%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BC%9A%E6%80%BC%E4%BA%BA%E7%9A%84%E7%BD%91%E5%8F%8B%E5%87%BA%E7%8E%B0%E4%BA%86&t=31&band_rank=33&Refer=top)
1. [盛艾敬父母欠薪遭韩网批评](https://s.weibo.com//weibo?q=%E7%9B%9B%E8%89%BE%E6%95%AC%E7%88%B6%E6%AF%8D%E6%AC%A0%E8%96%AA%E9%81%AD%E9%9F%A9%E7%BD%91%E6%89%B9%E8%AF%84&t=31&band_rank=34&Refer=top)
1. [曝自费高定艺人把品牌pr气坏了](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E6%8A%8A%E5%93%81%E7%89%8Cpr%E6%B0%94%E5%9D%8F%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [樊振东这次发文又引用了中庸和孟子](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BF%99%E6%AC%A1%E5%8F%91%E6%96%87%E5%8F%88%E5%BC%95%E7%94%A8%E4%BA%86%E4%B8%AD%E5%BA%B8%E5%92%8C%E5%AD%9F%E5%AD%90%23&t=31&band_rank=36&Refer=top)
1. [王栎鑫前妻晚上经常哭](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A0%8E%E9%91%AB%E5%89%8D%E5%A6%BB%E6%99%9A%E4%B8%8A%E7%BB%8F%E5%B8%B8%E5%93%AD%23&t=31&band_rank=37&Refer=top)
1. [fm 火力全开](https://s.weibo.com//weibo?q=fm%20%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80&t=31&band_rank=38&Refer=top)
1. [罗晋称呼唐嫣我太太](https://s.weibo.com//weibo?q=%23%E7%BD%97%E6%99%8B%E7%A7%B0%E5%91%BC%E5%94%90%E5%AB%A3%E6%88%91%E5%A4%AA%E5%A4%AA%23&t=31&band_rank=39&Refer=top)
1. [问界辟谣网传电池爆燃智驾撞击](https://s.weibo.com//weibo?q=%23%E9%97%AE%E7%95%8C%E8%BE%9F%E8%B0%A3%E7%BD%91%E4%BC%A0%E7%94%B5%E6%B1%A0%E7%88%86%E7%87%83%E6%99%BA%E9%A9%BE%E6%92%9E%E5%87%BB%23&t=31&band_rank=40&Refer=top)
1. [一诺状态](https://s.weibo.com//weibo?q=%E4%B8%80%E8%AF%BA%E7%8A%B6%E6%80%81&t=31&band_rank=41&Refer=top)
1. [肖战刘铮亮当群演了](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%88%98%E9%93%AE%E4%BA%AE%E5%BD%93%E7%BE%A4%E6%BC%94%E4%BA%86%23&t=31&band_rank=42&Refer=top)
1. [2026共创之夜节目抽象剧透](https://s.weibo.com//weibo?q=%232026%E5%85%B1%E5%88%9B%E4%B9%8B%E5%A4%9C%E8%8A%82%E7%9B%AE%E6%8A%BD%E8%B1%A1%E5%89%A7%E9%80%8F%23&t=31&band_rank=43&Refer=top)
1. [iPhoneDuo折痕真实体验](https://s.weibo.com//weibo?q=%23iPhoneDuo%E6%8A%98%E7%97%95%E7%9C%9F%E5%AE%9E%E4%BD%93%E9%AA%8C%23&t=31&band_rank=44&Refer=top)
1. [陈天润恋情传闻](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%A4%A9%E6%B6%A6%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%23&t=31&band_rank=45&Refer=top)
1. [芭莎内场座位](https://s.weibo.com//weibo?q=%E8%8A%AD%E8%8E%8E%E5%86%85%E5%9C%BA%E5%BA%A7%E4%BD%8D&t=31&band_rank=46&Refer=top)
1. [钟意长生拥抱](https://s.weibo.com//weibo?q=%23%E9%92%9F%E6%84%8F%E9%95%BF%E7%94%9F%E6%8B%A5%E6%8A%B1%23&t=31&band_rank=47&Refer=top)
1. [我已经变成被时代抛弃的老人](https://s.weibo.com//weibo?q=%E6%88%91%E5%B7%B2%E7%BB%8F%E5%8F%98%E6%88%90%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%8A%9B%E5%BC%83%E7%9A%84%E8%80%81%E4%BA%BA&t=31&band_rank=48&Refer=top)
1. [儿童手表三亚遗失后被带到俄罗斯](https://s.weibo.com//weibo?q=%23%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8%E4%B8%89%E4%BA%9A%E9%81%97%E5%A4%B1%E5%90%8E%E8%A2%AB%E5%B8%A6%E5%88%B0%E4%BF%84%E7%BD%97%E6%96%AF%23&t=31&band_rank=49&Refer=top)
1. [河南博物馆偶遇14岁满级小孩](https://s.weibo.com//weibo?q=%E6%B2%B3%E5%8D%97%E5%8D%9A%E7%89%A9%E9%A6%86%E5%81%B6%E9%81%8714%E5%B2%81%E6%BB%A1%E7%BA%A7%E5%B0%8F%E5%AD%A9&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
