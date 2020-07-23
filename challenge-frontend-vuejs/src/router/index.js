import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

// import Cards from '../components/Cards.vue';
import Full from '../components/Full.vue';
import Search from '../views/Search/Search.vue';
import SearchMovies from '../views/Search/SearchMovies.vue';
import SearchTv from '../views/Search/SearchSeries.vue';
import KnowMore from '../views/KnowMore/KnowMore.vue';
import KnowMoreMovies from '../views/KnowMore/KnowMoreMovies.vue';
import KnowMoreSeries from '../views/KnowMore/KnowMoreSeries.vue';

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
      {
        path: '/saber-mais/',
        name: 'KnowMore',
        component: KnowMore,
        children: [
          {
            path: 'filme/:id',
            name: 'KnowMoreMovies',
            component: KnowMoreMovies,
            props: true,
          },
          {
            path: 'serie/:id',
            name: 'KnowMoreSeries',
            component: KnowMoreSeries,
            props: true,
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
