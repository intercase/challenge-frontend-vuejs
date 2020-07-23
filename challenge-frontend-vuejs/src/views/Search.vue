<template>
  <div class="container">
    <div class="text-center mt-5">
      <BackButton :toPath="'/'" class="mb-2" />
      <h1 class="font-weight-bold">Bora pesquisar!</h1>
      <p>Encontre suas obras favoritas por gênero e/ou ano &#x1F600;</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  components: {
    BackButton,
  },
};
</script>
