import types from '../types'

const initialState={
    mapData:[
        {
            name:"bob",
            src:'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
            latLong:[43.6532, -79.3832],
            description:"bob the golden retriever was here",
            id:0
    
        },
        {
            name:"timmothy",
            src:'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
            latLong:[44.6488, -63.5752],
            description:"Timmothy to puppy was here",
            id:1
        }
    ]
}

const imageReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.showLogin:
            
            return state;
    
        default:
            return state;
    }
}


export default imageReducer