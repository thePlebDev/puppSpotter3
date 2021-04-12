// this is where we make an enum and then use that to render what is on the modal 

import Login from '../../Login'
import Signup from '../../Signup'
import Post from '../../Post'
import Picture from '../../Picture';


const MODAL_STATES ={
    LOGIN:<Login/>,
    SIGNUP:<Signup/>,
    POST:<Post/>,
    PICTURE:<Picture/>
}


export default MODAL_STATES