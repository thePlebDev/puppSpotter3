import React from 'react';
import styled from 'styled-components';

import Header from './Header'
import ImageGrid from './ImageGrid'


const Container = styled.div`
    border:2px solid #4a47a3;
    border-radius:4px;
    max-width:1033px;
    margin:0 auto;


`



const Profile =()=>{
    return(
        <Container>
            <Header/>
            <ImageGrid/>
        </Container>
    )
}

export default Profile