<template>
  <div class="container text-center">
    <h1 class="mb-5">Bem vindo!</h1>
    <p>Selecione o tipo de pesquisa que você quer realizar:</p>
    <div class="input-group">
      <select
        class="custom-select"
        id="type"
        aria-label="Opções para fazer a pesquisa"
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
  </div>
</template>

<script>
import 'vuex';

export default {
  name: 'Home',
  methods: {
    search() {
      this.$store.dispatch('movie/search', 'Fabrício');
    },
  },
};
</script>
