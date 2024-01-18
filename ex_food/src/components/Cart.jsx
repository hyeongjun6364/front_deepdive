import React, { useContext } from 'react'

function Cart() {
    const Cartctx= useContext();
  return (
    <dialog>
        <button>Close</button>
        <button>gotoCheckout</button>
    </dialog>
  )
}

export default Cart