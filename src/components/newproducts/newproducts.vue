<template>
  <div class="wrap-shelf">
    <div data-v-2fe9e177="" class="subcat-title">最近一周新品</div>

    <div data-v-cbe28f50="" data-v-2fe9e177="" class="shelf-item" style="position: relative;" v-for="(product,index) in newproducts" :key="index">
      <router-link :to="`/productdetail/${product.productId}` " class="item-pic-bx">
        <img  class="item-pic" :src="product.img" lazy="loaded">
        <div  class="item-status-empty" v-show="product.Inventory===0">
          热卖脱销
        </div>
      </router-link>

      <!--<a data-v-cbe28f50="" class="item-pic-bx">-->
        <!--<img data-v-cbe28f50="" class="item-pic" src="" lazy="loaded">-->
      <!--&lt;!&ndash;&ndash;&gt;-->
        <!--<div data-v-cbe28f50="" class="item-status-empty" >-->
        <!--热卖脱销-->
        <!--</div>-->
    <!--</a>-->
      <div data-v-cbe28f50="" class="item-panel">
        <div data-v-cbe28f50="" class="title clearFix">
          {{product.name}}
        </div>
        <div data-v-cbe28f50="" class="item-price">
          <div data-v-cbe28f50="" class="price-cont">
            <span class="act-tag" ></span>
            <span data-v-cbe28f50="">￥</span>
            <span data-v-cbe28f50="">{{product.price}}</span>&nbsp;
            <span data-v-cbe28f50="" class="original-price" v-show="product.oldPrice">{{product.oldPrice}}</span>
            <span data-v-cbe28f50="" class="promo-lable" v-show="product.isNew">新</span>
          </div>
          <div  class="item-comment" v-if="product.comments">评论：{{product.comments.length}}</div>
        </div>
      </div>
      <div ></div>
    </div>

  </div>
</template>

<script>
  export default {
      props:["newproducts"],
    created(){
          console.log(this.newproducts)
    }
  }
</script>

<style scoped>
  .wrap-shelf {
    background-color: #f2f2f2;
    width: 100%;
    margin: -7em auto 2em;
    padding: 7em 0 0;
  }

  .subcat-title {
    max-width: 96%;
    text-align: center;
    font-size: 1.6em;
    color: #000;
    line-height: 2em;
    margin: 0 auto -1.2em;
  }
  .shelf-item {
    position: relative;
    width: 96%;
    border: 1px solid #ddd;
    margin: 2rem auto 0;
  }
  .shelf-item .item-pic-bx {
    width: 100%;
    overflow: hidden;
    display: block;
    position: relative;
  }
  .shelf-item .item-pic {
    width: 100%;
    display: block;
    vertical-align: top;
    margin: 0 auto;
    position: static;
  }
  .item-status-empty {
    display: none;
    width: 7rem;
    height: 7rem;
    background-color: rgba(0,0,0,.6);
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    font-size: 1.5em;
    color: #fff;
    line-height: 7rem;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -4rem;
    margin-left: -3.5rem;
  }
  .shelf-item .item-panel {
    width: 100%;
    background: #fff;
    color: #333;
    padding-bottom: .3rem;
  }
  .shelf-item .item-panel, .shelf-item .profile {
    overflow: hidden;
    font-size: 1.35rem;
    line-height: 2.6rem;
  }
  .shelf-item .item-panel .item-price, .shelf-item .item-panel .title {
    width: 94%;
    overflow: hidden;
    margin: 0 auto;
  }
  .shelf-item .item-panel .title {
    text-align: left;
    font-size: 1.35rem;
    color: #333;
    line-height: 2.6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: .5rem;
  }
  .shelf-item .item-panel .price-cont {
    min-width: 68%;
    overflow: hidden;
    float: left;
    line-height: 1.8rem;
    margin-top: .2rem;
  }
  .shelf-item .item-panel .act-tag {
    background-color: #fff000;
  }
  .shelf-item .item-panel .act-tag-red, .shelf-item .item-panel .promo-lable {
    background-color: #c00;
    color: #fff;
  }
  .shelf-item .item-panel .item-comment {
    float: right;
    text-align: right;
    color: #999;
  }
</style>
