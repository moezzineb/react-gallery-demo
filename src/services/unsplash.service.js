import axios from 'axios';
import { createApi } from 'unsplash-js';
import config from '../constants/Config';

const unsplash = createApi({
  accessKey: config.API_KEY
});

class unsplashService {
  async hello() {
    try {
      axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async getPhotosByQuery(query, page_num = 1, pic_per_page = 10) {
    try {
      unsplash.search
        .getPhotos({
          query: query,
          page: page_num,
          perPage: pic_per_page
        })
        .then((json) => {
          return json.response.results;
        });
    } catch (error) {
      console.error(error);
    }
  }
}

const unsplashServ = new unsplashService();

export default unsplashServ;
