<template>
  <Movies />
</template>

<script>
import { defineComponent } from 'vue' // Import defineComponent from Vue
import Movies from '../components/MovieComponents/Movies.vue'

export default defineComponent({
  components: {
    Movies
  }
})
</script>
