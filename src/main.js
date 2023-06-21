import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/arya-green/theme.css'
import './assets/main.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fa1 } from '@fortawesome/free-solid-svg-icons'

import { createApp } from 'vue'
import App from './App.vue'

library.add(fa1)

createApp(App).use(PrimeVue).mount('#app')
