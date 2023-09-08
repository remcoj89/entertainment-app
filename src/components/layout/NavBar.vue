<template>
  <nav class="nav">
    <IconCategoryMovie class="nav__category" />

    <div class="nav__list">
      <IconNavHome />
      <IconNavMovie />
      <IconNavTvSerie />
      <IconNavBookmark />
    </div>
  </nav>
</template>

<script>
import IconCategoryMovie from '@/assets/icons/IconCategoryMovie.vue'
import IconNavHome from '@/assets/icons/IconNavHome.vue'
import IconNavMovie from '@/assets/icons/IconNavMovie.vue'
import IconNavTvSerie from '@/assets/icons/IconNavTvSerie.vue'
import IconNavBookmark from '@/assets/icons/IconNavBookmark.vue'
export default {
  name: 'app-nav',
  components: {
    IconCategoryMovie,
    IconNavHome,
    IconNavMovie,
    IconNavTvSerie,
    IconNavBookmark
  }
}
</script>

<style scoped>
.nav__content {
  display: flex;
  flex-direction: column;
}
</style>
