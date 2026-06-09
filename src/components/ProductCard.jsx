function ProductCard({ product, quantity, onAdd, onIncrement, onDecrement }) {
  const isInCart = quantity > 0
  const imageMobile = product.image.mobile.replace('./assets', '/assets')
  const imageTablet = product.image.tablet.replace('./assets', '/assets')
  const imageDesktop = product.image.desktop.replace('./assets', '/assets')

  return (
    <article className="flex flex-col">
      <div className="relative">
        <picture>
          <source media="(min-width: 1028px)" srcSet={imageDesktop} />
          <source media="(min-width: 768px)" srcSet={imageTablet} />
          <img
            src={imageMobile}
            alt={product.name}
            className={`w-full md:h-[212px] lg:w-[250.67px] lg:h-[240px] rounded-lg object-cover ${
              isInCart ? 'border-2 border-red' : ''
            }`}
          />
        </picture>

        {isInCart ? (
          <div
            className="absolute left-1/2 -bottom-5 flex w-[160px] h-[44px] -translate-x-1/2 items-center justify-between rounded-full bg-red px-3 py-2 text-white"
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
            <span aria-live="polite" className="text-preset-4-bold">
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
            className="absolute left-1/2 -bottom-5 flex w-[160px] h-[44px] -translate-x-1/2 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-rose-300 bg-white text-preset-4-bold text-rose-900 shadow-sm"
          >
            <img src="/assets/images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </button>
        )}
      </div>

      <div className="mt-[38px] flex flex-col">
        <span className="text-preset-4 text-rose-500">{product.category}</span>
        <h2 className="text-preset-3 text-rose-900">{product.name}</h2>
        <span className="text-preset-3 text-red">${product.price.toFixed(2)}</span>
      </div>
    </article>
  )
}

export default ProductCard
