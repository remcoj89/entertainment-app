<template>
  <TvSeries />
</template>

<script>
import { defineComponent } from 'vue' // Import defineComponent from Vue
import TvSeries from '../components/TvSeriesComponents/TvSeries.vue'

export default defineComponent({
  components: {
    TvSeries
  }
})
</script>
