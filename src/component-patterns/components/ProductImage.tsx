import { useContext } from 'react'

import noImage from '../assets/no-image.jpg'
import styles from '../styles/products.module.css'

import { ProductContext } from 'component-patterns/interfaces/interfaces'

export interface Props {
  img?: string
  className?: string
}

export const ProductImage = ({ img, className }: Props) => {
  const { product } = useContext(ProductContext)
  let imgToShow: string = noImage

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt='imgs product'
    />
  )
}
