import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useCartStore } from './cartStore';

export const useCheeseStore = defineStore('cheeseStore', () => {
    const ingredients = ref([
        {
            name: '모짜렐라 치즈',
            image: 'menu1.png',
            weight: 30,
            calories: 84,
            carbs: 0.93,
            protein: 8.4,
            fat: 5.1,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '리코타 치즈',
            image: 'menu1.png',
            weight: 30,
            calories: 52.2,
            carbs: 1,
            protein: 3.3,
            fat: 3.9,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '그릭요거트',
            image: 'menu1.png',
            weight: 30,
            calories: 17.7,
            carbs: 1.08,
            protein: 3,
            fat: 0.12,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '체다 치즈',
            image: 'menu1.png',
            weight: 30,
            calories: 120.6,
            carbs: 0.39,
            protein: 7.5,
            fat: 9.9,
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