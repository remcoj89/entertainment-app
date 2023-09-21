import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import TvSeriesView from '../views/TvSeriesView.vue'
import BookmarkView from '../views/BookmarkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MovieView
    },
    {
      path: '/tv-series',
      name: 'tv-series',
      component: TvSeriesView
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: BookmarkView
    }
  ]
})

export default router
