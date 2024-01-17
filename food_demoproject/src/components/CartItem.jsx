import React, { useContext } from 'react'
import { currencyFormatter } from '../util/formatting'
import CartContext from '../store/CartContext'

function CartItem({name, quantity, price, onIncrease, onDecrease}) {
    
  return (
    <li className='cart-item'>
        <p>
           {name} - {quantity} x {currencyFormatter.format(price) }
        </p>
        <p className='cart-item-actions'>
            <button onClick={onDecrease}> - </button>
            <span>QTY</span>
            <button onClick={onIncrease}> + </button>
        </p>
    </li>
  )
}

export default CartItem