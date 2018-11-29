import {PDHEAD} from './type'
const mutation = {
    [PDHEAD](state,{payload}){
        console.log(payload)
        state.pdsec = payload
        console.log(payload,'payloadpayloadpayloadpayloadpayloadpayloadpayloadpayloadpayload')
    }
}
export default mutation