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
  name: 'Full',
  componentes: {
    Header,
    Footer,
  },
};
</script>
