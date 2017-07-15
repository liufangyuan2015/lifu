<template>
  <div class="productdetail">
    <div class="header-wrap">
      <header data-v-1bfe395a="" id="topbar" class="header">
        <div data-v-1bfe395a="" class="header-content">
        <span data-v-3520427c="" data-v-1bfe395a="" class="btn-back" @click="back">
          <label data-v-3520427c="" data-v-1bfe395a="" class="leftback-img"></label>
        </span> <!----> <!---->
          <p data-v-3520427c="" data-v-1bfe395a="" class="header-title">商品介绍</p>
        </div>
      </header>
    </div>
    <div>
      <div class="wrap">
        <div class="swipe-wrapper">
          <mt-swipe :auto="4000" v-if="product.swipePicture">
            <mt-swipe-item v-for="(s,index) in product.swipePicture" :key="index">
              <a href="#" class="swipe">
                <img :src="s.url" alt="">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <dl>
          <dd data-v-3520427c="" class="item-price pd05">
            <div data-v-3520427c="" class="title">{{product.name}}</div>
            <p data-v-3520427c="" class="des">{{product.description}}</p>
            <div data-v-346b1dbf="" data-v-3520427c="" class="price-cntr clearfix" style="text-align: center;">
              <em data-v-346b1dbf="" class="icon-money-larger normal-price-color yi">¥</em>
              <em data-v-346b1dbf="" class="price-money-larger normal-price-color er">{{product.price}}</em>

              <!--正常价格-->
              <span data-v-346b1dbf="" class="normalprice-wrap" v-if="product.oldPrice">
              <em data-v-346b1dbf="" class="icon-money-smaller normal-price-color">¥</em>
              <em data-v-346b1dbf="" class="price-money-smaller normal-price-color">{{product.oldPrice}}</em>
              <span data-v-346b1dbf="" class="line"></span>
            </span>S
              <!--<新品图标  没有原价>-->
              <img data-v-346b1dbf="" src="./new.png" class="ic-newtag" v-show="false"></div>
            <div data-v-3520427c="" class="price">
              <div data-v-3520427c="" class="lable-wrap">
                <!--积分换购时显示-->
                <span data-v-3520427c="" class="promo-lable"
                      style="color: rgb(253, 238, 238); background: rgb(205, 6, 15);"
                      v-if="product.privilege">积分换购</span>
                <span data-v-3520427c="" class="promo-lable" style="color: rgb(0, 0, 0); background: rgb(254, 209, 9);"
                      v-show="product.experiencePrice">限时体验价</span>
                <!--新品，有原价 时显示-->
                <span data-v-3520427c="" class="promo-lable"
                      style="color: rgb(253, 238, 238); background: rgb(205, 6, 15);" v-show="product.isNew">新</span>
              </div>
            </div>
          </dd>
          <!--可以积分换购时显示-->
          <div data-v-241e5efb="" data-v-3520427c="" id="promosWrap" v-if="product.privilege">
            <div data-v-241e5efb="" class="promo-item">
              <div data-v-241e5efb="" class="promo-item-wrap">
                <span data-v-241e5efb="" class="tag-promo">积分换购</span>
                <span data-v-241e5efb="" class="txt">200积分特价换购</span>
                <i data-v-241e5efb="" class="icon-rt"></i></div>
            </div>
          </div>
          <dd data-v-d3ac9140="" data-v-3520427c="" id="promoWrap"><!---->
            <div data-v-d3ac9140="" class="promo-item">
              <div data-v-d3ac9140="">
                <span data-v-d3ac9140="" class="tag-promo bgred">优惠</span>
                <span data-v-d3ac9140="" class="m-txt red">登录查看你的积分和优惠券</span>
              </div>
            </div>
          </dd>


          <dd class="GroupAttrs font-medium pd05">

            <!--规格-->
            <div data-v-c24d480e="" class="wrap-spec Warp-Props" v-if="product.productStandard">
              <table data-v-c24d480e="" width="100%" v-show="product.productStandard.length>0">
                <tr data-v-c24d480e="">
                  <td data-v-c24d480e="">
                    <div data-v-c24d480e="" class="font-medium attrtitle">规格：</div>
                    <div data-v-c24d480e="" class="font-small item" v-for="(standard,index) in product.productStandard"
                         :class="{selected:isSelectStandard===index}">
                      <span data-v-c24d480e="" class="spec-txt">{{standard}}</span>
                      <span data-v-c24d480e="" class="state" style="display: none;"></span>
                      <i data-v-c24d480e=""></i>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <!--商品-->
            <div data-v-c24d480e="" class="wrap-spec Warp-Props" v-if="product.productKind">
              <table data-v-c24d480e="" width="100%" v-show="product.productKind.length>0">
                <tr data-v-c24d480e="">
                  <td data-v-c24d480e="">
                    <div data-v-c24d480e="" class="font-medium attrtitle">商品：</div>
                    <div data-v-c24d480e="" class="font-small item" v-for="productKind in product.productKind"
                         :class="{selected:isSelectProductKind===index}">
                      <span data-v-c24d480e="" class="spec-txt">女-上下套装</span>
                      <span data-v-c24d480e="" class="state" style="display: none;"></span>
                      <i data-v-c24d480e=""></i>
                    </div>
                    <!--<div data-v-c24d480e="" class="font-small item selected">-->
                    <!--<span data-v-c24d480e="" class="spec-txt">男-上下套装</span>-->
                    <!--<span data-v-c24d480e="" class="state" style="display: none;"></span>-->
                    <!--<i data-v-c24d480e=""></i>-->
                    <!--</div>-->
                  </td>
                </tr>
              </table>
            </div>

            <!--颜色-->
            <div data-v-c24d480e="" class="wrap-spec Warp-Props" v-if="product.color">
              <table data-v-c24d480e="" width="100%" v-show="product.color.length>0">
                <tr data-v-c24d480e="">
                  <td data-v-c24d480e="">
                    <div data-v-c24d480e="" class="font-medium attrtitle">颜色：</div>
                    <div data-v-c24d480e="" class="font-small item  hasimg" v-for="(color,index) in product.color"
                         :class="{selected:isSelectColor===index}">
                      <img data-v-c24d480e=""
                           :src="color.curl"
                           class="specimg">
                      <span data-v-c24d480e="" class="state" style="display: none;"></span>
                      <i data-v-c24d480e=""></i>
                    </div>

                  </td>
                </tr>
              </table>
            </div>
            <!--尺寸-->
            <div data-v-c24d480e="" class="wrap-spec Warp-Props" v-if="product.size">
              <table data-v-c24d480e="" width="100%" v-show="product.size.length">
                <tr data-v-c24d480e="">
                  <td data-v-c24d480e="">
                    <div data-v-c24d480e="" class="font-medium attrtitle">尺寸：</div> <!---->
                    <div data-v-c24d480e="" class="font-small item" v-for="(size,index) in product.size"
                         :class="{selected:isSelectSize===index}">
                      <span data-v-c24d480e="" class="spec-txt">{{size}}</span>
                      <span data-v-c24d480e="" class="state" style="display: none;">正常售卖</span>
                      <i data-v-c24d480e=""></i>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </dd>


          <dd data-v-3520427c="" class="spec-amount pd05 pl-2px">
            <div data-v-3520427c="" class="wrap-spec">
              <span data-v-3520427c="" class="num-tt" style="color: rgb(107, 107, 107);">数量：</span>
              <span data-v-3520427c="" class="wrap-num">
            <button data-v-3520427c="" class="des"></button>
            <span data-v-3520427c="" class="ipt-num">1</span>
            <button data-v-3520427c="" class="inc"></button>
          </span>
            </div>
          </dd>
          <dd data-v-3520427c="" class="deliveryPanel pd05 pl-2px">
            <div data-v-3520427c="" class="wrap-spec">
            <span data-v-3520427c="" class="delivery-tt"
                  style="color: rgb(107, 107, 107); visibility: visible;">送至：</span>
              <div data-v-3520427c="" class="deliver-cont">上海(满￥99免运费)
                <p data-v-3520427c="" class="deliver-promo" style="padding-top: 4px; color: rgb(204, 0, 0);">
              <span data-v-3520427c="">
                  新会员首单，满69元免运费
              </span>
                </p>
                <p data-v-3520427c="" class="serv-time" style="display: none;"></p>
                <p data-v-3520427c="" class="serv-time" style="display: none;"></p>
              </div>
            </div>
          </dd>

          <dd data-v-3520427c="" class="general-info ser-promise">
            <div data-v-3520427c="" class="huodongcenter">
              <img data-v-3520427c=""
                   src="http://i.lifevccdn.com/upload/combinationchart/8790d2e3fe9b4440afaeff14ca3a2a45.jpg"
                   usemap="#planetmap0">
              <map data-v-3520427c="" name="planetmap0" id="planetmap0">
                <area data-v-3520427c="" shape="rect" coords="0,2,375,101">
              </map>
            </div>
            <div data-v-3520427c="" class="huodongcenter">
              <img data-v-3520427c=""
                   src="http://i.lifevccdn.com/upload/combinationchart/dc678db46c3b45b184a07930bb294647.jpg"
                   usemap="#planetmap1">
              <map data-v-3520427c="" name="planetmap1" id="planetmap1">
                <area data-v-3520427c="" shape="rect" coords="0,0,375,190">
              </map>
            </div>
          </dd>


        </dl>

        <!--商品介绍，规格参数，评论导航-->
        <div data-v-3520427c="" id="selmenu" class="warp-Menus" style="position: sticky; top: 40px;">
          <div data-v-3520427c="" id="Menus">
            <dl data-v-3520427c="" style="padding-left: 2%;">
              <dd data-v-3520427c="">
                <span data-v-3520427c="" class="focusTab">商品介绍</span>
              </dd>
              <dd data-v-3520427c="">
                <span data-v-3520427c="" class="">规格参数</span>
              </dd>
              <dd data-v-3520427c="">
                <span data-v-3520427c="" class="">评论(423)</span>
              </dd>
            </dl>
          </div>
        </div>


        <div class="item-tab-cont" style="min-height: 599.4px;">
          <div class="Detailsdiv" id="detailsItem">
            <div v-for="Introduction in product.Introduction">
              <img :src="Introduction" lazy="loaded">
              <div data-v-3520427c=""></div>
            </div>
          </div>
        </div>
      </div>


      <!--加入购物车-->
      <div  class="container" style="height: 667px;" v-show="showBuy">
        <div class="mask" style="display: block;"></div>
        <div  class="content" style="max-height: 70%; display: block;">
          <div  class="top-wrap clearfix">
            <img  :src="product.detailImg" alt="暂无图片" class="topimg">
            <div  class="goods-wrap">
              <div  class="g-item goods-name">
                时尚舒适休闲拖鞋
                <div  class="btn-close-wrap" @click="closeBuy">
                  <i  class="iconfont icon-cuowu btn-close"></i>
                </div>
              </div>
              <div   class="price-cntr clearfix" style="text-align: left;">
                <em  class="icon-money-larger normal-price-color yi">¥</em>
                <em class="price-money-larger normal-price-color er">25</em>
              </div>
              <div  class="g-item tags"></div>
            </div>
          </div>
          <div  class="attrs-wrap">
            <dd class="GroupAttrs font-medium pd05">

              <!--规格-->
              <div data-v-c24d480e="" class="wrap-spec Warp-Props" v-if="product.productStandard">
                <table data-v-c24d480e="" width="100%" v-show="product.productStandard.length>0">
                  <tr data-v-c24d480e="">
                    <td data-v-c24d480e="">
                      <div data-v-c24d480e="" class="font-medium attrtitle">规格：</div>
                      <div data-v-c24d480e="" class="font-small item" v-for="(standard,index) in product.productStandard"
                           :class="{selected:isSelectStandard===index}">
                        <span data-v-c24d480e="" class="spec-txt">{{standard}}</span>
                        <span data-v-c24d480e="" class="state" style="display: none;"></span>
                        <i data-v-c24d480e=""></i>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!--商品-->
              <div data-v-c24d480e="" class="wrap-spec Warp-Props" v-if="product.productKind">
                <table data-v-c24d480e="" width="100%" v-show="product.productKind.length>0">
                  <tr data-v-c24d480e="">
                    <td data-v-c24d480e="">
                      <div data-v-c24d480e="" class="font-medium attrtitle">商品：</div>
                      <div data-v-c24d480e="" class="font-small item" v-for="productKind in product.productKind"
                           :class="{selected:isSelectProductKind===index}">
                        <span data-v-c24d480e="" class="spec-txt">女-上下套装</span>
                        <span data-v-c24d480e="" class="state" style="display: none;"></span>
                        <i data-v-c24d480e=""></i>
                      </div>
                      <!--<div data-v-c24d480e="" class="font-small item selected">-->
                      <!--<span data-v-c24d480e="" class="spec-txt">男-上下套装</span>-->
                      <!--<span data-v-c24d480e="" class="state" style="display: none;"></span>-->
                      <!--<i data-v-c24d480e=""></i>-->
                      <!--</div>-->
                    </td>
                  </tr>
                </table>
              </div>

              <!--颜色-->
              <div data-v-c24d480e="" class="wrap-spec Warp-Props" v-if="product.color">
                <table data-v-c24d480e="" width="100%" v-show="product.color.length>0">
                  <tr data-v-c24d480e="">
                    <td data-v-c24d480e="">
                      <div data-v-c24d480e="" class="font-medium attrtitle">颜色：</div>
                      <div data-v-c24d480e="" class="font-small item  hasimg" v-for="(color,index) in product.color"
                           :class="{selected:isSelectColor===index}">
                        <img data-v-c24d480e=""
                             :src="color.curl"
                             class="specimg">
                        <span data-v-c24d480e="" class="state" style="display: none;"></span>
                        <i data-v-c24d480e=""></i>
                      </div>

                    </td>
                  </tr>
                </table>
              </div>
              <!--尺寸-->
              <div data-v-c24d480e="" class="wrap-spec Warp-Props" v-if="product.size">
                <table data-v-c24d480e="" width="100%" v-show="product.size.length">
                  <tr data-v-c24d480e="">
                    <td data-v-c24d480e="">
                      <div data-v-c24d480e="" class="font-medium attrtitle">尺寸：</div> <!---->
                      <div data-v-c24d480e="" class="font-small item" v-for="(size,index) in product.size"
                           :class="{selected:isSelectSize===index}">
                        <span data-v-c24d480e="" class="spec-txt">{{size}}</span>
                        <span data-v-c24d480e="" class="state" style="display: none;">正常售卖</span>
                        <i data-v-c24d480e=""></i>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </dd>
          </div>
          <!--确定按钮-->
          <div class="btn-wrap">
            <input  type="button" value="确定" class="btn-ok">
          </div>
        </div>
      </div>
    </div>


    <footer data-v-3520427c="" id="__ft__" class="item-footer">
      <div class="f-service f-kefu" @click="message">
        <i class="ico ico-cusser"></i>
        <span>客服</span>
      </div>

      <router-link to="/home" class="f-service f-home">
        <i data-v-3520427c="" class="ico ico-home"></i>
        <span data-v-3520427c="">首页</span>
      </router-link>

      <router-link to="/shopcart" target="_self" class="f-service f-cart">
        <i data-v-3520427c="" class="ico ico-cart-green"></i>
        <span data-v-3520427c="" class="cart-num">0</span>
      </router-link>
      <!--<a target="_self" class="f-service f-cart">-->
      <!--<i data-v-3520427c="" class="ico ico-cart-green"></i>-->
      <!--<span data-v-3520427c="" class="cart-num">0</span>-->
      <!--</a>-->
      <!---->
      <button data-v-3520427c="" class="f-btn-add" @click="closeBuy">加入购物车</button> <!----> <!---->
    </footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import swipe from 'mint-ui/lib/swipe'
  import Vue from 'vue'
  import MessageBox from 'mint-ui/lib/message-box';
  Vue.component('mt-swipe', swipe);
  Vue.component('MessageBox', MessageBox);
  export default {
    data(){
      return {
        productId: this.$route.params.id,
        product: [],
        isSelectStandard: 0,
        isSelectProductKind: 1,
        isSelectColor: 0,
        isSelectSize: 0,
        showBuy:false
      }
    },
    created(){
      axios.get('/api2/allproducts')
        .then(response => {
          var result = response.data.data
          var product = result.find(product => {
            return product.productId == this.productId
          })
          this.product = product
        })
    },
    methods: {
      back(){
        history.back()
      },
      message(){
        var messageHTML = '<div style="text-align: left;font-size: 12px"><img src="http://i1.lifevccdn.com/images/m/item/i_telService@2x.png" style="width: 10%;margin-right:5px ">' +
          '电话客服：400-609-2288<div style="width:100%;height: 1px;background-color: #666"></div>' +
          '<img src="http://i1.lifevccdn.com/images/m/item/i_onlineService@2x.png" style="width: 10%;margin-right:8px ;margin-top: 8px;vertical-align: middle" @click="server">' + '<span @click="server">在线客服</span></div>'
//          var confirmText='关闭'
        var cancelButtonText = '关闭'
        MessageBox({
          title: '请选择服务类型',
          message: messageHTML,
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: cancelButtonText
//          confirmButtonText:confirmText

        });
      },
      server(){
        this.$router.push('/register')
      },
      closeBuy(){
          this.showBuy=!this.showBuy
          console.log(this.showBuy)
      }

    }
  }
