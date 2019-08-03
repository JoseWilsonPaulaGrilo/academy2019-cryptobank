<template>
  <div class="home">
        <div class="content center">
            <div id="logo">
            <img :src="require('../assets/logo.png')" alt="Logo"/>
            </div>

            <div class="container">
              <div class="box">
                  <div id="depositTop"><small class="textDeposit">Transferir</small>
                    <div id="iconBack">
                      <img :src="require('../assets/back.png')" alt="Icone" @click="voltar"/>
                    </div>
                  </div>
                  <div id="home">
                    <label>Informe a <b>quantia</b> desejada</label><br><br>
                    <input v-model="deposito.valor" required type="text" />
                  </div>
                    <div id="text">
                      <small class="smallText">Digite um valor entre $KA 10,00 e $KA 15,000,00</small><br><br>
                    </div>
                    <div id="home2">
                      <p>Para <b>quem</b> você deseja <b>enviar</b>?</p>
                    </div>
                    <div id="email">
                      <select>
                        <option>user1@hotmail.com</option>
                        <option>user2@hotmail.com</option>
                        <option>user3@hotmail.com</option>
                      </select>
                    </div>
                      <button type="submit" class="button2" @click="newDeposito">Transferir</button>
               </div>
            </div>
        </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
</style>

<script>
import * as firebase from 'firebase'
export default {
  name: 'transfer',
  data () {
    return {
      deposito: {
        valor: 0
      }
    }
  },
  methods: {
    newDeposito (...args) {
      const { valor } = this.deposito

      const docId = firebase.firestore().collection('deposits').doc().id
      const docUsuario = firebase.firestore().collection('users').doc().id
      const userUid = firebase.auth().currentUser.uid
      // Adicionar deposito na coleção deposito
      firebase.firestore()
        .collection('deposits').doc(docId).set({ id: docId, valor, userUid })
        .then(() => {
          alert('Depositado com sucesso!')
          this.$router.push('/home')
        }).catch(error => {
          alert('Erro ao depositar \n\n' + error)
        })
        // Adicionar deposito na coleção usuário
      firebase.firestore().collection('usuario').doc(docUsuario).set({ id: docUsuario, valor, userUid })
        .then(() => {
          alert('Depositado com sucesso!')
          this.$router.push('/home')
        }).catch(error => {
          alert('Erro ao depositar \n\n' + error)
        })
    },
    voltar () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style>
body{
  background-color: #333333;
  margin:0px;
  width: 100%;
  height: 100%;
}

#logo{
  margin-left: 40px;
  margin-top: 22px;
  text-align: center;
}

#box2{
  width: 380px;
  height: 210px;
  background: #ffffff;
  border-radius: 5px;
  margin-left: 510px;
}
input[type=text]{
    border-radius:5px;
    background: #cccccc;
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
}
#email{
  text-align: center;
  margin-top:31px;
  font-family: Roboto;
}
.smallText{
  font-family: Roboto;
  font-size:10px;
}
.button2{
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
  margin-left: 13px;
  font-weight: bold;
  margin-top: 20px;
}

#depositTop{
  text-align: center;
  background: #4076AD;
  height: 32px;
  width: 380px;
  border-radius: 5px;
  color: #ffffff;
}
#depositTop > button {
    font-size:20px;
}

#iconBack{
  text-align: left;
  margin-left: 30px;
  margin-left:14px;
  border:1px solid red;
  position: absolute;
}

#home{
  margin-top:20px;
  font-family: Roboto;
  text-align: center;
  font-size: 20px;
}

#home2{
  margin-top:20px;
  font-family: Roboto;
  text-align: center;
  font-size: 20px;
  background:#F5F5F5;
  height: 40px;
}

.container {
width: 100vw;
margin-top: 161px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}
.box {
width: 380px;
height: 380px;
background: #ffffff;
border-radius: 5px;
}
</style>
