import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Search from '../views/Search.vue'
import AllTask from '../views/AllTask.vue'
import Archived from '../views/Archived.vue'
import CompletedTasks from '../views/CompletedTasks.vue'
import DeletedTasks from '../views/DeletedTasks.vue'

const routes = [
    { path:'/', component: Home },
    { path:'/about', component: About },
    { path: '/search', component: Search},
    { path: '/alltasks', component: AllTask},
    { path: '/archived', component: Archived},
    { path: '/completed', component: CompletedTasks},
    { path: '/deleted', component: DeletedTasks},      
]

export const router = createRouter({
    history: createWebHistory('/todo'),routes
})
