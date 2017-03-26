<template>
  <Row class="container">
    <Col span="3">
    <img src="http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg" alt="logo" class="img">
    </Col>
    <Col span="16" class="hehe">
    <p>用户名:小叮当</p>
    <p>铜牌会员</p>
    <p>账户安全:60分</p>
    </Col>
  </Row>
</template>

<style scoped>
  .container{
    /*background:linear-gradient(to bottom, #fb9f33 0%,rgb(245, 248, 250) 100%);*/
    background-color:#F2C993;
    background-image: url("../assets/img/bg.jpg");
    background-repeat: no-repeat;
    padding: 10px;
  }
  .hehe {
    padding: 25px;
  }

  .hehe p {
    margin-bottom: 10px;
  }

  .img {
    border-radius: 50%;
    border: 10px solid #fb9f33;
    max-width: 100px;
    max-height: 100px;

  }
</style>
