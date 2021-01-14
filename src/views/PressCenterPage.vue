<template>
  <div class="main_wrapper">
    <Header />
    <h1 class="main_title">Прес-центр</h1>
    <div class="cards_wrapper">
      <div class="cards_item">
        <div class="card_item_image_conteiner" id="image-1"></div>
        <div class="card_item_description">
          <h2>День захисника України</h2>
          <p>
            14 жовтня відзначають державне свято День захисника України. Його
            запровадив у 2014 році своїм указом тодішній президент Петро
            Порошенко.
          </p>
        </div>
        <div class="card_item_btn_wrapper">
          <button class="card_item_button">
            <a
              href="https://www.radiosvoboda.org/a/news-den-zakhysnyka-ukrayiny/30892292.html"
              target="_blank"
              >Читати далі</a
            >
          </button>
          <span class="card_item_date">14.10.2020</span>
        </div>
      </div>

      <div class="cards_item">
        <div class="card_item_image_conteiner" id="image-2"></div>
        <div class="card_item_description">
          <h2>День юриста України</h2>
          <p>
            День юриста - це свято всіх працівників юридичної сфери. День юриста
            - це державне свято, яке відзначають 8 жовтня. У 2020 році цей день
            припадає на четвер. Це свято не є вихідним днем.
          </p>
        </div>
        <div class="card_item_btn_wrapper">
          <button class="card_item_button">
            <a
              href="https://www.unian.ua/lite/holidays/koli-den-yurista-2020-v-ukrajini-den-yurista-svyato-11164979.html"
              target="_blank"
              >Читати далі</a
            >
          </button>
          <span class="card_item_date">14.10.2020</span>
        </div>
      </div>

      <div class="cards_item">
        <div class="card_item_image_conteiner" id="image-3"></div>

        <div class="card_item_description">
          <h2>
            Компанія SVIAZOR вийшла на 1 місце в світовому рейтингу ефективності
          </h2>
          <p>
            За результатами дослідження ця компанія посіла 1 місце в рейтингу із
            сотні лідерів юридичних компаній України в 2019 році.
          </p>
        </div>
        <div class="card_item_btn_wrapper">
          <button class="card_item_button">
            <a
              href="https://yur-gazeta.com/publications/legal-business-in-ukraine/lideri-rinku-reyting-yuridichnih-kompaniy--2019.html"
              target="_blank"
              >Читати далі</a
            >
          </button>
          <span class="card_item_date">14.10.2020</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header/Header";
export default {
  components: {
    Header
  }
};
</script>
<style lang="css" scoped>
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}
.main_title {
  text-align: center;
  margin: 20px 0 20px 0;
}
.card_item_image_conteiner {
  height: 300px;
  width: 100%;
}
.cards_item {
  width: 100%;
  max-width: 300px;
  background-color: rgba(88, 98, 102, 0.082);
  margin-bottom: 30px;
}
.cards_wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
#image-1 {
  background: url("../assets/logo3.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
#image-2 {
  background: url("../assets/hammer.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
#image-3 {
  background: url("../assets/money.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
h2 {
  font-size: 15px;
  text-align: center;
  font-weight: 700;
  margin-top: 10px;
}
p {
  font-size: 12px;
  letter-spacing: 1px;
  text-align: left;
  font-weight: 600;
}
.card_item_description {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px 0 20px;
}
.card_item_btn_wrapper {
  padding: 0 20px 0 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  display: block;
  font-size: 13px;
}
.card_item_button {
  padding: 15px;
  cursor: pointer;
  font-weight: 600;
  color: #ffffff;
  background-color: rgb(255, 102, 102);
  border: none;
  outline: none;
  border-radius: 30px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
}
.card_item_button > a {
  text-decoration: none;
  color: #ffffff;
}
.card_item_button:hover {
  background-color: #ff0f0f;
}
</style>
