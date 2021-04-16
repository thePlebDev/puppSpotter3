import {useEffect,useState} from 'react';

const usePostHook =(largeState,errors)=>{
    
    const [isSubmitting,setIsSubmitting] = useState();
    const [status,setStatus] = useState('success')

    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsSubmitting(true);
    } 

    useEffect(()=>{
        console.log(errors)
    },[errors])




    // useEffect(()=>{
    //     if(isSubmitting && Object.keys(errors).length === 0){
    //         console.log("submitted")
    //         setStatus('success')
    //         return
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


