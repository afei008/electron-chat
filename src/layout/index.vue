<!-- @format -->

<template>
  <div class="app-container flex">
    <app-sidebar />
    <app-main />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { AppMain, AppSidebar } from './components/index';

export default defineComponent({
  name: 'LayoutIndex',
  components: {
    AppSidebar,
    AppMain,
  },
});
</script>
