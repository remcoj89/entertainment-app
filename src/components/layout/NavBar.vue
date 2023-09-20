<template>
  <nav class="nav">
    <div class="nav__list">
      <IconLogo id="logo" />
      <IconNavHome />
      <IconNavMovie />
      <IconNavTvSerie />
      <IconNavBookmark />
    </div>

    <img class="nav__avatar" src="@/assets/images/image-avatar.png" alt="avatar" />
  </nav>
</template>

<script>
export default {
  name: 'app-nav',
  components: {}
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
  }

  &__avatar {
    width: 4rem;
    height: 4rem;
  }
}
</style>
