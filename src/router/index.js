import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from "@/pages/UserLogin";
import UserTable from "@/pages/UserTable";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'UserLogin', component: UserLogin},
        {path: '/UserTable', name: 'UserTable', component: UserTable},
    ]
});