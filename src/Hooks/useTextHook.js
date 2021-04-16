import {useEffect, useState} from 'react';




const useTextHook =(largeState,setLargeState,setErrors,validation)=>{
    const [text,setText] = useState({description:""})

    const handleChange =(e)=>{
        const {name,value} = e.target
        setText({...text,[name]:value})
        setLargeState({...largeState,...text})

    }

    useEffect(()=>{
        setErrors({...validation(text)})
    },[text])


    return{
        text,
        handleChange
    }
}

export default useTextHook