<template>
  <div class="GNB">
    <a href="#">logo</a>
    <RouterLink to="/cart">
      <v-icon>mdi-shopping</v-icon>
    </RouterLink>
  </div>
  <div class="inner">
    <div v-if="hasCalories" class="title">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div>
          <h1>{{greeting}}</h1>
          <h1>하루 한 끼 목표 칼로리는</h1>
        </div>
        <h1 class="calories" style="font-size: 32px;">{{ store.perMealCalories }}kcal</h1>
      </div>
      <RouterLink to="/targetCalories" style="display: flex; align-items: center;">
        <h5>자세히보기</h5>
        <v-icon>mdi-chevron-right</v-icon>
      </RouterLink>
    </div>
    <div v-else class="title">
      <div>
        <h1>내 몸에 맞는 샐러드를</h1>
        <h1>직접 만들어보세요</h1>
      </div>
      <RouterLink to="/targetCaloriesInput" style="display: flex; align-items: center;">
        <h5>칼로리 계산하기</h5>
        <v-icon>mdi-chevron-right</v-icon>
      </RouterLink>
    </div>


    <img src="../assets/salad.png" alt="salad" class="mainImg">
    <img src="../assets/salad2.png" alt="salad" class="mainImg2">
    <RouterLink to="/orderSelect" class="btn">
      <h3 style="color: #eee;">샐러드 주문하기</h3>
    </RouterLink>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useCaloriesStore } from '@/stores/caloriesStore';

const authStore = useAuthStore();
const store = useCaloriesStore();
const hasCalories = computed(() => !!store.perMealCalories);

onMounted(() => {
  store.loadFromLocalStorage();
});

const greeting = computed(() => {
  if (authStore.isLoggedIn) {
    return `${authStore.username}님의`;
  }else {
    return `회원님의`;
  }
})
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
  margin-top: 32px;
}
.btnBox {
  width: 100%;
  display: flex;
  gap: 6px;
}

.btn {
  display: flex;
  width: 260px;
  /* width: 100%; */
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: #52CA19;
  border-radius: 16px;
  /* margin-top: 40px; */
  position: absolute;
  bottom: 140px;
}
.mainImg {
  height: 100%;
  max-height: 300px;
  /* margin-top: 16px; */
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mainImg2 {
  height: 100%;
  max-height: 500px;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-height: 780px) {
  .calories {
    font-size: 28px !important;
  }
  .mainImg {
    height: 35%;
  }
  .title {
    margin-top: 18px !important;
    gap: 6px !important;
  }
  .btn {
    bottom: 120px;
  }
  .mainImg2 {
    display: none;
  }
}
@media (max-height: 650px) {

  .mainImg {
    height: 28%;
    top: 53%;
  }
  .btn {
    bottom: 110px;
  }
}

@media (max-height:950px) {
  .mainImg {
    display: block;
  }
  .mainImg2 {
    display: none;
  }
}

@media (min-height:950px) {
  .mainImg {
    display: none;
  }
  .mainImg2 {
    display: block;
  }
}
</style>