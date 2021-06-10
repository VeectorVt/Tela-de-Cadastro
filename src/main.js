import Vue from 'vue'
import App from './App.vue'

//Sweet Alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
//Bulma
import  "../node_modules/bulma/css/bulma.css"

//Vue Material

import { MdTable, MdCard, MdField ,MdContent ,MdRipple , MdApp , MdToolbar} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'

Vue.use(MdTable)
Vue.use(MdCard)
Vue.use(MdField)
Vue.use(MdContent)
Vue.use(MdRipple)
Vue.use(MdApp)
Vue.use(MdToolbar)

 


Vue.use(VueSweetalert2);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
