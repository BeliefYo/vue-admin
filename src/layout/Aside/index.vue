<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>{{ isCollapse ? '后台' : '后台管理系统' }}</h3>
    <el-menu-item
      @click="clickMenu(item)"
      :index="item.path + ''"
      v-for="item in noChildren"
      :key="item.path"
    >
      <el-icon>
        <icon-menu />
      </el-icon>
      <template #title>{{ item.label }}</template>
    </el-menu-item>
    <el-sub-menu
      :index="item.path + ''"
      v-for="item in hasChildren"
      :key="item.path"
    >
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path + ''" @click="clickMenu(subItem)">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Menu as IconMenu } from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import store from '@/store'
const router = useRouter()
const data = reactive({
  menu: []
})
const asyncMenu = computed(() => store.state.tab.menu)
const noChildren = computed(() => {
  return (
    asyncMenu.value.length > 0 &&
    asyncMenu.value.filter((item: any) => !item.children)
  )
})
const hasChildren = computed(() => {
  return (
    asyncMenu.value.length > 0 &&
    asyncMenu.value.filter((item: any) => item.children)
  )
})
const isCollapse = computed(() => store.state.tab.isCollapse)

const clickMenu = (item: any) => {
  router.push({
    // path: item.path
    name: item.name
  })
  store.commit('tab/selectMenu', item)
}
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>
