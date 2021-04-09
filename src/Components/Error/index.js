import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components'


const ErrorContainer = styled.div`
    position:absolute;
    width:150px;
    bottom:15%;
    border-radius:4px;
    text-align:center;
    margin:auto;
    padding:3px 10px;
    color:white;
    font-size:12px;
    left:0;
    right:0;
    background-color:#ce1212;
    text-transform:uppercase;
    opacity:${({state})=>state ? 1: 0};


`


const Error =({error})=>{
    const [state,setState] = useState(error)
    const node = useRef();


    useEffect(()=>{
        setState(error)
    },[error])


    return(
        <ErrorContainer state={state} ref={node}>
            {error}
        </ErrorContainer>
    )
}

export default Error