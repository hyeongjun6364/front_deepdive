import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import userContext from '../store/UserProgressContext'
import Button from './UI/Button'

function Checkout() {
    const cartCtx= useContext(CartContext)
    const userCtx=useContext(userContext)
    function handleClose(){
        userCtx.hideCheckOut()
    }
  return (
    <Modal open={userCtx.progress==='checkout'}>
        <Button onClick={handleClose}>Close</Button>
    </Modal>
  )
}

export default Checkout