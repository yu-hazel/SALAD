import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useCaloriesStore } from '@/stores/caloriesStore';

export const useCartStore = defineStore('cartStore', () => {
    const selectedIngredients = ref([]);
    const caloriesStore = useCaloriesStore();

    const totalCalories = computed(() => {
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + Math.ceil(ingredient.quantity * ingredient.calories);
        }, 0);
    });

    const totalCarbs = computed(() => {
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + Math.ceil(ingredient.quantity * ingredient.carbs);
        }, 0);
    });

    const totalProtein = computed(() => {
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + Math.ceil(ingredient.quantity * ingredient.protein);
        }, 0);
    });

    const totalFat = computed(() => {
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + Math.ceil(ingredient.quantity * ingredient.fat);
        }, 0);
    });

    const addIngredient = (ingredient) => {
        selectedIngredients.value.push(ingredient);
        saveToLocalStorage();
    };

    const removeIngredient = (ingredient) => {
        const index = selectedIngredients.value.findIndex(i => i.name === ingredient.name);
        if (index !== -1) {
            selectedIngredients.value.splice(index, 1);
        }
        saveToLocalStorage();
    };

    const toggleIngredient = (ingredient) => {
        const index = selectedIngredients.value.findIndex(i => i.name === ingredient.name);
        const ingredientCalories = Math.ceil(ingredient.quantity * ingredient.calories);

        if (index === -1) {
            addIngredient({ ...ingredient, quantity: ingredient.quantity || 1 });
        } else {
            removeIngredient(ingredient);
        }
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('totalCalories', totalCalories.value);
        localStorage.setItem('totalCarbs', totalCarbs.value);
        localStorage.setItem('totalProtein', totalProtein.value);
        localStorage.setItem('totalFat', totalFat.value);
        localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients.value.map(ingredient => ({
            name: ingredient.name,
            quantity: ingredient.quantity,
            carbs: ingredient.carbs,
            protein: ingredient.protein,
            fat: ingredient.fat
        }))));
    };

    const loadFromLocalStorage = () => {
        const storedIngredients = JSON.parse(localStorage.getItem('selectedIngredients'));
        if (storedIngredients) {
            selectedIngredients.value = storedIngredients.map(ingredient => ({
                ...ingredient,
                quantity: ref(ingredient.quantity),
                more: ref(false)
            }));
        }
    };

    watch(selectedIngredients, () => {
        saveToLocalStorage();
    }, { deep: true });

    return {
        selectedIngredients,
        totalCalories,
        totalCarbs,
        totalProtein,
        totalFat,
        addIngredient,
        removeIngredient,
        toggleIngredient,
        loadFromLocalStorage,
    };
});