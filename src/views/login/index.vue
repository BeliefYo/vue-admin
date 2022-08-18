<template>
  <el-form
    ref="ruleFormRef"
    :model="form"
    :rules="rules"
    label-width="100px"
    class="demo-ruleForm"
    status-icon
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { login, getMenu } from '../../api/data'
import { useStore } from 'vuex'
import router from '@/router'
const store = useStore()
const ruleFormRef = ref<FormInstance>()
const datas = reactive({
  form: {
    username: 'admin',
    password: '123456'
  },
  rules: {
    username: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      },
      {
        min: 3,
        message: '长度不能小于3位',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      },
      {
        min: 3,
        message: '长度不能小于3位',
        trigger: 'blur'
      }
    ]
  }
})
const { form, rules } = datas
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      login(form).then(({ data }) => {
        if (data.code == 200) {
          store.commit('setToken', data.data.userInfo.token)
          store.dispatch('tab/generateRoutes')
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style lang="less" scoped></style>
