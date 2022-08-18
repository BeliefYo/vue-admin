<template>home</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { getMenu } from '../../api/data'
onMounted(() => {
  getMenu({}).then((res: any) => {
    console.log(res)
  })
})
</script>
<style lang="less" scoped></style>
