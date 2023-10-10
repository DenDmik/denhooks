import React from "react";
import Count from "./count";
import IsFive from "./isFive";
const CounterMemo =()=>{
const[count1,setCount1]=React.useState(0)
const[count2,setCount2]=React.useState(0)


    return(
        <div>
                  <h5>counter1:</h5>
      <div className='counter'>
        <button onClick={()=>setCount1(count1+1)}>+</button>
        <Count id={1} value={count1}/>
      </div>
      <h5>counter2:</h5>
      <div className='counter2'>
        <button onClick={()=>setCount2(count2+1)}>+</button>
        <Count id={2} value={count2}/>
        <IsFive value={count2}/>
      </div>


        </div>
    )
}
export default CounterMemo