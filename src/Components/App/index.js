import React,{useState} from 'react'
import {Switch,Route} from 'react-router-dom'

import Home from '../Home'
import Profile from '../Profile'
import Map from '../Map';
import Navigation from '../Navigation'
import MobileNavigation from '../Navigation/MobileNavigation'
import Modal from '../Modal';



const App =()=>{
    const [state,setState] = useState(false)

    return(
        <div style={{position:'relative'}}>
            <Navigation setState={setState} state={state}/>
            <MobileNavigation state={state} setState={setState}/>
            <Modal/>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/profile" component={Profile} exact />
                <Route path="/map" component={Map} exact />
            </Switch>
        </div>
    )
}


export default App