
const validation =(()=>{

    return{
        validateLength(state){
            let errors ={}
            if(!state.comment){
                errors.name = 'Enter Comment'
                return errors
            }
            if(state.comment.length >= 20){
                errors.name = 'Comment exceeds limit'
                return errors
            }

            return errors
        }
    }

})()


export default validation