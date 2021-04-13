import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import ImageContainer from './ImageContainer'
import { pageTransitions, pageVariants } from '../../Animations/pageAnimations';

const Container = styled(motion.div)`
    width:100%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:absolute;

`

const data = [
    {
        name:"bob",
        src:'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
        latLong:[43.6532, -79.3832],
        id:0

    },
    {
        name:"timmothy",
        src:'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
        latLong:[44.6488, -63.5752],
        id:1

    }
]

const starting ={
    opacity:0,
     x:"-100vw"
}


const Home =()=>{

    return(
        <Container initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransitions} initial={starting}>
            {
                data.map((item,index)=>{
                    return <ImageContainer key={item.id} latLong={item.latLong} src={item.src} dogName={item.name}/>
                })
            }
            

        </Container>
    )
}

export default Home