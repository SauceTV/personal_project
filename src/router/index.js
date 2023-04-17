import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from "@/pages/UserLogin";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'UserLogin', component: UserLogin},
    ]
});