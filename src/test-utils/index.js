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
    render(ui,{wrapper:AllTheProviders,...options})
}
// the wrapper is what will be wrapped around the ui


//re-export everything
export * from "@testing-library/react"

//override render method
export { customRender as render }