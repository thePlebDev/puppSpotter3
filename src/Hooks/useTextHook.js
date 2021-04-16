import {useState} from 'react';




const useTextHook =(largeState,setLargeState,errors,setErrors,validation)=>{
    const [text,setText] = useState({description:""})

    const handleChange =(e)=>{
        const {name,value} = e.target
        setText({...text,[name]:value})
        setLargeState({...largeState,...text})

        // //so w
        // setErrors({...errors,...validation(text)})
    }

    return{
        text,
        handleChange
    }
}

export default useTextHook