<template>
  <section class="py-5">
    <div class="container mb-4 py-6">
      <app-filters
        :genres="genre"
        @input-select="filter.genre = $event"
        @input="filter.year = $event"
      />
      <div class="row" v-if="!isLoading">
        <div v-for="(movie,index) in movies" :key="index" class="col-md-4 col-12 mt-4 d-flex">
          <app-card
            :title="movie.title"
            :text="movie.overview"
            :image="movie.poster_path"
            :date="movie.release_date"
            :popularity="movie.popularity"
            :rate="movie.vote_average"
            @click="$router.push(`movies/${movie.id}`)"
          ></app-card>
        </div>
        <app-button @click="page++" />
      </div>
      <app-loading :active.sync="isLoading" :is-full-page="true" :color="'#ff6d40'" v-else />
    </div>
  </section>
</template>
<script>
import api from "../services/api";
import appCard from "../components/_card";
import appLoading from "vue-loading-overlay";
import appButton from "../components/_buttonMore";
import appFilters from "../components/_filters";
export default {
  components: {
    appCard,
    appLoading,
    appButton,
    appFilters
  },
  data() {
    return {
      page: 1,
      movies: [],
      isLoading: true,
      genre: [],
      filter: {
        genre: null,
        year: null
      }
    };
  },
  mounted() {
    this.fetchInformation();
  },
  methods: {
    async fetchInformation() {
      try {
        let response = await api.getGeneric("movie", this.page, this.filter);
        this.movies = response.data;

        response = await api.getGenre("movie");
        response.data.forEach(data => this.genre.push(data));
        this.isLoading = false;
      } catch (e) {
        console.log(e);
      }
    }
  },
  watch: {
    async page() {
      const response = await api.getGeneric("movie", this.page, this.filter);
      response.data.forEach(data => this.movies.push(data));
    },
    "filter.genre"() {
      this.isLoading = true;
      this.fetchInformation();
    },
    "filter.year"() {
      this.isLoading = true;
      if (this.filter.year === "") this.filter.year = null;
      this.fetchInformation();
    }
  }
};
</script>