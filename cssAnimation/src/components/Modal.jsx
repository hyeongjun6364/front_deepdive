import { createPortal } from 'react-dom';
import { motion } from 'framer-motion'
export default function Modal({ title, children, onClose }) {
  const hiddenAnimationState = {opacity:0, y:30};
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
      variants={{
        hidden:{opacity:0, y:30},
        visible: {opacity:1, y:0}
      }}
        initial='hidden'//애니메이션의 시작상태를 지정가능
        animate='visible'//모달이 나타난 직후의 상태
        exit='hidden'//dom에서 삭제될때 애니메이션 상태
        open
        className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
