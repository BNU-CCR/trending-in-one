# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-28 02:27:03

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
<!-- 最后更新时间 Sun Sep 27 2026 22:16:17 GMT+0800 (China Standard Time) -->

1. [台湾社会要读懂中美元首会晤意义](https://so.toutiao.com/search?keyword=台湾社会要读懂中美元首会晤意义)
1. [王曼昱女单夺冠 孙颖莎无缘卫冕](https://so.toutiao.com/search?keyword=王曼昱女单夺冠%20孙颖莎无缘卫冕)
1. [美民众热烈期盼大熊猫重返亚特兰大](https://so.toutiao.com/search?keyword=美民众热烈期盼大熊猫重返亚特兰大)
1. [俄罗斯外长喊话美国：马杜罗必须获释](https://so.toutiao.com/search?keyword=俄罗斯外长喊话美国：马杜罗必须获释)
1. [吴艳妮女子100米栏摘铜](https://so.toutiao.com/search?keyword=吴艳妮女子100米栏摘铜)
1. [油价将于10月15日24时调整](https://so.toutiao.com/search?keyword=油价将于10月15日24时调整)
1. [中美见面同期美企在华开启量产](https://so.toutiao.com/search?keyword=中美见面同期美企在华开启量产)
1. [陈圆将110米栏摘金](https://so.toutiao.com/search?keyword=陈圆将110米栏摘金)
1. [专家：菲企图蚕食中方主权是痴心妄想](https://so.toutiao.com/search?keyword=专家：菲企图蚕食中方主权是痴心妄想)
1. [中美达成的八点共识有哪些新意](https://so.toutiao.com/search?keyword=中美达成的八点共识有哪些新意)
1. [17岁陈妤颉田径200米摘银](https://so.toutiao.com/search?keyword=17岁陈妤颉田径200米摘银)
1. [李梦谈《兰香如故》里的赵星棠](https://so.toutiao.com/search?keyword=李梦谈《兰香如故》里的赵星棠)
1. [无糖月饼可敞开吃？小心误区](https://so.toutiao.com/search?keyword=无糖月饼可敞开吃？小心误区)
1. [严子怡破纪录夺冠](https://so.toutiao.com/search?keyword=严子怡破纪录夺冠)
1. [菲律宾再次强闯仁爱礁意欲何为](https://so.toutiao.com/search?keyword=菲律宾再次强闯仁爱礁意欲何为)
1. [刘欢唱红的歌值多少钱](https://so.toutiao.com/search?keyword=刘欢唱红的歌值多少钱)
1. [中国队亚运会半程小结：成绩符合预期](https://so.toutiao.com/search?keyword=中国队亚运会半程小结：成绩符合预期)
1. [王祖贤回应“容貌变样”](https://so.toutiao.com/search?keyword=王祖贤回应“容貌变样”)
1. [中美元首会晤的八点共识意味着什么](https://so.toutiao.com/search?keyword=中美元首会晤的八点共识意味着什么)
1. [黄友政林诗栋战胜日本组合夺冠](https://so.toutiao.com/search?keyword=黄友政林诗栋战胜日本组合夺冠)
1. [71岁男子拾荒21年领到42万养老金](https://so.toutiao.com/search?keyword=71岁男子拾荒21年领到42万养老金)
1. [评论员：日本军事布局直指台海](https://so.toutiao.com/search?keyword=评论员：日本军事布局直指台海)
1. [孙颖莎：我可能等不到下届亚运会了](https://so.toutiao.com/search?keyword=孙颖莎：我可能等不到下届亚运会了)
1. [升糖最快的主食不是米饭而是这6种](https://so.toutiao.com/search?keyword=升糖最快的主食不是米饭而是这6种)
1. [谢霆锋重庆演唱会万人大合唱](https://so.toutiao.com/search?keyword=谢霆锋重庆演唱会万人大合唱)
1. [张雪机车团队多人在意大利被盗](https://so.toutiao.com/search?keyword=张雪机车团队多人在意大利被盗)
1. [那英临时申请弯弯的月亮演唱版权](https://so.toutiao.com/search?keyword=那英临时申请弯弯的月亮演唱版权)
1. [伊拉克记者称无比怀念杭州亚运会](https://so.toutiao.com/search?keyword=伊拉克记者称无比怀念杭州亚运会)
1. [李克勤迟到草根歌手侯浪救场火了](https://so.toutiao.com/search?keyword=李克勤迟到草根歌手侯浪救场火了)
1. [太原马拉松鸣枪开赛 4万名选手参赛](https://so.toutiao.com/search?keyword=太原马拉松鸣枪开赛%204万名选手参赛)
1. [U23国足登上《新闻联播》](https://so.toutiao.com/search?keyword=U23国足登上《新闻联播》)
1. [中信证券：维持年内A股震荡市的判断](https://so.toutiao.com/search?keyword=中信证券：维持年内A股震荡市的判断)
1. [蔡磊确诊渐冻症后夫妻俩的第七个中秋](https://so.toutiao.com/search?keyword=蔡磊确诊渐冻症后夫妻俩的第七个中秋)
1. [“海上移动岛屿”现身南海演习](https://so.toutiao.com/search?keyword=“海上移动岛屿”现身南海演习)
1. [李亚鹏现身意大利为张雪机车加油](https://so.toutiao.com/search?keyword=李亚鹏现身意大利为张雪机车加油)
1. [刘欢生前打算推出专辑《忘记刘欢》](https://so.toutiao.com/search?keyword=刘欢生前打算推出专辑《忘记刘欢》)
1. [解放军联合海警亮剑南海](https://so.toutiao.com/search?keyword=解放军联合海警亮剑南海)
1. [队史最佳30金 新生代泳将闪耀亚运](https://so.toutiao.com/search?keyword=队史最佳30金%20新生代泳将闪耀亚运)
1. [大衣哥提到刘欢的歌赞不绝口](https://so.toutiao.com/search?keyword=大衣哥提到刘欢的歌赞不绝口)
1. [侯英超目睹9比3遭逆转愤然离场](https://so.toutiao.com/search?keyword=侯英超目睹9比3遭逆转愤然离场)
1. [台北选战“青鸟”接连网暴造谣](https://so.toutiao.com/search?keyword=台北选战“青鸟”接连网暴造谣)
1. [美军铺红毯让日本网民破防](https://so.toutiao.com/search?keyword=美军铺红毯让日本网民破防)
1. [邱毅：“解放军驻台”能震慑分裂势力](https://so.toutiao.com/search?keyword=邱毅：“解放军驻台”能震慑分裂势力)
1. [刘欢走了 我们怀念的何止是他的歌](https://so.toutiao.com/search?keyword=刘欢走了%20我们怀念的何止是他的歌)
1. [赢了张本智和的反手绝活哥什么来头](https://so.toutiao.com/search?keyword=赢了张本智和的反手绝活哥什么来头)
1. [专家：机器人也失业了](https://so.toutiao.com/search?keyword=专家：机器人也失业了)
1. [德国球迷来渝看球感受足球氛围](https://so.toutiao.com/search?keyword=德国球迷来渝看球感受足球氛围)
1. [国产新型无人机亮剑黄岩岛](https://so.toutiao.com/search?keyword=国产新型无人机亮剑黄岩岛)
1. [新能源汽车仍然“买得起修不起”吗](https://so.toutiao.com/search?keyword=新能源汽车仍然“买得起修不起”吗)
1. [帽子上有鲁迅徽章的女运动员夺冠了](https://so.toutiao.com/search?keyword=帽子上有鲁迅徽章的女运动员夺冠了)
1. [邓亚萍谈日本男单全军覆没：兴奋过头](https://so.toutiao.com/search?keyword=邓亚萍谈日本男单全军覆没：兴奋过头)
1. [全国秋粮收获有序推进](https://so.toutiao.com/search?keyword=全国秋粮收获有序推进)
1. [国乒提前锁定女单金银牌](https://so.toutiao.com/search?keyword=国乒提前锁定女单金银牌)
1. [特斯拉一个月降价两次惹怒新车主](https://so.toutiao.com/search?keyword=特斯拉一个月降价两次惹怒新车主)
1. [赛力斯称问界将持续应用华为技术](https://so.toutiao.com/search?keyword=赛力斯称问界将持续应用华为技术)
1. [伊朗选手打赢张本冲日本教练面前庆祝](https://so.toutiao.com/search?keyword=伊朗选手打赢张本冲日本教练面前庆祝)
1. [南方大范围闷热将持续至月底](https://so.toutiao.com/search?keyword=南方大范围闷热将持续至月底)
1. [刘欢捐2000万的公益金管理方发声](https://so.toutiao.com/search?keyword=刘欢捐2000万的公益金管理方发声)
1. [刘欢夫妇十年间多次组织学员六一聚会](https://so.toutiao.com/search?keyword=刘欢夫妇十年间多次组织学员六一聚会)
1. [韩媒：中国男足实力和心理都处下风](https://so.toutiao.com/search?keyword=韩媒：中国男足实力和心理都处下风)
1. [那英演唱会唱《弯弯的月亮》](https://so.toutiao.com/search?keyword=那英演唱会唱《弯弯的月亮》)
1. [13天内敬一丹游本昌刘欢相继离世](https://so.toutiao.com/search?keyword=13天内敬一丹游本昌刘欢相继离世)
1. [“瓷砖贴面女孩”戴心怡走红赛场](https://so.toutiao.com/search?keyword=“瓷砖贴面女孩”戴心怡走红赛场)
1. [瓷砖贴面项目唯一女选手笑着笑着哭了](https://so.toutiao.com/search?keyword=瓷砖贴面项目唯一女选手笑着笑着哭了)
1. [袁娅维发长文悼念刘欢](https://so.toutiao.com/search?keyword=袁娅维发长文悼念刘欢)
1. [亚运会中国队05后小将占了近三成](https://so.toutiao.com/search?keyword=亚运会中国队05后小将占了近三成)
1. [冰岛外长反击以总理“道德懦夫”言论](https://so.toutiao.com/search?keyword=冰岛外长反击以总理“道德懦夫”言论)
1. [刘欢：时代的异数](https://so.toutiao.com/search?keyword=刘欢：时代的异数)
1. [“莎头”遭横扫无缘三连冠](https://so.toutiao.com/search?keyword=“莎头”遭横扫无缘三连冠)
1. [媒体：张子宇的进步大家看得见](https://so.toutiao.com/search?keyword=媒体：张子宇的进步大家看得见)
1. [媒体评刘欢离世：绕梁余音总关情](https://so.toutiao.com/search?keyword=媒体评刘欢离世：绕梁余音总关情)
1. [粟文打破36年亚运会纪录](https://so.toutiao.com/search?keyword=粟文打破36年亚运会纪录)
1. [李在明谴责乌方泄露朝鲜战俘移送韩国](https://so.toutiao.com/search?keyword=李在明谴责乌方泄露朝鲜战俘移送韩国)
1. [美中航空遗产基金会主席谈中美关系](https://so.toutiao.com/search?keyword=美中航空遗产基金会主席谈中美关系)
1. [《千万次的问》33年后答案是什么](https://so.toutiao.com/search?keyword=《千万次的问》33年后答案是什么)
1. [亚运颁奖现场升起两面五星红旗](https://so.toutiao.com/search?keyword=亚运颁奖现场升起两面五星红旗)
1. [也门领导人呼吁全面动员对抗胡塞武装](https://so.toutiao.com/search?keyword=也门领导人呼吁全面动员对抗胡塞武装)
1. [起底菲律宾的南海“碰瓷链”](https://so.toutiao.com/search?keyword=起底菲律宾的南海“碰瓷链”)
1. [中国男足亚运会半决赛将对阵韩国](https://so.toutiao.com/search?keyword=中国男足亚运会半决赛将对阵韩国)
1. [学者：刘欢的歌声嵌在岁月沧桑里](https://so.toutiao.com/search?keyword=学者：刘欢的歌声嵌在岁月沧桑里)
1. [烟草燃烧会释放至少69种致癌物](https://so.toutiao.com/search?keyword=烟草燃烧会释放至少69种致癌物)
1. [邓亚萍说国乒不能只靠一个人](https://so.toutiao.com/search?keyword=邓亚萍说国乒不能只靠一个人)
1. [李克勤演唱会迟到2小时](https://so.toutiao.com/search?keyword=李克勤演唱会迟到2小时)
1. [河南多个景区挂出巨幅五星红旗](https://so.toutiao.com/search?keyword=河南多个景区挂出巨幅五星红旗)
1. [孙思蓓获自由式小轮车女子公园赛金牌](https://so.toutiao.com/search?keyword=孙思蓓获自由式小轮车女子公园赛金牌)
1. [中美关系持续稳定发展惠及世界](https://so.toutiao.com/search?keyword=中美关系持续稳定发展惠及世界)
1. [中美八项成果为何未提台湾问题](https://so.toutiao.com/search?keyword=中美八项成果为何未提台湾问题)
1. [亚运奖牌榜：中国队107金41银28铜](https://so.toutiao.com/search?keyword=亚运奖牌榜：中国队107金41银28铜)
1. [伊朗提重开霍尔木兹海峡方案遭美拒绝](https://so.toutiao.com/search?keyword=伊朗提重开霍尔木兹海峡方案遭美拒绝)
1. [媒体评林诗栋蒯曼混双金牌](https://so.toutiao.com/search?keyword=媒体评林诗栋蒯曼混双金牌)
1. [中美元首会晤引发热烈国际反响](https://so.toutiao.com/search?keyword=中美元首会晤引发热烈国际反响)
1. [黄健翔希望国足回到亚洲一流](https://so.toutiao.com/search?keyword=黄健翔希望国足回到亚洲一流)
1. [怀念刘欢：音乐永不消逝](https://so.toutiao.com/search?keyword=怀念刘欢：音乐永不消逝)
1. [人民日报用歌词送别刘欢](https://so.toutiao.com/search?keyword=人民日报用歌词送别刘欢)
1. [朱雨玲谈无缘亚运会女单四强](https://so.toutiao.com/search?keyword=朱雨玲谈无缘亚运会女单四强)
1. [比尔·盖茨警告AI或致十亿人死亡](https://so.toutiao.com/search?keyword=比尔·盖茨警告AI或致十亿人死亡)
1. [刘欢常跟人喝酒聊天到天亮](https://so.toutiao.com/search?keyword=刘欢常跟人喝酒聊天到天亮)
1. [治沙人殷玉珍新目标：一代接着一代干](https://so.toutiao.com/search?keyword=治沙人殷玉珍新目标：一代接着一代干)
1. [施之皓谈国乒男团亚运决赛排兵布阵](https://so.toutiao.com/search?keyword=施之皓谈国乒男团亚运决赛排兵布阵)
1. [刘欢今年1月最后一次公开演出](https://so.toutiao.com/search?keyword=刘欢今年1月最后一次公开演出)
1. [《歌手》节目已痛失两位“歌王”](https://so.toutiao.com/search?keyword=《歌手》节目已痛失两位“歌王”)
1. [媒体：中国篮球该清醒了](https://so.toutiao.com/search?keyword=媒体：中国篮球该清醒了)
1. [张展硕：七金之后看世界](https://so.toutiao.com/search?keyword=张展硕：七金之后看世界)
1. [刘欢妻子：我永远的爱 永远的痛](https://so.toutiao.com/search?keyword=刘欢妻子：我永远的爱%20永远的痛)
1. [特朗普第一时间发帖：期待下次会面](https://so.toutiao.com/search?keyword=特朗普第一时间发帖：期待下次会面)
1. [PCB是否会启动新一轮大级别行情](https://so.toutiao.com/search?keyword=PCB是否会启动新一轮大级别行情)
1. [中美达成300亿美元对等降税安排](https://so.toutiao.com/search?keyword=中美达成300亿美元对等降税安排)
1. [媒体：现代篮球靠旧经验难赢新比赛](https://so.toutiao.com/search?keyword=媒体：现代篮球靠旧经验难赢新比赛)
1. [刘欢丧事从简不举行追悼会](https://so.toutiao.com/search?keyword=刘欢丧事从简不举行追悼会)
1. [大熊猫平平和福双已启程赴美](https://so.toutiao.com/search?keyword=大熊猫平平和福双已启程赴美)
1. [油价暴涨法国司机给汽车加食用油](https://so.toutiao.com/search?keyword=油价暴涨法国司机给汽车加食用油)
1. [《甄嬛传》片头片尾曲演唱者均离世](https://so.toutiao.com/search?keyword=《甄嬛传》片头片尾曲演唱者均离世)
1. [CCTV16转播国足vs新西兰的友谊赛](https://so.toutiao.com/search?keyword=CCTV16转播国足vs新西兰的友谊赛)
1. [中美元首白宫互动的五个细节](https://so.toutiao.com/search?keyword=中美元首白宫互动的五个细节)
1. [为何股骨头坏死被称为不死癌症](https://so.toutiao.com/search?keyword=为何股骨头坏死被称为不死癌症)
1. [“贴瓷砖”和美容美发走上世界级赛场](https://so.toutiao.com/search?keyword=“贴瓷砖”和美容美发走上世界级赛场)
1. [21岁香港女生参加贴瓷砖比赛走红](https://so.toutiao.com/search?keyword=21岁香港女生参加贴瓷砖比赛走红)
1. [刘欢曾因股骨头坏死治疗](https://so.toutiao.com/search?keyword=刘欢曾因股骨头坏死治疗)
1. [依木兰亚运首发多次威胁传球](https://so.toutiao.com/search?keyword=依木兰亚运首发多次威胁传球)
1. [中俄本币结算达99%意味着什么](https://so.toutiao.com/search?keyword=中俄本币结算达99%意味着什么)
1. [越来越多美国人对中国抱有积极看法](https://so.toutiao.com/search?keyword=越来越多美国人对中国抱有积极看法)
1. [中介带看别墅疑遭“跳单”](https://so.toutiao.com/search?keyword=中介带看别墅疑遭“跳单”)
1. [那个让全中国跟着唱的人谢幕了](https://so.toutiao.com/search?keyword=那个让全中国跟着唱的人谢幕了)
1. [沙特高额军费为何买不来战略安全](https://so.toutiao.com/search?keyword=沙特高额军费为何买不来战略安全)
1. [五仁月饼成回收香饽饽](https://so.toutiao.com/search?keyword=五仁月饼成回收香饽饽)
1. [侯英超：阿拉米扬赢张本智和不算爆冷](https://so.toutiao.com/search?keyword=侯英超：阿拉米扬赢张本智和不算爆冷)
1. [张本智和回应输球：几乎是场完败](https://so.toutiao.com/search?keyword=张本智和回应输球：几乎是场完败)
1. [大陆学生赴台交流被女间谍主动接近](https://so.toutiao.com/search?keyword=大陆学生赴台交流被女间谍主动接近)
1. [孙颖莎回应无缘亚运混双三连冠](https://so.toutiao.com/search?keyword=孙颖莎回应无缘亚运混双三连冠)
1. [林诗栋赢松岛辉空后激动连续跨栏](https://so.toutiao.com/search?keyword=林诗栋赢松岛辉空后激动连续跨栏)
1. [长假为何会对股票市场产生心理影响](https://so.toutiao.com/search?keyword=长假为何会对股票市场产生心理影响)
1. [评论员：美方不应将台湾问题工具化](https://so.toutiao.com/search?keyword=评论员：美方不应将台湾问题工具化)
1. [健康早餐要包含哪些食物](https://so.toutiao.com/search?keyword=健康早餐要包含哪些食物)
1. [中秋国庆白酒卖不动了吗](https://so.toutiao.com/search?keyword=中秋国庆白酒卖不动了吗)
1. [侯英超：林诗栋脑子要转起来](https://so.toutiao.com/search?keyword=侯英超：林诗栋脑子要转起来)
1. [特朗普：这次访问富有成效](https://so.toutiao.com/search?keyword=特朗普：这次访问富有成效)
1. [陈妤颉夺冠后收到五年高考三年模拟](https://so.toutiao.com/search?keyword=陈妤颉夺冠后收到五年高考三年模拟)
1. [评论员：美国希望跟中国走上新台阶](https://so.toutiao.com/search?keyword=评论员：美国希望跟中国走上新台阶)
1. [程靖淇谈王楚钦半决赛对手](https://so.toutiao.com/search?keyword=程靖淇谈王楚钦半决赛对手)
1. [94岁老人分享健康心得：心情开朗](https://so.toutiao.com/search?keyword=94岁老人分享健康心得：心情开朗)
1. [赛力斯和造车新势力为什么不赚钱](https://so.toutiao.com/search?keyword=赛力斯和造车新势力为什么不赚钱)
1. [俄军称打击乌“星链”数据处理中心](https://so.toutiao.com/search?keyword=俄军称打击乌“星链”数据处理中心)
1. [刘欢离世前太太曾联系甄嬛传编曲](https://so.toutiao.com/search?keyword=刘欢离世前太太曾联系甄嬛传编曲)
1. [多国联军拦截并摧毁胡塞武装无人机](https://so.toutiao.com/search?keyword=多国联军拦截并摧毁胡塞武装无人机)
1. [伊朗：美以袭击致5000余人丧生](https://so.toutiao.com/search?keyword=伊朗：美以袭击致5000余人丧生)
1. [导演张绍林回忆刘欢唱《哭诸葛》](https://so.toutiao.com/search?keyword=导演张绍林回忆刘欢唱《哭诸葛》)
1. [美媒：美对伊朗战事已耗资436亿美元](https://so.toutiao.com/search?keyword=美媒：美对伊朗战事已耗资436亿美元)
1. [朱立伦心疼蒋万安受委屈](https://so.toutiao.com/search?keyword=朱立伦心疼蒋万安受委屈)
1. [魏德尔在“装”极右翼吗](https://so.toutiao.com/search?keyword=魏德尔在“装”极右翼吗)
1. [林志炫吉克隽逸悼念刘欢去世](https://so.toutiao.com/search?keyword=林志炫吉克隽逸悼念刘欢去世)
1. [中国海警位黄岩岛领海及周边执法巡查](https://so.toutiao.com/search?keyword=中国海警位黄岩岛领海及周边执法巡查)
1. [电视剧《征途》好看吗](https://so.toutiao.com/search?keyword=电视剧《征途》好看吗)
1. [刘欢7年前录《歌手》时心律失常](https://so.toutiao.com/search?keyword=刘欢7年前录《歌手》时心律失常)
1. [吴艳妮晋级亚运会决赛](https://so.toutiao.com/search?keyword=吴艳妮晋级亚运会决赛)
1. [张本智和爆冷出局](https://so.toutiao.com/search?keyword=张本智和爆冷出局)
1. [日本乒乓亚运男单全军覆没](https://so.toutiao.com/search?keyword=日本乒乓亚运男单全军覆没)
1. [如何看中国队拿下本届亚运会百金](https://so.toutiao.com/search?keyword=如何看中国队拿下本届亚运会百金)
1. [陈熠/范姝涵0-3张本美和/早田希娜](https://so.toutiao.com/search?keyword=陈熠/范姝涵0-3张本美和/早田希娜)
1. [杨舒予：铜牌很遗憾](https://so.toutiao.com/search?keyword=杨舒予：铜牌很遗憾)
1. [刘欢和他的时代之歌](https://so.toutiao.com/search?keyword=刘欢和他的时代之歌)
1. [《好声音》时任宣传总监回忆刘欢](https://so.toutiao.com/search?keyword=《好声音》时任宣传总监回忆刘欢)
1. [U23国足青春风暴重塑希望](https://so.toutiao.com/search?keyword=U23国足青春风暴重塑希望)
1. [中国男足时隔28年再进亚运四强](https://so.toutiao.com/search?keyword=中国男足时隔28年再进亚运四强)
1. [赣超现场全场球迷纵情呐喊](https://so.toutiao.com/search?keyword=赣超现场全场球迷纵情呐喊)
1. [贺晓明、贺黎明祭拜父亲贺龙元帅](https://so.toutiao.com/search?keyword=贺晓明、贺黎明祭拜父亲贺龙元帅)
1. [东北超第二现场燃爆沈阳秋夜](https://so.toutiao.com/search?keyword=东北超第二现场燃爆沈阳秋夜)
1. [36年前刘欢和韦唯唱响《亚洲雄风》](https://so.toutiao.com/search?keyword=36年前刘欢和韦唯唱响《亚洲雄风》)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Mon Sep 28 2026 02:20:08 GMT+0800 (China Standard Time) -->

1. [网红潘宏虐狗纠纷终审判决](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E6%BD%98%E5%AE%8F%E8%99%90%E7%8B%97%E7%BA%A0%E7%BA%B7%E7%BB%88%E5%AE%A1%E5%88%A4%E5%86%B3)
1. [中美达成八点成果共识](https://www.zhihu.com/search?q=%E4%B8%AD%E7%BE%8E%E8%BE%BE%E6%88%90%E5%85%AB%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86)
1. [刘欢到退休时仍是副教授](https://www.zhihu.com/search?q=%E5%88%98%E6%AC%A2%E5%88%B0%E9%80%80%E4%BC%91%E6%97%B6%E4%BB%8D%E6%98%AF%E5%89%AF%E6%95%99%E6%8E%88)
1. [王曼昱战胜孙颖莎夺冠](https://www.zhihu.com/search?q=%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%88%98%E8%83%9C%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%BA%E5%86%A0)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [刘欢病逝](https://www.zhihu.com/search?q=%E5%88%98%E6%AC%A2%E7%97%85%E9%80%9D)
1. [日乒男单全军覆没](https://www.zhihu.com/search?q=%E6%97%A5%E4%B9%92%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1)
1. [三大运营商全面叫停0元购机](https://www.zhihu.com/search?q=%E4%B8%89%E5%A4%A7%E8%BF%90%E8%90%A5%E5%95%86%E5%85%A8%E9%9D%A2%E5%8F%AB%E5%81%9C0%E5%85%83%E8%B4%AD%E6%9C%BA)
1. [林诗栋蒯曼亚运混双冠军](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B%E8%92%AF%E6%9B%BC%E4%BA%9A%E8%BF%90%E6%B7%B7%E5%8F%8C%E5%86%A0%E5%86%9B)
1. [比尔盖茨警告AI或致十亿人死亡](https://www.zhihu.com/search?q=%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E8%AD%A6%E5%91%8AAI%E6%88%96%E8%87%B4%E5%8D%81%E4%BA%BF%E4%BA%BA%E6%AD%BB%E4%BA%A1)
1. [南开教授因简历过于实诚走红](https://www.zhihu.com/search?q=%E5%8D%97%E5%BC%80%E6%95%99%E6%8E%88%E5%9B%A0%E7%AE%80%E5%8E%86%E8%BF%87%E4%BA%8E%E5%AE%9E%E8%AF%9A%E8%B5%B0%E7%BA%A2)
1. [中美构建建设性战略稳定关系](https://www.zhihu.com/search?q=%E4%B8%AD%E7%BE%8E%E6%9E%84%E5%BB%BA%E5%BB%BA%E8%AE%BE%E6%80%A7%E6%88%98%E7%95%A5%E7%A8%B3%E5%AE%9A%E5%85%B3%E7%B3%BB)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Mon Sep 28 2026 02:27:03 GMT+0800 (China Standard Time) -->

1. [亚运会乒乓球男双决赛，林诗栋/黄友政 4-2 张本智和/篠塚大登，获男双金牌，如何评价本场比赛？](https://www.zhihu.com/question/2087560514792419800)
1. [交强险2025年经营亏损230亿元，3.86亿辆机动车参保，赔付支出2524亿元，哪些信息值得关注？](https://www.zhihu.com/question/2087512663706133800)
1. [小米18系列硬件防窥屏线下实测被指可视角度差、侧看偏色，这是翻车了吗？是硬件方案固有缺陷还是调校问题？](https://www.zhihu.com/question/2086829341468577800)
1. [亚运会女子标枪决赛，严子怡夺金，投出 70 米 46 刷新亚运纪录，如何评价她的个人表现以及本场比赛？](https://www.zhihu.com/question/2087637427082851300)
1. [一技校101名毕业生入职北大，学生一般大二就被预订，主要去实验室做科研助手，这是一种怎样的职业路径？](https://www.zhihu.com/question/2087469941116990500)
1. [刘欢在中国乐坛的地位是怎样的？](https://www.zhihu.com/question/20404153)
1. [中美达成八点成果共识，达成「300亿美元」对等降税安排，哪些信息值得重点关注？](https://www.zhihu.com/question/2087214676530525400)
1. [亚运会女子 100 米栏决赛，福部真子夺冠，吴艳妮铜牌，如何评价她们的表现和本场比赛？](https://www.zhihu.com/question/2087541086738540000)
1. [子弹连钢板都能打穿，为何打不穿麻沙袋？这是什么原理？](https://www.zhihu.com/question/2086150926117750500)
1. [26-27乒乓球德甲联赛，樊振东 3:0 格拉尔多，如何评价本场比赛？](https://www.zhihu.com/question/2087653538654589400)
1. [亚运会女子 200 米决赛，陈妤颉摘得银牌，如何评价本场比赛和她的表现？](https://www.zhihu.com/question/2087540791207879400)
1. [26-27赛季乒乓球德甲联赛，樊振东 3:1 维东斯霍特，如何评价本场比赛？](https://www.zhihu.com/question/2087684300468654600)
1. [大熊猫「平平」「福双」平安到达美国亚特兰大动物园，对中美两国有哪些意义？](https://www.zhihu.com/question/2086764289658807600)
1. [交个朋友直播间被曝卖病死鱼，罗永浩连发 16 条内容辟谣，具体是怎么回事？](https://www.zhihu.com/question/2086823700276277800)
1. [亚运男子 110 米栏，陈圆将 13 秒 15 夺金，如何评价他的表现？](https://www.zhihu.com/question/2087621166760293400)
1. [乒乓解说员高菡被指偏向性明显、情绪烘托过多，客观评价她的解说能力如何？不偏袒、中立的解说员应是怎样的？](https://www.zhihu.com/question/2087618421017899300)
1. [有没有一种可能，岳不群才是《笑傲江湖》里最想“救”华山派的人，而令狐冲其实是个不负责任的“败家子”？](https://www.zhihu.com/question/2010306330083229700)
1. [为什么中文里堂兄弟姐妹和表兄弟姐妹要分开称呼？](https://www.zhihu.com/question/2086786098823443200)
1. [男子8万救命钱被盗刷并称银行 1 条提醒短信都没发，银行称责任划分需司法机构裁决，银行到底该不该担责？](https://www.zhihu.com/question/2086029809914855700)
1. [既然国人嫌弃月饼高油高糖，为啥不把月饼出口到喜爱糖油混合物的美国呢？](https://www.zhihu.com/question/2084270983846875400)
1. [网红训狗师潘宏因「小宝死亡案」终审败诉，被判公开道歉并赔偿 11119 元，法律上如何解读？](https://www.zhihu.com/question/2087455975468786700)
1. [如何评价 9 月 23 日发布的Claude Opus 5.5？](https://www.zhihu.com/question/2085935290347275800)
1. [亚运会乒乓球混双决赛，王楚钦/孙颖莎 0-4 林诗栋/蒯曼，国乒包揽亚运混双金银牌，如何评价本场比赛？](https://www.zhihu.com/question/2087238239216034300)
1. [如何评价《崩坏：星穹铁道》真珠角色PV——「如何描绘一种希望」？](https://www.zhihu.com/question/2087512486530627300)
1. [集采药都很劣质吗？我能不能加钱用更好的药？](https://www.zhihu.com/question/2081150322496610600)
1. [你认为什么是「强者心态」？如何拥有「强者心态」？](https://www.zhihu.com/question/7049477560)
1. [交个朋友为「售卖的网红溜溜凳被曝用发霉木板、废旧海绵」道歉，称启动退赔，如何看待此事？](https://www.zhihu.com/question/2086797910025450200)
1. [汶颂亚运男子 200 米夺冠，成绩 19.88 秒追平谢震业亚洲纪录，如何评价他的表现？](https://www.zhihu.com/question/2087613161595564500)
1. [为什么万象棋能让玩家如此着迷？](https://www.zhihu.com/question/2087383058064339000)
1. [为什么这次名古屋亚运会，围棋象棋这些棋类项目全部都取消了？](https://www.zhihu.com/question/2086164851257078300)

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
<!-- 最后更新时间 Mon Sep 28 2026 02:31:00 GMT+0800 (China Standard Time) -->

1. [80秒回顾习近平美国之行](https://s.weibo.com//weibo?q=%2380%E7%A7%92%E5%9B%9E%E9%A1%BE%E4%B9%A0%E8%BF%91%E5%B9%B3%E7%BE%8E%E5%9B%BD%E4%B9%8B%E8%A1%8C%23&Refer=new_time)
1. [贷款中介集体删除朋友圈](https://s.weibo.com//weibo?q=%23%E8%B4%B7%E6%AC%BE%E4%B8%AD%E4%BB%8B%E9%9B%86%E4%BD%93%E5%88%A0%E9%99%A4%E6%9C%8B%E5%8F%8B%E5%9C%88%23&t=31&band_rank=1&Refer=top)
1. [兰香如故热度超过长相思](https://s.weibo.com//weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%83%AD%E5%BA%A6%E8%B6%85%E8%BF%87%E9%95%BF%E7%9B%B8%E6%80%9D%23&t=31&band_rank=2&Refer=top)
1. [中美建立推进贸易理事会等机制](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%BB%BA%E7%AB%8B%E6%8E%A8%E8%BF%9B%E8%B4%B8%E6%98%93%E7%90%86%E4%BA%8B%E4%BC%9A%E7%AD%89%E6%9C%BA%E5%88%B6%23&t=31&band_rank=3&Refer=top)
1. [电子竞技项目将退出亚运](https://s.weibo.com//weibo?q=%23%E7%94%B5%E5%AD%90%E7%AB%9E%E6%8A%80%E9%A1%B9%E7%9B%AE%E5%B0%86%E9%80%80%E5%87%BA%E4%BA%9A%E8%BF%90%23&t=31&band_rank=4&Refer=top)
1. [微微一笑很倾城AI换脸后](https://s.weibo.com//weibo?q=%23%E5%BE%AE%E5%BE%AE%E4%B8%80%E7%AC%91%E5%BE%88%E5%80%BE%E5%9F%8EAI%E6%8D%A2%E8%84%B8%E5%90%8E%23&t=31&band_rank=5&Refer=top)
1. [孙千工作室 烦心事够多了](https://s.weibo.com//weibo?q=%E5%AD%99%E5%8D%83%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E7%83%A6%E5%BF%83%E4%BA%8B%E5%A4%9F%E5%A4%9A%E4%BA%86&t=31&band_rank=6&Refer=top)
1. [王祖贤 复出](https://s.weibo.com//weibo?q=%E7%8E%8B%E7%A5%96%E8%B4%A4%20%E5%A4%8D%E5%87%BA&t=31&band_rank=7&Refer=top)
1. [刘雯 井柏然](https://s.weibo.com//weibo?q=%E5%88%98%E9%9B%AF%20%E4%BA%95%E6%9F%8F%E7%84%B6&t=31&band_rank=8&Refer=top)
1. [小米18Pro 防窥屏](https://s.weibo.com//weibo?q=%E5%B0%8F%E7%B1%B318Pro%20%E9%98%B2%E7%AA%A5%E5%B1%8F&t=31&band_rank=9&Refer=top)
1. [林诗栋说拿金牌并不意外](https://s.weibo.com//weibo?q=%E6%9E%97%E8%AF%97%E6%A0%8B%E8%AF%B4%E6%8B%BF%E9%87%91%E7%89%8C%E5%B9%B6%E4%B8%8D%E6%84%8F%E5%A4%96&t=31&band_rank=10&Refer=top)
1. [张家齐妈妈走700米打车觉得狼狈](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%B5%B0700%E7%B1%B3%E6%89%93%E8%BD%A6%E8%A7%89%E5%BE%97%E7%8B%BC%E7%8B%88%23&t=31&band_rank=11&Refer=top)
1. [混双赢了冠军都不敢笑也不敢庆祝](https://s.weibo.com//weibo?q=%23%E6%B7%B7%E5%8F%8C%E8%B5%A2%E4%BA%86%E5%86%A0%E5%86%9B%E9%83%BD%E4%B8%8D%E6%95%A2%E7%AC%91%E4%B9%9F%E4%B8%8D%E6%95%A2%E5%BA%86%E7%A5%9D%23&t=31&band_rank=12&Refer=top)
1. [刘雯腰细得和普通人大腿一样粗了](https://s.weibo.com//weibo?q=%23%E5%88%98%E9%9B%AF%E8%85%B0%E7%BB%86%E5%BE%97%E5%92%8C%E6%99%AE%E9%80%9A%E4%BA%BA%E5%A4%A7%E8%85%BF%E4%B8%80%E6%A0%B7%E7%B2%97%E4%BA%86%23&t=31&band_rank=13&Refer=top)
1. [原研药和仿制药买对了吗](https://s.weibo.com//weibo?q=%E5%8E%9F%E7%A0%94%E8%8D%AF%E5%92%8C%E4%BB%BF%E5%88%B6%E8%8D%AF%E4%B9%B0%E5%AF%B9%E4%BA%86%E5%90%97&t=31&band_rank=14&Refer=top)
1. [刘学义回复李梦](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%9B%9E%E5%A4%8D%E6%9D%8E%E6%A2%A6%23&t=31&band_rank=15&Refer=top)
1. [樊振东3比1维东斯霍特](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%941%E7%BB%B4%E4%B8%9C%E6%96%AF%E9%9C%8D%E7%89%B9%23&t=31&band_rank=16&Refer=top)
1. [陈冠希吴彦祖王祖贤被指圈钱](https://s.weibo.com//weibo?q=%E9%99%88%E5%86%A0%E5%B8%8C%E5%90%B4%E5%BD%A6%E7%A5%96%E7%8E%8B%E7%A5%96%E8%B4%A4%E8%A2%AB%E6%8C%87%E5%9C%88%E9%92%B1&t=31&band_rank=17&Refer=top)
1. [仅退款的风终于吹到了影视界](https://s.weibo.com//weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E7%9A%84%E9%A3%8E%E7%BB%88%E4%BA%8E%E5%90%B9%E5%88%B0%E4%BA%86%E5%BD%B1%E8%A7%86%E7%95%8C%23&t=31&band_rank=18&Refer=top)
1. [亚运乒乓女单仅张立成功卫冕](https://s.weibo.com//weibo?q=%E4%BA%9A%E8%BF%90%E4%B9%92%E4%B9%93%E5%A5%B3%E5%8D%95%E4%BB%85%E5%BC%A0%E7%AB%8B%E6%88%90%E5%8A%9F%E5%8D%AB%E5%86%95&t=31&band_rank=19&Refer=top)
1. [理工科大学文科是配套设施](https://s.weibo.com//weibo?q=%E7%90%86%E5%B7%A5%E7%A7%91%E5%A4%A7%E5%AD%A6%E6%96%87%E7%A7%91%E6%98%AF%E9%85%8D%E5%A5%97%E8%AE%BE%E6%96%BD&t=31&band_rank=20&Refer=top)
1. [王曼昱冠军](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%A0%E5%86%9B&t=31&band_rank=21&Refer=top)
1. [朋友圈乱回祝福被同学问号](https://s.weibo.com//weibo?q=%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B9%B1%E5%9B%9E%E7%A5%9D%E7%A6%8F%E8%A2%AB%E5%90%8C%E5%AD%A6%E9%97%AE%E5%8F%B7&t=31&band_rank=22&Refer=top)
1. [阿根廷街头著名景点是中国工商银行](https://s.weibo.com//weibo?q=%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A1%97%E5%A4%B4%E8%91%97%E5%90%8D%E6%99%AF%E7%82%B9%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C&t=31&band_rank=23&Refer=top)
1. [樊振东跟樊振东吵起来了](https://s.weibo.com//weibo?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B7%9F%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86&t=31&band_rank=24&Refer=top)
1. [黄灿灿妈妈是惊讶张家齐妈妈是很得意](https://s.weibo.com//weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%A6%88%E5%A6%88%E6%98%AF%E6%83%8A%E8%AE%B6%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E6%98%AF%E5%BE%88%E5%BE%97%E6%84%8F%23&t=31&band_rank=25&Refer=top)
1. [女性很容易慕强择偶](https://s.weibo.com//weibo?q=%E5%A5%B3%E6%80%A7%E5%BE%88%E5%AE%B9%E6%98%93%E6%85%95%E5%BC%BA%E6%8B%A9%E5%81%B6&t=31&band_rank=26&Refer=top)
1. [觉得压力大的可以看28年劳动节](https://s.weibo.com//weibo?q=%23%E8%A7%89%E5%BE%97%E5%8E%8B%E5%8A%9B%E5%A4%A7%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%9C%8B28%E5%B9%B4%E5%8A%B3%E5%8A%A8%E8%8A%82%23&t=31&band_rank=27&Refer=top)
1. [刘学义只有两部待播剧了](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%8F%AA%E6%9C%89%E4%B8%A4%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23&t=31&band_rank=28&Refer=top)
1. [吴艳妮回应死也要死在跑道上](https://s.weibo.com//weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E5%9B%9E%E5%BA%94%E6%AD%BB%E4%B9%9F%E8%A6%81%E6%AD%BB%E5%9C%A8%E8%B7%91%E9%81%93%E4%B8%8A%23&t=31&band_rank=29&Refer=top)
1. [孙颖莎回应兼3项1金2银](https://s.weibo.com//weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E5%85%BC3%E9%A1%B91%E9%87%912%E9%93%B6%23&t=31&band_rank=30&Refer=top)
1. [150万人看田曦薇素颜直播吃饭](https://s.weibo.com//weibo?q=%23150%E4%B8%87%E4%BA%BA%E7%9C%8B%E7%94%B0%E6%9B%A6%E8%96%87%E7%B4%A0%E9%A2%9C%E7%9B%B4%E6%92%AD%E5%90%83%E9%A5%AD%23&t=31&band_rank=31&Refer=top)
1. [孙千](https://s.weibo.com//weibo?q=%E5%AD%99%E5%8D%83&t=31&band_rank=32&Refer=top)
1. [你起来开一会儿吧我困得撑不住了](https://s.weibo.com//weibo?q=%23%E4%BD%A0%E8%B5%B7%E6%9D%A5%E5%BC%80%E4%B8%80%E4%BC%9A%E5%84%BF%E5%90%A7%E6%88%91%E5%9B%B0%E5%BE%97%E6%92%91%E4%B8%8D%E4%BD%8F%E4%BA%86%23&t=31&band_rank=33&Refer=top)
1. [陈瑶告别我家那闺女](https://s.weibo.com//weibo?q=%23%E9%99%88%E7%91%B6%E5%91%8A%E5%88%AB%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23&t=31&band_rank=34&Refer=top)
1. [儿子要倒插门妈妈毫不犹豫同意](https://s.weibo.com//weibo?q=%E5%84%BF%E5%AD%90%E8%A6%81%E5%80%92%E6%8F%92%E9%97%A8%E5%A6%88%E5%A6%88%E6%AF%AB%E4%B8%8D%E7%8A%B9%E8%B1%AB%E5%90%8C%E6%84%8F&t=31&band_rank=35&Refer=top)
1. [倪妮在米兰又踩井盖了](https://s.weibo.com//weibo?q=%23%E5%80%AA%E5%A6%AE%E5%9C%A8%E7%B1%B3%E5%85%B0%E5%8F%88%E8%B8%A9%E4%BA%95%E7%9B%96%E4%BA%86%23&t=31&band_rank=36&Refer=top)
1. [国足0比3新西兰](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E8%B6%B30%E6%AF%943%E6%96%B0%E8%A5%BF%E5%85%B0%23&t=31&band_rank=37&Refer=top)
1. [原来明星一顿饭只吃几口是真的](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E6%98%9F%E4%B8%80%E9%A1%BF%E9%A5%AD%E5%8F%AA%E5%90%83%E5%87%A0%E5%8F%A3%E6%98%AF%E7%9C%9F%E7%9A%84%23&t=31&band_rank=38&Refer=top)
1. [张家齐问妈妈带陈瑶能长成喜欢的样子吗](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E9%97%AE%E5%A6%88%E5%A6%88%E5%B8%A6%E9%99%88%E7%91%B6%E8%83%BD%E9%95%BF%E6%88%90%E5%96%9C%E6%AC%A2%E7%9A%84%E6%A0%B7%E5%AD%90%E5%90%97&t=31&band_rank=39&Refer=top)
1. [亚运会](https://s.weibo.com//weibo?q=%E4%BA%9A%E8%BF%90%E4%BC%9A&t=31&band_rank=40&Refer=top)
1. [国乒丢首金后夺4金](https://s.weibo.com//weibo?q=%23%E5%9B%BD%E4%B9%92%E4%B8%A2%E9%A6%96%E9%87%91%E5%90%8E%E5%A4%BA4%E9%87%91%23&t=31&band_rank=41&Refer=top)
1. [画师自曝偷偷用AI接稿](https://s.weibo.com//weibo?q=%E7%94%BB%E5%B8%88%E8%87%AA%E6%9B%9D%E5%81%B7%E5%81%B7%E7%94%A8AI%E6%8E%A5%E7%A8%BF&t=31&band_rank=42&Refer=top)
1. [难怪黄灿灿妈妈厌烦张家齐妈妈行为](https://s.weibo.com//weibo?q=%23%E9%9A%BE%E6%80%AA%E9%BB%84%E7%81%BF%E7%81%BF%E5%A6%88%E5%A6%88%E5%8E%8C%E7%83%A6%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%A1%8C%E4%B8%BA%23&t=31&band_rank=43&Refer=top)
1. [金鹰奖](https://s.weibo.com//weibo?q=%E9%87%91%E9%B9%B0%E5%A5%96&t=31&band_rank=44&Refer=top)
1. [目击者称杰克辣条无生命危险](https://s.weibo.com//weibo?q=%23%E7%9B%AE%E5%87%BB%E8%80%85%E7%A7%B0%E6%9D%B0%E5%85%8B%E8%BE%A3%E6%9D%A1%E6%97%A0%E7%94%9F%E5%91%BD%E5%8D%B1%E9%99%A9%23&t=31&band_rank=45&Refer=top)
1. [刘宇宁世赛法拉利](https://s.weibo.com//weibo?q=%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%96%E8%B5%9B%E6%B3%95%E6%8B%89%E5%88%A9&t=31&band_rank=46&Refer=top)
1. [拾荒21年男子领到42万养老金](https://s.weibo.com//weibo?q=%23%E6%8B%BE%E8%8D%9221%E5%B9%B4%E7%94%B7%E5%AD%90%E9%A2%86%E5%88%B042%E4%B8%87%E5%85%BB%E8%80%81%E9%87%91%23&t=31&band_rank=47&Refer=top)
1. [樊振东3比0格拉尔多](https://s.weibo.com//weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%940%E6%A0%BC%E6%8B%89%E5%B0%94%E5%A4%9A%23&t=31&band_rank=48&Refer=top)
1. [卢昱晓工作室 策划](https://s.weibo.com//weibo?q=%E5%8D%A2%E6%98%B1%E6%99%93%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E7%AD%96%E5%88%92&t=31&band_rank=49&Refer=top)
1. [日本五旬女子嫁给女儿同学](https://s.weibo.com//weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%94%E6%97%AC%E5%A5%B3%E5%AD%90%E5%AB%81%E7%BB%99%E5%A5%B3%E5%84%BF%E5%90%8C%E5%AD%A6%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
