//导入vue
import Vue from 'vue'

//导入vue-router
import VueRouter from 'vue-router'

//导入自定义的vue组件
import Index from './views/common/index.vue'

//手动安装vue-router
Vue.use(VueRouter)

//创建vue-router对象
const router=new VueRouter({
    mode: 'hash',
    routes:[
        { path:'/',component:Index },
        { path:'/recommended', component: ()=>import(/* webpackChunkName: "recommended" */'./views/recommended/index.vue') },
        { path:'/search', component: ()=>import(/* webpackChunkName: "search" */'./views/search/index.vue') },
        { path:'/ranking',component: ()=>import(/* webpackChunkName: "Ranking" */'./views/ranking/index.vue')  },
        { path:'/hot',component:()=>import(/* webpackChunkName: "hot" */'./views/hot/index.vue') },
        { path:'/book/:name',name:'read',component:()=>import(/* webpackChunkName: "read" */'./views/read/index.vue') },
        { path:'/chapter/:name',name:'chapter',component:()=>import(/* webpackChunkName: "read" */'./views/read/directory.vue') },
        { path:'/book/:name/volume/:volume/chapter/:chapter',name:'detail',component:()=>import(/* webpackChunkName: "read" */'./views/read/read.vue') },
    ]
})

export default router