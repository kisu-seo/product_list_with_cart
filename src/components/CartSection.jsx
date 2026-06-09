function CartSection({ cartItems, onRemove, onConfirm }) {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const orderTotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <section
      aria-labelledby="cart-heading"
      className="mt-8 lg:mt-0 rounded-2xl bg-white p-6"
    >
      <h2 id="cart-heading" className="text-preset-2 text-red">
        Your Cart ({totalQuantity})
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-4 pt-6 pb-0">
          <img src="/assets/images/illustration-empty-cart.svg" alt="" />
          <p className="text-preset-4 font-bold text-rose-500 pb-4">Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col">
            {cartItems.map((item) => (
              <li key={item.name} className="flex items-center justify-between gap-3 border-b border-rose-100 py-4">
                <div className="flex flex-col gap-1">
                  <span className="text-preset-4-bold text-rose-900">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-preset-4-bold text-red">{item.quantity}x</span>
                    <span className="text-preset-4 text-rose-400">@ ${item.price.toFixed(2)}</span>
                    <span className="text-preset-4-bold text-rose-400">${(item.quantity * item.price).toFixed(2)}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(item.name)}
                  aria-label={`${item.name} 장바구니에서 제거`}
                  className="flex h-5 w-5 items-center justify-center rounded-full border border-rose-400"
                >
                  <img src="/assets/images/icon-remove-item.svg" alt="" className="pointer-events-none" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between py-6">
            <span className="text-preset-4 text-rose-900">Order Total</span>
            <span className="text-preset-2 text-rose-900">${orderTotal.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-lg bg-rose-50 py-3 text-preset-4 text-rose-900">
            <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
            <span>
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </div>

          <button
            type="button"
            onClick={onConfirm}
            className="mt-6 w-full rounded-full bg-red py-3 text-preset-3 text-white"
          >
            Confirm Order
          </button>
        </>
      )}
    </section>
  )
}

export default CartSection
