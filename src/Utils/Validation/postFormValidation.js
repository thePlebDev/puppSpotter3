

const validation =(()=>{
    return{
        validate(state){
            let errors ={}
            
            if(!state.description){
                errors.description = "Please enter a description"
            }
            return errors
        },
        validateLocation(state){
            let errors = {}
            if(!state || !state.long){
                errors.location = "please enter location"
            }
            return errors
        }
    }
})()


export default validation