<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <div class="header">
        <div class="header-top">
          <router-link to="/allproducts">
            <span ></span>
          </router-link>
          <!--<a href="#" >-->
            <!---->
          <!--</a>-->
        </div>
        <div class="header-bottom" ref="nav">
          <ul class="nav">
            <li>
              <router-link to="/home/homepage">首页</router-link>
            </li>
            <li>
              <router-link to="/home/newproducts">新品</router-link>
            </li>
            <li>
              <router-link to="/home/housework">家务</router-link>
            </li>
            <li>
              <router-link to="">下厨</router-link>
            </li>
            <li>
              <router-link to="">家居服</router-link>
            </li>
            <li>
              <router-link to="">生活</router-link>
            </li>
            <li>
              <router-link to="">软装</router-link>
            </li>
            <li>
              <router-link to="">床品</router-link>
            </li>
            <li>
              <router-link to="">工作和旅行</router-link>
            </li>
            <li>
              <router-link to="">了解LifeVC</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view :swipe="swipe" :combos="combos" :newproducts="newproducts"></router-view>
    <el-footer></el-footer>
  </div>
</template>

<script>
  import BScroll from  'better-scroll'
  import footer from '../footer/footer.vue'
  import axios from 'axios'
  export default {
      data(){
          return {
            swipe:[],
            combos:[],
            newproducts:[]
          }
      },
    components:{
      'el-footer':footer
    },
    created(){

      this.$nextTick(() => {
        new BScroll(this.$refs.nav, {
          click: true,
          scrollX: true
        })
      }),
      axios.get('/api2/home')
        .then(response=>{
            var result=response.data.data
            var homepage=result.homepage
            this.newproducts=result.newproducts
            this.swipe=homepage.swipe
            this.combos=homepage.combos
            console.log(this.newproducts)
        })


    },
    methods:{

    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }
  .header-wrapper{
    height: 8rem;
  }
  .header {
    position: fixed;
    width: 100%;
    height: 8rem;
    z-index: 100;
    background-color: white;
  }

  .header-top {
    width: 100%;
    height: 4rem;
    background-image: url('header.png');
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: 50%;
    background-color: #89BE48;
  }

  .header-top span {
    background-image: url("search.png");
    background-repeat: no-repeat;
    background-size: 45%;
    background-position: 50%;
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    display: inline-block;
    width: 3.66666666rem;
    height: 3.666666666rem;
  }

  .header-bottom {
    width: 100%;
    height: 4rem;
  }

  .header-bottom .nav {
    height: 4rem;
    white-space: nowrap;
    width: 800px;
  }

  .header-bottom .nav li {
    float: left;
    width: 80px;
    line-height: 4rem;
    height: 4rem;
    text-align: center;
    box-sizing: border-box;
  }

  .header-bottom .nav li a {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 1.20rem;
    border-bottom: 2px solid #ddd;
  }
  .active{
    color: #89BE48;
    border-bottom-color:#89BE48 !important;
  }

</style>
