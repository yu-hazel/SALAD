<template>
  <div>
    <orderHeader />
    <h5 style="text-align: center;">최대 5개 선택가능</h5>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 6px;">
      <div v-for="(ingredient, index) in store.ingredients" :key="index" class="menuBox"
        :class="{ active: store.selectedIngredients.includes(ingredient) }" @click="store.toggleIngredient(ingredient)">
        <v-bottom-sheet v-model="more">
          <template v-slot:activator="{ props }">
            <div class="text-center" style="flex: 1 1 0;">
              <div style="display: flex; justify-content: flex-end;">
                <div v-bind="props" style="display: flex;">
                  <h5>더보기</h5>
                  <v-icon>mdi-arrow-right</v-icon>
                </div>
              </div>
              <img :src="ingredient.image" alt="menu" style="width: 60px; height: 60px;" />
              <h4>{{ ingredient.name }}</h4>
              <h5>{{ ingredient.calories }}kcal</h5>
            </div>
          </template>
          <div class="modal">
            <div class="btn" @click="more = !more">
              <img :src="ingredient.image" alt="menu" />
              <h1>{{ ingredient.name }}</h1>
              <h4>{{ ingredient.weight }} / {{ ingredient.calories }}kcal</h4>
              <VNumberInput v-model="ingredient.quantity" :min="0" controlVariant="split" label="" :hideInput="false"
                inset @change="(value) => store.updateQuantity(ingredient, value)" />
              <h3 style="color: #eee;">선택완료</h3>
            </div>
          </div>
        </v-bottom-sheet>
        <VNumberInput v-model="ingredient.quantity" :min="0" controlVariant="split" label="" :hideInput="false" inset
          @change="(value) => store.updateQuantity(ingredient, value)" />
      </div>
    </div>
    <orderFooter />
  </div>
</template>

<script setup>
import orderHeader from '@/components/OrderHeader.vue';
import orderFooter from '@/components/OrderFooter.vue';
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { ref } from 'vue';
import { useIngredientsStore } from '@/stores/ingredientsStore';

const store = useIngredientsStore();
const more = ref(false);
const isActive = ref(false);

function toggleClass() {
  isActive.value = !isActive.value;
}
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
  height: 324px;
  border-radius: 16px 16px 0 0;
  padding: 20px 20px 50px 20px;
  align-items: center;
  justify-content: space-between;
}

.text-center, .v-input {
  width: 100%;
}
</style>