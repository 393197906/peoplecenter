<template>
  <Row style="margin-top: 30px;">
    <Col span="4" class="center">
    <span class="icon-f icon-c-3">
  <Icon type="iphone" color="#fff"></Icon>
  </span>
    </Col>
    <Col span="16">
    <h3>手机已绑定</h3>
    <p class="p-margin">您验证的手机：{{phone}} 若已丢失或停用，请立即更换</p>
    </Col>
    <Col span="4">
    <br>
    <Button type="success" @click="viewModal">换绑</Button>
    </Col>
    <Modal
      v-model="display" width="400"
      title="手机换绑">
      <Form :label-width="80" ref="phoneValidate" :model="form" :rules="rule">
        <Form-item label="原手机" prop="oldPhone">
          <Input v-model="form.oldPhone" placeholder="请输入原绑定手机号"></Input>
        </Form-item>
        <Form-item label="新手机" prop="phone">
          <Input v-model="form.phone" placeholder="请输入要新绑定手机号"></Input>
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
        <Button type="error" size="large" long :loading="form.loading" @click="phoneSubmit">提交

        </Button>
      </div>
    </Modal>

  </Row>
</template>

<script>
  import './safe.css'  //样式
  import service from '@/service/service'
  const phoneV = /^1[34578]\d{9}$/;
  export default{
    props: {
      phone: {
        type: String
      }
    },
    methods: {
      getVcode(){
        if (!(phoneV.test(this.form.phone))) {
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
            service.changePhone({
              oldPhone: this.form.oldPhone,
              phone: this.form.phone,
              vcode: this.form.vcode
            }).then(() => {
              this.$store.dispatch('initUserInfo').then(() => {
                this.form.loading = false;
                this.display = false;
                this.$refs['phoneValidate'].resetFields(); //重置表单
                this.doSuccess('绑定手机更换成功');
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
          oldPhone: "",
          phone: "",
          loading: false,
          vcodeLoading: false,
          vcodeTitle: "获取验证码"
        },
        rule: {
          oldPhone: [
            {required: true, message: '手机号码不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (!(phoneV.test(value))) {
                  callback(new Error('手机号码格式不正确!'));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            }
          ],
          phone: [
            {required: true, message: '手机号码不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (!(phoneV.test(value))) {
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

