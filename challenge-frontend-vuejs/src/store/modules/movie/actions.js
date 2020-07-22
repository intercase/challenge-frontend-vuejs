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
  searchByGenre({ commit }, fields) {
    api.get(`/media/movie/search/${fields.page}?genre=${fields.genre}&year=${fields.year}`)
      .then((response) => {
        commit('setMoviesData', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  loadGenres({ commit }) {
    api.get('/genres/movie')
      .then((response) => {
        commit('setGenresData', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
