<template>
  <div class="container">
    <h1 class="mb-5 text-center">Bem vindo!</h1>
    <p>Selecione o tipo de pesquisa que você quer realizar:</p>
    <div class="input-group">
      <select
        class="custom-select"
        id="type"
        ref="type"
        aria-label="Opções para fazer a pesquisa"
        @change="setSelectedOption()"
      >
        <option selected>Selecione...</option>
        <option value="1">Filme</option>
        <option value="2">Programa de TV</option>
      </select>
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
    <MovieCard class="mt-5" :movies="this.movies" />
    <Pagination />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MovieCard from './MovieCard.vue';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Home',
  data() {
    return {
      selectedOption: null,
    };
  },
  components: {
    MovieCard,
    Pagination,
  },
  computed: {
    ...mapState({
      movies: (state) => state.movie.movies,
    }),
  },
  created() {
    this.$store.dispatch('movie/search');
  },
  methods: {
    search() {
      if (this.selectedOption === 1) {
        this.$store.dispatch('movie/search');
      } else if (this.selectedOption === 2) {
        this.$store.dispatch('tv/search');
      } else {
        alert('Selecione um valor válido');
      }
    },
    setSelectedOption() {
      this.selectedOption = this.$refs.type.value;
    },
  },
};
</script>
