<template>
  <div class="container">
    <h2 class="heading">Trending</h2>
    <div
      class="menu"
      ref="slider"
      @mousedown="handleMouseDown"
      @mouseleave="handleMouseLeave"
      @mouseup="handleMouseUp"
      @mousemove="handleMouseMove"
    >
      <div class="menu--wrapper" v-for="(item, index) in trending" :key="index">
        <div
          class="menu--card"
          :style="{ backgroundImage: `url('${item.thumbnail.trending.large}')` }"
        >
          <div class="card-info">
            <p>
              {{ item.year }} <span>&#8226;</span> {{ item.category }} <span>&#8226;</span>
              {{ item.rating }}
            </p>
            <h2>{{ item.title }}</h2>
          </div>
          <div class="card-bookmark" @click="item.isBookmarked = !item.isBookmarked">
            <IconBookmarkEmpty v-show="!item.isBookmarked" />
            <IconBookmarkFull v-show="item.isBookmarked" />
          </div>
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
      trendingLength: null,
      dataStore: useDataStore(),
      startX: 0,
      scrollLeft: 0
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
      this.showTrending()
    },
    showTrending() {
      this.dataBase.forEach((item) => {
        if (item.thumbnail.trending) {
          this.trending.push(item)
          this.trendingLength = this.trending.length
        }
      })
    },
    handleMouseDown(e) {
      this.isDown = true
      this.startX = e.pageX - this.$refs.slider.offsetLeft
      this.scrollLeft = this.$refs.slider.scrollLeft
      this.$refs.slider.style.cursor = 'grabbing';
    },
    handleMouseLeave() {
      this.isDown = false
      this.$refs.slider.style.cursor = 'grab';
    },
    handleMouseUp() {
      this.isDown = false
      this.$refs.slider.style.cursor = 'grab';
    },
    handleMouseMove(e) {
      if (!this.isDown) return // Stop de functie als isDown false is
      e.preventDefault()
      const x = e.pageX - this.$refs.slider.offsetLeft
      const walk = (x - this.startX) * 3
      this.$refs.slider.scrollLeft = this.scrollLeft - walk
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
  display: flex;
  gap: 3%;
  overflow: hidden;

  &--wrapper {
    height: 30vh;
  }
  &--card {
    height: 100%;
    width: 25vw;
    display: flex;
    align-items: end;
    border-radius: 10px;
    position: relative;

    .card-info {
      margin: 5%;
      p {
        @include body-m;
        display: flex;
        gap: 0.8rem;
      }

      h2 {
        @include heading-s;
      }
    }

    .card-bookmark {
      position: absolute;
      top: 1.8rem;
      right: 1.8rem;
      z-index: 1;
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: grey;
      cursor: pointer;
    }
  }
}
</style>
