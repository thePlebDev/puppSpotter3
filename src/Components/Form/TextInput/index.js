import React from 'react';
import styled from 'styled-components'

const Input = styled.input`
    border-bottom:1px solid #4a47a3;
    border-top:none;
    border-right:none;
    border-left:none;
    outline:none;
    padding-right:20px;
`

const TextInput = ({name,handleChange,value})=>{

    return(
        <>
        <label htmlFor='comment'/>
        <Input type="text" id='comment'  placeholder="20 Character Limit" onChange={(e)=>handleChange(e)} name={name} value={value} />
        </>
    )
}

export default TextInput