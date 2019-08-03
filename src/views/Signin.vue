<template>
  <div class="signin">
    <div class="content center">
      <img class="logo" :src="require('../assets/logo.png')" alt="Logo" />

      <form class="login-form" @submit.prevent="signin">
        <div class="input-control">
          <label for="email-input" class="fields">E-mail</label>
          <input v-model="email" type="email" id="email-input"  class="input" placeholder="Type it your e-mail"
          />
        </div>

        <div class="input-control">
          <label for="password-input" class="fields">Senha</label>
          <input v-model="password" type="password" id="password-input" class="input" placeholder="Type it your password"
          />
        </div>

         <div class="actions">
          <button type="submit" class="center">
            <small><router-link to="/signin">Sign In</router-link></small>
          </button>
          </div>
        <div id="new-user">
          <small>New User? <router-link to="/signup">Create an account</router-link></small>
        </div>
        <br />
      </form>
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
</style>
<script>
import firebase from 'firebase'

export default {
  name: 'signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('Account has been authenticated')
          this.$router.push({ path: '/home' })
        }).catch(error => {
          alert('Authentication error' + error.message)
        })
    }
  }
}
</script>
<style>
body{
  overflow: hidden;
  background: url("../assets/background.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
#new-user {
  text-align: center;
  font-family: Roboto;
  font-size: 15px;
  margin-top: 4px;
  color: #ffffff;
  display: block;
  margin-top:15px;
  margin-left:5px;
}
a {
   text-decoration: none;
   color:#ffffff;
   font-size:15px;
   font-weight: bold;
}
.signin > .content {
  width: 320px;
  margin-top: 60px;
  margin-bottom: 60px;
}
.center {
  display: block;
  margin: 0 auto;
}
.signin-form {
  margin-top: 78px;
  margin-left:-40px;
  text-align: left;
  display: block;
  font-size:15px;
  font-family: Roboto;
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
.input-control > .input:focus {
  background: #f2f2f2;
}
.signin-form > .actions > button[type="submit"] {
  background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  width: 100px;
  height: 48px;
  text-align: center;
  cursor: pointer;
}
.logo {
  margin-top:21px;
  display: block;
}
.fields {
  color: #ffffff;
  margin-bottom: 5px;
}
</style>
