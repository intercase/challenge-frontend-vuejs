<template>
  <div class="container">
    <div class="text-center mt-5">
      <BackButton :toPath="'/'" class="my-4" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import BackButton from '../../components/BackButton.vue';

export default {
  name: 'Search',
  components: {
    BackButton,
  },
};
</script>
