<!-- @format -->

<template>
  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

window.electronAPI.handleRouter((_event: any, value: any) => {
  router.push(value);
});
</script>
