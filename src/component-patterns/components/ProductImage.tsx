import { useContext } from 'react'

import noImage from '../assets/no-image.jpg'
import styles from '../styles/products.module.css'
import { ProductContext } from 'component-patterns/interfaces/interfaces'

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext)
  let imgToShow: string = noImage

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  }

  return (
    <img className={styles.productImg} src={imgToShow} alt='imgs product' />
  )
}
