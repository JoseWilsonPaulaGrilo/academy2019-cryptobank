<template>
  <div class="home">
    <div class="content center">
        <div id="logo">
          <img :src="require('../assets/logo.png')" alt="Logo"/>
        </div>

          <div id="box">
            <div id="available">
              <label>Balance available</label>
            </div>
            <div id="money">
              <label id="label-money" @click="test">Click to view balance</label>
            </div>
          </div>

          <div class="options">
            <div class="icon">
               <img :src="require('../assets/piggy.png')" alt="Logo"/>
            </div>
            <div class="texts">
              <label @click="deposit">Deposit</label>
            </div>
          </div>

          <div class="options">
            <div class="icon">
               <img :src="require('../assets/pay.png')" alt="Logo"/>
            </div>
            <div class="texts">
              <label @click="pay">Pay</label>
            </div>
          </div>

          <div class="options">
            <div class="icon">
               <img :src="require('../assets/transfer.png')" alt="Logo"/>
            </div>
            <div class="texts">
              <label @click="transfer">Transfer</label>
            </div>
            <div class="actions">
              <button type="submit" @click="logout">Log Out</button>
            </div>

          </div>
    </div>
  </div>
</template>
<script>
import * as firebase from 'firebase'

export default {
  name: 'home',
  data () {
    return {
      total: ''
    }
  },
  methods: {
    deposit () {
      this.$router.push({ path: '/deposit' })
    },
    pay () {
      this.$router.push({ path: '/pay' })
    },
    transfer () {
      this.$router.push({ path: '/transfer' })
    },
    test () {
      let total = 0
      firebase.firestore().collection('users').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            total += parseInt(doc.data().valor)
          })
          alert('Money: ' + total)
        })
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        alert('Logout has been accomplished')
        this.$router.replace('signin')
      }).catch((err) => {
        alert('Error' + err.message)
      })
    }
  }
}
</script>
<style>
body{
  background: url("../assets/background.png") no-repeat;
  background-size: cover;
  margin:0px;
}
.signin > .content {
    width: 320px;
    margin-top: 60px;
    margin-bottom: 60px;
  }
.center {
    display: block;
    margin: auto;
  }
.actions > button[type="submit"]{
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
  margin-left: 120px;
  margin-top:40px;
  margin-bottom: 17px;
}
#logo{
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 22px;
  text-align: center;
  }
#box{
  width: 334px;
  height: 104px;
  flex-direction: row;
  margin-left: 540px;
  margin-top:30px;
  margin-bottom: 282px;
  background: #fff;
  border-radius:3px;
}
#available{
  text-align: left;
  padding-left: 14px;
  padding-top:12px;
  font-family: Arial
}
#money{
  padding-top:10px;
  padding-left:14px;
  padding-bottom: 17px;
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
  cursor: pointer;
}
#label-money{
  font-size: 20px;
  cursor: pointer;
}
.options{
  width: 334px;
  height: 50px;
  background: #FA7268;
  margin-left: 540px;
  margin-bottom: 15px;
  border-radius: 5px;
}
.icon{
  padding-left: 14px;
  padding-top:10px;
}
.texts{
  text-align: right;
  font-size: 20px;
  font-family: Roboto;
  margin-top: -30px;
  margin-right: 13px;
  color: #FFFFFF;
  cursor: pointer;
}
</style>
