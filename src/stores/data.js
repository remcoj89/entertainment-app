import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    jsonData: [],
    trending: [],
    movies: [],
    tvSeries: [],
    bookmarked: [],
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
      this.showBookmarked()
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
        if (item.category === 'TV Series') {
          this.tvSeries.push(item)
        }
      })
    },
    showBookmarked() {
      this.jsonData.forEach((item) => {
        if (item.isBookmarked) {
          this.bookmarked.push(item)
        }
      })
    },
    toggleBookmark() {
      this.bookmarkActive = !this.bookmarkActive
    }
  }
})
