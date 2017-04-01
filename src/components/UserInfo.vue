<template>
  <Row class="container">
    <Spin size="large" fix v-if="toggle"></Spin> <!-- 加载动画-->
    <Col span="3" v-if="!toggle">
    <img :src="userInfo.img" alt="logo" class="img">
    </Col>
    <Col span="16" class="hehe" v-if="!toggle">
    <p>用户名:{{userInfo.title1}}</p>
    <!--<p>铜牌会员{{userInfo.title2}}</p>-->
    <!--<p>账户安全:60分{{userInfo.title3}}</p>-->
    </Col>
  </Row>
</template>
<script>
  export default{
    data(){
      return {
        toggle: true
      }
    },
    async created(){
      if (this.$store.state.userInfo.userInfo) {
        this.toggle = false;
        return;
      }
      await this.$store.dispatch('initUserInfo').catch(this.doError);
      this.toggle = false;
    },
    computed: {
      userInfo(){
        return this.$store.state.userInfo.userInfo;
      }
    }
  }
</script>
<style scoped>
  .container {
    /*background:linear-gradient(to bottom, #fb9f33 0%,rgb(245, 248, 250) 100%);*/
    background-color: #F2C993;
    background-image: url("../assets/img/bg.jpg");
    background-repeat: no-repeat;
    padding: 10px;
    position: relative;
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
