<template>
  <div class="row">
    <div
      class="col-12 col-md-4 col-xl-3 mb-4"
      v-for="(movie, index) in movies"
      :key="index"
    >
      <div class="card">
        <img
          class="card-img-top img-fluid"
          :src="movie.poster_path"
          height="50px"
          alt="Card image cap"
        >
        <div class="card-body">
          <h5 class="card-title strip-text">
            {{ movie.title }}
          </h5>
          <p class="card-subtitle mb-2 text-muted">
            Votos: {{ movie.vote_count }}
          </p>
          <p class="card-text">
            Data de lançamento:
            {{ movie.release_date }}
          </p>
          <a href="#" class="card-link">Saber mais</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie-card',
  props: {
    movies: {
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
