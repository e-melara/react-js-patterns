import { createContext } from 'react'

import { Props as ImageProps } from '../components/ProductImage'
import { Props as TitleProps } from '../components/ProductTitle'
import { Props as ButtonsProps } from '../components/ProductButtons'
import { Props as ProductPropsHOC } from '../components/ProductCard'

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  product: Product
  initialValue?: InitialValues
  incrementBy: (value: number) => void
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductPropsHOC): JSX.Element
  Image: ({ img, className }: ImageProps) => JSX.Element
  Title: ({ title, className }: TitleProps) => JSX.Element
  Buttons: ({ className }: ButtonsProps) => JSX.Element
}

export interface onChangeArgs {
  product: Product
  count: number
}

export interface ProductInCart extends Product {
  cantidad: number
}

export interface InitialValues {
  count?: number
  maxCount?: number
}

export interface ProductCardHandlers {
  counter: number
  product: Product
  maxCount?: number
  isMaxCountedReached: boolean

  reset: () => void
  incrementBy: (value: number) => void
}

// product context
export const ProductContext = createContext({} as ProductContextProps)
export const { Provider } = ProductContext
