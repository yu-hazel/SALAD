<template>
  <div class="GNB">
    <v-icon @click="goHome">mdi-arrow-left</v-icon>
    <h2 class="title">STEP.01</h2>
  </div>
  <div class="txtBox">
    <h1>{{ ingredientsStore.totalCalories }}kcal</h1>
    <h4 style="margin-top: 12px;">/ {{ caloriesStore.perMealCalories }}kcal</h4>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCaloriesStore } from '@/stores/caloriesStore';
import { useIngredientsStore } from '@/stores/ingredientsStore';
const caloriesStore = useCaloriesStore();
const ingredientsStore = useIngredientsStore();
const router = useRouter();
const goHome = () => {
  router.push('/');
};
onMounted(() => {
  caloriesStore.loadFromLocalStorage();
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