import { saveToken } from '../common/jwt.service';
import services from '../services/auth';

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
  signInAction: async ({ commit }, user) => {
    try {
      const { data } = await services.signin(user);

      if (data) {
        saveToken(data.token);
        commit('setAuthState', true);
      }
    } catch (error) {
      console.log('Sign in ERROR --- ' + error);
      throw new Error(error.response.data.message)
    }
  },

  // SIGN UP user and save token
  signUpAction: async ({ commit }, user) => {
    try {
      const { data } = await services.signup(user);

      if (data) {
        saveToken(data.token);
        commit('setAuthState', true);
      }
    } catch (error) {
      console.log('Sign up ERROR --- ' + error);
      throw new Error(error.response.data.message)
    }
  }
};

export default { namespaced: true, state, getters, actions, mutations };
