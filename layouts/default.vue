<template>
  <el-container class="layout-container">
    <layout-sider v-show="$store.state.isLogin" />
    <el-container>
      <el-main class="layout-container-content">
        <Nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutSider from '@/components/layout/layout-sider.vue';
export default {
  components: { layoutSider },
  beforeMount() {
    if (!this.$store.state.isLogin) {
      this.$router.push(this.$constants.ROUTE.login.path);
    }
  }
}
</script>

<style lang="less" scoped>
.layout-container {
  height: 100vh;
  max-height: 100vh;
  min-height: 0;
  &-content {
    padding: 0;
    background: #F3F3F7;
  }
}
</style>