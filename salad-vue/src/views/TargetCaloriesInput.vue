<template>
  <div class="GNB">
    <RouterLink to="">
      <v-icon>mdi-arrow-left</v-icon>
    </RouterLink>
  </div>
  <div class="inner">
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
            <h3>여성</h3>
          </label>
        </div>
        <div class="inputBox select">
          <input type="radio" name="gender" id="men" value="male" v-model="store.gender">
          <label for="men" class="label">
            <h3>남성</h3>
          </label>
        </div>
      </div>
      <input type="number" v-model="store.age" placeholder="나이를 입력해주세요" class="inputBox" required>
      <input type="number" v-model="store.height" placeholder="키를 입력해주세요" class="inputBox" required>
      <input type="number" v-model="store.currentWeight" placeholder="현재 체중을 입력해주세요" class="inputBox" required>

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
              목표를 선택하세요
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
            <div class="btn" @click="confirmAmount">
              <h3 style="color: #eee;">선택완료</h3>
            </div>
          </div>
        </v-bottom-sheet>
      </div>
    </form>

    <div>
      <RouterLink to="/targetCalories" class="btn" @click.native="calculateAndSaveCalories">
        <h3 style="color: #eee;">저장하기</h3>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
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
  target.value = false;  // 모달 닫기
  store.saveUserData();  // 목표값 저장
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
  amount.value = false;  // 모달 닫기
  store.saveUserData();  // 식사량 저장
};

const closeAmountModal = () => {
  tempAmount.value = store.mealCount.toString();  // 모달을 닫을 때 임시 값을 초기화
  amount.value = false;
};

const calculateAndSaveCalories = () => {
  store.calculateCalories();
  store.saveUserData();  // 데이터 저장
};

// 사용자 입력 데이터 반영
watch(() => store.age, (newValue) => localStorage.setItem('age', newValue));
watch(() => store.height, (newValue) => localStorage.setItem('height', newValue));
watch(() => store.currentWeight, (newValue) => localStorage.setItem('currentWeight', newValue));

onMounted(() => {
  store.loadFromLocalStorage();
});
</script>

<style scoped>
.GNB {
  height: 56px;
  display: flex;
  align-items: center;
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
}
.date {
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  width: 200px;
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
  gap: 6px;
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
  height: 324px;
  border-radius: 16px 16px 0 0;
  padding: 20px 20px 50px 20px;
  align-items: center;
  justify-content: space-between;
}

.modalselect {
  height: 78px !important;
}
</style>