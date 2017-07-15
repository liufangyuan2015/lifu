<template>
    <div class="cartcontrol">
      <span data-v-5cc9f28f="" class="decrement">-</span>
      <span data-v-5cc9f28f="" type="text" class="quantity-num">1</span>
      <span data-v-5cc9f28f="" class="increment">+</span>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>

  .cartcontrol{
    background-color: #fff;
    width:110px;
    display: flex;
    float: right;
    color: #6fbd00;
  }

  .increment,.decrement,.quantity-num{
    width: 33%;
    flex: 1;
    background-color: #fff;
    border: 1px solid #6fbd00;
    text-align: center;
    line-height: 26px;
    font-size: 20px;
  }
  .quantity-num{
    font-size: 14px!important;
  }

</style>
