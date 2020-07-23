<template>
  <div class="container">
    <div class="text-center mt-5">
      <BackButton :toPath="'/pesquisar/filmes'" class="mb-2" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import BackButton from '../../components/BackButton.vue';

export default {
  components: {
    BackButton,
  },
};
</script>
