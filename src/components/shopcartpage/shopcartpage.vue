<template>
  <div class="wrap-cart-cont">
    <!--购物车没有商品-->
    <div class="wrap-nodata" v-show="false">
      <div class="carts-img">
        <img src="./shoppingcart.png" alt="">
      </div>
      <div class="carts-text">
        <p>您的购物车还是空空荡荡</p>
      </div>
      <div class="carts-link-toShop">
        <router-link to="/home">赶紧去逛逛</router-link>
        <!--<a href=""></a>-->
      </div>
    </div>
    <!--购物车有商品-->
    <div class="wrap-hasdata">
      <div>
        <div data-v-5cc9f28f="" class="wrap-cart-promo">
          <p data-v-5cc9f28f="" class="promo-cont">
            <a data-v-5cc9f28f="" href="javascript:void(0);">
              <span data-v-5cc9f28f="" class="act-tag">积分换购</span>200积分特价换购
              <i data-v-5cc9f28f="" class="promo-skip"></i>
            </a>
          </p>
        </div>

        <div data-v-5cc9f28f="" class="wrap-cartgrid">
          <div data-v-5cc9f28f="" class="cart-item-group">
            <!--每个div是一个商品-->
            <div data-v-5cc9f28f="" class="cart-item sd-container" style="height: 105px;">
              <ul data-v-5cc9f28f="" class="sd-del-content" style="height: 105px;">
                <li data-v-5cc9f28f="" class="chk">
                <span data-v-5cc9f28f="" class="selectwrap selected">
                  <span data-v-5cc9f28f="" class="slct"></span>
                </span>
                </li>
                <li data-v-5cc9f28f="" class="item-pic">
                  <a data-v-5cc9f28f="" href="#/item/24683">
                    <img data-v-5cc9f28f=""
                         src="http://i.lifevccdn.com/upload/AppItemExhibit/f2ab9cc0ba18484f891da54be601c945.jpg">
                    <!---->
                  </a>
                </li>

                <!--没有修改时-->
                <li data-v-5cc9f28f="" class="item-info" v-if="!isedit" >
                  <p data-v-5cc9f28f="">
                  <span data-v-5cc9f28f="" class="item-title">
                    <a data-v-5cc9f28f="" href="#/item/24683">耐磨高弹力旅行箱保护套</a>
                  </span>
                    <span data-v-5cc9f28f="" class="item-price">￥29</span>
                  </p>
                  <p data-v-5cc9f28f="">
                    <span data-v-5cc9f28f="" class="item-spec">飞机,20寸</span>
                    <span data-v-5cc9f28f="" class="item-original">￥39</span>
                  </p>
                  <div data-v-5cc9f28f="" class="item-quantity">
                  <span data-v-5cc9f28f="" class="tag-act-wrap">
                    <span data-v-5cc9f28f="" class="tag-act">限时体验价</span> <!----> <!---->
                  </span>
                    <span data-v-5cc9f28f="" class="quantity">x 1</span>
                  </div>
                </li>

                <!--修改编辑商品的时候-->
                <li data-v-5cc9f28f="" class="item-info edit" v-if="isedit" >
                  <div data-v-5cc9f28f="" class="spec-selector">飞机,20寸

                  </div>
                  <span data-v-5cc9f28f="" class="del"></span>
                  <div data-v-5cc9f28f="" class="quantity-editor">
                  <span data-v-5cc9f28f="" class="tag-act-wrap">
                    <span data-v-5cc9f28f="" class="tag-act">限时体验价</span>
                    <!----> <!----></span>
                    <cartctrol></cartctrol>
                  </div>
                </li>
              </ul>
            </div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----></div>
        </div>

        <div data-v-5cc9f28f="" class="wrap-cart-panel cart-panle-address">
          <div data-v-5cc9f28f="" class="panel-item"><span data-v-5cc9f28f="" class="field-tt">送至：</span>
            <span data-v-5cc9f28f="" class="panel-address">上海</span>
            <div data-v-5cc9f28f="" class="sect-freight">
              <div data-v-5cc9f28f="" class="address-promo">
                <div data-v-5cc9f28f="" class="cont">
                  <p data-v-5cc9f28f="" style="width: 100%;">上海￥99包邮</p>

                  <!--购物总价不满99时显示-->
                  <p data-v-5cc9f28f="" class="tip" style="width: 100%;">你还差
                    <span style="color:#cc0000">￥70</span>，即可享受
                    <span style="color:#cc0000">免运费</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--结算区域-->
      <div data-v-5cc9f28f="" class="cart-panel">
        <ul data-v-5cc9f28f="">
          <li data-v-5cc9f28f="" class="check-all">
            <span data-v-5cc9f28f="" class="selectwrap selected">
              <span data-v-5cc9f28f="" class="slct"></span>
              <span data-v-5cc9f28f="" class="slct-txt">全选</span>
            </span>
          </li>
          <li data-v-5cc9f28f="" class="btn-com">
            <span data-v-5cc9f28f="" class="cart-btn-txt">去结算
              <span data-v-5cc9f28f="">(1)</span>
            </span>
          </li>
          <li data-v-5cc9f28f="" class="btn-com del" style="display: none;">
            <span data-v-5cc9f28f="" class="cart-btn-txt">删除</span>
          </li>
          <li data-v-5cc9f28f="" class="cart-count">
            <p data-v-5cc9f28f="">合计：
              <em data-v-5cc9f28f="" class="stress">￥29</em>
            </p>
            <p data-v-5cc9f28f="" class="misc">商品 ￥29 - 优惠 ￥0</p>
          </li>
        </ul>
      </div>
    </div>

    <!--购物推荐-->
    <div class="commend" v-show="false">
      <div class="carts-link-toShop">
        <router-link to="/home">赶紧去逛逛</router-link>
        <!--<a href=""></a>-->
      </div>
      <div class="cart-recommend">
        <div class="recommend-tittle">
          <p>Rico.S为你精心推荐</p>
        </div>
        <div class="recommend-list">
          <ul>
            <li>
              <div class="cart-assem-item">
                <a href="">
                  <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg" alt="">
                </a>
                <p class="title">自粘式缝隙贴(2卷装)</p>
                <p class="price">￥19</p>
              </div>
            </li>
            <li>
              <div class="cart-assem-item">
                <a href="">
                  <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg" alt="">
                </a>
                <p class="title">自粘式缝隙贴(2卷装)</p>
                <p class="price">￥19</p>
              </div>
            </li>
            <li>
              <div class="cart-assem-item">
                <a href="">
                  <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg" alt="">
                </a>
                <p class="title">自粘式缝隙贴(2卷装)</p>
                <p class="price">￥19</p>
              </div>
            </li>
            <li>
              <div class="cart-assem-item">
                <a href="">
                  <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg" alt="">
                </a>
                <p class="title">自粘式缝隙贴(2卷装)</p>
                <p class="price">￥19</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--凑单免运费-->
    <div class="buygoods">
      <div class="cart-recommend">
        <div data-v-5cc9f28f="" class="cart-assem-title life-lh-assemTit">凑单免运费：
          <router-link to="/allproducts" class="skip-assem">查看凑单商品</router-link>
          <!--<a data-v-5cc9f28f="" href="#/cart/freeshipping" class="skip-assem">查看凑单商品</a>-->
        </div>

        <div class="recommend-list">
          <ul>
            <li>
              <div class="cart-assem-item">
                <a href="">
                  <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg" alt="">
                </a>
                <p class="title">自粘式缝隙贴(2卷装)</p>
                <p class="price">￥19</p>
              </div>
            </li>
            <li>
              <div class="cart-assem-item">
                <a href="">
                  <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg" alt="">
                </a>
                <p class="title">自粘式缝隙贴(2卷装)</p>
                <p class="price">￥19</p>
              </div>
            </li>
            <li>
              <div class="cart-assem-item">
                <a href="">
                  <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg" alt="">
                </a>
                <p class="title">自粘式缝隙贴(2卷装)</p>
                <p class="price">￥19</p>
              </div>
            </li>
            <li>
              <div class="cart-assem-item">
                <a href="">
                  <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg" alt="">
                </a>
                <p class="title">自粘式缝隙贴(2卷装)</p>
                <p class="price">￥19</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cartctrol from '../cartcontrol/cartcontrol.vue'
  export default {
      props:['isedit'],
      components:{
        cartctrol
      },
      updated(){
//          console.log(this.isedit)
      }
  }
