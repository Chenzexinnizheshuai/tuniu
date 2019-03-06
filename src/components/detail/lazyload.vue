<template>
    <div>
        <!-- <img v-for='(item,index) in imgsrc' :src="item.imgUrl" :key="index"/>
			{{imgsrc}} -->
        <div v-for='(item,index) in imgsrc' :key="index">
            <my-image  :url="item.imgUrl">

            </my-image>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
import image from './image'
export default {
    data : function(){
        return {
            imgsrc: []
        }
    },
    created(){
        var that = this
        axios.get('https://m.tuniu.com/mapi/home/getProductList?cityCode=702&moduleId=20493294&currentPage=1&pageLimit=10')
        .then(function(res){
            var {data:{data:{products}}} = res
            // console.log(products)
            that.imgsrc = products
            // console.log(that.imgsrc)
                        // var imglist = document.querySelectorAll("img.imglist")
            // var arrimg = imglist

            //在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
            that.$nextTick(()=>{
                    document.addEventListener('scroll',that.throttle())
                    document.addEventListener('resize',that.throttle())
                    that.throttle()()
                }
            )

        })	

    },
    mounted(){
    },
    methods : {
        //节流
        throttle(){
            var flag = true;
            return function(){
                if(flag){
                    setTimeout(() => {
                        flag = true
                    }, 100);
                    flag = false
                    this.lazyload()
                }
            }.bind(this)
           
            

        },
        lazyload(){
            
            var that = this
            var imgbox = document.querySelectorAll(".imgbox")
           
            var thearr = [].slice.call(imgbox)
            // console.log([].slice.call(imgbox), [].slice.call(imgbox) instanceof Array)
            thearr.forEach(element => {
                var ele = element.getBoundingClientRect()
                if(ele.top<window.innerHeight){
                    element.childNodes[0].src=element.getAttribute('data-src')
                }
                console.log()
            });
            console.log(thearr)
        }
    },
    components : {
        MyImage : image
    }
}
</script>
