import React,{useState} from 'react'
import styled from 'styled-components'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const ImageContainer = styled.div`
    position:relative;

`

const ImageItem = styled.img`
    height:100%;
    width:100%;
    border-radius:4px;
    cursor:pointer;
    transition:all 0.35s;


`

const HoverDisplay = styled.div`
    position:absolute;
    bottom:0px;
    color:white;
    display:flex;
    justify-content:space-around;
    width:100%;
    background-color:#4a47a3;
    padding:5px 0;
    border-radius:4px;
    transition:all 0.35s;
    opacity:${({state})=>state?1:0};
`
const ItemContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const Title = styled.div`
    font-size:20px;
    margin-right:10px;
  
`




const Image =()=>{
    const [state,setState] = useState(false)
    return(
        <ImageContainer state={state}>
            <ImageItem alt="doggy" state={state}
             onMouseEnter={()=>setState(true)}
             onMouseLeave={()=>setState(false)}
             src='https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80'/>
            <HoverDisplay state={state}>
                <ItemContainer>
                    <Title>30</Title>
                    <FavoriteBorderIcon />
                </ItemContainer>

                <ItemContainer>
                    <Title>10</Title>
                    <ChatBubbleOutlineIcon />
                </ItemContainer>

            </HoverDisplay>
        </ImageContainer>
    )
}


export default Image 
