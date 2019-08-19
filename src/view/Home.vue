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
            <!-- <span class="code" @click="getCode">获取验证码</span> -->
            <img class="code" @click="getCode" :key="k" src="/apis/api/v0/imageCode"/>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submitForm('form')">立即登录</el-button>
            <div class="forgetPassword"><span @click="changePassWord">修改密码</span></div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <my-dialog :visible ='visible' :callBack ='closeDialog' />
  </div>
</template>
<script>
import MyDialog from '@/components/home/changePassword'
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
      },
      vsCode: '',
      k: 0,
      visible: false
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
        })
      },
      getCode() {
        this.k++
      },
      changePassWord() {
        this.visible = true
      },
      closeDialog(obj) {
        this.visible = false
        if (obj) {
          console.log('接收消息: ',obj)
        }
      }
    },
    components: {
      MyDialog
    }
}
</script>
<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100vh;
    background: url('../assets/bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 30px;
  }
  .content {
    width: 350px;
    // height: 500px;
    margin: 0 auto;
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
        padding: 30px 15px 10px;
        border-radius: 8px;
        background-color: rgba(0,0,0,.5);
        .code {
         vertical-align: middle;
         margin-left: 10px;
        }
        .forgetPassword {
          color: #fff;
          text-align: right;
          span {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
