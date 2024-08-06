<template>
  <div class="GNB">
    <RouterLink to="/">
      <v-icon>mdi-arrow-left</v-icon>
    </RouterLink>
  </div>
  <div class="inner">
    <div class="title">
      <div>
        <h1>박선정님의</h1>
        <h1>한 끼 목표 칼로리는?</h1>
      </div>
      <h1 style="font-size: 32px;">{{ store.perMealCalories }}kcal</h1>
    </div>
    <div class="date">
      <div class="inputBox">
        <h5>탄수화물</h5>
        <h3>{{ store.carbs }}g</h3>
      </div>
      <div class="inputBox">
        <h5>단백질</h5>
        <h3>{{ store.protein }}g</h3>
      </div>
      <div class="inputBox">
        <h5>지방</h5>
        <h3>{{ store.fat }}g</h3>
      </div>
    </div>
    <h5>정확한 체질, 체지방량, 근육량 등에 따라 다르니</h5>
    <h5>참고용으로만 활용해 주세요</h5>
    <RouterLink to="/targetCaloriesInput" class="btn">
      <h3 style="color: #eee;">수정하기</h3>
    </RouterLink>
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
  height: 56px;
  display: flex;
  align-items: center;
}
h3 {
  color: #111;
}
.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.date {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin: 40px 0;
}
.inputBox {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #F6F6F6;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  padding: 0 20px;
}

.btn {
  display: flex;
  width: 260px;
  /* width: 100%; */
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: #333;
  border-radius: 16px;
  margin-top: 40px;
}
</style>
