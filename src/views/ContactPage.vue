<template>
    <div>
        <Header/>
        <article class="article_wrapper">
            <div class="cards_wrapper">
                <div class="card_item">
                    <div class="card_icon_wrapper">
                        <img class="card_item_icon" src="../assets/icons/contacts.svg">
                    </div>
                    <div class="card_item-description">
                        <h4 class="card_item_title">Телефон</h4>
                        <span class="card_item_subtitle">0(800) 545 61 22</span>
                    </div>
                </div>

                <div class="card_item">
                         <div class="card_icon_wrapper">
                         <img class="card_item_icon" src="../assets/icons/location.svg">
                         </div>
                    <div class="card_item-description">
                        <h4 class="card_item_title">Адреса</h4>
                        <span class="card_item_subtitle">м.Львів, вул.Генерала Чупринки 2</span>
                    </div>
                </div>

                <div class="card_item">
                     <div class="card_icon_wrapper">
                    <img class="card_item_icon" src="../assets/icons/email.svg">
                     </div>
                    <div class="card_item-description">
                        <h4 class="card_item_title">Email</h4>
                        <span class="card_item_subtitle">info@sviazor.com</span>
                    </div>
                </div>

                <div class="card_item">
                     <div class="card_icon_wrapper">
                    <img class="card_item_icon" src="../assets/icons/chronometer.svg">
                     </div>
                    <div class="card_item-description">
                        <h4 class="card_item_title">Графік роботи</h4>
                        <span class="card_item_subtitle">10:00 - 21:00</span>
                    </div>
                </div>
            </div>
        </article>
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
<style lang="css" scoped>
h1,h2,h3,h4{
    margin: 0;
    padding: 0;
}
.cards_wrapper{
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    flex-wrap: wrap;
    align-items: center;
}
.article_wrapper{
    height: 100%;
    min-height: 90vh;
    background: url('../assets/contactUsBackground.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card_item_icon{
    widows: 30px;
    height: 30px;
}
.card_item{
    background:	 rgba(0, 153, 204 , 0.3);
    padding: 30px;
    width: 250px;
    margin-bottom: 20px;
    display: flex;
}
.card_item-description{
    color:white;
}
.card_icon_wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}
.card_item_title{
    font-size: 20px;
    margin-bottom: 5px;
    text-align: left;
}
.card_item_subtitle{
    font-size: 10px;
    text-align: left;
}
</style>