# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-06 06:39:55

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
<!-- 最后更新时间 Tue Oct 06 2026 07:21:28 GMT+0800 (China Standard Time) -->

1. [中方10分钟收网缅北四大家族重要成员](https://so.toutiao.com/search?keyword=中方10分钟收网缅北四大家族重要成员)
1. [第一批返程的“大聪明”又失算了](https://so.toutiao.com/search?keyword=第一批返程的“大聪明”又失算了)
1. [假期过半，在照片中看见活力中国](https://so.toutiao.com/search?keyword=假期过半，在照片中看见活力中国)
1. [被执行死刑的巫鸿明、白应苍出镜](https://so.toutiao.com/search?keyword=被执行死刑的巫鸿明、白应苍出镜)
1. [金价大跌后国庆上海金店排长队](https://so.toutiao.com/search?keyword=金价大跌后国庆上海金店排长队)
1. [年轻人开始不买景区冤种三件套了](https://so.toutiao.com/search?keyword=年轻人开始不买景区冤种三件套了)
1. [明珍珍临刑前画面曝光](https://so.toutiao.com/search?keyword=明珍珍临刑前画面曝光)
1. [大兴安岭的秋看一眼就醉了](https://so.toutiao.com/search?keyword=大兴安岭的秋看一眼就醉了)
1. [老外动作过于热情女特警礼貌拒绝](https://so.toutiao.com/search?keyword=老外动作过于热情女特警礼貌拒绝)
1. [缅北电诈头目家中钱多到发霉](https://so.toutiao.com/search?keyword=缅北电诈头目家中钱多到发霉)
1. [医生辟谣高铁座椅或为HPV感染重灾区](https://so.toutiao.com/search?keyword=医生辟谣高铁座椅或为HPV感染重灾区)
1. [超10万份孕妇血样被偷运出境](https://so.toutiao.com/search?keyword=超10万份孕妇血样被偷运出境)
1. [中方曾三次约见缅北四大家族代表](https://so.toutiao.com/search?keyword=中方曾三次约见缅北四大家族代表)
1. [巨型“充电宝”驶进多地服务区](https://so.toutiao.com/search?keyword=巨型“充电宝”驶进多地服务区)
1. [专家揭秘心血管“隐形杀手”](https://so.toutiao.com/search?keyword=专家揭秘心血管“隐形杀手”)
1. [缅北电诈回流人员自述被割肾经历](https://so.toutiao.com/search?keyword=缅北电诈回流人员自述被割肾经历)
1. [郑合惠子：不强行共情杜翠雀的恶](https://so.toutiao.com/search?keyword=郑合惠子：不强行共情杜翠雀的恶)
1. [冲绳知事谈驻日美军杀人案多次发笑](https://so.toutiao.com/search?keyword=冲绳知事谈驻日美军杀人案多次发笑)
1. [鲍军峰被抓画面曝光](https://so.toutiao.com/search?keyword=鲍军峰被抓画面曝光)
1. [诺奖得主研究如何“为大脑装开关”](https://so.toutiao.com/search?keyword=诺奖得主研究如何“为大脑装开关”)
1. [王冰冰现场观看郑钦文比赛](https://so.toutiao.com/search?keyword=王冰冰现场观看郑钦文比赛)
1. [明学昌畏罪自杀身亡照片曝光](https://so.toutiao.com/search?keyword=明学昌畏罪自杀身亡照片曝光)
1. [亚运国足主帅称这代球员有望进世界杯](https://so.toutiao.com/search?keyword=亚运国足主帅称这代球员有望进世界杯)
1. [孙颖莎重返世排第一后迎首胜](https://so.toutiao.com/search?keyword=孙颖莎重返世排第一后迎首胜)
1. [中国航协：乘务员人格尊严不容践踏](https://so.toutiao.com/search?keyword=中国航协：乘务员人格尊严不容践踏)
1. [央视公开佤邦副总司令落网画面](https://so.toutiao.com/search?keyword=央视公开佤邦副总司令落网画面)
1. [全国游客在武汉玩嗨了](https://so.toutiao.com/search?keyword=全国游客在武汉玩嗨了)
1. [日本对美国抗议有用吗](https://so.toutiao.com/search?keyword=日本对美国抗议有用吗)
1. [俄方称德总理访乌是“血腥公关”](https://so.toutiao.com/search?keyword=俄方称德总理访乌是“血腥公关”)
1. [长春队夺首届“东北超”冠军](https://so.toutiao.com/search?keyword=长春队夺首届“东北超”冠军)
1. [边境民警谈“望缅止步”过往眼含热泪](https://so.toutiao.com/search?keyword=边境民警谈“望缅止步”过往眼含热泪)
1. [美日导弹将部署与那国岛距台110公里](https://so.toutiao.com/search?keyword=美日导弹将部署与那国岛距台110公里)
1. [动作演员何麦离世](https://so.toutiao.com/search?keyword=动作演员何麦离世)
1. [民警冒果敢战事风险带回三具遗体](https://so.toutiao.com/search?keyword=民警冒果敢战事风险带回三具遗体)
1. [《变形计》李勒优回应与“晋妈”关系](https://so.toutiao.com/search?keyword=《变形计》李勒优回应与“晋妈”关系)
1. [国庆长假把时间留给家人](https://so.toutiao.com/search?keyword=国庆长假把时间留给家人)
1. [央视曝光缅北明家电诈人员“处决地”](https://so.toutiao.com/search?keyword=央视曝光缅北明家电诈人员“处决地”)
1. [德国援乌还能持续多久](https://so.toutiao.com/search?keyword=德国援乌还能持续多久)
1. [国庆节中国人海外存在感“拉满”](https://so.toutiao.com/search?keyword=国庆节中国人海外存在感“拉满”)
1. [游客到内蒙古游玩第一件事给车加满油](https://so.toutiao.com/search?keyword=游客到内蒙古游玩第一件事给车加满油)
1. [学者：高市对美四条要求都落不了地](https://so.toutiao.com/search?keyword=学者：高市对美四条要求都落不了地)
1. [泽连斯基称仍希望获得金牛座导弹](https://so.toutiao.com/search?keyword=泽连斯基称仍希望获得金牛座导弹)
1. [博主：出门旅游别当冤大头](https://so.toutiao.com/search?keyword=博主：出门旅游别当冤大头)
1. [格力技工学校报到现场排起长队](https://so.toutiao.com/search?keyword=格力技工学校报到现场排起长队)
1. [评论员：两岸走向统一是历史必然](https://so.toutiao.com/search?keyword=评论员：两岸走向统一是历史必然)
1. [美CEO投资亏超1亿美元杀妻后自杀](https://so.toutiao.com/search?keyword=美CEO投资亏超1亿美元杀妻后自杀)
1. [大V：菲律宾“碰瓷”剧本演不下去了](https://so.toutiao.com/search?keyword=大V：菲律宾“碰瓷”剧本演不下去了)
1. [印度河成印巴新博弈前线](https://so.toutiao.com/search?keyword=印度河成印巴新博弈前线)
1. [中国汽车为何在阿根廷“杀疯了”](https://so.toutiao.com/search?keyword=中国汽车为何在阿根廷“杀疯了”)
1. [解放军警告驱离菲律宾飞机](https://so.toutiao.com/search?keyword=解放军警告驱离菲律宾飞机)
1. [台媒：解放军17艘船舰位台海周边活动](https://so.toutiao.com/search?keyword=台媒：解放军17艘船舰位台海周边活动)
1. [央视迎来两位新主播](https://so.toutiao.com/search?keyword=央视迎来两位新主播)
1. [日本罕见1天3次向美国强烈抗议](https://so.toutiao.com/search?keyword=日本罕见1天3次向美国强烈抗议)
1. [德约晋级中网决赛将战德米纳尔](https://so.toutiao.com/search?keyword=德约晋级中网决赛将战德米纳尔)
1. [中网球场99.2%上座率震撼德约科维奇](https://so.toutiao.com/search?keyword=中网球场99.2%上座率震撼德约科维奇)
1. [名嘴谈高市若坚持涉台错误言论后果](https://so.toutiao.com/search?keyword=名嘴谈高市若坚持涉台错误言论后果)
1. [鸿蒙离一亿用户还有多远](https://so.toutiao.com/search?keyword=鸿蒙离一亿用户还有多远)
1. [以色列纪念新一轮巴以冲突三周年](https://so.toutiao.com/search?keyword=以色列纪念新一轮巴以冲突三周年)
1. [重庆酉阳发生盗矿案件 7人死亡](https://so.toutiao.com/search?keyword=重庆酉阳发生盗矿案件%207人死亡)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Oct 06 2026 10:56:37 GMT+0800 (China Standard Time) -->

1. [李飞飞称十年后只剩两类劳动](https://www.zhihu.com/search?q=%E6%9D%8E%E9%A3%9E%E9%A3%9E%E7%A7%B0%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%AA%E5%89%A9%E4%B8%A4%E7%B1%BB%E5%8A%B3%E5%8A%A8)
1. [纪录片《缅北电诈覆灭纪实》首播](https://www.zhihu.com/search?q=%E7%BA%AA%E5%BD%95%E7%89%87%E3%80%8A%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E8%A6%86%E7%81%AD%E7%BA%AA%E5%AE%9E%E3%80%8B%E9%A6%96%E6%92%AD)
1. [超10万份孕妇血样被偷运出境](https://www.zhihu.com/search?q=%E8%B6%8510%E4%B8%87%E4%BB%BD%E5%AD%95%E5%A6%87%E8%A1%80%E6%A0%B7%E8%A2%AB%E5%81%B7%E8%BF%90%E5%87%BA%E5%A2%83)
1. [诺贝尔物理学奖预测](https://www.zhihu.com/search?q=%E8%AF%BA%E8%B4%9D%E5%B0%94%E7%89%A9%E7%90%86%E5%AD%A6%E5%A5%96%E9%A2%84%E6%B5%8B)
1. [巴勒斯坦球员向国足道歉](https://www.zhihu.com/search?q=%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E7%90%83%E5%91%98%E5%90%91%E5%9B%BD%E8%B6%B3%E9%81%93%E6%AD%89)
1. [张家齐妈妈看见张家齐就哭](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E7%9C%8B%E8%A7%81%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%B0%B1%E5%93%AD)
1. [网红慧慧饱饱被封号](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E6%85%A7%E6%85%A7%E9%A5%B1%E9%A5%B1%E8%A2%AB%E5%B0%81%E5%8F%B7)
1. [韩国网友不满亚运夺金免兵役](https://www.zhihu.com/search?q=%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B8%8D%E6%BB%A1%E4%BA%9A%E8%BF%90%E5%A4%BA%E9%87%91%E5%85%8D%E5%85%B5%E5%BD%B9)
1. [华为与高通达成专利许可协议](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E4%B8%8E%E9%AB%98%E9%80%9A%E8%BE%BE%E6%88%90%E4%B8%93%E5%88%A9%E8%AE%B8%E5%8F%AF%E5%8D%8F%E8%AE%AE)
1. [国足0比5惨败却让小将接受采访](https://www.zhihu.com/search?q=%E5%9B%BD%E8%B6%B30%E6%AF%945%E6%83%A8%E8%B4%A5%E5%8D%B4%E8%AE%A9%E5%B0%8F%E5%B0%86%E6%8E%A5%E5%8F%97%E9%87%87%E8%AE%BF)
1. [《生化危机：爆发夜》热映](https://www.zhihu.com/search?q=%E3%80%8A%E7%94%9F%E5%8C%96%E5%8D%B1%E6%9C%BA%EF%BC%9A%E7%88%86%E5%8F%91%E5%A4%9C%E3%80%8B%E7%83%AD%E6%98%A0)
1. [普宁考生称因HIV被拒教师入职](https://www.zhihu.com/search?q=%E6%99%AE%E5%AE%81%E8%80%83%E7%94%9F%E7%A7%B0%E5%9B%A0HIV%E8%A2%AB%E6%8B%92%E6%95%99%E5%B8%88%E5%85%A5%E8%81%8C)
1. [德国教材：很多中国人没有汽车](https://www.zhihu.com/search?q=%E5%BE%B7%E5%9B%BD%E6%95%99%E6%9D%90%EF%BC%9A%E5%BE%88%E5%A4%9A%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B2%A1%E6%9C%89%E6%B1%BD%E8%BD%A6)
1. [张家齐 母女关系不可能修复了](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%20%E6%AF%8D%E5%A5%B3%E5%85%B3%E7%B3%BB%E4%B8%8D%E5%8F%AF%E8%83%BD%E4%BF%AE%E5%A4%8D%E4%BA%86)
1. [网传俄实验室发生鼠疫泄漏](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E4%BF%84%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E7%94%9F%E9%BC%A0%E7%96%AB%E6%B3%84%E6%BC%8F)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Oct 06 2026 06:39:55 GMT+0800 (China Standard Time) -->

1. [华为与高通宣布达成广泛专利许可协议，意味着什么？释放了哪些信号？](https://www.zhihu.com/question/2090468722427291000)
1. [中方工作组曾 3 次约见果敢「四大家族」代表但收效甚微，背后的深层原因是什么？](https://www.zhihu.com/question/2090445207380743700)
1. [如何评价 5 万人口的祁连县国庆迎 10 万游客，酒店民宿全满房，文旅局免费安置游客到学生宿舍？](https://www.zhihu.com/question/2090194037965677800)
1. [央视披露缅北电诈真实案例，男子讲述被割肾经历，哪些细节值得关注？](https://www.zhihu.com/question/2090396384771794200)
1. [耐克股价年内跌幅近 50%且计划裁员重组，其市场表现缘何急转直下？](https://www.zhihu.com/question/2089754786040174000)
1. [女高管称一周之内和马斯克从相爱走到「被分手」，两人共育有4个孩子，马斯克对待亲密关系是否有规律？](https://www.zhihu.com/question/2089738680290353400)
1. [水刚咽下去，口渴怎么就缓解了？身体从哪里知道我喝水了？](https://www.zhihu.com/question/2085687195193587700)
1. [医生辟谣「高铁座椅或为HPV感染重灾区」，这个说法怎么来的？坐高铁有必要使用一次性座套吗？](https://www.zhihu.com/question/2090394927318267000)
1. [香港为什么叫HK，不叫XG？](https://www.zhihu.com/question/1890042086297936100)
1. [为什么孩子明明知道做错了事，可被指出错误时第一反应不是认错，而是立刻反驳、辩解，甚至顶嘴？](https://www.zhihu.com/question/2081871879607001300)
1. [七龙珠沙鲁篇中最后决战悟空和沙鲁究竟谁更胜一筹？](https://www.zhihu.com/question/38017020)
1. [怎么评价《蜗居》里小贝不肯借6万全部存款给海萍买房的行为？](https://www.zhihu.com/question/432093354)
1. [为什么仅靠储蓄难以实现财富积累？](https://www.zhihu.com/question/2088947596031170300)
1. [为何日本的铁轨坚持不和世界统一？一直用窄轨，有什么好处？](https://www.zhihu.com/question/10602213310)
1. [2026 年巴西总统选举首轮投票无人胜出，将进行第二轮角逐，目前的形势如何？](https://www.zhihu.com/question/2090289046253840000)
1. [如何看待中国航协针对「东航空姐下跪」事件发声，呼吁广大旅客文明乘机、理性维权？](https://www.zhihu.com/question/2090527958293111000)
1. [一位数学家如何证明自己没有使用AI做论文？](https://www.zhihu.com/question/2088882471890859800)
1. [连续抛硬币出了十次正面，第十一次选反面真的更聪明吗？](https://www.zhihu.com/question/2089681731007918600)
1. [女网红参加柏林马拉松比赛，却通过骑自行车作弊，后因被当地人拍照揭发而道歉，如何看待这一现象？](https://www.zhihu.com/question/2089678812749608000)
1. [你对于 2026 年诺贝尔物理学奖的预测是什么？](https://www.zhihu.com/question/2081708619905745200)
1. [武侠游戏里“朝廷”永远不参与江湖纷争，是为了省工作量，还是因为一旦入场整个游戏逻辑就会崩塌？](https://www.zhihu.com/question/2077550471271691800)
1. [国安部通报境外组织借医疗检测非法采血样，曾有超10万份孕妇血样被偷运出境，会对生物安全产生哪些影响？](https://www.zhihu.com/question/2090049001483661800)
1. [明军有大炮，后金没有，为什么萨尔浒之战明军还输了？](https://www.zhihu.com/question/264331800)
1. [如何评价陈飞宇在电影《神探之痕迹》中的表现？](https://www.zhihu.com/question/2088948746331734500)
1. [做饭是件很有趣的事，你喜欢做饭吗？](https://www.zhihu.com/question/6462861720)
1. [在大银幕看《生化危机：爆发夜》感受如何？](https://www.zhihu.com/question/2090091281296749300)
1. [30岁女子靠AI婚庆培训年入200万，10万元内的方案仅需十几分钟生成，实际含金量如何？](https://www.zhihu.com/question/2090007164509054000)
1. [如何看待「绿灯军团」播出后引发的粉丝认为其不还原漫画的争议？如何看待漫改影视在还原原作方面的问题？](https://www.zhihu.com/question/2087854004218885400)
1. [为什么现在老外纷纷开始给游戏加中文并且设立国区最低价？](https://www.zhihu.com/question/2088409158198546700)
1. [旅途中，有哪些遗憾让你至今难以释怀？](https://www.zhihu.com/question/21038225)
1. [读书必须先读前面又臭又长序言吗？](https://www.zhihu.com/question/668141070)
1. [一个直径十厘米的圆里可以不重叠地排列多少个边长一厘米的正方形？](https://www.zhihu.com/question/450006212)
1. [2026 国庆档首日票房 1.8 亿，《神探之痕迹》7100 万领跑，如何评价这一成绩？](https://www.zhihu.com/question/2089144269315339500)
1. [各位厨神，豆腐有哪些简单易学的做法吗？](https://www.zhihu.com/question/667846701)
1. [如何评价《水浒传》里的方腊？](https://www.zhihu.com/question/345427068)
1. [为什么感觉在店里喝到的茶叶，总比自己泡的好喝呢？](https://www.zhihu.com/question/4819435077)
1. [第一性原理的原理是啥？](https://www.zhihu.com/question/2086382611375591400)
1. [到底什么叫情绪价值？](https://www.zhihu.com/question/2074835665519372300)
1. [如何评价亚运国足主帅称这代球员有望进世界杯？你觉着可能吗？](https://www.zhihu.com/question/2090368844128850200)
1. [如何评价代露娃发烧向母亲求助却被反问「别人能行你咋不行」？暴露了这段母女关系中哪些问题？](https://www.zhihu.com/question/2090180455899165200)
1. [急停开关加罩子合理吗？](https://www.zhihu.com/question/2072365868428875000)

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
<!-- 最后更新时间 Tue Oct 06 2026 06:46:10 GMT+0800 (China Standard Time) -->

1. [感悟总书记的家国情深](https://s.weibo.com//weibo?q=%23%E6%84%9F%E6%82%9F%E6%80%BB%E4%B9%A6%E8%AE%B0%E7%9A%84%E5%AE%B6%E5%9B%BD%E6%83%85%E6%B7%B1%23&Refer=new_time)
1. [未来几年能留住现金流最重要](https://s.weibo.com//weibo?q=%E6%9C%AA%E6%9D%A5%E5%87%A0%E5%B9%B4%E8%83%BD%E7%95%99%E4%BD%8F%E7%8E%B0%E9%87%91%E6%B5%81%E6%9C%80%E9%87%8D%E8%A6%81&t=31&band_rank=1&Refer=top)
1. [孙颖莎开始整顿乒乓球观赛礼仪](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%BC%80%E5%A7%8B%E6%95%B4%E9%A1%BF%E4%B9%92%E4%B9%93%E7%90%83%E8%A7%82%E8%B5%9B%E7%A4%BC%E4%BB%AA%23&t=31&band_rank=2&Refer=top)
1. [中国空心光纤网速更快了](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A9%BA%E5%BF%83%E5%85%89%E7%BA%A4%E7%BD%91%E9%80%9F%E6%9B%B4%E5%BF%AB%E4%BA%86%23&t=31&band_rank=3&Refer=top)
1. [代露娃不被同情的原因](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E4%B8%8D%E8%A2%AB%E5%90%8C%E6%83%85%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=4&Refer=top)
1. [黄金睡眠时长出炉](https://s.weibo.com//weibo?q=%23%E9%BB%84%E9%87%91%E7%9D%A1%E7%9C%A0%E6%97%B6%E9%95%BF%E5%87%BA%E7%82%89%23&t=31&band_rank=5&Refer=top)
1. [刘亦菲 掉代言](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%8E%89%E4%BB%A3%E8%A8%80&t=31&band_rank=6&Refer=top)
1. [参加过的最混乱婚礼](https://s.weibo.com//weibo?q=%E5%8F%82%E5%8A%A0%E8%BF%87%E7%9A%84%E6%9C%80%E6%B7%B7%E4%B9%B1%E5%A9%9A%E7%A4%BC&t=31&band_rank=7&Refer=top)
1. [三千的工资愣是存了80万](https://s.weibo.com//weibo?q=%23%E4%B8%89%E5%8D%83%E7%9A%84%E5%B7%A5%E8%B5%84%E6%84%A3%E6%98%AF%E5%AD%98%E4%BA%8680%E4%B8%87%23&t=31&band_rank=8&Refer=top)
1. [肖战全世界正数第一严谨之人](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%85%A8%E4%B8%96%E7%95%8C%E6%AD%A3%E6%95%B0%E7%AC%AC%E4%B8%80%E4%B8%A5%E8%B0%A8%E4%B9%8B%E4%BA%BA%23&t=31&band_rank=9&Refer=top)
1. [中国警方缅北战火下挖出同胞遗体](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AD%A6%E6%96%B9%E7%BC%85%E5%8C%97%E6%88%98%E7%81%AB%E4%B8%8B%E6%8C%96%E5%87%BA%E5%90%8C%E8%83%9E%E9%81%97%E4%BD%93%23&t=31&band_rank=10&Refer=top)
1. [王一博CHANEL大秀出图](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9ACHANEL%E5%A4%A7%E7%A7%80%E5%87%BA%E5%9B%BE%23&t=31&band_rank=11&Refer=top)
1. [谭松韵面相都变了](https://s.weibo.com//weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23&t=31&band_rank=12&Refer=top)
1. [李勒优现在正在拼豆店打工](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E7%8E%B0%E5%9C%A8%E6%AD%A3%E5%9C%A8%E6%8B%BC%E8%B1%86%E5%BA%97%E6%89%93%E5%B7%A5%23&t=31&band_rank=13&Refer=top)
1. [肖战神之十九秒](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E7%A5%9E%E4%B9%8B%E5%8D%81%E4%B9%9D%E7%A7%92%23&t=31&band_rank=14&Refer=top)
1. [代露娃多年好友发声](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E5%A4%9A%E5%B9%B4%E5%A5%BD%E5%8F%8B%E5%8F%91%E5%A3%B0%23&t=31&band_rank=15&Refer=top)
1. [建议大家买房一定要远离公园](https://s.weibo.com//weibo?q=%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E6%88%BF%E4%B8%80%E5%AE%9A%E8%A6%81%E8%BF%9C%E7%A6%BB%E5%85%AC%E5%9B%AD&t=31&band_rank=16&Refer=top)
1. [刘学义没对谭松韵用绅士手](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%B2%A1%E5%AF%B9%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%94%A8%E7%BB%85%E5%A3%AB%E6%89%8B%23&t=31&band_rank=17&Refer=top)
1. [缅北电诈园区枪决底层人员](https://s.weibo.com//weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%9E%AA%E5%86%B3%E5%BA%95%E5%B1%82%E4%BA%BA%E5%91%98%23&t=31&band_rank=18&Refer=top)
1. [想要感染HPV一定得直接接触HPV](https://s.weibo.com//weibo?q=%E6%83%B3%E8%A6%81%E6%84%9F%E6%9F%93HPV%E4%B8%80%E5%AE%9A%E5%BE%97%E7%9B%B4%E6%8E%A5%E6%8E%A5%E8%A7%A6HPV&t=31&band_rank=19&Refer=top)
1. [港媒拍到杨幂又悄悄到香港了](https://s.weibo.com//weibo?q=%23%E6%B8%AF%E5%AA%92%E6%8B%8D%E5%88%B0%E6%9D%A8%E5%B9%82%E5%8F%88%E6%82%84%E6%82%84%E5%88%B0%E9%A6%99%E6%B8%AF%E4%BA%86%23&t=31&band_rank=20&Refer=top)
1. [游客免费住宿舍学生同意了吗](https://s.weibo.com//weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%85%8D%E8%B4%B9%E4%BD%8F%E5%AE%BF%E8%88%8D%E5%AD%A6%E7%94%9F%E5%90%8C%E6%84%8F%E4%BA%86%E5%90%97%23&t=31&band_rank=21&Refer=top)
1. [刘亦菲一下子加了五个代言](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B8%80%E4%B8%8B%E5%AD%90%E5%8A%A0%E4%BA%86%E4%BA%94%E4%B8%AA%E4%BB%A3%E8%A8%80&t=31&band_rank=22&Refer=top)
1. [孙心然0比2高芙](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%BF%83%E7%84%B60%E6%AF%942%E9%AB%98%E8%8A%99%23&t=31&band_rank=23&Refer=top)
1. [张居正 胡歌](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%B1%85%E6%AD%A3%20%E8%83%A1%E6%AD%8C&t=31&band_rank=24&Refer=top)
1. [男孩买3瓶饮料连中71瓶](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%A9%E4%B9%B03%E7%93%B6%E9%A5%AE%E6%96%99%E8%BF%9E%E4%B8%AD71%E7%93%B6%23&t=31&band_rank=25&Refer=top)
1. [李勒优回应](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%9B%9E%E5%BA%94%23&t=31&band_rank=26&Refer=top)
1. [中网](https://s.weibo.com//weibo?q=%E4%B8%AD%E7%BD%91&t=31&band_rank=27&Refer=top)
1. [蔡天凤尸检结果出炉](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E5%B0%B8%E6%A3%80%E7%BB%93%E6%9E%9C%E5%87%BA%E7%82%89%23&t=31&band_rank=28&Refer=top)
1. [中网男单决赛](https://s.weibo.com//weibo?q=%E4%B8%AD%E7%BD%91%E7%94%B7%E5%8D%95%E5%86%B3%E8%B5%9B&t=31&band_rank=29&Refer=top)
1. [王者年度总决赛](https://s.weibo.com//weibo?q=%E7%8E%8B%E8%80%85%E5%B9%B4%E5%BA%A6%E6%80%BB%E5%86%B3%E8%B5%9B&t=31&band_rank=30&Refer=top)
1. [伦敦冰箱贴竟印着郑州](https://s.weibo.com//weibo?q=%E4%BC%A6%E6%95%A6%E5%86%B0%E7%AE%B1%E8%B4%B4%E7%AB%9F%E5%8D%B0%E7%9D%80%E9%83%91%E5%B7%9E&t=31&band_rank=31&Refer=top)
1. [杭州会惩罚每一个不听劝的犟种](https://s.weibo.com//weibo?q=%E6%9D%AD%E5%B7%9E%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%90%AC%E5%8A%9D%E7%9A%84%E7%8A%9F%E7%A7%8D&t=31&band_rank=32&Refer=top)
1. [袁绍辉后来纳了两个妾](https://s.weibo.com//weibo?q=%23%E8%A2%81%E7%BB%8D%E8%BE%89%E5%90%8E%E6%9D%A5%E7%BA%B3%E4%BA%86%E4%B8%A4%E4%B8%AA%E5%A6%BE%23&t=31&band_rank=33&Refer=top)
1. [店员回应晓华理发店不再爆火](https://s.weibo.com//weibo?q=%23%E5%BA%97%E5%91%98%E5%9B%9E%E5%BA%94%E6%99%93%E5%8D%8E%E7%90%86%E5%8F%91%E5%BA%97%E4%B8%8D%E5%86%8D%E7%88%86%E7%81%AB%23&t=31&band_rank=34&Refer=top)
1. [缅甸电诈园区或卷土重来](https://s.weibo.com//weibo?q=%23%E7%BC%85%E7%94%B8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%88%96%E5%8D%B7%E5%9C%9F%E9%87%8D%E6%9D%A5%23&t=31&band_rank=35&Refer=top)
1. [东哥称明星美女难接触科技新贵](https://s.weibo.com//weibo?q=%E4%B8%9C%E5%93%A5%E7%A7%B0%E6%98%8E%E6%98%9F%E7%BE%8E%E5%A5%B3%E9%9A%BE%E6%8E%A5%E8%A7%A6%E7%A7%91%E6%8A%80%E6%96%B0%E8%B4%B5&t=31&band_rank=36&Refer=top)
1. [梁靖崑3比0美国大满贯亚军](https://s.weibo.com//weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%913%E6%AF%940%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E4%BA%9A%E5%86%9B%23&t=31&band_rank=37&Refer=top)
1. [日本女公务员请病假旅游被上司看见](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E5%85%AC%E5%8A%A1%E5%91%98%E8%AF%B7%E7%97%85%E5%81%87%E6%97%85%E6%B8%B8%E8%A2%AB%E4%B8%8A%E5%8F%B8%E7%9C%8B%E8%A7%81%23&t=31&band_rank=38&Refer=top)
1. [黄渤怼起小S来也是手拿把掐的](https://s.weibo.com//weibo?q=%23%E9%BB%84%E6%B8%A4%E6%80%BC%E8%B5%B7%E5%B0%8FS%E6%9D%A5%E4%B9%9F%E6%98%AF%E6%89%8B%E6%8B%BF%E6%8A%8A%E6%8E%90%E7%9A%84%23&t=31&band_rank=39&Refer=top)
1. [杜翠雀最后的戏份给雀姐调成啥了](https://s.weibo.com//weibo?q=%23%E6%9D%9C%E7%BF%A0%E9%9B%80%E6%9C%80%E5%90%8E%E7%9A%84%E6%88%8F%E4%BB%BD%E7%BB%99%E9%9B%80%E5%A7%90%E8%B0%83%E6%88%90%E5%95%A5%E4%BA%86%23&t=31&band_rank=40&Refer=top)
1. [童年阴影小刺猬竟是板栗](https://s.weibo.com//weibo?q=%E7%AB%A5%E5%B9%B4%E9%98%B4%E5%BD%B1%E5%B0%8F%E5%88%BA%E7%8C%AC%E7%AB%9F%E6%98%AF%E6%9D%BF%E6%A0%97&t=31&band_rank=41&Refer=top)
1. [王一博 熟男](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E7%86%9F%E7%94%B7&t=31&band_rank=42&Refer=top)
1. [华为高通 芯片](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E9%AB%98%E9%80%9A%20%E8%8A%AF%E7%89%87&t=31&band_rank=43&Refer=top)
1. [俄研究员鼠疫身亡近200人隔离](https://s.weibo.com//weibo?q=%23%E4%BF%84%E7%A0%94%E7%A9%B6%E5%91%98%E9%BC%A0%E7%96%AB%E8%BA%AB%E4%BA%A1%E8%BF%91200%E4%BA%BA%E9%9A%94%E7%A6%BB%23&t=31&band_rank=44&Refer=top)
1. [刘学义黄羿侯明昊你们居然认识](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E9%BB%84%E7%BE%BF%E4%BE%AF%E6%98%8E%E6%98%8A%E4%BD%A0%E4%BB%AC%E5%B1%85%E7%84%B6%E8%AE%A4%E8%AF%86%23&t=31&band_rank=45&Refer=top)
1. [男子嫌九十九元盲盒便宜](https://s.weibo.com//weibo?q=%E7%94%B7%E5%AD%90%E5%AB%8C%E4%B9%9D%E5%8D%81%E4%B9%9D%E5%85%83%E7%9B%B2%E7%9B%92%E4%BE%BF%E5%AE%9C&t=31&band_rank=46&Refer=top)
1. [金喜善16岁就美成这样](https://s.weibo.com//weibo?q=%E9%87%91%E5%96%9C%E5%96%8416%E5%B2%81%E5%B0%B1%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7&t=31&band_rank=47&Refer=top)
1. [东北超](https://s.weibo.com//weibo?q=%E4%B8%9C%E5%8C%97%E8%B6%85&t=31&band_rank=48&Refer=top)
1. [高芙为孙心然鼓掌](https://s.weibo.com//weibo?q=%23%E9%AB%98%E8%8A%99%E4%B8%BA%E5%AD%99%E5%BF%83%E7%84%B6%E9%BC%93%E6%8E%8C%23&t=31&band_rank=49&Refer=top)
1. [曝腾讯退了几部大剧](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%85%BE%E8%AE%AF%E9%80%80%E4%BA%86%E5%87%A0%E9%83%A8%E5%A4%A7%E5%89%A7%23&t=31&band_rank=50&Refer=top)
1. [孙颖莎开始整顿乒乓球观赛礼仪](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%BC%80%E5%A7%8B%E6%95%B4%E9%A1%BF%E4%B9%92%E4%B9%93%E7%90%83%E8%A7%82%E8%B5%9B%E7%A4%BC%E4%BB%AA%23&t=31&band_rank=1&Refer=top)
1. [未来几年能留住现金流最重要](https://s.weibo.com//weibo?q=%E6%9C%AA%E6%9D%A5%E5%87%A0%E5%B9%B4%E8%83%BD%E7%95%99%E4%BD%8F%E7%8E%B0%E9%87%91%E6%B5%81%E6%9C%80%E9%87%8D%E8%A6%81&t=31&band_rank=2&Refer=top)
1. [谭松韵面相都变了](https://s.weibo.com//weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23&t=31&band_rank=4&Refer=top)
1. [曝腾讯退了几部大剧](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E8%85%BE%E8%AE%AF%E9%80%80%E4%BA%86%E5%87%A0%E9%83%A8%E5%A4%A7%E5%89%A7%23&t=31&band_rank=5&Refer=top)
1. [梅德韦杰夫伤到观众被判负](https://s.weibo.com//weibo?q=%23%E6%A2%85%E5%BE%B7%E9%9F%A6%E6%9D%B0%E5%A4%AB%E4%BC%A4%E5%88%B0%E8%A7%82%E4%BC%97%E8%A2%AB%E5%88%A4%E8%B4%9F%23&t=31&band_rank=6&Refer=top)
1. [高芙为孙心然鼓掌](https://s.weibo.com//weibo?q=%23%E9%AB%98%E8%8A%99%E4%B8%BA%E5%AD%99%E5%BF%83%E7%84%B6%E9%BC%93%E6%8E%8C%23&t=31&band_rank=7&Refer=top)
1. [张居正 胡歌](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%B1%85%E6%AD%A3%20%E8%83%A1%E6%AD%8C&t=31&band_rank=8&Refer=top)
1. [住酒店真的会感染HPV吗](https://s.weibo.com//weibo?q=%E4%BD%8F%E9%85%92%E5%BA%97%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%84%9F%E6%9F%93HPV%E5%90%97&t=31&band_rank=9&Refer=top)
1. [缅北电诈园区枪决底层人员](https://s.weibo.com//weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%9E%AA%E5%86%B3%E5%BA%95%E5%B1%82%E4%BA%BA%E5%91%98%23&t=31&band_rank=10&Refer=top)
1. [刘亦菲 掉代言](https://s.weibo.com//weibo?q=%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%8E%89%E4%BB%A3%E8%A8%80&t=31&band_rank=11&Refer=top)
1. [代露娃持续掉粉](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23&t=31&band_rank=12&Refer=top)
1. [李勒优回应](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%9B%9E%E5%BA%94%23&t=31&band_rank=13&Refer=top)
1. [建议大家买房一定要远离公园](https://s.weibo.com//weibo?q=%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E6%88%BF%E4%B8%80%E5%AE%9A%E8%A6%81%E8%BF%9C%E7%A6%BB%E5%85%AC%E5%9B%AD&t=31&band_rank=14&Refer=top)
1. [肖战全世界正数第一严谨之人](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E5%85%A8%E4%B8%96%E7%95%8C%E6%AD%A3%E6%95%B0%E7%AC%AC%E4%B8%80%E4%B8%A5%E8%B0%A8%E4%B9%8B%E4%BA%BA%23&t=31&band_rank=15&Refer=top)
1. [三千的工资愣是存了80万](https://s.weibo.com//weibo?q=%23%E4%B8%89%E5%8D%83%E7%9A%84%E5%B7%A5%E8%B5%84%E6%84%A3%E6%98%AF%E5%AD%98%E4%BA%8680%E4%B8%87%23&t=31&band_rank=16&Refer=top)
1. [刘亦菲一下子掉了四个代言](https://s.weibo.com//weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B8%80%E4%B8%8B%E5%AD%90%E6%8E%89%E4%BA%86%E5%9B%9B%E4%B8%AA%E4%BB%A3%E8%A8%80%23&t=31&band_rank=17&Refer=top)
1. [代露娃不被同情的原因](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E4%B8%8D%E8%A2%AB%E5%90%8C%E6%83%85%E7%9A%84%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=18&Refer=top)
1. [刘学义没对谭松韵用绅士手](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%B2%A1%E5%AF%B9%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%94%A8%E7%BB%85%E5%A3%AB%E6%89%8B%23&t=31&band_rank=19&Refer=top)
1. [孙心然vs高芙](https://s.weibo.com//weibo?q=%23%E5%AD%99%E5%BF%83%E7%84%B6vs%E9%AB%98%E8%8A%99%23&t=31&band_rank=20&Refer=top)
1. [梅德韦杰夫处罚](https://s.weibo.com//weibo?q=%23%E6%A2%85%E5%BE%B7%E9%9F%A6%E6%9D%B0%E5%A4%AB%E5%A4%84%E7%BD%9A%23&t=31&band_rank=22&Refer=top)
1. [中国警方缅北战火下挖出同胞遗体](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AD%A6%E6%96%B9%E7%BC%85%E5%8C%97%E6%88%98%E7%81%AB%E4%B8%8B%E6%8C%96%E5%87%BA%E5%90%8C%E8%83%9E%E9%81%97%E4%BD%93%23&t=31&band_rank=23&Refer=top)
1. [孙心然被破发后落泪](https://s.weibo.com//weibo?q=%E5%AD%99%E5%BF%83%E7%84%B6%E8%A2%AB%E7%A0%B4%E5%8F%91%E5%90%8E%E8%90%BD%E6%B3%AA&t=31&band_rank=24&Refer=top)
1. [时代峰峻疑似首尔分公司](https://s.weibo.com//weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%96%91%E4%BC%BC%E9%A6%96%E5%B0%94%E5%88%86%E5%85%AC%E5%8F%B8%23&t=31&band_rank=25&Refer=top)
1. [梅德韦杰夫 情绪化击球](https://s.weibo.com//weibo?q=%E6%A2%85%E5%BE%B7%E9%9F%A6%E6%9D%B0%E5%A4%AB%20%E6%83%85%E7%BB%AA%E5%8C%96%E5%87%BB%E7%90%83&t=31&band_rank=26&Refer=top)
1. [黄金睡眠时长出炉](https://s.weibo.com//weibo?q=%23%E9%BB%84%E9%87%91%E7%9D%A1%E7%9C%A0%E6%97%B6%E9%95%BF%E5%87%BA%E7%82%89%23&t=31&band_rank=27&Refer=top)
1. [重庆摩托落地签被约谈后居民发声](https://s.weibo.com//weibo?q=%23%E9%87%8D%E5%BA%86%E6%91%A9%E6%89%98%E8%90%BD%E5%9C%B0%E7%AD%BE%E8%A2%AB%E7%BA%A6%E8%B0%88%E5%90%8E%E5%B1%85%E6%B0%91%E5%8F%91%E5%A3%B0%23&t=31&band_rank=28&Refer=top)
1. [华为高通 芯片](https://s.weibo.com//weibo?q=%E5%8D%8E%E4%B8%BA%E9%AB%98%E9%80%9A%20%E8%8A%AF%E7%89%87&t=31&band_rank=29&Refer=top)
1. [陪兰香走到最后的人](https://s.weibo.com//weibo?q=%23%E9%99%AA%E5%85%B0%E9%A6%99%E8%B5%B0%E5%88%B0%E6%9C%80%E5%90%8E%E7%9A%84%E4%BA%BA%23&t=31&band_rank=30&Refer=top)
1. [男子嫌九十九元盲盒便宜](https://s.weibo.com//weibo?q=%E7%94%B7%E5%AD%90%E5%AB%8C%E4%B9%9D%E5%8D%81%E4%B9%9D%E5%85%83%E7%9B%B2%E7%9B%92%E4%BE%BF%E5%AE%9C&t=31&band_rank=31&Refer=top)
1. [国庆第一批一起旅游的人已经闹掰](https://s.weibo.com//weibo?q=%E5%9B%BD%E5%BA%86%E7%AC%AC%E4%B8%80%E6%89%B9%E4%B8%80%E8%B5%B7%E6%97%85%E6%B8%B8%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E9%97%B9%E6%8E%B0&t=31&band_rank=32&Refer=top)
1. [邓紫棋单巡刷新吉尼斯纪录](https://s.weibo.com//weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%8D%95%E5%B7%A1%E5%88%B7%E6%96%B0%E5%90%89%E5%B0%BC%E6%96%AF%E7%BA%AA%E5%BD%95%23&t=31&band_rank=33&Refer=top)
1. [李一桐自曝被骗金额达六七位数](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E8%87%AA%E6%9B%9D%E8%A2%AB%E9%AA%97%E9%87%91%E9%A2%9D%E8%BE%BE%E5%85%AD%E4%B8%83%E4%BD%8D%E6%95%B0%23&t=31&band_rank=34&Refer=top)
1. [蔡天凤尸检结果出炉](https://s.weibo.com//weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E5%B0%B8%E6%A3%80%E7%BB%93%E6%9E%9C%E5%87%BA%E7%82%89%23&t=31&band_rank=35&Refer=top)
1. [男子信中奖9000万失联3月在放羊](https://s.weibo.com//weibo?q=%23%E7%94%B7%E5%AD%90%E4%BF%A1%E4%B8%AD%E5%A5%969000%E4%B8%87%E5%A4%B1%E8%81%943%E6%9C%88%E5%9C%A8%E6%94%BE%E7%BE%8A%23&t=31&band_rank=36&Refer=top)
1. [孙颖莎重返世排第一后首胜](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%87%8D%E8%BF%94%E4%B8%96%E6%8E%92%E7%AC%AC%E4%B8%80%E5%90%8E%E9%A6%96%E8%83%9C%23&t=31&band_rank=37&Refer=top)
1. [金喜善16岁就美成这样](https://s.weibo.com//weibo?q=%E9%87%91%E5%96%9C%E5%96%8416%E5%B2%81%E5%B0%B1%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7&t=31&band_rank=38&Refer=top)
1. [结婚9年喜字还没掉](https://s.weibo.com//weibo?q=%E7%BB%93%E5%A9%9A9%E5%B9%B4%E5%96%9C%E5%AD%97%E8%BF%98%E6%B2%A1%E6%8E%89&t=31&band_rank=39&Refer=top)
1. [王一博 熟男](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E7%86%9F%E7%94%B7&t=31&band_rank=40&Refer=top)
1. [千万别把爸妈没见过的食物放冰箱](https://s.weibo.com//weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E6%8A%8A%E7%88%B8%E5%A6%88%E6%B2%A1%E8%A7%81%E8%BF%87%E7%9A%84%E9%A3%9F%E7%89%A9%E6%94%BE%E5%86%B0%E7%AE%B1%23&t=31&band_rank=41&Refer=top)
1. [中网](https://s.weibo.com//weibo?q=%E4%B8%AD%E7%BD%91&t=31&band_rank=42&Refer=top)
1. [游客住学生宿舍 慷他人之慨](https://s.weibo.com//weibo?q=%E6%B8%B8%E5%AE%A2%E4%BD%8F%E5%AD%A6%E7%94%9F%E5%AE%BF%E8%88%8D%20%E6%85%B7%E4%BB%96%E4%BA%BA%E4%B9%8B%E6%85%A8&t=31&band_rank=43&Refer=top)
1. [4岁女孩黑眼圈母亲没重视确诊瘤王](https://s.weibo.com//weibo?q=%234%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%BB%91%E7%9C%BC%E5%9C%88%E6%AF%8D%E4%BA%B2%E6%B2%A1%E9%87%8D%E8%A7%86%E7%A1%AE%E8%AF%8A%E7%98%A4%E7%8E%8B%23&t=31&band_rank=44&Refer=top)
1. [邓紫棋直播](https://s.weibo.com//weibo?q=%E9%82%93%E7%B4%AB%E6%A3%8B%E7%9B%B4%E6%92%AD&t=31&band_rank=45&Refer=top)
1. [白鹿彭冠英常华森杀青合照](https://s.weibo.com//weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BD%AD%E5%86%A0%E8%8B%B1%E5%B8%B8%E5%8D%8E%E6%A3%AE%E6%9D%80%E9%9D%92%E5%90%88%E7%85%A7%23&t=31&band_rank=46&Refer=top)
1. [现在不流行离婚流行熬婚](https://s.weibo.com//weibo?q=%E7%8E%B0%E5%9C%A8%E4%B8%8D%E6%B5%81%E8%A1%8C%E7%A6%BB%E5%A9%9A%E6%B5%81%E8%A1%8C%E7%86%AC%E5%A9%9A&t=31&band_rank=47&Refer=top)
1. [陈梦观赛中国大满贯](https://s.weibo.com//weibo?q=%23%E9%99%88%E6%A2%A6%E8%A7%82%E8%B5%9B%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%23&t=31&band_rank=48&Refer=top)
1. [纽约时报披露赵长鹏细节](https://s.weibo.com//weibo?q=%E7%BA%BD%E7%BA%A6%E6%97%B6%E6%8A%A5%E6%8A%AB%E9%9C%B2%E8%B5%B5%E9%95%BF%E9%B9%8F%E7%BB%86%E8%8A%82&t=31&band_rank=49&Refer=top)
1. [李勒优 崔晋](https://s.weibo.com//weibo?q=%E6%9D%8E%E5%8B%92%E4%BC%98%20%E5%B4%94%E6%99%8B&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
