import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import CartContext from '../store/CartContext'
import Button from './UI/Button'
import userContext from '../store/UserProgressContext'
function Header() {
    const cartCtx = useContext(CartContext)
    const userCtx = useContext(userContext)
    const totalCartItems = cartCtx.items.reduce((
      total,item)=>{
      return(total+item.quantity)},0)
    function handleShowCart (){
      userCtx.showCart();
    }
  return (
    <header id="main-header">
        <div id="title">
            <img src={logoImg} alt='A restaurant'/>
            <h1>ReactFood</h1>
        </div>
        <Button onClick={handleShowCart}>Cart({totalCartItems})</Button>
    </header>
  )
}

export default Header