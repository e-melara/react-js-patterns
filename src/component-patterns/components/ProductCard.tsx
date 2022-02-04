import { useProduct } from '../hooks/useProduct'

import styles from '../styles/products.module.css'
import { Provider, Product, onChangeArgs } from '../interfaces/interfaces'

export interface Props {
  value?: number
  product: Product
  className?: string
  style?: React.CSSProperties
  onChange?: (args: onChangeArgs) => void
  children?: React.ReactElement | React.ReactElement[]
}

export const ProductCard = ({
  value,
  style,
  product,
  onChange,
  children,
  className,
}: Props) => {
  const { counter, incrementBy } = useProduct({
    product: product,
    onChange: onChange,
    value: value,
  })

  return (
    <Provider
      value={{
        counter: counter,
        incrementBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  )
}
