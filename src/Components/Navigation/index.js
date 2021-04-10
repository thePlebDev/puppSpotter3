import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
    font-weight:bold;
    margin-left:20px;
`
const NavLinks = styled.div`
    display:none;
    margin:0 20px;
    font-size:20px;
    align-self:flex-end;
    cursor:pointer;
    border-bottom:2px solid white;
    &:hover{
        border-bottom:2px solid #4a47a3;
    }
    @media only screen and (min-width: 600px) {
        display:block;
    }
    
    
`
const Icon = styled.div`

    @media only screen and (min-width: 600px) {
        display:none
    }
`



const Navigation =({setState,state})=>{
    const handleClick=()=>{
        setState(!state)
    }

    return(
        <Container>
            <IconContainer>
                <CameraAltIcon style={{fontSize:'30px',color:'4a47a3'}}/>
                <Link to="/">
                    <Title>PupperGram</Title>
                </Link>
            </IconContainer>
            
            <IconContainer>
                <Icon>
                    <PetsIcon style={{fontSize:'30px',color:'4a47a3'}} onClick={()=>handleClick()}/>
                </Icon>
                <Link to="/login">
                    <NavLinks>Login</NavLinks>
                </Link>
                <Link to="/profile">
                    <NavLinks>Profile</NavLinks>
                </Link>
                <Link to="/map">
                    <NavLinks>Map</NavLinks>
                </Link>
            </IconContainer>
        </Container>
    )
}

export default Navigation