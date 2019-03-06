<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    provide(){
        return {
            LL : 1314520,
            app : this
        }
    },
    data(){
        return {
            mama : "mother"
        }
    }
}
</script>
<style lang="scss">

</style>
