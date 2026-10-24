# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-25 02:10:59

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
<!-- 最后更新时间 Sun Oct 25 2026 02:20:50 GMT+0800 (China Standard Time) -->

1. [菲两架军机空中相撞画面曝光](https://so.toutiao.com/search?keyword=菲两架军机空中相撞画面曝光)
1. [金正恩访问丹东 王沪宁陪同](https://so.toutiao.com/search?keyword=金正恩访问丹东%20王沪宁陪同)
1. [子弟兵为西藏震区受灾群众煮上热饭](https://so.toutiao.com/search?keyword=子弟兵为西藏震区受灾群众煮上热饭)
1. [美解密UFO档案：黑三角3秒飞2.4公里](https://so.toutiao.com/search?keyword=美解密UFO档案：黑三角3秒飞2.4公里)
1. [乌鸦喝水不扔石子了直接找人帮忙](https://so.toutiao.com/search?keyword=乌鸦喝水不扔石子了直接找人帮忙)
1. [2025年全国初婚人数1042.33万](https://so.toutiao.com/search?keyword=2025年全国初婚人数1042.33万)
1. [菲防长叫嚣“战争行为”恐吓中国](https://so.toutiao.com/search?keyword=菲防长叫嚣“战争行为”恐吓中国)
1. [年轻人正在抛弃帆布鞋](https://so.toutiao.com/search?keyword=年轻人正在抛弃帆布鞋)
1. [博主：预计下周汽油调价](https://so.toutiao.com/search?keyword=博主：预计下周汽油调价)
1. [评论员：辽宁舰或正为山东舰积累经验](https://so.toutiao.com/search?keyword=评论员：辽宁舰或正为山东舰积累经验)
1. [新郎新娘回应毛不易婚礼发言](https://so.toutiao.com/search?keyword=新郎新娘回应毛不易婚礼发言)
1. [四价流感疫苗消失了？真相来了](https://so.toutiao.com/search?keyword=四价流感疫苗消失了？真相来了)
1. [李冰冰任泉在清华被偶遇](https://so.toutiao.com/search?keyword=李冰冰任泉在清华被偶遇)
1. [西藏巴青县地震前后遥感图发布](https://so.toutiao.com/search?keyword=西藏巴青县地震前后遥感图发布)
1. [金正恩向抗美援朝纪念塔敬献花篮](https://so.toutiao.com/search?keyword=金正恩向抗美援朝纪念塔敬献花篮)
1. [父亲突发脑梗儿子用豆包抢出救命时间](https://so.toutiao.com/search?keyword=父亲突发脑梗儿子用豆包抢出救命时间)
1. [媒体评迪丽热巴造型师被指“逼宫”](https://so.toutiao.com/search?keyword=媒体评迪丽热巴造型师被指“逼宫”)
1. [俄首次立法接纳中国标准轨有何影响](https://so.toutiao.com/search?keyword=俄首次立法接纳中国标准轨有何影响)
1. [西藏震区小学墙体裂缝比拳头还大](https://so.toutiao.com/search?keyword=西藏震区小学墙体裂缝比拳头还大)
1. [俄乌同意局部停火](https://so.toutiao.com/search?keyword=俄乌同意局部停火)
1. [第一批拿到iPhone Duo的人心态有点崩](https://so.toutiao.com/search?keyword=第一批拿到iPhone%20Duo的人心态有点崩)
1. [为什么建议女性做抗阻运动](https://so.toutiao.com/search?keyword=为什么建议女性做抗阻运动)
1. [美国稀土大项目黄了](https://so.toutiao.com/search?keyword=美国稀土大项目黄了)
1. [医生：别让肾病拖成尿毒症](https://so.toutiao.com/search?keyword=医生：别让肾病拖成尿毒症)
1. [晚上睡觉总抽筋？可能不只是缺钙](https://so.toutiao.com/search?keyword=晚上睡觉总抽筋？可能不只是缺钙)
1. [全麻手术后记性会变差吗](https://so.toutiao.com/search?keyword=全麻手术后记性会变差吗)
1. [红军最小军团长唯一照片首次公开](https://so.toutiao.com/search?keyword=红军最小军团长唯一照片首次公开)
1. [上海静安寺对面现iPhone Duo雕塑](https://so.toutiao.com/search?keyword=上海静安寺对面现iPhone%20Duo雕塑)
1. [媒体：医学的严肃性不容消解](https://so.toutiao.com/search?keyword=媒体：医学的严肃性不容消解)
1. [AI泡沫或在2028年初破裂](https://so.toutiao.com/search?keyword=AI泡沫或在2028年初破裂)
1. [唐驳虎：菲媒号召“抵制中国货”](https://so.toutiao.com/search?keyword=唐驳虎：菲媒号召“抵制中国货”)
1. [二十届中央第八轮巡视对象公布](https://so.toutiao.com/search?keyword=二十届中央第八轮巡视对象公布)
1. [70岁董浩叔叔与妻子补拍婚纱照](https://so.toutiao.com/search?keyword=70岁董浩叔叔与妻子补拍婚纱照)
1. [张雪改良米饭为何引发打工人共情](https://so.toutiao.com/search?keyword=张雪改良米饭为何引发打工人共情)
1. [“苏超”决赛对阵出炉](https://so.toutiao.com/search?keyword=“苏超”决赛对阵出炉)
1. [迪丽热巴嘴衔蝴蝶惊艳亮相](https://so.toutiao.com/search?keyword=迪丽热巴嘴衔蝴蝶惊艳亮相)
1. [市场开始挑剔“避险资产”](https://so.toutiao.com/search?keyword=市场开始挑剔“避险资产”)
1. [小泉进次郎宣扬军事野心有何意图](https://so.toutiao.com/search?keyword=小泉进次郎宣扬军事野心有何意图)
1. [日本找美国求中国松绑稀土有何意图](https://so.toutiao.com/search?keyword=日本找美国求中国松绑稀土有何意图)
1. [二婚夫妻离世未留遗嘱 子女吵上法庭](https://so.toutiao.com/search?keyword=二婚夫妻离世未留遗嘱%20子女吵上法庭)
1. [红外相机“捕捉”秦岭生机](https://so.toutiao.com/search?keyword=红外相机“捕捉”秦岭生机)
1. [武汉三镇降级 4年前曾夺中超冠军](https://so.toutiao.com/search?keyword=武汉三镇降级%204年前曾夺中超冠军)
1. [演员李健：接力传承长征精神](https://so.toutiao.com/search?keyword=演员李健：接力传承长征精神)
1. [小伙手搓飞行滑板打破多少世俗偏见](https://so.toutiao.com/search?keyword=小伙手搓飞行滑板打破多少世俗偏见)
1. [蓉城6度错失冠军点](https://so.toutiao.com/search?keyword=蓉城6度错失冠军点)
1. [莫高义任云南省委书记](https://so.toutiao.com/search?keyword=莫高义任云南省委书记)
1. [“万岁山天团”集体空降常州奥体](https://so.toutiao.com/search?keyword=“万岁山天团”集体空降常州奥体)
1. [大头佛小演员：在家乡表演很自豪](https://so.toutiao.com/search?keyword=大头佛小演员：在家乡表演很自豪)
1. [俄乌就地停火能否实现](https://so.toutiao.com/search?keyword=俄乌就地停火能否实现)
1. [美国为何调整登月计划](https://so.toutiao.com/search?keyword=美国为何调整登月计划)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Sun Oct 25 2026 03:29:19 GMT+0800 (China Standard Time) -->

1. [中土网民爆发大规模互怼](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9C%9F%E7%BD%91%E6%B0%91%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%92%E6%80%BC)
1. [毛不易婚礼致辞争议](https://www.zhihu.com/search?q=%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E8%87%B4%E8%BE%9E%E4%BA%89%E8%AE%AE)
1. [LPL瑞士轮首轮全败](https://www.zhihu.com/search?q=LPL%E7%91%9E%E5%A3%AB%E8%BD%AE%E9%A6%96%E8%BD%AE%E5%85%A8%E8%B4%A5)
1. [秦始皇兵马俑上发现女性指纹](https://www.zhihu.com/search?q=%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%85%B5%E9%A9%AC%E4%BF%91%E4%B8%8A%E5%8F%91%E7%8E%B0%E5%A5%B3%E6%80%A7%E6%8C%87%E7%BA%B9)
1. [「死了么」App公布收费标准](https://www.zhihu.com/search?q=%E3%80%8C%E6%AD%BB%E4%BA%86%E4%B9%88%E3%80%8DApp%E5%85%AC%E5%B8%83%E6%94%B6%E8%B4%B9%E6%A0%87%E5%87%86)
1. [Kimi K3.1 Pro 正式发布](https://www.zhihu.com/search?q=Kimi%20K3.1%20Pro%20%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [iPhoneDuo屏幕开裂](https://www.zhihu.com/search?q=iPhoneDuo%E5%B1%8F%E5%B9%95%E5%BC%80%E8%A3%82)
1. [子祺事变](https://www.zhihu.com/search?q=%E5%AD%90%E7%A5%BA%E4%BA%8B%E5%8F%98)
1. [三部门调查尊界刹车踏板支架断裂问题](https://www.zhihu.com/search?q=%E4%B8%89%E9%83%A8%E9%97%A8%E8%B0%83%E6%9F%A5%E5%B0%8A%E7%95%8C%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82%E9%97%AE%E9%A2%98)
1. [宇树机器人侧空翻表演时甩断腿](https://www.zhihu.com/search?q=%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BE%A7%E7%A9%BA%E7%BF%BB%E8%A1%A8%E6%BC%94%E6%97%B6%E7%94%A9%E6%96%AD%E8%85%BF)
1. [法国发生近年来最严重暴力骚乱](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E5%8F%91%E7%94%9F%E8%BF%91%E5%B9%B4%E6%9D%A5%E6%9C%80%E4%B8%A5%E9%87%8D%E6%9A%B4%E5%8A%9B%E9%AA%9A%E4%B9%B1)
1. [BLG 0:1 KOI](https://www.zhihu.com/search?q=BLG%200%3A1%20KOI)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Sun Oct 25 2026 02:10:59 GMT+0800 (China Standard Time) -->

1. [国务院办公厅称要「有效减缓人工智能应用就业替代影响」，释放出什么信号？可能带来哪些实际影响？](https://www.zhihu.com/question/2097043375547536400)
1. [9 月日产本田在华销量均跌超五成，为何日系车遭遇大幅下滑？](https://www.zhihu.com/question/2095176252785157400)
1. [为什么腾讯有了QQ这么庞大的用户基础群之后要开发微信呢？](https://www.zhihu.com/question/1926924740225922600)
1. [为什么现在很多公立的幼儿园不教拼音，但是到了小学默认你是会拼音的状态？](https://www.zhihu.com/question/1911014119206818800)
1. [男孩偷超市饮料，被父亲拿着戒尺送到派出所「自首」，感受手铐重量后向店主道歉，你支持这种教育方式吗？](https://www.zhihu.com/question/2097008886175872500)
1. [2026年中国票房第三名《功夫女足》跌至 5.9 分，是否可以印证冯小刚当年的话是对的？](https://www.zhihu.com/question/2097104543138030800)
1. [诺奖得主 Hassabis 称 AGI 最快 2 年内到来，如何看待这一预判？](https://www.zhihu.com/question/2096743580895397000)
1. [年轻人吐槽扔垃圾时小区老人当面翻垃圾、伸手拿纸箱，这种「扔垃圾羞耻症」背后折射出什么？](https://www.zhihu.com/question/2096151804308190000)
1. [宇树机器人侧空翻表演时甩断腿，问题可能出在哪里？出现这种情况正常吗？](https://www.zhihu.com/question/2097252062257832400)
1. [9岁孩子开门杀致路人死亡，司机获刑10个月缓刑1年，开门的是乘客，为何判刑的是司机？带给我们哪些启示？](https://www.zhihu.com/question/2096896642700013800)
1. [证监会核准设立花旗证券（中国）有限公司，将对国内券商行业带来哪些影响？](https://www.zhihu.com/question/2097003942836007700)
1. [你怎么看毛不易在女性好友婚礼上的致辞，算越界吗？为什么「结婚越来越不意味着什么」引发热议？](https://www.zhihu.com/question/2096550287901308000)
1. [7000名玩家票选最烂画面效果，动态模糊以80%得票率夺冠，为什么这个技术现在如此令人讨厌？](https://www.zhihu.com/question/2093004562508601300)
1. [领导让你去他车里拿茅台，但车里没有怎么办？](https://www.zhihu.com/question/1919848515183568600)
1. [如果小时候的你看到现在的育儿方式，会羡慕还是不理解？](https://www.zhihu.com/question/2094507218532053800)
1. [内娱密集曝出好多新孩子，被网友戏称「大怀孕时代」，为什么最近很多明星选择怀孕生子？](https://www.zhihu.com/question/2095558414470309400)
1. [有哪些曾经只有专业车手才能做的事，现在普通人开车也能体验到？](https://www.zhihu.com/question/2096971448376210700)
1. [夫妻花67.3万买劳力士却不挑选不试戴，店员果断报警，最终证实夫妻两人遭遇诈骗，这背后有着怎样的骗局？](https://www.zhihu.com/question/2094830367932770300)
1. [请问为啥网上很多人说大众高尔夫好开？](https://www.zhihu.com/question/2007999040508413000)
1. [为什么江西小炒火遍江南？](https://www.zhihu.com/question/1942709516211839500)
1. [iPhone Duo开售，每人限购两部，你买到了吗？很多人刚开箱就屏幕开裂，你遇到了吗？使用感受如何？](https://www.zhihu.com/question/2096894681745286400)
1. [「今晚的月色真美」为什么会是「我爱你」的意思？](https://www.zhihu.com/question/22366163)
1. [养孩子，到底算投资还是算爱？](https://www.zhihu.com/question/2094412940313112800)
1. [月薪两万但毫无意义，该坚持吗？](https://www.zhihu.com/question/2096685774104163600)
1. [如何看待 S16 瑞士轮首日涵艺怒喷「iG TES 打不过算了，你 AL 和 BLG 赢不了真该死」？](https://www.zhihu.com/question/2097257253132662800)
1. [为什么阿根廷在奥运会上拿的金牌不多，却不被认为是体育弱国？](https://www.zhihu.com/question/2091925938535769300)
1. [留美在读女博士答辩失利，向实验室同门咖啡机投毒「丙烯酰胺」，如何看待这一事件？](https://www.zhihu.com/question/2096228188099540200)
1. [为什么阿里巴巴和腾讯估值低，股价却总是下跌？](https://www.zhihu.com/question/2094836561221251800)
1. [AI 写代码太快，Review 不过来，要不要违背祖训放弃 Review？](https://www.zhihu.com/question/2094239068095602700)
1. [星巴克施行消费入座，门店店员称「消费入座」为倡议性质，空座充足时不会劝离，会增加一线员工负担吗？](https://www.zhihu.com/question/2096615362607445500)

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
<!-- 最后更新时间 Sun Oct 25 2026 02:15:19 GMT+0800 (China Standard Time) -->

1. [翘首木船见证革命信仰](https://s.weibo.com//weibo?q=%23%E7%BF%98%E9%A6%96%E6%9C%A8%E8%88%B9%E8%A7%81%E8%AF%81%E9%9D%A9%E5%91%BD%E4%BF%A1%E4%BB%B0%23&Refer=new_time)
1. [女生不要谈太久的恋爱](https://s.weibo.com//weibo?q=%E5%A5%B3%E7%94%9F%E4%B8%8D%E8%A6%81%E8%B0%88%E5%A4%AA%E4%B9%85%E7%9A%84%E6%81%8B%E7%88%B1&t=31&band_rank=1&Refer=top)
1. [小说里为什么没有广东霸总](https://s.weibo.com//weibo?q=%E5%B0%8F%E8%AF%B4%E9%87%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E6%9C%89%E5%B9%BF%E4%B8%9C%E9%9C%B8%E6%80%BB&t=31&band_rank=2&Refer=top)
1. [以信心汇聚力量以合作破解难题](https://s.weibo.com//weibo?q=%23%E4%BB%A5%E4%BF%A1%E5%BF%83%E6%B1%87%E8%81%9A%E5%8A%9B%E9%87%8F%E4%BB%A5%E5%90%88%E4%BD%9C%E7%A0%B4%E8%A7%A3%E9%9A%BE%E9%A2%98%23&t=31&band_rank=3&Refer=top)
1. [许飞厉娜 再见爱人](https://s.weibo.com//weibo?q=%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%20%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA&t=31&band_rank=4&Refer=top)
1. [王俊凯 甲乙丙丁](https://s.weibo.com//weibo?q=%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E7%94%B2%E4%B9%99%E4%B8%99%E4%B8%81&t=31&band_rank=5&Refer=top)
1. [毛不易婚礼发言引网友争议](https://s.weibo.com//weibo?q=%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%E5%BC%95%E7%BD%91%E5%8F%8B%E4%BA%89%E8%AE%AE&t=31&band_rank=6&Refer=top)
1. [内娱这种瘦成骷髅的风气可以停止了吗](https://s.weibo.com//weibo?q=%23%E5%86%85%E5%A8%B1%E8%BF%99%E7%A7%8D%E7%98%A6%E6%88%90%E9%AA%B7%E9%AB%85%E7%9A%84%E9%A3%8E%E6%B0%94%E5%8F%AF%E4%BB%A5%E5%81%9C%E6%AD%A2%E4%BA%86%E5%90%97%23&t=31&band_rank=7&Refer=top)
1. [九成美称官司已开庭待判决](https://s.weibo.com//weibo?q=%E4%B9%9D%E6%88%90%E7%BE%8E%E7%A7%B0%E5%AE%98%E5%8F%B8%E5%B7%B2%E5%BC%80%E5%BA%AD%E5%BE%85%E5%88%A4%E5%86%B3&t=31&band_rank=8&Refer=top)
1. [LPL与LCK瑞士轮现状](https://s.weibo.com//weibo?q=%23LPL%E4%B8%8ELCK%E7%91%9E%E5%A3%AB%E8%BD%AE%E7%8E%B0%E7%8A%B6%23&t=31&band_rank=9&Refer=top)
1. [徐嘉余50米仰泳破世界纪录](https://s.weibo.com//weibo?q=%E5%BE%90%E5%98%89%E4%BD%9950%E7%B1%B3%E4%BB%B0%E6%B3%B3%E7%A0%B4%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95&t=31&band_rank=10&Refer=top)
1. [曝刘学义张予曦差点结婚](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%88%98%E5%AD%A6%E4%B9%89%E5%BC%A0%E4%BA%88%E6%9B%A6%E5%B7%AE%E7%82%B9%E7%BB%93%E5%A9%9A%23&t=31&band_rank=11&Refer=top)
1. [迪丽热巴蝴蝶飞走是巧合](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%9D%B4%E8%9D%B6%E9%A3%9E%E8%B5%B0%E6%98%AF%E5%B7%A7%E5%90%88%23&t=31&band_rank=12&Refer=top)
1. [新郎新娘回应毛不易婚礼发言](https://s.weibo.com//weibo?q=%23%E6%96%B0%E9%83%8E%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%23&t=31&band_rank=13&Refer=top)
1. [没想到何超莲是真的在打电话](https://s.weibo.com//weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E4%BD%95%E8%B6%85%E8%8E%B2%E6%98%AF%E7%9C%9F%E7%9A%84%E5%9C%A8%E6%89%93%E7%94%B5%E8%AF%9D%23&t=31&band_rank=14&Refer=top)
1. [虞书欣侯明昊行程](https://s.weibo.com//weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BE%AF%E6%98%8E%E6%98%8A%E8%A1%8C%E7%A8%8B%23&t=31&band_rank=15&Refer=top)
1. [鸡蛋别放冰箱门格子里](https://s.weibo.com//weibo?q=%23%E9%B8%A1%E8%9B%8B%E5%88%AB%E6%94%BE%E5%86%B0%E7%AE%B1%E9%97%A8%E6%A0%BC%E5%AD%90%E9%87%8C%23&t=31&band_rank=16&Refer=top)
1. [曝手机平板产品线将停更](https://s.weibo.com//weibo?q=%E6%9B%9D%E6%89%8B%E6%9C%BA%E5%B9%B3%E6%9D%BF%E4%BA%A7%E5%93%81%E7%BA%BF%E5%B0%86%E5%81%9C%E6%9B%B4&t=31&band_rank=17&Refer=top)
1. [乒乓球亚锦赛男单四强](https://s.weibo.com//weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E4%BA%9A%E9%94%A6%E8%B5%9B%E7%94%B7%E5%8D%95%E5%9B%9B%E5%BC%BA%23&t=31&band_rank=18&Refer=top)
1. [功夫女足烂番茄0分开局](https://s.weibo.com//weibo?q=%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%83%82%E7%95%AA%E8%8C%840%E5%88%86%E5%BC%80%E5%B1%80&t=31&band_rank=19&Refer=top)
1. [38岁产妇催产时突发羊水栓塞至今未醒](https://s.weibo.com//weibo?q=%2338%E5%B2%81%E4%BA%A7%E5%A6%87%E5%82%AC%E4%BA%A7%E6%97%B6%E7%AA%81%E5%8F%91%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E8%87%B3%E4%BB%8A%E6%9C%AA%E9%86%92%23&t=31&band_rank=20&Refer=top)
1. [iPhoneDuo破发](https://s.weibo.com//weibo?q=%23iPhoneDuo%E7%A0%B4%E5%8F%91%23&t=31&band_rank=21&Refer=top)
1. [曝刘学义张予曦曾在一起三年多](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%88%98%E5%AD%A6%E4%B9%89%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%9B%BE%E5%9C%A8%E4%B8%80%E8%B5%B7%E4%B8%89%E5%B9%B4%E5%A4%9A%23&t=31&band_rank=22&Refer=top)
1. [女子因丈夫翻垃圾大吵一架](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E5%9B%A0%E4%B8%88%E5%A4%AB%E7%BF%BB%E5%9E%83%E5%9C%BE%E5%A4%A7%E5%90%B5%E4%B8%80%E6%9E%B6&t=31&band_rank=23&Refer=top)
1. [丁程鑫 听马哥怎么说](https://s.weibo.com//weibo?q=%E4%B8%81%E7%A8%8B%E9%91%AB%20%E5%90%AC%E9%A9%AC%E5%93%A5%E6%80%8E%E4%B9%88%E8%AF%B4&t=31&band_rank=24&Refer=top)
1. [胡歌直播刘涛惊喜出镜](https://s.weibo.com//weibo?q=%23%E8%83%A1%E6%AD%8C%E7%9B%B4%E6%92%AD%E5%88%98%E6%B6%9B%E6%83%8A%E5%96%9C%E5%87%BA%E9%95%9C%23&t=31&band_rank=25&Refer=top)
1. [毛林林在直播中说田曦薇七十多斤](https://s.weibo.com//weibo?q=%23%E6%AF%9B%E6%9E%97%E6%9E%97%E5%9C%A8%E7%9B%B4%E6%92%AD%E4%B8%AD%E8%AF%B4%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%83%E5%8D%81%E5%A4%9A%E6%96%A4%23&t=31&band_rank=26&Refer=top)
1. [前空姐回应空姐月薪四五万传闻](https://s.weibo.com//weibo?q=%E5%89%8D%E7%A9%BA%E5%A7%90%E5%9B%9E%E5%BA%94%E7%A9%BA%E5%A7%90%E6%9C%88%E8%96%AA%E5%9B%9B%E4%BA%94%E4%B8%87%E4%BC%A0%E9%97%BB&t=31&band_rank=27&Refer=top)
1. [2026全国游泳锦标赛25米](https://s.weibo.com//weibo?q=2026%E5%85%A8%E5%9B%BD%E6%B8%B8%E6%B3%B3%E9%94%A6%E6%A0%87%E8%B5%9B25%E7%B1%B3&t=31&band_rank=28&Refer=top)
1. [国考报名人数突破330万](https://s.weibo.com//weibo?q=%E5%9B%BD%E8%80%83%E6%8A%A5%E5%90%8D%E4%BA%BA%E6%95%B0%E7%AA%81%E7%A0%B4330%E4%B8%87&t=31&band_rank=29&Refer=top)
1. [沈阳一商场保洁大叔凭高颜值出圈](https://s.weibo.com//weibo?q=%23%E6%B2%88%E9%98%B3%E4%B8%80%E5%95%86%E5%9C%BA%E4%BF%9D%E6%B4%81%E5%A4%A7%E5%8F%94%E5%87%AD%E9%AB%98%E9%A2%9C%E5%80%BC%E5%87%BA%E5%9C%88%23&t=31&band_rank=30&Refer=top)
1. [AL对战TES](https://s.weibo.com//weibo?q=AL%E5%AF%B9%E6%88%98TES&t=31&band_rank=31&Refer=top)
1. [国考83个职位无人报](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E8%80%8383%E4%B8%AA%E8%81%8C%E4%BD%8D%E6%97%A0%E4%BA%BA%E6%8A%A5%23&t=31&band_rank=32&Refer=top)
1. [尚公主编剧水平](https://s.weibo.com//weibo?q=%E5%B0%9A%E5%85%AC%E4%B8%BB%E7%BC%96%E5%89%A7%E6%B0%B4%E5%B9%B3&t=31&band_rank=33&Refer=top)
1. [点进李昀锐直播间都懵了](https://s.weibo.com//weibo?q=%23%E7%82%B9%E8%BF%9B%E6%9D%8E%E6%98%80%E9%94%90%E7%9B%B4%E6%92%AD%E9%97%B4%E9%83%BD%E6%87%B5%E4%BA%86%23&t=31&band_rank=34&Refer=top)
1. [金智媛居然跳了说出你的愿望](https://s.weibo.com//weibo?q=%E9%87%91%E6%99%BA%E5%AA%9B%E5%B1%85%E7%84%B6%E8%B7%B3%E4%BA%86%E8%AF%B4%E5%87%BA%E4%BD%A0%E7%9A%84%E6%84%BF%E6%9C%9B&t=31&band_rank=35&Refer=top)
1. [黄多多14岁就开始健身了](https://s.weibo.com//weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A14%E5%B2%81%E5%B0%B1%E5%BC%80%E5%A7%8B%E5%81%A5%E8%BA%AB%E4%BA%86%23&t=31&band_rank=36&Refer=top)
1. [杨超越的情商](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E7%9A%84%E6%83%85%E5%95%86%23&t=31&band_rank=37&Refer=top)
1. [小城良方 辽宁养蚂蚁骗局](https://s.weibo.com//weibo?q=%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%20%E8%BE%BD%E5%AE%81%E5%85%BB%E8%9A%82%E8%9A%81%E9%AA%97%E5%B1%80&t=31&band_rank=38&Refer=top)
1. [婚姻是强者的游戏不是弱者的避风港](https://s.weibo.com//weibo?q=%E5%A9%9A%E5%A7%BB%E6%98%AF%E5%BC%BA%E8%80%85%E7%9A%84%E6%B8%B8%E6%88%8F%E4%B8%8D%E6%98%AF%E5%BC%B1%E8%80%85%E7%9A%84%E9%81%BF%E9%A3%8E%E6%B8%AF&t=31&band_rank=39&Refer=top)
1. [镜头转到李昀锐真的好清秀帅气啊](https://s.weibo.com//weibo?q=%23%E9%95%9C%E5%A4%B4%E8%BD%AC%E5%88%B0%E6%9D%8E%E6%98%80%E9%94%90%E7%9C%9F%E7%9A%84%E5%A5%BD%E6%B8%85%E7%A7%80%E5%B8%85%E6%B0%94%E5%95%8A%23&t=31&band_rank=40&Refer=top)
1. [尚公主被指人抬剧](https://s.weibo.com//weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E8%A2%AB%E6%8C%87%E4%BA%BA%E6%8A%AC%E5%89%A7%23&t=31&band_rank=41&Refer=top)
1. [突然get到了杨超越毫不费力的绝美](https://s.weibo.com//weibo?q=%23%E7%AA%81%E7%84%B6get%E5%88%B0%E4%BA%86%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%AF%AB%E4%B8%8D%E8%B4%B9%E5%8A%9B%E7%9A%84%E7%BB%9D%E7%BE%8E%23&t=31&band_rank=42&Refer=top)
1. [张雪峰妈妈听受助学子怀念儿子哭了](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%A6%88%E5%A6%88%E5%90%AC%E5%8F%97%E5%8A%A9%E5%AD%A6%E5%AD%90%E6%80%80%E5%BF%B5%E5%84%BF%E5%AD%90%E5%93%AD%E4%BA%86%23&t=31&band_rank=43&Refer=top)
1. [去年全国结婚登记676万对](https://s.weibo.com//weibo?q=%23%E5%8E%BB%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0676%E4%B8%87%E5%AF%B9%23&t=31&band_rank=44&Refer=top)
1. [女子称亲姐抢自己老公](https://s.weibo.com//weibo?q=%E5%A5%B3%E5%AD%90%E7%A7%B0%E4%BA%B2%E5%A7%90%E6%8A%A2%E8%87%AA%E5%B7%B1%E8%80%81%E5%85%AC&t=31&band_rank=45&Refer=top)
1. [马山县政府回应多只猴子喝水溺亡](https://s.weibo.com//weibo?q=%23%E9%A9%AC%E5%B1%B1%E5%8E%BF%E6%94%BF%E5%BA%9C%E5%9B%9E%E5%BA%94%E5%A4%9A%E5%8F%AA%E7%8C%B4%E5%AD%90%E5%96%9D%E6%B0%B4%E6%BA%BA%E4%BA%A1%23&t=31&band_rank=46&Refer=top)
1. [反复跟咪咪说我们要走了](https://s.weibo.com//weibo?q=%E5%8F%8D%E5%A4%8D%E8%B7%9F%E5%92%AA%E5%92%AA%E8%AF%B4%E6%88%91%E4%BB%AC%E8%A6%81%E8%B5%B0%E4%BA%86&t=31&band_rank=47&Refer=top)
1. [琵琶虾我长成这样应该不会有人吃吧](https://s.weibo.com//weibo?q=%23%E7%90%B5%E7%90%B6%E8%99%BE%E6%88%91%E9%95%BF%E6%88%90%E8%BF%99%E6%A0%B7%E5%BA%94%E8%AF%A5%E4%B8%8D%E4%BC%9A%E6%9C%89%E4%BA%BA%E5%90%83%E5%90%A7%23&t=31&band_rank=48&Refer=top)
1. [功夫小猫爆红全网](https://s.weibo.com//weibo?q=%E5%8A%9F%E5%A4%AB%E5%B0%8F%E7%8C%AB%E7%88%86%E7%BA%A2%E5%85%A8%E7%BD%91&t=31&band_rank=49&Refer=top)
1. [52岁阿姨吐槽中年找老伴太难了](https://s.weibo.com//weibo?q=52%E5%B2%81%E9%98%BF%E5%A7%A8%E5%90%90%E6%A7%BD%E4%B8%AD%E5%B9%B4%E6%89%BE%E8%80%81%E4%BC%B4%E5%A4%AA%E9%9A%BE%E4%BA%86&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
