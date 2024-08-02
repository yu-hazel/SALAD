<template>
  <div class="GNB">
    <a href="#">logo</a>
    <RouterLink to="/cart">
      <v-icon>mdi-shopping</v-icon>
    </RouterLink>
  </div>
  <div class="inner">
    <div class="title">
      <div>
        <h1>박선정님의 </h1>
        <h1>하루 한 끼 목표 칼로리는 </h1>
        <h1 style="font-size: 32px;">{{ store.perMealCalories }}kcal</h1>
      </div>
      <RouterLink to="/targetCalories" style="display: flex; align-items: center;">
        <h5>자세히보기</h5>
        <v-icon>mdi-chevron-right</v-icon>
      </RouterLink>
    </div>
    <img src="../assets/salad.png" alt="salad">
    <div class="btnBox">
      <RouterLink to="" class="btn">
        <h2>추천조합</h2>
        <h5>나에게 맞는 조합</h5>
      </RouterLink>
      <RouterLink to="/orderSelect" class="btn">
        <h2>주문하기</h2>
        <h5>나의 맞춤 샐러드</h5>
      </RouterLink>
    </div>
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
h2 {
  color: #fff;
}
h5 {
  color: #999;
}
.v-icon, a {
  color: #333;
}
.GNB {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.btnBox {
  width: 100%;
  display: flex;
  gap: 6px;
}
.btn {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  height: 114px;
  align-items: start;
  justify-content: center;
  border-radius: 16px;
  background-color: #333;
  padding: 0 20px;
  gap: 10px;
}
</style>