<template>
  <form class="search-bar" action="search">
    <iconSearch />
    <input
      class="search-bar--input"
      type="search"
      placeholder="Search for movies or TV series"
      name="seachBar"
    />
  </form>
</template>

<style lang="scss" soped>
@import '@/assets/main.scss';

.search-bar {
  width: 100%;
  display: flex;
  align-items: center;

  &--input {
    flex: 1;
    outline: none;
    border: 0;
    width: 100%;
    padding: 0.8rem 1.6rem;
    background: transparent;
    color: $greyish-blue;
    font-size: 2.4rem;
    font-weight: 300;
    font-family: 'Outfit', sans-serif;

    &:focus {
      color: $pure-white;
      border-bottom: 1px solid $pure-white;
      caret-color: $red;
    }

    &:valid {
      color: $pure-white;
    }
  }
}
</style>
