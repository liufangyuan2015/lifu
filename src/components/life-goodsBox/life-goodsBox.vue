<template>
    <div class="life-goodsBox">
      <div class="life-goodsAll">
        <div class="life-goodsTip">
          <p>家务</p>
        </div>
        <ul class="life-goodsUl clearFix">
          <li>
            <img src="./housework01.jpg" alt="">
            <h3>家务工具</h3>
          </li>
          <li>
            <img src="./housework02.jpg" alt="">
            <h3>家庭清洁剂</h3>
          </li>
          <li>
            <img src="./housework03.jpg" alt="">
            <h3>防霉除菌</h3>
          </li>
          <li>
            <img src="./housework04.jpg" alt="">
            <h3>百纳箱</h3>
          </li>
          <li>
            <img src="./housework05.jpg" alt="">
            <h3>衣物收纳</h3>
          </li>
          <li>
            <img src="./housework06.jpg" alt="">
            <h3>霉素洗衣液</h3>
          </li>
          <li>
            <img src="./housework07.jpg" alt="">
            <h3>魔力挂钩</h3>
          </li>
          <li>
            <img src="./housework08.jpg" alt="">
            <h3>生活必备</h3>
          </li>
          <li>
            <img src="./housework09.jpg" alt="">
            <h3>地毯地垫</h3>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
  .life-goodsBox{
    margin-top: 2rem;
  }
  .life-goodsTip{

  }
  .life-goodsTip p{
    height: 3rem;
    line-height: 2.4rem;
    font-size: 1.6rem;
    text-align: center;
  }
  .life-goodsUl{
    background: #fff;
  }
  .clearFix:after{
    content: '';
    clear: both;
    display: table;
  }
  .life-goodsUl li{
    float: left;
    width: 33%;
    text-align: center;
    border: 1px solid #f1f1f1;
    margin: 0 0 -1px -1px;
    height: 138px;
  }
  .life-goodsUl li img{
    width: 60%!important;
    margin: auto;
    padding-top: 1rem;
    vertical-align: middle;
  }
  .life-goodsUl li h3{
    height: 2rem;
    line-height: 2rem;
    padding-bottom: 1rem;
    padding-top: .5rem;
    font-size: 1.1rem;
  }
</style>
