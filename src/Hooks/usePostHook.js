import {useEffect,useState} from 'react';

const usePostHook =(fileInputRef)=>{
    const [text,setText] = useState({description:""})
    const [location,setLocation] = useState({})



    const handleTextChange=(e)=>{
        const {name,value} = e.target 
        setText({...text,[name]:value})

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(location)
        console.log(text)

    } 

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
    }

    return{
        text,
        handleTextChange,
        handleSubmit,
        handleLatLong
    }

}

export default usePostHook