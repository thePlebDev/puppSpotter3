
import React from 'react';
import styled from 'styled-components'

import Fail from './Fail'
import Sucess from './Success'

const getNotification = (message,show,setShow) =>({
    success:<Sucess message={'Success'} show={show} setShow={setShow}/>,
    fail:<Fail message={message} show={show} setShow={setShow}/>,
})

const Notification =({status,message,show,setShow})=>{

    return(
        <div>
           { getNotification(message,show,setShow)[status]}
        </div>

    )
}

export default Notification