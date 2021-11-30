import Vue from 'vue'
import App from './App.vue'

///JQuery Installation///
var $ = require('jquery');
window.jQuery = $;
window.$ = $;
///End Installation///


///Bootstrap Installation///
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
///End of Bootstrap Installation///


///Global CSS style
require('./assets/css/styles.css');
require('./assets/css/responsive.css');
require('./assets/plugins/css/jquery.fancybox.min.css');
require('./assets/plugins/css/owl.css');
require('./assets/plugins/css/animate.css');
///End of Global CSS style


// require('./assets/js/custom-scripts.js');
// require('./assets/plugins/js/jquery.nav.js');
// require('./assets/plugins/js/jquery.mixitup.min.js');
// require('./assets/plugins/js/jquery.fancybox.min.js');
// require('./assets/plugins/js/popper.min.js');
// require('./assets/plugins/js/owl.carousel.js');




new Vue({
  render: h => h(App),
}).$mount('#app')
