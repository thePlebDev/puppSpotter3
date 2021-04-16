import {useState,useEffect} from 'react'


const useImagehook =(fileInputRef,largeState,setLargeState)=>{
    const [image,setImage] = useState()
    const [preview,setPreview] = useState()
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

    useEffect(()=>{
        if(preview){
            setLargeState({...largeState,image:preview})
        }
    },[preview])

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

    return{
        image,
        preview,
        newImage,
        handleImageChange,
        handleClick
    }
}


export default useImagehook