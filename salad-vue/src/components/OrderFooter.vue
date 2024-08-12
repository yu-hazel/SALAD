<template>
  <div
    style=" padding: 12px 20px  38px 20px; width: 100%; background-color: #fff; z-index: 100; display: flex; flex-direction: column; gap: 18px;">
    <div v-if="route.path === '/orderFinal', '/cart'" class="inputBox">
      <h5>총 결제금액</h5>
    </div>
    <div class="btnBox">
      <div class="btn" @click="handlePrevious">
        <h4>이전으로</h4>
      </div>
      <div class="btn" style="background-color: #52CA19;" @click="handleNext">
        <h4>{{ route.path === '/orderSheet' ? '결제하기' : '다음으로' }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavigationStore } from '@/stores/navigationStore';
import { useRouter, useRoute } from 'vue-router';

const navigationStore = useNavigationStore();
const router = useRouter();
const route = useRoute();

const handlePrevious = () => {
  navigationStore.goToPreviousPage();
  router.push(navigationStore.getCurrentPage());
};

const handleNext = () => {
  navigationStore.goToNextPage();
  router.push(navigationStore.getCurrentPage());
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