<template>
  <div class="GNB">
    <RouterLink to="/">
      <v-icon>mdi-arrow-left</v-icon>
    </RouterLink>
    <h2 class="title">장바구니</h2>
  </div>
  <h5>최근 14일 이내 담은 상품만 확인 가능합니다</h5>
  <v-checkbox>
    <div class="consent">
      <h5>전체 선택</h5>
      <h5>선택 삭제</h5>
    </div>
  </v-checkbox>

  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 6px; width: 100%;">
    <div class="menuBox" :class="{ active: isActive }" @click="toggleClass">
      <v-bottom-sheet><template v-slot:activator="{ props }">
          <div class="text-center" style="flex: 1 1 0;">
            <div style="display: flex; justify-content: flex-end;">
              <div v-bind="props" style="display: flex; margin-right: -6px;">
                <h5>더보기</h5>
                <v-icon>mdi-chevron-right</v-icon>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 12px; margin-bottom: 24px;">
              <h4>커스텀 샐러드 (2주)</h4>
              <h5>₩ 20,900</h5>
            </div>
            <v-number-input :reverse="false" controlVariant="split" label="" :hideInput="false" :inset="false"
              variant="outlined"></v-number-input>
          </div>
        </template>

        <div class="text-center">
          <div class="modal">
            <h4>
              커스텀 샐러드 (2주)
            </h4>
            <div class="selectBox">
              <div class=" select modalselect" style="height: auto; padding: 20px 0px;">
                <div style="display: flex; flex-direction: column; gap: 60px; width: 100%;">
                  <div style="display: flex; flex-direction: column; gap: 20px;">
                    <div>
                      <h5 style="padding-left: 8px; margin-bottom: 12px; display: flex;">야채</h5>
                      <div class="inputBox">
                        <h5>양상추(2), 토마토(3), 적양파</h5>
                      </div>
                    </div>
                    <div>
                      <h5 style="padding-left: 8px; margin-bottom: 12px; display: flex;">치즈/ 육류/ 곡물</h5>
                      <div class="inputBox">
                        <h5>체다치즈, 훈제오리, 로스트치킨, 병아리콩(2)</h5>
                      </div>
                    </div>
                    <div>
                      <h5 style="padding-left: 8px; margin-bottom: 12px; display: flex;">드레싱</h5>
                      <div class="inputBox">
                        <h5>오리엔탈드레싱(2)</h5>
                      </div>
                    </div>
                  </div>
                  <div class="inputBox">
                    <h5>총 결제금액</h5>
                    <h4>₩ 20,900</h4>
                  </div>
                  <!-- <div
                      style="display: flex; justify-content: end; box-shadow: 0 -2px 0 0 #eee; padding-top: 28px; margin-top: 6px;">
                      <h4 style="color: #111; font-weight: 600;">₩ 20,900</h4>
                    </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script setup>
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { ref } from 'vue';

const isActive = ref(false);
function toggleClass() {
  isActive.value = !isActive.value;
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
</style>