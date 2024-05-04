<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Eventos"/>
  <UserComponent />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UserComponent from './components/UserComponent.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    UserComponent
  },
  data(){
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
