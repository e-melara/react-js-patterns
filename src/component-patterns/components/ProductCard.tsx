import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import {
  Provider,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces'

export interface Props {
  value?: number
  product: Product
  className?: string
  initialValue?: InitialValues
  style?: React.CSSProperties
  onChange?: (args: onChangeArgs) => void
  // children?: React.ReactElement | React.ReactElement[]
  children: (args: ProductCardHandlers) => JSX.Element
}

export const ProductCard = ({
  value,
  style,
  product,
  onChange,
  children,
  className,
  initialValue,
}: Props) => {
  const { counter, incrementBy, isMaxCountedReached, reset } = useProduct({
    product: product,
    onChange: onChange,
    value: value,
    initialValue: initialValue,
  })

  return (
    <Provider
      value={{
        product,
        counter,
        incrementBy,
        initialValue,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          // variables
          product,
          counter,
          isMaxCountedReached,

          // functions
          reset,
          incrementBy,
        })}
      </div>
    </Provider>
  )
}
