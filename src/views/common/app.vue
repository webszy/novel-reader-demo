<template>
<div style="height:100%">
     <AHead v-if="this.$store.state.header_show"></AHead>
     <transition mode="out-in">
          <router-view></router-view>
     </transition>
     <AFoot v-if="this.$store.state.footer_show"></AFoot>
</div>
</template>

<script>
import AFoot from './footer.vue'
import AHead from './header.vue'
export default{
     components:{
          AFoot,
          AHead,
     },
}
</script>

<style>
.v-enter,.v-leave-to{
     opacity: 0;
     transform: translate3d(100px,0,100px);
} 
.v-enter-active,.v-leave-active{
     transition: all 0.2s;
}
</style>
