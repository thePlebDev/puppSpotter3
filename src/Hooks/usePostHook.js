import {useEffect,useState} from 'react';

const usePostHook =(fileInputRef)=>{
    const [image,setImage] = useState()
    const [preview,setPreview] = useState()
    const [location,setLocation] = useState({})

    useEffect(()=>{
        if(image){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPreview(reader.result)
            }

            reader.readAsDataURL(image)

        }else{
            setPreview(null)
        }

    },[image])

    const handleClick =(e)=>{
        e.preventDefault()
        fileInputRef.current.click();
    }
    const handleImageChange =(e)=>{
        const file = e.target.files[0]
        if(file && file.type.substr(0,5) === "image"){
            setImage(file);
        }else{
            setImage(null)

        }
    }
    const newImage =(e)=>{
        e.preventDefault()
        setImage(null)
        fileInputRef.current.click();
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(location)

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
        //setLocation({lat:position.coords.latitude})
        // console.log(position.coords.latitude)
        // console.log(position.coords.longitude)
        setLocation({...location,lat:position.coords.latitude})
        setLocation({...location,long:position.coords.longitude})
    }

    return{
        image,
        preview,
        handleClick,
        newImage,
        handleImageChange,
        handleSubmit,
        handleLatLong
    }

}

export default usePostHook