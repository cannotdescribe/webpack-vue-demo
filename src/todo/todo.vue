<template>
    <section class="real-app">
        <input type="text" class="add-input"
        autofocus="autofocus"
        placeholder="接下去要做什么"
        @keyup.enter="addTodo"/>
        <!-- v-on:keyup="addTodo" -->
        <Item :todo="todo" v-for="todo in todos" :key="todo.id"/>
        <Tabs filter="all"></Tabs>
    </section>
</template>

<script>
    import Item from "./item.vue"
    import Tabs from "./tabs.vue"
    var id = 0;
    export default{
        data(){
            return {
                todos:[],
                filter:"all"
            }
        },
        components:{
            Item, Tabs
        },
        methods: {
            addTodo(ev){
                var _this = this;
                this.todos.unshift({
                    id: id++,
                    content: ev.target.value.trim(),
                    completed: false,
                    deleteMethod(){
                        _this.todos.splice(0,1);
                    }
                })
                ev.target.value ="";
            }
        }
    }
</script>

<style lang="stylus">
    .real-app{
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }
    .add-input{
        position: relative
        margin: 0;
        width: 100%;
        font-size: 24px
        font-family inherit
        font-weight: inherit
        line-height 1.4em
        border 0
        outline none
        color inherit
//        padding 6px
//        border 1px solid #999
//        box-shadow insert 0 -1px 5px 0 rgba(0, 0,0,0.09)
        box-sizing: border-box
        font-smoothing  antialiased
        padding 16px 16px 16px 60px
        border none
        box-shadow insert 0 -2px -1px rgba(0,0,0,0.09)

    }
</style>