import { defineStore } from 'pinia';

export const useCaloriesStore = defineStore('calories', {
    state: () => ({
        gender: 'female',
        height: '',
        currentWeight: '',
        age: '',
        goal: '',
        mealCount: 1,
        recommendedCalories: null,
        perMealCalories: null,
        carbs: null,
        protein: null,
        fat: null,
    }),
    actions: {
        calculateCalories() {
            let BMR = 0;

            if (this.gender === 'male') {
                BMR = 66 + (13.7 * this.currentWeight) + (5 * this.height) - (6.8 * this.age);
            } else {
                BMR = 655 + (9.6 * this.currentWeight) + (1.7 * this.height) - (4.7 * this.age);
            }

            if (this.goal === '유지') {
                this.recommendedCalories = Math.round(BMR * 1.375); // 유지
            } else if (this.goal === '감량') {
                this.recommendedCalories = Math.round((BMR * 1.375) - ((BMR * 1.375) * 0.2)); // 감량
            } else if (this.goal === '증량') {
                this.recommendedCalories = Math.round((BMR * 1.375) + ((BMR * 1.375) * 0.2)); // 증량
            }

            this.perMealCalories = Math.round(this.recommendedCalories / this.mealCount);

            // 탄수화물, 단백질, 지방 계산
            this.carbs = Math.round((this.perMealCalories * 0.5) / 4);  // 탄수화물은 1g당 4kcal
            this.protein = Math.round((this.perMealCalories * 0.3) / 4);  // 단백질은 1g당 4kcal
            this.fat = Math.round((this.perMealCalories * 0.2) / 9);  // 지방은 1g당 9kcal

            this.saveUserData(); // 상태와 로컬 스토리지에 데이터 저장
        },
        saveUserData() {
            localStorage.setItem('gender', this.gender);
            localStorage.setItem('height', this.height);
            localStorage.setItem('currentWeight', this.currentWeight);
            localStorage.setItem('age', this.age);
            localStorage.setItem('goal', this.goal);
            localStorage.setItem('mealCount', this.mealCount);
            localStorage.setItem('recommendedCalories', this.recommendedCalories);
            localStorage.setItem('perMealCalories', this.perMealCalories);
            localStorage.setItem('carbs', this.carbs);
            localStorage.setItem('protein', this.protein);
            localStorage.setItem('fat', this.fat);
        },
        loadFromLocalStorage() {
            const storedGender = localStorage.getItem('gender');
            const storedHeight = localStorage.getItem('height');
            const storedCurrentWeight = localStorage.getItem('currentWeight');
            const storedAge = localStorage.getItem('age');
            const storedGoal = localStorage.getItem('goal');
            const storedMealCount = localStorage.getItem('mealCount');
            const storedRecommendedCalories = localStorage.getItem('recommendedCalories');
            const storedPerMealCalories = localStorage.getItem('perMealCalories');
            const storedCarbs = localStorage.getItem('carbs');
            const storedProtein = localStorage.getItem('protein');
            const storedFat = localStorage.getItem('fat');

            if (storedGender !== null) {
                this.gender = storedGender;
            }
            if (storedHeight !== null) {
                this.height = storedHeight;
            }
            if (storedCurrentWeight !== null) {
                this.currentWeight = storedCurrentWeight;
            }
            if (storedAge !== null) {
                this.age = storedAge;
            }
            if (storedGoal !== null) {
                this.goal = storedGoal;
            }
            if (storedMealCount !== null) {
                this.mealCount = parseInt(storedMealCount, 10);
            }
            if (storedRecommendedCalories !== null) {
                this.recommendedCalories = parseInt(storedRecommendedCalories, 10);
            }
            if (storedPerMealCalories !== null) {
                this.perMealCalories = parseInt(storedPerMealCalories, 10);
            }
            if (storedCarbs !== null) {
                this.carbs = parseInt(storedCarbs, 10);
            }
            if (storedProtein !== null) {
                this.protein = parseInt(storedProtein, 10);
            }
            if (storedFat !== null) {
                this.fat = parseInt(storedFat, 10);
            }
        }
    }
});