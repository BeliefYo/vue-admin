<template>
  <header>
    <div class="l-content">
      <el-button
        type="primary"
        :icon="Grid"
        size="small"
        @click="handleMenu"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
        >
          {{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link" size="small">
          <span>
            <img :src="imgUrl" class="user" />
          </span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script lang="ts" setup>
import router from '@/router'
import { Grid } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useState } from '../../hooks/useState'
const store = useStore()
const data = reactive({
  imgUrl: require('../../assets/images/2.png')
})
const handleMenu = () => {
  store.commit('tab/collapseMenu')
}
const stateData = useState({
  tags: (state: any) => state.tab.tabList
})

const logout = () => {
  store.commit('clearToken')
  store.commit('tab/clearMenu')
  router.push({
    path: '/login'
  })
}
const { tags } = stateData

const { imgUrl } = data
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
