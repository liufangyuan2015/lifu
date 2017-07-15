<template>
    <div class="main0" ref="main0">
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <div class="main">
          <div class="swipe-wrapper">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(s ,index) in swipe" :key="index">
                <router-link  class="swipe" :to="`/productdetail/${s.productId}`">
                  <img :src="s.url" alt="">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <!--遍历所有的combo-->
          <div class="item-combo " v-for="(combo,index) in combos " :key="index">
            <div class="img-wrap" :style="{height:combo.height}" >
              <img :src="combo.src" :usemap="`#planetmap${index}`" alt="">
              <map :name="`planetmap${index}`" :id="`planetmap${index}`">
                <!--遍历所有的area-->
                <area v-for="(m,index) in combo.map"  :key="index"  :shape="m.rect" :coords="m.coords" href="http://www.baidu.com" alt="">
              </map>
            </div>
          </div>

        </div>
      </mt-loadmore>
    </div>
</template>

<script>
  import loadmore from 'mint-ui/lib/loadmore'
  import swipe from 'mint-ui/lib/swipe'
  import Vue from 'vue'

  Vue.component('mt-loadmore', loadmore);
  Vue.component('mt-swipe', swipe);
  export default {
      data(){
          return {
//            topLoadingText:''
          }
      },
    props:['swipe','combos'],
      methods:{
        loadTop() {
//        ...// 加载更多数据
          this.$refs.loadmore.onTopLoaded({
//            status:{
              topPullText:'',
              topDropText:'',
              topLoadingText:'loading'
//            }
//            topLoadingText:''
          });
        },
        loadBottom() {
//        ...// 加载更多数据
//          this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
        }
      }
  }
</script>

<style scoped>
  .main0 {
    /*padding-top: 90px;*/
    height: 100%;
    box-sizing: border-box;
  }

  .main {
    /*height: 1000px;*/
  }

  .swipe-wrapper {
    height: 250px;
  }

  .swipe img {
    width: 100%;
    height: 100%;
  }

  .mint-swipe-indicators .is-active {
    background-color: #89BE48 !important;
  }

  .wiper-pagination-bullet-active {
    background-color: #89BE48 !important;
  }

  .item-combo {

    margin-bottom: 12px;
  }

  .item-combo0 {
    height: 90px;
  }

  .item-combo img {
    width: 100%;
    height: 100%;
  }

  .item-combo1 {
    height: 150px;
  }
</style>
