<template>
<div>
    <div v-for="(item,index) in books" :key="index">
        <slot name="one" :sth="item">
        </slot>
    </div>
</div>
   
</template>
<script>
export default {
    props : {
        books : {
            default : [1,2,3,4,5]
        }
    },
    created(){
        // alert(5555)
    }
}
</script>
<style lang="scss">

</style>


