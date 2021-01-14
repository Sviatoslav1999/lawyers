<template>
    <div class="outer_wrapper">
    <Header/>
        <header class="header_outerWrapper">
          <UpdateModal v-if="getModalState"/>
            <div class="header_innerWrapper">
                <div class="header_card">
                    <div class="header_avatarContainer">
                    <div class="header_avatar">
                        <img src="../assets/account.png"/>
                    </div>
                    </div>
                    <div class="header_bioContainer">
                    <span class="header_logout_btn" v-on:click="logoutUser"><img src="../assets/logout.png" />Logout</span>
                    <span class="header_update_btn" v-on:click="openModal"><img src="../assets/update.png" />Update info</span>
                    <div class="header_bio">
                        <h1 class="header_name">Name: {{getUser.name}}</h1>
                        <h3 class="header_surname">SurName: {{getUser.surname}}</h3>
                        <p class="header_birthday">Phone: {{getUser.phone}}</p>
                        <p class="header_money">Email: {{getUser.email}}</p>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        <article class="article_wrapper">
            <div class="article_navigation">
                <div class="navigation_item" v-on:click="chooseOption">Замовити Юриста</div>
                <div class="navigation_item" v-on:click="chooseOption2">Мої замовлення </div>
            </div>
            <OrdersLayout v-if="isShown"/>
              <LawyersLayout v-else/>
        </article>
    </div>
</template>
<script>

import {mapGetters} from 'vuex'
import UpdateModal from '../components/Modals/UpdateModal'
import Header from '../components/Header/Header'
import LawyersLayout from '../components/LawyersLayout/LawyersLayout'
import OrdersLayout from '../components/OrdersLayout/OrdersLayout'

export default {
    components:{
        Header,
        LawyersLayout,
        OrdersLayout,
        UpdateModal
    },
    computed:{
        ...mapGetters(['getUser','getAllLawyer','getModalState'])
    },
    mounted(){
    },
    data(){
        return{
            isShown: false
        }
    },
    methods:{
        chooseOption(){
            console.log('here')
            return this.isShown = false
        },
         chooseOption2(){
            console.log('here')
            return this.isShown = true
        },
        logoutUser(){
            this.$store.dispatch('signOutUser')
            localStorage.removeItem('uId')
        },
        openModal(){
            this.$store.commit('setModalState' , true)
        }
    }
    
    
}
</script>
<style lang="css" scoped>
.header_outerWrapper{
    position: relative;
    max-width: 1000px;
    min-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 30px;

}
.header_logout_btn{
    display: flex;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 20px;
}
.header_update_btn{
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.header_update_btn > img {
    width: 20px;
    margin-right: 10px;
}
.header_logout_btn > img{
    width: 20px;
    margin-right: 10px;
}
.header_avatar{
    width: 100px;
    height: 100px;
    background-color:rgb(16, 14, 17);
    border-radius: 250%;
}
.header_innerWrapper{
    display: flex;

}
.header_avatarContainer{
    flex:1;
    background-color: rgb(15, 179, 83);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;


}
.header_bioContainer{
    position: relative;
    flex: 2;
    background-color: blue;
}
.header_bio{
    padding: 30px;
}
.header_card{
    width: 900px;
     display: flex;
     justify-content: space-between;
     margin: 0 auto;
}
.article_navigation{

display: flex;

}
.article_wrapper{
     max-width: 900px;
      margin: 0 auto;
}
.navigation_item{
    flex:1;
    text-align: center;
    background-color: #0086fd;
    padding: 20px;
    border-radius: 25px;
}
.navigation_item:hover{
    background-color: #0a3459;
    flex:1;
    text-align: center;
    min-width: 50px;

}

</style>