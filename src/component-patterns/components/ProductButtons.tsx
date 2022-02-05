import { useContext, useCallback } from 'react'

import styles from '../styles/products.module.css'
import { ProductContext } from 'component-patterns/interfaces/interfaces'

export interface Props {
  className?: string
}

export const ProductButtons = ({ className }: Props) => {
  const { counter, incrementBy, initialValue } = useContext(ProductContext)

  const isMaxReached = useCallback(() => {
    if (!initialValue?.maxCount) {
      return false
    }    
    return counter === initialValue?.maxCount
  }, [counter, initialValue?.maxCount])

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => incrementBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => incrementBy(1)} className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}>
        +
      </button>
    </div>
  )
}
