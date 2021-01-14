<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import firebase from 'firebase/app'
import { mapGetters } from 'vuex' 
export default {
  computed:{
    ...mapGetters(['getuserIsLoggedIn'])
  },
  mounted(){
      this.checkIsUserLoggedIn()
  },
   watch: {
      getuserIsLoggedIn(val){
        if(val === false){
          this.$router.push('/')
        }
      }
   },
  methods:{
       checkIsUserLoggedIn(){
            if(localStorage.getItem('uId')){
                this.$store.dispatch('getUserData',localStorage.getItem('uId'))
            }
        }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #080808;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
img{
  width: 100%;
  height: auto;
  display: block;
}
</style>
