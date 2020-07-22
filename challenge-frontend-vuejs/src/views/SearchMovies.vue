<template>
  <div class="container">
    <h2 class="mt-5 mb-2 font-weight-bold">Filmes</h2>
    <div class="row align-items-end">
      <div class="col-12 col-md-6">
        <div>
          <label for="txtYear">Gênero desejado:</label>
          <select
            class="custom-select"
            id="type"
            ref="type"
            aria-label="Opções para fazer a pesquisa"
            v-model="Fields.genre"
          >
            <option selected value="">Selecione um gênero...</option>
            <option
              v-for="(genre, index) in genres"
              :key="index"
              :value="genre.id"
            >
              {{genre.name}}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-4 mt-2 mt-md-0">
        <div>
          <label for="txtYear">Ano:</label>
          <div class="input-group">
            <input
              id="txtYear"
              v-model="Fields.year"
              type="text"
              class="form-control"
              placeholder="Digite o ano desejado"
              aria-label="Campo para digitar o ano desejado"
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2 mt-2 mt-md-0">
        <div class="input-group-append">
          <button
            class="btn btn-warning"
            type="button"
            @click="search()"
          >
            Pesquisar
          </button>
        </div>
      </div>
    </div>
    <CardMovie
      v-if="this.movies !== null"
      :movies="this.movies"
      class="mt-5"
    />
    <Pagination
      v-if="this.movies !== null"
      class="my-5"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardMovie from '../components/CardMovie.vue';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Home',
  data() {
    return {
      Fields: {
        page: 1,
        genre: null,
        year: null,
      },
    };
  },
  components: {
    Pagination,
    CardMovie,
  },
  created() {
    this.$store.dispatch('movie/loadGenres');
  },

  computed: {
    ...mapState({
      movies: (state) => state.movie.movies,
      genres: (state) => state.movie.genres,
    }),
  },
  methods: {
    search() {
      if (this.Fields.genre !== null || this.Fields.year !== null) {
        this.$store.dispatch('movie/searchByGenre', this.Fields);
      } else {
        this.$store.dispatch('movie/search', this.Fields);
      }
    },
  },
};
</script>
