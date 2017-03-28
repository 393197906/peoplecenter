<template>
  <div>
    <SubTitle word1="个人资料" word2="Personal information"></SubTitle>
    <div class="content">
      <!--个人信息-->
      <UserInfo></UserInfo>
      <!--详情-->
      <div style="margin-top: 30px;padding: 10px;position: relative">
        <Spin size="large" fix v-if="load.userInfo"></Spin> <!-- 加载动画-->
        <Form ref="formValidate" v-if="!load.userInfo" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <Form-item label="昵称" prop="aname">
            <Input v-model="formValidate.aname" placeholder="请输入昵称"></Input>
          </Form-item>
          <Form-item label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
          </Form-item>
          <Form-item label="选择日期">
            <Form-item prop="birthday1">
              <Date-picker type="date" placeholder="选择日期" v-model="formValidate.birthday"></Date-picker>
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
            <Button type="primary" :loading='load.submit' size="large" @click="handleSubmit('formValidate')">保存</Button>
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
  import UserInfo from '@/components/UserInfo'
  import service from '@/service/service'
  export default {
    components: {SubTitle, UserInfo},
    created(){  //初始化数据
      service.getUserinfo().then((data) => {
        this.formValidate = data;
        this.load.userInfo = false;
      }).catch(this.doError);
    },
    data () {
      return {
        formValidate: null,
        load: {
          userInfo: true, //数据加载等待
          submit: false   //提交加载等待
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
          birthday: [
            {required: true, type: 'data', message: '请选择生日', trigger: 'change'}
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
            this.load.submit = true;
            this.$store.dispatch('updateUserInfo', this.formValidate).then(() => {
              this.doSuccess('用户信息更新成功');
              this.load.submit = false;
            }).catch(this.doError);
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }

</script>
