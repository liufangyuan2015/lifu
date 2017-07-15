<template>
    <div class="wrapper">
      <div class="header-wrapper">
        <div class="header">
          <p>
            全部产品
          </p>
        </div>
      </div>
      <div class="search-panel">
        <div class="from-wrapper">
          <form >
            <input type="search" placeholder="搜索商品" class="searchinput" :class="{changstyle:true}">
            <input type="button" v-show="true" value="取消" class="search-cancel">
          </form>
        </div>
      </div>
      <div class="content-wrapper">
        <goodsBox></goodsBox>
        <goodsBox></goodsBox>
        <goodsBox></goodsBox>
        <goodsBox></goodsBox>
      </div>
      <el-footer></el-footer>
    </div>
</template>

<script>
    import goodsBox from '../life-goodsBox/life-goodsBox.vue'
    import footer from '../footer/footer.vue'
    export default {
        components:{
          goodsBox,
          'el-footer':footer
        }
    }
</script>

<style >
  body{
    background-color: #f2f2f2;
  }
  input:focus{
    outline: none;
  }
  .wrapper{
    position: relative;
  }
  .header-wrapper{
    height: 4rem;
  }
  .header{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 4rem;
    z-index: 100;
    background-color: #89BE48;
    line-height: 4rem;
    vertical-align: middle;
  }
  .header p{
    text-align: center;
    font-size: 1.7rem;
    height: 4rem;
    color: #fff;
    width: 80%;
    margin: 0 auto;
  }
  .search-panel{
    position: relative;
    padding: .5rem 0;
    border-bottom: 1px solid #dedff2;
  }
  .from-wrapper{
    width: 94%;
    height: 3rem;
    overflow: hidden;
    border-radius: 6px;
    margin: 0 auto;
    padding: 0;
    position: relative;
  }
  .searchinput{
    width: 100%;
    height: 3rem;
    background-color: #fff;
    background-image: url('./serach-icon.png');
    background-repeat: no-repeat;
    background-position: 38% .5rem;
    background-size: auto 70%;
    border: 0;
    border-radius: 6px;
    text-align: center;
    font-size: 1.4rem;
    color: #1f5350;
    font-family: Microsoft YaHei;
    margin: 0;
    padding-left: 3rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
  }
  .changstyle{
    width: 88%!important;
    background-position: .4rem .5rem!important;
    text-align: left!important;
  }
  .search-cancel{
    width: 15%;
    height: 3rem;
    display: block;
    float: right;
    background: none;
    background-color: transparent;
    border: 0;
    text-align: right;
    font-size: 1.3rem;
    color: #83b842;
    line-height: 3rem;
  }


</style>
