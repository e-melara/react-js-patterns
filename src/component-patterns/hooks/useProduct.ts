import { useState, useEffect, useRef } from 'react'

import { onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  value?: number
  onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value)
  const isController = useRef(!!onChange)

  const incrementBy = (value: number) => {
    if (isController.current) {
      return onChange!({ count: value, product })
    }
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
    onChange && onChange({ count: newValue, product: product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return { counter, incrementBy }
}
