<template>
  <nav class="nav">
    <div class="nav__list">
      <router-link :to="{ name: 'home' }">
        <IconLogo class="nav__list--icon" id="logo" />
      </router-link>
      <IconNavHome class="nav__list--icon" @click.prevent="$router.push({ name: 'home' })" />
      <IconNavMovie class="nav__list--icon" @click.prevent="$router.push({ name: 'movies' })" />
      <IconNavTvSerie
        class="nav__list--icon"
        @click.prevent="$router.push({ name: 'tv-series' })"
      />
      <IconNavBookmark
        class="nav__list--icon"
        @click.prevent="$router.push({ name: 'bookmarks' })"
      />
    </div>

    <img class="nav__avatar" src="@/assets/images/image-avatar.png" alt="avatar" />
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.nav {
  height: 96rem;
  background-color: $semi-dark-blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 1.8rem;
  align-items: center;
  border-radius: 15px;

  &__list {
    #logo {
      margin-bottom: 5vh;
    }
    height: 30%;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &--icon {
      cursor: pointer;
    }
  }

  &__avatar {
    width: 4rem;
    height: 4rem;
  }
}
</style>
