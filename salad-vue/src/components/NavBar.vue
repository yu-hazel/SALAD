<template>
  <!-- <div style="position: relative;"> -->
  <div class="nav">
    <div class="menu">
      <RouterLink to="/targetCalories">
        <v-icon :class="{ 'active-icon': isActive('/targetCalories') }">mdi-calculator-variant</v-icon>
      </RouterLink>
    </div>
    <div class="menu">
      <RouterLink to="/">
        <v-icon :class="{ 'active-icon': isActive('/') }">mdi-home</v-icon>
      </RouterLink>
    </div>
    <div class="menu">
      <RouterLink :to="handleRoute" @click.prevent="handleRoute">
        <v-icon :class="{ 'active-icon': isActive('/mypage') }">mdi-account</v-icon>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { onMounted } from 'vue';

const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();

const isActive = (path) => {
  return route.path === path;
};

// 로그인 상태를 확인하고, 라우팅을 처리하는 함수
const handleRoute = () => {
  console.log('현재 로그인 상태:', authStore.isLoggedIn);
  if (authStore.isLoggedIn) {
    if (router.currentRoute.value.path !== '/mypage') {
      router.push('/mypage');
    }
  } else {
    if (router.currentRoute.value.path !== '/login') {
      router.push('/login');
    }
  }
};

// 컴포넌트가 마운트될 때 로그인 상태를 확인하고 라우팅 처리
onMounted(() => {
  authStore.checkAuthStatus(); // 로컬 스토리지에서 로그인 상태 확인
  // handleRoute(); // 로그인 상태에 따라 경로 처리
});
</script>


<style scoped>
.nav {
  display: flex;
  /* position: fixed; */
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
  left: 0;
  bottom: 0;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -10px 12px 0 rgba(0, 0, 0, 0.04);
}

.menu {
  display: flex;
  flex: 1 1 0;
  height: 64px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.v-icon {
  color: #333;
  /* 기본 아이콘 색상 */
}

.active-icon {
  color: #52CA19;
  /* 활성화된 아이콘 색상 */
}
</style>
