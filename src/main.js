import Vue from 'vue'
import App from './App.vue'
import router from  './router'
import store from './store'
import {Card,Sticky,Icon,Search,Grid,GridItem,
  Tabs,Tab,Swipe,SwipeItem,Image,List,Tag,Cell,
  Button,ActionSheet,Popup,PullRefresh,Rate
} from 'vant'
import axios from "axios";
import  'vant/es/card/index.css'
import  'vant/es/sticky/index.css'
import  'vant/es/icon/index.css'
import  'vant/es/search/index.css'
import  'vant/es/grid/index.css'
import  'vant/es/grid-item/index.css'
import  'vant/es/tabs/index.css'
import  'vant/es/tab/index.css'
import  'vant/es/swipe/index.css'
import  'vant/es/swipe-item/index.css'
import  'vant/es/image/index.css'
import  'vant/es/list/index.css'
import  'vant/es/tag/index.css'
import  'vant/es/cell/index.css'
import  'vant/es/button/index.css'
import  'vant/es/action-sheet/index.css'
import  'vant/es/popup/index.css'
import  'vant/es/pull-refresh/index.css'
import 'vant/es/rate/index.css'
import '@/assets/main.css'
Vue.config.productionTip = false

Vue.use(Card)
Vue.use(Sticky)
Vue.use(Search)
Vue.use(Icon)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Image)
Vue.use(List)
Vue.use(Tag)
Vue.use(Cell)
Vue.use(Button)
Vue.use(ActionSheet)
Vue.use(Popup)
Vue.use(PullRefresh)
Vue.use(Rate)
Vue.prototype.$http = axios.create()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
