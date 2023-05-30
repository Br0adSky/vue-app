import {createApp} from 'vue'
import App from './App.vue'
// import MenuMain from './MenuMain'
// import MenuComponent from './Menu'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'


import TableComponent from './Table'
import {createVuetify} from "vuetify/lib/labs/entry-bundler.mjs";

const app = createApp(App)
app.component('TableComponent', TableComponent)
// const app = createApp(MenuMain)
// app.component('MenuComponent', MenuComponent)
app.use(createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            // checkBoxOutline: mdiCheckboxOutline,
        },
        sets: {
            mdi,
        },
    },
}))
app.mount('#app')
