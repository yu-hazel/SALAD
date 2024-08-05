<template>
  <div class="GNB">
    <v-icon @click="goHome">mdi-arrow-left</v-icon>
    <h2 class="title">STEP.01</h2>
  </div>
  <!-- <div style="display: flex; align-items: center; justify-content: center;">
    <img src="../assets/salad.png" alt="salad" style="width: 110px; height: 110px;">
  </div> -->
  <div class="txtBox">
    <h1>{{ ingredientsStore.totalCalories }}kcal</h1>
    <span style="margin-top: 12px; display: flex; align-items: center;">
      <h4>/ {{ caloriesStore.perMealCalories }}kcal</h4>
      <v-icon @click="toggleDetails">{{ showDetails ? 'mdi-menu-up' : 'mdi-menu-down' }}</v-icon>
    </span>
  </div>
  <div style="display: flex; width: 100%; justify-content: center; margin-bottom: 32px;">
    <v-progress-linear class="progress"></v-progress-linear>
  </div>
  <div v-if="showDetails" class="caloriesDate">
    <div class="dateBox">
      <h5 class="dateBoxTitle">탄수화물</h5>
      <div class="date">
        <h4>{{ caloriesStore.carbs }}g / {{ caloriesStore.perMealCarbs }}g</h4>
      </div>
    </div>
    <div class="dateBox">
      <h5 class="dateBoxTitle">단백질</h5>
      <div class="date">
        <h4>{{ caloriesStore.protein }}g / {{ caloriesStore.perMealProtein }}g</h4>
      </div>
    </div>
    <div class="dateBox">
      <h5 class="dateBoxTitle">지방</h5>
      <div class="date">
        <h4>{{ caloriesStore.fats }}g / {{ caloriesStore.perMealFats }}g</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCaloriesStore } from '@/stores/caloriesStore';
import { useIngredientsStore } from '@/stores/ingredientsStore';

const caloriesStore = useCaloriesStore();

const ingredientsStore = useIngredientsStore();

const router = useRouter();

// 상태 관리
const showDetails = ref(false);

// 상세정보 토글 함수
const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};

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
  margin-top: 28px;
  margin-bottom: 16px;
}
.progress {
  width: 80%;
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