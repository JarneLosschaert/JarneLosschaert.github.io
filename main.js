import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import Portfolio from './views/Portfolio.vue'
import Contact from './components/Contact.vue'
import NotFound from './views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Portfolio },
        { path: '/contact', component: Contact },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ],
});

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.mount('#app')
