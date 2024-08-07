<template>
  <div class="nav">
    <div class="menu">
      <RouterLink to="/targetCalories"><v-icon>mdi-calculator-variant</v-icon></RouterLink>
    </div>
    <div class="menu">
      <RouterLink to="/"><v-icon>mdi-home</v-icon></RouterLink>
    </div>
    <div class="menu">
      <RouterLink to="/mypage"><v-icon>mdi-account</v-icon></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  position: fixed;
  /* max-width: 480px; */
  width: 100%;
  height: 90px;
  left: 0;
  bottom: 0;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -10px 12px 0 rgb(0, 0, 0, 0.04);
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
}
</style>