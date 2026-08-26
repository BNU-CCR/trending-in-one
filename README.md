# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-08-27 01:01:50

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
<!-- 最后更新时间 Thu Aug 27 2026 02:24:58 GMT+0800 (China Standard Time) -->

1. [泥石流已致西藏吉隆3人遇难265人失联](https://so.toutiao.com/search?keyword=泥石流已致西藏吉隆3人遇难265人失联)
1. [消费者称小孩在伊利雪糕里吃出牙齿](https://so.toutiao.com/search?keyword=消费者称小孩在伊利雪糕里吃出牙齿)
1. [“十五五”时期推动信息通信业全面升级](https://so.toutiao.com/search?keyword=“十五五”时期推动信息通信业全面升级)
1. [癌症疫苗预计近50万美元1针](https://so.toutiao.com/search?keyword=癌症疫苗预计近50万美元1针)
1. [13岁女孩三天靠AI赚1.8万](https://so.toutiao.com/search?keyword=13岁女孩三天靠AI赚1.8万)
1. [办事大厅被曝9点没人上班后禁带手机](https://so.toutiao.com/search?keyword=办事大厅被曝9点没人上班后禁带手机)
1. [欢子起诉湖南卫视](https://so.toutiao.com/search?keyword=欢子起诉湖南卫视)
1. [男子卖房让同事操盘 亏损率达99.9%](https://so.toutiao.com/search?keyword=男子卖房让同事操盘%20亏损率达99.9%)
1. [获救船员称万吨货轮倾斜8分钟沉没](https://so.toutiao.com/search?keyword=获救船员称万吨货轮倾斜8分钟沉没)
1. [“老登股”的春天要来了吗](https://so.toutiao.com/search?keyword=“老登股”的春天要来了吗)
1. [女子天热出门化妆 假鼻子全是汗泡](https://so.toutiao.com/search?keyword=女子天热出门化妆%20假鼻子全是汗泡)
1. [网传“8月新冠严重有变异毒株”不实](https://so.toutiao.com/search?keyword=网传“8月新冠严重有变异毒株”不实)
1. [1.03亿恒大债权包14.41万成交](https://so.toutiao.com/search?keyword=1.03亿恒大债权包14.41万成交)
1. [女子主动到派出所问自己是不是逃犯](https://so.toutiao.com/search?keyword=女子主动到派出所问自己是不是逃犯)
1. [央视曝光擦边手办乱象](https://so.toutiao.com/search?keyword=央视曝光擦边手办乱象)
1. [谁在“托举”理想汽车](https://so.toutiao.com/search?keyword=谁在“托举”理想汽车)
1. [幼儿园装防护网 老师亲自踩上去测试](https://so.toutiao.com/search?keyword=幼儿园装防护网%20老师亲自踩上去测试)
1. [曝伊朗曾企图在美暗杀内塔尼亚胡长子](https://so.toutiao.com/search?keyword=曝伊朗曾企图在美暗杀内塔尼亚胡长子)
1. [媒体：羞辱式裁员触碰了红线](https://so.toutiao.com/search?keyword=媒体：羞辱式裁员触碰了红线)
1. [媒体：别让发型一刀切切掉育人初心](https://so.toutiao.com/search?keyword=媒体：别让发型一刀切切掉育人初心)
1. [三部门向西藏调拨3万件中央救灾物资](https://so.toutiao.com/search?keyword=三部门向西藏调拨3万件中央救灾物资)
1. [82岁中国老人在韩夺得跨栏世界冠军](https://so.toutiao.com/search?keyword=82岁中国老人在韩夺得跨栏世界冠军)
1. [小伙等3小时无人挪车直接叫叉车抬走](https://so.toutiao.com/search?keyword=小伙等3小时无人挪车直接叫叉车抬走)
1. [孙红雷新代言官宣海报遭吐槽](https://so.toutiao.com/search?keyword=孙红雷新代言官宣海报遭吐槽)
1. [国务院对敌敌畏消杀事件挂牌督办](https://so.toutiao.com/search?keyword=国务院对敌敌畏消杀事件挂牌督办)
1. [我军试射的“黑色”导弹有多厉害](https://so.toutiao.com/search?keyword=我军试射的“黑色”导弹有多厉害)
1. [男女高速路上超速追逐竞驶被刑拘](https://so.toutiao.com/search?keyword=男女高速路上超速追逐竞驶被刑拘)
1. [被软件拿捏的埃及阵风战机如何破局](https://so.toutiao.com/search?keyword=被软件拿捏的埃及阵风战机如何破局)
1. [糖尿病足最偏爱哪些人](https://so.toutiao.com/search?keyword=糖尿病足最偏爱哪些人)
1. [俄罗斯火灾致中国公民6死9失联](https://so.toutiao.com/search?keyword=俄罗斯火灾致中国公民6死9失联)
1. [海南大学一女研究生失联 警方介入](https://so.toutiao.com/search?keyword=海南大学一女研究生失联%20警方介入)
1. [孙千《早春晴朗》首集穿的假名牌](https://so.toutiao.com/search?keyword=孙千《早春晴朗》首集穿的假名牌)
1. [32岁小伙靠给人抓痒开出两家店](https://so.toutiao.com/search?keyword=32岁小伙靠给人抓痒开出两家店)
1. [鸿蒙成世界第三大手机操作系统](https://so.toutiao.com/search?keyword=鸿蒙成世界第三大手机操作系统)
1. [玲花提词器全蒙文让歌迷直呼“天书”](https://so.toutiao.com/search?keyword=玲花提词器全蒙文让歌迷直呼“天书”)
1. [专家：美债失控结局已无法逆转](https://so.toutiao.com/search?keyword=专家：美债失控结局已无法逆转)
1. [胖东来许昌新店与老店相隔4公里](https://so.toutiao.com/search?keyword=胖东来许昌新店与老店相隔4公里)
1. [陈坤自曝因病暴瘦10斤](https://so.toutiao.com/search?keyword=陈坤自曝因病暴瘦10斤)
1. [中国机器人“捂脸狂奔”走红海外](https://so.toutiao.com/search?keyword=中国机器人“捂脸狂奔”走红海外)
1. [官方通报长沙一建筑工地3工人坠亡](https://so.toutiao.com/search?keyword=官方通报长沙一建筑工地3工人坠亡)
1. [成都市委常委刘任远被查](https://so.toutiao.com/search?keyword=成都市委常委刘任远被查)
1. [“8个2”手机号399万元起拍](https://so.toutiao.com/search?keyword=“8个2”手机号399万元起拍)
1. [南海部分水域将进行军事训练](https://so.toutiao.com/search?keyword=南海部分水域将进行军事训练)
1. [全国政协常委会会议热议民生问题](https://so.toutiao.com/search?keyword=全国政协常委会会议热议民生问题)
1. [媒体：“台独”的洗脑工程太粗劣](https://so.toutiao.com/search?keyword=媒体：“台独”的洗脑工程太粗劣)
1. [合肥机器人百步穿杨成功摘金](https://so.toutiao.com/search?keyword=合肥机器人百步穿杨成功摘金)
1. [如何评价库克掌舵苹果的15年](https://so.toutiao.com/search?keyword=如何评价库克掌舵苹果的15年)
1. [邱震海：美国经济战双线开火自讨苦吃](https://so.toutiao.com/search?keyword=邱震海：美国经济战双线开火自讨苦吃)
1. [以继续追击参与2023年袭击的武装人员](https://so.toutiao.com/search?keyword=以继续追击参与2023年袭击的武装人员)
1. [运动员冒雨跑完全程意外得知有奖牌](https://so.toutiao.com/search?keyword=运动员冒雨跑完全程意外得知有奖牌)
1. [清华大学军训现场学霸们一身戎装](https://so.toutiao.com/search?keyword=清华大学军训现场学霸们一身戎装)
1. [美新型空空导弹性能如何](https://so.toutiao.com/search?keyword=美新型空空导弹性能如何)
1. [美上将为何抗议特朗普拆电磁弹射](https://so.toutiao.com/search?keyword=美上将为何抗议特朗普拆电磁弹射)
1. [一汽丰田高管痛批“速成车”](https://so.toutiao.com/search?keyword=一汽丰田高管痛批“速成车”)
1. [企业几十台空调外机不翼而飞 3人被抓](https://so.toutiao.com/search?keyword=企业几十台空调外机不翼而飞%203人被抓)
1. [凤凰传奇济南演唱会带火住宿市场](https://so.toutiao.com/search?keyword=凤凰传奇济南演唱会带火住宿市场)
1. [香港新房发售新“票王”诞生](https://so.toutiao.com/search?keyword=香港新房发售新“票王”诞生)
1. [美股三大指数集体低开](https://so.toutiao.com/search?keyword=美股三大指数集体低开)
1. [小伙叫停路人救出被困车底的老人](https://so.toutiao.com/search?keyword=小伙叫停路人救出被困车底的老人)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Aug 27 2026 00:34:14 GMT+0800 (China Standard Time) -->

1. [中国女生在韩失联已遇害](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%B7%B2%E9%81%87%E5%AE%B3)
1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [老人进店休息离世店家帮扶遭索赔](https://www.zhihu.com/search?q=%E8%80%81%E4%BA%BA%E8%BF%9B%E5%BA%97%E4%BC%91%E6%81%AF%E7%A6%BB%E4%B8%96%E5%BA%97%E5%AE%B6%E5%B8%AE%E6%89%B6%E9%81%AD%E7%B4%A2%E8%B5%94)
1. [Zhihu CLI 功能上新](https://www.zhihu.com/search?q=Zhihu%20CLI%20%E5%8A%9F%E8%83%BD%E4%B8%8A%E6%96%B0)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [官方通报星宇股份批量劝退应届生](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E6%89%B9%E9%87%8F%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F)
1. [德芙七夕营销翻车](https://www.zhihu.com/search?q=%E5%BE%B7%E8%8A%99%E4%B8%83%E5%A4%95%E8%90%A5%E9%94%80%E7%BF%BB%E8%BD%A6)
1. [北大教授称灵活就业是一种福利](https://www.zhihu.com/search?q=%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E7%A7%B0%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%98%AF%E4%B8%80%E7%A7%8D%E7%A6%8F%E5%88%A9)
1. [包贝尔被曝酒店出轨](https://www.zhihu.com/search?q=%E5%8C%85%E8%B4%9D%E5%B0%94%E8%A2%AB%E6%9B%9D%E9%85%92%E5%BA%97%E5%87%BA%E8%BD%A8)
1. [世界人形机器人运动会闭幕式](https://www.zhihu.com/search?q=%E4%B8%96%E7%95%8C%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%BF%90%E5%8A%A8%E4%BC%9A%E9%97%AD%E5%B9%95%E5%BC%8F)
1. [刘翔向网友求助职场选择](https://www.zhihu.com/search?q=%E5%88%98%E7%BF%94%E5%90%91%E7%BD%91%E5%8F%8B%E6%B1%82%E5%8A%A9%E8%81%8C%E5%9C%BA%E9%80%89%E6%8B%A9)
1. [粥饼伦天津店因房租暴涨暂停营业](https://www.zhihu.com/search?q=%E7%B2%A5%E9%A5%BC%E4%BC%A6%E5%A4%A9%E6%B4%A5%E5%BA%97%E5%9B%A0%E6%88%BF%E7%A7%9F%E6%9A%B4%E6%B6%A8%E6%9A%82%E5%81%9C%E8%90%A5%E4%B8%9A)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Aug 27 2026 01:01:50 GMT+0800 (China Standard Time) -->

1. [西藏日喀则吉隆口岸发生泥石流，致重大人员伤亡失联，有建筑被掩埋，目前情况如何？](https://www.zhihu.com/question/2075969425702741200)
1. [如何评价粥饼伦天津鸡蛋灌饼店因为房租从13万上涨到20万被迫宣布暂停营业？为什么现在房东矛盾这么大？](https://www.zhihu.com/question/2075488229747339500)
1. [德芙就「趁男朋友不在跟暧昧对象分享」文案道歉，称由第三方运营团队创作发布，德芙在管理上存在哪些问题？](https://www.zhihu.com/question/2075743712588609000)
1. [怎么看 GLM-5.3-Flash 发布，有什么值得关注的？](https://www.zhihu.com/question/2076068666639230500)
1. [瓶装水在开封后，多久会变质？](https://www.zhihu.com/question/2074882831344460800)
1. [为什么看不到男人四五个人结伴一起去旅行的？](https://www.zhihu.com/question/2074380142697244000)
1. [30 多个国家表示准备向乌克兰派兵，此举将如何影响俄乌冲突局势？](https://www.zhihu.com/question/2075675774821086200)
1. [「帮扶老人反被索赔」事件，老人家属算敲诈勒索吗？为何法律无责却仍需赔偿？该怎样终结「和稀泥式调解」？](https://www.zhihu.com/question/2075893197289383200)
1. [网传 DeepSeek 深度思考模式会偷偷给用户取外号，这是真的吗？为什么会出现这种情况？](https://www.zhihu.com/question/2070165569941288000)
1. [为什么50国在联合国反对俄罗斯？](https://www.zhihu.com/question/2075754349884600800)
1. [千问开源基于 Qwen4 架构的 Qwen3.8-Flash-Next，下一代架构有什么变化值得关注？](https://www.zhihu.com/question/2075957645354033200)
1. [为什么身边的中年男人不是热衷炒股，就是热衷钓鱼？](https://www.zhihu.com/question/1908287806243046400)
1. [U18亚青赛，菲律宾队最后时刻假装握手认输，随后抢断中国队上篮，之后引发冲突，对此你怎么看？](https://www.zhihu.com/question/2074165762919331600)
1. [赛力斯中报巨亏，问界 M6 走量预期落空，如何评价华为智选车模式？](https://www.zhihu.com/question/2074228962302093000)
1. [北方人口中的「硬菜」是什么菜呢？什么标准才达标呢？](https://www.zhihu.com/question/6181386454)
1. [郑钦文有天赋也努力，为何感觉她和当年的李娜比，还是差一点意思?](https://www.zhihu.com/question/750838307)
1. [古代富家的生活有多奢侈？](https://www.zhihu.com/question/45638947)
1. [如何评价龙德施泰特？](https://www.zhihu.com/question/31689891)
1. [《欢迎来龙餐馆》如果徐福死了，这部电影会不会效果更好？](https://www.zhihu.com/question/2075247117547868400)
1. [一架美军运输机降落在俄罗斯莫斯科，这一罕见事件引发关注，还有哪些信息值得关注？](https://www.zhihu.com/question/2075648179723301000)
1. [我妈把芒果核留给我老公，我指出这样做不对，我错了么？](https://www.zhihu.com/question/2075499349363245800)
1. [如何评价在科隆游戏展上米哈游新作《星布谷地》官宣将在2026年冬季公测上线？](https://www.zhihu.com/question/2075783610246894800)
1. [脑出血急诊去医院为什么几个小时不开始手术，最后我妈去世了，医院有没有责任？](https://www.zhihu.com/question/1905751114009272800)
1. [高中真的很累吗?](https://www.zhihu.com/question/1943091664089510700)
1. [怎么看 Claude Code 团队回应：「坚持 CLAUDE.md 是因为模型系列不能互换」？](https://www.zhihu.com/question/2075884873601004000)
1. [为什么武侠游戏里的“毒”只剩下“掉血”这一种功能？](https://www.zhihu.com/question/2072368553370579700)
1. [太极拳思路的以柔克刚，借力打力都貌似很合理，为什么实战起来这个力就克不动，卸不掉，也借不到呢？](https://www.zhihu.com/question/499019346)
1. [如何看待丁俊晖连续首轮出局后表示「不知道你们在期待什么」，丁俊晖现在在国内排第几，状态还能恢复吗？](https://www.zhihu.com/question/2075194548683104800)
1. [高铁无座票和二等座同价再度引发争议，为何二者价格一样？是否有可能差异化定价？](https://www.zhihu.com/question/2075247106428879400)
1. [比起一见钟情，为什么越来越多观众更相信慢慢靠近的爱情？](https://www.zhihu.com/question/2072666413924349000)

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
<!-- 最后更新时间 Thu Aug 27 2026 02:09:51 GMT+0800 (China Standard Time) -->

1. [习近平出席2026上合峰会](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%87%BA%E5%B8%AD2026%E4%B8%8A%E5%90%88%E5%B3%B0%E4%BC%9A%23&Refer=new_time)
1. [西藏泥石流265人失联3人遇难](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81265%E4%BA%BA%E5%A4%B1%E8%81%943%E4%BA%BA%E9%81%87%E9%9A%BE%23&t=31&band_rank=1&Refer=top)
1. [男频和女频的区别](https://s.weibo.com//weibo?q=%E7%94%B7%E9%A2%91%E5%92%8C%E5%A5%B3%E9%A2%91%E7%9A%84%E5%8C%BA%E5%88%AB&t=31&band_rank=2&Refer=top)
1. [未来五年加快打造新兴支柱产业](https://s.weibo.com//weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E5%8A%A0%E5%BF%AB%E6%89%93%E9%80%A0%E6%96%B0%E5%85%B4%E6%94%AF%E6%9F%B1%E4%BA%A7%E4%B8%9A%23&t=31&band_rank=3&Refer=top)
1. [台湾童星徐杰去世](https://s.weibo.com//weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%AB%A5%E6%98%9F%E5%BE%90%E6%9D%B0%E5%8E%BB%E4%B8%96%23&t=31&band_rank=4&Refer=top)
1. [学费被家长充错成话费了](https://s.weibo.com//weibo?q=%E5%AD%A6%E8%B4%B9%E8%A2%AB%E5%AE%B6%E9%95%BF%E5%85%85%E9%94%99%E6%88%90%E8%AF%9D%E8%B4%B9%E4%BA%86&t=31&band_rank=5&Refer=top)
1. [小天才还要逼疯多少家长](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E5%A4%A9%E6%89%8D%E8%BF%98%E8%A6%81%E9%80%BC%E7%96%AF%E5%A4%9A%E5%B0%91%E5%AE%B6%E9%95%BF%23&t=31&band_rank=6&Refer=top)
1. [尼泊尔山洪遇难人数升至72人](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E9%81%87%E9%9A%BE%E4%BA%BA%E6%95%B0%E5%8D%87%E8%87%B372%E4%BA%BA%23&t=31&band_rank=7&Refer=top)
1. [惠英红回应郭晓婷长得像](https://s.weibo.com//weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E5%9B%9E%E5%BA%94%E9%83%AD%E6%99%93%E5%A9%B7%E9%95%BF%E5%BE%97%E5%83%8F%23&t=31&band_rank=8&Refer=top)
1. [西藏泥石流救援现场](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%95%91%E6%8F%B4%E7%8E%B0%E5%9C%BA%23&t=31&band_rank=9&Refer=top)
1. [年轻人不会被电诈的原因](https://s.weibo.com//weibo?q=%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E4%BC%9A%E8%A2%AB%E7%94%B5%E8%AF%88%E7%9A%84%E5%8E%9F%E5%9B%A0&t=31&band_rank=10&Refer=top)
1. [金价大涨终于熬出头](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E6%B6%A8%E7%BB%88%E4%BA%8E%E7%86%AC%E5%87%BA%E5%A4%B4%23&t=31&band_rank=11&Refer=top)
1. [吉隆口岸](https://s.weibo.com//weibo?q=%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8&t=31&band_rank=12&Refer=top)
1. [海南大学失联女研究生最后现身桥下](https://s.weibo.com//weibo?q=%23%E6%B5%B7%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%A4%B1%E8%81%94%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E6%9C%80%E5%90%8E%E7%8E%B0%E8%BA%AB%E6%A1%A5%E4%B8%8B%23&t=31&band_rank=13&Refer=top)
1. [早春晴朗口碑](https://s.weibo.com//weibo?q=%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%8F%A3%E7%A2%91&t=31&band_rank=14&Refer=top)
1. [吉隆口岸仍处于失联状态](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E4%BB%8D%E5%A4%84%E4%BA%8E%E5%A4%B1%E8%81%94%E7%8A%B6%E6%80%81%23&t=31&band_rank=15&Refer=top)
1. [安踏前CEO前脚说爱国扭头搬家美国](https://s.weibo.com//weibo?q=%23%E5%AE%89%E8%B8%8F%E5%89%8DCEO%E5%89%8D%E8%84%9A%E8%AF%B4%E7%88%B1%E5%9B%BD%E6%89%AD%E5%A4%B4%E6%90%AC%E5%AE%B6%E7%BE%8E%E5%9B%BD%23&t=31&band_rank=16&Refer=top)
1. [娜扎演技 进步](https://s.weibo.com//weibo?q=%E5%A8%9C%E6%89%8E%E6%BC%94%E6%8A%80%20%E8%BF%9B%E6%AD%A5&t=31&band_rank=17&Refer=top)
1. [500万人口政务App每天仅60人用](https://s.weibo.com//weibo?q=%23500%E4%B8%87%E4%BA%BA%E5%8F%A3%E6%94%BF%E5%8A%A1App%E6%AF%8F%E5%A4%A9%E4%BB%8560%E4%BA%BA%E7%94%A8%23&t=31&band_rank=18&Refer=top)
1. [警方通报女骑手高速狂飙时速超200公里](https://s.weibo.com//weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E9%AA%91%E6%89%8B%E9%AB%98%E9%80%9F%E7%8B%82%E9%A3%99%E6%97%B6%E9%80%9F%E8%B6%85200%E5%85%AC%E9%87%8C%23&t=31&band_rank=19&Refer=top)
1. [西部战区空军派无人机赴吉隆勘察](https://s.weibo.com//weibo?q=%23%E8%A5%BF%E9%83%A8%E6%88%98%E5%8C%BA%E7%A9%BA%E5%86%9B%E6%B4%BE%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%B5%B4%E5%90%89%E9%9A%86%E5%8B%98%E5%AF%9F%23&t=31&band_rank=20&Refer=top)
1. [成毅用工作人员肩膀压腿](https://s.weibo.com//weibo?q=%23%E6%88%90%E6%AF%85%E7%94%A8%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E8%82%A9%E8%86%80%E5%8E%8B%E8%85%BF%23&t=31&band_rank=21&Refer=top)
1. [尼泊尔方面找到97具山洪遇难者遗体](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%96%B9%E9%9D%A2%E6%89%BE%E5%88%B097%E5%85%B7%E5%B1%B1%E6%B4%AA%E9%81%87%E9%9A%BE%E8%80%85%E9%81%97%E4%BD%93%23&t=31&band_rank=22&Refer=top)
1. [千万不要把秘密留在行李箱](https://s.weibo.com//weibo?q=%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E7%A7%98%E5%AF%86%E7%95%99%E5%9C%A8%E8%A1%8C%E6%9D%8E%E7%AE%B1&t=31&band_rank=23&Refer=top)
1. [磁场干净的人有奶香味](https://s.weibo.com//weibo?q=%E7%A3%81%E5%9C%BA%E5%B9%B2%E5%87%80%E7%9A%84%E4%BA%BA%E6%9C%89%E5%A5%B6%E9%A6%99%E5%91%B3&t=31&band_rank=24&Refer=top)
1. [爱情公寓官方换头像](https://s.weibo.com//weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%AE%98%E6%96%B9%E6%8D%A2%E5%A4%B4%E5%83%8F%23&t=31&band_rank=25&Refer=top)
1. [社保有多厉害可能超乎你的想象](https://s.weibo.com//weibo?q=%E7%A4%BE%E4%BF%9D%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%E5%8F%AF%E8%83%BD%E8%B6%85%E4%B9%8E%E4%BD%A0%E7%9A%84%E6%83%B3%E8%B1%A1&t=31&band_rank=26&Refer=top)
1. [欢子搞错被告了](https://s.weibo.com//weibo?q=%23%E6%AC%A2%E5%AD%90%E6%90%9E%E9%94%99%E8%A2%AB%E5%91%8A%E4%BA%86%23&t=31&band_rank=27&Refer=top)
1. [原配称想不通第三者比自己大10岁](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E9%85%8D%E7%A7%B0%E6%83%B3%E4%B8%8D%E9%80%9A%E7%AC%AC%E4%B8%89%E8%80%85%E6%AF%94%E8%87%AA%E5%B7%B1%E5%A4%A710%E5%B2%81%23&t=31&band_rank=28&Refer=top)
1. [吉隆口岸附近多发地质灾害原因探秘](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E9%99%84%E8%BF%91%E5%A4%9A%E5%8F%91%E5%9C%B0%E8%B4%A8%E7%81%BE%E5%AE%B3%E5%8E%9F%E5%9B%A0%E6%8E%A2%E7%A7%98%23&t=31&band_rank=29&Refer=top)
1. [30岁女子长期吃外卖出现心衰征兆](https://s.weibo.com//weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E9%95%BF%E6%9C%9F%E5%90%83%E5%A4%96%E5%8D%96%E5%87%BA%E7%8E%B0%E5%BF%83%E8%A1%B0%E5%BE%81%E5%85%86%23&t=31&band_rank=30&Refer=top)
1. [婚礼41天丧夫女子被赶出婆家](https://s.weibo.com//weibo?q=%23%E5%A9%9A%E7%A4%BC41%E5%A4%A9%E4%B8%A7%E5%A4%AB%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%B5%B6%E5%87%BA%E5%A9%86%E5%AE%B6%23&t=31&band_rank=31&Refer=top)
1. [欢子起诉湖南卫视](https://s.weibo.com//weibo?q=%E6%AC%A2%E5%AD%90%E8%B5%B7%E8%AF%89%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86&t=31&band_rank=32&Refer=top)
1. [表达泛滥的时候就去抄一遍古文](https://s.weibo.com//weibo?q=%E8%A1%A8%E8%BE%BE%E6%B3%9B%E6%BB%A5%E7%9A%84%E6%97%B6%E5%80%99%E5%B0%B1%E5%8E%BB%E6%8A%84%E4%B8%80%E9%81%8D%E5%8F%A4%E6%96%87&t=31&band_rank=33&Refer=top)
1. [DYG周边 贵](https://s.weibo.com//weibo?q=DYG%E5%91%A8%E8%BE%B9%20%E8%B4%B5&t=31&band_rank=34&Refer=top)
1. [外媒盛赞王楚钦](https://s.weibo.com//weibo?q=%23%E5%A4%96%E5%AA%92%E7%9B%9B%E8%B5%9E%E7%8E%8B%E6%A5%9A%E9%92%A6%23&t=31&band_rank=35&Refer=top)
1. [尼泊尔失联外国游客多数来自印度](https://s.weibo.com//weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%A4%B1%E8%81%94%E5%A4%96%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%A4%9A%E6%95%B0%E6%9D%A5%E8%87%AA%E5%8D%B0%E5%BA%A6%23&t=31&band_rank=36&Refer=top)
1. [王安宇晒与贾冰白敬亭合照放C位](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%99%92%E4%B8%8E%E8%B4%BE%E5%86%B0%E7%99%BD%E6%95%AC%E4%BA%AD%E5%90%88%E7%85%A7%E6%94%BEC%E4%BD%8D%23&t=31&band_rank=37&Refer=top)
1. [理想汽车二季度业绩](https://s.weibo.com//weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%E4%BA%8C%E5%AD%A3%E5%BA%A6%E4%B8%9A%E7%BB%A9%23&t=31&band_rank=38&Refer=top)
1. [心软的人缺的不是狠是边界](https://s.weibo.com//weibo?q=%E5%BF%83%E8%BD%AF%E7%9A%84%E4%BA%BA%E7%BC%BA%E7%9A%84%E4%B8%8D%E6%98%AF%E7%8B%A0%E6%98%AF%E8%BE%B9%E7%95%8C&t=31&band_rank=39&Refer=top)
1. [现在就出发](https://s.weibo.com//weibo?q=%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91&t=31&band_rank=40&Refer=top)
1. [用洗衣机洗鞋的人天塌了](https://s.weibo.com//weibo?q=%23%E7%94%A8%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%B4%97%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23&t=31&band_rank=41&Refer=top)
1. [刘翔名下企业已注销](https://s.weibo.com//weibo?q=%23%E5%88%98%E7%BF%94%E5%90%8D%E4%B8%8B%E4%BC%81%E4%B8%9A%E5%B7%B2%E6%B3%A8%E9%94%80%23&t=31&band_rank=42&Refer=top)
1. [中印边界问题8点成果共识](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%8D%B0%E8%BE%B9%E7%95%8C%E9%97%AE%E9%A2%988%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86%23&t=31&band_rank=43&Refer=top)
1. [这竟然是冯绍峰](https://s.weibo.com//weibo?q=%23%E8%BF%99%E7%AB%9F%E7%84%B6%E6%98%AF%E5%86%AF%E7%BB%8D%E5%B3%B0%23&t=31&band_rank=44&Refer=top)
1. [老凤祥业绩](https://s.weibo.com//weibo?q=%23%E8%80%81%E5%87%A4%E7%A5%A5%E4%B8%9A%E7%BB%A9%23&t=31&band_rank=45&Refer=top)
1. [年轻人真的把多运动听进去了](https://s.weibo.com//weibo?q=%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9C%9F%E7%9A%84%E6%8A%8A%E5%A4%9A%E8%BF%90%E5%8A%A8%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86&t=31&band_rank=46&Refer=top)
1. [无畏到底有几个好哥哥](https://s.weibo.com//weibo?q=%23%E6%97%A0%E7%95%8F%E5%88%B0%E5%BA%95%E6%9C%89%E5%87%A0%E4%B8%AA%E5%A5%BD%E5%93%A5%E5%93%A5%23&t=31&band_rank=47&Refer=top)
1. [黄金价格持续上涨](https://s.weibo.com//weibo?q=%E9%BB%84%E9%87%91%E4%BB%B7%E6%A0%BC%E6%8C%81%E7%BB%AD%E4%B8%8A%E6%B6%A8&t=31&band_rank=48&Refer=top)
1. [张桂源什么时候营业](https://s.weibo.com//weibo?q=%E5%BC%A0%E6%A1%82%E6%BA%90%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E8%90%A5%E4%B8%9A&t=31&band_rank=49&Refer=top)
1. [中国女排3比0中国台北](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%940%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
