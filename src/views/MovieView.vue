<template>
  <MovieTrending />
</template>

<script>
import { defineComponent } from 'vue' // Import defineComponent from Vue
import MovieTrending from '../components/MovieComponents/MovieTrending.vue'

export default defineComponent({
  components: {
    MovieTrending
  }
})
</script>
