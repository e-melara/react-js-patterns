import ProductCard from '../components'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'

import '../styles/custom-style.css'

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.cantidad}
          >
            <ProductCard.Image className='custom-image' />
            <ProductCard.Title className='text-white' />
            <ProductCard.Buttons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([_, product]) => (
          <ProductCard
            key={product.id}
            product={product}
            value={product.cantidad}
            style={{ width: '100px' }}
            onChange={onProductCountChange}
            className='bg-dark text-white'
          >
            <ProductCard.Image className='custom-image' />
            <ProductCard.Buttons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
