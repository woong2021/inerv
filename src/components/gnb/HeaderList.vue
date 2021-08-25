<template>
  <header>
    <h1 class="logo"><router-link to="/">Logo</router-link></h1>
    <h2 class="hide">상단메뉴</h2>
    <ul>
      <li class="gnb-menu">
        <ul>
          <li><router-link to="/test">IRS</router-link></li>
          <li><router-link to="/authority">시스템관리</router-link></li>
        </ul>
      </li>
      <li class="utile">
        <router-link to="">Utile</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  html{
    
  }
</style>