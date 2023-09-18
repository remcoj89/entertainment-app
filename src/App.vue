<template>
  <div class="container">
    <NavBar />

    <main class="main">
      <!-- Search form -->
      <searchForm />
      <!-- Pages -->
      <router-view />
    </main>
  </div>
</template>

<script>
import searchForm from '@/components/form/SearchForm.vue'

export default {
  name: 'app-view',
  data() {
    return {}
  },
  components: {
    searchForm
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.container {
  padding: 5%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
}

.main {
  padding: 0 3rem;
  h1 {
    color: white;
    font-size: 8rem;
  }
}
</style>
