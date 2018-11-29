<template>
    <div>
        <!-- <m-header></m-header> -->
        <!-- <m-main></m-main> -->
        <!-- <m-adv></m-adv> -->
        <router-view></router-view>
    </div>
</template>
<script>
import header from '@C/head/head'
// import main from '@C/main/main'
import adv from '@C/main/advertising/advertising'

export default {
    components : {
        MHeader : header,
        MAdv : adv
        // MMain : main
    }
}
</script>
<style lang="scss">

</style>
