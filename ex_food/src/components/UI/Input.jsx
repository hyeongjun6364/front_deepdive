import React from 'react'

function Input({children,...props}) {
  return (
    <>
    <input>{children}</input>
    </>
  )
}

export default Input