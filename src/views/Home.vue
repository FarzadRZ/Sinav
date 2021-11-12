<template>
  <div class="home">
    <Header />
    <Main />
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Main from '../components/Main.vue'

  export default {
    name: 'Home',

    components: {
      Header,
      Main
    },
  }
</script>
