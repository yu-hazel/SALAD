<template>
  <div>
    <div></div>
    <orderHeader />
    <h5 style="text-align: center;">최대 5개 선택가능</h5>
    <div style="display: grid;
  grid-template-columns: repeat(auto-fill,minmax(160px, 1fr)); gap: 6px;">

      <button class="menuBox" :class="{ active: isActive }" @click="toggleClass">
        <v-bottom-sheet v-model="more">
          <template v-slot:activator="{ props }">
            <div class="text-center" style="flex: 1 1 0;">
              <div style="display: flex;justify-content: flex-end;">
                <div v-bind="props" style="display: flex;">
                  <h5>더보기</h5> <v-icon>mdi-arrow-right</v-icon>
                </div>
              </div>
              <img src="../assets/menu1.png" alt="menu" style="width: 60px; height: 60px;">
              <h4>파프리카</h4>
              <h5>42kcal</h5>
            </div>
          </template>
          <div class="modal">
            <div class="btn" @click="more = !more">
              <img src="../assets/menu1.png" alt="menu">
              <h1>파프리카</h1>
              <h4>60g / 124kcal</h4>
              <VNumberInput :reverse="false" controlVariant="split" label="" :hideInput="false" inset />
              <h3 style="color: #eee;">선택완료</h3>
            </div>
          </div>
        </v-bottom-sheet>
        <VNumberInput :reverse="false" controlVariant="split" label="" :hideInput="false" inset />
      </button>
    </div>
    <orderFooter />
  </div>
</template>

<script setup>
import orderHeader from '@/components/OrderHeader.vue';
import orderFooter from '@/components/OrderFooter.vue';
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { ref } from 'vue';

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