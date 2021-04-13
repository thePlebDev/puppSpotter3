import React,{useRef,useEffect} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import CloseIcon from '@material-ui/icons/Close';

import modalAc from '../../Redux/ActionCreators/ModalAC';
import MODAL_STATES from './ModalStates';

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

    background-color:white;
    display:block;
    height:95vh;
    width:90%;
    max-width:600px;
    margin:0 auto;
    margin-top:25px;
    border-radius:4px;
    position:relative;
    overflow-y:auto;
`

const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    color:#4a47a3;
    postion:absolute;
    
`




const Modal = ({state,hideModal,modalContent})=>{
    const node = useRef();


    useEffect(()=>{
        const  handleClick = e =>{
            if(node.current.contains(e.target)){
                return
            }else{
                hideModal()
                return
            }
        }
        document.addEventListener("mousedown",handleClick);

        return()=>{
            document.removeEventListener("mousedown",handleClick)
        }
    },[node,hideModal])



    return(
        <Container state={state} >
            <SubContainer ref={node}>
                    <IconContainer>
                        <CloseIcon style={{fontSize:'40px',cursor:'pointer'}} onClick={()=>{hideModal()}}/>
                    </IconContainer>
                    {
                        MODAL_STATES[modalContent]
                    }
            </SubContainer>

        </Container>
    )
}

const mapStateToProps =(state)=>{

    return{
        state: state.modalReducer.showModal,
        modalContent:state.modalReducer.modalContent
    }
}

const mapDispatchToProps ={
    hideModal:modalAc.hideModal,
}


const ConnectedModal = connect(mapStateToProps,mapDispatchToProps)(Modal)
export default ConnectedModal 