import React, { useRef, useState } from 'react'

function Player() {
    const playerName = useRef()
    const [enteredPlayerName, setEnteredPlayerName] = useState()

    function handleClick(){
        setEnteredPlayerName(playerName.current.value)
        playerName.current.value=''
    }
  return (
    <>
    <input ref={playerName}type='text' />
    <button type='submit' onClick={handleClick}>Set Name</button>
    </>
  )
}

export default Player