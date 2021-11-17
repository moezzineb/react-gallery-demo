import { createApi } from "unsplash-js";
import config from "../constants/Config";

const unsplash = createApi({
  accessKey: config.API_KEY,
});

export default class unsplashService {
  static getAPIServiceInstance() {
    if (unsplashService.classInstance === null) {
      unsplashService.classInstance = new unsplashService();
    }
    return this.classInstance;
  }

  async getPhotosByQuery(query, page_num = 1, pic_per_page = 10) {
    try {
      unsplash.search
        .getPhotos({
          query: query,
          page: page_num,
          perPage: pic_per_page,
        })
        .then((json) => {
          return json.response.results;
        });
    } catch (error) {
      console.error(error);
    }
  }
}

// const unsplashService = {};

// unsplashService.getRandomPhotos = async (pic_per_page) => {
//     let result = null;
//     await unsplash.photos.getRandom({ count: pic_per_page }).then((json) => {
//       // console.log(json.response);
//       // dispatch({ type: "SET_PICS", payload: json.response });
//       result = json.response;
//     });

//     return result;
// };

// unsplashService.getPhotosByQuery = (query, page_num = 1, pic_per_page = null) => {
//   let result = null;
//     unsplash.search
//       .getPhotos({
//         query: query,
//         page: page_num,
//         perPage: pic_per_page,
//       })
//       .then((json) => {
//         result = json.response.results;
//       });

//       return result;
// };

// export default unsplashService;
