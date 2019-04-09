<template>
  <div id="app">
    <div class="container">
    <div class="row">
      <h1 class="logo">MindFULL</h1>
      
      </div>
      </div>
    <div id="nav">
      <router-link to="/">Home</router-link> | |
      <router-link to="/about">Get Started</router-link> | |
      <router-link to="/all">Stretches</router-link> | |
      <router-link to="/saved">Saved</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  display:flex;
  justify-content: flex-start;
  color: #DEFFFC;
  padding: 15px;
  
}
#nav {
  a {
    font-weight: bold;
    color:#DEFFFC;
    &.router-link-exact-active {
      color:  #9E788F 
    }
  }
}
</style>
