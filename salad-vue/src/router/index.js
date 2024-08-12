import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/targetCalories',
      name: 'TargetCalories',
      component: () => import('../views/TargetCalories.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('../views/MyPage.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/targetCaloriesInput',
      name: 'TargetCaloriesInput',
      component: () => import('../views/TargetCaloriesInput.vue')
    },
    {
      path: '/orderSize',
      name: 'OrderSize',
      component: () => import('../views/OrderSize.vue')
    },
    {
      path: '/orderSelect',
      name: 'OrderSelect',
      component: () => import('../views/OrderSelect.vue')
    },
    {
      path: '/orderSelectSub',
      name: 'OrderSelectSub',
      component: () => import('../views/OrderSelectSub.vue')
    },
    {
      path: '/orderDressing',
      name: 'OrderDressing',
      component: () => import('../views/OrderDressing.vue')
    },
    {
      path: '/orderFinal',
      name: 'OrderFinal',
      component: () => import('../views/OrderFinal.vue')
    },
    {
      path: '/orderPeriod',
      name: 'OrderPeriod',
      component: () => import('../views/OrderPeriod.vue')
    },
    {
      path: '/orderSheet',
      name: 'OrderSheet',
      component: () => import('../views/OrderSheet.vue')
    }
    ,
    {
      path: '/payment',
      name: 'Payment',
      component: () => import('../views/Payment.vue')
    }
  ]
});

export default router;
