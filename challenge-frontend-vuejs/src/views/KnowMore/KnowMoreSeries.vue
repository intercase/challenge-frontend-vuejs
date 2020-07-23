<template>
  <div class="container">
    <div class="text-center mt-5">
      <BackButton :toPath="'/pesquisar/series'" class="mb-2" />
    </div>
    <div class="row my-5">
      <div class="col-12 col-md-5">
        <img
          class="img-fluid"
          :src="serieDetails.poster_path"
          alt="Card image cap"
        >
      </div>
      <div class="col-12 col-md-7">
        <div class="text-center">
          <h1 class="font-weight-bold mt-4 mt-md-0">
            {{ serieDetails.name }}
          </h1>
          <div class="mb-4">
             <span
              class="badge badge-dark mr-1"
              v-for="(genre, index) in serieDetails.genres"
              :key="index"
            >
              {{ genre.name }}
            </span>
          </div>
          <cite>
            <span class="badge badge-pill badge-warning ml-2">
              &#9733; {{ serieDetails.vote_average }}
            </span>
            <span class="badge badge-pill badge-info ml-2">
              {{ serieDetails.status }}
            </span>
          </cite>
        </div>
        <p class="first-letter mt-4">
          {{ serieDetails.overview }}
        </p>
         <span class="badge badge-pill badge-secondary ml-2">
            Popularidade: {{ serieDetails.popularity }}
          </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BackButton from '../../components/BackButton.vue';

export default {
  name: 'KnowMoreSeries',
  props: ['id'],
  components: {
    BackButton,
  },
  computed: {
    ...mapState({
      serieDetails: (state) => state.tv.serieDetails,
    }),
  },
  created() {
    this.$store.dispatch('tv/loadSeriesDetails', this.$props.id);
  },
};
</script>

<style scoped>
.first-letter::first-letter {
  font-size: 2em;
  font-weight: bold;
}
</style>
