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
          <div class="card-bookmark" @click="toggleBookmark(item)">
            <IconBookmarkEmpty v-show="!item.isBookmarked" />
            <IconBookmarkFull v-show="item.isBookmarked" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useDataStore } from '../../stores/data'

export default {
  name: 'home-view',
  setup() {
    const dataStore = useDataStore();
    const trending = ref([]);
    const startX = ref(0);
    const slider = ref(null)
    const scrollLeft = ref(0);
    const isDown = ref(false);
    const sliderRef = ref(null); 
    const fetchData = async () => {
      try {
        await dataStore.fetchData()
        trending.value = dataStore.trending
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }

    const handleMouseDown = (e) => {
      isDown.value = true;
      startX.value = e.pageX - slider.value.offsetLeft;
      scrollLeft.value = slider.value.scrollLeft;
      slider.value.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
      isDown.value = false;
      slider.value.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDown.value = false;
      slider.value.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
      if (!isDown.value) return;
      e.preventDefault();
      const x = e.pageX - slider.value.offsetLeft;
      const walk = (x - startX.value) * 3;
      slider.value.scrollLeft = scrollLeft.value - walk;
    };

    const toggleBookmark = (item) => {
      item.isBookmarked = !item.isBookmarked
    }

    onMounted(() => {
      fetchData()
    })

    return {
      trending,
      toggleBookmark,
      handleMouseDown,
      handleMouseLeave,
      handleMouseUp,
      handleMouseMove,
      slider,
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
