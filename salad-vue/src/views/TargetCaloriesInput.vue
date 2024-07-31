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
      <h5>칼로리를 계산하기 위한
        나의 목표를 설정해주세요</h5>
    </div>
    <form class="date">
      <div class="selectBox">
        <div class="inputBox select">
          <input type="radio" name='gender' id='women' value='female' checked>
          <label for="women" class="label">여성</label>
        </div>
        <div class="inputBox select">
          <input type="radio" name='gender' id='men' value='male'>
          <label for="men" class="label">남성</label>
        </div>
      </div>
      <input type="text" placeholder="나이를 입력해주세요" class="inputBox">
      <input type="text" placeholder="키를 입력해주세요" class="inputBox">
      <input type="text" placeholder="현재 체중을 입력해주세요" class="inputBox">


      <div style="display: flex; gap: 6px;">
        <v-bottom-sheet v-model="target">
          <template v-slot:activator="{ props }">
            <div class="text-center" style="flex: 1 1 0;">
              <v-btn v-bind="props" class="inputBox" text="목표를 선택하세요"></v-btn>
            </div>
          </template>
          <div class="modal">
            <div class="selectBox">
              <div class="inputBox select">
                <input type="radio" name='target' id='decrement' value='female' checked>
                <label for="decrement" class="label modalLabel">감량</label>
              </div>
              <div class="inputBox select">
                <input type="radio" name='target' id='keep' value='male'>
                <label for="keep" class="label modalLabel">유지</label>
              </div>
              <div class="inputBox select">
                <input type="radio" name='target' id='increase' value='male'>
                <label for="increase" class="label modalLabel">증량</label>
              </div>
            </div>
            <div class="btn" @click="target = !target">
              <h3 style="color: #eee;">선택완료</h3>
            </div>
          </div>
        </v-bottom-sheet>


        <v-bottom-sheet v-model="amount">
          <template v-slot:activator="{ props }">
            <div class="text-center" style="flex: 1 1 0;">
              <v-btn v-bind="props" class="inputBox" text="식사량을 선택하세요"> </v-btn>
            </div>
          </template>
          <div class="modal">
            <div class="selectBox">
              <div style="display: flex; flex: 1 1 0;" class="inputBox select">
                <input type="radio" name='amount' id='one' value='female' checked>
                <label for="one" class="label">1끼</label>
              </div>
              <div style="display: flex; flex: 1 1 0;" class="inputBox select">
                <input type="radio" name='amount' id='two' value='male'>
                <label for="two" class="label">2끼</label>
              </div>
              <div style="display: flex; flex: 1 1 0;" class="inputBox select">
                <input type="radio" name='amount' id='three' value='male'>
                <label for="three" class="label">3끼</label>
              </div>
            </div>
            <div class="btn" @click="amount = !amount">
              <h3 style="color: #eee;">선택완료</h3>
            </div>
          </div>
        </v-bottom-sheet>
      </div>
    </form>


    <div>
      <RouterLink to="/targetCalories" class="btn">
        <h3 style="color: #eee;">저장하기</h3>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    target: false,
    amount: false,
  }),
};
</script>

<style scoped>
.GNB {
  height: 100px;
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

.modalLabel {
  /* height: 78px !important; */
}
</style>