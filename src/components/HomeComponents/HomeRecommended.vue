<template>
  <h2 class="heading">Recommended for you</h2>

  <div class="grid">
    <div class="grid--card" v-for="item in dataBase" :key="item.year">
      <figure class="card-image">
        <img :src="item.thumbnail.regular.medium" alt="" />
        <div class="card-bookmark" @click="item.isBookmarked = !item.isBookmarked">
          <IconBookmarkEmpty v-show="!item.isBookmarked" />
          <IconBookmarkFull v-show="item.isBookmarked" />
        </div>
      </figure>
      <p>
        {{ item.year }} <span>&#8226;</span> {{ item.category }} <span>&#8226;</span>
        {{ item.rating }}
      </p>
      <h2>{{ item.title }}</h2>
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
      dataStore: useDataStore(),
      bookmarkActive: false
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
    },
    toggleBookmark() {
      this.bookmarkActive = !this.bookmarkActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.heading {
  @include heading-l;
  display: block;
  padding: 3% 0;
}

.grid {
  display: grid;
  gap: 1%;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  &--card {
    width: 100%;
    height: 100%;

    .card-image {
      position: relative;
      img {
        border-radius: 10px;
        width: 100%;
        position: relative;
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

    p {
      @include body-m;
      display: flex;
      gap: 0.8rem;
    }

    h2 {
      @include heading-s;
    }
  }
}
</style>
