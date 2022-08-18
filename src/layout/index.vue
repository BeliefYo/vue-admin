<template>
  <el-container style="height: 100%">
    <el-aside width="200px">
      <Aside />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <Tag />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from './Aside/index.vue'
import Header from './Header/index.vue'
import Tag from '../components/Tag.vue'
</script>
<style lang="less" scoped>
.el-header {
  background-color: #eee;
}
.el-main {
  padding-top: 0;
}
</style>
