<template>
  <div id="app">
    <Header/>
      <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  componentes: {
    Header,
    Footer,
  },
};
</script>
