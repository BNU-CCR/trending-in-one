# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-12 06:00:25

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
<!-- 最后更新时间 Thu Nov 12 2026 06:15:27 GMT+0800 (China Standard Time) -->

1. [今年双11货架电商怎么就又行了](https://so.toutiao.com/search?keyword=今年双11货架电商怎么就又行了)
1. [长虹电器原董事长倪润峰去世](https://so.toutiao.com/search?keyword=长虹电器原董事长倪润峰去世)
1. [为世界经济注入更多确定性和正能量](https://so.toutiao.com/search?keyword=为世界经济注入更多确定性和正能量)
1. [“包子2元停车10元”成历史](https://so.toutiao.com/search?keyword=“包子2元停车10元”成历史)
1. [石家庄天降陨石 数百人扎堆寻宝](https://so.toutiao.com/search?keyword=石家庄天降陨石%20数百人扎堆寻宝)
1. [男性口咽癌发病率显著上升](https://so.toutiao.com/search?keyword=男性口咽癌发病率显著上升)
1. [当幼儿园陆续消失 育儿焦虑退潮了吗](https://so.toutiao.com/search?keyword=当幼儿园陆续消失%20育儿焦虑退潮了吗)
1. [罗大佑炮轰赖清德：不要脸到家了](https://so.toutiao.com/search?keyword=罗大佑炮轰赖清德：不要脸到家了)
1. [这才叫山西大同的猫冬方式](https://so.toutiao.com/search?keyword=这才叫山西大同的猫冬方式)
1. [5个上门维修师傅只有2个说了实话](https://so.toutiao.com/search?keyword=5个上门维修师傅只有2个说了实话)
1. [警惕“车辆召回”虚假信息](https://so.toutiao.com/search?keyword=警惕“车辆召回”虚假信息)
1. [女孩没带课本被老师打到抽搐倒地](https://so.toutiao.com/search?keyword=女孩没带课本被老师打到抽搐倒地)
1. [18岁少女检出18种HPV亚型阳性](https://so.toutiao.com/search?keyword=18岁少女检出18种HPV亚型阳性)
1. [男子结婚25年没让妻子上过一天班](https://so.toutiao.com/search?keyword=男子结婚25年没让妻子上过一天班)
1. [港媒曝霍启山娜然婚礼请柬](https://so.toutiao.com/search?keyword=港媒曝霍启山娜然婚礼请柬)
1. [儿媳妇调侃生病婆婆句句扎心](https://so.toutiao.com/search?keyword=儿媳妇调侃生病婆婆句句扎心)
1. [中产的下一个精打细算：超级双11](https://so.toutiao.com/search?keyword=中产的下一个精打细算：超级双11)
1. [全红婵为高台跳水世界杯肇庆站打call](https://so.toutiao.com/search?keyword=全红婵为高台跳水世界杯肇庆站打call)
1. [特斯拉中国销量跌66%为何不慌](https://so.toutiao.com/search?keyword=特斯拉中国销量跌66%为何不慌)
1. [梁家辉拒绝工作人员帮拿金鸡奖杯](https://so.toutiao.com/search?keyword=梁家辉拒绝工作人员帮拿金鸡奖杯)
1. [中方回应中日领导人APEC是否会晤](https://so.toutiao.com/search?keyword=中方回应中日领导人APEC是否会晤)
1. [山姆超市一羽绒服卖断货](https://so.toutiao.com/search?keyword=山姆超市一羽绒服卖断货)
1. [孙中山后人：统一是孙中山一生的信念](https://so.toutiao.com/search?keyword=孙中山后人：统一是孙中山一生的信念)
1. [12306回应外籍乘客车厢门口吸烟](https://so.toutiao.com/search?keyword=12306回应外籍乘客车厢门口吸烟)
1. [张雪：公司今年工资大概率普涨10%](https://so.toutiao.com/search?keyword=张雪：公司今年工资大概率普涨10%)
1. [浙江大降温 499元羽绒服十分火爆](https://so.toutiao.com/search?keyword=浙江大降温%20499元羽绒服十分火爆)
1. [成都1900岁银杏进入最佳观赏期](https://so.toutiao.com/search?keyword=成都1900岁银杏进入最佳观赏期)
1. [彩票店主代买彩票中825万私自兑奖](https://so.toutiao.com/search?keyword=彩票店主代买彩票中825万私自兑奖)
1. [地产老将回归释放什么信号](https://so.toutiao.com/search?keyword=地产老将回归释放什么信号)
1. [女子膝关节反复卡壳查出盘状半月板](https://so.toutiao.com/search?keyword=女子膝关节反复卡壳查出盘状半月板)
1. [猪价下跌 巨头何去何从](https://so.toutiao.com/search?keyword=猪价下跌%20巨头何去何从)
1. [江苏通州城乡居民基础养老金十六连涨](https://so.toutiao.com/search?keyword=江苏通州城乡居民基础养老金十六连涨)
1. [100岁奶奶分享长寿秘诀](https://so.toutiao.com/search?keyword=100岁奶奶分享长寿秘诀)
1. [高叶回应获金鸡奖最佳女主](https://so.toutiao.com/search?keyword=高叶回应获金鸡奖最佳女主)
1. [俄方公布本轮俄美乌三方会谈成果](https://so.toutiao.com/search?keyword=俄方公布本轮俄美乌三方会谈成果)
1. [北方将出现强降雪 华南气温将回升](https://so.toutiao.com/search?keyword=北方将出现强降雪%20华南气温将回升)
1. [83岁奶奶长寿秘诀：每天梳头200次](https://so.toutiao.com/search?keyword=83岁奶奶长寿秘诀：每天梳头200次)
1. [蒋万安力挺罗大佑炮轰赖清德](https://so.toutiao.com/search?keyword=蒋万安力挺罗大佑炮轰赖清德)
1. [中微公司创始人尹志尧的刻蚀机人生](https://so.toutiao.com/search?keyword=中微公司创始人尹志尧的刻蚀机人生)
1. [猪价跌到成本线以下 为何还有人扩产](https://so.toutiao.com/search?keyword=猪价跌到成本线以下%20为何还有人扩产)
1. [外交部：中方没兴趣干涉加拿大内政](https://so.toutiao.com/search?keyword=外交部：中方没兴趣干涉加拿大内政)
1. [双11购物清单回归刚需](https://so.toutiao.com/search?keyword=双11购物清单回归刚需)
1. [曝徐正源去年不想让蓉城和韦世豪续约](https://so.toutiao.com/search?keyword=曝徐正源去年不想让蓉城和韦世豪续约)
1. [APEC会议和老百姓有什么关系](https://so.toutiao.com/search?keyword=APEC会议和老百姓有什么关系)
1. [上门维修乱象该当何“治”](https://so.toutiao.com/search?keyword=上门维修乱象该当何“治”)
1. [菲总统呼吁官员谨慎发表涉华言论](https://so.toutiao.com/search?keyword=菲总统呼吁官员谨慎发表涉华言论)
1. [APEC领导人会议周新闻中心启用](https://so.toutiao.com/search?keyword=APEC领导人会议周新闻中心启用)
1. [女子神色慌张取20万当彩礼 柜员报警](https://so.toutiao.com/search?keyword=女子神色慌张取20万当彩礼%20柜员报警)
1. [教培人走进养老院如何把慢生意做热](https://so.toutiao.com/search?keyword=教培人走进养老院如何把慢生意做热)
1. [青海省职工养老金计发基数公布](https://so.toutiao.com/search?keyword=青海省职工养老金计发基数公布)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Thu Nov 12 2026 10:56:23 GMT+0800 (China Standard Time) -->

1. [司美格鲁肽等减肥神药或致永久失明](https://www.zhihu.com/search?q=%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E7%AD%89%E5%87%8F%E8%82%A5%E7%A5%9E%E8%8D%AF%E6%88%96%E8%87%B4%E6%B0%B8%E4%B9%85%E5%A4%B1%E6%98%8E)
1. [胖东来洗发水陷罗生门](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E6%B4%97%E5%8F%91%E6%B0%B4%E9%99%B7%E7%BD%97%E7%94%9F%E9%97%A8)
1. [羊城晚报评王楚钦反思文](https://www.zhihu.com/search?q=%E7%BE%8A%E5%9F%8E%E6%99%9A%E6%8A%A5%E8%AF%84%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%8D%E6%80%9D%E6%96%87)
1. [BLG多大概率能打赢GenG](https://www.zhihu.com/search?q=BLG%E5%A4%9A%E5%A4%A7%E6%A6%82%E7%8E%87%E8%83%BD%E6%89%93%E8%B5%A2GenG)
1. [女子撞翻300斤切糕赔2万多](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E6%92%9E%E7%BF%BB300%E6%96%A4%E5%88%87%E7%B3%95%E8%B5%942%E4%B8%87%E5%A4%9A)
1. [黄仁勋再被曝出轨前高管](https://www.zhihu.com/search?q=%E9%BB%84%E4%BB%81%E5%8B%8B%E5%86%8D%E8%A2%AB%E6%9B%9D%E5%87%BA%E8%BD%A8%E5%89%8D%E9%AB%98%E7%AE%A1)
1. [高三生拼豆店干坐离开前留纸条道歉](https://www.zhihu.com/search?q=%E9%AB%98%E4%B8%89%E7%94%9F%E6%8B%BC%E8%B1%86%E5%BA%97%E5%B9%B2%E5%9D%90%E7%A6%BB%E5%BC%80%E5%89%8D%E7%95%99%E7%BA%B8%E6%9D%A1%E9%81%93%E6%AD%89)
1. [疑似秦始皇儿子头骨面容被复原](https://www.zhihu.com/search?q=%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E5%A4%B4%E9%AA%A8%E9%9D%A2%E5%AE%B9%E8%A2%AB%E5%A4%8D%E5%8E%9F)
1. [施工队为绕过钉子户直接抬高高速](https://www.zhihu.com/search?q=%E6%96%BD%E5%B7%A5%E9%98%9F%E4%B8%BA%E7%BB%95%E8%BF%87%E9%92%89%E5%AD%90%E6%88%B7%E7%9B%B4%E6%8E%A5%E6%8A%AC%E9%AB%98%E9%AB%98%E9%80%9F)
1. [比亚迪大唐被曝前后轮毂装反](https://www.zhihu.com/search?q=%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%A4%A7%E5%94%90%E8%A2%AB%E6%9B%9D%E5%89%8D%E5%90%8E%E8%BD%AE%E6%AF%82%E8%A3%85%E5%8F%8D)
1. [比亚迪就大唐轮辋装配问题致歉](https://www.zhihu.com/search?q=%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%B0%B1%E5%A4%A7%E5%94%90%E8%BD%AE%E8%BE%8B%E8%A3%85%E9%85%8D%E9%97%AE%E9%A2%98%E8%87%B4%E6%AD%89)
1. [胖东来回应洗发水被指产地造假](https://www.zhihu.com/search?q=%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94%E6%B4%97%E5%8F%91%E6%B0%B4%E8%A2%AB%E6%8C%87%E4%BA%A7%E5%9C%B0%E9%80%A0%E5%81%87)
1. [员工微信发画地为牢被辞退](https://www.zhihu.com/search?q=%E5%91%98%E5%B7%A5%E5%BE%AE%E4%BF%A1%E5%8F%91%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E8%A2%AB%E8%BE%9E%E9%80%80)
1. [RTX5080暴跌4000元](https://www.zhihu.com/search?q=RTX5080%E6%9A%B4%E8%B7%8C4000%E5%85%83)
1. [拜登遇袭](https://www.zhihu.com/search?q=%E6%8B%9C%E7%99%BB%E9%81%87%E8%A2%AD)
1. [张雪拍卖款不捐韩红基金会](https://www.zhihu.com/search?q=%E5%BC%A0%E9%9B%AA%E6%8B%8D%E5%8D%96%E6%AC%BE%E4%B8%8D%E6%8D%90%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A)
1. [离岸信托个税10月入库超1200亿](https://www.zhihu.com/search?q=%E7%A6%BB%E5%B2%B8%E4%BF%A1%E6%89%98%E4%B8%AA%E7%A8%8E10%E6%9C%88%E5%85%A5%E5%BA%93%E8%B6%851200%E4%BA%BF)
1. [BLG 3-1 T1](https://www.zhihu.com/search?q=BLG%203-1%20T1)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Thu Nov 12 2026 06:00:25 GMT+0800 (China Standard Time) -->

1. [如何看待第39届金鸡奖《密档》郑大圣打败《南京照相馆》申奥、《给阿嬷的情书》蓝鸿春，爆冷获最佳导演？](https://www.zhihu.com/question/2103623629674133000)
1. [余承东正式官宣华为子品牌「星芒」（OSTA），可能面向哪些用户？它会如何与华为现有产品线区分？](https://www.zhihu.com/question/2103854627128959500)
1. [RTX50系列显卡价格出现回落，RTX5080售价已跌4000 元，有哪些原因？现在适合入手吗？](https://www.zhihu.com/question/2103329068573840600)
1. [如何看待房主因不满 35 万元拆迁赔偿直播施压，四川自永高速建设施工队直接改方案抬高跨过？](https://www.zhihu.com/question/2103486193320949200)
1. [贾国龙夫妇先后质押西贝直接持股，数额合计超 3200 万元，怎样解读？](https://www.zhihu.com/question/2103621085199426600)
1. [中国叫停软银收购瑞士 ABB 机器人业务，将对全球工业数据流转规则产生哪些影响？](https://www.zhihu.com/question/2102940552853448700)
1. [大学生免费领养小猫背上九千多元分期债务，逾期年化利率131.4%，「猫贷」可能有哪些坑？法律上合理吗？](https://www.zhihu.com/question/2103824514869978000)
1. [离岸信托个税申报累计超1600亿元，10月入库超1200亿，带动当月全国个税收入增长90%，怎样解读？](https://www.zhihu.com/question/2103903253570249200)
1. [BLG打赢GenG的概率有多大？](https://www.zhihu.com/question/2103283329470566400)
1. [沙僧在《西游记》中，除了挑担子外，出场的时候很少，为什么吴承恩在写《西游记》时不把他删掉？](https://www.zhihu.com/question/2053053168834065000)
1. [某律师为了不把敏感资料上传云端，用 8 张 V100 搭建一台数千瓦功耗的本地 AI 服务器值得吗？](https://www.zhihu.com/question/2103844614528395300)
1. [周瑜为什么那么年轻就早死了，有没有可能是孙权害了他?](https://www.zhihu.com/question/13333804798)
1. [大师兄Doublelift发问「如果BLG夺冠，这会是史上最具含金量的冠军吗」，你觉得是吗？](https://www.zhihu.com/question/2103838445835654100)
1. [王传君称演《爱情公寓》时「没有听到表演的召唤」，觉得这就是一份让自己走红的工作，怎么评价这个说法？](https://www.zhihu.com/question/2103417575438644000)
1. [小学男孩「嘉豪」总被嘲笑希望改名，名字是网络流行梗对孩子来说有多困扰？家长该怎么做？](https://www.zhihu.com/question/2103799113883935700)
1. [张雪宣布，冠军车拍卖款不再捐给韩红基金会，你怎么看？](https://www.zhihu.com/question/2103815372109518300)
1. [如何看待外媒曝比亚迪荷兰办公室遭突击搜查，相关电子记录被封存，捷豹路虎指控方程豹钛7逆向工程抄袭卫士？](https://www.zhihu.com/question/2103428518323475700)
1. [九寨黄龙机场多条航线被注销，为何全国超七成中小机场普遍陷入亏损？](https://www.zhihu.com/question/2098203287032013300)
1. [不少 AI 生成内容越来越晦涩难懂，Gemini 是怎么做到输出内容「说人话」的？](https://www.zhihu.com/question/2102869416480354600)
1. [妈妈嫌儿子预测身高 1 米 75「没法见人」要求拔高，背后原因有哪些？](https://www.zhihu.com/question/2099720105420764000)
1. [王健林 14 年后再任万达商管董事长，怎样解读这一调整？](https://www.zhihu.com/question/2103069568293763000)
1. [33岁玩家打《影之刃零》Boss三十多次依然失败，脑子看清了手却跟不上，中年玩家真打不动动作游戏了吗？](https://www.zhihu.com/question/2103636125969662700)
1. [如何评价「原神」7.2版本的幽境危战？](https://www.zhihu.com/question/2103790773963694000)
1. [10 月 20 万元以上新能源车销量榜出炉，前三名全是小米，哪些数据值得关注？当前市场格局如何？](https://www.zhihu.com/question/2103425545253778700)
1. [外交部表示中方就中俄美元首会晤同相关方保持着沟通，有哪些信息值得关注？](https://www.zhihu.com/question/2101336122487988700)
1. [男子与第三者在客栈发生关系后猝死，妻子向第三者和客栈索赔超百万元，一审被驳回，法律上如何分析？](https://www.zhihu.com/question/2103761363461829000)
1. [我国拟修改税收征收管理法，将稳慎加强对个人的税收征管，此举将产生哪些影响？](https://www.zhihu.com/question/2100596978145031700)
1. [2026 年前 10 个月我国货物贸易进出口 44.81 万亿元，同比增长 20% ，如何看待该数据？](https://www.zhihu.com/question/2103435580801656800)
1. [AI的科研能力远远大于90%以上的科研人员，以后科研人员只是实验操作员吗？](https://www.zhihu.com/question/2096914978712313900)
1. [青春期孩子常说「别管我」，父母该尊重边界还是主动追问？](https://www.zhihu.com/question/2085250490057625900)

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
<!-- 最后更新时间 Thu Nov 12 2026 06:48:56 GMT+0800 (China Standard Time) -->

1. [习近平主席这样寄语亚太发展](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%B8%BB%E5%B8%AD%E8%BF%99%E6%A0%B7%E5%AF%84%E8%AF%AD%E4%BA%9A%E5%A4%AA%E5%8F%91%E5%B1%95%23&Refer=new_time)
1. [正午阳光这是什么意思](https://s.weibo.com//weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E8%BF%99%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%23&t=31&band_rank=1&Refer=top)
1. [山姆399元充绒量300克羽绒服断货](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E5%A7%86399%E5%85%83%E5%85%85%E7%BB%92%E9%87%8F300%E5%85%8B%E7%BE%BD%E7%BB%92%E6%9C%8D%E6%96%AD%E8%B4%A7%23&t=31&band_rank=2&Refer=top)
1. [我国外贸的APEC底色越来越浓](https://s.weibo.com//weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%96%E8%B4%B8%E7%9A%84APEC%E5%BA%95%E8%89%B2%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%B5%93%23&t=31&band_rank=3&Refer=top)
1. [被砍断手指留学生遭朋友卷走数十万](https://s.weibo.com//weibo?q=%23%E8%A2%AB%E7%A0%8D%E6%96%AD%E6%89%8B%E6%8C%87%E7%95%99%E5%AD%A6%E7%94%9F%E9%81%AD%E6%9C%8B%E5%8F%8B%E5%8D%B7%E8%B5%B0%E6%95%B0%E5%8D%81%E4%B8%87%23&t=31&band_rank=4&Refer=top)
1. [奔驰CEO称在中国车要大得惊人](https://s.weibo.com//weibo?q=%23%E5%A5%94%E9%A9%B0CEO%E7%A7%B0%E5%9C%A8%E4%B8%AD%E5%9B%BD%E8%BD%A6%E8%A6%81%E5%A4%A7%E5%BE%97%E6%83%8A%E4%BA%BA%23&t=31&band_rank=5&Refer=top)
1. [赵丽颖起诉红果短剧](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%B5%B7%E8%AF%89%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%23&t=31&band_rank=6&Refer=top)
1. [霍启山娜然 结婚](https://s.weibo.com//weibo?q=%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%A8%9C%E7%84%B6%20%E7%BB%93%E5%A9%9A&t=31&band_rank=7&Refer=top)
1. [杨幂这一蹲真是神来之笔](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E5%B9%82%E8%BF%99%E4%B8%80%E8%B9%B2%E7%9C%9F%E6%98%AF%E7%A5%9E%E6%9D%A5%E4%B9%8B%E7%AC%94%23&t=31&band_rank=8&Refer=top)
1. [霍启刚郭晶晶11月11日办的世纪婚礼](https://s.weibo.com//weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E9%83%AD%E6%99%B6%E6%99%B611%E6%9C%8811%E6%97%A5%E5%8A%9E%E7%9A%84%E4%B8%96%E7%BA%AA%E5%A9%9A%E7%A4%BC%23&t=31&band_rank=9&Refer=top)
1. [台当局要求陆客删中国台湾字样被批](https://s.weibo.com//weibo?q=%23%E5%8F%B0%E5%BD%93%E5%B1%80%E8%A6%81%E6%B1%82%E9%99%86%E5%AE%A2%E5%88%A0%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E5%AD%97%E6%A0%B7%E8%A2%AB%E6%89%B9%23&t=31&band_rank=10&Refer=top)
1. [尚公主播出这样的成绩真的好可惜](https://s.weibo.com//weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%92%AD%E5%87%BA%E8%BF%99%E6%A0%B7%E7%9A%84%E6%88%90%E7%BB%A9%E7%9C%9F%E7%9A%84%E5%A5%BD%E5%8F%AF%E6%83%9C%23&t=31&band_rank=11&Refer=top)
1. [为了演戏雪迎可以放弃什么](https://s.weibo.com//weibo?q=%E4%B8%BA%E4%BA%86%E6%BC%94%E6%88%8F%E9%9B%AA%E8%BF%8E%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%BC%83%E4%BB%80%E4%B9%88&t=31&band_rank=12&Refer=top)
1. [网红打pk猝死母亲不知其做危险直播](https://s.weibo.com//weibo?q=%23%E7%BD%91%E7%BA%A2%E6%89%93pk%E7%8C%9D%E6%AD%BB%E6%AF%8D%E4%BA%B2%E4%B8%8D%E7%9F%A5%E5%85%B6%E5%81%9A%E5%8D%B1%E9%99%A9%E7%9B%B4%E6%92%AD%23&t=31&band_rank=13&Refer=top)
1. [中国留学生在澳遇袭两根手指被砍断](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%9C%A8%E6%BE%B3%E9%81%87%E8%A2%AD%E4%B8%A4%E6%A0%B9%E6%89%8B%E6%8C%87%E8%A2%AB%E7%A0%8D%E6%96%AD%23&t=31&band_rank=14&Refer=top)
1. [郭德纲西河门收徒仪式](https://s.weibo.com//weibo?q=%E9%83%AD%E5%BE%B7%E7%BA%B2%E8%A5%BF%E6%B2%B3%E9%97%A8%E6%94%B6%E5%BE%92%E4%BB%AA%E5%BC%8F&t=31&band_rank=15&Refer=top)
1. [女子西西弗买200元书坐咖啡区被拒](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A5%BF%E8%A5%BF%E5%BC%97%E4%B9%B0200%E5%85%83%E4%B9%A6%E5%9D%90%E5%92%96%E5%95%A1%E5%8C%BA%E8%A2%AB%E6%8B%92%23&t=31&band_rank=16&Refer=top)
1. [金鸡奖两幕对比太扎心](https://s.weibo.com//weibo?q=%E9%87%91%E9%B8%A1%E5%A5%96%E4%B8%A4%E5%B9%95%E5%AF%B9%E6%AF%94%E5%A4%AA%E6%89%8E%E5%BF%83&t=31&band_rank=17&Refer=top)
1. [许飞张萌聊天记录](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%BC%A0%E8%90%8C%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23&t=31&band_rank=18&Refer=top)
1. [朋友之间越不说话越没话说](https://s.weibo.com//weibo?q=%E6%9C%8B%E5%8F%8B%E4%B9%8B%E9%97%B4%E8%B6%8A%E4%B8%8D%E8%AF%B4%E8%AF%9D%E8%B6%8A%E6%B2%A1%E8%AF%9D%E8%AF%B4&t=31&band_rank=19&Refer=top)
1. [白小纯拿包都没看王子璇](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%8B%BF%E5%8C%85%E9%83%BD%E6%B2%A1%E7%9C%8B%E7%8E%8B%E5%AD%90%E7%92%87%23&t=31&band_rank=20&Refer=top)
1. [中年人的显老行为太形象了](https://s.weibo.com//weibo?q=%E4%B8%AD%E5%B9%B4%E4%BA%BA%E7%9A%84%E6%98%BE%E8%80%81%E8%A1%8C%E4%B8%BA%E5%A4%AA%E5%BD%A2%E8%B1%A1%E4%BA%86&t=31&band_rank=21&Refer=top)
1. [杭州18岁女孩检出18种HPV亚型阳性](https://s.weibo.com//weibo?q=%23%E6%9D%AD%E5%B7%9E18%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%A3%80%E5%87%BA18%E7%A7%8DHPV%E4%BA%9A%E5%9E%8B%E9%98%B3%E6%80%A7%23&t=31&band_rank=22&Refer=top)
1. [唐嫣刘诗诗同框合照](https://s.weibo.com//weibo?q=%23%E5%94%90%E5%AB%A3%E5%88%98%E8%AF%97%E8%AF%97%E5%90%8C%E6%A1%86%E5%90%88%E7%85%A7%23&t=31&band_rank=23&Refer=top)
1. [人一定要有止损意识](https://s.weibo.com//weibo?q=%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%89%E6%AD%A2%E6%8D%9F%E6%84%8F%E8%AF%86&t=31&band_rank=24&Refer=top)
1. [红果公告称严打短剧多人撞脸](https://s.weibo.com//weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%85%AC%E5%91%8A%E7%A7%B0%E4%B8%A5%E6%89%93%E7%9F%AD%E5%89%A7%E5%A4%9A%E4%BA%BA%E6%92%9E%E8%84%B8%23&t=31&band_rank=25&Refer=top)
1. [北方冬天多冷看完就知道](https://s.weibo.com//weibo?q=%E5%8C%97%E6%96%B9%E5%86%AC%E5%A4%A9%E5%A4%9A%E5%86%B7%E7%9C%8B%E5%AE%8C%E5%B0%B1%E7%9F%A5%E9%81%93&t=31&band_rank=26&Refer=top)
1. [俄美乌三方会谈成果公布](https://s.weibo.com//weibo?q=%23%E4%BF%84%E7%BE%8E%E4%B9%8C%E4%B8%89%E6%96%B9%E4%BC%9A%E8%B0%88%E6%88%90%E6%9E%9C%E5%85%AC%E5%B8%83%23&t=31&band_rank=27&Refer=top)
1. [3岁女孩练芭蕾2年蜕变惊人](https://s.weibo.com//weibo?q=%233%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%BB%83%E8%8A%AD%E8%95%BE2%E5%B9%B4%E8%9C%95%E5%8F%98%E6%83%8A%E4%BA%BA%23&t=31&band_rank=28&Refer=top)
1. [我们给厉厉找了一个老公叫飞飞](https://s.weibo.com//weibo?q=%23%E6%88%91%E4%BB%AC%E7%BB%99%E5%8E%89%E5%8E%89%E6%89%BE%E4%BA%86%E4%B8%80%E4%B8%AA%E8%80%81%E5%85%AC%E5%8F%AB%E9%A3%9E%E9%A3%9E%23&t=31&band_rank=29&Refer=top)
1. [曝iPhone20Pro四曲面全玻璃](https://s.weibo.com//weibo?q=%E6%9B%9DiPhone20Pro%E5%9B%9B%E6%9B%B2%E9%9D%A2%E5%85%A8%E7%8E%BB%E7%92%83&t=31&band_rank=30&Refer=top)
1. [中国共产党是孙中山革命真正继承者](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E6%98%AF%E5%AD%99%E4%B8%AD%E5%B1%B1%E9%9D%A9%E5%91%BD%E7%9C%9F%E6%AD%A3%E7%BB%A7%E6%89%BF%E8%80%85%23&t=31&band_rank=31&Refer=top)
1. [猫杀人概率几乎为零但我先走了](https://s.weibo.com//weibo?q=%E7%8C%AB%E6%9D%80%E4%BA%BA%E6%A6%82%E7%8E%87%E5%87%A0%E4%B9%8E%E4%B8%BA%E9%9B%B6%E4%BD%86%E6%88%91%E5%85%88%E8%B5%B0%E4%BA%86&t=31&band_rank=32&Refer=top)
1. [老一辈的自制力特别差](https://s.weibo.com//weibo?q=%E8%80%81%E4%B8%80%E8%BE%88%E7%9A%84%E8%87%AA%E5%88%B6%E5%8A%9B%E7%89%B9%E5%88%AB%E5%B7%AE&t=31&band_rank=33&Refer=top)
1. [蔡依林翻唱青春修炼手册再度爆红](https://s.weibo.com//weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E7%BF%BB%E5%94%B1%E9%9D%92%E6%98%A5%E4%BF%AE%E7%82%BC%E6%89%8B%E5%86%8C%E5%86%8D%E5%BA%A6%E7%88%86%E7%BA%A2%23&t=31&band_rank=34&Refer=top)
1. [学医的妈认为睡太多导致太瘦](https://s.weibo.com//weibo?q=%E5%AD%A6%E5%8C%BB%E7%9A%84%E5%A6%88%E8%AE%A4%E4%B8%BA%E7%9D%A1%E5%A4%AA%E5%A4%9A%E5%AF%BC%E8%87%B4%E5%A4%AA%E7%98%A6&t=31&band_rank=35&Refer=top)
1. [娜然哪怕在何穗旁边也完全不输](https://s.weibo.com//weibo?q=%23%E5%A8%9C%E7%84%B6%E5%93%AA%E6%80%95%E5%9C%A8%E4%BD%95%E7%A9%97%E6%97%81%E8%BE%B9%E4%B9%9F%E5%AE%8C%E5%85%A8%E4%B8%8D%E8%BE%93%23&t=31&band_rank=36&Refer=top)
1. [密档豆瓣6.7分](https://s.weibo.com//weibo?q=%23%E5%AF%86%E6%A1%A3%E8%B1%86%E7%93%A36.7%E5%88%86%23&t=31&band_rank=37&Refer=top)
1. [王楚钦打法被研究](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%E6%B3%95%E8%A2%AB%E7%A0%94%E7%A9%B6&t=31&band_rank=38&Refer=top)
1. [这是我的十好几年啊天猫](https://s.weibo.com//weibo?q=%23%E8%BF%99%E6%98%AF%E6%88%91%E7%9A%84%E5%8D%81%E5%A5%BD%E5%87%A0%E5%B9%B4%E5%95%8A%E5%A4%A9%E7%8C%AB%23&t=31&band_rank=39&Refer=top)
1. [特斯拉高架斗车一司机涉刑事犯罪](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E9%AB%98%E6%9E%B6%E6%96%97%E8%BD%A6%E4%B8%80%E5%8F%B8%E6%9C%BA%E6%B6%89%E5%88%91%E4%BA%8B%E7%8A%AF%E7%BD%AA%23&t=31&band_rank=40&Refer=top)
1. [AG菲菲说有想法引进Elk](https://s.weibo.com//weibo?q=%23AG%E8%8F%B2%E8%8F%B2%E8%AF%B4%E6%9C%89%E6%83%B3%E6%B3%95%E5%BC%95%E8%BF%9BElk%23&t=31&band_rank=41&Refer=top)
1. [我生完孩子爸妈才过上好日子](https://s.weibo.com//weibo?q=%E6%88%91%E7%94%9F%E5%AE%8C%E5%AD%A9%E5%AD%90%E7%88%B8%E5%A6%88%E6%89%8D%E8%BF%87%E4%B8%8A%E5%A5%BD%E6%97%A5%E5%AD%90&t=31&band_rank=42&Refer=top)
1. [四川改名登记卡错成这样](https://s.weibo.com//weibo?q=%E5%9B%9B%E5%B7%9D%E6%94%B9%E5%90%8D%E7%99%BB%E8%AE%B0%E5%8D%A1%E9%94%99%E6%88%90%E8%BF%99%E6%A0%B7&t=31&band_rank=43&Refer=top)
1. [山东球迷在大连买手机打5折](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E4%B8%9C%E7%90%83%E8%BF%B7%E5%9C%A8%E5%A4%A7%E8%BF%9E%E4%B9%B0%E6%89%8B%E6%9C%BA%E6%89%935%E6%8A%98%23&t=31&band_rank=44&Refer=top)
1. [u20亚洲杯](https://s.weibo.com//weibo?q=u20%E4%BA%9A%E6%B4%B2%E6%9D%AF&t=31&band_rank=45&Refer=top)
1. [日本上司因中国下属回OK不爽](https://s.weibo.com//weibo?q=%E6%97%A5%E6%9C%AC%E4%B8%8A%E5%8F%B8%E5%9B%A0%E4%B8%AD%E5%9B%BD%E4%B8%8B%E5%B1%9E%E5%9B%9EOK%E4%B8%8D%E7%88%BD&t=31&band_rank=46&Refer=top)
1. [大冰对抗紧张的方法太牛了](https://s.weibo.com//weibo?q=%E5%A4%A7%E5%86%B0%E5%AF%B9%E6%8A%97%E7%B4%A7%E5%BC%A0%E7%9A%84%E6%96%B9%E6%B3%95%E5%A4%AA%E7%89%9B%E4%BA%86&t=31&band_rank=47&Refer=top)
1. [和对象反复分手复合像死循环](https://s.weibo.com//weibo?q=%E5%92%8C%E5%AF%B9%E8%B1%A1%E5%8F%8D%E5%A4%8D%E5%88%86%E6%89%8B%E5%A4%8D%E5%90%88%E5%83%8F%E6%AD%BB%E5%BE%AA%E7%8E%AF&t=31&band_rank=48&Refer=top)
1. [白敬亭井柏然宋威龙王嘉尔张凌赫同框](https://s.weibo.com//weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AE%8B%E5%A8%81%E9%BE%99%E7%8E%8B%E5%98%89%E5%B0%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%8C%E6%A1%86%23&t=31&band_rank=49&Refer=top)
1. [明年S赛决赛或将在首尔举办](https://s.weibo.com//weibo?q=%23%E6%98%8E%E5%B9%B4S%E8%B5%9B%E5%86%B3%E8%B5%9B%E6%88%96%E5%B0%86%E5%9C%A8%E9%A6%96%E5%B0%94%E4%B8%BE%E5%8A%9E%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
