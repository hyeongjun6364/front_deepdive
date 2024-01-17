import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../util/formatting'
import UserProgressContext from '../store/UserProgressContext'
import Button from './UI/Button'
import CartItem from './CartItem'
function Cart() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }
  function handleGotoCheckout(){
    userProgressCtx.showCheckout();
  }
  //onClose는 esc로 눌렀을때도 상태를 변경할 수 있게 도와준다
  return (
    <Modal className='cart' onClose={userProgressCtx.progress==='cart'? handleCloseCart : null} open={userProgressCtx.progress === 'cart' }>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) =>
          <CartItem key={item.id} item={item} quantity={item.quantity} price={item.price} onIncrease={()=> cartCtx.addItem(item)} onDecrease={()=> cartCtx.removeItem(item.id)}/>
        )}
      </ul>
      <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
      <p className='modal-actions'>
        <Button textOnly onClick={handleCloseCart}>Close</Button>
        {cartCtx.items.length > 0 && <Button onClick={handleGotoCheckout}>Go to Checkout</Button>}
        
      </p>
    </Modal>

  )
}

export default Cart