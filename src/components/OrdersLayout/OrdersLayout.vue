<template>
  <div class="main_wrapper">
    <div class="card_wrapper" v-if="getUser.userOrders !== undefind">
      <div class="card_item">
        <div class="card_avatar">
          <img class="card_img" src="../../assets/avatar.png" alt="avatar" />
        </div>
        <div class="card_bio">
          <h2 class="card_bio_title">Name: {{ data.name }}</h2>
          <p class="card_bio_surname">Surname: {{ data.surname }}</p>
          <p class="card_bio_experience">Experience: {{ data.experience }}</p>
          <p class="card_bio_price">Price: {{ data.price }}</p>
        </div>
        <button class="card_button" v-on:click="deleteOrder">
          Відмінити замовлення
        </button>
      </div>
    </div>
    <p v-else class="empty_text">У вас ще немає замовлень</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllOrders", "getUser"])
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.data = this.getUser.userOrders;
    console.log(this.data, "D-A-T-A");
  },
  methods: {
    deleteOrder() {
      this.$store.dispatch("deleteOrder");
      this.data = [];
    }
  }
};
</script>
<style scoped>
.empty_text {
  text-align: center;
  font-size: 30px;
}
.main_wrapper {
  max-width: 900px;
  margin: 0 auto;
}
.card_img {
  width: 60px;
  height: 60px;
  border-radius: 10%;
  text-align: justify;
}
.card_avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_item {
  display: flex;
  align-items: center;
}
.card_bio {
  margin-left: 40px;
}
.card_button {
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
