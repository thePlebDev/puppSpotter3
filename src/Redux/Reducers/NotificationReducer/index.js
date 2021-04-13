import types from '../types'
const initialState={
    show:false,
    message:""
}


const notificationReducer =(state=initialState,action)=>{
    switch (action.type) {

        case types.showNotification:
            return{...state,show:true,message:action.payload};

        case types.hideNotification:
            return{...state,show:false}
    
        default:
            return state;
    }
}


export default notificationReducer

