import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import 'flowbite';

// import "./assets/main.css";
import "../src/style.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faLinkedin, faSquareInstagram, faSquareTwitter} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
library.add(faFacebook, faSquareInstagram, faSquareTwitter, faLinkedin, faHeart, faMagnifyingGlass);

app.use(createPinia());
app.use(router);

app.mount("#app");
