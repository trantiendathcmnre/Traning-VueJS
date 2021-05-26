import api from '../plugins/axios';
import { saveToken } from '../common/jwt.service';

const state = () => ({
  curUser: {},
  isAuthenticated: false
});

const getters = {
  curUser: state => state.curUser,
  isAuth: state => state.isAuthenticated
};

const mutations = {
  setAuthState: (state, isAuth) => (state.isAuthenticated = isAuth)
};

const actions = {
  // sign in user and save token
  signin({ commit }, user) {
    api
      .post('/users/signin', user)
      .then(res => {
        console.log(res.data.message);
        saveToken(res.data.token);
        commit('setAuthState', true);
      })
      .catch(error => console.log('Sign in ERROR --- ' + error));
  },
  // SIGN UP user and save token
  signup({ commit }, user) {
    api
      .post('/users/signin', user)
      .then(res => {
        console.log(res.data.message);
        saveToken(res.data.token);
        commit('setAuthState', true);
      })
      .catch(error => console.log('Sign up ERROR --- ' + error));
  }
};

export default { namespaced: true, state, getters, actions, mutations };
