<template>
  <div class="tabs">
    <el-tag
      size="small"
      v-for="(item, i) in tags"
      :key="item.path"
      :effect="router.currentRoute.value.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, i)"
      :closable="item.name !== 'home'"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useState } from '../hooks/useState'
const router = useRouter()
const stateData = useState({
  tags: (state: any) => state.tab.tabList
})
const { tags } = stateData

const changeMenu = (item: any) => {
  router.push({
    name: item.name
  })
}
const handleClose = (item: any, i: number) => {
  console.log(item, i)
}
</script>
<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
