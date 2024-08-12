<script setup>
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import NavBar from './components/NavBar.vue';

const route = useRoute();
const router = useRouter();
const key = ref(route.path);

watch(route, (newRoute) => {
  key.value = newRoute.path;
});
</script>
<template>
  <RouterView :key="key.value" />
  <NavBar
    v-if="!['/orderSize', '/orderSelect', '/orderSelectSub', '/orderDressing', '/orderFinal', '/orderSheet', '/targetCaloriesInput', '/payment', '/cart'].includes(route.path)"
    class="NavBar" />
</template>
<style scoped>
.NavBar {
  background-color: #fff;
}
</style>