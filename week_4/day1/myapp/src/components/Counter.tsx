import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(2)
    const [counter2, setCounter2] = useState(6);
    const [result, setResult] = useState(0)

    const add=() =>{
        setResult(counter + counter2)
    }


  return (
    <div>
      <button onClick={add}>sum</button> <p>{result}</p>
      <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
        sub
      </button>
      <button onClick={() => setCounter(counter * 2)}>mul</button>
      {/* <p>{counsetter}</p> */}
      <p>{counter}</p>
    </div>
  );
}

export default Counter
