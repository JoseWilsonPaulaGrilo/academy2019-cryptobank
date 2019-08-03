<template>
  <div class="home">
        <div class="content center">
            <div id="logo">
            <img :src="require('../assets/logo.png')" alt="Logo"/>
            </div>

            <div class="container">
              <div class="box2">
                  <div id="depositTop">
                    <div id="iconBack">
                      <img :src="require('../assets/back.png')" alt="Icone" @click="back"/>
                    </div>
                    <small class="textDeposit">Deposit</small>
                  </div>
                  <div id="home">
                    <label>Type it <b>value</b> required</label><br><br>
                    <input v-model="deposit.quant" required type="text" />
                  </div>
                    <div id="text">
                      <small class="smallText">Type it a value bettwen $KA 10,00 and $KA 15,000,00</small><br><br>
                      <button type="submit" @click="newDeposit">Deposit</button>
                    </div>
               </div>
            </div>
        </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'deposit',
  data () {
    return {
      deposit: {
        quant: 0
      }
    }
  },
  methods: {
    newDeposit (...args) {
      const { quant } = this.deposit

      const docDepositId = firebase.firestore().collection('deposits').doc().id
      const userUid = firebase.auth().currentUser.uid
      // Adicionar deposito na coleção deposito
      firebase.firestore()
        .collection('deposits').doc(docDepositId).set({ docDepositId, quant, userUid })
        .then(() => {
          alert('Deposit has been accomplished')
          this.$router.push('/home')
        }).catch(error => {
          alert('Error depositing \n' + error.message)
        })
    },
    back () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style>
body{
  background-color: #333333;
  margin: 0px;
}
#logo{
  margin-left: 40px;
  margin-top: 22px;
  text-align: center;
}
#caixa{
  width: 380px;
  height: 210px;
  background: #ffffff;
  border-radius: 5px;
  margin-left: 510px;
}
input[type=text]{
    border-radius:5px;
    background-color: white;
    border:1px solid #000000;
    width:200px;
    height: 40px;
    text-align:center;
}
.textDeposit{
  font-family: Roboto;
}
#text {
  text-align: center;
  cursor: pointer;
}
.smallText{
  font-family: Roboto;
  font-size:10px;
  align-content: center;
}
#text > button[type="submit"]{
background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  width: 350px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
}
#depositTop{
  text-align: center;
  background: #4076AD;
  height: 40px;
  width: 380px;
  border-radius: 5px;
  color: #ffffff;
}
#depositTop > button {
    font-size:20px;
}
#iconBack{
  text-align: left;
  margin-left: 4px;
  margin-top: 4px;
  align-content: center;
}
#home{
  margin-top:20px;
  font-family: Roboto;
  text-align: center;
  font-size: 20px;
}
.container {
width: 100vw;
margin-top: 161px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}
.box2 {
width: 380px;
height: 300px;
background: #ffffff;
border-radius: 5px;
}
</style>
