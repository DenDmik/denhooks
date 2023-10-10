import React from "react";
let renderCount =0;
export default React.memo(
 function IsFive({value}){
    // console.warn(`isFive render: ${++renderCount}`)
    const getResult=React.useMemo(
        ()=>{
            let i=1
            while(i<600000000) i++;
            return value==5 ?'this is five': 'this is not five'
        },[value]
    
    )
    return(
        <h2>{getResult}</h2>)
},
(prevProps,nextProps)=>{
    // console.log(prevProps,nextProps)
    if(nextProps.value==5){return false;}
    else{
        return true
    }
    
}
);