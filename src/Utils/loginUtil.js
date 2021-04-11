
const loginValidation =(()=>{
    return{
        validateLength(state){
            let errors = {}
            if(!state.username){
                errors.username ="Enter Username"
            }
            if(!state.password){
                errors.password ="Enter Password"
            }

            return errors
        }
    }
})()

export default loginValidation