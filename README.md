# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-08 00:30:00

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
<!-- 最后更新时间 Mon Sep 07 2026 18:42:21 GMT+0800 (China Standard Time) -->

1. [华为新款折叠屏手机售价19999元起](https://so.toutiao.com/search?keyword=华为新款折叠屏手机售价19999元起)
1. [“郭德纲篡改红歌”处理结果公布](https://so.toutiao.com/search?keyword=“郭德纲篡改红歌”处理结果公布)
1. [赓续科创薪火 书写报国华章](https://so.toutiao.com/search?keyword=赓续科创薪火%20书写报国华章)
1. [百万粉丝吃播网红“干饭莹莹”离世](https://so.toutiao.com/search?keyword=百万粉丝吃播网红“干饭莹莹”离世)
1. [华为时隔六年再次发布高性能芯片](https://so.toutiao.com/search?keyword=华为时隔六年再次发布高性能芯片)
1. [多地严查赵一鸣等零食品牌](https://so.toutiao.com/search?keyword=多地严查赵一鸣等零食品牌)
1. [儿子见母亲最后一面一声妈让人心碎](https://so.toutiao.com/search?keyword=儿子见母亲最后一面一声妈让人心碎)
1. [余承东介绍新芯片连喊3个Super](https://so.toutiao.com/search?keyword=余承东介绍新芯片连喊3个Super)
1. [媒体：中国女篮胜了但别忘记29次失误](https://so.toutiao.com/search?keyword=媒体：中国女篮胜了但别忘记29次失误)
1. [南宁站一旅客跳入股道与列车碰撞身亡](https://so.toutiao.com/search?keyword=南宁站一旅客跳入股道与列车碰撞身亡)
1. [湖北来凤辟谣“修地铁挖出施工人员”](https://so.toutiao.com/search?keyword=湖北来凤辟谣“修地铁挖出施工人员”)
1. [刘德华也有年龄焦虑](https://so.toutiao.com/search?keyword=刘德华也有年龄焦虑)
1. [郑佩佩去世后捐赠了大脑](https://so.toutiao.com/search?keyword=郑佩佩去世后捐赠了大脑)
1. [曝井柏然刘雯结婚](https://so.toutiao.com/search?keyword=曝井柏然刘雯结婚)
1. [余承东演示三折叠纯物理防偷窥](https://so.toutiao.com/search?keyword=余承东演示三折叠纯物理防偷窥)
1. [财政部将发行3000亿特别国债](https://so.toutiao.com/search?keyword=财政部将发行3000亿特别国债)
1. [证监会原副主席王建军被判无期](https://so.toutiao.com/search?keyword=证监会原副主席王建军被判无期)
1. [博主：特斯拉再不降价就要出局了](https://so.toutiao.com/search?keyword=博主：特斯拉再不降价就要出局了)
1. [六旬富豪伙同妻子送90后情人坐牢](https://so.toutiao.com/search?keyword=六旬富豪伙同妻子送90后情人坐牢)
1. [阔折叠手机为什么火了](https://so.toutiao.com/search?keyword=阔折叠手机为什么火了)
1. [张雪机车法国站次回合获得第3名](https://so.toutiao.com/search?keyword=张雪机车法国站次回合获得第3名)
1. [中国最北职院开学 新生穿羽绒服报到](https://so.toutiao.com/search?keyword=中国最北职院开学%20新生穿羽绒服报到)
1. [医生：高血糖预防远重于治疗](https://so.toutiao.com/search?keyword=医生：高血糖预防远重于治疗)
1. [德选择党票数第一为何被挡在政府门外](https://so.toutiao.com/search?keyword=德选择党票数第一为何被挡在政府门外)
1. [南阳“老头乐”退场引出全国性难题](https://so.toutiao.com/search?keyword=南阳“老头乐”退场引出全国性难题)
1. [财政部570亿增资三家保险公司](https://so.toutiao.com/search?keyword=财政部570亿增资三家保险公司)
1. [男子捞螃蟹时救起漂浮女子](https://so.toutiao.com/search?keyword=男子捞螃蟹时救起漂浮女子)
1. [特朗普发布太空部队新制服被批像纳粹](https://so.toutiao.com/search?keyword=特朗普发布太空部队新制服被批像纳粹)
1. [中方回应德国选择党赢得一州议会选举](https://so.toutiao.com/search?keyword=中方回应德国选择党赢得一州议会选举)
1. [科技股大涨是反弹还是反转](https://so.toutiao.com/search?keyword=科技股大涨是反弹还是反转)
1. [特斯拉Model 3/Y降价](https://so.toutiao.com/search?keyword=特斯拉Model%203/Y降价)
1. [西方拉拢越南跟中国打稀土战能得逞吗](https://so.toutiao.com/search?keyword=西方拉拢越南跟中国打稀土战能得逞吗)
1. [店老板给台湾游客送自己晒的花生](https://so.toutiao.com/search?keyword=店老板给台湾游客送自己晒的花生)
1. [特朗普派女婿调停俄乌能行吗](https://so.toutiao.com/search?keyword=特朗普派女婿调停俄乌能行吗)
1. [特朗普晒“总统档位图”将自己排第一](https://so.toutiao.com/search?keyword=特朗普晒“总统档位图”将自己排第一)
1. [妈妈配合儿子拍视频被误伤](https://so.toutiao.com/search?keyword=妈妈配合儿子拍视频被误伤)
1. [博主：美俄乌谈判没人会真正让步](https://so.toutiao.com/search?keyword=博主：美俄乌谈判没人会真正让步)
1. [学校后勤经理吃空饷60余万获刑](https://so.toutiao.com/search?keyword=学校后勤经理吃空饷60余万获刑)
1. [王一博给吴彦祖发声视频点赞](https://so.toutiao.com/search?keyword=王一博给吴彦祖发声视频点赞)
1. [400多克丢失黄金在墙缝中找到](https://so.toutiao.com/search?keyword=400多克丢失黄金在墙缝中找到)
1. [高考444分被殡葬专业录取男孩已入学](https://so.toutiao.com/search?keyword=高考444分被殡葬专业录取男孩已入学)
1. [vivo为何不跟风做阔折叠阔直板](https://so.toutiao.com/search?keyword=vivo为何不跟风做阔折叠阔直板)
1. [山东省政府原参事徐景颜被双开](https://so.toutiao.com/search?keyword=山东省政府原参事徐景颜被双开)
1. [外媒：特朗普暗示将新墨西哥州更名](https://so.toutiao.com/search?keyword=外媒：特朗普暗示将新墨西哥州更名)
1. [中秋放假3天不调休高速不免费](https://so.toutiao.com/search?keyword=中秋放假3天不调休高速不免费)
1. [多地延续个人社保缴费25%补贴](https://so.toutiao.com/search?keyword=多地延续个人社保缴费25%补贴)
1. [武亮：接棒张雪峰后压力大到斑秃](https://so.toutiao.com/search?keyword=武亮：接棒张雪峰后压力大到斑秃)
1. [广州一物流园现树根“僵尸车”](https://so.toutiao.com/search?keyword=广州一物流园现树根“僵尸车”)
1. [葫芦娃爷爷被“全国通缉”留言逗笑](https://so.toutiao.com/search?keyword=葫芦娃爷爷被“全国通缉”留言逗笑)
1. [2款新隐身机是否将在珠海航展亮相](https://so.toutiao.com/search?keyword=2款新隐身机是否将在珠海航展亮相)
1. [美林肯号航母官兵5天消费1亿泰铢](https://so.toutiao.com/search?keyword=美林肯号航母官兵5天消费1亿泰铢)
1. [8月经济发展看点有哪些](https://so.toutiao.com/search?keyword=8月经济发展看点有哪些)
1. [星宇总经理等4名管理人员被处理](https://so.toutiao.com/search?keyword=星宇总经理等4名管理人员被处理)
1. [贫困生能不能追星](https://so.toutiao.com/search?keyword=贫困生能不能追星)
1. [官方回应驳船往长江倾倒黑色固体](https://so.toutiao.com/search?keyword=官方回应驳船往长江倾倒黑色固体)
1. [女子月捐数年无人问停捐后遭催捐](https://so.toutiao.com/search?keyword=女子月捐数年无人问停捐后遭催捐)
1. [贵州3名失联女孩都已找到](https://so.toutiao.com/search?keyword=贵州3名失联女孩都已找到)
1. [河北这只老虎不咬人专哄睡觉](https://so.toutiao.com/search?keyword=河北这只老虎不咬人专哄睡觉)
1. [一吨旧手机能提炼200克黄金？假的](https://so.toutiao.com/search?keyword=一吨旧手机能提炼200克黄金？假的)
1. [《我的前半生》平儿扮演者考入中戏](https://so.toutiao.com/search?keyword=《我的前半生》平儿扮演者考入中戏)
1. [网友上海高铁站偶遇刘亦菲](https://so.toutiao.com/search?keyword=网友上海高铁站偶遇刘亦菲)
1. [白露有哪些习俗](https://so.toutiao.com/search?keyword=白露有哪些习俗)
1. [“葫芦娃爷爷”隔壁阳台挂起7个葫芦](https://so.toutiao.com/search?keyword=“葫芦娃爷爷”隔壁阳台挂起7个葫芦)
1. [扎哈罗娃：日本有“病”别传染给他国](https://so.toutiao.com/search?keyword=扎哈罗娃：日本有“病”别传染给他国)
1. [女子外出喝酒致儿子坠亡 法院判了](https://so.toutiao.com/search?keyword=女子外出喝酒致儿子坠亡%20法院判了)
1. [国产GPU四小龙谁过得最好](https://so.toutiao.com/search?keyword=国产GPU四小龙谁过得最好)
1. [斯诺克最新世界排名：赵心童守住第一](https://so.toutiao.com/search?keyword=斯诺克最新世界排名：赵心童守住第一)
1. [郭富城称碰到刘德华张学友会聊育女经](https://so.toutiao.com/search?keyword=郭富城称碰到刘德华张学友会聊育女经)
1. [王一博赛车被撞调查结果公布](https://so.toutiao.com/search?keyword=王一博赛车被撞调查结果公布)
1. [王传福：一块拇指大小电池造就比亚迪](https://so.toutiao.com/search?keyword=王传福：一块拇指大小电池造就比亚迪)
1. [湖北省公安厅原副厅长吴晓波被查](https://so.toutiao.com/search?keyword=湖北省公安厅原副厅长吴晓波被查)
1. [当地回应赴港看演唱会被取消低保](https://so.toutiao.com/search?keyword=当地回应赴港看演唱会被取消低保)
1. [张伯礼：秋冻要掌握一个度](https://so.toutiao.com/search?keyword=张伯礼：秋冻要掌握一个度)
1. [多省份大范围降温开启](https://so.toutiao.com/search?keyword=多省份大范围降温开启)
1. [广西河池发生刑案女子身亡嫌犯跳楼](https://so.toutiao.com/search?keyword=广西河池发生刑案女子身亡嫌犯跳楼)
1. [中美战区司令会晤对台湾释放清晰信号](https://so.toutiao.com/search?keyword=中美战区司令会晤对台湾释放清晰信号)
1. [评论员：A股四季度行情可期](https://so.toutiao.com/search?keyword=评论员：A股四季度行情可期)
1. [中国女篮战意大利决定附加赛对手](https://so.toutiao.com/search?keyword=中国女篮战意大利决定附加赛对手)
1. [专家：房地产信贷制度迎里程碑式改革](https://so.toutiao.com/search?keyword=专家：房地产信贷制度迎里程碑式改革)
1. [媒体：老师身上该有什么不该有什么](https://so.toutiao.com/search?keyword=媒体：老师身上该有什么不该有什么)
1. [中国女篮极限逆转捷克暴露不少问题](https://so.toutiao.com/search?keyword=中国女篮极限逆转捷克暴露不少问题)
1. [邵永灵：俄乌停战条件仍未成熟](https://so.toutiao.com/search?keyword=邵永灵：俄乌停战条件仍未成熟)
1. [医生淘洗粪便3小时找到肝吸虫](https://so.toutiao.com/search?keyword=医生淘洗粪便3小时找到肝吸虫)
1. [直接选拔招录军（警）官工作全面展开](https://so.toutiao.com/search?keyword=直接选拔招录军（警）官工作全面展开)
1. [中意女篮将争夺小组第二](https://so.toutiao.com/search?keyword=中意女篮将争夺小组第二)
1. [新能源车每天为中国省下150万桶石油](https://so.toutiao.com/search?keyword=新能源车每天为中国省下150万桶石油)
1. [存量房贷减负方法汇总 你能中几条](https://so.toutiao.com/search?keyword=存量房贷减负方法汇总%20你能中几条)
1. [《交锋》发起国剧的进击](https://so.toutiao.com/search?keyword=《交锋》发起国剧的进击)
1. [按“菜—肉—饭”顺序吃控糖效果好](https://so.toutiao.com/search?keyword=按“菜—肉—饭”顺序吃控糖效果好)
1. [乌克兰防空还能撑多久](https://so.toutiao.com/search?keyword=乌克兰防空还能撑多久)
1. [白露之后中国各地的秋天到了哪里](https://so.toutiao.com/search?keyword=白露之后中国各地的秋天到了哪里)
1. [河南南阳市人大常委会原主任刘朝瑞被查](https://so.toutiao.com/search?keyword=河南南阳市人大常委会原主任刘朝瑞被查)
1. [5岁女孩哭着抢收稻谷伙伴纷纷赶来](https://so.toutiao.com/search?keyword=5岁女孩哭着抢收稻谷伙伴纷纷赶来)
1. [“姜健”号驱逐舰正式入列朝鲜海军](https://so.toutiao.com/search?keyword=“姜健”号驱逐舰正式入列朝鲜海军)
1. [这里是中国科大](https://so.toutiao.com/search?keyword=这里是中国科大)
1. [媒体人：张子宇速度劣势被放大](https://so.toutiao.com/search?keyword=媒体人：张子宇速度劣势被放大)
1. [手机涨价消费者为何不买账](https://so.toutiao.com/search?keyword=手机涨价消费者为何不买账)
1. [挖眼案男孩操作手机完成报到](https://so.toutiao.com/search?keyword=挖眼案男孩操作手机完成报到)
1. [奇瑞董事长幽默回应谁是最强劲对手](https://so.toutiao.com/search?keyword=奇瑞董事长幽默回应谁是最强劲对手)
1. [今日白露](https://so.toutiao.com/search?keyword=今日白露)
1. [网传“青铜峡大坝开始泄洪”系谣言](https://so.toutiao.com/search?keyword=网传“青铜峡大坝开始泄洪”系谣言)
1. [女生赴港看演唱会被取消低保](https://so.toutiao.com/search?keyword=女生赴港看演唱会被取消低保)
1. [张纪中妻子备孕5胎](https://so.toutiao.com/search?keyword=张纪中妻子备孕5胎)
1. [葫芦爷爷提前剪葫芦 游客们表示理解](https://so.toutiao.com/search?keyword=葫芦爷爷提前剪葫芦%20游客们表示理解)
1. [折叠屏手机迎超级发布周](https://so.toutiao.com/search?keyword=折叠屏手机迎超级发布周)
1. [ETC该不该取消](https://so.toutiao.com/search?keyword=ETC该不该取消)
1. [小货车为避让掉头车辆撞倒路边行人](https://so.toutiao.com/search?keyword=小货车为避让掉头车辆撞倒路边行人)
1. [华为Mate XT 2蓄势待发](https://so.toutiao.com/search?keyword=华为Mate%20XT%202蓄势待发)
1. [男子开门见床上盘着约5斤重大蛇](https://so.toutiao.com/search?keyword=男子开门见床上盘着约5斤重大蛇)
1. [8家金融央企为何同日发布增资计划](https://so.toutiao.com/search?keyword=8家金融央企为何同日发布增资计划)
1. [俄外长把俄德紧张局势类比二战](https://so.toutiao.com/search?keyword=俄外长把俄德紧张局势类比二战)
1. [中国女篮力克捷克 出线占据主动](https://so.toutiao.com/search?keyword=中国女篮力克捷克%20出线占据主动)
1. [阿森纳2-1逆转切尔西](https://so.toutiao.com/search?keyword=阿森纳2-1逆转切尔西)
1. [女子怀孕后工资从8000调到3000](https://so.toutiao.com/search?keyword=女子怀孕后工资从8000调到3000)
1. [白露三候“鸿雁来”](https://so.toutiao.com/search?keyword=白露三候“鸿雁来”)
1. [西藏泥石流43人遇难519人失联](https://so.toutiao.com/search?keyword=西藏泥石流43人遇难519人失联)
1. [白雨露重返女子斯诺克排名榜首](https://so.toutiao.com/search?keyword=白雨露重返女子斯诺克排名榜首)
1. [高校两新生同名同姓同年同月同日生](https://so.toutiao.com/search?keyword=高校两新生同名同姓同年同月同日生)
1. [吉隆泥石流搜救现场石阶放满鲜花](https://so.toutiao.com/search?keyword=吉隆泥石流搜救现场石阶放满鲜花)
1. [瓦伦0-5惨败巴萨引球迷抗议](https://so.toutiao.com/search?keyword=瓦伦0-5惨败巴萨引球迷抗议)
1. [新一轮油价调整即将开启](https://so.toutiao.com/search?keyword=新一轮油价调整即将开启)
1. [天天喝牛奶真的能变白吗](https://so.toutiao.com/search?keyword=天天喝牛奶真的能变白吗)
1. [山西挖眼案受害男孩到长春大学报到](https://so.toutiao.com/search?keyword=山西挖眼案受害男孩到长春大学报到)
1. [A股转折点：从水牛到盈利牛](https://so.toutiao.com/search?keyword=A股转折点：从水牛到盈利牛)
1. [厄德高打进制胜球当选全场最佳球员](https://so.toutiao.com/search?keyword=厄德高打进制胜球当选全场最佳球员)
1. [近一半两弹一星元勋曾在中国科大任教](https://so.toutiao.com/search?keyword=近一半两弹一星元勋曾在中国科大任教)
1. [王子铭对抗后倒地不满判罚染黄](https://so.toutiao.com/search?keyword=王子铭对抗后倒地不满判罚染黄)
1. [62岁后睡觉尽量做到这4点](https://so.toutiao.com/search?keyword=62岁后睡觉尽量做到这4点)
1. [中小学一定要买校服吗？教育部回应](https://so.toutiao.com/search?keyword=中小学一定要买校服吗？教育部回应)
1. [福建5A景区600年古榕树暴雨中倒伏](https://so.toutiao.com/search?keyword=福建5A景区600年古榕树暴雨中倒伏)
1. [萌娃进滕王阁 系统提示终身免费票](https://so.toutiao.com/search?keyword=萌娃进滕王阁%20系统提示终身免费票)
1. [一张地图何以引发164比1的国际对峙](https://so.toutiao.com/search?keyword=一张地图何以引发164比1的国际对峙)
1. [CHINA GT就碰撞起火事故致歉](https://so.toutiao.com/search?keyword=CHINA%20GT就碰撞起火事故致歉)
1. [邂逅呼和浩特的白露时光](https://so.toutiao.com/search?keyword=邂逅呼和浩特的白露时光)
1. [中国节水账本里的“节约密码”](https://so.toutiao.com/search?keyword=中国节水账本里的“节约密码”)
1. [校长回应开学一年级只有一个人报到](https://so.toutiao.com/search?keyword=校长回应开学一年级只有一个人报到)
1. [男子对着英烈墙上4个同名烈士叫爷爷](https://so.toutiao.com/search?keyword=男子对着英烈墙上4个同名烈士叫爷爷)
1. [八国外长联合声明强烈谴责以色列](https://so.toutiao.com/search?keyword=八国外长联合声明强烈谴责以色列)
1. [央视曝光幽灵外卖乱象](https://so.toutiao.com/search?keyword=央视曝光幽灵外卖乱象)
1. [江西省公安厅原党委委员万秀奇被查](https://so.toutiao.com/search?keyword=江西省公安厅原党委委员万秀奇被查)
1. [财政部将向中国人寿注资350亿](https://so.toutiao.com/search?keyword=财政部将向中国人寿注资350亿)
1. [4位车企掌门人首次同时来到一所大学](https://so.toutiao.com/search?keyword=4位车企掌门人首次同时来到一所大学)
1. [俄新武器击碎乌民众“战局扭转”幻想](https://so.toutiao.com/search?keyword=俄新武器击碎乌民众“战局扭转”幻想)
1. [谁在郑钦文低谷期选择了“不分手”](https://so.toutiao.com/search?keyword=谁在郑钦文低谷期选择了“不分手”)
1. [伊朗称打击了美军航母和驱逐舰](https://so.toutiao.com/search?keyword=伊朗称打击了美军航母和驱逐舰)
1. [葫芦娃爷爷提前剪掉葫芦称需要休息](https://so.toutiao.com/search?keyword=葫芦娃爷爷提前剪掉葫芦称需要休息)
1. [陈妍希离婚后首谈二胎](https://so.toutiao.com/search?keyword=陈妍希离婚后首谈二胎)
1. [7日白露：草木凝清露 秋夜揽星河](https://so.toutiao.com/search?keyword=7日白露：草木凝清露%20秋夜揽星河)
1. [俄乌“三日停火”背后的美俄暗战棋局](https://so.toutiao.com/search?keyword=俄乌“三日停火”背后的美俄暗战棋局)
1. [网友便宜出售莆田泡水鞋 商家打假](https://so.toutiao.com/search?keyword=网友便宜出售莆田泡水鞋%20商家打假)
1. [79号车手哈托格49秒火海救人](https://so.toutiao.com/search?keyword=79号车手哈托格49秒火海救人)
1. [多家银行清理百亿不良](https://so.toutiao.com/search?keyword=多家银行清理百亿不良)
1. [俄空天军少将遇袭 乌方被指策划](https://so.toutiao.com/search?keyword=俄空天军少将遇袭%20乌方被指策划)
1. [美俄密谈有何看点](https://so.toutiao.com/search?keyword=美俄密谈有何看点)
1. [张馨予晒度假视频说不要过多揣测](https://so.toutiao.com/search?keyword=张馨予晒度假视频说不要过多揣测)
1. [西藏日喀则将研究口岸功能恢复等事宜](https://so.toutiao.com/search?keyword=西藏日喀则将研究口岸功能恢复等事宜)
1. [教育部：扎扎实实为教师们做好三件事](https://so.toutiao.com/search?keyword=教育部：扎扎实实为教师们做好三件事)
1. [CHINA GT安全漏洞](https://so.toutiao.com/search?keyword=CHINA%20GT安全漏洞)
1. [专家：俄乌冲突核心问题仍难解](https://so.toutiao.com/search?keyword=专家：俄乌冲突核心问题仍难解)
1. [财政部将向中国太平注资70亿](https://so.toutiao.com/search?keyword=财政部将向中国太平注资70亿)
1. [工行农行拟分别募资1000亿和1600亿](https://so.toutiao.com/search?keyword=工行农行拟分别募资1000亿和1600亿)
1. [8家中央金融企业将共增资3600亿元](https://so.toutiao.com/search?keyword=8家中央金融企业将共增资3600亿元)
1. [葫芦娃爷爷奶奶看网友评论感动落泪](https://so.toutiao.com/search?keyword=葫芦娃爷爷奶奶看网友评论感动落泪)
1. [杨毅以为郑钦文输定了](https://so.toutiao.com/search?keyword=杨毅以为郑钦文输定了)
1. [网友锯开树干露出层层叠叠的巨大蜂巢](https://so.toutiao.com/search?keyword=网友锯开树干露出层层叠叠的巨大蜂巢)
1. [航拍江西遂川泥石流受灾一线](https://so.toutiao.com/search?keyword=航拍江西遂川泥石流受灾一线)
1. [肖战来看李宇春演唱会了](https://so.toutiao.com/search?keyword=肖战来看李宇春演唱会了)
1. [科技股调整结束了吗](https://so.toutiao.com/search?keyword=科技股调整结束了吗)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Sep 08 2026 00:27:18 GMT+0800 (China Standard Time) -->

1. [汤家凤呼吁取消英语主科地位](https://www.zhihu.com/search?q=%E6%B1%A4%E5%AE%B6%E5%87%A4%E5%91%BC%E5%90%81%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%E5%9C%B0%E4%BD%8D)
1. [江西孩子看演唱会后全家低保取消](https://www.zhihu.com/search?q=%E6%B1%9F%E8%A5%BF%E5%AD%A9%E5%AD%90%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%8E%E5%85%A8%E5%AE%B6%E4%BD%8E%E4%BF%9D%E5%8F%96%E6%B6%88)
1. [小米澎程N70发布](https://www.zhihu.com/search?q=%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN70%E5%8F%91%E5%B8%83)
1. [网传字节跳动员工开始战略怀孕](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E5%91%98%E5%B7%A5%E5%BC%80%E5%A7%8B%E6%88%98%E7%95%A5%E6%80%80%E5%AD%95)
1. [郭德纲歪曲篡改抗战歌曲被罚](https://www.zhihu.com/search?q=%E9%83%AD%E5%BE%B7%E7%BA%B2%E6%AD%AA%E6%9B%B2%E7%AF%A1%E6%94%B9%E6%8A%97%E6%88%98%E6%AD%8C%E6%9B%B2%E8%A2%AB%E7%BD%9A)
1. [赵一鸣承诺出现称重问题赔十倍](https://www.zhihu.com/search?q=%E8%B5%B5%E4%B8%80%E9%B8%A3%E6%89%BF%E8%AF%BA%E5%87%BA%E7%8E%B0%E7%A7%B0%E9%87%8D%E9%97%AE%E9%A2%98%E8%B5%94%E5%8D%81%E5%80%8D)
1. [武汉大学教授曾梦琪被举报](https://www.zhihu.com/search?q=%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E6%95%99%E6%8E%88%E6%9B%BE%E6%A2%A6%E7%90%AA%E8%A2%AB%E4%B8%BE%E6%8A%A5)
1. [武大通报教授被举报事件](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A4%A7%E9%80%9A%E6%8A%A5%E6%95%99%E6%8E%88%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%BA%8B%E4%BB%B6)
1. [多地严查赵一鸣、好想来等品牌](https://www.zhihu.com/search?q=%E5%A4%9A%E5%9C%B0%E4%B8%A5%E6%9F%A5%E8%B5%B5%E4%B8%80%E9%B8%A3%E3%80%81%E5%A5%BD%E6%83%B3%E6%9D%A5%E7%AD%89%E5%93%81%E7%89%8C)
1. [华为 9 月 7 日新品发布会](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%209%20%E6%9C%88%207%20%E6%97%A5%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E4%BC%9A)
1. [GPT-6 正式发布](https://www.zhihu.com/search?q=GPT-6%20%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [财政部将向中国人寿集团注资 350 亿元](https://www.zhihu.com/search?q=%E8%B4%A2%E6%94%BF%E9%83%A8%E5%B0%86%E5%90%91%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AF%BF%E9%9B%86%E5%9B%A2%E6%B3%A8%E8%B5%84%20350%20%E4%BA%BF%E5%85%83)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Sep 08 2026 00:30:00 GMT+0800 (China Standard Time) -->

1. [从贫困生喝咖啡疑被举报到看演唱会疑被取消低保，贫困户的「高消费」到底咋划定？为何相关话题讨论经久不衰？](https://www.zhihu.com/question/2080237961358963700)
1. [耐克将被移出标普 100 指数，市值五年累计缩水约 79%，耐克怎么了？](https://www.zhihu.com/question/2080244526510072600)
1. [小米澎程 N70 系列增程 SUV 发布，售价 20.99 万元起，怎样看待这一定价？竞争力有多强？](https://www.zhihu.com/question/2080397612411086300)
1. [河南一女子外出喝酒致3岁儿子反锁屋内身亡，被判过失致人死亡罪，如何从法律角度解读？类似悲剧能如何避免？](https://www.zhihu.com/question/2080049944279376000)
1. [如何评价华为 9 月 7 日全球直播的新品发布会？有哪些信息值得关注？](https://www.zhihu.com/question/2080237392129274400)
1. [吃播网红干饭莹莹去世年仅 24 岁，其曾称「反复吃，钾流失」，钾流失有多危险？哪些因素可能导致钾流失？](https://www.zhihu.com/question/2080369515049611800)
1. [如何看待全球最大纯电飞机Heart X1首飞27分钟电费仅用了5美元？电动客机能颠覆传统支线航空吗？](https://www.zhihu.com/question/2080085427713791200)
1. [媒体曝民宿从「一房难求」到房间空置，大量民宿经营者称入住率暴跌，为啥大家现在都不爱住民宿了？](https://www.zhihu.com/question/2079850291302765300)
1. [有没有一部公认的烂片，你觉得，其实它被严重低估了？](https://www.zhihu.com/question/2076564004877685800)
1. [怎么礼貌拒绝火车上情侣换座位?](https://www.zhihu.com/question/37088078)
1. [多款手机集体涨价，有经销商称本以为会迎来抢购潮，结果询价者寥寥无几，哪里出了问题？](https://www.zhihu.com/question/2078836573454459400)
1. [如何评价 9 月 7 日发布的小米澎程 SUV？](https://www.zhihu.com/question/2080231640031126500)
1. [大众汽车宣布行业有史以来最大规模重组，裁员10万、车型砍半、关停4厂，背后有哪些深层原因？](https://www.zhihu.com/question/2079147986958005000)
1. [iPhone Ultra 没有消除屏幕折痕，国行或 14999 元起，「折痕」难题究竟卡在哪里？](https://www.zhihu.com/question/2078837455386630100)
1. [贵中医二附院一医生被藏刀锦旗患者捅伤，致重伤在 ICU 抢救，这反映了当前医患关系的哪些问题？](https://www.zhihu.com/question/2079721065136251000)
1. [9 月 7 日至 12 日中国人民解放军陆军派出兵力赴俄罗斯参加实兵演习，有哪些信息值得关注？](https://www.zhihu.com/question/2079279942580418600)
1. [我国可谓是麻雀大国，问一只麻雀的寿命在两三年，那它们死的时候都死在哪里呢，我怎么从来没见过它们的尸体?](https://www.zhihu.com/question/40031505)
1. [语文课本里面的「全文背诵」，真有人能全部背下来吗？](https://www.zhihu.com/question/617183261)
1. [黄渤骑车摔成锁骨骨折，他提醒「不能三心二意」，骑行安全还有哪些值得注意？](https://www.zhihu.com/question/2078917387773072000)
1. [星宇股份就调岗减员错误道歉并发布公告，回看整场事件，应届生的哪些维权动作起到了关键作用？](https://www.zhihu.com/question/2080281820214423800)
1. [福建某小区禁止新能源车驶入地下车库，要求已停车辆 10 日内移出，这合理吗？如何从法律角度解读？](https://www.zhihu.com/question/2080185350484505600)
1. [如何评价《原神》7.1版本「往冥府的安魂歌」前瞻特别节目？](https://www.zhihu.com/question/2080268614255625500)
1. [如何评价综艺《喜剧之王单口季3》第十期总决赛？](https://www.zhihu.com/question/2079670908889969000)
1. [新世界地图要来了，采用平等地球投影法，非洲变得更大，美国投下唯一反对票，背后有着怎样的地缘与文化诉求？](https://www.zhihu.com/question/2079520295614953500)
1. [LPL2026赛季2026赛季季后赛AL 0:3 BLG，如何评价这场比赛？](https://www.zhihu.com/question/2080327611264275700)
1. [相关性很强，为什么仍不能说明因果关系？](https://www.zhihu.com/question/2076625813806569000)
1. [成年人战斗力明明胜于狼，为什么以前的人那么怕狼？](https://www.zhihu.com/question/2079603405459296500)
1. [如何评价王凯、周依然、欧豪主演的电视剧《交锋》？](https://www.zhihu.com/question/2079249867826619100)
1. [尤老娘为什么要带两个绝色女儿住到宁府，她是自私还是糊涂？](https://www.zhihu.com/question/2028571888465589500)
1. [为什么说不要跟孩子开玩笑、尤其孩子不懂的玩笑？](https://www.zhihu.com/question/624973337)

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
<!-- 最后更新时间 Tue Sep 08 2026 00:33:18 GMT+0800 (China Standard Time) -->

1. [书写中埃友好历史新篇](https://s.weibo.com//weibo?q=%23%E4%B9%A6%E5%86%99%E4%B8%AD%E5%9F%83%E5%8F%8B%E5%A5%BD%E5%8E%86%E5%8F%B2%E6%96%B0%E7%AF%87%23&Refer=new_time)
1. [郑钦文vs斯瓦泰克](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%23&t=31&band_rank=1&Refer=top)
1. [赵一鸣致歉](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%80%E9%B8%A3%E8%87%B4%E6%AD%89%23&t=31&band_rank=2&Refer=top)
1. [信息通信行业发展十五五规划要点](https://s.weibo.com//weibo?q=%23%E4%BF%A1%E6%81%AF%E9%80%9A%E4%BF%A1%E8%A1%8C%E4%B8%9A%E5%8F%91%E5%B1%95%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E8%A6%81%E7%82%B9%23&t=31&band_rank=3&Refer=top)
1. [张雅琪后继有人了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%90%8E%E7%BB%A7%E6%9C%89%E4%BA%BA%E4%BA%86%23&t=31&band_rank=4&Refer=top)
1. [余承东建议苹果用户买华为备用机](https://s.weibo.com//weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%BB%BA%E8%AE%AE%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%E4%B9%B0%E5%8D%8E%E4%B8%BA%E5%A4%87%E7%94%A8%E6%9C%BA%23&t=31&band_rank=5&Refer=top)
1. [雷军状态被赞夯爆了](https://s.weibo.com//weibo?q=%23%E9%9B%B7%E5%86%9B%E7%8A%B6%E6%80%81%E8%A2%AB%E8%B5%9E%E5%A4%AF%E7%88%86%E4%BA%86%23&t=31&band_rank=6&Refer=top)
1. [宝格丽高珠晚宴](https://s.weibo.com//weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E9%AB%98%E7%8F%A0%E6%99%9A%E5%AE%B4%23&t=31&band_rank=7&Refer=top)
1. [小米澎程N90售价](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%E5%94%AE%E4%BB%B7&t=31&band_rank=8&Refer=top)
1. [老九长文](https://s.weibo.com//weibo?q=%E8%80%81%E4%B9%9D%E9%95%BF%E6%96%87&t=31&band_rank=9&Refer=top)
1. [生逢其时 小巷人家](https://s.weibo.com//weibo?q=%E7%94%9F%E9%80%A2%E5%85%B6%E6%97%B6%20%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6&t=31&band_rank=10&Refer=top)
1. [偶像剧 软色情宣传](https://s.weibo.com//weibo?q=%E5%81%B6%E5%83%8F%E5%89%A7%20%E8%BD%AF%E8%89%B2%E6%83%85%E5%AE%A3%E4%BC%A0&t=31&band_rank=11&Refer=top)
1. [葫芦娃爷爷隔壁咖啡店遭大量差评](https://s.weibo.com//weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%E9%9A%94%E5%A3%81%E5%92%96%E5%95%A1%E5%BA%97%E9%81%AD%E5%A4%A7%E9%87%8F%E5%B7%AE%E8%AF%84%23&t=31&band_rank=12&Refer=top)
1. [杨洋 反正你也播不了](https://s.weibo.com//weibo?q=%E6%9D%A8%E6%B4%8B%20%E5%8F%8D%E6%AD%A3%E4%BD%A0%E4%B9%9F%E6%92%AD%E4%B8%8D%E4%BA%86&t=31&band_rank=13&Refer=top)
1. [刘亦菲脸比珠宝还闪](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%84%B8%E6%AF%94%E7%8F%A0%E5%AE%9D%E8%BF%98%E9%97%AA%23&t=31&band_rank=14&Refer=top)
1. [小米澎程](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B&t=31&band_rank=15&Refer=top)
1. [小米澎程N90探索版首发评测](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%E6%8E%A2%E7%B4%A2%E7%89%88%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B%23&t=31&band_rank=16&Refer=top)
1. [孙千演过王鹤棣版道明寺未婚妻](https://s.weibo.com//weibo?q=%E5%AD%99%E5%8D%83%E6%BC%94%E8%BF%87%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%89%88%E9%81%93%E6%98%8E%E5%AF%BA%E6%9C%AA%E5%A9%9A%E5%A6%BB&t=31&band_rank=17&Refer=top)
1. [性侵数十人博士生住处有K粉摇头丸](https://s.weibo.com//weibo?q=%23%E6%80%A7%E4%BE%B5%E6%95%B0%E5%8D%81%E4%BA%BA%E5%8D%9A%E5%A3%AB%E7%94%9F%E4%BD%8F%E5%A4%84%E6%9C%89K%E7%B2%89%E6%91%87%E5%A4%B4%E4%B8%B8%23&t=31&band_rank=18&Refer=top)
1. [用AI训练AI](https://s.weibo.com//weibo?q=%E7%94%A8AI%E8%AE%AD%E7%BB%83AI&t=31&band_rank=19&Refer=top)
1. [医生回应产妇未产检不知有两个婴儿](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E4%BA%A7%E5%A6%87%E6%9C%AA%E4%BA%A7%E6%A3%80%E4%B8%8D%E7%9F%A5%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%A9%B4%E5%84%BF%23&t=31&band_rank=20&Refer=top)
1. [卧底华中最大代孕机构地下手术室](https://s.weibo.com//weibo?q=%E5%8D%A7%E5%BA%95%E5%8D%8E%E4%B8%AD%E6%9C%80%E5%A4%A7%E4%BB%A3%E5%AD%95%E6%9C%BA%E6%9E%84%E5%9C%B0%E4%B8%8B%E6%89%8B%E6%9C%AF%E5%AE%A4&t=31&band_rank=21&Refer=top)
1. [女子称在餐厅被4岁男童摸臀监控曝光](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%9C%A8%E9%A4%90%E5%8E%85%E8%A2%AB4%E5%B2%81%E7%94%B7%E7%AB%A5%E6%91%B8%E8%87%80%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23&t=31&band_rank=22&Refer=top)
1. [王腾买了澎程N90Max](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%85%BE%E4%B9%B0%E4%BA%86%E6%BE%8E%E7%A8%8BN90Max%23&t=31&band_rank=23&Refer=top)
1. [寇振海儿子考上帝国理工学院](https://s.weibo.com//weibo?q=%23%E5%AF%87%E6%8C%AF%E6%B5%B7%E5%84%BF%E5%AD%90%E8%80%83%E4%B8%8A%E5%B8%9D%E5%9B%BD%E7%90%86%E5%B7%A5%E5%AD%A6%E9%99%A2%23&t=31&band_rank=24&Refer=top)
1. [天禄 老九](https://s.weibo.com//weibo?q=%E5%A4%A9%E7%A6%84%20%E8%80%81%E4%B9%9D&t=31&band_rank=25&Refer=top)
1. [曝井柏然刘雯结婚了](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E7%BB%93%E5%A9%9A%E4%BA%86%23&t=31&band_rank=26&Refer=top)
1. [干饭莹莹一场直播吃了70个皮蛋](https://s.weibo.com//weibo?q=%23%E5%B9%B2%E9%A5%AD%E8%8E%B9%E8%8E%B9%E4%B8%80%E5%9C%BA%E7%9B%B4%E6%92%AD%E5%90%83%E4%BA%8670%E4%B8%AA%E7%9A%AE%E8%9B%8B%23&t=31&band_rank=27&Refer=top)
1. [Hoya告别LPL](https://s.weibo.com//weibo?q=%23Hoya%E5%91%8A%E5%88%ABLPL%23&t=31&band_rank=28&Refer=top)
1. [小米澎程4分钟锁单突破10000台](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B4%E5%88%86%E9%92%9F%E9%94%81%E5%8D%95%E7%AA%81%E7%A0%B410000%E5%8F%B0%23&t=31&band_rank=29&Refer=top)
1. [华为再发布高性能芯片](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%86%8D%E5%8F%91%E5%B8%83%E9%AB%98%E6%80%A7%E8%83%BD%E8%8A%AF%E7%89%87%23&t=31&band_rank=30&Refer=top)
1. [小米澎程升降顶舱](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%8D%87%E9%99%8D%E9%A1%B6%E8%88%B1%23&t=31&band_rank=31&Refer=top)
1. [张家齐坦言感情没有很顺](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%9D%A6%E8%A8%80%E6%84%9F%E6%83%85%E6%B2%A1%E6%9C%89%E5%BE%88%E9%A1%BA%23&t=31&band_rank=32&Refer=top)
1. [吃播网红干饭莹莹去世年仅24岁](https://s.weibo.com//weibo?q=%23%E5%90%83%E6%92%AD%E7%BD%91%E7%BA%A2%E5%B9%B2%E9%A5%AD%E8%8E%B9%E8%8E%B9%E5%8E%BB%E4%B8%96%E5%B9%B4%E4%BB%8524%E5%B2%81%23&t=31&band_rank=33&Refer=top)
1. [贝克汉姆大儿子回应妻子身材](https://s.weibo.com//weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E5%A4%A7%E5%84%BF%E5%AD%90%E5%9B%9E%E5%BA%94%E5%A6%BB%E5%AD%90%E8%BA%AB%E6%9D%90%23&t=31&band_rank=34&Refer=top)
1. [哪个行业已经悄悄好起来了](https://s.weibo.com//weibo?q=%23%E5%93%AA%E4%B8%AA%E8%A1%8C%E4%B8%9A%E5%B7%B2%E7%BB%8F%E6%82%84%E6%82%84%E5%A5%BD%E8%B5%B7%E6%9D%A5%E4%BA%86%23&t=31&band_rank=35&Refer=top)
1. [吴迪](https://s.weibo.com//weibo?q=%E5%90%B4%E8%BF%AA&t=31&band_rank=36&Refer=top)
1. [刘浩存 上城士](https://s.weibo.com//weibo?q=%E5%88%98%E6%B5%A9%E5%AD%98%20%E4%B8%8A%E5%9F%8E%E5%A3%AB&t=31&band_rank=37&Refer=top)
1. [26岁女生把外卖当饭吃进ICU](https://s.weibo.com//weibo?q=%2326%E5%B2%81%E5%A5%B3%E7%94%9F%E6%8A%8A%E5%A4%96%E5%8D%96%E5%BD%93%E9%A5%AD%E5%90%83%E8%BF%9BICU%23&t=31&band_rank=38&Refer=top)
1. [为什么年轻人都不喜欢带机械表了](https://s.weibo.com//weibo?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E9%83%BD%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%B8%A6%E6%9C%BA%E6%A2%B0%E8%A1%A8%E4%BA%86&t=31&band_rank=39&Refer=top)
1. [王一博工作室把粉丝的话当文案](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%8A%8A%E7%B2%89%E4%B8%9D%E7%9A%84%E8%AF%9D%E5%BD%93%E6%96%87%E6%A1%88%23&t=31&band_rank=40&Refer=top)
1. [金晨着急谈恋爱](https://s.weibo.com//weibo?q=%23%E9%87%91%E6%99%A8%E7%9D%80%E6%80%A5%E8%B0%88%E6%81%8B%E7%88%B1%23&t=31&band_rank=41&Refer=top)
1. [Daeny力挺TheShy和Crisp](https://s.weibo.com//weibo?q=%23Daeny%E5%8A%9B%E6%8C%BATheShy%E5%92%8CCrisp%23&t=31&band_rank=42&Refer=top)
1. [任国超的第一部剧来了](https://s.weibo.com//weibo?q=%23%E4%BB%BB%E5%9B%BD%E8%B6%85%E7%9A%84%E7%AC%AC%E4%B8%80%E9%83%A8%E5%89%A7%E6%9D%A5%E4%BA%86%23&t=31&band_rank=43&Refer=top)
1. [王凯谈近几年接戏不多的原因](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%87%AF%E8%B0%88%E8%BF%91%E5%87%A0%E5%B9%B4%E6%8E%A5%E6%88%8F%E4%B8%8D%E5%A4%9A%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=44&Refer=top)
1. [迪拜父亲花300万为女儿买下白隼](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E6%8B%9C%E7%88%B6%E4%BA%B2%E8%8A%B1300%E4%B8%87%E4%B8%BA%E5%A5%B3%E5%84%BF%E4%B9%B0%E4%B8%8B%E7%99%BD%E9%9A%BC%23&t=31&band_rank=45&Refer=top)
1. [栾念尚之桃一家五口合照](https://s.weibo.com//weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E5%90%88%E7%85%A7%23&t=31&band_rank=46&Refer=top)
1. [郑钦文vs斯维亚泰克前瞻](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E6%96%AF%E7%BB%B4%E4%BA%9A%E6%B3%B0%E5%85%8B%E5%89%8D%E7%9E%BB%23&t=31&band_rank=47&Refer=top)
1. [4000枚比特币被盗](https://s.weibo.com//weibo?q=%234000%E6%9E%9A%E6%AF%94%E7%89%B9%E5%B8%81%E8%A2%AB%E7%9B%97%23&t=31&band_rank=48&Refer=top)
1. [小米发布会](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23&t=31&band_rank=49&Refer=top)
1. [惠英红为逼母亲吃饭把菜倒进垃圾桶](https://s.weibo.com//weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E4%B8%BA%E9%80%BC%E6%AF%8D%E4%BA%B2%E5%90%83%E9%A5%AD%E6%8A%8A%E8%8F%9C%E5%80%92%E8%BF%9B%E5%9E%83%E5%9C%BE%E6%A1%B6%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
