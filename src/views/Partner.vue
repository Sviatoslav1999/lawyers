<template>
  <div>
    <Header />
    <h1>Become a partner</h1>
    <div class="wrapper_modal">
      <div class="wrapper_innerModal">
        <div class="container">
          <label for="name"><b>Name</b></label>
          <input
            class="inputFiled"
            type="text"
            placeholder="Enter Name"
            name="name"
            v-model="name"
            required
          />

          <label for="surname"><b>Surname</b></label>
          <input
            class="inputFiled"
            type="text"
            placeholder="Enter Surname"
            name="surname"
            v-model="surname"
            required
          />

          <label for="experince"><b>Experince</b></label>
          <input
            class="inputFiled"
            type="number"
            step="0.5"
            placeholder="Enter experince"
            name="experince"
            v-model="experince"
            required
          />

          <label for="price"><b>Price</b></label>
          <input
            class="inputFiled"
            type="number"
            placeholder="Enter Price"
            name="price"
            v-model="price"
            required
          />

          <button
            v-show="!getIsLawyerAdded"
            type="submit"
            v-on:click="onSubmit"
          >
            Become a partner
          </button>
          <p
            v-show="getIsLawyerAdded"
            style="text-align:center;color:green;font-weight:600"
          >
            Your are welcome as our partner
          </p>
          <router-link v-show="getIsLawyerAdded" class="link" to="/"
            >Go Home</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header/Header";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Partner",
  components: {
    Header
  },
  data() {
    return {
      experince: "",
      name: "",
      surname: "",
      price: ""
    };
  },
  computed: {
    ...mapGetters(["getIsLawyerAdded"])
  },
  destroyed() {
    this.$store.commit("setLawyerStatus", false);
  },
  methods: {
    ...mapMutations(["setLawyerStatus"]),
    onSubmit() {
      const partner = {
        name: this.name,
        surname: this.surname,
        experince: this.experince,
        price: this.price
      };
      console.log(partner);
      this.$store.dispatch("setNewLawyer", partner);
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
}
.link {
  display: block;
  color: black;
  text-decoration: none;
  width: 30%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: royalblue;
}
</style>
