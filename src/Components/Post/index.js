import React,{useRef,useState,useEffect} from 'react';
import styled from 'styled-components'

import usePostHook from '../../Hooks/usePostHook'
import useImagehook from '../../Hooks/useImageHook'
import useLocationHook from '../../Hooks/useLocationHook'
import useTextHook from '../../Hooks/useTextHook'

import postFormValidation from '../../Utils/Validation/postFormValidation'

import LoginTextInput from '../Form/LoginTextInput'
import Form from '../Form'
import Notification from '../Notification'

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

    padding: 5px 25px;
    border-radius:4px;
    border:1px solid #4a47a3;
    background-color:white;
    color:#4a47a3;
    cursor:pointer;
    width:20%;
    min-width:150px;
    margin:0 auto;
    margin-top:10px;

`



const ImageContainer = styled.div`
    width: 90%;
    max-width:400px;
    height:300px;
    border:1px solid #4a47a3;
    margin:20px auto;
    border-radius:4px;
`

const Image = styled.img`
    broder-radius:4px;
    height:100%;
    width:100%;
`
const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

`


const Post =()=>{
    const fileInputRef = useRef();
    const [show,setShow] = useState(false)
    const [largeErrors,setLargeErrors] = useState({})
    const [largeState,setLargeState] = useState()

    // 1) make sure both the errors get set
    //2) make sure they get updated accordingly 
    //3) refactor somehow 
    

    const {preview,handleImageChange,handleClick,newImage,} = useImagehook(fileInputRef,largeState,setLargeState)

    const {handleLatLong,location} = useLocationHook(largeState,setLargeState)

    //GETTING THE ERRORS TO WORK
    const {text,handleChange} = useTextHook(largeState,setLargeState,largeErrors,setLargeErrors,postFormValidation.validate)

    //making sure the errors make it
    const {handleSubmit,status,message} = usePostHook(largeState,largeErrors)


  

    return(
        <Container>
            <Notification show={show} setShow={setShow} status={'success'} message={'sucess'}/>
            <Title>Post a Pup</Title> 
            <ImageContainer>
                {
                    preview
                        ?
                        <Image alt="upload preview" src={preview}/>
                        :
                        <div></div>
                }
                
            </ImageContainer>
            <Form handleSubmit={handleSubmit}>
                {
                    preview
                       ?
                       <ButtonContainer>
                           <Button style={{marginRight:"10px"}} type="submit" onClick={()=>{setShow(true)}}>Upload Image</Button>
                           <Button onClick={(e)=>newImage(e)}>New Image</Button>
                       </ButtonContainer>
                        :
                    <Button onClick={(e)=>handleClick(e)}>Add Image</Button>
                }
                <input type="file"  style={{display:'none'}} ref={fileInputRef}
                onChange={(e)=>handleImageChange(e)} accept="image/*"/>
                
                <Button onClick={(e)=>handleLatLong(e)}>add location</Button>
                <LoginTextInput placeholder={"Description"} handleChange={handleChange}  name="description" value={text.description}/>
            </Form>
            
        </Container>
    )
}

export default Post