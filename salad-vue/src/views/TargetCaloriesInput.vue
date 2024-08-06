<template>
  <div
    style="position: fixed; width: 100%; top: 0; left: 0; padding: 0 20px; background-color: #fff; z-index: 200; max-width: 480px;">
    <div class="GNB">
      <RouterLink to="/targetCalories">
        <v-icon>mdi-arrow-left</v-icon>
      </RouterLink>
      <RouterLink to="/">
        <v-icon>mdi-close</v-icon>
      </RouterLink>
    </div>
  </div>
  <div class="inner" style="padding: 56px 0 50px 0;">
    <div class="title">
      <div>
        <h1>박선정님에게 맞는 </h1>
        <h1>한 끼 칼로리 계산하기</h1>
      </div>
      <h5>칼로리를 계산하기 위한 나의 목표를 설정해주세요</h5>
    </div>
    <form class="date">
      <div class="selectBox">
        <div class="inputBox select">
          <input type="radio" name="gender" id="women" value="female" v-model="store.gender">
          <label for="women" class="label">
            <h4>여성</h4>
          </label>
        </div>
        <div class="inputBox select">
          <input type="radio" name="gender" id="men" value="male" v-model="store.gender">
          <label for="men" class="label">
            <h4>남성</h4>
          </label>
        </div>
      </div>
      <div>
        <input type="number" v-model="store.age" @input="validateAge" placeholder="나이를 입력해주세요"
          :class="{ 'inputBox': true, 'input-error': ageError }" required>
        <span v-if="ageError" class="error-message">{{ ageError }}</span>
      </div>
      <div>
        <input type="number" v-model="store.height" @input="validateHeight" placeholder="키를 입력해주세요"
          :class="{ 'inputBox': true, 'input-error': heightError }" required>
        <span v-if="heightError" class="error-message">{{ heightError }}</span>
      </div>
      <div>
        <input type="number" v-model="store.currentWeight" @input="validateWeight" placeholder="현재 체중을 입력해주세요"
          :class="{ 'inputBox': true, 'input-error': weightError }" required>
        <span v-if="weightError" class="error-message">{{ weightError }}</span>
      </div>
      <div style="display: flex; gap: 6px;">
        <v-bottom-sheet v-model="target">
          <template v-slot:activator="{ props }">
            <div class="text-center" style="flex: 1 1 0;">
              <v-btn v-bind="props" class="inputBox">{{ store.goal ? store.goal : '목표를 선택하세요' }}</v-btn>
            </div>
          </template>
          <div class="modal">
            <h4>
              목표를 선택하세요
            </h4>
            <div class="selectBox">
              <div class="inputBox select modalselect">
                <input type="radio" name="target" id="decrement" value="감량" @change="selectTarget('감량')"
                  :checked="tempGoal === '감량'">
                <label for="decrement" class="label">감량</label>
              </div>
              <div class="inputBox select modalselect">
                <input type="radio" name="target" id="keep" value="유지" @change="selectTarget('유지')"
                  :checked="tempGoal === '유지'">
                <label for="keep" class="label">유지</label>
              </div>
              <div class="inputBox select modalselect">
                <input type="radio" name="target" id="increase" value="증량" @change="selectTarget('증량')"
                  :checked="tempGoal === '증량'">
                <label for="increase" class="label">증량</label>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center;">
              <!-- <h5>회원님의 1일 권장 칼로리는 {{ store.recommendedCalories }} kcal 입니다</h5> -->
              <h5>목표에 맞는 칼로리를 알아보세요</h5>
            </div>
            <div class="btn" @click="confirmTarget">
              <h3 style="color: #eee;">선택완료</h3>
            </div>
          </div>
        </v-bottom-sheet>

        <v-bottom-sheet v-model="amount">
          <template v-slot:activator="{ props }">
            <div class="text-center" style="flex: 1 1 0;">
              <v-btn v-bind="props" class="inputBox">{{ store.mealCount ? `${store.mealCount}끼` : '식사량을 선택하세요'
              }}</v-btn>
            </div>
          </template>
          <div class="modal">
            <h4>
              식사량을 선택하세요
            </h4>
            <div class="selectBox">
              <div style="display: flex; flex: 1 1 0;" class="inputBox select modalselect">
                <input type="radio" name="amount" id="one" value="1" @change="selectAmount('1')"
                  :checked="tempAmount === '1'">
                <label for="one" class="label">1끼</label>
              </div>
              <div style="display: flex; flex: 1 1 0;" class="inputBox select modalselect">
                <input type="radio" name="amount" id="two" value="2" @change="selectAmount('2')"
                  :checked="tempAmount === '2'">
                <label for="two" class="label">2끼</label>
              </div>
              <div style="display: flex; flex: 1 1 0;" class="inputBox select modalselect">
                <input type="radio" name="amount" id="three" value="3" @change="selectAmount('3')"
                  :checked="tempAmount === '3'">
                <label for="three" class="label">3끼</label>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center;">
              <!-- <h5>회원님의 1일 권장 칼로리는 {{ store.recommendedCalories }} kcal 입니다.</h5> -->
              <h5>한 끼 칼로리를 알아보세요</h5>
            </div>
            <div class="btn" @click="confirmAmount">
              <h3 style="color: #eee;">선택완료</h3>
            </div>
          </div>

        </v-bottom-sheet>
      </div>
    </form>
    <div v-if="isFormValid">
      <h5>회원님의 1일 권장 칼로리는 {{ store.recommendedCalories }} kcal</h5>
      <h5>한 끼 목표 칼로리는 {{ store.perMealCalories }}kcal</h5>
    </div>
    <RouterLink to="/targetCalories" class="btn" @click.native="calculateAndSaveCalories">
      <h3 style="color: #eee;">저장하기</h3>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useCaloriesStore } from '@/stores/caloriesStore';

