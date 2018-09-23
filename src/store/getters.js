import state from './states'
export default{
    totalMoney(state){
        let money = 0;
        for(let i =0;i<state.arr.length;i++){
            money += parseInt(state.arr[i].price.substring(1))*state.arr[i].num;
        }
        return money;
    }
}