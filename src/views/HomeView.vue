<template>
  <div class="container">
    <h2 class="heading">Trending</h2>
    
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useDataStore } from '../stores/data'
export default {
  name: 'homme-view',
  data() {
   return {
    dataBase: [],
    dataStore: useDataStore(),
   }
  },
   computed: {
    ...mapState(useDataStore, ['jsonData'])
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        await this.dataStore.fetchData();
        this.dataBase = this.jsonData;
      } catch (error) {
        console.error(error);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.container {
  .heading {
    @include heading-l;
  }
}
</style>
