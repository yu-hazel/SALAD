<template>
  <div
    style="position: fixed; width: 100%; top: 0; left: 0; padding: 0 20px; background-color: #fff; z-index: 200; max-width: 480px;">
    <div class="GNB">
      <v-icon @click="handlePrevious">mdi-arrow-left</v-icon>
      <h2 class="title">{{ step }}</h2>
      <v-icon @click="goHome">mdi-close</v-icon>
    </div>

  </div>
  <RouterLink v-if="!hasCalories" to='/targetCaloriesInput' class="btn">
    <h5>칼로리 계산하기</h5>
  </RouterLink>
  <div v-if="bowlimg" style="display: flex; align-items: center; justify-content: center; margin-top: 18px;">
    <img src="../assets/salad.png" alt="salad" style="width: 150px; height: 150px;">
  </div>
  <div v-if="hasCalories && showTxtBox" class="txtBox">
    <h1>{{ cartStore.totalCalories }} kcal</h1>
    <span style="margin-top: 12px; display: flex; align-items: center;">
      <h4>/ {{ caloriesStore.perMealCalories }}kcal</h4>
      <v-icon @click="toggleDetails">{{ showDetails ? 'mdi-menu-up' : 'mdi-menu-down' }}</v-icon>
    </span>
  </div>
  <div v-if="hasCalories && showTxtBox"
    style="display: flex; flex-direction: column; align-items: center; margin-bottom: 24px; padding: 0 32px;">
    <v-progress-linear :model-value="progressValue" color="green" class="progress"></v-progress-linear>
    <div v-if="cartStore.totalCalories >= caloriesStore.perMealCalories"
      style="color: green; display: flex; align-items: center; gap: 4px; margin-left: -4px;">
      <v-icon style="font-size: 20px; margin-bottom: 4px;">mdi-check</v-icon>
      <h5 style="color: green;">목표 한 끼 칼로리를 충족했어요!</h5>
    </div>
    <!-- {{ progressValue }} -->
  </div>
  <div v-if="showDetails" class="caloriesDate">
    <div class="dateBox">
      <h5 class="dateBoxTitle">탄수화물</h5>
      <div class="date">
        <h5 style="color: #111;">{{ cartStore.totalCarbs }}g </h5>
        <h5>/ {{ caloriesStore.carbs }}g</h5>
      </div>
    </div>
    <div class="dateBox">
      <h5 class="dateBoxTitle">단백질</h5>
      <div class="date">
        <h5 style="color: #111;">{{ cartStore.totalProtein }}g </h5>
        <h5>/ {{ caloriesStore.protein }}g</h5>
      </div>
    </div>
    <div class="dateBox">
      <h5 class="dateBoxTitle">지방</h5>
      <div class="date">
        <h5 style="color: #111;">{{ cartStore.totalFat }}g </h5>
        <h5> / {{ caloriesStore.fat }}g</h5>
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
const store = useCaloriesStore();

const hasCalories = computed(() => !!store.perMealCalories);

const steps = {
  '/orderSelect': 'STEP.1',
  '/orderSelectSub': 'STEP.2',
  '/orderDressing': 'STEP.3',
  '/orderFinal': 'STEP.4',
  '/orderSheet': '주문서',
  '/payment': '결제완료',
};

const step = computed(() => steps[route.path] || 1);

const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};

const goHome = () => {
  router.push('/');
};

const showTxtBox = computed(() => {
  return !['/orderSheet', '/payment'].includes(route.path);
});

const bowlimg = computed(() => {
  return !['/orderSelect', '/orderSelectSub', '/orderDressing', '/orderSheet', '/payment'].includes(route.path);
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
  margin-bottom: 12px;
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
  border-radius: 12px;
  gap: 4px;
}
.dateBoxTitle {
  padding-left: 8px;
}
.btn {
  border: 1px solid #999;
  border-radius: 50px;
  height: 44px;
  width: 126px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 18px;
}
</style>