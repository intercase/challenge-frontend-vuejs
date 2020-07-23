<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-12 col-md-5">
        <img
          class="img-fluid"
          :src="movieDetails.poster_path"
          alt="Card image cap"
        >
      </div>
      <div class="col-12 col-md-7">
        <div class="text-center">
          <h1 class="font-weight-bold">{{ movieDetails.title }}</h1>
          <div class="mb-4">
             <span
              class="badge badge-dark mr-1"
              v-for="(genre, index) in movieDetails.genres"
              :key="index"
            >
              {{ genre.name }}
            </span>
          </div>
          <cite>
            <span v-if="movieDetails.tagline !== ''">
              "{{ movieDetails.tagline }}"
            </span>
            <span class="badge badge-pill badge-warning ml-2">
              &#9733; {{ movieDetails.vote_average }}
            </span>
            <span class="badge badge-pill badge-info ml-2">
              {{ movieDetails.status }}
            </span>
          </cite>
        </div>
        <p class="first-letter mt-4">
          {{ movieDetails.overview }}
        </p>
         <span class="badge badge-pill badge-secondary ml-2">
            Popularidade: {{ movieDetails.popularity }}
          </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['id'],
  computed: {
    ...mapState({
      movieDetails: (state) => state.movie.movieDetails,
    }),
  },
  created() {
    this.$store.dispatch('movie/loadMovieDetails', this.$props.id);
  },
};
</script>

<style scoped>
.first-letter::first-letter {
  font-size: 2em;
  font-weight: bold;
}
</style>
