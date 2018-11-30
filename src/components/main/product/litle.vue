<template>
    <ul style="z-index:1">
        <li :key='index' v-for="(item,index) in arr[theindex]">
            <div class="theitem">
                {{item}}
            </div>
        </li>
    </ul>
</template>
<script>
import bus from '@LIB/bus'
export default {
    props : {
        arr:{default : 1}
    },
    data(){
        return {
            theindex : 0
        }
    },
    mounted() {
        bus.$on('secindexchange',(index)=>{
            this.theindex = index
        })
    },
}
</script>
<style lang="scss" scoped>
    ul{
        /* display: flex; */
        flex-wrap: wrap;
        background: white;
        padding-top: 10px;
        padding-bottom: 20px;
        height: 90px;
        /* border-top: 1px solid #666; */
        li{
            display: inline-block;
            flex-grow: 1;
            width: 25%;
            /* margin: 5px; */
            height: 25px;
            padding: 10px;
            .theitem{
                background: #f6f6f8;
                border: 1px solid transparent;
                text-align: center;
                color: #666;
                height: 26px;
                line-height: 26px;
            }
        }
    }
</style>


