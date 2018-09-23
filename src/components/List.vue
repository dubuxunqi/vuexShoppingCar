<template>
    <div class="list">
        <mt-header fixed title="列表"></mt-header>
        <table>
            <tr>
                <td width="10%">id</td>
                <td width="30%">名称</td>
                <td width="30%">价格</td>
                <td width="30%">操作</td>
            </tr>
            <tr v-for="item in arr">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td><mt-button @click="addGoods(item)" size="small" type="primary">加入购物车</mt-button></td>
            </tr>
        </table>
    </div>
</template>
<style scoped>
    .list table{width: 100%;border-collapse: collapse;}
    .list table tr td{border: 1px solid #dcdcdc;height: 40px;}
</style>
<script>
    import {mapActions} from 'vuex'
    export default{
        name:"List",
        data(){
            return {
                arr:[
                    {id:22,name:"小炒肉",price:"￥25.00"},
                    {id:13,name:"皮蛋瘦肉粥",price:"￥13.00"},
                    {id:36,name:"凉皮",price:"￥15.00"},
                    {id:19,name:"肉夹馍",price:"￥10.00"},
                    {id:28,name:"干锅鸭头",price:"￥205.00"},
                ]
            }
        },
        computed:{
            
        },
        methods:{
            ...mapActions(['addGoods'])

        }
    }
</script>