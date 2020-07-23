<template>
  <div class="row">
    <div
      class="col-12 col-md-4 col-xl-3 mb-4"
      v-for="(serie, index) in series"
      :key="index"
    >
      <div class="card">
        <img
          class="card-img-top img-fluid"
          :src="serie.poster_path"
          alt="Card image cap"
          style="height: 200px"
        >
        <div class="card-body">
          <h5 class="card-title strip-text">
            {{ serie.title }}
          </h5>
          <p class="card-subtitle mb-2 text-muted">
            Votos: {{ serie.vote_count }}
          </p>
          <p class="card-text">
            Média:
            {{ serie.vote_average }}
          </p>
          <router-link :to="`/saber-mais/serie/${serie.id}`" class="card-link">
            Saber mais
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SerieCard',
  props: {
    series: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.strip-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
}
</style>
