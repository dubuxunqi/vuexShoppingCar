<template>
    <div class="car">
        <mt-header fixed title="购物车"></mt-header>
        <table>
            <tr>
                <td width="10%">id</td>
                <td width="20%">名称</td>
                <td width="20%">价格</td>
                <td width="30%">数量</td>
                <td width="20%">操作</td>
            </tr>
            <tr v-if="!arr.length">
                <td colspan="5">购物车很空</td>
            </tr>
            <tr v-for="(item,index) in arr" v-else>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button @click="reduceNum(index)">-</button>
                    <input v-model="item.num" type="text" name="">
                    <button @click="addNum(index)">+</button>
                </td>
                <td><mt-button @click="deleteGoods(index)" size="small" type="danger">删除</mt-button></td>
            </tr>
            <tr>
                <td colspan="5">总计：<span>{{totalMoney}}</span></td>
            </tr>
        </table>
    </div>
</template>
<style scoped>
    .car table{width: 100%;border-collapse: collapse;}
    .car table tr td{border: 1px solid #dcdcdc;height: 40px;}
    .car table tr td input{width: 30px;text-align: center;}
</style>
<script>
    import {mapState,mapActions,mapGetters} from 'vuex'
    export default{
        name:"Car",
        data(){
            return {
            }
        },
        methods:{
            ...mapActions(['addNum','reduceNum','deleteGoods'])
        },
        computed:{
           ...mapGetters(['totalMoney']),
           ...mapState(['arr'])
        }
    }
</script>