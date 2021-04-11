// this is where we make an enum and then use that to render what is on the modal 

import Login from '../../Login'
import Signup from '../../Signup'
import Post from '../../Post'


const MODAL_STATES ={
    LOGIN:<Login/>,
    SIGNUP:<Signup/>,
    POST:<Post/>,
}


export default MODAL_STATES