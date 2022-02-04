import { useState } from 'react'

import { ProductInCart, onChangeArgs } from '../interfaces/interfaces'

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    setShoppingCart(oldState => {
      const productInCart: ProductInCart = oldState[product.id] || {
        ...product,
        cantidad: 0,
      }

      if (Math.max(productInCart.cantidad + count, 0) > 0) {
        productInCart.cantidad += count
        return {
          ...oldState,
          [product.id]: productInCart,
        }
      }
      const { [product.id]: toDelete, ...rest } = oldState
      return rest
    })
  }

  return {
    shoppingCart,
    onProductCountChange,
  }
}
