import { useContext } from 'react'

import styles from '../styles/products.module.css'
import { ProductContext } from 'component-patterns/interfaces/interfaces'

export const ProductButtons = () => {
  const { counter, incrementBy } = useContext(ProductContext)

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => incrementBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => incrementBy(1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  )
}