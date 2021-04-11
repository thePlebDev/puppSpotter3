import React from 'react'
import styled from 'styled-components'



const Input = styled.input`
    border-bottom:${({state})=>state ? '2px solid red':"1px solid #4a47a3"};
    border-top:none;
    border-right:none;
    border-left:none;
    outline:none;
    padding-right:20px;
    width:60%;
    margin:40px auto;
    `


const LoginTextInput = ({name,handleChange,value,error})=>{
        

    return(
        <>
        <label htmlFor='login'/>
        <Input type="text" id='login' state={error}  placeholder="Username" onChange={(e)=>handleChange(e)} name={name} value={value} />
        </>
    )
}

export default LoginTextInput