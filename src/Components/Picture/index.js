import React,{useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
`


const Title = styled.h2`
    color:#4a47a3;
    text-align:center;
    text-transform:uppercase;
    font-weight:bold;
    letter-spacing:1px;
    border-bottom:1px solid #4a47a3;
    padding-bottom:40px;
    width:100%;
`

const Image = styled.img`
    border-radius:4px;
    width:90%;
    margin:0 auto;
    max-width:500px;
`
const CommentsContainer = styled.div`
    border-radius:4px;
    width:90%;
    margin:0 auto;
    max-width:500px;
    position:relative;
`

const Comment = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    margin:20px 0;
    border-bottom:1px solid #4a47a3;
    padding-bottom:5px;
`

const TinyImage =styled.img`
    height:40px;
    width:40px;
    border-radius:50%;
    margin-right:30px;
    object-fit: cover;
`

const IconContainer = styled.div`
    position:absolute;
    right:10px;
    color: #4a47a3;
    top:39px;
    cursor:pointer;
`

const Text = styled.div`
    align-self:flex-end;
`


const Picture =({src})=>{
    const [state,setState] = useState(false)
    return(
        <Container>
            <Title>Image</Title>
            <Image alt="doggy" src={src} />
               
            <CommentsContainer>
                <Comment>
                    <TinyImage alt="profile" src='https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'/>
                    <Text>Cute!!!!!</Text>
                    <IconContainer onClick={()=>setState(!state)}>
                        {
                            state
                              ?
                            <FavoriteIcon/>
                              :
                            <FavoriteBorderIcon/>
                        }
                    </IconContainer>
                </Comment>                
            </CommentsContainer>
        </Container>
    )
}

const mapStateToProps =(state)=>{
    return{
        src:state.modalReducer.data
    }
}


const ConnectedPicture = connect(mapStateToProps)(Picture)
export default ConnectedPicture