<template>
  <div class="userpage">
    <div class="userpage-btn">
      <el-button :type="btnType[0]" round class="button">Buyer</el-button>
      <el-button :type="btnType[1]" round class="button">Seller</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenBtn: 1,
    }
  },
  computed: {
    btnType() {
      return this.chosenBtn === 1 ? ['primary', ''] : ['', 'primary'];
    }
  },
  method: {
    getBuyer() {
      try {
        console.log('aaaa')
        // const res = await this.$httpRequest('user/getBuyer');
      } catch (err) {
        this.$message.error('Something went wrong!');
      }
    }
  },
}
</script>

<style lang="less" scoped>
.userpage {
  width: 100%;
  height: 100%;
  &-btn {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    .button {
      margin: 0px 50px;
    }
  }
}
</style>