</script>

<style scoped>
  .commend, .buygoods {
    background-color: #fff;
  }

  .wrap-cart-cont {
    background-color: #f2f2f2;;
    padding: 0;
    padding-bottom: 8.5rem;
    margin: 0;
    margin-top: 152.172px;
    width: 100%;
    overflow: hidden;
    color: #2e2e2e;
  }

  .wrap-nodata {
    margin: 0 auto;
  }

  .wrap-nodata .carts-img {
    margin: 0 auto;
    text-align: center;
    padding-left: 2rem;
    padding-top: 10px;
    box-sizing: border-box;
  }

  .carts-img img {
    text-align: center;
    max-width: 160px;
  }

  .wrap-nodata .carts-text {
    text-align: center;
    font-size: 1.4rem;
    color: rgb(102, 102, 102);
    line-height: 3rem;
  }

  .wrap-nodata .carts-text p {
    line-height: 1.5em;
  }

  .wrap-nodata .carts-link-toShop {
    text-align: center;
  }

  .wrap-nodata .carts-link-toShop a {
    border: 1px solid rgb(137, 190, 72);
    padding: 0.5rem 1.5rem;
    display: inline-block;
    border-radius: 6px;
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-top: 6px;
    color: rgb(137, 190, 72);
  }

  .wrap-nodata .cart-recommend {
    /*position: fixed;*/
    /*bottom: 4rem;*/
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    margin: 1rem auto 0;
  }

  .wrap-nodata .cart-recommend .recommend-tittle {
    width: 94%;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    text-align: left;
    font-size: 1.3rem;
    color: #333;
    line-height: 2rem;
    margin: 0 auto;
    padding: .8rem 3%;
  }

  .wrap-nodata .cart-recommend .recommend-tittle p {
    line-height: 1.5em;
  }

  .recommend-list {
    width: 100%;
    max-height: 12rem;
    overflow-y: hidden;
    overflow-x: scroll;
    margin: 0 auto;
    padding: 1.3rem 0;
  }

  .recommend-list ul {
    width: 2120px;
    overflow: hidden;
    height: 12rem;
  }

  .recommend-list ul li {
    margin: 0 5px;
    width: 8rem;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    text-align: left;
  }

  .cart-assem-item {
    width: 100%;
    margin: 0;
    overflow: hidden;
  }

  .cart-assem-item a {
    width: 100%;
    overflow: hidden;
    display: block;
  }

  .cart-assem-item a img {
    width: 100%;
    overflow: hidden;
    display: block;
  }

  .cart-assem-item .title {
    width: 100%;
    display: block;
    text-align: left;
    font-size: 1rem;
    color: #333;
    line-height: 2rem;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
  }

  .wrap-cart-promo {
    width: 94%;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    margin: 0 auto;
    padding: .5rem 3%;
  }

  .wrap-cart-promo .promo-cont {
    width: 100%;
    height: 1.8rem;
    overflow: hidden;
    display: block;
    font-size: 1.2rem;
    color: #4a4a4a;
    line-height: 1.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    /*-o-text-overflow: ellipsis;*/
    margin: .6rem 0;
    padding: 0;
  }

  .wrap-cart-promo a {
    max-width: 100%;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    -o-text-overflow: ellipsis;
    margin: 0;
    padding: 0;
    color: #4a4a4a;
    text-decoration: none;
    cursor: pointer;
  }

  .wrap-cart-promo .act-tag {
    display: inline-block;
    background-color: #ab2c2b;
    text-align: center;
    font-size: 1.1rem;
    color: #fff;
    padding: 0 5px;
    margin-right: 8px;
  }

  .wrap-cart-promo a .promo-skip, .wrap-cart-promo a .promo-skip:after {
    width: 0;
    height: 0;
    display: inline-block;
    font-size: 0;
    line-height: 0;
    border-style: solid;
    border-width: 5px 0 5px 6px;
    border-color: transparent #4a4a4a;
    margin-left: 8px;
    position: relative;
    top: 1px;
    color: #4a4a4a;
    text-decoration: none;
    cursor: pointer;
  }

  .wrap-cartgrid .cart-item {
    background: #fff;
    position: relative;
  }

  .wrap-cartgrid, .wrap-cartgrid .cart-item {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
  }

  .wrap-cartgrid ul {
    width: 104%;
    background: #fff;
    margin: 0;
    padding: 0;
  }

  .sd-btns, .sd-del-content {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }

  .sd-del-content {
    left: 0;
  }

  .wrap-cartgrid .chk {
    width: 30px;
    overflow: hidden;
    padding: 42px 4px 0 12px;
  }

  .wrap-cartgrid li {
    float: left;
    padding: 5px 0;
  }

  .selectwrap, .selectwrap .slct {
    display: inline-block;
    float: left;
  }

  .selectwrap {
    overflow: hidden;
    line-height: 20px;
    cursor: pointer;
  }

  .selectwrap.selected .slct {
    background-color: #8ec351;
    border-color: #84be43;
  }

  .selectwrap .slct {
    width: 19px;
    height: 19px;
    background-color: #fff;
    border: 1px solid #9b9b9b;
    border-radius: 50%;
    position: relative;
  }

  /*选中*/
  .selectwrap, .selectwrap .slct {
    display: inline-block;
    float: left;
  }

  .selectwrap.selected .slct:after {
    content: "";
    width: 11px;
    height: 5px;
    display: block;
    border-bottom: 2px solid #fafafa;
    border-left: 2px solid #fafafa;
    font-size: 0;
    line-height: 0;
    position: absolute;
    left: 3px;
    top: 4px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  /*不选中*/
  .selectwrap .slct {
    width: 19px;
    height: 19px;
    background-color: #fff;
    border: 1px solid #9b9b9b;
    border-radius: 50%;
    position: relative;
  }

  .wrap-cartgrid .item-pic {
    width: 75px;
    padding-right: 15px;
  }

  .item-pic {
    position: relative;
    z-index: 5;
  }

  .wrap-cartgrid .item-pic a {
    width: 75px;
    height: 75px;
    overflow: hidden;
    display: block;
    position: relative;
  }

  .wrap-cartgrid .item-pic img {
    width: 100%;
    display: block;
  }

  @media only screen and (min-width: 370px) {
    .item-info[data-v-5cc9f28f] {
      padding-right: 6%;
    }
  }

  .wrap-cartgrid .item-info p {
    width: 100%;
    height: 20px;
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;
    position: relative;
  }

  p {
    line-height: 1.5em;
  }

  .wrap-cartgrid .item-title {
    max-width: 70%;
    height: 20px;
    overflow: hidden;
    display: inline-block;
    float: left;
    text-align: left;
    font-size: 14px;
    color: #4a4a4a;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    -o-text-overflow: ellipsis;
  }

  .wrap-cartgrid .item-title a {
    color: #4a4a4a;
  }

  .wrap-cartgrid .item-original, .wrap-cartgrid .item-price {
    height: 20px;
    display: inline-block;
    background-color: #fff;
    text-align: right;
    line-height: 20px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .wrap-cartgrid .item-price {
    font-size: 14px;
    color: #4a4a4a;
  }

  .wrap-cartgrid .item-spec {
    max-width: 70%;
    height: 20px;
    overflow: hidden;
    display: inline-block;
    float: left;
    text-align: left;
    font-size: 13px;
    color: #9b9b9b;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    -o-text-overflow: ellipsis;
  }

  .wrap-cartgrid .hide {
    display: none;
  }

  .wrap-cartgrid .item-original {
    font-size: 12px;
    color: #9b9b9b;
    text-decoration: line-through;
  }

  .wrap-cartgrid .item-quantity {
    width: 100%;
    height: 28px;
    overflow: hidden;
    display: block;
    margin: 7px 0 0;
    padding: 0;
    position: relative;
  }

  .wrap-cartgrid .quantity {
    height: 28px;
    display: inline-block;
    background-color: #fff;
    text-align: right;
    font-size: 14px;
    color: #4a4a4a;
    line-height: 28px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .sd-del-content .item-info {
    float: right;
    width: 230px;
    position: relative;
  }

  .cart-item-group, cart-item {
    border-bottom: 1px solid #f2f2f2;
  }

  .cart-panel {
    width: 100%;
    height: 4rem;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #f6f6f6;
    color: gray;
    position: fixed;
    left: 0;
    bottom: 4.5rem;
    z-index: 999;
  }

  .cart-panel .check-all {
    margin: 13px 0 0 12px;
  }

  .cart-panel li {
    float: left;
  }

  .selectwrap, .selectwrap .slct {
    display: inline-block;
    float: left;
  }

  .selectwrap {
    overflow: hidden;
    line-height: 20px;
    cursor: pointer;
  }

  .selectwrap .slct-txt {
    text-align: left;
    font-size: 1.35rem;
    color: #4a4a4a;
    padding-left: .6rem;
  }

  .cart-panel .btn-com {
    width: 30%;
    height: 100%;
    float: right;
    background-color: #8ec351;
    border: 0;
    border-bottom: 1px solid #8ec351;
    border-top: 1px solid #8ec351;
    border-radius: 0;
    text-align: center;
    font-size: 1.7rem;
    color: #fff;
    line-height: 4rem;
    letter-spacing: 2px;
    text-indent: 2px;
    position: absolute;
    right: 0;
    top: -1px;
  }

  .btn-com {
    width: 92%;
    overflow: hidden;
    display: block;
    margin: 0 auto;
    background-color: #009c42;
    border: 1px solid #009c42;
    border-radius: 5px;
    outline: none;
    text-align: center;
    font-size: 1.9rem;
    color: #fff;
    line-height: 3.6rem;
  }

  .cart-panel .btn-com .cart-btn-txt {
    height: 100%;
    display: inline-block;
    line-height: 4rem;
  }

  .cart-panel .btn-com .cart-btn-txt span {
    font-size: 1.4rem;
    letter-spacing: 0;
  }

  .cart-panel .btn-com.del {
    background-color: #ab2c2b;
    border-color: #ab2c2b;
  }

  .cart-panel .cart-count {
    width: 45%;
    height: 4rem;
    overflow: hidden;
    float: right;
    text-align: right;
    font-size: 1.55rem;
    color: #4a4a4a;
    line-height: 2rem;
    margin: 0;
    padding-right: 32%;
  }

  .cart-panel .cart-count p {
    padding: .2rem 0 .1rem;
    font-size: 1.3rem;
  }

  em, i {
    font-style: normal;
  }

  .cart-panel .stress {
    color: #ab2c2b;
  }

  .cart-panel .cart-count .misc {
    font-size: 1rem;
    line-height: 1.2rem;
    padding: 0;
  }

  .life-lh-assemTit {
    font-size: 1.4rem;
  }

  .cart-assem-title {
    width: 94%;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    text-align: left;
    font-size: 1.3rem;
    color: #333;
    line-height: 2rem;
    margin: 0 auto;
    padding: .8rem 3%;
  }

  .cart-assem-title .skip-assem {
    display: inline-block;
    float: right;
    text-align: right;
    padding-right: 22px;
    position: relative;
  }

  .cart-assem-title .skip-assem:after {
    content: "";
    width: 10px;
    height: 10px;
    overflow: hidden;
    display: block;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    position: absolute;
    right: 5px;
    top: 6px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }

  .buygoods {
    margin-top: 12px;
  }

  .wrap-cart-panel.cart-panle-address {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 0;
  }

  .wrap-cart-panel {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
  }

  .wrap-cart-panel.cart-panle-address .panel-item {
    padding-top: 1rem;
  }

  .wrap-cart-panel .panel-item {
    width: 94%;
    overflow: hidden;
    text-align: left;
    font-size: 1.25rem;
    color: #4a4a4a;
    line-height: 2rem;
    margin: 0 auto;
    padding: .5rem 0;
  }

  .wrap-cart-panel .panel-item .field-tt {
    display: inline-block;
    float: left;
    line-height: 2.4rem;
  }
  .wrap-cart-panel .panel-item .panel-address {
    max-width: 21%;
    height: 2rem;
    overflow: hidden;
    display: inline-block;
    float: left;
    border: 1px solid #cdcdcd;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    -o-text-overflow: ellipsis;
    margin-right: 8px;
    padding: 1px 25px 1px 3px;
    position: relative;
  }

  .wrap-cart-panel .panel-item .panel-address:after {
    content: "";
    width: 8px;
    height: 8px;
    overflow: hidden;
    display: block;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
    position: absolute;
    right: 5px;
    top: 5px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }

  .wrap-cart-panel .panel-item .sect-freight {
    width: 57%;
    overflow: hidden;
    display: block;
    float: left;
    margin-top: -6px;
  }

  .wrap-cart-panel .panel-item .address-promo {
    width: 100%;
    height: 36px;
    overflow: hidden;
    display: table;
    float: left;
    text-align: left;
    font-size: 12px;
    color: #4a4a4a;
    line-height: 18px;
  }

  .wrap-cart-panel .panel-item .address-promo .cont {
    height: 36px;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    line-height: normal;
  }

  .wrap-cart-panel .panel-item .address-promo p {
    width: 70%;
    height: 18px;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    -o-text-overflow: ellipsis;
  }

  .wrap-cart-panel .panel-item .address-promo .tip {
    color: #9b9b9b;
  }

  .wrap-cartgrid .edit .spec-selector {
    height: 22px;
    overflow: hidden;
    display: block;
    background-color: #f9fff1;
     border: 1px solid #6fbd00;
    text-align: left;
    font-size: 12px;
    color: #4a4a4a;
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    -o-text-overflow: ellipsis;
    margin-right: 35px;
    padding: 0 27px 0 8px;
    position: relative;
  }

  .wrap-cartgrid .edit .spec-selector:after, .wrap-cartgrid .edit .spec-selector:before {
    content: "";
    width: 0;
    height: 0;
    display: inline-block;
    font-size: 0;
    line-height: 0;
    border-style: solid;
    border-width: 6px 5px 0;
    border-color: #9b9b9b transparent;
    position: absolute;
    right: 8px;
    top: 7px;
    z-index: 3;
  }

  .wrap-cartgrid .edit .del {
    width: 16px;
    height: 17px;
    display: inline-block;
    float: right;
    background: url(http://i2.lifevccdn.com/images/m/h5/cart_delete@2x.png) no-repeat 0 0;
    background-size: 100%;
    cursor: pointer;
    margin-top: -20px;
  }

  .wrap-cartgrid .edit .quantity-editor {
    width: 100%;
    height: 28px;
    overflow: hidden;
    display: block;
    margin: 23px 0 0;
    padding: 0;
    position: relative;
  }

  .wrap-cartgrid .tag-act, .wrap-cartgrid .tag-act-wrap {
    overflow: hidden;
    display: inline-block;
    float: left;
    text-align: left;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    -o-text-overflow: ellipsis;
  }

  .wrap-cartgrid .tag-act-wrap {
    max-width: 70%;
    height: 28px;
    color: #ab2c2b;
    line-height: 28px;
  }

  .wrap-cartgrid .tag-act {
    height: 28px;
    color: #cb0101;
    line-height: 20px;
    height: 20px;
    margin-right: 5px;
    border: 1px solid #ab2c2b;
    padding-left: 3px;
    padding-right: 3px;
  }
</style>
