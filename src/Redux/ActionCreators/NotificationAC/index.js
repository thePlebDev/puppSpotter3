import types from '../../Reducers/types'



const notificationAC =(()=>{

    return{
        showNotification(message){
            return{
                type:types.showNotification,
                payload:message
            }
        },
        hideNotification(){
            return{
                type:types.hideNotification
            }
        }
    }
})()


export default notificationAC