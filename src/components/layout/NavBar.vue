<template>
  <nav class="nav">
    
    <div class="nav__list">
      <IconCategoryMovie id="nav__category" />
      <IconNavHome />
      <IconNavMovie />
      <IconNavTvSerie />
      <IconNavBookmark />
    </div>

    <img class="nav__avatar" src="@/assets/images/image-avatar.png" alt="avatar">
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

<style lang="scss" scoped>
@import '@/assets/main.scss';
.nav {
  height: 96rem;
  width: 9.6rem;
  background-color: $semi-dark-blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 0;
  align-items: center;
  border-radius: 15px;


  &__list{
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__avatar{
    width: 4rem;
    height: 4rem;
  }
}
</style>
