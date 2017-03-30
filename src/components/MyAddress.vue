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

    <!--修改地址-->
    <Modal
      v-model="modal"
      title="收货地址修改"
      width="600"
    >
      <Form ref="formValidate" :model="editValidate" :rules="editRule" :label-width="80">
        <Form-item label="收货人" prop="contaceperson">
          <Input v-model="editValidate.contaceperson" placeholder="请输入收件人"></Input>
        </Form-item>
        <Form-item label="联系电话" prop="mobile_phone">
          <Input v-model="editValidate.mobile_phone" placeholder="请输入收件人电话"></Input>
        </Form-item>
        <Form-item label="所在地" prop="address">
          <Cascader :data="threeData" v-model="editValidate.address"></Cascader>
        </Form-item>
        <Form-item label="详细地址" prop="detailAddress">
          <Input v-model="editValidate.detailAddress" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="请输入详细收件地址..."></Input>
        </Form-item>
      </Form>
      <div slot="footer">
          <Button type="success" long :loading="editValidate.loading" @click="submit('formValidate')">保存</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import threeData from '@/assets/json/address.json'; //全国数据
  import service from '@/service/service'
  export default {
    data(){
      return {
        threeData,
        modal: false,
        editValidate: {
          contaceperson: this.address.contaceperson,
          mobile_phone: this.address.mobile_phone,
          address: [this.address.province, this.address.city, this.address.districe],
          detailAddress: this.address.address,
          loading:false
        },
        editRule: {
          contaceperson: [
            {required: true, message: '收件人不能为空', trigger: 'blur'},
            {type: 'string', max: 5, message: '收件人最多只能填5个字', trigger: 'blur'}
          ],
          mobile_phone: [
            {required: true, message: '联系方式不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (!(this.$const.phoneV.test(value))) {
                  callback(new Error('手机号码格式不正确!'));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            }
          ],
          detailAddress: [
            {required: true, message: '请输入详细收件地址', trigger: 'blur'},
            {type: 'string', max: 30, message: '收件地址详细不能多于30个字', trigger: 'blur'}
          ]
        }
      }
    },
    props: {
      address: {
        type: Object
      }
    },
    methods: {
      //表单提交
      submit(name){
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.editValidate.loading = true;
            service.editAddress({
              id:this.address.id,
              contaceperson: this.editValidate.contaceperson,
              mobile_phone: this.editValidate.mobile_phone,
              province: this.editValidate.address[0],
              city: this.editValidate.address[1],
              districe: this.editValidate.address[2],
              address: this.editValidate.detailAddress
            }).then(() => {
              this.$store.dispatch('initAddress').then(() => {
                this.$refs[name].resetFields(); //重置表单
                this.editValidate.loading = false; //关闭等待动画
                this.doSuccess("新地址添加成功");
              })
            }).catch(this.doError)
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      edit(id){
        this.modal = true;
      },
      remove(id){
        this.$Modal.confirm({
          title: '删除地址',
          content: '确定要删除此地址吗？',
          loading: true,
          onOk: () => {
            service.removeAddress({id}).then(() => {
              this.$store.dispatch('initAddress').then(() => {
                this.doSuccess('收货地址删除成功');
                this.$Modal.remove();
              })
            }).catch(this.doError);
          }
        });
      },
      setDefault(id){
        if (this.address.is_default) {
          return;
        }
        this.$Modal.confirm({
          title: '默认地址',
          content: '确定要将此地址设为默认地址吗？',
          loading: true,
          onOk: () => {
            service.setDefaultAddress({id}).then(() => {
              this.$store.dispatch('initAddress').then(() => {
                  this.doSuccess('默认地址更换成功');
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
