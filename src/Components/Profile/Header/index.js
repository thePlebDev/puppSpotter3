import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
  
`

const ProfileImage = styled.img`
    height:100px;
    width:100px;
    border-radius:50%;

`
const ProfileHeader = styled.div`
    margin-top:10px;
    margin-bottom:10px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
const UsernameContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#4a47a3;
`
const Title = styled.h2`
    color:#4a47a3;
    font-size:18px;
`


const Header =()=>{

    return(
        <Container>
            <ProfileHeader>
            <ProfileImage alt="profile" src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
            <UsernameContainer>
                <Title>Tiny-dog-man</Title>
                34 posts
            </UsernameContainer>
            </ProfileHeader>
        </Container>
    )
}


export default Header