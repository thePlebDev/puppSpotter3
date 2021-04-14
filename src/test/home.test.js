import { fireEvent, waitFor, screen } from '@testing-library/react'

import {render } from '../test-utils'

import Home from '../Components/Home'


describe("testing the home component",()=>{
    it("should render normaly",()=>{
        render(<Home/>)
    })
})