<template>
    <div class="userml">
      <input v-model="userid" placeholder="Введите свой айди">
      <input v-model="userserv" placeholder="Введите сервер">
      <button @click="sendCheck" :disabled="buttonDisabled">Проверить</button>
      <span v-if="buttonDisabled">Пожалуйста, подождите: {{ countdown }} сек.</span>
      <h2>Ваш ник в Mobile Legends: {{ usernameml }}</h2>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'MobileLegendsAPI',
    data() {
      return {
        id: [],
        usernameml: "",
        userid: '',
        userserv: '',
        buttonDisabled: false,
        countdown: 0,
      }
    },
    methods: {
      sendCheck() {
        if (!this.buttonDisabled) {
        this.countdown = 60;
        this.buttonDisabled = true;
        this.startCountdown();
        }
        const options = {
          method: 'GET',
          url: `https://id-game-checker.p.rapidapi.com/mobile-legends/${this.userid}/${this.userserv}`,
          headers: {
            'X-RapidAPI-Key': 'b0d8748487mshb19340296c6833bp131a40jsnaa27d7d556ae',
            'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
          }
        };
  
        axios.request(options)
          .then((res) => {
            this.usernameml = res.data.data.username;
          })
          .catch(error => {
            console.error('Ошибка:', error);
          });
      },
      startCountdown() {
      let timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          this.buttonDisabled = false;
          clearInterval(timer);
        }
      }, 1000);
    }
  }}
  </script>

  <style>
.userml{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>