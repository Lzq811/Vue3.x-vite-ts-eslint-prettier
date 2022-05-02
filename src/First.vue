<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const Jump = () => {
  router.push('./home')
}
</script>

<template>
  <el-button type="primary" @click="Jump">Go To Home Page</el-button>
</template>

<style lang="less" scoped>
</style>
