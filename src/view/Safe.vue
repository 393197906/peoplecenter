<template>
  <div>
    <SubTitle word1="账户安全" word2="Set up Safety"></SubTitle>
    <div class="content">
      <!--个人信息-->
      <Row>
        <Col span="4">
        <img src="http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg" alt="logo" class="img">
        </Col>
        <Col span="16" class="hehe">
        <p>用户名:小叮当</p>
        <p>铜牌会员</p>
        <p>账户安全:60分</p>
        </Col>
      </Row>

      <!--详情-->
      <Row style="margin-top: 30px;">
        <Col span="4" class="center">
        <span class="icon-f icon-c-1">
          <Icon type="unlocked" color="#fff"></Icon>
        </span>
        </Col>
        <Col span="16">
        <h3>登录密码</h3>
        <p class="p-margin">为保障您购物安全，建议您定期更改密码以保护账户安全。</p>
        </Col>
        <Col span="4">
        <br>
        <Button type="success">修改</Button>
        </Col>
      </Row>
      <Row style="margin-top: 30px;">
        <Col span="4" class="center">
        <span class="icon-f icon-c-2">
          <Icon type="locked" color="#fff"></Icon>
        </span>
        </Col>
        <Col span="16">
        <h3>支付密码</h3>
        <p class="p-margin">启动支付密码功能，为您资产账户安全加吧锁</p>
        </Col>
        <Col span="4">
        <br>
        <Button type="warning">启用</Button>
        </Col>
      </Row>
      <Row style="margin-top: 30px;">
        <Col span="4" class="center">
        <span class="icon-f icon-c-3">
          <Icon type="iphone" color="#fff"></Icon>
        </span>
        </Col>
        <Col span="16">
        <h3>手机验证</h3>
        <p class="p-margin">您验证的手机：186XXXXXXXX 若已丢失或停用，请立即更换</p>
        </Col>
        <Col span="4">
        <br>
        <Button type="error">换绑</Button>
        </Col>
      </Row>
      <Row style="margin-top: 30px;">
        <Col span="4" class="center">
        <span class="icon-f icon-c-4">
          <Icon type="email" color="#fff"></Icon>
        </span>
        </Col>
        <Col span="16">
        <h3>邮箱验证</h3>
        <p class="p-margin">您验证的邮箱：5831XXX@qq.com 可用于快速找回登录密码。</p>
        </Col>
        <Col span="4">
        <br>
        <Button type="error">换绑</Button>
        </Col>
      </Row>
      <Row style="margin-top: 30px;">
        <Col span="4" class="center">
        <span class="icon-f icon-c-5">
          <Icon type="person" color="#fff"></Icon>
        </span>
        </Col>
        <Col span="16">
        <h3>实名认证</h3>
        <p class="p-margin">用于提升账号的安全性和信任级别，认证后不能修改认证信息。</p>
        </Col>
        <Col span="4">
        <br>
        <Button type="success">认证</Button>
        </Col>
      </Row>
      <Row style="margin-top: 30px;">
        <Col span="4" class="center">
        <span class="icon-f icon-c-1">
          <Icon type="medkit" color="#fff"></Icon>
        </span>
        </Col>
        <Col span="16">
        <h3>安全问题</h3>
        <p class="p-margin">保护账户安全，验证您身份的工具之一。</p>
        </Col>
        <Col span="4">
        <br>
        <Button type="success">认证</Button>
        </Col>
      </Row>
    </div>
  </div>
</template>

<style scoped>
  .p-margin {
    margin-top: 16px;
  }

  .center {
    text-align: center;
  }

  .icon-f {
    display: inline-block;
    text-align: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 28px;
    border-radius: 50%;
    font-color: #fff;
  }

  .icon-c-1 {
    background-color: #F99798;
  }

  .icon-c-2 {
    background-color: #C9C9C9;
  }

  .icon-c-3 {
    background-color: #FF6262;
  }

  .icon-c-4 {
    background-color: #609CE3;
  }

  .icon-c-5 {
    background-color: #F69954;
  }

  .hehe {
    padding: 60px;
  }

  .hehe p {
    margin-bottom: 10px;
  }

  .img {
    border-radius: 50%;
    border: 10px solid yellow;
  }

  .content {
    padding: 20px;
  }
</style>

<script>
  import SubTitle from '@/components/SubTitle'
  export default {
    components: {SubTitle},
  }

</script>
