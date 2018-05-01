import { searchApi } from './index'
import axios from 'axios'
import cookies from 'vue-cookies'

// axios.defaults.headers.common['Authorization'] = 'X-Token ' + cookies.get('token');

export default {

  searchMusic(data){
    return axios.get(searchApi.searchMusic(data))
        .then(response => response)
        .catch(error => error)
  },
}