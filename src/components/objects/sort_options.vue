<template>

  <div class="gallery-options">

    <label for="stations-sort"> Sort by : </label>
    <select :value="stationsSortType" @input="onStationsSortTypeChanged" id="station-sort">
      <option value="AZName">Station names from A to Z</option>
      <option value="ZAName">Station names from Z to A</option>
      <option value="MLBikes">Number of bikes - Most to Least</option>
      <option value="LMBikes">Number of bikes - Least to Most</option>
    </select>

  </div>

</template>


<script>
  export default {
    name: 'SortOptions',
    props: {
      stationsSortType: String
    },

    watch: {
      stationsSortType: function (newStationsSortType) {
        localStorage.setItem("stationsSortType", newStationsSortType)
      }
    },

    methods: {
      onStationsSortTypeChanged(event) {
        this.$emit('update:stationsSortType', event.target.value)
      },
    }
  }
</script>


<style scoped>
  .gallery-options {
    justify-content: space-around;
    margin-left: 4vw;
    margin-right: 4vw;
    margin-top: 6vh;
  }

  input {
    margin-left: 2vw;
    margin-right: 0vw;
  }

  select {
    margin-left: 0vw;
    margin-right: 4vw;
    font-family: "Alumni sans", sans-serif;
    font-size: 1.6vw;
    color: rgb(80, 80, 80);
  }

  label {
    font-family: "Alumni sans", sans-serif;
    font-size: 1.6vw;
    color: rgb(80, 80, 80);
    margin-left: 8vw;
  }



  @media only screen and (max-width: 1000px) {

    .gallery-options {
      margin-top: 6vh;
    }

    select {
      font-size: 2.3vw;
      margin-right: 2vw;
    }

    label {
      font-size: 2.3vw;
    }

  }



  @media only screen and (max-width: 600px) {

    .gallery-options {
      margin-top: 2vh;
    }

    select {
      font-size: 4vw;
      margin-right: 10vw;
    }

    label {
      font-size: 4vw;
    }

  }

  @media only screen and (max-width: 400px) {

    .gallery-options {
      margin-top: 2vh;
    }

    select {
      font-size: 4.8vw;
      margin-right: 10vw;
    }

    label {
      font-size: 4.8vw;
    }

  }
</style>