import api from '../plugins/axios';

function signIn(user) {
  return api.post('/users/signin', user);
}

function signUp(user) {
  return api.post('/users/signup', user);
}

export default { signIn, signUp };
