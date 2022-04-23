<template>
  <div class="user">
    <user />
  </div>
</template>

<script>
import user from '@/components/user/user';
export default {
  components: {
    user,
  }
}
</script>

<style lang="less" scoped>
.user {
  height: 100%;
  width: 100%;
}
</style>