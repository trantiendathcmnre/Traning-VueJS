const ID_TOKEN_KEY = 'id_token';

export const getToken = () => window.localStorage.getItem(ID_TOKEN_KEY);

export const saveToken = token =>
  window.localStorage.setItem(ID_TOKEN_KEY, token);
