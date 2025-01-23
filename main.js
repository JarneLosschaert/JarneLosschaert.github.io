import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { MotionPlugin } from "@vueuse/motion";
import Portfolio from "../src/views/Portfolio.vue";
import Contact from "../src/views/Contact.vue";
import NotFound from "../src/views/NotFound.vue";
import App from "./App.vue";


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
