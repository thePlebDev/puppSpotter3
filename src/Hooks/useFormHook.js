import {useState,useEffect} from 'react';

const useFormHook =(validation,dataSchema)=>{
    const [state,setState] = useState(dataSchema)
    const [errors,setErrors] = useState({})
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [status,setStatus] = useState("fail")


    useEffect(()=>{
        if(isSubmitting && Object.keys(errors).length === 0){
           // console.log('SUBMITTED')
            setStatus("success")
            return
        }
        setIsSubmitting(false)
        setStatus("fail")

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
        status,
        handleSubmit,
        handleChange
    }

}

export default useFormHook