<template>
  <div class="container">
    <p>
      <Icon type="person"></Icon>
      {{address.contaceperson}}
      <Icon type="iphone" style="margin-left:5px;"></Icon>
      <span style="color:darkred">{{address.mobile_phone}}</span></p>
    <p style="margin-top: 20px;line-height: 20px;">
      <Icon type="ios-location"></Icon>
      地址:  {{address.province}} {{address.city}} {{address.districe}} {{address.address}}
    </p>
    <p class="action">
      <span @click="edit(address.id)"><Icon type="compose"></Icon> 编辑</span> | <span @click="remove(address.id)"><Icon
      type="android-remove-circle"></Icon> 删除</span>
    </p>
    <div class="default-default default" @click="setDefault(address.id)">
      {{address.is_default ? '默认地址' : '设为默认'}}
    </div>
  </div>
</template>

<script>
  import service from '@/service/service'
  export default {
    props: {
      address: {
        type: Object
      }
    },
    methods: {
      edit(id){
        console.log(id);
      },
      remove(id){
        this.$Modal.confirm({
          title: '删除地址',
          content: '确定要删除此地址吗？',
          loading: true,
          onOk: () => {
            service.removeAddress({id}).then(()=>{
              this.$store.dispatch('initAddress').then(() => {
                this.$Modal.remove();
              })
            }).catch(this.doError);
          }
        });
      },
      setDefault(id){
        if(this.address.is_default){
            return;
        }
        this.$Modal.confirm({
          title: '默认地址',
          content: '确定要将此地址设为默认地址吗？',
          loading: true,
          onOk: () => {
              service.setDefaultAddress({id}).then(()=>{
                this.$store.dispatch('initAddress').then(() => {
                  this.$Modal.remove();
                })
              }).catch(this.doError);
          }
        });

      }
    }
  }
</script>

<style scoped>
  .action {
    font-size: 12px;
    position: absolute;
    bottom: 18px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }

  .container {
    font-size: 14px;
    width: 252px;
    height: 151px;
    background-image: url("../assets/img/address-1.png");
    box-sizing: border-box;
    padding: 20px;
    position: relative;
  }

  .default-default {
    position: absolute;
    right: 0;
    top: 0;
    padding: 2px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #fff;
    font-size: 12px;
  }

  .active > .default {
    background-color: rgba(238, 52, 149, 1);
    cursor: default;
  }

  .active > .action {
    color: #657180;
  }

  .container:hover > .default {
    background-color: rgba(238, 52, 149, 1);
    cursor: pointer;
  }

  .container:hover > .action {
    color: #657180;
  }

  .active {
    background-image: url("../assets/img/address-2.png");
  }
</style>
