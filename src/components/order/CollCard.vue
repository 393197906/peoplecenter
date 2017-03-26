<template>
  <div class="container">
    <div class="img-container">
      <img src="http://tpl.amazeui.org/template/10/shop/one/images/kouhong.jpg_80x80.jpg" alt="gooods">
    </div>
    <div class="content">
      <p>¥42.50</p>
      <p>包邮s925</p>
    </div>
  </div>
</template>
<script></script>
<style scoped>
  .container {
    border: 1px solid #e3e8ee;
    border-radius: 2px;
  }
  .container:hover{
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  }

  .img-container {
    height: 150px;
  }

  .img-container img {
    width: 100%;
    height: 100%;
  }

  .content{
    padding: 10px;
  }
  .content p:first-child {
    color: #f40;
  }

  .content p:last-child {
    margin-top: 5px;
  }


</style>
