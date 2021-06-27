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
  console.log(url);
}
