<template>
<div>
  <div class="container">
    <span class="text-center">
      <h1 class="mt-5 font-weight-bold">Bem vindo!</h1>
      <p>Encontre os melhores filmes e séries em um só lugar &#x1F600;</p>
    </span>
    <div class="row mt-3">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title font-weight-bold">Séries &#x1F39E;</h5>
            <p class="card-text">
              Encontre as melhores séries de todos os tempos, com base no
              <strong>seu gosto</strong> e ano!
            </p>
            <router-link to="/pesquisar/series" class="btn btn-warning">
              Pesquisar Séries
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-sm-6 mt-2 mt-md-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title font-weight-bold">Filmes &#x1F3A5;</h5>
            <p class="card-text">
              Que tal achar milhares de filmes renomados, com base no
              <strong>seu gosto</strong> e ano?
            </p>
            <router-link to="/pesquisar/filmes" class="btn btn-warning">
              Pesquisar Filmes
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
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
