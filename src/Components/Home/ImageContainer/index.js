import React,{useState} from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RoomIcon from '@material-ui/icons/Room';


import Form from '../../Form'
import useFormHook from '../../../Hooks/useFormHook'
import TextInput from '../../Form/TextInput'
import Error from '../../Error/MaterialError'

import validation from '../../../Utils/Validation'
import modalAC from '../../../Redux/ActionCreators/ModalAC'


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
    cursor:pointer;
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
    cursor:pointer;
`

const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
`



const ImageContainer =({src,showModal,showPicture})=>{
    const [showError,setShowError] = useState(false)
    const [liked,setLiked] = useState(false)
    const {state,handleSubmit,handleChange,errors} = useFormHook(validation.validateLength,{comment:""})

    const setModal =()=>{
        showModal()
        showPicture(src)
    }

    return(
        <Container>
            <Image alt='doggy' src={src}  onClick={()=>setModal()}/>
            <Error error={errors.name} showError={showError} setShowError={setShowError}/>
            <ItemContianer>
                <RoomIcon style={{fontSize:'30px',cursor:'pointer'}}/>
                <Form handleSubmit={handleSubmit}>
                    <TextInput name={'comment'} value={state.comment} handleChange={handleChange} />
                    <Button type="submit" onClick={()=>{setShowError(true)}}>Post</Button>
                </Form>
                <IconContainer onClick={()=>setLiked(!liked)}>
                    {
                        liked
                          ?
                        <FavoriteIcon style={{fontSize:'30px'}}/>
                          :
                          <FavoriteBorderIcon style={{fontSize:'30px'}}/>

                    }
                    
                </IconContainer>
            </ItemContianer>
        </Container>
    )
}

const mapDispatchToProps = {
    showModal:modalAC.showModal,
    showPicture:modalAC.showPicture
}


const ConnectedImageContainer = connect(null,mapDispatchToProps)(ImageContainer)

export default ConnectedImageContainer 