import { genresApi } from './index'
import axios from 'axios'
import cookies from 'vue-cookies'

// axios.defaults.headers.common['Authorization'] = 'X-Token ' + cookies.get('token');

export default {

  getPlaylist(data){
    return axios.get(genresApi.getPlaylist(data))
        .then(response => response)
        .catch(error => error)
  },
  getAllVideos(data){
    return axios.get(genresApi.getAllVideos(data))
        .then(response => response)
        .catch(error => error)
  },
}