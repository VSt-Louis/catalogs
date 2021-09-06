import React from 'react'
import styles from './Modal.module.scss'

type Props = {
  children: React.ReactNode
  dismissable: boolean
  visible?: boolean
  close: () => void
}

export const Modal = ({ children, dismissable, visible, close }: Props) => {
  return visible === false ? null : (
    <div className={styles.Modal} onClick={dismissable ? close : undefined}>
      <div className={styles.modalWindow} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
export default Modal
