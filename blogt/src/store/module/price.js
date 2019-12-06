

export default{
    state:{
        data:[
            {name: '苹果', price: 20},
            {name: '栗子', price: 40},
            {name: '草莓', price: 60},
            {name: '西虹市', price: 801},
            {name: '西虹市1', price: 802},
            {name: '西虹市2', price: 803},
            {name: '西虹市3', price: 804},
            {name: '西虹市4', price: 805},
        ],
        num:'44',
        browserRecord:[],
    },
    getters:{
        delete:(state) => {
            // return state.data.pop();
        }
    },
    mutations: {
        add(state,payload){
            let newPrice = state.data.forEach( product => {
                product.price += payload
            })
        },
        minusPrice2 (state, payload ) {
            let newPrice = state.data.forEach( product => {
                product.price -= payload
            })
        },
        removeData(state){
            return state.data.pop();
        },
        updateBrowserRecord(state, browserRecord) {
            state.browserRecord = browserRecord;
        },
    },
    actions: {
        addAsync( context, payload ) {
            setTimeout( () => {
              context.commit( 'add', payload ); //context提交
            }, 1000)
        },
        minusPrice2Async( context, payload ) {
            setTimeout( () => {
              context.commit( 'minusPrice2', payload ); //context提交
            }, 1000)
        },
        removeDataAsync( context ) {
            setTimeout( () => {
              context.commit( 'removeData' ); //context提交
            }, 1000)
        },
        updateBrowserRecord({ commit }, browserRecord) {
            commit('updateBrowserRecord', browserRecord);
        },
    }
} 