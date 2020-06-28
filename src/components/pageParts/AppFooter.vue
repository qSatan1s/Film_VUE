<template>
  <footer>
    <div class="footer_block">
      <div>
        <img class="logo" src="@/assets/img/footer-logo.png" alt="logo" />
      </div>
      <div class="footer_text">
        <span
          >426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК
          «Металлург»)</span
        >
        <span>+7 (3412) 93-88-61, 43-29-29</span>
        <a target="_blank" href="//htc-cs.ru">htc-cs.ru</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 120px;
  background: #f2f2f2;
}

.footer_block {
  display: flex;
  align-items: center;
  margin-left: 10vw;
}

.logo {
  margin-top: 2vh;
}

.footer_text {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 16px;
  line-height: 19px;
  padding-top: 10px;

  span {
    margin: 7px 0;
  }
  span,
  a {
    margin-left: 2vw;
  }
  a {
    font-weight: 500;
    line-height: 19px;
    color: #1f4766;
  }
}
</style>
