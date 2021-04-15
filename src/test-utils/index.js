import React from 'react'
import { render } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';

import GlobalStyle from '../styles/globalStyles'
import store from '../Redux/Reducers'



const AllTheProviders =({ children }) =>{

    return(
        <Router>
            <GlobalStyle/>
            <Provider store={store}>
                {children}
            </Provider>
        </Router>
    )
}

const customRender = (ui,options)=>{
    //the documentation doesn't specify a return statment.However, the function is undefined and not working without it
    return render(ui,{wrapper:AllTheProviders,...options})
}
// the wrapper is what will be wrapped around the ui


//re-export everything
export * from "@testing-library/react"

//overrides the render method. Not sure why or how this works but the docs say to do it 
export { customRender as render }