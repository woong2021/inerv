<template>
  <div id="app">
    <header-list></header-list>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderList from './components/HeaderList.vue';

export default {
  components: {
    HeaderList,
  },
}
</script>

<style>

</style>
