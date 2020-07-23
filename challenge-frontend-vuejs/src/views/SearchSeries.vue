<template>
  <div class="container">
    <h2 class="mt-5 mb-2 font-weight-bold">Séries</h2>
    <div class="row align-items-end">
      <div class="col-12 col-md-6">
        <div>
          <label for="txtYear">Gênero:</label>
          <select
            class="custom-select"
            id="type"
            ref="type"
            aria-label="Opções para fazer a pesquisa"
            v-model="Fields.genre"
            @change="search()"
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
              @keydown.enter="search()"
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
    <CardSeries
      v-if="this.series !== null"
      :series="this.series"
      class="mt-5"
    />
    <Pagination
      v-if="this.series !== null"
      class="my-5"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardSeries from '../components/CardSeries.vue';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Home',
  data() {
    return {
      Fields: {
        page: 1,
        genre: '',
        year: '',
      },
    };
  },
  components: {
    Pagination,
    CardSeries,
  },
  created() {
    this.$store.dispatch('tv/loadGenres');
  },

  computed: {
    ...mapState({
      series: (state) => state.tv.series,
      genres: (state) => state.tv.genres,
    }),
  },
  methods: {
    search() {
      if (this.Fields.genre !== '' || this.Fields.year !== '') {
        this.$store.dispatch('tv/searchByGenre', this.Fields);
      } else {
        this.$store.dispatch('tv/search', this.Fields.page);
      }
    },
  },
};
</script>
