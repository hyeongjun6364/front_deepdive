import React, { useContext } from 'react'
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import userContext from '../store/UserProgressContext';
import Button from './UI/Button';
import CartItem from './CartItem';
function Cart() {
    const Cartctx = useContext(CartContext);
    const userCtx = useContext(userContext);
    function handleCloseCart(){
      userCtx.hideCart();
    }
    function handleGotoCheckout(){
      userCtx.showCheckOut();
    }
  return (
    <Modal className='cart' onClose={userCtx.progress==='cart'?handleCloseCart:null} open={userCtx.progress==='cart'}>
      <h2>Your Cart</h2>
      <ul>
        {Cartctx.items.map((item)=>
          <CartItem key={item.id} item={item} quantity={item.quantity} price={item.price} onIncrease={()=>Cartctx.addItem(item)} onDecrease={() => Cartctx.removeItem(item.id)}/>
        )}
      </ul>
      <Button textOnly onClick={handleCloseCart}>Close</Button>
      <Button onClick={handleGotoCheckout}>go to Checkout</Button>
    </Modal>
  )
}

export default Cart