<template>
  <div class="container">
    <NavComp></NavComp>
    <router-view style="margin-left: 5px;"></router-view>
  </div>

  <footer class="footer">
    <h3>О <RouterLink class="about-link" to="/about">нас</RouterLink></h3>
  </footer>
  </template>
  
  <script>
  import NavComp from './components/Navigation.vue'
  
  export default {
    name: 'App',
    components:{
      NavComp
    }
  }
  </script>
  
  <style>
  body{
    background-color: rgb(31, 30, 30);  
    height: 100vh;
    color: white;
  }


  .footer{
    background-color: rgb(19, 18, 18);
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .about-link{
    text-decoration: none;
    color: white;
  }
  .about-link:hover{
    text-decoration: underline
  }
  .container{
    min-height: 96.5vh;
  }
  </style>
