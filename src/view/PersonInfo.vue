<template>
  <div>
    <SubTitle word1="个人资料" word2="Personal information"></SubTitle>
    <div class="content">
      <!--个人信息-->
      <Row>
        <Col span="4">
        <img src="http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg" alt="logo" class="img">
        </Col>
        <Col span="16" class="hehe">
        <p>用户名:小叮当{{test}}</p>
        <p>铜牌会员</p>
        <p>账户安全:60分</p>
        </Col>
      </Row>
      <!--详情-->
      <div style="margin-top: 30px;padding: 10px;">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <Form-item label="昵称" prop="aname">
            <Input v-model="formValidate.aname" placeholder="请输入昵称"></Input>
          </Form-item>
          <Form-item label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
          </Form-item>
          <Form-item label="选择日期">
            <Form-item prop="date">
              <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
            </Form-item>
          </Form-item>
          <Form-item label="性别" prop="gender">
            <Radio-group v-model="formValidate.gender">
              <Radio label="male">男</Radio>
              <Radio label="female">女</Radio>
              <Radio label="no">保密</Radio>
            </Radio-group>
          </Form-item>
          <Form-item label="个人介绍" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                   placeholder="请输入个人介绍..."></Input>
          </Form-item>
          <Form-item>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
          </Form-item>
        </Form>
      </div>

    </div>
  </div>
</template>

<style scoped>

  .hehe {
    padding: 60px;
  }

  .hehe p {
    margin-bottom: 10px;
  }

  .img {
    border-radius: 50%;
    border: 10px solid yellow;
  }

  .content {
    padding: 20px;
  }
</style>

<script>
  import SubTitle from '@/components/SubTitle'
  export default {
    components: {SubTitle},
    beforeRouteEnter(to, form, next){
      setTimeout(() => {
        next(vm => {
          vm.test = "hellow world";
        })
      })
    },
    data () {
      return {
        test: null,
        formValidate: {
          aname: '',
          name: '',
          mail: '',
          desc: '',
          gender: '',
          date: ''
        },
        ruleValidate: {
          aname: [
            {required: true, message: '昵称不能为空', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ],
          gender: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ],
          date: [
            {required: true, type: 'date', message: '请选择生日', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请输入个人介绍', trigger: 'blur'},
            {type: 'string', min: 10, message: '介绍不能少于10字', trigger: 'blur'}
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
