import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useCaloriesStore } from '@/stores/caloriesStore';

export const useCartStore = defineStore('cartStore', () => {
    const selectedIngredients = ref([]);
    const selectedOrders = ref([]);
    const caloriesStore = useCaloriesStore();
    const hasAddedToCart = ref(false); // 장바구니에 재료가 추가되었는지 확인하는 플래그

    const addOrderToSelection = (order) => {
        if (!selectedOrders.value.includes(order)) {
            selectedOrders.value.push(order);
        }
    };

    const removeOrderFromSelection = (order) => {
        selectedOrders.value = selectedOrders.value.filter(o => o !== order);
    };

    // 재료 선택 초기화
    const resetSelection = () => {
        selectedIngredients.value = [];
        hasAddedToCart.value = false; // 초기화 시 플래그 리셋
    };

    // 총 칼로리 계산
    const totalCalories = computed(() => {
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + Math.ceil(ingredient.quantity * ingredient.calories);
        }, 0);
    });

    // 총 탄수화물 계산
    const totalCarbs = computed(() => {
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + Math.ceil(ingredient.quantity * ingredient.carbs);
        }, 0);
    });

    // 총 단백질 계산
    const totalProtein = computed(() => {
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + Math.ceil(ingredient.quantity * ingredient.protein);
        }, 0);
    });

    // 총 지방 계산
    const totalFat = computed(() => {
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + Math.ceil(ingredient.quantity * ingredient.fat);
        }, 0);
    });

    // 총 가격 계산
    const totalPrice = computed(() => {
        // console.log('cartStore 계산중');
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + ingredient.quantity * ingredient.price;
        }, 0);
    });

    // 재료 추가
    const addIngredient = (ingredient) => {
        selectedIngredients.value.push(ingredient);
        hasAddedToCart.value = false; // 재료가 추가된 후 장바구니에 담기 전까지는 플래그를 false로 유지
        saveToLocalStorage();
    };

    // 재료 제거
    const removeIngredient = (ingredient) => {
        const index = selectedIngredients.value.findIndex(i => i.name === ingredient.name);
        if (index !== -1) {
            selectedIngredients.value.splice(index, 1);
        }
        saveToLocalStorage();
    };

    // 재료 추가/제거 토글
    const toggleIngredient = (ingredient) => {
        const index = selectedIngredients.value.findIndex(i => i.name === ingredient.name);
        if (index === -1) {
            addIngredient({ ...ingredient, quantity: ingredient.quantity || 1 });
        } else {
            removeIngredient(ingredient);
        }
    };

    // 로컬 스토리지에 저장
    const saveToLocalStorage = () => {
        localStorage.setItem('totalCalories', totalCalories.value);
        localStorage.setItem('totalCarbs', totalCarbs.value);
        localStorage.setItem('totalProtein', totalProtein.value);
        localStorage.setItem('totalFat', totalFat.value);
        localStorage.setItem('totalPrice', totalPrice.value);
        localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients.value.map(ingredient => ({
            name: ingredient.name,
            quantity: ingredient.quantity,
            carbs: ingredient.carbs,
            protein: ingredient.protein,
            fat: ingredient.fat,
            calories: ingredient.calories,
            price: ingredient.price,
            category: ingredient.category,
        }))));
    };

    // 로컬 스토리지에서 불러오기
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

    // 장바구니에 현재 선택된 주문 추가
    const addOrderToCart = (order) => {
        selectedOrders.value.push(order);
        hasAddedToCart.value = true; // 장바구니에 추가된 후 플래그를 true로 설정
        saveToLocalStorage();
    };

    // 장바구니의 선택된 주문들의 총 금액 계산
    const selectedTotalPrice = computed(() => {
        return selectedOrders.value.reduce((sum, order) => {
            return sum + (order.totalPrice || 0);
        }, 0);
    });

    // 장바구니에 추가된 주문을 로컬스토리지에 저장
    watch(selectedOrders, () => {
        localStorage.setItem('selectedOrders', JSON.stringify(selectedOrders.value));
    }, { deep: true });

    // 선택된 재료가 변경될 때마다 로컬 스토리지에 저장
    watch(selectedIngredients, () => {
        saveToLocalStorage();
    }, { deep: true });

    return {
        selectedIngredients,
        selectedOrders,
        hasAddedToCart,
        resetSelection,
        totalCalories,
        totalCarbs,
        totalProtein,
        totalFat,
        totalPrice,
        addIngredient,
        removeIngredient,
        toggleIngredient,
        loadFromLocalStorage,
        addOrderToCart,
        selectedTotalPrice,
        addOrderToSelection,
        removeOrderFromSelection,
    };
});
