import { useContext } from 'react'

import styles from '../styles/products.module.css'
import { ProductContext } from 'component-patterns/interfaces/interfaces'

export const ProductTitle = ({ title = '' }) => {
  let titleToProps: string = 'No Title'
  const { product } = useContext(ProductContext)

  if (title) {
    titleToProps = title
  } else if (product.title) {
    titleToProps = product.title
  }

  return <span className={styles.productDescription}>{titleToProps}</span>
}
