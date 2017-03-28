<template>
  <div>
    <SubTitle word1="账户安全" word2="Set up Safety"></SubTitle>
    <div class="content">
      <!--个人信息-->
      <UserInfo></UserInfo>

      <!--详情-->
      <Row style="margin-top: 30px;">
        <Col span="4" class="center">
        <span class="icon-f icon-c-1">
          <Icon type="unlocked" color="#fff"></Icon>
        </span>
        </Col>
        <Col span="16">
        <h3>登录密码</h3>
        <p class="p-margin">为保障您购物安全，建议您定期更改密码以保护账户安全。</p>
        </Col>
        <Col span="4">
        <br>
        <Button type="success" @click="viewModal('password')">修改</Button>
        </Col>
      </Row>
      <Row style="margin-top: 30px;">
        <Col span="4" class="center">
        <span class="icon-f icon-c-2">
          <Icon type="locked" color="#fff"></Icon>
        </span>
        </Col>
        <Col span="16">
        <h3>支付密码</h3>
        <p class="p-margin">启动支付密码功能，为您资产账户安全加吧锁</p>
        </Col>
        <Col span="4">
        <br>
        <Button type="warning" @click="viewModal('payPassword')">启用</Button>
        </Col>
      </Row>
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

      <!--修改密码-->
      <Modal
        v-model="modal.password.display"
        title="修改密码"
      >
        <Form :label-width="80" ref="passwordValidate" :model="modal.password.form" :rules="modal.password.rule">
          <Form-item label="原始密码" prop="oldPassword">
            <Input type="password" v-model="modal.password.form.oldPassword" placeholder="请输入旧密码"></Input>
          </Form-item>
          <Form-item label="新设密码" prop="newPassword">
            <Input type="password" v-model="modal.password.form.newPassword" placeholder="请输入新密码"></Input>
          </Form-item>
          <Form-item label="确认密码" prop="confirmPassword">
            <Input type="password" v-model="modal.password.form.confirmPassword" placeholder="请再次输入新密码"></Input>
          </Form-item>
        </Form>
        <div slot="footer">
          <Button type="error" size="large" long :loading="modal.password.form.loading" @click="passwordSubmit">保存

          </Button>
        </div>
      </Modal>

      <!--支付密码-->
      <!--<Modal-->
      <!--v-model="modal.payPassword.display"-->
      <!--title="支付密码"-->
      <!--@on-ok="ok"-->
      <!--&gt;-->
      <!--</Modal>-->

      <!--&lt;!&ndash;手机验证&ndash;&gt;-->
      <!--<Modal-->
      <!--v-model="modal.phone.display"-->
      <!--title="手机验证"-->
      <!--@on-ok="ok"-->
      <!--@on-cancel="cancel"-->
      <!--&gt;-->
      <!--</Modal>-->

      <!--&lt;!&ndash;邮箱验证&ndash;&gt;-->
      <!--<Modal-->
      <!--v-model="modal.email.display"-->
      <!--title="邮箱验证"-->
      <!--@on-ok="ok"-->
      <!--@on-cancel="cancel"-->
      <!--&gt;-->
      <!--</Modal>-->

      <!--&lt;!&ndash;实名认证&ndash;&gt;-->
      <!--<Modal-->
      <!--v-model="modal.attest.display"-->
      <!--title="实名认证"-->
      <!--@on-ok="ok"-->
      <!--@on-cancel="cancel"-->
      <!--&gt;-->
      <!--</Modal>-->

      <!--&lt;!&ndash;安全问题&ndash;&gt;-->
      <!--<Modal-->
      <!--v-model="modal.safeQuestion.display"-->
      <!--title="安全问题"-->
      <!--@on-ok="ok"-->
      <!--@on-cancel="cancel"-->
      <!--&gt;-->
      <!--</Modal>-->

    </div>
  </div>

</template>

<script>
  import SubTitle from '@/components/SubTitle'
  import UserInfo from '@/components/UserInfo'
  export default {
    components: {SubTitle, UserInfo},
    data(){
      return {
        modal: {
          password: {
            display: false,
            form: {
              oldPassword: "",
              newPassword: "",
              confirmPassword: "",
              loading: false
            },
            rule: {
              oldPassword: [
                {required: true, message: '旧密码不能为空', trigger: 'blur'}
              ],
              newPassword: [
                {required: true, message: '新密码不能为空', trigger: 'blur'}
              ],
              confirmPassword: [
                {required: true, message: '确认密码不能为空', trigger: 'blur'},
                {
                  validator: (rule, value, callback) => {
                    if (value !== this.modal.password.form.newPassword) {
                      callback(new Error('两次输入密码不一致!'));
                    } else {
                      callback();
                    }
                  }, trigger: 'blur'
                }
              ]
            }
          },
          phone: {
            display: false
          },
          email: {
            display: false
          },
          payPassword: {
            display: false
          },
          attest: {
            display: false
          },
          safeQuestion: {
            display: false
          }
        }
      }
    },
    methods: {
      viewModal(label){
        this.modal[label].display = true;
      },
      passwordSubmit(){
//        this.modal.password.display = false;
        this.$refs['passwordValidate'].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      }

    }
  }

</script>

<style scoped>
  .p-margin {
    margin-top: 16px;
  }

  .center {
    text-align: center;
  }

  .icon-f {
    display: inline-block;
    text-align: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 28px;
    border-radius: 50%;
    font-color: #fff;
  }

  .icon-c-1 {
    background-color: #F99798;
  }

  .icon-c-2 {
    background-color: #C9C9C9;
  }

  .icon-c-3 {
    background-color: #FF6262;
  }

  .icon-c-4 {
    background-color: #609CE3;
  }

  .icon-c-5 {
    background-color: #F69954;
  }

  .content {
    padding: 20px;
  }
</style>

