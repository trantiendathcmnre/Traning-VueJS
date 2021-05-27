import api from '../plugins/axios';

function signin(user) {
  return api.post('/users/signin', user);
}

function signup(user) {
  return api.post('/users/signup', user);
}

export default { signin, signup };
