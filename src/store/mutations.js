import state from './states'
export default{
    addGoods(state,info){ 
        let isOwn = state.arr.some(function(item){
            if(item.id == info.id){
                item.num++;
                return true;
            }else{
                return false;
            }
        });

        if(!isOwn){
          state.arr.push({id:info.id,name:info.name,price:info.price,num:1});
        }  
    },
    addNum(state,index){
        state.arr[index].num++;
    },
    reduceNum(state,index){
        if(state.arr[index].num == 0){
            state.arr.splice(index,1);
        }else{
           state.arr[index].num--; 
        }
    },
    deleteGoods(state,index){
        state.arr.splice(index,1);
    }
}