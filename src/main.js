import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from "./router";

const app = createApp(App)
app.use(router)
app.use(Vant)
app.mount('#app')
