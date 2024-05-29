<template>
   <div>
       <section>
         <div class="home_products_2">
           <div class="tab_btns_list">
               <span class="tab_btn active-tab" >KHUYẾN MÃI</span>
               <span class="tab_btn" >ĐỒNG HỒ NAM</span>
               <span class="tab_btn" >ĐỒNG HỒ NỮ</span>
           </div>
           </div>
       <div class="home_products_new_container">
           <div class="home_products_new_list">
               <item-product
               v-for="item in products"
               v-bind:key="item.id"
               v-bind:products="item"
               ></item-product>
           </div>   
      </div>
       </section>
   </div>
</template>

<script>

import { mapState } from 'vuex';
import ItemProduct from './ItemProduct.vue';
import state from '../store/state';

export default {
   name:'list-item-products',
   components:{
       ItemProduct
   },
   computed: {
       ...mapState({
           'products' : 'watches'
       })
   }
}
</script>

<style>

</style>
