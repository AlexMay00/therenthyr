/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Library from './components/Library.vue'
import CampaignTimeline from './components/CampaignTimeline.vue'
import Recap from './components/Recap.vue'
import Links from './components/Links.vue'
import NotFound from './components/NotFound.vue'

const routes = [
  { path: '/', component: Library },
  { path: '/library', component: Library },
  { path: '/timeline', component: CampaignTimeline },
  { path: '/recap', component: Recap },
  { path: '/links', component: Links },
  { path: '/404', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  }
)

const app = createApp(App)
app.use(router)

registerPlugins(app)

app.mount('#app')
