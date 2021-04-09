import React from 'react';
import styled from 'styled-components'

import Image from '../Image'

const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(60px,250px));
    grid-gap:10px;
    width:90%;
    margin:0 auto;
    border-top:1px solid #4a47a3;
    padding:20px 0;
    justify-content: center;


`




const ImageGrid =()=>{
    return(
        <Container>
            <Image/>
            <Image/>
            <Image/>
            <Image/>
           
        </Container>
    )
}

export default ImageGrid;