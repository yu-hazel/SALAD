<template>
  <div class="inner" style="padding: 56px 0 110px 0;">
    <orderHeader></orderHeader>
    <div style="display: flex; flex-direction: column; gap: 36px; margin-top: 18px;">
      <div style="display: flex; justify-content: center; align-items: center; gap: 4px;">
        <v-icon style="font-size: 20px; margin-bottom: 4px; color: #999;">mdi-check</v-icon>
        <h5>최근 14일 이내 담은 상품만 확인 가능합니다</h5>
      </div>
      <v-checkbox @click="toggleSelectAll">
        <div class="consent">
          <h5>전체 선택</h5>
          <h5 @click.stop="deleteSelectedOrders">선택 삭제</h5>
        </div>
      </v-checkbox>
    </div>

    <div
      style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 6px; width: 100%; margin-top: 18px;">
      <!-- 주문 목록을 반복하여 렌더링 -->
      <div v-for="(order, index) in selectedOrders" :key="index" class="menuBox" :class="{ active: order.isActive }"
        @click="toggleClass(index)">
        <v-bottom-sheet>
          <template v-slot:activator="{ props }">
            <div class="text-center" style="flex: 1 1 0;">
              <div style="display: flex; justify-content: flex-end;">
                <div v-bind="props" style="display: flex; margin-right: -6px;">
                  <h5>더보기</h5>
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 12px; margin-bottom: 24px;">
                <h4>{{ order.name }}</h4>
                <h5>{{ formatCurrency(order.totalPrice) }}</h5>
              </div>
              <v-number-input v-model="order.quantity" :min="1" :reverse="false" controlVariant="split" label=""
                :hideInput="false" :inset="false" variant="outlined" @input="updateOrderQuantity(order, $event)" />
            </div>
          </template>

          <div class="text-center">
            <div class="modal">
              <h4>{{ order.name }}</h4>
              <div class="selectBox">
                <div class="select modalselect" style="height: auto; padding: 20px 0px;">
                  <div style="display: flex; flex-direction: column; gap: 60px; width: 100%;">
                    <div style="display: flex; flex-direction: column; gap: 20px;">
                      <!-- 미리 계산된 값 사용 -->
                      <div>
                        <h5 style="padding-left: 8px; margin-bottom: 12px; display: flex;">야채</h5>
                        <div class="inputBox">
                          <h5>{{ order.categorizedIngredients.vege }}</h5>
                        </div>
                      </div>
                      <div>
                        <h5 style="padding-left: 8px; margin-bottom: 12px; display: flex;">치즈/ 육류/ 곡물</h5>
                        <div class="inputBox">
                          <h5>{{ order.categorizedIngredients.sub }}</h5>
                        </div>
                      </div>
                      <div>
                        <h5 style="padding-left: 8px; margin-bottom: 12px; display: flex;">드레싱</h5>
                        <div class="inputBox">
                          <h5>{{ order.categorizedIngredients.dressing }}</h5>
                        </div>
                      </div>
                    </div>
                    <div class="inputBox">
                      <h5>총 결제금액</h5>
                      <h4>{{ formatCurrency(order.totalPrice) }}</h4>
                    </div>
                  </div>
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
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { ref, onMounted } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const selectedOrders = ref([]);
const cartStore = useCartStore();

onMounted(() => {
  const storedOrders = localStorage.getItem('orderInCart');
  if (storedOrders) {
    selectedOrders.value = JSON.parse(storedOrders).map(order => ({
      ...order,
      isActive: false,
      categorizedIngredients: getCategorizedIngredients(order) // 카테고리별 재료를 미리 계산하여 추가
    }));
  }
});

function formatCurrency(amount) {
  return `${amount.toLocaleString('ko-KR')}원`;
}

// 수량 변경 시 호출되는 함수
const updateOrderQuantity = (order, newQuantity) => {
  const index = selectedOrders.value.findIndex(o => o.name === order.name);
  if (index !== -1) {
    selectedOrders.value[index].quantity = newQuantity;
    // 로컬 스토리지 업데이트
    localStorage.setItem('orderInCart', JSON.stringify(selectedOrders.value));
  }
};

