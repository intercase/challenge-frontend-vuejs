import api from '../../../api';

export default {
  search({ commit }, page = 1) {
    api.get(`/media/movie/search/${page}`)
      .then((response) => {
        commit('setMoviesData', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
