import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFirestore from 'vue-firestore'
// import './firebase';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

require('firebase/firestore')
 
Vue.use(VueFirestore)

// import VueFire from 'vuefire';

Vue.config.productionTip = false;

// Vue.use(VueFire);

new Vue({
  
  router,
  store,
  render: h => h(App),
  created(){
    var firebaseConfig = {
      apiKey: "AIzaSyBLggf7t84aT0JgXMSzT-y4AcCugrZFRVc",
      authDomain: "lawyer-2bcd4.firebaseapp.com",
      databaseURL: "https://lawyer-2bcd4.firebaseio.com",
      projectId: "lawyer-2bcd4",
      storageBucket: "lawyer-2bcd4.appspot.com",
      messagingSenderId: "1026499057747",
      appId: "1:1026499057747:web:d9556d46e5ef2ae9d98ea6",
      measurementId: "G-GNG641G34K"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}).$mount("#app");
