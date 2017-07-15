<template>
  <div class="user-center">
    <div class="header-wrapper">
      <div class="header">
        <p>账户中心</p>
        <router-link to="/settings">设置</router-link>
      </div>
    </div>
    <div data-v-75c9c97a="" class="acct-user-wrap"><!---->
      <div data-v-75c9c97a="" class="acct-nolog">
        <span data-v-75c9c97a="" class="state">您还未登录</span>
        <div data-v-75c9c97a="" class="btn-entry">
          <a data-v-75c9c97a="" href="#/login" class="font-large">登录</a>
          <span data-v-75c9c97a="" class="split"></span>
          <a data-v-75c9c97a="" href="#/register" class="font-large">注册</a>
        </div>
      </div>
    </div>
    <div data-v-75c9c97a="" class="dashboard-order life-dashboard-order">
      <ul data-v-75c9c97a="">
        <li data-v-75c9c97a="">
          <a data-v-75c9c97a="" href="">
            <span data-v-75c9c97a="" class="item-ico"><!---->
              <span data-v-75c9c97a="" id="ico1"></span>
            </span>
            <span data-v-75c9c97a="" class="item-title">待支付</span>
          </a></li>
        <li data-v-75c9c97a="">
          <a data-v-75c9c97a="" href="">
            <span data-v-75c9c97a="" class="item-ico"><!---->
              <span data-v-75c9c97a="" id="ico2"></span>
            </span>
            <span data-v-75c9c97a="" class="item-title">待发货</span>
          </a>
        </li>
        <li data-v-75c9c97a="">
          <a data-v-75c9c97a="" href="">
            <span data-v-75c9c97a="" class="item-ico"><!---->
              <span data-v-75c9c97a="" id="ico3"></span>
            </span>
            <span data-v-75c9c97a="" class="item-title">待收货</span>
          </a>
        </li>
      </ul>
      <ul data-v-75c9c97a="">
        <li data-v-75c9c97a="">
          <a data-v-75c9c97a="" href="">
            <span data-v-75c9c97a="" class="item-ico"><!---->
              <span data-v-75c9c97a="" id="ico4"></span>
            </span>
            <span data-v-75c9c97a="" class="item-title">待评论</span>
          </a>
        </li>
        <li data-v-75c9c97a="">
          <a data-v-75c9c97a="" href="">
            <span data-v-75c9c97a="" class="item-ico"><!---->
              <span data-v-75c9c97a="" id="ico5"></span>
            </span>
            <span data-v-75c9c97a="" class="item-title">回复</span>
          </a>
        </li>
        <li data-v-75c9c97a="">
          <a data-v-75c9c97a="" href="">
            <span data-v-75c9c97a="" class="item-ico">
              <span data-v-75c9c97a="" id="ico6"></span>
            </span>
            <span data-v-75c9c97a="" class="item-title">退换货</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="dashboard">
      <ul style="margin-bottom: 1rem;">
        <li>
          <a>
            <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_list_cm.png" class="item-i">
            <span class="item-title">我的订单</span>
            <span class="arr-r"></span> <!---->
          </a>
        </li>
      </ul>
      <ul style="margin-bottom: 1rem;">
        <li>
          <a>
            <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_coupon_cm.png" class="item-i">
            <span class="item-title">我的优惠券</span>
            <span class="arr-r"></span> <!---->
          </a>
        </li>
        <li>
          <a>
            <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_pig_cm.png" class="item-i">
            <span class="item-title">现金积分</span>
            <span class="arr-r"></span> <!---->
          </a>
        </li>
        <li>
          <a>
            <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_invoice.png" class="item-i">
            <span class="item-title">关于发票</span>
            <span class="arr-r"></span> <!---->
          </a>
        </li>
      </ul>
      <ul style="margin-bottom: 1rem;">
        <li>
          <a>
            <img src="http://i.lifevccdn.com/upload/centermenuimg/i_gear_cm.png" class="item-i">
            <span class="item-title">密码和登录信息</span>
            <span class="arr-r"></span> <!---->
          </a>
        </li>
        <li>
          <a>
            <img src="http://i.lifevccdn.com/upload/centermenuimg/i_dialoguebubble3_cm.png" class="item-i">
            <span class="item-title">老会员建议</span>
            <span class="arr-r"></span> <!---->
          </a>
        </li>
        <li>
          <a>
            <img src="http://i.lifevccdn.com/upload/centermenuimg/i_customerservice_cm.png" class="item-i">
            <span class="item-title">客户服务</span>
            <span class="arr-r"></span> <!---->
          </a>
        </li>
        <li>
          <a>
            <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_currentnode_cm.png" class="item-i">
            <span class="item-title">地址管理</span>
            <span class="arr-r"></span> <!---->
          </a>
        </li>
        <li>
          <a>
            <img src="http://i.lifevccdn.com/upload/centermenuimg/sms_cm.png" class="item-i">
            <span class="item-title">手机验证</span>
            <span class="arr-r"></span> <!---->
          </a>
        </li>
      </ul>
    </div>
    <el-footer></el-footer>
    <router-view></router-view>
  </div>
</template>

<script>
  import footer from '../footer/footer.vue'
  export default {
    components:{
      'el-footer':footer
    }
  }
</script>

