<template>

  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'App',
    components: {

    },
    data: function () {
      return {
        isShow: true,
      };
    },
  }
</script>

<style scoped>
  @import url('https://rsms.me/inter/inter.css');
  @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans&display=swap');


  html {
    font-family: 'Alumni Sans', sans-serif;
  }

  app {
    background: rgb(182, 254, 255);
    background: linear-gradient(0deg, rgba(182, 254, 255, 0.10135392047443981) 0%, rgba(255, 208, 255, 0.17418305212710083) 100%);
    height: 100%;
    min-height: 100%;
  }
  
</style>


<!-- utiliser scoped comme mot clé pour éviter que tout le site soit impacté  -->