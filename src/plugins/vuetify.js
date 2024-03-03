/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
//import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md2 } from 'vuetify/blueprints'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  blueprint: md2,
  theme: {
    defaultTheme: 'dark'
  }
})