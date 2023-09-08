<template>
  <main class="">
    <NavBar />
    <!-- Pages -->
    <router-view />
  </main>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
export default {
  name: 'app-view',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped></style>
