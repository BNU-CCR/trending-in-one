# trending-in-one

> 本仓库基于上游项目 [huqi-pr/trending-in-one](https://github.com/huqi-pr/trending-in-one)
> 及其持续更新分支整理，补全了历史归档数据；内容由 GitHub Actions 自动抓取、归档并维护。

[![ci](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml/badge.svg)](https://github.com/nateafish/trending-in-one/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/izukuuuu/trending-in-one)](https://github.com/nateafish/trending-in-one/blob/main/LICENSE)

今日头条热搜、知乎热搜榜、知乎热门话题、微博热搜榜；记录从 2020-11-29
日开始的热搜。每小时抓取一次数据，按天[归档](./archives)。知乎视频热榜已下线（2025-05
起停更），不再抓取，仅保留历史数据。

<!-- BEGIN ZHIHUCOOKIE -->

**知乎热榜 Cookie**：✅ 有效 ｜ 最近刷新：2026-08-07 13:14 ｜ 最近检测：2026-09-29 10:00:03

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
<!-- 最后更新时间 Tue Sep 29 2026 06:16:27 GMT+0800 (China Standard Time) -->

1. [陈妤颉再添一金](https://so.toutiao.com/search?keyword=陈妤颉再添一金)
1. [新政后全国多个楼盘启动涨价](https://so.toutiao.com/search?keyword=新政后全国多个楼盘启动涨价)
1. [美中加强农业合作是双赢之举](https://so.toutiao.com/search?keyword=美中加强农业合作是双赢之举)
1. [林诗栋4-0王楚钦夺冠](https://so.toutiao.com/search?keyword=林诗栋4-0王楚钦夺冠)
1. [中国年轻人为何改攒金豆](https://so.toutiao.com/search?keyword=中国年轻人为何改攒金豆)
1. [《无可替代》拿下全国收视第一](https://so.toutiao.com/search?keyword=《无可替代》拿下全国收视第一)
1. [日媒惊呼中国队出了怪物级天才](https://so.toutiao.com/search?keyword=日媒惊呼中国队出了怪物级天才)
1. [电池越来越便宜 电车为何仍然修不起](https://so.toutiao.com/search?keyword=电池越来越便宜%20电车为何仍然修不起)
1. [薛剑：日本在反华厌华方面获世界冠军](https://so.toutiao.com/search?keyword=薛剑：日本在反华厌华方面获世界冠军)
1. [12306辟谣后台发信息就能抢到票](https://so.toutiao.com/search?keyword=12306辟谣后台发信息就能抢到票)
1. [林诗栋：没想到能4比0王楚钦](https://so.toutiao.com/search?keyword=林诗栋：没想到能4比0王楚钦)
1. [成方圆追忆刘欢：发微信再没等到回复](https://so.toutiao.com/search?keyword=成方圆追忆刘欢：发微信再没等到回复)
1. [荣耀CEO听到新机销量笑到合不拢嘴](https://so.toutiao.com/search?keyword=荣耀CEO听到新机销量笑到合不拢嘴)
1. [邓亚萍预测至少要跟日本运动员打10年](https://so.toutiao.com/search?keyword=邓亚萍预测至少要跟日本运动员打10年)
1. [媒体：刘欢去世中文歌坛真神落幕](https://so.toutiao.com/search?keyword=媒体：刘欢去世中文歌坛真神落幕)
1. [李克勤帮唱歌手侯浪：骑着小黄车救场](https://so.toutiao.com/search?keyword=李克勤帮唱歌手侯浪：骑着小黄车救场)
1. [对手穿错鞋中国队递补获金银牌](https://so.toutiao.com/search?keyword=对手穿错鞋中国队递补获金银牌)
1. [闫妮亮相金鹰节状态](https://so.toutiao.com/search?keyword=闫妮亮相金鹰节状态)
1. [罗永浩回应遭实名举报偷税漏税](https://so.toutiao.com/search?keyword=罗永浩回应遭实名举报偷税漏税)
1. [吴艳妮领首枚亚运奖牌给自己竖大拇指](https://so.toutiao.com/search?keyword=吴艳妮领首枚亚运奖牌给自己竖大拇指)
1. [游本昌去世前两三天选择不吃不喝](https://so.toutiao.com/search?keyword=游本昌去世前两三天选择不吃不喝)
1. [这三天谁能有心思上班](https://so.toutiao.com/search?keyword=这三天谁能有心思上班)
1. [张本美和四项全输给中国队](https://so.toutiao.com/search?keyword=张本美和四项全输给中国队)
1. [为什么打仗了黄金不涨反跌](https://so.toutiao.com/search?keyword=为什么打仗了黄金不涨反跌)
1. [高盛警告：美股多数股票已在熊市](https://so.toutiao.com/search?keyword=高盛警告：美股多数股票已在熊市)
1. [王楚钦本届亚运三度遭遇横扫](https://so.toutiao.com/search?keyword=王楚钦本届亚运三度遭遇横扫)
1. [陈浩民追忆游本昌](https://so.toutiao.com/search?keyword=陈浩民追忆游本昌)
1. [武契奇总统任期最后一天深情祝福中国](https://so.toutiao.com/search?keyword=武契奇总统任期最后一天深情祝福中国)
1. [林诗栋上次单打夺冠还是2025年](https://so.toutiao.com/search?keyword=林诗栋上次单打夺冠还是2025年)
1. [越来越多欧洲消费者选择中国电动车](https://so.toutiao.com/search?keyword=越来越多欧洲消费者选择中国电动车)
1. [美获得格陵兰岛安全控制权有何影响](https://so.toutiao.com/search?keyword=美获得格陵兰岛安全控制权有何影响)
1. [标枪最强小孩姐距人类极限半步之遥](https://so.toutiao.com/search?keyword=标枪最强小孩姐距人类极限半步之遥)
1. [8.59元香菜仅退款 卖家驱车千里取回](https://so.toutiao.com/search?keyword=8.59元香菜仅退款%20卖家驱车千里取回)
1. [河南小伙斩获世赛金牌的背后](https://so.toutiao.com/search?keyword=河南小伙斩获世赛金牌的背后)
1. [国乒亚运会6金收官](https://so.toutiao.com/search?keyword=国乒亚运会6金收官)
1. [美伊对峙七个月 双方博弈仍在持续](https://so.toutiao.com/search?keyword=美伊对峙七个月%20双方博弈仍在持续)
1. [中国为何将自美进口煤炭纳入降税框架](https://so.toutiao.com/search?keyword=中国为何将自美进口煤炭纳入降税框架)
1. [今年会是她们留给亚运会最后的身影吗](https://so.toutiao.com/search?keyword=今年会是她们留给亚运会最后的身影吗)
1. [中国00后男护理夺得世赛金牌](https://so.toutiao.com/search?keyword=中国00后男护理夺得世赛金牌)
1. [上海出台楼市新政：规范预售条件](https://so.toutiao.com/search?keyword=上海出台楼市新政：规范预售条件)
1. [女双夺冠后侯英超连说6个棒](https://so.toutiao.com/search?keyword=女双夺冠后侯英超连说6个棒)
1. [国常会研究出台稳定房地产市场政策](https://so.toutiao.com/search?keyword=国常会研究出台稳定房地产市场政策)
1. [独自养一家七口被老板塞钱员工回应](https://so.toutiao.com/search?keyword=独自养一家七口被老板塞钱员工回应)
1. [王曼昱蒯曼4-0横扫日本组合夺冠](https://so.toutiao.com/search?keyword=王曼昱蒯曼4-0横扫日本组合夺冠)
1. [余承东称用行业最高标准打造享界V8](https://so.toutiao.com/search?keyword=余承东称用行业最高标准打造享界V8)
1. [崔培军：公司20多年来不打卡不考勤](https://so.toutiao.com/search?keyword=崔培军：公司20多年来不打卡不考勤)
1. [石雨豪获得亚运会男子跳远金牌](https://so.toutiao.com/search?keyword=石雨豪获得亚运会男子跳远金牌)
1. [莎拉·布莱曼发文悼念刘欢](https://so.toutiao.com/search?keyword=莎拉·布莱曼发文悼念刘欢)
1. [入围金鹰奖女配角的她们送假期祝福](https://so.toutiao.com/search?keyword=入围金鹰奖女配角的她们送假期祝福)
1. [媒体：喜看中国田径青春风暴](https://so.toutiao.com/search?keyword=媒体：喜看中国田径青春风暴)

<!-- END TOUTIAO -->

历史归档 [./archives/toutiao-search](./archives/toutiao-search)

## 知乎热搜榜

<!-- BEGIN ZHIHUSEARCH -->
<!-- 最后更新时间 Tue Sep 29 2026 09:53:57 GMT+0800 (China Standard Time) -->

1. [林诗栋 4-0 王楚钦夺金](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B%204-0%20%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E9%87%91)
1. [武契奇宣布辞职](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A5%91%E5%A5%87%E5%AE%A3%E5%B8%83%E8%BE%9E%E8%81%8C)
1. [张家齐妈妈公开念家书批评女儿](https://www.zhihu.com/search?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E5%85%AC%E5%BC%80%E5%BF%B5%E5%AE%B6%E4%B9%A6%E6%89%B9%E8%AF%84%E5%A5%B3%E5%84%BF)
1. [王楚钦：不知道为什么就是感觉累](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%EF%BC%9A%E4%B8%8D%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B0%B1%E6%98%AF%E6%84%9F%E8%A7%89%E7%B4%AF)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [Claude Sonnet 5.5发布](https://www.zhihu.com/search?q=Claude%20Sonnet%205.5%E5%8F%91%E5%B8%83)
1. [拾荒老人不知自己每月养老金 3700 元](https://www.zhihu.com/search?q=%E6%8B%BE%E8%8D%92%E8%80%81%E4%BA%BA%E4%B8%8D%E7%9F%A5%E8%87%AA%E5%B7%B1%E6%AF%8F%E6%9C%88%E5%85%BB%E8%80%81%E9%87%91%203700%20%E5%85%83)
1. [郑刚实名举报罗永浩偷税漏税](https://www.zhihu.com/search?q=%E9%83%91%E5%88%9A%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E)
1. [杜淳妻子王灿被骗灌肠](https://www.zhihu.com/search?q=%E6%9D%9C%E6%B7%B3%E5%A6%BB%E5%AD%90%E7%8E%8B%E7%81%BF%E8%A2%AB%E9%AA%97%E7%81%8C%E8%82%A0)
1. [刘欢到退休时仍是副教授](https://www.zhihu.com/search?q=%E5%88%98%E6%AC%A2%E5%88%B0%E9%80%80%E4%BC%91%E6%97%B6%E4%BB%8D%E6%98%AF%E5%89%AF%E6%95%99%E6%8E%88)
1. [王曼昱战胜孙颖莎夺冠](https://www.zhihu.com/search?q=%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%88%98%E8%83%9C%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%BA%E5%86%A0)
1. [中美300亿对300亿对等降税框架](https://www.zhihu.com/search?q=%E4%B8%AD%E7%BE%8E300%E4%BA%BF%E5%AF%B9300%E4%BA%BF%E5%AF%B9%E7%AD%89%E9%99%8D%E7%A8%8E%E6%A1%86%E6%9E%B6)
1. [刘欢病逝](https://www.zhihu.com/search?q=%E5%88%98%E6%AC%A2%E7%97%85%E9%80%9D)
1. [日乒男单全军覆没](https://www.zhihu.com/search?q=%E6%97%A5%E4%B9%92%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1)
1. [王楚钦4比1阿拉米扬](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A64%E6%AF%941%E9%98%BF%E6%8B%89%E7%B1%B3%E6%89%AC)

<!-- END ZHIHUSEARCH -->

历史归档 [./archives/zhihu-search](./archives/zhihu-search)

## 知乎热门话题

<!-- BEGIN ZHIHUQUESTIONS -->
<!-- 最后更新时间 Tue Sep 29 2026 10:00:03 GMT+0800 (China Standard Time) -->

1. [2026亚运会乒乓球男单决赛，林诗栋 4-0 王楚钦夺得金牌，如何评价本场比赛？](https://www.zhihu.com/question/2087911809458102800)
1. [怎么看待超长蛋挞的爆红？](https://www.zhihu.com/question/2085307820598105600)
1. [多地贷款中介集体解散群聊、删除朋友圈，背后原因是什么？会带来哪些影响？](https://www.zhihu.com/question/2087614254006400800)
1. [印、美联合团队研究称「混凝土中掺入人粪，抗折强度提高 42%」，如何理解该研究的理论和现实意义？](https://www.zhihu.com/question/2087853929207787800)
1. [杭州女子每月花3000元跨省2小时去上海上班，称「算了笔账总体是划算的」，真划算吗？怎样看待她的选择？](https://www.zhihu.com/question/2087928868850112300)
1. [从本届亚运会来看，林诗栋夺得 3 金 1 银要成为国乒一哥了吗？](https://www.zhihu.com/question/2087997878270523100)
1. [为什么父母总爱说「我都是为了你好」，但我们这代人却最害怕听到这句话？](https://www.zhihu.com/question/2074084739418477000)
1. [曝携程推新规鼓励「无理由事假」，员工休1天无理由事假，团队得600元团建经费，如何看待这种激励方式？](https://www.zhihu.com/question/2087911286118019800)
1. [地球上的所有动物都没有穿衣服，还不是活得好好的，为什么只有我们人类才穿衣服，难道不穿衣服就活不了吗？](https://www.zhihu.com/question/2082064671708922600)
1. [为什么日式料理中会大量使用酱油和味噌？](https://www.zhihu.com/question/13079900270)
1. [中国男子、女子百米接力双双夺得亚运会金牌，怎样评价这两场比赛？](https://www.zhihu.com/question/2088023546408563200)
1. [东京奥运前夕，张家齐母亲写了一封满是训诫内容的家书，但教练没有把家书给张家齐，怎样看待教练的做法？](https://www.zhihu.com/question/2087956519622898700)
1. [哆啦A梦明明拥有无数逆天道具，却似乎没怎么改变大雄的人生，创作者想表达什么？](https://www.zhihu.com/question/2053048540797130500)
1. [网友吐槽「毫无人性关怀的大厂却总致力于打造出充满人性光辉的产品」，你怎么看待这个观点？](https://www.zhihu.com/question/2087300723268481300)
1. [如何看待常德一老人因误解养老金政策拾荒 21 年，最终领到 42 万养老金？暴露了背后哪些问题？](https://www.zhihu.com/question/2087842325703520500)
1. [怎样看待王楚钦称不知道为什么就是感觉累，找不太到之前打球的感觉？他要怎样才能找回之前的状态？](https://www.zhihu.com/question/2088009996894038000)
1. [要检查孩子作业，孩子回应「老师要求做完，又没要求做对」来回避检查作业，怎么纠正孩子更好呢？](https://www.zhihu.com/question/1893232431370310000)
1. [林雨薇长文告别国家队，称伤病缠身，赛前「领导劝不必硬拼」，此后将赴福州大学教书，对此你怎么看？](https://www.zhihu.com/question/2087855251550200000)
1. [如何看待联合国专家预测未来七年内全球性战争风险急速攀升？](https://www.zhihu.com/question/2087076854901499400)
1. [面对「过紧日子」的要求，大学预算中哪些开支「该紧」，哪些「不该紧」？](https://www.zhihu.com/question/2084700478647039700)
1. [锤子科技前投资人郑刚实名举报罗永浩偷税漏税，罗永浩指其诬告，具体是什么情况？他俩有啥恩怨？](https://www.zhihu.com/question/2087817719617774800)
1. [手机内置广告一直被骂，为什么没有一个厂商出一款纯净无广告的手机，是给的太多了吗？](https://www.zhihu.com/question/2086472782729196800)
1. [真实历史上的瞎子阿炳是怎样的人？](https://www.zhihu.com/question/497250165)
1. [《复联 4》重映全球首周票房斩获 8600 万美元，为何还能展现出如此强的号召力？](https://www.zhihu.com/question/2087746333335615200)
1. [如何评价刘欢《从头再来》这首歌？](https://www.zhihu.com/question/2087220367001645600)
1. [为啥现在有些人道德水平不高、守法意识薄弱，维权意识却很强烈？](https://www.zhihu.com/question/2087579690596656000)
1. [如何评价《新大头儿子》系列电影被网友吐槽画风诡异、大头儿子像「鬼火少年」？](https://www.zhihu.com/question/2087565298354189600)
1. [我觉得乾隆的字挺好看呀，为什么在书法界评价很低？](https://www.zhihu.com/question/2085453188900168400)
1. [网上都说计算机炸了，为什么现实中一堆转专业到计算机的？](https://www.zhihu.com/question/2075577882076885000)
1. [为什么厂家不把预制菜直接卖给c端用户？省得我叫外卖了?](https://www.zhihu.com/question/1952882788639417900)
1. [王楚钦本届亚运会一金未拿，怎样评价他的状态？打法上可能有哪些问题？](https://www.zhihu.com/question/2087999745213949000)
1. [体育总局局长表示，亚运会部分传统优势项目遇到挑战，成绩不及预期，可能有哪些原因？](https://www.zhihu.com/question/2087828556701241300)
1. [双汇火腿肠销量连续下滑，传统火腿肠为何越来越卖不动？方便面触底反弹，火腿肠却持续下滑，问题出在哪里？](https://www.zhihu.com/question/2087819360249144000)
1. [怎么看 OpenAI 的 Pro 订阅取消 5x 和 20x 的描述？](https://www.zhihu.com/question/2087607174948186000)
1. [沙漠烈日下，用电视播放绿洲画面，能吸引到骆驼吗？](https://www.zhihu.com/question/2087525916880664000)
1. [有网友在雷军评论区下呼吁小米 18 系列推出无防窥版，防窥屏真的很影响体验吗？有啥解决的办法吗？](https://www.zhihu.com/question/2087641499965940200)
1. [亚运会乒乓球女双决赛，王曼昱/蒯曼 4-0 战胜张本美和/早田希娜夺得金牌，如何评价本场比赛？](https://www.zhihu.com/question/2087912811338920000)
1. [如何评价2026年9月米哈游《原神》7.1版本，冰神冰之女皇戏份？](https://www.zhihu.com/question/2086242322979805000)
1. [袁绍三个儿子中谁的能力最突出？能在他死后守住袁家霸业？](https://www.zhihu.com/question/1987412291256332500)
1. [如何评价吴艳妮夺铜后发言「起跑慢因三年前的阴影，我没有被挫折和网暴打败」？](https://www.zhihu.com/question/2087849328337318100)
1. [亚奥理事会回应「电子竞技项目将退出亚运会」，称传闻与工作安排不符，具体是怎么回事？](https://www.zhihu.com/question/2087805520950158600)
1. [火影忍者中的五大国分别对应了哪五个国家？](https://www.zhihu.com/question/36189325)
1. [我国南疆塔克拉玛干沙漠发现两处大型地下水水源，这意味着什么？将对当地生态和经济带来哪些影响？](https://www.zhihu.com/question/2083110699207808800)
1. [可以详细说下从GPT-1到GPT-4，有哪些变化，是如何发展的？](https://www.zhihu.com/question/618248545)
1. [斯内普那么爱莉莉，为什么输给了詹姆？](https://www.zhihu.com/question/359390507)
1. [似乎不少日式西幻作品会设定在遥远的东方有大和的，为什么中式西幻作品却很少有设定在东方有中国的？](https://www.zhihu.com/question/2085346903768749600)
1. [一个人开车跑高速犯困了，除了喝红牛和掐大腿，还有什么真正有效的提神方法？](https://www.zhihu.com/question/2084653683766191600)
1. [中美「300亿对300亿」对等降税框架公布，超90%产品将享受最惠国关税待遇，将带来哪些利好？](https://www.zhihu.com/question/2087868581669070000)
1. [作为父母，如果孩子的理想很平凡，你会尊重孩子吗？](https://www.zhihu.com/question/2082179870243676400)
1. [自己做饭是为了省钱还是健康？](https://www.zhihu.com/question/1999815894617061000)

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
<!-- 最后更新时间 Tue Sep 29 2026 10:04:56 GMT+0800 (China Standard Time) -->

1. [习近平就建设平安中国作出重要指示](https://s.weibo.com//weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%B0%B1%E5%BB%BA%E8%AE%BE%E5%B9%B3%E5%AE%89%E4%B8%AD%E5%9B%BD%E4%BD%9C%E5%87%BA%E9%87%8D%E8%A6%81%E6%8C%87%E7%A4%BA%23&Refer=new_time)
1. [鲍师傅超长蛋挞被吐槽全是皮没蛋液](https://s.weibo.com//weibo?q=%23%E9%B2%8D%E5%B8%88%E5%82%85%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E8%A2%AB%E5%90%90%E6%A7%BD%E5%85%A8%E6%98%AF%E7%9A%AE%E6%B2%A1%E8%9B%8B%E6%B6%B2%23&t=31&band_rank=1&Refer=top)
1. [Tiffany散装桃酥致歉](https://s.weibo.com//weibo?q=Tiffany%E6%95%A3%E8%A3%85%E6%A1%83%E9%85%A5%E8%87%B4%E6%AD%89&t=31&band_rank=2&Refer=top)
1. [平平福双已运至亚特兰大动物园](https://s.weibo.com//weibo?q=%23%E5%B9%B3%E5%B9%B3%E7%A6%8F%E5%8F%8C%E5%B7%B2%E8%BF%90%E8%87%B3%E4%BA%9A%E7%89%B9%E5%85%B0%E5%A4%A7%E5%8A%A8%E7%89%A9%E5%9B%AD%23&t=31&band_rank=3&Refer=top)
1. [13岁男孩独居后洗手池全是霉菌](https://s.weibo.com//weibo?q=%2313%E5%B2%81%E7%94%B7%E5%AD%A9%E7%8B%AC%E5%B1%85%E5%90%8E%E6%B4%97%E6%89%8B%E6%B1%A0%E5%85%A8%E6%98%AF%E9%9C%89%E8%8F%8C%23&t=31&band_rank=4&Refer=top)
1. [北京大学禁止赴风景名胜区开会](https://s.weibo.com//weibo?q=%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%A6%81%E6%AD%A2%E8%B5%B4%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C%E5%8C%BA%E5%BC%80%E4%BC%9A&t=31&band_rank=5&Refer=top)
1. [文旅局回应那英临时加唱弯弯的月亮](https://s.weibo.com//weibo?q=%23%E6%96%87%E6%97%85%E5%B1%80%E5%9B%9E%E5%BA%94%E9%82%A3%E8%8B%B1%E4%B8%B4%E6%97%B6%E5%8A%A0%E5%94%B1%E5%BC%AF%E5%BC%AF%E7%9A%84%E6%9C%88%E4%BA%AE%23&t=31&band_rank=6&Refer=top)
1. [曝张家齐一开始不同意和妈妈上节目](https://s.weibo.com//weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%B8%80%E5%BC%80%E5%A7%8B%E4%B8%8D%E5%90%8C%E6%84%8F%E5%92%8C%E5%A6%88%E5%A6%88%E4%B8%8A%E8%8A%82%E7%9B%AE%23&t=31&band_rank=7&Refer=top)
1. [深圳一街道办深夜打麻将实为视觉误差](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E8%A1%97%E9%81%93%E5%8A%9E%E6%B7%B1%E5%A4%9C%E6%89%93%E9%BA%BB%E5%B0%86%E5%AE%9E%E4%B8%BA%E8%A7%86%E8%A7%89%E8%AF%AF%E5%B7%AE%23&t=31&band_rank=8&Refer=top)
1. [张继科回应王楚钦银牌](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%9B%9E%E5%BA%94%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%93%B6%E7%89%8C%23&t=31&band_rank=9&Refer=top)
1. [2岁娃疑连吃8个月银鳕鱼汞中毒](https://s.weibo.com//weibo?q=%232%E5%B2%81%E5%A8%83%E7%96%91%E8%BF%9E%E5%90%838%E4%B8%AA%E6%9C%88%E9%93%B6%E9%B3%95%E9%B1%BC%E6%B1%9E%E4%B8%AD%E6%AF%92%23&t=31&band_rank=10&Refer=top)
1. [华为Mate90系列正式定档10月1日](https://s.weibo.com//weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E7%B3%BB%E5%88%97%E6%AD%A3%E5%BC%8F%E5%AE%9A%E6%A1%A310%E6%9C%881%E6%97%A5%23&t=31&band_rank=11&Refer=top)
1. [万千惠巴黎被偷求助](https://s.weibo.com//weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E5%B7%B4%E9%BB%8E%E8%A2%AB%E5%81%B7%E6%B1%82%E5%8A%A9%23&t=31&band_rank=12&Refer=top)
1. [樊振东德国梗被批](https://s.weibo.com//weibo?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BE%B7%E5%9B%BD%E6%A2%97%E8%A2%AB%E6%89%B9&t=31&band_rank=13&Refer=top)
1. [傅园慧当上浙大老师全靠能力和成绩](https://s.weibo.com//weibo?q=%23%E5%82%85%E5%9B%AD%E6%85%A7%E5%BD%93%E4%B8%8A%E6%B5%99%E5%A4%A7%E8%80%81%E5%B8%88%E5%85%A8%E9%9D%A0%E8%83%BD%E5%8A%9B%E5%92%8C%E6%88%90%E7%BB%A9%23&t=31&band_rank=14&Refer=top)
1. [张继科说他与樊振东马龙是男单最强三人](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E4%BB%96%E4%B8%8E%E6%A8%8A%E6%8C%AF%E4%B8%9C%E9%A9%AC%E9%BE%99%E6%98%AF%E7%94%B7%E5%8D%95%E6%9C%80%E5%BC%BA%E4%B8%89%E4%BA%BA%23&t=31&band_rank=15&Refer=top)
1. [张家齐回应没有代言找她](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%9B%9E%E5%BA%94%E6%B2%A1%E6%9C%89%E4%BB%A3%E8%A8%80%E6%89%BE%E5%A5%B9&t=31&band_rank=16&Refer=top)
1. [奚梦瑶拿蛋糕这个动作](https://s.weibo.com//weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%8B%BF%E8%9B%8B%E7%B3%95%E8%BF%99%E4%B8%AA%E5%8A%A8%E4%BD%9C%23&t=31&band_rank=17&Refer=top)
1. [浙江办不成事专窗太超前](https://s.weibo.com//weibo?q=%E6%B5%99%E6%B1%9F%E5%8A%9E%E4%B8%8D%E6%88%90%E4%BA%8B%E4%B8%93%E7%AA%97%E5%A4%AA%E8%B6%85%E5%89%8D&t=31&band_rank=18&Refer=top)
1. [赵丽颖的实绩](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9A%84%E5%AE%9E%E7%BB%A9%23&t=31&band_rank=19&Refer=top)
1. [仅退款把商家逼成什么程度了](https://s.weibo.com//weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E6%8A%8A%E5%95%86%E5%AE%B6%E9%80%BC%E6%88%90%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%E4%BA%86%23&t=31&band_rank=20&Refer=top)
1. [9种面相提示心脏出问题了](https://s.weibo.com//weibo?q=%239%E7%A7%8D%E9%9D%A2%E7%9B%B8%E6%8F%90%E7%A4%BA%E5%BF%83%E8%84%8F%E5%87%BA%E9%97%AE%E9%A2%98%E4%BA%86%23&t=31&band_rank=21&Refer=top)
1. [拒绝别人八成因为对方不会说话](https://s.weibo.com//weibo?q=%E6%8B%92%E7%BB%9D%E5%88%AB%E4%BA%BA%E5%85%AB%E6%88%90%E5%9B%A0%E4%B8%BA%E5%AF%B9%E6%96%B9%E4%B8%8D%E4%BC%9A%E8%AF%B4%E8%AF%9D&t=31&band_rank=22&Refer=top)
1. [短视频榨出穷人唯一还值钱的东西](https://s.weibo.com//weibo?q=%E7%9F%AD%E8%A7%86%E9%A2%91%E6%A6%A8%E5%87%BA%E7%A9%B7%E4%BA%BA%E5%94%AF%E4%B8%80%E8%BF%98%E5%80%BC%E9%92%B1%E7%9A%84%E4%B8%9C%E8%A5%BF&t=31&band_rank=23&Refer=top)
1. [沈嘉兰辫子上戴的是金饰](https://s.weibo.com//weibo?q=%23%E6%B2%88%E5%98%89%E5%85%B0%E8%BE%AB%E5%AD%90%E4%B8%8A%E6%88%B4%E7%9A%84%E6%98%AF%E9%87%91%E9%A5%B0%23&t=31&band_rank=24&Refer=top)
1. [詹姆斯 76人](https://s.weibo.com//weibo?q=%E8%A9%B9%E5%A7%86%E6%96%AF%2076%E4%BA%BA&t=31&band_rank=25&Refer=top)
1. [九年护工劝你别太心疼爹妈](https://s.weibo.com//weibo?q=%E4%B9%9D%E5%B9%B4%E6%8A%A4%E5%B7%A5%E5%8A%9D%E4%BD%A0%E5%88%AB%E5%A4%AA%E5%BF%83%E7%96%BC%E7%88%B9%E5%A6%88&t=31&band_rank=26&Refer=top)
1. [狗狗一夜未归龇牙是最后倔强](https://s.weibo.com//weibo?q=%E7%8B%97%E7%8B%97%E4%B8%80%E5%A4%9C%E6%9C%AA%E5%BD%92%E9%BE%87%E7%89%99%E6%98%AF%E6%9C%80%E5%90%8E%E5%80%94%E5%BC%BA&t=31&band_rank=27&Refer=top)
1. [李现澳网明星赛晋级四强](https://s.weibo.com//weibo?q=%E6%9D%8E%E7%8E%B0%E6%BE%B3%E7%BD%91%E6%98%8E%E6%98%9F%E8%B5%9B%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA&t=31&band_rank=28&Refer=top)
1. [贵州龙里一交通事故致7死](https://s.weibo.com//weibo?q=%23%E8%B4%B5%E5%B7%9E%E9%BE%99%E9%87%8C%E4%B8%80%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%E8%87%B47%E6%AD%BB%23&t=31&band_rank=29&Refer=top)
1. [林诗栋展望洛杉矶奥运会](https://s.weibo.com//weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E5%B1%95%E6%9C%9B%E6%B4%9B%E6%9D%89%E7%9F%B6%E5%A5%A5%E8%BF%90%E4%BC%9A%23&t=31&band_rank=30&Refer=top)
1. [Tiffany公关](https://s.weibo.com//weibo?q=Tiffany%E5%85%AC%E5%85%B3&t=31&band_rank=31&Refer=top)
1. [兰香如故韩粱被冻死了](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%9F%A9%E7%B2%B1%E8%A2%AB%E5%86%BB%E6%AD%BB%E4%BA%86&t=31&band_rank=32&Refer=top)
1. [金饰爆单原因](https://s.weibo.com//weibo?q=%23%E9%87%91%E9%A5%B0%E7%88%86%E5%8D%95%E5%8E%9F%E5%9B%A0%23&t=31&band_rank=33&Refer=top)
1. [才发现蒋欣的头是真小啊](https://s.weibo.com//weibo?q=%23%E6%89%8D%E5%8F%91%E7%8E%B0%E8%92%8B%E6%AC%A3%E7%9A%84%E5%A4%B4%E6%98%AF%E7%9C%9F%E5%B0%8F%E5%95%8A%23&t=31&band_rank=34&Refer=top)
1. [肖战粉丝就这样每天吃好的](https://s.weibo.com//weibo?q=%23%E8%82%96%E6%88%98%E7%B2%89%E4%B8%9D%E5%B0%B1%E8%BF%99%E6%A0%B7%E6%AF%8F%E5%A4%A9%E5%90%83%E5%A5%BD%E7%9A%84%23&t=31&band_rank=35&Refer=top)
1. [袁绍辉有六个女儿](https://s.weibo.com//weibo?q=%23%E8%A2%81%E7%BB%8D%E8%BE%89%E6%9C%89%E5%85%AD%E4%B8%AA%E5%A5%B3%E5%84%BF%23&t=31&band_rank=36&Refer=top)
1. [国乒启程回国](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%E5%90%AF%E7%A8%8B%E5%9B%9E%E5%9B%BD&t=31&band_rank=37&Refer=top)
1. [金卡戴珊家族上海吃云南菜](https://s.weibo.com//weibo?q=%E9%87%91%E5%8D%A1%E6%88%B4%E7%8F%8A%E5%AE%B6%E6%97%8F%E4%B8%8A%E6%B5%B7%E5%90%83%E4%BA%91%E5%8D%97%E8%8F%9C&t=31&band_rank=38&Refer=top)
1. [Bin回应世一上短剧](https://s.weibo.com//weibo?q=%23Bin%E5%9B%9E%E5%BA%94%E4%B8%96%E4%B8%80%E4%B8%8A%E7%9F%AD%E5%89%A7%23&t=31&band_rank=39&Refer=top)
1. [淡淡男友](https://s.weibo.com//weibo?q=%E6%B7%A1%E6%B7%A1%E7%94%B7%E5%8F%8B&t=31&band_rank=40&Refer=top)
1. [刘学义就这样在所有人雷区上跳舞](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%B0%B1%E8%BF%99%E6%A0%B7%E5%9C%A8%E6%89%80%E6%9C%89%E4%BA%BA%E9%9B%B7%E5%8C%BA%E4%B8%8A%E8%B7%B3%E8%88%9E%23&t=31&band_rank=41&Refer=top)
1. [张继科回应林诗栋金牌](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%9B%9E%E5%BA%94%E6%9E%97%E8%AF%97%E6%A0%8B%E9%87%91%E7%89%8C%23&t=31&band_rank=42&Refer=top)
1. [金鹰奖预测](https://s.weibo.com//weibo?q=%E9%87%91%E9%B9%B0%E5%A5%96%E9%A2%84%E6%B5%8B&t=31&band_rank=43&Refer=top)
1. [AMD收购李飞飞初创公司](https://s.weibo.com//weibo?q=%23AMD%E6%94%B6%E8%B4%AD%E6%9D%8E%E9%A3%9E%E9%A3%9E%E5%88%9D%E5%88%9B%E5%85%AC%E5%8F%B8%23&t=31&band_rank=44&Refer=top)
1. [赵今麦湿发泳衣生日照](https://s.weibo.com//weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%B9%BF%E5%8F%91%E6%B3%B3%E8%A1%A3%E7%94%9F%E6%97%A5%E7%85%A7%23&t=31&band_rank=45&Refer=top)
1. [詹姆斯说加盟尼克斯恐舆论反噬](https://s.weibo.com//weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E8%AF%B4%E5%8A%A0%E7%9B%9F%E5%B0%BC%E5%85%8B%E6%96%AF%E6%81%90%E8%88%86%E8%AE%BA%E5%8F%8D%E5%99%AC%23&t=31&band_rank=46&Refer=top)
1. [这种宝藏碳水竟是脂肪肝克星](https://s.weibo.com//weibo?q=%23%E8%BF%99%E7%A7%8D%E5%AE%9D%E8%97%8F%E7%A2%B3%E6%B0%B4%E7%AB%9F%E6%98%AF%E8%84%82%E8%82%AA%E8%82%9D%E5%85%8B%E6%98%9F%23&t=31&band_rank=47&Refer=top)
1. [华鼎奖提名名单](https://s.weibo.com//weibo?q=%E5%8D%8E%E9%BC%8E%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95&t=31&band_rank=48&Refer=top)
1. [麻袋装礼物被嘲笑后反转](https://s.weibo.com//weibo?q=%E9%BA%BB%E8%A2%8B%E8%A3%85%E7%A4%BC%E7%89%A9%E8%A2%AB%E5%98%B2%E7%AC%91%E5%90%8E%E5%8F%8D%E8%BD%AC&t=31&band_rank=49&Refer=top)
1. [76人首发五虎](https://s.weibo.com//weibo?q=76%E4%BA%BA%E9%A6%96%E5%8F%91%E4%BA%94%E8%99%8E&t=31&band_rank=50&Refer=top)
1. [王楚钦快速摘掉银牌](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BF%AB%E9%80%9F%E6%91%98%E6%8E%89%E9%93%B6%E7%89%8C%23&t=31&band_rank=1&Refer=top)
1. [Tiffany 小红书](https://s.weibo.com//weibo?q=Tiffany%20%E5%B0%8F%E7%BA%A2%E4%B9%A6&t=31&band_rank=2&Refer=top)
1. [月薪五万该不该买两万包](https://s.weibo.com//weibo?q=%E6%9C%88%E8%96%AA%E4%BA%94%E4%B8%87%E8%AF%A5%E4%B8%8D%E8%AF%A5%E4%B9%B0%E4%B8%A4%E4%B8%87%E5%8C%85&t=31&band_rank=4&Refer=top)
1. [女顾客吐槽Tiffany后账号被限制](https://s.weibo.com//weibo?q=%E5%A5%B3%E9%A1%BE%E5%AE%A2%E5%90%90%E6%A7%BDTiffany%E5%90%8E%E8%B4%A6%E5%8F%B7%E8%A2%AB%E9%99%90%E5%88%B6&t=31&band_rank=5&Refer=top)
1. [詹姆斯 76人](https://s.weibo.com//weibo?q=%E8%A9%B9%E5%A7%86%E6%96%AF%2076%E4%BA%BA&t=31&band_rank=6&Refer=top)
1. [王楚钦 名古屋亚运会](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%20%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%BA%9A%E8%BF%90%E4%BC%9A&t=31&band_rank=7&Refer=top)
1. [张家齐大大方方谈钱](https://s.weibo.com//weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%E8%B0%88%E9%92%B1%23&t=31&band_rank=8&Refer=top)
1. [张家齐 你和我妈一样篡改记忆](https://s.weibo.com//weibo?q=%E5%BC%A0%E5%AE%B6%E9%BD%90%20%E4%BD%A0%E5%92%8C%E6%88%91%E5%A6%88%E4%B8%80%E6%A0%B7%E7%AF%A1%E6%94%B9%E8%AE%B0%E5%BF%86&t=31&band_rank=9&Refer=top)
1. [华鼎奖提名名单](https://s.weibo.com//weibo?q=%E5%8D%8E%E9%BC%8E%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95&t=31&band_rank=10&Refer=top)
1. [国乒 最后一届亚运](https://s.weibo.com//weibo?q=%E5%9B%BD%E4%B9%92%20%E6%9C%80%E5%90%8E%E4%B8%80%E5%B1%8A%E4%BA%9A%E8%BF%90&t=31&band_rank=11&Refer=top)
1. [2岁娃疑连吃8个月银鳕鱼汞中毒](https://s.weibo.com//weibo?q=%232%E5%B2%81%E5%A8%83%E7%96%91%E8%BF%9E%E5%90%838%E4%B8%AA%E6%9C%88%E9%93%B6%E9%B3%95%E9%B1%BC%E6%B1%9E%E4%B8%AD%E6%AF%92%23&t=31&band_rank=12&Refer=top)
1. [王楚钦虽一金未得仍当得起一个赞](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%99%BD%E4%B8%80%E9%87%91%E6%9C%AA%E5%BE%97%E4%BB%8D%E5%BD%93%E5%BE%97%E8%B5%B7%E4%B8%80%E4%B8%AA%E8%B5%9E%23&t=31&band_rank=13&Refer=top)
1. [涨薪意识](https://s.weibo.com//weibo?q=%E6%B6%A8%E8%96%AA%E6%84%8F%E8%AF%86&t=31&band_rank=14&Refer=top)
1. [深圳一街道办深夜打麻将实为视觉误差](https://s.weibo.com//weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E8%A1%97%E9%81%93%E5%8A%9E%E6%B7%B1%E5%A4%9C%E6%89%93%E9%BA%BB%E5%B0%86%E5%AE%9E%E4%B8%BA%E8%A7%86%E8%A7%89%E8%AF%AF%E5%B7%AE%23&t=31&band_rank=15&Refer=top)
1. [王楚钦时代没结束林诗栋时代加速开启](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%97%B6%E4%BB%A3%E6%B2%A1%E7%BB%93%E6%9D%9F%E6%9E%97%E8%AF%97%E6%A0%8B%E6%97%B6%E4%BB%A3%E5%8A%A0%E9%80%9F%E5%BC%80%E5%90%AF%23&t=31&band_rank=16&Refer=top)
1. [中国女子百米接力金牌](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E7%99%BE%E7%B1%B3%E6%8E%A5%E5%8A%9B%E9%87%91%E7%89%8C%23&t=31&band_rank=17&Refer=top)
1. [刘欢亲弟弟刘啸声音太像刘欢](https://s.weibo.com//weibo?q=%E5%88%98%E6%AC%A2%E4%BA%B2%E5%BC%9F%E5%BC%9F%E5%88%98%E5%95%B8%E5%A3%B0%E9%9F%B3%E5%A4%AA%E5%83%8F%E5%88%98%E6%AC%A2&t=31&band_rank=18&Refer=top)
1. [巴黎时装周](https://s.weibo.com//weibo?q=%E5%B7%B4%E9%BB%8E%E6%97%B6%E8%A3%85%E5%91%A8&t=31&band_rank=19&Refer=top)
1. [何猷君妈妈感谢奚梦瑶生了2个小孩](https://s.weibo.com//weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A6%88%E5%A6%88%E6%84%9F%E8%B0%A2%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%94%9F%E4%BA%862%E4%B8%AA%E5%B0%8F%E5%AD%A9%23&t=31&band_rank=20&Refer=top)
1. [林诗栋金牌](https://s.weibo.com//weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E9%87%91%E7%89%8C%23&t=31&band_rank=22&Refer=top)
1. [王楚钦vs林诗栋](https://s.weibo.com//weibo?q=%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9E%97%E8%AF%97%E6%A0%8B&t=31&band_rank=23&Refer=top)
1. [李蠕蠕收入比娱乐圈很多人高](https://s.weibo.com//weibo?q=%23%E6%9D%8E%E8%A0%95%E8%A0%95%E6%94%B6%E5%85%A5%E6%AF%94%E5%A8%B1%E4%B9%90%E5%9C%88%E5%BE%88%E5%A4%9A%E4%BA%BA%E9%AB%98%23&t=31&band_rank=24&Refer=top)
1. [高涵亚运乒乓解说风波](https://s.weibo.com//weibo?q=%E9%AB%98%E6%B6%B5%E4%BA%9A%E8%BF%90%E4%B9%92%E4%B9%93%E8%A7%A3%E8%AF%B4%E9%A3%8E%E6%B3%A2&t=31&band_rank=25&Refer=top)
1. [邓亚萍称王楚钦压力更大](https://s.weibo.com//weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E7%A7%B0%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8E%8B%E5%8A%9B%E6%9B%B4%E5%A4%A7%23&t=31&band_rank=26&Refer=top)
1. [何猷君妈妈感谢奚梦瑶](https://s.weibo.com//weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A6%88%E5%A6%88%E6%84%9F%E8%B0%A2%E5%A5%9A%E6%A2%A6%E7%91%B6%23&t=31&band_rank=27&Refer=top)
1. [蒯曼首战亚运夺3金](https://s.weibo.com//weibo?q=%23%E8%92%AF%E6%9B%BC%E9%A6%96%E6%88%98%E4%BA%9A%E8%BF%90%E5%A4%BA3%E9%87%91%23&t=31&band_rank=28&Refer=top)
1. [田曦薇 华鼎奖提名](https://s.weibo.com//weibo?q=%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%8D%8E%E9%BC%8E%E5%A5%96%E6%8F%90%E5%90%8D&t=31&band_rank=29&Refer=top)
1. [无可替代](https://s.weibo.com//weibo?q=%E6%97%A0%E5%8F%AF%E6%9B%BF%E4%BB%A3&t=31&band_rank=30&Refer=top)
1. [侯英超谈王楚钦银牌](https://s.weibo.com//weibo?q=%23%E4%BE%AF%E8%8B%B1%E8%B6%85%E8%B0%88%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%93%B6%E7%89%8C%23&t=31&band_rank=31&Refer=top)
1. [短视频榨出穷人唯一还值钱的东西](https://s.weibo.com//weibo?q=%E7%9F%AD%E8%A7%86%E9%A2%91%E6%A6%A8%E5%87%BA%E7%A9%B7%E4%BA%BA%E5%94%AF%E4%B8%80%E8%BF%98%E5%80%BC%E9%92%B1%E7%9A%84%E4%B8%9C%E8%A5%BF&t=31&band_rank=32&Refer=top)
1. [邓亚萍说林诗栋压着王楚钦打](https://s.weibo.com//weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%AF%B4%E6%9E%97%E8%AF%97%E6%A0%8B%E5%8E%8B%E7%9D%80%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%23&t=31&band_rank=33&Refer=top)
1. [麻袋装礼物被嘲笑后反转](https://s.weibo.com//weibo?q=%E9%BA%BB%E8%A2%8B%E8%A3%85%E7%A4%BC%E7%89%A9%E8%A2%AB%E5%98%B2%E7%AC%91%E5%90%8E%E5%8F%8D%E8%BD%AC&t=31&band_rank=34&Refer=top)
1. [程靖淇说舆论对王楚钦是种消耗](https://s.weibo.com//weibo?q=%23%E7%A8%8B%E9%9D%96%E6%B7%87%E8%AF%B4%E8%88%86%E8%AE%BA%E5%AF%B9%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%98%AF%E7%A7%8D%E6%B6%88%E8%80%97%23&t=31&band_rank=35&Refer=top)
1. [林诗栋赢在了哪](https://s.weibo.com//weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%B5%A2%E5%9C%A8%E4%BA%86%E5%93%AA%23&t=31&band_rank=36&Refer=top)
1. [经济学家担心恩格斯停顿重现](https://s.weibo.com//weibo?q=%E7%BB%8F%E6%B5%8E%E5%AD%A6%E5%AE%B6%E6%8B%85%E5%BF%83%E6%81%A9%E6%A0%BC%E6%96%AF%E5%81%9C%E9%A1%BF%E9%87%8D%E7%8E%B0&t=31&band_rank=37&Refer=top)
1. [丹顶鹤耍流氓被押送回去](https://s.weibo.com//weibo?q=%E4%B8%B9%E9%A1%B6%E9%B9%A4%E8%80%8D%E6%B5%81%E6%B0%93%E8%A2%AB%E6%8A%BC%E9%80%81%E5%9B%9E%E5%8E%BB&t=31&band_rank=38&Refer=top)
1. [终于理解爸爸为何对人有怨言](https://s.weibo.com//weibo?q=%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E7%88%B8%E7%88%B8%E4%B8%BA%E4%BD%95%E5%AF%B9%E4%BA%BA%E6%9C%89%E6%80%A8%E8%A8%80&t=31&band_rank=39&Refer=top)
1. [SpaceX星舰首次尝试入轨失败](https://s.weibo.com//weibo?q=%23SpaceX%E6%98%9F%E8%88%B0%E9%A6%96%E6%AC%A1%E5%B0%9D%E8%AF%95%E5%85%A5%E8%BD%A8%E5%A4%B1%E8%B4%A5%23&t=31&band_rank=40&Refer=top)
1. [夫妻把娃丢出租屋每月转几千生活费](https://s.weibo.com//weibo?q=%23%E5%A4%AB%E5%A6%BB%E6%8A%8A%E5%A8%83%E4%B8%A2%E5%87%BA%E7%A7%9F%E5%B1%8B%E6%AF%8F%E6%9C%88%E8%BD%AC%E5%87%A0%E5%8D%83%E7%94%9F%E6%B4%BB%E8%B4%B9%23&t=31&band_rank=41&Refer=top)
1. [76人首发五虎](https://s.weibo.com//weibo?q=76%E4%BA%BA%E9%A6%96%E5%8F%91%E4%BA%94%E8%99%8E&t=31&band_rank=42&Refer=top)
1. [中国男子百米接力金牌](https://s.weibo.com//weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E7%99%BE%E7%B1%B3%E6%8E%A5%E5%8A%9B%E9%87%91%E7%89%8C%23&t=31&band_rank=43&Refer=top)
1. [刘学义回复南客](https://s.weibo.com//weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%9B%9E%E5%A4%8D%E5%8D%97%E5%AE%A2%23&t=31&band_rank=44&Refer=top)
1. [华鼎奖](https://s.weibo.com//weibo?q=%E5%8D%8E%E9%BC%8E%E5%A5%96&t=31&band_rank=45&Refer=top)
1. [王楚钦曾表示自己正在补基础](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9B%BE%E8%A1%A8%E7%A4%BA%E8%87%AA%E5%B7%B1%E6%AD%A3%E5%9C%A8%E8%A1%A5%E5%9F%BA%E7%A1%80%23&t=31&band_rank=46&Refer=top)
1. [马龙澳网跨界打网球](https://s.weibo.com//weibo?q=%E9%A9%AC%E9%BE%99%E6%BE%B3%E7%BD%91%E8%B7%A8%E7%95%8C%E6%89%93%E7%BD%91%E7%90%83&t=31&band_rank=47&Refer=top)
1. [兰香如故韩粱被冻死了](https://s.weibo.com//weibo?q=%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%9F%A9%E7%B2%B1%E8%A2%AB%E5%86%BB%E6%AD%BB%E4%BA%86&t=31&band_rank=48&Refer=top)
1. [王曼昱蒯曼11比0](https://s.weibo.com//weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%92%AF%E6%9B%BC11%E6%AF%940%23&t=31&band_rank=49&Refer=top)
1. [穆祉丞巴黎走秀新中式造型](https://s.weibo.com//weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B7%B4%E9%BB%8E%E8%B5%B0%E7%A7%80%E6%96%B0%E4%B8%AD%E5%BC%8F%E9%80%A0%E5%9E%8B%23&t=31&band_rank=50&Refer=top)

<!-- END WEIBO -->

历史归档 [./archives/weibo-search](./archives/weibo-search)

## License

[trending-in-one/](https://github.com/cxyfreedom/trending-in-one) 的源码使用 MIT License 发布。具体内容请查看
[LICENSE](./LICENSE) 文件。
