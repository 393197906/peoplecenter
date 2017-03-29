<template>
  <div class="container">
    <SubTitle word1="地址管理" word2="Address list"></SubTitle>
    <div class="address-list">
      <Spin size="large" fix v-if="addressLoading"></Spin> <!-- 加载动画-->
      <div class="address-container" v-if="!addressLoading">
        <MyAddress class="fl" v-for="(item,key) in address" :key='key' :address="item" :class="{active:item.is_default}"></MyAddress>
      </div>
    </div>

    <SubTitle word1="新增地址" word2="Add Address" style="margin-top: 30px;"></SubTitle>
    <div class="form-container">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
        <Form-item label="收货人" prop="aname">
          <Input v-model="formValidate.aname" placeholder="请输入收件人"></Input>
        </Form-item>
        <Form-item label="联系电话" prop="phone">
          <Input v-model="formValidate.phone" placeholder="请输入收件人电话"></Input>
        </Form-item>
        <Form-item label="所在地" prop="address">
          <three></three>
        </Form-item>
        <Form-item label="详细地址" prop="detailAddress">
          <Input v-model="formValidate.detailAddress" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="请输入详细收件地址..."></Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
          <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
  import SubTitle from '@/components/SubTitle';
  import MyAddress from '@/components/MyAddress';
  import three from '@/components/ThreeAddress';
  export default {
    components: {SubTitle, MyAddress, three},
    created(){
      if (this.$store.state.userInfo.address) {
        this.addressLoading = false;
      } else {
        this.$store.dispatch('initAddress').then(() => {
          this.addressLoading = false;
        }).catch(this.doError);
      }
    },
    computed: {
      address(){
        return this.$store.state.userInfo.address;
      }
    },
    data () {
      return {
        addressLoading: true,
        formValidate: {
          aname: '',
          phone: '',
          detailAddress: ''
        },
        ruleValidate: {
          aname: [
            {required: true, message: '收件人不能为空', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '联系方式不能为空', trigger: 'blur'}
          ],
          detailAddress: [
            {required: true, message: '请输入详细收件地址', trigger: 'blur'},
            {type: 'string', min: 5, message: '收件地址不能少于5个字，请尽量填的具体点', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
  }

</script>

<style scoped>
  .address-list {
    position: relative;
  }

  .form-container {
    padding: 20px;
  }

  .address-container {
    margin-top: 20px;
    padding: 20px;
  }

  .address-container:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;

  }

  .fl {
    float: left;
    margin-right: 10px;
  }
</style>
