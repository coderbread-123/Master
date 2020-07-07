<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <cart-list :cart-list="cartList"/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
 //在vuex里面导入
  import { mapGetters } from "vuex"

  export default {
    name: "Cart",
    components: {
    	NavBar,
      CartList,
      CartBottomBar
    },
    data(){
      return{
      }
    },
    computed:{
       // vuex的mapgetters方法转成计算属性，仅仅是将store的getters映射计算属性
      ...mapGetters(["cartList","cartLength"])
    },
    created() {

    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
