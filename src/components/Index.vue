<template>
  <div id="Index">
    <div class="row p-3">
      <h1 class="text-light font-weight-bold">Browse Music</h1>
      <div class="container p-4">
        <div class="row">
          <div class="col-md-2 col-sm-12 my-2 music-cover" v-for="(value) in music_genres">
            <router-link :to="'/' + value.name">
              <img :src="value.image" alt="">
              <span class="music-text p-5 font-weight-bold text-white">{{value.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data:() => ({
    music_genres:[
      {
        name: "Hip Hop",
        image: "https://i.pinimg.com/736x/cb/35/fe/cb35feec951c38fbc759241a622acec6--album-cover-design-electronic-music.jpg"
      },
      {
        name: "Electronic",
        image: "https://i.pinimg.com/736x/cb/35/fe/cb35feec951c38fbc759241a622acec6--album-cover-design-electronic-music.jpg"
      },
      {
        name: "Rock",
        image: "https://i.pinimg.com/736x/cb/35/fe/cb35feec951c38fbc759241a622acec6--album-cover-design-electronic-music.jpg"
      }
    ]

  }),
}
</script>

<style scoped>
  .music-cover img{
    height: 150px;
    opacity: .8;
    width: auto;
    border:1px solid black;
  }
  .col-2.music-cover:hover {
      transform: scale(1.05);
      cursor: pointer;
  }
  .music-text{
    /* display: none; */
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* opacity: .75; */
    font-size: 18px;
  }
</style>
