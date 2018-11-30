import {getsecdata,getpdlist} from '@API/getdata'
const actions = {
    pdsecmenu({commit}){
        getsecdata().then((res)=>{
            const title = res.data.title
            commit({
                type : 'PDHEAD',
                payload : title
            }) 
        })
    },
    pdlist({commit}){
        getpdlist().then((res)=>{
            commit({
                type : 'PDLIST',
                payload : res.data.data.products
            })
        })
    }
}
export default actions