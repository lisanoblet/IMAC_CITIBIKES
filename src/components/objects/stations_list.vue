<template>

  <div id="stations_list">

    <SearchOptions :search.sync="search" />
    <SortOptions :stationsSortType.sync="stationsSortType" />

    <div class="div_grid">
      <div id="stations_cards">
        <StationCard v-on:selected-station-id="toSeeMoreComponent" v-for="station in stationsOrganizedData"
          :key="station.id" :station_name="station.name" :bike_availability="station.free_bikes"
          :slots_availability="station.empty_slots" :id="station.id">
        </StationCard>
      </div>
    </div>

    <MoreInfoCard class="info_card" :selected_station_name="moreInfoOnStation[0].name"
      :selected_station_bikes="moreInfoOnStation[0].free_bikes"
      :selected_station_slots="moreInfoOnStation[0].empty_slots"
      :selected_station_latitude="moreInfoOnStation[0].latitude"
      :selected_station_longitude="moreInfoOnStation[0].longitude"
      :selected_station_ebikes="moreInfoOnStation[0].extra.ebikes"
      :selected_station_payment1="moreInfoOnStation[0].extra.payment[0]"
      :selected_station_payment2="moreInfoOnStation[0].extra.payment[1]">
    </MoreInfoCard>

  </div>

</template>

<script>
  import StationCard from "./station_card.vue";
  import getStationsData from "../../services/api/stations_repository.js";
  import MoreInfoCard from "./more_info_card.vue";
  import SortOptions from './sort_options.vue'
  import SearchOptions from './search_options.vue'


  export default {
    name: "StationsList",
    components: {
      StationCard,
      SearchOptions,
      SortOptions,
      MoreInfoCard
    },
    props: {
      msg: String,
    },

    computed: {

      stationsOrganizedData: function () {
        const field = ["AZName", "ZAName"].includes(this.stationsSortType) ?
          "name" :
          "free_bikes";
        const reversed = ["ZAName", "LMBikes"].includes(this.stationsSortType) ? -1 : 1
        console.log(this.stationsSortType)

        const string_case = (a, b) => a[field].localeCompare(b[field]) * reversed;
        const number_case = (a, b) => (b[field] - a[field]) * reversed;

        const comparator = ["name", "MLBikes"].includes(field) ? string_case : number_case;

        return this.stationsData
          .filter((a) => a.name.toLowerCase().includes(this.search.toLowerCase()))
          .sort(comparator)
      }
    },

    data() {
      return {
        stationsData: [],
        search: localStorage.getItem("search") || "",
        stationsSortType: localStorage.getItem("stationsSortType") || "AZName",
        //more info card remplie par défaut sinon erreur
        moreInfoOnStation: [{
          "empty_slots": 0,
          "extra": {
            "ebikes": 0,
            "has_ebikes": 0,
            "last_updated": 0,
            "payment": [
              ""
            ],
            "renting": 0,
            "returning": 0,
            "uid": ""
          },
          "free_bikes": 0,
          "id": "",
          "latitude": 0,
          "longitude": 0,
          "name": "",
          "timestamp": ""
        }, ]

      };
    },

    created: function () {
      this.retrieveStationsData();
    },

    methods: {
      async retrieveStationsData() {
        this.stationsData = await getStationsData();
      },

      toSeeMoreComponent: function (selected_station_id) {
        console.log(selected_station_id)

        let length = this.stationsData.length;

        //For loop to run through stationsData to find the right station with the id and send it 
        for (let i = 0; i < length; i++) {
          //console.log(this.stationsData[i].id)
          //console.log(selected_station_id.id)
          if (this.stationsData[i].id === selected_station_id.id) {

            console.log(this.stationsData[i].id)
            this.moreInfoOnStation = [this.stationsData[i]]
          }
        }

        console.log(this.moreInfoOnStation[0].name)

        let info_card = document.querySelector(".info_card");
        info_card.classList.add("info_card_visible");

      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* CSS DES TEXTES */

  h2 {
    font-size: 10vh;
    align-content: center;
    position: absolute;
    margin-top: 6vh;
    font-family: "Alumni Sans", sans-serif;
  }

  h3 {
    font-size: 5vh;
    align-content: center;
    color: darkgray;
    position: absolute;
    margin-top: 1vh;
    font-family: "Alumni Sans", sans-serif;
  }

  /* CSS DES STATIONS */

  #stations_list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
    width: 96vw;
    margin: 2vw;
  }

  #stations_cards {
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-self: center;
    margin-bottom: 18vh;
  }

  button {
    cursor: pointer;
    background: rgb(104, 43, 174);
    background: linear-gradient(140deg,
        rgba(104, 43, 174, 1) 0%,
        rgba(149, 0, 255, 1) 80%,
        rgba(198, 117, 255, 1) 100%);
    width: 8vw;
    height: 6vh;
    margin: 1vw;
    border-radius: 2vw;
    box-shadow: 2px 2px 10px rgb(0 0 0 / 0.2);
    font-size: 1.2vw;
    color: white;
    border: 0;
  }


  @media only screen and (max-width: 600px) {

    #stations_cards {
      margin-top: 4vh;
    }

  }

  @media only screen and (max-width: 400px) {

    * {
      overflow: hidden;
    }

    #stations_cards {
      width: 95vw;
    }

  }
</style>