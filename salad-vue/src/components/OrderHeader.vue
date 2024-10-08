<template>
  <div style="position: absolute; width: 100%; top: 0; left: 0; padding: 0 20px; background-color: #fff; z-index: 200;">
    <div class="GNB">
      <v-icon @click="handlePrevious">mdi-arrow-left</v-icon>
      <h2 class="title">{{ step }}</h2>
      <v-icon @click="goHome">mdi-close</v-icon>
    </div>
  </div>

  <div v-if="bowlimg" style="display: flex; align-items: center; justify-content: center; margin-top: 18px;">
    <img src="../assets/salad.png" alt="salad" style="width: 150px; height: 150px;">
  </div>
  <div style="display: flex;  width: 100%; justify-content: center;">
    <RouterLink v-if="!hasCalories && CaloriseBtn" to='/targetCaloriesInput' class="btn">
      <h5>칼로리 계산하기</h5>
    </RouterLink>
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
import { useAuthStore } from '@/stores/authStore';
import { onBeforeRouteLeave } from 'vue-router';

const caloriesStore = useCaloriesStore();
const ingredientsStore = useIngredientsStore();
const cartStore = useCartStore();
const router = useRouter();
const route = useRoute();
const showDetails = ref(false);
const navigationStore = useNavigationStore();
const store = useCaloriesStore();
const authStore = useAuthStore();
let confirmTriggered = false; // 한 번만 확인을 트리거하기 위한 변수

const hasCalories = computed(() => !!store.perMealCalories);
const CaloriseBtn = computed(() => {
  return !['/orderSheet', '/payment', '/cart'].includes(route.path);
});

const steps = {
  '/orderSelect': 'STEP.1',
  '/orderSelectSub': 'STEP.2',
  '/orderDressing': 'STEP.3',
  '/orderFinal': 'STEP.4',
  '/orderPeriod': 'STEP.5',
  '/orderSheet': '주문서',
  '/payment': '결제완료',
  '/cart': '장바구니',
};

const step = computed(() => steps[route.path] || 1);

const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};

const goHome = () => {
  console.log('로그인 상태:', authStore.isLoggedIn); // 로그인 상태 확인
  if (!authStore.isLoggedIn) {
    // console.log('로그인이 필요합니다.'); // 로그인 필요 시 메시지 출력
    router.push('/');
  } else {
    router.push('/');
  }
};

const showTxtBox = computed(() => {
  return !['/orderSheet', '/payment', '/cart'].includes(route.path);
});

const bowlimg = computed(() => {
  return !['/orderSelect', '/orderSelectSub', '/orderDressing',
    '/orderPeriod', '/orderSheet', '/payment', '/cart'].includes(route.path);
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

onBeforeRouteLeave((to, from, next) => {
  // 특정 경로에서만 동작하게 하기 위해 조건 추가
  const allowedPaths = ['/orderSelect', '/orderSelectSub', '/orderDressing', '/orderFinal'];

  if (allowedPaths.includes(from.path) && !cartStore.hasAddedToCart && to.path === '/' && !confirmTriggered) {
    confirmTriggered = true; // 확인 트리거 설정
    const answer = window.confirm('현재 주문이 초기화됩니다. 계속하시겠습니까?');
    if (answer) {
      cartStore.resetSelection(); // 주문 초기화
      router.push('/'); // 홈 화면으로 이동
    } else {
      next(false); // 이동을 취소
    }
  } else {
    next(); // 다른 모든 경우 이동 허용
  }
});
</script>


<style scoped>
.GNB {
  display: flex;
  top: 0;
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
  margin-top: 24px;
  margin-bottom: 32px;
}
</style>