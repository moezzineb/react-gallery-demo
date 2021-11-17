import { createApi } from "unsplash-js";

const config = {
  API_KEY: "80a9631a5e96d6c3981fbdb4dac643833b985babdcd51501dbde9b79bbb84be5",
  unsplash: createApi({
    accessKey:
      "80a9631a5e96d6c3981fbdb4dac643833b985babdcd51501dbde9b79bbb84be5",
  }),
  perPage: 100
};

export default config;