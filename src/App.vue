<template>
  <div id="app">
  <cadastro></cadastro>
  <!-- <tabela></tabela> -->
  </div>
</template>

<script>
import cadastro from './components/cadastro.vue'
//import tabela from './components/tabela.vue'

export default {
  name: 'App',
  
  components: {
    cadastro ,
    //tabela
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
