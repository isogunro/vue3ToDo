import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
// import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.use(PrimeVue)
// app.use(ToastService)
app.use(DialogService)
app.mount('#app')
