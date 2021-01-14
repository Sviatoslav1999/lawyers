<template>
  <div class="wrapper">
    <Header />
    <header>
      <h1>Chat with Friend!</h1>
      <router-link class="links" to="/account">Back to Account</router-link>
    </header>

    <section>
      <main>
        <div
          v-for="(msg, index) in messages"
          v-bind:key="'index-' + index"
          :class="['message', sentOrReceived(msg.userUID)]"
        >
          <div class="container_chat">
            <span style="color:white">{{ msg.displayName }}</span>
            <p>{{ msg.text }}</p>
          </div>
        </div>

        <div ref="scrollable"></div>
      </main>

      <form v-on:submit.prevent="sendMessage">
        <input
          v-model="message"
          type="text"
          placeholder="Enter your message!"
        />
        <button :disabled="!message" type="submit">📩</button>
      </form>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.db
      .collection("messages")
      .orderBy("createdAt")
      .onSnapshot(querySnap => {
        this.messages = querySnap.docs.map(doc => doc.data());
      });
  },
  data() {
    return {
      user: firebase.auth().currentUser,
      db: firebase.firestore(),
      message: "",
      messages: []
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
    sentOrReceived(userUID) {
      return userUID === this.getUser.userId ? "sent" : "received";
    },
    async sendMessage() {
      console.log(this.getUser);
      const messageInfo = {
        userUID: this.getUser.userId,
        displayName: this.getUser.name,
        text: this.message,
        createdAt: Date.now()
      };
      await this.db.collection("messages").add(messageInfo);
      this.message = "";
      this.$refs["scrollable"].scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
.links {
  text-decoration: none;
  color: white;
  padding: 20px;
  background-color: yellowgreen;
  cursor: pointer;
}
.container_chat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.wrapper {
  text-align: center;
  max-width: 728px;
  margin: 0 auto;
  header {
    background-color: #181717;
    height: 10vh;
    min-height: 50px;
    color: white;
    position: fixed;
    width: 100%;
    max-width: 728px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    padding: 10px;
    box-sizing: border-box;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-color: rgb(40, 37, 53);
    main {
      padding: 10px;
      height: 75vh;
      margin: 10vh 0 10vh;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      &::-webkit-scrollbar {
        width: 0.25rem;
      }
      &::-webkit-scrollbar-track {
        background: #1e1e24;
      }
      &::-webkit-scrollbar-thumb {
        background: #6649b8;
      }
    }
    form {
      height: 10vh;
      position: fixed;
      bottom: 0;
      background-color: rgb(24, 23, 23);
      width: 100%;
      max-width: 728px;
      display: flex;
      font-size: 1.5rem;
      button {
        width: 20%;
        background-color: rgb(56, 56, 143);
      }
      input {
        line-height: 1.5;
        width: 100%;
        font-size: 1.5rem;
        background: rgb(58, 58, 58);
        color: white;
        outline: none;
        border: none;
        padding: 0 10px;
      }
    }
  }
  button {
    background-color: #282c34; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.25rem;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  button,
  input {
    color: #fff;
    border: none;
  }
  p {
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: white;
    text-align: center;
  }
  .message {
    display: flex;
    align-items: center;
    &.received {
      p {
        background: #e5e5ea;
        color: #000;
      }
    }
    &.sent {
      flex-direction: row-reverse;
      p {
        color: #fff;
        background: #0b93f6;
        align-self: flex-end;
      }
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 2px 5px;
    }
    p {
      max-width: 500px;
      margin-bottom: 12px;
      line-height: 24px;
      padding: 10px 20px;
      border-radius: 25px;
      position: relative;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
