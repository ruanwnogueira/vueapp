import { h, createApp } from 'vue'
import singleSpaVue from 'single-spa-vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import App from './App.vue'

const vueLifecycles = singleSpaVue({
  createApp,
  handleInstance(app) {
    app.use(pinia)
  },
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.

        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
      })
    },
  },
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
