<template>
  <div style="padding: 56px 0 130px 0;">
    <orderHeader />
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 6px; width: 100%;">
      <div v-for="(ingredient, index) in store.ingredients" :key="index" class="menuBox"
        :class="{ active: isSelected(ingredient) }" @click="store.toggleIngredient(ingredient)">
        <v-bottom-sheet v-model="ingredient.more">
          <template v-slot:activator="{ props }">
            <div class="text-center" style="flex: 1 1 0;">
              <div style="display: flex; justify-content: flex-end; ">
                <div v-bind="props" style="display: flex; margin-right: -6px; align-items: center;">
                  <h5>더보기</h5>
                  <v-icon style="color: #999;">mdi-chevron-right</v-icon>
                </div>
              </div>
              <img :src="getImagePath(ingredient.image)" alt="menu" style="width: 60px; height: 60px;" />
              <h4 style="word-break: keep-all;">{{ ingredient.name }}</h4>
              <h5>{{ ingredient.calories }}kcal</h5>
            </div>
          </template>
          <div class="modal">
            <div class="btn" @click="ingredient.more = !ingredient.more">
              <div style="display: flex; width: 100%;">
                <div style="flex: 1 1 0; display: flex; justify-content: center;">
                  <img :src="getImagePath(ingredient.image)" alt="menu" style="width: 116px; height: 116px;" />
                </div>
                <div class="dateTxt">
                  <h1 style="word-break: keep-all;">{{ ingredient.name }}</h1>
                  <h2>{{ ingredient.weight }}g / {{ ingredient.calories }}kcal</h2>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; width: 100%; gap: 12px;">
                <div style="display: flex; gap: 6px; width: 100%;">
                  <div class="dateBox">
                    <h5 class="dateBoxTitle">탄수화물</h5>
                    <div class="date">
                      <h3>{{ ingredient.carbs }}g</h3>
                    </div>
                  </div>
                  <div class="dateBox">
                    <h5 class="dateBoxTitle">단백질</h5>
                    <div class="date">
                      <h3>{{ ingredient.protein }}g</h3>
                    </div>
                  </div>
                  <div class="dateBox">
                    <h5 class="dateBoxTitle">지방</h5>
                    <div class="date">
                      <h3>{{ ingredient.fat }}g</h3>
                    </div>
                  </div>
                </div>
                <div class="inputBox">
                  <h5>{{ ingredient.weight }}g 당</h5>
                  <h3> + {{ formatCurrency(ingredient.price) }}</h3>
                </div>
              </div>
            </div>
          </div>
        </v-bottom-sheet>
      </div>
    </div>
    <orderFooter style="position: absolute; bottom: 0; left: 0;" />
  </div>
</template>

<script setup>
import orderHeader from '@/components/OrderHeader.vue';
import orderFooter from '@/components/OrderFooter.vue';
import { ref } from 'vue';
import { useDressingStore } from '@/stores/ingredientsStoreDressing';
import { useCartStore } from '@/stores/cartStore';  // cartStore 임포트

const store = useDressingStore();
const cartStore = useCartStore();

const more = ref(false);

// 통화 포맷 함수
function formatCurrency(amount) {
  return `${amount.toLocaleString('ko-KR')}원`;
}

const isActive = ref(false);
function toggleClass() {
  isActive.value = !isActive.value;
}

const isSelected = (ingredient) => {
  return cartStore.selectedIngredients.some(i => i.name === ingredient.name);  // cartStore 사용
};

const getImagePath = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
};
</script>

<style scoped>
.menuBox {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 12px;
  background-color: #F6F6F6;
}

.active {
  background-color: #E6F2E0;
  outline: 1px solid #52CA19;
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

/* :deep(.v-btn-group--density-default.v-btn-group) {
  height: auto !important;
  flex-direction: column;
  width: 100%;
} */
/* :deep(.v-btn-group .v-btn:first-child) {
  border: none !important;
} */
:deep(.v-field__outline) {
  display: none;
}

.modal {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 16px 16px 0 0;
  padding: 32px 20px 40px 20px;
  align-items: center;
  justify-content: space-between;
}

.text-center, .v-input {
  width: 100%;
}
.btn {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;
}

.dateTxt {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 0;
  justify-content: center;
  padding-top: 18px;
  padding-right: 12px;
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
  height: 60px;
  border-radius: 16px;
}
.dateBoxTitle {
  padding-left: 8px;
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
</style>