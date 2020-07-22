import api from '../../../api';

export default {
  search({ commit }, page = 1) {
    api.get(`/media/tv/search/${page}`)
      .then((response) => {
        commit('setTvShowsData', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
