import {useEffect} from 'react'

const useClickdetection =(node,setState)=>{
    

    useEffect(()=>{
        const handleClick =(e)=>{
            if(node.current.contains(e.target)){
                return
            }else{
                setState(false)
            }
        }
        document.addEventListener("mousedown",handleClick);

        return()=>{
            document.removeEventListener("mousedown",handleClick)
        }
    },[node,setState])
}


export default useClickdetection