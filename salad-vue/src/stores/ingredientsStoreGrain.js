import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useIngredientsStore = defineStore('ingredients', () => {
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