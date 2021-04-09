import React,{useState} from 'react'
import {Switch,Route} from 'react-router-dom'

import Home from '../Home'
import Profile from '../Profile'
import Login from '../Login';
import Logout from '../Logout';
import Map from '../Map';
import Navigation from '../Navigation'
import MobileNavigation from '../Navigation/MobileNavigation'



const App =()=>{
    const [state,setState] = useState(false)

    return(
        <div style={{position:'relative'}}>
            <Navigation setState={setState} state={state}/>
            <MobileNavigation state={state} setState={setState}/>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/profile" component={Profile} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/logout" component={Logout} exact />
                <Route path="/map" component={Map} exact />
            </Switch>
        </div>
    )
}


export default App