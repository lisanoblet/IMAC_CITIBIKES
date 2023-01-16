<template>

  <div id="homepage">

    <Header></Header>

    <h1>New York City Bikes</h1>

    <p id="homepage_description">Get information on your favorite bike stations in New York, for now ;).</p>

    <StationsList></StationsList>

    <Footer></Footer>

  </div>

</template>

<script>
  import StationsList from '../objects/stations_list.vue'
  import Header from '../objects/header.vue'
  import Footer from '../objects/footer.vue'

  export default {
    name: 'HomePage',
    components: {
      Header,
      StationsList,
      Footer
    },
    props: {
      msg: String
    }

  }
</script>

<style scoped>
  @import url('https://rsms.me/inter/inter.css');
  @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


  * {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-family: 'Alumni Sans', sans-serif;
    font-size: 6vw;
    text-align: center;
    margin-bottom: 2vh;
    margin-top: 10vh;
  }

  p {

    text-align: center;
    font-size: 1vw;
  }

  form {
    margin-left: 20.5vw;
  }

  #search_bar_homepage {
    width: 50vw;
    height: 7vh;
    border-radius: 2vw;
    background-color: rgba(238, 238, 238, 0.863);
    border: 0;
    padding-left: 2vw;
  }

  button {
    background: rgb(104, 43, 174);
    background: linear-gradient(140deg, rgba(104, 43, 174, 1) 0%, rgba(149, 0, 255, 1) 80%, rgba(198, 117, 255, 1) 100%);
    width: 6vw;
    height: 6vh;
    margin: 1vw;
    border-radius: 2vw;
    box-shadow: 2px 2px 10px rgb(0 0 0 / 0.2);
    font-size: 1.2vw;
    color: white;
    border: 0;
  }

  button:hover {
    background-color: aliceblue;
  }

  ::placeholder {
    font-family: 'Alumni sans', sans-serif;
    font-size: 1.8vw;
  }



  @media only screen and (max-width: 1000px) {

    h1 {
      font-size: 8vw;
    }

    p {
      font-size: 1.5vw;
    }

  }


  @media only screen and (max-width: 600px) {

    h1 {
      margin-top: 2vh;
      font-size: 10vw;
    }

    p {
      font-size: 2vw;
    }

  }



  @media only screen and (max-width: 400px) {

    h1 {
      font-size: 12vw;
    }

    p {
      font-size: 4vw;
      width: 70vw;
      margin: auto;
    }

  }
</style>

<!-- utiliser scoped comme mot clé pour éviter que tout le site soit impacté  -->