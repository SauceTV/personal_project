import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

// eslint-disable-next-line vue/multi-word-component-names
createApp(App)
    .component('fai', FontAwesomeIcon)
    .use(router)
    .mount('#app');