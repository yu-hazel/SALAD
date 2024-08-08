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
        }, {
            name: '허니머스타드드레싱',
            image: 'sauce6.png',
            weight: 30,
            calories: 33,
            carbs: 4.5,
            protein: 0.3,
            fat: 1.5,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '스위트어니언드레싱',
            image: 'sauce7.png',
            weight: 30,
            calories: 36,
            carbs: 4.2,
            protein: 0.3,
            fat: 1.8,
            quantity: ref(0),
            more: ref(false),
        },
    ]);

    // const selectedIngredients = ref([]);

    // const totalCalories = computed(() => {
    //     return selectedIngredients.value.reduce((sum, ingredient) => {
    //         return sum + ingredient.quantity * ingredient.calories;
    //     }, 0);
    // });

    // const toggleIngredient = (ingredient) => {
    //     const index = selectedIngredients.value.findIndex(i => i.name === ingredient.name);

    //     if (index === -1) {
    //         // 이미 선택된 재료가 5개인 경우 더 이상 선택할 수 없도록 함
    //         if (selectedIngredients.value.length >= 5) {
    //             alert('최대 5개의 재료만 선택할 수 있습니다.');
    //             return;
    //         }
    //         selectedIngredients.value.push(ingredient);
    //     } else {
    //         selectedIngredients.value.splice(index, 1);
    //     }

    //     saveToLocalStorage();
    // };

    // const updateQuantity = (ingredient, quantity) => {
    //     const index = selectedIngredients.value.findIndex(i => i.name === ingredient.name);
    //     console.log('updateQuantity 함수 실행');
    //     if (index !== -1) {
    //         selectedIngredients.value[index].quantity = quantity;z
    //         console.log(`재료: ${ingredient.name}, 수량: ${quantity}`);
    //     } else {
    //         selectedIngredients.value.push({ ...ingredient, quantity });
    //     }
    //     saveToLocalStorage();
    // };

    // const saveToLocalStorage = () => {
    //     localStorage.setItem('totalCalories', totalCalories.value);
    //     localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients.value.map(ingredient => ({
    //         name: ingredient.name,
    //         quantity: ingredient.quantity
    //     }))));
    // };

    // watch(selectedIngredients, () => {
    //     saveToLocalStorage();
    // }, { deep: true });

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