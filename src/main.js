import Vue from 'vue'
import App from './App.vue'
import store from './store'

///cricle progress component
// https://github.com/setaman/vue-ellipse-progress
import VueEllipseProgress from 'vue-ellipse-progress';
Vue.use(VueEllipseProgress);

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
import { createProvider } from './vue-apollo'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
///End of Bootstrap Installation///


///Global CSS style
require('./assets/css/styles.css');
require('./assets/css/responsive.css');
require('./assets/icons/font-awesome-4.7.0/css/font-awesome.min.css');
// require('./assets/plugins/css/jquery.fancybox.min.css');
require('./assets/plugins/css/owl.css');
require('./assets/plugins/css/animate.css');
///End of Global CSS style

require('./assets/js/custom-scripts.js');
// require('./assets/plugins/js/jquery.nav.js');

new Vue({
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
