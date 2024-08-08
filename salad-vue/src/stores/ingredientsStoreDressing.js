import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useCartStore } from '@/stores/cartStore';

export const useDressingStore = defineStore('dressingStore', () => {
    const ingredients = ref([
        {
            name: '참깨드레싱',
            image: 'sauce1.png',
            weight: 30,
            calories: 42,
            carbs: 1.5,
            protein: 0.6,
            fat: 3.6,
            quantity: ref(0),
            more: ref(false),
            category: 'dressing'
        }, {
            name: '오리엔탈드레싱',
            image: 'sauce2.png',
            weight: 30,
            calories: 18,
            carbs: 1.5,
            protein: 0.3,
            fat: 0.9,
            quantity: ref(0),
            more: ref(false),
            category: 'dressing'
        }, {
            name: '발사믹드레싱',
            image: 'sauce3.png',
            weight: 30,
            calories: 27,
            carbs: 3,
            protein: 0.3,
            fat: 1.2,
            quantity: ref(0),
            more: ref(false),
            category: 'dressing'
        }, {
            name: '홀스래디쉬드레싱',
            image: 'sauce4.png',
            weight: 30,
            calories: 24,
            carbs: 2.5,
            protein: 0.3,
            fat: 1.5,
            quantity: ref(0),
            more: ref(false),
            category: 'dressing'
        }, {
            name: '치폴레드레싱',
            image: 'sauce5.png',
            weight: 30,
            calories: 39,
            carbs: 3.5,
            protein: 0.3,
            fat: 3,
            quantity: ref(0),
            more: ref(false),
            category: 'dressing'
        }, {
            name: '머스타드드레싱',
            image: 'sauce6.png',
            weight: 30,
            calories: 33,
            carbs: 4.5,
            protein: 0.3,
            fat: 1.5,
            quantity: ref(0),
            more: ref(false),
            category: 'dressing'
        }, {
            name: '어니언드레싱',
            image: 'sauce7.png',
            weight: 30,
            calories: 36,
            carbs: 4.2,
            protein: 0.3,
            fat: 1.8,
            quantity: ref(0),
            more: ref(false),
            category: 'dressing'
        },
    ]);

    const cartStore = useCartStore();

    const toggleIngredient = (ingredient) => {
        cartStore.toggleIngredient(ingredient);
    };


    return {
        ingredients,
        // selectedIngredients,
        // totalCalories,
        toggleIngredient,
        // updateQuantity,
    };
});