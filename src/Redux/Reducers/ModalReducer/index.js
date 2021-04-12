import types from '../types'

const initialState= {
    showModal:false,
    modalContent:types.showLogin,
    data:""
}

const modalReducer =(state=initialState, action)=>{
    switch (action.type) {
        case types.showModal:
            return {...state,showModal:true}
    
        case types.hideModal:
            return{...state,showModal:false}

        case types.showSignup:
            return{...state,modalContent:types.showSignup}
        
        case types.showLogin:
            return{...state,modalContent:types.showLogin}
        
        case types.showPost:
            return{...state,modalContent:types.showPost}
        
        case types.showPicture:
            return{...state,modalContent:types.showPicture,data:action.payload}

        default:
            return state;
    }
}

export default modalReducer