<template>
  <div style="height: 110px; padding: 12px 20px 0 20px; width: 100%; background-color: #fff; z-index: 100;">
    <div class="btnBox">
      <div class="btn" @click="handlePrevious">
        <h4>이전으로</h4>
      </div>
      <div class="btn" style="background-color: #52CA19;" @click="handleNext">
        <h4>다음으로</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavigationStore } from '@/stores/navigationStore';
import { useRouter } from 'vue-router';
const navigationStore = useNavigationStore();
const router = useRouter();
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
</style>