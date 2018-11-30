<template>
    <article>
        <m-header></m-header>
        <top-swiper></top-swiper>
        <m-destination></m-destination>
        <p-header class="p_header"></p-header>
    </article>
</template>
<script>
import TopSwiper from './swiper/main_top_swiper'
import destination from './destination/destination'
import MHeader from '../head/head'
import PHeader from './product/prd'
import MLHead from './product/litle'
export default {
    components :{
        TopSwiper : TopSwiper,
        MDestination : destination,
        MHeader : MHeader,
        PHeader,
    }
}
</script>
<style lang="scss">
    .p_header{
        margin-top: 10px;
        position: sticky;
        top : 50px;
    }
</style>


