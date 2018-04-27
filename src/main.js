import Vue from 'vue'
import VueParticles from 'vue-particles'
import App from './App.vue'

Vue.use(VueParticles)

new Vue({
  el: '#app',
  render: h => h(App)
})
