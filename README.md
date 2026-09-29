# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-29 23:54:33

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
<!-- 最后更新时间 Tue Sep 29 2026 17:00:04 GMT+0800 (China Standard Time) -->

1. [特朗普评中美会晤：满分10分我打12分](https://so.toutiao.com/search?keyword=特朗普评中美会晤：满分10分我打12分)
1. [华为Mate90系列搭载睿影Z10相机模组](https://so.toutiao.com/search?keyword=华为Mate90系列搭载睿影Z10相机模组)
1. [今年我国粮食丰收在望](https://so.toutiao.com/search?keyword=今年我国粮食丰收在望)
1. [邓亚萍：国乒女队要重点研究张本美和](https://so.toutiao.com/search?keyword=邓亚萍：国乒女队要重点研究张本美和)
1. [自摆乌龙！中国女足无缘决赛](https://so.toutiao.com/search?keyword=自摆乌龙！中国女足无缘决赛)
1. [业主拒缴物业费 法院判决来了](https://so.toutiao.com/search?keyword=业主拒缴物业费%20法院判决来了)
1. [张本智和看到妹妹输球仰天翻白眼](https://so.toutiao.com/search?keyword=张本智和看到妹妹输球仰天翻白眼)
1. [消费20万女子遭Tiffany限号 企业通报](https://so.toutiao.com/search?keyword=消费20万女子遭Tiffany限号%20企业通报)
1. [赵世通被免去国台办副主任职务](https://so.toutiao.com/search?keyword=赵世通被免去国台办副主任职务)
1. [暴雨积水是城市治理能力不足？谣言](https://so.toutiao.com/search?keyword=暴雨积水是城市治理能力不足？谣言)
1. [怀念刘欢：他为原创音乐留了一盏灯](https://so.toutiao.com/search?keyword=怀念刘欢：他为原创音乐留了一盏灯)
1. [A股反弹是止跌信号还是短暂修复](https://so.toutiao.com/search?keyword=A股反弹是止跌信号还是短暂修复)
1. [羽毛球选手吐槽亚运会要运动员的命](https://so.toutiao.com/search?keyword=羽毛球选手吐槽亚运会要运动员的命)
1. [胡歌带妻女出门被偶遇](https://so.toutiao.com/search?keyword=胡歌带妻女出门被偶遇)
1. [为什么越来越多人不愿交物业费了](https://so.toutiao.com/search?keyword=为什么越来越多人不愿交物业费了)
1. [乡村豪宅越来越多说明什么](https://so.toutiao.com/search?keyword=乡村豪宅越来越多说明什么)
1. [国庆长假A股股民该如何抉择](https://so.toutiao.com/search?keyword=国庆长假A股股民该如何抉择)
1. [王毅：日本若不汲取历史教训难有未来](https://so.toutiao.com/search?keyword=王毅：日本若不汲取历史教训难有未来)
1. [医生：40岁后一定要防猝死](https://so.toutiao.com/search?keyword=医生：40岁后一定要防猝死)
1. [大V：乌克兰恐难熬过今年冬季](https://so.toutiao.com/search?keyword=大V：乌克兰恐难熬过今年冬季)
1. [官方通报那英唱《弯弯的月亮》](https://so.toutiao.com/search?keyword=官方通报那英唱《弯弯的月亮》)
1. [罗永浩半个月遭遇6场舆论战](https://so.toutiao.com/search?keyword=罗永浩半个月遭遇6场舆论战)
1. [张本美和四项全输给中国队](https://so.toutiao.com/search?keyword=张本美和四项全输给中国队)
1. [安眠药开药新规](https://so.toutiao.com/search?keyword=安眠药开药新规)
1. [脑梗真的和洗澡有关吗](https://so.toutiao.com/search?keyword=脑梗真的和洗澡有关吗)
1. [日媒惊呼中国队出了怪物级天才](https://so.toutiao.com/search?keyword=日媒惊呼中国队出了怪物级天才)
1. [名嘴：菲若真敢硬闯黄岩岛那就试试看](https://so.toutiao.com/search?keyword=名嘴：菲若真敢硬闯黄岩岛那就试试看)
1. [厄尔尼诺助推全球极端天气频发](https://so.toutiao.com/search?keyword=厄尔尼诺助推全球极端天气频发)
1. [俄军10个月扩编4次释放何信号](https://so.toutiao.com/search?keyword=俄军10个月扩编4次释放何信号)
1. [农业农村部：加强规范管理宅基地](https://so.toutiao.com/search?keyword=农业农村部：加强规范管理宅基地)
1. [新华社评亚运乒坛群雄并起](https://so.toutiao.com/search?keyword=新华社评亚运乒坛群雄并起)
1. [石油封锁失灵后伊朗还剩几张牌](https://so.toutiao.com/search?keyword=石油封锁失灵后伊朗还剩几张牌)
1. [博主：内娱已进入《俺娘田小草》时代](https://so.toutiao.com/search?keyword=博主：内娱已进入《俺娘田小草》时代)
1. [林诗栋4-0王楚钦夺冠](https://so.toutiao.com/search?keyword=林诗栋4-0王楚钦夺冠)
1. [星舰完成第14次试飞意味什么](https://so.toutiao.com/search?keyword=星舰完成第14次试飞意味什么)
1. [俄称打击乌数据中心 乌称击退俄进攻](https://so.toutiao.com/search?keyword=俄称打击乌数据中心%20乌称击退俄进攻)
1. [日本经贸代表团访华有何意图](https://so.toutiao.com/search?keyword=日本经贸代表团访华有何意图)
1. [国羽女双无缘3连冠 圣坛组合亚运摘银](https://so.toutiao.com/search?keyword=国羽女双无缘3连冠%20圣坛组合亚运摘银)
1. [中方在黄岩岛周边演训释放何信号](https://so.toutiao.com/search?keyword=中方在黄岩岛周边演训释放何信号)
1. [媒体：胸前的国旗永远大于背后的姓名](https://so.toutiao.com/search?keyword=媒体：胸前的国旗永远大于背后的姓名)
1. [陈芋汐获亚运会跳水女子10米台金牌](https://so.toutiao.com/search?keyword=陈芋汐获亚运会跳水女子10米台金牌)
1. [券商：房价或在明年春节前后止跌回升](https://so.toutiao.com/search?keyword=券商：房价或在明年春节前后止跌回升)
1. [《无可替代》拿下全国收视第一](https://so.toutiao.com/search?keyword=《无可替代》拿下全国收视第一)
1. [亚运中国小孩哥小孩姐掀起青春风暴](https://so.toutiao.com/search?keyword=亚运中国小孩哥小孩姐掀起青春风暴)
1. [观潮季“新潮”涌动撬动多元消费](https://so.toutiao.com/search?keyword=观潮季“新潮”涌动撬动多元消费)
1. [韩国就涉朝战俘一事召见乌克兰外交官](https://so.toutiao.com/search?keyword=韩国就涉朝战俘一事召见乌克兰外交官)
1. [美联社：中国在亚运会持续占主导地位](https://so.toutiao.com/search?keyword=美联社：中国在亚运会持续占主导地位)
1. [杨紫一袭红衣亮相金鹰节](https://so.toutiao.com/search?keyword=杨紫一袭红衣亮相金鹰节)
1. [为什么日本既亲美又看不起亚洲](https://so.toutiao.com/search?keyword=为什么日本既亲美又看不起亚洲)
1. [接力夺冠姑娘们把国旗叠得方方正正](https://so.toutiao.com/search?keyword=接力夺冠姑娘们把国旗叠得方方正正)
1. [美中加强农业合作是双赢之举](https://so.toutiao.com/search?keyword=美中加强农业合作是双赢之举)
1. [日方官员称特朗普表态让日本不舒服](https://so.toutiao.com/search?keyword=日方官员称特朗普表态让日本不舒服)
1. [专家谈养老保险制度如何优化](https://so.toutiao.com/search?keyword=专家谈养老保险制度如何优化)
1. [陈妤颉说新老交替这个词不好听](https://so.toutiao.com/search?keyword=陈妤颉说新老交替这个词不好听)
1. [媒体：中国篮球病了病得很重](https://so.toutiao.com/search?keyword=媒体：中国篮球病了病得很重)
1. [12306辟谣后台发信息就能抢到票](https://so.toutiao.com/search?keyword=12306辟谣后台发信息就能抢到票)
1. [文旅局回应那英临时加唱弯弯的月亮](https://so.toutiao.com/search?keyword=文旅局回应那英临时加唱弯弯的月亮)
1. [亚运会中国队28日获13枚金牌](https://so.toutiao.com/search?keyword=亚运会中国队28日获13枚金牌)
1. [鲍师傅超长蛋挞被吐槽全是皮没蛋液](https://so.toutiao.com/search?keyword=鲍师傅超长蛋挞被吐槽全是皮没蛋液)
1. [新政后全国多个楼盘启动涨价](https://so.toutiao.com/search?keyword=新政后全国多个楼盘启动涨价)
1. [王楚钦下领奖台迅速摘掉银牌离场](https://so.toutiao.com/search?keyword=王楚钦下领奖台迅速摘掉银牌离场)
1. [民进党为何停止炒作蒋万安身世](https://so.toutiao.com/search?keyword=民进党为何停止炒作蒋万安身世)
1. [法国为何要向沙特派兵](https://so.toutiao.com/search?keyword=法国为何要向沙特派兵)
1. [对手穿错鞋中国队递补获金银牌](https://so.toutiao.com/search?keyword=对手穿错鞋中国队递补获金银牌)
1. [家人出现脑梗应该怎么办](https://so.toutiao.com/search?keyword=家人出现脑梗应该怎么办)
1. [电池越来越便宜 电车为何仍然修不起](https://so.toutiao.com/search?keyword=电池越来越便宜%20电车为何仍然修不起)
1. [10月1日起安眠药开药新规将实施](https://so.toutiao.com/search?keyword=10月1日起安眠药开药新规将实施)
1. [雄商高铁正式开通意味着什么](https://so.toutiao.com/search?keyword=雄商高铁正式开通意味着什么)
1. [中国队男女4×100米接力双双卫冕](https://so.toutiao.com/search?keyword=中国队男女4×100米接力双双卫冕)
1. [武契奇辞职后鞠躬感谢大批支持者](https://so.toutiao.com/search?keyword=武契奇辞职后鞠躬感谢大批支持者)
1. [美股三大指数集体收跌](https://so.toutiao.com/search?keyword=美股三大指数集体收跌)
1. [银行逆势加息 钱到底该放哪](https://so.toutiao.com/search?keyword=银行逆势加息%20钱到底该放哪)
1. [专家：菲欲借域外势力挑事打错算盘](https://so.toutiao.com/search?keyword=专家：菲欲借域外势力挑事打错算盘)
1. [标枪最强小孩姐距人类极限半步之遥](https://so.toutiao.com/search?keyword=标枪最强小孩姐距人类极限半步之遥)
1. [亚运搭台 青春作答](https://so.toutiao.com/search?keyword=亚运搭台%20青春作答)
1. [乌克兰移送朝鲜俘虏为何令韩国愤怒](https://so.toutiao.com/search?keyword=乌克兰移送朝鲜俘虏为何令韩国愤怒)
1. [俄计划2027年国防支出达17.1万亿卢布](https://so.toutiao.com/search?keyword=俄计划2027年国防支出达17.1万亿卢布)
1. [何猷君奚梦瑶在澳门办婚礼答谢宴](https://so.toutiao.com/search?keyword=何猷君奚梦瑶在澳门办婚礼答谢宴)
1. [邓亚萍预测至少要跟日本运动员打10年](https://so.toutiao.com/search?keyword=邓亚萍预测至少要跟日本运动员打10年)
1. [俄军扩编至244万余人](https://so.toutiao.com/search?keyword=俄军扩编至244万余人)
1. [伊朗最高领袖：伊朗已变得独立强大](https://so.toutiao.com/search?keyword=伊朗最高领袖：伊朗已变得独立强大)
1. [陈妤颉再添一金](https://so.toutiao.com/search?keyword=陈妤颉再添一金)
1. [这三天谁能有心思上班](https://so.toutiao.com/search?keyword=这三天谁能有心思上班)
1. [专家：AI产业进入后模型时代](https://so.toutiao.com/search?keyword=专家：AI产业进入后模型时代)
1. [吴艳妮领首枚亚运奖牌给自己竖大拇指](https://so.toutiao.com/search?keyword=吴艳妮领首枚亚运奖牌给自己竖大拇指)
1. [成方圆追忆刘欢：发微信再没等到回复](https://so.toutiao.com/search?keyword=成方圆追忆刘欢：发微信再没等到回复)
1. [国庆假期广东有冷空气来袭](https://so.toutiao.com/search?keyword=国庆假期广东有冷空气来袭)
1. [盛李豪晒四金总结亚运会](https://so.toutiao.com/search?keyword=盛李豪晒四金总结亚运会)
1. [贵州龙里一交通事故致7死](https://so.toutiao.com/search?keyword=贵州龙里一交通事故致7死)
1. [今年会是她们留给亚运会最后的身影吗](https://so.toutiao.com/search?keyword=今年会是她们留给亚运会最后的身影吗)
1. [李克勤帮唱歌手侯浪：骑着小黄车救场](https://so.toutiao.com/search?keyword=李克勤帮唱歌手侯浪：骑着小黄车救场)
1. [美债遭抛售为何美股还在坚挺](https://so.toutiao.com/search?keyword=美债遭抛售为何美股还在坚挺)
1. [中国年轻人为何改攒金豆](https://so.toutiao.com/search?keyword=中国年轻人为何改攒金豆)
1. [薛剑：日本在反华厌华方面获世界冠军](https://so.toutiao.com/search?keyword=薛剑：日本在反华厌华方面获世界冠军)
1. [林诗栋：没想到能4比0王楚钦](https://so.toutiao.com/search?keyword=林诗栋：没想到能4比0王楚钦)
1. [荣耀CEO听到新机销量笑到合不拢嘴](https://so.toutiao.com/search?keyword=荣耀CEO听到新机销量笑到合不拢嘴)
1. [媒体：刘欢去世中文歌坛真神落幕](https://so.toutiao.com/search?keyword=媒体：刘欢去世中文歌坛真神落幕)
1. [闫妮亮相金鹰节状态](https://so.toutiao.com/search?keyword=闫妮亮相金鹰节状态)
1. [罗永浩回应遭实名举报偷税漏税](https://so.toutiao.com/search?keyword=罗永浩回应遭实名举报偷税漏税)
1. [游本昌去世前两三天选择不吃不喝](https://so.toutiao.com/search?keyword=游本昌去世前两三天选择不吃不喝)
1. [为什么打仗了黄金不涨反跌](https://so.toutiao.com/search?keyword=为什么打仗了黄金不涨反跌)
1. [高盛警告：美股多数股票已在熊市](https://so.toutiao.com/search?keyword=高盛警告：美股多数股票已在熊市)
1. [王楚钦本届亚运三度遭遇横扫](https://so.toutiao.com/search?keyword=王楚钦本届亚运三度遭遇横扫)
1. [陈浩民追忆游本昌](https://so.toutiao.com/search?keyword=陈浩民追忆游本昌)
1. [武契奇总统任期最后一天深情祝福中国](https://so.toutiao.com/search?keyword=武契奇总统任期最后一天深情祝福中国)
1. [林诗栋上次单打夺冠还是2025年](https://so.toutiao.com/search?keyword=林诗栋上次单打夺冠还是2025年)
1. [越来越多欧洲消费者选择中国电动车](https://so.toutiao.com/search?keyword=越来越多欧洲消费者选择中国电动车)
1. [美获得格陵兰岛安全控制权有何影响](https://so.toutiao.com/search?keyword=美获得格陵兰岛安全控制权有何影响)
1. [8.59元香菜仅退款 卖家驱车千里取回](https://so.toutiao.com/search?keyword=8.59元香菜仅退款%20卖家驱车千里取回)
1. [河南小伙斩获世赛金牌的背后](https://so.toutiao.com/search?keyword=河南小伙斩获世赛金牌的背后)
1. [国乒亚运会6金收官](https://so.toutiao.com/search?keyword=国乒亚运会6金收官)
1. [美伊对峙七个月 双方博弈仍在持续](https://so.toutiao.com/search?keyword=美伊对峙七个月%20双方博弈仍在持续)
1. [中国为何将自美进口煤炭纳入降税框架](https://so.toutiao.com/search?keyword=中国为何将自美进口煤炭纳入降税框架)
1. [中国00后男护理夺得世赛金牌](https://so.toutiao.com/search?keyword=中国00后男护理夺得世赛金牌)
1. [上海出台楼市新政：规范预售条件](https://so.toutiao.com/search?keyword=上海出台楼市新政：规范预售条件)
1. [女双夺冠后侯英超连说6个棒](https://so.toutiao.com/search?keyword=女双夺冠后侯英超连说6个棒)
1. [国常会研究出台稳定房地产市场政策](https://so.toutiao.com/search?keyword=国常会研究出台稳定房地产市场政策)
1. [独自养一家七口被老板塞钱员工回应](https://so.toutiao.com/search?keyword=独自养一家七口被老板塞钱员工回应)
1. [王曼昱蒯曼4-0横扫日本组合夺冠](https://so.toutiao.com/search?keyword=王曼昱蒯曼4-0横扫日本组合夺冠)
1. [余承东称用行业最高标准打造享界V8](https://so.toutiao.com/search?keyword=余承东称用行业最高标准打造享界V8)
1. [崔培军：公司20多年来不打卡不考勤](https://so.toutiao.com/search?keyword=崔培军：公司20多年来不打卡不考勤)
1. [石雨豪获得亚运会男子跳远金牌](https://so.toutiao.com/search?keyword=石雨豪获得亚运会男子跳远金牌)
1. [莎拉·布莱曼发文悼念刘欢](https://so.toutiao.com/search?keyword=莎拉·布莱曼发文悼念刘欢)
1. [入围金鹰奖女配角的她们送假期祝福](https://so.toutiao.com/search?keyword=入围金鹰奖女配角的她们送假期祝福)
1. [媒体：喜看中国田径青春风暴](https://so.toutiao.com/search?keyword=媒体：喜看中国田径青春风暴)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Sep 29 2026 23:45:35 GMT+0800 (China Standard Time) -->

1. [武契奇宣布辞职](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A5%91%E5%A5%87%E5%AE%A3%E5%B8%83%E8%BE%9E%E8%81%8C)
1. [杜淳妻子王灿被骗灌肠](https://www.zhihu.com/search?q=%E6%9D%9C%E6%B7%B3%E5%A6%BB%E5%AD%90%E7%8E%8B%E7%81%BF%E8%A2%AB%E9%AA%97%E7%81%8C%E8%82%A0)
1. [林诗栋 4-0 王楚钦夺金](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B%204-0%20%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E9%87%91)
1. [居民房贷贴息政策 10 月 1 日起实施](https://www.zhihu.com/search?q=%E5%B1%85%E6%B0%91%E6%88%BF%E8%B4%B7%E8%B4%B4%E6%81%AF%E6%94%BF%E7%AD%96%2010%20%E6%9C%88%201%20%E6%97%A5%E8%B5%B7%E5%AE%9E%E6%96%BD)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [金鹰奖](https://www.zhihu.com/search?q=%E9%87%91%E9%B9%B0%E5%A5%96)
1. [刘欢到退休时仍是副教授](https://www.zhihu.com/search?q=%E5%88%98%E6%AC%A2%E5%88%B0%E9%80%80%E4%BC%91%E6%97%B6%E4%BB%8D%E6%98%AF%E5%89%AF%E6%95%99%E6%8E%88)
1. [张家齐妈妈公开念家书批评女儿](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E5%85%AC%E5%BC%80%E5%BF%B5%E5%AE%B6%E4%B9%A6%E6%89%B9%E8%AF%84%E5%A5%B3%E5%84%BF)
1. [张家齐妈妈聊天记录 窒息](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%20%E7%AA%92%E6%81%AF)
1. [王楚钦：不知道为什么就是感觉累](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%EF%BC%9A%E4%B8%8D%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B0%B1%E6%98%AF%E6%84%9F%E8%A7%89%E7%B4%AF)
1. [郑刚实名举报罗永浩偷税漏税](https://www.zhihu.com/search?q=%E9%83%91%E5%88%9A%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E)
1. [中美300亿对300亿对等降税框架](https://www.zhihu.com/search?q=%E4%B8%AD%E7%BE%8E300%E4%BA%BF%E5%AF%B9300%E4%BA%BF%E5%AF%B9%E7%AD%89%E9%99%8D%E7%A8%8E%E6%A1%86%E6%9E%B6)
1. [Tiffany 中国区负责人致歉](https://www.zhihu.com/search?q=Tiffany%20%E4%B8%AD%E5%9B%BD%E5%8C%BA%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%87%B4%E6%AD%89)
1. [林诗栋颁奖现场被喊「打一单」](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B%E9%A2%81%E5%A5%96%E7%8E%B0%E5%9C%BA%E8%A2%AB%E5%96%8A%E3%80%8C%E6%89%93%E4%B8%80%E5%8D%95%E3%80%8D)
1. [AMD收购李飞飞的WorldLabs](https://www.zhihu.com/search?q=AMD%E6%94%B6%E8%B4%AD%E6%9D%8E%E9%A3%9E%E9%A3%9E%E7%9A%84WorldLabs)
1. [中美达成八点成果共识](https://www.zhihu.com/search?q=%E4%B8%AD%E7%BE%8E%E8%BE%BE%E6%88%90%E5%85%AB%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86)
1. [Claude Sonnet 5.5发布](https://www.zhihu.com/search?q=Claude%20Sonnet%205.5%E5%8F%91%E5%B8%83)
1. [拾荒老人不知自己每月养老金 3700 元](https://www.zhihu.com/search?q=%E6%8B%BE%E8%8D%92%E8%80%81%E4%BA%BA%E4%B8%8D%E7%9F%A5%E8%87%AA%E5%B7%B1%E6%AF%8F%E6%9C%88%E5%85%BB%E8%80%81%E9%87%91%203700%20%E5%85%83)
1. [王曼昱战胜孙颖莎夺冠](https://www.zhihu.com/search?q=%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%88%98%E8%83%9C%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%BA%E5%86%A0)
1. [刘欢病逝](https://www.zhihu.com/search?q=%E5%88%98%E6%AC%A2%E7%97%85%E9%80%9D)
1. [日乒男单全军覆没](https://www.zhihu.com/search?q=%E6%97%A5%E4%B9%92%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1)
1. [王楚钦4比1阿拉米扬](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A64%E6%AF%941%E9%98%BF%E6%8B%89%E7%B1%B3%E6%89%AC)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Sep 29 2026 23:54:33 GMT+0800 (China Standard Time) -->

1. [居民房贷贴息政策10月1日起实施，年化贴息1%、最长补贴5年，限定房价150万以内，哪些信息值得关注？](https://www.zhihu.com/question/2088328834617811200)
1. [陕西醉驾碾压教师并拖行5.9公里致死案提级审理，罪名变更为故意杀人，法律上如何分析？](https://www.zhihu.com/question/2088119863676089000)
1. [深蓝董事长称车载冰箱使用率 5%，娱乐屏全年使用不足10次，这些配置真的鸡肋吗？那为啥行业在狂卷配置？](https://www.zhihu.com/question/2087587655189881300)
1. [如何看待 AMD 收购李飞飞创立的World Labs，李飞飞将任AMD执行副总裁兼首席科学家？](https://www.zhihu.com/question/2088185975017153500)
1. [媒体追问那英临时加唱是否罚款引热议，「举报式采访」为啥引发争议？媒体这样报道合理吗？](https://www.zhihu.com/question/2088304193140252700)
1. [2 岁娃疑似连吃 8 个月银鳕鱼汞中毒，生产商回应深海野生银鳕天然存在微量汞，儿童食用银鳕鱼安全吗？](https://www.zhihu.com/question/2088189824180266200)
1. [国乒亚运会参加7项，拿下6金4银，仅男团未能夺金，如何评价本届亚运会国乒战绩？](https://www.zhihu.com/question/2088001437158720300)
1. [亚运会男女混4×100米接力决赛，中国队以40秒78夺金，拿下该项目亚运会历史首金，如何评价这场比赛？](https://www.zhihu.com/question/2088247556220400600)
1. [为什么河虾的价格比明虾高那么多？](https://www.zhihu.com/question/3827459284)
1. [怎么看媒体曝 Anthropic 提交 IPO 招股书，25年营收增长12倍，净亏损420亿美元？](https://www.zhihu.com/question/2088194648518947800)
1. [东京奥运前夕，张家齐母亲写了一封满是训诫内容的家书，但教练没有把家书给张家齐，怎样看待教练的做法？](https://www.zhihu.com/question/2087956519622898700)
1. [8.59 元香菜遭「仅退款」，商家驱车千里跨省讨回，如何评价？电商商家维权成本这么高，症结在哪？](https://www.zhihu.com/question/2087999455794566700)
1. [曾风靡全国的五笔为什么逐渐被拼音输入法取代了？](https://www.zhihu.com/question/561899452)
1. [假如我在GPT3.5发布的第三天立刻上线性能对标DeepSeekV4.1的模型会怎么样？](https://www.zhihu.com/question/2086464412991371300)
1. [如何让一个中学生看懂拉格朗日力学？](https://www.zhihu.com/question/462287813)
1. [手机内置广告一直被骂，为什么没有一个厂商出一款纯净无广告的手机，是给的太多了吗？](https://www.zhihu.com/question/2086472782729196800)
1. [排骨炖土豆和排骨炖玉米你喜欢哪个？](https://www.zhihu.com/question/1919453015628317400)
1. [地球上的所有动物都没有穿衣服，还不是活得好好的，为什么只有我们人类才穿衣服，难道不穿衣服就活不了吗？](https://www.zhihu.com/question/2082064671708922600)
1. [到底是薪资决定了态度，还是态度决定了薪资？](https://www.zhihu.com/question/8552961869)
1. [华为 Mate90 系列旗舰定档 10 月 1 日发售，有哪些亮点值得关注？](https://www.zhihu.com/question/2088199945174177300)
1. [有运动员称亚运金牌有「瑕疵」，边缘区域存在色差，组委会连夜更换，为什么会这样？可能是哪些环节出现问题？](https://www.zhihu.com/question/2087090532799308500)
1. [很多人吐槽月饼又甜又腻不好吃，你有同感吗？如果有机会，你会怎么改良/DIY月饼的做法/口味？](https://www.zhihu.com/question/2082963646145983500)
1. [童话故事《手捧空花盆的孩子》国王给每个孩子发了熟的种子，为了验证孩子的诚实，他却用了谎言，怎么解释？](https://www.zhihu.com/question/40312940)
1. [如何评价荣耀Magic9系列起售价 4499 元，在今年集体涨价的大环境下，这个含金量有多高？](https://www.zhihu.com/question/2087863658260984800)
1. [被没练过的普通人拳击一下跟肘击一下哪个伤害更大？](https://www.zhihu.com/question/1997633932955515000)
1. [在和家的朝夕相处中，你对「怎么住更好」这件事有了哪些新的理解或答案？](https://www.zhihu.com/question/2085780301519610400)
1. [格斗家为什么不用鞭锏锤来捶打自己，增加身体的抗击打能力？](https://www.zhihu.com/question/650263507)
1. [一天之计在于晨。你是怎么吃好早餐的？](https://www.zhihu.com/question/2077644474025621200)
1. [世界各国各地区的议会（尤其是两院制的上议院）都有哪些奇特的规定？](https://www.zhihu.com/question/2087187150710256000)
1. [现实中的天才是一种怎样的存在？](https://www.zhihu.com/question/268607001)
1. [从本届亚运会来看，林诗栋夺得 3 金 1 银要成为国乒一哥了吗？](https://www.zhihu.com/question/2087997878270523100)
1. [多地贷款中介集体解散群聊、删除朋友圈，背后原因是什么？会带来哪些影响？](https://www.zhihu.com/question/2087614254006400800)
1. [如何看待联合国专家预测未来七年内全球性战争风险急速攀升？](https://www.zhihu.com/question/2087076854901499400)
1. [网友称Tiffany销售承诺送月饼后将其寄错给他人，吐槽后账号被举报，相关负责人致歉，具体怎么回事？](https://www.zhihu.com/question/2088040289751361300)
1. [为什么摩托车永远成不了主流交通工具？](https://www.zhihu.com/question/2087307863853097200)
1. [怎么看待超长蛋挞的爆红？](https://www.zhihu.com/question/2085307820598105600)
1. [网友吐槽「毫无人性关怀的大厂却总致力于打造出充满人性光辉的产品」，你怎么看待这个观点？](https://www.zhihu.com/question/2087300723268481300)
1. [怎样看待王楚钦称不知道为什么就是感觉累，找不太到之前打球的感觉？他要怎样才能找回之前的状态？](https://www.zhihu.com/question/2088009996894038000)
1. [如何看待我的世界（minecraft）加入了最新的第四个维度 the SIFT？](https://www.zhihu.com/question/2087522332306838300)
1. [如何评价刘欢《从头再来》这首歌？](https://www.zhihu.com/question/2087220367001645600)
1. [旅途中，有哪些古建筑真正配得上「叹为观止」四个字？](https://www.zhihu.com/question/658208644)
1. [广东清远试点免中考，十二年贯通小中高，贯通培育面临着哪些挑战？你认为这一政策值得推广吗？](https://www.zhihu.com/question/2088192687509692700)
1. [现在AI演员的表演能力越来越强，以后是不是都变成了AI演员来演戏了？](https://www.zhihu.com/question/2082774023272919600)
1. [锤子科技前投资人郑刚实名举报罗永浩偷税漏税，罗永浩指其诬告，具体是什么情况？他俩有啥恩怨？](https://www.zhihu.com/question/2087817719617774800)
1. [天山深处崛起「世界最高坝」大石峡水利枢纽，为什么要在干旱缺水的新疆戈壁中截流造个大水库？建起来有多难？](https://www.zhihu.com/question/2086454660316112600)
1. [中国U23男足在时隔28年重返亚运四强后，究竟能否跨越韩国队这座“大山”，真正实现历史性的突破？](https://www.zhihu.com/question/2088197045509215200)
1. [黑胡子导弹是高超音速导弹吗？](https://www.zhihu.com/question/2088055678023758300)
1. [如何看待国羽教练李矛的这段采访谈国家队训练「3000米×6，间隔休息2分钟……真这么干要死人的」？](https://www.zhihu.com/question/2087961937862550300)
1. [如何评价 9 月 28 日发布的Claude Sonnet 5.5？](https://www.zhihu.com/question/2088116998165226000)
1. [一汽大众巨型爆米花机实验，160℃高温+50圈翻滚双重极限测试，是否重新定义了家用纯电车的安全底线？](https://www.zhihu.com/question/2088212579529265700)
1. [2026亚运会乒乓球男单决赛，林诗栋 4-0 王楚钦夺得金牌，如何评价本场比赛？](https://www.zhihu.com/question/2087911809458102800)
1. [印、美联合团队研究称「混凝土中掺入人粪，抗折强度提高 42%」，如何理解该研究的理论和现实意义？](https://www.zhihu.com/question/2087853929207787800)
1. [杭州女子每月花3000元跨省2小时去上海上班，称「算了笔账总体是划算的」，真划算吗？怎样看待她的选择？](https://www.zhihu.com/question/2087928868850112300)
1. [为什么父母总爱说「我都是为了你好」，但我们这代人却最害怕听到这句话？](https://www.zhihu.com/question/2074084739418477000)
1. [曝携程推新规鼓励「无理由事假」，员工休1天无理由事假，团队得600元团建经费，如何看待这种激励方式？](https://www.zhihu.com/question/2087911286118019800)
1. [为什么日式料理中会大量使用酱油和味噌？](https://www.zhihu.com/question/13079900270)
1. [中国男子、女子百米接力双双夺得亚运会金牌，怎样评价这两场比赛？](https://www.zhihu.com/question/2088023546408563200)
1. [哆啦A梦明明拥有无数逆天道具，却似乎没怎么改变大雄的人生，创作者想表达什么？](https://www.zhihu.com/question/2053048540797130500)
1. [如何看待常德一老人因误解养老金政策拾荒 21 年，最终领到 42 万养老金？暴露了背后哪些问题？](https://www.zhihu.com/question/2087842325703520500)
1. [要检查孩子作业，孩子回应「老师要求做完，又没要求做对」来回避检查作业，怎么纠正孩子更好呢？](https://www.zhihu.com/question/1893232431370310000)
1. [林雨薇长文告别国家队，称伤病缠身，赛前「领导劝不必硬拼」，此后将赴福州大学教书，对此你怎么看？](https://www.zhihu.com/question/2087855251550200000)
1. [面对「过紧日子」的要求，大学预算中哪些开支「该紧」，哪些「不该紧」？](https://www.zhihu.com/question/2084700478647039700)
1. [真实历史上的瞎子阿炳是怎样的人？](https://www.zhihu.com/question/497250165)
1. [《复联 4》重映全球首周票房斩获 8600 万美元，为何还能展现出如此强的号召力？](https://www.zhihu.com/question/2087746333335615200)
1. [为啥现在有些人道德水平不高、守法意识薄弱，维权意识却很强烈？](https://www.zhihu.com/question/2087579690596656000)
1. [如何评价《新大头儿子》系列电影被网友吐槽画风诡异、大头儿子像「鬼火少年」？](https://www.zhihu.com/question/2087565298354189600)
1. [我觉得乾隆的字挺好看呀，为什么在书法界评价很低？](https://www.zhihu.com/question/2085453188900168400)
1. [网上都说计算机炸了，为什么现实中一堆转专业到计算机的？](https://www.zhihu.com/question/2075577882076885000)
1. [为什么厂家不把预制菜直接卖给c端用户？省得我叫外卖了?](https://www.zhihu.com/question/1952882788639417900)
1. [王楚钦本届亚运会一金未拿，怎样评价他的状态？打法上可能有哪些问题？](https://www.zhihu.com/question/2087999745213949000)
1. [体育总局局长表示，亚运会部分传统优势项目遇到挑战，成绩不及预期，可能有哪些原因？](https://www.zhihu.com/question/2087828556701241300)
1. [双汇火腿肠销量连续下滑，传统火腿肠为何越来越卖不动？方便面触底反弹，火腿肠却持续下滑，问题出在哪里？](https://www.zhihu.com/question/2087819360249144000)
1. [怎么看 OpenAI 的 Pro 订阅取消 5x 和 20x 的描述？](https://www.zhihu.com/question/2087607174948186000)
1. [沙漠烈日下，用电视播放绿洲画面，能吸引到骆驼吗？](https://www.zhihu.com/question/2087525916880664000)
1. [有网友在雷军评论区下呼吁小米 18 系列推出无防窥版，防窥屏真的很影响体验吗？有啥解决的办法吗？](https://www.zhihu.com/question/2087641499965940200)
1. [亚运会乒乓球女双决赛，王曼昱/蒯曼 4-0 战胜张本美和/早田希娜夺得金牌，如何评价本场比赛？](https://www.zhihu.com/question/2087912811338920000)
1. [如何评价2026年9月米哈游《原神》7.1版本，冰神冰之女皇戏份？](https://www.zhihu.com/question/2086242322979805000)
1. [袁绍三个儿子中谁的能力最突出？能在他死后守住袁家霸业？](https://www.zhihu.com/question/1987412291256332500)
1. [如何评价吴艳妮夺铜后发言「起跑慢因三年前的阴影，我没有被挫折和网暴打败」？](https://www.zhihu.com/question/2087849328337318100)
1. [亚奥理事会回应「电子竞技项目将退出亚运会」，称传闻与工作安排不符，具体是怎么回事？](https://www.zhihu.com/question/2087805520950158600)
1. [火影忍者中的五大国分别对应了哪五个国家？](https://www.zhihu.com/question/36189325)
1. [我国南疆塔克拉玛干沙漠发现两处大型地下水水源，这意味着什么？将对当地生态和经济带来哪些影响？](https://www.zhihu.com/question/2083110699207808800)
1. [可以详细说下从GPT-1到GPT-4，有哪些变化，是如何发展的？](https://www.zhihu.com/question/618248545)
1. [斯内普那么爱莉莉，为什么输给了詹姆？](https://www.zhihu.com/question/359390507)
1. [似乎不少日式西幻作品会设定在遥远的东方有大和的，为什么中式西幻作品却很少有设定在东方有中国的？](https://www.zhihu.com/question/2085346903768749600)
1. [一个人开车跑高速犯困了，除了喝红牛和掐大腿，还有什么真正有效的提神方法？](https://www.zhihu.com/question/2084653683766191600)
1. [中美「300亿对300亿」对等降税框架公布，超90%产品将享受最惠国关税待遇，将带来哪些利好？](https://www.zhihu.com/question/2087868581669070000)
1. [作为父母，如果孩子的理想很平凡，你会尊重孩子吗？](https://www.zhihu.com/question/2082179870243676400)
1. [自己做饭是为了省钱还是健康？](https://www.zhihu.com/question/1999815894617061000)

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
<!-- 最后更新时间 Wed Sep 30 2026 00:00:15 GMT+0800 (China Standard Time) -->

1. [英魂不朽山河永念](https://s.weibo.com//weibo?q=%23%E8%8B%B1%E9%AD%82%E4%B8%8D%E6%9C%BD%E5%B1%B1%E6%B2%B3%E6%B0%B8%E5%BF%B5%23&Refer=new_time)
1. [金鹰奖获奖名单](https://s.weibo.com//weibo?q=%E9%87%91%E9%B9%B0%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95&t=31&band_rank=1&Refer=top)
1. [芒果的策划又封神了](https://s.weibo.com//weibo?q=%E8%8A%92%E6%9E%9C%E7%9A%84%E7%AD%96%E5%88%92%E5%8F%88%E5%B0%81%E7%A5%9E%E4%BA%86&t=31&band_rank=2&Refer=top)
1. [遵义三日](https://s.weibo.com//weibo?q=%23%E9%81%B5%E4%B9%89%E4%B8%89%E6%97%A5%23&t=31&band_rank=3&Refer=top)
1. [购房贴息 150万](https://s.weibo.com//weibo?q=%E8%B4%AD%E6%88%BF%E8%B4%B4%E6%81%AF%20150%E4%B8%87&t=31&band_rank=4&Refer=top)
1. [陈梦福原爱第4次交手](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%A2%A6%E7%A6%8F%E5%8E%9F%E7%88%B1%E7%AC%AC4%E6%AC%A1%E4%BA%A4%E6%89%8B%23&t=31&band_rank=5&Refer=top)
1. [泰国洪灾后大量蛇和鳄鱼出没](https://s.weibo.com//weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B4%AA%E7%81%BE%E5%90%8E%E5%A4%A7%E9%87%8F%E8%9B%87%E5%92%8C%E9%B3%84%E9%B1%BC%E5%87%BA%E6%B2%A1%23&t=31&band_rank=6&Refer=top)
1. [家有儿女小雪刘星合体](https://s.weibo.com//weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E5%B0%8F%E9%9B%AA%E5%88%98%E6%98%9F%E5%90%88%E4%BD%93%23&t=31&band_rank=7&Refer=top)
1. [孙怡平遥影后](https://s.weibo.com//weibo?q=%23%E5%AD%99%E6%80%A1%E5%B9%B3%E9%81%A5%E5%BD%B1%E5%90%8E%23&t=31&band_rank=8&Refer=top)
1. [陈妤颉极限反超](https://s.weibo.com//weibo?q=%E9%99%88%E5%A6%A4%E9%A2%89%E6%9E%81%E9%99%90%E5%8F%8D%E8%B6%85&t=31&band_rank=9&Refer=top)
1. [陈梦看亚运会感叹球速快](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%A2%A6%E7%9C%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%84%9F%E5%8F%B9%E7%90%83%E9%80%9F%E5%BF%AB%23&t=31&band_rank=10&Refer=top)
1. [赵丽颖身体到底怎么了](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%BA%AB%E4%BD%93%E5%88%B0%E5%BA%95%E6%80%8E%E4%B9%88%E4%BA%86%23&t=31&band_rank=11&Refer=top)
1. [刘学义不认识杨迪何炅](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E4%B8%8D%E8%AE%A4%E8%AF%86%E6%9D%A8%E8%BF%AA%E4%BD%95%E7%82%85%23&t=31&band_rank=12&Refer=top)
1. [胡歌闫妮别闹了](https://s.weibo.com//weibo?q=%E8%83%A1%E6%AD%8C%E9%97%AB%E5%A6%AE%E5%88%AB%E9%97%B9%E4%BA%86&t=31&band_rank=13&Refer=top)
1. [张家齐妈妈说不能和男孩子开玩笑](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%AF%B4%E4%B8%8D%E8%83%BD%E5%92%8C%E7%94%B7%E5%AD%A9%E5%AD%90%E5%BC%80%E7%8E%A9%E7%AC%91%23&t=31&band_rank=14&Refer=top)
1. [心动9 脚底板](https://s.weibo.com//weibo?q=%E5%BF%83%E5%8A%A89%20%E8%84%9A%E5%BA%95%E6%9D%BF&t=31&band_rank=15&Refer=top)
1. [陈妤颉回应混合接力夺冠](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%E5%9B%9E%E5%BA%94%E6%B7%B7%E5%90%88%E6%8E%A5%E5%8A%9B%E5%A4%BA%E5%86%A0%23&t=31&band_rank=16&Refer=top)
1. [飞天奖](https://s.weibo.com//weibo?q=%E9%A3%9E%E5%A4%A9%E5%A5%96&t=31&band_rank=17&Refer=top)
1. [小巷人家 陪跑](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%20%E9%99%AA%E8%B7%91&t=31&band_rank=18&Refer=top)
1. [Dior春夏大秀万物生长](https://s.weibo.com//weibo?q=%23Dior%E6%98%A5%E5%A4%8F%E5%A4%A7%E7%A7%80%E4%B8%87%E7%89%A9%E7%94%9F%E9%95%BF%23&t=31&band_rank=19&Refer=top)
1. [王传福被选为比亚迪董事会董事长](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BC%A0%E7%A6%8F%E8%A2%AB%E9%80%89%E4%B8%BA%E6%AF%94%E4%BA%9A%E8%BF%AA%E8%91%A3%E4%BA%8B%E4%BC%9A%E8%91%A3%E4%BA%8B%E9%95%BF%23&t=31&band_rank=20&Refer=top)
1. [时代峰峻跨代卡包](https://s.weibo.com//weibo?q=%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%B7%A8%E4%BB%A3%E5%8D%A1%E5%8C%85&t=31&band_rank=21&Refer=top)
1. [王鹤棣不吃压力回应](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%E5%9B%9E%E5%BA%94%23&t=31&band_rank=22&Refer=top)
1. [何炅点名](https://s.weibo.com//weibo?q=%E4%BD%95%E7%82%85%E7%82%B9%E5%90%8D&t=31&band_rank=23&Refer=top)
1. [宋佳金鹰视后](https://s.weibo.com//weibo?q=%23%E5%AE%8B%E4%BD%B3%E9%87%91%E9%B9%B0%E8%A7%86%E5%90%8E%23&t=31&band_rank=24&Refer=top)
1. [男子每天喂鱼把鱼饿死发现鱼粮被拦](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E6%AF%8F%E5%A4%A9%E5%96%82%E9%B1%BC%E6%8A%8A%E9%B1%BC%E9%A5%BF%E6%AD%BB%E5%8F%91%E7%8E%B0%E9%B1%BC%E7%B2%AE%E8%A2%AB%E6%8B%A6%23&t=31&band_rank=25&Refer=top)
1. [Dior大秀](https://s.weibo.com//weibo?q=Dior%E5%A4%A7%E7%A7%80&t=31&band_rank=26&Refer=top)
1. [穆祉丞](https://s.weibo.com//weibo?q=%E7%A9%86%E7%A5%89%E4%B8%9E&t=31&band_rank=27&Refer=top)
1. [金价下跌30岁左右年轻人成消费主力](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C30%E5%B2%81%E5%B7%A6%E5%8F%B3%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%88%90%E6%B6%88%E8%B4%B9%E4%B8%BB%E5%8A%9B%23&t=31&band_rank=28&Refer=top)
1. [破坏夫妻关系最大的杀手](https://s.weibo.com//weibo?q=%E7%A0%B4%E5%9D%8F%E5%A4%AB%E5%A6%BB%E5%85%B3%E7%B3%BB%E6%9C%80%E5%A4%A7%E7%9A%84%E6%9D%80%E6%89%8B&t=31&band_rank=29&Refer=top)
1. [狗熊哆嗦毛示范者是前文旅部司长](https://s.weibo.com//weibo?q=%23%E7%8B%97%E7%86%8A%E5%93%86%E5%97%A6%E6%AF%9B%E7%A4%BA%E8%8C%83%E8%80%85%E6%98%AF%E5%89%8D%E6%96%87%E6%97%85%E9%83%A8%E5%8F%B8%E9%95%BF%23&t=31&band_rank=30&Refer=top)
1. [生命树金鹰奖最佳电视剧](https://s.weibo.com//weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B5%E8%A7%86%E5%89%A7%23&t=31&band_rank=31&Refer=top)
1. [生万物](https://s.weibo.com//weibo?q=%E7%94%9F%E4%B8%87%E7%89%A9&t=31&band_rank=32&Refer=top)
1. [网传大学生替缺课老师讲课一小时](https://s.weibo.com//weibo?q=%E7%BD%91%E4%BC%A0%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%9B%BF%E7%BC%BA%E8%AF%BE%E8%80%81%E5%B8%88%E8%AE%B2%E8%AF%BE%E4%B8%80%E5%B0%8F%E6%97%B6&t=31&band_rank=33&Refer=top)
1. [蒋欣 可惜](https://s.weibo.com//weibo?q=%E8%92%8B%E6%AC%A3%20%E5%8F%AF%E6%83%9C&t=31&band_rank=34&Refer=top)
1. [宋佳二封三大奖](https://s.weibo.com//weibo?q=%E5%AE%8B%E4%BD%B3%E4%BA%8C%E5%B0%81%E4%B8%89%E5%A4%A7%E5%A5%96&t=31&band_rank=35&Refer=top)
1. [国庆节的前一天是烈士纪念日](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E5%BA%86%E8%8A%82%E7%9A%84%E5%89%8D%E4%B8%80%E5%A4%A9%E6%98%AF%E7%83%88%E5%A3%AB%E7%BA%AA%E5%BF%B5%E6%97%A5%23&t=31&band_rank=36&Refer=top)
1. [迪丽热巴看秀扇扇子这一下](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9C%8B%E7%A7%80%E6%89%87%E6%89%87%E5%AD%90%E8%BF%99%E4%B8%80%E4%B8%8B%23&t=31&band_rank=37&Refer=top)
1. [华晨宇被拽](https://s.weibo.com//weibo?q=%E5%8D%8E%E6%99%A8%E5%AE%87%E8%A2%AB%E6%8B%BD&t=31&band_rank=38&Refer=top)
1. [全红婵伤病](https://s.weibo.com//weibo?q=%E5%85%A8%E7%BA%A2%E5%A9%B5%E4%BC%A4%E7%97%85&t=31&band_rank=39&Refer=top)
1. [热巴谷爱凌李昀锐秀场同框](https://s.weibo.com//weibo?q=%23%E7%83%AD%E5%B7%B4%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9D%8E%E6%98%80%E9%94%90%E7%A7%80%E5%9C%BA%E5%90%8C%E6%A1%86%23&t=31&band_rank=40&Refer=top)
1. [生命树](https://s.weibo.com//weibo?q=%E7%94%9F%E5%91%BD%E6%A0%91&t=31&band_rank=41&Refer=top)
1. [陈妤颉领先泰国队0.09秒](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%E9%A2%86%E5%85%88%E6%B3%B0%E5%9B%BD%E9%98%9F0.09%E7%A7%92%23&t=31&band_rank=42&Refer=top)
1. [王鹤棣 哥们的哥们也很好](https://s.weibo.com//weibo?q=%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E5%93%A5%E4%BB%AC%E7%9A%84%E5%93%A5%E4%BB%AC%E4%B9%9F%E5%BE%88%E5%A5%BD&t=31&band_rank=43&Refer=top)
1. [沈梦辰的鞋穿帮了](https://s.weibo.com//weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E7%9A%84%E9%9E%8B%E7%A9%BF%E5%B8%AE%E4%BA%86%23&t=31&band_rank=44&Refer=top)
1. [英雄永垂不朽](https://s.weibo.com//weibo?q=%E8%8B%B1%E9%9B%84%E6%B0%B8%E5%9E%82%E4%B8%8D%E6%9C%BD&t=31&band_rank=45&Refer=top)
1. [天安门执勤武警被大橘猫缠绕](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E6%89%A7%E5%8B%A4%E6%AD%A6%E8%AD%A6%E8%A2%AB%E5%A4%A7%E6%A9%98%E7%8C%AB%E7%BC%A0%E7%BB%95%23&t=31&band_rank=46&Refer=top)
1. [中国男排3比2韩国男排](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E6%8E%923%E6%AF%942%E9%9F%A9%E5%9B%BD%E7%94%B7%E6%8E%92&t=31&band_rank=47&Refer=top)
1. [金智秀 Dior公主](https://s.weibo.com//weibo?q=%E9%87%91%E6%99%BA%E7%A7%80%20Dior%E5%85%AC%E4%B8%BB&t=31&band_rank=48&Refer=top)
1. [vivo开始抓考勤了](https://s.weibo.com//weibo?q=%23vivo%E5%BC%80%E5%A7%8B%E6%8A%93%E8%80%83%E5%8B%A4%E4%BA%86%23&t=31&band_rank=49&Refer=top)
1. [超长蛋挞的第一个受害者出现了](https://s.weibo.com//weibo?q=%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
