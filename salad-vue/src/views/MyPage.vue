<template>
  <div class="GNB">
    <RouterLink to="/">
      <v-icon>mdi-arrow-left</v-icon>
    </RouterLink>
    <v-icon>mdi-cog</v-icon>
  </div>
  <div class="inner">
    <div class="innerBox"
      style="display: flex; flex-direction: column; align-items: center; margin-bottom: 40px; margin-top: 28px;">
      <img src="../assets/mypage.png" alt="" style="margin-bottom: 12px; height: 160px;">
      <h1>안녕하세요 박선정님</h1>
      <RouterLink class="btn">
        <h5>프로필 수정하기</h5>
      </RouterLink>
    </div>
    <div style="display: flex; flex-direction: column; gap: 6px; width: 100%; margin-bottom: 30px;">
      <div style="display: flex; gap: 6px;">
        <div class="inputBox">
          <v-icon style="font-size: 32px;">mdi-car</v-icon>
          <h5>주문 • 배송조회</h5>
        </div>
        <div class="inputBox">
          <v-icon style="font-size: 32px;">mdi-circle-multiple</v-icon>
          <h5>나의 포인트</h5>
        </div>
      </div>
      <div style="display: flex; gap: 6px;">
        <div class="inputBox">
          <v-icon style="font-size: 32px;">mdi-ticket-percent</v-icon>
          <h5>나의 쿠폰함</h5>
        </div>
        <div class="inputBox">
          <v-icon style="font-size: 32px;">mdi-face-agent</v-icon>
          <h5>고객센터</h5>
        </div>
      </div>
    </div>
    <h5>로그아웃</h5>
  </div>
</template>

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
.btn {
  border: 1px solid #999;
  border-radius: 50px;
  height: 44px;
  width: 126px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 18px;
}
.inputBox {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  background-color: #F6F6F6;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0 20px;
  gap: 10px;
}

@media (max-height: 780px) {
  .v-icon {
    font-size: 24px !important;
  }
  img {
    height: 130px !important;
  }
  .innerBox {
    margin-top: 6px !important;
    margin-bottom: 24px !important;
  }
  .btn {
    margin-top: 12px;
  }
  .inputBox {
    height: 86px !important;
  }
}

@media (min-height: 900px) {
  img {
    height: 200px !important;
  }
  .inputBox {
    height: 130px;
  }
}
</style>



