import {combineReducers,createStore} from 'redux';
import modalReducer from './ModalReducer'


const rootReducer = combineReducers({
    modalReducer
})

const store = createStore(rootReducer)


export default store