<template>
  <v-app>
    <div class="container">
        <div id="v-app-bar-title-form">
            <div id="v-app-bar-title-form-inner">
                <h2>Search Google Books</h2>
                <v-form ref="form" @submit.prevent="googleBooks">
                    <v-text-field
                        v-model="searchInput"
                        placeholder="Start your search"
                        prepend-inner-icon="mdi-magnify"
                        class="search mt-1"
                        filled
                        dense
                    ></v-text-field>
                </v-form>
            </div>
        </div>
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
    </div>
    <div id="copyright">© 2021 <a href="http://kevinnowalski.com/" target="_blank">Kevin Nowalski</a></div>
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
      axios.get("https://tranquil-ridge-89003.herokuapp.com/googlebooks", {
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

<style type="text/css">

    body {
        position:relative
    }

    .container {
        width: 1320px;
        margin: 30px auto 0;
        max-width: 100%;
        padding: 0 15px;
    }

    #v-app-bar-title-form {
        min-height:380px;
        display:flex;
        justify-content:center;
        align-items:center
    }

    #v-app-bar-title-form-inner h2{font-size:40px;text-align:center;margin-bottom:25px}

    .theme--dark.v-application {
        background: #202945
    }

    .theme--dark.v-icon{color:#fff!important}

    .v-application .primary--text{caret-color:#fff!important}

    .search {
        width:600px!important;
        margin:4px auto 0 !important
    }

    .search .v-input__slot::before{
        border-color:transparent!important
    }

    .search .v-input__slot::after {
        display:none
    }

    .search .v-input__slot input::placeholder {color:#fff!important;opacity:1}

    .search .v-input__slot {
        border: 1px solid #fff;
        border-radius: 25px !important;
        height: 50px;
    }

    .search .v-icon {
        display: none;
        margin-top: 8px;
    }

    #search-results {
        margin-top: -95px;
        margin-bottom: 30px
    }

    #search-results ul {
        padding: 30px 0;
        border-bottom: 1px solid #fff;
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

    #search-results ul li span {
    font-weight:500;
    }

    #copyright {position:absolute;left:15px;bottom:15px}

    #copyright a {
        color:#fff;text-decoration:none
    }

    #copyright a:hover {
        text-decoration:underline
    }

    @media only screen and (max-width:991px) {
        .search{max-width:600px!important}
    }

    @media only screen and (max-width:767px) {
        #v-app-bar-title-form-inner h2{font-size:25px;margin-bottom:15px}
        .search{max-width:280px!important}
        
    }
    
</style>
