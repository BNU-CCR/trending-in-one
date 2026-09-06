# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-07 01:05:35

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
<!-- 最后更新时间 Sun Sep 06 2026 21:48:23 GMT+0800 (China Standard Time) -->

1. [多地严查赵一鸣等零食品牌](https://so.toutiao.com/search?keyword=多地严查赵一鸣等零食品牌)
1. [财政部将向中国太平注资70亿](https://so.toutiao.com/search?keyword=财政部将向中国太平注资70亿)
1. [中国节水账本里的“节约密码”](https://so.toutiao.com/search?keyword=中国节水账本里的“节约密码”)
1. [女子怀孕后工资从8000调到3000](https://so.toutiao.com/search?keyword=女子怀孕后工资从8000调到3000)
1. [俄新武器击碎乌民众“战局扭转”幻想](https://so.toutiao.com/search?keyword=俄新武器击碎乌民众“战局扭转”幻想)
1. [张雪机车法国站次回合获得第3名](https://so.toutiao.com/search?keyword=张雪机车法国站次回合获得第3名)
1. [女生赴港看演唱会被取消低保](https://so.toutiao.com/search?keyword=女生赴港看演唱会被取消低保)
1. [财政部将向中国人寿注资350亿](https://so.toutiao.com/search?keyword=财政部将向中国人寿注资350亿)
1. [美俄重新坐到谈判桌前意味着什么](https://so.toutiao.com/search?keyword=美俄重新坐到谈判桌前意味着什么)
1. [葫芦娃爷爷奶奶看网友评论感动落泪](https://so.toutiao.com/search?keyword=葫芦娃爷爷奶奶看网友评论感动落泪)
1. [网传“青铜峡大坝开始泄洪”系谣言](https://so.toutiao.com/search?keyword=网传“青铜峡大坝开始泄洪”系谣言)
1. [张纪中妻子备孕5胎](https://so.toutiao.com/search?keyword=张纪中妻子备孕5胎)
1. [财政部将发行3000亿特别国债](https://so.toutiao.com/search?keyword=财政部将发行3000亿特别国债)
1. [网友锯开树干露出层层叠叠的巨大蜂巢](https://so.toutiao.com/search?keyword=网友锯开树干露出层层叠叠的巨大蜂巢)
1. [萌娃进滕王阁 系统提示终身免费票](https://so.toutiao.com/search?keyword=萌娃进滕王阁%20系统提示终身免费票)
1. [财政部570亿增资三家保险公司](https://so.toutiao.com/search?keyword=财政部570亿增资三家保险公司)
1. [CHINA GT安全漏洞](https://so.toutiao.com/search?keyword=CHINA%20GT安全漏洞)
1. [西藏泥石流43人遇难519人失联](https://so.toutiao.com/search?keyword=西藏泥石流43人遇难519人失联)
1. [李大霄：银行保险注资增资是利好消息](https://so.toutiao.com/search?keyword=李大霄：银行保险注资增资是利好消息)
1. [男子对着英烈墙上4个同名烈士叫爷爷](https://so.toutiao.com/search?keyword=男子对着英烈墙上4个同名烈士叫爷爷)
1. [医生淘洗粪便3小时找到肝吸虫](https://so.toutiao.com/search?keyword=医生淘洗粪便3小时找到肝吸虫)
1. [男子开门见床上盘着约5斤重大蛇](https://so.toutiao.com/search?keyword=男子开门见床上盘着约5斤重大蛇)
1. [工行农行拟分别募资1000亿和1600亿](https://so.toutiao.com/search?keyword=工行农行拟分别募资1000亿和1600亿)
1. [高校“特来电”班学生均622分以上](https://so.toutiao.com/search?keyword=高校“特来电”班学生均622分以上)
1. [新生独自从云南到河南报到：自己闯](https://so.toutiao.com/search?keyword=新生独自从云南到河南报到：自己闯)
1. [79号车手哈托格49秒火海救人](https://so.toutiao.com/search?keyword=79号车手哈托格49秒火海救人)
1. [ETC该不该取消](https://so.toutiao.com/search?keyword=ETC该不该取消)
1. [拜登儿子亨特称可能会参选美国总统](https://so.toutiao.com/search?keyword=拜登儿子亨特称可能会参选美国总统)
1. [演员张国强力推家乡佳木斯大米](https://so.toutiao.com/search?keyword=演员张国强力推家乡佳木斯大米)
1. [西藏日喀则将研究口岸功能恢复等事宜](https://so.toutiao.com/search?keyword=西藏日喀则将研究口岸功能恢复等事宜)
1. [航拍江西遂川泥石流受灾一线](https://so.toutiao.com/search?keyword=航拍江西遂川泥石流受灾一线)
1. [多家银行清理百亿不良](https://so.toutiao.com/search?keyword=多家银行清理百亿不良)
1. [CHINA GT就碰撞起火事故致歉](https://so.toutiao.com/search?keyword=CHINA%20GT就碰撞起火事故致歉)
1. [校长回应开学一年级只有一个人报到](https://so.toutiao.com/search?keyword=校长回应开学一年级只有一个人报到)
1. [莫迪：印度将办令世界惊叹的奥运会](https://so.toutiao.com/search?keyword=莫迪：印度将办令世界惊叹的奥运会)
1. [中小学一定要买校服吗？教育部回应](https://so.toutiao.com/search?keyword=中小学一定要买校服吗？教育部回应)
1. [江西省公安厅原党委委员万秀奇被查](https://so.toutiao.com/search?keyword=江西省公安厅原党委委员万秀奇被查)
1. [杨毅以为郑钦文输定了](https://so.toutiao.com/search?keyword=杨毅以为郑钦文输定了)
1. [7日白露：草木凝清露 秋夜揽星河](https://so.toutiao.com/search?keyword=7日白露：草木凝清露%20秋夜揽星河)
1. [山西挖眼案受害男孩到长春大学报到](https://so.toutiao.com/search?keyword=山西挖眼案受害男孩到长春大学报到)
1. [台风下的胶鞋厂与不倒的温商精神](https://so.toutiao.com/search?keyword=台风下的胶鞋厂与不倒的温商精神)
1. [“凤凰组合”谈夺冠：这周过得好久](https://so.toutiao.com/search?keyword=“凤凰组合”谈夺冠：这周过得好久)
1. [患癌准博士称自己只是普通人](https://so.toutiao.com/search?keyword=患癌准博士称自己只是普通人)
1. [美总统特使抵达基辅](https://so.toutiao.com/search?keyword=美总统特使抵达基辅)
1. [陈妍希离婚后首谈二胎](https://so.toutiao.com/search?keyword=陈妍希离婚后首谈二胎)
1. [近一半两弹一星元勋曾在中国科大任教](https://so.toutiao.com/search?keyword=近一半两弹一星元勋曾在中国科大任教)
1. [8家中央金融企业将共增资3600亿元](https://so.toutiao.com/search?keyword=8家中央金融企业将共增资3600亿元)
1. [张馨予晒度假视频说不要过多揣测](https://so.toutiao.com/search?keyword=张馨予晒度假视频说不要过多揣测)
1. [驻南非使馆提醒侨胞防范被绑架风险](https://so.toutiao.com/search?keyword=驻南非使馆提醒侨胞防范被绑架风险)
1. [美俄密谈有何看点](https://so.toutiao.com/search?keyword=美俄密谈有何看点)
1. [葫芦娃爷爷称明年大概率不再种葫芦](https://so.toutiao.com/search?keyword=葫芦娃爷爷称明年大概率不再种葫芦)
1. [新学期，“新”在哪里？](https://so.toutiao.com/search?keyword=新学期，“新”在哪里？)
1. [ETC该不该取消？人民日报最新发声](https://so.toutiao.com/search?keyword=ETC该不该取消？人民日报最新发声)
1. [伊朗革命卫队称打击了美航母和驱逐舰](https://so.toutiao.com/search?keyword=伊朗革命卫队称打击了美航母和驱逐舰)
1. [泽连斯基：乌方暂停袭击莫斯科三天](https://so.toutiao.com/search?keyword=泽连斯基：乌方暂停袭击莫斯科三天)
1. [工行拟募资不超1000亿用于补充资本](https://so.toutiao.com/search?keyword=工行拟募资不超1000亿用于补充资本)
1. [毛主席纪念堂9月9日开放时间公布](https://so.toutiao.com/search?keyword=毛主席纪念堂9月9日开放时间公布)
1. [麦克布赖德：NBA最难防的是库里](https://so.toutiao.com/search?keyword=麦克布赖德：NBA最难防的是库里)
1. [莆田灾后重建清淤](https://so.toutiao.com/search?keyword=莆田灾后重建清淤)
1. [8月辟谣榜](https://so.toutiao.com/search?keyword=8月辟谣榜)
1. [李多海怀孕进入孕晚期](https://so.toutiao.com/search?keyword=李多海怀孕进入孕晚期)
1. [冉莹颖称给爸爸三婚妻子塞钱](https://so.toutiao.com/search?keyword=冉莹颖称给爸爸三婚妻子塞钱)
1. [父亲用自己的“童年”给孩子上实验课](https://so.toutiao.com/search?keyword=父亲用自己的“童年”给孩子上实验课)
1. [美国是否衰落？他们自己就是答案](https://so.toutiao.com/search?keyword=美国是否衰落？他们自己就是答案)
1. [武警战士蹲下身给战友当“桥”](https://so.toutiao.com/search?keyword=武警战士蹲下身给战友当“桥”)
1. [杨毅得知郑钦文赢球懵了：以为输定了](https://so.toutiao.com/search?keyword=杨毅得知郑钦文赢球懵了：以为输定了)
1. [China GT官方发布比赛事故声明](https://so.toutiao.com/search?keyword=China%20GT官方发布比赛事故声明)
1. [退伍舅舅接外甥 同学满眼羡慕](https://so.toutiao.com/search?keyword=退伍舅舅接外甥%20同学满眼羡慕)
1. [美国人为啥还是离不开中国制造](https://so.toutiao.com/search?keyword=美国人为啥还是离不开中国制造)
1. [国有大行第二轮资本补充启动](https://so.toutiao.com/search?keyword=国有大行第二轮资本补充启动)
1. [葫芦娃爷爷说不会把葫芦卖掉](https://so.toutiao.com/search?keyword=葫芦娃爷爷说不会把葫芦卖掉)
1. [赛车爆燃 对手弃赛冲入火海救人](https://so.toutiao.com/search?keyword=赛车爆燃%20对手弃赛冲入火海救人)
1. [郑钦文的强大是落后时仍全力奔跑](https://so.toutiao.com/search?keyword=郑钦文的强大是落后时仍全力奔跑)
1. [小电驴突然起火又是二手锂电池惹的祸](https://so.toutiao.com/search?keyword=小电驴突然起火又是二手锂电池惹的祸)
1. [62岁后睡觉尽量做到这4点](https://so.toutiao.com/search?keyword=62岁后睡觉尽量做到这4点)
1. [外媒：美国“林肯”号航母离开泰国](https://so.toutiao.com/search?keyword=外媒：美国“林肯”号航母离开泰国)
1. [葫芦娃爷爷提前剪掉葫芦称需要休息](https://so.toutiao.com/search?keyword=葫芦娃爷爷提前剪掉葫芦称需要休息)
1. [史玉柱从上市公司体系累计套现超80亿](https://so.toutiao.com/search?keyword=史玉柱从上市公司体系累计套现超80亿)
1. [中国队抵达澳门备战WTT澳门冠军赛](https://so.toutiao.com/search?keyword=中国队抵达澳门备战WTT澳门冠军赛)
1. [绍兴文旅回应葫芦娃爷爷摘了葫芦](https://so.toutiao.com/search?keyword=绍兴文旅回应葫芦娃爷爷摘了葫芦)
1. [美国被曝谋划“战后遏制伊朗”](https://so.toutiao.com/search?keyword=美国被曝谋划“战后遏制伊朗”)
1. [新一轮油价调整即将开启](https://so.toutiao.com/search?keyword=新一轮油价调整即将开启)
1. [学生卖黄金到账12.4万账户被冻结](https://so.toutiao.com/search?keyword=学生卖黄金到账12.4万账户被冻结)
1. [江西遂川县扬芬村山体滑坡2人失联](https://so.toutiao.com/search?keyword=江西遂川县扬芬村山体滑坡2人失联)
1. [张学友大女儿近照曝光](https://so.toutiao.com/search?keyword=张学友大女儿近照曝光)
1. [博主：日本女篮输球助攻中国女篮出线](https://so.toutiao.com/search?keyword=博主：日本女篮输球助攻中国女篮出线)
1. [新能源写成新熊源 紫金矿业致歉](https://so.toutiao.com/search?keyword=新能源写成新熊源%20紫金矿业致歉)
1. [给女童病历标刁蛮的涉事医生被立案](https://so.toutiao.com/search?keyword=给女童病历标刁蛮的涉事医生被立案)
1. [新疆慕士塔格峰雪崩 文旅部门提醒](https://so.toutiao.com/search?keyword=新疆慕士塔格峰雪崩%20文旅部门提醒)
1. [《杀死比尔》为啥值得等23年](https://so.toutiao.com/search?keyword=《杀死比尔》为啥值得等23年)
1. [周杰伦昆凌被郑钦文燃到了](https://so.toutiao.com/search?keyword=周杰伦昆凌被郑钦文燃到了)
1. [肯尼亚选手获沈阳马拉松男子组冠军](https://so.toutiao.com/search?keyword=肯尼亚选手获沈阳马拉松男子组冠军)
1. [马春雷任上海市政府参事室主任](https://so.toutiao.com/search?keyword=马春雷任上海市政府参事室主任)
1. [郑钦文决胜盘惊天大逆转](https://so.toutiao.com/search?keyword=郑钦文决胜盘惊天大逆转)
1. [高市早苗抗议俄罗斯伤害日本人感情](https://so.toutiao.com/search?keyword=高市早苗抗议俄罗斯伤害日本人感情)
1. [中国超大市场红利惠及全球](https://so.toutiao.com/search?keyword=中国超大市场红利惠及全球)
1. [俄乌三日停火背后](https://so.toutiao.com/search?keyword=俄乌三日停火背后)
1. [郑钦文是16强唯一资格赛选手](https://so.toutiao.com/search?keyword=郑钦文是16强唯一资格赛选手)
1. [郑钦文说这次大逆转是职业生涯头一次](https://so.toutiao.com/search?keyword=郑钦文说这次大逆转是职业生涯头一次)
1. [小学通知家长来校做卫生？教育局回应](https://so.toutiao.com/search?keyword=小学通知家长来校做卫生？教育局回应)
1. [江西泥石流救援现场再次塌方](https://so.toutiao.com/search?keyword=江西泥石流救援现场再次塌方)
1. [超市被淹老板称泡了水的东西绝不卖](https://so.toutiao.com/search?keyword=超市被淹老板称泡了水的东西绝不卖)
1. [美总统特使会面现场多次感谢普京](https://so.toutiao.com/search?keyword=美总统特使会面现场多次感谢普京)
1. [间谍深夜翻进快递站偷数据被举报](https://so.toutiao.com/search?keyword=间谍深夜翻进快递站偷数据被举报)
1. [中国空军派军机参加第二届埃及航展](https://so.toutiao.com/search?keyword=中国空军派军机参加第二届埃及航展)
1. [西藏吉隆口岸国门处五星红旗飘展](https://so.toutiao.com/search?keyword=西藏吉隆口岸国门处五星红旗飘展)
1. [普京会见特朗普特使超3小时](https://so.toutiao.com/search?keyword=普京会见特朗普特使超3小时)
1. [维珍航空创始人：伊朗战事毫无必要](https://so.toutiao.com/search?keyword=维珍航空创始人：伊朗战事毫无必要)
1. [媒体人：中国女篮对战捷克不容有失](https://so.toutiao.com/search?keyword=媒体人：中国女篮对战捷克不容有失)
1. [男子杀害姐夫后潜逃28年被抓](https://so.toutiao.com/search?keyword=男子杀害姐夫后潜逃28年被抓)
1. [牛弹琴：深圳干了一件很不寻常的事](https://so.toutiao.com/search?keyword=牛弹琴：深圳干了一件很不寻常的事)
1. [郑钦文社媒写下：迎万难 赢万难](https://so.toutiao.com/search?keyword=郑钦文社媒写下：迎万难%20赢万难)
1. [武契奇被推举为塞尔维亚总理候选人](https://so.toutiao.com/search?keyword=武契奇被推举为塞尔维亚总理候选人)
1. [退伍老兵父亲病危求助 军校官兵献血](https://so.toutiao.com/search?keyword=退伍老兵父亲病危求助%20军校官兵献血)
1. [小沈阳组《拖拉机》舞台夯爆了](https://so.toutiao.com/search?keyword=小沈阳组《拖拉机》舞台夯爆了)
1. [女子曝在厕所遭男子开闪光灯偷拍](https://so.toutiao.com/search?keyword=女子曝在厕所遭男子开闪光灯偷拍)
1. [老兵退伍把军车钥匙交接给战友](https://so.toutiao.com/search?keyword=老兵退伍把军车钥匙交接给战友)
1. [郑钦文对手遭逆转用球拍猛砸头部](https://so.toutiao.com/search?keyword=郑钦文对手遭逆转用球拍猛砸头部)
1. [特斯拉无稀土电机有哪些创新](https://so.toutiao.com/search?keyword=特斯拉无稀土电机有哪些创新)
1. [退伍归来的舅舅接外甥 同学满眼羡慕](https://so.toutiao.com/search?keyword=退伍归来的舅舅接外甥%20同学满眼羡慕)
1. [美博主镜头下在芭提雅疯狂的美海军](https://so.toutiao.com/search?keyword=美博主镜头下在芭提雅疯狂的美海军)
1. [江西遂川泥石流已致2死10人失联](https://so.toutiao.com/search?keyword=江西遂川泥石流已致2死10人失联)
1. [C罗偷看对手战术纸条被发现后笑了](https://so.toutiao.com/search?keyword=C罗偷看对手战术纸条被发现后笑了)
1. [“小萝卜头”宋振中牺牲77周年](https://so.toutiao.com/search?keyword=“小萝卜头”宋振中牺牲77周年)
1. [乌克兰威胁称俄空域“不安全”](https://so.toutiao.com/search?keyword=乌克兰威胁称俄空域“不安全”)
1. [赖岳谦夫妇对大陆产电三轮爱不释手](https://so.toutiao.com/search?keyword=赖岳谦夫妇对大陆产电三轮爱不释手)
1. [苏超盐城队刘嘉伟再次绝平比赛](https://so.toutiao.com/search?keyword=苏超盐城队刘嘉伟再次绝平比赛)
1. [吉隆泥石流灾害为何难预警难救援](https://so.toutiao.com/search?keyword=吉隆泥石流灾害为何难预警难救援)
1. [叔叔跨越2千多公里送侄女入学](https://so.toutiao.com/search?keyword=叔叔跨越2千多公里送侄女入学)
1. [iPhone 18系列售价曝光](https://so.toutiao.com/search?keyword=iPhone%2018系列售价曝光)
1. [获救中国公民称能坚持下来是奇迹](https://so.toutiao.com/search?keyword=获救中国公民称能坚持下来是奇迹)
1. [未来五年 健康生活“新”在哪](https://so.toutiao.com/search?keyword=未来五年%20健康生活“新”在哪)
1. [阿里巴巴前高管在美死亡 友人发声](https://so.toutiao.com/search?keyword=阿里巴巴前高管在美死亡%20友人发声)
1. [超1万册永乐大典副本下落不明](https://so.toutiao.com/search?keyword=超1万册永乐大典副本下落不明)
1. [郑钦文史诗级逆转后坐地庆祝](https://so.toutiao.com/search?keyword=郑钦文史诗级逆转后坐地庆祝)
1. [获救中国公民曾爬隧道最高处等救援](https://so.toutiao.com/search?keyword=获救中国公民曾爬隧道最高处等救援)
1. [美网官号称郑钦文是奇迹本迹](https://so.toutiao.com/search?keyword=美网官号称郑钦文是奇迹本迹)
1. [葫芦娃爷爷爆火“蛇精”来打卡](https://so.toutiao.com/search?keyword=葫芦娃爷爷爆火“蛇精”来打卡)
1. [郑钦文说总不能让她打个6-0](https://so.toutiao.com/search?keyword=郑钦文说总不能让她打个6-0)
1. [港姐王菲与歌手张子丰宣布订婚](https://so.toutiao.com/search?keyword=港姐王菲与歌手张子丰宣布订婚)
1. [郑钦文下一轮迎战斯瓦泰克](https://so.toutiao.com/search?keyword=郑钦文下一轮迎战斯瓦泰克)
1. [评论员：把学英语当崇洋媚外是忽悠](https://so.toutiao.com/search?keyword=评论员：把学英语当崇洋媚外是忽悠)
1. [第一批戴运动手环的受害者出现了](https://so.toutiao.com/search?keyword=第一批戴运动手环的受害者出现了)
1. [拍伪装车遭敲窗威胁称泄露就赔钱](https://so.toutiao.com/search?keyword=拍伪装车遭敲窗威胁称泄露就赔钱)
1. [女子40万租房2年退租被要求换新家具](https://so.toutiao.com/search?keyword=女子40万租房2年退租被要求换新家具)
1. [撒贝宁：只要不上班就来丹霞山](https://so.toutiao.com/search?keyword=撒贝宁：只要不上班就来丹霞山)
1. [香港城市大学回应迎新营尺度争议](https://so.toutiao.com/search?keyword=香港城市大学回应迎新营尺度争议)
1. [机顶盒要消失了用户还会回来看电视吗](https://so.toutiao.com/search?keyword=机顶盒要消失了用户还会回来看电视吗)
1. [DeepSeek被曝将采购16万颗华为芯片](https://so.toutiao.com/search?keyword=DeepSeek被曝将采购16万颗华为芯片)
1. [父亲送女儿到郑州上大学直呼高大上](https://so.toutiao.com/search?keyword=父亲送女儿到郑州上大学直呼高大上)
1. [央视中秋晚会官宣](https://so.toutiao.com/search?keyword=央视中秋晚会官宣)
1. [杰克·琼斯晋级斯诺克英国公开赛决赛](https://so.toutiao.com/search?keyword=杰克·琼斯晋级斯诺克英国公开赛决赛)
1. [平陆运河“铁江海”联运列车首发](https://so.toutiao.com/search?keyword=平陆运河“铁江海”联运列车首发)
1. [剧本杀恋陪涉黄乱象](https://so.toutiao.com/search?keyword=剧本杀恋陪涉黄乱象)
1. [离异男子带3个孩子 大女儿确诊白血病](https://so.toutiao.com/search?keyword=离异男子带3个孩子%20大女儿确诊白血病)
1. [A股又走出10倍大牛股](https://so.toutiao.com/search?keyword=A股又走出10倍大牛股)
1. [青岛上演浪漫黄昏景致](https://so.toutiao.com/search?keyword=青岛上演浪漫黄昏景致)
1. [黄灿灿自曝不想结婚](https://so.toutiao.com/search?keyword=黄灿灿自曝不想结婚)
1. [男子逃亡50年终落网](https://so.toutiao.com/search?keyword=男子逃亡50年终落网)
1. [新能源船舶项目落子南宁](https://so.toutiao.com/search?keyword=新能源船舶项目落子南宁)
1. [工人因赊1碗面后连续吃121天](https://so.toutiao.com/search?keyword=工人因赊1碗面后连续吃121天)
1. [老楼加装电梯遭一楼住户反对](https://so.toutiao.com/search?keyword=老楼加装电梯遭一楼住户反对)
1. [福建莆田保供企业按日常2至3倍备货](https://so.toutiao.com/search?keyword=福建莆田保供企业按日常2至3倍备货)
1. [普京斥乌克兰将人民像狗一样赶上前线](https://so.toutiao.com/search?keyword=普京斥乌克兰将人民像狗一样赶上前线)
1. [古天乐方回应网传被追债1.3亿](https://so.toutiao.com/search?keyword=古天乐方回应网传被追债1.3亿)
1. [校长回应“9个老师守着12个娃”](https://so.toutiao.com/search?keyword=校长回应“9个老师守着12个娃”)
1. [1岁裸体男童沙漠走失12小时被找到](https://so.toutiao.com/search?keyword=1岁裸体男童沙漠走失12小时被找到)
1. [车企“围攻”动力电池](https://so.toutiao.com/search?keyword=车企“围攻”动力电池)
1. [新生报到后领着爸妈在学校食堂吃饭](https://so.toutiao.com/search?keyword=新生报到后领着爸妈在学校食堂吃饭)
1. [吉利星越L PLUS正式亮相](https://so.toutiao.com/search?keyword=吉利星越L%20PLUS正式亮相)
1. [泥石流获救中国公民：一度不敢相信](https://so.toutiao.com/search?keyword=泥石流获救中国公民：一度不敢相信)
1. [菲法院为何下令逮捕副总统](https://so.toutiao.com/search?keyword=菲法院为何下令逮捕副总统)
1. [问界辟谣生产“预制车”：已报案](https://so.toutiao.com/search?keyword=问界辟谣生产“预制车”：已报案)
1. [江西省委书记尹弘到遂川指挥救援](https://so.toutiao.com/search?keyword=江西省委书记尹弘到遂川指挥救援)
1. [张雪机车获第三名](https://so.toutiao.com/search?keyword=张雪机车获第三名)
1. [美欧合谋“逼迫”人民币升值有何意图](https://so.toutiao.com/search?keyword=美欧合谋“逼迫”人民币升值有何意图)
1. [吉隆泥石流发生23分钟后航拍首公开](https://so.toutiao.com/search?keyword=吉隆泥石流发生23分钟后航拍首公开)
1. [脂肪肝真的只是“吃得太好”吗](https://so.toutiao.com/search?keyword=脂肪肝真的只是“吃得太好”吗)
1. [游客称遇停车刺客：18小时6分收380元](https://so.toutiao.com/search?keyword=游客称遇停车刺客：18小时6分收380元)
1. [中埃联合声明释放了什么信号](https://so.toutiao.com/search?keyword=中埃联合声明释放了什么信号)
1. [章泽天不抢话为什么成了一个问题](https://so.toutiao.com/search?keyword=章泽天不抢话为什么成了一个问题)
1. [为何人类不去开采水星上的金属](https://so.toutiao.com/search?keyword=为何人类不去开采水星上的金属)
1. [新能源汽车废旧动力电池何去何从](https://so.toutiao.com/search?keyword=新能源汽车废旧动力电池何去何从)
1. [埃及为何增购24架阵风](https://so.toutiao.com/search?keyword=埃及为何增购24架阵风)
1. [乌克兰征兵人员伪装路人“抓壮丁”](https://so.toutiao.com/search?keyword=乌克兰征兵人员伪装路人“抓壮丁”)
1. [教育部：坚决对师德失范行为零容忍](https://so.toutiao.com/search?keyword=教育部：坚决对师德失范行为零容忍)
1. [欧洲把黄金从美国搬走意味着什么](https://so.toutiao.com/search?keyword=欧洲把黄金从美国搬走意味着什么)
1. [女子突发“文盲”丧失识字能力](https://so.toutiao.com/search?keyword=女子突发“文盲”丧失识字能力)
1. [深圳为何会被美国媒体和学界倍加青睐](https://so.toutiao.com/search?keyword=深圳为何会被美国媒体和学界倍加青睐)
1. [三星堆热度持续走高](https://so.toutiao.com/search?keyword=三星堆热度持续走高)
1. [专家：俄罗斯南下布局亚太新棋局](https://so.toutiao.com/search?keyword=专家：俄罗斯南下布局亚太新棋局)
1. [美国称摧毁3艘伊朗油轮](https://so.toutiao.com/search?keyword=美国称摧毁3艘伊朗油轮)
1. [美国油价为何压不住](https://so.toutiao.com/search?keyword=美国油价为何压不住)
1. [博主：A股市场进入“头部集中时代”](https://so.toutiao.com/search?keyword=博主：A股市场进入“头部集中时代”)
1. [各国疯狂囤黄金意味着什么](https://so.toutiao.com/search?keyword=各国疯狂囤黄金意味着什么)
1. [王炳忠：乐见“台独”变统派](https://so.toutiao.com/search?keyword=王炳忠：乐见“台独”变统派)
1. [江西遂川泥石流失联11人身份确认](https://so.toutiao.com/search?keyword=江西遂川泥石流失联11人身份确认)
1. [白晶换上詹姆斯球衣整活](https://so.toutiao.com/search?keyword=白晶换上詹姆斯球衣整活)
1. [金晨回应恋情传闻](https://so.toutiao.com/search?keyword=金晨回应恋情传闻)
1. [媒体：成都蓉城夺冠还得靠自己](https://so.toutiao.com/search?keyword=媒体：成都蓉城夺冠还得靠自己)
1. [实测GPT-6](https://so.toutiao.com/search?keyword=实测GPT-6)
1. [阿里前高管在美国失踪半月后确认身亡](https://so.toutiao.com/search?keyword=阿里前高管在美国失踪半月后确认身亡)
1. [特斯拉市值一夜蒸发超6000亿](https://so.toutiao.com/search?keyword=特斯拉市值一夜蒸发超6000亿)
1. [普京宣布停止打击基辅3天](https://so.toutiao.com/search?keyword=普京宣布停止打击基辅3天)
1. [解放军20架次军机持续位台岛周边活动](https://so.toutiao.com/search?keyword=解放军20架次军机持续位台岛周边活动)
1. [苏超南通队客场1:0战胜连云港队](https://so.toutiao.com/search?keyword=苏超南通队客场1:0战胜连云港队)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Mon Sep 07 2026 01:00:09 GMT+0800 (China Standard Time) -->

1. [汤家凤呼吁取消英语主科地位](https://www.zhihu.com/search?q=%E6%B1%A4%E5%AE%B6%E5%87%A4%E5%91%BC%E5%90%81%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%E5%9C%B0%E4%BD%8D)
1. [多地严查赵一鸣、好想来等量贩零食品牌](https://www.zhihu.com/search?q=%E5%A4%9A%E5%9C%B0%E4%B8%A5%E6%9F%A5%E8%B5%B5%E4%B8%80%E9%B8%A3%E3%80%81%E5%A5%BD%E6%83%B3%E6%9D%A5%E7%AD%89%E9%87%8F%E8%B4%A9%E9%9B%B6%E9%A3%9F%E5%93%81%E7%89%8C)
1. [武汉大学教授曾梦琪被举报](https://www.zhihu.com/search?q=%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E6%95%99%E6%8E%88%E6%9B%BE%E6%A2%A6%E7%90%AA%E8%A2%AB%E4%B8%BE%E6%8A%A5)
1. [林诗栋退出 WTT 澳门冠军赛](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B%E9%80%80%E5%87%BA%20WTT%20%E6%BE%B3%E9%97%A8%E5%86%A0%E5%86%9B%E8%B5%9B)
1. [江西孩子看演唱会后全家低保取消](https://www.zhihu.com/search?q=%E6%B1%9F%E8%A5%BF%E5%AD%A9%E5%AD%90%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%8E%E5%85%A8%E5%AE%B6%E4%BD%8E%E4%BF%9D%E5%8F%96%E6%B6%88)
1. [搞笑诺贝尔奖来了：蟑螂奶获化学奖](https://www.zhihu.com/search?q=%E6%90%9E%E7%AC%91%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%A5%96%E6%9D%A5%E4%BA%86%EF%BC%9A%E8%9F%91%E8%9E%82%E5%A5%B6%E8%8E%B7%E5%8C%96%E5%AD%A6%E5%A5%96)
1. [GPT-6 正式发布](https://www.zhihu.com/search?q=GPT-6%20%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [剧本杀可能暗含色情服务](https://www.zhihu.com/search?q=%E5%89%A7%E6%9C%AC%E6%9D%80%E5%8F%AF%E8%83%BD%E6%9A%97%E5%90%AB%E8%89%B2%E6%83%85%E6%9C%8D%E5%8A%A1)
1. [运营商晒 iPhone18 售价](https://www.zhihu.com/search?q=%E8%BF%90%E8%90%A5%E5%95%86%E6%99%92%20iPhone18%20%E5%94%AE%E4%BB%B7)
1. [财政部将向中国人寿集团注资 350 亿元](https://www.zhihu.com/search?q=%E8%B4%A2%E6%94%BF%E9%83%A8%E5%B0%86%E5%90%91%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AF%BF%E9%9B%86%E5%9B%A2%E6%B3%A8%E8%B5%84%20350%20%E4%BA%BF%E5%85%83)
1. [N-S 方程疑似被 AI 解决](https://www.zhihu.com/search?q=N-S%20%E6%96%B9%E7%A8%8B%E7%96%91%E4%BC%BC%E8%A2%AB%20AI%20%E8%A7%A3%E5%86%B3)
1. [「葫芦娃爷爷」剪掉七个葫芦](https://www.zhihu.com/search?q=%E3%80%8C%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%E3%80%8D%E5%89%AA%E6%8E%89%E4%B8%83%E4%B8%AA%E8%91%AB%E8%8A%A6)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Sep 07 2026 01:05:35 GMT+0800 (China Standard Time) -->

1. [江西一低保家庭女孩自己攒钱去香港看演唱会，网传其全家低保资格被取消，当地民政局回应正在核查，你怎么看？](https://www.zhihu.com/question/2079866742101241900)
1. [如何看待 China GT 上海站赛车起火，车手放弃比赛救人，车队要求调查？赛事应急救援存在哪些漏洞？](https://www.zhihu.com/question/2079902139359257000)
1. [财政部将向中国工商银行等八家金融央企增资共计 3600 亿元，如何解读？](https://www.zhihu.com/question/2079970428131468500)
1. [多地严查赵一鸣、好想来等量贩零食品牌，有人买4块牛肉干64.58元复秤17.29元，暴露出哪些问题？](https://www.zhihu.com/question/2079975095728960000)
1. [如何评价N-S方程疑似被AI解决？](https://www.zhihu.com/question/2079574865397532400)
1. [「葫芦娃爷爷」剪掉了全网走红的 7 个青葫芦，为何要提前剪藤？游客的「热情」为何最终成了老人的负担？](https://www.zhihu.com/question/2079675637837706500)
1. [如何看待张家齐已是奥运冠军，妈妈却仍因她不会收拾、整理而频繁数落？暴露了怎样的亲子关系问题？](https://www.zhihu.com/question/2079911199861379000)
1. [多家银行集中「清淤」，工行核销超 800 亿元，背后原因是什么？释放出哪些信号？](https://www.zhihu.com/question/2079976272428361500)
1. [为啥白宫开始流行吃酸菜了？万斯自称吃酸菜减重成功，酸菜真能减肥吗？](https://www.zhihu.com/question/2079254257211893500)
1. [《花儿与少年 2》被誉为内娱综艺史上无法超越的巅峰，如何评价其历史地位？](https://www.zhihu.com/question/2077565722000213000)
1. [中国足协主席宋凯称「中国足球起势了」，这一判断有哪些依据？](https://www.zhihu.com/question/2079634074000531700)
1. [如何看待阿根廷总统米莱表示，英国应像把香港归还给中国一样，把马岛归还给阿根廷，阿方可接受香港模式？](https://www.zhihu.com/question/2079980209961551400)
1. [全球首个乙肝功能性治愈新药日本获批，慢性乙肝患者这下真能摆脱终身服药了吗？](https://www.zhihu.com/question/2075883163637604400)
1. [加时死里逃生，中国女篮 74-70 逆转捷克，韩旭砍 22+14，杨舒予 18分5助，如何评价本场？](https://www.zhihu.com/question/2080036984966403000)
1. [LPL2026 赛季季后赛 iG 3:1 淘汰 WE 跻身四强，如何评价这场比赛？](https://www.zhihu.com/question/2079918542762334200)
1. [中国需要多久达到或超过 GPT-6 Astra 级别的模型水平？](https://www.zhihu.com/question/2079675087209419300)
1. [如何评价据传iPhone 18 Pro 9999元起，Ultra 14999元起，新增红色和蓝色款？](https://www.zhihu.com/question/2079613018694838300)
1. [为什么《笑傲江湖》里人人都抢辟邪剑谱，却没人抢独孤九剑？](https://www.zhihu.com/question/2079664909302998000)
1. [如何看待联合国倡导使用“平等地球投影法”，这会让统治地图圈几百年的“墨卡托投影”彻底退出历史舞台吗？](https://www.zhihu.com/question/2079538010077643500)
1. [为什么今年的脱口秀比赛不温不火？是不好笑了还是大家都不爱看了？](https://www.zhihu.com/question/2077777515964097800)
1. [贵中医二附院一医生疑被患者捅伤，一名肠癌患者将刀具藏在锦旗中带入，警方通报嫌疑人被刑拘，如何看待此事？](https://www.zhihu.com/question/2079356445703915500)
1. [山姆 9 个月新增百万会员，沃尔玛借鉴山姆选品逻辑开社区店，山姆这套「受喜爱密码」能被复制吗？](https://www.zhihu.com/question/2078085373364913700)
1. [章泽天专访何超琼时被指采访深度不足，甚至出现「主客反转」，你如何评价她的采访水平？](https://www.zhihu.com/question/2079204493502240300)
1. [胖东来要求供应商提供社保，此举对行业发展有何影响？](https://www.zhihu.com/question/2078928082698818600)
1. [《圣斗士》作者被骗 46 亿，这部童年经典是否将面临烂尾结局？](https://www.zhihu.com/question/2079507368421877200)
1. [5岁女童电子病历被医生标注“刁蛮”，卫健局工作人员称当事人网上发帖是抹黑当地，如何看待此事？](https://www.zhihu.com/question/2079551816996540700)
1. [买断制游戏的一次性付费，真的能换来更纯粹的游戏体验吗？](https://www.zhihu.com/question/2078438504372162800)
1. [自己在家怎么做出好吃不腥的剁椒鱼头？](https://www.zhihu.com/question/12422466441)
1. [大家包饺子是自己揉面还是买面皮？](https://www.zhihu.com/question/1888200765354526500)
1. [为什么意大利黑手党不直接操控意大利政坛?](https://www.zhihu.com/question/628710344)

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
<!-- 最后更新时间 Mon Sep 07 2026 01:09:29 GMT+0800 (China Standard Time) -->

1. [习近平心系青年科技工作者](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%BF%83%E7%B3%BB%E9%9D%92%E5%B9%B4%E7%A7%91%E6%8A%80%E5%B7%A5%E4%BD%9C%E8%80%85%23&Refer=new_time)
1. [工作人员曾反复劝阻女孩赴港看演唱会](https://s.weibo.com//weibo?q=%23%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%9B%BE%E5%8F%8D%E5%A4%8D%E5%8A%9D%E9%98%BB%E5%A5%B3%E5%AD%A9%E8%B5%B4%E6%B8%AF%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=1&Refer=top)
1. [大家不爱住民宿了吗](https://s.weibo.com//weibo?q=%23%E5%A4%A7%E5%AE%B6%E4%B8%8D%E7%88%B1%E4%BD%8F%E6%B0%91%E5%AE%BF%E4%BA%86%E5%90%97%23&t=31&band_rank=2&Refer=top)
1. [青春华章向新而行](https://s.weibo.com//weibo?q=%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%E5%90%91%E6%96%B0%E8%80%8C%E8%A1%8C&t=31&band_rank=3&Refer=top)
1. [花少2摄影师曾劝杨洋明天跑吧](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%912%E6%91%84%E5%BD%B1%E5%B8%88%E6%9B%BE%E5%8A%9D%E6%9D%A8%E6%B4%8B%E6%98%8E%E5%A4%A9%E8%B7%91%E5%90%A7%23&t=31&band_rank=4&Refer=top)
1. [中国女篮大概率小组出线](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E5%A4%A7%E6%A6%82%E7%8E%87%E5%B0%8F%E7%BB%84%E5%87%BA%E7%BA%BF%23&t=31&band_rank=5&Refer=top)
1. [爷爷提前剪葫芦是给流量的一记耳光](https://s.weibo.com//weibo?q=%23%E7%88%B7%E7%88%B7%E6%8F%90%E5%89%8D%E5%89%AA%E8%91%AB%E8%8A%A6%E6%98%AF%E7%BB%99%E6%B5%81%E9%87%8F%E7%9A%84%E4%B8%80%E8%AE%B0%E8%80%B3%E5%85%89%23&t=31&band_rank=6&Refer=top)
1. [交锋](https://s.weibo.com//weibo?q=%E4%BA%A4%E9%94%8B&t=31&band_rank=7&Refer=top)
1. [雷军向所有品牌表达感谢](https://s.weibo.com//weibo?q=%E9%9B%B7%E5%86%9B%E5%90%91%E6%89%80%E6%9C%89%E5%93%81%E7%89%8C%E8%A1%A8%E8%BE%BE%E6%84%9F%E8%B0%A2&t=31&band_rank=8&Refer=top)
1. [LGD晋级LPL四强](https://s.weibo.com//weibo?q=%23LGD%E6%99%8B%E7%BA%A7LPL%E5%9B%9B%E5%BC%BA%23&t=31&band_rank=9&Refer=top)
1. [中国女篮 一顿瞎传](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%20%E4%B8%80%E9%A1%BF%E7%9E%8E%E4%BC%A0&t=31&band_rank=10&Refer=top)
1. [婚内强奸案男子性侵妻子拍下视频](https://s.weibo.com//weibo?q=%23%E5%A9%9A%E5%86%85%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%A6%BB%E5%AD%90%E6%8B%8D%E4%B8%8B%E8%A7%86%E9%A2%91%23&t=31&band_rank=11&Refer=top)
1. [葫芦娃爷爷 流量暴力](https://s.weibo.com//weibo?q=%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%20%E6%B5%81%E9%87%8F%E6%9A%B4%E5%8A%9B&t=31&band_rank=12&Refer=top)
1. [肖战背后拍爸妈看李宇春演唱会](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E8%83%8C%E5%90%8E%E6%8B%8D%E7%88%B8%E5%A6%88%E7%9C%8B%E6%9D%8E%E5%AE%87%E6%98%A5%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=13&Refer=top)
1. [LPL四强出炉](https://s.weibo.com//weibo?q=%23LPL%E5%9B%9B%E5%BC%BA%E5%87%BA%E7%82%89%23&t=31&band_rank=14&Refer=top)
1. [电视台 卖药](https://s.weibo.com//weibo?q=%E7%94%B5%E8%A7%86%E5%8F%B0%20%E5%8D%96%E8%8D%AF&t=31&band_rank=15&Refer=top)
1. [杨舒予绝平](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E8%88%92%E4%BA%88%E7%BB%9D%E5%B9%B3%23&t=31&band_rank=16&Refer=top)
1. [中国博主伦敦直播遭外籍青年挑衅殴打](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%8D%9A%E4%B8%BB%E4%BC%A6%E6%95%A6%E7%9B%B4%E6%92%AD%E9%81%AD%E5%A4%96%E7%B1%8D%E9%9D%92%E5%B9%B4%E6%8C%91%E8%A1%85%E6%AE%B4%E6%89%93&t=31&band_rank=17&Refer=top)
1. [陈妍希想认林心如女儿做儿媳妇](https://s.weibo.com//weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%83%B3%E8%AE%A4%E6%9E%97%E5%BF%83%E5%A6%82%E5%A5%B3%E5%84%BF%E5%81%9A%E5%84%BF%E5%AA%B3%E5%A6%87%23&t=31&band_rank=18&Refer=top)
1. [维斯塔潘](https://s.weibo.com//weibo?q=%E7%BB%B4%E6%96%AF%E5%A1%94%E6%BD%98&t=31&band_rank=19&Refer=top)
1. [追逐JDG共同期待的那场雨](https://s.weibo.com//weibo?q=%23%E8%BF%BD%E9%80%90JDG%E5%85%B1%E5%90%8C%E6%9C%9F%E5%BE%85%E7%9A%84%E9%82%A3%E5%9C%BA%E9%9B%A8%23&t=31&band_rank=20&Refer=top)
1. [iPhone18Pro 配色](https://s.weibo.com//weibo?q=iPhone18Pro%20%E9%85%8D%E8%89%B2&t=31&band_rank=21&Refer=top)
1. [医生提醒轻微智障有5个表现](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E8%BD%BB%E5%BE%AE%E6%99%BA%E9%9A%9C%E6%9C%895%E4%B8%AA%E8%A1%A8%E7%8E%B0%23&t=31&band_rank=22&Refer=top)
1. [动物园员工被鳄鱼咬腿1小时身亡](https://s.weibo.com//weibo?q=%23%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%91%98%E5%B7%A5%E8%A2%AB%E9%B3%84%E9%B1%BC%E5%92%AC%E8%85%BF1%E5%B0%8F%E6%97%B6%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=23&Refer=top)
1. [女儿用豆包抄答案家长只用了一招](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%84%BF%E7%94%A8%E8%B1%86%E5%8C%85%E6%8A%84%E7%AD%94%E6%A1%88%E5%AE%B6%E9%95%BF%E5%8F%AA%E7%94%A8%E4%BA%86%E4%B8%80%E6%8B%9B&t=31&band_rank=24&Refer=top)
1. [无畏年总见](https://s.weibo.com//weibo?q=%23%E6%97%A0%E7%95%8F%E5%B9%B4%E6%80%BB%E8%A7%81%23&t=31&band_rank=25&Refer=top)
1. [清融 昊昊互动](https://s.weibo.com//weibo?q=%E6%B8%85%E8%9E%8D%20%E6%98%8A%E6%98%8A%E4%BA%92%E5%8A%A8&t=31&band_rank=26&Refer=top)
1. [NIP对战LGD](https://s.weibo.com//weibo?q=NIP%E5%AF%B9%E6%88%98LGD&t=31&band_rank=27&Refer=top)
1. [终南山怪虫](https://s.weibo.com//weibo?q=%E7%BB%88%E5%8D%97%E5%B1%B1%E6%80%AA%E8%99%AB&t=31&band_rank=28&Refer=top)
1. [财政部将向中国人寿集团注资350亿](https://s.weibo.com//weibo?q=%23%E8%B4%A2%E6%94%BF%E9%83%A8%E5%B0%86%E5%90%91%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AF%BF%E9%9B%86%E5%9B%A2%E6%B3%A8%E8%B5%84350%E4%BA%BF%23&t=31&band_rank=29&Refer=top)
1. [5人聚餐后全部确诊肝吸虫病](https://s.weibo.com//weibo?q=%235%E4%BA%BA%E8%81%9A%E9%A4%90%E5%90%8E%E5%85%A8%E9%83%A8%E7%A1%AE%E8%AF%8A%E8%82%9D%E5%90%B8%E8%99%AB%E7%97%85%23&t=31&band_rank=30&Refer=top)
1. [Tangyuan赛后哽咽感谢IG前辈](https://s.weibo.com//weibo?q=%23Tangyuan%E8%B5%9B%E5%90%8E%E5%93%BD%E5%92%BD%E6%84%9F%E8%B0%A2IG%E5%89%8D%E8%BE%88%23&t=31&band_rank=31&Refer=top)
1. [摇粒绒 微塑料](https://s.weibo.com//weibo?q=%E6%91%87%E7%B2%92%E7%BB%92%20%E5%BE%AE%E5%A1%91%E6%96%99&t=31&band_rank=32&Refer=top)
1. [郑钦文美网一天烧掉5万](https://s.weibo.com//weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%91%E4%B8%80%E5%A4%A9%E7%83%A7%E6%8E%895%E4%B8%87%23&t=31&band_rank=33&Refer=top)
1. [JDG纪录片](https://s.weibo.com//weibo?q=JDG%E7%BA%AA%E5%BD%95%E7%89%87&t=31&band_rank=34&Refer=top)
1. [中国女篮vs捷克女篮](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E6%8D%B7%E5%85%8B%E5%A5%B3%E7%AF%AE&t=31&band_rank=35&Refer=top)
1. [NIP放假了](https://s.weibo.com//weibo?q=%23NIP%E6%94%BE%E5%81%87%E4%BA%86%23&t=31&band_rank=36&Refer=top)
1. [敏感的人往往看不见自己的珍贵](https://s.weibo.com//weibo?q=%E6%95%8F%E6%84%9F%E7%9A%84%E4%BA%BA%E5%BE%80%E5%BE%80%E7%9C%8B%E4%B8%8D%E8%A7%81%E8%87%AA%E5%B7%B1%E7%9A%84%E7%8F%8D%E8%B4%B5&t=31&band_rank=37&Refer=top)
1. [王安宇黄子弘凡听到搞旅综的反应](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%90%AC%E5%88%B0%E6%90%9E%E6%97%85%E7%BB%BC%E7%9A%84%E5%8F%8D%E5%BA%94%23&t=31&band_rank=38&Refer=top)
1. [拉塞尔 质疑梅奔策略](https://s.weibo.com//weibo?q=%E6%8B%89%E5%A1%9E%E5%B0%94%20%E8%B4%A8%E7%96%91%E6%A2%85%E5%A5%94%E7%AD%96%E7%95%A5&t=31&band_rank=39&Refer=top)
1. [TTG决赛见](https://s.weibo.com//weibo?q=%23TTG%E5%86%B3%E8%B5%9B%E8%A7%81%23&t=31&band_rank=40&Refer=top)
1. [美国男子持刀欲轻生被警方开枪击毙](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E5%AD%90%E6%8C%81%E5%88%80%E6%AC%B2%E8%BD%BB%E7%94%9F%E8%A2%AB%E8%AD%A6%E6%96%B9%E5%BC%80%E6%9E%AA%E5%87%BB%E6%AF%99%23&t=31&band_rank=41&Refer=top)
1. [腿上冒出小鼓包要注意了](https://s.weibo.com//weibo?q=%23%E8%85%BF%E4%B8%8A%E5%86%92%E5%87%BA%E5%B0%8F%E9%BC%93%E5%8C%85%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BA%86%23&t=31&band_rank=42&Refer=top)
1. [凯斯被郑钦文逆转后双目无光](https://s.weibo.com//weibo?q=%23%E5%87%AF%E6%96%AF%E8%A2%AB%E9%83%91%E9%92%A6%E6%96%87%E9%80%86%E8%BD%AC%E5%90%8E%E5%8F%8C%E7%9B%AE%E6%97%A0%E5%85%89%23&t=31&band_rank=43&Refer=top)
1. [玄戒O3 高通](https://s.weibo.com//weibo?q=%E7%8E%84%E6%88%92O3%20%E9%AB%98%E9%80%9A&t=31&band_rank=44&Refer=top)
1. [Faker洛克第一视角](https://s.weibo.com//weibo?q=%23Faker%E6%B4%9B%E5%85%8B%E7%AC%AC%E4%B8%80%E8%A7%86%E8%A7%92%23&t=31&band_rank=45&Refer=top)
1. [单亲妈妈月捐数年无人问停捐后遭催捐](https://s.weibo.com//weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E6%9C%88%E6%8D%90%E6%95%B0%E5%B9%B4%E6%97%A0%E4%BA%BA%E9%97%AE%E5%81%9C%E6%8D%90%E5%90%8E%E9%81%AD%E5%82%AC%E6%8D%90%23&t=31&band_rank=46&Refer=top)
1. [王安宇说田曦薇3秒冲出去](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%AF%B4%E7%94%B0%E6%9B%A6%E8%96%873%E7%A7%92%E5%86%B2%E5%87%BA%E5%8E%BB%23&t=31&band_rank=47&Refer=top)
1. [苏群说中国女篮赢下来真是不敢相信](https://s.weibo.com//weibo?q=%23%E8%8B%8F%E7%BE%A4%E8%AF%B4%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E8%B5%A2%E4%B8%8B%E6%9D%A5%E7%9C%9F%E6%98%AF%E4%B8%8D%E6%95%A2%E7%9B%B8%E4%BF%A1%23&t=31&band_rank=48&Refer=top)
1. [TheShy等来Crisp](https://s.weibo.com//weibo?q=%23TheShy%E7%AD%89%E6%9D%A5Crisp%23&t=31&band_rank=49&Refer=top)
1. [熬夜是在点燃全身炎症炸弹](https://s.weibo.com//weibo?q=%23%E7%86%AC%E5%A4%9C%E6%98%AF%E5%9C%A8%E7%82%B9%E7%87%83%E5%85%A8%E8%BA%AB%E7%82%8E%E7%97%87%E7%82%B8%E5%BC%B9%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
