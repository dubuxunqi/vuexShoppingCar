export default{
    addGoods({commit},params){
        commit('addGoods',params);
    },
    addNum({commit},params){
        commit('addNum',params);
    },
    reduceNum({commit},params){
        commit('reduceNum',params);
    },
    deleteGoods({commit},params){
        commit('deleteGoods',params);
    }
}