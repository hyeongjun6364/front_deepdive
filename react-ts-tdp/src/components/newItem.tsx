import { RefObject, useRef } from "react"
import React from 'react'

const NewItem:React.FC<{inputRef:RefObject<HTMLInputElement>;handleSubmit:(event:React.FormEvent)=>void}> = (props) => {
  
  return (
    <div>
       <input ref={props.inputRef} placeholder='할일 입력'/>
       <button onClick={props.handleSubmit}>제출하기</button>
    </div>
  )
}

export default NewItem