import {combineReducers,createStore} from 'redux';
import modalReducer from './ModalReducer'
import notificationReducer from './NotificationReducer'


const rootReducer = combineReducers(
    {
    modalReducer,
    notificationReducer
    }
)

const store = createStore(rootReducer)


export default store