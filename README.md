# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-27 03:54:08

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
<!-- 最后更新时间 Sun Sep 27 2026 01:23:22 GMT+0800 (China Standard Time) -->

1. [中美达成300亿美元对等降税安排](https://so.toutiao.com/search?keyword=中美达成300亿美元对等降税安排)
1. [特朗普第一时间发帖：期待下次会面](https://so.toutiao.com/search?keyword=特朗普第一时间发帖：期待下次会面)
1. [中美关系持续稳定发展惠及世界](https://so.toutiao.com/search?keyword=中美关系持续稳定发展惠及世界)
1. [张本智和回应输球：几乎是场完败](https://so.toutiao.com/search?keyword=张本智和回应输球：几乎是场完败)
1. [中美元首白宫互动的五个细节](https://so.toutiao.com/search?keyword=中美元首白宫互动的五个细节)
1. [中秋国庆白酒卖不动了吗](https://so.toutiao.com/search?keyword=中秋国庆白酒卖不动了吗)
1. [“莎头”遭横扫无缘三连冠](https://so.toutiao.com/search?keyword=“莎头”遭横扫无缘三连冠)
1. [侯英超：阿拉米扬赢张本智和不算爆冷](https://so.toutiao.com/search?keyword=侯英超：阿拉米扬赢张本智和不算爆冷)
1. [中美元首会晤引发热烈国际反响](https://so.toutiao.com/search?keyword=中美元首会晤引发热烈国际反响)
1. [吴艳妮晋级亚运会决赛](https://so.toutiao.com/search?keyword=吴艳妮晋级亚运会决赛)
1. [刘欢离世前太太曾联系甄嬛传编曲](https://so.toutiao.com/search?keyword=刘欢离世前太太曾联系甄嬛传编曲)
1. [比尔·盖茨警告AI或致十亿人死亡](https://so.toutiao.com/search?keyword=比尔·盖茨警告AI或致十亿人死亡)
1. [无糖月饼可敞开吃？小心误区](https://so.toutiao.com/search?keyword=无糖月饼可敞开吃？小心误区)
1. [人民日报用歌词送别刘欢](https://so.toutiao.com/search?keyword=人民日报用歌词送别刘欢)
1. [张本智和爆冷出局](https://so.toutiao.com/search?keyword=张本智和爆冷出局)
1. [特朗普：这次访问富有成效](https://so.toutiao.com/search?keyword=特朗普：这次访问富有成效)
1. [刘欢常跟人喝酒聊天到天亮](https://so.toutiao.com/search?keyword=刘欢常跟人喝酒聊天到天亮)
1. [孙颖莎回应无缘亚运混双三连冠](https://so.toutiao.com/search?keyword=孙颖莎回应无缘亚运混双三连冠)
1. [程靖淇谈王楚钦半决赛对手](https://so.toutiao.com/search?keyword=程靖淇谈王楚钦半决赛对手)
1. [刘欢今年1月最后一次公开演出](https://so.toutiao.com/search?keyword=刘欢今年1月最后一次公开演出)
1. [林诗栋赢松岛辉空后激动连续跨栏](https://so.toutiao.com/search?keyword=林诗栋赢松岛辉空后激动连续跨栏)
1. [大陆学生赴台交流被女间谍主动接近](https://so.toutiao.com/search?keyword=大陆学生赴台交流被女间谍主动接近)
1. [刘欢妻子：我永远的爱 永远的痛](https://so.toutiao.com/search?keyword=刘欢妻子：我永远的爱%20永远的痛)
1. [日本乒乓亚运男单全军覆没](https://so.toutiao.com/search?keyword=日本乒乓亚运男单全军覆没)
1. [评论员：美国希望跟中国走上新台阶](https://so.toutiao.com/search?keyword=评论员：美国希望跟中国走上新台阶)
1. [《歌手》节目已痛失两位“歌王”](https://so.toutiao.com/search?keyword=《歌手》节目已痛失两位“歌王”)
1. [中国男足时隔28年再进亚运四强](https://so.toutiao.com/search?keyword=中国男足时隔28年再进亚运四强)
1. [侯英超：林诗栋脑子要转起来](https://so.toutiao.com/search?keyword=侯英超：林诗栋脑子要转起来)
1. [刘欢丧事从简不举行追悼会](https://so.toutiao.com/search?keyword=刘欢丧事从简不举行追悼会)
1. [陈熠/范姝涵0-3张本美和/早田希娜](https://so.toutiao.com/search?keyword=陈熠/范姝涵0-3张本美和/早田希娜)
1. [长假为何会对股票市场产生心理影响](https://so.toutiao.com/search?keyword=长假为何会对股票市场产生心理影响)
1. [刘欢曾因股骨头坏死治疗](https://so.toutiao.com/search?keyword=刘欢曾因股骨头坏死治疗)
1. [五仁月饼成回收香饽饽](https://so.toutiao.com/search?keyword=五仁月饼成回收香饽饽)
1. [如何看中国队拿下本届亚运会百金](https://so.toutiao.com/search?keyword=如何看中国队拿下本届亚运会百金)
1. [那英演唱会唱《弯弯的月亮》](https://so.toutiao.com/search?keyword=那英演唱会唱《弯弯的月亮》)
1. [21岁香港女生参加贴瓷砖比赛走红](https://so.toutiao.com/search?keyword=21岁香港女生参加贴瓷砖比赛走红)
1. [杨舒予：铜牌很遗憾](https://so.toutiao.com/search?keyword=杨舒予：铜牌很遗憾)
1. [为何股骨头坏死被称为不死癌症](https://so.toutiao.com/search?keyword=为何股骨头坏死被称为不死癌症)
1. [健康早餐要包含哪些食物](https://so.toutiao.com/search?keyword=健康早餐要包含哪些食物)
1. [俄军称打击乌“星链”数据处理中心](https://so.toutiao.com/search?keyword=俄军称打击乌“星链”数据处理中心)
1. [《甄嬛传》片头片尾曲演唱者均离世](https://so.toutiao.com/search?keyword=《甄嬛传》片头片尾曲演唱者均离世)
1. [评论员：美方不应将台湾问题工具化](https://so.toutiao.com/search?keyword=评论员：美方不应将台湾问题工具化)
1. [U23国足青春风暴重塑希望](https://so.toutiao.com/search?keyword=U23国足青春风暴重塑希望)
1. [刘欢和他的时代之歌](https://so.toutiao.com/search?keyword=刘欢和他的时代之歌)
1. [赣超现场全场球迷纵情呐喊](https://so.toutiao.com/search?keyword=赣超现场全场球迷纵情呐喊)
1. [朱立伦心疼蒋万安受委屈](https://so.toutiao.com/search?keyword=朱立伦心疼蒋万安受委屈)
1. [那个让全中国跟着唱的人谢幕了](https://so.toutiao.com/search?keyword=那个让全中国跟着唱的人谢幕了)
1. [贺晓明、贺黎明祭拜父亲贺龙元帅](https://so.toutiao.com/search?keyword=贺晓明、贺黎明祭拜父亲贺龙元帅)
1. [东北超第二现场燃爆沈阳秋夜](https://so.toutiao.com/search?keyword=东北超第二现场燃爆沈阳秋夜)
1. [36年前刘欢和韦唯唱响《亚洲雄风》](https://so.toutiao.com/search?keyword=36年前刘欢和韦唯唱响《亚洲雄风》)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Sep 27 2026 03:52:09 GMT+0800 (China Standard Time) -->

1. [中美达成八点成果共识](https://www.zhihu.com/search?q=%E4%B8%AD%E7%BE%8E%E8%BE%BE%E6%88%90%E5%85%AB%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86)
1. [刘欢病逝](https://www.zhihu.com/search?q=%E5%88%98%E6%AC%A2%E7%97%85%E9%80%9D)
1. [日乒男单全军覆没](https://www.zhihu.com/search?q=%E6%97%A5%E4%B9%92%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1)
1. [中美构建建设性战略稳定关系](https://www.zhihu.com/search?q=%E4%B8%AD%E7%BE%8E%E6%9E%84%E5%BB%BA%E5%BB%BA%E8%AE%BE%E6%80%A7%E6%88%98%E7%95%A5%E7%A8%B3%E5%AE%9A%E5%85%B3%E7%B3%BB)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [美称中美贸易休战延至明年1月](https://www.zhihu.com/search?q=%E7%BE%8E%E7%A7%B0%E4%B8%AD%E7%BE%8E%E8%B4%B8%E6%98%93%E4%BC%91%E6%88%98%E5%BB%B6%E8%87%B3%E6%98%8E%E5%B9%B41%E6%9C%88)
1. [王楚钦 0-3 张本智和](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%200-3%20%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C)
1. [老人离世6亿全给再婚妻子](https://www.zhihu.com/search?q=%E8%80%81%E4%BA%BA%E7%A6%BB%E4%B8%966%E4%BA%BF%E5%85%A8%E7%BB%99%E5%86%8D%E5%A9%9A%E5%A6%BB%E5%AD%90)
1. [比尔盖茨警告AI或致十亿人死亡](https://www.zhihu.com/search?q=%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E8%AD%A6%E5%91%8AAI%E6%88%96%E8%87%B4%E5%8D%81%E4%BA%BF%E4%BA%BA%E6%AD%BB%E4%BA%A1)
1. [林诗栋4比2松岛辉空](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B4%E6%AF%942%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA)
1. [林诗栋蒯曼亚运混双冠军](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B%E8%92%AF%E6%9B%BC%E4%BA%9A%E8%BF%90%E6%B7%B7%E5%8F%8C%E5%86%A0%E5%86%9B)
1. [国家拟限制16岁以下群体使用社交网络](https://www.zhihu.com/search?q=%E5%9B%BD%E5%AE%B6%E6%8B%9F%E9%99%90%E5%88%B616%E5%B2%81%E4%BB%A5%E4%B8%8B%E7%BE%A4%E4%BD%93%E4%BD%BF%E7%94%A8%E7%A4%BE%E4%BA%A4%E7%BD%91%E7%BB%9C)
1. [王楚钦回应不敌张本智和](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Sep 27 2026 03:54:08 GMT+0800 (China Standard Time) -->

1. [亚运会乒乓球混双决赛，王楚钦/孙颖莎 0-4 林诗栋/蒯曼，国乒包揽亚运混双金银牌，如何评价本场比赛？](https://www.zhihu.com/question/2087238239216034300)
1. [亚运乒乓男单 1/4 决赛，张本智和 3-4 不敌伊朗阿拉米扬，如何评价本场比赛，张本到底什么水平？](https://www.zhihu.com/question/2087227137711240700)
1. [中美同意共同构建基于尊重、公平、对等的建设性战略稳定关系，这一新定位有哪些深意和影响？](https://www.zhihu.com/question/2087138028443668700)
1. [如何评价哈工程新出台的校园网管理办法？](https://www.zhihu.com/question/2086440332393238800)
1. [浙江男子出生28天就被送养到山东，58年后寻亲成功，比哥哥高一头，山东人每天吃什么？为啥会高出这么多？](https://www.zhihu.com/question/2087153255042082800)
1. [为什么现在不谈论可燃冰了？](https://www.zhihu.com/question/652812178)
1. [为什么鸡转头是「一下一下」「瞬移」，而不是像人一样有肉眼可见的转头过程？](https://www.zhihu.com/question/665173840)
1. [到底能不能在高速公路服务区停车过夜？](https://www.zhihu.com/question/654323142)
1. [为什么像刘欢这样「国民级」的音乐人越来越难出现？](https://www.zhihu.com/question/2087126350851044900)
1. [国家出手调控油价了，本轮涨幅砍半，半年四次压缩成品油涨幅，怎样解读？](https://www.zhihu.com/question/2087110406200194000)
1. [著名音乐家刘欢于9月25日在上海病逝，享年63岁，如何评价他在华语乐坛的地位？哪首歌是你的时代记忆？](https://www.zhihu.com/question/2087120107130598100)
1. [比尔•盖茨警告AI或可致十亿人死亡，呼吁立法监管，怎样看待他的观点？现阶段需要怎样的法律约束 AI？](https://www.zhihu.com/question/2087176327761585000)
1. [有酒店推出 369 元自助早餐月卡，可任选 70 种餐品，你愿意去吃吗？为啥酒店开始卖早餐月卡？](https://www.zhihu.com/question/2086826480202250200)
1. [财务自由的感觉是怎样的？](https://www.zhihu.com/question/23668539)
1. [冯小刚承认《抓特务》亏本但否认成本 3 亿，称电影「受到了一种网暴式、非理性的干扰」，你如何看待？](https://www.zhihu.com/question/2086137290808457200)
1. [四川38岁男子赴泰失联79天获救，称自己「超龄不好卖」被当赠品卖给园区，有哪些信息值得关注？](https://www.zhihu.com/question/2085859065209660200)
1. [为什么游戏里的“血条”，永远是从左往右减少，而不是从右往左？](https://www.zhihu.com/question/2085313776849633300)
1. [2026赛季F1阿塞拜疆大奖赛，拉塞尔夺冠，勒克莱尔第四，如何评价本场比赛？](https://www.zhihu.com/question/2087291029670074000)
1. [网红狗头萝莉自曝负债 650 万成老赖，主播为何频频陷入天价违约金困境？](https://www.zhihu.com/question/2086478767204086800)
1. [张本智和 3-0 王楚钦，赛后称等这枚金牌等了十年，现在张本智和的水平在哪个层次？对国乒威胁有多大？](https://www.zhihu.com/question/2086566324948264700)
1. [《微微一笑很倾城》女主换脸后重上流媒体，你观感如何？类似原因下架的作品都能这样「复活」吗？](https://www.zhihu.com/question/2086446703897310700)
1. [王楚钦之后谁还能扛起国乒大旗？为什么感觉新人都差了那么一点？](https://www.zhihu.com/question/2086538132225091000)
1. [如何评价李现、李一桐主演的悬疑剧《我不是大师》？](https://www.zhihu.com/question/2086421293939652000)
1. [婆婆一直充当透明人，我很排斥她偶尔上门在孩子面前混脸熟，甚至不打招呼去我娘家的行为，怎么办？](https://www.zhihu.com/question/2086570529029468400)
1. [一个人长期独居会养成什么习惯？](https://www.zhihu.com/question/426008625)
1. [和同事在相处的过程中最忌讳的是什么？](https://www.zhihu.com/question/2072132851504624600)
1. [护士突发脑出血倒在工作岗位，人社局称抢救十天不予认定工伤，为何倒在工位上仍无法认定工伤？](https://www.zhihu.com/question/2086839765966348300)
1. [油车长途自驾油耗偏高，有没有驾驶技巧和路线选择，能有效降低出行油耗？](https://www.zhihu.com/question/2083828171779196400)
1. [有没有让你震惊的冷知识？](https://www.zhihu.com/question/1919028887410671900)
1. [看完《敦煌英雄》你的感受如何？片中有哪些剧情让你印象深刻？](https://www.zhihu.com/question/2086581388153550300)
1. [亚运男足 1/4 决赛，中国男足 3-0 泰国男足，时隔 28 年重回亚运会四强，如何评价本场比赛？](https://www.zhihu.com/question/2087159273436313600)
1. [为什么很多谈了长时间恋爱的最后都会分手，或者十年长跑结了婚不久就离婚了？](https://www.zhihu.com/question/309507000)
1. [如何看待张本智和团体赛后表态「我和松岛要争世界第一，届时日本会强大到不用喊争冠的口号」？](https://www.zhihu.com/question/2086774593792861700)
1. [亚运会乒乓球男单 1/4 决赛，林诗栋 4-2 松岛辉空晋级男单四强，如何评价本场比赛？](https://www.zhihu.com/question/2087199678655717400)
1. [为什么现在很多影视剧，画面、服化道越来越精致，却很难让人记住角色？](https://www.zhihu.com/question/2084411390236833300)
1. [自驾租到一辆不熟悉的车，第一天上路前最该摸清哪些功能？](https://www.zhihu.com/question/2083290959282966800)
1. [一个人自驾，怎样判断当天该开到哪里？给自己定什么停下来的标准？](https://www.zhihu.com/question/2083290958708355800)

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
<!-- 最后更新时间 Sun Sep 27 2026 01:18:05 GMT+0800 (China Standard Time) -->

1. [习近平主席讲述中美人民友好故事](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%B8%BB%E5%B8%AD%E8%AE%B2%E8%BF%B0%E4%B8%AD%E7%BE%8E%E4%BA%BA%E6%B0%91%E5%8F%8B%E5%A5%BD%E6%95%85%E4%BA%8B%23&Refer=new_time)
1. [中美达成300亿美元对等降税安排](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E8%BE%BE%E6%88%90300%E4%BA%BF%E7%BE%8E%E5%85%83%E5%AF%B9%E7%AD%89%E9%99%8D%E7%A8%8E%E5%AE%89%E6%8E%92%23&t=31&band_rank=1&Refer=top)
1. [王楚钦感谢孙颖莎一起守住了混双金牌](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%84%9F%E8%B0%A2%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%80%E8%B5%B7%E5%AE%88%E4%BD%8F%E4%BA%86%E6%B7%B7%E5%8F%8C%E9%87%91%E7%89%8C%23&t=31&band_rank=2&Refer=top)
1. [中美八点成果共识公布](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%AB%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86%E5%85%AC%E5%B8%83%23&t=31&band_rank=3&Refer=top)
1. [孙颖莎说协会可以报两对混双](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E5%8D%8F%E4%BC%9A%E5%8F%AF%E4%BB%A5%E6%8A%A5%E4%B8%A4%E5%AF%B9%E6%B7%B7%E5%8F%8C%23&t=31&band_rank=4&Refer=top)
1. [国羽男单全军覆没](https://s.weibo.com//weibo?q=%E5%9B%BD%E7%BE%BD%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1&t=31&band_rank=5&Refer=top)
1. [赵雷](https://s.weibo.com//weibo?q=%E8%B5%B5%E9%9B%B7&t=31&band_rank=6&Refer=top)
1. [现在的消费需求越来越清晰了](https://s.weibo.com//weibo?q=%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%B6%88%E8%B4%B9%E9%9C%80%E6%B1%82%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%B8%85%E6%99%B0%E4%BA%86&t=31&band_rank=7&Refer=top)
1. [张本智和回应爆冷出局](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E5%9B%9E%E5%BA%94%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23&t=31&band_rank=8&Refer=top)
1. [九月多位公众人物相继离世](https://s.weibo.com//weibo?q=%23%E4%B9%9D%E6%9C%88%E5%A4%9A%E4%BD%8D%E5%85%AC%E4%BC%97%E4%BA%BA%E7%89%A9%E7%9B%B8%E7%BB%A7%E7%A6%BB%E4%B8%96%23&t=31&band_rank=9&Refer=top)
1. [中美相互支持对方办好APEC和G20](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E7%9B%B8%E4%BA%92%E6%94%AF%E6%8C%81%E5%AF%B9%E6%96%B9%E5%8A%9E%E5%A5%BDAPEC%E5%92%8CG20%23&t=31&band_rank=10&Refer=top)
1. [张本智和爆冷惊呆了韩国队](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%88%86%E5%86%B7%E6%83%8A%E5%91%86%E4%BA%86%E9%9F%A9%E5%9B%BD%E9%98%9F%23&t=31&band_rank=11&Refer=top)
1. [得知未婚妻遭性侵男子称错不在你](https://s.weibo.com//weibo?q=%23%E5%BE%97%E7%9F%A5%E6%9C%AA%E5%A9%9A%E5%A6%BB%E9%81%AD%E6%80%A7%E4%BE%B5%E7%94%B7%E5%AD%90%E7%A7%B0%E9%94%99%E4%B8%8D%E5%9C%A8%E4%BD%A0%23&t=31&band_rank=12&Refer=top)
1. [重庆轻轨出现瞬间的科幻感](https://s.weibo.com//weibo?q=%23%E9%87%8D%E5%BA%86%E8%BD%BB%E8%BD%A8%E5%87%BA%E7%8E%B0%E7%9E%AC%E9%97%B4%E7%9A%84%E7%A7%91%E5%B9%BB%E6%84%9F%23&t=31&band_rank=13&Refer=top)
1. [曝素媛原型成为医生](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E7%B4%A0%E5%AA%9B%E5%8E%9F%E5%9E%8B%E6%88%90%E4%B8%BA%E5%8C%BB%E7%94%9F%23&t=31&band_rank=14&Refer=top)
1. [田曦薇在米兰送的签名被秒卖](https://s.weibo.com//weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%9C%A8%E7%B1%B3%E5%85%B0%E9%80%81%E7%9A%84%E7%AD%BE%E5%90%8D%E8%A2%AB%E7%A7%92%E5%8D%96%23&t=31&band_rank=15&Refer=top)
1. [乌方公开已将两名朝鲜战俘移送韩国](https://s.weibo.com//weibo?q=%23%E4%B9%8C%E6%96%B9%E5%85%AC%E5%BC%80%E5%B7%B2%E5%B0%86%E4%B8%A4%E5%90%8D%E6%9C%9D%E9%B2%9C%E6%88%98%E4%BF%98%E7%A7%BB%E9%80%81%E9%9F%A9%E5%9B%BD%23&t=31&band_rank=16&Refer=top)
1. [孙颖莎回应不敌林诗栋蒯曼](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E6%9E%97%E8%AF%97%E6%A0%8B%E8%92%AF%E6%9B%BC%23&t=31&band_rank=17&Refer=top)
1. [乒乓球男单](https://s.weibo.com//weibo?q=%E4%B9%92%E4%B9%93%E7%90%83%E7%94%B7%E5%8D%95&t=31&band_rank=18&Refer=top)
1. [EDG stew](https://s.weibo.com//weibo?q=EDG%20stew&t=31&band_rank=19&Refer=top)
1. [田曦薇特意叮嘱了三遍不准卖](https://s.weibo.com//weibo?q=%E7%94%B0%E6%9B%A6%E8%96%87%E7%89%B9%E6%84%8F%E5%8F%AE%E5%98%B1%E4%BA%86%E4%B8%89%E9%81%8D%E4%B8%8D%E5%87%86%E5%8D%96&t=31&band_rank=20&Refer=top)
1. [井柏然看热搜](https://s.weibo.com//weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9C%8B%E7%83%AD%E6%90%9C%23&t=31&band_rank=21&Refer=top)
1. [蔡磊确诊渐冻症后的第七个中秋](https://s.weibo.com//weibo?q=%23%E8%94%A1%E7%A3%8A%E7%A1%AE%E8%AF%8A%E6%B8%90%E5%86%BB%E7%97%87%E5%90%8E%E7%9A%84%E7%AC%AC%E4%B8%83%E4%B8%AA%E4%B8%AD%E7%A7%8B%23&t=31&band_rank=22&Refer=top)
1. [兰香如故腾讯第五部破33000剧集](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%85%BE%E8%AE%AF%E7%AC%AC%E4%BA%94%E9%83%A8%E7%A0%B433000%E5%89%A7%E9%9B%86%23&t=31&band_rank=23&Refer=top)
1. [女儿知道欧洲游花了30万后](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%84%BF%E7%9F%A5%E9%81%93%E6%AC%A7%E6%B4%B2%E6%B8%B8%E8%8A%B1%E4%BA%8630%E4%B8%87%E5%90%8E&t=31&band_rank=24&Refer=top)
1. [刘学义编辑](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E7%BC%96%E8%BE%91%23&t=31&band_rank=25&Refer=top)
1. [病态嗑cp该停一停了](https://s.weibo.com//weibo?q=%23%E7%97%85%E6%80%81%E5%97%91cp%E8%AF%A5%E5%81%9C%E4%B8%80%E5%81%9C%E4%BA%86%23&t=31&band_rank=26&Refer=top)
1. [周深雨中唱响我爱你中国好震撼](https://s.weibo.com//weibo?q=%E5%91%A8%E6%B7%B1%E9%9B%A8%E4%B8%AD%E5%94%B1%E5%93%8D%E6%88%91%E7%88%B1%E4%BD%A0%E4%B8%AD%E5%9B%BD%E5%A5%BD%E9%9C%87%E6%92%BC&t=31&band_rank=27&Refer=top)
1. [刘欢 吴青峰](https://s.weibo.com//weibo?q=%E5%88%98%E6%AC%A2%20%E5%90%B4%E9%9D%92%E5%B3%B0&t=31&band_rank=28&Refer=top)
1. [一部iPhone到底有多贵](https://s.weibo.com//weibo?q=%23%E4%B8%80%E9%83%A8iPhone%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E8%B4%B5%23&t=31&band_rank=29&Refer=top)
1. [同卵双胞胎失散六十年一高一矮](https://s.weibo.com//weibo?q=%E5%90%8C%E5%8D%B5%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A4%B1%E6%95%A3%E5%85%AD%E5%8D%81%E5%B9%B4%E4%B8%80%E9%AB%98%E4%B8%80%E7%9F%AE&t=31&band_rank=30&Refer=top)
1. [中美建立推进贸易理事会等机制](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%BB%BA%E7%AB%8B%E6%8E%A8%E8%BF%9B%E8%B4%B8%E6%98%93%E7%90%86%E4%BA%8B%E4%BC%9A%E7%AD%89%E6%9C%BA%E5%88%B6%23&t=31&band_rank=31&Refer=top)
1. [张杰 刘欢老师一路走好](https://s.weibo.com//weibo?q=%E5%BC%A0%E6%9D%B0%20%E5%88%98%E6%AC%A2%E8%80%81%E5%B8%88%E4%B8%80%E8%B7%AF%E8%B5%B0%E5%A5%BD&t=31&band_rank=32&Refer=top)
1. [牛棚少了头牛主人调监控惊呆了](https://s.weibo.com//weibo?q=%23%E7%89%9B%E6%A3%9A%E5%B0%91%E4%BA%86%E5%A4%B4%E7%89%9B%E4%B8%BB%E4%BA%BA%E8%B0%83%E7%9B%91%E6%8E%A7%E6%83%8A%E5%91%86%E4%BA%86%23&t=31&band_rank=33&Refer=top)
1. [中美延期吉隆坡经贸磋商成果](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%BB%B6%E6%9C%9F%E5%90%89%E9%9A%86%E5%9D%A1%E7%BB%8F%E8%B4%B8%E7%A3%8B%E5%95%86%E6%88%90%E6%9E%9C%23&t=31&band_rank=34&Refer=top)
1. [刘欢去世](https://s.weibo.com//weibo?q=%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96&t=31&band_rank=35&Refer=top)
1. [娶到了我的人生上限](https://s.weibo.com//weibo?q=%E5%A8%B6%E5%88%B0%E4%BA%86%E6%88%91%E7%9A%84%E4%BA%BA%E7%94%9F%E4%B8%8A%E9%99%90&t=31&band_rank=36&Refer=top)
1. [婆婆大笑引来了婆婆大闹](https://s.weibo.com//weibo?q=%23%E5%A9%86%E5%A9%86%E5%A4%A7%E7%AC%91%E5%BC%95%E6%9D%A5%E4%BA%86%E5%A9%86%E5%A9%86%E5%A4%A7%E9%97%B9%23&t=31&band_rank=37&Refer=top)
1. [ZmjjKK回应输给LOUD](https://s.weibo.com//weibo?q=%23ZmjjKK%E5%9B%9E%E5%BA%94%E8%BE%93%E7%BB%99LOUD%23&t=31&band_rank=38&Refer=top)
1. [张一山演争吵戏面相都变了](https://s.weibo.com//weibo?q=%E5%BC%A0%E4%B8%80%E5%B1%B1%E6%BC%94%E4%BA%89%E5%90%B5%E6%88%8F%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86&t=31&band_rank=39&Refer=top)
1. [二妹妹谢昭第二次擦肩而过](https://s.weibo.com//weibo?q=%E4%BA%8C%E5%A6%B9%E5%A6%B9%E8%B0%A2%E6%98%AD%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87&t=31&band_rank=40&Refer=top)
1. [暴雨下的毛不易](https://s.weibo.com//weibo?q=%23%E6%9A%B4%E9%9B%A8%E4%B8%8B%E7%9A%84%E6%AF%9B%E4%B8%8D%E6%98%93%23&t=31&band_rank=41&Refer=top)
1. [张本智和被淘汰日本电视台立刻换节目](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%A2%AB%E6%B7%98%E6%B1%B0%E6%97%A5%E6%9C%AC%E7%94%B5%E8%A7%86%E5%8F%B0%E7%AB%8B%E5%88%BB%E6%8D%A2%E8%8A%82%E7%9B%AE%23&t=31&band_rank=42&Refer=top)
1. [肖战真的好严谨](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E7%9C%9F%E7%9A%84%E5%A5%BD%E4%B8%A5%E8%B0%A8%23&t=31&band_rank=43&Refer=top)
1. [刘欢妻子发文我永远的爱永远的痛](https://s.weibo.com//weibo?q=%23%E5%88%98%E6%AC%A2%E5%A6%BB%E5%AD%90%E5%8F%91%E6%96%87%E6%88%91%E6%B0%B8%E8%BF%9C%E7%9A%84%E7%88%B1%E6%B0%B8%E8%BF%9C%E7%9A%84%E7%97%9B%23&t=31&band_rank=44&Refer=top)
1. [林诗栋称4比0确实没想到](https://s.weibo.com//weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E7%A7%B04%E6%AF%940%E7%A1%AE%E5%AE%9E%E6%B2%A1%E6%83%B3%E5%88%B0%23&t=31&band_rank=45&Refer=top)
1. [女子咳嗽老不好掀开木地板吓坏](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E5%92%B3%E5%97%BD%E8%80%81%E4%B8%8D%E5%A5%BD%E6%8E%80%E5%BC%80%E6%9C%A8%E5%9C%B0%E6%9D%BF%E5%90%93%E5%9D%8F%23&t=31&band_rank=46&Refer=top)
1. [邓亚萍说王楚钦半决赛要倍加小心](https://s.weibo.com//weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8D%8A%E5%86%B3%E8%B5%9B%E8%A6%81%E5%80%8D%E5%8A%A0%E5%B0%8F%E5%BF%83%23&t=31&band_rank=47&Refer=top)
1. [戴军回忆刘欢喝酒时讲外语就是喝多了](https://s.weibo.com//weibo?q=%23%E6%88%B4%E5%86%9B%E5%9B%9E%E5%BF%86%E5%88%98%E6%AC%A2%E5%96%9D%E9%85%92%E6%97%B6%E8%AE%B2%E5%A4%96%E8%AF%AD%E5%B0%B1%E6%98%AF%E5%96%9D%E5%A4%9A%E4%BA%86%23&t=31&band_rank=48&Refer=top)
1. [曾沛慈演唱会](https://s.weibo.com//weibo?q=%E6%9B%BE%E6%B2%9B%E6%85%88%E6%BC%94%E5%94%B1%E4%BC%9A&t=31&band_rank=49&Refer=top)
1. [兰香说林锦岐胆子可真大](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E8%AF%B4%E6%9E%97%E9%94%A6%E5%B2%90%E8%83%86%E5%AD%90%E5%8F%AF%E7%9C%9F%E5%A4%A7&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
