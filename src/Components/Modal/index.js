import React,{useRef,useEffect} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import modalAc from '../../Redux/ActionCreators/ModalAC'

const Container = styled.div`
    position:fixed;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,0.6);
    top:0;
    left:0;
    z-index:9999999999999999999999999;
    display:${({state})=>state ?'block':'none'};
`
const SubContainer = styled.div`

    margin:0 auto;
    background-color:white;
    display:block;
    height:95vh;
    width:90%;
    max-width:600px;
    margin:0 auto;
`




const Modal = ({state,hideModal})=>{
    const node = useRef();

    const  handleClick = e =>{
        if(node.current.contains(e.target)){
            return
        }else{
            hideModal()
            return
        }
    }

    useEffect(()=>{
        document.addEventListener("mousedown",handleClick);

        return()=>{
            document.removeEventListener("mousedown",handleClick)
        }
    },[])



    return(
        <Container state={state} >
            <SubContainer ref={node}>
                    <h2>it do be me thos</h2>
            </SubContainer>

        </Container>
    )
}

const mapStateToProps =(state)=>{

    return{
        state: state.modalReducer.showModal
    }
}

const mapDispatchToProps ={
    hideModal:modalAc.hideModal
}


const ConnectedModal = connect(mapStateToProps,mapDispatchToProps)(Modal)
export default ConnectedModal 