// 개별 주문의 선택 상태를 토글하는 함수
const toggleClass = (index) => {
  // console.log('toggleClass 실행');
  if (index >= 0 && index < selectedOrders.value.length) {
    selectedOrders.value[index].isActive = !selectedOrders.value[index].isActive;

    // 선택된 주문을 selectedOrders에 추가 또는 제거
    if (selectedOrders.value[index].isActive) {
      cartStore.addOrderToSelection(selectedOrders.value[index]);
    } else {
      cartStore.removeOrderFromSelection(selectedOrders.value[index]);
    }
  }
};

// 주어진 주문을 카테고리별로 분류
const getCategorizedIngredients = (order) => {
  const categories = {
    vege: [],
    sub: [],
    dressing: [],
  };

  order.ingredients.forEach((ingredient) => {
    if (categories[ingredient.category]) {
      const existing = categories[ingredient.category].find(i => i.name === ingredient.name);
      if (existing) {
        existing.quantity += ingredient.quantity;
      } else {
        categories[ingredient.category].push({ name: ingredient.name, quantity: ingredient.quantity });
      }
    }
  });

  return {
    vege: categories.vege.map(i => i.quantity > 1 ? `${i.name}(${i.quantity})` : i.name).join(', '),
    sub: categories.sub.map(i => i.quantity > 1 ? `${i.name}(${i.quantity})` : i.name).join(', '),
    dressing: categories.dressing.map(i => i.quantity > 1 ? `${i.name}(${i.quantity})` : i.name).join(', '),
  };
};

// 선택된 주문들을 삭제하는 함수
const deleteSelectedOrders = () => {
  selectedOrders.value = selectedOrders.value.filter(order => !order.isActive);
  // 로컬 스토리지 업데이트
  localStorage.setItem('orderInCart', JSON.stringify(selectedOrders.value));
};

// 전체 주문을 선택하는 함수
const toggleSelectAll = () => {
  const allSelected = selectedOrders.value.every(order => order.isActive);
  selectedOrders.value.forEach(order => {
    order.isActive = !allSelected;
  });

  cartStore.selectedOrders = selectedOrders.value; // cartStore와 동기화

  updateLocalStorage();
  console.log('총 선택된 금액', cartStore.selectedTotalPrice.value);
};

const updateLocalStorage = () => {
  const selectedOrdersToStore = selectedOrders.value.map(order => ({
    ...order,
    isActive: order.isActive
  }));

  localStorage.setItem('selectedOrders', JSON.stringify(selectedOrdersToStore));
  // cartStore.selectedTotalPrice;
}
</script>

<style scoped>
.GNB {
  display: flex;
  position: relative;
  height: 56px;
  align-items: center;
}
.title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

:deep(.v-btn__content) {
  text-align: justify;
  white-space: break-spaces;
}

:deep(.v-input__details) {
  display: none !important;
}
:deep(.v-selection-control) {
  min-height: 0;
}
:deep(.v-selection-control__wrapper) {
  width: 100%;
  height: auto;
  justify-content: flex-start;
  gap: 6px;
}
:deep(.v-selection-control__input > .v-icon) {
  font-size: 20px;
}
:deep(.v-selection-control__input) {
  width: 20px;
  height: 20px;
}
.consent {
  order: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 8px;
}
.modal {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* min-height: 356px; */
  border-radius: 16px 16px 0 0;
  padding: 20px 20px 30px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}
.menuBox {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 12px;
  background-color: #F6F6F6;
}

.inputBox {
  display: flex;
  width: 100%;
  /* height: 60px; */
  background-color: #F6F6F6;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  padding: 20px 20px;
  box-shadow: none;
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

:deep(.v-field__outline) {
  display: none;
}
:deep(.mdi-plus) {
  color: #eee !important;
}
.inputBox > h5 {
  text-align: left;
}
.select {
  padding: 0;
  display: flex;
}
.selectBox {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
}
:deep(.v-btn__overlay) {
  background-color: transparent;
}
</style>