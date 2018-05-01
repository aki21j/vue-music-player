const apiHost = process.env.API_URL;
const version = 'v3';

//Mixing host and verion to final api url
const apiURL = apiHost + '/' + version;
const apiKey = 'AIzaSyDbyzOvRqUkDg7lUIXstmPQhEee9lErzbw';

export const genresApi = {
  // getPlaylist: () => apiURL + '/search?part=id&q=electronic_music&type=video&key=' + apiKey , //POST
  getPlaylist: (data) => apiURL + '/search?maxResults=20&relevanceLanguage=en&part=snippet&q=' + data + '&type=playlist&key=' + apiKey , //POST
  getAllVideos: (data) => apiURL + '/playlistItems?part=snippet&maxResults=10&playlistId=' + data + '&key=' + apiKey , //POST
  // playMusic: (data) => apiURL +   
}

export const searchApi = {
  searchMusic: (data) => apiURL + '/search?maxResults=20&relevanceLanguage=en&part=snippet&q=' + data + '&type=video&key=' + apiKey , //POST
  
}