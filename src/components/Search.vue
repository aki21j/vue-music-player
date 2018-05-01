<template>
  <div id="search">
    <div class="row p-3">
      <h1 class="text-light font-weight-bold col-6">Search</h1>
    </div>
    <div class="row p-3">
      <div class="col-12 form-group">
        <input type="text" id="search-box" placeholder="Search music here" @keydown.enter="search">
      </div>

    </div>

      <div class="container p-4">
        <p class="text-center text-light font-weight-bold">Search Results</p>
        <div class="row">
          <table class="table">
            <tbody>
              <tr v-if="search_results.length > 0" class="text-white py-5" v-for="(value) in search_results" :key="value.id.videoId" @click="playSong(value.id.videoId)">
                <td>
                  <i class="fas fa-play" style="font-size:10px"></i>          
                </td>
                <td>{{ value.snippet.title }}</td>
                <td>duration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>

<script>

import search from '../api/search'

export default {
  name: 'search',
  data:()=>({
    search_text : '',
    search_results: [],

  }),
  methods:{
    search(){
      const vm = this;
      vm.search_text = event.target.value;
      search.searchMusic(vm.search_text)
        .then(response => {
          vm.search_results = response.data.items;
        })
    },
    playSong(videoId){
      console.log(videoId);
    }

  }
}
</script>

<style scoped>
  #search-box{
    background: transparent;
    border: none;
    border-bottom: 2px solid gray;
    color: white;
    width: 85%;
    font-size: 2rem;
  }
  #search-box:focus{
    outline: none;
    border-bottom: 2px solid #fff;
  }
  tr{
    opacity: .7;
    /* border-bottom: 1px solid gray!important; */
    /* border-top: 1px solid gray!important; */
  }
  tr:hover{
    transform: scale(1.01);
    background-color: rgb(126, 126, 121);
    opacity: .85;
    transition: all 0.3s;
    cursor: pointer;
  }
  td{
    border: none;
  }
</style>
