<template>

  <div class="footer">

    <p id="footer_text">By Lili 💗 | City Bikes API http://api.citybik.es/v2/</p>

  </div>

</template>

<script>
  export default {
    name: 'Footer',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://rsms.me/inter/inter.css');
  @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


  * {
    font-family: 'Roboto', sans-serif;
  }

  .footer {
    position: fixed;
    background-color: white;
    height: 4vh;
    width: 100vw;
    z-index: 4;
    bottom: 0vh;
    margin: auto;

  }

  #footer_text {
    text-align: center;
    font-size: 0.8em;
    position: relative;
    height: 100%;
    bottom: 1vh;
  }


  @media only screen and (max-width: 1000px) {

    .footer {
      width: 100vw;
    }

    #footer_text {
      font-size: 0.8em;
    }

  }


  @media only screen and (max-width: 600px) {

    .footer {
      width: 100vw;
    }

    #footer_text {
      font-size: 0.8em;
    }

  }

  @media only screen and (max-width: 400px) {

    .footer {
      width: 98vw;
      margin: 0;

    }

    #footer_text {
      bottom: 0.4vh;
      font-size: 0.6em;
    }


  }
</style>