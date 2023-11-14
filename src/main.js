import { createApp } from "vue";
import App from "./App.vue";
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
<<<<<<< HEAD

=======
>>>>>>> b44a6ae89f0aeecd0822b56dcf71d0f5c5643f93

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
