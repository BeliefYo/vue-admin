<template>
  <header>
    <div class="l-content">
      <el-button type="primary" :icon="Grid" size="mini"></el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link" size="mini">
          <span>
            <img :src="imgUrl" class="user" />
          </span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Grid } from "@element-plus/icons-vue";
import { reactive } from "vue";
const data = reactive({
  imgUrl: require("../../assets/images/2.png"),
});
const { imgUrl } = data;
</script>
<style lang="less" scoped>
header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .l-content {
    display: flex;
    align-items: center;
    h3 {
      padding-left: 10px;
    }
  }
  .r-content {
    .user {
      width: 40px;
      border-radius: 100%;
    }
  }
}
</style>
