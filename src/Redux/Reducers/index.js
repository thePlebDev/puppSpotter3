import {combineReducers,createStore} from 'redux';
import modalReducer from './ModalReducer';
import notificationReducer from './NotificationReducer';
import imageReducer from '../Reducers/ImageReducer';





const rootReducer = combineReducers(
    {
    modalReducer,
    notificationReducer,
    imageReducer
    }
)

const store = createStore(rootReducer)


export default store