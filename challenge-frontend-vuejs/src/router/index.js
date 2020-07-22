import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

// import Cards from '../components/Cards.vue';
import Full from '../components/Full.vue';
import Search from '../views/Search.vue';
import SearchMovies from '../views/SearchMovies.vue';
import SearchTv from '../views/SearchTv.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Full',
    component: Full,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/pesquisar/',
        name: 'Search',
        component: Search,
        children: [
          {
            path: 'filmes',
            name: 'Movies',
            component: SearchMovies,
          },
          {
            path: 'series',
            name: 'TV',
            component: SearchTv,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
