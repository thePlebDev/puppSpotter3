import {useState,useEffect} from 'react';

const useFormHook =(validation,dataSchema)=>{
    const [state,setState] = useState(dataSchema)
    const [errors,setErrors] = useState({})
    const [isSubmitting,setIsSubmitting] = useState(false)


    useEffect(()=>{
        if(isSubmitting && Object.keys(errors).length === 0){
            console.log('SUBMITTED')
        }
        setIsSubmitting(false)

    },[isSubmitting,errors])

    const handleChange =(e)=>{

        const {name,value} = e.target
        setState({...state,[name]:value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
      
        setErrors(validation(state))
        setIsSubmitting(true)
    }

    return{
        state,
        errors,
        handleSubmit,
        handleChange
    }

}

export default useFormHook