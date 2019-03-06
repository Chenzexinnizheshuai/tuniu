<template>
    <div class="imgbox" :data-src="url">
        <img/>
    </div>
</template>
<script>
export default {
    props:{
        url : {
            type : String,
            required : true
        }
    },
    mounted(){

    }
}
</script>
<style>
    .imgbox{
        width: 100%;
        height: 500px;
        overflow: hidden;
        border: 5px solid rebeccapurple;
    }
</style>
