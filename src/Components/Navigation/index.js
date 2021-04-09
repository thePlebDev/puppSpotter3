import React from 'react';
import styled from 'styled-components';

import PetsIcon from '@material-ui/icons/Pets';
import CameraAltIcon from '@material-ui/icons/CameraAlt';


const Container = styled.div`

    height:60px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`

const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const Title = styled(IconContainer)`
    color:#4a47a3;
    font-size:25px;
    font-weight:bold
`


const Navigation =({setState,state})=>{
    const handleClick=()=>{
        setState(!state)
    }

    return(
        <Container>
            <IconContainer><CameraAltIcon style={{fontSize:'30px',color:'4a47a3'}}/></IconContainer>
            <Title>PupperGram</Title>
            <IconContainer>
                <PetsIcon style={{fontSize:'30px',color:'4a47a3'}} onClick={()=>handleClick()}/>
            </IconContainer>
        </Container>
    )
}

export default Navigation