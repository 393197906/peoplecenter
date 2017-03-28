<template>
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
</template>

