<template>
  <v-app>
   <v-app-bar
      height="350px"
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
        <template #img:img="{ props }">
            <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
        </template>

        <v-app-bar-title>Search Google Books</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-form ref="form" @submit.prevent="googleBooks">
            <v-text-field
                v-model="searchInput"
                placeholder="Search"
                prepend-inner-icon="mdi-magnify"
                class="search mt-1"
                filled
                dense
            ></v-text-field>
        </v-form>
    </v-app-bar>
    <div id="search-results">
        <ul v-for="searchResult in searchResults" :key="searchResult.id">
            <li><span>Title:</span> {{searchResult.volumeInfo.title}}</li>
            <li><span>Authors:</span> {{searchResult.volumeInfo.authors}}</li>
            <li><span>Description:</span> {{searchResult.volumeInfo.description}}</li>
            <li><span>Categories:</span> {{searchResult.volumeInfo.categories}}</li>
            <li><span>Publisher:</span> {{searchResult.volumeInfo.publisher}}</li>
            <li><span>Pubilished Date:</span> {{searchResult.volumeInfo.publishedDate}}</li>
            <li><span>Preview link:</span> <a :href="searchResult.volumeInfo.previewLink" target="_blank">{{searchResult.volumeInfo.previewLink}}</a></li>
            <li><a :href="searchResult.volumeInfo.previewLink" target="_blank"><img :src="searchResult.volumeInfo.imageLinks.smallThumbnail" alt="cover image"></a></li>
        </ul>
    </div><!-- /#search-results -->
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchInput: '',
      searchResults: ''
    };
  },
  methods: {
    googleBooks() {
      axios.get("http://localhost:3000/search", {
        params: {
          searchInput: this.searchInput
        }
      })
      .then(response => {
        console.log(response.data);
        this.searchResults = response.data.items;
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
}
</script>

<style>
    .v-application--wrap{min-height:unset!important}

    .v-sheet{position:relative!important}

    .v-toolbar__content {
        width: 1320px;
        margin: 0 auto;
        max-width: 100%;
        display: block!important
    }

    .v-toolbar__title{
        margin:119px 0 30px
    }

    .v-app-bar-title__content {
        width: 100% !important;
    }

    .search {
        max-width:600px!important;
    }

    .search .v-input__slot::before{
        border-color:transparent!important
    }

    .search .v-input__slot::after{
        display:none
    }

    .search .v-input__slot input::placeholder{color:#fff!important;opacity:1}

    .search .v-input__slot {
    border: 1px solid #fff;
    border-radius: 25px !important;
    height: 50px;
    }

    .search .v-icon {
    display: no;
    margin-top: 8px;
    }

    #search-results {
    width: 1320px;
    margin: 30px auto 0;
    max-width: 100%;
    padding: 0 15px;
    }

    #search-results ul {
    padding: 30px 0;
    border-bottom: 1px solid #000;
    list-style: none;
    }

    #search-results ul:first-of-type {
        padding-top: 0;
    }

    #search-results ul:last-of-type {
        border-bottom: 0;
    }

    #search-results ul li {
        padding: 15px 0;
    }

    #search-results ul li span{
    font-weight:500;
    }
</style>
