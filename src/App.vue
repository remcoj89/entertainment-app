<template>
  <main class="">
    <!-- Navigation menu -->
    <nav></nav>
    <!-- Search form -->
    <header class="mt-8">
      <input class="border-slate-400" type="text" placeholder="search.." />
    </header>
    <!-- Pages -->
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'app-view'
}
</script>
