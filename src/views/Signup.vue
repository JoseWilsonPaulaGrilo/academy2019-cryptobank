<template>
    <div class="signup">
      <div class="content center">
      <img class="logo" :src="require('../assets/logo.png')" alt="Logo" />
        <form class="login-form" @submit.prevent="signup">
          <div class="input-control">
            <label for="email-input" class="campos">E-mail</label>
            <input type="text"  id="email-input" class="input" v-model="email" placeholder="Email"><br>
            <label for="password-input" class="campos">Senha</label>
            <input type="password" id="password-input" class="input" v-model="password" placeholder="Password"><br>
            <div class="actions">
            <button type="submit" class="center">
              <small><router-link to="/signin">Sign Up</router-link></small>
            </button>
            </div>
            <div id="novo-usuario">
              <small>Já possui conta? <router-link to="/signin">Sign In</router-link></small>
            </div>
          </div>
        </form>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('Account has been authenticated')
          this.$router.push({ path: '/signin' })
        }).catch((error) => {
          alert('Error' + error.message)
        })
    }
  }
}
</script>
<style scoped>
body{
  overflow:hidden;
  background: url("../assets/background.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.logo {
  margin-top:21px;
  display: block;
}
.login-form {
  margin-top: 78px;
  margin-left:-40px;
  text-align: left;
  display: block;
  font-size:15px;
  font-family: Roboto;
}
.signup > .content {
  width: 320px;
  margin-top: 60px;
  margin-bottom: 60px;
}
.center {
  display: block;
  margin: 0 auto;
}
.input-control {
  margin-bottom: 20px;
}

.input-control > label {
  display: block;
}
.input-control > .input {
  height: 45px;
  width: 370px;
  border-radius: 5px;
  border-width: 0;
  background: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  padding: 0 25px;
}
.campos {
  color: #ffffff;
  margin-bottom: 5px;
  align-content: left;
}
.login-form > .actions > button[type="submit"] {
  background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  font-family: Roboto;
  width: 130px;
  height: 48px;
  text-align: center;
  cursor: pointer;
}

#novo-usuario {
  text-align: center;
  font-family: Roboto;
  font-size: 15px;
  margin-top: 4px;
  color: #ffffff;
  display: block;
  margin-top:15px;
}
.signup {
  margin-top: 40px;
}
input{
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
