import {apiConfig} from "./config";

function getMovies() {
  return fetch(apiConfig.externalApi)
    .then((res) => {
      if(res.ok) {
        const result = res.json();
        return result;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export default getMovies;
