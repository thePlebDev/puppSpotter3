import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Header from './Header'
import ImageGrid from './ImageGrid'
import { pageTransitions, pageVariants } from '../../Animations/pageAnimations';


const Container = styled(motion.div)`
    
    border-radius:4px;
    max-width:1033px;
    
    position:absolute;
    left:0;
    right:0;
    margin:auto;
    width:100%;
   

`

const starting ={
    opacity:0,
     x:"-100vw"
}



const Profile =()=>{
    return(
        <Container initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransitions} initial={starting}>

                <Header/>
                <ImageGrid/>

        </Container>   
    )
}

export default Profile