import { defineStore } from 'pinia';
export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    pages: [
      // '/orderSize',
      '/',
      '/orderSelect',
      '/orderSelectSub',
      '/orderDressing',
      '/orderFinal',
      // '/orderPeriod',
      '/orderSheet',
      '/payment',
    ],  // 페이지 순서
    currentPageIndex: 0,  // 현재 페이지 인덱스
  }),
  actions: {
    goToNextPage() {
      if (this.currentPageIndex < this.pages.length - 1) {
        this.currentPageIndex++;
      }
    },
    goToPreviousPage() {
      if (this.currentPageIndex > 0) {
        this.currentPageIndex--;
      }
    },
    getCurrentPage() {
      return this.pages[this.currentPageIndex];
    }
  }
});