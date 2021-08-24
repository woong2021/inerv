<template>
  <div id="app">
    <header-list></header-list>
    <main id="container">
      <lnb-menu></lnb-menu>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderList from './components/gnb/HeaderList.vue';
import LnbMenu from './components/lnb/LnbList.vue';

export default {
  components: {
    HeaderList,
    LnbMenu,
  },
}
</script>

<style src="./assets/css/reset.css">

</style>
