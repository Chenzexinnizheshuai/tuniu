<template>
    <div>
        <p-head :arr="pd" :theindex='index'></p-head>
        <p-l-head :arr='pdsec'></p-l-head>
        <pd-list></pd-list>
    </div>
</template>

<script>
import prdhead from './producthead'
import prdlittlehead from './litle'//商品二级菜单
import pdlist from './pdlist'
import {createNamespacedHelpers} from 'vuex'
const {mapActions,mapGetters,mapState} = createNamespacedHelpers('pdhstore')
export default {
    data(){
        return {
            index : 0
        }
    },
    components : {
        PHead : prdhead,
        PLHead : prdlittlehead,/*二级菜单*/
        PdList : pdlist 
    },
    computed : {
        /**
         * @param {pdsec} 二级菜单数据
         */
        ...mapState(['pdsec','pd']),
        ...mapGetters(['pdheadgetter'])
    },
    created() {
        this.pdsecmenu()
    },
    methods : {
        /**
         * @param {pdsecmenu} 发送ajax请求，请求二级菜单数据
         */
        ...mapActions(['pdsecmenu'])
    },
}
</script>

<style lang="scss">

</style>

