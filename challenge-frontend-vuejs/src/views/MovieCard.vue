<template>
  <div class="row">
    <div
      class="col-12 col-md-3"
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
          <h5 class="card-title">{{ movie.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Popularidade: {{ movie.popularity }}</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
  created() {
    console.log(this.$props.movies);
  },
};
</script>
