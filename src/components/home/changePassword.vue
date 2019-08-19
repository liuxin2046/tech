<template>
  <el-dialog
    title="修改密码"
    :visible.sync="visible"
    width="30%"
    :before-close="handleClose"
    center>
    <el-form class="my-form" :rules="rules" ref="form" :model="form" label-position="left">
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input v-model="form.oldPassword" placeholder="请输入旧密码"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input type="password" v-model="form.newPassword" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item class="footer">
        <el-button type="success" @click="submitForm('form')">确定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    callBack: Function
  },
  data() {
    return {
      form: {
        oldPassword: '',
        newPassword: ''
      },
      rules: {
        oldPassword: [
          { required: true, message: '请输入旧密码',trigger: 'blur'}
        ],
        newPassword: [
          { required: true, message: '请输入新密码',trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.callBack(this.form)
          } else {
            this.$notify.error({
              title: '错误',
              message: '请填写正确信息'
            });
            return false;
          }
        })
    },
    handleClose() {
      this.callBack()
    }
  }
}
</script>
<style lang="scss" scoped>
  .footer {
    text-align: center;
  }
</style>