import { defineStore } from 'pinia';
export const useSizeStore = defineStore('size', {
  state: () => ({
    selectedSize: 'Large',  // 기본값을 'Large'로 설정
  }),
  actions: {
    setSize(size) {
      this.selectedSize = size;
      localStorage.setItem('selectedSize', size);
    },
    loadSizeFromLocalStorage() {
      const storedSize = localStorage.getItem('selectedSize');
      if (storedSize) {
        this.selectedSize = storedSize;
      }
    }
  }
});