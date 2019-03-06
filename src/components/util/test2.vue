<template>
    <div @click="fun">
        im two im two two two two    
    </div>
</template>
<script>
import bus from '@LIB/bus.js'
import dispatch from '@LIB/dispath.js'

export default {
    mixins : [dispatch],
    methods : {
        fun(){
            
            // bus.$emit("fatherfun",'chenzexin')
            this.dispatch('test1','fatherfun','555666')
            // console.log(dispatch)
            
        }
    }
}
</script>