import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { connect } from 'react-redux'

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

const starting ={
    opacity:0,
     x:"-100vw"
}


const Home =({data})=>{

    return(
        <Container initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransitions} initial={starting} data-testid="image-container">
            {
                data.map((item,index)=>{
                    return <ImageContainer key={item.id} latLong={item.latLong} src={item.src} dogName={item.name}/>
                })
            }
            

        </Container>
    )
}

const mapStateToProps =(state)=>{

    return{
        data:state.imageReducer.mapData
    }
}

const ConnectedHome = connect(mapStateToProps)(Home)
export default ConnectedHome