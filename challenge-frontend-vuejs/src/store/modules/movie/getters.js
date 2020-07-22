export default {
  getMoviesData({ state }) {
    return state.movies;
  },
  getGenresData({ state }) {
    return state.genres;
  },
};
