<template>
  <div id="about_page">

    <Header></Header>

    <h1>The City Bikes Project</h1>

    <p id="about_description">The City Bikes project was built thanks to the cityBikes API. <br>
      You can find out more about this API here : <a href='http://api.citybik.es/v2/'>http://api.citybik.es/v2/</a> </p>

    <div class="moving_bike">
      <img src="../../assets/bike2.png">
    </div>

    <hr />

    <Footer></Footer>

  </div>

</template>

<script>
  import Header from '../objects/header.vue'
  import Footer from '../objects/footer.vue'

  export default {
    name: 'AboutPage',
    components: {
      Header,
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

  #about_page {
    height: 80vh;
  }

  h1 {
    font-family: 'Alumni Sans', sans-serif;
    font-size: 6vw;
    text-align: center;
    margin-top: 10vh;
  }

  p {

    text-align: center;
    font-size: 1.5vw;
  }



  img {
    width: 15vw;
    height: auto;
    margin-bottom: 0;
    margin: 0;
  }

  .moving_bike {
    width: 11vw;
    height: auto;
    position: fixed;
    bottom: 4vh;
    margin: 0;
    /* animation-name: animation_bike;
    animation-duration: 20s;
    animation-fill-mode: forwards; */
    animation: animation_bike 20s forwards infinite;
  }

  @keyframes animation_bike {

    0% {
      left: -15vw;
    }

    100% {
      left: 115vw;
    }

  }


  hr {

    height: 1px;
    width: 100vw;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    text-align: center;
    margin-left: 0vw;
    margin-top: 0.5vh;
    padding: 0;
    position: fixed;
    bottom: 2vh;
  }

  @media only screen and (max-width: 1000px) {

    h1 {
      font-size: 9vw;
    }

    p {
      font-size: 3vw;
      width: 80vw;
      margin: auto;
    }

  }


  @media only screen and (max-width: 600px) {

    h1 {
      margin-top: 2vh;
      font-size: 12vw;
      width: 60vw;
      margin: auto;
      margin-top: 10vh;
    }

    p {
      font-size: 3vw;
      width: 60vw;
      margin: auto;
      margin-top: 10vh;
    }

    .moving_bike {
      display: none;
    }

  }


  @media only screen and (max-width: 400px) {

    h1 {
      margin-top: 2vh;
      font-size: 18vw;
      width: 60vw;
      margin: auto;
      margin-top: 4vh;
    }

    p {
      font-size: 6vw;
      width: 60vw;
      margin: auto;
      margin-top: 10vh;
    }

    .moving_bike {
      display: none;
    }
  }
</style>


<!-- utiliser scoped comme mot clé pour éviter que tout le site soit impacté  -->