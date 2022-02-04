import { useProduct } from '../hooks/useProduct'

import styles from '../styles/products.module.css'
import { Provider, Product } from '../interfaces/interfaces'

export interface Props {
  product: Product
  children?: React.ReactElement | React.ReactElement[]
  className?: string
}

export const ProductCard = ({ product, children, className }: Props) => {
  const { counter, incrementBy } = useProduct()

  return (
    <Provider
      value={{
        counter: counter,
        incrementBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  )
}
