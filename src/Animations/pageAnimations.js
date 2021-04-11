

const pageVariants ={
    in:{
        opacity:1,
        x:0
    },
    out:{
        opacity:0,
        x:"100vw"
    }
}

const pageTransitions ={
    type:"tween",
    ease:"anticipate",
    duration:1
}


export {pageVariants,pageTransitions}