</script>

<style scoped>
  .header-wrap {
    height: 40px;
  }

  .productdetail {
    padding-bottom: 70px;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
  }

  .header-content {
    width: 100%;
    margin: 0 auto;
    position: relative;
    background-color: #89BE48;
    height: 40px;
  }

  .header-content .btn-back {
    display: inline-block;
    height: 40px;
  }

  .header-content .btn-back {
    width: 10%;
    height: 3.8rem;
    position: absolute;
    left: 0;
    top: 0;
  }

  .header-title {
    line-height: 3rem;
    font-size: 20px;
  }

  .header-title {
    margin: 0 auto;
    line-height: 3rem;
    font-size: 1.7rem;
    text-align: center;
    color: #fff;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .header-content .btn-back label {
    left: 30%;
  }

  .leftback-img {
    width: 10px;
    height: 26px;
    top: 5px;
    background-position-y: center;
  }

  .leftback-img {
    /*width: 1rem;*/
    /*height: 2.6rem;*/
    display: block;
    float: left;
    background: url('./icon.png') no-repeat;
    position: absolute;
    /*left: 4%;*/
    /*top: .6rem;*/
  }

  .swipe-wrapper {
    height: 375px;
  }

  .swipe img {
    width: 100%;
    height: 100%;
  }

  .item-price {
    line-height: .4rem;
    background-color: #fff;
  }

  .item-price {
    padding: 2.5rem 0 1.4167rem !important;
  }

  .item-body .item-price {
    border: 0;
    font-size: 1.35em;
    /*line-height: 2em;*/
    /*padding-bottom: .5rem;*/
    /*padding-top: .2rem;*/
  }

  .item-price .title {
    padding: 0;
    text-align: center;
    font-size: 1.7rem;
    color: #000;
    height: 1.667rem;
    line-height: .4rem;
  }

  .item-price .des {
    text-align: center;
    font-size: 1.2rem;
    color: #999;
    height: 1.25rem;
    line-height: .3rem;
    margin-top: .14rem;
  }

  .price-cntr {
    font-family: PingFangSC-Regular, Microsoft YaHei, Arial, Verdana, Tahoma, Helvetica, "sans-serif";
    font-size: 0;
    text-align: center;
    /*line-height: normal;*/
    height: 1.834rem;
    line-height: 1.834rem;
    margin-top: 0.8333rem;
    text-align: center;
  }

  .clearfix {
    overflow: hidden;
  }

  .icon-money-larger {
    font-size: 2rem;
  }

  .normal-price-color {
    color: #000;
  }

  em, i {
    font-style: normal;
  }

  .price-money-larger {
    font-size: 1.8rem;
    margin-left: 2px;
  }

  .ic-newtag {
    width: 1.334rem;
    height: 1.334rem;
    vertical-align: baseline;
    margin-left: .4167rem;
  }

  .clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
  }

  #promoWrap {
    border-top: 1px solid #ddd;
    padding: .41667rem 0;
    margin-left: .5833rem;
    background-color: #fff;
  }

  /*@media (max-width: 375px) and (min-width: 321px)*/
  .promo-item {
    padding: .1rem 0;
    font-size: 14px;
    position: relative;
    width: 7.32rem;
    width: 100%;
  }

  .tag-promo {
    display: inline-block;
    background: #cd060f;
    color: #fff;
    zoom: .5;
    border: 0;
    font-size: 24px;
    line-height: normal;
    padding: 0 3px;
  }

  .red {
    color: #cd060f;
  }

  .m-txt {
    font-size: 12px;
    height: .3rem;
    line-height: .3rem;
    padding-left: .14rem;
  }

  .pl-2px {
    margin-top: 1px;
    padding-left: .5833rem !important;
  }

  .spec-amount .wrap-spec {
    font-size: 12px;
    overflow: hidden;
    padding: 0;
    height: 2.25rem;
    margin-top: 1.25rem;
  }

  .wrap-spec {
    position: relative;
  }

  .spec-amount .num-tt {
    float: left;
    display: inline-block;
    /*vertical-align: middle;*/
    font-size: 13px;
    width: 39px;
    height: 27px;
    line-height: 27px;
    padding-right: .4167rem;
  }

  .spec-amount .wrap-num {
    display: inline-block;
    overflow: hidden;
  }

  .spec-amount button.des {
    background: #eee url('./de.png') no-repeat 50%;
    background-size: 1rem 1rem;
  }

  .spec-amount .des {
    border-right: 0;
  }

  .spec-amount button {
    width: 30px;
    height: 30px;
    background-color: #eee;
    color: #333;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .spec-amount .ipt-num, .spec-amount button {
    display: inline-block;
    float: left;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 28px;
  }

  .spec-amount .ipt-num {
    width: 3.167rem;
    height: 2.25rem;
    line-height: 2.25rem;
    font-size: 12px;
    box-sizing: border-box;
  }

  .spec-amount button.inc {
    background: #eee url('./sum.png') no-repeat 50%;
    background-size: 1rem 1rem;
  }

  /*.spec-amount button{*/
  /*box-sizing: border-box;*/
  /*width: .54rem;*/
  /*height: .54rem;*/
  /*line-height: .54rem;*/
  /*}*/

  /*正常价格样式*/
  .normalprice-wrap {
    position: relative;
    display: inline-block;
    height: 100%;
    margin-left: 0rem;
    padding: 0.3rem;
    text-decoration: line-through;
  }

  .icon-money-smaller {
    font-size: 1.3rem;
  }

  .normal-price-color {
    color: #000;
  }

  .price-money-smaller {
    font-size: 1.5rem;
    margin-left: 2px;
  }

  .normal-price-color {
    color: #000;
  }

  .item-price .price {
    padding: 0;
    font-size: .24rem;
    line-height: .24rem;
    color: #c00;
    font-weight: 400;
  }

  .item-price .lable-wrap {
    text-align: center;
    margin: .4rem auto 0;
  }

  .item-price .price .promo-lable {
    font-size: 26px;
    padding: 0 6px;
    line-height: normal;
    margin-right: .12rem;
    zoom: .5;
    display: inline-block;
  }

  #promosWrap {
    border-top: 1px solid #ddd;
    padding: .4167rem 0;
    margin-left: 0.6rem;
  }

  .txt {
    padding-left: .14rem;
    font-size: 12px;
    height: 16px;
    line-height: 16px;
  }

  .icon-rt {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    background: url('./go.png') no-repeat 50%;
    background-size: 1.5rem 1.5rem;
    z-index: 2;
  }

  /*产品规格*/

  .font-medium {
    font-size: 13px;
    line-height: .2rem;
    color: #6b6b6b;
  }

  .GroupAttrs {
    margin-left: .14rem;
    border-top: 1px solid #ddd;
  }

  .GroupAttrs .wrap-spec {
    margin-top: 1.25rem;
  }

  .wrap-spec {
    position: relative;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  .font-medium {
    font-size: 13px;
    line-height: 0.836rem;
  }

  td, th {
    display: table-cell;
    vertical-align: inherit;
  }

  .attrtitle {
    color: #666;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 0;
  }

  .GroupAttrs div.Warp-Props .item {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    box-sizing: border-box;
    padding: 0 .6667rem;
    overflow: hidden;
    float: left;
    background-color: #fff;
    border: 1px solid #ccc;
    text-align: center;
    color: #333;
    position: relative;
    margin-top: .5833rem;
    -webkit-tap-highlight-color: transparent;
  }

  .GroupAttrs div.Warp-Props .item:not(:last-child) {
    margin: .5833rem .5833rem 0 0;
  }

  .GroupAttrs div.Warp-Props .item.selected {
    border-color: #83b842;
    color: #83b842;
    /*top: .5rem;*/
  }

  .GroupAttrs div.Warp-Props .item.selected i {
    display: block;
  }

  .GroupAttrs div.Warp-Props .item i {
    height: 0;
    border-style: solid;
    border-width: 15px 15px 0;
    border-color: transparent #83b842 #83b842 transparent;
    font-size: 0;
    line-height: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 9;
    display: none;
  }

  .GroupAttrs div.Warp-Props .item i:after {
    content: "";
    width: 8px;
    height: 4px;
    display: block;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    position: absolute;
    left: 6px;
    top: -8px;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
  }

  .GroupAttrs div.Warp-Props .item.hasimg {
    width: 4.167rem !important;
    height: 4.167rem !important;
    padding: 0 !important;
    box-sizing: border-box;
    margin: 0;
    margin-right: .8333rem !important;
    margin-top: .5833rem;
  }

  .GroupAttrs div.Warp-Props .item.hasimg .specimg {
    padding: 0;
    width: 100%;
    height: 100%;
  }

  img {
    vertical-align: middle;
  }

  .deliveryPanel {
    font-size: 12px;
    line-height: 1rem;
    margin-top: 1.5rem !important;
  }

  .deliveryPanel .wrap-spec {
    font-size: 12px;
    line-height: 1rem;
    overflow: hidden;
    padding: 0;
    position: relative;
  }

  .deliveryPanel .delivery-tt {
    font-size: 13px;
    width: auto;
    line-height: normal;
    padding-right: .42rem;
    float: left;
  }

  .deliveryPanel .deliver-cont {
    line-height: normal;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    line-height: 1.5em;
    padding: 0;
    margin: 0;
  }

  .item-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 4px 0;
    z-index: 1001;
    height: 40px;
    border-top: 1px solid #ddd;
    background-color: #fff;
  }

  .item-footer .f-service.f-home, .item-footer .f-service.f-kefu {
    position: relative;
    z-index: 100000;
    top: -2px;
  }

  .item-footer .f-service {
    width: 13%;
    height: 3.34rem;
    overflow: hidden;
    float: left;
    line-height: 1rem;
    font-size: 1rem;
    text-align: center;
    /*position: relative;*/
  }

  .ico-home {
    margin-top: -.2rem;
    background-image: url('./home.png');
  }

  .item-footer .f-service.f-cart {
    position: relative;
    height: 38px;
    border: 1px solid #009d42;
    border-radius: 5px;
    width: 20%;
    margin-right: 3%;
    margin-left: 2%;
  }

  .item-footer .f-service .ico {
    height: 30px;
    margin-bottom: 4px;
    width: 100%;
    display: inline-block;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 35%;
  }

  .item-footer .f-service .ico-cusser {
    margin-top: -2px;
    background-image: url('./server.png');
  }

  .item-footer .f-service span {
    position: relative;
    top: -.6rem;
  }

  .item-footer .f-service .ico-cart-green {
    margin-bottom: 4px;
    height: 40px !important;
    background-size: auto 50%;
  }

  .item-footer .f-service .ico-cart-green {
    width: 70%;
    float: left;
    height: 100%;
    background-size: 50%;
    background-image: url('./shopcart.png');
  }

  .item-footer .f-service.f-cart .cart-num {
    width: 18px;
    height: 18px;
    line-height: 18px;
    top: 10px;
    font-size: 10px;
  }

  .item-footer .f-service.f-cart .cart-num {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    background-color: #f60;
    border-radius: 50%;
    text-align: center;
    font-size: .75rem;
    color: #fff;
    line-height: 1.8rem;
    position: absolute;
    right: 13%;
    top: .8rem;
  }

  .item-footer .f-btn-add {
    height: 40px;
    font-size: 16px;
    border-radius: 5px;
    width: 45%;
    /*height: 4rem;*/
    overflow: hidden;
    float: left;
    background-color: #009d42;
    border: 0;
    text-align: center;
    /*font-size: 1.7rem;*/
    color: #fff;
    line-height: 100%;
    margin: 0;
    padding: 0;
    /*border-radius: .5rem;*/
  }

  .ser-promise {
    margin-top: 1.2rem;
    border-top: 1px solid #ddd;
    font-size: 1.35rem;
    line-height: 2rem;
  }

  .huodongcenter {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }

  .huodongcenter img {
    width: 100%;
    display: block;
    vertical-align: top;
  }

  .warp-Menus {
    width: 100%;
    z-index: 999;
    left: 0;
    height: .8rem;
    top: .9rem;
  }

  #Menus {
    background-color: #fff;
    width: 100%;
    margin: 0 auto;
    border-bottom: .04rem solid #f2f2f2;
  }

  #Menus dl {
    font-size: 12px;
  }

  #Menus dl {
    text-align: center;
    padding: .666rem;
    border: 0;
  }

  #Menus dl dd {
    height: .48rem;
    line-height: .48rem;
  }

  #Menus dl dd:first-child {
    float: left;
  }

  #Menus dl dd {
    display: inline-block;
    min-width: 19%;
    height: 2.4rem;
    text-align: center;
    line-height: 2rem;
    font-family: Microsoft YaHei;
    border-radius: 1.3rem;
    cursor: pointer;
    margin: 0 6% 0 0;
    padding-left: 0;
  }

  #Menus dl dd span {
    font-size: 14px;
    padding: .16rem .83rem;
    line-height: 1.84;
    display: inline-block;
    border-radius: 2rem;
  }

  .focusTab {
    background-color: #89be48;
    color: #fff;
    padding: .2rem 1rem;
    border-radius: .5rem;
  }

  .Detailsdiv {
    font-size: 12px;
    border-top: 1px solid #ccc;
  }

  div.Detailsdiv img {
    width: 100%;
    display: block;
    margin-top: -1px;
  }

  /*客服提示框*/
  .confirmButton {
    color: #666666 !important;
    font-size: 12px !important;
  }

  .confirmButton:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-image: url('http://i1.lifevccdn.com/images/m/item/i_onlineService@2x.png');
  }


  .container{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4200;
    width: 100%;
  }

  .container {
    max-width: 640px;
    margin: 0 auto;
    padding: 0;
    /*position: relative;*/
  }

  .mask[data-v-49b7f86f] {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: .5;
    z-index: 4201;
    /*display: none;*/
  }

  .content{
    position: absolute;
    bottom: 0;
    z-index: 4202;
    width: 100%!important;
    min-height: 40%;
    background: #fff;
    display: none;
    padding-bottom: 61px;
  }

  .content, .page {
    width: 320px;
    min-width: 320px;
    margin: 0 auto;
  }

  .top-wrap{
    position: relative;
  }

  .clearfix {
    overflow: hidden;
  }

  @media (max-width: 375px) and (min-width: 321px){
    .topimg{
      display: block;
      width: 87px;
      height: 87px;
      border: 1px solid #89be48;
      margin: .58rem;
      float: left;
      box-sizing: border-box;
    }
  }
  @media (max-width: 375px) and (min-width: 321px){
    .goods-wrap{
      overflow: hidden;
      margin-top: .14rem;
      position: relative;
      height: 87px;
    }
  }
  @media (max-width: 375px) and (min-width: 321px){
    .goods-name{
      font-size: 1.7rem;
      padding: 0 36px 0 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 29px;
      line-height: 29px;
    }
  }

  @media (max-width: 375px) and (min-width: 321px){
    .btn-close-wrap[data-v-49b7f86f] {
      position: absolute;
      right: 10px;
      top: 0;
      text-align: center;
      width: 29px;
      height: 29px;
    }
  }
  .btn-close{
    display: inline-block;
    width: 16px;
    height: 12px;
    color: #ccc!important;
  }

  .iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }
  .icon-cuowu:before {
    content: "\E641";
  }

  .price-cntr {
    font-family: PingFangSC-Regular,Microsoft YaHei,Arial,Verdana,Tahoma,Helvetica,"sans-serif";
    font-size: 0;
    text-align: center;
    height: 1.83rem;
    margin-top: .84rem;
  }
  .icon-money-larger{
    font-size: 1.4rem;
  }

  .normal-price-color{
    color: #000;
  }

  .price-money-larger{
    font-size: 1.8rem;
    margin-left: 2px;
  }

  .clearfix:after {
    content: " ";
    display: block;
    clear: both;
    visibility: hidden;
  }
  @media (max-width: 375px) and (min-width: 321px){
    .tags[data-v-49b7f86f] {
      padding-left: 13.4px;
      font-size: 12px;
      width: 100%;
      padding-bottom: 0;
      position: absolute;
      bottom: 0;
    }
  }
  .attrs-wrap{
    overflow-y: scroll;
    max-height: 260px;
    padding: 0 0 10px .14rem;
    border-top: 1px solid #ddd;
  }
  .btn-wrap{
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background: #e7e7e7;
    border-top: 1px solid #ddd;
    z-index: 20;
    font-size: 12px;
  }

  .btn-ok{
    width: 160px;
    height: 40px;
    color: #fff;
    background: #83b842;
    margin: 10px 0;
    border: 0;
    border-radius: 6px;
    font-size: 18px;
  }
  @media (max-width: 375px) and (min-width: 321px) {
    .btn-close-wrap{
      position: absolute;
      right: 10px;
      top: 0;
      text-align: center;
      width: 29px;
      height: 29px;
      color: #ccc;
    }
  }



</style>



