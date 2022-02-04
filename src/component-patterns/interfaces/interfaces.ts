import { createContext, ReactElement } from 'react'

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
}

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  product: Product
  incrementBy: (value: number) => void
}

export interface ProductCardHOCProps {
  ({ children, product }: Props): JSX.Element
  Image: ({ img }: { img?: string | undefined }) => JSX.Element
  Title: ({ title }: { title?: string }) => JSX.Element
  Buttons: () => JSX.Element
}

// product context
export const ProductContext = createContext({} as ProductContextProps)
export const { Provider } = ProductContext
