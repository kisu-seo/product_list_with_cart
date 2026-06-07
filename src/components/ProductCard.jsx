function ProductCard({ product, quantity, onAdd, onIncrement, onDecrement }) {
  const isInCart = quantity > 0
  const imageBase = product.image.mobile.replace('./assets', '/assets')

  return (
    <article className="flex flex-col">
      <div className="relative">
        <img
          src={imageBase}
          alt={product.name}
          className={`w-full rounded-xl object-cover ${
            isInCart ? 'border-2 border-red' : ''
          }`}
        />

        {isInCart ? (
          <div
            className="absolute left-1/2 -bottom-5 flex w-[140px] -translate-x-1/2 items-center justify-between rounded-full bg-red px-2 py-2 text-white"
            role="group"
            aria-label={`${product.name} 수량 조절`}
          >
            <button
              type="button"
              onClick={onDecrement}
              aria-label="수량 줄이기"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-white"
            >
              <img src="/assets/images/icon-decrement-quantity.svg" alt="" className="pointer-events-none" />
            </button>
            <span aria-live="polite" className="text-sm font-medium">
              {quantity}
            </span>
            <button
              type="button"
              onClick={onIncrement}
              aria-label="수량 늘리기"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-white"
            >
              <img src="/assets/images/icon-increment-quantity.svg" alt="" className="pointer-events-none" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onAdd}
            className="absolute left-1/2 -bottom-5 flex w-[140px] -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-rose-300 bg-white px-4 py-2 text-sm font-semibold text-rose-900 shadow-sm"
          >
            <img src="/assets/images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </button>
        )}
      </div>

      <div className="mt-7 flex flex-col">
        <span className="text-sm text-rose-500">{product.category}</span>
        <h2 className="text-base font-semibold text-rose-900">{product.name}</h2>
        <span className="text-sm font-semibold text-red">${product.price.toFixed(2)}</span>
      </div>
    </article>
  )
}

export default ProductCard
