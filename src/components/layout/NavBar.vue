<template>
  <nav class="nav">
    <div class="nav__list">
      <IconCategoryMovie id="nav__category" />
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
  width: 9.6rem;
  background-color: $semi-dark-blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 0;
  align-items: center;
  border-radius: 15px;

  &__list {
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__avatar {
    width: 4rem;
    height: 4rem;
  }
}
</style>
