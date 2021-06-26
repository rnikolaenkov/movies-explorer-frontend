import config from './config';

function register(email, password, name) {
  const url = config.api + '/signup';
  console.log(url);
}

module.exports = {
  register,
}
