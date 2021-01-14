<template>
   <div class="main_wrapper">
         <div class="card_wrapper" v-for=" law in getAllLawyer" :key="law.id">
            <div class="card_item">
               <div class="card_avatar">
                  <img class="card_img" src="../../assets/avatar.png" alt="avatar">
               </div>
               <div class="card_bio">
                  <h2 class="card_bio_title">Name: {{law.name}}</h2>
                  <p class="card_bio_surname">Surname: {{law.surname}}</p>
                  <p class="card_bio_experience">Experience: {{law.experience}}</p>
                  <p class="card_bio_price">Price: {{law.price}}</p>
               </div>
               <button v-if="!disabled" class="card_button"  v-on:click="takeOrder(law)">Записатись на прийом</button>
            </div>
         </div>
   </div>
</template>
<script>
import { mapGetters , mapMutations } from 'vuex'
export default {
   computed:{
      ...mapGetters(['getAllLawyer','getUser'])
   },
   data(){
      return{
         lawyers:[],
         disabled: false,
      }
   },
   mounted(){
      if(this.getUser.userOrders && this.getUser.userOrders !== ''){
         this.disabled = true
      }else{
         this.disabled = false
      }
      this.$store.dispatch('getDataOfAllLawyer')
      this.lawyers = this.getAllLawyer
   },
   methods:{
      ...mapMutations(['decrementMoney']),
       takeOrder(object){
            this.$store.dispatch('makeAnOrder', object)
        }
   }
}
</script>
<style scoped>
   .main_wrapper{
      max-width: 900px;
      margin: 0 auto;
   }
   .card_img{
      width: 60px;
      height: 60px;
      border-radius: 10%;
      text-align: justify;
   }
   .card_avatar{
      display: flex;
      justify-content:  center;
      align-items: center;
   }
   .card_item{
      display: flex;
      align-items: center;
   }
   .card_bio{
      margin-left: 40px;
   }
   .card_button{
      width: 200px;
      height: 40px;
      cursor: pointer;
      border: 5;
      background-color: purple;
      border-radius: 40px;
      margin-left: 50px;
      display: flex;
      align-items: center;
      display: block;
      margin: 0 auto;
   }
</style>