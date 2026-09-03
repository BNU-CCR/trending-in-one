# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-04 02:43:08

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
<!-- 最后更新时间 Thu Sep 03 2026 22:44:01 GMT+0800 (China Standard Time) -->

1. [全球冰川50年累计损失超9万亿吨冰体](https://so.toutiao.com/search?keyword=全球冰川50年累计损失超9万亿吨冰体)
1. [人人影视APP上线](https://so.toutiao.com/search?keyword=人人影视APP上线)
1. [促进中小企业发展“十五五”规划发布](https://so.toutiao.com/search?keyword=促进中小企业发展“十五五”规划发布)
1. [河北将部分医疗服务项目纳入医保](https://so.toutiao.com/search?keyword=河北将部分医疗服务项目纳入医保)
1. [“梅姨”年龄首次曝光](https://so.toutiao.com/search?keyword=“梅姨”年龄首次曝光)
1. [52岁黄渤骑车摔倒骨折住院](https://so.toutiao.com/search?keyword=52岁黄渤骑车摔倒骨折住院)
1. [男子花250元被5位大妈按摩按到发红](https://so.toutiao.com/search?keyword=男子花250元被5位大妈按摩按到发红)
1. [广州取消校服统一订购后遇开学大考](https://so.toutiao.com/search?keyword=广州取消校服统一订购后遇开学大考)
1. [两大飓风和热带风暴罕见“共舞”](https://so.toutiao.com/search?keyword=两大飓风和热带风暴罕见“共舞”)
1. [媒体：中国房子迎来真正的分水岭](https://so.toutiao.com/search?keyword=媒体：中国房子迎来真正的分水岭)
1. [四川绵阳北川县发生4.8级地震](https://so.toutiao.com/search?keyword=四川绵阳北川县发生4.8级地震)
1. [“温州瑞安高速路口强降雨致死”不实](https://so.toutiao.com/search?keyword=“温州瑞安高速路口强降雨致死”不实)
1. [上海多家银行：办40年房贷需35岁以下](https://so.toutiao.com/search?keyword=上海多家银行：办40年房贷需35岁以下)
1. [尼泊尔泥石流遇难人数升至1259人](https://so.toutiao.com/search?keyword=尼泊尔泥石流遇难人数升至1259人)
1. [谷爱凌23岁生日跑23公里](https://so.toutiao.com/search?keyword=谷爱凌23岁生日跑23公里)
1. [伊朗导弹致大量美军死伤](https://so.toutiao.com/search?keyword=伊朗导弹致大量美军死伤)
1. [中方：中委合作不容第三方置喙](https://so.toutiao.com/search?keyword=中方：中委合作不容第三方置喙)
1. [媒体：特权思维不该进校园](https://so.toutiao.com/search?keyword=媒体：特权思维不该进校园)
1. [中国驻俄使馆就征兵类信息发布提醒](https://so.toutiao.com/search?keyword=中国驻俄使馆就征兵类信息发布提醒)
1. [女童跌落5米深沟 警消联动救援](https://so.toutiao.com/search?keyword=女童跌落5米深沟%20警消联动救援)
1. [云南2米长蟒蛇吞下15公斤山羊](https://so.toutiao.com/search?keyword=云南2米长蟒蛇吞下15公斤山羊)
1. [冰崩引发泥石流有何特殊性](https://so.toutiao.com/search?keyword=冰崩引发泥石流有何特殊性)
1. [古天乐电影公司被曝拖欠贷款](https://so.toutiao.com/search?keyword=古天乐电影公司被曝拖欠贷款)
1. [“20后”新生名字图鉴](https://so.toutiao.com/search?keyword=“20后”新生名字图鉴)
1. [解放军“战巡黄岩岛”透露哪些信号](https://so.toutiao.com/search?keyword=解放军“战巡黄岩岛”透露哪些信号)
1. [金正恩：要使朝鲜教育成为世界一流](https://so.toutiao.com/search?keyword=金正恩：要使朝鲜教育成为世界一流)
1. [老人喝下3两敌敌畏开车2小时去医院](https://so.toutiao.com/search?keyword=老人喝下3两敌敌畏开车2小时去医院)
1. [重庆机场集团反腐风暴8名高管被抓](https://so.toutiao.com/search?keyword=重庆机场集团反腐风暴8名高管被抓)
1. [加拿大在美加贸易战中硬气的原因](https://so.toutiao.com/search?keyword=加拿大在美加贸易战中硬气的原因)
1. [外交部：越南无权对西沙建设说三道四](https://so.toutiao.com/search?keyword=外交部：越南无权对西沙建设说三道四)
1. [A股变盘窗口即将临近了吗](https://so.toutiao.com/search?keyword=A股变盘窗口即将临近了吗)
1. [博主：中国男篮或基本确认世界杯席位](https://so.toutiao.com/search?keyword=博主：中国男篮或基本确认世界杯席位)
1. [档案修复师用六年“复活”抗战报纸](https://so.toutiao.com/search?keyword=档案修复师用六年“复活”抗战报纸)
1. [充值1000误到账26419933亿元](https://so.toutiao.com/search?keyword=充值1000误到账26419933亿元)
1. [日本民众：侵略历史不容否认](https://so.toutiao.com/search?keyword=日本民众：侵略历史不容否认)
1. [美方发日本投降历史图片 日右翼急了](https://so.toutiao.com/search?keyword=美方发日本投降历史图片%20日右翼急了)
1. [乌外长：俄乌和平进程有望迎来新进展](https://so.toutiao.com/search?keyword=乌外长：俄乌和平进程有望迎来新进展)
1. [探访因“亏损”关停奔驰老店](https://so.toutiao.com/search?keyword=探访因“亏损”关停奔驰老店)
1. [巴西马术比赛马匹失控 女孩化解危机](https://so.toutiao.com/search?keyword=巴西马术比赛马匹失控%20女孩化解危机)
1. [车企为什么拼命压缩造车时间](https://so.toutiao.com/search?keyword=车企为什么拼命压缩造车时间)
1. [军地联手救回突发急症的武警战士](https://so.toutiao.com/search?keyword=军地联手救回突发急症的武警战士)
1. [基金撤离黄金股](https://so.toutiao.com/search?keyword=基金撤离黄金股)
1. [郑丽文柯文哲展现蓝白力挺高虹安决心](https://so.toutiao.com/search?keyword=郑丽文柯文哲展现蓝白力挺高虹安决心)
1. [广告法“最”字第一案当事店老板离世](https://so.toutiao.com/search?keyword=广告法“最”字第一案当事店老板离世)
1. [埃尔多安：土耳其将考虑加入上合组织](https://so.toutiao.com/search?keyword=埃尔多安：土耳其将考虑加入上合组织)
1. [渔民禁渔期出海被罚 曾救起落水男子](https://so.toutiao.com/search?keyword=渔民禁渔期出海被罚%20曾救起落水男子)
1. [英媒：中国抵御油价冲击策略行之有效](https://so.toutiao.com/search?keyword=英媒：中国抵御油价冲击策略行之有效)
1. [甘肃一银行工作时间柜台无人办业务](https://so.toutiao.com/search?keyword=甘肃一银行工作时间柜台无人办业务)
1. [媒体人：猜牛市终点不如找长期饭票](https://so.toutiao.com/search?keyword=媒体人：猜牛市终点不如找长期饭票)
1. [跟着作者海飞一起追《醒来》大结局](https://so.toutiao.com/search?keyword=跟着作者海飞一起追《醒来》大结局)
1. [博主870万拍下离海30米的房子](https://so.toutiao.com/search?keyword=博主870万拍下离海30米的房子)
1. [我国物流网建设不断按下“加速键”](https://so.toutiao.com/search?keyword=我国物流网建设不断按下“加速键”)
1. [山东一小学多名学生转校区后头晕流鼻血](https://so.toutiao.com/search?keyword=山东一小学多名学生转校区后头晕流鼻血)
1. [旺旺员工曝光集团家族文化](https://so.toutiao.com/search?keyword=旺旺员工曝光集团家族文化)
1. [海口一餐厅发生火灾6人遇难](https://so.toutiao.com/search?keyword=海口一餐厅发生火灾6人遇难)
1. [2名小学生发现有人摔倒脱臼主动帮忙](https://so.toutiao.com/search?keyword=2名小学生发现有人摔倒脱臼主动帮忙)
1. [莆田停工停产停课休市](https://so.toutiao.com/search?keyword=莆田停工停产停课休市)
1. [教授夫妇21楼坠下床上摆180万？谣言](https://so.toutiao.com/search?keyword=教授夫妇21楼坠下床上摆180万？谣言)
1. [当兵后儿子脱胎换骨妈妈满眼欣慰](https://so.toutiao.com/search?keyword=当兵后儿子脱胎换骨妈妈满眼欣慰)
1. [群众争相投喂送别抗洪子弟兵](https://so.toutiao.com/search?keyword=群众争相投喂送别抗洪子弟兵)
1. [广州一高校官宣中秋国庆连放13天假](https://so.toutiao.com/search?keyword=广州一高校官宣中秋国庆连放13天假)
1. [男子海边落水漂到航道上 海警救援](https://so.toutiao.com/search?keyword=男子海边落水漂到航道上%20海警救援)
1. [“厄尔尼诺交易”走到哪一步了](https://so.toutiao.com/search?keyword=“厄尔尼诺交易”走到哪一步了)
1. [iPhone Ultra被嘲终极身份象征](https://so.toutiao.com/search?keyword=iPhone%20Ultra被嘲终极身份象征)
1. [霍启刚等人发文悼念刘兆铭](https://so.toutiao.com/search?keyword=霍启刚等人发文悼念刘兆铭)
1. [监控记录下福建福安洪峰来袭过程](https://so.toutiao.com/search?keyword=监控记录下福建福安洪峰来袭过程)
1. [日本妄想用新型导弹威胁中国内陆](https://so.toutiao.com/search?keyword=日本妄想用新型导弹威胁中国内陆)
1. [中国女篮队长陈玉婕是00后](https://so.toutiao.com/search?keyword=中国女篮队长陈玉婕是00后)
1. [高盛警告未来一年股市回报率将下降](https://so.toutiao.com/search?keyword=高盛警告未来一年股市回报率将下降)
1. [读懂血常规 看懂血液发出的身体信号](https://so.toutiao.com/search?keyword=读懂血常规%20看懂血液发出的身体信号)
1. [教职工用课桌搭桥转移因暴雨被困学生](https://so.toutiao.com/search?keyword=教职工用课桌搭桥转移因暴雨被困学生)
1. [16岁高中女生握力超强令人惊叹](https://so.toutiao.com/search?keyword=16岁高中女生握力超强令人惊叹)
1. [济南“泉水游”热度不减](https://so.toutiao.com/search?keyword=济南“泉水游”热度不减)
1. [官方回应小学新校区被指气味刺鼻](https://so.toutiao.com/search?keyword=官方回应小学新校区被指气味刺鼻)
1. [如何看待乌宣称“实际关闭俄领空”](https://so.toutiao.com/search?keyword=如何看待乌宣称“实际关闭俄领空”)
1. [乌克兰两部门当街交火的原因是什么](https://so.toutiao.com/search?keyword=乌克兰两部门当街交火的原因是什么)
1. [奇瑞尹同跃：全固态电池2027上车验证](https://so.toutiao.com/search?keyword=奇瑞尹同跃：全固态电池2027上车验证)
1. [小米卢伟冰将直播逛IFA](https://so.toutiao.com/search?keyword=小米卢伟冰将直播逛IFA)
1. [外交部：敦促日本当政者倾听国内声音](https://so.toutiao.com/search?keyword=外交部：敦促日本当政者倾听国内声音)
1. [福建突发山洪冲垮三层民房](https://so.toutiao.com/search?keyword=福建突发山洪冲垮三层民房)
1. [今日涨跌停股分析：46只涨停股](https://so.toutiao.com/search?keyword=今日涨跌停股分析：46只涨停股)
1. [男子在趵突泉坐护栏拍照意外落水](https://so.toutiao.com/search?keyword=男子在趵突泉坐护栏拍照意外落水)
1. [夫妻因山体滑坡被困后获救](https://so.toutiao.com/search?keyword=夫妻因山体滑坡被困后获救)
1. [乌两大情报部门发生交火？博主解读](https://so.toutiao.com/search?keyword=乌两大情报部门发生交火？博主解读)
1. [藏马熊一路狂追男子至饭店](https://so.toutiao.com/search?keyword=藏马熊一路狂追男子至饭店)
1. [俄机器人遭推搡后腾空飞踢顾客](https://so.toutiao.com/search?keyword=俄机器人遭推搡后腾空飞踢顾客)
1. [江苏淮安警方征集多人涉黑犯罪线索](https://so.toutiao.com/search?keyword=江苏淮安警方征集多人涉黑犯罪线索)
1. [美海军将领回应是否会奉命攻击加拿大](https://so.toutiao.com/search?keyword=美海军将领回应是否会奉命攻击加拿大)
1. [贵州省公安厅厅长已任省政府党组成员](https://so.toutiao.com/search?keyword=贵州省公安厅厅长已任省政府党组成员)
1. [4万名志愿者将参与名古屋亚运会](https://so.toutiao.com/search?keyword=4万名志愿者将参与名古屋亚运会)
1. [评论员：家长群晒公职刺眼又扎心](https://so.toutiao.com/search?keyword=评论员：家长群晒公职刺眼又扎心)
1. [中国交通基建再按“快进键”](https://so.toutiao.com/search?keyword=中国交通基建再按“快进键”)
1. [男子喝下3两敌敌畏开车2小时去医院](https://so.toutiao.com/search?keyword=男子喝下3两敌敌畏开车2小时去医院)
1. [央视网曝光职校实习黑产](https://so.toutiao.com/search?keyword=央视网曝光职校实习黑产)
1. [绍兴“葫芦娃爷爷”是失独老人](https://so.toutiao.com/search?keyword=绍兴“葫芦娃爷爷”是失独老人)
1. [台风“沙德尔”主要影响今明两天](https://so.toutiao.com/search?keyword=台风“沙德尔”主要影响今明两天)
1. [印度民众捕食巨型鱼尸体](https://so.toutiao.com/search?keyword=印度民众捕食巨型鱼尸体)
1. [媒体：有一种底气叫送到统一为止](https://so.toutiao.com/search?keyword=媒体：有一种底气叫送到统一为止)
1. [“常来祖宗海更能体会飞行意义”](https://so.toutiao.com/search?keyword=“常来祖宗海更能体会飞行意义”)
1. [何超琼给亲爹工作也要谈薪资](https://so.toutiao.com/search?keyword=何超琼给亲爹工作也要谈薪资)
1. [男子杀害情人丈夫后潜逃50年落网](https://so.toutiao.com/search?keyword=男子杀害情人丈夫后潜逃50年落网)
1. [车辆翻车起火 总裁破窗救人](https://so.toutiao.com/search?keyword=车辆翻车起火%20总裁破窗救人)
1. [父母离婚女孩被爸爸拉黑没钱交学费](https://so.toutiao.com/search?keyword=父母离婚女孩被爸爸拉黑没钱交学费)
1. [加拿大一水库现“幽灵”浮岛](https://so.toutiao.com/search?keyword=加拿大一水库现“幽灵”浮岛)
1. [李月汝护照遗失缺席世界杯](https://so.toutiao.com/search?keyword=李月汝护照遗失缺席世界杯)
1. [普京：德国犯了严重的错误](https://so.toutiao.com/search?keyword=普京：德国犯了严重的错误)
1. [香港学生在世界大赛夺冠后高唱国歌](https://so.toutiao.com/search?keyword=香港学生在世界大赛夺冠后高唱国歌)
1. [福建多地停工停产停课休市](https://so.toutiao.com/search?keyword=福建多地停工停产停课休市)
1. [从三起案件看深化扫黑除恶专项斗争](https://so.toutiao.com/search?keyword=从三起案件看深化扫黑除恶专项斗争)
1. [《醒来》大结局有何看点](https://so.toutiao.com/search?keyword=《醒来》大结局有何看点)
1. [丈夫与公公同一天去世 儿媳撑起小家](https://so.toutiao.com/search?keyword=丈夫与公公同一天去世%20儿媳撑起小家)
1. [吉隆口岸人心相依守望相助](https://so.toutiao.com/search?keyword=吉隆口岸人心相依守望相助)
1. [中国全额缴纳2026年联合国会费](https://so.toutiao.com/search?keyword=中国全额缴纳2026年联合国会费)
1. [温州老板积水中直播卖鞋：全场29.9](https://so.toutiao.com/search?keyword=温州老板积水中直播卖鞋：全场29.9)
1. [英伟达70%收入指引来自何方](https://so.toutiao.com/search?keyword=英伟达70%收入指引来自何方)
1. [服役空军11年哥哥接陆军退役妹妹回家](https://so.toutiao.com/search?keyword=服役空军11年哥哥接陆军退役妹妹回家)
1. [医保支付如何引导患者优先到基层就医](https://so.toutiao.com/search?keyword=医保支付如何引导患者优先到基层就医)
1. [8月全球资产大洗牌](https://so.toutiao.com/search?keyword=8月全球资产大洗牌)
1. [福建莆田市委副书记郭宋玉拟任新职](https://so.toutiao.com/search?keyword=福建莆田市委副书记郭宋玉拟任新职)
1. [媒体：规则是最好的“校服设计师”](https://so.toutiao.com/search?keyword=媒体：规则是最好的“校服设计师”)
1. [“沙德尔”致多地强降雨现场](https://so.toutiao.com/search?keyword=“沙德尔”致多地强降雨现场)
1. [广西横州养蛇厂家：养蛇是为了救人](https://so.toutiao.com/search?keyword=广西横州养蛇厂家：养蛇是为了救人)
1. [荷兰央行将86吨黄金储备转移至伦敦](https://so.toutiao.com/search?keyword=荷兰央行将86吨黄金储备转移至伦敦)
1. [马杜罗要求美方撤销指控](https://so.toutiao.com/search?keyword=马杜罗要求美方撤销指控)
1. [尼泊尔泥石流已致1222人遇难](https://so.toutiao.com/search?keyword=尼泊尔泥石流已致1222人遇难)
1. [体育总局：将深化体育饭圈乱象整治](https://so.toutiao.com/search?keyword=体育总局：将深化体育饭圈乱象整治)
1. [委代总统称将在准备就绪后举行选举](https://so.toutiao.com/search?keyword=委代总统称将在准备就绪后举行选举)
1. [浙江暴雨致鞋厂被冲 满大街都是鞋](https://so.toutiao.com/search?keyword=浙江暴雨致鞋厂被冲%20满大街都是鞋)
1. [孙千穿平底鞋走红毯](https://so.toutiao.com/search?keyword=孙千穿平底鞋走红毯)
1. [中国女篮世界杯身陷“死亡之组”](https://so.toutiao.com/search?keyword=中国女篮世界杯身陷“死亡之组”)
1. [退伍季火车站出站口挤满家人](https://so.toutiao.com/search?keyword=退伍季火车站出站口挤满家人)
1. [店老板用车膜给儿子新课本包书皮](https://so.toutiao.com/search?keyword=店老板用车膜给儿子新课本包书皮)
1. [亚马尔携女友出席颁奖礼](https://so.toutiao.com/search?keyword=亚马尔携女友出席颁奖礼)
1. [福建龙岩市委常委黄立峰拟任新职](https://so.toutiao.com/search?keyword=福建龙岩市委常委黄立峰拟任新职)
1. [乌克兰两部门在基辅交火](https://so.toutiao.com/search?keyword=乌克兰两部门在基辅交火)
1. [开学季，这份安全手册请查收](https://so.toutiao.com/search?keyword=开学季，这份安全手册请查收)
1. [家长班级群自报干部身份让关照孩子](https://so.toutiao.com/search?keyword=家长班级群自报干部身份让关照孩子)
1. [鱼塘成食堂 老板出3万征集驱鸟点子](https://so.toutiao.com/search?keyword=鱼塘成食堂%20老板出3万征集驱鸟点子)
1. [专家解读初一新生5000多人96个班](https://so.toutiao.com/search?keyword=专家解读初一新生5000多人96个班)
1. [国台办回应郑丽文向西藏灾区捐款](https://so.toutiao.com/search?keyword=国台办回应郑丽文向西藏灾区捐款)
1. [“沙德尔”在福建漳州第三次登陆](https://so.toutiao.com/search?keyword=“沙德尔”在福建漳州第三次登陆)
1. [《倩女幽魂》“姥姥”刘兆铭去世](https://so.toutiao.com/search?keyword=《倩女幽魂》“姥姥”刘兆铭去世)
1. [张雪晒97岁李锦记掌门人喝可乐](https://so.toutiao.com/search?keyword=张雪晒97岁李锦记掌门人喝可乐)
1. [“温州瑞安高速强降雨致人员死亡”不实](https://so.toutiao.com/search?keyword=“温州瑞安高速强降雨致人员死亡”不实)
1. [95后特警抡锤猛砸护栏泄洪](https://so.toutiao.com/search?keyword=95后特警抡锤猛砸护栏泄洪)
1. [吉隆泥石流灾害发现遗物847件](https://so.toutiao.com/search?keyword=吉隆泥石流灾害发现遗物847件)
1. [普京谈俄乌冲突：欢迎任何形式的谈判](https://so.toutiao.com/search?keyword=普京谈俄乌冲突：欢迎任何形式的谈判)
1. [快船队被罚款3000万美元](https://so.toutiao.com/search?keyword=快船队被罚款3000万美元)
1. [1分钟重温2025九三盛大阅兵](https://so.toutiao.com/search?keyword=1分钟重温2025九三盛大阅兵)
1. [这一轮手机涨价的背后逻辑](https://so.toutiao.com/search?keyword=这一轮手机涨价的背后逻辑)
1. [女子喝冰冻可乐瞬间满嘴血](https://so.toutiao.com/search?keyword=女子喝冰冻可乐瞬间满嘴血)
1. [吃鸡蛋真正要防的是什么](https://so.toutiao.com/search?keyword=吃鸡蛋真正要防的是什么)
1. [菲律宾巨蟒在洪水中挨家挨户“串门”](https://so.toutiao.com/search?keyword=菲律宾巨蟒在洪水中挨家挨户“串门”)
1. [台风沙德尔急转弯严重影响浙闽粤](https://so.toutiao.com/search?keyword=台风沙德尔急转弯严重影响浙闽粤)
1. [俄罗斯人拿人民币在黑河夜市疯狂扫货](https://so.toutiao.com/search?keyword=俄罗斯人拿人民币在黑河夜市疯狂扫货)
1. [快船违规被罚5个首轮签+3000万美元](https://so.toutiao.com/search?keyword=快船违规被罚5个首轮签+3000万美元)
1. [西藏银行行长容国梁因援藏期满辞职](https://so.toutiao.com/search?keyword=西藏银行行长容国梁因援藏期满辞职)
1. [陈法蓉发文悼念刘兆铭](https://so.toutiao.com/search?keyword=陈法蓉发文悼念刘兆铭)
1. [以色列的战争经济学](https://so.toutiao.com/search?keyword=以色列的战争经济学)
1. [美威胁再袭伊朗 伊称将摧毁敌方根基](https://so.toutiao.com/search?keyword=美威胁再袭伊朗%20伊称将摧毁敌方根基)
1. [黄之锋当庭认罪](https://so.toutiao.com/search?keyword=黄之锋当庭认罪)
1. [Snowflake美股盘后大涨22%](https://so.toutiao.com/search?keyword=Snowflake美股盘后大涨22%)
1. [德媒：中国最重要资源是人口智力潜能](https://so.toutiao.com/search?keyword=德媒：中国最重要资源是人口智力潜能)
1. [媒体：家长群禁言家长换不来家校共识](https://so.toutiao.com/search?keyword=媒体：家长群禁言家长换不来家校共识)
1. [林心如现身九寨沟](https://so.toutiao.com/search?keyword=林心如现身九寨沟)
1. [单眼皮突然变双眼皮可能是衰老信号](https://so.toutiao.com/search?keyword=单眼皮突然变双眼皮可能是衰老信号)
1. [媒体：地方税的最大税种来了](https://so.toutiao.com/search?keyword=媒体：地方税的最大税种来了)
1. [印5名特种兵从直升机跳入河中2人失踪](https://so.toutiao.com/search?keyword=印5名特种兵从直升机跳入河中2人失踪)
1. [曝国王已特别关注杜伦](https://so.toutiao.com/search?keyword=曝国王已特别关注杜伦)
1. [博主：日本正在为高市的强硬买单](https://so.toutiao.com/search?keyword=博主：日本正在为高市的强硬买单)
1. [山羊被蟒蛇缠住拖进水中后死亡](https://so.toutiao.com/search?keyword=山羊被蟒蛇缠住拖进水中后死亡)
1. [女生接男友退伍反被惊喜求婚](https://so.toutiao.com/search?keyword=女生接男友退伍反被惊喜求婚)
1. [全国小学初中已全部替换新教材](https://so.toutiao.com/search?keyword=全国小学初中已全部替换新教材)
1. [安世半导体在华21亿资产被冻结](https://so.toutiao.com/search?keyword=安世半导体在华21亿资产被冻结)
1. [“梅姨”被提起公诉](https://so.toutiao.com/search?keyword=“梅姨”被提起公诉)
1. [房企备战“现售制”](https://so.toutiao.com/search?keyword=房企备战“现售制”)
1. [山西发生重大刑案警方悬赏捉拿光头男](https://so.toutiao.com/search?keyword=山西发生重大刑案警方悬赏捉拿光头男)
1. [吉隆泥石流致21人遇难541人失联](https://so.toutiao.com/search?keyword=吉隆泥石流致21人遇难541人失联)
1. [吉隆口岸泥石流堆积物最高达16米](https://so.toutiao.com/search?keyword=吉隆口岸泥石流堆积物最高达16米)
1. [高圆圆：最好我先走赵又廷收拾后续](https://so.toutiao.com/search?keyword=高圆圆：最好我先走赵又廷收拾后续)
1. [每天一勺蛋白粉能提高免疫力吗](https://so.toutiao.com/search?keyword=每天一勺蛋白粉能提高免疫力吗)
1. [美财长为何怒骂高市早苗经济政策](https://so.toutiao.com/search?keyword=美财长为何怒骂高市早苗经济政策)
1. [媒体：皇马请使用“中国西藏”](https://so.toutiao.com/search?keyword=媒体：皇马请使用“中国西藏”)
1. [苏州等多地初中出现超大校额](https://so.toutiao.com/search?keyword=苏州等多地初中出现超大校额)
1. [郭德纲9月份线下演出延期或取消](https://so.toutiao.com/search?keyword=郭德纲9月份线下演出延期或取消)
1. [32岁美国银行副总裁时代广场被刺身亡](https://so.toutiao.com/search?keyword=32岁美国银行副总裁时代广场被刺身亡)
1. [业内：大A正从互联网大厂偷偷挖公关](https://so.toutiao.com/search?keyword=业内：大A正从互联网大厂偷偷挖公关)
1. [开学第一天33名家长被骗9108元](https://so.toutiao.com/search?keyword=开学第一天33名家长被骗9108元)
1. [9月3日是中国人民抗日战争胜利纪念日](https://so.toutiao.com/search?keyword=9月3日是中国人民抗日战争胜利纪念日)
1. [市民打119后上传火警视频遇开屏广告](https://so.toutiao.com/search?keyword=市民打119后上传火警视频遇开屏广告)
1. [章泽天新一期播客专访何超琼](https://so.toutiao.com/search?keyword=章泽天新一期播客专访何超琼)
1. [深圳校服为何让全网感叹真香](https://so.toutiao.com/search?keyword=深圳校服为何让全网感叹真香)
1. [朱婷回应有没有关注中国女排亚锦赛](https://so.toutiao.com/search?keyword=朱婷回应有没有关注中国女排亚锦赛)
1. [伊朗：4名士兵在美军袭击中死亡](https://so.toutiao.com/search?keyword=伊朗：4名士兵在美军袭击中死亡)
1. [爸爸牺牲妈妈瞒10年儿子考上军校](https://so.toutiao.com/search?keyword=爸爸牺牲妈妈瞒10年儿子考上军校)
1. [企业单休不违法？律师解读](https://so.toutiao.com/search?keyword=企业单休不违法？律师解读)
1. [220斤男子患糖尿病16年致肾衰竭](https://so.toutiao.com/search?keyword=220斤男子患糖尿病16年致肾衰竭)
1. [妈妈火车站为服役12年儿子找姻缘](https://so.toutiao.com/search?keyword=妈妈火车站为服役12年儿子找姻缘)
1. [中方对G20会议未发表公报深表遗憾](https://so.toutiao.com/search?keyword=中方对G20会议未发表公报深表遗憾)
1. [爸妈没交接好导致宝宝被扔地上](https://so.toutiao.com/search?keyword=爸妈没交接好导致宝宝被扔地上)
1. [青岛红岛渔港鲜货持续热销](https://so.toutiao.com/search?keyword=青岛红岛渔港鲜货持续热销)
1. [父亲叮嘱上大学的女儿多交朋友](https://so.toutiao.com/search?keyword=父亲叮嘱上大学的女儿多交朋友)
1. [比亚迪正在把规模变成复利](https://so.toutiao.com/search?keyword=比亚迪正在把规模变成复利)
1. [专家：抓住HPV疫苗接种“黄金窗口”](https://so.toutiao.com/search?keyword=专家：抓住HPV疫苗接种“黄金窗口”)
1. [日本的经济命脉被高市亲手掐断了吗](https://so.toutiao.com/search?keyword=日本的经济命脉被高市亲手掐断了吗)
1. [专家批所谓“打击三峡大坝”言论](https://so.toutiao.com/search?keyword=专家批所谓“打击三峡大坝”言论)
1. [学者：美财长利用G20绑架中美矛盾](https://so.toutiao.com/search?keyword=学者：美财长利用G20绑架中美矛盾)
1. [这几类蔬菜吃前要处理好](https://so.toutiao.com/search?keyword=这几类蔬菜吃前要处理好)
1. [媒体：中长期看A股市场韧性不改](https://so.toutiao.com/search?keyword=媒体：中长期看A股市场韧性不改)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Fri Sep 04 2026 00:22:56 GMT+0800 (China Standard Time) -->

1. [四川绵阳发生 4.8 级地震](https://www.zhihu.com/search?q=%E5%9B%9B%E5%B7%9D%E7%BB%B5%E9%98%B3%E5%8F%91%E7%94%9F%204.8%20%E7%BA%A7%E5%9C%B0%E9%9C%87)
1. [充值1000误到账26419933亿元](https://www.zhihu.com/search?q=%E5%85%85%E5%80%BC1000%E8%AF%AF%E5%88%B0%E8%B4%A626419933%E4%BA%BF%E5%85%83)
1. [ChatGPT等AI服务集体故障](https://www.zhihu.com/search?q=ChatGPT%E7%AD%89AI%E6%9C%8D%E5%8A%A1%E9%9B%86%E4%BD%93%E6%95%85%E9%9A%9C)
1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [武大通报教授被举报事件](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A4%A7%E9%80%9A%E6%8A%A5%E6%95%99%E6%8E%88%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%BA%8B%E4%BB%B6)
1. [曝科大讯飞公关副总裁被解除职务](https://www.zhihu.com/search?q=%E6%9B%9D%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E5%85%AC%E5%85%B3%E5%89%AF%E6%80%BB%E8%A3%81%E8%A2%AB%E8%A7%A3%E9%99%A4%E8%81%8C%E5%8A%A1)
1. [星宇股份裁应届生疑被告到欧盟](https://www.zhihu.com/search?q=%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%A3%81%E5%BA%94%E5%B1%8A%E7%94%9F%E7%96%91%E8%A2%AB%E5%91%8A%E5%88%B0%E6%AC%A7%E7%9B%9F)
1. [星宇股份董事长就劝退应届生再道歉](https://www.zhihu.com/search?q=%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%91%A3%E4%BA%8B%E9%95%BF%E5%B0%B1%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F%E5%86%8D%E9%81%93%E6%AD%89)
1. [全球股市大反转](https://www.zhihu.com/search?q=%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E5%A4%A7%E5%8F%8D%E8%BD%AC)
1. [新版《国防动员法》10 月 1 日实施](https://www.zhihu.com/search?q=%E6%96%B0%E7%89%88%E3%80%8A%E5%9B%BD%E9%98%B2%E5%8A%A8%E5%91%98%E6%B3%95%E3%80%8B10%20%E6%9C%88%201%20%E6%97%A5%E5%AE%9E%E6%96%BD)
1. [Gemini 3.8 Flash 发布](https://www.zhihu.com/search?q=Gemini%203.8%20Flash%20%E5%8F%91%E5%B8%83)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Fri Sep 04 2026 02:43:08 GMT+0800 (China Standard Time) -->

1. [男子充值 1000 元账户误到账 26419933 亿，疯狂消费后拒不退还，该男子需要承担法律责任吗？](https://www.zhihu.com/question/2078795422894658300)
1. [张继科乒乓球班录取率低于 5%，比 985 还难进，还实行集训末位淘汰45%的机制，怎样看待这种方式？](https://www.zhihu.com/question/2078490276004377300)
1. [9月3日晚ChatGPT、Grok、Claude、Cursor 集体突发故障，怎么回事？带来哪些影响？](https://www.zhihu.com/question/2078984478073136400)
1. [为什么《欢迎来龙餐馆》在上映之前专业机构预测票房能过 50 亿，但现在连 20 亿都困难？](https://www.zhihu.com/question/2076943722588157000)
1. [为什么大家造车都去抄保时捷，没有抄兰博基尼的？](https://www.zhihu.com/question/2077456156444963800)
1. [上海多家银行明确，1991 年以前出生的人不能新办理 40 年期个人房贷，如何看待这一标准？](https://www.zhihu.com/question/2078861981591905300)
1. [从小沉迷游戏的父亲不给10岁女儿买NS2，被一句「你当年还不是打游戏」怼到沉默，你怎么看？](https://www.zhihu.com/question/2077910656204927700)
1. [爸爸肺癌晚期，老公答应卖房去美国治疗了，但他现在反悔了怎么办？](https://www.zhihu.com/question/542192203)
1. [你觉得中国女篮李月汝「护照遗失」的理由成立吗，因公护照和个人护照补办的流程差在哪里，真的完全来不及吗？](https://www.zhihu.com/question/2078792215732512300)
1. [越南被中国统治上千年为什么语言没有被同化为汉语族？](https://www.zhihu.com/question/1905626878913548800)
1. [上海交大内部 PPT 曝光高校AI教育困局，课程迭代远落后技术发展，学生反超老师成常态，该怎样破解？](https://www.zhihu.com/question/2078852068052137200)
1. [如何看待李飞飞团队发布的多模态世界模型 Atlas？有哪些值得关注的亮点？](https://www.zhihu.com/question/2078435061808850000)
1. [家长自报干部身份，希望老师多关照孩子，保定纪检组介入调查，反映了哪些问题？家长会受到处罚吗？](https://www.zhihu.com/question/2078756520523719400)
1. [如何评价剧版《哈利波特》新预告？](https://www.zhihu.com/question/2078776438505976000)
1. [香港中文大学（深圳）校长呼吁新生「不要看不起高考成绩不如自己的同学」，如何看待本科生对高考分数的执着？](https://www.zhihu.com/question/2078500603819566000)
1. [香港演员刘兆铭去世，曾在《倩女幽魂》中饰演树妖姥姥，他在影坛留下了哪些经典作品？你对他有哪些记忆？](https://www.zhihu.com/question/2078679838966151200)
1. [四川绵阳北川县附近发生 4.8 级地震，震源深度 10 千米，目前情况如何？你那边有震感吗？](https://www.zhihu.com/question/2078932044482967000)
1. [美国「林肯」号航母锈迹斑斑、内部环境差，这反映出美军哪些深层问题？](https://www.zhihu.com/question/2078771357740024800)
1. [人贩子梅姨被提起「公诉」，案件进入审判阶段，法律能给出什么样的答案？](https://www.zhihu.com/question/2078579197023183600)
1. [特斯拉的 CyberCab 一旦全世界大范围铺开，对中国的新能源汽车产业是否会带来毁灭性打击？](https://www.zhihu.com/question/2078386985408976600)
1. [重庆多位家长在新生群被骗648元「班费」，收款方竟显示为米哈游，为啥会和米哈游有关？怎样识破此类骗局？](https://www.zhihu.com/question/2078648816325207000)
1. [苹果发布会定档北京时间 9 月 10 日，首款折叠屏 iPhone 将亮相，有哪些信息值得特别关注？](https://www.zhihu.com/question/2076211010684327200)
1. [如何看待问赛力斯8月新能源车销量同比「下降43.96%」？侧面反映出哪些问题？哪些重点信息值得关注？](https://www.zhihu.com/question/2078235999046582500)
1. [网传部分家长因老师「不婚主义」而向学校投诉，校方要求老师好好道歉，具体情况如何？这算是过度干预吗？](https://www.zhihu.com/question/2078491108670175000)
1. [最近内存、存储甚至显卡涨价，一个个都说自己要当等等党，难不成你要等到2040年么？](https://www.zhihu.com/question/2078521113076830500)
1. [如何评价《绝命毒师》中的杰西？](https://www.zhihu.com/question/28742409)
1. [为什么会有“珠心算部队”？](https://www.zhihu.com/question/657264625)
1. [新能源汽车一旦普及了，汽油价格会回到三两元的时代吗？](https://www.zhihu.com/question/1930083195828831700)
1. [50亿年后太阳熄灭变成白矮星，人类何去何从，困死地球太阳系吗?](https://www.zhihu.com/question/1891434098192516400)
1. [搜狗输入法宣布重做，上线全新 AI 服务与更清爽键盘，如何评价这次升级？](https://www.zhihu.com/question/2077916947673629200)

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
<!-- 最后更新时间 Fri Sep 04 2026 02:46:04 GMT+0800 (China Standard Time) -->

1. [习近平再谈上合初心](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%86%8D%E8%B0%88%E4%B8%8A%E5%90%88%E5%88%9D%E5%BF%83%23&Refer=new_time)
1. [人人影视变正版了](https://s.weibo.com//weibo?q=%23%E4%BA%BA%E4%BA%BA%E5%BD%B1%E8%A7%86%E5%8F%98%E6%AD%A3%E7%89%88%E4%BA%86%23&t=31&band_rank=1&Refer=top)
1. [长生 退役](https://s.weibo.com//weibo?q=%E9%95%BF%E7%94%9F%20%E9%80%80%E5%BD%B9&t=31&band_rank=2&Refer=top)
1. [中埃两大文明双向奔赴](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9F%83%E4%B8%A4%E5%A4%A7%E6%96%87%E6%98%8E%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23&t=31&band_rank=3&Refer=top)
1. [宁静内涵花少2有人干涉剪辑](https://s.weibo.com//weibo?q=%23%E5%AE%81%E9%9D%99%E5%86%85%E6%B6%B5%E8%8A%B1%E5%B0%912%E6%9C%89%E4%BA%BA%E5%B9%B2%E6%B6%89%E5%89%AA%E8%BE%91%23&t=31&band_rank=4&Refer=top)
1. [普通人没必要追求电子产品顶配](https://s.weibo.com//weibo?q=%E6%99%AE%E9%80%9A%E4%BA%BA%E6%B2%A1%E5%BF%85%E8%A6%81%E8%BF%BD%E6%B1%82%E7%94%B5%E5%AD%90%E4%BA%A7%E5%93%81%E9%A1%B6%E9%85%8D&t=31&band_rank=5&Refer=top)
1. [没有人会教你真正核心的东西](https://s.weibo.com//weibo?q=%E6%B2%A1%E6%9C%89%E4%BA%BA%E4%BC%9A%E6%95%99%E4%BD%A0%E7%9C%9F%E6%AD%A3%E6%A0%B8%E5%BF%83%E7%9A%84%E4%B8%9C%E8%A5%BF&t=31&band_rank=6&Refer=top)
1. [人总是下意识地忽略自己的珍贵](https://s.weibo.com//weibo?q=%E4%BA%BA%E6%80%BB%E6%98%AF%E4%B8%8B%E6%84%8F%E8%AF%86%E5%9C%B0%E5%BF%BD%E7%95%A5%E8%87%AA%E5%B7%B1%E7%9A%84%E7%8F%8D%E8%B4%B5&t=31&band_rank=7&Refer=top)
1. [一年级 陈学冬综艺](https://s.weibo.com//weibo?q=%E4%B8%80%E5%B9%B4%E7%BA%A7%20%E9%99%88%E5%AD%A6%E5%86%AC%E7%BB%BC%E8%89%BA&t=31&band_rank=8&Refer=top)
1. [妈妈害怕葡萄藏虫子直接煮熟](https://s.weibo.com//weibo?q=%23%E5%A6%88%E5%A6%88%E5%AE%B3%E6%80%95%E8%91%A1%E8%90%84%E8%97%8F%E8%99%AB%E5%AD%90%E7%9B%B4%E6%8E%A5%E7%85%AE%E7%86%9F%23&t=31&band_rank=9&Refer=top)
1. [微信 液态玻璃](https://s.weibo.com//weibo?q=%E5%BE%AE%E4%BF%A1%20%E6%B6%B2%E6%80%81%E7%8E%BB%E7%92%83&t=31&band_rank=10&Refer=top)
1. [美国癌症治疗](https://s.weibo.com//weibo?q=%E7%BE%8E%E5%9B%BD%E7%99%8C%E7%97%87%E6%B2%BB%E7%96%97&t=31&band_rank=11&Refer=top)
1. [专家谈胚胎案重婚罪未成立](https://s.weibo.com//weibo?q=%23%E4%B8%93%E5%AE%B6%E8%B0%88%E8%83%9A%E8%83%8E%E6%A1%88%E9%87%8D%E5%A9%9A%E7%BD%AA%E6%9C%AA%E6%88%90%E7%AB%8B%23&t=31&band_rank=12&Refer=top)
1. [山东一产妇剖宫产身亡](https://s.weibo.com//weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%80%E4%BA%A7%E5%A6%87%E5%89%96%E5%AE%AB%E4%BA%A7%E8%BA%AB%E4%BA%A1%23&t=31&band_rank=13&Refer=top)
1. [王者荣耀985高校认证闲鱼卖上千元](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80985%E9%AB%98%E6%A0%A1%E8%AE%A4%E8%AF%81%E9%97%B2%E9%B1%BC%E5%8D%96%E4%B8%8A%E5%8D%83%E5%85%83%23&t=31&band_rank=14&Refer=top)
1. [许家印律师欲提120万港元被拒](https://s.weibo.com//weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E5%BE%8B%E5%B8%88%E6%AC%B2%E6%8F%90120%E4%B8%87%E6%B8%AF%E5%85%83%E8%A2%AB%E6%8B%92%23&t=31&band_rank=15&Refer=top)
1. [美网女单第二轮](https://s.weibo.com//weibo?q=%E7%BE%8E%E7%BD%91%E5%A5%B3%E5%8D%95%E7%AC%AC%E4%BA%8C%E8%BD%AE&t=31&band_rank=16&Refer=top)
1. [青海5.1级地震](https://s.weibo.com//weibo?q=%E9%9D%92%E6%B5%B75.1%E7%BA%A7%E5%9C%B0%E9%9C%87&t=31&band_rank=17&Refer=top)
1. [刘琳评论区妈声一片](https://s.weibo.com//weibo?q=%23%E5%88%98%E7%90%B3%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%A6%88%E5%A3%B0%E4%B8%80%E7%89%87%23&t=31&band_rank=18&Refer=top)
1. [希望韩国政府切实践行一个中国原则](https://s.weibo.com//weibo?q=%23%E5%B8%8C%E6%9C%9B%E9%9F%A9%E5%9B%BD%E6%94%BF%E5%BA%9C%E5%88%87%E5%AE%9E%E8%B7%B5%E8%A1%8C%E4%B8%80%E4%B8%AA%E4%B8%AD%E5%9B%BD%E5%8E%9F%E5%88%99%23&t=31&band_rank=19&Refer=top)
1. [四川地震](https://s.weibo.com//weibo?q=%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87&t=31&band_rank=20&Refer=top)
1. [心疼一诺](https://s.weibo.com//weibo?q=%E5%BF%83%E7%96%BC%E4%B8%80%E8%AF%BA&t=31&band_rank=21&Refer=top)
1. [花少8变着法儿复刻花少2](https://s.weibo.com//weibo?q=%23%E8%8A%B1%E5%B0%918%E5%8F%98%E7%9D%80%E6%B3%95%E5%84%BF%E5%A4%8D%E5%88%BB%E8%8A%B1%E5%B0%912%23&t=31&band_rank=22&Refer=top)
1. [香港一家五口花了372块的晚餐](https://s.weibo.com//weibo?q=%23%E9%A6%99%E6%B8%AF%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E8%8A%B1%E4%BA%86372%E5%9D%97%E7%9A%84%E6%99%9A%E9%A4%90%23&t=31&band_rank=23&Refer=top)
1. [一家三口吃水洗鸡蛋后集体中毒](https://s.weibo.com//weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%83%E6%B0%B4%E6%B4%97%E9%B8%A1%E8%9B%8B%E5%90%8E%E9%9B%86%E4%BD%93%E4%B8%AD%E6%AF%92%23&t=31&band_rank=24&Refer=top)
1. [原来洗洁精是这么用来洗碗的](https://s.weibo.com//weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B4%97%E6%B4%81%E7%B2%BE%E6%98%AF%E8%BF%99%E4%B9%88%E7%94%A8%E6%9D%A5%E6%B4%97%E7%A2%97%E7%9A%84%23&t=31&band_rank=25&Refer=top)
1. [长生说打完今年不想打了](https://s.weibo.com//weibo?q=%E9%95%BF%E7%94%9F%E8%AF%B4%E6%89%93%E5%AE%8C%E4%BB%8A%E5%B9%B4%E4%B8%8D%E6%83%B3%E6%89%93%E4%BA%86&t=31&band_rank=26&Refer=top)
1. [3岁男童长期吃隔夜菜中毒住进PICU](https://s.weibo.com//weibo?q=%233%E5%B2%81%E7%94%B7%E7%AB%A5%E9%95%BF%E6%9C%9F%E5%90%83%E9%9A%94%E5%A4%9C%E8%8F%9C%E4%B8%AD%E6%AF%92%E4%BD%8F%E8%BF%9BPICU%23&t=31&band_rank=27&Refer=top)
1. [关晓彤生逢其时首播收视率](https://s.weibo.com//weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%94%9F%E9%80%A2%E5%85%B6%E6%97%B6%E9%A6%96%E6%92%AD%E6%94%B6%E8%A7%86%E7%8E%87%23&t=31&band_rank=28&Refer=top)
1. [上海女子住300平大平层花11万收纳](https://s.weibo.com//weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A5%B3%E5%AD%90%E4%BD%8F300%E5%B9%B3%E5%A4%A7%E5%B9%B3%E5%B1%82%E8%8A%B111%E4%B8%87%E6%94%B6%E7%BA%B3%23&t=31&band_rank=29&Refer=top)
1. [宝妈回应11个月宝宝凌晨偷玩手机](https://s.weibo.com//weibo?q=%23%E5%AE%9D%E5%A6%88%E5%9B%9E%E5%BA%9411%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E5%87%8C%E6%99%A8%E5%81%B7%E7%8E%A9%E6%89%8B%E6%9C%BA%23&t=31&band_rank=30&Refer=top)
1. [猫妈妈快被自己的崽崽烦死了](https://s.weibo.com//weibo?q=%23%E7%8C%AB%E5%A6%88%E5%A6%88%E5%BF%AB%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%9A%84%E5%B4%BD%E5%B4%BD%E7%83%A6%E6%AD%BB%E4%BA%86%23&t=31&band_rank=31&Refer=top)
1. [上帝视角带你看离岸流有多可怕](https://s.weibo.com//weibo?q=%E4%B8%8A%E5%B8%9D%E8%A7%86%E8%A7%92%E5%B8%A6%E4%BD%A0%E7%9C%8B%E7%A6%BB%E5%B2%B8%E6%B5%81%E6%9C%89%E5%A4%9A%E5%8F%AF%E6%80%95&t=31&band_rank=32&Refer=top)
1. [剖宫产身亡3名涉事医生停职7至9个月](https://s.weibo.com//weibo?q=%23%E5%89%96%E5%AE%AB%E4%BA%A7%E8%BA%AB%E4%BA%A13%E5%90%8D%E6%B6%89%E4%BA%8B%E5%8C%BB%E7%94%9F%E5%81%9C%E8%81%8C7%E8%87%B39%E4%B8%AA%E6%9C%88%23&t=31&band_rank=33&Refer=top)
1. [AG老五人组倒计时](https://s.weibo.com//weibo?q=%23AG%E8%80%81%E4%BA%94%E4%BA%BA%E7%BB%84%E5%80%92%E8%AE%A1%E6%97%B6%23&t=31&band_rank=34&Refer=top)
1. [千万不要跟人一同出去旅游](https://s.weibo.com//weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E8%B7%9F%E4%BA%BA%E4%B8%80%E5%90%8C%E5%87%BA%E5%8E%BB%E6%97%85%E6%B8%B8%23&t=31&band_rank=35&Refer=top)
1. [TF家族 新音](https://s.weibo.com//weibo?q=TF%E5%AE%B6%E6%97%8F%20%E6%96%B0%E9%9F%B3&t=31&band_rank=36&Refer=top)
1. [住了十年的房子开始报复我](https://s.weibo.com//weibo?q=%E4%BD%8F%E4%BA%86%E5%8D%81%E5%B9%B4%E7%9A%84%E6%88%BF%E5%AD%90%E5%BC%80%E5%A7%8B%E6%8A%A5%E5%A4%8D%E6%88%91&t=31&band_rank=37&Refer=top)
1. [小米18Fold真机全球首秀](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E7%9C%9F%E6%9C%BA%E5%85%A8%E7%90%83%E9%A6%96%E7%A7%80%23&t=31&band_rank=38&Refer=top)
1. [吉隆口岸救援人员吃上热乎饭](https://s.weibo.com//weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%95%91%E6%8F%B4%E4%BA%BA%E5%91%98%E5%90%83%E4%B8%8A%E7%83%AD%E4%B9%8E%E9%A5%AD%23&t=31&band_rank=39&Refer=top)
1. [特斯拉预告新时代即将到来](https://s.weibo.com//weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E9%A2%84%E5%91%8A%E6%96%B0%E6%97%B6%E4%BB%A3%E5%8D%B3%E5%B0%86%E5%88%B0%E6%9D%A5%23&t=31&band_rank=40&Refer=top)
1. [广州取消中小学校服统一订购](https://s.weibo.com//weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%8F%96%E6%B6%88%E4%B8%AD%E5%B0%8F%E5%AD%A6%E6%A0%A1%E6%9C%8D%E7%BB%9F%E4%B8%80%E8%AE%A2%E8%B4%AD%23&t=31&band_rank=41&Refer=top)
1. [AG告别夏季赛](https://s.weibo.com//weibo?q=%23AG%E5%91%8A%E5%88%AB%E5%A4%8F%E5%AD%A3%E8%B5%9B%23&t=31&band_rank=42&Refer=top)
1. [属于AG的盛夏余晖](https://s.weibo.com//weibo?q=%23%E5%B1%9E%E4%BA%8EAG%E7%9A%84%E7%9B%9B%E5%A4%8F%E4%BD%99%E6%99%96%23&t=31&band_rank=43&Refer=top)
1. [小米汽车2027年正式出海](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A62027%E5%B9%B4%E6%AD%A3%E5%BC%8F%E5%87%BA%E6%B5%B7%23&t=31&band_rank=44&Refer=top)
1. [狼队 这盛世如你所愿](https://s.weibo.com//weibo?q=%E7%8B%BC%E9%98%9F%20%E8%BF%99%E7%9B%9B%E4%B8%96%E5%A6%82%E4%BD%A0%E6%89%80%E6%84%BF&t=31&band_rank=45&Refer=top)
1. [五仁月饼要竖起来对半切才好吃](https://s.weibo.com//weibo?q=%23%E4%BA%94%E4%BB%81%E6%9C%88%E9%A5%BC%E8%A6%81%E7%AB%96%E8%B5%B7%E6%9D%A5%E5%AF%B9%E5%8D%8A%E5%88%87%E6%89%8D%E5%A5%BD%E5%90%83%23&t=31&band_rank=46&Refer=top)
1. [美国AI公司 宕机](https://s.weibo.com//weibo?q=%E7%BE%8E%E5%9B%BDAI%E5%85%AC%E5%8F%B8%20%E5%AE%95%E6%9C%BA&t=31&band_rank=47&Refer=top)
1. [小米汽车将进军欧洲](https://s.weibo.com//weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%B0%86%E8%BF%9B%E5%86%9B%E6%AC%A7%E6%B4%B2%23&t=31&band_rank=48&Refer=top)
1. [微信 单删提示](https://s.weibo.com//weibo?q=%E5%BE%AE%E4%BF%A1%20%E5%8D%95%E5%88%A0%E6%8F%90%E7%A4%BA&t=31&band_rank=49&Refer=top)
1. [TTG战胜AG](https://s.weibo.com//weibo?q=TTG%E6%88%98%E8%83%9CAG&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
