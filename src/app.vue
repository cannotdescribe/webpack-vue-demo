<template>
    <div id="add">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from "./todo/head.vue"
    import Todo from "./todo/todo.vue"
    import Footer from "./todo/footer.jsx"

    export default {
        components: {
            Header,
            Footer,
            Todo
        }
    }
</script>
<!-- 指定stylus， scoped 是为了让这段样式只在该组件内生效  -->
<style lang="stylus" scoped>
    #app{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #999
        opacity .6
        z-index -1
        width 100%
        height 100%
    }
</style>

