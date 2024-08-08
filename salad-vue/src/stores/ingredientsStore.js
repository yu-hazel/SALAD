import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useCartStore } from '@/stores/cartStore';

export const useIngredientsStore = defineStore('ingredients', () => {
    const ingredients = ref([
        {
            name: '파프리카',
            image: 'menu1.png',
            weight: 50,
            calories: 10,
            carbs: 2.35,
            protein: 0.45,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        },
        {
            name: '토마토',
            image: 'menu2-1.png',
            weight: 50,
            calories: 9,
            carbs: 2.7,
            protein: 0.4,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        },
        {
            name: '양상추',
            image: 'menu3.png',
            weight: 50,
            calories: 7.5,
            carbs: 1.45,
            protein: 0.7,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        },
        {
            name: '샐러리',
            image: 'menu4.png',
            weight: 50,
            calories: 8,
            carbs: 1.8,
            protein: 0.35,
            fat: 0.05,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        },
        {
            name: '당근',
            image: 'menu5.png',
            weight: 50,
            calories: 20.5,
            carbs: 5,
            protein: 0.45,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        },
        {
            name: '할라피뇨',
            image: 'menu6.png',
            weight: 50,
            calories: 15.5,
            carbs: 3.7,
            protein: 0.7,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        },

        {
            name: '아보카도',
            image: 'menu8.png',
            weight: 50,
            calories: 80,
            carbs: 4,
            protein: 1,
            fat: 7,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        },
        {
            name: '단호박',
            image: 'menu9.png',
            weight: 50,
            calories: 22.5,
            carbs: 6,
            protein: 0.5,
            fat: 0.05,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        },
        {
            name: '브로콜리',
            image: 'menu10.png',
            weight: 50,
            calories: 17,
            carbs: 3.3,
            protein: 1.4,
            fat: 0.2,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        },
        {
            name: '스위트 콘',
            image: 'menu11.png',
            weight: 50,
            calories: 43,
            carbs: 9.5,
            protein: 1.5,
            fat: 0.6,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        }, {
            name: '적양파',
            image: 'menu7.png',
            weight: 50,
            calories: 20,
            carbs: 4.65,
            protein: 0.45,
            fat: 0.05,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        }, {
            name: '바나나',
            image: 'menu13.png',
            weight: 50,
            calories: 45,
            carbs: 11.5,
            protein: 0.55,
            fat: 0.15,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        }, {
            name: '사과',
            image: 'menu14.png',
            weight: 50,
            calories: 25,
            carbs: 6,
            protein: 0.5,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
        }, {
            name: '망고',
            image: 'menu15.png',
            weight: 50,
            calories: 29,
            carbs: 7.2,
            protein: 0.4,
            fat: 0.15,
            quantity: ref(0),
            more: ref(false),
            category: 'vege'
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