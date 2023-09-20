<template>
  <main>
    <HomeTrending />
    <HomeRecommended />
  </main>
</template>

<script>
import HomeTrending from '../components/HomeComponents/HomeTrending.vue'
import HomeRecommended from '../components/HomeComponents/HomeRecommended.vue'
export default {
  name: 'homme-view',
  components: {
    HomeTrending,
    HomeRecommended
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
}
</style>
