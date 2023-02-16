<template>
<div>
    <div class="col-12 top">
        <van-icon name="arrow-left" @click="back"/><p>{{current}}</p>
    </div>
    <div class="col-12 dir">
        <p>目录</p>
        <p class="col-12">共{{sum}}章</p>
    </div>
    <div>
        <p class="sup">{{subTitle}}</p>
        <div class="col-12">
            <van-list>
                <van-cell
                    v-for="(item,index) in chapter"
                    :key="index"
                    :title="item.title"
                    :to="{name:'detail',params:{name:current,volume:subTitle,chapter:item.title}}"
                />
            </van-list>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            current:this.$route.params.name,
            chapter:[],
            sum:0,
            subTitle:''
        }
    },
    filters:{
        format:function(value){
            value = value.substr(0,value.length-5);
            return value;
        }
    },
    created(){
        this.hiddenHeader();
    },
    mounted(){
        this.chapterList();
    },
    destroyed(){
        this.showHeader();
    },
    methods:{
        chapterList(){
          this.$http.get(`/books/${this.current}/data.json`)
              .then(({data})=>{
                this.sum = data.sum
                this.chapter = data.list
                this.subTitle = data.title
              })
        },
        hiddenHeader(){
            this.$store.commit('hiddenHeader',false);
        },
        showHeader(){
            this.$store.commit('hiddenHeader',true);
        },
        back(){
            this.$router.push({name:'read',params:{name:this.current}});
        },
    }
}
</script>

<style scoped>
.row{
    margin:0;
}
.top{
    display: flex;
    align-items:center;
}
.top p{
    margin:10px 0;
    padding-left:20px;
}
.dir{
    padding:0;
}
.dir p:nth-child(1){
    text-align: center;
    border-bottom: 1px solid red;
    margin:0;
    font-size:14px;
    line-height:2em;
    color:red;
}
.dir p:nth-child(2){
    margin:0;
    font-weight:800;
    line-height:3em;
    font-size:15px;
    text-indent: 1em;
}
.sup{
    background-color: whitesmoke;
    margin:0;
    padding:0 30px;
    font-size:12px;
    line-height:36px;
    color:#999;
}
</style>