<style scoped>
  .user-center{
    background-color: #f2f2f2;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    background-color: #89BE48;
    z-index: 10;
    line-height: 4rem;
  }

  .header-wrapper {
    height: 4rem;
  }

  .header p {
    text-align: center;
    font-size: 1.7rem;
    height: 4rem;
    color: #fff;
    width: 80%;
    margin: 0 auto;
  }

  .header a {
    font-size: 1.4rem;
    line-height: 4rem;
    color: #fff;
    position: absolute;
    top: 0;
    right: 4%;
  }

  .acct-user-wrap {
    width: 100%;
    height: 9rem;
    background-image: url(http://i1.lifevccdn.com/images/h5/core/background.png);
    background-size: 100% 100%;
  }

  .acct-nolog {
    width: 100%;
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
    padding: .5rem 0 0;
  }

  .state {
    text-align: center;
    font-size: 1.6rem;
    line-height: 3rem;
    display: block;
    color: #222;
  }

  .btn-entry {
    display: inline-block;
    color: #009c42;
    padding: 0 10px;
    height: 3rem;
    background: hsla(0, 0%, 100%, .4);
    border: 1px solid #009c42;
    border-radius: 1.5rem;
    margin: .5rem auto 0;
    text-align: center;
    font-size: 1.6rem;
    line-height: 3rem;
  }

  .btn-entry .font-large {
    display: inline-block;
    color: #009c42;
    padding: 0 10px;
  }

  .btn-entry .split {
    width: 1px;
    height: 1.2rem;
    display: inline-block;
    border-left: 1px solid #009c42;
  }

  .btn-entry a {
    display: inline-block;
    color: #009c42;
    padding: 0 10px;
  }

  .dashboard-order {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    border-top: 1px solid #eee;
    margin: 0 auto;
  }

  .dashboard-order ul {
    width: 100%;
    height: 5rem;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    margin: 0;
    padding: 0;
  }

  .dashboard-order li {
    width: 33%;
    height: 2.5rem;
    float: left;
    border-right: 1px solid #dedede;
    line-height: 2rem;
    margin: 1.5rem 0 0;
    padding: 0;
  }

  .dashboard-order li a {
    display: block;
    text-align: center;
    color: #585858;
    text-decoration: none;
    padding: 0;
  }

  .dashboard-order li .item-ico {
    display: inline-block;
    position: relative;
  }

  span#ico1, span#ico2 {
    display: inline-block;
    height: 3rem;
    width: 3.5rem;
    background-repeat: no-repeat;
    background-size: 99% 120%;
  }

  span#ico1 {
    background-position: -5px -7px;
    background-image: url('./order01.png');
  }

  span#ico2 {
    background-position: 2px -7px;
    background-image: url('./order02.png');
  }

  .dashboard-order li .item-title {
    display: inline-block;
    vertical-align: 56%;
    font-size: 1.2rem;
    color: #585858;
    line-height: 2.5rem;
    text-decoration: none;
  }

  span#ico3 {
    display: inline-block;
    height: 3rem;
    width: 3.7rem;
    background-position: -2px -7px;
    background-image: url('./order03.png');
    background-repeat: no-repeat;
    background-size: 99% 120%;
  }

  span#ico4, span#ico5 {
    display: inline-block;
    height: 3rem;
    width: 3.5rem;
    background-repeat: no-repeat;
    background-size: 99% 120%;
  }

  span#ico4 {
    background-position: -6px -7px;
    background-image: url('./order04.png');
  }

  span#ico5 {
    background-position: -6px -4px;
    background-image: url('./order05.png');
  }

  span#ico6 {
    display: inline-block;
    height: 3rem;
    width: 3.5rem;
    background-position: -6px -7px;
    background-image: url('./order06.png');
    background-repeat: no-repeat;
    background-size: 99% 120%;
  }

  .dashboard li {
    width: 100%;
    height: 5rem;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    margin: -1px auto 0;
  }

  .dashboard li a {
    width: 100%;
    height: 5rem;
    display: block;
    color: #333;
  }

  .dashboard li .item-i {
    width: 2.5rem;
    overflow: hidden;
    display: inline-block;
    float: left;
    margin: 1.3rem 1.1rem 0;
    vertical-align: middle;
    max-width: 100%;
  }

  /*.dashboard li .item-tip,*/
  .dashboard li .item-title {
    display: inline-block;
    line-height: 5rem;
    text-decoration: none;
    float: left;
    vertical-align: 0;
    font-size: 1.4rem;
    color: #585858;
  }

  .dashboard li .arr-r {
    width: 10px;
    height: 10px;
    display: inline-block;
    float: right;
    border-right: 2px solid #bbb;
    border-top: 2px solid #bbb;
    margin: 25px 10px 0 0;
    /*transform: rotate(45deg);*/
    /*-ms-transform: rotate(45deg);*/
    /*-moz-transform: rotate(45deg);*/
    -webkit-transform: rotate(45deg);
    /*-o-transform: rotate(45deg);*/
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
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28%;
    margin-bottom: -.5rem;
  }
  .footer ul li a .icon1{
    background-image: url('home.png');
  }
  .footer ul li a .icon2{
    background-image: url('allproducts.png');
  }
  .footer ul li a .icon3{
    background-image: url('stroll.png');
  }
  .footer ul li a .icon4{
    background-image: url('shopcart.png');
  }
  .footer ul li a .icon5{
    background-image: url('center.png');
  }
</style>
