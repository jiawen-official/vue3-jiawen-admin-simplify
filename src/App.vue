<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElConfigProvider } from 'element-plus';

const locale = ref();
</script>
