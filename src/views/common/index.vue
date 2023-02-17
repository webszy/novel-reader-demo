<template>
<div class="bg">
<!--    <div class="col-12">-->
<!--        <el-carousel :interval="3000" type="card" height="150px" indicator-position="none">-->
<!--            <el-carousel-item v-for="(item,index) in books" :key="index" class="carousel_item">-->
<!--                <router-link :to="{name:'read',params:{name:item.title}}">-->
<!--                    <van-image style=" height: 124px;width:93px" :src="item.cover" fit="fill"></van-image>-->
<!--                </router-link>-->
<!--            </el-carousel-item>-->
<!--        </el-carousel>-->
<!--    </div>-->
    <div style="background-color:white;margin-bottom:20px">
        <div class="col-12 topic_bar">
            <h5 class="topic col-9">小说推荐</h5>
            <span class="col-3 more"><router-link to="/recommended">更多</router-link><van-icon name="arrow" /></span>
        </div>
        <van-grid :column-num="3" :border="false">
            <van-grid-item v-for="(item,index) in books" :key="index">
                <router-link :to="{name:'read',params:{name:item.title}}">
                    <van-image style=" height:110px;width:95px" :src="item.cover" fit="fill"></van-image>
                    <span class="bookName">{{ item.title }}</span>
                </router-link>
            </van-grid-item>
        </van-grid>
    </div>
    <div style="background-color:white;margin-bottom:20px">
        <div class="col-12 topic_bar">
            <h5 class="topic col-9">排行榜</h5>
            <span class="col-3 more"><router-link to="/ranking">更多</router-link><van-icon name="arrow" /></span>
        </div>
        <div class="col-12">
            <van-tabs type="card" style="padding:0;">
                <van-tab title="热销榜">
                    <van-swipe :loop="false" :width="110" :height="160" :show-indicators="false">
                        <van-swipe-item v-for="(item,index) in books" :key="index" class="swipe_item">
                            <van-image style="height:110px;width:95px" :src="item.cover" fit="fill"></van-image>
                            <span class="bookName">{{ item.title }}</span>
                        </van-swipe-item>
                    </van-swipe>
                </van-tab>
                <van-tab title="风云榜">
                    <van-swipe :loop="false" :width="110" :height="160" :show-indicators="false">
                        <van-swipe-item v-for="(item,index) in books" :key="index" class="swipe_item">
                            <van-image style="height:110px;width:95px" :src="item.cover" fit="fill"></van-image>
                            <span class="bookName">{{ item.title }}</span>
                        </van-swipe-item>
                    </van-swipe>
                </van-tab>
                <van-tab title="签约榜">
                    <van-swipe :loop="false" :width="110" :height="160" :show-indicators="false">
                        <van-swipe-item v-for="(item,index) in books" :key="index" class="swipe_item">
                            <van-image style="height:110px;width:95px" :src="item.cover" fit="fill"></van-image>
                            <span class="bookName">{{ item.title }}</span>
                        </van-swipe-item>
                    </van-swipe>
                </van-tab>
                <van-tab title="推荐榜">
                    <van-swipe :loop="false" :width="110" :height="160" :show-indicators="false">
                        <van-swipe-item v-for="(item,index) in books" :key="index" class="swipe_item">
                            <van-image style="height:110px;width:95px" :src="item.cover" fit="fill"></van-image>
                            <span class="bookName">{{ item.title }}</span>
                        </van-swipe-item>
                    </van-swipe>
                </van-tab>
            </van-tabs>
        </div>
    </div>
    <div style="background-color:white;margin-bottom:20px">
        <div class="col-12 topic_bar">
            <h5 class="topic col-9">畅销完本</h5>
            <span class="col-3 more"><router-link to="/hot">更多</router-link><van-icon name="arrow" /></span>
        </div>
        <div class="col-12">
            <van-card v-for="(item,index) in books" :key="index">
                <router-link :to="{name:'read',params:{name:item.title}}" slot="title">
                    <p class="title">{{ item.title }}</p>
                </router-link>
                <router-link :to="{name:'read',params:{name:item.title}}" slot="desc">
                    <p class="desc">{{ item.intro }}</p>
                </router-link>
                <div slot="tags" class="ifo">
                    <span class="author"><van-icon name="contact" />{{ item.author }}</span>
                    <div>
                        <van-tag plain>仙侠</van-tag>
                        <van-tag plain type="primary">291.62万字</van-tag>
                    </div>
                </div>
                <router-link :to="{name:'read',params:{name:item.title}}" slot="thumb" >
                    <van-image style=" height:110px;width:80px" :src="item.cover" fit="fill"></van-image>
                </router-link>
            </van-card>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            books:null,
        }
    },
    mounted(){
        this.bookIfoTotal();
        this.showNativeAd()
    },
    methods:{
        bookIfoTotal(){
            this.books = [
              {
                "title": "NBA万界主教",
                "author": "远古莱德",
                "score": "0.0",
                "class": [
                  "体育",
                  "篮球运动"
                ],
                "words": 227688,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015711046/180\n",
                "intro": "\n                        \n                            \n                                　　万界主教，传奇一生。　　PS:新书求收藏求推荐。\n                            \n                        \n                    "
              },
              {
                "title": "你跑不过我吧",
                "author": "想枕头的瞌睡",
                "score": "0.0",
                "class": [
                  "都市",
                  "都市异能"
                ],
                "words": 260343,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015412788/180\n",
                "intro": "\n                        \n                            \n                                　　记者：请问慕警官，影响一个城市破案率最根本的原因是什么？　　慕远：我。\n                            \n                        \n                    "
              },
              {
                "title": "太上执符",
                "author": "第九天命",
                "score": "0.0",
                "class": [
                  "仙侠",
                  "神话修真"
                ],
                "words": 224832,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015845623/180\n",
                "intro": "\n                        \n                            \n                                　　问苍茫大地，何处容我人族！他从未想过自己来到洪荒神话世界，更不会想到人族面对太古百族如此苟且！直到他看到天空中的十个太阳，并且对着太阳射了一箭！那一年，他以为握住的只是一颗种子，谁知道却是整个世界。ps：杨三阳穿越了，并且发现自己手中正持着一把弓，天空中悬浮着十个太阳……还有一个人持着大钟怒火冲霄的看着自己，各位瓜友：要不要射出去，在线急等……（这是一个人族在洪荒世界中苦苦求生的故事）\n                            \n                        \n                    "
              },
              {
                "title": "影视先锋",
                "author": "龙升云霄",
                "score": "0.0",
                "class": [
                  "科幻",
                  "时空穿梭"
                ],
                "words": 205129,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015781093/180\n",
                "intro": "\n                        \n                            \n                                　　上辈子是个警察的林耀，没想到这辈子也是个警察，还是个卧底警察，卧底在这个融合了无数经典电视剧，经典电影的特殊世界内。寄语：死亡非是终结，亦或是无限开端\n                            \n                        \n                    "
              },
              {
                "title": "战国万人敌",
                "author": "鲨鱼禅师",
                "score": "0.0",
                "class": [
                  "历史",
                  "架空历史"
                ],
                "words": 298895,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015543054/180\n",
                "intro": "\n                        \n                            \n                                　　故事概要：一个战斗力高达八千的工头，在一个平行世界的战国时代，带着一帮土著小弟从花果山一路砍到南天门！　　列国纷争，太乱了，统一哈！　　书友群：战国万人迷（836165734）。\n                            \n                        \n                    "
              },
              {
                "title": "时空长河的旅者",
                "author": "诸生浮屠",
                "score": "0.0",
                "class": [
                  "科幻",
                  "时空穿梭"
                ],
                "words": 209242,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015547908/180\n",
                "intro": "\n                        \n                            \n                                　　   这一路走来，我历尽艰辛饱受苦难，无数次死里逃生。   我看见有人背信弃义两面三刀，我看见有人贪图享乐抛妻弃子，我看见有人自甘堕落毫无廉耻，我看见有人自私唯我一言杀人，我直视着人性的恶意，那些贪婪、自私、傲慢、荒淫、残暴、妒忌、怠惰，试图从那些不可名状的恐怖存在支配下拯救那些可怜的人。   但并不是每一次我都能成功……   我在黑暗中前行，一点一点明白自己到底应该如何活着，活下去。   我是游离于生与死、时间与空间之外的监察者。   但是我更喜欢你们称呼我为——旅者。  【诸生浮屠】著。\n                            \n                        \n                    "
              },
              {
                "title": "朔明",
                "author": "特别白",
                "score": "0.0",
                "class": [
                  "历史",
                  "两宋元明"
                ],
                "words": 220667,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015078978/180\n",
                "intro": "\n                        \n                            \n                                　　西北边镇的年轻人，明末的风云变幻，刀弓火器和行商贸易，家国的恩怨情仇，都从戈壁滩上的一次冒险开始......\n                            \n                        \n                    "
              },
              {
                "title": "洪荒历",
                "author": "zhttty",
                "score": "0.0",
                "class": [
                  "奇幻",
                  "历史神话"
                ],
                "words": 277893,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1011940368/180\n",
                "intro": "\n                        \n                            \n                                　　那是发生在很久很久很久之前发生的故事……　　那是人类沉沦在无边血色中，叫天天不应，叫地地不灵，求生不得，求死不能的年代……　　那一天，一个名为盘的部落，诞生了一个名为古的婴儿……　　那一天，一个名为鸿的部落，诞生了一个名为钧的婴儿……　　那一天，一个名为李的部落中，三兄弟正在苟延残喘……　　那一天，一个名为耶的部落，诞生了……　　那是发生在很久很久很久之前发生的故事……　　那是人类以无穷奋斗，万千牺牲而最终开天辟地的故事，那是……　　洪荒历！\n                            \n                        \n                    "
              },
              {
                "title": "猛卒",
                "author": "高月",
                "score": "0.0",
                "class": [
                  "历史",
                  "两晋隋唐"
                ],
                "words": 271409,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015666538/180\n",
                "intro": "\n                        \n                            \n                                　　这是一个迷失在乱世中的大唐，中原藩镇割据，边疆危机四伏，内忧外患，长安却夜夜笙歌，罗裙慢舞。他是一个独孤的猛卒，鹰镝千里，强悍的游牧勇士闻之丧胆，但大唐却没有他的荣耀。他拔剑茫然，英雄无觅归处。。。。。。\n                            \n                        \n                    "
              },
              {
                "title": "神运仙王",
                "author": "开荒",
                "score": "0.0",
                "class": [
                  "奇幻",
                  "现代魔法"
                ],
                "words": 189078,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015782670/180\n",
                "intro": "\n                        \n                            \n                                　　原穹之界绝代仙王陶然穿越阿美利加联邦合众国，借体重生，化身安德烈·李·威尔顿斯坦，成为威尔顿斯坦家族众多继承人的一员。\n                            \n                        \n                    "
              },
              {
                "title": "聊斋假太子",
                "author": "哆啦i梦",
                "score": "0.0",
                "class": [
                  "仙侠",
                  "古典仙侠"
                ],
                "words": 239361,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015683115/180\n",
                "intro": "\n                        \n                            \n                                　　神魂天降，李代桃僵。　　你说我一个身穿者怎么就成为了你们的太子了？　　谁研究决定的？　　哼！　　有朝一日刀在手，杀尽天下负我狗！\n                            \n                        \n                    "
              },
              {
                "title": "荣耀的华娱",
                "author": "胖子爱吃炖豆角",
                "score": "0.0",
                "class": [
                  "都市",
                  "娱乐明星"
                ],
                "words": 431336,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015717609/180\n",
                "intro": "\n                        \n                            \n                                　　早上熟睡中的容耀还在沉浸在走上人生巅峰的梦中，一个电话吵醒不但发现自己已经穿越，而且当天一场官非一般大的锅已经哐的一声压在容耀身上。　　是她的出现给他昏暗混乱即将崩溃的人生带来一缕光明。　　然后莫名其妙的成为他的老板，他成为她的助理。　　而她，还是海报中的她，梦中的她。　　这就足够了。　　身为助理的我，默默在她身后，为老板事业成功，我愿披荆斩棘。　　我斩！我劈！　　谁挡着她的路我就要替她扫平一切……　　我扫，我平，我……　　等等！！　　哎我怎么跑前面去了？！　　她才是艺人啊！！　　这不对这！！　　我只想做她的小助理，怎么我人气比她还高了？！　　恩……好吧。　　为了让纯净天真善良美丽的老板，可以永远不用和魑魅魍魉相争，可以不用去和同行勾心斗角。　　让我不止是你的容耀，也让我成为，华娱的荣耀。　　然后……　　这本书会有很多女性角色。（表打我，我很专一的。-_-||）　　\n                            \n                        \n                    "
              },
              {
                "title": "重生之最好时代",
                "author": "九灯和善",
                "score": "0.0",
                "class": [
                  "都市",
                  "都市生活"
                ],
                "words": 263366,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015755915/180\n",
                "intro": "\n                        \n                            \n                                　　曾经年少轻狂在深蓝天空下许下的梦想！　　曾经从窗前走过的明媚少女啊！　　曾梦想仗剑走天涯……　　苏望：愿你出走半生，归来仍是少年　　PS：创建了个新的书友群：595905832\n                            \n                        \n                    "
              },
              {
                "title": "重返洛杉矶",
                "author": "陶良辰",
                "score": "0.0",
                "class": [
                  "都市",
                  "都市生活"
                ],
                "words": 202532,
                "cover": "https://bookcover.yuewen.com/qdbimg/349573/1015808369/180\n",
                "intro": "\n                        \n                            \n                                　　加州理工高材生，被命运一脚踹回七十年代的洛杉矶。　　这年头，王安还很牛，靠打字机富到流油；乔布斯因为没钱退了学，带着简历试图混温饱；盖茨则是个刚上哈佛的帅小伙，满心想着谈恋爱；巴菲特抠抠索索，盯着仓位脸色泛白。　　山中来老虎，称大王又怎样，整个世界被扇到未知道路上。这是一个机会无限，怪才崛起的壮阔年代。　　硅谷、华尔街、好莱坞，哪里有钱赚，哪里就有他的影子......　　-------　　《生在唐人街》、《华尔街传奇》姊妹篇。　　群号：618863420　　走过路过不要错过，大家们请给个收藏～\n                            \n                        \n                    "
              }
            ]
        },
        showNativeAd(){
          if(window._ad){
            window._ad.native.load()
          } else {
            window.addEventListener('ad-ready',({detail})=>{
              detail.native.load()
            })
          }
        }
    }
}
</script>

