import React from 'react'

function page({params}) {
  return (
    <div>meals Item{params.slug}</div>
  )
}

export default page