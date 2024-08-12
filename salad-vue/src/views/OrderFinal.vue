<template>
  <div style="padding: 56px 0 200px 0;">
    <orderHeader />
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div v-for="(ingredient, index) in cartStore.selectedIngredients" :key="index" style="display: flex; gap: 6px;"
        class="MenuBox">
        <div class="inputBox selectMenu">
          <h5>{{ ingredient.name }}</h5>
          <v-number-input v-model="ingredient.quantity" :min="0" controlVariant="split" label="" :hideInput="false"
            :inset="false" variant="outlined" @input="updateQuantity(ingredient, $event)" />
        </div>
        <div class="inputBox delete" @click="removeIngredient(ingredient)"
          style="width: 60px; font-size: 18px; justify-content: center; color: #333;">
          <v-icon>mdi-delete</v-icon>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 32px;">
      <h5 style="padding-left: 8px; color: #999; font-weight: 400;"> 정기배송 기간 선택</h5>
      <div class="selectBox">
        <div class="inputBox select modalselect">
          <input type="radio" name="period" id="one" value="1주">
          <label for="one" class="label">
            <h4>1주</h4>
          </label>
        </div>
        <div class="inputBox select modalselect">
          <input type="radio" name="period" id="two" value="2주">
          <label for="two" class="label">
            <h4>2주</h4>
          </label>
        </div>
        <div class="inputBox select modalselect">
          <input type="radio" name="period" id="three" value="3주">
          <label for="three" class="label">
            <h4>3주</h4>
          </label>
        </div>
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
  justify-content: space-between;
  border-radius: 16px;
  padding: 0 20px;
}
.inputBox:focus {
  background-color: #E6F2E0;
  outline: 1px solid #52CA19;
}

:deep(.v-input) {
  width: 120px;
  flex: none
}

:deep(.v-input__details), :deep(.v-divider), :deep(.v-field__overlay) {
  display: none;
}

:deep(.v-field__prepend-inner) {
  border-radius: 50px;
  border: 1px solid #999;
  width: 28px;
  height: 28px;
  justify-content: center;
}
:deep(.v-field__append-inner) {
  border-radius: 50px;
  background-color: #333;
  width: 28px;
  height: 28px;
  justify-content: center;
}
:deep(.v-field__input) {
  min-height: 28px;
  padding: 0;
}

:deep(.v-btn-group--density-default.v-btn-group) {
  height: auto !important;
  flex-direction: column;
  width: 100%;
}
:deep(.v-btn-group .v-btn:first-child) {
  border: none !important;
}
:deep(.v-field__outline) {
  display: none;
}

:deep(.mdi-plus) {
  color: #eee !important;
}

.selectBox {
  display: flex;
  width: 100%;
  gap: 8px;
}
.selectBox input[type=radio] {
  display: none;
}
.selectBox input[type=radio] + label {
  display: inline-block;
  cursor: pointer;
  height: 24px;
  width: 90px;
  line-height: 24px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
}
.selectBox input[type=radio] + label {
  color: #333;
}
.selectBox input[type=radio]:checked + label {
  background-color: #E6F2E0;
  border-radius: 16px;
  border: 1px solid #52CA19;
  color: #333 !important;
}
.select {
  padding: 0;
  display: flex;
  flex: 1 1 0;
}
.label {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  color: #999 !important;
}
</style>