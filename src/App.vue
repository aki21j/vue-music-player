<template>
  <div id="app mt-0">
    <div class="row">
      <div class="col-2 px-0">
        <aside class="navbar flex-column sticky-top navbar-dark bg-dark" id="side-nav">
          <a class="navbar-brand" href="#">Navbar</a>
          <ul class="nav text-uppercase flex-column font-weight-bold">
            <li class="nav-item"><router-link class="nav-link text-light" to="/">Browse</router-link></li>
            <li class="nav-item"><router-link class="nav-link text-light" to="/search">Search</router-link></li>
          </ul>
        </aside>
      </div>
      <div class="col-10 bg-dark">
        <router-view/>
      </div>
    </div>
    <div class="bottom-play">
      <section>
        <div class="text-center">
          <youtube :video-id="videoId" @ready="ready" @playing="playing"  player-width="0" player-height="0" @ended="change"></youtube>
            <div>
              <button type="button" @click="playing()" class="btn btn-sm action-btn mx-1"> 
                <i class="fas fa-play"></i>
              </button>
              <button type="button" @click="pause()" class="btn btn-sm action-btn mx-1">
                <i class="fas fa-pause"></i>
              </button>
              <button type="button" @click="method" class="btn btn-sm action-btn mx-1">
                <i class="fas fa-clock"></i>
              </button>
            </div>
            <div class="slidecontainer">
              <input type="range" min="0" :max="totalTime" value="0" class="slider" id="myRange">
              <!-- <p>Value: <span id="demo"></span></p> -->
            </div>
        </div>

      </section>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Genre from '@/components/Genres/Genre.vue'

Vue.use(VueYouTubeEmbed)

export default {
  name: 'App',
  components: {
    Genre
  },
  data:()=> ({
    videoId:"gOsM-DYAEhY",
    ID: [
      'GKSRyLdjsPA',
      'bHQqvYy5KYo',
    ],
    totalTime :'',
    add: 50,
  }),
    methods: {
    ready (player) {
      this.player = player
    },
    playing (player) {
      // The player is playing a video.
      this.player.playVideo();
      // console.log(this.videoId);
    },
    change () {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = this.ID[1];
      this.totalTime = '';
      this.method();

    },
    stop () {
      this.player.stopVideo()
    },
    pause () {
      this.player.pauseVideo()
    },
    method () {
      // this.videoId = this.$youtube.getIdFromURL(url)
      const vm = this;
      this.totalTime = this.player.getDuration();
      // let currTime = Math.round(this.player.getCurrentTime()/60);
      console.log(this.totalTime);
      var slider = document.getElementById("myRange");
      var output = document.getElementById("demo");
      output.innerHTML = slider.value;

      slider.oninput = function() {
        output.innerHTML = this.value;
        vm.player.seekTo(this.value);
      }
      // console.log(startTime);
    }
  }
}
</script>

<style scoped>
  #side-nav{
    height: 95vh;
    background-color: #333!important;
    z-index: 10;
  }
  .bottom-play{
    background-color: #333!important;
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%; 
    z-index: 11;   
  }
  .slider {
    -webkit-appearance: none;
    width: 50%;
    height: 5px;
    border-radius: 2px;   
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%; 
    background: #4CAF50;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
}
.action-btn{
  border-radius: 50%;
  background: transparent;
  border: 2px solid gray;
  color: white;
}

.action-btn i{
  font-size: 13px;
}

.action-btn:hover{
  color: #333;
  background: #d3d3d3;
  border: 2px solid #333;
} 
ul.nav.text-uppercase.flex-column.font-weight-bold {
    position: fixed;
    top: 100px;
}
</style>
