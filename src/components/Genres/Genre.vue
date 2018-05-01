<template>
  <div id="genre">
   <div class="row p-3">
      <h1 class="text-light font-weight-bold col-6" v-text="$route.params.name"></h1>
      <span class="col-6 text-right">
        <button type="button" class="btn btn-sm btn-success text-light m-3" @click="playAll">
          <i class="fas fa-play"></i>
          Play All
        </button>
      </span>
      <!-- <iframe width="300" height="200" id="playah"
        src=''>
      </iframe> -->
     <!-- <div id="player"></div> -->
      <div class="container p-4">
        <div class="row">
          <table class="table">
            <tbody>
              <tr class="text-white py-5" v-for="(value) in all_songs" :key="value.snippet.resourceId.videoId" @click="playSong(value.snippet.resourceId.videoId)">
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
  </div>
</template>

<script>
import genres from '../../api/genres'
export default {
  name:"genre",
  // props:['video-id'],
  data:() => ({
    playlist:[],
    all_songs:[],
    videoID:'',
  }),
  created(){
    this.getPlaylist();
  },
  methods:{
    getPlaylist(){
      const vm = this;
      const genre_name = 'latest_' + vm.$route.params.name.toLowerCase().replace(" ","_") + '_music'; 
      // console.log(genre_name);
      genres.getPlaylist(genre_name)
        .then(response => {
          // console.log(response.data.items[0]);
          const playlistID = response.data.items[0].id.playlistId;
          vm.getAllVideos(playlistID);
          // console.log(playlistID);
        });
    },
    getAllVideos(playlistID){
      const vm = this;
      genres.getAllVideos(playlistID)
        .then(response => {
          // console.log(response);
          vm.all_songs = response.data.items;
          console.log(vm.all_songs);
          
        })

    },
    playAll(){
      //to-do
      console.log('playall');
    },
    playSong(videoID){
      const vm = this;
      this.videoID = videoID;
      this.$emit('video-id', this.videoID);
      console.log(videoID);
      // for(var key in vm.all_songs){
        // console.log(vm.all_songs[key]);
      // }
      // var player = document.querySelector('#playah');
      // player.setAttribute('src', "https://www.youtube.com/embed/" + videoID + "?autoplay=1&loop=1");
      // let playerTime = player.getCurrentTime();
      // setInterval(function(){
      //   console.log(playerTime);
      // },5000);
    },

  // abc(){

    
  },
  
}
</script>

<style scoped>
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
