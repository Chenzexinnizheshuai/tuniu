<template>
    <div>
        <i-button size="large" color="blue" @on-click="fun"  time="6">
            <!-- asdadasdasd -->
        </i-button>

        {{$route.query.name}}
        <!-- <router-link 
            tag="div"
            :to="'/'"
        >gogogogogogogogogo</router-link> -->
        <component :is="com" v-if="show" v-on:click="fun1"></component>
        <div v-on:click="fun1">
            asdsad
        </div>
        <i-button-two color="red" @funone="fun1">

        </i-button-two>
        <router-view :books="books">
            <div slot="l" slot-scope="kkk">
                54545
                {{kkk.c}}
            </div>
            <div slot="one" slot-scope="one">
                {{one.sth}}
            </div>
        </router-view>
       
        <div @click="gotoload">
            gogogogogoog 
            <!-- 去懒加载页面 -->
        </div>
        <my-form></my-form>
    </div>
</template>
<script>
import button from '../util/button'
import form from '../util/form'
import buttontwo from '../util/buttontwo'
import test1 from '../util/test1'
import test2 from '../util/test2'
import one from './one'
import two from './two'
var theone = {
    template : `<h1>onononononone</h1>`
}
export default {
    provide:{
        name : "陈泽鑫",
    },

    data(){
        return {
            chen : "zhenzhuio",
            com : "Comone",
            show : false,
            books : [98,7,6,4,54,54]
        }
    },
    beforeRouteEnter (to, from, next) {
        // ...
        next(vm=>vm.fun1(vm))
    }
    ,
    components : {
        IButton : button ,
        IButtonTwo : buttontwo,
        Comone : test1,
        Comtwo : test2,
        MyForm : form
    },
    methods : {
        fun(a){
            this.com = this.com!="Comone"?"Comone":"Comtwo";
            // this.router.push({name:"home"})
            this.$router.push({name:"one",query:{a:55}})
            
        },
        fun1(a){
            this.$router.push({name:a.sth})
        },
        gotoload(){
            this.$router.push({name:"lazyload"})
        }
    },
    created(){
        this.$nextTick(()=>{
            this.show = true
        })
        
    }
}
</script>
<style lang="scss">

</style>


