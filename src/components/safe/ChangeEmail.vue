<template>
  <Row style="margin-top: 30px;">
    <Col span="4" class="center">
    <span class="icon-f icon-c-4">
  <Icon type="email" color="#fff"></Icon>
  </span>
    </Col>
    <Col span="16">
    <h3>邮箱已绑定</h3>
    <p class="p-margin">您验证的邮箱：{{email}} 可用于快速找回登录密码</p>
    </Col>
    <Col span="4">
    <br>
    <Button type="success" @click="viewModal">换绑</Button>
    </Col>
    <Modal
      v-model="display" width="400"
      title="邮箱换绑">
      <Form :label-width="80" ref="emailValidate" :model="form" :rules="rule">
        <Form-item label="原邮箱" prop="oldEmail">
          <Input v-model="form.oldEmail" placeholder="请输入原邮箱"></Input>
        </Form-item>
        <Form-item label="新邮箱" prop="email">
          <Input v-model="form.email" placeholder="请输入新邮箱"></Input>
        </Form-item>
        <Form-item label="验证码" prop="vcode">
          <Row>
            <Col span="14">
            <Input v-model="form.vcode" placeholder="验证码"></Input>
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
        <Button type="error" size="large" long :loading="form.loading" @click="emailSubmit">提交




        </Button>
      </div>
    </Modal>

  </Row>
</template>

<script>
  import './safe.css'  //样式
  import service from '@/service/service'
  const emailV = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  export default{
    props: {
      email: {
        type: String
      }
    },
    methods: {
      getVcode(){
        if (!emailV.test(this.form.email)) {
          this.doError("邮箱格式不正确");
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
            this.form.vcodeTitle = "查看验证码";
            this.form.vcodeLoading = false;
          }
        }, 1000);
        service.sendEmailVcode({email: this.form.email}).then(() => {
          const host = this.form.email.split('@')[1];
          window.open(`https://www.baidu.com/s?wd=${host}`);
        }).catch(this.doError); //发送验证码

      },
      viewModal(){
        this.display = true;
      },
      emailSubmit(){
        this.$refs['emailValidate'].validate((valid) => {
          if (valid) {
            this.form.loading = true;
            service.changeEmail({
              oldEmail: this.form.oldEmail,
              email: this.form.email,
              vcode: this.form.vcode
            }).then(() => {
              this.$store.dispatch('initUserInfo').then(() => { //更新用户信息
                this.form.loading = false;
                this.display = false;
                this.$refs['emailValidate'].resetFields(); //重置表单
                this.doSuccess('绑定邮箱更换成功');
              })
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
          oldEmail: "",
          email: "",
          loading: false,
          vcodeLoading: false,
          vcodeTitle: "查看验证码"
        },
        rule: {
          oldEmail: [
            {required: true, message: '邮箱不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (!(emailV.test(value))) {
                  callback(new Error('邮箱格式不正确!'));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            }
          ],
          email: [
            {required: true, message: '邮箱不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (!(emailV.test(value))) {
                  callback(new Error('邮箱格式不正确!'));
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

