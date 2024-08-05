import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

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
        },
        {
            name: '토마토',
            image: '../assets/menu2.png',
            weight: 50,
            calories: 9,
            carbs: 2.7,
            protein: 0.4,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
        },
        {
            name: '양상추',
            image: '../assets/menu3.png',
            weight: 50,
            calories: 7.5,
            carbs: 1.45,
            protein: 0.7,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
        },
        {
            name: '오이',
            image: '../assets/menu4.png',
            weight: 50,
            calories: 8,
            carbs: 1.8,
            protein: 0.35,
            fat: 0.05,
            quantity: ref(0),
            more: ref(false),
        },
        {
            name: '당근',
            image: '../assets/menu5.png',
            weight: 50,
            calories: 20.5,
            carbs: 5,
            protein: 0.45,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
        },
        {
            name: '적양배추',
            image: '../assets/menu6.png',
            weight: 50,
            calories: 15.5,
            carbs: 3.7,
            protein: 0.7,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
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
            more: ref(false),
        },
        {
            name: '단호박',
            image: '../assets/menu9.png',
            weight: 50,
            calories: 22.5,
            carbs: 6,
            protein: 0.5,
            fat: 0.05,
            quantity: ref(0),
            more: ref(false),
        },
        {
            name: '브로콜리',
            image: '../assets/menu10.png',
            weight: 50,
            calories: 17,
            carbs: 3.3,
            protein: 1.4,
            fat: 0.2,
            quantity: ref(0),
            more: ref(false),
        },
        {
            name: '스위트 콘',
            image: '../assets/menu10.png',
            weight: 50,
            calories: 43,
            carbs: 9.5,
            protein: 1.5,
            fat: 0.6,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '적양파',
            image: '../assets/menu7.png',
            weight: 50,
            calories: 20,
            carbs: 4.65,
            protein: 0.45,
            fat: 0.05,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '바나나',
            image: '../assets/menu10.png',
            weight: 50,
            calories: 45,
            carbs: 11.5,
            protein: 0.55,
            fat: 0.15,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '믹스베리',
            image: '../assets/menu10.png',
            weight: 50,
            calories: 25,
            carbs: 6,
            protein: 0.5,
            fat: 0.1,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '블루베리',
            image: '../assets/menu10.png',
            weight: 50,
            calories: 29,
            carbs: 7.2,
            protein: 0.4,
            fat: 0.15,
            quantity: ref(0),
            more: ref(false),
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