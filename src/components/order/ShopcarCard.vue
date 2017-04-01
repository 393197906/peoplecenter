<template>
  <div class="container">
    <div class="img-container" :style="{height:`${height}px`}">
      <img :src="goodsImg" alt="goods">
    </div>
    <div class="content">
      <p>¥{{goodsPrice}} <span style="color:#fb9f33"> * {{goodsNum}}</span></p>
      <p>{{goodsTitle}}</p>
    </div>
  </div>
</template>
<script>
  export  default{
    props: {
      goodsId: {
        type: Number
      },
      goodsImg: {
        type: String
      },
      goodsTitle: {
        type: String
      }
      , goodsPrice: {
        type: Number
      }
      , goodsNum: {
        type: Number
      },
      height: {
        type: Number,
        default: 150
      }
    }

  }
</script>
<style scoped>
  .container {
    border: 1px solid #e3e8ee;
    border-radius: 2px;
  }

  .container:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  }

  .img-container {
    height: 160px;
  }

  .img-container img {
    width: 100%;
    height: 100%;
  }

  .content {
    padding: 10px;
    font-size: 12px;
  }

  .content > * {
    margin-top: 10px;
  }

  .content p:first-child {
    color: #f40;
  }

  .content p:last-child {
    margin-top: 3px;
    line-height: 18px;
  }
</style>
