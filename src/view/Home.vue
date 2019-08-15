<template>
  <div class="container">
    <div class="content">
      <h3>勤思达教学管理系统</h3>
      <div class="form">
        <div class="logo"></div>
        <el-form class="my-form" :rules="rules" ref="form" :model="form" label-position="left" label-width="65px">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="form.code" style="width:120px;" placeholder="请输入验证码"></el-input>
            <span class="code">2046</span>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submitForm('form')">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
     form: {
        name: '',
        password: '',
        code: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>
<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url('../assets/bg.jpg')
  }
  .content {
    width: 350px;
    // height: 500px;
    margin: 30px auto;
    overflow: hidden;
    h3 {
      text-align: center;
      margin: 20px auto;
      color: #fff;
      font-size: 28px;
    }
    .form {
      // background-color: #409EFF;
      .logo {
        width: 150px;
        height: 100px;
        margin: 10px auto 20px;
        border-radius: 50%;
        background-image: url('../assets/logo.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .my-form {
        padding: 30px 15px 20px;
        border-radius: 8px;
        background-color: rgba(0,0,0,.5);
        .code {
          padding: 6px;
          margin-left: 20px;
          background-color: lightgreen;
        }
      }
    }
  }
</style>
