import React, { useState } from 'react'
function Statehandling() {
    const [count, setcount] = useState(20);
    function Incrementvalue() {
        // alert("hii");
        setcount(count + 10);
    }
    return (
        <div>statehandling
            <h2>Counter value={count}</h2>
            <button onClick={Incrementvalue}>Incrementvalue</button>
        </div>
    )
}
export default Statehandling
