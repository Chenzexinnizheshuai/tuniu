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
    pdlist({commit},{page}){
        console.log(page)
          getpdlist(page).then((res)=>{
                commit({
                    type : 'PDLIST',
                    payload : res.data.data.products
                })
            })
    }
}
export default actions