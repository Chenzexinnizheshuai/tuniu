export default {
    methods : {
        dispatch(componentName,eventName,params){
            //我们在升级vue2.0的时候因为很多api改变，尤其是将vue1.0里面的dispatch废弃掉，作者之所以要废弃dispath是因为它不符合他的设计思想，并不是因为它不好用，所以我当时就负责手写了一个dispatch
            console.log(arguments)
            let parent = this.$parent || this.$root
            let name = parent.$options.name;
            while(parent&&(!name||name!==componentName)){
                parent = parent.$parent;
                if(parent){
                    name = parent.$options.name
                }
            }
            if(parent){
                parent.$emit(eventName,params)
                console.log(parent)
            }

        }

    }
}