<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<style lang="scss">

body{
  font: 400 1em/1.5 "Neuton";
   background: #090d00;
    color: rgba(255,255,255,.25);
     text-align: center;
      margin: 0 ;
    }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
