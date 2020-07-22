<template>
  <div class="container">
    <h2 class="mt-5 mb-2 font-weight-bold">Series</h2>
    <div class="row align-items-end">
      <div class="col-12 col-md-6">
        <div>
          <label for="txtYear">Gênero desejado:</label>
          <select
            class="custom-select"
            id="type"
            ref="type"
            aria-label="Opções para fazer a pesquisa"
            @change="setSelectedOption()"
          >
            <option selected>Selecione um gênero...</option>
            <option value="1">Filme</option>
            <option value="2">Programa de TV</option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div>
          <label for="txtYear">Ano:</label>
          <div class="input-group">
            <input
              id="txtYear"
              type="text"
              class="form-control"
              placeholder="Digite o ano desejado"
              aria-label="Campo para digitar o ano desejado"
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="input-group-append">
          <button
            class="btn btn-dark"
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
  components: {
    Pagination,
    CardMovie,
  },
  computed: {
    ...mapState({
      movies: (state) => state.movie.movies,
    }),
  },
  methods: {
    search() {
      this.$store.dispatch('movie/search');
    },
  },
};
</script>
