<template>
    <div class="settings">
      <div class="header">
        <span @click="goback"></span>
        <p>设置</p>
      </div>
      <ul>
        <li class="one">
          <span>清理缓存</span>
          <span class="arr-r"></span>
          <span></span>
        </li>
        <li class="two">
          <span>关于LIfeVC</span>
          <span class="arr-r"></span>
          <span class="small">平台: browser 版本：5.1.2 - 261</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        methods:{
          goback(){
              history.back()
          }
        }
    }
</script>

<style scoped>
  body{
    background-color: #f2f2f2
  }
  .settings{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 100000;
    background-color: #f2f2f2;
  }
  .header{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 4rem;
    background-color: #89BE48;
    line-height: 4rem;
    vertical-align: middle;
  }
  .header span{
    display: inline-block;
    height: 4rem;
    width: 10%;
    position: absolute;
    top:30%;
    left:2%;
    background-image: url('./icon.png');
    background-repeat: no-repeat;
    background-size: 35%;
    /*background-position: 50%;*/
  }
  .header p{
    text-align: center;
    font-size: 1.7rem;
    height: 4rem;
    color: #fff;
    width: 80%;
    margin: 0 auto;
  }
  ul{
    padding-top: 4rem;
  }
  ul li{
    height: 5rem;
    line-height: 5rem;
    font-size: 1.4rem;
    background-color: #fff;
  }
  li span{
    display: inline-block;
    padding-left: 20px;
  }
  .two{
    margin-top:12px ;
  }
  .small{
    display: inline-block;
    float: right;
    padding-left: 0;
    padding-right: 5px;
    font-size: 1rem;
    color: #ccc;
  }
  .arr-r{
    width: 10px;
    height: 10px;
    display: inline-block;
    padding-left: 0;
    float: right;
    border-right: 2px solid #bbb;
    border-top: 2px solid #bbb;
    margin: 25px 10px 0 0;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }
</style>
