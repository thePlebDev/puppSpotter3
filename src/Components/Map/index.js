import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux';

import './map.css';
import { pageTransitions, pageVariants } from '../../Animations/pageAnimations';

import useMapHook from '../../Hooks/useMapHook'

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

const data = [
    {
        latLong:[43.6532, -79.3832],
        description:"dave to poodle was spotted here"
    },
    {
        latLong:[44.6488, -63.5752],
        description:"Tim the mut"
    }
]


const MapComponent =({match,data})=>{
 
    const {zoomLevel,latData,longData} = useMapHook(match.params.pupId)

    return(
        <Container initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransitions} initial={starting}>
            <MapContainer center={[parseFloat(latData), parseFloat(longData)]} zoom={zoomLevel} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                 data.map((item,index)=>{
                        return <Marker position={item.latLong} key={index}>
                            <Popup>
                                {item.description}
                            </Popup>
                        </Marker>
                    })
                }
            </MapContainer>
        </Container>
    )
}

const mapStateToProps =(state)=>{
    return{
        data:state.imageReducer.mapData
    }
}

const ConnectedMapComponents = connect(mapStateToProps)(MapComponent)

export default ConnectedMapComponents