export default {
  getTvShowsData({ state }) {
    return state.series;
  },
  getGenresData({ state }) {
    return state.genres;
  },
  getSerieDetails({ state }) {
    return state.serieDetails;
  },
};
