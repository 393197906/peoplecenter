<template>
    <Row class="container">
      <Col span="3">
      <img class='img' src="http://tpl.amazeui.org/template/10/shop/one/images/kouhong.jpg_80x80.jpg" alt="image">
      </Col>
      <Col span="7">
      我是一件商品标题
      </Col>
      <Col span="10">
      <p>快件已从 义乌 发出</p>
      <p class="detail">2015-12-20 17:58:05 <strong>查看物流明细</strong></p>
      </Col>
      <Col span="4" style="text-align: center">
      <Button type="default">确认收货</Button>
      </Col>
    </Row>
</template>
<script>

</script>

<style scoped>
  .img{
    width:80px;
    height:80px;
  }
  .detail{
    margin-top: 35px;
  }
  .detail strong{
    cursor: pointer;
  }
</style>
