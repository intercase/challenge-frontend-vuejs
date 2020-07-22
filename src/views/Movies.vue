<template>
  <section class="py-5" v-if="!isLoading">
    <div class="container mb-4 py-6">
      <div class="row">
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
    </div>
  </section>
  <app-loading :active.sync="isLoading" :is-full-page="true" :color="'#ff6d40'" v-else />
</template>
<script>
import api from "../services/api";
import appCard from "../components/_card";
import appLoading from "vue-loading-overlay";
import appButton from "../components/_buttonMore";
export default {
  components: {
    appCard,
    appLoading,
    appButton
  },
  data() {
    return {
      page: 1,
      movies: [],
      isLoading: true
    };
  },
  mounted() {
    this.fetchInformation();
  },
  methods: {
    async fetchInformation() {
      try {
        const response = await api.getGeneric("movie", this.page);
        response.data.forEach(data => this.movies.push(data));
        this.isLoading = !this.isLoading;
      } catch (e) {
        console.log(e);
      }
    }
  },
  watch: {
    async page() {
      const response = await api.getGeneric("movie", this.page);
      response.data.forEach(data => this.movies.push(data));
    }
  }
};
</script>