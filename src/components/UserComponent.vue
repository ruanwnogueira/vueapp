<template>
  <div>
    <h1>Pínia:</h1>
    <pre>
      {{ userStore.state.user }}
  </pre
    >
    <button @click="handleRandom">Alterar</button>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useUserStore } from '../stores/user.ts'

const userStore = useUserStore()

onMounted(() => {
  document.addEventListener('changeState:user', listenerChangeUserState)
})

onBeforeUnmount(() => {
  document.removeEventListener('changeState:user', listenerChangeUserState)
})

const listenerChangeUserState = event => {
  if (event.detail.origin !== 'vue') {
    const user = event.detail.user

    userStore.setUser(user || {})
  }
}

const handleRandom = () => {
  userStore.setUser({
    id: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    name: ['Pinia', 'Vue', 'Vite', 'TypeScript', 'Microfrontend', 'Qyon'][
      Math.floor(Math.random() * 6)
    ],
    age: Math.floor(Math.random() * (100 - 1 + 1) + 1),
  })

  document.dispatchEvent(
    new CustomEvent('changeState:user', {
      detail: { origin: 'vue', user: userStore.state.user },
    })
  )
}
</script>
