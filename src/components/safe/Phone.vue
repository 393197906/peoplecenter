<template>
  <Row style="margin-top: 30px;">
    <Col span="4" class="center">
    <span class="icon-f icon-c-2">
  <Icon type="iphone" color="#fff"></Icon>
  </span>
    </Col>
    <Col span="16">
    <h3>手机未绑定</h3>
    <p class="p-margin">您还没有绑定安全手机,绑定手机可有效提高您的账号安全</p>
    </Col>
    <Col span="4">
    <br>
    <Button type="error" @click="viewModal">绑定</Button>
    </Col>
    <Modal
      v-model="display" width="400"
      title="绑定手机">
      <Form :label-width="80" ref="phoneValidate" :model="form" :rules="rule">
        <Form-item label="手机号" prop="phone">
          <Input  v-model="form.phone" placeholder="请输入手机号"></Input>
        </Form-item>
        <Form-item label="验证码" prop="vcode">
          <Row>
            <Col span="14">
            <Input  v-model="form.vcode" placeholder="验证码"></Input>
            </Col>
            <Col span="1">
            &nbsp;
            </Col>
            <Col span="9">
            <Button type="success" long :loading="form.vcodeLoading" @click="getVcode">{{form.vcodeTitle}}</Button>
            </Col>
          </Row>
        </Form-item>
      </Form>
      <div slot="footer">
        <Button type="error" size="large" long :loading="form.loading" @click="phoneSubmit">提交
        </Button>
      </div>
    </Modal>

  </Row>
</template>

<script>
  import './safe.css'  //样式
  import service from '@/service/service'
  export default{
    methods: {
      getVcode(){
        if (!(this.$const.phoneV.test(this.form.phone))) {
          this.doError("手机格式不正确");
          return;
        }
        this.form.vcodeLoading = true;
        let time = 60;
        this.form.vcodeTitle = `等待 ${time} 秒`;
        const inter = setInterval(() => {
          time--;
          this.form.vcodeTitle = `等待 ${time} 秒`;
          if (time <= 0) {
            clearInterval(inter);
            this.form.vcodeTitle = "获取验证码";
            this.form.vcodeLoading = false;
          }
        }, 1000);
      },
      viewModal(){
        this.display = true;
      },
      phoneSubmit(){
        this.$refs['phoneValidate'].validate((valid) => {
          if (valid) {
            this.form.loading = true;
            service.setPhone({
              phone: this.form.phone,
              vcode: this.form.vcode
            }).then(() => {
              this.$store.dispatch('initUserInfo').then(() => {
                this.form.loading = false;
                this.display = false;
                this.$refs['phoneValidate'].resetFields(); //重置表单
                this.doSuccess('手机绑定成功');
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
          vcode: "",
          phone: "",
          loading: false,
          vcodeLoading: false,
          vcodeTitle: "获取验证码"
        },
        rule: {
          phone: [
            {required: true, message: '手机号码不能为空', trigger: 'blur'},
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
          vcode: [
            {required: true, message: '验证码不能为空', trigger: 'blur'}
          ]
        }
      }
    }
  }
</script>

