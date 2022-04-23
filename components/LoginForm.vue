<template>
  <div class="login">
    <div class="login-logo">
      <i class="el-icon-monitor" />
    </div>
    <el-form
      :rules="loginFormRules"
      :model="loginForm"
      ref="loginFormRef"
      class="login-form"
    >
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        >
          <span slot="prefix">
            <i class="el-icon-user" />
          </span>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          placeholder="请输入密码"
        >
        <span slot="prefix">
          <i class="el-icon-lock" />
        </span>
        <span slot="suffix" @click="showPwd">
          <i class="el-icon-view" />
        </span>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      round
      :loading="isLoading"
      @click="handleLogin"
    >
      登录
    </el-button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LoginForm',
  data() {
    return {
      isLoading: false, //避免出现登录中间状态
      loginForm: {
        username: '',
        password: '',
      },
      loginFormRules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入用户名！' },
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入密码！' },
        ]
      },
      pwdType: 'password',
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginFormRef.validate(async valid => {
        if (valid) {
          this.loading = true;
          try {
            const res = await this.$httpRequest('admin/boolAdmin', {
              params: this.loginForm
            });
            console.log('----------', res);
            if (res.code === 200) {
              this.isLoading = false;
              // window.sessionStorage.setItem('auth', this.loginForm.username);
              this.$store.commit('saveAuth', this.loginForm.username);
              this.$message.success('登录成功！');
              this.jumpFirstPage();
            } else {
              this.isLoading = false;
              this.$message.error('用户名或密码错误！');
              return false;
            }
          } catch (err) {
            this.isLoading = false;
            this.$message.error('Something went wrong!');
            console.log('wwwwww', err)
          }
        } else {
          this.$message.warning('请输入用户名和密码！');
          return false;
        }
      });
    },
    jumpFirstPage() {
      const jumpPath = this.$store.state.defaultPathAfterLogin;
      this.$router.push(jumpPath);
    },
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 460px;
  box-shadow: 0 4px 12px rgba(48, 58, 74, .16);
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-logo {
    font-size: 50px;
  }
  &-form {
    margin-top: 10px;
    width: 360px;
  }
}
</style>