

import React from 'react';
import styled from 'styled-components'

import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Container = styled.div`
  background-color:#f44336;
  position:absolute;
  border-radius:4px;
  color:white;
  right:10px;
  top:10px;
  display:flex;
  align-items:center;
  padding:6px 18px;
  transition:all 0.15s ease-in-out;
  transform:${({state})=>state ? 'scale(1)' : 'scale(0.8)'};
  opacity:${({state})=>state ? '1' : '0'};
  visibility:${({state})=>state ? 'visible' : 'hidden'};

`
const Text = styled.div`
  margin:0 10px;
`

const Fail =({message,show,setShow})=>{
    return(
        <Container state={show}>
            <HighlightOffIcon/>
            <Text>{message}</Text>
            <CloseIcon onClick={()=>{setShow(false)}} style={{cursor:"pointer"}}/>
        </Container>
    )
}


export default Fail