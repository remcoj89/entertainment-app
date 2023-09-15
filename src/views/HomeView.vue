<template>
  <div class="container">
    <h2 class="heading">Trending</h2>
  </div>
</template>

<script>
export default {
  name: 'homme-view'
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.container{
  .heading{
    @include heading-l;
  }
}

</style>