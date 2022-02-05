import ProductCard from '../components'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'

import '../styles/custom-style.css'

export const ShoppingPage = () => {
  const product = products[0]
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
        <ProductCard
          key={product.id}
          product={product}
          className='bg-dark text-white'
          initialValue={{ count: 4, maxCount: 10 }}
        >
          {({ reset, counter, isMaxCountedReached, incrementBy }) => (
            <>
              <ProductCard.Image className='custom-image' />
              <ProductCard.Title className='text-white' />
              <ProductCard.Buttons className='custom-buttons' />
              <hr />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                  <button onClick={() => incrementBy(-2)}>-2</button>
                  <span>{counter}</span>
                  <button onClick={reset}>Reset</button>
                  {!isMaxCountedReached && (
                    <button onClick={() => incrementBy(+2)}>+2</button>
                  )}
                </div>
              </div>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  )
}
