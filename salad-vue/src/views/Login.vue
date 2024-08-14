<template>
  <div
    style="position: absolute; top: 0; width: 100%; left: 0; padding: 0 20px; background-color: #fff; z-index: 200; max-width: 480px;">
    <div class="GNB">
      <RouterLink to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </RouterLink>
    </div>
  </div>
  <div class="inner" style="padding: 56px 0 110px 0;">
    <div class="title">
      <div>
  <h1>로그인하고</h1>
  <h1>나만의 샐러드 저장</h1> </div>
  <div>
    <h5>본사이트는 포토폴리오 작업물입니다.</h5>
    <h5>테스트 계정으로 로그인 해주세요</h5>
  </div>
  </div>
  <img src="../assets/person.png" alt="box" class="mainImg">
  <div class="btn" @click="login">
    <h4>테스트 계정 로그인</h4>
  </div>
  <!-- <h4> 비회원 주문하기</h4> -->
  <!-- <div style="display: flex; gap: 6px;">
    <h5>아직 계정이 없으신가요?</h5>
    <h5 style="color: #52CA19;">회원가입</h5>
  </div> -->
 
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const router = useRouter();
const authStore = useAuthStore();

const login = () => {
  authStore.login(); // 로그인 상태를 true로 설정
  router.push('/'); // 홈 페이지로 이동
};
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
  margin-top: 32px;
}

.btn {
  display: flex;
  width: 260px;
  /* width: 100%; */
  height: 60px;
  align-items: center;
  justify-content: center;
  /* background-color: #52CA19; */
  background-color: #333;
  color: #eee;
  border-radius: 16px;
  /* margin-top: 40px; */
  position: absolute;
  bottom: 140px;
}

.mainImg {
  width: 80%;
  height: 400px;
  margin-top: 15%;
  object-fit: cover;
  object-position: top;
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
}
@media (max-height: 800px) {
  .mainImg {
    width: 70%;
    height: 320px;
  }
}
@media (max-height: 710px) {
  .mainImg {
    width: 60%;
    height: 230px;
  }
}
@media (max-height: 630px) {
  .mainImg {
    width: 55%;
    height: 150px;
  }
}
@media (min-height: 900px) {
  .mainImg {
    width: 60%;
    height: 500px;
  }
}
</style>