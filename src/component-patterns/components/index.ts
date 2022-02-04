// imports
import { ProductCard as ProductCardHOC } from './ProductCard'

import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'

// interfaces
import { ProductCardHOCProps } from '../interfaces/interfaces'

// exports componentes
export { ProductImage } from './ProductImage'
export { ProductTitle } from './ProductTitle'
export { ProductButtons } from './ProductButtons'

export type {
  Product,
  onChangeArgs,
  ProductInCart,
} from '../interfaces/interfaces'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
})

export default ProductCard
