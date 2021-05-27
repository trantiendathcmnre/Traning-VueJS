import api from '../plugins/axios';

function fetchCategory() {
  return api.get('/category');
}

export default { fetchCategory };
