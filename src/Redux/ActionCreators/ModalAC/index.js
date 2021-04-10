import types from '../../Reducers/types'


const ModalAC =(()=>{

    return{
        showModal(){
            return{
                type:types.showModal
            }
        },
        hideModal(){
            return{
                type:types.hideModal
            }
        }
    }

})()


export default ModalAC