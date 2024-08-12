<template>
  <div style="padding: 56px 0 90px 0; display: flex; flex-direction: column; gap: 24px;">
    <orderHeader />
    <div class="inner">
      <h5 style="padding-left: 8px; margin-bottom: 12px;">배송정보</h5>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; gap: 8px;">
          <input class="inputBox" style="flex: 1 1 0;" placeholder="회원명">
          <input type="number" class="inputBox" style="flex: 2 1 0;" placeholder="010-1234-5678">

        </div>
        <div class="text-center">
          <v-btn size="x-large" text="Click Me" @click="address = !address" class="inputBox autoInput">
            <h5>{{ selectedAddress || '배송지를 선택하세요' }}</h5>
          </v-btn>
          <v-bottom-sheet v-model="address">
            <div class="text-center">
              <div class="modal">
                <h4>
                  배송지 목록
                </h4>
                <div class="selectBox">
                  <!-- 기존 저장된 주소들 -->
                  <div v-for="(addr, index) in addressList" :key="index" class=" select modalselect" style="gap: 6px;">
                    <input type="radio" :id="'address' + index" v-model="tempAddress" :value="addr" />
                    <label :for="'address' + index" class="label inputBox  autoInput">
                      <h5 style="text-align: left;">{{ addr }}</h5>

                    </label>
                    <div class="inputBox delete  autoInput" @click.stop="deleteAddress(index)"
                      style="width: 60px; font-size: 18px; justify-content: center; color: #333;">
                      <v-icon style="cursor: pointer;">mdi-delete</v-icon>
                    </div>
                  </div>
                  <!-- 새로운 주소 추가 필드 -->
                  <div class="inputBox modalselect" style="background-color: transparent; border: 1px solid #ddd;">
                    <input v-model="newAddress" type="text" placeholder="새로운 배송지 입력" style="width: 100%;" />
                    <v-icon @click="addNewAddress">mdi-plus</v-icon>
                  </div>
                </div>
                <div class="btn" @click="confirmAddress">
                  <h3 style="color: #eee;">선택완료</h3>
                </div>
              </div>
            </div>
          </v-bottom-sheet>
        </div>
        <div class="text-center">
          <v-btn size="x-large" text="Click Me" @click="memo = !memo" class="inputBox">
            <h5>{{ selectedMemo || '배송메모를 선택하세요' }}</h5>
            <v-icon style="color: #999;">mdi-menu-down</v-icon>
          </v-btn>
          <v-bottom-sheet v-model="memo">
            <div class="text-center">
              <div class="modal">
                <div class="selectBox">
                  <div v-for="option in memoOptions" :key="option.id" class="inputBox select modalselect">
                    <input type="radio" :name="option.id" :id="option.id" :checked="selectedMemo === option.text"
                      @change="setMemo(option.text)" />
                    <label :for="option.id" class="label">
                      <h5>{{ option.text }}</h5>
                    </label>
                  </div>
                </div>
                <div class="btn" @click="confirmMemo">
                  <h3 style="color: #eee;">선택완료</h3>
                </div>
              </div>
            </div>
          </v-bottom-sheet>
        </div>
      </div>
    </div>

    <div>
      <h5 style="padding-left: 8px; margin-bottom: 12px;">주문상품</h5>
      <div class="text-center">
        <v-btn size="x-large" text="Click Me" @click="sheet = !sheet" class="inputBox">
          <h5>커스텀 샐러드 (1)</h5>
        </v-btn>
        <v-bottom-sheet v-model="sheet">
          <div class="text-center">
            <div class="modal">
              <div class="selectBox">
                <div class="inputBox select modalselect autoInput">
                  <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
                    <h5 style="text-align: left;">커스텀 샐러드 (2주)</h5>
                    <div style="display: flex; flex-direction: column; gap: 4px;">
                      <h5 style="text-align: left;">야채 : {{ formattedIngredients.vege }}</h5>
                      <h5 style="text-align: left;">치즈/ 육류/ 곡물 : {{ formattedIngredients.sub }}</h5>
                      <h5 style="text-align: left;">드레싱 : {{ formattedIngredients.dressing }}</h5>
                    </div>
                    <div
                      style="display: flex; justify-content: end; box-shadow: 0 -2px 0 0 #eee; padding-top: 12px; margin-top: 6px;">
                      <h5 style="color: #111; font-weight: 600;">₩ 20,900</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn" @click="sheet = !sheet">
                <h3 style="color: #eee;">선택완료</h3>
              </div>
            </div>
          </div>
        </v-bottom-sheet>
      </div>
    </div>

    <div>
      <h5 style="padding-left: 8px; margin-bottom: 12px;">할인방법</h5>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div class="inputBox">
          <h5>쿠폰사용</h5>
          <h5>사용가능 쿠폰이 없습니다</h5>
        </div>
        <div class="inputBox">
          <h5>포인트사용</h5>
          <h5>잔여 P : 0 P</h5>
        </div>
      </div>
    </div>
    <div>
      <h5 style="padding-left: 8px; margin-bottom: 28px;">결제방법</h5>
      <swiper :slidesPerView="'1.5'" :centeredSlides="true" :spaceBetween="12" :modules="modules" class="mySwiper">
        <swiper-slide>
          <div class="card">
            <h3>신용카드</h3>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <h3>계좌이체</h3>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <h3>네이버페이</h3>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <h3>카카오페이</h3>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <!-- <h5 style="padding-left: 8px; margin-bottom: 8px;">결제금액</h5> -->
      <div class="inputBox">
        <h5>총 결제금액</h5>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 40px;">
      <v-checkbox>
        <div class="consent">
          <h5>(필수) 주문내용 확인 및 결제 동의</h5>
          <h5>보기</h5>
        </div>
      </v-checkbox>
      <v-checkbox>
        <div class="consent">
          <h5>(필수) 개인정보 제3자 정보 제공 동의</h5>
          <h5>보기</h5>
        </div>
      </v-checkbox>
      <v-checkbox>
        <div class="consent">
          <h5>(필수) 서비스 이용약관 동의</h5>
          <h5>보기</h5>
        </div>
      </v-checkbox>
    </div>
    <orderFooter style="position: absolute; bottom: 0; left: 0;" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { useCartStore } from '@/stores/cartStore';

