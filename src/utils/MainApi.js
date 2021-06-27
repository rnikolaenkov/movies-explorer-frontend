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