<style scoped>
.row{
    margin:0;
}
.carousel_item{
    display: flex;
    justify-content:center;
    align-items: center;
}
.col-12>>>.van-grid-item__content--center{
    display:flex;
    flex-direction: column ;
    justify-content: flex-start;
}
.bookName{
    line-height: 18px;
    font-size:12px;
    width:100%;
    text-align: center;
    display: inline-block;
    color:black;
}
.topic_bar{
    display: flex;
}
.topic{
    font-size:15px;
    font-weight:600;
    padding:10px 15px 0 15px;
}
.more{
    display: flex;
    line-height:24px;
    font-size:12px;
    justify-content: center;
    align-items:center;
    color:#999;
}
.bg{
    background-color:whitesmoke;
    padding-bottom:1px;
}
.swipe_item{
    display: flex;
    flex-direction: column ;
    justify-content: flex-start;
    padding: 5px 10px;
}
.col-12>>>.van-tabs__wrap {
    margin-bottom:10px;
}
.van-card{
    background-color: #fff;
    border-bottom: 1px solid #f5f7fa;
    height:125px;
}
.ifo{
    display:flex;
    justify-content: space-between;
}
.title{
    font-weight:600;
    font-size:14px;
    margin-bottom:8px;
    color:black;
}
.desc{
    color:#999;
    margin-bottom: 8px;
    font-size:12px;
    line-height:20px;
    max-height:60px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.author{
    color:#999;
    font-size:12px;
    display:flex;
    align-items:center;
    white-space: nowrap;
    max-width:80px;
    text-overflow: ellipsis;
}
.van-image{
    box-shadow: 0 1px 6px rgba(0,0,0,.35), 0 0 5px #f9f2e9 inset;
}
</style>