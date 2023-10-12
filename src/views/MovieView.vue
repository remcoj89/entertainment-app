<template>
  <div>Movie View</div>
  <MovieTrending />
</template>

<script>
import MovieTrending from '../components/MovieComponents/MovieTrending.vue';
export default {
  name: 'movie-view',
  components: {
    MovieTrending,
  }
}
</script>
