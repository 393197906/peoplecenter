<template>
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
    <Button type="success" @click="viewModal">修改</Button>
    </Col>

    <Modal
      v-model="display"
      title="修改密码">
      <Form :label-width="80" ref="passwordValidate" :model="form" :rules="rule">
        <Form-item label="原始密码" prop="oldPassword">
          <Input type="password" v-model="form.oldPassword" placeholder="请输入旧密码"></Input>
        </Form-item>
        <Form-item label="新设密码" prop="newPassword">
          <Input type="password" v-model="form.newPassword" placeholder="请输入新密码"></Input>
        </Form-item>
        <Form-item label="确认密码" prop="confirmPassword">
          <Input type="password" v-model="form.confirmPassword" placeholder="请再次输入新密码"></Input>
        </Form-item>
      </Form>
      <div slot="footer">
        <Button type="error" size="large" long :loading="form.loading" @click="passwordSubmit">保存





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
      viewModal(){
        this.display = true;
      },
      passwordSubmit(){
//        this.modal.password.display = false;
        this.$refs['passwordValidate'].validate((valid) => {
          if (valid) {
            this.form.loading = true;
            service.changePassword({oldPassword:this.form.oldPassword,newPassword:this.form.newPassword}).then(()=>{
                this.doSuccess('密码修改成功');
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
            {required: true, message: '新密码不能为空', trigger: 'blur'},
            { type: 'string', min: 6, message: '密码不能少于6个字符', trigger: 'blur' }
          ],
          confirmPassword: [
            {required: true, message: '确认密码不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (value !== this.form.newPassword) {
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

