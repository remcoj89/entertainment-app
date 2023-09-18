<template>
  <div class="container">
    <h2 class="heading">Trending</h2>
   <button @click="showTrending">trending</button>

    <div class="card-container">
      <BaseCard mode="card" v-for="item in trending" :key="item.year">
        <ul class="card">
        <li class="card__list">{{ item.year }}</li>
        <li class="card__list">{{ item.category }}</li>
        <li class="card__list">{{ item.rating }}</li>
        </ul>
      </BaseCard>

    </div>
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
      trending: [],
      dataStore: useDataStore()
    }
  },
  computed: {
    ...mapState(useDataStore, ['jsonData'])
  },

  mounted() {
    this.fetchData()

  },
  methods: {
    async fetchData() {
      try {
        await this.dataStore.fetchData()
        this.dataBase = this.jsonData
      } catch (error) {
        console.error(error)
      }
    },
    showTrending(){
      // loop door de dataBase array
      this.dataBase.forEach((item) => {
        if(item.thumbnail.trending) {
          this.trending.push(item)
        }
      })
      // seleceteer de items met thumpnail.trending
      // push de items.thumpnail.trenind in de trending array
      // show trending array
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.container {
  .heading {
    @include heading-l;
    display: block;
  }

  .card {
  padding: 1.5rem;
  background-color: grey;

  &__list {
    padding: 1.5rem;
    @include body-m;
  }
}
  
}
</style>
