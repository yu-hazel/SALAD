<template>
  <v-progress-linear></v-progress-linear>
  <div class="btnBox">
    <div class="btn">
      <h4>이전으로</h4>
    </div>
    <div class="btn" style="background-color: #52CA19;">
      <h4>다음으로</h4>
    </div>
  </div>
</template>

<!-- 배열에 주문 로직 페이지 순서대로 넣어서 '이전'은 -1 / '다음'은 +1 -->

<style scoped>
h4 {
  color: #eee;
}
.btnBox {
  width: 100%;
  display: flex;
  gap: 6px;
}
.btn {
  display: flex;
  flex: 1 1 0;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: #333;
  padding: 0 20px;
}
</style>