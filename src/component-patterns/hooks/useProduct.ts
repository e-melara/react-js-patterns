import { useState, useEffect, useRef } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  value?: number
  initialValue?: InitialValues
  onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValue,
}: useProductArgs) => {
  const isMounted = useRef(false)
  const [counter, setCounter] = useState<number>(initialValue?.count || value)

  const reset = () => {
    setCounter(initialValue?.count || value)
  }

  const incrementBy = (valor: number) => {
    let newValue = Math.max(valor + counter, 0)
    if (initialValue?.maxCount) {
      newValue = Math.min(newValue, initialValue?.maxCount)
    }
    setCounter(newValue)
    onChange && onChange({ count: newValue, product: product })
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    isMaxCountedReached:
      !!initialValue?.maxCount && initialValue.maxCount === counter,

    reset,
    incrementBy,
  }
}
