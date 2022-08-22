import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Search from '../views/Search.vue'
import AllTask from '../views/AllTask.vue'
import Archived from '../views/Archived.vue'
import Completedtasks from '../views/Completedtasks.vue'
import DeletedTasks from '../views/DeletedTasks.vue'
import MyForm from '../components/MyForm.vue'

const routes = [
    { path:'/', component: Home },
    { path:'/about', component: About },
    { path: '/search', component: Search},
    { path: '/alltask', component: AllTask},
    { path: '/archived', component: Archived},
    { path: '/Completedtasks', component: Completedtasks},
    { path: '/deletedtasks', component: DeletedTasks},    
    { path: '/myform', component: MyForm}
]

export const router = createRouter({
    history: createWebHistory('/todo'),routes
})
