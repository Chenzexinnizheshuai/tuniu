import {PDHEAD,PDLIST} from './type'
const mutation = {
    [PDHEAD](state,{payload}){
        state.pdsec = payload
    },
    [PDLIST](state,{payload}){
        console.log(payload)
        state.pdlistdata = payload
    }
}
export default mutation