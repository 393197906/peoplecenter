<template>
  <div class="container">
    <p><Icon type="person"></Icon> 谢利朋<Icon type="iphone" style="margin-left:10px;"></Icon> <span style="color:darkred">15063281856</span></p>
    <p style="margin-top: 20px;line-height: 20px;"><Icon type="ios-location"></Icon> 地址: 山东省 菏泽市 成武县 大田集镇 谢楼村1271号 </p>
    <p class="action">
      <span><Icon type="compose"></Icon> 编辑</span> | <span><Icon type="android-remove-circle"></Icon> 删除</span>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .action{
    font-size: 12px;
    position: absolute;
    bottom: 18px;
    right:10px;
    cursor: pointer;
  }
  .container{
    width:252px;
    height:151px;
    background-image: url("../assets/img/address-1.png");
    box-sizing: border-box;
    padding: 20px;
    position: relative;
  }
  .active{
    background-image: url("../assets/img/address-2.png");
  }
</style>
