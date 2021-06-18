import {createRouter, createWebHistory} from "vue-router"
import Equipment from '../views/Equipment/Equipment'
import Home from '../views/Home/Home'

const routes = [
	{
        path: '/home',
        name: 'Home',
        component: Home,
	},
	{
		path: '/equipment',
		name: 'Equipment',
		component: Equipment,
	},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
