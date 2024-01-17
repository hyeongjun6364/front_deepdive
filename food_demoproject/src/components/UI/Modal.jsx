import React, { useEffect,useRef } from 'react'
import {createPortal} from 'react-dom'

function Modal({children, open, className = '',onClose}) {
    const dialog = useRef();

    useEffect(()=>{
      const currentDialog = dialog.current;

      if (open && currentDialog) {
          currentDialog.showModal();
      }
  
      return () => {
          if (currentDialog && currentDialog.close) {
              currentDialog.close();
          }
      };
    },[open])
  return (
    createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
        {children}
    </dialog>,document.getElementById('modal'))
    
  )
}

export default Modal