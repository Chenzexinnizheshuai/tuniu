import {getsecdata} from '@API/getdata'
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
}
export default actions