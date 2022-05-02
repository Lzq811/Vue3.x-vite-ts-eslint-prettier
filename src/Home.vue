<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ReqLogin } from '@api/index'

const router = useRouter()

onMounted(() => {
  console.log(import.meta.env)
})
const ajaxDemo = async () => {
  const res: any = await ReqLogin({})
}
const jump = () => {
  router.push('./first')
}
</script>

<template>
  <div>
    <el-button type="primary" @click="jump">Go To First</el-button>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div class="root-app">
      <div class="container">container</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.root-app {
  font-size: 20px;
  .container {
    color: @color;
  }
}
</style>
