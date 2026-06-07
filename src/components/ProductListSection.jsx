import data from '../../data.json'
import ProductCard from './ProductCard'

function ProductListSection({ cartItems, onAdd, onIncrement, onDecrement }) {
  return (
    <section aria-labelledby="desserts-heading">
      <h1 id="desserts-heading" className="mb-8 text-preset-1 text-rose-900">
        Desserts
      </h1>

      <div className="flex flex-col gap-6">
        {data.map((product) => {
          const cartItem = cartItems.find((item) => item.name === product.name)
          const quantity = cartItem ? cartItem.quantity : 0

          return (
            <ProductCard
              key={product.name}
              product={product}
              quantity={quantity}
              onAdd={() => onAdd(product)}
              onIncrement={() => onIncrement(product.name)}
              onDecrement={() => onDecrement(product.name)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProductListSection
