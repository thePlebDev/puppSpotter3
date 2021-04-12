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

const data = [
    {
        src:'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80',
        index:0
    },
    {
        src:'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80',
        index:1
    },
    {
        src:'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80',
        index:2
    },

]



const ImageGrid =()=>{
    return(
        <Container>
            {data.map((item,index)=>{
                return<Image src={item.src} key={item.index} />
            })}
           
        </Container>
    )
}

export default ImageGrid;