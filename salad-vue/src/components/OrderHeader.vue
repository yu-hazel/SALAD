<template>
  <div
    style="position: fixed; width: 100%; top: 0; left: 0; padding: 0 20px; background-color: #fff; z-index: 200; max-width: 480px;">
    <div class="GNB">
      <v-icon @click="handlePrevious">mdi-arrow-left</v-icon>
      <h2 class="title">STEP.{{ step }}</h2>
      <v-icon @click="goHome">mdi-close</v-icon>
    </div>
  </div>
  <!-- <div style="display: flex; align-items: center; justify-content: center;">
    <img src="../assets/salad.png" alt="salad" style="width: 110px; height: 110px;">
  </div> -->
  <div v-if="showTxtBox" class="txtBox">
    <h1>{{ cartStore.totalCalories }} kcal</h1>
    <span style="margin-top: 12px; display: flex; align-items: center;">
      <h4>/ {{ caloriesStore.perMealCalories }}kcal</h4>
      <v-icon @click="toggleDetails">{{ showDetails ? 'mdi-menu-up' : 'mdi-menu-down' }}</v-icon>
    </span>
  </div>
  <div v-if="showTxtBox" style="display: flex; flex-direction: column; align-items: center; margin-bottom: 32px;">
    <v-progress-linear :model-value="progressValue" color="green" class="progress"></v-progress-linear>
    <div v-if="cartStore.totalCalories >= caloriesStore.perMealCalories" style="color: green; margin-top: 8px;">
      목표 한 끼 칼로리를 충족했어요!🙌
    </div>
    <!-- {{ progressValue }} -->
  </div>
  <div v-if="showDetails" class="caloriesDate">
    <div class="dateBox">
      <h5 class="dateBoxTitle">탄수화물</h5>
      <div class="date">
        <h4>{{ cartStore.totalCarbs }}g / {{ caloriesStore.carbs }}g</h4>
      </div>
    </div>
    <div class="dateBox">
      <h5 class="dateBoxTitle">단백질</h5>
      <div class="date">
        <h4>{{ cartStore.totalProtein }}g / {{ caloriesStore.protein }}g</h4>
      </div>
    </div>
    <div class="dateBox">
      <h5 class="dateBoxTitle">지방</h5>
      <div class="date">
        <h4>{{ cartStore.totalFat }}g / {{ caloriesStore.fat }}g</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useCaloriesStore } from '@/stores/caloriesStore';
import { useIngredientsStore } from '@/stores/ingredientsStore';
import { useCartStore } from '@/stores/cartStore';
import { useNavigationStore } from '@/stores/navigationStore';

const caloriesStore = useCaloriesStore();
const ingredientsStore = useIngredientsStore();
const cartStore = useCartStore();
const router = useRouter();
const route = useRoute();
const showDetails = ref(false);
const navigationStore = useNavigationStore();

const steps = {
  '/orderSelect': 1,
  '/orderSelectSub': 2,
  '/orderDressing': 3,
  '/orderFinal': 4,
  '/orderSheet': 5,
};

const step = computed(() => steps[route.path] || 1);

const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};

const goHome = () => {
  router.push('/');
};

const showTxtBox = computed(() => {
  return !['/orderSheet'].includes(route.path);
});

const progressValue = computed(() => {
  if (caloriesStore.perMealCalories === 0) return 0;
  return (cartStore.totalCalories / caloriesStore.perMealCalories) * 100;
});

onMounted(() => {
  caloriesStore.loadFromLocalStorage();
});

const handlePrevious = () => {
  navigationStore.goToPreviousPage();
  router.push(navigationStore.getCurrentPage());
};
</script>


<style scoped>
.GNB {
  display: flex;
  position: relative;
  height: 56px;
  align-items: center;
  justify-content: space-between;
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
  margin-top: 28px;
  margin-bottom: 16px;
}
.progress {
  width: 100%;
  height: 6px !important;
  border-radius: 16px;
}
:deep(.v-progress-linear__background) {
  background-color: #F6F6F6 !important;
  opacity: 100 !important;
}
.caloriesDate {
  display: flex;
  gap: 6px;
  width: 100%;
  margin-bottom: 32px
}
.dateBox {
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-start;
  flex: 1 1 0;
}
.date {
  background-color: #F6F6F6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  border-radius: 16px;
}
.dateBoxTitle {
  padding-left: 8px;
}
</style>