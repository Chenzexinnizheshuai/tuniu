<template>
    <div>
        im one one oneoneoenoenoen
        <test></test>
    </div>
</template>
<script>
import test from './test2'
import bus from '@LIB/bus.js'
export default {
    name : 'test1',
    components : {
        Test : test
    },
    mounted(){
        function fun(o){
            console.log(554)
            alert(o)
        }
        this.$on('fatherfun',fun)
    }
    
}
</script>