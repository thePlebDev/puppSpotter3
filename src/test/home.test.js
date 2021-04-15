import { fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { getRoles } from '@testing-library/dom'

import {render } from '../test-utils'

import Home from '../Components/Home'


describe("testing the home component",()=>{
    it("should render normaly",()=>{
        
        const component = render(<Home/>)
        expect(component.getByRole("img",{name:"doggy bob"})).toBeDefined()
        

    })
    
    it("should render the second image",()=>{
        const component = render(<Home/>)
        expect(component.getByRole("img",{name:"doggy timmothy"})).toBeDefined()
    })
})

