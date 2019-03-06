const getters = {
    pdheadgetter(state){
        return (index)=>{
            return state.pdsec[index]
        }
    }
}
export default getters