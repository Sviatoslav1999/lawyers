export default {
    state: {
       orders:[]
    },
    getters:{
        getAllOrders(state){
            return state.orders
        }
    },
    mutations:{
        setNewOrder(state,payload){
            state.orders.push(payload)
        }
    },
    actions:{

    }
}