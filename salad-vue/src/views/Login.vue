<template>
  <h1>로그인하고</h1>
  <h1>나만의 샐러드 저장</h1>
  <div class="btn" @click="login">
    <h4>테스트 계정 로그인</h4>
  </div>
  <h4> 비회원 주문하기</h4>
  <div>
    <h5>아직 계정이 없으신가요?</h5>
    <h5>회원가입</h5>
  </div>
  <div>
    <h5>본사이트는 포토폴리오 작업물입니다.</h5>
    <h5>테스트 계정으로 로그인 해주세요</h5>
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
</style>