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

    // this has potential but it needs to be refactored.
    // the state is lifted so it can be shared, same with the errors.

    const [largeState,setLargeState] = useState()
    const [largeErrors,setLargeErrors] = useState({})
    const {preview,handleImageChange,handleClick,newImage,} = useImagehook(fileInputRef,largeState,setLargeState)
    const {handleLatLong,location} = useLocationHook(largeState,setLargeState)

    const {text,handleChange} = useTextHook(largeState,setLargeState)

    //actually everyone should do their own validation and then share one global error state
    const {handleSubmit,status} = usePostHook(largeState,largeErrors)


  

    return(
        <Container>
            <Notification show={show} setShow={setShow} status={'fail'} message={"failure to complie"}/>
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