<template>
  <nav class="nav">
    <div class="nav__list">
      <RouterLink :to="{name: 'home'}">
        <IconLogo class="nav__list--icon" id="logo" />
      </RouterLink>
        <IconNavHome class="nav__list--icon" @click.prevent="goToPage('home')"/>
        <IconNavMovie class="nav__list--icon" @click.prevent="goToPage('movies')"/>
        <IconNavTvSerie class="nav__list--icon" @click.prevent="goToPage('series')" />
        <IconNavBookmark class="nav__list--icon" @click.prevent="goToPage('bookmark')" />
    </div>

    <img class="nav__avatar" src="@/assets/images/image-avatar.png" alt="avatar" />
  </nav>
</template>

<script>
export default {
  name: 'app-nav',
  data(){
    return {
      isActive: false,
    }
  },
  methods: {
    goToPage(input){
      if(input === 'home'){
        this.$router.push({name: 'home'})
      } else if(input === 'movies') {
        this.$router.push({name: 'movies'})
        console.log('movies')
      } else if(input === 'series'){
        this.$router.push({name: 'tv-series'})
      } else if(input === 'bookmark') {
          this.$router.push({name: 'bookmarks'})
        }
    }
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
  &--icon{
    cursor: pointer;
  }
  
  }

  &__avatar {
    width: 4rem;
    height: 4rem;
  }
}
</style>
