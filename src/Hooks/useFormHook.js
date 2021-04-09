import {useState,useEffect} from 'react';

const useFormHook =(validation)=>{
    const [state,setState] = useState({comment:""})
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
      
        setErrors(validation.validateLength(state))
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