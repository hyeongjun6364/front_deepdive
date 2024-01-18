import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import CartContext from '../store/CartContext'
import Button from './UI/Button'
function Header() {
    const cartCtx = useContext(CartContext)
  return (
    <header id="main-header">
        <div id="title">
            <img src={logoImg} alt='A restaurant'/>
            <h1>ReactFood</h1>
        </div>
        <Button>Cart(0)</Button>
    </header>
  )
}

export default Header