import React,{useState} from 'react'
import {Switch,Route,useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

import Home from '../Home'
import Profile from '../Profile'
import Map from '../Map';
import Navigation from '../Navigation'
import MobileNavigation from '../Navigation/MobileNavigation'
import Modal from '../Modal';



const App =()=>{
    const [state,setState] = useState(false)
    const location = useLocation();

    return(
        <div style={{position:'relative'}}>
            <Navigation setState={setState} state={state}/>
            <MobileNavigation state={state} setState={setState}/>
            <Modal/>
            <div style={{position:"relative"}}>
                <AnimatePresence >
                    <Switch location={location} key={location.pathname}>
                        <Route path="/" component={Home} exact />
                        <Route path="/profile" component={Profile} exact />
                        <Route path="/map" component={Map} exact />
                        <Route path="/map/:pupId" component={Map} exact />
                    </Switch>
                </AnimatePresence>
            </div>
        </div>
    )
}


export default App