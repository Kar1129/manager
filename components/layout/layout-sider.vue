<template>
  <el-aside class="sider" width="220px">
    <el-menu>
      <el-menu-item
        v-for="item in menuItems"
        :key="item.key"
        @click="goPage(item.path)"
        :class="{
          'current': isCurrentMenu(item.path),
        }"
      >
        <i :class="item.iconClass" />
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: this.$constants.ROUTE.user.label,
          iconClass: 'el-icon-user',
          path: this.$constants.ROUTE.user.path,
          key: this.$constants.ROUTE.user.name,
        },
        {
          title: this.$constants.ROUTE.goods.label,
          iconClass: 'el-icon-goods',
          path: this.$constants.ROUTE.goods.path,
          key: this.$constants.ROUTE.goods.name,
        },
        {
          title: this.$constants.ROUTE.order.label,
          iconClass: 'el-icon-document',
          path: this.$constants.ROUTE.order.path,
          key: this.$constants.ROUTE.order.name,
        },
      ]
    }
  },
  methods: {
    goPage(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    isCurrentMenu(path) {
      if (this.$route.path === path) {
        return true;
      }
      return false;
    },
  },
}
</script>

<style lang="less">
.el-menu {
  border: none;
  background: #303A4A;
}
.el-menu-item {
  padding: 0;
  color: #828D9F;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  color: #FFFFFF;
  background-color: inherit;
  &:hover {
    background-color: rgba(#FFFFFF, 0.1);
  }
}
</style>

<style lang="less" scoped>
.sider {
  z-index: 99;
  background: #303A4A;
  box-shadow: 5px 0px 20px 0px rgba(0, 0, 0, 0.06);
}
.current {
  background-color: #FFFFFF;
}
</style>
