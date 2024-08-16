import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        username: '박선정',
    }),
    actions: {
        login() {
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
        },
        logout() {
            this.isLoggedIn = false;
            localStorage.removeItem('isLoggedIn');
        },
        checkAuthStatus() {
            this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        },
        setUsername(name){
            this.username = name;
        }
    }
});