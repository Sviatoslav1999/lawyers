<template>
  <header class="header_wrapper">
    <div class="header_logo_container">
      <img src="../../assets/logo2.svg" alt="logo" />
    </div>
    <nav class="navigation">
      <ul class="header_menu_wrapper">
        <li class="header_menu_item" v-for="item in nav" :key="item.icon">
          <router-link class="link" :to="item.link">{{
            item.text
          }}</router-link>
        </li>
        <li class="header_menu_item">
          <router-link class="link" v-if="getuserIsLoggedIn" to="/chat"
            >Chat</router-link
          >
        </li>
        <div class="header_menu_item" v-if="!getuserIsLoggedIn">
          <li class="header_menu_item">
            <router-link class="link" to="/login">Ввійти</router-link>
          </li>
          <li class="header_menu_item">
            <router-link class="link" to="/register">Реєстрація</router-link>
          </li>
        </div>
      </ul>
      <div class="header_menu_account" v-if="getuserIsLoggedIn">
        <router-link class="link_account" to="/account">
          <img src="../../assets/account.png" alt="avatar" />
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
// import VueRouter from 'vue-router'
import { mapGetters } from "vuex";

export default {
  name: "App",
  //   components: {
  //       VueRouter
  //   },
  computed: {
    ...mapGetters(["getUser", "getuserIsLoggedIn"])
  },
  data() {
    return {
      dialog: false,
      nav: [
        {
          icon: "home",
          text: "Про нас",
          link: "/",
          title: "Back to Home page",
          active: true
        },
        {
          icon: "info",
          text: "Команда",
          link: "/about",
          title: "About this demo",
          active: false
        },
        {
          icon: "contacts",
          text: "Контакти",
          link: "/contacts",
          title: "Our Contact info",
          active: false
        },
        {
          icon: "pressCenter",
          text: "Прес-центр",
          link: "/press-center",
          title: "Our Contact info",
          active: false
        },
        {
          icon: "Partner",
          text: "Стати партнером",
          link: "/become-partner",
          title: "Стати партнером",
          active: false
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.header_logo_container {
}
.header_logo_container > img {
  width: 30px;
}
.navigation {
  display: flex;
}
.link > img {
  width: 20px;
}
img {
  width: 100%;
  height: auto;
  display: block;
}
.header_wrapper {
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
  background-color: #061e8a;
}
.header_menu_wrapper {
  list-style-type: none;
}
.header_menu_item {
  display: inline;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
}
.header_menu_account {
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_menu_item:hover {
  border-bottom: 1px solid black;
}
.link {
  text-decoration: none;
  color: yellow;
}
.link_account {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: yellow;
}
.link_account > img {
  width: 30px;
}
</style>
