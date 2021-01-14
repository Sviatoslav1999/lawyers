<template>
    <article class="article_wrapper">
        <div class="title_wrapper">
        <h1 class="article_title">
            Наші послуги є найкращими
            </h1>
            <p class="article_subtitle">
                Ми працюємо у всьому світі на високому рівні, а також ми відрізняємося індивідуальним підходом до кожного клієнта та вузьким профілем діяльності наших юристів
                </p>
        </div>

    </article>
</template>
<script>
export default {

}
</script>
<style lang= "css" scoped>
.article_wrapper{
    min-height: 90vh;
    background: url("../../assets/Picture1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}
.article_title{
    font-size: 50px;
    font-weight: 700;
    color:black;
}
.article_subtitle{
    font-size:20px;
    font-weight:400;
    color:black;
}
.title_wrapper{
    max-width: 600px;
}
</style>