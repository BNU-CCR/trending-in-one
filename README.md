# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-10-07 05:39:25

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
<!-- 最后更新时间 Wed Oct 07 2026 05:53:42 GMT+0800 (China Standard Time) -->

1. [有10万民警赴中缅边境打击涉我犯罪](https://so.toutiao.com/search?keyword=有10万民警赴中缅边境打击涉我犯罪)
1. [媒体人：中国球员踢的还是古代足球](https://so.toutiao.com/search?keyword=媒体人：中国球员踢的还是古代足球)
1. [我国消费市场保持扩容提质发展态势](https://so.toutiao.com/search?keyword=我国消费市场保持扩容提质发展态势)
1. [明学昌畏罪自杀身亡照片曝光](https://so.toutiao.com/search?keyword=明学昌畏罪自杀身亡照片曝光)
1. [8岁男童确诊尿毒症 每天喝奶茶饮料](https://so.toutiao.com/search?keyword=8岁男童确诊尿毒症%20每天喝奶茶饮料)
1. [睡眠开始出现这种问题说明你可能老了](https://so.toutiao.com/search?keyword=睡眠开始出现这种问题说明你可能老了)
1. [缅北电诈头目当庭忏悔向中国人民道歉](https://so.toutiao.com/search?keyword=缅北电诈头目当庭忏悔向中国人民道歉)
1. [血栓最怕的“黄金动作”](https://so.toutiao.com/search?keyword=血栓最怕的“黄金动作”)
1. [外交部：美方应慎重处理台湾问题](https://so.toutiao.com/search?keyword=外交部：美方应慎重处理台湾问题)
1. [白应苍临刑前称随口1个资金盘就20亿](https://so.toutiao.com/search?keyword=白应苍临刑前称随口1个资金盘就20亿)
1. [沈伯洋建议台湾社区提供毒品遭批](https://so.toutiao.com/search?keyword=沈伯洋建议台湾社区提供毒品遭批)
1. [稻城亚丁景区封闭？假的](https://so.toutiao.com/search?keyword=稻城亚丁景区封闭？假的)
1. [明家把中国人称为“行走的人民币”](https://so.toutiao.com/search?keyword=明家把中国人称为“行走的人民币”)
1. [国庆假期世界发生了哪些大事](https://so.toutiao.com/search?keyword=国庆假期世界发生了哪些大事)
1. [越南第3季度GDP增长9.95%意味着什么](https://so.toutiao.com/search?keyword=越南第3季度GDP增长9.95%意味着什么)
1. [缅北电诈被害人死前录音曝光](https://so.toutiao.com/search?keyword=缅北电诈被害人死前录音曝光)
1. [警方从缅北带回5具尸体1份骨灰](https://so.toutiao.com/search?keyword=警方从缅北带回5具尸体1份骨灰)
1. [高市为何在对华议题上嘴硬到底](https://so.toutiao.com/search?keyword=高市为何在对华议题上嘴硬到底)
1. [缅北电诈武装用AK47扫射逃跑人员](https://so.toutiao.com/search?keyword=缅北电诈武装用AK47扫射逃跑人员)
1. [曝邓紫棋已低调完婚](https://so.toutiao.com/search?keyword=曝邓紫棋已低调完婚)
1. [白俄女子在缅甸遭活摘器官 5案犯获刑](https://so.toutiao.com/search?keyword=白俄女子在缅甸遭活摘器官%205案犯获刑)
1. [缅北电诈头目酒店被抓画面曝光](https://so.toutiao.com/search?keyword=缅北电诈头目酒店被抓画面曝光)
1. [8架B-1B轰炸机为何从英国撤回美国](https://so.toutiao.com/search?keyword=8架B-1B轰炸机为何从英国撤回美国)
1. [演员冯文娟否认14岁介入别人家庭](https://so.toutiao.com/search?keyword=演员冯文娟否认14岁介入别人家庭)
1. [缅北魏家接班人自曝布局军政两界](https://so.toutiao.com/search?keyword=缅北魏家接班人自曝布局军政两界)
1. [高速堵车社牛小朋友从前车要来蜜柚](https://so.toutiao.com/search?keyword=高速堵车社牛小朋友从前车要来蜜柚)
1. [专家谈高市两次施政演说涉华表态对比](https://so.toutiao.com/search?keyword=专家谈高市两次施政演说涉华表态对比)
1. [白应苍临刑前说中国动真格了](https://so.toutiao.com/search?keyword=白应苍临刑前说中国动真格了)
1. [余承东回应苹果入局折叠屏](https://so.toutiao.com/search?keyword=余承东回应苹果入局折叠屏)
1. [中国新能源为何要把工厂搬出去](https://so.toutiao.com/search?keyword=中国新能源为何要把工厂搬出去)
1. [缅北明家犯罪证据宣读了两个半小时](https://so.toutiao.com/search?keyword=缅北明家犯罪证据宣读了两个半小时)
1. [国足对手主帅：很高兴和强队比赛](https://so.toutiao.com/search?keyword=国足对手主帅：很高兴和强队比赛)
1. [中外乒坛名将点赞中国大满贯](https://so.toutiao.com/search?keyword=中外乒坛名将点赞中国大满贯)
1. [中国民警：要让缅北电诈血债血还](https://so.toutiao.com/search?keyword=中国民警：要让缅北电诈血债血还)
1. [赖岳谦：我是中国人认同感在台上升](https://so.toutiao.com/search?keyword=赖岳谦：我是中国人认同感在台上升)
1. [俄已警告各国在乌克兰基辅工作危险](https://so.toutiao.com/search?keyword=俄已警告各国在乌克兰基辅工作危险)
1. [缅北电诈主犯随机杀人祭天](https://so.toutiao.com/search?keyword=缅北电诈主犯随机杀人祭天)
1. [刺伤迪拜航空机长的副驾驶供述动机](https://so.toutiao.com/search?keyword=刺伤迪拜航空机长的副驾驶供述动机)
1. [胡塞称首次实战使用新型自制无人机](https://so.toutiao.com/search?keyword=胡塞称首次实战使用新型自制无人机)
1. [邓紫棋深圳演唱会刷新一项世界纪录](https://so.toutiao.com/search?keyword=邓紫棋深圳演唱会刷新一项世界纪录)
1. [冲绳知事递抗议书 美军司令低头接过](https://so.toutiao.com/search?keyword=冲绳知事递抗议书%20美军司令低头接过)
1. [外国游客合影试图搭肩被女特警婉拒](https://so.toutiao.com/search?keyword=外国游客合影试图搭肩被女特警婉拒)
1. [陈冰：美在与那国岛部署导弹意在台海](https://so.toutiao.com/search?keyword=陈冰：美在与那国岛部署导弹意在台海)
1. [美军士兵暴行点燃冲绳民众怒火](https://so.toutiao.com/search?keyword=美军士兵暴行点燃冲绳民众怒火)
1. [女子为错峰返程干脆多玩一天](https://so.toutiao.com/search?keyword=女子为错峰返程干脆多玩一天)
1. [乌军工企业称新型导弹可打击莫斯科](https://so.toutiao.com/search?keyword=乌军工企业称新型导弹可打击莫斯科)
1. [高芙回应争议：已致歉孙心然获谅解](https://so.toutiao.com/search?keyword=高芙回应争议：已致歉孙心然获谅解)
1. [美能源部长：柴油价格几周前已达峰值](https://so.toutiao.com/search?keyword=美能源部长：柴油价格几周前已达峰值)
1. [中国代表点名警告英澳日等国](https://so.toutiao.com/search?keyword=中国代表点名警告英澳日等国)
1. [钧正平：在“台独”问题上无模糊空间](https://so.toutiao.com/search?keyword=钧正平：在“台独”问题上无模糊空间)
1. [溶洞里找到缅北白家犯罪证据](https://so.toutiao.com/search?keyword=溶洞里找到缅北白家犯罪证据)
1. [“超长蛋挞”爆火 医生提醒](https://so.toutiao.com/search?keyword=“超长蛋挞”爆火%20医生提醒)
1. [《余红旧事》马伊琍张哲华搭戏表现](https://so.toutiao.com/search?keyword=《余红旧事》马伊琍张哲华搭戏表现)
1. [《余红旧事》为何高开低走](https://so.toutiao.com/search?keyword=《余红旧事》为何高开低走)
1. [39岁德约加冕中网男单7冠王](https://so.toutiao.com/search?keyword=39岁德约加冕中网男单7冠王)
1. [伊拉克送走美军能摆脱美国影响吗](https://so.toutiao.com/search?keyword=伊拉克送走美军能摆脱美国影响吗)
1. [国庆假期世界各地热门景点全是老乡](https://so.toutiao.com/search?keyword=国庆假期世界各地热门景点全是老乡)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Wed Oct 07 2026 06:38:56 GMT+0800 (China Standard Time) -->

1. [李飞飞称十年后只剩两类劳动](https://www.zhihu.com/search?q=%E6%9D%8E%E9%A3%9E%E9%A3%9E%E7%A7%B0%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%AA%E5%89%A9%E4%B8%A4%E7%B1%BB%E5%8A%B3%E5%8A%A8)
1. [代入代露娃的妈妈天塌了](https://www.zhihu.com/search?q=%E4%BB%A3%E5%85%A5%E4%BB%A3%E9%9C%B2%E5%A8%83%E7%9A%84%E5%A6%88%E5%A6%88%E5%A4%A9%E5%A1%8C%E4%BA%86)
1. [2026诺贝尔物理学奖](https://www.zhihu.com/search?q=2026%E8%AF%BA%E8%B4%9D%E5%B0%94%E7%89%A9%E7%90%86%E5%AD%A6%E5%A5%96)
1. [张家齐妈妈看见张家齐就哭](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E7%9C%8B%E8%A7%81%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%B0%B1%E5%93%AD)
1. [纪录片《缅北电诈覆灭纪实》首播](https://www.zhihu.com/search?q=%E7%BA%AA%E5%BD%95%E7%89%87%E3%80%8A%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E8%A6%86%E7%81%AD%E7%BA%AA%E5%AE%9E%E3%80%8B%E9%A6%96%E6%92%AD)
1. [韩国网友不满亚运夺金免兵役](https://www.zhihu.com/search?q=%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B8%8D%E6%BB%A1%E4%BA%9A%E8%BF%90%E5%A4%BA%E9%87%91%E5%85%8D%E5%85%B5%E5%BD%B9)
1. [超10万份孕妇血样被偷运出境](https://www.zhihu.com/search?q=%E8%B6%8510%E4%B8%87%E4%BB%BD%E5%AD%95%E5%A6%87%E8%A1%80%E6%A0%B7%E8%A2%AB%E5%81%B7%E8%BF%90%E5%87%BA%E5%A2%83)
1. [中国电信回应前员工实名举报](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1%E5%9B%9E%E5%BA%94%E5%89%8D%E5%91%98%E5%B7%A5%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5)
1. [网传俄实验室发生鼠疫泄漏](https://www.zhihu.com/search?q=%E7%BD%91%E4%BC%A0%E4%BF%84%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E7%94%9F%E9%BC%A0%E7%96%AB%E6%B3%84%E6%BC%8F)
1. [华为与高通达成专利许可协议](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E4%B8%8E%E9%AB%98%E9%80%9A%E8%BE%BE%E6%88%90%E4%B8%93%E5%88%A9%E8%AE%B8%E5%8F%AF%E5%8D%8F%E8%AE%AE)
1. [中方放弃谈判直接抓佤邦副总司令](https://www.zhihu.com/search?q=%E4%B8%AD%E6%96%B9%E6%94%BE%E5%BC%83%E8%B0%88%E5%88%A4%E7%9B%B4%E6%8E%A5%E6%8A%93%E4%BD%A4%E9%82%A6%E5%89%AF%E6%80%BB%E5%8F%B8%E4%BB%A4)
1. [普宁考生称因HIV被拒教师入职](https://www.zhihu.com/search?q=%E6%99%AE%E5%AE%81%E8%80%83%E7%94%9F%E7%A7%B0%E5%9B%A0HIV%E8%A2%AB%E6%8B%92%E6%95%99%E5%B8%88%E5%85%A5%E8%81%8C)
1. [国足0-1塔吉克斯坦](https://www.zhihu.com/search?q=%E5%9B%BD%E8%B6%B30-1%E5%A1%94%E5%90%89%E5%85%8B%E6%96%AF%E5%9D%A6)
1. [高通将收购华为部分专利](https://www.zhihu.com/search?q=%E9%AB%98%E9%80%9A%E5%B0%86%E6%94%B6%E8%B4%AD%E5%8D%8E%E4%B8%BA%E9%83%A8%E5%88%86%E4%B8%93%E5%88%A9)
1. [韦世豪被红牌罚下](https://www.zhihu.com/search?q=%E9%9F%A6%E4%B8%96%E8%B1%AA%E8%A2%AB%E7%BA%A2%E7%89%8C%E7%BD%9A%E4%B8%8B)
1. [德约科维奇获中网男单冠军](https://www.zhihu.com/search?q=%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87%E8%8E%B7%E4%B8%AD%E7%BD%91%E7%94%B7%E5%8D%95%E5%86%A0%E5%86%9B)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Wed Oct 07 2026 05:39:25 GMT+0800 (China Standard Time) -->

1. [王皓遭辱骂拍照取证，其妻子发声「不理解竞技体育怎么变这样了」，怎样看待这一现象？骂人者会受到处罚吗？](https://www.zhihu.com/question/2090900901653209300)
1. [缅方曾称没有中国人死，起初拒绝中国警方从电诈园区带回同胞遗骸，哪些信息值得关注？](https://www.zhihu.com/question/2090761132268942600)
1. [国足对阵塔吉克斯坦，韦世豪情绪失控肘击对手，被红牌罚下，怎样评价他的表现？](https://www.zhihu.com/question/2090915470492660000)
1. [为什么 macOS 比 Windows 好用且美观，但是国内 Windows 依旧是主流操作系统？](https://www.zhihu.com/question/656502284)
1. [OPPO 为何要寻求 12 亿美元银团贷款？](https://www.zhihu.com/question/2089518959808857600)
1. [法国国债利差飙升至「欧债危机」以来最高水平，欧洲央行拟采取危机干预，法国会引爆金融危机么？](https://www.zhihu.com/question/2090039404593267000)
1. [纪录片《缅北电诈覆灭纪实》首播，有哪些抓捕细节和内幕值得关注？](https://www.zhihu.com/question/2090520646019183600)
1. [普宁教师岗考生称因HIV体检不合格被教育局劝签自愿放弃聘用，这合理吗？日常教学接触会传染到学生吗？](https://www.zhihu.com/question/2090360680104683500)
1. [家长称孩子打印作业开销太高，四年级一学期单科最高达300元，打印作业应该由家长做吗？怎样能降低成本？](https://www.zhihu.com/question/2090852996590428700)
1. [如何看待曝一大厂职工靠加班将服务器成本降低2亿致全组被裁？网友说「程序员要学会养bug」，怎么理解？](https://www.zhihu.com/question/2089288174748919600)
1. [如何看待TES上单zuian签证两次被拒，369紧急成为TES S16首发上单？](https://www.zhihu.com/question/2090797548009153500)
1. [如何看待教育部要求辅导员与学生同吃同住同生活、思政工作下沉至学生私生活？](https://www.zhihu.com/question/2089644710965024300)
1. [媒体曝多项研究证实最佳睡眠时长为7小时，这一结论的依据是啥？为什么很多网友觉得黄金睡眠时长一直在缩水？](https://www.zhihu.com/question/2090731672496858600)
1. [从暴雪到育碧，感觉这些大厂都已不复往日光彩，欧美游戏行业近几年到底怎么了？](https://www.zhihu.com/question/5203224038)
1. [国足友谊赛 3 连败，1 球未进丢掉 9 球，邵佳一该下课吗？](https://www.zhihu.com/question/2090921655505609000)
1. [Adobe Photoshop 是否已经过时？](https://www.zhihu.com/question/26705971)
1. [2026年中网男单半决赛，梅德韦杰夫泄愤击球致观众受伤被判负，德约科维奇两盘获胜，如何评价这场比赛？](https://www.zhihu.com/question/2090563607268541000)
1. [佤邦联合军原副总司令落网画面公开，将对缅北电诈清剿及局势带来哪些影响？](https://www.zhihu.com/question/2090445538684565200)
1. [《红楼梦》里薛宝钗给惜春开的一大堆画具都是做什么用的，为什么连水桶、箱子也有？](https://www.zhihu.com/question/2088232150554494700)
1. [《笑傲江湖》里「无招胜有招」该如何理解？](https://www.zhihu.com/question/2089673845900948200)
1. [多地文旅安排滞留游客免费入住高校宿舍引争议，如何看待这种「慷学生之慨」的做法？这种安排需要学生同意吗？](https://www.zhihu.com/question/2090570108079027700)
1. [网红慧慧饱饱账号被禁止关注，客服称该用户因违反社区规范被处置，后账号恢复，未回应异常原因，具体咋回事？](https://www.zhihu.com/question/2090102947174512400)
1. [为什么很多影视明星的子女基本都在英美读书？](https://www.zhihu.com/question/2085306776988152000)
1. [有哪些鱼类菜肴，吃过一次就让你念念不忘，强烈推荐尝试？](https://www.zhihu.com/question/2026619623445918700)
1. [大家都说情绪价值，到底什么是情绪价值？](https://www.zhihu.com/question/1952643491453711400)
1. [普通人如何提高自己的认知？](https://www.zhihu.com/question/1992237328933095000)
1. [孩子越大越不愿沟通，父母该坚持管教还是学会放手？](https://www.zhihu.com/question/2080539295270621700)
1. [如果没有乔丹，詹姆斯会是NBA历史第一人吗？](https://www.zhihu.com/question/2016516174062593300)
1. [媒体称破铜烂铁、废纸壳、废塑料可能正在创造巨量财富，这是真的吗？为啥「破烂」正在变成黄金赛道？](https://www.zhihu.com/question/2090571860681253600)
1. [东南亚真的很危险吗？](https://www.zhihu.com/question/14535550405)
1. [泡面怎么煮会好吃？](https://www.zhihu.com/question/1966066791336896500)
1. [大家认为哪种面条最好吃，有哪些好吃的做法?](https://www.zhihu.com/question/1996922585867371800)
1. [赛博朋克模拟经营游戏《尼瓦利斯之夜》是一款怎样的游戏？值得上手一玩吗？](https://www.zhihu.com/question/2088551103432320000)

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
<!-- 最后更新时间 Wed Oct 07 2026 05:43:46 GMT+0800 (China Standard Time) -->

1. [美丽中国山河如画](https://s.weibo.com//weibo?q=%23%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%B1%B1%E6%B2%B3%E5%A6%82%E7%94%BB%23&Refer=new_time)
1. [兰香去世时没戴红绳](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%8E%BB%E4%B8%96%E6%97%B6%E6%B2%A1%E6%88%B4%E7%BA%A2%E7%BB%B3%23&t=31&band_rank=1&Refer=top)
1. [最危险的是年轻时错过复利](https://s.weibo.com//weibo?q=%E6%9C%80%E5%8D%B1%E9%99%A9%E7%9A%84%E6%98%AF%E5%B9%B4%E8%BD%BB%E6%97%B6%E9%94%99%E8%BF%87%E5%A4%8D%E5%88%A9&t=31&band_rank=2&Refer=top)
1. [交通部门增运力优服务应对返程高峰](https://s.weibo.com//weibo?q=%23%E4%BA%A4%E9%80%9A%E9%83%A8%E9%97%A8%E5%A2%9E%E8%BF%90%E5%8A%9B%E4%BC%98%E6%9C%8D%E5%8A%A1%E5%BA%94%E5%AF%B9%E8%BF%94%E7%A8%8B%E9%AB%98%E5%B3%B0%23&t=31&band_rank=3&Refer=top)
1. [偷偷藏不住](https://s.weibo.com//weibo?q=%E5%81%B7%E5%81%B7%E8%97%8F%E4%B8%8D%E4%BD%8F&t=31&band_rank=4&Refer=top)
1. [现在才发现万人迷没戴任何首饰](https://s.weibo.com//weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%89%8D%E5%8F%91%E7%8E%B0%E4%B8%87%E4%BA%BA%E8%BF%B7%E6%B2%A1%E6%88%B4%E4%BB%BB%E4%BD%95%E9%A6%96%E9%A5%B0%23&t=31&band_rank=5&Refer=top)
1. [虞书欣粉丝朋友圈](https://s.weibo.com//weibo?q=%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B2%89%E4%B8%9D%E6%9C%8B%E5%8F%8B%E5%9C%88&t=31&band_rank=6&Refer=top)
1. [华晨宇说别觉得无病呻吟](https://s.weibo.com//weibo?q=%E5%8D%8E%E6%99%A8%E5%AE%87%E8%AF%B4%E5%88%AB%E8%A7%89%E5%BE%97%E6%97%A0%E7%97%85%E5%91%BB%E5%90%9F&t=31&band_rank=7&Refer=top)
1. [粤J2888T战绩全网可查](https://s.weibo.com//weibo?q=%23%E7%B2%A4J2888T%E6%88%98%E7%BB%A9%E5%85%A8%E7%BD%91%E5%8F%AF%E6%9F%A5%23&t=31&band_rank=8&Refer=top)
1. [LV大秀](https://s.weibo.com//weibo?q=LV%E5%A4%A7%E7%A7%80&t=31&band_rank=9&Refer=top)
1. [内娱不拍霍去病太可惜](https://s.weibo.com//weibo?q=%E5%86%85%E5%A8%B1%E4%B8%8D%E6%8B%8D%E9%9C%8D%E5%8E%BB%E7%97%85%E5%A4%AA%E5%8F%AF%E6%83%9C&t=31&band_rank=10&Refer=top)
1. [印度高种姓博主游览中国农村](https://s.weibo.com//weibo?q=%E5%8D%B0%E5%BA%A6%E9%AB%98%E7%A7%8D%E5%A7%93%E5%8D%9A%E4%B8%BB%E6%B8%B8%E8%A7%88%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91&t=31&band_rank=11&Refer=top)
1. [贺炜评国足不敌塔吉克斯坦](https://s.weibo.com//weibo?q=%E8%B4%BA%E7%82%9C%E8%AF%84%E5%9B%BD%E8%B6%B3%E4%B8%8D%E6%95%8C%E5%A1%94%E5%90%89%E5%85%8B%E6%96%AF%E5%9D%A6&t=31&band_rank=12&Refer=top)
1. [罗老师结婚了](https://s.weibo.com//weibo?q=%E7%BD%97%E8%80%81%E5%B8%88%E7%BB%93%E5%A9%9A%E4%BA%86&t=31&band_rank=13&Refer=top)
1. [中国游客国庆出行让日媒很闹心](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%9B%BD%E5%BA%86%E5%87%BA%E8%A1%8C%E8%AE%A9%E6%97%A5%E5%AA%92%E5%BE%88%E9%97%B9%E5%BF%83%23&t=31&band_rank=14&Refer=top)
1. [亚运会冠军金牌已经磨花了](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%86%A0%E5%86%9B%E9%87%91%E7%89%8C%E5%B7%B2%E7%BB%8F%E7%A3%A8%E8%8A%B1%E4%BA%86%23&t=31&band_rank=15&Refer=top)
1. [缅北电诈头目白应苍给中国人民道歉](https://s.weibo.com//weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%A4%B4%E7%9B%AE%E7%99%BD%E5%BA%94%E8%8B%8D%E7%BB%99%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%81%93%E6%AD%89%23&t=31&band_rank=16&Refer=top)
1. [辛芷蕾好美有肉但不胖瘦而不柴](https://s.weibo.com//weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%A5%BD%E7%BE%8E%E6%9C%89%E8%82%89%E4%BD%86%E4%B8%8D%E8%83%96%E7%98%A6%E8%80%8C%E4%B8%8D%E6%9F%B4%23&t=31&band_rank=17&Refer=top)
1. [代露娃艺考老师发文](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E8%89%BA%E8%80%83%E8%80%81%E5%B8%88%E5%8F%91%E6%96%87%23&t=31&band_rank=18&Refer=top)
1. [李勒优否认在拼豆店上班](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%90%A6%E8%AE%A4%E5%9C%A8%E6%8B%BC%E8%B1%86%E5%BA%97%E4%B8%8A%E7%8F%AD%23&t=31&band_rank=19&Refer=top)
1. [一万块的威力被严重低估了](https://s.weibo.com//weibo?q=%E4%B8%80%E4%B8%87%E5%9D%97%E7%9A%84%E5%A8%81%E5%8A%9B%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E4%BA%86&t=31&band_rank=20&Refer=top)
1. [曝邓紫棋结婚](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E9%82%93%E7%B4%AB%E6%A3%8B%E7%BB%93%E5%A9%9A%23&t=31&band_rank=21&Refer=top)
1. [山东人削皮吃发霉馒头](https://s.weibo.com//weibo?q=%E5%B1%B1%E4%B8%9C%E4%BA%BA%E5%89%8A%E7%9A%AE%E5%90%83%E5%8F%91%E9%9C%89%E9%A6%92%E5%A4%B4&t=31&band_rank=22&Refer=top)
1. [知否剧名原来不是宠妾灭妻](https://s.weibo.com//weibo?q=%E7%9F%A5%E5%90%A6%E5%89%A7%E5%90%8D%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E5%AE%A0%E5%A6%BE%E7%81%AD%E5%A6%BB&t=31&band_rank=23&Refer=top)
1. [长久关系秘诀是不太在乎对方](https://s.weibo.com//weibo?q=%E9%95%BF%E4%B9%85%E5%85%B3%E7%B3%BB%E7%A7%98%E8%AF%80%E6%98%AF%E4%B8%8D%E5%A4%AA%E5%9C%A8%E4%B9%8E%E5%AF%B9%E6%96%B9&t=31&band_rank=24&Refer=top)
1. [向下卷才是地狱难度](https://s.weibo.com//weibo?q=%E5%90%91%E4%B8%8B%E5%8D%B7%E6%89%8D%E6%98%AF%E5%9C%B0%E7%8B%B1%E9%9A%BE%E5%BA%A6&t=31&band_rank=25&Refer=top)
1. [跟异性聊天容易上头是什么毛病](https://s.weibo.com//weibo?q=%E8%B7%9F%E5%BC%82%E6%80%A7%E8%81%8A%E5%A4%A9%E5%AE%B9%E6%98%93%E4%B8%8A%E5%A4%B4%E6%98%AF%E4%BB%80%E4%B9%88%E6%AF%9B%E7%97%85&t=31&band_rank=26&Refer=top)
1. [父母以为结婚是这样的](https://s.weibo.com//weibo?q=%E7%88%B6%E6%AF%8D%E4%BB%A5%E4%B8%BA%E7%BB%93%E5%A9%9A%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84&t=31&band_rank=27&Refer=top)
1. [韩国人以为重庆是小城市](https://s.weibo.com//weibo?q=%E9%9F%A9%E5%9B%BD%E4%BA%BA%E4%BB%A5%E4%B8%BA%E9%87%8D%E5%BA%86%E6%98%AF%E5%B0%8F%E5%9F%8E%E5%B8%82&t=31&band_rank=28&Refer=top)
1. [狂吃不胖的室友蹲厕所狂吐](https://s.weibo.com//weibo?q=%E7%8B%82%E5%90%83%E4%B8%8D%E8%83%96%E7%9A%84%E5%AE%A4%E5%8F%8B%E8%B9%B2%E5%8E%95%E6%89%80%E7%8B%82%E5%90%90&t=31&band_rank=29&Refer=top)
1. [邵佳一](https://s.weibo.com//weibo?q=%E9%82%B5%E4%BD%B3%E4%B8%80&t=31&band_rank=30&Refer=top)
1. [不喜欢和没有审美的朋友出门](https://s.weibo.com//weibo?q=%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%92%8C%E6%B2%A1%E6%9C%89%E5%AE%A1%E7%BE%8E%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%87%BA%E9%97%A8&t=31&band_rank=31&Refer=top)
1. [卫报谈C罗离开国家队集训营事件](https://s.weibo.com//weibo?q=%23%E5%8D%AB%E6%8A%A5%E8%B0%88C%E7%BD%97%E7%A6%BB%E5%BC%80%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%9B%86%E8%AE%AD%E8%90%A5%E4%BA%8B%E4%BB%B6%23&t=31&band_rank=32&Refer=top)
1. [我也没懂杜翠雀在气什么](https://s.weibo.com//weibo?q=%23%E6%88%91%E4%B9%9F%E6%B2%A1%E6%87%82%E6%9D%9C%E7%BF%A0%E9%9B%80%E5%9C%A8%E6%B0%94%E4%BB%80%E4%B9%88%23&t=31&band_rank=33&Refer=top)
1. [李嘉诚家族出手](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E5%AE%B6%E6%97%8F%E5%87%BA%E6%89%8B%23&t=31&band_rank=34&Refer=top)
1. [穿秋裤从控制欲变成母爱](https://s.weibo.com//weibo?q=%E7%A9%BF%E7%A7%8B%E8%A3%A4%E4%BB%8E%E6%8E%A7%E5%88%B6%E6%AC%B2%E5%8F%98%E6%88%90%E6%AF%8D%E7%88%B1&t=31&band_rank=35&Refer=top)
1. [王一博对绿色的喜爱度](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%AF%B9%E7%BB%BF%E8%89%B2%E7%9A%84%E5%96%9C%E7%88%B1%E5%BA%A6%23&t=31&band_rank=36&Refer=top)
1. [国足丢球又丢人](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E8%B6%B3%E4%B8%A2%E7%90%83%E5%8F%88%E4%B8%A2%E4%BA%BA%23&t=31&band_rank=37&Refer=top)
1. [许兰香今生太苦了](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E5%85%B0%E9%A6%99%E4%BB%8A%E7%94%9F%E5%A4%AA%E8%8B%A6%E4%BA%86%23&t=31&band_rank=38&Refer=top)
1. [邓紫棋自曝给女儿儿子取好名字](https://s.weibo.com//weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E8%87%AA%E6%9B%9D%E7%BB%99%E5%A5%B3%E5%84%BF%E5%84%BF%E5%AD%90%E5%8F%96%E5%A5%BD%E5%90%8D%E5%AD%97%23&t=31&band_rank=39&Refer=top)
1. [AG战胜DYG](https://s.weibo.com//weibo?q=AG%E6%88%98%E8%83%9CDYG&t=31&band_rank=40&Refer=top)
1. [李勒优解释自己为什么带现金出门](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E8%A7%A3%E9%87%8A%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B8%A6%E7%8E%B0%E9%87%91%E5%87%BA%E9%97%A8%23&t=31&band_rank=41&Refer=top)
1. [魏大勋刘亦菲 性转版早春晴朗](https://s.weibo.com//weibo?q=%E9%AD%8F%E5%A4%A7%E5%8B%8B%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%80%A7%E8%BD%AC%E7%89%88%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97&t=31&band_rank=42&Refer=top)
1. [AG 突围赛](https://s.weibo.com//weibo?q=AG%20%E7%AA%81%E5%9B%B4%E8%B5%9B&t=31&band_rank=43&Refer=top)
1. [JackeyLove回应ZUIAN签证问题](https://s.weibo.com//weibo?q=%23JackeyLove%E5%9B%9E%E5%BA%94ZUIAN%E7%AD%BE%E8%AF%81%E9%97%AE%E9%A2%98%23&t=31&band_rank=44&Refer=top)
1. [光洙这几句真的有被治愈到](https://s.weibo.com//weibo?q=%E5%85%89%E6%B4%99%E8%BF%99%E5%87%A0%E5%8F%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E8%A2%AB%E6%B2%BB%E6%84%88%E5%88%B0&t=31&band_rank=45&Refer=top)
1. [千万不要轻易喂食一只猫头鹰](https://s.weibo.com//weibo?q=%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E5%96%82%E9%A3%9F%E4%B8%80%E5%8F%AA%E7%8C%AB%E5%A4%B4%E9%B9%B0&t=31&band_rank=46&Refer=top)
1. [小莲是第一个去世](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E8%8E%B2%E6%98%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8E%BB%E4%B8%96%23&t=31&band_rank=47&Refer=top)
1. [杨利伟透露我国月球科研计划](https://s.weibo.com//weibo?q=%23%E6%9D%A8%E5%88%A9%E4%BC%9F%E9%80%8F%E9%9C%B2%E6%88%91%E5%9B%BD%E6%9C%88%E7%90%83%E7%A7%91%E7%A0%94%E8%AE%A1%E5%88%92%23&t=31&band_rank=48&Refer=top)
1. [王一博第105条ins](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%AC%AC105%E6%9D%A1ins%23&t=31&band_rank=49&Refer=top)
1. [缅北刘家宣称缅北赚钱缅北花](https://s.weibo.com//weibo?q=%23%E7%BC%85%E5%8C%97%E5%88%98%E5%AE%B6%E5%AE%A3%E7%A7%B0%E7%BC%85%E5%8C%97%E8%B5%9A%E9%92%B1%E7%BC%85%E5%8C%97%E8%8A%B1%23&t=31&band_rank=50&Refer=top)
1. [粤J2888T战绩全网可查](https://s.weibo.com//weibo?q=%23%E7%B2%A4J2888T%E6%88%98%E7%BB%A9%E5%85%A8%E7%BD%91%E5%8F%AF%E6%9F%A5%23&t=31&band_rank=1&Refer=top)
1. [兰香去世时没戴红绳](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%8E%BB%E4%B8%96%E6%97%B6%E6%B2%A1%E6%88%B4%E7%BA%A2%E7%BB%B3%23&t=31&band_rank=4&Refer=top)
1. [贺炜评国足不敌塔吉克斯坦](https://s.weibo.com//weibo?q=%E8%B4%BA%E7%82%9C%E8%AF%84%E5%9B%BD%E8%B6%B3%E4%B8%8D%E6%95%8C%E5%A1%94%E5%90%89%E5%85%8B%E6%96%AF%E5%9D%A6&t=31&band_rank=5&Refer=top)
1. [代露娃艺考老师发文](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E8%89%BA%E8%80%83%E8%80%81%E5%B8%88%E5%8F%91%E6%96%87%23&t=31&band_rank=6&Refer=top)
1. [一万块的威力被严重低估了](https://s.weibo.com//weibo?q=%E4%B8%80%E4%B8%87%E5%9D%97%E7%9A%84%E5%A8%81%E5%8A%9B%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E4%BA%86&t=31&band_rank=7&Refer=top)
1. [中国游客国庆出行让日媒很闹心](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%9B%BD%E5%BA%86%E5%87%BA%E8%A1%8C%E8%AE%A9%E6%97%A5%E5%AA%92%E5%BE%88%E9%97%B9%E5%BF%83%23&t=31&band_rank=8&Refer=top)
1. [声生不息宝岛季](https://s.weibo.com//weibo?q=%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E5%AE%9D%E5%B2%9B%E5%AD%A3&t=31&band_rank=9&Refer=top)
1. [李勒优解释自己为什么带现金出门](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E8%A7%A3%E9%87%8A%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B8%A6%E7%8E%B0%E9%87%91%E5%87%BA%E9%97%A8%23&t=31&band_rank=10&Refer=top)
1. [虞书欣粉丝朋友圈](https://s.weibo.com//weibo?q=%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B2%89%E4%B8%9D%E6%9C%8B%E5%8F%8B%E5%9C%88&t=31&band_rank=11&Refer=top)
1. [现在才发现万人迷没戴任何首饰](https://s.weibo.com//weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%89%8D%E5%8F%91%E7%8E%B0%E4%B8%87%E4%BA%BA%E8%BF%B7%E6%B2%A1%E6%88%B4%E4%BB%BB%E4%BD%95%E9%A6%96%E9%A5%B0%23&t=31&band_rank=12&Refer=top)
1. [印度高种姓博主游览中国农村](https://s.weibo.com//weibo?q=%E5%8D%B0%E5%BA%A6%E9%AB%98%E7%A7%8D%E5%A7%93%E5%8D%9A%E4%B8%BB%E6%B8%B8%E8%A7%88%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91&t=31&band_rank=13&Refer=top)
1. [亚运会冠军金牌已经磨花了](https://s.weibo.com//weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%86%A0%E5%86%9B%E9%87%91%E7%89%8C%E5%B7%B2%E7%BB%8F%E7%A3%A8%E8%8A%B1%E4%BA%86%23&t=31&band_rank=14&Refer=top)
1. [缅北电诈头目白应苍给中国人民道歉](https://s.weibo.com//weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%A4%B4%E7%9B%AE%E7%99%BD%E5%BA%94%E8%8B%8D%E7%BB%99%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%81%93%E6%AD%89%23&t=31&band_rank=15&Refer=top)
1. [卢昱晓看秀前只吃了一口碳水](https://s.weibo.com//weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%9C%8B%E7%A7%80%E5%89%8D%E5%8F%AA%E5%90%83%E4%BA%86%E4%B8%80%E5%8F%A3%E7%A2%B3%E6%B0%B4%23&t=31&band_rank=16&Refer=top)
1. [小孩在景区用磁吸充电线钓许愿池硬币](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%9C%A8%E6%99%AF%E5%8C%BA%E7%94%A8%E7%A3%81%E5%90%B8%E5%85%85%E7%94%B5%E7%BA%BF%E9%92%93%E8%AE%B8%E6%84%BF%E6%B1%A0%E7%A1%AC%E5%B8%81%23&t=31&band_rank=17&Refer=top)
1. [华晨宇一口气官宣六场演唱会](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%98%E5%AE%A3%E5%85%AD%E5%9C%BA%E6%BC%94%E5%94%B1%E4%BC%9A%23&t=31&band_rank=18&Refer=top)
1. [邓紫棋自曝给女儿儿子取好名字](https://s.weibo.com//weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E8%87%AA%E6%9B%9D%E7%BB%99%E5%A5%B3%E5%84%BF%E5%84%BF%E5%AD%90%E5%8F%96%E5%A5%BD%E5%90%8D%E5%AD%97%23&t=31&band_rank=19&Refer=top)
1. [代露娃手握五大艺术名校合格证](https://s.weibo.com//weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E6%89%8B%E6%8F%A1%E4%BA%94%E5%A4%A7%E8%89%BA%E6%9C%AF%E5%90%8D%E6%A0%A1%E5%90%88%E6%A0%BC%E8%AF%81%23&t=31&band_rank=20&Refer=top)
1. [知否剧名原来不是宠妾灭妻](https://s.weibo.com//weibo?q=%E7%9F%A5%E5%90%A6%E5%89%A7%E5%90%8D%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E5%AE%A0%E5%A6%BE%E7%81%AD%E5%A6%BB&t=31&band_rank=21&Refer=top)
1. [小莲是第一个去世](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E8%8E%B2%E6%98%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8E%BB%E4%B8%96%23&t=31&band_rank=22&Refer=top)
1. [山东人削皮吃发霉馒头](https://s.weibo.com//weibo?q=%E5%B1%B1%E4%B8%9C%E4%BA%BA%E5%89%8A%E7%9A%AE%E5%90%83%E5%8F%91%E9%9C%89%E9%A6%92%E5%A4%B4&t=31&band_rank=23&Refer=top)
1. [曝邓紫棋结婚](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E9%82%93%E7%B4%AB%E6%A3%8B%E7%BB%93%E5%A9%9A%23&t=31&band_rank=24&Refer=top)
1. [罗老师结婚了](https://s.weibo.com//weibo?q=%E7%BD%97%E8%80%81%E5%B8%88%E7%BB%93%E5%A9%9A%E4%BA%86&t=31&band_rank=25&Refer=top)
1. [哪位流量艺人和经纪人有过绯闻](https://s.weibo.com//weibo?q=%23%E5%93%AA%E4%BD%8D%E6%B5%81%E9%87%8F%E8%89%BA%E4%BA%BA%E5%92%8C%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%89%E8%BF%87%E7%BB%AF%E9%97%BB%23&t=31&band_rank=26&Refer=top)
1. [跟异性聊天容易上头是什么毛病](https://s.weibo.com//weibo?q=%E8%B7%9F%E5%BC%82%E6%80%A7%E8%81%8A%E5%A4%A9%E5%AE%B9%E6%98%93%E4%B8%8A%E5%A4%B4%E6%98%AF%E4%BB%80%E4%B9%88%E6%AF%9B%E7%97%85&t=31&band_rank=27&Refer=top)
1. [向下卷才是地狱难度](https://s.weibo.com//weibo?q=%E5%90%91%E4%B8%8B%E5%8D%B7%E6%89%8D%E6%98%AF%E5%9C%B0%E7%8B%B1%E9%9A%BE%E5%BA%A6&t=31&band_rank=28&Refer=top)
1. [韩国人以为重庆是小城市](https://s.weibo.com//weibo?q=%E9%9F%A9%E5%9B%BD%E4%BA%BA%E4%BB%A5%E4%B8%BA%E9%87%8D%E5%BA%86%E6%98%AF%E5%B0%8F%E5%9F%8E%E5%B8%82&t=31&band_rank=29&Refer=top)
1. [母亲106岁父亲101岁女儿透露长寿秘诀](https://s.weibo.com//weibo?q=%23%E6%AF%8D%E4%BA%B2106%E5%B2%81%E7%88%B6%E4%BA%B2101%E5%B2%81%E5%A5%B3%E5%84%BF%E9%80%8F%E9%9C%B2%E9%95%BF%E5%AF%BF%E7%A7%98%E8%AF%80%23&t=31&band_rank=30&Refer=top)
1. [王一博第105条ins](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%AC%AC105%E6%9D%A1ins%23&t=31&band_rank=31&Refer=top)
1. [父母以为结婚是这样的](https://s.weibo.com//weibo?q=%E7%88%B6%E6%AF%8D%E4%BB%A5%E4%B8%BA%E7%BB%93%E5%A9%9A%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84&t=31&band_rank=32&Refer=top)
1. [长久关系秘诀是不太在乎对方](https://s.weibo.com//weibo?q=%E9%95%BF%E4%B9%85%E5%85%B3%E7%B3%BB%E7%A7%98%E8%AF%80%E6%98%AF%E4%B8%8D%E5%A4%AA%E5%9C%A8%E4%B9%8E%E5%AF%B9%E6%96%B9&t=31&band_rank=33&Refer=top)
1. [谭松韵老年妆化了6个小时](https://s.weibo.com//weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E8%80%81%E5%B9%B4%E5%A6%86%E5%8C%96%E4%BA%866%E4%B8%AA%E5%B0%8F%E6%97%B6%23&t=31&band_rank=35&Refer=top)
1. [魏大勋刘亦菲 性转版早春晴朗](https://s.weibo.com//weibo?q=%E9%AD%8F%E5%A4%A7%E5%8B%8B%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%80%A7%E8%BD%AC%E7%89%88%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97&t=31&band_rank=36&Refer=top)
1. [狂吃不胖的室友蹲厕所狂吐](https://s.weibo.com//weibo?q=%E7%8B%82%E5%90%83%E4%B8%8D%E8%83%96%E7%9A%84%E5%AE%A4%E5%8F%8B%E8%B9%B2%E5%8E%95%E6%89%80%E7%8B%82%E5%90%90&t=31&band_rank=37&Refer=top)
1. [46岁的隋棠拒生第4胎](https://s.weibo.com//weibo?q=%2346%E5%B2%81%E7%9A%84%E9%9A%8B%E6%A3%A0%E6%8B%92%E7%94%9F%E7%AC%AC4%E8%83%8E%23&t=31&band_rank=38&Refer=top)
1. [光洙这几句真的有被治愈到](https://s.weibo.com//weibo?q=%E5%85%89%E6%B4%99%E8%BF%99%E5%87%A0%E5%8F%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E8%A2%AB%E6%B2%BB%E6%84%88%E5%88%B0&t=31&band_rank=39&Refer=top)
1. [JackeyLove回应ZUIAN签证问题](https://s.weibo.com//weibo?q=%23JackeyLove%E5%9B%9E%E5%BA%94ZUIAN%E7%AD%BE%E8%AF%81%E9%97%AE%E9%A2%98%23&t=31&band_rank=40&Refer=top)
1. [郑思维刘钰雯婚礼](https://s.weibo.com//weibo?q=%E9%83%91%E6%80%9D%E7%BB%B4%E5%88%98%E9%92%B0%E9%9B%AF%E5%A9%9A%E7%A4%BC&t=31&band_rank=41&Refer=top)
1. [小S与S妈具俊晔去墓地为大S庆冥诞](https://s.weibo.com//weibo?q=%23%E5%B0%8FS%E4%B8%8ES%E5%A6%88%E5%85%B7%E4%BF%8A%E6%99%94%E5%8E%BB%E5%A2%93%E5%9C%B0%E4%B8%BA%E5%A4%A7S%E5%BA%86%E5%86%A5%E8%AF%9E%23&t=31&band_rank=42&Refer=top)
1. [千万不要轻易喂食一只猫头鹰](https://s.weibo.com//weibo?q=%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E5%96%82%E9%A3%9F%E4%B8%80%E5%8F%AA%E7%8C%AB%E5%A4%B4%E9%B9%B0&t=31&band_rank=43&Refer=top)
1. [此沙 港圈](https://s.weibo.com//weibo?q=%E6%AD%A4%E6%B2%99%20%E6%B8%AF%E5%9C%88&t=31&band_rank=44&Refer=top)
1. [隋棠越来越像林志玲了](https://s.weibo.com//weibo?q=%23%E9%9A%8B%E6%A3%A0%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%83%8F%E6%9E%97%E5%BF%97%E7%8E%B2%E4%BA%86%23&t=31&band_rank=45&Refer=top)
1. [停个车全小区的人都知道你回来了](https://s.weibo.com//weibo?q=%23%E5%81%9C%E4%B8%AA%E8%BD%A6%E5%85%A8%E5%B0%8F%E5%8C%BA%E7%9A%84%E4%BA%BA%E9%83%BD%E7%9F%A5%E9%81%93%E4%BD%A0%E5%9B%9E%E6%9D%A5%E4%BA%86%23&t=31&band_rank=46&Refer=top)
1. [迪丽热巴Dior首图](https://s.weibo.com//weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4Dior%E9%A6%96%E5%9B%BE%23&t=31&band_rank=47&Refer=top)
1. [国庆真正拥有7天假期的人很少](https://s.weibo.com//weibo?q=%E5%9B%BD%E5%BA%86%E7%9C%9F%E6%AD%A3%E6%8B%A5%E6%9C%897%E5%A4%A9%E5%81%87%E6%9C%9F%E7%9A%84%E4%BA%BA%E5%BE%88%E5%B0%91&t=31&band_rank=48&Refer=top)
1. [不喜欢和没有审美的朋友出门](https://s.weibo.com//weibo?q=%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%92%8C%E6%B2%A1%E6%9C%89%E5%AE%A1%E7%BE%8E%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%87%BA%E9%97%A8&t=31&band_rank=49&Refer=top)
1. [AG 突围赛](https://s.weibo.com//weibo?q=AG%20%E7%AA%81%E5%9B%B4%E8%B5%9B&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
