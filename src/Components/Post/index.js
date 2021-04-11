import React,{useRef,useState,useEffect} from 'react';
import styled from 'styled-components'

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

`

const Form = styled.form`
    display:flex;
    align-items:center;
    justify-content:center;
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






const Post =()=>{
    const fileInputRef = useRef();
    const [image,setImage] = useState()
    const [preview,setPreview] = useState()

    useEffect(()=>{
        if(image){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPreview(reader.result)
            }

            reader.readAsDataURL(image)

        }else{
            setPreview(null)
        }

    },[image])

    const handleClick =(e)=>{
        e.preventDefault()
        fileInputRef.current.click();
    }
    const handleChange =(e)=>{
        const file = e.target.files[0]
        if(file && file.type.substr(0,5) === "image"){
            setImage(file);
        }else{
            setImage(null)

        }
    }
    const newImage =(e)=>{
        e.preventDefault()
        setImage(null)
        fileInputRef.current.click();
    }

    return(
        <Container>
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
            <Form>
                {
                    preview
                       ?
                       <div >
                           <Button style={{marginRight:"10px"}}>Upload Image</Button>
                           <Button onClick={(e)=>newImage(e)}>New Image</Button>
                       </div>
                    
                        :
                    <Button onClick={(e)=>handleClick(e)}>Add Image</Button>
                }
                <input type="file"  style={{display:'none'}} ref={fileInputRef}
                onChange={(e)=>handleChange(e)} accept="image/*"/>
            </Form>
            
        </Container>
    )
}

export default Post