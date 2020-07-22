<template>
  <section class="py-5" v-if="!isLoading">
    <app-details :info="details"></app-details>
  </section>
  <app-loading :active.sync="isLoading" :is-full-page="true" :color="'#ff6d40'" v-else />
</template>

<script>
import api from "../services/api";
import appDetails from "../components/_details";
import appLoading from "vue-loading-overlay";

export default {
  components: {
    appDetails,
    appLoading
  },
  data() {
    return {
      details: {},
      isLoading: true
    };
  },
  async mounted() {
    let response = {};
    this.$route.name.includes("movies")
      ? (response = await api.getDetailsGeneric("movie", this.$route.params.id))
      : (response = await api.getDetailsGeneric("tv", this.$route.params.id));
    this.details = response.data;
    this.isLoading = !this.isLoading;
  }
};
</script>