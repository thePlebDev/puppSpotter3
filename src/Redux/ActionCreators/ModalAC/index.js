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
        },
        showLogin(){
            return{
                type:types.showLogin
            }
        },
        showSignup(){
            return{
                type:types.showSignup
            }
        },
        showPost(){
            return{
                type:types.showPost
            }
        }
    }

})()


export default ModalAC