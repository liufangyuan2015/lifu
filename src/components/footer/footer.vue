<template>
  <div class="footer">
    <ul >
      <li id="home" :class="{active:choosepage==='home'}" @click="choose('home')">
        <router-link to="/home" >
          <span class="icon icon1" id="iconhome" ></span>
          <span >首页</span>
        </router-link>
      </li>
      <li id="allproducts" :class="{active:choosepage==='allproducts'}" @click="choose('allproducts')" >
        <router-link to="/allproducts" >
          <span class="icon icon2" id="iconallproducts" ></span>
          <span >全部产品</span>
        </router-link>
      </li>
      <li id="stroll" :class="{active:choosepage==='stroll'}" @click="choose('stroll')" >
        <router-link to="/stroll">
          <span class="icon icon3" id="iconstroll"></span>
          <span>闲逛</span>
        </router-link>
      </li>
      <li id="shopcart" :class="{active:choosepage==='shopcart'}" @click="choose('shopcart')">
        <router-link to="/shopcart">
          <span class="icon icon4" id="iconshopcart"></span>
          <span>购物车</span>
          <div class="life-cart-num radius50"><span class="radius50">1</span></div>
        </router-link>
      </li>
      <li id="center" :class="{active:choosepage==='center'}" @click="choose('center')">
        <router-link to="/center">
          <span class="icon icon5" id="iconcenter"></span>
          <span>账户中心</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data(){
            return {
              choosepage:''
            }
        },
      methods:{
          choose(choosepage){
              this.choosepage=choosepage
//            console.log(this.choosepage)
          }
      }
    }
</script>

<style scoped>
  .active span {
    color: #009c42;
  }
  .life-cart-num {
    position: absolute;
    border: 1px solid #f7b677;
    top: 1%;
    right: 8%;
  }
  .radius50 {
    border-radius: 50%;
  }

  .life-cart-num span {
    background: #f59130;
    display: inline-block;
    /*color: #fff;*/
    font-size: 1.2rem;
    width: 1.6rem;
    height: 1.4rem;
    line-height: 1.4rem;
    border: 2px solid #fff;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .footer{
    padding: 0;
    height: 4.5rem;
    position: fixed;
    bottom: 0;
    z-index: 900;
    width: 100%;
    background: #f8f8f8;
    border-top: .04rem solid #ddd;
  }
  .footer ul li{
    position: relative;
    float: left;
    width: 20%;
    text-align: center;
  }
  .footer ul li a{
    display: block;
    font-size: 1.1rem;
  }
  .footer ul li a .icon{
    display: block;
    height: 3.3rem;
    color: transparent;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28%;
    margin-bottom: -.5rem;
  }
   .icon1{
    background-image: url('home.png');
  }

  .active .icon1{
    background-image: url('home02.png');
  }
  .icon2{
    background-image: url('allproducts.png');
  }
  .active .icon2{
    background-image: url('allproducts02.png');
  }
  .icon3{
    background-image: url('stroll.png');
  }
  .active .icon3{
    background-image: url('stroll02.png');
  }
  .icon4{
    background-image: url('shopcart.png');
  }
  .active .icon4{
    background-image: url('shopcart02.png');
  }
   .icon5{
    background-image: url('center.png');
  }
  .active .icon5{
    background-image: url('center02.png');
  }



</style>
