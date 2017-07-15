<template>
  <div>
    <div class="top">
      <div class="header-wrap">
        <div class="header">
          <span @click="goback"></span>
          <p>购物车</p>
          <label for="" class="editcart" id="editcart" v-show="islogin || totalCount>0" @click="editcart">修改</label>
          <img src="./settings.png" class="i-header-set" alt="" v-show="islogin || totalCount>0" @click="editcart">
        </div>
      </div>
      <div data-v-5cc9f28f="" data-v-350514bc="" class="header-login-wrap" v-show="!islogin">
        <div data-v-5cc9f28f="" data-v-350514bc="" class="header-login">
          <router-link class="btn-login" to="/login">登录</router-link>
          <!--<a data-v-5cc9f28f="" data-v-350514bc="" class="btn-login">登录</a>-->
          <span data-v-5cc9f28f="" data-v-350514bc="" class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
        </div>
      </div>

      <!--礼品兑换  无论是否登录都会显示-->
      <div data-v-5cc9f28f="" data-v-350514bc="" class="header-exchange-wrap">
        <div data-v-5cc9f28f="" data-v-350514bc="" class="header-exchange">
          <a data-v-5cc9f28f="" data-v-350514bc="" href="javascript:;" id="hideAclick" style="display: none;"></a>
          <input data-v-5cc9f28f="" data-v-350514bc="" type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码" class="exch-ipt">
          <input data-v-5cc9f28f="" data-v-350514bc="" type="button" value="兑换" class="exch-btn">
        </div>
      </div>
    </div>

    <shopcartpage :isedit="isedit"></shopcartpage>

    <el-footer ></el-footer>
  </div>
</template>

<script>
  import shopcartpage from '../shopcartpage/shopcartpage.vue'
  import footer from '../footer/footer.vue'
  export default {
      data(){
          return {
            islogin:false,
            totalCount:1,
            isedit:false
          }
      },
    methods: {
      goback(){
        history.back()
      },
      editcart(){
          this.isedit=!this.isedit
          if(this.isedit){
              document.getElementById('editcart').innerHTML='完成'
          }else{
            document.getElementById('editcart').innerHTML='修改'
          }
      }
    },
    components:{
      shopcartpage,
      'el-footer':footer
    }
  }
</script>

<style scoped>
  .top{
    padding: 0;
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    min-width: 320px;
    max-width: 768px;
    margin: auto;
  }
  .header-wrap {
    height: 4rem;
  }

  .header {
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    height: 4rem;
    background-color: #89BE48;
    line-height: 4rem;
    vertical-align: middle;
  }

  .header span {
    display: inline-block;
    height: 4rem;
    width: 10%;
    position: absolute;
    top: 10%;
    left: 2%;
    background-image: url('./icon.png');
    background-repeat: no-repeat;
    background-size: 35%;
    /*background-position: 50%;*/
  }

  .header p {
    text-align: center;
    font-size: 1.7rem;
    height: 4rem;
    color: #fff;
    width: 80%;
    margin: 0 auto;
  }

  .i-header-set{
    display: inline-block;
    position: absolute;
    width: 2.3rem;
    right: 14%;
    top: .8rem;
    vertical-align: middle;
    max-width: 100%;
  }

  .editcart{
    font-size: 1.5rem;
    color: #fff;
    line-height: 4rem;
    margin-right: 2%;
    position: absolute;
    right: 2%;
    top: 0;
    z-index: 9;
  }

  .header-login-wrap {
    width: 100%;
    height: 3rem;
    background-color: #f0fae6;
    margin: 0;
    padding: .8rem 0 .5rem;
  }

  .header-login {
    width: 74%;
    min-height: 2.8rem;
    display: table;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 0 0 21%;
    position: relative;
  }

  .btn-login {
    width: 18%;
    height: 2.6rem;
    display: block;
    background: #fff;
    border: 1px solid #8bc146;
    text-align: center;
    font-size: 1.3rem;
    color: #88c13e;
    line-height: 2.5rem;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
  }

  .login-tip {
    width: 100%;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    font-size: 1.2rem;
    color: #333;
    line-height: 1.5rem;
  }

  .header-exchange-wrap{
    width: 100%;
    height: 3.2rem;
    background-color: #fff;
    margin: 0;
    padding: .6rem 0 .5rem;
    border-bottom: 1px solid #f2f2f2;
  }

  .header-exchange{
    width: 93%;
    height: 3rem;
    overflow: hidden;
    margin: .1rem auto 0;
    padding: 0;
    position: relative;
  }
  .exch-ipt{
    padding-left: 10px;
    width: 80%;
    height: 2.8rem;
    line-height: 2.8rem;
    display: inline-block;
    border-radius: 0;
    border: 1px solid #e7e7e7;
    background: #fff;
    text-align: left;
    font-size: 1.2rem;
    outline: 0 none;
  }
  .exch-btn{
    width: 20%;
    height: 3rem;
    line-height: 3rem;
    display: inline-block;
    border-radius: 0;
    background: #fff;
    text-align: center;
    font-size: 1.3rem;
    color: #6fbd00;
    letter-spacing: .1rem;
    text-indent: .2rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
    border: 1px solid #6fbd00;
  }

</style>
