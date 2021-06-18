import VueRouter from 'vue-router'
import Equipment from '../views/Equipment/Equipment'
import Home from '../views/Home/Home'

const routes = [{
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


const router = new VueRouter({
	mode: 'history',
	routes,
});


export default router
