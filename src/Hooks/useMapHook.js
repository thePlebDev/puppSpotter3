

const useMapHook =(params)=>{

    let zoomLevel =5;
    if(params){
        zoomLevel = 13;
    }
    

    let latData = window.sessionStorage.getItem('lat');
    let longData = window.sessionStorage.getItem('long');

    if(!latData || !longData){
        latData = 44.6488
        longData = -63.5752
    }

    return{
        latData,
        longData,
        zoomLevel
    }
}


export default useMapHook