const store = useCaloriesStore();

const target = ref(false);
const amount = ref(false);
const tempGoal = ref(store.goal);  // 임시 목표 값
const tempAmount = ref(store.mealCount.toString());  // 임시 식사량 값

const selectTarget = (value) => {
  tempGoal.value = value;  // 선택한 값을 임시로 저장
};

const confirmTarget = () => {
  store.goal = tempGoal.value;  // 임시 값을 최종 값으로 반영
  store.calculateCalories(store.goal);  // 목표에 따른 칼로리 계산
  target.value = false;  // 모달 닫기
};

const closeTargetModal = () => {
  tempGoal.value = store.goal;  // 모달을 닫을 때 임시 값을 초기화
  target.value = false;
};

const selectAmount = (value) => {
  tempAmount.value = value;  // 선택한 값을 임시로 저장
};

const confirmAmount = () => {
  store.mealCount = parseInt(tempAmount.value);  // 임시 값을 최종 값으로 반영
  store.calculateCalories(store.goal);  // 끼니 수에 따른 칼로리 계산
  amount.value = false;  // 모달 닫기
};

const closeAmountModal = () => {
  tempAmount.value = store.mealCount.toString();  // 모달을 닫을 때 임시 값을 초기화
  amount.value = false;
};

// 유효성 검사 (나이, 키, 체중)
const validateNumberInput = (value) => {
  return !isNaN(value) && value > 0;
};

// 모든 input이 다 입력되었는지 체크
const isFormValid = computed(() => {
  return validateNumberInput(store.age) && validateNumberInput(store.height) && validateNumberInput(store.currentWeight);
});

const ageError = ref('');
const heightError = ref('');
const weightError = ref('');

const validateAge = () => {
  if (!validateNumberInput(store.age)) {
    ageError.value = '숫자만 입력 가능합니다';
  } else {
    ageError.value = '';
    store.calculateCalories();
  }
};

const validateHeight = () => {
  if (!validateNumberInput(store.height)) {
    heightError.value = '숫자만 입력 가능합니다';
  } else {
    heightError.value = '';
    store.calculateCalories();
  }
};

const validateWeight = () => {
  if (!validateNumberInput(store.currentWeight)) {
    weightError.value = '숫자만 입력 가능합니다';
  } else {
    weightError.value = '';
    store.calculateCalories();
  }
};

// 사용자 입력 데이터 반영
watch(
  () => [store.gender, store.age, store.height, store.currentWeight],
  () => {
    store.calculateCalories(); // 성별, 나이, 키, 체중 입력 시 유지 기준으로 권장 칼로리 계산
  }
);

onMounted(() => {
  store.loadFromLocalStorage();
});
</script>

<style scoped>
.GNB {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
}
.date {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin: 40px 0;
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
.inputBox:focus {
  background-color: #E6F2E0;
  outline: 1px solid #52CA19;
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
  background-color: #52CA19;
  border-radius: 16px;
  /* border: 1px solid #52CA19; */
  color: #fff;
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
}

.modal {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 356px;
  border-radius: 16px 16px 0 0;
  padding: 20px 20px 50px 20px;
  align-items: center;
  justify-content: space-between;
}

.modalselect {
  height: 78px !important;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
  display: block;
}

.input-error {
  border: 1px solid red;
}

@media (max-width: 380px) {
  .date {
    margin: 28px 0 !important;
  }
  .btn {
    margin-top: 28px !important;
  }
}
</style>