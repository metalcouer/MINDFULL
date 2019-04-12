<template>
  <div id="app">
    <div>
      <b-navbar id="nav" toggleable="lg" type="light" >
        <b-navbar-brand router-link to="/">MindFULL</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item router-link to="/about">Get Started</b-nav-item>
          <b-nav-item router-link to="/all"> All Stretches</b-nav-item>
          <b-nav-item router-link to="/saved">Profile</b-nav-item>
          <b-nav-item href="#" disabled>Sign Out</b-nav-item>
        </b-navbar-nav>
   
        </b-collapse>
      </b-navbar>
    </div>
    
    <router-view :stretchRecommendation="stretchRecommendation"
                 :stretches="stretches"/>
  </div>
</template>



<script>

export default {
  data() {
        return {
          stretchRecommendation: null,
          stretches: null,
        }
    },
    
    methods: {
        getStretches(){
            fetch('http://localhost:3005')
            .then(resp => resp.json())
            .then(resp => (this.stretches = resp))
            
        }
    },
    mounted() {
        this.getStretches()
    }
}
</script>


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
    background-color:#320E3B;
    color:#DEFFFC;
    &.router-link-exact-active {
      color:  #9E788F 
    }
  }
#navbar {
  background-color:#320E3B;
}
b-navbar{
  display:none
}
}
</style>
