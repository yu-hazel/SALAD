import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useIngredientsStore = defineStore('ingredients', () => {
    const ingredients = ref([
        {
            name: '파프리카',
            image: '@/assets/menu1.png',
            weight: 60,
            calories: 42,
            carbs: 10,
            protein: 1,
            fat: 0.2,
            quantity: ref(0),
        },
        {
            name: '토마토',
            image: '../assets/menu2.png',
            weight: 50,
            calories: 18,
            carbs: 4,
            protein: 0.9,
            fat: 0.2,
            quantity: ref(0),
        },
        {
            name: '양상추',
            image: '../assets/menu3.png',
            weight: 100,
            calories: 15,
            carbs: 2.9,
            protein: 1.4,
            fat: 0.2,
            quantity: ref(0),
        },
        {
            name: '오이',
            image: '../assets/menu4.png',
            weight: 50,
            calories: 8,
            carbs: 1.9,
            protein: 0.3,
            fat: 0.1,
            quantity: ref(0),
        },
        {
            name: '당근',
            image: '../assets/menu5.png',
            weight: 60,
            calories: 25,
            carbs: 6,
            protein: 0.6,
            fat: 0.1,
            quantity: ref(0),
        },
        {
            name: '적양배추',
            image: '../assets/menu6.png',
            weight: 50,
            calories: 22,
            carbs: 5,
            protein: 1,
            fat: 0.2,
            quantity: ref(0),
        },
        {
            name: '시금치',
            image: '../assets/menu7.png',
            weight: 30,
            calories: 7,
            carbs: 1.1,
            protein: 0.9,
            fat: 0.1,
            quantity: ref(0),
        },
        {
            name: '아보카도',
            image: '../assets/menu8.png',
            weight: 50,
            calories: 80,
            carbs: 4,
            protein: 1,
            fat: 7,
            quantity: ref(0),
        },
        {
            name: '올리브',
            image: '../assets/menu9.png',
            weight: 10,
            calories: 115,
            carbs: 6,
            protein: 0.8,
            fat: 10,
            quantity: ref(0),
        },
        {
            name: '브로콜리',
            image: '../assets/menu10.png',
            weight: 50,
            calories: 17,
            carbs: 3.3,
            protein: 1.2,
            fat: 0.2,
            quantity: ref(0),
        },
    ]);

    const selectedIngredients = ref([]);

    const totalCalories = computed(() => {
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + ingredient.quantity * ingredient.calories;
        }, 0);
    });

    const toggleIngredient = (ingredient) => {
        const index = selectedIngredients.value.findIndex(i => i.name === ingredient.name);

        if (index === -1) {
            // 이미 선택된 재료가 5개인 경우 더 이상 선택할 수 없도록 함
            if (selectedIngredients.value.length >= 5) {
                alert('최대 5개의 재료만 선택할 수 있습니다.');
                return;
            }
            selectedIngredients.value.push(ingredient);
        } else {
            selectedIngredients.value.splice(index, 1);
        }

        saveToLocalStorage();
    };

    const updateQuantity = (ingredient, quantity) => {
        const index = selectedIngredients.value.findIndex(i => i.name === ingredient.name);
        console.log('updateQuantity 함수 실행');
        if (index !== -1) {
            selectedIngredients.value[index].quantity = quantity;
            console.log(`재료: ${ingredient.name}, 수량: ${quantity}`);
        } else {
            selectedIngredients.value.push({ ...ingredient, quantity });
        }
        saveToLocalStorage();
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('totalCalories', totalCalories.value);
        localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients.value.map(ingredient => ({
            name: ingredient.name,
            quantity: ingredient.quantity
        }))));
    };

    watch(selectedIngredients, () => {
        saveToLocalStorage();
    }, { deep: true });


    return {
        ingredients,
        selectedIngredients,
        totalCalories,
        toggleIngredient,
        updateQuantity,
    };
});