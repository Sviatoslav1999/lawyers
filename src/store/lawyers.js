import firebase from 'firebase/app'
export default {
    state: {
       lawyers:[]
    },
    getters:{
        getAllLawyer(state){
            return state.lawyers
        }
    },
    mutations:{
        setAllLawyers(state,payload){
            return state.lawyers = payload
        }
    },
    actions:{
        async getDataOfAllLawyer({commit}){
            await firebase.firestore()
            .collection('lawyer')
            .get()
            .then((snapshot) => {
                const lawyer = []
                console.log(snapshot.docs,'data')
                snapshot.docs.forEach(doc => {
                    lawyer.push(doc.data())
                })
                console.log(lawyer)
                commit('setAllLawyers',lawyer)
            
            }).catch((err) => {
                console.log(err,'Error')
            })
        }
    }
}