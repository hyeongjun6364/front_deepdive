import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import userContext from '../store/UserProgressContext'
import Button from './UI/Button'
import Input from './UI/Input'
import useHttp from '../hook/useHttp'
import { currencyFormatter } from '../util/CurrencyFormatter'
const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

function Checkout() {
  const cartCtx = useContext(CartContext)
  const userCtx = useContext(userContext)
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

  const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp('http://localhost:3000/orders', requestConfig)
  function handleClose() {
    userCtx.hideCheckOut()
  }
  function handleFinish(){
    userCtx.hideCheckOut();
    cartCtx.clearCart()
    clearCart()
  }
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
  
    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData
        }
      })
    );
  
    userCtx.hideCheckOut();
  }
  
  if(data && !error){
    return(<Modal open={userCtx.progress === 'checkout'} onClose={handleFinish}>
      <h2>Success</h2>
      <p>Your order was submittyed successfully.</p>
        <p className='modal-actions'>
            <Button onClick={handleFinish }>Okay</Button>
        </p>
    </Modal>)
  }
  let actions = (<>
    <Button type="button" textOnly onClick={handleClose}>Close</Button>
    <Button >Submit Order</Button>
</>)
  return (
    <Modal open={userCtx.progress === 'checkout'}>
      <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label="Full Name" type="text" id="name" />
                <Input label="E-Mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className='control-row'>
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="city" type="text" id="city" />
                </div>

                {error && <Error title="Failed to submit order" message={error} />}

                <p className='modal-actions'>
                    {actions}
                </p>
      </form>

    </Modal>
  )
}

export default Checkout