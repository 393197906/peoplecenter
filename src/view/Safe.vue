<template>
  <div>
    <SubTitle word1="账户安全" word2="Set up Safety"></SubTitle>
    <div class="content">
      <!--个人信息-->
      <UserInfo></UserInfo>
      <!--详情-->
      <Password></Password>
      <!--<Row style="margin-top: 30px;">-->
        <!--<Col span="4" class="center">-->
        <!--<span class="icon-f icon-c-2">-->
          <!--<Icon type="locked" color="#fff"></Icon>-->
        <!--</span>-->
        <!--</Col>-->
        <!--<Col span="16">-->
        <!--<h3>支付密码</h3>-->
        <!--<p class="p-margin">启动支付密码功能，为您资产账户安全加吧锁</p>-->
        <!--</Col>-->
        <!--<Col span="4">-->
        <!--<br>-->
        <!--<Button type="warning" @click="viewModal('payPassword')">启用</Button>-->
        <!--</Col>-->
      <!--</Row>-->
      <!--<Row style="margin-top: 30px;">-->
      <!--<Col span="4" class="center">-->
      <!--<span class="icon-f icon-c-3">-->
      <!--<Icon type="iphone" color="#fff"></Icon>-->
      <!--</span>-->
      <!--</Col>-->
      <!--<Col span="16">-->
      <!--<h3>手机验证</h3>-->
      <!--<p class="p-margin">您验证的手机：186XXXXXXXX 若已丢失或停用，请立即更换</p>-->
      <!--</Col>-->
      <!--<Col span="4">-->
      <!--<br>-->
      <!--<Button type="error" @click="viewModal('phone')">换绑</Button>-->
      <!--</Col>-->
      <!--</Row>-->
      <!--<Row style="margin-top: 30px;">-->
      <!--<Col span="4" class="center">-->
      <!--<span class="icon-f icon-c-4">-->
      <!--<Icon type="email" color="#fff"></Icon>-->
      <!--</span>-->
      <!--</Col>-->
      <!--<Col span="16">-->
      <!--<h3>邮箱验证</h3>-->
      <!--<p class="p-margin">您验证的邮箱：5831XXX@qq.com 可用于快速找回登录密码。</p>-->
      <!--</Col>-->
      <!--<Col span="4">-->
      <!--<br>-->
      <!--<Button type="error" @click="viewModal('email')">换绑</Button>-->
      <!--</Col>-->
      <!--</Row>-->
      <!--<Row style="margin-top: 30px;">-->
      <!--<Col span="4" class="center">-->
      <!--<span class="icon-f icon-c-5">-->
      <!--<Icon type="person" color="#fff"></Icon>-->
      <!--</span>-->
      <!--</Col>-->
      <!--<Col span="16">-->
      <!--<h3>实名认证</h3>-->
      <!--<p class="p-margin">用于提升账号的安全性和信任级别，认证后不能修改认证信息。</p>-->
      <!--</Col>-->
      <!--<Col span="4">-->
      <!--<br>-->
      <!--<Button type="success" @click="viewModal('attest')">认证</Button>-->
      <!--</Col>-->
      <!--</Row>-->
      <!--<Row style="margin-top: 30px;">-->
      <!--<Col span="4" class="center">-->
      <!--<span class="icon-f icon-c-1">-->
      <!--<Icon type="medkit" color="#fff"></Icon>-->
      <!--</span>-->
      <!--</Col>-->
      <!--<Col span="16">-->
      <!--<h3>安全问题</h3>-->
      <!--<p class="p-margin">保护账户安全，验证您身份的工具之一。</p>-->
      <!--</Col>-->
      <!--<Col span="4">-->
      <!--<br>-->
      <!--<Button type="success" @click="viewModal('safeQuestion')">认证</Button>-->
      <!--</Col>-->
      <!--</Row>-->
    </div>
  </div>

</template>

<script>
  import SubTitle from '@/components/SubTitle'
  import UserInfo from '@/components/UserInfo'
  import Password from '@/components/safe/Password'
  export default {
    components: {SubTitle, UserInfo,Password},
    data(){
      return {}
    },
    methods: {

    }
  }

</script>

<style scoped>
  .content {
    padding: 20px;
  }
</style>

