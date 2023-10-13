<template>
  <h2 class="heading">Movies</h2>

  <div class="grid">
    <div class="grid--card" v-for="item in movies" :key="item.year">
      <figure class="card-image">
        <img :src="item.thumbnail.regular.medium" alt="" />
        <div class="card-bookmark" @click="toggleBookmark(item)">
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
import { computed, onMounted, ref } from 'vue'
import { useDataStore } from '../../stores/data'

export default {
  name: 'home-view',
  setup() {
    const dataBase = ref([])
    const movies = ref([])
    const dataStore = useDataStore()
    const bookmarkActive = ref(false)

    const jsonData = computed(() => dataStore.jsonData)

    const fetchData = async () => {
      try {
        await dataStore.fetchData()
        dataBase.value = jsonData.value
      } catch (error) {
        console.error(error)
      }
      recommendedMovies()
    }

    const recommendedMovies = () => {
      dataBase.value.forEach((item) => {
        if (item.category === 'Movie') {
          movies.value.push(item)
        }
      })
    }

    const toggleBookmark = (item) => {
      item.isBookmarked = !item.isBookmarked
    }

    onMounted(() => {
      fetchData()
    })

    return {
      dataBase,
      movies,
      bookmarkActive,
      jsonData,
      toggleBookmark
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
