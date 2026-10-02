# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-03 02:27:03

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
<!-- 最后更新时间 Fri Oct 02 2026 23:57:42 GMT+0800 (China Standard Time) -->

1. [全世界都知道中国人放假了](https://so.toutiao.com/search?keyword=全世界都知道中国人放假了)
1. [陈芋汐斩获亚运双金感谢祖国](https://so.toutiao.com/search?keyword=陈芋汐斩获亚运双金感谢祖国)
1. [一抹中国红 见证跨越时代的奔赴](https://so.toutiao.com/search?keyword=一抹中国红%20见证跨越时代的奔赴)
1. [国足主帅回应0-5惨败](https://so.toutiao.com/search?keyword=国足主帅回应0-5惨败)
1. [A股休市港股为什么先跌了](https://so.toutiao.com/search?keyword=A股休市港股为什么先跌了)
1. [华为押注“制程之外”的芯片创新](https://so.toutiao.com/search?keyword=华为押注“制程之外”的芯片创新)
1. [莫迪连线称赞遇袭印度机长](https://so.toutiao.com/search?keyword=莫迪连线称赞遇袭印度机长)
1. [中国游客如何让老外也过上“黄金周”](https://so.toutiao.com/search?keyword=中国游客如何让老外也过上“黄金周”)
1. [赵松源：今天大家很拼但细节没做好](https://so.toutiao.com/search?keyword=赵松源：今天大家很拼但细节没做好)
1. [日本亚运会为什么状况百出](https://so.toutiao.com/search?keyword=日本亚运会为什么状况百出)
1. [购票有捷径和妙招？12306辟谣](https://so.toutiao.com/search?keyword=购票有捷径和妙招？12306辟谣)
1. [C罗不满儿子落选葡萄牙U16](https://so.toutiao.com/search?keyword=C罗不满儿子落选葡萄牙U16)
1. [脑梗发作前有哪些信号](https://so.toutiao.com/search?keyword=脑梗发作前有哪些信号)
1. [敦煌鸣沙山游客坐满整座山](https://so.toutiao.com/search?keyword=敦煌鸣沙山游客坐满整座山)
1. [博主：邵佳一的“理想主义”被碾成渣](https://so.toutiao.com/search?keyword=博主：邵佳一的“理想主义”被碾成渣)
1. [问界二手车价格上演过山车](https://so.toutiao.com/search?keyword=问界二手车价格上演过山车)
1. [75岁王石重返房地产](https://so.toutiao.com/search?keyword=75岁王石重返房地产)
1. [中国人解压包一样出现在世界各地](https://so.toutiao.com/search?keyword=中国人解压包一样出现在世界各地)
1. [也门政府军和胡塞武装激战](https://so.toutiao.com/search?keyword=也门政府军和胡塞武装激战)
1. [厄尔尼诺对冬天气候有何影响](https://so.toutiao.com/search?keyword=厄尔尼诺对冬天气候有何影响)
1. [阿联酋：迪拜航空驾驶舱冲突系恐袭](https://so.toutiao.com/search?keyword=阿联酋：迪拜航空驾驶舱冲突系恐袭)
1. [奚梦瑶曝婆婆5胎剖腹产没坐月子](https://so.toutiao.com/search?keyword=奚梦瑶曝婆婆5胎剖腹产没坐月子)
1. [17年果粉买到华为Mate90激动到结巴](https://so.toutiao.com/search?keyword=17年果粉买到华为Mate90激动到结巴)
1. [美国9月就业数据为何异常疲软](https://so.toutiao.com/search?keyword=美国9月就业数据为何异常疲软)
1. [9月车市销量的真正逻辑是什么](https://so.toutiao.com/search?keyword=9月车市销量的真正逻辑是什么)
1. [王俊凯片场以为要用真刀捅自己的反应](https://so.toutiao.com/search?keyword=王俊凯片场以为要用真刀捅自己的反应)
1. [美债一夜掉头 抛压退了吗](https://so.toutiao.com/search?keyword=美债一夜掉头%20抛压退了吗)
1. [普京建议西方国家清醒评估局势](https://so.toutiao.com/search?keyword=普京建议西方国家清醒评估局势)
1. [国庆假期黄金消费“两头热”](https://so.toutiao.com/search?keyword=国庆假期黄金消费“两头热”)
1. [全军官兵齐唱《我和我的祖国》](https://so.toutiao.com/search?keyword=全军官兵齐唱《我和我的祖国》)
1. [汽车品牌好不好最终要靠产品说话](https://so.toutiao.com/search?keyword=汽车品牌好不好最终要靠产品说话)
1. [武汉“相约长江看烟花”刷屏海外](https://so.toutiao.com/search?keyword=武汉“相约长江看烟花”刷屏海外)
1. [国庆第二天西湖断桥上全是人](https://so.toutiao.com/search?keyword=国庆第二天西湖断桥上全是人)
1. [靠带错路一战成名的粤J2888T来洛阳了](https://so.toutiao.com/search?keyword=靠带错路一战成名的粤J2888T来洛阳了)
1. [中国男排2-3不敌日本无缘决赛](https://so.toutiao.com/search?keyword=中国男排2-3不敌日本无缘决赛)
1. [港股收盘：三大指数齐跌](https://so.toutiao.com/search?keyword=港股收盘：三大指数齐跌)
1. [美军增兵中东有何考量](https://so.toutiao.com/search?keyword=美军增兵中东有何考量)
1. [网友称Holy Moly是金牌展示进行曲](https://so.toutiao.com/search?keyword=网友称Holy%20Moly是金牌展示进行曲)
1. [特朗普执政困局与美中期选举博弈](https://so.toutiao.com/search?keyword=特朗普执政困局与美中期选举博弈)
1. [沙特为何把嫌疑人交给阿联酋](https://so.toutiao.com/search?keyword=沙特为何把嫌疑人交给阿联酋)
1. [广州南站为何客流一再爆棚](https://so.toutiao.com/search?keyword=广州南站为何客流一再爆棚)
1. [吴艳妮自曝全运会后身体亮红灯](https://so.toutiao.com/search?keyword=吴艳妮自曝全运会后身体亮红灯)
1. [《魅影神捕》是古装探案剧黑马吗](https://so.toutiao.com/search?keyword=《魅影神捕》是古装探案剧黑马吗)
1. [9月新势力车企销量冰火两重天](https://so.toutiao.com/search?keyword=9月新势力车企销量冰火两重天)
1. [沙特向也门政府提供约6000万美元援助](https://so.toutiao.com/search?keyword=沙特向也门政府提供约6000万美元援助)
1. [特鲁姆普晋级斯诺克深圳公开赛四强](https://so.toutiao.com/search?keyword=特鲁姆普晋级斯诺克深圳公开赛四强)
1. [美国9月非农就业仅新增2.9万人](https://so.toutiao.com/search?keyword=美国9月非农就业仅新增2.9万人)
1. [又一所军士学院正式成立](https://so.toutiao.com/search?keyword=又一所军士学院正式成立)
1. [假期河南高速出口日均357万辆车通行](https://so.toutiao.com/search?keyword=假期河南高速出口日均357万辆车通行)
1. [通胀降了美联储为何还在死扛鹰派](https://so.toutiao.com/search?keyword=通胀降了美联储为何还在死扛鹰派)
1. [国际油价大涨会加速油电替代进程吗](https://so.toutiao.com/search?keyword=国际油价大涨会加速油电替代进程吗)
1. [普京：俄乌冲突各方需重建稳定的平衡](https://so.toutiao.com/search?keyword=普京：俄乌冲突各方需重建稳定的平衡)
1. [国家繁荣富强人民幸福安康](https://so.toutiao.com/search?keyword=国家繁荣富强人民幸福安康)
1. [中国女足近3届亚运首度无缘奖牌](https://so.toutiao.com/search?keyword=中国女足近3届亚运首度无缘奖牌)
1. [亚运跳水收官 梦之队10金4银2铜](https://so.toutiao.com/search?keyword=亚运跳水收官%20梦之队10金4银2铜)
1. [演员章涛回应在国外救人](https://so.toutiao.com/search?keyword=演员章涛回应在国外救人)
1. [余承东：华为睿影Z10来了](https://so.toutiao.com/search?keyword=余承东：华为睿影Z10来了)
1. [博主：牛肉价格短期难现大幅回落](https://so.toutiao.com/search?keyword=博主：牛肉价格短期难现大幅回落)
1. [上海一音乐教师泰国失联 校方回应](https://so.toutiao.com/search?keyword=上海一音乐教师泰国失联%20校方回应)
1. [充电特别繁忙服务区清单发布](https://so.toutiao.com/search?keyword=充电特别繁忙服务区清单发布)
1. [中国游客在全世界表白祖国](https://so.toutiao.com/search?keyword=中国游客在全世界表白祖国)
1. [谢锋：年底前中美元首还有望两度聚首](https://so.toutiao.com/search?keyword=谢锋：年底前中美元首还有望两度聚首)
1. [牛肉价格上涨背后有何原因](https://so.toutiao.com/search?keyword=牛肉价格上涨背后有何原因)
1. [林志玲杂志封面近照网友直呼不敢认](https://so.toutiao.com/search?keyword=林志玲杂志封面近照网友直呼不敢认)
1. [一时恍惚分不清是在中国还是在澳洲](https://so.toutiao.com/search?keyword=一时恍惚分不清是在中国还是在澳洲)
1. [海外博主：中国城市现代化水平领先](https://so.toutiao.com/search?keyword=海外博主：中国城市现代化水平领先)
1. [媒体：景区人挤人 治理不能抱佛脚](https://so.toutiao.com/search?keyword=媒体：景区人挤人%20治理不能抱佛脚)
1. [中国人一放假全世界都知道了](https://so.toutiao.com/search?keyword=中国人一放假全世界都知道了)
1. [孙继海：国足踢法违背了基本原则](https://so.toutiao.com/search?keyword=孙继海：国足踢法违背了基本原则)
1. [河南高速服务区迎来“超级充电宝”](https://so.toutiao.com/search?keyword=河南高速服务区迎来“超级充电宝”)
1. [中国亚运军团里的“后浪”真敢](https://so.toutiao.com/search?keyword=中国亚运军团里的“后浪”真敢)
1. [黑龙江各地街头巷尾挂起五星红旗](https://so.toutiao.com/search?keyword=黑龙江各地街头巷尾挂起五星红旗)
1. [普京称若领土遭袭考虑动用全部武器](https://so.toutiao.com/search?keyword=普京称若领土遭袭考虑动用全部武器)
1. [节中机票大跳水](https://so.toutiao.com/search?keyword=节中机票大跳水)
1. [名嘴：不是打击而是要消灭“台独”](https://so.toutiao.com/search?keyword=名嘴：不是打击而是要消灭“台独”)
1. [三双技校生的手捧起世赛奖牌](https://so.toutiao.com/search?keyword=三双技校生的手捧起世赛奖牌)
1. [河南焦作满街“中国红”](https://so.toutiao.com/search?keyword=河南焦作满街“中国红”)
1. [王曦雨获亚运网球女单冠军](https://so.toutiao.com/search?keyword=王曦雨获亚运网球女单冠军)
1. [国际金价银价上涨](https://so.toutiao.com/search?keyword=国际金价银价上涨)
1. [高速路充电枪为何还是不够用](https://so.toutiao.com/search?keyword=高速路充电枪为何还是不够用)
1. [郑钦文的身价还会涨吗](https://so.toutiao.com/search?keyword=郑钦文的身价还会涨吗)
1. [亚运会上中国体育的新模样](https://so.toutiao.com/search?keyword=亚运会上中国体育的新模样)
1. [韩国人为何比中国人还盼着十一假期](https://so.toutiao.com/search?keyword=韩国人为何比中国人还盼着十一假期)
1. [乐道单日换电33341单创历史新高](https://so.toutiao.com/search?keyword=乐道单日换电33341单创历史新高)
1. [比亚迪乘用车9月销量明细曝光](https://so.toutiao.com/search?keyword=比亚迪乘用车9月销量明细曝光)
1. [人从众遇到“白衬衫”安全感拉满](https://so.toutiao.com/search?keyword=人从众遇到“白衬衫”安全感拉满)
1. [子弟兵的国庆打开方式叫“坚守”](https://so.toutiao.com/search?keyword=子弟兵的国庆打开方式叫“坚守”)
1. [以色列沙特阿联酋调查迪拜航空事件](https://so.toutiao.com/search?keyword=以色列沙特阿联酋调查迪拜航空事件)
1. [年轻人国庆旅行不挤大城市了](https://so.toutiao.com/search?keyword=年轻人国庆旅行不挤大城市了)
1. [万千惠相机被盗称要跟小偷斗争到底](https://so.toutiao.com/search?keyword=万千惠相机被盗称要跟小偷斗争到底)
1. [国庆档首日《神探之痕迹》票房夺冠](https://so.toutiao.com/search?keyword=国庆档首日《神探之痕迹》票房夺冠)
1. [几十万人看完烟花秀后主动带走垃圾](https://so.toutiao.com/search?keyword=几十万人看完烟花秀后主动带走垃圾)
1. [全球市场为何上演大逆转](https://so.toutiao.com/search?keyword=全球市场为何上演大逆转)
1. [华为赛力斯为何光速“复合”](https://so.toutiao.com/search?keyword=华为赛力斯为何光速“复合”)
1. [烟花秀下爸爸肩头是孩子的VIP专座](https://so.toutiao.com/search?keyword=烟花秀下爸爸肩头是孩子的VIP专座)
1. [五星红旗映亮万里山河](https://so.toutiao.com/search?keyword=五星红旗映亮万里山河)
1. [101岁老兵天安门看升旗大喊4个万岁](https://so.toutiao.com/search?keyword=101岁老兵天安门看升旗大喊4个万岁)
1. [迪拜航空事件凶手双手被绑跪登机口](https://so.toutiao.com/search?keyword=迪拜航空事件凶手双手被绑跪登机口)
1. [博主：乌克兰正被拖入消耗战](https://so.toutiao.com/search?keyword=博主：乌克兰正被拖入消耗战)
1. [菲副总统莎拉的兄弟也被查了](https://so.toutiao.com/search?keyword=菲副总统莎拉的兄弟也被查了)
1. [以方将审查飞往以色列航班飞行员身份](https://so.toutiao.com/search?keyword=以方将审查飞往以色列航班飞行员身份)
1. [山东菏泽用一座城的热情祝福祖国](https://so.toutiao.com/search?keyword=山东菏泽用一座城的热情祝福祖国)
1. [昨日中国军团亚运揽4金](https://so.toutiao.com/search?keyword=昨日中国军团亚运揽4金)
1. [新疆光伏工地被环保罚50万？假的](https://so.toutiao.com/search?keyword=新疆光伏工地被环保罚50万？假的)
1. [四川广元漫天烟花绽放](https://so.toutiao.com/search?keyword=四川广元漫天烟花绽放)
1. [闫妮坦言一直单身：不介意相亲](https://so.toutiao.com/search?keyword=闫妮坦言一直单身：不介意相亲)
1. [无证酒驾男孩被查后问能不能叫我爸去](https://so.toutiao.com/search?keyword=无证酒驾男孩被查后问能不能叫我爸去)
1. [伊拉克民众欢庆美军撤离上街放烟花](https://so.toutiao.com/search?keyword=伊拉克民众欢庆美军撤离上街放烟花)
1. [菲防长鼓噪建设远征海军意欲何为](https://so.toutiao.com/search?keyword=菲防长鼓噪建设远征海军意欲何为)
1. [中国田径17金14银8铜收官](https://so.toutiao.com/search?keyword=中国田径17金14银8铜收官)
1. [猪油真是血管“杀手”吗](https://so.toutiao.com/search?keyword=猪油真是血管“杀手”吗)
1. [77秒快闪影像见证“中国红”](https://so.toutiao.com/search?keyword=77秒快闪影像见证“中国红”)
1. [普京暗示核武器可能被使用](https://so.toutiao.com/search?keyword=普京暗示核武器可能被使用)
1. [第33届金鹰奖落幕 创新破界全民追更](https://so.toutiao.com/search?keyword=第33届金鹰奖落幕%20创新破界全民追更)
1. [李家超晒和太太看维港国庆烟花合影](https://so.toutiao.com/search?keyword=李家超晒和太太看维港国庆烟花合影)
1. [刘涛陈妍希张智霖等同唱我的祖国](https://so.toutiao.com/search?keyword=刘涛陈妍希张智霖等同唱我的祖国)
1. [博主：华为又捅破了技术天花板](https://so.toutiao.com/search?keyword=博主：华为又捅破了技术天花板)
1. [369面五星红旗背后的城市治理逻辑](https://so.toutiao.com/search?keyword=369面五星红旗背后的城市治理逻辑)
1. [老挝班根机场正式挂牌有何战略意义](https://so.toutiao.com/search?keyword=老挝班根机场正式挂牌有何战略意义)
1. [爸爸扛60多斤女儿30多分钟看升旗](https://so.toutiao.com/search?keyword=爸爸扛60多斤女儿30多分钟看升旗)
1. [荣耀Magic9系列首销销量亮眼](https://so.toutiao.com/search?keyword=荣耀Magic9系列首销销量亮眼)
1. [马丽被问假牙咬脸疼还是沈腾掐脸疼](https://so.toutiao.com/search?keyword=马丽被问假牙咬脸疼还是沈腾掐脸疼)
1. [电商女装卖10件退8件已成常态](https://so.toutiao.com/search?keyword=电商女装卖10件退8件已成常态)
1. [介文汲警示小心民进党竞选作弊](https://so.toutiao.com/search?keyword=介文汲警示小心民进党竞选作弊)
1. [爸爸举娃看烟花地铁小姐姐默默托底](https://so.toutiao.com/search?keyword=爸爸举娃看烟花地铁小姐姐默默托底)
1. [比亚迪9月汽车销量463561辆](https://so.toutiao.com/search?keyword=比亚迪9月汽车销量463561辆)
1. [沙特及其新盟友能否挡住胡塞武装](https://so.toutiao.com/search?keyword=沙特及其新盟友能否挡住胡塞武装)
1. [歌手侯浪救场李克勤爆火粉丝涨到27万](https://so.toutiao.com/search?keyword=歌手侯浪救场李克勤爆火粉丝涨到27万)
1. [华为Mate90全系搭载旗舰韬芯片](https://so.toutiao.com/search?keyword=华为Mate90全系搭载旗舰韬芯片)
1. [中国军人用行动书写忠诚](https://so.toutiao.com/search?keyword=中国军人用行动书写忠诚)
1. [谁在争夺迪拜航空事件真相的解释权](https://so.toutiao.com/search?keyword=谁在争夺迪拜航空事件真相的解释权)
1. [Mate90开售华为门店人从众](https://so.toutiao.com/search?keyword=Mate90开售华为门店人从众)
1. [车辆故障被困高速 民警暖心帮助](https://so.toutiao.com/search?keyword=车辆故障被困高速%20民警暖心帮助)
1. [国庆出行有车辆仅剩1%电量后“趴窝”](https://so.toutiao.com/search?keyword=国庆出行有车辆仅剩1%电量后“趴窝”)
1. [天安门前看升旗队伍一眼望不到头](https://so.toutiao.com/search?keyword=天安门前看升旗队伍一眼望不到头)
1. [房贷贴息落地客户房东都坐不住了](https://so.toutiao.com/search?keyword=房贷贴息落地客户房东都坐不住了)
1. [华为与赛力斯达成新五年合作](https://so.toutiao.com/search?keyword=华为与赛力斯达成新五年合作)
1. [亚运会进入尾声 中国代表团继续冲金](https://so.toutiao.com/search?keyword=亚运会进入尾声%20中国代表团继续冲金)
1. [女子骑车压速别车被后车司机踹翻](https://so.toutiao.com/search?keyword=女子骑车压速别车被后车司机踹翻)
1. [C罗离开后葡萄牙队7号球衣光速易主](https://so.toutiao.com/search?keyword=C罗离开后葡萄牙队7号球衣光速易主)
1. [迪拜客机遇恐怖袭击未遂事件背后](https://so.toutiao.com/search?keyword=迪拜客机遇恐怖袭击未遂事件背后)
1. [车主等3小时掐点下高速省257元](https://so.toutiao.com/search?keyword=车主等3小时掐点下高速省257元)
1. [美国星舰成功入轨接下来又会做什么](https://so.toutiao.com/search?keyword=美国星舰成功入轨接下来又会做什么)
1. [亚运会10月2日看点](https://so.toutiao.com/search?keyword=亚运会10月2日看点)
1. [小米汽车月交付首破4万辆 凭什么](https://so.toutiao.com/search?keyword=小米汽车月交付首破4万辆%20凭什么)
1. [牛弹琴：迪拜航空客机事故的8个细节](https://so.toutiao.com/search?keyword=牛弹琴：迪拜航空客机事故的8个细节)
1. [国庆假期高速充电当心“占位费”](https://so.toutiao.com/search?keyword=国庆假期高速充电当心“占位费”)
1. [胖东来将实行每天7小时工作制](https://so.toutiao.com/search?keyword=胖东来将实行每天7小时工作制)
1. [白鹿祝福祖国生日快乐](https://so.toutiao.com/search?keyword=白鹿祝福祖国生日快乐)
1. [节后A股会继续涨吗](https://so.toutiao.com/search?keyword=节后A股会继续涨吗)
1. [刀郎献唱《什么意思夫妇》片尾曲](https://so.toutiao.com/search?keyword=刀郎献唱《什么意思夫妇》片尾曲)
1. [武汉长江烟花秀](https://so.toutiao.com/search?keyword=武汉长江烟花秀)
1. [中国两只大熊猫抵美让日媒集体破防](https://so.toutiao.com/search?keyword=中国两只大熊猫抵美让日媒集体破防)
1. [华为Mate90售价5999元起](https://so.toutiao.com/search?keyword=华为Mate90售价5999元起)
1. [怎么看日本前外相率日企高管访华](https://so.toutiao.com/search?keyword=怎么看日本前外相率日企高管访华)
1. [世界为什么信赖中国](https://so.toutiao.com/search?keyword=世界为什么信赖中国)
1. [余承东：华为已实现连续可变光圈](https://so.toutiao.com/search?keyword=余承东：华为已实现连续可变光圈)
1. [媒体：一江烟火 璀璨武汉](https://so.toutiao.com/search?keyword=媒体：一江烟火%20璀璨武汉)
1. [亚运会射击项目中国队16金8银4铜](https://so.toutiao.com/search?keyword=亚运会射击项目中国队16金8银4铜)
1. [国庆高速充电“大考”](https://so.toutiao.com/search?keyword=国庆高速充电“大考”)
1. [律师：司机踹翻孕妇车或构成寻衅滋事](https://so.toutiao.com/search?keyword=律师：司机踹翻孕妇车或构成寻衅滋事)
1. [川籍体育健儿名古屋亚运会已揽18金](https://so.toutiao.com/search?keyword=川籍体育健儿名古屋亚运会已揽18金)
1. [“新债王”罕见警告美股](https://so.toutiao.com/search?keyword=“新债王”罕见警告美股)
1. [业内：全球黄金市场“没有中间地带”](https://so.toutiao.com/search?keyword=业内：全球黄金市场“没有中间地带”)
1. [多哈亚运会举办时间仍存变数](https://so.toutiao.com/search?keyword=多哈亚运会举办时间仍存变数)
1. [南昌举行国庆烟花晚会](https://so.toutiao.com/search?keyword=南昌举行国庆烟花晚会)
1. [香港举行国庆烟花汇演](https://so.toutiao.com/search?keyword=香港举行国庆烟花汇演)
1. [WTT中国大满贯观众齐唱《歌唱祖国》](https://so.toutiao.com/search?keyword=WTT中国大满贯观众齐唱《歌唱祖国》)
1. [张雪为啥不跑MotoGP](https://so.toutiao.com/search?keyword=张雪为啥不跑MotoGP)
1. [博主：刘学义正在走出自己的古装路](https://so.toutiao.com/search?keyword=博主：刘学义正在走出自己的古装路)
1. [群山巍峨壮美如画锦绣神州多姿多彩](https://so.toutiao.com/search?keyword=群山巍峨壮美如画锦绣神州多姿多彩)
1. [SUV占用高速应急车道行驶1公里被拦](https://so.toutiao.com/search?keyword=SUV占用高速应急车道行驶1公里被拦)
1. [“05后”“10后”健儿闪耀亚运会](https://so.toutiao.com/search?keyword=“05后”“10后”健儿闪耀亚运会)
1. [假期自驾出行拥堵应急清单请收好](https://so.toutiao.com/search?keyword=假期自驾出行拥堵应急清单请收好)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sat Oct 03 2026 02:23:44 GMT+0800 (China Standard Time) -->

1. [江歌妈妈发长文尘埃终将落定](https://www.zhihu.com/search?q=%E6%B1%9F%E6%AD%8C%E5%A6%88%E5%A6%88%E5%8F%91%E9%95%BF%E6%96%87%E5%B0%98%E5%9F%83%E7%BB%88%E5%B0%86%E8%90%BD%E5%AE%9A)
1. [中国男足 0-5 巴勒斯坦](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E8%B6%B3%200-5%20%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6)
1. [原央视主持人阿丘回应被通报](https://www.zhihu.com/search?q=%E5%8E%9F%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E9%98%BF%E4%B8%98%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%80%9A%E6%8A%A5)
1. [华为与赛力斯达成新五年合作](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E4%B8%8E%E8%B5%9B%E5%8A%9B%E6%96%AF%E8%BE%BE%E6%88%90%E6%96%B0%E4%BA%94%E5%B9%B4%E5%90%88%E4%BD%9C)
1. [迪拜航空确认航班发生事故](https://www.zhihu.com/search?q=%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E7%A1%AE%E8%AE%A4%E8%88%AA%E7%8F%AD%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85)
1. [东航回应网传空姐跪地道歉](https://www.zhihu.com/search?q=%E4%B8%9C%E8%88%AA%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E7%A9%BA%E5%A7%90%E8%B7%AA%E5%9C%B0%E9%81%93%E6%AD%89)
1. [王楚钦：不知道为什么就是感觉累](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%EF%BC%9A%E4%B8%8D%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B0%B1%E6%98%AF%E6%84%9F%E8%A7%89%E7%B4%AF)
1. [江苏高考作文《衬衫的价格为 9 磅 15 便士》爆火](https://www.zhihu.com/search?q=%E6%B1%9F%E8%8B%8F%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%E3%80%8A%E8%A1%AC%E8%A1%AB%E7%9A%84%E4%BB%B7%E6%A0%BC%E4%B8%BA%209%20%E7%A3%85%2015%20%E4%BE%BF%E5%A3%AB%E3%80%8B%E7%88%86%E7%81%AB)
1. [女装网店开始用防拆带了](https://www.zhihu.com/search?q=%E5%A5%B3%E8%A3%85%E7%BD%91%E5%BA%97%E5%BC%80%E5%A7%8B%E7%94%A8%E9%98%B2%E6%8B%86%E5%B8%A6%E4%BA%86)
1. [孕妇骑车别车被司机踹翻](https://www.zhihu.com/search?q=%E5%AD%95%E5%A6%87%E9%AA%91%E8%BD%A6%E5%88%AB%E8%BD%A6%E8%A2%AB%E5%8F%B8%E6%9C%BA%E8%B8%B9%E7%BF%BB)
1. [葡萄牙首次在无C罗情况下打进4球](https://www.zhihu.com/search?q=%E8%91%A1%E8%90%84%E7%89%99%E9%A6%96%E6%AC%A1%E5%9C%A8%E6%97%A0C%E7%BD%97%E6%83%85%E5%86%B5%E4%B8%8B%E6%89%93%E8%BF%9B4%E7%90%83)
1. [DeepSeek开源昇腾基础组件](https://www.zhihu.com/search?q=DeepSeek%E5%BC%80%E6%BA%90%E6%98%87%E8%85%BE%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sat Oct 03 2026 02:27:03 GMT+0800 (China Standard Time) -->

1. [CFA 友谊赛，中国男足 0-5 巴勒斯坦，如何评价本场比赛？](https://www.zhihu.com/question/2089437755591714000)
1. [中国的AI短剧发展得如火如荼，而国外AI短剧却没怎么发展起来，是什么原因？](https://www.zhihu.com/question/2087643546463613200)
1. [网友称小诊所看病好得快的原因是采用了抗生素、激素等猛药压制症状的疗法，是真的吗？会对健康造成哪些影响？](https://www.zhihu.com/question/2088709467814585600)
1. [为什么很少有可乐造假？](https://www.zhihu.com/question/310184018)
1. [莫氏鸡煲总店员工从180人减至30多人，国庆假期上座率仅六成，为啥网红餐厅总难逃流量暴跌的命运？](https://www.zhihu.com/question/2089354143802418200)
1. [如果英雄联盟有个英雄的被动是“你的所有装备价格翻倍但获得双倍属性”厉害吗？](https://www.zhihu.com/question/2061655448890111500)
1. [继巨型吊牌之后，女装网店启用「防拆带」应对恶意退货，这会更有效吗？有人说市场信任崩溃了，为什么会这样？](https://www.zhihu.com/question/2088728472214684700)
1. [为什么现在的rts游戏出一部暴死一部？](https://www.zhihu.com/question/2038324047910532600)
1. [如何评价小沈阳夫妇主演的喜剧电影《什么意思夫妇》？](https://www.zhihu.com/question/2088300737960862000)
1. [为什么中国车站叫“站”而日韩朝叫“驿”?](https://www.zhihu.com/question/627161952)
1. [为什么维生素只有 ABCDE和K，中间跳过了 FGHIJ？](https://www.zhihu.com/question/1996498851373270000)
1. [江歌妈妈最新发文「10 年维权路，尘埃终将落定」，哪些信息值得关注？](https://www.zhihu.com/question/2088971415525356000)
1. [国足热身赛 0-5 巴勒斯坦，如何评价这场比赛主教练邵佳一的战术安排？](https://www.zhihu.com/question/2089453196381107000)
1. [孩子国庆放假，你更倾向报班还是自由玩？](https://www.zhihu.com/question/2088928170728765200)
1. [网友称高铁候补订单凌晨兑现，早上睡醒发现车已开走，12306回应可设置截止兑现时间，还有更好的解法吗？](https://www.zhihu.com/question/2089009532022125300)
1. [省钱省到了极致是一种怎样的体验？](https://www.zhihu.com/question/324259868)
1. [清华北大是本身有含金量，还是因为13亿人高考内卷出来的排名靠前的学生有含金量？](https://www.zhihu.com/question/1978164446527498000)
1. [比亚迪9月销量46.36万辆，连续数月环比增长，如何看待比亚迪目前的销量走势？](https://www.zhihu.com/question/2089066625966290400)
1. [你曾被北京哪一幕夜景震撼过？](https://www.zhihu.com/question/453573409)
1. [老师到底累不累？](https://www.zhihu.com/question/2073740252477395500)
1. [为什么上班盼放假，真放假了却有点空虚？](https://www.zhihu.com/question/2086096617938105900)
1. [《原神》至冬宫地下封印的“第三降临者的遗产”到底是什么？](https://www.zhihu.com/question/2088606636986328300)
1. [如何评价杰伦-杜伦5年2亿美元续约活塞？他跟球队有哪些恩怨情仇，和库明加等人的签约矛盾有什么不同？](https://www.zhihu.com/question/2089354634410436000)
1. [为何机械硬盘价格如此离谱？](https://www.zhihu.com/question/2082856338791707000)
1. [如何评价 10月 1 日发布的华为Mate 90系列全系旗舰τ芯片，不同版本如何选择？](https://www.zhihu.com/question/2088956328886678000)
1. [为什么说好团队是带出来的，不是管出来的？](https://www.zhihu.com/question/2042438170449596700)
1. [地球上的所有动物都没有穿衣服，还不是活得好好的，为什么只有我们人类才穿衣服，难道不穿衣服就活不了吗？](https://www.zhihu.com/question/2082064671708922600)
1. [为什么现在新入行金融行业的毕业生更加喜欢量化而不喜欢主观多头策略？](https://www.zhihu.com/question/10341004625)
1. [我是一个资深程序员，30岁，每天都用AI，现在觉得Agent的能力太强大了，我未来的路在哪？](https://www.zhihu.com/question/2083222866280171300)
1. [有谁知道“脑雾”这种现象？如何改善？](https://www.zhihu.com/question/277844187)

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
<!-- 最后更新时间 Sat Oct 03 2026 02:32:15 GMT+0800 (China Standard Time) -->

1. [我在山河在](https://s.weibo.com//weibo?q=%23%E6%88%91%E5%9C%A8%E5%B1%B1%E6%B2%B3%E5%9C%A8%23&Refer=new_time)
1. [国足0比5惨败却让小将接受采访](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E8%B6%B30%E6%AF%945%E6%83%A8%E8%B4%A5%E5%8D%B4%E8%AE%A9%E5%B0%8F%E5%B0%86%E6%8E%A5%E5%8F%97%E9%87%87%E8%AE%BF%23&t=31&band_rank=1&Refer=top)
1. [国足首发身价不及巴勒斯坦一半](https://s.weibo.com//weibo?q=%E5%9B%BD%E8%B6%B3%E9%A6%96%E5%8F%91%E8%BA%AB%E4%BB%B7%E4%B8%8D%E5%8F%8A%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E4%B8%80%E5%8D%8A&t=31&band_rank=2&Refer=top)
1. [多部门多措并举保障国庆公路出行](https://s.weibo.com//weibo?q=%23%E5%A4%9A%E9%83%A8%E9%97%A8%E5%A4%9A%E6%8E%AA%E5%B9%B6%E4%B8%BE%E4%BF%9D%E9%9A%9C%E5%9B%BD%E5%BA%86%E5%85%AC%E8%B7%AF%E5%87%BA%E8%A1%8C%23&t=31&band_rank=3&Refer=top)
1. [沈腾李小冉也没戏拍了吗](https://s.weibo.com//weibo?q=%23%E6%B2%88%E8%85%BE%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B9%9F%E6%B2%A1%E6%88%8F%E6%8B%8D%E4%BA%86%E5%90%97%23&t=31&band_rank=4&Refer=top)
1. [客机遇险细节太震撼](https://s.weibo.com//weibo?q=%E5%AE%A2%E6%9C%BA%E9%81%87%E9%99%A9%E7%BB%86%E8%8A%82%E5%A4%AA%E9%9C%87%E6%92%BC&t=31&band_rank=5&Refer=top)
1. [三甲医生回应麦琳7个月瘦了40斤](https://s.weibo.com//weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E9%BA%A6%E7%90%B37%E4%B8%AA%E6%9C%88%E7%98%A6%E4%BA%8640%E6%96%A4%23&t=31&band_rank=6&Refer=top)
1. [鹭卓向粉丝道歉](https://s.weibo.com//weibo?q=%E9%B9%AD%E5%8D%93%E5%90%91%E7%B2%89%E4%B8%9D%E9%81%93%E6%AD%89&t=31&band_rank=7&Refer=top)
1. [巴勒斯坦主帅说不评价国足防守](https://s.weibo.com//weibo?q=%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E4%B8%BB%E5%B8%85%E8%AF%B4%E4%B8%8D%E8%AF%84%E4%BB%B7%E5%9B%BD%E8%B6%B3%E9%98%B2%E5%AE%88&t=31&band_rank=8&Refer=top)
1. [王楚钦复盘亚运会](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%8D%E7%9B%98%E4%BA%9A%E8%BF%90%E4%BC%9A&t=31&band_rank=9&Refer=top)
1. [一诺尽力了](https://s.weibo.com//weibo?q=%E4%B8%80%E8%AF%BA%E5%B0%BD%E5%8A%9B%E4%BA%86&t=31&band_rank=10&Refer=top)
1. [蔡天凤碎尸案](https://s.weibo.com//weibo?q=%E8%94%A1%E5%A4%A9%E5%87%A4%E7%A2%8E%E5%B0%B8%E6%A1%88&t=31&band_rank=11&Refer=top)
1. [墨尔本车祸致中国夫妻身亡](https://s.weibo.com//weibo?q=%E5%A2%A8%E5%B0%94%E6%9C%AC%E8%BD%A6%E7%A5%B8%E8%87%B4%E4%B8%AD%E5%9B%BD%E5%A4%AB%E5%A6%BB%E8%BA%AB%E4%BA%A1&t=31&band_rank=12&Refer=top)
1. [EDG](https://s.weibo.com//weibo?q=EDG&t=31&band_rank=13&Refer=top)
1. [陈若琳有没有资格教全红婵](https://s.weibo.com//weibo?q=%E9%99%88%E8%8B%A5%E7%90%B3%E6%9C%89%E6%B2%A1%E6%9C%89%E8%B5%84%E6%A0%BC%E6%95%99%E5%85%A8%E7%BA%A2%E5%A9%B5&t=31&band_rank=14&Refer=top)
1. [王俊凯闪身步](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%97%AA%E8%BA%AB%E6%AD%A5%23&t=31&band_rank=15&Refer=top)
1. [陈若轩管健嘉晨 淘汰待定](https://s.weibo.com//weibo?q=%E9%99%88%E8%8B%A5%E8%BD%A9%E7%AE%A1%E5%81%A5%E5%98%89%E6%99%A8%20%E6%B7%98%E6%B1%B0%E5%BE%85%E5%AE%9A&t=31&band_rank=16&Refer=top)
1. [曝迪丽热巴新电影Q4开机](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E7%94%B5%E5%BD%B1Q4%E5%BC%80%E6%9C%BA%23&t=31&band_rank=17&Refer=top)
1. [偶遇S妈小S许雅钧香港逛街](https://s.weibo.com//weibo?q=%E5%81%B6%E9%81%87S%E5%A6%88%E5%B0%8FS%E8%AE%B8%E9%9B%85%E9%92%A7%E9%A6%99%E6%B8%AF%E9%80%9B%E8%A1%97&t=31&band_rank=18&Refer=top)
1. [EDG告别上海冠军赛](https://s.weibo.com//weibo?q=%23EDG%E5%91%8A%E5%88%AB%E4%B8%8A%E6%B5%B7%E5%86%A0%E5%86%9B%E8%B5%9B%23&t=31&band_rank=19&Refer=top)
1. [国足惨败后防集体梦游](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E8%B6%B3%E6%83%A8%E8%B4%A5%E5%90%8E%E9%98%B2%E9%9B%86%E4%BD%93%E6%A2%A6%E6%B8%B8%23&t=31&band_rank=20&Refer=top)
1. [顾廷烨 二婚男](https://s.weibo.com//weibo?q=%E9%A1%BE%E5%BB%B7%E7%83%A8%20%E4%BA%8C%E5%A9%9A%E7%94%B7&t=31&band_rank=21&Refer=top)
1. [女生自助餐暴食开腹取出三斤残渣](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E7%94%9F%E8%87%AA%E5%8A%A9%E9%A4%90%E6%9A%B4%E9%A3%9F%E5%BC%80%E8%85%B9%E5%8F%96%E5%87%BA%E4%B8%89%E6%96%A4%E6%AE%8B%E6%B8%A3%23&t=31&band_rank=22&Refer=top)
1. [香港名媛蔡天凤碎尸案细节](https://s.weibo.com//weibo?q=%23%E9%A6%99%E6%B8%AF%E5%90%8D%E5%AA%9B%E8%94%A1%E5%A4%A9%E5%87%A4%E7%A2%8E%E5%B0%B8%E6%A1%88%E7%BB%86%E8%8A%82%23&t=31&band_rank=23&Refer=top)
1. [妈妈去世第四年翻到她朋友圈](https://s.weibo.com//weibo?q=%E5%A6%88%E5%A6%88%E5%8E%BB%E4%B8%96%E7%AC%AC%E5%9B%9B%E5%B9%B4%E7%BF%BB%E5%88%B0%E5%A5%B9%E6%9C%8B%E5%8F%8B%E5%9C%88&t=31&band_rank=24&Refer=top)
1. [67岁阿姨花光积蓄去南极肿瘤变小了](https://s.weibo.com//weibo?q=%2367%E5%B2%81%E9%98%BF%E5%A7%A8%E8%8A%B1%E5%85%89%E7%A7%AF%E8%93%84%E5%8E%BB%E5%8D%97%E6%9E%81%E8%82%BF%E7%98%A4%E5%8F%98%E5%B0%8F%E4%BA%86%23&t=31&band_rank=25&Refer=top)
1. [康康 XLG](https://s.weibo.com//weibo?q=%E5%BA%B7%E5%BA%B7%20XLG&t=31&band_rank=26&Refer=top)
1. [亲密关系甚至不如上班尊重人](https://s.weibo.com//weibo?q=%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E7%94%9A%E8%87%B3%E4%B8%8D%E5%A6%82%E4%B8%8A%E7%8F%AD%E5%B0%8A%E9%87%8D%E4%BA%BA&t=31&band_rank=27&Refer=top)
1. [三文鱼一出生就是这个样子](https://s.weibo.com//weibo?q=%E4%B8%89%E6%96%87%E9%B1%BC%E4%B8%80%E5%87%BA%E7%94%9F%E5%B0%B1%E6%98%AF%E8%BF%99%E4%B8%AA%E6%A0%B7%E5%AD%90&t=31&band_rank=28&Refer=top)
1. [兰香如故袁绍辉去世](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%A2%81%E7%BB%8D%E8%BE%89%E5%8E%BB%E4%B8%96%23&t=31&band_rank=29&Refer=top)
1. [亚运会兴奋剂违规已有6例](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%85%B4%E5%A5%8B%E5%89%82%E8%BF%9D%E8%A7%84%E5%B7%B2%E6%9C%896%E4%BE%8B%23&t=31&band_rank=30&Refer=top)
1. [Smoggy EDG](https://s.weibo.com//weibo?q=Smoggy%20EDG&t=31&band_rank=31&Refer=top)
1. [贾乃亮甜馨国庆出游照](https://s.weibo.com//weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E7%94%9C%E9%A6%A8%E5%9B%BD%E5%BA%86%E5%87%BA%E6%B8%B8%E7%85%A7%23&t=31&band_rank=32&Refer=top)
1. [张馨予化完雀斑妆问老公好不好看](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E5%8C%96%E5%AE%8C%E9%9B%80%E6%96%91%E5%A6%86%E9%97%AE%E8%80%81%E5%85%AC%E5%A5%BD%E4%B8%8D%E5%A5%BD%E7%9C%8B%23&t=31&band_rank=33&Refer=top)
1. [孙颖莎欢迎晚宴图](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AC%A2%E8%BF%8E%E6%99%9A%E5%AE%B4%E5%9B%BE%23&t=31&band_rank=34&Refer=top)
1. [王一博几乎贴脸经过的距离](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%87%A0%E4%B9%8E%E8%B4%B4%E8%84%B8%E7%BB%8F%E8%BF%87%E7%9A%84%E8%B7%9D%E7%A6%BB%23&t=31&band_rank=35&Refer=top)
1. [黄景瑜王安宇白敬亭最近忙的连轴转](https://s.weibo.com//weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E7%8E%8B%E5%AE%89%E5%AE%87%E7%99%BD%E6%95%AC%E4%BA%AD%E6%9C%80%E8%BF%91%E5%BF%99%E7%9A%84%E8%BF%9E%E8%BD%B4%E8%BD%AC%23&t=31&band_rank=36&Refer=top)
1. [德约科维奇晋级中网八强](https://s.weibo.com//weibo?q=%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87%E6%99%8B%E7%BA%A7%E4%B8%AD%E7%BD%91%E5%85%AB%E5%BC%BA&t=31&band_rank=37&Refer=top)
1. [纪梵希大秀](https://s.weibo.com//weibo?q=%E7%BA%AA%E6%A2%B5%E5%B8%8C%E5%A4%A7%E7%A7%80&t=31&band_rank=38&Refer=top)
1. [AG超玩会轮换钟意一诺](https://s.weibo.com//weibo?q=AG%E8%B6%85%E7%8E%A9%E4%BC%9A%E8%BD%AE%E6%8D%A2%E9%92%9F%E6%84%8F%E4%B8%80%E8%AF%BA&t=31&band_rank=39&Refer=top)
1. [王一博惠英红小水林阳合照](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%83%A0%E8%8B%B1%E7%BA%A2%E5%B0%8F%E6%B0%B4%E6%9E%97%E9%98%B3%E5%90%88%E7%85%A7%23&t=31&band_rank=40&Refer=top)
1. [央视赞Mate90争气机换上争气芯](https://s.weibo.com//weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B5%9EMate90%E4%BA%89%E6%B0%94%E6%9C%BA%E6%8D%A2%E4%B8%8A%E4%BA%89%E6%B0%94%E8%8A%AF%23&t=31&band_rank=41&Refer=top)
1. [德约科维奇逆转布云朝克特](https://s.weibo.com//weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87%E9%80%86%E8%BD%AC%E5%B8%83%E4%BA%91%E6%9C%9D%E5%85%8B%E7%89%B9%23&t=31&band_rank=42&Refer=top)
1. [众主播看CN赛区四队全部淘汰反应](https://s.weibo.com//weibo?q=%23%E4%BC%97%E4%B8%BB%E6%92%AD%E7%9C%8BCN%E8%B5%9B%E5%8C%BA%E5%9B%9B%E9%98%9F%E5%85%A8%E9%83%A8%E6%B7%98%E6%B1%B0%E5%8F%8D%E5%BA%94%23&t=31&band_rank=43&Refer=top)
1. [放过康康](https://s.weibo.com//weibo?q=%E6%94%BE%E8%BF%87%E5%BA%B7%E5%BA%B7&t=31&band_rank=44&Refer=top)
1. [生孩子的是兰香掐人中的是林锦岐](https://s.weibo.com//weibo?q=%23%E7%94%9F%E5%AD%A9%E5%AD%90%E7%9A%84%E6%98%AF%E5%85%B0%E9%A6%99%E6%8E%90%E4%BA%BA%E4%B8%AD%E7%9A%84%E6%98%AF%E6%9E%97%E9%94%A6%E5%B2%90%23&t=31&band_rank=45&Refer=top)
1. [肖战得闲谨制收视率](https://s.weibo.com//weibo?q=%E8%82%96%E6%88%98%E5%BE%97%E9%97%B2%E8%B0%A8%E5%88%B6%E6%94%B6%E8%A7%86%E7%8E%87&t=31&band_rank=46&Refer=top)
1. [布云朝克特vs德约科维奇](https://s.weibo.com//weibo?q=%23%E5%B8%83%E4%BA%91%E6%9C%9D%E5%85%8B%E7%89%B9vs%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87%23&t=31&band_rank=47&Refer=top)
1. [VCTCN四队全部淘汰](https://s.weibo.com//weibo?q=%23VCTCN%E5%9B%9B%E9%98%9F%E5%85%A8%E9%83%A8%E6%B7%98%E6%B1%B0%23&t=31&band_rank=48&Refer=top)
1. [汪苏泷演唱会把眼镜片给扣下来了](https://s.weibo.com//weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%8A%E7%9C%BC%E9%95%9C%E7%89%87%E7%BB%99%E6%89%A3%E4%B8%8B%E6%9D%A5%E4%BA%86%23&t=31&band_rank=49&Refer=top)
1. [孙楠满江张彬彬曾辉怎么了](https://s.weibo.com//weibo?q=%23%E5%AD%99%E6%A5%A0%E6%BB%A1%E6%B1%9F%E5%BC%A0%E5%BD%AC%E5%BD%AC%E6%9B%BE%E8%BE%89%E6%80%8E%E4%B9%88%E4%BA%86%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
