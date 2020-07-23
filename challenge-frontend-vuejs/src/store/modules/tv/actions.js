import api from '../../../api';

export default {
  search({ commit }, page = 1) {
    api.get(`/media/tv/search/${page}`)
      .then((response) => {
        commit('setSeriesData', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  searchByGenre({ commit }, fields) {
    api.get(`/media/tv/search/${fields.page}?genre=${fields.genre}&year=${fields.year}`)
      .then((response) => {
        commit('setSeriesData', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  loadGenres({ commit }) {
    api.get('/genres/tv')
      .then((response) => {
        commit('setGenresData', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  loadSeriesDetails({ commit }, id) {
    api.get(`/media/tv/${id}`)
      .then((response) => {
        commit('setSerieDetails', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
