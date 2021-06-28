import {apiConfig} from "./config";

export function register(email, password, name) {
  const url = apiConfig.api + '/signup';
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password, name})
  }).then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

export function login(email, password) {
  const url = apiConfig.api + '/signin';

  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password})
  }).then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function checkToken(token) {
  const url = apiConfig.api + '/users/me';
  return fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
  }).then((res) => {
    if(res.ok) {
      const result = res.json();
      return result;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function editProfile(name, email, token) {
  const url = apiConfig.api + '/users/me';
  return fetch(url, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify({email, name})
  }).then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function getSavedMovie(token) {
  const url = apiConfig.api + '/movies';
  return fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
  }).then((res) => {
    if(res.ok) {
      const result = res.json();
      return result;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function addSavedMovie(token, movie) {
  const url = apiConfig.api + '/movies';
  const data = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: apiConfig.externalUrl + movie.image.url,
    trailer: movie.trailerLink,
    thumbnail: apiConfig.externalUrl + movie.image.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then((res) => {
    if(res.ok) {
      const result = res.json();
      return result;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function removeSavedMovie(token, id) {
  const url = apiConfig.api + '/movies/' + id;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
  }).then((res) => {
    if(res.ok) {
      const result = res.json();
      return result;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}
