# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-22 23:19:23

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
<!-- 最后更新时间 Mon Nov 23 2026 02:01:13 GMT+0800 (China Standard Time) -->

1. [亚洲市场集体打响保卫战](https://so.toutiao.com/search?keyword=亚洲市场集体打响保卫战)
1. [黄金这波暴跌割了谁的韭菜](https://so.toutiao.com/search?keyword=黄金这波暴跌割了谁的韭菜)
1. [权威数读观中国](https://so.toutiao.com/search?keyword=权威数读观中国)
1. [“稳股市”组合拳来了](https://so.toutiao.com/search?keyword=“稳股市”组合拳来了)
1. [日媒逐帧解析特朗普无视高市](https://so.toutiao.com/search?keyword=日媒逐帧解析特朗普无视高市)
1. [去世到安葬不超24小时？山东一地回应](https://so.toutiao.com/search?keyword=去世到安葬不超24小时？山东一地回应)
1. [韦东奕再获奖](https://so.toutiao.com/search?keyword=韦东奕再获奖)
1. [特朗普连发30多张照片回味APEC](https://so.toutiao.com/search?keyword=特朗普连发30多张照片回味APEC)
1. [七个葫芦娃姐姐出嫁七兄弟送嫁](https://so.toutiao.com/search?keyword=七个葫芦娃姐姐出嫁七兄弟送嫁)
1. [小区277户只有约100家一直交物业费](https://so.toutiao.com/search?keyword=小区277户只有约100家一直交物业费)
1. [“防非反诈”系列条漫](https://so.toutiao.com/search?keyword=“防非反诈”系列条漫)
1. [特朗普回应深圳乘车时不拉窗帘](https://so.toutiao.com/search?keyword=特朗普回应深圳乘车时不拉窗帘)
1. [三亚凤凰机场等被暂停全军采购资格](https://so.toutiao.com/search?keyword=三亚凤凰机场等被暂停全军采购资格)
1. [菲律宾8名警察绑架中国女富商](https://so.toutiao.com/search?keyword=菲律宾8名警察绑架中国女富商)
1. [57岁窦唯被曝四婚](https://so.toutiao.com/search?keyword=57岁窦唯被曝四婚)
1. [特朗普回应普京是朋友](https://so.toutiao.com/search?keyword=特朗普回应普京是朋友)
1. [为何外国不搞新能源汽车](https://so.toutiao.com/search?keyword=为何外国不搞新能源汽车)
1. [主播私闯果园糟蹋千斤苹果仅愿赔6千元](https://so.toutiao.com/search?keyword=主播私闯果园糟蹋千斤苹果仅愿赔6千元)
1. [景德镇市委书记陈克龙任江西省委常委](https://so.toutiao.com/search?keyword=景德镇市委书记陈克龙任江西省委常委)
1. [泽连斯基：近一周乌20州遭俄军空袭](https://so.toutiao.com/search?keyword=泽连斯基：近一周乌20州遭俄军空袭)
1. [古代从南京跑到北京十五天够用吗](https://so.toutiao.com/search?keyword=古代从南京跑到北京十五天够用吗)
1. [专家：原油大概率要跌破60美元](https://so.toutiao.com/search?keyword=专家：原油大概率要跌破60美元)
1. [李大霄：救市组合拳有助于市场稳定](https://so.toutiao.com/search?keyword=李大霄：救市组合拳有助于市场稳定)
1. [女博士卧底6个月当主播仍有心理阴影](https://so.toutiao.com/search?keyword=女博士卧底6个月当主播仍有心理阴影)
1. [陈数高清怼脸直拍下状态绝了](https://so.toutiao.com/search?keyword=陈数高清怼脸直拍下状态绝了)
1. [冬天最好的养生就是多睡觉](https://so.toutiao.com/search?keyword=冬天最好的养生就是多睡觉)
1. [iPhone Duo渠道价已低于官方价](https://so.toutiao.com/search?keyword=iPhone%20Duo渠道价已低于官方价)
1. [余文乐自曝躯体化严重到不能开车](https://so.toutiao.com/search?keyword=余文乐自曝躯体化严重到不能开车)
1. [美国封住号码资源入口有何影响](https://so.toutiao.com/search?keyword=美国封住号码资源入口有何影响)
1. [数码城老板说iPhone Duo质量相当差](https://so.toutiao.com/search?keyword=数码城老板说iPhone%20Duo质量相当差)
1. [俄罗斯称打击乌能源、港口设施](https://so.toutiao.com/search?keyword=俄罗斯称打击乌能源、港口设施)
1. [从《慌啥子嘛》看流行文化情绪渡口](https://so.toutiao.com/search?keyword=从《慌啥子嘛》看流行文化情绪渡口)
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
1. [林更新再现北京到底有谁在名场面](https://so.toutiao.com/search?keyword=林更新再现北京到底有谁在名场面)
1. [糖尿病正快速年轻化](https://so.toutiao.com/search?keyword=糖尿病正快速年轻化)
1. [樊振东入选亚太U30杰出青年领袖榜单](https://so.toutiao.com/search?keyword=樊振东入选亚太U30杰出青年领袖榜单)
1. [74岁独居老人将余生托付给监护机构](https://so.toutiao.com/search?keyword=74岁独居老人将余生托付给监护机构)
1. [美国防公司称西方没人希望乌克兰获胜](https://so.toutiao.com/search?keyword=美国防公司称西方没人希望乌克兰获胜)
1. [王一博入选亚太最具影响力青年男性](https://so.toutiao.com/search?keyword=王一博入选亚太最具影响力青年男性)
1. [新一轮稳市组合拳有何不同寻常之处](https://so.toutiao.com/search?keyword=新一轮稳市组合拳有何不同寻常之处)
1. [超200家公司被禁止或暂停参加军采](https://so.toutiao.com/search?keyword=超200家公司被禁止或暂停参加军采)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Nov 22 2026 23:15:29 GMT+0800 (China Standard Time) -->

1. [特朗普刚返美就发重大预告](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E5%88%9A%E8%BF%94%E7%BE%8E%E5%B0%B1%E5%8F%91%E9%87%8D%E5%A4%A7%E9%A2%84%E5%91%8A)
1. [AI证明黎曼猜想](https://www.zhihu.com/search?q=AI%E8%AF%81%E6%98%8E%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3)
1. [荷兰法院裁定比亚迪Ti7抄袭路虎卫士](https://www.zhihu.com/search?q=%E8%8D%B7%E5%85%B0%E6%B3%95%E9%99%A2%E8%A3%81%E5%AE%9A%E6%AF%94%E4%BA%9A%E8%BF%AATi7%E6%8A%84%E8%A2%AD%E8%B7%AF%E8%99%8E%E5%8D%AB%E5%A3%AB)
1. [沪深北交易所调整融资保证金比例](https://www.zhihu.com/search?q=%E6%B2%AA%E6%B7%B1%E5%8C%97%E4%BA%A4%E6%98%93%E6%89%80%E8%B0%83%E6%95%B4%E8%9E%8D%E8%B5%84%E4%BF%9D%E8%AF%81%E9%87%91%E6%AF%94%E4%BE%8B)
1. [黎曼猜想证明被Lean社区确认](https://www.zhihu.com/search?q=%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%E8%AF%81%E6%98%8E%E8%A2%ABLean%E7%A4%BE%E5%8C%BA%E7%A1%AE%E8%AE%A4)
1. [知乎智能搜索](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2)
1. [李子柒当选四川文联副主席](https://www.zhihu.com/search?q=%E6%9D%8E%E5%AD%90%E6%9F%92%E5%BD%93%E9%80%89%E5%9B%9B%E5%B7%9D%E6%96%87%E8%81%94%E5%89%AF%E4%B8%BB%E5%B8%AD)
1. [Anthropic上市](https://www.zhihu.com/search?q=Anthropic%E4%B8%8A%E5%B8%82)
1. [主播私闯果园带货糟蹋一千多斤苹果](https://www.zhihu.com/search?q=%E4%B8%BB%E6%92%AD%E7%A7%81%E9%97%AF%E6%9E%9C%E5%9B%AD%E5%B8%A6%E8%B4%A7%E7%B3%9F%E8%B9%8B%E4%B8%80%E5%8D%83%E5%A4%9A%E6%96%A4%E8%8B%B9%E6%9E%9C)
1. [再见老板真的要来了](https://www.zhihu.com/search?q=%E5%86%8D%E8%A7%81%E8%80%81%E6%9D%BF%E7%9C%9F%E7%9A%84%E8%A6%81%E6%9D%A5%E4%BA%86)
1. [知乎数据开放平台新玩法](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%95%B0%E6%8D%AE%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E6%96%B0%E7%8E%A9%E6%B3%95)
1. [数学家完成NS方程无外力证明](https://www.zhihu.com/search?q=%E6%95%B0%E5%AD%A6%E5%AE%B6%E5%AE%8C%E6%88%90NS%E6%96%B9%E7%A8%8B%E6%97%A0%E5%A4%96%E5%8A%9B%E8%AF%81%E6%98%8E)
1. [中方回应高市早苗礼宾安排](https://www.zhihu.com/search?q=%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A4%BC%E5%AE%BE%E5%AE%89%E6%8E%92)
1. [顺丰被暂停参加全军采购](https://www.zhihu.com/search?q=%E9%A1%BA%E4%B8%B0%E8%A2%AB%E6%9A%82%E5%81%9C%E5%8F%82%E5%8A%A0%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD)
1. [美拟禁止中国运营商获取电话号码资源](https://www.zhihu.com/search?q=%E7%BE%8E%E6%8B%9F%E7%A6%81%E6%AD%A2%E4%B8%AD%E5%9B%BD%E8%BF%90%E8%90%A5%E5%95%86%E8%8E%B7%E5%8F%96%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E8%B5%84%E6%BA%90)
1. [特斯拉在美推出FSDv15](https://www.zhihu.com/search?q=%E7%89%B9%E6%96%AF%E6%8B%89%E5%9C%A8%E7%BE%8E%E6%8E%A8%E5%87%BAFSDv15)
1. [DeepSeek付费体验直线上升](https://www.zhihu.com/search?q=DeepSeek%E4%BB%98%E8%B4%B9%E4%BD%93%E9%AA%8C%E7%9B%B4%E7%BA%BF%E4%B8%8A%E5%8D%87)
1. [日媒逐帧解析特朗普无视高市](https://www.zhihu.com/search?q=%E6%97%A5%E5%AA%92%E9%80%90%E5%B8%A7%E8%A7%A3%E6%9E%90%E7%89%B9%E6%9C%97%E6%99%AE%E6%97%A0%E8%A7%86%E9%AB%98%E5%B8%82)
1. [DeepSeek调整对话上限长度](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4%E5%AF%B9%E8%AF%9D%E4%B8%8A%E9%99%90%E9%95%BF%E5%BA%A6)
1. [多所高校不向2027级研究生提供宿舍](https://www.zhihu.com/search?q=%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E4%B8%8D%E5%90%912027%E7%BA%A7%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8F%90%E4%BE%9B%E5%AE%BF%E8%88%8D)
1. [知乎智能搜索全新上线](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2%E5%85%A8%E6%96%B0%E4%B8%8A%E7%BA%BF)
1. [黄仁勋据称将创办新的半导体公司](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E6%8D%AE%E7%A7%B0%E5%B0%86%E5%88%9B%E5%8A%9E%E6%96%B0%E7%9A%84%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%85%AC%E5%8F%B8)
1. [中俄美三国元首会晤](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Nov 22 2026 23:19:23 GMT+0800 (China Standard Time) -->

1. [交易所打出稳市「组合拳」，沪深北交易所降低融资保证金比例下限至 80%，意味着什么？释放了哪些信号？](https://www.zhihu.com/question/2107908002430678000)
1. [武汉一小学设牌劝返送水壶、作业的家长，让孩子自己承担忘带东西的后果，这种方式怎么样？值得效仿吗？](https://www.zhihu.com/question/2107829110864966400)
1. [商务部回应美拟禁止中国运营商获取电话号码资源，称相关做法破坏中美经贸稳定局面，中方坚决反对，如何解读？](https://www.zhihu.com/question/2107769225699746300)
1. [长安大学回应「14日面试13日出结果」，公告误带后台草稿的创建日期，三名人事干部被处分，如何看待此事？](https://www.zhihu.com/question/2107570779529529000)
1. [同样是蛋白质，为什么提倡喝牛奶而不是吃鸡蛋?](https://www.zhihu.com/question/623251460)
1. [人能控制自己的长相吗？](https://www.zhihu.com/question/26497360)
1. [AI 宣称证明黎曼猜想后，数学家又公开了一份完全不使用 AI 的广义黎曼猜想证明，如何看待？](https://www.zhihu.com/question/2107333891975599000)
1. [日媒逐帧解析高市早苗遭特朗普无视，直呼耻辱，为何日本对此如此破防？反映了日本舆论对日美互动怎样的心态？](https://www.zhihu.com/question/2107806853543323000)
1. [如何评价华为星芒 O1 Pro 定价 5499 元起引争议，总经理刘赫回应称“我们选择创新优先”？](https://www.zhihu.com/question/2107408889713115600)
1. [袁记云饺通过港交所聆讯，即将冲击「现制饺子第一股」，为何选择此时上市？登陆港股后你看好它的前景吗？](https://www.zhihu.com/question/2107202859074680000)
1. [有人说搞南水北调不如搞海水淡化，你是否同意？](https://www.zhihu.com/question/390865312)
1. [为什么看完AI短剧以后，就看不进真人演的剧呢？](https://www.zhihu.com/question/2096651689738687700)
1. [曝 ShowMaker 宁愿大幅度降薪也希望留在 DK，如何评价他的选择？DK 目前情况有多糟？](https://www.zhihu.com/question/2105979786103191300)
1. [P/NP 问题如果被解决，会对计算机科学带来哪些革命性影响？](https://www.zhihu.com/question/2014398013381044000)
1. [AI短剧、AI漫剧现在这么火爆，为什么我感觉大多数角色的脸都一样？大家不会视觉疲劳吗？](https://www.zhihu.com/question/2079246734493066500)
1. [如何看待“老婆嫌老公熬夜打游戏，发“追杀令”求助网友狙击老公ID，大哥“你们找不到我”被各路玩家围剿？](https://www.zhihu.com/question/2106418067513386200)
1. [朱雀三号回收发动机再次点火试车，具备再次使用条件，里程碑意义有多大？回收火箭发动机如何再次使用？](https://www.zhihu.com/question/2107054180040959200)
1. [为啥北方人没有吐槽供暖费很贵的？](https://www.zhihu.com/question/1992264026315571700)
1. [网友称在父母面前切换成「无性别低智儿童」，被问到工作、婚恋话题都说「不知道」，为啥要这样？这招管用吗？](https://www.zhihu.com/question/2106716173475788300)
1. [纳指跌超5%，英伟达跌14%，BTC跌破6万美元，黄金濒临3500美元，本轮跨市场金融冲击何时止？](https://www.zhihu.com/question/2107407389817321500)
1. [特斯拉车主发布 FSDv15 全新可视化界面，马斯克称驾驶能力已超越人类，有哪些值得关注的亮点？](https://www.zhihu.com/question/2107700250081228000)
1. [如何看待越南正式宣布取消贩毒、强奸未成年等6项死刑，已判死刑未执行的改为无期？](https://www.zhihu.com/question/2107800314518714000)
1. [为什么现在90后，00后年轻人不再给领导提供情绪价值了？](https://www.zhihu.com/question/2103088984821871000)
1. [如何评价《斗破苍穹剧场版：双帝之战》？](https://www.zhihu.com/question/2107829204641490000)
1. [一个人在家，如何快速搞定「懒人早饭」？](https://www.zhihu.com/question/2069135241072185900)
1. [cpu中有哪些“神u”？](https://www.zhihu.com/question/11925382573)
1. [很好奇现在三十岁以上的人平时都玩什么游戏？](https://www.zhihu.com/question/2060402591092233700)
1. [汉字简化的过程中，为何很多汉字的部首被用“又”字和叉代替？](https://www.zhihu.com/question/6303982848)
1. [如何评价《绝区零》3.4版本「长日终尽」前瞻特别节目？](https://www.zhihu.com/question/2105641642086684700)
1. [漫画《七龙珠》中已经称霸地球的沙鲁为什么还要穿越来送死？](https://www.zhihu.com/question/662867346)
1. [Lean与 Mathlib 社区联合声明，正式确认 Alpöge 对黎曼猜想的证明正确，这意味着什么？](https://www.zhihu.com/question/2107620110105932500)
1. [荷兰法院裁定比亚迪Ti7抄袭路虎卫士，颁布销售禁令，对此怎么看？](https://www.zhihu.com/question/2107417541236806000)
1. [如何评价黎曼诞辰200周年之际，黎曼猜测宣布得证？](https://www.zhihu.com/question/2107264049960282000)
1. [贾国龙新创品牌「天边」一年内从砂锅焖面转向冰煮鲜羊，频繁调整经营方向背后有哪些考量？他能翻身吗？](https://www.zhihu.com/question/2106862061669934600)
1. [BLG 夺冠能挽救 LPL 吗？能复刻前两个「电竞元年」吗？](https://www.zhihu.com/question/2106420376573928400)
1. [为啥我军没有名满天下的特种部队？比如海豹部队什么的？](https://www.zhihu.com/question/2107046874389729300)
1. [李子柒当选四川文联副主席，如何理解她的这一职务，可能带来哪些影响？](https://www.zhihu.com/question/2107187453836650500)
1. [怎么看陶哲轩博客下针对 AI 完成黎曼猜想评论：数学变成 F1 赛车，不进 AI 车队都看不到后尾灯？](https://www.zhihu.com/question/2107581968296760800)
1. [顺丰速运涉嫌存在违规问题，被暂停参加全军采购活动，具体是怎么回事？](https://www.zhihu.com/question/2107442131073593900)
1. [有比《持械入宋》更好看的短剧吗？](https://www.zhihu.com/question/2103550053273149400)
1. [2627赛季NBA常规赛开拓者 96:97 尼克斯，如何评价这场比赛？](https://www.zhihu.com/question/2107756665244329200)
1. [特朗普称将与伊朗达成一项永久性协议，为何会在这一时间放出这一消息？永久性协议内可能包含哪些内容？](https://www.zhihu.com/question/2107616621631988000)
1. [日本的抹茶为什么很多人说落后？这和现在的抹茶是一个东西吗?](https://www.zhihu.com/question/665848411)
1. [为什么现在小学语文课汉语拼音o都教读“哦”？](https://www.zhihu.com/question/670142853)
1. [MIT 团队发布对黎曼猜想证明的验证，超 17 万模块全部编译无错，这意味着黎曼猜想证明多大概率为真？](https://www.zhihu.com/question/2107387590592525600)
1. [新任 007 官宣为白人演员，有博主质疑为何没选黑人，这一争议你怎么看？](https://www.zhihu.com/question/2105992931194693400)
1. [如何看待《现代汉语词典（第6版）》中「钟」作为姓氏的含义被取消，而将这一含义赋予给「锺」字？](https://www.zhihu.com/question/341090508)
1. [2627赛季NBA常规赛雄鹿 129:132 76 人，如何评价这场比赛？](https://www.zhihu.com/question/2107658144403015000)
1. [菲尔兹奖得主邓煜称「人类不能放弃自主思考给 AI 当狗」，如何看待这一观点？](https://www.zhihu.com/question/2099876169013258200)
1. [如何评价《纽约时报》再发长文《威胁、辱骂与和解：黄仁勋如何让羞辱员工成为常态》？](https://www.zhihu.com/question/2107390872358867200)
1. [为什么云南人那么迷恋蘑菇?](https://www.zhihu.com/question/1893981796003211300)
1. [为什么国家这么鼓励种地，但网上关于种地的教学文章这么少?](https://www.zhihu.com/question/532021477)
1. [如何评价网飞韩剧《末路兼职》？](https://www.zhihu.com/question/2100164136244193300)
1. [为什么很多人认为 AI 时代会让“中层管理岗位”大规模消失?](https://www.zhihu.com/question/2015104758264910800)
1. [如何看待11月21日三维ns方程有限时间爆破的形式化证明疑似已经完成？](https://www.zhihu.com/question/2107281397077500200)
1. [20多天婴儿被喂白开水中毒肾损伤，新生儿为何不能像成年人一样正常喝白开水？该如何科学喂养？](https://www.zhihu.com/question/2106868147718284300)
1. [怎么看 OpenAI 宣布升级反蒸馏防御，隐藏推理提取成功率从 54% 降至 0.2% ？](https://www.zhihu.com/question/2107430398359885300)
1. [如何看待截至2026年5月11日，米哈游57810 颗英伟达H200获批却未发货，这意味着什么？](https://www.zhihu.com/question/2107534705163777300)
1. [如何看待韩国高考中国史题正确率不足一成？这道题难度究竟如何？](https://www.zhihu.com/question/2107440924695291000)
1. [SEC正调查英伟达潜在会计问题，股价当天跌超14%，这件事后续会如何发展？](https://www.zhihu.com/question/2107472069340550100)
1. [如何评价米哈游电子科技大学校招宣讲会技术负责人曝光原神IP未来的研发方向？](https://www.zhihu.com/question/2107022824976159700)
1. [山东威海发现加拿大飞来的干饭雪雁，威海不是号称雪窝子吗？为啥候鸟会选择在这过冬？](https://www.zhihu.com/question/2106702040785339400)
1. [姚顺雨携腾讯混元团队完成 120 分钟在线问答，有哪些信息值得关注？](https://www.zhihu.com/question/2107402315917420500)
1. [邵佳一带队取得 10 战 4 胜 2 平 4 负战绩，亚洲杯延期，该优先补强哪块短板？](https://www.zhihu.com/question/2106274596567700200)
1. [黎曼猜想数学证明长达 25 万页是什么概念？人类还有可能完整读懂吗？](https://www.zhihu.com/question/2107262299765306400)
1. [摩尔线程官宣消费级显卡「庐山」，宣称光追暴涨 50 倍且刷新显存上限，实际体验能达到预期吗？](https://www.zhihu.com/question/2107187179504006100)
1. [特朗普返美后召开新闻发布会，称中俄美元首会晤「史无前例」「意义重大」，哪些信息值得关注？](https://www.zhihu.com/question/2107175088915050800)
1. [如何看待DeepSeek因免费端限额，且无充值入口，被称付费体验直线上升？它们会开放C端个人订阅吗？](https://www.zhihu.com/question/2107394861363983000)
1. [如何评价11月微软悄悄上架的全新中文输入法？](https://www.zhihu.com/question/2106793828950843400)
1. [《Gta6》M站用户开分仅3.7分，现已5.4分，如何看待用户评分与媒体评分两极分化？](https://www.zhihu.com/question/2107390437933707500)
1. [数学家宣称 Claude 证明黎曼猜想，为啥Anthropic股价仍在暴跌？市场不买账，核心原因是啥？](https://www.zhihu.com/question/2107267149399947000)
1. [超强厄尔尼诺已经形成，已成为有记录以来最强，这意味着什么？产生的气候影响大吗？](https://www.zhihu.com/question/2106305744966530800)
1. [如何看待余承东再称L3自动驾驶来临后可睡觉但不能睡死，随后微博强调现在是L2但未明确L3能否睡觉？](https://www.zhihu.com/question/2107155066318858000)
1. [特朗普称不允许美企海外建数据中心，如果违反将面临「巨额税收」处罚，这会对美国科技公司发展带来哪些影响？](https://www.zhihu.com/question/2107449650592445700)
1. [信用卡近一年减少 3400 万张，信用卡为何逐渐失去吸引力？背后反映出消费者支付习惯发生了哪些变化？](https://www.zhihu.com/question/2107163928622888000)
1. [想要孩子脾气稳，家长脾气就得先稳，你觉得对吗？](https://www.zhihu.com/question/2061027581084820000)
1. [孩子学习过程中，有没有哪个进步瞬间惊艳到了你？](https://www.zhihu.com/question/2093789387150586600)
1. [为什么早餐利润这么高大家都不去做呢？](https://www.zhihu.com/question/621050716)
1. [网友称零跑A10装啤酒致后备厢储物盒脱落，客服称未接到反馈，具体是怎么回事？储物盒能如何规避承重隐患？](https://www.zhihu.com/question/2107047283686691600)
1. [为什么网络上总是说“外卖小哥藏龙卧虎”，这种刻板印象到底是怎么形成的？](https://www.zhihu.com/question/2106416810002273800)
1. [黄金一周大跌近9%，考验3500美元关口，现在适合抄底黄金吗？](https://www.zhihu.com/question/2107401788676743400)
1. [初三女儿因妈妈当亲戚面说她的糗事儿而离家住同学家，妈妈却说“有什么不能说的”，这事到底谁的问题更大？](https://www.zhihu.com/question/2106544120856580600)
1. [有哪些方言是你以为全国通用，长大后才发现只有家里人才懂的？](https://www.zhihu.com/question/2104616197803047000)
1. [繁体字会不会再衍生出不同于大陆简体字的简化文字系统？](https://www.zhihu.com/question/1890690783696367900)
1. [黄金还会再次跌到600一克吗？](https://www.zhihu.com/question/2107047477912379400)
1. [你今天感悟到了什么？](https://www.zhihu.com/question/1935426558882981600)
1. [黄土高原地区为什么要住窑洞？](https://www.zhihu.com/question/2088745451675825200)

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
<!-- 最后更新时间 Mon Nov 23 2026 00:25:19 GMT+0800 (China Standard Time) -->

1. [亚太同行深入人心](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E5%A4%AA%E5%90%8C%E8%A1%8C%E6%B7%B1%E5%85%A5%E4%BA%BA%E5%BF%83%23&Refer=new_time)
1. [主播糟蹋千斤苹果仅赔6000元](https://s.weibo.com//weibo?q=%23%E4%B8%BB%E6%92%AD%E7%B3%9F%E8%B9%8B%E5%8D%83%E6%96%A4%E8%8B%B9%E6%9E%9C%E4%BB%85%E8%B5%946000%E5%85%83%23&t=31&band_rank=1&Refer=top)
1. [央视主持人录节目假牙丢了](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%BD%95%E8%8A%82%E7%9B%AE%E5%81%87%E7%89%99%E4%B8%A2%E4%BA%86%23&t=31&band_rank=2&Refer=top)
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
1. [女儿回应父亲交往母亲第三者的前妻](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%84%BF%E5%9B%9E%E5%BA%94%E7%88%B6%E4%BA%B2%E4%BA%A4%E5%BE%80%E6%AF%8D%E4%BA%B2%E7%AC%AC%E4%B8%89%E8%80%85%E7%9A%84%E5%89%8D%E5%A6%BB%23&t=31&band_rank=18&Refer=top)
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
