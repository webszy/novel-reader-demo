<template>
<div :class="{'bg':true,'black':protect}">
    <van-action-sheet v-model="show" >
        <div class="row" style="height:50px;background:black">
            <van-icon name="arrow-left" @click="back" class="col-4"/>
            <van-icon name="wap-nav" @click="listShow = !listShow" class="col-4"/>
            <van-icon name="closed-eye" @click="protect = !protect" v-if="!protect" class="col-4"/>
            <van-icon name="eye-o" @click="protect = !protect" v-if="protect" class="col-4"/>
        </div>
    </van-action-sheet>
    <van-popup v-model="listShow" position="left" :style="{ width: '70%',height:'100%' }">
        <div class="col-12 dir">
            <p>目录</p>
        </div>
        <div>
            <p class="sup">{{ subTitle }}</p>
            <div class="col-12">
                <van-list>
                    <van-cell
                        v-for="(item,index) in list"
                        :key="index"
                        :title="item.title"
                        :to="{name:'detail',params:{name:current,volume:subTitle,chapter:item.title}}"
                    />
                </van-list>
            </div>
        </div>
    </van-popup>
    <van-sticky>
        <p class="col-12 top" :class="{'black':protect,'white':protect}">{{ chapter|format }}</p>
    </van-sticky>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loosing-text="释放加载上一章" pulling-text="下拉加载上一章">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
        >
            <div class="content" @click="show = !show">
                <h4 class="col-12" :class="{'white':protect}">{{ chapter|format }}</h4>
                <p class="col-12" v-for="(text,index) in content" :key="index" :class="{'white':protect}">{{ text }}</p>
            </div>
        </van-list>
    </van-pull-refresh>
</div>
</template>

<script>
export default {
    data(){
        return {
            protect:false,
            current:this.$route.params.name,
            volume:this.$route.params.volume,
            chapter:this.$route.params.chapter,
            show:false,
            listShow:false,
            loading: false,
            finished: false,
            isLoading: false,
            content:[],
            list:[],
            subTitle:''
        }
    },
    watch:{
        $route(to,from){
            this.current = this.$route.params.name,
            this.volume = this.$route.params.volume,
            this.chapter = this.$route.params.chapter,
            this.chapterDetail();
        }
    },
    created(){
        this.hiddenHeader();
        this.hiddenFooter();
    },
    mounted(){
        this.chapterDetail();
        this.chapterList();
    },
    destroyed(){
        this.showFooter();
    },
    methods:{
        back(){
            this.$router.push({name:'chapter',params:{name:this.current}})
        },
        chapterList(){
          this.$http.get(`/books/${this.current}/data.json`)
              .then(({data})=>{
                this.list = data.list
                this.subTitle = data.title
              })
            // this.jsp('chapterList',{book:this.current}).then((data)=>{
            //     for(var item in data){
            //         data[item] = this.resort(data[item]);
            //     };
            //     this.list = data;
            // })
        },
        chapterDetail(){

          this.$http.get(`/books/${this.current}/${this.volume}/${this.chapter}.json`)
              .then(({data})=>{
                this.content = data;
              })
            // this.jsp('chapterDetail',{book:this.current,volume:this.volume,chapter:this.chapter}).then((data)=>{
            //     this.content = data;
            // })
        },
        hiddenHeader(){
            this.$store.commit('hiddenHeader',false);
        },
        hiddenFooter(){
            this.$store.commit('hiddenFooter',false);
        },
        showFooter(){
            this.$store.commit('hiddenFooter',true);
        },
        onRefresh() {
            setTimeout(() => {
              const index = this.list.findIndex(e=>e.title == this.chapter)
              if((index-1)>=0){
                this.$router.push({name:'detail',params:{name:this.current,volume:this.subTitle,chapter:this.list[index-1].title}});
              }
              this.isLoading = false;
            }, 500);
        },
        onLoad() {
            setTimeout(()=>{
                window.scrollTo(0,0);
                this.next()
                this.loading = false;
            },1000)
        },
        next(){
          const index = this.list.findIndex(e=>e.title == this.chapter)
          if((index+1)<this.list.length){
            this.$router.push({name:'detail',params:{name:this.current,volume:this.subTitle,chapter:this.list[index+1].title}});
          } else {
            this.finished = true;
          }
        }
    }
}
</script>

<style scoped>
.white{
    color:#999 !important;
}
.black{
    background: none !important;
    background-color: #212529 !important;
}
.van-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
}
.bg{
    background:url('@/assets/img/bg.png') no-repeat;
    background-size: 100% 100%;
    min-height:1000px;
}
.top{
    background:url('@/assets/img/bg.png') no-repeat;
    background-size: 100% 100%;
    height:40px;
    margin:0;
    line-height:40px;
    font-size:12px;
    color:#988153;
}
.content p{
    margin:0;
    font-size:18px;
    line-height: 1.8;
}
.sup{
    background-color: whitesmoke;
    margin:0;
    padding:0 30px;
    font-size:12px;
    line-height:36px;
    color:#999;
}
.dir{
    padding:0;
}
.dir>p{
    text-align: center;
    border-bottom: 1px solid red;
    margin:0;
    font-size:14px;
    line-height:2em;
    color:red;
}
</style>