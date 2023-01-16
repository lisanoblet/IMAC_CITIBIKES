<template>

  <div class="header">

    <p id="head_text_1">CITY BIKES HOMEPAGE</p>

    <router-link :to="{ name: 'myHomepage' }">
      <p id="head_text_2">SEARCH STATIONS</p>
    </router-link>

    <router-link :to="{ name: 'myAboutPage' }">
      <p id="head_text_3">ABOUT</p>
    </router-link>

    <hr />

  </div>

</template>

<script>
  export default {
    name: 'Header',
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


  .header {
    display: grid;
    grid-template-columns: 60vw 21vw 11vw 8vw;
    text-align: center;
    font-size: 1vw;
  }

  hr {
    height: 1px;
    width: 90vw;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    text-align: center;
    margin-left: 5vw;
    margin-top: 0.5vh;
    padding: 0;
    grid-column: 1;
  }

  #head_text_1 {
    grid-column: 1;
    text-align: left;
    padding-left: 6vw;
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 800;
  }


  #head_text_2 {
    grid-column: 2;
    margin-left: 0;
  }

  #head_text_3 {
    grid-column: 3;
    margin-left: 0;
  }

  @media only screen and (max-width: 1000px) {

    .header {
      font-size: 1.8vw;
      grid-template-columns: 51vw 30vw 11vw 8vw;
    }

    #head_text_1 {
      padding-left: 4vw;
    }
  }

  @media only screen and (max-width: 600px) {

    .header {
      font-size: 2.5vw;
      grid-template-columns: 50vw 33vw 13vw 8vw;

    }

    #head_text_1 {
      padding-left: 4vw;
    }

    #head_text_3 {
      padding-right: 10vw;
    }


  }

  @media only screen and (max-width: 400px) {

    .header {
      font-size: 4vw;
    }

    #head_text_1 {
      padding-left: 2vw;
    }

    #head_text_3 {
      padding-right: 10vw;
    }


  }
</style>