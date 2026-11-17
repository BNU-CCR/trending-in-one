# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-11-17 11:56:36

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
<!-- 最后更新时间 Tue Nov 17 2026 12:09:41 GMT+0800 (China Standard Time) -->

1. [俄美运输机已率先抵达深圳](https://so.toutiao.com/search?keyword=俄美运输机已率先抵达深圳)
1. [中国女保镖贴身保护墨西哥总统](https://so.toutiao.com/search?keyword=中国女保镖贴身保护墨西哥总统)
1. [APEC“中国年”经贸成果丰硕](https://so.toutiao.com/search?keyword=APEC“中国年”经贸成果丰硕)
1. [特朗普宣布即将访华 将与中俄元首会晤](https://so.toutiao.com/search?keyword=特朗普宣布即将访华%20将与中俄元首会晤)
1. [越南留学生穿特色服饰迎外宾](https://so.toutiao.com/search?keyword=越南留学生穿特色服饰迎外宾)
1. [中核集团原总经理顾军被公诉](https://so.toutiao.com/search?keyword=中核集团原总经理顾军被公诉)
1. [特朗普将成首位到访深圳的在任美总统](https://so.toutiao.com/search?keyword=特朗普将成首位到访深圳的在任美总统)
1. [《多喜一家人》拍摄地遍布青岛](https://so.toutiao.com/search?keyword=《多喜一家人》拍摄地遍布青岛)
1. [透过深圳看开放包容的中国](https://so.toutiao.com/search?keyword=透过深圳看开放包容的中国)
1. [深圳全城绽放迎接APEC](https://so.toutiao.com/search?keyword=深圳全城绽放迎接APEC)
1. [别让谣言骗了你](https://so.toutiao.com/search?keyword=别让谣言骗了你)
1. [《慌啥子嘛》为什么让成年人破防](https://so.toutiao.com/search?keyword=《慌啥子嘛》为什么让成年人破防)
1. [郭德纲委托律师发布声明](https://so.toutiao.com/search?keyword=郭德纲委托律师发布声明)
1. [越共中央总书记苏林抵达深圳](https://so.toutiao.com/search?keyword=越共中央总书记苏林抵达深圳)
1. [28岁男子抱着刚出生亲弟弟笑不出来](https://so.toutiao.com/search?keyword=28岁男子抱着刚出生亲弟弟笑不出来)
1. [库明加不讲理式转换得分](https://so.toutiao.com/search?keyword=库明加不讲理式转换得分)
1. [俄方公布普京参加APEC峰会行程](https://so.toutiao.com/search?keyword=俄方公布普京参加APEC峰会行程)
1. [华为星芒OSTA O1 Pro上手体验](https://so.toutiao.com/search?keyword=华为星芒OSTA%20O1%20Pro上手体验)
1. [开拓者负森林狼 杨瀚森7分钟1板3助](https://so.toutiao.com/search?keyword=开拓者负森林狼%20杨瀚森7分钟1板3助)
1. [APEC现场王兴兴埋头看议程](https://so.toutiao.com/search?keyword=APEC现场王兴兴埋头看议程)
1. [C罗母亲：葡萄牙输给丹麦咎由自取](https://so.toutiao.com/search?keyword=C罗母亲：葡萄牙输给丹麦咎由自取)
1. [超4500亿国家队资金扫货A股](https://so.toutiao.com/search?keyword=超4500亿国家队资金扫货A股)
1. [俄罗斯记者点赞中国仪仗队](https://so.toutiao.com/search?keyword=俄罗斯记者点赞中国仪仗队)
1. [曾毓群：将电动化应用拓展至海洋天空](https://so.toutiao.com/search?keyword=曾毓群：将电动化应用拓展至海洋天空)
1. [李飞飞正式率队加入AMD](https://so.toutiao.com/search?keyword=李飞飞正式率队加入AMD)
1. [中俄美元首即将会晤释放强烈信号](https://so.toutiao.com/search?keyword=中俄美元首即将会晤释放强烈信号)
1. [康辉现身深圳人才公园](https://so.toutiao.com/search?keyword=康辉现身深圳人才公园)
1. [足球小将3-1战胜阿图什队夺冠](https://so.toutiao.com/search?keyword=足球小将3-1战胜阿图什队夺冠)
1. [俄记者被深圳的机器人浓度惊到](https://so.toutiao.com/search?keyword=俄记者被深圳的机器人浓度惊到)
1. [帅化民：大陆推动发展台湾讨好美日](https://so.toutiao.com/search?keyword=帅化民：大陆推动发展台湾讨好美日)
1. [这就是深圳](https://so.toutiao.com/search?keyword=这就是深圳)
1. [国车红旗组成国宾车队亮相深圳街头](https://so.toutiao.com/search?keyword=国车红旗组成国宾车队亮相深圳街头)
1. [河南超市江湖为什么会群雄并起](https://so.toutiao.com/search?keyword=河南超市江湖为什么会群雄并起)
1. [山河承志黔路追光](https://so.toutiao.com/search?keyword=山河承志黔路追光)
1. [深圳APEC能为亚太做什么](https://so.toutiao.com/search?keyword=深圳APEC能为亚太做什么)
1. [76人破网重返东部第一 恩比德37分](https://so.toutiao.com/search?keyword=76人破网重返东部第一%20恩比德37分)
1. [英伟达发布Rubin HPC GPU](https://so.toutiao.com/search?keyword=英伟达发布Rubin%20HPC%20GPU)
1. [APEC为何来到深圳](https://so.toutiao.com/search?keyword=APEC为何来到深圳)
1. [25克金手镯较年初降价近万](https://so.toutiao.com/search?keyword=25克金手镯较年初降价近万)
1. [美国开始双重去杠杆了吗](https://so.toutiao.com/search?keyword=美国开始双重去杠杆了吗)
1. [墨西哥总统发布抵达深圳视频](https://so.toutiao.com/search?keyword=墨西哥总统发布抵达深圳视频)
1. [沙特主导多国联军临阵换帅](https://so.toutiao.com/search?keyword=沙特主导多国联军临阵换帅)
1. [老外被深圳一条马路惊艳到](https://so.toutiao.com/search?keyword=老外被深圳一条马路惊艳到)
1. [智利总统卡斯特抵达深圳](https://so.toutiao.com/search?keyword=智利总统卡斯特抵达深圳)
1. [“深圳速度”有多惊人](https://so.toutiao.com/search?keyword=“深圳速度”有多惊人)
1. [热火8人得分上双终结火箭4连胜](https://so.toutiao.com/search?keyword=热火8人得分上双终结火箭4连胜)
1. [国产机器人手机APEC现场硬控老外](https://so.toutiao.com/search?keyword=国产机器人手机APEC现场硬控老外)
1. [歌曲《慌啥子嘛》为何如此上头](https://so.toutiao.com/search?keyword=歌曲《慌啥子嘛》为何如此上头)
1. [天风证券：市场已接近相对底部区域](https://so.toutiao.com/search?keyword=天风证券：市场已接近相对底部区域)
1. [APEC如何链接你的生活](https://so.toutiao.com/search?keyword=APEC如何链接你的生活)
1. [中俄美元首将首次面对面会晤](https://so.toutiao.com/search?keyword=中俄美元首将首次面对面会晤)
1. [墨总统交叉双臂抱于胸前有何深意](https://so.toutiao.com/search?keyword=墨总统交叉双臂抱于胸前有何深意)
1. [一组图速览APEC](https://so.toutiao.com/search?keyword=一组图速览APEC)
1. [黄仁勋借钱成台湾新型诈骗](https://so.toutiao.com/search?keyword=黄仁勋借钱成台湾新型诈骗)
1. [APEC安保天团又高又壮又帅](https://so.toutiao.com/search?keyword=APEC安保天团又高又壮又帅)
1. [俄罗斯为何在拥抱人民币道路上掉队](https://so.toutiao.com/search?keyword=俄罗斯为何在拥抱人民币道路上掉队)
1. [金价跌回一年前 黄金定价逻辑变了吗](https://so.toutiao.com/search?keyword=金价跌回一年前%20黄金定价逻辑变了吗)
1. [“沈阳中考英语听力口语改革”不实](https://so.toutiao.com/search?keyword=“沈阳中考英语听力口语改革”不实)
1. [日本23岁女演员中田乃爱突然去世](https://so.toutiao.com/search?keyword=日本23岁女演员中田乃爱突然去世)
1. [106岁父亲和86岁女儿分享长寿秘诀](https://so.toutiao.com/search?keyword=106岁父亲和86岁女儿分享长寿秘诀)
1. [砒霜是怎么成为治疗癌症救命神药的](https://so.toutiao.com/search?keyword=砒霜是怎么成为治疗癌症救命神药的)
1. [曝360集团副总裁卜思南被带走调查](https://so.toutiao.com/search?keyword=曝360集团副总裁卜思南被带走调查)
1. [有教师拿出精神类诊断要求卸任班主任](https://so.toutiao.com/search?keyword=有教师拿出精神类诊断要求卸任班主任)
1. [刘德华自曝1年没拍戏](https://so.toutiao.com/search?keyword=刘德华自曝1年没拍戏)
1. [三军仪仗队迎接APEC会议外国元首](https://so.toutiao.com/search?keyword=三军仪仗队迎接APEC会议外国元首)
1. [医生：最好的饮品是白开水](https://so.toutiao.com/search?keyword=医生：最好的饮品是白开水)
1. [中国摩托在欧洲杀疯了](https://so.toutiao.com/search?keyword=中国摩托在欧洲杀疯了)
1. [中俄美元首深圳会晤何以促成](https://so.toutiao.com/search?keyword=中俄美元首深圳会晤何以促成)
1. [于东来再回应关店](https://so.toutiao.com/search?keyword=于东来再回应关店)
1. [314份假病历骗保33万 卫生院院长获刑](https://so.toutiao.com/search?keyword=314份假病历骗保33万%20卫生院院长获刑)
1. [马斯克：我创业是因为找不到工作](https://so.toutiao.com/search?keyword=马斯克：我创业是因为找不到工作)
1. [APEC中外记者团探厂荣耀](https://so.toutiao.com/search?keyword=APEC中外记者团探厂荣耀)
1. [山东省政府原参事袭燕获刑12年半](https://so.toutiao.com/search?keyword=山东省政府原参事袭燕获刑12年半)
1. [为什么所有人都在呼唤厉娜](https://so.toutiao.com/search?keyword=为什么所有人都在呼唤厉娜)
1. [商家接一斤绒羽绒服订单接到手软](https://so.toutiao.com/search?keyword=商家接一斤绒羽绒服订单接到手软)
1. [20多岁女子出血2个月查出宫颈癌](https://so.toutiao.com/search?keyword=20多岁女子出血2个月查出宫颈癌)
1. [96岁父亲时不时来看70岁女儿](https://so.toutiao.com/search?keyword=96岁父亲时不时来看70岁女儿)
1. [DeepSeek搜索一次半分钱意味着什么](https://so.toutiao.com/search?keyword=DeepSeek搜索一次半分钱意味着什么)
1. [宁德时代建换电站是自救还是豪赌](https://so.toutiao.com/search?keyword=宁德时代建换电站是自救还是豪赌)
1. [特朗普：期待参加中俄美元首会晤](https://so.toutiao.com/search?keyword=特朗普：期待参加中俄美元首会晤)
1. [特朗普政府拟组建AI国家队有何意图](https://so.toutiao.com/search?keyword=特朗普政府拟组建AI国家队有何意图)
1. [大摩四种情景推演2027](https://so.toutiao.com/search?keyword=大摩四种情景推演2027)
1. [AI超级牛市真的结束了吗](https://so.toutiao.com/search?keyword=AI超级牛市真的结束了吗)
1. [胖东来凭什么成为全国零售业的老师](https://so.toutiao.com/search?keyword=胖东来凭什么成为全国零售业的老师)
1. [澳洲学者：APEC中国年最大收获是信任](https://so.toutiao.com/search?keyword=澳洲学者：APEC中国年最大收获是信任)
1. [76岁守山人无偿讲解中药材知识](https://so.toutiao.com/search?keyword=76岁守山人无偿讲解中药材知识)
1. [美股AI股票抛售是否过度](https://so.toutiao.com/search?keyword=美股AI股票抛售是否过度)
1. [APEC离你我有多近](https://so.toutiao.com/search?keyword=APEC离你我有多近)
1. [俄媒记者在APEC被记者“包围”](https://so.toutiao.com/search?keyword=俄媒记者在APEC被记者“包围”)
1. [伊朗秀“肌肉”有何目的](https://so.toutiao.com/search?keyword=伊朗秀“肌肉”有何目的)
1. [北大399元羽绒服火出圈](https://so.toutiao.com/search?keyword=北大399元羽绒服火出圈)
1. [巴布亚新几内亚总理抵达深圳](https://so.toutiao.com/search?keyword=巴布亚新几内亚总理抵达深圳)
1. [撒贝宁、李小冉现身安徽六安](https://so.toutiao.com/search?keyword=撒贝宁、李小冉现身安徽六安)
1. [厉娜回应卷入借贷纠纷](https://so.toutiao.com/search?keyword=厉娜回应卷入借贷纠纷)
1. [中国给亚太带来了什么](https://so.toutiao.com/search?keyword=中国给亚太带来了什么)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Nov 17 2026 11:46:40 GMT+0800 (China Standard Time) -->

1. [业内称山姆399元羽绒服是钩子商品](https://www.zhihu.com/search?q=%E4%B8%9A%E5%86%85%E7%A7%B0%E5%B1%B1%E5%A7%86399%E5%85%83%E7%BE%BD%E7%BB%92%E6%9C%8D%E6%98%AF%E9%92%A9%E5%AD%90%E5%95%86%E5%93%81)
1. [传腾讯内部空前危机感](https://www.zhihu.com/search?q=%E4%BC%A0%E8%85%BE%E8%AE%AF%E5%86%85%E9%83%A8%E7%A9%BA%E5%89%8D%E5%8D%B1%E6%9C%BA%E6%84%9F)
1. [湘雅二医院被曝全AI论文](https://www.zhihu.com/search?q=%E6%B9%98%E9%9B%85%E4%BA%8C%E5%8C%BB%E9%99%A2%E8%A2%AB%E6%9B%9D%E5%85%A8AI%E8%AE%BA%E6%96%87)
1. [中俄美元首将在深圳会晤](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%B0%86%E5%9C%A8%E6%B7%B1%E5%9C%B3%E4%BC%9A%E6%99%A4)
1. [郭德纲方发律师声明](https://www.zhihu.com/search?q=%E9%83%AD%E5%BE%B7%E7%BA%B2%E6%96%B9%E5%8F%91%E5%BE%8B%E5%B8%88%E5%A3%B0%E6%98%8E)
1. [裁判误判致国乒比赛中断11分钟](https://www.zhihu.com/search?q=%E8%A3%81%E5%88%A4%E8%AF%AF%E5%88%A4%E8%87%B4%E5%9B%BD%E4%B9%92%E6%AF%94%E8%B5%9B%E4%B8%AD%E6%96%AD11%E5%88%86%E9%92%9F)
1. [知乎智能搜索新玩法](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2%E6%96%B0%E7%8E%A9%E6%B3%95)
1. [英伟达工程师戴士钦宣布离职](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B7%A5%E7%A8%8B%E5%B8%88%E6%88%B4%E5%A3%AB%E9%92%A6%E5%AE%A3%E5%B8%83%E7%A6%BB%E8%81%8C)
1. [曝黄仁勋考虑重返英伟达](https://www.zhihu.com/search?q=%E6%9B%9D%E9%BB%84%E4%BB%81%E5%8B%8B%E8%80%83%E8%99%91%E9%87%8D%E8%BF%94%E8%8B%B1%E4%BC%9F%E8%BE%BE)
1. [农民工帮转讨薪网帖获刑4年](https://www.zhihu.com/search?q=%E5%86%9C%E6%B0%91%E5%B7%A5%E5%B8%AE%E8%BD%AC%E8%AE%A8%E8%96%AA%E7%BD%91%E5%B8%96%E8%8E%B7%E5%88%914%E5%B9%B4)
1. [BLG 夺冠](https://www.zhihu.com/search?q=BLG%20%E5%A4%BA%E5%86%A0)
1. [DeepSeek调整对话上限长度](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4%E5%AF%B9%E8%AF%9D%E4%B8%8A%E9%99%90%E9%95%BF%E5%BA%A6)
1. [中国三口之家已不是主流](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E4%B8%89%E5%8F%A3%E4%B9%8B%E5%AE%B6%E5%B7%B2%E4%B8%8D%E6%98%AF%E4%B8%BB%E6%B5%81)
1. [美国所有航班暂停起飞](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E6%89%80%E6%9C%89%E8%88%AA%E7%8F%AD%E6%9A%82%E5%81%9C%E8%B5%B7%E9%A3%9E)
1. [涉亚马尔种族歧视内容系伪造](https://www.zhihu.com/search?q=%E6%B6%89%E4%BA%9A%E9%A9%AC%E5%B0%94%E7%A7%8D%E6%97%8F%E6%AD%A7%E8%A7%86%E5%86%85%E5%AE%B9%E7%B3%BB%E4%BC%AA%E9%80%A0)
1. [失业男子断供房贷被判非恶意断供](https://www.zhihu.com/search?q=%E5%A4%B1%E4%B8%9A%E7%94%B7%E5%AD%90%E6%96%AD%E4%BE%9B%E6%88%BF%E8%B4%B7%E8%A2%AB%E5%88%A4%E9%9D%9E%E6%81%B6%E6%84%8F%E6%96%AD%E4%BE%9B)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Nov 17 2026 11:56:36 GMT+0800 (China Standard Time) -->

1. [北大新款羽绒服 399 元含鹅绒量 90%卖断货，校外人士求代购，这类高校文创比商业品牌更有性价比吗？](https://www.zhihu.com/question/2105477478731068000)
1. [为什么AI生成一条5秒钟的视频费用很高，而类似漫剧这样的内容却能大批量生产？​？](https://www.zhihu.com/question/2071378238237054000)
1. [罗伯特⋅帕丁森将出演新一任 007，如何评价这一选角？](https://www.zhihu.com/question/2105811112532899600)
1. [南京无门槛的「零元面馆」为什么招来那么多质疑与批评？](https://www.zhihu.com/question/2104559437331568000)
1. [为什么现在的中小学普遍开始春秋假期？](https://www.zhihu.com/question/2105586557558199600)
1. [传腾讯内部陷空前危机感，因为AI正在冲击其以社交为核心的商业模式，是真的吗？腾讯的商业模式会被颠覆吗？](https://www.zhihu.com/question/2105734658377741300)
1. [剧版《哈利·波特》正片片段首曝光，公开了霍格沃茨入学仪式的盛宴片段，角色和场景符合你的预期吗？](https://www.zhihu.com/question/2105583961661339100)
1. [为什么中国式刺身（鱼脍）在明中期被逐渐淘汰了？](https://www.zhihu.com/question/470428983)
1. [刘欢曾称宁死不背尿袋拒绝切膀胱，这类选择有哪些医疗风险？](https://www.zhihu.com/question/2104345374177628400)
1. [如何评价 ON 在 S16 全球总决赛上的表现？](https://www.zhihu.com/question/2105148679128442400)
1. [10 月消费数据低于预期，人民日报发文「怎样看待当前消费形势」，哪些细节值得关注？](https://www.zhihu.com/question/2105739356858054100)
1. [字节被曝正研发「中国版Muse」，Personal Agent会成为大厂争夺的新方向吗？字节有何优势？](https://www.zhihu.com/question/2104136484013826600)
1. [决赛赛后采访，Viper称希望继续留在BLG，但目前有较多因素待考虑，你觉得Viper会继续留下吗？](https://www.zhihu.com/question/2105299093589157000)
1. [射击教练被控走私武器获刑 10 年，丈夫称涉案物品都是训练耗材，该判罚依据是什么？](https://www.zhihu.com/question/2104327585756979500)
1. [如何看待中南大学湘雅二医院被曝医学sci论文图片为AI生成？](https://www.zhihu.com/question/2104854026030523000)
1. [《哈利波特：魔法觉醒》官宣 2027 年 3 月停服，授权到期，怎么看待这款手游落幕？](https://www.zhihu.com/question/2105686582837748500)
1. [校招进了一个大公司新成立的部门，只有自己一个人，且直接跟大领导汇报，求经验？](https://www.zhihu.com/question/2104002868328001800)
1. [Bin、Viper 等人与 BLG 合约将到期，他们还会续约吗？明年 BLG 阵容可能如何变化？](https://www.zhihu.com/question/2105619821479946000)
1. [中汽协将对比亚迪、小米等 17 家重点车企开展供应商账款支付情况调研评估，哪些信息值得关注？](https://www.zhihu.com/question/2105956358176469800)
1. [70 城最新房价出炉，一线城市商品住宅销售价格环比总体上涨，二三线城市环比下降，哪些信息值得关注？](https://www.zhihu.com/question/2105595287469290500)
1. [多地医院陆续关闭部分院区急诊科，背后的原因是啥？患者就医会受影响吗？](https://www.zhihu.com/question/2105432310078076200)
1. [《影之刃零》枷笼山中的炸弹客提醒魂遇到它这种怪要远离，但从第一章就遇到它很多次了，为什么在这里提示？](https://www.zhihu.com/question/2100964098133451500)
1. [如何看待OpenAI解散独立机器人团队，并将相关研究人员并入其他团队？商业和公司战略方面有哪些考量？](https://www.zhihu.com/question/2105002257389560800)
1. [研究称吃对「好碳水」不易长胖，还能让人一个月生理年龄「年轻」4 岁，真的是这样吗？背后有什么科学依据？](https://www.zhihu.com/question/2042594588980765400)
1. [江苏3岁女童被父亲女友杀害案即将宣判，凶手作案时怀孕、庭上多次撒谎毫无悔意，最终会面临怎样的刑罚？](https://www.zhihu.com/question/2105941919675242500)
1. [为什么在 S16 几乎所有人都不看好的情况下，LPL 反而两支队伍跻身四强，最后还爆冷夺冠了？](https://www.zhihu.com/question/2105608935478490000)
1. [人到中年，除了钱，什么最为重要？](https://www.zhihu.com/question/2040166463701525800)
1. [纵观历史几千年，为什么科技才近一两百年发生了质的飞跃，有了电话、飞机、火车，那么之前的人们在干嘛去了？](https://www.zhihu.com/question/46853150)
1. [《西游记》第十回，为何称刘备为“刘蜀主”，难道吴承恩老先生不知道刘备的国号是叫汉吗？为何以蜀主称之？](https://www.zhihu.com/question/2008182127070561800)
1. [后世称赞孔老夫子，知不可为而为之，儒家给他了很大很高的赞誉，您觉得夫子真的是知不可为而为之吗？](https://www.zhihu.com/question/2095518237240906800)
1. [如何看待清华特等奖学金答辩中，候选人被问「为什么三年绩点越来越低」？大学生的优秀到底应该如何评判？](https://www.zhihu.com/question/2105681388028393000)
1. [中俄美元首将在深圳举行会晤，有哪些信息值得关注？](https://www.zhihu.com/question/2105588251100700700)
1. [如何看待工信部试点「700」号段防骚扰？初衷虽好，但真能解决平台泄露隐私的根源问题吗？](https://www.zhihu.com/question/2105589356035577300)
1. [有一种说法认为中国乒乓球逐渐被世界赶超，有一方面因素是我们对器材的理解和研究落后了，对此你怎么看？](https://www.zhihu.com/question/2104173502391478300)
1. [你怎么看，92%班主任不愿在岗、年轻教师拒任，为何班主任岗位遇冷？有什么解法吗？](https://www.zhihu.com/question/2094752597341164500)
1. [为什么古人的飞檐走壁、轻功、点穴等功夫现在没有了？从哪个朝代开始慢慢消失的？](https://www.zhihu.com/question/2042890260045091800)
1. [西甲向总台澄清，涉亚马尔种族歧视内容系伪造，如何评价？造谣者可能面临什么？](https://www.zhihu.com/question/2105761276563382500)
1. [大象失去一条腿后，都可以存活下来，为什么马腿断了就必须死呢？](https://www.zhihu.com/question/637754522)
1. [BLG夺得S16总冠军，如何评价BLG各选手在国际上和LPL史上的地位？](https://www.zhihu.com/question/2105210742748332800)
1. [怎么看外媒曝 Anthropic IPO拒绝向中国内地和中国香港的投资者分配股份 ？](https://www.zhihu.com/question/2104954238514230300)
1. [美股芯片股暗盘大涨，英伟达股价直线拉升，涨幅一度超过 4%，怎样解读？](https://www.zhihu.com/question/2105582147801019000)
1. [欧国联西班牙主场 2-3 不敌英格兰，43 场不败纪录遭终结，如何评价这场比赛？](https://www.zhihu.com/question/2105549243884770000)
1. [为什么末世主题的电影中出现的动物总是狗，很少有猫？](https://www.zhihu.com/question/497532191)
1. [你在明白什么道理后，你不再焦虑了？](https://www.zhihu.com/question/7694586734)
1. [《天下足球》播出 C 罗告别国家队特别节目《孤勇者》，如何评价这期节目？](https://www.zhihu.com/question/2105733996890149000)
1. [如何看待小伙自称 5 年开 1300 家无人健身房？无人健身房真的很有市场吗？](https://www.zhihu.com/question/2104891337900122600)
1. [如何看待 Chovy 总决赛对线仅 1 分钟就被 Knight 发现不对劲并施加「弱者标记」？](https://www.zhihu.com/question/2105616520579474700)
1. [为什么这次 BLG 夺冠后解说和观众都冷静了许多，没有再大规模造「第一赛区」画面了？](https://www.zhihu.com/question/2105608039147331600)
1. [怎么看 Bin 冠军皮肤投票中，突然出现大量 AI 格温图拉票，理由是特效好做、受众比武器大师多？](https://www.zhihu.com/question/2105592024393110000)
1. [英伟达工程师因黄仁勋离职宣布辞职，超16万人请愿黄仁勋复职，为何他的「出走」能引发如此大的持续反响？](https://www.zhihu.com/question/2105658986158449700)
1. [如何评价恐怖电影《痴迷》（Obsession）？](https://www.zhihu.com/question/2055620068403144400)
1. [如何看待 11 月 16 日华为官宣的大折叠？有哪些值得关注的信息？](https://www.zhihu.com/question/2105611543148864000)
1. [为什么原神中的角色没有衍生梗「菲比啾比」「糯糯」?](https://www.zhihu.com/question/2103830718698747600)
1. [西乙门将奥沃诺因暴力犯规致对手德米格尔死亡，其被顶格禁赛 12 场+罚款，这一判罚尺度是否合理？](https://www.zhihu.com/question/2104858738721138700)
1. [印尼14岁球员与门将相撞后离世，短期内两起类似悲剧发生，门将出击的安全规范是否需要重新审视？](https://www.zhihu.com/question/2105388424941106700)
1. [为什么我用UBUNTU好好的，他们用信创电脑的那么多抱怨？](https://www.zhihu.com/question/2083924137605710300)

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
<!-- 最后更新时间 Tue Nov 17 2026 06:19:14 GMT+0800 (China Standard Time) -->

1. [中俄美元首会晤在即](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%E5%9C%A8%E5%8D%B3%23&Refer=new_time)
1. [中俄美元首会晤将在深圳举行](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%E5%B0%86%E5%9C%A8%E6%B7%B1%E5%9C%B3%E4%B8%BE%E8%A1%8C%23&t=31&band_rank=1&Refer=top)
1. [终于有人说说干发帽了](https://s.weibo.com//weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E8%AF%B4%E8%AF%B4%E5%B9%B2%E5%8F%91%E5%B8%BD%E4%BA%86%23&t=31&band_rank=2&Refer=top)
1. [同舟共济开创亚太和世界更美好未来](https://s.weibo.com//weibo?q=%23%E5%90%8C%E8%88%9F%E5%85%B1%E6%B5%8E%E5%BC%80%E5%88%9B%E4%BA%9A%E5%A4%AA%E5%92%8C%E4%B8%96%E7%95%8C%E6%9B%B4%E7%BE%8E%E5%A5%BD%E6%9C%AA%E6%9D%A5%23&t=31&band_rank=3&Refer=top)
1. [6年恋爱因一枚戒指分手](https://s.weibo.com//weibo?q=6%E5%B9%B4%E6%81%8B%E7%88%B1%E5%9B%A0%E4%B8%80%E6%9E%9A%E6%88%92%E6%8C%87%E5%88%86%E6%89%8B&t=31&band_rank=4&Refer=top)
1. [新007是帕丁森](https://s.weibo.com//weibo?q=%23%E6%96%B0007%E6%98%AF%E5%B8%95%E4%B8%81%E6%A3%AE%23&t=31&band_rank=5&Refer=top)
1. [吃了点didi喂](https://s.weibo.com//weibo?q=%E5%90%83%E4%BA%86%E7%82%B9didi%E5%96%82&t=31&band_rank=6&Refer=top)
1. [虞书欣围裙 国外博主原图](https://s.weibo.com//weibo?q=%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9B%B4%E8%A3%99%20%E5%9B%BD%E5%A4%96%E5%8D%9A%E4%B8%BB%E5%8E%9F%E5%9B%BE&t=31&band_rank=7&Refer=top)
1. [金子涵称被家人骗到了精神病院](https://s.weibo.com//weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%A7%B0%E8%A2%AB%E5%AE%B6%E4%BA%BA%E9%AA%97%E5%88%B0%E4%BA%86%E7%B2%BE%E7%A5%9E%E7%97%85%E9%99%A2%23&t=31&band_rank=8&Refer=top)
1. [金价创今年以来新低](https://s.weibo.com//weibo?q=%23%E9%87%91%E4%BB%B7%E5%88%9B%E4%BB%8A%E5%B9%B4%E4%BB%A5%E6%9D%A5%E6%96%B0%E4%BD%8E%23&t=31&band_rank=9&Refer=top)
1. [墨西哥总统抵达深圳后做了一个动作](https://s.weibo.com//weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E6%80%BB%E7%BB%9F%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%E5%90%8E%E5%81%9A%E4%BA%86%E4%B8%80%E4%B8%AA%E5%8A%A8%E4%BD%9C%23&t=31&band_rank=10&Refer=top)
1. [建议大家不要一直穿同一双鞋](https://s.weibo.com//weibo?q=%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E4%B8%80%E7%9B%B4%E7%A9%BF%E5%90%8C%E4%B8%80%E5%8F%8C%E9%9E%8B&t=31&band_rank=11&Refer=top)
1. [被虞书欣起诉网友发文](https://s.weibo.com//weibo?q=%23%E8%A2%AB%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%B5%B7%E8%AF%89%E7%BD%91%E5%8F%8B%E5%8F%91%E6%96%87%23&t=31&band_rank=12&Refer=top)
1. [华尔街日报必须道歉](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E5%B0%94%E8%A1%97%E6%97%A5%E6%8A%A5%E5%BF%85%E9%A1%BB%E9%81%93%E6%AD%89%23&t=31&band_rank=13&Refer=top)
1. [高市早苗穿菲律宾服饰出席晚宴](https://s.weibo.com//weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A9%BF%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%9C%8D%E9%A5%B0%E5%87%BA%E5%B8%AD%E6%99%9A%E5%AE%B4%23&t=31&band_rank=14&Refer=top)
1. [网友给厉娜赐名salina傻厉娜](https://s.weibo.com//weibo?q=%23%E7%BD%91%E5%8F%8B%E7%BB%99%E5%8E%89%E5%A8%9C%E8%B5%90%E5%90%8Dsalina%E5%82%BB%E5%8E%89%E5%A8%9C%23&t=31&band_rank=15&Refer=top)
1. [过度付出可能换来恶意](https://s.weibo.com//weibo?q=%E8%BF%87%E5%BA%A6%E4%BB%98%E5%87%BA%E5%8F%AF%E8%83%BD%E6%8D%A2%E6%9D%A5%E6%81%B6%E6%84%8F&t=31&band_rank=16&Refer=top)
1. [赵丽颖没有给风吹半夏导演新剧打call](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%B2%A1%E6%9C%89%E7%BB%99%E9%A3%8E%E5%90%B9%E5%8D%8A%E5%A4%8F%E5%AF%BC%E6%BC%94%E6%96%B0%E5%89%A7%E6%89%93call%23&t=31&band_rank=17&Refer=top)
1. [罗伯特帕丁森五大IP集齐](https://s.weibo.com//weibo?q=%23%E7%BD%97%E4%BC%AF%E7%89%B9%E5%B8%95%E4%B8%81%E6%A3%AE%E4%BA%94%E5%A4%A7IP%E9%9B%86%E9%BD%90%23&t=31&band_rank=18&Refer=top)
1. [王子璇这段仇人看了都释怀了](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E8%BF%99%E6%AE%B5%E4%BB%87%E4%BA%BA%E7%9C%8B%E4%BA%86%E9%83%BD%E9%87%8A%E6%80%80%E4%BA%86%23&t=31&band_rank=19&Refer=top)
1. [成都这位华西医生火出圈了](https://s.weibo.com//weibo?q=%23%E6%88%90%E9%83%BD%E8%BF%99%E4%BD%8D%E5%8D%8E%E8%A5%BF%E5%8C%BB%E7%94%9F%E7%81%AB%E5%87%BA%E5%9C%88%E4%BA%86%23&t=31&band_rank=20&Refer=top)
1. [女子不孕十年子宫内长出骨头](https://s.weibo.com//weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E5%AD%95%E5%8D%81%E5%B9%B4%E5%AD%90%E5%AE%AB%E5%86%85%E9%95%BF%E5%87%BA%E9%AA%A8%E5%A4%B4%23&t=31&band_rank=21&Refer=top)
1. [刘耀文刷到了自己吃蓝莓的视频](https://s.weibo.com//weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%88%B7%E5%88%B0%E4%BA%86%E8%87%AA%E5%B7%B1%E5%90%83%E8%93%9D%E8%8E%93%E7%9A%84%E8%A7%86%E9%A2%91%23&t=31&band_rank=22&Refer=top)
1. [医生建议不要用手抠危险三角区](https://s.weibo.com//weibo?q=%23%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E7%94%A8%E6%89%8B%E6%8A%A0%E5%8D%B1%E9%99%A9%E4%B8%89%E8%A7%92%E5%8C%BA%23&t=31&band_rank=23&Refer=top)
1. [不怕了不怕了妈妈来了](https://s.weibo.com//weibo?q=%E4%B8%8D%E6%80%95%E4%BA%86%E4%B8%8D%E6%80%95%E4%BA%86%E5%A6%88%E5%A6%88%E6%9D%A5%E4%BA%86&t=31&band_rank=24&Refer=top)
1. [厨房油烟致癌物浓度相当于96支烟](https://s.weibo.com//weibo?q=%23%E5%8E%A8%E6%88%BF%E6%B2%B9%E7%83%9F%E8%87%B4%E7%99%8C%E7%89%A9%E6%B5%93%E5%BA%A6%E7%9B%B8%E5%BD%93%E4%BA%8E96%E6%94%AF%E7%83%9F%23&t=31&band_rank=25&Refer=top)
1. [007](https://s.weibo.com//weibo?q=007&t=31&band_rank=26&Refer=top)
1. [买衣服一定要知道面料](https://s.weibo.com//weibo?q=%E4%B9%B0%E8%A1%A3%E6%9C%8D%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9F%A5%E9%81%93%E9%9D%A2%E6%96%99&t=31&band_rank=27&Refer=top)
1. [高迪懒得解释](https://s.weibo.com//weibo?q=%23%E9%AB%98%E8%BF%AA%E6%87%92%E5%BE%97%E8%A7%A3%E9%87%8A%23&t=31&band_rank=28&Refer=top)
1. [白小纯练枪被女粉落地颗秒](https://s.weibo.com//weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%BB%83%E6%9E%AA%E8%A2%AB%E5%A5%B3%E7%B2%89%E8%90%BD%E5%9C%B0%E9%A2%97%E7%A7%92%23&t=31&band_rank=29&Refer=top)
1. [胖东来洗发水疑似假洋货](https://s.weibo.com//weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%B4%97%E5%8F%91%E6%B0%B4%E7%96%91%E4%BC%BC%E5%81%87%E6%B4%8B%E8%B4%A7%23&t=31&band_rank=30&Refer=top)
1. [恢复专注力需要反多巴胺](https://s.weibo.com//weibo?q=%E6%81%A2%E5%A4%8D%E4%B8%93%E6%B3%A8%E5%8A%9B%E9%9C%80%E8%A6%81%E5%8F%8D%E5%A4%9A%E5%B7%B4%E8%83%BA&t=31&band_rank=31&Refer=top)
1. [S16最终战力排名公布](https://s.weibo.com//weibo?q=%23S16%E6%9C%80%E7%BB%88%E6%88%98%E5%8A%9B%E6%8E%92%E5%90%8D%E5%85%AC%E5%B8%83%23&t=31&band_rank=32&Refer=top)
1. [一亿锦鲤大奖里那些最难绷的奖](https://s.weibo.com//weibo?q=%23%E4%B8%80%E4%BA%BF%E9%94%A6%E9%B2%A4%E5%A4%A7%E5%A5%96%E9%87%8C%E9%82%A3%E4%BA%9B%E6%9C%80%E9%9A%BE%E7%BB%B7%E7%9A%84%E5%A5%96%23&t=31&band_rank=33&Refer=top)
1. [Knight说训练赛打不过AL](https://s.weibo.com//weibo?q=%23Knight%E8%AF%B4%E8%AE%AD%E7%BB%83%E8%B5%9B%E6%89%93%E4%B8%8D%E8%BF%87AL%23&t=31&band_rank=34&Refer=top)
1. [什么岗位可以随时请一周假](https://s.weibo.com//weibo?q=%E4%BB%80%E4%B9%88%E5%B2%97%E4%BD%8D%E5%8F%AF%E4%BB%A5%E9%9A%8F%E6%97%B6%E8%AF%B7%E4%B8%80%E5%91%A8%E5%81%87&t=31&band_rank=35&Refer=top)
1. [许飞自曝参加浪姐期间被分手了](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E9%A3%9E%E8%87%AA%E6%9B%9D%E5%8F%82%E5%8A%A0%E6%B5%AA%E5%A7%90%E6%9C%9F%E9%97%B4%E8%A2%AB%E5%88%86%E6%89%8B%E4%BA%86%23&t=31&band_rank=36&Refer=top)
1. [刘耀文怎么连出汗都这么萌](https://s.weibo.com//weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%80%8E%E4%B9%88%E8%BF%9E%E5%87%BA%E6%B1%97%E9%83%BD%E8%BF%99%E4%B9%88%E8%90%8C%23&t=31&band_rank=37&Refer=top)
1. [青稚白小纯营业了](https://s.weibo.com//weibo?q=%23%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%90%A5%E4%B8%9A%E4%BA%86%23&t=31&band_rank=38&Refer=top)
1. [王力宏同款波司登羽绒服仅售16件](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%90%8C%E6%AC%BE%E6%B3%A2%E5%8F%B8%E7%99%BB%E7%BE%BD%E7%BB%92%E6%9C%8D%E4%BB%85%E5%94%AE16%E4%BB%B6%23&t=31&band_rank=39&Refer=top)
1. [波司登羽绒服被吐槽雷霆审美](https://s.weibo.com//weibo?q=%23%E6%B3%A2%E5%8F%B8%E7%99%BB%E7%BE%BD%E7%BB%92%E6%9C%8D%E8%A2%AB%E5%90%90%E6%A7%BD%E9%9B%B7%E9%9C%86%E5%AE%A1%E7%BE%8E%23&t=31&band_rank=40&Refer=top)
1. [我的有罪之人](https://s.weibo.com//weibo?q=%E6%88%91%E7%9A%84%E6%9C%89%E7%BD%AA%E4%B9%8B%E4%BA%BA&t=31&band_rank=41&Refer=top)
1. [人一旦用过折叠手机](https://s.weibo.com//weibo?q=%E4%BA%BA%E4%B8%80%E6%97%A6%E7%94%A8%E8%BF%87%E6%8A%98%E5%8F%A0%E6%89%8B%E6%9C%BA&t=31&band_rank=42&Refer=top)
1. [多喜一家人](https://s.weibo.com//weibo?q=%E5%A4%9A%E5%96%9C%E4%B8%80%E5%AE%B6%E4%BA%BA&t=31&band_rank=43&Refer=top)
1. [BLG首次登顶LOL年度战力榜](https://s.weibo.com//weibo?q=%23BLG%E9%A6%96%E6%AC%A1%E7%99%BB%E9%A1%B6LOL%E5%B9%B4%E5%BA%A6%E6%88%98%E5%8A%9B%E6%A6%9C%23&t=31&band_rank=44&Refer=top)
1. [格莱美](https://s.weibo.com//weibo?q=%E6%A0%BC%E8%8E%B1%E7%BE%8E&t=31&band_rank=45&Refer=top)
1. [SK谈妻子观赛流产](https://s.weibo.com//weibo?q=SK%E8%B0%88%E5%A6%BB%E5%AD%90%E8%A7%82%E8%B5%9B%E6%B5%81%E4%BA%A7&t=31&band_rank=46&Refer=top)
1. [文淇牵手宋雨琦绝美奔跑](https://s.weibo.com//weibo?q=%23%E6%96%87%E6%B7%87%E7%89%B5%E6%89%8B%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%BB%9D%E7%BE%8E%E5%A5%94%E8%B7%91%23&t=31&band_rank=47&Refer=top)
1. [蒋欣这段哭戏可以进北影教材](https://s.weibo.com//weibo?q=%E8%92%8B%E6%AC%A3%E8%BF%99%E6%AE%B5%E5%93%AD%E6%88%8F%E5%8F%AF%E4%BB%A5%E8%BF%9B%E5%8C%97%E5%BD%B1%E6%95%99%E6%9D%90&t=31&band_rank=48&Refer=top)
1. [A股新利好来了](https://s.weibo.com//weibo?q=%23A%E8%82%A1%E6%96%B0%E5%88%A9%E5%A5%BD%E6%9D%A5%E4%BA%86%23&t=31&band_rank=49&Refer=top)
1. [天下足球C罗篇今晚播出](https://s.weibo.com//weibo?q=%23%E5%A4%A9%E4%B8%8B%E8%B6%B3%E7%90%83C%E7%BD%97%E7%AF%87%E4%BB%8A%E6%99%9A%E6%92%AD%E5%87%BA%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
