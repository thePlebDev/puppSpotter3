import React,{useEffect} from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';

import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
//background-color: #f44336; the red color
const Container = styled.div`
  background-color:#4caf50;
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

const Success =({message,show,setShow})=>{

    return(
        <Container state={show}>
            <CheckCircleIcon/>
            <Text>{message}</Text>
            <CloseIcon onClick={()=>{setShow(false)}} style={{cursor:"pointer"}}/>
        </Container>
    )
}

export default Success




