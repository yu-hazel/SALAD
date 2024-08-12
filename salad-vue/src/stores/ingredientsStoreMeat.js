import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useCartStore } from './cartStore';

export const useMeatStore = defineStore('meatStore', () => {
    const ingredients = ref([
        {
            name: '훈제연어',
            image: 'meat1.png',
            weight: 100,
            calories: 117,
            carbs: 0,
            protein: 22,
            fat: 4,
            quantity: ref(0),
            more: ref(false),
            category: 'sub',
            price: 2500
        }, {
            name: '닭가슴살',
            image: 'meat2.png',
            weight: 100,
            calories: 165,
            carbs: 0,
            protein: 31,
            fat: 3.6,
            quantity: ref(0),
            more: ref(false),
            category: 'sub',
            price: 2500
        }, {
            name: '훈제오리',
            image: 'meat3.png',
            weight: 100,
            calories: 280,
            carbs: 0,
            protein: 18,
            fat: 23,
            quantity: ref(0),
            more: ref(false),
            category: 'sub',
            price: 2500
        }, {
            name: '베이컨',
            image: 'meat4.png',
            weight: 100,
            calories: 541,
            carbs: 1.4,
            protein: 37,
            fat: 42,
            quantity: ref(0),
            more: ref(false),
            category: 'sub',
            price: 2500
        },
        {
            name: '로스트 치킨',
            image: 'meat5.png',
            weight: 100,
            calories: 190,
            carbs: 0,
            protein: 29,
            fat: 7,
            quantity: ref(0),
            more: ref(false),
            category: 'sub',
            price: 2500
        }, {
            name: '쉬림프',
            image: 'meat6.png',
            weight: 100,
            calories: 99,
            carbs: 0.2,
            protein: 24,
            fat: 0.3,
            quantity: ref(0),
            more: ref(false),
            category: 'sub',
            price: 2500
        },
    ]);

    const cartStore = useCartStore();

    const toggleIngredient = (ingredient) => {
        cartStore.toggleIngredient(ingredient);
    };


    return {
        ingredients,
        toggleIngredient,
    };
});