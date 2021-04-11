import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './map.css';



const MapComponent =()=>{
    return(
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
    )
}

export default MapComponent