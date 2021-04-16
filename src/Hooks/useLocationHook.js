import {useState} from 'react';




const useLocationHook =(largeState,setLargeState)=>{
    const [location,setLocation] = useState({})

    const handleLatLong =(e)=>{
        e.preventDefault()
        if(navigator.geolocation){
            setLocation(navigator.geolocation.getCurrentPosition(successLocation))
        }else{
            setLocation("No location")
        }
    }
    const successLocation =(position)=>{
        setLocation({...location,lat:position.coords.latitude})
        setLocation({...location,long:position.coords.longitude})
        setLargeState({...largeState,lat:position.coords.latitude,long:position.coords.longitude})
    }

    return{
        handleLatLong,
        location
    }
}


export default useLocationHook