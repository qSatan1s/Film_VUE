<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Вход</h4>
        <div class="input_auth">
          <div class="input-field auth_input">
            <input
              placeholder="Логин"
              id="email"
              type="text"
              class="validate"
              v-model.trim="email"
              :class="{
                  invalid: $v.email.$dirty && !$v.email.required,
                }"
            />
          </div>
          <div class="input-field auth_input">
            <input
              placeholder="Пароль"
              id="password"
              type="password"
              v-model.trim="password"
              class="validate"
              :class="{
                  invalid:
                    ($v.password.$dirty && !$v.password.required) ||
                    ($v.password.$dirty && !$v.password.minLength),
                }"
            />
          </div>
          <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">
            {{
            'Введите пароль'
            }}
          </small>
          <small
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
          >{{ 'Минимальная длинна пароля' }} {{ $v.password.$params.minLength.min }}</small>
        </div>
        <label>
          <input type="checkbox" class="filled-in" />
          <span>Запомнить</span>
        </label>
      </div>
      <div class="modal-footer">
        <button data-target="modal1" class="btn_auth btn">Войти</button>
      </div>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  data: () => ({
    email: "",
    password: ""
  }),

  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password
      };

      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (e) {}
    }
  }
};
</script>

<style lang="scss" scoped>
small {
  font-size: 12px;
  color: red;
}

.modal {
  margin-top: 10vh;

  width: 25vw;
  height: 45vh;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: #333333;
  border-radius: 8px;

  h4 {
    text-align: center;
  }
}

.filled-in {
  span {
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
}

.modal-footer {
  display: flex;
  justify-content: center;

  .btn {
    background: #e5261e;
    border-radius: 4px;
    width: 113px;
    text-transform: none;
  }
  .btn:hover {
    background: #cc221b;
  }
}

.input_auth {
  width: 20vw;

  .auth_input {
    width: 100%;
  }
}

[type="checkbox"].filled-in:checked + span:not(.lever):before {
  border-right: 2px solid #e5261e;
  border-bottom: 2px solid #e5261e;
}

[type="checkbox"].filled-in:checked + span:not(.lever):after {
  border: 1px solid #333333;
  background-color: white;
  border-radius: 4px;
}
</style>