<template>
  <div class="home">
    <img id="logo" alt="arkWallet" src="../assets/img/ark_logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
  },
  created() {

  }
}
</script>
<style>

#logo{
  width: 200px;
  height: 200px;
  object-fit: cover;
}

</style>