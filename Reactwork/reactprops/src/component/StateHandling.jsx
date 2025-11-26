import React, {useState} from 'react'

function StateHandling() {
    const [count,setCount]=useState(20);

    function increaseValue(){
        // alert("hiiii");
        setCount(count+10);
    }
  return (
    <div>StateHandling
        <h2>Counter value={count}</h2>

        <button onClick={increaseValue}>Increment Value</button>
        <button onClick={()=>setCount(count-10)} value={count}>{count}</button>
    </div>
  )
}

export default StateHandling