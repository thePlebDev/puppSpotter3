import React,{useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import modalAC from '../../../Redux/ActionCreators/ModalAC'


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




const Image =({src,showModal,showPicture})=>{
    const [state,setState] = useState(false)

    const handleModal =()=>{
        showModal()
        showPicture(src)
    }

    return(
        <ImageContainer state={state} onClick={()=>handleModal()}>
            <ImageItem alt="doggy" state={state}
             onMouseEnter={()=>setState(true)}
             onMouseLeave={()=>setState(false)}
             src={src}/>
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

const mapDispatchToProps ={
    showModal:modalAC.showModal,
    showPicture:modalAC.showPicture
}

const ConnectedImage = connect(null,mapDispatchToProps)(Image)


export default ConnectedImage 
