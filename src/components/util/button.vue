<template>
    <button class="default"  :class="size" :disabled="disabled" :style="{backgroundColor : color}" @click="fun">
        <slot>提交</slot>
        <div>{{nowdata}}</div>
    </button>    
</template>
<script>
export default {
    props : {
        size : "",
        color : "",
        myclick : "",
        time : "",
        prpfun : ""   
    },
    inject:['name',"LL","app"],
    created(){
        this.gettime()
        console.log(this.app)
        //我练习册
        function testable(sth) {
            return function(target){
		        target.prototype.isTestable = sth;
            }
		}
		@testable("wawawa")
		class Son{
			constructor(arg){
				this.age = 10
			}
		}
		console.log(new Son().isTestable)  //wwawawa
    },
    mounted(){

    },
    methods : {
        fun(){
            this.$emit("on-click",{
                res : "按钮的消息"
            })
        },
        gettime(){
            this.nowdata = this.time
            var a = this.nowdata
            if(this.nowdata){
                this.timer = setInterval(()=>{
                    if(this.nowdata){
                        this.nowdata = --a
                    }else{
                        clearInterval(this.timer)
                        // this.disabled =false
                    }
                },1000)
            }
            
        }
    },
    data(){
        return {
            disabled :false,
            nowdata : 0
        }
    },
    destroyed(){
        clearInterval(this.timer)
    }
    
}
</script>
<style lang="scss">
    .default{
        background: rebeccapurple;
        width: 100px;
        height: 100px;
    }
    .default.large{
        width: 200px;
        height: 200px;
    }
</style>

