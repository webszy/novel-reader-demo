<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
function initAds(){
  function getNativeAd() {
    const nativeAd  = window.ppsads.createNativeAd({
      slotId: "testu7m3hc4gvm"
    });
    nativeAd.onLoad((list)=>{
      console.log('原生广告 List',list)
    })
    nativeAd.onError((e)=>{
      console.log('原生广告 error',e)
    })
    return {
      instance:nativeAd,
      load:nativeAd.load,
      show:nativeAd.reportAdShow,
      click: nativeAd.reportAdClick,
      close:nativeAd.reportAdClose,
      onClick:nativeAd.onAdClick,
      download:nativeAd.startDownload,
      destroy:nativeAd.destroy
    }
  }
  function getBannerAd (){
    return {
      load:()=>{
        let container
        if(document.getElementById('bannerAd')){
          container = document.getElementById('bannerAd')
        } else {
          container = document.createElement('div')
          container.id='bannerAd'
          document.body.appendChild(container)
        }

        const bannerAd = window.ppsads.createBannerAd({
          slotId: "testw6vs28auh3",
          width: "360",
          height: "50",
          container,
        });
        bannerAd.onLoad((list)=>{
          console.log('banner广告 List',list)
        })
        bannerAd.onError((e)=>{
          console.log('banner广告 error',e)
        })
        bannerAd.load()
      },
      destroy:()=>{
        document.getElementById('bannerAd').remove()
        bannerAd.destroy()
      }
    }
  }
  function getRewardAd(){
    const rewardAd = window.ppsads.createRewardAd({
      slotId: "testx9dtjwj8hp"
    });
    rewardAd.onLoad((list)=>{
      console.log('激励 List',list)
    })
    rewardAd.onError((e)=>{
      console.log('激励 error',e)
    })
    return {
      instance:rewardAd,
      load:rewardAd.load,
      destroy:rewardAd.destroy,
      isLoaded:rewardAd.isLoaded,
      show:rewardAd.show,
      onClose:rewardAd.onClose,
      onReward:rewardAd.onReward,
      onComplete:rewardAd.onComplete
    }
  }
  function getInterstitialAd(){
    const interstitialAd = window.ppsads.createRewardAd({
      slotId: "teste9ih9j0rc3"
    })
    interstitialAd.onLoad((list)=>{
      console.log('插屏 List',list)
    })
    interstitialAd.onError((e)=>{
      console.log('插屏 error',e)
    })
    return {
      instance:interstitialAd,
      load:interstitialAd.load,
      destroy:interstitialAd.destroy,
      isLoaded:interstitialAd.isLoaded,
      show:interstitialAd.show,
      onClose:interstitialAd.onClose,
      onShow:interstitialAd.onShow,
    }
  }
  const _ad = {
    native:getNativeAd(),
    banner: getBannerAd(),
    reward:getRewardAd(),
    interstitial:getInterstitialAd()
  }
  window.dispatchEvent(new CustomEvent('ad-ready',{detail:_ad}))
  window._ad = _ad
}
export default {
  name: 'App',
  beforeCreate() {
      // window.ppsads.ready(()=>{
      //   console.log('ad is on ready')
      //   initAds()
      // })
    window.system.onmessage = function(data) {
      console.log('message received: ' + data)
    }
    window.system.postMessage('hello')
  },
  methods:{


  }
}
</script>

<style>
#app {

}
</style>
