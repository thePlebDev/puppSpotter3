import React from 'react';
import styled from 'styled-components'

import ImageContainer from './ImageContainer'

const Container = styled.div`

    width:90%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;

`




const Home =()=>{

    return(
        <Container>
            <ImageContainer/>
            <ImageContainer/>
        </Container>
    )
}

export default Home