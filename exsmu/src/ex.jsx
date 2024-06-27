import React, { useState } from 'react'


function Ex() {
  const [counter,setCounter] = useState(0);
  const handleCounter=()=>{
    setCounter(counter+1);
    console.log('counter:',counter)
  }
  return (
    <div>
       <button onClick={handleCounter}>{counter}</button>
    </div>
  )
}

export default Ex