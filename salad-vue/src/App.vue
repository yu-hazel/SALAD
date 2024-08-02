<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';

const route = useRoute();
</script>

<template>
  <RouterView />
  <NavBar v-if="!['/orderSelect', '/orderSize'].includes(route.path)" class="NavBar" />
</template>

<style scoped></style>