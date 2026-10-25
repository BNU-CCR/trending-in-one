# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-26 03:38:59

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
<!-- 最后更新时间 Mon Oct 26 2026 03:56:09 GMT+0800 (China Standard Time) -->

1. [国乒亚锦赛四冠收官](https://so.toutiao.com/search?keyword=国乒亚锦赛四冠收官)
1. [“23:59:60”今后将不再出现](https://so.toutiao.com/search?keyword=“23:59:60”今后将不再出现)
1. [76年了，致敬最可爱的他们](https://so.toutiao.com/search?keyword=76年了，致敬最可爱的他们)
1. [县委书记回应被扔下水：张雪临时起意](https://so.toutiao.com/search?keyword=县委书记回应被扔下水：张雪临时起意)
1. [山东日照捕获260余斤“鲅鱼王”](https://so.toutiao.com/search?keyword=山东日照捕获260余斤“鲅鱼王”)
1. [姑娘花3.8万在鹤岗买房入住后傻眼](https://so.toutiao.com/search?keyword=姑娘花3.8万在鹤岗买房入住后傻眼)
1. [人造黄金会不会击穿金价](https://so.toutiao.com/search?keyword=人造黄金会不会击穿金价)
1. [国考83个职位无人报名](https://so.toutiao.com/search?keyword=国考83个职位无人报名)
1. [宝马司机加油后将400元丢在地上](https://so.toutiao.com/search?keyword=宝马司机加油后将400元丢在地上)
1. [泽连斯基：绝不接受放弃25%领土提议](https://so.toutiao.com/search?keyword=泽连斯基：绝不接受放弃25%领土提议)
1. [蔡康永：我没有支持过“台独”](https://so.toutiao.com/search?keyword=蔡康永：我没有支持过“台独”)
1. [地震躲“生命三角”避险不靠谱](https://so.toutiao.com/search?keyword=地震躲“生命三角”避险不靠谱)
1. [徐冬冬回应身材争议](https://so.toutiao.com/search?keyword=徐冬冬回应身材争议)
1. [女子回应离婚12年接前婆婆一起生活](https://so.toutiao.com/search?keyword=女子回应离婚12年接前婆婆一起生活)
1. [王正谱辞去河北省省长职务](https://so.toutiao.com/search?keyword=王正谱辞去河北省省长职务)
1. [31省份2025年人口出生率公布](https://so.toutiao.com/search?keyword=31省份2025年人口出生率公布)
1. [米饭冷冻后为什么会有不一样的变化](https://so.toutiao.com/search?keyword=米饭冷冻后为什么会有不一样的变化)
1. [奥巴马怒喷特朗普所为何事](https://so.toutiao.com/search?keyword=奥巴马怒喷特朗普所为何事)
1. [女生拒绝表白后照片被发色情软件](https://so.toutiao.com/search?keyword=女生拒绝表白后照片被发色情软件)
1. [DeepSeek到底怎么得罪了美国](https://so.toutiao.com/search?keyword=DeepSeek到底怎么得罪了美国)
1. [iPhone Duo开售2天就跌破官方首发价](https://so.toutiao.com/search?keyword=iPhone%20Duo开售2天就跌破官方首发价)
1. [陈熠横扫张本美和获亚锦赛女单冠军](https://so.toutiao.com/search?keyword=陈熠横扫张本美和获亚锦赛女单冠军)
1. [日本第七艘大鲸级潜艇下水有何野心](https://so.toutiao.com/search?keyword=日本第七艘大鲸级潜艇下水有何野心)
1. [美媒：中国转为技术与能力输出高地](https://so.toutiao.com/search?keyword=美媒：中国转为技术与能力输出高地)
1. [亚洲最长环线地铁即将成环](https://so.toutiao.com/search?keyword=亚洲最长环线地铁即将成环)
1. [武契奇：以负责任态度面对选举结果](https://so.toutiao.com/search?keyword=武契奇：以负责任态度面对选举结果)
1. [李天阳2-3张本智和](https://so.toutiao.com/search?keyword=李天阳2-3张本智和)
1. [博主：热播日剧藏着高市对华新手段](https://so.toutiao.com/search?keyword=博主：热播日剧藏着高市对华新手段)
1. [印度找德国入手盾构机？学者解读](https://so.toutiao.com/search?keyword=印度找德国入手盾构机？学者解读)
1. [张雪机车刷新水上漂吉尼斯世界纪录](https://so.toutiao.com/search?keyword=张雪机车刷新水上漂吉尼斯世界纪录)
1. [张智霖与前女友许秋怡世纪合体](https://so.toutiao.com/search?keyword=张智霖与前女友许秋怡世纪合体)
1. [招商证券张静静：A股大概率延续反弹](https://so.toutiao.com/search?keyword=招商证券张静静：A股大概率延续反弹)
1. [谷爱凌穿旗袍逛苏州](https://so.toutiao.com/search?keyword=谷爱凌穿旗袍逛苏州)
1. [奥巴马批特朗普：赤裸裸地借机敛财](https://so.toutiao.com/search?keyword=奥巴马批特朗普：赤裸裸地借机敛财)
1. [我国老年抚养比首次超过少儿抚养比](https://so.toutiao.com/search?keyword=我国老年抚养比首次超过少儿抚养比)
1. [迪丽热巴雨中衔蝶全平台爆火](https://so.toutiao.com/search?keyword=迪丽热巴雨中衔蝶全平台爆火)
1. [俄乌曾秘密渠道试探停战？博主解读](https://so.toutiao.com/search?keyword=俄乌曾秘密渠道试探停战？博主解读)
1. [长城证券：A股中长期投资价值显现](https://so.toutiao.com/search?keyword=长城证券：A股中长期投资价值显现)
1. [专家：A股市场积极因素正持续积累](https://so.toutiao.com/search?keyword=专家：A股市场积极因素正持续积累)
1. [二十届中央第七轮巡视完成反馈](https://so.toutiao.com/search?keyword=二十届中央第七轮巡视完成反馈)
1. [徐艺洋直播澄清忍不住哭了](https://so.toutiao.com/search?keyword=徐艺洋直播澄清忍不住哭了)
1. [中国管控盾构机出口背后的硬核底牌](https://so.toutiao.com/search?keyword=中国管控盾构机出口背后的硬核底牌)
1. [德银：科技股还要跌5%](https://so.toutiao.com/search?keyword=德银：科技股还要跌5%)
1. [CBA常规赛：北京117比73狂胜广州44分](https://so.toutiao.com/search?keyword=CBA常规赛：北京117比73狂胜广州44分)
1. [陈少波任河北省委常委](https://so.toutiao.com/search?keyword=陈少波任河北省委常委)
1. [贺希宁10中2仅得6分](https://so.toutiao.com/search?keyword=贺希宁10中2仅得6分)
1. [林诗栋黄友政夺得亚锦赛男双冠军](https://so.toutiao.com/search?keyword=林诗栋黄友政夺得亚锦赛男双冠军)
1. [巴西总统卢拉为何开始使用智能手机](https://so.toutiao.com/search?keyword=巴西总统卢拉为何开始使用智能手机)
1. [中俄贸易四年变局谁更离不开谁](https://so.toutiao.com/search?keyword=中俄贸易四年变局谁更离不开谁)
1. [蒯曼王艺迪夺亚锦赛女双冠军](https://so.toutiao.com/search?keyword=蒯曼王艺迪夺亚锦赛女双冠军)
1. [长期过量吃蔬菜有何危害](https://so.toutiao.com/search?keyword=长期过量吃蔬菜有何危害)
1. [张雪挑战成功后开香槟激动庆祝](https://so.toutiao.com/search?keyword=张雪挑战成功后开香槟激动庆祝)
1. [中国如何实现高水平科技自立自强](https://so.toutiao.com/search?keyword=中国如何实现高水平科技自立自强)
1. [杨幂周深在舞台上开心热聊](https://so.toutiao.com/search?keyword=杨幂周深在舞台上开心热聊)
1. [纳指100ETF博时将停牌](https://so.toutiao.com/search?keyword=纳指100ETF博时将停牌)
1. [高德全面适配iPhone Duo](https://so.toutiao.com/search?keyword=高德全面适配iPhone%20Duo)
1. [109岁老红军杜国榜回忆翻雪山](https://so.toutiao.com/search?keyword=109岁老红军杜国榜回忆翻雪山)
1. [黄子弘凡与电竞选手合唱《好运来》](https://so.toutiao.com/search?keyword=黄子弘凡与电竞选手合唱《好运来》)
1. [辽宁击退新疆喜迎4连胜](https://so.toutiao.com/search?keyword=辽宁击退新疆喜迎4连胜)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Mon Oct 26 2026 05:43:39 GMT+0800 (China Standard Time) -->

1. [秦始皇兵马俑上发现女性指纹](https://www.zhihu.com/search?q=%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%85%B5%E9%A9%AC%E4%BF%91%E4%B8%8A%E5%8F%91%E7%8E%B0%E5%A5%B3%E6%80%A7%E6%8C%87%E7%BA%B9)
1. [日剧Vivant抹黑中国](https://www.zhihu.com/search?q=%E6%97%A5%E5%89%A7Vivant%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD)
1. [毛不易婚礼致辞争议](https://www.zhihu.com/search?q=%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E8%87%B4%E8%BE%9E%E4%BA%89%E8%AE%AE)
1. [县委书记拒绝张雪为家乡打广告](https://www.zhihu.com/search?q=%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%92%E7%BB%9D%E5%BC%A0%E9%9B%AA%E4%B8%BA%E5%AE%B6%E4%B9%A1%E6%89%93%E5%B9%BF%E5%91%8A)
1. [中土网民爆发大规模互怼](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9C%9F%E7%BD%91%E6%B0%91%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%92%E6%80%BC)
1. [iPhoneDuo屏幕开裂](https://www.zhihu.com/search?q=iPhoneDuo%E5%B1%8F%E5%B9%95%E5%BC%80%E8%A3%82)
1. [国务院要求优化家庭财税稳人口](https://www.zhihu.com/search?q=%E5%9B%BD%E5%8A%A1%E9%99%A2%E8%A6%81%E6%B1%82%E4%BC%98%E5%8C%96%E5%AE%B6%E5%BA%AD%E8%B4%A2%E7%A8%8E%E7%A8%B3%E4%BA%BA%E5%8F%A3)
1. [三部门调查尊界刹车踏板支架断裂问题](https://www.zhihu.com/search?q=%E4%B8%89%E9%83%A8%E9%97%A8%E8%B0%83%E6%9F%A5%E5%B0%8A%E7%95%8C%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82%E9%97%AE%E9%A2%98)
1. [Kimi K3.1 Pro 正式发布](https://www.zhihu.com/search?q=Kimi%20K3.1%20Pro%20%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [女生拒绝表白照片被发在色情软件](https://www.zhihu.com/search?q=%E5%A5%B3%E7%94%9F%E6%8B%92%E7%BB%9D%E8%A1%A8%E7%99%BD%E7%85%A7%E7%89%87%E8%A2%AB%E5%8F%91%E5%9C%A8%E8%89%B2%E6%83%85%E8%BD%AF%E4%BB%B6)
1. [江苏姑娘网购鹤岗房搬进去后傻眼](https://www.zhihu.com/search?q=%E6%B1%9F%E8%8B%8F%E5%A7%91%E5%A8%98%E7%BD%91%E8%B4%AD%E9%B9%A4%E5%B2%97%E6%88%BF%E6%90%AC%E8%BF%9B%E5%8E%BB%E5%90%8E%E5%82%BB%E7%9C%BC)
1. [蔡康永否认支持台独](https://www.zhihu.com/search?q=%E8%94%A1%E5%BA%B7%E6%B0%B8%E5%90%A6%E8%AE%A4%E6%94%AF%E6%8C%81%E5%8F%B0%E7%8B%AC)
1. [法国报告首例人类感染沙蒙达病毒](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E6%8A%A5%E5%91%8A%E9%A6%96%E4%BE%8B%E4%BA%BA%E7%B1%BB%E6%84%9F%E6%9F%93%E6%B2%99%E8%92%99%E8%BE%BE%E7%97%85%E6%AF%92)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Oct 26 2026 03:38:59 GMT+0800 (China Standard Time) -->

1. [热播日剧把中国人拍成施暴者，设计中方人员对日本情报人员切指、刺穿腹部情节，为何娱乐化包装的敌意更危险？](https://www.zhihu.com/question/2097635960213037800)
1. [张雪刷新「改装摩托车在开阔水域行驶最远距离」吉尼斯世界纪录，这个难度主要在哪里？有什么样的意义？](https://www.zhihu.com/question/2097654119607673000)
1. [乒乓球亚锦赛男单决赛，李天阳 2-3 不敌张本智和，获男单亚军，如何评价这场比赛？](https://www.zhihu.com/question/2097748003247191600)
1. [S16瑞士轮HLE 0-1 iG，如何评价这场比赛？](https://www.zhihu.com/question/2097842344846419200)
1. [江苏姑娘花3.8万网购鹤岗房，入住后屋顶漏水正起诉解约，问题出在哪？鹤岗热潮至今，人们还愿意留下来吗？](https://www.zhihu.com/question/2097678496394736600)
1. [乒乓球亚锦赛女单决赛，陈熠 3-0 张本美和，夺得冠军，如何评价这场比赛？](https://www.zhihu.com/question/2097756044503901400)
1. [烟草第一大省云南前三季度烟草工业负增长，中国烟草市场正在发生什么变化？为何烤烟卖不动了？](https://www.zhihu.com/question/2096531309044692700)
1. [大家用 WorkBuddy 都用来干啥？](https://www.zhihu.com/question/2016275980306645500)
1. [「赐死七万精锐铁骑」、「送太子和亲」、「冻死兵部尚书」，古偶为什么总是出现逆天剧情？](https://www.zhihu.com/question/2097079956266399000)
1. [已无法说话的李雪健仅靠表情在《长征颂歌》晚会中完成的演出为何能这么动人？](https://www.zhihu.com/question/2097027434851693600)
1. [黄多多在VOGUE盛典完成红毯首秀，如何评价她的表现？她这算正式出圈了吗？](https://www.zhihu.com/question/2097322560362735400)
1. [为什么恋综这么多高颜值精英、富二代、留学生，但是他们在恋综呈现出的生活依旧很无聊?](https://www.zhihu.com/question/2001825569575306800)
1. [如何看待夫妻携 242 枚商周至民国时期钱币出国，想送给国外定居子女，被海关查扣？](https://www.zhihu.com/question/2096989809973711600)
1. [S16 瑞士轮次日 iG 1:0 击败 TSW 0:1 拿下首胜，如何评价这场比赛？](https://www.zhihu.com/question/2097555755411031300)
1. [拼多多的商业壁垒（护城河）是什么？](https://www.zhihu.com/question/414761725)
1. [国务院提出「优化家庭财税稳人口」，有哪些信息值得关注？](https://www.zhihu.com/question/2097058448156397600)
1. [为什么人年纪越大对很多事都提不起兴趣了?](https://www.zhihu.com/question/378449406)
1. [2627赛季NBA常规赛热火 110:115 黄蜂，如何评价这场比赛？](https://www.zhihu.com/question/2097571956744778200)
1. [上海 90 岁老人在公共楼道住近一年，三名女儿因赡养问题互相推诿，该怎样破局？如何从法律角度解读？](https://www.zhihu.com/question/2096903756369458200)
1. [《西游记》中如来佛祖为什么要推蝎子精，而蝎子精又为何胆大到敢扎佛祖？](https://www.zhihu.com/question/2062453441667117600)
1. [如何评价黄霄雲重庆演唱会?](https://www.zhihu.com/question/2097459208010602000)
1. [2627赛季英超第8轮曼联 0:3 伯恩茅斯，如何评价这场比赛？](https://www.zhihu.com/question/2097810533156180200)
1. [陕西问界车毁人亡后，有人发现懂车帝2024年就指出问界汽车油路太靠前，碰撞后容易自燃，如何看待？](https://www.zhihu.com/question/2096770641013773600)
1. [微软宣布全面转向原生开发并告别网页套壳，能解决 Windows11 的卡顿臃肿吗？](https://www.zhihu.com/question/2096941984967563000)
1. [你有5分钟把一个回形针藏在家里，侦探有24小时来找，找不到就给你1万美元。你会藏在哪里？](https://www.zhihu.com/question/2097021346526001200)
1. [《水浒传》为什么要塑造李逵这样一个毫无人性的角色？](https://www.zhihu.com/question/2096991242752111900)
1. [为什么自己交代的工作任务员工总是做不对？](https://www.zhihu.com/question/1961725955526624500)
1. [有哪些事，你去了广州才知道？](https://www.zhihu.com/question/298574998)
1. [下属能力很强但总绕过我推进工作，我该管严一点还是先忍着？](https://www.zhihu.com/question/2084980550381593600)
1. [如何评价《崩坏星穹铁道》官方发布的「货币战争」第一赛季「零和博弈」的趣味数据回顾？](https://www.zhihu.com/question/2097669282977035000)
1. [为什么人们爱吃火锅？](https://www.zhihu.com/question/25524815)
1. [为什么独立游戏圈总默认“开发越久、流程越严谨，游戏就越好”？](https://www.zhihu.com/question/2096182199104160500)
1. [有玩家认为单机游戏只要爽就行不需要平衡，对此你怎么看？](https://www.zhihu.com/question/2090536101039626200)
1. [大鹏称票房高低不是评价电影唯一的标准，对此你如何看待？](https://www.zhihu.com/question/2097393065363239200)
1. [2027 年税务系统国考招录占比升至 67% 高位，原因何在？](https://www.zhihu.com/question/2095460424691074000)
1. [有没有什么给我这个刚进体制内新人的建议？](https://www.zhihu.com/question/1921518499798422300)
1. [《三角洲行动》宣布「AZ3」绝密模式将限时上线，这是否意味着原本它就是高战备地图？](https://www.zhihu.com/question/2096198570512574500)
1. [哲学家讨论「自由」时，为什么总要先界定它的含义？](https://www.zhihu.com/question/2096197161469875200)

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
<!-- 最后更新时间 Mon Oct 26 2026 03:46:08 GMT+0800 (China Standard Time) -->

1. [习近平同比利时国王互致贺信](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%90%8C%E6%AF%94%E5%88%A9%E6%97%B6%E5%9B%BD%E7%8E%8B%E4%BA%92%E8%87%B4%E8%B4%BA%E4%BF%A1%23&Refer=new_time)
1. [iG战胜HLE晋级2-1组](https://s.weibo.com//weibo?q=iG%E6%88%98%E8%83%9CHLE%E6%99%8B%E7%BA%A72-1%E7%BB%84&t=31&band_rank=1&Refer=top)
1. [白桃星座一周运势](https://s.weibo.com//weibo?q=%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF&t=31&band_rank=2&Refer=top)
1. [西藏巴青地震抢险安置工作一刻没停](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E5%B7%B4%E9%9D%92%E5%9C%B0%E9%9C%87%E6%8A%A2%E9%99%A9%E5%AE%89%E7%BD%AE%E5%B7%A5%E4%BD%9C%E4%B8%80%E5%88%BB%E6%B2%A1%E5%81%9C%23&t=31&band_rank=3&Refer=top)
1. [TheShy让队友很舒服](https://s.weibo.com//weibo?q=%23TheShy%E8%AE%A9%E9%98%9F%E5%8F%8B%E5%BE%88%E8%88%92%E6%9C%8D%23&t=31&band_rank=4&Refer=top)
1. [iG和TES冲击瑞士轮两连胜](https://s.weibo.com//weibo?q=%23iG%E5%92%8CTES%E5%86%B2%E5%87%BB%E7%91%9E%E5%A3%AB%E8%BD%AE%E4%B8%A4%E8%BF%9E%E8%83%9C%23&t=31&band_rank=5&Refer=top)
1. [黄子韬我结婚生子碍你事了吗](https://s.weibo.com//weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%88%91%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E7%A2%8D%E4%BD%A0%E4%BA%8B%E4%BA%86%E5%90%97%23&t=31&band_rank=6&Refer=top)
1. [张智霖与前女友许秋怡世纪合体](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E4%B8%8E%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%AE%B8%E7%A7%8B%E6%80%A1%E4%B8%96%E7%BA%AA%E5%90%88%E4%BD%93%23&t=31&band_rank=7&Refer=top)
1. [林俊杰杨幂 茉莉雨](https://s.weibo.com//weibo?q=%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%9D%A8%E5%B9%82%20%E8%8C%89%E8%8E%89%E9%9B%A8&t=31&band_rank=8&Refer=top)
1. [Jiaqi发挥无懈可击](https://s.weibo.com//weibo?q=%23Jiaqi%E5%8F%91%E6%8C%A5%E6%97%A0%E6%87%88%E5%8F%AF%E5%87%BB%23&t=31&band_rank=9&Refer=top)
1. [TheShy回应S16焦点战](https://s.weibo.com//weibo?q=%23TheShy%E5%9B%9E%E5%BA%94S16%E7%84%A6%E7%82%B9%E6%88%98%23&t=31&band_rank=10&Refer=top)
1. [徐艺洋赶来安抚黄子韬的情绪](https://s.weibo.com//weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E8%B5%B6%E6%9D%A5%E5%AE%89%E6%8A%9A%E9%BB%84%E5%AD%90%E9%9F%AC%E7%9A%84%E6%83%85%E7%BB%AA%23&t=31&band_rank=11&Refer=top)
1. [iG](https://s.weibo.com//weibo?q=iG&t=31&band_rank=12&Refer=top)
1. [HLE](https://s.weibo.com//weibo?q=HLE&t=31&band_rank=13&Refer=top)
1. [蔡康永依旧没有说一句我是中国人](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E4%BE%9D%E6%97%A7%E6%B2%A1%E6%9C%89%E8%AF%B4%E4%B8%80%E5%8F%A5%E6%88%91%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%23&t=31&band_rank=14&Refer=top)
1. [肖战演唱会刚结束就回复了史彭元](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%9A%E7%BB%93%E6%9D%9F%E5%B0%B1%E5%9B%9E%E5%A4%8D%E4%BA%86%E5%8F%B2%E5%BD%AD%E5%85%83%23&t=31&band_rank=15&Refer=top)
1. [钟文泽 小米18Fold](https://s.weibo.com//weibo?q=%E9%92%9F%E6%96%87%E6%B3%BD%20%E5%B0%8F%E7%B1%B318Fold&t=31&band_rank=16&Refer=top)
1. [24岁女子赴泰见男网友被绑往边境](https://s.weibo.com//weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%90%E8%B5%B4%E6%B3%B0%E8%A7%81%E7%94%B7%E7%BD%91%E5%8F%8B%E8%A2%AB%E7%BB%91%E5%BE%80%E8%BE%B9%E5%A2%83%23&t=31&band_rank=17&Refer=top)
1. [新剧开播没几天就限免](https://s.weibo.com//weibo?q=%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%E6%B2%A1%E5%87%A0%E5%A4%A9%E5%B0%B1%E9%99%90%E5%85%8D&t=31&band_rank=18&Refer=top)
1. [16岁女儿书包翻出避孕药妈妈崩溃](https://s.weibo.com//weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%84%BF%E4%B9%A6%E5%8C%85%E7%BF%BB%E5%87%BA%E9%81%BF%E5%AD%95%E8%8D%AF%E5%A6%88%E5%A6%88%E5%B4%A9%E6%BA%83%23&t=31&band_rank=19&Refer=top)
1. [曼联0比3伯恩茅斯](https://s.weibo.com//weibo?q=%E6%9B%BC%E8%81%940%E6%AF%943%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF&t=31&band_rank=20&Refer=top)
1. [老戏骨集体飙戏 男女主像睡着了](https://s.weibo.com//weibo?q=%E8%80%81%E6%88%8F%E9%AA%A8%E9%9B%86%E4%BD%93%E9%A3%99%E6%88%8F%20%E7%94%B7%E5%A5%B3%E4%B8%BB%E5%83%8F%E7%9D%A1%E7%9D%80%E4%BA%86&t=31&band_rank=21&Refer=top)
1. [不上班后发现上海才是最宜居的城市](https://s.weibo.com//weibo?q=%E4%B8%8D%E4%B8%8A%E7%8F%AD%E5%90%8E%E5%8F%91%E7%8E%B0%E4%B8%8A%E6%B5%B7%E6%89%8D%E6%98%AF%E6%9C%80%E5%AE%9C%E5%B1%85%E7%9A%84%E5%9F%8E%E5%B8%82&t=31&band_rank=22&Refer=top)
1. [长期熬夜或是甲状腺癌诱因之一](https://s.weibo.com//weibo?q=%23%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%E6%88%96%E6%98%AF%E7%94%B2%E7%8A%B6%E8%85%BA%E7%99%8C%E8%AF%B1%E5%9B%A0%E4%B9%8B%E4%B8%80%23&t=31&band_rank=23&Refer=top)
1. [S16瑞士轮iG对阵HLE](https://s.weibo.com//weibo?q=S16%E7%91%9E%E5%A3%AB%E8%BD%AEiG%E5%AF%B9%E9%98%B5HLE&t=31&band_rank=24&Refer=top)
1. [曼联vs伯恩茅斯](https://s.weibo.com//weibo?q=%E6%9B%BC%E8%81%94vs%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF&t=31&band_rank=25&Refer=top)
1. [迪丽热巴外网大出圈](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%96%E7%BD%91%E5%A4%A7%E5%87%BA%E5%9C%88%23&t=31&band_rank=26&Refer=top)
1. [王者新英雄姜姜](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E5%A7%9C%E5%A7%9C%23&t=31&band_rank=27&Refer=top)
1. [妻子要15万备孕丈夫酒后骂去死](https://s.weibo.com//weibo?q=%23%E5%A6%BB%E5%AD%90%E8%A6%8115%E4%B8%87%E5%A4%87%E5%AD%95%E4%B8%88%E5%A4%AB%E9%85%92%E5%90%8E%E9%AA%82%E5%8E%BB%E6%AD%BB%23&t=31&band_rank=28&Refer=top)
1. [卡里克 B费](https://s.weibo.com//weibo?q=%E5%8D%A1%E9%87%8C%E5%85%8B%20B%E8%B4%B9&t=31&band_rank=29&Refer=top)
1. [被一株三角梅燃到了](https://s.weibo.com//weibo?q=%23%E8%A2%AB%E4%B8%80%E6%A0%AA%E4%B8%89%E8%A7%92%E6%A2%85%E7%87%83%E5%88%B0%E4%BA%86%23&t=31&band_rank=30&Refer=top)
1. [参加节目是我这辈子最失败的决定](https://s.weibo.com//weibo?q=%E5%8F%82%E5%8A%A0%E8%8A%82%E7%9B%AE%E6%98%AF%E6%88%91%E8%BF%99%E8%BE%88%E5%AD%90%E6%9C%80%E5%A4%B1%E8%B4%A5%E7%9A%84%E5%86%B3%E5%AE%9A&t=31&band_rank=31&Refer=top)
1. [众解说看iG战胜HLE反应](https://s.weibo.com//weibo?q=%23%E4%BC%97%E8%A7%A3%E8%AF%B4%E7%9C%8BiG%E6%88%98%E8%83%9CHLE%E5%8F%8D%E5%BA%94%23&t=31&band_rank=32&Refer=top)
1. [TES对战G2](https://s.weibo.com//weibo?q=TES%E5%AF%B9%E6%88%98G2&t=31&band_rank=33&Refer=top)
1. [Ning为iG鸣不平](https://s.weibo.com//weibo?q=%23Ning%E4%B8%BAiG%E9%B8%A3%E4%B8%8D%E5%B9%B3%23&t=31&band_rank=34&Refer=top)
1. [蔡徐坤哭了](https://s.weibo.com//weibo?q=%E8%94%A1%E5%BE%90%E5%9D%A4%E5%93%AD%E4%BA%86&t=31&band_rank=35&Refer=top)
1. [iG打HLE赛前预测](https://s.weibo.com//weibo?q=%23iG%E6%89%93HLE%E8%B5%9B%E5%89%8D%E9%A2%84%E6%B5%8B%23&t=31&band_rank=36&Refer=top)
1. [hle瑞士轮两连败](https://s.weibo.com//weibo?q=%23hle%E7%91%9E%E5%A3%AB%E8%BD%AE%E4%B8%A4%E8%BF%9E%E8%B4%A5%23&t=31&band_rank=37&Refer=top)
1. [TheShy瑞士轮克烈](https://s.weibo.com//weibo?q=%23TheShy%E7%91%9E%E5%A3%AB%E8%BD%AE%E5%85%8B%E7%83%88%23&t=31&band_rank=38&Refer=top)
1. [iG力克LCK二号种子](https://s.weibo.com//weibo?q=%23iG%E5%8A%9B%E5%85%8BLCK%E4%BA%8C%E5%8F%B7%E7%A7%8D%E5%AD%90%23&t=31&band_rank=39&Refer=top)
1. [做自媒体再也不怕被熟人刷到的方法](https://s.weibo.com//weibo?q=%E5%81%9A%E8%87%AA%E5%AA%92%E4%BD%93%E5%86%8D%E4%B9%9F%E4%B8%8D%E6%80%95%E8%A2%AB%E7%86%9F%E4%BA%BA%E5%88%B7%E5%88%B0%E7%9A%84%E6%96%B9%E6%B3%95&t=31&band_rank=40&Refer=top)
1. [这么大一勺居然一点没沾到瓶子](https://s.weibo.com//weibo?q=%E8%BF%99%E4%B9%88%E5%A4%A7%E4%B8%80%E5%8B%BA%E5%B1%85%E7%84%B6%E4%B8%80%E7%82%B9%E6%B2%A1%E6%B2%BE%E5%88%B0%E7%93%B6%E5%AD%90&t=31&band_rank=41&Refer=top)
1. [肖战对姜妍撒娇](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%AF%B9%E5%A7%9C%E5%A6%8D%E6%92%92%E5%A8%87%23&t=31&band_rank=42&Refer=top)
1. [王者荣耀三位新英雄公布](https://s.weibo.com//weibo?q=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%89%E4%BD%8D%E6%96%B0%E8%8B%B1%E9%9B%84%E5%85%AC%E5%B8%83&t=31&band_rank=43&Refer=top)
1. [Meiko璐璐闪现变羊](https://s.weibo.com//weibo?q=%23Meiko%E7%92%90%E7%92%90%E9%97%AA%E7%8E%B0%E5%8F%98%E7%BE%8A%23&t=31&band_rank=44&Refer=top)
1. [温瑞博袁励岑抗议颁奖放错国旗](https://s.weibo.com//weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A%E8%A2%81%E5%8A%B1%E5%B2%91%E6%8A%97%E8%AE%AE%E9%A2%81%E5%A5%96%E6%94%BE%E9%94%99%E5%9B%BD%E6%97%97%23&t=31&band_rank=45&Refer=top)
1. [丢人一小时少工作十五年](https://s.weibo.com//weibo?q=%E4%B8%A2%E4%BA%BA%E4%B8%80%E5%B0%8F%E6%97%B6%E5%B0%91%E5%B7%A5%E4%BD%9C%E5%8D%81%E4%BA%94%E5%B9%B4&t=31&band_rank=46&Refer=top)
1. [声生不息宝岛季2歌单](https://s.weibo.com//weibo?q=%23%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E5%AE%9D%E5%B2%9B%E5%AD%A32%E6%AD%8C%E5%8D%95%23&t=31&band_rank=47&Refer=top)
1. [尚公主 九重紫](https://s.weibo.com//weibo?q=%E5%B0%9A%E5%85%AC%E4%B8%BB%20%E4%B9%9D%E9%87%8D%E7%B4%AB&t=31&band_rank=48&Refer=top)
1. [钎城 避嫌](https://s.weibo.com//weibo?q=%E9%92%8E%E5%9F%8E%20%E9%81%BF%E5%AB%8C&t=31&band_rank=49&Refer=top)
1. [最封建的不是古代而是影视剧](https://s.weibo.com//weibo?q=%E6%9C%80%E5%B0%81%E5%BB%BA%E7%9A%84%E4%B8%8D%E6%98%AF%E5%8F%A4%E4%BB%A3%E8%80%8C%E6%98%AF%E5%BD%B1%E8%A7%86%E5%89%A7&t=31&band_rank=50&Refer=top)
1. [白桃星座一周运势](https://s.weibo.com//weibo?q=%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF&t=31&band_rank=1&Refer=top)
1. [王者荣耀三位新英雄公布](https://s.weibo.com//weibo?q=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%89%E4%BD%8D%E6%96%B0%E8%8B%B1%E9%9B%84%E5%85%AC%E5%B8%83&t=31&band_rank=2&Refer=top)
1. [新中国恢复联合国合法席位55年了](https://s.weibo.com//weibo?q=%23%E6%96%B0%E4%B8%AD%E5%9B%BD%E6%81%A2%E5%A4%8D%E8%81%94%E5%90%88%E5%9B%BD%E5%90%88%E6%B3%95%E5%B8%AD%E4%BD%8D55%E5%B9%B4%E4%BA%86%23&t=31&band_rank=3&Refer=top)
1. [杨幂给林俊杰伴舞](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E5%B9%82%E7%BB%99%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%BC%B4%E8%88%9E%23&t=31&band_rank=4&Refer=top)
1. [尚公主 九重紫](https://s.weibo.com//weibo?q=%E5%B0%9A%E5%85%AC%E4%B8%BB%20%E4%B9%9D%E9%87%8D%E7%B4%AB&t=31&band_rank=5&Refer=top)
1. [31省份去年平均工资出炉](https://s.weibo.com//weibo?q=%2331%E7%9C%81%E4%BB%BD%E5%8E%BB%E5%B9%B4%E5%B9%B3%E5%9D%87%E5%B7%A5%E8%B5%84%E5%87%BA%E7%82%89%23&t=31&band_rank=6&Refer=top)
1. [24岁女子赴泰见男网友被绑往边境](https://s.weibo.com//weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%90%E8%B5%B4%E6%B3%B0%E8%A7%81%E7%94%B7%E7%BD%91%E5%8F%8B%E8%A2%AB%E7%BB%91%E5%BE%80%E8%BE%B9%E5%A2%83%23&t=31&band_rank=7&Refer=top)
1. [新剧开播没几天就限免](https://s.weibo.com//weibo?q=%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%E6%B2%A1%E5%87%A0%E5%A4%A9%E5%B0%B1%E9%99%90%E5%85%8D&t=31&band_rank=8&Refer=top)
1. [张本智和逆转夺冠](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E9%80%86%E8%BD%AC%E5%A4%BA%E5%86%A0%23&t=31&band_rank=9&Refer=top)
1. [曼联半场0比2伯恩茅斯](https://s.weibo.com//weibo?q=%23%E6%9B%BC%E8%81%94%E5%8D%8A%E5%9C%BA0%E6%AF%942%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF%23&t=31&band_rank=10&Refer=top)
1. [林俊杰杨幂 茉莉雨](https://s.weibo.com//weibo?q=%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%9D%A8%E5%B9%82%20%E8%8C%89%E8%8E%89%E9%9B%A8&t=31&band_rank=12&Refer=top)
1. [肖战演唱会刚结束就回复了史彭元](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%9A%E7%BB%93%E6%9D%9F%E5%B0%B1%E5%9B%9E%E5%A4%8D%E4%BA%86%E5%8F%B2%E5%BD%AD%E5%85%83%23&t=31&band_rank=13&Refer=top)
1. [梦泪羞辱仪式](https://s.weibo.com//weibo?q=%23%E6%A2%A6%E6%B3%AA%E7%BE%9E%E8%BE%B1%E4%BB%AA%E5%BC%8F%23&t=31&band_rank=14&Refer=top)
1. [张本智和再提巴黎奥运输给樊振东](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E5%86%8D%E6%8F%90%E5%B7%B4%E9%BB%8E%E5%A5%A5%E8%BF%90%E8%BE%93%E7%BB%99%E6%A8%8A%E6%8C%AF%E4%B8%9C%23&t=31&band_rank=15&Refer=top)
1. [黄子韬我结婚生子碍你事了吗](https://s.weibo.com//weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%88%91%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E7%A2%8D%E4%BD%A0%E4%BA%8B%E4%BA%86%E5%90%97%23&t=31&band_rank=16&Refer=top)
1. [张智霖与前女友许秋怡世纪合体](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E4%B8%8E%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%AE%B8%E7%A7%8B%E6%80%A1%E4%B8%96%E7%BA%AA%E5%90%88%E4%BD%93%23&t=31&band_rank=17&Refer=top)
1. [蔡康永依旧没有说一句我是中国人](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E4%BE%9D%E6%97%A7%E6%B2%A1%E6%9C%89%E8%AF%B4%E4%B8%80%E5%8F%A5%E6%88%91%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%23&t=31&band_rank=18&Refer=top)
1. [蔡徐坤哭了](https://s.weibo.com//weibo?q=%E8%94%A1%E5%BE%90%E5%9D%A4%E5%93%AD%E4%BA%86&t=31&band_rank=19&Refer=top)
1. [钟文泽 辟谣视频](https://s.weibo.com//weibo?q=%E9%92%9F%E6%96%87%E6%B3%BD%20%E8%BE%9F%E8%B0%A3%E8%A7%86%E9%A2%91&t=31&band_rank=20&Refer=top)
1. [最封建的不是古代而是影视剧](https://s.weibo.com//weibo?q=%E6%9C%80%E5%B0%81%E5%BB%BA%E7%9A%84%E4%B8%8D%E6%98%AF%E5%8F%A4%E4%BB%A3%E8%80%8C%E6%98%AF%E5%BD%B1%E8%A7%86%E5%89%A7&t=31&band_rank=21&Refer=top)
1. [老戏骨集体飙戏 男女主像睡着了](https://s.weibo.com//weibo?q=%E8%80%81%E6%88%8F%E9%AA%A8%E9%9B%86%E4%BD%93%E9%A3%99%E6%88%8F%20%E7%94%B7%E5%A5%B3%E4%B8%BB%E5%83%8F%E7%9D%A1%E7%9D%80%E4%BA%86&t=31&band_rank=22&Refer=top)
1. [迪丽热巴外网大出圈](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%96%E7%BD%91%E5%A4%A7%E5%87%BA%E5%9C%88%23&t=31&band_rank=23&Refer=top)
1. [刘宇宁神级出场](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%A5%9E%E7%BA%A7%E5%87%BA%E5%9C%BA%23&t=31&band_rank=24&Refer=top)
1. [王者新英雄姜姜](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E5%A7%9C%E5%A7%9C%23&t=31&band_rank=25&Refer=top)
1. [长期熬夜或是甲状腺癌诱因之一](https://s.weibo.com//weibo?q=%23%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%E6%88%96%E6%98%AF%E7%94%B2%E7%8A%B6%E8%85%BA%E7%99%8C%E8%AF%B1%E5%9B%A0%E4%B9%8B%E4%B8%80%23&t=31&band_rank=26&Refer=top)
1. [刘雯收藏夹全是井柏然](https://s.weibo.com//weibo?q=%23%E5%88%98%E9%9B%AF%E6%94%B6%E8%97%8F%E5%A4%B9%E5%85%A8%E6%98%AF%E4%BA%95%E6%9F%8F%E7%84%B6%23&t=31&band_rank=27&Refer=top)
1. [迪丽热巴回应雨中走红毯](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9B%9E%E5%BA%94%E9%9B%A8%E4%B8%AD%E8%B5%B0%E7%BA%A2%E6%AF%AF%23&t=31&band_rank=28&Refer=top)
1. [妻子要15万备孕丈夫酒后骂去死](https://s.weibo.com//weibo?q=%23%E5%A6%BB%E5%AD%90%E8%A6%8115%E4%B8%87%E5%A4%87%E5%AD%95%E4%B8%88%E5%A4%AB%E9%85%92%E5%90%8E%E9%AA%82%E5%8E%BB%E6%AD%BB%23&t=31&band_rank=29&Refer=top)
1. [曼联vs伯恩茅斯](https://s.weibo.com//weibo?q=%E6%9B%BC%E8%81%94vs%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF&t=31&band_rank=30&Refer=top)
1. [蔡徐坤直播](https://s.weibo.com//weibo?q=%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9B%B4%E6%92%AD&t=31&band_rank=31&Refer=top)
1. [钟文泽给小米贴磨砂膜对比](https://s.weibo.com//weibo?q=%E9%92%9F%E6%96%87%E6%B3%BD%E7%BB%99%E5%B0%8F%E7%B1%B3%E8%B4%B4%E7%A3%A8%E7%A0%82%E8%86%9C%E5%AF%B9%E6%AF%94&t=31&band_rank=32&Refer=top)
1. [金饰克价最多跌近500元](https://s.weibo.com//weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E6%9C%80%E5%A4%9A%E8%B7%8C%E8%BF%91500%E5%85%83%23&t=31&band_rank=33&Refer=top)
1. [参加节目是我这辈子最失败的决定](https://s.weibo.com//weibo?q=%E5%8F%82%E5%8A%A0%E8%8A%82%E7%9B%AE%E6%98%AF%E6%88%91%E8%BF%99%E8%BE%88%E5%AD%90%E6%9C%80%E5%A4%B1%E8%B4%A5%E7%9A%84%E5%86%B3%E5%AE%9A&t=31&band_rank=34&Refer=top)
1. [温瑞博袁励岑抗议颁奖放错国旗](https://s.weibo.com//weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A%E8%A2%81%E5%8A%B1%E5%B2%91%E6%8A%97%E8%AE%AE%E9%A2%81%E5%A5%96%E6%94%BE%E9%94%99%E5%9B%BD%E6%97%97%23&t=31&band_rank=35&Refer=top)
1. [孩子找工作才是人生起点](https://s.weibo.com//weibo?q=%E5%AD%A9%E5%AD%90%E6%89%BE%E5%B7%A5%E4%BD%9C%E6%89%8D%E6%98%AF%E4%BA%BA%E7%94%9F%E8%B5%B7%E7%82%B9&t=31&band_rank=36&Refer=top)
1. [王者新女英雄](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E5%A5%B3%E8%8B%B1%E9%9B%84%23&t=31&band_rank=37&Refer=top)
1. [声生不息宝岛季2彩排](https://s.weibo.com//weibo?q=%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E5%AE%9D%E5%B2%9B%E5%AD%A32%E5%BD%A9%E6%8E%92&t=31&band_rank=38&Refer=top)
1. [钟文泽贴磨砂膜对比小米苹果](https://s.weibo.com//weibo?q=%E9%92%9F%E6%96%87%E6%B3%BD%E8%B4%B4%E7%A3%A8%E7%A0%82%E8%86%9C%E5%AF%B9%E6%AF%94%E5%B0%8F%E7%B1%B3%E8%8B%B9%E6%9E%9C&t=31&band_rank=39&Refer=top)
1. [张杰家每天有22条腿在走路](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%AE%B6%E6%AF%8F%E5%A4%A9%E6%9C%8922%E6%9D%A1%E8%85%BF%E5%9C%A8%E8%B5%B0%E8%B7%AF%23&t=31&band_rank=40&Refer=top)
1. [网友一顿20个水饺求超越](https://s.weibo.com//weibo?q=%E7%BD%91%E5%8F%8B%E4%B8%80%E9%A1%BF20%E4%B8%AA%E6%B0%B4%E9%A5%BA%E6%B1%82%E8%B6%85%E8%B6%8A&t=31&band_rank=41&Refer=top)
1. [世锦赛跳马冠军神了](https://s.weibo.com//weibo?q=%E4%B8%96%E9%94%A6%E8%B5%9B%E8%B7%B3%E9%A9%AC%E5%86%A0%E5%86%9B%E7%A5%9E%E4%BA%86&t=31&band_rank=42&Refer=top)
1. [蒙古国大火烧了10多天后日企才道歉](https://s.weibo.com//weibo?q=%23%E8%92%99%E5%8F%A4%E5%9B%BD%E5%A4%A7%E7%81%AB%E7%83%A7%E4%BA%8610%E5%A4%9A%E5%A4%A9%E5%90%8E%E6%97%A5%E4%BC%81%E6%89%8D%E9%81%93%E6%AD%89%23&t=31&band_rank=43&Refer=top)
1. [钎城 避嫌](https://s.weibo.com//weibo?q=%E9%92%8E%E5%9F%8E%20%E9%81%BF%E5%AB%8C&t=31&band_rank=44&Refer=top)
1. [尚公主热度](https://s.weibo.com//weibo?q=%E5%B0%9A%E5%85%AC%E4%B8%BB%E7%83%AD%E5%BA%A6&t=31&band_rank=45&Refer=top)
1. [县委书记说被扔下水是张雪临时起意](https://s.weibo.com//weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%AF%B4%E8%A2%AB%E6%89%94%E4%B8%8B%E6%B0%B4%E6%98%AF%E5%BC%A0%E9%9B%AA%E4%B8%B4%E6%97%B6%E8%B5%B7%E6%84%8F%23&t=31&band_rank=46&Refer=top)
1. [刘宇宁展示天资的事顺手就做了](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%B1%95%E7%A4%BA%E5%A4%A9%E8%B5%84%E7%9A%84%E4%BA%8B%E9%A1%BA%E6%89%8B%E5%B0%B1%E5%81%9A%E4%BA%86%23&t=31&band_rank=47&Refer=top)
1. [刘雯关闭收藏](https://s.weibo.com//weibo?q=%E5%88%98%E9%9B%AF%E5%85%B3%E9%97%AD%E6%94%B6%E8%97%8F&t=31&band_rank=48&Refer=top)
1. [亚锦赛国乒4冠4亚](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%9B%BD%E4%B9%924%E5%86%A04%E4%BA%9A%23&t=31&band_rank=49&Refer=top)
1. [被一株三角梅燃到了](https://s.weibo.com//weibo?q=%23%E8%A2%AB%E4%B8%80%E6%A0%AA%E4%B8%89%E8%A7%92%E6%A2%85%E7%87%83%E5%88%B0%E4%BA%86%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
