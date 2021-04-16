

const validation =()=>{
    return{
        validate(state){
            let errors ={}
            if(!state.description){
                errors.text = "please enter a description "
            }
            return errors
        }
    }
}


export default validation