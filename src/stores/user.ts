import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      state: {
        user: {},
      },
      version: 0
    }
  },
  actions: {
    setUser(user) {
      this.state.user = user
      this.version++  
    },
  },

  persist: {
    storage: sessionStorage,
    paths: ['state.user', 'version'],
  },
})
