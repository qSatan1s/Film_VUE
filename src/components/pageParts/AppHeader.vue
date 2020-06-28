<template>
  <header>
    <div class="container">
      <router-link to="/">
        <img class="logo" src="@/assets/img/logo.png" alt="logo" />
      </router-link>
      <div class="input-field">
        <input placeholder="Поиск..." id="search" type="text" />
        <button class="btn_search">Поиск</button>
      </div>
      <div v-if="isLogin" class="app-header-profile">
        <div class="profile-link">
          <span class="profile_name">Башлыков К</span>
          <span class="profile_logout">Выход</span>
        </div>
      </div>
      <button v-else data-target="modal1" class="btn_auth modal-trigger">Войти</button>
    </div>
    <app-auth />
    <top-nav />
  </header>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import TopNav from "./TopNav";
import AppAuth from "./auth";
export default {
  data() {
    return {
      isLogin: true
    };
  },
  components: {
    TopNav,
    AppAuth
  },
  mounted() {
    var elems = document.querySelectorAll(".modal");
    setTimeout(() => {
      M.Modal.init(elems);
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  width: 100%;
  height: 100px;

  justify-content: space-around;
  align-items: center;
}

.profile-link {
  display: flex;
}

.profile_name {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-right: 1vw;
  color: #333333;
  cursor: pointer;
}

.profile_logout {
  color: #e5261e;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
}

.input-field {
  display: flex;

  width: 420px;
  height: 20px;

  align-items: center;
}

input#search:focus {
  border-bottom: 1px solid #9e9e9e;
  box-shadow: none;
}

.btn_search {
  font-family: Rubik;
  font-size: 16px;
  font-weight: 500;

  position: relative;
  left: 2vw;

  cursor: pointer;

  color: red;
  border: 0;
  background: none;
}

.btn_auth {
  font-family: Rubik;
  font-weight: 500;

  position: relative;

  width: 113px;
  height: 38px;

  cursor: pointer;

  color: white;
  border: none;
  border-radius: 4px;
  background: #e5261e;
}

.btn_auth:hover {
  background: #cc221b;
}
</style>
