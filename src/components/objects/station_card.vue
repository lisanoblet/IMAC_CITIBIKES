<template>

  <div id="station_card" v-on:click="seeMoreEmit">
    <h3>{{station_name}}</h3>
    <p>{{bike_availability}} bikes available</p>
    <p>{{slots_availability}} empty slots</p>
    <p class="pForId">{{id}}</p>
  </div>

</template>

<script>
  export default {
    name: 'StationCard',
    props: {
      station_name: {
        type: String,
        required: true
      },
      bike_availability: {
        type: Number,
        required: false
      },
      slots_availability: {
        type: Number,
        required: false
      },
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        stationsData: [

        ]
      }
    },
    methods: {
      seeMoreEmit: function (event) {
        console.log(event)
        this.$emit("selected-station-id", {
          id: this.id
        });
      }

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    font-family: 'Roboto', sans-serif;
  }

  h3 {
    display: block;
    text-align: center;
    font-size: 1vw;
  }

  #station_card p:not(.pForId) {
    display: block;
    text-align: center;
    font-size: 0.8vw;
  }

  .pForId {
    display: none;
  }

  #station_card {
    border-radius: 1vw;
    width: 10vw;
    min-width: 10%;
    margin: 0.7vw;
    padding: 1vw;
    padding-top: 0.2vh;
    box-shadow: 2px 2px 10px rgb(0 0 0 / 0.2);
    background: rgb(198, 117, 255);
    background: linear-gradient(140deg, rgba(198, 117, 255, 0.15177408854166663) 0%, rgba(104, 43, 174, 0.1545752089898459) 100%);
  }

  #station_card:hover {
    cursor: pointer;
    transition: 1s ease-out;
    background: rgba(104, 43, 174, 0.2);
    background: 1s ease-in-out linear-gradient(140deg, rgba(104, 43, 174, 0.1) 0%, rgba(149, 0, 255, 0.1) 80%, rgba(198, 117, 255, 0.1) 100%);
  }


  @media only screen and (max-width: 1000px) {

    h3 {
      font-size: 1.4vw;
    }

    #station_card p:not(.pForId) {
      font-size: 1.2vw;
    }

    #station_card {
      width: 14vw;
      margin-bottom: 2vh;
      margin-left: 2vw;
    }

  }


  @media only screen and (max-width: 600px) {

    h3 {
      font-size: 2.8vw;
    }

    #station_card p:not(.pForId) {
      font-size: 2vw;
    }

    #station_card {
      width: 38vw;
      margin: auto;
      margin-bottom: 2vh;
      margin-left: 2vw;
    }

  }

  @media only screen and (max-width: 400px) {

    h3 {
      font-size: 4vw;
    }

    #station_card p:not(.pForId) {
      font-size: 3vw;
    }

    #station_card {
      width: 60vw;
      margin-left: 13vw;
      margin-bottom: 2vh;
    }

  }
</style>