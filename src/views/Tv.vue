<template>
  <section class="py-5" v-if="!isLoading">
    <div class="container mb-4 py-6">
      <div class="row">
        <div v-for="(tv,index) in series" :key="index" class="col-md-4 col-12 mt-4 d-flex">
          <app-card
            :title="tv.title"
            :text="tv.overview"
            :image="tv.poster_path"
            :popularity="tv.popularity"
            :rate="tv.vote_average"
            @click="$router.push(`series/${tv.id}`)"
          ></app-card>
        </div>
        <app-button @click="page++" />
      </div>
    </div>
  </section>
  <app-loading :active.sync="isLoading" :is-full-page="true" :color="'#ff6d40'" v-else />
</template>
<script>
import api from "../services/api";
import appCard from "../components/_card";
import appLoading from "vue-loading-overlay";
import appButton from "../components/_buttonMore";

export default {
  components: {
    appCard,
    appLoading,
    appButton
  },
  data() {
    return {
      page: 1,
      series: [],
      isLoading: true
    };
  },
  mounted() {
    this.fetchInformation();
  },
  methods: {
    async fetchInformation() {
      try {
        const response = await api.getGeneric("tv", this.page);
        response.data.forEach(data => this.series.push(data));
        this.isLoading = !this.isLoading;
      } catch (e) {
        console.log(e);
      }
    }
  },
  watch: {
    async page() {
      const response = await api.getGeneric("tv", this.page);
      response.data.forEach(data => this.series.push(data));
    }
  }
};
</script>
<style lang="scss">
</style>