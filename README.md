# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-23 10:47:20

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
<!-- 最后更新时间 Mon Nov 23 2026 07:47:22 GMT+0800 (China Standard Time) -->

1. [“1991年张大爷”刷屏](https://so.toutiao.com/search?keyword=“1991年张大爷”刷屏)
1. [日本网友对比石破茂与高市APEC表现](https://so.toutiao.com/search?keyword=日本网友对比石破茂与高市APEC表现)
1. [权威数读观中国](https://so.toutiao.com/search?keyword=权威数读观中国)
1. [《芯片战争》作者警告美国](https://so.toutiao.com/search?keyword=《芯片战争》作者警告美国)
1. [俄乌两军在多线激烈交战](https://so.toutiao.com/search?keyword=俄乌两军在多线激烈交战)
1. [七个葫芦娃姐姐出嫁七兄弟送嫁](https://so.toutiao.com/search?keyword=七个葫芦娃姐姐出嫁七兄弟送嫁)
1. [男子剪发后气质变化有多大](https://so.toutiao.com/search?keyword=男子剪发后气质变化有多大)
1. [小区277户只有约100家一直交物业费](https://so.toutiao.com/search?keyword=小区277户只有约100家一直交物业费)
1. [日媒逐帧解析特朗普无视高市](https://so.toutiao.com/search?keyword=日媒逐帧解析特朗普无视高市)
1. [甩头哥回应张雪将麻阳红糖印上赛车](https://so.toutiao.com/search?keyword=甩头哥回应张雪将麻阳红糖印上赛车)
1. [“防非反诈”系列条漫](https://so.toutiao.com/search?keyword=“防非反诈”系列条漫)
1. [三亚凤凰机场等被暂停全军采购资格](https://so.toutiao.com/search?keyword=三亚凤凰机场等被暂停全军采购资格)
1. [主播糟蹋千斤苹果仅愿赔6000元](https://so.toutiao.com/search?keyword=主播糟蹋千斤苹果仅愿赔6000元)
1. [去世到安葬不超24小时？山东一地回应](https://so.toutiao.com/search?keyword=去世到安葬不超24小时？山东一地回应)
1. [特朗普回应普京是朋友](https://so.toutiao.com/search?keyword=特朗普回应普京是朋友)
1. [冬天最好的养生就是多睡觉](https://so.toutiao.com/search?keyword=冬天最好的养生就是多睡觉)
1. [为何外国不搞新能源汽车](https://so.toutiao.com/search?keyword=为何外国不搞新能源汽车)
1. [特朗普连发30多张照片回味APEC](https://so.toutiao.com/search?keyword=特朗普连发30多张照片回味APEC)
1. [韦东奕再获奖](https://so.toutiao.com/search?keyword=韦东奕再获奖)
1. [女博士卧底6个月当主播仍有心理阴影](https://so.toutiao.com/search?keyword=女博士卧底6个月当主播仍有心理阴影)
1. [菲律宾8名警察绑架中国女富商](https://so.toutiao.com/search?keyword=菲律宾8名警察绑架中国女富商)
1. [石破茂就中日关系再批高市早苗](https://so.toutiao.com/search?keyword=石破茂就中日关系再批高市早苗)
1. [利物浦4-0曼联](https://so.toutiao.com/search?keyword=利物浦4-0曼联)
1. [陈数高清怼脸直拍下状态绝了](https://so.toutiao.com/search?keyword=陈数高清怼脸直拍下状态绝了)
1. [A股迎稳市组合拳](https://so.toutiao.com/search?keyword=A股迎稳市组合拳)
1. [国际乒联最新世界排名发布](https://so.toutiao.com/search?keyword=国际乒联最新世界排名发布)
1. [铲除候鸟盗猎黑链更要拆餐桌的网](https://so.toutiao.com/search?keyword=铲除候鸟盗猎黑链更要拆餐桌的网)
1. [甩头哥回应被张雪邀约吃饭](https://so.toutiao.com/search?keyword=甩头哥回应被张雪邀约吃饭)
1. [高血压患者到底能不能吃苹果](https://so.toutiao.com/search?keyword=高血压患者到底能不能吃苹果)
1. [朱婷12分 科内利亚诺豪取十连胜](https://so.toutiao.com/search?keyword=朱婷12分%20科内利亚诺豪取十连胜)
1. [美联储收割大清算来了吗](https://so.toutiao.com/search?keyword=美联储收割大清算来了吗)
1. [深圳水贝商家提前备货迎接购金潮](https://so.toutiao.com/search?keyword=深圳水贝商家提前备货迎接购金潮)
1. [阿尔卡拉斯首夺ATP总决赛冠军](https://so.toutiao.com/search?keyword=阿尔卡拉斯首夺ATP总决赛冠军)
1. [74岁独居老人将余生托付给监护机构](https://so.toutiao.com/search?keyword=74岁独居老人将余生托付给监护机构)
1. [杨德龙：市场有望在震荡中修复](https://so.toutiao.com/search?keyword=杨德龙：市场有望在震荡中修复)
1. [从《慌啥子嘛》看流行文化情绪渡口](https://so.toutiao.com/search?keyword=从《慌啥子嘛》看流行文化情绪渡口)
1. [古代从南京跑到北京十五天够用吗](https://so.toutiao.com/search?keyword=古代从南京跑到北京十五天够用吗)
1. [新一轮雨雪将影响哪些地方](https://so.toutiao.com/search?keyword=新一轮雨雪将影响哪些地方)
1. [为何说中国新能源重塑汽车行业规则](https://so.toutiao.com/search?keyword=为何说中国新能源重塑汽车行业规则)
1. [酒泉遇初冬低温 中国航天如何应对](https://so.toutiao.com/search?keyword=酒泉遇初冬低温%20中国航天如何应对)
1. [曼联防线最可靠的还是马奎尔](https://so.toutiao.com/search?keyword=曼联防线最可靠的还是马奎尔)
1. [超九成台湾民众支持普发现金](https://so.toutiao.com/search?keyword=超九成台湾民众支持普发现金)
1. [林更新再现北京到底有谁在名场面](https://so.toutiao.com/search?keyword=林更新再现北京到底有谁在名场面)
1. [余文乐自曝躯体化严重到不能开车](https://so.toutiao.com/search?keyword=余文乐自曝躯体化严重到不能开车)
1. [巴萨让二追三逆转黄潜](https://so.toutiao.com/search?keyword=巴萨让二追三逆转黄潜)
1. [景德镇市委书记陈克龙任江西省委常委](https://so.toutiao.com/search?keyword=景德镇市委书记陈克龙任江西省委常委)
1. [影石“全景任意门”周末人山人海](https://so.toutiao.com/search?keyword=影石“全景任意门”周末人山人海)
1. [基恩：约罗防守很糟糕](https://so.toutiao.com/search?keyword=基恩：约罗防守很糟糕)
1. [超200家公司被禁止或暂停参加军采](https://so.toutiao.com/search?keyword=超200家公司被禁止或暂停参加军采)
1. [俄称打击乌克兰能源设施](https://so.toutiao.com/search?keyword=俄称打击乌克兰能源设施)
1. [亚洲市场集体打响保卫战](https://so.toutiao.com/search?keyword=亚洲市场集体打响保卫战)
1. [黄金这波暴跌割了谁的韭菜](https://so.toutiao.com/search?keyword=黄金这波暴跌割了谁的韭菜)
1. [“稳股市”组合拳来了](https://so.toutiao.com/search?keyword=“稳股市”组合拳来了)
1. [特朗普回应深圳乘车时不拉窗帘](https://so.toutiao.com/search?keyword=特朗普回应深圳乘车时不拉窗帘)
1. [57岁窦唯被曝四婚](https://so.toutiao.com/search?keyword=57岁窦唯被曝四婚)
1. [主播私闯果园糟蹋千斤苹果仅愿赔6千元](https://so.toutiao.com/search?keyword=主播私闯果园糟蹋千斤苹果仅愿赔6千元)
1. [泽连斯基：近一周乌20州遭俄军空袭](https://so.toutiao.com/search?keyword=泽连斯基：近一周乌20州遭俄军空袭)
1. [专家：原油大概率要跌破60美元](https://so.toutiao.com/search?keyword=专家：原油大概率要跌破60美元)
1. [李大霄：救市组合拳有助于市场稳定](https://so.toutiao.com/search?keyword=李大霄：救市组合拳有助于市场稳定)
1. [iPhone Duo渠道价已低于官方价](https://so.toutiao.com/search?keyword=iPhone%20Duo渠道价已低于官方价)
1. [美国封住号码资源入口有何影响](https://so.toutiao.com/search?keyword=美国封住号码资源入口有何影响)
1. [数码城老板说iPhone Duo质量相当差](https://so.toutiao.com/search?keyword=数码城老板说iPhone%20Duo质量相当差)
1. [俄罗斯称打击乌能源、港口设施](https://so.toutiao.com/search?keyword=俄罗斯称打击乌能源、港口设施)
1. [第一批培养AI萌宠的人已赚翻](https://so.toutiao.com/search?keyword=第一批培养AI萌宠的人已赚翻)
1. [专家：A股“新政”夯实企稳回升基础](https://so.toutiao.com/search?keyword=专家：A股“新政”夯实企稳回升基础)
1. [行贿嫌犯刘贤志被遣返回国](https://so.toutiao.com/search?keyword=行贿嫌犯刘贤志被遣返回国)
1. [主持人朱军被聘为滇池学院客座教授](https://so.toutiao.com/search?keyword=主持人朱军被聘为滇池学院客座教授)
1. [买羽绒服别只盯价格](https://so.toutiao.com/search?keyword=买羽绒服别只盯价格)
1. [俄船只在利比亚海军基地遭无人机袭击](https://so.toutiao.com/search?keyword=俄船只在利比亚海军基地遭无人机袭击)
1. [融资保证金比例调整能让市场反转吗](https://so.toutiao.com/search?keyword=融资保证金比例调整能让市场反转吗)
1. [全球资产定价再校准](https://so.toutiao.com/search?keyword=全球资产定价再校准)
1. [吉安市委书记严允任江西省委常委](https://so.toutiao.com/search?keyword=吉安市委书记严允任江西省委常委)
1. [俄导弹击中前方建筑乌司机急倒车逃生](https://so.toutiao.com/search?keyword=俄导弹击中前方建筑乌司机急倒车逃生)
1. [糖尿病正快速年轻化](https://so.toutiao.com/search?keyword=糖尿病正快速年轻化)
1. [樊振东入选亚太U30杰出青年领袖榜单](https://so.toutiao.com/search?keyword=樊振东入选亚太U30杰出青年领袖榜单)
1. [美国防公司称西方没人希望乌克兰获胜](https://so.toutiao.com/search?keyword=美国防公司称西方没人希望乌克兰获胜)
1. [王一博入选亚太最具影响力青年男性](https://so.toutiao.com/search?keyword=王一博入选亚太最具影响力青年男性)
1. [新一轮稳市组合拳有何不同寻常之处](https://so.toutiao.com/search?keyword=新一轮稳市组合拳有何不同寻常之处)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Mon Nov 23 2026 10:40:02 GMT+0800 (China Standard Time) -->

1. [AI证明黎曼猜想](https://www.zhihu.com/search?q=AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [黎曼猜想证明被Lean社区确认](https://www.zhihu.com/search?q=%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E8%AF%81%E6%98%8E%E8%A2%ABLean%E7%A4%BE%E5%8C%BA%E7%A1%AE%E8%AE%A4)
1. [李子柒当选四川文联副主席](https://www.zhihu.com/search?q=%E6%9D%8E%E5%AD%90%E6%9F%92%E5%BD%93%E9%80%89%E5%9B%9B%E5%B7%9D%E6%96%87%E8%81%94%E5%89%AF%E4%B8%BB%E5%B8%AD)
1. [樊振东1比3负于约内斯库](https://www.zhihu.com/search?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C1%E6%AF%943%E8%B4%9F%E4%BA%8E%E7%BA%A6%E5%86%85%E6%96%AF%E5%BA%93)
1. [主播私闯果园带货糟蹋近200斤苹果](https://www.zhihu.com/search?q=%E4%B8%BB%E6%92%AD%E7%A7%81%E9%97%AF%E6%9E%9C%E5%9B%AD%E5%B8%A6%E8%B4%A7%E7%B3%9F%E8%B9%8B%E8%BF%91200%E6%96%A4%E8%8B%B9%E6%9E%9C)
1. [DeepSeek调整API定价](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4API%E5%AE%9A%E4%BB%B7)
1. [荷兰法院裁定比亚迪Ti7抄袭路虎卫士](https://www.zhihu.com/search?q=%E8%8D%B7%E5%85%B0%E6%B3%95%E9%99%A2%E8%A3%81%E5%AE%9A%E6%AF%94%E4%BA%9A%E8%BF%AATi7%E6%8A%84%E8%A2%AD%E8%B7%AF%E8%99%8E%E5%8D%AB%E5%A3%AB)
1. [数学家完成NS方程无外力证明](https://www.zhihu.com/search?q=%E6%95%B0%E5%AD%A6%E5%AE%B6%E5%AE%8C%E6%88%90NS%E6%96%B9%E7%A8%8B%E6%97%A0%E5%A4%96%E5%8A%9B%E8%AF%81%E6%98%8E)
1. [Anthropic上市](https://www.zhihu.com/search?q=Anthropic%E4%B8%8A%E5%B8%82)
1. [美媒称黄仁勋常态化羞辱员工](https://www.zhihu.com/search?q=%E7%BE%8E%E5%AA%92%E7%A7%B0%E9%BB%84%E4%BB%81%E5%8B%8B%E5%B8%B8%E6%80%81%E5%8C%96%E7%BE%9E%E8%BE%B1%E5%91%98%E5%B7%A5)
1. [DeepSeek调整对话上限长度](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4%E5%AF%B9%E8%AF%9D%E4%B8%8A%E9%99%90%E9%95%BF%E5%BA%A6)
1. [邓煜：人不能放弃思考给AI当狗](https://www.zhihu.com/search?q=%E9%82%93%E7%85%9C%EF%BC%9A%E4%BA%BA%E4%B8%8D%E8%83%BD%E6%94%BE%E5%BC%83%E6%80%9D%E8%80%83%E7%BB%99AI%E5%BD%93%E7%8B%97)
1. [主播私闯果园带货糟蹋一千多斤苹果](https://www.zhihu.com/search?q=%E4%B8%BB%E6%92%AD%E7%A7%81%E9%97%AF%E6%9E%9C%E5%9B%AD%E5%B8%A6%E8%B4%A7%E7%B3%9F%E8%B9%8B%E4%B8%80%E5%8D%83%E5%A4%9A%E6%96%A4%E8%8B%B9%E6%9E%9C)
1. [美拟禁止中国运营商获取电话号码资源](https://www.zhihu.com/search?q=%E7%BE%8E%E6%8B%9F%E7%A6%81%E6%AD%A2%E4%B8%AD%E5%9B%BD%E8%BF%90%E8%90%A5%E5%95%86%E8%8E%B7%E5%8F%96%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E8%B5%84%E6%BA%90)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Nov 23 2026 10:47:20 GMT+0800 (China Standard Time) -->

1. [方力申耗时 8 小时 37 分 24 秒从香港游到澳门破吉尼斯纪录，完成这样的挑战难度有多大？](https://www.zhihu.com/question/2107848989819326700)
1. [在黎曼猜想被声称证明后，如何理解袁新意所说的「或许我们高估了黎曼猜想的难度」？](https://www.zhihu.com/question/2107618428508792600)
1. [编剧芦苇评价《给阿嬷的情书》是合格水准，但很难成为经典，劣币驱逐良币时代是良心之作，怎样理解这一说法？](https://www.zhihu.com/question/2107906248599234000)
1. [主播私闯果园直播带货糟蹋近200斤苹果，官方通报其系误入，相关损失应如何认定和赔偿？](https://www.zhihu.com/question/2107832519722792000)
1. [张水华黄石马拉松破个人纪录夺冠，6周连跑6场获5冠1亚，如何评价她的表现？](https://www.zhihu.com/question/2107832295511913700)
1. [27岁庞众望完成博士论文答辩，即将从清华毕业，未来有望朝什么方向发展？他的求学之路给我们什么启示？](https://www.zhihu.com/question/2107184597846975000)
1. [如何看待曝 Tarzan 向 AL 提出解约？若Tarzan离队成功将会对AL产生哪些影响？](https://www.zhihu.com/question/2107535407227172400)
1. [芜湖一住户割断高空作业工人安全绳，警方正在侦办，该住户需承担哪些法律责任？](https://www.zhihu.com/question/2105992057642865200)
1. [2026年乒乓球德甲联赛第九轮，樊振东1：3负于约内斯库，怎么评价樊振东代表杜塞尔多夫的这一场失利？](https://www.zhihu.com/question/2107985884800984600)
1. [为什么大便之前体重和大便之后的体重一样？难道排泄物没有重量吗？](https://www.zhihu.com/question/2105195950671245300)
1. [日媒逐帧解析高市早苗遭特朗普无视，直呼耻辱，为何日本对此如此破防？反映了日本舆论对日美互动怎样的心态？](https://www.zhihu.com/question/2107806853543323000)
1. [刘若川院士谈黎曼猜想证明，称「数学研究进入工业化时代」，如何理解他的这一论断？](https://www.zhihu.com/question/2107941904419485000)
1. [DeepSeek 推出限额规则，不少重度免费用户主动求付费保留长对话，这暴露出哪些行业现实问题？](https://www.zhihu.com/question/2107183345205626400)
1. [户均 2.52 人开发商却主推三居，为什么现在 89 平方米刚需户型重新走热？](https://www.zhihu.com/question/2107410857026234000)
1. [如何看待母亲拒送8岁女儿上学遭起诉，自称替人类示范在家教育，结果女儿连自己名字都写错、语文仅考6分？](https://www.zhihu.com/question/2107787943242896100)
1. [如何评价 Google 发布的 Gemini 4 Neon？](https://www.zhihu.com/question/2106628033834768000)
1. [张家齐妈妈按女儿要求写下400字反思并道歉，承认自己太唠叨，一次道歉能修复长期疏远的亲子关系吗？](https://www.zhihu.com/question/2107891385890071300)
1. [歼-10C 首次挂载改进型俄制重型打击导弹，这一搭配能带来哪些作战优势？](https://www.zhihu.com/question/2105946747533006300)
1. [海贼王1199话更新，如何看待路飞对队友出手？](https://www.zhihu.com/question/2106795927608608800)
1. [如何评价佟丽娅、王皓主演的喜剧电影《我没错！》？](https://www.zhihu.com/question/2104633342549300500)
1. [如何看待越南正式宣布取消贩毒、强奸未成年等6项死刑，已判死刑未执行的改为无期？](https://www.zhihu.com/question/2107800314518714000)
1. [如何评价《侠盗猎车手 VI》（GTA 6）的结局？](https://www.zhihu.com/question/2107491544735470800)
1. [同样是蛋白质，为什么提倡喝牛奶而不是吃鸡蛋?](https://www.zhihu.com/question/623251460)
1. [孩子放学后跟我说“妈妈，今天班主任又发火了，在班里骂我们班考得真差，丢人？”，你怎么回答？](https://www.zhihu.com/question/2106763437380523300)
1. [真正做价值投资的人，从「觉得便宜」到决定买入或放弃，实际要做哪些研究？](https://www.zhihu.com/question/2105403234298721800)
1. [有没有一种绩效考核方法，能让员工自己追着目标跑，而不是老板天天盯着？](https://www.zhihu.com/question/2027723861337056300)
1. [中小学生才艺表演赢得的赞美和掌声，是否会让孩子对文艺出现打游戏似的上瘾、虚荣心暴涨、从而荒废学业？](https://www.zhihu.com/question/2011013004699919000)
1. [职场中前辈谏言”该打听、不该打听的都不要打听“，那到底是”该打听，还是不该打听“。？](https://www.zhihu.com/question/2080239269139031300)
1. [人生在世应该怎么过？](https://www.zhihu.com/question/2100147338769609200)
1. [曝 ShowMaker 宁愿大幅度降薪也希望留在 DK，如何评价他的选择？DK 目前情况有多糟？](https://www.zhihu.com/question/2105979786103191300)
1. [交易所打出稳市「组合拳」，沪深北交易所降低融资保证金比例下限至 80%，意味着什么？释放了哪些信号？](https://www.zhihu.com/question/2107908002430678000)
1. [P/NP 问题如果被解决，会对计算机科学带来哪些革命性影响？](https://www.zhihu.com/question/2014398013381044000)
1. [长安大学回应「14日面试13日出结果」，公告误带后台草稿的创建日期，三名人事干部被处分，如何看待此事？](https://www.zhihu.com/question/2107570779529529000)
1. [AI短剧、AI漫剧现在这么火爆，为什么我感觉大多数角色的脸都一样？大家不会视觉疲劳吗？](https://www.zhihu.com/question/2079246734493066500)
1. [为什么现在90后，00后年轻人不再给领导提供情绪价值了？](https://www.zhihu.com/question/2103088984821871000)
1. [如何评价《斗破苍穹剧场版：双帝之战》？](https://www.zhihu.com/question/2107829204641490000)
1. [为什么看完AI短剧以后，就看不进真人演的剧呢？](https://www.zhihu.com/question/2096651689738687700)
1. [2627赛季英超联赛英超第11轮利物浦 4:0 曼联，如何评价这场比赛？](https://www.zhihu.com/question/2107995201918723800)
1. [如何看待女子嫌老公熬夜打游戏，发「追杀令」求助网友狙击老公ID，其老公称「你们找不到我」被玩家围剿？](https://www.zhihu.com/question/2106418067513386200)
1. [纳指跌超5%，英伟达跌14%，BTC跌破6万美元，黄金濒临3500美元，本轮跨市场金融冲击何时止？](https://www.zhihu.com/question/2107407389817321500)
1. [网友称在父母面前切换成「无性别低智儿童」，被问到工作、婚恋话题都说「不知道」，为啥要这样？这招管用吗？](https://www.zhihu.com/question/2106716173475788300)
1. [如何看待2026年考CPA人数大幅下降这事？](https://www.zhihu.com/question/2078984762836923000)
1. [特斯拉车主发布 FSDv15 全新可视化界面，马斯克称驾驶能力已超越人类，有哪些值得关注的亮点？](https://www.zhihu.com/question/2107700250081228000)
1. [《复联4》后漫威作品质量参差不齐，但为了《复联5》，哪些作品必须补课？](https://www.zhihu.com/question/2105575512722641700)
1. [袁记云饺通过港交所聆讯，即将冲击「现制饺子第一股」，为何选择此时上市？登陆港股后你看好它的前景吗？](https://www.zhihu.com/question/2107202859074680000)
1. [长征九号为什么放弃了大推力发动机转而用一堆小推力发动机组合？](https://www.zhihu.com/question/2078097782808769300)
1. [为什么暴雪对魔兽争霸的某个兵种微调一下参数就会导致种族平衡发生巨大变化？](https://www.zhihu.com/question/1984182174828761300)
1. [汉字简化的过程中，为何很多汉字的部首被用“又”字和叉代替？](https://www.zhihu.com/question/6303982848)
1. [如果晴雯顺利做了宝玉的小妾，也生了孩子，她会活成2.0版的赵姨娘吗？](https://www.zhihu.com/question/2020390900749070300)
1. [cpu中有哪些“神u”？](https://www.zhihu.com/question/11925382573)

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
<!-- 最后更新时间 Mon Nov 23 2026 06:32:28 GMT+0800 (China Standard Time) -->

1. [亚太同行深入人心](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E5%A4%AA%E5%90%8C%E8%A1%8C%E6%B7%B1%E5%85%A5%E4%BA%BA%E5%BF%83%23&Refer=new_time)
1. [樊振东1比3约内斯库](https://s.weibo.com//weibo?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C1%E6%AF%943%E7%BA%A6%E5%86%85%E6%96%AF%E5%BA%93&t=31&band_rank=1&Refer=top)
1. [央视主持人录节目假牙丢了](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%BD%95%E8%8A%82%E7%9B%AE%E5%81%87%E7%89%99%E4%B8%A2%E4%BA%86%23&t=31&band_rank=2&Refer=top)
1. [诗词里的千年文脉](https://s.weibo.com//weibo?q=%23%E8%AF%97%E8%AF%8D%E9%87%8C%E7%9A%84%E5%8D%83%E5%B9%B4%E6%96%87%E8%84%89%23&t=31&band_rank=3&Refer=top)
1. [私闯果园糟蹋水果主播下架所有视频](https://s.weibo.com//weibo?q=%23%E7%A7%81%E9%97%AF%E6%9E%9C%E5%9B%AD%E7%B3%9F%E8%B9%8B%E6%B0%B4%E6%9E%9C%E4%B8%BB%E6%92%AD%E4%B8%8B%E6%9E%B6%E6%89%80%E6%9C%89%E8%A7%86%E9%A2%91%23&t=31&band_rank=4&Refer=top)
1. [青稚夺冠后直播热度](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E5%A4%BA%E5%86%A0%E5%90%8E%E7%9B%B4%E6%92%AD%E7%83%AD%E5%BA%A6%23&t=31&band_rank=5&Refer=top)
1. [中戏同学成顶流男演员却当NPC](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E6%88%8F%E5%90%8C%E5%AD%A6%E6%88%90%E9%A1%B6%E6%B5%81%E7%94%B7%E6%BC%94%E5%91%98%E5%8D%B4%E5%BD%93NPC%23&t=31&band_rank=6&Refer=top)
1. [赵本山女儿和老公两地分居](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E5%A5%B3%E5%84%BF%E5%92%8C%E8%80%81%E5%85%AC%E4%B8%A4%E5%9C%B0%E5%88%86%E5%B1%85%23&t=31&band_rank=7&Refer=top)
1. [2026亚太最具影响力青年男性TOP100](https://s.weibo.com//weibo?q=2026%E4%BA%9A%E5%A4%AA%E6%9C%80%E5%85%B7%E5%BD%B1%E5%93%8D%E5%8A%9B%E9%9D%92%E5%B9%B4%E7%94%B7%E6%80%A7TOP100&t=31&band_rank=8&Refer=top)
1. [主播糟蹋千斤苹果仅赔6000元](https://s.weibo.com//weibo?q=%23%E4%B8%BB%E6%92%AD%E7%B3%9F%E8%B9%8B%E5%8D%83%E6%96%A4%E8%8B%B9%E6%9E%9C%E4%BB%85%E8%B5%946000%E5%85%83%23&t=31&band_rank=9&Refer=top)
1. [弗朗西斯卡太熟樊振东球路](https://s.weibo.com//weibo?q=%E5%BC%97%E6%9C%97%E8%A5%BF%E6%96%AF%E5%8D%A1%E5%A4%AA%E7%86%9F%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%90%83%E8%B7%AF&t=31&band_rank=10&Refer=top)
1. [血压这个区间不再视作接近正常](https://s.weibo.com//weibo?q=%23%E8%A1%80%E5%8E%8B%E8%BF%99%E4%B8%AA%E5%8C%BA%E9%97%B4%E4%B8%8D%E5%86%8D%E8%A7%86%E4%BD%9C%E6%8E%A5%E8%BF%91%E6%AD%A3%E5%B8%B8%23&t=31&band_rank=11&Refer=top)
1. [朱一龙赵丽颖顶峰相见](https://s.weibo.com//weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%A1%B6%E5%B3%B0%E7%9B%B8%E8%A7%81%23&t=31&band_rank=12&Refer=top)
1. [杜塞尔多夫3比1萨尔布吕肯](https://s.weibo.com//weibo?q=%23%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB3%E6%AF%941%E8%90%A8%E5%B0%94%E5%B8%83%E5%90%95%E8%82%AF%23&t=31&band_rank=13&Refer=top)
1. [特朗普发APEC合照配文GOAT](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91APEC%E5%90%88%E7%85%A7%E9%85%8D%E6%96%87GOAT%23&t=31&band_rank=14&Refer=top)
1. [利物浦4比0曼联](https://s.weibo.com//weibo?q=%E5%88%A9%E7%89%A9%E6%B5%A64%E6%AF%940%E6%9B%BC%E8%81%94&t=31&band_rank=15&Refer=top)
1. [成毅白龙挂镜头太震撼了](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E7%99%BD%E9%BE%99%E6%8C%82%E9%95%9C%E5%A4%B4%E5%A4%AA%E9%9C%87%E6%92%BC%E4%BA%86%23&t=31&band_rank=16&Refer=top)
1. [白小纯被换下童家堡吃鸡](https://s.weibo.com//weibo?q=%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%A2%AB%E6%8D%A2%E4%B8%8B%E7%AB%A5%E5%AE%B6%E5%A0%A1%E5%90%83%E9%B8%A1&t=31&band_rank=17&Refer=top)
1. [女儿回应父亲交往母亲第三者的前妻](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%84%BF%E5%9B%9E%E5%BA%94%E7%88%B6%E4%BA%B2%E4%BA%A4%E5%BE%80%E6%AF%8D%E4%BA%B2%E7%AC%AC%E4%B8%89%E8%80%85%E7%9A%84%E5%89%8D%E5%A6%BB%23&t=31&band_rank=18&Refer=top)
1. [人类的智商是被孩子逼到迭代的](https://s.weibo.com//weibo?q=%E4%BA%BA%E7%B1%BB%E7%9A%84%E6%99%BA%E5%95%86%E6%98%AF%E8%A2%AB%E5%AD%A9%E5%AD%90%E9%80%BC%E5%88%B0%E8%BF%AD%E4%BB%A3%E7%9A%84&t=31&band_rank=19&Refer=top)
1. [A股迎来三大利好](https://s.weibo.com//weibo?q=%23A%E8%82%A1%E8%BF%8E%E6%9D%A5%E4%B8%89%E5%A4%A7%E5%88%A9%E5%A5%BD%23&t=31&band_rank=20&Refer=top)
1. [青稚直播30万人](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E7%9B%B4%E6%92%AD30%E4%B8%87%E4%BA%BA%23&t=31&band_rank=21&Refer=top)
1. [阿尔卡拉斯首夺总决赛冠军](https://s.weibo.com//weibo?q=%23%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AF%E9%A6%96%E5%A4%BA%E6%80%BB%E5%86%B3%E8%B5%9B%E5%86%A0%E5%86%9B%23&t=31&band_rank=22&Refer=top)
1. [医生建议冬天减肥可以多吃点火锅](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E5%86%AC%E5%A4%A9%E5%87%8F%E8%82%A5%E5%8F%AF%E4%BB%A5%E5%A4%9A%E5%90%83%E7%82%B9%E7%81%AB%E9%94%85%23&t=31&band_rank=23&Refer=top)
1. [弗朗西斯卡逗笑樊振东](https://s.weibo.com//weibo?q=%E5%BC%97%E6%9C%97%E8%A5%BF%E6%96%AF%E5%8D%A1%E9%80%97%E7%AC%91%E6%A8%8A%E6%8C%AF%E4%B8%9C&t=31&band_rank=24&Refer=top)
1. [樊振东德甲](https://s.weibo.com//weibo?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BE%B7%E7%94%B2&t=31&band_rank=25&Refer=top)
1. [孙芮后援会关站](https://s.weibo.com//weibo?q=%E5%AD%99%E8%8A%AE%E5%90%8E%E6%8F%B4%E4%BC%9A%E5%85%B3%E7%AB%99&t=31&band_rank=26&Refer=top)
1. [波切蒂诺 马奎尔](https://s.weibo.com//weibo?q=%E6%B3%A2%E5%88%87%E8%92%82%E8%AF%BA%20%E9%A9%AC%E5%A5%8E%E5%B0%94&t=31&band_rank=27&Refer=top)
1. [意大利博主每天给妈妈打电话](https://s.weibo.com//weibo?q=%E6%84%8F%E5%A4%A7%E5%88%A9%E5%8D%9A%E4%B8%BB%E6%AF%8F%E5%A4%A9%E7%BB%99%E5%A6%88%E5%A6%88%E6%89%93%E7%94%B5%E8%AF%9D&t=31&band_rank=28&Refer=top)
1. [高校鸭子被撞死司机道歉](https://s.weibo.com//weibo?q=%E9%AB%98%E6%A0%A1%E9%B8%AD%E5%AD%90%E8%A2%AB%E6%92%9E%E6%AD%BB%E5%8F%B8%E6%9C%BA%E9%81%93%E6%AD%89&t=31&band_rank=29&Refer=top)
1. [张元英被外网批抢liz的C位](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%A2%AB%E5%A4%96%E7%BD%91%E6%89%B9%E6%8A%A2liz%E7%9A%84C%E4%BD%8D%23&t=31&band_rank=30&Refer=top)
1. [央视主持人被新疆芝麻糖粘掉门牙](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E8%A2%AB%E6%96%B0%E7%96%86%E8%8A%9D%E9%BA%BB%E7%B3%96%E7%B2%98%E6%8E%89%E9%97%A8%E7%89%99%23&t=31&band_rank=31&Refer=top)
1. [亚洲市场集体打响保卫战](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E6%B4%B2%E5%B8%82%E5%9C%BA%E9%9B%86%E4%BD%93%E6%89%93%E5%93%8D%E4%BF%9D%E5%8D%AB%E6%88%98%23&t=31&band_rank=32&Refer=top)
1. [樊振东拥抱萨尔老爷爷](https://s.weibo.com//weibo?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%8B%A5%E6%8A%B1%E8%90%A8%E5%B0%94%E8%80%81%E7%88%B7%E7%88%B7&t=31&band_rank=33&Refer=top)
1. [萨尔布吕肯vs杜塞尔多夫](https://s.weibo.com//weibo?q=%E8%90%A8%E5%B0%94%E5%B8%83%E5%90%95%E8%82%AFvs%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB&t=31&band_rank=34&Refer=top)
1. [孙颖莎入选亚太青年女性TOP100](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%A5%E9%80%89%E4%BA%9A%E5%A4%AA%E9%9D%92%E5%B9%B4%E5%A5%B3%E6%80%A7TOP100%23&t=31&band_rank=35&Refer=top)
1. [2026亚太U35行业先锋领袖](https://s.weibo.com//weibo?q=2026%E4%BA%9A%E5%A4%AAU35%E8%A1%8C%E4%B8%9A%E5%85%88%E9%94%8B%E9%A2%86%E8%A2%96&t=31&band_rank=36&Refer=top)
1. [文吉儿 一起长大的约定](https://s.weibo.com//weibo?q=%E6%96%87%E5%90%89%E5%84%BF%20%E4%B8%80%E8%B5%B7%E9%95%BF%E5%A4%A7%E7%9A%84%E7%BA%A6%E5%AE%9A&t=31&band_rank=37&Refer=top)
1. [PEL投票](https://s.weibo.com//weibo?q=PEL%E6%8A%95%E7%A5%A8&t=31&band_rank=38&Refer=top)
1. [亚太最具影响力青年男性入选名单](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E5%A4%AA%E6%9C%80%E5%85%B7%E5%BD%B1%E5%93%8D%E5%8A%9B%E9%9D%92%E5%B9%B4%E7%94%B7%E6%80%A7%E5%85%A5%E9%80%89%E5%90%8D%E5%8D%95%23&t=31&band_rank=39&Refer=top)
1. [马斯克悄悄在菲律宾开发岛屿](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%82%84%E6%82%84%E5%9C%A8%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%BC%80%E5%8F%91%E5%B2%9B%E5%B1%BF%23&t=31&band_rank=40&Refer=top)
1. [当地回应主播私闯果园带货](https://s.weibo.com//weibo?q=%23%E5%BD%93%E5%9C%B0%E5%9B%9E%E5%BA%94%E4%B8%BB%E6%92%AD%E7%A7%81%E9%97%AF%E6%9E%9C%E5%9B%AD%E5%B8%A6%E8%B4%A7%23&t=31&band_rank=41&Refer=top)
1. [韩国网友感谢中国](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23&t=31&band_rank=42&Refer=top)
1. [2026版全球高血压实践指南](https://s.weibo.com//weibo?q=2026%E7%89%88%E5%85%A8%E7%90%83%E9%AB%98%E8%A1%80%E5%8E%8B%E5%AE%9E%E8%B7%B5%E6%8C%87%E5%8D%97&t=31&band_rank=43&Refer=top)
1. [赵丽颖入选亚太最具影响力青年女性](https://s.weibo.com//weibo?q=%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%85%A5%E9%80%89%E4%BA%9A%E5%A4%AA%E6%9C%80%E5%85%B7%E5%BD%B1%E5%93%8D%E5%8A%9B%E9%9D%92%E5%B9%B4%E5%A5%B3%E6%80%A7&t=31&band_rank=44&Refer=top)
1. [曝高迪大美已经离婚了](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E9%AB%98%E8%BF%AA%E5%A4%A7%E7%BE%8E%E5%B7%B2%E7%BB%8F%E7%A6%BB%E5%A9%9A%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [樊振东德甲对阵萨尔布吕肯](https://s.weibo.com//weibo?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BE%B7%E7%94%B2%E5%AF%B9%E9%98%B5%E8%90%A8%E5%B0%94%E5%B8%83%E5%90%95%E8%82%AF&t=31&band_rank=46&Refer=top)
1. [童家堡 白小纯身体不适](https://s.weibo.com//weibo?q=%E7%AB%A5%E5%AE%B6%E5%A0%A1%20%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82&t=31&band_rank=47&Refer=top)
1. [华鼎奖](https://s.weibo.com//weibo?q=%E5%8D%8E%E9%BC%8E%E5%A5%96&t=31&band_rank=48&Refer=top)
1. [阿尔卡拉斯室内赛三连冠](https://s.weibo.com//weibo?q=%23%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AF%E5%AE%A4%E5%86%85%E8%B5%9B%E4%B8%89%E8%BF%9E%E5%86%A0%23&t=31&band_rank=49&Refer=top)
1. [汇天A868飞行汽车试飞成功](https://s.weibo.com//weibo?q=%E6%B1%87%E5%A4%A9A868%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E8%AF%95%E9%A3%9E%E6%88%90%E5%8A%9F&t=31&band_rank=50&Refer=top)
1. [主播糟蹋千斤苹果仅赔6000元](https://s.weibo.com//weibo?q=%23%E4%B8%BB%E6%92%AD%E7%B3%9F%E8%B9%8B%E5%8D%83%E6%96%A4%E8%8B%B9%E6%9E%9C%E4%BB%85%E8%B5%946000%E5%85%83%23&t=31&band_rank=1&Refer=top)
1. [本周这些数据值得关注](https://s.weibo.com//weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23&t=31&band_rank=3&Refer=top)
1. [特朗普发APEC合照配文GOAT](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91APEC%E5%90%88%E7%85%A7%E9%85%8D%E6%96%87GOAT%23&t=31&band_rank=4&Refer=top)
1. [韩国网友感谢中国](https://s.weibo.com//weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23&t=31&band_rank=5&Refer=top)
1. [天霸巅峰挑战赛总决赛冠军](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E9%9C%B8%E5%B7%85%E5%B3%B0%E6%8C%91%E6%88%98%E8%B5%9B%E6%80%BB%E5%86%B3%E8%B5%9B%E5%86%A0%E5%86%9B%23&t=31&band_rank=6&Refer=top)
1. [私闯果园糟蹋水果主播下架所有视频](https://s.weibo.com//weibo?q=%23%E7%A7%81%E9%97%AF%E6%9E%9C%E5%9B%AD%E7%B3%9F%E8%B9%8B%E6%B0%B4%E6%9E%9C%E4%B8%BB%E6%92%AD%E4%B8%8B%E6%9E%B6%E6%89%80%E6%9C%89%E8%A7%86%E9%A2%91%23&t=31&band_rank=7&Refer=top)
1. [樊振东vs约内斯库](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E7%BA%A6%E5%86%85%E6%96%AF%E5%BA%93%23&t=31&band_rank=8&Refer=top)
1. [血压这个区间不再视作接近正常](https://s.weibo.com//weibo?q=%23%E8%A1%80%E5%8E%8B%E8%BF%99%E4%B8%AA%E5%8C%BA%E9%97%B4%E4%B8%8D%E5%86%8D%E8%A7%86%E4%BD%9C%E6%8E%A5%E8%BF%91%E6%AD%A3%E5%B8%B8%23&t=31&band_rank=9&Refer=top)
1. [王安宇被马顶跑了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A2%AB%E9%A9%AC%E9%A1%B6%E8%B7%91%E4%BA%86%23&t=31&band_rank=10&Refer=top)
1. [中戏同学成顶流男演员却当NPC](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E6%88%8F%E5%90%8C%E5%AD%A6%E6%88%90%E9%A1%B6%E6%B5%81%E7%94%B7%E6%BC%94%E5%91%98%E5%8D%B4%E5%BD%93NPC%23&t=31&band_rank=11&Refer=top)
1. [青稚直播](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A%E7%9B%B4%E6%92%AD&t=31&band_rank=12&Refer=top)
1. [高校鸭子被撞死司机道歉](https://s.weibo.com//weibo?q=%E9%AB%98%E6%A0%A1%E9%B8%AD%E5%AD%90%E8%A2%AB%E6%92%9E%E6%AD%BB%E5%8F%B8%E6%9C%BA%E9%81%93%E6%AD%89&t=31&band_rank=13&Refer=top)
1. [孙芮后援会关站](https://s.weibo.com//weibo?q=%E5%AD%99%E8%8A%AE%E5%90%8E%E6%8F%B4%E4%BC%9A%E5%85%B3%E7%AB%99&t=31&band_rank=14&Refer=top)
1. [张元英被外网批抢liz的C位](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%A2%AB%E5%A4%96%E7%BD%91%E6%89%B9%E6%8A%A2liz%E7%9A%84C%E4%BD%8D%23&t=31&band_rank=15&Refer=top)
1. [印度情侣遭8名少年殴打](https://s.weibo.com//weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%83%85%E4%BE%A3%E9%81%AD8%E5%90%8D%E5%B0%91%E5%B9%B4%E6%AE%B4%E6%89%93%23&t=31&band_rank=16&Refer=top)
1. [青稚](https://s.weibo.com//weibo?q=%E9%9D%92%E7%A8%9A&t=31&band_rank=17&Refer=top)
1. [华鼎奖](https://s.weibo.com//weibo?q=%E5%8D%8E%E9%BC%8E%E5%A5%96&t=31&band_rank=19&Refer=top)
1. [Tim回应被质疑内定](https://s.weibo.com//weibo?q=%23Tim%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%B4%A8%E7%96%91%E5%86%85%E5%AE%9A%23&t=31&band_rank=20&Refer=top)
1. [童家堡 白小纯身体不适](https://s.weibo.com//weibo?q=%E7%AB%A5%E5%AE%B6%E5%A0%A1%20%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82&t=31&band_rank=21&Refer=top)
1. [PEL投票](https://s.weibo.com//weibo?q=PEL%E6%8A%95%E7%A5%A8&t=31&band_rank=22&Refer=top)
1. [第46届华鼎奖获奖名单](https://s.weibo.com//weibo?q=%23%E7%AC%AC46%E5%B1%8A%E5%8D%8E%E9%BC%8E%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23&t=31&band_rank=23&Refer=top)
1. [赵丽颖入选亚太最具影响力青年女性](https://s.weibo.com//weibo?q=%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%85%A5%E9%80%89%E4%BA%9A%E5%A4%AA%E6%9C%80%E5%85%B7%E5%BD%B1%E5%93%8D%E5%8A%9B%E9%9D%92%E5%B9%B4%E5%A5%B3%E6%80%A7&t=31&band_rank=24&Refer=top)
1. [刘宪华看到妹妹亲老公的反应](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AE%AA%E5%8D%8E%E7%9C%8B%E5%88%B0%E5%A6%B9%E5%A6%B9%E4%BA%B2%E8%80%81%E5%85%AC%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=25&Refer=top)
1. [樊振东德甲](https://s.weibo.com//weibo?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BE%B7%E7%94%B2&t=31&band_rank=26&Refer=top)
1. [2026亚太最具影响力青年男性TOP100](https://s.weibo.com//weibo?q=2026%E4%BA%9A%E5%A4%AA%E6%9C%80%E5%85%B7%E5%BD%B1%E5%93%8D%E5%8A%9B%E9%9D%92%E5%B9%B4%E7%94%B7%E6%80%A7TOP100&t=31&band_rank=27&Refer=top)
1. [樊振东拥抱萨尔老爷爷](https://s.weibo.com//weibo?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%8B%A5%E6%8A%B1%E8%90%A8%E5%B0%94%E8%80%81%E7%88%B7%E7%88%B7&t=31&band_rank=28&Refer=top)
1. [Bin说Chovy最好看](https://s.weibo.com//weibo?q=%23Bin%E8%AF%B4Chovy%E6%9C%80%E5%A5%BD%E7%9C%8B%23&t=31&band_rank=29&Refer=top)
1. [特斯拉FSDV15安全处理能力提升25倍](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89FSDV15%E5%AE%89%E5%85%A8%E5%A4%84%E7%90%86%E8%83%BD%E5%8A%9B%E6%8F%90%E5%8D%8725%E5%80%8D%23&t=31&band_rank=30&Refer=top)
1. [伞兵 队友厉害我厉害你们更厉害](https://s.weibo.com//weibo?q=%E4%BC%9E%E5%85%B5%20%E9%98%9F%E5%8F%8B%E5%8E%89%E5%AE%B3%E6%88%91%E5%8E%89%E5%AE%B3%E4%BD%A0%E4%BB%AC%E6%9B%B4%E5%8E%89%E5%AE%B3&t=31&band_rank=31&Refer=top)
1. [天霸庆功宴直播](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E9%9C%B8%E5%BA%86%E5%8A%9F%E5%AE%B4%E7%9B%B4%E6%92%AD%23&t=31&band_rank=32&Refer=top)
1. [孙颖莎入选亚太青年女性TOP100](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%A5%E9%80%89%E4%BA%9A%E5%A4%AA%E9%9D%92%E5%B9%B4%E5%A5%B3%E6%80%A7TOP100%23&t=31&band_rank=33&Refer=top)
1. [A股迎来三大利好](https://s.weibo.com//weibo?q=%23A%E8%82%A1%E8%BF%8E%E6%9D%A5%E4%B8%89%E5%A4%A7%E5%88%A9%E5%A5%BD%23&t=31&band_rank=34&Refer=top)
1. [荔枝冰酒爆单厂家忙到没空招人](https://s.weibo.com//weibo?q=%23%E8%8D%94%E6%9E%9D%E5%86%B0%E9%85%92%E7%88%86%E5%8D%95%E5%8E%82%E5%AE%B6%E5%BF%99%E5%88%B0%E6%B2%A1%E7%A9%BA%E6%8B%9B%E4%BA%BA%23&t=31&band_rank=35&Refer=top)
1. [肖战入选亚太最具影响力青年男性](https://s.weibo.com//weibo?q=%E8%82%96%E6%88%98%E5%85%A5%E9%80%89%E4%BA%9A%E5%A4%AA%E6%9C%80%E5%85%B7%E5%BD%B1%E5%93%8D%E5%8A%9B%E9%9D%92%E5%B9%B4%E7%94%B7%E6%80%A7&t=31&band_rank=36&Refer=top)
1. [张萌怎么会留下这样的证据](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E8%90%8C%E6%80%8E%E4%B9%88%E4%BC%9A%E7%95%99%E4%B8%8B%E8%BF%99%E6%A0%B7%E7%9A%84%E8%AF%81%E6%8D%AE%23&t=31&band_rank=37&Refer=top)
1. [成毅白龙挂镜头太震撼了](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E7%99%BD%E9%BE%99%E6%8C%82%E9%95%9C%E5%A4%B4%E5%A4%AA%E9%9C%87%E6%92%BC%E4%BA%86%23&t=31&band_rank=38&Refer=top)
1. [萨尔布吕肯扬言送樊振东赛季首败](https://s.weibo.com//weibo?q=%23%E8%90%A8%E5%B0%94%E5%B8%83%E5%90%95%E8%82%AF%E6%89%AC%E8%A8%80%E9%80%81%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B5%9B%E5%AD%A3%E9%A6%96%E8%B4%A5%23&t=31&band_rank=39&Refer=top)
1. [ShowMaker宣布终身留在DK](https://s.weibo.com//weibo?q=%23ShowMaker%E5%AE%A3%E5%B8%83%E7%BB%88%E8%BA%AB%E7%95%99%E5%9C%A8DK%23&t=31&band_rank=40&Refer=top)
1. [文吉儿 一起长大的约定](https://s.weibo.com//weibo?q=%E6%96%87%E5%90%89%E5%84%BF%20%E4%B8%80%E8%B5%B7%E9%95%BF%E5%A4%A7%E7%9A%84%E7%BA%A6%E5%AE%9A&t=31&band_rank=41&Refer=top)
1. [央视曝光褪黑素骗局](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E8%A4%AA%E9%BB%91%E7%B4%A0%E9%AA%97%E5%B1%80%23&t=31&band_rank=42&Refer=top)
1. [AI还是离成毅太远了](https://s.weibo.com//weibo?q=%23AI%E8%BF%98%E6%98%AF%E7%A6%BB%E6%88%90%E6%AF%85%E5%A4%AA%E8%BF%9C%E4%BA%86%23&t=31&band_rank=43&Refer=top)
1. [第一批买iPhoneDuo的人亏麻了](https://s.weibo.com//weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E4%B9%B0iPhoneDuo%E7%9A%84%E4%BA%BA%E4%BA%8F%E9%BA%BB%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [特朗普连发30多张照片盛赞APEC](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BF%9E%E5%8F%9130%E5%A4%9A%E5%BC%A0%E7%85%A7%E7%89%87%E7%9B%9B%E8%B5%9EAPEC%23&t=31&band_rank=45&Refer=top)
1. [曝高迪大美已经离婚了](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E9%AB%98%E8%BF%AA%E5%A4%A7%E7%BE%8E%E5%B7%B2%E7%BB%8F%E7%A6%BB%E5%A9%9A%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [名创给时团七周年第一份仪式感](https://s.weibo.com//weibo?q=%23%E5%90%8D%E5%88%9B%E7%BB%99%E6%97%B6%E5%9B%A2%E4%B8%83%E5%91%A8%E5%B9%B4%E7%AC%AC%E4%B8%80%E4%BB%BD%E4%BB%AA%E5%BC%8F%E6%84%9F%23&t=31&band_rank=47&Refer=top)
1. [AI或将吃掉工具类软件](https://s.weibo.com//weibo?q=AI%E6%88%96%E5%B0%86%E5%90%83%E6%8E%89%E5%B7%A5%E5%85%B7%E7%B1%BB%E8%BD%AF%E4%BB%B6&t=31&band_rank=48&Refer=top)
1. [人类的智商是被孩子逼到迭代的](https://s.weibo.com//weibo?q=%E4%BA%BA%E7%B1%BB%E7%9A%84%E6%99%BA%E5%95%86%E6%98%AF%E8%A2%AB%E5%AD%A9%E5%AD%90%E9%80%BC%E5%88%B0%E8%BF%AD%E4%BB%A3%E7%9A%84&t=31&band_rank=49&Refer=top)
1. [赵丽颖华语最佳影视女演员](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%8D%8E%E8%AF%AD%E6%9C%80%E4%BD%B3%E5%BD%B1%E8%A7%86%E5%A5%B3%E6%BC%94%E5%91%98%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
