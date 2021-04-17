import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'

import Form from '../Form'
import LoginTextInput from '../Form/LoginTextInput'
import PasswordInput from '../Form/PasswordInput'

import useFormHook from '../../Hooks/useFormHook'
import loginValidation from '../../Utils/loginUtil'
import modalAC from '../../Redux/ActionCreators/ModalAC'

const Container = styled.div`
   
`

const Title = styled.h2`
    color:#4a47a3;
    text-align:center;
    text-transform:uppercase;
    font-weight:bold;
    letter-spacing:1px;
    border-bottom:1px solid #4a47a3;
    padding-bottom:40px;
    
`

const Button = styled.button`
    margin:0 auto;
    padding: 5px 25px;
    border-radius:4px;
    border:1px solid #4a47a3;
    background-color:white;
    color:#4a47a3;
    outline:none;
    cursor:pointer;
`
const SignupText = styled.h6`
    color:#4a47a3;
    letter-spacing:1px;
    text-align:center;
`
const SignupLink = styled.span`
    color:black;
    border-bottom:1px solid #4a47a3;
    font-size:13px;
    letter-spacing:1px;
    cursor: pointer;
`




const Signup =({showLogin})=>{
    const {state,errors,handleSubmit,handleChange} = useFormHook(loginValidation.validateLength,{username:'',password:''})
    return(
        <Container>
            <Title>Signup</Title>
            <Form handleSubmit={handleSubmit}>
                <LoginTextInput name={"username"} handleChange={handleChange}  value={state.username} error={errors.username}/>
                <PasswordInput name={"password"} handleChange={handleChange}  value={state.password} error={errors.password}/>
                <Button type="submit">Submit</Button>
            </Form>
            <SignupText>
                Alreader have an <SignupLink onClick={()=>showLogin()} >account?</SignupLink>
            </SignupText>
        </Container>
    )
}


const mapDispatchToProps ={
    showLogin:modalAC.showLogin
}

const ConnectedSignup = connect(null,mapDispatchToProps)(Signup)


export default ConnectedSignup 