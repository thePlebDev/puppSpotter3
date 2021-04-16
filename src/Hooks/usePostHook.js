import {useEffect,useState} from 'react';

const usePostHook =(largeState,errors)=>{
    
    const [isSubmitting,setIsSubmitting] = useState();
    const [status,setStatus] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(largeState)
        setIsSubmitting(true);
        console.log(errors)

    } 

    // useEffect(()=>{
    //     if(isSubmitting && Object.keys(errors).length === 0){
    //         console.log("submitted")
    //         setStatus('success')
    //     }
    //     setStatus('fail')
    //     setIsSubmitting(false)

    // },[isSubmitting])

    
    return {
        handleSubmit,
        status,
    }

}

export default usePostHook


