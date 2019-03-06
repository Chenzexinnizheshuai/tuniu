<template>
    <button @click="fun" :class="'color'+color">

    </button>
</template>
<script>
export default {
    props : {
        color : {
            default : ""
        }
    },
    methods : {
        fun(){
            this.$emit("funone",{
                sth : "two"
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    button{
        width: 100px;
        height: 100px;
    }
    .color{
        background: yellow;
    }
    .colorred{
        background: red
    }
    .colorblue{
        background : blue;
    }
</style>

