<template>
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
      <RouterLink to="/mypage">
        <v-icon :class="{ 'active-icon': isActive('/mypage') }">mdi-account</v-icon>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

// 현재 경로를 가져오는 훅
const route = useRoute();

// 현재 경로가 주어진 경로와 일치하는지 확인하는 함수
const isActive = (path) => {
  return route.path === path;
};
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
