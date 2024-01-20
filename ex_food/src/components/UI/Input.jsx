import React from 'react'

function Input({label,id,...props}) {
  return (
    <p className='control'>
      <label htmlFor={id} >{label}</label>
      <input id={id} required {...props} name={id}/>
    </p>
  )
}

export default Input