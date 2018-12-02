import {PDHEAD,PDLIST} from './type'
const mutation = {
    [PDHEAD](state,{payload}){
        state.pdsec = payload
    },
    [PDLIST](state,{payload}){  
        let sth = state.pdlistdata
        console.log(sth)
        state.pdlistdata = sth.concat(payload)
    }
}
export default mutation