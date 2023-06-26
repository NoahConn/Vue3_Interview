import { createApp } from 'vue'
import 'mdb-vue-ui-kit/css/mdb.min.css'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App)
  .use(createPinia())
  .mount('#app')
