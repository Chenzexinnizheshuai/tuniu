<template>
    <ul style="z-index:1">
        <li :key='index' v-for="(item,index) in arr[theindex]" >
            <div ref="lala" class="theitem" :data-api="item.api" @touchstart="()=>secindexchange(index,item.api)" :class='{"active" : index==pdsecindex}'>
                {{item.name}}
            </div>
        </li>
    </ul>
</template>
<script>
import bus from '@LIB/bus'
import {createNamespacedHelpers} from 'vuex'
const {mapActions,mapState,mapMutations} = createNamespacedHelpers('pdhstore')
export default {
    props : {
        arr:{default : 1}
    },
    data(){
        return {
            //一级菜单的角标
            theindex : 0,
        }
    },
    created(){
        console.log("create")
    },
    mounted() {
        bus.$on('secindexchange',(index)=>{
            this.theindex = index
        })
       
    },
    watch :{
        theindex : function(){
            console.log('999999999999',this.theindex)
            this.$store.dispatch({
               type : 'pdhstore/newpdlist',
               page : 1,
               apiid : this.pdsec[this.theindex][0].api
            })
       

        }
    },
    updated(){
        
    },
    computed :{
        ...mapState(['pdsecindex','apiid','apipage','pdlistdata','pdsec'])
    },
    methods : {
        ...mapMutations(['PDLIST_API_PAGE_NUM']),
        secindexchange(index,apiid){
            // this.theindex = index
            this.$store.commit({
                type : 'pdhstore/PDSECLIST',
                payload : {
                    num : index
                }
            })
            this.$store.commit({
                type : 'pdhstore/NEWAPIID',
                payload : {
                    id : apiid
                }
            })
            this.PDLIST_API_PAGE_NUM();
             this.$store.dispatch({
               type : 'pdhstore/newpdlist',
               page : this.apipage,
               apiid : apiid
           })
        }
    }
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
            .theitem.active{
                border: 1px solid green;    
                color: green;            
            }
        }
    }
</style>


