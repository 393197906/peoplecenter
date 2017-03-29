<template>
    <!--设置支付密码-->
    <Row style="margin-top: 30px;">
      <Col span="4" class="center">
      <span class="icon-f icon-c-2">
    <Icon type="locked" color="#fff"></Icon>
    </span>
      </Col>
      <Col span="16">
      <h3>支付密码未设置</h3>
      <p class="p-margin">启动支付密码功能，为您资产账户安全加吧锁</p>
      </Col>
      <Col span="4">
      <br>
      <Button type="warning" @click="viewModal">启用</Button>
      </Col>
      <Modal
        v-model="display"
        title="支付密码">
        <Form :label-width="80" ref="payPasswordValidate" :model="form" :rules="rule">
          <Form-item label="支付密码" prop="payPassword">
            <Input type="password" v-model="form.payPassword" placeholder="请输入支付密码"></Input>
          </Form-item>
          <Form-item label="确认密码" prop="confirmPassword">
            <Input type="password" v-model="form.confirmPassword" placeholder="请再次输入支付密码"></Input>
          </Form-item>
        </Form>
        <div slot="footer">
          <Button type="error" size="large" long :loading="form.loading" @click="passwordSubmit">
            保存
          </Button>
        </div>
      </Modal>

    </Row>
</template>

<script>
  import './safe.css'  //样式
  import service from '@/service/service' //服务

  export default{
    methods: {
      viewModal(){
        this.display = true;
      },
      passwordSubmit(){
        this.$refs['payPasswordValidate'].validate((valid) => {
          if (valid) {
            this.form.loading = true;
            service.setPayPassword({
              payPassword: this.form.payPassword
            }).then(() => {
              this.$store.dispatch('initUserInfo').then(() => {
                this.form.loading = false;
                this.display = false;
                this.$refs['payPasswordValidate'].resetFields(); //重置表单
                this.doSuccess('支付密码设置成功，请牢记');
              });
            }).catch(this.doError);
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      }
    },
    data(){
      return {
        display: false,
        form: {
          payPassword: "",
          confirmPassword: "",
          loading: false
        },
        rule: {
          payPassword: [
            {required: true, message: '支付密码不能为空', trigger: 'blur'},
            {type: 'string', min: 6, message: '支付密码不能少于6个字符', trigger: 'blur'}
          ],
          confirmPassword: [
            {required: true, message: '确认密码不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (value !== this.form.payPassword) {
                  callback(new Error('两次输入密码不一致!'));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            }
          ]
        }
      }
    }
  }
</script>

