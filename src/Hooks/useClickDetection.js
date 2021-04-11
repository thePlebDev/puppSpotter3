import {useEffect} from 'react'

const useClickdetection =(node,node2,setState)=>{
    

    useEffect(()=>{
        const handleClick =(e)=>{
            if(node2.current.contains(e.target)){
                setState(false)
            }
            if(node.current.contains(e.target)){
                return
            }
            else{
                setState(false)
            }
        }
        document.addEventListener("mousedown",handleClick);

        return()=>{
            document.removeEventListener("mousedown",handleClick)
        }
    },[node,setState,node2])
}


export default useClickdetection