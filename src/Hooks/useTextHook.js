import {useEffect, useState} from 'react';




const useTextHook =(largeState,setLargeState,setErrors,errors,validation)=>{
    const [text,setText] = useState({description:""})

    const handleChange =(e)=>{
        const {name,value} = e.target
        setText({...text,[name]:value})
        setLargeState({...largeState,...text})

    }

    useEffect(()=>{
        setErrors({...errors,...validation(text)})
    },[text])


    return{
        text,
        handleChange
    }
}

export default useTextHook