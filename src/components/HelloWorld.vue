<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="countUp">Count++</button>
    <button @click="countDown">Count--</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  methods: {
    countUp: function () {
      document.dispatchEvent(
        new CustomEvent('countEvent', {
          detail: {
            action: 'add',
            amount: 1,
          },
        })
      )
    },
    countDown: function () {
      document.dispatchEvent(
        new CustomEvent('countEvent', {
          detail: {
            action: 'sub',
            amount: 1,
          },
        })
      )
    },
  },
}
</script>
