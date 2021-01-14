import firebase from "firebase/app";
export default {
  state: {
    user: null,
    userID: null,
    isUserSaved: false,
    isLoggedIn: false,
    isUpdateModalOpen: false,
    isLawyerAdded: false
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    checkUser(state) {
      return state.user !== null;
    },
    getIsUserSaved(state) {
      return state.isUserSaved;
    },
    getuserIsLoggedIn(state) {
      return state.isLoggedIn;
    },
    getUserId(state) {
      return state.userID;
    },
    getModalState(state) {
      return state.isUpdateModalOpen;
    },
    getIsLawyerAdded(state) {
      return state.isLawyerAdded;
    }
  },
  mutations: {
    decrementMoney(state, payload) {
      state.user.money -= payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    isSaved(state, payload) {
      state.isUserSaved = payload;
    },
    isLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setUserId(state, payload) {
      state.userID = payload;
    },
    setModalState(state, payload) {
      state.isUpdateModalOpen = payload;
    },
    setLawyerStatus(state, payload) {
      state.isLawyerAdded = payload;
    }
  },
  actions: {
    /* eslint-disable-line no-unused-vars */
    async registerUser(
      { commit, dispatch },
      { email, password, name, phone, surname }
    ) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(cred => {
          console.log(cred, "cred");
          firebase
            .firestore()
            .collection("users")
            .doc(cred.user.uid)
            .set({
              name: name,
              surname: surname,
              phone: phone,
              email: firebase.auth().currentUser.email,
              userId: firebase.auth().currentUser.uid
            });
          dispatch("getUserData", cred.user.uid);
          localStorage.setItem("uId", firebase.auth().currentUser.uid);
          commit("setUserId", firebase.auth().currentUser.uid);
          commit("isSaved", true);
          commit("isLoggedIn", true);
        })
        .catch(error => {
          commit("isSaved", false);
          commit("isLoggedIn", false);
          console.log(error, "Registration Failed");
        });
    },

    async loginUser({ commit, dispatch }, { email, password }) {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(cred => {
          localStorage.setItem("uId", cred.user.uid);
          dispatch("getUserData", cred.user.uid);
        });
    },

    async signOutUser({ commit }) {
      await firebase
        .auth()
        .signOut()
        .then(function() {
          commit("isLoggedIn", false);
        })
        .catch(function(error) {
          console.log("An error happened.");
        });
    },

    async getUserData({ commit }, id) {
      await firebase
        .firestore()
        .collection("users")
        .doc(id)
        .get()
        .then(doc => {
          console.log("here");
          commit("setUser", doc.data());
          commit("isLoggedIn", true);
        })
        .catch(err => {
          commit("isLoggedIn", false);
          console.log(err, "Error");
        });
    },

    async updateUserData({ commit, dispatch }, data) {
      console.log(data, "data");
      const { name, surname, phone, uId, email } = data;
      await firebase
        .firestore()
        .collection("users")
        .doc(uId)
        .update({
          name: name,
          surname: surname,
          phone: phone,
          email: email
        })
        .then(() => {
          dispatch("getUserData", uId);
          console.log("Document successfully updated!");
        })
        .catch(error => {
          console.error("Error updating document: ", error);
        });
    },

    async makeAnOrder({ commit, dispatch }, data) {
      await firebase
        .firestore()
        .collection("users")
        .doc(localStorage.getItem("uId"))
        .update({
          userOrders: data
        })
        .then(() => {
          console.log("Document successfully updated!");
          dispatch("getUserData", localStorage.getItem("uId"));
        })
        .catch(error => {
          console.error("Error updating document: ", error);
        });
    },
    async deleteOrder({ commit, dispatch }) {
      await firebase
        .firestore()
        .collection("users")
        .doc(localStorage.getItem("uId"))
        .update({
          userOrders: firebase.firestore.FieldValue.delete()
        })
        .then(() => {
          dispatch("getUserData", localStorage.getItem("uId"));
          console.log("Deleted");
        });
    },
    async setNewLawyer(
      { commit, dispatch },
      { name, surname, experince, price }
    ) {
      await firebase
        .firestore()
        .collection("lawyer")
        .doc()
        .set({
          name: name,
          surname: surname,
          experince: experince,
          price: price
        })
        .then(() => {
          commit("setLawyerStatus", true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
