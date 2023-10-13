import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    jsonData: [],
    trending: [],
    movies: [],
    tvSeries: [],
    bookmarkActive: false
  }),
  actions: {
    async fetchData() {
      try {
        const response = await fetch('src/data/data.json')
        this.jsonData = await response.json()
      } catch (error) {
        console.log('Error fetching data', error)
      }
      this.showMovies()
      this.showTrending()
      this.showTvSeries()
    },
    showTrending() {
      this.jsonData.forEach((item) => {
        if (item.thumbnail.trending) {
          this.trending.push(item)
          this.trendingLength = this.trending.length
        }
      })
    },
    showMovies() {
      this.jsonData.forEach((item) => {
        if (item.category === 'Movie') {
          this.movies.push(item)
        }
      })
    },
    showTvSeries() {
      this.jsonData.forEach((item) => {
        if (item.category === 'Tv Series') {
          this.tvSeries.push(item)
        }
      })
    },
    toggleBookmark() {
      this.bookmarkActive = !this.bookmarkActive
    }
  }
})
