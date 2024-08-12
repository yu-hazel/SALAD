<template>
  <div style="padding: 56px 0 200px 0;">
    <orderHeader />
    <h3>정기배송 기간을 선택해주세요</h3>
    <h5>배송은 익일 0시부터 오전 7시에 완료됩니다</h5>
    <div style="display: flex; gap: 8px;">
      <div class="inputBox">
        <h4>1주</h4>
      </div>
      <div class="inputBox">
        <h4>2주</h4>
      </div>
      <div class="inputBox">
        <h4> 3주</h4>
      </div>
    </div>
    <orderFooter style="position: fixed; bottom: 0; left: 0;" />
  </div>
</template>

<script setup>
import orderHeader from '@/components/OrderHeader.vue';
import orderFooter from '@/components/OrderFooter.vue';
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { useCartStore } from '@/stores/cartStore';
import { useCaloriesStore } from '@/stores/caloriesStore';

const cartStore = useCartStore();
const caloriesStore = useCaloriesStore();

const updateQuantity = (ingredient, newQuantity) => {
  console.log('updateQuantity 함수 호출');
  const index = cartStore.selectedIngredients.findIndex(i => i.name === ingredient.name);
  if (index !== -1) {
    cartStore.selectedIngredients[index].quantity = newQuantity;
    cartStore.saveToLocalStorage(); // 변경 사항 로컬 스토리지에 저장
  }
};

const removeIngredient = (ingredient) => {
  cartStore.removeIngredient(ingredient);
};
</script>

<style scoped>
.inputBox {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #F6F6F6;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0 20px;
}
</style>