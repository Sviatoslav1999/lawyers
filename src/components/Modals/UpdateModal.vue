<template>
<div class="modal-background">
    <div class="modal-content">
        <span class="close" v-on:click="closeModal">&times;</span>
         <div class="container">
                        <label for="name"><b>Name</b></label>
                        <input class="inputFiled" type="text" placeholder="Enter Name" name="name" v-model="name" required>

                        <label for="surname"><b>Surname</b></label>
                        <input class="inputFiled" type="text" placeholder="Enter Surname" name="surname" v-model="surname" required>

                        <label for="Phone"><b>Phone</b></label>
                        <input class="inputFiled" type="number" placeholder="Enter Phone" name="phone" v-model="phone" required>

                        <label for="uname"><b>Email</b></label>
                        <input class="inputFiled" type="email" placeholder="Enter email" name="uemail" v-model="email" required>

                        <button v-on:click="updateUserData">Update</button>
                    </div>
    </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      name:'',
      surname: '',
      phone: '',
      email: ''
    }
  },
  computed:{
    ...mapGetters(['getUser'])
  },
  mounted(){
    this.name = this.getUser.name
    this.surname = this.getUser.surname
    this.phone = this.getUser.phone
    this.email = this.getUser.email
  },
  methods:{
    closeModal(){
      this.$store.commit('setModalState',false)
    },
    updateUserData(){
      const user = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        uId: this.getUser.userId
      }
      this.$store.dispatch('updateUserData', user)
       this.$store.commit('setModalState',false)
    }
  }
    
}
</script>
<style scoped>
.modal-background{
  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto; /* Enable scroll if needed */
  width: 100vw;
  height: 100vh;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content{
  position: relative;
  background-color: #fefefe;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #888;
}
.close{
  position: absolute;
  top: 0px;
  font-size: 30px;
  right: 10px;


}
.inputFiled {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}
</style>