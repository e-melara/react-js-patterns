import ProductCard from '../components'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'

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
          initialValue={{ count: 4, maxCount: 10 }}
        >
          {({ reset, counter, isMaxCountedReached, incrementBy }) => (
            <>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  )
}
