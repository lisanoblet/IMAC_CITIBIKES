<template>

  <div class="gallery-options">

    <input id="filter_search_bar_homepage" type="text" :value="search" v-on:input="onSearchChanged"
      placeholder="Search a station in New York" />
    <button v-if="search" class="button_remove_search" @click="cleanSearch">X</button>

  </div>

</template>


<script>
  export default {
    name: 'SearchOptions',
    props: {
      search: String,

    },
    watch: {
      search: function (newSearch) {
        localStorage.setItem("search", newSearch)
      },
    },
    methods: {
      cleanSearch: function () {
        this.$emit('update:search', "")
      },
      onSearchChanged: function (event) {
        this.$emit('update:search', event.target.value)
      },
    }
  }
</script>


<style scoped>
  button {
    cursor: pointer;
    background: rgb(104, 43, 174);
    background: linear-gradient(140deg,
        rgba(104, 43, 174, 1) 0%,
        rgba(149, 0, 255, 1) 80%,
        rgba(198, 117, 255, 1) 100%);
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

  input[type="text"],
  ::placeholder {
    font-family: "Alumni sans", sans-serif;
    font-size: 1.6vw;
    color: rgb(80, 80, 80);
  }

  #filter_search_bar_homepage {
    width: 30vw;
    height: 5vh;
    border-radius: 2vw;
    background-color: rgba(238, 238, 238, 0.863);
    border: 0;
    padding-left: 2vw;
  }

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

  .button_remove_search {
    width: 2vw;
    height: 4vh;
    margin-left: 1vw;
    margin-top: 0.5vh;
    position: absolute;
  }

  @media only screen and (max-width: 1000px) {

    #filter_search_bar_homepage {
      margin-top: 0;
      width: 30vw;
      height: 5vh;
    }

    input[type="text"],
    ::placeholder {
      font-size: 2.3vw;
    }

    .button_remove_search {
      width: 4vw;
    }

  }

  @media only screen and (max-width: 600px) {

    #filter_search_bar_homepage {
      width: 60vw;
      height: 4vh;
    }

    .gallery-options {
      margin-top: 3vh;
    }

    input[type="text"],
    ::placeholder {
      font-size: 4vw;
      color: rgb(80, 80, 80);
    }

    .button_remove_search {
      width: 5vw;
    }

  }

  @media only screen and (max-width: 400px) {

    .gallery-options {
      width: 70vw;
    }

    #filter_search_bar_homepage {
      width: 60vw;
      height: 3vh;
    }

    input[type="text"],
    ::placeholder {
      font-size: 6vw;
      color: rgb(80, 80, 80);
    }

    .button_remove_search {
      width: 5vw;
      margin: auto;
    }

  }
</style>