import orderHeader from '@/components/OrderHeader.vue';
import orderFooter from '@/components/OrderFooter.vue';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination];
const sheet = ref(false);

// 배송 메모 관련 코드
const memo = ref(false);
const selectedMemo = ref(localStorage.getItem('selectedMemo') || '');
const memoOptions = ref([
  { id: 'memo01', text: '배송 전 미리 연락바랍니다' },
  { id: 'memo02', text: '문 앞에 놔주세요' },
  { id: 'memo03', text: '부재시 경비실에 맡겨주세요' },
]);

const setMemo = (memoText) => {
  selectedMemo.value = memoText;
  localStorage.setItem('selectedMemo', memoText);
};

const confirmMemo = () => {
  memo.value = false;
};

// 배송지 관련 코드
const address = ref(false);
const cartStore = useCartStore();
const selectedAddress = ref(localStorage.getItem('selectedAddress') || '');
const tempAddress = ref(selectedAddress.value);
const newAddress = ref('');
const addressList = ref(JSON.parse(localStorage.getItem('addressList')) || [
  '충북 청주시 상당구 125번길 355-0 66아파트 101동 309호 [12345]',
  '충북 청주시 청원구 88번길 123 66아파트 205동 1120호 (율량동) [12345]',
]);

watch(selectedAddress, (newAddress) => {
  localStorage.setItem('selectedAddress', newAddress);
});

watch(addressList, (newList) => {
  localStorage.setItem('addressList', JSON.stringify(newList));
}, { deep: true });

const setTempAddress = (addr) => {
  tempAddress.value = addr;
};

const confirmAddress = () => {
  selectedAddress.value = tempAddress.value;
  address.value = false;
};

const addNewAddress = () => {
  if (newAddress.value.trim() !== '') {
    addressList.value.push(newAddress.value.trim());
    newAddress.value = ''; // 입력 필드 초기화
  }
};

const deleteAddress = (index) => {
  addressList.value.splice(index, 1);
  if (tempAddress.value === addressList.value[index]) {
    tempAddress.value = '';
  }
  if (selectedAddress.value === addressList.value[index]) {
    selectedAddress.value = '';
  }
};

// 재료 목록 관련 코드
const formattedIngredients = computed(() => {
  const ingredients = {
    vege: [],
    sub: [],
    dressing: []
  };

  cartStore.selectedIngredients.forEach(ingredient => {
    if (ingredients[ingredient.category]) {
      const existingIngredient = ingredients[ingredient.category].find(item => item.name === ingredient.name);
      if (existingIngredient) {
        existingIngredient.quantity += ingredient.quantity;
      } else {
        ingredients[ingredient.category].push({ name: ingredient.name, quantity: ingredient.quantity });
      }
    }
  });

  return {
    vege: ingredients.vege.map(i => i.quantity > 1 ? `${i.name}(${i.quantity})` : i.name).join(', '),
    sub: ingredients.sub.map(i => i.quantity > 1 ? `${i.name}(${i.quantity})` : i.name).join(', '),
    dressing: ingredients.dressing.map(i => i.quantity > 1 ? `${i.name}(${i.quantity})` : i.name).join(', ')
  };
});

onMounted(() => {
  cartStore.loadFromLocalStorage();
});
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
  box-shadow: none;
}
.inputBox:focus {
  background-color: #E6F2E0;
  outline: 1px solid #52CA19;
}
.card {
  height: 130px;
  background-color: #52CA19;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.swiper-slide-prev .card, .swiper-slide-next .card {
  background-color: #F6F6F6;
}

.agreeBtn {
  background-color: #f6f6f6;
  padding: 10px;
  border-radius: 6px;
  font-size: 18px;
}
.agreeBtn:focus {
  background-color: #333;
  color: #eee;
}
.btn {
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
.modal {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 356px;
  border-radius: 16px 16px 0 0;
  padding: 20px 20px 50px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}
.label {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.selectBox {
  display: flex;
  flex-direction: column;
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
  /* background-color: #52CA19; */
  background-color: #E6F2E0;
  border-radius: 16px;
  border: 1px solid #52CA19;
  color: #fff;
}
.select {
  padding: 0;
  display: flex;
}
:deep(.v-btn__content) {
  text-align: justify;
  white-space: break-spaces;
  justify-content: space-between;
  width: 100%;
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
.autoInput {
  height: auto;
  padding: 20px 20px;
}
input:focus {
  outline: none;
}
</style>