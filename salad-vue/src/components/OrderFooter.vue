<template>
  <div
    style=" padding: 12px 20px  38px 20px; width: 100%; background-color: #fff; z-index: 100; display: flex; flex-direction: column; gap: 18px;">
    <div v-if="['/orderFinal', '/cart'].includes(route.path)" class="inputBox">
      <h5>총 결제금액 : </h5>
      <h3>{{ formatCurrency(totalCalculatedPrice) }}</h3>
    </div>
    <div v-if="['/orderSelect', '/orderSelectSub', '/orderDressing', '/orderFinal', '/orderSheet'].includes(route.path)"
      class="btnBox">
      <div class="btn" @click="handlePrevious">
        <h4>{{ route.path === '/orderFinal' ? '장바구니 담기' : '이전으로' }}</h4>
      </div>
      <div class="btn" :style="{ backgroundColor: canAddToCart ? '#52CA19' : '#EEE' }" @click="handleNext">
        <h4 :style="{
          color: canAddToCart ? '#FFF' : '#333', fontWeight: canAddToCart ? '500' : '600'
        }">{{
  route.path
  === '/orderSheet' ? '결제하기' : '다음으로' }}</h4>
      </div>
    </div>
    <RouterLink to="/" v-if="route.path === '/payment'" class="btnBox"
      style="width: 100%; flex-direction: column; gap: 12px; align-items: center;">
      <h4 class=" btn02">홈으로</h4>
      <h4 class="btn02" style="margin: 0; color: #767676; background-color: transparent;">결제내역 보기</h4>
    </RouterLink>
  </div>
</template>

<script setup>
import { useNavigationStore } from '@/stores/navigationStore';
import { useRouter, useRoute } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';
import { computed, toRefs, onMounted, watch } from 'vue';

const navigationStore = useNavigationStore();
const router = useRouter();
const route = useRoute();
const cartStore = useCartStore();

const canAddToCart = computed(() => cartStore.selectedIngredients.length > 0);

// props로 받은 selectedPeriod를 구조 분해하여 사용
const props = defineProps(['selectedPeriod']);
const { selectedPeriod } = toRefs(props);

// 총 결제 금액을 계산하는 함수
const totalCalculatedPrice = computed(() => {
  if (route.path === '/cart') {
    return cartStore.selectedTotalPrice || 0;
  }

  if (!selectedPeriod.value) {
    return cartStore.totalPrice || 0;
  }

  let multiplier = 7;
  if (selectedPeriod.value === 2) {
    multiplier = 14;
  } else if (selectedPeriod.value === 3) {
    multiplier = 21;
  }

  return cartStore.totalPrice * multiplier || 0;
});

// 페이지 진입 시 초기화
onMounted(() => {
  if (route.path === '/cart') {
    cartStore.resetSelectedTotalPrice(); // 장바구니 진입 시 총 금액 초기화
  }
});

const saveOrderDetails = () => {
  const orderDetails = {
    name: `커스텀 샐러드 (${props.selectedPeriod}주)`,
    totalPrice: totalCalculatedPrice.value,
    ingredients: cartStore.selectedIngredients,
  };
  localStorage.setItem('tempOrderDetails', JSON.stringify(orderDetails));

  router.push({ name: 'OrderSheet' });
};

// 통화 포맷 함수
function formatCurrency(amount) {
  return `${amount.toLocaleString('ko-KR')}원`;
}

const handlePrevious = () => {
  if (route.path === '/orderFinal') {
    if (!canAddToCart.value) {
      alert('장바구니에 담을 주문이 없습니다!');
      return;
    }
    // 현재 선택된 재료들과 정기배송 기간 정보를 로컬 스토리지에 저장
    const currentOrder = {
      ingredients: cartStore.selectedIngredients,
      totalCalories: cartStore.totalCalories,
      totalCarbs: cartStore.totalCarbs,
      totalProtein: cartStore.totalProtein,
      totalFat: cartStore.totalFat,
      totalPrice: totalCalculatedPrice.value, // 총 금액 * 정기배송 기간
      period: selectedPeriod.value,  // 선택된 배송 기간
      name: `커스텀 샐러드 (${selectedPeriod.value}주)`,
      quantity: 1,
    };

    const existingOrders = JSON.parse(localStorage.getItem('orderInCart')) || [];
    existingOrders.push(currentOrder);
    localStorage.setItem('orderInCart', JSON.stringify(existingOrders));
  }

  navigationStore.goToPreviousPage();
  router.push(navigationStore.getCurrentPage());
};

const handleNext = () => {
  if (route.path === '/orderFinal' && !canAddToCart.value) {
    alert('선택한 재료가 없습니다');
    return;
  }
  if (route.path === '/orderFinal') {
    saveOrderDetails(); // 주문 세부 정보를 저장
    router.push({ name: 'OrderSheet' });
  } else {
    navigationStore.goToNextPage();
    router.push(navigationStore.getCurrentPage());
  }
};
</script>


<style scoped>
h4 {
  color: #eee;
}
.btnBox {
  width: 100%;
  display: flex;
  gap: 6px;
}
.btn {
  display: flex;
  flex: 1 1 0;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: #333;
  padding: 0 20px;
}
.btn02 {
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
.inputBox {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #F6F6F6;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  padding: 0 20px;
  box-shadow: none;
}
</style>