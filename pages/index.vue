<template>
  <!-- <Tutorial/> -->
  <div class="container">
    <login-form />
  </div>
</template>

<script>
// import LoginForm from '../components/LoginForm.vue';
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: { LoginForm },
  name: 'IndexPage'
}
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
