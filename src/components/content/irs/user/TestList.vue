<template>
  <section id="content">
    <div class="content-inner">
    <article id="title">
      <h2>행안부연계 테스트</h2>
      <div>
        <ul>
          <li><span class="hide">홈</span></li>
          <li>사용자</li>
          <li>행안부연계 테스트</li>
        </ul>
      </div>
    </article>
    <article>
      <h3>조회 항목</h3>
      <div class="content-box">
        <h4>조회하실 항목을 선택해주세요.</h4>
      </div>
      <h3>결과 및 설명</h3>
      <div class="content-box">
        <h4>URL</h4>
        <input type="text" placeholder="http://localhost:8085/irs/api/json/meritcaryn/list.do" onfocus="this.placeholder=''" onblur="this.placeholder='http://localhost:8085/irs/api/json/meritcaryn/list.do'" />

        <h4>파라미터</h4>
        <table id="defaultTable">
          <caption class="sr-only">파라미터</caption>
          <colgroup>
            <col style="width: 33%;"/>
            <col style="width: 33%;"/>
            <col style="width: 33%;"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">변수명</th>
              <th scope="col">타입</th>
              <th scope="col">값</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">carNo</td>
              <td>String(필수)</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <div class="button-list">
          <button type="button">전송</button>
        </div>
      </div> 
    </article>
    </div>
  </section>
</template>
<style lang="scss">
  html{
    
  }
</style>