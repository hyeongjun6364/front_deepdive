import React from 'react'
import noProjectImage from '../assets/no-projects.png'
import Button from './Button'
function NoProjectSelected({onStartAddProject}) {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={noProjectImage} alt="An empty task"/>
        <h2>No Project Selected</h2>
        <p>Select a project or get started</p>
        <p><Button onClick={onStartAddProject}>Create new project</Button></p>
    </div>
  )
}

export default NoProjectSelected