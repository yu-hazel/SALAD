import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useCartStore } from './cartStore';

export const useGrainStore = defineStore('grainStore', () => {
    const ingredients = ref([
        {
            name: '병아리콩',
            image: 'menu1.png',
            weight: 30,
            calories: 49,
            carbs: 8.1,
            protein: 2.7,
            fat: 0.8,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '아몬드',
            image: 'menu1.png',
            weight: 30,
            calories: 173,
            carbs: 6.6,
            protein: 6.3,
            fat: 14.7,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '치아시드',
            image: 'menu1.png',
            weight: 30,
            calories: 146,
            carbs: 12.6,
            protein: 5.1,
            fat: 9.3,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '믹스넛',
            image: 'menu1.png',
            weight: 30,
            calories: 171,
            carbs: 9,
            protein: 4.5,
            fat: 14.7,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '현미',
            image: 'menu1.png',
            weight: 30,
            calories: 37,
            carbs: 7.5,
            protein: 0.8,
            fat: 0.3,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '크랜베리',
            image: 'menu1.png',
            weight: 30,
            calories: 97.5,
            carbs: 24,
            protein: 0.15,
            fat: 0.15,
            quantity: ref(0),
            more: ref(false),
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