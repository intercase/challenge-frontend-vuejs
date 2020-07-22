<template>
  <div class="container py-6">
    <div class="row">
      <div class="col-12">
        <img :src="info.backdrop_path" />
      </div>
      <div class="offset-md-9 offset-8 col-2 mt-4 mb-3">
        <span>
          <i class="fas fa-fire"></i>
          {{info.popularity}}
        </span>
      </div>
      <div class="col-1 mt-4 mb-3 p-0">
        <i class="fas fa-heart"></i>
        {{info.vote_average}}|10
      </div>
      <div class="col-12 d-flex justify-content-center">
        <h1>{{info.title ? info.tittle : info.name}}</h1>
      </div>
      <div class="col-12">
        <p class="overview">{{info.overview}}</p>
      </div>
      <hr class="w-100" />
      <div class="col-12">
        <span class="production">Productions: {{getName(info.production_companies)}}</span>
      </div>
      <div class="col-12">
        <span class="production">Genres: {{getName(info.genres)}}</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
 

  data() {
    return {
      isLoading: true
    };
  },

  props: {
    info: {
      Type: Object
    }
  },


  methods: {
    getName(data) {
      let names = "";
      if (data) {
        names = data.map(response => {
          return response.name;
        });
        return names.toString();
      }
    }
  }
};
</script>
<style lang="scss">
img {
  width: 100%;
}
h1 {
  font-size: 60px;
  font-weight: 800;
}
.production {
  font-size: 10px;
}
.overview {
  font-size: 15px;
}
.fa-fire {
  color: blue;
}
.fa-heart {
  color: red;
}

</style>