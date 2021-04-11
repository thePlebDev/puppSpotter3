import React,{useRef} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

import useClickdetection from '../../../Hooks/useClickDetection'
import modalAC from '../../../Redux/ActionCreators/ModalAC'


const Container =styled.div`
    height:100vh;
    width:50vw;
    background-color:#4a47a3;
    position:fixed;
    transition:all 0.35s;
    left:${({state})=>state ? '0':'-50vw'};
    opacity:0.9;
    top:0;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    z-index:999999;
    
`
const Items = styled.h2`
    color:white;
    letter-spacing:1px;
    border-bottom:1px solid white;
    text-align:center;
    padding-bottom:5px;
    width:90%;
    margin:0 auto;
`

const data =[{name:'Home',route:'/'},
            {name:'Profile',route:'/profile'},{name:'Map',route:'/map'}]


const MobileNavigation =({state,setState,showModal})=>{
    const node = useRef()
    const node2 = useRef()
    useClickdetection(node,node2,setState)

    return(
        <Container state={state} ref={node}>
            <Items ref={node2} onClick={()=>{showModal()}}>Login</Items>
            {
                data.map((item,index)=>{
                    return<Link key={index} to={`${item.route}`}><Items >{item.name}</Items></Link>
                })
            }
            
        </Container>
    )
}

const mapDispatchToProps={
    showModal:modalAC.showModal
}

const ConnectedMobileNavigation =connect(null,mapDispatchToProps)(MobileNavigation)

export default ConnectedMobileNavigation