<template>
  <div class="container">
    <h2 class="heading">Trending</h2>
    <div class="menu">
      <div class="menu--wrapper">
        <div class="menu--card" v-for="(item, index) in trending" :key="index">
          <ul class="menu--card__list">
            <li>{{ item.year }}</li>
            <li>{{ item.category }}</li>
            <li>{{ item.rating }}</li>
          </ul>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useDataStore } from '../../stores/data'

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
        console.log('json data ', this.jsonData)
      } catch (error) {
        console.error(error)
      }
      this.showTrending()
    },
    showTrending() {
      // loop door de dataBase array
      this.dataBase.forEach((item) => {
        if (item.thumbnail.trending) {
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
  display: flex;
  flex-direction: column;
  width: 100%;
  .heading {
    @include heading-l;
    display: block;
    padding: 3% 0;
  }
}

.menu {
  &--wrapper {
    display: flex;
  }
}
</style>
