<template>

  <div id="info_card" v-on:click="removeSeeMore">

    <h3 class="station_name">{{selected_station_name}}</h3>

    <p class="station_bikes">{{selected_station_bikes}} bikes available</p>
    <p class="station_slots">{{selected_station_slots}} empty slots</p>
    <p class="station_lat">Latitude : {{selected_station_latitude}}</p>
    <p class="station_long">Longitude : {{selected_station_longitude}}</p>
    <p class="station_ebikes">Ebikes ? {{selected_station_ebikes}} available</p>
    <p class="station_payment">Payment : {{selected_station_payment1}} or {{selected_station_payment2}}</p>


  </div>

</template>

<script>
  export default {
    name: 'MoreInfoCard',
    props: {
      selected_station_name: {
        type: String,
        required: true
      },
      selected_station_bikes: {
        type: Number,
        required: true
      },
      selected_station_slots: {
        type: Number,
        required: true
      },
      selected_station_latitude: {
        type: Number,
        required: true
      },
      selected_station_longitude: {
        type: Number,
        required: true
      },
      selected_station_ebikes: {
        type: Number,
        required: true
      },
      selected_station_payment1: {
        type: String,
        required: true
      },
      selected_station_payment2: {
        type: String,
        required: false
      },

    },
    data() {
      return {

      }
    },
    methods: {
      removeSeeMore: function () {
        let info_card = document.querySelector(".info_card");
        info_card.classList.remove("info_card_visible");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    font-family: 'Roboto', sans-serif;
  }

  .info_card {
    display: none;
  }

  .info_card_visible {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    z-index: 3;
    width: 60vw;
    height: 8vh;
    background-color: rgb(255, 255, 255);
    border: outset rgba(198, 117, 255, 0.4);
    margin: 2vw;
    margin-top: 10vh;
    position: fixed;
    right: 2vw;
    margin-bottom: 0;
    bottom: 5vh;
    border-radius: 2vw;
    padding: 1.5%;
    padding-bottom: 2%;
  }

  .info_card:hover {
    border: outset rgba(149, 0, 255, 0.567);
    transition: .5s ease-in-out;
  }

  p {
    font-size: 1vw;
    margin: 0;
    padding-left: 10%;
  }

  h3 {
    margin-top: 0;
    font-size: 1vw;
    grid-row: 1;
    grid-column: 1 / span 3;
    text-align: center;
  }

  .station_bikes {
    grid-row: 2;
    grid-column: 1;
  }

  .station_slots {
    grid-row: 2;
    grid-column: 2;
  }

  .station_lat {
    grid-row: 2;
    grid-column: 3;
  }

  .station_long {
    grid-row: 3;
    grid-column: 3;
  }

  .station_ebikes {
    grid-row: 3;
    grid-column: 1;
  }

  .station_payment {
    grid-row: 3;
    grid-column: 2;
  }



  @media only screen and (max-width: 1000px) {

    p {
      font-size: 1.2vw;
    }

    h3 {
      font-size: 1.4vw;
    }

    .info_card_visible {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      z-index: 3;
      width: 60vw;
      height: 8vh;
      margin: 2vw;
      margin-top: 10vh;
      right: 2vw;
      margin-bottom: 0;
      bottom: 5vh;
      border-radius: 2vw;
      padding: 1.5%;
      padding-bottom: 2%;
    }

  }


  @media only screen and (max-width: 600px) {

    p {
      font-size: 2vw;
    }

    h3 {
      font-size: 2.8vw;
    }

    .info_card_visible {
      width: 88vw;
      height: 12vh;
    }

  }

  @media only screen and (max-width: 400px) {

    p {
      font-size: 3vw;
    }

    h3 {
      font-size: 4vw;
    }

    .info_card_visible {
      width: 88vw;
      height: 14vh;

    }

  }
</style>