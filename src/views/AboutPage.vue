<template>
<div>
    <Header/>
<h1>Команда</h1>
<div class="card_wrapper">
     <div class="card_item">
         <div class="card_item_image" id="card_portret_first">
         </div>
     <div class="card_description">
    <h2 class="card_description_title">Юрій Сафонський</h2>
    <p>45років, Голова Компанії, старший партнер</p>
         </div>    
     </div>
     <div class="card_item">
         <div class="card_item_image" id="card_portret_second">
         </div>
     <div class="card_description">
        <h2 class="card_description_title">Василь Демченко</h2>
        <p>31рік, Адвокат, керуючий кримінальною практикою</p>
         </div>    
     </div>
    </div> 
    </div>
</template>
<script>
import Header from '../components/Header/Header'
export default {
    components:{
        Header
    }
}
</script>
<style  style="css" scoped>
.card_wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.card_item {
    background: rgb(134, 121, 121);
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-height: 400px;
    max-width: 1000px;
    margin-bottom: 40px;
}
.card_item_image {
    flex:1 ;
    height: 300px;
    width: 300px;
}
#card_portret_second{
    background: url('../assets/portret2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
#card_portret_first{
    background: url('../assets/portret1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.card_description_title{
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    text-align: center;
}
.card_description {
    flex:2;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    text-align: left;
    color: white;
}

</style>