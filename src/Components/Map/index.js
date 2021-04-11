import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './map.css';
import { pageTransitions, pageVariants } from '../../Animations/pageAnimations';

const Container = styled(motion.div)`
    position:absolute;
    width:100%;
    height:90vh;
    border-radius:4px;


`
const starting ={
    opacity:0,
     x:"-100vw"
}


const MapComponent =()=>{
    return(
        <Container initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransitions} initial={starting}>
            <MapContainer center={[46.0878, -64.7782]} zoom={7} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[46.0878, -64.7782]}>
                    <Popup>
                        Dave the poodle spotted here
                    </Popup>
                </Marker>
                <Marker position={[46.0878, -65.7782]}>
                    <Popup>
                        Tim the bulldog spotted here
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    )
}

export default MapComponent