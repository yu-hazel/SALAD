import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useIngredientsStore = defineStore('ingredients', () => {
    const ingredients = ref([
        {
            name: '훈제연어',
            image: 'menu1.png',
            weight: 100,
            calories: 117,
            carbs: 0,
            protein: 22,
            fat: 4,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '닭가슴살',
            image: 'menu1.png',
            weight: 100,
            calories: 165,
            carbs: 0,
            protein: 31,
            fat: 3.6,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '닭가슴살',
            image: 'menu1.png',
            weight: 100,
            calories: 165,
            carbs: 0,
            protein: 31,
            fat: 3.6,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '훈제오리',
            image: 'menu1.png',
            weight: 100,
            calories: 280,
            carbs: 0,
            protein: 18,
            fat: 23,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '베이컨',
            image: 'menu1.png',
            weight: 100,
            calories: 541,
            carbs: 1.4,
            protein: 37,
            fat: 42,
            quantity: ref(0),
            more: ref(false),
        },
        {
            name: '로스트 치킨',
            image: 'menu1.png',
            weight: 100,
            calories: 190,
            carbs: 0,
            protein: 29,
            fat: 7,
            quantity: ref(0),
            more: ref(false),
        }, {
            name: '쉬림프',
            image: 'menu1.png',
            weight: 100,
            calories: 99,
            carbs: 0.2,
            protein: 24,
            fat: 0.3,
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