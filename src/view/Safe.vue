<template>
  <div>
    <SubTitle word1="账户安全" word2="Set up Safety"></SubTitle>
    <div class="content">
      <Spin size="large" fix v-if="toggle"></Spin> <!-- 加载动画-->
      <div v-if="!toggle">
        <!--个人信息-->
        <UserInfo></UserInfo>
        <!--详情-->
        <Password></Password>
        <PayPassword v-if="userInfo.payPassword.trim().length===0"></PayPassword>
        <ChangePayPassword v-else></ChangePayPassword>
        <Phone v-if="userInfo.phone.trim().length===0"></Phone>
        <ChangePhone :phone="userInfo.phone" v-else></ChangePhone>
        <Email v-if="userInfo.email.trim().length===0"></Email>
        <ChangeEmail :email="userInfo.email" v-else></ChangeEmail>
      </div>
    </div>
  </div>

</template>

<script>
  import SubTitle from '@/components/SubTitle'
  import UserInfo from '@/components/UserInfo'
  import Password from '@/components/safe/Password'
  import PayPassword from '@/components/safe/PayPassword'
  import ChangePayPassword from '@/components/safe/changePayPassword'
  import Phone from '@/components/safe/Phone'
  import ChangePhone from '@/components/safe/ChangePhone'
  import Email from '@/components/safe/Email'
  import ChangeEmail from '@/components/safe/ChangeEmail'
  export default {
    components: {SubTitle, UserInfo, Password, PayPassword, ChangePayPassword, Phone, ChangePhone, Email, ChangeEmail},
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
  .content {
    padding: 20px;
    position: relative;
  }
</style>

