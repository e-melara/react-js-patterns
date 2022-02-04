import { useProduct } from '../hooks/useProduct'

import styles from '../styles/products.module.css'
import { Props, Provider } from '../interfaces/interfaces'

export const ProductCard = ({ product, children }: Props) => {
  const { counter, incrementBy } = useProduct()

  return (
    <Provider
      value={{
        counter: counter,
        incrementBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  )
}
