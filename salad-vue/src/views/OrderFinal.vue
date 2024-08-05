<template>
  <div style="padding-bottom: 110px;">

    <orderHeader />
    <div style="display: flex; gap: 6px;" class="MenuBox">
      <div class="inputBox selectMenu">
        <h5>양상추</h5>
        <v-number-input :reverse="false" controlVariant="split" label="" :hideInput="false" :inset="false"
          variant="outlined"></v-number-input>
      </div>
      <div class="inputBox delete" style="width: 60px; font-size: 18px;
    justify-content: center;"><v-icon>mdi-delete</v-icon></div>
    </div>
    <orderFooter style="position: fixed; bottom: 0; left: 0;" />
  </div>
</template>

<script setup>
import orderHeader from '@/components/OrderHeader.vue';
import orderFooter from '@/components/OrderFooter.vue';
import { VNumberInput } from 'vuetify/labs/VNumberInput';
</script>

<style scoped>
.inputBox {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #F6F6F6;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  padding: 0 20px;
}
:deep(.v-input) {
  width: 120px;
  flex: none
}

:deep(.v-input__details), :deep(.v-divider), :deep(.v-field__overlay) {
  display: none;
}

:deep(.v-field__prepend-inner) {
  border-radius: 50px;
  border: 1px solid #999;
  width: 28px;
  height: 28px;
  justify-content: center;
}
:deep(.v-field__append-inner) {
  border-radius: 50px;
  background-color: #333;
  width: 28px;
  height: 28px;
  justify-content: center;
}
:deep(.v-field__input) {
  min-height: 28px;
  padding: 0;
}

:deep(.v-btn-group--density-default.v-btn-group) {
  height: auto !important;
  flex-direction: column;
  width: 100%;
}
:deep(.v-btn-group .v-btn:first-child) {
  border: none !important;
}
:deep(.v-field__outline) {
  display: none;
}

:deep(.mdi-plus) {
  color: #eee !important;
}
</style>