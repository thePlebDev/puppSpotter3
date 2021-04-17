import {useEffect,useState} from 'react';

const usePostHook =(largeState,errors)=>{
    
    const [isSubmitting,setIsSubmitting] = useState();
    const [status,setStatus] = useState('success')

    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsSubmitting(true);
    } 


    
    return {
        handleSubmit,
        status,
    }

}

export default usePostHook


