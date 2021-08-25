<template>
  <section id="lnb">
    <nav>
        <ul>
          <li>
            <a href="" title="">사용자</a>
            <ul class="submenu">
              <li><router-link to="/test">행안부연계 테스트</router-link></li>
            </ul>
          </li>
          <li>
            <a href="" title="">관리자</a>
            <ul>
              <li><router-link to="/statistics">이용통계</router-link></li>
            </ul>
          </li>
        </ul>
    </nav>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  html{
    
  }
</style>