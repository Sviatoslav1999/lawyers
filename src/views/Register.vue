<template>
  <div>
    <Heading />
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

          <label for="Phone"><b>Phone</b></label>
          <input
            class="inputFiled"
            type="number"
            placeholder="Enter Phone"
            name="phone"
            v-model="phone"
            required
          />

          <label for="uname"><b>Email</b></label>
          <input
            class="inputFiled"
            type="email"
            placeholder="Enter email"
            name="uemail"
            v-model="email"
            required
          />

          <label for="psw"><b>Password</b></label>
          <input
            class="inputFiled"
            type="password"
            placeholder="Enter Password"
            name="psw"
            v-model="password"
            required
          />

          <button type="submit" v-on:click="onSubmit">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Heading from "../components/Header/Header";
import { mapGetters } from "vuex";
export default {
  components: {
    Heading
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      phone: "",
      surname: "",
      image: ""
    };
  },
  computed: {
    ...mapGetters(["getIsUserSaved"])
  },
  watch: {
    getIsUserSaved(val) {
      console.log(val);
      this.email = "";
      this.password = "";
      this.name = "";
      this.phone = "";
      this.surname = "";
      this.$router.push("/account");
    }
  },
  methods: {
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password,
        name: this.name,
        phone: this.phone,
        surname: this.surname
      };
      console.log(user);
      this.$store.dispatch("registerUser", user);
    }
  }
};
</script>
<style>
.wrapper_innerModal {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
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
  background-color: #4caf50;
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

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
