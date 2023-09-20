<template>
  <div :type="type" :class="mode" :id="id">
    <slot>
      <h2>Backup text</h2>
    </slot>
  </div>
</template>

<script>
export default {
  props: ['type,', 'mode', 'id']
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.card {
  padding: 1.5rem;
  background-color: grey;

  &__list {
    padding: 1.5rem;
    display: flex;
    gap: 3.8rem;

    @include body-m;
  }

  &__title {
    @include heading-m;
  }
}
</style>
