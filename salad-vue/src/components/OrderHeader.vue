<template>
  <div class="GNB">
    <v-icon>mdi-arrow-left</v-icon>
    <h2 class="title">STEP.01</h2>
  </div>
  <div class="txtBox">
    <h1>0kcal</h1>
    <h4 style="margin-top: 12px;">/ {{ store.perMealCalories }}kcal</h4>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCaloriesStore } from '@/stores/caloriesStore';

const store = useCaloriesStore();

onMounted(() => {
  store.loadFromLocalStorage();
});
</script>

<style scoped>
.GNB {
  display: flex;
  position: relative;
  height: 56px;
  align-items: center;
}
.title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.txtBox {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
}
</style>