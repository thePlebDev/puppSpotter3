import React from 'react';
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RoomIcon from '@material-ui/icons/Room';

import Form from '../../Form'
import useFormHook from '../../../Hooks/useFormHook'
import TextInput from '../../Form/TextInput'
import Error from '../../Error'

import validation from '../../../Utils/Validation'


const Container = styled.div`
    display:flex;
    flex-direction:column;
    color:#4a47a3;
    padding:5px;
    border:1px solid #4a47a3;
    margin-bottom:20px;
    border-radius:4px;
    max-height:500px;
    max-width: 600px;
    position:relative;
`
const Image = styled.img`
    width:100%;
    height:100%;
    border-radius:4px;
`
const ItemContianer = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
`
const Button = styled.button`
    position:absolute;
    border:none;
    background-color:white;
    color:#4a47a3;
    font-size:12px;
    top:0px;
    right:3px;
`


const ImageContainer =()=>{
    const {state,handleSubmit,handleChange,errors} = useFormHook(validation)
    return(
        <Container>
            <Image alt='doggy' src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80'/>
            <Error error={errors.name}/>
            <ItemContianer>
                <RoomIcon style={{fontSize:'30px'}}/>
                <Form handleSubmit={handleSubmit}>
                    <TextInput name={'comment'} value={state.comment} handleChange={handleChange} />
                    <Button type="submit">Post</Button>
                </Form>
                <FavoriteBorderIcon style={{fontSize:'30px'}}/>
            </ItemContianer>
        </Container>
    )
}


export default ImageContainer 